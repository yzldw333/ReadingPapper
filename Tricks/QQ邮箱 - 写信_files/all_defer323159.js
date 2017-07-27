;(function(){
var b=getTop(),a=["IE","FF","Safari","Edge","Opera","360","Chrome","Sogou","QB"],c="Sogou,QB,360",d=gbIsWebKit?"webkit":"ie",g=gsAppVer.indexOf("qqbrowser")!=-1,f=function(){
try{
if(/UBrowser/i.test(navigator.userAgent)||gbIsIE||gbIsSogou)
{
return '';
}
if(typeof window.scrollMaxX!=='undefined')
{
return '';
}
var i='track' in document.createElement('track');
var k=window.chrome&&window.chrome.webstore?Object.keys(window.chrome.webstore).length:0;
if(window.clientInformation&&window.clientInformation.permissions)
{
return '';
}
if(i)
{
return k>1?'360ee':'360se';
}
return '';
}
catch(j)
{
return '';
}
}();
function e()
{
var j="other",k="",l="";
for(var m=0,n=a.length;m<n;m++)
{
if(b["gbIs"+a[m]])
{
j=a[m];
if(c.indexOf(j)>-1)
{
k=d;
}
if(j=="360")
{
j=b["gbIs"+j];
}
else if(j=="IE")
{
l=gnIEVer;
}
break;
}
}
return {name:j+k,version:l};
}
function h(k,i)
{
var j=e(),l=j.name.toLowerCase()+(j.version?("|"+j.version):"");
b.LogKV({sSendMode:k||"delay",sValue:(i||"")+"|"+l});
}
b.gbIsQB=g;
b.gbIs360=f;
b.getBrowserInfo=e;
b.reportBrowser=h;
})();
;(function(){
setTimeout(function(){
try{
getMainWin().src||getMainWin().document;
}
catch(d)
{
b();
c();
}
},0);
function b()
{
var d=_oTop.location.href;
if(/https:/.test(_oTop.location.protocol))
{
return;
}
detectConnection(QMDistributeDomain.getHost()+"/zh_CN/htmledition/images/spacer.gif?r="+Math.random(),null,function(){
_oTop.LogKV({sSendMode:"realtime",sValue:"http|cannot|connect|set"});
a();
if(_oTop.gsAllowNoSet!="1")
{
return;
}
else if(d.indexOf("&nodmset=1")==-1)
{
d+="&nodmset=1";
_oTop.LogKV({sSendMode:"realtime",sValue:"http|cannot|connect|set|redirect"});
_oTop.location.replace(d);
}
});
}
function a()
{
var e=["set1","set2","set3"],d=false;
for(var f=0,g=e.length;f<g;f++)
{
if(QMDistributeDomain.getHost().indexOf(e[f])>-1)
continue;
(function(h){
detectConnection("//"+e[h]+".mail.qq.com/zh_CN/htmledition/images/spacer.gif?r="+Math.random(),function(){
if(d)
{
return;
}
_oTop.LogKV({sSendMode:"realtime",sValue:"http|can|connect|set|other"});
d=true;
});
})(f);
}
}
function c()
{
var e=getTop();
if(/http:/.test(e.location.protocol))
{
return;
}
var d=0,f=e.location.href;
detectConnection(QMDistributeDomain.getHost()+"/zh_CN/htmledition/images/spacer.gif?r="+Math.random(),function(){
if(d<0)
{
setTimeout(function(){
e.location.replace(f);
});
}
d+=1;
},function(){
f=f.replace(/^https/i,"http");
e.LogKV({sSendMode:"realtime",sValue:"https|cannot|connect|set"});
var g=e.getBrowserInfo(),h=g.name.toLowerCase()+(g.version?("|"+g.version):"");
e.LogKV({sSendMode:"realtime",sValue:"https|cannot|connect|set|"+h});
if(d!=0)
{
setTimeout(function(){
e.location.replace(f);
});
}
else{
d+=-1;
}
});
detectConnection("//rescdn.qqmail.com/zh_CN/htmledition/images/spacer.gif?r="+Math.random(),function(){
if(d<0)
{
setTimeout(function(){
e.location.replace(f);
});
}
d+=1;
},function(){
var g=f;
if(f.indexOf("&res=local")==-1)
{
f+="&res=local";
e.LogKV({sSendMode:"realtime",sValue:"https|cannot|connect|cdn"});
}
if(d!=0)
{
if((g==f)&&(d>0))
{
return;
}
setTimeout(function(){
e.location.replace(f);
});
}
else{
d+=-1;
}
});
}
})();
function detectConnection(c,b,a)
{
var d=function(){
},e=new Image();
e.onerror=a||d;
e.onload=b||d;
e.style.cssText="display:none";
e.src=c;
_oTop.document.body.appendChild(e);
}
;(function(){
var a={};
a._TIP_FULL_TEXT="\u90AE\u4EF6\u5168\u6587\u641C\u7D22...",a._TIP_NORMAL_TEXT="\u90AE\u4EF6\u641C\u7D22...",a.search=function(d){
var f=S("subject"),e={sid:getSid(),searchmode:d||"",folderid:d=="gmnormal"?"8":"all",stat:d=="attach"?"8":"6"},h=trim(f.value),g={};
changeStatus(1);
e.subject=e.sender=e.receiver=((h===a._TIP_FULL_TEXT||h===a._TIP_NORMAL_TEXT)?"":encodeURI(h));
if(d=="note")
{
g=T(['/cgi-bin/note_list?sid=$sid$&s=search&keyword=$subject$']);
}
else if(d=="attach")
{
g=T(['/cgi-bin/attachfolder?sid=$sid$&s=search&folderid=all&hflag=all&page=0&keytext=$subject$','&searchmode=$searchmode$&topmails=0&advancesearch=0&loc=frame_html,,,$stat$']);
}
else{
QMMLCache.upVer();
if(attr(f,"fullsearch")==1)
{
g=T(['/cgi-bin/mail_list?sid=$sid$&s=search&folderid=$folderid$&page=0&subject=$subject$&sender=$sender$','&receiver=$receiver$&searchmode=$searchmode$&topmails=0&advancesearch=0&loc=frame_html,,,$stat$']);
}
else{
g=T(['/cgi-bin/mail_list?sid=$sid$&s=search&folderid=$folderid$&page=0&keyword=$subject$&sender=$sender$','&receiver=$receiver$&topmails=0&advancesearch=3&combinetype=or&loc=frame_html,,,7']);
}
if(d=="gmnormal")
{
e.sender=e.receiver=null;
}
}
goUrlMainFrm(g.replace(e),false);
};
a._onevent=function(d){
return function(){
var f=S("subject"),e=S("subjectsearchLogo");
_oValue={focus:[f.getAttribute("focus")!="true","","","true"],blur:[f.value=="",(attr(f,"fullsearch")=="1")?a._TIP_FULL_TEXT:a._TIP_NORMAL_TEXT,"#a0a0a0","false"]}[d];
if(_oValue[0])
{
f.value=_oValue[1];
f.style.color=_oValue[2];
f.setAttribute("focus",_oValue[3]);
}
if(d=="focus"&&f.value!="")
{
a.QMAuto.show(b());
}
e&&(setClass(e,d=="focus"?"ss_icon ss_endicon ss_icon_return":"ss_icon ss_endicon ss_icon_arrowdown"));
};
};
a.onkeydown=function(d){
if(d.keyCode==13)
{
a.search();
}
};
function b()
{
var e=S("subject"),j=T("<div unselectable=\"on\" class=\"ss_drop_item\"><a href=\"javascript:;\" unselectable=\"on\"><span unselectable=\"on\" class=\"ss_icon ss_icon_mail\"></span>\u5305\u542B<b unselectable=\"on\">$keyword$</b>\u7684\u90AE\u4EF6</a></div>"),h=T("<div unselectable=\"on\" class=\"ss_drop_item\"><a href=\"javascript:;\"				unselectable=\"on\"><span class=\"ss_icon ss_icon_attach\" unselectable=\"on\"></span>\u5305\u542B<b unselectable=\"on\">$keyword$</b>\u7684\u9644\u4EF6</a></div>"),i=T("<div unselectable=\"on\" class=\"ss_drop_item\"><a href=\"javascript:;\"				unselectable=\"on\"><span class=\"ss_icon ss_icon_group\" unselectable=\"on\"></span>\u5305\u542B<b unselectable=\"on\">$keyword$</b>\u7684\u7FA4\u90AE\u4EF6</a></div>"),k=T("<div unselectable=\"on\" class=\"ss_drop_item\"><a href=\"javascript:;\"				unselectable=\"on\"><span class=\"ss_icon ss_icon_note\" unselectable=\"on\"></span>\u5305\u542B<b unselectable=\"on\">$keyword$</b>\u7684\u8BB0\u4E8B</a></div>"),f="<div class=\"ss_drop_item ss_drop_split\" unselectable=\"on\"><a unselectable=\"on\" href=\"javascript:;\">\u9AD8\u7EA7\u641C\u7D22...</a></div>",g=trim(e.value);
if(g=="")
{
return "";
}
else{
var d=13;
g=(g.length>d)?g.substring(0,d)+"...":g;
if(attr(e,"fullsearch")!="1")
{
return [{sId:"searchInMail",sItemValue:j.replace({keyword:htmlEncode(g)})},{sId:"advanceSearch",sItemValue:f}];
}
else{
return [{sId:"searchInMail",sItemValue:j.replace({keyword:htmlEncode(g)})},{sId:"searchInAttach",sItemValue:h.replace({keyword:htmlEncode(g)})},{sId:"searchInGroupMail",sItemValue:i.replace({keyword:htmlEncode(g)})},{sId:"searchInNotes",sItemValue:k.replace({keyword:htmlEncode(g)})},{sId:"advanceSearch",sItemValue:f}];
}
}
}
function c()
{
if(S("smartSearch"))
{
a.QMAuto=new QMAutoComplete({oInput:S("subject"),oPosObj:S("smartSearch"),sClassName:(getLocale()=="zh_CN")?"":"smart_search_menu",nWidth:(getLocale()=="zh_CN")?280:370,oClass:{classnormal:"ss_drop_item_wrap",classhigh:"ss_drop_item_wrap_hover"},ongetdata:function(){
return b();
},onselect:function(d){
if(d.sId=="searchInMail")
{
a.search();
}
else if(d.sId=="searchInAttach")
{
a.search("attach");
}
else if(d.sId=="searchInGroupMail")
{
getTop().ossLog("delay","all","stat=nothing&locval=search,group,,1");
a.search("gmnormal");
}
else if(d.sId=="searchInNotes")
{
a.search("note");
}
else{
showAdvanceSearchDialog();
}
}});
}
}
waitFor(function(){
return getTop().QMAutoComplete;
},function(d){
if(d)
{
c();
}
},1000,30000);
a.onfocus=a._onevent("focus");
a.onblur=a._onevent("blur");
window.QMFullTextSearch=a;
})();
function showAdvanceSearchDialog(a)
{
var d=getTop(),c={sid:d.getSid(),keyword:(a!="all")?encodeURI(trim(S("subject").value)):"",from:a},e=T('/cgi-bin/folderlist?sid=$sid$&t=searchoption&advancesearch=2&loc=frame_html,,9&advkeyword=$keyword$&from=$from$').replace(c),b=new QMDialog({sId:"advsearch",sTitle:"\u90AE\u4EF6\u9AD8\u7EA7\u641C\u7D22",sUrl:e,onload:function(){
d.gnIEVer==6&&(this.S("_dlgiframe_").src=this.S("_dlgiframe_").src);
},nWidth:461,nHeight:428});
}
function beforeFrameHtmlUnload()
{
var a=beforeFrameHtmlUnload._oFuncs,b;
for(var c in a)
{
b=(typeof a[c]=="function")&&a[c]();
if(b)
{
return b;
}
}
getTop().clearUploadCount();
}
beforeFrameHtmlUnload.add=function(b,a){
beforeFrameHtmlUnload._oFuncs[b]=a;
};
beforeFrameHtmlUnload._oFuncs={};
beforeFrameHtmlUnload.remove=function(a){
delete beforeFrameHtmlUnload._oFuncs[a];
};
beforeFrameHtmlUnload.add('Dialog',function(){
var b=["ftnupload_self","ftnupload_attach"];
var a=QMDialog();
for(var c in a)
{
if(a[c].option("status")=="min")
{
setTimeout(function(){
a[c].max();
},10);
return "\u60A8\u8FD8\u6709\u7A0B\u5E8F\u6B63\u5728\u8FD0\u884C\uFF0C\u786E\u5B9A\u5173\u95ED\uFF1F";
}
}
});
beforeFrameHtmlUnload.add('ftnModel',function(){
var a=window.QMFtnModels;
if(a&&a.oFtnLogic&&a.oFtnLogic.isUploading()&&!a.bForceCloseWin)
{
return "\u60A8\u8FD8\u6709\u6587\u4EF6\u5728\u4E0A\u4F20\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u4E48\uFF1F";
}
});
(function(b){
var a={};
var s=getTop();
a.iosSupportVer='2.2';
a.androidSupportVer='2.0.5';
a.sendPushMsg=function(v,w,x,u){
var y=v,A='',C=x?x:'';
var z=getTop();
var B=z.getSid();
if(w)
{
E(w,function(G,F){
A+='&'+F+'='+encodeURI(G);
});
}
var D='/cgi-bin/webpush?sid='+B+'&type='+y+A+'&phone='+C;
z.QMAjax.send(D,{method:'get',onload:function(F,H,G){
if(typeof u=='function')
{
u.apply(null,arguments);
}
}});
};
a.sendOssLog=function(u){
var v=getTop();
var w='sid='+v.getSid()+'&type='+encodeURI(u)+'&ef=js&stat=webpush';
v.ossLog('realtime','all',w);
};
a.changeIconStatus=function(u){
var w=getTop(),v=w.S('sendToMobileIcon'),x=u||'init';
_sCssPrefix=v.getAttribute('cssprefix');
setClass(v,_sCssPrefix+x);
};
var d=true;
var t=function(){
var u=getTop();
if(d&&a.isEditorHasContent())
{
u.confirmBox({title:'\u79BB\u5F00\u63D0\u793A',msg:'\u5173\u95ED\u540E\u5185\u5BB9\u5C06\u88AB\u6E05\u7A7A\uFF0C\u662F\u5426\u5173\u95ED\uFF1F',confirmBtnTxt:'\u662F',cancelBtnTxt:'\u5426',onreturn:function(v){
if(v)
{
a.clearFtn&&a.clearFtn();
d=false;
u.QMTabDialog('sendToMobile').close();
}
},onshow:function(){
u.gbIsMac||this.S("cancel").focus();
}});
return false;
}
else{
d=true;
return true;
}
};
a.GetEditorDefaultText=function(u){
var v='';
return u?v:["<div style='color:#a0a0a0;font-size:14px;'>",v,"</div>"].join("");
};
a.isEditorHasContent=function(u){
var w=a.GetEditorDefaultText(true);
var v=(getTop().QMEditor.getEditor('sendToMobile'));
var x='';
if(u)
{
x=v&&v.getContent();
}
else{
x=v&&trim(v.getContent(true));
}
return x&&w!=x;
};
a.disableToggleTab=function(u){
var v=finds('span[selected="false"]',(getTop()).QMTabDialog('sendToMobile').getPanelDom())[0];
if(u)
{
attr(v,'isdisabled','1');
addClass(v,'graytext');
}
else{
attr(v,'isdisabled','0');
rmClass(v,'graytext');
}
};
var e=function(u){
var x=getTop();
var w=x.S('sendToMobileIcon');
var v=finds('#btn_sendSelected',QMTabDialog('sendToMobile').getPanelDom())[0];
if(u)
{
addClass(v,'btn_blue_disabled');
}
else{
if(w&&x.hasClass(w,'icon_top_sendtomobile_uploading'))
{
return;
}
rmClass(v,'btn_blue_disabled');
}
};
var n=function(u){
var w=getTop();
var v=finds('[ui-type="sendError"]',w.QMTabDialog('sendToMobile').getPanelDom())[0];
show(v,u);
};
var p=function(u){
var v=finds('.dialog_mask',(getTop()).QMTabDialog('sendToMobile').getPanelDom())[0];
if(u)
{
(getTop()).show(v,true);
}
else{
(getTop()).show(v,false);
}
};
var g=function(u){
if(u)
{
a.disableToggleTab(true);
p(true);
e(true);
}
else{
a.disableToggleTab(false);
p(false);
e(false);
}
};
var h=function(){
var u=getTop();
u.QMFtnModels&&(u.QMFtnModels.bForceCloseWin=true);
if(u.frames['mainFrame']&&u.frames['mainFrame'].setNeedCloseConform)
{
u.frames['mainFrame'].setNeedCloseConform(false);
}
};
var l=function(u){
var A=['<div class="dialog_function send_txt_container" style="position:relative;">','<div class="send_txt_info" id="sendToMobileDefaultText" ck="click_defaultText" md="click_defaultText_down" mu="click_defaultText_up" onselectstart="return false;">\u8BF7\u8F93\u5165\u8981\u4F20\u5230\u624B\u673A\u7684\u5185\u5BB9</div>','<div id="QMEditorArea-sendToMobile" class="send_txt_editor_container" tIndex="2" accKey="q"></div>','<div class="dialog_mask" style="display:none;"></div>','</div>','<div class="dialog_operate dialog_operate_white">','<a class="left icon_sendtomobile_help" title="\u67E5\u770B\u8BE6\u60C5" href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001050&&id=23" target="_blank"></a>','<span class="send_txt_error txt_red" style="display:none;" ui-type="sendError">\u4F20\u9001\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002</span>','<a class="btn_blue btn_blue_disabled" id="btn_sendSelected" href="javascript:;" ck="submit_send">\u4F20\u5230\u624B\u673A</a>','<a class="btn_gray" id="btn_cancel" href="javascript:;" ck="cancel_send">\u53D6\u6D88</a>','</div>'];
var z=getTop();
z.insertHTML(u,'afterBegin',A.join(''));
var x=z.QMTabDialog('sendToMobile');
var w=finds('#sendToMobileDefaultText',x.getPanelDom())[0];
var y=z.QMEditor.createEditor({editorId:'sendToMobile',tbExternId:"QMEditorToolBarPlusArea-sendToMobile",editorAreaId:"QMEditorArea-sendToMobile",editorAreaWin:window,height:'161px',onfocus:function(){
if(z.QMEditor.getBreakLine().toLowerCase()==this.getContent().toLowerCase()||!a.isEditorHasContent(true)||'<br>'==this.getContent().toLowerCase())
{
z.show(w,true);
}
this.focus();
z.rmClass(w,'send_txt_info_blur');
},onkeydown:function(){
setTimeout(function(){
if(a.isEditorHasContent(true))
{
e(false);
z.show(w,false);
}
else{
e(true);
z.show(w,true);
}
},0);
},onpaste:function(){
setTimeout(function(){
if(a.isEditorHasContent(true))
{
e(false);
z.show(w,false);
}
},0);
},onblur:function(){
if(z.QMEditor.getBreakLine().toLowerCase()==this.getContent().toLowerCase()||!a.isEditorHasContent(true)||'<br>'==this.getContent().toLowerCase())
{
z.show(w,true);
if('off'!=z.attr(w,'focus'))
{
z.addClass(w,'send_txt_info_blur');
}
}
},onload:function(){
z.addEvent(this.getEditWin(),'dragenter',function(){
var B=z.finds('span[tab-num="1"]',z.QMTabDialog('sendToMobile').S('tab_title'))[0];
z.fireMouseEvent(B,'click');
});
}}).initialize('',false,0,0);
var v={rule:function(){
return {click:{"submit_send":{bPropagable:false},"cancel_send":{bPropagable:false},"click_defaultText":{bPropagable:false}},mousedown:{"click_defaultText_down":{bPropagable:false}},mouseup:{"click_defaultText_up":{bPropagable:false}}};
},events:function(){
return {"submit_send":function(B,C){
var D=finds('#btn_sendSelected',QMTabDialog('sendToMobile').getPanelDom())[0];
if(hasClass(D,'btn_blue_disabled'))
{
return false;
}
a.changeIconStatus('uploading');
z.QMTabDialog.get('sendToMobile').hide();
g(true);
n(false);
a.sendOssLog('note');
var F=z.getSid();
QMAjax.send('/cgi-bin/note_edit?sid='+F,{method:'post',content:T('sid=$sid$&catid=-1&contenttype=html&actiontype=send&content__html=$content__html$&loc=$loc$&t=$t$&ef=js&resp_charset=UTF8&jumplock=true').replace({t:encodeURIComponent('note_send_to_phone.json'),sid:z.getSid(),content__html:encodeURIComponent(z.QMEditor.getEditor('sendToMobile').getContent()),loc:encodeURIComponent('note_list,note_first_page,digest')}),onload:function(G,I,H){
if(G)
{
var J=evalValue(I)||{};
if(J.statusCode)
{
a.sendPushMsg(1,{msgid:J.cid},'',function(){
var K=arguments[0],L=arguments[1];
if(K)
{
var M=evalValue(L)||{};
if(0==M.ret)
{
z.QMEditor.getEditor('sendToMobile').setContent('');
a.disableToggleTab(false);
z.showInfo('\u5DF2\u4F20\u5230\u624B\u673A\uFF0C\u8BF7\u7559\u610F\u624B\u673A\u63D0\u9192');
a.changeIconStatus('init');
}
else{
if(M.errcode==-2)
{
a.IfUnloadConfirm=false;
showError('\u4F60\u5DF2\u9000\u51FA\u90AE\u7BB1\uFF0C\u8BF7<a href="/cgi-bin/loginpage?s=session_timeout" nocheck="true">[\u91CD\u65B0\u767B\u5F55]</a>',-1);
h();
}
else{
g(false);
n(true);
}
a.changeIconStatus('error');
}
}
else{
a.changeIconStatus('error');
g(false);
n(true);
}
});
}
else{
if(J.errcode&&J.errcode==-2)
{
a.IfUnloadConfirm=false;
showError('\u4F60\u5DF2\u9000\u51FA\u90AE\u7BB1\uFF0C\u8BF7<a href="/cgi-bin/loginpage?s=session_timeout"  nocheck="true">[\u91CD\u65B0\u767B\u5F55]</a>',-1);
h();
}
else{
g(false);
n(true);
}
a.changeIconStatus('error');
}
}
else{
a.changeIconStatus('error');
g(false);
n(true);
}
}});
preventDefault(B);
return false;
},"cancel_send":function(B,C){
z.QMTabDialog.get('sendToMobile').close();
preventDefault(B);
return false;
},"click_defaultText":function(B,C){
z.QMEditor.getEditor('sendToMobile').focus(0);
},"click_defaultText_down":function(B,C){
z.attr(C,'focus','off');
},"click_defaultText_up":function(B,C){
z.attr(C,'focus','on');
}};
}};
z.liveEvent(u,v);
};
var c=false,k=function(v){
var w=getTop(),u=document.createElement('div');
v.innerHTML='';
u.style.cssText='width:440px;height:253px;background:#fff;overflow:hidden;display:none;';
v.appendChild(u);
var x=['<div class="dialog_content">','<div class="dialog_function">','<div class="dialog_bg send_file_loading">','<div class="pre_load_act"><span class="ico_loading_all"></span></div>','</div>','</div>','<div class="dialog_operate dialog_operate_white">','<a class="left icon_sendtomobile_help" title="\u67E5\u770B\u8BE6\u60C5" href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001050&&id=23" target="_blank"></a>','<a class="btn_blue btn_blue_disabled" href="javascript:;">\u4F20\u5230\u624B\u673A</a>','<a class="btn_gray" href="javascript:;">\u53D6\u6D88</a>','</div>','</div>'];
_oLoadingDom=document.createElement('div');
_oLoadingDom.className='send_file_ct';
_oLoadingDom.innerHTML=x.join('');
v.appendChild(_oLoadingDom);
w.addEvent(CN('btn_gray',_oLoadingDom)[0],'click',function(y){
w.preventDefault(w.getEventTarget(y));
QMTabDialog('sendToMobile').close();
return false;
});
w.createIframe(window,w.T("/cgi-bin/readtemplate?sid=$sid$&t=ftn_bigattachSendToMoble").replace({sid:w.getSid()}),{scrolling:false,obj:u,onload:function(){
var z=this.parentNode.offsetWidth||440;
var y=this.parentNode.offsetHeight||253;
this.style.cssText='display:block; width: '+z+'px; height: '+y+'px;';
}});
a.BeforeFileUploadInit=function(){
c=true;
u.style.display='block';
_oLoadingDom.style.display='none';
};
};
var q=function(){
var u=QMTabDialog.get('sendToMobile');
if(b!=u)
{
u.show();
return;
}
d=true;
c=false;
a.bFileUploadInit=false;
new QMTabDialog({sId:'sendToMobile',nWidth:440,nHeight:289,bMin:true,sMinTabId:'sendToMobile',nY:120,onbeforeclose:function(){
return t.call(this);
},onclose:function(){
a.changeIconStatus('init');
},ontoggletab:function(w,v){
if(!c)
{
if(attr(v,'tab-num')=='1')
{
if(a.initFileUpload)
{
a.bFileUploadInit=false;
a.initFileUpload();
}
else{
a.bFileUploadInit=true;
}
}
else{
a.bFileUploadInit=false;
}
}
if(!gbIsFF)
{
if(w&&'0'==attr(v,'tab-num'))
{
QMEditor.getEditor('sendToMobile').focus();
}
else{
v.focus();
}
}
},onshow:function(){
var v=getTop();
if(!gbIsFF)
{
if('0'==attr(this.getSelectedTab(),'tab-num'))
{
v.QMEditor.getEditor('sendToMobile').focus();
}
}
if(!v.hasClass(v.S('sendToMobileIcon'),'icon_top_sendtomobile_uploading'))
{
p(false);
}
},oTabs:[{sTabTitle:'\u6587\u5B57',sTabContent:'',fInitTabContent:function(v){
l(v);
},bDefault:true},{sTabTitle:'\u6587\u4EF6',sTabContent:'\u6B63\u5728\u52A0\u8F7D\u4E2D...',fInitTabContent:function(v){
k(v);
},bDefault:false}]});
};
var j=function(){
var u=getTop();
_oUserInfo=u.goUserInfo;
return {iosInstall:parseInt(_oUserInfo.get('IOSWEBAPPVER'),10)||0,iosVer:_oUserInfo.get('IOSWEBAPPVERNEW')||'0',androidInstall:parseInt(_oUserInfo.get('ANDROIDWEBAPPVER'),10)||0,androidVer:_oUserInfo.get('ANDROIDWEBAPPVERNEW')||'0'};
};
var r=function(u,v){
_oUserInfo=(getTop()).goUserInfo;
if('ios'==u)
{
_oUserInfo.set({'IOSWEBAPPVER':1,'IOSWEBAPPVERNEW':v});
}
else{
_oUserInfo.set({'ANDROIDWEBAPPVER':1,'ANDROIDWEBAPPVERNEW':v});
}
};
var o=function(){
var v=getTop(),w=j(),y=(new Date()).valueOf(),A='',x='';
if(w.iosInstall||w.androidInstall)
{
A='\u66F4\u65B0\u5BA2\u6237\u7AEF';
x='\u6B64\u529F\u80FD\u9700\u65B0\u7248\u672CQQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF\u914D\u5408\u4F7F\u7528\uFF0C<br/>\u8BF7\u5148\u626B\u63CF\u4E8C\u7EF4\u7801\u66F4\u65B0\u5BA2\u6237\u7AEF\u3002';
}
else{
A='\u4E0B\u8F7D\u5E76\u5B89\u88C5';
x='\u6B64\u529F\u80FD\u9700QQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF\u914D\u5408\u4F7F\u7528\uFF0C<br/>\u8BF7\u5148\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u5B89\u88C5\u3002';
}
v.QMWebpush.getInst().addEvent(64,function(B,C){
var D=C&&C[0]||{};
if(64==B)
{
var H=D.st||'',G=D.os,J=D.ver,F='';
if(H=='download')
{
var I='';
if(G=='android')
{
I='\u5DF2\u626B\u63CF\u5E76\u5F00\u59CB\u4E0B\u8F7DQQ\u90AE\u7BB1\uFF0C\u8BF7\u5728\u5B89\u88C5\u5B8C\u6210\u540E<br/>\u7528\u6B64QQ\u90AE\u7BB1\u5E10\u53F7\u767B\u5F55\u4F7F\u7528\u3002';
}
else if(G=='ios')
{
I='\u652F\u6301\u6B64\u529F\u80FD\u7684iPhone\u7248\u5C1A\u672A\u53D1\u5E03\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01';
}
F=v.T(['<ul class="uploadfromapp_step">','<li ck="changeToScan" style="cursor:pointer">1.\u626B\u63CF\u4E8C\u7EF4\u7801</li>','<li class="ufa_actived">2.$stitle2$</li>','<li class="ufa_last">3.\u4F20\u9001\u5230\u624B\u673A</li>','</ul>','<div class="uploadfromapp_qr ufa_scaned">','<img src="/cgi-bin/generate_twodimcode?sid=$sid$&action=appdownload&skey=$skey$&type=sendtomobile" />','</div>','<p class="ufa_intro" style="width:266px;">$sys$&nbsp;','<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001050&&id=23" target="_blank"></a></p>']).replace({sys:I,sid:getTop().getSid(),skey:y,stitle2:A});
u.S('content').innerHTML=F;
}
else if(H=='login')
{
if('android'==G&&f(J,a.androidSupportVer)!=-1||'ios'==G&&f(J,a.iosSupportVer)!=-1)
{
u.close();
q();
r(G,J);
}
}
}
},true);
var z=v.T(['<ul class="uploadfromapp_step">','<li class="ufa_actived">1.\u626B\u63CF\u4E8C\u7EF4\u7801</li>','<li >2.$stitle2$</li>','<li class="ufa_last">3.\u4F20\u9001\u5230\u624B\u673A</li>','</ul>','<div class="uploadfromapp_qr">','<img src="/cgi-bin/generate_twodimcode?sid=$sid$&action=appdownload&skey=$skey$&type=sendtomobile" />','</div>','<p class="ufa_intro">$sdesc$&nbsp;<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001050&&id=23" target="_blank">\u8BE6\u60C5</a></p>']);
var u=new v.QMDialog({sId:'download-app',sTitle:'\u4F20\u9001\u5230\u624B\u673A',sBodyHtml:v.T(['<div class="uploadfromapp_wrap" id="content">',z,'</div>']).replace({sid:v.getSid(),skey:y,stitle2:A,sdesc:x}),nWidth:384,bAnimation:false,nY:120,onclose:function(){
v.QMWebpush.getInst().close(64);
},onload:function(){
var C=this;
var B={rule:function(){
return {click:{"changeToScan":{bPropagable:false}}};
},events:function(){
return {"changeToScan":function(D,F){
var G=z.replace({sid:v.getSid(),skey:y,stitle2:A,sdesc:x});
C.S('content').innerHTML=G;
}};
}};
v.liveEvent(C.getPanelDom(),B);
}});
};
var f=function(u,v){
u=String(u);
v=String(v);
if(u===v)
{
return 0;
}
var x=u.split(".");
var y=v.split(".");
var w=Math.min(x.length,y.length);
for(var z=0;z<w;z++)
{
if(parseInt(x[z])>parseInt(y[z]))
{
return 1;
}
if(parseInt(x[z])<parseInt(y[z]))
{
return -1;
}
}
if(x.length>y.length)
{
return 1;
}
if(x.length<y.length)
{
return -1;
}
return 0;
};
var m=function(){
var u=a.iosSupportVer;
_sAndroidSupportVer=a.androidSupportVer;
_oUserAppInfo=j();
if(_oUserAppInfo.iosInstall=='1'||_oUserAppInfo.androidInstall=='1')
{
return f(_oUserAppInfo.iosVer,u)!=-1||f(_oUserAppInfo.androidVer,_sAndroidSupportVer)!=-1;
}
else{
return false;
}
};
var i=function(u){
var v=(new Array(42)).join("-")+(new Array(5)).join(" ");
return [v,'\n',{"note":'\u91CD\u65B0\u52A0\u8F7D\u7F51\u9875\u540E\u5185\u5BB9\u5C06\u88AB\u6E05\u7A7A',"ftn":'\u91CD\u65B0\u52A0\u8F7D\u7F51\u9875\u540E\u6587\u4EF6\u5C06\u7EC8\u6B62\u4F20\u9001'}[u],'\n',v].join('');
};
a.IfUnloadConfirm=true;
beforeFrameHtmlUnload.add('sendToMobile',function(){
if(a.IfUnloadConfirm&&QMTabDialog('sendToMobile'))
{
var u=QMTabDialog('sendToMobile');
var w='';
if(a.isEditorHasContent()||(a.isFileUploadHasContent&&a.isFileUploadHasContent()))
{
var v=u.getSelectedTab(),x=attr(v,'tab-num');
if(a.isEditorHasContent()&&(a.isFileUploadHasContent&&a.isFileUploadHasContent()))
{
if(x=='0')
{
w=i('note');
}
else{
w=i('ftn');
}
}
else if(a.isEditorHasContent())
{
w=i('note');
}
else{
w=i('ftn');
}
setTimeout(function(){
u.show();
},10);
return w;
}
}
});
a.initSendToMobile=function(){
s.waitFor(function(){
return b!==s.QMEditor;
},function(u){
if(u)
{
q();
a.sendOssLog('ent_push');
}
else{
return false;
}
});
};
if(s.S('sendToMobile'))
{
a.sendOssLog('expose');
}
window.QMSendToMobile=a;
})();
function showAdvanceSearchMenu()
{
var c={"all":{sId:"0",sItemValue:"<div class=\"ss_drop_item\"><a href=\"javascript:;\"><span class=\"ss_icon ss_icon_mail\"></span>\u67E5\u770B\u6240\u6709\u90AE\u4EF6</a></div>"},"att":{sId:"1",sItemValue:"<div class=\"ss_drop_item\"><a href=\"javascript:;\"><span class=\"ss_icon ss_icon_attach\"></span>\u67E5\u770B\u6240\u6709\u9644\u4EF6</a></div>"},"grp":{sId:"3",sItemValue:"<div class=\"ss_drop_item\"><a href=\"javascript:;\"><span class=\"ss_icon ss_icon_group\"></span>\u67E5\u770B\u6240\u6709\u7FA4\u90AE\u4EF6</a></div>"},"nte":{sId:"4",sItemValue:"<div class=\"ss_drop_item\"><a href=\"javascript:;\"><span class=\"ss_icon ss_icon_note\"></span>\u67E5\u770B\u6240\u6709\u8BB0\u4E8B</a></div>"},"adv":{sId:"2",sItemValue:"<div class=\"ss_drop_item ss_drop_split\"><a href=\"javascript:;\">\u9AD8\u7EA7\u641C\u7D22...</a></div>"}},a=Scale.fixBodyWidth(document.body.clientWidth-284),b=62,d=attr(S("subject"),"fullsearch"),e=attr(S("subject"),"newattachfolder");
new (getTop().QMMenu)({oEmbedWin:window,nX:a,nY:b,nWidth:281,oItems:d==1?[c.all,c.att,c.grp,c.nte,c.adv]:[c.all,c.grp,c.nte,c.adv],sClassName:"ss_drop_wrap ",onitemclick:function(f){
var g={sid:getTop().getSid()};
if(f=="1")
{
changeStatus(1);
var h=h=T("/cgi-bin/attachfolder?topmails=0&sid=$sid$&s=search&folderid=all&hflag=all&page=0&subject=&sender=&receiver=&searchmode=attach&advancesearch=0").replace(g);
getTop().getMainWin().location.href=h;
}
else if(f=="0")
{
changeStatus(1);
var h=T("/cgi-bin/mail_list?topmails=0&sid=$sid$&s=search&folderid=all&page=0&subject=&sender=&receiver=&searchmode=&advancesearch=0").replace(g);
getTop().getMainWin().location.href=h;
}
else if(f=="3")
{
changeStatus(1);
var h=T("/cgi-bin/mail_list?sid=$sid$&folderid=8&page=0&t=mail_list_group").replace(g);
getTop().getMainWin().location.href=h;
}
else if(f=="4")
{
changeStatus(1);
var h=T("/cgi-bin/note_list?catid=0&sid=$sid$").replace(g);
getTop().getMainWin().location.href=h;
}
else{
showAdvanceSearchDialog("all");
}
}});
}
function showTaskPanel()
{
debug("showTaskPanel");
}
function ckDns(a)
{
E(a,function(b,d){
var c=(new Image());
c.src=["http://",b,"/zh_CN/htmledition/images/spacer.gif"].join("");
});
}
function navRightMenu(_aoDomObj,_aoEvent)
{
var _oDoc=_aoDomObj.ownerDocument,_oWin=_oDoc.defaultView||_oDoc.parentWindow,_anClientX=Scale.fixCursorPos(_aoEvent.clientX,'x')+bodyScroll(_oWin,'scrollLeft'),_anClientY=Scale.fixCursorPos(_aoEvent.clientY,'y')+bodyScroll(_oWin,'scrollTop'),_oTarget=getEventTarget(_aoEvent),_sMenuId,_sEtitle,_bIsShowMenu=false,_bIsFsSep=false,_oItemMap={_OPEN:{sId:"open",sItemValue:'\u6253\u5F00',oUrl:T("/cgi-bin/mail_list?sid=$sid$&s=unread&folderid=personal&flag=new&page=0&stype=myfolders&topmails=0")},_OPEN_NEW:{sId:"opennew",sItemValue:'\u65B0\u7A97\u53E3\u6253\u5F00'},_HR:{nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},_WRITE_GROUP_MAIL:{sId:"writegroupmail",sItemValue:'\u5199\u7FA4\u90AE\u4EF6'},_READ_RECORD:{sId:"readrecord",sItemValue:'\u7FFB\u9605\u6240\u6709\u8BB0\u4E8B'},_READ_NEW:{sId:"readnew",sItemValue:'\u67E5\u770B\u672A\u8BFB'},_WRITE_MESSAGE:{sId:"writemessage",sItemValue:'\u5199\u77ED\u6D88\u606F'},_CHECK_MAILING:{sId:"checkmailing",sItemValue:'\u67E5\u8BE2\u6295\u9012\u72B6\u6001'},_EMPTY_DEL:{sId:"emptydel",sItemValue:'\u6E05\u7A7A\u5DF2\u5220\u9664'},_MARK:{sId:"mark",sItemValue:'\u5168\u90E8\u6807\u4E3A\u5DF2\u8BFB'},_CREATE_TAG:{sId:"createtag",sItemValue:'\u65B0\u5EFA\u6807\u7B7E'},_SETTING:{sId:"setting",sItemValue:'\u8BBE\u7F6E'},_HIDE:{sId:"hide",sItemValue:'\u9690\u85CF\u6B64\u5E94\u7528'},_SHOW:{sId:"show",sItemValue:'\u663E\u793A\u6B64\u5E94\u7528'},_SHOWHIDE:{sId:"showhide",sItemValue:'\u5E94\u7528\u7BA1\u7406'},_CREATE_REMIND:{sId:"createremind",sItemValue:'\u65B0\u5EFA\u63D0\u9192'},_UPLOAD:{sId:"upload",sItemValue:'\u4E0A\u4F20\u6587\u4EF6'},_ADD_SUBSCRIPTION:{sId:"addsubscription",sItemValue:'\u6DFB\u52A0\u8BA2\u9605'},_MANAGE_GROUP_MAIL:{sId:"managegroupmail",sItemValue:'\u7FA4\u90AE\u4EF6\u7BA1\u7406'},_CHECK_UNANSWERED:{sId:"checkunanswered",sItemValue:'\u67E5\u8BE2\u672A\u88AB\u56DE\u590D\u72B6\u6001'},_DEL_INQUIRY:{sId:"delinquiry",sItemValue:'\u5220\u4FE1\u67E5\u8BE2'},_EMPTY_TRASH:{sId:"emptytrash",sItemValue:'\u6E05\u7A7A\u5783\u573E\u7BB1'},_MANAGE_SUBSCRIPTION:{sId:"managesubscription",sItemValue:'\u8BA2\u9605\u7BA1\u7406'},_WRITE_LOG:{sId:"writelog",sItemValue:'\u5199\u8BB0\u4E8B'},_WRITE_DAILY:{sId:"writedaily",sItemValue:'\u5199\u65E5\u5FD7'},_RECIEVED_INQUIRY:{sId:"revievedinquiry",sItemValue:'\u6536\u4FE1\u67E5\u8BE2'},_REPORT:{sId:"report",sItemValue:'\u4E3E\u62A5\u67E5\u8BE2'},_CREATE_FOLDER:{sId:"createfolder",sItemValue:'\u65B0\u5EFA\u6587\u4EF6\u5939'},_CREATE_MAILBOX:{sId:"createmailbox",sItemValue:'\u6DFB\u52A0\u5176\u4ED6\u90AE\u7BB1'},_MANAGE_FOLDER:{sId:"managefolder",sItemValue:'\u6587\u4EF6\u5939\u7BA1\u7406'},_MANAGE_MAILBOX:{sId:"managemailbox",sItemValue:'\u5176\u4ED6\u90AE\u7BB1\u7BA1\u7406'},_DEL_FOLDER:{sId:"delfolder",sItemValue:'\u5220\u9664\u6587\u4EF6\u5939'},_MANAGE_TAG:{sId:"managetag",sItemValue:'\u6807\u7B7E\u7BA1\u7406'},_RECIEVE_RECORD:{sId:"recieverecord",sItemValue:'\u6536\u53D6\u8BB0\u5F55'},_RECIEVE_POPMAIL:{sId:"recievepopmail",sItemValue:'\u6536\u53D6\u90AE\u4EF6'},_RECIEVE_ALL_POPMAIL:{sId:"recieveallpopmail",sItemValue:'\u5168\u90E8\u6536\u53D6'},_DEL_MAILBOX:{sId:"delmailbox",sItemValue:'\u5220\u9664\u6B64\u90AE\u7BB1'},_MAILBOX_SETING:{sId:"mailboxsetting",sItemValue:'\u4FEE\u6539\u8BBE\u7F6E'},_SHOW_MY_FOLDER:{sId:"showmyfolder",sItemValue:'\u7F6E\u9876\u663E\u793A'},_HIDE_MY_FOLDER:{sId:"hidemyfolder",sItemValue:'\u53D6\u6D88\u7F6E\u9876\u663E\u793A'},_SHOW_POP_FOLDER:{sId:"showpopfolder",sItemValue:'\u7F6E\u9876\u663E\u793A'},_HIDE_POP_FOLDER:{sId:"hidepopfolder",sItemValue:'\u53D6\u6D88\u7F6E\u9876\u663E\u793A'},_SHOW_TAG_FOLDER:{sId:"showtagfolder",sItemValue:'\u7F6E\u9876\u663E\u793A'},_HIDE_TAG_FOLDER:{sId:"hidetagfolder",sItemValue:'\u53D6\u6D88\u7F6E\u9876\u663E\u793A'}},_oCategoryMap={_NORMAL_OPEN:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._HR],_GROUPMAIL:[_oItemMap._WRITE_GROUP_MAIL,_oItemMap._MARK,_oItemMap._HR],_NOTEPAD_OPEN:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._READ_RECORD,_oItemMap._HR],_MAIL_LIST:[_oItemMap._READ_NEW,_oItemMap._MARK,_oItemMap._HR],_SENDED:[_oItemMap._CHECK_MAILING,_oItemMap._CHECK_UNANSWERED],_DELETED:[_oItemMap._EMPTY_DEL,_oItemMap._DEL_INQUIRY],_TRASH:[_oItemMap._MARK,_oItemMap._EMPTY_TRASH,_oItemMap._HR,_oItemMap._REPORT],_MAIL_SUBSCRIPTION:[_oItemMap._READ_NEW,_oItemMap._MARK,_oItemMap._HR,_oItemMap._MANAGE_SUBSCRIPTION],_TAG:[_oItemMap._CREATE_TAG,_oItemMap._MANAGE_TAG],_MYTAG:[_oItemMap._CREATE_TAG,_oItemMap._HR],_SETTING:[_oItemMap._SETTING,_oItemMap._HR],_MAILBOX_SETING:[_oItemMap._MAILBOX_SETING,_oItemMap._HR],_REMIND:[],_ATTACH:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._HR],_NOTEPAD:[_oItemMap._WRITE_LOG,_oItemMap._HR],_UPLOAD:[_oItemMap._UPLOAD,_oItemMap._HR],_READER:[_oItemMap._ADD_SUBSCRIPTION,_oItemMap._WRITE_DAILY,_oItemMap._MARK,_oItemMap._HR],_FOLDER_MANAGER:[_oItemMap._CREATE_FOLDER,_oItemMap._MANAGE_FOLDER],_MAILBOX_MANAGER:[_oItemMap._CREATE_MAILBOX,_oItemMap._MANAGE_MAILBOX,_oItemMap._HR]},_oMenuMap={"1":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._MAIL_LIST).concat([_oItemMap._RECIEVED_INQUIRY]),sName:"recievebox"},"notsysmsg":{oMenu:_oCategoryMap._NORMAL_OPEN.concat([_oItemMap._READ_NEW,_oItemMap._MARK]),sName:"personalmsg"},"sysmsg":{oMenu:_oCategoryMap._NORMAL_OPEN.concat([_oItemMap._READ_NEW,_oItemMap._MARK]),sName:"sysmsg"},"addrvip":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW],sName:"addrvip"},"starred":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW],sName:"starred"},"9":{oMenu:_oCategoryMap._NORMAL_OPEN.concat([_oItemMap._WRITE_MESSAGE]),sName:"message"},"8":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._GROUPMAIL).concat([_oItemMap._MANAGE_GROUP_MAIL]),sName:"groupmail"},"4":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW],sName:"draftbox"},"3":{oMenu:_oCategoryMap._NORMAL_OPEN.concat([_oItemMap._MARK]).concat(_oCategoryMap._SENDED),sName:"sended"},"5":{oMenu:_oCategoryMap._NORMAL_OPEN.concat([_oItemMap._MARK]).concat(_oCategoryMap._DELETED),sName:"deleted"},"6":{oMenu:_oItems=_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._TRASH),sName:"trashbox"},"personal":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._READ_NEW,_oItemMap._HR,_oItemMap._MARK,_oItemMap._HR,_oItemMap._CREATE_FOLDER,_oItemMap._MANAGE_FOLDER],sName:"personal"},"personalfolders":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._READ_NEW,_oItemMap._HR,_oItemMap._MARK,_oItemMap._HR,_oItemMap._CREATE_FOLDER,_oItemMap._MANAGE_FOLDER,_oItemMap._SHOW_MY_FOLDER],sName:"personalfolders"},"pop":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._READ_NEW,_oItemMap._HR,_oItemMap._RECIEVE_ALL_POPMAIL,_oItemMap._MARK,_oItemMap._HR,_oItemMap._CREATE_MAILBOX,_oItemMap._MANAGE_MAILBOX],sName:"pop"},"popfolders":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._READ_NEW,_oItemMap._HR,_oItemMap._RECIEVE_POPMAIL,_oItemMap._MARK,_oItemMap._HR,_oItemMap._CREATE_MAILBOX,_oItemMap._MANAGE_MAILBOX,_oItemMap._SHOW_POP_FOLDER],sName:"popfolders"},"mytopfolders":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._READ_NEW,_oItemMap._HR,_oItemMap._MARK,_oItemMap._HR,_oItemMap._CREATE_FOLDER,_oItemMap._MANAGE_FOLDER,_oItemMap._HIDE_MY_FOLDER],sName:"mytopfolders"},"poptopfolders":{oMenu:[_oItemMap._OPEN,_oItemMap._OPEN_NEW,_oItemMap._READ_NEW,_oItemMap._HR,_oItemMap._RECIEVE_POPMAIL,_oItemMap._MARK,_oItemMap._HR,_oItemMap._CREATE_MAILBOX,_oItemMap._MANAGE_MAILBOX,_oItemMap._HIDE_POP_FOLDER],sName:"poptopfolders"},"tagtopfolders":{oMenu:_oCategoryMap._NORMAL_OPEN.concat([_oItemMap._CREATE_TAG,_oItemMap._MANAGE_TAG,_oItemMap._HIDE_TAG_FOLDER]),sName:"tagtopfolders"},"tag":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._TAG),sName:"tag"},"tagfolders":{oMenu:_oCategoryMap._NORMAL_OPEN.concat([_oItemMap._CREATE_TAG,_oItemMap._MANAGE_TAG,_oItemMap._SHOW_TAG_FOLDER]),sName:"tagfolders"},"11":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._SETTING),sName:"plp"},"card":{oMenu:_oCategoryMap._NORMAL_OPEN,sName:"card"},"postcard":{oMenu:_oCategoryMap._NORMAL_OPEN,sName:"postcard"},"reminder":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._REMIND),sName:"reminder"},"attach":{oMenu:_oCategoryMap._ATTACH,sName:"attach"},"note":{oMenu:_oCategoryMap._NOTEPAD_OPEN.concat(_oCategoryMap._NOTEPAD),sName:"note"},"ftn":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._UPLOAD),sName:"ftn"},"resume":{oMenu:_oCategoryMap._NORMAL_OPEN,sName:'resume'},"billassistant":{oMenu:_oCategoryMap._NORMAL_OPEN,sName:'billassistant'},"mydisk":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._UPLOAD),sName:"mydisk"},"reader":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._READER).concat(_oCategoryMap._SETTING),sName:"reader"},"morefunction":{oMenu:[_oItemMap._SHOWHIDE],sName:"morefunction"},"bookfolders":{oMenu:_oCategoryMap._NORMAL_OPEN.concat(_oCategoryMap._MAIL_SUBSCRIPTION),sName:"bookfolders"}},_oItemFuncMap={"readnew":TE('/cgi-bin/readtemplate?sid=$sid$&t=unreadmail&folderid=$@$if($menuid$=="sysmsg"|$menuid$=="notsysmsg")$@$1$@$else$@$$menuid$$@$endif$@$&flag=new&topmails=0&stype=$@$if($menuid$=="personal")$@$myfolders$@$else if($menuid$=="pop")$@$myotherinbox$@$else if($menuid$=="sysmsg")$@$&flag=system$@$else if($menuid$=="notsysmsg")$@$&flag=~system$@$endif$@$'),"writegroupmail":T("/cgi-bin/grouplist?t=compose_group&sid=$sid$&newwin="),"managegroupmail":T("/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list"),"checkmailing":T("/cgi-bin/help_static_send?sid=$sid$"),"checkunanswered":T("/cgi-bin/mail_list?sid=$sid$&folderid=3&daterange=5&collolimit=0&combinetype=and&t=help_static_unreply"),"revievedinquiry":T("/cgi-bin/help_static_receive?sid=$sid$&foldertype=0"),"delinquiry":T("/cgi-bin/help_static_delete?sid=$sid$"),"report":T("/cgi-bin/help_report_spam?sid=$sid$"),"managesubscription":T("/cgi-bin/setting10?action=list&t=setting10&sid=$sid$"),"writelog":T("/cgi-bin/cataloglist?sid=$sid$&t=note_edit_show&catid="),"writedaily":T("/cgi-bin/readtemplate?sid=$sid$&t=compose&s=SendToQZone&entrance=rss"),"writemessage":T("/cgi-bin/readtemplate?sid=$sid$&t=sms_list_v2&go=compose"),"createremind":T("/cgi-bin/reminder_list?t=remind&sid=$sid$&sorttype=create&filter=1&fn=1&loc=folderlist,,,39&pageaction=createremind"),"readrecord":T("/cgi-bin/note_list?sid=$sid$&catid=0"),"createmailbox":T("/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail&acctid=0"),"folder":TE('/cgi-bin/folderlist?t=folderlist_setting&s=null&sid=$sid$&info=true$@$if($itemid$=="managetag")$@$&jump=tag#mytagdiv$@$else$@$&jump=myfolders$@$endif$@$'),"mailbox":T("/cgi-bin/folderlist?t=poplist_setting&s=null&sid=$sid$"),"showhide":T("/cgi-bin/foldermgr?sid=$sid$&fun=showfldflags&t=setting_folder"),"addsubscription":T("http://r.mail.qq.com/cgi-bin/reader_main?sid=$sid$&t=r_index&source=folderlist&hash=search%3Fkeyworkd%3D"),"recieverecord":T("/cgi-bin/help_static_pop?sid=$sid$&domain=$etitle$"),"mailboxsetting":T("/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail&folderid=$menuid$&acctid=$acctid$&s=maillist"),"upload":{"ftn":T("/cgi-bin/readtemplate?sid=$sid$&t=ftn&navcmd=nav,autoupload"),"mydisk":T("/cgi-bin/ftnList?sid=$sid$&t=exs_ftn_mydisk&listtype=mydisk&bus=6&list=0&display=list&autostart=1")},"setting":{"reader":T("http://r.mail.qq.com/cgi-bin/reader_main?sid=$sid$&t=r_index&source=folderlist&hash=setting/general"),"11":T("/cgi-bin/bottle_panel?sid=$sid$&t=bottle&loc=folderlist,,,33&func=setting")}},_oItems=[];
while(_oTarget.tagName!="LI"&&_oTarget.tagName!="BODY")
{
var _sFolderName=_oTarget.id,_oParent=_oTarget.parentNode;
if(_sFolderName.match(/folder_.*/))
{
var _oMapItem;
_sEtitle=_oTarget.getAttribute("etitle");
_sMenuId=_sFolderName.replace("folder_","").replace("_td","").replace("_ns","");
_oMapItem=_oMenuMap[_sMenuId]?_oMenuMap[_sMenuId]:_oMenuMap[_oTarget.getAttribute("name")+"folders"];
_oItems=_oMapItem?_oMapItem["oMenu"]:[];
_sMenuName=_oMapItem?_oMapItem["sName"]:"";
_oTarget=_oParent.tagName=="LI"?_oParent:_oTarget;
break;
}
else{
_oTarget=_oParent;
}
}
if(_oItems&&_oItems.length>0)
{
var _oParent=_oTarget.parentNode,_sParentId=_oParent.id;
if(_sParentId=="morefunctionfolders")
{
_oItems=_oItems.concat([_oItemMap._SHOW]);
}
else if(_sParentId=="my_note"||_oParent.tagName=="SPAN")
{
_oItems=_oItems.concat([_oItemMap._HIDE]);
}
ossLog("delay","all","stat=right&menuid="+_sMenuName);
var _oMenu=new QMMenu({sId:_sMenuId,oEmbedWin:_oWin,nWidth:"auto",nMaxWidth:180,nMaxItemView:14,sClassName:"qmpanel_shadow",bAnimation:false,bAutoClose:true,oItems:_oItems,onitemclick:function(_asId,_aoItemConfig){
var _oUrl,_sUrl="",_sAcctid="",_oLoc=getTop().getMainWin().location;
ossLog("delay","all","stat=right&menuid="+_sMenuName+"&opr="+_asId);
switch(_asId)
{case "opennew":
QMMLCache.upVer();
var _oEvent={shiftKey:true};
case "open":
var _oItem=S("folder_"+_sMenuId),_oEvent=_oEvent||null;
fireMouseEvent(_oItem,"mousedown",_oEvent);
fireMouseEvent(_oItem,"click",_oEvent);
break;
case "writemessage":
var _oItem=S("folder_"+9);
switchFolder("folder_"+_sMenuId);
_oLoc.href=_oItem.href+"&go=compose";
break;
case "mark":
if(_sMenuId=="reader")
{
var _oForm=_oDoc.createElement("form");
_oForm.action=gsRssDomain+"/cgi-bin/reader_mgr?fun=setfeedread&type=all&sid="+getSid();
_oForm.method="post";
_oForm.target="actionFrame";
_oDoc.body.appendChild(_oForm);
_oForm.submit();
setRssUnread(0,0);
getTop().showInfo("\u9605\u8BFB\u7A7A\u95F4\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C\u6210\u529F");
if(S("folder_reader_td").className=="fn")
{
reloadFrm(getTop().getMainWin());
}
}
else{
var _osysTag={"notsysmsg":"~system","sysmsg":"system"};
QMAjax.send("/cgi-bin/mail_mgr?mailaction=read_all&t=unreadmail_reg_data",{method:"POST",content:T('sid=$sid$&folderid=$folderid$&flag=$flag$').replace({sid:getSid(),folderid:(_sMenuId=="notsysmsg"||_sMenuId=="sysmsg")?1:_sMenuId,flag:_osysTag[_sMenuId]||""}),onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oItem$=S("folder_"+_sMenuId+"_td"),_oParent$=_oItem$.parentNode;
reloadLeftWin();
if(_oItem$.className=="fn"||(_oParent$.id=="personalfolders"&&S("folder_personal_td").className=="fn")||(_oParent$.id=="popfolders"&&S("folder_pop_td").className=="fn"))
{
reloadFrm(getTop().getMainWin());
getTop().showInfo("\u6587\u4EF6\u5939\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C\u6210\u529F");
}
if(_sMenuId=="personal"||_sMenuId=="pop")
{
var _oChildren=S(_sMenuId+"folders").getElementsByTagName("LI");
for(var i=0;i<_oChildren.length;i++)
{
if(_oChildren[i].className=="fn")
{
reloadFrm(getTop().getMainWin());
getTop().showInfo("\u6587\u4EF6\u5939\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C\u6210\u529F");
break;
}
}
}
if(_asParam)
{
try{
var _oResult=eval(_asParam);
setRollBack(_oResult.rbkey,"\u6587\u4EF6\u5939\u64CD\u4F5C");
}
catch(e)
{
}
}
}
}});
}
break;
case "emptydel":
case "emptytrash":
var _oA=S("folder_"+_sMenuId).nextSibling;
_oA=_oA.tagName=="A"?_oA:_oA.nextSibling;
if(_oA)
{
fireMouseEvent(_oA,"click");
}
break;
case "createtag":
QMTag.newMailTag();
break;
case "createfolder":
moveMailJs('new','',"",{bML:true,oMail:[],oWin:[],bIsJump:true});
break;
case "managefolder":
case "managetag":
case "delfolder":
_oUrl=_oItemFuncMap["folder"];
break;
case "managemailbox":
case "delmailbox":
_oUrl=_oItemFuncMap["mailbox"];
break;
case "show":
case "hide":
case "morefunction":
_oUrl=_oItemFuncMap["showhide"];
break;
case "upload":
getTop().setUserCookie('ftAutoStart',1);
getTop().ftSendStatic('1106',getUin());
_oUrl=_oItemFuncMap["upload"][_sMenuId];
break;
case "setting":
_oUrl=_oItemFuncMap["setting"][_sMenuId];
break;
case "mailboxsetting":
_sAcctid=S("folder_"+_sMenuId).getAttribute("acctid");
_oUrl=_oItemFuncMap[_asId];
break;
case "createremind":
getTop().setUserCookie('ftAutoStart',1);
getTop().ftSendStatic('1106',getUin());
_oUrl=_oItemFuncMap[_asId];
break;
case "recieveallpopmail":
getTop().recvPopAll();
break;
case "recievepopmail":
_sAcctid=S("folder_"+_sMenuId).getAttribute("acctid");
getTop().recvPop(_sAcctid,_sMenuId,getTop().getMainWin());
break;
case "showmyfolder":
case "showpopfolder":
case "showtagfolder":
QMMLCache.upVer();
var _sFunValue,_sShowType,_sIdName,_sId,_sURL,_sItemId=_sMenuId;
if(_sItemId.indexOf("tag")<0)
{
_sFunValue="setshowfolder";
_sShowType="show";
_sIdName="folderid";
_sId=_sItemId;
}
else{
_sFunValue="setshowtag";
_sShowType="show";
_sIdName="tagid";
_sId=_sItemId.substr(4);
}
_sURL=T("/cgi-bin/foldermgr?t=foldermgr_json&resp_charset=UTF8&ef=js&sid=$sid$&fun=$funvalue$&showtype=$showtype$&$idname$=$id$&kvclick=foldermgr|topfolder|rclick$showtype$|1").replace({funvalue:_sFunValue,showtype:_sShowType,idname:_sIdName,id:_sId,sid:getTop().getSid()});
QMAjax.send(_sURL,{method:"GET",onload:function(_abIsOk,_asParam,_aoXmlObj){
if(_abIsOk)
{
var _oResult=evalValue(_asParam);
if(_oResult.setshowret=="true")
{
showInfo("\u8BBE\u7F6E\u6210\u529F");
reloadLeftWin();
}
}
}});
break;
case "hidemyfolder":
case "hidepopfolder":
case "hidetagfolder":
QMMLCache.upVer();
var _sFunValue,_sShowType,_sIdName,_sId,_sURL,_sItemId=_sMenuId;
if(_sItemId.indexOf("tag")<0)
{
_sFunValue="setshowfolder";
_sShowType="unshow";
_sIdName="folderid";
_sId=_sItemId;
}
else{
_sFunValue="setshowtag";
_sShowType="unshow";
_sIdName="tagid";
_sId=_sItemId.substr(4);
}
_sURL=T("/cgi-bin/foldermgr?t=foldermgr_json&resp_charset=UTF8&ef=js&sid=$sid$&fun=$funvalue$&showtype=$showtype$&$idname$=$id$&kvclick=foldermgr|topfolder|rclick$showtype$|1").replace({funvalue:_sFunValue,showtype:_sShowType,idname:_sIdName,id:_sId,sid:getTop().getSid()});
if(finds("#folder_"+_sMenuId+" img",document)[0])
{
var _sMainUrl=T("/cgi-bin/readtemplate?sid=$sid$&t=checkpwd&delegate_url=$delegate_url$").replace({sid:getTop().getSid(),delegate_url:encodeURIComponent(encodeURIComponent(_sURL+"&lock=true"))});
getMainWin().location.href=_sMainUrl;
}
else{
QMAjax.send(_sURL,{method:"GET",onload:function(_abIsOk,_asParam,_aoXmlObj){
if(_abIsOk)
{
var _oResult=evalValue(_asParam);
if(_oResult.setshowret=="true")
{
showInfo("\u8BBE\u7F6E\u6210\u529F");
reloadLeftWin();
}
}
}});
}
break;
case "createmailbox":
toAddAccountPage();
break;
case "readnew":
if(!getGlobalVarValue("unreadlist"))
{
_oUrl=TE("/cgi-bin/mail_list?sid=$sid$&page=0&flag=new&s=unread&sFrom=folderlist&folderid=$menuid$&loc=folderlist,,,100");
break;
}
default:
_oUrl=_oItemFuncMap[_asId];
}if(_oUrl)
{
_sUrl=_oUrl.replace({sid:getSid(),menuid:_sMenuId,itemid:_asId,etitle:_sEtitle,acctid:_sAcctid});
switchFolder("folder_"+_sMenuId);
_oLoc.href=_sUrl;
}
},onload:function(){
var _oMenuObj=this;
if(_oMenuObj.option("sId")==_sMenuId)
{
var _nHeight=parseInt(_oMenuObj.option("nHeight")),_nWidth=parseInt(_oMenuObj.option("nWidth")),_oPos=calcAdjPos([_anClientY,_anClientX,_anClientY,_anClientX],_nWidth,_nHeight,_oWin,1);
_oMenuObj.option("nX",_oPos[3]).option("nY",_oPos[0]);
}
}});
if(_sMenuId!="reader"&&!_oTarget.getElementsByTagName("B").length)
{
_oMenu.itemOption("readnew","bDisSelect",true);
_oMenu.itemOption("mark","bDisSelect",true);
}
else if(_sMenuId=="reader")
{
var _sClassName=S("folder_reader").className;
if(!_sClassName.match(/bold/)||_sClassName.match(/normal/))
{
_oMenu.itemOption("mark","bDisSelect",true);
}
}
if(S("popfolders").getElementsByTagName("A").length>29)
{
_oMenu.itemOption("createmailbox","bDisSelect",true);
}
if(_oTarget.getElementsByTagName("A").length<2)
{
_oMenu.itemOption("emptydel","bDisSelect",true);
_oMenu.itemOption("emptytrash","bDisSelect",true);
}
var _oIMGs=_oTarget.getElementsByTagName("IMG");
if(_oIMGs.length>0&&_oIMGs[0].src.match(/ico_pwd/))
{
_oMenu.itemOption("readnew","bDisSelect",true);
_oMenu.itemOption("mark","bDisSelect",true);
_oMenu.itemOption("createfolder","bDisSelect",true);
_oMenu.itemOption("createmailbox","bDisSelect",true);
_oMenu.itemOption("recieverecord","bDisSelect",true);
}
}
preventDefault(_aoEvent);
}
function mailRightMenu(d,f)
{
var n=d.ownerDocument,q=n.defaultView||n.parentWindow,b=f.clientX+bodyScroll(q,'scrollLeft'),c=f.clientY+bodyScroll(q,'scrollTop'),a=BaseMailOper,k=a.getInstance(q),l=GelTags('input',d)[0],i=l.checked==true;
if(!k)
{
return;
}
if(!i)
{
QMMailList.selectedUI({oMail:[]});
}
l.checked=true;
var m=k.getConfig();
function j(e)
{
var B=[],D=[],F=[],z=0,C=e.oMail,v=e.sFid=="11"||/^(LP|ZP)/.exec(C[0].sMid),y=C.length,t=false,A={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>',bDisSelect:true},I=T(['<div style="white-space:nowrap;zoom:1;">','<input type="button" class="item_square flagbg$flagbg$"/>','<span class="item_square_txt">$name$ &nbsp</span>','</div>']);
getTop().E(C,function(K){
if(K.sMid=='AC0000-00000000000000000000000')
{
t=true;
}
});
if(y==1&&!v)
{
if(!t)
{
B.push({sId:"preview",sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>\u9884\u89C8',oSubMenu:{sClassName:'rightpre qmpanel_shadow',nWidth:460,oItems:[{nHeight:350,sItemValue:T('<div scroll="true" id="pre" style="height:350px;width:438px;overflow-x:hidden;overflow-y:auto;"><div style="*margin:100px 0 0 0;height:64px;text-align:center;width:100%;"><center><img src="$images$ico_loading2.gif"/></center></div></div>').replace({images:getPath("image")})}],onload:function(){
var K=this,L=e.oMail[0].sMid;
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&folderid=$f$&t=quickreadmail&mailid=$m$&mode=preview&maxage=3600&ver=$v$').replace({v:rdVer(L,0),sid:getSid(),f:e.sFid,m:L}),{method:'GET',onload:function(M,O,N){
if(M)
{
ossLog("delay","all","stat=right&opr=preview");
var P=K.S('pre');
if(P)
{
P.style.lineHeight=1;
P.innerHTML=filteScript(O).replace(/<style ?.*>[\s\S]*?<\/style>/ig,"");
swapLink(P,"preview",P.ownerDocument,L);
}
}
}});
}}});
}
B.push({sId:"opennew",sItemValue:'\u65B0\u7A97\u53E3\u6253\u5F00'});
B.push(A);
}
var w=false;
for(var J=0;J<y;J++)
{
z+=C[J].bUnr?1:0;
C[J]&&C[J].bSys==1&&(w=true);
}
if(e.sFid!=5&&e.sFid!=6)
{
B.push({sId:"delmail",sItemValue:'\u5220\u9664'});
}
else{
B.push({sId:"predelmail",sItemValue:'\u5F7B\u5E95\u5220\u9664'});
}
if(!t)
{
if(!w&&m.bSpam&&e.sFid!=6&&!v)
{
B.push({sId:"spammail",sItemValue:"\u8FD9\u662F\u5783\u573E\u90AE\u4EF6"});
}
}
B.push(A);
if(m.bReadMode)
{
if(z)
{
B.push({sId:"read",sItemValue:"\u6807\u8BB0\u4E3A\u5DF2\u8BFB"});
}
if(z!=y)
{
B.push({sId:"unread",sItemValue:"\u6807\u8BB0\u4E3A\u672A\u8BFB"});
}
}
if(q.curListCanTopmail&&y==1&&!t&&e.sFid!="all"&&!C[0].bAdConv)
{
B.push({sId:"topmail",sItemValue:C[0].bTop?"\u53D6\u6D88\u7F6E\u9876":"\u90AE\u4EF6\u7F6E\u9876"});
}
if(y==1&&e.sFid!=14&&!t)
{
B.push({sId:"createreceiverule",sItemValue:"\u521B\u5EFA\u6536\u4FE1\u89C4\u5219"});
}
if(m.bTagMode&&!v)
{
var u=0;
for(var J=0;J<y;J++)
{
if(C[J].oTagIds.length)
{
u=true;
break;
}
}
if(u)
{
D.push({sId:'rmalltag',sItemValue:'\u53D6\u6D88\u6807\u7B7E'},extend({sId:'deltaghr'},A));
}
for(var H=QMTag.get(),J=0,x=H.length;J<x;J++)
{
var G=H[J];
D.push({sId:'tid_'+G.id,sItemValue:I.replace(G)});
}
if(x)
{
D.push(A);
}
D.push({sId:'newtag',sItemValue:'\u65B0\u5EFA\u6807\u7B7E'});
B.push({sId:"mark",sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>\u6807\u7B7E',oSubMenu:{oItems:D}});
}
if(!v)
{
B.push({sId:"move",sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>\u79FB\u52A8\u5230',oSubMenu:{oItems:m.moMoveItem}});
}
return B;
}
var o;
if(m.mnFolderType==0||m.mnFolderType==4)
{
o=QMMailList.getCBInfo(m.oWin);
QMMailList.selectedUI(o);
if(m.mnFolderType==4)
{
return;
}
}
else{
o=m.oWin.QMReadMail.getTag();
}
ossLog("delay","all","stat=right");
k.setMailInfo(o);
try{
getTop().QMProfileTips.doMouseEvent("out",getTop().getMainWin());
}
catch(s)
{
}
var g=null,r=unikey(),p=new QMMenu({sId:r,oEmbedWin:q,nWidth:"auto",nMaxWidth:180,nMaxItemView:14,sClassName:"qmpanel_shadow",bAnimation:false,bAutoClose:true,oItems:j(o),onitemclick:function(t,e){
ossLog("delay","all","stat=right&opr="+t);
k.apply(g=t,e.sItemValue,o);
},onbeforeclose:function(){
if(this.option("sId")==r)
{
if(!i&&(g==null||'|spammail|new|newtag|autotag|'.indexOf(g)<0))
{
try{
l.checked=false;
var t=QMMailList.getCBInfo(q);
QMMailList.selectedUI(t);
}
catch(u)
{
}
}
g=null;
}
return true;
},onload:function(){
var u=this;
if(u.option("sId")==r)
{
var e=parseInt(u.option("nHeight")),t=parseInt(u.option("nWidth")),v=calcAdjPos([c,b,c,b],t,e,q,1);
u.option("nX",Scale.fixOffsetLeft(v[3])).option("nY",Scale.fixOffsetTop(v[0]));
}
}});
if(m.mnFolderType==0)
{
var h=o.oMail.length;
p.itemOption("rmalltag","bDisplay",h);
p.itemOption("deltaghr","bDisplay",h);
}
}
(function(a){
var c=getTop().g_oGroupMailAddr={};
function b(g,f)
{
if(!g||g.indexOf("@g.qq.com")==-1)
{
return null;
}
if(c[g]&&c[g].length>0)
{
callBack(f,[c[g]]);
return c[g];
}
var h=["/cgi-bin/addr_listall?sid=",getSid(),"&t=mail_group&category=mailgroup&groupaddr=",g].join('');
QMAjax.send(h,{method:"GET",content:null,onload:function(i,k,j){
var l=evalValue(k);
if(l.members)
{
callBack(f,[c[g]=l.members]);
}
}});
return null;
}
var d={},e="ggoupmember";
a.showGGoupMember=function(g,f){
var h=f.ownerDocument,i=h.parentWindow||h.defaultView;
d[g]=1;
b(g,function(k){
if(d[g])
{
var m=calcPos(f),l=[{nHeight:35,sItemValue:'<div class="bold black"><img title="\u7FA4\u90AE\u4EF6" src="/zh_CN/htmledition/images/spacer.gif" class="lm_groupAutoIcon" style="margin-left:0;"/>'+g.replace(/@.*/,"")+' \u90AE\u4EF6\u7EC4\u6210\u5458</div>'},{nHeight:8,sItemValue:'<div style="background:#CCC; height:1px; overflow:hidden; margin:0 15px 0 0;"></div>'}];
for(var o=0,j=k.length;o<j;o++)
{
l.push({sItemValue:T('<div style="width:100px" class="left txtflow">$sNickName$</div><div class="txtflow">$sEmail$</div>').replace(k[o])});
}
l.push({nHeight:10,sItemValue:'<div style="height:5px;overflow:hidden;"></div>'});
f.title="";
var n=e+g;
_oMenu=QMMenu(n);
if(!_oMenu||!_oMenu.isShow())
{
hideMenuEvent();
new QMMenu({sClassName:"mailgroup_member",oEmbedWin:i,sId:n,nX:m[3],nY:m[2],nItemHeight:21,bAnimation:false,nWidth:300,nMaxItemView:12,oItems:l});
}
}
;
});
};
a.hideGGoupMember=function(f){
var h=e+f,g=QMMenu(h);
g&&g.autoClose();
d[f]=0;
};
a.clearGroupMailAddr=function(f){
if(f)
{
delete c[f];
}
else{
getTop().g_oGroupMailAddr={};
}
};
})(window);
;(function(){
if(window.gWebpSupport===undefined||window.gWebpSupport===3||gbIsIE)
{
return;
}
var b=getTop(),c=['data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=','data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==','data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='];
var a=function(g,f){
var h=new Image();
h.onload=function(){
if(h.width==1)
{
f(true);
}
else{
f(false);
}
};
h.onerror=function(){
f(false);
};
h.src=g;
};
function e(f)
{
var g=new Date();
g.setTime(g.getTime()+(365*24*60*60*1000));
b.setCookie('webp',''+(f?1:0),g);
if(gWebpSupport!==2)
{
gWebpSupport=(gWebpSupport===1)?true:false;
if(gWebpSupport!==f)
{
if(gWebpSupport===true)
{
h(function(){
window.location.search+='&webp=false';
});
}
else{
h();
}
}
}
else{
h();
}
function h(i)
{
i=i||function(){
};
var k=(b.gsOsslogDomain||'http://rl.mail.qq.com')+'/cgi-bin/getinvestigate?sid='+b.getSid()+'&stat=uainfo&action=report&webp='+f;
var j=new Image();
j.onerror=i;
j.src=k;
}
}
;var d=window.localStorage&&window.localStorage.getItem('webp');
if(d)
{
if(d==='true')
{
e(true);
}
else{
e(false);
}
}
else{
a(c[1],function(f){
window.localStorage&&window.localStorage.setItem('webp',f);
e(f);
});
}
})();
;(function(){
var a=getTop();
a.addEvent(a.S('composebtn',a),'click',function(){
a.ossLogComposeInitTime('WScreen');
});
})();
function all_defer_js()
{
}
function isResCdn(a)
{
if(a)
{
return a.indexOf("rescdn.qqmail.com")!=-1||a.indexOf("res.mail.qq.com")!=-1;
}
}
function supportCss3(f)
{
var e=['webkit','Moz','ms','o'],d,c=[],b=document.documentElement.style,a=function(g){
return g.replace(/-(\w)/g,function(h,i){
return i.toUpperCase();
});
};
for(d in e)
c.push(a(e[d]+'-'+f));
c.push(a(f));
for(d in c)
if(c[d] in b)
{
return true;
}
return false;
}
function reportLoongson(b)
{
var a=getTop(),c=window.navigator.userAgent;
if(c.toLowerCase().indexOf("mips64")>-1)
{
a.LogKV(b);
}
}
