(function(a,b){
a.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_MO:"\u63D2\u5165\u8868\u60C5",FUN_MO_LABEL:"\u8868\u60C5"});
a.extend(QMEditor.CONST.getTemplate(),{MENU_MO:a.T(['<div class="qmEditorMenuPanel" unselectable="on" ><span>$loading$</span></div>'])});
QMEditor.FUNCLIB.Mo=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setBindEditor(c.editor);
var e=this,d=e.getBindEditor().getLanguage();
e.setId("Mo");
e.setFuncConfig((c.oParamSet.funcConfig||{})[e._msId]||{});
e.setUiConfig({arrowPos:e.getFuncConfig().arrowPos||e.getFuncConfig().width/2||224,title:d.FUN_MO,label:d.FUN_MO_LABEL});
},QMEditor.FUNCLIB.MENU);
QMEditor.FUNCLIB.Mo.prototype.getMenuUI=function(c){
var d=c.nWidth=this.getFuncConfig().width||448;
return a.T('<div id="mo_cntr" style="width:$width$px"><div class="qmEditorToolLoading"><img align="absmiddle" src="$images_path$webp/ico_loading21e9c5d.gif">&nbsp;&nbsp;\u52A0\u8F7D\u4E2D</div></div>').replace({width:d,images_path:a.getPath("image",true)});
};
QMEditor.FUNCLIB.Mo.prototype.initMenu=function(c){
if(this.getBindEditor().getEditorCustomVar('FullScreenToolbar.bUseFullEdtior'))
{
getTop().LogKV({sValue:'editor|toolbar|fullscreen|mo'});
}
if(!window.QMMo)
{
var d=this;
a.loadJsFile("$js_path$webp//com/kits/qmeditor/base/release/plus/mo24e6ae.js",true,document,function(){
if(!window.QMMo)
{
c.S("mo_cntr").innerHTML="<div>\u52A0\u8F7D\u5931\u8D25</div>";
}
else{
d._initMenuForMo(c);
}
});
}
else{
this._initMenuForMo(c);
}
};
QMEditor.FUNCLIB.Mo.prototype._initMenuForMo=function(c){
var f=this,g="stat=nothing&locval=editor,plus,mo,1",e=f.getFuncConfig(),d=a.ossLog;
new QMMo().setup({container:c.S("mo_cntr"),maxWidth:e.width-10,maxHeight:e.height});
a.addEvent(c.S("mo_cntr"),"click",function(h){
var j=a.getEventTarget(h).getAttribute("param");
if(j)
{
f.hideMenu(true);
f.getBindEditor().insertImage(j);
d&&d("delay","all",g+(j.match(/mo\/DEFAULT2/gi)?"0":"1"));
}
});
d&&d("delay","all",g);
};
QMEditor.setupFunc();
})(QMEditorAdapter);
(function(A,_aoUndefined){
A.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_NETDISK:"\u63D2\u5165\u7F51\u76D8\u94FE\u63A5",FUN_NETDISK_LABEL:"\u7F51\u76D8",FUN_PHOTO:"\u4E0A\u4F20\u7167\u7247",FUN_PHOTO_LABEL:"\u7167\u7247",FUN_SCREENSNAP:"\u6355\u83B7\u5C4F\u5E55",FUN_SCREENSNAP_SETUP_TIP:"\u8BF7\u70B9\u51FB\u5B89\u88C5\u622A\u5C4F"+A.QMAXInfo.getTitle()+"\r\u5B89\u88C5\u540E\u60A8\u5C31\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u622A\u5C4F\uFF0C\u5E76\u53D1\u9001\n\u7ED9\u60A8\u7684\u597D\u53CB\u4E00\u8D77\u4EA4\u6D41\u5206\u4EAB\u3002",FUN_SCREENSNAP_LABEL:"\u622A\u5C4F",FUN_MUSIC:"\u63D2\u5165\u80CC\u666F\u97F3\u4E50",FUN_MUSIC_LABEL:"\u97F3\u4E50",FUN_MUSIC_LABEL_ADDED:"\u5DF2\u6DFB\u52A0",COMM_CONFIRM:"\u786E\u5B9A",COMM_CANCEL:"\u53D6\u6D88",COMM_HELP:"\u5E2E\u52A9",PO_LOCAL_PHOTO:"\u672C\u5730\u4E0A\u4F20",PO_LOCAL_DESC:"( \u8BF7\u70B9\u51FB\u201C"+(A.gbIsIE||A.gbIsFF||A.gbIsQBWebKit?"\u6D4F\u89C8":(A.gbIsOpera?"\u9009\u62E9":"\u9009\u62E9\u6587\u4EF6"))+"\u201D\uFF0C\u5728\u60A8\u7535\u8111\u4E2D\u9009\u62E9\u60A8\u8981\u4E0A\u4F20\u7684\u7167\u7247\u3002)",CLIP_LOCAL_DESC:"( \u8BF7\u590D\u5236\u4EE5\u4E0B\u8DEF\u5F84\uFF0C\u70B9\u51FB\u201C"+(A.gbIsIE||A.gbIsFF||A.gbIsQBWebKit?"\u6D4F\u89C8":(A.gbIsOpera?"\u9009\u62E9":"\u9009\u62E9\u6587\u4EF6"))+"\u201D\uFF0C\u5C06\u8DEF\u5F84\u7C98\u8D34\u5230\u6587\u4EF6\u540D\u4E0A\u3002)",PO_LOCAL_INPUT:"\u9009\u62E9\u7167\u7247\uFF1A",PO_LOCAL_OK:"\u7ACB\u5373\u4E0A\u4F20",PO_NET_PHOTO:"\u7F51\u7EDC\u7167\u7247",PO_NET_DESC:"( \u8BF7\u5728\u4E0B\u9762\u8F93\u5165\u6846\u91CC\u9762\u586B\u4E0A\u5F85\u63D2\u5165\u56FE\u7247\u7684\u94FE\u63A5\u8DEF\u5F84\u3002)",PO_NET_INPUT:"\u7167\u7247\u8DEF\u5F84\uFF1A",PO_NET_OK:"\u7ACB\u5373\u63D2\u5165",PO_QQALBUM_DESC:"\u4ECEQQ\u76F8\u518C\u9009\u53D6",PO_ATTACH_PHOTO:"\u4ECE\u6536\u85CF\u7684\u56FE\u7247\u4E2D\u9009\u53D6",PO_DLG_TITLE:"\u4E0A\u4F20\u56FE\u7247",PO_DLG_UPLOADING:"\u56FE\u7247\u4E0A\u4F20\u4E2D...",PO_DLG_UPLOADFAIL:"\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\u4E86\uFF01",PO_DLG_UPLOADFAIL_INFO:"\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF1A\u60A8\u4E0A\u4F20\u7684\u56FE\u7247\u5927\u5C0F($curSize$)\u8D85\u8FC7\u4E86\u6700\u5927\u9650\u5236($allowSize$)\u3002",PO_DLG_INSERTING:"\u56FE\u7247\u52A0\u8F7D\u4E2D...",PO_DLG_INSERTINGFAIL:"\u56FE\u7247\u52A0\u8F7D\u4E2D\u5931\u8D25\u4E86\uFF01",MC_LOADING:"\u97F3\u4E50\u52A0\u8F7D\u4E2D...",MC_REPLACE_TIP:"\u60A8\u5DF2\u7ECF\u6DFB\u52A0\u4E86\u80CC\u666F\u97F3\u4E50\uFF0C\u662F\u5426\u9700\u8981\u66FF\u6362\u4E3A\u65B0\u7684\uFF1F",SCREENSNAP_FAIL:"\u622A\u5C4F\u4E0D\u6210\u529F\uFF01",SCREENSNAP_SAVEFAIL:"\u4FDD\u5B58\u622A\u5C4F\u56FE\u7247\u4E0D\u6210\u529F\uFF01",UPLOADER_VERSION_LOW:"\u4E0A\u4F20"+A.QMAXInfo.getTitle()+"\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\uFF01",FUN_MAP_LABEL:"\u5730\u56FE",FUN_MORE_LABEL:"\u66F4\u591A"});
A.extend(QMEditor.CONST.getTemplate(),{MENU_PHOTO:A.T(['<div style="width:330px;height:140px;" hideFocus="true"></div>']),MENU_CLIPIMG:A.T(['<div style="width:360px;height:160px;" hideFocus="true"></div>']),_MENU_CLIPIMG_BODY:A.T(['<body unselectable="on"></body>']),_MENU_CLIPIMG_BODYHTML:A.T(['<table cellspacing="0" cellpadding="0" border="0" width="100%" unselectable="on" ><tr>','<td class="QMEditorTabEmptyLeft" unselectable="on" nowrap >&nbsp;</td>','<td style="$uploadDisp$" unselectable="on" nowrap>','<div param="localPhoto" class="QMEditorTabSel" unselectable="on">$langLocalPhoto$</div>','</td>','<td class="QMEditorTabEmptyRight" unselectable="on" nowrap >&nbsp;</td>','</tr></table>','<div class="QMEditorPoPanel" unselectable1="on" style="$uploadDisp$" >','<iframe name="QMEditorPhotoIframe$iframeId$"  src="javascript:\'\'" style="display:none;" onload="if(window.QMEditorPhotoLoaded)QMEditorPhotoLoaded(this);"  ></iframe>','<form action="$actionSrc$" enctype="multipart/form-data" method="post" target="QMEditorPhotoIframe$iframeId$" >','<div class="QMEditorPoInputLabel" unselectable="on">$langLocalInput$&nbsp;','<input type="file" name="UploadFile" onkeydown="return false;" />','<input type="hidden" name="sid"  value="$sid$" />','<input type="hidden" name="fun" value="add" />','<input type="hidden" name="mode" value="download" />','<input type="hidden" name="widthlimit" value="$widthlimit$" />','<input type="hidden" name="heightlimit" value="$heightlimit$" />','<input type="hidden" name="sizelimit" value="$sizelimit$" />','</div>','<div style="background-color:#F6F4CE; padding:5px 10px; border:1px solid #c2bf86;">','<div class="QMEditorPoDesc" unselectable="on" >$langLocalDesc$</div>','<div class="QMEditorPoDesc" >\u8DEF\u5F84:<input style="width:300px; border:0 none; background-color:#F6F4CE; padding:0 3px;" type="text" value="$clipimgpath$"/></div>','</div>','</form>','<div class="QMEditorPoButton" unselectable="on" >','<button class="qmEditorButton2" param="localok" >$langLocalOK$</button>&nbsp;','<button class="qmEditorButton1" param="cancel" >$langCancel$</button>','</div>','</div>']),DIALOG_UPLOADIMG:A.T(['<div style="padding:40px 0;font:normal 12px;text-align:center">','<div id="uploading">','<img src="$imgPath$ico_loading2.gif" width="32" height="32" align=absmiddle style="margin:0 4px 0 0" />$langUploading$','<span id="uploadProcess"></span>','</div>','<div id="uploadFail" style="height:32px;line-height:32px;display:none;" >','$langUploadFail$','</div>','</div>']),MENU_MUSIC:A.T(['<div class="qmEditorMenuPanel" unselectable="on" ><span>$loading$</span></div>']),PO_DLG_UPLOADING:A.TE(['\u6B63\u5728\u4E0A\u4F20','$@$if($cnt$ > 1)$@$','$idx$/$cnt$','$@$endif$@$','...'])});
QMEditor._ActiveX=function(_aoBindEditor){
this._moBindEditor=_aoBindEditor;
};
QMEditor._ActiveX._bind=function(_aoBindEditor){
if(!_aoBindEditor)
{
return null;
}
if(!_aoBindEditor._mUseActivex)
{
_aoBindEditor._mUseActivex=new QMEditor._ActiveX(_aoBindEditor);
}
return _aoBindEditor._mUseActivex;
};
QMEditor._ActiveX.prototype._modelDialog=function(_afOnCloseEvent){
var _oEditor=this._moBindEditor,_oTemplate=_oEditor.getTemplate(),_oLanguage=_oEditor.getLanguage();
new (A.QMDialog)({sId:"upload",sTitle:_oLanguage.PO_DLG_TITLE,sBodyHtml:_oTemplate.DIALOG_UPLOADIMG.replace({imgPath:A.getPath("image"),langUploading:_oLanguage.PO_DLG_UPLOADING,langUploadFail:_oLanguage.PO_DLG_UPLOADFAIL}),nWidth:400,bAnimation:false,onclose:function(){
_oEditor.loadLastRange();
A.callBack(_afOnCloseEvent);
}});
};
QMEditor._ActiveX.prototype._uploadOk=function(){
A.QMDialog("upload","close");
};
QMEditor._ActiveX.prototype._uploadFail=function(_aoParam){
var _oDialog=A.QMDialog("upload");
var _oUploadFailObj=_oDialog&&_oDialog.S("uploadFail");
if(!_oUploadFailObj)
{
return;
}
var _oLang=this._moBindEditor.getLanguage();
_oUploadFailObj.innerHTML=_aoParam?A.T(_oLang.PO_DLG_UPLOADFAIL_INFO).replace(_aoParam):_oLang.PO_DLG_UPLOADFAIL;
A.show(_oUploadFailObj,true);
if(_oDialog&&_oDialog.S("uploading"))
{
A.show(_oDialog.S("uploading"),false);
}
};
QMEditor._ActiveX.prototype._uploading=function(_asProcessVal){
var _oDialog=A.QMDialog("upload");
var _oUploadProcess=_oDialog&&_oDialog.S("uploadProcess");
if(_oUploadProcess)
{
_oUploadProcess.innerHTML=_asProcessVal;
if(_oDialog&&_oDialog.S("uploading"))
{
A.show(_oDialog.S("uploading"),true);
}
if(_oDialog&&_oDialog.S("uploadFail"))
{
A.show(_oDialog.S("uploadFail"),false);
}
}
};
QMEditor._ActiveX.prototype._screenSnap=function(_afOnCaptureFinishEvent){
var _oScreenSnapObj=this._getScreenSnapObj();
if(!_oScreenSnapObj)
{
return;
}
var _fEventCreater=function(_abIsOk){
return function(){
if(typeof (_afOnCaptureFinishEvent)=="function")
{
_afOnCaptureFinishEvent(_abIsOk);
}
_abIsOk&&A.ossLog("delay","all","stat=nothing&locval=editor,plus,screensnap,10");
};
};
_oScreenSnapObj.OnCaptureFinished=_fEventCreater(true);
_oScreenSnapObj.OnCaptureCanceled=_fEventCreater(false);
_oScreenSnapObj.DoCapture();
};
QMEditor._ActiveX.prototype._getScreenSnapObj=function(){
if(!this._moScreenSnapObj)
{
if(A.detectActiveX(0,1))
{
this._moScreenSnapObj=A.createActiveX(0);
}
}
return this._moScreenSnapObj;
};
QMEditor._ActiveX.prototype._hasScreenSnapImg=function(){
return this._msScreenImg;
};
QMEditor._ActiveX.prototype._clearScreenSnapImg=function(){
this._msScreenImg="";
};
QMEditor._ActiveX.prototype._isClipBoardImage=function(){
return this._getScreenSnapObj()&&this._getScreenSnapObj().IsClipBoardImage;
};
QMEditor._ActiveX.prototype._saveImg=function(_abIsWarn){
var _oLanguage=this._moBindEditor.getLanguage();
if(!this._getScreenSnapObj())
{
return false;
}
if(!this._isClipBoardImage())
{
if(_abIsWarn)
{
alert(_oLanguage.SCREENSNAP_FAIL);
}
return false;
}
this._msScreenImg=this._getScreenSnapObj().SaveClipBoardBmpToFile(1);
if(!this._msScreenImg)
{
if(_abIsWarn)
{
alert(_oLanguage.SCREENSNAP_SAVEFAIL);
}
return false;
}
return true;
};
QMEditor._ActiveX.prototype._uploadCustomImg=function(_abIsWarn,_afOnUploadFinishEvent){
return this._saveImg(_abIsWarn)&&this._startUploadCustomImg(null,_abIsWarn,_afOnUploadFinishEvent);
};
QMEditor._ActiveX.prototype._startUploadCustomImg=function(_aoFileCtrl,_abIsWarn,_afOnUploadFinishEvent){
var _oSelf=this,_oEditor=_oSelf._moBindEditor;
if(!A.detectActiveX(2,1))
{
if(_abIsWarn)
{
alert(_oEditor.getLanguage().UPLOADER_VERSION_LOW);
}
return false;
}
if(!_oSelf._msScreenImg&&!_aoFileCtrl)
{
return false;
}
if((!A.gbIsIE||A.gnIEVer!=6)&&_aoFileCtrl)
{
return false;
}
if(!_oSelf._moUploaderObj)
{
_oSelf._moUploaderObj=A.createActiveX(2);
}
var _oUploader=_oSelf._moUploaderObj,_bIsCallBack=false;
function _onCallBack(_abIsOk,_aoParam)
{
if(!_bIsCallBack)
{
_bIsCallBack=true;
_oUploader.StopUpload();
if(typeof (_afOnUploadFinishEvent)=="function")
{
_afOnUploadFinishEvent(_abIsOk?true:false,_aoParam);
}
}
}
;_oSelf._modelDialog(_onCallBack);
_oUploader.StopUpload();
_oUploader.ClearHeaders();
_oUploader.ClearFormItems();
_oUploader.URL=_oEditor.getPhotoActionSrc();
_oUploader.OnEvent=function(_aoObj,_aoEventId,_anP1,_anP2,_anP3){
_oSelf._onUploaderEvent(_aoObj,_aoEventId,_anP1,_anP2,_anP3,_onCallBack);
};
_oUploader.AddHeader("Cookie",document.cookie);
_oUploader.AddFormItem("fun",0,0,"add");
_oUploader.AddFormItem("sid",0,0,A.getSid());
_oUploader.AddFormItem("mode",0,0,"download");
_oUploader.AddFormItem("from",0,0,_aoFileCtrl?"":"snapscreen");
var _oConf=_oEditor.getPhotoConfig()||{};
_oUploader.AddFormItem("widthlimit",0,0,_oConf.widthlimit||0);
_oUploader.AddFormItem("heightlimit",0,0,_oConf.heightlimit||0);
_oUploader.AddFormItem("sizelimit",0,0,_oConf.sizelimit||0);
if(_aoFileCtrl)
{
_oUploader.AddFormItemObject(_aoFileCtrl);
}
else{
_oUploader.AddFormItem("UploadFile",1,4,_oSelf._msScreenImg);
}
if(getMainWin().getPageId&&(getMainWin().getPageId()==="note"))
{
_oUploader.AddFormItem("filetype",0,0,"pic");
_oUploader.AddFormItem("type",0,0,"upfile");
_oUploader.AddFormItem("business",0,0,"notebook");
_oUploader.AddFormItem("t",0,0,"uploadfile_snap");
_oUploader.AddFormItem("uin",0,0,getTop().getUin());
_oUploader.URL=location.protocol+"//"+location.hostname+"/cgi-bin/note_upload";
_oUploader.StartUpload();
return true;
}
else{
_oUploader.StartUpload();
return true;
}
};
QMEditor._ActiveX.prototype._onUploaderEvent=function(_aoObj,_aoEventId,_anP1,_anP2,_anP3,_afOnUploadFinishEvent){
switch(_aoEventId)
{case 1:
return _afOnUploadFinishEvent(false,{errCode:_anP1});
case 2:
this._uploading(parseInt(_anP1*90/_anP2)+"%");
return;
case 3:
debug(this._moUploaderObj,2);
if(this._moUploaderObj.ResponseCode!="200")
{
return _afOnUploadFinishEvent(false,{errCode:_anP1});
}
this._uploading("100%");
this._processResponse(this._moUploaderObj.Response,_afOnUploadFinishEvent);
}
};
QMEditor._ActiveX.prototype._processResponse=function(_asResponse,_afOnUploadFinishEvent){
var _sResponse=_asResponse||"",_nStart=_sResponse.indexOf('On_upload("'),_nEnd=_sResponse.indexOf('");',_nStart),_sRealResponse=(_nStart!=-1&&_nEnd!=-1)?_sResponse.substring(_nStart+11,_nEnd):"err";
if(_sRealResponse!="err")
{
return _afOnUploadFinishEvent(true,{imgUrl:_sRealResponse});
}
_nStart=_sResponse.indexOf('On_upload_Fail("');
_nEnd=_sResponse.indexOf('");',_nStart);
function _formatSize(_asValue)
{
_asValue=parseInt(_asValue);
return '<span style="color:red;" >'+(isNaN(_asValue)?"5M":(parseInt(100*parseInt(_asValue)/(1024*1024))/100))+"M</span>";
}
;if(_nStart!=-1&&_nEnd!=-1)
{
_sRealResponse=_sResponse.substring(_nStart+16,_nEnd).replace(new RegExp("\"","ig"),"").split(",");
return _afOnUploadFinishEvent(false,{curSize:_formatSize(_sRealResponse[0]),allowSize:_formatSize(_sRealResponse[1])});
}
return _afOnUploadFinishEvent(false);
};
QMEditor.FUNCLIB.MENUIMAGE=QMEditor.FUNCLIB.inheritFrom(function(){
this.setId("MENUIMAGE");
this._mbIsFireUploadEvent=true;
},QMEditor.FUNCLIB.MENU);
QMEditor.FUNCLIB.MENUIMAGE.prototype.insertImage=function(_asPicUrl){
this.getBindEditor().getCurrentEditor().insertImage(_asPicUrl);
};
QMEditor.FUNCLIB.MENUIMAGE.prototype._readyToUpload=function(){
this._mbIsFireUploadEvent=false;
};
QMEditor.FUNCLIB.MENUIMAGE.prototype._isReadyToUpload=function(){
return this._mbIsFireUploadEvent!=true;
};
QMEditor.FUNCLIB.MENUIMAGE.prototype._doUploadFinish=function(_abIsOk,_aoParam){
if(!this._mbIsFireUploadEvent)
{
this._mbIsFireUploadEvent=true;
var _oActiveX=QMEditor._ActiveX._bind(this.getBindEditor());
if(_abIsOk)
{
_oActiveX._uploadOk();
this.insertImage(_aoParam.imgUrl);
}
else{
_oActiveX._uploadFail(_aoParam);
}
}
};
var _fInsertImage=QMEditor.prototype.insertImage,_fCalcSize=function(_anSize,_aoWin){
var _nMaxSize=50*1024*1024,_oImgs=A.finds("img[filesize]",_aoWin),_nTotalSize=_anSize;
for(var i=0;i<_oImgs.length;i++)
{
_nTotalSize+=parseInt(_oImgs[i].getAttribute("filesize"));
}
return _nTotalSize<_nMaxSize;
};
QMEditor.prototype.insertImage=function(_asUrl,_afCallback,_aoMapObj){
var _oSelf=this,_sFileSizeExpression=_asUrl.match(/filesize=.*&/),_sFileSize=_sFileSizeExpression&&_sFileSizeExpression[0],_nFileSize=_sFileSize&&parseInt(_sFileSize.split('=')[1]);
if(!_fCalcSize(_nFileSize,_oSelf.getEditWin()))
{
A.showError("\u6DFB\u52A0\u7684\u7167\u7247\u603B\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC750M");
return;
}
_fInsertImage.call(_oSelf,_asUrl,function(_asUrl,_aoImg){
_nFileSize>0&&_aoImg&&_aoImg.setAttribute("filesize",_nFileSize);
typeof _afCallback=="function"&&_afCallback.apply(_oSelf,arguments);
},_aoMapObj);
};
QMEditor.FUNCLIB.Photo=QMEditor.FUNCLIB.inheritFrom(function(_aoParamSet){
if(!_aoParamSet)
{
return;
}
this.setBindEditor(_aoParamSet.editor);
var _oSelf=this,_oEditor=_oSelf.getBindEditor(),_oLang=_oEditor.getLanguage(),_oPhotoMethods=_oSelf._moPhotoMethods=[];
var _bIcon=_aoParamSet.uiType=='icon';
_oSelf._mbInitUpload=!_bIcon;
_oSelf.setId("Photo");
_oSelf.setFuncConfig((_aoParamSet.oParamSet.funcConfig||{})[_oSelf.getId()]||{});
if(_oSelf.getBindEditor().getPhotoActionSrc())
{
_oPhotoMethods.push({sId:"upload",sItemValue:_oLang.PO_LOCAL_PHOTO});
}
else{
_oSelf._mbInitUpload=false;
}
(_oSelf.getFuncConfig().url!==false)&&_oPhotoMethods.push({sId:"url",sItemValue:_oLang.PO_NET_PHOTO});
(_oSelf.getFuncConfig().album===true&&_oEditor.getEditorAreaWin().location.protocol=='http:')&&_oPhotoMethods.push({sId:"qzone",sItemValue:_oLang.PO_QQALBUM_DESC});
(_oSelf.getFuncConfig().attach===true)&&_oPhotoMethods.push({sId:"attach",sItemValue:_oLang.PO_ATTACH_PHOTO});
if(_oSelf.getFuncConfig().iPhoneUpload===true)
{
_oPhotoMethods.push({sId:"webapns",sItemValue:"\u4ECE\u624B\u673A\u76F8\u518C\u4E0A\u4F20<span class='ico_mobileapp'></span>"});
QMEditor.getTopWin().requestShowTip("QMEditorToolBarPlusArea",48,QMEditor.getTopWin().getMainWin());
}
this.setUiConfig({moreBtn:_bIcon?0:_oPhotoMethods.length>1,title:_oLang.FUN_PHOTO,label:_oLang.FUN_PHOTO_LABEL});
_aoParamSet.container.onmousedown=function(){
getTop().LogKV("compose|toolbar|entrance|photo");
};
},QMEditor.FUNCLIB.MENUIMAGE);
QMEditor.FUNCLIB.Photo.prototype.getMenuItems=function(_aoMenuCfg){
var _oSelf=this;
if(gbIsIE&&gnIEVer==6)
{
_aoMenuCfg.nWidth=150;
}
if(_aoMenuCfg)
{
if(_aoMenuCfg.sName=="more")
{
_aoMenuCfg.nWidth=getTop().getLocale()=="zh_CN"?150:170;
return _oSelf._moPhotoMethods.slice(1);
}
else if(!_aoMenuCfg.sName&&_oSelf.getUiType()=="text")
{
}
else if(!_aoMenuCfg.sName&&_oSelf.getUiType()=="icon")
{
if(_oSelf.getBindEditor().getEditorCustomVar('FullScreenToolbar.bUseFullEdtior'))
{
getTop().LogKV({sValue:'editor|toolbar|fullscreen|photo'});
}
return _oSelf._moPhotoMethods;
}
else{
return QMEditor.FUNCLIB.MENU.prototype.getMenuItems.call(this,_aoMenuCfg);
}
}
else if(!_oSelf._mbUseUploadBtn&&_oSelf._moPhotoMethods.length<2)
{
return QMEditor.FUNCLIB.MENU.prototype.getMenuItems.call(this,_aoMenuCfg);
}
else{
return _oSelf._moPhotoMethods;
}
};
QMEditor.FUNCLIB.Photo.prototype.getMenuUI=function(_aoMenuCfg){
var _oMenuCfg=_aoMenuCfg||{},_oSelf=this;
switch(_aoMenuCfg.sName)
{case "qzone":
_oMenuCfg.nWidth=364;
_oMenuCfg.nArrowPos=182;
return A.getRes('<div id="qzone" class="qzone_container" style="text-align:center;"><div style="text-align:center; margin:110px 0;"><img src="$images_path$webp/ico_loading21e9c5d.gif" align="absmiddle" />&nbsp;&nbsp;\u52A0\u8F7D\u4E2D</div></div>');
case "attach":
_oMenuCfg.nWidth=364;
_oMenuCfg.nArrowPos=_aoMenuCfg.nWidth/2;
return A.getRes(['<div class="QMEditorToolPop">','<h1 class="qmEditorHead">\u9644\u4EF6\u5939\u6536\u85CF\u56FE\u7247</h1>','<div class="qmEditorPicContent" id="content">','<div class="clr" id="contentclr"></div>','<div class="qzone_container" style="text-align:center; height:132px; padding-top:110px;"><img src="$images_path$webp/ico_loading21e9c5d.gif" align="absmiddle"/>&nbsp;&nbsp;\u52A0\u8F7D\u4E2D</div>','</div>','</div>']);
case "webapns":
getTop().LogKV("compose|toolbar|entrance|photo|tel");
var _oTop=QMEditor.getTopWin(),_nIosWebAppVer=parseInt(QMEditor.getTopWin().goUserInfo.get("IOSWEBAPPVER"),10)||0,_nIosWebAppVerNew=QMEditor.getTopWin().goUserInfo.get("IOSWEBAPPVERNEW"),_nAndroidWebAppVer=parseInt(QMEditor.getTopWin().goUserInfo.get("ANDROIDWEBAPPVER"),10)||0,_sKey=(new Date()).valueOf(),_sTitle2="",_sDesc="",_oImgPath=[];
function checkImgExist(_asImgPath)
{
var _oTmpImgPath=A.window["goIphonePath"]||[];
for(var i=0;i<_oTmpImgPath.length;i++)
{
if(_asImgPath==_oTmpImgPath[i])
{
return true;
}
}
return false;
}
function moveProcess(_aoDom,_anCurrent,_anPercent)
{
var _nCnt=1,_nLength=(_anCurrent-1)*_anPercent,_nStep=5,_nIntervalId=setInterval(function(){
if(_nLength<_anCurrent*_anPercent-_nStep)
{
_nLength+=_nCnt*_nStep;
_aoDom.style.width=_nLength+"%";
_nCnt++;
}
else{
clearInterval(_nIntervalId);
}
},500);
}
if(_nIosWebAppVer=="2"&&_nAndroidWebAppVer=="0")
{
_sTitle2="\u66F4\u65B0\u5BA2\u6237\u7AEF";
_sDesc="\u4F60\u4F7F\u7528\u7684QQ\u90AE\u7BB1iPhone\u5BA2\u6237\u7AEF\u7248\u672C\u8FC7\u4F4E\uFF0C<br/>\u8BF7\u5148\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u3002";
}
else{
_sTitle2="\u4E0B\u8F7D\u5E76\u5B89\u88C5";
_sDesc="\u6B64\u529F\u80FD\u9700\u8981QQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF\u914D\u5408\u4F7F\u7528\uFF0C<br/>\u8BF7\u5148\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u5B89\u88C5\u3002";
}
function doWpns(_anStep)
{
var _oUpDlg=new (A.QMDialog)({sId:"iphoneuploadimg",sTitle:"\u4ECE\u624B\u673A\u76F8\u518C\u4E0A\u4F20",sBodyHtml:A.TE(['<div class="QMEditorToolPop">','<div class="qmEditorPicContent" id="content">','$@$if($step3$==1)$@$','<ul class="uploadfromapp_step" style="padding:25px 25px 0 25px;margin-bottom:0;"><li>1.\u626B\u63CF\u4E8C\u7EF4\u7801</li><li>2.$stitle2$</li><li class="ufa_actived ufa_last">3.\u4ECE\u624B\u673A\u4E0A\u4F20\u7167\u7247</li></ul>','$@$endif$@$','<div id="loading" style="padding-bottom:25px;overflow:hidden;">','$@$if($webappver$==1)$@$','<div class="mail_choose_upload_photo"></div>','<p class="ufa_intro" style="width:268px;margin-top:14px;">\u8BF7\u6253\u5F00\u624B\u673A\u6536\u5230\u7684\u6D88\u606F\u63D0\u9192\uFF0C\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u7167\u7247\uFF0C<br/>\u6216\u624B\u52A8\u6253\u5F00\u624B\u673A\u4E2D\u7684QQ\u90AE\u7BB1\u3002&nbsp;<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001015&&id=23" target="_blank">\u5E2E\u52A9</a></p>','$@$else$@$','<div class="iphoneupload_phone_code"></div>','<p class="ufa_intro" style="margin-top:14px;">\u4F60\u4F7F\u7528\u7684QQ\u90AE\u7BB1\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7<a href="http://itunes.apple.com/cn/app/id473225145?mt=8&ls=1" target="_blank">\u5347\u7EA7</a>\u540E\u4F7F\u7528\u6B64\u529F\u80FD\u3002&nbsp;<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001015&&id=23" target="_blank">\u5E2E\u52A9</a></p>','$@$endif$@$','</div>','<div id="loaded" class="iphoneuploading" style="display:none;">','<div class="iphoneupload_thumb" ><img id="showimg" src="#"/></div>','<div class="iphoneupload_bar">','<span class="iphoneupload_icon_iphone"></span>','<div class="iphoneupload_progress" style="overflow:hidden">','<div id="uploadprocess" class="iphoneupload_progress_fill" style="width:5%;"></div>','</div>','<span class="iphoneupload_icon_imac"></span>','</div>','<div id="uploadnum" style="display:none"><span id="current"></span>/<span id="total"></span></div>','</div>','</div>','</div>']).replace({webappver:(_nIosWebAppVer==1||_nAndroidWebAppVer==1)?1:0,step3:_anStep?1:0,stitle2:_sTitle2}),nWidth:384,bAnimation:false,onload:function(){
},onclose:function(){
_oSelf._bIpUploading=false;
_oSelf._oTimer&&clearInterval(_oSelf._oTimer);
getTop().QMWebpush.getInst().close(64);
_oTop.QMAjax.send(getTop().T("/cgi-bin/webapnscheck?sid=$sid$&action=clearindex").replace({sid:getTop().getSid()}),{method:"POST",onload:function(){
}});
}});
_oSelf._bIpUploading=true;
_oSelf._nCurrentImg=0;
_oSelf._nProcessPercent=0;
_oSelf._bFirst=false;
(_nIosWebAppVer=="1"||_nAndroidWebAppVer=="1")&&_oTop.QMAjax.send(_oTop.T("/cgi-bin/webapnscheck?sid=$sid$&key=$key$").replace({sid:_oTop.getSid(),key:_anStep?"":_sKey}),{method:"POST",onload:function(){
if(_oSelf._oTimer)
{
clearInterval(_oSelf._oTimer);
_oSelf._oTimer=null;
}
_oSelf._oTimer=setInterval(function(){
_oTop.QMAjax.send(_oTop.T("/cgi-bin/webapnscheck?sid=$sid$&key=$key$&action=checkappimg").replace({sid:_oTop.getSid(),key:_sKey}),{method:"POST",onload:function(_abIsOk,_asParam){
if(_abIsOk&&_oSelf._bIpUploading)
{
var _oResult=evalValue(_asParam),_sHTML="",_sUrl,_oVecThumbnail=_oResult.Thumbnailurl||[],_nTotal=_oResult.total||1,_oVecImg=_oResult.imgurl||[],_oProcess=_oUpDlg.S("uploadprocess"),_sResult=_oResult.done,_nProcessPecent=100/_nTotal;
_oUpDlg.S("total").innerHTML=_nTotal;
for(var i=0;i<_oVecThumbnail.length;i++)
{
var _oItem=_oVecThumbnail[i];
if(_oItem)
{
if(_oItem!="done")
{
_sUrl=_oItem+"&sid="+A.getSid();
if(!checkImgExist(_sUrl))
{
if(!_oSelf._bFirst)
{
_oProcess.style.width="0";
_oSelf._bFirst=true;
}
if(typeof A.window["goIphonePath"]=="undefined")
{
A.window["goIphonePath"]=[];
}
A.window["goIphonePath"].push(_sUrl);
_sUrl&&_oUpDlg.S("showimg").setAttribute("src",_sUrl);
A.show(_oUpDlg.S("loading"),0);
A.show(_oUpDlg.S("loaded"),1);
var _nCurrentUpload;
if(_oUpDlg.S("current").innerHTML==_oSelf._nCurrentImg+1)
{
_nCurrentUpload=parseInt(_oUpDlg.S("current").innerHTML)+1;
}
else{
_nCurrentUpload=parseInt(_oSelf._nCurrentImg)+1;
}
_oUpDlg.S("current").innerHTML=_nCurrentUpload;
}
else{
}
}
else{
}
}
}
for(var i=0;i<_oVecImg.length;i++)
{
var _oImgItem=_oVecImg[i],_sImgUrl="";
if(_oImgItem)
{
_sImgUrl=_oImgItem+"&sid="+A.getSid();
if(!checkImgExist(_sImgUrl))
{
_oSelf._nCurrentImg++;
if(typeof A.window["goIphonePath"]=="undefined")
{
A.window["goIphonePath"]=[];
}
A.window["goIphonePath"].push(_sImgUrl);
_oProcess.style.width=_nProcessPecent*_oSelf._nCurrentImg+"%";
_oSelf.insertImage(_sImgUrl);
if(_nIosWebAppVerNew=="0.9.8")
{
_oProcess.style.width="100%";
setTimeout(function(){
_oUpDlg.close();
},500);
}
}
else{
}
}
}
if(_sResult=="true")
{
_oProcess.style.width="100%";
setTimeout(function(){
_oUpDlg.close();
},500);
}
}
}});
},2*1000);
}});
}
if((_nIosWebAppVer=="1"||_nAndroidWebAppVer=="1"))
{
doWpns();
}
else{
getTop().QMWebpush.getInst().addEvent(64,function(_anService,_aoData){
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
_sHtml=A.T(['<ul class="uploadfromapp_step">','<li>1.\u626B\u63CF\u4E8C\u7EF4\u7801</li>','<li class="ufa_actived">2.$stitle2$</li>','<li class="ufa_last">3.\u4ECE\u624B\u673A\u4E0A\u4F20\u7167\u7247</li>','</ul>','<div class="uploadfromapp_qr ufa_scaned">','<img src="/cgi-bin/generate_twodimcode?sid=$sid$&action=appdownload&skey=$skey$" />','<div class="ufa_angle1"></div>','<div class="ufa_angle2"></div>','<div class="ufa_angle3"></div>','<div class="ufa_angle4"></div>','</div>','<p class="ufa_intro" style="width:266px;">$sys$&nbsp;','<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001015&&id=23" target="_blank">\u5E2E\u52A9</a></p>']).replace({sys:_sSystemDiff,sid:getTop().getSid(),skey:_sKey,stitle2:_sTitle2});
_oDownDlg.S("content").innerHTML=_sHtml;
}
else if(_sStatus=="login")
{
if(_sOs=="android")
{
_nAndroidWebAppVer=1;
QMEditor.getTopWin().goUserInfo.set({"ANDROIDWEBAPPVER":1});
}
else if(_sOs=="ios")
{
_nIosWebAppVer=1;
QMEditor.getTopWin().goUserInfo.set({"IOSWEBAPPVER":1});
}
_oDownDlg.close();
doWpns(1);
}
}
},true);
var _oDownDlg=new (A.QMDialog)({sId:"download",sTitle:"\u4ECE\u624B\u673A\u76F8\u518C\u4E0A\u4F20",sBodyHtml:A.T(['<div class="uploadfromapp_wrap" id="content">','<ul class="uploadfromapp_step">','<li class="ufa_actived">1.\u626B\u63CF\u4E8C\u7EF4\u7801</li>','<li>2.$stitle2$</li>','<li class="ufa_last">3.\u4ECE\u624B\u673A\u4E0A\u4F20\u7167\u7247</li>','</ul>','<div class="uploadfromapp_qr">','<img src="/cgi-bin/generate_twodimcode?sid=$sid$&action=appdownload&skey=$skey$" />','<div class="ufa_angle1"></div>','<div class="ufa_angle2"></div>','<div class="ufa_angle3"></div>','<div class="ufa_angle4"></div>','</div>','<p class="ufa_intro">$sdesc$&nbsp;<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001015&&id=23" target="_blank">\u5E2E\u52A9</a></p>','</div>']).replace({sid:getTop().getSid(),skey:_sKey,stitle2:_sTitle2,sdesc:_sDesc}),nWidth:384,bAnimation:false,onload:function(){
},onclose:function(){
getTop().QMWebpush.getInst().close(64);
_oTop.QMAjax.send(getTop().T("/cgi-bin/webapnscheck?sid=$sid$&action=clearindex").replace({sid:getTop().getSid()}),{method:"POST",onload:function(){
}});
}});
}
break;
case "upload":
break;
case "url":
default:
_oMenuCfg.nWidth=402;
_oMenuCfg.nArrowPos=_oSelf.getBindEditor().getEditorCustomVar('FullScreenToolbar.bUseFullEdtior')||_oSelf._msUiType=="text"?201:0;
_oMenuCfg.sName="url";
return A.T(['<div style="margin:15px;">','<p>\u63D2\u5165\u7F51\u7EDC\u7167\u7247</p>','<input id="select" class="left qm_addinput" name="select" type="text" value="http://">','<a id="ok" class="button_gray_s left" style="width:52px;">\u786E\u5B9A</a>','<div class="clr"></div>','</div>']);
}
};
QMEditor.FUNCLIB.Photo.prototype.initMenu=function(_aoMenu,_aoMenuCfg){
var _oSelf=this;
if(_aoMenuCfg.sName=="url")
{
A.addEvent(_aoMenu.S("select"),"keypress",function(_aoEvent){
_aoEvent.keyCode==13&&_aoMenu.S("ok").click();
_aoEvent.keyCode==27&&_oSelf.hideMenu(true);
});
_aoMenu.S("ok").onclick=function(){
var _sUrl=_aoMenu.S("select").value;
if(!_sUrl||_sUrl=="http://"||_sUrl=="https://")
{
_aoMenu.S("select").focus();
}
else{
_oSelf.hideMenu(true);
setTimeout(function(){
_oSelf.insertImage(_sUrl);
},0);
}
};
}
else if(_aoMenuCfg.sName=="attach")
{
A.addEvent(_aoMenu.S("content"),"click",function(_aoEvent){
var _oTarget=A.getEventTarget(_aoEvent);
if(_oTarget.tagName=="IMG")
{
_oSelf._insertAttachImage(_oTarget);
_oSelf._log("41");
_aoMenu.close();
}
else if(_oTarget.getAttribute&&_oTarget.getAttribute("retry"))
{
_oSelf._showAttachImage(_aoMenu,0);
}
});
_oSelf._mbLoadingAttach=false;
_oSelf._mnAttachNextPage=0;
A.addEvent(_aoMenu.S("content"),"scroll",function(_aoEvent){
if(!_oSelf._mbLoadingAttach)
{
var _oContent=_aoMenu.S("content"),_nOffsetHeight=_oContent.offsetHeight,_nClientHeight=_oContent.clientHeight,_nScrollTop=_oContent.scrollTop;
if(_nOffsetHeight-_nScrollTop-_nClientHeight<Math.min(50,(_nOffsetHeight-_nClientHeight)/2))
{
_oSelf._showAttachImage(_aoMenu);
}
}
});
}
};
QMEditor.FUNCLIB.Photo.prototype.doMenuShow=function(_aoMenu,_aoMenuCfg){
var _oSelf=this,_sName=_aoMenuCfg.sName;
if(!_sName&&_oSelf.getUiType()=='icon'&&_oSelf._moPhotoMethods[0].sId=='upload')
{
_oSelf._initUpload(_aoMenu.getItemDom('upload'));
}
else if(_sName=="url")
{
_aoMenu.S("select").select();
_oSelf._log("2");
}
else if(_sName=="qzone")
{
A.loadJsFile("$js_path$webp//qmqzoneimg24e6b9.js",true,A.window.document,function(){
if(!_aoMenu.isClose())
{
A.window.QMQzoneImg.selectInMenu({oContainer:_aoMenu.S("qzone"),onclick:function(_anLabelIdx,_anListIdx,_aoPhoto,_anScrollTop){
_aoMenu.close();
_oSelf.insertImage(_aoPhoto.url);
_oSelf._log("31");
}});
_oSelf._log("3");
}
});
}
else if(_sName=="attach")
{
_oSelf._showAttachImage(_aoMenu);
_oSelf._log("4");
}
};
QMEditor.FUNCLIB.Photo.prototype._showAttachImage=function(_aoMenu){
var _oSelf=this;
if(_oSelf._mbLoadingAttach||_oSelf._mnAttachNextPage<0)
{
return _oSelf;
}
_oSelf._mbLoadingAttach=true;
var _oSelf=this,_sUrl=A.T("/cgi-bin/attachfolder?topmails=0&s=search&folderid=attach&hflag=attach&t=attachfolder.json&subject=&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1&perpage=18&filetype=1&action=list&func=getimage&page=$page$&sid=$sid$&resp_charset=UTF8&&ef=js").replace({page:_oSelf._mnAttachNextPage,sid:A.getSid()}),_sATTACH_FAIL=A.T(['<div style="text-align:center; line-height:1.5; margin-top:90px;">\u52A0\u8F7D\u5931\u8D25\uFF0C<a href="javascript:void(0);" retry="1">\u91CD\u8BD5</a>\u3002</div>']),_sATTACH_NONE=A.T(['<div style="text-align:center; line-height:1.5; margin-top:90px;">\u60A8\u7684\u9644\u4EF6\u5939\u6536\u85CF\u4E2D\u6682\u65E0\u56FE\u7247\u3002<br/>\u5C06\u91CD\u8981\u56FE\u7247\u6536\u85CF\u8D77\u6765\uFF0C\u5373\u53EF\u5728\u5199\u4FE1\u4E2D\u5FEB\u901F\u6DFB\u52A0\u3002</div>']),_sATTACH_CONTENT=A.TE(['$@$for($oList$)$@$','<div class="left pointer qmEditorPicSelect"',' onmouseover="this.className=\x27left pointer  qmEditorPicSelect bd\x27;"',' onmouseout="this.className=\x27left pointer  qmEditorPicSelect\x27;"','>','<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="absmiddle">','<img src="',getTop().QMDistributeDomain.getHost(),'$sIconUrl$" viewurl="$sUrl$" mailid="$sMailId$" attachid="$sAttachId$" attachname="$sAttachName$" fileextenal="$sFileExt$" filebyte="$sFileByte$" style="width:100px;"/>','</td></tr></tbody></table>','</div>','$@$endfor$@$','']);
A.show(_aoMenu.S("content").lastChild,1);
A.QMAjax.send(_sUrl,{method:"GET",onload:function(_abIsOk,_asParam,_aoXmlObj){
_oSelf._mbLoadingAttach=false;
if(_abIsOk)
{
try{
var _oJson=eval(_asParam);
if(!_oJson.errcode)
{
var _oContentDom=_aoMenu.S("content");
A.show(_oContentDom.lastChild,0);
_oContentDom.style.cssText="height:242px;overflow-y:auto;overflow-x:hidden;";
A.insertHTML(_aoMenu.S("contentclr"),"beforeBegin",(_oSelf._mnAttachNextPage==0&&_oJson.oList.length==0?_sATTACH_NONE:_sATTACH_CONTENT).replace(_oJson));
_oSelf._mnAttachNextPage=_oJson.oPageInfo.nNext;
}
}
catch(e)
{
_abIsOk=false;
}
}
if(!_abIsOk&&_oSelf._mnAttachNextPage==0)
{
_aoMenu.S("content").innerHTML=_sATTACH_FAIL;
}
}});
};
QMEditor.FUNCLIB.Photo.prototype._insertAttachImage=function(_aoImage){
var _oSelf=this,_sId="loadimg",_oEditor=_oSelf.getBindEditor(),_oTemplate=_oEditor.getTemplate(),_oLanguage=_oEditor.getLanguage();
new A.QMDialog({sId:_sId,sTitle:"\u52A0\u8F7D\u56FE\u7247",sBodyHtml:_oTemplate.DIALOG_UPLOADIMG.replace({imgPath:A.getPath("image"),langUploading:_oLanguage.PO_DLG_INSERTING,langUploadFail:_oLanguage.PO_DLG_INSERTINGFAIL}),nWidth:400,bAnimation:false,onclose:function(){
}});
A.getAttachList([{mailid:_aoImage.getAttribute("mailid"),attachid:_aoImage.getAttribute("attachid"),attachname:_aoImage.getAttribute("attachname"),fileextenal:_aoImage.getAttribute("fileextenal"),filebyte:_aoImage.getAttribute("filebyte")}],function(_abIsOk,_aoParam){
if(_abIsOk&&_aoParam)
{
var _oAttachs=_aoParam.attach;
if(_oAttachs&&_oAttachs[0])
{
A.QMDialog(_sId,"close");
_oSelf.insertImage(_oAttachs[0].viewfileurl);
return;
}
}
var _oDlg=A.QMDialog(_sId);
A.show(_oDlg.S("uploading"),0);
A.show(_oDlg.S("uploadFail"),1);
});
};
QMEditor.FUNCLIB.Photo.prototype.doItemClick=function(_asId,_aoEvent,_aoMenuCfg){
this.showMenu(false,{sName:_asId,nArrowPos:this.getUiConfig().arrowPos});
};
QMEditor.FUNCLIB.Photo.prototype._uploadingDlg=function(_asOpt,_anPercent,_anCnt,_anFileIdx){
var _oSelf=this,_oDialog=A.QMDialog("uploadimg");
if(_asOpt=="close")
{
A.QMDialog("uploadimg","close");
}
else if(_asOpt=="process")
{
_oDialog.S("uploadProcess").innerHTML=parseInt(_anPercent)+"%";
}
else if(_asOpt=="error")
{
A.show(_oDialog.S("uploading"),0);
A.show(_oDialog.S("uploadFail"),1);
}
else{
var _oEditor=_oSelf.getBindEditor(),_oTemplate=_oEditor.getTemplate(),_oLanguage=_oEditor.getLanguage();
_oSelf._bCloseDlg=false;
new (A.QMDialog)({sId:"uploadimg",sTitle:_oLanguage.PO_DLG_TITLE,sBodyHtml:_oTemplate.DIALOG_UPLOADIMG.replace({imgPath:A.getPath("image"),langUploading:_oTemplate.PO_DLG_UPLOADING.replace({cnt:_anCnt,idx:_anFileIdx||0}),langUploadFail:_oLanguage.PO_DLG_UPLOADFAIL}),nWidth:400,bAnimation:false,onclose:function(){
_oSelf._mnIndex=0;
_oSelf._bCloseDlg=true;
_oSelf._moFileList=null;
_oSelf._nUploadFileSize=0;
_oEditor.loadLastRange();
}});
}
};
QMEditor.FUNCLIB.Photo.prototype.init_=function(){
var _oSelf=this;
if(_oSelf._mbInitUpload)
{
_oSelf._mbUseUploadBtn=true;
_oSelf.getContainer().style.position="relative";
_oSelf._initUpload(_oSelf.getContainer().firstChild);
}
};
QMEditor.FUNCLIB.Photo.prototype._initUpload=function(_aoUploadDom){
var _oSelf=this;
var _oTop=getTop();
var _oEditor=_oSelf.getBindEditor();
var _oConf=_oEditor.getPhotoConfig()||{};
var utype,_oPicUpload;
if(location.protocol=="http:")
{
utype="11";
}
else{
utype="13";
}
_oPicUpload=_oTop.QMFileUpload.create("popup",{utype:utype,oContainer:_aoUploadDom,nTimeout:2000,oQueryData:{widthlimit:_oConf.widthlimit||0,heightlimit:_oConf.heightlimit||0,sizelimit:_oConf.sizelimit||0},onbeforepopupselect:function(){
_oSelf.hideMenu();
},onselect:function(_aoFileList){
var _nTotalSize=0,_bFormatError=false,_bFileInfoError=false;
_bSizeError=false;
A.E(_aoFileList,function(_aoFile){
if("gif|jpg|jpeg|bmp|png".indexOf((_aoFile.get("sName")||"").toLowerCase().split(".").pop())==-1)
{
_bFormatError=true;
return false;
}
if(_aoFile.get('nSize')<0)
{
_bFileInfoError=true;
return false;
}
if(_aoFile.get("nSize")>15728640)
{
_bSizeError=true;
return false;
}
if(_aoFile.get('nSize')&&_aoFile.get('sName'))
{
var type=_aoFile.get('sName').match(/\.(jpg|png)$/i);
if(type)
{
var type=type[1].toLowerCase();
getTop().ossLog('delay','all','stat=embedded_image&size='+_aoFile.get('nSize')+'&type='+(type=='png'?'png':'jpeg'));
}
}
_nTotalSize+=_aoFile.get("nSize");
_oSelf._log("1");
});
if(_bFormatError)
{
A.showError("\u53EA\u5141\u8BB8\u4E0A\u4F20gif,jpg,jpeg,bmp,png\u7684\u56FE\u7247");
_oSelf._uploadingDlg("close");
return;
}
if(_bFileInfoError)
{
A.showError("\u6587\u4EF6\u8DEF\u5F84\u8BC6\u522B\u9519\u8BEF\u6216\u8D85\u51FA\u5927\u5C0F\u9650\u5236");
_oSelf._uploadingDlg("close");
return;
}
if(_bSizeError)
{
A.showError("\u53EA\u5141\u8BB8\u4E0A\u4F20\u5927\u5C0F\u4E3A15M\u4EE5\u5185\u7684\u56FE\u7247");
_oSelf._uploadingDlg("close");
return;
}
if(!_fCalcSize(_nTotalSize||0,_oSelf.getBindEditor().getEditWin()))
{
A.showError("\u6DFB\u52A0\u7684\u7167\u7247\u603B\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC750M");
return;
}
_aoFileList.length>1&&(_oSelf._mnTotalSize=_nTotalSize);
_oSelf._mnIndex=0;
_oSelf._moFileList=_aoFileList;
_oSelf._nUploadFileSize=0;
_oSelf._next();
_oSelf.hideMenu(true);
},onprocess:function(_aoFile){
if(!_oSelf._bCloseDlg)
{
var _nPrecent;
if(_oSelf._moFileList&&_oSelf._moFileList.length>1)
{
var _nUploadedSize=parseInt(_aoFile.get("nPercent")/100*_aoFile.get("nSize"))+_oSelf._nUploadFileSize;
_nPrecent=parseInt(_nUploadedSize/_oSelf._mnTotalSize*100);
}
else{
_nPrecent=_aoFile.get("nPercent");
}
if(_nPrecent>=0)
{
_oSelf._uploadingDlg("process",_nPrecent);
}
}
},onerror:function(_aoFile){
_oSelf._uploadingDlg("error");
if(_aoFile._moInfo.sError=="cgi,-16")
{
A.showError("\u4E0D\u80FD\u4E0A\u4F20\u5927\u5C0F\u8D85\u8FC715M\u7684\u56FE\u7247");
}
},oncomplete:function(_aoFile){
if(!_oSelf._bCloseDlg)
{
var _oFileList=_oSelf._moFileList,_nLen=_oFileList&&_oFileList.length||0;
(_nLen<=1||_nLen<=(_oSelf._mnIndex+1))&&_oSelf._uploadingDlg("close");
_nLen>1&&(_oSelf._nUploadFileSize+=_aoFile.get("nSize"));
_oSelf.insertImage(_aoFile.get("sFileUrl"));
_oSelf._log("10");
_oSelf._mnIndex++;
_oSelf._next();
}
},oComlist:_oSelf.getUiType()=='icon'?_oTop.QMFileUpload.create.oCreaterInstance.orders.noflashPopup:null});
if(getMainWin().getPageId&&getMainWin().getPageId()=="note")
{
var _oQueryData={filetype:"pic",type:"upfile",business:"notebook",t:"qmfileuploadnew"};
_oPicUpload.initConfg(A.extend(_oQueryData,{sUrl:location.protocol+"//"+location.hostname+"/cgi-bin/note_upload"}));
}
};
QMEditor.FUNCLIB.Photo.prototype._next=function(){
var _oSelf=this,_oFileList=_oSelf._moFileList,_nIndex=_oSelf._mnIndex,_nLen=_oFileList&&_oFileList.length||0,_oFile=_nIndex<_nLen&&_oFileList[_nIndex];
if(_oFile)
{
_oSelf._uploadingDlg("open",0,_nLen,_nIndex+1);
_oFile.upload();
}
};
QMEditor.FUNCLIB.Photo.prototype._log=function(_asType){
_asType&&A.ossLog("delay","all","stat=nothing&locval=editor,plus,photo,"+_asType);
};
(function(_aoWin){
var _S_SCREENSNAP_EXTENSION_ID="gicmopcfdmkpokppfpnkmgebcaohbffc",_oTop=_aoWin,_bScreenSnaping=false,_bHeartbeat=false;
QMEditor.FUNCLIB.ScreenSnap=QMEditor.FUNCLIB.inheritFrom(function(_aoParamSet){
if(!_aoParamSet.editor.getPhotoActionSrc())
{
return;
}
if(!_oTop.isSupportSSnap())
{
_oTop.isCanConnectGoogle();
this._detectNew();
}
this.setId("ScreenSnap");
this.setType("btn");
this.setBindEditor(_aoParamSet.editor);
this._updateUIInfo();
var _oSelf=this,_oEditor=this.getBindEditor(),_oActiveX=QMEditor._ActiveX._bind(_oEditor),_sTmpEditerContent="",_bCanInstallEx=A.gbIsIE||A.QMAXInfo.mbAblePlugin,_nTimeout;
function _uploadImg(_aoEvent)
{
_oSelf._readyToUpload();
_oActiveX._saveImg();
_oActiveX._startUploadCustomImg(null,false,function(_abIsUploadOk,_aoParam){
_oSelf._doUploadFinish(_abIsUploadOk,_aoParam);
});
A.preventDefault(_aoEvent);
A.stopPropagation(_aoEvent);
}
this.setfOnKeyDown(function(_aoEvent){
if(_aoEvent.ctrlKey&&_aoEvent.altKey&&_aoEvent.keyCode==65)
{
_oSelf.getfDoDefaultClick()();
A.preventDefault(_aoEvent);
}
else if((_aoEvent.ctrlKey||_aoEvent.metaKey)&&_aoEvent.keyCode==86)
{
if(_oActiveX._isClipBoardImage())
{
_uploadImg(_aoEvent);
}
else if(!_oActiveX._getScreenSnapObj())
{
var _sSaveStr=_oEditor.getContent();
_nTimeout=!A.gbIsOpera&&setTimeout(function(){
if(_sSaveStr==_oEditor.getContent())
{
_oEditor.getfOnShowInstallactive()("paste");
}
},200);
if(!_bCanInstallEx)
{
_sTmpEditerContent=_oEditor.getContent();
}
}
}
});
this.setfOnContextMenu(function(_aoEvent){
if(_oActiveX._saveImg())
{
clipboardData.setData("Text","");
}
});
this.setfOnPaste(function(_aoEvent){
if(_oActiveX._isClipBoardImage())
{
_uploadImg(_aoEvent);
}
else if(_oActiveX._hasScreenSnapImg())
{
if(!clipboardData.getData("Text"))
{
_uploadImg(_aoEvent);
}
}
else if(_aoEvent.clipboardData&&window.FileReader)
{
var _oClipboardData=_aoEvent.clipboardData;
var _oBlob,_oItem;
if(_oClipboardData.items&&_oClipboardData.items.length==1&&(_oItem=_oClipboardData.items[0])&&/^image/i.test(_oItem.type)&&(_oBlob=_oItem.getAsFile()))
{
var _oReader=new FileReader();
_oReader.onload=function(_aoReaderEvent){
_oSelf.insertImage(_aoReaderEvent.target.result);
};
_oReader.readAsDataURL(_oBlob);
}
}
else if(A.gbIsFF&&!A.gbIsMac)
{
setTimeout(function(){
var _oImgs=_oEditor.getContentTags("img");
for(var i=0,_nLen=_oImgs.length;i<_nLen;i++)
{
if(_oImgs[i].src.indexOf("/moz-screenshot-")!=-1)
{
removeSelf(_oImgs[i]);
_oEditor.getfOnShowInstallactive()("paste");
return;
}
}
;
},200);
}
else if(!_bCanInstallEx)
{
setTimeout(function(){
if(_oEditor.getContent()==_sTmpEditerContent)
{
_oEditor.getfOnShowInstallactive()("failpaste");
}
_sTmpEditerContent="";
},200);
}
});
this.setfDoDefaultClick(this._fDoDefaultClick);
},QMEditor.FUNCLIB.MENUIMAGE);
QMEditor.FUNCLIB.ScreenSnap.prototype._fDoDefaultClick=function(_aoEvent){
var _oEditor=this.getBindEditor();
_oEditor.hideMenu();
if(_oEditor.getEditorCustomVar('FullScreenToolbar.bUseFullEdtior'))
{
_oTop.LogKV({sValue:'editor|toolbar|fullscreen|screen_snap'});
}
if(!A.detectActiveX(0,1))
{
if(_oTop.isSupportSSnap(true))
{
if(typeof (_oEditor.getfOnShowInstallactive())=="function")
{
_oEditor.getfOnShowInstallactive()();
}
}
else{
this._screenSnapByNew();
}
return;
}
var _oSelf=this,_oActiveX=QMEditor._ActiveX._bind(_oEditor);
_oActiveX._screenSnap(function(_abIsOk){
if(!_abIsOk)
{
_oEditor.loadLastRange();
}
else{
_oSelf._readyToUpload();
_oActiveX._uploadCustomImg(true,function(_abIsUploadOk,_aoParam){
_oSelf._doUploadFinish(_abIsUploadOk,_aoParam);
});
}
});
A.ossLog("delay","all","stat=nothing&locval=editor,plus,screensnap,1");
};
QMEditor.FUNCLIB.ScreenSnap.prototype._updateUIInfo=function(){
var _bIsEnabled=A.detectActiveX(0,1)||_bHeartbeat,_oLang=this.getBindEditor().getLanguage();
this.setUiConfig({clsName:_bIsEnabled?"":"qmEditorScreenSnapDisable",title:_bIsEnabled?_oLang.FUN_SCREENSNAP:_oLang.FUN_SCREENSNAP_SETUP_TIP,label:_oLang.FUN_SCREENSNAP_LABEL});
};
QMEditor.FUNCLIB.ScreenSnap.prototype._screenSnapByNew=function(){
if(!(chrome&&chrome.runtime))
{
return;
}
if(getTop().gbIsMac)
{
return;
}
var _oEditor=this.getBindEditor();
if(_bHeartbeat)
{
if(_bScreenSnaping)
{
return;
}
_bScreenSnaping=true;
_oTop.LogKV("screensnap|new|use|compose");
chrome.runtime.sendMessage(_S_SCREENSNAP_EXTENSION_ID,{command:"CaptureCommand"},function(_aoResult){
_oTop.LogKV("screensnap|new|success|compose");
_bScreenSnaping=false;
if(_aoResult)
{
_aoResult.text&&(_oEditor.insertImage(_aoResult.text));
}
});
}
else{
if(_oTop.isCanConnectGoogle.result===false)
{
this._showInstallactiveNew();
}
else{
var _sBroserDesc=_oTop.gbIsEdge?"Microsoft Edge\u6D4F\u89C8\u5668":"Chrome\u6D4F\u89C8\u566842\u6216\u4EE5\u4E0A\u7248\u672C",_sMore=_oTop.gbIsEdge?"":'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=10000&&no=1001245" target="_blank">\u4E86\u89E3\u66F4\u591A</a>';
_oTop.confirmBox({title:"\u6E29\u99A8\u63D0\u793A",msg:['<div class="dialog_f_t" style="font-weight: normal;">\u4F60\u6B63\u5728\u4F7F\u7528\u7684\u662F',_sBroserDesc,'\uFF0C\u6682\u4E0D\u652F\u6301\u622A\u5C4F\u529F\u80FD\u3002<br/>\u62B1\u6B49\u7ED9\u4F60\u5E26\u6765\u4E86\u56F0\u6270\uFF0C\u6211\u4EEC\u5C06\u5C3D\u5FEB\u4F18\u5316\u3002',_sMore,'</div>'].join(""),confirmBtnTxt:'\u786E\u5B9A',mode:"alert",onreturn:function(_abIsOk){
}});
_oTop.LogKV("screensnap|unavailable|google|block");
}
_oTop.LogKV("screensnap|want|download");
}
};
QMEditor.FUNCLIB.ScreenSnap.prototype._detectNew=function(){
if(!(chrome&&chrome.runtime))
{
return;
}
var _oSelf=this;
if(_bHeartbeat)
{
return true;
}
chrome.runtime.sendMessage(_S_SCREENSNAP_EXTENSION_ID,{command:"CheckCommand"},function(_aoResult){
if(_aoResult&&_aoResult.app&&_aoResult.app.status==200&&_aoResult.host&&_aoResult.host.status==200)
{
_bHeartbeat=true;
_oSelf._upateUI();
}
});
};
QMEditor.FUNCLIB.ScreenSnap.prototype._upateUI=function(){
var _oSelf=this,_oContainer,_oAs;
if((_oContainer=_oSelf._moContainer)&&(_oAs=_oTop.finds("a",_oContainer))&&_oAs.length>0)
{
_oTop.rmClass(_oAs[0],"qmEditorScreenSnapDisable");
}
};
QMEditor.FUNCLIB.ScreenSnap.prototype._showInstallactiveNew=function(){
_oTop.confirmBox({title:"QQ\u90AE\u7BB1\u622A\u5C4F\u63D2\u4EF6",msg:['<div class="dialog_f_t" style="font-weight: normal;margin-top:3px;">\u4F7F\u7528\u622A\u5C4F\u529F\u80FD\uFF0C\u9700\u8981\u4E0B\u8F7D\u5B89\u88C5QQ\u90AE\u7BB1\u622A\u5C4F\u63D2\u4EF6\u3002</div>'].join(""),confirmBtnTxt:"\u4E0B\u8F7D\u5B89\u88C5",onreturn:function(_abIsOk){
if(_abIsOk)
{
var _sBrowserType="chrome42";
_sPath=_oTop.QMAXInfo.get("path",_sBrowserType);
_sDownloadFname=_oTop.QMAXInfo.installer("download",_sBrowserType);
_oTop.getActionWin().location="/zh_CN/"+_sPath+_sDownloadFname;
_oTop.LogKV("screensnap|new|download|compose");
}
}});
};
})(getTop());
QMEditor.FUNCLIB.Music=QMEditor.FUNCLIB.inheritFrom(function(_aoParamSet){
var _oSelf=this;
_oSelf.setId("Music");
_oSelf.setBindEditor(_aoParamSet.editor);
_oSelf._mnNumPerPage=5;
_aoParamSet.container&&(_oSelf._moContainer=_aoParamSet.container);
var _oEditor=_oSelf.getBindEditor(),_oLang=_oEditor.getLanguage();
_oSelf.setUiConfig({arrowPos:160,fBeforeclose:_oSelf._fBeforeclose,title:_oLang.FUN_MUSIC,label:_oLang["FUN_MUSIC_LABEL"]});
_oEditor._onprivatechangebgmusic=function(){
_oSelf._doChangeBgMusic(this.getBgMusicInfo());
};
},QMEditor.FUNCLIB.MENU);
QMEditor.FUNCLIB.Music.prototype.getMenuUI=function(){
return A.T('<div class="qmEditorMusicCntr qmEditorToolLoading"><img align="absmiddle" src="$images_path$webp/ico_loading21e9c5d.gif">&nbsp;&nbsp;\u52A0\u8F7D\u4E2D</div>').replace({images_path:A.getPath("image",true)});
};
QMEditor.FUNCLIB.Music.prototype.initMenu=function(_aoMenuObj,_aoConfig){
var _oSelf=this,_oEditor=_oSelf.getBindEditor(),_oItemContainer=_aoMenuObj.S("_menuitem_");
if(!window.QMBgMusic)
{
_oEditor.loadFile({"$js_path$webp//com/kits/qmeditor/qqmail/release/plus/bgmusic25194d.js":true},function(){
if(!window.QMBgMusic)
{
_oItemContainer.innerHTML='<div class="qmEditorMusicCntr">\u52A0\u8F7D\u5931\u8D25</div>';
}
else{
_oSelf._initMenuForMo(_aoMenuObj);
}
});
}
else{
_oSelf._initMenuForMo(_aoMenuObj);
}
A.LogKV('editor|toolbar|music|ck');
return;
};
QMEditor.FUNCLIB.Music.prototype._fBeforeclose=function(_abIsNotNeedMemory){
if(this._moMusicPanel)
{
this._moMusicPanel._fBeforeclose(_abIsNotNeedMemory);
}
};
QMEditor.FUNCLIB.Music.prototype._confirm=function(_afAction){
var _oSelf=this,_oEditor=_oSelf.getBindEditor(),_oTop=getTop();
_oTop.confirmBox({title:"\u6DFB\u52A0\u80CC\u666F\u97F3\u4E50",msg:T(['<div class="dialog_f_t">$name$</div>','<div class="dialog_f_d">\u81F3\u591A\u6DFB\u52A0\u4E00\u9996\u80CC\u666F\u97F3\u4E50</div>']).replace({name:_oEditor.getLanguage().MC_REPLACE_TIP}),confirmBtnTxt:'\u786E\u5B9A',cancelBtnTxt:'\u53D6\u6D88',onreturn:function(_abIsOk){
_abIsOk&&_afAction();
}});
};
QMEditor.FUNCLIB.Music.prototype._initMenuForMo=function(_aoMenuObj){
var _oSelf=this,_oEditor=_oSelf.getBindEditor(),_oItemContainer=_aoMenuObj.S("_menuitem_");
_oSelf._moMusicPanel=new QMBgMusic();
_oSelf._moMusicPanel.setup({container:_oItemContainer,height:'175px',width:'265px',num:_oSelf._mnNumPerPage,menuObj:_aoMenuObj,style:_oEditor.getTemplate().STYLE,onselectmusic:function(_asSong,_asSinger,_asUrl){
function insert()
{
if(_asUrl&&_asUrl.indexOf("://")==-1)
{
_asUrl="http://"+_asUrl;
}
_oEditor.setBgMusicInfo(_asSong,_asSinger,_asUrl);
_oSelf._moMusicPanel._moMenuObj&&_oSelf._moMusicPanel._moMenuObj.close(false,true);
A.LogKV('editor|toolbar|music|select');
}
if(!_oEditor.getBgMusicInfo())
{
insert();
}
else{
_oSelf._confirm(insert);
}
},onclose:function(){
_oSelf._moMusicPanel._moMenuObj&&_oSelf._moMusicPanel._moMenuObj.close(false,true);
},onload:function(){
_oSelf._moMusicPanel.focus();
}});
};
QMEditor.FUNCLIB.Music.prototype._doChangeBgMusic=function(_aInfo){
if(this.getContainer())
{
var _oLabels=A.GelTags("a",this.getContainer()),_nLabLen=_oLabels.length;
if(_nLabLen>0)
{
_oLabels[_nLabLen-1].innerHTML!=="\u66F4\u591A"&&(_oLabels[_nLabLen-1].innerHTML=this._moBindEditor.getLanguage()["FUN_MUSIC_LABEL"]);
}
}
};
QMEditor.FUNCLIB.Music.prototype.doMenuShow=function(_aoMenu,_aoMenuCfg){
this._moMusicPanel&&this._moMusicPanel.focus();
};
QMEditor.FUNCLIB.Map=QMEditor.FUNCLIB.inheritFrom(function(_aoParamSet){
var _oSelf=this;
_oSelf.setId("Map");
_oSelf.setBindEditor(_aoParamSet.editor);
_aoParamSet.container&&(_oSelf._moContainer=_aoParamSet.container);
var _oEditor=_oSelf.getBindEditor(),_oLang=_oEditor.getLanguage();
_oSelf.setUiConfig({arrowPos:160,title:_oLang.FUN_Map,label:_oLang["FUN_MAP_LABEL"]});
_oSelf.setType("btn");
_oSelf.setfDoDefaultClick(this._dofaultClick);
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.Map.prototype._setup=function(){
var _oSelf=this,_oTop=getTop();
if(_oTop.gbIsIE&&_oTop.gnIEVer==6)
{
_oSelf._initMapJs();
}
};
QMEditor.FUNCLIB.Map.prototype._initMapJs=function(){
var _oTop=getTop();
_oTop.initMapCallback=function(){
};
var _sMapDomain=getTop().isHttp()?"map.qq.com":"apis.map.qq.com";
if(!(_oTop.qq&&_oTop.qq.maps&&_oTop.qq.maps.Map))
{
_oTop.loadJsFile("//"+_sMapDomain+"/api/js?v=2.exp&libraries=place&key=UH3BZ-CYLKV-RHTPL-UAGSL-DRA4V-VGFSJ&callback=initMapCallback",false,_oTop.document,function(){
},{},true);
}
};
QMEditor.FUNCLIB.Map.prototype._dofaultClick=function(_avDefaultLocation){
var _oSelf=this;
_oSelf._mvDefaultLocation=_avDefaultLocation;
var _oDialog=new (A.QMDialog)({sId:"id_compose_editor_map_center",sTitle:"\u63D2\u5165\u5730\u56FE",nWidth:467,sBodyHtml:'<div id="div_content_body" style="height:400px;"></div>',bAnimation:false,onload:function(){
_oSelf.initMenu(this);
_oSelf._initMapJs();
},onshow:function(){
},onclose:function(){
},onbeforeclose:function(){
}});
};
QMEditor.FUNCLIB.Map.prototype.getMenuUI=function(){
return A.T('<div class="qmEditorMusicCntr qmEditorToolLoading"><img align="absmiddle" src="$images_path$webp/ico_loading21e9c5d.gif">&nbsp;&nbsp;\u52A0\u8F7D\u4E2D</div>').replace({images_path:A.getPath("image",true)});
};
QMEditor.FUNCLIB.Map.prototype.initMenu=function(_aoMenuObj,_aoConfig){
var _oSelf=this,_oEditor=_oSelf.getBindEditor(),_oItemContainer=_aoMenuObj.S("div_content_body");
if(!window.QMMap)
{
_oEditor.loadFile({"$js_path$webp//com/kits/qmeditor/qqmail/release/plus/map2626db.js":true},function(){
if(!window.QMMap)
{
_oItemContainer.innerHTML='<div class="qmEditorMusicCntr">\u52A0\u8F7D\u5931\u8D25</div>';
}
else{
_oSelf._initMenuForMo(_aoMenuObj);
}
});
}
else{
_oSelf._initMenuForMo(_aoMenuObj);
}
A.LogKV('editor|toolbar|map|ck');
return;
};
QMEditor.FUNCLIB.Map.prototype._initMenuForMo=function(_aoMenuObj){
var _oSelf=this,_oEditor=_oSelf.getBindEditor(),_oItemContainer=_aoMenuObj.S("div_content_body");
_oSelf._moMapPanel=new QMMap(_oEditor);
_oSelf._moMapPanel.setup({container:_oItemContainer,defaultLocation:_oSelf._mvDefaultLocation||"",height:'175px',width:'265px',num:_oSelf._mnNumPerPage,menuObj:_aoMenuObj,style:_oEditor.getTemplate().STYLE,onselectMap:function(_asSong,_asSinger,_asUrl){
if(!_oEditor.getBgMapInfo()||confirm(_oEditor.getLanguage().MC_REPLACE_TIP))
{
if(_asUrl&&_asUrl.indexOf("://")==-1)
{
_asUrl="http://"+_asUrl;
}
_oEditor.setBgMapInfo(_asSong,_asSinger,_asUrl);
_oSelf.hideMenu(true);
A.LogKV('editor|toolbar|Map|select');
}
},onclose:function(){
_oSelf.hideMenu(true);
},onload:function(){
_oSelf._moMapPanel.focus();
}});
};
(function(A,_aoUndefined){
var QMMap=function(_aoEditor){
this._mbIsSetuped=false;
this._moEditor=_aoEditor;
this._moResult={};
this._moUrl={};
this._moNCurPage={},this._moCurrentPos={};
this._msCity="\u5317\u4EAC";
};
var _oKeywordKvObj={"province":"\u7701","city":"\u5E02","area":"\u533A","county":"\u53BF"},_sMapDomain=getTop().isHttp()?"map.qq.com":"apis.map.qq.com",_sMapUnikKey="UH3BZ-CYLKV-RHTPL-UAGSL-DRA4V-VGFSJ";
QMMap.prototype.ZoomControl=function(_aoConfig){
var _oContext=_aoConfig.context,_oTop=getTop(),_oMap=_aoConfig.map,_oWin=_aoConfig.win,_sTemp=QMMap._TEMPLATE._ZOOM_CONTROL_.replace(),_oZoomDiv,_oCenterPosition;
_oZoomDiv=_oWin.document.createElement("div");
_oZoomDiv.innerHTML=_sTemp;
_oMap.controls[_oWin.qq.maps.ControlPosition.TOP_LEFT].push(_oZoomDiv);
_oWin.qq.maps.event.addDomListener(_oZoomDiv,"click",function(_aoEvent){
var _oTarget=_oTop.getEventTarget(_aoEvent);
if(_oTop.attr(_oTarget,"id")=="a_enlarge")
{
_oMap.setZoom(_oMap.getZoom()+1);
getTop().LogKV('insertmap|zoomenlarge|kv');
}
else if(_oTop.attr(_oTarget,"id")=="a_narrow")
{
_oMap.setZoom(_oMap.getZoom()-1);
getTop().LogKV('insertmap|zoomnarrow|kv');
}
_oTop.preventDefault(_aoEvent);
});
};
QMMap.prototype.getIconUrl=function(_asSuffix){
var _sBasePath=["com/kits/qmeditor/base/images/newicon/icon_location",_asSuffix,".png"].join(""),_oTop=getTop(),_sTopHost=getTop().location.hostname,_sIconUrl;
if(/dev/i.test(_sTopHost))
{
var _sDomain=_asSuffix?"mail.qq.com":_sTopHost;
_sIconUrl="http://"+_sDomain+"/zh_CN/htmledition/js/"+_sBasePath+"?&r="+Math.random();
}
else{
if(_asSuffix=="_2x")
{
_sIconUrl=_oTop.getRes("$js_path$webp/com/kits/qmeditor/base/images/newicon/icon_location_2x24c44c.png");
}
else if(!_asSuffix)
{
_sIconUrl=_oTop.getRes("$js_path$webp/com/kits/qmeditor/base/images/newicon/icon_location24c44c.png");
}
_sIconUrl=_sIconUrl.replace(/\/webp\//i,"/");
}
return _sIconUrl;
};
QMMap.prototype.Marker=function(_aoConfig){
var _oContext=_aoConfig.context,_oLocation=_aoConfig.location,_oMap=_aoConfig.map,_oWin=_aoConfig.win;
var _oIcon=new _oWin.qq.maps.MarkerImage(_oContext.getIconUrl(),new _oWin.qq.maps.Size(62,68),new _oWin.qq.maps.Point(0,0),new _oWin.qq.maps.Point(31,33));
var marker=new _oWin.qq.maps.Marker({position:_oLocation,draggable:true,map:_oMap});
marker.setIcon(_oIcon);
_oWin.qq.maps.event.addListener(marker,"dragend",function(res){
_oContext._updateCurLocation.apply(_oContext,[res.latLng]);
_oContext._searchMapNearBy.apply(_oContext,[res.latLng.getLng(),res.latLng.getLat()]);
getTop().LogKV('insertmap|dragmarker|kv');
});
return marker;
};
QMMap.prototype._updateCurLocation=function(_aoLatLng){
var _oSelf=this,_oMenuObj=_oSelf._moMenuObj,_oTop=getTop(),_oWin=_oTop;
_oWin.geocoderCallback=function(_aoResult){
var _oSingle={address:_aoResult.result.address,location:_oSelf._moMarker.getPosition()};
_oSelf._saveLocation(_oSingle);
_oSingle.title="[\u5730\u70B9]",_oMenuObj.setHtml(_oMenuObj.S("currentPlace"),QMMap._TEMPLATE._CURRENT_ITEM.replace(_oSingle));
};
_oTop.loadJsFile("//apis.map.qq.com/ws/geocoder/v1/?callback=geocoderCallback&output=jsonp&location="+_aoLatLng.getLat()+","+_aoLatLng.getLng()+"&key="+_sMapUnikKey+"&get_poi=1",true,_oWin.document,"",{charset:"utf-8"},true);
};
function ImageMapType()
{
var _oWin=getTop();
function modulo_g(a,b,c)
{
var d=b<<c;
if(0>a.y||a.y>=d)
{
return null;
}
if(0<=a.x&&a.x<d)
{
return a;
}
var e={x:a.x,y:b.y};
e.x=(a.x%d+d)%d;
return e;
}
function modulo(a,b)
{
var r=a%b;
return r*b<0?r+b:r;
}
var servers=["http://p0.map.gtimg.com/hwaptiles","http://p1.map.gtimg.com/hwaptiles","http://p2.map.gtimg.com/hwaptiles","http://p3.map.gtimg.com/hwaptiles"];
var earthlayer=new _oWin.qq.maps.ImageMapType({name:'\u9AD8\u6E05\u5E95\u56FE',alt:'\u9AD8\u6E05\u5E95\u56FE',tileSize:new _oWin.qq.maps.Size(128,128),minZoom:1,maxZoom:18,getTileUrl:function(tile,zoom){
var z=zoom,x=tile.x,y=tile.y;
y=Math.pow(2,zoom)*2-y-1;
var p=modulo_g(tile,2,zoom);
if(!p)
{
return null;
}
var s=modulo(x+y,servers.length);
x=p.x;
return servers[s]+'/'+zoom+'/'+(x>>4)+'/'+(y>>4)+'/'+x+'_'+y+'.png';
}});
return earthlayer;
}
QMMap.prototype.setup=function(_aoConfig){
var _oSelf=this;
if(_oSelf.isSetuped()||!_aoConfig||!_aoConfig.container)
{
return false;
}
_oSelf._initData(_aoConfig)._initUI(_aoConfig);
return true;
};
QMMap.prototype.isSetuped=function(){
return this._mbIsSetuped;
};
QMMap.prototype.focus=function(){
if(this.isSetuped())
{
var _oText=this._moMenuObj.S("searchText");
_oText&&A.gbIsIE?_oText.select():_oText.focus();
}
};
QMMap.prototype._initData=function(_aoConfig){
var _oSelf=this;
_oSelf._moContainer=_aoConfig.container;
_oSelf._mvDefaultLocation=_aoConfig.defaultLocation;
_oSelf._mnNumPerPage=_aoConfig.num;
_oSelf._moMenuObj=_aoConfig.menuObj;
if(typeof _aoConfig.onload=="function")
{
_oSelf._mfOnload=_aoConfig.onload;
}
_oSelf._mfOnClose=_aoConfig.onclose;
_oSelf._mfOnSelectMap=_aoConfig.onselectMap;
return _oSelf;
};
QMMap.prototype._initUI=function(_aoConfig){
var _oSelf=this,_oMenuObj=_oSelf._moMenuObj,_oTemplate=QMMap._TEMPLATE,_oParam={style:_aoConfig.style,images_path:A.getPath("image",true),result:_oTemplate._INFO.replace({info:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u641C\u7D22"}),sid:A.getSid()};
_oMenuObj.setHtml(_oSelf._moContainer,_oTemplate._DIVHTML.replace(_oParam));
_oSelf._setEvent();
_oSelf._setData();
_oSelf._mbIsSetuped=true;
_oSelf._loadTXMapJs();
if(_oSelf._mfOnload)
{
_oSelf._mfOnload.call(_oSelf);
}
setTimeout(function(){
_oSelf.focus();
},0);
};
QMMap.prototype._beforeLoadPrev=function(){
var _oTop=getTop(),_oSelf=this,_oMenuObj=_oSelf._moMenuObj,_oDivLoading=_oSelf._moDivLoading,_oDivWelcome=_oSelf._moDivWelcome,_oInputPlaceSearch=_oSelf._moInputPlaceSearch,_oDomSearchDesc=_oMenuObj.S("span_searchDesc");
if(_oSelf._mvDefaultLocation)
{
_oTop.show(_oDomSearchDesc,false);
_oTop.show(_oDivWelcome,false);
_oTop.show(_oDivLoading,true);
if((typeof _oSelf._mvDefaultLocation).toLowerCase()=="string")
{
_oInputPlaceSearch.value=_oSelf._mvDefaultLocation;
}
else if((typeof _oSelf._mvDefaultLocation).toLowerCase()=="object")
{
_oInputPlaceSearch.value=_oSelf._mvDefaultLocation.searchKeyword;
}
}
};
QMMap.prototype._loadPrev=function(){
this._getCityNameByLocalIp();
var _oTop=getTop(),_oSelf=this,_oMenuObj=_oSelf._moMenuObj,_oInputPlaceSearch=_oSelf._moInputPlaceSearch;
if(_oSelf._mvDefaultLocation)
{
if((typeof _oSelf._mvDefaultLocation).toLowerCase()=="string")
{
_oSelf._search(_oInputPlaceSearch.value);
_oTop.LogKV("insertmap|locationidentifyentrance|kv");
}
else if((typeof _oSelf._mvDefaultLocation).toLowerCase()=="object")
{
var _oPrevMapCfg=_oSelf._mvDefaultLocation,_oDivLoading=_oSelf._moDivLoading,_oLatLng=_oSelf.getLatLng(_oPrevMapCfg.pos),_oDomPlaceDetail=_oMenuObj.S("placedetail");
A.show(_oMenuObj.S("result"),true);
A.show(_oSelf._moSpanResultTitleText,false);
_oPrevMapCfg.title?"":(_oPrevMapCfg.title="[\u5730\u70B9]");
_oDomPlaceDetail.innerHTML=_oPrevMapCfg.posDesc;
_oSelf.createMap(_oPrevMapCfg.center);
_oSelf._moMap.setZoom(_oPrevMapCfg.zoom);
A.show(_oDivLoading,false);
_oSelf.setCenter(_oPrevMapCfg.center);
_oSelf._moMarker.setPosition(_oLatLng);
_oSelf._moCurrentPos={"title":_oPrevMapCfg.title,"address":_oPrevMapCfg.posDesc,"location":_oLatLng};
_oSelf._searchMapNearBy(_oLatLng.getLng(),_oLatLng.getLat(),_oPrevMapCfg.title,true);
}
}
};
QMMap.prototype._fBeforeclose=function(){
var _oSelf=this,_oTop=getTop(),_oMenuObj=_oSelf._moMenuObj,_bIsNeedMemory=!_oSelf._mbIsFinished,_oInputPlaceSearch=_oSelf._moInputPlaceSearch,_oDomPlaceDetail=_oMenuObj.S("placedetail");
if(_bIsNeedMemory&&_oSelf._moMap)
{
_oTop._oPrevMapCfg_={title:_oTop.htmlEncode(_oInputPlaceSearch.value),address:_oTop.htmlEncode(_oDomPlaceDetail.innerHTML),mapCenterLocation:_oSelf._moMap.getCenter(),markerLocation:_oSelf._moMarker.getPosition(),currentPos:_oSelf._moCurrentPos};
}
else{
if(_oTop._oPrevMapCfg_)
{
try{
delete _oTop._oPrevMapCfg_;
}
catch(e)
{
_oTop._oPrevMapCfg_=undefined;
}
;
}
}
};
QMMap.prototype._setData=function(){
var _oSelf=this,_oMenuObj=_oSelf._moMenuObj,_oDivMapContainer=_oMenuObj.S("mapContainer"),_oDivResultDom=_oMenuObj.S("resultData"),_oDomNearByPlaceDetail=_oMenuObj.S("nearByPlacedetail"),_oInputPlaceSearch=_oMenuObj.S("searchText"),_oDivError=_oMenuObj.S("div_error"),_oDivLoading=_oMenuObj.S("div_loading"),_oDivWelcome=_oMenuObj.S("div_welcome"),_oDivPlaceDetail=_oMenuObj.S("placedetail"),_oSpanResultTitleText=_oMenuObj.S("span_resultTitleText"),_oDivLocation=_oMenuObj.S("div_location");
_oSelf._moDivMapContainer=_oDivMapContainer;
_oSelf._moDivResultDom=_oDivResultDom;
_oSelf._moDomNearByPlaceDetail=_oDomNearByPlaceDetail;
_oSelf._moInputPlaceSearch=_oInputPlaceSearch;
_oSelf._moDivLocation=_oDivLocation;
_oSelf._moDivError=_oDivError;
_oSelf._moDivLoading=_oDivLoading;
_oSelf._moDivWelcome=_oDivWelcome;
_oSelf._moSpanResultTitleText=_oSpanResultTitleText;
_oSelf._moDivPlaceDetail=_oDivPlaceDetail;
};
QMMap.prototype._getCityNameByLocalIp=function(){
var _oSelf=this,_oWin=_oSelf._moWin;
citylocation=new _oWin.qq.maps.CityService({complete:function(result){
_oSelf._msCity=result.detail.name.substring(0,result.detail.name.length-1);
}});
citylocation.searchLocalCity();
};
QMMap.prototype._loadTXMapJs=function(){
var _oSelf=this,_oTop=getTop(),_oMainWin=_oTop;
_oSelf._beforeLoadPrev();
_oSelf._moWin=_oMainWin;
_oMainWin.initMapCallback=function(){
};
if(_oMainWin.qq&&_oMainWin.qq.maps&&_oMainWin.qq.maps.Map)
{
_oSelf._loadPrev();
}
else{
_oTop.loadJsFile("//"+_sMapDomain+"/api/js?v=2.exp&libraries=place&key="+_sMapUnikKey+"&callback=initMapCallback",false,_oMainWin.document,function(){
_oTop.waitFor(function(){
return _oMainWin.qq&&_oMainWin.qq.maps&&_oMainWin.qq.maps.Map;
},function(_abIsOk){
if(_abIsOk)
{
_oSelf._loadPrev();
}
else{
_oTop.showError("\u52A0\u8F7D\u817E\u8BAF\u5730\u56FEjs\u5931\u8D25");
}
},1000,10000);
},{},true);
}
};
QMMap.prototype.setCenter=function(_avlocation){
var _oSelf=this,_oMainWin=_oSelf._moWin,_oDivMapContainer=_oSelf._moDivMapContainer,_oDivLocation=_oSelf._moDivLocation,_oLatLng=_oSelf.getLatLng(_avlocation),_oLocArr;
A.show(_oDivLocation,true);
_oSelf._moMarker.setPosition(_oLatLng);
_oSelf._moMap.setCenter(_oLatLng);
};
QMMap.prototype.getLatLng=function(_avlocation){
var _oSelf=this,_oMainWin=_oSelf._moWin,_oLocation=_avlocation;
if(typeof (_avlocation)=="string")
{
_oLocArr=_avlocation.split(",");
_oLocation=new _oMainWin.qq.maps.LatLng(_oLocArr[0],_oLocArr[1]);
}
return _oLocation;
};
QMMap.prototype.createMap=function(_avLatLng){
if(this._moMap)
{
return;
}
var _oSelf=this,_oMainWin=_oSelf._moWin,_oDivMapContainer=_oSelf._moDivMapContainer,_oLocation=_oSelf.getLatLng(_avLatLng),_oMap;
_oMap=_oSelf._moMap=new _oMainWin.qq.maps.Map(_oDivMapContainer,{center:_oLocation,panControl:false,disableDefaultUI:true,ZoomControl:false,minZoom:4,maxZoom:17,mapTypeControl:false,zoom:15,mapTypeId:'coordinate',mapTypeControlOptions:{mapTypeIds:['earth']},zoomControlOptions:{style:_oMainWin.qq.maps.ZoomControlStyle.SMALL}});
_oMap.mapTypes.set('earth',new ImageMapType());
_oMap.setMapTypeId('earth');
_oSelf._moMarker=new _oSelf.Marker({map:_oMap,win:_oMainWin,context:_oSelf,location:_oLocation});
new _oSelf.ZoomControl({map:_oMap,win:_oMainWin,context:_oSelf});
};
QMMap.prototype._setEvent=function(){
var _oSelf=this,_oTop=getTop(),_oMenuObj=_oSelf._moMenuObj,_oDomSearch=_oMenuObj.S("searchText"),_oDomSearchDesc=_oMenuObj.S("span_searchDesc"),_oDomPlaceDetail=_oMenuObj.S("placedetail"),_oDomNearByPlaceDetail=_oMenuObj.S("nearByPlacedetail"),_oDomResultData=_oMenuObj.S("resultData"),changePlaceholder=function(_aoEvent){
var _oTarget=_oTop.getEventTarget(_aoEvent);
if(_oDomSearch.value)
{
_oDomSearchDesc.style.display="none";
}
else{
_oDomSearchDesc.style.display="";
}
if(_aoEvent.type!=="blur")
{
_oDomSearch.focus();
}
},_oSearchBtnEvent={keydown:function(_aoEvent){
var _oTarget=A.getEventTarget(_aoEvent),_sKeyCode=_aoEvent.keyCode||0;
if(_sKeyCode==13)
{
return _oSelf._search(_oTarget.value);
}
if(_sKeyCode==27)
{
return _oSelf._callBack(_oSelf._mfOnClose);
}
},change:changePlaceholder,blur:changePlaceholder,keyup:changePlaceholder};
_oMenuObj.S("searchBtn").onclick=function(){
_oSelf._search(_oDomSearch.value);
};
A.addEvents(_oDomSearch,_oSearchBtnEvent);
A.addEvent(_oDomSearchDesc,"click",changePlaceholder);
_oMenuObj.S("span_confirm").onclick=function(){
A.show(_oSelf._moDivLoading,true);
A.show(_oSelf._moDivLocation,false);
if(_oSelf._mbIsUploading)
{
return;
}
var _oPosition=_oSelf._moMarker.getPosition(),_nZoomTemp=_oSelf._moMap.getZoom(),_oCenter=_nZoomTemp<4?_oPosition:_oSelf._moMap.getCenter(),_sCenter=[_oCenter.getLat(),",",_oCenter.getLng()].join(""),_nZoom=_nZoomTemp<4?4:_nZoomTemp,_sPosition=[_oPosition.getLat(),",",_oPosition.getLng()].join(""),_sUriEncdeKeyWord=encodeURIComponent(_oDomPlaceDetail.innerHTML),_sPoiTitle=_oTop.attr(_oDomPlaceDetail,"title"),_sUrl=["apis.map.qq.com/ws/staticmap/v2/?insertmap=1&key=",_sMapUnikKey,"&size=425*250&scale=2&center=",_sCenter,"&zoom=",_nZoom,"&markers=icon:",encodeURIComponent(_oSelf.getIconUrl("_2x")),"|label:A|",_sPosition].join("");
_oSelf._moEditor.insertImage(A.getRes("$images_path$webp/ico_loading21e9c5d.gif"),function(){
},{bIsFromMap:true,isLoading:true});
_oSelf._mbIsUploading=true;
function insertMap(_asUrl)
{
_oSelf._moEditor.insertImage(_asUrl,function(){
},{bIsFromMap:true,originUrl:_sUrl,searchkeyword:_oDomSearch.value,title:htmlEncode(_sPoiTitle),center:htmlEncode(_sCenter),zoom:_nZoomTemp,pos:htmlEncode(_sPosition),detaildesc:htmlEncode(_oDomPlaceDetail.innerHTML),sMapRedirectUrl:["http://apis.map.qq.com/uri/v1/marker?referer=qqmail&marker=coord:",_sPosition,";title:",encodeURIComponent(_sPoiTitle),";addr:",_sUriEncdeKeyWord].join("")});
}
QMAjax.send("/cgi-bin/postcard",{content:_oTop.T("sid=$sid$&layerxml=$layerxml$").replace({sid:_oTop.getSid(),layerxml:encodeURIComponent(QMMap._TEMPLATE._LAYER_XML.replace({mapurl:htmlEncode(_sUrl),title:_oTop.attr(_oDomPlaceDetail,"title"),address:_oDomPlaceDetail.innerHTML,hideTitle:_sPoiTitle?0:1}))}),method:"POST",onload:function(_abIsOk,_asReturn){
if(_abIsOk&&_asReturn.indexOf("<!--cgi exception-->")==-1)
{
insertMap(_asReturn+"&originalwidth=425&originalheight=250");
}
else{
_oTop.showError("\u63D2\u5165\u5730\u56FE\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
insertMap("badurl");
}
}});
_oMenuObj.close();
getTop().LogKV('insertmap|inserttotext|kv');
};
A.addEvent(_oMenuObj.S("allPlace"),"click",function(_aoEvent){
var _oTarget=A.getEventTarget(_aoEvent);
if(_oTarget)
{
var _sParam=_oTarget.getAttribute("param")||_oTarget.parentNode.getAttribute("param"),_oTarget=_oTarget.getAttribute("param")?_oTarget:_oTarget.parentNode,_oAddress,_sLocation,_nCurPage;
switch(_sParam)
{case "me":
if((_sLocation=_oTarget.getAttribute("sLocation"))&&_sLocation)
{
getTop().LogKV('insertmap|selectnearby|kv');
if(A.hasClass(_oTarget,"now")&&A.finds("span.trangle_top",_oSelf._moMenuObj.S("a_toogle")).length>0)
{
break;
}
if(getTop().attr(_oTarget,"idx")=="0")
{
_oSelf.toogle();
_oSelf.setCenter(_sLocation);
break;
}
_oAddress=A.finds("span",_oTarget);
if(_oAddress&&_oAddress.length>0)
{
_oSelf._saveLocation({title:_oAddress[0].innerHTML,address:_oAddress[1].innerHTML});
A.show(_oDomResultData,false);
}
_oSelf._searchMapNearBy(_sLocation.split(",")[1],_sLocation.split(",")[0],_oAddress[0].innerHTML);
_oSelf.setCenter(_sLocation);
_oSelf.toogle();
}
break;
case "toogle":
_oSelf.toogle();
getTop().LogKV('insertmap|nearby|kv');
break;
}getTop().preventDefault(_aoEvent);
}
});
function getScrollFucs(_aoContainer,_asDesc)
{
var _oControlEvent={mousewheel:function(_aoEvent){
stopPropagation(_aoEvent);
if(_aoContainer.scrollTop+calcPos(_aoContainer)[5]>=_aoContainer.scrollHeight)
{
_oSelf._pageActionForNearBy({desc:_asDesc,container:_aoContainer});
}
},DOMMouseScroll:function(_aoEvent){
_oControlEvent.mousewheel(_aoEvent);
},scroll:function(_aoEvent){
_oControlEvent.mousewheel(_aoEvent);
}};
return _oControlEvent;
}
A.addEvents(_oDomNearByPlaceDetail,getScrollFucs(_oDomNearByPlaceDetail,"nearby"));
A.addEvents(_oDomResultData,getScrollFucs(_oDomResultData,"relative"));
A.addEvent(_oDomResultData,"click",function(_aoEvent){
var _oTarget=A.getEventTarget(_aoEvent);
if(_oTarget)
{
var _sParam=_oTarget.getAttribute("param")||_oTarget.parentNode.getAttribute("param"),_oTarget=_oTarget.getAttribute("param")?_oTarget:_oTarget.parentNode,_sLocation,_sTitle,_sAddress,_oSpans,_oAddress,_nCurPage;
if(_sParam=="me")
{
if((_sLocation=_oTarget.getAttribute("sLocation"))&&_sLocation)
{
A.show(_oSelf._moDivLoading,true);
A.show(_oSelf._moSpanResultTitleText,false);
_oAddress=A.finds("span",_oTarget);
if(_oAddress&&_oAddress.length>0)
{
_sTitle=_oAddress[0].innerHTML;
_sAddress=(_oAddress[1]).innerHTML+(_oAddress[0]).innerHTML;
getTop().attr(_oDomPlaceDetail,"title",_sTitle);
_oDomPlaceDetail.innerHTML=_sAddress;
A.show(_oDomResultData,false);
}
var _oTop=getTop();
function showMap()
{
_oSelf._moCurrentPos={"title":_sTitle,"address":_sAddress,"location":_oSelf.getLatLng(_sLocation)};
_oSelf.createMap(_sLocation);
A.show(_oSelf._moDivLoading,false);
_oSelf.setCenter(_sLocation);
_oMenuObj.setHtml(_oMenuObj.S("currentPlace"),QMMap._TEMPLATE._CURRENT_ITEM.replace({title:_sTitle,address:_sAddress,location:_oSelf.getLatLng(_sLocation)}));
_oSelf._searchMapNearBy(_sLocation.split(",")[1],_sLocation.split(",")[0],_oAddress[0].innerHTML,true);
}
if(!(_oTop.qq&&_oTop.qq.maps&&_oTop.qq.maps.Map))
{
_oTop.waitFor(function(){
return _oTop.qq&&_oTop.qq.maps&&_oTop.qq.maps.Map;
},function(_abIsOk){
if(_abIsOk)
{
showMap();
}
else{
_oTop.loadJsFile("//"+_sMapDomain+"/api/js?v=2.exp&libraries=place&key="+_sMapUnikKey+"&callback=initMapCallback",false,_oTop.document,function(){
},{},true);
}
});
return;
}
showMap();
}
}
getTop().preventDefault(_aoEvent);
}
});
};
QMMap.prototype._pageActionForNearBy=function(_aoConfig,_aoRes){
if(this._mbIsLoading)
{
return;
}
var _oSelf=this,_oTop=getTop(),_oDomNearByPlaceDetail=_oSelf._moDomNearByPlaceDetail,_oContainer=_aoConfig.container,_oMainWin=_oSelf._moWin,_anCurPage=1,_sDesc=_aoConfig.desc,_oMenuObj=_oSelf._moMenuObj,_sTemp;
if(_aoRes)
{
if(_aoRes.status!=0||_aoRes.count==0)
{
_oSelf.showError("\u62B1\u6B49\uFF0C\u672A\u627E\u5230\u76F8\u5173\u5730\u5740");
}
else{
_oSelf._moNCurPage[_sDesc]=0;
_sTemp=QMMap._TEMPLATE._TABLE[_sDesc].replace({count:"",data:_aoRes.data,total:"",index:"",num:"",_nCurPage:_oSelf._moNCurPage[_sDesc]});
A.show(_oSelf._moDivError,false);
_sTemp&&_oMenuObj.setHtml(_oContainer,_sTemp);
}
}
else{
_oSelf._mbIsLoading=true;
_oSelf._moNCurPage[_sDesc]++;
_oMainWin.searchCallback=function(_aoResult){
try{
_sTemp=QMMap._TEMPLATE._TABLE[_sDesc].replace({count:"",data:_aoResult.data,total:"",index:"",num:"",_nCurPage:_oSelf._moNCurPage[_sDesc]});
A.show(_oSelf._moDivError,false);
_sTemp&&getTop().insertHTML(_oTop.finds("ul",_oContainer)[0],"beforeEnd",_sTemp);
}
catch(e)
{
}
_oSelf._mbIsLoading=false;
};
_oTop.loadJsFile(_oSelf._moUrl[_sDesc]+"&page_index="+_oSelf._moNCurPage[_sDesc],true,_oMainWin.document,"",{charset:"utf-8"},true);
}
};
QMMap.prototype.toogle=function(_abIsNotNeedAnimate){
var _oToogle=[{"classname":"trangle_top","contrast":"trangle_down","from":204,"to":0},{"classname":"trangle_down","contrast":"trangle_top","from":0,"to":204}],_oSelf=this,_oDomNearByPlaceDetail=_oSelf._moDomNearByPlaceDetail,_oMenuObj=_oSelf._moMenuObj,_oToogelDom=_oMenuObj.S("a_toogle"),_oSpans;
if((_oSpans=A.finds("span",_oToogelDom))&&_oSpans.length>0)
{
_oSpans=_oSpans[0];
A.E(_oToogle,function(_aoObj){
if(A.hasClass(_oSpans,_aoObj.classname))
{
if(_abIsNotNeedAnimate&&_aoObj.classname=="trangle_top")
{
return false;
}
A.rmClass(_oSpans,_aoObj.classname);
A.addClass(_oSpans,_aoObj.contrast);
!_abIsNotNeedAnimate&&qmAnimation.moveVerti(_oMenuObj.S("allPlace"),"move",{from:_aoObj.from,to:_aoObj.to,speed:"fast"});
return false;
}
});
}
};
QMMap.prototype._callBack=function(){
var _fCallBack=arguments[0];
if(typeof (_fCallBack)=="function")
{
var _oParam=[];
for(var i=1,_nLen=arguments.length;i<_nLen;i++)
{
_oParam.push(arguments[i]);
}
_fCallBack.apply(QMMap,_oParam);
}
};
QMMap.prototype.showError=function(_asInfo){
var _oSelf=this,_oMenuObj=_oSelf._moMenuObj,_oDivError=_oSelf._moDivError;
_oMenuObj.setHtml(_oDivError,QMMap._TEMPLATE._INFO.replace({info:_asInfo}));
A.show(_oDivError,true);
A.show(_oSelf._moDivLocation,false);
A.show(_oSelf._moDivResultDom,false);
};
QMMap.prototype._search=function(_asText){
var _oSelf=this,_oMenuObj=_oSelf._moMenuObj,_oResData=_oSelf._moDivResultDom,_oResTip=_oMenuObj.S("result"),_oDivError=_oSelf._moDivError,_oTemp=QMMap._TEMPLATE;
A.show(_oSelf._moDivWelcome,false);
A.show(_oSelf._moDivLoading,true);
A.show(_oSelf._moDivResultDom,false);
A.show(_oDivError,false);
A.show(_oResTip,false);
A.show(_oSelf._moDivLocation,false);
if(A.trim(_asText))
{
A.show(_oResTip,true);
_oSelf._searchMap(_asText);
}
else{
A.show(_oResTip,true);
A.show(_oSelf._moSpanResultTitleText,false);
_oSelf.showError("\u8BF7\u586B\u5199\u5173\u952E\u5B57\u540E\u518D\u641C\u7D22");
A.show(_oSelf._moDivLoading,false);
}
};
QMMap.prototype._searchMap=function(_asPlaceName){
var _oSelf=this,_oTop=getTop(),_sUrl,_oMainWin=_oSelf._moWin||_oTop;
_oMainWin.searchCallback=function(_aoResult){
var _oResData=_oSelf._moMenuObj.S("resultData");
try{
A.show(_oSelf._moDivLoading,false);
A.show(_oSelf._moSpanResultTitleText,true);
A.show(_oResData,true);
_oSelf._moResult.relative=_aoResult;
_oSelf._pageActionForNearBy({desc:"relative",container:_oResData},_aoResult);
}
catch(e)
{
_oTop.showError("\u5730\u5740\u83B7\u53D6\u5931\u8D25...");
}
getTop().LogKV('insertmap|search|kv');
var _bIsHasContain=false;
for(k in _oKeywordKvObj)
{
if(_asPlaceName.indexOf(_oKeywordKvObj[k])>-1||_asPlaceName.indexOf(k)>-1)
{
getTop().LogKV('insertmap|searchkeyword|'+k+'|kv');
_bIsHasContain=true;
}
}
if(!_bIsHasContain)
{
getTop().LogKV('insertmap|searchkeyword|none|kv');
}
};
_oSelf._moUrl["relative"]=_sUrl="//apis.map.qq.com/ws/place/v1/search?callback=searchCallback&output=jsonp&boundary=region("+encodeURIComponent(_oSelf._msCity)+",1)&page_size=20&orderby=_distance&key="+_sMapUnikKey+"&keyword="+encodeURIComponent(_asPlaceName);
_oTop.loadJsFile(_sUrl+"&page_index=1",true,_oMainWin.document,"",{charset:"utf-8"},true);
};
QMMap.prototype._convertData=function(_aoData,_asTitle,_abIsFromCkSearchBar){
var _oSelf=this,_oResult,_oTemp;
if(_aoData.status=="0"&&(_oResult=_aoData.data))
{
for(i in _oResult)
{
if(_oResult[i].title==_asTitle)
{
if(i==0)
{
_oTemp=_oResult[0];
break;
}
_oTemp=_oResult[0];
_oResult[0]=_oResult[i];
_oResult[i]=_oTemp;
break;
}
}
if(!_oTemp&&_abIsFromCkSearchBar)
{
_oResult.unshift(_oSelf._moCurrentPos);
_aoData.count+=1;
}
}
return _aoData;
};
QMMap.prototype._saveLocation=function(_aoSingle){
var _oSelf=this,_oTop=getTop();
_oTop.attr(_oSelf._moDivPlaceDetail,"title",_aoSingle.title||"");
_oSelf._moDivPlaceDetail.innerHTML=_aoSingle.address;
};
QMMap.prototype._searchMapNearBy=function(_anLng,_anLat,_asTitle,_abIsFromCkSearchBar){
var _oSelf=this,_oTop=getTop(),_sUrl,_oMenuObj=_oSelf._moMenuObj,_oMainWin=_oSelf._moWin;
_oMainWin.searchCallback=function(_aoResult){
try{
var _oSingle;
if(_asTitle)
{
_oSelf._moResult.nearby=_oSelf._convertData(_aoResult,_asTitle,_abIsFromCkSearchBar);
if((_oSingle=_oSelf._moResult.nearby.data)&&_oSingle.length>0&&(_oSingle=_oSingle.shift()))
{
_oSelf._saveLocation(_oSingle);
}
_oMenuObj.setHtml(_oMenuObj.S("currentPlace"),QMMap._TEMPLATE._CURRENT_ITEM.replace(_oSingle));
}
else{
_oSelf._moResult.nearby=_aoResult;
}
_oSelf._pageActionForNearBy({desc:"nearby",container:_oSelf._moDomNearByPlaceDetail},_oSelf._moResult.nearby);
}
catch(e)
{
_oTop.showError("\u5730\u5740\u83B7\u53D6\u5931\u8D25...");
}
};
_oSelf._moUrl["nearby"]=_sUrl="//apis.map.qq.com/ws/place/v1/search?callback=searchCallback&output=jsonp&boundary=nearby("+_anLat+","+_anLng+",1000)&page_size=20&orderby=_distance&key="+_sMapUnikKey;
_oTop.loadJsFile(_sUrl+"&page_index=1",true,_oMainWin.document,"",{charset:"utf-8"},true);
};
QMMap._TEMPLATE={_DIVHTML:A.TE(['<div unselectable="on" class="qmEdMap">','<div class="qmEdMap_head" unselectable="on">','<div class="qmEdMap_search" unselectable="on">','<input id="searchText" class="qm_addinput" type="text" onmousedown="try{stopPropagation(event);}catch(e){getTop().stopPropagation(event);}"><a id="searchBtn" class="button_gray_s">\u641C\u7D22</a>','<span id="span_searchDesc" class="qmEdMap_searchPlaceholder">\u4F8B\u5982\uFF1A\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u6E05\u534E\u5927\u5B66</span>','</div>','</div>','<div class="qmEdMap_body">','<div id="result" class="qmEdMap_resultTitle" unselectable="on" style="display:none"><span id="span_resultTitleText" class="qmEdMap_resultTitleText">\u641C\u7D22\u7ED3\u679C</span></div>','<div id="div_loading" class="qmEdMap_resultLoading" style="display:none">','<img src="$images_path$webp/ico_loading21e9c5d.gif" alt="" title="" />','</div>','<div id="resultData" class="qmEdMap_resultList" style="display:none;">','</div>','<div id="placedetail" class="qmEditorMusicData" style="display:none" ></div>','<div id="div_location" class="qmEdMap_resultLocation" style="display: none;">','<div class="qmEdMap_resultMap">','<div id="mapContainer" style="height:250px;"></div>','<div id="allPlace" class="qmEdMap_resultMapList" style="top: 204px;">','<div id="currentPlace" class="qmEdMap_resultItem_MapWrap qmEdMap_resultItem_MapWrap_Curr"></div>','<div class="qmEdMap_resultItem_MapWrap">','<div class="mask"></div>','<div id="nearByPlacedetail" class="listWrap"></div>','</div>','</div>','</div>','<a id="span_confirm" href="javascript:void(0);" class="qmEdMap_resultAddBtn">\u63D2\u5165\u5730\u56FE\u5230\u6B63\u6587</a>','</div>','<div id="div_error" class="qmEdMap_resultEmpty" style="display: none;" unselectable="on">','<span class="qmEdMap_resultEmptyTips">\u62B1\u6B49\uFF0C\u672A\u627E\u5230\u76F8\u5173\u5730\u5740</span>','</div>','</div>','<div id="div_welcome" class="qmEdMap_bg"></div>','</div>']),_CURRENT_ITEM:A.TE(['<div class="mask"></div>','<ul>','<li class="qmEdMap_resultItem qmEdMap_resultItem_Map qmEdMap_resultItem_Map_First">','<a id="a_toogle" href="javascript:void(0);" class="more" param="toogle" title="\u9644\u8FD1\u4FE1\u606F">','<span class="trangle trangle_top"></span>','</a>','<a  href="javascript:void(0);" class="now" idx="0"',' param="me" sLocation="$location.lat$,$location.lng$" ','><span class="title">$title$</span>','<span class="text" title="$address$">$address$</span>','</a></li>','</ul>']),_TABLE_INFO:A.TE(['$@$if($_nCurPage$==0)$@$<ul>$@$endif$@$','$@$for($data$)$@$','<li class="qmEdMap_resultItem"><a href="javascript:void(0);" param="me" sLocation="$location.lat$,$location.lng$">','<span class="title" >$title$$@$if($type$&&$type$=="1")$@$-\u516C\u4EA4\u7AD9$@$else if($type$&&$type$=="2")$@$-\u5730\u94C1\u7AD9$@$endif$@$</span>','<span class="text" title="','$address$','">','$address$','</span>','</a></li>','$@$endfor$@$','$@$if($_nCurPage$==0)$@$</ul>$@$endif$@$']),_TABLE_NEARBY:A.TE(['$@$if($_nCurPage$==0)$@$<ul>$@$endif$@$','$@$for($data$)$@$','<li class="qmEdMap_resultItem qmEdMap_resultItem_Map">','<a  href="javascript:void(0);" param="me" sLocation="$location.lat$,$location.lng$">','<span class="title">$title$</span>','<span class="text" title="','$@$if($type$&&$type$!="0")$@$','$province$$city$$district$','$@$else$@$','$address$','$@$endif$@$','">','$@$if($type$&&$type$!="0")$@$','$province$$city$$district$','$@$else$@$','$address$','$@$endif$@$','</span>','</a>','</li>','$@$endfor$@$','$@$if($_nCurPage$==0)$@$</ul>$@$endif$@$']),_INFO:A.T(['<span class="qmEdMap_resultEmptyTips">$info$</span>']),_NOTFOUND:A.T(['\u62B1\u6B49\uFF0C\u627E\u4E0D\u5230\u4E0E"<font style="color:red;">$keyword$</font>"\u76F8\u7B26\u7684\u5185\u5BB9\u3002</div>']),_INSERTIMG:A.T(['<a href="$sMapRedirectUrl$" target="_blank"><img src="$sImgUrl$"></a>']),_NEARBY:A.TE(['<div class="nearby_item">','$result.formatted_addresses.rough$-$result.address$','<span style="display:none">$result.location.lat$,$result.location.lng$</span>','</div>','$@$for($result.address_reference$)$@$','<div class="nearby_item">$title$$_dir_desc$','<span style="display:none">$location.lat$,$location.lng$</span>','</div>','$@$endfor$@$','$@$for($result.pois$)$@$','<div class="nearby_item">$title$-$address$','<span style="display:none">$location.lat$,$location.lng$</span>','</div>','$@$endfor$@$']),_MAP_INFO:A.TE(['$@$if($isIE$!=true)$@$<div><br/></div>$@$endif$@$','<a href="$sMapRedirectUrl$" onmousedown="this.setCapture&&this.setCapture();return false;" onmouseup="this.releaseCapture&&this.releaseCapture();return false;" target="_blank" ui-type="share_map" notForEdit="true" style="display: inline-block;position: relative;width: 425px;height: 250px;border: 1px solid #b0b0b0;text-decoration: none;">','<img class="share_map" alt="" title="" border="0" style="width:425px;height:250px">','<div class="share_map" contenteditable="false" style="$@$if($hideTitle$==1)$@$height:18px;$@$else$@$height:36px;$@$endif$@$cursor: default;position: absolute;bottom: 0;left: 0;width: 100%;padding: 4px 0;line-height: 18px;border-top: 1px solid #505050;">','<div style="$@$if($hideTitle$==1)$@$height:26px;$@$else$@$height:44px;$@$endif$@$position: absolute;top: 0;left: 0;bottom: 0;right: 0;width: 100%;background: #000;opacity: .8;-moz-opacity: .8;filter: Alpha(Opacity=80);-ms-filter: alpha(opacity=80);"></div>','<div style="position: relative;">','$@$if($hideTitle$!=1)$@$<span style="display: block;width: 405px;height: 18px;line-height: 18px;font-size: 12px;margin: 0 auto;color: #fff;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow: ellipsis;word-break: break-all;">$title$</span>$@$endif$@$','<span style="display: block;width: 405px;height: 18px;line-height: 18px;font-size: 12px;margin: 0 auto;color: #d0d0d0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow: ellipsis;word-break: break-all;" title="$address$">$address$</span>','</div>','</div>','<img class="share_map_loading" src="$image_path$" alt="" width="32" height="32" style="position: absolute;top: 50%;left: 50%;margin: -16px 0 0 -16px;">','</a>','$@$if($isIE$!=true)$@$&nbsp<div><br/></div>$@$else$@$<br/>$@$endif$@$']),_LAYER_XML:A.TE(['<postcard>','<layer left="0" top="0" width="850" height="500">','<layer left="0" top="0" width="850" height="500">','<image type="url" composite="" left="0" top="0" zoomwidth="0" zoomheight="0" realwidth="850" realheight="500" url="$mapurl$"/>','</layer>','<layer left="0" $@$if($hideTitle$!=1)$@$top="412" height="88"$@$else$@$top="448" height="52"$@$endif$@$ width="850">','<shade color="#000000" opacity="0.8" />','</layer>','$@$if($hideTitle$!=1)$@$','<layer left="20" top="415" width="850" height="36">','<text family="" font="msyh" size="24" color="#FFFFFF" lineheight="">','<![CDATA[$title$]]>','</text>','</layer>','$@$endif$@$','<layer left="20" top="450" width="850" height="36">','<text family="" font="msyh" size="24" color="#D0D0D0" lineheight="">','<![CDATA[$address$]]>','</text>','</layer>','</layer>','</postcard>']),_ZOOM_CONTROL_:A.T(['<div class="qmEdMap_resultMapControl"><a class="qmEdMap_resultMapControl_btn qmEdMap_resultMapControl_btn_Increase" id="a_enlarge"><a/><a class="qmEdMap_resultMapControl_btn qmEdMap_resultMapControl_btn_Decrease"      id="a_narrow"></a></div>'])};
QMMap._TEMPLATE._TABLE={"relative":QMMap._TEMPLATE._TABLE_INFO,"nearby":QMMap._TEMPLATE._TABLE_NEARBY};
window.QMMap=QMMap;
})(QMEditorAdapter);
QMEditor.FUNCLIB.More=QMEditor.FUNCLIB.inheritFrom(function(_aoParamSet){
if(!_aoParamSet)
{
return;
}
this.setBindEditor(_aoParamSet.editor);
this._moParamSet=_aoParamSet;
var _oSelf=this,_oTop=getTop(),_oEditor=_oSelf.getBindEditor(),_oLang=_oEditor.getLanguage(),_oMoreMethods=_oSelf._moMoreMethods=[];
var _sSUrl=getTop().getUrlParams(getTop().getMainWin().location.href).s;
if(_aoParamSet.editor.getEditorId()=="compose")
{
}
else if(_aoParamSet.editor.getEditorId()=="group"&&_sSUrl!='reply'&&_sSUrl!='reference')
{
_oSelf._moMoreMethods.push({sId:"vote",sItemValue:'<span class="editor_btn_text qmEditorVote ">\u6295\u7968</span>'});
}
_oSelf._moMoreMethods.push({sId:"map",sItemValue:'<span class="editor_btn_text qmEditorMap ">\u5730\u56FE</span>'});
_oSelf.setId("More");
this.setUiConfig({width:84,itemHeight:21,title:_oLang.FUN_MORE_LABEL,label:_oLang.FUN_MORE_LABEL});
},QMEditor.FUNCLIB.MENU);
QMEditor.FUNCLIB.More.prototype.getMenuItems=function(_aoMenuCfg){
var _oSelf=this;
getTop().LogKV('morefunc|entrance|kv');
if(_aoMenuCfg)
{
_aoMenuCfg.nWidth=84;
return _oSelf._moMoreMethods;
}
else{
return _oSelf._moMoreMethods;
}
};
QMEditor.FUNCLIB.More.prototype.initMenu=function(_aoMenu,_aoMenuCfg){
var _oSelf=this;
_oSelf.getBindEditor().getEditorId()=="compose"&&(_oSelf._oMusic=_oSelf.getFuncObj("Music"));
};
QMEditor.FUNCLIB.More.prototype.getFuncObj=function(_asFuncName){
var _oSelf=this;
return new QMEditor.FUNCLIB[_asFuncName]({oParamSet:_oSelf._moParamSet,editor:_oSelf._moParamSet.editor,uiType:"text",container:_oSelf._moContainer});
};
QMEditor.FUNCLIB.More.prototype.doItemClick=function(_asValue){
var _oSelf=this,_oFuncObj;
switch(_asValue)
{case "music":
_oFuncObj=_oSelf._oMusic;
break;
case "map":
_oFuncObj=_oSelf._moParamSet.editor.getMapFunc();
_oFuncObj._doDefaultClick.call(_oFuncObj);
_oFuncObj=undefined;
getTop().LogKV('insertmap|entrance|kv');
break;
case "vote":
getTop().getMainWin().createvote();
getTop().LogKV('morefunc|vote|entrance|kv');
break;
}if(!_oFuncObj)
{
return;
}
if(_oSelf._moBindEditor.changeEditMode)
{
_oSelf._moBindEditor.changeEditMode("html");
}
_oFuncObj._doShowMenuClick.call(_oFuncObj,arguments[3]);
};
if(getTop().getLocale()=="zh_CN")
{
QMEditor.FUNCLIB.NetDisk=QMEditor.FUNCLIB.inheritFrom(function(_aoParamSet){
var _oSelf=this;
_oSelf.setId("NetDisk");
_oSelf.setType("btn");
_oSelf.setBindEditor(_aoParamSet.editor);
var _oEditor=_oSelf.getBindEditor(),_oLang=_oEditor.getLanguage();
_oSelf.setUiConfig({title:_oLang.FUN_NETDISK,label:_oLang.FUN_NETDISK_LABEL});
_oSelf.setfDoDefaultClick(this._dofaultClick);
},QMEditor.FUNCLIB.MENU);
QMEditor.FUNCLIB.NetDisk.prototype.init_=function(){
var A=QMEditorAdapter,_oSelf=this,_oEditor=_oSelf.getBindEditor(),_oTop=QMEditor.getTopWin(),_oContainer=_oSelf.getContainer();
_oContainer.style.display="none";
A.waitFor(function(){
return _oTop.goUserInfo.get("NetDisk")&&typeof (_oTop.goUserInfo.get("NetDisk").bIsSpread)=="boolean";
},function(_abIsOk){
_abIsOk&&_oTop.goUserInfo.get("NetDisk").bIsSpread&&_oTop.loadJsFile("$js_path$webp/qmnetdisk35aeaf.js",true,_oTop.document,function(){
_oContainer.id="netdisk_compose_tip";
_oTop.QMNetDisk.route("tips","compose",_oContainer);
_oTop.QMNetDisk.addEvent(_oTop.QMNetDisk.EVENT.SELECT,function(_aoFileList){
_aoFileList.length&&this.sharelink.get(_aoFileList,{oninit:function(_aoList){
_oEditor.insertNetDiskFile(_aoList,function(){
});
},onsuccess:function(_aoList){
debug("onsuccess");
_oEditor.updateNetDiskFile(true,_aoList,function(){
});
},onfailed:function(_aoList,_asErrmsg,_aoXhr){
debug("onfailed");
_oEditor.updateNetDiskFile(false,_aoList,function(){
});
},oncomplete:function(){
debug("oncomplete");
}});
});
});
});
};
QMEditor.FUNCLIB.NetDisk.prototype._toggleIcon=function(_abIsShow){
var A=QMEditorAdapter,_oDoc=this.getContainer().ownerDocument;
if(_abIsShow)
{
!A.hasClass(_oDoc.body,"editor_netdisk_open")&&A.addClass(_oDoc.body,"editor_netdisk_open");
}
else{
A.hasClass(_oDoc.body,"editor_netdisk_open")&&A.rmClass(_oDoc.body,"editor_netdisk_open");
}
};
QMEditor.FUNCLIB.NetDisk.prototype._dofaultClick=function(_aoEvent){
var _oEditor=this.getBindEditor();
_oEditor.hideMenu();
QMEditor.getTopWin().QMNetDisk.route("dropMenu",this.getContainer());
};
}
QMEditor.setupFunc();
})(QMEditorAdapter);
;(function(a,d){
var c=QMEditor.getTopWin();
a.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_WORD:'\u5BFC\u5165\u6587\u6863',FUN_WORD_LABEL:'\u6587\u6863',FUN_WORD_IMPORT_TITLE:'\u5BFC\u5165\u6587\u6863',FUN_WORD_IMPORT_BODY:'\u6B63\u5728\u5BFC\u5165\u2026',FUN_WORD_ERROR_MULTI:'\u4E0D\u652F\u6301\u6279\u91CF\u5BFC\u5165',FUN_WORD_ERROR_FILEINFO:'\u6587\u4EF6\u8DEF\u5F84\u8BC6\u522B\u9519\u8BEF\u6216\u8D85\u51FA\u5927\u5C0F\u9650\u5236',FUN_WORD_ERROR_FILESIZE_OVERFLOW:'\u6587\u4EF6\u8FC7\u5927\uFF0C\u65E0\u6CD5\u5BFC\u5165',FUN_WORD_ERROR_FILESIZE_ZERO:'\u4E0D\u80FD\u5BFC\u5165\u7A7A\u6587\u6863',FUN_WORD_ERROR_FILESIZE_OVERFLOW_TXT:'\u8BFB\u53D6\u6587\u6863\u5185\u5BB9\u5931\u8D25\uFF0C\u6682\u65E0\u6CD5\u5BFC\u5165',FUN_WORD_ERROR_GETCONTENT:'\u8BFB\u53D6\u6587\u6863\u5185\u5BB9\u5931\u8D25\uFF0C\u6682\u65E0\u6CD5\u5BFC\u5165',FUN_WORD_ERROR_SELECTFILE:'\u4E0A\u4F20\u5931\u8D25 \u8BF7\u91CD\u8BD5',FUN_WORD_ERROR_NOTSUPPERTYPE:'\u6682\u4E0D\u652F\u6301\u5BFC\u5165\u8FD9\u79CD\u6587\u6863\u683C\u5F0F',FUN_WORD_ERROR_UPLOAD:'\u4E0A\u4F20\u6587\u6863\u5931\u8D25',FUN_WORD_ERROR_EDITORTYPE:'\u6587\u672C\u7F16\u8F91\u5668\u4E0D\u652F\u6301\u5BFC\u5165',FUN_WORD_ERROR_CGI_9006:'\u6587\u6863\u88AB\u52A0\u5BC6\uFF0C\u5BFC\u5165\u5931\u8D25',FUN_WORD_ERROR_CGI_TIMEOUT:'\u52A0\u8F7D\u8D44\u6E90\u8D85\u65F6',FUN_WORD_ERROR_CGI_NOCONTENT:'\u8BFB\u53D6\u6587\u6863\u5185\u5BB9\u5931\u8D25\uFF0C\u6216\u6587\u6863\u5185\u5BB9\u4E3A\u7A7A',FUN_WORD_ERROR_NOCONTENT:'\u8BFB\u53D6\u6587\u6863\u5185\u5BB9\u5931\u8D25\uFF0C\u6216\u6587\u6863\u5185\u5BB9\u4E3A\u7A7A',FUN_WORD_ERROR_PARTFILEERR:'\u8BFB\u53D6\u6587\u6863\u5185\u5BB9\u5931\u8D25',FUN_WORD_ERROR_CGI_UNDEFINED:'\u672A\u77E5\u9519\u8BEF\uFF0C\u83B7\u53D6\u6587\u6863\u4FE1\u606F\u5931\u8D25',FUN_WORD_ADDED_FILECELL:'\u5DF2\u5C06\u6587\u6863\u6DFB\u52A0\u4E3A\u9644\u4EF6'});
a.extend(QMEditor.CONST.getTemplate(),{DIALOG_WORD_UPLOAD:a.T(['<div style="text-align:center;padding:58px; padding-bottom:78px;">','<img src="$images_path$webp/ico_loading21e9c5d.gif" style="position:relative; top: 12px;"> $say_uploading$ <span id="percent"></span>','</div>'])});
var b=QMEditor.FUNCLIB.Word=QMEditor.FUNCLIB.inheritFrom(function(e){
var h=this;
h.setId("Word");
h.setType("btn");
h.setBindEditor(e.editor);
var f=h.getBindEditor(),g=f.getLanguage();
h.setUiConfig({title:g.FUN_WORD,label:g.FUN_WORD_LABEL});
h.setfDoDefaultClick(this._dofaultClick);
e.container.onmousedown=function(){
getTop().LogKV("compose|toolbar|entrance|word");
};
},QMEditor.FUNCLIB.BASE);
b.prototype.init_=function(){
var h=this,e=h.getContainer();
e.style.position="relative";
e.id='editor_word_compose_tip';
var g=e.firstChild;
c.QMFileUpload.create('popup',h._getUploadCfg(g));
if(h.getUiType()=='icon')
{
var f=g.getElementsByTagName('input');
if(f.length&&f[0].type=='file')
{
g.style.cursor=f[0].style.cursor='default';
}
}
};
b.prototype._dofaultClick=function(){
};
b.prototype._checkFileType=c.isSupportImportWord;
b.prototype._nMaxFileSize=50*1024*1024;
b.prototype._nMaxTxtFileSize=1024*1024;
b.prototype._getUploadingDialog=function(e){
var h=this;
var f=h.getBindEditor();
var g=f.getLanguage();
if(h._moUploadingDialog&&!e)
{
return h._moUploadingDialog;
}
h._moUploadingDialog=new c.QMDialog({'sTitle':g.FUN_WORD_IMPORT_TITLE,'sId':'editor_func_word_upload','sBodyHtml':f.getTemplate().DIALOG_WORD_UPLOAD.replace({images_path:c.getPath("image"),say_uploading:g.FUN_WORD_IMPORT_BODY}),'onclose':function(){
if(h._moCurUploadFile)
{
h._moCurUploadFile.cancel();
}
c.qmAnimation.stop(h._getUploadingDialog().getPanelDom());
}});
return h._moUploadingDialog;
};
b.prototype._getUploadCfg=function(e){
var g=this;
var f=g.getBindEditor();
return {onselect:function(h){
if(f.getEditorCustomVar('FullScreenToolbar.bUseFullEdtior'))
{
c.LogKV({sValue:'editor|toolbar|fullscreen|word'});
}
c.ossLog('delay','all','stat=import_word&type=editor|init');
if(!g._checkEditorType())
{
return;
}
if(h.length==1)
{
var j=h[0];
var n=j.get('sName')||'';
if(j.get('nSize')>g._nMaxFileSize)
{
return g._showError('FUN_WORD_ERROR_FILESIZE_OVERFLOW');
}
if(j.get('nSize')===0)
{
return g._showError('FUN_WORD_ERROR_FILESIZE_ZERO');
}
if(j.get('nSize')<0)
{
return g._showError('FUN_WORD_ERROR_FILEINFO');
}
if(c.getFileTypeByExt(c.getFileExt(n))=='txt'&&j.get('nSize')>g._nMaxTxtFileSize)
{
return g._showError('FUN_WORD_ERROR_FILESIZE_OVERFLOW_TXT');
}
if(g._checkFileType(n))
{
if(this.upload(j))
{
var l=g._getUploadingDialog(true).S('percent');
l.style.display=/Flash|Ftn|Html5|Activex/.test(j.uploader().name)?'inline':'none';
g._moCurUploadFile=j;
g._mnUploadPercent=0;
}
else{
g._showError('FUN_WORD_ERROR_SELECTFILE');
}
}
else{
var m=n.match(/\.([\w\d]+)$/);
m=m?m[1].toLowerCase():'blank';
c.ossLog('delay','all','stat=import_word&type=editor|init_error|try_type');
c.ossLog('delay','all','stat=import_word&type=editor|init_error|try_type|'+m);
g._showError('FUN_WORD_ERROR_NOTSUPPERTYPE');
}
}
else{
c.ossLog('delay','all','stat=import_word&type=editor|init_error|multi_select');
g._showError('FUN_WORD_ERROR_MULTI');
}
},onprocess:function(h){
if(h.get('bChipFile'))
{
var j=h.get('sUploadStep');
if(j=='signing')
{
g._renderPercent(h.get('nSignPercent')*0.1);
}
else if(j=='posting')
{
g._renderPercent(10+h.get('nPercent')*0.6);
}
}
else{
g._renderPercent(h.get('nPercent')*0.7);
}
},oncomplete:function(h){
g._getFileContent(h);
},onerror:function(h){
g._showError('FUN_WORD_ERROR_UPLOAD');
c.ossLog('delay','all','stat=import_word&type=editor|input_error|upload_error');
},oContainer:e,oComlist:g.getUiType()=='icon'?c.QMFileUpload.create.oCreaterInstance.orders.noflashPopup:null};
};
b.prototype._getFileContent=function(e){
var j=this;
var g=j.getBindEditor();
var h=g.getLanguage();
function m(n)
{
j._addFileCell(e);
j._showError([h[n]||n,', ',h.FUN_WORD_ADDED_FILECELL].join(''));
}
var f=j._getUploadingDialog();
if(f.isClose())
{
return;
}
c.qmAnimation.play(f.getPanelDom(),{win:g.getEditorAreaWin(),from:j._mnUploadPercent,to:97,speed:12000,basespeed:1.3,tween:"Sine",easing:"easeOut",onaction:function(n){
j._renderPercent(n);
},oncomplete:function(){
j._renderPercent(97);
}});
var l=c.getPreviewView(e)+'&filter=false';
if(l.indexOf('&filetype=pdf&')!=-1)
{
l+='&firstpage=1&lastpage=999';
}
c.QMAjax.send(l,{timeout:20000,onload:function(n,o){
if(!f.isClose())
{
if(n&&o&&(''+o).indexOf('<!--cgi exception-->')!==0)
{
if(!c.trim(o))
{
m('FUN_WORD_ERROR_CGI_NOCONTENT');
return;
}
if(o.indexOf("qmbox")==-1)
{
if(l.indexOf('/cgi-bin/readtemplate')!=-1)
{
j._addContent(e,o,l.indexOf('&filetype=html')==-1);
return;
}
var p=c.evalValue(o);
if(p.ret)
{
if(p.ret=="-9006")
{
m('FUN_WORD_ERROR_CGI_9006');
}
else{
m('FUN_WORD_ERROR_CGI_UNDEFINED');
}
return;
}
}
if(!j._checkEditorType())
{
return j._addFileCell(e);
}
c.getOfficeRealContent(o,{onload:function(q,r){
if(q)
{
j._addContent(e,r);
}
else{
switch(r)
{case 'NoContent':
m('FUN_WORD_ERROR_NOCONTENT');
break;
case 'PartFileError':
m('FUN_WORD_ERROR_PARTFILEERR');
break;
case 'Timeout':
m('FUN_WORD_ERROR_CGI_TIMEOUT');
break;
default:
m('FUN_WORD_ERROR_CGI_UNDEFINED');
}c.ossLog('delay','all','stat=import_word&type=editor|input_error|office_read');
}
}});
}
else{
m('FUN_WORD_ERROR_GETCONTENT');
c.ossLog('delay','all','stat=import_word&type=editor|input_error|cgi'+(n?'_http':'_err'));
}
}
}});
};
b.prototype._showError=function(e){
var h=this;
var f=h.getBindEditor();
var g=f.getLanguage();
h._moUploadingDialog&&h._moUploadingDialog.close();
c.showError(g[e]||e);
};
b.prototype._renderPercent=function(e){
var f=e&&Number(e);
if(f)
{
var g=this._getUploadingDialog().S('percent');
this._mnUploadPercent=f;
g.innerHTML=Math.floor(f)+'%';
}
};
b.prototype._addContent=function(f,g,e){
var l=this;
var j=l.getBindEditor();
if(!l._checkEditorType())
{
return l._addFileCell(f);
}
if(c.appendEditorFileContent(g,j,e)!==true)
{
l._showError('FUN_WORD_ERROR_FILESIZE_OVERFLOW_TXT');
return l._addFileCell(f);
}
var h=l._getUploadingDialog();
c.qmAnimation.stop(h.getPanelDom());
l._renderPercent(100);
var m=h.option('onclose');
h.option('onclose',function(){
c.ossLog('delay','all','stat=import_word&type=editor|succ');
c.showInfo('\u5BFC\u5165\u6210\u529F\u3002<a href="javascript:;">[\u5C06\u6587\u6863\u6DFB\u52A0\u4E3A\u9644\u4EF6]</a>');
c.S('msgBoxDIV',c).getElementsByTagName('a')[0].onclick=function(){
try{
var n=c.getMainWin();
n.setNeedCloseConform(false);
l._addFileCell(f);
n.setNeedCloseConform(true);
c.hiddenMsg();
}
catch(o)
{
c.showError('\u6DFB\u52A0\u9644\u4EF6\u5931\u8D25');
}
return false;
};
return c.callBack.call(this,m,arguments);
});
h.close();
};
b.prototype._addFileCell=function(e){
c.getMainWin().QMAttach.addOtherUploaderFileCell(e);
};
b.prototype._checkEditorType=function(){
var f=this;
var e=f.getBindEditor().getCurrentEditor();
if(e.getContentType()!='html')
{
f._showError('FUN_WORD_ERROR_EDITORTYPE');
c.ossLog('delay','all','stat=import_word&type=editor|input_error|editor_type');
return false;
}
return true;
};
QMEditor.setupFunc();
})(QMEditorAdapter);
;(function(a,l){
var j=QMEditor.getTopWin();
a.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_FORMATMATCH:'\u683C\u5F0F\u5237',FUN_FORMATMATCH_LABEL:'\u683C\u5F0F\u5237'});
var b=QMEditor.FUNCLIB.FormatMatch=QMEditor.FUNCLIB.inheritFrom(function(m){
var p=this;
p.setId("FormatMatch");
p.setType("btn");
p.setBindEditor(m.editor);
var n=p.getBindEditor(),o=n.getLanguage();
p.setUiConfig({title:o.FUN_FORMATMATCH,label:o.FUN_FORMATMATCH_LABEL});
p.setfDoDefaultClick(this._dofaultClick);
},QMEditor.FUNCLIB.BASE);
b.prototype.init_=function(){
var o=this,n=o.getBindEditor(),m=o.getContainer();
if(!window.getSelection)
{
j.show(m,false);
}
else{
j.addClass(m,'opa50');
j.loadJsFileToTop(['$js_path$webp/com/kits/qmeditor/qqmail/release/editor_toolbar_ext250c75.js']);
a.waitFor(function(){
return j.QMEditorExt;
},function(p){
if(p)
{
j.rmClass(m,'opa50');
m.title=['\u683C\u5F0F\u5237\u7528\u6CD5\uFF1A','1. \u9009\u4E2D\u5177\u6709\u76EE\u6807\u683C\u5F0F\u7684\u5185\u5BB9','2. \u5355\u51FB\u683C\u5F0F\u5237','3. \u518D\u9009\u4E2D\u5176\u5B83\u5185\u5BB9\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u4F1A\u81EA\u52A8\u5E94\u7528\u76EE\u6807\u683C\u5F0F','','\u63D0\u793A\uFF1A\u6B65\u9AA42\u4E2D\u82E5\u53CC\u51FB\u683C\u5F0F\u5237\uFF0C\u53EF\u8FDE\u7EED\u6267\u884C\u6B65\u9AA43\u3002'].join('\n');
new c(o);
}
});
}
};
b.prototype._dofaultClick=function(){
};
var f=['font-size','font-family','color','text-decoration','background-color','font-weight','font-style'];
var h={};
var d=function(m){
return m.replace(/-(\w)/,function(n,o){
return o.toUpperCase();
});
};
j.E(f,function(m){
h[m]=d(m);
});
var e=['-webkit-box','-moz-box','block','list-item','table','table-row-group','table-header-group','table-footer-group','table-row','table-column-group','table-column','table-cell','table-caption'];
var g={};
j.E(e,function(m){
g[m]=true;
});
function c(m)
{
this._moToolBar=m;
this._init();
}
c.prototype={_oStyleList:h,_sWarpNodeMarker:'__editorWarp__',_getBrowerStyle:function(n,o,m){
if(!m&&(o=='text-decoration'||o=='textDecoration'))
{
var p=8,r='',q=n;
while(q&&p--)
{
r=a.getStyle(q,o);
if(r.indexOf('none')==-1)
{
return r.split(' ')[0];
}
q=q.parentNode;
}
return r.split(' ')[0];
}
return a.getStyle(n,o);
},_getBindEditor:function(){
return this._moToolBar.getBindEditor();
},_getWin:function(){
return this._getBindEditor().getEditWin();
},_init:function(){
var m=this;
var n=m._getWin();
m._clearFormat();
j.evalCss('.cursor_formatMatch{cursor:url('+a.getRes('$images_path$../js/com/kits/qmeditor/base/images/newicon/cursor_format1e9c5d.cur')+'), text;}',n);
m._initEvent();
},_isBlockElement:function(m){
return m.nodeType==1&&g[a.getStyle(m,'display')];
},_getNodeText:function(o,n,m){
var r=this;
while(n)
{
if(n.nodeType==3||n.tagName=='BR')
{
o.appendChild(n.cloneNode(false));
}
else if(n===m)
{
return false;
}
else if(n.tagName=='A')
{
var p=r._createWarpNode('a');
p.style.display=a.getStyle(n,'display');
p.href=n.href;
var s=r._resertLineNodeWarp2(n.firstChild,m,p,o);
if(!s)
{
return false;
}
}
else if(r._isBlockElement(n))
{
var p=n.cloneNode(false);
p.style.display=a.getStyle(n,'display');
var s=r._resertLineNodeWarp2(n.firstChild,m,p,o);
if(!s)
{
return false;
}
}
else if(QMSelection.isBookmarkNode(n))
{
n=n.nextSibling;
continue;
}
else{
var s=r._getNodeText(o,n.firstChild,m);
if(!s)
{
return s;
}
}
var q=n;
n=n.nextSibling;
a.removeSelf(q);
}
return true;
},_resertLineNodeWarp:function(n,m){
var o=this;
var q=o._createWarpNode();
var p=o._createTempNode(n);
var r=o._getNodeText(q,n,m);
if(q.firstChild)
{
o._ajustFormat(q);
p.parentNode.insertBefore(q,p);
}
a.removeSelf(p);
return r;
},_resertLineNodeWarp2:function(o,m,p,n){
var q=this;
var r=q._getNodeText(p,o,m);
if(p.firstChild)
{
q._ajustFormat(p);
n.appendChild(p);
}
return r;
},_createWarpNode:function(m){
var o=this;
var n=o._getWin().document.createElement(m||'font');
n.style.display='inline';
a.attr(n,o._sWarpNodeMarker,'1');
return n;
},_createTempNode:function(m){
var o=this;
var n=o._getWin().document.createElement('span');
n.style.display='none';
if(m)
{
m.parentNode.insertBefore(n,m);
}
return n;
},_breakNode:function(m){
var o=this;
var p=j.QMEditorExt.domUtils;
var n;
while((n=m.parentNode))
{
if(o._isBlockElement(n))
{
break;
}
p.breakParent(m,n);
p.clearEmptySibling(m);
}
},_initEvent:function(){
var q=this;
var p=q._getBindEditor();
var o=q._moToolBar.getContainer();
var r=p.getEditWin();
var n=o.firstChild;
function s()
{
var A=j.QMSelection.getSelection(r);
var z=A.getRange();
if(z.isCollapsed())
{
var w=q._createWarpNode();
w.innerHTML='&#8203;';
z.insertNode(w);
q._ajustFormat(w);
z.setEndAfter(w);
z.collapse();
z.select();
}
else{
try{
var v=z.createBookmark();
q._breakNode(v.oStartNode);
q._breakNode(v.oEndNode);
var x=v.oStartNode.nextSibling||v.oStartNode.parentNode;
while(x)
{
var y=x.parentNode.nextSibling;
if(!q._resertLineNodeWarp(x,v.oEndNode))
{
break;
}
x=y;
}
z.gotoBookmark(v);
z.clear();
}
catch(B)
{
j.debug(B);
}
}
if(q._mnFlag==1)
{
u();
}
if(a.gbIsFF)
{
p.setContentEditable();
}
}
function u()
{
j.addEvent(r.document,'mouseup',s,true);
j.rmClass(n,'qmEditorBtnIconCheck');
j.rmClass(r.document.body,'cursor_formatMatch');
q._clearFormat();
}
;function t()
{
if(q._mnFlag)
{
u();
return;
}
if(q._saveFormat())
{
j.addEvent(r.document,'mouseup',s);
j.addClass(n,'qmEditorBtnIconCheck');
j.addClass(r.document.body,'cursor_formatMatch');
return true;
}
}
var m=false;
n.onclick=function(){
if(m)
{
return false;
}
if(!t())
{
return false;
}
m=true;
setTimeout(function(){
m=false;
},800);
q._mnFlag=1;
getTop().LogKV({sValue:'editor|toolbar|formatmatch|click'});
return false;
};
n.ondblclick=function(){
if(!m&&!t())
{
return false;
}
q._mnFlag=2;
getTop().LogKV({sValue:'editor|toolbar|formatmatch|blclick'});
return false;
};
if(a.gbIsFF)
{
p.bindPrevCmd(function(w,v,x){
if(w!='execCommand'&&v!='Italic')
{
return;
}
var B=j.QMSelection.getSelection(r);
var A=B.getRange();
if(!A.isCollapsed())
{
var y=A.createBookmark();
var z=y.oStartNode.nextSibling;
if(z&&z.nodeType!=3&&a.attr(z,B._sWarpNodeMarker)&&y.oEndNode.previousSibling===z)
{
A.gotoBookmark(y);
A.setStartBefore(z);
A.setEndAfter(z);
A.select();
}
else{
A.gotoBookmark(y);
}
}
});
}
},_saveFormat:function(){
var q=this;
try{
var p=j.QMSelection.getSelection(q._getWin());
var o=p.getRange();
var m=o.createBookmark();
var n=m.oStartNode.parentNode;
j.E(q._oStyleList,function(s,t){
q._moCurrentStyleList[t]=q._getBrowerStyle(n,t)||q._getBrowerStyle(n,s);
});
o.gotoBookmark(m);
p.clear(true);
return true;
}
catch(r)
{
j.debug('formatmatch has no range');
return false;
}
},_clearFormat:function(){
this._mnFlag=0;
this._moCurrentStyleList={};
},_ajustFormat:function(m){
var n=this;
j.E(n._moCurrentStyleList,function(p,o){
if(n._getBrowerStyle(m,o,true)!=p&&n._oStyleList[o])
{
m.style[n._oStyleList[o]]=p;
}
});
}};
QMEditor.setupFunc();
})(QMEditorAdapter);
