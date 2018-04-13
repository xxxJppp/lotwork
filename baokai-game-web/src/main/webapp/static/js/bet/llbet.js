$(document).ready(function(){

	//游戏公共访问对象
	var Games = phoenix.Games;
	//游戏实例
	phoenix.Games.LLSSC.getInstance();
	//游戏玩法切换
	phoenix.GameTypes.getInstance();
	//统计实例
	phoenix.GameStatistics.getInstance();
	//号码篮实例
	phoenix.GameOrder.getInstance();
	//追号实例
	phoenix.GameTrace.getInstance();
	//提交
	phoenix.GameSubmit.getInstance();
	//消息类
	phoenix.Games.LLSSC.Message.getInstance();
	

	//遮罩,是否设有此彩种奖金组
	var mask = phoenix.Mask.getInstance(),		
		Msg = Games.getCurrentGameMessage();	
		
		//奖金组情况
		Games.getCurrentGame().bonusGroupProce();
		Games.getCurrentGame().isLotteryStopSale(); 		
		
		$.ajax({
			url:Games.getCurrentGame().getGameConfig().getInstance().getDynamicConfigUrl(),
			dataType:'json',
			async:false,
			cache: false,
			success:function(data){
				if(Number(data['isSuccess']) == 1){
	
					//由于后端只能返回ARRAY形式的DATA对象结构
					//所以前端进行数据结构更改将数组改为KEY VALUE形式存储
					data['data']['gamelimit'] = data['data']['gamelimit'][0];
					//设置配置
					Games.getCurrentGame().setDynamicConfig(data['data']);
				}
			}
		});
		try
		{
			//头部模块数据处理
			var frcid = Games.getCurrentGame().getGameConfig().getInstance().defConfig["userName"],
				isVideo = phoenix.util.getParam('isVideo');
			$('#userName').html(frcid);
			$('#chase-stop').css("width","310px");
			
			
			Games.getCurrentGameSubmit().balanceInquiry('spanBall');
			$('#J-more-orderData').attr('href',baseUrl + '/gameUserCenter/queryOrdersEnter?time=7');	
			if($.trim(isVideo) == '1'){
				//自动打开视频
				$('.deadline-video').click();
			}	
			setInterval(postDynamicConfig, 30000);					
		}
		catch(err)
		{
		  alert("网络异常，读取信息失败");
		}
		
		//游戏配置
		function postDynamicConfig(){	
			new phoenix.GameSubmit().afterSubmitSuccess();	
			Games.cacheData['frequency'] = {};
			Games.getCurrentGame().getCurrentGameMethod().updataGamesInfo2();
		}		
		
			
		//当最新的配置信息和新的开奖号码出现后，进行界面更新
		Games.getCurrentGame().addEvent('changeDynamicConfig', function(e, cfg){			
			//上期期
			var tem=cfg['number'],
				Str=tem.split("-"),
				lastballs = cfg['lastballs'].split(',');

				
			$('#J-lottery-info-number').html(Str[0]);
			$('#J-lottery-info-amount').html(Str[1]);
			$('#J-lottery-info-currentIssue').val(cfg['issueCode']);
			
			//上一期期号		
			var tem2=cfg['lastnumber'],
				_lastnumer=tem2.split("-");
			$('#J-lottery-info-lastnumber').html(_lastnumer[0]);
			$('#J-lottery-info-lastamount').html(_lastnumer[1]);
			//上期开奖号码
			$('#J-lottery-info-balls').find('em').each(function(i){
				this.innerHTML = lastballs[i];
			});
			
			
			//重新启动/更新新一轮定时器
			topTimer.setStartTime(new Date(cfg['nowtime']));
			topTimer.setEndTime(new Date(cfg['nowstoptime']));
			topTimer.continueCount();
			
		});
	        

                try{
                             		var temT=Games.getCurrentGame().getDynamicConfig()['number'],
		StrT=temT.split("-"),
		lastballsT = Games.getCurrentGame().getDynamicConfig()['lastballs'].split(',');

		$('#J-lottery-info-number').html(StrT[0]);
		$('#J-lottery-info-amount').html(StrT[1]);
		$('#J-lottery-info-currentIssue').val(Games.getCurrentGame().getDynamicConfig()['issueCode']);
		
		var tem2T=Games.getCurrentGame().getDynamicConfig()['lastnumber'],
			_lastnumerT=tem2T.split("-");
		$('#J-lottery-info-lastnumber').html(_lastnumerT[0]);
		$('#J-lottery-info-lastamount').html(_lastnumerT[1]);
		$('#J-lottery-info-balls').find('em').each(function(i){
			this.innerHTML = lastballsT[i];
		});


                }
                catch(err){
                   alert("初始化网络异常，读取信息失败");
                }	
		
		//顶部用户信息
		new phoenix.Hover({triggers:'#J-user-center',panels:'#J-user-center .menu-nav',hoverDelayOut:300});
		
			
		//顶部倒计时
		var topTimer = new phoenix.CountDown({
			//结束时间
			'endTime' : Games.getCurrentGame().getDynamicConfig()['nowstoptime'],
			//开始时间
			'startTime': Games.getCurrentGame().getDynamicConfig()['nowtime'],
			//是否需要循环计时
			'isLoop' : false,
			//是否开启计时矫正
			'isRedress' :true,
			'redressTime' : 15,
			//需要渲染的DOM结构
			'showDom' : '.deadline-number',
			expands:{
				//覆盖showTime渲染方法
				_showTime:function(time){
					var me = this,
						dom = $(me.defConfig.showDom),
						m = me.checkNum(time.m) + '',
						s = me.checkNum(time.s) + '';
						//超过1小时显示为预售中,下拉时倒计时不显示
						if(time.allSecond > 3600){								
							dom.find("em,span").css("display","none");
							dom.find("strong").css("display","inline");
							
						}else{
							//渲染时间输出		
							dom.find("em,span").css("display","inline");
							dom.find("strong").css("display","none");
							dom.find('.min-left').text(m.substring(0,1));
							dom.find('.min-right').text(m.substring(1,2));
							dom.find('.sec-left').text(s.substring(0,1));
							dom.find('.sec-right').text(s.substring(1,2));
							//console.log(time);
							me.fireEvent('afterShowTime', time, me);
							
						}
				},
				redRessTime : function (){
					
					var me = this,
						timeload = null,
						timeMath = new Date().getTime();

					//如果已经存在请求
					//还没有返回则中断
					me.timeload  && me.timeload.abort();

					me.timeload = $.ajax({
						url:  Games.getCurrentGame().getGameConfig().getInstance().lastNumberUrl(),
						type: 'GET',
						cache: false,
						dataType: 'json'
					})
					.done(function(data) {	
						if(data){		
							//更新时间
							if(data['nowtime']){
								//停止计时
								me.stopCount();
								me.setStartTime(new Date(data['nowtime']).getTime() + (new Date().getTime() - timeMath));
								//恢复计时
								me.continueCount();
							}
							if(data['lastballs']){												
								//上一期期号		
								var tem2=data['lastnumber'],
									_lastnumer=tem2.split("-"),
									lastballs = data['lastballs'].split(',');
									
									$('#J-lottery-info-lastnumber').html(_lastnumer[0]);
									$('#J-lottery-info-lastamount').html(_lastnumer[1]);
									//上期开奖号码
									$('#J-lottery-info-balls').find('em').each(function(i){
										this.innerHTML = lastballs[i];
									});	
							}							
						}							
							
					})
					.fail(function() {
						
					})
					.always(function() {
						
						me.timeload = null;
					});
				}
			}
		});
		topTimer.addEvent('afterTimeFinish', function(){
			//定时器结束，当前期结束
			//请求下一期时间			
			var Msg = Games.getCurrentGameMessage(),
				oldIssueCode=Games.currentGame.dynamicConfig.number,newIssueCode = '';	 //上一期，当前期	
							
			Games.getCurrentGame().getServerDynamicConfig(function(){	
				newIssueCode=Games.currentGame.dynamicConfig.number;				
				
				Msg.show({				
					mask:true,				
					title:'温馨提示',				
					content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">'+oldIssueCode+'期已截止，<br>当前期为<strong class="color-red" id="J-lottery-info-newNumbe">' +newIssueCode+ '</strong>期。<br>投注时请注意期号！</h4></div></div>',
					closeIsShow:true,
					closeFun:function(){ 
							Msg.hide();							
					}			
				});	
			});	
			
			//奖金组情况同步
			Games.getCurrentGame().bonusGroupProce();
			Games.getCurrentGame().isLotteryStopSale();			
			//更新我的方案及追号数据
			new phoenix.GameSubmit().afterSubmitSuccess();
			
			
		});
		
		
		//漂浮倒计时提示
		(function(){
			var countDownDom = $('.countdown'),
				arrowwidth = countDownDom.find('a').width(),
				headerLeft = $('.main').offset().left,
				headerHeight = $('.main').offset().top,
				timeoutSave = null;


			countDownDom.css('right', headerLeft - arrowwidth);

			$(window).scroll(function(event) {
				if(timeoutSave){
					clearTimeout(timeoutSave);
					timeoutSave = null;	
				}
				timeoutSave = setTimeout(function(){
					arrowwidth = countDownDom.find('a').width(),
					headerLeft = $('.main').offset().left,
					headerHeight = $('.main').offset().top;

					if($(window).scrollTop() > headerHeight){
						countDownDom.show();
					}else{
						countDownDom.hide();
						if(!countDownDom.hasClass('countdown-current')){
							countDownDom.addClass('countdown-current');
						}
					}	
				},30);
			});

			countDownDom.find('a').bind('click', function(){
				if(countDownDom.hasClass('countdown-current')){
					countDownDom.removeClass('countdown-current');
				}else{
					countDownDom.addClass('countdown-current');
				}
			});

			topTimer.addEvent('afterShowTime', function(e, time, me){
				var m = me.checkNum(time.m) + '',
					s = me.checkNum(time.s) + '';

				countDownDom.find('strong').html(m + ':' + s);
			});
		})();
		
		
		
		//我的方案切换tab
		orderTab = new phoenix.Tab({par : '.program-chase',triggers : '.program-chase-title > li',	panels : '.program-chase-content > li',eventType : 'click',currPanelClass: 'current'});
		orderTab.addEvent('afterSwitch', function(){
			//动态更改更多链接跳转
			if($(".program-chase-title").find('li:first').hasClass('current')){
				$('#J-more-orderData').attr('href',baseUrl + '/gameUserCenter/queryOrdersEnter?time=7');
			}else{
				$('#J-more-orderData').attr('href',baseUrl + '/gameUserCenter/queryPlans?time=7'); 
			}
		}); 
		
		//默认加载五星直选复式
		Games.getCurrentGameTypes().addEvent('endShow', function() {
			//this.changeMode('housan.zhixuan.fushi');
			this.changeMode(Games.getCurrentGame().getGameConfig().getInstance().getDefaultMethod());
		});
		
		
		//监听游戏玩法切换前后事件
		//设置加载Loading
		Games.getCurrentGame().addEvent('beforeSwitchGameMethod', function(){
			var dom = $('#J-bet-loading-panel');
			this._loadingtimer = setTimeout(function(){
										phoenix.util.toViewCenter(dom);
										dom.show();
										mask.show();
								}, 500);
							
		});
		Games.getCurrentGame().addEvent('afterSwitchGameMethod', function(){
			clearTimeout(this._loadingtimer);
			$('#J-bet-loading-panel').hide();
			mask.hide();
		});

		
		//玩法说明和示例
		$('.prompt').on('mouseenter', '.example-button', function(){
			$('.example-tip').css({
				'width':'250px',
				'z-index':'10000',
				'top' : $(this).position().top - 5,
				'left' : $(this).position().left + $(this).width() + 5
			}).show();			 	
		}).on('mouseleave', '.example-button', function(){
			$('.example-tip').hide();	
		});
		
		//走势图相关
		(function(){
			var dom = $('#J-game-chart'),		
				gametype = phoenix.Games.getCurrentGameTypes();

			gametype.addEvent('beforeChange', function(e, container, modeName){
				var currentGameMethod = phoenix.Games.getCurrentGame().getCurrentGameMethod();

				if(!dom.is(':hidden')){
					currentGameMethod.getChart(modeName, function(chart){
						dom.html(chart);
					});
				}
			});

			//走势图展开操作
			$('.chart-switch').bind('click', function(){
				var currentGameMethod = phoenix.Games.getCurrentGame().getCurrentGameMethod(),
					modeName = currentGameMethod.getGameMethodName();

				if(!dom.is(':hidden')){
					dom.hide();
				}else{
					currentGameMethod.getChart(modeName, function(chart){
						dom.html(chart);
					});
					dom.show();
				}
			});
		})();
			
		//将选球数据添加到号码篮
		$('#J-add-order').click(function(){
			Games.getCurrentGameOrder().add(Games.getCurrentGameStatistics().getResultData());
		});
		//机选一注
		$('#randomone').click(function(){
			Games.getCurrentGame().getCurrentGameMethod().randomLotterys(1);
		});
		//机选五注
		$('#randomfive').click(function(){
			Games.getCurrentGame().getCurrentGameMethod().randomLotterys(5);
		});
	
		//清空号码篮
		$('#restdata').click(function(){
			if(Games.getCurrentGameOrder().getTotal()['amount'] <= 0){
				return false;
			}
			Games.getCurrentGameMessage().show({				
				mask:true,				
				title:'温馨提示',				
				content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">确认删除号码篮内全部内容吗?</h4></div></div>',				
				confirmIsShow:true,				
				cancelIsShow:true,	
				cancelFun:function(){                   
					Games.getCurrentGameMessage().hide();				
				},			
				confirmFun:function(){	
					Games.getCurrentGameOrder().reSet().cancelSelectOrder();
					//Games.getCurrentGame().getCurrentGameMethod().reSet(); 选球篮不复位
					Games.getCurrentGameMessage().hide();	
				}	
			});	
			
			
		});
		
		//单式上传的删除、去重、清除功能
		$('body').on('click', '.remove-error', function(){
			Games.getCurrentGame().getCurrentGameMethod().removeOrderError();
		}).on('click', '.remove-same', function(){	
			Games.getCurrentGame().getCurrentGameMethod().removeOrderSame();
		}).on('click', '.remove-all', function(){	
			Games.getCurrentGame().getCurrentGameMethod().removeOrderAll();
		});


		//投注按钮操作
		$('body').on('click', '#J-submit-order', function(){
			if (global_userID > 0) 
			{
				Games.getCurrentGameSubmit().submitData();		
			}
			else
			{
				var Msg = Games.getCurrentGameMessage();
				Msg.show({				
					mask:true,	
					cancelIsShow:false,
					title:'温馨提示',				
					content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">请登录后再操作！</h4></div></div>',
					closeIsShow:true,
					closeFun:function(){ 
							Msg.hide();									
					}
				});	

			}	
		});
		if (global_userID > 0) {
			$('.program-chase-title li').show();
			$('.program-chase .more').show();
			$('.program-chase-content').show();
		}
		else {
			$('.program-chase-title li').hide();
			$('.program-chase .more').hide();
			$('.program-chase-content').hide();
			
		}
});
	