function QMStationery()
{
this._moStationery=[["\u7CFB\u7EDF\u4FE1\u7EB8",128],["\u6211\u7684\u4FE1\u7EB8",9999]];
this._mnCurrentPage=1;
this._mnStart=0;
this._mnPerPage=8;
this._msStationeryType="";
this._msBaseImageUrl=getTop().getPath("image");
this._moStationeryInfo=null;
this._moPersonStationeryInfo=null;
this._mnSelectType=0;
this._msType="all";
this._moWin=window;
this._msPersonTmpl=getTop().T(['<li onmouseover="this.childNodes[0].style.display=\'\'" onmouseout="">','<a href="javascript:void(0);" onmouseover="this.style.border=\'1px solid #e0a007\'" onmouseout="this.style.border=\'1px solid #d3d3d3\'" onclick="QMStationery.getInstance().setPersonStationery(\'$stationeryId$\');event.returnValue=false;return false;">','<img src="/cgi-bin/customstationery_mgr?func=thumb&stationeryid=$stationeryId$&sid=$sid$&rancode=$rancode$" title="" />','</a>','</li>']);
this._msSysTmpl=getTop().T(['<li>','<a href="javascript:void(0);" onclick="QMStationery.getInstance().setSysStationery(\'$type$\');event.returnValue=false;return false;">','<img src="$baseImageUrl$xinzhi/thumb/$tip$.png" title="$title$"/>','</a>','</li>']);
this._mnTotal=0;
this._moInstance=null;
}
QMStationery.prototype.setPerNum=function(a){
this._mnPerPage=a;
};
QMStationery.getInstance=function(){
return this._moInstance;
};
QMStationery.createSingleInstance=function(){
if(undefined===this.getInstance())
{
var d=new QMStationery(),c=getTop(),b=this,a=c.QMEditor.getEditor('compose');
d.init();
this._moInstance=d;
if(a)
{
a.bindResizeEditorHeight(function(e){
b._moInstance.resize(e);
});
}
}
else{
return this.getInstance();
}
};
QMStationery.prototype.init=function(){
var a=this;
a._getStationeryInfo(function(b){
a._initData(b);
a.adjust(true);
});
a._initNewStationery();
};
QMStationery.prototype._getStationeryInfo=function(_afCallback){
var _oTop=getTop(),g_sBaseImageUrl=getTop().getPath("stationery"),_oSys=new (_oTop.QMAjaxRequest)(_oTop.T("/cgi-bin/stationerylist?t=stationery_data&sid=$sid$&cmd=all&limit=500&newparam=1").replace({sid:_oTop.getSid()}),"get");
_oSys.onComplete=function(_aoXml){
if(_aoXml)
{
if(_aoXml.responseText.indexOf("<!--cgi exception--")==-1)
{
eval(_aoXml.responseText);
_afCallback(data);
}
else{
this.onError();
}
}
else{
this.onError();
}
};
_oSys.onError=function(){
getTop().showError("\u83B7\u53D6\u4FE1\u7EB8\u5931\u8D25");
delete _oSys;
_oSys=null;
};
_oSys.send();
};
QMStationery.prototype._initData=function(a){
if(!a)
{
return null;
}
var b=[];
for(var c in a)
{
a[c]&&c!=0&&b.push(a[c]);
}
this._moStationeryInfo=b;
};
QMStationery.prototype._initNewStationery=function(){
getTop().S('new_stationery',window).innerHTML=getTop().T('<a title="$title_content$" class="$button_gray_f$" onclick="$dosomething$;event.returnValue=false;return false;" href="javascript:void(0);"><img class="design_btn_img" src="$images_path$webp/spacer1e9c5d.gif" />$text$</a>').replace({button_gray_f:parseInt(getTop().goUserInfo.get("CUSTOM_STATIONERY_COUNT"))>=8||!getTop().getUrlParams(getTop().getMainWin().location)["sid"]?"button_gray_f disabled":"button_gray_f",dosomething:parseInt(getTop().goUserInfo.get("CUSTOM_STATIONERY_COUNT"))>=8||!getTop().getUrlParams(getTop().getMainWin().location)["sid"]?"":"QMStationery.getInstance().goToStationSetting();",text:parseInt(getTop().goUserInfo.get("CUSTOM_STATIONERY_COUNT"))>=8||!getTop().getUrlParams(getTop().getMainWin().location)["sid"]?"&nbsp;\u8BBE\u8BA1\u65B0\u4FE1\u7EB8nbsp;":"&nbsp;&nbsp;&nbsp;&nbsp;\u8BBE\u8BA1\u65B0\u4FE1\u7EB8",title_content:parseInt(getTop().goUserInfo.get("CUSTOM_STATIONERY_COUNT"))>=8||!getTop().getUrlParams(getTop().getMainWin().location)["sid"]?"\u60A8\u4FDD\u5B58\u7684\u4FE1\u7EB8\u5DF2\u6EE18\u5F20\uFF0C\u8BF7\u5220\u9664\u90E8\u5206\u4FE1\u7EB8\u540E\u518D\u8FDB\u884C\u8BBE\u8BA1":"",images_path:this._msBaseImageUrl});
};
QMStationery.prototype.setPersonStationery=function(_asStationeryId,_abSetDefault){
var _oTop=getTop(),_oSelf=this;
var _sUrl=_oTop.T('/cgi-bin/customstationery_mgr?t=getPersonStationery&s=newajax&func=body&stationeryid=$stationeryid$&sid=$sid$&rancode=$rancode$').replace({stationeryid:_asStationeryId,sid:_oTop.getSid(),rancode:Math.random()+(_abSetDefault?'&setdefault=1':'')});
var _oXhr=new (_oTop.QMAjaxRequest)(_sUrl,'get');
_oXhr.onComplete=function(_aoXml){
if(_aoXml)
{
eval('var data = '+_aoXml.responseText);
var _sServerName=location.protocol+'//'+location.host,_sHeader=data.header.replace(/\/?cgi-bin\/viewfile/,_sServerName+'/cgi-bin/viewfile');
_oSelf._setAllStationery(_asStationeryId,_sHeader,data.bottom,_abSetDefault);
}
else{
_oXhr.onError();
}
};
_oXhr.onError=function(){
_oTop.showError('\u83B7\u53D6\u5355\u4E2A\u4FE1\u7EB8\u4FE1\u606F\u5931\u8D25');
};
_oXhr.send();
};
QMStationery.prototype.setSysStationery=function(b,c,a){
var d=this._getStationery(b),f=d.data?d.data.htmlheader:"",e=d.data?d.data.htmlbottom:"",g=d.data?d.data.id:"";
this._setAllStationery(b,f,e,g,a);
if(b=="none")
{
this._blankInfo(a);
}
};
QMStationery.prototype.setBlank=function(){
this.setSysStationery('none');
};
QMStationery.prototype._setAllStationery=function(c,b,a,d){
var e=this._moWin.getPageEditor();
if(!e)
{
return debug("fSetAllStationery err: editor not exist!");
}
e.changeContentType("html");
var g=e.getContentWidthSpellcheck(),h="";
g=g.replace(/<includetail>[\s\S]*<\/includetail>/,function(k,l){
h=k;
return "";
});
var i="";
var j="";
var f=e.getContentObj("QQMAILSTATIONERY");
if(c=="none"&&f==null)
{
return;
}
if(this._msStationeryType==""&&f==null)
{
i=g+"<br><br><br><br><br>";
}
else if(this._msStationeryType=="none")
{
i=g;
}
if(f==null)
{
i=g;
}
else{
i=f.innerHTML;
}
j=[b,i,a,h].join("");
this._msStationeryType=c;
e.setContent(j);
e.focus(0,e.getContentObj("QQMAILSTATIONERY"));
return;
};
QMStationery.prototype._fShowStationery=function(a){
var s=this._getStationeryByType("all"),q=this,r=getTop(),h=Math.ceil(s.length/q._mnPerPage),l=[];
q._mnCurrentPage=Math.min(h,a);
q._mnStart=(q._mnCurrentPage-1)*q._mnPerPage;
for(var u=q._mnStart;u<Math.min(q._mnStart+q._mnPerPage,s.length);u++)
{
var k=this._getStationery(s[u]);
if(k&&k.data)
{
if(k.data.id<1)
{
l.push(getTop().T(['<li>','<a href="javascript:void(0);" onclick="QMStationery.getInstance().setBlank();event.returnValue=false;return false;">','<img src="$baseImageUrl$newicon/misc/xinzhi_icon2s.png" title="$title$"/>','</a>','</li>']).replace({baseImageUrl:q._msBaseImageUrl,title:'\u4E0D\u4F7F\u7528\u4FE1\u7EB8'}));
}
else if(k.data.id<10000)
{
l.push(q._msSysTmpl.replace({type:u,baseImageUrl:q._msBaseImageUrl,tip:k.data.id,title:k.data.title}));
}
else{
l.push(q._msPersonTmpl.replace({stationeryId:k.data.id,sid:getTop().getSid(),rancode:Math.random()}));
}
}
}
var o=r.S("paper_prev_b",window),m=r.S("paper_next_b",window),p=r.S("paper_prev_b_img",window),n=r.S("paper_next_b_img",window),f=function(d){
var d=d||window.event;
d.returnValue=false;
return false;
},e=function(d){
f(d);
},b=function(d){
QMStationery.getInstance().gotoNextPaper();
f(d);
},c=function(d){
QMStationery.getInstance().gotoPrevPaper();
f(d);
},j=[[1,0,"\u5DF2\u7ECF\u6CA1\u6709\u4E0A\u4E00\u9875\u4E86","\u4E0B\u4E00\u9875",e,b,'arrow_tableft_disable','arrow_tabright'],[0,1,"\u4E0A\u4E00\u9875","\u5DF2\u7ECF\u6CA1\u6709\u4E0B\u4E00\u9875\u4E86",c,e,'arrow_tableft','arrow_tabright_disable'],[0,0,"\u4E0A\u4E00\u9875","\u4E0B\u4E00\u9875",c,b,'arrow_tableft','arrow_tabright'],[1,1,"\u5DF2\u7ECF\u6CA1\u6709\u4E0A\u4E00\u9875\u4E86","\u5DF2\u7ECF\u6CA1\u6709\u4E0B\u4E00\u9875\u4E86",e,e,'arrow_tableft_disable','arrow_tabright_disable']],g=2;
if(q._mnCurrentPage<=1)
{
g=0;
}
else if(q._mnCurrentPage>=h)
{
g=1;
}
if(h==1)
{
g=3;
}
var t=j[g];
j=null;
o.disabled=t[0];
m.disabled=t[1];
o.title=t[2];
m.title=t[3];
o.onclick=t[4];
m.onclick=t[5];
p.className=t[6];
n.className=t[7];
r.S("pageid",window).innerHTML=["<b>",q._mnCurrentPage,"</b>","/",h].join("");
setTimeout(function(){
r.S("show_paper",window).innerHTML=l.join("");
},10);
};
QMStationery.prototype._getStationeryByType=function(a){
var b=[];
if(a==null||a=="all")
{
for(var c=0;c<this._moStationeryInfo.length;c++)
{
b.push(c);
}
}
return b;
};
QMStationery.prototype._blankInfo=function(a){
var c=a?'view_stationeryDefault':'view_stationery';
if(parent.document.getElementById(c))
{
var b=parent.document.getElementById(c).contentWindow.document.body;
b.innerHTML="<center><div style='margin-left:auto;margin-right:auto; float:none;margin-top:130px;width:100%;height:70px;text-align:center;padding-left:70px;padding-top:20px;font:bolder 14px Verdana;  color:#666'>\u4E0D\u4F7F\u7528\u4FE1\u7EB8/div></center>";
if(typeof (a)!="undefined")
{
var b=parent.document.getElementById('view_stationery').contentWindow.document.body;
b.innerHTML="";
}
}
};
QMStationery.prototype.gotoNextPaper=function(){
if(getTop().S("paper_next_b",window).disabled)
{
return;
}
this._fShowStationery(this._mnCurrentPage+1);
};
QMStationery.prototype.gotoPrevPaper=function(){
if(getTop().S("paper_prev_b",window).disabled)
{
return;
}
this._fShowStationery(this._mnCurrentPage-1);
};
QMStationery.prototype._getStationery=function(a){
var b=this._moStationeryInfo[a];
(a=="none"||b==null)&&(b={});
return b;
};
QMStationery.prototype.goToStationSetting=function(){
window.exitConfirm(getTop().T('location.href="/cgi-bin/readtemplate?t=setting_paper&s=paperdesign&fun=list&sid=$sid$"; ').replace({sid:getTop().getSid()}));
};
QMStationery.prototype.ST=function(b,a){
return getTop().GelTags(b,(a||window).document);
};
QMStationery.prototype.adjust=function(a){
var f=27+6,d=24,e=80,j=getTop(),i=j.S('stationery_div',window),h=j.S('quickaddr_div',window),b=i.clientHeight,c=this._mnPerPage,g=this._mnPerPage;
if(i.style.display=='none')
{
b=(!h?0:h.clientHeight);
if(j.gbIsIE)
{
i.style.height=b;
}
}
g=2*Math.floor((b-f-d)/e);
this._mnPerPage=g;
if(a||(g>0&&c!=g&&this._moStationeryInfo))
{
this._fShowStationery(this._mnCurrentPage);
}
};
QMStationery.prototype.resize=function(a){
var e=getTop(),d=e.S('stationery_div',window),c=e.calcPos(e.S('quickaddr_div',window),'json').top,b=e.calcPos(d,'json').top;
if(e.gnIEVer==6)
{
b=c;
}
else{
b=b>0?b:c;
}
if(d)
{
d.style.height=(a-b)+'px';
this.adjust();
}
};
