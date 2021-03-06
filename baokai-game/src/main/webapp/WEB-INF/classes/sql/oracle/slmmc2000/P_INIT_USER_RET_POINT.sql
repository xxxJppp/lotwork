create or replace procedure P_INIT_USER_RET_POINT(p_lotteryId varchar2) is
  /*
  秒秒彩2000已开户用户（非总代）返点初始化
  需求：
  老用户和老注册链接------总返点8%，总代 1代 2代保持0%的返点点差，2代以下按照逐级-0.0%的规则，需要在注册链接内赋予对应的返点值。
  新注册链接 --- 开户的新用户，按照4.0现有的规则进行设置。
  仅允许执行一次（无法识别首次初始化之后的数据有没被修改）
  e.g.
  begin
    P_INIT_USER_RET_POINT(99113);
    --commit;
   end;
  */
  cursor cur_user is
    select id, user_chain, source from user_customer where user_lvl <> 0;
  n_userId       number;
  v_userChain    user_customer.user_chain%type;
  v_source       user_customer.source%type;
  i              number;
  c              number;
  n_step1        number := 0;
  n_step2        number := 0;
  n_isOld        number := 0;
  n_slipLvl      number := 2;
  n_decRet       number := 0;
  n_ret          number := 0;
  n_agentTotal1  number := 0;
  n_agentTotal2  number := n_agentTotal1;
  n_awardGroupId number;
  n_count        number;
begin
  begin
    select id, direct_ret, direct_ret
      into n_awardGroupId, n_agentTotal1, n_agentTotal2
      from game_award_group
     where lotteryId = p_lotteryId;
  exception
    when no_data_found then
      raise_application_error(-20001, '系统奖金组未初始化');
  end;
  if n_awardGroupId is not null then
    open cur_user;
    loop
      fetch cur_user
        into n_userId, v_userChain, v_source;
      exit when cur_user%notfound;
      --计算返点值
      c           := -1;
      n_decRet    := 0;
      n_isOld := case
                   when v_source = '3.0' then
                    1
                   else
                    0
                 end;
      v_userChain := substr(v_userChain, 2);
      i           := instr(v_userChain, '/', 1);
      while i > 1 loop
        v_userChain := substr(v_userChain, i + 1);
        i           := instr(v_userChain, '/', 1);
        c           := c + 1;
      end loop;
      if c > 0 then
        if c <= n_slipLvl then
          n_decRet := c * n_step1;
        else
          n_decRet := n_slipLvl * n_step1 + (c - n_slipLvl) * n_step2;
        end if;
      end if;
      if n_isOld = 1 then
        n_ret := n_agentTotal1 - n_decRet;
      else
        n_ret := n_agentTotal2 - n_decRet;
      end if;
    
      if n_ret < 0 then
        n_ret := 0;
      end if;
      dbms_output.put_line(n_agentTotal2);
    
      --已经初始化奖金组
      select count(1)
        into n_count
        from game_award_user_group
       where userid = n_userId
         and lotteryId = p_lotteryId;
      if n_count > 0 then
        --一个奖金组 (无不定位返点）
        update game_award_user_group
           set direct_ret = n_ret, threeone_ret = 0, update_time = sysdate
         where lotteryid = p_lotteryId
           and userid = n_userId;
           commit;
      else
        insert into game_award_user_group
          (ID,
           LOTTERYID,
           DIRECT_RET,
           THREEONE_RET,
           CREATE_TIME,
           UPDATE_TIME,
           USERID,
           SET_TYPE,
           STATUS,
           BET_TYPE,
           SYS_AWARD_GROUP_ID)
        VALUES
          (SEQ_GAME_AWARD_USER_GROUP_ID.Nextval,
           p_lotteryId,
           n_ret,
           0,
           sysdate,
           sysdate,
           n_userId,
           1,
           1,
           1,
           n_awardGroupId);
           commit;
      end if;
    end loop;
    close cur_user;
  end if;
exception
  when others then
    dbms_output.put_line(sqlerrm);
    

end P_INIT_USER_RET_POINT;