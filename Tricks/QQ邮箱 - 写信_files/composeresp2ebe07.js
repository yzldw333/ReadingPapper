var ComposeResp=(function(a,g){
var i=getTop(),e=i.TE("/cgi-bin/mailmicromsg?sid=$sid$&t=mailmicromsg.json&action=compose$@$for($oUins$)$@$&uin=$_this_$$@$endfor$@$"),c=i.TE(['<li>','<span id="li_$sIdx$" class="info_email black"><span id="addressname_0">$sName$</span>&lt;<span id="address_0">$sAddr$</span>&gt;</span>','$@$if($sAid$ > 0)$@$','<span class="info_action"><a id="a_$sIdx$" href="javascript:void(0)" txt="\u4FEE\u6539\u8054\u7CFB\u4EBA\u4FE1\u606F" onclick="Opr(\'$sAddr$\',0,\'new\')">\u4FEE\u6539\u8054\u7CFB\u4EBA\u4FE1\u606F</a></span>','$@$else$@$','<span id="saveAddrPanel_$sIdx$" class="info_action">','<span class="txt_red">\u6B64\u8054\u7CFB\u4EBA\u672A\u4FDD\u5B58</span>\uFF0C\u60A8\u53EF\u4EE5<a id="a_$sIdx$" href="javascript:void(0)" txt="\u4FEE\u6539\u5E76\u4FDD\u5B58" onclick="Opr(\'$sAddr$\',0,\'new\')">\u4FEE\u6539\u5E76\u4FDD\u5B58</a>','</span>','$@$endif$@$','</li>']),b=i.TE(['$@$if($ismmuser$ == 0)$@$','<div class="" style="padding:15px;">','<img class="left ico_wxlogo" src="$imgpath$spacer.gif"/>','<div style="margin-left:58px;">','<div class="b_size">\u9664\u4E86\u53D1\u90AE\u4EF6\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u548C\u4ED6(\u4EEC)\u5728\u5FAE\u4FE1\u4E0A\u5BF9\u8BB2\u3002</div>','<div style="margin-top:7px;">','<a target="_blank" href="http://weixin.qq.com/cgi-bin/readtemplate?check=false&t=weixin_redirect&from=100&stype=1000183" class="button_gray_s" style="margin: 0pt 10px 0pt 0;">\u4F53\u9A8C\u5FAE\u4FE1</a>','</div>','</div>','</div>','$@$else if($ismmuser$ == 1)$@$','<div style="$@$if($nOpenWx$==0 && $nUnOpenWx$==0 && $nGroup$==0 && $nAD$==0)$@$display:none;$@$endif$@$">','<div class="intro" style="$@$if($nOpenWx$==0 && $nUnOpenWx$==0)$@$display:none;$@$endif$@$">','<img class="left ico_wxlogo" src="$imgpath$spacer.gif"/>','$@$if($nOpenWx$>1 || $nUnOpenWx$ > 1)$@$','<p>\u9664\u4E86\u53D1\u90AE\u4EF6\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u548C\u4ED6\u4EEC\u5728\u5FAE\u4FE1\u4E0A\u5BF9\u8BB2\u3002</p>','$@$else$@$','<p>\u9664\u4E86\u53D1\u90AE\u4EF6\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u548C\u4ED6\u5728\u5FAE\u4FE1\u4E0A\u5BF9\u8BB2\u3002</p>','$@$endif$@$','<div class="clear"></div>','</div>','$@$if($oFrdWXLst.length$ > 0)$@$','<div class="wx_invite_pannel">','<div class="addrtitle" style="">\u60A8\u7684\u5FAE\u4FE1\u597D\u53CB\uFF1A</div>','<div class="receiverList">','<ul class="addrname wx_invite_list">','$@$for($oFrdWXLst$)$@$',c,'$@$endfor$@$','</ul>','</div>','</div>','$@$if($oNotFrdWXLst.length$ > 0 || $oNotWXLst.length$ > 0 || $oGrpLst.length$ > 0)$@$','<div class="qqshowbd" style="margin:15px 0;border-width:1px 0 1px 0;border-bottom:1px solid #f4f4f4;"></div>','$@$endif$@$','$@$endif$@$','$@$if($oNotFrdWXLst.length$ > 0)$@$','<div class="wx_invite_pannel" id="wxaddfriend">','<div class="addrtitle" >\u60A8\u53EF\u4EE5\u6DFB\u52A0\u4ED6$@$if($oNotFrdWXLst.length$ > 1)$@$\u4EEC$@$endif$@$\u4E3A\u5FAE\u4FE1\u597D\u53CB\uFF1A</div>','<div class="receiverList">','<ul class="addrname wx_invite_list">','$@$for($oNotFrdWXLst$)$@$',c,'$@$endfor$@$','</ul>','<div class="addrname wxinviteScuessPanel">','<img align="absmiddle" style="margin-top:-3px;margin-top:0\9;margin-right:5px;" class="icon_finish_m" src="$imgpath$spacer.gif"/>','<span class="addrtitle">','$@$if($oNotFrdWXLst.length$ > 1)$@$','\u6DFB\u52A0\u5FAE\u4FE1\u597D\u53CB\u6210\u529F\uFF0C\u5FEB\u53BB\u5FAE\u4FE1\u8054\u7CFB\u4ED6\u4EEC\u5427','$@$else$@$','\u6DFB\u52A0\u5FAE\u4FE1\u597D\u53CB\u6210\u529F\uFF0C\u5FEB\u53BB\u5FAE\u4FE1\u8054\u7CFB\u4ED6\u5427','$@$endif$@$','</span>','</div>','<div class="addrname wxinviteFailedPanel">','<img align="absmiddle" style="margin-top:-3px;margin-top:0\9;margin-right:5px;" class="icon_error_m" src="$imgpath$spacer.gif"/>','<span class="">\u6DFB\u52A0\u5FAE\u4FE1\u597D\u53CB\u5931\u8D25\uFF0C<a class="underline" href="" onclick="return addmicromail(\'friend\', \'$sUins$\');">\u8BF7\u91CD\u8BD5</a></span>','</div>','<div style="" class="addOpera">','<a class="button_gray_l" style="width:107px" onclick="return addmicromail(\'friend\', \'$sUins$\');">\u6DFB\u52A0\u4E3A\u5FAE\u4FE1\u597D\u53CB</a>','<input type="button" class="btn" disabled value="\u6DFB\u52A0\u4E2D..." style="width:80px;" />','</div>','</div>','</div>','$@$if($oNotWXLst.length$ > 0 || $oGrpLst.length$ > 0)$@$','<div class="qqshowbd" style="margin:15px 0;border-width:1px 0 1px 0;border-bottom:1px solid #f4f4f4;"></div>','$@$endif$@$','$@$endif$@$','$@$if($oNotWXLst.length$ > 0)$@$','<div class="wx_invite_pannel" id="wxinvitepannel">','<div class="addrtitle" style="">\u60A8\u53EF\u4EE5\u9080\u8BF7\u4EE5\u4E0B\u6536\u4EF6\u4EBA\u4F7F\u7528\u5FAE\u4FE1\uFF1A</div>','<div class="receiverList" >','<ul class="addrname wx_invite_list">','$@$for($oNotWXLst$)$@$',c,'$@$endfor$@$','</ul>','<div class="addrname wxinviteScuessPanel">','<img align="absmiddle" style="margin-top:-3px;margin-top:0\9;margin-right:5px;" class="icon_finish_m" src="$imgpath$spacer.gif"><span class="addrtitle">\u9080\u8BF7\u4FE1\u53D1\u9001\u6210\u529F!</span>','</div>','<div class="addrname wxinviteFailedPanel">','<img align="absmiddle" style="margin-top:-3px;margin-top:0\9;margin-right:5px;" class="icon_error_m" src="$imgpath$spacer.gif">','<span class="">\u9080\u8BF7\u4FE1\u53D1\u9001\u5931\u8D25\uFF0C<a class="underline" href="" onclick="return addmicromail(\'invite\', \'$sAddrs$\');">\u8BF7\u91CD\u8BD5</a></span>','</div>','<div class="addOpera">','<a target="_blank"  onclick="return addmicromail(\'invite\', \'$sAddrs$\');" href="/cgi-bin/getqqfriend?sid=$sid$&t=wx_invite&from=4&action=ivt" class="button_gray_l">','$@$if($oNotWXLst.length$ > 1)$@$','\u7ED9\u4ED6\u4EEC\u53D1\u9001\u9080\u8BF7\u4FE1','$@$else$@$','\u7ED9\u4ED6\u53D1\u9001\u9080\u8BF7\u4FE1','$@$endif$@$','</a>','<input type="button" class="btn" disabled value="\u6DFB\u52A0\u4E2D..." style="width:80px;" />','</div>','</div>','</div>','$@$if($oGrpLst.length$ > 0)$@$','<div class="qqshowbd" style="margin:15px 0;border-width:1px 0 1px 0;border-bottom:1px solid #f4f4f4;"></div>','$@$endif$@$','$@$endif$@$','$@$if($oGrpLst.length$ > 0)$@$','<div class="wx_invite_pannel" style="padding:13px 15px 10px" id="wxinvitepannel">','<div class="addrtitle">\u7FA4\u7EC4\u90AE\u4EF6\uFF1A</div>','<div class="receiverList" >','<ul class="addrname wx_invite_list">','$@$for($oGrpLst$)$@$',c,'$@$endfor$@$','</ul>','</div>','</div>','$@$endif$@$','</div>','$@$endif$@$','<div id="qqmail_AD_sepline" class="qqshowbd" style="$@$if(!$bADShow$)$@$display:none;$@$endif$@$margin:15px 0;border-width:1px 0 1px 0;border-bottom:1px solid #f4f4f4;"></div>']),d=i.TE(['<div  id="3GContainer" class="info_item">','<img class="left ico_mailapp" src="$imgpath$spacer.gif"/>','<div style="margin-left:52px;">','<div class="b_size">\u60F3\u7B2C\u4E00\u65F6\u95F4\u77E5\u9053TA\u56DE\u590D\u4E86\u90AE\u4EF6\uFF1F\u8BD5\u8BD5QQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF\u3002</div>','<div style="margin-top:7px;">','<a target="_blank" href="http://3g.mail.qq.com/cgi-bin/loginpage?sid=$sid$&stype=4&subtype=0&from=&fr=&url=3gm" class="button_gray_s">\u7ACB\u5373\u4F53\u9A8C</a>','</div>','</div>','</div>']),f=i.TE(['$@$if($b3Gshow$)$@$','<div class="info_sepline qqshowbd"></div>','$@$endif$@$','<div class="info_item addrtitle">','<div class="info_title">\u90AE\u4EF6\u5DF2\u53D1\u7ED9\u4EE5\u4E0B\u6536\u4EF6\u4EBA\uFF1A</div>','<ul>','$@$if($oNewAddrLst.length$ > 0)$@$','$@$for($oNewAddrLst$)$@$',c,'$@$endfor$@$','$@$endif$@$','$@$if($oExistAddrLst.length$ > 0)$@$','$@$for($oExistAddrLst$)$@$',c,'$@$endfor$@$','$@$endif$@$','$@$if($oOtherExistAddrLst.length$ > 0)$@$','$@$for($oOtherExistAddrLst$)$@$',c,'$@$endfor$@$','$@$endif$@$','</ul>','</div>','$@$if($oGrpLst.length$ > 0)$@$','<div class="info_sepline qqshowbd"></div>','$@$endif$@$','$@$if($oGrpLst.length$ > 0)$@$','<div class="info_item" id="wxinvitepannel">','<div class="addrtitle">\u7FA4\u7EC4\u90AE\u4EF6\uFF1A</div>','<ul class="addrtitle">','$@$for($oGrpLst$)$@$',c,'$@$endfor$@$','</ul>','</div>','$@$endif$@$','<div id="qqmail_AD_sepline" class="info_sepline qqshowbd" $@$if(!$bADShow$)$@$style="display:none;"$@$endif$@$></div>']),h=i.inherit("_ComPOse_REsp_",Object,function(j){
return ({evt_:{bindHandler:function(l,k){
}},$_constructor_:function(k){
},_initEvt:function(k,l){
var n=this,m=function(o){
o=typeof (o)=="string"?a.S(o):o;
a.E(k,function(p){
var q={"ck":"click","md":"mousedown"}[p];
q&&a.addEvent(o,q,function(r){
n._handleEvt(o,r,p);
});
});
};
if(typeof (l)=="string")
{
l=a.S(l);
}
if(l.nodeType)
{
m(l);
}
else{
a.E(l,function(o){
m(o);
});
}
},_handleEvt:function(l,k,m){
var p=this,o=a.getEventTarget(k),n=o.ownerDocument,r,s,q;
while(o&&a.isObjContainTarget(l,o))
{
r=a.attr(o,m);
if(r)
{
s=r;
q=o;
}
if(s)
{
if(typeof (p.evt_[s])=="function")
{
p.evt_[s].apply(p,[q,k]);
break;
}
}
o=o.parentNode;
}
},_initCommResp:function(k,l){
var o=k.s,n=k.cginame,m=i.getMainWin();
i.initPageEvent(m);
o!="group_quick"&&o!="group_vote"&&i.reloadLeftWin();
l.oUploadSize&&i.goUserInfo.set("UPLOADEXPIRE",l.oUploadSize.nSize?l.oUploadSize.sExpire:"");
(o=="comm"||o=="card"||o=="postcard")&&i.recodeComposeStatus(1,l.sMailId);
l.sRefreshBirthInf=="1"&&i.reloadFrm(i.F("addrToday"));
n=="groupmail_send"&&i.QMDialog("composeExitAlert","isShow")&&i.QMDialog("","close");
if(m.setNeedCloseConform)
{
m.ErrorCallBack=function(){
};
}
},_initBizResp:function(k,l){
var s=k.s,p=i.getMainWin();
debug("1BizSession:"+s);
switch(s)
{case "group_quick":
i.pasteHTML(l.sGroupHTML,"contentDiv");
i.showInfo("\u60A8\u7684\u8BC4\u8BBA\u5DF2\u6210\u529F\u53D1\u8868");
p.ErrorCallBack();
p.revertReadMailGroupText();
p.clearRdCache();
break;
case "conv_quick":
i.showInfo("\u60A8\u7684\u90AE\u4EF6\u5DF2\u6210\u529F\u53D1\u9001");
a.insertHTML(a.S("submail_start_div"),"afterEnd",l.sConvHTML);
if(p.quickSendFinish)
{
p.quickSendFinish(l.sReAndFwMailid,l.sMailId);
p.clearRdCache();
p.QMConvMail.oneMailReady({mailid:l.sMailId});
}
break;
case "comm_quick":
i.showInfo("\u60A8\u7684\u90AE\u4EF6\u5DF2\u6210\u529F\u53D1\u9001");
if(p.quickSendFinish)
{
p.quickSendFinish(l.sReAndFwMailid,l.sMailId);
}
break;
case "voice_quick":
if(p.location.href.indexOf('/cgi-bin/today?')!=-1)
{
i.showInfo("\u5DF2\u6210\u529F\u7ED9\u5BF9\u65B9Hello");
p.ResetHello();
}
break;
case "rss_quick":
var r=p.location.href;
if(r.indexOf('reader_detail')!=-1||r.indexOf('reader_comment')!=-1)
{
i.showInfo("\u60A8\u7684\u56DE\u590D\u90AE\u4EF6\u5DF2\u6210\u529F\u53D1\u9001");
i.reloadFrm(p);
}
break;
case "group_vote":
if(p.location.href.indexOf('t=readmail')!=-1)
{
i.showInfo("\u60A8\u5DF2\u6295\u7968\u6210\u529F");
p.QMReadMail.clearCache();
i.setTimeout("getTop().goUrlMainFrm( getTop().strReplace(getTop().getMainWin().location.href,'&refresh_maillist=true','')+'&refresh_maillist=true' );",500);
}
break;
case "gstate":
if(l.sOper2=="setnewno")
{
i.showInfo("\u65B0\u56DE\u590D\u65F6\u6807\u672A\u8BFB\u5DF2\u5173\u95ED");
}
else if(l.sOper2=="setnewyes")
{
i.showInfo("\u65B0\u56DE\u590D\u65F6\u6807\u672A\u8BFB\u5DF2\u5F00\u542F");
}
else if(l.sOper=="submit"&&l.sBan=="false")
{
i.showInfo("\u65B0\u90AE\u4EF6QQ\u63D0\u9192\u5168\u90E8\u5F00\u542F");
}
else if(l.sOper=="submit")
{
i.showInfo("\u65B0\u90AE\u4EF6QQ\u63D0\u9192\u5168\u90E8\u5173\u95ED");
}
else{
i.showInfo("\u8BBE\u7F6E\u4FEE\u6539\u6210\u529F");
}
if(l.sFrom=="setting")
{
i.goUrlMainFrm(a.T("/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list").replace({sid:i.getSid()}),false,true);
}
else{
var o=a.T('/cgi-bin/mail_list?t=$t$&sid=$sid$&folderid=8&groupid=$groupid$'),t='mail_list_group',m=i.S('folder_8'),n=m&&m.getAttribute('href');
if(n&&n.indexOf('mail_list_groupindex')>0)
{
t='mail_list_groupsms';
}
i.goUrlMainFrm(o.replace({t:t,sid:i.getSid(),groupid:+l.sGid}),false,true);
}
i.rdVer.batch("@");
break;
case "reject":
i.showInfo(l.sReject=="yes"?"\u6210\u529F\u62D2\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6":"\u6210\u529F\u5F00\u542F\u63A5\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6");
i.rdVer.batch("@");
if(l.sFrom=="setting")
{
i.goUrlMainFrm(a.T("/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list").replace({sid:i.getSid()}),false,true);
}
else if(l.sTag=="compose")
{
i.goUrlMainFrm(a.T("/cgi-bin/grouplist?sid=$sid$&t=compose_group&gid=$gid$&s=from_mail_list$newwin$").replace({sid:i.getSid(),gid:l.sRejectGid,newwin:i.bnewwin?"&newwin=true":""}),false,true);
}
else{
i.reloadFrmLeftMain(false,true);
}
break;
case "card_qq":
i.QMDialog("GreetingCard","close");
i.showInfo("\u53D1\u9001\u6210\u529F");
i.disableAll(false);
if(l.sMK=="birth")
{
p.location.href=a.T('/cgi-bin/cardlist?t=card_qq&sid=$sid$&param=$param$&ListType=Cards&limit=18&Cate1Idx=listall&loc=cardlist,card,,1').replace({sid:i.getSid(),sParam:l.sParam});
}
break;
case "reject_from_readmail":
var q=l.sGid;
i.showInfo(l.sReject=="yes"?"\u6210\u529F\u62D2\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6":"\u6210\u529F\u5F00\u542F\u63A5\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6 ");
if(l.sReject=="yes")
{
a.S("reject_note").innerHTML="&nbsp;&nbsp;<span  class='addrtitle'>\u5DF2\u62D2\u6536\u6B64\u7FA4\u7684\u90AE\u4EF6&nbsp;<a href='/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=no&gid="+q+"&t=compose_send&s=reject_from_readmail' target='actionFrame'>[\u542F\u52A8\u6536\u53D6]</a></span>";
}
else{
a.S("reject_note").innerHTML="&nbsp;&nbsp;<a href='/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=yes&gid="+q+"&t=compose_send&s=reject_from_readmail' target='actionFrame'>\u62D2\u6536\u6B64\u7FA4</a>";
}
p.clearRdCache();
break;
default:
if(this._moCfg.sType!="save")
{
try{
i.reportBrowser("delay","compose|complete|success");
i.reportLoongson("compose|complete|success|loongson");
}
catch(u)
{
}
;this._patseHTML(l.sHtml,function(v){
this._initRuntimeScript(k,l,v);
this._initComputeScript(k,l,v);
this._initContentComplete();
},this._moCfg.sModule=="note");
this._initEvt(["ck","md"],p.document.body);
}
else{
if(s=="group")
{
i.afterAutoSave("",l.sMailId,[i.formatDate(new Date(),"%hh%:%mm%","%")," ","\u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u7FA4\u90AE\u4EF6\u8349\u7A3F\u7BB1"].join(""));
}
else{
i.afterAutoSave("",l.sMailId,[i.formatDate(new Date(),"%hh%:%mm%","%")," ",i.gsMsgSaveOk].join(""));
}
}
}
},_initMailAppADData:function(k){
var p=a.S("3GContainer"),q=a.S("notifydiv"),o=parseInt(getTop().goUserInfo.get("IOSWEBAPPVER"),10)||0,n=parseInt(getTop().goUserInfo.get("ANDROIDWEBAPPVER"),10)||0,l=(o=="0"&&n=="0")?true:false,m=q&&i.isShow(q);
if(l&&!m)
{
p.innerHTML=d.replace({imgpath:i.getPath('image'),sid:i.getSid()});
p.setAttribute("isShow",1);
p.parentNode.style.display="";
}
},_initNewAddrData:function(k){
var q=a.S("newAddr"),p=a.S("3GContainer"),v=k.oToObj,o=v&&v.oItems,s=k.newAddr||{},n=k.existAddr||{},u=k.otherexistAddr||{},x=i.getSid(),y=i.getUin(),l=v.oAddrLst=[],r=v.oNewAddrLst=[],m=v.oExistAddrLst=[],t=v.oOtherExistAddrLst=[],z="",w=[];
i.E(o,function(A){
if(A&&typeof A.sIdx!="undefined")
{
if(typeof s[A.sAddr]!="undefined")
{
A.sAid=s[A.sAddr];
r.push(A);
}
if(typeof n[A.sAddr]!="undefined")
{
A.sAid=n[A.sAddr];
m.push(A);
}
if(typeof u[A.sAddr]!="undefined")
{
A.sAid=u[A.sAddr];
t.push(A);
}
}
});
v.oGrpLst.pop();
if(q&&(r.length>0||m.length>0||t.length>0))
{
q.innerHTML=f.replace(i.extend({imgpath:i.getPath('image'),sid:i.getSid(),b3Gshow:(p.getAttribute("isShow")==1),bADShow:i.isShow(a.S("qqmail_AD_container"))},v));
q.setAttribute("isShow",1);
q.parentNode.style.display="";
}
},_initWeixinData:function(k){
var o=a.S("weixinAD"),m=k.oToObj,l=m&&m.oItems,p=i.getSid(),q=i.getUin(),r="",n=[];
l&&i.E(l,function(s){
s.isremote==0&&s.isgroup==0&&s.sUin&&s.sUin!=q&&n.push(s.sUin);
});
r=e.replace({sid:p,oUins:n});
i.QMAjax.send(r,{method:"GET",onload:function(s,t){
if(s)
{
var A=evalValue(t),u=n.length,v=0,x=m.oFrdWXLst=[],y=m.oNotFrdWXLst=[],z=m.oNotWXLst=[],C="",B="",w=new Date();
i.E(l,function(D){
if(D)
{
var E=A.oUins[D.sUin];
if(E)
{
if(E.isOpenWx==0)
{
u--;
v++;
B+=["&alia=",D.sAddr].join("");
z.push(D);
}
else if(E.isFriend==0)
{
C+=["&mmuin=",D.sUin].join("");
y.push(D);
}
else{
x.push(D);
}
}
else if(D.isremote==1)
{
v++;
z.push(D);
}
}
});
m.ismmuser=A.ismmuser;
m.nOpenWx=u;
m.nUnOpenWx=v;
m.oGrpLst.pop();
if(o)
{
o.innerHTML=b.replace(i.extend({sUins:C,sAddrs:B,imgpath:i.getPath('image'),sid:i.getSid(),bADShow:i.isShow(a.S("qqmail_AD_container"))},m));
o.parentNode.style.display="";
}
}
}});
},_initRuntimeScript:function(k,l){
var m=k.s;
try{
if(l.sSelfDef!="-1"&&!l.sSelfDef||l.sAutoSave=="1")
{
i.goUserInfo.reset();
}
if(l.sBackUrl.search("reader_detail")!=-1||l.sBackUrl.search("reader_list")!=-1)
{
if(m=="group")
{
a.S("btnrssbackl_group").style.display="block";
a.S("btnbackl_group").style.display="none";
a.S("btnwriteagn_group").style.display="none";
}
a.S("sendinfomsg").innerHTML=l.sIncludeQzone?"\u6587\u7AE0\u5DF2\u901A\u8FC7\u90AE\u4EF6\u53D1\u8868\u5230Qzone\u3002":"\u6587\u7AE0\u5DF2\u901A\u8FC7\u90AE\u4EF6\u8F6C\u53D1\u7ED9\u597D\u53CB\u3002";
a.S("rssbacklist").style.display="block";
a.S("backlist").style.display="none";
a.S("backReceive").style.display="none";
a.S("btnbackr").disable=false;
a.S("btnagainr").disable=false;
a.S("btnbackl").disable=false;
a.S("btnagainl").disable=false;
a.S("btnrssbackl").disable=true;
if(i.bnewwin)
{
a.S("btnrssbackl").value="\u5173\u95ED\u65B0\u7A97\u53E3";
}
}
else if(!i.bnewwin)
{
a.S("rssbacklist").style.display="none";
a.S("backlist").style.display="block";
a.S("backReceive").style.display="none";
a.S("btnbackr").disable=true;
a.S("btnagainr").disable=true;
a.S("btnbackl").disable=false;
a.S("btnagainl").disable=false;
a.S("btnrssbackl").disable=false;
}
else{
a.S("entermail").style.display="";
a.S("rssbacklist").style.display="none";
a.S("backlist").style.display="none";
a.S("backReceive").style.display="";
a.S("btnbackr").disable=false;
a.S("btnagainr").disable=false;
a.S("btnbackl").disable=true;
a.S("btnagainl").disable=true;
a.S("btnrssbackl").disable=false;
}
}
catch(n)
{
}
},_initComputeScript:function(k,l,m){
var n=i.getMainWin(),o=a.GelTags("script",m.document.body),p=l.sHtml;
m.gnScriptIdx=-1;
m.document.write=function(q){
o[m.gnScriptIdx]&&a.insertHTML(o[m.gnScriptIdx],"afterEnd",q);
};
a.E(o,function(r,q){
m.gnScriptIdx=q;
try{
i.globalEval(r.innerHTML,n);
}
catch(s)
{
debug(s);
}
});
},_initContentComplete:function(){
var k=i.getMainWin();
k.document.body.onbeforeunload=null;
k.clearAutoSave();
},_patseHTML:function(m,l,k){
var n=this;
if(m)
{
if(k)
{
i.createBlankIframe(i,{id:"notehandleFrame",onload:function(){
var o=this.contentWindow;
o.document.body.innerHTML="&nbsp;"+m;
l&&l.call(n,o);
}});
}
else{
i.getMainWin().document.body.innerHTML="&nbsp;"+m;
setTimeout(function(){
l&&l.call(n,i.getMainWin());
});
}
}
},handle:function(k){
this._moCfg=k;
k.fComplete&&k.fComplete(k);
try{
this._initCommResp(k.oPostData,k.oRespData);
this._initBizResp(k.oPostData,k.oRespData);
this._initMailAppADData(k.oRespData);
if(k.oPostData.s=="comm"&&k.sModule!=="urlcreator")
{
this._initNewAddrData(k.oRespData);
}
}
catch(l)
{
k.fReportError&&k.fReportError(k);
}
}});
});
return new h();
})(function(){
var a=getTop();
return {S:function(b){
return a.S(b,a.getMainWin());
},E:a.E,T:a.T,TE:a.TE,attr:a.attr,insertHTML:a.insertHTML,GelTags:a.GelTags,addEvent:a.addEvent,getEventTarget:a.getEventTarget,isObjContainTarget:a.isObjContainTarget};
}());
