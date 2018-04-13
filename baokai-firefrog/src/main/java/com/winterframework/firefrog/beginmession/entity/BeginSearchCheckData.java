package com.winterframework.firefrog.beginmession.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * @author Ray.Wang
 *
 */
public class BeginSearchCheckData implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2219511895093183461L;

	private Integer index; 
	
	private Long id;
	
	private Long userId;

	private Date createTime;

	private Date checkTime;

	private Long checkStatus;

	private String checkUser;

	private String bankNum;

	private String accountName;
	
	private String city;
	
	private Date chargeTime;
	
	private Long chargeAmt;
	
	private Date withdrawTime;
	
	private Long withdrawAmt;
	
	private Long totAmount;
	
	private Date registerDate;
	
	private String registerIp;
	
	private String device;
	
	private String account;
	
	private String parentAccount;
	
	private String chain0;
	
	private String chain1;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getIndex() {
		return index;
	}

	public void setIndex(Integer index) {
		this.index = index;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getCheckTime() {
		return checkTime;
	}

	public void setCheckTime(Date checkTime) {
		this.checkTime = checkTime;
	}

	public Long getCheckStatus() {
		return checkStatus;
	}

	public void setCheckStatus(Long checkStatus) {
		this.checkStatus = checkStatus;
	}

	public String getCheckUser() {
		return checkUser;
	}

	public void setCheckUser(String checkUser) {
		this.checkUser = checkUser;
	}

	public String getBankNum() {
		return bankNum;
	}

	public void setBankNum(String bankNum) {
		this.bankNum = bankNum;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Date getChargeTime() {
		return chargeTime;
	}

	public void setChargeTime(Date chargeTime) {
		this.chargeTime = chargeTime;
	}

	public Long getChargeAmt() {
		return chargeAmt;
	}

	public void setChargeAmt(Long chargeAmt) {
		this.chargeAmt = chargeAmt;
	}

	public Date getWithdrawTime() {
		return withdrawTime;
	}

	public void setWithdrawTime(Date withdrawTime) {
		this.withdrawTime = withdrawTime;
	}

	public Long getWithdrawAmt() {
		return withdrawAmt;
	}

	public void setWithdrawAmt(Long withdrawAmt) {
		this.withdrawAmt = withdrawAmt;
	}

	public Long getTotAmount() {
		return totAmount;
	}

	public void setTotAmount(Long totAmount) {
		this.totAmount = totAmount;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}

	public String getRegisterIp() {
		return registerIp;
	}

	public void setRegisterIp(String registerIp) {
		this.registerIp = registerIp;
	}

	public String getDevice() {
		return device;
	}

	public void setDevice(String device) {
		this.device = device;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}
	
	public String getParentAccount() {
		return parentAccount;
	}

	public void setParentAccount(String parentAccount) {
		this.parentAccount = parentAccount;
	}

	public String getChain0() {
		return chain0;
	}

	public void setChain0(String chain0) {
		this.chain0 = chain0;
	}

	public String getChain1() {
		return chain1;
	}

	public void setChain1(String chain1) {
		this.chain1 = chain1;
	}

//	public String getUserChain() {
//		return userChain;
//	}
//
//	public void setUserChain(String userChain) {
//		this.userChain = userChain;
//	}
}