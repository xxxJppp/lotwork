package com.winterframework.firefrog.acl.web.dto;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

import com.winterframework.modules.validate.FFLength;

public class AclUserLoginRequest implements Serializable {
	private static final long serialVersionUID = -6857553049874227345L;
	
	@NotNull
	@FFLength(max = 16, min = 4)
	private String account;
	@NotNull
	private String passwd;
	
	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

}
