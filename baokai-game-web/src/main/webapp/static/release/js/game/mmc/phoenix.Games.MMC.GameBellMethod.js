!function(){function a(){this.ON_PREPARED="prepared",this.ON_DRAWING="drawing",this.ON_DRAWED="drawed",this.dialogMarkup={loading:'<div class="dialog" id="dl_loading"></div>',win:'<div class="dialog" id="win_prize"> 							<span class="prize_icon"></span> 							<p>恭喜您，中奖<span class="highlight" data-amount></span>元</p> 						</div>',times:'<div class="dialog" id="draw_times"> 							<p>第<span class="highlight" data-times></span>次开奖</p> 						</div>',noprize:'<div class="dialog" id="no_prize"> 							<div class="result_bg"></div> 						</div>',result:'<div class="dialog" id="prize_result"> 							<div class="result_bg"></div> 							<div class="result_cont">总计<span class="highlight" data-result>23,456,789.00</span>元</div> 						</div>',normal:'<div class="dialog" id="dl_normal"> 							<p data-content>开奖完成</p> 						</div>'},this.dialogs={},this.$dialogs=$(),this.init()}a.prototype={init:function(){this.flipball(),this.records(),this.handlePanelDom(),this.createDialog(),this.bindEvent()},bindEvent:function(){var a=this;a.scrollPane(),$(".lottery-footer .expand-btn").on("click",function(){$(this).toggleClass("active"),$(".history-content ul").slideToggle(),$(".ht-icon").toggle()}),a.$panelCtrl.on("click",function(){return $(this).hasClass("disabled")?!1:(a.panel("show"),void $("#J-result-info").hide())})},scrollPane:function(){return $(".scroll-pane").jScrollPane({autoReinitialise:!0})},flipball:function(){return $("#flipball").flipball({ballsize:5,initball:"0,0,0,0,0",loop:5,timeout:5e3,delay:150,offset:[80,110]})},records:function(){return $('[data-simulation="records"]').records()},gameHistory:function(){return $('[data-simulation="gameHistory"]').gameHistory({showNum:10,ballurl:"/gameUserCenter/queryOrderDetail"})},handlePanelDom:function(){this.$panel=$(".top_section"),this.$panelCtrl=$(".section_handle",this.$panel),this.$panelCont=this.$panel.children().not(this.$panelCtrl),this.$drawbtn=$(".bet-btn input"),this.$drawbarbtn=$(".handle_hand"),this.$history=$(".lottery-history"),this.$header=$(".header"),this.$gameBtns=$(".result_button_group"),this.$panelCtrl.animate({opacity:"hide"})},panel:function(a){var b=this;"show"==a?(b.$panelCtrl.animate({opacity:"hide"}),b.$panelCont.slideDown()):"hide"==a&&$("html, body").animate({scrollTop:0},function(){b.$panelCont.slideUp(),b.$panelCtrl.animate({opacity:"show"})})},createDialog:function(){var a=this,b=$("body");for(m in a.dialogMarkup){var c=$(a.dialogMarkup[m]).hide();b.append(c),a.dialogs[m]=c}},gamebuttons:function(a){"show"==a?this.$gameBtns.fadeIn():"hide"==a&&this.$gameBtns.fadeOut()},dialog:function(a,b,c,e){var f=this,g=f.dialogs[b]||$();if("hide"==a){for(t in f.dialogs)t!=b&&f.dialogs[t].fadeOut();f.gamebuttons("hide")}else if("show"==a){if(!g.length)return!1;if(c)for(d in c)c[d]&&g.find("[data-"+d+"]").html(c[d]);for(t in f.dialogs)t!=b&&f.dialogs[t].fadeOut();var h=f.dialogStyle(b,g);g.css(h).fadeIn(),("result"==b||"noprize"==b)&&f.$gameBtns.fadeIn(),e&&Number(e)>0&&setTimeout(function(){g.fadeOut(),("result"==b||"noprize"==b)&&f.$gameBtns.fadeOut()},Number(e))}},dialogStyle:function(a,b){var c=this,d={marginLeft:-b.outerWidth()/2},e=$();return"win"==a||"times"==a||"normal"==a?(e=c.$panel,d.top=e.offset().top-b.outerHeight()/2):"loading"==a?(e=c.$drawbtn,d.top=e.offset().top-b.outerHeight()-20):("result"==a||"noprize"==a)&&(e=c.$header,d.top=e.offset().top+30),d}};var b=new a,c=function(a,b){var c,d,e=b;for(c in e)e.hasOwnProperty(c)&&(d=RegExp("<#="+c+"#>","g"),a=a.replace(d,"totalPrice"==c||"winMoney"==c?isNaN(e[c])?e[c]:phoenix.util.formatMoney(e[c]/1e4):e[c]));return a};!function(a,d,e,f){var g={$submitButton:$("#J-submit-order"),$selectDom:$("#J-select-panel"),$betInfoDom:$("#J-result-info"),handleHand:".handle_hand",replayButton:".restart_game",reSelectButton:".rechoose_ball",$lotteryNum:"#J-balls-lotterys-num",$gameMenu:"#J-top-game-menu,#J-user-center,#J-msg-panel",waitBeting:["<li>",'<div class="result">','<span class="moneyUnitText"><#=modes#></span>','<span class="bet"><#=num#>注</span>','<span class="multiple"><#=multiple#>倍</span>','<span class="opening-text">开奖中</span>',"</div>","<span>[<#=methodName#>]</span>","<span><#=code#></span>","</li>"].join(""),singleResult:["<li>",'<div class="result">','<span class="moneyUnitText"><#=modes#></span>','<span class="bet"><#=num#>注</span>','<span class="multiple"><#=multiple#>倍</span>','<span class="opening-text"><#=winMoney#></span>',"</div>","<span>[<#=methodName#>]</span>","<span><#=code#></span>","</li>"].join(""),multipleResult:["<li>",'<span class="multiple-lottery-num">第<#=openNums#>次开奖</span>','<span class="multiple-lottery"><#=lotteryNum#></span>','<span class="multiple-lottery-result"><#=winMoney#></span>',"</li>"].join("")},h=a.Games,i=a.GameSubmit.getInstance(),j=$("#J-submit-order");i.getSubmitData=function(a){var b={},c=h.getCurrentGameOrder().orderData,d=0,e=c.length,f=h.getCurrentGameTrace().getResultData();for(b.gameType=h.getCurrentGame().getGameConfig().defConfig.gameType,b.isTrace=f.traceData.length>0?1:0,b.traceWinStop=h.getCurrentGameTrace().getIsWinStop(),b.traceStopValue=h.getCurrentGameTrace().getTraceWinStopValue(),b.balls=[];e>d;d++)b.balls.push({id:c[d].id,ball:c[d].postParameter,type:c[d].type,moneyunit:c[d].moneyUnit,multiple:c[d].multiple,num:c[d].num});return b.orders=[],b.orders.push({number:h.getCurrentGame().getCurrentNumber(),issueCode:1,multiple:1}),b.amount=h.getCurrentGameOrder().getTotal().amount,b},i.submitData=function(){var a=this,b=a.getSubmitData(),c=h.getCurrentGameMessage(),d="";if(!a.postLock){if(a.doPostLock(),a.fireEvent("beforeSubmit"),b.balls.length<=0)return c.show({type:"mustChoose",msg:"请至少选择一注投注号码！",data:{tplData:{msg:"请至少选择一注投注号码！"}}}),a.cancelPostLock(),a.fireEvent("afterSubmitCancel"),void j.removeClass("disabled");a.fireEvent("beforeSubmitSuccess"),d=$.trim($("#mmcBetKey").val()),$.cookie("mmcBetCookie",d,{expires:1,path:"/",domain:window.location.hostname.substring(window.location.hostname.indexOf("."))}),b.onlyAmount=f,b.ordersNumber=f,$.ajax({url:h.getCurrentGame().getGameConfig().getInstance().submitUrl(),data:JSON.stringify(h.getCurrentGame().editSubmitData(b)),dataType:"json",method:"POST",cache:!1,contentType:"application/json; charset=utf-8",success:function(b){1==Number(b.isSuccess)?a.fireEvent("afterSubmitSuccess",b):a.fireEvent("afterSubmitError",b),a.cancelPostLock()},complete:function(){a.fireEvent("afterSubmit")},error:function(b){a.fireEvent("afterSubmitError",b),c.show("404"==b.status||"0"==b.status?{mask:!0,title:"温馨提示",content:"<div class='pop-title'><i class='ico-error'></i><h4 class='pop-text'>登录超时 请重新登入！</h4></div>",cancelIsShow:!0,cancelFun:function(){window.location.reload()}}:{mask:!0,title:"温馨提示",content:"<div class='pop-title'><i class='ico-error'></i><h4 class='pop-text'>方案提交失败,<br />请检查网络并重新提交！</h4></div>",cancelIsShow:!0,cancelFun:function(){c.hide()}})}})}};var k={continuousPeriod:1,betDataHistory:[],saveCompletePeriod:0,saveBetsInfo:[],saveMultipleBetInfo:[]},l={init:function(a){var c=this,d=c;c.isWaringStatus=!1,c.bindEvent(),c.quickStopMark=!1,c.lotteryInput=new phoenix.Select({realDom:a.$lotteryNum,isInput:!0,expands:{inputEvent:function(){var a=this;a.getInput().keyup(function(){var b=this.value;b>50&&(this.value=50),a.setValue(this.value)}),a.getInput().blur(function(){this.value;d.setContinuousPeriod(this.value)})}}}),c.lotteryInput.addEvent("change",function(a,b){c.setContinuousPeriod(b)}),i.addEvent("afterSubmitError",function(a,b){c.controlError(b)}),i.addEvent("beforeSubmitSuccess",function(){}),i.addEvent("afterSubmitCancel",function(a,b){c.SubmitCancel(b)}),i.addEvent("afterSubmit",function(){c.defConfig.$submitButton.blur()}),i.addEvent("afterSubmitSuccess",function(d,e){1==c.getSaveCompletePeriod()&&(b.panel("hide"),a.$selectDom.addClass("disabled"),k.continuousPeriod>1&&c.defConfig.$submitButton.addClass("stop")),k.continuousPeriod<=1&&c.singlefinish(e),k.continuousPeriod>1&&c.continuousBets(e)})},bindEvent:function(){var a=this,c=this.defConfig;$("body").on("click",c.replayButton,function(){b.dialog("hide"),a.hideInfoPanel(),a.closeWaringStatus()}),$("body").on("click",c.reSelectButton,function(){b.dialog("hide"),b.panel("show"),a.hideInfoPanel(),a.closeWaringStatus(),a.dataReset()}),$("body").on("mouseenter",c.$gameMenu,function(){$(".bg-body >.dialog").css("z-index",50)}),$("body").on("click",c.handleHand,function(){var b=a.defConfig.$submitButton;b.hasClass("stop")||a.isWaringStatus||($(".handle_tips").fadeOut(),b.trigger("click"))})},openWaringStatus:function(){var a=this;a.isWaringStatus=!0},closeWaringStatus:function(){var a=this;a.isWaringStatus=!1},fillInfoPanel:function(a){var b=this;b.defConfig.$betInfoDom.find("ul").html(a)},showInfoPanel:function(){var a=this;a.defConfig.$betInfoDom.show()},hideInfoPanel:function(){var a=this;a.defConfig.$betInfoDom.hide()},disabledSubmitButton:function(){var a=this;a.defConfig.$submitButton.addClass("disabled")},unDisabledSubmitButton:function(){var a=this;a.defConfig.$submitButton.removeClass("disabled")},isContinuous:function(){return k.continuousPeriod>0?!0:!1},setContinuousPeriod:function(a){k.continuousPeriod=a},getContinuousPeriod:function(){return k.continuousPeriod},getSaveCompletePeriod:function(){return k.saveCompletePeriod},setCurrentBetData:function(a){k.saveBetsInfo=a},getCurrentBetData:function(){var b=a.GameOrder.getInstance();return b.getTotal().orders},getSingleOpeningHtml:function(a){for(var b=this,d="",e=b.defConfig.waitBeting,f=0;f<a.length;f++)d+=c(e,a[f]);return d},getSingleResultHtml:function(a){for(var b=this,d="",e=b.defConfig.singleResult,f=0;f<a.length;f++)a[f].winMoney=a[f].winMoney>0?a[f].winMoney:"未中奖",d+=c(e,a[f]);return d},getMultipleResultHtml:function(a){for(var b=this,d="",e=b.defConfig.multipleResult,f=0;f<a.length;f++)a[f].winMoney=a[f].status>0?a[f].status:"未中奖",d+=c(e,a[f]);return d},singlefinish:function(a){var c=this,d=a.data;b.gameHistory().append(a.data),c.fillInfoPanel(c.getSingleOpeningHtml(d.list)),c.showInfoPanel(),b.flipball().flip(d.result,!0,function(){Number(d.winMoney)>0&&Number(d.winNum)>0?b.dialog("show","result",{result:i.formatMoney(d.winMoney/1e4)}):b.dialog("show","noprize"),c.openWaringStatus(),c.fillInfoPanel(c.getSingleResultHtml(d.list)),c.defConfig.$selectDom.removeClass("disabled"),b.records().append(d.result.split(",")),c.unDisabledSubmitButton(),b.gameHistory().update()}),c.reset()},makeMultpleData:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];b.push({openNums:c+1,lotteryNum:d.result,status:d.winMoney})}return b},getTotalAmount:function(a){for(var b=0,c=0;c<a.length;c++){var d=a[c];b+=d.status}return b},continuousfinish:function(){var a=this,c=(a.defConfig.multipleResult,k.saveMultipleBetInfo),d=a.makeMultpleData(c),e=a.getTotalAmount(d);a.defConfig.$selectDom.removeClass("disabled"),a.fillInfoPanel(a.getMultipleResultHtml(d)),a.unDisabledSubmitButton(),a.defConfig.$submitButton.removeClass("stop"),a.openWaringStatus(),e>0?b.dialog("show","result",{result:i.formatMoney(e/1e4)}):b.dialog("show","noprize"),a.reset()},SubmitCancel:function(){var a=this;a.reset()},errorReset:function(){var a=this;a.openWaringStatus(),a.defConfig.$submitButton.removeClass("stop"),a.unDisabledSubmitButton()},controlError:function(a){var b=this,c=b,d=h.getCurrentGameMessage(),e=b.getSaveCompletePeriod();b.isContinuous()?1===Number(e)?(b.errorReset(),d.show({type:"normal",msg:a.msg||"服务器错误，请稍后再试。",data:{tplData:{msg:a.msg||"服务器错误，请稍后再试。"}}}),b.reset()):d.show({type:"normal",msg:a.msg||"服务器错误，请稍后再试。",data:{tplData:{msg:a.msg||"服务器错误，请稍后再试。"}},closeIsShow:!0,closeFun:function(){var a=this;a.hide(),c.continuousfinish()}}):(b.errorReset(),d.show({type:"normal",msg:a.msg||"服务器错误，请稍后再试。",data:{tplData:{msg:a.msg||"服务器错误，请稍后再试。"}}}),b.reset())},controlSuccess:function(){},dataReset:function(){var a=h.getCurrentGameOrder();a.reSet(),a.cancelSelectOrder(),h.getCurrentGame().getCurrentGameMethod().reSet()},reset:function(){var a=this;k={continuousPeriod:1,betDataHistory:[],saveCompletePeriod:0,saveBetsInfo:[],saveMultipleBetInfo:[]},a.lotteryInput.setValue(1)},stopMultipleBet:function(){var a=this;a.defConfig.$submitButton.addClass("disabled"),a.quickStopMark=!0,b.flipball().quickflip()},startBeting:function(){var a=this,b=a.defConfig.$submitButton;if(!b.hasClass("disabled"))return b.hasClass("stop")?void a.stopMultipleBet():void a.singleBets()},singleBets:function(){var a=this;a.defConfig.$submitButton.addClass("disabled"),k.saveCompletePeriod++,i.submitData()},continuousBets:function(a){var c=this,d=a.data;b.gameHistory().append(a.data),c.fillInfoPanel(c.getSingleOpeningHtml(d.list)),c.showInfoPanel(),c.unDisabledSubmitButton(),b.flipball().flip(d.result,!0,function(){Number(d.winMoney)>0&&Number(d.winNum)>0&&b.dialog("show","win",{amount:i.formatMoney(d.winMoney/1e4),num:d.winNum}),c.fillInfoPanel(c.getSingleResultHtml(d.list)),b.records().append(d.result.split(",")),k.saveMultipleBetInfo.push(d),b.gameHistory().update(),Number(k.saveCompletePeriod)==Number(k.continuousPeriod)?c.continuousfinish(a):(c.defConfig.$submitButton.addClass("disabled"),c.quickStopMark?(c.continuousfinish(),c.quickStopMark=!1):setTimeout(function(){k.saveCompletePeriod++,i.submitData()},2e3))}),b.dialog("show","times",{times:k.saveCompletePeriod})},postBetsData:function(){}},m=a.Class(l,d);m.defConfig=g,h[e]=new m}(phoenix,phoenix.Event,"MMCBellMethod")}();