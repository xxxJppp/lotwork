package com.winterframework.firefrog.active.dao.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.winterframework.firefrog.active.dao.IActivityConfigDao;
import com.winterframework.firefrog.active.dao.vo.ActivityConfig;
import com.winterframework.orm.dal.ibatis3.BaseIbatis3Dao;

@Repository("activityConfigDaoImpl")
public class ActivityConfigDaoImpl  extends BaseIbatis3Dao<ActivityConfig> implements IActivityConfigDao{
	@SuppressWarnings("unused")
	private Logger log = LoggerFactory.getLogger(ActivityConfigDaoImpl.class);
	@Override
	public ActivityConfig getActCfgById(Long act_id) {
		return sqlSessionTemplate.selectOne("getActCfgById",act_id);
	}
	@Override
	public ActivityConfig getActCfg(ActivityConfig actCfgVO) {
		return sqlSessionTemplate.selectOne("queryActivityConfigByType",actCfgVO);
	}
	@Override
	public List<ActivityConfig> getActCfgByCondition(ActivityConfig actCfgVO) {
		return sqlSessionTemplate.selectList("queryActivityConfigByCondition",actCfgVO);
	}
	@Override
	public String getMaxDrawType(Long id, Long betAmount) {
		Map<String,Object> param = new HashMap<String,Object>();
		param.put("activityId", id);
		param.put("betAmount", betAmount);		
		return sqlSessionTemplate.selectOne("getMaxDrawType",param);
	}
	

	@Override
	public ActivityConfig getActivityConfigByTime(Date now) {
		return sqlSessionTemplate.selectOne("getActivityConfigByTime", now);
	}
}