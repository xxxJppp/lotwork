package com.winterframework.firefrog.game.web.dto;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

public class StopGameIssueRuleAddOrUpdateRequest implements Serializable {

	private static final long serialVersionUID = -4975373561714269943L;

	@NotNull
	private Long lotteryId;
	@NotNull
	private String issueRulesName;
	@NotNull
	private Long ruleStartTime;
	private Long ruleId;
	private Long ruleEndTime;
	private Integer operationType;//1新增，2 修改
	private Long stopStartTime;
	private Long stopEndTime;
	private String openAwardPeriod;
	
	private Long seriesIssueCode;

	
	public Long getSeriesIssueCode() {
		return seriesIssueCode;
	}

	public void setSeriesIssueCode(Long seriesIssueCode) {
		this.seriesIssueCode = seriesIssueCode;
	}

	public Long getLotteryId() {
		return lotteryId;
	}

	public void setLotteryId(Long lotteryId) {
		this.lotteryId = lotteryId;
	}

	public String getIssueRulesName() {
		return issueRulesName;
	}

	public void setIssueRulesName(String issueRulesName) {
		this.issueRulesName = issueRulesName;
	}

	public Long getRuleStartTime() {
		return ruleStartTime;
	}

	public void setRuleStartTime(Long ruleStartTime) {
		this.ruleStartTime = ruleStartTime;
	}

	public Long getRuleEndTime() {
		return ruleEndTime;
	}

	public void setRuleEndTime(Long ruleEndTime) {
		this.ruleEndTime = ruleEndTime;
	}

	public Integer getOperationType() {
		return operationType;
	}

	public void setOperationType(Integer operationType) {
		this.operationType = operationType;
	}

	public Long getRuleId() {
		return ruleId;
	}

	public void setRuleId(Long ruleId) {
		this.ruleId = ruleId;
	}

	public Long getStopStartTime() {
		return stopStartTime;
	}

	public void setStopStartTime(Long stopStartTime) {
		this.stopStartTime = stopStartTime;
	}

	public Long getStopEndTime() {
		return stopEndTime;
	}

	public void setStopEndTime(Long stopEndTime) {
		this.stopEndTime = stopEndTime;
	}

	public String getOpenAwardPeriod() {
		return openAwardPeriod;
	}

	public void setOpenAwardPeriod(String openAwardPeriod) {
		this.openAwardPeriod = openAwardPeriod;
	}
}
