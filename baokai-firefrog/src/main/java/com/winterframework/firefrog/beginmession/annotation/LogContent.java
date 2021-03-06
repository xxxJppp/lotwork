package com.winterframework.firefrog.beginmession.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;


@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface LogContent {
	String  title() default "";
	boolean lotteryType() default false;
	boolean lotteryUnit() default false;
}
