var initComposeForPage=(function(){
var _oTop=getTop();
_oTop.osslogAjaxCompose(0);
_oTop.initAddress&&_oTop.initAddress();
if(_oTop.initComposeForPage)
{
return _oTop.initComposeForPage;
}
function _getCustomTagList()
{
return ["sign","includetail"];
}
function _isFtnUploading()
{
return getTop().QMDialog("ftnupload_attach");
}
function _isFtnComplete()
{
var _oDlg=getTop().QMDialog("ftnupload_attach"),_oMgr=_oDlg&&_oDlg.getDialogWin().oMainObj;
return (_oMgr&&_oMgr.mnUploaderCount==_oMgr.mnSuccessCount);
}
function _isFtnCenterUploading()
{
return getTop().QMDialog("ftnupload_self");
}
function _isFtnCenterComplete()
{
var _oDlg=getTop().QMDialog("ftnupload_self"),_oMgr=_oDlg&&_oDlg.getDialogWin().oMainObj;
return (_oMgr&&_oMgr.mnUploaderCount==_oMgr.mnSuccessCount);
}
function _getOneSender(_asAttr,_asValue)
{
var _oAllDefSenders=getTop().goUserInfo.get('RealDefaultAllMail');
for(var i in _oAllDefSenders)
{
var _oSender=_oAllDefSenders[i];
if(_oSender[_asAttr]==_asValue)
{
return _oSender.email;
}
}
}
function _outputDataLoading(_abAddBorder)
{
return getTop().outputDataLoading(_abAddBorder);
}
function filterSourceContent(_asSource)
{
return getTop().filteScript(_asSource.replace(/<div\s.*?\'?\"?QQMailBgMusicInfo\'?\"?.*?>.*?<\/div>/ig,"").replace(/<player .*?><\/player>/ig,"").replace(/(^\s+)|(\s+$)/ig,"").replace(/\.qmbox\s/ig,""));
}
function getNoteFirstPageSource(_abText,_asText)
{
var _sText=_asText||"\u8BF7\u8F93\u5165\u8BB0\u4E8B\u5185\u5BB9...";
return _abText?_sText:["<div style='color:#a0a0a0;font-size:14px;'>",_sText,"</div>"].join("");
}
function redirectExitURLId(_anUrlId)
{
if(_anUrlId==1&&(getTop().QMHistory.tryBackTo("readmail")||getTop().QMHistory.tryBackTo("mail_list")))
{
return;
}
var _oUrls=["/cgi-bin/addressbook/addr_listall?","/cgi-bin/today?","/cgi-bin/cardlist?ListType=Cards&Cate1Idx=listall&t=card&loc=cardlist,cardlist,fromtab,1&","/cgi-bin/readtemplate?t=compose&s=cnew&","/cgi-bin/grouplist?t=compose_group&","/cgi-bin/note_list?","/cgi-bin/mail_list?folderid=8&t=mail_list_group&","/cgi-bin/readtemplate?t=compose_audiomail&","/cgi-bin/addr_listall?func=birthcard&t=birth_friendlist&","/cgi-bin/readtemplate?t=compose_video&","/cgi-bin/readtemplate?t=compose_postcard&","/cgi-bin/readtemplate?t=compose_drift&maxage=0&"];
if(_anUrlId<0||_anUrlId>=_oUrls.length)
{
_anUrlId=1;
}
var _sUrl=_oUrls[_anUrlId]+"sid="+getTop().getSid();
if(_anUrlId==5)
{
_sUrl+=("&"+getTop().getGlobalVarValue("DEF_NOTE_ORG"));
;getTop().setGlobalVarValue("DEF_NOTE_ORG","");
}
if(getTop().bnewwin==1)
{
_sUrl+="&newwin=true";
}
getTop().goUrlMainFrm((_anUrlId==1?getTop().QMHistory.getUrl(getTop().QMHistory.getLastRecordId()):null)||_sUrl,false,_anUrlId>=2&&_anUrlId<=4);
}
function _CodeAndEncode(_asKey,_asStr)
{
if(getTop().gbIsIE&&getTop().gnIEVer<8)
{
return _asStr;
}
var _nKeyUnicodeSum=0,_sCodedStr="";
for(j=0;j<_asKey.length;j++)
{
_nKeyUnicodeSum+=_asKey.charCodeAt(j);
}
for(i=0;i<_asStr.length;i++)
{
var _sStrXOR=_asStr.charCodeAt(i)^_nKeyUnicodeSum;
_sCodedStr+=String.fromCharCode(_sStrXOR);
}
return _sCodedStr;
}
function _addrErrDlg(_aoCfg)
{
var _oCfg=_aoCfg,_oTop=getTop();
new _oTop.QMDialog({sId:_oCfg.sId||"Address_error",sTitle:_oCfg.sTitle||"\u6536\u4EF6\u4EBA\u683C\u5F0F\u9519\u8BEF",nHeight:null,sBodyHtml:_oTop.T(['<div class="dialog_feedback">','<span class="dialog_icon icon_caution_b"></span>','<div class="dialog_f_c">','<div class="dialog_f_t">$desc$</div>','<div class="dialog_f_d" style="max-height:64px;_height:53px;word-break:break-all;overflow:hidden;">" <span class="red">$result$</span> "</div>','</div>','</div>','<div class="dialog_operate">','<input type=button class="btn wd2" id="confirm" value="\u786E\u5B9A" >','</div>']).replace({result:_oCfg.oErrorAddrs.join('</b>","<b style="color:red;">'),desc:_oCfg.sDesc||""}),onload:function(){
var _oSelfObj=this;
_oTop.addEvent(this.S("confirm"),"click",function(){
_oSelfObj.close();
});
},onshow:function(){
this.S("confirm").focus();
}});
return false;
}
function _uploadComposeEml()
{
new QMDialog({sId:"uploademldlg",sTitle:"\u4E0A\u4F20eml\u6587\u4EF6",sBodyHtml:TE(['<form style="width:100%;" method="post" id="uploademl" name="uploademl" target="actionFrame" action="/cgi-bin/qf_upload" enctype="multipart/form-data">','<div class="dialog_txt">','\u8BF7\u9009\u62E9eml\u6587\u4EF6\uFF1A<input type="hidden" name="sid" value="$sid$"/>','<input type="file" name="UploadFile" class="btn" value=""/>','</div>','<div class="dialog_operate">','<input type="submit" value="\u4E0A\u4F20" class="wd2 btn"/>','<input type="button" value="\u53D6\u6D88" class="wd2 btn"  id="cancel"/>','<div class="clr"></div>','</div>','</form>']).replace({sid:getSid()}),onload:function(){
var _oDlg=this;
_oDlg.S("cancel").onclick=function(){
getTop().getActionWin().location.href="javascript:;";
_oDlg.close();
};
}});
}
function sendAfterUpload(_abValue)
{
if(_abValue)
{
getTop().getMainWin().gbCkSendafterupload=_abValue;
}
else{
return (getTop().getMainWin().gbCkSendafterupload=="undefined")?0:getTop().getMainWin().gbCkSendafterupload;
}
}
var QMCharCode={_m:[[0,127],[164,164],[167,168],[176,177],[183,183],[215,215],[224,225],[232,234],[236,237],[242,243],[247,247],[249,250],[252,252],[257,257],[275,275],[283,283],[299,299],[324,324],[328,328],[333,333],[363,363],[462,462],[464,464],[466,466],[468,468],[470,470],[472,472],[474,474],[476,476],[593,593],[609,609],[711,711],[713,715],[729,729],[913,929],[931,937],[945,961],[963,969],[1025,1025],[1040,1103],[1105,1105],[8208,8208],[8211,8214],[8216,8217],[8220,8221],[8229,8230],[8240,8240],[8242,8243],[8245,8245],[8251,8251],[8364,8364],[8451,8451],[8453,8453],[8457,8457],[8470,8470],[8481,8481],[8544,8555],[8560,8569],[8592,8595],[8598,8601],[8712,8712],[8719,8719],[8721,8721],[8725,8725],[8730,8730],[8733,8736],[8739,8739],[8741,8741],[8743,8747],[8750,8750],[8756,8759],[8765,8765],[8776,8776],[8780,8780],[8786,8786],[8800,8801],[8804,8807],[8814,8815],[8853,8853],[8857,8857],[8869,8869],[8895,8895],[8978,8978],[9312,9321],[9332,9371],[9472,9547],[9552,9587],[9601,9615],[9619,9621],[9632,9633],[9650,9651],[9660,9661],[9670,9671],[9675,9675],[9678,9679],[9698,9701],[9733,9734],[9737,9737],[9792,9792],[9794,9794],[12288,12291],[12293,12311],[12317,12318],[12321,12329],[12353,12435],[12443,12446],[12449,12534],[12540,12542],[12549,12585],[12832,12841],[12849,12849],[12963,12963],[13198,13199],[13212,13214],[13217,13217],[13252,13252],[13262,13262],[13265,13266],[13269,13269],[19968,40869],[63788,63788],[63865,63865],[63893,63893],[63975,63975],[63985,63985],[64012,64015],[64017,64017],[64019,64020],[64024,64024],[64031,64033],[64035,64036],[64039,64041],[65072,65073],[65075,65092],[65097,65106],[65108,65111],[65113,65126],[65128,65131],[65281,65374]]};
QMCharCode.findGbkChar=function(_anCharCode){
var _nLow,_nHigh,_nMid;
var _m=this._m;
_nLow=0;
_nHigh=_m.length-1;
while(_nLow<=_nHigh)
{
_nMid=Math.floor((_nLow+_nHigh)/2);
if(_anCharCode>_m[_nMid][1])
{
_nLow=_nMid+1;
}
if(_anCharCode<_m[_nMid][0])
{
_nHigh=_nMid-1;
}
if(_anCharCode>=_m[_nMid][0]&&_anCharCode<=_m[_nMid][1])
{
return 1;
}
}
return 0;
};
QMCharCode.hasNonGbkChar=function(_asContent){
for(var i=Math.min(_asContent.length,10000)-1;i>=0;i--)
{
var _sCharCode=_asContent.charCodeAt(i);
if(this.findGbkChar(_sCharCode)==0)
{
return true;
}
}
return false;
};
function _initEditorExternToolBarUI()
{
}
var QMClipImg=(function(){
var _oTop=getTop();
_oTop.loadJsFileToTop(['$js_path$webp/com/kits/qmeditor/qqmail/release/editor_toolbar_ext250c75.js']);
function _setSelectionBookmark(_aoWin)
{
try{
return _oTop.QMSelection.getSelection(_aoWin).getRange().createBookmark();
}
catch(e)
{
}
}
function _clearSelectionBookmark(_aoBookmark,_aoWin,_aoEditor)
{
if(_aoBookmark)
{
_aoBookmark={oStartNode:_oTop.S(_aoBookmark.oStartNode.id,_aoWin),oEndNode:_aoBookmark.oEndNode&&_oTop.S(_aoBookmark.oEndNode.id,_aoWin)};
setTimeout(function(){
try{
_aoEditor.focus(0);
var _oRange=_oTop.QMSelection.getSelection(_aoWin).getRange();
_oRange.gotoBookmark(_aoBookmark);
_oRange.select();
_aoEditor.saveRange();
}
catch(e)
{
_oTop.removeSelf(_aoBookmark.oStartNode);
if(_aoBookmark.oEndNode)
{
_oTop.removeSelf(_aoBookmark.oEndNode);
}
}
},_oTop.gbIsFF?100:10);
}
else{
_aoEditor.focus(0,_aoEditor.getContentObj("QQMAILSTATIONERY"));
}
}
function QMClipImg(_aoEditor)
{
this._moEditor=_aoEditor;
this._moFileQuery=[];
}
QMClipImg.prototype={_getEditor:function(){
return this._moEditor.getCurrentEditor();
},_editorS:function(_asId){
return _oTop.S(_asId,this._getEditor().getEditWin());
},_resizeEditor:function(){
var _oEditor=this._getEditor();
_oEditor.resizeEditor();
_oEditor.resizeNoScrollEditor();
},_getFileUploder:function(){
var _oSelf=this;
var _oEditor=_oSelf._moEditor;
var _oWin=_oEditor.getEditorAreaWin();
if(!_oSelf._moFileUploder)
{
var _oFileQuery=new QMFileQuery(_oEditor);
_oSelf._moFileQuery=_oFileQuery;
var _nFileLoadSuc=_nFileLoadWait=0;
var _checkComplete=function(){
var _oUploadStatus=_oFileQuery.status();
var _nFileWait=_oUploadStatus.nWait+_nFileLoadWait;
var _nFileSuc=_nFileLoadSuc;
var _nFileErr=_oUploadStatus.nErr+(_oUploadStatus.nSuc-_nFileLoadSuc);
if(_nFileWait<1)
{
if(_nFileSuc)
{
if(!_nFileErr)
{
_oTop.LogKV({sValue:'compose|editor|clip|localimg|suc'});
_oTop.showInfo('\u6587\u6863'+(_nFileSuc>1?'\u5168\u90E8':'')+'\u56FE\u7247\u4E0A\u4F20\u6210\u529F');
}
else{
_oTop.LogKV({sValue:'compose|editor|clip|localimg|suc_part'});
_oTop.ossLogCustom('delay','all','clipimgerror','suc_part:'+_nFileSuc+'/'+(_nFileSuc+_nFileErr));
_oTop.showError('\u90E8\u5206\u56FE\u7247\u672A\u6210\u529F\u4E0A\u4F20');
}
}
else{
_oTop.LogKV({sValue:'compose|editor|clip|localimg|err'});
_oTop.showError('\u56FE\u7247\u4E0A\u4F20\u5931\u8D25');
}
_nFileLoadSuc=_nFileLoadWait=0;
_oFileQuery.revert();
}
};
var _onError=function(_aoFile){
var _oImgNode=_oSelf._editorS(_aoFile.get('sFid'));
if(_oImgNode)
{
_oImgNode.src=_oTop.getRes('$images_path$webp/function/local_wait1e9c5d.gif');
}
else{
_oTop.LogKV({sValue:'compose|editor|clip|localimg|img_err|nonode'});
}
_oFileQuery.next();
_checkComplete();
};
_oSelf._moFileUploder=_oTop.QMFileUpload.create('popup',{oComlist:['ActivexPopupMail'],onselect:function(_aoFiles){
_oTop.E(_aoFiles,function(_aoFile){
if(_aoFile.get('nSize')<=0)
{
_oTop.ossLogCustom('delay','all','clipimgerror','size_error:'+_aoFile.get('sLocalPath'));
_oTop.LogKV({sValue:'compose|editor|clip|localimg|img_err|nosize'});
_onError(_aoFile);
}
else{
_oFileQuery.push(_aoFile);
}
});
_oFileQuery.next();
},oncomplete:function(_aoFile){
var _oImgNode=_oSelf._editorS(_aoFile.get('sFid'));
var _sImgSrc=_aoFile.get('sFileUrl');
if(_oImgNode&&_sImgSrc)
{
var _oImg=new Image();
_oImg.onload=function(){
_oImg.onload=null;
_nFileLoadWait--;
var _oNewImgNode=document.createElement('div');
_oNewImgNode.innerHTML=_aoFile.get('sImgTpl');
_oNewImgNode=_oNewImgNode.firstChild;
while(_oNewImgNode&&_oNewImgNode.nodeType==3)
{
_oNewImgNode=_oNewImgNode.nextSibling;
}
if(!_oNewImgNode)
{
_onError(_aoFile);
return;
}
try{
_oImgNode.parentNode.replaceChild(_oNewImgNode,_oImgNode);
_oNewImgNode.src=_sImgSrc;
_nFileLoadSuc++;
_checkComplete();
setTimeout(function(){
_oSelf._resizeEditor();
},100);
}
catch(e)
{
_onError(_aoFile);
}
};
_oImg.onerror=function(){
_oImg.onerror=null;
_nFileLoadWait--;
_oTop.ossLogCustom('delay','all','clipimgerror','imgload_error:'+_aoFile.get('sLocalPath')+' url:'+_sImgSrc);
_onError(_aoFile);
};
_nFileLoadWait++;
_oImg.src=_sImgSrc;
}
else{
_onError(_aoFile);
}
_oFileQuery.next();
},onerror:function(_aoFile){
_oTop.ossLogCustom('delay','all','clipimgerror','upload_error:'+_aoFile.get('sLocalPath'));
_onError(_aoFile);
},oContainer:_oWin.document.createElement('div')});
}
return _oSelf._moFileUploder;
},_oPlaceholderImgTpl:_oTop.T('<img id="$id$" src="$img$" __clipimg__="imgitem" width="126px" height="91px" url="$url$" />'),_getReplaceFunc:function(){
var _oSelf=this;
var _oUploader=_oSelf._getFileUploder();
return function(_asTags,_asTagStart,_asQute,_asUrl,_asPreUrl,_asFilePath,_asTagEnd){
var _sId='sfid_clipimg'+_oTop.unikey();
_asFilePath=decodeURIComponent(_asFilePath);
if(_asTagStart.toLowerCase().indexOf('<v:imagedata')===0)
{
_asTagStart='<img'+_asTagStart.substr(12);
_asTagEnd=_asTagEnd.substr(0,_asTagEnd.indexOf('>'))+' style="width:100%; height:100%;" />';
}
if(_oUploader&&_asPreUrl=='file:///')
{
setTimeout(function(){
_oUploader.onselect([_oUploader.addFile({sFid:_sId,sLocalPath:_asFilePath,sImgTpl:[_asTagStart,_asTagEnd].join('')})]);
});
}
return _oSelf._oPlaceholderImgTpl.replace({id:_sId,url:_oTop.htmlEncode(_asPreUrl+_asFilePath),img:_oTop.getRes('$images_path$webp/function/local_wait1e9c5d.gif')});
};
},analyse:function(){
var _oSelf=this;
var _oEditor=_oSelf._getEditor();
var _oWin=_oEditor.getEditWin();
var _replace=_oSelf._getReplaceFunc();
_oWin.setTimeout(function(){
var _oBookmark=_setSelectionBookmark(_oWin);
var _sHtmlContent=_oEditor.getContent();
var _sNewContent=_sHtmlContent.replace(/(<v:imagedata[^>]*?)src=([\'\"])((file:\/\/\/)(.*?))\2([^>]*?>[\s\S]*?<\/v:imagedata>)/gi,_replace).replace(/(<img[^>]*?)src=([\'\"])((file:\/\/\/|webkit\-fake\-url)(.*?))\2([^>]*?>)/gi,_replace);
if(_sNewContent!=_sHtmlContent)
{
_oEditor.setContent(_sNewContent);
_oTop.LogKV({sValue:'compose|editor|clip|localimg|init'});
if(!_oSelf._getFileUploder()&&!(_oTop.gbIsChrome&&parseInt(_oTop.gsChromeVer)>41))
{
_oTop.showInfo('\u56FE\u7247\u672A\u80FD\u6210\u529F\u7C98\u8D34\uFF0C\u8BF7\u5B89\u88C5QQ\u90AE\u7BB1\u63D2\u4EF6\u540E\u518D\u8BD5\u3002<a href="/cgi-bin/readtemplate?t=browser_addon&check=false&returnsid='+_oTop.getSid()+'&kvclick=compose|editor|clip|localimg|activex_download" target="_blank" nocheck="true">[\u5B89\u88C5]</a>');
_oTop.S('msgBoxDIV',_oTop).getElementsByTagName('a')[0].onclick=_oTop.hiddenMsg;
_oTop.LogKV({sValue:'compose|editor|clip|localimg|nouploader'});
}
_oTop.ossLog("delay","all","stat=rmimgerr&type=3&info=0");
}
_clearSelectionBookmark(_oBookmark,_oWin,_oEditor);
},13);
},isUploading:function(){
if(this._moFileQuery)
{
return this._moFileQuery.status().nWait;
}
return false;
},stopUpload:function(){
this._moFileQuery&&this._moFileQuery.stop();
}};
function QMFileQuery(_aoEditor)
{
this._moEditor=_aoEditor;
this.revert();
}
QMFileQuery.prototype={_getEditor:function(){
return this._moEditor.getCurrentEditor();
},_editorS:function(_asId){
return _oTop.S(_asId,this._getEditor().getEditWin());
},push:function(_aoFile){
this._moFileQuery.push(_aoFile);
},revert:function(){
this._moFileQuery=[];
},next:function(){
var _oSelf=this;
var _oFileQuery=_oSelf._moFileQuery;
var _bHasNoImgNode=false;
for(var i=0,len=_oFileQuery.length;i<len;i++)
{
var _oFile=_oFileQuery[i];
if(_oFile.get("sStatus")=="ready")
{
var _oImgNode=_oSelf._editorS(_oFile.get('sFid'));
if(!_oImgNode)
{
_bHasNoImgNode=true;
continue;
}
if(_oFile.upload())
{
_oImgNode.src=_oTop.getRes('$images_path$webp/function/local_uploading1e9c5d.gif');
_oTop.showProcess(2,true,i/len*100,"\u56FE\u7247\u6B63\u5728\u4E0A\u4F20\u4E2D",false);
return true;
}
return false;
}
}
if(_bHasNoImgNode)
{
for(var i=0;i<_oFileQuery.length;i++)
{
if(_oFileQuery[i].get("sStatus")=="ready")
{
_oFileQuery.splice(i--,1);
}
}
}
return false;
},stop:function(){
_oTop.E(this._moFileQuery,function(_aoFile){
if(_aoFile.get('sStatus')=='uploading')
{
_aoFile.cancel();
}
});
_oTop.hiddenMsg();
this.revert();
},status:function(){
var _nFileWait=_nFileSuc=_nFileErr=0;
_oTop.E(this._moFileQuery,function(_aoFile){
var _sStatus=_aoFile.get('sStatus');
switch(_sStatus)
{case 'error':
_nFileErr++;
break;
case 'complete':
_nFileSuc++;
break;
default:
_nFileWait++;
}
});
return {nWait:_nFileWait,nErr:_nFileErr,nSuc:_nFileSuc};
}};
QMClipImg.clear=function(_asContent){
return _asContent.replace(/<img[^>]*?__clipimg__="imgitem"[^>]*?>/gi,"");
};
QMClipImg.onclickImg=function(_aoEvent){
var _oEditor=this,_oTarget=_oTop.getEventTarget(_aoEvent),_sUnikey=_oTop.attr(_oTarget,"__clipimg__");
if(_sUnikey)
{
window.open(_oTop.T("/cgi-bin/readtemplate?sid=$sid$&t=help_localpic&filepath=$path$").replace({sid:_oTop.getSid(),path:encodeURIComponent(_oTop.attr(_oTarget,"url"))}));
}
};
return QMClipImg;
})();
var QMLinkDetector=(function(){
var _oTop=getTop();
_oTop.loadJsFileToTop(['$js_path$webp/com/kits/qmeditor/qqmail/release/editor_toolbar_ext250c75.js']);
function _setSelectionBookmark(_aoWin)
{
try{
return _oTop.QMSelection.getSelection(_aoWin).getRange().createBookmark();
}
catch(e)
{
}
}
function _clearSelectionBookmark(_aoBookmark,_aoWin,_aoEditor)
{
if(_aoBookmark)
{
_aoBookmark={oStartNode:_oTop.S(_aoBookmark.oStartNode.id,_aoWin),oEndNode:_aoBookmark.oEndNode&&_oTop.S(_aoBookmark.oEndNode.id,_aoWin)};
try{
_aoEditor.focus(0);
var _oRange=_oTop.QMSelection.getSelection(_aoWin).getRange();
_oRange.gotoBookmark(_aoBookmark);
_oRange.select();
_aoEditor.saveRange();
}
catch(e)
{
_oTop.removeSelf(_aoBookmark.oStartNode);
if(_aoBookmark.oEndNode)
{
_oTop.removeSelf(_aoBookmark.oEndNode);
}
}
}
else{
_aoEditor.focus(0,_aoEditor.getContentObj("QQMAILSTATIONERY"));
}
}
function QMLinkDetector(_aoEditor)
{
this._moEditor=_aoEditor;
this._moWin=_aoEditor.getEditWin();
}
QMLinkDetector.prototype={processEnter:function(_aoEvent){
if(_aoEvent.keyCode==13)
{
return this.handleEnter(this._moEditor);
}
},processSpacebar:function(_aoEvent){
if(_aoEvent.keyCode==32)
{
return this.handleSpacebar(this._moEditor);
}
},handleSpacebar:function(_aoEditor){
if(_oTop.gbIsIE)
{
return;
}
this.parseCurrentLine(_aoEditor,0,'',true);
},handleEnter:function(_aoEditor){
if(_oTop.gbIsIE)
{
return;
}
this.parseCurrentLine(_aoEditor,-1,'',false);
},parseCurrentLine:function(_aoEditor,_anEndOffset,_asDelimiter){
var _oRng,_nEnd,_nStart,_oEndContainer,_oBookmark,_sText,_oMatches,_oPrev,_nLen,_sRngText;
function _fScopeIndex(_aoContainer,_anIndex)
{
if(_anIndex<0)
{
_anIndex=0;
}
if(_aoContainer.nodeType==3)
{
var _nLen=_aoContainer.data.length;
if(_anIndex>_nLen)
{
_anIndex=_nLen;
}
}
return _anIndex;
}
function _fSetStart(_aoContainer,_anOffset)
{
if(_aoContainer.nodeType!=1||_aoContainer.hasChildNodes())
{
_oRng.setStart(_aoContainer,_fScopeIndex(_aoContainer,_anOffset));
}
else{
_oRng.setStartBefore(_aoContainer);
}
}
function _fSetEnd(_aoContainer,_anOffset)
{
if(_aoContainer.nodeType!=1||_aoContainer.hasChildNodes())
{
_oRng.setEnd(_aoContainer,_fScopeIndex(_aoContainer,_anOffset));
}
else{
_oRng.setEndAfter(_aoContainer);
}
}
var _oRange=_oTop.QMSelection.getSelection(this._moWin).getRange(true).cloneRange();
_oRng=_oRange._moRange;
if(_oRng.startOffset<5)
{
_oPrev=_oRng.endContainer.previousSibling;
if(!_oPrev)
{
if(!_oRng.endContainer.firstChild||!_oRng.endContainer.firstChild.nextSibling)
{
return;
}
_oPrev=_oRng.endContainer.firstChild.nextSibling;
}
_nLen=_oPrev.length;
_fSetStart(_oPrev,_nLen);
_fSetEnd(_oPrev,_nLen);
if(_oRng.endOffset<5)
{
return;
}
_nEnd=_oRng.endOffset;
_oEndContainer=_oPrev;
}
else{
_oEndContainer=_oRng.endContainer;
if(_oEndContainer.nodeType!=3&&_oEndContainer.firstChild)
{
while(_oEndContainer.nodeType!=3&&_oEndContainer.firstChild)
{
_oEndContainer=_oEndContainer.firstChild;
}
if(_oEndContainer.nodeType==3)
{
_fSetStart(_oEndContainer,0);
_fSetEnd(_oEndContainer,_oEndContainer.nodeValue.length);
}
}
if(_oRng.endOffset==1)
{
_nEnd=2;
}
else{
_nEnd=_oRng.endOffset-1-_anEndOffset;
}
}
_nStart=_nEnd;
do{
_fSetStart(_oEndContainer,_nEnd>=2?_nEnd-2:0);
_fSetEnd(_oEndContainer,_nEnd>=1?_nEnd-1:0);
_nEnd-=1;
_sRngText=_oRng.toString();
}
while(_sRngText!=' '&&_sRngText!==''&&_sRngText.charCodeAt(0)!=160&&(_nEnd-2)>=0&&_sRngText!=_asDelimiter);
if(_oRng.toString()==_asDelimiter||_oRng.toString().charCodeAt(0)==160)
{
_fSetStart(_oEndContainer,_nEnd);
_fSetEnd(_oEndContainer,_nStart);
_nEnd+=1;
}
else if(_oRng.startOffset===0)
{
_fSetStart(_oEndContainer,0);
_fSetEnd(_oEndContainer,_nStart);
}
else{
_fSetStart(_oEndContainer,_nEnd);
_fSetEnd(_oEndContainer,_nStart);
}
_sText=_oRng.toString();
if(_sText.charAt(_sText.length-1)=='.')
{
_fSetEnd(_oEndContainer,_nStart-1);
}
_sText=_oRng.toString();
_oMatches=_sText.match(/^(https?:\/\/|www\.|[A-Z0-9._%+\-]+@)(.+)$/i);
if(_oMatches)
{
if(_oMatches[1]=='www.')
{
_oMatches[1]='http://www.';
}
_oBookmark=_setSelectionBookmark(this._moWin);
_oRange.select();
_aoEditor.execCmd('createlink',_oMatches[1]+_oMatches[2]);
_clearSelectionBookmark(_oBookmark,this._moWin,_aoEditor);
}
}};
return QMLinkDetector;
})();
function initTimeSendDlg(_aoCfg,_afConfirm,_afBeforeClose)
{
var _oTop=getTop(),_oSendTimeYear=_aoCfg.sendtimeyear,_oSendTimeMonth=_aoCfg.sendtimemonth,_oSendTimeDay=_aoCfg.sendtimeday,_oSendTimeHour=_aoCfg.sendtimehour,_oSendTimeMin=_aoCfg.sendtimemin,_sConfirmBtn=_aoCfg.confirmbtn||"\u53D1\u9001",_sTitle=_aoCfg.title||"\u5B9A\u65F6\u53D1\u9001",_oTimeSendDlgTmpl=_oTop.T(['<div style="padding:20px 28px;text-align:left;">','<div style="_zoom:1;">$tip$<span id="sendTimeType"></span></div>','<div id="sendTimeContainer" style="margin:6px 0 8px -4px;font-family:Tahoma">\u52A0\u8F7D\u4E2D...</div>','<div class="clr"></div>','<div class="addrtitle" id="sendtimemsg" style="margin-top:10px;"></div>','</div>']);
_oTop.loadJsFile("$js_path$webp/qmlunar24e6ae.js",true);
_oTop.loadJsFile("$js_path$webp/qmdatectrl24e6b9.js",true);
var _sTimeTip=_aoCfg.timetips||"\u9009\u62E9\u5B9A\u65F6\u53D1\u9001\u7684\u65F6\u95F4\uFF1A",_oDateCtrl=null;
new _oTop.QMDialog({sId:"timeSend",sBodyHtml:_oTimeSendDlgTmpl.replace({tip:_sTimeTip}),sFootHtml:_oTop.T(['<input id="confirm" class="wd2 btn btn_true" type="button" value="$confirmBtn$" />','<input id="cancel"  class="wd2 btn btn_true" type="button" value="\u53D6\u6D88" />']).replace({confirmBtn:_sConfirmBtn}),sTitle:_sTitle,nWidth:470,onshow:function(){
this.S("cancel").focus();
},onload:function(){
var _oSelfObj=this;
_oTop.addEvent(_oSelfObj.S("confirm"),"click",function(){
var _nInterval=Math.floor((_oDateCtrl.get("solarDate")-_oTop.now())/(60*1000));
if(_nInterval<0)
{
return _oTop.showError("\u60A8\u8BBE\u7F6E\u7684\u5B9A\u65F6\u65F6\u95F4\u5DF2\u7ECF\u8FC7\u671F");
}
if(_nInterval<5)
{
return _oTop.showError("\u60A8\u8BBE\u7F6E\u7684\u5B9A\u65F6\u65F6\u95F4\u8DDD\u79BB\u60A8\u8981\u53D1\u9001\u7684\u65F6\u95F4\u592A\u8FD1\u4E86");
}
_afConfirm&&_afConfirm(_oSelfObj);
_oSelfObj.close();
});
_oTop.addEvent(this.S("cancel"),"click",function(){
_oSelfObj.close();
});
},onbeforeclose:function(){
var _oSelfObj=this;
_afBeforeClose&&_afBeforeClose(_oSelfObj);
return true;
}});
_oTop.waitFor(function(){
return _oTop.Lunar&&_oTop.QMDateCtrl;
},function(_abIsOk){
if(!_abIsOk)
{
_oTop.loadJsFile("$js_path$webp/qmlunar24e6ae.js",true);
_oTop.loadJsFile("$js_path$webp/qmdatectrl24e6b9.js",true);
return;
}
if(!_oSendTimeYear.value)
{
_setSendTime(new Date(_oTop.now()+3600*1000));
}
var _oDialog=_oTop.QMDialog("timeSend");
var _DomSendTimeType=_oDialog&&_oDialog.S("sendTimeType");
if(_DomSendTimeType&&_oTop.getLocale()=="zh_CN")
{
_DomSendTimeType.innerHTML=_oTop.T('(<input type="radio" name="dateType" id="solar_radio" checked/><label for="solar_radio">\u516C\u5386</label><input type="radio" name="dateType" id="lunar_radio"/><label for="lunar_radio">\u519C\u5386</label>)');
}
_oTop.E(_DomSendTimeType.getElementsByTagName("input"),function(_aoInput){
var _bLunar=_aoInput.id=="lunar_radio";
_aoInput.onclick=function(){
_oDateCtrl.changeDateType(_bLunar,"sameday");
};
});
var _oDomSendTimeContainer=_oDialog&&_oDialog.S("sendTimeContainer");
if(_oDomSendTimeContainer)
{
_oDomSendTimeContainer.innerHTML="";
}
debug([_oSendTimeYear.value,_oSendTimeMonth.value,_oSendTimeDay.value]);
_oDateCtrl=new _oTop.QMDateCtrl({container:_oDomSendTimeContainer,type:_oTop.QMDateCtrl.LUNAR_LEAP_SUPPORT,year:{current:_oSendTimeYear.value,end:parseInt(_oSendTimeYear.value)+2},month:{current:_oSendTimeMonth.value},day:{current:_oSendTimeDay.value},hour:{current:_oSendTimeHour.value},minute:{current:_oSendTimeMin.value},onchange:function(_aoQMDateCtrl){
_dispFormatDate(_aoQMDateCtrl);
}});
_dispFormatDate(_oDateCtrl);
});
return false;
function _setSendTime(_aoDate)
{
_oSendTimeYear.value=_aoDate.getFullYear();
_oSendTimeMonth.value=_aoDate.getMonth()+1;
_oSendTimeDay.value=_aoDate.getDate();
_oSendTimeHour.value=_aoDate.getHours();
_oSendTimeMin.value=_aoDate.getMinutes();
}
function _dispFormatDate(_aoQMDateCtrl)
{
var _oSolarDate=_aoQMDateCtrl.get("solarDate");
var _oDialog=getTop().QMDialog("timeSend");
var _oDom=_oDialog&&_oDialog.S("sendtimemsg");
if(_aoQMDateCtrl.get("isLunar"))
{
if(_oDom)
{
var _Tmpl=getTop().TE('\u65E5\u671F\u7B49\u540C\u4E8E&nbsp;<span class="black bold">\u516C\u5386\u7684$year$\u5E74$month$\u6708$day$\u65E5</span>&nbsp;\uFF0C\u5C4A\u65F6\u4E8E&nbsp;<span class="black bold">$hour$:$@$if($minute$<10)$@$0$@$endif$@$$minute$</span>&nbsp;\u6295\u9012\u3002');
_oDom.innerHTML=_Tmpl.replace({year:_oSolarDate.getFullYear(),month:_oSolarDate.getMonth()+1,day:_oSolarDate.getDate(),hour:_oSolarDate.getHours(),minute:_oSolarDate.getMinutes()});
}
}
else{
if(_oDom)
{
_oDom.innerHTML=getTop().T('\u672C\u90AE\u4EF6\u5C06\u5728&nbsp;<span class="black bold">$time$</span>&nbsp;\u6295\u9012\u5230\u5BF9\u65B9\u90AE\u7BB1\u3002').replace({time:getTop().QMTimeLang.formatRefer(_oSolarDate)});
}
}
_setSendTime(_oSolarDate);
}
;
}
function QMAddrCtrl(_aoCompose)
{
this._moCompose=_aoCompose;
this._init();
}
QMAddrCtrl.prototype={_init:function(){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_oCompose.getWin();
_oSelfAddrCtrl.moLinkmanInstance=null;
_oSelfAddrCtrl._sFocusObjName='to';
_oSelfAddrCtrl._oAddrAssociateCache={};
_oSelfAddrCtrl._oAddrAssociateAjax=null;
_oSelfAddrCtrl._oAddrAssociateShowSpan=null;
getTop().E(['initAddrCtrl','setFocus','addAddr','showSeparatedCopy','showInputCtrl','rmHelper'],function(_asMethodName){
_oWin[_asMethodName]=function(){
return _oSelfAddrCtrl[_asMethodName].apply(_oSelfAddrCtrl,arguments);
};
});
_oWin.showQuickAddr=_oSelfAddrCtrl.showQuickAddr();
},S:function(_asId){
return this._moCompose.S(_asId);
},initAddrCtrl:function(_aoWin,_aoTextAreas,_aoConfig){
var _oTop=getTop();
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_oCompose.getWin()||_aoWin;
var _oAddrInputMain=_oCompose.getQMAddrInput();
var _oAddrDomain=_oWin.addrDomain={},_oInputObjs=_oWin.InputObjs=[],_oNewInputAddrs=_oWin.NewInputAddrs=[],_sAddrInputDef="",_oNewRcptDom=_oTop.S("domnewRcpt",_oWin),_oAddExistFile=_oTop.S("domAddExistFile",_oWin);
_aoConfig=_oTop.extend({bAddrTip:false,bDomCheck:true,bNick:false},_aoConfig);
try{
_oWin.focus();
}
catch(_oError)
{
}
function _showAssociation(_asInputId)
{
if(!_showAssociation[_asInputId=='sc'?'sc':'to'])
{
_showAssociation[_asInputId=='sc'?'sc':'to']=setTimeout(function(){
_showAssociation[_asInputId=='sc'?'sc':'to']=null;
_oSelfAddrCtrl._addrAssociate(_asInputId=='sc'?_oInputObjs.slice(3):_oInputObjs.slice(0,3));
});
}
}
function _checkExist(_asKey)
{
for(var i=0;i<_oNewInputAddrs.length;i++)
{
if(_oNewInputAddrs[i].addr==_asKey)
{
return true;
}
}
return false;
}
function _doShow()
{
var _oReplyExistAttach=_oTop.S("replyexistAttach",_oWin),_oAttachContainer=_oTop.S("attachContainer",_oWin);
if(!_oTop.isShow(_oReplyExistAttach)&&_oNewInputAddrs.length>0)
{
if(!_oTop.isShow(_oAttachContainer))
{
_oTop.show(_oAttachContainer,1);
}
_oTop.show(_oNewRcptDom,1);
}
}
function _doHide()
{
var _oReplyExistAttach=_oTop.S("replyexistAttach",_oWin);
if(_oTop.isShow(_oNewRcptDom)&&_oNewInputAddrs.length==0)
{
_oTop.show(_oNewRcptDom,0);
}
if(_oTop.isShow(_oReplyExistAttach)&&_oNewInputAddrs.length==0)
{
_oSelfAddrCtrl._emptyData(_oWin);
}
}
function _addData()
{
var _oResult=[],_sName="",_oNew_Addr1=_oTop.S("new_addr1",_oWin),_oNew_Addr2=_oTop.S("new_addr2",_oWin);
for(var i=0;i<_oNewInputAddrs.length;i++)
{
var _oInfo=_oNewInputAddrs[i],_sTmpNick="";
_oResult.push(_oInfo.nick?['"',getTop().encodeNick(_oInfo.nick),'"<',_oInfo.addr,'>'].join(""):_oInfo.addr);
_sTmpNick=_oInfo.nick?getTop().htmlEncode(getTop().encodeNick(_oInfo.nick)):_oInfo.addr;
_sName+='<span class="">'+_sTmpNick+'</span>';
if(i<_oNewInputAddrs.length-1)
{
_sName+=",&nbsp;";
}
}
_oCompose.getInputObj("newrcpt",null,false).value=_oResult.length>0?_oResult.join(";"):"";
_oTop.setHTML(_oNew_Addr1,_sName);
_oTop.setHTML(_oNew_Addr2,_sName);
}
function _handleHelper(_asType,_asAddrId)
{
var _oCtrl=_oAddrInputMain.get(_asAddrId,_oWin),_oAddrUC=_oTop.S("addrUrlCreator",_oWin),_oAddrQZ=_oTop.S("addrQzone",_oWin),_bHasUC=_oCtrl.hasAddr(_oCompose.getComposeVar().sUrlCreator),_bUCShow=_oTop.isShow(_oAddrUC),_bQZShow=_oTop.isShow(_oAddrQZ),_bToAdd=false,_bToDel=false,_oDomAddrAdd,_oDomAddrDel,_sAddr,_sAddrFullName;
if(_bHasUC&&!_bUCShow)
{
_bToAdd=true;
_oDomAddrAdd=_oAddrUC;
_sAddr=_oCompose.getComposeVar().sUrlCreator;
_sAddrFullName=_oCompose.getComposeVar().sUrlCreatorFullName;
}
if(!_bHasUC&&_bUCShow)
{
_bToDel=true;
_oDomAddrDel=_oAddrUC;
}
else if(_bQZShow)
{
_bToDel=true;
_oDomAddrDel=_oAddrQZ;
}
if(_bToAdd)
{
_oTop.show(_oDomAddrAdd,true);
_oTop.E(_oTop.CN("js_addr_div",_oWin.document),function(_oDiv){
_oTop.show(_oDiv,false);
});
_oCompose.getPageEditor()&&_oCompose.getPageEditor().resizeEditor(true);
_oCtrl.del(_sAddr,true);
_oTop.E(["to","cc","bcc","sc"],function(_asId){
var _oTmpCtrl=_oAddrInputMain.get(_asId,_oWin);
_oTmpCtrl&&_oTmpCtrl.storeAndClear();
});
var _oUcCtrl=_oAddrInputMain.get("to",_oWin)||_oAddrInputMain.get("bcc",_oWin);
_oUcCtrl.disabled(false);
_oUcCtrl.add(_sAddrFullName,true,"\u7F51\u9875\u751F\u6210\u52A9\u624B");
var _oEncryptBtn=_oTop.S("secmailcode",_oWin);
var _oEncryptTips=_oTop.S("encrypt_mail_tips",_oWin);
_oEncryptBtn&&(_oEncryptBtn.checked=false);
getTop().show(_oEncryptTips,false);
getTop().ossLog("realtime","all",getTop().T('stat=linkasit&t=$t$').replace(getTop().getUrlParams(_oWin.location)));
}
if(_bToDel)
{
_oTop.show(_oDomAddrDel,false);
if(!_bToAdd)
{
_oTop.E(_oTop.CN("js_addr_div",_oWin.document),function(_oDiv){
_oTop.show(_oDiv,true);
});
}
_oCompose.getPageEditor()&&_oCompose.getPageEditor().resizeEditor(true);
_oTop.E(["to","cc","bcc","sc"],function(_asId){
var _oTmpCtrl=_oAddrInputMain.get(_asId,_oWin);
_oTmpCtrl&&_oTmpCtrl.restore();
});
if(_oTop.S("to",_oWin).tagName=="INPUT")
{
_oAddrInputMain.get("bcc",_oWin).focus("end");
}
else{
_oAddrInputMain.get("to",_oWin).focus("end");
}
}
}
function _getRecentGroup(_aoAddrInput,_aoInput)
{
if(_aoInput.value=="")
{
return [];
}
var _oAddrList={};
_oTop.E(_oCompose.getComposeVar().oRecentGroupConf,function(_asId){
_oAddrList[_asId]=_oAddrInputMain.get(_asId,_aoWin).get("validemail");
});
return _oTop.QMAddress.getRecentGroup({searchId:_aoAddrInput.getId(),addrList:_oAddrList,searchStr:_aoInput.value});
}
function _NeedACRecentGroup(_asId)
{
if(_oCompose.getPageId()!="compose")
{
return false;
}
for(var _i=0;_i<_oCompose.getComposeVar().oRecentGroupConf.length;++_i)
{
if(_oCompose.getComposeVar().oRecentGroupConf[_i]==_asId)
{
return true;
}
}
return false;
}
function _getAutoCompleteData(_aoAddrInput,_aoInput)
{
var _oAddrData=_filterDuplicate(_oTop.getAddrACData(_aoInput,"",function(_aoAddrData){
return _oSelfAddrCtrl._getSupportGroup()||!_aoAddrData.nShortcutGroupId;
})),_oGroupData=[],_oResult;
if(_NeedACRecentGroup(_aoAddrInput.getId()))
{
_oGroupData=_getRecentGroup(_aoAddrInput,_aoInput);
}
if(_oGroupData.length>3)
{
_oResult=_oAddrData.slice(0,7).concat(_oGroupData.slice(0,3));
}
else{
_oResult=_oAddrData.slice(0,10-_oGroupData.length).concat(_oGroupData);
}
return _oResult;
}
function _filterDuplicate(_aoList)
{
var _oList=_aoList||[],_oMap={},_oArr=[];
for(var i=0;i<_oList.length;i++)
{
if(_oList[i].oAddress&&_oList[i].oAddress.email)
{
var _sEmail=_oList[i].oAddress.email;
if(!_oMap[_sEmail])
{
_oMap[_sEmail]=_oList[i];
}
}
}
for(var j in _oMap)
{
_oArr.push(_oMap[j]);
}
if(_aoList.header)
{
_oArr.header=_aoList.header;
}
return _oArr;
}
_oTop.E(_aoTextAreas||["to","cc","bcc","sc"],function(_asAddrId){
var _oAddrCtrlArea=_oTop.S(_asAddrId+"AreaCtrl",_oWin),_oAddrObj=_oTop.S(_asAddrId,_oWin),_nRequestTip=0;
if(_oAddrCtrlArea&&_oAddrObj)
{
var _bSupportGroup=_oSelfAddrCtrl._getSupportGroup(),_oAddrInput=new _oAddrInputMain({id:_asAddrId,win:_oWin,tabIndex:_oAddrObj.tabIndex,accessKey:_oAddrObj.accessKey,dom:{container:_oAddrCtrlArea},feature:{autoFold:_aoConfig.bAutoFold},dispMode:_aoConfig.bNick?'onlynick':'full',maxHeight:_aoConfig.nMaxHeight,filterFunc:function(_aoAddrData){
return _bSupportGroup||!_aoAddrData.nShortcutGroupId;
},onfocus:function(){
_oSelfAddrCtrl.setFocus(_asAddrId);
_showAssociation(_asAddrId);
},onblur:function(){
if(_oWin["attachflag"]!="replyAllAttach")
{
_oNewRcptDom&&_doShow();
}
},getAutoCompleteData:_getAutoCompleteData,onSelectRecentGroup:function(_aoData){
var _oSelectedGroup=_oTop.QMAddress.getRecentGroupData()[_aoData.index],_sSearchId=_aoData.searchId,_nMatchCnt=_aoData.matchAddrs[_sSearchId].length,_nLastMatchIdx=_aoData.matchAddrs[_sSearchId][_nMatchCnt-1],_oMatchItem=_oSelectedGroup.data[_aoData.searchId][_nLastMatchIdx],_oAddrInput={},_oHash={to:{},cc:{},bcc:{}},_fMakeAddr=function(_asName,_asAddr){
return ["\"",getTop().htmlEncode(_asName),"\"<",_asAddr,">"].join("");
};
_oTop.E(_oCompose.getComposeVar().oRecentGroupConf,function(_asId){
_oAddrInput[_asId]=_oAddrInputMain.get(_asId,_aoWin);
});
_oAddrInput[_aoData.searchId].add(_fMakeAddr(_oMatchItem.name,_oMatchItem.addr),true,getTop().htmlEncode(_oMatchItem.name));
_oTop.E(_oCompose.getComposeVar().oRecentGroupConf,function(_asId){
_oAddrInput[_asId].clearInput();
_oTop.E(_aoData.matchAddrs[_asId],function(_oItem,_nIdx){
_oHash[_asId][_oItem]=true;
});
_oTop.E(_oSelectedGroup.data[_asId],function(_oItem,_nIdx){
if(_oHash[_asId][_nIdx])
{
return;
}
_oAddrInput[_asId].add(_fMakeAddr(_oItem.name,_oItem.addr),true,getTop().htmlEncode(_oItem.name));
});
if(_oSelectedGroup.data[_asId].length)
{
if(!_oSelfAddrCtrl.showInputCtrl(_asId))
{
_oSelfAddrCtrl.showInputCtrl(_asId,false);
}
}
});
this.focus();
getTop().LogKV({sValue:"getinvestigate|compose|recentgroup|select"});
},onchange:function(_asType){
var _sAddrs=this.get(";");
_oCompose.getComposeVar()._oDomainChecker&&_oCompose.getComposeVar()._oDomainChecker.check();
if(_asAddrId=="to"&&!_nRequestTip&&_oTop.S("aSC",_oWin)&&_sAddrs.split(";").length>=5)
{
_nRequestTip=1;
getTop().requestShowTip("aSc",16,_oWin);
}
_handleHelper(_asType,_asAddrId);
_showAssociation(_asAddrId);
var _oPageConfig=_oCompose.getPageConfig();
if(_oPageConfig&&_oWin["attachflag"]!="replyAllAttach")
{
_oNewInputAddrs=_oWin.NewInputAddrs=[];
if((_oPageConfig.subtmpl=="reply"||_oPageConfig.subtmpl=="reply_all")&&((_oPageConfig.attachs&&_oPageConfig.attachs.length)||(_oPageConfig.bigattachs&&_oPageConfig.bigattachs.length)))
{
_oTop.E(["to","cc","bcc","sc"],function(_asId){
var _oTmpAddrCtrl=_oAddrInputMain.get(_asId,_oWin),_oAddrs=_oTmpAddrCtrl.get("json");
for(var i=0;i<_oAddrs.length;i++)
{
if(_sAddrInputDef.indexOf(_oAddrs[i].addr)==-1)
{
!_checkExist(_oAddrs[i].addr)&&_oNewInputAddrs.push(_oAddrs[i]);
}
}
});
_addData();
_oNewRcptDom&&_doHide();
}
}
else{
debug("no config");
}
}});
_sAddrInputDef+=_oAddrObj.defaultValue+";";
_oAddrInput.disabled(_oAddrObj.disabled).add(_oAddrObj.value);
_oAddrObj.value="";
_oInputObjs.push(_oAddrInput);
}
});
if(!!_aoConfig.bDomCheck)
{
var _nType=getTop().getUrlParams(_oWin.location)["s"]=="reply_all"?3:7;
var _oDomainChecker=new (_oCompose.getQMAddrDomainCheck())(_oWin);
(_oCompose.getComposeVar()._oDomainChecker=_oDomainChecker.createChecker(_oInputObjs,_nType,{oPermit:_oTop.S('receiverMsgContainer',_oWin)})).check();
}
_oSelfAddrCtrl._initAddrLinkEvent(_oWin);
},_emptyData:function(_aoWin){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_aoWin||_oCompose.getWin();
var _oTop=getTop();
var _oExistFileDom=_oTop.S("exist_file",_oWin),_oNew_Addrs=_oTop.S("new_addrs",_oWin),_oReplyExistAttach=_oTop.S("replyexistAttach",_oWin),_oExist_BigAttach=_oTop.S("exist_BigAttach",_oWin);
_oTop.show(_oReplyExistAttach,0);
_oExistFileDom&&_oTop.setHTML(_oExistFileDom,"");
_oTop.show(_oExistFileDom,0);
_oExist_BigAttach&&_oTop.setHTML(_oExist_BigAttach,"");
_oTop.show(_oExist_BigAttach,0);
_oNew_Addrs&&_oTop.setHTML(_oNew_Addrs,"");
_oCompose.getInputObj("newrcpt",null,false).value="";
},_initAddrLinkEvent:function(_aoWin){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_aoWin||_oCompose.getWin();
var _oAddrInputMain=_oCompose.getQMAddrInput();
getTop().E(["to","cc","bcc","sc"],function(_asAddrId){
var _sUpAddrId=_asAddrId.toUpperCase(),_oAddrCtrl=_oAddrInputMain.get(_asAddrId,_oWin),_oLink=getTop().S(["a"+_sUpAddrId],_oWin),_oBoxLink=getTop().S([_asAddrId+"_btn"],_oWin);
if(_oAddrCtrl&&_oLink)
{
_oLink.onclick=_asAddrId=="sc"?function(_aoEvent){
if(_oSelfAddrCtrl.showSeparatedCopy(_oWin))
{
getTop().ossLog("delay","all",getTop().T('stat=compose_send&t=$t$&sub=sc').replace(getTop().getUrlParams(_oWin.location)));
}
getTop().preventDefault(_aoEvent||_oWin.event);
if(_oCompose.getComposeVar()._oDomainChecker)
{
_oCompose.getComposeVar()._oDomainChecker.check();
}
}:function(_aoEvent){
_oSelfAddrCtrl.setFocus(!this.disabled&&_oSelfAddrCtrl.showInputCtrl(_sUpAddrId)?_asAddrId:(_oSelfAddrCtrl._getFocus()==_asAddrId?"to":_oSelfAddrCtrl._getFocus()));
_oAddrInputMain.get(_oSelfAddrCtrl._getFocus(),_oWin).focus("end");
getTop().preventDefault(_aoEvent||_oWin.event);
if(_oCompose.getComposeVar()._oDomainChecker)
{
_oCompose.getComposeVar()._oDomainChecker.check();
}
};
}
if(_oAddrCtrl&&_oBoxLink)
{
_oBoxLink.onclick=function(_aoEvent){
var _oTop=getTop();
if(!(_oTop.QMLinkman&&_oTop.QMAddress&&_oTop.QMAddress.isInit()))
{
return;
}
_oTop.QMLinkman.showDlg(_asAddrId,_oAddrInputMain.get(_asAddrId,_oWin),{bSupportGroup:_oSelfAddrCtrl._getSupportGroup(),oMainGroup:["hotgroup","mailgroup","ggroup","domaingroup","qqgroup","tool"]});
getTop().preventDefault(_aoEvent||_oWin.event);
};
}
});
var _oAddExistFileLink=getTop().S("domAddExistFile",_oWin);
if(_oAddExistFileLink)
{
_oAddExistFileLink.onclick=function(_aoEvent){
_oSelfAddrCtrl._addExistFile(_oWin);
return false;
};
}
},_addExistFile:function(_aoWin){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oAttach=_oCompose.moAttach;
var _oWin=_aoWin||_oCompose.getWin();
var _oTop=getTop();
_oWin["attachflag"]="replyattach";
_oAttach.addExistAttach({attach:_oCompose.getPageConfig().attachs},true,true);
_oAttach.addExistAttach_Big({bigattach:_oCompose.getPageConfig().bigattachs},'reply');
_oTop.ossLog("delay","all","stat=nothing&loc=compose,rlyatt,0,0");
_oTop.show("attachContainer",true,_oWin);
_oTop.show("replyexistAttach",true,_oWin);
_oTop.show("domnewRcpt",false,_oWin);
},_addrAssociate:function(_aoQMAddrInputs){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
var _oAjax=_oSelfAddrCtrl._oAddrAssociateAjax;
var _oCache=_oSelfAddrCtrl._oAddrAssociateCache;
var _oEmails=[];
for(var i=0,len=_aoQMAddrInputs.length;i<len;i++)
{
var _oAddrInput=_aoQMAddrInputs[i],_oAddrs=_oAddrInput&&!_oAddrInput.isDisabled()&&_oAddrInput.get("json")||[];
for(var j=0,len2=_oAddrs.length;j<len2;j++)
{
if(_oAddrs[j].valid)
{
_oEmails.push(_oAddrs[j].addr);
}
}
}
function _handleErrAddr(_aoErrItems)
{
for(var i=0,len=_oWin.InputObjs.length;i<len;i++)
{
var _oAddrInput=_oWin.InputObjs[i];
_oAddrInput&&!_oAddrInput.isDisabled()&&(_oAddrInput.setAddrError(_aoErrItems));
}
}
if(_oEmails.length)
{
var _sEmail;
if(_oCache[_sEmail=_oEmails.sort().join(';')])
{
_showHint(_oCache[_sEmail]);
_handleErrAddr(_oCache['invalidaddr']||[]);
}
else{
if(!_oAjax)
{
_oAjax=_oSelfAddrCtrl._oAddrAssociateAjax=new _oTop.QMAjax();
_oAjax.url="/cgi-bin/laddr_domain_check";
_oAjax.onComplete=function(_asResp){
var _oRsp=eval(_asResp.responseText),_oHit=_oRsp&&_oRsp.addrhistory||[],_oInValidAcc=_oRsp&&_oRsp.invalidlocalaccount||[],_oInValidAccCache=_oCache['invalidaddr']=_oCache['invalidaddr']||[];
_showHint(_oCache[_oAjax._sEmail]=_oHit);
for(var i=0,_nLen=_oInValidAcc.length,_oItem;i<_nLen;i++)
{
_oItem=_oInValidAcc[i];
_oItem&&_oInValidAccCache.push(_oItem);
}
_handleErrAddr(_oInValidAcc);
_oTop.ossLog("realtime","all","stat=custom&type=addressaptitude&info=open");
};
}
_oAjax._sEmail=_sEmail;
_oAjax.abort();
_oAjax.send(_oTop.T("acttype=4&sid=$sid$&uin=$uin$&addrfilt=$addr$").replace({sid:_oTop.getSid(),uin:_oTop.getUin(),addr:_sEmail}));
}
}
else{
_showHint([]);
}
function _showHint(_aoItems)
{
var _oShowSpan=_oSelfAddrCtrl._oAddrAssociateShowSpan||(_oSelfAddrCtrl._oAddrAssociateShowSpan=_oTop.S("addrAssociation",_oWin)),_oAddr,_oAddrItems=[],_oEvtTmpl=_oTop.T('addAddr("\\\"$name$\\\"&lt;$email$&gt;;")'),_oAddrTmpl=_oTop.TE(['$@$for($_this_$)$@$$@$if($_idx_$<3)$@$','<a style="pointer:cursor;" title="$email$" onclick=\''+_oEvtTmpl+'\'>$htmlname$</a>','$@$if($_idx_$<$_root_.length$-1&&$_idx_$<2)$@$, $@$endif$@$','$@$endif$@$$@$endfor$@$']);
if(!_oShowSpan)
{
return;
}
if(_aoItems.length)
{
for(var i=0,len=_aoItems.length;i<len;i++)
{
_oAddr=_oTop.QMAddress.getAddress(_aoItems[i]);
if(_oAddr)
{
_oAddrItems.push({htmlname:_oAddr.name,name:_oTop.htmlEncode(_oTop.encodeNick(_oTop.encodeNick(_oTop.htmlDecode(_oAddr.name)))),email:_oAddr.email});
}
}
_oShowSpan.innerHTML=_oAddrTmpl.replace(_oAddrItems);
}
_oTop.show(_oShowSpan.parentNode,!!_oAddrItems.length);
}
},setFocus:function(_asAddrId){
var _oSelfAddrCtrl=this;
if(_asAddrId)
{
_oSelfAddrCtrl._sFocusObjName=_asAddrId;
}
},_getFocus:function(){
var _oSelfAddrCtrl=this;
return _oSelfAddrCtrl._sFocusObjName||"to";
},addAddr:function(_asAddr,_asbNotFocus){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_oCompose.getWin();
var _oAddrInputMain=_oCompose.getQMAddrInput();
var _oCtrl=_oAddrInputMain.get(_oSelfAddrCtrl._getFocus(),_oWin);
if(_oCtrl)
{
_oCtrl.add(_asAddr);
if(!_asbNotFocus)
{
_oCtrl.focus("end");
}
}
},_showQuickAddr2:function(_aoParam,_aoQuickAddrDiv){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_oCompose.getWin();
var _oAddrInputMain=_oCompose.getQMAddrInput();
var _oTop=getTop();
var _oQuickAddrDiv=_aoQuickAddrDiv,_sType=_aoParam.sType,_oQMAddress=_oTop.QMAddress,_oConfig=_oCompose.getPageConfig(),_oMailGroup=["hotgroup","mailgroup","ggroup","domaingroup","qqgroup","tool"];
if(!_oQuickAddrDiv)
{
return false;
}
if(_sType=='succeed')
{
if(_oQuickAddrDiv.innerHTML.indexOf('lm_panel')<0)
{
var _sFromAddr=_oConfig.fromaddr||null,_sFromName=_oConfig.fromname||null;
_oSelfAddrCtrl.moLinkmanInstance=new _oTop.QMLinkman({nType:0,bSupportGroup:_oSelfAddrCtrl._getSupportGroup(),oMainGroup:_oMailGroup,oContainer:_oQuickAddrDiv,sFromaddr:_oConfig.subtmpl=="forward"?_sFromAddr:null,sFromname:_oConfig.subtmpl=="forward"?_sFromName:null,onselect:function(_aoAddress){
debug(_aoAddress[0],2);
var _bHasUrlCreator=_oTop.isShow(_oSelfAddrCtrl.S("addrUrlCreator"));
if(_bHasUrlCreator)
{
if(!(_aoAddress.length==1&&(_aoAddress[0].email==_oCompose.getComposeVar().sUrlCreator)))
{
_oTop.showError("\u53D1\u7ED9\u7F51\u9875\u751F\u6210\u52A9\u624B\u7684\u90AE\u4EF6\u4E0D\u80FD\u540C\u65F6\u53D1\u7ED9\u5176\u4ED6\u5E10\u53F7");
return;
}
else{
_oSelfAddrCtrl.rmHelper('urlcreator');
}
}
_oTop.QMLinkman.addAddrEx(_aoAddress,1,_oAddrInputMain.get(_oSelfAddrCtrl._getFocus(),_oWin));
}});
}
}
else{
_oQuickAddrDiv.innerHTML=_oTop.T(['<div style="padding:155px 0 0;text-align:center;">',_sType=='loading'?'<img src="$images_path$webp/ico_loading11e9c5d.gif" align="center"/> \u52A0\u8F7D\u4E2D...':'<a href="javascript:\'\'" onclick="return getTop().QMAddress.$fun$();">$content$</a>','</div>']).replace({images_path:_oTop.getPath("image"),fun:'initAddress',content:_aoParam.sMsg});
}
return _sType!='succeed';
},showQuickAddr:function(){
var _oSelfAddrCtrl=this;
return function(_aoParam){
return _oSelfAddrCtrl._showQuickAddr2(_aoParam,_oSelfAddrCtrl.S("quickaddr_div"));
};
},_getSupportGroup:function(){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_oCompose.getWin();
var _oParams=getTop().getUrlParams(_oWin.location);
return ';compose;compose_postcard;compose_postcard_dlg;compose_card;compose_video;'.indexOf(';'+_oParams['t']+';')>-1&&_oParams['s']!='reply_all';
},showSeparatedCopy:function(_aoWin,_abNotSetValue){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_aoWin||_oCompose.getWin();
var _oAddrInputMain=_oWin.QMAddrInput||_oCompose.getQMAddrInput();
var _oTop=getTop(),_oContainer=_oTop.S("trSC",_oWin),_bSeparatedCopy=!_oTop.isShow(_oContainer),_oScAddrCtrl=_oAddrInputMain.get("sc",_oWin)[_bSeparatedCopy&&!_abNotSetValue?"clear":"flush"](),_oScAddrJsonData=!_bSeparatedCopy?_oScAddrCtrl.get("json"):null,_oNotExistAddrData={};
if(_oScAddrJsonData)
{
for(var i=0,_len=_oScAddrJsonData.length;i<_len;i++)
{
var _oData=_oScAddrJsonData[i];
_oNotExistAddrData[_oData.addr]=_oData.format;
}
}
_oTop.E(["to","cc","bcc"],function(_asId){
var _sUpperId=_asId.toUpperCase();
var _oShowLink=_oTop.S("a"+_sUpperId,_oWin);
var _oAddrCtrl=_oAddrInputMain.get(_asId,_oWin).flush();
if(_oShowLink)
{
_oTop.setClass(_oShowLink,_bSeparatedCopy?_oShowLink.className+" nounderline cur_default":_oTop.trim(_oShowLink.className.replace(/nounderline cur_default/,"")));
_oShowLink.disabled=_bSeparatedCopy;
}
_oTop.show(_oTop.S("tr"+_sUpperId,_oWin),!_bSeparatedCopy&&(!_oShowLink||_oShowLink.getAttribute("show")=="true"));
if(_oAddrCtrl)
{
_oAddrCtrl.disabled(_bSeparatedCopy);
if(!_abNotSetValue&&_bSeparatedCopy)
{
_oScAddrCtrl.add(_oAddrCtrl.get().join("; "));
}
if(_oScAddrJsonData)
{
for(var _oAddrs=[],_oData=null,i=0,_len=_oScAddrJsonData.length;i<_len;i++)
{
if(_oAddrCtrl.hasAddr((_oData=_oScAddrJsonData[i]).addr))
{
_oAddrs.push(_oData.format);
delete _oNotExistAddrData[_oData.addr];
}
}
_oAddrCtrl.clear().add(_oAddrs.join("; "));
}
}
});
var _oASCLink=_oTop.S("aSC",_oWin);
if(_oASCLink)
{
_oASCLink.innerHTML=_bSeparatedCopy?"\u53D6\u6D88\u5206\u522B\u53D1\u9001":"\u5206\u522B\u53D1\u9001";
_oTop.show(_oASCLink.previousSibling,_bSeparatedCopy);
_oTop.show(_oASCLink.previousSibling.previousSibling,!_bSeparatedCopy);
}
_oTop.S("separatedcopy",_oWin).value=_bSeparatedCopy.toString();
_oScAddrCtrl.disabled(!_bSeparatedCopy);
_oTop.show(_oContainer,_bSeparatedCopy);
if(_bSeparatedCopy)
{
_oScAddrCtrl.focus("end");
}
else{
var _oAddrs=[];
for(var _addr in _oNotExistAddrData)
{
_oAddrs.push(_addr);
}
_oAddrInputMain.get("to",_oWin).add(_oAddrs.join("; "));
_oAddrInputMain.get("to",_oWin).focus("end");
}
return _bSeparatedCopy;
},showInputCtrl:function(_asId,_abFocus){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_oCompose.getWin();
var _oAddrInputMain=_oCompose.getQMAddrInput();
_asId=_asId.toUpperCase();
var _oContainer=_oSelfAddrCtrl.S("tr"+_asId);
var _oLink=_oSelfAddrCtrl.S("a"+_asId);
var _bShow=getTop().isShow(_oContainer);
var _addrCtrl=_oAddrInputMain.get(_asId.toLowerCase(),_oWin),_sLinkTxt;
getTop().show(_oContainer,!_bShow);
if(_asId=="CC")
{
_sLinkTxt=_bShow?"\u6DFB\u52A0\u6284\u9001":"\u5220\u9664\u6284\u9001";
}
else if(_asId=="BCC")
{
_sLinkTxt=_bShow?"\u6DFB\u52A0\u5BC6\u9001":"\u5220\u9664\u5BC6\u9001";
}
if(_sLinkTxt)
{
_oLink.innerHTML=_sLinkTxt;
_oLink.setAttribute("show",_bShow?"false":"true");
}
_addrCtrl.disabled(_bShow)[_abFocus==false||_bShow?"length":"focus"]("end");
if(_asId=="CC"||_asId=="BCC")
{
getTop().setUserCookieFlag('CCSHOW',_asId=="CC"?0:1,_bShow?0:1);
}
return !_bShow;
},rmHelper:function(_sType){
var _oSelfAddrCtrl=this;
var _oCompose=_oSelfAddrCtrl._moCompose;
var _oWin=_oCompose.getWin();
var _oAddrInputMain=_oCompose.getQMAddrInput();
var _oUcCtrl=_oAddrInputMain.get("to",_oWin)||_oAddrInputMain.get("bcc",_oWin);
if(_sType=="urlcreator")
{
_oUcCtrl.del(_oCompose.getComposeVar().sUrlCreator);
}
}};
function QMAttachDrag(_aoCfg)
{
this._moWin=_aoCfg.oWin;
this._moCfg=_aoCfg;
this._init();
}
;QMAttachDrag.prototype={_init:function(){
var _oDragSelf=this;
if(!_oDragSelf._moCfg.bNoFileUplad)
{
_oDragSelf._initFileDragUpload();
}
if(_oDragSelf._moCfg.oImgUploadArea)
{
_oDragSelf._initImgUploadArea();
}
_oDragSelf.dragOverEvent();
},_initFileDragUpload:function(){
var _oTop=getTop();
var _oDragSelf=this;
var _oAttach=_oDragSelf._moCfg.oAttach;
var _oUploadMgr=_oAttach.oFileUploadMgr;
_oDragSelf._initDragAndDropContainer();
_oDragSelf._moFileDragUpload=_oTop.QMFileUpload.create("drag",{oContainer:_oDragSelf._moDragAndDropContainer.lastChild,sDragLeaveMsg:_oTop.detectActiveX(2,1)&&'\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952Ectrl+c\u3001ctrl+v\u6765\u6DFB\u52A0\u9644\u4EF6\u3002',onproxyclose:_oDragSelf._onProxyClose(),onerror:function(){
_oUploadMgr.oCfg.onerror.apply(_oUploadMgr,arguments);
},onselect:function(){
_oDragSelf._hideDragAndDropArea();
_oUploadMgr.oCfg.onselect.apply(_oUploadMgr,arguments);
_oTop.LogKV({sValue:'compose|editor|drag|file'});
},onprocess:function(){
_oUploadMgr.oCfg.onprocess.apply(_oUploadMgr,arguments);
},oncomplete:function(_aoFile){
_oUploadMgr.oCfg.oncomplete.apply(_oUploadMgr,arguments);
}});
},_initImgUploadArea:function(){
var _oTop=getTop();
var _oDragSelf=this;
var _oImgUploadMgr=new _qmFileMgr(_oDragSelf._moWin);
var _nImgUploadOffsetY=_oDragSelf._moCfg.nImgUploadOffsetY||0;
var _sCss='pointer-events: none;height: 40px;margin-top: '+(_nImgUploadOffsetY/2-20)+'px;position: absolute;top: 50%;line-height: 40px;width: 100%;';
var _bCloseDlg=false;
function _uploadingDlg(_asOpt,_anPercent)
{
var _oDialog=_oTop.QMDialog("uploadimg_drag");
if(!_oDialog)
{
if(_asOpt=='close')
{
return;
}
else if(_asOpt!='open')
{
_oDialog=_uploadingDlg('open');
}
}
if(_asOpt=="close")
{
_oTop.QMDialog("uploadimg_drag","close");
}
else if(_asOpt=="process")
{
_oDialog.S("uploadProcess").innerHTML=parseInt(_anPercent||0)+"%";
}
else if(_asOpt=="error")
{
_oTop.show(_oDialog.S("uploading"),0);
_oTop.show(_oDialog.S("uploadFail"),1);
}
else{
_bCloseDlg=false;
console.log(_oImgUploadMgr.getUploadList().length,_oImgUploadMgr.getUploadList().length-_oImgUploadMgr.getUploadList('ready').length);
return new _oTop.QMDialog({sId:"uploadimg_drag",sTitle:'\u4E0A\u4F20\u56FE\u7247',sBodyHtml:_oTop.T(['<div style="padding:40px 0;font:normal 12px;text-align:center">','<div id="uploading">','<img src="$imgPath$ico_loading2.gif" width="32" height="32" align=absmiddle style="margin:0 4px 0 0" />$langUploading$','<span id="uploadProcess"></span>','</div>','<div id="uploadFail" style="height:32px;line-height:32px;display:none;" >','$langUploadFail$','</div>','</div>']).replace({imgPath:_oTop.getPath("image"),langUploading:_oTop.TE(['\u6B63\u5728\u4E0A\u4F20','$@$if($cnt$ > 1)$@$','$idx$/$cnt$','$@$endif$@$','...']).replace({cnt:_oImgUploadMgr.getUploadList().length,idx:_oImgUploadMgr.getUploadList().length-_oImgUploadMgr.getUploadList('ready').length}),langUploadFail:'\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\u4E86\uFF01'}),nWidth:400,bAnimation:false,onclose:function(){
_bCloseDlg=true;
_oTop.E(_oImgUploadMgr._moFileList,function(_aoFile){
_aoFile.cancel();
_aoFile.destroy();
});
_oImgUploadMgr._moFileList=[];
_oImgUploadMgr._moFileMap={};
}});
}
}
function _nextUpload(_aoFile)
{
if(_oImgUploadMgr._next(_aoFile))
{
_uploadingDlg('open');
}
}
_oDragSelf._moImgDragUpload=_oTop.QMFileUpload.create('drag',{bNoStyle:true,oContainer:_oDragSelf._moCfg.oImgUploadArea,sDragLeaveMsg:'<div style="'+_sCss+'">\u5C06\u56FE\u7247\u62D6\u62FD\u81F3\u6B64\u533A\u57DF\uFF0C\u53EF\u76F4\u63A5\u6DFB\u52A0\u81F3\u6B63\u6587\u3002</div>',sDragEnterMsg:'<div style="'+_sCss+'">\u91CA\u653E\u9F20\u6807</div>',oComlist:(_oTop.goExpers&&_oTop.goExpers.h5cJsUploadNormal)?["H5CDragFMail","FlashH5DragMail","Html5DragMail"]:["FlashH5DragMail","Html5DragMail"],onproxyclose:_oDragSelf._onProxyClose(),onselect:function(_aoFiles){
_oDragSelf._hideDragAndDropArea();
_oDragSelf.hideDragAndDropContainer();
if(!_aoFiles.length)
{
return;
}
var _oErrorFileType=[];
var _oSizeFile=[];
_oTop.E(_aoFiles,function(_aoFile){
if('bmp|jpg|jpeg|gif|png'.indexOf(_aoFile.get('sName').toLowerCase().split(".").pop())==-1)
{
_oErrorFileType.push(_aoFile);
}
if(_aoFile.get("nSize")>15728640)
{
_oSizeFile.push(_aoFile);
}
});
if(_oErrorFileType.length)
{
_oTop.showError('\u8BF7\u5C06\u56FE\u7247\u63A8\u62FD\u5230\u6B64\u533A\u57DF');
return;
}
if(_oSizeFile.length)
{
_oTop.showError('\u53EA\u5141\u8BB8\u4E0A\u4F20\u5927\u5C0F\u4E3A15M\u4EE5\u5185\u7684\u56FE\u7247');
return;
}
_oTop.LogKV({sValue:'compose|editor|drag|img'});
var _bUpload=false;
_oTop.E(_aoFiles,function(_aoFile){
if(_oImgUploadMgr.addFile(_aoFile))
{
_bUpload=true;
}
});
_bUpload&&_uploadingDlg('open');
},onprocess:function(_aoFile){
if(!_bCloseDlg)
{
_uploadingDlg('process',_aoFile.get('nPercent'));
}
},onerror:function(_aoFile){
if(!_bCloseDlg)
{
_uploadingDlg('error');
}
},oncomplete:function(_aoFile){
if(_aoFile.get("sFileUrl"))
{
_oDragSelf._moCfg.attachInsertImage(_aoFile.get("sFileUrl"),function(){
if(!_oImgUploadMgr.getUploadListExclude('complete').length)
{
_uploadingDlg('close');
}
});
_nextUpload(_aoFile);
}
else{
_uploadingDlg('error');
}
}});
if(_oDragSelf._moImgDragUpload)
{
_oDragSelf._moImgDragMsgNode=_oTop.finds('[ui-type=html5drag_msg]',_oDragSelf._moCfg.oImgUploadArea)[0];
_oDragSelf._moImgDragMsgNode.style.cssText="position:absolute; top: 0; left: 0;width:100%; height:100%; display:none; border-width: 1px 1px 0px; border-style: solid; border-color: #C3C3C3; text-align: center; background:#fff; z-index:2; font-size: 14px;";
}
},_onProxyClose:function(){
var _oDragSelf=this;
return function(){
_oDragSelf._hideDragAndDropArea();
_oDragSelf.hideDragAndDropContainer();
_oDragSelf._moCfg.oEditor.focus();
};
},dragOverEvent:function(_abIsRemove){
var _oTop=getTop();
var _oDragSelf=this;
var _oWin=_oDragSelf._moWin;
if(!_oTop.gbIsIE&&(_oDragSelf._moFileDragUpload||_oDragSelf._moImgDragUpload))
{
_oTop.addEvents([_oWin,_oDragSelf._moCfg.oEditor.getEditWin()],{dragleave:_oDragSelf._onDragLeave(),dragenter:_oDragSelf._onDragEnter(),drop:_oDragSelf._onDrop()},_abIsRemove);
}
},hideDragAndDropContainer:function(){
var _oDragSelf=this,_oContainer=_oDragSelf._moDragAndDropContainer;
_oDragSelf._hideDragAndDropArea();
if(_oContainer)
{
_oContainer.style.left=_oContainer.style.top=-400+'px';
}
},showDragAndDropContainer:function(){
var _oDragSelf=this;
var _oTop=getTop();
var _oContainer=_oDragSelf._moDragAndDropContainer;
if(_oContainer)
{
var _oPosInfo=_oTop.calcPos(_oTop.S("AttachFrame",_oDragSelf._moWin));
_oContainer.style.left=_oPosInfo[3]+'px';
_oContainer.style.top=(_oPosInfo[2]+2)+'px';
}
},_initDragAndDropContainer:function(){
var _oTop=getTop();
var _oDragSelf=this;
var _oDoc=_oDragSelf._moWin.document;
var _oContainer=_oDragSelf._moDragAndDropContainer;
if(!_oContainer)
{
var _sBtnId="dndContainer"+_oTop.unikey();
;_oContainer=_oDragSelf._moDragAndDropContainer=_oDoc.createElement("div");
_oContainer.id="dndContainer";
_oContainer.className="QMEditorMenuBorder dndContainer";
_oContainer.innerHTML=_oTop.T(['<div style="padding:5px 5px 0;font-size:12px;">','<a class="right" id="$sCloseBtnId$">','\u5173\u95ED','</a>','</div>','<div style="height:150px;"></div>']).replace({sCloseBtnId:_sBtnId});
_oDoc.body.insertBefore(_oContainer,_oDoc.body.firstChild);
_oTop.S(_sBtnId,_oDoc).onclick=function(){
_oDragSelf.hideDragAndDropContainer();
};
}
_oDragSelf.hideDragAndDropContainer();
},_showDragAndDropArea:function(){
var _oDragSelf=this;
if(_oDragSelf._moImgDragMsgNode)
{
getTop().show(_oDragSelf._moImgDragMsgNode,true);
}
},_hideDragAndDropArea:function(){
var _oDragSelf=this;
if(_oDragSelf._moImgDragMsgNode)
{
getTop().show(_oDragSelf._moImgDragMsgNode,false);
}
},_onDrop:function(){
var _oDragSelf=this;
if(!_oDragSelf._mfOnDropFunc)
{
_oDragSelf._mfOnDropFunc=function(_aoEvent){
_oDragSelf.hideDragAndDropContainer();
_oDragSelf._hideDragAndDropArea();
};
}
return _oDragSelf._mfOnDropFunc;
},_onDragEnter:function(_aoEvent){
var _oTop=getTop();
var _oDragSelf=this;
var _oWin=_oDragSelf._moWin;
if(!_oDragSelf._mfOnDragEnterFunc)
{
_oDragSelf._mfOnDragEnterFunc=function(_aoEvent){
_oDragSelf._mbIsDragOver=1;
if(_oTop.QMFileUpload.oUtil.isFileDragOver(_aoEvent))
{
_oDragSelf._showDragAndDropArea();
_oDragSelf.showDragAndDropContainer();
_oWin.setTimeout(function(){
_oWin.clearTimeout(+_oDragSelf._mnDragTimer);
});
var _oDataTransfer=_aoEvent.dataTransfer;
if(_oDataTransfer)
{
_oDataTransfer.effectAllowed=_oDataTransfer.dropEffect="none";
}
_oTop.preventDefault(_aoEvent);
}
};
}
return _oDragSelf._mfOnDragEnterFunc;
},_onDragLeave:function(){
var _oDragSelf=this;
var _oWin=_oDragSelf._moWin;
if(!_oDragSelf._mfOnDragLeaveFunc)
{
_oDragSelf._mfOnDragLeaveFunc=function(_aoEvent){
_oDragSelf._mbIsDragOver=0;
_oWin.clearTimeout(+_oDragSelf._mnDragTimer);
_oDragSelf._mnDragTimer=_oWin.setTimeout(function(){
if(!_oDragSelf._mbIsDragOver)
{
_oDragSelf.hideDragAndDropContainer();
_oDragSelf._hideDragAndDropArea();
}
},200);
};
}
return _oDragSelf._mfOnDragLeaveFunc;
}};
function _insertWbr(_asStr,_anStep)
{
var _nStep=_anStep||12,_sStr=_asStr||"",_oList=[],_nLen=_sStr.length/_nStep;
for(var i=0;i<_nLen;i++)
{
_oList[i]=getTop().htmlEncode(_sStr.substr(i*_nStep,_nStep));
}
return _oList.join("<wbr>");
}
var QMAttachMain=function(_aoCompose,_aoWin){
this._moWin=_aoWin;
this._moCompose=_aoCompose;
if(_aoCompose!="__inherit__")
{
this._init();
}
};
QMAttachMain.prototype={mbHideBigAttach:false,mbHideAttach:false,mnAttBigSizeIn:0,mnAttBigSizeEx:0,_mnAttToFtnSize:20,_msMode:"normal",_msWarnningTypes:"exe|msi|scr|cmd|bat|com",_mnSizeLimit:50,_mnAttachId:0,_moCurUploader:null,_moCurUploadAttachInfo:null,_moCurUploadTimeStamp:null,_mbIsDisableControl:false,onprogress:null,onfinish:null,_oWinProxyFuncArr:{'delAttach':false,'addOtherUploaderFileCell':false,'delExistAttach':true,'delBigAttach':true},S:function(_asId){
return getTop().S(_asId,this._moWin);
},_init:function(){
this._initVar();
this._initWinFunc();
this._initFileUploadMgr();
},_initWinFunc:function(){
var _oSelfAttach=this;
var _oWin=_oSelfAttach._moWin;
_oTop.E(_oSelfAttach._oWinProxyFuncArr,function(_abReturn,_asFuncName){
_oWin[_asFuncName]=function(){
var _vRs=_oSelfAttach[_asFuncName].apply(_oSelfAttach,arguments);
return _abReturn?false:_vRs;
};
});
},_initVar:function(){
this._moTmplSet={};
this._moExistList=[];
this._moExistInfos={};
this._moDragUploads=[];
this._moWin.QMAttach=this;
},_initFileUploadMgr:function(){
var _oSelfAttach=this;
_oSelfAttach.oFileUploadMgr=new _qmFileMgr(_oSelfAttach._moWin,{onselect:function(_aoFiles){
var _oSelf=this,_oTop=getTop();
_oSelfAttach.hideDragAndDropContainer();
!_aoFiles.length&&(_aoFiles=[_aoFiles]);
_oTop.osslogAjaxCompose(101);
_oTop.E(_aoFiles,function(_aoFile){
!_aoFile.get('sUploadMode')&&_aoFile.set("sUploadMode",_oSelf._getUploadMode(_aoFile));
});
_oSelfAttach.onmgrselect(_aoFiles,function(_aoFiles){
_oTop.E(_aoFiles,function(_aoFile){
_aoFile.set("sFrom","attachToFtn");
_oSelf.addFile(_aoFile);
});
});
},onprocess:function(_aoFile){
_oSelfAttach.onmgrprocess&&_oSelfAttach.onmgrprocess.call(_oSelfAttach,_aoFile);
},onerror:function(_aoFile){
getTop().osslogAjaxCompose(102,undefined,undefined,undefined,_aoFile.get("sName"));
getTop().osslogAjaxCompose(104);
debug(["QMFileUpload ONERROR",_aoFile.get("sType"),_aoFile.get("nPercent"),_aoFile.get("sError")].join(" : "));
if(/FlashPopup/.test(_aoFile.get("sType")))
{
_oSelfAttach._moPoupuUpload.initConfg({sFlashMode:"RawPost"});
}
_oSelfAttach.onmgrerror&&_oSelfAttach.onmgrerror.call(_oSelfAttach,_aoFile);
this._next(_aoFile);
},oncomplete:function(_aoFile){
getTop().osslogAjaxCompose(102,undefined,undefined,undefined,_aoFile.get("sName"));
getTop().osslogAjaxCompose(102);
getTop().osslogAjaxCompose(103);
_oSelfAttach.onmgrcomplete&&_oSelfAttach.onmgrcomplete.call(_oSelfAttach,_aoFile);
this._next(_aoFile);
}});
_oSelfAttach.oFileUploadMgr.initFileList=function(_aoFileData){
_oSelfAttach._addExistFileCell(this.setUploadData(_aoFileData));
};
},initHideAttach:function(_aoConfig){
if(_aoConfig)
{
this.mbHideBigAttach=_aoConfig.hideBigAttach;
this.mbHideAttach=_aoConfig.hideAttach;
}
},getFileInfo:function(_asId){
var _oTop=getTop();
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
var _fGetDom=function(_asId){
var _oDomList=_oTop.finds("div.attsep span[uploadid]",_oSelfAttach.S("attachContainer"));
for(var i=0,l=_oDomList.length;i<l;i++)
{
if(_oTop.attr(_oDomList[i],"uploadid")==_asId)
{
return _oDomList[i];
}
}
return;
},_fGetCtxDom=function(_aoDom){
return _oTop.parents("div.attsep",_aoDom)[0];
},_fIsTextDoc=function(_asSuffix){
return "txt,html".indexOf(_oTop.getFileTypeByExt(_asSuffix||""))>-1;
},_oInfo,_oDomCurr=_fGetDom(_asId);
if(_oDomCurr&&_oTop.attr(_oDomCurr,"attachtype")=="big")
{
var _sFid=_oTop.attr(_oDomCurr,"fid"),_sKey=_oTop.attr(_oDomCurr,"key"),_sCode=_oTop.attr(_oDomCurr,"code");
_oInfo={};
_oInfo.yozo=_oTop.gbUseYozo?1:0;
_oInfo.sAttachId_=_asId;
_oInfo.sName=_oTop.attr(_oDomCurr,'filename');
_oInfo.sFrom="bigattach";
_oInfo.sSuffix=_oTop.getFileExt(_oInfo.sName);
_oInfo.sType=_oTop.getViewTypeByExt(_oInfo.sSuffix);
_oInfo.sFileType=_oTop.getFileTypeByExt(_oInfo.sSuffix||"");
_oInfo.sUrl=({"doc":_oTop.TE(["/cgi-bin/ftnfilefunc?sid=$sid$&code=$code$&k=$k$&oper=$oper$","&appid=$appid$&t=$t$&nocheckframe=true&s=yozo&fromattach=1","&ftnpreviewtype=$type$&filename=$filename$&nofixedname=$@$eval getTop().htmlEncode($filename$)$@$&ef=qfunc","&filetype=$filetype$&viewtype=$viewtype$"]),"compress":_oTop.TE(["/cgi-bin/ftnviewcompress?sid=$sid$&cpsfile=$@$eval getTop().encodeURI($filename$)$@$","&fid=$fid$&filetype=$filetype$&action=list&t=cps.json&fromattach=1"])}[_oInfo.sType]||_oTop.T("/cgi-bin/ftnDownload302?sid=$sid$&fid=$fid$&code=$code$&k=$k$")).replace({oper:"doc,xls,ppt,docx,xlsx,pptx,pdf,eml,pps,rtf,docm,dot,dotx,dotm,".indexOf(_oInfo.sSuffix+",")!=-1?"htmlopen":"view",sid:_oTop.getSid(),code:_sCode,fid:_sFid,k:_sKey,t:_oInfo.sSuffix=="eml"?"preview_eml":"attachments_content",type:_oInfo.sType,filetype:_oInfo.sFileType,filename:_oTop.encodeURI(_oInfo.sName),appid:_oTop.attr(_oDomCurr.parentNode,"appid")||2,viewtype:_oInfo.sSuffix=="eml"?"eml":""});
}
else if(_oSelfAttach.oFileUploadMgr.getFileById(_asId))
{
_oTop.E(_oSelfAttach.oFileUploadMgr.getUploadList("complete"),function(_aoFile){
if(_aoFile.get("sId")==_asId)
{
var _sUploadType=_aoFile.get("sUploadMode")=="collection"?"collection":"attach",_sUpFileId,_sMailAttach;
if(_sUploadType=="collection")
{
_sMailAttach=[_aoFile.get("mailid"),_aoFile.get("attachid"),_aoFile.get("attachname")].join("|");
}
else{
_sUpFileId=_aoFile.get("sFileId");
}
var _sName=_aoFile.get("sName"),_sSuffix=_oTop.getFileExt(_sName),_sType=_oTop.getViewTypeByExt(_sSuffix),_sTmpl;
switch(_sType)
{case "compress":
_sTmpl="cps.json";
break;
case "doc":
if(_sSuffix=="eml")
{
_sTmpl="preview_eml";
}
else{
_sTmpl="attachments_content";
}
break;
default:
_sTmpl="";
break;
}_oInfo={};
_oInfo.yozo=_oTop.gbUseYozo?1:0;
_oInfo.sAttachId_=_asId;
_oInfo.sName=_sName;
_oInfo.sFrom="attach";
_oInfo.sSuffix=_sSuffix;
_oInfo.sType=_sType;
_oInfo.sFileType=_oTop.getFileTypeByExt(_oInfo.sSuffix||"");
_oInfo.sUrl=_aoFile.get("sFileUrl")||_oTop.T(['/cgi-bin/$appname$?sid=$sid$&upfilelistitem=$upfileid$&mailattach=$mailattach$','&filename=$filename$&t=$t$&readprev=$compose$&filepath=$filepath$','&action=$action$$viewdocparam$&filetype=$filetype$&viewtype=$viewtype$&nf=$nf$']).replace({sid:_oTop.getSid(),appname:{"txt":"viewfile","html":"viewfile","eml":"viewdocument"}[_oInfo.sFileType]||{"compress":"viewcompress","video":"viewfile","music":"viewfile","img":"viewfile"}[_oInfo.sType]||"viewdocument",action:_oInfo.sType=="compress"?"list":(_fIsTextDoc(_oInfo.sSuffix)?"view":""),compose:_aoFile.get("sComposePage")=="group"?_aoFile.get("sComposePage"):"normal",t:_sTmpl,filetype:_oInfo.sFileType,filename:_oTop.encodeURI(_oInfo.sName),upfileid:_sUpFileId,filepath:(_aoFile.get("sFilePath"))||"",mailattach:_sMailAttach,viewdocparam:_oInfo.sType=="doc"?"&s=yozo&fromattach=1&from=attachfolder":"",viewtype:_oInfo.sSuffix=="eml"?"eml":"",nf:_aoFile.get('sNf')||''});
return false;
}
});
}
else{
var _oDomList=_oTop.finds("div.attsep span[uploadid]",_oSelfAttach.S("attachContainer"));
_oTop.E(_oDomList,function(_aoDom){
if(_oTop.attr(_aoDom,"uploadid")==_asId)
{
var _sName=_oTop.trim(_oTop.htmlDecode(_oTop.finds("span[ui-type='filename']",_fGetCtxDom(_oDomCurr))[0].innerHTML.replace(/\<.*?\>/gi,""))),_sSuffix=_oTop.getFileExt(_sName),_sType=_oTop.getViewTypeByExt(_sSuffix),_sTmpl;
switch(_sType)
{case "compress":
_sTmpl="cps.json";
break;
case "doc":
if(_sSuffix=="eml")
{
_sTmpl="preview_eml";
}
else{
_sTmpl="attachments_content";
}
break;
default:
_sTmpl="";
break;
}_oInfo={};
_oInfo.yozo=_oTop.gbUseYozo?1:0;
_oInfo.sAttachId_=_asId;
_oInfo.sName=_sName;
_oInfo.sFrom="attach";
_oInfo.sSuffix=_sSuffix;
_oInfo.sType=_sType;
_oInfo.sFileType=_oTop.getFileTypeByExt(_oInfo.sSuffix||"");
_oInfo.sUrl=_oTop.attr(_oDomCurr,'fileurl')||_oTop.T(['/cgi-bin/$appname$?sid=$sid$&upfilelistitem=$upfileid$&mailattach=$mailattach$','&filename=$filename$&t=$t$&readprev=$compose$&filepath=$filepath$','&action=$action$$viewdocparam$&filetype=$filetype$&viewtype=$viewtype$']).replace({sid:_oTop.getSid(),appname:{"txt":"viewfile","html":"viewfile","eml":"viewdocument"}[_oInfo.sFileType]||{"compress":"viewcompress","video":"viewfile","music":"viewfile","img":"viewfile"}[_oInfo.sType]||"viewdocument",action:_oInfo.sType=="compress"?"list":(_fIsTextDoc(_oInfo.sSuffix)?"view":""),compose:_oCompose.getPageId()=="group"?_oCompose.getPageId():"normal",t:_sTmpl,filetype:_oInfo.sFileType,filename:_oTop.encodeURI(_oInfo.sName),filepath:"",mailattach:_oTop.encodeURI(_oTop.finds("input[name='replymailattach']",_fGetCtxDom(_aoDom)).length&&_oTop.finds("input[name='replymailattach']",_fGetCtxDom(_aoDom))[0].value||_oTop.finds("input[name='mailattach']",_fGetCtxDom(_aoDom)).length&&_oTop.finds("input[name='mailattach']",_fGetCtxDom(_aoDom))[0].value||''),viewdocparam:_oInfo.sType=="doc"?"&s=yozo&fromattach=1&from=attachfolder":"",viewtype:_sSuffix=="eml"?"eml":""});
return false;
}
});
}
return _oInfo;
},preview:function(_avParam){
var _oTop=getTop();
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
_oTop.ossLog("delay","all","stat=nothing&loc=compose,attachpreview,0,0&locval=compose,attachpreview,0,0");
_oTop.loadJsFileToTop(["$js_path$webp/qmplayer/player32be95.js","$js_path$webp/com/kits/qmpreviewer/js/qmpreviewer32c492.js"]);
_oTop.waitFor(function(){
return _oTop.QMPlayer&&_oTop.QMPreviewer;
},function(_abIsOk){
if(_abIsOk)
{
var _sId=typeof (_avParam)=="string"?_avParam:_oTop.attr(_avParam,"uploadid"),_fCallback=function(_asType){
return function(_aoCurrInfo){
var _oDomList=_oTop.finds("div.attsep span[uploadid]",_oSelfAttach.S("attachContainer")),_nIdx=-1,_sAttId=_aoCurrInfo.sAttachId_,_oInfo;
for(var i=0;i<_oDomList.length;i++)
{
if(_oTop.attr(_oDomList[i],"uploadid")==_sAttId)
{
_nIdx=i;
break;
}
}
if(_asType=="prev"&&_nIdx>0)
{
_oInfo=_oSelfAttach.getFileInfo(_oTop.attr(_oDomList[_nIdx-1],"uploadid"));
_oTop.ossLog("delay","all","stat=nothing&loc=compose,attachpreview,1,0&locval=compose,attachpreview,1,0");
}
else if(_asType=="next"&&_nIdx<_oDomList.length-1)
{
_oInfo=_oSelfAttach.getFileInfo(_oTop.attr(_oDomList[_nIdx+1],"uploadid"));
_oTop.ossLog("delay","all","stat=nothing&loc=compose,attachpreview,1,1&locval=compose,attachpreview,1,1");
}
return _oInfo;
};
};
_oTop.QMPreviewer.show(_oSelfAttach.getFileInfo(_sId),{fPrev:_fCallback("prev"),fNext:_fCallback("next")},{bIsShowBreakLine:false,bShowDownBtn:false});
}
});
},initAttBigSize:function(_aoConfig){
if(_aoConfig)
{
this.mnAttBigSizeIn=_aoConfig.nAttBigSizeIn||0;
this.mnAttBigSizeEx=_aoConfig.nAttBigSizeEx||0;
}
},_getExistAttachChildNode:function(){
var _oSelf=this;
var _oTop=getTop();
var _oExistsContainer=_oSelf.S("exist_file");
var _oExistsResumeContainer=_oSelf.S('exist_resume_attach');
var _oExistAtts=[];
if(_oExistsContainer)
{
_oTop.E(_oExistsContainer.childNodes,function(_aoNode){
_oExistAtts.push(_aoNode);
});
}
if(_oExistsResumeContainer)
{
_oTop.E(_oExistsResumeContainer.childNodes,function(_aoNode){
_oExistAtts.push(_aoNode);
});
}
return _oExistAtts;
},checkAttachWarnningType:function(){
var _oSelf=this,_oTypeErrors=[];
getTop().E(_oSelf._getExistAttachChildNode(),function(_aoObj){
if(_aoObj.tagName=="DIV")
{
var _oObj=_oSelf.S("eas_"+_aoObj.id.split("_").pop()),_sFileName=_oObj&&(_oObj.innerText||_oObj.textContent)||"";
if(_oSelf._isWarnningType(_sFileName))
{
_oTypeErrors.push(_oSelf._subFileName(_sFileName));
}
}
});
getTop().E(_oSelf._moExistList,function(_asId){
var _oObj=_oSelf.S("Uploader"+_asId),_sFileName=_oObj&&_oObj.value||"";
if(_oSelf._isWarnningType(_sFileName))
{
_oTypeErrors.push(_oSelf._subFileName(_sFileName));
}
});
return _oTypeErrors;
},retryUpload:function(_asName){
var _oFile=this.oFileUploadMgr.getFileById(_asName);
if(_oFile)
{
if(/cgi,-2($|,)/.test(_oFile.get("sError")))
{
getTop().goUrlTopWin("/cgi-bin/logout?sid="+getTop().getSid());
}
else{
if(_oFile.get("bIsUptoFtnForNormal")===true)
{
_oFile.upload=_oTop.QMFileUpload.qmFile.prototype.upload;
_oFile.set("bIsUptoFtnForNormal",false);
_oFile.oCfg&&_oFile.oCfg.sUrl&&(delete _oFile.oCfg.sUrl)&&(delete _oFile.oCfg.utype);
}
this.oFileUploadMgr.retry(_oFile);
this.onmgrprocess&&this.onmgrprocess.call(this,_oFile);
}
}
},delAttach:function(_asName){
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
var _oFileObj=_oSelfAttach.S(_asName);
_sId=_asName.replace('Uploader',''),_oCurFile=_oSelfAttach.oFileUploadMgr.getFileById(_sId);
if(_oFileObj&&_oFileObj.disabled)
{
_oSelfAttach._removeForwardAttachList(_oFileObj.value);
}
_oSelfAttach.oFileUploadMgr.rmFile(_oCurFile);
_oSelfAttach._uploadFinish();
getTop().removeSelf(_oSelfAttach.S("D"+_asName));
_oSelfAttach._ossLogDelAttachOpt(_oFileObj);
_oCompose.setEditedAttach(true);
return _oSelfAttach._checkBtn();
},delExistAttach:function(_asId){
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
var _oDom=_oSelfAttach.S("ea_"+_asId);
_oSelfAttach._ossLogDelAttachOpt(_oDom);
getTop().removeSelf(_oDom);
_oCompose.setEditedAttach(true);
return _oSelfAttach._checkBtn();
},delBigAttach:function(_aoDom){
var _oSelfAttach=this;
var _oTop=getTop();
var _oCompose=_oSelfAttach._moCompose;
var _oDiv=_oTop.parents("div.attsep",_aoDom)[0];
if(_oDiv)
{
if(_oTop.attr(_oDiv,'mode')=='resume_works')
{
if(_oTop.finds('.attsep',_oDiv.parentNode).length<=1)
{
_oTop.show(_oSelfAttach.S('ResumeWorksList'),0);
}
}
_oSelfAttach.checkReplyAttach();
_oSelfAttach._ossLogDelAttachOpt(_oDiv);
_oTop.removeSelf(_oDiv);
_oCompose.setEditedAttach(true);
}
},getAttachLimitByAddr:function(){
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
if(_oCompose.getComposeVar()._oDomainChecker&&_oCompose.getComposeVar()._oDomainChecker.getAttachLimit())
{
return _oCompose.getComposeVar()._oDomainChecker.getAttachLimit().nLim||this._mnSizeLimit*1024*1024;
}
else{
return this._mnSizeLimit*1024*1024;
}
},getAttachLimit:function(){
return this._mnSizeLimit*1024*1024;
},getAttachSingleLimit:function(){
return this._mnAttToFtnSize*1024*1024;
},getAttachSize:function(){
var _oSelf=this,_nSize=0;
getTop().E(_oSelf._getExistAttachChildNode(),function(_aoObj){
if(_aoObj.tagName=="DIV")
{
var _oObj=_oSelf.S("s"+_aoObj.id);
if(_oObj)
{
_nSize=_nSize+_oSelf.unFormatSize(_oObj.innerHTML);
}
}
});
_nSize=_nSize+_oSelf.oFileUploadMgr.getTotalSize();
return _nSize;
},_getAllFileSize:function(){
var _nTotalSize=0,_oList=this.oFileUploadMgr.getUploadList();
for(var i=0,l=_oList.length;i<l;i++)
{
_oList[i].get("bUpToFtn")&&(_nTotalSize=_nTotalSize+(+_oList[i].get("nSize")));
}
return this.getAttachSize()+_nTotalSize;
},getExistList:function(){
return this.oFileUploadMgr.getUploadList("complete");
},missAttach:function(_aoAttachList){
var _oTop=getTop();
var _oSelfAttach=this;
_oTop.confirmBox({msg:_oTop.TE(['%@%if(%type%=="fw")%@%','\u4EE5\u4E0B\u9644\u4EF6\u63D0\u53D6\u5931\u8D25\uFF0C\u8BF7\u5220\u9664\u540E\u91CD\u8BD5\uFF1A','%@%else%@%','\u4EE5\u4E0B%len%\u4E2A\u9644\u4EF6\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u5220\u9664\u540E\u91CD\u8BD5\uFF1A','%@%endif%@%<br/>','%@%for(%list%)%@%','<span style="color:red;" title="%name%">','%@%eval subAsiiStr(%name%,%_root_.width%,"...",1)%@%','</span>;&nbsp;','%@%if(%_root_.len%<5)%@%<br/>%@%endif%@%','%@%endfor%@%'],'%').replace({len:_aoAttachList.length,width:_aoAttachList.length<5?40:15,list:_aoAttachList}),title:"\u5931\u8D25\u4FE1\u606F",mode:"alert",onreturn:function(_abIsOk){
if(_abIsOk)
{
_oTop.E(_aoAttachList,function(_aoInfo){
_oSelfAttach.delAttach(_aoInfo.id);
});
_oTop.ossLogCustom("delay","all",'missAttach',_aoAttachList.length);
}
}});
},hasAttach:function(_abIsContainBigAttach){
var _oSelf=this;
function _fCheck(_aoChilds,_abCheckVisibled)
{
for(var i=0,_nLen=_aoChilds.length;i<_nLen;i++)
{
if(_aoChilds[i].nodeType!=3&&(!_abCheckVisibled||getTop().isShow(_aoChilds[i])))
{
return true;
}
}
}
if(_oSelf.oFileUploadMgr.getUploadList("complete").length>0||_fCheck(_oSelf._getExistAttachChildNode())||(_oSelf.S("filecell")&&_fCheck(_oSelf.S('filecell').childNodes))||(_abIsContainBigAttach&&_oSelf.S("BigAttach")&&_fCheck(_oSelf.S('BigAttach').childNodes,true))||(_abIsContainBigAttach&&_oSelf.S("ResumeWorks")&&_fCheck(_oSelf.S('ResumeWorks').childNodes)))
{
return true;
}
return false;
},hasUploadError:function(){
return this._getTotalStatusAttachLength("error")!=0;
},outputBtn:function(_abShowNor,_abShowPlus,_anSizeLimit,_abEasyMode){
var _oTop=getTop(),_oSelf=this,_nSizeLimit=typeof (_anSizeLimit)!="number"?this._mnSizeLimit:(this._mnSizeLimit=_anSizeLimit);
},isUploading:function(){
return this.oFileUploadMgr.isUploading();
},isPictureInserting:function(){
return false;
},attrUpload:function(_aoUpload,_oFileInfo){
var _oTop=getTop(),_oSelf=this,_oRequest=new _oTop.QMAjax();
var _oSelfAttach=this;
_aoUpload.callBack("onprocess",[_oFileInfo.set({sType:"CollectionAttach",nPercent:100})]);
_oTop.getAttachList(_oFileInfo._oFile,function(_abIsOk,_aoParam,_aoXhr,_asResp){
if(_abIsOk)
{
var _oAttach=_aoParam.attach[0],_sSizeId="SIZEUploader"+_oFileInfo.get("sId"),_oSizeDom=_oSelf.S(_sSizeId);
_oSizeDom.name=_oAttach.byte;
_oSizeDom.innerHTML=["(",_oAttach.newname?(_oAttach.newname+"&nbsp;"):"",_oSelf._formatSize(_oFileInfo.get("nSize")),")"].join("");
_oTop.show(_oSizeDom,1);
_oSelf.S("Uploader"+_oFileInfo.get("sId")).value=[_oAttach.mailid,_oAttach.symname||_oAttach.attid,_oAttach.name].join("|");
_oFileInfo.set("attachid",_oAttach.symname||_oAttach.attid);
if(_oSelf.S("from"))
{
_oSelf.S("from").value="attachfolder";
}
var _sViewFileUrl=_oAttach.viewfileurl;
_oSelf._attrUploadComplete.call(_oSelfAttach,"/data/"+(_sViewFileUrl?"|"+_sViewFileUrl:""),_oFileInfo,true);
}
else{
var _sError;
if(_aoParam&&_aoParam.errcode)
{
_sError="cgi,"+_aoParam.errcode;
}
else if(!_aoParam&&_asResp=="abort")
{
_sError="http,700";
}
else if(_aoXhr.readyState=="4")
{
_sError="http,"+_aoXhr.status;
}
else{
_sError="unknow,0";
}
_oSelf._attrUploadComplete.call(_oSelfAttach,_sError,_oFileInfo,false);
}
},_oRequest);
},getAttfldUpload:function(){
return this._moAttfldUpload;
},_attrUploadComplete:function(_sMsg,_oFileInfo,_bFlag){
var _oSelf=this;
if(_bFlag===false)
{
_oSelf._moAttfldUpload.onerror(_oFileInfo.set({nPercent:0,sError:_sMsg}));
_oSelf._updateAttachStatus(_oFileInfo,"error");
}
else{
var _sData=getTop().trim(_sMsg);
var _oPart=_sMsg.split("|");
if(_oPart.length>1)
{
var _sViewFileUrl;
_oPart[1]&&(_sViewFileUrl=getTop().trim(_oPart[1]));
if(_sViewFileUrl)
{
_oFileInfo.set("sFileUrl",_sViewFileUrl);
}
_sData=_oPart[0];
}
_oFileInfo.set("sFileId",_sData.split('/').pop());
_oSelf._moAttfldUpload.oncomplete(_oFileInfo.set({nPercent:100,sStatus:"complete"}));
_oSelf._updateAttachStatus(_oFileInfo,"complete");
}
},_addExistFileCell:function(_aoData){
var _oSelf=this;
getTop().E(_aoData,function(_aoFile){
_oSelf._addFileCell(_aoFile);
_oSelf._updateAttachStatus(_aoFile,"complete");
});
},addOtherUploaderFileCell:function(_aoFile){
var _oSelfAttach=this;
var _oUploader=_oSelfAttach.getAttfldUpload();
var _oAttachFile=_oUploader.addFile(_aoFile.get());
_oAttachFile.upload=function(){
_oUploader.oncomplete(_oAttachFile.set({nPercent:100,sStatus:"complete"}));
};
_oSelfAttach.oFileUploadMgr.oCfg.onselect.call(_oSelfAttach.oFileUploadMgr,[_oAttachFile],"attfld");
_oSelfAttach._updateAttachStatus(_oAttachFile,"complete");
return _oAttachFile;
},setUpAttInput:function(){
var _oSelf=this;
var _oCompose=_oSelf._moCompose;
var _oWin=_oSelf._moWin;
var _oTop=getTop();
var _oUPInput=_oSelf.S("upfilelist"),_oCAInput=_oSelf.S("cattachlist");
var _oValue=[],_oValue2=[],_oAppScanUploadFile=[];
_oTop.E(_oSelf.oFileUploadMgr.getUploadList("complete"),function(_aoFile){
var _sUploadId=_aoFile.get("sFileId");
if(_sUploadId&&!_aoFile.get("bUpToFtn"))
{
if(_aoFile.get("bIsAppScanUploadFile"))
{
_oAppScanUploadFile.push(_sUploadId);
}
else if(_aoFile.get("bVirtual"))
{
_oValue2.push(_sUploadId);
}
else{
_oValue.push(_sUploadId);
}
}
});
if(_oCAInput)
{
_oCAInput.value=_oValue.join("|");
var _oNoteAttachlist=_oTop.SN("cNoteattachelist",_oWin),_sNoteAttachlist=[];
if(_oNoteAttachlist&&_oNoteAttachlist.length>0)
{
_oTop.E(_oNoteAttachlist,function(_aoInput){
_sNoteAttachlist.push(_aoInput.value);
});
_oCAInput.value+="|"+_sNoteAttachlist.join("|");
}
}
if(!_oUPInput)
{
_oTop.insertHTML(_oCAInput,"afterEnd",_oTop.T('<input name="upfilelist" type="hidden" id="upfilelist" value="$value$" />').replace({value:_oValue2.join("|")}));
}
else{
_oUPInput.value=_oValue2.join("|");
}
var _oAppScanUploadFileInput=_oSelf.S("encryptattach"),_bHasAppScanUploadFile=(_oAppScanUploadFile&&_oAppScanUploadFile.length>0);
if(!_oAppScanUploadFileInput)
{
_bHasAppScanUploadFile&&_oTop.insertHTML(_oSelf.S("subject"),"afterEnd",_oTop.T('<input name="encryptattach" type="hidden" id="encryptattach" value="$value$" />').replace({value:_oAppScanUploadFile.join("|")}));
}
else{
_bHasAppScanUploadFile&&(_oAppScanUploadFileInput.value=_oAppScanUploadFile.join("|"));
}
this._attachlistLog();
return _oValue.length+_oValue2.length;
},_attachlistLog:function(){
var _nProcessId=0,_oSelf=this,_oTop=getTop();
try{
var _oAttachContainer=_oSelf.S("attachContainer"),_oCAInput=_oSelf.S("cattachlist"),_oAttDivs=_oAttachContainer&&_oTop.finds("div.attsep",_oAttachContainer);
_nProcessId=1;
if(_oAttDivs&&_oAttDivs.length>0)
{
var _oLogInfo=[];
for(var i in _oAttDivs)
{
var _oAttachItem=_oAttDivs[i];
_oLogInfo.push([(_oAttachItem.innerText||_oAttachItem.textContent||"").replace(/(.+\s\(.+\))(.+)/gi,"$1"),_oTop.finds("input.ico_att",_oAttachItem).length,_oTop.finds("input[ext='netdisk']",_oAttachItem).length].join(","));
}
_nProcessId=2;
_oTop.E(this.oFileUploadMgr.getUploadList(),function(_aoFile){
_oLogInfo.push([_aoFile.get("sName"),_aoFile.get("sStatus"),_aoFile.get("sType"),(_aoFile.get("sFileId")||"").substr(0,10)].join(","));
});
_nProcessId=3;
_oTop.insertHTML(_oCAInput,"afterEnd",_oTop.T('<input name="attachlist_log" type="hidden" id="attachlist_log" value="$value$" />').replace({value:encodeURIComponent(_oLogInfo.join("|"))}));
_nProcessId=4;
}
}
catch(e)
{
getTop().ossLog("realtime","all","stat=custom&type=attachlistlogerr&info="+[_nProcessId,e.message].join(","));
}
},showAttachLimitByAddr:function(_anLimit,_afCallback){
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
var _oTop=getTop();
_nWidth=(getTop().gnIEVer==6?500:"auto"),_sDisplay=(getTop().gnIEVer==6?"none":"");
new _oTop.QMDialog({sId:"attachAlert",sTitle:"\u63D0\u793A",sBodyHtml:_oTop.TE(['<div class="dialog_content" un="eve_complete_div">','<div class="dialog_feedback">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','<div class="dialog_f_t" style="font-weight: normal;">\u4F60\u7684\u90AE\u4EF6\u5927\u5C0F\u8D85\u8FC7\u4E86','$@$if($domain$)$@$',' @$domain$ ','$@$else$@$','\u5BF9\u65B9','$@$endif$@$','\u7684\u9650\u5236\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9000\u4FE1\uFF0C<span style="display:',_sDisplay,';"><br></span>\u662F\u5426\u5C06\u666E\u901A\u9644\u4EF6\u8F6C\u4E3A\u8D85\u5927\u9644\u4EF6\u53D1\u9001\uFF1F</div>','</div>','</div>','</div>','<div class="dialog_operate">','<a class="btn_blue btn_space" id="transfer">\u8F6C\u4E3A\u8D85\u5927\u9644\u4EF6\u53D1\u9001</a>','<a class="btn_gray btn_space" id="gosend">\u7EE7\u7EED\u53D1\u9001</a>','<a class="btn_gray" id="cancel">\u53D6\u6D88</a>','</div>']).replace({image_path:_oTop.getPath('image'),domain:_oCompose.getComposeVar()._oDomainChecker.getAttachLimit().sDom,size:this._formatSize(_anLimit)}),nHeight:null,nWidth:_nWidth,onload:function(){
var _oSelfObj=this;
_oTop.addEvent(_oSelfObj.S("transfer"),"click",function(){
_oCompose.getInputObj("transattach").value=true;
_oSelfObj.close();
_afCallback(true);
});
_oTop.addEvent(_oSelfObj.S("gosend"),"click",function(){
_oCompose.getInputObj("transattach").value=false;
_oSelfObj.close();
_afCallback(true);
});
_oTop.addEvent(_oSelfObj.S("cancel"),"click",function(){
_oCompose.getInputObj("transattach").value=false;
_oSelfObj.close();
_afCallback(false);
});
}});
},showAttachLimit:function(_anLimit){
var _oTop=getTop();
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
new _oTop.QMDialog({sId:"attachAlert",sTitle:"\u9644\u4EF6\u63D0\u793A",sBodyHtml:_oTop.TE(['<div class="dialog_content" un="eve_complete_div">','<div class="dialog_feedback">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','$@$if($hideBigAttach$==0)$@$','<div class="dialog_f_t">\u60A8\u6240\u9009\u62E9\u7684\u6587\u4EF6\u8D85\u8FC7\u4E86 $size$ \u7684\u9644\u4EF6\u5927\u5C0F\u4E0A\u9650\u3002</div>','<div class="dialog_f_d">\u5EFA\u8BAE\u4F7F\u7528 <a id="link_bigattach" nocheck="true"><input type="button" class="ico_attbig" align="absmiddle" style="margin:0 3px 0 0!important;margin:0 3px 2px 0" />\u8D85\u5927\u9644\u4EF6</a> \u4E0A\u4F20\u53D1\u9001\u3002</div>','$@$else$@$','<div>\u60A8\u6240\u9009\u62E9\u7684\u6587\u4EF6\u8D85\u8FC7\u4E86 $size$ \u7684\u9644\u4EF6\u5927\u5C0F\u4E0A\u9650\u3002</div>','$@$endif$@$','</div>','</div>','</div>']).replace({hideBigAttach:this.mbHideBigAttach?1:0,image_path:_oTop.getPath('image'),size:this._formatSize(_anLimit)}),nHeight:null,onload:function(){
var _oSelfObj=this;
_oTop.addEvent(_oSelfObj.S("link_bigattach"),"click",function(){
_oSelfObj.close();
_oCompose.initFileTransporter();
});
}});
},rmFileCell:function(_aoFiles){
var _oTop=getTop();
var _oSelf=this;
_oTop.E(_aoFiles,function(_aoFile){
_oTop.removeSelf(_oSelf.S("DUploader"+_aoFile.get("sId")));
});
},_addFileCell:function(_aoFile){
var _oSelfAttach=this;
var _oTop=getTop();
var _oCompose=_oSelfAttach._moCompose;
var _oWin=_oSelfAttach._moWin;
var _sName="Uploader"+_aoFile.get("sId");
var _oDiv=_oWin.document.createElement("div");
_oDiv.className="attsep";
_oDiv.id="D"+_sName;
_oDiv.innerHTML=this._getFileCellTmpl(_aoFile.get("sUploadMode")).replace({id:_aoFile.get("sId"),name:_sName,value:_oTop.htmlEncode(_aoFile.get("sName")),images_path:_oTop.getPath("image",true),ext:_aoFile.get("sUploadMode"),filename:_oTop.htmlEncode(_aoFile.get("sName")),dispfname:_insertWbr(_aoFile.get("sName")),size:_aoFile.get("nSize")||0,formatsize:this._formatSize(parseInt(_aoFile.get("nSize")||0)),mailattach:_aoFile.get("sUploadMode")=="collection"?[_aoFile.mailid,_aoFile.attachid,_aoFile.attachname].join("|"):"",ftn:_aoFile.get("bUpToFtn"),bResumeAttach:_aoFile.get('bResumeAttach')});
_oSelfAttach.S(_aoFile.get("bUpToFtn")?"BigAttach":"filecell").appendChild(_oDiv);
_oTop.show(_oSelfAttach.S("attachContainer"),true);
_oCompose.setFileNameToSubject(_aoFile.get("sName"));
if(_aoFile.get('bResumeAttach'))
{
if(!_oSelfAttach.S('resume_attach'))
{
_oTop.insertHTML(_oSelfAttach.S('attachContainer'),'afterBegin','<div id="resume_attach" class="composeResume_attach"></div>');
}
_oSelfAttach.S('resume_attach').appendChild(_oDiv);
_oTop.insertHTML(_oDiv,'afterBegin','<input type="hidden" name="resume" value="'+_oTop.htmlEncode(_aoFile.get('sResumeId')+'|'+_aoFile.get('sFileId'))+'" />');
}
return this;
},_checkBtn:function(){
var _bHasNoarmalAttach=this.hasAttach();
var _oTop=getTop();
_oTop.show(this.S('sAddAtt1'),!_bHasNoarmalAttach);
_oTop.show(this.S('sAddAtt2'),_bHasNoarmalAttach);
return this;
},_clearUploadInfo:function(){
var _oSelf=this;
_oSelf._moCurUploader=_oSelf._moCurUploadAttachInfo=_oSelf._moCurUploadTimeStamp=null;
return _oSelf;
},_disableFlash:function(){
var _oSelf=this;
if(_oSelf._moFlashCtrl)
{
_oSelf._moFlashCtrl.disable();
}
getTop().show(_oSelf.S("flashUploadContainer"),false);
return _oSelf;
},_formatSize:getTop().QMFileUpload.oUtil.formatSize,_getCurAttachId:function(){
return (this._mnAttachId||1)-1;
},_getFileCellTmpl:function(_asMode){
var _oTmplSet=this._moTmplSet,_oTmpl=_oTmplSet[_asMode];
if(_asMode=="exist")
{
return getTop().TE(['<div class="attsep" id="ea_$id$" >','<span style="margin-right:5px;cursor:pointer;" onclick="QMAttach.preview(\'$id$\')" uploadid="$id$">','<input type="button" class="ico_att" style="margin:1px 3px 0 0!important;margin:0 -1px 2px 0" />','<input type="hidden" id="$id$" name="$attachname$" value="$value$">','<span ui-type="filename" compose_path="$id$" id="eas_$id$">$viewname$</span>&nbsp;','<span class="addrtitle">(','$@$if($newname$)$@$','$newname$&nbsp;','$@$endif$@$','<span id="sea_$id$">$size$</span>)</span>','</span>','$@$if($bIsDoc$)$@$','<a title="\u6DFB\u52A0\u5230\u6B63\u6587" style="margin-right:5px;" class="att_addpic" onClick="doAttachInsertFile(QMAttach.getFileInfo(\x27$attid$\x27).sUrl)" >\u6DFB\u52A0\u5230\u6B63\u6587</a>','$@$else if($viewfileurl$)$@$','<a title="\u6DFB\u52A0\u5230\u6B63\u6587" style="margin-right:5px;" class="att_addpic" onClick="attachInsertImage(\x27$viewfileurl$\x27)" >\u6DFB\u52A0\u5230\u6B63\u6587</a>','$@$endif$@$','<a onClick="delExistAttach(\x27$id$\x27);QMAttach.checkReplyAttach();return false" class="att_del">\u5220\u9664</a>','</div>']);
}
else if(_asMode=="exist_normal2Ftn")
{
return getTop().TE(['<div class="attsep" id="D$name$">','<span id="A$name$" style="margin-right: 5px; cursor: pointer;" onclick="QMAttach.preview(\'$id$\')" uploadid="$id$">','<input type="button" class="ico_att" style="margin:0 3px 0 0!important;margin:0 3px 2px 0;" />','<input ext="control" id="$name$" type="hidden" value="$filename$" filename="$filename$" filesize="$size$" disabled="" />','<span ui-type="filename" id="S$name$" class="">$filename$</span>&nbsp;','<span id="SIZE$name$" name="3749" class="addrtitle">($formatsize$)</span>','</span>','<span id="CON$name$" class="upload_ctrl">','$@$if($bIsDoc$)$@$','<a id="C$name$" style="margin-right:5px;" onclick="attachInsertFile(\x27$id$\x27);" class="att_addpic">\u6DFB\u52A0\u5230\u6B63\u6587</a>','$@$else if($ispic$)$@$','<a id="V$name$" style="margin-right:5px;" onclick="attachInsertImage(\x27$viewfileurl$\x27);" class="att_addpic">\u6DFB\u52A0\u5230\u6B63\u6587</a>','$@$endif$@$','<a onclick="delAttach(\x27$name$\x27);return false" class="att_del">\u5220\u9664</a>','</span>','</div>']);
}
else if(_asMode=="exist_big")
{
return getTop().TE(['<div class="addrtitle attsep" id="eabig_$id$" mode="$mode$" appid="$@$if(!$appid$)$@$2$@$else$@$$appid$$@$endif$@$">','<span style="margin-right:5px;cursor:pointer" onclick="QMAttach.preview(\'$fid$\')" uploadid="$fid$" key="$key$" code="$code$" fid="$fid$" attachtype="big" filename="$@$html($filename$)$@$">','<a href="$downloadlink$"></a>','<input type="button" class="ico_attbig" style="margin:0 3px 0 0!important;margin:0 3px 2px 0;" />','<input type="hidden" name="fid" value="$fid$" />','<span  class="black" expiretime="$exptime$">','<span ui-type="filename">$dispfname$</span>','<span class="addrtitle">&nbsp;($filesize$','$@$eval getTop().QMFileUpload.oUtil.formatExpireTimeToDays($nExpireTime$) $@$',')</span>','</span>','</span>','$@$if($ispic$)$@$','<a onClick="attachInsertImage(this.getAttribute(\x27viewfileurl\x27));" style="margin-right: 5px;" class="att_addpic" viewfileurl="/cgi-bin/ftnDownload302?sid=$sid$&fid=$fid$&code=$code$&k=$key$">\u6DFB\u52A0\u5230\u6B63\u6587</a>','$@$else if($bIsDoc$)$@$','<a title="\u6DFB\u52A0\u5230\u6B63\u6587" style="margin-right:5px;" class="att_addpic" onclick="existAttachInsertFile(\'$@$if($fid$)$@$$fid$$@$else$@$$uid$$@$endif$@$\')" >\u6DFB\u52A0\u5230\u6B63\u6587</a>','$@$endif$@$','<a onClick="delBigAttach(this)" class="att_del">\u5220\u9664</a>','</div>']);
}
else if(!_oTmpl)
{
var _oTmplCode=['<span id="A$name$" style="margin-right:5px;">','<input type="button" class="','$@$if($ftn$)$@$','ico_attbig','$@$else$@$','ico_att','$@$endif$@$','" style="$@$if($bResumeAttach$)$@$margin:0 2px 0 1px;$@$else$@$margin:0 3px 0 0!important;margin:0 3px 2px 0;$@$endif$@$" />'];
switch(_asMode)
{case "rawinput":
_oTmplCode=_oTmplCode.concat(['<input name="$name$" ext="$ext$" id="$name$" type="hidden" value="$value$" filename="$filename$" filesize="$size$" />','<span ui-type="filename" id="S$name$">$dispfname$</span>&nbsp;<input type="button" class="ss_icon_loading" id="L$name$" style="width:16px;height:15px;padding:0;border:none;margin:0 3px 0 0!important;margin:0 3px 2px 0;" /><span id="SIZE$name$" name="$size$" class="addrtitle" style="display:none;"></span>','</span>','<span id="E$name$" class="upload_ctrl" ','style="display:none;color:red;margin-right:5px;cursor:default">','\u4E0A\u4F20\u5931\u8D25','</span>']);
break;
case "collection":
case "netdisk":
case "control":
_oTmplCode=_oTmplCode.concat([_asMode=="collection"?'<input name="mailattach" ext="$ext$" id="$name$" type="hidden" value="$mailattach$" filename="$filename$" filesize="$size$">':'<input ext="$ext$" id="$name$" type="hidden" value="$value$" filename="$filename$" filesize="$size$" disabled>','<span ui-type="filename" id="S$name$" class="addrtitle">$dispfname$</span>&nbsp;<span id="SIZE$name$" name="$size$" class="addrtitle">($formatsize$)</span>','</span>','<span id="W$name$" style="color:grey; margin-right: 5px; cursor: default;">\u7B49\u5F85\u4E0A\u4F20</span>','<span id="P$name$" class="bd_upload attchUploadstyle" style="display:none">','<div id="PB$name$" class="fdbody"></div>','</span>','<span id="SP$name$" style="color:grey; margin-right: 5px; cursor: default; display:none;">\u5F00\u59CB\u626B\u63CF</span>','<span id="E$name$" class="upload_ctrl" ','style="display:none;color:red;margin-right:5px;cursor:default">','\u4E0A\u4F20\u5931\u8D25','</span>']);
break;
}_oTmplSet[_asMode]=_oTmpl=getTop().TE(_oTmplCode.concat(['<span id="CON$name$" class="upload_ctrl process" >','<a id="R$name$" style="display:none;margin-right:5px;" onclick="QMAttach.retryUpload(\x27$id$\x27)" class="att_reupl">\u91CD\u8BD5</a>','<a id="V$name$" style="display:none;margin-right:5px;" onclick="attachInsertImage(this.getAttribute(\x27viewfileurl\x27));" class="att_addpic">\u6DFB\u52A0\u5230\u6B63\u6587</a>','<a id="C$name$" style="display:none;margin-right:5px;" onclick="attachInsertFile(this.getAttribute(\x27fileid\x27));" class="att_addpic">\u6DFB\u52A0\u5230\u6B63\u6587</a>','<a onclick="delAttach(\x27$name$\x27);return false" class="att_del">\u5220\u9664</a>','</span>']));
}
return _oTmpl;
},_getNewAttachId:function(){
return (this._mnAttachId++);
},_getNextReadyAttachInfo:function(){
return this.oFileUploadMgr._getNextReadyAttachInfo();
},_getTotalControlAttachLength:function(){
return this.oFileUploadMgr.getUploadList().length;
},_getTotalStatusAttachLength:function(_asStatus){
return this.oFileUploadMgr.getUploadList(_asStatus).length;
},_isAllowSelectFile:function(){
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
if(!getTop().goUserInfo.get("UPLOADEXPIRE"))
{
return true;
}
var _oTop=getTop();
new _oTop.QMDialog({sId:"attachAlert",sTitle:"\u90AE\u7BB1\u63D0\u793A",sBodyHtml:_oTop.T(['<div class="dialog_feedback">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c" style="font-size:12px;padding-top:0;width:330px;">','\u60A8\u6700\u8FD124\u5C0F\u65F6\u5185\u53D1\u9001\u8D85\u8FC7<b style="color:red;"> $size$M </b>\u7684\u666E\u901A\u9644\u4EF6\uFF0C\u572824\u5C0F\u65F6\u671F\u6EE1\u524D\u5C06\u4E0D\u80FD\u53D1\u9001\u5927\u9644\u4EF6\uFF0C\u4E3A\u4FDD\u8BC1\u670D\u52A1\u8D44\u6E90\u5408\u7406\u5229\u7528\uFF0C\u8BF7\u6539\u7528"\u8D85\u5927\u9644\u4EF6"\u529F\u80FD\u53D1\u9001\u3002','</div>','</div>','<div class="dialog_operate">','<input class="wd2 btn" type=button id="confirm" value=\u786E\u8BA4 style="margin-right:5px;" >','<input class="wd2 btn" type=button id="cancel" value=\u53D6\u6D88>','<div class="clr"></div>','</div>']).replace({imgPath:_oTop.getPath("image"),size:200}),onload:function(){
var _oSelfObj=this;
_oTop.addEvent(_oSelfObj.S("confirm"),"click",function(){
_oSelfObj.close();
_oCompose.initFileTransporter();
});
_oTop.addEvent(_oSelfObj.S("cancel"),"click",function(){
_oSelfObj.close();
});
},onshow:function(){
this.S("confirm").focus();
}});
return false;
},_isWarnningType:function(_asFileName){
var _oWarningType=this._msWarnningTypes.split("|"),_bFlag=false,_sExFileName=(_asFileName||"").split(".").pop().toLowerCase();
for(var i=0;i<_oWarningType.length;i++)
{
if(_sExFileName==_oWarningType[i])
{
_bFlag=true;
}
}
return _bFlag;
},_removeForwardAttachList:function(_asComposePath){
if(_asComposePath)
{
var _oMailattachDom=this.S(_asComposePath);
_oMailattachDom&&getTop().removeSelf(_oMailattachDom);
}
},_subFileName:function(_asFileName){
var _nNameLen=_asFileName.length,_nFirstLen=_nNameLen-6,_sFileFirst=_asFileName.substr(0,_nFirstLen),_sFileLast=_asFileName.substr(_nFirstLen);
return getTop().subAsiiStr(_sFileFirst,8,"...")+_sFileLast;
},unFormatSize:function(_asSize){
_asSize=_asSize.toLowerCase();
if(_asSize.indexOf("k")!=-1)
{
return parseFloat(_asSize)*1024;
}
if(_asSize.indexOf("m")!=-1)
{
return parseFloat(_asSize)*1024*1024;
}
if(_asSize.indexOf("g")!=-1)
{
return parseFloat(_asSize)*1024*1024*1024;
}
return parseFloat(_asSize);
},_updateAttachUI:function(_asId,_asShowConfig,_asHideConfig){
var _oSelf=this,_sName="Uploader"+_asId,_oTop=getTop();
_oTop.E(_asShowConfig.split("|"),function(_asUiPre){
_asUiPre&&_oTop.show(_oSelf.S(_asUiPre+_sName),true);
});
_oTop.E(_asHideConfig.split("|"),function(_asUiPre){
_asUiPre&&_oTop.show(_oSelf.S(_asUiPre+_sName),false);
});
return this;
},_updateAttachStatus:function(_aoAttachInfo,_asStatus,_asErrType,_asErrMsg){
if(!_aoAttachInfo)
{
return this;
}
var _oSelf=this;
var _oTop=getTop();
var _oCompose=_oSelf._moCompose;
var _sId=_aoAttachInfo.get("sId"),_sShowConfig="",_sHideConfig="",_bAttFlg=typeof _aoAttachInfo._oFile=="string",_sSPstr=(_aoAttachInfo.get("bUpToFtn")||_aoAttachInfo.get("bIsUptoFtnForNormal"))?'|SP':'';
switch(_asStatus)
{case "ready":
_sHideConfig="E|O|R|P"+_sSPstr;
_sShowConfig="W";
break;
case "uploading":
if(_bAttFlg)
{
_sHideConfig="W|E|O|R|P"+_sSPstr;
}
else{
_sShowConfig="P"+_sSPstr;
_sHideConfig="W|E|O|R";
}
break;
case "complete":
_sHideConfig="W|E|O|R|L|P"+_sSPstr;
_sShowConfig="";
!_aoAttachInfo.get("sComposePage")&&_aoAttachInfo.set("sComposePage",_oCompose.getPageId());
var _oDomViewBtn=_oSelf.S("AUploader"+_sId);
if(_oDomViewBtn)
{
_oDomViewBtn.style.cursor="pointer";
var _oFileId=_aoAttachInfo.get('sId');
_oDomViewBtn.onclick=function(){
_oSelf.preview(_oFileId);
};
_oDomViewBtn.setAttribute("uploadid",_oFileId);
}
if(_oTop.isSupportImportWord(_aoAttachInfo.get("sName")))
{
_sShowConfig+="|C";
_oSelf.S("CUploader"+_sId).setAttribute("fileid",_sId);
}
else if(_aoAttachInfo.get("sFileUrl"))
{
_sShowConfig+="|V";
_oSelf.S("VUploader"+_sId).setAttribute("viewfileurl",_aoAttachInfo.get("sFileUrl"));
}
_oTop.hasClass(_oSelf.S("CONUploader"+_sId),"process")&&_oTop.rmClass(_oSelf.S("CONUploader"+_sId),"process");
_oTop.hasClass(_oSelf.S("SUploader"+_sId),"addrtitle")&&_oTop.rmClass(_oSelf.S("SUploader"+_sId),"addrtitle");
if(_aoAttachInfo.get("bUpToFtn"))
{
var _oUploaderDom=_oSelf.S("DUploader"+_sId);
_oTop.insertHTML(_oUploaderDom,"afterEnd",_oSelf._getFileCellTmpl("exist_big").replace({id:_aoAttachInfo.get("sId"),downloadlink:_aoAttachInfo.get("sDownloadPage"),exptime:_aoAttachInfo.get("nServerSecond")+_aoAttachInfo.get("nExpireTime"),dispfname:_insertWbr(_aoAttachInfo.get("sName")),filesize:this._formatSize(parseInt(_aoAttachInfo.get("nSize")||0)),fid:_aoAttachInfo.get("sFileId"),sid:_oTop.getSid(),code:_aoAttachInfo.get("sFetchCode"),key:_aoAttachInfo.get("sKey"),ispic:_oTop.getViewTypeByFileName(_aoAttachInfo.get("sName"))=="img",bIsDoc:_oTop.isSupportImportWord(_aoAttachInfo.get("sName"))}));
_oTop.removeSelf(_oUploaderDom);
this._uploadFinish();
break;
}
else{
if(/Rawinput/.test(_aoAttachInfo.get("sType"))&&_aoAttachInfo.get("nSize"))
{
var _oSizeDom=_oSelf.S("SIZEUploader"+_sId);
_oSizeDom.innerHTML="("+this._formatSize(parseInt(_aoAttachInfo.get("nSize")||0,10))+")";
_oTop.show(_oSizeDom,true);
}
this._uploadFinish();
break;
}
case "error":
if(_bAttFlg)
{
_sShowConfig="E|R";
_sHideConfig="W|O|P"+_sSPstr;
}
else{
_sShowConfig="E|O|R";
_sHideConfig="W|L|P"+_sSPstr;
}
var _oEUploader=_oSelf.S("EUploader"+_sId),_sError=_aoAttachInfo.get("sError")||"";
if(_oEUploader)
{
if(/cgi,-501,ftnCreatefile/.test(_sError)||/cgi,-25086,ftnCreatefile/.test(_sError))
{
_oEUploader.innerHTML="\u4E2D\u8F6C\u7AD9\u5269\u4F59\u5BB9\u91CF\u4E0D\u8DB3";
}
else if(/cgi,-25087,ftnCreatefile/.test(_sError))
{
_oEUploader.innerHTML="\u4E2D\u8F6C\u7AD9\u6587\u4EF6\u6570\u91CF\u8FBE\u5230\u4E0A\u9650";
}
else if(/cgi,-113,ftnCreatefile/.test(_sError))
{
_oEUploader.innerHTML="\u6587\u4EF6\u6D89\u53CA\u654F\u611F\u8BCD\u8BED";
}
else if(/cgi,-2($|,)/.test(_sError))
{
_oEUploader.innerHTML="\u767B\u5F55\u8D85\u65F6";
}
_oEUploader.title=_oTop.T("\u9519\u8BEF\u7C7B\u578B\uFF1A$type$\n\u9519\u8BEF\u6D88\u606F\uFF1A$msg$").replace({type:_aoAttachInfo.get("sType"),msg:_sError.split(",").slice(0,2).join(",")});
}
if(_aoAttachInfo.get('nSize')>_oTop.QMFileUpload.oUtil.nMinDownloadFTNwidgetFileSize&&!_oSelf._bHasShowBigFileErrorWarn)
{
_oSelf._bHasShowBigFileErrorWarn=true;
var _oDownloadMsgDom=_oSelf.S('EUploader'+_sId);
if(_oDownloadMsgDom&&_oTop.QMFileUpload.oUtil.isNeedDownloadFTNwidget(_aoAttachInfo.get('sType')))
{
_oDownloadMsgDom.innerHTML+=_oTop.T('<span class="graytext">(\u5EFA\u8BAE<a href="/cgi-bin/readtemplate?t=browser_addon&kvclick=readtemplate|browser_addon|bigattach_recommend|qmattach_error&returnsid=$sid$&sid=$sid$&nocheckframe=true" nocheck="true" target="_blank">\u5B89\u88C5\u63A7\u4EF6</a>\u540E\u91CD\u65B0\u4E0A\u4F20)</span>').replace({sid:_oTop.getSid()});
_oTop.LogKV({sValue:'readtemplate|browser_addon|bigattach_recommend|qmattach_showerror'});
}
}
this._uploadFinish();
break;
}return this._updateAttachUI(_sId,_sShowConfig,_sHideConfig);
},_uploadFinish:function(){
var _oSelf=this,_oNextInfo=_oSelf._getNextReadyAttachInfo();
if(!_oNextInfo&&!this.isUploading()&&typeof (_oSelf.onfinish)=="function")
{
try{
_oSelf.onfinish.call(_oSelf);
}
catch(_oError)
{
getTop().doPageError(_oError.message,"compose.js","QMAttach.onfinish");
}
_oSelf.onprogress=null;
_oSelf.onfinish=null;
}
},getInfoUid:function(_aoUploadIds){
var _oResult=[];
getTop().E(this.oFileUploadMgr.getUploadList("complete"),function(_aoFile){
if(_aoUploadIds[_aoFile.get("sFileId")])
{
_oResult.push({name:getTop().htmlEncode(_aoFile.get("sName")),id:"Uploader"+_aoFile.get("sId")});
}
});
return _oResult;
},initFileUpload:function(_aoConfig){
var _oTop=getTop();
var _oSelfAttach=this;
var _oWin=_oSelfAttach._moWin;
var _oCompose=_oSelfAttach._moCompose;
var _oUploadMgr=_oSelfAttach.oFileUploadMgr;
_oTop.waitFor(function(){
return !!_oTop.QMFileUpload&&!!_oSelfAttach.S('AttachFrame');
},function(_abIsOk){
if(_abIsOk)
{
_oTop.osslogAjaxCompose(100);
var _oUploadCallBacks={onproxyclose:function(){
_oSelfAttach._hideDragAndDropArea();
_oSelfAttach.hideDragAndDropContainer();
},onselect:function(){
_oUploadMgr.oCfg.onselect.apply(_oUploadMgr,arguments);
},onprocess:function(){
_oUploadMgr.oCfg.onprocess.apply(_oUploadMgr,arguments);
},oncomplete:function(){
_oUploadMgr.oCfg.oncomplete.apply(_oUploadMgr,arguments);
},onerror:function(){
_oUploadMgr.oCfg.onerror.apply(_oUploadMgr,arguments);
}};
_oSelfAttach._moAttfldUpload=_oTop.QMFileUpload.create("base",_oUploadCallBacks);
_oSelfAttach._moPoupuUpload=_oTop.QMFileUpload.create("popup",_oTop.extend({oContainer:_oSelfAttach.S('AttachFrame')},_oUploadCallBacks));
if(getTop().goExpers.uploadunite===false)
{
if(/FlashPopup/.test(_oSelfAttach._moPoupuUpload.name))
{
var _oProxyData=_oTop["__UploadSvrProxy__"],_oCfg={};
_oCfg.sFlashMode=_aoConfig.sFlashMode||"RawPost";
if(!_oProxyData)
{
_oCfg.sFlashMode="RawPost";
_oSelfAttach._moPoupuUpload.initConfg(_oCfg);
_oTop.loadJsFile("//upload.mail.qq.com/proxyinfo.js",true,_oTop.document,function(){
_oProxyData=getTop()["__UploadSvrProxy__"];
if(_oProxyData&&_oProxyData.ip)
{
_oCfg.sUrl="http://"+_oProxyData.ip+"/cgi-bin/uploadfile";
_oCfg.sFlashMode="CheckPost";
_oSelfAttach._moPoupuUpload.initConfg(_oCfg);
}
},{},true);
}
else{
_oCfg.sUrl="http://"+_oProxyData.ip+"/cgi-bin/uploadfile";
_oSelfAttach._moPoupuUpload.initConfg(_oCfg);
}
}
}
_oSelfAttach._moPasteUpload=_oTop.QMFileUpload.create("paste",_oTop.extend({oContainer:_oWin.document.body},_oUploadCallBacks));
_oSelfAttach._moBindDragUpload=_oSelfAttach.initDragFileUpload({oWin:_oWin,nImgUploadOffsetY:150,oImgUploadArea:_oTop.finds("#QMEditorArea",_oWin)[0],oEditor:_oCompose.getPageEditor()});
var _sMenuId="moreupload",_oMoreUpload=_oSelfAttach.S(_sMenuId);
_oMoreUpload.onclick=function(){
getTop().LogKV('compose|toolbar|entrance|attach|more');
var _oPos=_oTop.calcPos(_oSelfAttach.S("AttachFrame")),_oMenuItems=[];
if((window.File&&window.XMLHttpRequest&&(new XMLHttpRequest()).upload)||_oTop.detectActiveX(4,1))
{
_oMenuItems.push({sId:'drag',sItemValue:'\u62D6\u62FD\u4E0A\u4F20'});
}
_oMenuItems.push({sId:'appScanUpload',sItemValue:'\u626B\u63CF\u7EB8\u8D28\u6587\u6863\u4E0A\u4F20'});
_oMenuItems.push({sId:'attachfolder',sItemValue:'\u4ECE\u6536\u85CF\u7684\u9644\u4EF6\u4E2D\u9009\u62E9'},{sId:'netdisk',sItemValue:'\u4ECE\u7F51\u76D8\u4E2D\u9009\u62E9'});
if((_aoConfig.attachs&&_aoConfig.attachs.length||_aoConfig.bigattachs&&_aoConfig.bigattachs.length)&&_oWin["attachflag"]!="replyattach")
{
_oMenuItems.push({sId:'addExist',sItemValue:'\u6DFB\u52A0\u539F\u90AE\u4EF6\u9644\u4EF6'});
}
var _nPosAttY;
if(_oSelfAttach.S("bigAttachLink"))
{
_nPosAttY=_oTop.calcPos(_oSelfAttach.S("bigAttachLink"))[2]+4;
}
else{
_nPosAttY=_oPos[2]+(_oTop.gbIsIE?-7:2);
}
var _oMenu=_oTop.QMMenu(_sMenuId);
if(!_oMenu||!_oMenu.isShow())
{
_oTop.hideMenuEvent();
new _oTop.QMMenu({oEmbedWin:_oWin,sId:_sMenuId,nX:_oPos[3],nY:_nPosAttY,nItemHeight:21,nWidth:_oTop.getLocale()=="zh_CN"?150:200,oItems:_oMenuItems,onitemclick:function(_asId){
switch(_asId)
{case 'drag':
if(!_oSelfAttach._moBindDragUpload)
{
showInstallActiveXDialog();
}
else{
_oSelfAttach._moBindDragUpload.showDragAndDropContainer();
}
break;
case 'appScanUpload':
_oCompose.startAppScanUpload();
break;
case 'attachfolder':
_oCompose.openAttachFolder();
break;
case 'addExist':
_oSelfAttach.addExistAttach({attach:_aoConfig.attachs},true);
_oSelfAttach.addExistAttach_Big({bigattach:_aoConfig.bigattachs});
_oTop.ossLog("delay","all","stat=nothing&loc=compose,rlyatt,0,0");
_oTop.show("attachContainer",true,_oTop.getMainWin());
_oWin["attachflag"]="replyAllAttach";
var _oNewRcptDom=_oSelfAttach.S("domnewRcpt");
_oTop.show(_oNewRcptDom,0);
_oCompose.getInputObj("newrcpt",null,false).value="";
break;
case 'netdisk':
_oTop.QMNetDisk.route("dropMenu",_oMoreUpload);
break;
}getTop().LogKV("compose|toolbar|entrance|attach|"+_asId);
}});
}
return false;
};
}
});
},initDragFileUpload:function(_aoCfg){
var _oTop=getTop();
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
var _oDragUpload=new QMAttachDrag(_oTop.extend({oAttach:_oSelfAttach,attachInsertImage:function(){
_oCompose.attachInsertImage.apply(_oCompose,arguments);
}},_aoCfg));
_oSelfAttach._moDragUploads.push(_oDragUpload);
return _oDragUpload;
},hideDragAndDropContainer:function(){
var _oTop=getTop();
var _oSelfAttach=this;
var _oArgs=arguments;
_oTop.E(_oSelfAttach._moDragUploads,function(_aoItem){
_aoItem.hideDragAndDropContainer.apply(_aoItem,_oArgs);
});
},dragOverEvent:function(_abIsRemove){
var _oTop=getTop();
var _oSelfAttach=this;
if(!_abIsRemove)
{
_oSelfAttach.dragOverEvent(true);
}
_oTop.E(_oSelfAttach._moDragUploads,function(_aoItem){
_aoItem.dragOverEvent.call(_aoItem,_abIsRemove);
});
},onmgrprocess:function(_aoFile){
var _oSelf=this;
var _oWin=_oSelf._moWin;
var _oTop=getTop();
var _oUtil=_oTop.QMFileUpload.oUtil,_sId=_aoFile.get("sId"),_oDom=_oSelf.S("PBUploader"+_sId),_nPercent=_aoFile.get('nPercent')||0;
var _nSecondsIntervelFlag=_aoFile.nSecondsIntervelFlag;
if(_aoFile.get("bUpToFtn")||_aoFile.get("bIsUptoFtnForNormal"))
{
var _oSignDOM=_oSelf.S("SPUploader"+_sId);
if(_oSignDOM)
{
var _sUploadStep=_aoFile.get('sUploadStep');
if(_sUploadStep=='signing')
{
_oSignDOM.innerHTML=['<span style="text-align:left; width: 128px; display: inline-block;">\u6B63\u5728\u626B\u63CF\u4E2D',_aoFile.get('nSignPercent'),'%</span>'].join("");
}
else if(_sUploadStep=='posting')
{
if(_aoFile.get("exist")=="1"&&!_aoFile.get("nSpeed"))
{
if(!_nSecondsIntervelFlag)
{
function _fGetSecondsSpeed(_anSize,_anI,_asSuffix)
{
var _nSize=_anSize/1024,_sSuffix=_asSuffix||"K/s";
if(_nSize>1024)
{
_sSuffix="M/s";
return _fGetSecondsSpeed(_nSize,_anI,_sSuffix);
}
return (_nSize/_anI).toFixed(2)+_sSuffix;
}
;var _nSecondsLeft=4;
var _nSecondsSpeed=_fGetSecondsSpeed(parseInt(_aoFile.get("nSize")),_nSecondsLeft);
_aoFile.nSecondsIntervelFlag=_nSecondsIntervelFlag=setInterval(function(){
--_nSecondsLeft<=0&&clearInterval(_nSecondsIntervelFlag);
_oSignDOM.innerHTML=["<span style='text-align:left; width: 128px; display: inline-block;'>",_nSecondsSpeed,' ',"00:00:0",_nSecondsLeft,"</span>"].join("");
},500);
}
}
else{
_nSecondsIntervelFlag&&clearInterval(_nSecondsIntervelFlag);
_oSignDOM.innerHTML=["<span style='text-align:left; width: 128px; display: inline-block;'>",_oUtil.stringifySpeed(_aoFile.get("nSpeed")),' ',_oUtil.formatTime(_aoFile.get("nRemainTime")),"</span>"].join("");
}
}
}
}
if(_oDom)
{
_oDom.style.width=Math.round(_nPercent)+"%";
}
if(_oSelf.onprogress)
{
try{
if(_nPercent<0)
{
_oSelf.onprogress.call(_oSelf,-1);
}
else{
var _oMgr=_oSelf.oFileUploadMgr,_nSize=_oSelf._getAllFileSize(),_oReadyFile=_oMgr.getUploadList("ready"),_nLeftSize=0;
for(var i=0,l=_oReadyFile.length;i<l;i++)
{
var _nFileSize=_oReadyFile[i].get("nSize")?(+_oReadyFile[i].get("nSize")):0;
_nLeftSize=_nLeftSize+_nFileSize;
}
_nLeftSize=_nLeftSize+(100-_nPercent)/100*_aoFile.get("nSize");
_oSelf.onprogress.call(_oSelf,(_nSize-_nLeftSize)/_nSize*100);
}
}
catch(_oError)
{
}
}
this._updateAttachStatus(_aoFile,_aoFile.get("sStatus"));
},onmgrerror:function(_aoFile){
this._updateAttachStatus(_aoFile,_aoFile.get("sStatus"));
},onmgrcomplete:function(_aoFile){
_aoFile.nSecondsIntervelFlag&&clearInterval(_aoFile.nSecondsIntervelFlag);
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
_oSelfAttach._updateAttachStatus(_aoFile,_aoFile.get("sStatus"));
_oCompose.setEditedAttach(true);
},_checkExeAndZeroSize:function(_aoFiles,_afCallback){
var _oTop=getTop(),_oSelf=this,_oBigSizeErrors=[],_oZeroSizeErrors=[],_oFileInfoErrors=[],_oTypeErrors=[],_oLinkFileErrors=[],_oTmpFiles=[];
var _nFtnMaxFileSize=_oTop.goUserInfo.get('DEF_FTN_MAXFILESIZE')||3*1024*1024*1024;
_oTop.E(_aoFiles,function(_aoFile){
var _nSize=_aoFile.get("nSize");
var _sName=_aoFile.get("sName");
if(_aoFile.get('sStatus')=='error')
{
_oLinkFileErrors.push(_sName);
_aoFile.destroy();
}
else if(_nSize===0)
{
_oZeroSizeErrors.push(_sName);
_aoFile.destroy();
}
else if(_nSize<0)
{
_oFileInfoErrors.push(_sName);
_aoFile.destroy();
}
else if(_nSize>_nFtnMaxFileSize)
{
_oBigSizeErrors.push(_sName);
_aoFile.destroy();
}
else if(_oSelf._isWarnningType(_sName))
{
_oTypeErrors.push(_sName);
_aoFile.destroy();
}
else{
_oTmpFiles.push(_aoFile);
}
});
_aoFiles=_oTmpFiles;
if(_oZeroSizeErrors.length||_oFileInfoErrors.length||_oTypeErrors.length||_oLinkFileErrors.length||_oBigSizeErrors.length)
{
var _oTmpl=_oTop.T(['<div class="dialog_f_t">$title$</div>','<div class="dialog_f_d addrtitle" style="width:400px;max-height:160px;_white-space:nowrap;word-wrap:break-word; word-break:break-all; overflow:hidden; text-overflow:ellipsis;">$filelist$</div>']);
var _oErrorMsg=[];
if(_oZeroSizeErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u4EE5\u4E0B\u6587\u4EF6\u5927\u5C0F\u4E3A 0 \u5B57\u8282\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\u3002',filelist:_oTop.htmlEncode(_oZeroSizeErrors.join(", "))}));
}
if(_oFileInfoErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u4EE5\u4E0B\u6587\u4EF6\u8DEF\u5F84\u8BC6\u522B\u9519\u8BEF\u6216\u8D85\u51FA\u5927\u5C0F\u9650\u5236\u3002',filelist:_oTop.htmlEncode(_oFileInfoErrors.join(", "))}));
}
if(_oTypeErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651\uFF0C\u4E0D\u5141\u8BB8\u6DFB\u52A0\u4EE5\u4E0B\u53EF\u6267\u884C\u6587\u4EF6\u6587\u4EF6\u3002',filelist:_oTop.htmlEncode(_oTypeErrors.join(", "))}));
}
if(_oLinkFileErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u4EE5\u4E0B\u6587\u4EF6\u5185\u5BB9\u8BFB\u53D6\u5931\u8D25\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u540E\u518D\u53D1\u9001',filelist:_oTop.htmlEncode(_oLinkFileErrors.join(", "))}));
}
if(_oBigSizeErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC7'+Math.round(_nFtnMaxFileSize/1024/1024/1024)+'G',filelist:_oTop.htmlEncode(_oBigSizeErrors.join(", "))}));
}
_oTop.alertBox({msg:_oErrorMsg.join('<div style="height: 8px; width:100%;"></div>'),title:"\u786E\u8BA4",onreturn:function(){
_afCallback(_aoFiles);
}});
}
else{
_afCallback(_aoFiles);
}
},_confirmToFtn:function(_aoFiles,_abOverTotalLimitSize,_abOverSingleLimitSize,_abHasBigFile,_afCallback){
var _oTop=getTop(),_oSelf=this;
var _nNeedDownloadFTNwidget=_abHasBigFile&&_oTop.QMFileUpload.oUtil.isNeedDownloadFTNwidget(_aoFiles[0].get('sType'))&&(parseInt(_oTop.gbIsChrome&&_oTop.gsChromeVer||0)<42);
new _oTop.QMDialog({sId:'attachAlert',sTitle:"\u9644\u4EF6\u63D0\u793A",sBodyHtml:_oTop.TE(['<div class="dialog_function">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','$@$if($needDownloadFTNwidget$)$@$','<div class="bold">\u60A8\u6DFB\u52A0\u7684\u6587\u4EF6\u8F83\u5927\uFF0C\u5EFA\u8BAE\u5B89\u88C5\u63A7\u4EF6\u540E\u4F7F\u7528\u8D85\u5927\u9644\u4EF6\u4E0A\u4F20\u3002</div>','<div class="addrtitle">\u4F7F\u7528\u63A7\u4EF6\u80FD\u591F\u66F4\u52A0\u5FEB\u901F\u7A33\u5B9A\u5730\u4E0A\u4F20\u6587\u4EF6\u3002</div>','$@$else$@$','$@$if($overtotal$==1)$@$','<div class="bold" style="margin-bottom:10px;">\u60A8\u6DFB\u52A0\u7684\u9644\u4EF6\u6587\u4EF6\u603B\u5927\u5C0F\u8D85\u8FC7$totalsize$M</div>','$@$else$@$','<div class="bold" style="margin-bottom:10px;">\u60A8\u6DFB\u52A0\u7684\u9644\u4EF6\u6587\u4EF6\u4E2D\uFF0C\u6709\u4E9B\u8D85\u8FC7\u4E86$singlesize$M</div>','$@$endif$@$','\u5EFA\u8BAE\u60A8\u8F6C\u4E3A\u8D85\u5927\u9644\u4EF6$@$if($locale$ == "zh_CN")$@$($aboutmore$)$@$endif$@$\u53D1\u9001\u3002<br>','<div class="addrtitle">\u8D85\u5927\u9644\u4EF6\u4E0D\u6C38\u4E45\u4FDD\u5B58\uFF0C\u66F4\u73AF\u4FDD\uFF0C\u5BF9\u65B9\u4E5F\u53EF\u4EE5\u9AD8\u901F\u4E0B\u8F7D\u3002</div>','$@$endif$@$','</div>','</div>','<div class="dialog_operate">','<div id="dlgtype" dlgtype="$overtotal$">','$@$if($needDownloadFTNwidget$)$@$','<a href="/cgi-bin/readtemplate?t=browser_addon&kvclick=readtemplate|browser_addon|bigattach_recommend|qmattach_select&returnsid=$sid$&sid=$sid$&nocheckframe=true" class="btn_blue" id="download" nocheck="true" target="_blank">\u7ACB\u5373\u5B89\u88C5</a>','<a href="javascript:;" class="btn_gray" id="bigAttSend" nocheck="true">\u7EE7\u7EED\u4E0A\u4F20</a>','$@$else$@$','<a class="btn_blue btn_space" id="bigAttSend">\u662F\uFF0C\u4F7F\u7528\u8D85\u5927\u9644\u4EF6</a>','$@$if($overtotal$==1)$@$','<a class="btn_gray" id="cancel" value="" nocheck="true">\u4E0D\uFF0C\u53D6\u6D88\u4E0A\u4F20</a>','$@$else$@$','<a class="btn_gray" id="send" value="" nocheck="true">\u4E0D\uFF0C\u4F7F\u7528\u666E\u901A\u9644\u4EF6</a>','$@$endif$@$','$@$endif$@$','</div>','</div>']).replace({locale:_oTop.getLocale(),image_path:_oTop.getPath("image"),aboutmore:'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1000593&&id=35" target="_blank">\u8BE6\u60C5</a>',singlesize:_oSelf._mnAttToFtnSize,totalsize:_oSelf._mnSizeLimit,oversingle:_abOverSingleLimitSize?1:0,overtotal:_abOverTotalLimitSize?1:0,needDownloadFTNwidget:_nNeedDownloadFTNwidget?1:0,sid:_oTop.getSid()}),onshow:function(){
if(this.S("download"))
{
this.S("download").focus();
}
else if(this.S("bigAttSend"))
{
this.S("bigAttSend").focus();
}
if(_nNeedDownloadFTNwidget)
{
_oTop.LogKV({sValue:'readtemplate|browser_addon|bigattach_recommend|qmattach_showselect'});
}
},onload:function(){
var _oDlg=this,_nDlgType=_oDlg.S("dlgtype").getAttribute("dlgtype");
_oTop.addEvent(_oDlg.S("bigAttSend"),"click",function(_aoEvent){
_oTop.preventDefault(_aoEvent);
_oTop.stopPropagation(_aoEvent);
_afCallback(true);
_oTop.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,1,"+_nDlgType);
_oDlg.close();
if(_nNeedDownloadFTNwidget)
{
_oTop.LogKV({sValue:'readtemplate|browser_addon|bigattach_recommend|qmattach_upload'});
}
});
_oTop.addEvent(_oDlg.S("send"),"click",function(_aoEvent){
_oTop.preventDefault(_aoEvent);
_oTop.stopPropagation(_aoEvent);
_afCallback(false);
_oTop.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,0,"+_nDlgType);
_oDlg.close();
});
_oTop.addEvent(_oDlg.S("download"),"click",function(_aoEvent){
_oTop.stopPropagation(_aoEvent);
_oDlg.close();
});
_oTop.addEvent(_oDlg.S("cancel"),"click",function(_aoEvent){
_oTop.preventDefault(_aoEvent);
_oTop.stopPropagation(_aoEvent);
_oTop.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,-1,"+_nDlgType);
_oDlg.close();
});
}});
},onmgrselect:function(_aoFiles,_afCallback){
var _oSelf=this;
var _oCompose=_oSelf._moCompose;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
function _fDestroyFiles()
{
_oTop.E(_aoFiles,function(_aoFile){
_aoFile.destroy();
});
}
if(!_oSelf._isAllowSelectFile())
{
_fDestroyFiles();
return;
}
_oSelf._checkExeAndZeroSize(_aoFiles,function(_aoFiles){
function _fAdds()
{
_oTop.E(_aoFiles,function(_aoFile){
_oSelf._addFileCell(_aoFile);
});
_afCallback(_aoFiles);
}
var _nTmpTotalSize=0,_bOverSingleLimitSize,_bOverTotalLimitSize,_bHasBigFile;
_oTop.E(_aoFiles,function(_aoFile){
var _bHasSize=_aoFile.get("nSize");
if(typeof _bHasSize!="undefined")
{
if(_aoFile.get("nSize")>_oSelf.getAttachSingleLimit())
{
_bOverSingleLimitSize=true;
}
if(_aoFile.get("nSize")>_oTop.QMFileUpload.oUtil.nMinDownloadFTNwidgetFileSize)
{
_bHasBigFile=true;
}
_nTmpTotalSize+=_aoFile.get("nSize");
}
});
if(_oSelf.getAttachSize()+_nTmpTotalSize>_oSelf.getAttachLimit())
{
_bOverTotalLimitSize=true;
}
if(_oCompose.getPageId()=='qq')
{
if(_bOverTotalLimitSize)
{
_oSelf.showAttachLimit(_oSelf.getAttachLimit());
}
else{
_fAdds();
}
}
else if(_bOverTotalLimitSize&&!_aoFiles[0].uploadToFtn)
{
_oSelf.showAttachLimit(_oSelf.getAttachLimit());
var _oAddrInput=_oCompose.getQMAddrInput(),_nTmpType=0;
_oAddrInput&&getTop().E(_oAddrInput.get("to",_oWin).get("json"),function(_aoItem){
if(/qq.com$/gi.test(_aoItem.addr))
{
_nTmpType=1;
return false;
}
});
getTop().ossLog("delay","all","stat=custom&type=attbigsize&info="+[_nTmpType,_oSelf.getAttachSize()+_aoFiles[0].get("nSize")].join(","));
_fDestroyFiles();
}
else if((_bOverTotalLimitSize||_bOverSingleLimitSize)&&_aoFiles[0].uploadToFtn)
{
_oSelf._confirmToFtn(_aoFiles,_bOverTotalLimitSize,_bOverSingleLimitSize,_bHasBigFile,function(_abIsFtn){
if(_abIsFtn)
{
if(_aoFiles.length>=40)
{
getTop().showError("\u4E00\u6B21\u4E0D\u80FD\u9009\u62E9\u8D85\u8FC740\u4E2A\u6587\u4EF6");
return false;
}
var _bGoFtn=getTop().detectActiveX(3)||(getTop().gbIsChrome&&parseInt(getTop().gsChromeVer)>41);
if(_aoFiles[0].oUploader)
{
var _sUploaderName=_aoFiles[0].oUploader.name;
if(/H5C/.test(_sUploaderName))
{
_bGoFtn=false;
}
else if(/FlashPopup/.test(_sUploaderName))
{
var _nFlashMaxFileSizeForBurst=getTop().QMFileUpload.oUtil.getFlashMaxFileSizeForBurst();
var _bGoFlash=true;
_oTop.E(_aoFiles,function(_aoFile){
if(_aoFile.get('nSize')>_nFlashMaxFileSizeForBurst)
{
_bGoFlash=false;
}
});
if(_bGoFlash)
{
_bGoFtn=false;
}
}
else if(/FlashH5Drag/.test(_sUploaderName))
{
_bGoFtn=false;
}
}
if(_bGoFtn)
{
_oCompose.initFileTransporter(true);
debug('switch upload to: ftn');
}
else{
_oTop.E(_aoFiles,function(_aoFile){
_aoFile.set("bUpToFtn",true);
_oSelf._addFileCell(_aoFile);
});
_afCallback(_aoFiles);
debug('switch upload to: '+(_aoFiles[0].oUploader?_aoFiles[0].oUploader.name:'undefined'));
}
}
else{
_oTop.E(_aoFiles,function(_aoFile){
_oSelf._addFileCell(_aoFile);
});
_afCallback(_aoFiles);
}
});
}
else{
_fAdds();
}
_oSelf._checkBtn();
});
},addExistAttach:function(_aoData,_abIsOriginAtt,_abIsReplyAttach){
var _oSelfAttach=this;
var _oWin=_oSelfAttach._moWin;
var _oTop=getTop(),_oMailAttach=_oTop.T('<input id="$id$" name="$attachname$" value="$mailattach$" type="hidden" />'),_oMailIds=_aoData.forward,_oAttachs=_aoData.attach;
for(var i=0,_nLen=_oAttachs.length;i<_nLen;i++)
{
var _sCompose_path=_oAttachs[i].mailid.indexOf("@")==0?_oAttachs[i].attid:(_oAttachs[i].symname||_oAttachs[i].attid);
if(!_abIsOriginAtt)
{
_oTop.insertHTML(_abIsOriginAtt?_oSelfAttach.S("exist_file"):_oWin.document.frm,'beforeEnd',_oMailAttach.replace({id:_sCompose_path,mailattach:[_oAttachs[i].mailid,_sCompose_path,_oAttachs[i].name].join("|"),attachname:_abIsReplyAttach?"replymailattach":"mailattach"}));
}
else if(_abIsOriginAtt&&!_oSelfAttach.S(_sCompose_path))
{
if(_oSelfAttach.getAttachSize()+_oSelfAttach.unFormatSize(_oAttachs[i].size)>_oSelfAttach.getAttachLimit())
{
_oSelfAttach.showAttachLimit(_oSelfAttach.getAttachLimit());
return;
}
_oTop.insertHTML(_abIsOriginAtt?_oSelfAttach.S("exist_file"):_oWin.document.frm,'beforeEnd',_oSelfAttach._getFileCellTmpl("exist").replace({id:_sCompose_path,attid:_oAttachs[i].attid,value:[_oAttachs[i].mailid,_sCompose_path,_oAttachs[i].name].join("|"),viewname:_insertWbr(_oAttachs[i].name),newname:_oAttachs[i].newname,size:_oAttachs[i].size,viewfileurl:_oAttachs[i].viewfileurl,bIsDoc:_oTop.isSupportImportWord(_oAttachs[i].name),attachname:_abIsReplyAttach?"replymailattach":"mailattach"}));
}
}
},checkReplyAttach:function(){
var _bFlag=false;
var _oSelf=this;
getTop().E(["exist_file","exist_BigAttach","exist_resume_attach"],function(_asDomId){
if(_oSelf.S(_asDomId))
{
_oChilds=_oSelf.S(_asDomId).childNodes;
for(var i=0,_nLen=_oChilds.length;i<_nLen;i++)
{
if(_oChilds[i].nodeType!=3&&getTop().isShow(_oChilds[i]))
{
_bFlag=true;
}
}
}
});
if(getTop().isShow(_oSelf.S("replyexistAttach"))&&!_bFlag)
{
getTop().show(_oSelf.S("replyexistAttach"),false);
}
},addExistAttach_Big:function(_aoData,_asMod){
var _oTop=getTop();
var _oSelfAttach=this;
var _oBigAttachDom=_asMod=='reply'?_oSelfAttach.S("exist_BigAttach"):(_asMod=='resume_works'?_oSelfAttach.S('ResumeWorks'):_oSelfAttach.S("BigAttach"));
_oTop.E(_aoData.bigattach,function(_aoAttach){
if(!_oSelfAttach.S("eabig_"+_aoAttach.id))
{
_oTop.insertHTML(_oBigAttachDom,'beforeEnd',_oSelfAttach._getFileCellTmpl("exist_big").replace(_oTop.extend(_aoAttach,{dispfname:_insertWbr(_aoAttach.filename),mode:_asMod=='reply'?"replaybigattach":_asMod||"",ispic:_oTop.getViewTypeByFileName(_aoAttach.filename)=="img",sid:_oTop.getSid(),bIsDoc:_oTop.isSupportImportWord(_aoAttach.filename)})));
}
});
},addExistNormalAttach:function(_aoData){
var _oTop=getTop();
var _oSelfAttach=this;
var _oBigAttachDom=_oSelfAttach.S("filecell");
var _oFile={};
_oTop.show(_oSelfAttach.S("attachContainer"),true);
_oTop.E(_aoData,function(_aoAttach){
_oFile=_oSelfAttach._moPoupuUpload.addFile(_aoAttach);
_oSelfAttach.oFileUploadMgr._add(_oFile);
_oFile.set({"sStatus":"complete"});
_oTop.insertHTML(_oBigAttachDom,'beforeEnd',_oSelfAttach._getFileCellTmpl("exist_normal2Ftn").replace({id:_oFile.get("sId"),name:"Uploader"+_oFile.get("sId"),value:_oTop.htmlEncode(_oFile.get("sName")),images_path:_oTop.getPath("image",true),ext:_oFile.get("sUploadMode"),filename:_oTop.htmlEncode(_oFile.get("sName")),dispfname:_insertWbr(_oFile.get("sName")),size:_oFile.get("nSize")||0,formatsize:_oSelfAttach._formatSize(parseInt(_oFile.get("nSize")||0)),mailattach:"",ftn:_oFile.get("bUpToFtn"),bResumeAttach:_oFile.get('bResumeAttach'),viewfileurl:_oFile.get('sDownloadPage'),ispic:_oTop.getViewTypeByFileName(_oFile.get("sName"))=="img",bIsDoc:_oTop.isSupportImportWord(_oFile.get("sName"))}));
});
},addExistAttach_normal2Ftn:function(_aoData){
var _oTop=getTop();
var _oSelfAttach=this;
var _oBigAttachDom=_oSelfAttach.S("filecell");
var _aoFile={};
_oTop.E(_aoData.attach,function(_aoAttach){
_aoFile=_aoAttach.oModel;
_oSelfAttach.oFileUploadMgr._add(_aoFile);
_oTop.insertHTML(_oBigAttachDom,'beforeEnd',_oSelfAttach._getFileCellTmpl("exist_normal2Ftn").replace({id:_aoFile.get("sId"),name:"Uploader"+_aoFile.get("sId"),value:_oTop.htmlEncode(_aoFile.get("sName")),images_path:_oTop.getPath("image",true),ext:_aoFile.get("sUploadMode"),filename:_oTop.htmlEncode(_aoFile.get("sName")),dispfname:_insertWbr(_aoFile.get("sName")),size:_aoFile.get("nSize")||0,formatsize:_oSelfAttach._formatSize(parseInt(_aoFile.get("nSize")||0)),mailattach:"",ftn:_aoFile.get("bUpToFtn"),bResumeAttach:_aoFile.get('bResumeAttach'),viewfileurl:_aoFile.get('sDownloadPage'),ispic:_oTop.getViewTypeByFileName(_aoFile.get("sName"))=="img",bIsDoc:_oTop.isSupportImportWord(_aoFile.get("sName"))}));
});
},_ossLogDelAttachOpt:function(_aoDom){
if(_aoDom)
{
var _oAttachItem=_aoDom.className.indexOf("attsep")!=-1?_aoDom:getTop().parents("div.attsep",_aoDom)[0];
if(_oAttachItem)
{
var _bAttach=getTop().finds("input.ico_att",_oAttachItem);
getTop().osslogAjaxCompose(110,_bAttach?1:0,encodeURIComponent(_oAttachItem.innerText||_oAttachItem.textContent||""));
}
}
}};
function _qmFileMgr(_aoWin,_aoCfg)
{
this._moFileList=[];
this._moFileMap={};
this.oCfg=_aoCfg;
this._moWin=_aoWin;
}
function versionCompare(v1,v2,options)
{
var lexicographical=options&&options.lexicographical,zeroExtend=options&&options.zeroExtend,v1parts=v1.split('.'),v2parts=v2.split('.');
function isValidPart(x)
{
return (lexicographical?/^\d+[A-Za-z]*$/:/^\d+$/).test(x);
}
if(zeroExtend)
{
while(v1parts.length<v2parts.length)
v1parts.push("0");
while(v2parts.length<v1parts.length)
v2parts.push("0");
}
for(var i=0;i<v1parts.length;++i)
{
if(v2parts.length==i)
{
return 1;
}
if(v1parts[i]==v2parts[i])
{
continue;
}
else if(v1parts[i]>v2parts[i])
{
return 1;
}
else{
return -1;
}
}
if(v1parts.length!=v2parts.length)
{
return -1;
}
return 0;
}
_qmFileMgr.prototype={_upload:function(_aoFile){
var _oSelf=this;
getTop().increaseUploadCount(_aoFile.oUploader.name);
if(_aoFile.uploadToFtn&&_aoFile.get("bUpToFtn"))
{
var _nUserUploadFreeSpace=getMainWin()._mnUserUploadFreeSpace;
if(_nUserUploadFreeSpace&&_aoFile.get("nSize")>_nUserUploadFreeSpace)
{
_oSelf.oCfg.onerror.call(_oSelf,(_aoFile.set({sStatus:"error",sError:"cgi,-25086,ftnCreatefile"})));
return;
}
_aoFile.set('nAppId',2);
return _aoFile.uploadToFtn();
}
return _aoFile.upload();
},addFile:function(_aoFile){
if(this._add(_aoFile)&&!this.isUploading())
{
return this._upload(_aoFile);
}
return false;
},rmFile:function(_aoFile){
var _oSelf=this;
var _sStatus=_aoFile.get("sStatus");
if(this._del(_aoFile)&&_sStatus=="uploading")
{
_aoFile.cancel();
this._moWin.setTimeout(function(){
_oSelf._next(_aoFile);
});
}
_aoFile.destroy&&_aoFile.destroy();
getTop().osslogAjaxCompose(105);
},retry:function(_aoFile){
if(this._move(_aoFile)&&!this.isUploading())
{
this._upload(_aoFile);
}
},isUploading:function(){
var _oList=this._moFileList;
for(var i=0,l=_oList.length;i<l;i++)
{
if(_oList[i].get("sStatus")=="uploading")
{
return true;
}
}
},getTotalSize:function(){
var _nTotalSize=0,_oList=this._moFileList;
for(var i=0,l=_oList.length;i<l;i++)
{
!_oList[i].get("bUpToFtn")&&(_nTotalSize=_nTotalSize+(+_oList[i].get("nSize")));
}
return _nTotalSize;
},getFileById:function(_asId){
var _oList=this._moFileList;
for(var i=0,l=_oList.length;i<l;i++)
{
if(_asId==_oList[i].get("sId"))
{
return _oList[i];
}
}
},setUploadData:function(_aoList){
var _fGet=function(_asName){
return this[_asName];
};
var _oFileList=this._moFileList=[];
for(var i=0,l=_aoList.length;i<l;i++)
{
if(_aoList[i].bIsAppScanUploadFile)
continue;
_oFileList.push(getTop().extend({},_aoList[i]));
_oFileList[i].get=_fGet;
}
return _oFileList;
},getUploadList:function(_asType){
if(!_asType)
{
return this._moFileList;
}
var _oList=this._moFileList,_oOutputList=[],_sStatus;
for(var i=0,l=_oList.length;i<l;i++)
{
_sStatus=_oList[i].sStatus||_oList[i].get("sStatus");
if(_asType==_sStatus)
{
_oOutputList.push(_oList[i]);
}
}
return _oOutputList;
},getUploadListExclude:function(_asType){
var _oList=this._moFileList,_oOutputList=[],_sStatus;
for(var i=0,l=_oList.length;i<l;i++)
{
_sStatus=_oList[i].sStatus||_oList[i].get("sStatus");
if(_asType!=_sStatus)
{
_oOutputList.push(_oList[i]);
}
}
return _oOutputList;
},getUploadData:function(){
var _oList=this.getUploadList("complete"),_oOutputList=[];
for(var i=0,l=_oList.length;i<l;i++)
{
_oOutputList.push(_oList[i].get()||_oList[i]);
}
return _oOutputList;
},_isExist:function(_aoFile){
return !!this._moFileMap[this._getAttachId(_aoFile)];
},_getUploadMode:function(_aoFile){
return ({RawinputPopupMail:"rawinput",Base:"collection",googledrive:"netdisk",dropbox:"netdisk",weiyun:"netdisk"})[_aoFile.get("sType")]||"control";
},_getNextReadyAttachInfo:function(){
var _oReadyList=this.getUploadList("ready");
return _oReadyList.length?_oReadyList[0]:null;
},_getAttachId:function(_aoFile){
return [_aoFile.get("sType"),_aoFile.get("sId")].join("_");
},_getAttachIdx:function(_aoFile){
var _nIdx=-1,_oList=this._moFileList;
for(var i=0,l=_oList.length;i<l;i++)
{
if(_oList[i].get("sId")==_aoFile.get("sId"))
{
_nIdx=i;
break;
}
}
return _nIdx;
},_next:function(_aoFile){
var _oNextFile=this._getNextReadyAttachInfo();
if(_oNextFile)
{
return this._upload(_oNextFile);
}
return false;
},_add:function(_aoFile){
var _bIsFileExist=this._isExist(_aoFile);
if(!_bIsFileExist)
{
this._moFileMap[this._getAttachId(_aoFile)]=_aoFile;
this._moFileList.push(_aoFile);
return true;
}
},_addData:function(_aoFileData){
var _aFile={};
_aFile.sStatus=_aoFileData.sStatus;
_aFile.sId=_aoFileData.sId;
_aFile.sType=_aoFileData.sType;
},_del:function(_aoFile){
var _nIdx=this._getAttachIdx(_aoFile);
if(_nIdx>-1)
{
delete this._moFileMap[this._getAttachId(_aoFile)];
this._moFileList.splice(_nIdx,1);
return true;
}
},_move:function(_aoFile){
var _nIdx=this._getAttachIdx(_aoFile);
if(_nIdx>-1)
{
_aoFile.set({sStatus:"ready",nPercent:0});
this._moFileList=this._moFileList.concat(this._moFileList.splice(_nIdx,1));
return true;
}
}};
function _logKVOnlineDoc(_asKvKey)
{
var srcValue=["http://rl.mail.qq.com/cgi-bin/getinvestigate?&stat=offlinekv&statkey=onlinedoc&item=",encodeURIComponent(_asKvKey.replace(/\|/g,"_")),"&r=",Math.random()].join("");
(new Image()).src=srcValue;
}
var QMOnlineAttachMain=_oTop.inherit("QMOnlineAttachMain",QMAttachMain,function(_aoSuper){
return {_msAllowTypes:['doc','docx','xls',"xlsx"],_mnSingleLimitSize:3*1024*1024,_oWinProxyFuncArr:{},$_constructor_:function(_aoCompose,_aoWin,_aoOnlineDoc){
this._moOnlineDoc=_aoOnlineDoc;
},_initVar:function(){
this._moTmplSet={};
this._moExistList=[];
this._moExistInfos={};
this._moDragUploads=[];
this._moWin.QMOnlineAttach=this;
},_initFileUploadMgr:function(){
var _oSelfAttach=this;
_oSelfAttach.oFileUploadMgr=new _qmFileMgr(_oSelfAttach._moWin,{onselect:function(_aoFiles){
var _oSelf=this,_oTop=getTop();
!_aoFiles.length&&(_aoFiles=[_aoFiles]);
_oTop.osslogAjaxCompose(101);
_oTop.E(_aoFiles,function(_aoFile){
!_aoFile.get('sUploadMode')&&_aoFile.set("sUploadMode",_oSelf._getUploadMode(_aoFile));
});
_oSelfAttach.onmgrselect(_aoFiles,function(_aoFiles){
if(_aoFiles&&_aoFiles.length>0)
{
_oTop.QMDialog.get("addOnlineDocInComposePage")&&_oTop.QMDialog.get("addOnlineDocInComposePage").min(true);
}
_oTop.E(_aoFiles,function(_aoFile){
_aoFile.set("sFrom","attachToFtn");
_aoFile.set("bOnlineAttach",true);
_oSelf.addFile(_aoFile);
});
});
},onprocess:function(_aoFile){
_oSelfAttach.onmgrprocess&&_oSelfAttach.onmgrprocess.call(_oSelfAttach,_aoFile);
},onerror:function(_aoFile){
getTop().osslogAjaxCompose(102,undefined,undefined,undefined,_aoFile.get("sName"));
getTop().osslogAjaxCompose(104);
debug(["QMFileUpload ONERROR",_aoFile.get("sType"),_aoFile.get("nPercent"),_aoFile.get("sError")].join(" : "));
if(/FlashPopup/.test(_aoFile.get("sType")))
{
_oSelfAttach._moPoupuUpload.initConfg({sFlashMode:"RawPost"});
}
_oSelfAttach.onmgrerror&&_oSelfAttach.onmgrerror.call(_oSelfAttach,_aoFile);
this._next(_aoFile);
},oncomplete:function(_aoFile){
getTop().osslogAjaxCompose(102,undefined,undefined,undefined,_aoFile.get("sName"));
getTop().osslogAjaxCompose(102);
getTop().osslogAjaxCompose(103);
_oSelfAttach.onmgrcomplete&&_oSelfAttach.onmgrcomplete.call(_oSelfAttach,_aoFile);
_oSelfAttach._moOnlineDoc.addFtnFile2OnlineDoc(_aoFile);
this._next(_aoFile);
}});
_oSelfAttach.oFileUploadMgr.initFileList=function(_aoFileData){
_oSelfAttach._addExistFileCell(this.setUploadData(_aoFileData));
};
},initFileUpload:function(_aoConfig){
var _oTop=getTop();
var _oSelfAttach=this;
var _oWin=_oSelfAttach._moWin;
var _oCompose=_oSelfAttach._moCompose;
var _oUploadMgr=_oSelfAttach.oFileUploadMgr;
_oTop.waitFor(function(){
return !!_oTop.QMFileUpload;
},function(_abIsOk){
if(_abIsOk)
{
_oTop.osslogAjaxCompose(100);
var _oUploadCallBacks={onselect:function(){
_oUploadMgr.oCfg.onselect.apply(_oUploadMgr,arguments);
},onprocess:function(){
},oncomplete:function(){
_oUploadMgr.oCfg.oncomplete.apply(_oUploadMgr,arguments);
},onerror:function(){
_oUploadMgr.oCfg.onerror.apply(_oUploadMgr,arguments);
}};
_oSelfAttach._moAttfldUpload=_oTop.QMFileUpload.create("base",_oUploadCallBacks);
_oSelfAttach._moPoupuUpload=_oTop.QMFileUpload.create("popup",_oTop.extend({oContainer:_aoConfig.oContainer,bMulti:false,sAcceptFileTypes:".doc, .docx, .xls, .xlsx"},_oUploadCallBacks));
if(getTop().goExpers.uploadunite===false)
{
if(/FlashPopup/.test(_oSelfAttach._moPoupuUpload.name))
{
var _oProxyData=_oTop["__UploadSvrProxy__"],_oCfg={};
_oCfg.sFlashMode=_aoConfig.sFlashMode||"RawPost";
if(!_oProxyData)
{
_oCfg.sFlashMode="RawPost";
_oSelfAttach._moPoupuUpload.initConfg(_oCfg);
_oTop.loadJsFile("//upload.mail.qq.com/proxyinfo.js",true,_oTop.document,function(){
_oProxyData=getTop()["__UploadSvrProxy__"];
if(_oProxyData&&_oProxyData.ip)
{
_oCfg.sUrl="http://"+_oProxyData.ip+"/cgi-bin/uploadfile";
_oCfg.sFlashMode="CheckPost";
_oSelfAttach._moPoupuUpload.initConfg(_oCfg);
}
},{},true);
}
else{
_oCfg.sUrl="http://"+_oProxyData.ip+"/cgi-bin/uploadfile";
_oSelfAttach._moPoupuUpload.initConfg(_oCfg);
}
}
}
}
});
},_checkExeAndZeroSize:function(_aoFiles,_afCallback){
var _oTop=getTop(),_oSelf=this,_oBigSizeErrors=[],_oZeroSizeErrors=[],_oFileInfoErrors=[],_oTypeErrors=[],_oLinkFileErrors=[],_oTmpFiles=[];
_oTop.E(_aoFiles,function(_aoFile){
var _nSize=_aoFile.get("nSize");
var _sName=_aoFile.get("sName");
if(_aoFile.get('sStatus')=='error')
{
_oLinkFileErrors.push(_sName);
_aoFile.destroy();
}
else if(_nSize===0)
{
_oZeroSizeErrors.push(_sName);
_aoFile.destroy();
}
else if(_nSize<0)
{
_oFileInfoErrors.push(_sName);
_aoFile.destroy();
}
else if(_nSize>_oSelf._mnSingleLimitSize)
{
_oBigSizeErrors.push(_sName);
_aoFile.destroy();
}
else if(!_oSelf._isInAllowTypes(_sName))
{
_oTypeErrors.push(_sName);
_aoFile.destroy();
}
else{
_oTmpFiles.push(_aoFile);
}
});
_aoFiles=_oTmpFiles;
if(_oZeroSizeErrors.length||_oFileInfoErrors.length||_oTypeErrors.length||_oLinkFileErrors.length||_oBigSizeErrors.length)
{
var _oTmpl=_oTop.T(['<div class="dialog_f_t">$title$</div>','<div class="dialog_f_d addrtitle" style="width:400px;max-height:160px;_white-space:nowrap;word-wrap:break-word; word-break:break-all; overflow:hidden; text-overflow:ellipsis;">$filelist$</div>']);
var _oErrorMsg=[];
if(_oZeroSizeErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u4EE5\u4E0B\u6587\u4EF6\u5927\u5C0F\u4E3A 0 \u5B57\u8282\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\u3002',filelist:_oTop.htmlEncode(_oZeroSizeErrors.join(", "))}));
}
if(_oFileInfoErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u4EE5\u4E0B\u6587\u4EF6\u8DEF\u5F84\u8BC6\u522B\u9519\u8BEF\u6216\u8D85\u51FA\u5927\u5C0F\u9650\u5236\u3002',filelist:_oTop.htmlEncode(_oFileInfoErrors.join(", "))}));
}
if(_oTypeErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u53EA\u652F\u6301\u5BFC\u5165doc docx xls xlsx\u6587\u4EF6',filelist:_oTop.htmlEncode(_oTypeErrors.join(", "))}));
}
if(_oLinkFileErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u4EE5\u4E0B\u6587\u4EF6\u5185\u5BB9\u8BFB\u53D6\u5931\u8D25\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u540E\u518D\u53D1\u9001',filelist:_oTop.htmlEncode(_oLinkFileErrors.join(", "))}));
}
if(_oBigSizeErrors.length)
{
_oErrorMsg.push(_oTmpl.replace({title:'\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC73M',filelist:_oTop.htmlEncode(_oBigSizeErrors.join(", "))}));
_oTop.showError("\u5355\u4E2A\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC73M");
return;
}
_oTop.alertBox({msg:_oErrorMsg.join('<div style="height: 8px; width:100%;"></div>'),title:"\u786E\u8BA4",onreturn:function(){
_afCallback(_aoFiles);
}});
}
else{
_afCallback(_aoFiles);
}
},_isInAllowTypes:function(_asName){
var _oSelf=this;
if(_oSelf._msAllowTypes&&_asName)
{
var _sExtname=_asName.split('.').pop().toLowerCase();
if(_sExtname==_asName.toLowerCase()||!(new RegExp('^('+_oSelf._msAllowTypes.join('|')+')$')).test(_sExtname))
{
return false;
}
}
return true;
},onmgrselect:function(_aoFiles,_afCallback){
var _oSelf=this;
var _oCompose=_oSelf._moCompose;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
function _fDestroyFiles()
{
_oTop.E(_aoFiles,function(_aoFile){
_aoFile.destroy();
});
}
_oSelf._checkExeAndZeroSize(_aoFiles,function(_aoFiles){
function _fAdds()
{
_oTop.E(_aoFiles,function(_aoFile){
_oSelf._addFileCell(_aoFile);
});
_afCallback(_aoFiles);
}
if(_aoFiles.length>=40)
{
getTop().showError("\u4E00\u6B21\u4E0D\u80FD\u9009\u62E9\u8D85\u8FC740\u4E2A\u6587\u4EF6");
return false;
}
if(_aoFiles[0].uploadToFtn)
{
_oTop.E(_aoFiles,function(_aoFile){
_aoFile.set("bUpToFtn",true);
_oSelf._addFileCell(_aoFile);
});
_afCallback(_aoFiles);
debug('switch upload to: '+(_aoFiles[0].oUploader?_aoFiles[0].oUploader.name:'undefined'));
}
else{
_fAdds();
}
});
},_addFileCell:function(_aoFile){
var _oSelfAttach=this;
var _oTop=getTop();
var _oCompose=_oSelfAttach._moCompose;
var _oWin=_oSelfAttach._moWin;
var _sName="Uploader"+_aoFile.get("sId");
var _oDiv=_oWin.document.createElement("div");
_oDiv.className="attsep";
_oDiv.id="D"+_sName;
_oDiv.innerHTML=this._getFileCellTmpl(_aoFile.get("sUploadMode")).replace({id:_aoFile.get("sId"),name:_sName,value:_oTop.htmlEncode(_aoFile.get("sName")),images_path:_oTop.getPath("image",true),ext:_aoFile.get("sUploadMode"),filename:_oTop.htmlEncode(_aoFile.get("sName")),dispfname:_insertWbr(_aoFile.get("sName")),size:_aoFile.get("nSize")||0,formatsize:this._formatSize(parseInt(_aoFile.get("nSize")||0)),mailattach:_aoFile.get("sUploadMode")=="collection"?[_aoFile.mailid,_aoFile.attachid,_aoFile.attachname].join("|"):"",ftn:_aoFile.get("bUpToFtn"),bOnlineAttach:_aoFile.get('bOnlineAttach'),loading2GifPath:_oTop.getRes('$images_path$webp/ico_loading21e9c5d.gif')});
_oSelfAttach.S("div_onlineAttach").appendChild(_oDiv);
_oTop.show(_oSelfAttach.S("attachContainer"),true);
_oCompose.setFileNameToSubject(_aoFile.get("sName"));
return this;
},edit:function(_aoTarget){
var _oSelfAttach=this,_sOnlineFileKey=_oTop.attr(_aoTarget,"onlineDocKey");
if(_sOnlineFileKey)
{
_oSelfAttach._moOnlineDoc.editDoc(_sOnlineFileKey);
}
},retryImport:function(_sAttachId,_sFileId,_sFileName){
var _oSelfAttach=this;
_oSelfAttach._moOnlineDoc.doAddFtnFile2OnlineDoc(_sAttachId,_sFileId,_sFileName);
},_getFileCellTmpl:function(_asMode){
var _oTmplSet=this._moTmplSet,_oTmpl;
if(_asMode=="exist_online_doc")
{
return getTop().TE(['<div class="addrtitle attsep" onlineDocKey="$sFileId$" id="$sFileId$" status="complete">','<span style="margin-right:5px;cursor:pointer" onlineDocKey="$sFileId$" onclick="QMOnlineAttach.edit(this)">','<input type="button" class="ico_editDoc_Small" style="margin-right:5px;" />','<span  class="black" >','<span ui-type="filename">$@$eval getTop().htmlEncode($sFileName$) $@$</span>','<span class="addrtitle">&nbsp;($@$eval getTop().QMFileUpload.oUtil.formatSize($sFileSize$) $@$)</span>','</span>','</span>','<a style="margin-right:5px;" onlineDocKey="$sFileId$" class="att_addpic att_editdoc" onclick="QMOnlineAttach.edit(this)" >\u7F16\u8F91</a>','<a onClick="delBigAttach(this)" class="att_del">\u5220\u9664</a>','</div>']);
}
else if(_asMode=="exist_big")
{
return getTop().TE(['<div class="addrtitle attsep" onlineDocKey="$sFileId$" id="eabig_$id$" status="" mode="$mode$" appid="$@$if(!$appid$)$@$2$@$else$@$$appid$$@$endif$@$">','<span id="span_$id$" style="margin-right:5px;cursor:pointer" onlineDocKey="" onclick="QMOnlineAttach.edit(this)" uploadid="$fid$" key="$key$" code="$code$" fid="$fid$" attachtype="big" filename="$@$html($filename$)$@$" style="margin-right: 5px;">','<a href="$downloadlink$"></a>','<input type="button" class="ico_editDoc_Small" style="margin-right:5px;" />','<input type="hidden" name="fid" value="$fid$" />','<span  class="black" expiretime="$exptime$">','<span ui-type="filename">$dispfname$</span>','<span class="addrtitle">&nbsp;($filesize$)</span>','</span>','</span>','<span style="color:#798699" id="a_load_$id$">\u5BFC\u5165\u4E2D','<img src="',_oTop.getRes('$images_path$webp/ico_loading21e9c5d.gif'),'" style="width:16px;height:15px;padding:0;border:none;margin: 0 3px 0 3px;vertical-align: text-bottom;">','</span>','<span id="a_error_$id$" class="upload_ctrl" ','style="display:none;color:red;margin-right:5px;cursor:default">','\u5BFC\u5165\u5931\u8D25','</span>','<a id="a_retry_$id$" style="display:none;margin-right:5px;" onclick="QMOnlineAttach.retryImport(\x27$id$\x27,\x27$fid$\x27,\x27$@$encodeURIComponent($dispfname$)$@$\x27)" class="att_reupl">\u91CD\u8BD5</a>','<a id="a_$id$" style="display:none;margin-right:5px;" onlineDocKey="" class="att_addpic att_editdoc" onclick="QMOnlineAttach.edit(this)" >\u7F16\u8F91</a>','<a onClick="delBigAttach(this)" class="att_del">\u5220\u9664</a>','</div>']);
}
else if(!_oTmpl)
{
var _oTmplCode=[];
_oTmplSet[_asMode]=_oTmpl=getTop().TE(_oTmplCode.concat(['<span id="A$name$" style="margin-right:5px;">','<input type="button" class="ico_editDoc_Small" ','style="margin-right:5px;" />','<input ext="$ext$" id="$name$" type="hidden" value="$value$" filename="$filename$" filesize="$size$" disabled>','<span class="black" ui-type="filename" id="S$name$" class="addrtitle">$dispfname$</span>&nbsp;<span id="SIZE$name$" name="$size$" class="addrtitle">($formatsize$)</span>','</span>','<span style="color:#798699" id="P$name$">\u5BFC\u5165\u4E2D','<img src="',_oTop.getRes('$images_path$webp/ico_loading21e9c5d.gif'),'" style="width:16px;height:15px;padding:0;border:none;margin: 0 3px 0 3px;vertical-align: text-bottom;">','</span>','<span id="E$name$" class="upload_ctrl" ','style="display:none;color:red;margin-right:5px;cursor:default">','\u5BFC\u5165\u5931\u8D25','</span>','<span id="CON$name$" class="upload_ctrl process" >','<a id="R$name$" style="display:none;margin-right:5px;" onclick="QMOnlineAttach.retryUpload(\x27$id$\x27)" class="att_reupl">\u91CD\u8BD5</a>','<a id="C$name$" style="display:none;margin-right:5px;" onclick="attachInsertFile(this.getAttribute(\x27fileid\x27));" class="att_addpic hidden">\u7F16\u8F91</a>','<a onclick="QMOnlineAttach.delAttach(\x27$name$\x27);return false" class="att_del">\u5220\u9664</a>','</span>']));
}
return _oTmpl;
},addExistOnlineDoc:function(_aoData){
var _oSelfAttach=this;
var _oCompose=_oSelfAttach._moCompose;
var _oOnlineAttachDom=_oSelfAttach.S("div_onlineAttach");
if(_aoData.oFiles&&_aoData.oFiles.length>0)
{
_oTop.show(_oSelfAttach.S("attachContainer"),true);
}
;_oTop.E(_aoData.oFiles,function(_aoAttach){
if(_oTop.S(_aoAttach.sFileId,_oSelfAttach._moWin))
{
return;
}
_oCompose.setFileNameToSubject(_aoAttach.sFileName);
_oTop.insertHTML(_oOnlineAttachDom,'beforeEnd',_oSelfAttach._getFileCellTmpl("exist_online_doc").replace(_aoAttach));
});
},isUploading:function(){
var _oSelfAttach=this;
if(_oSelfAttach.oFileUploadMgr.isUploading())
{
return true;
}
var _oOnlineAttachDom=_oSelfAttach.S("div_onlineAttach"),_bIsUploading=false;
if(_oOnlineAttachDom)
{
var os=_oOnlineAttachDom.childNodes;
for(var i=0,len=os.length;i<len;i++)
{
if(os[i].nodeType==1&&_oTop.isShow(os[i])&&!_oTop.attr(os[i],"status"))
{
_bIsUploading=true;
break;
}
}
}
return _bIsUploading;
},hasUploadError:function(){
var _oSelfAttach=this;
if(_oSelfAttach._getTotalStatusAttachLength("error")!=0)
{
return true;
}
var _oOnlineAttachDom=_oSelfAttach.S("div_onlineAttach"),_bHasError=false;
if(_oOnlineAttachDom)
{
var os=_oOnlineAttachDom.childNodes;
for(var i=0,len=os.length;i<len;i++)
{
if(os[i].nodeType==1&&_oTop.isShow(os[i])&&_oTop.attr(os[i],"status")=="error")
{
_bHasError=true;
break;
}
}
}
return _bHasError;
},getOnlineAttachIds:function(){
var _oSelfAttach=this,_oOnlineAttachDom=_oSelfAttach.S("div_onlineAttach"),_oOnlineAttachIds=[],_sOnlineAttachId;
if(_oOnlineAttachDom)
{
var os=_oOnlineAttachDom.childNodes;
for(var i=0,len=os.length;i<len;i++)
{
if(os[i].nodeType==1&&_oTop.isShow(os[i])&&_oTop.attr(os[i],"status")=="complete")
{
_sOnlineAttachId=_oTop.attr(os[i],"onlineDocKey");
_sOnlineAttachId&&_oOnlineAttachIds.push(_sOnlineAttachId);
}
}
}
return _oOnlineAttachIds;
}};
});
function QMOnlineDoc(_aoCompose,_aoWin)
{
this._moWin=_aoWin;
this._moCompose=_aoCompose;
this._moOnlineAttach=new QMOnlineAttachMain(_aoCompose,_aoWin,this);
}
;QMOnlineDoc.prototype={addFtnFile2OnlineDoc:function(_aoFtnFile){
var _oSelf=this;
if(_oSelf._moOnlineAttach._moPoupuUpload.getUploadingCnt()==0&&!(_oTop.QMDialog.get("addOnlineDocInComposePage").isShow()))
{
_oTop.QMDialog.get("addOnlineDocInComposePage").close();
}
_oSelf.doAddFtnFile2OnlineDoc(_aoFtnFile.get("sId"),_aoFtnFile.get("sFileId"),_aoFtnFile.get("sName"));
},doAddFtnFile2OnlineDoc:function(_sAttachId,_sFileId,_sFileName){
var _oSelf=this;
var _nTotalTimes=5,_nIndex=0;
_oTop.attr(_oTop.S("eabig_"+_sAttachId,_oSelf._moWin),"status","");
_oTop.show(_oTop.S("a_load_"+_sAttachId,_oSelf._moWin),true);
_oTop.show(_oTop.S("a_error_"+_sAttachId,_oSelf._moWin),false);
_oTop.show(_oTop.S("a_retry_"+_sAttachId,_oSelf._moWin),false);
_oTop.QMAjax.send("/cgi-bin/docedit_new?t=online_doc.json",{content:_oTop.T("fun=import&fid=$sFileId$&filename=$sFileName$").replace({sFileId:_sFileId,sFileName:encodeURIComponent(_sFileName)}),method:"POST",onload:function(_abIsOk,_asParam){
_oSelf.checkError(_abIsOk,_asParam,function(_oResult){
if(_oResult.ret=="0")
{
checkImport(_oResult.oFileInfo.sFileId);
}
else{
onerror();
}
},function(){
onerror();
});
}});
function checkImport(_asFileId)
{
if(_nIndex>_nTotalTimes)
{
onerror(_asFileId);
return;
}
setTimeout(function(){
_oTop.QMAjax.send("/cgi-bin/docedit_new?t=online_doc.json",{content:_oTop.T("fun=check&key=$sFileId$").replace({sFileId:_asFileId}),method:"POST",onload:function(_abIsOk,_asParam){
_oSelf.checkError(_abIsOk,_asParam,function(_oResult){
if(_oResult.ret=="1")
{
checkImport(_asFileId);
}
else if(_oResult.ret=="0")
{
_oTop.attr(_oTop.S("eabig_"+_sAttachId,_oSelf._moWin),"status","complete");
_oTop.attr(_oTop.S("eabig_"+_sAttachId,_oSelf._moWin),"onlineDocKey",_asFileId);
_oTop.attr(_oTop.S("eabig_"+_sAttachId,_oSelf._moWin),"id",_asFileId);
_oTop.attr(_oTop.S("span_"+_sAttachId,_oSelf._moWin),"onlineDocKey",_asFileId);
_oTop.attr(_oTop.S("a_"+_sAttachId,_oSelf._moWin),"onlineDocKey",_asFileId);
_oTop.show(_oTop.S("a_load_"+_sAttachId,_oSelf._moWin),false);
_oTop.show(_oTop.S("a_"+_sAttachId,_oSelf._moWin),true);
_logKVOnlineDoc("import_fromcompose");
}
else{
onerror(_asFileId);
}
},function(){
checkImport(_asFileId);
});
}});
_nIndex++;
},1000);
}
function onerror(_asFileId)
{
_oTop.attr(_oTop.S("eabig_"+_sAttachId,_oSelf._moWin),"status","error");
_oTop.show(_oTop.S("a_load_"+_sAttachId,_oSelf._moWin),false);
_oTop.show(_oTop.S("a_error_"+_sAttachId,_oSelf._moWin),true);
_oTop.show(_oTop.S("a_retry_"+_sAttachId,_oSelf._moWin),true);
_oTop.QMAjax.send("/cgi-bin/docedit_modify?t=online_doc.json",{content:_oTop.TE(["func=del&key=$sFileId$",'$@$if($force$)$@$','&force=$force$','$@$endif$@$']).replace({sFileId:_sFileId,force:true}),method:"POST",onload:function(_abIsOk,_asParam){
}});
return;
}
},checkSupport:function(_asTitle){
if(_oTop.gbIsIE)
{
new (_oTop.QMDialog)({sTitle:_asTitle||"\u6DFB\u52A0\u5728\u7EBF\u6587\u6863",sBodyHtml:_oTop.TE(['<div style="height:401px">','<div id="" class="ftn_empty" style="padding:60px 0;margin-top:80px;font-size:14px;line-height:20px;color:#000;text-align:center;font-weight: normal;">','\u5728\u7EBF\u6587\u6863\u6682\u4E0D\u652F\u6301IE\u6D4F\u89C8\u5668\u3002</br>\u5EFA\u8BAE\u4F60\u4F7F\u7528Chrome\u6216\u8005\u5B89\u88C5\u9002\u914D\u66F4\u597D\u7684QQ\u6D4F\u89C8\u5668\u3002','<a href="http://dldir1.qq.com/invc/tt/QQBrowser_Setup_Email_login.exe" target="_blank">\u7ACB\u5373\u5B89\u88C5</a>','</div>','</div>']).replace({}),nWidth:440,nHeight:437,onshow:function(){
},onclose:function(){
}});
return false;
}
return true;
},showAddOnlineDocDlg:function(){
var _oSelf=this,_oOnlineAttach=_oSelf._moOnlineAttach,_oAddOnlineDocDlg;
if(!_oSelf.checkSupport())
{
return;
}
if(_oAddOnlineDocDlg=_oTop.QMDialog.get("addOnlineDocInComposePage"))
{
_oAddOnlineDocDlg.max();
return _oAddOnlineDocDlg;
}
;return new (_oTop.QMDialog)({sId:"addOnlineDocInComposePage",sTitle:"\u6DFB\u52A0\u5728\u7EBF\u6587\u6863",sBodyHtml:_oTop.TE(['<div style="height:401px">','<div class="onlineDoc_new_btnGroup onlineDoc_new_btnGroup_2col">','<a id="a_create_doc_btn"   ck="addNew" filetype="word" href="javascript:;" class="onlineDoc_new_btn onlineDoc_new_btn_word"><span class="onlineDoc_icon onlineDoc_icon_Word"></span>\u6587\u6863</a>','<a id="a_create_exl_btn"   ck="addNew" filetype="excel" href="javascript:;" class="onlineDoc_new_btn onlineDoc_new_btn_excel"><span class="onlineDoc_icon onlineDoc_icon_Excel"></span>\u8868\u683C</a>','<a id="a_select_exist_btn" ck="selectExist" filetype="excel" href="javascript:;" class="onlineDoc_new_btn onlineDoc_new_btn_import"><span class="onlineDoc_icon onlineDoc_icon_Add"></span>\u4ECE\u5728\u7EBF\u6587\u6863\u4E2D\u9009\u62E9</a>','<a id="a_upload_btn" href="javascript:;" class="onlineDoc_new_btn onlineDoc_new_btn_import"><span class="onlineDoc_icon onlineDoc_icon_Import"></span>\u5BFC\u5165\u6587\u6863\u6216\u8868\u683C</a>','</div>','</div>']).replace({}),nWidth:440,nHeight:437,onshow:function(){
var _oDlg=this;
_oOnlineAttach.initFileUpload({oContainer:_oDlg.S("a_upload_btn")});
_oTop.liveEvent(_oDlg.S("_content_"),{rule:function(){
return {click:{"addNew":{bPropagable:false},"selectExist":{bPropagable:false}}};
},events:function(){
return {"addNew":function(_aoEvent,_aoTarget){
var _sFileType=_oTop.attr(_aoTarget,"filetype");
_oDlg.close();
_oTop.QMAjax.send("/cgi-bin/docedit_new?t=online_doc.json",{content:_oTop.T("fun=create&filetype=$filetype$").replace({filetype:_sFileType}),method:"POST",onload:function(_abIsOk,_asParam){
_oSelf.checkError(_abIsOk,_asParam,function(_oResult){
_oSelf.showNewDocDetailDlg(_oTop.extend(_oResult.oFileInfo));
_logKVOnlineDoc(["new_",_sFileType,"_fromcompose"].join(""));
},function(){
_oTop.showError("\u65B0\u589E\u6587\u6863\u5931\u8D25");
});
}});
},selectExist:function(_aoEvent,_aoTarget){
_oDlg.close();
return new (_oTop.QMDialog)({sId:"selectExistOnlineDocInComposePage",sTitle:"\u4ECE\u5728\u7EBF\u6587\u6863\u4E2D\u9009\u62E9",sUrl:"/cgi-bin/docedit_list?t=online_doc_select&page=0&sid="+_oTop.getSid(),nWidth:467,nHeight:476,onshow:function(){
},onclose:function(){
}});
}};
}});
},onclose:function(){
}});
},editDoc:function(_asOnlineDocKey){
var _oSelf=this;
if(!_oSelf.checkSupport("\u5728\u7EBF\u6587\u6863"))
{
return;
}
_oTop.QMAjax.send("/cgi-bin/docedit_read?t=online_doc.json",{content:_oTop.T("key=$sFileId$").replace({sFileId:_asOnlineDocKey}),method:"POST",onload:function(_abIsOk,_asParam){
_oSelf.checkError(_abIsOk,_asParam,function(_oResult){
_oSelf.showDetailDlg({sDlgTitle:"\u5728\u7EBF\u6587\u6863",sDlgBtnDesc:"\u4FDD\u5B58"},_oResult.oFileInfo);
},function(){
_oTop.showError("\u7F16\u8F91\u5728\u7EBF\u6587\u6863\u5931\u8D25");
});
}});
},showDetailDlg:function(_aoConfig,_aoFile){
var _oSelf=this;
var _oDialog=new (_oTop.QMDialog)({sId:"editOnlineDocInComposePage",sTitle:_aoConfig.sDlgTitle||"\u6DFB\u52A0\u5728\u7EBF\u6587\u6863",sBodyHtml:_oTop.TE(['<div style="position:absolute;top:36px;bottom:39px;left:0;right:0;">','<iframe style="display:block;width:100%;height: 100%;border:none;" src="$sOnlineEditUrl$"></iframe>','<div class="dialog_operate">','<a id="a_addDoc" ck="addDoc" key="$sFileId$" class="btn_blue btn_space" hidefocus="" href="javascript:;">',_aoConfig.sDlgBtnDesc||"\u6DFB\u52A0",,'</a>','</div>','</div>']).replace(_aoFile),bDraggable:false,nX:"auto",nY:"auto",sClassName:"newOnlineDocDialog",onload:function(){
var _oDialog=this;
_oTop.liveEvent(_oDialog.S("_content_"),{rule:function(){
return {click:{"addDoc":{bPropagable:false}}};
},events:function(){
return {"addDoc":function(_aoEvent,_aoTarget){
var _sFileId=_aoFile.sFileId,_sIsNew=_aoConfig.bIsNew;
if(_sIsNew)
{
_oTop.QMAjax.send("/cgi-bin/docedit_modify?t=online_doc.json",{content:_oTop.TE(["func=add&key=$sFileId$"]).replace({sFileId:_sFileId}),method:"POST",onload:function(_abIsOk,_asParam){
_oSelf.checkError(_abIsOk,_asParam,function(_oResult){
doAdd();
},function(){
_oTop.showError("\u4FDD\u5B58\u5931\u8D25");
});
}});
}
else{
doAdd();
}
}};
}});
},onclose:function(){
if(!_aoConfig.bIsNew)
{
doAdd();
}
}});
function doAdd()
{
_oTop.QMAjax.send("/cgi-bin/docedit_read?t=online_doc.json",{content:_oTop.T("key=$sFileId$").replace({sFileId:_aoFile.sFileId}),method:"POST",onload:function(_abIsOk,_asParam){
_oSelf.checkError(_abIsOk,_asParam,function(_oResult){
if(_aoConfig.bIsNew)
{
_oSelf._moOnlineAttach.addExistOnlineDoc({oFiles:[_oResult.oFileInfo]});
}
else{
_oTop.replaceHTML(_oTop.S(_aoFile.sFileId,_oSelf._moWin),_oSelf._moOnlineAttach._getFileCellTmpl("exist_online_doc").replace(_oResult.oFileInfo));
}
_oDialog.close();
},function(){
_oTop.showError("\u4FDD\u5B58\u5931\u8D25");
});
}});
}
return _oDialog;
},showNewDocDetailDlg:function(_aoFile){
var _oSelf=this;
_oSelf.showDetailDlg({sDlgTitle:"\u6DFB\u52A0\u5728\u7EBF\u6587\u6863",sDlgBtnDesc:"\u6DFB\u52A0",bIsNew:true},_aoFile);
},initOnlineDocData:function(){
},checkError:function(_abIsOk,_asParam,afSucc,afErr){
if(_abIsOk)
{
try{
if(_asParam.indexOf("<!--cgi exception-->")>-1&&_asParam.indexOf("<!--cgierrorcode:-2-->")>-1)
{
_oTop.goUrl(_oTop,[_oTop.location.protocol,"//",_oTop.location.hostname,"/cgi-bin/loginpage"].join(""));
return;
}
if(_asParam.indexOf("<!--cgi exception-->")>-1&&_asParam.indexOf("<!--cgierrorcode:-404-->")>-1)
{
_oTop.showError("\u6587\u6863\u5DF2\u88AB\u5220\u9664");
return;
}
var _oResult=_oTop.evalValue(_asParam);
afSucc(_oResult);
}
catch(e)
{
afErr&&afErr();
}
}
else{
afErr&&afErr();
}
}};
function QMProcess(_aoCompose)
{
this._moCompose=_aoCompose;
this._init();
}
QMProcess.prototype={_init:function(){
this._initVar();
this._initWinFunc();
},_initVar:function(){
this._nCurrentProcessId=00;
this._nSubmitRetry=0;
},_initWinFunc:function(){
var _oProcess=this;
var _oCompose=_oProcess._moCompose;
var _oWin=_oCompose.getWin();
getTop().E(['doProcess','doProcessCheck'],function(_asMethod){
_oWin[_asMethod]=function(){
return _oProcess[_asMethod].apply(_oProcess,arguments);
};
});
_oWin.doVerifySubmit=function(){
_oProcess.doProcess('',{card:"card",urlcreator:"save"}[_oCompose.getPageId()]||"send",false,false,99);
};
},S:function(_asId){
return this._moCompose.S(_asId);
},doProcess:function(_asTemplate,_asAction,_abNotAc,_abNotShowSendDialog,_anCheckStartStep,_afProcessCheckCallback){
var _oProcess=this;
var _oCompose=_oProcess._moCompose;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oTop=getTop();
_oTop.osslogAjaxCompose(7);
_oProcess._doProcessSafe(_asTemplate,_asAction,function(){
_oProcess._nCurrentProcessId=00;
if(_oTop.isDisableCtl("sendbtn",_oWin))
{
return;
}
_oProcess._nCurrentProcessId=10;
if(!_oProcess.doProcessCheck(_asTemplate,_asAction,_anCheckStartStep||0,function(_anCurStep){
_oProcess.doProcess(_asTemplate,_asAction,_abNotAc,_abNotShowSendDialog,_anCurStep,_afProcessCheckCallback);
}))
{
return;
}
if(_oCompose._mnHoverCnt)
{
_oTop.ossLog('delay','all','stat=sgkv&group=composelochover&cnt='+_oCompose._mnHoverCnt);
_oCompose._mnHoverCnt=0;
}
var _bPreventProcessCheckCallback=false;
_oProcess._nCurrentProcessId=20;
_oCompose._disableAutoSave();
var _oVfrm=_oCompose._getSubmitForm();
_oVfrm.target="actionFrame";
_oProcess._nCurrentProcessId=25;
var _sContent="",_oEditor=_oCompose.getPageEditor();
if(!_oEditor)
{
if(_oWin.GetSendContent)
{
_sContent=_oWin.GetSendContent(_asTemplate,_asAction,_abNotAc,_abNotShowSendDialog,_anCheckStartStep);
}
else{
throw {message:"\u65E0\u6CD5\u83B7\u53D6\u7F16\u8F91\u5668"};
}
}
else{
_oCompose._fixQQMailStationery("100%");
if(_oEditor.getContentTags("sign")[0]&&_oEditor.getContentTags("sign").length>=1)
{
var _oSigns=_oEditor.getContentTags("sign"),_oEditorDoc=_oEditor.getEditDoc(),_bSendMail=_asTemplate===""&&_asAction==="send",_bSaveDraft=_asTemplate==="savedraft"&&_asAction==="save",_sInnerHtml,_oTmpDiv;
for(var i=_oSigns.length-1;i>=0;i--)
{
if(_bSendMail||(_bSaveDraft&&_oSigns[i].getAttribute("nreadytime")!=_oEditor.getReadyTimeStamp()))
{
_sInnerHtml=_oSigns[i].innerHTML;
_oTop.insertHTML(_oSigns[i],"afterEnd",_sInnerHtml);
_oTop.removeSelf(_oSigns[i]);
}
}
}
if(_asTemplate!="autosave")
{
var _bRet=true,_oEditor=_oCompose.getPageEditor();
if(_oEditor.isRunningShareLink()||_oEditor.hasTODOShareLink())
{
_oProcess._nCurrentProcessId=28;
_oTop.showError("\u8BF7\u5728\u7F51\u76D8\u6587\u4EF6\u6DFB\u52A0\u5B8C\u6210\u540E\u518D\u53D1\u9001\u90AE\u4EF6");
_bRet=false;
}
else if(_oEditor.shareLinkErrorCnt())
{
_oTop.confirmBox({msg:_oEditor.shareLinkErrorCnt()+" \u4E2A\u7F51\u76D8\u6587\u4EF6\u6DFB\u52A0\u5931\u8D25\uFF0C\u5C06\u4ECE\u6B63\u6587\u4E2D\u5220\u9664\u3002\u60A8\u786E\u5B9A\u7EE7\u7EED\u53D1\u9001\uFF1F",onreturn:function(_abIsOk){
_oProcess._nCurrentProcessId=29;
if(_abIsOk)
{
_oEditor.rmNetDiskAction();
_oProcess.doProcess(_asTemplate,_asAction,_abNotAc,_abNotShowSendDialog,_anCheckStartStep);
}
}});
_bRet=false;
}
if(!_bRet)
{
_oTop.cancelDoSend();
return false;
}
}
_oProcess._nCurrentProcessId=30;
if(_asTemplate!="savedraft"&&_asAction!="save")
{
_oEditor.rmNetDiskID();
}
_sContent=_oEditor.getContent();
if(typeof (_oTop.getMainWin().filteraudio)=="function"&&_oCompose.getPageId()=="note")
{
_sContent=_oTop.getMainWin().filteraudio(_sContent);
}
_oEditor.getContentType()=="text"&&_sContent.substring(_sContent.length-4,_sContent.length)=="<br>"&&(_sContent=_sContent.substring(0,_sContent.length-4));
_oCompose._fixQQMailStationery(_oTop.gbIsIE?"auto":"100%");
try{
_oCompose.getInputObj("content_compare",null,true).value=_sContent;
}
catch(_oError)
{
}
_sContent=QMClipImg.clear(_oTop.filteSignatureTag(filterSourceContent(_sContent),"FILTE<:"));
}
if(_sContent==null)
{
throw {message:"\u65E0\u6CD5\u83B7\u53D6\u7F16\u8F91\u5668\u5185\u5BB9"};
}
_oProcess._nCurrentProcessId=31;
if(_asAction=="voice")
{
_sContent=_oWin.CombineVoiceMail(_sContent,_oProcess.S("voiceid").value,_oProcess.S("voicename").value);
_oWin.DisableRecord();
}
_oProcess._nCurrentProcessId=32;
if(_oEditor&&_oEditor.getBgMusicInfo())
{
_sContent=_oCompose._combineBgMusicMail(_sContent,_oEditor.getBgMusicInfo());
}
_oProcess._nCurrentProcessId=32;
_asAction!='save'&&_oTop.audioStop();
_oProcess._nCurrentProcessId=33;
_oTop.disableAll(true,_oWin);
_oProcess._nCurrentProcessId=34;
try{
_asTemplate!=null?_oVfrm.t.value=_asTemplate:null;
}
catch(e)
{
var _oInputTemp=_oWin.document.createElement('input');
_oInputTemp.id='t';
_oInputTemp.name='t';
_oInputTemp.value=_asTemplate;
_oVfrm.appendChild(_oInputTemp);
_oTop.LogKV({sValue:'compose_send|error|t_input_miss'});
}
_oVfrm.actiontype.value=_asAction;
_oTop.isSaveData=false;
_oProcess._nCurrentProcessId=35;
function _doHandleBigAttach()
{
var _oBigAttachFileInfos=[];
var _sBACode="",_sReplyBaCode="",_bNeedReplyCode=false,_nBigAttachCnt=0,_globalFileType=new RegExp("bmp|doc|eml|exl|gif|html|jpg|mov|pdf|ppt|psd|rar|swf|tu|txt"),_tBigAttachList=_oTop.TE(['<div style="padding:10px 0;font-size:12px;">','<div title="%filename%&#10;&#13;\u6587\u4EF6\u5927\u5C0F\uFF1A%filesize%&#10;&#13;\u5230\u671F\u65F6\u95F4\uFF1A%expiredtimeString%" class="bigatt_bt">','<div style="float:left;margin:2px 8px 0 0;">','<a target="_blank" href="%downloadlink%"><img border="0" src="http://res.mail.qq.com/zh_CN/htmledition/images/fj/fu_%filetype%.gif"/></a>','</div>','<div class="name_big" >','<span class=\'qqmailbgattach\' expiretime="%expiretime%" downloadlink="%downloadlink%" %@%if(%appid%)%@%appid="%appid%"%@%endif%@% %@%if(%mode%)%@%mode="%mode%"%@%endif%@%>','<a style="color:#000;" target="_blank" href="%downloadlink%">%filename%</a><span style="color:#A0A0A0;"> (%filesize%, %expiredtimeDesc%)</span>','</span>','<div class="down_big">','<a target="_blank" href="%downloadlink%">\u8FDB\u5165\u4E0B\u8F7D\u9875\u9762</a><span style="display:none;">\uFF1A%downloadlink%</span>','</div>','</div>','</div>','</div>'],"%");
function _getBigAttachCode(_asDomName)
{
if(_oProcess.S(_asDomName))
{
var os=_oProcess.S(_asDomName).childNodes,_bIsReply=_asDomName=="exist_BigAttach"?true:false;
for(var i=0,len=os.length;i<len;i++)
{
if(os[i].nodeType==1&&_oTop.isShow(os[i])&&!_oTop.GelTags("div",os[i]).length)
{
var _sTmpCode="",_oSpan=_oTop.GelTags("span",os[i])[1],_oLinker=_oTop.GelTags("a",os[i])[0].href;
var _oSpanChildNodes=_oTop.GelTags("span",_oSpan);
var _nExpiretime=parseInt(_oSpan.getAttribute("expiretime"));
var _sFileName=_oSpanChildNodes[0].innerText||_oSpanChildNodes[0].textContent||"",_sFileType=_sFileName.split(".").pop();
var _oSizeSpanNode=_oTop.finds("span.addrtitle",_oSpan)[0];
var _oFileSize=/\(\s*(?:([^,\s]+)\s*|(\S*)\s*,.*|(\S*\sB)yte\s*,.*)\)/ig.exec(_oSizeSpanNode.innerHTML);
var _sFileSize=_oFileSize&&_oFileSize.length>3&&(_oFileSize[1]||_oFileSize[2]||_oFileSize[3].replace(/\s/ig,""))||"1K",_sMode=_oTop.attr(os[i],"mode"),_nAppId=_oTop.attr(os[i],"appid"),_sExpiretimeStr=_nExpiretime>0?_oTop.formatDate(new Date(_nExpiretime*1000),"$YY$\u5E74$MM$\u6708$DD$\u65E5 $hh$:$mm$"):'';
var _oFileInfo={mode:(_sMode!="replaybigattach"&&_sMode)||'',filename:_oTop.htmlEncode(_sFileName),filesize:_sFileSize,filetype:_sFileType,expiretime:_nExpiretime,expiredtimeString:_nExpiretime==-1?"\u65E0\u9650\u671F":_sExpiretimeStr,expiredtimeDesc:_nExpiretime==-1?"\u65E0\u9650\u671F":_sExpiretimeStr+" \u5230\u671F",downloadlink:_oLinker,appid:_nAppId};
_oBigAttachFileInfos.push(_oFileInfo);
if(!_globalFileType.test(_sFileType))
{
_sFileType="qita";
}
if(_oEditor&&_oEditor.getContentType()=="text")
{
_sTmpCode+=(_oSpan.innerText||_oSpan.textContent)+(_nExpiretime==-1?"":" (\u6709\u6548\u65F6\u95F4\u5230: "+_sExpiretimeStr+")")+"\n\u94FE\u63A5: "+_oLinker+"\n\n";
}
else{
_sTmpCode+=_tBigAttachList.replace(_oFileInfo);
}
if(!_bIsReply)
{
_sBACode+=_sTmpCode;
}
_sReplyBaCode+=_sTmpCode;
_nBigAttachCnt++;
}
}
if(os.length>0&&_oCompose.getInputObj("newrcpt",null,false).value)
{
_bNeedReplyCode=true;
}
}
}
_getBigAttachCode("ResumeWorks");
_getBigAttachCode("BigAttach");
_getBigAttachCode("exist_BigAttach");
if(_nBigAttachCnt>0&&_oVfrm.bigattachcnt)
{
_oVfrm.bigattachcnt.value=_nBigAttachCnt;
}
_oProcess._nCurrentProcessId=50;
function _setBigAttachValue(_asDomName,_asCode)
{
if(_asCode)
{
var _oBigAttachTmpl=_oTop.T(['<div id=QQMailBigAttach style="padding: 2px; margin-bottom: 15px;background-color:#E0ECF9;width:auto;font-family:Verdana,Arial,Tahoma;font-size:14px;" >','<hr style="display:none;" />','<div style="text-align:left;padding: 6px 0pt 10px 6px;">','<b style="font-size: 14px;"><img border="0" align="absmiddle" style="margin-right:4px;" src="http://res.mail.qq.com/zh_CN/htmledition/images/icon_att.gif"/>\u4ECE%domain%\u90AE\u7BB1\u53D1\u6765\u7684\u8D85\u5927\u9644\u4EF6</b>','</div>','<div style="padding: 0pt 8px 6px 12px;background:#fff;">','<div style="clear:both;">%bigattachlist%</div>','</div>','</div>'],"%");
var _sBAMsg="";
var _sDomain=_oTop.getDomain()=="qq.com"?"QQ":"foxmail.com";
var _bOnlyTextContent=_oEditor&&_oEditor.getContentType()=="text";
if(_bOnlyTextContent)
{
_sBAMsg="\u4EE5\u4E0B\u6587\u4EF6\u901A\u8FC7"+_sDomain+"\u90AE\u7BB1\u7684\u4E2D\u8F6C\u7AD9\u53D1\u7ED9\u60A8\u3002\u4FDD\u5B58\u65F6\u95F4\u6709\u9650\u5236\uFF0C\u8BF7\u53CA\u65F6\u63D0\u53D6\u3002";
_oCompose.getInputObj(_asDomName,null).value="\n\n\n"+new Array(60).join("-")+"\n"+_sBAMsg+"\n"+_asCode;
}
else{
_oCompose.getInputObj(_asDomName,null).value=_oBigAttachTmpl.replace({domain:_sDomain,bigattachlist:_asCode});
}
}
else{
_oCompose.getInputObj(_asDomName,null).value="";
}
}
_setBigAttachValue("bigattachcontent",_sBACode);
_bNeedReplyCode&&_setBigAttachValue("replybigattachcontent",_sReplyBaCode);
return _oBigAttachFileInfos;
}
;function _doHandleOnlineAttach()
{
try{
_oCompose.getInputObj("dockey",null).value=(_oCompose.moOnlineDoc&&_oCompose.moOnlineDoc._moOnlineAttach&&(_oCompose.moOnlineDoc._moOnlineAttach.getOnlineAttachIds().join("|"))||"");
}
catch(e)
{
}
}
function _doRealSendProcess()
{
var _oWin=_oCompose.getWin(),_bIsText=((_oEditor&&(((_oEditor.getContentType&&_oEditor.getContentType())=="text")||(_oEditor._msEditCore=="txt")))||false),_bIsSend=(_asTemplate===""&&_asAction==="send");
_oProcess._nCurrentProcessId=60;
_oAttach.setUpAttInput();
_oProcess._nCurrentProcessId=65;
var _oBigAttachFileInfos=_doHandleBigAttach();
_doHandleOnlineAttach();
if(_oBigAttachFileInfos&&_oBigAttachFileInfos.length)
{
var _nBigAttachTotalSize=0;
var _bAttachSigleToBigger=false;
_oTop.E(_oBigAttachFileInfos,function(_aoFileInfo){
var _nSize=_oAttach.unFormatSize(_aoFileInfo.filesize);
if(_nSize>_oAttach.getAttachSingleLimit())
{
_bAttachSigleToBigger=true;
}
_nBigAttachTotalSize+=_nSize;
});
if(!_bAttachSigleToBigger&&_oAttach.getAttachSize()+_nBigAttachTotalSize<=_oAttach.getAttachLimit())
{
_oTop.LogKV('bigattach|can_use_attach');
}
}
_oProcess._nCurrentProcessId=70;
_sContent=_oTop.fixNonBreakSpace(_sContent);
if(QMCharCode.hasNonGbkChar(_sContent))
{
_abNotAc=true;
_oCompose.getInputObj("sendcharset").value="utf-8";
}
_oCompose._mbHasLoc=false;
if(!_bIsText)
{
_oCompose.fClearLocationTips&&(_sContent=_oCompose.fClearLocationTips(_sContent));
if(_oCompose.fLocationStyleFilter)
{
if(_sContent.indexOf('js_location_string')>-1)
{
_oCompose._mbHasLoc=true;
}
var _sTmpContent=_oCompose.fLocationStyleFilter(_sContent);
if(_sContent!=_sTmpContent)
{
_sContent=_sTmpContent;
}
}
if(_oEditor&&_oEditor.getContentByHasMapWarpLink&&_bIsSend)
{
_sContent=_oEditor.getContentByHasMapWarpLink(_sContent);
}
if(_oEditor&&_oEditor.getBgMusicInfo&&_oEditor.getBgMusicInfo()&&_bIsSend)
{
_oTop.LogKV('insertmusic|musicmailsend|kv');
}
}
_oVfrm.content.value=_sContent;
_oProcess._nCurrentProcessId=71;
if(_asAction=="voice"||_asAction=="send"||(_asAction=="card"&&_asTemplate==""))
{
_oProcess._nCurrentProcessId=72;
if(_asAction=="card")
{
if(!_oWin.CheckHasSetCard())
throw {message:_oTop.gsMsgNoCard,clrcache:false};
_oWin.ComposeCard(_sContent);
}
_oVfrm.actiontype.value="send";
_oProcess._nCurrentProcessId=73;
if(_oCompose.getPageId()=="note")
{
_oTop.showProcess(1,1,"\u8BB0\u4E8B\u4FDD\u5B58\u4E2D");
}
else{
var _sSendMsg=["<img src='",_oTop.getPath("image"),"newicon/a_send.gif' width='14px' height='14px' align='absmiddle'>&nbsp;",_oTop.gsMsgSend].join("");
_oTop.showProcess(1,false,_sSendMsg);
}
_oProcess._nCurrentProcessId=74;
if(_oCompose.getPageId()!="note"&&_oVfrm.action.indexOf("/cgi-bin/compose_send")!=-1)
{
_oTop.gSendTimeStart=new Date();
try{
var _oExistList=_oAttach.getExistList(),_oTimeObj={cgitm:_oTop.g_cgiTimeStamp||0,clitm:_oTop.g_clientTimeStamp||0,comtm:_oTop.gSendTimeStart.valueOf(),logattcnt:_oExistList.length,logattsize:_oAttach.getAttachSize(),logattmethod:_oExistList.length?_oExistList[_oExistList.length-1].sUploadMode:""};
for(var k in _oTimeObj)
{
var _oInput=_oWin.document.createElement("input");
_oInput.type="hidden";
_oInput.name=k;
_oInput.value=_oTimeObj[k];
_oVfrm.appendChild(_oInput);
}
}
catch(e)
{
}
}
_oProcess._nCurrentProcessId=75;
}
else{
_oTop.isSaveData=true;
if(_asTemplate=="savedraft")
{
if(_asAction=="card")
{
if(!_oWin.CheckHasSetCard())
{
throw {message:_oTop.gsMsgNoCard};
}
_oWin.ComposeCard(_sContent);
}
_oTop.showProcess(1,1,_oTop.gsMsgAutoSave);
}
else{
_oTop.showProcess(1,1,_oCompose.getPageId()=="note"?"\u8BB0\u4E8B\u6B63\u5728\u88AB\u4FDD\u5B58":_oTop.gsMsgAutoSave);
}
}
_oProcess._nCurrentProcessId=80;
_oTop.isUseActiveXCompose=false;
if(_oTop.gbIsOpera)
{
var _oInput=_oWin.document.createElement("input");
_oInput.type="hidden";
_oInput.name="random";
_oInput.value=Math.random();
_oVfrm.appendChild(_oInput);
}
if(_oCompose.getPageId()=="groupsms")
{
var _sGrpContent=_oEditor.getContent().toLowerCase(),_sPlainText=_oEditor.getContent(true),_sPureText=_oTop.trim(_sPlainText.replace(/&nbsp;/ig,''));
if(!_sPureText&&_sGrpContent.indexOf("<img")<0)
{
_oTop.showError("\u7FA4\u90AE\u4EF6\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u586B\u5199\u5185\u5BB9");
_oTop.disableCtl('sendbtn',false,_oWin);
return false;
}
else if(!_sPureText&&_sGrpContent.indexOf("<img")>=0&&!_oVfrm.subject.value)
{
_oVfrm.subject.value="\u56FE\u7247";
}
else if(_sPureText)
{
_oVfrm.subject.value='';
}
}
if(_asTemplate!="autosave"&&_asAction!="save"&&_oTop.QMAddress)
{
_oTop.QMAddress.setExpired(0);
}
if(_asTemplate!="autosave"&&_asAction!="save"&&_oEditor&&_oEditor.getEditorCustomVar)
{
var _fHideFullScreenEditor=_oEditor.getEditorCustomVar('FullScreenToolbar.hideFullScreenEditor');
if(_fHideFullScreenEditor)
{
_fHideFullScreenEditor();
}
}
_bPreventProcessCheckCallback=true;
_oProcess._composeFormSubmit(_oVfrm,_asTemplate,_afProcessCheckCallback);
}
function _doCheckDomainProcess()
{
_oProcess._doProcessSafe(_asTemplate,_asAction,function(){
_doRealSendProcess();
});
}
function _doFinishEvent(_abIsNotConfirm)
{
_oProcess._doProcessSafe(_asTemplate,_asAction,function(){
_oProcess._nCurrentProcessId=50;
if(!_abIsNotConfirm&&_oAttach.hasUploadError())
{
return _oTop.confirmBox({msg:_asAction=="save"?"\u4E0A\u4F20\u9644\u4EF6\u51FA\u9519\uFF01\n\u60A8\u786E\u5B9A\u8981\u4FDD\u5B58\u8FD9\u5C01\u7F3A\u5931\u9644\u4EF6\u7684\u90AE\u4EF6\u5417\uFF1F":"\u4E0A\u4F20\u9644\u4EF6\u51FA\u9519\uFF01\n\u60A8\u786E\u5B9A\u8981\u53D1\u9001\u8FD9\u5C01\u7F3A\u5931\u9644\u4EF6\u7684\u90AE\u4EF6\u5417\uFF1F",onreturn:function(_abIsOk){
_oProcess._nCurrentProcessId=51;
if(_abIsOk)
{
_doCheckDomainProcess();
}
else{
_oTop.cancelDoSend();
}
}});
}
_oProcess._nCurrentProcessId=52;
_doCheckDomainProcess();
});
}
function _doProgress(_anPercent)
{
_anPercent==-1?_oTop.showProcess(1,1,"\u9644\u4EF6\u4E0A\u4F20\u4E2D","",false):_oTop.showProcess(2,1,_anPercent,"\u9644\u4EF6\u4E0A\u4F20\u4E2D",false);
}
_oProcess._nCurrentProcessId=40;
if(_asTemplate=="autosave")
{
_doFinishEvent(true);
}
else{
if(_oAttach.isUploading())
{
_oAttach.onprogress=_doProgress;
_oAttach.onfinish=_doFinishEvent;
}
else{
_doFinishEvent();
}
}
if(!_bPreventProcessCheckCallback&&_afProcessCheckCallback)
{
_afProcessCheckCallback();
}
});
},_getBigAttachNameList:function(_aoDomNameList){
var _oProcess=this,_oTop=getTop(),_oReturnList=[];
_oTop.E(_aoDomNameList,function(_asDomName){
if(_oProcess.S(_asDomName))
{
var os=_oProcess.S(_asDomName).childNodes,_bIsReply=_asDomName=="exist_BigAttach"?true:false;
for(var i=0,len=os.length;i<len;i++)
{
if(os[i].nodeType==1&&_oTop.isShow(os[i])&&!_oTop.GelTags("div",os[i]).length)
{
var _sTmpCode="",_oSpan=_oTop.GelTags("span",os[i])[1],_oNode=_oSpan.firstChild,_sFileName=_oNode.innerText||_oNode.textContent||"";
_oReturnList.push(_sFileName);
}
}
}
});
return _oReturnList;
},doProcessCheck:function(_asTemplate,_asAction,_anStartStep,_afDoNextProcess){
var _oProcess=this;
var _oCompose=_oProcess._moCompose;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oOnlineDocAttach=_oCompose.moOnlineDoc;
if(_asAction=="voice"&&!_oWin.CheckVoiceBeforeCompose())
{
return false;
}
if(_asAction=="card"&&_oWin.setBirthCardReceiver&&!_oWin.setBirthCardReceiver(_asTemplate=="savedraft"?0:1))
{
return false;
}
var _oTop=getTop(),_nStep=0;
try{
var _oCheckObjs={},_oAddrTypeList=["to","cc","bcc","sc"],_bExistAddr=false,_oErrorAddrs=[],_oErrorQQAddrs=[];
var _bRemindError=false;
if(!(_asAction=="card"&&_oWin.setBirthCardReceiver)&&_oCompose.getPageId()!="qq"&&_oCompose.getPageId()!="note"&&_oCompose.getPageId()!="group"&&_oCompose.getPageId()!="groupsms")
{
for(var _i=_oAddrTypeList.length-1;_i>=0;_i--)
{
var _asId=_oAddrTypeList[_i],_oQMAddrDomainCheck=new (_oCompose.getQMAddrDomainCheck())(_oWin);
if(_oCompose.getPageId()=="card"&&_oCompose.isNewCardList)
{
var _oAddrCtrl=_oCheckObjs[_asId]=_oTop.QMAddrInput.get(_asId,_oTop);
_oQMAddrDomainCheck=new (_oCompose.getQMAddrDomainCheck())(_oWin);
}
else{
var _oDlg=_oTop.QMDialog('postcard_dlg');
if(_oDlg)
{
_oWin=_oDlg.getDialogWin();
}
var _oAddrCtrl=_oCheckObjs[_asId]=_oCompose.getQMAddrInput().get(_asId,_oWin);
}
if(!_oAddrCtrl)
{
continue;
}
if(_asAction=="send"&&_oQMAddrDomainCheck&&!_oQMAddrDomainCheck.permit(_oAddrCtrl.get('validemail')))
{
_oTop.showError('\u90AE\u4EF6\u5730\u5740\u8FC7\u591A\uFF0C\u65E0\u6CD5\u53D1\u9001\u3002');
return false;
}
if(_oCompose.getPageId()=="postcard")
{
if(!_oWin.checkWordText())
{
return false;
}
}
var _oAddrObj=_oProcess.S(_asId);
if(_oAddrCtrl&&_oAddrObj)
{
var _bDisabled=_oAddrObj.disabled=_oAddrCtrl.flush().isDisabled();
var _sValue=_oAddrObj.value=_bDisabled?"":_oAddrCtrl.get().join("; ");
if(!_bDisabled)
{
_oErrorAddrs=_bDisabled?"":_oErrorAddrs.concat(_oAddrCtrl.get("errhtml"));
_oErrorQQAddrs=_bDisabled?"":_oErrorQQAddrs.concat(_oAddrCtrl.get("errQQhtml"));
if(!_bExistAddr)
{
_bExistAddr=!!_sValue;
}
if(_oCompose.getPageId()=="remind"&&!_oCompose._checkInRemind(_oAddrCtrl.get("json")))
{
_bRemindError=true;
}
}
}
}
_nStep++;
if(_anStartStep<_nStep)
{
_oWin.setTimeout(function(){
_afDoNextProcess(_nStep);
});
return false;
}
if(_oCompose.getPageId()=="remind"&&_bRemindError)
{
return false;
}
}
else{
_bExistAddr=true;
}
if(_oCompose.getPageId()!="note"&&_oCompose.getPageId()!="group"&&_oCompose.getPageId()!="groupsms"&&!(_oProcess.S("separatedcopy")&&_oProcess.S("separatedcopy").disabled)&&(_asAction=="voice"||_asAction=="send"||(_asAction=="card"&&_asTemplate=="")))
{
if(!_bExistAddr)
{
if(_asAction=="card")
{
_oTop.showError(_oTop.gsMsgNoCardSender);
if(_oTop.QMDialog("GreetingCard"))
{
_oCompose._splashToCtrl(_oTop.QMDialog("GreetingCard").S("bccAreaCtrl"));
}
else{
_oCompose._splashToCtrl("bccAreaCtrl");
}
_oTop.show(_oProcess.S("cardTip"),true);
}
else if(_oCompose.getPageId()=="postcard")
{
_oTop.showError(_oTop.gsMsgNoSender);
_oCompose._splashToCtrl("bccAreaCtrl");
}
else{
_oTop.showError(_oTop.gsMsgNoSender);
_oCompose._splashToCtrl("toAreaCtrl");
}
for(var i=0,_len=_oAddrTypeList.length;i<_len;i++)
{
var _oAddrCtrl=_oCheckObjs[_oAddrTypeList[i]];
if(_oAddrCtrl&&!_oAddrCtrl.isDisabled())
{
_oAddrCtrl.focus("end");
break;
}
}
return false;
}
_nStep++;
if(_anStartStep<_nStep)
{
if(_oErrorAddrs.length)
{
return _addrErrDlg({sId:"Address_error",sTitle:"\u6536\u4EF6\u4EBA\u683C\u5F0F\u9519\u8BEF",sDesc:"\u60A8\u586B\u5199\u7684\u4EE5\u4E0B\u6536\u4EF6\u4EBA\u5B58\u5728\u683C\u5F0F\u9519\u8BEF\uFF1A",oErrorAddrs:_oErrorAddrs});
}
if(_oErrorQQAddrs.length)
{
return _addrErrDlg({sId:"AddressQQ_error",sTitle:"\u6536\u4EF6\u4EBA\u5730\u5740\u4E0D\u5B58\u5728",sDesc:"\u60A8\u586B\u5199\u7684\u4EE5\u4E0B\u6536\u4EF6\u4EBA\u4E0D\u5B58\u5728\uFF1A",oErrorAddrs:_oErrorQQAddrs});
}
}
_oTop.gSendmailSubject=_oProcess.S("subject").value;
}
}
catch(_oError)
{
alert(_oError.message);
}
try{
var _oQQGroupIdTmp=_oProcess.S("qqgroupid");
if((_asAction=="send"||_asAction=="card")&&_oQQGroupIdTmp&&!_oQQGroupIdTmp.disabled&&_oQQGroupIdTmp.value.indexOf("@")==-1)
{
if(_asAction=="card")
{
_oTop.showError("\u8BF7\u9009\u62E9\u4E00\u4E2AQQ\u7FA4");
_oCompose.changeTab("AddrTab");
_oTop.show(_oProcess.S("cardTip"),true);
_oWin.scroll(0,0);
}
else{
_oTop.showError("\u8BF7\u9009\u62E9\u4E00\u4E2AQQ\u7FA4");
}
return false;
}
if(_oQQGroupIdTmp&&!_oTop.trim(_oCompose.getPageEditor().getContent(false)))
{
_oTop.confirmBox({title:"\u5931\u8D25\u4FE1\u606F",msg:"\u7FA4\u90AE\u4EF6\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u586B\u5199\u5185\u5BB9",width:430,onreturn:function(_aIsOk){
var _oEditor=_oCompose.getPageEditor();
_oEditor&&_oEditor.focus();
}});
return false;
}
if(_asAction=="send"&&_oCompose.getInputObj("mailtype").value=="vote")
{
if(_oProcess.S("votesubject").value=="")
{
_oTop.showError("\u8BF7\u586B\u5199\u6295\u7968\u4E3B\u9898");
_oProcess.S("votesubject").focus();
_oCompose._splashToCtrl("votesubject");
return false;
}
var _oOption=_oProcess.SN("option");
for(var i=0,_len=_oOption.length;i<_len;i++)
{
if((_oOption[i].value=="")&&(i<2))
{
_oTop.showError(["\u8BF7\u586B\u5199\u9009\u9879",i+1,"\u7684\u5185\u5BB9"].join(""));
_oOption[i].focus();
_oCompose._splashToCtrl(_oOption[i]);
return false;
}
}
}
}
catch(_oError)
{
}
try{
var _oSubjectDom=_oProcess.S("subject");
if(_oSubjectDom.value==_oTop.gsMsgNoSubject)
{
_oSubjectDom.value="";
}
var _sSubject=_oTop.isShow(_oSubjectDom)?_oSubjectDom.value:"";
if(_oTop.getAsiiStrLen(_sSubject)>240)
{
_oTop.showError("\u4E3B\u9898\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7120\u4E2A\u4E2D\u6587\u5B57\u7B26");
return false;
}
_nStep++;
if(_anStartStep<_nStep)
{
if(!_oCompose.getComposeVar()._bIsSkinSubject&&!_oTop.trim(_sSubject)&&(_oCompose.getPageId()=="compose"||_oCompose.getPageId()=="qfcompose")&&_asAction=="send")
{
_oTop.confirmBox({msg:['<div class="dialog_f_t">\u60A8\u7684\u90AE\u4EF6\u6CA1\u6709\u586B\u5199\u4E3B\u9898\u3002</div>','<div class="dialog_f_d" style="font-size:14px;">\u60A8\u786E\u5B9A\u7EE7\u7EED\u53D1\u9001\uFF1F</div>'].join(""),width:430,onreturn:function(_aIsOk){
if(_aIsOk)
{
_oWin.setTimeout(function(){
_oCompose.getComposeVar()._bIsSkinSubject=true;
_afDoNextProcess(_nStep);
},100);
}
}});
return false;
}
}
}
catch(_oError)
{
}
try{
var _oTypeErrors=_oAttach.checkAttachWarnningType();
if(_oTypeErrors.length!=0)
{
_oTop.msgBox("\u60A8\u7684\u9644\u4EF6\u4E2D\u5305\u542B\u53EF\u6267\u884C\u6587\u4EF6\uFF1A"+_oTypeErrors.join(", ")+"\uFF0C\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651\uFF0C\u90AE\u4EF6\u4E2D\u4E0D\u5141\u8BB8\u5305\u542B\u6B64\u7C7B\u9644\u4EF6","dialog",true,0,"\u5931\u8D25\u4FE1\u606F");
return false;
}
var _nAttachSize=_oAttach.getAttachSize(),_nLimitSize=_oAttach.getAttachLimit(),_nLimitSizeByAddr=_oAttach.getAttachLimitByAddr();
if(_nLimitSizeByAddr>0&&_nLimitSizeByAddr<_nLimitSize&&(_asAction!="save"&&_asTemplate!="savedraft"&&_asTemplate!="autosave")&&!_oCompose.getComposeVar()._bAttachHasChecked)
{
if(_nAttachSize*1.3>_nLimitSizeByAddr)
{
_nStep++;
if(_anStartStep<_nStep)
{
_oAttach.showAttachLimitByAddr(_nLimitSizeByAddr,function(_bResult){
if(_bResult)
{
_oWin.setTimeout(function(){
_afDoNextProcess(_nStep);
_oCompose.getComposeVar()._bAttachHasChecked=true;
});
}
});
return false;
}
}
}
else{
if(_nAttachSize>_nLimitSize)
{
_oAttach.showAttachLimit(_nLimitSize);
return false;
}
}
var _bIsExistOtherDomain=false,_sDomainEmail=_oTop.QMAddress&&_oTop.QMAddress.getGroupMail()?"":"none";
for(var _sType in _oCheckObjs)
{
if(_bIsExistOtherDomain&&_sDomainEmail)
{
break;
}
if(!_oCheckObjs[_sType])
{
continue;
}
var _oList=_oCheckObjs[_sType].get("json");
for(var i=0,_len=_oList.length;i<_len;i++)
{
var _sAddr=_oList[i].addr;
if(!_bIsExistOtherDomain&&_sAddr.indexOf("@vip.qq.com")==-1&&_sAddr.indexOf("@qq.com")==-1&&_sAddr.indexOf("@foxmail.com")==-1)
{
_bIsExistOtherDomain=true;
}
if(!_sDomainEmail&&_oTop.QMAddress.getGroupMail(_sAddr))
{
_sDomainEmail=_sAddr;
}
if(_bIsExistOtherDomain&&_sDomainEmail)
{
break;
}
}
}
_oCompose.getComposeVar()._sDomainEmail=_sDomainEmail;
if((_isFtnUploading()&&!_isFtnComplete()||_isFtnCenterUploading()&&!_isFtnCenterComplete())&&_asTemplate!="autosave")
{
_nStep++;
if(_anStartStep<_nStep)
{
_oTop.confirmBox({sId:"confirmcheckuploading",title:"\u6E29\u99A8\u63D0\u793A",msg:["\u6709\u8D85\u5927\u9644\u4EF6\u8FD8\u672A\u4E0A\u4F20\u5B8C\u6BD5",_asTemplate=="savedraft"?"\uFF0C\u672A\u4E0A\u4F20\u5B8C\u7684\u9644\u4EF6\u4E0D\u4F1A\u5728\u8349\u7A3F\u4E2D\u4FDD\u5B58":"\uFF0C\u73B0\u5728\u5F3A\u884C\u53D1\u9001\u90AE\u4EF6\u5C06\u4F1A\u4E22\u5931\u9644\u4EF6"].join(""),onreturn:function(_abOk){
if(_abOk)
{
_afDoNextProcess(_nStep);
}
}});
return false;
}
}
}
catch(_oError)
{
}
try{
if(_oOnlineDocAttach&&_oOnlineDocAttach._moOnlineAttach)
{
var _oOnlineDocAttachMgr=_oOnlineDocAttach._moOnlineAttach;
if(_oOnlineDocAttachMgr.isUploading()&&_asTemplate!="autosave")
{
_nStep++;
if(_anStartStep<_nStep)
{
_oTop.confirmBox({sId:"confirmcheckuploading",title:"\u6E29\u99A8\u63D0\u793A",msg:["\u6587\u6863\u5BFC\u5165\u672A\u5B8C\u6210\uFF0C",_asTemplate=="savedraft"?"\u73B0\u5728\u4FDD\u5B58\u8349\u7A3F\u5C06\u4F1A\u4E22\u5931\u9644\u4EF6\u3002":"\u73B0\u5728\u53D1\u9001\u90AE\u4EF6\u5C06\u4F1A\u4E22\u5931\u9644\u4EF6\u3002"].join(""),onreturn:function(_abOk){
if(_abOk)
{
_afDoNextProcess(_nStep);
}
}});
return false;
}
}
if(_oOnlineDocAttachMgr.hasUploadError()&&_asTemplate!="autosave")
{
_nStep++;
if(_anStartStep<_nStep)
{
_oTop.confirmBox({sId:"confirmcheckuploading",title:"\u6E29\u99A8\u63D0\u793A",msg:_asTemplate=="savedraft"?"\u6587\u6863\u5BFC\u5165\u51FA\u9519\uFF01\n\u4F60\u786E\u5B9A\u4FDD\u5B58\u8FD9\u5C01\u7F3A\u5931\u9644\u4EF6\u7684\u90AE\u4EF6\u5417\uFF1F":"\u6587\u6863\u5BFC\u5165\u51FA\u9519\uFF01\n\u4F60\u786E\u5B9A\u53D1\u9001\u8FD9\u5C01\u7F3A\u5931\u9644\u4EF6\u7684\u90AE\u4EF6\u5417\uFF1F",onreturn:function(_abOk){
if(_abOk)
{
_afDoNextProcess(_nStep);
}
}});
return false;
}
}
}
}
catch(_oError)
{
}
_nStep++;
if(_anStartStep<_nStep)
{
try{
if(_asTemplate!="autosave"&&_oCompose._moClipImg&&_oCompose._moClipImg.isUploading())
{
_oTop.confirmBox({sId:"confirmcheckclipimguploading",title:"\u6E29\u99A8\u63D0\u793A",msg:["\u6709\u5185\u5D4C\u56FE\u7247\u8FD8\u672A\u4E0A\u4F20\u5B8C\u6BD5",_asTemplate=="savedraft"?"\uFF0C\u672A\u4E0A\u4F20\u5B8C\u7684\u56FE\u7247\u4E0D\u4F1A\u5728\u8349\u7A3F\u4E2D\u4FDD\u5B58":"\uFF0C\u73B0\u5728\u5F3A\u884C\u53D1\u9001\u90AE\u4EF6\u5C06\u4F1A\u4E22\u5931\u56FE\u7247"].join(""),onreturn:function(_abOk){
if(_abOk)
{
_oCompose._moClipImg.stopUpload();
_afDoNextProcess(_nStep);
}
}});
return false;
}
}
catch(_oEditor)
{
}
}
_nStep++;
if(_anStartStep<_nStep)
{
try{
var _sSubTmpl=_oCompose.getPageConfig().subtmpl;
if(!_oCompose.getComposeVar()._bIsSkinNoAttach&&_asTemplate!="savedraft"&&_asTemplate!="autosave"&&_sSubTmpl!="reply"&&_sSubTmpl!="reply_all"&&_sSubTmpl!="forward"&&_sSubTmpl!="draft"&&_sSubTmpl!="content"&&_oProcess.S("AttachFrame")&&!_oAttach.hasAttach(true))
{
var _sSubject=_oTop.isShow(_oProcess.S("subject"))?_oProcess.S("subject").value:"";
var _sContent=_oCompose.getPageEditor().getContent(true);
var _sPatt=/attachment|attachments/ig;
if(!_oAttach.isUploading()&&(_sSubject.indexOf("\u9644\u4EF6")!=-1||_sContent.indexOf("\u9644\u4EF6")!=-1||_sSubject.search(_sPatt)!=-1||_sContent.search(_sPatt)!=-1))
{
_oTop.confirmBox({msg:['<div style="padding:0 10px 0 0;"><b>','\u60A8\u7684\u90AE\u4EF6\u5185\u5BB9\u63D0\u5230\u9644\u4EF6\uFF0C\u4F46\u60A8\u53EF\u80FD\u5FD8\u8BB0\u4E86\u6DFB\u52A0\u9644\u4EF6\u3002','</b></div>','<div>','\u60A8\u786E\u5B9A\u7EE7\u7EED\u53D1\u9001\uFF1F','</div>'].join(""),width:430,onreturn:function(_abIsOk){
if(_abIsOk)
{
_oCompose.getComposeVar()._bIsSkinNoAttach=true;
_oWin.setTimeout(function(){
_afDoNextProcess(_nStep);
},100);
}
}});
return false;
}
}
}
catch(_oError)
{
}
}
_nStep++;
if(_anStartStep<_nStep)
{
var _oInput=_oProcess.S("savesendbox");
if(_oCompose.getPageId()=="compose"&&_oInput&&!_oInput.checked)
{
_oTop.QMAjax.send(_oTop.T("/cgi-bin/tip?sid=$sid$&args=savesendbox,28&t=tipcheck").replace({sid:_oTop.getSid()}),{method:"GET",timeout:500,onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
if(_asParam=="1")
{
_oTop.confirmBox({title:"\u63D0\u793A",msg:['<div class="dialog_f_t">\u60A8\u6240\u53D1\u51FA\u7684\u90AE\u4EF6\u5C06\u4E0D\u4FDD\u5B58\u5230\u201C\u5DF2\u53D1\u9001\u201D\u4E2D</div>','<div class="dialog_f_d">','<div style="margin-bottom: 6px; margin-top: 5px;">\u8FD9\u53EF\u80FD\u662F\u60A8\u5728\u8BBE\u7F6E\u4E2D\u53D6\u6D88\u4E86\u8BE5\u9009\u9879\uFF0C\u60A8\u53EF\u4EE5\uFF1A</div> ','<input type="radio" checked="checked" id="csavesendbox" value="1" name="cssb"><label for="csavesendbox">\u8BBE\u7F6E\u4E3A\u81EA\u52A8\u4FDD\u5B58\uFF0C\u5E76\u7EE7\u7EED\u53D1\u4FE1</label><br>','<input type="radio" value="0" name="cssb" id="cdonotsavesendbox"><label for="cdonotsavesendbox">\u4E0D\u4FDD\u5B58\uFF0C\u7EE7\u7EED\u53D1\u4FE1</label>','</div>'].join(""),onreturn:function(_abIsOk){
if(_abIsOk)
{
if(this.S("csavesendbox").checked)
{
_oInput.checked=true;
_oTop.QMAjax.send(_oTop.T("/cgi-bin/setting1?sid=$sid$&savesendbox=0&fun=submit&loc=send,save,1,0").replace({sid:_oTop.getSid()}),{method:"POST",timeout:500,onload:function(){
_oTop.goUserInfo.reset();
}});
}
else{
_oTop.ossLog("realtime","all","stat=noting&loc=send,save,0,0");
}
_oWin.setTimeout(function(){
_afDoNextProcess(_nStep);
});
}
}});
return false;
}
else{
_oWin.setTimeout(function(){
_afDoNextProcess(_nStep);
});
}
}
else{
_oWin.setTimeout(function(){
_afDoNextProcess(_nStep);
});
}
}});
return false;
}
}
_nStep++;
if(_anStartStep<_nStep&&_oCompose.getPageId()!='card'&&_oCompose.getPageId()!='voice'&&_oCompose.getPageId()!='postcard'&&_oCompose.getPageId()!="group")
{
var _oAttachExistList=_oCompose.moAttach.getExistList(),_oBigAttachExistList=_oProcess._getBigAttachNameList(["ResumeWorks","BigAttach","exist_BigAttach"]),_sSubject=_oTop.isShow(_oProcess.S("subject"))?_oProcess.S("subject").value:"",_sContent=_oCompose.getPageEditor().getContent(true),_sAliasName=getUserInfo("alias"),_sName,_bIsPassChecked=true,_sResumePatt=/resume|\u7B80\u5386|\u5E94\u8058/ig;
var _bshowResumeConfirmFlag=QMLocalStorage.getUserItem("showResumeConfirmFlag"),_oShowResumeConfirmFlagDom=_oProcess.S("ipt_showResumeConfirmFlag"),_bIsHasShowResumeConfirm=(_bshowResumeConfirmFlag=="2"||(_oShowResumeConfirmFlagDom&&(_oShowResumeConfirmFlagDom.value=="2")));
if(_asAction!="save"&&_asTemplate!="savedraft"&&_asTemplate!="autosave"&&_oCompose.getPageId()!="note"&&!_bIsHasShowResumeConfirm)
{
var _bHasShowConfirmName=(_bshowResumeConfirmFlag=="1"||(_oShowResumeConfirmFlagDom&&(_oShowResumeConfirmFlagDom.value=="1")));
if(_oCompose._isBusinessReume&&_oCompose._isBusinessReume())
{
_bIsPassChecked=false;
}
if(_sSubject&&(_sSubject.search(_sResumePatt)>-1))
{
_bIsPassChecked=false;
}
if(_bIsPassChecked&&_oAttachExistList)
{
E(_oAttachExistList,function(_aoAttachInfo){
_sName=_aoAttachInfo.get().sName;
if(_sName&&(_sName.search(_sResumePatt)>-1))
{
_bIsPassChecked=false;
return false;
}
});
}
if(_bIsPassChecked&&_oBigAttachExistList)
{
E(_oBigAttachExistList,function(_asName){
_sName=_asName;
if(_sName&&(_sName.search(_sResumePatt)>-1))
{
_bIsPassChecked=false;
return false;
}
});
}
if(_bIsPassChecked&&_sContent&&(_sContent.search(_sResumePatt)>-1))
{
_bIsPassChecked=false;
}
if(!_bHasShowConfirmName&&!_bIsPassChecked)
{
new QMDialog({sId:"resumeConfirmName",sTitle:"\u786E\u8BA4\u4F60\u7684\u53D1\u4FE1\u6635\u79F0",sBodyHtml:TE(['<div class="resume_confirmName">','<span class="dialog_icon qui_icoPrompt qui_icoPrompt_InfoB"></span>','<div class="resume_confirmName_cnt">','<div class="resume_confirmName_tip">\u4F60\u6B63\u5728\u4F7F\u7528\u6635\u79F0\u300E$sAliasName$\u300F\u53D1\u9001\u8FD9\u5C01\u90AE\u4EF6\u3002\u5982\u9700\u4FEE\u6539\uFF0C\u8BF7\u70B9\u51FB\u300E\u4FEE\u6539\u6635\u79F0\u300F\uFF0C\u6216\u5728\u5DE6\u4E0B\u89D2\u53D1\u4EF6\u4EBA\u5904\u4FEE\u6539\u3002</div>','<div class="resume_confirmName_img"></div>','</div>','</div>']).replace({images_path:getPath("images"),sAliasName:_sAliasName}),sFootHtml:'<a id="a_continue" class="qui_btn qui_btn_Space" href="javascript:;">\u7EE7\u7EED\u53D1\u9001</a><a id="a_reedit_aliasname" class="qui_btn qui_btn_Space" href="javascript:;">\u4FEE\u6539\u6635\u79F0</a><a id="a_cancel" class="qui_btn" href="javascript:;">\u53D6\u6D88</a>',nWidth:550,onshow:function(){
var _oSelf=this;
_oSelf.S("a_cancel").onclick=function(){
getTop().LogKV('nicksecconfirm|cancel|kv');
_oProcess._saveResumeConfirmed();
_oSelf.close();
};
_oSelf.S("a_continue").onclick=function(){
_oWin.setTimeout(function(){
_afDoNextProcess(_nStep);
});
_oProcess._saveResumeConfirmed();
getTop().LogKV('nicksecconfirm|continue|kv');
_oSelf.close();
};
_oSelf.S("a_reedit_aliasname").onclick=function(){
var _oSender=_oCompose.getComposeVar().oQmSender;
_oProcess._saveResumeConfirmed();
_oSender.reEditAliasName(S("sendmailname_val",_oSender._moWin),true);
getTop().LogKV('nicksecconfirm|toupdate|kv');
_oSelf.close();
return false;
};
}});
getTop().LogKV('nicksecconfirm|hit|kv');
return false;
}
var _bShowEmailSecConfirm=false;
try{
var _oSendAddr=_oCompose.S("sendmailname"),_sSendEmail=_oSendAddr&&_oSendAddr.value||_oTop.getUserInfo('addr')||"",_oNumEmailReg=/[0-9]+@qq.com/i;
if(_oNumEmailReg.test(_sSendEmail))
{
var _oAliasEmails=_oTop.goUserInfo.get("RealUserAlias")||[];
for(var i=0,len=_oAliasEmails.length;i<len;i++)
{
if(_oAliasEmails[i]&&!_oNumEmailReg.test(_oAliasEmails[i]))
{
_bShowEmailSecConfirm=true;
break;
}
}
}
}
catch(e)
{
}
if(!_bIsPassChecked&&_bShowEmailSecConfirm)
{
new QMDialog({sId:"resumeConfirmEmail",sTitle:"\u786E\u8BA4\u4F60\u7684\u53D1\u4FE1\u5E10\u53F7",sBodyHtml:TE(['<div class="resume_confirmName">','<span class="dialog_icon qui_icoPrompt qui_icoPrompt_InfoB"></span>','<div class="resume_confirmName_cnt">','<div class="resume_confirmName_tip">\u4F60\u6B63\u5728\u4F7F\u7528\u6570\u5B57\u90AE\u7BB1\u5E10\u53F7\u53D1\u9001\u8FD9\u5C01\u90AE\u4EF6\u3002\u5EFA\u8BAE\u5207\u6362\u4E3A\u82F1\u6587\u90AE\u7BB1\u5E10\u53F7\uFF0C\u66F4\u4E3A\u4E13\u4E1A\u3002</div>','<div class="resume_confirmEmail_img"></div>','</div>','</div>']).replace({}),sFootHtml:'<a id="a_continue" class="qui_btn qui_btn_Space" href="javascript:;">\u7EE7\u7EED\u53D1\u9001</a><a id="a_reedit_aliasname" class="qui_btn qui_btn_Space" href="javascript:;">\u5207\u6362\u5E10\u53F7</a><a id="a_cancel" class="qui_btn" href="javascript:;">\u53D6\u6D88</a>',nWidth:550,onshow:function(){
var _oSelf=this;
_oSelf.S("a_cancel").onclick=function(){
getTop().LogKV('emailsecconfirm|cancel|kv');
_oProcess._saveResumeConfirmed("email");
_oSelf.close();
};
_oSelf.S("a_continue").onclick=function(){
_oWin.setTimeout(function(){
_afDoNextProcess(_nStep);
});
_oProcess._saveResumeConfirmed("email");
getTop().LogKV('emailsecconfirm|continue|kv');
_oSelf.close();
};
_oSelf.S("a_reedit_aliasname").onclick=function(){
var _oSender=_oCompose.getComposeVar().oQmSender;
_oProcess._saveResumeConfirmed("email");
_oSender.reEditAliasName(S("sendmailname_val",_oSender._moWin),false);
getTop().LogKV('emailsecconfirm|toupdate|kv');
_oSelf.close();
return false;
};
}});
getTop().LogKV('emailsecconfirm|hit|kv');
return false;
}
}
}
_nStep++;
if(_anStartStep<_nStep)
{
try{
}
catch(_oError)
{
}
}
return true;
},_saveResumeConfirmed:function(type){
var _oProcess=this,_oTop=getTop(),_sFlag="1",_sUrlParam="action=resumeconfirm";
if(type=="email")
{
_sFlag="2";
_sUrlParam="action=setbitmap&key=resume_send_email_confirmed&value=1";
}
_oTop.QMAjax.send("/cgi-bin/do",{content:_sUrlParam,method:"POST",onload:function(_abIsOk){
if(_abIsOk)
{
QMLocalStorage.setUserItem("showResumeConfirmFlag",_sFlag);
(_oProcess.S("ipt_showResumeConfirmFlag")&&(_oProcess.S("ipt_showResumeConfirmFlag").value=_sFlag));
}
}});
},_doProcessSafe:function(_asTemplate,_asAction,_aFunc){
var _oTop=getTop();
if(_oTop.formatDate2!==_oTop.formatDate)
{
_oTop.LogKV('func_err|formatdate|compose');
_oTop.formatDate=_oTop.formatDate2;
}
var _oProcess=this;
var _oCompose=_oProcess._moCompose;
try{
_aFunc();
}
catch(_oError)
{
var _sTitle=_oCompose.getPageId()=="note"?"\u65E5\u5FD7\u4FDD\u5B58\u5931\u8D25 ":"\u90AE\u4EF6\u53D1\u9001\u5931\u8D25 ";
if(_oError.dispmode=="dialog")
{
getTop().msgBox(_oError.message,"dialog",true,0,_sTitle);
}
else if(_asAction=="voice"||_asAction=="send"||(_asAction=="card"&&_asTemplate==""))
{
getTop().msgBox(getTop().T(['<div>','\u5931\u8D25\u539F\u56E0\uFF1A$desc$ ','<div style="display:$cache$">\u5931\u8D25\u7801\uFF1A$code$ ','(<a href="http://support.qq.com/cgi-bin/beta1/titlelist_simple?pn=0&order=3&fid=350" target="_blank" title="\u628A\u5931\u8D25\u539F\u56E0\u4E0E\u5931\u8D25\u7801\u53D1\u5230\u90AE\u7BB1\u53CD\u9988\u610F\u89C1\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u5904\u7406\uFF01">\u62A5\u544A\u5931\u8D25\u539F\u56E0</a>)','</div>','</div>','<div style="color:red;display:$cache$">','\u8BF7\u5C1D\u8BD5\u6E05\u7A7A\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u7136\u540E\u91CD\u65B0\u8FDB\u5165\u90AE\u7BB1\u3002','<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=7&&no=339" target="_blank">\u67E5\u770B\u5E2E\u52A9</a>','</div>']).replace({desc:_oError.message,code:_oProcess._nCurrentProcessId,cache:_oError.clrcache==false?"none":""}),"dialog",true,0,_sTitle);
getTop().recodeComposeStatus(4,null,[_oProcess._nCurrentProcessId,encodeURIComponent(_oError.message)].join('|'),true);
getTop().ossLog('delay','all','kw=compose_send_jserr');
}
else{
getTop().showError(_oError.message);
}
getTop().disableAll(false);
_oCompose.enableAutoSave();
}
},_updateNickName:function(_asName){
if(!_asName)
{
return;
}
var _oDatas=getTop().goUserInfo.get('RealDefaultAllMail'),_oData,_sEmail;
if(_oDatas&&_oDatas.length>0)
{
for(var i=0;i<_oDatas.length;i++)
{
_oData=_oDatas[i];
_sEmail=_oData.email;
if(getTop().goUserInfo.get('RealDefaulSender')==_sEmail)
{
_oData["nickname"]=_asName;
break;
}
}
}
},loadLibCompose:function(_abReload){
var _oTop=getTop();
_oTop.localReloadJsFile("$js_path$webp/libcompose3732bd.js",function(){
return _oTop.ComposeLib;
},'libcompose',_abReload,_oTop.document);
},_composeFormSubmit:function(_aoForm,_asTemplate,_afCallback){
var _oProcess=this;
var _oCompose=_oProcess._moCompose;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
if(!_aoForm)
{
return;
}
if(_aoForm.sendname)
_oProcess._updateNickName(htmlEncode(_aoForm.sendname.value));
var _oBackSend,_oTop=getTop(),_sPageId=_oCompose.getPageId(),_fClearVerify=function(){
if(_aoForm.verifycode)
{
_aoForm.verifycode.value="";
}
if(_aoForm.verifycode_cn)
{
_aoForm.verifycode_cn.value="";
}
},_fGetActionType=function(){
return _asTemplate=="savedraft"?"save":_aoForm.actiontype.value;
};
_oTop.gfComposeFail=function(_asErrCode){
if(_asErrCode=="-1")
{
_oProcess.loadLibCompose(true);
}
_oTop.showProcess(1);
_oProcess._composeFormSubmit(_aoForm);
};
if("save"!=_aoForm.actiontype.value&&_oCompose._isUseBackgroundSend())
{
_oProcess._nCurrentProcessId=85;
_oCompose.setNeedCloseConform(false);
_oTop.showProcess(0);
_oTop.BackGroundSend.send(_aoForm,_sPageId,_oCompose._getToBeReloadInfo());
_fClearVerify();
_oCompose._isNeedToClearMLCache()&&_oTop.QMMLCache.upVer();
_oCompose.clearLocalStorage();
}
else{
_oTop.waitFor(function(){
return _oTop.ComposeLib;
},function(_abIsOk){
if(!_abIsOk)
{
_oProcess._nSubmitRetry=_oProcess._nSubmitRetry||0;
_oProcess._nSubmitRetry++;
_oTop.osslogAjaxCompose(13,_oProcess._nSubmitRetry);
if(_oProcess._nSubmitRetry>2)
{
_oTop.showError('\u53D1\u4FE1\u6A21\u5757\u52A0\u8F7D\u5931\u8D25 <a onclick="gfComposeFail(-1);" nocheck="true">[\u8BF7\u91CD\u8BD5]</a>',-1);
_oTop.ossLog('delay','all','kw=libcomposeLoadErr');
}
else{
_oProcess.loadLibCompose(true);
_oProcess._composeFormSubmit(_aoForm);
}
return;
}
var _oCpsLib=_oTop.ComposeLib,_oFormData=_oCpsLib.getFormData(_aoForm),_sCgiPath=_aoForm.getAttribute("action")||"",_sSection=_oFormData.s,_sActionType=_fGetActionType();
var _oEditor=(_oCompose.getPageEditor&&_oCompose.getPageEditor());
if(!_oFormData.contenttype&&_oEditor&&_oEditor._msEditCore=="txt")
{
_oFormData.contenttype="text";
}
if(_sActionType=="save")
{
delete _oFormData.secmailcode;
}
_oCpsLib.send(_oTop.extend(_oFormData,{cginame:_sCgiPath.replace(/^.*?\/cgi-bin\/(\w+).*$/gi,"$1"),ef:"js",t:"compose_send.json"}),{sType:"nil",nTimeout:2*60*1000,sSendingDesc:_oTop.TE(['$@$if($type$=="note")$@$','\u8BB0\u4E8B\u6B63\u5728\u4FDD\u5B58\u4E2D','$@$else if($type$=="urlcreator")$@$','\u7F51\u9875\u6B63\u5728\u4FDD\u5B58\u4E2D','$@$else if($sendtime$==1)$@$','$@$if($s$=="comm")$@$','\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1','$@$else if($s$=="card")$@$','\u8D3A\u5361\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1','$@$else if($s$=="postcard")$@$','\u660E\u4FE1\u7247\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1','$@$else if($s$=="video")$@$','\u89C6\u9891\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1','$@$else if($s$=="voice")$@$','\u97F3\u9891\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1','$@$endif$@$','$@$else$@$','$@$if($handleString$=="send")$@$','\u90AE\u4EF6\u6B63\u5728\u53D1\u9001\u4E2D','$@$else if($s$=="group")$@$','\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u7FA4\u90AE\u4EF6\u8349\u7A3F\u7BB1','$@$else$@$','\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1','$@$endif$@$','$@$endif$@$','... [<a onclick="ComposeLib.abort();" nocheck="true" style="color:white;">\u53D6\u6D88</a>]']).replace({handleString:"save"!=_sActionType?"send":"save",sendtime:_oFormData.sendtime,s:_oFormData.s,type:_oCompose.getPageId()}),sCgiPath:_sCgiPath,bCancelable:true,onready:function(){
_oTop.osslogAjaxCompose(8);
_oCompose.setNeedCloseConform(false);
},oncomplete:function(_abIsOk,_asResp,_aoXhr){
_afCallback&&_afCallback();
var _oResp={};
_oTop.disableAll(false,_oWin);
_sCgiPath=="/cgi-bin/groupmail_send"&&_oTop.disableTimeSendBtn(true,_oWin);
_oCompose.setNeedCloseConform(_asTemplate=="autosave"&&_oCompose.getPageConfig().subtmpl!="draft");
_oCompose._setEditorPageEvent(true);
_oCompose.setEditedAttach(false);
if(_aoXhr&&_aoXhr.status==0&&_aoXhr.readyState==4)
{
var BJ_REPORT=_oTop.getMainWin().BJ_REPORT;
BJ_REPORT&&BJ_REPORT.report("compose maybe crossdomian");
BJ_REPORT&&BJ_REPORT.report("compose maybe crossdomian : "+_sCgiPath+', response : '+_asResp);
}
if(_abIsOk)
{
try{
_oResp=eval("("+_asResp+")");
if(_oCompose._mbHasLoc)
{
_oTop.ossLog('delay',0.05,'stat=previewer&from=3&suffix='+_oResp.sMailId);
}
}
catch(e)
{
}
_oTop.osslogAjaxCompose(9,_oResp.errcode,_sSection,_sActionType);
if(typeof (_oResp.errcode)=="undefined")
{
_oTop.osslogAjaxCompose(12,_oResp.errcode,_sSection,_asResp);
_oTop.showError("\u5904\u7406\u53D1\u4FE1\u72B6\u6001\u5F02\u5E38\uFF0C\u5BF9\u65B9\u53EF\u80FD\u5DF2\u6536\u5230\u6B64\u90AE\u4EF6\uFF0C\u8BF7\u786E\u8BA4 [-12]");
}
else if(+_oResp.errcode<0)
{
_oTop.recodeComposeStatus(2,null,0);
var _oScriptMatch=_oResp.errmsg.match(/<script[^>]*>(.*)?<\/script>/i);
if(_oScriptMatch)
{
_oCompose.setNeedCloseConform(false);
var _sErrMsg=_oTop.trim(_oResp.errmsg.replace(/<script[^>]*>(.*)?<\/script>/gi,""));
_oResp.errcode!="-106"&&(_sErrMsg&&_sErrMsg.length>=4?_oTop.showError(_sErrMsg):_oTop.showError(_oTop.T('\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5 [$code$]').replace({code:_oResp.errcode})));
_oTop.globalEval(_oScriptMatch[1]);
if(_oResp.errcode=="-151")
{
_oAttach.missAttach(_oAttach.getInfoUid(_oTop.misslist));
}
else if(_oResp.errcode=="-161")
{
_oTop.showError("\u9644\u4EF6 "+_oTop.misslist[0].name+" \u4E0D\u5B58\u5728\u3002");
}
else if(_oResp.errcode=="-133")
{
_oTop.hiddenMsg();
_oTop.alertBox({msg:_sErrMsg,title:"\u90AE\u7BB1\u63D0\u793A"});
}
else if(_oResp.errcode=="-106")
{
var _sVirusAttNameTemp=_oResp.errmsg.match("sVirusAttName=.*?(?=,)"),_sMatchRulesTemp=_oResp.errmsg.match("sMatchRules=.*?(?=;)"),_oVirusAttNameTemp=_sVirusAttNameTemp&&_sVirusAttNameTemp[0].split('='),_oMatchRulesTemp=_sMatchRulesTemp&&_sMatchRulesTemp[0].split('='),_sVirusAttName=_oVirusAttNameTemp&&_oVirusAttNameTemp[1],_sMatchRules=_oMatchRulesTemp&&_oMatchRulesTemp[1];
_sVirusAttName&&_sMatchRules&&_oTop.alertBox({title:"\u75C5\u6BD2\u63D0\u9192",msg:_oTop.T(['<div class="dialog_f_t">\u60A8\u7684\u9644\u4EF6\u88AB\u68C0\u6D4B\u51FA\u542B\u6709\u75C5\u6BD2\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\u3002</div>','<div class="dialog_f_d" style="margin-top:4px;">','<span class="addrtitle">\u6587\u4EF6\u540D\uFF1A</span>','<span class="tf" style="display:inline-block;width:242px;margin-top:-3px;vertical-align:middle;">$sVirusAttName$</span>','<br /><span class="addrtitle">\u75C5\u6BD2\u540D\uFF1A</span>$sMatchRules$','<div class="graytext"><span class="ico_Avira"></span>\u68C0\u6D4B\u7ED3\u679C\u7531\u7535\u8111\u7BA1\u5BB6\u4E91\u67E5\u6740\u5F15\u64CE\u63D0\u4F9B</div>','</div>']).replace({sVirusAttName:_sVirusAttName.substr(1,_sVirusAttName.length-2),sMatchRules:_sMatchRules.substr(1,_sMatchRules.length-2)})});
}
_oWin.setTimeout(function(){
_oCompose.setNeedCloseConform(false);
},500);
}
else{
_oTop.showError(_oResp.errmsg);
}
}
else{
if(_oCompose.getPageId()==="urlcreator")
{
_oTop.showInfo("\u4FDD\u5B58\u6210\u529F");
_oWin.setTimeout(function(){
_oTop.goUrlTopWin("http://url.qmail.com/"+_oFormData.id);
},3000);
}
else if(_oCompose.getPageId()!="note")
{
if(_oFormData.sendtime==1)
{
_oTop.showInfo("\u4FDD\u5B58\u6210\u529F");
}
else{
_oTop.showInfo("\u53D1\u9001\u6210\u529F");
}
}
_oTop.ComposeResp.handle({sType:_sActionType,sModule:_oCompose.getPageId(),oPostData:_oFormData,oRespData:_oResp,fReportError:function(){
_oTop.osslogAjaxCompose(11,_oResp.errcode,_sSection,_sActionType);
}});
try{
_oCompose._isNeedToClearMLCache()&&_oTop.QMMLCache.upVer();
_oCompose.clearLocalStorage();
}
catch(e)
{
_oTop.osslogAjaxCompose(17);
}
}
}
else{
_oTop.osslogAjaxCompose(10,_asResp=="abort"?1:2,_sSection,_sActionType);
_oTop.recodeComposeStatus(_asResp=="abort"?3:2,null,0);
if(_asResp=="abort")
{
_oTop.hiddenMsg();
}
else{
_oTop.showError('\u53D1\u9001\u5931\u8D25 <a onclick="gfComposeFail();" nocheck="true">[\u8BF7\u91CD\u8BD5]</a>',-1);
}
}
}});
_fClearVerify();
},200);
}
_oProcess._nCurrentProcessId=90;
}};
function initComposeForPage(_asPageId,_aoWin,_aoConfig)
{
var _oTop=getTop();
if(!_aoConfig)
{
_aoConfig={};
}
if(_aoWin.QMComposePage)
{
return;
}
if(!_oTop.QMEditor&&!_aoConfig.nowait)
{
_oTop.loadJsFileToTop(["$js_path$webp/com/kits/qmeditor/qqmail/release/editor3690b7.js"]);
var _oArguments=arguments,_oSelf=this;
return _aoWin.setTimeout(function(){
_oArguments.callee.apply(_oSelf,_oArguments);
},50);
}
if(!_oTop.QMFileUpload)
{
_oTop.loadJsFileToTop(["$js_path$webp/com/kits/qmfileupload/js/qmfileupload24e6ae.js"]);
}
var _oCompose=new QMComposePageMain(_asPageId,_aoWin,_aoConfig);
_aoWin.QMComposePage=_oCompose;
_oTop.addEvent(_aoWin,"unload",function(){
_oTop.cancelDoSend();
_oTop.QMDialog("composeExitAlert","close");
if(_oCompose._mnHoverCnt)
{
_oTop.ossLog('delay','all','stat=sgkv&group=composelochover&cnt='+_oCompose._mnHoverCnt);
_oCompose._mnHoverCnt=0;
}
});
_oTop.setKeepAlive(_aoWin);
_oTop.liveEvent(_aoWin.document.body,{rule:function(){
return {click:{compose_preview:{bPropagable:true}}};
},events:function(){
return {compose_preview:_oCompose._onComposePreview()};
}});
if(typeof (Worker)!='undefined'&&_oTop.gbIsWebKit)
{
try{
(_oCompose.bNeedIdentifyLocation=_aoConfig.bNeedIdentifyLocation)&&initLocationIdentify(_aoConfig.sLocationIdentifyUrl,_aoConfig.sLocationWorkerImportUrl);
}
catch(e)
{
_oCompose.bNeedIdentifyLocation=false;
_oTop.ossLog('delay','all','stat=sgkv&group=composeworkeriniterror&cnt=1');
}
}
else{
_oCompose.bNeedIdentifyLocation=false;
}
setTimeout(function(){
if("1"==_oTop.gbBackGroundSend)
{
_oTop.loadJsFileToTop(["$js_path$webp/backsend2b1861.js"]);
}
_oTop.loadJsFileToTop(["$js_path$webp/composeresp2ebe07.js"]);
},0);
_oCompose.moProcess.loadLibCompose();
_oTop.osslogAjaxCompose(1);
if(_oCompose.getComposeVar().sIphoneUpImgKey=="")
{
_oCompose.getComposeVar().sIphoneUpImgKey=(new Date()).valueOf();
}
}
function QMComposePageMain(_asPageId,_aoWin,_aoConfig)
{
this.msPageId=_asPageId;
this._moWin=_aoWin;
this._moPageConfig=_aoConfig||{};
this._init();
}
var _fLocationIdentifyOptions=function(_aoCompose){
return {filterFunc:function(_aoDom){
var _oCurFocusElement=_aoCompose.getPageEditor().getSelectionElement();
var _bIsLocation=(_aoDom.className=='js_location_string');
return _bIsLocation||_aoDom==_oCurFocusElement;
},processCallback:function(_aoResult){
var _oTop=getTop();
for(var _nIdx in _aoResult)
{
var _oLocNodeData=_aoResult[_nIdx];
var _sReplaceStr=_oLocNodeData.sValue.replace(new RegExp('('+_oLocNodeData.sLocation+')','g'),'<span class="js_location_string" style="border-bottom: 1px dashed rgb(171, 171, 171); z-index: 1; position: static;">$1</span>');
_oTop.replaceHTML(_aoResult[_nIdx].oNode,_sReplaceStr);
}
_oTop.ossLog('delay','all','stat=sgkv&group=composelocidt&cnt='+_aoResult.length);
},finishCallback:function(){
_aoCompose.isIdentifying=false;
}};
};
QMComposePageMain.prototype={_oInitFuncMap:{"compose":'_initEditorForComposePage',"group":'_initEditorForGroupPage',"groupsms":'_initEditorForGroupSmsPage',"card":'_initEditorForCardPage',"voice":'_initEditorForVoicePage',"postcard":'_initForPostcardPage',"qq":'_initEditorForQQPage',"readmailGroup":'_initEditorForReadMailGroupPage',"note":'_initEditorForNotePage',"noteFirstPage":'_initEditorForNoteFirstPage',"remind":'_initForRemindPage',"readmailConv":'_initForReadmailConv',"urlcreator":'_initEditorForHelper',"qzone":'_initEditorForHelper',"qfcompose":'_initEditorForQfCompose',"none":'_initEmpty'},_oWinProxyFuncArr:['openNewWinEdit','getPageId','getPageEditor','attachInsertImage','attachInsertFile','existAttachInsertFile','doAttachInsertFile','focusPageEditor','changeContentType','tryListenBgMusic','noteFirstPageQuickSave','initColorSubject','showSubjectMsg','hideRightArea','initCookieSetting','loadValue','setNeedCloseConform','closePage','exitConfirm','saveContentGoUrl','selectGroup','useStationery','useStationery_new','changeTab','autoSave','clearLocalStorage','clearAutoSave','enableAutoSave','initFileTransporter','setComposeData','QQMailPreviewContent','setDefSign','setSignature','doFtnUploaded','initResumeData','initCardListPage',"showAddOnlineDocDlg","initOnlineDocData"],_oWinNeedRunFuncArr:['showInstallActiveXDialog'],_oWinUtilFuncArr:{'filterSourceContent':filterSourceContent,'redirectExitURLId':redirectExitURLId,'sendAfterUpload':sendAfterUpload,'getNoteFirstPageSource':getNoteFirstPageSource},getWin:function(){
return this._moWin;
},_init:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
_oCompose._initVar();
_oCompose._initWinFunc();
getTop().callBack.call(_oCompose,_oCompose.getPageConfig().oninit);
var _sPageId=_oCompose.getPageId();
_oCompose._oErrCheckTimer=_oWin.setTimeout(function(){
if(_oTop.QMEditor)
{
_sTmpCode=(_oTop.QMEditor.isInitialized)?"inited":"noInited";
}
else{
_sTmpCode="noEditor";
}
_oTop.ossLog("delay","all","stat=nothing&locval=editorErr,"+_sTmpCode+","+_sPageId);
},20*1000);
_oCompose[_oCompose._oInitFuncMap[_sPageId]](_sPageId,_oCompose._moPageConfig);
},_initVar:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
_oWin.goCompose=_oCompose._moComposeVar={sUrlCreator:"urlcreator@qq.com",sUrlCreatorFullName:"\u7F51\u9875\u751F\u6210\u52A9\u624B<urlcreator@qq.com>",sQzone:getTop().getUin()+"@qzone.qq.com",sQzoneFullName:["\u53D1\u8868\u5230\u6211\u7684Qzone<",getTop().getUin(),"@qzone.qq.com>"].join(""),oQmSender:null,_sDomainEmail:"",_bIsUserSave:false,_oAutoSaveTimer:null,_oAutoSaveLocalTimer:null,_bIsSkinSubject:false,_bIsAlarmedBigAttach:false,_bIsSkinNoAttach:false,_bAttachHasChecked:false,_bIsAlarmNickName:false,_bIsAlarmedDomainAddr:false,_oDomainChecker:null,sIphoneUpImgKey:"",oRecentGroupConf:["to","cc","bcc"]};
_oCompose._oLoadValueCtrls=["to","cc","bcc","subject","content_compare"];
_oCompose._oLoadValueCache=[];
_oCompose._bIsEverSeted=null;
_oCompose._bIsNeedCloseConform=null;
_oCompose._bAttachEdited=null;
_oCompose._bEditorEverFocus=false;
_oCompose.moAttach=new QMAttachMain(_oCompose,_oWin);
_oCompose.moProcess=new QMProcess(_oCompose);
_oCompose.moAddrCtrl=new QMAddrCtrl(_oCompose);
try{
_oCompose.moOnlineDoc=new QMOnlineDoc(_oCompose,_oWin);
}
catch(e)
{
}
},getComposeVar:function(){
return this._moComposeVar;
},getQMAddrDomainCheck:function(){
return getTop().QMAddrDomainCheck2;
},getQMAddrInput:function(){
return getTop().QMAddrInput;
},getQMStationery:function(){
return this._moWin.QMStationery;
},_initWinFunc:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oTop=getTop();
_oWin.addBigAttach=function(_asExpireTime,_asFileName,_asSize,_asUrl,_asCode,_asFid,_aoCfg){
if(_oAttach.mbHideBigAttach)
{
_oTop.showError("\u7FA4\u4FE1\u606F\u6682\u65F6\u4E0D\u652F\u6301\u53D1\u9001\u8D85\u5927\u9644\u4EF6");
}
else{
var _sHost=(getTop().getDomain()=="qq.com"?"http://mail.qq.com":"http://mail.foxmail.com");
if(/http:\/\/mail\.(qq|foxmail)\.com/.test(_asUrl))
{
_asUrl.replace(/http:\/\/mail\.(qq|foxmail)\.com/,_sHost);
}
else{
_asUrl=_sHost+_asUrl;
}
!(new RegExp("&code=","ig")).test(_asUrl)&&(_asUrl=[_asUrl,"&code=",_asCode].join(""));
_oCompose._addExistBigAttach([{id:_asFid,filesize:_asSize,filename:_asFileName,downloadlink:_asUrl,code:_asCode,key:_asUrl.replace(/^(.*?\?k=)([0-9a-zA-Z]+)(.*)?$/gi,"$2"),fid:_asFid,exptime:_asExpireTime,nExpireTime:_aoCfg&&_aoCfg.nExpireTime||-1}]);
_oCompose.setEditedAttach(true);
}
};
_oWin.getCurrentReceivers=function(_aoTextAreas){
if(_oCompose.getPageId()!="compose")
{
return "";
}
var _oAllRe=[];
_oTop.E(_aoTextAreas||["to","cc","bcc","sc"],function(_asAddrId){
var _oInput=_oCompose.getQMAddrInput().get(_asAddrId,_oWin),_sAddrs=_oInput&&_oInput.get();
_sAddrs&&(_oAllRe=_oAllRe.concat(_sAddrs));
});
return _oAllRe.join(";");
};
_oTop.E(_oCompose._oWinProxyFuncArr,function(_asFuncName){
_oWin[_asFuncName]=function(){
return _oCompose[_asFuncName].apply(_oCompose,arguments);
};
});
_oTop.E(_oCompose._oWinNeedRunFuncArr,function(_asFuncName){
_oWin[_asFuncName]=_oCompose[_asFuncName]();
});
_oTop.E(_oCompose._oWinUtilFuncArr,function(_afMethod,_asMethodName){
_oWin[_asMethodName]=_afMethod;
});
return _oCompose;
},SN:function(_asName){
return getTop().SN(_asName,this.getWin());
},S:function(_asId){
return getTop().S(_asId,this.getWin());
},openNewWinEdit:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
_oCompose._saveReloadInfo("opener");
getTop().goNewWin(_oWin.location.pathname+_oWin.location.search+'&plusopener=1'+"&from_wm_newwin=true");
return false;
},_setSubject:function(_aoCfg){
var _oSubject=this.S("subject");
if(_aoCfg.initsubject&&_oSubject)
{
_oSubject.value=_aoCfg.initsubject;
}
},_clearEditorCheckTimer:function(){
var _oCompose=this;
if(_oCompose._oErrCheckTimer)
{
_oCompose.getWin().clearTimeout(_oCompose._oErrCheckTimer);
_oCompose._oErrCheckTimer=null;
}
},_isNeedToClearMLCache:function(){
debug("compose: need to update maillist? "+this._moPageConfig.clearlistcache);
return this._moPageConfig.clearlistcache;
},_initButtonEvent:function(_aoConfig){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oProcess=_oCompose.moProcess;
var _oTop=getTop();
var _sAction={"card":"card","voice":"voice"}[_oCompose.getPageId()];
var _bNoActivex={"note":true}[_oCompose.getPageId()];
function _doSend(_asMode,_abNotCheck)
{
var _oFrm=_oCompose._getSubmitForm();
var _oSendTimeInput=_oFrm.sendtime;
var _oVerifyCodeInput=_oFrm.verifycode;
var _oVerifyCodeCnInput=_oFrm.verifycode_cn;
if(_oSendTimeInput&&_asMode!="keeptimer"&&(!_oVerifyCodeInput||!_oVerifyCodeInput.value)&&(!_oVerifyCodeCnInput||!_oVerifyCodeCnInput.value))
{
_oSendTimeInput.value=0;
}
if(typeof (_aoConfig.onsend)=="function")
{
_aoConfig.onsend.call(this,_aoConfig);
}
else{
if(_aoConfig.safemode&&_oCompose._getSubmitForm().action.indexOf("groupmail_send")==-1)
{
alert('\u60A8\u5F53\u524D\u6B63\u5728\u4F7F\u7528QQ\u90AE\u7BB1\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u90AE\u4EF6\u80FD\u6B63\u5E38\u53D1\u9001\uFF0C\u4F46\u6240\u53D1\u9001\u7684\u90AE\u4EF6\u5C06\u4E0D\u80FD\u4FDD\u5B58\u5230"\u5DF2\u53D1\u9001"\u6587\u4EF6\u5939\u3002');
}
_oProcess.doProcess(_aoConfig.t||"",_sAction||"send",_bNoActivex,_abNotCheck);
}
return false;
}
;function _doSave()
{
_oCompose.getComposeVar()._bIsUserSave=true;
if(typeof (_aoConfig.onsave)=="function")
{
_aoConfig.onsave.call(this,_aoConfig);
}
else{
_oProcess.doProcess("savedraft",_sAction||"save",_bNoActivex);
}
return false;
}
;function _doTimeSend(_aoEvent,_abNotCheck,_anCheckStartStep)
{
_anCheckStartStep=(typeof (_anCheckStartStep)=="undefined"?0:_anCheckStartStep);
if(!_abNotCheck&&!_oProcess.doProcessCheck("",_sAction||"send",_anCheckStartStep,function(_anCurStep){
_doTimeSend(_aoEvent,false,_anCurStep);
}))
{
return false;
}
var _oSendTimeTip=_oCompose._getSubmitForm().sendtimetip;
initTimeSendDlg({sendtimeyear:_oCompose.getInputObj("sendtimeyear"),sendtimemonth:_oCompose.getInputObj("sendtimemonth"),sendtimeday:_oCompose.getInputObj("sendtimeday"),sendtimehour:_oCompose.getInputObj("sendtimehour"),sendtimemin:_oCompose.getInputObj("sendtimemin"),confirmbtn:"\u53D1\u9001",title:"\u5B9A\u65F6\u53D1\u9001",timetips:_oSendTimeTip&&_oSendTimeTip.value||"\u9009\u62E9\u5B9A\u65F6\u53D1\u9001\u7684\u65F6\u95F4\uFF1A"},function(_aoObj){
_aoObj.S("confirm").setAttribute("selected","true");
},function(_aoObj){
if(_aoObj.S("confirm").getAttribute("selected")=="true")
{
_oCompose.getInputObj("sendtime").value=1;
_oWin.setTimeout(function(){
_doSend("keeptimer",true);
});
}
else{
var _oEditor=_oCompose.getPageEditor();
_oEditor&&_oEditor.focus();
}
return true;
});
return false;
}
;function _setEventCreater(_afEventFunc)
{
return function(_aObj){
_aObj.onclick=_afEventFunc;
};
}
;_oTop.E(_oCompose.SN("sendbtn"),_setEventCreater(_doSend));
_oTop.E(_oCompose.SN("savebtn"),_setEventCreater(_doSave));
_oTop.E(_oCompose.SN("timeSendbtn"),_setEventCreater(_doTimeSend));
var _oTop=getTop(),_oNoLetterBtn=_oCompose.S("noletter");
if(_oNoLetterBtn)
{
_oNoLetterBtn.onclick=function(){
var _oEditor=_oCompose.getPageEditor(),_oQQmailStationery=_oEditor.getContentObj("QQMAILSTATIONERY");
if(_oEditor.getContentType()=="html"&&_oQQmailStationery)
{
var _oDom=_oTop.GelTags("includetail",_oEditor.getEditWin().document)[0];
_oEditor.setContent(_oQQmailStationery.innerHTML+(_oDom?_oDom.innerHTML:""));
_oEditor.focus();
}
else{
_oCompose.useStationery_new();
this.checked=false;
_oEditor.focus();
}
};
}
var _oMobileEmailBtn=_oCompose.S("mobile_email");
if(_oMobileEmailBtn)
{
var _sDefSender=_oTop.goUserInfo.get('RealDefaulSender'),_sMobileEmail=_getOneSender("phone","1"),_fHandleME;
if(_sMobileEmail)
{
_fHandleME=function(){
if(_oMobileEmailBtn.checked)
{
_oTop.confirmBox({msg:_oTop.T(['<div class="dialog_f_t">\u662F\u5426\u4E34\u65F6\u6539\u7528$email$\u6765\u53D1\u4FE1?</div>','<div class="dialog_f_d">\u5BF9\u65B9\u56DE\u4FE1\u5230\u6B64\u5730\u5740\uFF0C\u76F8\u5E94\u624B\u673A\u4E0A\u4F1A\u7ACB\u5373\u6536\u5230\u77ED\u4FE1\u63D0\u9192\u3002</div>']).replace({email:_sMobileEmail}),width:450,onreturn:function(_aIsOk){
if(_aIsOk)
{
_oCompose.getComposeVar().oQmSender.setSenderSelected(_sMobileEmail);
_oTop.showInfo(_oTop.T("\u5C06\u4F7F\u7528$email$\u53D1\u4FE1\uFF0C\u6B64\u5730\u5740\u6536\u5230\u90AE\u4EF6\u4F1A\u63D0\u9192\u5230\u624B\u673A\u3002").replace({email:_sMobileEmail}));
_oTop.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,1");
}
else{
_oMobileEmailBtn.checked=false;
}
}});
}
else{
var _sNonMESender=(_sDefSender==_sMobileEmail)?_getOneSender("phone","0"):_sDefSender;
if(_sNonMESender)
{
_oCompose.getComposeVar().oQmSender.setSenderSelected(_sNonMESender);
_oTop.showInfo(_oTop.T("\u5C06\u4F7F\u7528$email$\u53D1\u4FE1\uFF0C\u907F\u514D\u6536\u5230\u624B\u673A\u53F7\u90AE\u7BB1\u7684\u77ED\u4FE1\u63D0\u9192\u3002").replace({email:_sNonMESender}));
_oTop.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,2");
}
else{
_oTop.showInfo("\u60A8\u53EA\u62E5\u6709\u624B\u673A\u53F7\u90AE\u7BB1\u5E10\u53F7\uFF0C\u65E0\u6CD5\u6539\u7528\u5176\u4ED6\u5E10\u53F7\u5730\u5740\u6765\u53D6\u6D88\u63D0\u9192");
_oMobileEmailBtn.checked=true;
}
}
};
}
else{
_fHandleME=function(){
_oTop.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,0");
_oTop.confirmBox({msg:['<div class="dialog_f_t">\u60A8\u9700\u8981\u5148\u6CE8\u518C\u624B\u673A\u53F7\u90AE\u7BB1\uFF0C\u624D\u80FD\u5F00\u542F\u6B64\u529F\u80FD\u3002</div>','<div class="dialog_f_d">\u624B\u673A\u53F7\u90AE\u7BB1\u53CA\u9644\u5C5E\u77ED\u4FE1\u63D0\u9192\u90FD\u662F\u514D\u8D39\u7684\u3002<br>\u5F00\u901A\u540E\u5728\u4E0B\u6B21\u5199\u4FE1\u65F6\u624D\u53EF\u4F7F\u7528\u63D0\u9192\u529F\u80FD\u3002</div>'].join(""),width:430,confirmBtnTxt:"&nbsp;\u5F00\u901A\u624B\u673A\u53F7\u90AE\u7BB1&nbsp;",cancelBtnTxt:"&nbsp;\u4E86\u89E3\u8BE6\u60C5&nbsp;",neverBtnTxt:"\u5173\u95ED",onload:function(){
this.S("cancel").onclick=function(){
window.open("http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=8&&no=1000605");
};
},onreturn:function(_abIsOk,_abCheck,_anClickType){
if(_abIsOk)
{
_oTop.goNewWin(_oTop.T("/cgi-bin/register?sid=$sid$&action=phonelist&t=phone_alias_reg1&vipfun=phone&loc=register,mail,phone,2").replace({sid:_oTop.getSid()}),false,true);
}
_oMobileEmailBtn.checked=false;
}});
};
}
_oMobileEmailBtn.onclick=_fHandleME;
_oMobileEmailBtn.checked=(_sDefSender==_sMobileEmail);
}
var _oEncryptBtn=_oCompose.S("secmailcode");
if(_oEncryptBtn)
{
_oEncryptBtn.onclick=function(){
if(_oEncryptBtn.value)
{
_oEncryptBtn.value="";
_oEncryptBtn.checked=false;
_oTop.show(_oCompose.S("encrypt_mail_tips"),false);
}
else{
var _oUcCtrl=_oCompose.getQMAddrInput().get("to",_oWin)||_oCompose.getQMAddrInput().get("bcc",_oWin);
if(_oUcCtrl&&_oUcCtrl.hasAddr(_oCompose.getComposeVar().sUrlCreator))
{
_oTop.showError("\u53D1\u7ED9\u7F51\u9875\u751F\u6210\u52A9\u624B\u7684\u90AE\u4EF6\u4E0D\u652F\u6301\u52A0\u5BC6");
_oEncryptBtn.checked=false;
}
else if(_oUcCtrl&&_oUcCtrl.hasAddr(_oCompose.getComposeVar().sQzone))
{
_oTop.showError("\u53D1\u8868\u5230\u6211\u7684Qzone\u7684\u90AE\u4EF6\u4E0D\u652F\u6301\u52A0\u5BC6");
_oEncryptBtn.checked=false;
}
else{
new _oTop.QMDialog({sid:"encryptdlg",sTitle:"\u90AE\u4EF6\u52A0\u5BC6",sBodyHtml:_oTop.TE(['<div style="font-size:12px; padding:20px; text-align:left; line-height:1.6;">','<p style="border-bottom:1px solid #E4E4E4; margin:0 0 15px; padding:0 0 15px;">\u8BBE\u7F6E\u90AE\u4EF6\u52A0\u5BC6\u4E4B\u540E\uFF0C\u6536\u4EF6\u4EBA\u9700\u8981\u89E3\u5BC6\u540E\u624D\u80FD\u67E5\u770B\u90AE\u4EF6\u5185\u5BB9\u3002<br/>\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u67E5\u770B<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1000822&&id=23" target="_blank">QQ\u90AE\u7BB1\u52A0\u5BC6\u90AE\u4EF6</a>\u3002</p>','<p style="margin:12px 0;"><label><span class="setMailCode">\u8F93\u5165\u5BC6\u7801: </span><input type="password" id="pw1" value="" style="width:220px;margin:0;"/></label></p>','<p style="margin:12px 0;"><label><span class="setMailCode">\u786E\u8BA4\u5BC6\u7801: </span><input type="password" id="pw2" value="" style="width:220px;margin:0;"/></label></p>','</div>','<div class="dialog_operate">','<input id="ok" type="button" value="\u786E\u5B9A" class="btn wd1">','<input id="cancel" type="button" value="\u53D6\u6D88" class="btn wd1">','</div>']).replace({}),nWidth:400,onclose:function(){
if(!_oEncryptBtn.value)
{
_oEncryptBtn.checked=false;
}
},onshow:function(){
this.S("pw1").focus();
},onload:function(){
var _oDlg=this;
_oDlg.S("ok").onclick=function(){
var _oPw1=_oDlg.S("pw1"),_oPw2=_oDlg.S("pw2");
if(!_oPw1.value)
{
_oPw1.focus();
_oTop.showError("\u8BF7\u8F93\u5165\u5BC6\u7801");
}
else if(!_oPw2.value)
{
_oPw2.focus();
_oTop.showError("\u8BF7\u8F93\u5165\u5BC6\u7801");
}
else if(_oPw1.value!=_oPw2.value)
{
_oPw1.focus();
_oTop.showError("\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4");
}
else{
_oEncryptBtn.value=_oPw1.value;
_oTop.show(_oCompose.S("encrypt_mail_tips"),true);
_oDlg.close();
}
};
_oDlg.S("cancel").onclick=function(){
_oDlg.close();
};
}});
}
}
};
}
},_initEditorForHelper:function(_asPageId,_aoConfig){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _fOnLoad=function(){
var _oEditor=_oCompose.getPageEditor(),_oReloadInfo=_oCompose._setEditorSource(_aoConfig,true);
_oCompose._setSubject(_aoConfig);
if(_aoConfig.bigattachs_auto.length)
{
_oCompose._addExistBigAttach(_aoConfig.bigattachs_auto);
}
_oCompose._initButtonEvent(_aoConfig);
_oAttach.initAttBigSize(_aoConfig);
_oAttach.initFileUpload(_aoConfig);
_oCompose.getPageEditor().rmNetDiskAction();
_oCompose._showEditorToolBar(getTop().goUserInfo.get('RealDefaultEditor'));
_oTop.show(_oCompose.S("editor_toolbar_btn_container"),_oEditor.isSupportToolBar());
!_aoConfig.pluscontent&&!(_oReloadInfo||{}).isconfirm&&_oCompose.loadValue(true);
_oCompose.setNeedCloseConform(true);
_oCompose.setEditedAttach(false);
_oCompose._setEditorPageEvent();
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload(_oCompose._getEditorFocusStatus());
};
var _oFuncList=_oTop.QMEditor.CONST.FUNCLIST.COMPOSE;
_oFuncList["tbExtern"]="Photo ScreenSnap Mo";
var _oEditor=_oTop.QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,funclist:_oFuncList,photoCGI:_oTop.getPhotoCGI(),customtags:_getCustomTagList(),isOpenEditBar:true,funcConfig:{Photo:{album:true,attach:true,iPhoneUpload:true}},nAutoRisizeMinHeight:319,onload:_fOnLoad,onfocus:_oCompose._editorFocus(),onmousedown:_oCompose._doEditorMouseDown(),onbeforesaverange:_oCompose._fixStationeryCursorPos(),onkeydown:_oCompose._composeKeyDown(),onkeyup:_oCompose._composeKeyUp(),onputcontent:_oCompose._fixBodyPadding(),onchangecontenttype:_oCompose._onChangeContentTypeEvent(),onshowinstallactive:_oCompose.showInstallActiveXDialog(),onpreview:_oCompose._showPreview()}).initialize(_aoConfig.source||_outputDataLoading(),false,_oCompose.S("QMEditorArea").getAttribute("tIndex"),_oCompose.S("QMEditorArea").getAttribute("accKey"));
_oTop.addEvent(_oWin,"unload",function(){
_oAttach.dragOverEvent(true);
});
},_initEditorForQfCompose:function(_asPageId,_aoConfig){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _fOnLoad=function(){
var _oEditor=_oCompose.getPageEditor();
_aoConfig.oMailInfo&&_oCompose.setComposeData(_aoConfig.oMailInfo);
_oCompose._initButtonEvent(_aoConfig);
_oCompose._showEditorToolBar(true);
_oCompose.setNeedCloseConform(true);
_oCompose.setEditedAttach(false);
_oCompose.autoSave(false);
_oCompose._setEditorPageEvent();
S("subject").focus();
};
_oTop.QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,funclist:getTop().QMEditor.CONST.FUNCLIST.QF_COMPOSE,photoCGI:getTop().getPhotoCGI(),customtags:_getCustomTagList(),nAutoRisizeMinHeight:319,onload:_fOnLoad,onfocus:_oCompose._editorFocus(),onmousedown:_oCompose._doEditorMouseDown(),onbeforesaverange:_oCompose._fixStationeryCursorPos(),onkeydown:_oCompose._composeKeyDown(),onpaste:_oCompose._pasteUrlAnalyse(),onputcontent:_oCompose._fixBodyPadding(),onchangecontenttype:_oCompose._onChangeContentTypeEvent(),onchangebgmusic:_oCompose._changeEditorBgMusic(),onshowinstallactive:_oCompose.showInstallActiveXDialog(),onpreview:_oCompose._showPreview(),onuploademl:_uploadComposeEml}).initialize(_aoConfig.source,false,_oCompose.S("QMEditorArea").getAttribute("tIndex")||3,_oCompose.S("QMEditorArea").getAttribute("accKey"));
},_initEditorForComposePage:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oAttach=_oCompose.moAttach;
var _oAddrCtrl=_oCompose.moAddrCtrl;
var _oWin=_oCompose.getWin();
var _oTop=getTop(),_oPlayers=_oTop.GelTags("player",_oCompose.S("source")),_oBgMusicInfo={};
_oTop.ossLogComposeInitTime('editor');
if(_oPlayers&&_oPlayers.length>0&&_oPlayers[0].id.toLowerCase()=="cmd:bgmusic")
{
var _oPlayer=_oPlayers[0];
_oBgMusicInfo.url=_oPlayer.getAttribute("url");
_oBgMusicInfo.song=decodeURIComponent(_oPlayer.getAttribute("song"));
_oBgMusicInfo.singer=decodeURIComponent(_oPlayer.getAttribute("singer"));
}
var _fOnLoad=function(){
var _oEditor=_oCompose.getPageEditor(),_oReloadInfo=_oCompose._reloadSaveContent(_aoConfig),_bFromReload=false,_bFromeCache=false,_sSubTmpl=_oCompose.getPageConfig().subtmpl;
if(_oCompose._isBusinessReume()&&_oCompose.initResumeData())
{
_oReloadInfo=null;
_bFromReload=false;
}
else if(_oReloadInfo)
{
_bFromReload=true;
}
else{
_oReloadInfo=_oCompose._setEditorSource(_aoConfig,true);
}
if(_sSubTmpl=="cnew"&&_oTop.bnewwin!=1&&getTop().getUrlParams(_oWin.location)["s"]=="left")
{
_oCompose._loadLocalData();
_bFromeCache=true;
}
_oCompose._setSubject(_aoConfig);
if(_aoConfig.bigattachs_auto.length)
{
_oCompose._addExistBigAttach(_aoConfig.bigattachs_auto);
}
if(_oBgMusicInfo.song||_oBgMusicInfo.url)
{
_oEditor.setBgMusicInfo(_oBgMusicInfo.song,_oBgMusicInfo.singer,_oBgMusicInfo.url);
}
_oCompose._initButtonEvent(_aoConfig);
_oEditor.bindResizeEditorHeight(function(_anEditorHeight){
if(_oAddrCtrl.moLinkmanInstance!=null)
{
_oAddrCtrl.moLinkmanInstance.resizeAddr&&_oAddrCtrl.moLinkmanInstance.resizeAddr(_anEditorHeight);
}
});
_oAttach.initAttBigSize(_aoConfig);
_oAttach.initFileUpload(_aoConfig);
_oCompose.getPageEditor().rmNetDiskAction();
var _sFrom=_aoConfig.saveFrom||_oTop.goUserInfo.get('RealDefaulSender');
if(_sSubTmpl=='forward')
{
_sFrom=_oTop.goUserInfo.get('RealDefaulSender');
}
_oCompose.getComposeVar().oQmSender=new _oTop.QMSender({oWin:_oWin,nCurFolderId:_aoConfig.folderid,sCurSaveFrom:_sFrom,sWidth:180,bShowNode:"parentNode",sVerAlign:"top",bDraft:_aoConfig.subtmpl=="draft",bFromReload:_bFromReload,onclickItemCallBack:function(_aoData){
_oCompose.S("mobile_email")&&(_oCompose.S("mobile_email").checked=(_aoData.phone=="1"));
}});
var _sSource=_oCompose.S("source")&&_oCompose.S("source").innerHTML;
var _aMatch=null;
if(_aMatch=(_sSource.match(/<sign signid="(.*?)" nreadytime="(.*?)">/)||_sSource.match(/<sign signid="(.*?)">/)||(getTop().getUrlParams(_oWin.location)["s"]=="background"&&getTop().getUrlParams(_oWin.location)["recoverCompose"]=="true")))
{
}
else{
if(_aoConfig.subtmpl!="draft"&&!_bFromReload)
{
if(_oTop.oAcctEmail&&_oTop.oAcctEmail[_sFrom])
{
_sFrom=_oTop.oAcctEmail[_sFrom];
}
_oCompose.getComposeVar().oQmSender.setSenderSelected(_sFrom);
}
}
_oCompose._setSaveSendCheckBox();
_oCompose._showEditorToolBar(_oTop.goUserInfo.get('RealDefaultEditor'));
_oTop.show(_oCompose.S("editor_toolbar_btn_container"),_oEditor.isSupportToolBar());
!_aoConfig.pluscontent&&!(_oReloadInfo||{}).isconfirm&&_oCompose.loadValue(true);
_oCompose.setNeedCloseConform(true);
_oCompose.setEditedAttach(false);
_oCompose.autoSave(false);
_oCompose._setEditorPageEvent();
_oCompose._setMultiSignatureSelect();
_oCompose._setOtherComposeOptionEvent();
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload(_oCompose._getEditorFocusStatus());
_oTop.gbIsMac&&!_oTop.detectActiveX(0,2)&&_oTop.requestShowTip("QMEditorToolBarPlusArea",32,_oWin);
if(_aoConfig.encryptmail=="false"&&_aoConfig.xqqstyle=="800"&&_aoConfig.subtmpl=="forward")
{
_oWin.setTimeout(function(){
_oTop.fireMouseEvent(_oCompose.S("otherComposeOptionBtn",_oWin),"click");
_oTop.requestShowTip("savesendbox",78,_oWin);
},1000);
}
_oTop.ossLogComposeInitTime.end('editor');
_oEditor.getEditWin().document.execCommand("RespectVisibilityInDesign",false,true);
};
function _asyncLoader()
{
_oTop.waitFor(function(){
return (!_aoConfig.asyncGetContent||_oTop.goAsyncContent)&&_oTop.goUserInfo.isLoaded();
},function(_abIsOk){
_fOnLoad();
},500,10000);
}
var _oEditor=_oTop.QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,funclist:_oTop.QMEditor.CONST.FUNCLIST.COMPOSE,photoCGI:_oTop.getPhotoCGI(),customtags:_getCustomTagList(),isOpenEditBar:true,funcConfig:{Photo:{album:true,attach:true,iPhoneUpload:true}},nAutoRisizeMinHeight:319,isNoEditScroll:_oTop.location.href.indexOf("from_wm_newwin")==-1?false:true,onload:function(){
this._mbIsGuideMap=(_aoConfig.bIsGuideMap=="1")||false;
_oCompose._moClipImg=new QMClipImg(this);
_oCompose._editorOnLoader(_asyncLoader).apply(this,arguments);
},onclick:function(_aoEvent){
QMClipImg.onclickImg(_aoEvent);
if(_oCompose.bNeedIdentifyLocation)
{
_oCompose._clearLocationStyle(_oTop.getEventTarget(_aoEvent));
_oCompose._doLocationIdentify(2);
}
},onfocus:_oCompose._editorFocus(),onblur:_oCompose._editorBlur(),onmousedown:_oCompose._doEditorMouseDown(),onmouseover:_oCompose._composeMouseOver(),onmouseout:_oCompose._composeMouseOut(),onbeforesaverange:_oCompose._fixStationeryCursorPos(),onkeydown:function(_aoEvent){
_oCompose._composeKeyDown().apply(this,arguments);
},onkeyup:function(_aoEvent){
_oCompose._composeKeyUp().apply(this,arguments);
},onpaste:function(){
_oCompose._pasteUrlAnalyse().apply(this,arguments);
_oCompose._moClipImg.analyse();
},onputcontent:_oCompose._fixBodyPadding(),onchangecontenttype:_oCompose._onChangeContentTypeEvent(),onchangebgmusic:_oCompose._changeEditorBgMusic(),onshowinstallactive:_oCompose.showInstallActiveXDialog(),onpreview:_oCompose._showPreview(),fullscreenCfg:{funclist:{toolbar:_oTop.QMEditor.CONST.FUNCLIST.COMPOSE.toolbar+' | Photo Word ScreenSnap Mo'},onfullscreenshow:function(_aoFullEditor){
var _oWordToolbar=_aoFullEditor.getToolBarInfo('Word');
if(_oWordToolbar&&_oWordToolbar.funcObj)
{
delete _oWordToolbar.funcObj;
QMEditor.setupFunc();
}
},onload:function(_aoFullEditor){
_oAttach.initDragFileUpload({oWin:_oTop,oImgUploadArea:_aoFullEditor.getEditorArea(),oEditor:_aoFullEditor,bNoFileUplad:true});
}}}).initialize(_aoConfig.source||_outputDataLoading(),false,_oCompose.S("QMEditorArea").getAttribute("tIndex"),_oCompose.S("QMEditorArea").getAttribute("accKey"));
_initEditorExternToolBarUI();
_oTop.ossLogComposeInitTime('addr');
_oTop.initAddress(function(_aoParam){
if(_aoParam.sType=='succeed')
{
_oTop.ossLogComposeInitTime.end('addr');
}
return _oAddrCtrl.showQuickAddr().apply(this,arguments);
});
_oTop.addEvent(_oWin,"unload",function(){
_oAttach.dragOverEvent(true);
});
},_initEditorForGroupPage:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oTop=getTop(),_fOnLoad=function(){
var _oReloadInfo=_oCompose._reloadSaveContent(_aoConfig)||_oCompose._setEditorSource(_aoConfig,true);
_oAttach.initHideAttach(_aoConfig);
_oAttach.initFileUpload(_aoConfig);
_oCompose.getPageEditor().rmNetDiskAction();
_oCompose._initButtonEvent(_aoConfig);
_oCompose._showEditorToolBar(getTop().goUserInfo.get('RealDefaultEditor'));
getTop().show(_oCompose.S("editor_toolbar_btn_container"),_oCompose.getPageEditor().isSupportToolBar());
if(!(_oReloadInfo||{}).isconfirm)
{
_oCompose.loadValue(true);
}
_oCompose.setNeedCloseConform(true);
_oCompose.setEditedAttach(false);
_oCompose._setEditorPageEvent();
_oCompose.enableAutoSave();
_oCompose.autoSave(false);
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload(_oCompose._getEditorFocusStatus());
var _oEditor=_oTop.QMEditor.getEditor('group');
if(_oEditor)
{
_oEditor.bindResizeEditorHeight(function(_aoEditorHeight){
_oWin.resizeRightAddr&&_oWin.resizeRightAddr(_aoEditorHeight);
});
}
};
function _asyncLoader()
{
_oTop.waitFor(function(){
return (!_aoConfig.asyncGetContent||_oTop.goAsyncContent)&&_oTop.goUserInfo.isLoaded();
},function(_abIsOk){
_fOnLoad();
},500,10000);
}
_oTop.QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,funclist:_oTop.QMEditor.CONST.FUNCLIST.GROUP,photoCGI:_oTop.getPhotoCGI(),photoConfig:{widthlimit:1024,heightlimit:1024,sizelimit:1},customtags:_getCustomTagList(),isOpenEditBar:true,nAutoRisizeMinHeight:319,funcConfig:{Photo:{align:"left",url:true,album:true,attach:true,iPhoneUpload:true}},onload:function(){
_oCompose._moClipImg=new QMClipImg(this);
_oCompose._editorOnLoader(_asyncLoader).apply(this,arguments);
},onclick:QMClipImg.onclickImg,onfocus:_oCompose._editorFocus(),onmousedown:_oCompose._doEditorMouseDown(),onbeforesaverange:_oCompose._fixStationeryCursorPos(),onkeydown:_oCompose._composeKeyDown(),onpaste:function(){
_oCompose._pasteUrlAnalyse().apply(this,arguments);
_oCompose._moClipImg.analyse();
},onputcontent:_oCompose._fixBodyPadding(),onshowinstallactive:_oCompose.showInstallActiveXDialog(),onpreview:_oCompose._showPreview(),fullscreenCfg:{funclist:{toolbar:_oTop.QMEditor.CONST.FUNCLIST.GROUP.toolbar+' | Photo Word ScreenSnap Mo'},onfullscreenshow:function(_aoFullEditor){
var _oWordToolbar=_aoFullEditor.getToolBarInfo('Word');
if(_oWordToolbar&&_oWordToolbar.funcObj)
{
delete _oWordToolbar.funcObj;
QMEditor.setupFunc();
}
},onload:function(_aoFullEditor){
_oAttach.initDragFileUpload({oWin:_oTop,oImgUploadArea:_aoFullEditor.getEditorArea(),oEditor:_aoFullEditor,bNoFileUplad:true});
}}}).initialize(_aoConfig.source||_outputDataLoading(),false,_oCompose.S("QMEditorArea").getAttribute("tIndex"),_oCompose.S("QMEditorArea").getAttribute("accKey"));
_initEditorExternToolBarUI();
_oTop.addEvent(_oWin,"unload",function(){
_oAttach.dragOverEvent(true);
});
},_initEditorForGroupSmsPage:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oTop=getTop(),_oEditorArea=_oCompose.S("QMEditorArea");
if(!_oEditorArea)
{
return;
}
_oTop.QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,height:_oTop.getStyle(_oEditorArea,"height"),funclist:_oTop.QMEditor.CONST.FUNCLIST.GROUP,photoCGI:_oTop.getPhotoCGI(),photoConfig:{widthlimit:1024,heightlimit:1024,sizelimit:1},customtags:_getCustomTagList(),onload:_oCompose._editorOnLoader(_fOnLoad),onfocus:_fOnFocus,onblur:_fOnBlur,onmousedown:_oCompose._doEditorMouseDown(),onkeydown:_fOnKeyDown,onpaste:_fOnKeyDown,onshowinstallactive:_oCompose.showInstallActiveXDialog()}).initialize(_aoConfig.source||_outputDataLoading(),false,5);
var _oEditor=null,_oToolContainer=_oCompose.S('editorToolContainer'),_oEditorIframe,_oEditorWin,_oEditorDoc,_nNORMALHEIGHT=62,_nMINHEIGHT=62,_nMinHeight,_nMaxHeight,_nRawWrapperHeight=+_oEditorArea.clientHeight,_nTimerId;
function _fOnLoad()
{
_oCompose._initButtonEvent(_aoConfig);
_oAttach.initHideAttach(_aoConfig);
_oAttach.initFileUpload(_aoConfig);
_oCompose.getPageEditor().rmNetDiskAction();
_oCompose._showEditorToolBar(false);
_oTop.show(_oCompose.S("editor_toolbar_btn_container"),_oCompose.getPageEditor().isSupportToolBar());
(_oEditor=_oCompose.getPageEditor()).setContent('');
_oEditorIframe=_oEditorArea.getElementsByTagName('iframe')[0];
_oEditorWin=_oEditorIframe.contentWindow;
_oEditorDoc=_oEditorWin.document;
_nMinHeight=+_oEditorDoc[_oTop.gbIsIE?'body':'documentElement'].scrollHeight;
_nMaxHeight=+_oEditorArea.getAttribute('maxHeight');
_oEditorArea.style.height='';
_oTop.show(_oCompose.S('smsInputHead'),true);
_oTop.addEvent(_oEditorDoc.body,'click',function(_aoEvent){
_fOnKeyDown(_aoEvent);
});
}
;function _fOnFocus(_aoEvent)
{
_nMinHeight=_nNORMALHEIGHT;
_fOnKeyDown(_aoEvent);
}
function _fOnBlur(_aoEvent)
{
return;
}
function _fOnKeyDown(_aoEvent)
{
if(_aoEvent&&_aoEvent.ctrlKey&&(_aoEvent.keyCode==10||_aoEvent.keyCode==13))
{
_oCompose._composeKeyDown()(_aoEvent);
return;
}
_oWin.setTimeout(function(){
if(!_oTop.gbIsIE&&_aoEvent.keyCode==8)
{
_oEditorIframe.style.height=_nMinHeight+'px';
}
var _nRealHeight=_oEditorWin.document[_oTop.gbIsIE?'body':'documentElement'].scrollHeight;
_oEditorWin.document.body.style.overflowY=(_nRealHeight>_nMaxHeight?'auto':'hidden');
_oEditorIframe.style.height=(_nRealHeight>_nMaxHeight?_nMaxHeight:(_nRealHeight<_nMinHeight?_nMinHeight:_nRealHeight))+'px';
},0);
}
_oWin.ajustEditor=_fOnKeyDown;
var _oQuickEditorCntr=_oCompose.S('quickEditorContainer'),_oFullModeLink=_oCompose.S('fullModeLink'),_oFoldLink=_oCompose.S('foldLink'),_oExpandLink=_oCompose.S('expandLink');
if(_oFullModeLink&&_oFoldLink&&_oExpandLink)
{
_oExpandLink.onclick=function(){
_expand(_oQuickEditorCntr,true,function(){
_oTop.show(_oExpandLink,false);
var _oExpDate=new Date();
_oExpDate.setTime(_oExpDate.getTime()+(300*24*3600*1000));
_oTop.setUserCookie('QUICK_EDITOR_FOLD',1,_oExpDate);
});
};
_oFoldLink.onclick=function(){
_expand(_oQuickEditorCntr,false,function(){
_oTop.show(_oExpandLink,true);
var _oExpDate=new Date();
_oExpDate.setTime(_oExpDate.getTime()+(300*24*3600*1000));
_oTop.setUserCookie('QUICK_EDITOR_FOLD',0,_oExpDate);
});
};
_oFullModeLink.onclick=function(){
if(!_oEditor)
{
return;
}
var _sGrpContent=_oEditor.getContent().toLowerCase(),_sPlainText=_oEditor.getContent(true),_sPureText=_oTop.trim(_sPlainText.replace(/&nbsp;/ig,'')),_oVfrm=_oCompose._getSubmitForm(),_oFileCell=_oCompose.S('filecell'),_oBigAttach=_oCompose.S('BigAttach');
if(_oFileCell.innerHTML.length>10||_oBigAttach.innerHTML.length>10||_oVfrm.mailtype.value=='vote')
{
_oTop.confirmBox({msg:['<div class="dialog_f_t">\u5207\u6362\u5230\u5B8C\u6574\u683C\u5F0F\u4F1A\u4E22\u5931\u9644\u4EF6\u548C\u6295\u7968\u6570\u636E\u3002</div>','<div class="dialog_f_d" style="font-size:14px;">\u60A8\u786E\u5B9A\u7EE7\u7EED\u5207\u6362\uFF1F</div>'].join(""),width:430,onreturn:function(_aIsOk){
if(_aIsOk)
{
_toFullMode();
}
}});
}
else{
_toFullMode();
}
function _toFullMode()
{
if(_sPureText)
{
_oCompose._saveReloadInfo();
}
_oVfrm.action='/cgi-bin/grouplist1?sid='+getTop().getSid();
_oVfrm.target='mainFrame';
_oVfrm.t.value='compose_group';
_oVfrm.s.value='';
_oVfrm.submit();
}
};
}
function _expand(_aoDom,_abExpand,_afComplete)
{
var _oAnimation=getTop().qmAnimation;
_oAnimation[_abExpand?'expand':'fold'](_aoDom,{durlimit:300,type:'wait',speed:'fast',oncomplete:function(){
_afComplete();
_oTop.show(_aoDom,_abExpand);
}});
}
_oTop.addEvent(_oWin,"unload",function(){
_oAttach.dragOverEvent(true);
});
},_initEditorForCardPage:function(_asPageId,_aoConfig){
var _oTop=getTop();
var _oCompose=this;
var _oAddrCtrl=_oCompose.moAddrCtrl;
_oCompose._reloadSaveContent(_aoConfig);
_oCompose._initButtonEvent(_aoConfig);
_oCompose._setSaveSendCheckBox();
_oCompose.S("sendmailname").value=_oTop.goUserInfo.get('RealDefaulSender');
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload();
_oTop.initAddress(_oAddrCtrl.showQuickAddr());
},_initEmpty:function(){
},initCardListPage:function(_aoConfig,_aoWinFunList){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
_oTop.extend(_oWin,_aoWinFunList);
_oCompose.msPageId="card";
_oCompose.isNewCardList=true;
_oCompose._initButtonEvent(_aoConfig);
_oCompose._setSaveSendCheckBox();
try{
_oCompose.S("sendmailname").value=_oTop.goUserInfo.get('RealDefaulSender');
}
catch(e)
{
debug(["getDefaultSender error:",e.message]);
}
},_initEditorForVoicePage:function(_asPageId,_aoConfig){
var _oTop=getTop();
var _oCompose=this;
var _oAddrCtrl=_oCompose.moAddrCtrl;
var _oWin=_oCompose.getWin();
if(!_oCompose.S("QMEditorArea"))
{
_oCompose._initButtonEvent(_aoConfig);
_oCompose._setEditorPageEvent();
_oCompose._setSaveSendCheckBox();
_oCompose.setNeedCloseConform(true);
_oCompose.setEditedAttach(false);
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload(_oCompose._getEditorFocusStatus());
try{
_oCompose.S("sendmailname").value=getTop().goUserInfo.get('RealDefaulSender');
}
catch(e)
{
debug(e.message);
}
getTop().initAddress(_oAddrCtrl.showQuickAddr());
}
var _fOnLoad=function(){
_oCompose._setEditorSource(_aoConfig,true);
_oCompose._initButtonEvent(_aoConfig);
_oCompose.getComposeVar().oQmSender=new _oTop.QMSender({nCurFolderId:"",sCurSaveFrom:"",sWidth:210,bShowNode:"parentNode"});
_oCompose._setEditorPageEvent();
_oCompose._setSaveSendCheckBox();
_oCompose.setNeedCloseConform(true);
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload(_oCompose._getEditorFocusStatus());
};
getTop().QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,funclist:getTop().QMEditor.CONST.FUNCLIST.MO,customtags:_getCustomTagList(),onload:_oCompose._editorOnLoader(_fOnLoad),onkeydown:_oCompose._composeKeyDown()}).initialize(_aoConfig.source,false,3);
_oCompose._reloadSaveContent(_aoConfig);
},_initForPostcardPage:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oAddrCtrl=_oCompose.moAddrCtrl;
_oCompose._editorOnLoader(function(){
_oCompose._reloadSaveContent(_aoConfig);
_oCompose._initButtonEvent(_aoConfig);
_oCompose._setEditorPageEvent();
_oCompose._setSaveSendCheckBox();
_oCompose.S("sendmailname").value=getTop().goUserInfo.get('RealDefaulSender');
_oCompose.setNeedCloseConform(true);
})();
getTop().initAddress(_oAddrCtrl.showQuickAddr());
},_initEditorForQQPage:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _fOnLoad=function(){
_oCompose._initButtonEvent(_aoConfig);
_oAttach.initHideAttach(_aoConfig);
_oAttach.initAttBigSize(_aoConfig);
_oAttach.initFileUpload(_aoConfig);
_oCompose.getPageEditor().rmNetDiskAction();
_oCompose._setEditorSource(_aoConfig,true,2);
_oCompose._setSaveSendCheckBox();
_oCompose._setEditorPageEvent();
if(typeof (_aoConfig.onload)=="function")
{
_aoConfig.onload();
}
};
getTop().QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,style:"border:none;icon:big;",funclist:{tbExtern:"Mo Photo"},photoCGI:getTop().getPhotoCGI(),customtags:_getCustomTagList(),onload:_oCompose._editorOnLoader(_fOnLoad),onfocus:_oCompose._editorFocus(),onmousedown:_oCompose._doEditorMouseDown(),onbeforesaverange:_oCompose._fixStationeryCursorPos(),onkeydown:_oCompose._composeKeyDown(),onputcontent:_oCompose._fixBodyPadding()}).initialize(_aoConfig.source||_outputDataLoading(),false,5);
},_initEditorForReadMailGroupPage:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _fOnLoad=function(){
this.setContent(getTop().QMEditor.getBreakLine(1));
_oCompose._setEditorPageEvent();
if(typeof (_aoConfig.onload)=="function")
{
_aoConfig.onload();
}
_oCompose._clearEditorCheckTimer();
_oCompose.focusPageEditor(0);
};
getTop().QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,funclist:{tbExtern:"Mo"},customtags:_getCustomTagList(),onmousedown:_oCompose._doEditorMouseDown(),onload:_fOnLoad,onkeydown:_oCompose._composeKeyDown()}).initialize(_aoConfig.source,false);
},_initEditorForNoteFirstPage:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oWin=_oCompose.getWin();
getTop().QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,height:_aoConfig.height||getTop().getStyle(_oCompose.S("QMEditorArea"),"height"),isNoEditScroll:true,onmousedown:_oCompose._doEditorMouseDown(),onkeydown:_oCompose._composeKeyDown(),onpaste:function(){
callBack.call(this,_aoConfig.onpaste);
},onfocus:function(){
if(this.getContent(true)==getNoteFirstPageSource(true,_aoConfig.sDefaultText))
{
this.setContent(getTop().QMEditor.getBreakLine());
this.focus(0);
}
},onblur:function(){
var _sContent=this.getContent().toLowerCase();
if(!_sContent||_sContent==getTop().QMEditor.getBreakLine().toLowerCase())
{
this.setContent(getNoteFirstPageSource(false,_aoConfig.sDefaultText));
}
},onload:function(){
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload(_oCompose._getEditorFocusStatus());
_oCompose._clearEditorCheckTimer();
}}).initialize(getNoteFirstPageSource(false,_aoConfig.sDefaultText),false,false,_oCompose.S("QMEditorArea").getAttribute("accKey"));
},_initEditorForNotePage:function(_asPageId,_aoConfig){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _fOnLoad=function(){
_oCompose._initButtonEvent(_aoConfig);
if(_aoConfig.isPaste)
{
_oCompose.getPageEditor().setContent("");
_oCompose.getPageEditor().paste();
}
else if(_aoConfig.isReadCache)
{
var _sContentCache=getTop().getGlobalVarValue("NOTE_CONTENT_CACHE");
if(_sContentCache)
{
_oCompose.getPageEditor().setContent(_sContentCache);
}
}
else if(_aoConfig.asyncGetContent||_oTop.goAsyncContent)
{
var _oSubject=_oCompose.S("subject");
if(_oSubject)
{
_oSubject.value=_oTop.goAsyncContent.subject;
_oSubject.focus();
}
_oCompose.getPageEditor().setContent(_oTop.goAsyncContent.content);
}
else{
_oCompose.getPageEditor().setContent(filterSourceContent(_oCompose.S("source").innerHTML)||getTop().QMEditor.getBreakLine());
}
_oCompose._showEditorToolBar(getTop().goUserInfo.get('RealDefaultEditor'));
getTop().show(_oCompose.S("editor_toolbar_btn_container"),_oCompose.getPageEditor().isSupportToolBar());
_oCompose.loadValue(true);
_oCompose.setNeedCloseConform(true);
_oCompose.autoSave(false);
_oCompose._setEditorPageEvent();
_oCompose._clearEditorCheckTimer();
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload(_oCompose._getEditorFocusStatus());
};
function _asyncLoader()
{
_oTop.waitFor(function(){
return !_aoConfig.asyncGetContent||getTop().goAsyncContent;
},function(_abIsOk){
_fOnLoad();
},500,10000);
}
getTop().QMEditor.createEditor({isOpenEditBar:true,editorId:_asPageId,editorAreaWin:_oWin,funclist:getTop().QMEditor.CONST.FUNCLIST.NOTE,photoCGI:getTop().getPhotoCGI(),nAutoRisizeMinHeight:319,funcConfig:{Photo:{align:"left",url:true,album:true,attach:true,iPhoneUpload:true}},onload:_asyncLoader,onmousedown:_oCompose._doEditorMouseDown(),onkeydown:_oCompose._composeKeyDown(),onpaste:function(){
_oCompose._pasteUrlAnalyse(arguments);
_aoConfig.onPaste();
},onchangecontenttype:_oCompose._onChangeContentTypeEvent(),onshowinstallactive:_oCompose.showInstallActiveXDialog()}).initialize(_aoConfig.source||_outputDataLoading(),false,_oCompose.S("QMEditorArea").getAttribute("tIndex"),_oCompose.S("QMEditorArea").getAttribute("accKey"));
},_initForReadmailConv:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _fOnLoad=function(){
_oCompose._showEditorToolBar(getTop().goUserInfo.get('RealDefaultEditor'));
getTop().show(_oCompose.S("editor_toolbar_btn_container"),_oCompose.getPageEditor().isSupportToolBar());
_oCompose.loadValue(true);
_oCompose.setNeedCloseConform(true);
_oCompose._setEditorPageEvent();
_oCompose._clearEditorCheckTimer();
typeof (_aoConfig.onload)=="function"&&_aoConfig.onload(_oCompose._getEditorFocusStatus());
_oCompose.focusPageEditor(0);
};
getTop().QMEditor.createEditor({editorId:_asPageId,editorAreaWin:_oWin,funclist:getTop().QMEditor.CONST.FUNCLIST.NOTE,photoCGI:getTop().getPhotoCGI(),nMinHeight:319,onload:_fOnLoad,onmousedown:_oCompose._doEditorMouseDown(),onkeydown:_oCompose._composeKeyDown(),onpaste:_oCompose._pasteUrlAnalyse(),onchangecontenttype:_oCompose._onChangeContentTypeEvent(),onshowinstallactive:_oCompose.showInstallActiveXDialog()}).initialize("",false,_oCompose.S("QMEditorArea").getAttribute("tIndex"),_oCompose.S("QMEditorArea").getAttribute("accKey"));
},_initForRemindPage:function(_asPageId,_aoConfig){
var _oCompose=this;
var _oAddrCtrl=_oCompose.moAddrCtrl;
_oCompose._editorOnLoader(function(){
_oCompose._initButtonEvent(_aoConfig);
_oCompose._setEditorPageEvent();
})();
getTop().initAddress(_oAddrCtrl.showQuickAddr());
},_editorOnLoader:function(_afFunc){
var _oCompose=this;
return function(){
_oCompose._clearEditorCheckTimer();
getTop().goUserInfo.deferget('RealDefaultEditor',_afFunc);
};
},getInputObj:function(_asName,_aoFrm,_abDisabled){
var _oTop=getTop();
var _oCompose=this;
var _oFrm=_aoFrm||_oCompose._getSubmitForm();
if(!_oFrm)
{
return null;
}
var _obj=_oFrm[_asName];
if(!_obj)
{
_oTop.insertHTML(_oFrm,"afterBegin",_oTop.T('<input name="$name$" type="hidden" $disabled$/>').replace({name:_asName,disabled:_abDisabled?"disabled":""}));
_obj=_oFrm[_asName];
}
return _obj;
},_isContentEdited:function(){
var _oCompose=this;
var _oCtrls=_oCompose._oLoadValueCtrls,_oCache=_oCompose._oLoadValueCache,_fClean=function(_asHtml){
return _asHtml.replace(/<param .*?\">/ig,"").replace(/<script[^>]*?>.*?(<\/script>)/gi,"");
};
if(_oCompose.getPageEditor())
{
_oCompose._fixQQMailStationery("100%");
_oCompose.getInputObj("content_compare",null,true).value=_oCompose.getPageEditor()&&_oCompose.getPageEditor().getContent();
_oCompose._fixQQMailStationery(getTop().gbIsIE?"auto":"100%");
}
for(var i=_oCtrls.length-1;i>=0;i--)
{
var _oCtrl=_oCompose.getInputObj(_oCtrls[i],null,true);
var _sValue=_fClean(_oCtrl&&_oCtrl.value||"");
var _sCac=_fClean(_oCache[i]||"");
if(_sValue!=_sCac)
{
return true;
}
}
var _oTop=getTop();
if(_oCompose.getPageId()=="group"&&_oTop.isShow(_oCompose.S("Votelist")))
{
var _oDomVoteSubject=_oCompose.S("votesubject");
if(_oDomVoteSubject.value!="")
{
return true;
}
var _oDomVoteOptions=_oCompose.SN("option");
for(var _i=0;_i<_oDomVoteOptions.length;_i++)
{
if(_oDomVoteOptions[_i].value!="")
{
return true;
}
}
}
return false;
},_saveReloadInfo:function(_asTo){
var _oCompose=this;
getTop()[_asTo=="opener"?"goReloadInfoOpener":"goReloadInfo"]=getTop().extend(_oCompose._getToBeReloadInfo(),{isconfirm:_oCompose._isContentEdited()});
},_reloadSaveContent:function(_aoConfig){
var _oCompose=this;
var _oTop=getTop();
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oReloadInfo=_oTop.goReloadInfo||_oTop.goAsyncContent;
_oTop.goReloadInfo=_oTop.goAsyncContent=null;
if(_aoConfig.sPlusOpener)
{
var _oOpener=_oTop.opener;
if(_oOpener)
{
_oReloadInfo=_oOpener.goReloadInfoOpener;
_oOpener.goReloadInfoOpener=null;
}
}
if(!!_oReloadInfo)
{
var _sBigAttachCode=_oReloadInfo.bacode,_sExistFileCode=_oReloadInfo.excode,_sOnlineDocCode=_oReloadInfo.sOnlineDocCode,_bHideBigAttach=_aoConfig&&_aoConfig.hideBigAttach,_oFileUploadData=_oReloadInfo.fileuploaddata,_oSubjectDom=_oCompose.S("subject"),_oBigAttachDom=_oCompose.S("BigAttach"),_oExistFileDom=_oCompose.S("exist_file"),_sOnlineDocAttachDom=_oCompose.S("div_onlineAttach"),_oEditor=_oCompose.getPageEditor();
if(_oReloadInfo.exbacode)
{
_sBigAttachCode+=_oReloadInfo.exbacode;
}
if(_bHideBigAttach&&_sBigAttachCode)
{
_oTop.showError("\u7FA4\u4FE1\u606F\u6682\u65F6\u4E0D\u652F\u6301\u53D1\u9001\u8D85\u5927\u9644\u4EF6");
_sBigAttachCode="";
}
if(_oBigAttachDom&&_sBigAttachCode&&_sBigAttachCode.replace(/\s/ig,""))
{
_oBigAttachDom.innerHTML=_sBigAttachCode;
_oTop.show("attachContainer",true,_oTop.getMainWin());
var _oResumeWorks=_oTop.finds('.attsep[mode="resume_works"]',_oBigAttachDom);
if(_oResumeWorks.length)
{
var _oResumeWorksNode=_oCompose._getResumeWorksContainer();
_oTop.E(_oResumeWorks,function(_aoNode){
_oResumeWorksNode.appendChild(_aoNode);
});
}
}
_oFileUploadData&&_oAttach.oFileUploadMgr.initFileList(_oFileUploadData);
if(_oExistFileDom&&_sExistFileCode&&_sExistFileCode.replace(/\s/ig,""))
{
_oExistFileDom.innerHTML=_sExistFileCode.replace(/name=\"replymailattach\"/g,'name="mailattach"');
_oTop.show("attachContainer",true,_oTop.getMainWin());
var _oResumeAttach=_oTop.finds('.input[mode="resume_fid"]',_oExistFileDom)[0];
if(_oResumeAttach)
{
if(!_oCompose.S('exist_resume_attach'))
{
_oTop.insertHTML(_oCompose.S('attachContainer'),'afterBegin','<div id="exist_resume_attach" class="composeResume_attach"></div>');
}
_oCompose.S('exist_resume_attach').appendChild(_oTop.parents('.attsep',_oResumeAttach)[0]);
}
}
if(_sOnlineDocAttachDom&&_sOnlineDocCode&&_sOnlineDocCode.replace(/\s/ig,""))
{
_sOnlineDocAttachDom.innerHTML=_sOnlineDocCode;
_oTop.show("attachContainer",true,_oTop.getMainWin());
}
if(_oReloadInfo.hasResume)
{
_oCompose.getResumeSender_=function(){
return _oReloadInfo.resumesender;
};
}
var _oQmAddr=_oCompose.getQMAddrInput();
_oTop.E(["to","cc","bcc","sc"],function(_asItem,_anIdx){
var _oInput=_oQmAddr&&_oQmAddr.get(_asItem,_oWin);
_oReloadInfo[_asItem]&&_oInput&&_oInput.add(_oReloadInfo[_asItem]);
});
if(_oReloadInfo["sc"])
{
_oCompose.moAddrCtrl.showSeparatedCopy(_oWin,true);
}
if(_oSubjectDom&&_oReloadInfo.subject)
{
_oSubjectDom.value=_oReloadInfo.subject;
}
if(_oEditor)
{
if(_oReloadInfo.content)
{
_oEditor.setContent(_oReloadInfo.content);
}
else{
_oEditor.setContent(_oReloadInfo.pluscontent||"",_oTop.QMEditor.getBreakLine(1),_oEditor.getContent());
}
}
if(_oCompose.getPageId()=="group"&&_oReloadInfo.votelist)
{
var _oVotelist=_oReloadInfo.votelist;
_oTop.show(_oCompose.S("Votelist"),true);
var _oDomVoteSubject=_oCompose.S("votesubject");
_oDomVoteSubject.value=_oVotelist.subject;
var _oVoteOptions=_oVotelist.options;
if(_oVoteOptions.length>3)
{
for(var _i=3;_i<_oVoteOptions.length;_i++)
{
var _oPNode=_oCompose.S("option_div");
var _oPDivs=_oPNode.getElementsByTagName("DIV");
var _oNewNode=_oWin.document.createElement("DIV");
_oNewNode.style.margin=_oPNode.childNodes[1].style.margin;
_oNewNode.innerHTML='<span class="votelist_l">\u9009\u9879'+(_i+1)+'\uFF1A</span><input name="option" type="txt" class="txt" style="width:305px" />';
_oPNode.appendChild(_oNewNode);
}
}
if(_oVoteOptions.length==2)
{
var _oPNode=_oCompose.S("option_div");
var _oPDivs=_oPNode.getElementsByTagName("DIV");
_oPNode.removeChild(_oPDivs[2]);
}
var _oDomVoteOptions=_oCompose.SN("option");
for(var _i=0;_i<_oDomVoteOptions.length;_i++)
{
_oDomVoteOptions[_i].value=_oVoteOptions[_i];
}
if(_oVotelist.type==2)
{
_oCompose.S("votetype1").checked=false;
_oCompose.S("votetype2").checked=true;
}
}
if(_oCompose.S("qqgroupid")&&_oReloadInfo.groupId)
{
_oTop.getMainWin()&&_oTop.getMainWin().selectGroup(_oReloadInfo.groupId);
}
return _oReloadInfo;
}
return null;
},_getSubmitForm:function(){
var _oCompose=this;
var _oTop=getTop();
if(_oCompose.getPageId()=='groupsms')
{
return _oCompose.S('frmCompose');
}
return _oCompose.S('frm');
},getPageId:function(){
return this.msPageId;
},getPageConfig:function(){
return this._moPageConfig;
},getPageEditor:function(){
var _oCompose=this;
return getTop().QMEditor&&getTop().QMEditor.getEditor(_oCompose.getPageId());
},_insertEditorImage:function(_asUrl,_afCallback,_aoEditor){
var _oCompose=this;
var _oTop=getTop();
var _oEditor=_aoEditor||_oCompose.getPageEditor().getCurrentEditor();
_oEditor.insertImage(_asUrl,_afCallback||function(_asUrl,_aoDom){
var _oImg=_oEditor.getImgDom(_aoDom);
_oTop.showInfo('\u6B63\u5728\u52A0\u8F7D\u56FE\u7247...');
_oTop.addEvent(_oImg,'load',function(){
_oTop.hiddenMsg();
});
_oTop.addEvent(_oImg,'error',function(){
_oTop.showError('\u56FE\u7247\u52A0\u8F7D\u5931\u8D25');
});
});
},attachInsertImage:function(_asUrl,_afCallback){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oEditor=_oCompose.getPageEditor().getCurrentEditor();
if(_oEditor.getContentType()=="text")
{
getTop().confirmBox({msg:"\u65E0\u6CD5\u6DFB\u52A0\u56FE\u7247\u5230\u7EAF\u6587\u672C\uFF0C\u60A8\u662F\u5426\u6539\u7528\u5BCC\u6587\u672C\u7F16\u8F91\uFF1F",title:"\u63D0\u793A",onreturn:function(_abIsOk){
if(_abIsOk)
{
var _oEditor=_oCompose.getPageEditor().getCurrentEditor();
_oEditor.changeContentType("html");
_oCompose.S("contenttype").checked=false;
_oWin.setTimeout(function(){
_oCompose._insertEditorImage(_asUrl,_afCallback,_oEditor);
},100);
}
}});
}
else{
_oCompose._insertEditorImage(_asUrl,_afCallback,_oEditor);
}
return false;
},attachInsertFile:function(_asFileId){
var _oCompose=this;
var _oTop=getTop();
var _oFile=_oCompose.moAttach.oFileUploadMgr.getFileById(_asFileId);
var _sUrl=_oFile.get('sFileUrl')||_oTop.getPreviewView(_oFile);
if(_oFile.get('nSize')>1024*1024&&_sUrl.indexOf('&filetype=txt&')!=-1)
{
return _oTop.showError('\u8BFB\u53D6\u6587\u6863\u5185\u5BB9\u5931\u8D25\uFF0C\u6682\u65E0\u6CD5\u5BFC\u5165');
}
_oCompose.doAttachInsertFile(_sUrl);
_oTop.ossLog('delay','all','stat=import_word&type=attach|init|uploadattach');
return false;
},existAttachInsertFile:function(_asId){
var _oCompose=this;
var _oTop=getTop();
var _oInfo=_oCompose.moAttach.getFileInfo(_asId);
if(_oInfo)
{
var _oSearch=[];
_oTop.E(_oTop.getUrlParams(_oInfo.sUrl),function(_asVal,_asKey){
_oSearch.push(_asKey+'='+encodeURIComponent(decodeURIComponent(_asVal)));
});
_oCompose.doAttachInsertFile(_oInfo.sUrl.split('?')[0]+'?'+_oSearch.join('&')+'&resp_charset=UTF8');
getTop().ossLog('delay','all','stat=import_word&type=attach|init|existattach');
}
return false;
},_doResumeAttachInsertFile:function(_asUrl,_afCheckEditorType){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
_oTop.showProcess(1,true,"\u6B63\u5728\u8BFB\u53D6\u6587\u6863\u5185\u5BB9...",null,false);
_oTop.createIframe(_oWin,_asUrl+'&nocmd=true',{onload:function(_aoWin,_asId,_aoIframe){
try{
var $=_aoIframe.contentWindow.$;
_oTop.waitFor(function(){
return $.ctrl('resume.controller.attach_preview');
},function(_abOK){
if(_abOK)
{
$.ctrl('resume.controller.attach_preview').ondata(function(_abOK){
_oTop.showProcess(0);
if(_abOK)
{
if(!_afCheckEditorType())
{
return;
}
if(_oTop.appendEditorFileContent($.ctrl('resume.controller.preview').render('compose')+'<div><br /></div>',_oCompose.getPageEditor(),false)!==true)
{
_oTop.showError('\u83B7\u53D6\u7B80\u5386\u5185\u5BB9\u5931\u8D25');
}
}
else{
_oTop.showError('\u8BFB\u53D6\u7B80\u5386\u5185\u5BB9\u5931\u8D25');
}
_oTop.removeSelf(_aoIframe);
});
}
});
}
catch(e)
{
_oTop.showError('\u52A0\u8F7D\u7B80\u5386\u5185\u5BB9\u5931\u8D25');
}
}});
return true;
},doAttachInsertFile:function(_asUrl){
var _oCompose=this;
var _oTop=getTop();
var _oEditor=_oCompose.getPageEditor();
_oTop.ossLog('delay','all','stat=import_word&type=attach|init');
function _checkEditorType()
{
if(_oEditor.getCurrentEditor().getContentType()!='html')
{
_oTop.ossLog('delay','all','stat=import_word&type=attach|input_error|editor_type');
_oTop.showError('\u6587\u672C\u7F16\u8F91\u5668\u4E0D\u652F\u6301\u5BFC\u5165');
return false;
;
}
return true;
}
if(!_checkEditorType())
{
return;
}
if(_asUrl.indexOf('/cgi-bin/resume?')!=-1)
{
return _oCompose._doResumeAttachInsertFile(_asUrl,_checkEditorType);
}
if(_asUrl.indexOf("t=attachments_simple")==-1)
{
if(_asUrl.indexOf("&t=")>-1||_asUrl.indexOf("?t=")>-1)
{
_asUrl=_asUrl.replace(/t=([^&]*)/,"t=attachments_simple");
}
else{
_asUrl+="&t=attachments_simple";
}
}
_asUrl=_asUrl.replace('/cgi-bin/viewfile','/cgi-bin/readtemplate');
_asUrl+='&not302=yes&filter=false';
if(_asUrl.indexOf('&filetype=pdf&')!=-1)
{
_asUrl+='&firstpage=1&lastpage=999';
}
_oTop.showProcess(1,true,"\u6B63\u5728\u8BFB\u53D6\u6587\u6863\u5185\u5BB9...",null,false);
_oTop.QMAjax.send(_asUrl,{onload:function(_abOK,_asData){
if(_abOK&&_asData&&(''+_asData).indexOf('<!--cgi exception-->')!==0)
{
function _addContent(_asContent,_abTxt)
{
if(!_checkEditorType())
{
return;
}
if(_oTop.appendEditorFileContent(_asContent,_oEditor,_abTxt)!==true)
{
_oTop.showError('\u8BFB\u53D6\u6587\u6863\u5185\u5BB9\u5931\u8D25\uFF0C\u6682\u65E0\u6CD5\u5BFC\u5165');
}
_oTop.showProcess(0);
_oTop.ossLog('delay','all','stat=import_word&type=attach|succ');
}
if(!_oTop.trim(_asData))
{
_oTop.showError('\u8BFB\u53D6\u5185\u5BB9\u5931\u8D25\uFF0C\u6216\u6587\u6863\u5185\u5BB9\u4E3A\u7A7A');
return;
}
if(_asData.indexOf("qmbox")==-1)
{
if(_asUrl.indexOf('/cgi-bin/readtemplate')!=-1)
{
_addContent(_asData,_asUrl.indexOf('&filetype=html')==-1);
return;
}
var _oResult=_oTop.evalValue(_asData);
if(_oResult.ret)
{
if(_oResult.ret=="-9006")
{
_oTop.showError("\u6587\u6863\u88AB\u52A0\u5BC6\uFF0C\u5BFC\u5165\u5931\u8D25");
}
else{
_oTop.showError('\u672A\u77E5\u9519\u8BEF\uFF0C\u83B7\u53D6\u6587\u6863\u4FE1\u606F\u5931\u8D25');
}
return;
}
}
if(!_checkEditorType())
{
return;
}
_oTop.getOfficeRealContent(_asData,{onload:function(_abOK,_asData){
if(_abOK)
{
_addContent(_asData);
}
else{
_oTop.ossLog('delay','all','stat=import_word&type=attach|input_error|office_read');
_oTop.showError('\u8BFB\u53D6\u6587\u6863\u5185\u5BB9\u5931\u8D25');
}
}});
}
else{
_oTop.showError('\u8BFB\u53D6\u6587\u6863\u5931\u8D25');
_oTop.ossLog('delay','all','stat=import_word&type=attach|input_error|cgi'+(_abOK?'_http':'_err'));
}
}});
},focusPageEditor:function(_nPos,_asId){
var _oCompose=this;
var _oEditor=_oCompose.getPageEditor();
if(_oEditor)
{
_oEditor.resizeNoScrollEditor();
_oEditor.focus(_nPos||0,_oEditor.getContentObj(_asId||"QQMAILSTATIONERY"));
}
},changeContentType:function(_oCheck){
var _oTop=getTop();
var _oCompose=this;
if(!_oCompose.getPageEditor().changeContentType(_oCheck.checked?"text":"html"))
{
_oCheck.checked=!_oCheck.checked;
}
else{
_oTop.show(_oCompose.S("signSelContainer"),!_oCheck.checked);
}
},_onChangeContentTypeEvent:function(){
var _oCompose=this;
return function(){
var _bChecked=this.getContentType()!="html",_oTop=getTop();
if(_bChecked)
{
(_oCompose.S("noletter")||{}).checked=false;
_oCompose.getPageEditor().setBgMusicInfo();
}
_oCompose.S("contenttype").checked=_bChecked;
_oTop.show(_oCompose.S("QMEditorToolBarPlusArea"),!_bChecked);
_oTop.show(_oCompose.S("editor_toolbar_btn_container"),!_bChecked);
!_bChecked&&_oCompose._fixStationeryCursorPos()();
};
},_loadWeiyunFileToEditor:function(_asFids){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
var _oEditor=_oCompose.getPageEditor(),_fGenFileList=function(_aoList){
var _oList=[];
_oTop.E(_aoList,function(_aoItem){
_oList.push({sType:"weiyun",sLink:_aoItem.furl,sName:_aoItem.fname,sFileSize:_aoItem.fsize,sIconUrl:_oTop.getIconByExt(_aoItem.fname.split(".").pop())});
});
return _oList;
};
_oWin.weiyunfileonload=function(_aoResult){
if(_aoResult&&(_aoResult.ret==0))
{
var _oSubjectDom=_oCompose.S("subject");
if(_oSubjectDom&&!_oSubjectDom.value)
{
if(_aoResult.data.length>1)
{
_oSubjectDom.value=['"',getTop().htmlDecode(_aoResult.data[0].fname),'"',"\u7B49",_aoResult.data.length,"\u4E2A\u6587\u4EF6"].join("");
}
else{
_oSubjectDom.value=getTop().htmlDecode(_aoResult.data[0].fname);
}
}
getTop().E(_aoResult.data,function(_aoItem){
_aoItem.fname=getTop().htmlDecode(_aoItem.fname);
});
_oEditor.insertNetDiskFile(_fGenFileList(_aoResult.data),function(){
});
}
else{
getTop().showError("\u5FAE\u4E91\u6587\u4EF6\u52A0\u8F7D\u5931\u8D25");
}
};
var _sUrl=_oWin.location.protocol+"//";
_sUrl+=(_oWin.location.protocol=="https:")?"s":"webcgi";
_sUrl+=".weiyun.qq.com/qmail.fcg?cmd=1&callback=weiyunfileonload&key="+_asFids;
getTop().loadJsFile(_sUrl,true,_oWin.document,null,{charset:"gb18030"});
},_setEditorSource:function(_aoConfig,_abClearId,_anBreakLinkNum){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
if(_abClearId&&_aoConfig.subtmpl!="draft"&&_aoConfig.subtmpl!="background")
{
_oCompose._filteStationeryAndCard();
}
var _sSource=_oCompose.S("source")&&_oCompose.S("source").innerHTML,_sSignVal=_oTop.goUserInfo.get('getRealUserSignature')?(_oTop.goUserInfo.get('getRealUserSignature'))(_aoConfig.folderid,_aoConfig.saveFrom):null,_bNoMore=_aoConfig.subtmpl=="draft"||_aoConfig.subtmpl=="content"||_aoConfig.subtmpl=="background"||_aoConfig.subtmpl==="from_star_list",_oContent=[],_oEditor=_oCompose.getPageEditor();
if(!_bNoMore)
{
var _sWeiyunFids=getTop().getUrlParams(_oWin.location)["weiyunfid"];
if(_sWeiyunFids)
{
_oCompose._loadWeiyunFileToEditor(_sWeiyunFids);
}
if(_aoConfig.pluscontent)
{
_oContent.push(_aoConfig.pluscontent,_oTop.QMEditor.getBreakLine(1));
}
else{
_oContent.push(_oTop.QMEditor.getBreakLine(_anBreakLinkNum||(_oTop.filteSignatureTag(_sSignVal)?2:1),{family:_oTop.goUserInfo.get("DEF_FONT_FAMILY"),size:_oTop.goUserInfo.get("DEF_FONT_SIZE"),color:_oTop.goUserInfo.get("DEF_FONT_COLOR")}));
}
_oContent.push(_sSignVal);
}
if(!_aoConfig.isNoInclude&&_sSource&&(_aoConfig.subtmpl=="draft"||_aoConfig.subtmpl=="background"||_aoConfig.subtmpl==="from_star_list"))
{
_oContent.push(_oTop.filteSignatureTag(_sSource,"2LOWCASE"));
}
if(!_bNoMore&&(_oCompose.getPageId()=="compose"||_oCompose.getPageId()=="qq"))
{
_oContent=[_oTop.goUserInfo.get("RealUserDefaultStationeryHeader"),_oContent.join(""),_oTop.goUserInfo.get("RealUserDefaultStationeryBottom")];
if(!!_oTop.goUserInfo.get("RealUserDefaultStationeryHeader"))
{
_oTop.requestShowTip("editor_toolbar_btn_container","45",_oWin);
}
}
if(!_aoConfig.isNoInclude&&_sSource&&_aoConfig.subtmpl!="draft"&&_aoConfig.subtmpl!="background"&&_aoConfig.subtmpl!=="from_star_list")
{
_sSource=filterSourceContent(_oTop.filteSignatureTag(_sSource));
if(_sSource)
{
_oContent.push(["<div><includetail>",_sSource,"</includetail></div>"].join(""));
}
}
_oEditor.setContent(_oContent=filterSourceContent(_oContent.join("")));
},_setEditorPageEvent:function(_abIsRemove){
var _oCompose=this;
var _oDoc=_oCompose.getWin().document;
getTop().addEvent(_oDoc,"keydown",_oCompose._composeKeyDown(),_abIsRemove);
getTop().addEvent(_oDoc,"keyup",_oCompose._composeKeyUp(),_abIsRemove);
},_setSaveSendCheckBox:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oInput=_oCompose.S("savesendbox");
if(_oInput)
{
try{
_oInput.checked=!getTop().goUserInfo.get('RealDefaultSaveSendbox');
}
catch(_oError)
{
_oInput.checked=true;
}
if(!_oInput.checked)
{
_oInput.onclick=function(){
getTop().show("auto_save_span",_oInput.checked,_oWin);
var _oAutoSave=_oCompose.S("auto_save");
if(_oAutoSave)
{
!_oInput.checked&&(_oAutoSave.checked=false);
}
};
}
}
},_showEditorToolBar:function(_abShow){
var _oCompose=this;
_abShow=_abShow==null?true:_abShow;
_oCompose.getPageEditor().showToolBar(_abShow);
var _oToolBarControlBtn=_oCompose.S("editor_toolbar_btn_container");
if(!_oToolBarControlBtn)
{
return false;
}
var _oSpans=getTop().GelTags("span",_oToolBarControlBtn);
getTop().show(_oSpans[0],_abShow);
getTop().show(_oSpans[1],!_abShow);
_oToolBarControlBtn.onclick=function(){
getTop().LogKV("compose|toolbar|entrance|formatter");
_oCompose._showEditorToolBar(!_abShow);
return false;
};
},_changeEditorBgMusic:function(){
var _oTop=getTop();
var _oCompose=this;
return function(){
var _oBgMusicContainer=_oCompose.S("editor_bgmusic_container");
if(!_oBgMusicContainer)
{
return;
}
if(_oBgMusicContainer.getAttribute("inited")!="true")
{
_oBgMusicContainer.innerHTML=_oTop.T(['<div></div>','<div id="bg_music_listen" style="display:none;margin:4px 0 4px 0;">','<div id="mp3player_msg" ></div>','<div id="mp3player_container" style="display:none;" >\u64AD\u653E\u5668\u52A0\u8F7D\u4E2D...</div>','</div>']);
_oBgMusicContainer.setAttribute("inited","true");
}
var _oInfo=this.getBgMusicInfo();
_oTop.show(_oBgMusicContainer,_oInfo);
if(!_oInfo)
{
return;
}
_oBgMusicContainer.firstChild.innerHTML=_oTop.T(['<span style="word-break:break-all;"><span class="graytext">\u80CC\u666F\u97F3\u4E50\uFF1A</span>$bgmusic$</span>','<a style="margin:0 5px 0 10px;" onclick="','if ( confirm( \x27\u60A8\u786E\u8BA4\u5220\u9664\u8BE5\u80CC\u666F\u97F3\u4E50\uFF1F\x27 ) ) {','getTop().audioStop();','getPageEditor().setBgMusicInfo();','}','">\u5220\u9664</a>','<a onclick="','tryListenBgMusic( this );','" >\u8BD5\u542C</a>']).replace({bgmusic:_oInfo.song?_oTop.T("$song$($singer$)").replace({song:_oInfo.song,singer:_oInfo.singer}):_oTop.htmlEncode(_oInfo.url)});
_oTop.audioStop();
_oTop.show(_oCompose.S("mp3player_container"),false);
_oTop.show(_oCompose.S("mp3player_msg"),true);
function _fTryListen(_aMode)
{
_oCompose.tryListenBgMusic(_oBgMusicContainer.firstChild.lastChild,_oInfo.song,_oInfo.singer,_aMode);
}
if(_oInfo.song)
{
_oCompose.S("mp3player_msg").innerHTML="\u6B4C\u66F2\u52A0\u8F7D\u4E2D...\u8BF7\u7A0D\u5019";
getTop().getMusicUrl(_oInfo.song,_oInfo.singer,function(_asSong,_asSinger,_asUrl){
if(!_oCompose.getPageEditor())
{
return;
}
if(_asUrl)
{
_oCompose.getPageEditor().setBgMusicInfo(_asSong,_asSinger,_asUrl);
_fTryListen("open");
}
else{
_oCompose.S("mp3player_msg").innerHTML="\u6B4C\u66F2\u52A0\u8F7D\u5931\u8D25";
}
});
}
_fTryListen("open");
};
},tryListenBgMusic:function(_aoLink,_asSong,_asSinger,_asMode){
var _oTip=["\u8BD5\u542C","\u5173\u95ED\u8BD5\u542C"];
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
if(_asMode!="close"&&(_aoLink.innerHTML==_oTip[0]||_asMode=="open"))
{
_aoLink.innerHTML=_oTip[1];
var _info=_oCompose.getPageEditor().getBgMusicInfo();
if(_info&&_info.url)
{
_oTop.show(_oCompose.S("mp3player_container"),true);
_oTop.show(_oCompose.S("mp3player_msg"),false);
_oWin.setTimeout(function(){
_oTop.audioPlay({id:"bg_music_compose",url:_info.url,author:_info.singer,title:_info.song,autoplay:true,global:true});
},200);
}
_oTop.show(_oCompose.S("bg_music_listen"),true);
}
else{
_aoLink.innerHTML=_oTip[0];
_oTop.audioStop();
_oTop.show(_oCompose.S("mp3player_container"),false);
_oTop.show(_oCompose.S("mp3player_msg"),true);
_oTop.show(_oCompose.S("bg_music_listen"),false);
}
},_filteStationeryAndCard:function(_asSrcType){
var _oCompose=this;
var _oStationeryObj,_oCardObj;
if(_asSrcType=="editor")
{
_oStationeryObj=_oCompose.getPageEditor().getContentObj("QQMAILSTATIONERY");
_oCardObj=_oCompose.getPageEditor().getContentObj("QqMAiLcARdWoRD");
}
else{
_oStationeryObj=_oCompose.S("QQMAILSTATIONERY");
_oCardObj=_oCompose.getPageEditor().getContentObj("QqMAiLcARdWoRD");
}
if(_oStationeryObj)
{
_oStationeryObj.id="";
}
if(_oCardObj)
{
_oCardObj.id="";
}
if(_oStationeryObj||_oCardObj)
{
_oCompose._filteStationeryAndCard(_asSrcType);
}
},_doEditorMouseDown:function(){
var _oCompose=this;
return function(_aoEvent){
getTop().hideMenuEvent(_aoEvent);
_oCompose.moAttach.hideDragAndDropContainer();
};
},_fixStationeryCursorPos:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
return function(){
var _oEditor=_oCompose.getPageEditor();
if(_oEditor)
{
_oEditor=_oEditor.getCurrentEditor();
var _oQQmailStationery=_oEditor.getContentObj("QQMAILSTATIONERY");
if(_oQQmailStationery)
{
!_oEditor.isSelectionInObject(_oQQmailStationery)&&!_oEditor.loadLastRange()&&_oEditor.focus(0,_oQQmailStationery);
var _oQMAddrInput=_oCompose.getQMAddrInput();
if(_oQMAddrInput)
{
var _oTo=_oQMAddrInput.get("to",_oWin),_oTop=getTop(),_sOwnQz=[_oTop.getUin(),"@qzone.qq.com"].join("");
if(_oTo)
{
_oTo.hasAddr(_sOwnQz)&&_oTop.showError("\u53D1\u8868\u5230\u6211\u7684Qzone\u7684\u90AE\u4EF6\u4E0D\u652F\u6301\u4FE1\u7EB8");
}
}
}
}
};
},_fixBodyPadding:function(){
var _oCompose=this;
return function(){
var _oQQmailStationery=this.getContentObj("QQMAILSTATIONERY"),_oNoLetterBtn=_oCompose.S("noletter");
this.adjustBodyStyle("padding",_oQQmailStationery?"0":"2px 4px 0");
_oCompose._fixQQMailStationery(getTop().gbIsIE?"auto":"100%");
if(_oNoLetterBtn)
{
_oNoLetterBtn.checked=!!_oQQmailStationery;
}
};
},_fixQQMailStationery:function(_asWidth){
var _oCompose=this;
try{
var _oTables=_oCompose.getPageEditor().getContentTags("table");
for(var i=0,_len=Math.min(_oTables.length,50);i<_len;i++)
{
var _oTable=_oTables[i];
if(_oTable.className=="i")
{
_oTable.style.width=_asWidth;
}
}
}
catch(e)
{
}
},_pasteUrlAnalyse:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
return function(_aoEvent){
var _oSampleSubject=_oCompose.S("subjectsample");
if((!_oCompose.S("subject").value||_oCompose.S("subject").value==(_oSampleSubject&&_oSampleSubject.value))&&!_oCompose._oPasteUrlAnalyseProcess)
{
var _self=this;
var _sOldContent=this.getContent(true);
_oWin.setTimeout(function(){
var _sNewContent=_self.getContent(true);
var _nOldLen=_sOldContent.length;
var _nNewLen=_sNewContent.length;
var _nMaxCalcLen=3001;
if(_nOldLen>_nMaxCalcLen||_nNewLen>_nMaxCalcLen)
{
return;
}
for(var i=0;i<_nOldLen&&i<_nNewLen;i++)
{
if(_sOldContent.charAt(_nOldLen-i-1)!=_sNewContent.charAt(_nNewLen-i-1))
{
break;
}
}
var _nTail=_nNewLen-i;
var _nHead=_nOldLen-i;
for(var i=0;i<_nOldLen&&i<_nNewLen;i++)
{
if(_sOldContent.charAt(i)!=_sNewContent.charAt(i))
{
break;
}
}
if(i<_nHead)
{
_nHead=i;
}
var _paste=(_nHead==_nTail?_sNewContent:_sNewContent.substring(_nHead,_nTail)).replace(/[\r\n]/ig,"");
if(getTop().isUrl(_paste))
{
var _oTop=getTop();
var _oAjax=_oCompose._oPasteUrlAnalyseProcess=new _oTop.QMAjaxRequest("/cgi-bin/geturlinfo","POST",20*1000);
_oAjax.onComplete=function(_aoXml){
var _sResult=_aoXml.responseText;
if(_sResult.indexOf("ok|")==0)
{
if(!_oCompose.S("subject").value||_oCompose.S("subject").value==(_oSampleSubject&&_oSampleSubject.value))
{
if(getTop().getMainWin().SubjectCtrl)
{
getTop().getMainWin().SubjectCtrl(1);
}
_oCompose.S("subject").value=getTop().trim(getTop().htmlDecode(_sResult).substr(3).replace(/&#(x)?([^&]{1,5});?/g,function(a,b,c){
return String.fromCharCode(parseInt(c,b?16:10));
}).replace(/[\r\n]/g,""));
}
delete _oAjax;
}
else{
_oAjax.onError();
}
};
_oAjax.onError=function(){
delete _oAjax;
};
_oAjax.send(getTop().T('sid=$sid$&url=$url$&pageid=$id$').replace({sid:getTop().getSid(),id:_oCompose.getPageId(),url:encodeURIComponent(_paste)}));
}
},13);
}
};
},noteFirstPageQuickSave:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
if(_oCompose.getPageEditor().getContent(true)=="\u8BF7\u8F93\u5165\u8BB0\u4E8B\u5185\u5BB9...")
{
return getTop().showError('\u8BF7\u5148\u8F93\u5165\u5185\u5BB9',800);
}
_oCompose.S("content").value=_oCompose.getPageEditor().getContent();
_oWin.unloadwarning=false;
_oCompose.S("sendbtn").onclick=null;
return _oCompose._getSubmitForm().submit();
},setFileNameToSubject:function(_asFileName){
var _oCompose=this;
var _oSubject=_oCompose.S("subject");
if(_asFileName&&_oSubject&&!_oSubject.value&&!_oCompose._bIsEverSeted&&_oCompose.getPageId()!="groupsms")
{
var _sFileName=_asFileName.split("\\").pop();
_oSubject.value=_sFileName.split(".").slice(0,-1).join(".")||_sFileName;
_oCompose._bIsEverSeted=true;
}
},_addExistBigAttach:function(_aoBigAttachList,_aoConfig){
var _oCompose=this;
var _oTop=getTop();
if(!_aoBigAttachList)
{
return;
}
_aoConfig=_aoConfig||{};
_oCompose.moAttach.addExistAttach_Big({bigattach:_aoBigAttachList},_aoConfig.sMode);
_oTop.show(_oCompose.S("attachContainer"),true);
if(_aoConfig.bTrySetSubject!==false&&_aoBigAttachList[0]&&_aoBigAttachList[0].filename)
{
_oCompose.setFileNameToSubject(_aoBigAttachList[0].filename);
}
},initColorSubject:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop(),_oBtn=_oCompose.S("cpanelBtn");
if(!_oBtn)
{
return;
}
var _oColorData=["11","\u6A59\u7EA2\u8272","13","\u6DF1\u7EFF\u8272","14","\u9C9C\u7D2B\u8272","10","\u7EAF\u9ED1\u8272"],_oItems=[{sItemValue:'<span style="margin-left:5px;">\u5F69\u8272\u4E3B\u9898...</span>'}];
for(var i=0,_nLen=_oColorData.length;i<_nLen;i+=2)
{
_oItems.push({sId:_oColorData[i],sItemValue:["<div id='",_oColorData[i],"' class='s",_oColorData[i],"_bg' style='margin-top:3px;width:15px;height:15px;float:left;'></div>&nbsp;",_oColorData[i+1]].join("")});
}
if(_oTop.getLocale()=="zh_CN")
{
_oItems.push({sItemValue:"<div style='float:right;margin-right:10px;'><a href='http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=11&&no=138' target='_blank'>\u5E2E\u52A9</a></div>"});
}
_oBtn.onclick=function(){
var _oPos=_oTop.calcPos(this);
new _oTop.QMMenu({oEmbedWin:_oWin,sId:"colorsubject",nX:_oTop.getLocale()=="zh_CN"?_oPos[1]-96:_oPos[1]-146,nY:_oPos[2]+1,nWidth:_oTop.getLocale()=="zh_CN"?100:150,oItems:_oItems,nItemHeight:21,onitemclick:function(_asQQStyle){
_oCompose.S("xqqstyle").value=_asQQStyle;
_oCompose.S("subject").className="s"+_asQQStyle;
_oCompose.showSubjectMsg(true);
_oTop.show(_oCompose.S('cpanel'),false);
}});
};
},showSubjectMsg:function(_abShow){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oSubject=_oCompose.S("subject");
if(_abShow)
{
if(_oSubject.value=="")
{
_oSubject.value=getTop().gsMsgNoSubject;
_oWin.setTimeout(function(){
_oCompose.showSubjectMsg(false);
},5000);
}
}
else{
if(_oSubject.value==getTop().gsMsgNoSubject)
{
_oSubject.value="";
try{
_oWin.document.selection.createRange().select();
}
catch(_oError)
{
}
}
}
},hideRightArea:function(_abShow,_abNotSetCookie){
var _oCompose=this;
var _oRA=_oCompose.S("rightArea");
if(!_oRA)
{
return false;
}
_abShow=!!_abShow;
var _oRightAreaBtn=_oCompose.S("rightAreaBtn");
_oRightAreaBtn.onclick=function(){
_oCompose.hideRightArea(!_abShow);
};
_oRightAreaBtn.innerHTML='<input type="button" hidefocus class='+(!_abShow?'nextfd />':'prefd />');
if(_abShow)
{
_oRA.style.left=0;
_oRA.style.position='static';
}
else{
_oRA.style.left='-10000px';
_oRA.style.position='absolute';
}
if(!_abNotSetCookie)
{
getTop().setUserCookieFlag('CCSHOW',2,(!_abShow?'1':'0'));
}
return false;
},initCookieSetting:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAddrCtrl=_oCompose.moAddrCtrl;
var _oTop=getTop();
var _sFlagCCSHOW=_oTop.getUserCookie("CCSHOW")||"";
var _oCcAddrCtrl=_oCompose.getQMAddrInput()&&_oCompose.getQMAddrInput().get("cc",_oWin);
var _oBccAddrCtrl=_oCompose.getQMAddrInput()&&_oCompose.getQMAddrInput().get("bcc",_oWin);
if(_oCcAddrCtrl&&(_oCcAddrCtrl.length()||_sFlagCCSHOW.charAt(0)==1))
{
if(_oTop.location.href.indexOf("from_wm_newwin")!=-1&&_oTop.opener)
{
if(_oTop.opener.goReloadInfoOpener&&_oTop.opener.goReloadInfoOpener.cc&&_oTop.opener.goReloadInfoOpener.cc!="")
{
_oAddrCtrl.showInputCtrl("CC",false);
}
}
else{
_oAddrCtrl.showInputCtrl("CC",false);
}
}
if(_oBccAddrCtrl&&(_oBccAddrCtrl.length()||_sFlagCCSHOW.charAt(1)==1))
{
if(_oTop.location.href.indexOf("from_wm_newwin")!=-1&&_oTop.opener)
{
if(_oTop.opener.goReloadInfoOpener&&_oTop.opener.goReloadInfoOpener.cc&&_oTop.opener.goReloadInfoOpener.cc!="")
{
_oAddrCtrl.showInputCtrl("BCC",false);
}
}
else{
_oAddrCtrl.showInputCtrl("BCC",false);
}
}
if(_oCompose.S("rightArea")&&_sFlagCCSHOW.charAt(2)==1)
{
_oCompose.hideRightArea(false,true);
}
},loadValue:function(_abSyncContent){
var _oCompose=this;
if(_abSyncContent&&_oCompose.getPageEditor())
{
_oCompose._fixQQMailStationery("100%");
_oCompose.getInputObj("content_compare",null,true).value=_oCompose.getPageEditor().getContent();
_oCompose._fixQQMailStationery(getTop().gbIsIE?"auto":"100%");
}
var _oCache=_oCompose._oLoadValueCache;
getTop().E(_oCompose._oLoadValueCtrls,function(_asValue,_asIdx){
var _obj=_oCompose.getInputObj(_asValue,null,true);
if(_obj&&_obj.value!=_oCache[_asIdx])
_oCache[_asIdx]=_obj.value;
});
},setNeedCloseConform:function(_abNeed){
var _oCompose=this;
_oCompose._bIsNeedCloseConform=_abNeed;
},_isNeedCloseConform:function(){
var _oCompose=this;
return _oCompose._bIsNeedCloseConform;
},setEditedAttach:function(_abEdited){
var _oCompose=this;
_oCompose._bAttachEdited=_abEdited;
},_isEditedAttach:function(){
var _oCompose=this;
return _oCompose._bAttachEdited;
},_getToBeReloadInfo:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oTop=getTop();
var _oFileUploadData=_oAttach.oFileUploadMgr&&_oAttach.oFileUploadMgr.getUploadData();
var _sBacode='';
_sBacode+=_oCompose.S("ResumeWorks")?_oCompose.S("ResumeWorks").innerHTML:'';
_sBacode+=_oCompose.S("BigAttach")?_oCompose.S("BigAttach").innerHTML:'';
var _sExcode='';
_sExcode+=_oCompose.S("exist_resume_attach")?_oCompose.S("exist_resume_attach").innerHTML:'';
_sExcode+=_oCompose.S("exist_file")?_oCompose.S("exist_file").innerHTML:'';
var _sOnlineDocCode='';
_sOnlineDocCode+=_oCompose.S("div_onlineAttach")?_oCompose.S("div_onlineAttach").innerHTML:'';
var _oResumeInput=_oTop.finds('input[name="resume"]',_oCompose._getSubmitForm())[0];
var _oInfo={content:_oCompose.getPageEditor()&&_oCompose.getPageEditor().getContent(),subject:_oCompose.S("subject").value,exbacode:_oCompose.S("exist_BigAttach")&&_oCompose.S("exist_BigAttach").innerHTML,bacode:_sBacode,excode:_sExcode,sOnlineDocCode:_sOnlineDocCode,fileuploaddata:_oFileUploadData||[],hasResume:_oResumeInput&&_oResumeInput.value?true:false,resumesender:_oCompose.getResumeSender_()};
if(_oCompose.getQMAddrInput())
{
getTop().E(["to","cc","bcc","sc"],function(_asItem){
var _oInput=_oCompose.getQMAddrInput().get(_asItem,_oWin);
if(_oInput&&!_oInput.isDisabled())
{
_oInfo[_asItem]=_oInput.get("newwin").join(";");
}
});
}
if(_oCompose.getPageId()=="group"&&_oTop.isShow(_oCompose.S("Votelist")))
{
var _oDomVoteSubject=_oCompose.S("votesubject");
var _oDomVoteOptions=_oCompose.SN("option");
var _oVoteInfo={subject:_oDomVoteSubject.value};
var _oVoteOptions=[];
for(var _i=0;_i<_oDomVoteOptions.length;_i++)
{
_oVoteOptions[_i]=_oDomVoteOptions[_i].value;
}
_oVoteInfo.type=_oCompose.S("votetype1").checked?1:2;
_oVoteInfo.options=_oVoteOptions;
_oInfo.votelist=_oVoteInfo;
}
if(_oCompose.S("qqgroupid"))
{
_oInfo.groupId=_oCompose.S("qqgroupid").value;
}
return _oInfo;
},_confirmCheckBeforeClose:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
if(_oWin.getFlashCurrentState&&_oWin.getFlashCurrentState()==401)
{
return "recording";
}
if(_oCompose.S("voiceid")&&_oCompose.S("voiceid").value)
{
return "recorded";
}
if(_oCompose._isContentEdited())
{
return "content";
}
if(_isFtnUploading())
{
return "ftnuploading";
}
if(_oCompose._isEditedAttach())
{
return "attach_edited";
}
return "exit";
},closePage:function(_aoEvent){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _sExitCode;
if(_oCompose._isNeedCloseConform())
{
var _sSplitLine=(new Array(42)).join("-")+(new Array(5)).join(" ");
if(getTop().isDisableCtl("sendbtn",_oWin))
{
getTop().QMDialog("composeExitAlert","close");
getTop().switchFolder("folder_newmail");
return getTop().T([_sSplitLine,'\n\u63D0\u793A\uFF1A\u60A8\u786E\u5B9A\u8981\u7EC8\u6B62\u5F53\u524D\u884C\u4E3A\uFF1F\n',_sSplitLine]);
}
else if((_sExitCode=_oCompose._confirmCheckBeforeClose())!="exit")
{
getTop().QMDialog("composeExitAlert","close");
getTop().switchFolder("folder_newmail");
return getTop().T([_sSplitLine,"\n",{"driftcontent":'\u63D0\u793A\uFF1A\u672A\u53D1\u9001\u7684\u5185\u5BB9\u5C06\u4F1A\u4E22\u5931\u3002',"content":'\u63D0\u793A\uFF1A\u672A\u4FDD\u5B58\u7684\u5185\u5BB9\u5C06\u4F1A\u4E22\u5931\u3002',"recording":'\u63D0\u793A\uFF1A\u60A8\u6B63\u5728\u5F55\u5236\u97F3\u89C6\u9891\uFF0C\u672A\u53D1\u9001\u5C06\u4F1A\u4E22\u5931\u3002',"recorded":'\u63D0\u793A\uFF1A\u60A8\u5DF2\u7ECF\u5F55\u5236\u97F3\u89C6\u9891\uFF0C\u672A\u53D1\u9001\u5C06\u4F1A\u4E22\u5931\u3002',"ftnuploading":'\u63D0\u793A\uFF1A\u60A8\u6B63\u5728\u4E0A\u4F20\u6587\u4EF6\uFF0C\u5173\u95ED\u9875\u9762\u5C06\u505C\u6B62\u4E0A\u4F20\u3002'}[_sExitCode],"\n",_sSplitLine]).replace({content:_oCompose.getPageId()=="note"?"\u8BB0\u4E8B":"\u90AE\u4EF6"});
}
}
_oCompose.setNeedCloseConform(true);
},exitConfirm:function(_avExitRunCode){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oProcess=_oCompose.moProcess;
var _sExitCode;
var _fExitRun=function(){
if(typeof _avExitRunCode=="function")
{
_avExitRunCode();
}
else{
_oTop.globalEval(_avExitRunCode,_oWin);
}
};
var _bDraft=_oCompose.getPageConfig().subtmpl=="draft"&&!getTop().getUrlParams(_oWin.location)["backurl"];
var _sMailid=_oCompose.S("fmailid")&&_oCompose.S("fmailid").value,_sDraftMailid=_oCompose.S("draftmailid")&&_oCompose.S("draftmailid").value;
if(_sMailid==_oCompose.getPageConfig().mailid)
{
_sMailid="";
}
if(_oCompose._isNeedCloseConform()&&_oCompose.getPageId()!="remind"&&((_sExitCode=_oCompose._confirmCheckBeforeClose())!="exit"||(!_bDraft&&_sMailid&&!_oCompose.getComposeVar()._bIsUserSave&&_oCompose.getPageId()!="group")||(!_bDraft&&_sDraftMailid&&!_oCompose.getComposeVar()._bIsUserSave&&_oCompose.getPageId()=="group")))
{
_oCompose._disableAutoSave();
if(_oCompose.getPageEditor())
{
_oCompose.getPageEditor().saveRange();
}
var _bGroupMail=_oCompose.S("qqgroupid")&&!_oCompose.S("qqgroupid").disabled;
var _oParam={exitstyle:"",delstyle:"display:none",exitbtn:"\u5426",disattach:_oTop.getMainWin().sendAfterUpload()?"block":"none"};
if(_oCompose.getPageId()=="note")
{
_oParam.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4FDD\u5B58\u8BE5\u8BB0\u4E8B\u5417\uFF1F";
}
else if(_oCompose.getPageId()=="voice")
{
switch(_sExitCode)
{case "recording":
_oParam.title="\u5185\u5BB9\u5F55\u5236\u4E2D\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u97F3\u89C6\u9891\u90AE\u4EF6\u5417\uFF1F";
break;
case "recorded":
_oParam.title="\u5DF2\u5F55\u5236\u5185\u5BB9\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u97F3\u89C6\u9891\u90AE\u4EF6\u5417\uFF1F";
break;
default:
_oParam.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u97F3\u89C6\u9891\u90AE\u4EF6\u5417\uFF1F";
}_oParam.savestyle="display:none;";
_oParam.exitbtn="\u786E\u5B9A";
}
else if(_oCompose.getPageId()=="postcard")
{
_oParam.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u660E\u4FE1\u7247\u5417\uFF1F";
_oParam.savestyle="display:none;";
_oParam.exitbtn="\u786E\u5B9A";
}
else if(_oCompose.getPageId()=="bottleDrift")
{
_oParam.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u6F02\u6D41\u74F6\u5417\uFF1F";
_oParam.savestyle="display:none;";
_oParam.exitbtn="\u786E\u5B9A";
}
else if(_oCompose.getPageId()=="urlcreator")
{
_oParam.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E0D\u4FDD\u5B58\u6B64\u7F51\u9875\u5417\uFF1F";
_oParam.savestyle="display:none;";
_oParam.exitbtn="\u786E\u5B9A";
}
else if(_bGroupMail)
{
_oParam.title=_sDraftMailid&&!_bDraft?"\u6B64\u90AE\u4EF6\u5DF2\u4FDD\u5B58\u4E3A\u8349\u7A3F\uFF0C\u662F\u5426\u9700\u8981\u4FDD\u7559\uFF1F":_bDraft?"\u8349\u7A3F\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u4FDD\u5B58\u6B64\u6B21\u6539\u52A8\uFF1F":"\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u5C06\u6B64\u90AE\u4EF6\u5B58\u4E3A\u8349\u7A3F\uFF1F";
if(!_bDraft)
{
_oParam.exitstyle="display:none;";
_oParam.delstyle="";
}
}
else{
_oParam.title=_sMailid&&!_bDraft?"\u6B64\u90AE\u4EF6\u5DF2\u4FDD\u5B58\u4E3A\u8349\u7A3F\uFF0C\u662F\u5426\u9700\u8981\u4FDD\u7559\uFF1F":_bDraft?"\u8349\u7A3F\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u4FDD\u5B58\u6B64\u6B21\u6539\u52A8\uFF1F":"\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u5C06\u6B64\u90AE\u4EF6\u5B58\u4E3A\u8349\u7A3F\uFF1F";
if(!_bDraft&&(!getTop().getUrlParams(_oWin.location)["backurl"]||_sMailid))
{
_oParam.exitstyle="display:none;";
_oParam.delstyle="";
}
}
_oTop.gbIsIE&&_oAttach.hideDragAndDropContainer();
var _oDialog=new _oTop.QMDialog({sId:"composeExitAlert",sTitle:"\u79BB\u5F00\u63D0\u793A",sBodyHtml:_oTop.TE(['<div class="dialog_feedback">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','<div $@$if($disattach$=="block")$@$class="dialog_f_t"$@$endif$@$>$title$</div>','<div class="dialog_f_d" style="width:370px;display:$disattach$"">\u8BF7\u6CE8\u610F\uFF1A\u5DF2\u8BBE\u5B9A\u4F20\u5B8C\u8D85\u5927\u9644\u4EF6\u540E\u90AE\u4EF6\u81EA\u52A8\u53D1\u9001\uFF0C\u73B0\u5728\u79BB\u5F00\uFF0C\u5C06\u4F7F<br/>\u81EA\u52A8\u53D1\u9001\u5931\u8D25\u3002\u70B9\u201C\u53D6\u6D88\u201D\u53EF\u505C\u7559\u5728\u5199\u4FE1\u9875\u9762\u3001\u7B49\u5F85\u81EA\u52A8\u53D1\u9001\u3002</div>','</div>','</div>','<div class="dialog_operate">','<a class="btn_gray" id="btn_exit_save" name="btn_exit_save" href="javascript:;" style="$savestyle$">\u662F</a>','<a class="btn_gray" id="btn_exit_notsave" name="btn_exit_notsave" href="javascript:;" style="$exitstyle$">$exitbtn$</a>','<a class="btn_gray" id="btn_delete_save" name="btn_delete_save" href="javascript:;" style="$delstyle$">\u5426</a>','<a class="btn_gray" id="btn_not_exit" href="javascript:;" href="javascript:;" initlized="true">\u53D6\u6D88</a>','<div class="clr"></div>','</div>']).replace(_oParam),nWidth:null,nHeight:null,bClose:true,onshow:function(){
var _oSelfObj=this;
if(_bGroupMail||_oCompose.getPageId()=="voice"||_oCompose.getPageId()=="note"||_oCompose.getPageId()=="postcard")
{
try{
_oSelfObj.S("btn_exit_notsave").focus();
}
catch(_oErr)
{
debug("error when focus on element 'btn_exit_notsave'");
}
}
else{
try{
_oSelfObj.S("btn_delete_save").focus();
}
catch(_oErr)
{
debug("error when focus on element 'btn_delete_save'");
}
}
},onload:function(){
var _oSelfObj=this;
_oTop.addEvent(_oSelfObj.S("btn_exit_save"),"click",function(_aoEvent){
if(_sExitCode!="exit")
{
_oSelfObj.close();
_oProcess.doProcess(_oCompose.getPageId()=="note"?"":"savedraft",{card:"card",note:"send"}[_oCompose.getPageId()]||"save",_oCompose.getPageId()=="note"?1:0,undefined,undefined,function(){
_oWin.setTimeout(function(){
_oCompose.setNeedCloseConform(false);
_fExitRun();
},0);
});
}
else{
_oTop.fireMouseEvent(_oSelfObj.S("btn_exit_notsave"),"click");
}
_oTop.preventDefault(_aoEvent);
});
_oTop.addEvent(_oSelfObj.S("btn_exit_notsave"),"click",function(_aoEvent){
_oTop.disableAll(true);
_oSelfObj.S("btn_exit_notsave").disabled=true;
_oCompose.setNeedCloseConform(false);
_oSelfObj.close();
_fExitRun();
_oTop.preventDefault(_aoEvent);
_oCompose.clearLocalStorage();
});
_oTop.addEvent(_oSelfObj.S("btn_delete_save"),"click",function(_aoEvent){
var _sDraftMailid,_fExitNotSave=function(){
if(_oSelfObj.S("btn_exit_notsave"))
{
return _oTop.fireMouseEvent(_oSelfObj.S("btn_exit_notsave"),"click");
}
};
if(_oCompose.getPageId()=="group")
{
_sDraftMailid=_oCompose.S("draftmailid")&&_oCompose.S("draftmailid").value;
}
else{
_sDraftMailid=_oCompose.S("fmailid")&&_oCompose.S("fmailid").value;
}
if(_sDraftMailid)
{
var _oAjax=new _oTop.QMAjaxRequest("/cgi-bin/mail_mgr");
_oAjax.onComplete=function(_aXmlObj){
if(_aXmlObj.responseText.indexOf("isMainFrameError")!=-1)
{
_oAjax.onError();
}
else{
getTop().hiddenMsg();
getTop().reloadLeftWin();
_fExitNotSave();
}
};
_oAjax.onError=function(){
_oTop.showError("\u5220\u9664\u8349\u7A3F\u5931\u8D25");
_fExitNotSave();
};
_oAjax.send(_oTop.T('sid=$sid$&Fun=$fun$&mailaction=$mailaction$&mailid=$mailid$').replace({sid:_oTop.getSid(),fun:"PerDel",mailaction:"mail_del",mailid:_sDraftMailid}));
_oSelfObj.S("btn_delete_save").disabled=true;
_oTop.disableAll(true);
_oTop.showInfo("\u6B63\u5728\u5220\u9664\u8349\u7A3F");
}
else{
_fExitNotSave();
}
_oCompose.clearLocalStorage();
_oTop.preventDefault(_aoEvent);
});
_oTop.addEvent(_oSelfObj.S("btn_not_exit"),"click",function(_aoEvent){
_oSelfObj.close();
_oTop.preventDefault(_aoEvent);
});
},onbeforeclose:function(){
_oTop.disableAll(false);
_oCompose.enableAutoSave();
return true;
},onclose:function(){
if(_oCompose.getPageEditor())
{
_oCompose.getPageEditor().loadRange();
}
}});
return false;
}
_oCompose.setNeedCloseConform(false);
_fExitRun();
return false;
},saveContentGoUrl:function(_asUrl){
var _oCompose=this;
var _oAttach=_oCompose.moAttach;
_oCompose._saveReloadInfo();
var _oTop=getTop(),_oFileMgr=_oAttach.oFileUploadMgr;
if(_oAttach.oFileUploadMgr.getUploadList().length>_oAttach.oFileUploadMgr.getUploadList("complete").length)
{
_oTop.confirmBox({title:"\u653E\u5F03\u672A\u5B8C\u6210\u7684\u4E0A\u4F20",msg:"\u60A8\u8FD8\u6709\u672A\u5B8C\u6210\u4E0A\u4F20\u7684\u9644\u4EF6\uFF0C\u662F\u5426\u53D6\u6D88\u4E0A\u4F20\uFF1F",confirmBtnTxt:"\u662F",cancelBtnTxt:"\u5426",width:430,onreturn:function(_aIsOk){
if(_aIsOk)
{
_oAttach.rmFileCell(_oAttach.oFileUploadMgr.getUploadListExclude("complete"));
_oCompose._saveReloadInfo();
_oCompose.setNeedCloseConform(false);
_oTop.goUrlMainFrm(_asUrl,false,true);
}
}});
}
else{
_oCompose.setNeedCloseConform(false);
_oTop.goUrlMainFrm(_asUrl,false,true);
}
},selectGroup:function(_asId){
var _oCompose=this;
_asId=String(_asId).indexOf("@groupmail.qq.com")==-1?(_asId+"@groupmail.qq.com"):_asId;
var _oEl=_oCompose.S("Gname_"+_asId);
if(_oEl)
{
_oCompose.S("qqgroupid").value=_asId;
_oCompose.S("groupname").value=_oEl.innerHTML;
}
},useStationery:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
_oCompose.hideRightArea(true,true);
_oCompose.changeTab("stationery_div");
if(_oCompose.S("stationery").src===""||_oCompose.S("stationery").src.indexOf("javascript:")===0)
{
_oWin.setTimeout(function(){
_oCompose.S("stationery").src="/cgi-bin/readtemplate?t=stationery&sid="+getTop().getSid();
},10);
}
},useStationery_new:function(){
var _oCompose=this;
_oCompose.hideRightArea(true,true);
_oCompose.changeTab("stationery_div");
if(_oCompose.getQMStationery())
{
_oCompose.getQMStationery().createSingleInstance();
}
},changeTab:function(_asName){
var _oCompose=this;
_oCompose._syncAddrStationeryHeight(_asName);
var _oIds=["AddrTab","stationery_div","card_div"];
var _oTabHeads=["addr_cmd","stationery_cmd","card_cmd"];
var _oClasses=["cptab","cptab cpslt"];
for(var i=0,_len=_oIds.length;i<_len;i++)
{
var _oEl=_oCompose.S(_oIds[i]);
if(_oEl)
{
var _nIdx=(_asName==_oIds[i])?1:0;
_oCompose.S(_oTabHeads[i]).className=_oClasses[_nIdx];
getTop().show(_oEl,_nIdx);
}
}
},_syncAddrStationeryHeight:function(_asName){
var _oCompose=this;
var _oTop=getTop();
var _oQuickDiv=_oCompose.S('quickaddr_div'),_oStationeryDiv=_oCompose.S('stationery_div'),_oRightAreaBtnWarp=_oCompose.S('rightAreaBtnWarp'),_nNewHeight;
if(!(_oQuickDiv&&_oStationeryDiv))
{
return false;
}
if(_oQuickDiv)
{
var _oLmPanel=_oTop.finds('.lm_panel',_oQuickDiv)[0];
}
if('AddrTab'==_asName)
{
_nNewHeight=_oStationeryDiv.clientHeight;
_oQuickDiv.style.height=_nNewHeight+'px';
_oLmPanel&&(_oLmPanel.style.height=(_nNewHeight-33)+'px');
}
else if('stationery_div'==_asName)
{
if(!(_oStationeryDiv.style.display=='none'))
{
return false;
}
var _nOffsetHeight=_oTop.calcPos(_oQuickDiv,'json').top;
_nNewHeight=_oQuickDiv.clientHeight;
if(_oCompose.getQMStationery()&&_oCompose.getQMStationery().getInstance()!=undefined)
{
_oCompose.getQMStationery().getInstance().resize(_nNewHeight+_nOffsetHeight);
}
else{
_oStationeryDiv.style.height=_nNewHeight+'px';
}
}
_oRightAreaBtnWarp.style.height=Math.max(_nNewHeight-200,0)+'px';
},autoSave:function(_abEnable){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oProcess=_oCompose.moProcess;
var _oLocalStorage=_oTop.QMLocalStorage,_bHasLocal=_oLocalStorage.getUserItem("tM")&&_oLocalStorage.getUserItem("tM")!="",_bSaveLocal=false;
if(_oTop.bnewwin==1)
{
_bSaveLocal=!_bHasLocal;
}
else{
_bSaveLocal=true;
}
if(_abEnable&&_oCompose._isContentEdited()&&_oCompose._isEnabledAutoSave())
{
_oCompose.getPageId()!="note"?_oProcess.doProcess("autosave","save"):_oProcess.doProcess("note_autosave","send",true);
}
_oCompose.getComposeVar()._oAutoSaveTimer=_oWin.setTimeout(function(){
_oCompose.autoSave(true);
},_oCompose.getPageId()=="note"?300000:300000);
_bSaveLocal&&_oCompose._autoSaveLocal();
},_autoSaveLocal:function(){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oLocalStorage=_oTop.QMLocalStorage;
if(_oCompose._isContentEdited()&&_oCompose.getPageEditor())
{
var _sContent=_oCompose.getPageEditor().getContent();
_oLocalStorage.setUserItem("tM",_CodeAndEncode(getTop().getUin(),_sContent));
}
_oCompose.getComposeVar()._oAutoSaveLocalTimer=_oWin.setTimeout(function(){
_oCompose._autoSaveLocal();
},1000*30);
},_loadLocalData:function(_abAlert){
var _oCompose=this;
var _oTop=getTop(),_oLocalStorage=_oTop.QMLocalStorage,_bHasLocal=_oLocalStorage.getUserItem("tM")&&_oLocalStorage.getUserItem("tM")!="";
if(_bHasLocal)
{
_oTop.LogKV({sValue:"getinvestigate|compose|loadlocalstorage"});
_oCompose.getPageEditor().setContent(_CodeAndEncode(getTop().getUin(),_oLocalStorage.getUserItem("tM")));
_oLocalStorage.removeUserItem("tM");
}
},clearLocalStorage:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
try{
var _oTop=getTop(),_oLocalStorage=_oTop.QMLocalStorage;
_oWin.clearTimeout(_oCompose.getComposeVar()._oAutoSaveLocalTimer);
if(_oLocalStorage.getUserItem("tM")&&_oLocalStorage.getUserItem("tM")!="")
{
_oLocalStorage.removeUserItem("tM");
}
}
catch(e)
{
debug(e.message);
_oTop.LogKV({sValue:'getinvestigate|compose|clearlocalfail'});
}
},clearAutoSave:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
_oCompose._disableAutoSave();
_oWin.clearTimeout(_oCompose.getComposeVar()._oAutoSaveTimer);
_oCompose.clearLocalStorage();
},_isEnabledAutoSave:function(){
var _bIsEnable=this._bIsEnableAutoSave;
return typeof _bIsEnable!="boolean"?true:_bIsEnable;
},_disableAutoSave:function(){
this._bIsEnableAutoSave=false;
},enableAutoSave:function(){
this._bIsEnableAutoSave=true;
},_combineBgMusicMail:function(_asContent,_aoBgMusicInfo){
var _oCompose=this;
if(_oCompose.S("mailbgmusic"))
{
_oCompose.S("mailbgmusic").value="use";
}
var _sAlias=getTop().getUserInfo("alias");
var _sBgmusic=_aoBgMusicInfo.song?getTop().T('<b>$songDisp$</b>($singerDisp$)').replace({songDisp:getTop().htmlEncode(_aoBgMusicInfo.song),singerDisp:getTop().htmlEncode(_aoBgMusicInfo.singer)}):"";
var _sViewUrl=_aoBgMusicInfo.song?getTop().T('<a href="http://y.qq.com/#type=soso&p=%3Futf8%3D1%26w%3D$songorg$" target="_blank">\u67E5\u770B</a>&nbsp;').replace({songorg:encodeURIComponent(_aoBgMusicInfo.song),singerorg:_aoBgMusicInfo.singer}):getTop().T('<a href="$url$" target="_blank">\u4E0B\u8F7D</a>').replace({url:_aoBgMusicInfo.url});
return getTop().T(['$content$','<player id="cmd:bgmusic" url="$url$" song="$song$" singer="$singer$"></player> ','<div id=QQMailBgMusicInfo style="font:12px;color:#909090;">','<br><br><br><br>\u4F60\u7684\u670B\u53CB $alias$ \u4E3A\u8FD9\u5C01\u90AE\u4EF6\u63D2\u5165\u4E86\u80CC\u666F\u97F3\u4E50 - $bgmusic$','$viewurl$&nbsp;','<a id="_bgmusic_play_btn_" href="http://mail.qq.com/zh_CN/htmledition/playmusic.html?song=$song$&singer=$singer$&sender=$encodealias$&url=$encodeurl$" target="_blank">\u64AD\u653E</a>','</div>']).replace({content:_asContent,url:_aoBgMusicInfo.url,alias:_sAlias,bgmusic:_sBgmusic,viewurl:_sViewUrl,song:_aoBgMusicInfo.song?encodeURIComponent(_aoBgMusicInfo.song):"",singer:_aoBgMusicInfo.singer?encodeURIComponent(_aoBgMusicInfo.singer):"",encodeurl:_aoBgMusicInfo.url?encodeURIComponent(_aoBgMusicInfo.url):"",encodealias:encodeURIComponent(_sAlias)});
},_checkInRemind:function(_aoAddrs){
var _oCompose=this;
var _nLen=_aoAddrs.length;
if(_nLen>10)
{
getTop().msgBox("\u6BCF\u6B21\u53D1\u9001\uFF0C\u597D\u53CB\u4E2A\u6570\u4E0D\u80FD\u8D85\u8FC710\u4E2A\u3002","dialog",true,0,"\u5931\u8D25\u4FE1\u606F");
return false;
}
if(!_oCompose.S("MyRssContent"))
{
for(var _i=0;_i<_nLen;_i++)
{
if(_aoAddrs[_i].valid&&!/@((vip.)?qq|foxmail).com/i.test(_aoAddrs[_i].addr))
{
getTop().msgBox("\u53EA\u80FD\u5BF9QQ\u90AE\u7BB1\u7528\u6237\u53D1\u51FA\u63D0\u9192\u3002","dialog",true,0,"\u5931\u8D25\u4FE1\u606F");
return false;
}
}
}
return true;
},_isUseBackgroundSend:function(){
var _oCompose=this;
var _oAttach=_oCompose.moAttach;
var _oExistList=_oAttach.getExistList(),_sPageId=_oCompose.getPageId(),_sUploadMode=_oExistList.length?_oExistList[_oExistList.length-1].sUploadMode:"";
return (("compose"==_sPageId||"group"==_sPageId)&&"1"==getTop().gbBackGroundSend);
},_clearLocationStyle:function(_aoDom){
var _oCompose=this;
var _oDoc=_oCompose.getPageEditor().getEditBody().ownerDocument;
var _oLocationTip=_oTop.S('showcalpanel',_oDoc);
_oLocationTip&&_oTop.removeSelf(_oLocationTip);
if(!_oTop.hasClass(_aoDom,'js_location_string'))
{
var _oNodes=_oTop.parents('.js_location_string',_aoDom);
if(_oNodes&&_oNodes.length)
{
_aoDom=_oNodes[0];
}
else{
_aoDom=null;
}
}
if(_aoDom&&_oTop.hasClass(_aoDom,'js_location_string'))
{
var _oRange=QMSelection.getSelection(_oCompose.getPageEditor().getEditWin()).getRange();
if(_oRange._moRange.startContainer!=_oRange._moRange.endContainer||_oRange._moRange.startOffset!=_oRange._moRange.endOffset)
{
return;
}
var _nOffset=_oRange._moRange.startOffset;
var _oPrevNode=_aoDom.previousSibling;
var _oNextNode=_aoDom.nextSibling;
var _oBookMark=_oRange.createBookmark();
var _oStartId=_oBookMark.oStartNode.id;
_oTop.replaceHTML(_aoDom,_aoDom.innerHTML);
var _oNode=_oTop.S(_oStartId,_oDoc);
var _oPrevPart=_oNode.previousSibling;
var _oNextPart=_oNode.nextSibling;
var _oCurPart;
_oRange.gotoBookmark({oStartNode:_oNode});
_oRange.select();
if(!_oPrevPart||_oPrevPart.nodeType!=3)
{
_oCurPart=_oNextPart;
}
else if(!_oNextPart||_oNextPart.nodeType!=3)
{
_oCurPart=_oPrevPart;
}
else{
_oPrevPart.nodeValue+=_oNextPart.nodeValue;
_oTop.removeSelf(_oNextPart);
_oCurPart=_oPrevPart;
}
if(_oCurPart&&_oPrevNode&&_oPrevNode!=_oPrevPart&&_oPrevNode.nodeType==3)
{
_oCurPart.nodeValue=_oPrevNode.nodeValue+_oCurPart.nodeValue;
_nOffset+=_oPrevNode.nodeValue.length;
_oTop.removeSelf(_oPrevNode);
}
if(_oCurPart&&_oNextNode&&_oNextNode!=_oNextPart&&_oNextNode.nodeType==3)
{
_oCurPart.nodeValue+=_oNextNode.nodeValue;
_oTop.removeSelf(_oNextNode);
}
_oRange._moRange.setStart(_oCurPart,_nOffset);
_oRange._moRange.setEnd(_oCurPart,_nOffset);
_oRange.select();
}
},_composeKeyDown:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oAttach=_oCompose.moAttach;
var _oProcess=_oCompose.moProcess;
function _gooutFullScreenEditor()
{
var _oEditor=_oCompose.getPageEditor();
if(_oEditor&&_oEditor.getEditorCustomVar&&_oEditor.getEditorCustomVar('FullScreenToolbar.bUseFullEdtior'))
{
_oEditor.getEditorCustomVar('FullScreenToolbar.gooutFullScreenEditor')();
}
}
return function(_aoEvent){
var _sUrl=_oWin.location.href;
if(_aoEvent.keyCode==10||_aoEvent.keyCode==13||_aoEvent.keyCode==83)
{
if(((_aoEvent.keyCode!=83&&_aoEvent.ctrlKey)||(_aoEvent.keyCode==83&&_aoEvent.altKey))&&_sUrl.indexOf('compose_postcard_dlg')<0)
{
var _oEditor=_oCompose.getPageEditor();
if(_oEditor&&_oEditor.getEditorCustomVar&&_oEditor.getEditorCustomVar('FullScreenToolbar.bUseFullEdtior'))
{
return false;
}
getTop().fireMouseEvent(_oCompose.SN("sendbtn")[0],"click");
}
else if(_aoEvent.keyCode==83&&_aoEvent.ctrlKey)
{
getTop().preventDefault(_aoEvent);
getTop().fireMouseEvent(_oCompose.SN("savebtn")[0],"click");
}
else if(_aoEvent.keyCode==10||_aoEvent.keyCode==13)
{
var _oTag=_aoEvent.srcElement||_aoEvent.target;
if(_oTag.id=="subject"||_oTag.id=="to"||_oTag.id=="cc"||_oTag.id=="bcc")
{
return false;
}
}
}
else if(_aoEvent.ctrlKey||_aoEvent.metaKey)
{
if(_aoEvent.keyCode==83||_aoEvent.keyCode==115)
{
if(isEnableAutoSave()&&_sUrl.indexOf("=compose_")==-1&&_sUrl.indexOf("=compose")!=-1)
{
_oProcess.doProcess('savedraft','save');
}
}
else if((_aoEvent.keyCode==86||_aoEvent.keyCode==118)&&_sUrl.indexOf("t=compose")!=-1&&_sUrl.indexOf("_card")==-1&&!_aoEvent.cancelBubble)
{
if(_oAttach._moPasteUpload&&_oAttach._moPasteUpload.getClipBoardFiles(_aoEvent))
{
_gooutFullScreenEditor();
}
}
}
else if(_aoEvent.keyCode==27)
{
_gooutFullScreenEditor();
}
else{
_oCompose.setNeedCloseConform(true);
}
return true;
};
},_composeKeyUp:function(){
var _oTop=getTop();
var _oCompose=this;
var _nTimerId=undefined;
var _nEnterTimerId=undefined;
var _nParseLocationTime=2000;
return function(_aoEvent){
if(_oTop.gnIEVer==6||_oTop.gnIEVer==7||_oTop.gnIEVer==8)
{
if(_aoEvent.ctrlKey&&_aoEvent.keyCode==83)
{
_oTop.preventDefault(_aoEvent);
_oTop.fireMouseEvent(_oCompose.SN("savebtn")[0],"click");
}
}
if(!_oCompose.bNeedIdentifyLocation)
{
return;
}
_oCompose._clearLocationStyle(_oCompose.getPageEditor().getSelectionElement());
if(_aoEvent.keyCode==13||_aoEvent.keyCode==38||_aoEvent.keyCode==40)
{
_oCompose._doLocationIdentify(2);
}
else{
_oCompose._doLocationIdentify(1);
}
};
},_composeMouseOver:function(){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _sTip='<span notForEdit="true" id="showcalpanel" style="width:64px;font-weight:normal;z-index:2;font-family:\'lucida Grande\', Verdana, \'Microsoft YaHei\';display: block;position: absolute;left: 0;bottom: -30px;width: 81px\9;height: 16px;text-indent: 0;overflow: hidden;padding: 5px 10px;_padding: 6px 10px 4px;background-color: #f2f2f2;border: 1px solid #d9d9d9;border-radius: 3px;font-size: 12px;line-height: 1;word-wrap: break-word;color: #7b7b7b;line-height: 15px; text-align: center; cursor:pointer;" onmouseover="getTop().attr(this.parentNode, \'isout\', 0);getTop().stopPropagation(event);" onmouseout="getTop().attr(this.parentNode, \'isout\', 1);getTop().hideMenu(event);"><a class="add2calendar" notForEdit="true" style="cursor:pointer;"><span style="background: url('+_oCompose._moPageConfig.sLocIcon+') no-repeat;background-image: -webkit-image-set('+_oCompose._moPageConfig.sLocIcon+') 1x, url('+_oCompose._moPageConfig.sLocIcon2x+') 2x);width: 10px;height: 14px;display: inline-block;margin-right: 5px;vertical-align: -3px;"></span>\u63D2\u5165\u5730\u56FE</a></span>';
_oCompose._mnHoverCnt=0;
return function(_aoEvent){
var _oTarget=getTop().getEventTarget(_aoEvent);
var _oDoc=_oCompose.getPageEditor().getEditBody().ownerDocument;
var _oLocationTip=_oTop.S('showcalpanel',_oDoc);
if(_oTop.hasClass(_oTarget,'js_location_string'))
{
_oCompose._mnHoverCnt++;
_oLocationTip&&_oLocationTip.parentNode&&(_oLocationTip.parentNode.style.cssText="border-bottom:1px dashed #ababab;z-index:1;position:static");
_oLocationTip&&_oTop.removeSelf(_oLocationTip);
_oTarget.style.cssText="border-bottom:1px dashed #ababab;position:relative;_display:inline-block;z-index:2";
_oTop.insertHTML(_oTarget,'beforeEnd',_sTip);
_oLocationTip=_oTop.S('showcalpanel',_oDoc);
_oLocationTip.onclick=function(){
var _oEditor=_oCompose.getPageEditor();
var _oFuncObj=_oEditor.getMapFunc();
_oTop.removeSelf(_oLocationTip);
_oTarget.style.cssText="border-bottom:1px dashed #ababab;z-index:1;position:static";
_oFuncObj._doDefaultClick.call(_oFuncObj,_oTarget.innerHTML);
_oTop.LogKV({sValue:'compose|location|tip|click'});
};
}
};
},_composeMouseOut:function(){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
return function(_aoEvent){
var _oTarget=getTop().getEventTarget(_aoEvent);
var _oLocationTip=_oTop.S('showcalpanel',_oCompose.getPageEditor().getEditBody().ownerDocument);
if(_oTop.hasClass(_oTarget,'js_location_string')||_oTop.hasClass(_oTarget.parentNode,'js_location_string'))
{
setTimeout(function(){
if(_oTop.hasClass(_oTarget.parentNode,'js_location_string'))
{
_oTarget=_oTarget.parentNode;
}
if(_oLocationTip&&_oTop.isShow(_oLocationTip)&&_oTop.attr(_oTarget,"isout")!=0)
{
_oTop.removeSelf(_oLocationTip);
_oTarget.style.cssText="border-bottom:1px dashed #ababab;z-index:1;position:static";
}
},200);
}
_oTop.stopPropagation(_aoEvent);
};
},_doLocationIdentify:function(_anLevel){
var _oCompose=this;
var _oTop=getTop();
var _nParseLocationTime=_anLevel==10?0:500;
_anLevel=_anLevel||0;
if(_oCompose._mnLocTimerId)
{
if(_oCompose._mnLocLevel>_anLevel)
{
return;
}
clearTimeout(_oCompose._mnLocTimerId);
}
_oCompose._mnLocTimerId=setTimeout(function(){
if(_oCompose.isIdentifying)
{
return;
}
_oCompose.isIdentifying=true;
_oTop.locationIdentify.call(_oCompose,_oCompose.getPageEditor().getEditBody(),_fLocationIdentifyOptions(_oCompose));
_oCompose._mnLocTimerId=0;
_oCompose._mnLocLevel=0;
},_nParseLocationTime);
},initFileTransporter:function(_abAutoSelect){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop(),_sDlgId="ftnupload_attach",_oFtnV2=_oCompose.S("bigAttachLink"),_bFtnV2=_oTop.attr(_oFtnV2,"ftnv2"),_bUseNewBigAttach=_bFtnV2=="true"?true:false;
var _sUrl=_oTop.T("/cgi-bin/ftnExs_files?sid=$sid$&t=exs_attachment&smethod=new&ftntype=1&listtype=attach$autoselect$").replace({sid:_oTop.getSid(),autoselect:_abAutoSelect?"&autoselect=true":""}),_sNewUrl=_oTop.T("/cgi-bin/readtemplate?sid=$sid$&t=ftn_bigattach$autoselect$").replace({sid:_oTop.getSid(),autoselect:_abAutoSelect?"&cmd=bigattachUpload,1,1":""});
_oTop.QMDialog(_sDlgId,"max")||new _oTop.QMDialog({sId:_sDlgId,sTitle:"<span class='attach_add_title'>\u6DFB\u52A0\u8D85\u5927\u9644\u4EF6</span>",bMin:true,nWidth:_bUseNewBigAttach?467:440,nHeight:_bUseNewBigAttach?476:399,sUrl:_bUseNewBigAttach?_sNewUrl:_sUrl,onbeforeclose:function(){
if(_bUseNewBigAttach&&this.getDialogWin()["_msg"])
{
this.getDialogWin()["_msg"]("/FtnUI/Dlg_close");
var _bRet=this.getDialogWin()["_bRet"];
return typeof (_bRet)=="undefined"?true:_bRet;
}
return true;
}});
_oTop.ftSendStatic("1002");
},showAddOnlineDocDlg:function(_abAutoSelect){
var _oCompose=this,_oOnlineDoc=_oCompose.moOnlineDoc;
_oOnlineDoc.showAddOnlineDocDlg();
},initOnlineDocData:function(_abAutoSelect){
var _oCompose=this,_oOnlineDoc=_oCompose.moOnlineDoc;
_oOnlineDoc.initOnlineDocData();
},startAppScanUpload:function(){
var _oTop=getTop(),_sKey=(new Date()).valueOf(),_sTitle="",_sDesc="",_oImgPath=[],goAppScanUploadNameSpace=(_oTop.goAppScanUploadNameSpace||(_oTop.goAppScanUploadNameSpace={})),_sDefaultPdfIconUrl=_oTop.getRes('$images_path$webp/icon_scan_pdf347b21.png');
_oTop.LogKV("compose|toolbar|appscanupload|entrance");
var _oAppScanUploadDlg;
var DIALOG_BODY_TMPL=_oTop.TE(['$@$if($sOprate$=="down")$@$','<div class="uploadfromapp_wrap" id="content">','<ul class="uploadfromapp_step">','<li class="ufa_actived">1.\u626B\u63CF\u4E8C\u7EF4\u7801</li>','<li>2.$sTitle$</li>','<li class="ufa_last">3.\u626B\u63CF\u7EB8\u8D28\u6587\u6863\u4E0A\u4F20</li>','</ul>','<div class="uploadfromapp_qr">','<img src="/cgi-bin/generate_twodimcode?sid=$sid$&action=appdownload&skey=$skey$" />','<div class="ufa_angle1"></div>','<div class="ufa_angle2"></div>','<div class="ufa_angle3"></div>','<div class="ufa_angle4"></div>','</div>','<p class="ufa_intro">$sdesc$&nbsp;<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=23&&no=1001484" target="_blank">\u5E2E\u52A9</a></p>','</div>','$@$else$@$','<div class="QMEditorToolPop">','<div class="qmEditorPicContent" id="content">','$@$if($isInstalledAppJust$==1)$@$','<ul class="uploadfromapp_step">','<li>1.\u626B\u63CF\u4E8C\u7EF4\u7801</li>','<li>2.$sTitle$</li>','<li class="ufa_actived ufa_last">3.\u626B\u63CF\u7EB8\u8D28\u6587\u6863\u4E0A\u4F20</li></ul>','$@$endif$@$','<div id="loading" style="padding-bottom:25px;overflow:hidden;">','$@$if($hasInstalledSupportApp$==1)$@$','<div class="mail_scan_doc"></div>','<p class="ufa_intro" style="width:320px;margin-top:14px;">\u8BF7\u6253\u5F00\u624B\u673A\u6536\u5230\u7684\u6D88\u606F\u63D0\u9192\uFF0C\u626B\u63CF\u7EB8\u8D28\u6587\u6863\u540E\u6DFB\u52A0\u5230\u90AE\u4EF6\uFF0C<br/>\u6216\u624B\u52A8\u6253\u5F00\u624B\u673A\u4E2D\u7684QQ\u90AE\u7BB1\u3002&nbsp;<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=23&&no=1001484" target="_blank">\u5E2E\u52A9</a></p>','$@$else$@$','<div class="iphoneupload_phone_code"></div>','<p class="ufa_intro" style="margin-top:14px;">\u4F60\u4F7F\u7528\u7684QQ\u90AE\u7BB1\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7<a href="http://itunes.apple.com/cn/app/id473225145?mt=8&ls=1" target="_blank">\u5347\u7EA7</a>\u540E\u4F7F\u7528\u6B64\u529F\u80FD\u3002&nbsp;<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=23&&no=1001484" target="_blank">\u5E2E\u52A9</a></p>','$@$endif$@$','</div>','<div id="loaded" class="iphoneuploading" style="display:none;">','<div class="iphoneupload_thumb" style="text-align: center;"><img id="showimg" src="#" /*style="width: auto;height: auto;"*//></div>','<div class="iphoneupload_bar">','<span class="iphoneupload_icon_iphone"></span>','<div class="iphoneupload_progress" style="overflow:hidden">','<div id="uploadprocess" class="iphoneupload_progress_fill" style="width:0%;"></div>','</div>','<span class="iphoneupload_icon_imac"></span>','</div>','<div id="uploadnum" style="display:none"><span id="current"></span>/<span id="total"></span></div>','</div>','</div>','</div>','$@$endif$@$']);
resetAppScanUpload();
var _oCompose=this,_oAttach=_oCompose.moAttach;
function getAppScanUploadDlg(abIsInstalledAppJust)
{
if(_oAppScanUploadDlg&&!_oAppScanUploadDlg.isClose())
{
return _oAppScanUploadDlg;
}
_oAppScanUploadDlg=new (_oTop.QMDialog)({sId:"iphoneuploadimg",sTitle:"\u626B\u63CF\u7EB8\u8D28\u6587\u6863\u4E0A\u4F20",sBodyHtml:DIALOG_BODY_TMPL.replace({hasInstalledSupportApp:1,isInstalledAppJust:abIsInstalledAppJust?1:0}),nWidth:384,bAnimation:false,onload:function(){
},onclose:function(){
resetAppScanUpload();
}});
return _oAppScanUploadDlg;
}
function resetAppScanUpload()
{
if(!isExistFileUploding())
{
goAppScanUploadNameSpace._bIpUploading=false;
goAppScanUploadNameSpace._oTimer&&clearInterval(goAppScanUploadNameSpace._oTimer);
goAppScanUploadNameSpace={};
_oTop.QMWebpush.getInst().close(64);
_oTop.QMAjax.send("/cgi-bin/webapnscheck",{content:"action=clearindex",method:"POST",onload:function(){
}});
}
}
function isExistFileUploding()
{
return (goAppScanUploadNameSpace._bIpUploading&&goAppScanUploadNameSpace.goIphonePath&&goAppScanUploadNameSpace.goIphonePath.length>0);
}
function resizeImg(_aoImgDom)
{
var _nWidth=0,_nHeight=0,_nNormail=190;
if(_aoImgDom.offsetWidth-_aoImgDom.offsetHeight>=0)
{
_nWidth=_aoImgDom.width;
if(_nWidth>=_nNormail)
{
_nHeight=_nNormail/(_aoImgDom.width/_aoImgDom.height);
_aoImgDom.style.cssText=["height: ",_nHeight,"px; ","width: ",_nNormail,"px;"].join("");
}
}
else{
_nHeight=_aoImgDom.height;
if(_nHeight>=_nNormail)
{
_nWidth=_nNormail/(_aoImgDom.height/_aoImgDom.width);
_aoImgDom.style.cssText=["height: ",_nNormail,"px; ","width: ",_nWidth,"px;"].join("");
}
}
}
function goDownAppProcess(_aoConfig)
{
_oTop.LogKV("compose|toolbar|appscanupload|godownappprocess");
_oAppScanUploadDlg.setBody(DIALOG_BODY_TMPL.replace(_aoConfig));
_oTop.QMWebpush.getInst().addEvent(64,onQMWebpushMessage,true);
function onQMWebpushMessage(_anService,_aoData)
{
var _oData=_aoData&&_aoData[0]||{};
if(_anService==64)
{
var _sStatus=_oData.st||"",_sOs=_oData.os,_sHtml="";
if(_sStatus=="download")
{
var _sSystemDiff;
if(_sOs=="android")
{
_sSystemDiff="\u5DF2\u626B\u63CF\u5E76\u5F00\u59CB\u4E0B\u8F7DQQ\u90AE\u7BB1\uFF0C\u8BF7\u5728\u5B89\u88C5\u5B8C\u6210\u540E<br/>\u7528\u6B64QQ\u90AE\u7BB1\u5E10\u53F7\u767B\u5F55\u4F7F\u7528\u3002";
}
else if(_sOs=="ios")
{
_sSystemDiff="\u5DF2\u626B\u63CF\uFF0C\u8BF7\u4ECEApp Store\u5B89\u88C5QQ\u90AE\u7BB1\uFF0C<br/>\u5B89\u88C5\u6210\u529F\u540E\u7528\u6B64QQ\u90AE\u7BB1\u5E10\u53F7\u767B\u5F55\u4F7F\u7528\u3002";
}
_sHtml=_oTop.T(['<ul class="uploadfromapp_step">','<li>1.\u626B\u63CF\u4E8C\u7EF4\u7801</li>','<li class="ufa_actived">2.$sTitle$</li>','<li class="ufa_last">3.\u626B\u63CF\u7EB8\u8D28\u6587\u6863\u4E0A\u4F20</li>','</ul>','<div class="uploadfromapp_qr ufa_scaned">','<img src="/cgi-bin/generate_twodimcode?sid=$sid$&action=appdownload&skey=$skey$" />','<div class="ufa_angle1"></div>','<div class="ufa_angle2"></div>','<div class="ufa_angle3"></div>','<div class="ufa_angle4"></div>','</div>','<p class="ufa_intro" style="width:266px;">$sys$&nbsp;','<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=23&&no=1001484" target="_blank">\u5E2E\u52A9</a>','</p>']).replace({sys:_sSystemDiff,sid:_oTop.getSid(),skey:_sKey,sTitle:_aoConfig.sTitle});
_oAppScanUploadDlg.S("content").innerHTML=_sHtml;
}
else if(_sStatus=="login")
{
_oAppScanUploadDlg.setBody(DIALOG_BODY_TMPL.replace({sys:_sSystemDiff,sid:_oTop.getSid(),skey:_sKey,sTitle:_aoConfig.sTitle,hasInstalledSupportApp:1,isInstalledAppJust:1}));
doWpns(true);
}
}
}
}
function sendMessageToPhone(asKey,aoUpDlg)
{
var _nAllowSize=(_oAttach.getAttachLimit()-(_oAttach.getAttachSize()||0))/1024;
_oTop.QMAjax.send("/cgi-bin/webapnscheck",{content:_oTop.T("key=$key$&filefrom=scan&allowsize=$allowsize$").replace({key:asKey,allowsize:_nAllowSize}),method:"POST",onload:function(_abIsOk,_asReturn){
if(_abIsOk)
{
if(/<!--cgi exception-->/ig.test(_asReturn))
{
var errcode=(/<!--cgierrorcode:-([\d]+)-->/ig.test(_asReturn)&&RegExp.$1);
if("2"==errcode)
{
goUrl(window,[location.protocol,"//",location.hostname,"/cgi-bin/loginpage"].join(""));
}
else if("100"==errcode)
{
goDownAppProcess({sOprate:"down",sid:_oTop.getSid(),skey:_sKey,sTitle:"\u4E0B\u8F7D\u5E76\u5B89\u88C5",sdesc:"\u6B64\u529F\u80FD\u9700\u8981QQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF\u914D\u5408\u4F7F\u7528\uFF0C<br/>\u8BF7\u5148\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u5B89\u88C5\u3002"});
}
else if("101"==errcode)
{
goDownAppProcess({sOprate:"down",sid:_oTop.getSid(),skey:_sKey,sTitle:"\u66F4\u65B0\u5BA2\u6237\u7AEF",sdesc:"\u4F60\u4F7F\u7528\u7684QQ\u90AE\u7BB1iPhone\u5BA2\u6237\u7AEF\u7248\u672C\u8FC7\u4F4E\uFF0C<br/>\u8BF7\u5148\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u3002"});
}
}
else{
if(!_oAppScanUploadDlg.isClose())
{
_oTop.LogKV("compose|toolbar|appscanupload|startpoll");
if(goAppScanUploadNameSpace._oTimer)
{
clearInterval(goAppScanUploadNameSpace._oTimer);
goAppScanUploadNameSpace._oTimer=null;
}
goAppScanUploadNameSpace._oTimer=setInterval(function(){
pollingUploadProgress(aoUpDlg);
},1000);
}
}
}
}});
}
function checkFileExist(_asFilePath)
{
var _oTmpFilePath=goAppScanUploadNameSpace["goIphonePath"]||[];
for(var i=0;i<_oTmpFilePath.length;i++)
{
if(_asFilePath==_oTmpFilePath[i])
{
return true;
}
}
return false;
}
function pollingUploadProgress(aoUpDlg)
{
_oTop.QMAjax.send(_oTop.T("/cgi-bin/webapnscheck?key=$key$&action=checkappimg&filefrom=scan").replace({key:_sKey}),{method:"POST",onload:function(_abIsOk,_asParam){
if(_abIsOk&&goAppScanUploadNameSpace._bIpUploading)
{
var _oUpDlg=aoUpDlg,_oResult=evalValue(_asParam),_nTotal=_oResult.total||1,_sResult=_oResult.done,_nProcessPecent=100/_nTotal,_oProcess=_oUpDlg.S("uploadprocess"),_oFiles=_oResult.files;
_oFiles.pop();
var _oFile,_sInsertTextUrl,_sPreviewUrl;
for(var i=0;i<_oFiles.length;i++)
{
_oFile=_oFiles[i];
if(!checkFileExist(_oFile.filePath))
{
if(typeof goAppScanUploadNameSpace["goIphonePath"]=="undefined")
{
goAppScanUploadNameSpace["goIphonePath"]=[];
}
goAppScanUploadNameSpace["goIphonePath"].push(_oFile.filePath);
if(!_oUpDlg.isClose())
{
if(_oFile.type==="pdf"||_oFile.type==="pdf_start")
{
_sPreviewUrl=_oTop.T(["/cgi-bin/viewdocument?encryptpath=$path$&nf=$nf$&s=yozo&filetype=doc&sid=$sid$"]).replace({sid:_oTop.getSid(),path:_oFile.filePath,nf:_oFile.nf});
_sInsertTextUrl=_sPreviewUrl+"&t=attachments_simple";
_sPreviewUrl+="&t=attachments_content";
if(_oFile.type==="pdf_start")
{
_oUpDlg.S("showimg").setAttribute("src",_sDefaultPdfIconUrl);
}
}
else{
_sInsertTextUrl=_sPreviewUrl=_oFile.previewUrl+"&sid="+_oTop.getSid();
if(_oFile.type==="pic_thumb")
{
_oFile.previewUrl&&_oUpDlg.S("showimg").setAttribute("src",_sPreviewUrl);
}
}
if(_nTotal==1)
{
var _nVirtualProcess=0;
var _nVirtualIdx=setInterval(function(){
if(_oUpDlg&&_oUpDlg.isClose()||parseFloat(_oProcess.style.width)==100)
{
clearInterval(_nVirtualIdx);
return;
}
if(_nVirtualProcess<=80)
{
_nVirtualProcess+=(Math.random()*5);
}
else if(_nVirtualProcess>80&&_nVirtualProcess<=90)
{
_nVirtualProcess+=(Math.random());
}
else if(_nVirtualProcess>90&&_nVirtualProcess<=95)
{
_nVirtualProcess+=(Math.random());
}
else{
_nVirtualProcess=96;
}
_oProcess.style.width=(_nVirtualProcess+"%");
},500);
}
_oTop.show(_oUpDlg.S("loading"),0);
_oTop.show(_oUpDlg.S("loaded"),1);
}
if(_oFile.type==="pic_thumb"||_oFile.type==="pdf_start")
{
return;
}
goAppScanUploadNameSpace._nCurrentImg++;
_oProcess&&_oProcess.style&&(_oProcess.style.width=_nProcessPecent*goAppScanUploadNameSpace._nCurrentImg+"%");
_oTop.LogKV("compose|toolbar|appscanupload|fileaddcount");
_oAttach.addExistNormalAttach([{sName:_oFile.name,nSize:_oFile.size,bUpToFtn:false,bResumeAttach:false,sDownloadPage:_sInsertTextUrl,sFileUrl:_sPreviewUrl,sNf:_oFile.nf,sFilePath:_oFile.filePath,sFileId:_oFile.filePath,bIsAppScanUploadFile:true}]);
}
}
if(_sResult=="true")
{
goAppScanUploadNameSpace._oTimer&&clearInterval(goAppScanUploadNameSpace._oTimer);
_oTop.goAppScanUploadNameSpace={};
_oProcess&&_oProcess.style&&(_oProcess.style.width="100%");
setTimeout(function(){
!_oUpDlg.isClose()&&_oUpDlg.close();
},500);
}
}
}});
}
function doWpns(abIsInstalledAppJust)
{
var _oUpDlg=getAppScanUploadDlg(abIsInstalledAppJust);
goAppScanUploadNameSpace._bIpUploading=true;
goAppScanUploadNameSpace._nCurrentImg=0;
goAppScanUploadNameSpace._nProcessPercent=0;
sendMessageToPhone((abIsInstalledAppJust?"":_sKey),_oUpDlg);
}
doWpns();
},openAttachFolder:function(){
var _oCompose=this;
var _oAttach=_oCompose.moAttach;
var _oTop=getTop(),_sUrl=['/cgi-bin/attachfolder?topmails=0&s=search&folderid=attach&hflag=attach&action=list&page=0&t=attachfolder_dlg&subject=&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1&fnviewtype=cell&nocheckframe=true&sid=',_oTop.getSid()].join(''),_sAttachSelect="DEF_ATTACH_FOLDER_SELECT";
_oTop.setGlobalVarValue(_sAttachSelect,{});
new _oTop.QMDialog({sId:"attachFolderDlg",sTitle:"\u6536\u85CF\u7684\u9644\u4EF6",nWidth:467,nHeight:_oTop.gbIsIE?431:426,sUrl:_sUrl,onclose:function(){
var _oSelf=this,_oAttachSelectData=_oTop.getGlobalVarValue(_sAttachSelect);
if(_oAttachSelectData)
{
var _aoData=_oAttachSelectData,_oData;
for(var k in _oAttachSelectData)
{
if(_oData=_oAttachSelectData[k])
{
var _oAttachFile=_oAttach._moAttfldUpload.addFile({sName:_oData.name,nSize:+_oData.size,sStatus:"ready",mailid:_oData.mailid,attachid:_oData.attachid,attachname:_oData.name,editname:_oData.editname,fileextenal:_oData.ext,filebyte:_oData.size});
_oAttachFile._oFile=[{mailid:_oData.mailid,attachid:_oData.attachid,attachname:encodeURIComponent(_oData.name),editname:_oData.editname,fileextenal:_oData.ext,filebyte:_oData.size}];
_oAttachFile.upload=function(){
_oAttach.attrUpload(_oAttach._moAttfldUpload,this);
};
_oAttach.oFileUploadMgr.oCfg.onselect.call(_oAttach.oFileUploadMgr,[_oAttachFile],"attfld");
}
}
}
_oTop.setGlobalVarValue(_sAttachSelect,{});
}});
},showInstallActiveXDialog:function(){
var _oCompose=this,_oWin=_oCompose.getWin(),_oTop=getTop();
return function(_asType){
var _sTitle,_sPath,_sDownloadFname,_sOnlineFname,_bIsNewSC=false;
if(_asType=="ScreenSnapNew")
{
var _sBrowserType="chrome42";
_bIsNewSC=true;
_sTitle=_oTop.QMAXInfo.getTitle();
_sPath=_oTop.QMAXInfo.get("path",_sBrowserType);
_sDownloadFname=_oTop.QMAXInfo.installer("download",_sBrowserType);
_sOnlineFname=_oTop.QMAXInfo.installer("online",_sBrowserType);
}
else{
_sTitle=_oTop.QMAXInfo.getTitle();
_sPath=_oTop.QMAXInfo.get("path");
_sDownloadFname=_oTop.QMAXInfo.installer("download");
_sOnlineFname=_oTop.QMAXInfo.installer("online");
}
if(_asType=="paste"&&((_oTop.gbIsChrome&&parseInt(_oTop.gsChromeVer)>41)||_oTop.gbIsEdge))
{
return false;
}
var _bIsUpdate=_oTop.detectActiveX(_asType=="filetransport"?3:0);
if(_asType=="failpaste")
{
_oTop.showError("\u6B64\u6D4F\u89C8\u6A21\u5F0F\u4E0B\u53EA\u652F\u6301\u76F4\u63A5\u7C98\u8D34\u6587\u672C\u6570\u636E");
return;
}
function _show(_asIds,_abIsShow)
{
var _bIsShow=_abIsShow==null?true:_abIsShow;
_oTop.E(_asIds.split(","),function(_asId){
var _oDialog=_oTop.QMDialog("activexDialog");
var _oDom=_oDialog&&_oDialog.S(_asId);
if(_oDom)
{
_oTop.show(_oDom,_bIsShow);
}
});
}
function _hide(_asIds)
{
_show(_asIds,false);
}
function _getLocId(_asMethod)
{
return [_bIsUpdate?"update":"setup",_oCompose.getPageId(),_asMethod,{"paste":2,"filetransport":3,"drag":4}[_asType]||1].join(",");
}
function _detect()
{
var _bResult=false;
if(_oTop.gbIsMac)
{
_bResult=_oTop.detectActiveX(0,2,null,Math.random());
}
else{
_bResult=_oTop.detectActiveX(0,2);
}
if(_bResult)
{
var _oClassChange={"ico_attbig_disabled":"ico_attbig","ico_screensnap_disable":"ico_screensnap"},_oBtns=_oCompose.SN("activexControlBtn");
for(var i=_oBtns.length-1;i>=0;i--)
{
var _sClass=_oClassChange[_oBtns[i].className];
if(_sClass)
{
_oTop.setClass(_oBtns[i],_sClass);
}
}
if(_oCompose.getPageEditor())
{
_oCompose.getPageEditor().updateToolBarUI("ScreenSnap");
}
return true;
}
return false;
}
function _cancel()
{
_oTop.QMDialog("activexDialog","close");
_oCompose.focusPageEditor(0);
}
function _snipSetup()
{
var _oDialog=_oTop.QMDialog("activexDialog");
if(_oDialog)
{
_oTop.QMDialog("activexDialog","close");
}
_oTop.getActionWin().location="http://snip.qq.com/download";
}
function _snipCheck()
{
_hide("snipcheck");
_show("snipchecking");
_oWin.setTimeout(function(){
if(_detect())
{
_oTop.QMDialog("activexDialog","close");
}
else{
_oTop.QMDialog("activexDialog").S("snipcheck").innerHTML="\u91CD\u65B0\u68C0\u6D4B";
_show("snipFail,snipcheck");
_hide("snipMsg,snipchecking");
}
},500);
}
function _setup()
{
var _sType=_oTop.gbIsIE?"IE":"FF";
if(!_oTop.gbIsIE&&!_oTop.QMAXInfo.mbAblePlugin)
{
_hide("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
_show("finish,nosupportMsg");
return;
}
_oTop.getActionWin().location="/zh_CN/"+_sPath+_sDownloadFname;
_hide("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
_show("download,downloadMsg");
var _oDialog=_oTop.QMDialog("activexDialog");
var _oDom=_oDialog&&_oDialog.S("download");
_oDom&&(_oDom.disabled=true);
_oTop.ossLog("realtime","all","stat=custom&type=INSTALL_ACTIVEX&locval="+_getLocId("exe"));
}
function _onlineSetup()
{
if(!_oTop.gbIsIE&&!_oTop.QMAXInfo.mbAblePlugin)
{
_hide("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
_show("finish,nosupportMsg");
return;
}
_oTop.open(_oTop.T("/cgi-bin/readtemplate?t=browser_addon&check=false&returnsid=$sid$&s=install").replace({sid:_oTop.getSid(),loc:_getLocId("cab")}));
}
function _check()
{
_show("detectContainer");
_hide("optContainer");
_oWin.setTimeout(function(){
_hide("detectContainer,download,downloadMsg");
_show("optContainer");
if(_detect())
{
_hide("setup,checkMsg,check,cancel");
_show("finishMsg,finish");
}
else{
_show("setup,checkMsg,check,cancel");
}
},500);
_oTop.QMDialog("activexDialog").S("hasinstall").checked=false;
}
;function _restart()
{
_hide("detectContainer,download,downloadMsg,setup,checkMsg,check,cancel");
_show("optContainer,restartMsg,finish");
}
var _sMailName=(_oTop.getDomain()=="qq.com"?"QQ":"foxmail.com"),_sControl=_sMailName+"\u90AE\u7BB1"+_sTitle,_sTitle=_sControl+"\u5B89\u88C5\u63D0\u793A";
var _oTemplate=_oTop.T(['<div id="optContainer" class="dialog_feedback">','<span class="dialog_icon icon_info_b"></span>','<div>','<div id="setupMsg" class="dialog_f_c" >','<div class="dialog_f_t">$msg$</div>','<div class="dialog_f_d">\u5B89\u88C5\u540E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u529F\u80FD\uFF1A<br>','$func$','</div>','</div>','<div id="downloadMsg" class="dialog_f_c" style="display:none;">','<div class="dialog_f_t">\u8BF7\u5728\u8FD0\u884C\u5B89\u88C5\u7A0B\u5E8F\u6210\u529F\u540E\u518D\u70B9\u51FB\u786E\u5B9A\u3002</div>','<div class="dialog_f_d">\u6CA1\u6709\u4E0B\u8F7D\u6210\u529F\uFF0C\u53EF<a href="/zh_CN$path$$exe$" target="_blank">\u70B9\u51FB\u6B64\u5904</a>\u4E0B\u8F7D ','<div>','<input style="vertical-align:middle;" type="checkbox" id="hasinstall"> ','<label for="hasinstall">\u6211\u5DF2\u5B89\u88C5\u7A0B\u5E8F</label>','</div>','</div>','</div>','<div id="checkMsg" class="dialog_f_c" style="display:none;">','<div class="dialog_f_t">\u7CFB\u7EDF\u68C0\u6D4B\u5230$control$\u8FD8\u6CA1$opt$\u6210\u529F\u3002</div>','<div class="dialog_f_d">\u8BF7\u786E\u5B9A\u662F\u5426\u5DF2\u5B89\u88C5\u6210\u529F\uFF0C\u82E5\u5DF2\u5B89\u88C5\u6210\u529F\u8BF7\u9009\u62E9\u518D\u6B21\u68C0\u6D4B\u3002</div>','</div>','<div id="finishMsg" class="dialog_f_c" style="display:none;">','<div class="dialog_f_t">$control$\u5DF2\u5B89\u88C5\u6210\u529F\u3002</div>','<div class="dialog_f_d">\u60A8\u53EF\u4EE5\u9A6C\u4E0A\u4EAB\u53D7$control$\u5E26\u6765\u7684\u6109\u5FEB\u4F53\u9A8C\u3002<br>','$func$','</div>','</div>','<div id="restartMsg" class="dialog_f_c" style="display:none;">','<div class="dialog_f_t">\u5B89\u88C5\u5B8C\uFF0C\u8BF7\u91CD\u542FFirefox\uFF0C\u5C31\u80FD\u4EAB\u53D7$control$\u5E26\u6765\u7684\u6109\u5FEB\u4F53\u9A8C\u3002</div>','<div class="dialog_f_d">$func$</div>','</div>','<div id="nosupportMsg" class="dialog_f_c" style="display:none;">','<div class="dialog_f_t">\u62B1\u6B49\uFF0C$control$\u6682\u65F6\u8FD8\u4E0D\u652F\u6301\u60A8\u7684\u6D4F\u89C8\u5668\u73AF\u5883\u3002</div>','<div class="dialog_f_d">\u656C\u8BF7\u671F\u5F85\u6211\u4EEC\u540E\u7EED\u7684\u6539\u8FDB\u3002</div>','</div>','</div>','</div>','<div id="detectContainer" class="dialog_f_c" style="padding:30px 0px;text-align:center;display:none;">','<img src="$images_path$webp/ico_loading21e9c5d.gif" align="absmiddle" style="margin-right:20px;">','\u7CFB\u7EDF\u6B63\u5728\u68C0\u6D4B$control$\u662F\u5426\u5B89\u88C5\u6210\u529F...','</div>']);
var _oOperate=_oTop.T(['<input class="wd3 btn" type=button id=\'setup\' style="$setupStyle$" value=\u4E0B\u8F7D$opt$>','<input class="wd3 btn" style="$onlineStyle$" type=button id=\'onlinesetup\' value=\u5728\u7EBF$opt$>','<input class="wd1 btn" type=button id=\'download\' value=\u786E\u5B9A style="display:none;">','<input class="wd3 btn" type=button id=\'check\' value=\u518D\u6B21\u68C0\u6D4B style="display:none;">','<input class="wd1 btn" type=button id=\'cancel\' value=\u53D6\u6D88>','<input class="wd1 btn" type=button id=\'finish\' value=\u5B8C\u6210 style="display:none;">']);
var _oMacTemplate=_oTop.T(['<div id="optContainer">','<div class="dialog_feedback">','<img class="dialog_icon" style="margin:1px 14px -4px 0;" src="$images_path$webp/snip_74x741e9c5d.jpg" />','<div class="dialog_f_c" id="setupMsg" style="margin-left:84px;white-space:nowrap;">','<div class="dialog_f_t">\u8BF7\u5B89\u88C5Snip\u622A\u5C4F\u5DE5\u5177\uFF0C\u5B89\u88C5\u540E\u53EF\u4EE5\u5728QQ\u90AE\u7BB1\u4E2D\u4F7F\u7528\u622A\u5C4F\u529F\u80FD\u3002</div>','<div class="dialog_f_d">\u5982\u5DF2\u5B89\u88C5\uFF0C\u8BF7\u5728Snip\u7684\u504F\u597D\u8BBE\u7F6E\u4E2D\u5173\u8054QQ\u90AE\u7BB1\u3002</div>','</div>','</div>','</div>']),_macSetupTemplate=_oTop.T(['<div id="snipFail"  style="display:none">\u5B89\u88C5\u5C1A\u672A\u6210\u529F\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5DF2\u7ECF\u4E0B\u8F7D\u5E76\u6210\u529F\u5B89\u88C5Snip\u3002</div>','<div id="snipMsg" ><div class="b_size bold">\u68C0\u6D4BSnip\u5B89\u88C5\u72B6\u6001</div>','<div style="margin:5px 0 0;" class="graytext">\u4E0B\u8F7D\u5E76\u6210\u529F\u5B89\u88C5Snip\u540E\u8BF7\u68C0\u6D4B\u5B89\u88C5\u72B6\u6001\u3002</div></div >']);
var _sFunc=_oTop.TE([_oTop.gbIsIE||_oTop.gbIsFF?'<input hideFocus type="button"  onmousedown="return false" unselectable="on" style="margin:2px 5px 0;" class="ico_att"/>\u62D6\u62FD\u4E0A\u4F20\u9644\u4EF6<br>':'',_bIsNewSC?'':'<input hideFocus type="button"  style="margin:2px 5px 0;" class="ico_attbig"/>\u8D85\u5927\u9644\u4EF6<br>','<input hideFocus style="background: url($images_path$webp//newicon/compose207c92.png) no-repeat 0 -120px;margin:2px 5px 0;height:16px;width:16px;padding:0;border:0;" type=button unselectable="on">\u622A\u5C4F']).replace({images_path:_oTop.getPath("image",true)}),_sMsg=_bIsUpdate?_oTop.T('<b>\u60A8\u7684$control$\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\u5230\u65B0\u7684\u7248\u672C\u3002</b>'):_oTop.T('<b>\u60A8\u8FD8\u672A\u5B89\u88C5$control$\u3002</b>'),_sCtrlName="\u622A\u5C4F",_nWidth=400,_nHeight=210;
switch(_asType)
{case "paste":
_sMsg=_oTop.T('<b>\u60A8\u662F\u5426\u5E0C\u671B\u7C98\u8D34\u63D2\u5165\u56FE\u7247\u6216\u8005\u7C98\u8D34\u6DFB\u52A0\u9644\u4EF6\uFF1F</b><br>$control$\u5C06\u80FD\u5E2E\u52A9\u60A8\u89E3\u51B3\u8BE5\u95EE\u9898\u3002');
_nHeight=230;
break;
case "filetransport":
_sCtrlName="\u4E2D\u8F6C\u7AD9";
break;
case "drag":
_sCtrlName="\u62D6\u62FD";
break;
}if(_oTop.gbIsMac)
{
var _oStatus=_oTop.detectActiveX(0,0)&&!_oTop.detectActiveX(0,2),_sNewTitle="\u8BF7\u5B89\u88C5Snip",_sUpgradTitle="Snip\u63A7\u4EF6\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u4E0B\u8F7D\u5347\u7EA7";
_oTemplate=_oMacTemplate.replace({title:_oStatus?_sUpgradTitle:_sNewTitle,images_path:_oTop.getPath("image",true)});
_sTitle=_oStatus?"\u5347\u7EA7Snip":"\u5B89\u88C5Snip";
_nHeight=_nHeight-30;
_oOperate=_oTop.T(['<a class="btn_gray btn_space" id="snipsetup">\u4E0B\u8F7DSnip</a>','<a href="http://snip.qq.com#faq10" target="_blank" id="hadsetup" class="btn_gray">\u6211\u5DF2\u5B89\u88C5Snip</a>']);
}
new _oTop.QMDialog({sId:"activexDialog",sTitle:_sTitle,sBodyHtml:_oTemplate.replace({control:_sControl,images_path:_oTop.getPath("image",true),msg:_sMsg.replace({control:_sControl,mailname:_sMailName,controlname:_sCtrlName}),setupStyle:_sDownloadFname?"":"display:none;",onlineStyle:_sOnlineFname?"":"display:none;",opt:_bIsUpdate?"\u5347\u7EA7":"\u5B89\u88C5",func:_sFunc,path:_sPath,exe:_sDownloadFname}),sFootHtml:_oOperate.replace({control:_sControl,images_path:_oTop.getPath("image",true),msg:_sMsg.replace({control:_sControl,mailname:_sMailName,controlname:_sCtrlName}),setupStyle:_sDownloadFname?"":"display:none;",onlineStyle:_sOnlineFname?"":"display:none;",opt:_bIsUpdate?"\u5347\u7EA7":"\u5B89\u88C5",func:_sFunc,path:_sPath,exe:_sDownloadFname}),onload:function(){
var _oDlg=this;
_oTop.addEvent(_oDlg.S("setup"),"click",_setup);
_oTop.addEvent(_oDlg.S("snipsetup"),"click",_snipSetup);
_oTop.addEvent(_oDlg.S("snipcheck"),"click",_snipCheck);
_oTop.addEvent(_oDlg.S("onlinesetup"),"click",_onlineSetup);
_oTop.addEvent(_oDlg.S("download"),"click",(_oTop.gbIsFF?_restart:_check));
_oTop.addEvent(_oDlg.S("check"),"click",_check);
_oTop.addEvent(_oDlg.S("cancel"),"click",_cancel);
_oTop.addEvent(_oDlg.S("hadsetup"),"click",_cancel);
_oTop.addEvent(_oDlg.S("finish"),"click",_cancel);
_oTop.addEvent(_oDlg.S("hasinstall"),"click",function(){
_oDlg.S("download").disabled=!_oDlg.S("hasinstall").checked;
});
},onshow:function(){
if(this.S("setup"))
{
this.S("setup").focus();
}
}});
if({"compose":true,"card":true,"note":true}[_oCompose.getPageId()])
{
_oCompose.autoSave(true,null);
}
};
},setComposeData:function(_aoData){
var _oCompose=this;
_oCompose.getPageEditor().setContent(_aoData.content||"");
_oCompose.getInputObj("subject").value=_aoData.subject||"";
},_createPostNewWindow:function(_asName,_asSrc,_aoData,_asWinParam){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
var _oDoc=_oWin.document;
var _sNewWinFormId="_creAtenEWpOstwIn_";
_oNewWinForm=getTop().S(_sNewWinFormId,_oWin);
if(!_oNewWinForm)
{
_oNewWinForm=_oDoc.createElement("form");
_oNewWinForm.id=_sNewWinFormId;
_oNewWinForm.method="post";
_oDoc.body.appendChild(_oNewWinForm);
}
_oNewWinForm.innerHTML="";
if(_asSrc.indexOf("sid=")<0)
{
_asSrc=[_asSrc,_asSrc.indexOf("?")<0?"?":"&","sid=",getTop().getSid()].join("");
}
_oNewWinForm.action=_asSrc;
_oNewWinForm.target=_asName;
_oNewWinForm.onsubmit=function(){
_oWin.open('about:blank',_asName,_asWinParam);
};
_aoData=_aoData||{};
_aoData.sid=_aoData.sid||getTop().getSid();
getTop().E(_aoData,function(_asValue,_asKey){
var _oInput=_oDoc.createElement("input");
_oInput.type="hidden";
_oInput.name=_asKey;
_oInput.value=_asValue;
_oNewWinForm.appendChild(_oInput);
});
_oNewWinForm.submit();
},_showPreview:function(){
var _oCompose=this;
return function(){
var _oEditor=_oCompose.getPageEditor(),_sContent;
_oCompose._fixQQMailStationery("100%");
_sContent=_oCompose.getPageEditor().getContent();
_oCompose._fixQQMailStationery(getTop().gbIsIE?"auto":"100%");
_sContent=getTop().filteSignatureTag(filterSourceContent(_sContent),"FILTE<:");
_sContent=getTop().fixNonBreakSpace(_sContent);
var _sWinParam=getTop().T('height=$height$,width=$width$,top=$top$,left=$left$,toolbar=no,scrollbars= yes,menubar=no').replace({top:100,left:100,height:500,width:550});
_oCompose._createPostNewWindow("newwin","/cgi-bin/readtemplate",{content:_sContent,t:"compose_preview"},_sWinParam);
};
},_onComposePreview:function(){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
return function(){
var _sWinParam='_blank';
var _sUrl=getTopHost()+'/cgi-bin/readtemplate?t=compose_preview_all.html&kvclick=readtemplate|compose|preview_all&nocheckframe=true&sid='+_oTop.getSid();
if(_oTop.gbIsIE)
{
_oCompose.setNeedCloseConform(false);
_oWin.open(_sUrl,_sWinParam);
setTimeout(function(){
_oCompose.setNeedCloseConform(true);
},2000);
}
else{
_oWin.open(_sUrl,_sWinParam);
}
};
},QQMailPreviewContent:function(){
var _oTop=getTop();
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oEditor=_oCompose.getPageEditor(),_sContent;
_oCompose._fixQQMailStationery("100%");
_sContent=_oEditor.getContent();
if(_oCompose.S('contenttype').checked)
{
_sContent=(_oTop.gbIsIE||_oTop.gbIsOpera?_oTop.textToHtml:_oTop.textToHtmlForNoIE)(_sContent);
}
_oCompose._fixQQMailStationery(_oTop.gbIsIE?"auto":"100%");
_sContent=_oTop.filteSignatureTag(filterSourceContent(_sContent),"FILTE<:");
_sContent=_oTop.fixNonBreakSpace(_sContent);
var _oSender={};
var _bSeparatedCopy=_oCompose.S('separatedcopy')&&_oCompose.S('separatedcopy').value=='true'?1:0;
if(_oCompose.getQMAddrInput())
{
_oTop.E(["to","cc","bcc"],function(_asType){
var _oAddrCtrl=_oCompose.getQMAddrInput().get(_asType,_oWin);
if(!_oAddrCtrl)
{
return;
}
var _oAddr=_oAddrCtrl.get('json');
var _oMyAddr;
if(_bSeparatedCopy)
{
if(!_oSender.sender_to)
{
_oSender.sender_to=[];
}
_oMyAddr=_oSender.sender_to;
}
else{
_oMyAddr=_oSender['sender_'+_asType]=[];
}
_oTop.E(_oAddr,function(_aoItem){
_oMyAddr.push({addr:_oTop.htmlEncode(_aoItem.addr),nick:_oTop.htmlEncode(_aoItem.nick)});
});
});
}
_oTop.E(_oSender,function(_aoItem){
if(_aoItem.length)
{
_aoItem[_aoItem.length-1].bEndItem=true;
}
});
var _oGroupTo=_oCompose.S('qqgroupid');
if(_oGroupTo&&_oGroupTo.value!="0")
{
_oSender.sender_group=[{nick:_oCompose.S('Gname_'+_oGroupTo.value).innerHTML,addr:_oTop.htmlEncode(_oGroupTo.value),bEndItem:true}];
}
var _oFileListArr=[];
_oTop.E(_oTop.finds('[ui-type="filename"]',_oWin),function(_aoItem){
if(_oTop.hasClass(_aoItem,'addrtitle'))
{
return;
}
var _sFileName=_aoItem.innerHTML;
var _sExt=_sFileName.split('.').pop();
_oFileListArr.push({filename:_sFileName,icon:_oTop.getIconByExt(_sExt==_sFileName?'':_sExt,'min')});
});
if(_oFileListArr.length)
{
_oFileListArr[_oFileListArr.length-1].bEndItem=true;
}
var _oSubject=_oCompose.S('subject');
var _oSendName=_oCompose.S("sendname");
var _oSendAddr=_oCompose.S("sendmailname");
var _sHTML=_oTop.TE(['<table width="100%" border="0" cellspacing="0" cellpadding="0" class="readmailinfo bd" style="border-width:0 0 1px;"><tbody><tr><td colspan="2" height="24"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td height="24" valign="middle" style="word-break:break-all;padding:8px 8px 6px 14px;"><span class="sub_title $subjectClassName$">$subject$</span></td></tr></tbody></table></td></tr>$@$if($sendAddr$)$@$<tr><td style="padding-left:14px;"><span class="addrtitle">\u53D1\u4EF6\u4EBA\uFF1A</span>$@$if($sendName$)$@$<b class="grn">$sendName$</b>&nbsp;$@$else$@$$sendAddr$$@$endif$@$<span class="tcolor">&lt;$sendAddr$&gt;</span></td><td width="1%" nowrap="" style="padding-right:12px;"></td></tr>$@$endif$@$<tr><td colspan="2"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="word-break:break-all;padding:2px 12px 0 14px;line-height:19px;"><span class="addrtitle">\u65F6\u3000\u95F4\uFF1A</span><span>$sendTime$</span><span></span></td></tr>$@$if($sender_to$&&$sender_to.length$)$@$<tr><td style="padding:2px 12px 0 14px;line-height:19px;"><span class="addrtitle" style="position:absolute;">$@$if($isSeparatedCopy$)$@$\u5206\u9001\u7ED9\uFF1A$@$else$@$\u6536\u4EF6\u4EBA\uFF1A$@$endif$@$</span><div style="padding-left:48px;font-size:12px;overflow:hidden;zoom:1;">$@$for($sender_to$)$@$<span style="white-space:nowrap;line-heihgt:18px;height:18px;float:left;">$nick$&nbsp;<span class="tcolor">&lt;$addr$&gt;</span>$@$if(!$bEndItem$)$@$;&nbsp;$@$endif$@$</span>$@$endfor$@$</div></td></tr>$@$else if($sender_group$&&$sender_group.length$)$@$<tr><td style="padding:2px 12px 0 14px;line-height:19px;"><span class="addrtitle" style="position:absolute;">QQ \u7FA4\uFF1A</span><div style="padding-left:48px;font-size:12px;overflow:hidden;zoom:1;">$@$for($sender_group$)$@$<span style="white-space:nowrap;line-heihgt:18px;height:18px;float:left;">$nick$&nbsp;<span class="tcolor">&lt;$addr$&gt;</span>$@$if(!$bEndItem$)$@$;&nbsp;$@$endif$@$</span>$@$endfor$@$</div></td></tr>$@$endif$@$$@$if($sender_cc$&&$sender_cc.length$)$@$<tr><td style="padding:2px 12px 0 14px;line-height:19px;"><span class="addrtitle" style="position:absolute;">\u6284\u3000\u9001\uFF1A</span><div style="padding-left:48px;font-size:12px;overflow:hidden;zoom:1;">$@$for($sender_cc$)$@$<span style="white-space:nowrap;line-heihgt:18px;height:18px;float:left;">$nick$&nbsp;<span class="tcolor">&lt;$addr$&gt;</span>$@$if(!$bEndItem$)$@$;&nbsp;$@$endif$@$</span>$@$endfor$@$</div></td></tr>$@$endif$@$$@$if($attachments$&&$attachments.length$)$@$<tr><td style="padding:2px 12px 0 14px;line-height:19px;"><span class="addrtitle" style="position:absolute;">\u9644\u3000\u4EF6\uFF1A</span><div style="padding-left:48px;font-size:12px;overflow:hidden;zoom:1;">$@$for($attachments$)$@$<span style="white-space:nowrap;line-heihgt:18px;height:18px;float:left;"><img src="$icon$" style="position: relative;top:2px;" />$filename$$@$if(!$bEndItem$)$@$<span class="tcolor">;&nbsp;</span>$@$endif$@$</span>$@$endfor$@$</div></td></tr>$@$endif$@$<tr><td style="padding:2px 12px 0 14px;line-height:19px;"></td></tr></tbody></table><div style="height:8px;overflow:hidden"><div></div></div></td></tr></tbody></table><!-- <div class="qmbox" style="padding: 15px; overflow: visible; font-size: 14px; height: auto; min-height: 250px; line-height: 1.7;">$content$</div> -->']).replace(_oTop.extend({'sendTime':_oTop.formatDate(new Date(),'$YY$\u5E74$MM$\u6708$DD$\u65E5 $hh$:$mm$'),'subject':_oTop.subAsiiStr(_oTop.htmlEncode(_oSubject&&_oSubject.value||'(\u65E0\u4E3B\u9898)'),140,'...'),'sendName':_oTop.htmlEncode(_oSendName&&_oSendName.value||'')||_oTop.getUserInfo('alias'),'sendAddr':_oTop.htmlEncode(_oSendAddr&&_oSendAddr.value||'')||_oTop.getUserInfo('addr'),'subjectClassName':_oCompose.S('subject')&&_oCompose.S('subject').className,'attachments':_oFileListArr,'isSeparatedCopy':_bSeparatedCopy},_oSender));
return {header:_sHTML,content:_sContent};
},_setOtherComposeOptionEvent:function(){
var _oCompose=this;
var _oTop=getTop();
var _oBtn=_oCompose.S("otherComposeOptionBtn"),_oCntr=_oCompose.S("otherComposeOptionCntr");
_oTop.addEvent(_oBtn,"click",function(){
var _bShow=_oTop.isShow(_oCntr);
_oTop.show(_oCntr,!_bShow);
_oBtn.getElementsByTagName("img")[0].className="arrow"+(!_bShow?"up":"down");
_oCompose.getPageEditor().resizeEditor();
_oCntr.scrollIntoView();
var _oDomBody=getTop().document.body;
var _oDomHtml=getTop().document.documentElement;
_oDomHtml.scrollTop=_oDomHtml.scrollLeft=_oDomBody.scrollTop=_oDomBody.scrollLeft=0;
return;
_oTop.qmAnimation[_bShow?"fold":"expand"](_oCntr,{durlimit:10,type:"wait",speed:"fast",onready:function(){
return {from:_oCntr.clientHeight||0};
},onaction:function(){
_oCompose.getPageEditor().resizeEditor();
},oncomplete:function(){
_oTop.show(_oCntr,!_bShow);
_oBtn.getElementsByTagName("img")[0].className="arrow"+(!_bShow?"up":"down");
_oCompose.getPageEditor().resizeEditor();
}});
});
},setDefSign:function(_asSignValue){
var _oTop=getTop(),_oSelectTmpl=_oTop.TE(['<div class="left" style="cursor:pointer;">','\u7B7E\u540D\uFF1A$@$if($sItemValue$)$@$$sItemValue$$@$else$@$\u4E0D\u4F7F\u7528$@$endif$@$<span class="addrtitle" style="font-family: arial,sans-serif; padding-left:4px; font-size:9px; position:relative; top:-1px;" >\u25BC</span>&nbsp;','</div>','<span class="left addrtitle" >&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>']);
return _oSelectTmpl.replace({sItemValue:_asSignValue});
},_setMultiSignatureSelect:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
try{
var _oDatas=_oTop.goUserInfo.get('RealAllSignature');
}
catch(_oError)
{
return _oWin.setTimeout(function(){
_oCompose._setMultiSignatureSelect();
},500);
}
if(!_oDatas)
{
return;
}
var _oContainer=_oCompose.S("signSelContainer");
if(_oContainer)
{
var _oMenuItemTmpl=_oTop.TE(['<div style="$@$if($bNewStyle$)$@$margin-left:-18px;$@$endif$@$padding:0 0 0 12px;">','$@$if($sItemValue$)$@$$sItemValue$$@$else$@$\u7B7E\u540D1$@$endif$@$&nbsp;&nbsp;&nbsp;&nbsp;','</div>']),_sSepLineTmpl='<div style="width:100%;height:0;overflow:hidden;margin-left:-16px;padding:5px 26px 0 0;border-bottom:1px solid #E6E9ED;">&nbsp;</div>',_nInitIdx=0;
function _buildMenuItems()
{
var _oMenuItems=[{sId:"-1",sItemValue:'<div style="padding:0 12px">\u4E0D\u4F7F\u7528</div>'}],_sInitSignId=_oCompose._getEditorSignId("sign"),_oMenuDatas=_oTop.goUserInfo.get('RealAllSignature');
_nMenuHeight=21;
_oMenuItems.push({sId:"border",nHeight:11,sItemValue:_sSepLineTmpl,bDisSelect:true});
_nMenuHeight+=11;
for(var _sId in _oMenuDatas)
{
var _oData=_oMenuDatas[_sId],_sTmpl=_oMenuItemTmpl.replace({sItemValue:_oData[1],bNewStyle:(_sId>199&&_sId<300)?true:false});
if(_sId>=0&&(_sId<100||(_sId>199&&_sId<300)))
{
_oMenuItems.push({sId:_sId,sItemValue:_sTmpl});
_nMenuHeight+=21;
}
if(_sInitSignId==_sId)
{
_nInitIdx=_oMenuItems.length-1;
}
}
if(_oMenuItems.length<=2)
{
return false;
}
_nMenuHeight+=21;
return {oitems:_oMenuItems,nheight:_nMenuHeight,selectidx:_nInitIdx};
}
if(!_buildMenuItems())
{
return;
}
_oTop.addEvent(_oContainer,"click",function(){
var _oPos=_oTop.calcPos(_oContainer),_oMenu=_buildMenuItems(),_oDatas=_oTop.goUserInfo.get('RealAllSignature');
new (_oTop.QMMenu)({oEmbedWin:_oWin,sId:"signatureMenu",nX:_oPos[3]-1,nY:_oPos[2]-_oMenu.nheight-8,nItemHeight:21,bAnimation:false,oItems:_oMenu.oitems,onitemclick:function(_asId,_aoItem){
_oCompose.S("signtype")&&(_oCompose.S("signtype").value=(_asId!="newsign")?_asId:"");
if(_oDatas[_asId])
{
_oCompose.setSignature("sign",_asId,true);
_oContainer.innerHTML=_oCompose.setDefSign(_oDatas[_asId][1]);
}
else if(_asId==-1)
{
_oCompose.setSignature("sign",-1,true);
_oContainer.innerHTML=_oCompose.setDefSign("\u4E0D\u4F7F\u7528");
}
else if(_asId=="newsign")
{
var _sUrl=_oTop.T("/cgi-bin/setting1?fun=list&edittype=$edittype$&t=signature_new&sid=$sid$&signid=$signid$").replace({edittype:"addsign",sid:_oTop.getSid(),signid:-1});
new _oTop.QMDialog({sId:"editSignature_qqmail",sUrl:_sUrl,sTitle:"\u6DFB\u52A0\u4E2A\u6027\u7B7E\u540D",nWidth:604,nHeight:444});
}
}});
});
var _sSignId=_oCompose._getEditorSignId("sign");
if(_sSignId==-1)
{
_oContainer.innerHTML=_oCompose.setDefSign("\u4E0D\u4F7F\u7528");
}
else if(_oDatas[_sSignId])
{
_oContainer.innerHTML=_oCompose.setDefSign(_oDatas[_sSignId][1]);
}
}
},_getEditorSignId:function(_asType){
var _oCompose=this;
var _oEditor=_oCompose.getPageEditor();
if(!_oEditor)
{
return -1;
}
var _tagObj=_oEditor.getContentTags(_asType)[0];
if(!_tagObj)
{
return -1;
}
return _tagObj.getAttribute("signid");
},_setEditorSignValue:function(_asType,_asValue,_asId,_abIsFocus){
var _oCompose=this;
var _oEditor=_oCompose.getPageEditor();
if(!_oEditor)
{
return;
}
var _oTagInfo={};
function _syncTagInfo(_asType)
{
return _oTagInfo[_asType]=_oEditor.getContentTags(_asType)[0];
}
function _insertTag(_asType,_aObj,_asPos)
{
if(!_oEditor)
{
return;
}
var _oParentNode=_aObj.parentNode;
if(_oParentNode&&_oParentNode.tagName=="DIV"&&_oParentNode.firstChild==_aObj)
{
_aObj=_oParentNode;
}
getTop().insertHTML(_aObj,_asPos,getTop().T('$breakline$<div><$type$></$type$></div>').replace({breakline:getTop().QMEditor.getBreakLine(1,{family:getTop().goUserInfo.get("DEF_FONT_FAMILY"),size:getTop().goUserInfo.get("DEF_FONT_SIZE"),color:getTop().goUserInfo.get("DEF_FONT_COLOR")}),type:_asType}));
_syncTagInfo(_asType);
}
_syncTagInfo("sign");
_syncTagInfo("includetail");
if(!_asValue&&!_oTagInfo[_asType])
{
return;
}
if(!_oTagInfo.sign)
{
var _oInclude=_oEditor.getContentTags("includetail")[0];
_insertTag("sign",_oInclude||_oEditor.getContentObj("QQMAILSTATIONERY")||_oEditor.getContentTags("body")[0],"beforeEnd");
}
var _oTag=_oTagInfo[_asType];
_oTag.innerHTML=_asValue;
_oTag.setAttribute("signid",_asId);
_oTag.setAttribute("nreadytime",_oEditor.getReadyTimeStamp());
if(_asType=="sign")
{
_oCompose._setMultiSignatureSelect();
_abIsFocus&&_oCompose.focusPageEditor(0);
}
},setSignature:function(_asType,_avParam,_abIsFocus){
var _oCompose=this;
var _oWin=_oCompose.getWin();
if(_avParam==-1)
{
return _oCompose._setEditorSignValue(_asType,"",-1);
}
function _recallSelfDelay()
{
_oWin.setTimeout(function(){
_oCompose.setSignature(_asType,_avParam);
},200);
}
var _sValue="";
try{
switch(_asType)
{case "sign":
var _oSign=getTop().goUserInfo.get('RealAllSignature')[_avParam];
if(_oSign&&(parseInt(_avParam)<100||(parseInt(_avParam)>199&&parseInt(_avParam)<300)))
{
_sValue=getTop().getSignatureHeader()+_oSign[0];
if(!_oWin._bLinkedInSign&&_oSign[1]=="LinkedIn\u9886\u82F1")
{
var _oTop=getTop(),_sEmail=_oTop.getUin()+"@qq.com",_oLinkedIn=_oTop.bindLinkedInAccount;
_oWin._bLinkedInSign=true;
_oTop.QMAjax.send("/cgi-bin/bind?sid="+_oTop.getSid()+"&t=linkedin_profile&fun=getlinkedintoken&useremailaddr="+_sEmail,{method:"GET",onload:function(_abIsOk,_asReturn){
var _oReturn=_oTop.evalValue(_asReturn),_bUseLinkedIn=_oReturn.bindlinkedin=="1"&&_oReturn.linkedinoverdue=="0",_sLinkedInAccessToken=_oReturn.access_token||"";
if(_bUseLinkedIn)
{
_oLinkedIn.getLinkedInProfile(_sLinkedInAccessToken,_sEmail,function(_abIsOk,_aoProfile){
if(_abIsOk)
{
var _bContentEdited=_oCompose._isContentEdited();
_sValue=_oTop.getSignatureHeader()+_oLinkedIn.getLinkedInSignatureHTML(_aoProfile);
_oCompose._setEditorSignValue(_asType,_sValue,_avParam,_abIsFocus);
if(!_bContentEdited&&_oCompose.getPageEditor())
{
_oCompose._oLoadValueCache[4]=_oCompose.getPageEditor().getContent();
}
_oLinkedIn.updateLinkedInProfile(_sLinkedInAccessToken,_sEmail,_aoProfile);
_oLinkedIn.operateLinkedInSignature(_aoProfile,"mdfsign",_avParam);
}
});
}
}});
}
}
break;
default:
return;
}
}
catch(_oError)
{
return _recallSelfDelay();
}
_oCompose._setEditorSignValue(_asType,_sValue,_avParam,_abIsFocus);
},_splashToCtrl:function(_avObj,_anTimes){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oCtrlObj=_avObj.style?_avObj:_oCompose.S(_avObj),_nTimes=0,_nMaxTimes=isNaN(_anTimes)?6:_anTimes;
(function(){
_oCtrlObj.style.backgroundColor=(_nTimes++%2==0)?"#f9f2b3":"#fff";
if(_nTimes<_nMaxTimes)
{
_oWin.setTimeout(arguments.callee,100);
}
})();
},doFtnUploaded:function(){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oTop=getTop();
new _oTop.QMDialog({sId:"ftnfinished",sTitle:"\u6B63\u5728\u81EA\u52A8\u53D1\u9001",bClose:true,sBodyHtml:['<div class="dialog_feedback" style="width:400px;">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','\u8D85\u5927\u9644\u4EF6\u4E0A\u4F20\u5B8C\u6BD5\uFF0C\u5373\u5C06\u4E8E <span id="countsecond" class="red">10</span> \u79D2\u540E\u81EA\u52A8\u53D1\u9001\u672C\u90AE\u4EF6\u3002<br />\u6B64\u524D\u60A8\u53EF\u4EE5\u53D6\u6D88\u81EA\u52A8\u53D1\u9001\uFF0C\u7EE7\u7EED\u7F16\u8F91\u90AE\u4EF6\u3002','</div>','</div>','<div class="dialog_operate">','<input class="wd4 btn" type="button" id="confirm" value="\u53D6\u6D88\u81EA\u52A8\u53D1\u9001">','<div class="clr"></div>','</div>'].join(''),onload:function(){
var _oSelf=this;
var _nCount=10;
var _nInterval=_oWin.setInterval(function(){
_oSelf.S("countsecond")&&(_oSelf.S("countsecond").innerHTML=_nCount--);
},1000);
var _nTimeId=_oWin.setTimeout(function(){
_oSelf.S("countsecond")&&_oTop.fireMouseEvent(_oCompose.SN("sendbtn")[0],"click");
_oWin.clearInterval(_nInterval);
_oSelf.close();
},10000);
_oTop.addEvent(_oSelf.S("confirm"),"click",function(){
_oWin.clearTimeout(_nTimeId);
_oWin.clearInterval(_nInterval);
_oSelf.close();
});
}});
},_editorFocus:function(){
var _oCompose=this;
return function(_aoEvent){
_oCompose._bEditorEverFocus=true;
};
},_editorBlur:function(){
var _oCompose=this;
return function(_aoEvent){
if(_oCompose.bNeedIdentifyLocation)
{
locationIdentify.call(_oCompose,_oCompose.getPageEditor().getEditBody(),_fLocationIdentifyOptions(_oCompose));
}
};
},_getEditorFocusStatus:function(){
return {editorEverFocus:this._bEditorEverFocus};
},createFromInput_:function(_asName,_asValue,_aoContainer){
var _oCompose=this;
var _oWin=_oCompose.getWin();
var _oInput=_oTop.finds('[name="'+_asName+'"]',_oCompose._getSubmitForm())[0];
if(!_oInput)
{
var _oInput=_oWin.document.createElement('input');
_oInput.type='hidden';
_oInput.name=_asName;
_oInput.style.display='none';
(_aoContainer||_oCompose._getSubmitForm()).appendChild(_oInput);
}
_oInput.value=_asValue;
},_isBusinessReume:function(){
if(this._msResumeType===undefined)
{
if(getTop().getUrlParams(this.getWin().location).loc=='readtemplate,resume_center,,21')
{
this._msResumeType='top';
}
else if(this.getPageConfig().hasResume)
{
this._msResumeType='config';
}
else{
try{
if(getTop().opener&&getTop().opener.goReloadInfoOpener&&getTop().opener.goReloadInfoOpener.hasResume)
{
this._msResumeType='opener';
}
}
catch(e)
{
}
if(!this._msResumeType)
{
this._msResumeType=false;
}
}
}
return this._msResumeType;
},_getResumeData:function(){
if(this._isBusinessReume()=='top')
{
return getTop().getGlobalVarValue('resume');
}
else if(this._isBusinessReume()=='config')
{
var _oPageConfig=this.getPageConfig();
return {oResumeWorks:_oPageConfig.resumeworks,hasResume:_oPageConfig.hasResume,sSender:_oPageConfig.sResumeSender};
}
return {};
},getResumeSender_:function(){
return this._getResumeData().sSender;
},initResumeData:function(_aoResumeData){
var _oTop=getTop();
var _oCompose=this;
var _oAttach=_oCompose.moAttach;
var _oEditor=_oCompose.getPageEditor();
var _oResumeData=_aoResumeData||_oCompose._getResumeData();
_oTop.removeSelf(_oCompose.S('ResumeWorksList'));
if(_oResumeData.oResumeWorks)
{
var _bHasResumeWorks=false;
_oTop.E(_oResumeData.oResumeWorks,function(_aoBigattach){
_aoBigattach.exptime=-1;
_bHasResumeWorks=true;
});
if(_bHasResumeWorks)
{
_oCompose._getResumeWorksContainer();
_oCompose._addExistBigAttach(_oResumeData.oResumeWorks,{sMode:'resume_works'});
}
}
_oTop.E(_oAttach.oFileUploadMgr.getUploadList(),function(_aoFile){
if(_aoFile.get('bResumeAttach'))
{
_oAttach.delAttach('Uploader'+_aoFile.get('sId'));
}
});
if(_oResumeData.oResumeAttach)
{
_oTop.waitFor(function(){
return _oAttach.getAttfldUpload();
},function(_abOK){
if(_abOK)
{
for(var _sResumeType in _oResumeData.oResumeAttach)
{
_oAttach.addOtherUploaderFileCell({get:function(){
return _oResumeData.oResumeAttach[_sResumeType];
}});
}
}
});
}
if(_oResumeData.sSubject)
{
_oCompose.S("subject").value=_oResumeData.sSubject;
}
return false;
},_getResumeWorksContainer:function(){
var _oCompose=this;
var _oTop=getTop();
var _oNode=_oCompose.S('ResumeWorks');
if(!_oNode)
{
var _oContainer=_oCompose.S('exist_resume_attach')||_oCompose.S('resume_attach');
var _sWhere='afterEnd';
if(!_oContainer)
{
_oContainer=_oCompose.S('attachContainer');
_sWhere='afterBegin';
}
_oTop.insertHTML(_oContainer,_sWhere,['<div id="ResumeWorksList">','<div class="attsep">','<a class="composeResume_collectTitle" href="javascript:;" id="toggleResumeWorks">','<input type="button" class="ico_att ico_att_ResumeCollect" style="margin:0 3px 0 0!important;margin:0 3px 2px 0;" />','<span>\u4F5C\u54C1\u96C6</span>','<span id="resume_works_arrow" class="arrowdown" style="display: inline-block; _height: 13px; _overflow: hidden;"></span>','</a>','<a href="javascript:;" id="delAllResumeWorks" style="margin-left: 8px;">\u5220\u9664\u5168\u90E8\u4F5C\u54C1</a>','</div>','<div id="ResumeWorks" class="composeResume_worksList" style="display:none"></div>','</div>'].join(''));
_oNode=_oCompose.S('ResumeWorks');
_oTop.addEvent(_oCompose.S('toggleResumeWorks'),'click',function(_aoEvent){
_oTop.preventDefault(_aoEvent);
var _oArrowNode=_oCompose.S('resume_works_arrow');
if(_oTop.isShow(_oNode))
{
_oTop.show(_oNode,false);
_oArrowNode.className='arrowdown';
}
else{
_oTop.show(_oNode,true);
_oArrowNode.className='arrowup';
}
_oCompose.getPageEditor().resizeEditor();
return false;
});
_oTop.addEvent(_oCompose.S('delAllResumeWorks'),'click',function(_aoEvent){
_oTop.preventDefault(_aoEvent);
_oTop.confirmBox({title:'\u5220\u9664\u786E\u8BA4',msg:'\u5220\u9664\u5168\u90E8\u4F5C\u54C1\u5C06\u5220\u9664\u6240\u6709\u4F5C\u54C1\u9644\u4EF6\uFF0C\u786E\u8BA4\u5220\u9664\u5417\uFF1F',onreturn:function(_abOK){
_abOK&&_oTop.removeSelf(_oCompose.S('ResumeWorksList'));
}});
return false;
});
}
return _oNode;
},fClearLocationTips:function(_asStr){
var _oTop=getTop();
var _oActiveDoc;
try{
_oActiveDoc=((_oTop.getActionWin&&_oTop.getActionWin()||_oTop).document);
}
catch(e)
{
_oActiveDoc=document;
}
;var _oDiv=_oActiveDoc.createElement('div');
var _oTip,_sResult;
_oDiv.style.display='none';
_oActiveDoc.body.appendChild(_oDiv);
_oDiv.innerHTML=_asStr;
_oTip=_oTop.finds('#showcalpanel',_oDiv);
_oTip&&_oTip[0]&&_oTop.removeSelf(_oTip[0]);
_sResult=_oDiv.innerHTML;
return _sResult;
},fLocationStyleFilter:function(_asStr){
var _oTop=getTop();
var _oActiveDoc;
try{
_oActiveDoc=((_oTop.getActionWin&&_oTop.getActionWin()||_oTop).document);
}
catch(e)
{
_oActiveDoc=document;
}
;var _oDiv=_oActiveDoc.createElement('div');
var _oNodes,_sResult;
_oDiv.style.display='none';
_oActiveDoc.body.appendChild(_oDiv);
_oDiv.innerHTML=_asStr;
_oNodes=_oTop.finds('.js_location_string',_oDiv);
for(var _nIdx=_oNodes.length-1;_nIdx>-1;--_nIdx)
{
_oTop.replaceHTML(_oNodes[_nIdx],_oNodes[_nIdx].innerHTML);
}
_sResult=_oDiv.innerHTML;
_oTop.removeSelf(_oDiv);
return _oDiv.innerHTML;
}};
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
return initComposeForPage;
})();
function compose_js()
{
}
