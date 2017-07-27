(function(_aoLoadWin){
var _ID={_sQReply:"quickreply",_sQSource:"source",_sQSendBtn:"sendbtn",_sQReplyTxtContainer:"qmQuickReplyTextContainer",_sQReplyBtnContainer:"qmQuickReplyButtonContainer",_sAfterSendDiv:"afterSendDiv",_sAfterSendingDiv:"afterSendingDiv",_sQuickReplyPart:"QuickReplyPart",_sQMEditorArea:"QMEditorArea",_sQMEditorToolArea:"QMEditorToolBarPlusArea",_sJumpToNewWin:"jumpToNewWin",_sReplyFrm:"replyfrm",_sSubMailStartDiv:"submail_start_div",_sContentDiv:"contentDiv",_sContentClassName:"qm_converstaion_body",_sImgStar:"img_star",_sTopBtn:"img_mailtop",_sStarStatus:"starStatus",_sMailtopStatus:"mailtopStatus",_sStarTopStatus:"starTopStatus",_sTagContainer:'tagContainer',_sMailContainer:"mailContentContainer",_sSendTimeMsg:"send_time_msg",_sAttachment:"attachment",_sPageEnd:"pageEnd",_sNextMailTop:"nextmail_top",_sNextMailBt:"nextmail_bt",_sNextNewMail:"nextnewmail",_sNextNewDiv:"nextnewDiv",_sQQMailBgMusicInfo:"QQMailBgMusicInfo",_sBgMusic:"bgmusic",_sMp3PlayerContainer:"mp3player_container",_sMp3PlayerInfo:"mp3player_info",_sSubMail:"submail",_sFold:"fold",_sDetail:"detail",_sSum:"sum",_sExpand:"expand",_sDetailBtn:"detailBtn",_sReferInfo:"referinfo",_sSettingGroup:"setting_group",_sRmd:"rmd",_sRemarkContent:"remarkContent",_sRemarkContainer:"remarkcontainer",_sRemarkText:"remarktext",_sRemarkWrite:"remarkwrite",_sRemarkRead:"remarkread",_sRemarkSave:"remarksave",_sSenderInfo:"senderInfo",_sSenderInfo2:"senderInfo2",_sSenderInfo3:"senderInfo3",_sMainMail:"mainmail",_sRejectGroupY:"rejectgroupy",_sRejectGroupN:"rejectgroupn",_sCheatCodeBar:"spam",_sGreenBar:"cheatcode_greenbar",_sGreenBarText:"greenbar_text"},_NAME={_sConvReAndFw:"convreandfw",_sSpam:"spam",_sAdMail:"adMail",_sMoreOprContainer:"moreoprContainer"},_sQMTRANSLATE="qmTranslate",_DEFAULT_TEXT_VALUE="\u8BF7\u5728\u6B64\u8F93\u5165\u5907\u6CE8...",_MUSICINFO=T(['<img src="$images_path$webp/spacer1e9c5d.gif" class="icon_addMusic_d"/>','&nbsp;<a href="http://cgi.music.soso.com/fcgi-bin/m.q?w=$title$%20$author$&t=0" target="_blank">$title$ - $author$</a>']),_MAIL_LIST1=TE(["/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&folderkey=$folderkey$",'$@$if($s$=="from_unread_list")$@$','&flag=new&s=unread','$@$else if($s$=="from_star_list")$@$','&flag=star&s=star','$@$endif$@$','$@$if($more$)$@$','$more$','$@$endif$@$']),_READMAIL_="/cgi-bin/readmail?sid=$sid$&mailid=$mailid$",_READMAIL_CPS_URL=TE([_READMAIL_,"&t=","$@$if($t$)$@$","$t$","$@$else$@$","compose","$@$endif$@$","&s=$s$&disptype=$disptype$"]),_ATT_FW_SEND=TE(['/cgi-bin/readmail?sid=$sid$&t=compose&s=forward&disptype=html&from=attachfolder&getSubjectFromAttachName=1','&mailattach=$mailid$|$attachid$|$attachname$|$fileextenal$|$filebyte$']),_BIG_ATT_FW_SEND=TE(["/cgi-bin/readtemplate?sid=$sid$&t=compose&s=cnew&bigatt=1&attid=$attachid$&filesize=$filesize$&downpage=$downpage$&exptime=$exptime$&nocheckframe=true&urifilename=$urifilename$&getSubjectFromAttachName=1&k=$k$&code=$code$&fid=$fid$"]),_SETTING_GROUP=TE("/cgi-bin/grouplist?oper=$oper$&sid=$sid$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=$action$"),_REJECT_GROUP=TE("/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=$yn$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=reject_group"),_S_RD_LIST=TE("/cgi-bin/reader_list?type=home&classtype=allfriend&uin=$mail.from.qq$&t=reader_personal&sid=$sid$&s=sidebar"),_S_ML_LIST=TE("/cgi-bin/mail_list?sid=$sid$&t=mail_list_preview&sender=$mail.from.addr$&receiver=$mail.from.addr$&matchtype=include&folderid=all&page=0&name=$mail.from.name$&pagesize=5&mailidx=$mailid$&listmode=0&from=sidebar&s=$s$&record=n"),_FORM_TMP=TE(['<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">','$@$for($oInputs$)$@$','<input name="$name$" type="hidden" value="$value$"/>','$@$endfor$@$','</form>']),_ADDR_='"$@$eval getTop().htmlEncode($name$)$@$"&lt;$addr$&gt;; ',_ADDRS=TE(['$@$for($addrs$)$@$','"$@$eval getTop().encodeNick($name$)$@$"<$addr$>; ','$@$endfor$@$']),_SETTING_GROUP_TMP=TE(['<div id="container" style="line-height:20px">','<div>','<div style="margin:8px 4px 0 0;">','<a class="right" id="other" href="/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list">\u7BA1\u7406\u5176\u4ED6\u7FA4</a>','<p style="margin:0;">\u5BF9\u6B64\u7FA4:</p>','</div>','<div style="margin-bottom:5px;margin-left:8px;">','<div style="padding:5px 0 3px">','<input type="radio" name="qqnotify" class="cb" value="notifyyes" $@$if(!$bReject$&&$bNotify$)$@$checked="true"$@$endif$@$ id="qqnotify"/>','<label for="qqnotify" style="color:#333">\u63A5\u6536\u65B0\u90AE\u4EF6\uFF0C\u5E76\u5728QQ\u63D0\u9192</label>','</div>','<div style="padding:5px 0 3px">','<input type="radio" name="qqnotify" class="cb" value="notifyno" $@$if(!$bReject$&&!$bNotify$)$@$checked="true"$@$endif$@$ id="noqqnotify"/>','<label for="noqqnotify" style="color:#333">\u63A5\u6536\u65B0\u90AE\u4EF6\uFF0C\u4E0D\u5728QQ\u63D0\u9192</label>','</div>','<div style="padding:5px 0 3px;">','<input type="radio" name="qqnotify" class="cb" value="reject" $@$if($bReject$)$@$checked="true"$@$endif$@$ id="reject"/>','<label for="reject" style="color:#333">\u62D2\u6536\u90AE\u4EF6</label>','</div>','</div>','</div>','<div style="position:relative;border-top:1px solid #ccc;padding-top:8px;$@$if($bReject$)$@$display:none;$@$endif$@$;" class="clear" id="setnewdiv">','<p style="margin:0;">\u5BF9\u6B64\u7FA4\u5DF2\u8BFB\u90AE\u4EF6:</p>','<div style="margin-left:8px;">','<div style="padding:5px 0 3px">','<input type="radio" name="unread" class="cb" value="setnewyes" $@$if($bNewreply$)$@$checked="true"$@$endif$@$ id="setunread"/>','<label for="setunread" style="color:#333">\u6709\u65B0\u56DE\u590D\u65F6\uFF0C\u6807\u4E3A\u672A\u8BFB</label>','</div>','<div style="padding:5px 0 3px">','<input type="radio" name="unread" class="cb" value="setnewno" $@$if(!$bNewreply$)$@$checked="true"$@$endif$@$ id="setread"/>','<label for="setread" style="color:#333">\u6709\u65B0\u56DE\u590D\u65F6\uFF0C\u4FDD\u6301\u5DF2\u8BFB</label>','</div>','</div>','</div>','<div style="padding:10px 0;overflow:hidden;" class="clear">','<a class="btn_blue btn_space" id="save">\u4FDD\u5B58\u66F4\u6539</a>','<a class="btn_gray" href="javascript:;" id="cancel">\u53D6\u6D88</a>','</div>','</div>']),_TEMPLATE={_REPLY_DLG:T(['<div class="dialog_feedback">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','<div class="dialog_f_t">\u662F\u5426\u8981\u56DE\u590D\u5168\u90E8\u6536\u4EF6\u4EBA\uFF1F</div>','<div class="dialog_f_d"> \u60A8\u662F\u5BC6\u9001\u7684\u6536\u4EF6\u4EBA\uFF0C\u5176\u4ED6\u6536\u4EF6\u4EBA\u4E0D\u77E5\u9053\u60A8\u6536\u5230\u4E86\u6B64\u90AE\u4EF6\uFF01</div>','</div>','</div>']),_REPLY_DLG_FOOT:T(["<input type=button id='replyall' class='btn wd4' value='\u56DE\u590D\u5168\u90E8'>","<input type=button class='btn wd4' value='\u56DE\u590D\u53D1\u4EF6\u4EBA' id='reply'>","<input type=button class='btn wd4' value='\u53D6\u6D88' id='cancel'>"]),_REFERPART:TE(['<div><br></div><div><br></div>','<div style="font-size: 12px;font-family: Arial Narrow;padding:2px 0 2px 0;">','------------------&nbsp;$REFER$&nbsp;------------------','</div>','<div style="font-size: 12px;background:#efefef;padding:8px;">','<div><b>$FROM$</b> ',_ADDR_,'</div>','<div><b>$DATE$</b> $date$</div>','<div><b>$TO$</b> $@$for($to$)$@$',_ADDR_,'$@$endfor$@$</div>','$@$if($cc.length$)$@$','<div><b >$CC$</b> $@$for($cc$)$@$',_ADDR_,'$@$endfor$@$</div>','$@$endif$@$','<div><b>$SUBJECT$</b> $subject$</div>','</div><div><br></div>','$orgcontent$'])},_LANG={_ZH_CN:{REFER:"\u539F\u59CB\u90AE\u4EF6",FROM:"\u53D1\u4EF6\u4EBA:",DATE:"\u53D1\u9001\u65F6\u95F4:",TO:"\u6536\u4EF6\u4EBA:",CC:"\u6284\u9001:",SUBJECT:"\u4E3B\u9898:"},_EN_US:{REFER:"Original",FROM:"From:",DATE:"Date:",TO:"To:",CC:"Cc:",SUBJECT:"Subject:"}},_BW_LIST=T("/cgi-bin/config_blackwhitelist?sid=$sid$&act=whitelist&Fun=submit&pagefrom=readmail&group=$fromaddr$&sloc=readmail_yellow_tip"),_SPAM_REPORT=T("/cgi-bin/report_cgi?r_type=$rtype$&r_result=$rresult$&r_msg=$rmsg$");
function _createForm(_aoConfig,_aoInputData)
{
var _sFormId=_aoConfig.sFormId||unikey(),_oForm=S(_sFormId,_aoConfig.oWin),_oInputs=[];
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
var _fLocationIdentifyOptions=function(_aoOptions){
return {processCallback:function(_aoResult){
var _oTop=getTop();
for(var _nIdx in _aoResult)
{
var _oLocNodeData=_aoResult[_nIdx];
var _sReplaceStr=_oLocNodeData.sValue.replace(new RegExp('('+_oLocNodeData.sLocation+')','g'),function(_asLoc){
return ['<span onmouseover="QMReadMail.showLocationTip(this)" class="readmail_locationTip" onmouseout="QMReadMail.hideLocationTip(this)">',_asLoc,'</span>'].join('');
});
_oTop.replaceHTML(_aoResult[_nIdx].oNode,_sReplaceStr);
}
if(_aoResult.length>0)
{
_oTop.ossLog('delay',0.05,'stat=previewer&from=3&suffix='+_aoOptions.sMailId);
_oTop.ossLog('delay','all','stat=sgkv&group=readmaillocidt&cnt='+_aoResult.length);
}
}};
};
function _clearReload(_asMailId,_aoWin)
{
rdVer(_asMailId,1);
if(!rdVer.check(_aoWin))
{
reloadFrm(_aoWin);
}
}
function _getSendTimeMsg(_aSendYear,_aSendMonth,_aSendDay,_aSendHour,_aSendMin)
{
var _currtime=new Date();
var _sendtime=new Date(_aSendYear,_aSendMonth,_aSendDay,_aSendHour,_aSendMin,0);
var _IsSended=_currtime>_sendtime;
if(_IsSended)
{
return ['\u6B64\u90AE\u4EF6\u662F\u5B9A\u65F6\u90AE\u4EF6\uFF0C\u5DF2\u5728<span style="color:black;" >&nbsp;',_aSendYear,'\u5E74',_aSendMonth,'\u6708',_aSendDay,'\u65E5',_aSendHour,'\u65F6',_aSendMin,'\u5206','&nbsp;</span>\u53D1\u51FA\u3002'].join("");
}
else{
return ['\u6B64\u90AE\u4EF6\u662F\u5B9A\u65F6\u90AE\u4EF6\uFF0C\u5C06\u5728<span style="color:black;" >&nbsp;',_aSendYear,'\u5E74',_aSendMonth,'\u6708',_aSendDay,'\u65E5',_aSendHour,'\u65F6',_aSendMin,'\u5206','&nbsp;</span>\u53D1\u51FA\u3002'].join("");
}
}
function _removePlayerTag(_asContent)
{
return filteScript(_asContent.replace(/<div id=\'?\"?QQMailBgMusicInfo\'?\"?.*?>.*?<\/div>/ig,"").replace(/<player .*?><\/player>/ig,"").replace(/(^\s+)|(\s+$)/ig,""));
}
function _isBccToMe(_aoMail)
{
var _bBcc=true,_oAllMailObj;
try{
_oAllMailObj=getTop().goUserInfo.get('RealDefaultAllMail');
}
catch(e)
{
return false;
}
function _findMe(_aoBuf)
{
if(!_aoBuf)
{
return false;
}
for(var i=0;i<_aoBuf.length;i++)
{
if(_aoBuf[i])
{
var _sAddr=_aoBuf[i].addr||"",_sQQ=_aoBuf[i].qq;
if(_sQQ==g_admuin||_sAddr.indexOf("@g.qq.com")>0)
{
return true;
}
for(var j=0;j<_oAllMailObj.length;j++)
{
if((_oAllMailObj[j].email||"").toLowerCase()==_sAddr.toLowerCase())
{
return true;
}
}
}
}
return false;
}
if(_oAllMailObj&&_oAllMailObj.length)
{
_bBcc=!(_findMe(_aoMail.to)||_findMe(_aoMail.cc)||_findMe([_aoMail.from]));
}
else{
_bBcc=false;
}
return _bBcc;
}
function _isKeyDownSend(_aoEvent,_aoSendBtn)
{
return (_aoEvent.ctrlKey&&_aoEvent.keyCode==13||_aoEvent.altKey&&_aoEvent.keyCode==83);
}
function _fFixXFDownload()
{
var _oTop=getTop(),_sXFUrl="http://x.soso.com/js/xf/xflib2.0.js";
location.protocol==="https:"&&(_sXFUrl=["/cgi-bin/magurl?sid=",_oTop.getSid(),"&act=rep&url=",_sXFUrl].join(""));
_oTop.loadJsFile(_sXFUrl,true,_oTop.document,function(){
var _oXFDl=_oTop.finds("[ck=xfDl]",_oTop.getMainWin().document);
if(_oTop.XFLIB&&_oTop.XFLIB.IsXFInstalled())
{
_oTop.E(_oXFDl,function(_aoItem){
_oTop.show(_aoItem,true);
});
}
});
}
function _showQBTip(_aoTarget)
{
var _oPosInfo=calcPos(_aoTarget),_oMainFrmPos=calcPos(S("mainFrame",getTop())),_oMenu=QMMenu("readmail_qb_push_tip");
if(_oMenu)
{
_oMenu.show();
}
else{
new QMMenu({sId:"readmail_qb_push_tip",sClassName:"qmpanel_shadow",nX:_oPosInfo[3]-160,nY:_oPosInfo[2],nWidth:258,bAutoClose:true,oEmbedWin:this._moWin,oItems:[{nHeight:110,sItemValue:['<div style="line-height:20px;padding:15px 0 15px;white-space:normal;">','\u5EFA\u8BAE\u5B89\u88C5QQ\u6D4F\u89C8\u5668\uFF0C\u53EF\u6709\u6548\u62E6\u622A\u9493\u9C7C\u548C<br/>\u6B3A\u8BC8\u7F51\u7AD9\uFF0C\u9632\u6B62\u5E10\u53F7\u4FE1\u606F\u88AB\u76D7\u3002','</div>','<div class="txt_right" style="line-height:30px;">','<a href="javascript:;" class="btn_blue" id="setup_btn">\u7ACB\u5373\u5B89\u88C5</a>','</div>'].join('')}],onload:function(){
var _oSelf=this;
LogKV({sValue:"getinvestigate|readmail|qbpushtip|show"});
addEvent(_oSelf.S("setup_btn"),"click",function(_aoEvent){
LogKV({sValue:"getinvestigate|readmail|qbpushtip|click"});
window.open(getTop().gbIsMac?'http://dldir1.qq.com/invc/tt/QQBrowser_for_QQMail.dmg':"http://dldir1.qq.com/invc/tt/QQBrowser_Setup_Email_fjck.exe","_blank");
});
}});
}
}
function _hideQBTip(_aoEvent)
{
if(_aoEvent.offsetY<_aoEvent.fromElement.clientHeight/2)
{
QMMenu("readmail_qb_push_tip").hide();
}
}
function _showBccTip(_aoTarget)
{
var _oPosInfo=calcPos(_aoTarget);
var _oMenu=QMMenu("readmail_show_bcc_tip");
new QMMenu({sId:"readmail_show_bcc_tip",sClassName:"qmpanel_shadow",nX:_oPosInfo[3]-114,nY:_oPosInfo[2]-2,nWidth:200,bAutoClose:true,oEmbedWin:this._moWin,oItems:[{nHeight:50,sItemValue:['<div style="line-height:20px;padding:15px 1px 15px;white-space:normal; text-align:center;">',attr(_aoTarget,'data-bcc'),'</div>'].join('')}]});
}
function _hideBccTip(_aoEvent)
{
if(_aoEvent.offsetY<_aoEvent.fromElement.clientHeight/2)
{
QMMenu("readmail_show_bcc_tip").hide();
}
}
var _oClassHome={};
var _qmBaseDM=_oClassHome.qmBaseDM=_oClassHome._qmBaseDM=inherit("_qmBaseDM",Object,function(_aoSuper){
return {$_constructor_:function(){
var _oArgs=arguments;
if(_oArgs.length)
{
var _oSelf=this;
_oSelf._moContext=_oArgs[_oArgs.length-1];
_oSelf._moWin=_oSelf._moContext.oWin;
_oSelf._msModuleName=_oSelf._moContext.sModuleName;
_oSelf._init.apply(_oSelf,arguments);
}
},_initMemVar:function(){
},_setEvent:function(){
},_ready:function(){
},_startSubMod:function(){
},_init:function(){
var _oSelf=this;
_oSelf._initMemVar.apply(_oSelf,arguments);
_oSelf._setEvent.apply(_oSelf,arguments);
_oSelf._ready.apply(_oSelf,arguments);
_oSelf._getDealCustomUIMethod();
},_getDealCustomUIMethod:function(){
var _oSelf=this;
var _oWin=_oSelf._moWin;
if(_oWin.location.href.indexOf('t=mail_list_ad')!=-1&&_oWin.dealCustomUI)
{
_oSelf.dealCustomUI=_oWin.dealCustomUI;
}
else{
_oSelf.dealCustomUI=function(){
};
}
},attr:function(_aoObj,_asAttr,_asValue){
var _oRe=attr(_aoObj,_asAttr,_asValue);
if(_oRe==null&&_aoObj)
{
return _asValue===undefined?_aoObj[_asAttr]:(_aoObj[_asAttr]=_asValue);
}
return _oRe;
},S:function(_asDomId){
var _oSelf=this;
return S(_asDomId+(_oSelf._moContext.sAux||""),_oSelf._moWin);
},SN:function(_asName){
var _oSelf=this;
return SN(_asName+(_oSelf._moContext.sAux||""),_oSelf._moWin);
},context:function(_asContext){
var _oSelf=this;
_asContext=_asContext||"sContext";
return _oSelf._moContext[_asContext];
},getMailId:function(){
return this.context("sContext");
},getFromInfo_:function(){
return this._moMailInfo.from||{};
},_handle:function(_aoModDom,_aoEvent,_asItem){
var _oSelf=this,_oItDom=getEventTarget(_aoEvent),_oDoc=_oItDom.ownerDocument,_sModuleName=_oSelf._msModuleName,_sAttr,_sMethod,_oTarget;
while(_oItDom&&isObjContainTarget(_aoModDom,_oItDom))
{
_sAttr=attr(_oItDom,_asItem);
if(_sAttr&&!_sMethod)
{
_sMethod=_sAttr;
_oTarget=_oItDom;
}
_sAttr=attr(_oItDom,_qmBaseDM._MOD_ATTR);
if(_sAttr)
{
if(_sAttr==_sModuleName)
{
if(_sMethod&&typeof (_oSelf[_sMethod])=="function")
{
_oSelf[_sMethod](_oTarget,_oSelf.getMailId(),_aoEvent);
}
break;
}
else{
_sMethod=null;
}
}
_oItDom=_oItDom.parentNode;
}
},md:function(){
getTop().md();
},mu:function(){
getTop().mu();
},confirmOpen:function(_aoCfg,_afCallback){
getTop().confirmBox({title:"\u8B66\u544A",msg:['<div class="dialog_f_t" style="margin-top: 2px;font-weight: normal;"> '+_aoCfg.msg+'</div>'].join(""),confirmBtnTxt:_aoCfg.btnTxt,cancelBtnTxt:'\u53D6\u6D88',onshow:function(){
gbIsMac||this.S("cancel").focus();
getTop().LogKV("attachanti|readmail|"+(_aoCfg.kvKey||"total"));
},onreturn:function(_abIsOk){
_abIsOk&&(typeof _afCallback=="function")&&_afCallback();
}});
return false;
},getMainContainer:function(){
var _oSelf=this,_oTop=getTop(),containerDom,mailContentDom,contentRootDom;
switch(_oSelf._msModuleName)
{case "qmConvMail":
containerDom=_oSelf.S(_ID._sSubMail+"0");
break;
default:
containerDom=_oSelf.S(_ID._sMainMail)||_oSelf.S(_ID._sSubMail);
}return containerDom;
},specialProcess:function(){
var _oSelf=this,_oTop=getTop(),containerDom,mailContentDom,contentRootDom;
switch(_oSelf._msModuleName)
{case "qmConvMail":
containerDom=_oSelf.S(_ID._sContentDiv+"0");
break;
default:
containerDom=_oSelf.S(_ID._sMailContainer)||_oSelf.S(_ID._sContentDiv);
}if(containerDom)
{
try{
mailContentDom=containerDom.children;
for(var i=0,len=mailContentDom.length;i<len;i++)
{
if((contentRootDom=mailContentDom[i]).nodeType==1)
{
if(contentRootDom.style.position=="absolute"||contentRootDom.style.position=="fixed")
{
contentRootDom.style.position="";
}
}
}
}
catch(e)
{
}
}
},processQQMailAppH5CardForWebmail:function(){
var _oSelf=this,_oTop=getTop(),h5CardUrlDom,containerDom;
switch(_oSelf._msModuleName)
{case "qmConvMail":
containerDom=_oSelf.S(_ID._sSubMail+"0");
break;
default:
containerDom=_oSelf.S(_ID._sSubMail)||_oSelf._moWin.document.body;
}h5CardUrlDom=_oTop.finds("a[name='qqmailapp_h5_card_url']",containerDom);
var deskDom=_oTop.finds("table.greetingCard_desktop_table div",containerDom),firstDiv=deskDom&&deskDom[0];
firstDiv&&firstDiv.style&&(firstDiv.style.height="370px");
if(h5CardUrlDom&&(h5CardUrlDom=h5CardUrlDom[0]))
{
if(_oTop.supportCss3&&!_oTop.supportCss3("animation"))
{
h5CardUrlDom.href="javascript:void(0);";
return;
}
var url=(h5CardUrlDom.href||"").replace(/http:|https:/i,"https:"),temp=_oTop.T(["<div style='width:360px;height:602px;overflow:hidden;position:relative'>","<iframe id='iframe_h5_qmail_card_webmail' src='$url$' width='750' height='1254' frameborder='0' ","style='display: block;position:absolute;top:0px;left:0px;border: 0px;transform:scale($scale$);-ms-transform:scale($scale$);-moz-transform:scale($scale$);-webkit-transform:scale($scale$);-o-transform:scale($scale$);","transform-origin:0 0;-ms-transform-origin:0 0;-moz-transform-origin:0 0;-webkit-transform-origin:0 0;-o-transform-origin:0 0;'></iframe>","</div>"]).replace({url:url+"#noplaybtn",scale:0.48});
_oTop.replaceHTML(h5CardUrlDom,temp);
}
},checkOnlineDocStarStatus:function(_asIndex){
var _oSelf=this,_oTop=getTop(),_sUrl="/cgi-bin/docedit_read?t=online_doc.json&func=checkstar&sid="+_oTop.getSid()+"&key=";
var _oOnlineDocAttachDoms=_oTop.finds("div.att_bt a[ck='starOnlineDoc']",_oSelf.getMainContainer()||_oSelf._moWin),_oOnlineDocAttachs={},_oOnlineDocAttachIds=[],_oOnlineDocAttachId;
if(_oOnlineDocAttachDoms&&_oOnlineDocAttachDoms.length>0)
{
_oTop.E(_oOnlineDocAttachDoms,function(_aoAttachDom){
_oOnlineDocAttachId=_oTop.attr(_aoAttachDom,"onlinedockey");
_oOnlineDocAttachIds.push(_oOnlineDocAttachId);
_oOnlineDocAttachs[_oOnlineDocAttachId]=_aoAttachDom;
});
}
else{
return;
}
_sUrl+=_oOnlineDocAttachIds.join("&key=");
QMAjax.send(_sUrl,{method:"GET",onload:function(_abIsOk,_asResult){
if(_abIsOk)
{
var _oResult=_oTop.evalValue(_asResult);
if(_oResult.ret==0)
{
var _oList=_oResult.oList;
_oTop.E(_oList,function(_aoAttach){
if(_aoAttach.bHasDeleted)
{
var _oItemContainerDom=_oTop.parents("div.att_bt",_oOnlineDocAttachs[_aoAttach.sFileId])[0],_oFileSizeDom=_oTop.finds("span.graytext",_oItemContainerDom)[0],_oImgDom=_oTop.finds("a[ck='editOnlineDoc']",_oItemContainerDom)[0];
_oFileSizeDom.innerHTML=_oFileSizeDom.innerHTML.replace(/\(([\s\S]*)\)/,function(word,match){
return ["(",match,", <span class='txt_red'>\u6587\u6863\u5DF2\u5220\u9664</span>)"].join("");
});
_oTop.attr(_oImgDom,"ck","");
_oTop.removeSelf(_oTop.parents("div.down_big",_oOnlineDocAttachs[_aoAttach.sFileId])[0]);
}
else if(_aoAttach.sStarStatus=="1")
{
_oTop.show(_oOnlineDocAttachs[_aoAttach.sFileId],false);
_oTop.show(_oSelf.S("span_stared_"+_aoAttach.sFileId+(_asIndex?_asIndex:"")),true);
}
});
}
}
}});
},checkPoison:function(_asMailId){
var _oSelf=this,_oTop=getTop(),_sMailId=_asMailId||_oSelf.getMailId();
QMAjax.send(T('/cgi-bin/do?action=checkvirus&sid=$sid$&mailid=$mailid$&t=do.json&cacheage=7200&ver=$ver$').replace({sid:getSid(),mailid:_sMailId,ver:getTop().CommVer.get("checkPoison")}),{method:"GET",onload:function(_abIsOk,_asResult){
var _sText=trim(_asResult);
if(_abIsOk&&_sText.indexOf("(")==0)
{
var _oResJson=evalValue(_sText);
for(var id in _oResJson)
{
if(!id)
{
return;
}
if(_oResJson[id].isSafe=="0"||_oResJson[id].isSpam=="1")
{
var _oAttachDom=_oTop.S(["span_attachIndex_",_sMailId,"_",id].join(""),_oSelf._moWin);
if(_oResJson[id].isSafe=="0")
{
_oAttachDom.style.display="";
_oTop.attr(_oAttachDom,"poisonname",_oResJson[id].virus);
_oTop.S(["span_",_sMailId,"_safe"].join(""),_oSelf._moWin).style.display="none";
}
var _oParentDom=_oAttachDom&&_oAttachDom.parentNode&&_oAttachDom.parentNode.parentNode,_oDownDom=_oTop.finds("div.down_big",_oParentDom),_oImgPreview=_oTop.finds("a",_oParentDom.parentNode);
if(_oDownDom&&_oDownDom.length>0&&(_oDownDom=_oDownDom[0]))
{
var _oADom=_oTop.finds("a",_oDownDom);
if(_oADom&&_oADom.length>0)
{
_oADom[0].href+="&kvclick=attach|poison|download";
_oADom[0].onclick=(function(_aoADom){
return function(_aoEvent){
_oTop.preventDefault(_aoEvent||_oSelf._moWin.event);
_oSelf.confirmOpen({msg:"\u9644\u4EF6\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\u6216\u6B3A\u8BC8\u4FE1\u606F\uFF0C\u8BF7\u52FF\u4E0B\u8F7D\u3002",btnTxt:"\u7EE7\u7EED\u4E0B\u8F7D",kvKey:"download"},function(){
_oTop.goUrlMainFrm(_aoADom[0].href,false,true);
});
};
})(_oADom);
_oTop.attr(_oADom[1],"ispoison","1");
}
}
if(_oImgPreview&&_oImgPreview.length>0&&(_oImgPreview=_oImgPreview[0]))
{
_oTop.attr(_oImgPreview,"ispoison","1");
}
var _oDown=_oTop.S("attach_tools_download_"+id,_oSelf._moWin),_oPreview=_oTop.S("attach_tools_preview_"+id,_oSelf._moWin);
_oPreview&&(_oTop.attr(_oPreview,"ispoison","1"));
if(_oDown)
{
_oDown.onclick=(function(_aoADom){
return function(_aoEvent){
_oTop.preventDefault(_aoEvent||_oSelf._moWin.event);
_oSelf.confirmOpen({msg:"\u9644\u4EF6\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\u6216\u6B3A\u8BC8\u4FE1\u606F\uFF0C\u8BF7\u52FF\u4E0B\u8F7D\u3002",btnTxt:"\u7EE7\u7EED\u4E0B\u8F7D",kvKey:"download"},function(){
_oTop.goUrlMainFrm(_aoADom[0].href,false,true);
});
};
})(_oDown);
}
}
}
}
}});
},_POISON_WARNING_TEMP:T(['<div unselectable="on" id="div_poision_warning" class="newtips" style="top: $top$px; left: $left$px;" mor="setInStatus" mot="setOutStatus">','<div unselectable="on" class="tipcontainer" style="opacity: 1;">','<span class="arrowup" style="margin-left: 106px;"></span>','<span class="arrowleft" style="display: none; margin-top: 106px;"></span>','<span class="arrowright" style="display: none; margin-top: 106px;"></span>','<div unselectable="on" class="container">','<div unselectable="on" class="contentcontainer">','<div unselectable="on" class="content" style="position:relative;zoom:1;padding:15px 14px 15px 14px">','<div class="tipstxt" style="padding-left:0px">','<b>\u75C5\u6BD2\u540D\uFF1A$poisonname$</b>','<br>','<span class="ico_Avira"></span>','\u68C0\u67E5\u7ED3\u679C\u7531\u7535\u8111\u7BA1\u5BB6\u4E91\u67E5\u6740\u5F15\u64CE\u63D0\u4F9B','</div>','</div>','</div>','</div>','</div>','</div>']),showPoisonWaring:function(_aoTarget){
var _oTop=getTop(),_oSelf=this;
var _oTargetPos=_oTop.calcPos(_aoTarget),_oWarningDom=_oTop.S("div_poision_warning",_oSelf._moWin);
if(_oWarningDom)
{
_oTop.removeSelf(_oWarningDom);
_oSelf._nTimeoutIndex&&clearTimeout(_oSelf._nTimeoutIndex);
}
_oTop.insertHTML(_oSelf._moWin.document.body,"afterBegin",_oSelf._POISON_WARNING_TEMP.replace({"top":_oTargetPos[0],"left":_oTargetPos[3],"poisonname":_oTop.attr(_aoTarget.parentNode.parentNode,"poisonname")}));
var _oWarningDom=_oTop.S("div_poision_warning",_oSelf._moWin),_oWarningDomPos=_oTop.calcPos(_oWarningDom);
if(_oTargetPos[3]+_oTargetPos[4]/2+_oWarningDomPos[4]/2<=_oSelf._moWin.document.body.clientWidth)
{
_oWarningDom.style.top=_oTargetPos[0]+_oTargetPos[5]+"px";
if(_oTargetPos[3]+_oTargetPos[4]/2>=_oWarningDomPos[4]/2)
{
_oWarningDom.style.left=_oTargetPos[3]+_oTargetPos[4]/2-_oWarningDomPos[4]/2-_oTargetPos[4]+"px";
}
else{
_oWarningDom.style.left="0px";
}
}
else{
_oWarningDom.style.top=_oTargetPos[0]+_oTargetPos[5]+"px";
_oWarningDom.style.left=_oSelf._moWin.document.body.clientWidth-_oWarningDomPos[4]-65+"px";
}
},setOutStatus:function(_aoTarget){
var _oTop=getTop(),_oSelf=this;
_oTop.attr(_aoTarget,"isOut","1");
_oSelf.hidePoisonWaring(_aoTarget);
},setInStatus:function(_aoTarget){
var _oTop=getTop(),_oSelf=this;
_oTop.attr(_aoTarget,"isOut","0");
},hidePoisonWaring:function(){
var _oTop=getTop(),_oSelf=this;
_oSelf._nTimeoutIndex=setTimeout(function(){
var _oWarningDom=_oTop.S("div_poision_warning",_oSelf._moWin);
if(_oWarningDom&&_oTop.attr(_oWarningDom,"isOut")!="0")
{
_oTop.removeSelf(_oWarningDom);
}
},100);
},evt:function(_aoEvents,_avModuleDom){
var _oSelf=this,_fSet=function(_aoModuleDom){
_aoModuleDom=typeof (_aoModuleDom)=="string"?_oSelf.S(_aoModuleDom):_aoModuleDom;
E(_aoEvents,function(_asItem){
var _sEvtValue=_qmBaseDM._oEvtMap[_asItem];
_sEvtValue&&addEvent(_aoModuleDom,_sEvtValue,function(_aoEvent){
_oSelf._handle(_aoModuleDom,_aoEvent,_asItem);
});
});
};
if(typeof (_avModuleDom)=="string")
{
_avModuleDom=_oSelf.S(_avModuleDom);
}
if(_avModuleDom.nodeType)
{
_fSet(_avModuleDom);
}
else{
E(_avModuleDom,function(_aoModuleDom){
_fSet(_aoModuleDom);
});
}
}};
},{_MOD_STATE:"_module_state_",_MOD_ATTR:"module",_CON_ATTR:"context",_AUX_ATTR:"aux",_oEvtMap:{mor:"mouseover",mot:"mouseout",ck:"click",md:"mousedown",mu:"mouseup",dck:"dblclick"}});
_oClassHome.qmReadMail=inherit("qmReadMail",_oClassHome._qmBaseDM,function(_aoSuper){
return {_ready:function(){
var _oSelf=this;
_oSelf.specialProcess();
_oSelf.processQQMailAppH5CardForWebmail();
_oSelf._initWinFunc.apply(_oSelf,arguments);
_oSelf._moWin.document.body.focus();
setTimeout(function(){
_oSelf._pageReady.apply(_oSelf,arguments);
_fFixXFDownload();
_oSelf.dealCustomUI('initPage',_oSelf._moWin);
_oSelf.osslogImgAttach_();
if(_oSelf._msModuleName==="qmConvMail")
{
for(_subMailId in _oSelf._moSubMails)
{
_oSelf.checkPoison(_subMailId);
_oSelf.checkOnlineDocStarStatus("0");
break;
}
}
else{
_oSelf.checkPoison();
_oSelf.checkOnlineDocStarStatus();
}
},50);
},_rInsPageEnd:function(){
var _oSelf=this,_oPE=_oSelf.S(_ID._sPageEnd);
if(getTop().S("qqmail_mailcontainer",_oSelf._moWin))
{
getTop().S("qqmail_mailcontainer",_oSelf._moWin).appendChild(_oPE);
}
else{
_oSelf._moWin.document.body.appendChild(_oPE);
}
show(_oPE,true);
},_fakeReadMail:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oCache=new QMCache({appName:"mail_rank"});
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&rank=$rank$&mailid=$mailid$&t=readsubmail&mode=fake&s=r2&base=$base$&pf=$pf$&folderid=$folderid$&folderkey=$folderkey$').replace({sid:getSid(),mailid:_oSelf.getMailId(),pf:rdVer.isPre(_oConfig.folderid)?1:0,folderid:_oConfig.folderid,folderkey:_oConfig.folderkey,rank:_oCache.getData(_oSelf.getMailId()),base:rdVer("BaseVer",0)}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(_abIsOk,_asParam){
var _sText=trim(_asParam);
if(_abIsOk&&_sText.indexOf("(")==0)
{
var _oJson=evalValue(_sText);
if(_oJson)
{
_oSelf._updatePreAndNext(_oJson);
}
}
else{
var _oFrmDoc=getActionWin().document;
_oFrmDoc.open();
_oFrmDoc.write(_asParam);
}
}});
},_flushFolder:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,sMailId=_oSelf.getMailId(),_oCacheData=QMMailCache.getData(sMailId);
if((_oConfig.bNewMail==1)&&(!_oCacheData||_oCacheData.bUnread===true))
{
folderOpt({bNewMail:_oConfig.bNewMail,sFolderId:_oConfig.folderid,sMailId:sMailId,oMatchTag:_oConfig.oMatchTag,oSysTag:_oConfig.oSysTag,bStar:_oConfig.bStar,bAddrvip:_oConfig.bAddrvip});
}
else{
getTop().recordCompareReadedMailId(sMailId);
}
},_setEvent:function(){
var _oSelf=this,_oWin=_oSelf._moWin;
_oSelf.evt(["ck","md","kd","mor","mot","mu"],_oWin.document.body);
_oSelf._initSelectAllEvt();
},_initWinFunc:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_oReadmailOptions=arguments[0];
_oWin.QMReadMail=_oSelf;
_oWin.go=function(_aoEvent,_asTmpl,_asOpt,_asBackurl,_asLocId){
var _oTarget={opt:_asOpt};
if(_asLocId)
{
_oTarget.more=["&loc=",_oSelf._moConfig.loc,_asLocId].join("");
}
_oSelf.optMail(_oTarget,_oSelf.getMailId(),_aoEvent);
};
_oWin.fw=function(_asFunc,_aoParamList){
callBack.call(_oSelf,_oSelf[_asFunc],_aoParamList);
};
_oWin.goback=function(){
_oSelf.goback();
};
_oWin.makeMailListUrl=function(){
return _oSelf._makeMailListUrl();
};
_oWin.setRemindSpan=function(_asMailId){
_oSelf.S('remind_edit_'+_asMailId).innerHTML=(reminddetail["mailid:"+_asMailId]||"").replace(/linktitle=.*&sid=/g,function(_asValue){
return _asValue.replace(/\'/g,"&#039;");
});
};
_oWin.setMoreOperation=function(_asId1,_asId2){
_oSelf._moMoreOptSel&&_oSelf._moMoreOptSel.switchPair(_asId1,_asId2);
},_oWin.fjGetFlvAttrUrl=function(){
return T("/cgi-bin/readtemplate?sid=$sid$&t=video_ref.smil&vsrc=$vsrc$").replace({sid:getSid(),vsrc:encodeURIComponent(_oWin.sFlvPlayUrl.substr(1))});
};
if(_oReadmailOptions.bNeedIdentifyLocation)
{
try{
initLocationIdentify(_oReadmailOptions.sLocationIdentifyUrl,_oReadmailOptions.sLocationWorkerImportUrl);
}
catch(e)
{
_oReadmailOptions.bNeedIdentifyLocation=false;
_oTop.ossLog('delay','all','stat=sgkv&group=readmailworkeriniterror&cnt=1');
}
}
},_initMemVar:function(_aoConfig,_aoMailInfo){
var _oSelf=this;
_oSelf._moConfig=_aoConfig;
_oSelf._moMailInfo=_aoMailInfo;
},_updatePreAndNext:function(_aoData){
var _oSelf=this,_sNext,_oPreNextTop=_oSelf.S(_ID._sNextMailTop),_oPreNextBt=_oSelf.S(_ID._sNextMailBt),_oNextNew=_oSelf.S(_ID._sNextNewMail);
if(_oPreNextBt&&_oPreNextTop&&_oNextNew)
{
if(_aoData.sPn.indexOf("\u4E0A\u4E00\u5C01")!=-1&&_aoData.sPn.indexOf("\u4E0B\u4E00\u5C01")!=-1)
{
_oPreNextTop.innerHTML=_oPreNextBt.innerHTML=_aoData.sPn;
}
if(_sNext=trim(_aoData.sPnNew))
{
_oNextNew.innerHTML=_sNext;
}
show(attr(_oSelf.S(_ID._sNextNewDiv),"mailid",_aoData.sPnNewMailId),_sNext!="");
}
},clearCache:function(){
getTop().QMMLCache.upVer();
rdVer(this.getMailId(),1);
},_onMoreOptSel:function(_asItemId){
var _oSelf=this,_sMailId=_oSelf.getMailId();
switch(_asItemId)
{case "delremark":
case "addremark":
_oSelf._moRemark.toggle(_sMailId);
break;
case "delremind":
case "addremind":
var _oLink=GelTags("a",S("remind_edit_"+_sMailId,document));
if(_oLink&&_oLink[0])
{
if(_aoItem.sId=="addremind")
{
fireMouseEvent(_oLink[0],"click");
}
else{
var _oMap=getUrlParams(S("remind_delete",document).href||location),_oFrm=document.remind_frm;
_oFrm.ruleid.value=_oMap["ruleid"];
_oFrm.from.value=_oMap["from"];
_oFrm.submit();
}
}
break;
case "print":
_oSelf.optMail2({opt:"print"});
break;
}
},_readMailFinish:function(_asFrom){
if(bnewwin)
{
var _oOpener=window.opener,_oSelf=this,_oConfig=_oSelf._moConfig;
try{
if(_oOpener&&_oOpener.readMailFinish)
{
_oOpener.readMailFinish(_oSelf.getMailId(),_oConfig.reandfw,_oConfig.folderid);
}
}
catch(e)
{
}
}
},getEditorContent:function(){
var _oSelf=this;
return _oSelf._moQReply&&_oSelf._moQReply.getContent();
},disableConfirm:function(){
var _oSelf=this;
return _oSelf._moQReply&&_oSelf._moQReply.disableConfirm();
},_startSubMod:function(_aoSubMod){
var _oSelf=this,_oModule,_oMailInfo=_oSelf._moMailInfo,_oContext=extend({},_oSelf._moContext,_aoSubMod,{oMailInstance:_oSelf}),_oConfig=_oSelf._moConfig;
switch(_oContext.sModuleName)
{case "qmRemark":
_oModule=_oSelf._moRemark=new _oClassHome.qmRemark(function(_asCase){
var _oMoreOptSel=_oSelf._moMoreOptSel;
if(_oMoreOptSel)
{
switch(_asCase)
{case "del":
_oMoreOptSel.switchPair("addremark","delremark");
break;
case "save":
_oMoreOptSel.switchPair("delremark","addremark");
}
}
QMMailCache.setExpire();
_oSelf.clearCache();
},_oContext);
break;
case "qmMoreOptSel":
_oModule=_oSelf._moMoreOptSel=new _oClassHome.qmMoreOptSel({oMoreOpt:_oConfig.oMoreOpt,fOnSelect:function(_asItemId){
_oSelf._onMoreOptSel(_asItemId);
}},_oContext);
break;
case "qmQReply":
_oModule=_oSelf._moQReply=new _oClassHome.qmQReply(_oConfig,_oMailInfo,{fCheckBcc:function(){
callBack.call(_oSelf,_oSelf.checkBcc,arguments);
},sSubTmp:""},_oContext);
break;
case "qmAntiSpam":
_oModule=_oSelf._moAntiSpam=new _oClassHome.qmAntiSpam(_oConfig,_oMailInfo,_oContext);
break;
case "qmMarkAdMail":
_oModule=_oSelf._moMarkAdMail=new _oClassHome.qmMarkAdMail(_oConfig,_oMailInfo,_oContext);
break;
case "qmReminder":
_oModel=_oSelf._moReminder=new _oClassHome.qmReminder(_oConfig,_oMailInfo,_oContext);
break;
case "qmSenderInfo":
_oModule=new _oClassHome.qmSenderInfo(_oConfig,_oMailInfo,_oContext);
break;
case "qmPlayerParser":
_oModule=new _oClassHome.qmPlayerParser({oContentDom:_oSelf.S(_ID._sContentDiv),bManuPlay:_oConfig.bMusicManuPlay},_oContext);
break;
case _sQMTRANSLATE:
if(getTop().goUserInfo.get("DEF_TRANSLATE")=="1")
{
loadJsFile("$js_path$webp/qmtranslate24e6ae.js",true,_aoLoadWin.document,function(){
waitFor(function(){
return _oSelf.S(_ID._sContentDiv)&&_aoLoadWin.QMTranslate;
},function(_abIsOK){
if(_abIsOK)
{
var _oContainer=_oSelf.S(_ID._sContentDiv);
new _aoLoadWin.QMTranslate({oDom:_oContainer});
}
});
});
}
break;
}return _oModule;
},_adjustMailContainer:function(){
var _oSelf=this,_oContainer=_oSelf.S(_ID._sMailContainer);
_oContainer.style.overflowY="scroll";
if(_oContainer.scrollHeight-_oContainer.offsetHeight>10)
{
_oContainer.style.height=_oContainer.scrollHeight+"px";
}
_oContainer.style.overflowY="";
},_sendCopyAction:function(_aoContentDiv){
var _oTop=getTop(),_oSelf=this,_bLock=false,_nX=0,_nY=0,_nHeight=0;
_oSelf._moWin.document.body.oncopy=function(_aoEvent){
if(!_bLock)
{
var _oTarget=_oTop.getEventTarget(_aoEvent),_sCopyContent="",_nMaxLen=256,_oItems=[[{sId:"",sItemValue:'<span class="icon_caution_s"></span>\u8BE5\u5730\u5740\u5B58\u5728\u4E0D\u826F\u5185\u5BB9\uFF0C\u5EFA\u8BAE\u505C\u6B62\u8BBF\u95EE',bDisSelect:true}],[{sId:"",sItemValue:'<span class="icon_info_s"></span>\u8BE5\u5730\u5740\u5B89\u5168\u6027\u65E0\u6CD5\u786E\u5B9A\uFF0C\u8BF7\u8C28\u614E\u6253\u5F00',bDisSelect:true}],""];
if(_oSelf._moWin.document.selection)
{
_sCopyContent=_oSelf._moWin.document.selection.createRange().text;
_nY=_oSelf._moWin.document.selection.createRange().offsetTop+bodyScroll(_oSelf._moWin.document,'scrollTop');
_nX=_oSelf._moWin.document.selection.createRange().offsetLeft;
_nHeight=_oSelf._moWin.document.selection.createRange().boundingHeight;
}
else{
if(_oTop.isObjContainTarget(_aoContentDiv,_oTarget))
{
_sCopyContent=_oSelf._moWin.getSelection();
var selection=_oSelf._moWin.getSelection();
if(selection.rangeCount>0)
{
var rect=selection.getRangeAt(0).getBoundingClientRect();
_nX=rect.left;
_nY=rect.top+bodyScroll(_oSelf._moWin.document,'scrollTop');
_nHeight=rect.height;
}
}
}
if(_sCopyContent!="")
{
if(_sCopyContent.length>_nMaxLen)
{
_sCopyContent=_sCopyContent.substring(0,_nMaxLen);
}
_bLock=true;
QMAjax.send(T("/cgi-bin/mail_spam?sid=$sid$&stat=getcopycontent&content=$content$&t=getcopycontent&action=copy_link").replace({sid:getSid(),content:_oTop.encodeURI(_sCopyContent)}),{method:"POST",onload:function(_abIsOk,_asParam){
_bLock=false;
if(_abIsOk)
{
if(_asParam!="2")
{
new QMMenu({oEmbedWin:_oSelf._moWin,sClassName:(_asParam==0?"tips_maliciousLink":"tips_unknowLink"),sid:"report",oItems:_oItems[_asParam],nWidth:237,nX:_nX,nY:_nY+_nHeight+5,bAutoClose:false});
}
}
}});
setTimeout(function(){
_bLock=false;
},5000);
}
}
};
},_pageReady:function(){
var _oTop=getTop(),_oSelf=this,_oWin=_oSelf._moWin,_oMailInfo=_oSelf._moMailInfo,_oConfig=_oSelf._moConfig,_oContentDiv=_oSelf.S(_ID._sContentDiv),_oFolder=S("folder_"+_oConfig.folderid,_oTop),_sBgUrl=_oWin.document.body.background;
if(!_oContentDiv)
{
return;
}
_oSelf._rInsPageEnd();
_oSelf._adjustMailContainer();
_oSelf._fakeReadMail();
_oConfig.bBccToMe=_isBccToMe(_oMailInfo);
_oConfig.sMailContent=_ID._sMailContainer;
_oSelf._readMailFinish();
_sBgUrl&&(_oContentDiv.style.backgroundImage="url("+_sBgUrl+")");
swapLink(_oContentDiv,_oConfig.disptype,_oWin,_oSelf.getMailId());
if(_oConfig.bNeedIdentifyLocation)
{
_oTop.locationIdentify(_oContentDiv,_fLocationIdentifyOptions({sMailId:_oSelf.getMailId()}));
}
_oSelf._sendCopyAction(_oContentDiv);
initMailSelect(_oConfig.oMoveItems,true,_oConfig.bOpenTag=="1",_oWin,_oConfig.folderid,_oConfig.bAutoTag);
_oSelf._startSubMod({sModuleName:"qmQReply"});
_oSelf._startSubMod({sModuleName:"qmMoreOptSel"});
_oSelf._startSubMod({sModuleName:"qmRemark"});
if(_oConfig.bReminder)
{
_oSelf._startSubMod({sModuleName:"qmReminder"});
}
_oSelf._startSubMod({sModuleName:"qmAntiSpam"});
_oSelf._startSubMod({sModuleName:"qmMarkAdMail"});
_oSelf._startSubMod({sModuleName:"qmSenderInfo"});
_oSelf._startSubMod({sModuleName:"qmPlayerParser"});
var _oBody=_oWin.document.body;
if(getUrlParams(getTop().location)["t"]!="newwin_frame"&&_oBody.scrollWidth>_oBody.clientWidth)
{
requestShowTip("tipRemindEdit",19,_oWin);
}
if(_oFolder&&_oFolder.parentNode.parentNode.id=="folder_pop_td")
{
new QMSender({oWin:_oWin,nCurFolderId:_oConfig.folderid,sWidth:210,sCurSaveFrom:_oConfig.saveFrom});
}
_oConfig.bClearRDCache&&_oSelf.clearCache();
_oSelf._sendTimeMail();
if(_oConfig.flowid)
{
ossLog("realtime","all","flowid="+_oConfig.flowid);
}
_oSelf._flushFolder();
getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,_oSelf.getMailId());
getTop().goUserInfo.deferget('DEF_TRANSLATE',function(_abWaitOK){
_oSelf._startSubMod({sModuleName:_sQMTRANSLATE});
_oSelf.rmLanguage(_oContentDiv);
});
_oSelf.checkDecryptMail();
_oSelf.showAD();
_oSelf.showQBTipBtn();
_oSelf._fixAbsoluteContent();
},_fixAbsoluteContent:function(){
var _oSelf=this;
var _oContentDiv=_oSelf.S(_ID._sContentDiv);
if(!_oContentDiv)
{
return;
}
var _nMaxBottom=0;
var _nWaitImgNodes=0;
var _nStartTime=(new Date()).getTime();
var _nEndTime;
function _fFixHeight()
{
if(_nMaxBottom&&_oTop.isShow(_oContentDiv))
{
var _oPos=_oTop.calcPos(_oContentDiv,'json');
_nMaxBottom-=_oPos.top;
debug('content height fix',_nMaxBottom);
if(_nMaxBottom>_oPos.height)
{
_oContentDiv.style.height=_nMaxBottom+'px';
_oTop.LogKV('readmail|fix|absolute_cont');
if(!_nEndTime)
{
setTimeout(function(){
_oTop.speedLog('1',_nEndTime-_nStartTime,'readmail');
},5000);
_nEndTime=(new Date()).getTime();
}
}
}
}
var _bRunAllImgReady=false;
function _fAllImgReady()
{
_bRunAllImgReady=true;
_oTop.E(_oContentDiv.getElementsByTagName('*'),function(_aoNode){
if(_aoNode.nodeType!=3)
{
if(_oTop.getStyle(_aoNode,'position')=='absolute'&&_oTop.attr(_aoNode,id)!="iframe_h5_qmail_card_webmail")
{
_nMaxBottom=Math.max(_oTop.calcPos(_aoNode,'json').bottom,_nMaxBottom);
}
}
});
_fFixHeight();
}
_oTop.E(_oContentDiv.getElementsByTagName('*'),function(_aoNode){
if(_aoNode.nodeType!=3)
{
if(_oTop.getStyle(_aoNode,'position')=='absolute'&&_oTop.attr(_aoNode,id)!="iframe_h5_qmail_card_webmail")
{
_nMaxBottom=Math.max(_oTop.calcPos(_aoNode,'json').bottom,_nMaxBottom);
}
if(_aoNode.tagName=='IMG')
{
if(_nWaitImgNodes++===0)
{
setTimeout(function(){
if(!_bRunAllImgReady)
{
_fAllImgReady();
}
},2000);
}
_aoNode.onerror=_aoNode.onload=function(){
_aoNode.onload=_aoNode.onerror=null;
if(--_nWaitImgNodes<=0)
{
_fAllImgReady();
}
};
}
}
});
_fFixHeight();
},_initSelectAllEvt:function(){
var _oTop=getTop(),_oSelf=this,_oWin=_oSelf._moWin;
addEvent(_oWin.document,"keydown",function(_aoEvent){
if(_aoEvent.ctrlKey&&_aoEvent.keyCode=="65")
{
_oSelf.doSelectAll(_aoEvent,_oSelf.S(_ID._sMailContainer));
}
});
},checkAttachImgSize_:function(_aoImgNodes){
var _oTop=getTop();
var _oSelf=this;
function _fGetImgSize(_aoImgNode)
{
if(_aoImgNode.naturalWidth)
{
_fCheckImgSize(_aoImgNode.naturalWidth,_aoImgNode.naturalHeight,_aoImgNode);
}
else if(_aoImgNode.width)
{
_oTop.rmClass(_aoImgNode,'readmail_limit_img_size');
var _nImgWidth=_aoImgNode.width;
var _nImgHeight=_aoImgNode.height;
_oTop.addClass(_aoImgNode,'readmail_limit_img_size');
_fCheckImgSize(_nImgWidth,_nImgHeight,_aoImgNode);
}
}
function _fCheckImgSize(_nWidth,_nHeight,_aoImgNode)
{
var _nCurWidth=_aoImgNode.width;
var _nCurHeight=_aoImgNode.height;
if(_nWidth>_nCurWidth||_nHeight>_nCurHeight)
{
_oTop.ossLogCustom('delay','all','attImgtobig',{src:_aoImgNode.src,max:{w:_nWidth,h:_nHeight},cur:{w:_nCurHeight,h:_nCurHeight}});
_oTop.ossLog('delay','all','kw=attImgtobig');
}
}
_oTop.E(_aoImgNodes,function(_aoImgNode){
if(_aoImgNode.complete)
{
_fGetImgSize(_aoImgNode);
}
else{
_aoImgNode.onload=function(){
_aoImgNode.onload=_aoImgNode.onerror=null;
_fGetImgSize(_aoImgNode);
};
_aoImgNode.onerror=function(){
_aoImgNode.onload=_aoImgNode.onerror=null;
};
}
});
},osslogImgAttach_:function(){
this.checkAttachImgSize_(getTop().CN('readmail_limit_img_size',this.S('attachment')));
},_sendTimeMail:function(){
var _oSTSpan=this.S(_ID._sSendTimeMsg),_oSelf=this,_oTop=getTop(),_aoParams=[];
if(_oSTSpan)
{
E(["year","month","day","hour","min"],function(_asItem){
_aoParams.push(attr(_oSTSpan,_asItem));
});
_oSTSpan.innerHTML=callBack(_getSendTimeMsg,_aoParams);
var _oEditSpan=this.S("editsendtime");
getTop().addEvent(_oEditSpan,"click",function(){
initTimeSendDlg({sendtimeyear:_oTop.S("sendtimeyear",_oTop.getMainWin()),sendtimemonth:_oTop.S("sendtimemonth",_oTop.getMainWin()),sendtimeday:_oTop.S("sendtimeday",_oTop.getMainWin()),sendtimehour:_oTop.S("sendtimehour",_oTop.getMainWin()),sendtimemin:_oTop.S("sendtimemin",_oTop.getMainWin()),confirmbtn:"\u786E\u5B9A",title:"\u4FEE\u6539\u65F6\u95F4",timetips:""},function(){
QMAjax.send(T(["/cgi-bin/mail_mgr?mailaction=mdy_sendtime&mailid=$mailid$&ef=js&resp_charset=UTF8","&sendtimeyear=$sendtimeyear$","&sendtimemonth=$sendtimemonth$","&sendtimeday=$sendtimeday$","&sendtimehour=$sendtimehour$","&sendtimemin=$sendtimemin$"]).replace({mailid:_oSelf.getMailId(),sendtimeyear:_oTop.S("sendtimeyear",_oTop.getMainWin()).value,sendtimemonth:_oTop.S("sendtimemonth",_oTop.getMainWin()).value,sendtimeday:_oTop.S("sendtimeday",_oTop.getMainWin()).value,sendtimehour:_oTop.S("sendtimehour",_oTop.getMainWin()).value,sendtimemin:_oTop.S("sendtimemin",_oTop.getMainWin()).value}),{method:"POST",onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oRet=evalValue(_asParam);
if(_oRet.errcode=="0")
{
showInfo("\u5B9A\u65F6\u90AE\u4EF6\u4FEE\u6539\u6210\u529F\uFF0C\u5C06\u5728\u60A8\u6307\u5B9A\u7684\u65F6\u95F4\u53D1\u51FA");
var _oParam=[_oTop.S("sendtimeyear",_oTop.getMainWin()).value,_oTop.S("sendtimemonth",_oTop.getMainWin()).value,_oTop.S("sendtimeday",_oTop.getMainWin()).value,_oTop.S("sendtimehour",_oTop.getMainWin()).value,_oTop.S("sendtimemin",_oTop.getMainWin()).value];
_oSTSpan.innerHTML=callBack(_getSendTimeMsg,_oParam);
}
else{
showError(_oRet.errmsg);
}
}
}});
},function(){
});
});
}
},checkDecryptMail:function(){
var _oSelf=this;
_oConfig=_oSelf._moConfig;
if(_oConfig.bEncrypt)
{
addEvent(_oSelf.S("decryptmail_pw"),"keydown",function(_aoEvent){
if(_aoEvent.keyCode=="13")
{
fireMouseEvent(_oSelf.S("decryptmail"),"click");
}
});
}
},decryptMail:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oWin=_oSelf._moWin,_sCode=encodeURIComponent(_oSelf.S("decryptmail_pw").value);
if(_sCode)
{
QMAjax.send(T("/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&action=decryptmail&t=success&secmailcode=$code$&ef=js&resp_charset=UTF8").replace({mailid:_asMailId,sid:getSid(),code:_sCode}),{method:"GET",onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oRet=evalValue(_asParam);
if(_oRet.errcode=="0")
{
_oSelf._moConfig.bEncrypt=false;
_oSelf.afterDecrytMail();
}
else{
showError(_oRet.errmsg);
}
}
}});
}
else{
showError("\u8BF7\u8F93\u5165\u5BC6\u7801");
_oSelf.S("decryptmail_pw").focus();
}
},afterDecrytMail:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig;
showInfo("\u90AE\u4EF6\u89E3\u5BC6\u6210\u529F");
if(_oConfig.bNeedReceipt&&_oConfig.bNewMail)
{
var _sUrl=_oSelf._moWin.location.href;
_oSelf.clearCache();
goUrl(_oSelf._moWin,cookQueryString(_sUrl,{force_needreceipt:1,r:Math.random()}));
}
else{
_clearReload(_oSelf.getMailId(),_oSelf._moWin);
}
},doSelectAll:function(_aoEvent,_aoDom){
var _oTop=getTop(),_oSelf=this,_oWin=_oSelf._moWin,_oDoc=_oWin.document;
if(_oSelf._moRemark.isFoucs())
{
return;
}
if(_oWin.getSelection)
{
var _oSelection=_oWin.getSelection(),_oRange=_oDoc.createRange();
_oSelection.rangeCount>0&&_oSelection.removeAllRanges();
_oRange.selectNode(_aoDom);
_oSelection.addRange(_oRange);
}
else{
var _oRange=_oDoc.body.createTextRange();
_oRange.moveToElementText(_aoDom);
_oRange.select();
}
_aoDom.scrollIntoView();
_oTop.preventDefault(_aoEvent);
},getMailInfo:function(){
return this._moMailInfo;
},updateMailSize:function(_abNoSet){
var _oSelf=this,_oWin=_oSelf._moWin,_oMailInfo=_oSelf._moMailInfo,_oTop=getTop(),_oUnRead=_oTop.S("submailCnt",_oWin),_oTotal=_oTop.S("submailCntAll",_oWin),_nUnReadCnt=_oTop.finds(".mailunread",_oWin).length,_nReadCnt=_oTop.finds(".mailread",_oWin).length,_nTotal=_nUnReadCnt+_nReadCnt;
if(_abNoSet!==true)
{
_oTotal&&(_oTotal.innerHTML=_nTotal);
_oUnRead&&(_oUnRead.innerHTML=_nUnReadCnt+"/");
}
return {nTotal:_nTotal,nUnReadCnt:_nUnReadCnt,nReadCnt:_nReadCnt};
},getCBInfo:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oMailInfo=_oSelf._moMailInfo,_oFrom=_oSelf.getFromInfo_(),_oStar=_oSelf.S(_ID._sImgStar),_oTopBtn=_oSelf.S(_ID._sTopBtn),_sSysTag=_oConfig.oSysTag||"",_oTagArr=[],_oSysTag={};
if(_sSysTag!="")
{
_oTagArr=_sSysTag.split("|");
}
for(var i=0;i<_oTagArr.length-1;i++)
{
if(_oTagArr[i]!="")
{
var _oTmp=_oTagArr[i].split(":");
if(_oTmp[0]&&_oTmp[1]!="")
{
_oSysTag[_oTmp[0]]=_oTmp[1];
}
}
}
return {oWin:_oSelf._moWin,sFid:_oConfig.folderid,bML:false,oMail:[{sMid:_oSelf.getMailId(),bSys:_oConfig.bSys,bAd:_oConfig.bAd,bUnr:false,bSubUnr:false,bStar:hasClass(_oStar,'qm_ico_flagon'),bTop:hasClass(_oTopBtn,'qm_ico_topon'),bTms:false,oSysTag:_oSysTag||{},oTagIds:_oConfig.oMatchTag,sSName:_oFrom.name,sSEmail:_oFrom.addr,oStar:_oStar,oTopBtn:_oTopBtn,oTCont:_oSelf.S(_ID._sTagContainer)}]};
},notify:function(_asCase,_asArg){
var _oSelf=this;
switch(_asCase)
{case "delsubmail":
var _oNums=_oSelf.updateMailSize();
if(_oSelf.dealCustomUI('delSubMailInGlobal',_oNums)!==false&&_oNums.nTotal<=0)
{
_oSelf.goback();
}
QMMailCache.setExpire();
break;
case "toRefer":
var _oSubMail=_oSelf._moSubMails[_asArg];
if(_oSubMail)
{
_oSubMail.seek();
}
break;
}
},modifyTag:function(_asTagId,_bDel){
var _oMatchTag=this._moConfig.oMatchTag;
if(!_oMatchTag)
{
return;
}
for(var _i=_oMatchTag.length-1;_i>=0;_i--)
{
if(_oMatchTag[_i]==_asTagId)
{
break;
}
}
if(_bDel)
{
if(_asTagId<0)
{
_oMatchTag.length=0;
}
else{
_oMatchTag.splice(_i,1);
}
}
else{
if(_i<0)
{
_oMatchTag.push(_asTagId);
}
}
},toAttach:function(_aoTarget){
var _oSelf=this,_oSplashDom=_oSelf.S(_ID._sAttachment+(_oSelf.attr(_aoTarget,"seq")||"")),_oDocElem;
function _fSplash(times,isNotInit)
{
var _fSelf=arguments.callee;
if(!isNotInit||!_fSelf.time)
{
_fSelf.orgclass=_oSplashDom.className;
_fSelf.time=0;
}
_oSplashDom.className=(_fSelf.time%2==0)?"toolbg":_fSelf.orgclass;
_oSplashDom.style.height=(_fSelf.time%2==0)?"auto":"auto";
if(++_fSelf.time<times)
{
setTimeout(function(){
_fSelf(times,true);
},70);
}
}
if(_oSplashDom)
{
_oDocElem=_oSelf._moWin.document.documentElement;
if(_oDocElem.scrollHeight<=_oDocElem.clientHeight)
{
_fSplash(6);
}
else{
scrollIntoMidView(_oSplashDom,_oDocElem,false,0,true);
_fSplash(4);
}
}
},prevandnext:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_sMailId=_oSelf.attr(_aoTarget,"mailid");
rdVer.log(_sMailId,"hit");
goUrl(_oSelf._moWin,["/cgi-bin/readmail?",rdVer.url(_sMailId,_oSelf._moConfig.folderid,"",_oSelf.attr(_aoTarget,"type")==="collo"||_oSelf._moWin.name=='readmail_float'?"3":"",false,"",false,"",false,_oSelf._moConfig.folderkey).split('?')[1],_oSelf._moWin.name=='readmail_float'?'&floatRead=true&nogoback=true':'',bnewwin?"&newwin=true":""].join(""),true);
_aoEvent&&preventDefault(_aoEvent);
},_makeMailListUrl:function(){
var _oConfig=this._moConfig;
return _MAIL_LIST1.replace({sid:getSid(),folderid:_oConfig.folderid,folderkey:_oConfig.folderkey,s:_oConfig.subtmpl,more:'&r='+Math.random()});
},goback:function(_aoTarget,_asMailId,_aoEvent,_abNoCache){
if(bnewwin)
{
goUrlTopWin("/cgi-bin/frame_html?sid="+getSid());
}
else{
trace("history back","","start","mail_list");
if(1||!QMHistory.tryBackTo("mail_list"))
{
var _oSelf=this;
if(_abNoCache||this._moConfig.folderid=='3'||this._moConfig.folderid=='4')
{
getTop().QMMLCache.upVer();
}
var _sUrl=getTop().QMMLCache.url(QMHistory.getUrl("mail_list")||_oSelf._makeMailListUrl(),{},true);
_oSelf._moWin.location.href=_sUrl;
waitFor(function(){
return !!S("list",getMainWin());
},function(_abIsOK){
if(_abIsOK)
{
bodyScroll(_oSelf._moWin,"scrollTop",getTop().gnMailListPos);
}
});
}
}
preventDefault(_aoEvent);
},tag:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this;
QMTag.readclose(_aoEvent,_oSelf.getCBInfo());
},starMail:function(_aoTarget){
var _oSelf=this;
starMail(null,extend(_oSelf.getCBInfo(),{oncomplete:function(_aoCBInfog,_abIsSet){
_oSelf.clearCache();
var _oStarStatus=_oSelf.S(_ID._sStarStatus),_oMailtopStatus=_oSelf.S(_ID._sMailtopStatus),_oStarTopStatus=_oSelf.S(_ID._sStarTopStatus);
if(_abIsSet)
{
if(!isShow(_oStarTopStatus)&&!isShow(_oMailtopStatus))
{
show(_oStarStatus,_abIsSet);
}
else{
show(_oMailtopStatus,!_abIsSet);
show(_oStarTopStatus,_abIsSet);
}
}
else{
if(isShow(_oSelf.S(_ID._sStarTopStatus)))
{
show(_oStarTopStatus,_abIsSet);
show(_oMailtopStatus,!_abIsSet);
}
else{
show(_oStarStatus,_abIsSet);
}
}
return true;
}}));
},topMail:function(_aoTarget){
var _oSelf=this;
topMail(null,extend(_oSelf.getCBInfo(),{oncomplete:function(_aoCBInfog,_abIsSet){
_oSelf.clearCache();
var _oStarStatus=_oSelf.S(_ID._sStarStatus),_oMailtopStatus=_oSelf.S(_ID._sMailtopStatus),_oStarTopStatus=_oSelf.S(_ID._sStarTopStatus);
if(_abIsSet)
{
if(!isShow(_oStarTopStatus)&&!isShow(_oStarStatus))
{
show(_oMailtopStatus,_abIsSet);
}
else{
show(_oStarStatus,!_abIsSet);
show(_oStarTopStatus,_abIsSet);
}
}
else{
if(isShow(_oStarTopStatus))
{
show(_oStarTopStatus,_abIsSet);
show(_oStarStatus,!_abIsSet);
}
else{
show(_oMailtopStatus,_abIsSet);
}
}
return true;
}}));
},getQMPreviewer:function(_afComplete){
var _oSelf=this,_oTop=getTop();
if(_oTop.QMPreviewer)
{
_afComplete&&_afComplete(_oTop.QMPreviewer);
}
else{
loadCssFile("$css_path$../js/com/kits/qmpreviewer/css/previewer2675d2.css",true,_oTop.document);
loadJsFile("$js_path$webp/com/kits/qmpreviewer32c494.js",true,_oTop.document,function(){
_afComplete&&_afComplete(_oTop.QMPreviewer);
});
}
},showScanImg:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oAttachItem=parents("div.attachitem",_aoTarget)[0],_oPreviewItem=finds("a[ck='previewAttach2']",_oAttachItem)[0];
showTwoDCodeImgMenu(_oSelf._moWin,_aoTarget,attr(_oPreviewItem,"filename"),attr(_oPreviewItem,"down"));
preventDefault(_aoEvent);
},previewAttach3:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oTarget=S(["AttachIconA",_asMailId,(_oSelf.attr(_aoTarget,"idx")||0)].join(""),_oSelf._moWin);
fireMouseEvent(_oTarget,"click");
},previewAttach2:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this;
function _previewAttach2()
{
var _fIsTimeout=function(_aoTarget){
var _sTimeout=_aoTarget&&_aoTarget.getAttribute('timeout');
if(_sTimeout&&_sTimeout=="1")
{
return true;
}
return false;
},_fGetAllList=function(){
var _oItem,_nIdx=0,_oList=[];
while(_oItem=_fGetFileList(_nIdx))
{
_oList.push(_oItem);
_nIdx++;
}
return _oList;
},_fGetFileList=function(_asRank,_anOption){
var _oRe={},_oTarget=S(["AttachIconA",_asMailId,_asRank].join(""),_oSelf._moWin),_nCnt=+_asRank;
for(_nCnt+=_anOption;_oTarget&&_fIsTimeout(_oTarget);_nCnt+=_anOption)
{
_oTarget=S(["AttachIconA",_asMailId,_nCnt].join(""),_oSelf._moWin);
}
_nCnt-=_anOption;
if(!_oTarget)
{
return;
}
var _sDown=_oTarget.getAttribute('down'),_oTemp=S(["AttachIconA",_asMailId,(_nCnt-1)].join(""),_oSelf._moWin);
if(_oTemp&&_oTemp.getAttribute('down')===_sDown)
{
return;
}
E({bBigAttach:"bigattach",sName:"filename",sUriFileName:"urifilename",sDown:"down",sDownPage:"downpage",sUrl:"url",sType:"viewmode",sBytesize:"filebyte",sThumb:"iconurl",sFileIdx:"idx",sAttid:"attid",sFid:"fid",sExptime:"exptime",bIsTimeout:"timeout"},function(_aoItem,_asIdx){
_oRe[_asIdx]=_oSelf.attr(_oTarget,_aoItem);
});
_oRe.sUrl=QMDistributeDomain.getHost()+_oRe.sUrl;
_oRe.sDown=QMDistributeDomain.getHost()+_oRe.sDown;
_oRe.sThumb=_oRe.sThumb&&(''+_oRe.sThumb).indexOf('xdisk')==-1?QMDistributeDomain.getHost()+_oRe.sThumb:null;
_oRe.sFrom=_oRe.bBigAttach?"bigattach":"attach";
_oRe.sSuffix=_oRe.sName?(_oRe.sName.split(".").pop()||""):"";
if(!_oRe.sAttid)
{
_oRe.sAttid=_oRe.sDown.split("att=").pop();
}
if(_oRe.sDown)
{
_oRe.sTwoDCodeUrl=twoDCodeImgUrl(_oRe.sDown);
}
return _oRe;
};
if(_fIsTimeout(_aoTarget))
{
return;
}
_oSelf.getQMPreviewer(function(_aoQMPreviewer){
var _oCallBacks={fNext:function(_aoCurFileInfo){
var _nIdx=parseInt(_aoCurFileInfo.sFileIdx)+1;
return _fGetFileList(_nIdx,1);
},fPrev:function(_aoCurFileInfo){
var _nIdx=parseInt(_aoCurFileInfo.sFileIdx)-1;
return _fGetFileList(_nIdx,-1);
},fFrwd:function(_aoCurFileInfo){
var _fGetUrlParam=function(_asUrl,_asName){
var _oReg=new RegExp([_asName,"=([^&]*)"].join(""));
_oResult=_oReg.exec(_asUrl);
return _oResult?_oResult[1]:"";
};
if(_aoCurFileInfo.bBigAttach)
{
goNewWin(_BIG_ATT_FW_SEND.replace({sid:getSid(),attachid:encodeURIComponent(_aoCurFileInfo.sAttid),urifilename:_aoCurFileInfo.sUriFileName,filesize:_aoCurFileInfo.sBytesize,exptime:_aoCurFileInfo.sExptime,k:_fGetUrlParam(_aoCurFileInfo.sUrl,"k"),code:_fGetUrlParam(_aoCurFileInfo.sUrl,"code"),fid:_fGetUrlParam(_aoCurFileInfo.sUrl,"fid")}));
}
else{
goNewWin(_ATT_FW_SEND.replace({sid:getSid(),mailid:_asMailId,attachid:encodeURIComponent(_aoCurFileInfo.sAttid),attachname:_aoCurFileInfo.sAttid,fileextenal:_aoCurFileInfo.sSuffix,filebyte:_aoCurFileInfo.sBytesize}));
}
}};
_aoQMPreviewer.show(_fGetFileList(_oSelf.attr(_aoTarget,"idx")),_oCallBacks);
});
}
if(_oSelf.attr(_aoTarget,"ispoison")=="1")
{
_oSelf.confirmOpen({msg:"\u9644\u4EF6\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\u6216\u6B3A\u8BC8\u4FE1\u606F\uFF0C\u8BF7\u52FF\u9884\u89C8\u3002",btnTxt:"\u7EE7\u7EED\u9884\u89C8",kvKey:"preview"},function(){
_previewAttach2();
});
return;
}
else{
_previewAttach2();
}
},previewAttach:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_sReadMail=T(_READMAIL_).replace({sid:getSid(),mailid:_asMailId}),_sUrl=T("$url$&nocheckframe=true&t=attachpreviewer&select=$select$&selectfile=$selectfile$&seq=$seq$").replace({url:_sReadMail,select:_oSelf.attr(_aoTarget,"select"),seq:_oSelf.attr(_aoTarget,"seq")||"",selectfile:_oSelf.attr(_aoTarget,"selectfile")||""});
if(getTop().QMDistributeDomain.isRelativeUrl(_sUrl))
{
_sUrl=getTop().getTopHost()+_sUrl;
}
if(_oSelf.attr(_aoTarget,"ispoison")=="1")
{
getTop().LogKV("attach|poison|previewAttach");
_oSelf.confirmOpen({msg:"\u9644\u4EF6\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\u6216\u6B3A\u8BC8\u4FE1\u606F\uFF0C\u8BF7\u52FF\u9884\u89C8\u3002",btnTxt:"\u7EE7\u7EED\u9884\u89C8",kvKey:"preview"},function(){
window.open(_sUrl,"_blank");
});
}
else{
window.open(_sUrl,"_blank");
}
preventDefault(_aoEvent);
},editOnlineDoc:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_sFileId=_oTop.attr(_aoTarget,"onlineDocKey"),_sReadUrl=["/cgi-bin/docedit_read?t=online_doc.html&key=",_sFileId].join(""),_sNewWinEditUrl=[_oTop.location.protocol,"//",_oTop.location.hostname,"/cgi-bin/frame_html?t=newwin_frame&sid=",_oTop.getSid(),"&url=",encodeURIComponent(_sReadUrl)].join("");
_oTop.open(_sNewWinEditUrl,"_blank");
},exportOnlineDoc:function(_aoTarget,_asMailId,_aoEvent){
var _sFileId=_oTop.attr(_aoTarget,"onlineDocKey"),_sFileName=_oTop.attr(_aoTarget,"filename"),_sExportDoc=["/cgi-bin/docedit_redirect?func=export&sid=",_oTop.getSid(),"&key=",_sFileId,"&name=",encodeURIComponent(_sFileName)].join("");
window.open(_sExportDoc,"actionFrame");
},viewOnlineDoc:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_sFileId=_oTop.attr(_aoTarget,"onlineDocKey"),_sViewUrl=["/cgi-bin/docedit_list?t=online_doc&page=0&pagesize=40&sid=",_oTop.getSid(),"&viewkey=",_sFileId].join("");
_oTop.getMainWin().location.href=_sViewUrl;
_oTop.switchFolder("folder_attach");
},starOnlineDoc:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_sFileId=_oTop.attr(_aoTarget,"onlineDocKey");
_oTop.QMAjax.send("/cgi-bin/docedit_modify?t=online_doc.json",{content:_oTop.TE(["func=add&key=$sFileId$"]).replace({sFileId:_sFileId}),method:"POST",onload:function(_abIsOk,_asParam){
var _sMsg="\u6536\u85CF\u5931\u8D25";
if(_abIsOk)
{
try{
var _oResult=_oTop.evalValue(_asParam);
if(_oResult.ret==0)
{
_oTop.show(_aoTarget,false);
_oTop.show(_oSelf.S("span_stared_"+_sFileId),true);
return;
}
}
catch(e)
{
}
}
_oTop.showError(_sMsg);
}});
},playAttach:function(_aoTarget){
var _oSelf=this,_spans=GelTags("span",_aoTarget.parentNode.parentNode),_span0=_spans.length==0?{}:_spans[0],_oContainer=_oSelf.S(_ID._sMp3PlayerContainer);
if(_span0.getAttribute("player"))
{
show(_oContainer,true);
if(_oContainer.getAttribute("uin_play_id"))
{
getTop().QMPlayer.delSkinById(_oContainer.getAttribute("uin_play_id"));
}
var _sUid="uni_id"+(+new Date());
_oContainer.setAttribute("uin_play_id",_sUid);
audioPlay({id:_sUid,container:_oContainer,url:_span0.getAttribute("player"),title:_span0.innerHTML,autoplay:true,global:true});
return true;
}
return false;
},attachBatchSetFlag:function(_aoTarget,_asMailId,_aoEvent){
var _sAction=attr(_aoTarget,"action"),_sAttachSetFlagKey,_oParam=[];
if("set"===_sAction)
{
var _oNeedSetFlagDoms=finds(".attachitem a.needSetFlag[flag='0']",getMainWin());
E(_oNeedSetFlagDoms,function(_aoNeedSetFlagDom){
_sAttachSetFlagKey=attr(_aoNeedSetFlagDom,"attachKey");
_oParam.push(_sAttachSetFlagKey);
});
if(_oParam.length===0)
{
showError("\u9644\u4EF6\u5DF2\u6536\u85CF");
return;
}
attachSetFlag(_oParam.join(","),true,function(){
E(_oNeedSetFlagDoms,function(_aoNeedSetFlagDom){
attr(_aoNeedSetFlagDom,"flag","1");
show(_aoNeedSetFlagDom,false);
show(_aoNeedSetFlagDom.nextSibling,true);
});
},{sLoc:"attachfolder,col_all",sOsstype:"attach_allCollect_atRead"});
getTop().LogKV({sValue:'kv_click|collect_all_attachs'});
}
},checkdownload:function(_aoTarget,_asMailId,_aoEvent){
new QMDialog({sId:"checkdownload",sTitle:"\u4E0B\u8F7D\u63D0\u901F",sUrl:T("/cgi-bin/readtemplate?sid=$sid$&t=readmail_checkdownload").replace({sid:getSid()}),nWidth:461,nHeight:175});
preventDefault(_aoEvent);
return true;
},checkBcc:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this;
if(_oSelf._moConfig.bBccToMe)
{
attr(_oSelf.S(_ID._sQSource),"checkBcc",1);
new QMDialog({sId:"reply_dlg",sTitle:"\u56DE\u590D\u63D0\u793A:",sBodyHtml:_TEMPLATE._REPLY_DLG.toString(),sFootHtml:_TEMPLATE._REPLY_DLG_FOOT.toString(),onshow:function(){
this.S("replyall").focus();
},onload:function(){
var _oDlg=this;
addEvent(_oDlg.S("replyall"),"click",function(){
_oSelf._moConfig.bBccToMe=false;
attr(_oSelf.S(_ID._sQSource),"checkBcc",0);
if(_aoTarget.tagName=="TEXTAREA")
{
_oSelf._moQReply.focus();
}
else{
_oSelf.optMail({opt:"reply_all"},_asMailId);
}
_oDlg.close();
});
addEvent(_oDlg.S("reply"),"click",function(_oEvent){
attr(_oSelf.S(_ID._sQSource),"checkBcc",0);
_oSelf.optMail({opt:"reply"},_asMailId);
_oDlg.close();
});
addEvent(_oDlg.S("cancel"),"click",function(){
_oDlg.close();
});
}});
preventDefault(_aoEvent);
return true;
}
},setAutoDel:function(_aoTarget,_asMailId){
var _oSelf=this,_oWin=_oSelf._moWin,_oConfig=_oSelf._moConfig;
if(_oConfig.xqqstyle=="6")
{
_createForm({oWin:_oWin,sAction:"/cgi-bin/mail_mgr"},{mailid:_asMailId,mailaction:"autodel",reporttype:_attr(_aoTarget,"flag"),s:"autodel"}).submit();
}
},mailRecall:function(_aoTarget,_asMailId){
var _oTop=getTop(),_sLocCnt=attr(_aoTarget,"loccnt"),_sMid=attr(_aoTarget,"mid"),_sMDate=attr(_aoTarget,"mdata"),_sOdd=attr(_aoTarget,"odd"),_bIsSlefSend=(_oTop.g_encryptuin==attr(_aoTarget,"u")),_sActId=0;
if(_sLocCnt>0&&_sOdd!="0")
{
_sActId=1;
function recallCheck()
{
_oTop.recallConfirm(_sMid,_aoTarget,{oninit:function(_aoDom){
this._moDom=_aoDom;
this._msTime=_aoDom.getAttribute("time");
this._msMailid=_asMailId;
},onbeforesend:function(){
},onsuccess:function(){
_oTop.reloadFrm(_oTop.getMainWin());
_oTop.rdVer("BaseVer",-1);
},onerror:function(){
this._moDom=null;
}});
}
QMAjax.send(T("/cgi-bin/send_status?t=send_status.json&s=mailrecallv2&messageid=$msgid$&time=$time$&sid=$sid$&ef=js&mailid=$mailid$&checkonly=1").replace({sid:getSid(),msgid:_sMid,time:attr(_aoTarget,"time"),mailid:_asMailId}),{method:"GET",timeout:3000,onload:function(_abIsOk,_avParam){
if(_abIsOk)
{
var _oData=eval(["(",_avParam,")"].join(""));
if(_oData.result=="0")
{
recallCheck();
}
else{
msgBox("\u64A4\u56DE\u5931\u8D25\uFF0C\u6B64\u90AE\u4EF6\u53D1\u4EF6\u4EBA\u4E0D\u662F\u5F53\u524D\u8D26\u53F7\uFF0C\u65E0\u6CD5\u64A4\u56DE","dialog");
}
}
else{
recallCheck();
}
}});
}
else{
var _sMsg,_sTitle;
if(_sOdd=="0")
{
_sActId=2;
_sTitle='\u6B64\u90AE\u4EF6\u4E0D\u652F\u6301\u88AB\u64A4\u56DE';
_sMsg='\u6B64\u90AE\u4EF6\u8DDD\u53D1\u9001\u65F6\u5DF2\u8D85\u8FC715\u5929\uFF0C\u65E0\u6CD5\u64A4\u56DE\u3002';
}
else{
_sActId=3;
_sTitle='\u6B64\u90AE\u4EF6\u53D1\u5F80\u975EQQ\u90AE\u7BB1\uFF0C\u4E0D\u652F\u6301\u64A4\u56DE\u3002';
_sMsg='\u4EC5\u652F\u6301\u64A4\u56DE\u53D1\u5F80QQ\u90AE\u7BB1\uFF0C\u4E14\u5BF9\u65B9\u672A\u8BFB\u7684\u90AE\u4EF6\u3002';
}
msgBox(T(['<b class="b_size">$t$</b>','<div style="overflow:hidden;margin-top:5px;">','$m$','</div>']).replace({t:_sTitle,m:_sMsg}),"dialog");
}
getTop().LogKV("sended|readmail|mailrecall");
getTop().QMMLCache.upVer();
},xfDl:function(){
var _oXfLinkArray=attr(arguments[0],"oXfLinkArray").split("&&&");
_oXfLinkArray=_oXfLinkArray.slice(0,_oXfLinkArray.length-1);
if(_oXfLinkArray.length<1)
{
return;
}
var _fCallback=function(_asState,_anFail){
switch(_asState)
{case "check":
showProcess(1,true,"\u6B63\u5728\u68C0\u6D4B\u65CB\u98CE...");
break;
case "get_url":
showProcess(1,true,"\u6B63\u5728\u83B7\u53D6\u4E0B\u8F7D\u94FE\u63A5...");
break;
case "load_err":
showProcess(0);
showError("\u65CB\u98CE\u52A0\u8F7D\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");
break;
case "geturl_err":
showProcess(0);
showError(_anFail+"\u4E2A\u6587\u4EF6\u94FE\u63A5\u83B7\u53D6\u5931\u8D25");
break;
case "check_err":
showProcess(0);
if(confirm("\u60A8\u8FD8\u6CA1\u5B89\u88C5QQ\u65CB\u98CE\uFF0C\u73B0\u5728\u53BB\u4E0B\u8F7D\u5B89\u88C5\u4E48\uFF1F\u5B89\u88C5\u5B8C\u540E\u8BF7\u5237\u65B0\u672C\u9875\u9762\u3002"))
{
window.open("http://xf.qq.com/xf2/index.html");
}
break;
}
};
var _oBatchDownloader=new (getTop().clsXfBatchDownload)(_oXfLinkArray,_fCallback);
},markReadStatus:function(_aoTarget){
var _oSelf=this,_oEmbedWin=_oSelf._moWin,_sId="menu_mark_read_status",_sDisplayOn="",_sDisplayOff="",_oMenuObj,_MARK_READ_STATUS_T=T(['<div style="padding: 8px 2px 8px 0;">','<div style="height:14px;line-height:14px;">\u81EA\u52A8\u6807\u8BB0\u4E3A\u5DF2\u8BFB:</div>','<div id="switch_on" style="display:$displayon$;">','<div style="padding: 12px 12px;"><a class="btn_blue" href="javascript:;">\u5F00\u542F</a></div>','</div>','<div id="switch_off" style="display:$displayoff$;">','<div style="padding: 12px 12px;" class="green">\u5DF2\u5F00\u542F<a class="btn_gray" href="javascript:;" style="margin-left:10px;">\u5173\u95ED</a></div>','</div>','<div style="border-top:1px solid #ccc;padding-top:10px;white-space:normal;line-height:1.5;">\u5F00\u542F\u540E\uFF0C\u8BE5\u53D1\u4EF6\u4EBA\u7684\u65B0\u90AE\u4EF6\u5C06\u4F1A\u81EA\u52A8\u6807\u8BB0\u4E3A\u5DF2\u8BFB\uFF0C\u8BA9\u60A8\u4E0D\u53D7\u672A\u8BFB\u6570\u7684\u5E72\u6270\u3002</div>','</div>']),_oPos=calcPos(arguments[0]),_oConf,_oMark=finds(".autoMarkMail span",_oEmbedWin)[0],_sAddr=attr(_aoTarget,"addr"),_nPageWdith=S("subject",_oEmbedWin).clientWidth;
hasClass(_oMark,"ico_autoMark_off")?(_sDisplayOff="none"):(_sDisplayOn="none");
_oConf={nArrowPos:_oPos[1]-_nPageWdith+220,bAutoClose:false,oEmbedWin:_oEmbedWin,sId:_sId,nX:_oPos[1]-19,nY:_oPos[0]+19,nWidth:239,oItems:[{nHeight:"auto",bDisSelect:true,sItemValue:_MARK_READ_STATUS_T.replace({displayon:_sDisplayOn,displayoff:_sDisplayOff})}],onshow:function(){
var _oSwitchOn=finds('#'+_sId+'_QMMenu_switch_on div a',_oEmbedWin)[0],_oSwitchOff=finds('#'+_sId+'_QMMenu_switch_off div a',_oEmbedWin)[0],_oSwitchOnDiv=S(_sId+"_QMMenu_switch_on",_oEmbedWin),_oSwitchOffDiv=S(_sId+"_QMMenu_switch_off",_oEmbedWin),_oMenu=this;
function _getSwitchCallback(_abSwitch)
{
var _sUrl=T(['/cgi-bin/config_blackwhitelist?','sid=$sid$&Fun=addad','&addr=$addr$:$status$','&from=self']).replace({sid:getSid(),addr:_sAddr,status:(_abSwitch?'0':'1')});
return function(){
_oMenu.close();
QMAjax.send(_sUrl,{onload:function(_abFlag,_asParam){
if(_abFlag)
{
_oSelf.clearCache();
showInfo("\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F",3000);
rmClass(_oMark,_abSwitch?"ico_autoMark_on":"ico_autoMark_off");
addClass(_oMark,_abSwitch?"ico_autoMark_off":"ico_autoMark_on");
}
else{
showError(_abSwitch?"\u5173\u95ED\u5931\u8D25":"\u6253\u5F00\u5931\u8D25");
}
}});
};
}
_oSwitchOn.onclick=_getSwitchCallback(false);
_oSwitchOff.onclick=_getSwitchCallback(true);
}};
_oMenuObj=new QMMenu(_oConf);
},optMail2:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oWin=_oSelf._moWin,_sTarget="_blank",_sOpt=_oSelf.attr(_aoTarget,"opt"),_sReadMail=T(_READMAIL_).replace({sid:getSid(),mailid:_asMailId});
switch(_sOpt)
{case "remind":
_sReadMail=T("/cgi-bin/readtemplate?t=calendar&sid=$sid$&from=readmail&cmd=moncal,,new,$subject$,mail,$mailid$").replace({sid:getSid(),mailid:_asMailId,subject:encodeURIComponent(_oSelf._moMailInfo.subject||"(\u65E0\u4E3B\u9898)")});
_sTarget="mainFrame";
rdVer(_asMailId,1);
break;
case "print":
_sReadMail+=T("&t=readmail_print&s=$s$&filterflag=true").replace({s:_oSelf.attr(_aoTarget,"s")||"print"});
break;
case "mime":
_sReadMail+="&action=readmailmime";
break;
case "dleml":
_sReadMail+="&action=downloademl";
_sTarget="actionFrame";
break;
case "code":
_sReadMail+="&action=readmailcode";
break;
case "fwgroup":
_sReadMail+="&t=compose_group&s=forward";
_sTarget="mainFrame";
break;
case "note":
_sReadMail+="&notefmt=1&t=note_edit_show&from=readmail";
_sTarget="mainFrame";
break;
case "fweml":
_sReadMail+="&t=compose&s=forward&action=readmaileml";
_sTarget="mainFrame";
break;
case "addc":
showProcess(1,true,"\u8054\u7CFB\u4EBA\u6DFB\u52A0\u4E2D...",null,false);
var _oDom=_aoTarget.parentNode.parentNode.parentNode.getElementsByTagName('span');
var _sEmail='',_sUsername='';
for(var i=0,l=_oDom.length;i<l;i++)
{
if(_oSelf.attr(_oDom[i],"mailhtml")=="operhidepanel")
{
_sEmail=_oSelf.attr(_oDom[i],"e");
_sUsername=_oSelf.attr(_oDom[i],"n");
break;
}
}
if(_sEmail==''&&_sUsername=='')
{
showError('\u8054\u7CFB\u4EBA\u65B0\u5EFA\u5931\u8D25');
return;
}
QMAjax.send(T('/cgi-bin/addr_addedit?sid=$sid$&category=&isqqgroup=&addr_errorflag=&OperType=ADD&Type=&GROUPLIST=&s=addfrommail&UseFreq=&USERNAME=$username$&USEREMAILNAME=$email$&USEREMAILNAME=&MOBILEPHONE=&PHS=&NICKNAME=&BRITHDAY=&MAILBOX_BACK=&STREET=&COMPANY=&NOTES=&list_index=&ef=js&inputcharset=utf8').replace({sid:getSid(),username:encodeURIComponent(_sUsername),email:encodeURIComponent(_sEmail)}),{method:"POST",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(_abIsOk,_asParam){
var _sText=trim(_asParam);
if(_abIsOk&&(_sText.indexOf("(")==0||_sText.indexOf("{")==0))
{
var _oJson=evalValue('('+_sText+')');
if(_oJson)
{
showProcess(0);
if(_oJson.errmsg)
{
showError(_oJson.errmsg);
}
else{
showInfo(_oJson.msg);
_aoTarget.style.display='none';
_aoTarget.nextSibling.style.display='';
_aoTarget.nextSibling.setAttribute('addrid',_oJson.addrid);
getTop().QMProfileTips.clearInfoCard(getTop().getMainWin());
rdVer(_asMailId,1);
}
}
}
else{
showError('\u8054\u7CFB\u4EBA\u65B0\u5EFA\u5931\u8D25');
}
}});
return;
break;
case "editc":
_sReadMail=_sReadMail.replace('readmail','addr_detail');
_sReadMail+="&AddrID="+_oSelf.attr(_aoTarget,"addrid")+"&t=addr_detail_edit&s=edit&s=edit&&grpid=&category=all&rmqqgroup=1";
_sTarget="mainFrame";
break;
default:
break;
}_oWin.open(_sReadMail,_sTarget);
preventDefault(_aoEvent);
_oSelf.dealCustomUI('closePage');
},newWinRead:function(_aoTarget,_asMailId,_aoEvent){
getTop().QMMLCache.upVer();
goNewWin(this._moWin.location,false);
preventDefault(_aoEvent);
},createRule:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_bIsAd=_oSelf.getCBInfo().oMail[0].bAd,_nIsTuan=_oSelf.attr(_aoTarget,"istuan")||0,_oTop=getTop();
_oTop.loadingBox({model:"\u53CD\u5783\u573E",js:["$js_path$webp/qmantispam264eed.js"],oncheck:function(){
return !!getTop().QMAntiSpam;
},onload:function(){
var _oSpam=new QMAntiSpam.qmExbookEmlMgr({sMailId:_asMailId,from:_oSelf.getMailInfo().from});
_oSpam.book2(_nIsTuan,function(){
},_bIsAd);
}});
preventDefault(_aoEvent);
getTop().LogKV({sValue:'receiverule|readmail|createrule'});
},checkContactsEmails:function(_aoTarget,_asMailId,_aoEvent){
this.dealCustomUI('checkContactsEmails',arguments);
},delMail:function(_aoTarget){
var _oSelf=this,_oWin=_oSelf._moWin,_bRet=false;
getTop().QMMLCache.upVer();
_bRet=rmMail(_oSelf.attr(_aoTarget,"opt")||0,extend(_oSelf.getCBInfo(),{oncomplete:function(_aoCBInfo,_aoResult){
_oSelf.dealCustomUI('MailMethod',[_aoCBInfo,'delMail',_aoResult]);
var _sUrl=_aoResult.url||"";
if(_sUrl.indexOf("/cgi-bin/readmail?")!=-1)
{
var _sTemplate=getUrlParams(_sUrl||_oSelf._moWin.location)["t"];
var _sType=(_sTemplate=="readmail_ad"||_sTemplate=="readmail_ad_conversation")?"collo":"";
_oSelf.prevandnext({mailid:getUrlParams(_sUrl||_oWin.location)["mailid"],type:_sType});
return true;
}
}}));
_bRet&&QMHistory.recordActionFrameChange();
},markAsFinished:function(_aoTarget){
var _oSelf=this,_oTop=getTop(),_oWin=_oSelf._moWin;
_oTop.markAsFinished("readmail",function(_aoMsg){
_oTop.removeSelf(_oTop.S("pending_flag",_oWin));
_oSelf.clearCache();
});
},optMail:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oWin=_oSelf._moWin,_oConfig=_oSelf._moConfig,_sOpt=_oSelf.attr(_aoTarget,"opt"),_sPlusContent=_oSelf.getEditorContent(),_sFolderId=_oConfig.folderid,_sCpsMailUrl=_READMAIL_CPS_URL.replace({sid:getSid(),t:_oSelf.attr(_aoTarget,"t"),s:_sOpt,mailid:_asMailId,disptype:_oConfig.disptype=="text"?"":"html"});
function opt(_asOpt)
{
var _oMore=[_oSelf.attr(_aoTarget,"more")||""];
if(_asOpt=="draft")
{
_oMore.push("&backurl="+encodeURIComponent(_oWin.location.href));
}
if(_asOpt=="send_all_again")
{
_oMore.push("&kvclick=readmail|compose|send_all_again|1");
}
if(bnewwin)
{
_oMore.push('&newwin=true&fwreplynewwin=true');
}
if(_aoEvent&&_aoEvent.shiftKey)
{
window.open(_sCpsMailUrl+_oMore.join(""));
}
else if(_sPlusContent)
{
_oSelf.disableConfirm();
_createForm({oWin:_oWin,sTarget:"mainFrame",sMethod:"POST",sAction:_sCpsMailUrl},{pluscontent:htmlEncode(_sPlusContent)}).submit();
}
else{
var _sUrl=_sCpsMailUrl+_oMore.join("");
if(_oSelf.dealCustomUI('optMail',{sAction:'closePage',sType:_asOpt,sUrl:_sUrl})!==false)
{
goUrl(_oWin,_sUrl,true);
}
}
preventDefault(_aoEvent);
}
switch(_sOpt)
{case "reply_all":
case "reply":
case "forward":
if(_sOpt=="forward")
{
var _oHadExpiredAttachs=[],_oHasExpired=[],_oHasDeleted=[],_sKeyWord,_sMore;
if(_oSelf._msModuleName=="qmSubMail")
{
_oHasExpired=(_oTop.attr(_aoTarget,"hasExpired")||"").split(" ");
_oHasExpired.pop();
_oHasDeleted=(_oTop.attr(_aoTarget,"hasDeleted")||"").split(" ");
_oHasDeleted.pop();
}
else{
_oHasExpired=[].concat(_oConfig.hadExpiredAttachs&&_oConfig.hadExpiredAttachs.hasExpired||[]);
_oHasDeleted=[].concat(_oConfig.hadExpiredAttachs&&_oConfig.hadExpiredAttachs.hasDeleted||[]);
}
var _nHasExpiredLen=_oHasExpired.length,_nHasDeletedLen=_oHasDeleted.length;
if(_nHasExpiredLen>0&&_nHasDeletedLen>0)
{
_sKeyWord=_oHasExpired[0];
_sMore="\u7B49"+(_nHasExpiredLen+_nHasDeletedLen)+"\u4E2A\u6587\u4EF6\u5DF2\u8FC7\u671F\u6216\u5DF2\u88AB\u53D1\u9001\u8005\u5220\u9664";
}
else if(_nHasExpiredLen>0)
{
_sKeyWord=_oHasExpired[0];
if(_nHasExpiredLen==1)
{
_sMore="\u5DF2\u8FC7\u671F";
}
else{
_sMore="\u7B49"+_nHasExpiredLen+"\u4E2A\u6587\u4EF6\u5DF2\u8FC7\u671F";
}
}
else if(_nHasDeletedLen>0)
{
_sKeyWord=_oHasDeleted[0];
if(_nHasDeletedLen==1)
{
_sMore="\u5DF2\u88AB\u53D1\u9001\u8005\u5220\u9664";
}
else{
_sMore="\u7B49"+_nHasDeletedLen+"\u4E2A\u6587\u4EF6\u5DF2\u88AB\u53D1\u9001\u8005\u5220\u9664";
}
}
if(_sKeyWord)
{
var _nIndex=_sKeyWord.lastIndexOf(".")||_sKeyWord.length,_sFileName=_sKeyWord.substring(0,_nIndex),_sSuffix=_sKeyWord.substring(_nIndex);
var _sFileDesc='<span id="span_filename_desc" style="text-overflow: ellipsis;overflow: hidden;max-width:175px;display: inline-block;vertical-align: middle;white-space: nowrap;">'+_sFileName+'</span>'+_sSuffix;
_oTop.confirmBox({title:"\u63D0\u793A",nWidth:440,msg:['<div class="dialog_f_t" style="font-weight: normal;word-break: break-all;">\u8D85\u5927\u9644\u4EF6 "',_sFileDesc,'" ',_sMore,'\uFF0C\u8F6C\u53D1\u5C06\u81EA\u52A8\u5220\u9664\u3002</div>'].join(""),confirmBtnTxt:'\u7EE7\u7EED\u8F6C\u53D1',onreturn:function(_abIsOk){
if(_abIsOk)
{
opt(_sOpt);
}
},onshow:function(){
var _oDomFilenameDesc=this.S('span_filename_desc');
if(_oDomFilenameDesc)
{
_nWidth=_oTop.calcPos(_oDomFilenameDesc)[4];
if(_nWidth>175)
{
_oDomFilenameDesc.style.width="175px";
}
}
}});
break;
}
}
case "send_all_again":
case "draft":
opt(_sOpt);
break;
}
},zoomup:function(_aoTarget,_aoEvent){
var _oSelf=this;
_oSelf._moMailZoomTool&&_oSelf._moMailZoomTool.zoomup(_aoTarget,_aoEvent);
},zoomdown:function(_aoTarget,_aoEvent){
var _oSelf=this;
_oSelf._moMailZoomTool&&_oSelf._moMailZoomTool.zoomdown(_aoTarget,_aoEvent);
},reset:function(_aoTarget,_aoEvent){
var _oSelf=this;
_oSelf._moMailZoomTool&&_oSelf._moMailZoomTool.reset(_aoTarget,_aoEvent);
},rmLanguage:function(_aoContentDiv){
var _sContentText=_aoContentDiv&&(_aoContentDiv.innerText||_aoContentDiv.textContent||"");
if(!_sContentText)
{
return;
}
var _oCnChar=_sContentText.match(/[\u2100-\uFFFF]/g)||[],_oUsChar=_sContentText.match(/[a-zA-Z]/g)||[],_oUsWord=_sContentText.match(/[a-zA-Z]+[\u2100-\uFFFF\s]/g,"")||[];
if(getTop().goUserInfo.get("DEF_TRANSLATE")!="1"&&_oUsWord.length/(_oCnChar.length+_oUsWord.length)>0.5)
{
getTop().requestShowTip("tip74container","77",this._moWin);
}
},setStatus:function(_anStatus){
var _oSelf=this;
_oSelf._mnStatus=_anStatus;
},addCalEvent:function(_aoTarget,_aoEvent,_asMailId){
var _oSelf=this,_oTop=getTop(),_oWin=_oSelf._moWin,_oPanel=_oTop.S("showcalpanel",_oWin),_sDate=_aoTarget.innerHTML,_oMatch=/((?!0000)[0-9]{4}\u5E74)?((0?[1-9]|1[0-2])\u6708(0?[1-9]|1[0-9]|2[0-8])\u65E5|(0?[13-9]|1[0-2])\u6708(29|30)\u65E5|(0?[13578]|1[02])\u670831\u65E5)/g,_sTmpl=T(['<span id="showcalpanel" class="showcalpanel" onmouseover="getTop().attr(this.parentNode, \'isout\', 0);QMReadMail.setStatus(1)" onmouseout="QMReadMail.setStatus(0);QMReadMail.hideCalEvent()">','<a onclick="QMReadMail.goCal(\'$date$\', \'$mailId$\')" class="add2calendar"><span class="ico_add2cal"></span>\u6DFB\u52A0\u5230\u65E5\u5386</a>','</span>']),_sTime=_oTop.attr(_aoTarget,"times")||"";
_sTime&&(_sDate+=(" "+_oTop.trim(_sTime)));
if(_sDate.match(_oMatch))
{
_sDate=_sDate.replace(/\u5E74/,"-").replace(/\u6708/,"-").replace(/\u65E5/,"");
}
_sDate=_sDate.replace(/\//g,"-");
if(_sDate.indexOf("-")<4)
{
var _oDate=new Date();
_sDate=_oDate.getFullYear()+"-"+_sDate;
}
_oPanel&&_oTop.removeSelf(_oPanel);
if(/^[\d\-\:\s]+$/.test(_sDate)&&!isNaN((new Date(_sDate.replace(/-/g,'/')).getTime())))
{
_aoTarget.style.cssText="border-bottom:1px dashed #ccc;position:relative;_display:inline-block;";
_oTop.insertHTML(_aoTarget,"beforeEnd",_sTmpl.replace({date:_sDate,images_path:_oTop.getPath("images"),mailId:_asMailId}));
}
},hideCalEvent:function(_aoTarget,_aoEvent){
var _oSelf=this,_oTop=getTop(),_oWin=_oSelf._moWin,_oPanel=_oTop.S("showcalpanel",_oWin);
setTimeout(function(){
if(_oPanel&&_oTop.isShow(_oPanel)&&_oSelf._mnStatus!=1)
{
_oTop.removeSelf(_oPanel);
}
},100);
},goCal:function(_asDate,_asMailId,_asSubject){
var _oSelf=this,_sMailId=_asMailId||_oSelf.getMailId(),_sFrom='mail',_oTop=getTop(),_sSubject=_asSubject||(_oSelf._moMailInfo.subject||_oTop.tmpSubject);
if(_oSelf._msModuleName=='qmGroupMail')
{
_sFrom='group';
}
else if(_oSelf._msModuleName=='qmNote')
{
_sFrom='note';
}
var _sCalUrl=T("/cgi-bin/readtemplate?t=calendar&sid=$sid$&from=readmail&cmd=moncal,$date$,new,$subject$,$from$,$mailId$,&loc=readmail,calendar,,,0,1").replace({sid:_oTop.getSid(),date:_asDate,subject:encodeURIComponent(_sSubject||"(\u65E0\u4E3B\u9898)"),mailId:_sMailId,from:_sFrom});
goUrl(_oSelf._moWin,_sCalUrl,true);
},showLocationTip:function(_aoTarget){
var _oTop=getTop();
if(_oTop.hasClass(_aoTarget,'ico_location'))
{
_aoTarget=_aoTarget.parentNode.parentNode;
}
if(_oTop.hasClass(_aoTarget,'readmail_locationPanel'))
{
_aoTarget=_aoTarget.parentNode;
}
if(_oTop.attr(_aoTarget,'over')==1)
{
return;
}
var _oTips=_oTop.CN('readmail_locationPanel',this._moWin.document);
var _oCurTip=_oTop.CN('readmail_locationPanel',_aoTarget)[0];
for(var i=0,len=_oTips.length;i<len;++i)
{
_oTips[i].parentNode.style.zIndex='auto';
_oTop.removeSelf(_oTips[i]);
}
var _sLocString=_aoTarget.innerHTML;
var _sLocUrl=['http://map.qq.com/?what=',encodeURIComponent(_sLocString),'&type=poi&ref=',encodeURIComponent('QQ\u90AE\u7BB1')].join('');
_oTop.attr(_aoTarget,'over',1);
_aoTarget.style.zIndex=3;
_oTop.insertHTML(_aoTarget,'beforeEnd','<a class="readmail_locationPanel" href="javascript:;" onclick="getTop().LogKV({sValue:\'readmail|location|identify|click\'});window.open(\''+_sLocUrl+'\',\'_blank\');" class="add2calendar" style="z-index:2;"><span class="ico_location"></span>\u5728\u5730\u56FE\u4E2D\u67E5\u770B</a>');
},hideLocationTip:function(_aoTarget){
var _oTop=getTop();
var _oCurTip=_oTop.CN('readmail_locationPanel',_aoTarget)[0];
_oTop.attr(_aoTarget,'over',0);
setTimeout(function(){
_oTop.attr(_aoTarget,'over')!=1&&_oTop.removeSelf(_oCurTip);
_aoTarget.style.zIndex='auto';
},200);
},showAD:function(){
debug("showAD");
var _oMailInfo=this._moMailInfo;
getTop().initAD(_aoLoadWin);
},showQBTip:function(_aoTarget){
_showQBTip.call(this,_aoTarget);
},hideQBTip:function(_aoTarget,_asMailId,_aoEvent){
_hideQBTip.call(this,_aoEvent);
},showQBTipBtn:function(){
if(!gbIsQBWebKit&&!gbIsQBIE)
{
var _oQBTip=this.S("QBPushTip");
_oQBTip&&show(_oQBTip,true);
}
},showBccTip:function(_aoTarget){
_showBccTip.call(this,_aoTarget);
},hideBccTip:function(_aoTarget,_asMailId,_aoEvent){
_hideBccTip.call(this,_aoEvent);
}};
});
_oClassHome.qmReminder=inherit("qmReminder",_oClassHome._qmBaseDM,function(_aoSuper){
return ({_ready:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_sMailId=_oSelf.getMailId();
QMAjax.send(T("/cgi-bin/read_reminder?t=read_reminder.json&linkid=mailid:$mailid$&sid=$sid$&rettype=calendar").replace({sid:getSid(),mailid:_sMailId}),{method:"GET",onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oJson=evalValue(_asParam);
if(_oJson&&_oJson.id)
{
var _oContainer=S("reminderContainer_mailid:"+_sMailId,_oWin);
_oContainer.innerHTML=TE("<span class='qm_ico_calendar'></span><span class='addrtitle'>\u4E8B\u4EF6\u65F6\u95F4\uFF1A$starttime$</span>&nbsp;<a href='/cgi-bin/readtemplate?sid=$sid$&t=calendar&cmd=moncal,$starttime$,view,$id$'>\u67E5\u770B\u65E5\u5386</a>").replace({starttime:_oJson.starttime,allday:_oJson.allday,sid:getSid(),id:_oJson.id});
show(_oContainer,true);
show(S("addtoremind",_oWin),false);
}
}
}});
}});
});
_oClassHome.qmQReply=inherit("qmQReply",_oClassHome._qmBaseDM,function(_aoSuper){
return {_initMemVar:function(_aoConfig,_aoReplayMail,_aoSendConfig){
var _oSelf=this;
_oSelf._moConfig=_aoConfig;
_oSelf._moReplyMail=_aoReplayMail;
_oSelf._moSendConfig=_aoSendConfig;
_oSelf._moSource=_oSelf.S(_ID._sQSource);
_oSelf._mbStopFold;
},getSource:function(){
var _oSource=this._moSource;
return (_oSource.className.indexOf('graytext')!=-1)?"":textToHtml(htmlEncode(_oSource.value));
},getContent:function(){
return this._moEditor&&this._moEditor.getContent();
},_combineContent:function(_asSource){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oMailContainer=_oSelf.S(_oConfig.sMailContent),_oMail=_oSelf._moReplyMail,_oValue=[_asSource||textToHtml(htmlEncode(_oSelf.S(_ID._sQSource).value))];
try{
var _sSign=getTop().goUserInfo.get('getRealUserSignature');
if(_sSign)
{
_sSign=_sSign(_oConfig.folderid,_oConfig.saveFrom);
if(_sSign)
{
_oValue.push("<div>&nbsp;</div>"+_sSign);
}
}
}
catch(_oError)
{
}
if(!_oConfig.noIncludeArtcle)
{
_oMail.orgcontent=_oMailContainer?filteSignatureTag(_removePlayerTag(_oMailContainer.innerHTML)):"";
var _sTmpInclude=_TEMPLATE._REFERPART.replace(extend({},_oMail,_oConfig.titlePrefix=="1"?_LANG._EN_US:_LANG._ZH_CN,{'name':_oMail.from.name,'addr':_oMail.from.addr}));
if(_oMail.orgcontent)
{
_oValue.push(_sTmpInclude);
return {content:_oValue.join("")};
}
else{
return {citeprev:"yes",rmref:_sTmpInclude,content:_oValue.join("")};
}
}
else{
return {content:_oValue.join("")};
}
},_getValidHtmlContent:function(_asHtml){
return _asHtml&&trim(_asHtml.replace(/<[^(img)]([^>]+)?>/gi,"").replace(/&nbsp;/g,""));
},saveDraft:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_oConfig=_oSelf._moConfig,_oEditor=_oSelf._moEditor,_oSendConfig=_oSelf._moSendConfig,_sDraftContent=_oEditor&&_oEditor.getContent(false),_oSource=_oSelf.S(_ID._sQSource);
if(!_oEditor||_sDraftContent==_oSelf._msDraftContent||!_oSelf._getValidHtmlContent(_sDraftContent)||isShow(_ID._sAfterSendingDiv,_oWin))
{
return;
}
else{
var _oReplyMail=_oSelf._moReplyMail,_oCpsData=extend({actiontype:"save",ReAndFw:"reply",contenttype:"html",from_s:"comm_quick",t:"compose.json",ReAndFwMailid:_oSelf.getMailId(),to:_ADDRS.replace({addrs:_oReplyMail.replyTo}),cc:_ADDRS.replace({addrs:_oReplyMail.replyCc}),subject:(_oSelf._moConfig.titlePrefix=="1"?"Re:":"\u56DE\u590D\uFF1A")+_oReplyMail.reSubject,savesendbox:1,sendname:"",sendmailname:_oSelf._moConfig.sendmailname},_oSelf._combineContent(_sDraftContent));
if(_oSelf._msDraftMailId)
{
_oCpsData.fmailid=_oSelf._msDraftMailId;
}
waitFor(function(){
return !!(getTop().ComposeLib);
},function(_abWaitOK){
if(!_abWaitOK)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
ComposeLib.send(_oCpsData,{onready:function(){
_oSelf._disableSendBtn(true);
showProcess(1,true,"\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1","",false);
},oncomplete:function(_abIsOk,_avParam){
var _oQSource=_oSelf._moSource,_oData=evalValue(_avParam),_sTime=formatDate(new Date(),"%hh%:%mm%","%");
if(_abIsOk)
{
_oSelf._msDraftMailId=_oData.mailid;
_oSelf._msDraftContent=_sDraftContent;
showInfo(_sTime+" \u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1");
reloadLeftWin();
}
else{
showError(_sTime+" \u4FDD\u5B58\u8349\u7A3F\u5931\u8D25");
}
_oSelf._disableSendBtn(false);
}});
});
}
},removeSelf:function(){
var _oSelf=this,_oEditorDomContainer=_oSelf.S('quickreply');
removeSelf(_oEditorDomContainer);
},send:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oWin=_oSelf._moWin,_oConfig=_oSelf._moConfig,_oEditor=_oSelf._moEditor,_oSendConfig=_oSelf._moSendConfig,_oSource=_oSelf._moSource;
if(_aoTarget.disabled)
{
return;
}
_oSelf.stopFold(true);
if(!_oEditor||!_oSelf._getValidHtmlContent(_oEditor.getContent(false)))
{
showError('\u8BF7\u5148\u8F93\u5165\u56DE\u590D\u5185\u5BB9');
_oSource.focus();
}
else{
var _oReplyMail=_oSelf._moReplyMail,_oCpsData=extend({ReAndFw:"reply",contenttype:"html",from_s:"comm_quick",t:"compose.json",s:_oSendConfig.s||"",ReAndFwMailid:_asMailId,to:_ADDRS.replace({addrs:_oReplyMail.replyTo}),cc:_ADDRS.replace({addrs:_oReplyMail.replyCc}),subject:(_oSelf._moConfig.titlePrefix=="1"?"Re:":"\u56DE\u590D\uFF1A")+_oReplyMail.reSubject,savesendbox:1,sendname:"",sendmailname:_oSelf._moConfig.sendmailname},_oSelf._combineContent(_oEditor.getContent(false)));
if(_oSelf._msDraftMailId)
{
_oCpsData.fmailid=_oSelf._msDraftMailId;
}
waitFor(function(){
return !!getTop().ComposeLib&&("1"!=getTop().gbBackGroundSend||getTop().BackGroundSend);
},function(_abWaitOK){
if(!_abWaitOK)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
var _oBackGroundSend,_bShouldBackSend=("1"==getTop().gbBackGroundSend);
if(_bShouldBackSend)
{
_oBackGroundSend=getTop().BackGroundSend;
}
var _oCallBacks={onready:function(){
if(_bShouldBackSend)
{
var _oQSource=_oSelf._moSource;
_oQSource.value="";
_oQSource.blur();
_oSelf.stopFold(false);
_oQSource.view("sending");
}
else{
_oSelf._disableSendBtn(true);
show(_oSelf.S(_ID._sAfterSendingDiv),true);
}
},oncomplete:function(_abIsOk,_avParam){
if(_bShouldBackSend)
{
if(_abIsOk)
{
var _oQSource=_oSelf._moSource;
_oData=evalValue(_avParam);
if(_oData&&_oData.compose=="ok")
{
_oQSource.view("init");
}
else if(_oSendConfig.fQReplyComplete)
{
callBack.call(_oSelf,_oSendConfig.fQReplyComplete,[_avParam]);
}
}
}
else{
var _oQSource=_oSelf._moSource;
if(_abIsOk)
{
getTop().QMMLCache.upVer();
_oQSource.value="";
_oQSource.blur();
_oQSource.view("init");
showInfo("\u60A8\u7684\u90AE\u4EF6\u5DF2\u6210\u529F\u53D1\u9001");
show(_oSelf.S(_ID._sAfterSendDiv),true);
show(_oSelf.S(_ID._sQuickReplyPart),false);
callBack.call(_oSelf,_oSendConfig.fQReplyComplete,[_avParam]);
}
else{
_oQSource.focus();
show(_oSelf.S(_ID._sQuickReplyPart),true,_oWin);
}
_oSelf._disableSendBtn(false);
setTimeout(function(){
_oSelf._moEditor.resetFixHeight();
},500);
}
_oSelf._msDraftMailId="";
show(_oSelf.S(_ID._sAfterSendingDiv),false);
}};
if(_bShouldBackSend)
{
_oBackGroundSend.quickReply(_oCpsData,"comm",_oCallBacks);
}
else{
ComposeLib.send(_oCpsData,_oCallBacks);
}
},100);
}
preventDefault(_aoEvent);
},readyToWrite:function(_aoTarget,_asMailId){
var _oSelf=this;
show(_oSelf.S(_ID._sQuickReplyPart),true);
show(_oSelf.S(_ID._sAfterSendDiv),false);
_oSelf.S(_ID._sQSource).focus();
},checkBcc:function(){
callBack(this._moSendConfig.fCheckBcc,arguments);
},disableConfirm:function(){
setClass(this._moSource,'graytext qm_txt');
},jump:function(_aoTarget,_asMailId,_aoEvent){
if(_aoTarget.disabled)
{
return;
}
var _oSelf=this,_oEditor=_oSelf._moEditor,_sValue=_oEditor?_oEditor.getContent(false):_oSelf.getSource(),_oWin=_oSelf._moWin,_sUrl=_READMAIL_CPS_URL.replace({sid:getSid(),mailid:_asMailId,s:"reply_all",disptype:"html"});
_oSelf.disableConfirm();
_createForm({oWin:_oWin,sTarget:"_self",sAction:_sUrl+(getTop().bnewwin?"&newwin=true":"")},{pluscontent:getTop().htmlEncode(_sValue)}).submit();
preventDefault(_aoEvent);
},_disableSendBtn:function(_abDisable){
var _oSelf=this;
_oSelf.S(_ID._sJumpToNewWin).disabled=_oSelf.S(_ID._sQSendBtn).disabled=_abDisable;
return this;
},_setEvent:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_oSource=_oSelf._moSource,_oSendBtn=_oSelf.S(_ID._sQSendBtn),_oReplyTxtContainer=_oSelf.S(_ID._sQReplyTxtContainer),_oRteContainer=_oSelf.S('rteContainer'),_oReplyBtnContainer=_oSelf.S(_ID._sQReplyBtnContainer);
function _view(_asStat)
{
switch(_asStat)
{case "init":
_oSelf._moEditor&&_oSelf._moEditor.setContent("");
case "sending":
setClass(_oSource,'graytext qm_txt').value=_oSource.getAttribute('graytxt');
_oSource.style.height="20px";
show(_oRteContainer,false);
show(_oReplyTxtContainer,true);
show(_oReplyBtnContainer,false);
break;
case "show":
show(_oRteContainer,true);
show(_oReplyTxtContainer,false);
show(_oReplyBtnContainer,true);
_oSelf._moEditor&&_oSelf._moEditor.focus&&_oSelf._moEditor.focus();
break;
default:
}show(_oSelf.S(_ID._sAfterSendDiv),_asStat=="init");
show(_oSelf.S(_ID._sAfterSendingDiv),_asStat=="sending");
}
;function _getOffset(_aoDom)
{
var _nTop=0,_nLeft=0;
while(_aoDom&&_aoDom.tagName!="BODY")
{
if(_aoDom.style.position!="absolute")
{
_nTop+=_aoDom.offsetTop;
_nLeft+=_aoDom.offsetLeft;
}
_aoDom=_aoDom.offsetParent;
}
return ({left:_nLeft,top:_nTop});
}
;function _expand()
{
if(_oSource.className.indexOf('graytext')!=-1&&attr(_oSource,"checkBcc")!=1)
{
_oSource.setAttribute('graytxt',_oSource.value);
setClass(_oSource,'qm_txt b_size').value='';
if(!_oSelf._moEditor)
{
_oSelf.S("tooBarContain").innerHTML=getTop().outputToolBarControlBtn&&getTop().outputToolBarControlBtn()||"";
show(S("editor_toolbar_btn_container",_oWin),true);
}
qmAnimation.expand(_oSource,{to:54,oncomplete:function(){
var _oEditorDom=this;
show(_oReplyBtnContainer,true);
_oSource.style.overflow="auto";
if(!_oSelf._moEditor)
{
var _sInitEditorContent=_oSelf._moSendConfig.sourceContent;
if(!_sInitEditorContent||trim(_sInitEditorContent)=='')
{
_sInitEditorContent=QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")});
}
var _sAux=(_oSelf._moContext.sAux==undefined?'':_oSelf._moContext.sAux);
QMEditor.createEditor({editorId:"newReadMailQuickSend",editorAreaId:'QMEditorArea'+_sAux,tbExternId:'QMEditorToolBarPlusArea'+_sAux,editorAreaWin:_oWin,isNoEditScroll:true,height:"103px",funclist:QMEditor.CONST.FUNCLIST.READMAIL,photoCGI:getPhotoCGI(),onshowinstallactive:getTop().showInstallActiveXDialog&&getTop().showInstallActiveXDialog,onkeydown:function(_aoEvent){
if(_isKeyDownSend(_aoEvent))
{
fireMouseEvent(_oSendBtn,"click");
}
},onload:function(){
_oSelf._moEditor=this;
_oEditorDom.view("show");
_showEditorToolBar(false);
setTimeout(function(){
var _oQuickDom=_oSelf.S("QuickReplyPart");
bodyScroll(_oWin,"scrollTop",_getOffset(_oQuickDom).top-document.body.clientHeight+250);
});
}}).initialize(_sInitEditorContent,false,_oSelf.S("QMEditorArea").getAttribute("tIndex"));
}
else{
_oEditorDom.view("show");
var _oEmbed=GelTags("embed",_oSelf.S("QMEditorToolBarPlusArea"))[0],_oEmbedParent=_oEmbed.parentNode;
_oEmbedParent.parentNode.removeChild(_oEmbedParent);
_oSelf._moEditor.getTbExternInfo("Photo").funcObj.init_();
}
}});
var _oLoadScriptFiles=[];
if(!getTop().ComposeLib)
{
_oLoadScriptFiles.push("$js_path$webp/libcompose3732bd.js");
}
if("1"==getTop().gbBackGroundSend&&!getTop().BackGroundSend)
{
_oLoadScriptFiles.push("$js_path$webp/backsend2b1861.js");
}
_oLoadScriptFiles.length&&loadJsFileToTop(_oLoadScriptFiles);
if(!_oSelf._mnAutoSaveTimer)
{
_oSelf._mnAutoSaveTimer=_oWin.setInterval(function(){
_oSelf.saveDraft();
},300000);
}
}
}
;function _showEditorToolBar(_abShow)
{
_abShow=_abShow==null?true:_abShow;
_oSelf._moEditor.showToolBar(_abShow);
var _oToolBarControlBtn=getTop().S("editor_toolbar_btn_container",_oWin);
if(!_oToolBarControlBtn)
{
return false;
}
var _oSpans=getTop().GelTags("span",_oToolBarControlBtn);
getTop().show(_oSpans[0],_abShow);
getTop().show(_oSpans[1],!_abShow);
var _fSelf=arguments.callee;
_oToolBarControlBtn.onclick=function(){
_fSelf(!_abShow);
return false;
};
}
;_oSource.view=_view;
addEvents(setClass(_oSource,'graytext qm_txt'),{keydown:function(_aoEvent){
if(_isKeyDownSend(_aoEvent))
{
fireMouseEvent(_oSendBtn,"click");
}
},focus:_expand});
if(_oSelf._moSendConfig.sourceContent&&trim(_oSelf._moSendConfig.sourceContent)!='')
{
_expand();
}
_oSelf.evt(["ck","md"],_ID._sQReply);
addEvent(_oWin,"beforeunload",function(_aoEvent){
removeEvent(_oWin,"beforeunload",arguments.callee);
var _sMsg;
try{
_sMsg=_oSelf._beforeCancelSend(_aoEvent);
}
catch(_aoErr)
{
}
if(_sMsg)
{
return _sMsg;
}
});
},focus:function(){
var _oSelf=this;
if(_oSelf._moEditor)
{
_oSelf._moEditor&&_oSelf._moEditor.focus&&_oSelf._moEditor.focus();
}
else _oSelf._moSource.focus();
},stopFold:function(_abVal){
this._mbStopFold=(_abVal==undefined?true:_abVal);
},_cancelSend:function(){
},_beforeCancelSend:function(_aoEvent){
var _oSelf=this,_oSource=_oSelf._moSource,_oEditor=_oSelf._moEditor;
if(_oSource.className.indexOf('graytext')==-1&&(_oEditor&&_oSelf._getValidHtmlContent(_oEditor.getContent(false))||_oSource.value))
{
var _sText='\u60A8\u586B\u5199\u7684\u5185\u5BB9\u6CA1\u6709\u53D1\u9001\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F';
_aoEvent.returnValue=_sText;
return _sText;
}
return false;
}};
});
_oClassHome.qmPlayerParser=inherit("qmPlayerParser",_oClassHome._qmBaseDM,function(_aoSuper){
return {_get:function(_aoPlayerDom,_asAttr){
return decodeURIComponent(attr(_aoPlayerDom,_asAttr));
},_fPlay:function(_aoPlayConfig){
var _oSelf=this;
if(!_aoPlayConfig.auto&&!confirm("\u64AD\u653E\u5916\u90E8\u97F3\u4E50\u6709\u98CE\u9669\uFF0C\u786E\u5B9A\u64AD\u653E\uFF1F"))
{
return;
}
var _oContainer=_oSelf.S(_ID._sMp3PlayerContainer),_oMp3PlayerInfo=_oSelf.S(_ID._sMp3PlayerInfo);
if(_aoPlayConfig.sosoGet)
{
getMusicUrl(_aoPlayConfig.title,_aoPlayConfig.author,function(_asSong,_asSinger,_asUrl){
_oSelf._fPlay({auto:true,url:_asUrl||_aoPlayConfig.url,title:_asSong,author:_asSinger,sosoGet:false});
});
return;
}
show(_oContainer,true);
if(_oContainer.getAttribute("uin_play_id"))
{
getTop().QMPlayer.delSkinById(_oContainer.getAttribute("uin_play_id"));
}
var _sUid="uni_id"+(+new Date());
_oContainer.setAttribute("uin_play_id",_sUid);
audioPlay({id:_sUid,container:_oContainer,url:_aoPlayConfig.url,author:_aoPlayConfig.author,title:_aoPlayConfig.title,autoplay:true,global:true});
_oMp3PlayerInfo.innerHTML=_MUSICINFO.replace({images_path:getPath('image'),author:htmlEncode(_aoPlayConfig.author)||'\u672A\u77E5',title:htmlEncode(_aoPlayConfig.title)||'\u672A\u77E5'});
show(_oMp3PlayerInfo,true);
},_fPlayBgMusic:function(_asUrl,_aoDisp,_abAutoPlay,_asCmd){
var _oSelf=this,_oWin=_oSelf._moWin,_oBgMusic=_oSelf.S(_ID._sBgMusic),_oPlayConfig={auto:_abAutoPlay,url:_asUrl,sosoGet:_aoDisp?true:false,author:_aoDisp&&_aoDisp.author,title:_aoDisp&&_aoDisp.title};
if(_asUrl.indexOf("http")!=0)
{
return;
}
if(_asCmd=='bgmusic')
{
show(_oBgMusic,true);
var _aoLinks=GelTags("a",_oBgMusic);
_aoLinks[0].href=_asUrl;
_aoLinks[1].onclick=function(){
_oSelf._fPlay(_oPlayConfig);
return false;
};
}
if(_abAutoPlay)
{
_oSelf._fPlay(_oPlayConfig);
}
show(_oSelf.S(_ID._sQQMailBgMusicInfo),false);
},_ready:function(_aoConfig){
var _oPlayers=GelTags("player",_aoConfig.oContentDom);
if(!_oPlayers.length)
{
return;
}
var _oSelf=this,_oWin=_oSelf._moWin,_oAttach=_oSelf.S(_ID._sAttachment);
for(var _nIdx=0;_nIdx<_oPlayers.length;_nIdx++)
{
var _oPlayer=_oPlayers[_nIdx],_sIdInfo=_oPlayer.id||"",_sCmd=_sIdInfo.toLowerCase();
if(_sCmd.indexOf("cmd:")==0)
{
_sCmd=_sCmd.split(":").pop();
switch(_sCmd)
{case "voice":
if(!_oAttach)
{
return;
}
var _sParam=escape(attr(_oPlayer,"param")),_sMedia=attr(_oPlayer,"media")||"voice",_oSpans=GelTags("span",_oAttach),_nSpansLen=_oSpans.length,_sPlayUrl="";
for(var i=0,_nSpansLen;i<_nSpansLen;i++)
{
var _oSpan=_oSpans[i],_sPlayUrl=attr(_oSpan,"player");
if(_sPlayUrl&&(_oSpan.innerText||_oSpan.textContent)==unescape(_sParam))
{
var _oPlayerContainer=_oPlayer.parentNode;
if(_sMedia=="video")
{
if(!_oWin.sFlvPlayUrl)
{
_oWin.sFlvPlayUrl=_sPlayUrl;
_oPlayerContainer.innerHTML=generateFlashCode(unikey("flvplayer"),"/zh_CN/htmledition/swf/WebFlvPlayer.swf",{width:400,height:335},{wmode:"opaque"});
}
}
else{
_oPlayerContainer.innerHTML='<div style="padding-left:10px;" ></div>';
var _oPlayInfo={id:_sParam,container:_oPlayerContainer.firstChild,url:_sPlayUrl,title:_oPlayer.getAttribute('alias')?_oPlayer.getAttribute('alias')+'\u7684\u8BED\u97F3':'\u60A8\u670B\u53CB\u7684\u8BED\u97F3',dispInfo:{title:_oPlayer.getAttribute("alias")?_oPlayer.getAttribute("alias")+"\u7684\u8BED\u97F3":"\u60A8\u670B\u53CB\u7684\u8BED\u97F3"},autoplay:false};
_nIdx--;
audioPlay(_oPlayInfo);
}
break;
}
}
break;
case "bgmusic":
var _sUrl=attr(_oPlayer,"url"),_sSong=_oSelf._get(_oPlayer,"song"),_sSinger=_oSelf._get(_oPlayer,"singer");
_oSelf._fPlayBgMusic(_sUrl,_sUrl&&!_sSong&&!_sSinger?null:{author:_sSinger,title:_sSong},!_aoConfig.bManuPlay,_sCmd);
break;
case "pcbgmusic":
var _sUrl=attr(_oPlayer,"url"),_sSong=_oSelf._get(_oPlayer,"song"),_sSinger=_oSelf._get(_oPlayer,"singer"),_oDiv=_oWin.document.createElement('div');
_oDiv.innerHTML='\u64AD\u653E\u5668\u52A0\u8F7D\u4E2D...';
_oPlayer.parentNode.insertBefore(_oDiv,_oPlayer);
audioPlay({skin:'Global',id:"pcbgmusic",container:_oDiv,author:_sSinger,title:_sSong,autoplay:_oPlayers.length==1,url:_sUrl});
break;
default:
break;
}
}
else if(_sIdInfo)
{
_oSelf._fPlayBgMusic(_sIdInfo);
}
}
}};
});
_oClassHome.qmMoreOptSel=inherit("qmMoreOptSel",_oClassHome._qmBaseDM,function(_aoSuper){
return {_ready:function(_aoConfig){
var _oSelf=this;
_oData=_oSelf._moData={},_oMoreOpt=_aoConfig.oMoreOpt,_oText=["\u5220\u9664\u90AE\u4EF6\u5907\u6CE8","\u6DFB\u52A0\u90AE\u4EF6\u5907\u6CE8","\u53D6\u6D88\u63D0\u9192","\u8BBE\u7F6E\u63D0\u9192","\u6253\u5370"],_oValue=["delremark","addremark","delremind","addremind","print"];
for(var _i=_oValue.length-1;_i>=0;_i--)
{
_oData[_oValue[_i]]=0;
}
for(var _i=_oMoreOpt.length-1;_i>=0;_i--)
{
_oData[_oMoreOpt[_i]]=1;
}
E(SN(_NAME._sMoreOprContainer,_aoConfig.oWin),function(_aoDom){
new QMSelect({oContainer:_aoDom,nWidth:86,sDefaultItemValue:"\u66F4\u591A\u64CD\u4F5C...",oMenu:{nWidth:"auto",nMaxWidth:180,nMaxItemView:10,oItems:QMMenu.makeMenuItem(_oText,_oValue)},onafteropenmenu:function(_oMenu,_aoSelect){
for(var _i=_oValue.length-1;_i>=0;_i--)
{
_oMenu.itemOption(_oValue[_i],"bDisplay",_oData[_oValue[_i]]);
}
},onselect:function(_aoItem){
callBack(_aoConfig.fOnSelect,[_aoItem.sId]);
}});
});
},switchPair:function(_asItemId1,_asItemId2){
var _oSelf=this;
_oSelf._moData[_asItemId1]=1;
_oSelf._moData[_asItemId1]=0;
}};
});
_oClassHome.qmRemark=inherit("qmRemark",_oClassHome._qmBaseDM,function(_aoSuper){
return {_initMemVar:function(_afOnChange){
var _oSelf=this;
_oSelf._bFoucs=false;
_oSelf._mfOnChange=function(_asAction){
_oSelf.dealCustomUI('remark',{sAction:_asAction,oWin:_oSelf._moWin});
callBack(_afOnChange,arguments);
};
_oSelf._mnDefHgt=_oSelf.S(_ID._sRemarkText).clientHeight;
},isFoucs:function(){
return this._bFoucs;
},_setEvent:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_oRemarkText=_oSelf.S(_ID._sRemarkText);
_oSelf.evt(["ck"],[_ID._sRemarkContainer,_ID._sRmd]);
addEvents(_oRemarkText,{focus:function(){
_oSelf._bFoucs=true;
_oSelf.onFocus();
},keydown:function(_aoEvent){
_oSelf.onKeydown(_aoEvent);
},blur:function(){
_oSelf._bFoucs=false;
_oSelf.onBlur();
}});
addEvent(_oWin,"beforeunload",function(_aoEvent){
var _sMsg=_oSelf._hasModify();
if(_sMsg)
{
_aoEvent.returnValue=_sMsg;
return _sMsg;
}
});
addEvent(_oRemarkText,gbIsIE?"propertychange":"input",function(_aoEvent){
if(gbIsIE)
{
_aoEvent.propertyName=="value"&&_oSelf._resize();
}
else{
_oSelf._resize();
}
});
return _oSelf;
},_resize:function(){
if(gbIsIE&&gnIEVer==6)
{
return;
}
var _oSelf=this,_oRemarkText=_oSelf.S(_ID._sRemarkText),_nScrollHeight=_oRemarkText.scrollHeight;
if(gbIsIE)
{
_nScrollHeight>_oSelf._mnDefHgt&&(_oRemarkText.style.height=_nScrollHeight+"px");
}
else{
_oRemarkText.style.height=_oSelf._mnDefHgt+"px";
if(_oRemarkText.clientHeight<_nScrollHeight)
{
_oRemarkText.style.height=_oRemarkText.scrollHeight+"px";
}
}
},toggle:function(_aoTarget){
var _oSelf=this,_oRmd=_oSelf.S(_ID._sRmd),_oRemarkContainer=_oSelf.S(_ID._sRemarkContainer),_oRemarkText=_oSelf.S(_ID._sRemarkText),_oRemarkWrite=_oSelf.S(_ID._sRemarkWrite);
if(_oRmd&&_oRmd.title.indexOf("\u5220\u9664")>=0)
{
_oSelf.del();
}
else if(_oRemarkContainer&&getTop().isShow(_oRemarkContainer))
{
_oSelf.modify();
}
else{
_aoTarget&&_aoTarget.blur();
show(_oRemarkContainer,true);
show(_oRemarkWrite,true);
_oRemarkText.focus();
}
return false;
},del:function(_aoTarget){
var _oSelf=this,_oRmd=_oSelf.S(_ID._sRmd),_oRemarkContent=_oSelf.S(_ID._sRemarkContent),_oRemarkContainer=_oSelf.S(_ID._sRemarkContainer),_oRemarkText=_oSelf.S(_ID._sRemarkText),_oRemarkWrite=_oSelf.S(_ID._sRemarkWrite),_oRemarkRead=_oSelf.S(_ID._sRemarkRead);
if(!_oRemarkContent.innerHTML)
{
show(_oRemarkContainer,false);
return false;
}
var _sMailId=_oSelf.getMailId(),_oAjax=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=del");
_oAjax.onError=function(_aoXmlObj){
showError("\u5220\u9664\u5907\u6CE8\u5185\u5BB9\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
_oSelf._changeButtonMode(false);
};
_oAjax.onComplete=function(_aoXmlObj){
if(_aoXmlObj.responseText.indexOf("del successful")==-1)
{
return this.onError();
}
showInfo("\u5220\u9664\u6210\u529F");
if(_oRmd)
{
_oRmd.title="\u6DFB\u52A0\u90AE\u4EF6\u5907\u6CE8";
_oRmd.className="qm_ico_remarkoff";
}
_oRemarkText.value="";
_oRemarkContent.innerHTML="";
show(_oRemarkContainer,0);
show(_oRemarkWrite,0);
show(_oRemarkRead,0);
_oSelf._changeButtonMode(false);
_oSelf._mfOnChange("del");
};
confirmBox({msg:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u90AE\u4EF6\u5907\u6CE8\u5417\uFF1F",title:'QQ\u90AE\u7BB1\u63D0\u793A',cancelBtnTxt:"\u53D6\u6D88",confirmBtnTxt:"\u786E\u5B9A",onreturn:function(_abIsOk){
if(_abIsOk)
{
_oSelf._changeButtonMode(true);
_oAjax.send(T("mailaction=remarks&sid=$sid$&type=del&mailid=$mailid$").replace({sid:getSid(),mailid:_sMailId}));
}
}});
return false;
},_text2html:function(_asText){
return htmlEncode(_asText).replace(/\n/gi,"<br/>").replace(/\x20/gi,"&nbsp;");
},_html2text:function(_asHtml){
return htmlDecode(_asHtml.replace(/&nbsp;/gi," ").replace(/<br\/?>/gi,"\n"));
},save:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_oRemarkContent=_oSelf.S(_ID._sRemarkContent),_oRemarkText=_oSelf.S(_ID._sRemarkText),_oRemarkWrite=_oSelf.S(_ID._sRemarkWrite),_oRemarkRead=_oSelf.S(_ID._sRemarkRead),_oAjax=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=mdy"),_sText=_oRemarkText.value;
if(!_sText||_sText==_DEFAULT_TEXT_VALUE)
{
_oRemarkText.focus();
return !!showError('\u8BF7\u5148\u8F93\u5165\u5907\u6CE8\u5185\u5BB9');
}
if(_sText.replace(/[^\x00-\xff]/g,"aa").length>=1000)
{
_oRemarkText.focus();
return !!showError('\u90AE\u4EF6\u5907\u6CE8\u7684\u5B57\u7B26\u4E0D\u80FD\u8D85\u8FC71000\u4E2A');
}
_oAjax.onError=function(_aoXmlObj){
showError("\u4FDD\u5B58\u5907\u6CE8\u5185\u5BB9\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
_oSelf._changeButtonMode(false);
};
_oAjax.onComplete=function(_aoXmlObj){
if(_aoXmlObj.responseText.indexOf("mdy successful")==-1)
{
return this.onError();
}
showInfo("\u4FDD\u5B58\u6210\u529F");
var _oRmd=_oSelf.S(_ID._sRmd);
if(_oRmd)
{
_oRmd.title="\u5220\u9664\u90AE\u4EF6\u5907\u6CE8";
_oRmd.className="qm_ico_remarkon";
}
_oRemarkContent.innerHTML=_oSelf._text2html(_sText);
_oSelf._changeButtonMode(false);
_oSelf.cancel();
_oSelf._mfOnChange("save");
};
if(_oRemarkContent.innerHTML==_sText)
{
return _oAjax.onComplete({responseText:"mdy successful"});
}
_oSelf._changeButtonMode(true);
_oAjax.send(T("mailaction=remarks&sid=$sid$&resp_charset=UTF8&type=mdy&mailid=$mailid$&content=$content$").replace({sid:getSid(),mailid:_oSelf.getMailId(),content:encodeURI(_sText)}));
return false;
},cancel:function(){
var _oSelf=this,_oRemarkContent=_oSelf.S(_ID._sRemarkContent),_oRemarkContainer=_oSelf.S(_ID._sRemarkContainer),_oRemarkText=_oSelf.S(_ID._sRemarkText),_oRemarkWrite=_oSelf.S(_ID._sRemarkWrite),_oRemarkRead=_oSelf.S(_ID._sRemarkRead);
if(_oRemarkContent.innerHTML=="")
{
_oRemarkText.value=_oSelf._html2text(_DEFAULT_TEXT_VALUE);
show(_oRemarkRead,false);
show(_oRemarkWrite,false);
show(_oRemarkContainer,false);
}
else{
_oRemarkText.value=_oSelf._html2text(_oRemarkContent.innerHTML);
show(_oRemarkRead,true);
show(_oRemarkWrite,false);
}
},modify:function(_aoTarget){
var _oSelf=this,_oRemarkContent=_oSelf.S(_ID._sRemarkContent),_oRemarkContainer=_oSelf.S(_ID._sRemarkContainer),_oRemarkText=_oSelf.S(_ID._sRemarkText),_oRemarkWrite=_oSelf.S(_ID._sRemarkWrite),_oRemarkRead=_oSelf.S(_ID._sRemarkRead);
_oRemarkText.value=_oSelf._html2text(_oRemarkContent.innerHTML);
show(_oRemarkRead,false);
show(_oRemarkWrite,true);
_oRemarkText.focus();
_oSelf._resize();
},onFocus:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_oRemarkText=_oSelf.S(_ID._sRemarkText);
if(_oRemarkText.value==_DEFAULT_TEXT_VALUE)
{
_oRemarkText.value="";
}
_oRemarkText.style.color="#000";
_oRemarkText.style.fontSize="14px";
return false;
},onBlur:function(){
var _oSelf=this,_oRemarkText=_oSelf.S(_ID._sRemarkText);
if(_oRemarkText.value=="")
{
_oRemarkText.value=_DEFAULT_TEXT_VALUE;
_oRemarkText.style.color="#A0A0A0";
_oRemarkText.style.fontSize="12px";
}
return false;
},onKeydown:function(_aoEvent){
if(_aoEvent.ctrlKey&&_aoEvent.keyCode==13||_aoEvent.altKey&&_aoEvent.keyCode==83)
{
this.save();
preventDefault(_aoEvent);
}
},_changeButtonMode:function(_abDisabled){
this.S(_ID._sRemarkSave).disabled=_abDisabled;
},_hasModify:function(){
var _oSelf=this,_oRemarkContent=_oSelf.S(_ID._sRemarkContent),_oRemarkText=_oSelf.S(_ID._sRemarkText);
if(!_oRemarkText)
{
return '';
}
var _bEqual=(_oRemarkText.value.replace(/\r/gi,"")!=_oSelf._html2text(_oRemarkContent.innerHTML).replace(/\r/gi,""));
return (_oRemarkText&&_oRemarkText.value&&_bEqual&&_oRemarkText.value!=_DEFAULT_TEXT_VALUE)?'\u60A8\u586B\u5199\u7684\u5907\u6CE8\u6CA1\u6709\u4FDD\u5B58\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F':'';
}};
});
_oClassHome.qmAntiSpam=inherit("qmAntiSpam",_oClassHome._qmBaseDM,function(_aoSuper){
return {_initMemVar:function(_aoConfig,_aoMailInfo){
var _oSelf=this;
_oSelf._moMailInfo=_aoMailInfo;
_oSelf._moConfig=_aoConfig;
_oSelf._moCheatCodeBar=_oSelf.S(_ID._sCheatCodeBar);
},_setEvent:function(){
var _oSelf=this;
_oSelf.evt(["ck"],_oSelf.SN(_NAME._sSpam));
},_locMore:function(_asMore){
var _oLoc=this._moWin.location;
_oLoc.replace(appendToUrl(cookQueryString(_oLoc.href,{ver:""}),_asMore));
},_createMailFrm:function(_asMailId,_aoExtend){
_createForm({oWin:this._moWin,sFormId:"mail_frm",sAction:"/cgi-bin/mail_mgr"},extend({s:"readmail_spam",s_reject_what:"11",isspam:'true',mailid:_asMailId,reporttype:"",location:"readmail",srcfolderid:this._moConfig.folderid,mailaction:"mail_spam"},_aoExtend));
},reject:function(_aoTarget,_asMailId){
var _oSelf=this,_sTypeReject=attr(_aoTarget,"type_reject"),_sSubjectId=attr(_aoTarget,"subjectid");
var _oFrom=_oSelf.getFromInfo_();
_oSelf._moWin.QMReadMail&&_oSelf._moWin.QMReadMail.clearCache();
QMMLCache.upVer();
if(_sTypeReject=="sys_reject")
{
_oSelf._createMailFrm(_asMailId,{"type_reject":_sTypeReject,"subjectid":_sSubjectId});
doReject(true,attr(_aoTarget,"groupmail"),_oSelf._moWin,attr(_aoTarget,"mimefrom")||_oFrom.addr,"\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u6B64\u680F\u76EE\u7684\u7CFB\u7EDF\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417?");
}
else{
_oSelf._createMailFrm(_asMailId);
doReject(true,attr(_aoTarget,"groupmail"),_oSelf._moWin,attr(_aoTarget,"mimefrom")||_oFrom.addr,T(['<div>\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u4EE5\u4E0B\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F</div>','<div for="reject_confirm_$_idx_$" class="txtflow" style="width:320px;">','<span class="green bold">$name$</span>','<span class="graytext">&lt;$addr$&gt;</span>','</div>']).replace({name:htmlEncode(_oFrom.name),addr:_oFrom.addr}));
}
},notSpam:function(_aoTarget,_asMailId){
var _oSelf=this,_oWin=_oSelf._moWin;
getTop().QMMLCache.upVer();
reportNoSpamJson({},{oWin:_oSelf._moWin,sFid:_oSelf._moConfig.folderid,oACB:null,bPop:false,bML:false,oMail:[{sMid:_asMailId,bUnr:false}]});
},reportSpam:function(_aoTarget,_asMailId,_aoEvent,_afCallBack){
var _oSelf=this,_oConfig=_oSelf._moConfig;
if(attr(_aoTarget,"yellow")=="true")
{
LogKV({sValue:"getinvestigate|readmail|report_spam|yellowbar"});
}
else{
LogKV({sValue:"getinvestigate|readmail|report_spam|button"});
}
var _bNeedBlack=_oSelf.attr(_aoTarget,"noaddblack")!="1";
var _idx=0;
var _lAddrs=new Array();
var _sMimeFrom=_oSelf.attr(_aoTarget,"mimefrom");
var _sMailFrom=_oSelf.attr(_aoTarget,"mailfrom");
if(_sMimeFrom&&_sMimeFrom.length>0)
_lAddrs[_idx++]=_sMimeFrom;
if(_sMailFrom&&_sMailFrom.length>0)
_lAddrs[_idx++]=_sMailFrom;
getTop().QMMLCache.upVer();
var _sSubject='';
if(_oSelf._moMailInfo.nLen)
{
_sSubject=_oSelf._moMailInfo.oSubMails[0][1]?_oSelf._moMailInfo.oSubMails[0][1].subject:'';
}
else{
_sSubject=_oSelf._moMailInfo.subject;
}
reportSpamJson({bBlackList:_bNeedBlack,oAddrList:_lAddrs},{oWin:_oSelf._moWin,sFid:_oSelf._moConfig.folderid,oACB:null,bPop:false,bML:false,oncomplete:function(_aoCBInfog){
return _oSelf.dealCustomUI('MailMethod',[_aoCBInfog,'reportSpam'])===true||callBack.call(this,_afCallBack,arguments);
},oMail:[{sMid:_asMailId,bUnr:false,sSubject:_sSubject}]});
},showHttpImage_:function(){
var _sImgUrl='disptype=html&dispimg=1&clickshowimage=1';
if((!this._moMailInfo.bAsyn&&!this._moMailInfo.bAsynOrg)||!this._moContext.oMailInstance)
{
this._locMore("&"+_sImgUrl);
}
else{
this._moMailInfo.bShowContImg=true;
this._moContext.oMailInstance._asyncGetSubMail(_sImgUrl);
}
},addWhiteSubmit:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oWin=_oSelf._moWin,_sFromAddr=_oSelf.getFromInfo_().addr;
if(!checkMail(trim(_sFromAddr)))
{
return false;
}
_createForm({oWin:_oWin,sMethod:"POST",sAction:_BW_LIST.replace({sid:getSid(),fromaddr:_sFromAddr})}).submit();
runUrlWithSid(_SPAM_REPORT.replace({rtype:1000006,rmsg:_asMailId}));
rdVer(_asMailId,1);
_oSelf.showHttpImage_();
show(_oSelf._moCheatCodeBar,false);
preventDefault(_aoEvent);
},addSpamVote:function(_aoTarget,_asMailId){
var _oSelf=this,_sType=_oSelf.attr(_aoTarget,"rtype");
runUrlWithSid(_SPAM_REPORT.replace({rtype:_sType,rmsg:_asMailId})+"&r_subtype=spamvote&fname="+_oSelf.getFromInfo_().addr);
if(_sType=="1")
{
_oSelf.S(_ID._sGreenBar).innerHTML='\u611F\u8C22\u53C2\u4E0E\uFF01\u60A8\u8FD8\u53EF\u4EE5\u5C06\u6B64\u53D1\u4EF6\u4EBA\u7684\u90AE\u4EF6\uFF0C\u5F52\u6863\u5230\u6307\u5B9A\u6587\u4EF6\u5939&nbsp;&nbsp;<a <a ck="exbookEmlMgr" book="1" href="javascript:;">\u81EA\u52A8\u5F52\u6863</a>&nbsp;&nbsp;<a onclick="this.parentNode.parentNode.style.display=\'none\'" href="javascript:;">\u4E0D\u9700\u8981</a>';
show(_oSelf.S(_ID._sGreenBarText),false);
}
else if(_sType=="2")
{
_oSelf.S(_ID._sGreenBar).innerHTML='\u611F\u8C22\u53C2\u4E0E\uFF01\u5982\u679C\u4E0D\u60F3\u518D\u6536\u5230\u6B64\u53D1\u4EF6\u4EBA\u7684\u90AE\u4EF6\uFF0C\u60A8\u53EF\u4EE5&nbsp;&nbsp;<a ck="reject" href="javascript:;">\u62D2\u6536</a>&nbsp;&nbsp;<a onclick="this.parentNode.parentNode.style.display=\'none\'" href="javascript:;">\u7EE7\u7EED\u6536\u53D6</a>';
show(_oSelf.S(_ID._sGreenBarText),false);
}
else{
getTop().showInfo("\u5DF2\u6210\u529F\u53CD\u9988\u60C5\u51B5");
var _oTotalBar=_oSelf.S(_ID._sGreenBar).parentNode;
_oTotalBar.style.display="none";
}
rdVer(_asMailId,1);
},openHttpImage:function(_aoTarget,_asMailId,_aoEvent){
runUrlWithSid(_SPAM_REPORT.replace({rtype:"1000004",rmsg:_asMailId,rresult:1}));
this.showHttpImage_();
preventDefault(_aoEvent);
},openUserEdu:function(_aoTarget,_asMailId){
runUrlWithSid(_SPAM_REPORT.replace({rtype:1000007,rresult:1,rmsg:_asMailId}));
},exbookEmlMgr:function(_aoTarget,_asMailId){
var _oSelf=this,_sBook=_oSelf.attr(_aoTarget,"book"),_nIsTuan=_oSelf.attr(_aoTarget,"tuan")||0;
loadingBox({model:"\u53CD\u5783\u573E",js:["$js_path$webp/qmantispam264eed.js"],oncheck:function(){
return !!getTop().QMAntiSpam;
},onload:function(){
var _oSpam=new QMAntiSpam.qmExbookEmlMgr({sMailId:_asMailId,from:_oSelf.getFromInfo_(),fOnReload:function(){
_clearReload(_asMailId,_oSelf._moWin);
}});
if(_sBook=="1")
{
_oSpam.book1();
}
else{
_oSpam.book2(_nIsTuan);
}
}});
}};
});
_oClassHome.qmMarkAdMail=inherit("qmMarkAdMail",_oClassHome._qmBaseDM,function(_aoSuper){
return {_initMemVar:function(_aoConfig,_aoMailInfo){
var _oSelf=this;
_oSelf._moMailInfo=_aoMailInfo;
_oSelf._moConfig=_aoConfig;
},_setEvent:function(){
var _oSelf=this;
_oSelf.evt(["ck"],_oSelf.SN(_NAME._sAdMail));
},reportAd:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this;
var _oFrom=_oSelf.getFromInfo_();
var _oConfig=_oSelf._moConfig;
var _bMarkAd=_oSelf.attr(_aoTarget,'toad')!="0";
reportAdJson({bNotAd:!_bMarkAd,bShowConfirm:true},{oWin:_oSelf._moWin,sFid:_oConfig.folderid,oACB:null,bPop:false,bML:false,oncomplete:function(_aoCBInfog){
_oSelf.dealCustomUI('MailMethod',[_aoCBInfog,'markAdMail',_bMarkAd]);
},oMail:[{sMid:_asMailId,bUnr:false,sSName:_oFrom.name,sSEmail:_oFrom.addr}]});
}};
});
_oClassHome.qmSenderInfo=inherit("qmSenderInfo",_oClassHome._qmBaseDM,function(_aoSuper){
return {_initMemVar:function(_aoConfig,_aoMailInfo){
this._moMail=_aoMailInfo;
this._moConfig=_aoConfig;
},_setEvent:function(){
var _oSelf=this;
_oSelf.evt(["ck"],[_ID._sSenderInfo,_ID._sSenderInfo2,_ID._sSenderInfo3]);
},_getBlogList:function(){
var _oSelf=this;
createIframe(_oSelf._moWin,_S_RD_LIST.replace({sid:getSid(),mail:_oSelf._moMail}),{id:"iframeRss"});
},_getMailList:function(){
var _oSelf=this;
QMAjax.send(_S_ML_LIST.replace({sid:getSid(),mailid:_oSelf.getMailId(),mail:_oSelf._moMail}),{method:"GET",onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oJson=evalValue(_asParam);
_oSelf.S("divMails_sidebar").innerHTML=_oJson.sHtml||"";
}
}});
},toggle:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oPanelInfo=_oSelf.S(_ID._sSenderInfo),_bShow=!isShow(_oPanelInfo);
_oPanelInfo.style.zIndex=_bShow?"21":"20";
show(_oPanelInfo,_bShow);
_oSelf.S(_ID._sMainMail).className=_bShow?"myleftbar":"";
_oSelf.S(_ID._sPageEnd).className=_bShow?"myleftbar":"";
_oSelf.S(_ID._sContentDiv).className=_bShow?"body myleftbar_":"body";
if(bnewwin)
{
show(_oSelf.S(_ID._sNextMailTop),!_bShow);
show(_oSelf.S(_ID._sNextMailBt),!_bShow);
_oPanelInfo.style.marginTop="40px";
}
if(_oConfig.logintype!="2")
{
_oSelf._getMailList();
}
}};
});
_oClassHome.qmConvMail=inherit("qmConvMail",_oClassHome.qmReadMail,function(_aoSuper){
return {_initMemVar:function(){
var _oSelf=this;
_aoSuper._initMemVar.apply(_oSelf,arguments);
_oSelf._moSubMails={};
_oSelf._mnNewSubMails=0;
_oSelf._moNewsSubMails=[];
},_setEvent:function(){
var _oSelf=this;
_oSelf.evt(["ck","md","dck","mor","mot"],_oSelf._moWin.document.body);
_oSelf._initSelectAllEvt();
},_rInsAsyn:function(){
var _oSelf=this;
var _oWin=_oSelf._moWin;
var _oTop=getTop();
var _oWarpNode=_oSelf.S('submail_inner_body');
if(_oWarpNode)
{
_oTop.E(_oTop.finds('[asyninit=1]',_oWin),function(_aoNode){
_oWarpNode.appendChild(_aoNode);
});
}
},_initSelectAllEvt:function(){
var _oTop=getTop(),_oSelf=this,_oWin=_oSelf._moWin;
addEvent(_oWin.document,"keydown",function(_aoEvent){
if(_aoEvent.ctrlKey&&_aoEvent.keyCode=="65")
{
_oSelf.S(_oSelf.msCurrent)&&_oSelf.doSelectAll(_aoEvent,_oSelf.S(_oSelf.msCurrent));
}
});
},_startSubMod:function(_aoSubMod){
var _oSelf=this,_oModule,_oMailInfo=_oSelf._moMailInfo,_oContext=extend({},_oSelf._moContext,_aoSubMod,{oMailInstance:_oSelf});
switch(_oContext.sModuleName)
{case "qmSubMail":
var _oSubMail=_oMailInfo.oSubMails[_oContext.sAux]||[{},{}],_sContext=_oContext.sContext||"";
_oSubMail[0].cmailid=_oSelf.getMailId();
if(_oContext.sAux!=0)
{
_oSubMail[1].to=_oMailInfo.oSubMails[0][1].to;
_oSubMail[1].cc=_oMailInfo.oSubMails[0][1].cc;
}
_oModule=new _oClassHome.qmSubMail(_oSubMail[0],_oSubMail[1],_oContext);
_sContext&&(_oSelf._moSubMails[_sContext]=_oModule);
break;
case "qmQReply":
var _oSubMail=_oMailInfo.oSubMails[_oContext.sAux]||[{},{}],_sInitEditorContent='';
if(_oSelf._moQReply)
{
_sInitEditorContent=_oSelf._moQReply.getContent();
_oSelf._moQReply.removeSelf();
}
_oModule=_oSelf._moQReply=new _oClassHome.qmQReply(_oSubMail[0],_oSubMail[1],{fCheckBcc:function(){
callBack.call(_oSelf,_oSelf.checkBcc,arguments);
},fQReplyComplete:function(_avParam){
var _oJson=evalValue(_avParam);
if(_oJson)
{
this.S(_ID._sQSource).view("init");
_oSelf._qReplyComplete(_oJson.mailstr);
}
else{
this.S(_ID._sQSource).view("show");
}
},s:"conv_send",sourceContent:_sInitEditorContent},_oContext);
break;
case "qmAntiSpam":
_oModule=_oSelf._moAntiSpam=new _oClassHome.qmAntiSpam(_oSelf._moConfig,_oMailInfo,_oContext);
break;
case "qmMarkAdMail":
_oModule=_oSelf._moMarkAdMail=new _oClassHome.qmMarkAdMail(_oSelf._moConfig,_oMailInfo,_oContext);
break;
}return _oModule;
},initQReply:function(_asAux,_asContext){
this._startSubMod({sModuleName:"qmQReply",sAux:_asAux,sContext:_asContext});
},_qReplyComplete:function(_asMailStr){
var _oSelf=this,_oStartDom=_oSelf.S(_ID._sSubMailStartDiv);
insertHTML(_oStartDom,"afterEnd",_asMailStr);
var _oMailLists=finds('div[module="qmSubMail"]',_oSelf.S('submail_inner_body'));
_oSelf._startSubMod({sContext:_oMailLists[0].getAttribute("context"),sModuleName:"qmSubMail",sAux:_oMailLists[0].getAttribute("aux")});
},goCal:function(_asDate,_asMailId){
var _oSelf=this,_oMail=_oSelf._moSubMails[_asMailId];
var _sSubject=_oMail._moMailInfo.subject;
_aoSuper.goCal.call(this,_asDate,_asMailId,_sSubject);
},optMail:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oContentDiv=_oSelf.S('submail_inner_body'),_oFoldDivs=finds('div[ck="dispSubMail"]',_oContentDiv),_oFirstDiv=_oSelf.parentToContextDom(_oFoldDivs[0]);
if(_oFirstDiv)
{
_asMailId=_oFirstDiv.getAttribute('context');
}
_aoSuper.optMail.call(_oSelf,_aoTarget,_asMailId,_aoEvent);
},_pageReady:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_oConfig=_oSelf._moConfig,_oMailInfo=_oSelf._moMailInfo,_oSubMails=_oMailInfo.oSubMails;
_oSelf._fakeReadMail();
_oSelf._readMailFinish();
_oSelf._rInsPageEnd();
_oSelf._rInsAsyn();
initMailSelect(_oConfig.oMoveItems,true,_oConfig.bOpenTag=="1",_oWin,_oConfig.folderid,_oConfig.bAutoTag);
E(_oSubMails,function(_aoItem){
if(_aoItem)
{
_oSelf._startSubMod(_aoItem[2]);
}
_aoItem&&getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,_aoItem[2].sContext);
});
if(_oMailInfo.nLen>2&&_oSubMails[0][1].to.length>2&&getTop().g_encryptuin==_oSubMails[_oMailInfo.nLen-1][1].from.qq)
{
getTop().requestShowTip("tip74container","74",_oWin);
}
if(_oConfig.nRet!=0&&_oConfig.bRetry=="")
{
var _sLoc=_oSelf._moWin.location.href+"";
_sLoc=_sLoc.replace(/#.*/gi,"")+"&retry=1";
_oSelf.clearCache();
_oSelf._moWin.location=_sLoc;
}
_oSelf._flushFolder();
_oConfig.bClearRDCache&&_oSelf.clearCache();
},getSubMailWithDom:function(_aoDom){
var _oSelf=this,_oDom=_aoDom,_oDoc=_aoDom.ownerDocument,_sMailId,_oSubMail;
while(_oDom&&_oDom!=_oDoc)
{
if((_sMailId=attr(_oDom,_qmBaseDM._CON_ATTR))&&(_oSubMail=_oSelf._moSubMails[_sMailId]))
{
return _oSubMail.getMailInfo();
}
_oDom=_oDom.parentNode;
}
return null;
},_delConvMail:function(_abIsPerDel){
var _oSelf=this;
doRmMail(extend(_oSelf.getCBInfo(),{oncomplete:function(_aoCBInfo,_aoResult){
_oSelf.dealCustomUI('MailMethod',[_aoCBInfo,'delMail',_aoResult]);
var _sUrl=_aoResult.url||"";
if(_sUrl.indexOf("/cgi-bin/readmail?")!=-1)
{
var _sTemplate=getUrlParams(_sUrl||_oSelf._moWin.location)["t"];
var _sType=(_sTemplate=="readmail_ad"||_sTemplate=="readmail_ad_conversation")?"collo":"";
_oSelf.prevandnext({mailid:getUrlParams(_sUrl||_oSelf._moWin.location)["mailid"],type:_sType});
return true;
}
}}),["mailaction=mail_del&mailid=",_oSelf.getMailId(),(_abIsPerDel?"&Fun=PerDel":"")]);
},showAdSenderMoreInfo:function(_aoTarget,_asMailId,_aoEvent){
this.dealCustomUI('showAdSenderMoreInfo',arguments);
},delMail:function(_aoTarget,_asMailId){
var _oSelf=this,_nCount=finds("input[ck='selectSubMail']",_oSelf.S("submail_inner_body")).length,_bIsPerDel=_oSelf.attr(_aoTarget,"opt")=="1";
if(_nCount==1&&!_bIsPerDel)
{
getTop().QMMLCache.upVer();
_oSelf._delConvMail(_bIsPerDel);
return;
}
new QMDialog({sTitle:"\u5220\u9664\u786E\u8BA4",sBodyHtml:TE(['<div>','<div class="cnfx_content">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','$@$if($isperdel$)$@$','$@$if($count$>1)$@$','<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5F7B\u5E95\u5220\u9664\u8FD9<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5F7B\u5E95\u5220\u9664\u540E\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6574\u7406\u90AE\u4EF6\u8FDB\u884C\u90E8\u5206\u5220\u9664\u3002</div>','$@$else$@$','\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F','$@$endif$@$','$@$else$@$','$@$if($count$>1)$@$','<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8FD9<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5220\u9664\u540E\u5C06\u79FB\u5230\u201C\u5DF2\u5220\u9664\u201D\u4E2D\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6574\u7406\u90AE\u4EF6\u8FDB\u884C\u90E8\u5206\u5220\u9664\u3002</div>','$@$else$@$','\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u79FB\u5230\u201C\u5DF2\u5220\u9664\u201D\u4E2D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F','$@$endif$@$','$@$endif$@$','<div></div>','</div>','</div>']).replace({isperdel:_bIsPerDel,count:_nCount}),sFootHtml:TE(['<div class=" txt_right cnfx_btn">','$@$if($count$>1)$@$','<a class="btn_gray btn_left" id="selectmail" href="javascript:;">\u6574\u7406\u90AE\u4EF6<span class="btn_dots">...</span></a>','$@$endif$@$','<a class="btn_gray confirm wd2" id="confirm" href="javascript:;">\u786E\u5B9A</a>','<a class="btn_gray cancelwd2" id="cancel" href="javascript:;">\u53D6\u6D88</a>','</div>']).replace({count:_nCount}),onshow:function(){
var _oDlg=this;
_oDlg.S("confirm")&&_oDlg.S("confirm").focus();
},onload:function(){
var _oDlg=this;
if(_nCount>1)
{
_oDlg.S("selectmail").onclick=function(){
_oSelf._changeToEditSubMail(true);
_oDlg.close();
};
}
_oDlg.S("confirm").onclick=function(){
getTop().QMMLCache.upVer();
_oSelf._delConvMail(_bIsPerDel);
_oDlg.close();
};
_oDlg.S("cancel").onclick=function(){
_oDlg.close();
};
}});
},delManageMail:function(_aoTarget,_asMailId){
var _oSelf=this,_bIsPerDel=_oSelf.attr(_aoTarget,"opt")=="1";
rmMail(_bIsPerDel,extend(_oSelf.getCBInfo(),{oncomplete:function(_aoCBInfo,_aoResult){
var _sUrl=_aoResult.url||"";
var _sTemplate=getUrlParams(_sUrl||_oSelf._moWin.location)["t"];
var _sType=(_sTemplate=="readmail_ad"||_sTemplate=="readmail_ad_conversation")?"collo":"";
if(_sUrl.indexOf("/cgi-bin/readmail?")!=-1)
{
_oSelf.prevandnext({mailid:getUrlParams(_sUrl||_oSelf._moWin.location)["mailid"],type:_sType});
return true;
}
}}));
},reportSpam:function(_aoTarget,_asMailId,_aoEvent,_afCallBack){
this._moAntiSpam||this._startSubMod({sModuleName:"qmAntiSpam"});
this._moAntiSpam.reportSpam(_aoTarget,_asMailId,_aoEvent,_afCallBack);
},reject:function(_aoTarget){
var _oSelf=this;
if(attr(_aoTarget,"type_reject")=="sys_reject")
{
_oSelf._moAntiSpam||_oSelf._startSubMod({sModuleName:"qmAntiSpam"});
_oSelf._moAntiSpam.reject(_aoTarget,_oSelf.getMailId());
return;
}
var _oMail=[];
var _oMailInfo=_oSelf._moMailInfo;
for(var i=0;i<_oMailInfo.nLen;++i)
{
var _oTempFrom=_oMailInfo.oSubMails[i][1].from;
var _bIsSelf=_oSelf._moWin['__relative_list_self__'][_oTempFrom.addr]||0;
if(_bIsSelf!=1)
{
_oMail.push({sSName:_oTempFrom.name,sSEmail:_oTempFrom.addr,sMid:_oMailInfo.oSubMails[i][2].sContext});
}
}
reportAddrConfirm({oMail:_oMail},{sTitle:'\u62D2\u6536\u786E\u8BA4',sConfirmBtnTxt:'\u62D2\u6536',sTextTitle:'\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u4EE5\u4E0B\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F',onreturn:function(_abOK,_oAddrs,_oMailIds,_oHashMailIdMap){
if(_abOK)
{
getTop().QMMLCache.upVer();
_oSelf._moAntiSpam||_oSelf._startSubMod({sModuleName:"qmAntiSpam"});
_oSelf._moAntiSpam._createMailFrm(_oSelf.getMailId(),{"addr":_oAddrs.join(";"),"submailid":_oMailIds.join(";"),"nogopage":_oSelf.dealCustomUI('getModelName')=='floatRead4mailList'?'true':''});
_oFrm=S("mail_frm",_oSelf._moWin);
if(_oFrm.s_reject_what)
{
_oFrm.s_reject_what.value="10";
}
setMailType("reject","true",attr(_aoTarget,"groupmail"),_oSelf._moWin);
setTimeout(function(){
_oSelf.dealCustomUI('MailMethod',[null,'reject']);
},300);
}
}});
},parentToContextDom:function(_aoDom){
return parents("div[module='qmSubMail']",_aoDom)[0];
},editSubMail:function(){
var _oSelf=this;
_oSelf._changeToEditSubMail(true);
},foldSubMail:function(_aoTarget){
var _oSelf=this,_oDomFoldIcon=_aoTarget,_oContentDiv=_oSelf.S("submail_inner_body"),_oFoldDivs=finds("div[ck='dispSubMail']",_oContentDiv),_bAllFolded=true,_oMailDiv,_oSubMail;
for(var i=0;i<_oFoldDivs.length;i++)
{
if(!isShow(_oFoldDivs[i]))
{
_bAllFolded=false;
break;
}
}
if(!_bAllFolded)
{
E(_oFoldDivs,function(_aoDom){
if(!isShow(_aoDom))
{
_oMailDiv=_oSelf.parentToContextDom(_aoDom);
if(_oMailDiv)
{
_oSubMail=_oSelf._moSubMails[_oMailDiv.getAttribute("context")];
_oSubMail&&_oSubMail._fandx(true);
}
}
});
setTimeout(function(){
addClass(_oDomFoldIcon,"unfoldSubMail");
},250);
}
else{
_oMailDiv=_oSelf.parentToContextDom(_oFoldDivs[0]);
if(_oMailDiv)
{
_oSubMail=_oSelf._moSubMails[_oMailDiv.getAttribute("context")];
_oSubMail&&_oSubMail.dispSubMail(_oFoldDivs[0]);
}
setTimeout(function(){
rmClass(_oDomFoldIcon,"unfoldSubMail");
},250);
}
},getCBInfo4EditMode:function(){
var _oSelf=this;
if(_oSelf.S("selectAllSubMail").checked)
{
return _oSelf.getCBInfo();
}
var _oMailIds=[];
var _oSubMailsDiv=_oSelf.S("submail_inner_body");
var _oConfig=_oSelf._moConfig;
var _oMailInfo=_oSelf._moMailInfo;
var _oFrom=_oSelf.getFromInfo_();
;E(finds("input[ck='selectSubMail']",_oSubMailsDiv),function(_aoDom){
if(_aoDom.checked)
{
var _oContentDiv=_oSelf.parentToContextDom(_aoDom);
_oMailIds.push({sMid:attr(_oContentDiv,"context"),bSys:_oConfig.bSys,bUnr:attr(_oContentDiv,"newmail")=='true',bSubUnr:parseInt(attr(_oContentDiv,"newcnt")||'0',10)>0,bTms:false,sSName:_oFrom.name,sSEmail:_oFrom.addr,sDOMid:_oContentDiv.id});
}
});
return {oWin:_oSelf._moWin,sFid:_oConfig.folderid,bML:false,bReadmailEditMode:true,oMail:_oMailIds};
},getFromInfo_:function(){
return this._moMailInfo.oSubMails[0][1].from||{};
},configPreRmMail:function(_aoConfig,_asAction){
var _oSelf=this;
var _fOriginComplete=_aoConfig.oncomplete;
if(_aoConfig.bReadmailEditMode)
{
switch(_asAction)
{case 'moveMailJs':
_aoConfig.oncomplete=function(_aoConfig,_avResult){
if(_fOriginComplete)
{
_fOriginComplete.apply(this,arguments);
}
E(_aoConfig.oMail,function(_aoMail){
removeSelf(S(_aoMail.sDOMid,_aoConfig.oWin));
});
_oSelf.updateDelBtnCnt(0);
return true;
};
return true;
}
}
return false;
},delSomeSubMail:function(_aoTarget,_asMailId){
var _oSelf=this,_bPerl=attr(_aoTarget,"opt")=="1",_bAll=_oSelf.S("selectAllSubMail").checked,_oMailIds=[],_oIds=[],_nTotal=0,_oSubMailsDiv=_oSelf.S("submail_inner_body");
E(finds("input[ck='selectSubMail']",_oSubMailsDiv),function(_aoDom){
if(_aoDom.checked)
{
var _oContentDiv=_oSelf.parentToContextDom(_aoDom);
_oMailIds.push(attr(_oContentDiv,"context"));
_oIds.push(_oContentDiv.id);
}
_nTotal++;
});
if(_oIds.length==0)
{
showError("\u8BF7\u5148\u52FE\u9009\u8981\u5220\u9664\u7684\u90AE\u4EF6");
return;
}
function _do()
{
if(_bAll)
{
_oSelf._delConvMail(_bPerl);
}
else{
doRmMail(extend(_oSelf.getCBInfo(),{oncomplete:function(_aoCBInfo,_aoResult){
E(_oIds,function(_asId){
removeSelf(S(_asId,_oSelf._moWin));
});
_oSelf.updateDelBtnCnt(0);
return true;
}}),["mailaction=mail_del&mailid=",_oMailIds.join("&mailid="),(_bPerl?"&Fun=PerDel":"")]);
}
ossLog("delay","all","stat=nothing&locval=convmail,delsomesubmail,"+(_bPerl?"1":"0"));
}
if(_bPerl)
{
confirmBox({msg:T(['<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5F7B\u5E95\u5220\u9664\u6240\u9009\u7684<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\u3002</div>']).replace({count:_oMailIds.length}),title:"\u5220\u9664\u786E\u8BA4",cancelBtnTxt:"\u53D6\u6D88",confirmBtnTxt:"\u786E\u5B9A",onreturn:function(_abIsOk){
if(_abIsOk)
{
_do();
}
}});
}
else{
_do();
}
},selectAllSubMail:function(_aoTarget){
var _oSelf=this,_nCnt=0;
E(finds("input[ck='selectSubMail']",_oSelf.S("submail_inner_body")),function(_aoDom){
_aoDom.checked=_aoTarget.checked;
if(_aoDom.checked)
{
_nCnt++;
}
});
_oSelf.updateDelBtnCnt(_nCnt);
},updateDelBtnCnt:function(_anCnt){
var _oSelf=this;
E(finds("a[ck='delSomeSubMail']",_oSelf._moWin.document),function(_aoDom){
_aoDom.innerHTML=_aoDom.innerHTML.replace(/\(.*?\)/,"")+"("+_anCnt+")";
if(0==_anCnt)
{
addClass(_aoDom,"btn_disabled");
}
else{
rmClass(_aoDom,"btn_disabled");
}
});
},_changeToEditSubMail:function(_abEditable){
var _oSelf=this,_oContentDiv=_oSelf.S("submail_inner_body"),_oBody=_oSelf._moWin.document.body;
if(_abEditable)
{
var _oFoldDivs=finds("div[ck='dispSubMail']",_oContentDiv);
E(_oFoldDivs,function(_aoDom){
if(!isShow(_aoDom))
{
var _oMailDiv=_oSelf.parentToContextDom(_aoDom);
if(_oMailDiv)
{
var _oSubMail=_oSelf._moSubMails[_oMailDiv.getAttribute("context")];
_oSubMail&&_oSubMail._fandx('auto');
}
}
});
addClass(_oBody,"mail_select");
E(finds("div.qm_converstaion_summary_body",_oContentDiv),function(_aoDom){
attr(_aoDom,"_title",_aoDom.title);
_aoDom.title="";
attr(_aoDom.parentNode,"ck","selectSubMailOuter");
});
var _oSelectAll=_oSelf.S("selectAllSubMail");
_oSelectAll.checked=true;
_oSelf.selectAllSubMail(_oSelectAll);
}
else{
rmClass(_oBody,"mail_select");
E(finds("div.qm_converstaion_summary_body",_oContentDiv),function(_aoDom){
_aoDom.title=attr(_aoDom,"_title");
attr(_aoDom.parentNode,"ck","dispSubMail");
});
}
},cancelEditSubMail:function(_aoTarget,_asMailId){
var _oSelf=this;
_oSelf._changeToEditSubMail(false);
_oSelf.updateMailSize();
},getSubMailFrom:function(_asMailId){
var _oSubMail=this._moSubMails[_asMailId];
if(_oSubMail)
{
return _oSubMail.getMailInfo().from.name;
}
},goback:function(_aoTarget,_asMailId,_aoEvent){
var _abNoCache=false;
if(this.getTipsInfo().unread>0)
{
_abNoCache=true;
}
_aoSuper.goback.call(this,_aoTarget,_asMailId,_aoEvent,_abNoCache);
},isCurrentConv:function(_asMailId,_afCallback,_aoContext){
var _oSelf=this,_sConvMailId=_oSelf.getMailId();
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&s=$submail$&isAdMail=$isAdMail$&t=check_submail.json&mode=pre&action=checksubmail&mailid=$mailid$&submailid=$submailid$').replace({sid:getSid(),mailid:_sConvMailId,submailid:_asMailId,isAdMail:_oSelf._msModuleName=='qmAdConvMail'?1:0,submail:_oSelf._msModuleName=='qmAdConvMail'?'adsubmail':'submail'}),{method:'GET',onload:function(_abIsOk,_asParam){
var _oJson=evalValue(_asParam);
if(_abIsOk)
{
if(_oJson.ret=='1')
{
_afCallback.call(_aoContext,true);
_oSelf.updateNewMailTips(_oJson.maildata);
LogKV({sValue:'convMail|newmail|tips|show'});
return;
}
}
_afCallback.call(_aoContext,false);
}});
},getTipsInfo:function(_asMailStr){
return {'unread':this._mnNewSubMails||0};
},addNewSubMail:function(_aoMailData){
var _oSelf=this,_oStartDom=_oSelf.S(_ID._sSubMailStartDiv);
insertHTML(_oStartDom,'afterEnd',_aoMailData.mailstr);
var _oCurrentContent=_aoMailData.mailjson[2];
_oSelf._moMailInfo.oSubMails[_aoMailData.mailjson[0].sIndex]=_aoMailData.mailjson;
_oSelf._startSubMod({sContext:_oCurrentContent.sContext,sModuleName:_oCurrentContent.sModuleName,sAux:_oCurrentContent.sAux});
},adjustTipsPosition:function(_abInit,_aoReferPosition){
var _oSelf=this,_oTop=getTop(),_nFixedTop=12,_oTipsDiv=finds('a[ck="checkNewSubMail"]',_oSelf._moWin)[0];
if(!_oSelf._fDoAdjust)
{
_oSelf._fDoAdjust=function(){
var _nScrollTop=_oTop.bodyScroll(_oSelf._moWin.document,'scrollTop');
if(_aoReferPosition.top-_nScrollTop+_aoReferPosition.height/2<_nFixedTop)
{
_oTipsDiv.style.top=_nScrollTop-_aoReferPosition.top+_nFixedTop+'px';
_oTipsDiv.style.position='absolute';
}
else{
_oTipsDiv.style.position='static';
}
};
}
_oSelf._fDoAdjust();
if(_abInit)
{
_oTop.addEvent(_oSelf._moWin,'scroll',_oSelf._fDoAdjust);
}
else{
_oTop.removeEvent(_oSelf._moWin,'scroll',_oSelf._fDoAdjust);
}
},toggleNewMailTips:function(_abShow){
var _oSelf=this,_oTop=getTop(),_oTipsDiv=finds('a[ck="checkNewSubMail"]',_oSelf._moWin),_oAllCountDiv=finds('a[ck="foldSubMail"]',_oSelf._moWin);
if(_abShow)
{
_oSelf.adjustTipsPosition(true,_oTop.calcPos(_oAllCountDiv[0],'json'));
show(_oTipsDiv[0],true);
show(_oAllCountDiv[0],false);
}
else{
show(_oTipsDiv[0],false);
show(_oAllCountDiv[0],true);
_oSelf.adjustTipsPosition(false);
}
},updateNewMailTips:function(_aoMailData){
var _oSelf=this,_oCountDiv=S('newSubMailCnt',_oSelf._moWin);
_oSelf._mnNewSubMails++;
_oCountDiv.innerHTML=_oSelf._mnNewSubMails;
if(_oSelf._mnNewSubMails==1)
{
_oSelf.toggleNewMailTips(true);
}
_oSelf._moNewsSubMails.push(_aoMailData);
},clearMailTips:function(){
var _oSelf=this,_oTipsDiv=finds('a[ck="checkNewSubMail"]',_oSelf._moWin);
_oSelf._mnNewSubMails=0;
_oSelf._moNewsSubMails=[];
_oSelf.toggleNewMailTips(false);
_oSelf.updateMailSize();
},checkNewSubMail:function(_aoTarget){
var _oSelf=this,_oTop=getTop(),_oContentDiv=_oSelf.S('submail_inner_body');
for(var i=0;i<_oSelf._moNewsSubMails.length;i++)
{
var _oTmp=_oSelf._moNewsSubMails[i];
if(i==_oSelf._moNewsSubMails.length-1)
{
_oTmp.mailjson[1].bInitReply=true;
}
_oSelf.addNewSubMail(_oTmp);
}
var _oFoldDivs=finds('div[ck="dispSubMail"]',_oContentDiv),_oFirstDiv=_oSelf.parentToContextDom(_oFoldDivs[0]);
if(_oFirstDiv)
{
_oSubMail=_oSelf._moSubMails[_oFirstDiv.getAttribute('context')];
_oSubMail&&_oSubMail.dispSubMail(_oFoldDivs[0]);
}
_oSelf._fakeReadMail();
_oSelf.clearCache();
var _sFolderId=_oSelf._moConfig.folderid;
setFolderUnread(_sFolderId,getFolderUnread(_sFolderId)-1);
LogKV({sValue:'convMail|newmail|tips|click'});
_oTop.bodyScroll(_oSelf._moWin,'scrollTop',0);
_oSelf.clearMailTips();
}};
});
_oClassHome.qmSubMail=inherit("qmSubMail",_oClassHome.qmReadMail,function(_aoSuper){
return {_init:function(){
var _oSelf=this;
_aoSuper._init.apply(_oSelf,arguments);
if(!_oSelf._moMailInfo.bAsyn)
{
_oSelf._fixAbsoluteContent();
}
},_setEvent:function(){
var _oSelf=this,_oWin=_oSelf._moWin;
_oSelf.evt(["ck","md","dck","mot","mor"],_ID._sSubMail);
},_ready:function(){
var _oTop=getTop(),_oSelf=this,_oWin=_oSelf._moWin,_oConfig=_oSelf._moConfig,_oMailInfo=_oSelf._moMailInfo,_oContentDiv=_oSelf.S(_ID._sContentDiv);
if(!_oMailInfo.bAsyn)
{
_oConfig.bMusicManuPlay=_oConfig.sIndex!="0";
_oConfig.bBccToMe=_isBccToMe(_oMailInfo);
swapLink(_oContentDiv,_oMailInfo.disptype,_oWin,_oSelf.getMailId());
if(_oConfig.bNeedIdentifyLocation)
{
_oTop.locationIdentify(_oContentDiv,_fLocationIdentifyOptions({sMailId:_oSelf.getMailId()}));
}
_oSelf._sendCopyAction(_oContentDiv);
_oSelf.checkDecryptMail();
_oSelf._startSubMod({sModuleName:"qmRemark"});
_oSelf._startSubMod({sModuleName:"qmAntiSpam"});
_oSelf._startSubMod({sModuleName:"qmPlayerParser"});
if(_oMailInfo.bInitReply==true)
{
var _oQmReadMail=this._moWin.QMReadMail;
_oQmReadMail.initQReply(_oSelf._moContext.sAux,_oSelf.getMailId());
}
else{
var _oEditorDom=_oSelf.S('quickreply');
removeSelf(_oEditorDom);
}
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(_abWaitOK){
_oSelf._startSubMod({sModuleName:_sQMTRANSLATE});
_oSelf.rmLanguage(_oContentDiv);
});
_oSelf.showQBTipBtn();
_oSelf.osslogImgAttach_();
}
else{
_oMailInfo.bAsynOrg=true;
}
},getCMailId_:function(){
return this._moConfig.cmailid;
},selectSubMail:function(_aoTarget){
var _oSelf=this,_oAllCheckInput=S("selectAllSubMail",_oSelf._moWin),_bAllCheck=true,_nCnt=0;
E(finds("input[ck='selectSubMail']",S("submail_inner_body",_oSelf._moWin)),function(_aoDom){
if(!_aoDom.checked)
{
_bAllCheck=false;
}
else{
_nCnt++;
}
});
_oAllCheckInput.checked=_bAllCheck;
_oSelf._moWin.QMReadMail.updateDelBtnCnt(_nCnt);
},selectSubMailOuter:function(_aoTarget){
var _oSelf=this,_oCheckBoxInner=finds("input[ck='selectSubMail']",_aoTarget)[0];
_oCheckBoxInner.checked=(_oCheckBoxInner.checked?"":"checked");
_oSelf.selectSubMail(_oCheckBoxInner);
},clearCache:function(){
getTop().QMMLCache.upVer();
rdVer(this._moConfig.cmailid,1);
},afterDecrytMail:function(){
var _oSelf=this;
showInfo("\u90AE\u4EF6\u89E3\u5BC6\u6210\u529F");
_oSelf._asyncGetSubMail();
_oSelf.clearCache();
},_asyncGetMail:function(_asType,_afCallBack,_asQuery){
var _oSelf=this;
QMAjax.send(T("/cgi-bin/readmail?sid=$sid$&t=readsubmail&s=$s$&mailid=$mailid$&submailid=$submailid$&frid=$frid$&classalias=qmbox$index$&index=$index$&folderidAlias=$folderidAlias$"+(_asQuery?'&'+_asQuery:'')).replace({sid:getSid(),mailid:_oSelf.getCMailId_(),submailid:_oSelf.getMailId(),frid:_oSelf._moMailInfo.frid,s:_asType,index:_oSelf._moContext.sAux,folderidAlias:getTop().S("ipt_folderid",getMainWin())&&getTop().S("ipt_folderid",getMainWin()).value}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(_abIsOk,_asParam){
var _sText=trim(_asParam);
if(!_abIsOk||_sText.indexOf("<!--cgi exception-->")==0)
{
_afCallBack();
}
else{
_afCallBack(evalValue(_sText));
_oSelf.specialProcess();
_oSelf.processQQMailAppH5CardForWebmail();
_oSelf.checkPoison();
_oSelf.checkOnlineDocStarStatus();
}
}});
},_setRefer:function(_avArg,_aoFormRef){
var _oSelf=this,_sInner=_aoFormRef.innerHTML,_nIdx=0,_oForms=GelTags("form",_oSelf.S(_ID._sContentDiv));
for(_nIdx=0;_nIdx<_oForms.length;_nIdx++)
{
var _oForm=_oForms[_nIdx];
if(attr(_oForm,"_refer_")=="1")
{
if(_avArg.length)
{
if(_nIdx>=_avArg.length)
{
break;
}
try{
_oForm.innerHTML=_avArg[_nIdx].replace(/<\/q>/g,"</blockquote>");
}
catch(e)
{
debug("error:innerHTML readonly "+_nIdx);
}
}
_oForm.className=_avArg?"":"qQmAIlcOnV";
}
}
if(_avArg)
{
attr(_aoFormRef,"disp","0");
_sInner=_sInner.replace("\u663E\u793A","\u9690\u85CF");
}
else{
attr(_aoFormRef,"disp","1");
_sInner=_sInner.replace("\u9690\u85CF","\u663E\u793A");
}
_aoFormRef.innerHTML=_sInner;
},setCurrent:function(_aoTarget,_asMailId,_aoEvent){
var _oQmReadMail=this._moWin.QMReadMail;
_oQmReadMail.msCurrent="contentDiv"+this.context("sAux");
},unsetCurrent:function(_aoTarget,_asMailId,_aoEvent){
var _oQmReadMail=this._moWin.QMReadMail;
_oQmReadMail.msCurrent="";
},seek:function(){
var _oSelf=this,_oWin=_oSelf._moWin;
scrollIntoMidView(_oSelf.S(_ID._sSubMail),_oWin.document.body);
},newWinRead:function(_aoTarget,_asMailId,_aoEvent){
getTop().QMMLCache.upVer();
goNewWin(T([_READMAIL_,'&t=readmail&folderid=$folderid$&folderidAlias=$folderidAlias$']).replace({folderid:this._moConfig.folderid,mailid:_asMailId,folderidAlias:getTop().S("ipt_folderid",getMainWin())&&getTop().S("ipt_folderid",getMainWin()).value}),false);
},delMail:function(_aoTarget){
var _oSelf=this;
var _oQmReadMail=_oSelf._moWin.QMReadMail;
if(_oQmReadMail.updateMailSize(true).nTotal<=1)
{
_oQmReadMail.delMail(_aoTarget);
return;
}
rmMail(_oSelf.attr(_aoTarget,"opt")||0,extend(_oSelf.getCBInfo(),{oncomplete:function(_aoCBInfo,_aoResult){
_oSelf.dealCustomUI('MailMethod',[_aoCBInfo,'delSubMail',_aoResult]);
_oSelf._fandx(true,function(){
removeSelf(_oSelf.S(_ID._sSubMail));
_oQmReadMail.notify("delsubmail");
return true;
});
return true;
}}));
_oSelf.clearCache();
},getCBInfo:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oMailInfo=_oSelf._moMailInfo,_oFrom=_oSelf.getFromInfo_();
;return {oWin:_oSelf._moWin,sFid:_oConfig.folderid,bML:false,oMail:[{sMid:_oSelf.getMailId(),bSys:_oConfig.bSys,bUnr:false,bSubUnr:false,bTms:false,sSName:_oFrom.name,sSEmail:_oFrom.addr}]};
},fReportSpamCallBack:function(){
var _oSelf=this;
return function(){
var _oQMReadMail=_oSelf._moWin.QMReadMail;
_oSelf._fandx(true,function(){
removeSelf(_oSelf.S(_ID._sSubMail));
_oQMReadMail._moMailInfo.nLen>1&&_oQMReadMail.notify("delsubmail");
return true;
});
return _oQMReadMail._moMailInfo.nLen-1?true:false;
};
},moreOpt:function(_aoTarget,_asMailId){
var _oPos=calcPos(_aoTarget),_oSelf=this,_oWin=_oSelf._moWin,_oDocElem=_oWin.document&&_oWin.document.documentElement,_oItems,_nY=_oPos[2],_nMenuHeight=185,_nWindowHeight=_oDocElem?(_oDocElem.clientHeight+_oDocElem.scrollTop):0;
if(_oSelf._moConfig.bEncrypt)
{
_oItems=[{sId:"reportSpam",sItemValue:"\u4E3E\u62A5"},{sId:"PerDel",sItemValue:"\u5F7B\u5E95\u5220\u9664"}];
}
else{
_oItems=[{sId:"reportSpam",sItemValue:"\u4E3E\u62A5"},{sId:"PerDel",sItemValue:"\u5F7B\u5E95\u5220\u9664"},{sId:"fwgroup",sItemValue:"\u8F6C\u53D1\u5230\u7FA4\u90AE\u4EF6"},{sId:"note",sItemValue:"\u4FDD\u5B58\u5230\u8BB0\u4E8B\u672C"},{sId:"fweml",sItemValue:"\u4F5C\u4E3A\u9644\u4EF6\u8F6C\u53D1"},{sId:"dleml",sItemValue:"\u5BFC\u51FA\u4E3Aeml\u6587\u4EF6"},{sId:"mime",sItemValue:"\u663E\u793A\u90AE\u4EF6\u539F\u6587"},{sId:"code",sItemValue:"\u90AE\u4EF6\u6709\u4E71\u7801\uFF1F"}];
}
_nY+_nMenuHeight>_nWindowHeight&&(_nY-=(_nMenuHeight+15));
new QMMenu({oEmbedWin:_oSelf._moWin,sId:"menu_"+_asMailId,oItems:_oItems,nX:_oPos[3],nY:_nY,bAutoClose:false,onitemclick:function(_asId,_aoItem){
if(_asId=="reportSpam")
{
_oSelf._moAntiSpam.reportSpam(_aoTarget,_asMailId,null,_oSelf.fReportSpamCallBack());
_oSelf.clearCache();
}
else if(_asId=="PerDel")
{
_oSelf.delMail({opt:"1"});
}
else{
_oSelf.optMail2({opt:_asId},_asMailId);
}
}});
},dispRef:function(_aoTarget){
var _oSelf=this,_sDisp=_oSelf.attr(_aoTarget,"disp");
if(!_aoTarget||_aoTarget.disabled)
{
return;
}
if(_sDisp=="1")
{
_oSelf._setRefer(true,_aoTarget);
}
else if(_sDisp=="asyn")
{
_aoTarget.disabled=true;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
_oSelf._asyncGetMail("refer",function(_aoFolds){
showProcess(0);
if(_aoFolds)
{
_oSelf._setRefer(_aoFolds,_aoTarget);
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
_aoTarget.disabled=false;
});
}
else if(_sDisp=="0")
{
_oSelf._setRefer(false,_aoTarget);
}
},dispDetail:function(_aoTarget){
var _oSelf=this,_oMailInfo=_oSelf._moMailInfo,_sDisp=_oSelf.attr(_aoTarget,"disp"),_oDetailBtn=_oSelf.S(_ID._sDetailBtn),_oDetail=_oSelf.S(_ID._sDetail),_oSum=_oSelf.S(_ID._sSum),_oImg=GelTags("img",_oDetailBtn)[0],_oA=GelTags("a",_oDetailBtn)[0],_oReferInfo=_oSelf.S(_ID._sReferInfo);
if(_sDisp=="1")
{
if(isShow(_oDetail))
{
return;
}
show(_oSum,false);
qmAnimation.expand(_oDetail);
_oImg.title=_oA.title="\u9690\u85CF\u90AE\u4EF6\u8BE6\u60C5";
_oImg.className="qm_conversation_input_hidemail";
_oA.innerHTML="\u9690\u85CF";
attr(_oDetailBtn,"disp","0");
if(_oReferInfo&&_oReferInfo.innerHTML==""&&_oSelf._moWin.QMReadMail)
{
_oReferInfo.innerHTML=_oSelf._moWin.QMReadMail.getSubMailFrom(_oMailInfo.refermailid)||"";
}
}
else{
if(isShow(_oSum))
{
return;
}
qmAnimation.fold(_oDetail,{oncomplete:function(){
show(_oSum,true);
}});
_oImg.title=_oA.title="\u663E\u793A\u90AE\u4EF6\u8BE6\u60C5";
_oImg.className="qm_conversation_input_showmail";
_oA.innerHTML="\u90AE\u4EF6\u8BE6\u60C5";
attr(_oDetailBtn,"disp","1");
}
},_fandx:function(_abFold,_afCallBack){
debug("_fandx");
var _oSelf=this,_oTop=getTop(),_oFold=_oSelf.S(_ID._sFold),_oExpand=_oSelf.S(_ID._sExpand),_oSubMailDiv=_oSelf.S(_ID._sSubMail);
if(_abFold=='auto')
{
_abFold=!isShow(_oFold);
}
if(_abFold)
{
show(_oFold,true);
var _nTo=_oFold.scrollHeight;
show(_oFold,false);
qmAnimation.fold(_oExpand,{speed:"fast",to:_nTo||48,oncomplete:function(){
if(_afCallBack&&_afCallBack()===true)
{
return;
}
setClass(_oSubMailDiv,"qm_con_fold clearfix");
show(_oExpand,false);
show(_oFold,true);
}});
}
else{
var _nFrom=_oFold.scrollHeight;
show(_oFold,false);
show(_oExpand,true);
setClass(_oSubMailDiv,"qm_con_expand clearfix");
qmAnimation.expand(_oExpand,{from:_nFrom,speed:"fast",tween:"Sine",oncomplete:_afCallBack});
var _oDomAttCon=_oTop.finds("div[ui-type='attCon']",_oSubMailDiv)[0],_oDomAtt=_oDomAttCon&&_oTop.finds("a[ui-type='netdiskBind']",_oDomAttCon)[0];
_oTop.QMNetDisk&&_oDomAttCon&&_oDomAtt&&setTimeout(function(){
_oTop.QMNetDisk.route("tips","readmail",_oDomAttCon,{offsetTop:80,offsetLeft:_oDomAtt.offsetLeft+_oDomAtt.clientWidth/2});
},3000);
}
},toReferMail:function(_aoTarget){
var _oSelf=this;
_oSelf._moWin.QMReadMail.notify("toRefer",_oSelf._moMailInfo.refermailid);
},_asyncGetSubMail:function(_asQuery){
var _oSelf=this;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
_oSelf._bAsyncGetSubMail=true;
_oSelf._asyncGetMail("submail",function(_aoJson){
_oSelf._bAsyncGetSubMail=false;
if(_aoJson)
{
showProcess(0);
_oSelf.S(_ID._sSubMail).innerHTML=_aoJson.mailstr;
typeof (_oSelf._moWin.showNetDisk)=="function"&&_oSelf._moWin.showNetDisk(_oSelf.S(_ID._sSubMail));
_oSelf._fandx(false,function(){
_oSelf._fixAbsoluteContent();
});
_oSelf._moMailInfo.bAsyn=false;
_oSelf._ready();
_fFixXFDownload();
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
},_asQuery);
},reportAdClick:function(_aoTarget){
var _oSelf=this,_isUnread=((_oSelf.attr(_aoTarget,"newmail")=="true")?1:0);
getTop().ossLog("delay","all","stat=admail_read&new="+_isUnread+"&mailid="+encodeURI(_oSelf.getMailId()));
},dispSubMail:function(_aoTarget){
var _oSelf=this;
if(_oSelf._bAsyncGetSubMail)
{
return;
}
try{
var _oFold=_oSelf.S(_ID._sFold);
if((isShow(_oFold)||_oSelf.attr(_aoTarget,"asyn")=="1")&&_oSelf._msModuleName.indexOf("Ad")>-1)
{
_oSelf.reportAdClick(_aoTarget);
}
}
catch(e)
{
}
if(_oSelf.attr(_aoTarget,"asyn")=="1")
{
_oSelf._asyncGetSubMail();
if(_oSelf.attr(_aoTarget,"newmail")=="true")
{
_oSelf.attr(_aoTarget,"newmail","false");
hasClass(_aoTarget,"mailunread")&&rmClass(_aoTarget,"mailunread");
!hasClass(_aoTarget,"mailread")&&addClass(_aoTarget,"mailread");
_oSubmailCnt=S("submailCnt",_oSelf._moWin);
if(_oSubmailCnt)
{
var _nCnt=parseInt(_oSubmailCnt.innerHTML);
if(_nCnt>1)
{
_nCnt--;
_oSubmailCnt.innerHTML=_nCnt+"/";
}
else{
show(_oSubmailCnt,0);
}
}
}
}
else{
if(_oSelf.attr(_aoTarget,"newmail")=="true")
{
_oSelf.attr(_aoTarget,"newmail","false");
hasClass(_aoTarget,"mailunread")&&rmClass(_aoTarget,"mailunread");
!hasClass(_aoTarget,"mailread")&&addClass(_aoTarget,"mailread");
}
_oSelf._fandx('auto');
}
}};
});
_oClassHome.qmAdConvMail=inherit("qmAdConvMail",_oClassHome.qmConvMail,function(_aoSuper){
return {_pageReady:function(){
_aoSuper._pageReady.call(this,arguments);
this._startSubMod({sModuleName:"qmAntiSpam"});
this._startSubMod({sModuleName:"qmMarkAdMail"});
this._showAD();
this.showQBTipBtn();
},_startSubMod:function(_aoSubMod){
var _oSelf=this,_oModule,_oMailInfo=_oSelf._moMailInfo,_oContext=extend({},_oSelf._moContext,_aoSubMod,{oMailInstance:_oSelf});
switch(_oContext.sModuleName)
{case "qmAdSubMail":
var _oSubMail=_oMailInfo.oSubMails[_oContext.sAux]||[{},{}],_sContext=_oContext.sContext||"";
_oSubMail[0].cmailid=_oSelf.getMailId();
_oSubMail[0].oMoveItems=_oSelf._moConfig.oMoveItems;
_oModule=new _oClassHome.qmAdSubMail(_oSubMail[0],_oSubMail[1],_oContext);
_sContext&&(_oSelf._moSubMails[_sContext]=_oModule);
break;
case "qmQReply":
var _oSubMail=_oMailInfo.oSubMails["0"];
_oModule=_oSelf._moQReply=new _oClassHome.qmQReply(_oSubMail[0],_oSubMail[1],{fCheckBcc:function(){
callBack.call(_oSelf,_oSelf.checkBcc,arguments);
},fQReplyComplete:function(_avParam){
_oSelf._qReplyComplete(_avParam);
},s:"conv_send"},_oContext);
break;
case "qmAntiSpam":
_oModule=_oSelf._moAntiSpam=new _oClassHome.qmAntiSpam(_oSelf._moConfig,_oMailInfo,_oContext);
break;
case "qmMarkAdMail":
_oModule=_oSelf._moMarkAdMail=new _oClassHome.qmMarkAdMail(_oSelf._moConfig,_oMailInfo,_oContext);
break;
}return _oModule;
},reportSpam:function(_aoTarget,_asMailId,_aoEvent,_afCallBack){
this._moAntiSpam||this._startSubMod({sModuleName:"qmAntiSpam"});
this._moAntiSpam.reportSpam(_aoTarget,_asMailId,_aoEvent,_afCallBack);
},parentToContextDom:function(_aoDom){
return parents("div[module='qmAdSubMail']",_aoDom)[0];
},starMail:function(_aoTarget){
var _oSelf=this,_bStar=hasClass(_aoTarget,"qm_ico_flagoff");
starMail(_bStar,extend(_oSelf.getCBInfo(),{oncomplete:function(_aoCBInfog,_abIsSet){
_oSelf.dealCustomUI('MailMethod',[_aoCBInfog,'starMail',_abIsSet]);
_oSelf.clearCache();
return true;
}}));
},_showAD:function(){
var _oMailInfo=this._moMailInfo;
getTop().initAD(_aoLoadWin);
}};
});
_oClassHome.qmAdSubMail=inherit("qmAdSubMail",_oClassHome.qmSubMail,function(_aoSuper){
return {_asyncGetSubMail:function(_asQuery){
var _oSelf=this;
_oSelf._bAsyncGetSubMail=true;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
_oSelf._asyncGetMail("adsubmail",function(_aoJson){
_oSelf._bAsyncGetSubMail=false;
if(_aoJson)
{
showProcess(0);
_oSelf.S(_ID._sSubMail).innerHTML=_aoJson.mailstr;
typeof (showNetDisk)=="function"&&showNetDisk(_oSelf.S(_ID._sSubMail));
_oSelf._fandx(false,function(){
_oSelf._fixAbsoluteContent();
});
_oSelf._moMailInfo.bAsyn=false;
_oSelf._ready();
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
},_asQuery);
},getCBInfo:function(){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oMailInfo=_oSelf._moMailInfo,_oFrom=_oSelf.getFromInfo_();
;return {oWin:_oSelf._moWin,sFid:_oMailInfo.folderid,bML:false,oMail:[{sMid:_oSelf.getMailId(),bSys:_oConfig.bSys,bUnr:false,bSubUnr:false,bTms:false,sSName:_oFrom.name,oTCont:document.createElement("div"),sSEmail:_oFrom.addr,oStar:{}}]};
},_ready:function(){
var _oTop=getTop(),_oSelf=this,_oWin=_oSelf._moWin,_oConfig=_oSelf._moConfig,_oMailInfo=_oSelf._moMailInfo,_oContentDiv=_oSelf.S(_ID._sContentDiv);
if(!_oMailInfo.bAsyn)
{
_oConfig.bMusicManuPlay=_oConfig.sIndex!="0";
_oConfig.bBccToMe=_isBccToMe(_oMailInfo);
swapLink(_oContentDiv,_oMailInfo.disptype,_oWin,_oSelf.getMailId());
if(_oConfig.bNeedIdentifyLocation)
{
_oTop.locationIdentify(_oContentDiv,_fLocationIdentifyOptions({sMailId:_oSelf.getMailId()}));
}
_oSelf.checkDecryptMail();
_oSelf._startSubMod({sModuleName:"qmRemark"});
_oSelf._startSubMod({sModuleName:"qmReadMail"});
_oSelf._startSubMod({sModuleName:"qmAntiSpam"});
_oSelf._startSubMod({sModuleName:"qmPlayerParser"});
if(_oSelf._moContext.sAux=="0")
{
var _oQmReadMail=this._moWin.QMReadMail;
}
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(_abWaitOK){
_oSelf._startSubMod({sModuleName:_sQMTRANSLATE});
_oSelf.rmLanguage(_oContentDiv);
});
_oSelf.showQBTipBtn();
_oSelf.osslogImgAttach_();
_oSelf.checkPoison(_oSelf.getMailId());
_oSelf.checkOnlineDocStarStatus();
}
else{
_oMailInfo.bAsynOrg=true;
}
},showMenu:function(_aoTarget){
var _oSelf=this,_oConfig=_oSelf._moConfig,_sMenuId=["menu",_oConfig.cmailid,_oConfig.sIndex].join("_"),_sMailId=_oSelf.getMailId();
new QMMenu({sId:_sMenuId,oEmbedWin:_oSelf._moWin,oItems:_oSelf._generateMenuItem(),onitemclick:function(_asId,_aoItemConfig){
var _sFolderId=0;
if(_asId.indexOf("reply")!=0&&_asId.indexOf("_")!=-1)
{
var _oTmpArray=_asId.split("_");
_asId=_oTmpArray[0];
_sFolderId=_oTmpArray[1];
}
switch(_asId)
{case "reply":
case "reply_all":
case "forward":
_sCpsMailUrl=_READMAIL_CPS_URL.replace({sid:getSid(),s:_asId,mailid:_sMailId,disptype:_oConfig.disptype=="text"?"":"html"});
if(_oSelf.dealCustomUI('optMail',{sAction:'closePage',sType:_asId,sUrl:_sCpsMailUrl})!==false)
{
goUrl(_oSelf._moWin,_sCpsMailUrl,true);
}
break;
case 'deleteMail':
_oSelf.delMail({opt:0});
break;
case "predeleteMail":
_oSelf.delMail({opt:1});
break;
case "report":
_oSelf._moAntiSpam.reportSpam(_aoTarget,_sMailId,null,_oSelf.fReportSpamCallBack());
_oSelf.clearCache();
break;
case "print":
_oSelf.optMail2({opt:"print"},_sMailId);
break;
case "star":
_oSelf.starMail(true);
break;
case "unstar":
_oSelf.starMail(false);
case "markAsTag":
QMTag.setMailTag(_sFolderId,_oSelf.getCBInfo());
break;
case "newTag":
QMTag.newMailTag(extend(_oSelf.getCBInfo(),{oncomplete:function(_aoParams,_aoResult){
}}));
break;
case "newFolder":
case "moveToFolder":
moveMailJs(_asId==="moveToFolder"?_aoItemConfig.sFolderId.split("_")[1]:"new",_asId==="moveToFolder"?_aoItemConfig.sItemValue:"",_oSelf._moMailInfo.folderid,extend(_oSelf.getCBInfo(),{oncomplete:function(){
_oSelf._fandx(true,function(){
removeSelf(_oSelf.S(_ID._sSubMail));
_oSelf._moWin.QMReadMail.notify("delsubmail");
return true;
});
return true;
}}));
break;
case "openNew":
_oSelf.openInNewWin_(_sMailId);
break;
case "remark":
_oSelf._moRemark.toggle();
break;
}
},nWidth:(getLocale()=="zh_CN")?100:160,nMaxWidth:180,nMaxItemView:15,bAnimation:true,onload:function(){
if(this.option("sId")===_sMenuId)
{
var _oMenuObj=this,_nHeight=parseInt(_oMenuObj.option("nHeight"),10),_nWidth=parseInt(_oMenuObj.option("nWidth"),10),_oBtnPos=calcPos(_aoTarget),_oMenuPos=calcAdjPos(_oBtnPos.slice(0,4),_nWidth,_nHeight,_oSelf._moWin,3);
_oMenuObj.option("nX",_oBtnPos[1]-_nWidth).option("nY",_oMenuPos[0]);
}
},onshow:function(){
return;
if(this.option("sId")===_sMenuId)
{
var _oMenuObj=this,_nHeight=parseInt(_oMenuObj.option("nHeight"),10),_nWidth=parseInt(_oMenuObj.option("nWidth"),10),_oBtnPos=calcPos(_aoTarget),_oMenuPos=calcAdjPos(_oBtnPos.slice(0,4),_nWidth,_nHeight,_oSelf._moWin,3);
_oMenuObj.option("nX",_oBtnPos[1]-_nWidth).option("nY",_oMenuPos[0]);
}
}});
},openInNewWin_:function(_asMailId){
var _oSelf=this;
goNewWin(T([_READMAIL_,'&t=readmail&folderid=$folderid$$ext$']).replace({folderid:_oSelf._moConfig.folderid,mailid:_asMailId,ext:_oSelf._moMailInfo.bShowContImg||getTop().getUrlParams(_oSelf._moWin.location).dispimg==1?'&disptype=html&dispimg=1&clickshowimage=1':''}),false);
},_generateMenuItem:function(){
var _oSelf=this,_oItems=[],_oHr={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>'},_bSys=_oSelf.getCBInfo().oMail[0]&&_oSelf.getCBInfo().oMail[0].bSys||false;
_bSys||_oItems.push({sId:"reply",sItemValue:"\u56DE\u590D"},{sId:"reply_all",sItemValue:"\u56DE\u590D\u5168\u90E8"});
_oItems.push({sId:"forward",sItemValue:"\u8F6C\u53D1"},_oHr,{sId:"deleteMail",sItemValue:"\u5220\u9664"},{sId:"predeleteMail",sItemValue:"\u5F7B\u5E95\u5220\u9664"});
_bSys||_oItems.push({sId:"report",sItemValue:"\u4E3E\u62A5"});
_oItems.push(_oHr,{sId:"print",sItemValue:"\u6253\u5370"});
_oItems.push(_oHr,{sId:"remark",sItemValue:"\u5907\u6CE8"});
if(!bnewwin||finds("div[module='qmAdSubMail']",S("submail_inner_body",_oSelf._moWin)).length>1)
{
_oItems.push({sId:"openNew",sItemValue:"\u65B0\u7A97\u53E3\u6253\u5F00"});
}
return _oItems;
},showDetail:function(){
var _oSelf=this,_oMailInfo=_oSelf._moMailInfo,_oDetail=_oSelf.S(_ID._sDetail),_oSum=_oSelf.S(_ID._sSum),_oReferInfo=_oSelf.S(_ID._sReferInfo);
if(isShow(_oDetail))
{
return;
}
show(_oSum,false);
qmAnimation.expand(_oDetail,{from:25});
if(_oReferInfo&&_oReferInfo.innerHTML=="")
{
_oReferInfo.innerHTML=_oSelf._moWin.QMReadMail.getSubMailFrom(_oMailInfo.refermailid)||"";
}
},hideDetail:function(){
var _oSelf=this,_oDetail=_oSelf.S(_ID._sDetail),_oSum=_oSelf.S(_ID._sSum);
if(isShow(_oSum))
{
return;
}
qmAnimation.fold(_oDetail,{oncomplete:function(){
show(_oSum,true);
_oSum.parentNode.style.zoom="";
_oSum.parentNode.style.zoom="1";
}});
},showQBTip:function(_aoTarget){
_showQBTip.call(this,_aoTarget);
},hideQBTip:function(_aoTarget,_asMailId,_aoEvent){
_hideQBTip.call(this,_aoEvent);
},showBccTip:function(_aoTarget){
_showBccTip.call(this,_aoTarget);
},hideBccTip:function(_aoTarget,_asMailId,_aoEvent){
_hideBccTip.call(this,_aoEvent);
}};
});
_oClassHome.qmGroupQReply=inherit("qmGroupQReply",_oClassHome._qmBaseDM,function(_aoSuper){
return {_initMemVar:function(_aoConfig,_aoReplayMail,_aoSendConfig){
var _oSelf=this;
_oSelf._moConfig=_aoConfig;
_oSelf._moReplyMail=_aoReplayMail;
_oSelf._moSendConfig=_aoSendConfig;
_oSelf._moSource=_oSelf.S(_ID._sQSource);
},_setEvent:function(){
var _oSelf=this,_oSource=_oSelf._moSource,_oWin=_oSelf._moWin,_oTop=getTop(),_oSendBtn=_oSelf.S(_ID._sQSendBtn);
_oSelf.evt(["ck"],_oSelf.S(_ID._sQReply));
addEvent(_oSource,"focus",function(_aoEvent){
if(!_oSelf._moEditor)
{
QMEditor.createEditor({editorId:"readMailGroupQuickSend",editorAreaWin:_oWin,funclist:{tbExtern:"Mo"},photoCGI:getPhotoCGI(),isNoEditScroll:true,height:"160px",onkeydown:function(_aoEvent){
if(_isKeyDownSend(_aoEvent))
{
fireMouseEvent(_oSendBtn,"click");
}
},onload:function(){
_oSelf._moEditor=this;
_oSelf._fandx(false);
}}).initialize(QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")}),false,_oTop.S("QMEditorArea",_oWin).getAttribute("tIndex"));
var _oLoadScriptFiles=[];
if(!_oTop.ComposeLib)
{
_oLoadScriptFiles.push("$js_path$webp/libcompose3732bd.js");
}
if("1"==_oTop.gbBackGroundSend&&!getTop().BackGroundSend)
{
_oLoadScriptFiles.push("$js_path$webp/backsend2b1861.js");
}
_oLoadScriptFiles.length&&loadJsFileToTop(_oLoadScriptFiles);
}
else{
_oSelf._fandx(false);
}
});
if(!_oSelf._mnAutoSaveTimer)
{
_oSelf._mnAutoSaveTimer=_oWin.setInterval(function(){
_oSelf.saveDraft();
},300000);
}
},saveDraft:function(){
var _oSelf=this,_oWin=_oSelf._moWin,_oConfig=_oSelf._moConfig,_oEditor=_oSelf._moEditor,_oSendConfig=_oSelf._moSendConfig,_sDraftContent=_oEditor&&_oEditor.getContent(false),_oSource=_oSelf.S(_ID._sQSource);
if(!_oEditor||_sDraftContent==_oSelf._msDraftContent||isShow(_ID._sAfterSendingDiv,_oWin))
{
return;
}
else{
var _oReplyMail=_oSelf._moReplyMail,_oCpsData={actiontype:"save",t:"compose_send.json",s:"group",qqgroupid:_oReplyMail.from.addr,groupname:_oReplyMail.from.name,subject:_oReplyMail.subject,content__html:_sDraftContent,fmailid:_oSelf.getMailId()};
waitFor(function(){
return !!(getTop().ComposeLib);
},function(_abWaitOK){
if(!_abWaitOK)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
ComposeLib.send(_oCpsData,{sType:"group",onready:function(){
_oSelf._disableSendBtn(true);
showProcess(1,true,"\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1","",false);
},oncomplete:function(_abIsOk,_avParam){
var _oQSource=S(_ID._sQSource,_oWin),_oData=evalValue(_avParam),_sTime=formatDate(new Date(),"%hh%:%mm%","%");
if(_abIsOk)
{
_oSelf._msDraftMailId=_oData.mailid;
_oSelf._msDraftContent=_sDraftContent;
showInfo(_sTime+" \u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1");
reloadLeftWin();
}
else{
showError(_sTime+" \u4FDD\u5B58\u8349\u7A3F\u5931\u8D25");
}
_oSelf._disableSendBtn(false);
}});
});
}
},_fandx:function(_abFold){
var _oSelf=this,_oSource=_oSelf._moSource,_oEditor=_oSelf._moEditor,_oSendBtn=_oSelf.S(_ID._sQSendBtn),_bFold=isShow(_oSource);
if(_bFold==_abFold)
{
return;
}
show(_oSource,_abFold);
show(_oSelf.S(_ID._sQMEditorArea).parentNode,!_abFold);
show(_oSelf.S(_ID._sQMEditorToolArea).parentNode,!_abFold);
if(_abFold)
{
setClass(_oSendBtn,"grptitle_tab bd right").style.cssText="height:42px;width:44px;cursor:pointer";
setClass(_oSendBtn.parentNode,"qm_right bd_ccc").style.cssText="";
_oSendBtn.focus();
_oSendBtn.blur();
_oEditor.setContent(QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")}));
}
else{
setClass(_oSendBtn,"right bd_upload grptitle_tab_ bold").style.cssText="height:26px;width:96px;cursor:pointer;";
if(getLocale()=="zh_CN")
{
setClass(_oSendBtn.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:449px;text-align:right;margin-top:2px;";
}
else{
setClass(_oSendBtn.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:474px;text-align:right;margin-top:2px;";
}
show(_oSelf.S(_ID._sQMEditorArea).parentNode,true);
show(_oSelf.S(_ID._sQMEditorToolArea).parentNode,true);
_oEditor.focus();
}
},_disableSendBtn:function(_abDis){
var _oSelf=this;
_oSelf.S(_ID._sQSendBtn).disabled=_abDis;
return this;
},_getValidHtmlContent:function(_asHtml){
return _asHtml&&trim(_asHtml.replace(/<[^(img)]([^>]+)?>/gi,"").replace(/&nbsp;/g,""));
},getContent:function(){
return this._moEditor&&this._moEditor.getContent();
},disableConfirm:function(){
var _oSelf=this;
},send:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oWin=_oSelf._moWin,_oEditor=_oSelf._moEditor,_oConfig=_oSelf._moConfig,_oSendConfig=_oSelf._moSendConfig,_oSource=_oSelf.S(_ID._sQSource);
if(_aoTarget.disabled)
{
return;
}
if(!_oEditor||!_oSelf._getValidHtmlContent(_oEditor.getContent(false)))
{
showError('\u8BF7\u5148\u8F93\u5165\u56DE\u590D\u5185\u5BB9');
_oEditor.focus();
}
else{
var _oReplyMail=_oSelf._moReplyMail,_oCpsData={qqgroupid:_oConfig.gid+"@groupmail.qq.com",subject:_oReplyMail.subject||"\u65E0\u4E3B\u9898",content__html:_oEditor.getContent(),t:"compose.json",s:"group_send",fmailid:_asMailId};
waitFor(function(){
return !!getTop().ComposeLib&&("1"!=getTop().gbBackGroundSend||getTop().BackGroundSend);
},function(_abWaitOK){
if(!_abWaitOK)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
var _oBackGroundSend,_bShouldBackSend=("1"==getTop().gbBackGroundSend&&(_oBackGroundSend=getTop().BackGroundSend)),_oConfig={sType:"group",onready:function(){
if(_bShouldBackSend)
{
show(_ID._sAfterSendingDiv,true,_oWin);
_oSelf._fandx(true);
}
else{
_oSelf._disableSendBtn(true);
}
},oncomplete:function(_abIsOk,_avParam){
if(_bShouldBackSend)
{
if(_abIsOk)
{
callBack(_oSendConfig.fQReplyComplete,[_avParam]);
}
show(_ID._sAfterSendingDiv,false,_oWin);
}
else{
if(_abIsOk)
{
getTop().QMMLCache.upVer();
_oSelf._disableSendBtn(false);
showInfo("\u60A8\u7684\u8BC4\u8BBA\u5DF2\u6210\u529F\u53D1\u8868");
_oSelf._fandx(true);
callBack(_oSendConfig.fQReplyComplete,[_avParam]);
}
else{
_oSelf._disableSendBtn(false);
}
setTimeout(function(){
_oEditor.resetFixHeight();
},500);
}
}};
if(_bShouldBackSend)
{
_oBackGroundSend.quickReply(_oCpsData,"group",_oConfig);
}
else{
ComposeLib.send(_oCpsData,_oConfig);
}
},100);
}
preventDefault(_aoEvent);
}};
});
_oClassHome.qmGroupMail=inherit("qmGroupMail",_oClassHome.qmReadMail,function(_aoSuper){
return {_pageReady:function(){
var _oTop=getTop(),_oSelf=this,_oWin=_oSelf._moWin,_oMailInfo=_oSelf._moMailInfo,_oConfig=_oSelf._moConfig,_oContentDivs=CN(_ID._sContentClassName,getTop().getMainWin().document);
_oSelf._fakeReadMail();
E(_oContentDivs,function(_aoContentDiv){
swapLink(_aoContentDiv,_oMailInfo.disptype,_oWin,_oSelf.getMailId());
});
if(_oConfig.bNeedIdentifyLocation)
{
_oTop.locationIdentify(_oContentDivs,_fLocationIdentifyOptions({sMailId:_oSelf.getMailId()}));
}
_oSelf._readMailFinish();
initMailSelect(_oConfig.oMoveItems,true,_oConfig.bOpenTag=="1",_oWin,_oConfig.folderid,_oConfig.bAutoTag);
_oSelf._startSubMod({sModuleName:"qmGroupQReply"});
_oSelf._startSubMod({sModuleName:"qmAntiSpam"});
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(_abWaitOK){
_oSelf._startSubMod({sModuleName:_sQMTRANSLATE});
});
_oSelf._flushFolder();
getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,_oSelf.getMailId());
},osslogImgAttach_:function(){
this.checkAttachImgSize_(getTop().finds('.attachitem .readmail_limit_img_size',this._moWin));
},getEditorContent:function(){
var _oSelf=this;
return _oSelf._moGroupQReply.getContent();
},disableConfirm:function(){
var _oSelf=this;
_oSelf._moGroupQReply.disableConfirm();
},_initSelectAllEvt:function(){
var _oTop=getTop(),_oSelf=this,_oWin=_oSelf._moWin;
addEvent(_oWin.document,"keydown",function(_aoEvent){
if(_aoEvent.ctrlKey&&_aoEvent.keyCode=="65")
{
_oSelf.doSelectAll(_aoEvent,_oSelf.S(_ID._sContentDiv));
}
});
},_startSubMod:function(_aoSubMod){
var _oSelf=this,_oModule,_oConfig=_oSelf._moConfig,_oMailInfo=_oSelf._moMailInfo,_oContext=extend({},_oSelf._moContext,_aoSubMod,{oMailInstance:_oSelf});
switch(_oContext.sModuleName)
{case "qmGroupQReply":
_oModule=_oSelf._moGroupQReply=new _oClassHome.qmGroupQReply(_oConfig,_oMailInfo,{fQReplyComplete:function(_avParam){
_oSelf._qReplyComplete(_avParam);
}},_oContext);
break;
default:
_oModule=_aoSuper._startSubMod.call(_oSelf,_aoSubMod);
}return _oModule;
},_qReplyComplete:function(_avParam){
var _oJson=evalValue(_avParam),_oStartDom=this.S(_ID._sSubMailStartDiv);
_oJson&&insertHTML(_oStartDom,"afterEnd",_oJson.mailstr);
this.clearCache();
QMMailCache.setExpire();
},_makeMailListUrl:function(){
var _oConfig=this._moConfig;
return _MAIL_LIST1.replace({sid:getSid(),folderid:_oConfig.folderid,s:_oConfig.subtmpl,more:"&t=mail_list_group&groupid="+(_oConfig.groupid||"")});
},showSeqContent:function(_aoTarget){
var _oSelf=this,_sSeq=_oSelf.attr(_aoTarget,"seq");
show(_ID._sGpContent+_sSeq,true);
show(_ID._sGpAttach+_sSeq,true);
},settingGroup:function(_aoTarget,_asMailId){
var _oPos=calcPos(_aoTarget),_oSelf=this,_oWin=_oSelf._moWin,_oApp=_oSelf;
var oSettingGroup=new QMMenu({oEmbedWin:_oSelf._moWin,sId:"menu_"+_ID._sSettingGroup,nWidth:getLocale()=="zh_CN"?290:454,oItems:[{nHeight:"auto",sItemValue:_SETTING_GROUP_TMP.replace({bReject:_oApp._moConfig.bReject,bNewreply:_oApp._moConfig.bNewreply,bNotify:_oApp._moConfig.bNotify,sid:getSid()})}],nX:_oPos[3],nY:_oPos[2],onload:function(){
var _oSelf=this,_oContainer=_oSelf.S("container");
_oSelf.S("qqnotify").onclick=_oSelf.S("noqqnotify").onclick=function(){
show(_oSelf.S("setnewdiv"),true);
};
_oSelf.S("reject").onclick=function(){
show(_oSelf.S("setnewdiv"),false);
};
addEvent(_oSelf.S("cancel"),"click",function(){
oSettingGroup.toggle();
});
addEvent(_oSelf.S("save"),"click",function(){
var _oResult={};
E(GelTags("input",_oContainer),function(_aoItem){
if(_aoItem.type=="radio"&&_aoItem.checked)
{
_oResult[_aoItem.name]=_aoItem.value;
}
});
QMAjax.send(T(['/cgi-bin/grouplist?t=mail_mgr2&mailaction=groupmgr','&oper1=$oper1$&oper2=$oper2$&sid=$sid$&gid=$gid$@groupmail.qq.com']).replace({oper1:_oResult["qqnotify"]||"",oper2:_oResult["unread"]||"",sid:getSid(),gid:_oApp._moConfig.gid}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(_abIsOk,_asParam){
var _bSucc=true;
if(_abIsOk)
{
try{
var _oJson=evalValue(_asParam);
showInfo("\u7FA4\u90AE\u4EF6\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F");
oSettingGroup.toggle();
_oWin.QMReadMail.clearCache();
QMMailCache.setExpire();
extend(_oApp._moConfig,_oJson);
}
catch(e)
{
_bSucc=false;
}
}
else{
_bSucc=false;
}
!_bSucc&&showError("\u64CD\u4F5C\u5931\u8D25");
}});
});
}});
},rejectGroup:function(_aoTarget,_asMailId,_aoEvent){
var _oSelf=this,_oWin=_oSelf._moWin,_sOpt=_oSelf.attr(_aoTarget,"opt");
QMAjax.send(_REJECT_GROUP.replace({sid:getSid(),gid:_oSelf._moConfig.gid,yn:_sOpt}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(_abIsOk,_asParam){
var _oJson=evalValue(_asParam);
if(!_abIsOk||_asParam.indexOf("<!--cgi exception-->")==0)
{
showError("\u64CD\u4F5C\u5931\u8D25");
}
else{
toggle(_ID._sRejectGroupY,_oWin);
toggle(_ID._sRejectGroupN,_oWin);
showInfo((_sOpt=="yes"?"\u6210\u529F\u62D2\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6":"\u6210\u529F\u5F00\u542F\u63A5\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6"));
_oWin.QMReadMail.clearCache();
QMMailCache.setExpire();
}
}});
},adminReject:function(_aoTarget,_asMailId){
var _oTop=getTop(),_sUrl=T("/cgi-bin/groupmail_close?groupid=$gid$&mailid=$mailid$&action=$action$&sid=$sid$").replace({gid:_oTop.attr(_aoTarget,'gid'),mailid:_asMailId,action:_oTop.attr(_aoTarget,'action'),sid:_oTop.getSid()});
_oTop.QMAjax.send(_sUrl,{onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oRet=_oTop.evalValue(_asParam);
if(_oRet.retCode==0)
{
_oTop.showInfo(_oRet.action=="wall"?"\u5C4F\u853D\u7FA4\u90AE\u4EF6\u6210\u529F":"\u53D6\u6D88\u5C4F\u853D\u7FA4\u90AE\u4EF6\u6210\u529F");
_oTop.rdVer(_asMailId,1);
if(_oRet.action=="wall")
{
_oTop.attr(_aoTarget,'action',"unwall");
_aoTarget.innerHTML="\u53D6\u6D88\u5C4F\u853D";
}
else{
_oTop.attr(_aoTarget,'action',"wall");
_aoTarget.innerHTML="\u5C4F\u853D\u6B64\u90AE\u4EF6";
}
_oTop.reloadAllFrm();
}
else if(_oRet.retCode==1000)
{
_oTop.showInfo(_oRet.action=="wall"?"\u6B64\u7FA4\u90AE\u4EF6\u5DF2\u88AB\u5C4F\u853D":"\u6B64\u7FA4\u90AE\u4EF6\u672A\u88AB\u5C4F\u853D");
}
else{
_oTop.showInfo("\u64CD\u4F5C\u5931\u8D25");
}
}
}});
},showVoter:function(_aoTarget,_abShow){
var _oSelf=this,_sVid;
if(!_aoTarget)
{
return;
}
if(_sVid=_aoTarget.getAttribute("vid"))
{
toggle("voter_"+_sVid,_oWin);
}
else{
var _oVoteDisplay=_oSelf.S("voter_play_box"),_oTrs=GelTags("tr",_oVoteDisplay),_bShowOpt=(_abShow==undefined||(typeof _abShow=="string"))?!_aoTarget.getAttribute("opt"):_abShow;
for(var i=0,len=_oTrs.length;i<len;i++)
{
if(_oTrs[i].id)
{
qmAnimation[_bShowOpt?"expand":"fold"](_oTrs[i],{speed:"fast"});
}
}
_aoTarget[_bShowOpt?"setAttribute":"removeAttribute"]("opt","1");
_aoTarget.innerHTML=_aoTarget.getAttribute(_bShowOpt?"hideText":"showText");
}
}};
});
_oClassHome.qmAdSubMailML=inherit("qmAdSubMailML",_oClassHome.qmAdSubMail,function(_aoSuper){
var _oTop=getTop();
return {_init:function(){
setDblClickNoSel(this.S('expand'));
return _aoSuper._init.apply(this,arguments);
},_generateMenuItem:function(){
var _oSelf=this,_oItems=[],_oHr={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>'},_bSys=_oSelf.getCBInfo().oMail[0]&&_oSelf.getCBInfo().oMail[0].bSys||false;
var _bAsync=_oSelf._moMailInfo.bAsyn;
_bSys||_oItems.push({sId:"reply",sItemValue:"\u56DE\u590D"},{sId:"reply_all",sItemValue:"\u56DE\u590D\u5168\u90E8"});
_oItems.push({sId:"forward",sItemValue:"\u8F6C\u53D1"},_oHr,{sId:"deleteMail",sItemValue:"\u5220\u9664"},{sId:"predeleteMail",sItemValue:"\u5F7B\u5E95\u5220\u9664"});
_bSys||_oItems.push({sId:"report",sItemValue:"\u4E3E\u62A5"});
_oItems.push(_oHr,{sId:"print",sItemValue:"\u6253\u5370"});
_bAsync||_oItems.push(_oHr,{sId:"remark",sItemValue:"\u5907\u6CE8"});
if(!bnewwin||finds("div[module='qmAdSubMail']",S("submail_inner_body",_oSelf._moWin)).length>1)
{
_oItems.push({sId:"openNew",sItemValue:"\u65B0\u7A97\u53E3\u6253\u5F00"});
}
return _oItems;
},openInNewWin_:function(_asMailId){
goNewWin(this._getReadMailURL()+(this._moMailInfo.bShowContImg?'&disptype=html&dispimg=1&clickshowimage=1':''));
rdVer(this.getCMailId_(),1);
},_getReadMailURL:function(){
var _oSelf=this;
var _sMailId=_oSelf.getCMailId_();
return RD.getURL(null,_sMailId,false,3,_oSelf._moConfig.folderid,0,false,0,'');
},readMoreMails:function(){
goNewWin(this._getReadMailURL()+'&s=adsubmail');
rdVer(this.getCMailId_(),1);
},_setEvent:function(){
var _oSelf=this;
_oSelf.evt(["ck","md","dck","mot","mor"],_ID._sSubMail);
},_asyncGetSubMail:function(_asQuery,_afCallBack){
var _oSelf=this;
var _oContentWarp=_oSelf.S('contentDivWarp');
var _oWin=_oSelf._moWin;
_oSelf._bAsyncGetSubMail=true;
_oSelf._asyncGetMail(null,function(_aoContent){
_oSelf._bAsyncGetSubMail=false;
if(_aoContent)
{
_oSelf._moMailInfo.bAsyn=false;
if(_aoContent.mailid)
{
_oSelf._moContext.sContext=_aoContent.mailid;
}
_oSelf._moMailInfo.disptype=_aoContent.disptype;
_afCallBack?_afCallBack(_aoContent):_oSelf._insertHTML(_aoContent);
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
},_asQuery);
},_asyncGetMail:function(_asType,_afCallBack,_asQuery){
var _oSelf=this;
QMAjax.send(_oSelf.getAsyncMailUrl()+(_asQuery?_asQuery:''),{method:"GET",onload:function(_abIsOk,_asParam){
var _sText=trim(_asParam);
if(!_abIsOk||_sText.indexOf("<!--cgi exception-->")==0)
{
_afCallBack();
}
else{
_afCallBack(_oTop.evalValue(_oTop.gbIsIE?_sText.replace(/\\x3cform/ig,'<from'):_sText));
}
}});
},getAsyncMailUrl:function(_abNoCGI){
var _oSelf=this;
var _sMailId=_oSelf.getCMailId_();
return T("$cgi$sid=$sid$&t=readsubmail&mailid=$mailid$&frid=$frid$&index=$index$&fromModule=qmAdSubMailML&classalias=qmbox$index$&s=$s$&maxage=$maxage$&base=$base$&ver=$ver$").replace({cgi:_abNoCGI?'':'/cgi-bin/readmail?',sid:getSid(),mailid:_sMailId,frid:_oSelf._moMailInfo.frid,index:_oSelf._moContext.sAux,s:_sMailId.charAt(0)=='C'?'quickreadmail':'',maxage:rdVer.maxage(_sMailId),base:rdVer("BaseVer",0),ver:rdVer(_sMailId,0,234)});
},_insertHTML:function(_aoContent,_afCallBack){
var _oSelf=this;
var _oWin=_oSelf._moWin;
var _oSubMailDiv=_oSelf.S(_ID._sSubMail);
var _oContentWarp=_oSelf.S('contentDivWarp');
var _oExpand=_oSelf.S(_ID._sExpand);
var _oIframe;
_oExpand.style.height=0;
_oExpand.style.borderWidth='0px';
show(_oExpand,true);
_oContentWarp.innerHTML=_aoContent.mailstr;
var _bHasExpand=false;
function _expandFandx2()
{
if(!_bHasExpand)
{
_bHasExpand=true;
_oExpand.style.borderWidth='1px';
_oSelf._fandx(false,function(){
_oExpand.style.zoom='1';
addClass(_oExpand,'expand_done');
_oWin.setTimeout(function(){
_oSelf._gotoScrollTop();
callBack(_afCallBack);
},_oSelf._nIntervalFandx2scroll);
debug('fandx end');
if(!_oIframe)
{
_oSelf._fixAbsoluteContent();
}
});
}
}
_oIframe=_oSelf.S('readxqqmailIfarme');
if(_oIframe)
{
waitFor(function(){
return _oIframe.contentWindow.bindIframeWinHeight;
},function(_abOK){
if(_abOK)
{
_oIframe.contentWindow.bindIframeWinHeight(function(_anHeight){
if(_anHeight&&_anHeight>0)
{
_oIframe.style.height=_anHeight+'px';
_expandFandx2();
}
});
}
else{
_expandFandx2();
}
});
}
else{
_oWin.setTimeout(_expandFandx2,100);
}
var _oMyIframes;
waitFor(function(){
_oMyIframes=_oContentWarp.getElementsByTagName('iframe');
for(var i=_oMyIframes.length;i--;)
{
if(_oMyIframes[i].contentWindow.document.body)
{
return true;
}
}
return false;
},function(_abOK){
if(_abOK)
{
_oWin.setTimeout(function(){
E(_oMyIframes,function(_aoIframe){
try{
addEvent(_aoIframe.contentWindow.document.body,'dblclick',function(){
_oSelf.dispSubMail();
});
}
catch(e)
{
debug('\u4E3A\u5E7F\u544A\u90AE\u4EF6\u7684iframe\u7ED1\u5B9Adblclick\u4E8B\u4EF6\u5931\u8D25');
}
});
},800);
}
});
(typeof (_oWin.showNetDisk)=="function")&&_oWin.showNetDisk(_oSubMailDiv);
_oSelf._ready();
_fFixXFDownload();
},_nIntervalFandx2scroll:0,_nFandxSpeed:400,_nScrollSpeed:150,_nMaxScrollTop:200,_getFandxMaxHeight:function(){
var _oSelf=this;
var _oWin=_oSelf._moWin;
var _oHead=_oSelf.S('mHead');
var _oScreenHeight=bodyScroll(_oWin,'clientHeight')+10;
var _nHeight=Math.min(_oScreenHeight,_oSelf.S('contentDivWarp').clientHeight+_oHead.clientHeight);
return Math.max(0,Math.min(_nHeight,bodyScroll(_oWin,'scrollTop')+_oScreenHeight-calcPos(_oHead,'json').top));
},_getFandxSpeedCfg:function(_aoAnimationCfg,_anSpeed,_anTargetInterval){
_aoAnimationCfg.speed=_anSpeed*Math.abs(_aoAnimationCfg.from-_aoAnimationCfg.to)/_anTargetInterval;
debug('maillist_ad fandx speed: '+_aoAnimationCfg.speed);
return _aoAnimationCfg;
},_fandx:function(_abFold,_afCallBack){
var _oSelf=this,_oWin=_oSelf._moWin,_oTop=getTop(),_oFold=_oSelf.S(_ID._sFold),_oExpand=_oSelf.S(_ID._sExpand),_oSubMailDiv=_oSelf.S(_ID._sSubMail);
if(_abFold=='auto')
{
_abFold=!isShow(_oFold);
}
if(_abFold)
{
show(_oFold,true);
show(_oFold,false);
qmAnimation.play(_oExpand,_oSelf._getFandxSpeedCfg({tween:"Sine",easing:"easeOut",from:_oSelf._getFandxMaxHeight(),to:_oFold.scrollHeight||48,onaction:function(_anValue){
_oExpand.style.height=_anValue+'px';
},oncomplete:function(_anTo,_abForceStop){
if(_afCallBack&&_afCallBack(_abForceStop)===true)
{
return;
}
setClass(_oSubMailDiv,"qm_con_fold clearfix");
show(_oExpand,false);
show(_oFold,true);
}},_oSelf._nFandxSpeed,600));
}
else{
show(_oFold,false);
show(_oExpand,true);
setClass(_oSubMailDiv,"qm_con_expand clearfix");
qmAnimation.play(_oExpand,_oSelf._getFandxSpeedCfg({from:_oFold.scrollHeight||48,to:_oSelf._getFandxMaxHeight(),tween:"Sine",easing:"easeOut",onaction:function(_anValue){
_oExpand.style.height=_anValue+'px';
},oncomplete:function(_anTo,_abForceStop){
_oExpand.style.height='auto';
callBack(_afCallBack,[_abForceStop]);
}},_oSelf._nFandxSpeed,600));
var _oDomAttCon=_oTop.finds("div[ui-type='attCon']",_oSubMailDiv)[0],_oDomAtt=_oDomAttCon&&_oTop.finds("a[ui-type='netdiskBind']",_oDomAttCon)[0];
_oTop.QMNetDisk&&_oDomAttCon&&_oDomAtt&&_oWin.setTimeout(function(){
_oTop.QMNetDisk.route("tips","readmail",_oDomAttCon,{offsetTop:80,offsetLeft:_oDomAtt.offsetLeft+_oDomAtt.clientWidth/2});
},3000);
}
},dispSubMail:function(_aoTarget){
var _oSelf=this;
var _oWin=_oSelf._moWin;
var _oExpand=_oSelf.S(_ID._sExpand);
if(_oSelf.S('expand_c'))
{
_oExpand.innerHTML=_oSelf.S('expand_c').innerHTML;
}
if(_oSelf._bAsyncGetSubMail)
{
return;
}
try{
if(!isShow(_oExpand)||isShow(_oSelf.S(_ID._sFold)))
{
_oSelf.reportAdClick(_aoTarget);
}
}
catch(e)
{
}
if(!isShow(_oExpand)&&_oSelf._moMailInfo.bAsyn)
{
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
_oSelf._prevGotoScrollTop();
_oSelf._saveScrollTop();
_oSelf._asyncGetSubMail(null,function(_aoContent){
_oSelf._insertHTML(_aoContent,function(){
_oSelf.specialProcess();
_oSelf.processQQMailAppH5CardForWebmail();
if(_oSelf.attr(_aoTarget,"newmail")=="true")
{
_oSelf.attr(_aoTarget,"newmail","false");
hasClass(_aoTarget,"mailunread")&&rmClass(_aoTarget,"mailunread");
!hasClass(_aoTarget,"mailread")&&addClass(_aoTarget,"mailread");
setMailRead(false,extend(QMMailList.getCBInfo(_oSelf._moWin,_oSelf.getCMailId_()),{bNoShowFilter:true,bNoSendMailMgr:true}));
}
showProcess(0);
});
});
}
else{
if(isShow(_oSelf.S(_ID._sFold)))
{
_oSelf._prevGotoScrollTop();
_oSelf._saveScrollTop();
_oSelf._fandx(false,function(_abForceStop){
if(!_abForceStop)
{
_oWin.setTimeout(function(){
_oSelf._gotoScrollTop();
},_oSelf._nIntervalFandx2scroll);
}
});
}
else{
_oSelf._loadScrollTop(function(_abForceStop){
if(!_abForceStop)
{
_oWin.setTimeout(function(){
_oSelf._fandx(true);
},_oSelf._nIntervalFandx2scroll);
}
});
}
}
},_saveScrollTop:function(){
var _oSelf=this;
var _oWin=_oSelf._moWin;
_oSelf._nPrevItemScrollPer=(calcPos(_oSelf.S(_ID._sFold).parentNode,'json').top-bodyScroll(_oWin,'scrollTop'))/bodyScroll(_oWin,'clientHeight');
},_loadScrollTop:function(_afCallBack){
var _oSelf=this;
var _oWin=_oSelf._moWin;
var _nTo=0;
if(_oSelf._nPrevItemScrollPer!==undefined)
{
_nTo=calcPos(_oSelf.S(_ID._sFold).parentNode,'json').top-(_oSelf._nPrevItemScrollPer||0)*bodyScroll(_oWin,'clientHeight');
}
qmAnimation.play(_oWin.document.body,_oSelf._getFandxSpeedCfg({win:_oWin,from:_oSelf._getScrollFrom(_nTo),to:_nTo,tween:'Sine',easing:"easeIn",onaction:function(_anValue){
bodyScroll(_oWin,'scrollTop',_anValue);
},oncomplete:function(_anTo,_abForceStop){
bodyScroll(_oWin,'scrollTop',_nTo);
callBack(_afCallBack,[_abForceStop]);
}},_oSelf._nScrollSpeed,_oSelf._nMaxScrollTop));
},_prevGotoScrollTop:function(){
this._moWin._nSubMailGotoScrollTopMailId=this.getCMailId_();
},_gotoScrollTop:function(){
var _oSelf=this;
var _oWin=_oSelf._moWin;
if(this._moWin._nSubMailGotoScrollTopMailId!=this.getCMailId_())
{
return false;
}
var _oSubMailDiv=_oSelf.S(_ID._sSubMail);
var _oPos=calcPos(_oSubMailDiv,'json');
var _nTo=Math.max(_oPos.top-5,0);
var _nWinHeight=bodyScroll(_oWin,'clientHeight');
qmAnimation.play(_oWin.document.body,_oSelf._getFandxSpeedCfg({win:_oWin,from:_oSelf._getScrollFrom(_nTo),to:_nTo,tween:'Sine',easing:"easeOut",onaction:function(_anValue){
bodyScroll(_oWin,'scrollTop',_anValue);
},oncomplete:function(_anTo,_abForceStop){
bodyScroll(_oWin,'scrollTop',_nTo);
}},_oSelf._nScrollSpeed,_oSelf._nMaxScrollTop));
return true;
},_getScrollFrom:function(_anTo){
var _oSelf=this;
var _oWin=_oSelf._moWin;
var _nFrom=bodyScroll(_oWin,'scrollTop');
if(_anTo>_nFrom)
{
_nFrom=Math.max(_anTo-_oSelf._nMaxScrollTop,_nFrom);
}
else{
_nFrom=Math.min(_anTo+_oSelf._nMaxScrollTop,_nFrom);
}
return _nFrom;
},delMail:function(_aoTarget){
var _oSelf=this;
var _oCBInfo=_oSelf.getCBInfo();
_oCBInfo.oMail[0].sMid=_oSelf.getCMailId_();
rmMail(_oSelf.attr(_aoTarget,"opt")||0,extend(_oCBInfo,{oncomplete:function(_aoCBInfo,_aoResult){
_oSelf.dealCustomUI('MailMethod',[_aoCBInfo,'delSubMail',_aoResult]);
_oSelf._fandx(true,function(){
removeSelf(_oSelf.S(_ID._sSubMail));
});
return true;
}}));
rdVer(_oSelf.getMail,1);
},fReportSpamCallBack:function(){
var _oSelf=this;
return function(){
_oSelf._fandx(true,function(){
removeSelf(_oSelf.S(_ID._sSubMail));
});
return true;
};
}};
});
_aoLoadWin.QMReadMail=_oClassHome;
function initLocationIdentify(_asWorkerUrl,_asWorkerImportUrl)
{
var _oTop=getTop();
var _bIsSupportWorker=typeof (Worker)!='undefined';
var _oLocationWorker;
var _oUnderVerify=[];
var _oTaskQueue=[];
var _oCurOptions;
var _bIsWorking=false;
var _nNodeCnt=0;
var _nTextLen=0;
var _nStartTime=+new Date();
if(_oTop['goLocationWorker'])
{
return;
}
function _fVerifyLocationsByCGI()
{
var _oLocationsBelong=[];
var _oLocationString=[];
for(var i in _oUnderVerify)
{
if(!_oUnderVerify[i].oLocations||!_oUnderVerify[i].oLocations.length)
continue;
for(var j in _oUnderVerify[i].oLocations)
{
_oLocationString.push('addr='+encodeURIComponent(getTop().trim(_oUnderVerify[i].oLocations[j])));
_oLocationsBelong.push(i);
}
}
if(_oLocationString.length)
{
var _nBeginRequest=+new Date();
QMAjax.send('/cgi-bin/check_chinaaddr?resp_charset=UTF8',{method:'POST',content:_oLocationString.join('&'),onload:function(_abIsOk,_asData){
if(_abIsOk)
{
var _oData=getTop().evalValue(_asData);
var _oCallbackData=[];
if(_oData)
{
for(var i in _oData)
{
if(_oData[i].isAddr)
{
var _oItem=_oUnderVerify[_oLocationsBelong[i]];
_oItem.addr=_oData[i].addr;
_oCallbackData.push({sLocation:_oData[i].addr,oNode:_oItem.oNode,sValue:_oItem.sValue});
}
}
_oCurOptions.processCallback&&_oCurOptions.processCallback(_oCallbackData);
}
}
_oCurOptions.finishCallback&&_oCurOptions.finishCallback(_abIsOk);
_bIsWorking=false;
_fDoNext();
}});
}
else{
_oCurOptions.finishCallback&&_oCurOptions.finishCallback(false);
_bIsWorking=false;
_fDoNext();
}
}
if(_bIsSupportWorker)
{
try{
_oLocationWorker=_oTop['goLocationWorker']=new Worker(_asWorkerUrl);
}
catch(e)
{
_oLocationWorker=_oTop['goLocationWorker']=new Worker((_asWorkerUrl+'').replace('//'+_oTop.location.hostname,''));
}
_oLocationWorker.postMessage({importScriptUrl:_asWorkerImportUrl});
_oLocationWorker.onmessage=function(_aoEvent){
if(_aoEvent.data=='finished')
{
_fVerifyLocationsByCGI();
}
else if(_aoEvent.data=='importScripts')
{
_oTop.LogKV('compose|locationidentifier|importscripts|kv');
}
else if(_aoEvent.data=='import error one')
{
_oTop.LogKV('compose|locationidentifier|importscripts|one');
}
else if(_aoEvent.data=='import error two')
{
_oTop.LogKV('compose|locationidentifier|importscripts|two');
}
else{
var _oData=_aoEvent.data;
if(!_oData||!_oData.locations||!_oData.locations.length)
{
return;
}
var _nIndex=_oData.index;
_oUnderVerify[_nIndex].oLocations=_oData.locations;
}
};
}
function _fLocationIdentify(_aoDomObj)
{
_nNodeCnt++;
if(!_aoDomObj||_aoDomObj.tagName=="A"||_aoDomObj.tagName=="SCRIPT"||_aoDomObj.tagName=="STYLE"||_aoDomObj.className=="qqmailbgattach"||_aoDomObj.tagName=="PRE"||_aoDomObj.tagName=="CODE"||(_oCurOptions.filterFunc&&_oCurOptions.filterFunc(_aoDomObj)))
{
return;
}
for(var _oNode=_aoDomObj.firstChild,nextNode;_oNode;_oNode=nextNode)
{
nextNode=_oNode.nextSibling;
_fLocationIdentify(_oNode);
}
if(_aoDomObj.nodeType==3)
{
_nTextLen+=_aoDomObj.nodeValue.length;
_oUnderVerify.push({oNode:_aoDomObj,sValue:_aoDomObj.nodeValue});
if(_bIsSupportWorker)
{
_oLocationWorker.postMessage({index:_oUnderVerify.length-1,sValue:_aoDomObj.nodeValue});
}
else if(_oTop.locationIdentifier)
{
var _oResult=_oTop.locationIdentifier(_aoDomObj.nodeValue);
if(!_oResult||!_oResult.locations||!_oResult.locations.length)
{
return;
}
_oUnderVerify[_oUnderVerify.length-1].oLocations=_oResult.locations;
}
return;
}
}
var _fDoNext=function(){
if(_bIsWorking||!_oTaskQueue.length)
{
return;
}
_bIsWorking=true;
var _oTask=_oTaskQueue.shift();
locationIdentify(_oTask.oDom,_oTask.oOptions);
};
var locationIdentify=function(_aoDom,_aoOptions){
_oUnderVerify=[];
_oCurOptions=_aoOptions;
if(_aoDom.length)
{
for(var _nIdx=0,_nLen=_aoDom.length;_nIdx<_nLen;++_nIdx)
{
_fLocationIdentify(_aoDom[_nIdx]);
}
}
else{
_fLocationIdentify(_aoDom);
}
_bIsSupportWorker?_oLocationWorker.postMessage('finished'):_fVerifyLocationsByCGI();
};
var addTask=function(_aoDom,_aoOptions){
_oTaskQueue.push({oDom:_aoDom,oOptions:_aoOptions});
_fDoNext();
};
_oTop['locationIdentify']=addTask;
}
function spread(_aoWin,_asRptKey,_aoCfg)
{
var _oTop=getTop(),_oWin=_aoWin,_sUserAlias;
if(_oWin.location&&(/^(m\d+\.|set\d\.)?mail.qq.com$/.test(_oWin.location.hostname)||/webdev(\d)*.mail.qq.com$/.test(_oWin.location.hostname)))
{
if(_asRptKey)
{
(new Image()).src="//rl.mail.qq.com/cgi-bin/getinvestigate?kvclick="+_asRptKey;
}
var webmail=_oWin.document.getElementById("webmail")||null,notWebmail=_oWin.document.getElementById("notWebmail")||null;
if(webmail)
{
webmail.style.display="";
}
if(notWebmail)
{
notWebmail.style.display="none";
}
if(_aoCfg&&_aoCfg.isNname)
{
_sUserAlias=_oTop.getUserInfoText("alias");
if(_sUserAlias&&_sUserAlias!="")
{
_oWin.document.getElementById("qqmlNickName").innerHTML="Hi\uFF0C"+_oTop.htmlEncode(_sUserAlias)+"\uFF1A";
}
}
}
}
_aoLoadWin.readmailSpread=spread;
function sendCardInSpreadMail(_asUrl)
{
showInfo("\u90AE\u4EF6\u53D1\u9001\u4E2D");
QMAjax.send(_asUrl,{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
showInfo("\u53D1\u9001\u6210\u529F");
}
else{
showError("\u53D1\u9001\u5931\u8D25");
}
}});
}
_aoLoadWin.sendCardSpread=sendCardInSpreadMail;
})(window);
