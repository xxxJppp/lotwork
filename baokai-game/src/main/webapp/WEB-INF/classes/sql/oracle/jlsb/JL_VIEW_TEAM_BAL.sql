DROP VIEW FIREFOG.VIEW_USER_CUSTOMER_TEAM_BAL;

/* Formatted on 2016/7/29 �W�� 11:05:49 (QP5 v5.256.13226.35510) */
CREATE OR REPLACE FORCE VIEW FIREFOG.VIEW_USER_CUSTOMER_TEAM_BAL
(
   PHONE_SERIAL_NUM,
   ID,
   ACCOUNT,
   PASSWD,
   PASSWD_LVL,
   MODIFY_PASSWD_DATE,
   WITHDRAW_PASSWD,
   CIPHER,
   SEX,
   EMAIL,
   EMAIL_ACTIVED,
   CELLPHONE,
   BIRTHDAY,
   QQ_STRUCTURE,
   IS_FREEZE,
   USER_LVL,
   QU_STRUC,
   WITHDRAW_PASSWD_ACTIVE_DATE,
   QUESTION_STRUCTURE_ACTIVE_DATE,
   REGISTER_IP,
   REGISTER_DATE,
   PARENT_ID,
   USER_CHAIN,
   LAST_LOGIN_DATE,
   TERM_A_COUNT,
   FREEZE_DATE,
   FREEZER,
   VIP_CELLPHONE,
   TERM_U_ACCOUNT,
   AGENT_LIMIT,
   FREEZE_METHOD,
   LAST_LOGIN_IP,
   FREEZE_MEMO,
   FREEZE_ACCOUNT,
   UNFREEZE_DATE,
   FREEZE_ID,
   VIP_LVL,
   REFERER,
   URL_ID,
   AWARD_RET_STATUS,
   PHONE_TYPE,
   UNBIND_TYPE,
   BIND_PHONE_SERIAL,
   BIND_DATE,
   BAL,
   SOURCE,
   DEVICE,
   SUPER_PAIR_STATUS,
   HEAD_IMG,
   NICK_UPDATE_TIME,
   NICK_NAME,
   SUMBAL,
   LHC_STATUS
)
AS
     SELECT a.PHONE_SERIAL_NUM,
            a."ID",
            a."ACCOUNT",
            a."PASSWD",
            a."PASSWD_LVL",
            a."MODIFY_PASSWD_DATE",
            a."WITHDRAW_PASSWD",
            a."CIPHER",
            a."SEX",
            a."EMAIL",
            a."EMAIL_ACTIVED",
            a."CELLPHONE",
            a."BIRTHDAY",
            a."QQ_STRUCTURE",
            a."IS_FREEZE",
            a."USER_LVL",
            a."QU_STRUC",
            a."WITHDRAW_PASSWD_ACTIVE_DATE",
            a."QUESTION_STRUCTURE_ACTIVE_DATE",
            a."REGISTER_IP",
            a."REGISTER_DATE",
            a."PARENT_ID",
            a."USER_CHAIN",
            a."LAST_LOGIN_DATE",
            a."TERM_A_COUNT",
            a."FREEZE_DATE",
            a."FREEZER",
            a."VIP_CELLPHONE",
            a."TERM_U_ACCOUNT",
            a."AGENT_LIMIT",
            a."FREEZE_METHOD",
            a."LAST_LOGIN_IP",
            a."FREEZE_MEMO",
            a."FREEZE_ACCOUNT",
            a."UNFREEZE_DATE",
            a."FREEZE_ID",
            a."VIP_LVL",
            a."REFERER",
            a."URL_ID",
            a."AWARD_RET_STATUS",
            a.phone_type,
            a.unbind_type,
            a.bind_phone_serial,
            a.bind_date,
            c.bal,
            a.source,
            a.device,
            a.SUPER_PAIR_STATUS,
            a.HEAD_IMG,
            a.NICK_UPDATE_TIME,
            a.NICK_NAME,
            NVL (b.sumbal, 0) AS sumbal,
            a.lhc_status AS LHC_STATUS
       FROM USER_CUSTOMER A, fund c, view_team_bal b
      WHERE a.id = c.user_id(+) AND a.id = b.id(+)
   ORDER BY a.id DESC;