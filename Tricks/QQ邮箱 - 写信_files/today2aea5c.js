;(function(a){
var b=function(d,c){
var e=this;
e._moWin=d;
extend(e,c);
e._init();
};
b.prototype={_init:function(){
var c=this,d=c._moWin;
if(c.bIndexErr)
{
show(c.S("maskerror"),false);
show(c.S("indexerror"),false);
}
switchFolder('folder_none');
showFolders("new",false);
showFolders("personal",false);
showFolders("pop",false);
showFolders("tag",false);
d.ShowSplitNor=function(){
c._showSplitNor.apply(c,arguments);
};
(typeof initRSSUnread=="function")&&initRSSUnread();
d.onresize=function(){
c._todayMinSize();
};
c._todayMinSize();
c._preLoadMail();
c._weatherClass();
c._reportPw();
c._todayBar();
if(d.document.readyState=="complete")
{
c._onload();
}
else{
addEvent(d,"load",function(){
c._onload();
});
}
},_onload:function(){
this._todayRightTabs();
this._initUpdateStatistic();
},_todayRightTabs:function(){
var e=this,h=e._moWin,f={},c,d=GelTags("div",e.S("rightPanelTitle_normal"));
E(d,function(k){
var l=attr(k,"qmTab");
if(l)
{
f[l]={obj:k,container:e.S(attr(k,"container"))};
}
});
e._moQmTab=c=new qmTab({win:h,tab:f,style:{normal:"tab_list bd pointer",over:"tab_list bd pointer",select:"tab_list bd actived"},onchange:function(l,k){
var n=f[l].obj,p=attr(n,"src_iframe"),o=attr(n,"id_iframe"),m=e.S(o);
if(n&&p&&!m)
{
createIframe(h,p,{id:o,obj:f[l].container,where:"beforeEnd",className:attr(n,"class_iframe")||"",style:attr(n,"style_iframe")||"",attrs:attr(n,"attrs_iframe")||""});
}
}});
var g=getTop();
if(f.birth)
{
if(e.newbillcount>0)
{
c.change("info");
g.QMLocalStorage.setUserItem("flag_showBirthDay","-1");
}
else{
var i=g.QMLocalStorage.getUserItem("flag_showBirthDay"),j="birth";
if(i)
{
if(i=="0")
{
j="info";
}
else{
j="birth";
}
}
else{
j="birth";
}
c.change(j);
g.QMLocalStorage.setUserItem("flag_showBirthDay",j=="birth"?"1":"0");
}
}
else{
c.change("info");
}
e.changeInfoTab=h.changeInfoTab=function(k){
c.change(k);
};
},_todayBar:function(){
var c=this,d=c._moWin;
if(c.S("todaybarNormal"))
{
var j=SN("today_weixin",d),e,h="playing",f="murl",g;
if(j)
{
for(e=j.length-1;e>=0;e--)
{
if(g=j[e].getAttribute(f))
{
j[e].onclick=function(){
var i=this;
if(i.getAttribute(h)=="1")
{
i.setAttribute(h,"0");
audioStop();
}
else{
i.setAttribute(h,"1");
audioPlay({id:"weixin",global:false,autoplay:true,url:i.getAttribute(f),updatecallback:function(l){
var k=GelTags("img",i);
if(l=="stopped")
{
show(k[1],0);
show(k[0],1);
}
else{
show(k[0],0);
show(k[1],1);
}
},container:S("today_weixin_player_container",d)});
}
};
(new Image()).src=g;
}
}
addEvent(d,"unload",function(){
audioStop();
});
}
}
},_weatherClass:function(){
var d=this,e=d._moWin,g=d.sWeatherInfo,c=document.body,f=c.className,h="";
if(f.indexOf("weather")==-1)
{
if(g.indexOf("\u96EA")>-1)
{
h="weather_snow";
}
else if(g.indexOf("\u96E8")>-1)
{
h="weather_rain";
}
else if(g.indexOf("\u4E91")>-1)
{
h="weather_cloud";
}
else if(g.indexOf("\u6674")>-1)
{
h="weather_sun";
}
c.className=f+" "+h;
}
},_reportPw:function(){
var c=this;
if(c.S("pwdtips")||c.S("foxmailpwd"))
{
c.reportCgi("100001","today_pwdtips_flag");
}
else if(c.S("oddlogin"))
{
c.reportCgi("1000007","today_oddlogin_flag");
}
},removeNotice:function(){
var c=this,d=c._moWin;
c.reportCgi("1000008","today_noticepwd_flag");
show(c.S("foxmailpwd",false));
},reportCgi:function(d,c){
runUrlWithSid(T("/cgi-bin/report_cgi?r_type=$type$&r_result=1&r_msg=$msg$").replace({type:d,msg:c}));
},reportChgDomi:function(){
runUrlWithSid("/cgi-bin/report_cgi?r_type=100001&r_result=1&r_msg=today_chgdomi_flag");
runUrlWithSid("/cgi-bin/report_cgi?r_type=100001&r_result=1&r_msg=today_pwdtips_flag");
},_preLoadMail:function(){
var c=this,d=c._moWin;
setTimeout(function(){
if(QMMLCache.useCache())
{
var k=SN("folder_unread",d);
if(k.length)
{
var l=[];
E(k,function(v){
var w=v.id.replace("folder_",""),x="realtime";
attr(v,"folderid",w);
addEvent(v,"click",function(z){
var y=getEventTarget(z);
QMMLCache.folder(attr(y,"folderid"),{dr:attr(y,"folderid"),dp:""});
ossLog(x,"all",T("stat=nothing&$locname$=today,,,$id$").replace({id:5,locname:x=="realtime"?"loc":"locval"}));
preventDefault(z);
});
});
}
}
else{
var j=SN("folder_unread",d)[0];
if(j&&j.id!="folder_9")
{
var n="today"+j.id,f=parseInt(j.getAttribute("total")),g=parseInt(j.getAttribute("unread")),i=getGlobalVarValue(n)||setGlobalVarValue(n,{v:Math.round(Math.random()*10000)}),o;
if(i.total!=f||i.unread!=g)
{
i.total=f;
i.unread=g;
i.v+=10000;
}
preLoad("html","",[j.href=o="/cgi-bin/"+j.href.split("/cgi-bin/").pop()+"&cacheage=600&v="+(i.v+rdVer("BaseVer",0))]);
var h=S(j.id),m;
if(h)
{
m=h.href;
h.href=location.protocol+"//"+location.host+o;
addEvent(d,"unload",function(){
h.href=m;
});
}
}
}
var s=c.S("vipAccount");
var t=c.S("foxmailAccount");
var e=c.sAlias.split("@").pop();
if(e=="vip.qq.com")
{
s.style.display="inline";
c.S("vipAccountImg").src=getPath("image")+"vip_logo.gif";
}
else if(e=="foxmail.com")
{
t.style.display="inline";
c.S("foxmailAccountImg").src=getPath("image")+"logo_wfoxmail.gif";
}
if(c.bWeather)
{
var r=c.S("todayWeather");
if(r)
{
r.src=attr(r,"url");
r.style.visibility="visible";
}
r=c.S("tomorrowWeather");
if(r)
{
r.src=attr(r,"url");
r.style.visibility="visible";
}
}
var p=getUserCookie("advfrom");
if(p=="active")
{
var u=c.S("activepage");
u.click();
var q=new Date();
q.setTime(-1);
d.document.cookie="advfrom"+"="+""+"; expires="+q+"; path=/; domain=mail.qq.com";
}
;
},100);
},_showSplitNor:function(c,e){
var d=this;
if(c=="reminderNew")
{
if(d.S("birthCardRecommend")&&d.S("birthCardRecommend").innerHTML.indexOf("\u751F\u65E5")>-1)
{
e="\uFF0C"+e;
}
}
if(c=="reminderRecommend")
{
if(d.S("birthCardRecommend")&&d.S("birthCardRecommend").innerHTML.indexOf("\u751F\u65E5")>-1)
{
e+="\uFF0C";
}
}
if(c=="birthCardRecommend")
{
if(d.S("reminderNew")&&d.S("reminderNew").innerHTML.indexOf("\u65B0\u5EFA\u63D0\u9192")>-1)
{
e+="\uFF0C";
}
if(d.S("reminderRecommend")&&d.S("reminderRecommend").innerHTML.indexOf("\u63D0\u9192")>-1)
{
e="\uFF0C"+e;
}
}
show(d.S("reminderNewSplit"),true);
d.S(c).innerHTML=e;
},befdonereminder:function(){
var c=this,d=c._moWin;
if(d.document.forms['frm_reminder'].linktitle.value=="\u586B\u5199\u63D0\u9192\u5185\u5BB9...")
{
c.S('errorinfo_reminder').innerHTML='<span class=\"txt_red\">\u8BF7\u586B\u5199\u8981\u63D0\u9192\u7684\u5185\u5BB9</span>';
d.document.forms['frm_reminder'].linktitle.focus();
return false;
}
return true;
},befdone:function(){
var c=this._moWin;
if(c.document.forms['frm'].emailadrress.value=="\u4F8B\uFF1Ayourname@21cn.com")
{
_oSelf.S('errorinfo_pop').innerHTML='<span class=\"txt_red\">\u8BF7\u8F93\u5165\u60A8\u7684\u5176\u4ED6\u90AE\u7BB1\u5730\u5740</span>';
c.document.forms['frm'].emailadrress.focus();
return false;
}
if(!checkMail(c.document.forms['frm'].emailadrress.value))
{
return false;
}
return true;
},_todayMinSize:function(){
var d=this,f=d._moWin;
var h=f.document.body.clientWidth;
if(h<700)
{
d.S("todayMain").style.marginRight="10px";
d.S("todayTool").style.display="none";
d.S("todayMain2").style.marginRight="10px";
d.S("todayTool2").style.display="none";
}
else if(h>720)
{
d.S("todayMain").style.marginRight="320px";
d.S("todayTool").style.display="inline";
d.S("todayMain2").style.marginRight="320px";
d.S("todayTool2").style.display="inline";
}
var e=d.S("today_toolPanel");
if(e)
{
var g="today_toolPanel";
var c=e.offsetWidth;
if(c<=525)
{
e.className=g+" today_toolPanel_min";
}
else{
e.className=g;
}
}
},_initUpdateStatistic:function(){
getTop().addEvent(this.S('updateLog'),"click",function(){
getTop().QMAjax.send("/cgi-bin/today?clicknews=yes&kvclick=today|update|fromtody|1");
});
},_initBillUnread:function(){
var d=getTop();
var c=this;
c.bOpenBill&&d.QMAjax.send(getTop().gsNodejslogichost+'/bill/newcount',{onload:function(e,f){
if(e)
{
var h=d.eval('('+f+')');
if(h.data)
{
h=h.data;
}
var j=d.S('last_bill_date_link',d.getMainWin());
var i=d.S('last_bill_date',d.getMainWin());
if(h&&h.newbillcount>0)
{
var l=d.S('today_bill_unread_count',d.getMainWin());
var k=d.finds('span',l);
d.setHTML(k[0],h.newbillcount);
d.show(l,true);
c._moQmTab.change('info');
}
if(h&&h.lastbilltime>=0&&i)
{
if(h.lastbilltime==0)
{
d.setHTML(i,'\u6DFB\u52A0\u8D26\u5355');
}
else{
var g=new Date(h.lastbilltime*1000);
var m=[g.getFullYear(),'\u5E74',1+g.getMonth(),'\u6708'].join('');
d.setHTML(i,m);
}
}
}
}});
},S:function(c){
var d=this;
return S(c,d._moWin);
}};
b.create=function(d,e,c){
return d[e]=new b(d,c);
};
a.qmToday=b;
})(window);
