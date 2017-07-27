(function(_aoWin,_aoUndefined){
if(_aoWin.ComposeLib)
{
return;
}
function _fGetTopQM(_avName,_aoTopFiles,_anWaitLoadTime)
{
var _oTop=getTop(),_fGet=typeof (_avName)=='function'?_avName:function(){
return _oTop[_avName];
};
var _nWait=_aoWin.setTimeout(function(){
_nWait=null;
_oTop.loadJsFileToTop(_aoTopFiles);
},_anWaitLoadTime||30*1000);
return function(_afCallback){
if(_nWait)
{
_aoWin.clearTimeout(_nWait);
_nWait=null;
}
_oTop.loadJsFileToTop(_aoTopFiles);
_oTop.waitFor(_fGet,function(_abOK){
if(_abOK)
{
_afCallback(true,_fGet());
}
else{
_afCallback(false);
}
});
};
}
var _gnMsgLen=140;
var _oComposeLib=_aoWin.ComposeLib={};
_oComposeLib.openDlg=function(_asMailType,_aoConfig){
var _oClsMap={"sms":_QMSmsCps,"note":_QMNoteCps,"group":_QMGrpCps,"normal":_QMNorCps,"card":_QMCardCps,"postcard":_QMPostCardCps};
var _oQMCps=_oClsMap[_asMailType];
if(_oQMCps)
{
_aoConfig=_aoConfig||{};
_aoConfig.sType=_asMailType;
_configHelp(_aoConfig,{bAddrEdit:true});
new _oQMCps(_aoConfig);
}
};
_oComposeLib.getAttachList=function(_aoList,_afCallback,_aoContainer){
var _fSelf=arguments.callee,_oArgs=arguments;
getTop().getAttachList(_aoList,function(_abRet,_aoData){
if(_abRet)
{
_afCallback(_aoData);
}
else{
_err();
}
});
function _err()
{
if(!_aoContainer)
{
getTop().showError("\u9644\u4EF6\u52A0\u8F7D\u5931\u8D25");
return;
}
else{
_aoContainer.innerHTML="";
}
var _oDoc=_aoContainer.ownerDocument,_oDom=_oDoc.createElement("div"),_oMsg=_oDoc.createElement("span"),_oLink=_oDoc.createElement("a");
_oMsg.innerHTML="\u9644\u4EF6\u52A0\u8F7D\u5931\u8D25\uFF0C";
_oLink.innerHTML="\u8BF7\u91CD\u8BD5";
_oLink.href="javascript:;";
_oLink.onclick=function(){
_aoContainer.innerHTML="\u6B63\u5728\u91CD\u8BD5...";
_fSelf.apply(_oComposeLib,_oArgs);
};
_oDom.appendChild(_oMsg);
_oDom.appendChild(_oLink);
_aoContainer.appendChild(_oDom);
}
};
_oComposeLib.send=function(_aoCpsData,_aoCpsConfig,_aoRuntimeCfg){
var _sType=(_aoCpsConfig&&_aoCpsConfig.sType)||"normal";
_oAjax=(new QMCpsSend(_configHelp(_aoCpsData,_CPS_DATA[_aoCpsConfig.oMailAttach?"attach":_sType]),_configHelp(_aoCpsConfig,_CPS_SEND_CFG[_sType]))).send(_aoRuntimeCfg);
_oComposeLib._moAjax=_oAjax;
};
_oComposeLib.abort=function(_aoUndefined){
if(_oComposeLib._moAjax)
{
try{
_oComposeLib._moAjax.abort();
}
catch(e)
{
debug(e);
}
_oComposeLib._moAjax=_aoUndefined;
}
};
_oComposeLib.getFormData=function(_aoForm){
var _oRegTextArea=/^(?:select|textarea)/i,_oRegInput=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,_oRegRadioCheck=/^(?:radio|checkbox)$/i,_oFormDatas=_aoForm.elements,_oResult={};
for(var i=0,l=_oFormDatas.length;i<l;i++)
{
var _oData=_oFormDatas[i],_sName=_oData.name,_sValue=_oData.value,_bText=_oData.checked;
if(_sName&&_sValue&&(_oRegRadioCheck.test(_oData.type)&&_oData.checked||_oRegTextArea.test(_oData.nodeName)||_oRegInput.test(_oData.type))&&_sName!="content_compare")
{
if(!_bText&&_sName=="contenttype")
{
_oData=_sName=_bText=undefined;
continue;
}
if(!_oResult[_sName])
{
_oResult[_sName]=_sValue;
}
else if(typeof (_oResult[_sName])=="object")
{
_oResult[_sName].push(_sValue);
}
else{
_oResult[_sName]=[_oResult[_sName],_sValue];
}
}
_oData=_sName=_bText=undefined;
}
return _oResult;
};
function _createForm(_aoConfig,_aoInputData)
{
var _sFormId=_aoConfig.sFormId||unikey(),_oForm=S(_sFormId,_aoConfig.oWin),_oInputs=[],_FORM_TMP=TE(['<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">','$@$for($oInputs$)$@$','<input name="$name$" type="hidden" value="$@$html($value$)$@$"/>','$@$endfor$@$','</form>']);
if(_oForm)
{
removeSelf(_oForm);
}
_aoInputData=_aoInputData||{};
_aoInputData.sid=_aoInputData.sid||getSid();
E(_aoInputData,function(_asItem,_asIdx){
_oInputs.push({name:_asIdx,value:_asItem});
});
_aoConfig.oInputs=_oInputs;
insertHTML(_aoConfig.oWin.document.body,"beforeEnd",_FORM_TMP.replace(extend({sFormId:_sFormId,sTarget:"actionFrame",sMethod:"POST"},_aoConfig)));
return S(_sFormId,_aoConfig.oWin);
}
function _configHelp(_aoConfig,_aoDfConfig,_abOverwrite)
{
_aoConfig=_aoConfig||{};
var _fPut=function(_aoParam){
for(var i in _aoParam)
{
if(_abOverwrite||typeof (_aoConfig[i])=="undefined"||_aoConfig[i]==null)
{
_aoConfig[i]=_aoParam[i];
}
}
};
if(isArr(_aoDfConfig))
{
for(var i=0;i<_aoDfConfig.length;i++)
{
_fPut(_aoDfConfig[i]);
}
}
else{
_fPut(_aoDfConfig);
}
return _aoConfig;
}
function _splashToCtrl(_avObj,_anTimes)
{
var _oCtrlObj=_avObj.style?_avObj:getTop().S(_avObj,window),_nTimes=0,_nMaxTimes=isNaN(_anTimes)?6:_anTimes;
(function(){
_oCtrlObj.style.backgroundColor=(_nTimes++%2==0)?"#f9f2b3":"#fff";
if(_nTimes<_nMaxTimes)
{
setTimeout(arguments.callee,100);
}
})();
}
var _CPS_DLG_CFG={normal:{sTitle:"\u53D1\u90AE\u4EF6",nHeight:"auto",nWidth:"auto"},sms:{sTitle:"\u53D1\u77ED\u6D88\u606F",nHeight:"auto",nWidth:"auto"},note:{sTitle:"\u5FEB\u6377\u5199\u8BB0\u4E8B",nHeight:"auto",nWidth:"auto"},group:{sTitle:"QQ\u7FA4\u90AE\u4EF6",nHeight:"auto",nWidth:"auto"},card:{sTitle:"\u53D1\u8D3A\u5361",nHeight:"auto",nWidth:"auto"},postcard:{sTitle:"\u53D1\u660E\u4FE1\u7247",nHeight:"auto",nWidth:"auto"}},_CPS_SEND_CFG={normal:{sSendingDesc:"\u90AE\u4EF6\u6B63\u5728\u53D1\u9001\u4E2D...",sFailDesc:"\u90AE\u4EF6\u53D1\u9001\u5931\u8D25",sSuccessDesc:"\u53D1\u9001\u6210\u529F",sCgiPath:"/cgi-bin/compose_send"},sms:{sSendingDesc:"\u6B63\u5728\u53D1\u9001\u77ED\u6D88\u606F...",sFailDesc:"\u77ED\u6D88\u606F\u53D1\u9001\u5931\u8D25",sSuccessDesc:"\u77ED\u6D88\u606F\u5DF2\u6210\u529F\u53D1\u9001\u3002<br><a href='javascript:;' id='goSmsLink'>\u70B9\u51FB\u8FD9\u91CC\u67E5\u770B</a>",sCgiPath:"/cgi-bin/compose_send"},group:{sSendingDesc:"\u90AE\u4EF6\u6B63\u5728\u53D1\u9001\u4E2D...",sFailDesc:"\u90AE\u4EF6\u53D1\u9001\u5931\u8D25",sSuccessDesc:"\u53D1\u9001\u6210\u529F",sCgiPath:"/cgi-bin/groupmail_send"},note:{sSendingDesc:"\u4FDD\u5B58\u8BB0\u4E8B\u4E2D...",sFailDesc:"\u8BB0\u4E8B\u4FDD\u5B58\u5931\u8D25",sSuccessDesc:"\u8BB0\u4E8B\u5DF2\u4FDD\u5B58",sCgiPath:"/cgi-bin/note_edit"},card:{sSendingDesc:"\u8D3A\u5361\u6B63\u5728\u53D1\u9001\u4E2D...",sFailDesc:"\u8D3A\u5361\u53D1\u9001\u5931\u8D25",sSuccessDesc:"\u53D1\u9001\u6210\u529F",sCgiPath:"/cgi-bin/compose_send"},postcard:{sSendingDesc:"\u660E\u4FE1\u7247\u6B63\u5728\u53D1\u9001\u4E2D...",sFailDesc:"\u660E\u4FE1\u7247\u53D1\u9001\u5931\u8D25",sSuccessDesc:"\u53D1\u9001\u6210\u529F",sCgiPath:"/cgi-bin/compose_send"}},_CPS_DATA={nil:{actiontype:"send"},attach:{actiontype:"send",s:"comm",from:"attachfolder",from_s:"forward",ReAndFw:"forward",savesendbox:"1"},normal:{actiontype:"send",separatedcopy:"false",selfdefinestation:"-1",savesendbox:"1",domaincheck:"0"},sms:{t:"sms_mgr.json",s:"send",subject:"\u77ED\u6D88\u606F",savesendbox:"1",mailtype:"5",smstype:1},note:{t:"compose.json",catid:"0",actiontype:"send"},group:{t:"compose.json"},card:{actiontype:"send",separatedcopy:"false",selfdefinestation:"-1",savesendbox:"1",domaincheck:"0"},postcard:{actiontype:"send",separatedcopy:"false",selfdefinestation:"-1",savesendbox:"1",domaincheck:"0"}},_CPS_ERR={_TO:"\u8BF7\u586B\u5199\u6536\u4EF6\u4EBA\u540E\u518D\u53D1\u9001",_SUBJECT:['<div class="dialog_f_t">\u60A8\u7684\u90AE\u4EF6\u6CA1\u6709\u586B\u5199\u4E3B\u9898\u3002</div>','<div class="dialog_f_d" style="font-size:14px;">\u60A8\u786E\u5B9A\u7EE7\u7EED\u53D1\u9001\uFF1F</div>'].join(""),_GROUP_LIST:"\u52A0\u8F7DQQ\u7FA4\u5931\u8D25\uFF0C\u8BF7\u7A0D\u5019\u91CD\u8BD5",_GRP_TO:"\u8BF7\u9009\u62E9\u4E00\u4E2AQQ\u7FA4",_NO_GROUP:"\u52A0\u8F7DQQ\u7FA4\u5931\u8D25\uFF0C\u8BF7\u7A0D\u5019\u91CD\u8BD5"},_ATT_LIST_URL=T("/cgi-bin/readmail?sid=$sid$&t=$t$&s=forward&from=attachfolder&disptype=html"),_NOR_LIST_URL=T('/cgi-bin/readtemplate?sid=$sid$&t=compose&disptype=html'),_GRP_LIST_URL=T("/cgi-bin/grouplist?sid=$sid$&t=compose.json&s=grouplist"),_SMS_LIST_URL=T("/cgi-bin/readtemplate?sid=$sid$&t=sms_list_v2#$hash$"),_TMPL_UI=T(['<span over="\u5DF2\u8D85\u51FA " default="\u8FD8\u53EF\u4EE5\u8F93\u5165 "></span><span style="font-family:Georgia;font-size:14px;font-weight:bold;"></span> \u5B57']);
_CPS_SEND_CFG.nil=_CPS_SEND_CFG.normal;
_CPS_DLG_CFG.nil=_CPS_DLG_CFG.normal;
var _QMBaseCps=inherit("_QMBaseCps",Object,function(_aoSuper){
return {$_constructor_:function(_aoConfig){
this._init(_aoConfig);
},_S:function(_asDomId){
var _oDlg=this._moCpsBox;
return _oDlg&&_oDlg.S(_asDomId);
},_getBoxWin:function(){
return this._moCpsBox.getDialogWin();
},_disableBtn:function(_asBtnId,_abDisable){
var _oBtn=this._S(_asBtnId);
_oBtn&&(_oBtn.disabled=_abDisable);
return this;
},_init:function(_aoConfig){
var _oSelf=this;
_oSelf._initMemVar(_aoConfig);
_oSelf._buildCpsBox(_aoConfig);
},_initMemVar:function(_aoConfig){
var _oSelf=this,_sType=_aoConfig.sType;
_configHelp(_aoConfig,_CPS_DLG_CFG[_sType]);
_oSelf._moConfig=_aoConfig;
_oSelf._moCpsData=extend({},_CPS_DATA[_aoConfig.oMailAttach?"attach":_sType]);
if(_aoConfig.sTitle==="\u77ED\u6D88\u606F")
{
_oSelf._moCpsConfig=extend({},_aoConfig,_CPS_SEND_CFG[_sType]);
}
else{
_oSelf._moCpsConfig=extend({},_CPS_SEND_CFG[_sType]);
}
_oSelf._moAddrInput;
_oSelf._moEditor;
_oSelf._moWordCntCtrl;
_oSelf._moCheckers=[];
},_boxOnLoad:function(){
var _oSelf=this;
_oSelf._initBtnEvent();
_oSelf._initContentEdit();
_oSelf._initAddrInput();
_oSelf._initSubjectInput();
_oSelf._initWordCnt();
_oSelf._initAttachList();
_oSelf._initOnlineDocAttachList();
},_buildCpsBox:function(_aoConfig){
var _oSelf=this;
new QMDialog({sId:_aoConfig.sType+"ComposeDlg",sTitle:_aoConfig.sTitle,nWidth:_aoConfig.nWidth,nHeight:_aoConfig.nHeight,sBodyHtml:_oSelf._getBodyHtml(),onload:function(){
_oSelf._moCpsBox=this;
_oSelf._boxOnLoad(this);
},onbeforeclose:function(){
(_oSelf._moEditor||_oSelf._S("content")).focus();
return true;
},onshow:function(){
var _nY=this.option("nY");
if(_nY<70)
{
this.option("nY",70);
}
_oSelf._boxOnShow(this);
_oSelf._initCopyBtn&&_oSelf._initCopyBtn(this);
}});
},_doSend:function(){
var _oSelf=this;
_oSelf._cpsData();
_oSelf._cpsConfig();
_oSelf._moCheckers=_oSelf._getCheckers();
_oSelf._checkNext();
},_boxOnShow:function(){
var _oSelf=this,_oAddrInput=_oSelf._moAddrInput;
if(_oAddrInput&&!_oAddrInput.get().length)
{
_oAddrInput.focus();
}
else{
_oSelf._getContentEdit().focus();
}
},_initWordCnt:function(){
},_subCheck:function(_asItem){
var _oSelf=this,_bOK,_oCpsData=_oSelf._moCpsData,_oCpsConfig=_oSelf._moCpsConfig;
switch(_asItem)
{case "to":
_bOK=_oCpsData.to!="";
if(!_bOK)
{
showError(_CPS_ERR._TO);
if(_oSelf._moAddrInput)
{
_splashToCtrl(_oSelf._S("toAddrArea"));
_oSelf._moAddrInput.focus();
}
}
break;
case "subject":
_bOK=_oCpsData.subject!="";
break;
case "wordcnt":
break;
}return _bOK;
},_checkNext:function(){
var _oSelf=this,_oChecker=_oSelf._moCheckers.shift();
if(!_oChecker)
{
(new QMCpsSend(_oSelf._moCpsData,_oSelf._moCpsConfig)).send();
}
else{
var _bRe=callBack.call(_oSelf,_oChecker);
if(_bRe)
{
return _oSelf._checkNext();
}
else{
}
}
},_getCheckers:function(){
return [];
},_initContentEdit:function(){
var _oSelf=this;
(_oSelf._moEditor=QMEditor.createEditor({editorId:"ComposeDlg",editorAreaWin:_oSelf._getBoxWin(),editorAreaObj:_oSelf._S("QMEditorArea"),funclist:QMEditor.CONST.FUNCLIST.COMPOSE,onkeydown:function(_aoEvent){
_oSelf._keyDown(_aoEvent);
}})).initialize(_oSelf._moConfig.sDefContent,false,3);
},_keyDown:function(_aoEvent){
var _oSelf=this;
_bCtrl=_aoEvent.ctrlKey,_bAlt=_aoEvent.altKey,_sKeyCode=_aoEvent.keyCode;
if(_bCtrl&&_sKeyCode==13||_bAlt&&_sKeyCode==83)
{
fireMouseEvent(_oSelf._S("sendBtn"),"click");
}
},_initBtnEvent:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_sType=_oConfig.sType;
_oSelf._S("sendBtn").onclick=function(){
_oSelf._doSend();
};
_oSelf._S("cancelBtn").onclick=function(){
_oSelf._moCpsBox.close();
};
addEvent(_oSelf._moCpsBox.getPanelDom(),"keydown",function(_aoEvent){
_oSelf._keyDown(_aoEvent);
});
var _oJump=_oSelf._S("jumpToNewWin");
_oJump&&(_oJump.onclick=function(){
_oSelf._initJump();
});
},_initAttachList:function(){
},_initOnlineDocAttachList:function(){
},_initJump:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oAttachs=_oConfig.oMailAttach||[],_oEditor=_oSelf._moEditor,_sValue=_oEditor?_oEditor.getContent():"",_oTop=getTop(),_oWin=_oSelf._moWin,_sUrl;
if(_oConfig.oOnlineDocAttachs&&_oConfig.oOnlineDocAttachs.length>0)
{
_sUrl=["/cgi-bin/docedit_read?t=compose&func=compose&sid=",_oTop.getSid()].join("");
if(_oTop.bnewwin)
{
_sUrl+="&newwin=true";
}
_oTop.E(_oConfig.oOnlineDocAttachs,function(_aoItem){
_sUrl+="&key="+_aoItem.id;
});
}
else{
_sUrl=(_oConfig.oMailAttach?_ATT_LIST_URL:_NOR_LIST_URL).replace({sid:getSid(),t:"compose",s:"forward",from:"attachfolder",disptype:"html"});
_oTop.E(_oAttachs,function(_aoItem){
_sUrl+='&mailattach='+_oTop.encodeURI([_aoItem.mailid,_aoItem.attachid,'',_aoItem.fileextenal,_aoItem.filebyte].join('|')+(_aoItem.editname?'|'+_aoItem.editname:''));
});
}
_oSelf._moCpsBox.close();
_createForm({oWin:getMainWin(),sTarget:"_self",sAction:_sUrl},{initsubject:_oSelf._S("subject").value,initaddress:_oSelf._moAddrInput.get().join(";"),pluscontent:_sValue}).submit();
},_initAddrInput:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig;
if(_oConfig.bAddrEdit)
{
var _sUrlCreator="urlcreator@qq.com",_sQzone=[getTop().getUin(),"@qzone.qq.com"].join("");
_oSelf._moAddrInput=_oAddrInput=new QMAddrInput({id:"to",win:_oSelf._getBoxWin(),dom:{container:_oSelf._S("toAddrArea")},tabIndex:1,dispMode:"onlynick",isEnableTip:false,maxItemView:10,onchange:function(_asType){
var _oTop=getTop(),_oDlg=_oSelf._moCpsBox,_oInput=_oSelf._moAddrInput,_oAddrUC=_oDlg.S("addrUrlCreator"),_bHasUC=_oInput.hasAddr(_sUrlCreator),_bUCShow=_oTop.isShow(_oAddrUC),_oAddrQZ=_oDlg.S("addrQzone"),_bHasQZ=_oInput.hasAddr(_sQzone),_bQZShow=_oTop.isShow(_oAddrQZ),_bToAdd=false,_bToDel=false,_oDomAddrAdd,_oDomAddrDel,_sAddr;
if(_bHasUC&&!_bUCShow)
{
_bToAdd=true;
_sAddr=_sUrlCreator;
_oDomAddrAdd=_oAddrUC;
}
else if(_bHasQZ&&!_bQZShow)
{
_bToAdd=true;
_sAddr=_sQzone;
_oDomAddrAdd=_oAddrQZ;
}
if(!_bHasUC&&_bUCShow)
{
_bToDel=true;
_oDomAddrDel=_oAddrUC;
}
else if(!_bHasQZ&&_bQZShow)
{
_bToDel=true;
_oDomAddrDel=_oAddrQZ;
}
if(_bToAdd)
{
_oTop.show(_oDomAddrAdd,true);
_oTop.show(_oDlg.S("toAddrArea"),false);
_oInput.del(_sAddr,true);
_oInput.storeAndClear();
_oInput.add(_sAddr,true);
}
else if(_bToDel)
{
_oTop.show(_oDomAddrDel,false);
_oTop.show(_oDlg.S("toAddrArea"),true);
_oInput.restore();
}
}});
_oAddrInput.add(_oConfig.sDefAddrs);
getTop().addEvent(_oSelf._moCpsBox.S("btnRmUrlCreator"),"click",function(){
_oAddrInput.del(_sUrlCreator);
_oAddrInput.focus("end");
});
getTop().addEvent(_oSelf._moCpsBox.S("btnRmQzone"),"click",function(){
_oAddrInput.del(_sQzone);
_oAddrInput.focus("end");
});
}
},_initSubjectInput:function(){
var _oSelf=this;
if(_oSelf._S("subject"))
{
_oSelf._S("subject").value=_oSelf._moConfig.sDefSubject||"";
}
;
},_cpsSendOK:function(_avParam){
alertBox({msg:this._moCpsConfig.sSuccessDesc});
},_cpsLoc:function(){
},_cpsConfig:function(){
var _oSelf=this;
extend(_oSelf._moCpsConfig,_oSelf._cpsLoc(),{onready:function(){
_oSelf._disableBtns(true);
},oncomplete:function(_abIsOk,_avParam){
if(_abIsOk)
{
_oSelf._moCpsBox.close(true);
_oSelf._cpsSendOK(_avParam);
callBack(_oSelf._moConfig.oncomplete,[_abIsOk]);
}
else{
_oSelf._disableBtns(false);
_oSelf._getContentEdit().focus();
}
}});
},_disableBtns:function(_abDisable){
this._disableBtn("sendBtn",_abDisable)._disableBtn("saveBtn",_abDisable);
},_getContentEdit:function(){
var _oSelf=this;
return _oSelf._moEditor||_oSelf._S("content");
},_getBodyHtml:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig;
return _oSelf.constructor._TEMPLATE._DLG.replace({addredit:_oConfig.bAddrEdit,addrs:QMAddrParser.parseAddr(_oConfig.sDefAddrs),sCopy2shareUrl:_oConfig.sCopy2shareUrl});
},_cpsData:function(){
}};
},{});
var _QMNorCps=inherit("_QMNorCps",_QMBaseCps,function(_aoSuper){
return ({_cpsLoc:function(){
return {nLocId:100};
},_initAttachList:function(){
if(!this._moConfig.oMailAttach)
{
return;
}
var _oSelf=this,_oConfig=_oSelf._moConfig,_oAttachCon=_oSelf._S("attachArea"),_oAttachList=_oSelf._S("attachList");
_oAttachCon.style.display="";
_oComposeLib.getAttachList(_oConfig.oMailAttach,function(_aoData){
var _oData=_aoData,_oAttachIds=[],_oAttachs=_oData.attach,_oForward=_oData.forward;
_oAttachList.innerHTML=_oSelf.constructor._TEMPLATE._ATTACHLIST.replace({list:_oAttachs});
for(var i=0;i<_oAttachs.length;i++)
{
_oAttachIds.push(_oAttachs[i].name);
extend(_oSelf._moCpsData,{mailattach:[_oAttachs[i].mailid,_oAttachs[i].mailid.indexOf("@")==0?_oAttachs[i].attid:_oAttachs[i].symname,_oAttachs[i].name].join("|")});
}
extend(_oSelf._moCpsData,{ReAndFwMailid:_oForward,fattachlist:_oAttachIds.join("|")});
},_oAttachList);
},_initOnlineDocAttachList:function(){
if(!this._moConfig.oOnlineDocAttachs)
{
return;
}
var _oSelf=this,_oOnlineDocAttachs=_oSelf._moConfig.oOnlineDocAttachs,_oConfig=_oSelf._moConfig,_oAttachCon=_oSelf._S("attachArea"),_oAttachList=_oSelf._S("attachList");
_oAttachCon.style.display="";
_oAttachList.innerHTML=_oSelf.constructor._TEMPLATE._ATTACHLIST.replace({list:_oOnlineDocAttachs});
var _oAttachIds=[];
for(var i=0;i<_oOnlineDocAttachs.length;i++)
{
_oAttachIds.push(_oOnlineDocAttachs[i].id);
}
extend(_oSelf._moCpsData,{dockey:_oAttachIds.join("|")});
},_initCopyBtn:function(_aoDialog){
var _oSelf=this,_oTop=getTop(),_oCopyBtn=_aoDialog.S('btn_copy2share'),_oCopyTextarea=_aoDialog.S('textarea_copy'),_nTimeoutIndex;
if(!_oCopyBtn)
{
return;
}
_oCopyBtn.parentNode.onclick=function(){
_nTimeoutIndex&&clearTimeout(_nTimeoutIndex);
_oCopyTextarea.select();
_oCopyTextarea.setSelectionRange(0,_oCopyTextarea.value.length);
_oTop.document.execCommand('copy');
_oTop.show(_aoDialog.S('span_copySuc'),true);
_nTimeoutIndex=setTimeout(function(){
_oTop.show(_aoDialog.S('span_copySuc'),false);
},2000);
};
},_cpsData:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oCpsData=_oSelf._moCpsData;
extend(_oCpsData,{sendmailname:getUserInfoText("addr"),to:_oConfig.bAddrEdit?_oSelf._moAddrInput.get().join(";"):_oConfig.sDefAddrs,subject:_oSelf._S("subject").value,content__html:_oSelf._moEditor.getContent()});
if(_oConfig.bUinEncrypt)
{
_oCpsData.ue=1;
}
},_getCheckers:function(){
var _oSelf=this;
return [function(){
return _oSelf._subCheck("to");
},function(){
if(!_oSelf._subCheck("subject"))
{
confirmBox({msg:_CPS_ERR._SUBJECT,width:430,onreturn:function(_aIsOk){
if(_aIsOk)
{
_oSelf._checkNext();
}
}});
return false;
}
return true;
}];
}});
},{_TEMPLATE:{_DLG:TE(['<div style="*width:466px;text-align:left; padding:10px 15px 10px 10px;">','<div style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div style="float:right;margin:0;" id="jumpToNewWin">','<input type="button" class="ico_input icon_switch_compose" style="margin-right:4px;margin-bottom:3px;vertical-align:middle;">','<a href="javascript:;">\u5207\u6362\u5230\u5B8C\u6574\u5199\u4FE1\u6A21\u5F0F</a>','</div>','<div class="clr"></div>','</div>','<div style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:24px;line-height:24px;">\u6536\u4EF6\u4EBA\uFF1A</div>','$@$if($addredit$)$@$','<div id="toAddrArea" class="noime div_txt f_size" style="line-height:16px;margin-left:60px;width:399px;"></div>','<div id="addrUrlCreator" style="display:none;" class="attbg bd urlcreator_to"><span class="ico_urlcreator"></span>\u7F51\u9875\u751F\u6210\u52A9\u624B<a class="ico_close_mini" id="btnRmUrlCreator"></a></div>','<div id="addrQzone" style="display:none;" class="attbg bd urlcreator_to"><span class="ico_addrqzone"></span>\u53D1\u8868\u5230\u6211\u7684Qzone<a class="ico_close_mini" id="btnRmQzone"></a></div>','$@$else$@$','<div class="noime div_txt f_size settingtable graytext" style="line-height:16px;margin-left:60px;width:399px;">','$@$for($addrs$)$@$$@$eval htmlEncode($nick$)$@$; $@$endfor$@$','</div>','$@$endif$@$','<div class="clr"></div>','</div>','<div id="subjectArea" style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">\u4E3B\u9898\uFF1A</div>','<div style="margin-left:60px;"><input id="subject" class="txt" type="text" style="width:399px;height:25px;line-height:25px;" tabindex="2"/></div>','<div class="clr"></div>','</div>','<div id="attachArea" style="margin:0 0 5px; overflow:hidden; zoom:1;display:none">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">\u9644\u4EF6\uFF1A</div>','<div id="attachList" style="float:left;line-height:25px;width:400px;overflow:hidden;white-space:nowrap;">','<span>\u9644\u4EF6\u52A0\u8F7D\u4E2D...</span>','</div>','<div class="clr"></div>','</div>','<div style="margin:0 0 5px;zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:24px;line-height:24px;">\u6B63\u6587\uFF1A</div>','<div style="margin-left:60px;"><div id="QMEditorArea" style="height:150px;" ></div></div>','<div class="clr"></div>','</div>','<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">','<a class="btn_blue btn_space" tabindex="4" id="sendBtn">\u53D1\u9001</a>','<a class="btn_gray" tabindex="5" id="cancelBtn">\u53D6\u6D88</a>','</div>','$@$if($sCopy2shareUrl$)$@$','<div style="overflow:hidden; zoom:1;padding:20px 8px 21px 60px;text-align:left;">','<a href="javascript:;" initlized="true">','<span id="btn_copy2share">\u590D\u5236\u94FE\u63A5\u9080\u8BF7\u7F16\u8F91</span>','</a>','<span id="span_copySuc" style="margin-left:10px;color: #9e9b9b;display:none"><input class="ico_editDoc_Done" style="margin-right: 2px;" />\u5DF2\u590D\u5236</span>','<textarea id="textarea_copy" readonly style="padding:0px;margin:0px;position:absolute;border:0px;left:-9999px;">$sCopy2shareUrl$</textarea>','</div>','$@$endif$@$','</div>']),_ATTACHLIST:TE(['$@$if($list.length$>5)$@$','<div style="height:125px;overflow:auto;">','$@$for($list$)$@$','<div aid="$id$" style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">','<input type="button" ','$@$if($attachtype$=="onlinedoc")$@$','class="ico_editDoc_Small" style="vertical-align:text-bottom;margin:0 5px 1px 0;*margin-bottom:-1px;" ','$@$else$@$','class="ico_att" style="margin:0 3px 2px 0" ','$@$endif$@$','tabindex="-1">','<span>$@$html($name$)$@$</span> ($@$if($newname$)$@$$newname$ $@$endif$@$<span byte="$byte$" class="addrtitle">$size$</span>)','</div>','$@$endfor$@$','</div>','$@$else$@$','$@$for($list$)$@$','$@$if($_idx_$<=5)$@$','<div aid="$id$" style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">','<input type="button" ','$@$if($attachtype$=="onlinedoc")$@$','class="ico_editDoc_Small" style="vertical-align:text-bottom;margin:0 5px 1px 0;*margin-bottom:-1px;" ','$@$else$@$','class="ico_att" style="margin:0 3px 2px 0" ','$@$endif$@$','tabindex="-1">','<span>$@$html($name$)$@$</span>&nbsp;<span class="addrtitle">($@$if($newname$)$@$$newname$ $@$endif$@$<span byte="$byte$">$size$</span>)</span>','</div>','$@$endif$@$','$@$endfor$@$','$@$endif$@$'])}});
var _QMCardCps=inherit("_QMCardCps",_QMBaseCps,function(_aoSuper){
return ({_cpsLoc:function(){
return {nLocId:500};
},_cpsData:function(){
var _oSelf=this,_oCpsData=_oSelf._moCpsData;
extend(_oCpsData,{sendmailname:getUserInfoText("addr"),to:_oSelf._moAddrInput.get().join(";"),subject:_oSelf._S("subject").value,content__html:_oSelf._moEditor.getContent()});
},_cpsSendOK:function(_avParam){
var _oSelf=this,_sSuccessDesc=_oSelf._moCpsConfig.sSuccessDesc;
if(_oSelf._moConfig.bShowResult)
{
showInfo("\u7B54\u8C22\u53D1\u9001\u6210\u529F");
}
else{
alertBox({msg:_sSuccessDesc});
}
},_getCheckers:function(){
var _oSelf=this;
return [function(){
return _oSelf._subCheck("to");
}];
}});
},{_TEMPLATE:{_DLG:TE(['<div style="text-align:left; padding:20px 15px 10px 10px;">','<div style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:24px;line-height:24px;">\u56DE\u590D\u597D\u53CB</div>','<div id="toAddrArea" class="noime div_txt f_size" style="line-height:16px;margin-left:60px;width:399px;"></div>','<div class="clr"></div>','</div>','<div id="subjectArea" style="margin:0 0 5px; overflow:hidden; zoom:1;display:none">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">\u4E3B\u9898\uFF1A</div>','<div style="margin-left:60px;"><input id="subject" class="txt" type="text" style="width:399px;height:25px;line-height:25px;" tabindex="2"/></div>','<div class="clr"></div>','</div>','<div style="margin:0 0 5px;zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:24px;line-height:24px;">\u795D\u798F\u8BED\uFF1A</div>','<div style="margin-left:60px;"><div id="QMEditorArea" style="height:250px;*width:403px;" ></div></div>','<div class="clr"></div>','</div>','<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">','<div class="greenbutton left" style="width:50px;"><input type="button" value="\u53D1\u9001" style="width: 50px;" class="" id="sendBtn" tabindex="4"></div>','<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;" tabindex="5">\u53D6\u6D88</a>','</div>','</div>'])}});
var _QMPostCardCps=inherit("_QMPostCardCps",_QMBaseCps,function(_aoSuper){
return ({_cpsLoc:function(){
return {nLocId:500};
},_cpsData:function(){
var _oSelf=this,_oCpsData=_oSelf._moCpsData;
extend(_oCpsData,{sendmailname:getUserInfoText("addr"),to:_oSelf._moAddrInput.get().join(";"),subject:_oSelf._S("subject").value,content__html:_oSelf._moEditor.getContent()});
},_cpsSendOK:function(_avParam){
var _oSelf=this,_sSuccessDesc=_oSelf._moCpsConfig.sSuccessDesc;
if(_oSelf._moConfig.bShowResult)
{
showInfo("\u7B54\u8C22\u53D1\u9001\u6210\u529F");
}
else{
alertBox({msg:_sSuccessDesc});
}
},_getCheckers:function(){
var _oSelf=this;
return [function(){
return _oSelf._subCheck("to");
}];
}});
},{_TEMPLATE:{_DLG:TE(['<div style="text-align:left; padding:20px 15px 10px 10px;">','<div style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:24px;line-height:24px;">\u56DE\u590D\u597D\u53CB</div>','<div id="toAddrArea" class="noime div_txt f_size" style="line-height:16px;margin-left:60px;width:399px;"></div>','<div class="clr"></div>','</div>','<div id="subjectArea" style="margin:0 0 5px; overflow:hidden; zoom:1;display:none">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">\u4E3B\u9898\uFF1A</div>','<div style="margin-left:60px;"><input id="subject" class="txt" type="text" style="width:399px;height:25px;line-height:25px;" tabindex="2"/></div>','<div class="clr"></div>','</div>','<div style="margin:0 0 5px;zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:24px;line-height:24px;">\u795D\u798F\u8BED\uFF1A</div>','<div style="margin-left:60px;"><div id="QMEditorArea" style="height:250px;*width:403px;" ></div></div>','<div class="clr"></div>','</div>','<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">','<div class="greenbutton left" style="width:50px;"><input type="button" value="\u53D1\u9001" style="width: 50px;" class="" id="sendBtn" tabindex="4"></div>','<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;" tabindex="5">\u53D6\u6D88</a>','</div>','</div>'])}});
var _QMSmsCps=inherit("_QMSmsCps",_QMBaseCps,function(_aoSuper){
return ({_initWordCnt:function(){
var _oSelf=this;
_oSelf._moWordCntCtrl=new _oQMWordCntCtrl({oText:_oSelf._S("content"),oDisper:_oSelf._S("wordCnt")});
},_initContentEdit:function(){
var _oSelf=this,_oContent=_oSelf._S("content");
_oContent.value=_oSelf._moConfig.sDefContent||"";
addEvent(_oContent,"keydown",function(_aoEvent){
_oSelf._keyDown(_aoEvent);
});
},_keyDown:function(_aoEvent){
callBack.call(this,_aoSuper._keyDown,[_aoEvent]);
if(_aoEvent.keyCode==13)
{
preventDefault(_aoEvent);
}
},_cpsLoc:function(){
return {nLocId:_gnMsgLen};
},_cpsData:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oCpsData=_oSelf._moCpsData;
extend(_oCpsData,{to:_oConfig.bAddrEdit?_oSelf._moAddrInput.get().join(";"):_oConfig.sDefAddrs,content:_oSelf._S("content").value});
if(_oConfig.bUinEncrypt)
{
_oCpsData.ue=1;
}
},_flat:function(_afCustomHandler){
var _oData=this._moCpsData,_oArray=[];
for(var _sName in _oData)
{
_oArray.push([_sName,_afCustomHandler?_afCustomHandler(_oData[_sName]):encodeURI(_oData[_sName])].join("="));
}
return _oArray.join("&");
},_cpsSendOK:function(_avParam){
alertBox({msg:this._moCpsConfig.sSuccessDesc,onload:function(){
var _oDlg=this;
_oDlg.S("goSmsLink").onclick=function(){
_oDlg.close();
};
},onreturn:function(){
var _oData=eval(_avParam),_oItem=_oData.content&&_oData.content.itms&&_oData.content.itms[0]||{},_sTid=_oItem.inf.tid||_oItem.inf.id,_sHash=_sTid?("mail,"+_sTid):"inbox";
goUrlMainFrm(_SMS_LIST_URL.replace({sid:getSid(),hash:_sHash}),true);
}});
},_getCheckers:function(){
var _oSelf=this;
return [function(){
return _oSelf._subCheck("to");
},function(){
var _oWordCntCtrl=_oSelf._moWordCntCtrl;
if(_oWordCntCtrl.isOverLimit())
{
showError("\u6700\u591A\u8F93\u5165"+_oWordCntCtrl.getLimit()+"\u4E2A\u5B57\u7B26");
_oSelf._S("content").focus();
return false;
}
else{
return true;
}
}];
}});
},{_TEMPLATE:{_DLG:TE(['<div style="text-align:left; padding:20px 15px 15px 10px;*width:466px;">','<div style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:24px;line-height:24px;">\u6536\u4EF6\u4EBA\uFF1A</div>','$@$if($addredit$)$@$','<div id="toAddrArea" class="noime div_txt f_size" style="line-height:16px;margin-left:60px;width:399px;"></div>','$@$else$@$','<div class="noime div_txt f_size settingtable graytext" style="line-height:16px;margin-left:60px;width:399px;">','$@$for($addrs$)$@$$@$eval htmlEncode($nick$)$@$; $@$endfor$@$','</div>','$@$endif$@$','<div class="clr"></div>','</div>','<div style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">\u5185\u5BB9\uFF1A</div>','<div style="margin-left:60px;"><textarea id="content" class="txt" style="width:395px; overflow:auto; height:80px;"></textarea></div>','<div class="clr"></div>','</div>','<div id="wordCnt" style="margin:5px 0 5px 60px;margin-left:60px;float:right;" class="graytext"></div>','<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">','<div class="greenbutton left" style="width:50px;"><input type="button" value="\u53D1\u9001" style="width: 50px;" class="" id="sendBtn" tabindex="2"></div>','<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;" tabindex="3">\u53D6\u6D88</a>','</div>','</div>'])}});
var _QMGrpCps=inherit("_QMGrpCps",_QMBaseCps,function(_aoSuper){
return ({_initGroupMenu:function(_aoGroupList){
var _oSelf=this,_oDomToArea=_oSelf._S("toAddrArea");
_oSelf._moGroupList=_aoGroupList;
if(_aoGroupList.oItems.length==1)
{
_oDomToArea.innerHTML=_CPS_ERR._NO_GROUP;
}
else{
_oDomToArea.innerHTML="";
new QMSelect({oContainer:_oDomToArea,nWidth:_oDomToArea.clientWidth||_oDomToArea.offsetWidth||401,oMenu:_aoGroupList,sStyle:"float:none;padding:0;border-width:0;padding-left:-3px;",onselect:function(_aoItem){
_oSelf._moCpsData.qqgroupid=_aoItem.sId;
_oSelf._moCpsData.groupname=_aoItem.sItemValue;
}});
}
},_initAddrInput:function(){
var _oSelf=this;
QMAjax.send(_GRP_LIST_URL.replace({sid:getSid()}),{method:"GET",onload:function(_abIsOk,_avParam){
if(_abIsOk)
{
if(_avParam.indexOf("oItems")!=-1)
{
var _oJson=eval(_avParam);
_oJson&&_oSelf._initGroupMenu(_oJson);
return;
}
}
_oSelf._S("toAddrArea").innerHTML=_CPS_ERR._GROUP_LIST;
}});
},_cpsLoc:function(){
return {nLocId:300};
},_cpsData:function(){
var _oSelf=this,_oCpsData=_oSelf._moCpsData;
extend(_oCpsData,{subject:_oSelf._S("subject").value,content__html:_oSelf._moEditor.getContent()});
},_getCheckers:function(){
var _oSelf=this;
return [function(){
if(_oSelf._moGroupList)
{
return true;
}
showError(_CPS_ERR._GROUP_LIST);
return false;
},function(){
var _sGid=_oSelf._moCpsData.qqgroupid;
if(_sGid=="null"||!_sGid)
{
showError(_CPS_ERR._GRP_TO);
return false;
}
return true;
},function(){
if(!_oSelf._subCheck("subject"))
{
confirmBox({msg:_CPS_ERR._SUBJECT,width:430,onreturn:function(_aIsOk){
if(_aIsOk)
{
_oSelf._checkNext();
}
}});
return false;
}
return true;
}];
}});
},{_TEMPLATE:{_DLG:TE(['<div style="text-align:left; padding:20px 15px 15px 10px;">','<div style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:25px;line-height:25px;">QQ\u7FA4\uFF1A</div>','<div id="toAddrArea" class="noime div_txt f_size" style="padding-left:0px;padding-right:0px;line-height:16px;margin-left:60px;width:399px;width:401px\\9;">\u6B63\u5728\u83B7\u53D6QQ\u7FA4...</div>','<div class="clr"></div>','</div>','<div id="subjectArea" style="margin:0 0 5px; overflow:hidden; zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">\u4E3B\u9898\uFF1A</div>','<div style="margin-left:60px;"><input id="subject" class="txt" type="text" style="width:400px;height:25px;line-height:25px;"  tabindex="2"/></div>','<div class="clr"></div>','</div>','<div style="margin:0 0 5px;zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">\u6B63\u6587\uFF1A</div>','<div style="margin-left:60px;"><div id="QMEditorArea" style="height:250px;" ></div></div>','<div class="clr"></div>','</div>','<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">','<div class="greenbutton left" style="width:50px;"><input type="button" value="\u53D1\u9001" style="width: 50px;" class="" id="sendBtn" tabindex="3"></div>','<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;"  tabindex="4">\u53D6\u6D88</a>','</div>','</div>'])}});
var _QMNoteCps=inherit("_QMNoteCps",_QMBaseCps,function(_aoSuper){
return ({_initAddrInput:function(){
},_cpsLoc:function(){
return {nLocId:400};
},_cpsData:function(){
var _oSelf=this,_oCpsData=_oSelf._moCpsData;
extend(_oCpsData,{content__html:_oSelf._moEditor.getContent()});
}});
},{_TEMPLATE:{_DLG:TE(['<div style="text-align:left; padding:20px 15px 10px 10px;">','<div style="margin:0 0 5px;zoom:1;">','<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:24px;line-height:24px;">\u5185\u5BB9\uFF1A</div>','<div style="margin-left:60px;"><div id="QMEditorArea" style="height:250px;" ></div></div>','<div class="clr"></div>','</div>','<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">','<div class="greenbutton left" style="width:50px;"><input type="button" value="\u53D1\u9001" style="width: 50px;" class="" id="sendBtn" tabindex="2"></div>','<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;" tabindex="3">\u53D6\u6D88</a>','</div>','</div>'])}});
var QMCgiExpt=function(_aoWin,_afVerifyCallBack){
this._mbIsOk;
this._msErrCode;
this._mfVerifyCallBack=_afVerifyCallBack;
this._moWin=_aoWin;
this._msRespText;
};
QMCgiExpt.prototype={check:function(_abIsOk,_avParam){
var _oSelf=this;
if(_abIsOk)
{
_oSelf._mbIsOk=_avParam.indexOf('<!--cgi exception-->')==-1;
_oSelf._msRespText=_avParam;
}
else{
_oSelf._msErrCode=typeof (_avParam)=="number"?_avParam:"";
}
return _oSelf._mbIsOk;
},getErrCode:function(){
return this._msErrCode||"";
},doExptScript:function(){
var _oSelf=this;
if(!_oSelf._msErrCode)
{
var _oWin=_oSelf._moWin,_oDiv=_oWin.document.createElement("div"),_oErrDiv;
_oDiv.innerHTML=_oSelf._msRespText;
E(GelTags("div",_oDiv),function(_aoDiv){
if("msg_txt"==_aoDiv.id)
{
_oErrDiv=_aoDiv;
return false;
}
});
if(_oErrDiv)
{
setVerifyCallBack(function(_aoVerifyCode){
callBack(_oSelf._mfVerifyCallBack,[_aoVerifyCode]);
});
showError(_oErrDiv.innerHTML,0,true);
setVerifyCallBack();
}
}
}};
var QMCpsSend=function(_aoComposeData,_aoConfig){
this._init(_aoComposeData,_aoConfig);
};
QMCpsSend.prototype={send:function(_aoRuntimeCfg){
var _oSelf=this,_oRuntimeCfg=_aoRuntimeCfg||{},_oAjax=new QMAjax(),_oConfig=_oSelf._moConfig;
showProcess(1,true,_oConfig.sSendingDesc,"",false);
callBack(_oConfig.onready);
QMAjax.send(_oConfig.sCgiPath,{method:"POST",timeout:_oConfig.nTimeout||30000,content:_oSelf._flat(_oRuntimeCfg.fCustomData),onload:function(_abIsOk,_avParam,_aoXhr){
osslogAjaxCompose(55);
var _oCgiExpt=_oSelf._moCgiExpt,_bOK=_oCgiExpt.check(_abIsOk,_avParam);
if(_bOK)
{
osslogAjaxCompose(56);
showProcess(0);
}
else{
osslogAjaxCompose(57,_aoXhr.readyState===4?_aoXhr.status:-1,encodeURIComponent(trim2(_aoXhr.responseText)));
showError(_oConfig.sFailDesc+_oCgiExpt.getErrCode());
_oCgiExpt.doExptScript();
}
callBack(_oConfig.oncomplete,[_bOK,_avParam,_aoXhr]);
}},_oAjax);
return _oAjax;
},_init:function(_aoComposeData,_aoConfig){
var _oSelf=this;
_oSelf._moConfig=_aoConfig;
_oSelf._moCpsData=_configHelp(_aoComposeData,{sid:getSid(),resp_charset:"UTF8"});
if(!_oSelf._moCpsData.loc&&typeof _oSelf._moConfig.nLocId=="number")
{
_oSelf._moCpsData.loc=_oSelf._getLoc();
}
_oSelf._moCgiExpt=new QMCgiExpt(_aoWin,function(_aoVerifyCode){
extend(_oSelf._moCpsData,_aoVerifyCode);
_oSelf.send();
});
},_flat:function(_afCustomHandler){
var _oData=this._moCpsData,_oArray=[];
for(var _sName in _oData)
{
var _vData=_oData[_sName];
if(typeof _vData=="object"&&_vData.length)
{
for(var i=0;i<_vData.length;i++)
{
_oArray.push([_sName,_afCustomHandler?_afCustomHandler(_vData[i]):encodeURI(_vData[i])].join("="));
}
}
else{
_oArray.push([_sName,_afCustomHandler?_afCustomHandler(_vData):encodeURI(_vData)].join("="));
}
}
return _oArray.join("&");
},_getLoc:function(_anNum){
var _oSelf=this,_oCpsData=_oSelf._moCpsData,_oCpsConfig=_oSelf._moConfig;
return [_oCpsConfig.sCgiPath.split("/").pop(),_oCpsData.t,_oCpsData.s,_oCpsConfig.nLocId].join(",");
}};
var _oQMWordCntCtrl=_aoWin.QMWordCntCtl=function(_aoConfig){
var _oSelf=this;
_oSelf._init(_aoConfig);
};
_oQMWordCntCtrl.prototype={check:function(){
var _oSelf=this,_oTxtDisper=_oSelf._moTxtDisper,_nLeft=_oSelf._mnLimit-_oSelf._moText.value.length;
_oTxtDisper.innerHTML=_oTxtDisper.getAttribute(_nLeft>0?"default":"over");
_oSelf._moNumDisper.innerHTML=Math.abs(_nLeft);
_oSelf._moDisper.style.color=_oSelf._calcColor(_nLeft);
return _oSelf;
},getLimit:function(){
return this._mnLimit;
},isOverLimit:function(){
var _oSelf=this;
return _oSelf._mnLimit-_oSelf._moText.value.length<0;
},_init:function(_aoConfig){
var _oSelf=this;
_oSelf._mnLimit=_aoConfig.nLimit||_gnMsgLen;
return _oSelf._initUI(_aoConfig)._initEvent();
},_initUI:function(_aoConfig){
var _oSelf=this;
_oDisper=_oSelf._moDisper=_aoConfig.oDisper,_oChilds=_oDisper.childNodes;
_oSelf._moText=_aoConfig.oText;
_oDisper.innerHTML=_TMPL_UI;
_oSelf._moTxtDisper=_oChilds[0];
_oSelf._moNumDisper=_oChilds[1];
return _oSelf.check();
},_initEvent:function(){
var _oSelf=this;
function _check()
{
_oSelf.check();
}
addEvents(_oSelf._moText,{"keydown":_check,"keyup":_check,"paste":function(){
setTimeout(_check);
}});
return _oSelf;
},_calcColor:function(_anLeft){
if(_anLeft<0)
{
return "#FF3300";
}
else if(_anLeft<30)
{
return "#700000";
}
else{
return "#A0A0A0";
}
}};
})(window);
