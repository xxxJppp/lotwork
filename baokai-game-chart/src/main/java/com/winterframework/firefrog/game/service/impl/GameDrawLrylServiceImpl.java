package com.winterframework.firefrog.game.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.winterframework.firefrog.game.entity.GameLryl;
import com.winterframework.firefrog.game.service.IGameDrawLrylService;

/** 
* @ClassName: GameDrawLrylServiceImpl 
* @Description: 游戏开奖结果冷热遗漏Service实现类 
* @author Denny 
* @date 2013-12-20 下午3:54:19 
*  
*/
@Service("gameDrawLrylServiceImpl")
@Transactional(rollbackFor = Exception.class)
public class GameDrawLrylServiceImpl implements IGameDrawLrylService, ApplicationContextAware {

	private static final Logger log = LoggerFactory.getLogger(GameDrawLrylServiceImpl.class);

	@Resource(name = "gameDrawLrylCommonServiceImpl")
	private IGameDrawLrylService gameDrawLrylCommonService;
	private final static Map<String, String> serviceMap = new HashMap<String, String>();

	static {
		serviceMap.put("common", "gameDrawLrylCommonServiceImpl");
		serviceMap.put("subcommon", "gameDrawLrylSubCommonServiceImpl");
		serviceMap.put("hezhi", "gameDrawLrylHezhiServiceImpl");
		serviceMap.put("kuadu", "gameDrawLrylKuaduServiceImpl");
	}

	private ApplicationContext ctx;

	private Object getBean(Integer betMethodCode, Long lotteryid) {

		String key = "";
		if (null == betMethodCode) {
			log.error("传入参数不能为NULL，");
			return null;
		}
		if (!(lotteryid+"").startsWith("995")) {
			if (betMethodCode == 33) {
				key = "hezhi";
			} else if (betMethodCode == 34) {
				key = "kuadu";
			} else {
				key = "common";
			}
		} else {
			key = "subcommon";
		}
		String beanId = serviceMap.get(key).toString();
		if (!StringUtils.isEmpty(beanId)) {
			return ctx.getBean(beanId);
		}

		return null;
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.ctx = applicationContext;
	}

	@Override
	public List<GameLryl> queryColdAndHotNumbers(long lotteryId, int gameGroupCode, int gameSetCode, int betMethodCode,
			int countIssue) throws Exception {
		IGameDrawLrylService service = (IGameDrawLrylService) getBean(betMethodCode, lotteryId);
		return service.queryColdAndHotNumbers(lotteryId, gameGroupCode, gameSetCode, betMethodCode, countIssue);
	}

	@Override
	public List<GameLryl> queryMissingValue(long lotteryId, int gameGroupCode, int gameSetCode, int betMethodCode,
			int queryType) throws Exception {
		/*if (lotteryId == 99501l) {
			return ((IGameDrawLrylService) ctx.getBean("gameDrawLrylSubCommonServiceImpl")).queryMissingValue(
					lotteryId, gameGroupCode, gameSetCode, betMethodCode, queryType);
		} else {*/
			return this.gameDrawLrylCommonService.queryMissingValue(lotteryId, gameGroupCode, gameSetCode,
					betMethodCode, queryType);
		//}
	}

	//@Override
	public List<GameLryl> queryMissingValue_bk(long lotteryId, int gameGroupCode, int gameSetCode, int betMethodCode,
			int queryType) throws Exception {
		IGameDrawLrylService service = (IGameDrawLrylService) getBean(betMethodCode, lotteryId);
		return service.queryMissingValue(lotteryId, gameGroupCode, gameSetCode, betMethodCode, queryType);
	}

}