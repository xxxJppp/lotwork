package com.winterframework.firefrog.beginmession.enums;
/**
 * 
 * @author Ami.Tsai
 *
 */
public class BeginMissionEnum {
	
	public enum LogType{
		
		NEW_MISSION(0L),
		DAILY_MISSION(1L),
		private Long type;
		
		private LogType(Long type){
			this.type = type;
		}
		
		public Long getType(){
			return type;
		}
	}
}