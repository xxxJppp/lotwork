<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="f" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="pg" uri="/tag-page"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
	<title>平台升级活动</title>
	<style>
	.j-ui-tip {background:#FFFFE1;border:1px solid #CCC;color:#333;font-size:12px;}
	.j-ui-tip .sj {display:none;}
	</style>
	<script type="text/javascript">
		var baseUrl = '${currentContextPath}';
	
	</script>
	
</head>
<body>
	
		<div class="col-main">
			<!-- 从被装饰页面获取body标签内容 -->
			
			<div class="col-crumbs">
			<div class="crumbs">
				<strong>当前位置：</strong><a href="#">活动</a>>中奖结果查询
			</div>
			</div>
			<div class="col-content">
				<div class="col-main">
					<div class="main">
						<div class="ui-tab">
							<div class="ui-tab-title clearfix">
								<ul>
										<li ><a href="${currentContextPath}/gameoa/queryActivityHongBaoLog">红包明细查询</a></li>
									<li><a class="current" href="${currentContextPath}/gameoa/queryActivityChouJianUserLog">抽奖用户查询</a></li>
                                    <li ><a href="${currentContextPath}/gameoa/queryActivityChouJianLog">中奖结果查询</a></li>
									<li ><a href="${currentContextPath}/gameoa/queryActivityConfig">中奖概率配置</a></li>
								</ul>
							</div>
							<div class="clearfix">
						<form action="queryActivityChouJianUserLog" method="post" id="J-search-form">
						<ul class="ui-search" id="J-search-panel">
							<li>
								<label for="" class="ui-label">用户名：</label>
								<input type="text" id="userName" name="userName" class="input w-3">
							</li>
							<li>
							<input id="submit" class="btn btn-primary" type="submit" value="搜 索">
								
							
							</li>
						</ul>
					
						<table class="table table-info" id="J-table">
							<thead>
								<tr>
									<th>用户名</th>
									<th>总抽奖次数</th>
									<th>未使用次数</th>
									<th>已使用次数</th>
									<th>中奖次数</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>kukucai</th>
									<th>20</th>
									<th>10</th>
									<th>10</th>
									<th>1</th>
								</tr>
							</tbody>
						</table>
							<c:if test="${page!=null}">
				        	<pg:page totalCount="${page.totalCount}" pageNo="${page.pageNo}" pageSize="${page.pageSize}"/>
						
							</c:if>
					</form>		
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		
	$('.menu-list li').removeAttr("class");
	$('.menu-list li:eq(6)').attr("class","current"); 
	$('.col-side .nav dd:eq(8)').attr("class","current");
	</script>
	<script type="text/javascript" src="${staticFileContextPath}/static/js/paging/paging.js"></script>
	<script type="text/javascript" src="${staticFileContextPath}/static/js/operations/order/manualRecord.js"></script>
</body>