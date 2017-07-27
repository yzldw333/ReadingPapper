function QMLinkman(a)
{
var b=this;
b._moConfig=a;
b._moDoc=a.oContainer.ownerDocument;
b._msPid=unikey("lm");
b._moPosition={};
b._moCustomAddrs={};
b._init();
}
QMLinkman.prototype={_init:function(){
var a=this;
if(a._moConfig.nType==1)
{
a._iniAddrs();
}
a._show();
},_initCustomAddr:function(a,b){
var d=this,c=getTop().QMAddress,e=100000;
while(c.getAddress(e)||d._moCustomAddrs[e])
{
e++;
}
return d._moCustomAddrs[e]={id:e,pinyin:b,email:a,name:b,qq:-1};
},_iniAddrs:function(){
var f=this,e=getTop().QMAddress,d=f._moConfig.oExitAddress;
f._moRightIndex=[];
if(!d)
{
return;
}
for(var a=0,b=d.length;a<b;a++)
{
var g=d[a].addr,i=d[a].nick,h=d[a].id,c=e.getAddress(h||g,false,true);
f._moPosition[g]=1;
if(c)
{
f._moRightIndex.push(c.id);
}
else{
c=f._initCustomAddr(g,i);
f._moRightIndex.push(c.id);
}
f._showRightItem(c,1);
}
},_makeItems:function(a){
var r=this,l=r._moConfig,u=getTop(),h=a.nTime,t=QMLinkman._TEMPLATE,w=a._oGroup.id,j=u.QMAddress,m=j.getGroup(w),k=m.addressesId,o=[],v=l.onfilteraddr;
if(j.getTime()<=h&&(a.nStatus&1))
{
return null;
}
var p=j.getGroup(w),n=p.groupsId;
if(n)
{
for(var d=0,g=n.length;d<g;d++)
{
var s=j.getGroup(n[d]),f=s.addressesId.length,b=l.bSupportGroup&&f>0&&f<21&&n[d]>9&&j.getAncestor(s)==1;
o.push({sType:'group',sItemValue:t._caption.replace({other:b||(n[d]===3&&l.nType===0)?t._groupRightItem.replace({disp:'none',name:n[d]===3?'\u6E05\u7A7A':'\u5168\u9009',title:n[d]===3?'\u6E05\u7A7A\u6700\u8FD1\u8054\u7CFB\u4EBA\u8BB0\u5F55':'',fun:'g'+s.id}):'',cac:b?'lm_cac':'',name:s.name}),sHashCode:'g'+s.id,nTime:j.getTime(),_oGroup:s});
}
}
for(var c=0,e=k.length;c<e;c++)
{
var i=u.QMAddress.getAddress(k[c],w!=3&&w!=4);
i&&(!v||u.callBack(v,[i])!==false)&&o.push({sType:'item',sItemValue:t._left_item.replace({beforeImage:i.icon?t._addrIcon.replace(i):(b&&i.nShortcutGroupId?t._virtualGroupAccountIcon:(i.qq==getTop().g_admuin?t._domainMailGroupAccountIcon:'')),title:i.email,name:i.name,memo:i.memo}),sHashCode:i.id,nTime:j.getTime(),sDisplay:r._moPosition[i.email]?'none':''});
if(w==3&&r._moGroupClose)
{
r._moGroupClose.push(i);
}
}
if(typeof m.moreChildId!="undefined")
{
var q=j.getGroup(m.moreChildId);
o.push({sType:'moreItem',sItemValue:t._left_item.replace({title:q.name,name:"<b>\u663E\u793A\u66F4\u591A\u2193</b>"}),sHashCode:'m'+q.id,nTime:j.getTime(),_oGroup:q});
}
if(a.sType!="title")
{
if(e==0)
{
o.push({sType:'title',sHashCode:"-1",sItemValue:t._nobody.replace({locale:getTop().getLocale(),message:{"\u5E38\u7528\u8054\u7CFB\u4EBA":"\u5E38\u7528\u8054\u7CFB\u4EBA","\u4E0D\u5E38\u7528\u8054\u7CFB\u4EBA":"\u4E0D\u5E38\u7528\u8054\u7CFB\u4EBA"}[m.name]||"\u8054\u7CFB\u4EBA"})});
}
}
return o;
},_moGroupClose:[],getGroupClose:function(a){
return this._moGroupClose.slice(0,a||0);
},_show:function(){
var j=this,e=j._moConfig,f=e.oContainer,d=getTop().QMAddress,k=QMLinkman._TEMPLATE,h=e.oMainGroup,g=[];
f.innerHTML=k._plane.replace({pid:j._msPid,fromaddr:e.sFromaddr||"",fromname:e.sFromname||""});
j.resizeAddr();
for(var b=0,c=h.length;b<c;b++)
{
var i=d.getGroup(h[b]);
if(!i||!i.groupsId||!i.addressesId||(i.groupsId.length==0&&i.addressesId.length==0))
{
continue;
}
g.push({sType:'title',bExpanded:true,sHashCode:'t'+i.id,_oGroup:i,sItemValue:k._title.replace({title:i.name,fun:"g"+i.id,name:i.id==3?"\u6E05\u7A7A":""})});
}
var a;
j._moTreeView=new QMTreeView({oContainer:S(j._msPid+'tree',j._moDoc),oDefaultItem:g,ongetdata:function(l){
return j._makeItems(l);
},onload:function(){
this.expand(a='g3');
},onclick:function(l){
var q=getEventTarget(l);
while(q&&q.nodeType==3)
{
q=q.parentNode;
}
var r=q.getAttribute("fun");
if(!r)
{
return true;
}
if(r=="qq")
{
d.importqq();
}
else if(r=='creategroup')
{
goUrlMainFrm("/cgi-bin/addr_listall?sid="+getSid()+"&category=mailgroup&groupaddr=&t=mail_group_addr");
}
else if(r.charAt(0)=='g')
{
var s=r.substr(1);
if(s==="3")
{
confirmBox({msg:"\u662F\u5426\u6E05\u7A7A\u6700\u8FD1\u8054\u7CFB\u4EBA\uFF1F",onreturn:function(t){
if(!t)
{
return;
}
QMAjax.send(T("/cgi-bin/laddr_opr?sid=$sid$&action=clearupdatetime").replace({sid:getSid()}),{onload:function(u,v){
if(u&&v.indexOf('<!--cgi exception-->')==-1)
{
showInfo("\u6700\u8FD1\u8054\u7CFB\u4EBA\u8BB0\u5F55\u5DF2\u6E05\u7A7A");
QMAddress.setExpired(0);
var w=j._moTreeView.findNode("t3")[0];
if(w)
{
j._moTreeView.findSub(w).innerHTML=k._nobody.replace({locale:getTop().getLocale(),message:"\u6700\u8FD1\u8054\u7CFB\u4EBA"});
}
}
else{
showError("\u6700\u8FD1\u8054\u7CFB\u4EBA\u8BB0\u5F55\u6E05\u7A7A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
}
}});
}});
}
else{
var p=d.getGroup(s),o=p.addressesId,n=o.length,m;
for(m=0;m<n;m++)
{
j._clickItem(1,o[m]);
}
}
}
return false;
},onselect:function(l){
if(l.sType=="group"&&l.sHashCode!=a)
{
this.collapse(a);
a=l.sHashCode;
}
if(l.sType=="item")
{
callBack.call(j,j._clickItem,[true,l.sHashCode]);
}
}});
j._initEvent();
},showHint:function(a){
var f=this,h=S(f._msPid+'tree',f._moDoc),d=S(f._msPid+'hint',f._moDoc),g=QMLinkman._TEMPLATE,c=10;
if(!a||!a.length)
{
b(d,false);
return;
}
if(!d)
{
insertHTML(h,"afterBegin","<div id='"+f._msPid+"hint' style='display:none;'>"+g._hint.replace(a.slice(0,c))+"</div>");
d=S(f._msPid+'hint',f._moDoc);
}
else{
d.innerHTML=g._hint.replace(a.slice(0,c));
}
b(d,true);
var e=[];
for(var j=0,k=a.length;j<k;j++)
{
e.push({sHashCode:a[j].oAddress.id,sType:"item"});
}
f._moTreeView&&f._moTreeView.addNodeData(e);
function b(l,i)
{
if(!l)
{
return;
}
var m=getTop().qmAnimation;
m?m[i?'expand':'fold'](l,{durlimit:300,type:'wait',speed:'fast',onready:function(){
return {from:l.clientHeight||0};
},oncomplete:function(){
show(l,i);
}}):show(l,i);
}
},_initEvent:function(){
var g=this,a=function(j,k){
var l=getEventTarget(j),m=[g._msPid,k,""].join("_");
while(l)
{
if((l.id||"").indexOf(m)==0)
{
return l.id.substr(m.length);
}
l=l.parentNode;
}
return null;
},e=S(g._msPid+'search',g._moDoc),f=S(g._msPid+'searchtext',g._moDoc),c=S(g._msPid+'cancel',g._moDoc),h="rgb(160, 160, 160)",i="\u67E5\u627E\u8054\u7CFB\u4EBA...";
addEvent(e,"click",function(j){
var k=a(j,'s');
if(k)
{
g._clickItem(1,k);
}
e.blur();
stopPropagation(j);
preventDefault(j);
});
addEvent(c,"click",function(){
g._changeMode(false);
f.value=i;
f.style.color=h;
c.blur();
});
var b;
addEvents(f,{blur:function(){
if(f.value=="")
{
f.value=i;
f.style.color=h;
}
},focus:function(){
if(f.value==i)
{
f.value="";
f.style.color="#000000";
}
},keyup:function(){
clearTimeout(b);
b=setTimeout(function(){
g._search(f);
g._changeMode(!!f.value);
},300);
}});
addEvent(g._moConfig.oContainerRight,"click",function(j){
var k=a(j,'r');
if(k)
{
g._clickItem(0,k);
}
stopPropagation(j);
preventDefault(j);
});
var d=S("orgsender",g._moDoc);
addEvent(d,"click",function(j){
var k=g._moConfig,m=[],l=g._initCustomAddr(k.sFromaddr,k.sFromname);
m.push(l);
getTop().ossLog("realtime","all","loc=fwmail,addsender,,1");
getTop().QMAjax.send("/cgi-bin/readtemplate?kvclick=readtemplate|compose|origin_sender|1");
callBack.call(g,k.onselect,[m]);
});
},_search:function(a){
function c(q)
{
return !q.nShortcutGroupId;
}
var k=this,g=getAddrACData(a,null,k._moConfig.onfilteraddr||k._moConfig.bSupportGroup||c),h=['<div class="groupopen">','<div class="settingtable qqshowbd" style="padding:4px 0 3px 8px;cursor:default;">','\u67E5\u627E\u5230\uFF1A','</div>','</div>'],l=QMLinkman._TEMPLATE,i=/\"(.*)\" &lt;(.*)&gt;$/,p=S(k._msPid+'search',k._moDoc);
if(!p)
{
return;
}
k._mnSearchCount=0;
for(var d=0,e=g.length;d<e;d++)
{
var f=g[d],m=f.oAddress.email,b=k._moPosition[m];
if(f.oAddress.nShortcutGroupId||f.oAddress.qq==getTop().g_admuin)
{
h.push(l._research_item.replace({pid:k._msPid,id:f.oAddress.id,title:[f.oAddress.name,' (',f.oAddress.email,')'].join(""),disp:k._moPosition[m]?"none":"",name:f.sItemValue,email:f.oAddress.email}));
}
else{
var j=/\"(.*)\" &lt;(.*)&gt;\((.*)\)$/;
if(!i.test(f.sItemValue))
{
j.test(f.sItemValue);
}
h.push(l._research_item.replace({pid:k._msPid,id:f.oAddress.id,title:m,disp:k._moPosition[m]?"none":"",name:RegExp.$1,email:RegExp.$2,memo:RegExp.$3}));
}
k._mnSearchCount+=b?0:1;
}
h.push(l._search_nobody.replace({pid:k._msPid,disp:k._mnSearchCount?'none':''}));
if(window.QMAddrParser)
{
var n=trim(a.value);
if(QMAddrParser.isEmailAddress(n)&&k._moPosition[n]!=1&&!getTop().QMAddress.getAddress(n))
{
var o=n.replace(/@.+/,""),f=k._initCustomAddr(n,o);
h.push(l._search_stranger.replace({pid:k._msPid}));
h.push(l._research_item.replace({pid:k._msPid,id:f.id,title:n,disp:"",name:o,email:n}));
}
}
p.innerHTML=h.join("");
},_changeMode:function(a){
var e=this,f=S(e._msPid+'tree',e._moDoc),c=S(e._msPid+'hint',e._moDoc),d=S(e._msPid+'search',e._moDoc),b=S(e._msPid+'cancel',e._moDoc);
show(f,!a);
show(c,!a);
show(d,a);
setClass(b,a?"lm_sclose":"lm_sopen");
},_clickItem:function(a,b){
var m=this,k=getTop().QMAddress,f=k.getAddress(b,true)||m._moCustomAddrs[b],g=m._moConfig,l=[],n,h;
if(g.nType==0)
{
l=[f];
}
else{
var o=S(m._msPid+"_s_"+b,m._moDoc);
if(a)
{
if(f.istool)
{
for(var p=0;p<m._moRightIndex.length;p++)
{
n=m._moRightIndex[p];
h=k.getAddress(n,true)||m._moCustomAddrs[n];
m._showRightItem(h,0);
m._moPosition[h.email]=0;
m._moTreeView.showItem(n,true);
}
m._moTreeView.showItem(b,false);
m._showRightItem(f,1);
m._moPosition[f.email]=1;
m._moRightIndex=[b];
}
else if(!m._moPosition[f.email])
{
n=m._moRightIndex[0];
if(n&&k.getAddress(n,true).istool)
{
return;
}
m._moTreeView.showItem(b,false);
if(o)
{
if(!m._moCustomAddrs[f.id])
{
show(m._msPid+'noaddress',!--m._mnSearchCount,m._moDoc);
}
show(o,0);
}
m._moPosition[f.email]=1;
m._moRightIndex.push(b);
m._showRightItem(f,1);
}
}
else{
if(m._moPosition[f.email]==1)
{
m._moTreeView.showItem(b,true);
if(o)
{
if(!m._moCustomAddrs[f.id])
{
show(m._msPid+'noaddress',!++m._mnSearchCount,m._moDoc);
}
show(o,1);
}
m._moPosition[f.email]=0;
m._showRightItem(f,0);
for(var c=0,e=m._moRightIndex.length;c<e;c++)
{
if(m._moRightIndex[c]==b)
{
m._moRightIndex.splice(c,1);
break;
}
}
}
}
for(var c=0,e=m._moRightIndex.length;c<e;c++)
{
var d=m._moRightIndex[c],j=k.getAddress(d,true)||m._moCustomAddrs[d];
l.push(j);
}
}
callBack.call(m,g.onselect,[l]);
},_showRightItem:function(b,a){
var c=this,d=[c._msPid,'r',b.id].join('_');
if(a)
{
insertHTML(c._moConfig.oContainerRight,'beforeEnd',QMLinkman._TEMPLATE._right_item.replace(extend({rid:d},b)));
}
else{
removeSelf(S(d,c._moDoc));
}
},show:function(a){
var b=this;
if(typeof a=="string")
{
b._moConfig.oContainer.innerHTML=a;
}
else{
b._moData=a;
b._mnTime=now();
b._show();
}
},getAddress:function(){
var f=this,e=[],d=getTop().QMAddress,a;
for(var b=0,c=f._moRightIndex.length;b<c;b++)
{
a=f._moRightIndex[b];
e.push(d.getAddress(a,true)||f._moCustomAddrs[a]);
}
return e;
},resizeAddr:function(a){
var j=this,k=getTop(),c=k.document.location.href.indexOf('from_wm_newwin')>-1,b=!c&&k.document.location.href.indexOf('t=newwin_frame')>-1,g=j._moConfig.oContainer,f=g&&k.calcPos(g,'json').top,h=k.finds('.lm_panel',g)&&k.finds('.lm_panel',g)[0],d=h&&k.calcPos(h,'json').top;
if(g.getAttribute('id')!='quickaddr_div')
{
return false;
}
if(!h||!d)
{
return false;
}
if(a==undefined)
{
a=f+g.clientHeight;
return;
}
if(a>0)
{
var e=a-f,i=k.S('rightAreaBtnWarp',k.getDomWin(g));
g.style.height=e+'px';
h.style.height=(a-d)+'px';
i&&(i.style.height=Math.max(e-200,0)+'px');
}
}};
QMLinkman._TEMPLATE={_title:T('<div class="settingtable qqshowbd" style="padding:4px 0 3px 8px;cursor:default;">'+'<a class="lm_rt" fun="$fun$">$name$</a>$other$$title$</div>'),_caption:TE(['<div class="$cac$" onmouseover="this.style.background=\'#FFF6DF\'" onmouseout="this.style.background=\'#fff\'" style="padding:2px 0 1px;overflow:hidden;height:100%;">','<div style="overflow:hidden;width:100%">','$other$','<div title="$@$eval htmlEncode($name$)$@$" class="lm_ca">','<a nocheck="true"><input type="button" class="lm_ico"/>$@$eval htmlEncode($name$)$@$</a>','</div>','</div>','</div>']),_groupRightItem:T('<a class="lm_rt" fun="$fun$" title="$title$">$name$</a>'),_plane:TE(['<div class="lm_sbar">','<input type="button" id="$pid$cancel" class="lm_sopen"/>','<div>','<input id="$pid$searchtext" type="text" class="txt" value="\u67E5\u627E\u8054\u7CFB\u4EBA..." autocomplete="off"/>','</div>','</div>','<div class="lm_panel">','$@$if($fromaddr$)$@$','<div class="groupopen"><div class="settingtable qqshowbd" style="padding:4px 0 3px 8px;cursor:default;">\u539F\u90AE\u4EF6\u7684\u53D1\u4EF6\u4EBA</div></div>','<a nocheck="true" title="$fromaddr$" class="lm_addr " style="margin: 5px 0;" id="orgsender">$fromname$</a>','$@$endif$@$','<div id="$pid$tree" ></div>','<div id="$pid$search"  style="display:none;"></div>','</div>']),_hint:TE(['<ul class="addr_associate">','<li class="fn" style="padding:4px 0 4px 8px; margin:0; height:15px; line-height:15px;" >\u60A8\u662F\u5426\u8FD8\u8981\u627E...</li>','</ul>','<div class="groupsub">','$@$for($_this_$)$@$','<div class="groupclose" key="$oAddress.id$" sub="0">','<a unselectable="on" nocheck="true" onmousedown="return false;" title="$oAddress.email$" class="lm_addr">','$oAddress.name$','</a>','</div>','$@$endfor$@$','</div>']),_left_item:TE(['<a unselectable="on" nocheck="true" onmousedown="return false;" title="$title$" class="lm_addr">','$beforeImage$$name$$@$if($memo$)$@$($memo$)$@$endif$@$','</a>']),_right_item:T(['<a id="$rid$" title="$email$" nocheck="true" class="lm_addr lm_raddr">','<input type="button" class="mov"/>','<div style="overflow:hidden;height:100%;*float:right;">','<div style="overflow:hidden;width:100%;">$name$</div>','</div>','</a>']),_research_item:TE(['<a nocheck="true" id="$pid$_s_$id$" title="$title$" style="display:$disp$" class="lm_saddr" onclick="return false">','<div class="lm_name">$name$$@$if($memo$)$@$($memo$)$@$endif$@$</div>','<div class="lm_email">$email$</div>','</a>']),_domainMailGroupAccountIcon:T(['<img class="lm_groupAutoIcon" src="',getPath("image"),'spacer.gif" title="','\u90AE\u4EF6\u7EC4\u5E10\u53F7','"/>']),_virtualGroupAccountIcon:T(['<img class="lm_groupUnfold" src="',getPath("image"),'spacer.gif" title="','\u7FA4\u7EC4\u5E10\u53F7','"/>']),_addrIcon:T('<span class="$icon$"></span>'),_nobody:TE(['<div style="margin:4px 0 6px 17px;color:#797979">','$@$if($locale$=="zh_CN")$@$','\u6682\u65E0$message$','$@$else$@$','\u6682\u65E0','$@$endif$@$','</div>']),_search_nobody:T('<div id="$pid$noaddress" style="padding:5px;display:$disp$">\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u8054\u7CFB\u4EBA\u3002</div>'),_search_stranger:T('<div id="$pid$stranger" style="padding:5px;display:$disp$">\u662F\u5426\u6DFB\u52A0</div>'),"":null};
QMLinkman.showDlg=function(c,a,b){
b=b||{};
var g=getTop(),f=a&&!a.get&&a.value!=""&&window.QMAddrParser?QMAddrParser.parseAddr(a.value):[],d=a&&a.get?a.get("json"):f,e=null;
new QMDialog({sId:"add_address",sTitle:"\u4ECE\u8054\u7CFB\u4EBA\u4E2D\u6DFB\u52A0",sBodyHtml:T(['<div class="lm_dlg" style="background:none;">','<div style="text-align:left; padding:0 0 6px 0;height:$height$px;">','<div id="loading" style="text-align:center;line-height:350px">\u52A0\u8F7D\u4E2D...</div>','<table id="content" width="93%" border="0" align="center" cellpadding="0" cellspacing="0" style="table-layout:fixed;display:none;">','<tr>','<td width="190" style="font-size:14px;font-weight:bold;padding:12px 0 3px 0;">\u8054\u7CFB\u4EBA<span id="totleNum"></span></td>','<td width="20">&nbsp;</td>','<td width="190" style="font-size:14px;font-weight:bold;padding:12px 0 3px 0;"><span id="text_name">$who$</span><span id="selectNum"></span>&nbsp;</td>','</tr>','<tr>','<td><div class="bd_upload lm_cnt" id="left"></div></td>','<td align="center"><img src="/zh_CN/htmledition/images/arrow_left.gif"/></td>','<td><div id="right" class="bd_upload lm_cnt" style="overflow-y:auto;"></div></td>','</tr>','</table>','</div>','</div>']).replace({who:{"to":"\u6536\u4EF6\u4EBA","cc":"\u6284\u9001","bcc":"\u5BC6\u9001","sc":"\u5206\u522B\u53D1\u9001","sms":"\u63A5\u6536\u4EBA","member":"\u6210\u5458"}[c],height:"auto"}),sFootHtml:T(['<input type="button" class="btn wd2" id="ok" value="\u786E\u5B9A"/>','<input type="button" class="btn wd2" id="cancel" value="\u53D6\u6D88" />']).toString(),nWidth:b.sDlgWidth||480,bClose:true,onshow:function(){
var h=this;
waitFor(function(){
return g.QMAddress&&g.QMAddress.isInit();
},function(i){
if(i)
{
e=new QMLinkman({nType:1,bSupportGroup:b.bSupportGroup,oMainGroup:b.oMainGroup||["mailgroup","ggroup","domaingroup","qqgroup"],oContainer:h.S("left"),oContainerRight:h.S("right"),oExitAddress:b.oExitAddress||d,onselect:function(j){
h.S("selectNum").innerHTML=j.length?['(',j.length,')'].join(""):'';
},onfilteraddr:b.onfilteraddr});
h.S("totleNum").innerHTML="("+g.QMAddress.countAddress()+")";
h.S("selectNum").innerHTML=d.length?['(',d.length,')'].join(""):'';
show(h.S("loading"),false);
show(h.S("content"),true);
}
});
},onload:function(){
var h=this;
addEvent(h.S("ok"),"click",function(){
if(e)
{
var i=e.getAddress();
callBack.call(this,b.onselect,[i]);
QMLinkman.addAddrEx(i,0,a);
}
h.close();
});
addEvent(h.S("cancel"),"click",function(){
h.close();
});
}});
return true;
};
QMLinkman.addAddrEx=function(c,a,b,d){
var o=getTop(),n=T('"$nick$"<$addr$>; '),e,j,l;
if(c&&b)
{
!a&&(b.clear?b.clear():b.value="");
e=b.add?function(p,q){
b.add(p,false,q);
}:function(p){
b.value+=p;
};
for(var f=0,g=c.length;f<g;f++)
{
j=c[f];
if(j.nShortcutGroupId)
{
l=[];
var m=o.QMAddress.getGroup(j.nShortcutGroupId);
for(var k=m.addressesId,h=0,i=k.length;h<i;h++)
{
l.push(o.QMAddress.getAddress(k[h]));
}
}
else{
l=[j];
}
for(var h=0,i=l.length;h<i;h++)
{
e(n.replace({nick:encodeNick(htmlDecode(l[h].name)),addr:l[h].email}),l[h].name);
}
}
if(!d)
{
b.focus("end");
}
}
};
