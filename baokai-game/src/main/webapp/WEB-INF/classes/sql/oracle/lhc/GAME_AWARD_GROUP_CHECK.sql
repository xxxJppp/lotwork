ALTER TABLE GAME_AWARD_GROUP_CHECK ADD LHC_YEAR NUMBER;
ALTER TABLE GAME_AWARD_GROUP_CHECK ADD LHC_COLOR NUMBER;
COMMENT ON COLUMN "GAME_AWARD_GROUP_CHECK"."LHC_YEAR" IS '六合彩生肖返點';
COMMENT ON COLUMN "GAME_AWARD_GROUP_CHECK"."LHC_COLOR" IS '六合彩兩面色波返點';



