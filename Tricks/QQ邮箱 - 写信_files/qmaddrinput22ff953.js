function QMAddrDomainCheck2(a)
{
this._NOCHECK=";qzone.qq.com;qq.com;vip.qq.com;";
this._moDomainData={};
this._moProhibitData={};
this._mnDelayTimeout=null;
this._moWin=a||window;
}
QMAddrDomainCheck2.prototype={_setData:function(a){
var f=this,d=f._moDomainData;
if(a.checkdomain)
{
for(var c=a.checkdomain,b=c.length-1;b>=0;b--)
{
if(c[b])
{
var g=c[b][0];
d[g]=d[g]||{};
d[g].tips=c[b][1].split(';');
}
}
}
if(a.domainlimit)
{
for(var e=a.domainlimit,b=e.length-1;b>=0;b--)
{
if(e[b])
{
var g=e[b][0];
d[g]=d[g]||{};
d[g].attlmt=parseInt(e[b][1]);
d[g].dmn=e[b][2]=='1';
}
}
}
if(a.prohibit)
{
f._moProhibitData[a.prohibit[0]]=a.prohibit[1];
}
},createChecker:function(b,a,c){
return new this._ui(b,a,c||{},this);
},permit:function(a){
return !this._moProhibitData[a.sort().join(';')];
},_getTip:function(a){
var d=this,e=[];
for(var b=a.length-1;b>=0;b--)
{
var c=d._moDomainData[a[b]];
c&&c.tips&&e.push({sDom:a[b],oTips:c.tips});
}
return e;
},getAttachLimit:function(a){
var f=this,h,c=50*1024*1024,g=[],e=[];
for(var b=a.length-1;b>=0;b--)
{
var d=f._moDomainData[a[b]];
if(d)
{
if(!d.attlmt)
{
g.push(a[b]);
}
else if(d.attlmt<c)
{
h=a[b];
c=d.attlmt;
}
}
else if(f._NOCHECK.indexOf(';'+a[b]+';')<0)
{
e.push(a[b]);
}
}
return {sDom:h,nLim:(e.length==a.length?-1:c),oUnknown:g,oNoCheck:e};
},getExDomain:function(a){
var e=this,d=[];
for(var b=a.length-1;b>=0;b--)
{
var c=e._moDomainData[a[b]];
if(c&&!c.dmn)
{
d.push(a[b]);
}
}
return d;
},_parseAddr:function(a){
var f=this,c={},e={},d=[],b=[],i=f._NOCHECK;
E(QMAddrParser.parseAddr(a),function(j){
j.valid&&(c[j.addr.split("@").pop()]=1)&&(e[j.addr]=1);
});
for(var g in c)
{
if(i.indexOf(";"+g+";")==-1)
{
b.push(g);
}
}
for(var h in e)
{
d.push(h);
}
return [b,d];
},check:function(_asAddrs,_anType,_afCallBack){
var _oSelf=this,_oAddrData=_oSelf._parseAddr(_asAddrs),_oCheckDomains=[],_sCheckAddress="";
for(var _oDomain=_oAddrData[0],_len=_oDomain.length,_i=0;_i<_len;_i++)
{
if(!_oSelf._moDomainData[_oDomain[_i]])
{
_oCheckDomains.push(_oDomain[_i]);
}
}
if(_anType&4&&_oAddrData[1].length>5)
{
_sCheckAddress=_oAddrData[1].sort().join(";");
}
else{
_anType&=59;
}
if(_oCheckDomains.length==0)
{
_anType&=60;
}
if(_anType)
{
if(_oSelf._mnDelayTimeout)
{
clearTimeout(_oSelf._mnDelayTimeout);
}
_oSelf._mnDelayTimeout=setTimeout(function(){
QMAjax.send("/cgi-bin/laddr_domain_check",{method:"POST",content:T('sid=$sid$&addrs=$addrs$&addrlist=$list$&acttype=$type$&t=laddr_domain_check&addrfilt=$addrfilt$').replace({sid:getSid(),type:_anType&3,list:encodeURI(_sCheckAddress),addrfilt:encodeURI(_asAddrs),addrs:encodeURI("a@"+_oCheckDomains.join(";a@"))}),onload:function(_abIsOk,_asParam){
if(_abIsOk&&_asParam.indexOf('success:true')>0)
{
_oSelf._setData(eval(_asParam));
callBack.call(_oSelf,_afCallBack,[{bCksp:_oSelf.permit(_oAddrData[1]),oCklm:_oSelf.getAttachLimit(_oAddrData[0]),oCkdm:_oSelf._getTip(_oAddrData[0])}]);
}
}});
},200);
}
else{
callBack.call(_oSelf,_afCallBack,[{bCksp:_oSelf.permit(_oAddrData[1]),oCklm:_oSelf.getAttachLimit(_oAddrData[0]),oCkdm:_oSelf._getTip(_oAddrData[0])}]);
}
return _oSelf;
},_getCurrentQMAddrDock:function(){
return this;
},_ui:function(b,a,c,d){
var g=this,e=[];
g._moTmpl=g._TEMPLATE;
g._mnType=a;
g._moParent=d;
var f=b.join?b:[b];
E(f,function(i,h){
var k,j=i.getContainer?i.getContainer():i;
j.parentNode.insertBefore(k=j.ownerDocument.createElement("div"),j.nextSibling);
show(k,false);
addEvent(k,"click",function(l){
return g._doEvent(l,h);
});
e.push(k);
});
g._moDispErrDomains=new Array(f.length);
g._moInputObjs=f;
g._moContainers=e;
if(c.oPermit)
{
_oBindContainer=c.oPermit;
_oBindContainer.appendChild(_oContainer=_oBindContainer.ownerDocument.createElement("div"));
show(g._moPermit=_oContainer,false);
}
}};
QMAddrDomainCheck2.prototype._ui_TEMPLATE=TE(['<div style="padding:3px 0;line-height: 18px; margin: 4px 0 0 0;" class="domainCheckDisp ">','$@$if($type$&4)$@$','<div class="txt_red">\u60A8\u6DFB\u52A0\u7684\u6536\u4EF6\u4EBA\u90AE\u4EF6\u5730\u5740\u8FC7\u591A\uFF0C\u8BF7\u53BB\u9664\u90E8\u5206\u5730\u5740\u3002</div>','$@$else$@$','<div class="graytext">\u6211\u4EEC\u53D1\u73B0\u60A8\u8F93\u5165\u7684\u5730\u5740\u53EF\u80FD\u6709\u8BEF\uFF0C\u8BF7\u4FEE\u6539\uFF1A</div>','$@$for($errors$)$@$','<div style="margin-top: 4px;" domain="$domain$">','$domain$','$@$for($items$)$@$','$@$if($_idx_$!=0)$@$',',&nbsp;','$@$else if($data$)$@$',' \u2192 ','$@$endif$@$','<a name="$data$">$data$</a>','$@$endfor$@$','</div>','$@$endfor$@$','$@$endif$@$','</div>']);
QMAddrDomainCheck2.prototype._ui.prototype={check:function(){
var f=this,b=f._mnType,d,e=f._moInputObjs,c=[];
for(var a=e.length-1;a>=0;a--)
{
d=e[a];
if(!(d.isDisabled&&d.isDisabled()))
{
c.push(d.get?d.get(';'):d.value);
}
}
this._moParent.check(c.join(';'),b,function(g){
if(b&4)
{
f._show(f._moPermit,g.bCksp?[]:[1],4);
}
if(b&1)
{
f._checkInput();
}
});
},_getDomain:function(){
var d,e=this._moInputObjs,c=[];
for(var a=e.length-1;a>=0;a--)
{
d=e[a];
if(!(d.isDisabled&&d.isDisabled()))
{
var f=d.get('json');
for(var b=f.length-1;b>=0;b--)
{
c.push(f[b].addr.replace(/.+@/,''));
}
}
}
return c;
},getAttachLimit:function(){
return this._moParent.getAttachLimit(this._getDomain());
},getExDomain:function(){
return this._moParent.getExDomain(this._getDomain());
},_checkInput:function(){
var c=this,b=c._moInputObjs,a=c._moContainers;
E(c._moInputObjs,function(e,d){
if(e.isDisabled&&e.isDisabled())
{
return;
}
var f=e.get?e.get(';'):e.value;
c._moParent.check(f,1,function(g){
var h=g.oCkdm;
c._moDispErrDomains[d]=h;
e.setDomainError&&e.setDomainError(h);
c._show(a[d],h,1);
});
});
},_show:function(b,c,a){
if(!b)
{
return;
}
var l=this,e=c.length,k=qmAnimation,d=k.getActionType(b)=="expand"&&b.style.display=='';
if(e>0)
{
var j={errors:[],type:a},h=j.errors;
if(a&1)
{
for(var m=0;m<e;m++)
{
var f=c[m],g={domain:f.sDom,items:[]};
E(f.oTips,function(i){
g.items.push({data:i});
});
h.push(g);
}
}
b.innerHTML=l._moTmpl.replace(j);
if(!d)
{
k.expand(b,{type:"break"});
}
if(a&4)
{
requestShowTip("sendtimepadding","75",this._moWin);
}
}
else if(d)
{
k.fold(b,{type:"break"});
}
},_doEvent:function(b,a){
var h=this,e=h._moContainers[a],c=h._moInputObjs[a],f=h._moDispErrDomains[a],j=getEventTarget(b);
if(j.name)
{
var l=j.parentNode.getAttribute("domain"),m=j.name;
if(c.updateDomain)
{
c.updateDomain(l,m);
}
else{
var g=[],k=TE('$@$if($nick$)$@$"$nick$"<$@$endif$@$$addr$$@$if($nick$)$@$>$@$endif$@$');
E(QMAddrParser.parseAddr(c.value),function(i){
var o=i.addr.split("@");
if(o.pop()==l)
{
i.addr=[o[0],m].join("@");
}
i.nick=encodeNick(i.nick);
g.push(k.replace(i));
});
c.value=g.join(";");
}
for(var n=0,d=f.length;n<d;n++)
{
if(f[n].sDom==l)
{
f.splice(n,1);
break;
}
}
h._show(e,f,1);
}
}};
function QMAddrInput(a)
{
this.constructor=arguments.callee;
this._initlize(a)._setup(a.tabIndex,a.accessKey)._feature("setup",a)._setEvent()._setAutoComplete();
}
;QMAddrInput.get=function(b,a){
var c=a[this._CONST._nCacheId];
return c&&c[b];
};
QMAddrInput.prototype={add:function(b,a,c){
var f=this,e=QMAddrParser.parseAddr(b),d=e.length;
E(e,function(g){
var h=c||f._filterUtf8(g.nick);
f._addItem(g.addr,g.nick,g.valid,h);
});
d&&show(f._moDefaultText,false);
if(d&&!a)
{
callBack.call(this,this._mEvent._onchange,["add"]);
}
return e;
},storeAndClear:function(){
var b=this,a=b._moAddrList;
this._moCachedAddrs=this.get("json");
this._moCachedDisabled=this.isDisabled();
while(a.length!=0)
{
b._deleteItem(a[0]);
}
},restore:function(){
var a=this;
E(a._moCachedAddrs,function(b){
var c=a._filterUtf8(b.nick);
a._addItem(b.addr,b.nick,b.valid,c);
});
this.disabled(this._moCachedDisabled);
delete this._moCachedAddrs;
},del:function(b,a){
if(this.hasAddr(b))
{
this._deleteItem(b);
a||callBack.call(this,this._mEvent._onchange,["del"]);
}
},clear:function(a){
var d=this,c=d._moAddrList,b=c.length;
while(c.length!=0)
{
d._deleteItem(c[0]);
}
if(b&&!a)
{
callBack.call(this,this._mEvent._onchange,["del"]);
}
return d;
},disabled:function(a){
this._mbIsDisabled=typeof a!="boolean"?true:a;
return this;
},edit:function(a){
var d=this,c=d._moAddrMap[a];
if(c)
{
var e=c._sNick&&encodeNick(c._sNick),b=-1;
d._moSelectCtrl.blur();
d._cancelSelectItem();
d._addTextCtrlValue();
d._insertTextBefore(a);
d._deleteItem(a);
d._changeTextValue(d._moTemplate._ADDREDIT.replace({nick:e,addr:a,splitchar:d._msSplitChar}));
if(c._bIsValid)
{
if(e)
{
b=d._moTextCtrl.value.length-2;
}
else{
b=a.length;
}
}
else if(c._bIsQQAddr)
{
b=a.indexOf("@");
}
else{
b=a.length;
}
d.focus(b);
}
return d;
},flush:function(){
this._addTextCtrlValue();
return this;
},focus:function(a){
var b=this;
switch(a)
{case "all":
return b._setTextCursorRange(0,-1);
case "start":
return b._setTextCursorRange(0,0);
case "end":
return b._setTextCursorRange(-1,-1);
}if(typeof (a)=="number")
{
return b._setTextCursorRange(a,a);
}
if(typeof (a)=="string")
{
return b._focusWithLock()._selectItem(a);
}
return b._focusWithLock();
},get:function(a){
var e=this,d=[],b=e._moAddrList,c=e._moAddrMap;
if(a=="autocomplete")
{
return e._moAutoComplete;
}
else if(!a||{error:1,errhtml:1,errQQhtml:1,json:1,validemail:1,newwin:1}[a])
{
E(b,function(f){
var g=c[f],h=e._decodeUtf8(g._sNick);
switch(a)
{case "error":
if(!g._bIsValid&&!g._bIsQQAddr)
{
d.push(f);
}
break;
case "errhtml":
if(!g._bIsValid&&!g._bIsQQAddr)
{
d.push(htmlEncode(f));
}
break;
case "errQQhtml":
if(!g._bIsValid&&g._bIsQQAddr)
{
d.push(htmlEncode(f));
}
break;
case "json":
d.push({nick:h,addr:f,valid:g._bIsValid,isQQ:g._bIsQQAddr,format:h?['"',encodeNick(h),'"<',f,'>'].join(""):f});
break;
case "validemail":
if(g._bIsValid)
{
d.push(f);
}
;break;
default:
d.push(h?['"',encodeNick(h),'"<',f,'>'].join(""):f);
}
});
return d;
}
else{
return b.join(a);
}
},getContainer:function(){
return this._moContainer;
},getId:function(){
return this._msId;
},getOwnerWindow:function(){
return this._moWindow;
},hasAddr:function(a){
return this._moAddrMap.hasOwnProperty(a);
},isDisabled:function(){
return this._mbIsDisabled;
},length:function(){
return this._moAddrList.length;
},updateDomain:function(b,a){
var f=this,e=[],c=this._moAddrList,d=this._moAddrMap;
E(c,function(g){
if(d[g]._sDomain==b)
{
e.push(g);
}
});
E(e,function(g){
var h=d[g];
f._insertTextBefore(g);
f.add(f._moTemplate._ADDREDIT.replace({nick:h._sNick,addr:[h._sAlias,a].join("@")}),true);
f._deleteItem(g,true);
});
callBack.call(this,this._mEvent._onchange,["change"]);
},setDomainError:function(a){
var d=this,b=false,c=d._moErrorDomainMap;
E(a,function(e){
if(!c[e.sDom])
{
b=c[e.sDom]=true;
}
});
return d._updateErrorDomainDisplay();
},setAddrError:function(a){
var c=this,b=c._moAddrMap;
for(var e=0;e<a.length;e++)
{
var d=a[e];
if(b[d])
{
b[d]._bIsValid=false;
b[d]._bIsQQAddr=true;
}
}
return c._updateErrorDomainDisplay();
},clearInput:function(){
this._changeTextValue("");
},_filterUtf8:function(a){
return htmlEncode(a).replace(/&#38;#x(?=\w{4})/gi,"&#x").replace(/&amp;#x(?=\w{4})/gi,"&#x");
},_decodeUtf8:function(a){
var b;
if(a&&/&#x(?=\w{4})/gi.test(a))
{
!b&&(b=document.createElement("div"));
b.innerHTML=a;
return b.innerHTML;
}
else{
return a;
}
},_addItem:function(b,c,a,d){
var l=this,i=l._moAddrMap,h=l._moAddrList,n=l._moTextContainer,k=n.previousSibling,g=(k?l._getAddrPos(k.getAttribute("addr")):-1)+1;
if(i[b])
{
l._deleteItem(b);
}
{
var m=l._moTemplate,o=htmlEncode(b),r=c,p=b.split("@"),q=a?p[1]:"";
_sAlias=a?p[0]:b;
function f(t,s)
{
return htmlEncode(getAsiiStrLen(t)>s?subAsiiStr(t,s,"..."):t);
}
function e(t,s)
{
return getAsiiStrLen(t)>s?subAsiiStr(t,s,"...",false):t;
}
insertHTML(n,"beforeBegin",m._ADDRITEM.replace({nick:d&&e(d,l._moConst._nMaxNickAsiiLen),alias:_sAlias&&f(_sAlias,l._moConst._nMaxAddrAsiiLen),domain:q&&htmlEncode(q),addr:o,css:l._moStyle,dispmode:l._msDispMode,splitchar:l._msSplitChar,isvalid:a,isdomainerr:!!l._moErrorDomainMap[q],images_path:getPath("image")}));
var j=n.previousSibling;
i[b]={_sNick:c,_sAlias:_sAlias,_sDomain:q,_oDom:j,_bIsValid:a};
l._setAddrItemEvent(j,b);
}l._adjustContainerHeight();
h.splice(g,0,b);
},_addTextCtrlValue:function(){
if(this.add(trim(this._moTextCtrl.value))!=0)
{
this._changeTextValue("");
return true;
}
return false;
},_adjustContainerHeight:function(){
var c=this,b=c._moContainer;
if(c._mnMaxHeight&&gnIEVer<7)
{
b.style.height='auto';
var a=b.offsetHeight;
if(a>c._mnMaxHeight)
{
b.style.height=c._mnMaxHeight+'px';
}
}
},_adjustTextWidth:function(a){
var h=this,g=h._getTextContainerLen(a);
if(this._mnTextWidthCache!=g)
{
this._mnTextWidthCache=g;
var i=h._moTextContainer,b=h._moConst._nBasicWidth,f=h._moConst._nStepWidth,e=g<b?0:1+Math.floor((g-b)/f),c=Math.min(b+f*e,Math.max(h._moContainer.offsetWidth-5,0)),d=i.clientWidth;
if(c!=d)
{
i.style.width=c+"px";
if(a=="paste")
{
i.scrollLeft=0;
}
}
}
},_cancelSelectItem:function(b,a){
var d=this._moAddrSelInfo;
if(this._hasAddrSelected())
{
var e=d._oData;
if(b)
{
var g=d._oList,f=e[b];
if(f)
{
this._setAddrItemClass(f,"normal");
for(var j=0,c=g.length;j<c;j++)
{
if(g[j]==b)
{
g.splice(j,1);
break;
}
}
delete e[b];
}
}
else{
for(var h in e)
{
this._setAddrItemClass(e[h],"normal");
}
d._oData={};
d._oList=[];
if(!a)
{
d._nCursorPos=null;
}
}
return true;
}
return false;
},_changeTextValue:function(a){
this._sPreInputText=a;
this._moTextCtrl.value=a;
this._adjustTextWidth();
},_deleteItem:function(a){
var d=typeof a=="string"?a:a.getAttribute("addr"),b=this._moAddrMap[d],c=this._mEvent;
if(b)
{
removeSelf(b._oDom);
delete this._moAddrMap[d];
this._moAddrList.splice(this._getAddrPos(d),1);
}
c._onNotify&&c._onNotify();
},_deleteSelectItems:function(b,a){
var f=this._moAddrSelInfo;
if(f._nLength!=0)
{
var h=f._oList,d=this._getAddrPos(h[h.length-1]),g=f._oData;
this._cancelSelectItem();
for(var i in g)
{
this._deleteItem(i);
}
var e=this._moAddrList,c=e.length;
if(!b)
{
if(c!=0)
{
this._insertTextBefore(d<c?e[d]:null);
}
this.focus("start");
}
if(!a)
{
callBack.call(this,this._mEvent._onchange,["del"]);
}
}
},_focusWithLock:function(){
try{
this._lockFocus()._moTextCtrl.focus();
}
catch(a)
{
}
return this._unlockFocus();
},_getAddrPos:function(a){
var c=this._moAddrList;
for(var d=0,b=c.length;d<b;d++)
{
if(c[d]==a)
{
return d;
}
}
return -1;
},_getAutoCompleteData:function(c){
var b=this,a=[];
if(getAddrACData)
{
var a=getAddrACData(b._moTextCtrl,c||"",b._mfFilterFunc);
a.header=b._mbIsEnableTip&&b.constructor._isShowTip()?['<div unselectable="on" class="graytext" style="border-bottom:1px solid #ccc;padding:0 5px;">','<a unselectable="on" style="float:right;" opt="hidetip">\u6211\u77E5\u9053\u4E86</a>','\u652F\u6301\u6635\u79F0\u62FC\u97F3\u7F29\u5199\u6216QQ\u53F7\u7801','</div>'].join(""):'';
}
return a;
},_getCtrlKeyName:function(){
return {cmd:gbIsMac?"Command":"Ctrl"};
},_getTextContainerLen:function(a){
var g=this._moTextCtrl.value,b=a==8,d=a==32||(a>=48&&a<229),c=g||d;
if(!c)
{
return 0;
}
if(b)
{
g=g.slice(0,-1);
}
var f=g+(d?"WW":"WW");
if(f==this._msStrLenCacheValue)
{
return this._mnStrLenCacheResult;
}
var e=this._moStrLenCalcer;
this._msStrLenCacheValue=f;
e.innerHTML=htmlEncode(f).replace(/ /ig,"&nbsp;");
return this._mnStrLenCacheResult=e.scrollWidth;
},_getTextPos:function(){
var a=this._moTextContainer.previousSibling;
return a?this._getAddrPos(a.getAttribute("addr")):-1;
},_getTextSelectionState:function(){
var j=this._moTextCtrl,l=j.value,k=this._moWindow,e=k.document,h={_nLength:l.length};
if(e.selection)
{
var i=j.createTextRange(),g=e.selection.createRange();
function d(m)
{
try{
i.moveStart("character",0);
i.setEndPoint(["EndTo",m].join(""),g);
return (i.text||"").length;
}
catch(n)
{
return -1;
}
}
h._nStart=d("Start");
h._nEnd=d("End");
}
else{
var i=e.createRange();
i.selectNode(j);
try{
var g=k.getSelection().getRangeAt(0);
var b=i.compareBoundaryPoints(Range.START_TO_nStart,g)==1,a=i.compareBoundaryPoints(Range.END_TO_nEnd,g)==-1,c=!b&&!a;
}
catch(f)
{
var c=true;
}
h._nStart=c?j.selectionStart:-1;
h._nEnd=c?j.selectionEnd:-1;
}
if(h._nStart==-1)
{
h._sType="none";
}
else if(h._nStart!=h._nEnd)
{
h._sType="range";
}
else{
h._sType="point";
}
return h;
},_hasAddrSelected:function(){
return this._moAddrSelInfo._oList.length>0;
},_hideContextMenu:function(){
this._moContextMenu.style.left="-200px";
},_initlize:function(a){
var d=this,b=d.constructor;
try{
d._moConst=b._CONST;
d._moTemplate=b._TEMPLATE;
d._msId=a.id;
d._moWindow=a.win;
d._moContainer=a.dom.container;
d._mnMaxHeight=a.maxHeight;
d._mnMaxItemView=a.maxItemView||15,d._mnMinWidth=a.minWidth||220,d._mnWidth=a.width||"auto",d._moStyle=extend({text:"addr_text",normal:"addr_base addr_normal",over:"addr_base addr_over attbg",select:"addr_base addr_select fn_list",error:"addr_base addr_error",errover:"addr_base addr_errover attbg",errsel:"addr_base addr_errsel fn_list",dmerror:"addr_base addr_domain_err",dmerrover:"addr_base addr_domain_errover attbg",dmerrsel:"addr_base addr_domain_errsel fn_list",move:"addr_move",mover:"addr_mover"},a.style);
d._msDispMode=a.dispMode;
d._msSplitChar=a.splitChar||";";
d._msDefaultText=a.defaultText||d._moContainer.getAttribute("defaultText");
d._mbIsEnableTip=a.isEnableTip!==false;
d._mbIsFocusAC=a.isFocusAC===true;
d._mfFilterFunc=a.filterFunc;
d._mfGetAutoCompleteData=a.getAutoCompleteData;
d._mfGetComboData=a.getComboData;
d._mfOnSelectRecentGroup=a.onSelectRecentGroup;
d._mbIsDisabled=false;
d._moAddrList=[];
d._moAddrMap={};
d._moErrorDomainMap={};
d._moAddrSelInfo={_oList:[],_oData:{},_nCursorPos:null};
d._mEvent={_onfocus:a.onfocus,_onblur:a.onblur,_onchange:a.onchange,_onkeydown:a.onkeydown,_onNotify:a.onNotify};
d._moRegistFeature={"autoFold":1};
b._set(d);
}
catch(c)
{
throw new Error("QMAddrInput constructor:"+c.message);
}
return d;
},_insertTextBefore:function(a){
var c=this,b=(c._moAddrMap[a]||{})._oDom||c._moContainer.lastChild;
if(c._moTextContainer.nextSibling!=b)
{
c._moContainer.insertBefore(c._moTextContainer,b);
}
return c;
},_bIsCollapsed:function(){
var b=this,a=b._mbIsTextFocus?b._moTextCtrl:b._moSelectCtrl;
return !b._isFocus()?true:(b._moWindow.getSelection?a.selectionStart==a.selectionEnd:b._moWindow.document.selection.type=="None");
},_isFocus:function(){
return this._mbIsTextFocus||this._hasAddrSelected();
},_isFocusLock:function(){
return this._mbIsFocusLock;
},_isItemSelected:function(a){
return this._moAddrSelInfo._oData[typeof a=="string"?a:a.getAttribute("addr")];
},_loadInputRange:function(){
if(this._moInputRange)
{
if(this._moWindow.getSelection)
{
}
else{
this._moInputRange.select();
}
this._moInputRange=null;
}
},_lockFocus:function(){
this._mbIsFocusLock=true;
return this;
},_moveItem:function(b,a){
var d=this._moAddrMap,f=d[b];
if(f)
{
var c=this._moAddrList,e=d[a];
c.splice(this._getAddrPos(b),1);
if(e)
{
this._moContainer.insertBefore(f._oDom,e._oDom);
c.splice(this._getAddrPos(a),0,b);
}
else{
this._moContainer.insertBefore(f._oDom,this._moTextContainer);
c.push(b);
}
}
},_saveInputRange:function(){
(this._hasAddrSelected()?this._moSelectCtrl:this._moTextCtrl).focus();
if(this._moWindow.getSelection)
{
var a=this._moWindow.getSelection();
this._moInputRange=a&&a.rangeCount?a.getRangeAt(0):null;
}
else{
this._moInputRange=this._moWindow.document.selection.createRange();
}
},_selectItem:function(a,b){
var h=this._moAddrMap[a],l=this._moAddrSelInfo;
if(h)
{
if(b=="shift")
{
var j=this._moAddrList,k=this._moAddrMap,c=l._nCursorPos,d=this._getAddrPos(a),f;
if(typeof c!="number")
{
f=this._getAddrPos(l._oList[0]);
if(f==-1)
{
c=l._nCursorPos=this._getTextPos();
}
}
if(typeof c=="number")
{
f=c+(c<d?1:0);
}
this._cancelSelectItem(false,true);
var g=f>d?-1:1,m=l._oList,r=l._oData;
for(var s=f,d=d+g;s!=d;s+=g)
{
var q=j[s];
m.push(q);
this._setAddrItemClass(l._oData[q]=k[q]._oDom,"select");
}
}
else{
if(b!="add")
{
this._cancelSelectItem();
}
if(this._isItemSelected(a))
{
this._cancelSelectItem(a);
}
else{
var m=l._oList;
this._addTextCtrlValue();
m.push(a);
this._setAddrItemClass(l._oData[a]=h._oDom,"select");
}
}
}
if(this._hasAddrSelected())
{
var o=[],j=this._moAddrList,k=this._moAddrMap,r=l._oData;
for(var s=0,e=this.length();s<e;s++)
{
var q=j[s];
if(r[q])
{
var n=k[q];
o.push(n._sNick?['"',encodeNick(n._sNick),'"<',q,'>'].join(""):q);
}
}
o.push("");
var p=this._moSelectCtrl;
p.value=o.join(";");
p.focus();
p.select();
}
return this;
},_selectAllItem:function(){
var b=this,a=b._moAddrList;
b._addTextCtrlValue();
b._selectItem(a[0]);
b._selectItem(a[a.length-1],"shift");
},_filterDuplicate:function(a){
var c=a||[],d={},b=[];
for(var f=0;f<c.length;f++)
{
if(c[f].oAddress&&c[f].oAddress.email)
{
var e=c[f].oAddress.email;
if(!d[e])
{
d[e]=c[f];
}
}
}
for(var g in d)
{
b.push(d[g]);
}
if(a.header)
{
b.header=a.header;
}
return b;
},_setAutoComplete:function(){
var a=this;
a._mbIsEnableTip&&a.constructor._isShowTip();
a._moAutoComplete=new QMAutoComplete({oInput:a._moTextCtrl,oPosObj:a._moContainer,nMaxItemView:a._mnMaxItemView,nMinWidth:a._mnMinWidth,nWidth:a._mnWidth,ongetdata:function(b){
if(a._mfGetAutoCompleteData)
{
var c=a._mfGetAutoCompleteData(a,b);
c.header=a._mbIsEnableTip&&a.constructor._isShowTip()?['<div unselectable="on" class="graytext" style="border-bottom:1px solid #ccc;padding:0 5px;">','<a unselectable="on" style="float:right;" opt="hidetip">\u6211\u77E5\u9053\u4E86</a>','\u652F\u6301\u6635\u79F0\u62FC\u97F3\u7F29\u5199\u6216QQ\u53F7\u7801','</div>'].join(""):'';
return c;
}
else{
return c=a._filterDuplicate(a._getAutoCompleteData());
}
},onclick:function(c,b){
if(!b)
{
var d=getEventTarget(c);
if(d&&d.getAttribute("opt")=="hidetip")
{
this.setHeader("");
a.constructor._hideTip();
}
}
},onselect:function(b){
var f=b.oAddress,i=T('"$nick$"<$addr$>;'),j=[],k;
function c(l)
{
return i.replace({nick:encodeNick(htmlDecode(l.name)),addr:htmlDecode(l.email)});
}
if(b.bIsRecentGroup)
{
a._mfOnSelectRecentGroup(b);
return;
}
else if(f.nShortcutGroupId)
{
var g=QMAddress.getGroup(f.nShortcutGroupId);
for(var h=g.addressesId,d=0,e=h.length;d<e;d++)
{
_oAddr=QMAddress.getAddress(h[d],true);
if(!_oAddr.nShortcutGroupId)
{
j.push(c(_oAddr));
}
}
}
else{
j.push(c(f));
k=encodeNick(htmlEncode(htmlDecode(f.name)));
}
a._doAutoCompleteSelect(j.join(""),k);
},ontouchstart:function(){
a._lockFocus();
}});
return a;
},_setAddrItemEvent:function(a,b){
this._addEventForDom(a,{"click":this._doAddrItemClick,"dblclick":this._doAddrItemDblclick,"mouseover":this._doAddrItemMouseOver,"mouseout":this._doAddrItemMouseOut},b);
var d=a.childNodes,e=this._mEvent,f;
for(var g=0,c=d.length;g<c;g++)
{
f=d[g];
f.nodeName.toLowerCase()=="a"&&f.getAttribute("name")=="del"&&this._addEventForDom(f,{"click":this._delSpanClick})&&(g=c);
}
e._onNotify&&e._onNotify();
},_setAddrItemClass:function(a,b){
var d=this,e="",f={move:"select",mover:"select"}[b],c=d._moAddrMap[a.getAttribute("addr")];
if(!f)
{
f=b||"normal";
}
else{
e=d._moStyle[b];
}
if(c&&!c._bIsValid)
{
f={normal:"error",over:"errover",select:"errsel"}[f];
}
else if(c&&d._moErrorDomainMap[c._sDomain])
{
f={normal:"dmerror",over:"dmerrover",select:"dmerrsel"}[f];
}
setClass(a,[d._moStyle[f],e].join(" "));
return d;
},_setEvent:function(){
var b=this;
b._addEventForDom(b._moContainer,{"mousedown":b._doContainerMouseDown,"selectstart":b._doContainerSelectStart,"contextmenu":b._doContainerContextMenu});
var c={"focus":b._doTextFocus,"blur":b._doTextBlur,"keydown":b._doTextKeyDown,"keyup":b._doTextKeyUp,"paste":b._doTextPaste};
var a={"focus":b._doSelectFocus,"blur":b._doSelectCancel,"keydown":b._doSelectKeyDown,"keyup":b._doSelectKeyUp,"paste":b._doSelectPaste,"cut":b._doSelectCut};
if(gbIsTT)
{
c["keypress"]=b._doTextKeyPressForTT;
}
b._addEventForDom(b._moTextCtrl,c);
b._addEventForDom(b._moSelectCtrl,a);
b._addEventForDom(b._moContextMenu,{"click":b._doContextMenuClick,"contextmenu":b._stopEvent});
b._addEventForDom(b._moDefaultText,{"click":b.focus});
return b;
},_setTextCursorRange:function(b,a){
var h=this._moTextCtrl,f=h.value.length;
function c(i)
{
if(!i)
{
i=0;
}
if(i<0)
{
i=f+i+1;
}
if(i<0)
{
return 0;
}
if(i>f)
{
return f;
}
return i;
}
var e=c(b),d=c(a);
if(h.createTextRange)
{
var g=h.createTextRange();
g.moveStart("character",e);
g.collapse();
g.moveEnd("character",d-e);
g.select();
this._focusWithLock();
}
else{
this._focusWithLock();
h.selectionStart=e;
h.selectionEnd=d;
}
return this;
},_setup:function(a,b){
var g=this,d=g._moContainer,e,i,j,h;
d.unselectable="on";
d.style.cursor="text";
d.innerHTML=g._moTemplate._INPUT.replace({css:g._moStyle.text,width:g._moConst._nBasicWidth,defaulttext:g._msDefaultText,accesskey:b?'accesskey="'+b+'"':''});
e=g._moDefaultText=d.firstChild;
i=g._moTextContainer=e.nextSibling,j=g._moTextCtrl=i.firstChild,h=g._moStrLenCalcer=i.lastChild;
g._moSelectCtrl=d.lastChild.firstChild;
g._mnTabIndex=typeof a=="number"?a:0;
j.tabIndex=a;
g._syncFontStyle(h,j);
var f=[],c=g._moWindow.document.body;
E(g._moConst._oMenuItems,function(k){
var l=k.split("|");
f.push((l[0]=="seperater"?g._moTemplate._CONTEXTMENU_SEP:g._moTemplate._CONTEXTMENU_ITEM.replace({operate:l[0],name:l[1],shortcut:T(l[2]||"").replace(g._getCtrlKeyName())})));
});
insertHTML(c,"afterBegin",g._moTemplate._CONTEXTMENU.replace({items:f.join(""),width:gbIsMac?160:130}));
g._moContextMenu=c.firstChild;
return g;
},_feature:function(){
var e=arguments[0],c=this._moRegistFeature;
if(e=="setup")
{
var a=arguments[1];
for(var g in c)
{
if(!a.feature||!a.feature[g])
{
c[g]=0;
}
else{
this._getRegistFeature(g)['init'].call(this,a);
}
}
}
else{
var f=arguments[1],d=[].slice.call(arguments,2),b=this._getRegistFeature(e);
b[f]&&b[f].apply(this,d);
}
return this;
},_getRegistFeature:function(a){
var b=this._moRegistFeature;
if(b[a])
{
return (function(c){
var d={"init":function(){
debug(c+": not init");
}};
switch(c)
{case "autoFold":
return extend(d,{"init":function(e){
var f=this;
insertHTML(f._moContainer,"afterBegin",f._moTemplate._FOLD_ADDR.replace({}));
addEvent(S("qmAddrInputFold",f._moWindow),"mousedown",function(){
fireMouseEvent(f._moContainer,"mousedown");
});
},"fold":function(e){
if(e&&this._hasAddrSelected())
{
return;
}
var f=this._moContainer,g="smart_contact_fold";
f.scrollTop=0;
if(e)
{
this.length()&&!hasClass(f,g)&&addClass(f,g);
f.style.height="";
S("qmAddrInputFoldCnt",this._moWindow).innerHTML=this.length();
}
else{
var h=f.scrollHeight-2;
hasClass(f,g)&&rmClass(f,g);
f.style.height="18px";
f.style.height=h+"px";
f.style.height="auto";
}
}});
default:
return d;
}
})(a);
}
return {};
},_showAutoComplete:function(){
var a=this;
a._moAutoComplete.show(a._getAutoCompleteData(" "));
return a;
},_showContextMenu:function(a,b,c){
var i=this._moWindow.document.body,e=i.clientWidth,d=i.clientHeight,j=this._moContextMenu,h=j.clientWidth,g=j.clientHeight;
j.style.left=i.scrollLeft+(a+h>e?a-h:a)+"px";
j.style.top=i.scrollTop+(b+g>d?b-g:b)+"px";
var f=this._bIsCollapsed();
E(GelTags("div",j)[0].childNodes,function(k){
switch(k.getAttribute("opt"))
{case "cut":
case "copy":
case "delete":
setClass(k,f?"menu_item_nofun":"menu_item");
break;
case "edit":
k.setAttribute("addr",c||"");
break;
}
});
},_syncFontStyle:function(a,b){
E("fontFamily,fontSize,fontWeight,lineHeight,wordSpacing".split(","),function(c){
a.style[c]=getStyle(b,c);
});
},_unlockFocus:function(){
this._mbIsFocusLock=false;
return this;
},_updateErrorDomainDisplay:function(){
var c=this,a=c._moAddrMap,b=c._moErrorDomainMap;
E(c._moAddrList,function(d){
var e=a[d],g="",f=e._oDom;
if(b[e._sDomain])
{
g=c._moTemplate._ADDRITEM.replace({},"errdomainmsg");
}
else if(e._bIsQQAddr)
{
g=e._bIsValid?d:c._moTemplate._ADDRITEM.replace({addrError:true},"errmsg");
}
else{
g=e._bIsValid?d:c._moTemplate._ADDRITEM.replace({},"errmsg");
}
if(f.title!=g)
{
f.title=g;
c._setAddrItemClass(f,"normal");
}
});
return c;
},_readyToCalcAddrItemDispInfo:function(){
var e=this._moAddrList,f=this._moAddrMap,l,n,a,o,c,d,b,m,i,k,h,g,j;
if(this._moAddrItemCalcInfo)
{
delete this._moAddrItemCalcInfo;
}
if(e.length!=0)
{
l=f[e[0]]._oDom;
n=f[e[e.length-1]]._oDom;
a=n.nextSibling;
o=l.offsetParent;
c=calcPos(o);
d=c[0];
b=c[3];
m=l.offsetHeight;
}
i=calcPos(this._moContainer);
k=i[0];
h=i[3];
g=i[2];
j=i[1];
this._moAddrItemCalcInfo={_oFirstItem:l,_oLastItem:n,_nEndItem:a,_nOffsetTop:d,_nOffsetLeft:b,_oItemHeight:m,_oContainerTop:k,_oContainerLeft:h,_oContainerBottom:g,_oContainerRight:j};
},_isInContainer:function(a){
var d=this._moAddrItemCalcInfo,b=a.clientX,c=a.clientY;
return b>=d._oContainerLeft&&b<=d._oContainerRight&&c>=d._oContainerTop&&c<=d._oContainerBottom;
},_getNearestAddrItemInfo:function(a,b){
var c=b=="limit",t={};
if(!c||this._isInContainer(a))
{
var v=this._getAddrItemRowsList(),p=v.length;
if(p>0)
{
var q=this._moAddrItemCalcInfo,l=a.clientX-q._nOffsetLeft,m=a.clientY-q._nOffsetTop,n=this._getPointRow(a.clientY),u,o,d,e,s,k,j,g,h,r,f;
if(n<0)
{
n=0;
}
else if(n>=p)
{
n=p-1;
}
u=v[n]._oRowList;
o=u.length;
for(var w=0,j=9999999;w<o;w++)
{
r=u[w];
d=l-r.offsetLeft;
e=r.offsetWidth-d;
f=Math.min(Math.abs(d),Math.abs(e));
if(f<j)
{
s=r;
j=f;
g=d;
h=e;
}
else{
break;
}
}
k=s.offsetTop;
t._oItem=s;
t._nRow=n;
t._nXin=g>0&&h>0;
t._nYin=m>=k&&m<=k+q._oItemHeight;
t._sAlign=g<h?"left":"right";
}
}
return t;
},_getAddrItemRowsList:function(){
var d=this._moAddrItemCalcInfo,g=d._oRowsList;
if(g)
{
return g;
}
var e=d._oFirstItem,b=d._nEndItem,f,c,a;
d._oRowsList=g=[];
for(;e&&e!=b;e=e.nextSibling)
{
if(e.getAttribute("addr"))
{
a=e.offsetTop;
if(c!=a)
{
c=a;
f=[e];
g.push({_nOffsetTop:c,_oRowList:f});
}
else{
f.push(e);
}
}
}
return g;
},_getPointRow:function(a){
var d=this._moAddrItemCalcInfo,b=d._oContainerTop,c=this._getAddrItemRowsList().length;
return !c?0:Math.floor((a-b)*c/(d._oContainerBottom-b));
},_addEventForDom:function(b,a,c){
var d=this;
for(var e in a)
{
(function(){
var f=a[e];
addEvent(b,e,function(){
f.call(d,arguments[0],b,c);
});
})();
}
return d;
},_doContainerMouseDown:function(b,a){
var d=this,e=b.srcElement||b.target;
if(this._moWindow.getSelection&&b.button==0||!this._moWindow.getSelection&&b.button==1)
{
var g=e.tagName=="SPAN"||e.tagName=="B"?e.parentNode:e,f=g.getAttribute("addr"),c=e!=d._moTextCtrl;
if(e==a)
{
now()-(d._mnContainerClickTime||0)<300?d._selectAllItem():d._doContainerMoveSelection(b,a);
d._mnContainerClickTime=now();
}
if(f)
{
if(b.ctrlKey||b.metaKey)
{
d._selectItem(f,"add");
}
else if(b.shiftKey)
{
d._selectItem(f,"shift");
}
else{
if(!d._isItemSelected(f))
{
d._selectItem(f);
}
d._doContainerDragStart(b,a,f);
}
}
else if(c||d._moTextCtrl.value.length==0)
{
d._doContainerTrySelect(b);
}
if(c)
{
preventDefault(b);
}
if(c||d._moTextCtrl.value.length==0)
{
d._moAutoComplete.close();
}
d._hideContextMenu();
}
else if(b.button==2||(gbIsIE&&b.button==0))
{
if(e!=d._moTextCtrl)
{
var g=e.tagName=="SPAN"||e.tagName=="B"?e.parentNode:e,f=g.getAttribute("addr");
if(f&&!d._isItemSelected(f))
{
if(gbIsIE)
{
this._mbIsTextFocus=false;
}
d._selectItem(f);
}
d._stopEvent(b);
d._saveInputRange();
}
}
else if(e!=d._moTextCtrl)
{
d._stopEvent(b);
}
},_doContainerSelectStart:function(a){
var b=a.srcElement||a.target;
if(b!=this._moTextCtrl&&b!=this._moSelectCtrl)
{
preventDefault(a);
}
},_doContainerDragStart:function(b,a,c){
var k=this,l=this._moWindow,f=l.document,g=l.captureEvents?l:f.body,d=b.clientX,e=b.clientY,h=f.createElement("div"),j=f.createElement("div");
h.className="addr_cursor";
h.innerHTML='&nbsp;';
j.style.cssText='position:absolute;z-index:99999;top:-999px;left:-999px;';
j.innerHTML=this._moTemplate._MOVER;
var i=this._moContainerMouseDownInfo={_bIsInitlize:false,_oInsertCursor:h,_oMover:j,_oContainer:a,_fDoMouseUp:function(m){
if(k._moContainerMouseDownInfo)
{
k._moContainerMouseDownInfo=null;
k._releaseCapture();
removeEvent(g,"mouseup",i._fDoMouseUp);
removeEvent(g,"mousemove",i._fDoMouseMove);
try{
if(i._bIsInitlize)
{
var t=k._moSelectCtrl.value,p=i._oObjectList[i._nInObjIdx]._oInstance,o=p._moContainer,s=[],r=k._moAddrList,q;
if(h.parentNode==o)
{
o.style.backgroundColor="#fff";
E(r,function(u){
if(k._isItemSelected(u))
{
s.push(u);
}
});
k._deleteSelectItems(true,true);
o.insertBefore(p._moTextContainer,h);
p.add(t,true);
E(s,function(u){
p._selectItem(u,"add");
});
if(k==p)
{
callBack.call(k,k._mEvent._onchange,["move"]);
}
else{
callBack.call(k,k._mEvent._onchange,["del"]);
callBack.call(p,p._mEvent._onchange,["add"]);
}
}
}
else{
k._selectItem(c);
}
}
catch(n)
{
doPageError(n.message,"/js/qmaddrinput.js","_fDoMouseUp");
}
removeSelf(h);
removeSelf(j);
delete j;
delete h;
delete i;
}
k._stopEvent(m);
},_fDoMouseMove:function(m){
if(!i._bIsInitlize&&Math.max(Math.abs(d-m.clientX),Math.abs(e-m.clientY))>8)
{
var p=[],n=f.body;
E(QMAddrInput._get(l),function(r,q){
var s=calcPos(r._moContainer);
if(s[2])
{
if(r==k)
{
i._nInObjIdx=q;
}
p[q]={_oInstance:r,_nPos:s};
r._readyToCalcAddrItemDispInfo();
}
});
n.insertBefore(j,n.firstChild);
if(gsAgent&&gsAgent.indexOf("mac")!=-1)
{
var o=j.firstChild.style;
o.left=parseInt(o.left)-2;
o.top=parseInt(o.top)-4;
}
i._bIsInitlize=true;
i._oObjectList=p;
}
k._doContainerDragMove(m);
k._stopEvent(m);
}};
this._setCapture();
addEvent(g,"mouseup",i._fDoMouseUp);
addEvent(g,"mousemove",i._fDoMouseMove);
},_doContainerDragMove:function(a){
var g=this._moContainerMouseDownInfo;
if(g&&g._bIsInitlize)
{
var f=g._oInsertCursor,h=g._oMover,n=g._oObjectList,b=g._nInObjIdx,e=n[b]._oInstance._moContainer,l;
h.style.left=a.clientX-5+"px";
h.style.top=a.clientY-5+"px";
for(var o=n.length-1;o>=0;o--)
{
var m=n[o];
if(m&&m._oInstance&&m._oInstance._isInContainer(a))
{
l=m._oInstance;
break;
}
}
if(l)
{
if(b!=o)
{
g._nInObjIdx=o;
}
var c=l._moAddrItemCalcInfo,d=l._moContainer,j=l._getNearestAddrItemInfo(a),k=j._oItem;
if(k&&j._sAlign=="right")
{
k=k.nextSibling;
}
if(d!=e)
{
e.style.backgroundColor="#fff";
}
if(g._oContainer!=d)
{
d.style.backgroundColor="#f9f2b3";
}
d.insertBefore(f,k||d.firstChild);
}
else if(f.parentNode==e)
{
removeSelf(f);
e.style.backgroundColor="#fff";
}
}
},_doContainerContextMenu:function(a){
var b=a.srcElement||a.target;
if(b!=this._moTextCtrl)
{
this._stopEvent(a);
this._loadInputRange();
this._showContextMenu(a.clientX,a.clientY,b.getAttribute("addr"));
this._moAutoComplete.close();
}
},_doContainerMoveSelection:function(b,a){
var n=a.childNodes,q=n[1].offsetParent,l=calcPos(q),k=l[3],m=l[0],g=b.clientX,h=b.clientY,c=false;
for(var s=0,j=n.length-1;s<j;s++)
{
var o=n[s],p=m+o.offsetTop,e=g<=k+o.offsetLeft+2,f=h<=p,d=h<=p+o.offsetHeight;
if((e&&d)||(!e&&f))
{
var r=o.getAttribute("addr");
if(!r)
{
this.focus("start");
}
else if(o.previousSibling==this._moTextContainer)
{
this.focus("end");
}
else{
this._addTextCtrlValue();
this._insertTextBefore(r);
this.focus("start");
}
c=true;
break;
}
}
if(!c)
{
if(o==this._moTextContainer)
{
this.focus("end");
}
else{
this._addTextCtrlValue();
this._insertTextBefore();
this.focus("start");
}
}
},_doContainerTrySelect:function(a){
var c=this._moAddrList,b=c.length;
if(b==0||this._moTextCtrl.value.length!=0)
{
return;
}
var g=this._moWindow,d=g.captureEvents?g:g.document.body,f=this,h=a.clientX,i=a.clientY;
var e=this._moContainerMouseDownInfo={_bIsInitlize:true,_fDoMouseUp:function(j){
if(f._moContainerMouseDownInfo)
{
f._moContainerMouseDownInfo=null;
f._releaseCapture();
removeEvent(d,"mouseup",e._fDoMouseUp);
removeEvent(d,"mousemove",e._fDoMouseMove);
delete e;
}
f._stopEvent(j);
},_fDoMouseMove:function(j){
if(f._moContainerMouseDownInfo)
{
var k=j.clientX,l=j.clientY,r,t;
if(Math.abs(k-h)>2||Math.abs(l-i)>5)
{
var o=f._moAddrItemCalcInfo,p=f._getNearestAddrItemInfo(j),q=p._oItem,m=p._nRow;
if(p._nXin)
{
r=q;
}
else{
var n=f._getPointRow(i),s;
if(m==n)
{
s=k<h?"left":"right";
}
else{
s=l<i?"left":"right";
}
if(p._sAlign==s)
{
if(q&&q[s=="left"?"previousSibling":"nextSibling"]!=f._moTextContainer)
{
r=q;
}
}
else{
r=q&&q[s=="right"?"previousSibling":"nextSibling"];
}
}
}
t=r&&r.getAttribute("addr");
if(t)
{
f._selectItem(t,"shift");
}
else if(f._cancelSelectItem())
{
f.focus("start");
}
}
f._stopEvent(j);
}};
this._readyToCalcAddrItemDispInfo();
this._setCapture();
addEvent(d,"mouseup",e._fDoMouseUp);
addEvent(d,"mousemove",e._fDoMouseMove);
},_doTextFocus:function(a){
var b=this;
b._mbIsTextFocus=true;
show(b._moDefaultText,false);
setTimeout(function(){
b._mbIsFocusAC&&!b.length()&&b._showAutoComplete();
b._feature("autoFold","fold",!1);
});
callBack.call(b,b._mEvent._onfocus,[a]);
},_doTextBlur:function(a){
var b=this;
if(!b._isFocusLock())
{
b._mbIsTextFocus&&b._hideContextMenu();
b._mbIsTextFocus=false;
b._addTextCtrlValue();
!b.length()&&show(b._moDefaultText,true);
setTimeout(function(){
b._feature("autoFold","fold",!0);
});
callBack.call(b,b._mEvent._onblur,[a]);
}
},_doTextKeyDown:function(a){
this._adjustTextWidth(a.ctrlKey?0:a.keyCode);
switch(a.keyCode)
{case 59:
case 186:
case 188:
if(a.shiftKey)
{
break;
}
case 32:
if(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this._moTextCtrl.value)&&this._addTextCtrlValue())
{
this._stopEvent(a);
}
break;
case 46:
var v=this._getTextSelectionState();
if(v._sType=="point"&&v._nEnd==v._nLength&&this._moTextContainer.nextSibling)
{
this._deleteItem(this._moTextContainer.nextSibling);
this._stopEvent(a);
callBack.call(this,this._mEvent._onchange,["del"]);
}
break;
case 8:
var v=this._getTextSelectionState(),t=this._moTextContainer.previousSibling,z=t&&t.getAttribute("addr");
if(v._sType=="point"&&v._nStart==0&&t)
{
this._selectItem(z,"shift");
this._stopEvent(a);
}
break;
case 37:
var v=this._getTextSelectionState(),t=this._moTextContainer.previousSibling,z=t&&t.getAttribute("addr");
if(v._sType=="point"&&v._nStart==0&&z)
{
if(a.shiftKey)
{
this._selectItem(z,"shift");
}
else{
this._addTextCtrlValue();
this._insertTextBefore(z);
this.focus("start");
}
this._stopEvent(a);
}
break;
case 39:
var v=this._getTextSelectionState(),p=this._moTextContainer.nextSibling,y=p&&p.getAttribute("addr");
if(v._sType=="point"&&v._nEnd==v._nLength&&y)
{
if(a.shiftKey)
{
this._selectItem(y,"shift");
}
else{
this._addTextCtrlValue();
this._insertTextBefore(p.nextSibling.getAttribute("addr"));
this.focus("start");
}
this._stopEvent(a);
}
break;
case 36:
var v=this._getTextSelectionState();
if(v._sType=="point"&&v._nStart==0)
{
this._addTextCtrlValue();
if(a.shiftKey&&this._getTextPos()!=-1)
{
this._selectItem(this._moAddrList[0],"shift");
}
else{
this._insertTextBefore(this._moAddrList[0]);
this.focus("start");
}
this._stopEvent(a);
}
break;
case 35:
var v=this._getTextSelectionState();
if(v._sType=="point"&&v._nEnd==v._nLength)
{
this._addTextCtrlValue();
var c=this._moAddrList.length-1;
if(a.shiftKey&&this._getTextPos()!=c)
{
this._selectItem(this._moAddrList[c],"shift");
}
else{
this._insertTextBefore();
this.focus("start");
}
this._stopEvent(a);
}
break;
case 65:
if(a.ctrlKey||a.metaKey)
{
var v=this._getTextSelectionState(),l=this._moAddrList;
if(v._nStart==0&&v._nEnd==v._nLength&&l.length!=0)
{
this._addTextCtrlValue();
this._selectItem(l[0]);
this._selectItem(l[l.length-1],"shift");
this._stopEvent(a);
}
}
break;
case 38:
case 40:
if(!this._moAutoComplete.isShow())
{
var b=a.keyCode==38,q=this._moTextContainer[b?"previousSibling":"nextSibling"];
_sAddr=q.getAttribute("addr"),_nAddrPos=this._getAddrPos(_sAddr);
if(_nAddrPos!=-1)
{
var r=q.offsetParent,g=calcPos(r),j=g[0],h=g[3],u=calcPos(this._moTextContainer);
_nTextTop=u[0],_nTextLeft=u[3],_oClientPos=calcPos(this._moContainer),_nClientLeft=_oClientPos[3],_nClientTop=_oClientPos[0],l=this._moAddrList,_oAddrMap=this._moAddrMap,_nDulta=9999999,_sDultaAddr=null,_oDultaItem=null;
for(var A=_nAddrPos,o=l.length,f=b?-1:o+1,k=b?-1:1;A!=f;A+=k)
{
if(A==o)
{
var x="",w=_oAddrMap[l[o-1]]._oDom,m=h+w.offsetLeft+w.offsetWidth,n=j+w.offsetTop,e=Math.abs(n-_nTextTop);
}
else{
var x=l[A],w=_oAddrMap[x]._oDom,m=h+w.offsetLeft,n=j+w.offsetTop,e=Math.abs(n-_nTextTop);
}
if(Math.abs(m-_nClientLeft)<5&&Math.abs(n-_nClientTop)>5)
{
var s=w.previousSibling;
e-=w.offsetHeight*k;
m=h+s.offsetLeft+s.offsetWidth;
}
if(e<5)
{
continue;
}
if(e>5+w.offsetHeight)
{
break;
}
var d=Math.abs(m-_nTextLeft);
if(d>=_nDulta)
{
break;
}
_nDulta=d;
_sDultaAddr=x;
_oDultaItem=_oDultaItem;
}
if(_sDultaAddr!=null)
{
this._addTextCtrlValue();
if(a.shiftKey)
{
this._selectItem(_sDultaAddr,"shift");
}
else{
this._insertTextBefore(_sDultaAddr);
this.focus("start");
}
}
}
this._stopEvent(a);
}
break;
default:
callBack.call(this,this._mEvent._onkeydown,[a]);
break;
}this._hideContextMenu();
},_doTextKeyPressForTT:function(){
this._adjustTextWidth();
},_doTextKeyUp:function(a){
var c=this;
c._adjustTextWidth();
if(a.keyCode==186||a.keyCode==188||a.keyCode==59)
{
if(c._addTextCtrlValue())
{
c._stopEvent(a);
}
}
if(a.keyCode==13)
{
if(!gbIsMac&&!gbIsIE)
{
if(c._addTextCtrlValue())
{
c._stopEvent(a);
}
return;
}
if(c._nWaitEnter)
{
return;
}
var b=getEventTarget(a);
c._nWaitEnter=setTimeout(function(){
c._nWaitEnter=null;
var d=b.value;
if(d&&c._sPreInputText!=d)
{
c._sPreInputText=d;
return;
}
c._sPreInputText=d;
if(c._moAutoComplete.getSelection())
{
return;
}
c._addTextCtrlValue();
},30);
}
},_doTextPaste:function(){
var a=this;
this._moWindow.setTimeout(function(){
a._adjustTextWidth("paste");
if(gbIsFF)
{
show(a._moTextCtrl,false);
setTimeout(function(){
show(a._moTextCtrl,true);
a.focus("end");
});
}
},0);
this._moWindow.setTimeout(function(){
a._moTextCtrl.value.indexOf("@")!=-1&&a._addTextCtrlValue();
},100);
},_doSelectFocus:function(a){
var b=this;
this._moSelectCtrl.tabIndex=this._mnTabIndex;
setTimeout(function(){
b._feature("autoFold","fold",!1);
});
callBack.call(this,this._mEvent._onfocus,[a]);
},_doSelectCancel:function(a){
var b=this;
this._moSelectCtrl.tabIndex=-1;
setTimeout(function(){
b._feature("autoFold","fold",!0);
});
if(this._hasAddrSelected())
{
this._cancelSelectItem();
this._hideContextMenu();
callBack.call(this,this._mEvent._onblur,[a]);
}
},_doSelectKeyDown:function(a){
switch(a.keyCode)
{case 8:
case 46:
this._deleteSelectItems();
break;
case 37:
var e=this._moAddrSelInfo,f=e._oList,g=f[f.length-1];
if(a.shiftKey)
{
var d=this._getAddrPos(g)-1;
if(d>=0)
{
this._selectItem(this._moAddrList[d],"shift");
}
else if(this._getTextPos()==-1)
{
this._insertTextBefore(this._moAddrList[0]);
this.focus("start");
}
}
else{
this._cancelSelectItem();
this._insertTextBefore(g);
this.focus("start");
}
break;
case 39:
var e=this._moAddrSelInfo,f=e._oList,g=f[f.length-1];
if(a.shiftKey)
{
var c=this._getAddrPos(g)+1,b=this._moAddrList.length-1;
if(c<=b)
{
this._selectItem(this._moAddrList[c],"shift");
}
else if(this._getTextPos()==b)
{
this._insertTextBefore();
this.focus("start");
}
}
else{
var h=e._oData[g].nextSibling.getAttribute("addr");
this._cancelSelectItem();
this._insertTextBefore(h);
this.focus("start");
}
break;
case 36:
if(a.shiftKey&&this._getTextPos()!=-1)
{
this._selectItem(this._moAddrList[0],"shift");
}
else{
this._insertTextBefore(this._moAddrList[0]);
this.focus("start");
}
this._stopEvent(a);
break;
case 35:
var b=this._moAddrList.length-1;
if(a.shiftKey&&this._getTextPos()!=b)
{
this._selectItem(this._moAddrList[b],"shift");
}
else{
this._insertTextBefore();
this.focus("start");
}
this._stopEvent(a);
break;
case 13:
break;
default:
callBack.call(this,this._mEvent._onkeydown,[a]);
break;
}if(!((a.ctrlKey||a.metaKey)&&(a.keyCode==67||a.keyCode==86||a.keyCode==88))&&a.keyCode!=9)
{
this._stopEvent(a);
}
this._hideContextMenu();
},_doSelectKeyUp:function(a){
if((a.keyCode==13||a.keyCode==113))
{
var b=this._moAddrSelInfo._oList,c=b[b.length-1];
this.edit(c);
this._stopEvent(a);
}
},_doSelectPaste:function(a){
var b=this;
this._moWindow.setTimeout(function(){
b._deleteSelectItems();
b._moTextCtrl.value=b._moSelectCtrl.value;
b._adjustTextWidth("paste");
b.focus("end");
});
},_doSelectCut:function(){
var a=this;
this._moWindow.setTimeout(function(){
a._deleteSelectItems();
});
},_delSpanClick:function(b,a,c){
stopPropagation(b);
var e=this,f=b.srcElement||b.target,d=f.parentNode,g=d.getAttribute("addr");
g&&e._deleteItem(g);
},_doAddrItemClick:function(b,a,c){
var d=b.srcElement||b.target;
if(d.tagName=="IMG"&&isObjContainTarget(a,b.srcElement||b.target))
{
this._deleteItem(c);
}
},_doAddrItemDblclick:function(b,a,c){
if(isObjContainTarget(a,b.srcElement||b.target))
{
this.edit(c);
stopPropagation(b);
}
},_doAddrItemMouseOver:function(b,a){
if(!this._moContainerMouseDownInfo&&!this._isItemSelected(a)&&isObjContainTarget(a,b.srcElement||b.target))
{
this._setAddrItemClass(a,"over");
getTop().showGGoupMember&&getTop().showGGoupMember(a.getAttribute("addr"),a);
}
},_doAddrItemMouseOut:function(b,a){
if(!this._moContainerMouseDownInfo&&!this._isItemSelected(a)&&!isObjContainTarget(a,b.relatedTarget||b.toElement)&&isObjContainTarget(a,b.srcElement||b.target))
{
this._setAddrItemClass(a,"normal");
getTop().hideGGoupMember&&getTop().hideGGoupMember(a.getAttribute("addr"));
}
},_doContextMenuClick:function(a){
var c=a.srcElement||a.target;
if(c.className=="menu_item_nofun")
{
return;
}
var b=this;
switch(c.getAttribute("opt"))
{case "cut":
b._hideContextMenu();
if(!gbIsIE)
{
alert(T('\u60A8\u7684\u6D4F\u89C8\u5668\u5B89\u5168\u8BBE\u7F6E\u4E0D\u5141\u8BB8\u7F16\u8F91\u5668\u81EA\u52A8\u6267\u884C\u526A\u5207\u64CD\u4F5C\uFF0C\u8BF7\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E($cmd$+X)\u6765\u5B8C\u6210\u3002').replace(b._getCtrlKeyName()));
}
else{
b._moWindow.document.execCommand("Cut");
}
break;
case "copy":
b._hideContextMenu();
if(!gbIsIE)
{
alert(T('\u60A8\u7684\u6D4F\u89C8\u5668\u5B89\u5168\u8BBE\u7F6E\u4E0D\u5141\u8BB8\u7F16\u8F91\u5668\u81EA\u52A8\u6267\u884C\u590D\u5236\u64CD\u4F5C\uFF0C\u8BF7\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E($cmd$+C)\u6765\u5B8C\u6210\u3002').replace(b._getCtrlKeyName()));
}
else{
b._moWindow.document.execCommand("Copy");
}
break;
case "paste":
b._hideContextMenu();
if(!gbIsIE)
{
var d=prompt(T(['\u56E0\u4E3A\u4F60\u7684\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u8BBE\u7F6E\u539F\u56E0\uFF0C\u672C\u7F16\u8F91\u5668\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u4F60\u7684\u526A\u8D34\u677F\u5185\u5BB9\uFF0C\u4F60\u9700\u8981\u5728\u672C\u5BF9\u8BDD\u6846\u91CD\u65B0\u7C98\u8D34\u4E00\u6B21\u3002\n\n','\u8BF7\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E($cmd$+V)\u628A\u5185\u5BB9\u7C98\u8D34\u5230\u4E0B\u9762\u7684\u65B9\u6846\u91CC\uFF0C\u518D\u6309 \u786E\u5B9A\u3002']).replace(b._getCtrlKeyName()));
if(d)
{
b._moTextCtrl.value=d;
b._adjustTextWidth();
b.focus("end");
}
}
else{
b._moWindow.document.execCommand("Paste");
}
break;
case "edit":
b._hideContextMenu();
b.edit(c.getAttribute("addr"));
break;
case "delete":
b._hideContextMenu();
if(b._hasAddrSelected())
{
b._deleteSelectItems();
}
else{
b._moWindow.document.execCommand("delete");
}
break;
case "selectall":
b._hideContextMenu();
b._selectAllItem();
break;
}
},_doAutoCompleteSelect:function(a,b){
var c=this;
c._changeTextValue("");
c.add(a,false,b);
c.focus();
},_setCapture:function(){
var a=this._moContainer;
if(a.setCapture)
{
a.setCapture();
}
else{
this._moWindow.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
}
},_stopEvent:function(a){
preventDefault(a);
},_releaseCapture:function(){
var a=this._moContainer;
if(a.releaseCapture)
{
a.releaseCapture();
}
else{
this._moWindow.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
}
}};
QMAddrInput._CONST={_nCacheId:"QMAddrInput_aTGdf$#HAsGf",_nMaxNickAsiiLen:25,_nMaxAddrAsiiLen:40,_nBasicWidth:13,_nStepWidth:1,_oMenuItems:["cut|\u526A\u5207|$cmd$+X","copy|\u590D\u5236|$cmd$+C","paste|\u7C98\u8D34|$cmd$+V","edit|\u7F16\u8F91","delete|\u5220\u9664","seperater","selectall|\u5168\u9009|$cmd$+A"]};
QMAddrInput._get=function(a){
var c=[],b=a&&a[this._CONST._nCacheId];
for(var d in b)
{
c.push(b[d]);
}
return c;
};
QMAddrInput._set=function(a){
var c=a._moWindow,b=this._CONST._nCacheId;
if(!c[b])
{
c[b]=new c.Object();
}
c[b][a._msId]=a;
};
QMAddrInput._TEMPLATE={_FOLD_ADDR:TE(['<div id="qmAddrInputFold" class="smart_contact_info_wrap" >','<span class="smart_contact_info">\u5171<font id="qmAddrInputFoldCnt">$addrCnt$</font>\u4E2A</span>','<span class="smart_contact_gd smart_contact_gd1"></span><span class="smart_contact_gd smart_contact_gd2"></span><span class="smart_contact_gd smart_contact_gd3"></span>','</div>']),_INPUT:TE(['<div style="position:absolute;color:#A0A0A0;padding-top:1px;','$@$if(!$defaulttext$)$@$','display:none;','$@$endif$@$','">$defaulttext$</div>','<div class="$css$" style="float:left;border:none;overflow:hidden;width:$width$px;">','<input type="input" class="js_input" style="border:none;outline:none;-webkit-appearance:none;width:100%;" $accesskey$/>','<div style="width:1px;height:1px;overflow:auto;*overflow:hidden;white-space:nowrap;border:none;margin:0;padding:0;"></div>','</div>','<div style="clear:both;border:none;margin:0;padding:0;" unselectable="on">','<input type="text" style="position:absolute;border:none;padding:0;width:10px;left:-9999px;top:-9999px;" tabindex=-1 >','</div>']),_MOVER:T(['<div style="width:8px;height:8px;*width:12px;*height:12px;','font-size:1px;border:2px solid #7B7D84;position:absolute;top:18px;left:9px;"></div>','<div style="background:#fff;width:11px;height:11px;font:1px;opacity:0;filter:alpha(opacity:0);"></div>']),_CONTEXTMENU:T(['<table style="position:absolute;z-index:9999;left:-200px;top:0;"',' cellspacing="0" cellpadding="0" onmousedown="return false;" unselectable="on">','<tr><td>','<div style="border:1px solid #ACA899;width:$width$px;padding:2px;background:#fff;">','$items$','</div>','</td><td style="height:100%;filter:alpha(opacity=50);opacity:0.5;">','<div style="margin-top:4px;border-left:2px solid black;height:100%;"></div>','</td></tr>','<tr><td style="filter:alpha(opacity=50);opacity:0.5;">','<div style="margin-left:4px;border-top:2px solid black;height:2px;"></div>','</td><td style="filter:alpha(opacity=50);opacity:0.5;">','<div style="margin-left:0px;border-top:2px solid black;height:2px;"></div>','</td></tr>','</table>']),_CONTEXTMENU_ITEM:T(['<div class="menu_item" onmouseover="','if (this.className == \x27menu_item\x27)','{','this.className = \x27menu_item_high\x27;','}','" onmouseout="','if (this.className == \x27menu_item_high\x27)','{','this.className = \x27menu_item\x27;','}','" style="padding:0 20px;line-height:19px;" unselectable="on" opt="$operate$">','<div style="float:right;" unselectable="on" opt="$operate$">$shortcut$</div>','$name$','</div>']),_CONTEXTMENU_SEP:T(['<div style="font-size:1px;height:7px;overflow:hidden;" unselectable="on">','<div style="border-top:1px solid #ACA899;margin-top:3px;"></div>','</div>']),_ADDREDIT:TE(['$@$if($nick$)$@$"$nick$"<$@$endif$@$','$addr$','$@$if($nick$)$@$>$@$endif$@$','$splitchar$']),_ADDRDISP:T(['$alias$','$@$if($domain$)$@$','<span class="domain" unselectable="on" addr="$addr$">@$domain$</span>','$@$endif$@$'])};
QMAddrInput._TEMPLATE._ADDRITEM=TE(['<div class="','$@$if(!$isvalid$)$@$','$css.error$','$@$else if($isdomainerr$)$@$','$css.dmerror$','$@$else$@$','$css.normal$','$@$endif$@$','" style="float:left;white-space:nowrap;" ','$@$if(!$isvalid$)$@$','title="$@$sec errmsg$@$$@$if(!$addrError$)$@$','\u8BE5\u5730\u5740\u683C\u5F0F\u6709\u9519\u8BEF \uFF0C\u8BF7\u53CC\u51FB\u4FEE\u6539','$@$else$@$','\u8BE5\u90AE\u4EF6\u5730\u5740\u4E0D\u5B58\u5728 \uFF0C\u8BF7\u53CC\u51FB\u4FEE\u6539','$@$endif$@$$@$endsec$@$ "','$@$else if($isdomainerr$)$@$','title="$@$sec errdomainmsg$@$\u8BE5\u5730\u5740\u7684\u57DF\u540D\u53EF\u80FD\u4E0D\u5B58\u5728\uFF0C\u8BF7\u53CC\u51FB\u4FEE\u6539$@$endsec$@$" ','$@$else$@$','title="$addr$"','$@$endif$@$','addr="$addr$" unselectable="on">','$@$if($nick$)$@$','<b unselectable="on" addr="$addr$">$nick$</b>','<span unselectable="on" addr="$addr$"','$@$if($dispmode$=="onlynick")$@$',' style="display:none";','$@$endif$@$','>&lt;',QMAddrInput._TEMPLATE._ADDRDISP,'&gt;</span>','$@$else$@$','<b unselectable="on" addr="$addr$">',QMAddrInput._TEMPLATE._ADDRDISP,'</b>','$@$endif$@$','<span class="semicolon">','$splitchar$','</span>','<a href="javascript:;" class="addr_del" name="del"></a>','</div>']);
QMAddrInput._isShowTip=function(){
var a="IS_SHOW_TOADDR_TIP",b=getGlobalVarValue(a);
if(typeof b=="undefined")
{
setGlobalVarValue(a,"loading");
QMAjax.send("/cgi-bin/readtemplate",{content:T("sid=$sid$&t=tip&s=isshowtip&tipid=29").replace({sid:getSid()}),onload:function(c,d){
setGlobalVarValue(a,d);
}});
}
return gnIEVer!=7&&b=="true";
};
QMAddrInput._hideTip=function(){
ossLog("realtime","all","stat=tips&type=close&tipid=29");
setGlobalVarValue("IS_SHOW_TOADDR_TIP","false");
};
function qmaddrinput_js()
{
}
