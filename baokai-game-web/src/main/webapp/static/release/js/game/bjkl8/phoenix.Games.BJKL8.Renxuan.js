!function(a,b,c){var d={name:"renxuan.putongwanfa.renxuan",tips:"从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",exampleTip:"选一任选一中六复式"};Games=a.Games,GameMessage=Games.getCurrentGameMessage(),BJKL8=a.Games.BJKL8;var e={init:function(){var a=this;a.addEvent("afterReset",function(){"function"==typeof a.resetChartsResult&&a.resetChartsResult()})},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},showSelectResult:function(){var a=this,b="",c=a.container.find(".J-select-result"),d=a.countBallsNum();if(7>d||d>8)return void c.html("");var b=a.ballsResultCharts({selectNum:d,mode:"任选7",maxNum:d,money:{1:1e4,2:200,3:38,4:6,5:3}});c.html(b)},showResultCharts:function(){var a=this,b=(a.container,$("#J-charts-area")),c=Games.BJKL8.Charts.getInstance();c.loadData({count:30,type:a.defConfig.name},function(){setTimeout(function(){b.html(c.getHtml())},0)})},resetChartsResult:function(){var a=this,b=a.container.find(".J-select-result");b.empty()},buildUI:function(){var a=this;a.container.html(html_all.join(""))},ballsResultCharts:function(a){var b=this,c="",d=b.getLottery(!0),e="number"==typeof d?d:d.length,f=(Games.getCurrentGameStatistics().getMultip(),a.mode),g=parseInt(f.substring(f.length-1,3),10),h={1:1,2:2,3:2,4:2,5:3,6:3,7:4},i=a.selectNum,j=a.money,k=0;c+='<div class="ball-table-title">您选择的号码可能中奖结果如下：</div>';for(var l in j)k++;c+='<table width="100%" cellspacing=1>',c+="<tr><th colspan="+(k+4)+">玩法："+f+"　　　投注号码数："+i+"</th></tr>",i=i>20&&1==g?20:i,c+="<tr><td>每注奖金</td>";for(var m=1;k>=m;m++)c+="<td>"+(isNaN(j[m])?"&nbsp;":j[m].toFixed(2))+"</td>";c+="<td></td><td></td><td></td></tr>",c+="<tr><td>中奖号码数</td>";for(var m=k,n=g;m>0;m--,n--)c+=7==g&&1==m?"<td>选"+g+"中0</td>":"<td>选"+g+"中"+(m==k?g:n)+"</td>";c+="<td>未中奖</td><td>总注数</td><td>总奖金</td></tr>";for(var o=0,m=i;m>=h[g];m--){var p=tickets=0;c+="<tr><td>中"+m+"个号码</td>";for(var q=1;k>=q;q++)tickets+=8==i&&5==q&&4==m?0:b.GetCombinCount(m,g+1-q)*b.GetCombinCount(i-m,g-(g+1-q)),p+=8==i&&5==q&&4==m?0:b.GetCombinCount(m,g+1-q)*b.GetCombinCount(i-m,g-(g+1-q))*j[q],o=b.GetCombinCount(m,g+1-q)*b.GetCombinCount(i-m,g-(g+1-q))==0?"&nbsp;":b.GetCombinCount(m,g+1-q)*b.GetCombinCount(i-m,g-(g+1-q)),c+="<td class='color-red'>"+(8==i&&5==q&&4==m?"&nbsp;":o)+"</td>";c+=e-tickets==0?"<td>&nbsp;</td><td>"+e+'</td><td style="text-align:center">'+p.toFixed(2)+"</td></tr>":"<td>"+(e-tickets)+"</td><td>"+e+'</td><td style="text-align:center">'+p.toFixed(2)+"</td></tr>"}if(7==g){var p=tickets=0;if(8==i){c+="<tr><td>中1个号码</td>";for(var q=1;k>=q;q++)tickets+=q==k?1:0,p+=3*(q==k?1:0),c+="<td class='color-red'>"+(q==k?1:"&nbsp;")+"</td>";c+=e-tickets==0?"<td>&nbsp;</td><td>"+e+'</td><td style="text-align:center">'+p.toFixed(2)+"</td></tr>":"<td>"+(e-tickets)+"</td><td>"+e+'</td><td style="text-align:center">'+p.toFixed(2)+"</td></tr>",p=tickets=0}c+="<tr><td>中0个号码</td>";for(var q=1;k>=q;q++)tickets+=q==k?7==i?1:8:0,p+=(q==k?7==i?1:8:0)*j[5],c+="<td class='color-red'>"+(q==k?7==i?1:8:"&nbsp;")+"</td>";c+=e-tickets==0?"<td>&nbsp;</td><td>"+e+'</td><td style="text-align:center">'+p.toFixed(2)+"</td></tr>":"<td>"+(e-tickets)+"</td><td>"+e+'</td><td style="text-align:center">'+p.toFixed(2)+"</td></tr>"}return c+="<table><tr><td class='msg-tips'>注：红色数字表示各奖级的<span class='color-red'>中奖注数</span></td></tr></table>",c+="</table>",c+="</div>"},GetCombinCount:function(a,b){if(b>a)return 0;if(a==b||0==b)return 1;if(1==b)return a;for(var c=1,d=1,e=0;b>e;e++)c*=a-e,d*=b-e;return c/d},mathResultGroup:function(a,b){for(var c=this,d=0,e=0,f=[],g=0;g<a.length;g++)f=f.concat(c.combine(a[g],b));if(f.length<=0)return 0;d=f[0].join();for(var h=0;h<f.length;h++)f[h].join()==d&&(e+=1);return e},exeEvent_batchSetBall:function(a,b){var c=this,d=c.balls,e=Number(a.row),f=a.bound,g=d[e],h=0,i=g.length,j="undefined"==typeof a.start?0:Number(a.start);for(ranNum="undefined"==typeof a.ranNum?0:Number(a.ranNum),halfLen=Math.ceil((i-j)/2+j),dom=$(b),h=j;i>h;h++)c.setBallData(e,h,-1);switch(f){case"all":for(h=j;i>h;h++)c.setBallData(e,h,1);break;case"big":for(h=halfLen;i>h;h++)c.setBallData(e,h,1);break;case"small":for(h=j;halfLen>h;h++)c.setBallData(e,h,1);break;case"odd":if(ranNum>0){var k=[];for(h=j;i>h;h++)(h+1)%2!=1&&k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}}else for(h=j;i>h;h++)(h+1)%2!=1&&c.setBallData(e,h,1);break;case"even":if(ranNum>0){var k=[];for(h=j;i>h;h++)(h+1)%2==1&&k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}}else for(h=j;i>h;h++)(h+1)%2==1&&c.setBallData(e,h,1);break;case"up":var k=[];for(h=j;halfLen>h;h++)k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}break;case"down":var k=[];for(h=halfLen;i>h;h++)k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}break;case"upEven":var k=[];for(h=j;halfLen>h;h++)(h+1)%2==1&&k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}break;case"upOdd":var k=[];for(h=j;halfLen>h;h++)(h+1)%2!=1&&k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}break;case"downEven":var k=[];for(h=halfLen;i>h;h++)(h+1)%2==1&&k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}break;case"downOdd":var k=[];for(h=halfLen;i>h;h++)(h+1)%2!=1&&k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}break;case"random":var k=[];for(h=j;i>h;h++)k.push(h);for(var l=0;ranNum>l;l++){var m=Math.floor(Math.random()*k.length);c.setBallData(e,k[m],1),k.splice(m,1)}break;case"none":}dom.addClass("current"),c.updateData()},showSelectResult:function(){}},f=a.Class(e,c);f.defConfig=d,BJKL8[b]=f}(phoenix,"Renxuan",phoenix.GameMethod);