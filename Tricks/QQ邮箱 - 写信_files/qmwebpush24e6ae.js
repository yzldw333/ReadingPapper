(function(_aoWin,_aoUndefined){
var _oQMWebpush={getInst:function(){
return _oQMWebpush._LOGIC_POLL;
},callBack:function(_aoContext,_afCallBack,_aoParamList){
if(_aoWin.QMWin&&QMWin.call)
{
QMWin.call(_aoContext||this,_afCallBack,_aoParamList);
}
else{
callBack.call(_aoContext||this,_afCallBack,_aoParamList);
}
},uin:function(){
if(_aoWin.QMWin&&QMWin.uin)
{
return QMWin.uin();
}
else{
return getUin();
}
},sid:function(){
if(_aoWin.QMWin&&QMWin.sid)
{
return QMWin.sid();
}
else{
return getSid();
}
},_ajax:function(_aoConfig){
var _oWin=_aoWin,_vData=_aoConfig.vData,_oContent=["r=",Math.random()],_sGET="GET";
_aoConfig.sType=_aoConfig.sType||_sGET;
_aoConfig.nTimeout=_aoConfig.nTimeout||15000;
if(typeof (_vData)!="string")
{
for(var k in _vData)
{
if(Object.prototype.toString.call(_vData[k])=="[object Array]")
{
for(var i=0,len=_vData[k].length;i<len;i++)
{
_oContent.push('&',k,'=',encodeURIComponent(_vData[k][i]));
}
}
else{
_oContent.push('&',k,'=',encodeURIComponent(_vData[k]));
}
}
}
else{
_oContent.push(_vData);
}
if(_oWin.QMWin&&QMWin.ajax)
{
QMWin.ajax({sDataType:"json",sUrl:_aoConfig.sUrl,vData:_oContent.join(''),sType:_aoConfig.sType,nTimeout:_aoConfig.nTimeout,ongetxhr:function(){
return _aoConfig.oAjaxInst||QMWin.ajaxSetting().ongetxhr();
},onerror:function(_aoXhr,_asState,_aoErr){
_oQMWebpush.callBack(null,_aoConfig.oncomplete,[false,_asState,_aoXhr]);
},onsuccess:function(_avData,_asState,_aoXhr){
_oQMWebpush.callBack(null,_aoConfig.oncomplete,[true,_avData,_aoXhr]);
}});
}
else{
var _sUrl=_aoConfig.sUrl,_bGET=_aoConfig.sType==_sGET;
if(_bGET)
{
_oContent.unshift(_sUrl,_sUrl.indexOf('?')<0?'?':'&');
}
QMAjax.send(_bGET?_oContent.join(''):_sUrl,{method:_aoConfig.sType,timeout:_aoConfig.nTimeout,content:_bGET?'':_oContent.join(''),onload:function(_abIsOk,_asParam,_aoXmlObj){
_asParam=="abort"&&(_asParam="timeout");
_oQMWebpush.callBack(null,_aoConfig.oncomplete,[_abIsOk,_asParam,_aoXmlObj]);
}},new QMAjax("","",0,_aoConfig.oAjaxInst));
}
},_createIframe:function(_aoConfig){
var _sWhere="afterBegin",_oWin=_aoWin;
if(_oWin.QMWin&&QMWin.insertIframe)
{
QMWin.insertIframe(_aoConfig,_sWhere);
}
else{
createIframe(_oWin,_aoConfig.src,_aoConfig);
}
}};
_oQMWebpush._LOGIC_KEY={_GETWEBPUSHKEY:"/cgi-bin/getwpkey",_RETRY:5,_RETRYTIME:60,_DELAYTIME:300000,_mnRetry:0,_mbGettingKey:false,_msKey:"",_moGetKeyList:[],getKey:function(_afCallback,_abNew){
var _oSelf=this;
if(_oSelf._msKey&&!_abNew)
{
return _oSelf._msKey;
}
_oSelf._mnRetry=0;
_oSelf._moGetKeyList.push(_afCallback);
_oSelf._getKeyDelayFromCgi();
return null;
},expire:function(){
var _oSelf=this;
_oSelf._msKey="";
return _oSelf;
},_mbDelayTimeHandle:null,_mnPreviousTime:0,_getKeyDelayFromCgi:function(){
var _oSelf=this;
_oQMWebpush.debug(["_oSelf._getKeyDelayFromCgi",_oSelf._mnPreviousTime,!_oSelf._mbDelayTimeHandle,!_oSelf._mbGettingKey]);
if(!_oSelf._mbDelayTimeHandle)
{
if(_oSelf._mnPreviousTime&&(+new Date())-_oSelf._mnPreviousTime<60000)
{
_oSelf._mbDelayTimeHandle=setTimeout(function(){
_oSelf._mbDelayTimeHandle=null;
_oSelf._getKeyFromCgi();
},_oSelf._DELAYTIME);
}
else{
_oSelf._getKeyFromCgi();
}
}
return _oSelf;
},_getKeyFromCgi:function(){
var _oSelf=this;
_oQMWebpush.debug(["_oSelf._mbGettingKey begin",_oSelf._mbGettingKey,_oSelf._mnRetry]);
if(_oSelf._mbGettingKey||++_oSelf._mnRetry>_oSelf._RETRY)
{
return;
}
_oSelf._mbGettingKey=true;
_oSelf._mnPreviousTime=+(new Date());
_oQMWebpush._ajax({sUrl:_oSelf._GETWEBPUSHKEY,vData:{resp_charset:"UTF8",ef:"js",sid:_oQMWebpush.sid()},oncomplete:function(_abIsOk,_asParam,_aoXmlObj){
_oSelf._mbGettingKey=false;
var _nDelay=_oSelf._RETRYTIME,_obj;
if(_abIsOk)
{
try{
_obj=eval("("+_asParam+")");
}
catch(e)
{
_oQMWebpush.debug(["_getKeyFromCgi eval\u9519\u8BEF",e.message]);
}
if(_obj&&_obj.k)
{
_oSelf._msKey=_obj.k;
for(var _oList=_oSelf._moGetKeyList,i=0,_nLen=_oList.length;i<_nLen;i++)
{
if(_oSelf._msKey)
{
_oQMWebpush.callBack(_oSelf,_oList[i],[_oSelf._msKey]);
}
}
_oSelf._moGetKeyList=[];
_oSelf._mnRetry=0;
return;
}
}
if(_obj)
{
_nDelay=_obj.errcode=="-2"?-1:(parseInt(_obj.errmsg)||_nDelay);
}
_oQMWebpush.debug(["_getKeyFromCgi\u8FD4\u56DE\u9519\u8BEF",_obj&&_obj.errcode,_nDelay]);
if(_nDelay>=0)
{
setTimeout(function(){
_oSelf._getKeyDelayFromCgi();
},_nDelay*1000);
}
}});
}};
_oQMWebpush._LOGIC_POLL={_moProxyWin:null,_mbCreatingProxy:false,_moLongConnectAjax:null,_mbLongConnecting:false,_msKey:null,_msTime:"0",_mnOpenServices:0,_moEventList:[],_ABORTTIME:30,_POLL:location.protocol+"//wp.mail.qq.com/poll",_PROXY_URL:location.protocol+"//wp.mail.qq.com/ajax_proxy.html?mail.qq.com&v=110702",open:function(_anServices){
var _oSelf=this;
_oSelf._mnOpenServices|=_anServices;
_oQMWebpush.debug(["\u5F00\u901A\u4E86",_oSelf._mnOpenServices,_anServices]);
return _oSelf._poll();
},close:function(_anServices){
var _oSelf=this;
_oSelf._mnOpenServices&=~_anServices;
_oQMWebpush.debug(["\u5173\u95ED",_oSelf._mnOpenServices,_anServices]);
return _oSelf;
},addEvent:function(_anServices,_afAddEvent,_abAuto){
var _oSelf=this;
_oQMWebpush.debug(["\u52A0\u8F7D\u4E8B\u4EF6",_anServices]);
if(_anServices&&_afAddEvent)
{
for(var i=0,_oEventList=_oSelf._moEventList,_nLen=_oEventList.length;i<_nLen;i++)
{
if(_oEventList[i][1]==_afAddEvent)
{
_oEventList[i][0]|=_anServices;
break;
}
}
i>=_nLen&&_oEventList.push([_anServices,_afAddEvent]);
_abAuto&&_oSelf.open(_anServices);
}
return _oSelf;
},delEvent:function(_afDelEvent){
var _oSelf=this;
if(_afDelEvent)
{
for(var i=0,_oEventList=_oSelf._moEventList,_nLen=_oEventList.length;i<_nLen;i++)
{
if(_oEventList[i][1]==_afDelEvent)
{
_oEventList.splice(i,1);
}
}
}
return _oSelf;
},_fireEvent:function(_anService,_aoData){
var _oSelf=this;
_oQMWebpush.debug(["_fireEvent service",_oSelf._mnOpenServices,_anService,_aoData]);
for(var i=0,_oEventList=_oSelf._moEventList,_nLen=_oEventList.length;i<_nLen;i++)
{
_oQMWebpush.debug(["_fireEvent loop",(_oSelf._mnOpenServices&_anService&_oEventList[i][0]),_oEventList[i][0]]);
(_oSelf._mnOpenServices&_anService&_oEventList[i][0])&&_oQMWebpush.callBack(_oSelf,_oEventList[i][1],[_anService,_aoData]);
}
return _oSelf;
},_getSKey:function(){
var _oSelf=this,_oKeyInst=_oQMWebpush._LOGIC_KEY,_sKey=_oKeyInst.getKey(function(_asKey){
_oSelf._msKey=_asKey;
_oSelf._poll();
},true);
_oSelf._msKey=_sKey;
return _oSelf;
},_analysePoll:function(_aoJson){
var _oSelf=this,_oMap={},_nMaxT=0;
for(var i=0,_nLen=_aoJson.length;i<_nLen;i++)
{
var _oData=_aoJson[i];
_nMaxT<_oData.t&&(_nMaxT=_oData.t);
(_oMap[_oData.b]=_oMap[_oData.b]||[]).push(_oData.c);
}
_oSelf._msTime=_nMaxT;
for(var k in _oMap)
{
if(!_oSelf._fireEvent)
{
_oQMWebpush.debug(["_analysePoll_noevent"]);
}
else{
_oQMWebpush.debug([k]);
}
_oSelf._fireEvent(k,_oMap[k]);
}
return _oSelf;
},_abort:function(){
var _oSelf=this;
if(_oSelf._moLongConnectAjax&&_oSelf._mbLongConnecting)
{
_oSelf._moLongConnectAjax.abort();
_oSelf._mbLongConnecting=false;
}
return _oSelf;
},_poll:function(){
_oQMWebpush.debug(["poll\u8C03\u7528"]);
var _oSelf=this;
if(!_oSelf._mnOpenServices||_oSelf._mbLongConnecting)
{
return _oSelf;
}
if(!_oSelf._moLongConnectAjax)
{
return _oSelf._createProxy();
}
if(!_oSelf._msKey)
{
return _oSelf._getSKey();
}
_oSelf._abort()._mbLongConnecting=true;
_oQMWebpush.debug(["poll\u8BF7\u6C42",_oSelf._msTime]);
_oQMWebpush._ajax({sUrl:_oSelf._POLL,vData:{u:_oQMWebpush.uin(),s:_oSelf._mnOpenServices,k:_oSelf._msKey,t:_oSelf._msTime,i:_oSelf._ABORTTIME,r:Math.random()},nTimeout:(_oSelf._ABORTTIME+3)*1000,oAjaxInst:_oSelf._moLongConnectAjax,oncomplete:function(_abIsOk,_asParam,_aoXmlObj){
_oSelf._mbLongConnecting=false;
var _oJson=null,_nDelay=10;
if(_abIsOk)
{
try{
_oJson=eval(_asParam);
}
catch(e)
{
_oQMWebpush.debug(["poll\u8FD4\u56DEjson\u6709\u8BEF"]);
}
}
if(!_abIsOk&&_asParam=="timeout")
{
_oQMWebpush.debug([_asParam]);
_nDelay=0;
}
else if(_oJson)
{
_oQMWebpush.debug(["poll\u7684json",_oJson.e,_oJson.d]);
if(!_oJson.e)
{
_oSelf._analysePoll(_oJson);
_nDelay=0;
}
else if(_oJson.e==-100)
{
return _oSelf._getSKey();
}
else if(!isNaN(_oJson.d))
{
_nDelay=parseInt(_oJson.d);
}
}
_oQMWebpush.debug(["_nDelay",_nDelay]);
if(_nDelay>=0)
{
setTimeout(function(){
_oSelf._poll();
},_nDelay*1000);
}
}});
return _oSelf;
},_createProxy:function(){
var _oSelf=this;
if(!(_oSelf._moProxyWin&&_oSelf._mbCreatingProxy))
{
_oSelf._mbCreatingProxy=true;
_oQMWebpush._createIframe({id:"webpush"+(+new Date()),style:"position:absolute;z-index:-1;width:1px;height:1px;left:-5;top:-5px;",src:_oSelf._PROXY_URL,onload:function(){
_oSelf._mbCreatingProxy=false;
var _oProxyWin,_bSuccess;
try{
_oProxyWin=this.contentWindow;
_bSuccess=!!_oProxyWin.xmlHttp;
}
catch(_oError)
{
_oQMWebpush.debug([_oError.message]);
_bSuccess=0;
}
if(_bSuccess)
{
_oSelf._moProxyWin=_oProxyWin;
_oSelf._moLongConnectAjax=_oProxyWin.xmlHttp();
_oSelf._poll();
}
_oQMWebpush.debug(["createiframe",_bSuccess]);
}});
}
return _oSelf;
}};
_aoWin.QMWebpush=_oQMWebpush;
_oDebugcache=[];
_oQMWebpush.debug=function(_avData){
if(_aoWin.debug)
{
}
_oDebugcache.push([(new Date()).toLocaleString(),' : ',_avData.join?_avData.join(','):_avData].join(''));
};
_oQMWebpush.output=function(){
var _oDiv=document.createElement("div");
_oDiv.style.cssText="position:absolute;width:300px;height:400px;z-index:999;background:white;";
_oDiv.innerHTML=["<a href='javascript:void(0);' style='display:block;text-align:center;' onclick='document.body.removeChild(this.parentNode)'>\u9690\u85CF</a><div style='width:100%;height:100%'><textarea style='width:100%;height:100%'>",_oDebugcache.join('\n'),"</textarea></div>"].join('');
document.body.appendChild(_oDiv);
};
_oQMWebpush.debug(["QMWin",_aoWin.QMWin]);
})(window);
