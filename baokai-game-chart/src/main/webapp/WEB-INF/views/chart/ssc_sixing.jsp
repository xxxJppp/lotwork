<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html>
<head>
<%@ page isELIgnored="false" %>
	<title>${lotteryName}-走势图</title>
</head>
<body class="table-trend">
	<div class="header" style=""></div>
	<div class="select-section clearfix">
		<div class="select-function">
			<a href="#" id="J-button-showcontrol">展开功能区</a><i class="arrow-down"></i>
			<a id="J-button-export" class="btn" href="javascript:void(0);">报表下载<b class="btn-inner"></b></a>
		</div>
		
		<h3 class="select-title">彩种：${lotteryName} </h3>
        <ul class="select-list">
            <li><a href="Wuxing">五星</a></li>
            <li><a href="Zonghe">五星综合</a></li>
            <li class="current"><a href="Sixing">四星</a></li>
            <li><a href="Qiansan">前三</a></li>
            <li><a href="Zhongsan">中三</a></li>
            <li><a href="Housan">后三</a></li>
            <li><a href="Qianer">前二</a></li>
            <li><a href="Houer">后二</a></li>
        </ul>
	</div>
	<div class="select-section-content clearfix" id="J-panel-control">
		<div class="title">五星走势图</div>
		<div class="function">
			<label class="label"><input data-action="guides" type="checkbox" class="checkbox" checked="checked">辅助线</label>
			<label class="label"><input data-action="lost" type="checkbox" class="checkbox" checked="checked">遗漏</label>
			<label class="label"><input data-action="lost-post" type="checkbox" class="checkbox">遗漏条</label>
			<label class="label"><input data-action="trend" type="checkbox" class="checkbox">走势</label>
			<label class="label"><input data-action="temperature" type="checkbox" class="checkbox">号温</label>
		</div>
		<div class="time" id="J-periods-data" <c:if test="${view eq 'slmmc'}"> style="display:none;" </c:if>>
			<a data-action="periods-30" href="javascript:void(0);">近30期</a>
			<a data-action="periods-50" href="javascript:void(0);">近50期</a>
			<a data-action="day-1" href="javascript:void(0);">今日数据</a>
			<a data-action="day-2" href="javascript:void(0);">近2天</a>
			<a data-action="day-5" href="javascript:void(0);">近5天</a>
		</div>
		<div class="search" <c:if test="${view eq 'slmmc'}"> style="display:none;" </c:if>>
			<input type="text" value="" id="J-date-star" class="input w-3"> - <input id="J-date-end" type="text" value="" class="input w-3">
			<a id="J-time-periods" class="btn" href="javascript:void(0);">查 看<b class="btn-inner"></b></a>
		</div>
	</div>
	<!-- Star 五星 -->
	<div class="chart-section" id="J-chart-area">
		<table class="chart-table" id="J-chart-table">
			<thead class="thead">
				<tr class="title-text">
					<th rowspan="2" colspan="3" class="border-bottom border-right">
                        <c:if test="${view=='slmmc'}">方案编号</c:if>
                        <c:if test="${view!='slmmc'}">期号</c:if>
					</th>
					<th colspan="3" class="border-right">开奖号码</th>
					<th colspan="12" class="border-right">千位</th>
					<th colspan="12" class="border-right">百位</th>
					<th colspan="12" class="border-right">十位</th>
					<th colspan="12" class="border-right">个位</th>
					<th colspan="12">号码分布</th>
				</tr>
				<tr class="title-number">
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><label class="label"><input type="checkbox" class="checkbox">全部</label></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header"></th>
				</tr>
			</thead>
			<tbody id="J-chart-content" class="chart table-guides">
				<tr></tr>
			</tbody>
			
			
			
			
			<tbody id="J-ball-content" class="tbody">

			

			</tbody>
			
			<tbody class="tbody tbody-footer-header">
				<tr class="auxiliary-area title-number">
					<td rowspan="2" colspan="3" class="border-right border-bottom">
                        <c:if test="${view=='slmmc'}">方案编号</c:if>
                        <c:if test="${view!='slmmc'}">期号</c:if>
					</td>
					<td rowspan="2" colspan="3" class="border-right border-bottom" >开奖号码</td>

					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-bottom"></td>
				</tr>
				<tr class="auxiliary-area title-text">
					<td colspan="12" class="border-right border-bottom">千位</td>
					<td colspan="12" class="border-right border-bottom">百位</td>
					<td colspan="12" class="border-right border-bottom">十位</td>
					<td colspan="12" class="border-right border-bottom">个位</td>
					<td colspan="12" class="border-bottom">号码分布</td>
				</tr>
			
			</tbody>
			

		</table>
		
		<div style="height:100px;"></div>
	</div>
	<!-- End 五星 -->
<script type="text/javascript">
var CHART;
(function($){
    CHART = new phoenix.GameCharts({currentGameType:'${view}', getDataUrl: json_data_url, currentGameMethod: '${groupCode}', expands:{
        ${view}${groupCode}Render:function(data, currentNum){
            var td1, td2, td3, td4, td5, td6,
				current,
				me = this,
				styleName = currentNum % me.getSeparateNum() == 0 ? ' border-bottom' : '',
				htmlTextArr = new Array(),
				allowCount = me.getRenderLength(),
				parentDom = document.createElement('tr');
			if(currentGameType != 'slmmc'){
				td1 = document.createElement('td');
				td1.className = "ball-none " + styleName;
				parentDom.appendChild(td1);

				//期号号码
				td2 = document.createElement('td');
				td2.className = "issue-numbers " + styleName;
				td2.innerHTML = data[0];
				parentDom.appendChild(td2);

				td3 = document.createElement('td');
				td3.className = "ball-none border-right" + styleName;
				parentDom.appendChild(td3);

				td4 = document.createElement('td');
				td4.className = "ball-none " + styleName;
				parentDom.appendChild(td4);

				//期号号码
				td5 = document.createElement('td');
				td5.className = styleName;
				td5.innerHTML = '<span class="lottery-numbers">' + data[1] + '</span>';
				parentDom.appendChild(td5);
			}else{
				td4 = document.createElement('td');
				td4.className = "ball-none " + styleName;
				parentDom.appendChild(td4);

				//期号号码
				td5 = document.createElement('td');
				td5.className = styleName;
				td5.setAttribute("colspan", "4");	
				td5.innerHTML = '<span class="lottery-numbers">' + data[1] + '</span>';
				parentDom.appendChild(td5);
			}
            

            td6 = document.createElement('td');
            td6.className = 'ball-none border-right' + styleName;
            parentDom.appendChild(td6);

            //千位
            parentDom.appendChild(me.singleLotteryBall(data[2], styleName));
            //百位
            parentDom.appendChild(me.singleLotteryBall(data[3], styleName));
            //十位
            parentDom.appendChild(me.singleLotteryBall(data[4], styleName));
            //个位
            parentDom.appendChild(me.singleLotteryBall(data[5], styleName));
            //号码分布
            parentDom.appendChild(me.layoutLotteryBall(data[6], styleName));

            td1 = document.createElement('td');
            td1.className = "ball-none " + styleName;
            parentDom.appendChild(td1);


            //返回完整的单行TR结构
            return parentDom;
        },
        ${view}${groupCode}RenderStatistics: function(data){
            var me = this,
                    index = 0,
                    i = 0,
                    len = 0,
                    j = 0,
                    len2 = 0,
                    n = 0,
                    tdstr = '<td class="ball-none border-right"></td><td class="ball-none"></td>',
                    frame1 = [],
                    frame2 = [],
                    frame3 = [],
                    frame4 = [];
            frame1.push('<tr class="auxiliary-area"><td class="ball-none"></td><td class="border-bottom border-top">出现总次数</td><td class="ball-none border-right border-bottom"></td><td class="ball-none  border-bottom"></td><td class="border-bottom"></td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>');
            frame2.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">平均遗漏值</td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td><td class="border-bottom"></td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>');
            frame3.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">最大遗漏值</td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td><td class="border-bottom"></td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>');
            frame4.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">最大连出值</td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td><td class="border-bottom"></td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>');


            for(i = 0, len = 50; i < len; i++){
                tdstr = ((i+1)%10 == 0) ? '<td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>' : '';
                tdstr = (i == (len - 1)) ? '<td class="ball-none border-bottom"></td>' : tdstr;

                frame1.push('<td class="border-bottom"><i class="ball-noraml">'+ data[0][i] +'</i></td>' + tdstr);
                frame2.push('<td class="border-bottom"><i class="ball-noraml">'+ data[1][i] +'</i></td>' + tdstr);
                frame3.push('<td class="border-bottom"><i class="ball-noraml">'+ data[2][i] +'</i></td>' + tdstr);
                frame4.push('<td class="border-bottom"><i class="ball-noraml">'+ data[3][i] +'</i></td>' + tdstr);
            }

            frame1.push('</tr>');
            frame2.push('</tr>');
            frame3.push('</tr>');
            frame4.push('</tr>');
            $(me.getBallContainer()).append($(frame1.join(''))).append($(frame2.join(''))).append($(frame3.join(''))).append($(frame4.join('')));
			
			if(currentGameType == 'slmmc'){			
				if($(me.defConfig['chartTableDom']).find('tr:eq(0)>th').size() > 6){        
					$(me.defConfig['chartTableDom']).find('tr:eq(0)>th:eq(1)').attr('colspan','6');
					$(me.defConfig['chartTableDom']).find('tr:eq(0)>th:eq(0)').remove();
				}				
				$(me.defConfig['chartTableDom']).find('tr:eq(1)>th:eq(1)').attr('colspan','4');
			}
        },
        ${view}${groupCode}TrendCanvas:function(dom, data){
            var positionCount = 0,
                    me = this,
                    currentBallLeft = 0,
                    currentBallTop = 0,
                    chartTrendPosition = me.getChartTrendPosition();


            //遍历分段渲染数据
            for (var i = 0, current; i < data.length; i++) {
                current = data[i];

                for (var k = 0; k < current.length; k++) {
                    //选球区域
                    if (k > 1 && k < 6) {
                        for (var j = 0; j < current[k].length; j++) {

                            if(j == 0)	{
                                var currentDom = dom.getElementsByTagName('i')[positionCount].parentNode,
                                        unitSize = me.getUnitSize(currentDom),
                                        top = unitSize.topNum,
                                        left = unitSize.leftNum,
                                        width = unitSize.widthNum,
                                        height = unitSize.heightNum;
                            }

                            //当前位置球
                            positionCount ++;

                            //当前号码
                            if (current[k][j][0] == 0) {
                                //第一排渲染
                                if (typeof chartTrendPosition[k] == 'undefined') {

                                    //当前球的坐标
                                    currentBallLeft = left + (j + 1) * width - width / 2;
                                    currentBallTop = top + height / 2;

                                    chartTrendPosition[k] = {};
                                    chartTrendPosition[k]['top'] = currentBallTop;
                                    chartTrendPosition[k]['left'] = currentBallLeft;
                                } else {

                                    //当前球的坐标
                                    currentBallLeft = left + (j + 1) * width - width / 2;
                                    currentBallTop = chartTrendPosition[k]['top'] + height;

                                    //绘制画布
                                    //绘制走势图线
                                    me.draw.setOption({
                                        parentContainer: $('#J-chart-area')[0]
                                    });
                                    me.draw.line(chartTrendPosition[k]['top'], chartTrendPosition[k]['left'], currentBallTop, currentBallLeft);

                                    chartTrendPosition[k]['top'] = currentBallTop;
                                    chartTrendPosition[k]['left'] = currentBallLeft;
                                }
                            }
                        };
                    }
                };

                positionCount = 0;
            };
        }
    }});
    CHART.addEvent('afterRenderChartHtml', function(){
        var me = this,tds = $(me.getContainer()).find('tr:last').children();
        tds.addClass('border-bottom');
    });
    CHART.show();


    //提交选球数据
    $('#J-form-submit').submit(function(e){
        var trs = $('#J-select-content').find('.select-area'),its,result = [],arrRow = [],arr = [],resultStr = '',
                cls = 'ball-orange',
                i = 0,
                len = 0;
        trs.each(function(k){
            arrRow = [];
            its = $(this).find('.ball-noraml');
            for(i = 0,len = its.length; i < len; i++){
                //arr[i] = its[i].className.indexOf(cls) != -1 ? 1 : 0;
                if(its[i].className.indexOf(cls) != -1){
                    arr.push(i%10);
                }
                if((i+1) % 10 == 0){
                    arrRow.push(arr.join(''));
                    arr = [];
                }
            }
            if($.trim(arrRow.join('')) != ''){
                result.push(arrRow.join('-'));
            }
        });
        resultStr = result.join('_');
        $('#J-input-submit-value').val(resultStr);

        if(resultStr == ''){
            return false;
        }
    });
    $('#J-button-submit').click(function(e){
        e.preventDefault();
        $('#J-form-submit').submit();
    });

})(jQuery);

</script>

</body>
</html>