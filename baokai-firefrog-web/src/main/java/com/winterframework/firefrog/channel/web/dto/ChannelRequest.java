package com.winterframework.firefrog.channel.web.dto;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.NotNull;

public class ChannelRequest implements Serializable{
		
	@NotNull
	private Long id;
	private String name;
	private String url;
	@NotNull
	private Long vaild;
	private Date end_time;
	@NotNull
	private Long frequency;
	@NotNull
	private Long frequency_time;
	@NotNull
	private Long freeze;
	@NotNull
	private Long freeze_time;
	private Long ip;
	private Long ip_time;
	private Long reset;
	private String end_timeStr;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Long getVaild() {
		return vaild;
	}
	public void setVaild(Long vaild) {
		this.vaild = vaild;
	}
	public Date getEnd_time() {
		return end_time;
	}
	public void setEnd_time(Date end_time) {
		this.end_time = end_time;
	}
	public Long getFrequency() {
		return frequency;
	}
	public void setFrequency(Long frequency) {
		this.frequency = frequency;
	}
	public Long getFrequency_time() {
		return frequency_time;
	}
	public void setFrequency_time(Long frequency_time) {
		this.frequency_time = frequency_time;
	}
	public Long getFreeze() {
		return freeze;
	}
	public void setFreeze(Long freeze) {
		this.freeze = freeze;
	}
	public Long getFreeze_time() {
		return freeze_time;
	}
	public void setFreeze_time(Long freeze_time) {
		this.freeze_time = freeze_time;
	}
	public Long getIp() {
		return ip;
	}
	public void setIp(Long ip) {
		this.ip = ip;
	}
	public Long getIp_time() {
		return ip_time;
	}
	public void setIp_time(Long ip_time) {
		this.ip_time = ip_time;
	}
	public Long getReset() {
		return reset;
	}
	public void setReset(Long reset) {
		this.reset = reset;
	}
	public String getEnd_timeStr() {
		return end_timeStr;
	}
	public void setEnd_timeStr(String end_timeStr) {
		this.end_timeStr = end_timeStr;
	}
}