(function(_aoLoadWin){
var _goStatic,_goClass;
var _goStatic=function(_aoWin){
this._moTriggerDom;
this._moWin=_aoWin;
this._msShowInfo;
this._moTmpTR;
this._mnStatus;
this._msDomId;
this._moInfoCard;
this._mnTimeId;
this._moAjax;
this._moInfos=[];
};
_goClass=_goStatic.prototype;
_goStatic._TEMPLATE={};
_goStatic._TEMPLATE._INSTANCE="_QmProfileTipsInst_";
_goStatic._TEMPLATE._LINKEDIN_DETAIL=TE(['<div class="linkedin_info" style="margin:0 16px 16px 16px;line-height:20px; padding: 10px 0 0 0; border-top: 1px solid #ddd; color: #606060;">','<div><a href="$linkedInPublicProfileUrl$" target="_blank" style="cursor:pointer">$linkedInName$</a></div>','<div>$LinkedInMainAddress$</div>','<div>$linkedInIndustry$$@$if($linkedInIndustry$&&$linkedInTitle$)$@$ | $@$endif$@$$linkedInTitle$</div>','<div>$linkedInCompanyName$</div>','<div style="color:#ccc"><img style="_margin-bottom:-2px;" width="10" height="10" src="http://res.mail.qq.com/zh_CN/htmledition/images/icon_linkedin.png" title="Linkedin">&nbsp;','\u4FE1\u606F\u7531LinkedIn\u9886\u82F1\u63D0\u4F9B','</div>','</div>']);
_goStatic._TEMPLATE._INFOCARD_DETAIL=TE(['<div class="profile_inner">','<img src="$icon$" title="" class="iconMask_gray" />','<div class="nowrap">','<span id="span_displayname_$email$" class="green bold b_size txtflow ','$@$if($addrvip$=="")$@$','tip_dispname_long ','$@$else$@$','tip_dispname_short ','$@$endif$@$','" title="$attrname$" ','$@$if($addrvip$!="")$@$','style="float: left; margin-right: 4px;"','$@$endif$@$','>','$dispname$','</span>','$@$if($qqnum$)$@$','<span class="graytext" style="float: left; margin-right:4px; _line-height: 16px;">($qqnum$)</span>','$@$endif$@$','$@$if($addrvip$!=""&&$btnnum$!=0)$@$','<span class="tip_iclist_ico_wrap" id="addVipAddr_$email$" ','style="vertical-align: 0;*vertical-align: -2px;_vertical-align: -3px;','$@$if($addrvip$=="true")$@$','display: none;','$@$endif$@$','"','>','<span class="tip_iclist_ico_btn" title="\u8BBE\u4E3A\u91CD\u8981\u8054\u7CFB\u4EBA"></span>','</span>','<span class="tip_iclist_ico_wrap tip_iclist_ico_wrap_vip" id="delVipAddr_$email$" ','style="vertical-align: 0;*vertical-align: -2px;_vertical-align: -3px;','$@$if($addrvip$=="false")$@$','display: none;','$@$endif$@$','"','>','<span class="tip_iclist_ico_btn" title="\u79FB\u9664\u91CD\u8981\u8054\u7CFB\u4EBA"></span>','</span>','$@$endif$@$','</div>','<div class="profile_inner_info">','$@$if(!$issys$)$@$','<a href="javascript:;" onclick=\'getTop().QMProfileTips.oper("mailTo","$_id$","$email$", "$showinfo$", "$jsname$")\' class="graytext pointer accountFrom" title="\u7ED9TA\u5199\u4FE1" style="margin-right:9px;">$dispemail$</a>','$@$else$@$','<span class="graytext" title="$dispemail$" style="margin-right:9px;">$dispemail$</span>','$@$endif$@$','$@$if($email$!="10000@qq.com")$@$','<a class="pointer" ck="checkContactsEmails" style="display:inline-block;" href="/cgi-bin/mail_list?sid=$sid$&s=searchcontact&sender=','$@$eval encodeURIComponent($email$)$@$','&receiver=$@$eval encodeURIComponent($email$)$@$','&name=$name$&matchtype=include&folderid=all&page=0&AddrID=$AddrId$&grpid=$grpid$&category=all&from=profile&loc=profile,searchcontact,0,0">\u5F80\u6765\u90AE\u4EF6</a>','$@$endif$@$','</div>','</div>','$@$if($bindLinkedIn$=="true")$@$',_goStatic._TEMPLATE._LINKEDIN_DETAIL,'$@$endif$@$','$@$if($btnnum$!=0)$@$','<div class="profile_ope">','<table class="pro_ope ','$@$if($filinghtml$!="" || $rejectionhtml$!="")$@$','$@$if($filinghtml$!="" && $rejectionhtml$!="")$@$',' pro_ope_four','$@$else$@$',' pro_ope_three','$@$endif$@$','$@$endif$@$','"><tr>','$@$if($rejectionhtml$!="")$@$','<td class="reject_td','$@$if($addrvip$=="" && $filinghtml$=="" && $addrinfohtml$=="")$@$',' pro_ope_last','$@$endif$@$','">','$rejectionhtml$','</td>','$@$endif$@$','$addrinfohtml$','$@$if($filinghtml$!="")$@$','<td class="filing_td pro_ope_last">$filinghtml$</td>','$@$endif$@$','</tr></table>','</div>','$@$endif$@$']);
_goStatic._TEMPLATE._CORP_PROFILETIPS_DETAIL=TE(['<div class="tipInner tipVerified">','$@$if($sCorpHomePage$)$@$','<a href="$sCorpHomePage$" target="_blank" class="ico_verified pointer"></a>','<a class="tipVerified_logo pointer" href="$sCorpHomePage$" target="_blank" title="$@$eval htmlEncode($sCorpName$)$@$" style="background-image:url($sLogoUrl$);"></a>','$@$else$@$','<span class="ico_verified"></span>','<span class="tipVerified_logo" title="$@$eval htmlEncode($sCorpName$)$@$" style="background-image:url($sLogoUrl$);"></span>','$@$endif$@$','<div class="tipVerified_name green" test="$sLogoUrl$" style="padding:20px 0 3px;">$@$eval htmlEncode($sCorpName$)$@$</div>','<div class="tipVerified_addr"><span class="addrtitle left">\u5730\u5740\uFF1A</span>$@$eval htmlEncode($sCorpAddr$)$@$</div>','<div class="tipVerified_desc graytext">$@$eval htmlEncode($sCorpRemark$)$@$</div>','<div class="tipVerified_from"><a class="pointer" href="http://service.exmail.qq.com/cgi-bin/help?subtype=1&&id=23&&no=1001001" target="_blank">\u817E\u8BAF\u4F01\u4E1A\u90AE\u7BB1\u8BA4\u8BC1</a></div>','</div>']);
_goStatic._TEMPLATE._INFOCARD=TE(['<div class="profileTip" id="infocard_$_id$" style="display:none;">','<div class="infoArrowUp" id="infoarrowup_$_id$" style="display:none;"></div>','$@$if($role$=="corpprofile")$@$','$@$for($_oFeeds$)$@$',_goStatic._TEMPLATE._CORP_PROFILETIPS_DETAIL,'$@$endfor$@$','$@$else$@$','<div class="tipWrap $@$if($_oFeeds.length$>1)$@$ tipWrapWithArrow $@$endif$@$">','<div class="tipAll" style="width:$_nTotalWidth$px;left:-$_nCurrentLeft$px">','$@$for($_oFeeds$)$@$','<div class="tipInner" $@$if($btnnum$==0&&$_root_._oFeeds.length$>1)$@$ style="height:102px" $@$endif$@$>',_goStatic._TEMPLATE._INFOCARD_DETAIL,'</div>','$@$endfor$@$','</div>','<div class="tipSwitch">','<div class="tipAllLeft $@$if($_bIsNeedLeft$==false)$@$ tipAllLeft_disabled $@$endif$@$"></div>','<div class="tipAllRight $@$if($_nIsNeedRigth$==false)$@$ tipAllRight_disabled $@$endif$@$"></div>','</div>','</div>','$@$endif$@$','<div class="infoArrowDown" id="infoarrowdown_$_id$" style="display:none;"></div>','</div>']);
_goStatic._TEMPLATE._EXTENDHTML=TE(['$@$if($addrid$==-1||$addrid$==""||!$addrid$)$@$','<td id="a_add_$email$" class="addedit_td" ><a href="javascript:;"  u="$uin$" e="$email$" n="$username$" onclick="getTop().QMProfileTips.contactHandle(\'addc\',this)" title="\u5C06\u6B64\u53D1\u4EF6\u4EBA\u6DFB\u52A0\u5230\u901A\u8BAF\u5F55"  class="pointer">','\u6DFB\u52A0</a></td>','$@$else$@$','<td id="a_edit_$email$" class="addedit_td" ><a href="javascript:;" u="$uin$" e="$email$" n="$username$" onclick="getTop().QMProfileTips.contactHandle(\'editc\',this)" addrid="$addrid$"  class="pointer">\u7F16\u8F91</a></td>','$@$endif$@$']);
_goStatic._TEMPLATE._LOGO=TE(['<span id="infocard_$_id$" style="display:none;position:absolute;cursor:default;z-index:888;margin:-12px 0 0 -15px;">','<div unselectable="on" id="imglogonewtips" class="newtips" >','<div style="opacity: 1;" unselectable="on" id="imglogotipcontainer" class="tipcontainer">','<img id="imglogoup" class="arrowup" style="margin-left:18px;*position:relative;*top:6px;*left:18px;" src="$images_path$webp/spacer1e9c5d.gif">','<div unselectable="on" class="container">','<div unselectable="on" class="contentcontainer">','<a class="btnClose" name="closecard" href="javascript:;" style="margin-top:6px;*right:0;"></a>','<div unselectable="on" class="content" nowrap>','$tipsword$','&nbsp; &nbsp; &nbsp;','<div unselectable="on" class="tipsrightpanel" style="font-size: 12px; color: rgb(0, 0, 0); font-weight: normal;">','<div unselectable="on" class="opertbar">','$@$for($links$)$@$','&nbsp;&nbsp;<a name="_tipslink_" style="text-decoration: underline;" target="$target$" href="$href$">$linkname$</a>','$@$endfor$@$','</div>','</div>','<div unselectable="on" class="clr"></div>','</div>','</div>','</div>','<img id="imglogodown" class="arrowdown" style="display: none; margin-left: -5px;" src="$images_path$webp/spacer1e9c5d.gif">','</div>','<div unselectable="on" class="tipbackground"></div>','<div unselectable="on" class="oneheight"></div>','</div>','</span>']);
var _TO_RSS_URL=T("/cgi-bin/reader_article_list?sid=$sid$&t=rss_list&s=personal&classtype=onefeed&feed=3_$uin$"),_FORM_TMP=TE(['<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">','$@$for($oInputs$)$@$','<input name="$name$" type="hidden" value="$value$"/>','$@$endfor$@$','</form>']),_REJECT_MSG=T(['<div>\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u4EE5\u4E0B\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F</div>','<div for="reject_confirm_$_idx_$" class="txtflow" style="width:320px;">','<span class="green bold">$name$</span>','<span class="graytext">&lt;$addr$&gt;</span>','</div>']);
_goStatic.doMouseEvent=function(_asType,_aoWin,_aoTriggerDom){
if(_asType=="over")
{
_goStatic._getInstance(_aoWin)._doMouseOver(_aoTriggerDom);
}
else if(_asType=="out")
{
_goStatic._getInstance(_aoWin)._doMouseOut(_aoTriggerDom);
}
};
_goStatic._getInstance=function(_aoWin){
if(_aoWin)
{
var _sInstName=_goStatic._TEMPLATE._INSTANCE,_oInst=_aoWin[_sInstName];
if(!_oInst)
{
_oInst=_aoWin[_sInstName]=new _goStatic(_aoWin);
addEvent(_aoWin,"unload",function(_aoEvent){
var _oTmpInst=_goStatic._getInstance(_aoWin);
if(_oTmpInst)
{
_oTmpInst._setStatus(-1);
}
});
}
return _oInst;
}
};
_goClass._doMouseOut=function(_aoTriggerDom){
var _oSelf=this,_nStatus=_oSelf._mnStatus;
_oSelf._moTmpTR=null;
_oSelf._setStatus((_nStatus==2||_nStatus==3)?3:0);
};
_goClass._doMouseOver=function(_aoTriggerDom){
var _oSelf=this;
if(_oSelf._moTriggerDom!=_aoTriggerDom)
{
if(_oSelf._mnStatus==3)
{
_oSelf._moTmpTR=_aoTriggerDom;
return;
}
_oSelf._moInfoCard&&removeSelf(_oSelf._moInfoCard);
_oSelf._mbBuildingInfoCard=false;
var _bOpen=_aoTriggerDom.getAttribute("mop");
if(_bOpen=="")
{
_bOpen="1";
}
if(_bOpen!="0")
{
_oSelf._readyData(_aoTriggerDom);
}
}
else{
_oSelf._setStatus(_oSelf._mnStatus==0?1:2);
}
};
_goClass._readyData=function(_aoTriggerDom){
var _oSelf=this,_oInfoDoms=[],_sUins="",_sShowInfo=_aoTriggerDom.getAttribute("t"),_sRole=_aoTriggerDom.getAttribute("r"),_sMailid=_aoTriggerDom.getAttribute("mailid");
var _oAddrSpans=(_sShowInfo=="6"?GelTags("span",_aoTriggerDom):[_aoTriggerDom]);
_oSelf._msRole=_sRole;
_oSelf._moInfos=[];
for(var i=0,size=_oAddrSpans.length;i<size;i++)
{
if(_oAddrSpans[i]==_aoTriggerDom)
_oSelf._mnTargetIndex=i+1;
_oInfoDoms.push(_oAddrSpans[i]);
}
for(_key in _oInfoDoms)
{
_oSelf._moInfos.push(new Info(_oInfoDoms[_key],_sShowInfo));
_sUins+=_oInfoDoms[_key].getAttribute('u');
}
_oSelf._forceStop();
_oSelf._moTriggerDom=_aoTriggerDom;
_oSelf._moTmpTR=null;
_oSelf._sMailid=_sMailid;
_oSelf._msShowInfo=_sShowInfo;
_oSelf._mnWaitTime=_sShowInfo==3?800:1000;
_oSelf._msDomId=["_QmProfileTips_",_sUins].join("");
_oSelf._mnStatus=0;
_oSelf._moInfoCard=S('infocard_'+_oSelf._msDomId,_oSelf._moWin);
_oSelf._setStatus(_oSelf._mnStatus==0?1:2);
};
_goClass._setStatus=function(_anStatus){
var _oSelf=this;
if(_oSelf._mnStatus==-1)
{
return;
}
_oSelf._mnStatus=_anStatus;
switch(_anStatus)
{case -1:
_oSelf._moInfoCard=null;
_oSelf._mbBuildingInfoCard=false;
_oSelf._moInfos=[];
_oSelf._forceStop();
break;
case 0:
_oSelf._showInfoCard(false);
break;
case 1:
_oSelf._mnTimeId=setTimeout(function(){
if(_oSelf._mnStatus==1)
{
if(!_oSelf._mbBuildingInfoCard&&(!_oSelf._moInfoCard||_oSelf._mbRebuildFlag===true))
{
_oSelf._buildInfoCard();
}
else{
_oSelf._setStatus(2);
}
}
},_oSelf._mnWaitTime);
break;
case 2:
_oSelf._showInfoCard(true);
_oSelf._computeCardPos(_oSelf._msShowInfo);
getTop().LogKV({sValue:['profiletips|',_oSelf._msShowInfo=="6"?"mail_list":"readmail",_oSelf._msRole=="ad"?"_ad":"",'|show'].join("")});
break;
case 3:
_oSelf._mnTimeId=setTimeout(function(){
if(_oSelf._mnStatus==3)
{
_oSelf._setStatus(0);
if(_oSelf._moTmpTR)
{
_oSelf._doMouseOver(_oSelf._moTmpTR);
}
}
},100);
break;
case 4:
break;
}
};
_goClass._buildInfoCard=function(){
var _oSelf=this,_oTop=getTop(),_sShowInfo=_oSelf._msShowInfo,_sDomId=_oSelf._msDomId,_sMailid=_oSelf._sMailid,_oInfos=_oSelf._moInfos,_nTargetIndex=1,_oInfoFeeds=[],_oInfo,_sUin,_sEmail,_sRole;
for(_key in _oInfos)
{
_oInfo=_oInfos[_key];
_sUin=_oInfo._msUin;
_sEmail=_oInfo._msEmail;
_sRole=_oInfo._msRole;
if(_sRole=="corpprofile")
{
_oSelf._buildCorpInfoCard(_oInfo);
break;
}
else if(_sRole=='ad')
{
_oSelf._fBuild([_oInfo._readyData({'icon':"/cgi-bin/getqqicon?type=ad&sid="+_oTop.getSid()+"&uin="+_sUin+"&mode=newaddr&mailaddr="+_sEmail})]);
break;
}
else if(_sUin&&!_isAdminUin(_sUin)&&!_isAdminEmail(_sEmail))
{
if(_oSelf._msShowInfo==2)
{
_oSelf._buildReaderInfoCard(_oInfo);
}
else{
_oSelf._fBuild([_oInfo._readyData(_sShowInfo=="1"?{'icon':"/cgi-bin/getqqicon?sid="+_oTop.getSid()+"&uin="+_sUin+"&mode=newaddr&mailaddr="+_sEmail}:{})]);
}
break;
}
else{
if(_sShowInfo=="3")
{
_oSelf._buildLogoCard();
}
else if(_sShowInfo=="6")
{
_oInfoFeeds.push(_oInfo._readyData());
}
else{
_oSelf._fBuild([_oInfo._readyData()]);
}
}
}
_oInfoFeeds.length>0&&_oSelf._fBuild(_oInfoFeeds);
};
_goClass._fBuild=function(_aoFeeds){
var _oSelf=this,_oTop=getTop(),_sShowInfo=_oSelf._msShowInfo,_sEmail=_aoFeeds[0].email,_sUin=_aoFeeds[0].uin,_sDomId=_oSelf._msDomId,_sMailid=_oSelf._sMailid,_nTargetIndex=1,_nFeedLength=_aoFeeds.length,_nTotalWidth=_nFeedLength*320,_bIsNeedLeft=(_nTargetIndex>1),_nIsNeedRigth=(_nFeedLength>1&&_nTargetIndex!=_nFeedLength),_nCurrentLeft=(_nTargetIndex-1)*320,_oData={"_id":_sDomId,"_oFeeds":_aoFeeds,_nTotalWidth:_nTotalWidth,_bIsNeedLeft:_bIsNeedLeft,_nIsNeedRigth:_nIsNeedRigth,_nCurrentLeft:_nCurrentLeft,role:_oSelf._msRole};
if(_sShowInfo==3||_sShowInfo==6)
{
insertHTML(_oSelf._moWin.document.body,'afterBegin',_goStatic._TEMPLATE._INFOCARD.replace(_oData));
_oSelf._moInfoCard=_oInfoCard=S('infocard_'+_sDomId,_oSelf._moWin);
_oSelf._bindEvent({"targetDom":_oInfoCard,"datas":_aoFeeds,"totalWidth":_nTotalWidth});
_oSelf._setStatus(2);
}
else{
_oSelf._mbBuildingInfoCard=true;
_oTop.QMAjax.send("/cgi-bin/bind?sid="+_oTop.getSid()+"&t=linkedin_profile&fun=getlinkedintoken&useremailaddr="+_sEmail,{method:"GET",onload:function(_abIsOk,_asReturn){
var _oReturn=_oTop.evalValue(_asReturn),_bUseLinkedIn=_oReturn.bindlinkedin=="1"&&_oReturn.linkedinoverdue=="0",_sLinkedInAccessToken=_oReturn.access_token||"",_oLinkedInProfile=_oReturn.linkedin_profile&&_oTop.evalValue(decodeURI(_oReturn.linkedin_profile));
if(_bUseLinkedIn)
{
_oTop.LogKV("getinvestigate|linkedin|profile|show");
_oData._oFeeds[0].icon="/cgi-bin/getqqicon?sid="+_oTop.getSid()+"&uin="+_sUin+"&mode=newaddr&mailaddr="+_sEmail+"&r="+_oTop.now();
_oData._oFeeds[0].bindLinkedIn=_sLinkedInAccessToken?"true":"false";
_oData._oFeeds[0]=extend({"linkedInName":_oLinkedInProfile.formattedName,"linkedInPublicProfileUrl":_oLinkedInProfile.publicProfileUrl,"LinkedInMainAddress":_oLinkedInProfile.mainAddress,"linkedInIndustry":_oLinkedInProfile.industry,"linkedInTitle":_oLinkedInProfile.title,"linkedInCompanyName":_oLinkedInProfile.companyName},_oData._oFeeds[0]);
}
insertHTML(_oSelf._moWin.document.body,'afterBegin',_goStatic._TEMPLATE._INFOCARD.replace(_oData));
_oSelf._moInfoCard=_oInfoCard=S('infocard_'+_sDomId,_oSelf._moWin);
_oSelf._mbBuildingInfoCard=false;
_oSelf._bindEvent({"targetDom":_oInfoCard,"datas":_aoFeeds,"totalWidth":_nTotalWidth});
_oSelf._setStatus(2);
if(_bUseLinkedIn)
{
_oTop.bindLinkedInAccount.getLinkedInProfile(_sLinkedInAccessToken,_sEmail,function(_abIsOk,_aoProfile){
if(_abIsOk)
{
var _oLinkedInInfo=_oTop.finds(".linkedin_info",_oInfoCard)[0];
_oTop.insertHTML(_oLinkedInInfo,"beforeBegin",_goStatic._TEMPLATE._LINKEDIN_DETAIL.replace({"linkedInName":_aoProfile.formattedName,"linkedInPublicProfileUrl":_aoProfile.publicProfileUrl,"LinkedInMainAddress":_aoProfile.mainAddress,"linkedInIndustry":_aoProfile.industry,"linkedInTitle":_aoProfile.title,"linkedInCompanyName":_aoProfile.companyName}));
_oTop.removeSelf(_oLinkedInInfo);
_oTop.bindLinkedInAccount.updateLinkedInProfile(_sLinkedInAccessToken,_sEmail,_aoProfile);
}
});
}
}});
}
_oSelf._adjustIconPos(_aoFeeds);
};
_goClass._adjustIconPos=function(_aoFeeds){
if(!(_aoFeeds&&_aoFeeds.length>0&&getTop().gbIsIE))
{
return;
}
var _oSelf=this,_oTop=getTop(),_oFeed,_nWidth,_oDomDisplayAddr;
for(_sfkey in _aoFeeds)
{
_oFeed=_aoFeeds[_sfkey];
_oDomDisplayAddr=S('span_displayname_'+_oFeed.email,_oSelf._moWin.document);
if(_oDomDisplayAddr)
{
_nWidth=_oTop.calcPos(_oDomDisplayAddr)[4];
if(_nWidth>=214)
{
_oDomDisplayAddr.style.width="214px";
}
}
}
};
_goClass._bindEvent=function(_aoCfg){
var _oSelf=this,_oTop=getTop(),_oInfoCard=_aoCfg.targetDom,_nTotalWidth=_aoCfg.totalWidth,_oFeeds=_aoCfg.datas,_oInfos=_oSelf._moInfos,_oTipAllDom=finds("div.tipAll",_oInfoCard)[0],_oDivLeft=finds("div.tipAllLeft",_oInfoCard)[0],_oDivRight=finds("div.tipAllRight",_oInfoCard)[0],_oControlEvent={mousewheel:function(_aoEvent){
var _nWheelDelta=typeof (_aoEvent.wheelDelta)=="undefined"?-_aoEvent.detail:_aoEvent.wheelDelta;
preventDefault(_aoEvent);
_oSelf._moveHor(_oTipAllDom,_nWheelDelta>0?"left":"right",_nTotalWidth,_oDivLeft,_oDivRight);
},DOMMouseScroll:function(_aoEvent){
preventDefault(_aoEvent);
_oControlEvent.mousewheel(_aoEvent);
},mouseover:function(_aoEvent){
_oSelf._setStatus(4);
},mouseout:function(_aoEvent){
_oSelf._setStatus(3);
}};
addEvents(_oInfoCard,_oControlEvent);
var _oFeed,_oDomAddVipAddr,_oDomDelVipAddr,_oDomVipAddrIcon,_oDomAddVipAddr_a,_oDomDelVipAddr_a;
for(_sfkey in _oFeeds)
{
_oFeed=_oFeeds[_sfkey],_oDomAddVipAddr=S('addVipAddr_'+_oFeed.email,_oSelf._moWin.document),_oDomDelVipAddr=S('delVipAddr_'+_oFeed.email,_oSelf._moWin.document),_oDomVipAddrIcon=S('vipAddrIcon_'+_oFeed.email,_oSelf._moWin.document);
if(_oDomAddVipAddr)
{
_oDomAddVipAddr.onclick=(function(_aoFeed,_aoDomAddVipAddr,_aoDomDelVipAddr,_aoDomVipAddrIcon){
return function(){
_oSelf.oprVipAddr('add',_aoFeed.addrvipid,_aoFeed.nickname,_aoFeed.email,function(_asAddrid){
_oTop.showInfo("\u8BBE\u4E3A\u91CD\u8981\u8054\u7CFB\u4EBA\u6210\u529F");
_oTop.show(_aoDomAddVipAddr,false);
_oTop.show(_aoDomDelVipAddr,true);
_oTop.show(_aoDomVipAddrIcon,true);
E((finds('span[e="'+_aoFeed.email+'"]',_oSelf._moWin.document)).concat(finds('div[e="'+_aoFeed.email+'"]',_oSelf._moWin.document)),function(_aoSpanDom){
attr(_aoSpanDom,'addrvip','true');
if(_asAddrid)
{
attr(_aoSpanDom,'addrid',_asAddrid);
}
});
_oTop.QMMLCache.upVer();
_oTop.rdVer(_aoFeed.mailid,1);
_oTop.reloadLeftWin();
});
};
})(_oFeed,_oDomAddVipAddr,_oDomDelVipAddr,_oDomVipAddrIcon);
}
if(_oDomDelVipAddr)
{
_oDomDelVipAddr.onclick=(function(_aoFeed,_aoDomAddVipAddr,_aoDomDelVipAddr,_aoDomVipAddrIcon){
return function(){
_oSelf.oprVipAddr('del',_aoFeed.addrvipid,_aoFeed.nickname,_aoFeed.email,function(){
_oTop.showInfo("\u79FB\u9664\u91CD\u8981\u8054\u7CFB\u4EBA\u6210\u529F");
_oTop.show(_aoDomAddVipAddr,true);
_oTop.show(_aoDomDelVipAddr,false);
_oTop.show(_aoDomVipAddrIcon,false);
E((finds('span[e="'+_aoFeed.email+'"]',_oSelf._moWin.document)).concat(finds('div[e="'+_aoFeed.email+'"]',_oSelf._moWin.document)),function(_aoSpanDom){
attr(_aoSpanDom,'addrvip','false');
});
_oTop.QMMLCache.upVer();
_oTop.rdVer(_aoFeed.mailid,1);
_oTop.reloadLeftWin();
});
};
})(_oFeed,_oDomAddVipAddr,_oDomDelVipAddr,_oDomVipAddrIcon);
}
}
addEvent(_oDivLeft,'click',function(){
_oSelf._moveHor(_oTipAllDom,"left",_nTotalWidth,_oDivLeft,_oDivRight);
});
addEvent(_oDivRight,'click',function(){
_oSelf._moveHor(_oTipAllDom,"right",_nTotalWidth,_oDivLeft,_oDivRight);
});
var _oInfo,_oRejectDom,_FileDom;
for(_key in _oInfos)
{
_oInfo=_oInfos[_key];
_oRejectDom=S('reject_'+_oInfo._msMailid+_oInfo._msEmail,_oSelf._moWin.document);
_FileDom=S('file_'+_oInfo._msMailid+_oInfo._msEmail,_oSelf._moWin.document);
_oRejectDom&&(_oRejectDom.onclick=(function(_aoInfo){
return function(){
_aoInfo.reject();
};
})(_oInfo));
_FileDom&&(_FileDom.onclick=(function(_aoInfo){
return function(){
_aoInfo.exbookEmlMgr();
};
})(_oInfo));
}
};
_goClass._buildCorpInfoCard=function(_aoInfo){
var _oSelf=this,_oAjax=_oSelf._moAjax=new QMAjax();
_oInfo=_aoInfo,_sUin=_oInfo._msUin,_sEmail=_oInfo._msEmail;
_oAjax.method="post";
_oAjax.url="/cgi-bin/getauthbizinfo?t=infocard&s=corp&bizdomain="+_sEmail+"&sid="+getSid();
_oAjax.send();
_oAjax.onComplete=function(_aoXml){
var _oJson=null;
if(_aoXml&&_oSelf._mnStatus==1)
{
_oJson=evalValue(_aoXml.responseText);
if(_oJson)
{
_oSelf._fBuild([_oInfo._readyData(_oJson)]);
}
}
};
};
_goClass._buildReaderInfoCard=function(_aoInfo){
var _oSelf=this,_oAjax=_oSelf._moAjax=new QMAjax();
_oInfo=_aoInfo,_sUin=_oInfo._msUin;
_oAjax.method="post";
_oAjax.url="/cgi-bin/reader_account_info";
_oAjax.send(T("func=infocard&uin=$uin$&sid=$sid$&t=rss_mgr&s=infocard&r=$r$").replace({sid:getSid(),r:_oSelf._mbRebuildFlag===true?Math.random():'',uin:_sUin}));
_oAjax.onComplete=function(_aoXml){
var _oJson=null;
if(_aoXml&&(_oSelf._mnStatus==1||_oSelf._mbRebuildFlag===true))
{
if(_aoXml.responseText.indexOf("new_rss_success")!=-1)
{
_oJson=evalValue(_aoXml.responseText);
if(_oJson)
{
_oSelf._fBuild([_oInfo._readyData(_oJson.feed)]);
}
}
}
_oSelf._mbRebuildFlag=false;
};
_oAjax.onError=function(){
_oSelf._mbRebuildFlag=false;
};
};
_goClass._moveHor=function(_aoTarget,_asDirection,_anTotalWidth,_aoDivLeft,_aoDivRight){
var _nCurrent=parseInt(_aoTarget.style.left.match(/(-?[\d]+)/)[0]),_nDest=_asDirection==="left"?_nCurrent+320:_nCurrent-320;
if(_asDirection==="left"&&_nCurrent===0||_asDirection==="right"&&_nDest===-_anTotalWidth||_nCurrent%320!=0)
{
return;
}
qmAnimation.moveHor(_aoTarget,"move",{from:_nCurrent,to:_nDest,speed:"fast"});
_nDest===0?addClass(_aoDivLeft,"tipAllLeft_disabled"):rmClass(_aoDivLeft,"tipAllLeft_disabled");
(_nDest-320===-_anTotalWidth)?addClass(_aoDivRight,"tipAllRight_disabled"):rmClass(_aoDivRight,"tipAllRight_disabled");
};
_goClass._showInfoCard=function(_abShow){
var _oSelf=this,_oInfoCard=_oSelf._moInfoCard;
if(!_oInfoCard)
{
return;
}
if(_abShow&&!isShow(_oInfoCard)||!_abShow&&isShow(_oInfoCard))
{
qmAnimation.play(_oInfoCard,{from:_abShow?0.5:1,to:_abShow?1:0.5,speed:'fast',onaction:function(_anValue){
show(_oInfoCard,true);
setOpacity(_oInfoCard,_anValue);
},oncomplete:function(){
if(_abShow&&_oSelf._msShowInfo==3)
{
ossLog("delay","all","stat=nothing&locval=,,logotips,1");
}
setOpacity(_oInfoCard,_abShow?1:0.5);
show(_oInfoCard,_abShow&&_oSelf._mnStatus==2);
gbIsIE&&(_oInfoCard.style.filter='');
}});
}
if(_abShow)
{
var _oMenus=getTop().QMMenu&&getTop().QMMenu();
for(var i in _oMenus)
{
_oMenus[i].close();
}
}
};
_goClass._computeCardPos=function(_asShowInfo){
var _oSelf=this,_oTriggerDom=_oSelf._moTriggerDom,_oInfoCard=_oSelf._moInfoCard,_sDomId=_oSelf._msDomId,_oWin=_oSelf._moWin,_oDocument=_oWin.document,_sTargetId=_oTriggerDom.getAttribute('beside'),_oTarget=_sTargetId?S(_sTargetId,_oSelf._moWin):_oTriggerDom,_oIconPos=calcPos(_oTarget),_oCardPos=calcPos(_oInfoCard),_oArrowUp=S('infoarrowup_'+_sDomId,_oWin),_oArrowDown=S('infoarrowdown_'+_sDomId,_oWin),_nClientWidth=_oDocument.body.clientWidth,_oQQBrowserTip=S("qqbrowser_pop");
if(!_oInfoCard)
{
return;
}
_oInfoCard.style.zIndex=9999;
if((_oIconPos[1]+_oCardPos[4])<_nClientWidth)
{
if((_oTarget.tagName=='IMG'||_oIconPos[3]<50)&&_oTarget.id!="imglogo")
{
show(_oArrowUp,false);
show(_oArrowDown,false);
_oInfoCard.style.top=_oIconPos[0]+'px';
_oInfoCard.style.left=_oIconPos[1]+5+'px';
}
else{
var dirc=0;
if(_asShowInfo=="6")
{
dirc=(_oIconPos[2]+_oCardPos[5])>Scale.fixBodyHeight(bodyScroll(_oWin,'clientHeight'))+bodyScroll(_oWin,'scrollTop')+((_oTarget.id=="imglogo"&&_oQQBrowserTip)?_oQQBrowserTip.offsetHeight:0);
_oInfoCard.style.left=_oIconPos[3]-20+'px';
}
else{
dirc=(_oIconPos[0]-_oCardPos[5])>bodyScroll(_oWin,'scrollTop')+((_oTarget.id=="imglogo"&&_oQQBrowserTip)?_oQQBrowserTip.offsetHeight:0);
_oInfoCard.style.left=_oIconPos[1]-_oIconPos[4]/2-65+'px';
}
_oInfoCard.style.top=dirc?(_oIconPos[0]-_oCardPos[5]-5+'px'):(_oIconPos[0]+_oIconPos[5]+2+'px');
}
}
else{
_oInfoCard.style.top=_oIconPos[2]+5+'px';
var _nOffset=_oIconPos[3]+_oCardPos[4]-_nClientWidth;
if(_nOffset>0)
{
_oInfoCard.style.left=_oIconPos[3]-_nOffset+"px";
}
else{
_oInfoCard.style.left=_oIconPos[3]+"px";
}
}
};
_goClass._buildLogoCard=function(){
var _oSelf=this,_sDomId=_oSelf._msDomId,_oTriggerDom=_oSelf._moTriggerDom;
_sStylenum=_oTriggerDom.getAttribute("stylenum"),_sLogoStr=_oTriggerDom.getAttribute("logotitle"),_sTipsWord,_sLink,_bNoLogo;
if(!_sLogoStr)
{
_bNoLogo=true;
}
else{
var _oBuf=_sLogoStr.split("aboutlogo="),_sTipsWord=_oBuf[0],_sLink=_oBuf[1],_bNoLogo=_sTipsWord=="nothing"||!_sStylenum;
}
if(_bNoLogo)
{
_oTriggerDom.title="\u90AE\u7BB1\u9996\u9875";
}
else{
var _oLinks=[],_oArray=eval(["(",_sLink,")"].join(""));
for(var i=0;i<_oArray.length;i++)
{
if(i%3==0)
{
_oLinks.push({linkname:_oArray[i],href:TE(_oArray[i+1]).replace({sid:getSid(),uin:getUin()}),target:_oArray[i+2]});
}
}
insertHTML(_oSelf._moWin.document.body,'afterBegin',_goStatic._TEMPLATE._LOGO.replace({'_id':_sDomId,images_path:getPath("image"),tipsword:_sTipsWord,links:_oLinks}));
_oSelf._moInfoCard=S('infocard_'+_sDomId,_oSelf._moWin);
addEvents(_oSelf._moInfoCard,{mouseover:function(_aoEvent){
_oSelf._setStatus(4);
},mouseout:function(_aoEvent){
_oSelf._setStatus(3);
},click:function(_aoEvent){
var _oTarget=getEventTarget(_aoEvent);
if(_oTarget.name=="closecard")
{
_oSelf._setStatus(3);
_oSelf._moTriggerDom.setAttribute("t","");
}
else if(_oTarget.name=="_tipslink_")
{
var _sLogoStatId=getTop().getUrlParams(_oTarget.href||location)["logostatid"];
if(_sLogoStatId)
{
ossLog("delay","all","stat=nothing&locval=,,logotips,"+_sLogoStatId);
}
}
}});
_oSelf._setStatus(2);
}
};
_goClass.oprVipAddr=function(_asAction,_asAddrId,_asName,_asEmail,_afCallback){
var _oTop=getTop();
_oTop.QMAjax.send("/cgi-bin/vip_addr",{content:_oTop.T(["sid=#sid#&action=#action#&id=#addrid#&addr=#addr#&t=vip_addr&resp_charset=UTF8"],"#").replace({sid:_oTop.getSid(),addrid:(_asAddrId=="-1"?"":_asAddrId),action:_asAction,addr:(_asAddrId==""||_asAddrId=="-1")?encodeURIComponent(["\"",_asName,"\""," <",_asEmail,">"].join("")):""}),method:"POST",onload:function(_abIsOk,_asParam){
if(_abIsOk)
{
var _oRet=_oTop.evalValue(_asParam);
if(_oRet.retCode==0)
{
_afCallback&&_afCallback(_oRet.addrid);
}
else{
_oTop.showError("\u64CD\u4F5C\u5931\u8D25");
}
}
}});
_oTop.LogKV({sValue:'profiletips|'+_asAction+'|vip'});
};
_goClass._forceStop=function(){
var _oSelf=this,_oInfoCard=_oSelf._moInfoCard;
if(_oInfoCard)
{
qmAnimation.stop(_oInfoCard);
show(_oInfoCard,false);
}
clearTimeout(_oSelf._mnTimeId);
_oSelf._moAjax&&_oSelf._moAjax.abort();
};
_goStatic.clearInfoCard=function(_aoWin){
var _oSelf=this;
_goStatic._getInstance(_aoWin)._moTriggerDom=null;
_goStatic._getInstance(_aoWin)._mbRebuildFlag=true;
};
_goStatic.oper=function(_asOper,_asUin,_asEmail,_sShowInfo,_asNickName){
function _toAddr(_asN,_asU,_asE)
{
return T('"$name$" <$email$>').replace({name:encodeNick(_asN)||_asU,email:_asEmail||(_asUin+"@qq.com")});
}
switch(_asOper)
{case "mailTo":
openComposeDlg("normal",{sDefAddrs:_toAddr(_asNickName,_asUin,_asEmail),bUinEncrypt:true,bAddrEdit:true,nWidth:495});
break;
case "smsTo":
openComposeDlg("sms",{sDefAddrs:_toAddr(_asNickName,_asUin,_asEmail),bUinEncrypt:true,bAddrEdit:false});
break;
case "rssTo":
if(!_asUin)
{
return;
}
var _sUrl=_TO_RSS_URL.replace({sid:getSid(),uin:_asUin});
if(_sShowInfo=="1")
{
goNewWin(_sUrl,false,true);
}
else{
goUrlMainFrm(gsRssDomain+_sUrl);
}
break;
case "custom":
var _oDom=S(_asUin,getMainWin());
if(_oDom)
{
fireMouseEvent(_oDom,"click");
}
break;
}
};
_goStatic.contactHandle=function(_asAction,_aoTarget){
var _oTop=getTop(),_oSelf=this;
if(_asAction=="addc")
{
_oSelf.addContact(_aoTarget);
}
else if(_asAction=="editc")
{
_oSelf.editContact(_aoTarget);
}
_oSelf.doMouseEvent("out",_oTop.getMainWin());
};
_goStatic.addContact=function(_aoTarget){
var _oTop=getTop();
_sEmail=_oTop.attr(_aoTarget,"e"),_sUsername=_oTop.attr(_aoTarget,"n"),_sUin=_oTop.attr(_aoTarget,"u");
new _oTop.QMDialog({sId:"newAddr",sTitle:"\u65B0\u5EFA\u8054\u7CFB\u4EBA",sUrl:_oTop.T('/cgi-bin/laddr_detail?sid=$sid$&view=qq&t=contact&edit=1&user=$username$&email=$email$&dlgname=newAddr&icon=$icon$').replace({sid:_oTop.getSid(),username:encodeURI(_sUsername),email:encodeURIComponent(_sEmail),icon:encodeURIComponent("/cgi-bin/getqqicon?"+"uin="+_sUin+"&mode=newaddr&sid="+_oTop.getSid()+"&mailaddr="+_sEmail)}),nHeight:538,nWidth:600,onload:function(){
this.S("_dlgiframe_").scrolling="yes";
_oTop.rdVer(_goStatic._sMailid,1);
},onbeforeclose:function(){
var _oInputs=_oTop.finds("input[name='oName']",this.getDialogWin());
_sBeSaveName=_oInputs&&_oInputs.length>0&&_oInputs[0].value;
if(_sBeSaveName!=_sUsername)
{
_oTop.reloadFrm(_oTop.getMainWin());
}
}});
_oTop.LogKV({sValue:'profiletips|addContact'});
};
_goStatic.editContact=function(_aoTarget){
var _oTop=getTop(),_sUrl="",_sEmail=_oTop.attr(_aoTarget,"e"),_sUsername=_oTop.attr(_aoTarget,"n"),_sUin=_oTop.attr(_aoTarget,"u"),_sUrl=T("/cgi-bin/laddr_detail?sid=$sid$&view=normal&t=contact&edit=1&AddrID=$addrid$&editexist=1&dlgname=editAddr&icon=$icon$").replace({sid:getSid(),addrid:getTop().attr(_aoTarget,"addrid"),icon:encodeURIComponent("/cgi-bin/getqqicon?"+"uin="+_sUin+"&mode=newaddr&sid="+_oTop.getSid()+"&mailaddr="+_sEmail)});
new _oTop.QMDialog({sId:"editAddr",sTitle:"\u7F16\u8F91\u8054\u7CFB\u4EBA",sUrl:_sUrl,nHeight:538,nWidth:600,onload:function(){
this.S("_dlgiframe_").scrolling="yes";
},onbeforeclose:function(){
var _oInputs=_oTop.finds("input[name='oName']",this.getDialogWin());
_sBeSaveName=_oInputs&&_oInputs.length>0&&_oInputs[0].value;
if(_sBeSaveName!=_sUsername)
{
_oTop.reloadFrm(_oTop.getMainWin());
}
}});
_oTop.LogKV({sValue:'profiletips|editContact'});
};
function Info(_aoTriggerDom,_asShowInfo)
{
this._msShowInfo=_asShowInfo;
this._init(_aoTriggerDom);
}
Info.prototype._init=function(_aoTriggerDom){
this._imitateData(_aoTriggerDom);
var _oSelf=this,_sUin=_aoTriggerDom.getAttribute('u'),_sQQNum=_aoTriggerDom.getAttribute('qq'),_sNickName=_aoTriggerDom.getAttribute('n'),_sIsSender=_aoTriggerDom.getAttribute("sd"),_sEmail=_aoTriggerDom.getAttribute('e'),_sIcon=_aoTriggerDom.getAttribute('i'),_sRole=_aoTriggerDom.getAttribute("r"),_sQQFnd=_aoTriggerDom.getAttribute("f"),_sMailid=_aoTriggerDom.getAttribute("mailid"),_sHome=_aoTriggerDom.getAttribute("h"),_sIsOwn=_aoTriggerDom.getAttribute("io"),_sRejectHtmlId=_aoTriggerDom.getAttribute("rejecthtml")||"",_sFilingHtmlId=_aoTriggerDom.getAttribute("filinghtml")||"filinghtml",_sAddrid=_aoTriggerDom.getAttribute("addrid"),_oOperPanel=getMainWin()._oOperPanel,_oRejectHtmlDom=_oOperPanel?_oOperPanel[_sRejectHtmlId]:undefined,_oFilingHtmlDom=_oOperPanel?_oOperPanel[_sFilingHtmlId]:undefined,_sRejectHtml=_oRejectHtmlDom?_oRejectHtmlDom:"",_sFilingHtml=_oFilingHtmlDom?_oFilingHtmlDom:"",_sAddrinfoHtml="";
_sAddrinfoHtml=_goStatic._TEMPLATE._EXTENDHTML.replace({addrid:_sAddrid,email:_sEmail,uin:_sUin,qqnum:_sQQNum,username:htmlEncode(_sNickName)});
if(_sUin=="0"||!_sUin||_sUin==getTop().g_encryptzero)
{
_sUin="";
}
_sRejectHtml=_sRejectHtml.replace(/(\s[^<\'\"]+?)=([^ \f\n\r\t\v\"\'>]+)/g,function(_asWhole,_asKey,_asValue){
return _asKey+'="'+_asValue+'"';
});
_sFilingHtml=_sFilingHtml.replace(/(\s[^<]+?)=([^ \f\n\r\t\v\"\'>]+)/g,function(_asWhole,_asKey,_asValue){
return _asKey+'="'+_asValue+'"';
});
_oSelf._msAddrInfoHtml=_sAddrinfoHtml;
_oSelf._msRejectHtml=_sRejectHtml;
_oSelf._msFilingHtml=_sFilingHtml;
_oSelf._moTriggerDom=_aoTriggerDom;
_oSelf._msUin=_sUin;
_oSelf._msQQNum=_sQQNum;
_oSelf._msNickName=_sNickName;
_oSelf._msEmail=_sEmail||(_sUin?_sUin+"@qq.com":"");
_oSelf._msIcon=_sIcon;
_oSelf._msRole=_sRole;
_oSelf._msHome=_sHome;
_oSelf._msIsOwn=_sIsOwn;
_oSelf._msMailid=_sMailid;
_oSelf._msIsSender=_sIsSender;
_oSelf._msQQFnd=_sQQFnd;
};
Info.prototype._imitateData=function(_aoTriggerDom){
var _oWin=getMainWin(),_oSelf=this,_sType=_aoTriggerDom.parentNode.getAttribute('t'),_oNobrDom=(_sType=="6"?_aoTriggerDom.parentNode:_aoTriggerDom),_sEmail=_aoTriggerDom.getAttribute('e'),_sMailid=_oNobrDom.getAttribute('mailid'),_sIsGroup=_oNobrDom.getAttribute('ignore'),_sIsSender=_aoTriggerDom.getAttribute("sd"),_sXqqstyle=_oNobrDom.getAttribute('xqs'),_sAd=_oNobrDom.getAttribute('isad')=="1"||_oNobrDom.getAttribute('r')=="ad",_sBookcolid=_oNobrDom.getAttribute('bcd'),_sIsTuan=(_sBookcolid!=0&&_sXqqstyle==1)?1:0,_sBook=2;
_oWin["_oOperPanel"]={};
if(_sIsSender=="0"&&!_isAdminEmail(_sEmail))
{
_oWin["_oOperPanel"].rejectionhtml='<a id="reject_'+_sMailid+_sEmail+'" href="javascript:;" title="\u5C06\u6B64\u53D1\u4EF6\u4EBA\u6DFB\u52A0\u81F3\u9ED1\u540D\u5355\uFF0C\u4EE5\u540E\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u8BE5\u5730\u5740\u7684\u90AE\u4EF6\u3002" class="pointer">\u62D2\u6536</a>';
_oWin["_oOperPanel"].filinghtml='<a id="file_'+_sMailid+_sEmail+'" href="javascript:;" title="\u5C06\u53D1\u4EF6\u4EBA\u7684\u6765\u4FE1\u81EA\u52A8\u79FB\u5165\u6587\u4EF6\u5939" '+((_sIsTuan==1)?' tuan="1"':'')+'class="pointer">\u5F52\u6863\u81F3...</a>';
}
else{
var _sDomain=_oNobrDom.getAttribute('dm'),_sSysmail=(_sXqqstyle==1||_sXqqstyle==4||_sXqqstyle==5||_sXqqstyle==6||_sXqqstyle==600)?1:0,_sIsbookmail=_oNobrDom.getAttribute('ibm'),_sCurrfolder=_oNobrDom.getAttribute('cfid'),_sBookable=_oNobrDom.getAttribute('iba'),_sFolderid=(_sXqqstyle==1||_sXqqstyle==2||_sXqqstyle==6||_sXqqstyle==5||_sXqqstyle==8)?0:_oNobrDom.getAttribute('fid'),_sCheatcode=_oNobrDom.getAttribute('ctd');
if(_sDomain!="qqmail.com")
{
if(_sIsbookmail=="true")
{
_oWin["_oOperPanel"].rejectionhtml='<a id="reject_'+_sMailid+_sEmail+'" href="javascript:;" onclick="subscribeOper(\'reject\');" module="qmAntiSpam" name="spam" title="\u62D2\u6536\u5E76\u9000\u8BA2\u6765\u81EA\u8BE5\u5730\u5740\u7684\u90AE\u4EF6\u3002" mimefrom="'+_sEmail+'" class="icon_disable_s"></a>';
}
else if(_sFolderid==1||_sFolderid==6||_sFolderid>100&&_sCheatcode!=999)
{
if(_sSysmail!=1&&_sXqqstyle!=4)
{
_oWin["_oOperPanel"].rejectionhtml='<a id="reject_'+_sMailid+_sEmail+'" href="javascript:;" title="\u5C06\u6B64\u53D1\u4EF6\u4EBA\u6DFB\u52A0\u81F3\u9ED1\u540D\u5355\uFF0C\u4EE5\u540E\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u8BE5\u5730\u5740\u7684\u90AE\u4EF6\u3002" class="pointer">\u62D2\u6536</a>';
}
}
_sIsGroup!="true"&&(_oWin["_oOperPanel"].filinghtml='<a id="file_'+_sMailid+_sEmail+'" href="javascript:;" title="\u5C06\u53D1\u4EF6\u4EBA\u7684\u6765\u4FE1\u81EA\u52A8\u79FB\u5165\u6587\u4EF6\u5939" '+((_sIsTuan==1)?' tuan="1"':'')+'class="pointer">\u5F52\u6863\u81F3...</a>');
}
if(_sType!="6")
{
_oWin["_oOperPanel"].operhidepanel='<span class="hide">&nbsp;<a href="javascript:;" class="pointer" module="qmSenderInfo" ck="toggle" id="senderInfo3">\u67E5\u770B</a>&nbsp;&nbsp;</span>';
if(_oWin["_oOperPanel"].rejectionhtml)
{
_oWin["_oOperPanel"].operhidepanel+='<span id="rejectionhtml">'+_oWin["_oOperPanel"].rejectionhtml+'</span>';
}
if(_oWin["_oOperPanel"].filinghtml)
{
_oWin["_oOperPanel"].operhidepanel+='<span id="filinghtml">'+_oWin["_oOperPanel"].filinghtml+'</span>';
}
}
_oSelf._msFolderid=_sFolderid;
}
_oSelf._msIsTuan=_sIsTuan;
_oSelf._msBook=_sBook;
_oSelf._mbIsAd=_sAd;
};
Info.prototype._readyData=function(_aoFeed){
var _oFeed=_aoFeed||{},_oTop=getTop(),_oSelf=this,_sUin=_oSelf._msUin,_sQQNum=_oSelf._msQQNum,_sEmail=_oSelf._msEmail,_sRole=_oSelf._msRole,_sIcon=_oSelf._msIcon,_sHome=_oSelf._msHome,_sIsOwn=_oSelf._msIsOwn,_sQQFnd=_oSelf._msQQFnd,_sShowInfo=_oSelf._msShowInfo,_sRejectionHtml=_oSelf._msRejectHtml,_sFilingHtml=_oSelf._msFilingHtml,_sAddrInfoHtml=_oSelf._msAddrInfoHtml,_oTriggerDom=_oSelf._moTriggerDom,_sNickName=_oSelf._msNickName,_nBtnNum=0,_bAdUin=_isAdminUin(_sUin),_bAdminEmail=_isAdminEmail(_sEmail),_bGroupMail=_isGroupEmail(_sEmail),_sMailid=_oSelf._msMailid,_bMail=_sEmail&&!_bAdminEmail,_bSms=_sEmail&&!_bAdminEmail&&!_bAdUin&&!_bGroupMail,_bRss=_sUin&&!_bAdUin&&!_bAdminEmail,_bBanSmsByFol=_bSms&&_oFeed.followedby!="1"&&_sShowInfo=="2";
if(_sUin==getUin()||_sUin==_oTop.g_encryptuin||(!_bMail&&!_bSms&&!_bRss)||_sIsOwn=="true")
{
_nBtnNum=0;
}
else if(_sShowInfo=="2")
{
_nBtnNum=3;
}
else{
_nBtnNum=(_sShowInfo=="1"&&_oFeed.follower&&_oFeed.sharecount)?3:2;
}
if(_sNickName)
{
_oFeed.name=_sNickName;
}
if(_sUin&&!_isAdminUin(_sUin)&&!_isAdminEmail(_sEmail))
{
_oFeed.icon="/cgi-bin/getqqicon?sid="+_oTop.getSid()+"&uin="+_sUin+"&mode=newaddr&mailaddr="+_oSelf._msEmail;
}
var _sNickNameNE=htmlEncode(encodeNick(_oFeed.name)),_sNameHtml=htmlEncode(_wraparound(_oFeed.name)),_sNameAttrHtml=htmlEncode(_oFeed.name),_oDomEdit=S("a_edit_"+_sEmail,getMainWin()),_sNameURI=encodeURI(_oFeed.name);
delete _oFeed.name;
var _sAddrvip=attr(_oTriggerDom,'addrvip');
_oFeed=extend({'uin':_sUin,'qqnum':_sQQNum,'email':_sEmail,'dispname':_sNameHtml,'attrname':_sNameAttrHtml,'jsname':_sNickNameNE,'dispemail':_wraparound(_sEmail),'showinfo':_sShowInfo,'sid':getSid(),'images_path':getPath('image'),'img_path':getPath('image'),'btnnum':_nBtnNum,'arrow':_oTriggerDom.tagName=="IMG"?0:1,'bmail':_bMail,'bsms':_bSms,'bansms':_bBanSmsByFol,'brss':_bRss,'rssdomain':typeof (gsRssDomain)=="undefined"?"":gsRssDomain,'role':_sRole,"mailid":_sMailid,"qqfriend":_sQQFnd,'home':_sHome,'addrinfohtml':_sAddrInfoHtml,'rejectionhtml':_sRejectionHtml,'filinghtml':_sFilingHtml,'name':_sNameURI,'nickname':_sNickName,'AddrId':attr(_oDomEdit,"addrid")||"",'addrvip':_sAddrvip?(_sAddrvip=='true'||_sAddrvip=='1'?'true':'false'):'','addrvipid':attr(_oTriggerDom,'addrid')||"",'issys':_bAdminEmail,'icon':"/cgi-bin/getqqicon?uin="+_sUin+"&mode=newaddr&mailaddr="+encodeURI(_sEmail)+"&sid="+_oTop.getSid()},_oFeed);
return _oFeed;
};
Info.prototype.reject=function(){
var _oSelf=this,_oTop=getTop(),_sMailId=_oSelf._msMailid,_sEmail=_oSelf._msEmail,_sName=_oSelf._msNickName,_sFolderid=_oSelf._msFolderid,_sMsg=_REJECT_MSG.replace({name:htmlEncode(_sName),addr:_sEmail});
if(_oSelf._msIsSender==0)
{
confirmBox({title:"\u62D2\u6536\u786E\u8BA4",msg:_sMsg||"\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u6B64\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F",confirmBtnTxt:"\u62D2\u6536",cancelBtnTxt:"\u53D6\u6D88",confirmClass:"btn_blue",onreturn:function(_abIsOk){
if(_abIsOk)
{
_oTop.QMAjax.send("/cgi-bin/config_blackwhitelist",{content:_oTop.T(["sid=#sid#&act=blacklist&Fun=submit&confirm=1&group=#email#"],"#").replace({sid:_oTop.getSid(),email:encodeURIComponent(_sEmail)}),method:"POST",onload:function(_abIsOk,_asReturn){
if(_abIsOk&&trim(_asReturn).indexOf("<!--cgi exception")===-1)
{
_oTop.showInfo("\u5DF2\u5C06\u6536\u4EF6\u4EBA\u5730\u5740\u52A0\u5165\u9ED1\u540D\u5355");
}
else{
_oTop.showError("\u6DFB\u52A0\u9ED1\u540D\u5355\u5931\u8D25...");
}
}});
}
}});
}
else{
_createMailFrm(_sMailId,_sFolderid);
doReject(true,"",getMainWin(),_sEmail,_sMsg);
}
_goStatic.doMouseEvent("out",_oTop.getMainWin());
_oTop.LogKV({sValue:'profiletips|reject'});
};
Info.prototype.exbookEmlMgr=function(){
var _oSelf=this,_sMailId=_oSelf._msMailid,_sBook=_oSelf._msBook,_sEmail=_oSelf._msEmail,_sName=_oSelf._msNickName,_nIsTuan=_oSelf._msIsTuan||0;
loadingBox({model:"\u53CD\u5783\u573E",js:["$js_path$webp/qmantispam264eed.js"],oncheck:function(){
return !!getTop().QMAntiSpam;
},onload:function(){
var _oSpam=new QMAntiSpam.qmExbookEmlMgr({sMailId:_sMailId,from:{name:_sName,addr:_sEmail,qq:""}});
_oSpam.book2(_nIsTuan,function(){
if(_oSelf._msShowInfo=="6")
{
getTop().getMainWin().location.reload();
}
},_oSelf._mbIsAd);
}});
_goStatic.doMouseEvent("out",_oTop.getMainWin());
getTop().LogKV('receiverule|createentrance|kv');
};
function _createMailFrm(_asMailId,asFolderid)
{
_createForm({oWin:getMainWin(),sFormId:"mail_frm",sAction:"/cgi-bin/mail_mgr"},extend({s:"readmail_spam",fm:"mail_list",s_reject_what:"11",isspam:'true',mailid:_asMailId,reporttype:"",location:"readmail",srcfolderid:asFolderid,mailaction:"mail_spam"}));
}
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
function _wraparound(_asValue)
{
_asValue=_asValue||"";
if(_asValue.length>25)
{
_asValue=[_asValue.substr(0,25)+"<wbr/>"+_wraparound(_asValue.substr(25))].join("");
}
return _asValue;
}
function _isAdminUin(_asUin)
{
return _asUin==getTop().g_admuin;
}
function _isAdminEmail(_asEmail)
{
var _oAdmin=["10000@qq.com","birthday@qq.com","urlcreator@qq.com","birthdayreminder@qq.com","friends@qq.com"],_bisAdmin=false;
if((_asEmail.toLowerCase().indexOf("postmaster@")==0))
{
return true;
}
else{
getTop().E(_oAdmin,function(_asAdminEmail){
if(!_bisAdmin)
{
if(_asAdminEmail==_asEmail)
{
_bisAdmin=true;
}
}
});
return _bisAdmin;
}
}
function _isGroupEmail(_asEmail)
{
return _asEmail.indexOf("@g.qq.com")>0;
}
_aoLoadWin.QMProfileTips=_goStatic;
})(window);
