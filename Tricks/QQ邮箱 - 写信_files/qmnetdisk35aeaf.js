(function(_aoUndefined){
var _oNetDisk={},_oDiskStat={nNum:0,nMax:3,oBound:[]},_oMenuData={"weiyun":{sAlias:"weiyun",sLabel:"\u5FAE\u4E91",sUserid:"",limit:1024*1024*1024,over:"\u6682\u4E0D\u652F\u63011G\u4EE5\u4E0A\u6587\u4EF6"}},_oTop=getTop(),_oProgressFunc={},_TIMER_MAX=30,_TIMER_INTERVAL=6*1000,_nTimerId=0,_nTimerCnt=_TIMER_MAX,_goLocalInfo;
_oNetDisk.DEBUG={"account":0,"connect":0,"sharelink":0};
_oNetDisk.CONST={DATA_NAME:"NetDisk",TYPE_WEIYUN:"weiyun",TYPE_DROPBOX:"dropbox",TYPE_GOOGLEDRIVE:"googledrive",TYPE_MOBILE:"mobile",TYPE_ALL:["weiyun","dropbox","mobile"]};
_oNetDisk.EVENT={READY:"nd_READY",SELECT:"nd_SeleCT_FILe",INFO_CHANGED:"nd_Info_CHanged"};
_oTop["gbIsInitNetDisk"]=typeof (_oTop["gbIsInitNetDisk"])=="undefined";
(function(_aoUndefined){
var _oTop=getTop(),_oPathMap={},_oFileCache={},_oPathTimeStames={},_oDataCenter={};
function _fList2Map(_aoList)
{
var _oMap={};
for(var i=0;i<_aoList.length;i++)
{
_oMap[_aoList[i].sPath]=_aoList[i];
}
return _oMap;
}
;function _fFormatSize(_anBytes)
{
if(isNaN(_anBytes))
{
return "";
}
if(_anBytes>1024*1024*1024)
{
return Number((_anBytes*100/(1024*1024*1024))/100).toFixed(2)+"G";
}
if(_anBytes>1024*1024)
{
return Number((_anBytes*100/(1024*1024))/100).toFixed(2)+"M";
}
if(_anBytes>1024)
{
return Number((_anBytes*100/1024)/100).toFixed(1)+"K";
}
return Math.ceil(_anBytes)+"B";
}
;var _oIconMap={"eml":"eml","pdf":"pdf","txt":"txt,h,m,js,as,java,c,cpp,plist,ini,stp,csv,xml","html":"html,htm,xhtml,mht","rar":"zip,7z,rar,bz2,gz,tar,tbz,tgz,cab,gzip,bzip2,deb","mov":"mp3,m4a,wma,wav,aac,ac3,mp2,ape,flac,f4a,mkv,rmvb,wmv,mp4,f4v,flv,avi,mov,qt,m4v,asf,rm,mpeg,mpg,vob,ts,3gp,3gpp,3gp2,ogg,ogv,mp4,webm,f4m,avi","jpg":"jpg,png,bmp,gif,jpeg,tiff","fl":"fla,swf","psd":"psd","exl":"xls,xlsx","ppt":"ppt,pptx","doc":"doc,docx,rtf,dot,docm","blank":""};
_oIconMap=(function(_aoMap){
var _oMap={};
for(var i in _aoMap)
{
for(var s=_aoMap[i].split(","),j=0,l=s.length;j<l;j++)
{
_oMap[s[j]]=i;
}
}
return _oMap;
})(_oIconMap);
function _fGetIconUrl(_asFileType)
{
return "/zh_CN/htmledition/images/xdisk/ico_mid/fu_"+(_oIconMap[_asFileType]||"blank")+".gif";
}
;_oDataCenter.getFormatSize=_fFormatSize;
_oDataCenter.getFileIcon=_fGetIconUrl;
_oDataCenter.sync=function(_asPath,_aoCallbacks,_asForceRemoteRet){
var _oPath=_asPath.split(":"),_sType=_oPath[0],_sPath=_oPath[1]||"/",_nTRIGGER=60,_nCurrTimeStamp=this.getCurrTime(),_nFileTimeStamp=this.getTimeStamp(_asPath),_bIsPathExist=!!this.getPath(_asPath),_sIsRemote=typeof (_asForceRemoteRet)!="undefined"?_asForceRemoteRet:(!this.getPath(_asPath)?"0":(_nCurrTimeStamp-_nFileTimeStamp>_nTRIGGER?"1":"0")),_Fid=_asPath=="weiyun:/"?"/":_oTop.encodeURI(this.getFile(_asPath)&&this.getFile(_asPath).sId||""),_sUrl=_oTop.T("/cgi-bin/netdriveapi?sid=$sid$&r=$r$&isremote=$isremote$&action=getfilelist&drivename=$label$&userid=$userid$&path=$path$&id=$fid$&ef=js").replace({sid:_oTop.getSid(),r:Math.random(),isremote:_sIsRemote,label:_sType,userid:this.netDiskMgr.getInfo(_sType).sUserid,fid:_Fid,path:encodeURIComponent(_sPath)}),_oCallbacks=_aoCallbacks||{};
debug(["path:",_asPath," ,remote:",_sIsRemote," ,is_path_exist:",_bIsPathExist," ,curr:",_nCurrTimeStamp," ,cache:",_nFileTimeStamp,", diff:",_nCurrTimeStamp-_nFileTimeStamp].join(" "));
_oCallbacks.onready&&_oCallbacks.onready.call(this,_oDataCenter._filterPath(this.getPath(_asPath)));
if(this.getPath(_asPath)&&_sIsRemote=="0")
{
debug("\u76EE\u5F55\u5DF2\u5B58\u5728\uFF0C"+(_nTRIGGER-(_nCurrTimeStamp-_nFileTimeStamp))+"\u79D2\u540Ecache\u5931\u6548");
return;
}
if(this._moAjax&&this._moAjax.url!=_sUrl)
{
this._moAjax._msErrType="abort";
this._moAjax.abort();
}
this._moAjax=new _oTop.QMAjax();
if(this._moAjax)
{
this._moAjax.url=_sUrl;
this._moAjax.onComplete=function(_aoXmlObj){
var _sResp=_aoXmlObj.responseText,_oData={};
try{
_oData=eval(["(",_sResp,")"].join(""));
}
catch(e)
{
debug(e,2);
}
if(_oData.ret==0)
{
_oDataCenter.put(_asPath,_oData.oList,function(_aoChangedList){
_oCallbacks.onchange&&_oCallbacks.onchange.call(this,_oDataCenter._filterPath(_aoChangedList));
});
_oCallbacks.oncomplete&&_oCallbacks.oncomplete.apply(_oDataCenter,[true,{ret:_oData.ret},_oDataCenter._filterPath(_oDataCenter.getPath(_asPath))]);
_oData.oList.length&&_oDataCenter.updateTimeStamp(_asPath,_oData.nTimeStamp);
!_bIsPathExist&&_oDataCenter.getCurrTime()-_oData.nTimeStamp>_nTRIGGER&&_oDataCenter.sync.apply(_oDataCenter,[_asPath,_oCallbacks,"1"]);
_oDataCenter._moAjax=_aoUndefined;
return;
}
_oCallbacks.oncomplete&&_oCallbacks.oncomplete.apply(_oDataCenter,[false,{ret:+_oData.ret||+_oData.errcode||-999},_oDataCenter._filterPath(_oDataCenter.getPath(_asPath))]);
_oDataCenter._moAjax=_aoUndefined;
};
this._moAjax.onError=function(_aoXmlObj,_asError){
_oCallbacks.oncomplete&&_oCallbacks.oncomplete.apply(_oDataCenter,[false,{ret:-998,msg:this._msErrType||"timeout"},_oDataCenter._filterPath(_oDataCenter.getPath(_asPath))]);
_oDataCenter._moAjax=_aoUndefined;
};
this._moAjax.send();
}
};
_oDataCenter.diff=function(_asPath,_aoDiffList){
var _sRetStat="",_oPathList=_oPathMap[_asPath],_oPath=_asPath.split(":"),_sDrive=_oPath[0];
for(var i=0,l=_aoDiffList.length;i<l;i++)
{
var _sPath=[_sDrive,_aoDiffList[i].sPath].join(":"),_nTimestamp=_aoDiffList[i].nMTime;
if(_oFileCache[_sPath]&&_oFileCache[_sPath].nMTime!=_nTimestamp)
{
_sRetStat="outdate";
this.del(_sPath,true);
}
if(!_oFileCache[_sPath])
{
_oFileCache[_sPath]=_aoDiffList[i];
}
if(_sRetStat&&i==l-1)
{
return _sRetStat;
}
}
if(typeof (_oPathList)=="undefined")
{
return "new";
}
else if(_oPathList.length!=_aoDiffList.length)
{
return "diffent";
}
else{
var _oOldData=_fList2Map(_oPathList),_oNewData=_fList2Map(_aoDiffList);
for(var i in _oNewData)
{
if(!_oOldData[i])
{
_sRetStat="change";
this.del(i,true);
}
}
_oOldData=_oNewData=_aoUndefined;
return _sRetStat;
}
return _sRetStat;
};
_oDataCenter.inspect=function(_asType){
var _oTmp={Paths:_oPathMap,Files:_oFileCache};
return _oTmp[_asType]||_oTmp;
};
_oDataCenter.clear=function(){
var _oAllTypeList=this.netDiskMgr.CONST.TYPE_ALL;
for(var i=0;i<_oAllTypeList.length;i++)
{
this.del([_oAllTypeList[i],"/"].join(":"),true);
}
;
};
_oDataCenter._filterPath=function(_aoList){
var _oRemMap={},_oFilteredList=[];
if(_aoList)
{
for(var i=0;i<_aoList.length;i++)
{
var _oItem=_aoList[i];
if(!_oRemMap[_oItem.sPath])
{
_oFilteredList.push(_aoList[i]);
_oRemMap[_oItem.sPath]=1;
}
_oItem=_aoUndefined;
}
_oRemMap=_aoUndefined;
return _oFilteredList;
}
else{
return _aoList;
}
};
_oDataCenter.getPath=function(_asPath){
return _oPathMap[_asPath];
};
_oDataCenter.getFile=function(_asPath){
return _oFileCache[_asPath];
};
_oDataCenter.getCurrTime=function(){
return +(+new Date()+"").substring(0,10);
};
_oDataCenter.getTimeStamp=function(_asPath){
return _oFileCache[_asPath]&&_oFileCache[_asPath].nTimeStamp||-1;
};
_oDataCenter.updateTimeStamp=function(_asPath,_anTimeStamps){
return _oFileCache[_asPath].nTimeStamp=_anTimeStamps;
};
_oDataCenter.put=function(_asPath,_aoList,_afChange){
if(_asPath.indexOf(":")<0)
{
debug("[netdisk] invalid path: "+_asPath);
}
for(var i=0,l=_aoList.length;i<l;i++)
{
_aoList[i]["sFileSize"]=_fFormatSize(_aoList[i].nSize);
_aoList[i]["sDefaultIconUrl"]=_fGetIconUrl(_aoList[i]["sName"].toLowerCase().split(".").pop());
_aoList[i]["sIconUrl"]=_aoList[i].sThumburl;
}
var _sRet=this.diff(_asPath,_aoList),_bDiff=!!_sRet;
debug("[netdisk] diff stat: "+_sRet);
!_oFileCache[_asPath]&&(_oFileCache[_asPath]={bDir:true,sId:"/",sFakeId:"/",sPath:"/",sName:"/"});
_afChange&&_afChange.call(this,_aoList);
_oPathMap[_asPath]=_aoList;
};
_oDataCenter.del=function(_asPath,_abCleanAll){
var _bRet=false,_oPath=_asPath.split(":"),_sDrive=_oPath[0];
if(_oPathMap[_asPath])
{
var _fCleanAll=function(_aoList){
for(var i=0;i<_aoList.length;i++)
{
var _sPath=[_sDrive,_aoList[i].sPath].join(":");
_oPathMap[_sPath]&&_fCleanAll(_oPathMap[_sPath]);
delete _oPathTimeStames[_sPath];
delete _oPathMap[_sPath];
delete _oFileCache[_sPath];
}
;
};
_abCleanAll&&_fCleanAll(_oPathMap[_asPath]);
delete _oPathTimeStames[_asPath];
delete _oPathMap[_asPath];
delete _oFileCache[_asPath];
_bRet=true;
}
return _bRet;
};
_oTop['QMNetDiskData']=_oDataCenter;
})();
(function(_aoUndefined){
var _oTop=getTop(),_gnExistSize=0,_oNetDiskView={},_oTmpl={"bindDisk":_oTop.TE(['<div class="p-otherdisk">','<div class="bind_select_box "  id="colume">','<p class="select_txt txt_center">','$@$if($from$=="compose")$@$','\u90AE\u4EF6\u4E2D\u63D2\u5165\u4EE5\u4E0B\u7F51\u76D8\u7684\u6587\u4EF6','$@$else$@$','\u8BF7\u70B9\u51FB\u7F51\u76D8\u4E0EQQ\u90AE\u7BB1\u8FDB\u884C\u7ED1\u5B9A','$@$endif$@$','</p>','<ul class="bind_items">','$@$for($info$)$@$','<li class="bind_li" ','$@$if($sId$)$@$','$@$if($_root_.from$=="compose")$@$',' title="\u6253\u5F00\u6587\u4EF6\u5217\u8868"','$@$else$@$',' title="\u5DF2\u7ED1\u5B9A"','$@$endif$@$','$@$else$@$','$@$if($_idx_$==0)$@$',' title="\u7ED1\u5B9A\u5FAE\u4E91"','$@$else if($_idx_$==1)$@$',' title="\u7ED1\u5B9ADropbox"','$@$endif$@$','$@$endif$@$','>','$@$if($sId$)$@$','<div class="has_bind"></div>','$@$endif$@$','$@$if($_idx_$==0)$@$','<a class="bind_item bind_item_weiyun" ','$@$if($sId$)$@$','$@$if($_root_.from$=="compose")$@$',' ck="nd_list" listtype="$sAlias$"','$@$else$@$',' style="cursor:default;"','$@$endif$@$','$@$else$@$',' ck="nd_bind" ','$@$endif$@$',' type="weiyun" href="javascript:;">','<p class="bind_name ellipsis">\u5FAE\u4E91</p>','$@$if($sId$)$@$','<p class="bind_tips ellipsis">$sUsername$</p>','$@$else$@$','<p class="bind_tips ellipsis">\u672A\u7ED1\u5B9A</p>','$@$endif$@$','</a>','$@$else if($_idx_$==1)$@$','<a class="bind_item bind_item_dropbox" ','$@$if($sId$)$@$','$@$if($_root_.from$=="compose")$@$',' ck="nd_list" listtype="$sAlias$"','$@$else$@$',' style="cursor:default;"','$@$endif$@$','$@$else$@$',' ck="nd_bind" ','$@$endif$@$',' type="dropbox" href="javascript:;">','<p class="bind_name ellipsis">Dropbox</p>','$@$if($sId$)$@$','<p class="bind_tips ellipsis">$sUsername$</p>','$@$else$@$','<p class="bind_tips ellipsis">\u672A\u7ED1\u5B9A</p>','$@$endif$@$','</a>','$@$endif$@$','</li>','$@$endfor$@$','</ul>','</div>','</div>']),"container":_oTop.T(['<div id="con" class="other_disk_box p-otherdisk" type="$sType$">','<div class="disk_content" id="disklist" path="$sPath$">','<div class="od_lastline"></div>','</div>','</div>','<div class="dialog_operate">','<div class="file_num">','<span id="fileSelectCon">\u5DF2\u9009\u62E9<span id="fileNum">0</span>\u4E2A\u6587\u4EF6</span>','<span id="fileLimitCon" class="txt_red" style="display:none">(\u6700\u591A\u540C\u65F6\u6DFB\u52A010\u4E2A\u6587\u4EF6)</span>','</div>','<a href="javascript:;" id="ndConfirmBtn" class="btn_blue" ck="nd_confirm" >\u786E\u5B9A</a>','<a href="javascript:;" class="btn_gray" ck="nd_exit">\u53D6\u6D88</a>','</div>']),"listItem":_oTop.TE(['$@$if($oList$.length>0)$@$','<ul ui-type="list" class="od_items">','$@$for($oList$)$@$','<li path="$@$eval getTop().htmlEncode($sPath$)$@$"  class="od_item $@$if($_root_.bIsLeaf$)$@$ od_list_index $@$endif$@$">','<label class="od_item_inner $@$if($bDir$)$@$ od_file fold $@$endif$@$ " for="select_$sFakeId$" hidefocus','$@$if($bDir$)$@$',' ck="nd_toggle"','$@$else$@$',' ck="nd_select" ','$@$endif$@$ ','>','$@$if($bDir$)$@$','<span class="od_imgopen"></span>','<img class="od_fileimg" src="$images_path$webp/xdisk/icon_file32/icon_file32_folder1e9c5d.png">','$@$else$@$','<span class="fr ellipsis od_filesize">$sFileSize$</span>','<input type="checkbox" id="select_$sFakeId$" filesize="$nSize$" class="od_checkbox">','<div class="img_thumb">','<div class="img_inner">','<img onerror="this.src=\'$sDefaultIconUrl$\';this.style.width=\'32px\';" class="od_fileimg" src="$sIconUrl$" width="38px">','<span class="alpha_span"></span>','</div>','</div>','$@$endif$@$','<div class="od_detail">','$@$if($bDir$)$@$','<span class="od_label">$@$eval getTop().htmlEncode($sName$)$@$</span>','$@$else$@$','<span class="od_label">$@$eval getTop().htmlEncode($sName$)$@$</span>','$@$endif$@$','</div>','</label>','</li>','$@$endfor$@$','</ul>','$@$else$@$','<ul ui-type="empty" class="od_items" style="background:none;">','<li class="od_item od_list_index">','<div class="od_item_inner graytext">','\u8BE5\u76EE\u5F55\u6CA1\u6709\u6587\u4EF6','</div>','</li>','</ul>','$@$endif$@$']),"rootLoading":_oTop.TE(['<ul ui-type="loading" class="netdisk_loading">','<li style="margin-top:120px;">','<span class="ss_icon_loading"></span>\u6B63\u5728\u540C\u6B65\u7F51\u76D8...','</li>','</ul>']),"listLoading":_oTop.TE(['<ul ui-type=\"loading" class="od_items" style="background:none;">','<li class="od_item od_list_index">','<div class="od_item_inner graytext">','<span class="ss_icon_loading"></span>\u6B63\u5728\u540C\u6B65\u7F51\u76D8...','</div>','</li>','</ul>']),"rootError":_oTop.TE(['<ul ui-type="error" class="od_items" style="background:none;">','<li class="od_item" style="margin-top:120px;">','<div class="od_item_inner graytext" style="text-align:center;">','\u8FDE\u63A5$sLabel$\u670D\u52A1\u5668\u5931\u8D25\uFF0C','<a href="javascript:;" ck="nd_retry" type="$sType$" path="$sPath$">\u8BF7\u91CD\u8BD5</a>','</div>','</li>','</ul>']),"listError":_oTop.TE(['<ul ui-type="error" class="od_items" style="background:none;">','<li class="od_item od_list_index">','<div class="od_item_inner graytext">','\u8FDE\u63A5$sLabel$\u670D\u52A1\u5668\u5931\u8D25\uFF0C','<a href="javascript:;" ck="nd_retry" type="$sType$" path="$sPath$">\u8BF7\u91CD\u8BD5</a>','</div>','</li>','</ul>']),"errTmpl":_oTop.TE(['<div class="link_error_box p-otherdisk">','$@$if($sId$==1)$@$','<div class="error_tips error_weiyun cf"></div>','$@$else if($sId$==1)$@$','<div class="error_tips error_dropbox cf"></div>','$@$else$@$','<div class="error_tips error_google cf"></div>','$@$endif$@$','$@$if($sErrorType$=="connect")$@$','<p class="error_which"><span class="icons ico_error"></span>\u8FDE\u63A5$sLabel$\u670D\u52A1\u5668\u5931\u8D25\u3002</p>','<p class="error_operate">','<a href="javascript:;" class="btn_blue try_again" ck="nd_retry" type="$sType$" path="$sPath$">\u91CD\u8BD5</a>&nbsp;&nbsp;','<a href="javascript:;" class="btn_gray" ck="nd_rebind" type="$sType$">\u91CD\u65B0\u7ED1\u5B9A</a>','</p>','$@$else$@$','<p class="error_which"><span class="icons ico_error"></span>\u6388\u6743\u5DF2\u5931\u6548\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u3002</p>','<p class="error_operate">','<a href="javascript:;" class="btn_blue" ck="nd_rebind" type="$sType$">\u91CD\u65B0\u7ED1\u5B9A</a>','</p>','$@$endif$@$','</div>'])},_sCssCode=['.p-otherdisk p,.p-otherdisk input{margin:0;padding:0;}.p-otherdisk h1,.p-otherdisk h2,.p-otherdisk h3,.p-otherdisk h4,.p-otherdisk h5,.p-otherdisk h6{margin:0;font-size:100%;}.p-otherdisk img{border:none;}.p-otherdisk .cf:after{clear:both;display:block;height:0;visibility:hidden;}.p-otherdisk .cf{zoom:1;}.p-otherdisk .cl{clear:both;}.p-otherdisk .hide{display:none;}.p-otherdisk .fl{float:left;display:inline;}.p-otherdisk .fr{float:right;display:inline;}.p-otherdisk .btn_gray{}.p-otherdisk .btn_blue{}.p-otherdisk .icons{background:url($images_path$webp/xdisk/bind_disk/icons1e9c5d.png) no-repeat;}.p-otherdisk .ico_succ,.p-otherdisk .ico_error{width:12px;height:12px;display:inline-block;vertical-align:middle;margin:-2px 5px 0 0;*margin:1px 5px 0 0;font-size:0px;_vertical-align:baseline;}.p-otherdisk .ico_succ{background-position:-12px 0;}.p-otherdisk .ico_error{background-position:0px 0;}.img_thumb{width:38px;height:38px;overflow:hidden;float:left;margin:4px 4px 0 0;}.img_thumb .img_inner{width:160px;height:160px;margin:-61px 0 0 -61px;text-align:center;}.img_thumb img.od_fileimg{vertical-align:middle;margin:0;float:none;}.img_thumb .alpha_span{display:inline-block;vertical-align:middle;height:100%;width:0;}.bind_select_box{height:250px;padding:30px 25px 0px;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;}.bind_select_box .select_txt{padding:5px 0 20px;color:#000;}.menu_item_nofun .bind_select_box{padding:16px 10px 0 8px;}.p-otherdisk .bind_items{margin-left:-50px;text-align:center;}.bind_li{position:relative;display:inline-block;*display:inline;*zoom:1;width:118px;margin-left:50px;vertical-align:top;}.bind_item{display:block;padding-top:100px;padding-bottom:8px;color:#ccc;text-decoration:none;background:url($images_path$webp/xdisk/bind_disk/weiyun26f1bf.png) no-repeat center 20px;border:1px solid #ccc;border-radius:3px;_zoom:1;-webkit-transition:box-shadow linear .2s;-moz-transition:box-shadow linear .2s;transition:box-shadow linear .2s;}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.bind_item{background-image:url($images_path$webp/xdisk/bind_disk/weiyun_2x26f143.png);background-size:78px 70px;}}.bind_item:hover{text-decoration:none;box-shadow:0 0 5px #60caff;border-color:#52a8ec;}.bind_item_dropbox{background-image:url($images_path$webp/xdisk/bind_disk/dropbox1e9c5d.png);}.bind_name,.bind_tips{line-height:20px;padding:0 10px;color:#000;}.bind_tips{color:#999;}.bind_items .has_bind{width:37px;height:37px;position:absolute;left:1px;top:1px;background:url($images_path$webp/xdisk/bind_disk/has_bind1e9c5d.png) no-repeat;z-index:10;}.other_disk_box{padding:25px 25px 0px;height:338px;background:#fff;position:relative;}.disk_content{height:300px;background:#f9f9f9;border:1px solid #cbcbcb;overflow:auto;}.od_items .od_item{_zoom:1;}.od_items .od_item{-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;}.od_items .od_item_inner{display:block;height:46px;padding:0 10px 0 0;line-height:46px;line-height:46px\u005C9;overflow:hidden;color:#000;cursor:default;_zoom:1;outline:none;border-bottom:1px solid #bbb;}.od_list_index .od_item_inner{padding-left:22px;}.od_list_index .od_list_index .od_item_inner{padding-left:44px;}.od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:66px;}.od_list_index .od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:88px;}.od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:110px;}.od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:132px;}.od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:154px;}.od_items .od_checkbox{float:left;_display:inline;width:13px;height:13px;margin:17px 5px 0 6px;overflow:hidden;cursor:default;*zoom:1;}.od_items .od_list_index .od_checkbox{margin-left:0;}.od_items .od_fileimg{float:left;margin:6px 4px 0 0;_display:inline;}.od_items .od_label{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;_width:50%;_vertical-align:baseline;}.od_items .od_big .od_label,.od_items .od_big .od_fileimg{opacity:0.4;filter:alpha(opacity=40);}.file_num{color:#a0a0a0;float:left;margin-left:16px;_display:inline;}.disk_limit{line-height:32px;color:#a0a0a0;}.od_filesize{width:70px;text-align:right;margin-top:1px;margin-left:6px;color:#999;}.od_lastline{position:absolute;font-size:0;overflow:hidden;border-top:1px solid #f9f9f9;height:0px;left:26px;width:388px;bottom:37px;_bottom:36px;}.od_items .od_imgopen{width:7px;height:7px;display:inline-block;float:left;background:url($images_path$webp/xdisk/bind_disk/icons1e9c5d.png) no-repeat;}.od_items .expand .od_imgopen{background-position:0 -15px;margin:21px 8px 0 8px;}.od_items .fold .od_imgopen{background-position:-9px -13px;margin:20px 6px 0 10px;}.link_error_box{height:244px;background-color:#fff;border-radius:0 0 5px 5px;}.link_error_box .error_tips{width:100%;height:71px;margin-left:auto;margin-right:auto;background:url($images_path$webp/xdisk/bind_disk/error_pic1e9c5d.png) center 0px no-repeat;margin:30px 0;float:left;}.link_error_box .error_dropbox{background-position:center -72px;}.link_error_box .error_weiyun{background-position:center 0;}.link_error_box .error_google{background-position:center -144px;}.link_error_box .error_which{text-align:center;line-height:22px;}.link_error_box .error_operate{text-align:center;padding:15px 0 10px 0;}.p-todisk{background:url($images_path$webp/xdisk/bind_disk/bg_rp1e9c5d.png) repeat;}.page_todisk{position:absolute;height:245px;width:400px;left:50%;margin-left:-200px;top:50%;margin-top:-120px;border:1px solid #c1c1c1;box-shadow:0 0 8px rgba(0,0,0,0.2);border-radius:5px;background-color:#fff;}.todisk_hd{height:4px;overflow:hidden;background-color:#6bc5f5;border-radius:5px 5px 0 0;}.todisk_process{padding:50px 0 0 68px;overflow:hidden;}.todisk_process .source_pic,.todisk_process .dest_pic{float:left;text-align:center;width:90px;}.todisk_process .source_pic p,.todisk_process .dest_pic p{width:90px;padding:10px 0;}.todisk_process .source_pic{padding-top:7px;}.todisk_process .ico_dire{float:left;width:45px;height:32px;margin:25px 22px 0;background:url($images_path$webp/xdisk/bind_disk/translate1e9c5d.png) no-repeat;}.todisk_doing{padding:10px 0 0 0;text-align:center;}.todisk_doing .todisk_ing{padding-top:10px;}.todisk_doing .todisk_ing img{vertical-align:middle;margin:-2px 5px 0 0;*margin:1px 5px 0 0;_vertical-align:baseline;}.todisk_doing .todisk_operate{padding:15px 0 0 0;}.todisk_doing .todisk_succ a{color:#1e5494;}.todisk_line_box{width:164px;overflow:hidden;margin:15px auto 0 auto;text-align:left;}.b_out_line{overflow:hidden;font-size:0px;height:8px;width:160px;border:1px solid #bbb;background-color:#ececec;border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.1) inset;)}.b_inner_line{overflow:hidden;font-size:0;height:100%;background-color:#2f82d0;background-image:-webkit-linear-gradient(bottom,#2472be,#3a92e2);background-image:-moz-linear-gradient(bottom,#2472be,#3a92e2);filter:progid:DXImageTransform.Microsoft.gradient(startcolorstr=#3a92e2,endcolorstr=#2472be,gradientType=0);border-radius:0 8px 8px 0;}.ellipsis{overflow:hidden;text-overflow:ellipsis;-o-text-overflow:ellipsis;white-space:nowrap;}.od_items .graytext{color:#a0a0a0;}'].join("\n"),_oActions={rule:function(){
return {click:{"nd_bind":{bPropagable:false},"nd_list":{bPropagable:false},"nd_toggle":{bPropagable:false},"nd_rebind":{bPropagable:false},"nd_retry":{bPropagable:false},"nd_select":{bPropagable:true},"nd_exit":{bPropagable:false},"nd_confirm_dis":{bPropagable:false},"nd_confirm":{bPropagable:false}}};
},events:function(){
return {"nd_list":function(_aoEvent,_aoTarget){
_oNetDiskView._page("list",_oTop.attr(_aoTarget,"listtype"));
_oNetDiskView._page("clsBind");
_aoEvent&&_oTop.preventDefault(_aoEvent);
},"nd_bind":function(_aoEvent,_aoTarget){
var _sType=_aoTarget.getAttribute("type"),_oNetDisk=_oNetDiskView.netDiskMgr;
_oNetDisk.bind(_sType,function(){
_oTop.getMainWin().QMAttach&&_oNetDiskView._page("list",_sType);
_oNetDiskView._page("clsBind");
});
_aoEvent&&_oTop.preventDefault(_aoEvent);
},"nd_select":function(_aoEvent){
var _oDomTarget=_oTop.getEventTarget(_aoEvent),_oDomFile=_oDomTarget.tagName=="LABEL"?_oDomTarget:_oTop.parents("label",_oDomTarget)[0],_oLastFile=this._DOM,_sFileId=_oDomFile.getAttribute("for")||_oDomFile.getAttribute("htmlFor"),_bFileChecked=_oDomTarget.tagName=="INPUT"?_oTop.S(_sFileId).checked:!_oTop.S(_sFileId).checked,_oDomList=_oTop.parents("ul",_oDomFile)[0];
_oTop.S(_sFileId).checked=_bFileChecked;
if(_aoEvent.shiftKey&&_oLastFile&&_oLastFile.id!=_sFileId&&_bFileChecked==_oLastFile.checked&&_oTop.isObjContainTarget(_oDomList,_oTop.S(_oLastFile.id)))
{
var _oDomInputList=_oTop.finds("input[type='checkbox']",_oDomList),_nRet=0;
for(var i=0,l=_oDomInputList.length;i<l;i++)
{
if(_oLastFile.id==_oDomInputList[i].id||_sFileId==_oDomInputList[i].id)
{
_nRet++;
_oDomInputList[i].checked=_bFileChecked;
}
if(_nRet>1)
{
break;
}
else if(_nRet>0)
{
_oDomInputList[i].checked=_bFileChecked;
}
}
}
this._DOM={checked:_bFileChecked,id:_sFileId};
setTimeout(function(){
var _nCnt=0,_oDlg=_oTop.QMDialog("netDiskListDlg"),_oDomSelectList=_oTop.finds("input[type='checkbox']",_oDlg.S("disklist"));
for(var i=0,l=_oDomSelectList.length;i<l;i++)
{
if(_oDomSelectList[i].checked)
{
_nCnt++;
}
}
_oDlg.S("fileNum").innerHTML=_nCnt;
_oTop[_nCnt>10?"addClass":"rmClass"](_oDlg.S("ndConfirmBtn"),"btn_blue_disabled");
_oDlg.S("ndConfirmBtn").setAttribute("ck",_nCnt>10?"nd_confirm_dis":"nd_confirm");
_oTop.show(_oDlg.S("fileLimitCon"),_nCnt>10);
});
_oTop.stopPropagation(_aoEvent);
_oDomTarget.tagName!="INPUT"&&_oTop.preventDefault(_aoEvent);
},"nd_confirm_dis":function(_aoEvent){
_oTop.preventDefault(_aoEvent);
},"nd_confirm":function(_aoEvent){
var _sType=_oTop.QMDialog("netDiskListDlg").S("con").getAttribute("type"),_oSelectedList=[],_oDomSelectList=_oTop.QMDialog("netDiskListDlg").S("disklist").getElementsByTagName("input");
for(var i=0,l=_oDomSelectList.length;i<l;i++)
{
_oDomSelectList[i].type=="checkbox"&&_oDomSelectList[i].checked&&_oSelectedList.push(_oTop.extend({sType:_sType},_oNetDiskView.netDiskMgr.dataCenter.getFile([_sType,_oTop.parents("li[path]",_oDomSelectList[i])[0].getAttribute("path")].join(":"))));
}
_oNetDiskView.netDiskMgr.fireEvent(_oNetDiskView.netDiskMgr.EVENT.SELECT,[_oSelectedList]);
_oTop.QMDialog("netDiskListDlg").close();
_oTop.preventDefault(_aoEvent);
},"nd_exit":function(_aoEvent){
_oTop.QMDialog("netDiskListDlg").close();
_oTop.preventDefault(_aoEvent);
},"nd_toggle":function(_aoEvent,_aoTarget){
var _oDom=_aoTarget.parentNode,_sType=_oTop.QMDialog("netDiskListDlg").S("con").getAttribute("type"),_sPath=_oTop.parents("li[path]",_aoTarget)[0].getAttribute("path");
_oNetDiskView._toggle(_aoTarget)&&_oNetDiskView._enter(_oDom,_sType,_sPath);
},"nd_rebind":function(_aoEvent,_aoTarget){
_oNetDiskView.netDiskMgr.removeDisk(_aoTarget.getAttribute("type"),function(){
_oTop.QMDialog("netDiskErrorDlg").close();
_oNetDiskView._page("bind");
},false);
_oTop.preventDefault(_aoEvent);
},"nd_retry":function(_aoEvent,_aoTarget){
var _oDomCon=_oTop.QMDialog("netDiskListDlg").S("con");
_oDomList=_oTop.QMDialog("netDiskListDlg").S("disklist"),_sType=_oDomCon.getAttribute("type"),_sPath=_aoTarget.getAttribute("path"),_oDomTarget=_oTop.parents("ul[ui-type='error']",_aoTarget)[0].parentNode;
_oNetDiskView._enter(_oDomTarget,_sType,_sPath);
_oTop.preventDefault(_aoEvent);
_oDomCon=_oDomList=_oDomTarget=_aoUndefined;
}};
}};
_oNetDiskView._triggerEvents=function(_asType,_aoEvent,_aoTarget){
var _oAct=_oActions.events();
_oAct[_asType]&&_oAct[_asType].apply(_aoTarget,[_aoEvent,_aoTarget]);
_oAct=_aoUndefined;
};
_oNetDiskView._route={"clsBind":function(){
_oTop.QMDialog("netBindDiskDlg")&&_oTop.QMDialog("netBindDiskDlg").close();
_oTop.QMMenu("netdisk_droplist")&&_oTop.QMMenu("netdisk_droplist").close();
},"clsList":function(){
_oTop.QMDialog("netDiskListDlg")&&_oTop.QMDialog("netDiskListDlg").close();
},"tips":function(_asTipType,_aoDomTarget,_aoOffsetPos){
var _oDoc=_aoDomTarget.ownerDocument,_oNetDiskInfo=_oNetDisk.getInfo(),_oTips=_oNetDiskInfo.oTips;
if(!_oTips)
{
return;
}
_oTop.waitFor(function(){
return _oTop.QMTip;
},function(_abIsOk){
if(_abIsOk)
{
var _oPos=_aoOffsetPos||{},_nLeft=+(_oPos.offsetLeft||0),_nTop=+(_oPos.offsetTop||0),_oTip=_oTips[_asTipType];
debug("tip id "+_oTip.sId+":"+_oTop.QMTip.getStatus(_oTip.sId));
if(_oTip&&!_oTip.bIsShowed&&_oTop.QMTip.getStatus(_oTip.sId)!="showed")
{
debug("cb show!");
_oTop.QMTip.show({tipid:_oTip.sId,domid:_aoDomTarget.id,win:_oDoc.defaultView||_oDoc.parentWindow,msg:_oTip.sMsg,arrow_direction:_oTip.sArrowType,arrow_offset:25+_nLeft,height_offset:4+_nTop,tip_offset:-90+_nLeft,width:305,notlog:false,bForceShow:true});
}
}
});
},"dropMenu":function(_aoDom){
var _oDoc=_aoDom.ownerDocument,_sMenuId="netdisk_droplist",_oPos=_oTop.calcPos(_aoDom,"json"),_oNetDisk=this.netDiskMgr,_oNetDiskInfo=_oNetDisk.getInfo(),_oMainFramePos=_oTop.calcPos(_oTop.S("mainFrame"),"json"),_oMenuItems=_oTmpl["bindDisk"].replace({sid:_oTop.getSid(),from:"compose",info:[_oNetDisk.getInfo("weiyun")&&_oTop.extend({images_path:_oTop.getPath("image")},_oNetDisk.getInfo("weiyun"))||{images_path:_oTop.getPath("image")}]});
new _oTop.QMDialog({sId:_sMenuId,sTitle:"\u4ECE\u7F51\u76D8\u9009\u62E9",nWidth:400,sBodyHtml:_oMenuItems,onshow:function(){
this.S("colume").onclick=function(_aoEvt){
var _oEvt=_aoEvt||getTop().event,_oDomTarget=_oTop.getEventTarget(_oEvt),_sClick;
while(!_sClick&&_oDomTarget!=this)
{
_sClick=_oTop.attr(_oDomTarget,"ck");
!_sClick&&(_oDomTarget=_oDomTarget.parentNode);
}
if(_sClick)
{
_oTop.QMDialog(_sMenuId).close();
_oNetDiskView._triggerEvents(_sClick,_aoEvt,_oDomTarget);
}
_oTop.preventDefault(_oEvt);
};
}});
},"sessionTimeout":function(){
var _oLocation=_oTop.location;
_oLocation.href=[_oLocation.protocol,"//",_oLocation.host,"/cgi-bin/loginpage?s=session_timeout"].join("");
},"ptlogin":function(_afCallback){
_oTop.QMDialog.get("netBindDiskDlg")&&(_oTop.QMDialog.get("netBindDiskDlg").close());
_oTop.toAuthorizeWeiyun();
},"bind":function(_asFrom){
var _oNetDisk=this.netDiskMgr;
new _oTop.QMDialog({sId:"netBindDiskDlg",sTitle:"\u7ED1\u5B9A\u7F51\u76D8",bAnimation:false,nWidth:430,nHeight:282,sBodyHtml:_oTmpl["bindDisk"].replace({sid:_oTop.getSid(),from:_asFrom,info:[_oNetDisk.getInfo("weiyun")&&_oTop.extend({images_path:_oTop.getPath("image")},_oNetDisk.getInfo("weiyun"))||{images_path:_oTop.getPath("image")}]})});
},"unbind":function(_asType,_afComplete){
var _oNetDisk=this.netDiskMgr,_oNetDiskInfo=_oNetDisk.getInfo(_asType);
_oTop.confirmBox({title:"\u89E3\u9664\u7ED1\u5B9A",msg:_oTop.T("\u89E3\u9664\u7ED1\u5B9A$label$?").replace({label:_oNetDiskInfo.sLabel}),width:450,onreturn:function(_aIsOk){
if(_aIsOk)
{
_oNetDisk.removeDisk(_asType,function(){
_afComplete&&_afComplete(_oNetDisk.getInfo());
});
}
else{
}
}});
},"list":function(_asType,_anExistSize){
var _oNetDiskInfo=this.netDiskMgr.getInfo(_asType);
new _oTop.QMDialog({sId:"netDiskListDlg",sTitle:[_oNetDiskInfo.sAlias=="weiyun"?'<span class="dialog_icon icon_weiyun"></span>':'<span class="dialog_icon icon_dropbox"></span>',"\u4ECE",_oNetDiskInfo.sLabel,"\u9009\u62E9\u6587\u4EF6"].join(""),nWidth:430,nHeight:440,sBodyHtml:_oTmpl["container"].replace({sType:_asType,sPath:"/"}),sClassName:"p-otherdisk",onshow:function(){
var _sPath=this.S("disklist").getAttribute("path"),_sType=this.S("con").getAttribute("type");
_oTop.finds("ul",this.S("disklist")).length==0&&_oNetDiskView._enter(this.S("disklist"),_sType,_sPath);
}});
},"accoutError":function(_asType,_asPath,_asError){
var _oNetDiskInfo=this.netDiskMgr.getInfo(_asType);
new _oTop.QMDialog({sId:"netDiskErrorDlg",sTitle:"\u8FDE\u63A5\u5931\u8D25",nWidth:430,nHeight:280,sBodyHtml:_oTmpl["errTmpl"].replace({sId:_oNetDiskInfo.sId,sType:_asType,sPath:_asPath,sLabel:_oNetDiskInfo.sLabel,sErrorType:_asError}),sClassName:"p-otherdisk",onshow:function(){
_oTop.QMDialog("netDiskListDlg").close();
}});
}};
_oNetDiskView._enter=function(_aoDom,_asType,_asPath,_abIsRetry){
var _bRoot=_asPath=="/";
_oNetDiskView.netDiskMgr.dataCenter.sync([_asType,_asPath].join(":"),{onready:function(_aoList){
if(!_aoList)
{
_oNetDiskView._listLoading(_aoDom,_bRoot);
}
else{
_oNetDiskView._isOpen(_aoDom)&&!_oNetDiskView._hasFileChecked(_aoDom)&&_oNetDiskView._listRefresh(_aoDom,"listItem",_aoList,_bRoot);
}
},onchange:function(_aoList){
_oNetDiskView._isOpen(_aoDom)&&!_oNetDiskView._hasFileChecked(_aoDom)&&_oNetDiskView._listRefresh(_aoDom,"listItem",_aoList,_bRoot);
},oncomplete:function(_abIsOk,_aoResp,_aoExistList){
debug([[_asType,_asPath].join(":"),_abIsOk+"",_aoResp.ret+"",_aoResp.msg+""],2);
if(_aoResp.ret==-2)
{
_oNetDiskView._page("sessionTimeout");
}
else if(_aoResp.msg=="abort")
{
_oNetDiskView._listLoading();
}
else if(_aoExistList&&_aoExistList.length&&_aoResp.ret!=0&&_aoResp.ret!=-199991)
{
_oTop.showError(["\u540C\u6B65",_asPath=="/"?"\u7F51\u76D8":_oTop.htmlEncode(" '"+_asPath.split("/").pop()+"'\u6587\u4EF6\u5939 "),"\u5931\u8D25 [",_aoResp.ret,"]"].join(""));
}
else if(_oNetDiskView.netDiskMgr.DEBUG['account']||_aoResp.ret==-199991)
{
if(_asType==_oNetDiskView.netDiskMgr.CONST.TYPE_WEIYUN)
{
_oNetDiskView._page("ptlogin",function(){
_oTop.QMDialog("netDiskListDlg").show();
_oNetDiskView._enter(_aoDom,_asType,_asPath);
});
}
else{
_oNetDiskView._page("accoutError",_asType,_asPath,"account");
}
}
else if(_oNetDiskView.netDiskMgr.DEBUG['connect']||_aoResp.ret!=0)
{
if(_aoResp.msg=="timeout")
{
if(!_abIsRetry)
{
setTimeout(function(){
_oNetDiskView._enter(_aoDom,_asType,_asPath,true);
},1000);
return;
}
else{
_oTop.showError("\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
}
}
_oNetDiskView._listError(_aoDom,_asType,_asPath,_bRoot);
}
}});
};
_oNetDiskView._isOpen=function(_aoDom){
var _oDomTarget=_aoDom.firstChild;
return (_oDomTarget.tagName=="LABEL"&&_oTop.hasClass(_oDomTarget,"od_file"))?(_oTop.hasClass(_oDomTarget,"expand")||false):true;
};
_oNetDiskView._hasFileChecked=function(_aoDom){
var _oDomUl=_oTop.finds("ul",_aoDom)[0],_oDomCheckList=_oTop.finds("input[type='checkbox']",_oDomUl);
for(var i=0,l=_oDomCheckList.length;i<l;i++)
{
if(_oDomCheckList[i].checked)
{
return true;
}
}
return false;
};
_oNetDiskView._toggle=function(_aoDom,_abToggle){
var _bIsFold=typeof (_abToggle)=="boolean"?_abToggle:_oTop.hasClass(_aoDom,"fold");
_oTop.rmClass(_aoDom,_bIsFold?"fold":"expand");
_oTop.addClass(_aoDom,_bIsFold?"expand":"fold");
_oTop[_bIsFold?"rmClass":"addClass"](_aoDom.nextSibling,"hide");
return _bIsFold;
};
_oNetDiskView._page=function(){
var _sPath=arguments[0],_oParam=[].slice.apply(arguments,[1]);
switch(_sPath)
{case 'list':
case 'bind':
_sCssCode&&_oTop.evalCss(_sCssCode,_oTop,"qmNetDisk");
case 'tips':
case 'dropMenu':
case "clsBind":
case 'unbind':
case 'listItem':
case 'accoutError':
case 'ptlogin':
case 'sessionTimeout':
this._route[_sPath].apply(this,_oParam);
break;
}
};
_oNetDiskView._listError=function(_aoDomTarget,_asType,_asPath,_abRoot){
_oNetDiskView._list(_aoDomTarget,_oTmpl[_abRoot?"rootError":"listError"].replace({bIsLeaf:!_abRoot,sType:_asType,sPath:_asPath}),true);
};
_oNetDiskView._listRefresh=function(_aoDomTarget,_asTmpl,_aoList,_abRoot){
for(var i in _aoList)
{
_aoList[i]["images_path"]=_oTop.getPath("image");
}
_oNetDiskView._list(_aoDomTarget,_oTmpl[_asTmpl].replace({bIsLeaf:!_abRoot,oList:_aoList}),true);
};
_oNetDiskView._listInit=function(_aoDomTarget,_asTmpl,_aoList,_abRoot){
_oNetDiskView._list(_aoDomTarget,_oTmpl[_asTmpl].replace({bIsLeaf:!_abRoot,oList:_aoList}),false);
};
_oNetDiskView._listLoading=function(_aoDomTarget,_abIsRoot){
var _oDomContainer=_oTop.QMDialog("netDiskListDlg").S("disklist"),_oDomLoading=_oTop.finds("ul[ui-type='loading']",_oDomContainer);
for(var i=0;i<_oDomLoading.length;i++)
{
!_aoDomTarget&&_oDomLoading[i].previousSibling&&_oTop.hasClass(_oDomLoading[i].previousSibling,"expand")&&this._toggle(_oDomLoading[i].previousSibling,false);
_oTop.removeSelf(_oDomLoading[i]);
}
_aoDomTarget&&_oNetDiskView._list(_aoDomTarget,_oTmpl[_abIsRoot?"rootLoading":"listLoading"].replace({images_path:_oTop.getPath("image")}),true);
};
_oNetDiskView._list=function(_aoDomTarget,_asHtml,_abRefresh){
var _oChildNodes=_aoDomTarget.childNodes;
for(var i=0,l=_oChildNodes.length;i<l;i++)
{
if(_oChildNodes[i].tagName=="UL")
{
if(_abRefresh)
{
_oTop.removeSelf(_oChildNodes[i]);
break;
}
else if(_abRefresh==false)
{
return;
}
}
}
_oChildNodes=_aoUndefined;
_oTop.insertHTML(_aoDomTarget,"beforeEnd",_asHtml);
};
(function(_abIsInit){
if(!_abIsInit)
{
return;
}
_oTop.liveEvent(_oTop.document.body,_oActions);
})(_oTop["gbIsInitNetDisk"]);
_oTop['QMNetDiskView']=_oNetDiskView;
})();
(function(_aoUndefined){
var _BATCH_NUM=1;
_oNetDisk.sharelink={queue:{Q:[],E:[],_put:function(_aoQueue){
this.Q=this.Q.concat(_aoQueue);
this._autorun();
},_get:function(){
return this.Q.shift();
},_error:function(_aoQueue){
_aoQueue.nErrorID=_oTop.unikey();
this.E=this.E.concat(_aoQueue);
return _aoQueue;
},_autorun:function(){
var _oSelf=this;
if(!_oSelf._bRunning)
{
var _oList=_oSelf._get();
if(!_oList)
{
return;
}
var _oQueryData=_oList.oQueryData,_oCallbacks=_oList.oCallbacks||{},_oNetDiskInfo=_oNetDisk.getInfo(_oQueryData[0].sType),_oQueryStr=_oTop.TE(['sid=$sid$&r=$r$&action=getshareurl&ef=js&drivename=$alias$&userid=$userid$&resp_charset=UTF8','$@$for($data$)$@$','&id=$@$eval encodeURIComponent($sId$)$@$&path=$@$eval encodeURIComponent($sPath$)$@$&name=$@$eval encodeURIComponent($sName$)$@$&pid=$@$eval encodeURIComponent($sPid$)$@$&size=$nSize$','$@$endfor$@$']);
_oSelf._bRunning=true;
_oCallbacks.onready&&_oCallbacks.onready.call(_oNetDisk,_oQueryData);
_oTop.QMAjax.send("/cgi-bin/netdriveapi",{method:"POST",timeout:"10000",content:_oQueryStr.replace({sid:_oTop.getSid(),alias:_oNetDiskInfo.sAlias,userid:_oNetDiskInfo.sUserid,data:_oQueryData}),onload:function(_abIsOk,_asParam,_aoXhr){
var _bRet=false,_oData={};
_oSelf._bRunning=false;
if(_abIsOk&&_oNetDisk.DEBUG.sharelink==0)
{
_oData=eval(["(",_asParam,")"].join(""));
if(_oData.ret==0)
{
_bRet=true;
for(var i=0;i<_oData.oList.length;i++)
{
_oTop.extend(_oQueryData[i],_oData.oList[i]);
if(!_oData.oList[i].sLink)
{
_bRet=false;
}
}
!_bRet&&_oTop.ossLog("delay","all","stat=nothing&locval=netdisk,sharelink,link,0");
}
else{
_oTop.ossLog("delay","all","stat=nothing&locval=netdisk,sharelink,ret,0");
}
}
else{
_oTop.ossLog("delay","all","stat=nothing&locval=netdisk,sharelink,network,0");
}
if(_bRet)
{
_oCallbacks.onsuccess&&_oCallbacks.onsuccess.call(_oNetDisk,_oQueryData);
}
else{
_oTop.showError("\u83B7\u53D6\u7F51\u76D8\u5206\u4EAB\u94FE\u63A5\u5931\u8D25");
_oCallbacks.onfailed&&_oCallbacks.onfailed.call(_oNetDisk,_oSelf._error(_oList),_asParam,_aoXhr);
}
_oCallbacks.oncomplete&&_oCallbacks.oncomplete.apply(_oNetDisk,arguments);
if(_oData.errcode==-2)
{
_oNetDisk.route("sessionTimeout");
}
else if(_oData.ret==-199991)
{
_oNetDisk.route("ptlogin","weiyun",function(){
_oSelf._autorun();
});
return;
}
_oSelf._autorun();
}});
}
}},isRunning:function(){
return !!this.queue._bRunning;
},hasTODOFile:function(){
return !!this.queue.Q.length;
},hasErrorFile:function(){
return !!this.queue.E.length;
},retry:function(_asErrorID,_afComplete){
for(var i=0;l=this.queue.E.length;i++)
{
if(this.queue.E[i].nErrorID==_asErrorID)
{
this.queue._put(this.queue.E.splice(i,1));
_afComplete&&_afComplete.call(_oNetDisk);
break;
}
}
},clean:function(){
this.queue.Q=[];
this.queue.E=[];
},get:function(_aoFileList,_aoCallbacks){
var _nBatchNum=_BATCH_NUM,_oQueue=[],_oCallbacks=_aoCallbacks||{},_oList=_oTop.isArr(_aoFileList)?_aoFileList:[_aoFileList],_oNetDiskInfo=_oNetDisk.getInfo(_oList[0].sType);
_oCallbacks.oninit&&_oCallbacks.oninit.call(_oNetDisk,_oList);
while(_aoFileList.length)
{
_oQueue.push({oQueryData:_aoFileList.splice(0,_nBatchNum),oCallbacks:_aoCallbacks});
}
this.queue._put(_oQueue);
}};
})();
function _syncReset(_abIsInit)
{
!_abIsInit&&(_nTimerCnt=_TIMER_MAX);
clearTimeout(_nTimerId);
}
;function _sort(_oDiskData)
{
if(_oDiskData.nNum<2)
{
return;
}
var _oList=[],_oNewMap={};
for(var i in _oDiskData.oBound)
{
_oList.push(_oDiskData.oBound[i]);
}
_oList.sort(function(a,b){
return (+a.sId)-(+b.sId);
});
for(var i=0;i<_oList.length;i++)
{
_oNewMap[_oList[i].sAlias]=_oList[i];
}
_oDiskData.oBound=_oNewMap;
}
;_oNetDisk.setLocalInfo=function(_aoLocalInfo){
_goLocalInfo=_aoLocalInfo;
};
_oNetDisk.isUseLocalInfo=function(_abUse){
return !!_goLocalInfo;
};
_oNetDisk.setInfo=function(_asType,_aoDisk){
var _oGlobalStat=this.isUseLocalInfo()?_goLocalInfo:_oTop.goUserInfo.get(this.CONST.DATA_NAME);
if(!_oGlobalStat.oBound[_asType])
{
_oGlobalStat.nNum++;
}
if(this.isUseLocalInfo())
{
var _oDisk=_oTop.goUserInfo.get(this.CONST.DATA_NAME);
if(!_oDisk)
{
_oDisk=_oTop.goUserInfo.get("NetDisk")={oBound:{}};
_oDisk.oBound[_asType]=_aoDisk;
}
else{
var _oBound=_oDisk.oBound;
if(!_oBound)
{
_oBound=_oDisk.oBound={};
}
_oBound[_asType]=_aoDisk;
}
}
_oGlobalStat.oBound[_asType]=_aoDisk;
_sort(_oGlobalStat);
_oDiskStat=_oGlobalStat;
};
_oNetDisk.getInfo=function(_asType){
var _oGlobalStat=this.isUseLocalInfo()?_goLocalInfo:_oTop.goUserInfo.get(this.CONST.DATA_NAME);
_sort(_oGlobalStat);
if(_asType)
{
return _oGlobalStat.oBound[_asType];
}
return _oGlobalStat;
};
_oNetDisk.delInfo=function(_asType){
var _oGlobalStat=this.isUseLocalInfo()?_goLocalInfo:_oTop.goUserInfo.get(this.CONST.DATA_NAME);
_oGlobalStat.nNum--;
delete _oGlobalStat.oBound[_asType];
if(this.isUseLocalInfo())
{
var _oDisk=_oTop.goUserInfo.get(this.CONST.DATA_NAME);
_oDisk&&_oDisk.oBound&&(_oDisk.oBound[_asType]=undefined);
}
_oDiskStat=_oGlobalStat;
};
_oNetDisk.diff=function(_aoDiskInfo){
if(({}).toString.call(_oDiskStat.oBound)=="[object Array]")
{
_oDiskStat=_oTop.goUserInfo.get(this.CONST.DATA_NAME);
}
if(_aoDiskInfo.nNum!=_oDiskStat.nNum)
{
return true;
}
if(_aoDiskInfo.nNum==0)
{
return false;
}
for(var i in _aoDiskInfo.oBound)
{
if(!_oDiskStat.oBound[i])
{
return true;
}
}
return false;
};
_oNetDisk.getDiskNum=function(){
return _oDiskStat.nNum;
};
_oNetDisk.route=function(){
this.viewRender._page.apply(this.viewRender,arguments);
};
_oNetDisk.syncDiskInfo=function(_afComplete){
_syncReset(true);
_oTop.QMAjax.send(_oTop.T("/cgi-bin/netdriveapi?sid=$sid$&r=$r$&action=getauthlist&ef=js").replace({sid:_oTop.getSid()}),{method:"GET",timeout:2000,onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oData=eval(["(",_asParam,")"].join(""));
if(_oData.ret==0)
{
if(_oNetDisk.diff(_oData.info))
{
var _oUpdateList=_oNetDisk.CONST.TYPE_ALL;
for(var i=0;i<_oUpdateList.length;i++)
{
_oNetDisk.getInfo(_oUpdateList[i])&&_oNetDisk.delInfo(_oUpdateList[i]);
_oData.info.oBound[_oUpdateList[i]]&&_oNetDisk.setInfo(_oUpdateList[i],_oData.info.oBound[_oUpdateList[i]]);
}
_syncReset();
if(!_afComplete)
{
_oTop.showInfo("\u5DF2\u6210\u529F\u7ED1\u5B9A\u7F51\u76D8");
}
_oNetDisk.route("clsBind");
_oNetDisk.fireEvent(_oNetDisk.EVENT.INFO_CHANGED,[_oNetDisk.getInfo()]);
_afComplete&&_afComplete();
return;
}
}
_oData.errcode==-2&&_oNetDisk.route("sessionTimeout");
}
if(_nTimerCnt>0)
{
_nTimerId=setTimeout(function(){
_oNetDisk.syncDiskInfo.call(_oNetDisk,_afComplete);
},_TIMER_INTERVAL);
_nTimerCnt--;
}
else{
_syncReset();
}
}});
};
_oNetDisk.removeDisk=function(_avParam,_afComplete,_abShowTips){
var _bShowTips=typeof (_abShowTips)=="boolean"?_abShowTips:true,_oNetDiskInfo=typeof (_avParam)=="object"?_avParam:this.getInfo(_avParam),_sType=_oNetDiskInfo.sAlias,_sUrl=_oTop.T('/cgi-bin/netdriveapi?sid=$sid$&r=$r$&action=delauthinfo&drivename=$alias$&userid=$userid$&ef=js').replace({sid:_oTop.getSid(),alias:_oNetDiskInfo.sAlias,userid:_oNetDiskInfo.sUserid});
_bShowTips&&_oTop.showInfo(["\u6B63\u5728\u89E3\u7ED1",_oNetDiskInfo.sLabel,"..."].join(""),-1);
_oTop.QMAjax.send(_sUrl,{method:"GET",onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oData=eval(["(",_asParam,")"].join(""));
if(_oData.ret==0)
{
_oNetDisk.getInfo(_sType)&&_oNetDisk.delInfo(_sType);
_bShowTips&&_oTop.showInfo("\u89E3\u7ED1\u6210\u529F");
_afComplete&&_afComplete.call(_oNetDisk);
_oNetDisk.fireEvent(_oNetDisk.EVENT.INFO_CHANGED,[_oNetDisk.getInfo()]);
return;
}
_oData.errcode==-2&&_oNetDisk.route("sessionTimeout");
}
_oTop.showError("\u89E3\u7ED1\u5931\u8D25");
}});
};
_oNetDisk.progress=function(_asTaskid,_afProgress,_asActionType){
var _nIntervalTime=1000,_sActionType=typeof (_asActionType)=="undefined"?"download":_asActionType,_nCurrCnt=0,_nDesPercent=12,_nMaxCnt=3,_nLastPercent=0,_fGetFixPercent=function(_anCurrPercent){
var _sSymbol=((Math.random()+"").split("").pop()%2==0)?"-":"+",_sNum=_sSymbol+(+new Date()%2);
if(_nCurrCnt<_nMaxCnt)
{
_nLastPercent=_nLastPercent+_nDesPercent/_nMaxCnt+(Number(_sNum));
_nCurrCnt++;
}
return Math.max(_anCurrPercent,_nLastPercent);
};
if(!_oProgressFunc[_asTaskid])
{
_oProgressFunc[_asTaskid]=_afProgress;
}
(function(_asUrl,_asTaskid){
var _fInterval=arguments.callee;
_oTop.QMAjax.send(_asUrl,{method:"GET",onload:function(_abIsOk,_asParam,_aoXhr){
var _oData={};
if(_abIsOk)
{
try{
_oData=eval(["(",_asParam,")"].join(""));
}
catch(e)
{
debug(e,2);
}
if(_oData.ret==0&&_oData.percent<100)
{
_oProgressFunc[_asTaskid]&&_oProgressFunc[_asTaskid](_sActionType=="download"?_fGetFixPercent(_oData.percent):_oData.percent,_oData);
}
}
if(_oData.ret==0&&_oData.percent!=100)
{
setTimeout(function(){
_fInterval(_asUrl,_asTaskid);
},_nIntervalTime);
}
else if(_oData.percent==100)
{
if(_sActionType=="download"&&!_oData.fieldid)
{
_oProgressFunc[_asTaskid]&&_oProgressFunc[_asTaskid](-2,_oData,"internal,709396");
}
else{
_oProgressFunc[_asTaskid]&&_oProgressFunc[_asTaskid](_oData.percent,_oData);
}
delete _oProgressFunc[_asTaskid];
}
else{
var _sError;
if(_oData.ret<0)
{
_sError="cgi,"+(10000+Math.abs(_oData.ret));
}
else if(_oData.errcode)
{
_sError="cgi,"+_oData.errcode;
}
else if(!_abIsOk&&_asParam=="abort")
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
if(_oData.ret>-105&&_oData.ret<-100)
{
_oProgressFunc[_asTaskid]&&_oProgressFunc[_asTaskid](_oData.ret,_oData,_sError);
}
else{
_oProgressFunc[_asTaskid]&&_oProgressFunc[_asTaskid](_oData.errcode==-2?_oData.errcode:-1,_oData,_sError);
}
delete _oProgressFunc[_asTaskid];
}
}});
})(_oTop.T('/cgi-bin/netdriveupload?sid=$sid$&r=$r$&action=$action$&taskid=$taskid$&ef=js').replace({action:_sActionType=="upload"?"queryupload":"querydownload",sid:_oTop.getSid(),taskid:_asTaskid}),_asTaskid);
};
_oNetDisk.uploadEntry=function(_aoDom){
var _oDiskBound=this.getInfo().oBound,_oItemList=[],_sAttid=_aoDom.getAttribute("attid"),_isBigAttach=_aoDom.getAttribute("bigattch")=="true",_sKey=_aoDom.getAttribute("k"),_sftnCode=_aoDom.getAttribute("ftncode"),_sftnSaveUrl=_aoDom.getAttribute("ftnsaveurl"),_sFid=_aoDom.getAttribute("fid");
if(_isBigAttach&&((_sKey&&_sftnCode)||_sftnSaveUrl))
{
_oItemList.push("\u8F6C\u5B58\u5230\u4E2D\u8F6C\u7AD9");
}
for(var i in _oMenuData)
{
_oItemList.push("\u8F6C\u5B58\u5230"+_oMenuData[i].sLabel);
}
!_oTop.hasClass(_aoDom.ownerDocument.body,"netdisk_multi")&&_oTop.addClass(_aoDom.ownerDocument.body,"netdisk_multi");
};
_oNetDisk.bind=function(_asType,_afCallback){
if(_asType=="weiyun")
{
_oTop.QMAjax.send(_oTop.T("/cgi-bin/netdriveback?sid=$sid$&ptype=weiyun&ef=js").replace({sid:_oTop.getSid()}),{method:"GET",onload:function(_abIsOk,_asParam){
var _oData={};
if(_abIsOk)
{
try{
_oData=eval(["(",_asParam,")"].join(""));
}
catch(e)
{
debug(e,2);
}
if(_oData.ret==0)
{
_oNetDisk.getInfo("weiyun")&&_oNetDisk.delInfo("weiyun");
_oNetDisk.setInfo("weiyun",_oData.info);
if(!_afCallback)
{
_oTop.showInfo("\u5DF2\u6210\u529F\u7ED1\u5B9A\u7F51\u76D8");
}
_oNetDisk.fireEvent(_oNetDisk.EVENT.INFO_CHANGED,[_oNetDisk.getInfo()]);
_afCallback&&_afCallback.call(_oNetDisk,_oNetDisk.getInfo());
return;
}
}
if(_oData.errcode==-199991)
{
_oNetDisk.viewRender._page("ptlogin",function(){
_oNetDisk.bind(_asType,_afCallback);
});
}
else if(_oData.errcode==-2)
{
_oNetDisk.viewRender._page("sessionTimeout");
}
if(_oData.errcode!=-199991)
{
_oTop.showError(["\u7ED1\u5B9A\u5931\u8D25 [",_oData.errcode||_oData.ret||_asParam,"]"].join(""));
}
}});
}
else{
_oTop.open(_oTop.T("$base_domain$/cgi-bin/netdriveback?sid=$sid$&ktype=getrequest&ptype=$type$").replace({base_domain:_oTop.getTopHost(),sid:_oTop.getSid(),type:_asType}));
_oNetDisk.syncDiskInfo(function(){
if(_asType!="dropbox")
{
_oTop.showInfo("\u5DF2\u6210\u529F\u7ED1\u5B9A\u7F51\u76D8");
}
_afCallback&&_afCallback.call(_oNetDisk,_oNetDisk.getInfo());
});
}
};
_oNetDisk.download=function(_asType,_asPath,_aoCallbacks){
this.addTask.call(_oNetDisk,"download",_asType,_asPath,_aoCallbacks);
};
_oNetDisk.upload=function(){
var _oInfo=this.getInfo(),_oArgs=arguments,_fUpload=function(_asType,_asUserid,_asAttachId){
var _sFileName=_asAttachId.split("|").pop();
var _oNewWin=window.open(_oTop.T(["$base_domain$/cgi-bin/readtemplate","?action=addtaskupload&userid=$userid$&sid=$sid$&ptype=$type$&mailattach=$attid$&t=attachfolder_page_todisk","&filename=$filename$&fileicon=$fileicon$&nocheckframe=true"]).replace({base_domain:getTop().getTopHost(),sid:_oTop.getSid(),type:_asType,userid:_asUserid,attid:_asAttachId,fileicon:_oNetDisk.dataCenter.getFileIcon(_sFileName.split(".").pop()).replace("/ico_min/","/ico_max/").replace("/ico_mid/","/ico_max/"),filename:_sFileName}));
},_fFtnStorefile=function(_asKey,_asCode,_asFtnSaveUrl){
var _sFtnSaveUrl=_asFtnSaveUrl||_oTop.T("/cgi-bin/ftnStoreFile?k=$key$&code=$code$&sid=$sid$&action=save&t=autosave").replace({sid:_oTop.getSid(),key:_asKey,code:_asCode});
_oTop.getActionWin().location=_sFtnSaveUrl;
},_fBigAttWeiyun=function(_asFid,_asKey,_asAttachId,_asftnCode){
var _sFileName=_asAttachId.split("|").pop();
var _oNewWin=window.open(_oTop.T(["$base_domain$/cgi-bin/readtemplate","?&sid=$sid$&ptype=$type$&t=attachfolder_page_todisk","&fid=$fid$&key=$key$&fcode=$fcode$","&filename=$filename$&fileicon=$fileicon$&nocheckframe=true","&action=bigattweiyun"]).replace({fcode:_asftnCode||"",base_domain:_oTop.getTopHost(),sid:_oTop.getSid(),type:"weiyun",fid:_asFid,key:_asKey,fileicon:_oNetDisk.dataCenter.getFileIcon(_sFileName.split(".").pop()).replace("/ico_min/","/ico_max/").replace("/ico_mid/","/ico_max/"),filename:encodeURI(_sFileName)}));
},_fCheckFile=function(_aoFileInfo){
var _sName=_aoFileInfo.sFileName.toLowerCase(),_nSize=parseFloat(_aoFileInfo.sSize),_nInvalidFormat={};
if(_aoFileInfo.sSize&&_aoFileInfo.sSize.charAt(_aoFileInfo.sSize.length-1)=="G")
{
_nSize=_nSize*1024*1024*1024;
}
if(_nSize>_oMenuData[i].limit)
{
return ["<span class='graytext'>\u8F6C\u5B58\u5230",_oMenuData[i].sLabel,"(",_oMenuData[i].over,")</span>"].join("");
}
return "";
};
if(typeof (_oArgs[0])!="string")
{
var _oDiskBound=_oInfo.oBound,_oItemList=[],_oDom=_oArgs[0],_oWin=_oDom.ownerDocument.defaultView||_oDom.ownerDocument.parentWindow;
_sAttid=_oArgs[1]||_oDom.getAttribute("attid"),_sFileName=_sAttid.split("|").pop(),_isBigAttach=_oDom.getAttribute("bigattch")=="true",_sKey=_oDom.getAttribute("k"),_sftnCode=_oDom.getAttribute("ftncode"),_sftnSaveUrl=_oDom.getAttribute("ftnsaveurl"),_sFid=_oDom.getAttribute("fid"),_oPos=_oTop.calcPos(_oDom,"json"),_sSize=_oDom.getAttribute("size");
if(_isBigAttach&&((_sKey&&_sftnCode)||_sftnSaveUrl))
{
_oItemList.push({sId:"ftn",sItemValue:"\u8F6C\u5B58\u5230\u4E2D\u8F6C\u7AD9"});
}
for(var i in _oMenuData)
{
if(i=="weiyun"||(i=="dropbox"&&!_isBigAttach))
{
var _sTmpValue,_bDisabled;
if(false&&(_sTmpValue=_fCheckFile({sFileName:_sFileName,sSize:_sSize}))&&i=="weiyun")
{
_bDisabled=true;
}
else{
_sTmpValue="\u8F6C\u5B58\u5230"+_oMenuData[i].sLabel;
_bDisabled=false;
}
_oItemList.push({sId:_oMenuData[i].sAlias,sItemValue:_sTmpValue,bDisSelect:_bDisabled});
}
}
if(_oItemList.length)
{
var _oMenu=new _oTop.QMMenu({oEmbedWin:_oWin,sId:"upload2Netdisk",nX:_oPos.left,nY:_oPos.top+15,nItemHeight:21,oItems:_oItemList,onitemclick:function(_asId){
if(_asId=="weiyun"||_asId=="dropbox")
{
if(_oDiskBound[_asId])
{
if(_isBigAttach)
{
_fBigAttWeiyun.apply(this,[_sFid,_sKey,_sAttid,_sftnCode]);
}
else{
_fUpload.apply(_oNetDisk,[_asId,_oDiskBound[_asId].sUserid,_sAttid]);
}
}
else{
_oNetDisk.bind(_asId,function(_aoData){
_oTop.confirmBox({title:"\u63D0\u793A",msg:_oTop.T("\u5DF2\u6210\u529F\u7ED1\u5B9A\u7F51\u76D8\uFF0C\u70B9\u51FB\u201C\u4E0B\u4E00\u6B65\u201D\u8FDB\u884C\u6587\u4EF6\u8F6C\u5B58\u3002").replace(_aoData.oBound[_asId]),confirmBtnTxt:"\u4E0B\u4E00\u6B65",cancelBtnTxt:"\u53D6\u6D88",width:400,onreturn:function(_aIsOk){
if(_aIsOk)
{
if(_isBigAttach)
{
_fBigAttWeiyun.apply(this,[_sFid,_sKey,_sAttid,_sftnCode]);
}
else{
_oNetDisk.upload.apply(_oNetDisk,[_asId,_aoData.oBound[_asId].sUserid,_sAttid]);
}
}
}});
});
}
}
else{
if(_asId=="ftn")
{
_fFtnStorefile.apply(this,[_sKey,_sftnCode,_sftnSaveUrl]);
}
else if(_asId=="mobile")
{
_oMenu.close();
var _oAttachItem=parents("div.attachitem",_oDom)[0],_oPreviewItem=finds("a[ck='previewAttach2']",_oAttachItem)[0];
showTwoDCodeImgMenu(_oWin,_oDom,_oTop.attr(_oPreviewItem,"filename"),_oTop.attr(_oPreviewItem,"down"));
}
}
}});
}
}
else{
_fUpload.apply(this,_oArgs);
}
};
_oNetDisk.addTask=function(_asTaskType,_asDiskType,_asPath,_aoCallbacks){
var _oCallbacks=_aoCallbacks||{},_oNetDiskInfo=this.getInfo(_asDiskType),_sUrl=_oTop.T(['/cgi-bin/netdriveupload?','sid=$sid$&r=$r$&action=$task$&ptype=$alias$&path=$path$','&mailattach=$attid$&fileid=$fid$&userid=$userid$&ef=js']).replace({sid:_oTop.getSid(),task:_asTaskType=="download"?"addtaskdownload":"addtaskupload",path:_asTaskType=="download"?encodeURIComponent(_asPath):"",attid:_asTaskType=="upload"?_asPath:"",fid:_asTaskType=="download"?_oTop.encodeURI(this.dataCenter.getFile([_asDiskType,_asPath].join(":")).sId||""):"",alias:_oNetDiskInfo.sAlias,userid:_oNetDiskInfo.sUserid});
if(_oCallbacks.onready&&_oCallbacks.onready.call(_oNetDisk)===false)
{
return;
}
_oTop.QMAjax.send(_sUrl,{method:"GET",onload:function(_abIsOk,_asParam,_aoXhr){
var _oData={},_sError;
if(_abIsOk)
{
try{
_oData=eval(["(",_asParam,")"].join(""));
}
catch(e)
{
debug(e,2);
}
if(_oData.ret==0)
{
_oCallbacks.onsuccess&&_oCallbacks.onsuccess.call(_oNetDisk,_oData);
_oCallbacks.oncomplete&&_oCallbacks.oncomplete.call(_oNetDisk,_abIsOk,_oData,_asParam);
return;
}
}
if(_oData.ret<0)
{
_sError="cgi,"+(10000+Math.abs(_oData.ret));
}
else if(_oData.errcode)
{
_sError="cgi,"+_oData.errcode;
}
else if(!_abIsOk&&_asParam=="abort")
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
_oCallbacks.onfailed&&_oCallbacks.onfailed.call(_oNetDisk,_sError);
_oCallbacks.oncomplete&&_oCallbacks.oncomplete.call(_oNetDisk,_abIsOk,{ret:+_oData.errcode||-100861},_asParam);
}});
};
_oNetDisk.addEvent=function(_asName,_afHanlder){
if(_oTop.getMainWin())
{
_oTop.getMainWin()[_asName]=_afHanlder;
}
};
_oNetDisk.fireEvent=function(_asName,_aoData){
var _fMainWinHandler=_oTop.getMainWin()&&_oTop.getMainWin()[_asName];
_fMainWinHandler&&_fMainWinHandler.apply(this,_aoData);
};
(function(_abIsInit){
if(!_abIsInit)
{
return;
}
_oTop['QMNetDisk']=_oNetDisk;
_oNetDisk.dataCenter=_oTop['QMNetDiskData'];
_oNetDisk.viewRender=_oTop['QMNetDiskView'];
_oNetDisk.viewRender.netDiskMgr=_oNetDisk.dataCenter.netDiskMgr=_oNetDisk;
})(_oTop["gbIsInitNetDisk"]);
})();
function qmnetdisk_js()
{
}
