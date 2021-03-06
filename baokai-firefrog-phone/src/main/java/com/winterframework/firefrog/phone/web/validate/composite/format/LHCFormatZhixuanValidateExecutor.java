package com.winterframework.firefrog.phone.web.validate.composite.format;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.winterframework.firefrog.common.validate.business.CompositeValidateExecutor;
import com.winterframework.firefrog.common.validate.business.IValidateExecutorContext;
import com.winterframework.firefrog.game.entity.GameSlip;
import com.winterframework.firefrog.game.exception.GameBetContentPatternErrorException;
import com.winterframework.firefrog.phone.web.validate.business.BetValidateContext;
import com.winterframework.firefrog.phone.web.validate.impl.ssc.ValidateUtils;

/**
 * @author 
 * @ClassName: LHCFormatZhixuanValidateExecutor
 * @Description: 六合彩直选格式验证
 * @date 2016/5/9 14:22
 */
public class LHCFormatZhixuanValidateExecutor extends CompositeValidateExecutor<GameSlip> {
	private static Logger log = LoggerFactory.getLogger(LHCFormatZhixuanValidateExecutor.class);
    private Map<Integer, Integer> numMap;

    public void setNumMap(Map<Integer, Integer> numMap) {
        this.numMap = numMap;
    }

    @Override
    public void execute(GameSlip validatedBean, IValidateExecutorContext context) throws Exception {
        String[] bets = ValidateUtils.convertBet2String(validatedBean.getBetDetail(),  validatedBean.getGameOrder().getFileMode().getValue(), ",");
        //如果投注数量小于任选数量抛出异常
        Integer num = numMap.get(validatedBean.getGameBetType().getBetMethodCode());
        if (bets.length < num) throw new GameBetContentPatternErrorException();
        ValidateUtils.checkRepeat(bets);
        for (String bet : bets) {
            try {
            	//若投注號碼不為2碼也是錯誤格式
                if (Integer.parseInt(bet) > 49 || Integer.parseInt(bet) <= 0 || bet.length()!=2) throw new GameBetContentPatternErrorException();
            } catch (NumberFormatException e) {
                log.error("投注内容格式有误,有重复");
                throw new GameBetContentPatternErrorException();
            }
        }
        ((BetValidateContext) context).setBets(bets);
    }
}
