var _gnQmToolStart=new Date().getTime();
var _goClass,_goStatic;
var qmAnimation=function(a){
this._mTimerId=null;
this._mOptList=[];
this._mDefOpts={};
this._setOptions(a,true);
};
_goStatic=qmAnimation;
_goClass=_goStatic.prototype;
_goClass.play=function(a){
if(typeof a=="function")
{
if(this._mTimerId)
{
this._mOptList.push(a);
}
else{
this._play(a(),true);
}
}
else{
this.stop();
this._play(a);
}
};
_goClass.stop=function(){
var b=this;
var a=this._mOptList;
this._mOptList=[];
this._stop();
E(a,function(c){
var d=c();
if(d)
{
b._setOptions(d);
if(typeof (b._mOnComplete)=="function")
{
b._mOnComplete.call(b,b._mTo,true);
}
}
});
};
_goClass.updateStyle=function(c,a,b){
var d=this._moBakStyle||(this._moBakStyle={}),e=a.style;
if(b)
{
d[c]=e.cssText;
for(var f in b)
{
e[f]=b[f];
}
}
else{
e.cssText=d[c];
}
};
_goClass._action=function(a){
var b=true,c=now();
if(a||(c>this._mEndTime)||!this._mOffset)
{
this._mDomWindow.clearInterval(this._mTimerId);
this._mEndTime=0;
this._mTimerId=null;
if(typeof (this._mOnComplete)=="function")
{
this._mOnComplete.call(this,this._mCompleteTo,a);
}
if(this._mOptList.length>0)
{
this._play(this._mOptList.shift()(),true);
}
b=false;
}
else{
var d=c-this._mStartTime;
if(typeof (this._mOnAction)=="function")
{
this._mOnAction.call(this,this._mTween(d,this._mFrom,this._mOffset,this._mDuration),d/this._mDuration);
}
}
return b;
};
_goClass._play=function(b,a){
if(a&&!b)
{
if(this._mOptList.length>0)
{
this._play(this._mOptList.shift()(),true);
}
return;
}
this._setOptions(b);
this._mStartTime=now();
this._mEndTime=this._mStartTime+this._mDuration;
if(this._action())
{
var c=this;
this._mTimerId=this._mDomWindow.setInterval(function(){
c._action();
},this._mnInterval);
}
};
_goClass._setOptions=function(b,a){
if(b)
{
var d=this._mDefOpts;
var e=a?d:this;
var c=this.constructor;
e._mDomWindow=b.win||d._mDomWindow||window;
e._mFrom=typeof (b.from)=="number"?b.from:d._mFrom;
e._mTo=typeof (b.to)=="number"?b.to:d._mTo;
e._mCompleteTo=typeof (b.completeto)=="number"?b.completeto:e._mTo;
e._mOffset=e._mTo-e._mFrom;
e._mDuration={fast:200,slow:600}[b.speed]||b.speed||d._mDuration;
var f=c._TWEEN[b.tween]||d._mTween||c._TWEEN.Linear;
e._mTween=typeof (f)=="function"?f:(f[b.easing]||f.easeIn);
e._mOnAction=b.onaction||d._mOnAction;
e._mOnComplete=b.oncomplete||d._mOnComplete;
e._mnInterval=b.interval||d._mnInterval||13;
}
};
_goClass._stop=function(){
if(!this._mTimerId)
{
return false;
}
return this._action(true);
};
_goStatic.play=function(b,a){
var o=this,l=o._CONST,j=l._DEF_RUN_CFG,r=now()+Math.random(),k=extend({},j,a),m,p,h,g;
try{
m=b.ownerDocument;
p=m.defaultView||m.parentWindow;
h=p[l._CACHE_ID];
}
catch(n)
{
return b;
}
try{
var o=this,l=o._CONST,j=l._DEF_RUN_CFG,r=now()+Math.random(),k=extend({},j,a),m=b.ownerDocument,p=m.defaultView||m.parentWindow,h=p[l._CACHE_ID],g;
}
catch(v)
{
callBack.call(b,a.oncomplete,[a.to,false,false]);
return b;
}
if(!h)
{
h=p[l._CACHE_ID]={};
}
function t(w,e)
{
b.setAttribute(l._PLAY_ATT,w+"|"+e);
}
function c(e)
{
return (b.getAttribute(l._PLAY_ATT)||"").split("|")[0];
}
function u(e)
{
b.setAttribute(l._WAIT_ATT,e);
}
function d()
{
return b.getAttribute(l._WAIT_ATT)||"";
}
function q(w,e)
{
var y=h[w],z=y[l._STATIC_PLAY_ID],A;
t(w,z.actiontype);
if(typeof z.onready=="function")
{
A=z.onready.call(b,e);
}
if(e||A==false)
{
var x=A&&A.to;
z.oncomplete(typeof x=="number"?x:z.to,e,A==false);
}
else{
if(A)
{
A.onaction=A.oncomplete=null;
}
y.play(A||{});
}
}
k.onaction=function(w,e){
a.onaction.call(b,w,e);
};
k.oncomplete=function(x,e,w){
t("",a.actiontype);
delete h[r];
a.oncomplete&&a.oncomplete.call(b,x,e,w);
var y=d().split("|"),z=y.shift();
if(z)
{
u(y.join("|"));
if(y.length==0)
{
q(z);
}
else{
q(z,e);
}
}
};
k.win=p;
g=h[r]=new o(k);
g[l._STATIC_PLAY_ID]=k;
if(c())
{
var s=d();
u(s+(s?"|":"")+r);
if(k.type!="wait")
{
var f=h[c()];
f&&f.stop();
}
}
else{
q(r);
}
return b;
};
_goStatic.stop=function(a){
var f=this,c=f._CONST,d,g,b,h;
try{
d=a&&a.ownerDocument;
g=d.defaultView||d.parentWindow;
b=g[c._CACHE_ID];
h=(a.getAttribute(c._PLAY_ATT)||"").split("|")[0];
if(h)
{
a.setAttribute(c._WAIT_ATT,"");
b[h].stop();
}
}
catch(e)
{
}
return a;
};
_goStatic.isPlaying=function(a){
return !!a.getAttribute(this._CONST._PLAY_ATT);
};
_goStatic.getActionType=function(a){
return (a.getAttribute(this._CONST._PLAY_ATT)||"").split("|").pop();
};
_goStatic._expandOrFold=function(b,c,a){
var l=gbIsIE?1:0,n=a||{},q=n.speed,k=n.from,m=n.to,j=n.durlimit||0,h=n.basespeed||1.8,o=n.unilimit,e=typeof q=="undefined"||q=="uniform",d=false,p;
function f()
{
var s=arguments,r=n["on"+s[0]];
if(typeof r=="function")
{
return r.call(s[1],s[2]);
}
}
function g(r)
{
return r.scrollHeight-(gbIsIE?0:parseInt(getStyle(r,"paddingTop"))+parseInt(getStyle(r,"paddingBottom")));
}
return qmAnimation.play(b,extend({},n,{actiontype:c,speed:e?"fast":q,to:l,onready:function(r){
if(!r)
{
var C=this.style,w,y,x,A;
d=false;
A=f("ready",this)||{};
x=A.speed;
w=typeof A.from=="number"?A.from:k;
y=typeof A.to=="number"?A.to:m;
if(c=="expand")
{
if(typeof w!="number"||isNaN(w))
{
var v=parseInt(C.height);
if(isNaN(v))
{
w=C.height=l;
}
else{
w=v;
}
}
else{
C.height=w;
}
}
else{
if(typeof y!="number"||isNaN(y)||y<l)
{
y=l;
}
}
p=C.overflow;
C.overflow="hidden";
C.visibility="visible";
if(C.display=="none")
{
C.display="";
}
if(gbIsIE)
{
var z=this.scrollHeight;
}
if(c=="expand")
{
if(typeof y!="number"||isNaN(y))
{
y=g(this);
d=true;
}
}
else{
if(typeof w!="number"||isNaN(w))
{
var v=parseInt(C.height);
w=isNaN(v)?g(this):v;
}
}
var u=y-w,t=y;
if(j>0&&Math.abs(u)>j)
{
if(u>0)
{
y=w+j;
}
else{
w=y+j;
}
}
if(!x)
{
if(e)
{
var s=Math.abs(w-y),B=A.unilimit||o;
x=(A.basespeed||h)*(B?Math.min(Math.max(s,B[0]),B[1]):s);
}
else{
x=q;
}
}
return y==w?false:{from:Math.max(w,l),to:Math.max(y,l),completeto:t,speed:x};
}
},onaction:function(s,r){
this.style.height=s+"px";
f("action",this,r);
},oncomplete:function(t,r,s){
if(!r)
{
if(t==l)
{
show(this,false);
}
this.style.height=d?"auto":(t+"px");
this.style.overflow=p;
f("complete",this,t,s);
}
}}));
};
_goStatic.expand=function(b,a){
return this._expandOrFold(b,"expand",a);
};
_goStatic.fold=function(b,a){
return this._expandOrFold(b,"fold",a);
};
_goStatic.moveVerti=function(b,c,a){
var k=gbIsIE?1:0,m=a||{},o=m.speed,h=m.from,l=m.to,g=m.durlimit||0,f=m.basespeed||1.8,j=m.interval||13,n=m.unilimit,d=typeof o=="undefined"||o=="uniform";
function e()
{
var q=arguments,p=m["on"+q[0]];
if(typeof p=="function")
{
return p.call(q[1],q[2]);
}
}
return qmAnimation.play(b,extend({},m,{actiontype:c,speed:d?"fast":o,to:k,interval:j,onready:function(p){
if(!p)
{
e("ready",this);
return l==h?false:{from:h,to:l,completeto:l,speed:o};
}
},onaction:function(q,p){
this.style.top=q+"px";
e("action",this,p);
},oncomplete:function(r,p,q){
if(!p)
{
this.style.top=r+"px";
e("complete",this,r,q);
}
}}));
};
_goStatic.moveHor=function(b,c,a){
var j=gbIsIE?1:0,l=a||{},n=l.speed,h=l.from,k=l.to,g=l.durlimit||0,f=l.basespeed||1.8,m=l.unilimit,d=typeof n=="undefined"||n=="uniform";
function e()
{
var p=arguments,o=l["on"+p[0]];
if(typeof o=="function")
{
return o.call(p[1],p[2]);
}
}
return qmAnimation.play(b,extend({},l,{actiontype:c,speed:d?"fast":n,to:j,onready:function(o){
if(!o)
{
e("ready",this);
return k==h?false:{from:h,to:k,completeto:k,speed:n};
}
},onaction:function(p,o){
this.style.left=p+"px";
e("action",this,o);
},oncomplete:function(q,o,p){
if(!o)
{
this.style.left=q+"px";
e("complete",this,q,p);
}
}}));
};
_goStatic._CONST={_CACHE_ID:"QMaNiMatiON_CachE",_STATIC_PLAY_ID:"sTatiC_Play_Conf",_PLAY_ATT:"QMaNiMatiON_PlaY",_WAIT_ATT:"QMaNiMatiON_WaiT",_DEF_RUN_CFG:{from:1,to:100,speed:"fast"}};
_goStatic._TWEEN={Linear:function(g,a,e,f){
return e*g/f+a;
},Sine:{easeIn:function(g,a,e,f){
return -e*Math.cos(g/f*(Math.PI/2))+e+a;
},easeOut:function(g,a,e,f){
return e*Math.sin(g/f*(Math.PI/2))+a;
},easeInOut:function(g,a,e,f){
return -e/2*(Math.cos(Math.PI*g/f)-1)+a;
}},Cubic:{easeIn:function(g,a,e,f){
return e*(g/=f)*g*g+a;
},easeOut:function(g,a,e,f){
return e*((g=g/f-1)*g*g+1)+a;
},easeInOut:function(g,a,e,f){
if((g/=f/2)<1)
{
return e/2*g*g*g+a;
}
return e/2*((g-=2)*g*g+2)+a;
}},none:false};
var qmTab=function(a){
this._initElements(a);
this._setElementsEvent();
};
_goStatic=qmTab;
_goClass=_goStatic.prototype;
_goClass.change=function(a){
var l=this._mTabInfo,h=this._mState,e=h._curTabId,k=l[a];
if(!k||!k._enabled)
{
return false;
}
if(e==a)
{
return true;
}
if(e)
{
var d=l[e]._container;
var b=k._container;
setClass(l[e]._obj,this._mStyle.normal);
if(this._mAnimation)
{
this._mAnimation.stop();
function f(m)
{
var n=m/100;
setOpacity(d,n);
setOpacity(b,1-n);
}
var j={display:"",position:"absolute",width:getStyle(d,"width"),height:getStyle(d,"height"),zIndex:1};
this._mAnimation.updateStyle("pre",d,j);
this._mAnimation.updateStyle("cur",b,(j.zIndex=2)&&j);
var g=[];
var c=this._mCallBack._onchangeend;
this._mAnimation.play({onaction:function(n,m){
f(n);
},oncomplete:function(n,m){
f(n);
this.updateStyle("pre",d);
this.updateStyle("cur",b);
show(d,false);
show(b,true);
if(typeof (c)=="function")
c(a,e);
}});
}
else{
show(d,false);
show(b,true);
}
}
else{
show(k._container,true);
}
setClass(k._obj,this._mStyle.select);
h._curTabId=a;
if(typeof (this._mCallBack._onchange)=="function")
this._mCallBack._onchange(a,e);
return true;
};
_goClass.enable=function(b,a){
var c=this._mTabInfo[b];
if(!c)
{
return false;
}
setClass(c._obj,this._mStyle[(c._enabled=a||typeof (a)=="undefined"?true:false)?"normal":"disable"]);
return true;
};
_goClass.getSelectedTabId=function(){
return this._mState._curTabId;
};
_goClass._initElements=function(a){
var b=this._mTabInfo={};
for(var c in a.tab)
b[c]={_id:c,_obj:a.tab[c].obj,_container:a.tab[c].container,_enabled:true};
this._mStyle=a.style;
this._mCallBack={_onchange:a.onchange,_onchangeend:a.onchangeend};
this._mState={_curTabId:null};
if(a.isEnableAnimation!=false)
{
this._mAnimation=new qmAnimation({win:a.win,from:100,to:0,speed:400,tween:"Sine",easing:"easeOut"});
}
};
_goClass._setElementsEvent=function(){
var a=this;
var b=this._mTabInfo;
for(var c in b)
{
(function(){
var d=b[c];
show(d._container,false);
d._obj.onclick=function(){
a.change(d._id);
};
d._obj.onmouseover=function(e){
if(d._enabled&&a._mState._curTabId!=d._id)
setClass(d._obj,a._mStyle.over);
};
d._obj.onmouseout=function(f){
try{
if(d._enabled&&a._mState._curTabId!=d._id&&!isObjContainTarget(d._obj,f.relatedTarget||f.toElement))
setClass(d._obj,a._mStyle.normal);
}
catch(g)
{
}
};
})();
}
};
var qmSimpleThumb=function(a){
this._initElements(a);
this._setElementsEvent();
};
_goStatic=qmSimpleThumb;
_goClass=_goStatic.prototype;
_goClass.enable=function(){
var a=this._mState;
if(a._enabled==true)
{
return;
}
a._enabled=true;
if(a._curPage==-1)
{
return this.goPage(1);
}
this._romanceState();
};
_goClass.disable=function(){
var a=this._mState;
if(a._enabled==false)
{
return;
}
a._enabled=false;
this._romanceState();
};
_goClass.getDataLength=function(){
return this._mData.length;
};
_goClass.getId=function(){
return this._mId;
};
_goClass.getSelectedData=function(){
var a=this._mState._curSelIdx;
return a<0?null:this._mData[a];
};
_goClass.goPage=function(a){
var c=this._mState,b=c._curPage;
if(c._enabled&&a>=1&&a<=c._totalPage)
{
c._curPage=a;
this._romanceState();
if(this._romanceCurPage())
this._romanceSelectState();
this._scrollToPage();
callBack.call(this,this._mCallBack._onchangepage,[a,b]);
return true;
}
return false;
};
_goClass.select=function(a){
var b=this._mData,c=this._mState;
a=parseInt(a);
if(a<0)
{
}
else if(isNaN(a)||((a=a%b.length)==c._curSelIdx))
{
this._mCallBack._onselect.call(this,a,c._preSelIdx);
return false;
}
c._preSelIdx=c._curSelIdx;
c._curSelIdx=a;
this._romanceSelectState();
if(typeof (this._mCallBack._onselect)=="function")
{
this._mCallBack._onselect.call(this,a,c._preSelIdx);
}
return true;
};
_goClass.onmouseover=function(a){
if(typeof (this._mCallBack._onmouseover)=="function")
{
this._mCallBack._onmouseover.call(this,a);
}
return true;
},_goClass.onmouseout=function(a){
if(typeof (this._mCallBack._onmouseout)=="function")
{
this._mCallBack._onmouseout.call(this,a);
}
return true;
},_goClass.setExternInfo=function(a,b){
var d=parseInt(a),h=this._mData,e=this._mConfig._numperpage,g=h.length-1;
if(!isNaN(d)&&d>=0&&d<=g)
{
var f=Math.floor((g-d)/e),c=g-d-f*e,j=this._mDom._pageContainers[f].firstChild.childNodes;
if(c<0||c>=j.length)
{
return;
}
j[c].lastChild.innerHTML=b;
}
};
_goClass.update=function(a){
this._updateData(a);
this._romanceContainer();
this.goPage(this._mState._curPage=Math.min(this._mState._curPage,this._mState._totalPage));
};
_goClass._getContainerCode=function(){
var b=[];
var e=qmSimpleThumb._TEMPLATE._CONTAINER;
var d=this._mState;
var a=this._mStyle.thumb.container;
for(var f=0,c=Math.max(d._totalPage,1);f<c;f++)
b.push(e.replace({border:a}));
return qmSimpleThumb._TEMPLATE._FRAME.replace({container:b.join("")});
};
_goClass._getMsgCode=function(b,a){
return qmSimpleThumb._TEMPLATE._MSG.replace({images_path:getPath("image"),msg:b,dispload:a?"":"none"});
};
_goClass._getThumbCode=function(a){
var d=this._mData;
var n=d.length;
if(n==0)
{
return this._getMsgCode("\u6682\u65E0\u6570\u636E");
}
var h=this._mConfig._numperpage;
var b=a*h;
var k=b-h;
var e=b-1;
if(d[k].indexOf)
{
if(d[k].indexOf("loading")==0)
{
return this._getMsgCode(d[k].substr(7)||"\u6570\u636E\u52A0\u8F7D\u4E2D...",true);
}
else if(d[k].indexOf("custom")==0)
{
return this._getMsgCode(d[k].substr(6));
}
}
var c=[];
var m=qmSimpleThumb._TEMPLATE._THUMB;
var l=this._mStyle.thumb;
var j={img:l.img,normal:l.normal,over:l.over,images_path:this._mConfig._imgpath};
if(d[k].thumb.indexOf("http")==0)
{
j.images_path="";
}
for(var o=k,g=Math.min(n--,e+1);o<g;o++)
{
var f=n-o;
j.value=f;
j.url=d[f].thumb;
c.push(m.replace(j));
}
return c.join("");
};
_goClass._initElements=function(a){
this._mId=a.id||T("qmSimpleThumb_$date$").replace({date:now()});
this._mConfig={_imgpath:a.imgpath,_numperpage:a.numperpage||8};
this._mDom=a.dom;
this._mStyle=a.style;
this._mCallBack={_onchangepage:a.onchangepage,_onselect:a.onselect,_onmouseover:a.onmouseover,_onmouseout:a.onmouseout};
this._mState={_curPage:-1,_totalPage:0,_curSelIdx:-1,_preSelIdx:-1,_enabled:null};
var b=this._mDom.container;
this._mAnimation=new qmAnimation({win:a.win,speed:"slow",tween:"Cubic",easing:"easeOut",onaction:function(c){
b.scrollLeft=c;
},oncomplete:function(d,c){
if(!c)
b.scrollLeft=d;
}});
this.update(a.data);
this[a.enabled?"enable":"disable"]();
};
_goClass._romanceContainer=function(){
var a=this._mDom.container;
a.innerHTML=this._getContainerCode();
this._mDom._pageContainers=GelTags("td",a);
};
_goClass._romanceState=function(){
var b=this._mDom;
var d=this._mState;
var e=this._mStyle.btn;
var c=d._enabled;
var a=d._curPage;
var f=d._totalPage;
if(b.pagetxt&&c)
b.pagetxt.innerHTML=qmSimpleThumb._TEMPLATE._TEXT.replace({page:a,total:f});
if(b.prevbtn)
{
setClass(b.prevbtn,!c||a==1?e.disable:e.normal);
}
if(b.nextbtn)
{
setClass(b.nextbtn,!c||a==f?e.disable:e.normal);
}
};
_goClass._romanceCurPage=function(){
var a=this._mState._curPage;
if(a>0)
{
var b=this._mDom._pageContainers[a-1].firstChild;
if(!b.innerHTML)
{
b.innerHTML=this._getThumbCode(a);
return true;
}
}
return false;
};
_goClass._romanceSelectState=function(){
var e=this._mStyle.thumb;
var d=this._mState;
var f=this._mData.length-1;
var b=this._mConfig._numperpage;
var c=this._mDom._pageContainers;
function a(h,g)
{
if(h<0||h>f)
{
return;
}
var m=Math.floor((f-h)/b);
var j=f-h-m*b;
var k=c[m].firstChild.childNodes;
if(j<0||j>=k.length)
{
return;
}
var l=k[j];
l.setAttribute("select",g&&e.select&&e.select!=e.over&&e.select!=e.normal?"true":"false");
setClass(l,g?e.select:e.normal);
}
;a(d._curSelIdx,true);
a(d._preSelIdx,false);
};
_goClass._setElementsEvent=function(){
var b=this;
var a=this._mDom;
var c=this._mState;
addEvent(a.prevbtn,"click",function(d){
preventDefault(d);
b.goPage(c._curPage-1);
});
addEvent(a.nextbtn,"click",function(d){
preventDefault(d);
b.goPage(c._curPage+1);
});
addEvent(a.container,"drag",preventDefault);
addEvent(a.container,"click",function(d){
preventDefault(d);
var f=d.srcElement||d.target;
var e=f.getAttribute("param");
if(e)
b.select(e);
});
addEvent(a.container,"mouseover",function(d){
b.onmouseover(d);
});
addEvent(a.container,"mouseout",function(d){
b.onmouseout(d);
});
};
_goClass._scrollToPage=function(){
var b=this._mState._curPage;
if(b>0)
{
var a=this._mDom.container;
var c=this._mDom._pageContainers[b-1];
this._mAnimation.stop();
this._mAnimation.play({from:a.scrollLeft,to:c.offsetLeft});
}
};
_goClass._updateData=function(a){
this._mData=a;
this._mState._totalPage=1+parseInt((this._mData.length-1)/this._mConfig._numperpage);
};
_goStatic._TEMPLATE={};
_goStatic._TEMPLATE._FRAME=T(['<table cellpadding="0" cellspacing="0" border="0">','<tr>$container$</tr>','</table>']);
_goStatic._TEMPLATE._CONTAINER=T(['<td><div class="$border$"></div></td>']);
_goStatic._TEMPLATE._THUMBBORDER=T(['<div class="$border$">$content$</div>']);
_goStatic._TEMPLATE._THUMB=T(['<div class="$normal$" un="item" param="$value$"','onmouseover="','this.getAttribute(\x27select\x27)!=\x27true\x27&&getTop().setClass(this,\x27$over$\x27);','" onmouseout="','this.getAttribute(\x27select\x27)!=\x27true\x27&&getTop().setClass(this,\x27$normal$\x27);','">','<img class="$img$" src="$images_path$$url$" param="$value$"/>','</div>']);
_goStatic._TEMPLATE._MSG=T(['<div style="text-align:center;">','<img src="$images_path$ico_loading11e9c5d.gif" style="display:$dispload$;"/>','$msg$','</div>']);
_goStatic._TEMPLATE._TEXT=T(['$page$ / $total$']);
var qmGroupThumb=function(a){
this._initElements(a);
};
_goStatic=qmGroupThumb;
_goClass=_goStatic.prototype;
_goClass.changeGroup=function(a){
this._mTab.change(a);
};
_goClass.enable=function(){
if(this._mState._enabled==true)
{
return false;
}
this._mState._enabled=true;
var a=this._mTab.getSelectedTabId();
if(a)
this._mThumbs[a].enable();
};
_goClass.disable=function(){
if(this._mState._enabled==false)
{
return false;
}
this._mState._enabled=false;
var a=this._mTab.getSelectedTabId();
if(a)
this._mThumbs[a].disable();
};
_goClass.getDataLength=function(a){
return this._mThumbs[a].getDataLength();
};
_goClass.getId=function(){
return this._mId;
};
_goClass.getSelectedData=function(){
var a=this._mState._selectedGroupId;
return !a?null:this._mThumbs[a].getSelectedData();
};
_goClass.goPage=function(a){
var b=this._mThumbs[this._mTab.getSelectedTabId()];
if(b)
b.goPage(a);
};
_goClass.select=function(b,a){
var c=this._mThumbs[a||this._mTab.getSelectedTabId()];
return c?c.select(b):false;
};
_goClass.update=function(b,a){
var c=this._mThumbs[a];
c&&c.update(b);
};
_goClass._initElements=function(a){
this._mId=a.id||T("qmSimpleThumb_$date$").replace({date:now()});
this._mCallBack={_onselect:a.onselect,_onchange:a.onchange};
this._mState={_selectedGroupId:null,_selectedThumbIdx:-1,_enabled:null};
var e=this;
var g=this._mThumbs={};
var f={};
var d=a.group;
for(var c in d)
{
var b=d[c];
f[c]=b.dom;
g[c]=new qmSimpleThumb({id:c,win:a.win,imgpath:a.imgpath,numperPage:a.numperpage||8,enabled:false,dom:{container:b.dom.container,prevbtn:a.dom.prevbtn,nextbtn:a.dom.nextbtn,pagetxt:a.dom.pagetxt},style:{thumb:a.style.thumb,btn:a.style.btn},data:b.data,onselect:function(h,j){
e._onThumbSelect(this,h,j);
}});
}
this._mTab=new qmTab({win:a.win,tab:f,style:a.style.group,onchange:function(h,j){
e._onGroupChange(h,j);
}});
this._mTab.change(a.defgroupid||c);
this[a.enabled==false?"disable":"enable"]();
};
_goClass._onGroupChange=function(a,b){
var c=this;
if(!c._mState._enabled)
{
return;
}
callBack.call(c,c._mCallBack._onchange,[a,b]);
if(b)
c._mThumbs[b].disable();
c._mThumbs[a].enable();
};
_goClass._onThumbSelect=function(c,a,b){
var g=this._mState;
var d=g._selectedGroupId;
var f=g._selectedThumbIdx;
if(a!=-1)
{
g._selectedGroupId=c.getId();
g._selectedThumbIdx=a;
var e=this._mThumbs[d];
if(a!=-1&&d!=c.getId()&&e)
e.select(-1);
}
else if(d==c.getId())
{
g._selectedThumbIdx=-1;
}
if((d!=g._selectedGroupId||f!=g._selectedThumbIdx)&&typeof (this._mCallBack._onselect)=="function")
this._mCallBack._onselect.call(this,{groupid:g._selectedGroupId,thumbidx:g._selectedThumbIdx},{groupid:d,thumbidx:f});
};
qmActivex=function(){
this._mId="qmActiveX_"+(new Date()).valueOf();
this._mActiveXObj={};
this._mCurUploadInfo=null;
};
_goStatic=qmActivex;
_goClass=_goStatic.prototype;
_goClass.screenSnap=function(a){
var c=this._getActiveXObj("screensnap");
if(!c)
{
return false;
}
try{
c._Type=(getDomain()=="foxmail.com")?1:0;
}
catch(d)
{
}
var b=function(e){
return function(){
if(typeof (a)=="function")
a(e);
};
};
c.OnCaptureFinished=b(true);
c.OnCaptureCanceled=b(false);
c.DoCapture();
return true;
};
_goClass.upload=function(a){
this.stopUpload();
this._mCurUploadInfo=a;
var b=a.config;
if(!b||!b.url)
throw {message:"qmActivex:no upload cgi url"};
b.mode=b.mode||"download";
b.from=b.from||"";
b.scale=b.scale||"";
b.widthlimit=b.widthlimit||"";
b.heightlimit=b.heightlimit||"";
return this._uploadWithActivex()?true:this._uploadWithForm();
};
_goClass.stopUpload=function(){
var a=this._mCurUploadInfo;
if(!a)
{
return;
}
this._mCurUploadInfo=null;
if(a._uploadMode=="form")
{
removeSelf(a._targetFrameObj);
}
else if(a._uploadMode=="activex")
{
if(a._percent!=90)
this._getActiveXObj("uploader").StopUpload();
}
};
_goClass.hasClipBoardImage=function(){
var a=this._getActiveXObj("screensnap");
return a?a.IsClipBoardImage:false;
};
_goClass.checkImageType=function(a,b){
var c=a.toLowerCase();
var d="gif|jpg|jpeg|bmp|png".split("|");
for(var f=d.length-1;f>=0;f--)
if(c.indexOf(d[f])!=-1)
break;
if(-1==f)
{
var e=T("\u53EA\u5141\u8BB8\u4E0A\u4F20 <b>#type#</b> \u683C\u5F0F\u7684\u56FE\u7247","#").replace({type:d});
if(b=="showerr")
showError(e);
return b=="returnerr"?e:false;
}
return true;
};
_goClass._getActiveXObj=function(a){
var b={"screensnap":0,"uploader":2}[a];
if(!detectActiveX(b,1))
{
return null;
}
if(!this._mActiveXObj[a])
this._mActiveXObj[a]=createActiveX(b);
return this._mActiveXObj[a];
};
_goClass._getScreenSnapImg=function(){
var a=this._getActiveXObj("screensnap");
return a&&a.IsClipBoardImage?a.SaveClipBoardBmpToFile(1):null;
};
_goClass._uploadWithActivex=function(){
var d=this._getActiveXObj("uploader");
if(!d)
{
return false;
}
var c=this._mCurUploadInfo;
if(c.fileCtrl&&(getTop().gnIEVer>6||!getTop().gbIsIE))
{
return false;
}
c.screenImg=this._getScreenSnapImg();
if(!c.fileCtrl&&!c.screenImg)
{
c.config.url='';
return false;
}
c._uploadMode="activex";
c._percent=0;
c.onupload.call(this,"start");
d.StopUpload();
d.ClearHeaders();
d.ClearFormItems();
var a=c.config;
if(a.url.indexOf("http")!=0)
{
d.URL=[location.protocol,"//",location.host,a.url].join("");
}
else{
d.URL=a.url;
}
var b=this;
d.OnEvent=function(f,e,g,h,j){
b._doActivexUploaderEvent(f,e,g,h,j);
};
d.AddHeader("Cookie",document.cookie);
d.AddFormItem("sid",0,0,getSid());
d.AddFormItem("mode",0,0,a.mode);
d.AddFormItem("from",0,0,c.fileCtrl?a.from:"snapscreen");
d.AddFormItem("scale",0,0,a.scale);
d.AddFormItem("widthlimit",0,0,a.widthlimit||0);
d.AddFormItem("heightlimit",0,0,a.heightlimit||0);
if(c.fileCtrl)
{
d.AddFormItemObject(c.fileCtrl);
}
else{
d.AddFormItem("UploadFile",1,4,c.screenImg);
}
d.StartUpload();
return true;
};
_goClass._uploadWithForm=function(){
var e=this._mCurUploadInfo;
if(!e.fileCtrl)
{
return false;
}
for(var b=e.fileCtrl.parentNode;b&&b.tagName!="FORM"&&b.tagName!="BODY";)
b=b.parentNode;
if(!b||b.tagName!="FORM")
{
return false;
}
e._uploadMode="form";
e.onupload.call(this,"start");
var f=e.window||window;
var c=this._mId;
f[c+"Instance"]=this;
f.qmActiveXDoUploadFinish=function(g){
var h=f[g.id+"Instance"];
if(h)
h._doFormUploaderEvent();
};
if(e._targetFrameObj)
{
_removeSelf(e._targetFrameObj);
}
createBlankIframe(f,{id:c,virtual:false,onload:d});
var a=false;
function d(g)
{
var j=this;
if(!a)
{
e._targetFrameObj=j;
var h=e.config||{};
b.action=h.url||["/cgi-bin/upload?sid=",getTop.getSid()].join("");
b.target=c;
b.sid.value=getSid();
b.mode.value=h.mode||"download";
b.scale.value=h.scale||"";
b.widthlimit.value=h.widthlimit||"";
b.heightlimit.value=h.heightlimit||"";
b.submit();
return a=true;
}
g.qmActiveXDoUploadFinish(j);
}
};
_goClass._doFormUploaderEvent=function(){
var f=this._mCurUploadInfo;
if(!f)
{
return debug("_doFormUploaderEvent: upload info not exist",null,61882714);
}
if(!f._targetFrameObj)
{
return;
}
try{
var b=f._targetFrameObj.contentWindow.document;
var a=b.body;
if(a.className==f._targetFrameObj.id)
{
return;
}
var c=[];
var d=GelTags("script",b);
for(var h=0;h<d.length;h++)
c.push(d[h].innerHTML);
this._processResponse(c.join(""));
}
catch(g)
{
debug(g.message,61882714);
this._uploadFinish(false);
}
};
_goClass._doActivexUploaderEvent=function(b,a,c,d,e){
var f=this._mCurUploadInfo;
if(!f)
{
return debug("_doActivexUploaderEvent: upload info not exist",null,61882714);
}
switch(a)
{case 1:
return this._uploadFinish(false,{errCode:c});
case 2:
f._percent=parseInt(c*90/d);
return f.onupload.call(this,"uploading",{percent:f._percent});
case 3:
var g=this._getActiveXObj("uploader");
if(g.ResponseCode!="200")
{
return this._uploadFinish(false,{errCode:c});
}
this._processResponse(g.Response);
}
};
_goClass._processResponse=function(a){
var f=a||"";
var e=f.indexOf('On_upload("');
var b=f.indexOf('");',e);
var d=(e!=-1&&b!=-1)?f.substring(e+11,b):"err";
if(d!="err")
{
d=f.substring(e+11,b).replace(new RegExp("\"","ig"),"").split(",");
return this._uploadFinish(true,{imgParam:d[0],imgwidth:d[1],imgheight:d[2]});
}
e=f.indexOf('On_upload_Fail("');
b=f.indexOf('");',e);
var c=function(g){
g=parseInt(g);
return (isNaN(g)?"5":(parseInt(100*parseInt(g)/(1024*1024))/100));
};
if(e!=-1&&b!=-1)
{
d=f.substring(e+16,b).replace(new RegExp("\"","ig"),"").split(",");
return this._uploadFinish(false,{curSize:c(d[0]),allowSize:c(d[1])});
}
return this._uploadFinish(false);
};
_goClass._uploadFinish=function(a,b){
if(!this._mCurUploadInfo)
{
return;
}
try{
this._mCurUploadInfo.onupload.call(this,a?"ok":"fail",b);
}
catch(c)
{
doPageError(c.message,this._mCurUploadInfo.window.location.href,"_uploadFinish callback");
}
this.stopUpload();
};
function qmFlash(a)
{
if(!(this._mId=a.id))
{
throw Error(0,"config.id can't use null");
}
if(!(this._mWin=a.win))
{
throw Error(0,"config.win win is null");
}
this._mFlash=a.flash;
this._moConstructor=this.constructor;
this._mEvent=a;
this._initlize();
}
_goStatic=qmFlash;
_goClass=_goStatic.prototype;
_goStatic.get=function(a,b){
var c=b[this._CONST._CACHES];
return c&&c[a];
};
_goStatic.getFlashVer=function(){
var c="";
var k=-1;
var a=-1;
var b=-1;
var h=navigator.plugins;
if(h&&h.length)
{
for(var m=0,f=h.length;m<f;m++)
{
var g=h[m];
if(g.name.indexOf('Shockwave Flash')!=-1)
{
c=g.description.split('Shockwave Flash ')[1];
k=parseFloat(c);
b=parseInt(c.split("r")[1]);
a=parseInt(c.split("b")[1]);
break;
}
}
}
else{
try{
var j=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
if(j)
{
c=j.GetVariable("$version").split(" ")[1];
var d=c.split(",");
k=parseFloat(d.join("."));
b=parseInt(d[2]);
a=parseInt(d[3]);
}
}
catch(l)
{
}
}
return {version:(isNaN(k)?-1:k)||-1,build:(isNaN(b)?-1:b)||-1,beta:(isNaN(a)?-1:a)||-1,desc:c};
};
_goStatic.isSupported=function(){
var a=this.getFlashVer();
return a.version>=10||a.version==9&&a.build>50;
};
_goStatic._CONST={_TIMEOUT:5*1000,_CACHES:"qmFlashCaches_ASDr431gGas",_CALLBACK:"onFlashEvent_ASDr431gGas"};
_goClass.getFlash=function(){
return this._mFlash||getFlash(this._mId,this._mWin);
};
_goClass.isDisabled=function(){
return this._mDisabled||false;
};
_goClass.disable=function(a){
this._mDisabled=a!=false;
return this;
};
_goClass.getLoadedPercent=function(a){
var e=this;
function b(f)
{
try{
a.call(e,f);
}
catch(g)
{
}
}
var c=this.getFlash();
if(!c)
{
return b("notfound");
}
var d=0;
(function(){
var h=arguments.callee;
if(!h._startTime)
h._startTime=getTop().now();
var g=0;
var f=false;
try{
g=c.PercentLoaded();
}
catch(j)
{
f=true;
}
if(g!=d)
b(d=g);
if(g!=100)
{
if(getTop().now()-h._startTime>qmFlash._CONST._TIMEOUT)
{
b(f?"noflash":"timeout");
}
else{
setTimeout(h,100);
}
}
})();
};
_goClass.setup=function(a){
var c=this;
function b(f,d)
{
try{
a.call(c,f,d);
}
catch(g)
{
}
}
this.getLoadedPercent(function(d){
if(d==100)
{
setTimeout(function(){
try{
if(!c.getFlash().setup(qmFlash._CONST._CALLBACK,c._mId))
{
return b(false,"setuperr");
}
}
catch(f)
{
return b(false,"nosetup");
}
b(true);
});
}
else if(typeof d!="number")
{
b(false,d);
}
});
};
_goClass._initlize=function(){
var d=this._mWin;
var c=this._moConstructor._CONST;
var a=c._CACHES;
var b=c._CALLBACK;
if(!d[a])
d[a]=new d.Object();
d[a][this._mId]=this;
if(!d[b])
{
d[b]=function(){
var h=arguments[0];
var f=arguments[1];
var g=d[a][h];
if(g&&typeof (g._mEvent[f])=="function")
{
var e=[];
for(var k=2,j=arguments.length;k<j;k++)
e.push(arguments[k]);
g._mEvent[f].apply(g,e);
}
};
}
};
var QMTimeLang={_moBaseDateValue:new Date(1970,0,5,0,0,0,0)};
_goStatic=QMTimeLang;
_goStatic.formatRefer=function(a,b){
return T('$date$ $time$').replace({date:this.formatDate(a,b),time:this.formatTime(a)});
};
_goStatic.formatDate=function(a,b){
var j=a;
var k=b||new Date();
var c=j-this._moBaseDateValue;
var g=k-this._moBaseDateValue;
var d=24*3600000;
var e=Math.floor(c/d)-Math.floor(g/d);
if(Math.abs(e)<3)
{
return T('$day$').replace({day:["\u524D\u5929","\u6628\u5929","\u4ECA\u5929","\u660E\u5929","\u540E\u5929"][e+2]});
}
var h=7*d;
var f=Math.floor(c/h)-Math.floor(g/h);
if(Math.abs(f)<2)
{
return T('$weekpos$\u5468$weekday$').replace({weekpos:["\u4E0A","\u672C","\u4E0B"][f+1],weekday:this.formatWeek(j)});
}
var l="";
if(j.getYear()==k.getYear())
{
l="%MM%-%DD%";
}
else{
l="%YY%-%MM%-%DD%";
}
return formatDateByLocale({year:j.getFullYear(),month:j.getMonth()+1,day:j.getDate(),pattern:l});
};
_goStatic.formatTime=function(a){
var b=a.getHours();
var c=a.getMinutes();
var d;
if(b<6)
{
d="\u51CC\u6668";
}
else if(b<9)
{
d="\u65E9\u4E0A";
}
else if(b<12)
{
d="\u4E0A\u5348";
}
else if(b<13)
{
d="\u4E2D\u5348";
}
else if(b<18)
{
d="\u4E0B\u5348";
}
else if(b<22)
{
d="\u665A\u4E0A";
}
else{
d="\u6DF1\u591C";
}
return T('$desc$$hour$:$min$').replace({desc:d,hour:b==12?b:b%12,min:this._format(c)});
};
_goStatic.formatWeek=function(a){
return ["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"][a.getDay()];
};
_goStatic._format=function(a){
return a<10?"0"+a:a;
};
var QMDragDrop={groups:{},setGroup:function(b,a){
var c=this;
if(!c._getGroupById(b))
{
c.groups[b]=a;
for(var d=0;d<a.length;d++)
{
a[d].setGroupId(b);
}
}
return c;
},addGroup:function(b,a){
var d=this,c;
if(!(c=d._getGroupById(b)))
{
c=[];
d.setGroup(b,c);
}
c.push(a);
a.setGroupId(b);
return d;
},delGroup:function(a){
var c=this,b;
if(b=c._getGroupById(a))
{
if(delete c.groups[a])
{
}
else{
debug('error delete dragdrop group:'+a);
}
}
return c;
},getDragFromGroup:function(a){
var d=this,c,b=[];
if(c=d._getGroupById(a))
{
if(c[i] instanceof QMDragDrop.Draggable)
{
b.push(c[i]);
}
}
return b;
},getDropFromGroup:function(a){
var d=this,c,b=[];
if(c=d._getGroupById(a))
{
for(var e=0;c&&e<c.length;e++)
{
if(c[e] instanceof QMDragDrop.DropTarget)
{
b.push(c[e]);
}
}
}
return b;
},_getGroupById:function(a){
var b=this;
for(var c in b.groups)
{
if(c==a)
{
return b.groups[c];
}
}
}};
_goStatic=QMDragDrop;
_goStatic.Draggable=function(a,c,b){
this._moElement=null;
this._moTargets=[];
this._moOptions={};
this._moCallBacks={};
this._mnDiffX=0;
this._mnDiffY=0;
this._mnState=2;
this._init(a,c,b);
};
_goStatic.Draggable.STATE={_DRAGSTART:0,_DRAG:1,_DRAGEND:2};
_goStatic.Draggable.prototype={setGroupId:function(a){
this._msId=a;
return this;
},addDropTarget:function(a){
if(a)
{
this._moTargets.push(a);
}
return this;
},moveTo:function(b,c,a,d){
var h=this,g=h._moElement,e=g.offsetLeft,f=g.offsetTop;
qmAnimation.play(g,{from:0,to:1,speed:Math.max(Math.abs(b-e),Math.abs(c-f))*0.5||10,onaction:function(j){
j=j||0;
this.style.left=e+(b-e)*j;
this.style.top=f+(c-f)*j;
},oncomplete:function(){
this.style.left=b;
this.style.top=c;
if(a)
{
a.call(h,d);
}
}});
},exchangePos:function(a){
if(a&&this._moPlaceHolderDom)
{
a.parentNode.insertBefore(this._moElement,a);
this._moPlaceHolderDom.parentNode.insertBefore(a,this._moPlaceHolderDom);
this._moElement.parentNode.insertBefore(this._moPlaceHolderDom,this._moElement);
}
},getElement:function(){
return this._moElement;
},getPlaceHolder:function(){
return this._moPlaceHolderDom;
},lock:function(a){
this._moOptions.lockx=!!a;
this._moOptions.locky=!!a;
},_init:function(a,c,b){
if(a)
{
this._moElement=a;
this._moDocument=a.ownerDocument;
this._moWindow=this._moDocument.parentWindow||this._moDocument.defaultView;
this._msPosStyle=getStyle(a,'position');
this._setOptions(c)._setEvents(b);
}
},_setOptions:function(a){
var d=this,b=d._moOptions;
b.handle=a.handle||d._moElement;
b.maxContainer=a.maxcontainer;
b.lockx=!!a.lockx;
b.locky=!!a.locky;
b.transparent=!!a.transparent;
b.placeholder=!!a.placeholder;
b.threshold=a.threshold||5;
b.holderhtml=a.holderhtml;
b.oTitle=a.oTitle;
if(b.transparent)
{
var c=calcPos(d._moElement);
var e='<div style="display:none;background:#FFF;position:absolute;opacity:0.5;filter:alpha(opacity=50);width:100%;height:100%;z-index:999;cursor:move;"></div>';
insertHTML(d._moElement,'afterBegin',e);
d._moMaskDom=d._moElement.firstChild;
d._moMaskDom.style.height=c[5]+'px';
}
return d;
},_setEvents:function(a){
var b=this;
b._moCallBacks={ondragstart:function(){
},ondrag:function(){
},ondragend:function(){
}};
extend(b._moCallBacks,a);
function c(d)
{
var f=getEventTarget(d).tagName;
if(!gbIsIE&&f=='INPUT')
{
return;
}
if(b._moOptions.lockx&&b._moOptions.locky)
{
return;
}
b._mnDiffX=d.clientX-b._moElement.offsetLeft+(parseInt(getStyle(b._moElement,'marginLeft'))||0)+bodyScroll(b._moWindow,'scrollLeft');
b._mnDiffY=d.clientY-b._moElement.offsetTop+(parseInt(getStyle(b._moElement,'marginTop'))||0)+bodyScroll(b._moWindow,'scrollTop');
if(b._moOptions.oTitle)
{
var e=gbIsIE?calcPos(b._moWindow.frameElement):[0,0,0,0];
b._mnMouseX=e[3]+d.clientX;
b._mnMouseY=e[0]+d.clientY;
}
else{
b._mnMouseX=d.clientX;
b._mnMouseY=d.clientY;
}
b._mnState=QMDragDrop.Draggable.STATE._DRAGEND;
b._move(d);
}
addEvent(b._moOptions.handle,'mousedown',c);
return b;
},_move:function(a){
var e=this,d=e._moOptions,b=QMDragDrop.DataTransfer;
if(!d.oTitle)
{
preventDefault(a);
}
if(!e._onmousemove||!e._onmouseup)
{
e._onmousemove=function(f){
if(gbIsIE&&d.oTitle)
{
}
else{
e._moWindow.getSelection?e._moWindow.getSelection().removeAllRanges():e._moDocument.selection.empty();
}
if(e._mnState==QMDragDrop.Draggable.STATE._DRAGEND&&d.threshold)
{
var g=Math.abs(e._mnMouseX-f.clientX),h=Math.abs(e._mnMouseY-f.clientY);
if(g>d.threshold||h>d.threshold)
{
callBack.call(e,e._moCallBacks['ondragstart'],[f]);
e._mnState=QMDragDrop.Draggable.STATE._DRAGSTART;
e._changeStyle();
if(!d.oTitle)
{
e._moElement.style.left=e._mnMouseX-e._mnDiffX+bodyScroll(e._moWindow,'scrollLeft');
e._moElement.style.top=e._mnMouseY-e._mnDiffY+bodyScroll(e._moWindow,'scrollTop');
}
}
return;
}
var j=f.clientX-e._mnDiffX+bodyScroll(e._moWindow,'scrollLeft'),k=f.clientY-e._mnDiffY+bodyScroll(e._moWindow,'scrollTop');
if(d.oTitle)
{
}
else{
if(!d.lockx)
{
e._moElement.style.left=j+'px';
}
if(!d.locky)
{
e._moElement.style.top=k+'px';
}
}
if(d.maxContainer)
{
var l=calcPos(d.maxContainer),m=calcPos(e._moElement);
if(m[1]>l[1])
{
e._moElement.style.left=j+l[1]-m[1]+'px';
}
else if(m[3]<l[3])
{
e._moElement.style.left=j+l[3]-m[3]+'px';
}
if(m[2]>l[2])
{
e._moElement.style.top=k+l[2]-m[2]+'px';
}
else if(m[0]<l[0])
{
e._moElement.style.top=k+l[0]-m[0]+'px';
}
}
e._mnState=QMDragDrop.Draggable.STATE._DRAG;
callBack.call(e,e._moCallBacks['ondrag'],[f]);
var n=new b(b.TYPE.DOWN,e,f.clientX,f.clientY,f);
e._broadcast(n);
};
e._onmouseup=function(f){
if(e._mnState==QMDragDrop.Draggable.STATE._DRAGEND)
{
e._stop();
return;
}
e._stop();
var g=new b(b.TYPE.UP,e,f.clientX,f.clientY,f);
e._broadcast(g);
e._mnState=QMDragDrop.Draggable.STATE._DRAGEND;
callBack.call(e,e._moCallBacks['ondragend'],[f]);
e._changeStyle();
};
}
if(gbIsIE&&e._moElement.setCapture)
{
var c=d.oTitle||e._moElement;
c.setCapture(true);
addEvents(c,{mousemove:e._onmousemove,mouseup:e._onmouseup,losecapture:e._onmouseup});
}
else{
addEvents(e._moDocument,{mousemove:e._onmousemove,mouseup:e._onmouseup});
e._moWindow.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
addEvent(e._moWindow,'blur',e._onmouseup);
}
return e;
},_stop:function(){
var c=this;
var b=c._moOptions,a=b.oTitle||c._moElement;
if(gbIsIE&&a.releaseCapture)
{
addEvents(a,{mousemove:c._onmousemove,mouseup:c._onmouseup,losecapture:c._onmouseup},true);
a.releaseCapture();
}
else{
addEvents(c._moDocument,{mousemove:c._onmousemove,mouseup:c._onmouseup},true);
c._moWindow.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
removeEvent(c._moWindow,'blur',c._onmouseup);
}
return c;
},_setPlaceHolder:function(a){
var d=this;
if(a)
{
var b=d._moElement.cloneNode(true),c=calcPos(d._moElement);
b.style.position='static';
b.style.width=c[4]+'px';
b.style.height=c[5]+'px';
if(d._moOptions.holderhtml)
{
b.innerHTML=d._moOptions.holderhtml;
}
b.removeAttribute('id');
b.removeAttribute('name');
d._moElement.parentNode.insertBefore(b,d._moElement);
d._moPlaceHolderDom=b;
}
else{
if(d._moPlaceHolderDom)
{
d._moElement.parentNode.removeChild(d._moPlaceHolderDom);
d._moPlaceHolderDom=null;
}
d._moElement.style.position=d._msPosStyle;
}
},_changeStyle:function(){
var f=this,d=f._moOptions,a=f._mnState==QMDragDrop.Draggable.STATE._DRAGEND;
if(d.oTitle)
{
return;
}
f._moElement.style.position=a?'absolute':'absolute';
if(d.transparent)
{
show(f._moMaskDom,!a);
}
if(d.placeholder)
{
var e=f._moPlaceHolderDom,b=e&&e.offsetLeft,c=e&&e.offsetTop;
!a&&f._setPlaceHolder(true);
a&&f.moveTo(b,c,f._setPlaceHolder,false);
}
return f;
},_broadcast:function(a){
var c=this,b=QMDragDrop.getDropFromGroup(c._msId);
for(var d=0;d<b.length;d++)
{
if(c!=b[d])
{
b[d].listen(a);
}
}
return c;
}};
_goStatic.DropTarget=function(c,b,a){
this._moElement=null;
this._moCallBacks={};
this._moDragTarget=null;
this._mnState=-1;
this._init(c,b,a);
};
_goStatic.DropTarget.STATE={_DRAGENTER:0,_DRAGOVER:1,_DRAGLEAVE:2,_DROP:3};
_goStatic.DropTarget.prototype={setGroupId:function(a){
this._msId=a;
return this;
},getElement:function(){
return this._moElement;
},getDragTarget:function(){
return this._moDragTarget;
},listen:function(b){
var f=this,a=QMDragDrop.DropTarget.STATE;
f._moDragTarget=b.target;
var e=f._moDragTarget.getElement(),c=e.offsetLeft+e.offsetWidth/2,d=e.offsetTop+e.offsetHeight/2;
if(f.isOver(c,d,b))
{
if(b.type==QMDragDrop.DataTransfer.TYPE.DOWN)
{
f._mnState=(f._mnState==a._DRAGENTER||f._mnState==a._DRAGOVER)?a._DRAGOVER:a._DRAGENTER;
}
else{
f._mnState=a._DROP;
}
}
else{
f._mnState=a._DRAGLEAVE;
}
switch(f._mnState)
{case a._DRAGENTER:
callBack.call(f,f._moCallBacks['ondragenter'],[b]);
break;
case a._DRAGOVER:
callBack.call(f,f._moCallBacks['ondragover'],[b]);
break;
case a._DROP:
callBack.call(f,f._moCallBacks['ondrop'],[b]);
break;
case a._DRAGLEAVE:
callBack.call(f,f._moCallBacks['ondragleave'],[b]);
break;
default:
break;
}
},isOver:function(a,b){
var g=this._moElement;
var c=g.offsetLeft;
var d=c+g.offsetWidth;
var e=g.offsetTop;
var f=e+g.offsetHeight;
return (a>c&&a<d&&b>e&&b<f);
},_init:function(b,c,a){
if(b)
{
this._moElement=b;
this._moCallBacks={ondragenter:function(){
},ondragover:function(){
},ondragleave:function(){
},ondrop:function(){
}};
extend(this._moCallBacks,c);
if(a)
{
this.isOver=a;
}
}
}};
_goStatic.DataTransfer=function(a,e,b,c,d){
this.type=a;
this.target=e;
this.x=b;
this.y=c;
this.event=d;
};
_goStatic.DataTransfer.TYPE={DOWN:1,UP:2};
var QMPanel=inheritEx("QMPanel",Object,function(a){
return {$_constructor_:function(b){
if(b)
{
var c=this.constructor,d=c.get(b.sId);
d&&d.destroy();
this._genId(b);
c.$_add&&c.$_add(b.sId,this);
this._init(b);
}
},configHelp_:function(c,d,b){
for(var e in d)
{
if(b||typeof (c[e])=="undefined"||c[e]==null)
{
c[e]=d[e];
}
}
return c;
},autoAlignCenter_:function(){
var g=this,d=g._moConfig,f=g._moPanelDom,e=d.oEmbedWin||getTop(),h=e.document.body;
if(!d.nX)
{
var b=(Scale.fixBodyWidth(h.clientWidth)-f.offsetWidth)/2+bodyScroll(e,"scrollLeft")+(d.nOffsetX||0);
d.nX=b;
f.style.left=b+"px";
}
if(!d.nY)
{
var c=Math.max(2,(Scale.fixBodyHeight(h.clientHeight)-f.offsetHeight)/2+bodyScroll(e,"scrollTop")-25)+(d.nOffsetY||0);
d.nY=c;
f.style.top=c+"px";
}
},dfConfig_:function(b){
var c=b.oEmbedWin||getTop(),d=c.document.body;
this.configHelp_(b,{oEmbedWin:c,oEmbedToDom:d,sEmbedPos:"afterBegin",oCallerWin:window,nZIndex:1100,bDisplay:true,sBodyHtml:""});
},_genId:function(b){
return this._msPanelId=[b.sId||(b.sId=["__QmDefPanelId","__"].join(unikey())),this.constructor.classname].join("_");
},processHtml_:function(b){
var c=this._msPanelId;
return b.toString().replace(/ (id|for)=[\"\']?(\w+)[\"\']?/gi,[' $1="',c,'_$2"'].join(""));
},insertHtml_:function(b){
b.sPanelId=this._msPanelId;
b.sBodyHtml=this.processHtml_(b.sBodyHtml);
insertHTML(b.oEmbedToDom,b.sEmbedPos,QMPanel._TEMPLATE._SKIN.replace(b));
},initMemVar_:function(b){
this._moConfig=b;
this._msStatus="";
this._moPanelDom=S(this._msPanelId,b.oEmbedWin);
},htmlReady_:function(b){
var c=this;
c._msStatus="hide";
callBack.call(this,b.onload);
c.setEvent_();
b.bDisplay&&this.show();
},setEvent_:function(){
},panelDomCtrl_:function(b,c){
var d=this;
show(d._moPanelDom,b);
if(b)
{
d.autoAlignCenter_();
}
callBack.call(d,c);
},panelDomDestroy_:function(){
var b=this;
removeSelf(b._moPanelDom);
b._moPanelDom=null;
},panelDestroy_:function(){
var c=this,d=c._moConfig.sId,b=c.constructor;
if(b.get(d))
{
b.$_del(d);
c.panelDomDestroy_();
}
},_init:function(b){
this.dfConfig_(b);
this.insertHtml_(b);
this.initMemVar_(b);
this.htmlReady_(b);
},destroy:function(){
var b=this;
b.panelDomCtrl_(false);
b.panelDestroy_();
},getConfig:function(){
return this._moConfig;
},option:function(b,c){
var h=this,g={nX:"left",nY:"top",nWidth:"width",nHeight:"height",nZIndex:"zIndex"},e={nWidth:"scrollWidth",nHeight:"scrollHeight"},k;
if(typeof c!="undefined")
{
h._moConfig[b]=c;
if(k=g[b])
{
h._moPanelDom.style[k]=typeof c=="number"&&k!="zIndex"?c+"px":c;
}
}
if(b=="status")
{
return h._msStatus;
}
if(!c&&h._moConfig[b]=="auto"&&e[b])
{
var f=h._moPanelDom,j,d;
if(!isShow(f))
{
j=getStyle(f,"left");
f.style.left="-9999px";
d=show(f,true)[e[b]];
show(f,false).style.left=j;
}
else{
d=f[e[b]];
}
return d;
}
return c?h:h._moConfig[b];
},S:function(b){
var c=this._moConfig.oEmbedWin||getTop();
return S([this._msPanelId,b].join("_"),c);
},isContain:function(b){
return isObjContainTarget(this._moPanelDom,b);
},getPanelDom:function(){
return this._moPanelDom;
},show:function(){
var b=this;
if(b._msStatus!="showing"&&b._msStatus!="show")
{
b._msStatus="showing";
b.panelDomCtrl_(true,function(){
b._msStatus="show";
setTimeout(function(){
try{
callBack.call(b,b._moConfig.onshow);
}
catch(c)
{
debug("onshow error : "+c.message);
}
});
});
}
return b;
},hide:function(b){
var c=this;
if(c._msStatus!="hiding"&&c._msStatus!="hide")
{
c._msStatus="hiding";
c.panelDomCtrl_(false,function(){
c._msStatus="hide";
setTimeout(function(){
callBack.call(c,c._moConfig.onhide);
});
callBack.call(c,b);
});
}
else{
callBack.call(c,b);
}
return c;
},_isValid:function(){
try{
var c=this._moPanelDom;
if(c.parentNode==null)
{
return false;
}
if(gbIsIE)
{
return !!c.ownerDocument;
}
else{
var d=c.ownerDocument.defaultView,b=d.frameElement;
if(b)
{
return b.contentDocument==c.ownerDocument;
}
else{
return d==getTop();
}
}
}
catch(f)
{
return false;
}
},close:function(b){
if(this._msStatus!="close")
{
var c=this;
if(c._isValid())
{
b&&(this._moConfig.bAnimation=false);
this.hide(function(){
c._msStatus="close";
c.panelDestroy_();
callBack.call(c,c._moConfig.onclose);
});
}
else{
c._msStatus="close";
c.panelDestroy_();
}
}
return this;
},setBody:function(b){
this._moPanelDom.innerHTML=this.processHtml_(b);
callBack.call(this,this._moConfig.onload);
return this;
},setHtml:function(c,b){
((typeof c=="string"?this.S(c):c)||{}).innerHTML=this.processHtml_(b);
return this;
},isShow:function(){
return this._msStatus=="show"||this._msStatus=="showing";
},isClose:function(){
return this._msStatus=="close";
}};
},{_TEMPLATE:{_SKIN:TE(['<div id="$sPanelId$" class="$sClassName$" $sAttr$ ','style="$sStyle$;display:none;z-index:$nZIndex$;position:absolute;left:$nX$px;top:$nY$px;','$@$if($nHeight$&&!isNaN($nHeight$))$@$ height:$nHeight$px; $@$endif$@$','$@$if($nWidth$&&!isNaN($nWidth$))$@$ width:$nWidth$px; $@$endif$@$"','>','$sBodyHtml$','</div>'])}});
var QMDialog=inheritEx("QMDialog",QMPanel,function(a){
return {initMemVar_:function(b){
callBack.call(this,a.initMemVar_,[b]);
this._moMaskDom=null;
this._moMinAnimation=null;
this._moMinDlgDom=null;
var c=this.constructor;
this._moDlgArray=b.bModal?c._oMdlgArray:c._oNdlgArray;
},_ioDlgArray:function(b){
var g=this,e=g,d=g.constructor,c,f=g._moDlgArray,h=function(m,k,l){
for(var n=m.length-1;n>=0;n--)
{
e=m[n];
e.option("nZIndex",c?l:k);
e._lightHead(c);
c=true;
}
};
if(b>0)
{
for(var j in f)
{
if(f[j]==g)
{
e=f.splice(j,1)[0];
break;
}
}
if(b==2)
{
b=0;
}
}
if(b==0)
{
f.push(e);
}
h(d._oMdlgArray,1120,1106);
h(d._oNdlgArray,1110,1105);
},setEvent_:function(){
var b=this._moConfig,e=this;
if(b.bModal)
{
addEvent(this._moMaskDom,"mousedown",function(){
var f=e.constructor._oMdlgArray,g=f[f.length-1];
g&&g.spark();
});
}
else{
addEvent(this._moPanelDom,"mousedown",function(){
if(!b.bModal)
{
e._ioDlgArray(2);
}
});
}
var c=b.oEmbedWin,d=this._moPanelDom;
if(b.bMin)
{
this.S("_minbtn_").onclick=function(f){
e.min();
preventDefault(f);
return false;
};
}
if(b.bClose)
{
this.S("_closebtn_").onclick=function(f){
e.close();
preventDefault(f);
return false;
};
}
d.tabindex="-1";
addEvent(d,"keydown",function(f){
if(f&&f.keyCode==27)
{
e.close();
preventDefault(f);
}
});
new (QMDragDrop.Draggable)(e._moPanelDom,{handle:e.S("_head_"),maxcontainer:b.oEmbedWin.document.body},{ondragstart:function(){
callBack.call(e,b.ondragstart);
},ondrag:function(){
callBack.call(e,b.ondrag);
},ondragend:function(){
e._moConfig.nX=parseInt(e._moPanelDom.style.left);
e._moConfig.nY=parseInt(e._moPanelDom.style.top);
}}).lock(!b.bDraggable);
},dfConfig_:function(b){
this.configHelp_(b,{bModal:true});
this.configHelp_(b,{sClassName:(b.sClassName?'qm_dialog '+b.sClassName:'qm_dialog')},true);
var f={bDraggable:true,bClose:true,bAnimation:true,sEmbedPos:"beforeEnd",sTitle:""};
var d=this.constructor,c=b.bModal?d._oMdlgArray:d._oNdlgArray,g=c[c.length-1];
if(g&&!b.bAlignCenter)
{
extend(f,{nX:g.option("nX")+20,nY:g.option("nY")+20});
}
this.configHelp_(b,f);
var e=S("qmdialog_container",getTop());
if(!e)
{
insertHTML(getTop().Scale.getContainer(),getTop().document.readyState=="complete"?"beforeEnd":"afterBegin",'<span id="qmdialog_container"></span>');
e=S("qmdialog_container",getTop());
}
this.configHelp_(b,{oEmbedWin:getTop(),oEmbedToDom:e,nZIndex:b.bModal?1110:1105},true);
return callBack.call(this,a.dfConfig_,[b]);
},insertHtml_:function(b){
var c=this._msPanelId;
b.sBodyHtml=QMDialog._TEMPLATE._SKIN.replace(b);
callBack.call(this,a.insertHtml_,[b]);
},htmlReady_:function(b){
var c=this;
if(b.bModal)
{
c._moMaskDom=c._getMask();
}
if(b.bMin)
{
insertHTML(c._moPanelDom,"afterEnd",c.processHtml_(c.constructor._TEMPLATE._MIN_ANIMATION.replace(b)));
this._moMinAnimation=this.S("_min_animation_");
}
callBack.call(this,a.htmlReady_,[b]);
},_getMask:function(b){
var d=getTop();
var e="qqmail_mask",c=S(e,d);
if(!c)
{
insertHTML(d.Scale.getContainer(),"beforeEnd",T(['<div id="$id$" class="$class$" style="z-index:98;display:none;"',' onkeypress="return false;" onkeydown="return false;"',' tabindex="0"></div>']).replace({'class':'editor_mask opa50Mask ',id:e}));
c=S(e,d);
}
return c;
},panelDomCtrl_:function(b,c,d){
this._ioDlgArray(b?0:1);
var t=this,m=t._moConfig,d=d||(m.bAnimation?"ani1":"ani0"),l=getTop().qmAnimation,o=this.constructor._oMdlgArray.length,r=t._moPanelDom,n=t.S("_content_");
function e()
{
if(m.sUrl&&b)
{
t.S("_dlgiframe_").height="0";
t.S("_dlgiframe_").height=t._moPanelDom.offsetHeight-t.S("_head_").offsetHeight-2;
}
}
if(this._moConfig.bModal&&o==(b?1:0))
{
callBack(getTop().iPadPrevent);
show(this._moMaskDom,b);
}
hideWindowsElement(!b);
if(d=="ani0")
{
callBack.call(this,a.panelDomCtrl_,[b,c]);
e();
}
else if(d=="ani2")
{
var p=t._moMinAnimation,q=t._moMinDlgDom,s=calcPos(show(q,true)),h=(t._mnPanelWidth||r.offsetWidth)-s[4],g=(t._mnPanelHeight||r.offsetHeight)-s[5],j=m.nX-s[3],k=m.nY-s[0],f=function(u){
E(["left","top","width","height"],function(v,w){
p.style[v]=u[w]+"px";
});
};
if(b)
{
l.play(r,{win:window,speed:300,onready:function(){
show(p,true);
if(!m.sMinTabId)
{
show(q,false);
}
},onaction:function(v,u){
f([s[3]+(j*u),s[0]+(k*u),s[4]+(h*u),s[5]+(g*u)]);
},oncomplete:function(){
show(p,false);
r.style.top=r.getAttribute("originTop");
callBack.call(t,c);
}});
}
else{
t._mnPanelWidth=r.offsetWidth;
t._mnPanelHeight=r.offsetHeight;
l.play(r,{win:window,speed:300,onready:function(){
r.setAttribute("originTop",r.style.top);
r.style.top="-1000px";
show(p,true);
},onaction:function(v,u){
f([m.nX-(j*u),m.nY-(k*u),t._mnPanelWidth-(h*u),t._mnPanelHeight-(g*u)]);
},oncomplete:function(){
show(p,false);
callBack.call(t,c);
}});
}
return;
}
else if(d=="ani1")
{
if(b)
{
l.play(r,{win:window,speed:300,easing:"easeOut",tween:"Sina",from:-30,to:0,onready:function(){
show(setOpacity(r,0),true);
t.autoAlignCenter_();
e();
n.style.visibility="hidden";
},onaction:function(v,u){
setOpacity(r,u).style.marginTop=v+"px";
},oncomplete:function(){
setOpacity(r,1).style.marginTop=0;
n.style.visibility="visible";
callBack.call(t,c);
}});
}
else{
l.play(r,{win:window,speed:300,easing:"easeIn",tween:"Sina",from:0,to:-30,onaction:function(v,u){
setOpacity(r,1-u).style.marginTop=v+"px";
},oncomplete:function(u){
show(r,false);
callBack.call(t,c);
}});
}
}
},panelDomDestroy_:function(){
var c=this;
if(c._moConfig.sUrl)
{
try{
c.S("_dlgiframe_").contentWindow.location.replace("javascript:'';");
}
catch(b)
{
}
}
if(c._moConfig.bAnimation)
{
qmAnimation.stop(c._moPanelDom);
}
c._moMinDlgDom&&removeSelf(c._moMinDlgDom);
removeSelf(c._moPanelDom);
removeSelf(c._moMinAnimation);
c._moPanelDom=null;
},_lightHead:function(b){
var d=this,c=d._moPanelDom;
if(b&&c.className.indexOf("qm_dialog_flash")>-1)
{
return;
}
b?getTop().addClass(c,"qm_dialog_flash"):getTop().rmClass(c,"qm_dialog_flash");
},S:function(b){
var e=this,c=e._moConfig,d=callBack.call(e,a.S,[b]);
if(c.sUrl&&!d)
{
d=S(b,a.S("_dlgiframe_").contentWindow);
}
return d;
},close:function(b){
var c=this._moConfig.onbeforeclose;
if(c&&c.call(this)===false)
{
return;
}
if(b)
{
this._moConfig.bAnimation=false;
}
callBack.call(this,a.close);
callBack(getTop().iPadRemoveEvent);
return this;
},min:function(b){
if(this._msStatus!="show")
{
return;
}
var g=this,e=S("minimize_container",getTopWin()),d=g._moConfig,h=g._msPanelId+"_min",f=g._moMinDlgDom,c=g._moConfig.onbeforemin;
if(c&&!c.call(g))
{
return;
}
if(!f&&!b)
{
insertHTML(e,"beforeEnd",g.constructor._TEMPLATE._MINTAB_.replace({dialogId:d.sId,id:h,title:d.sTitle}));
this._moMinDlgDom=f=S(h,getTopWin());
}
g.panelDomCtrl_(false,function(){
g._msStatus="min";
show(f,!b);
callBack.call(g,g._moConfig.onmin);
},"ani2");
return g;
},max:function(){
if(this._msStatus!="min")
{
return;
}
var e=this,c=e._moMinDlgDom,d=calcPos(c),b=e._moConfig;
e.panelDomCtrl_(true,function(){
e._msStatus="show";
show(c,false);
callBack.call(e,e._moConfig.onmax);
},"ani2");
return this;
},spark:function(){
var d=this,c=4,b=function(){
if(--c>0)
{
setTimeout(arguments.callee,80);
}
var e=c%2;
d._lightHead(e);
};
b();
return d;
},getMinDom:function(){
return this._moMinDlgDom;
},getDialogWin:function(){
var b=this._moConfig;
return b.sUrl?this.S("_dlgiframe_").contentWindow:b.oEmbedWin;
},setHeader:function(b){
this.S("_title_").innerHTML=this.processHtml_(b);
return this;
},setBody:function(b){
this.S("_content_").innerHTML=this.processHtml_(b);
callBack.call(this,this._moConfig.onload);
return this;
}};
},{_TEMPLATE:{_SKIN:TE(['<div style="cursor:$@$if($bDraggable$)$@$move$@$endif$@$;" class="dialog_head" id="_head_">','<span id="_title_">$sTitle$</span>','$@$if($bMin$)$@$','<a title="\u6700\u5C0F\u5316" class="ico_minimize" href="javascript:;" initlized="true" id="_minbtn_"><em class="ico_minimize_inner"></em></a>','$@$endif$@$','$@$if($bClose$)$@$','<a title="\u5173\u95ED" dlg="close" class="ico_close_d" href="javascript:;" id="_closebtn_" initlized="true"></a>','$@$endif$@$','</div>','<div id="_content_">','$@$if($sUrl$)$@$','<iframe id="_dlgiframe_" frameborder="0" scrolling="no" src="$sUrl$" style="width:100%;"></iframe>','$@$else$@$','<div class="dialog_inner">','<div class="dialog_content" id="_body_">','$sBodyHtml$','</div>','$@$if($sFootHtml$)$@$','<div class="dialog_operate" id="_foot_">','$sFootHtml$','<div class="clr"></div>','</div>','$@$endif$@$','</div>','$@$endif$@$','</div>']),_MINTAB_:T('<span id="$id$" style="display:none;"><a href="javascript:;" onclick="getTop().QMDialog(\'$dialogId$\',\'max\');" nocheck="true">$title$</a>&nbsp;|&nbsp;</span>'),_MIN_ANIMATION:T('<div id="_min_animation_" style="display:none;position:absolute;z-index:$nZIndex$;border-width:2px;left:$nX$;top:$nY$;" class="bd_upload"></div>')},_oNdlgArray:[],_oMdlgArray:[]});
var QMTabDialog=inheritEx('QMTabDialog',QMDialog,function(a){
return {dfConfig_:function(b){
var c={sTitle:'',sBodyHtml:'',sFootHtml:'',sClassName:b.sClassName?'qm_tab_dialog '+b.sClassName:'qm_tab_dialog'};
this.configHelp_(b,c,true);
callBack.call(this,a.dfConfig_,[b]);
},insertHtml_:function(b){
var e='';
var d='';
var c=b.oTabs||[];
if(c.length>0)
{
e=QMTabDialog._TEMPLATE._TABTITLE.replace({oTabs:c});
d=QMTabDialog._TEMPLATE._TABCONTENT.replace({oTabs:c});
}
b.sTitle=e;
b.sBodyHtml=d;
callBack.call(this,a.insertHtml_,[b]);
},setEvent_:function(){
var c=this;
var d=getTopWin();
var b={rule:function(){
return {click:{"click_tab_title":{bPropagable:false}}};
},events:function(){
return {"click_tab_title":function(e,f){
var p=attr(f,'selected');
if("true"!=p)
{
if(1==attr(f,'isdisabled'))
{
return;
}
var n=c.S('tab_title');
var j=d.finds("span[selected='true']",n)[0];
attr(j,'selected','false');
rmClass(j,'actived');
addClass(j,'pointer');
attr(f,'selected',"true");
rmClass(f,'pointer');
addClass(f,'actived');
var m=c.S('tab_content');
var g=attr(j,'tab-num');
var k=d.finds("div[tab-num='"+g+"']",m)[0];
var h=attr(f,'tab-num');
var l=d.finds("div[tab-num='"+h+"']",m)[0];
k.style.position='absolute';
k.style.top='-999px';
k.style.left='-999px';
attr(k,'expanded','false');
l.style.position='static';
d.show(l,true);
attr(l,'expanded','true');
var o=(typeof c._moConfig.ontoggletab)=="function"?c._moConfig.ontoggletab:function(){
};
callBack.call(c,o,[j,f]);
}
}};
}};
d.liveEvent(this.getPanelDom(),b);
callBack.call(this,a.setEvent_,[]);
},_fInitAllTabContent:function(b){
var e=getTopWin();
var c=this;
var d=c.S('tab_content');
E(b.oTabs,function(f,g){
var h=e.finds("div[tab-num='"+g+"']",d)[0];
if(!f.fInitTabContent)
{
f.fInitTabContent=function(){
};
}
e.callBack(f.fInitTabContent,[h]);
});
},htmlReady_:function(b){
this._fInitAllTabContent(b);
callBack.call(this,a.htmlReady_,[b]);
},panelDomDestroy_:function(){
var b=this;
if(this._moConfig.sMinTabId)
{
b._moMinDlgDom=null;
}
callBack.call(b,a.panelDomDestroy_,[]);
},getSelectedTab:function(){
var c=getTopWin();
var b=this.S('tab_title');
return c.finds("span[selected='true']",b)[0];
},getSelectedContent:function(){
return (getTopWin()).finds("div[expanded='true']",this.S('tab_content'))[0];
},min:function(){
if(this._msStatus!="show")
{
return;
}
var d=this,c=d._moConfig;
if(!c.sMinTabId)
{
callBack.call(d,a.min,[]);
return d;
}
else{
var b=d._moConfig.onbeforemin;
if(b&&!b.call(d))
{
return;
}
d._moMinDlgDom=S(c.sMinTabId,getTopWin());
d.panelDomCtrl_(false,function(){
d._msStatus="min";
callBack.call(d,d._moConfig.onmin);
},"ani2");
return d;
}
},max:function(){
if(!this._moConfig.sMinTabId)
{
callBack.call(this,a.max,[]);
return this;
}
else{
if(this._msStatus!="min")
{
return;
}
var b=this;
b.panelDomCtrl_(true,function(){
b._msStatus="show";
callBack.call(b,b._moConfig.onmax);
},"ani2");
return b;
}
},show:function(){
var c=this;
if(c._msStatus!="showing"&&c._msStatus!="show")
{
c._msStatus='show';
var b=c.getPanelDom(),d=b.getAttribute('originTop');
b.style.display='block';
if(d)
{
b.style.top=d;
}
show(c._moMaskDom,true);
c.autoAlignCenter_();
setTimeout(function(){
try{
callBack.call(c,c._moConfig.onshow);
}
catch(e)
{
debug("onshow error : "+e.message);
}
});
}
return c;
},hide:function(b){
var d=this;
if(d._msStatus!="hiding"&&d._msStatus!="hide")
{
d._msStatus="hide";
var c=d.getPanelDom();
var e=c.setAttribute('originTop',c.style.top);
c.style.top="-999px";
show(d._moMaskDom,false);
setTimeout(function(){
callBack.call(d,d._moConfig.onhide);
});
callBack.call(d,b);
}
else{
callBack.call(d,b);
}
return d;
}};
},{_TEMPLATE:{_TABTITLE:TE(['<div id="tab_title" class="dialog_tab_title">','$@$for($oTabs$)$@$','<span tab-num="$_idx_$" ck="click_tab_title" ','$@$if($bDefault$==true)$@$',' selected="true" class="dialog_tab_list actived" ','$@$else$@$',' selected="false" class="dialog_tab_list pointer" ','$@$endif$@$','>$sTabTitle$</span>','$@$endfor$@$','</div>','<div class="clr"></div>']),_TABCONTENT:TE(['<div id="tab_content">','$@$for($oTabs$)$@$','<div tab-num="$_idx_$" class="tab_content_list" ','$@$if($bDefault$==true)$@$',' expanded="true" ','$@$else$@$',' expanded="false" style="display:none;" ','$@$endif$@$','>$sTabContent$</div>','$@$endfor$@$','</div>']),_MINTAB_:QMDialog._TEMPLATE._MINTAB_,_MIN_ANIMATION:QMDialog._TEMPLATE._MIN_ANIMATION},_oNdlgArray:QMDialog._oNdlgArray,_oMdlgArray:QMDialog._oMdlgArray});
var QMMenu=inheritEx("QMMenu",QMPanel,function(a){
return {initMemVar_:function(b){
var c=this;
callBack.call(c,a.initMemVar_,[b]);
c._moCurSelDom;
c._moItemNode;
c._moSubMenu=null;
c._moParentMenu=null;
c._mnSubMenuTimeoutOpen=null;
c._mnSubMenuTimeoutClose=null;
c._mnAllMenuTimeoutClose=null;
},setEvent_:function(){
var k=this,f=k._moConfig,e=null,h=k.S("_menuall_"),g=k.S("_foot_"),j=k.getPanelDom();
function c(m,l)
{
while(m)
{
var n=m.id||"";
if(n.indexOf("_menuitem_")>-1)
{
return !l&&m.className.indexOf("menu_item_nofun")>-1?0:m;
}
else if(/_QMMenu$/.test(n))
{
return 0;
}
m=m.parentNode;
}
return null;
}
function b(l)
{
if(f.bProxyScroll!==false)
{
var o=getEventTarget(l),m=typeof (l.wheelDelta)=="undefined"?l.detail/3:-l.wheelDelta/120,n=h.scrollTop+m*20;
h.scrollTop=Math.min(Math.max(n,0),h.scrollHeight-h.offsetHeight);
while(o)
{
if(o.getAttribute&&o.getAttribute('scroll')=='true')
{
return;
}
o=o.parentNode;
}
preventDefault(l);
stopPropagation(l);
}
}
function d(l)
{
var m=f.oItems;
for(var n in m)
{
if(m[n].sId==l)
{
return m[n];
}
}
}
addEvents(j,{contextmenu:preventDefault,mousewheel:b,DOMMouseScroll:b,mouseout:function(l){
var m=k._moCurSelDom,n=c(l.relatedTarget||l.toElement,1);
if(n==null&&f.bAutoClose)
{
k._closeAllMenu();
}
if(n===0||n==m)
{
return;
}
if(m)
{
var p=m.getAttribute("itemid"),q=['sub',p,'_QMMenu'].join(''),o=n;
while(o)
{
if(o.id==q)
{
return;
}
o=o.parentNode;
}
if(k._moSubMenu&&n==null&&m==k._moSubMenu._moParentItem)
{
return;
}
k._clearTimeoutOpenSubMenu()._clearTimeoutCloseSubMenu();
k._mnSubMenuTimeoutClose=setTimeout(function(){
k._closeSubMenu();
},100);
k.clearCurItem();
}
},mouseover:function(l){
if(f.bAutoClose)
{
k._clearTimeoutCloseAllMenu();
}
var n=c(getEventTarget(l));
if(n)
{
k._selectItem(n);
var o=n.getAttribute("itemid"),m=d(o);
if(m.oSubMenu)
{
k._openSubMenu(m,n);
}
}
if(k._moParentMenu)
{
k._moParentMenu._clearTimeoutOpenSubMenu()._clearTimeoutCloseSubMenu();
k._moParentMenu.selectItem(k._moParentItem);
}
},click:function(l){
var n=getEventTarget(l),o;
if(n.getAttribute("qmmenuopt")=="close")
{
k.close(false,true);
}
else if(o=c(getEventTarget(l)))
{
var p=o.getAttribute("itemid"),m=d(p);
if(!m.oSubMenu)
{
k._clearTimeoutOpenSubMenu();
callBack.call(k,f.onitemclick,[p,m,l]);
setClass(o,"menu_item");
k.close();
k._closeParentMenu();
}
}
}});
addEvent(k._moPanelDom,"mousedown",stopPropagation);
},clearCurItem:function(){
setClass(this._moCurSelDom,"menu_item");
this._moCurSelDom=null;
},dfConfig_:function(b){
this.configHelp_(b,{bAutoClose:true,nZIndex:b.nZIndex||1121,nWidth:"auto",nMinWidth:100,nMaxWidth:9999,bAnimation:true,nMaxItemView:1000000,sClassName:b.sClassName?b.sClassName:"qmpanel_shadow rounded5",nArrowDirection:"Up"});
this.configHelp_(b,{nHeight:"auto"},true);
if(b.nArrowPos&&b.nArrowDirection=="Up")
{
b.nX-=b.nArrowPos;
b.nY+=12;
}
return callBack.call(this,a.dfConfig_,[b]);
},insertHtml_:function(b){
var k=this,j=b.oItems,h=b.oFootItems,c=j.length>b.nMaxItemView,f=c?b.nMaxItemView:j.length,l=k._msPanelId,g=0;
for(var m=0;m<j.length;m++)
{
var e=j[m].nHeight=j[m].nHeight||b.nItemHeight||22;
if(m<f)
{
g+=e;
}
if(j[m].sId===0)
{
j[m].sId="0";
}
k.configHelp_(j[m],{bDisSelect:!(j[m].sId)});
}
if(h)
{
for(var m=0,d=h.length;m<d;m++)
{
if(h[m].sId===0)
{
h[m].sId="0";
}
k.configHelp_(h[m],{nHeight:b.nItemHeight||22,bDisSelect:!(h[m].sId)});
}
}
b.sBodyHtml=QMMenu._TEMPLATE._SKIN.replace({nArrowPos:b.nArrowPos||0,nArrowDirection:b.nArrowDirection,nX:b.nX,sWidthDetect:b.sWidthDetect||"mini",mwidth:b.nWidth-2,mheight:c?g:"auto",nMinWidth:b.nMinWidth,oItems:b.oItems,oFootItems:b.oFootItems});
callBack.call(this,a.insertHtml_,[b]);
},_adjustSize:function(){
var e=this;
if(e._moConfig.nWidth=="auto")
{
var d=e.S("_menuall_"),c=e.S("_foot_");
if(d&&d.offsetWidth>10)
{
var b=(Math.max(e._moConfig.nMinWidth,Math.min(d.scrollWidth,e._moConfig.nMaxWidth))+(gbIsIE?0:d.offsetWidth-d.scrollWidth));
if(typeof e._moConfig.nMaxWidth==="number"&&b>e._moConfig.nMaxWidth)
{
b=e._moConfig.nMaxWidth;
}
else if(typeof e._moConfig.nMinWidth==="number"&&b<e._moConfig.nMinWidth)
{
b=e._moConfig.nMinWidth;
}
c.style.width=d.style.width=b+"px";
setClass(d,"txtflow");
}
}
},panelDomCtrl_:function(b,c){
var f=this,e=f._moPanelDom;
if(true)
{
callBack.call(this,a.panelDomCtrl_,[b,c]);
return f._adjustSize();
}
if(b)
{
var d=true;
show(e,true);
qmAnimation.expand(e,{win:window,from:0,speed:200,easing:"easeOut",tween:"Cubic",oncomplete:function(){
callBack.call(f,c);
},onaction:function(){
if(d)
{
f._adjustSize();
d=0;
}
}});
}
else{
qmAnimation.fold(e,{win:window,speed:200,easing:"easeIn",tween:"Cubic",oncomplete:function(){
show(e,false);
callBack.call(f,c);
}});
}
},panelDomDestroy_:function(){
var b=this;
if(b._moConfig.bAnimation)
{
qmAnimation.stop(b._moPanelDom);
}
removeSelf(b._moPanelDom);
b._moPanelDom=null;
},_getItemDom:function(b){
var c=this;
return typeof (b)=="number"?c.S("_menuall_").childNodes[b]:c.S("_menuitem_"+b);
},getItemDom:function(){
return this._getItemDom.apply(this,arguments);
},_selectItem:function(b){
var c=(typeof (b)=="string"||typeof (b)=="number")?this.S("_menuitem_"+b):b;
if(this._moCurSelDom==c)
{
return this;
}
if(c)
{
c.className="menu_item_high";
}
if(this._moCurSelDom)
{
this._moCurSelDom.className="menu_item";
}
this._moCurSelDom=c;
return this;
},_clearTimeoutOpenSubMenu:function(){
var b=this;
if(b._mnSubMenuTimeoutOpen)
{
clearTimeout(b._mnSubMenuTimeoutOpen);
b._mnSubMenuTimeoutOpen=null;
}
return b;
},_clearTimeoutCloseSubMenu:function(){
var b=this;
if(b._mnSubMenuTimeoutClose)
{
clearTimeout(b._mnSubMenuTimeoutClose);
b._mnSubMenuTimeoutClose=null;
}
return b;
},_clearTimeoutCloseAllMenu:function(){
var c=this,b=c;
while(b._moParentMenu)
{
b=b._moParentMenu;
}
while(b)
{
if(b._mnAllMenuTimeoutClose)
{
clearTimeout(b._mnAllMenuTimeoutClose);
b._mnAllMenuTimeoutClose=null;
}
b=b._moSubMenu;
}
return c;
},_closeAllMenu:function(){
var b=this;
if(b._mnAllMenuTimeoutClose)
{
clearTimeout(b._mnAllMenuTimeoutClose);
}
b._mnAllMenuTimeoutClose=setTimeout(function(){
b._closeParentMenu().close();
b._mnAllMenuTimeoutClose=null;
},500);
return b;
},_openSubMenu:function(c,b){
var f=this,d=f._moConfig,e=f.configHelp_(c.oSubMenu,d);
e.sId="sub"+c.sId;
e.nZIndex=d.nZIndex+1;
if(f._moSubMenu)
{
if(f._moSubMenu._moConfig.sId==e.sId)
{
return f;
}
}
f._clearTimeoutOpenSubMenu();
f._mnSubMenuTimeoutOpen=setTimeout(function(){
if(f._moSubMenu)
{
f._closeSubMenu();
}
if(f.isShow())
{
var g=calcPos(b);
g[0]-=5;
g[1]-=1;
g[2]+=7;
g[3]+=2;
var h=f._moSubMenu=new QMMenu(e),j=calcAdjPos(g,h.option('nWidth'),h.option('nHeight'),d.oEmbedWin,1);
h.option('nY',Math.max(0,j[0])).option('nX',Math.max(0,j[3]))._moParentMenu=f;
h._moParentItem=b;
}
},100);
},_closeSubMenu:function(){
var b=this;
if(b._moSubMenu)
{
b._moSubMenu.close();
b._moSubMenu=null;
}
return b;
},_closeParentMenu:function(){
var c=this,b=c._moParentMenu;
if(b)
{
b._moSubMenu=null;
b._closeParentMenu().close();
c._moParentMenu=null;
}
return c;
},toggle:function(){
var b=this;
b.isShow()?b.hide():b.show();
return b;
},selectItem:function(b){
var c=this;
c._selectItem(b);
if(c._moCurSelDom)
{
scrollIntoMidView(c._moCurSelDom,c.S("_menuall_"));
}
return c;
},selectItemByOffset:function(b){
var g=this,c=-1,f=g._moConfig.oItems,d=Math.abs(b),e=b/d,h;
if(g._moCurSelDom==null)
{
return g;
}
c=g.getCurItemIndex();
for(h=0;h<d;h++)
{
c+=e;
while(c>=0&&c<f.length&&f[c].bDisSelect)
c+=e;
if(c<0||c>=f.length)
break;
}
if(h<d)
{
return g;
}
g.selectItem(f[c].sId);
return g;
},getCurItemIndex:function(){
var d=this,c=d._moConfig.oItems,b=-1;
if(d._moCurSelDom==null)
{
return -1;
}
return QMMenu.indexOf.call(c,d._moCurSelDom.getAttribute("itemid"));
},addItem:function(c,b){
var f=this,d=f._getItemDom(c);
f.configHelp_(b,{nHeight:22});
if(d)
{
insertHTML(d,"beforeBegin",f.constructor._TEMPLATE._SKIN.replace(b,"item"));
}
else{
var e=f.S("_menuall_").childNodes;
insertHTML(f.S("_menuall_"),"beforeEnd",f.constructor._TEMPLATE._SKIN.replace(b,"item"));
}
},delItem:function(b){
var d=this,c=d._getItemDom(b);
if(c)
{
removeSelf(c);
}
},itemOption:function(d,b,c){
var f=this,e=this._getItemDom(d);
if(e)
{
switch(b)
{case "bDisSelect":
e.className=(c?"menu_item_nofun":"menu_item");
break;
case "bDisplay":
e.style.display=c?"":"none";
break;
}
}
},hasItem:function(b){
return this._getItemDom(b)?true:false;
},close:function(b,c){
var e=this,d=e._moConfig.onbeforeclose;
if(d&&d.call(e,c)===false)
{
return;
}
b&&(this._moConfig.bAnimation=false);
e._clearTimeoutOpenSubMenu();
e._closeSubMenu();
return callBack.call(e,a.close);
},autoClose:function(){
return this._closeAllMenu();
},option:function(b,c){
var e=this;
if(typeof c!="undefined")
{
switch(b)
{case "nHeight":
var d=e.S("_menuall_");
d.style.height=typeof c=="number"?(c-(e._moConfig.nGap?e._moConfig.nGap:12)+'px'):c;
break;
case "nX":
e._moConfig.nArrowPos&&e._moConfig.nArrowDirection=="Up"&&(c-=e._moConfig.nArrowPos);
break;
case "nY":
e._moConfig.nArrowPos&&e._moConfig.nArrowDirection=="Up"&&(c+=12);
break;
}return callBack.call(e,a.option,[b,c]);
}
else{
var f=callBack.call(e,a.option,[b]);
switch(b)
{case "nHeight":
if(!f)
{
var d=e.S("_menuall_");
f=e._moPanelDom.offsetHeight||d.offsetHeight;
}
break;
case "nX":
e._moConfig.nArrowPos&&e._moConfig.nArrowDirection=="Up"&&(f+=e._moConfig.nArrowPos);
break;
case "nY":
e._moConfig.nArrowPos&&e._moConfig.nArrowDirection=="Up"&&(f-=12);
break;
}return f;
}
}};
},{makeMenuItem:function(b,a){
var e=[];
for(var c=0,d=a?Math.min(b.length,a.length):b.length;c<d;c++)
{
e.push({sId:a?a[c]:c,sItemValue:b[c]});
}
return e;
},indexOf:function(a){
var b=this;
for(var c=0,d=b.length;c!=d;++c)
{
if(b[c].sId==a)
{
return c;
}
}
return -1;
},_TEMPLATE:{_SKIN:TE(['$@$if($nArrowPos$>0&&$nArrowDirection$=="Up")$@$','<div class="t_arrow" style="left:$nArrowPos$px;">','<div class="t_arrow_d"></div>','<div class="t_arrow_u"></div>','</div>','$@$else if($nArrowPos$>0&&$nArrowDirection$=="Left")$@$','<div class="c_arrow" style="left:-10px;top:$nArrowPos$px;">','<div class="c_arrow_d"></div>','<div class="c_arrow_u"></div>','</div>','$@$endif$@$','<div style="margin:0pt;" $@$if($nArrowDirection$=="Left")$@$class="c_list_msg_pop"$@$endif$@$>','<div $@$if($nArrowDirection$=="Up")$@$class="menu_base"$@$endif$@$>','<div class="menu_bd$@$if($nArrowDirection$=="Left")$@$ ui_menu_bd$@$endif$@$">','<div id="_menuall_"','style="overflow-y:auto;$@$if(isNaN($mwidth$))$@$width:$@$if(gbIsIE&&$sWidthDetect$!="float")$@$$nMinWidth$px;$@$else$@$auto$@$endif$@$;$@$else$@$overflow-x:hidden;width:$mwidth$px;$@$endif$@$','$@$if($mheight$)$@$height:$mheight$$@$endif$@$$@$if(!isNaN($mheight$))$@$px$@$endif$@$;">','$@$for($oItems$)$@$','$@$sec item$@$','<div id="_menuitem_$sId$" itemid="$sId$" class="menu_item$@$if($bDisSelect$)$@$_nofun$@$endif$@$"','style="height:$nHeight$$@$if(!isNaN($nHeight$))$@$px$@$endif$@$;line-height:$nHeight$$@$if(!isNaN($nHeight$))$@$px$@$endif$@$;$sStyle$" title="$sTitle$" onclick=";">$sItemValue$</div>','$@$endsec$@$','$@$endfor$@$','</div>','<div id="_foot_"','style="overflow-y:auto;$@$if(isNaN($mwidth$))$@$width:$@$if(gbIsIE)$@$$nMinWidth$px;$@$else$@$auto$@$endif$@$;$@$else$@$overflow-x:hidden;width:$mwidth$px;$@$endif$@$','padding-top:3px;border-top:1px solid #ccc;$@$if(!$oFootItems$)$@$display:none;$@$endif$@$height:auto;">','$@$for($oFootItems$)$@$','<div id="_menuitem_$sId$" itemid="$sId$" class="menu_item$@$if($bDisSelect$)$@$_nofun$@$endif$@$"','style="height:$nHeight$px;line-height:$nHeight$px;" onclick=";">$sItemValue$</div>','$@$endfor$@$','</div>','$@$if($nArrowPos$>0||$nArrowDirection$=="Left")$@$','<a class="btn_close" qmmenuopt="close"  onmousedown="return false;"></a>','$@$endif$@$','</div>','</div>','</div>'])}});
function QMSelect(a)
{
this.constructor=arguments.callee;
this._initialize(a)._setup();
}
QMSelect.prototype={get:function(a){
var b=this;
switch(a=a||1)
{case 1:
case 2:
return b._moSelectItem[a==1?"sItemValue":"sId"];
case 8:
return S(b._msSelectId,b._moWin);
case "menu":
return b._moMenu;
}
},set:function(b,a){
var d=this,c=d._getItem(b,a);
if(!c._customvalue)
{
S(d._moConfig.sId,d._moWin).innerHTML=(d._moSelectItem=c).sItemValue;
}
return d;
},update:function(a){
var b=this;
b.configHelp_(a,b._moConfig);
b.configHelp_(a.oMenu,b._moConfig.oMenu);
b._moConfig=a;
b._moSelectItem=b._getItem(a.sDefaultId,2,1);
b._setup().set(a.sDefaultId,2);
},_getItem:function(b,a,c){
var j=(a==2)?"sId":"sItemValue",f=this._moConfig,g,h=f.oMenu.oItems;
if(f.oMenu.oFootItems)
{
h=h.concat(f.oMenu.oFootItems);
}
for(var d=0,e=h.length;d<e;d++)
{
if(h[d].sId||h[d].sId===0)
{
if(h[d][j]==b)
{
return h[d];
}
else if(c&&!g)
{
g=h[d];
}
}
}
return g||{sItemValue:f.sDefaultItemValue,_customvalue:1};
},configHelp_:function(b,c,a){
for(var d in c)
{
if(a||typeof (b[d])=="undefined"||b[d]==null)
{
b[d]=c[d];
}
}
return b;
},_initialize:function(a){
var b=this;
b._moWin=a.oContainer.ownerDocument.parentWindow||a.oContainer.ownerDocument.defaultView;
b.configHelp_(a,{sDefaultItemValue:"",sId:QMSelect._TEMPLATE._ID_PREFIX+Math.random()});
b._moConfig=a;
b._moSelectItem=b._getItem(a.sDefaultId,2,!a.sDefaultItemValue);
return this;
},_setup:function(){
var d=getTop(),c=this,a=c._moConfig,b=S(a.sId,c._moWin);
if(!b)
{
if(a.sName)
{
insertHTML(a.oContainer,"beforeEnd",QMSelect._TEMPLATE._CUSTOM_HIDDEN.replace(a));
}
insertHTML(a.oContainer,"beforeEnd",QMSelect._TEMPLATE._CUSTOM_SELECT.replace(extend(a,{content:c._moSelectItem.sItemValue,images_path:getPath("image")})));
}
if(!(b=S(a.sId+"_div",c._moWin)))
{
return;
}
c.configHelp_(a.oMenu,{oEmbedWin:c._moWin,sId:"select",nWidth:b.clientWidth+3,nMinWidth:b.clientWidth+3,onitemclick:function(e){
if(a.sName)
{
S(a.sName,c._moWin).value=e;
}
if(!callBack.call(c,a.onselect,[c._getItem(e,2)]))
{
c._moSelectItem=c._getItem(e,2);
c.set(e,2);
}
callBack.call(c,a.onchange,[c._getItem(e,2)]);
},onshow:function(){
var e=c._moSelectItem.sId;
if(e||e===0)
{
this.selectItem(e);
}
},onload:function(){
var p=this,q=calcPos(b),n=bodyScroll(c._moWin,'clientHeight'),o=bodyScroll(c._moWin,'scrollTop'),g=n+o;
callBack.call(c,a.onafteropenmenu,[p,b]);
var h=parseInt(p.option("nHeight")),m=q[2],l=b.offsetHeight,k=m-h-l,e=true;
if(a.oMenu.bAutoItemView)
{
var f=n/2+o,j;
if(a.oMenu.nMaxHeight)
{
j=Math.min(h,a.oMenu.nMaxHeight);
if(m>f&&m-j-l>0)
{
m=m-j-l;
e=false;
}
}
else if(m<f)
{
j=Math.floor((g-m)*0.66);
}
else if(m+h<g)
{
j=h;
}
else{
j=Math.floor((n-(g-m+l))*0.66);
m=m-Math.min(h,j)-l;
e=false;
}
if(h>j)
{
p.option("nHeight",j);
}
}
else if(k>0&&m+h>g)
{
m=k;
}
if(a.oMenu.bOverLap)
{
m+=e?-1:1;
}
p.option("nX",q[3]).option("nY",m);
}});
addEvent(c._moWin.document.body,(gbIsFF?"DOMMouseScroll":"mousewheel"),function(){
d.QMMenu("select","close");
});
b.onclick=function(){
if(b.className.indexOf("btn_disabled")!=-1||callBack.call(c,a.onbeforeopenmenu,[a.oMenu])===false)
{
return false;
}
c._moMenu=new d.QMMenu(a.oMenu);
return false;
};
b.onkeydown=function(e){
var g=c._moMenu,h=S(a.sId+"_div",c._moWin),f=(e||c._moWin.event).keyCode;
if(f==38)
{
if(g==null)
{
return false;
}
g.selectItemByOffset(-1);
}
else if(f==40)
{
if(g==null)
{
return false;
}
g.selectItemByOffset(1);
}
else if(f==13)
{
if(g!=null)
{
c._moConfig.oMenu.onitemclick(g._moConfig.oItems[g.getCurItemIndex()].sId);
d.QMMenu("select","close");
c._moMenu=null;
}
else{
h.onclick();
}
}
return false;
};
return c;
},disable:function(a){
var b=S(this._moConfig.sId+"_div",this._moWin),c=b.className.replace("btn_disabled","");
c=a?c+" btn_disabled":c;
b.className=c;
}};
QMSelect._TEMPLATE={_CUSTOM_SELECT:TE(['<a tabindex="-1" class="btn_gray ','$@$if($sMenuType$!="dropdown")$@$',' btn_select ','$@$else$@$',' btn_dropdown ','$@$endif$@$','$@$if($nWidth$)$@$ btn_select_limiting$@$endif$@$" href="javascript:;" id="$sId$_div" style="width:$nWidth$px;$sStyle$">','<span id="$sId$" class="btn_select_txt">$content$</span>','<span class="ico_select_s"></span>','</a>']),_CUSTOM_HIDDEN:T('<input type="hidden" id="$sName$" name="$sName$" value="$sDefaultId$"/>'),_ID_PREFIX:"QmCs_2_"};
var QMAddrParser={parseAddr:function(a){
a=a.replace('\t',' ');
var f,e,g,d,c=[],h=getTop().trim(a||"");
for(var j=0,b=h.length;j<b;j=g[0])
{
f=[];
e=[];
g=this._getSegment(h,j,f,e);
d=this._parseSegment(g[1],f,e);
if(d.addr)
{
c.push(d);
}
}
return c;
},isEmailAddress:function(a){
var d=/^(.+)@(.+)$/,m="\\(\\)><@,;:\\\\\\\"\\.\\[\\]",n="\[^\\s"+m+"\]",j=n+'+',o="("+j+")",b=new RegExp("^"+o+"\\.?("+o+"\\.?)*$"),g=a.match(d);
if(g==null)
{
return false;
}
var h=g[1],l=g[2];
for(var p=0;p<h.length;p++)
{
if(h.charCodeAt(p)>126||l.charCodeAt(p)<32)
{
return false;
}
}
if(h.match(b)==null)
{
return false;
}
var f=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
for(var p=0;p<l.length;p++)
{
if(l.charCodeAt(p)>126||l.charCodeAt(p)<32)
{
return false;
}
}
var e=l.match(f);
if(e!=null)
{
for(var p=1;p<=4;p++)
{
if(e[p]>255)
{
return false;
}
}
}
var c=new RegExp("^"+j+"$"),k=l.split(".");
for(var p=0;p<k.length;p++)
{
if(k[p].search(c)==-1)
{
return false;
}
}
return true;
},_getSegment:function(d,a,c,b){
var l,e,n,j,p='N',m='<(",;\uFF0C\uFF1B\u3001 ',q='<("DDDDDD',o='>)"',g=0,k=a,r="",f=0,h=0;
for(var s=a;p!='D';)
{
l=d.charAt(s);
e=p;
f=0;
if(l=='\\'&&p!='<')
{
l=d.charAt(++s);
f=1;
}
if(l=='')
{
p='D';
g=s;
}
else if(p=='N')
{
if(!f&&(j=m.indexOf(l))>-1)
{
if(d.charAt(s+1)!='<')
{
p=q.charAt(j);
n=o.charAt(j);
g=(j>2)?s:s-1;
}
else if(l!=' ')
{
p=q.charAt(j);
n=o.charAt(j);
g=(j>2)?s:s-1;
}
else{
r+=l;
}
}
else{
r+=l;
}
++s;
}
else{
if(!f&&l==n)
{
p='N';
g=s;
}
else{
r+=l;
}
++s;
}
if(p!=e||h)
{
if(e=='"'||getTop().trim(r)!="")
{
c.push([r,e,k,d.substr(k,g-k+1)]);
b.push(e);
}
h=0;
r="";
k=g+1;
}
}
return [s,d.substr(a,s-a)];
},_parseSegment:function(c,b,a){
var e="",d="";
switch(a.join(""))
{case 'N':
case '<':
d=b[0][0];
break;
case '"<':
case 'N<':
case '"N':
e=b[0][0];
d=b[1][0];
break;
}d=getTop().trim(d);
e=getTop().trim(e);
if(!/[^0-9]/.test(d))
{
d+="@qq.com";
}
d=this._maybeChangeToBizEmail(d);
return this.isEmailAddress(d)?{nick:e,addr:d,valid:true}:{nick:"",addr:(new RegExp("[;,\uFF1B\uFF0C\u3001 ]$")).test(c)?c.slice(0,-1):c,valid:false};
},_maybeChangeToBizEmail:function(a){
if(/^(400\d{7})@qq.com$/.test(a)||/^(800\d{6,7})@qq.com$/.test(a))
{
return RegExp.$1+"@b.qq.com";
}
return a;
}};
var JS=(function(){
var b={};
function a(e,d)
{
var f=getTop();
d=typeof d=="string"?[d]:d;
E(d,function(g){
if(b[g]!==true)
{
loadJsFile(e+g,true,f.document,function(){
var h=b[g];
b[g]=true;
if(isArr(h))
{
for(var j in h)
{
h[j]();
}
}
});
}
});
}
function c(e,d)
{
e=(typeof e=="string")?[e]:e;
function f()
{
var g=true;
E(e,function(h){
g=g&&(b[h]===true);
});
g&&d();
return g;
}
if(!f())
{
E(e,function(g){
var h=b[g];
if(h===true)
{
return;
}
else if(!isArr(h))
{
b[g]=[f];
}
else{
h.push(f);
}
});
}
}
return ({load:a,wait:c});
})();
var _goClass,_goStatic;
function clsXfBatchDownload(b,a)
{
var c=this;
c._moXfLinkArray=b;
c._moTask={"sid":21513,"data":[]};
c._mfCallback=a;
if(typeof (XFLIB)=="undefined")
{
a("check");
var d=location.protocol==="https:"?"https://static.xf.qq.com/js/xf/xflib2.0.js":"http://x.soso.com/js/xf/xflib2.0.js";
loadJsFile(d,true);
}
waitFor(function(){
return typeof (XFLIB)!="undefined";
},function(e){
if(e)
{
if(!c._checkXfInstall())
{
a("check_err");
}
else{
setCookie("qm_ftn_key","",new Date(),"/","qq.com");
a("get_url");
c._getUrlAndInvoke();
}
}
else{
a("load_err");
}
});
}
clsXfBatchDownload.prototype={_checkXfInstall:function(){
return XFLIB.IsXFInstalled();
},_getUrlAndInvoke:function(){
this._doXfUrlDownload(this._makeGetUrlArray());
},_makeGetUrlArray:function(){
var b=[];
for(var a in this._moXfLinkArray)
{
b.push(this._moXfLinkArray[a].replace("t=exs_ftn_download","t=exs_ftn_getfiledownload&s=email").replace(/^http:\/\/mail.qq.com/,""));
}
return b;
},_doXfUrlDownload:function(a){
var c=Math.min(100,a.length),d={},e=this;
(function b(f){
if(f>=c)
{
return e._completeHandle(d,c);
}
QMAjax.send([a[f],"&nm=",f,"&rn=",Math.random()].join(""),{method:"GET",onload:function(g,h){
var j="name"+f;
if(g&&h.indexOf(j)>0)
{
d[j]=h.split('"')[1];
}
b(f+1);
}});
})(0);
},_getFileName:function(a){
var b=/fname=([^&]+)/g;
b.test(a);
return RegExp.$1;
},_completeHandle:function(b,a){
var g=this,f=0,c=g._moTask.data;
for(var d=0;d<a;d++)
{
if(typeof b["name"+d]!="undefined")
{
var e=b["name"+d].split("|");
if(e[0]!="error"&&e[0].indexOf("http://")==0)
{
c.push({"url":e[0].replace(/#/g,"_"),"file_name":g._getFileName(e[0]),"cookie":'FTN5K='+e[1]});
f++;
}
}
}
if(f<a)
{
g._mfCallback("geturl_err",a-f);
}
if(f>0)
{
showProcess(0);
g._invokeXf();
}
},_invokeXf:function(){
XFLIB.startDownload_BatchTask(this._moTask);
}};
var QMSender=function(a){
this._moWin=a.oWin;
this._moItems=[];
this._mbIsAutoWidth=false;
this._mfOnclickItemCallBack=null;
var b=this;
getTop().goUserInfo.wait(function(){
b._iniSender(a);
});
};
_goStatic=QMSender;
_goClass=_goStatic.prototype;
_goClass._iniSender=function(a){
var p=S("Senderdiv",this._moWin);
if(!p)
{
return;
}
try{
var q=getTop().goUserInfo.get('RealDefaultAllMail');
}
catch(K)
{
var g=arguments.callee;
return setTimeout(function(){
g.apply(this._moWin,arguments);
},500);
}
if(!q||!q.length)
{
return;
}
var F=a.nCurFolderId;
var G=a.sCurSaveFrom;
var f=a.bShowNode;
var I=typeof (a.sTitle)=="undefined"?"\u53EF\u9009\u62E9\u90AE\u7BB1\u522B\u540D\u6216POP\u6587\u4EF6\u5939\u7684\u90AE\u4EF6\u5730\u5740&#10;\u4F5C\u4E3A\u53D1\u4FE1\u5E10\u53F7\u3002":a.sTitle;
var H=typeof (a.sDesContent)=="undefined"?"\u53D1\u4EF6\u4EBA\uFF1A":a.sDesContent;
var b=a.bDraft||false;
var d=(getUrlParams(this._moWin.location)["s"]=="background"&&getUrlParams(this._moWin.location)["recoverCompose"]=="true");
var c=a.bFromReload;
this._mfOnclickItemCallBack=function(e){
var P=S("sendmailname_val",this._moWin);
if(!P)
{
return;
}
var U="",N=GelTags("span",S("sendmailname_val",this._moWin))[0],O=GelTags("b",S("sendmailname_val",this._moWin))[0],R=N.getAttribute("nickname"),M=R?R.split("|"):[];
if(M[0]==e.email)
{
U=M[1];
}
N.innerHTML=this._TEMPLATE._EMAIL_DISP.replace(e);
O.innerHTML=htmlEncode(U)||e.nick.replace(/(^\"|\"$)/g,"");
S("sendname",this._moWin).value=htmlDecode(O.innerHTML);
this._setSender(e);
if(e.sms)
{
loadJsFileToTop(["$js_path$qmtip270d91.js"]);
var Q=this._moWin;
waitFor(function(){
return QMTip;
},function(V){
if(V&&S("sendmailname",Q).value==e.email)
{
QMTip.show({tipid:10001,domid:'sendmailname_val',win:Q,msg:['<span class="black">\u5C06\u4F7F\u7528\u624B\u673A\u53F7\u90AE\u7BB1\u53D1\u4FE1\uFF0C\u8FD9\u6837\u5BF9\u65B9\u56DE<br/>\u4FE1\u60A8\u5C31\u4F1A\u83B7\u5F97\u77ED\u4FE1\u63D0\u9192\u3002<a onclick="window.open(\'http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=8&&no=1000605\')">\u8BE6\u60C5</a></span>'].join(''),arrow_direction:'down',arrow_offset:25,height_offset:4,tip_offset:-110,width:305,auto_hide:1,notlog:true,bForceShow:true});
}
});
}
callBack.call(this,a.onclickItemCallBack,[e]);
};
var D=typeof (a.sAlignType)=="undefined"?"left":D,J=a.sVerAlign||"bottom";
var h=300;
var m=parseInt(a.sWidth)||h;
var l,j;
this._mbIsAutoWidth=(m<0);
if(this._mbIsAutoWidth)
{
l=getStrDispLen(a.sCurSaveFrom)+60;
m=l+(gbIsIE?50:50);
}
else{
l=m-(gbIsIE?40:40);
}
j=l-25;
var C=Math.floor(m*23/h);
var B=Math.floor(m*20/h);
var o=[];
var v=[];
var w=null;
var r=this._CONST;
var u=this._TEMPLATE._EMAIL;
var t=this._TEMPLATE._EMAIL_DISP;
var s=this._TEMPLATE._DOMAIN;
var n=this._TEMPLATE._BASE;
var y=this._moItems=[];
var z=this;
for(var L=0;L<q.length;L++)
{
(function(){
var M=q[L];
var P=M.email;
var O=P.split("@").pop();
var e=r.hasOwnProperty(O);
var N={nick:M.nickname&&"\""+M.nickname+"\"",email:P,phone:M.phone,emaildisp:this._mbIsAutoWidth?P:subAsiiStr(P,e?B:C,"..."),signid:M.signid,domain:s.replace({images_path:getPath("image"),margin_top:(M.phone==1?416:(e?r[O]:321))}),sms:M.phone==1&&M.smsleft>0};
y.push(N);
o.push(extend({smtp:M.smtp==2?'':''},N));
v.push(function(Q){
z._mfOnclickItemCallBack(N);
});
if(!F&&!G&&getTop().goUserInfo.get('RealDefaulSender')==P)
{
w=N;
}
else if((G&&G.toLowerCase()==M.email)||(!G&&F&&F==M.folderid)||w==null)
{
w=N;
}
})();
}
p.innerHTML=n.replace({title:I,desContent:H,email_width:j,sel_width:l,width:m,images_path:getPath("image"),nick:w.nick,email:t.replace(w)});
var k=0,A=function(M,e){
if(!k)
{
for(var ab=0;ab<q.length;ab++)
{
var O=getStrDispLen(q[ab].email+(q[ab].smtp==2?'':''));
if(k<O)
{
k=O;
}
}
k=Math.max(M.clientWidth,k+42);
}
var X=calcPos(M),V=[],R=GelTags("span",M)[0],P=0;
for(var ab=0;ab<o.length;ab++)
{
R.innerHTML==o[ab].email&&(P=ab);
V.push({sId:ab,sItemValue:u.replace(extend({selected:R.innerHTML==o[ab].email},o[ab]))});
}
var U=M.getElementsByTagName("span")[0],aa="",Y=U&&U.innerHTML||"";
for(var ab=0;ab<q.length;ab++)
{
if(q[ab].email==Y)
{
aa=q[ab].nickname;
var Z=U.getAttribute("nickname"),Q=Z?Z.split("|"):[];
if(Q[0]==Y)
{
aa=Q[1];
}
break;
}
}
V.push({sId:"border",nHeight:5,sItemValue:['<div style="border-top:1px solid;margin-top:2px;padding-top:2px;font-size:0;line-height:0;height:0;"></div>'].join(""),bDisSelect:true});
V.push({sId:"send__nickname",nHeight:25,sItemValue:['<div style="padding-left:15px;overflow:hidden">','<span id="snn_getAlias" style="line-height:25px;">','<font style="color:#000">\u53D1\u4FE1\u6635\u79F0\uFF1A</font>','<span title="',aa,'">',subAsiiStr(aa,16,"...",true),'</span>','&nbsp;<a href="javascript:;" onclick="getTop().QMSender.initAlias(\'',aa,'\');return false">\u4FEE\u6539</a>&nbsp;&nbsp;&nbsp;&nbsp;','</span>','<span id="snn_setAlias" style="display:none;line-height:25px;">','<input onkeyup="if(event.keyCode==13){getTop().QMSender.setAlias()};" class="text" onchange="" style="width:120px" type="text" value=""/>','&nbsp;<input type="button" value="\u786E\u8BA4" onclick="getTop().QMSender.setAlias();return false" />','</span>','</div>'].join(""),bDisSelect:true});
var N=V.length>17?17:V.length,W=new (getTop().QMMenu)({oEmbedWin:z._moWin,sId:"sendermenu",nMaxItemView:17,nX:D=="left"?X[3]:X[3]-(k-this.clientWidth),nY:J=="bottom"?X[2]:(X[2]-21*N-21),nMinWidth:230,bAnimation:false,nItemHeight:21,oItems:V,onitemclick:function(ac){
v[ac]();
},onshow:function(){
if(!e)
{
W.selectItem(P);
}
else{
getTop().QMSender.initAlias(aa);
}
}});
};
this.reEditAliasName=A;
S("sendmailname_val",this._moWin).onclick=function(){
A(this);
};
if(S("sendmailname",this._moWin))
{
S("sendmailname",this._moWin).value=w.email;
}
var x=this._moWin;
if(x.setSignature&&!b&&!d)
{
if(getTop().goUserInfo.get('RealUserSignatureId')!=-1)
{
S("signtype",this._moWin)&&(S("signtype",this._moWin).value=getTop().goUserInfo.get('RealUserSignatureId'));
}
if(!c)
{
x.setSignature("sign",getTop().goUserInfo.get('RealUserSignatureId'));
}
}
show(f?p[f]:p,true);
if(o.length>1)
{
getTop().requestShowTip("sendmailname_val",17,this._moWin);
}
};
_goStatic.setAlias=function(){
var e=getTop(),f=e.getMainWin(),g=S("sendermenu_QMMenu",f)?"sendermenu_QMMenu_":"sendermenu__",a=GelTags("input",S(g+"snn_setAlias",f))[0],c=GelTags("span",S(g+"snn_getAlias",f))[0],b=GelTags("span",S("sendmailname_val",f))[0],d=GelTags("b",S("sendmailname_val",f))[0],h=a.value;
S("sendname",f).value=h||" ";
b.setAttribute("nickname",[b.innerHTML,h].join("|"));
d.innerHTML=htmlEncode(h);
c.innerHTML=htmlEncode(h);
if(S("useraddr").innerHTML==b.innerHTML)
{
S("useralias").innerHTML=htmlEncode(h);
}
show(S(g+"snn_setAlias",f),false);
show(S(g+"snn_getAlias",f),true);
e.LogKV('nicksecconfirm|update|kv');
};
_goStatic.initAlias=function(a){
var d=getTop(),e=d.getMainWin(),f=S("sendermenu_QMMenu",e)?"sendermenu_QMMenu_":"sendermenu__",c=GelTags("span",S(f+"snn_getAlias",e))[0],b=GelTags("input",S(f+"snn_setAlias",e))[0];
b.value=htmlDecode(c.innerHTML);
show(S(f+"snn_setAlias",e),true);
show(S(f+"snn_getAlias",e),false);
setTimeout(function(){
b.focus();
b.select();
},0);
};
_goClass._setSender=function(a){
var b=this._moWin;
S("sendmailname",b).value=a.email;
if(b.setSignature)
{
b.setSignature("sign",a.signid==-2?getTop().goUserInfo.get('RealUserSignatureId'):a.signid);
}
};
_goClass.setSenderSelected=function(a){
var b=this._moItems;
for(var c=b.length-1;c>=0;c--)
{
if(b[c].email==a)
{
this._mfOnclickItemCallBack(b[c]);
return;
}
}
};
_goClass._CONST={"hotmail.com":0,"live.com":0,"live.cn":0,"msn.com":0,"msn.cn":0,"yahoo.com.cn":30,"yahoo.cn":30,"yahoo.com":30,"ymail.com":30,"rocketmail.com":30,"gmail.com":61,"vipgmail.com":61,"sina.com":95,"sina.com.cn":95,"vip.sina.com":95,"my3ia.sina.com":95,"sina.cn":95,"163.com":383,"vip.163.com":383,"126.com":352,"vip.126.com":352,"yeah.net":223,"foxmail.com":159,"sohu.com":193,"vip.sohu.com":193,"vip.qq.com":288,"qq.com":288,"21cn.com":256,"21cn.net":256};
_goClass._TEMPLATE={_BASE:T(['<div title="$title$" style="float:left; margin-left:-3px;" class="textoftitle">&nbsp;$desContent$</div>','<div id="sendmailname_val" unselectable="on" onmousedown="return false" ','style="cursor:pointer; padding:0 0 0 3px;  float:left;">','<b>$nick$</b> &lt;<span>$email$</span>&gt;<span class="addrtitle" style="font-family: arial,sans-serif; padding-left:4px; font-size:9px; position:relative; top:-1px;" >\u25BC</span>','</div>']),_EMAIL:TE(['<div class="composeAccount" style="">','<input type="button" class="ft_upload_success" style="$@$if(!$selected$)$@$visibility:hidden;$@$endif$@$">$email$$smtp$','</div>']),_EMAIL_DISP:T(['$email$']),_DOMAIN:T(['<img src="$images_path$spacer1e9c5d.gif" style="background-position:0 -$margin_top$px;" valign="absmiddle" >'])};
var QMAutoComplete=inherit("QMAutoComplete",Object,function(a){
return {$_constructor_:function(b){
this._initialize(b);
},show:function(b){
var c=this;
c._moData=b;
return c._show();
},close:function(){
var b=this;
b._moMenu&&b._moMenu.hide();
return b;
},isShow:function(){
var b=this._moMenu;
return b&&b.isShow();
},getSelection:function(){
return this._moData[this._moMenu.getSelectItemId()];
},setHeader:function(b){
var c=this._moMenu;
return c&&c.setHeader(b);
},_initialize:function(b){
var e=this,d=e._moInput=b.oInput;
e._moPosObj=b.oPosObj||d;
e._moWin=e._moPosObj.ownerDocument.parentWindow||e._moPosObj.ownerDocument.defaultView;
e._moData=null;
e._moMenu=null;
e._msDefaultValue=b.defaultValue||"";
e._mbsupportKey=!(b.notSupportKey||0);
e._msType=b.type||"";
d.setAttribute("autocomplete","off");
e._msUrl=b.sUrl;
e._ondata=b.ondata;
e._nDelay=e._msUrl?500:20;
e._nDelay=(typeof b.nDelay=="number")?b.nDelay:e._nDelay;
e._ongetdata=b.ongetdata;
e._onselect=b.onselect;
e._onclick=b.onclick;
e._onkeydown=b.onkeydown;
e._ontouchstart=b.ontouchstart;
var c={keydown:e._bind(e._keydown),keypress:e._bind(e._keypress),focus:e._bind(e._focus),blur:e._bind(e._blur)};
if('oninput' in d)
{
c.input=e._bind(e._input);
}
else{
c.keyup=e._bind(e._keyup);
}
addEvents(d,c);
e._moMenu=new QMAutoComplete._QMAutoCompleteMenu({sId:unikey(),oItems:[],supportKey:e._mbsupportKey,oEmbedWin:e._moWin,nWidth:b.nWidth||"auto",nMinWidth:b.nMinWidth||100,nItemHeight:b.nItemHeight||21,nMaxItemView:b.nMaxItemView||0,type:b.type,nZIndex:b.nZIndex||1121,sClassName:b.sClassName,oClass:b.oClass,bDisplay:false,onselect:function(f){
callBack.call(e,e._onselect,[e._moData[f]]);
},onclick:function(f,g){
callBack.call(e,e._onclick,[f,e._moData[g]]);
},ontouchstart:function(f){
callBack.call(e,e._ontouchstart,[f]);
}});
return e._setTextDefaultValue();
},_bind:function(b){
var c=this;
return function(d){
return b.call(c,d);
};
},_keypress:function(b){
if(gbIsOpera&&b.keyCode==13)
{
preventDefault(b);
}
},_keyup:function(b){
if(!b.ctrlKey)
{
var c=b.keyCode,d=this;
if(!(c==38||c==40||(c==13&&d._mnKeydownCode!=229)||c==27))
{
d._getItemData();
}
}
},_getItemData:function(){
var b=this;
b._keyupTimeout&&clearTimeout(b._keyupTimeout);
b._keyupTimeout=setTimeout(function(){
if(b._msUrl)
{
var c=trim(b._moInput.value);
if(c=="")
{
b.close();
}
else{
c=encodeURIComponent(c);
QMAjax.send([b._msUrl,"&resp_charset=UTF8&q=",c].join(""),{method:"get",onload:function(d,e){
if(d)
{
b._moData=b._ondata.call(b,e);
b._show()._keyupTimeout=0;
}
}});
}
}
else{
b._moData=b._ongetdata(b._moInput);
b._show()._keyupTimeout=0;
}
},b._nDelay);
},_input:function(){
this._getItemData();
},_keydown:function(b){
var d=this,c=b.keyCode;
callBack.call(d,d._onkeydown,[b,1]);
d._mnKeydownCode=c;
if(d.isShow()&&this._mbsupportKey)
{
switch(c)
{case 13:
callBack.call(d,d._onselect,[d.getSelection()]);
d.close();
preventDefault(b);
break;
case 38:
d._moMenu.selectItem(-1);
preventDefault(b);
break;
case 40:
d._moMenu.selectItem(1);
preventDefault(b);
break;
case 9:
callBack.call(d,d._onselect,[d.getSelection()]);
d.close();
break;
case 27:
d.close();
preventDefault(b);
break;
}
}
callBack.call(d,d._onkeydown,[b,0]);
},_focus:function(b,c){
var d=this;
d._mbFocus=true;
c&&d._moInput.focus();
return d._setTextDefaultValue();
},_blur:function(b){
var c=this;
c._mbFocus=false;
setTimeout(function(){
!c._mbFocus&&c.close()._setTextDefaultValue();
},20);
},_setTextDefaultValue:function(){
var b=this;
if(b._msDefaultValue)
{
var c=b._moInput,e=c.value;
if(b._mbFocus)
{
if(e==b._msDefaultValue)
{
var d=c.className.replace(/graytext/ig,"");
if(this._msType=="rss")
{
d=d.replace(/textInput/ig," textInput2");
}
c.className=d;
c.value="";
}
}
else{
if(e=="")
{
var d=(this._msType=="rss"?c.className.replace(/textInput2/ig," textInput"):c.className)+" graytext";
c.className=d;
c.value=b._msDefaultValue;
}
}
}
return b;
},_show:function(){
var c=this;
if(!c._moData||c._moData.length==0)
{
c.close();
}
else{
var b=calcPos(c._moPosObj);
c._moMenu.setContent({oItems:c._moData}).option("nX",b[3]).option("nY",b[2]);
}
return c;
}};
});
QMAutoComplete._QMAutoCompleteMenu=inheritEx("QMAutoCompleteMenu",QMPanel,function(a){
return {processHtml_:function(b){
return b;
},initMemVar_:function(b){
callBack.call(this,a.initMemVar_,[b]);
if(b.supportKey)
{
this._selectItemWithId(this._mnSelectItem=0);
}
},setEvent_:function(){
var c=this._moConfig,e=this,d=this.S("_menuall_"),f=this.S("_title_"),b=function(g){
var g=g||c.oEmbedWin.event,h=getEventTarget(g);
while(h&&h!=d&&h.parentNode!=d)
{
h=h.parentNode;
}
return h;
};
if(c.supportKey)
{
d.onmouseover=function(g){
if(now()-(e._mnRenderTime||0)>500)
{
var j=b(g),h=parseInt(j.id.substr(e._msPanelId.length+1));
if(!isNaN(h))
{
e._selectItemWithId(h);
}
}
};
f.onclick=function(g){
var g=g||c.oEmbedWin.event;
callBack.call(e,c.onclick,[g,""]);
};
d.onclick=function(g){
var h=b(g),j=h.getAttribute("key");
callBack.call(e,c.onclick,[g,j]);
if(j)
{
callBack.call(e,c.onselect,[j]);
setClass(h,"menu_item");
if(c.type!="rss")
{
e.hide();
}
}
};
}
addEvents(this._moPanelDom,{mousedown:preventDefault,touchstart:function(g){
callBack.call(e,c.ontouchstart,[g]);
}});
},dfConfig_:function(b){
var d=b.oItems,c=(b.nItemHeight||21)*(b.nMaxItemView||d.length);
this.configHelp_(b,{mheight:c,nWidth:"auto",nHeight:c,nZIndex:b.nZIndex||1121});
this.configHelp_(b,{sStyle:"background:#fff"},true);
return callBack.call(this,a.dfConfig_,[b]);
},_genItemCode:function(b){
var f=b.oItems,e=[],d=this._moConfig,g=(d&&d.oClass&&d.oClass.classnormal)?d.oClass.classnormal:"menu_item";
_oTmpl=getTop().TE(['<div unselectable="on" style="height:$height$px;" onclick=";" ','$@$if($sId$ || $sId$ === 0)$@$','key="$idx$" id="$panelId$_$itemLen$" class="$sClass$" >','$@$else$@$','class="menu_item_onfun">','$@$endif$@$','$sItemValue$','</div>']);
this._mnItemLen=0;
for(var h=0,c=f.length;h<c;h++)
{
e.push(_oTmpl.replace(getTop().extend(f[h],{height:f[h].nItemHeight||b.nItemHeight,idx:h,panelId:this._msPanelId,itemLen:this._mnItemLen,sClass:g})));
this._mnItemLen++;
}
return e;
},insertHtml_:function(b){
var d=b.oItems,c=['<div style="margin:0px;">','<div class="menu_base">','<div class="menu_bd" style="padding:0;">','<div unselectable="on" id="',this._msPanelId,'__title_" style="white-space:nowrap;width:',b.nMinWidth,'px;line-height:',b.nItemHeight,'px;',(b.header?'':'display:none;'),'">',b.header,'</div>','<div unselectable="on" id="',this._msPanelId,'__menuall_" style="overflow-y:auto;height:auto;line-height:',b.nItemHeight,'px;width:'];
if(b.nWidth=="auto")
{
c.push(!getTop().gbIsIE?b.nMinWidth+"px":"auto");
}
else{
c.push(b.nWidth-(getTop().gbIsIE?0:2),"px;overflow-x:hidden;");
}
c.push('">');
c=c.concat(this._genItemCode(b));
c.push('</div></div></div></div>');
b.sBodyHtml=c.join("");
callBack.call(this,a.insertHtml_,[b]);
},_adjustSize:function(b,c){
var d=this._moConfig.nMaxItemView||this._moConfig.oItems.length,e=this._mnItemLen<=d?"auto":this._moConfig.nItemHeight*d;
this.option("nHeight",e);
b.style.height=e=="auto"?"auto":e+"px";
if(this._moConfig.nWidth!="auto")
{
if(b.style.width!=this._moConfig.nWidth)
{
c.style.width=b.style.width=this._moConfig.nWidth-(getTop().gbIsIE?0:2)+"px";
}
}
else{
if(gnIEVer>6&&b.ownerDocument.documentElement.clientHeight)
{
c.style.width=b.style.width="auto";
}
if(b.offsetWidth>10)
{
c.style.width=b.style.width=(Math.max(b.offsetWidth,b.scrollWidth,c.offsetWidth,this._moConfig.nMinWidth)+(gbIsIE?(gnIEVer>6?18:0):b.offsetWidth-b.scrollWidth))+"px";
if(gnIEVer==8)
{
b.style.zoom="";
b.style.zoom=1;
}
}
}
},setHeader:function(b){
if(b)
{
this.S("_title_").innerHTML=this.processHtml_(b);
show(this.S("_title_"),1);
}
else if(b=="")
{
show(this.S("_title_"),0);
}
},setContent:function(b){
var d=this,c=d.S("_menuall_"),e=d.S("_title_");
this.configHelp_(d._moConfig,b,true);
if(d._moConfig.nWidth=="auto")
{
e.style.width=c.style.width=gbIsIE&&gnIEVer!=7?d._moConfig.nMinWidth+"px":"auto";
}
d.setHeader(b.oItems.header);
c.innerHTML=d._genItemCode(b).join("");
if(d._moConfig.supportKey)
{
d.selectItem(d._mnSelectItem=0);
}
d.show();
d._adjustSize(c,e);
callBack.call(d,d._moConfig.onload,[b]);
d._mnRenderTime=now();
return d;
},selectItem:function(b){
var d=this,c=d._selectItemWithId((d._mnSelectItem+b+d._mnItemLen)%d._mnItemLen);
scrollIntoMidView(c,d.S("_menuall_"));
},getSelectItemId:function(){
var b=this.S(this._mnSelectItem);
return b&&b.getAttribute("key");
},_selectItemWithId:function(b){
var d=this.S(this._mnSelectItem),c=this._moConfig,e=(c&&c.oClass&&c.oClass.classnormal)?c.oClass.classnormal:"menu_item",f=(c&&c.oClass&&c.oClass.classhigh)?c.oClass.classhigh:"menu_item_high";
if(d)
{
d.className=e;
}
if(d=this.S(b))
{
d.className=f;
this._mnSelectItem=b;
}
return d;
}};
});
function AjaxSendMailMgr(a)
{
var b=getUrlParams(getTop().getMainWin().location)["folderkey"];
a.oQuery.push('&t=mail_mgr2&resp_charset=UTF8&ef=js&sid=',getSid(),getTop().bnewwin?'&newwin=true':'');
a.oQuery.push(b?("&folderkey="+b):"");
QMAjax.send(a.sUrl||'/cgi-bin/mail_mgr',{content:a.oQuery.join(""),onload:function(d,f,e){
if(d)
{
var g=evalValue(f);
if(f.indexOf("cgi exception")==-1)
{
a.onload(g,f,e);
return;
}
else if(g&&g.errcode=="-2")
{
showError("\u767B\u5F55\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
setTimeout(function(){
getTop().location.href="/cgi-bin/loginpage?s=session_timeout";
},500);
return;
}
else if(g&&g.errmsg)
{
showError(g.errmsg,0,true);
return;
}
}
if(a.sDefErrMsg)
{
showError(a.sDefErrMsg);
}
if(e&&e.status==0&&e.readyState==4)
{
var c=getTop().getMainWin().BJ_REPORT;
c&&c.report("maybe crossdomian");
c&&c.report("maybe crossdomian : "+a.oQuery[0]+', response : '+f);
}
}});
}
function setRollBack(a,b)
{
if(a&&a>0)
{
setGlobalVarValue('DEF_ROLLBACK_ACTION',{msg:b,rbkey:a});
}
}
function getRollbackText(a)
{
return a&&a>0?"&nbsp;<a href='#' style='color:white' onclick='getTop().rollback(2);return false;'>[\u64A4\u9500]</a>":"";
}
function setMailFilter(b,a)
{
var c=true,j=a.oMail,e=j.length,h=QMMailList._singleAddrNick(a),l=h[1],k=h[0];
function d(p)
{
if(/^service@tencent.com$/.test(p))
{
return false;
}
return !/(10000|newsletter-noreply|postmaster)@qq.com/g.test(p);
}
for(var o=e-1;o>=0;o--)
{
var f=j[o].oChk;
if(f&&/^[@C]/.test(f.value))
{
c=false;
}
}
c=c&&a.sFid==1&&e>1&&k&&d(k);
if(!c)
{
return;
}
b.sEmail=k;
b.sNickname=htmlEncode(l);
b.sFolderName=htmlEncode(b.sFolderName);
var m='\u63D0\u793A',n="&fun=addfilter&t=foldermgr_json&resp_charset=UTF8&ef=js&sid="+getSid(),g=({move:{_nType:3,_sSuccessMsg:"\u79FB\u52A8",_sFilterText:"\u81EA\u52A8\u79FB\u52A8\u5230\u6587\u4EF6\u5939 <span class='bold'>$sFolderName$</span> \u4E2D",_oUrl:T(n+'&action=move&sender=$sEmail$&folderid=$sFolderId$&oldmail=$oldmail$')},star:{_nType:2,_sSuccessMsg:"\u6807\u8BB0",_sFilterText:"\u81EA\u52A8\u6807\u661F",_oUrl:T(n+'&action=star&sender=$sEmail$&oldmail=$oldmail$')},tag:{_nType:2,_sSuccessMsg:"\u6807\u8BB0",_sFilterText:"\u81EA\u52A8\u8BBE\u7F6E $sTagName$ \u6807\u7B7E",_oUrl:T(n+'&action=tag&sender=$sEmail$&tagid=$sTagId$&oldmail=$oldmail$')},read:{_nType:1,_sSuccessMsg:"\u6807\u8BB0",_sFilterText:"\u81EA\u52A8\u6807\u4E3A\u5DF2\u8BFB",_oUrl:T(n+'&action=read&sender=$sEmail$&oldmail=$oldmail$')},"delete":{_nType:4,_sSuccessMsg:"\u5220\u9664",_sFilterText:"\u81EA\u52A8\u5220\u9664",_oUrl:T(n+'&action=delete&sender=$sEmail$&oldmail=$oldmail$')}})[b.sFilterType];
ossLog("realtime","all","stat=noting&locval=,,auto_filter_label,"+g._nType);
confirmBox({style:'cnfx_move',confirmBtnTxt:'\u521B\u5EFA',cancelBtnTxt:'\u5173\u95ED',sType:"custom",recordInfo:'\u5BF9\u5386\u53F2\u90AE\u4EF6\u6267\u884C\u8BE5\u6536\u4FE1\u89C4\u5219',enableRecord:true,defaultChecked:true,title:m,msg:T(['<div class="cnfx_content">','<span class="icon_finish_b" style="float:left;margin:15px 10px 0;display:$imgdisp$;"></span>','<table style="width:$width$px;height:$height$px;">','<tr><td style="vertical-align:top;"><div style="padding-top:17px;word-break:break-all;line-height:150%;" class="bold b_size">','\u5DF2\u6210\u529F',g._sSuccessMsg,'\u90AE\u4EF6','</div></td></tr>','</table>','</div>','<div id="receiver_rule" style="border-top: 1px solid #E3E3E3; margin-top: 4px; width: 400px; padding: 18px 30px;">','<h3 class="b_size bold">\u662F\u5426\u521B\u5EFA\u6536\u4FE1\u89C4\u5219\uFF1F</h3>','<div class="b_size" style="border-left: 3px solid #DEDEDE; margin-left: 16px; padding-left: 10px; margin-top: 10px;">','<div style="width:400px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">','\u5982\u679C \u53D1\u4EF6\u4EBA\u662F <span class="bold">$sNickname$</span>&lt;$sEmail$&gt;\uFF0C','</div>','<div style="margin: 6px 0pt 8px 14px;">\u5219 ',g._sFilterText,'\u3002</div>','<div class="f_size">','<input type="checkbox" checked="checked" id="recordstatus" style="vertical-align: middle;"><label for="recordstatus">\u5BF9\u5386\u53F2\u90AE\u4EF6\u6267\u884C\u8BE5\u6536\u4FE1\u89C4\u5219</label>','</div>','</div>','</div>','']).replace(b),onreturn:function(p,q,r){
if(p)
{
b.oldmail=q?1:0;
QMAjax.send('/cgi-bin/foldermgr',{content:g._oUrl.replace(b),onload:function(s,t){
if(s&&t.indexOf("addfilter")>0)
{
showInfo("\u521B\u5EFA\u6210\u529F");
if(q)
{
reloadFrmLeftMain(false,true);
}
}
else{
showError("\u521B\u5EFA\u5931\u8D25");
}
}});
}
},onload:function(){
var p=this;
p.S("_foot_").style.background="white";
if(b.sFilterType=="delete")
{
show(p.S("receiver_rule"),false);
show(p.S("confirm"),false);
}
}});
return;
}
function colorTag(a,d,c)
{
a=a||c.event;
stopPropagation(a);
preventDefault(a);
var r="tag"+d,e=QMMenu(r,"isClose");
if(e===false)
{
return;
}
var b=getEventTarget(a),f=function(s){
return /\bflagbg(\d+)\b/.test(s)&&RegExp.$1;
},l=f(b.className),n=T(['<div class="flag_menu_item"><div id="flagbg$flagbg$" class="flagbg$flagbg$"></div></div>']),p=[['0','1','2','3','4'],['5','6','7','8','9'],['11','12','13','14','15'],['16','17','18','19','20'],['21','22','23','24','25'],['26','27','28','29','30'],['31','32','33','34','35']],m={nHeight:5,sItemValue:'<div style="height:1px; overflow:hidden;"></div>'},q=[];
q.push(m);
for(var g=0,h=p.length;g<h;g++)
{
for(var o=[],j=0,k=p[g].length;j<k;j++)
{
o.push(n.replace({flagbg:p[g][j]}));
}
q.push({nHeight:24,sItemValue:o.join("")});
if(g==1)
{
q.push(m);
}
}
q.push(m);
new QMMenu({oEmbedWin:c,sId:r,nWidth:148,oItems:q,onshow:function(){
},onload:function(){
var z=this,A=calcPos(b),u=parseInt(z.option("nHeight")),w=A[2],t=bodyScroll(c,'clientHeight')+bodyScroll(c,'scrollTop'),v=w-u-b.clientHeight;
if(v>0&&w+u>t)
{
w=v;
}
z.option("nX",A[3]).option("nY",w);
var y=z.S("_menuall_"),x=null;
function s(B)
{
var C=getEventTarget(B);
while(C&&C!=y)
{
if(C.id.indexOf("flagbg")>-1)
{
return C;
}
C=C.parentNode;
}
return null;
}
addEvents(y,{mousemove:function(B){
var C=s(B);
if(x)
{
x.parentNode.style.borderColor="#fff";
}
if(x=C)
{
C.parentNode.style.borderColor="#aaa";
}
},click:function(B){
var C=s(B);
if(C)
{
colorTag._apply(d,f(C.className),l,b,c);
z.close();
}
}});
}});
}
colorTag._apply=function(e,a,b,c,d){
var f='\u9009\u62E9\u6807\u7B7E\u989C\u8272\u6210\u529F';
if(a==b)
{
return showInfo(f);
}
QMAjax.send('/cgi-bin/foldermgr',{content:['&fun=setcolor&sid=',getSid(),"&tagid=",e,"&flagbg=",a].join(""),onload:function(g,j,h){
var m=d.location.href,l=getMainWin().location.href;
if(g&&j.indexOf(f)>0)
{
setClass(c,c.className.replace(/\bflagbg\d+\b/i,"flagbg"+a));
if(m.indexOf('t=folderlist_setting')>-1)
{
reloadLeftWin();
}
else{
if(/cgi-bin\/(mail_list|readmail)|t=folderlist_setting/.test(l))
{
reloadFrmLeftMain(false,true);
}
}
return showInfo(f);
}
var k=getErrMsg(h,'msg_txt');
showError(k||"\u6807\u7B7E\u989C\u8272\u8BBE\u7F6E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
}});
};
function setMailRead(a,b)
{
var t=b.oMail,k=t.length,f=0,m=a?1:-1,x=[],v=getMainWin(),c=isSelectAllFld(v),G=b.sFid,J,d=checkSelectGroup();
if(!k)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
else if(c||d)
{
var w=getSelectAllParam(v),o=a?w.totalcnt:0;
J=w.groupid;
x=['mailaction=',w.type,'&fun=mail_flag',a?'unread':'read'];
w.fid&&x.push('&folderid=',w.fid);
w.tid&&x.push('&srctagid=',w.tid);
J&&x.push('&groupid=',J);
if(w.flags)
{
var r=w.flags.split("|");
E(r,function(j){
if(j!="")
{
x.push('&flag=',j);
}
});
}
d&&x.push(getSelectGroupUrl());
setFolderUnread(G,o);
setMailListInfo(o,null);
}
else{
x=['mailaction=mail_flag&flag=new&status=',a];
b.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=21");
}
showSelectALL(v,false);
var s={},y={system:{cnt:"0",foldertagid:"sysmsg",notcnt:"0",notfoldertagid:"notsysmsg"},friend:{},important:{}};
for(var L=0;L<k;L++)
{
var u=t[L];
if(u.bUnr!=a||u.sMid=='AC0000-00000000000000000000000')
{
var g=0;
if(u.sMid=='AC0000-00000000000000000000000')
{
;(function(){
var P=S('adsUnread',b.oWin);
var O=a?parseInt(attr(P,'total'),10):0;
var j=getMLMailItemUnreadNum.getAdNum(u);
P.innerHTML='('+O+')';
g=Math.abs(O-j);
})();
if(!g)
{
continue;
}
}
else{
g=1;
}
var l=m*g;
f+=g;
x.push('&mailid=',u.sMid);
if(u.oChk)
{
u.oChk.setAttribute('unread',a?'true':'false');
var I=u.oChk.getAttribute('gid');
setGroupUnread(I,getGroupUnread(I)+l);
}
if(u.oTable&&!a)
{
var z=GelTags("table",u.oTable)[0],C=z.rows[0].cells[1];
if(C.className=="new_g")
{
C.innerHTML="";
}
}
if(!c)
{
var q={};
if(u.sFid)
{
q[u.sFid]=true;
}
else if(G)
{
q[G]=true;
}
if(u.bAddrvip)
{
q.addrvip=true;
}
if(u.bStar&&G!=5&&G!=6)
{
q.starred=true;
}
for(var H in q)
{
s[H]=(s[H]||0)+l;
}
}
var e=false;
for(var A=u.oTagIds,n=A.length,M=0;M<n;M++)
{
var K='tag_'+A[M];
setTagUnread(K,getFolderUnread(K)+l);
if(!e)
{
var B=S(["folder_tag_",A[M],"_td"].join(""));
if(attr(B,"st")!="true")
{
e=true;
}
}
}
if(!c&&e)
{
setTagUnread('tag',getFolderUnread('tag')+m);
}
if(!c)
{
E(u.oSysTag,function(O,j){
if(y[j])
{
var P=y[j];
O=="1"&&y[j].cnt&&(y[j].cnt+g);
O=="0"&&y[j].notcnt&&(y[j].notcnt+g);
}
});
}
}
}
QMMailList.getCurrentInstance(b,'setMailRead',a).selectedUICustom(b,'setMailRead',a);
if(f||c)
{
var h=m*f;
if(!c)
{
E(s,function(j,O){
setFolderUnread(O,getFolderUnread(O)+j);
});
setMailListInfo(getMailListInfo().unread+h,null);
}
if(!c)
{
E(y,function(O,j){
if(y[j])
{
y[j].cnt&&setFolderUnread(y[j].foldertagid,getFolderUnread(y[j].foldertagid)+m*y[j].cnt);
y[j].notcnt&&setFolderUnread(y[j].notfoldertagid,getFolderUnread(y[j].notfoldertagid)+m*y[j].notcnt);
}
});
}
rdVer(u.sMid,1);
var D=b.oWin;
if(G==8)
{
if(c)
{
if(J)
{
h=parseInt(S("folder_"+J,D).getAttribute("totalCnt"));
setGroupUnread(J,a?h:0);
!a&&(h*=-1);
setGroupUnread("gall",getGroupUnread("gall")+h);
}
else{
var p=finds("#folder_group a.left",D.document);
h=0;
E(p,function(O){
var P=O.id.split("_")[1],j=parseInt(O.getAttribute("totalCnt"));
setGroupUnread(P,a?j:0);
h+=j;
});
setGroupUnread("gall",a?h:0);
}
}
else{
setGroupUnread("gall",getGroupUnread("gall")+h);
}
}
function N()
{
var O=0,j=0;
for(var R=0;R<k;R++)
{
var P=t[R];
if(P.bUnr!=a&&P.bStar)
{
O++;
}
if(!a)
{
QMMailCache.addData(P.sMid,{bUnread:null});
j=1;
}
else{
QMMailCache.addData(P.sMid,{bUnread:true});
j=1;
}
}
if(j)
{
QMMailCache.setExpire();
}
try{
if(bnewwin)
{
_oTop.goNewWin(D.makeMailListUrl(),true,true);
}
else{
if(D.goback)
{
D.goback();
}
}
}
catch(Q)
{
if(D.goback)
{
D.goback();
}
}
if(/folderid=(1|pop|personal|all)/i.test(D.location.href)||c||d)
{
reloadLeftWin();
}
if(!a&&f>4&&!b.bNoShowFilter)
{
setMailFilter({sFilterType:"read"},b);
}
}
if(b.bNoSendMailMgr)
{
N();
return;
}
var F=a?'\u8BBE\u7F6E\u672A\u8BFB':'\u8BBE\u7F6E\u5DF2\u8BFB';
AjaxSendMailMgr({oQuery:x,sSuccessMask:"new successful",sDefErrMsg:F+'\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(j,P,O){
N();
setRollBack(j.rbkey,F+"\u90AE\u4EF6");
}});
}
}
function pendingMail(a,c,b)
{
var h=c.oMail,f=h.length,m=[],k=getMainWin(),d=isSelectAllFld(k),n=c.sFid,e=checkSelectGroup();
if(!f)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
else if((d&&f>1)||e)
{
var l=getSelectAllParam(k);
m=['mailaction=',e?"mail_pendingall":l.type,'&fun=mail_flag',a?'pending':'unpending'];
l.fid&&m.push('&folderid=',l.fid);
l.tid&&m.push('&srctagid=',l.tid);
l.groupid&&m.push('&groupid=',l.groupid);
if(l.flags)
{
var g=l.flags.split("|");
E(g,function(p){
if(p!="")
{
m.push('&flag=',p);
}
});
}
e&&m.push(getSelectGroupUrl());
}
else{
m=['mailaction=mail_flag&flag=pending'];
}
showSelectALL(k,false);
for(var o=0;o<f;o++)
{
var j=h[o];
m.push('&mailid=',j.sMid);
}
m.push('&status='+a);
AjaxSendMailMgr({oQuery:m,sSuccessMask:'pending successful',sDefErrMsg:a?'\u6807\u8BB0\u5F85\u529E\u72B6\u6001\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5':'\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(p,r,q){
showInfo(a?"\u8BBE\u7F6E\u6210\u529F":"\u90AE\u4EF6\u5DF2\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210");
if(b)
{
b(p);
}
else{
k.location.replace(k.location);
}
}});
}
;function starMail(a,b)
{
var j=b.oMail,e=j.length,g={fg:0,'fg fs1':1,qm_ico_flagoff:2,qm_ico_flagon:3},p=['fg','fg fs1','qm_ico_flagoff','qm_ico_flagon'],n=[],l=getMainWin(),c=isSelectAllFld(l),q=b.sFid,d=checkSelectGroup();
if(!e)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
else if((c&&e>1)||d)
{
var m=getSelectAllParam(l);
n=['mailaction=',m.type,'&fun=mail_flag',a?'star':'unstar'];
m.fid&&n.push('&folderid=',m.fid);
m.tid&&n.push('&srctagid=',m.tid);
m.groupid&&n.push('&groupid=',m.groupid);
if(m.flags)
{
var h=m.flags.split("|");
E(h,function(s){
if(s!="")
{
n.push('&flag=',s);
}
});
}
d&&n.push(getSelectGroupUrl());
}
else{
n=['mailaction=mail_flag&flag=star'];
b.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=22");
}
showSelectALL(l,false);
for(var r=0;r<e;r++)
{
var k=j[r];
n.push('&mailid=',k.sMid);
if(a==null&&k.oStar)
{
a=!(g[k.oStar.className]&1);
}
}
for(var r=0,f=0;r<e;r++)
{
var k=j[r],o=k.oStar;
if(k.oChk)
{
k.oChk.setAttribute('star',a?'1':'0');
}
if(k.bStar!=a)
{
f+=k.bUnr?getMLMailItemUnreadNum.getNum(k):0;
QMMailCache.addData(k.sMid,{star:a});
rdVer(k.sMid,1);
}
if(o)
{
setClass(o,p[(g[o.className]&2)+(a?1:0)]);
o.title=a?'\u53D6\u6D88\u661F\u6807':'\u6807\u4E3A\u661F\u6807';
}
}
n.push('&status='+a);
if(f&&(q!=5&&q!=6))
{
setFolderUnread("starred",getFolderUnread("starred")+(a?1:-1)*f);
}
AjaxSendMailMgr({oQuery:n,sSuccessMask:'star successful',sDefErrMsg:a?'\u6807\u8BB0\u661F\u6807\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5':'\u53D6\u6D88\u661F\u6807\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(s,u,t){
QMMailList.getCurrentInstance(b,'starMail',a).selectedUICustom(b,'starMail',a);
if(!callBack(b.oncomplete,[b,a]))
{
var v=b.oWin;
if(v.showMailFlag)
{
v.showMailFlag(a);
}
}
if(a&&e>2)
{
setMailFilter({sFilterType:"star"},b);
}
(c||d)&&reloadLeftWin();
changeSelectAllCkbStatus();
}});
}
function topMail(a,b)
{
var f=getTop(),d=b.oMail,c=d.length,e=['mailaction=mail_flag&flag=top'];
if(!c)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
E(d,function(g){
e.push('&mailid='+g.sMid);
if(a==null)
{
a=!g.bTop;
}
var h=g.oTopBtn;
if(h)
{
setClass(h,a?'qm_ico_topon':'qm_ico_topoff');
h.title=a?'\u53D6\u6D88\u7F6E\u9876':'\u90AE\u4EF6\u7F6E\u9876';
}
});
e.push("&status="+a);
AjaxSendMailMgr({oQuery:e,sSuccessMask:"top successful",sDefErrMsg:a?"\u6807\u8BB0\u7F6E\u9876\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5":"\u53D6\u6D88\u7F6E\u9876\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",onload:function(g,j,h){
callBack(b.oncomplete,[b,a]);
}});
}
function moveMailJs(b,c,d,a)
{
if(d==b)
{
return showError(gsMsgMoveMailSameFldErr);
}
var f=a.bML,r=a.sFid,m=a.oMail,j=m.length,s=unikey('mv'),p=[a.bML?'&location=mail_list':''],g=b=="new",e=false,q;
_oMainWin=getMainWin(),_bSelectAllFld=isSelectAllFld(_oMainWin),_bSelectGroup=checkSelectGroup();
for(var t=j-1;t>=0;t--)
{
var n=m[t],k=n.oChk;
if(n.bTms)
{
return showError("\u8BF7\u4E0D\u8981\u9009\u62E9\u5B9A\u65F6\u90AE\u4EF6\uFF0C\u60A8\u4E0D\u80FD\u79FB\u52A8\u5B9A\u65F6\u90AE\u4EF6\u3002");
}
e=e||n.bUnr;
p.push('&mailid=',n.sMid);
}
a.oWin[s]=1;
var h=function(){
!a.bIsJump&&j>0&&showInfo('\u90AE\u4EF6\u79FB\u52A8\u4E2D...',-1);
var u=g?"\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u79FB\u52A8":T("\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u79FB\u52A8 <a href='/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&page=0' style='color:white' onclick='getTop().gotoCheckMovedEmail();' target='mainFrame' >[\u67E5\u770B]</a>").replace({sid:getSid(),folderid:b});
AjaxSendMailMgr({oQuery:p,sSuccessMask:'mail_move successful',sDefErrMsg:'\u79FB\u52A8\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(v,x,w){
var y,A;
if(a.oWin[s])
{
y=callBack(a.onbeforesend,[{sucMsg:u+getRollbackText(v.rbkey)}]);
}
if(g)
{
var B=evalValue(x);
A={sDestName:q,sDestId:(B&&B.sDesId)||""};
}
var z=callBack(a.oncomplete,[a,v,A]);
!(y&&z)&&v.msg&&showInfo(v.msg+getRollbackText(v.rbkey));
(g||_bSelectGroup)&&reloadLeftWin();
(r==5||r==6)&&reloadLeftWin();
if(a.oWin[s])
{
if(!z)
{
dealRmMailJump(a,v);
}
else{
QMMailList.getCurrentInstance(a,'moveMailJs').selectedUICustom(a,'moveMailJs');
e&&!g&&reloadLeftWin();
}
}
else{
(e||_bSelectAllFld)&&!g&&reloadLeftWin();
}
if(!g&&j>2)
{
setMailFilter({sFilterType:"move",sFolderId:b,sFolderName:c},a);
}
setRollBack(v.rbkey,'\u79FB\u52A8\u90AE\u4EF6');
getTop().changeSelectAllCkbStatus();
}});
};
if(_bSelectAllFld||_bSelectGroup)
{
var o=getSelectAllParam(_oMainWin);
p=[];
p.push('&mailaction=',o.type);
p.push('&fun=mail_move'+(g?'_new':''));
o.fid&&p.push('&folderid=',o.fid);
o.tid&&p.push('&srctagid=',o.tid);
o.groupid&&p.push('&groupid=',o.groupid);
if(o.flags)
{
var l=o.flags.split("|");
E(l,function(u){
if(u!="")
{
p.push('&flag=',u);
}
});
}
_bSelectGroup&&p.push(getSelectGroupUrl());
}
else{
p.push('&mailaction=',f&&!j&&g?"onlyaddfolder":"mail_move");
a.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=24");
}
p.push('&destfolderid=',g?-1:b);
if(d=="14"||d=="4")
{
p.push("&kvclick=mail_mgr|draft|movedraft|1");
}
if(g)
{
promptFolder({type:'folder',onreturn:function(u){
p.push('&foldername=',u);
q=u;
h();
}});
}
else if(j)
{
h();
}
else{
showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
}
function dealRmMailJump(a,b)
{
if(!(a.bML&&a.oWin.location.href.indexOf('s=search')>0)&&b&&b.url&&!a.bIsJump)
{
var d=b.url;
var c=d.indexOf("#");
if(c>=0)
{
d=d.substr(0,c);
}
d+="&r="+Math.random();
d=getTop().addDistributeDomainPrefix(d);
a.oWin.location.href=d;
QMMailCache.setExpire();
}
else if(a.bML)
{
getTop().QMMLCache.reload(a.oWin);
}
else{
reloadFrmLeftMain(true,false);
a.oWin.location.reload();
}
}
function configPreRmMail(a,b)
{
if(a.bReadmailEditMode)
{
return a.oWin.QMReadMail.configPreRmMail(a,b);
}
return configPreRmMail.action(a,b);
}
configPreRmMail.action=function(a,b){
var g=getUrlParams(a.oWin.location);
if(g['s']=='search'||!a.bML||((a.sFid=='pop'||a.sFid=='personal')&&b=='moveMailJs')||getMainWin().tmpSortTypePrev=='5')
{
return false;
}
a['bSelectGroup']=checkSelectGroup();
var h={},f=a,d=f.onbeforesend,e=f.oncomplete,c=false;
if((g['s']=='star'||g['showtag']=='1'||g['s']=="addrvip")&&b=='moveMailJs')
{
c=true;
}
else{
f.onbeforesend=function(j){
callBack(d,[j]);
return (c=configPreRmMail._preRmMailUI(f,j));
};
}
f.oncomplete=function(j,k){
callBack(e,[j,k]);
return c;
};
return true;
};
configPreRmMail._preRmMailUI=function(a,b){
var r="toarea",p=a.oWin,n=a.oMail,g=a.nCnt,f=n.length,e,o=S('nextpage',p),s=null,j=null,k=null,l=null,m=null,q="_pReRmMaIl_",h=0;
E(SN("mailid",p),function(t){
if(t.type=="checkbox")
{
h++;
}
});
if(h==f||f==0||a['bSelectGroup'])
{
return false;
}
p[q]=p[q]||{_oWin:p,_nCnt:0};
if(o)
{
s=[o.href.replace(/(&|\?)(loc|r|t)=.*?(&|$)/gi,"$1"),'&ef=js&resp_charset=UTF8&record=n&t=mail_list_fragment&listcount=',f,'&r=',Math.random()].join('');
e=s.split("&")[1].split("=")[1]-1;
s=s.replace(/page=(\d+)/gi,'page='+e);
}
function c()
{
var w=getMailListInfo(),t=0;
for(var z=0;z<f;z++)
{
w.totle--;
n[z].bStar&&(w.star--);
if(n[z].bUnr)
{
if(n[z].sMid=='AC0000-00000000000000000000000')
{
;(function(){
var A=S('adsUnread',a.oWin).innerHTML.match(/\d+/);
if(A&&A[0])
{
t+=parseInt(A[0],10);
}
})();
}
else{
t++;
}
}
var v=parents('.toarea',n[z].oTable)[0],u=S(attr(v,"group_id"),getMainWin()).parentNode;
if(!m)
{
m=v;
while((m=m.nextSibling)&&m.className!='list_btline')
;
l=m;
while((l=l.previousSibling)&&l.className!=r)
;
}
if(hasClass(n[z].oTable.parentNode,'qm_con_fold'))
{
removeSelf(n[z].oTable.parentNode);
}
removeSelf(n[z].oTable);
getTop().changeSelectAllCkbStatus();
j=u;
k=v;
var x=GelTags('span',u)[0];
x&&(x.innerHTML=(parseInt(x.innerHTML)-1)+" \u5C01");
if(GelTags('table',v).length==0)
{
removeSelf(u);
removeSelf(v);
}
if(n[z].oChk&&n[z].bUnr)
{
var y=n[z].oChk.getAttribute('gid');
setGroupUnread(y,getGroupUnread(y)-1);
}
}
a.oACB&&(a.oACB.checked=false);
setMailListInfo(a.sFid==4?null:w.unread-t,w.star,w.totle);
if(a.sFid==8)
{
setGroupUnread("gall",getGroupUnread("gall")-t);
}
f&&(b||{}).sucMsg&&showInfo(b.sucMsg);
if(t)
{
setFolderUnread(a.sFid,getFolderUnread(a.sFid)-t);
}
QMMailCache.setExpire();
}
function d(t,u)
{
if(t)
{
var y=getMainWin();
u=trim(u);
var B=u.substr(0,18),z;
if(/<!--mlf\d{8}-->/.test(B))
{
z=u.split(B);
z.shift();
}
if(y[q]._oWin!=y||!z||!z.length)
{
return;
}
if(m)
{
if(l==k)
{
m.parentNode.insertBefore(k,m);
m.parentNode.insertBefore(j,k);
}
var w=l.previousSibling;
var A=GelTags('span',w)[0];
for(var C=y[q]._nPerPageNum-y[q]._nCnt,v=Math.min(y[q]._nPerPageNum,z.length);C<v;C++)
{
insertHTML(l,'beforeEnd',z[C]);
A.innerHTML=(parseInt(A.innerHTML)+1)+" \u5C01";
}
y[q]._nCnt=0;
var x=SN("mailid",y);
for(var C=x.length-1;C>=0;C--)
{
if(x[C].getAttribute('init')!="true"&&x[C].type=='checkbox')
{
MLIUIEvent(x[C],p,a.sFid);
}
}
}
}
else{
}
}
c();
if(s)
{
if(p[q]._nCnt)
{
p[q]._nCnt+=f;
}
else{
p[q]._nCnt=f;
p[q]._nPerPageNum=g;
QMAjax.send(s,{method:'GET',onload:d});
}
}
return true;
};
function rmMail(a,b)
{
var m=b.oMail,j=m.length,g=0,r=[],o={},k=[],p=getMainWin(),e=isSelectAllFld(p),f=checkSelectGroup();
if(!j)
{
showError(gsMsgNoMail);
return false;
}
else if(e||f)
{
var q=getSelectAllParam(p);
r.push('&mailaction=',q.type);
q.fid&&r.push('&folderid=',q.fid);
q.tid&&r.push('&tagid=',q.tid);
q.groupid&&r.push('&groupid=',q.groupid);
if(q.flags)
{
var l=q.flags.split("|");
E(l,function(y){
if(y!="")
{
r.push('&flag=',y);
}
});
}
if(f)
{
r.push(getSelectGroupUrl());
for(var x=0;x<j;x++)
{
r.push('&mailid=',m[x].sMid);
}
}
}
else{
r=['mailaction=mail_del',b.bML?'&location=mail_list':''];
var c=false,d=false;
for(var x=0;x<j;x++)
{
var n=m[x],u=n.sSName,v=n.sSEmail;
if(n.bTms===true)
{
d=true;
}
else{
c=true;
}
r.push('&mailid=',n.sMid);
g=n.bUnr||g;
if(n.bUnr&&v.match(/tuan@mail-admin.qq.com|newsletter-noreply@qq.com/))
{
var s=n.sColId;
o[s]?(o[s]++):(o[s]=1);
o[s]==5&&k.push(s);
}
}
b.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=25");
}
if(a==1||a==2)
{
var h=k.length,t='\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F',w=getTop().getSid();
if(b.sFid=='4'||b.sFid=='14')
{
t='\u5220\u9664\u540E\u8349\u7A3F\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F';
if(d===true)
{
if(c===true)
{
t='\u5220\u9664\u540E\u8349\u7A3F\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F';
}
else{
t='\u5220\u9664\u540E\u5B9A\u65F6\u90AE\u4EF6\u5C06\u4E0D\u4F1A\u53D1\u51FA\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F';
}
}
b.sDelIngMsg='\u8349\u7A3F\u5220\u9664\u4E2D...';
b.sDelRetMsg='\u5DF2\u5C06\u8349\u7A3F\u6210\u529F\u5220\u9664';
}
confirmBox({title:"\u5220\u9664\u786E\u8BA4",mode:"prompt",msg:TE(['<div>$sMsg$</div>','<div>','$@$if($bHasBoth$)$@$','<div>\u5220\u9664\u7684\u5B9A\u65F6\u90AE\u4EF6\u4E5F\u5C06\u4E0D\u4F1A\u53D1\u51FA\u3002</div>','$@$endif$@$','$@$if($bUnsubscribe$)$@$','<div>','<input style="vertical-align:middle; height:13px; width:13px; padding:0; margin:0 5px 0 0" id="unsubscribe" type="checkbox" name="Unsubscribe" >','<label for="unsubscribe"><span id="unsubscribe_text" style="color:#333; font-size:12px;">\u540C\u65F6\u9000\u8BA2\u9009\u4E2D\u7684\u8BA2\u9605\u90AE\u4EF6</span></label>','</div>','$@$endif$@$','</div>']).replace({sMsg:t,bHasBoth:(d===true&&c===true)?true:false,bUnsubscribe:(h>0)}),onreturn:function(y){
if(y)
{
if(a==2)
{
r.push("&fun=donadel");
}
else if(e||f)
{
r.push('&fun=mail_perdelall');
}
else{
var z=this.S("unsubscribe");
r.push('&Fun=PerDel');
if(z&&z.checked)
{
var A="";
for(var B=0;B<h;B++)
{
A+=("&colid="+k[B]);
}
getTop().QMAjax.send(getTop().T("/cgi-bin/setting10?action=desubscribe&sid=$sid$$colidlist$").replace({sid:w,colidlist:A}),{method:"GET",onload:function(C,D){
}});
b.sDelRetMsg="\u5220\u9664\u90AE\u4EF6\u5E76\u9000\u8BA2\u6210\u529F";
}
}
doRmMail(b,r,g,a);
}
}});
}
else{
if(e||f)
{
r.push('&fun=mail_delall');
}
else if(b.sFid=="14")
{
r.push("&fun=PerDel");
}
doRmMail(b,r,g,a);
}
return true;
}
function doRmMail(c,d,a,b)
{
var g=c.sDelRetMsg||"\u5220\u9664\u6210\u529F",f=c.sDelIngMsg||"\u90AE\u4EF6\u5220\u9664\u4E2D...",e=c.sFid,h=unikey('rm');
if(c.bPop&&getTop().goUserInfo.get("POP_PROPOSE"))
{
confirmBox({title:"\u90AE\u7BB1\u529F\u80FD\u63A8\u8350",mode:"prompt",msg:T(['<div class="dialog_f_t">\u5728$dn$\u90AE\u7BB1\u4E2D\u5220\u9664\u90AE\u4EF6\uFF0C\u540C\u65F6\u4E5F\u5220\u9664\u539F\u90AE\u7BB1\u4E2D\u7684\u5BF9\u5E94\u90AE\u4EF6?</div>','<div class="dialog_f_d">','\u60A8\u4E5F\u53EF\u4EE5\u8FDB\u5165\u201C\u4FEE\u6539\u8BBE\u7F6E\u201D\u4E2D\u8BBE\u7F6E\u3002','<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=26&&no=326" target="_blank" >\u4E86\u89E3\u8BE6\u8BF7</a>','</div>']).replace({dn:getDomain(true)}),onreturn:function(j){
if(j)
{
runUrlWithSid(T("/cgi-bin/foldermgr?fun=updpop&updflag=22&folderid=$folderid$").replace({folderid:e}));
showInfo('\u8BBE\u7F6E\u6210\u529F\uFF01\u5E76\u5C06\u5F53\u524D\u9009\u4E2D\u90AE\u4EF6\u5220\u9664\u3002');
}
}});
}
showInfo(f,-1);
c.oWin[h]=1;
AjaxSendMailMgr({oQuery:d,sSuccessMask:'mail_del successful',sDefErrMsg:'\u5220\u9664\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(j,l,k){
g=g+getRollbackText(j.rbkey);
var m;
if(c.oWin[h])
{
m=callBack(c.onbeforesend,[{sucMsg:g}]);
}
var o=j.url,n=callBack(c.oncomplete,[c,j]);
!(m&&n)&&showInfo(g);
if(!n&&c.oWin[h])
{
dealRmMailJump(c,j);
}
var o=d.join("");
if(a||isSelectAllFld(c.oWin)||c.sFid==6||c.sFid==5||c.sFid==4||c.sFid==3||c.sFid==1||o.indexOf("mail_grpsearchall")>-1||o.indexOf("mail_grpoprall")>-1||b==0)
{
reloadLeftWin();
}
if(c.oMail.length>4)
{
setMailFilter({sFilterType:"delete"},c);
}
setRollBack(j.rbkey,'\u5220\u9664\u90AE\u4EF6');
}});
}
var gsSpamResultHtml;
function reportSpamJson(b,a)
{
if(getTop().isSelectAllFld(getMainWin()))
{
return showError('\u4E0D\u80FD\u5BF9\u5168\u6587\u4EF6\u5939\u6267\u884C\u6B64\u64CD\u4F5C');
}
var g=a.oMail,f=g.length,e=0,c=a.sFid==6,d=checkSelectGroup(),j=[a.bML?'&location=mail_list':'','&mailaction=mail_spam&isspam=true&Fun=',3<a.sFid&&a.sFid<7?"PerDel":"Del",'&srcfolderid=',a.sFid];
if(!f)
{
showError(gsMsgNoMail);
return false;
}
if(d)
{
var h=getSelectAllParam(getMainWin());
h.tid&&j.push('&srctagid=',h.tid);
}
for(var k=0;k<f;k++)
{
j.push('&mailid=',g[k].sMid);
}
QMMailList.selectedUI(a);
j.push("&s=readmail_spam&reporttype=",c?11:8,"&s_reject_what=00");
d&&j.push(getSelectGroupUrl());
reportSpamJson._doReportSpam(j,"readmail_spam",a);
return false;
}
reportSpamJson._doReportSpam=function(b,c,a){
var n="\u8BBE\u4E3A\u5783\u573E\u90AE\u4EF6\u6210\u529F",g=0,o=unikey('spam'),j=a.oMail,f=0,h=0,e=false,k=['mailaction=mail_spam&isspam=true'],d,m=j[0].sSubject||'';
if(j[0].oTable)
{
var l=CN('tt',j[0].oTable)[0];
m=l.innerText;
}
if(j.length>1)
{
getTop().LogKV({sValue:"getinvestigate|maillist|spam|multimail"});
}
for(var p=j.length-1;p>=0;p--)
{
e=e||j[p].bSys;
f+=j[p].bUnr?getMLMailItemUnreadNum.getNum(j[p]):0;
}
showInfo('\u90AE\u4EF6\u4E3E\u62A5\u4E2D...',-1);
a.oWin[o]=1;
if(a.bML&&!getTop().QMTip)
{
loadJsFileToTop(["$js_path$qmtip270d91.js"]);
}
gsSpamResultHtml='';
AjaxSendMailMgr({oQuery:b,sSuccessMask:'spam successful',sDefErrMsg:'\u4E3E\u62A5\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(q,s,r){
var w=q.url,t=callBack(a.oncomplete,[a,q]);
switch(c)
{case "readmail_spam":
case "readmail_spam_newwin":
var v=[];
for(var x=0;x<q.spamitems.length;++x)
{
v.push(q.spamitems[x].mailid);
}
if(a.sFid==6)
{
n='\u4E3E\u62A5\u6210\u529F\u3002\u90AE\u4EF6\u5DF2\u7ECF\u5F7B\u5E95\u5220\u9664 <a style="color:white" onclick="showSpamInvestigate(\''+v.join(' ')+'\',\''+m.replace('\'','\\\'')+'\', 6);">[\u652F\u6301\u5783\u573E\u90AE\u4EF6\u51C0\u5316\u8BA1\u5212]</a>';
}
else{
n=['\u4E3E\u62A5\u6210\u529F\u3002\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u79FB\u5165\u5783\u573E\u7BB1 <a style="color:white" onclick="showSpamInvestigate(\''+v.join(' ')+'\',\''+m.replace('\'','\\\'')+'\','+a.sFid+');">[\u652F\u6301\u5783\u573E\u90AE\u4EF6\u51C0\u5316\u8BA1\u5212]</a>'].join("");
h=10000;
}
break;
case "readmail_reject":
case "readmail_reject_newwin":
n=(a.sFid==6?"\u4E3E\u62A5\u6210\u529F\uFF0C\u5E76\u5C06\u6B64\u53D1\u4EF6\u4EBA\u6DFB\u52A0\u5230\u9ED1\u540D\u5355":"\u5DF2\u5C06\u6B64\u53D1\u4EF6\u4EBA\u6DFB\u52A0\u5230\u9ED1\u540D\u5355\uFF0C\u5E76\u5C06\u8BE5\u90AE\u4EF6\u79FB\u5165\u5783\u573E\u90AE\u4EF6\u7BB1");
break;
case "readmail_group":
case "readmail_group_newwin":
n="\u62D2\u6536\u6210\u529F\uFF0C\u5C06\u4E0D\u518D\u6536\u53D6\u6B64\u8BDD\u9898\u90AE\u4EF6";
break;
}!(d&&t)&&showInfo(n,h);
dealRmMailJump(a,q);
if(!q.nodlg&&a.oWin[o])
{
var u=10002;
q.sid=getSid();
q.tipid=u;
gsSpamResultHtml=TE(['<div class="dialog_content">',"<div class='dialog_feedback' style='padding-left:28px;'>","<span class='dialog_icon icon_info_b'></span>","<div class='dialog_f_c' style='font-size:12px;'>","<div class='bold'>\u4F60\u603B\u5171\u4E3E\u62A5\u4E86 $reportCnt$ \u6B21</div>",'$@$if($acceptCnt$)$@$',"<div>\u88AB\u7CFB\u7EDF\u91C7\u7EB3\u4E86 $acceptCnt$ \u6B21</div>",'$@$endif$@$',"<div style='margin-top:8px;'>\u4ECA\u5929\u6211\u4EEC\u7CFB\u7EDF\u6536\u5230 $allCnt$ \u6B21\u4E3E\u62A5</div>","<div>\u603B\u5171\u62E6\u622A\u4E86 $trushCnt$ \u5C01\u5783\u573E\u90AE\u4EF6</div>",'<p style="color:#a0a0a0;margin:0;">\u611F\u8C22\u4F60\u652F\u6301QQ\u90AE\u7BB1\u5783\u573E\u90AE\u4EF6\u51C0\u5316\u8BA1\u5212\uFF0C\u6211\u4EEC\u5C06\u4E0D\u65AD\u4F18\u5316\u5783\u573E\u90AE\u4EF6\u62E6\u622A\u6548\u679C\uFF0C\u4E3A\u4F60\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52A1\u3002',"<a onclick=\"javascript: getTop().goUrlMainFrm('/cgi-bin/help_report_spam?sid=$sid$', false);getTop().QMDialog(\'spam_investigate\').close();\">\u70B9\u51FB\u8FDB\u5165\u4E3E\u62A5\u6570\u636E\u4E2D\u5FC3</a>",'</p>',"</div>","</div>",'<div class="dialog_operate">','<a href="javascript:;" id="btn_last_submit" class="btn_blue">\u786E\u5B9A</a>','<div class="clr"></div>','</div>','</div>']).replace(q);
}
{
reloadLeftWin();
setRollBack(q.rbkey,"\u4E3E\u62A5\u90AE\u4EF6");
}
}});
};
function showSpamInvestigate(b,c,a)
{
var d=b.split(' ');
var e=a==8?'readmail_group':'readmail';
new QMDialog({sId:'spam_investigate',sTitle:'\u652F\u6301\u5783\u573E\u90AE\u4EF6\u51C0\u5316\u8BA1\u5212',bAlignCenter:true,nWidth:430,nHeight:256,sBodyHtml:['<form style="width:100%;" method="post" id="uploademl" name="uploademl" target="actionFrame" action="/cgi-bin/qf_upload" enctype="multipart/form-data">','<div class="dialog_txt" style="line-height:1.9">','<div style="margin-bottom: 5px;">\u4E3E\u62A5\u90AE\u4EF6\uFF1A\u201C',a==6?['<span style="display: inline-block; max-width: 200px; overflow: hidden; vertical-align: middle; text-overflow: ellipsis; white-space: nowrap;">',c,'</span>'].join(''):['<a style="display: inline-block; max-width: 200px; overflow: hidden; vertical-align: middle; text-overflow: ellipsis; white-space: nowrap;" href="https://mail.qq.com/cgi-bin/frame_html?t=newwin_frame&sid=',getSid(),'&url=/cgi-bin/readmail?t=',e,'%26mailid=',d[0],'" target="_blank">',c,'</a>'].join(''),d.length>1?'\u201D\u7B49'+d.length+'\u5C01\u90AE\u4EF6':'\u201D','</div>','<div style="float:left;">\u4E3E\u62A5\u7C7B\u578B\uFF1A</div>','<div style="overflow: hidden; zoom: 1;">','<label for="spam_mail_type_1" style="display:block;"><input type="radio" name="spam_mail_type" class="spam_mail_type_radio" id="spam_mail_type_1" style="vertical-align: middle;margin: 0 3px;" value="201" checked/> <span style="vertical-align: middle;">\u5E7F\u544A</span></label>','<label for="spam_mail_type_2" style="display:block;"><input type="radio" name="spam_mail_type" class="spam_mail_type_radio" id="spam_mail_type_2" style="vertical-align: middle;margin: 0 3px;" value="202"/> <span style="vertical-align: middle;">\u8272\u60C5</span></label>','<label for="spam_mail_type_3" style="display:block;"><input type="radio" name="spam_mail_type" class="spam_mail_type_radio" id="spam_mail_type_3" style="vertical-align: middle;margin: 0 3px;" value="203"/> <span style="vertical-align: middle;">\u6B3A\u8BC8<span class="addrtitle">\uFF08\u9493\u9C7C\u3001\u62BD\u5956\u3001\u9A97\u5C40\u7B49\uFF09</span></span></label>','<label for="spam_mail_type_4" style="display:block;"><input type="radio" name="spam_mail_type" class="spam_mail_type_radio" id="spam_mail_type_4" style="vertical-align: middle;margin: 0 3px;" value="204"/> <span style="vertical-align: middle;">\u8FDD\u6CD5<span class="addrtitle">\uFF08\u8FDD\u7981\u54C1\u3001\u8D4C\u535A\u3001\u552E\u5047\u3001\u6CC4\u5BC6\u7B49\uFF09</span></span></label>','</div>','</div>','<div class="dialog_operate">','<a href="javascript:;" id="submit_spam_mail_type" class="btn_blue">\u63D0\u4EA4</a>','<div class="clr"></div>','</div>','</form>'].join(''),onload:function(){
var j=CN('spam_mail_type_radio');
var f=0;
var l=this;
var h=this.S('submit_spam_mail_type');
var g=this.S('btn_last_submit');
for(var k=0;k<j.length;++k)
{
j[k].onclick=function(){
f=this.value;
rmClass(l.S('submit_spam_mail_type'),'btn_blue_disabled');
};
}
if(h)
{
h.onclick=function(){
if(hasClass(this,'btn_blue_disabled'))
{
return;
}
var m=['sid='+getSid(),'mailaction=mail_spam_type','reporttype='+f];
for(var o=0,n=b.split(' ');o<n.length;++o)
{
m.push('mailid='+n[o]);
}
QMAjax.send('/cgi-bin/mail_mgr',{content:m.join('&')});
if(gsSpamResultHtml)
{
l.setHeader('\u611F\u8C22\u4F60\u7684\u652F\u6301');
l.setBody(gsSpamResultHtml);
l.option('nHeight',gbIsIE?256:254);
}
else{
l.close();
}
};
}
if(g)
{
g.onclick=function(){
l.close();
};
}
}});
}
function reportNoSpamJson(b,a)
{
var j="\u6210\u529F\u6807\u8BB0\u4E3A\u201C\u975E\u5783\u573E\u90AE\u4EF6\u201D",g=a.oMail,e=g.length,d=0,k=unikey('spam'),h=[a.bML?'&location=mail_list':'','&mailaction=mail_spam&isspam=false'],c=checkSelectGroup(),f;
if(!e)
{
showError(gsMsgNoMail);
return false;
}
for(var l=0;l<e;l++)
{
f=g[l];
h.push('&mailid=',f.sMid);
d+=f.bUnr?getMLMailItemUnreadNum.getNum(f):0;
}
c&&h.push(getSelectGroupUrl());
a.oWin[k]=1;
AjaxSendMailMgr({oQuery:h,sSuccessMask:'spam successful',sDefErrMsg:'\u8BBE\u7F6E\u4E0D\u662F\u5783\u573E\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(m,o,n){
callBack(a.onbeforesend,[]);
showInfo(j+getRollbackText(m.rbkey));
reloadLeftWin();
if(a.oWin[k])
{
dealRmMailJump(a,m);
}
setRollBack(m.rbkey,"\u8BBE\u7F6E\u4E0D\u662F\u5783\u573E\u90AE\u4EF6");
}});
}
function reportAddrConfirm(a,b)
{
var f=getTop();
var e=[],c={},d={};
if(!b)
{
b={};
}
f.E(a.oMail,function(g){
var l=g.sSName;
var j=g.sSEmail;
var k=g.sMid;
if(!l||!j)
{
var h=g.oChk;
if(!h)
{
return;
}
l=f.attr(h,'fn');
j=f.attr(h,'fa');
}
if(isNaN(c[j]))
{
c[j]=e.length;
e.push({'addr':f.htmlEncode(j),'name':f.htmlEncode(l),'mailid':[k]});
}
else{
e[c[j]].mailid.push(k);
}
d[k]=g;
});
f.confirmBox({style:"cnfx_reject",sType:"custom",title:b.sTitle,confirmBtnTxt:b.sConfirmBtnTxt||"\u786E\u5B9A",cancelBtnTxt:b.sCancelBtnTxt||"\u53D6\u6D88",confirmClass:b.sConfirmClass||"btn_blue",msg:f.TE(['<div class="cnfx_content">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','<div>$sTextTitle$</div>','<div $@$if($oMailSenders.length$>1)$@$class="dialog_reject_list"$@$endif$@$>','$@$for($oMailSenders$)$@$','<div class="dialog_reject_list_item txtflow">','<input id="reject_confirm_$_idx_$" type="checkbox" name="$name$" addr="$addr$" checked','$@$if($_root_.oMailSenders.length$==1||$bMultiCheck$===false)$@$',' style="display:none" ','$@$endif$@$','>','<label for="reject_confirm_$_idx_$">','<span class="green bold reject_name">$name$</span>','<span class="graytext reject_pwd">&lt;$addr$&gt;</span>','</label>','</div>','$@$endfor$@$','</div>','</div>','</div>']).replace({sTextTitle:b.sTextTitle,bMultiCheck:b.bMultiCheck,oMailSenders:e}),onreturn:function(g){
if(g)
{
var j=f.GelTags("input",this.getPanelDom()),h=[],k=[];
f.E(j,function(l){
if(l.checked)
{
var m=f.attr(l,'addr');
if(m)
{
h.push(m);
if(e[c[m]])
{
k=k.concat(e[c[m]].mailid);
}
}
}
});
if(!h.length&&!k.length)
{
b.onreturn(null);
return;
}
b.onreturn(true,h,k,d);
}
else{
b.onreturn(false);
}
}});
}
function reportAdJson(b,a)
{
var j=getTop();
var k=a.oWin;
if(j.isSelectAllFld(k))
{
return showError('\u4E0D\u80FD\u5BF9\u5168\u6587\u4EF6\u5939\u6267\u884C\u6B64\u64CD\u4F5C');
}
if(j.checkSelectGroup(k))
{
return showError('\u4E0D\u80FD\u5BF9\u6574\u7EC4\u90AE\u4EF6\u6267\u884C\u6B64\u64CD\u4F5C');
}
var g=a.oMail,e=g.length,d=0,m=unikey('ad'),h=[a.bML?'&location=mail_list':'','&mailaction=mail_ad&isad=',b.bNotAd?"false":"true"],c=checkSelectGroup();
if(!e)
{
return j.showError(gsMsgNoMail);
}
for(var n=e;n--;)
{
if(g[n].sMid.charAt(0)=='@')
{
return j.showError('\u4E0D\u80FD\u5C06\u7FA4\u90AE\u4EF6\u6807\u8BB0\u4E3A\u5E7F\u544A\u90AE\u4EF6');
}
}
LogKV({sValue:"mail_mgr|report_ad|"+(b.bNotAd?'false':'true')});
if(a.bML)
{
LogKV({sValue:"mail_mgr|report_ad_ml|"+(b.bNotAd?'false':'true')});
}
function l(o,p)
{
j.E(o,function(s){
h.push('&addr=',encodeURIComponent(s));
});
for(var r=p.length;r--;)
{
var q=p[r];
h.push('&mailid=',q.sMid);
d+=q.bUnr?j.getMLMailItemUnreadNum.getNum(q):0;
}
c&&h.push(j.getSelectGroupUrl());
a.oWin[m]=1;
AjaxSendMailMgr({oQuery:h,sSuccessMask:'ad successful',sDefErrMsg:b.bNotAd?'\u6807\u8BB0\u975E\u5E7F\u544A\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5':'\u6807\u8BB0\u5E7F\u544A\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(s,u,t){
var z=b.bNotAd?'\u5DF2\u5C06\u6307\u5B9A\u53D1\u4EF6\u4EBA\u7684\u90AE\u4EF6\u6807\u8BB0\u4E3A\u975E\u5E7F\u544A\u90AE\u4EF6':'\u5DF2\u5C06\u6307\u5B9A\u53D1\u4EF6\u4EBA\u7684\u90AE\u4EF6\u6807\u8BB0\u4E3A\u5E7F\u544A\u90AE\u4EF6';
var v;
if(a.oWin[m])
{
v=j.callBack(a.onbeforesend,[]);
}
var w=j.callBack(a.oncomplete,[a,s,p]);
j.QMMLCache.upVer();
j.rdVer('BaseVer',-1);
j.showInfo(z);
if(d||c)
{
j.reloadLeftWin();
}
if(!(w&&v))
{
var x=a.oWin;
var A=x.location.href;
if(A.indexOf('cgi-bin/mail_list')!=-1)
{
j.reloadFrmLeftMain(false,true);
}
else{
j.trace("history back","","start","mail_list");
var y=j.QMHistory.getUrl("mail_list");
if(!y)
{
y=j.T("/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$$ext$").replace({sid:j.getSid(),folderid:getUrlParams(x.location).folderid||1,ext:b.bNotAd?'&t=mail_list_ad&flag=add':'&s=inbox'});
}
x.location.href=j.QMMLCache.url(y,{},true);
if(y.indexOf('t=mail_list_ad')!=-1)
{
j.waitFor(function(){
var B=j.getMainWin();
return j.S("list",B);
},function(B){
if(B)
{
j.bodyScroll(_aoWin,"scrollTop",j.gnMailListPos);
}
});
}
}
}
}});
}
if(b.bShowConfirm)
{
reportAddrConfirm(a,{sTitle:'\u6807\u8BB0\u5E7F\u544A\u90AE\u4EF6',sTextTitle:b.bNotAd?'\u4EE5\u4E0B\u5730\u5740\u53D1\u6765\u7684\u90AE\u4EF6\u5C06\u4E0D\u518D\u8FDB\u5165\u5E7F\u544A\u90AE\u4EF6\uFF0C\u786E\u5B9A\u6807\u8BB0\u5417\uFF1F':'\u4EE5\u4E0B\u5730\u5740\u53D1\u6765\u7684\u90AE\u4EF6\u5C06\u4F1A\u81EA\u52A8\u79FB\u5165\u5E7F\u544A\u90AE\u4EF6\uFF0C\u786E\u5B9A\u6807\u8BB0\u5417\uFF1F',onreturn:function(o,p,r,q){
if(o)
{
var s=[];
j.E(r,function(t){
s.push(q[t]);
});
l(p,s);
}
}});
}
else{
var f=[];
j.E(g,function(o){
f.push(o.from.sSEmail);
});
l(f,g);
}
}
function isSelectAllFld(a)
{
var b=false;
E(GelTags("div",S("selectAll",a)),function(d,c){
if("selected"==d.getAttribute("un"))
{
b=isShow(d);
return false;
}
});
return b;
}
function getSelectAllParam(a)
{
var d=S("selectAll",a),b=d.getAttribute("fid"),c={"type":d.getAttribute("ftype"),"fid":b,"tid":d.getAttribute("tid"),"flags":d.getAttribute("flags"),"totalcnt":d.getAttribute("totalcnt")};
b==8&&(c=extend(c,{groupid:d.getAttribute("groupid")}));
return c;
}
function setSelectAllFlag()
{
}
function showSelectALL(b,a)
{
var c=S("selectAll",b);
if(c)
{
displayGrayTip(c,a);
!a&&selectAllFld(b,a);
show(S("tips_bar",b),!a);
}
}
function selectAllFld(a,f)
{
var e="&selectall="+(f?1:0),d=S("selectAll",a);
if(d)
{
E(GelTags("div",d),function(h,g){
var p=h.getAttribute("un");
p=="unselect"&&show(h,!f);
if(p=="selected")
{
var o=GelTags("span",h)[0],n=o.getAttribute("start"),k=o.getAttribute("end"),m=4,l=parseInt((k-n)/m),j=function(q){
o.innerHTML=q;
};
if(!!f)
{
if(o.innerHTML==k)
{
show(h,!!f);
return;
}
j(n);
setTimeout(function(){
j(k-(--m)*l);
m!=0&&setTimeout(arguments.callee,150);
},150);
}
else{
j(n);
}
show(h,!!f);
}
});
var b=d.getAttribute("fid"),c=d.getAttribute("totalcnt");
getTop().ossLog("realtime","all","stat=selectallCompare&mailcount="+c+"&folderid="+b);
E(["prevpage","nextpage","prevpage1","nextpage1"],function(g){
var h=S(g,a);
if(h)
{
var j=h.href;
h.href=j.match(/selectall/)?j.replace(/&selectall=\d/,e):(j+e);
}
});
}
}
var getMLMailItemUnreadNum=(function(){
function a(d)
{
if(attr(d.oChk,'unread')=='false')
{
return b(d);
}
return 0;
}
function b(d)
{
if(d.sMid=='AC0000-00000000000000000000000')
{
return c(d);
}
return 1;
}
function c(d)
{
try{
return parseInt(S('adsUnread',getDomWin(d.oChk)).innerHTML.match(/\d+/)[0],10);
}
catch(f)
{
return 1;
}
}
a.getNum=b;
a.getAdNum=c;
return a;
})();
function gotoCheckRejectEmail()
{
}
function gotoCheckMovedEmail()
{
var a=getTop();
a.hiddenMsg();
}
var setAdMailAllReaded=(function(){
var h=getTop();
function e(j)
{
var k=a();
if(!k)
{
h.showError('\u6587\u4EF6\u5939\u5185\u6CA1\u6709\u672A\u8BFB\u90AE\u4EF6');
return;
}
d(function(){
h.showInfo('\u6587\u4EF6\u5939\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C\u6210\u529F');
c(j,arguments);
});
}
function d(j)
{
h.QMAjax.send('/cgi-bin/mail_mgr?sid='+h.getSid(),{content:'mailaction=mail_flag&flag=new&status=false&mailid=AC0000-00000000000000000000000&t=mail_mgr2&resp_charset=UTF8&ef=js&folderkey=1',onload:function(){
h.QMMLCache.upVer();
c(j,arguments);
}});
}
;function g()
{
h.waitFor(function(){
return h.getMainWin().location.href.indexOf('flag=add')<0;
},function(j){
if(!j)
{
g();
}
else{
b();
}
},null,1000*500);
}
function b()
{
var j=h.getMainWin();
if(j.location.href.indexOf('cgi-bin/mail_list')>0)
{
h.waitFor(function(){
return h.S("list",j)&&h.finds('input[value="AC0000-00000000000000000000000"]',j.document.body).length;
},function(){
var k=h.QMMailList.getCBInfo(j,'AC0000-00000000000000000000000');
if(k.oMail.length)
{
var l=k.oMail[0];
h.attr(l.oChk,'unread','false');
f(a()-getMLMailItemUnreadNum.getNum(l));
h.QMMailList.selectedUICustom(k,'setMailRead',false);
h.S('adsUnread',j).innerHTML='(0)';
}
});
}
d(reloadLeftWin);
}
function a()
{
return h.getMailListInfo().unread;
}
function f(j)
{
h.setMailListInfo(j);
}
function c(j,k)
{
if(!j)
{
h.QMMLCache.reload();
}
else{
h.callBack(j,k);
}
}
e.send=d;
e.waitForLeave=g;
e.onunload=b;
return e;
})();
var QMMailList={},_goClass,_goStatic;
QMMailList.getCBInfo=function(a,b){
var c=true,e={oMail:[],nCnt:0,oWin:a,sFid:getUrlParams(a.location)['folderid'],bML:true};
var f=GelTags("input",S('list',a));
if(f.length===0)
{
f=GelTags("input",S('qqmail_mailcontainer',a));
}
var d;
if(b instanceof Array)
{
d=function(g){
for(var h=b.length;h--;)
{
if(b[h]==g)
{
return true;
}
}
return false;
};
}
else if(b)
{
d=function(g){
return b==g;
};
}
E(f,function(g){
if(g.title=="\u9009\u4E2D/\u53D6\u6D88\u9009\u4E2D")
{
e.oACB=g;
}
else if(g.type=="checkbox"&&g.name=="mailid"&&(d&&d(g.value)||!d&&g.checked))
{
var x=g.value,p=g.parentNode;
while(p&&p.tagName!="TABLE")
{
p=p.parentNode;
}
if(!p)
{
return;
}
var v=p.rows[0].cells,t=v[v.length-1],o=GelTags("input",t)[0],k=GelTags("td",GelTags('tr',t)[0]),m=k[k.length-1],s=GelTags("table",t),A,r=[],l={};
for(var h=0,j=s.length;h<j;h++)
{
if(A=s[h].getAttribute("tagid"))
{
r.push(A);
}
}
var z=g.getAttribute("ssystag")||"",q=[],n={};
if(z!="")
{
q=z.split("|");
}
for(var B=0;B<q.length-1;B++)
{
if(q[B]!="")
{
var w=q[B].split(":");
if(w[0]&&w[1]!="")
{
n[w[0]]=w[1];
}
}
}
l.sMid=x;
l.bSys=o&&{"s1bg":1}[o.className];
l.bAdConv=g.getAttribute("adconv")=='1'?true:false;
l.bDft=o&&{"drifticon":1}[o.className];
l.bUnr=g.getAttribute("unread")=="true";
l.bSubUnr=k[1]&&k[1].className=="new_g"&&GelTags("b",k[1]).length>0;
l.bStar=m&&m.className=="fg fs1";
l.bAddrvip=g.getAttribute("addrvip")=="1";
l.oSysTag=n||{};
l.bTms=g.getAttribute("isendtime")==1;
l.oTagIds=r;
l.sSName=g.getAttribute("fn");
l.sSEmail=g.getAttribute("fa");
l.sColId=g.getAttribute("colid");
l.bTop=!!g.getAttribute("istop");
var y=g.getAttribute("rf");
l.oTable=p;
l.oStar=m;
l.oChk=g;
e.oMail.push(l);
var u=GelTags('div',t);
for(var h=0,j=u.length;h<j;h++)
{
if(u[h].className=='TagDiv')
{
l.oTCont=u[h];
break;
}
}
}
c&&g.type=="checkbox"&&g.name=="mailid"&&!g.checked&&(c=false);
g.type=="checkbox"&&g.name=="mailid"&&e.nCnt++;
});
e.bSelectAll=c;
return e;
};
QMMailList.selectedUI=function(a){
var e=getMainWin(),d={},b=false;
if(e.location.href.indexOf('/cgi-bin/mail_list')<0)
{
return;
}
for(var c=a.oMail,f=c.length;f--;)
{
d[c[f].sMid]=1;
}
E(SN("mailid",e),function(g){
if(g.type=="checkbox")
{
var h=g.value in d,j=g.getAttribute('unread')=='true'&&a.sFid!=4,k=g;
while(k.tagName!="TABLE")
{
k=k.parentNode;
}
if(k.style.backgroundColor!="")
{
k.style.backgroundColor="";
}
setClass(k,[j?"i F":"i M",h?" B":""].join(""));
setClass(GelTags("table",k)[0],j?"i bold":"i");
var l=g.getAttribute("isendtime"),m=g.getAttribute("rf");
if(g.value=='AC0000-00000000000000000000000')
{
setClass(GelTags("table",k)[0],j?"i bold allbold":"i normal");
show(S('adsUnread',e),j);
setClass(GelTags("div",k.rows[0].cells[1])[1],'cir '+(j?'Ru':'Rr'));
}
else{
setClass(GelTags("div",k.rows[0].cells[1])[1],'cir '+((j?'Ru':'')||{0:'Rc',1:'Ti'}[l]||{r:'Rh',f:'Rz'}[m]||(j?'':'Rr')));
}
g.checked=h;
b=b||h;
}
});
E(SN("selectgroup",e),function(g){
g.checked=false;
});
if(!b&&a.oACB)
{
a.oACB.checked=b;
}
};
QMMailList.selectedUICustom=function(a,b,c){
return this.selectedUI({oMail:[],oACB:a.oACB});
};
QMMailList.getCurrentInstance=function(a,b,c){
return this;
};
QMMailList._singleAddrNick=function(a){
for(var f=null,g=null,b=a.oMail,h=b.length-1;h>=0;h--)
{
var c=b[h],e=c.sSName,d=c.sSEmail;
if(g!=e)
{
g=g===null?e:'';
}
if(f!=d)
{
f=f===null?d:'';
}
}
return [f,g];
};
function BaseMailOper(a)
{
var b=this;
b._init(b._moConfig=a);
}
BaseMailOper._craeteInstance=function(b){
var a=BaseMailOper,c=b.oWin;
if(!a.getInstance(c))
{
new a(b);
}
return a.getInstance(c);
};
BaseMailOper.getInstance=function(a){
return a["__gBmOi_"];
};
BaseMailOper.prototype={_init:function(a){
var c=this,d=a.oWin,b=d.location,e=b.href;
if(e.indexOf("/cgi-bin/mail_list")>0)
{
a.mnFolderType=e.indexOf('t=mail_list_ad')>0?4:0;
}
else if(e.indexOf("t=readmail_conversation")>0)
{
a.mnFolderType=2;
}
else if(e.indexOf("readmail_group.html")>0)
{
a.mnFolderType=3;
}
else{
a.mnFolderType=1;
}
a.bAutoTag=getUrlParams(b)['folderid']==1||a.sFolderid==1||a.bAutoTag;
d["__gBmOi_"]=c;
return c;
},getConfig:function(){
return this._moConfig;
},setMailInfo:function(a){
this._moConfig._moSelectMailInfo=a;
},getMailInfo:function(){
return this._moConfig._moSelectMailInfo;
},apply:function(_asItemId,_asItemValue,_aoMailInfo){
var _oSelf=this,_oConfig=_oSelf._moConfig,_oSelectMI=_oConfig._moSelectMailInfo,_oWin=_oConfig.oWin;
QMMLCache.upVer();
if(getUrlParams(_oSelectMI.oWin.location).flag=="addrvip")
{
getTop().reloadAllFrm(false,false,false);
}
switch(_asItemId)
{case "mark":
case "move":
case "preview":
return false;
case "opennew":
if(_oSelectMI.oMail.length==1)
{
var _oDomTarget=GelTags("table",_oSelectMI.oMail[0].oTable)[0].parentNode,_sFuncCode=_oDomTarget.onclick.toString(),_sFakeEventModal=T(['{','shiftKey:true,','hitmailid:"$hitmailid$"','}']).replace({"hitmailid":_oDomTarget.getAttribute("hitmailid")||""});
_sFuncCode=_sFuncCode.split("{")[1].split("}")[0].replace(/event/ig,_sFakeEventModal);
if(/\WRD/.test(_sFuncCode))
{
eval(_sFuncCode);
}
else{
debug("opennew error");
}
}
break;
case "new":
_oSelf._configPreRmMail('moveMailJs');
moveMailJs('new','',_oSelectMI.sFid,_oSelectMI);
break;
case "delmail":
_oSelf._configPreRmMail('rmMail');
rmMail(0,_oSelectMI);
break;
case 'predelmail':
_oSelf._configPreRmMail('rmMail');
rmMail(1,_oSelectMI);
break;
case 'frwmail':
_oSelectMI.oWin.FwMailML();
break;
case 'spammail':
_oSelf._configPreRmMail('spammail');
reportSpamJson({bBlackList:true},_oSelectMI);
break;
case "read":
case "unread":
setMailRead(_asItemId=="unread",_oSelectMI);
break;
case "star":
case "unstar":
_oSelf._configMail(_asItemId);
starMail(_asItemId=="star",_oSelectMI);
break;
case "rmalltag":
_oSelf._configMail(_asItemId);
QMTag.rmTag('',_oSelectMI);
break;
case "newtag":
QMTag.newMailTag(_oSelectMI);
break;
case 'autotag':
QMTag.setMailAutoTag(_oSelectMI);
break;
case 'ad':
reportAdJson({bShowConfirm:true,bNotAd:false},_oSelectMI);
break;
case 'createreceiverule':
getTop().ossLog("delay","all","stat=donothing&locval=maillist,clickcreatereceiverule,,1,1");
goUrlMainFrm(T('/cgi-bin/setting2?sid=$sid$&Fun=Create&CurFilterID=0&sender=1&sendercontent=$sendercontent$').replace({sid:getSid(),sendercontent:_oSelectMI&&_oSelectMI.oMail&&_oSelectMI.oMail[0]&&_oSelectMI.oMail[0].sSEmail}));
break;
case 'topmail':
topMail(null,extend(_aoMailInfo,{oncomplete:function(_aoCBInfog,_abIsSet){
var _oTop=getTop();
QMMLCache.upVer();
if(_abIsSet)
{
_oTop.showInfo("\u7F6E\u9876\u6210\u529F");
_oSelf._topMailWithNotReload(_aoCBInfog);
_oTop.LogKV('mailisttop|top|kv');
}
else{
_oTop.showInfo("\u53D6\u6D88\u7F6E\u9876\u6210\u529F");
getMainWin().location.reload();
_oTop.LogKV('mailisttop|canceltop|kv');
}
return true;
}}));
break;
default:
var _oExecResult;
if(_oExecResult=/fid_(.+)/.exec(_asItemId))
{
_oSelf._configPreRmMail('moveMailJs');
moveMailJs(_oExecResult[1],_asItemValue,_oSelectMI.sFid,_oSelectMI);
}
else if(_oExecResult=/tid_(.+)/.exec(_asItemId))
{
_oSelf._configMail('addtag');
QMTag.setMailTag(_oExecResult[1],_oSelectMI);
}
break;
}return true;
},_MAILTOP_CONTAINER_TEMP:['<div class="bd talk">','<input type="checkbox" class="one" name="selectgroup" onclick="getTop().CA(this)"','style="position:absolute;margin:0 0 0 -33px" id="mailtops"','keyword="mailtops">','<a class="cur_default">','<label for="mailtops" hidefocus="">','<b>\u7F6E\u9876\u90AE\u4EF6</b>','(<span class="newfd underline" title="\u9009\u4E2D\u7EC4\u5185\u8BE5\u9875\u6240\u6709\u90AE\u4EF6" hidefocus="">0 \u5C01</span>)','</label>','</a>','</div>','<div class="toarea" group_id="mailtops" id="div_mailtops"><div>'].join(""),_topMailWithNotReload:function(a){
var k=this,l=getTop(),e=l.S("div_mailtops",l.getMainWin()),f=l.S("tips_bar",l.getMainWin()),g=a.oMail&&a.oMail[0],h=g.oTable,d=h.parentNode,j,c,b=l.finds("table",d).length;
if(!g)
{
return;
}
if(b==2)
{
j=d.previousElementSibling||d.previousSibling;
l.show(d,false);
l.show(j,false);
}
if(l.getMainWin()._bIsNotPage1)
{
configPreRmMail._preRmMailUI(a);
return;
}
if(!e)
{
l.insertHTML(f,"afterEnd",k._MAILTOP_CONTAINER_TEMP);
e=l.S("div_mailtops",l.getMainWin());
}
e.insertBefore(h,e.firstChild);
j=e.previousElementSibling||e.previousSibling;
if((c=l.finds("span",j))&&c.length>0&&(c=c[0]))
{
c.innerHTML=c.innerHTML.replace(/([\d]*)\s\u5C01/,function(n,m){
return (parseInt(m)+1)+" \u5C01";
});
}
l.attr(g.oChk,"istop",1);
l.show(l.finds(".icon_mailtop",h)[0],true);
},_configMail:function(a){
var c=this._moConfig._moSelectMailInfo;
if(c.oWin.location.href.indexOf('t=mail_list_ad')>0)
{
var b=c.oncomplete;
c.oncomplete=function(){
switch(a)
{case 'unstar':
case 'rmalltag':
getTop().showInfo('\u53D6\u6D88\u6210\u529F');
break;
case 'star':
case 'addtag':
getTop().showInfo('\u6807\u8BB0\u6210\u529F');
break;
default:
getTop().showInfo('\u64CD\u4F5C\u6210\u529F');
}return b.apply(this,arguments);
};
}
},_configPreRmMail:function(a){
return configPreRmMail(this._moConfig._moSelectMailInfo,a);
}};
var QMTag={_msTimeStamp:"",_moTagData:{},_moTagIndex:[]};
QMTag.getCurrentUIMethod=function(a,b){
if(a.oWin.location.href.indexOf('t=mail_list_ad')>0)
{
return function(){
return true;
};
}
return function(){
return QMTag[b].apply(QMTag,arguments);
};
};
QMTag.set=function(a,b){
var e=this;
if(!b||b>e._msTimeStamp)
{
b&&(e._msTimeStamp=b);
e._moTagIndex=[];
e._moTagData={};
for(var c=0,d=a.length;c<d;c++)
{
var f=a[c],g=f.id,h;
if(g!=h)
{
e._moTagIndex.push(g);
e._moTagData[g]=f;
f._mnIndex=c;
}
}
}
};
QMTag.get=function(){
for(var d=[],e=this,c=e._moTagIndex,a=0,b=c.length;a<b;a++)
{
d.push(e._moTagData[c[a]]);
}
return d;
};
QMTag.setItem=function(b,a,c){
var d=this._moTagData;
if(d[b])
{
d[b][a]=c;
}
};
QMTag.getItem=function(b,a){
var c=this._moTagData[b];
return c&&a?c[a]:c;
};
QMTag._disposeResponse=function(_asParam){
try{
var _oResult=eval(_asParam),_oTagList=_oResult.taglist;
_oResult.mailids.length--;
_oResult.taglist.length--;
_oTagList&&_oTagList.length&&QMTag.set(_oTagList,_oResult.timestamp);
}
catch(e)
{
}
return _oResult;
};
QMTag.setMailTag=function(b,a){
var l=a.oMail,j=l.length,h=0,p=[],n=getMainWin(),c=isSelectAllFld(n),d=checkSelectGroup();
if(!j)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
else if(c||d)
{
var o=getSelectAllParam(n);
p=['mailaction=',o.type,'&fun=mail_flagtag&tagid=',b];
o.fid&&p.push('&folderid=',o.fid);
o.tid&&p.push('&srctagid=',o.tid);
o.groupid&&p.push('&groupid=',o.groupid);
if(o.flags)
{
var k=o.flags.split("|");
E(k,function(u){
if(u!="")
{
p.push('&flag=',u);
}
});
}
d&&p.push(getSelectGroupUrl());
}
else{
p=['mailaction=mail_tag&fun=add&tagid=',b];
a.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(n,false);
var f=QMTag.getCurrentUIMethod(a,'addTagUICustom');
for(var t=0;t<j;t++)
{
var m=l[t],s=m.sMid;
if(f(a,m,b))
{
h++;
p.push('&mailid=',s);
rdVer(s,1);
QMMailCache.addData(s,{addTagId:b});
if(m.bUnr)
{
var g=getMLMailItemUnreadNum.getNum(m);
var r='tag_'+b,q=m.oTagIds,e=true;
setTagUnread(r,getFolderUnread(r)+g);
if(attr(S(["folder_tag_",b,"_td"].join("")),"st")!="true")
{
for(var t=0;t<q.length;++t)
{
_oTagLi=S(["folder_tag_",q[t],"_td"].join(""));
if(attr(_oTagLi,"st")!="true")
{
e=false;
break;
}
}
}
else{
e=false;
}
if(e)
{
setTagUnread('tag',getFolderUnread('tag')+g);
}
}
}
}
QMMailList.getCurrentInstance(a,'setMailTag').selectedUICustom(a,'setMailTag');
if(h)
{
AjaxSendMailMgr({oQuery:p,sSuccessMask:'mail_tag successful',sDefErrMsg:'\u8BBE\u7F6E\u6807\u7B7E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(w,v,u){
var w=QMTag._disposeResponse(v),x=a.oWin;
callBack(a.oncomplete,[a,w]);
if(x.QMReadMail)
{
x.QMReadMail.modifyTag(b,0);
}
if(j>2)
{
setMailFilter({sFilterType:"tag",sTagId:b,sTagName:QMTag.getItem(b).name},a);
}
(c||d)&&reloadLeftWin();
changeSelectAllCkbStatus();
return;
}});
}
};
QMTag.newMailTag=function(a){
a=a||{};
promptFolder({type:'tag',onreturn:function(b){
var g=a&&a.oMail,e=g&&g.length,k=[],h=getMainWin(),c=isSelectAllFld(h),d=checkSelectGroup();
if(c||d)
{
var j=getSelectAllParam(h);
k=['mailaction=',j.type,'&fun=mail_flagtag_new&tagname=',encodeURI(b)];
j.fid&&k.push('&folderid=',j.fid);
j.tid&&k.push('&srctagid=',j.tid);
j.groupid&&k.push('&groupid=',j.groupid);
if(j.flags)
{
var f=j.flags.split("|");
E(f,function(m){
if(m!="")
{
k.push('&flag=',m);
}
});
}
d&&k.push(getSelectGroupUrl());
}
else{
k=['&mailaction=mail_tag&fun=add&tagname=',encodeURI(b)];
a.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(h,false);
for(var l=0;l<e;l++)
{
k.push('&mailid=',g[l].sMid);
}
AjaxSendMailMgr({oQuery:k,sSuccessMask:'mail_tag successful',sDefErrMsg:'\u521B\u5EFA\u6807\u7B7E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(p,n,m){
showInfo("\u6807\u7B7E\u521B\u5EFA\u6210\u529F");
reloadLeftWin();
callBack(a.oncomplete,[a,p]);
var q=a&&a.oWin.QMReadMail;
if(!a)
{
return reloadFrmLeftMain(true,true);
}
var p=QMTag._disposeResponse(n);
QMMailList.getCurrentInstance(a,'newMailTag').selectedUICustom(a,'newMailTag');
var o=QMTag.getCurrentUIMethod(a,'addTagUICustom');
for(var r=0;r<e;r++)
{
o(a,g[r],p.newtag.id);
}
reloadFrmLeftMain(true,false);
(c||d)&&reloadLeftWin();
changeSelectAllCkbStatus();
}});
}});
};
QMTag._autoTagOldMail=function(_asFilterId,_abMailList){
confirmBox({title:"\u6536\u4FE1\u89C4\u5219",msg:"\u5BF9\u4E8E\u6536\u4EF6\u7BB1\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u5DF2\u6709\u90AE\u4EF6\uFF0C\u60A8\u662F\u5426\u4E5F\u8981\u6807\u4E0A\u6B64\u6807\u7B7E\uFF1F",confirmBtnTxt:'\u662F',cancelBtnTxt:'\u5426',onreturn:function(_abIsOk){
if(_abIsOk)
{
AjaxSendMailMgr({oQuery:['&fun=AutoTag&mailaction=mail_filter&filterid=',_asFilterId],sSuccessMask:'mail_tag successful',sDefErrMsg:'\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(_oResult,_asParam,_aoXmlObj){
var _oResult=eval(_asParam);
callBack(_aoConfig.oncomplete,[_aoConfig,_oResult]);
if(_oResult.count)
{
reloadFrmLeftMain(1,1);
}
return showInfo(T(_oResult.count?"\u64CD\u4F5C\u6210\u529F\uFF0C\u6807\u8BB0\u4E86$count$\u5C01\u90AE\u4EF6\u3002<a href='/cgi-bin/mail_list?sid=$sid$&folderid=all&tagid=$tagid$'  style='color:white' onclick='getTop().hiddenMsg();' target='mainFrame'>[\u67E5\u770B]</a>":"\u64CD\u4F5C\u6210\u529F\uFF0C\u60A8\u6CA1\u6709\u9700\u8981\u79FB\u52A8\u6216\u6807\u8BB0\u7684\u90AE\u4EF6\u3002").replace(_oResult),30000);
}});
}
else{
reloadFrmLeftMain(1,!_abMailList);
}
}});
};
QMTag.setMailAutoTag=function(a){
var e=a.oMail,b=false,d=/[~!#\$%\^&\*\(\)=\+|\\\[\]\{\};\':\",\?\/<>]/ig,f=['&mailaction=mail_tag&Fun=AutoTag'];
if(isSelectAllFld(getMainWin()))
{
return showError('\u5168\u9009\u6587\u4EF6\u5939\u4E0D\u80FD\u65B0\u5EFA\u81EA\u52A8\u6807\u7B7E');
}
for(var c=e.length-1;c>=0;c--)
{
if(e[c].bSys)
{
return showError('\u7CFB\u7EDF\u90AE\u4EF6\u4E0D\u80FD\u65B0\u5EFA\u81EA\u52A8\u6807\u7B7E');
}
f.push('&mailid=',e[c].sMid);
}
confirmBox({mode:"prompt",title:'\u65B0\u5EFA\u81EA\u52A8\u6807\u7B7E',sType:"custom",msg:['<div style="padding:10px;">','<div style="width:100%;margin:10px;"><b>\u5BF9\u4E8E\u53D1\u4EF6\u4EBA</b><input type="text" id="addr" style="width:300px;margin-left:54px;"/></div><div style="margin:10px;"><b>\u6765\u4FE1\u81EA\u52A8\u6807\u4E3A\u6807\u7B7E</b><input type="text" id="name" style="width:300px;margin-left:15px;"/></div>','<div class="graytext" style="width:450px;margin:10px;">\u8BE5\u53D1\u4EF6\u5730\u5740\u7684\u6765\u4FE1\uFF0C\u4F1A\u81EA\u52A8\u52A0\u4E0A\u6807\u7B7E\uFF0C\u4FBF\u4E8E\u60A8\u8BC6\u522B\u548C\u7BA1\u7406\u90AE\u4EF6\u3002</div>','</div>'].join(''),onload:function(){
var g=this;
addEvents([g.S("addr"),g.S("name")],{keydown:function(h){
if(h.keyCode==13)
{
b=true;
g.close();
}
}});
},onshow:function(){
var g=this,j=a._moSelectMailInfo,h=QMMailList._singleAddrNick(a),l=h[1],k=h[0];
if(!l||!k)
{
g.S('addr').focus();
}
else{
g.S('addr').value=k.split(',')[0];
g.S('name').value=trim(htmlDecode(l).split(/[,@]/)[0].replace(d,''))+"\u7684\u6765\u4FE1";
}
},onreturn:function(g){
var j=this,k=trim(j.S('addr').value),l=trim(j.S('name').value);
if(!g&&!b)
{
return;
}
if(!k)
{
return showError('\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u540D\u79F0\u6216\u5730\u5740');
}
var h=getAsiiStrLen(l);
if(h==0||h>50)
{
return showError(h?"\u6807\u7B7E\u540D\u79F0\u592A\u957F\uFF0C\u8BF7\u4F7F\u7528\u5C11\u4E8E50\u4E2A\u5B57\u7B26(25\u4E2A\u6C49\u5B57)\u7684\u540D\u79F0":'\u8BF7\u8F93\u5165\u6807\u7B7E\u540D\u79F0');
}
if(d.test(l))
{
return showError('\u6807\u7B7E\u540D\u79F0\u4E0D\u80FD\u5305\u542B ~!#$%^&*()=+|\\[]{};\':",?/<> \u7B49\u5B57\u7B26');
}
f.push('&sender=',encodeURI(k),'&tagname=',encodeURI(l));
AjaxSendMailMgr({sUrl:'/cgi-bin/setting2',oQuery:f,sSuccessMask:'mail_tag successful',sDefErrMsg:'\u8BBE\u7F6E\u81EA\u52A8\u6807\u7B7E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',onload:function(p,n,m){
showInfo("\u8BBE\u7F6E\u81EA\u52A8\u6807\u7B7E\u6210\u529F\uFF0C\u901A\u8FC7\u6536\u4FE1\u89C4\u5219\uFF0C\u6765\u4FE1\u5C06\u81EA\u52A8\u6807\u4E0A\u6807\u7B7E\u3002");
var q=a.oWin,p=QMTag._disposeResponse(n);
if(!a.bML&&q.QMReadMail)
{
rdVer(q.QMReadMail.getMailId(),1);
}
else{
QMMailList.getCurrentInstance(a,'setMailAutoTag').selectedUICustom(a,'setMailAutoTag');
var o=QMTag.getCurrentUIMethod(a,'addTagUICustom');
for(var r=e.length-1;r>=0;r--)
{
o(a,e[r],p.newtag.id);
}
}
QMTag._autoTagOldMail(p.filterid,a.bML);
return;
}});
}});
};
QMTag.rmTag=function(b,a){
var n=a.oMail,l=n.length,k=0,r=[],p=getMainWin(),d=isSelectAllFld(p),c=a.bNoCheck,e=checkSelectGroup();
if(!l)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
else if(d||e)
{
var q=getSelectAllParam(p);
r=['mailaction=',q.type,'&fun=mail_flaguntag'];
q.fid&&r.push('&folderid=',q.fid);
q.tid&&r.push('&srctagid=',q.tid);
q.groupid&&r.push('&groupid=',q.groupid);
if(q.flags)
{
var m=q.flags.split("|");
E(m,function(j){
if(j!="")
{
r.push('&flag=',j);
}
});
}
e&&r.push(getSelectGroupUrl());
}
else{
r=['&mailaction=mail_tag&fun=del'];
a.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(p,false);
if(b)
{
r.push('&tagid=',b);
}
var g=QMTag.getCurrentUIMethod(a,'rmTagUICustom');
for(var v=n.length-1;v>=0;v--)
{
if(g(a,n[v],b)||c)
{
k++;
var o=n[v],u=o.sMid;
r.push('&mailid=',u);
rdVer(u,1);
QMMailCache.addData(u,{removeTagId:b});
if(o.bUnr)
{
var h=getMLMailItemUnreadNum.getNum(o);
var s=b?o.oTagIds:[b],f=true;
if(b)
{
var t='tag_'+b;
setTagUnread(t,getFolderUnread(t)-h);
}
else{
E(o.oTagIds,function(j){
var x='tag_'+j;
setTagUnread(x,getFolderUnread(x)-h);
});
}
if(b=="")
{
for(var s=o.oTagIds,w=0;w<s.length;++w)
{
if(s[w]==b)
continue;
_oTagLi=S(["folder_tag_",s[w],"_td"].join(""));
if(attr(_oTagLi,"st")!="true")
{
f=true;
break;
}
}
}
else if(attr(S(["folder_tag_",b,"_td"].join("")),"st")!="true")
{
for(var s=o.oTagIds,w=0;w<s.length;++w)
{
if(s[w]==b)
continue;
_oTagLi=S(["folder_tag_",s[w],"_td"].join(""));
if(attr(_oTagLi,"st")!="true")
{
f=false;
break;
}
}
}
else{
f=false;
}
if(f)
{
setTagUnread('tag',getFolderUnread('tag')-h);
}
}
}
}
QMMailList.getCurrentInstance(a,'rmTag').selectedUICustom(a,'rmTag');
if(k)
{
AjaxSendMailMgr({oQuery:r,sSuccessMask:"mail_tag successful",sDefErrMsg:T(['\u79FB\u9664\u6807\u7B7E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5']),onload:function(y,x,j){
QMTag._disposeResponse(x);
callBack(a.oncomplete,[a,y]);
(d||e)&&reloadLeftWin();
}});
}
};
QMTag.rmTagUI=function(a,b){
if(b)
{
for(var d=GelTags("table",a),c=d.length-1;c>=0;c--)
{
if(d[c].getAttribute("tagid")==b)
{
removeSelf(d[c]);
return true;
}
}
}
else{
a.innerHTML='';
return true;
}
return false;
};
QMTag.rmTagUICustom=function(a,b,c){
return QMTag.rmTagUI(b.oTCont,c);
};
QMTag.addTagUI=function(b,e,c,d,a){
for(var g=GelTags("table",b),f=g.length-1;f>=0;f--)
{
if(g[f].getAttribute('tagid')==e)
{
return false;
}
}
var h=TE(['<table cellspacing="0" cellpadding="0" border="0" class="tagleftDiv flagbg$flagbg$" tagid="$id$">','<tr>','<td class="falg_rounded">\n','</td>','<td colspan="2">\n','</td>','<td class="falg_rounded">\n','</td>','</tr>','<tr>','<td>\n','</td>','<td class="tagbgSpan" tid2="$id$">','<span>\u4E2Da</span>$name$<span>\u4E2Da</span>','$@$if($t$=="mail_list")$@$<div class="closeTagSideDiv flagbg$flagbg$" style="display:none" title="\u53D6\u6D88\u6B64\u6807\u7B7E" tid2="$id$">&nbsp;&nbsp;&nbsp;</div>$@$endif$@$','</td>','$@$if($t$!="mail_list")$@$<td title="\u53D6\u6D88\u6B64\u6807\u7B7E" class="closeTagDiv $disclose$" tid2="$id$">&nbsp;</td>$@$endif$@$','<td>\n','</td>','</tr>','<tr>','<td class="falg_rounded">\n','</td>','<td colspan="2">\n','</td>','<td class="falg_rounded">\n','</td>','</tr>','</table>']).replace(extend({t:a?"readmail":"mail_list",folderid:c,mailid:d||""},QMTag.getItem(e)));
insertHTML(b,"beforeEnd",h);
return true;
};
QMTag.addTagUICustom=function(a,b,c){
return QMTag.addTagUI(b.oTCont,c,a.sFid,b.sMid,!a.bML);
};
QMTag.showTagClose=function(b,a){
function d(g,f)
{
try{
for(var j=GelTags("div",g),h=j.length-1;h>=0;h--)
{
if(j[h].className.indexOf("closeTagSideDiv")>-1)
{
show(j[h],f);
return;
}
}
}
catch(k)
{
}
}
var c=arguments.callee;
if(c._mnTimeout)
{
clearTimeout(c._mnTimeout);
}
if(c._moTable!=b)
{
d(c._moTable,0);
}
c._moTable=b;
c._mnTimeout=setTimeout(function(){
d(b,a);
},a?500:100);
};
QMTag.readclose=function(b,a){
var c=getEventTarget(b),d;
while(c)
{
d=c.className;
if(/closeTag(Side)?Div/.test(d))
{
QMTag.rmTag(c.getAttribute('tid2'),a);
return true;
}
else if(d=='tagbgSpan')
{
readTag(c.getAttribute('tid2'),a.oWin,a.sFid);
return true;
}
c=c.parentNode;
}
return false;
};
function readTag(c,a,b)
{
b=b>100?b:"all";
goUrlMainFrm(T('/cgi-bin/mail_list?sid=$sid$&tagid=$tagid$&folderid=$folderid$&page=0').replace({tagid:c,folderid:b,sid:getSid()}));
}
var initMailSelect=(function(){
function c(h,d,g,j,k,e,f)
{
var l=b.apply(null,arguments),m=l.getConfig();
if(h)
{
E(SN("selmContainer",j),function(n){
if(!n.innerHTML)
{
new QMSelect({oContainer:n,sDefaultItemValue:"\u79FB\u52A8\u5230...",sMenuType:"dropdown",oMenu:{nWidth:"auto",nMaxWidth:180,nMinWidth:90,bAutoItemView:true,bAutoClose:true,oItems:h},onafteropenmenu:function(o,p){
var q;
if(m.mnFolderType===0||m.mnFolderType==4)
{
q=QMMailList.getCBInfo(m.oWin);
}
else{
if(n.id=='selmContainerInEditMode')
{
q=m.oWin.QMReadMail.getCBInfo4EditMode(m.oWin);
}
else{
q=m.oWin.QMReadMail.getCBInfo(m.oWin);
}
}
l.setMailInfo(q);
},onselect:function(o){
l.apply(o.sId,o.sItemValue);
return true;
}});
}
});
}
E(SN("markContainer",j),function(n){
if(n.innerHTML)
{
return;
}
if(!(m.bReadMode||m.bStarMode||m.bTagMode))
{
show(n,false);
return;
}
new QMSelect({oContainer:n,sMenuType:"dropdown",sDefaultItemValue:"\u6807\u8BB0\u4E3A...",oMenu:{nWidth:"auto",nMaxWidth:180,bAutoItemView:true,bAutoClose:true,oItems:[]},onselect:function(o){
var p=this.get("menu");
l.apply(o.sId,o.sItemValue);
p.hide();
getTop().changeSelectAllCkbStatus();
return true;
},onbeforeopenmenu:function(o){
m._moTagItems=m.bTagMode?QMTag.get():[];
o.sDefaultId="";
o.oItems=a(m);
},onafteropenmenu:function(o){
var q;
if(m.mnFolderType===0||m.mnFolderType==4)
{
q=QMMailList.getCBInfo(m.oWin);
var p=q.oMail.length;
o.itemOption("rmalltag","bDisplay",p);
o.itemOption("deltaghr","bDisplay",p);
if(o.hasItem('ad')&&m.oWin.location.href.indexOf('s=inbox')==-1)
{
o.itemOption('ad','bDisplay',false);
o.itemOption('adhr','bDisplay',false);
}
}
else{
q=m.oWin.QMReadMail.getCBInfo(m.oWin);
if(o.hasItem('ad')&&q.oMail[0].bAd===true)
{
o.itemOption('ad','bDisplay',false);
o.itemOption('adhr','bDisplay',false);
}
}
l.setMailInfo(q);
}});
});
}
function b(h,d,g,j,k,e,f)
{
return BaseMailOper._craeteInstance({sFolderid:k,bReadMode:d&&k!=4&&k!=14,bStarMode:d,bAutoTag:e||false,bTagMode:g&&k!=5&&k!=6,moMoveItem:h,bSpam:f||false,oWin:j});
}
function a(d)
{
var h=[],g={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>',bDisSelect:true},l=T(['<div style="white-space:nowrap;zoom:1;">','<input type="button" class="item_square flagbg$flagbg$"/>','<span class="item_square_txt">$name$ &nbsp</span>','</div>']);
if(d.bReadMode)
{
h.push({sId:"read",sItemValue:"\u5DF2\u8BFB\u90AE\u4EF6"});
if(d.oWin.location.href.indexOf('t=mail_list_ad')==-1)
{
h.push({sId:"unread",sItemValue:"\u672A\u8BFB\u90AE\u4EF6"});
}
h.push(g);
}
var m=d.oWin.location.href;
var e=getTop().goExpers;
if(e&&e.openadv&&d.sFolderid==1)
{
h.push({sId:"ad",sItemValue:"\u5E7F\u544A\u90AE\u4EF6"},extend({sId:'adhr'},g));
}
if(d.bStarMode)
{
h.push({sId:"star",sItemValue:"\u661F\u6807\u90AE\u4EF6"},{sId:"unstar",sItemValue:"\u53D6\u6D88\u661F\u6807"});
if(d.bTagMode)
{
h.push(g);
}
}
if(d.bTagMode)
{
h.push({sId:'rmalltag',sItemValue:'\u53D6\u6D88\u6807\u7B7E'},extend({sId:'deltaghr'},g));
for(var k=QMTag.get(),n=0,f=k.length;n<f;n++)
{
var j=k[n];
h.push({sId:'tid_'+j.id,sItemValue:l.replace(j)});
}
if(f)
{
h.push(g);
}
h.push({sId:'newtag',sItemValue:'\u65B0\u5EFA\u6807\u7B7E'});
}
return h;
}
c.getMailOperInstance=b;
c.generateMarkMenuItems=a;
return c;
})();
var QMFileAdaptor=(function(a){
return {isBrowser:function(b){
return ({ie:gbIsIE,safari:gbIsSafari,chrome:gbIsChrome,ff:gbIsFF})[b];
},browserVer:function(){
return gnIEVer;
},getDomWin:function(b){
var c=b.ownerDocument;
return c.parentWindow||c.defaultView;
},isSystem:function(b){
return ({win:gbIsWin,mac:gbIsMac})[b];
},S:S,removeSelf:removeSelf,insertHTML:insertHTML,finds:finds,addEvent:addEvent,addEvents:addEvents,stopPropagation:stopPropagation,preventDefault:preventDefault,createActiveX:createActiveX,createBlankIframe:createBlankIframe,unikey:unikey,generateFlashCode:generateFlashCode,detectActiveX:detectActiveX,E:E,trim:trim,qmFlash:qmFlash,T:T,TE:TE,extend:extend,evalValue:evalValue,getRes:getRes};
})();
(function(a,b){
var f={},d,g=window;
d=f.components={};
f.libs={};
var c=function(){
};
var h=function(){
};
h.prototype={create:function(m,l,s){
var r=getTop();
var q=this,o=l.oComlist||q.orders[m],p=q._getService(m,o),n=d[p.sCom];
debug("uploader implement:"+p.sCom);
l.sType=m;
if(n)
{
if(s&&p.sCom=="RawinputPopupMail"&&(/^https/.test(r.getTopHost())||/webdev/.test(location.hostname)))
{
r.LogKV("https|rawinputpopupmail|cannot|upload");
return;
}
if(m=="popup"&&p.sCom.indexOf('Flash')!=-1)
{
while((p=q._getService(m,o,+p.nIdx+1))&&d[p.sCom]&&p.sCom.indexOf('Flash')!=-1)
;
d[p.sCom]&&new d[p.sCom](l);
}
return new n(l);
}
},orders:{"base":["Base"],"popup":["FlashPopup","Html5Popup","ActivexPopup","RawinputPopup"],"drag":["Html5Drag","ActivexDrag"],"paste":["ActivexPaste"]},_getService:function(n,m,l){
l=l||0;
if(m)
{
for(var q in m)
{
if(q>=l)
{
var p=m[q],o=d[p]&&new (d[p])();
if(o&&o.detect(n))
{
return ({nIdx:q,sCom:p});
}
}
}
}
return {nIdx:-1};
}};
var e=new h();
f.qmCreater=h;
f.create=function(m,l){
return e.create(m,l);
};
f.create.oCreaterInstance=e;
f.createCom=function(m,l,n){
var o=d[n],q=(o&&new o())||{},p=function(){
if(arguments.length>0)
{
this.name=m;
this.init_.apply(this,arguments);
}
};
p.prototype=q;
a.extend(p.prototype,typeof (l)=="function"?l(o&&o.prototype):l);
d[m]=p;
};
var j=function(l){
var m=this;
m._moInfo={};
m.set(l);
};
j.prototype={set:function(l,m){
var n=this;
if(!l)
{
return;
}
if(typeof l=="object")
{
a.extend(n._moInfo,l);
}
else{
n._moInfo[l]=m;
}
return n;
},get:function(l){
var m=this;
if(l)
{
return m._moInfo[l];
}
else{
return m._moInfo;
}
},upload:function(){
var l=this;
return l.oUploader.upload(l);
},destroy:function(){
var l=this;
l.oUploader.rmFile(l);
},cancel:function(){
var l=this;
l.oUploader.cancel(l);
},uploader:function(){
return this.oUploader;
}};
f.qmFile=j;
var k=function(l){
this._moCfg=a.extend({},this._oDefaults,l);
this._moLangs=a.extend({},this._oLangs,l.oLangs);
};
k.prototype={_oDefaults:{nMaxFileSize:0,nMaxFileNum:0,oFileTypes:null},_oLangs:{FILENUM_OVERFLOW:'\u9009\u62E9\u7684\u6587\u4EF6\u8FC7\u591A',FILESIZE_OVERFLOW:'\u4E0A\u4F20\u6587\u4EF6\u8FC7\u5927',FILESIZE_ZERO:'\u4E0D\u80FD\u4E0A\u4F20\u7A7A\u6587\u4EF6',FILEINFO_ERROR:'\u6587\u4EF6\u8DEF\u5F84\u8BC6\u522B\u9519\u8BEF\u6216\u8D85\u51FA\u5927\u5C0F\u9650\u5236',SELECT_ERROR:'\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9',NOTSUPPERTYPE:'\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B'},setConfig:function(l,m){
this._moCfg[l]=m;
},getConfig:function(l){
return this._moCfg[l];
},setLang:function(l,m){
this._moLangs[l]=m;
},selectFile:function(l){
var m=this._selectFile(l);
return m&&[this.getErrMsg(m),m];
},selectFiles:function(l){
var n=this._moCfg;
if(n.nMaxFileNum&&l.length>n.nMaxFileNum)
{
return this._err({},'FILENUM_OVERFLOW',null,0);
}
var m=false;
var o={};
for(var r=0,s=l.length;r<s;r++)
{
var p=l[r];
var q=this._selectFile(p);
if(q)
{
m=true;
this._err(o,q,p,r);
}
}
return m&&o;
},_selectFile:function(l){
var o=this;
var n=o._moCfg;
var m=l.get('nSize');
if(m===0)
{
return 'FILESIZE_ZERO';
}
else if(m)
{
if(n.nMaxFileSize&&m>n.nMaxFileSize)
{
return 'FILESIZE_OVERFLOW';
}
else if(m<0)
{
return 'FILEINFO_ERROR';
}
}
if(l.get('sStatus')=='error')
{
return 'SELECT_ERROR';
}
return this.isInFileType(l.get('sName'));
},_err:function(m,o,n,l){
if(!m[o])
{
m[o]={sMsg:this.getErrMsg(o),oFiles:[n]};
}
else{
m[o].oFiles.push(n);
}
m[l]=m[o];
return m;
},getErrMsg:function(l){
return this._moLangs[l];
},isInFileType:function(l){
var m=this._moCfg;
if(m.oFileTypes&&l)
{
var n=l.split('.').pop().toLowerCase();
if(n==l.toLowerCase()||!(new RegExp('^('+m.oFileTypes.join('|')+')$')).test(n))
{
return 'NOTSUPPERTYPE';
}
}
}};
f.qmFileSelecter=k;
f.oUtil={isFileDragOver:function(l){
var n=l.dataTransfer.types,m=false;
if(n===null)
{
return true;
}
else{
a.E(n,function(o){
if(o=="Files")
{
m=true;
return true;
}
});
return m;
}
},detectFlash:function(){
return a.qmFlash.getFlashVer().version>=10.3;
},stringifySpeed:function(l){
if(l>1024)
{
return Number((l*100/1024)/100).toFixed(2)+"M/s";
}
else if(l>=1000)
{
return Number(l).toFixed(1)+"K/s";
}
return Math.floor(l||0)+"K/s";
},formatTime:function(l){
if(!l||l==Infinity||isNaN(l)||l<0)
{
return '00:00:00';
}
l=Math.round(l);
var o=60,n=60*o,p=Math.floor(l/o),m=function(q){
return q<10?("0"+q):q;
};
return [m(Math.floor(l/n)),m(p>=o?p%o:p),m(l%o)].join(':');
},formatExpireTimeToDays:function(l){
try{
if(l>0)
{
var m=(l/86400).toFixed(0),n="";
if(m>5)
{
n=', <span class="graytext">'+m+'\u5929\u540E\u8FC7\u671F</span>';
}
else{
n=', <span class="txt_red">'+m+'\u5929\u540E\u8FC7\u671F</span>';
}
return n;
}
else if(l!=-1)
{
var n="";
if(l.indexOf("\u5929")>-1)
{
var m=parseInt(l);
if(m>5)
{
n=', <span class="graytext">'+m+'\u5929\u540E\u8FC7\u671F</span>';
}
else{
n=', <span class="txt_red">'+m+'\u5929\u540E\u8FC7\u671F</span>';
}
}
else if(l.indexOf("\u5C0F\u65F6")>-1)
{
n=', <span class="txt_red">'+l+'\u540E\u8FC7\u671F</span>';
}
else if(l.indexOf("\u5373\u5C06\u8FC7\u671F")>-1)
{
n=', <span class="txt_red">'+l+'</span>';
}
return n;
}
}
catch(o)
{
}
},formatSize:function(m,l){
if(isNaN(m)||m==-1)
{
return "";
}
if(m>1024*1024*1024)
{
return Number((m*100/(1024*1024*1024))/100).toFixed(isNaN(l)?2:l)+"G";
}
if(m>1024*1024)
{
return Number((m*100/(1024*1024))/100).toFixed(isNaN(l)?2:l)+"M";
}
if(m>1024)
{
return Number((m*100/1024)/100).toFixed(isNaN(l)?1:l)+"K";
}
return Math.ceil(m)+"B";
}};
f.createCom("Base",{init_:function(l){
var n=this,m={};
if(typeof l=="function")
{
l=l.call(n,n.name);
}
n._moFiles={};
l.sUrl=l.sUrl||"";
l.sFile=l.sFile||"UploadFile";
l.oBodyData=l.oBodyData||{};
n.initConfg(l);
},initConfg:function(l){
this.oCfg=a.extend(this.oCfg||{},l);
},qmFile:j,nConcurrent:1,detect:function(l){
return true;
},callBack:function(m,l){
var p=this,o=p.oCfg,n=o[m]||c;
n.apply(p,l);
},getUploadingCnt:function(){
var n=this,l=0,m=n.getFile();
for(var o in m)
{
if(m[o].get("sStatus")=="uploading")
{
l+=1;
}
}
return l;
},isBusy:function(){
var l=this;
return l.getUploadingCnt()>=l.nConcurrent;
},cancel:function(l){
var m=this;
if(l.get("sStatus")=="uploading")
{
l.set("sStatus","cancel");
m.calcUsedTime(l);
m.ossLog(l);
l.fCancel&&l.fCancel();
}
else if(l.get("sStatus")=="ready")
{
l.set("sStatus","cancel");
}
clearInterval(l._nWaitProcess);
clearTimeout(l._nTimer);
m.rmFile(l);
},onselect:function(l){
var m=this;
m.callBack("onselect",[l]);
},calcSpeed:function(m,l){
var q=this,n=new Date().valueOf();
if(!m.get("nSize")||!m.get("nUploadPercent")||m.get("nUploadPercent")>=100)
{
return;
}
if(!m._nLastProcssTime||m.get("nUploadPercent")-m._nLastProcessPercent<0)
{
m._nLastProcessPercent=m.get("nUploadPercent");
m._nLastProcssTime=n;
return;
}
if(!m.get("nSpeed")||n-m._nLastProcssTime>(l||1000))
{
var p=m.get("nSize")*(m.get("nUploadPercent")-m._nLastProcessPercent)/100/(n-m._nLastProcssTime);
if(p<=0)
{
if(m._nLastProcssSpeed)
{
p=m._nLastProcssSpeed;
m._nLastProcssSpeed=null;
}
else{
p=m.get('nSpeed')*3/4;
m._nLastProcssSpeed=m.get('nSpeed');
}
}
else if(m._nLastProcssSpeed)
{
m._nLastProcssSpeed=null;
}
if(p>0)
{
var o=m.get("nSize")*(100-m.get("nUploadPercent"))/100/p;
m.set({nSpeed:(p/1024*1000).toFixed(2),nRemainTime:(o/1000).toFixed(2)});
m._nLastProcessPercent=m.get("nUploadPercent");
m._nLastProcssTime=n;
}
}
},onprocess:function(l){
var m=this;
if(l.get("nUploadPercent")>100)
{
return;
}
if(!l.get('nUploadPercent'))
{
l._nMaxUploadPercent=0;
}
else{
l._nMaxUploadPercent=Math.max(l._nMaxUploadPercent||0,l.get('nUploadPercent'));
}
l.set('nUploadPercent',l._nMaxUploadPercent);
if(l.get("sUploadStep")=='waiting')
{
if(!l._bOssLogWaitAfterErr)
{
l._bOssLogWaitAfterErr=true;
a.LogKV('uploadfile|process|err|after');
}
return;
}
m.calcSpeed(l);
l.set({sStatus:"uploading",sUploadStep:"posting",nPercent:l._nMaxUploadPercent*0.8});
m.callBack("onprocess",[l]);
if(l.get("nUploadPercent")==100)
{
if(!l.get("nSpeed"))
{
m.calcSpeed(l,0);
}
l.set('sUploadStep','waiting');
l._nWaitProcess&&clearInterval(l._nWaitProcess);
l._nWaitProcess=setInterval(function(){
if(l.get('sStatus')!='uploading'||l.get('sUploadStep')!='waiting')
{
clearInterval(l._nWaitProcess);
a.LogKV('uploadfile|process|err|nowait');
}
else if(l.get("nPercent")>=99)
{
clearInterval(l._nWaitProcess);
a.LogKV('uploadfile|process|err|timeout');
}
else{
m.callBack("onprocess",[l.set('nPercent',l.get("nPercent")+1)]);
}
},100);
}
},oncomplete:function(l){
var m=this;
if(l.get("sStatus")=="uploading")
{
var n=l.get("sStatus");
l.set("sStatus","complete");
m.calcUsedTime(l);
m.ossLog(l);
l.set("sStatus",n);
m.rmFile(l);
clearTimeout(l._nTimer);
l._nTimer=setTimeout(function(){
clearInterval(l._nWaitProcess);
l.set("sStatus","complete");
l&&l.get()&&m.callBack("oncomplete",[l]);
},Math.max(1600-(new Date()).valueOf()+l.get("nUpTime"),0));
}
},onerror:function(l){
var m=this;
if(/(uploading)|(ready)|(stopped)/.test(l.get("sStatus")))
{
var n=l.get("sStatus");
l.set("sStatus","error");
m.calcUsedTime(l);
m.ossLog(l);
l.set("sStatus",n);
clearTimeout(l._nTimer);
l._nTimer=setTimeout(function(){
clearInterval(l._nWaitProcess);
l.set("sStatus","error");
l&&l.get()&&m.callBack("onerror",[l]);
},Math.max(1600-(new Date()).valueOf()+l.get("nUpTime"),0));
getTop().decreaseUploadCount(l.oUploader.name);
}
},calcUsedTime:function(l){
var m=l.get("nUpTime");
if(m)
{
l.set("nUsedTime",new Date().valueOf()-l.get("nUpTime"));
}
},cfg:function(l){
return a.extend({},this.oCfg,l&&l.oCfg);
},upload:function(l){
},ossLog:function(l){
if(typeof (l)=='string')
{
debug("ossLog msg:"+l);
}
else{
debug("ossLog sStatus:"+l.sStatus);
}
},parser:function(m,l){
return ["complete",{}];
},err:function(m,l){
return [].slice.call(arguments).join(",");
},prepareUpload_:function(l){
var m=this;
if(!m.getFile(l.get("sId")))
{
m.addFile(l);
}
if(m.isBusy())
{
getTop().decreaseUploadCount(l.oUploader.name);
return false;
}
return true;
},getFile:function(l){
return arguments.length?this._moFiles[l]:this._moFiles;
},rmFile:function(l){
var m=this;
if(m._moFiles[l.get("sId")]&&l.get("sStatus")!="error"&&l.get("sStatus")!="ready"&&l.get("sStatus")!="stopped")
{
getTop().decreaseUploadCount(l.oUploader.name);
}
delete m._moFiles[l.get("sId")];
},addFile:function(l){
var n=this,m;
if(l instanceof n.qmFile)
{
m=l;
}
else{
l.sId=l.sId||a.unikey();
l.nTry=0;
l.sType=n.name;
m=new n.qmFile(l);
m.oUploader=n;
}
m.set("sStatus","ready");
n._moFiles[m.get("sId")]=m;
return m;
}});
window.QMFileUpload=f;
})(QMFileAdaptor);
(function(a,b){
var e=QMFileUpload.components,g=window;
var f=QMFileUpload.oUtil;
var d=function(){
};
QMFileUpload.createCom("ActivexPopup",function(h){
return ({init_:function(j){
var k=this;
h.init_.call(k,j);
k._initContainer();
},detect:function(){
return a.detectActiveX(2);
},upload:function(j){
var m=this,l=m.cfg(j);
if(!m.prepareUpload_(j))
{
return false;
}
var k=a.createActiveX(2,a.getDomWin(l.oContainer));
m._setRequest(j,l,k);
k.AddFormItem(l.sFile,4,0,j.get("sLocalPath"));
j.set({sStatus:"uploading",nTry:j.get("nTry")+1,nUpTime:new Date().valueOf()});
j.fCancel=function(){
k.StopUpload();
};
k.StartUpload();
return true;
},_setEvent:function(j,k){
var l=this,m="axver=";
try{
m+=j.Version;
}
catch(n)
{
}
j.OnEvent=function(o,p,q,r,s){
switch(p)
{case 1:
l.onerror(k.set({sError:l.err("internal",q,r,m)}));
break;
case 2:
l.onprocess(k.set({nUploadPercent:q/r*100}));
break;
case 3:
debug(["OnEvent",j.ResponseCode,j.Response]);
if(j.ResponseCode!="200")
{
l.onerror(k.set({sError:l.err("http",j.ResponseCode,m)}));
}
else{
var t=l.parser(j.Response,k);
(l["on"+t[0]]||d).call(l,k.set(t[1]));
}
break;
}
};
},_setRequest:function(l,k,j){
var m=this;
m._setEvent(j,l);
j.URL=k.sUrl;
j.AddHeader("Cookie",document.cookie);
a.E(k.oBodyData,function(n,o){
j.AddFormItem(o,0,0,n);
});
},_parseFileList:function(k,j){
var n=this,l=j||a.createActiveX(2);
if(k&&typeof k=="string")
{
var m=[];
a.E(k.split("\r\n"),function(o){
var q=a.trim(o).split(" ");
if(q.length>=2)
{
var p,r=q.shift(),s=q.join(" ");
p=n.addFile({sFid:r,sLocalPath:s},j);
m.push(p);
}
});
n.onselect(m);
}
},addFile:function(k,j){
var m=this;
var n=k.sLocalPath;
var l=j||a.createActiveX(2);
k.sName=n.split(/[\\\/]/).pop();
k.nSize=parseInt(l.GetFileSize(n));
k.sStatus='ready';
return h.addFile.call(m,k);
},_initContainer:function(){
var l=this,j=l.oCfg,k=j.oContainer;
a.addEvent(k,"click",function(m){
var n=a.createActiveX(2);
if(n)
{
l.callBack('onbeforepopupselect',[]);
var o=n.SelectFiles(g);
l._parseFileList(o,n);
a.stopPropagation(m);
}
});
}});
},"Base");
QMFileUpload.createCom("ActivexPaste",function(h){
return ({_initContainer:function(){
var l=this,j=l.oCfg,k=j.oContainer;
if(k&&j.bBindKeyDown)
{
a.addEvent(k,"keydown",function(m){
if((m.ctrlKey||m.metaKey)&&(m.keyCode==86||m.keyCode==118)&&!m.cancelBubble)
{
l.getClipBoardFiles(m);
}
});
}
},detect:function(){
return a.detectActiveX(2);
},getClipBoardFiles:function(j){
var l=this,k=a.createActiveX(2);
if(k)
{
var m=k.GetClipboardFiles();
l._parseFileList(m);
if(m)
{
a.preventDefault(j);
return true;
}
}
return false;
}});
},"ActivexPopup");
function c()
{
var h=a.createActiveX(0),j="";
try{
j=h.GetDLLFileName();
}
catch(k)
{
}
if(j.indexOf("_2.dll")!=-1)
{
return ['<object classid="CLSID:B0F77C07-8507-4AB9-B130-CC882FDDC046"',' width=100% height=100%></object>'].join("");
}
else{
return ['<object classid="CLSID:F4BA5508-8AB7-45C1-8D0A-A1237AD82399"',' width=100% height=100%></object>'].join("");
}
}
f.getDragCode4Ax=c;
QMFileUpload.createCom("ActivexDrag",function(h){
return ({_initContainer:function(){
var m=this,k=m.oCfg,j,l=k.oContainer;
l.innerHTML=c();
setTimeout(function(){
j=m._moActivexDom=l.firstChild;
a.extend(j,m.oCfg.oActivexCfg,{OnFilesDroped:function(n){
m._onFilesDroped(n);
}});
},200);
},_onFilesDroped:function(j){
var l=this,k=l._moActivexDom;
switch(j)
{case "ENTER":
k.text=l.oCfg.sDragEnterMsg;
break;
case "LEAVE":
k.text=l.oCfg.sDragLeaveMsg;
break;
case "OVER":
break;
default:
k.text=l.oCfg.sDragLeaveMsg;
l._parseFileList(j);
break;
};
},detect:function(){
return a.detectActiveX(4,1);
},initConfg:function(j){
var k=this;
h.initConfg.apply(k,arguments);
k.oCfg.sDragEnterMsg="\u91CA\u653E\u9F20\u6807";
k.oCfg.sDragLeaveMsg="\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF";
k.oCfg.oActivexCfg=k.oCfg.oActivexCfg||{text:k.oCfg.sDragLeaveMsg,backColor:0xffffff,textColor:0x000000,textFacName:"\u5B8B\u4F53",textFontSize:10,textFontWeight:500};
}});
},"ActivexPopup");
})(QMFileAdaptor);
(function(a,h){
var f=QMFileUpload;
var g=QMFileUpload.oUtil;
var e=function(){
};
var c=a.T(["top:0;left:0;","position:absolute;","cursor:pointer;","width:$width$px;","height:$height$px;","overflow:hidden;","background-color:#fff;","filter: alpha(opacity=0);","zoom:1;","opacity:0.0;","z-index:1;"]);
var b=a.T(['cursor: pointer;','font-family: Times;','position: absolute;','cursor: pointer;','width:2000px;','height:',(getTop().gbIsEdge||getTop().gbIsIE)?30:600,'px;',a.isBrowser("ie")?'font-size:500px;':'',a.isBrowser("ff")&&parseInt(getTop().gsFFVer)<22?'right:426px;':'right:0px;']);
var d=function(j){
return {createInput_:function(k){
var n=this,l=n.oCfg,m=k.createElement("input");
m.type="file";
if(l.sInputTitle)
{
m.title=l.sInputTitle;
}
else if(!a.isBrowser("ie"))
{
m.title=getTop().gbIsMac?'\u4E0A\u4F20\u6587\u4EF6':' ';
}
m.name=l.sFile||"fileData";
m.style.cssText=b;
return m;
},createWarpHtml_:function(m,l,k){
var p=this,n=k||p.oCfg.oContainer,o=l.createElement(m);
o.style.cssText=c.replace({width:n.offsetWidth,height:n.offsetHeight+1});
n.style.position="relative";
n.insertBefore(o,n.firstChild);
return o;
}};
};
f.getInputLib=d;
f.createCom("RawinputPopup",function(j){
return a.extend(d(j),{init_:function(k){
var l=this;
j.init_.call(l,k);
l._initContainer();
},detect:function(k){
return true;
},upload:function(k){
var m=this,l=m.cfg(k);
if(!m.prepareUpload_(k))
{
return false;
}
m._setRequest(k,l,function(){
m._submit(k);
});
return true;
},_submit:function(k){
var n=this,m=new Date().valueOf(),l=function(){
n.onprocess(k.set({nTry:k.get("nTry")+1,nUpTime:m,nUploadPercent:-1}));
};
k.oForm.submit();
l();
setTimeout(function(){
if(k.get("sStatus")=="uploading")
{
l();
setTimeout(arguments.callee,1000);
}
},1000);
},_setRequest:function(m,l,k){
var p=this,r="if"+l.sId,q=a.getDomWin(l.oContainer),n=q.document,o={id:r,obj:n.body,where:"beforeEnd",style:"display:none;",onload:function(s){
var u=this,t=m.oForm;
a.extend(t,{method:"post",target:r,action:l.sUrl});
t.encoding="multipart/form-data";
t.style.display="none";
t.firstChild.name=l.sFile;
a.E(l.oBodyData,function(v,w){
var x=n.createElement("input");
x.type="hidden";
x.name=w;
x.value=v;
t.insertBefore(x,t.firstChild);
});
n.body.appendChild(t);
o.onload=function(){
var w;
try{
var v=u.contentWindow.document;
w=p.parser(v.body&&a.trim(v.body.innerHTML)?v.body.innerHTML:v.documentElement.innerHTML,m);
}
catch(x)
{
w=["error",{sError:p.err('cgi','0')}];
}
a.removeSelf(u);
a.removeSelf(t);
(p["on"+w[0]]||e).call(p,m.set(w[1]));
m.oForm=null;
};
m.fCancel=function(){
a.removeSelf(u);
a.removeSelf(t);
};
k();
}};
a.createBlankIframe(q,o);
},initInput_:function(){
var n=this,k=n.oCfg,l=n._moDom,m=n.createInput_(a.getDomWin(l).document);
m.onchange=function(){
n._onchange(this);
};
a.addEvent(m,"click",function(o){
a.stopPropagation(o);
});
l.appendChild(m);
},_onchange:function(k){
var o=this,l=a.getDomWin(k).document,n=l.createElement("form");
n.appendChild(k);
o.initInput_();
var m=o.addFile({sName:k.value.split("\\").pop()});
m.oForm=n;
o.onselect([m]);
},_initContainer:function(){
var l=this,k=l.oCfg.oContainer;
l._moDom=l.createWarpHtml_('span',a.getDomWin(k).document);
l.initInput_();
}});
},"Base");
f.createCom("Html5Popup",function(j){
return a.extend(d(j),{init_:function(k){
var l=this;
j.init_.call(l,k);
l._initContainer();
},doHtml5Upload_:function(k,l){
var m=this;
l.send(k.oH5File);
},detect:function(k){
var m=window,l=m.document.createElement('input');
l.type='file';
return 'multiple' in l&&m.File!==h&&m.XMLHttpRequest!==h&&(new XMLHttpRequest()).upload!==h;
},upload:function(k){
var m=this,l=m.cfg(k);
if(!m.prepareUpload_(k))
{
return false;
}
var n=new XMLHttpRequest();
m._setRequest(k,l,n);
k.set({sStatus:"uploading",nTry:k.get("nTry")+1,nUpTime:new Date().valueOf()});
k.fCancel=function(){
n.abort();
};
m.doHtml5Upload_(k,n);
return true;
},_initContainer:function(){
var l=this,k=l.oCfg.oContainer;
l._moDom=l.createWarpHtml_('span',a.getDomWin(k).document);
l.initInput_();
},initInput_:function(){
var n=this,k=n.oCfg,l=n._moDom,m=n.createInput_(a.getDomWin(l).document);
if(k.bMulti!==false)
{
m.multiple="true";
}
if(k.sAcceptFileTypes)
{
m.accept=k.sAcceptFileTypes;
}
m.onchange=function(){
n._onchange(this);
};
a.addEvent(m,"click",function(o){
n.callBack('onbeforepopupselect',[]);
a.stopPropagation(o);
});
l.appendChild(m);
},_onchange:function(k){
var l=this;
a.removeSelf(k);
l.initInput_();
l.addH5Files_(k.files);
},addH5Files_:function(l,k){
var p=this,o=[];
var n=l.length;
var m=function(q){
o.push(q);
if(--n<1)
{
if(k)
{
k(o);
}
else{
p.onselect(o);
}
}
};
a.E(l,function(q){
var r=new FileReader();
r.onload=function(s){
m(p.parseH5File_(q));
};
r.onerror=function(s){
var t=s.target.error;
var u=p.parseH5File_(q);
u.set({sStatus:'error',sError:p.err("fromSelect_html5fd",t.code,t.name)});
m(u);
};
r.readAsDataURL(q.slice(0,1));
});
},parseH5File_:function(k){
var l=this.addFile({sName:k.name,nSize:parseInt(k.size,10)});
l.oH5File=k;
return l;
},_setRequest:function(l,k,m){
var o=this,n=k||{};
m.upload.onprogress=function(p){
if(p.lengthComputable)
{
o.onprocess(l.set({nUploadPercent:p.loaded/p.total*100}));
}
};
m.onreadystatechange=function(){
if(m.readyState==4)
{
m.onreadystatechange=m.upload.onprogress=null;
if(m.status==200)
{
var p=o.parser(m.responseText,l);
o["on"+p[0]].call(o,l.set(p[1]));
}
else{
o.onerror(l.set({sError:o.err("http",m.status)}));
}
}
};
m.open("POST",n.sUrl,true);
if(!n.bToFtn)
{
m.setRequestHeader("content-type","application/octet-stream");
}
}});
},"Base");
QMFileUpload.createCom("Html5Drag",function(j){
return ({_initContainer:function(){
var n=this,k=n.oCfg,l=k.oContainer,m=a.finds("div[ui-type]",l)[0]||a.getDomWin(l).document.createElement("div");
m.setAttribute("ui-type","html5drag_msg");
if(!k.bNoStyle)
{
m.style.cssText="width:100%; font-size:14px; text-align:center;";
if(l.clientHeight)
{
m.style.lineHeight=l.clientHeight+"px";
}
else{
m.style.position="absolute";
m.style.paddingTop="20%";
m.style.marginTop="-20px";
}
}
if(!k.oMsgDom)
{
k.oMsgDom=m;
}
k.oMsgDom.innerHTML=k.sDragLeaveMsg;
a.addEvents(m,n._getEventFunc());
l.insertBefore(m,l.firstChild);
},_getEventFunc:function(){
var l=this;
var k=l.oCfg;
return {dragover:function(m){
if(g.isFileDragOver(m))
{
k.oMsgDom.innerHTML=k.sDragEnterMsg;
k.ondragover&&k.ondragover.call(l,m);
}
a.preventDefault(m);
},dragleave:function(m){
if(g.isFileDragOver(m))
{
k.oMsgDom.innerHTML=k.sDragLeaveMsg;
k.ondragleave&&k.ondragleave.call(l,m);
}
a.preventDefault(m);
},drop:function(m){
k.oMsgDom.innerHTML=k.sDragLeaveMsg;
if(m.dataTransfer.files.length)
{
l.onDrop_(m);
}
a.stopPropagation(m);
a.preventDefault(m);
},click:function(m){
k.onproxyclose&&k.onproxyclose.apply(l);
}};
},onDrop_:function(k){
this.addH5Files_(k.dataTransfer.files);
},initConfg:function(k){
var l=this;
j.initConfg.apply(l,arguments);
l.oCfg.sDragEnterMsg=l.oCfg.sDragEnterMsg||"\u91CA\u653E\u9F20\u6807";
l.oCfg.sDragLeaveMsg=l.oCfg.sDragLeaveMsg||"\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF";
}});
},"Html5Popup");
})(QMFileAdaptor);
(function(a,c){
var e=window,b=a.T(['<span style="top:$top$;left:$left$;position:absolute;width:$width$;height:$height$;margin:$margin$;z-index:0;overflow:hidden;display:inline-block;">','$code$','</span>']);
var d=function(){
};
QMFileUpload.createCom("FlashPopup",function(f){
return ({init_:function(g){
var h=this;
f.init_.call(h,g);
h._initContainer();
},detect:function(){
return QMFileUpload.oUtil.detectFlash();
},upload:function(g){
var k=this,j=k._moFlash,h=k.cfg(g);
if(!k.prepareUpload_(g))
{
return false;
}
k._setRequest(h);
g.set({sStatus:"uploading",nTry:g.get("nTry")+1,nUpTime:new Date().valueOf()});
g.fCancel=function(){
j.cancel();
};
k.doFlashUpload_(g,j);
return true;
},_setRequest:function(g){
var j=this,h=j._moFlash;
a.E(g.oBodyData,function(k,l){
h.addUploadVar(l,k);
});
h.setUploadUrl(g.sUrl);
},_initContainer:function(){
var j=this,g=j.oCfg,h=g.oContainer;
if(h)
{
j.insertFlashElem_({oWin:a.getDomWin(h),oFlashDOMCfg:g,insertHTML:function(k){
h.style.position="relative";
if(a.browserVer()==6)
{
h.style.zoom=1;
h.style.overflow="hidden";
}
a.insertHTML(h,"afterBegin",k);
},removeHTML:function(){
h.removeChild(h.firstChild);
},onsuccess:function(){
h.firstChild.style.zIndex=2;
}});
}
},insertFlashElem_:function(g){
var k=this;
var l="flashUploader_"+Math.random();
var j=g.oFlashDOMCfg;
var h=false;
if(window.navigator.userAgent.toLowerCase().indexOf("loongson")>-1)
{
h=true;
}
var m=g.sFlashUrl||(h&&a.getRes("$swf_path$loongson2f8d4e.swf"))||a.getRes("$swf_path$uploader2aa314.swf");
g.insertHTML(b.replace({height:j.nHeight||"100%",width:j.nWidth||"100%",top:j.nTop||0,left:j.nLeft||0,margin:j.nMargin||0,code:a.generateFlashCode(l,m,{width:j.nWidth||"100%",height:j.nHeight||"100%"},{wmode:"transparent"})}));
setTimeout(function(){
k.ossLog('flashInit');
var n=k.getFlashObjCallBack_();
n.id=l;
n.win=g.oWin||e;
(new a.qmFlash(n)).setup(function(o,p){
if(o)
{
if(g.onsuccess)
{
g.onsuccess();
}
k.initFlash_(this.getFlash());
}
else{
if(p)
{
a.LogKV({sValue:'fileupload|flashinit|whaterror|'+(p.toLowerCase())});
}
if(g.removeHTML)
{
g.removeHTML();
}
if(m.indexOf('?')!==-1)
{
if(g.onerror)
{
g.onerror(p);
}
k.ossLog('flashInitError');
debug("the flash uploader is not ok...");
}
else{
k.ossLog('flashDLoadError');
g.sFlashUrl=m+'?'+Math.random();
k.insertFlashElem_(g);
}
}
});
},300);
},getFlashObjCallBack_:function(){
var g=this,h=getTop();
g.moFlashFileMap_={};
return {onSelect:function(k,j){
g.onFlashSelect_.apply(g,arguments);
},onProcess:function(j,k){
g.onFlashProcess_.apply(g,arguments);
},onError:function(j,m,l,k){
g.onFlashError_.apply(g,arguments);
},onComplete:function(j,l,k){
g.onFlashComplete_.apply(g,arguments);
},debug:function(){
h.debug.apply(h,arguments);
}};
},getFlashFileId:function(g){
return this.moFlashFileMap_[g];
},getFlash:function(){
return this._moFlash;
},doFlashUpload_:function(g,h){
var k=this,j=k.cfg(g);
h.upload(g.get("sFid"),j.sFile);
},initFlash_:function(g){
var m=this,l=m.oCfg;
m._moFlash=g;
if(l.bMulti!==false)
{
g.initlize("multi");
}
else{
g.initlize("single");
}
g.clearUploadVars();
var k=[64,128,256,384,512,768,1024,1280,1536];
var j=getTop().gnFlashUploadBlockIndex_p1;
if(!j||!k[j-1])
{
j=null;
}
if(0&&g.setFTNUploadBlockSize&&(j||Math.random()<0.3))
{
j||(j=Math.floor(Math.random()*k.length)+1);
getTop().gnFlashUploadBlockIndex_p1=j;
var h=k[j-1];
m.nBlockSize=h;
g.setFTNUploadBlockSize(h);
debug('set flash <'+m.name+'> block size:'+h+'kb');
}
},onFlashSelect_:function(h,g){
var n=this,j=n.oCfg,m=n._moFlash,l=[];
for(var o=h;o<=g;o++)
{
var k=n.addFile({sFid:o,sName:m.getFileInfo(o,"name"),nSize:parseInt(m.getFileInfo(o,"size"),10)});
n.moFlashFileMap_[o]=k.get('sId');
l.push(k);
}
n.onselect(l);
},onFlashProcess_:function(g,h){
var k=this;
var j=k.getFile(k.getFlashFileId(g));
j.set({nUploadedSize:Math.floor(j.get('nSize')*h/100),sUploadStep:'posting',nUploadPercent:h});
k.onprocess(j);
},onFlashComplete_:function(g,j,h){
var m=this,k=m.getFile(m.getFlashFileId(g)),l=m.parser(j,k);
k.set({nPostMode:h,nUpType:m._moFlash.getCurUptype()});
(m["on"+l[0]]||d).call(m,k.set(l[1]));
},onFlashError_:function(g,k,j,h){
var m=this,l=m.getFile(m.getFlashFileId(g));
m.onerror(l.set({nUpType:m.getFlash().getCurUptype(),nUploadPercent:h,sError:m.err("internal",parseInt(j.replace(/Error #/g,''),10),"flashver="+a.qmFlash.getFlashVer().desc)}));
}});
},"Base");
})(QMFileAdaptor);
(function(){
QMFileAdaptor.extend(QMFileAdaptor,{getCookie:getCookie,getSid:getSid,getUin:getUin,ossLog:ossLog,QMAjax:QMAjax,htmlDecode:htmlDecode,gbIsIE:gbIsIE,gbIsFF:gbIsFF,gbIsWebKit:gbIsWebKit,speedNow:function(){
return +new Date();
},LogKV:LogKV});
})();
;(function(a){
var g=QMFileUpload,e=g.components,j=g.oUtil,b=[location.protocol,"//",location.hostname,"/cgi-bin/upload"].join("");
var c={"unknow":100000000,"http":200000000,"cgi":300000000,"internal":400000000};
var d={"RawPost":3,"CheckPost":7,"MultiPost":9};
var f=new g.qmCreater();
j.nMinDownloadFTNwidgetFileSize=200*1024*1024;
j.isNeedDownloadFTNwidget=function(m){
return m&&/Popup/i.test(m)&&!(/(Ftn|FlashH5|H5C)/i.test(m))&&!a.detectActiveX(3,1);
};
var h=getTop();
if(h.goExpers&&h.goExpers.h5cJsUploadNormal)
{
f.orders={"base":["Base"],"popup":["H5CPopupMail","FlashPopupFMail","Html5PopupMail","ActivexPopupMail","RawinputPopupMail"],"noflashPopup":["H5CPopupMail","Html5PopupMail","ActivexPopupMail","RawinputPopupMail"],"drag":["H5CDragFMail","FlashH5DragMail","Html5DragMail","ActivexDragMail"],"paste":["ActivexPasteMail"]};
}
else{
f.orders={"base":["Base"],"popup":["FlashPopupFMail","Html5PopupMail","ActivexPopupMail","RawinputPopupMail"],"noflashPopup":["Html5PopupMail","ActivexPopupMail","RawinputPopupMail"],"drag":["FlashH5DragMail","Html5DragMail","ActivexDragMail"],"paste":["ActivexPasteMail"]};
}
g.create=function(n,m){
return f.create(n,m);
};
g.create.oCreaterInstance=f;
g.getMailLib=function(m){
return ({defaultQueryData:function(){
return {};
},initConfg:function(n){
var q=this;
m.initConfg.apply(q,arguments);
var o=q.oCfg;
o.sUrl=o.sUrl||q.getMailUploadUrl();
o.oQueryData=a.extend(q.defaultQueryData(n),o.oQueryData);
if(o.business=="notebook")
{
o.oQueryData=a.extend(o.oQueryData,{type:o.type,filetype:o.filetype,business:o.business,t:o.t});
}
q.addToUrl(o.oQueryData);
var p=o.sUrl.match(/^(https?:)?\/\//i);
if(!p)
{
o.sUrl=[location.protocol,"//",location.hostname,o.sUrl.indexOf('/')===0?'':'/',o.sUrl].join('');
}
else if(!p[1])
{
o.sUrl=location.protocol+o.sUrl;
}
},addToUrl:function(n){
var p=this.oCfg.sUrl,o=[];
a.E(n,function(r,q){
if(r!==null)
{
o.push([q,encodeURIComponent(""+r)].join("="));
}
});
this.oCfg.sUrl=[(p.split("?")||"")[0],o.join("&")].join("?");
},ossLog:function(n){
var y=this;
if(typeof (n)=='string')
{
if(n=='flashInitError')
{
a.LogKV({sValue:'getinvestigate|fileupload|flashinit|error|'+y.name});
}
else if(n=='flashDLoadError')
{
a.LogKV({sValue:'getinvestigate|fileupload|flashdload|error'});
}
else if(n=='flashInit')
{
a.LogKV({sValue:'getinvestigate|fileupload|flashinit|'+y.name});
}
else if(n=='1sNoPercent')
{
a.LogKV({sValue:'getinvestigate|fileupload|1snopercent|'+y.name});
}
else if(n=='crash')
{
a.LogKV({sValue:'getinvestigate|fileupload|crash|'+y.name});
}
else if(n=='ppftnerror')
{
a.LogKV({sValue:'getinvestigate|fileupload|ppftnerror|'+y.name});
}
return;
}
var x=y.cfg(n),q,B=y.name,v=0,r=0;
var o=false;
var t=n.get("nSize")/1024/1024,u=0;
if(t>=1&&t<6)
{
u=Math.floor(t);
}
else if(6<=t&&t<=50)
{
u=6;
}
else if(50<t&&t<=1024)
{
u=7;
}
else if(t>1024)
{
u=9;
}
if(n.get("sStatus")=="error")
{
o=true;
var z=(n.get("sError")||"").split(",");
q=c[z[0]];
if(/^size,-1,\d+$/i.test(n.get("sError")))
{
q=900000003;
}
else if(q)
{
if(n.get("nUploadPercent")<100&&z[0]=="internal")
{
q=500000000;
}
q+=Math.abs(z[1]);
q+=parseInt(u)*100000;
if(/Flash/.test(B)&&(r=n.get("nPostMode")))
{
q+=parseInt(n.get("nPostMode"))*10000000;
}
}
}
else if(n.get("sStatus")=="cancel")
{
q=typeof n.nLastPercentOssLog!="undefined"?900000002:900000001;
}
else if(n.get("sStatus")=="stopped"&&n.get("sUploadStep")=="paused")
{
q=900000;
}
else if(n.get("sStatus")=="uploading")
{
q=-1;
}
else if(n.get("sStatus")=="complete")
{
var q=0;
q=u*100000;
if(n.get("nTry")>1)
{
q+=1000000;
}
if(/Flash/.test(B)&&(r=n.get("nPostMode")))
{
q+=(r*10000000);
}
}
if(typeof q=="undefined")
{
return;
}
if(/Flash/.test(B))
{
v=x.utype||n.get("nUpType")||d[x.sFlashMode]||3;
if(n.get("bIsUptoFtnForNormal")===false)
{
if(v!=15&&v!=16&&v!=17&&n.get("bFtnFile"))
{
v=3;
}
}
}
else if(/Activex/.test(B))
{
v=2;
}
else if(/Rawinput/.test(B))
{
v=5;
}
else if(/Html5/.test(B))
{
v=1;
}
else if(/^Ftn/.test(B))
{
v=6;
}
else if(/ppFtn/i.test(B))
{
v=19;
}
else if(/H5C/i.test(B))
{
v=20;
if(n.get("bFtnFile"))
{
v=21;
}
}
var p=n.get("nAutoUploadRetry")||0;
var A;
if((!n.get("bFtnFile")&&!n.get("bIsUptoFtnForNormal"))||n.get('nUploadPercent'))
{
A=/http:\/\/(.*?)\//.exec(x.sUrl);
}
var s=n.get("nSize");
var w=n.get("nUsedTime");
if((n.get("sStatus")=="complete"||n.get("sStatus")=="error")&&n.get('nSize'))
{
debug('File send, size:'+g.oUtil.formatSize(n.get('nSize'))+(n.get("nRealPostSize")?' post:'+g.oUtil.formatSize(n.get("nRealPostSize")):'')+'('+(n.get("nRealPostSize")/n.get('nSize')*100).toFixed(4)+'%)'+' speed:'+g.oUtil.stringifySpeed(s/w/1024*1000));
}
a.ossLog("delay","all",a.T("stat=$stat$&berr=$berr$&ftype=$ftype$&utype=$utype$&errno=$errno$&retry=$retry$&fsize=$fsize$&utime=$utime$&percent=$percent$&fid=$fid$&errdetail=$errdetail$&uphost=$uphost$&filename=$filename$&bt=$bt$&block=$block$").replace({stat:x.bOssLog===false?"custom":"attach",berr:o?"1":"0",retry:p,ftype:n.get("bFtnFile")?"1":"0",errno:q,utype:v,fsize:s,fid:n.get("bFtnFile")?(n.get("sFileId")||""):"",utime:q==900000003?0:(w||-1),percent:n.get("nUploadPercent"),uphost:((A&&A[1])||n.get("sIP")),errdetail:n.get("sError"),filename:n.get("sName"),bt:a.gbIsIE&&1||a.gbIsFF&&2||a.gbIsWebKit&&3,block:y.nBlockSize&&(v==15||v==16||v==17||v==18)?y.nBlockSize:''}));
},parser:function(o,n){
var u=this,q=u.cfg(n),t={},y="error";
if(q.business=="notebook")
{
var x=/pickey\s*=\s*"(.*)"/gi.exec(o)[1];
if(x)
{
t.sFileId=x;
var z=/viewfileurl\s*=\s*"(.*)"/gi.exec(o)[1];
if(location.protocol.indexOf("https")>-1)
{
z=z.replace(/http/i,"https");
}
t.sFileUrl=z;
y="complete";
t.sFilePath=a.trim(o);
}
else if(v=/errorcode\s*=\s*"(.*)"/gi.exec(o))
{
y="error";
t.sError=u.err("cgi",v[1]);
}
else{
y="error";
t.sError=u.err("unknow",709390);
}
}
else if(q.sBusiness=="resume.import")
{
try{
var r=o.match(/##LOGIC_DATA_START##\s*([\s\S]+?)\s*##LOGIC_DATA_END##/);
var s=a.evalValue(a.htmlDecode(r[1]).replace(/\n/g,'\\n').replace(/\r/g,'\\r'));
if(s.result&&s.result.errCode)
{
y='error';
t.sError=u.err("cgi",s.result.errCode);
}
else{
y='complete';
}
t.resume=s.data;
}
catch(A)
{
y='error';
t.sError=u.err("unknow",709390);
}
}
else if(/.*\/cgi-bin\/uploadfile/.test(q.sUrl))
{
var v;
if(o.indexOf("/data/")!=-1)
{
v=o.split("|");
t.sFileId=v[0].split("/").pop();
if(t.sFileId)
{
v[1]&&(t.sFileUrl=v[1]);
y="complete";
}
else{
y="error";
t.sError=u.err("unknow",709394);
}
t.sFilePath=a.trim(o);
}
else if(v=/"errorcode" : "(.*)"/gi.exec(o))
{
y="error";
t.sError=u.err("cgi",v[1]);
}
else{
y="error";
t.sError=u.err("unknow",709390);
}
}
else if(/.*\/cgi-bin\/upload/.test(q.sUrl))
{
if(/var\s*result\s*=\s*"qmfileuploadsuccess";/.test(o))
{
var v=/viewfileurl="(.*?)";/.exec(o);
t.sFileUrl=v&&(v[1]+"&sid="+a.getSid());
v=/filepath="(.*?)";/.exec(o);
t.sFileId=v&&v[1].split("/").pop();
t.sFilePath=a.trim(v[1]);
v=/filesize="(.*?)";/.exec(o);
var p=parseInt(v&&v[1],10);
p&&(t.nSize=p);
v=/nf="(.*?)";/.exec(o);
var w=v&&v[1];
w&&(t.sNf=w);
if(t.sFileId)
{
y="complete";
}
else{
y="error";
t.sError=u.err("unknow",709395);
}
}
else if(/title\s*:\s*"cgi exception",/.test(o))
{
var v=/errcode\s*:\s*"(.*?)",/gi.exec(o);
t.sError=u.err("cgi",v?v[1]:"0");
}
else{
y="error";
t.sError=u.err("unknow",709397);
}
}
else if(/\/ftn_handler/.test(q.sUrl))
{
var v=/parent\.ftn_post_end\((.*?)\)/.exec(o);
if(v&&v[1]==0)
{
y="complete";
}
else{
t.sError=u.err("cgi",v?v[1]:"709398");
}
}
else{
t.sError=u.err("unknow","709399");
}
return [y,t];
},getMailUploadUrl:function(){
return b;
},callBack:function(o,n){
var p=this;
if(o=="onprocess")
{
p.setKeepAlive(true);
p._checkProcessStop(n);
}
else if(o=="oncomplete"||o=="onerror")
{
p.checkClearAlive();
}
m.callBack.apply(p,arguments);
},_checkProcessStop:function(n){
var p=this;
n=n[0];
if(n&&n.get("nPercent")>=0&&!n._nCheckProcessId)
{
var o=setInterval(function(){
if(n.get("sStatus")!="uploading")
{
clearInterval(n._nCheckProcessId);
return;
}
if(n.get("nPercent")==n._nLastPercent&&n.nLastPercentOssLog!=n._nLastPercent)
{
p.calcUsedTime(n);
p.ossLog(n);
n.nLastPercentOssLog=n._nLastPercent;
}
n._nLastPercent=n.get("nPercent");
},60000);
n._nCheckProcessId=o;
}
},setKeepAlive:function(n){
var o=this;
if(n)
{
if(o._mnKeepAlive)
{
return;
}
o._mnKeepAlive=setInterval(function(){
a.QMAjax.send("/cgi-bin/readtemplate?t=keep_alive&ef=js&sid="+a.getSid()+"&r="+Math.random(),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(p,r,q){
if(r.indexOf("<!--cgi exception-->")!=-1&&r.indexOf('errcode : "-2"')!=-1)
{
var t=o.getFile();
for(var u in t)
{
var s=t[u];
if(s.get("sStatus")=="uploading")
{
s.fCancel&&s.fCancel();
o.onerror(s);
}
}
}
}});
},15*60*1000);
}
else{
clearInterval(o._mnKeepAlive);
o._mnKeepAlive=null;
}
},checkClearAlive:function(){
var n=this;
setTimeout(function(){
if(n.getUploadingCnt())
{
n.setKeepAlive(false);
}
},2000);
},uploadToFtnForNormalAttachment_:function(n){
var p=this,o=n.get("nAppId")||2;
if(!p.prepareUpload_(n))
{
return false;
}
;a.QMAjax.send(['/cgi-bin/uploadunite?func=CreateFile&&inputf=json&outputf=json&&sid=',a.getSid()].join(""),{method:'post',headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},content:a.T('{"path":"$path$","appid":"$appid$","size":$size$}').replace({appid:o,path:encodeURIComponent(n.get("sName")),size:n.get("nSize")}),onload:function(q,s,r){
var t,u=window.gnTestSvr?window.gnTestSvr:"";
if(q)
{
t=a.evalValue(s);
if(t.result.errCode=="0"&&t.url)
{
n.set(t.data);
n.oCfg=a.extend(n.oCfg||{},{sUrl:u?t.url.replace(/(:?\d+\.){3}(:?\d+)\:\d{4}/gi,u):t.url,sFile:"file",bToFtn:true,oQueryData:{},oBodyData:{mode:/Flash/.test(n.oUploader.name)?"flashupload":"formupload"}});
p.upload(n.set("sStatus","ready"));
return true;
}
}
p.onerror(n.set({nPercent:0,sError:(t&&t.result&&t.result.errCode)?p.err("cgi",t.result.errCode,t.appname):p.err("http",s=='abort'?-1:r.status)}));
}});
p.onprocess(n.set({nUploadPercent:0,bFtnFile:true,nUpTime:new Date().valueOf()}));
return true;
},oncomplete:function(n){
var o=this;
if(n.get("bIsUptoFtnForNormal"))
{
o._fChenkIsPoison(n);
}
else{
o.oncompleteToFtn(n);
}
},_fChenkIsPoison:function(n){
var o=this;
var q=n.oUploader.name;
if(/Flash/.test(q))
{
var p=o.getFlash().getFileHeadContent();
o._fCheckFileCallback(n,p||"");
}
else if(/Html5/.test(q))
{
o._fCheckFileByH5(n,_fCheckFileCallback);
}
else{
o._fCheckFileCallback(n,"");
}
},_fCheckFileCallback:function(n,o){
var p=this;
var q=/\.(\w+)$/.test(n.get("sName"))&&RegExp.$1;
a.QMAjax.send(['/cgi-bin/uploadunite?func=CheckFile&inputf=json&outputf=json&sid=',a.getSid()].join(""),{method:'post',headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},content:a.T('{"fileid":"$fileid$","data":"$data$","suffix":"$suffix$","md5":"$md5$","mailid":"$mailid$"}').replace({fileid:n.get("sFileId"),data:o,suffix:q,md5:n.get("sMD5"),mailid:n.get("sMailId")}),onload:function(r,t,s){
if(r)
{
var u=a.evalValue(t),v;
if(u.result.errCode=="0")
{
if(u.data)
{
n.set({sDownloadPage:u.data.url,bVirtual:true});
if(u.data.filetype===1)
{
n.set({sFileUrl:u.data.url});
}
m.oncomplete.call(p,n.set("sStatus","uploading"));
return;
}
else{
v=p.err("cgi",u.result.errCode);
}
}
else{
v=p.err("http",u.result.errCode);
}
m.onerror.call(p,n.set({sError:v}));
}
else{
m.onerror.call(p,n.set({sError:p.err("http",t)}));
}
}});
},_fCheckFileByH5:function(o,n){
var q=this;
var p=new FileReader();
p.onload=function(r){
n.call(q,o,r.currentTarget.result||"");
};
p.onError=function(r){
var s=r.target.error;
q.onerror(o.set({nUpType:q.getFlash().getCurUptype(),sError:q.err("html5fd",s.code,s.name)}));
};
p.readAsDataURL(q.getFileSliceFunc_().call(o.oH5File,0,128));
}});
};
var k=g.qmFile;
var l=function(m){
k.call(this,m);
};
l.prototype=new k({});
l.prototype.uploadToFtn=function(){
var m=this;
return m.oUploader.uploadToFtn(m);
};
g.getFtnLib=function(m){
return ({qmFile:l,oncompleteToFtn:function(n){
var o=this;
if(n.get("bFtnFile"))
{
a.QMAjax.send(a.T("/cgi-bin/ftnGetURL?sid=$sid$&t=ftn.json&s=part&fid=$fid$&ef=js").replace({sid:a.getSid(),fid:n.get("sFileId")}),{onload:function(p,r,q){
if(p)
{
var s=a.evalValue(r)||{},t;
if(s.errcode=="0")
{
if(s.oFile&&s.oFile.sKey&&s.oFile.sFetchCode)
{
n.set(s.oFile).set({sDownloadPage:["http://mail.qq.com/cgi-bin/ftnExs_download?t=exs_ftn_download&k=",s.oFile.sKey,"&code=",s.oFile.sFetchCode].join(""),nExpireTime:s.oFile.expiretime!=-1?s.oFile.expiretime:2592000});
m.oncomplete.call(o,n.set("sStatus","uploading"));
return;
}
else{
t=o.err("cgi",s.errcode);
}
}
else{
t=o.err("cgi",s.errcode);
}
m.onerror.call(o,n.set({sError:t}));
}
else{
m.onerror.call(o,n.set({sError:o.err("http",r)}));
}
}});
}
else{
m.oncomplete.call(o,n);
}
},uploadToFtn:function(n){
var p=this,o=n.get("nAppId")||2;
if(!p.prepareUpload_(n))
{
return false;
}
p.onprocess(n.set({nUploadPercent:0,nTry:n.get('nTry')+1,bFtnFile:true,nUpTime:new Date().valueOf()}));
a.QMAjax.send(a.T("/cgi-bin/ftnCreatefile?sid=$sid$&path=$path$&type=direct&s=comCreate&appid=$appid$&dirid=$dirid$&ef=js&resp_charset=UTF8&loc=$loc$").replace({sid:a.getSid(),loc:["ftnCreatefile","ftnCreatefile","comCreate",(n.get("sFrom")||"")+o].join(","),appid:o,dirid:n.get("sPathId")||"",path:encodeURIComponent(n.get("sName"))}),{headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(q,s,r){
var t,u=window.gnTestSvr?window.gnTestSvr:"";
t=a.evalValue(s||"{}");
if(q&&t&&t.errcode=="0"&&t.url)
{
n.set(t.data);
n.oCfg=a.extend(n.oCfg||{},{sUrl:u?t.url.replace(/(:?\d+\.){3}(:?\d+)\:\d{4}/gi,u):t.url,sFile:"file",bToFtn:true,oQueryData:{},oBodyData:{mode:/Flash/.test(n.oUploader.name)?"flashupload":"formupload"}});
p.upload(n.set("sStatus","ready"));
return true;
}
if(t&&t.errcode=="-25086")
{
getMainWin()._mnUserUploadFreeSpace=(t.freespace||0)*1024*1024;
}
p.onerror(n.set({nPercent:0,sError:(t&&t.errcode)?p.err("cgi",t.errcode,t.appname):p.err("http",s=='abort'?-1:r.status)}));
}});
return true;
}});
};
})(QMFileAdaptor);
;(function(a){
var d=QMFileUpload;
function c()
{
}
;function b(e)
{
return {uploadInChip:function(f){
var g=this;
if(!g.prepareUpload_(f))
{
return false;
}
g.callBack("onprocess",[f.set({nTry:f.get("nTry")+1,nUpTime:new Date().valueOf(),bChipFile:true,sStatus:"uploading",sUploadStep:"signing",nUploadPercent:0,nPercent:0,nUploadedSize:0,nSignPercent:0})]);
f.__nSignFileStartTime=a.speedNow();
g.doChipFileSign_(f);
return true;
},_updateFlashFileSize:function(f){
try{
if(f.get('sType').indexOf('Flash')!=-1&&f.get('sFid'))
{
var g=parseInt(f.uploader().getFlash().getLoadTotal(),10);
if(g&&g!=f.get('nSize'))
{
a.LogKV('uploadfile|flash|size_err');
getTop().ossLogCustom('realtime','all','file_size_err',{appid:f.get("nAppId"),path:f.get("sName"),size:f.get("nSize"),size2:g,md5:f.get("sMD5"),sha:f.get("sSHA"),sha3:f.get("sSHA3")});
f.set('nSize',g);
}
}
}
catch(h)
{
}
},onChipFileForNormalAttachSignEnd_:function(f,g){
var h=this;
g.sUploadStep='creating';
h.callBack("onprocess",[f.set(g)]);
h._updateFlashFileSize(f);
a.QMAjax.send(['/cgi-bin/uploadunite?func=CreateFile&&inputf=json&outputf=json&&sid=',a.getSid()].join(""),{method:'post',headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},content:a.T('{"path":"$path$","appid":"$appid$","size":$size$,"md5":"$md5$","sha":"$sha$","sha3":"$sha3$"}').replace({appid:f.get("nAppId"),path:encodeURIComponent(f.get("sName")),size:f.get("nSize"),md5:f.get("sMD5"),sha:f.get("sSHA"),sha3:f.get("sSHA3")}),onload:function(j,l,k){
var n=a.evalValue(l||"{}");
if(j&&n.result.errCode=="0"&&n.data&&n.data.sIP)
{
f.set(n.data);
h.onChipUpload_(f);
}
else{
if(f.get("bIsRetryH5")==1)
{
h.onerror(f.set({nPercent:0,sError:(n&&n.result)?h.err("internal",-500):h.err("http",l=='abort'?-1:k.status)}));
return;
}
var q=f.get("sId"),p=["SPUploader",q].join(""),o=getTop(),m=o.getMainWin().QMAttach;
f.set("bIsRetryH5",1);
o.show(m.S(p),false);
m.retryUpload(q);
}
}});
},doChipFileSign_:c,onChipUpload_:function(f){
var h=this,g=new Date().valueOf();
f.set({sStatus:"uploading",sUploadStep:'posting',bChipFile:true,nStartTime:g,nRealPostTime:0,nRealPostSize:0,nUpTime:g});
h.doChipUpload_(f);
h.onprocess(f);
},doChipUpload_:c,onChipUploadEnd_:function(f){
var g=this;
g.onprocess(f.set("nUploadPercent",100));
g.fCancel=null;
},isUptoFtnForNormal:function(){
var g=getTop();
var f=g.getMainWin().getPageId;
return g.goExpers&&g.goExpers.uploadunite===true&&f&&(f()=="compose"||f()=="qq"||f()=="group");
},onChipFileSignEnd_:function(f,g){
var h=this;
if(f.__nSignFileStartTime)
{
debug('File sign, size:'+d.oUtil.formatSize(f.get('nSize'))+' speed:'+d.oUtil.stringifySpeed(f.get('nSize')/(a.speedNow()-f.__nSignFileStartTime)/1024*1000)+(h.nSignFileBlockSize?' block:'+d.oUtil.formatSize(h.nSignFileBlockSize):''));
}
if(f.get("bIsUptoFtnForNormal"))
{
h.onChipFileForNormalAttachSignEnd_.apply(h,arguments);
}
else{
h.onChipFileSignEndFtn_.apply(h,arguments);
}
},onChipFileSignEndFtn_:function(f,g){
var j=this;
g.sUploadStep='creating';
j.callBack("onprocess",[f.set(g)]);
j._updateFlashFileSize(f);
var k=a.TE(["/cgi-bin/ftnCreatefile?uin=$uin$&ef=js&resp_charset=UTF8&s=ftnCreate&sid=$sid$","&dirid=$dirid$&path=$path$&size=$size$&md5=$md5$&sha=$sha$&sha3=$sha3$&appid=$appid$&loc=$loc$"]).replace({sid:a.getSid(),loc:["ftnCreatefile","ftnCreatefile","ftnCreate",(f.get("sFrom")||"")+f.get("nAppId")].join(","),path:encodeURIComponent(f.get("sLocalPath")||f.get('sName')),dirid:f.get("sPathId"),size:f.get("nSize"),md5:f.get("sMD5"),sha:f.get("sSHA"),sha3:f.get("sSHA3"),appid:f.get("nAppId")});
function h()
{
f.set({bCreateFile:false,sCreateFileUrl:k});
a.QMAjax.send(k,{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(l,n,m){
var o=a.evalValue(n||"{}");
if(l&&o&&o.errcode=="0")
{
f.set(o.data);
f.set('bCreateFile',true);
j.onChipUpload_(f);
}
else{
if(o&&o.errcode=="-25086")
{
getMainWin()._mnUserUploadFreeSpace=(o.freespace||0)*1024*1024;
}
j.onerror(f.set({nPercent:0,sError:(o&&o.errcode)?j.err("cgi",o.errcode,o.appname):j.err("http",n=='abort'?-1:m.status)}));
}
}});
}
if(f.get('bCreateFile'))
{
if(f.get('sCreateFileUrl')==k)
{
j.onChipUpload_(f);
}
else{
a.QMAjax.send('/cgi-bin/ftnDelFile?t=ftn.json&s=oper&ef=js&sid='+a.getSid(),{headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},content:'fid='+f.get('sFileId')});
h();
}
}
else{
h();
}
},onChipFileSigning_:function(g,f){
var h=this;
g.set("nSignPercent",Math.max(Math.min(100,Math.floor(f)),0));
h.callBack("onprocess",[g]);
},chipUpdateFileSize_:function(g,f){
if(!g.get('bChipFile')||!g.get("nUploadedSize")||g.get("bIsUptoFtnForNormal"))
{
return;
}
var j=this;
var h=new Date().valueOf();
if(!g._nUpFileSizeTime)
{
g._nUpFileSizeTime=h;
}
else if(h-g._nUpFileSizeTime>=(f||5000))
{
a.QMAjax.send(a.T("/cgi-bin/ftnUpFileSize?sid=$sid$&filekey=$fileid$&uploadsize=$uploadsize$&ef=js").replace({sid:a.getSid(),fileid:g.get("sFileId"),uploadsize:g.get("nUploadedSize")}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(k,m,l){
if(m.indexOf("<!--cgi exception-->")!=-1)
{
var p=a.evalValue(m||"{}");
var o=j.getFile();
for(var q in o)
{
var n=o[q];
if(n.get("sStatus")=="uploading")
{
if(n.pause)
{
n.pause();
}
j.onerror(n.set("sError",["cgi",p.errcode,"ftnUpFileSize"].join(",")));
}
}
}
}});
g._nUpFileSizeTime=h;
}
},setRealPostSize_:function(h,g,f){
if(f>0&&h.get("sUploadStep")!="paused")
{
h.set({nRealPostTime:(h.get("nRealPostTime")||0)+(new Date()-g),nRealPostSize:(h.get("nRealPostSize")||0)+f});
}
}};
}
QMFileUpload.getChipLib=b;
})(QMFileAdaptor);
;(function(a){
function b(c)
{
return {safeStartUpdate_:function(d){
d.bCancelH5_=false;
d.set('nSize',parseInt(d.oH5File.size,10));
d._lastModified=d.oH5File.lastModified||+d.oH5File.lastModifiedDate;
d.fCancel=function(){
d.bCancelH5_=true;
};
},isFileModif_:function(d){
if(d._lastModified&&(d._lastModified!=(d.oH5File.lastModified||+d.oH5File.lastModifiedDate)))
{
d.fCancel&&d.fCancel();
this.onerror(d.set('sError',this.err('internal','77701')));
d._lastModified=null;
return false;
}
return true;
}};
}
QMFileUpload.getH5SafeLib=b;
})(QMFileAdaptor);
;(function(a,b){
var f=QMFileUpload,e=f.components,g=f.oUtil,d=function(){
};
function c(h)
{
return ({defaultQueryData:function(){
return {resp_charset:a.isSystem("mac")?"UTF8":"",t:"qmfileupload",ef:"qdata",ssl_edition:a.getCookie("ssl_edition"),sid:a.getSid(),mode:"file",uin:a.getUin()};
}});
}
;f.createCom("ActivexPopupMail",function(h){
return a.extend(f.getMailLib(h),f.getFtnLib(h),c(h));
},"ActivexPopup");
f.createCom("ActivexPasteMail",function(h){
return a.extend(f.getMailLib(h),f.getFtnLib(h),c(h));
},"ActivexPaste");
f.createCom("ActivexDragMail",function(h){
var j=f.getMailLib(h);
return a.extend({},j,f.getFtnLib(h),c(h),{initConfg:function(k){
var l=this;
j.initConfg.apply(l,arguments);
l.oCfg.sDragLeaveMsg=l.oCfg.sDragLeaveMsg||"\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952Ectrl+c\u3001ctrl+v\u6765\u6DFB\u52A0\u9644\u4EF6\u3002";
}});
},"ActivexDrag");
})(QMFileAdaptor);
;(function(a,b){
var e=QMFileUpload,d=e.components;
e.createCom("RawinputPopupMail",function(f){
return a.extend(e.getMailLib(f),e.getFtnLib(f),{defaultQueryData:function(){
return {t:"qmfileupload",ef:"qdata",sid:a.getSid(),uin:a.getUin(),mode:"file"};
}});
},"RawinputPopup");
function c(f)
{
return a.extend(e.getMailLib(f),e.getFtnLib(f),{doHtml5Upload_:function(g,h){
var l=this,j=l.cfg(g),m=encodeURIComponent(g.get("sName"));
if(a.isBrowser("safari"))
{
m=m.replace(/%(\w{2})/ig,function(n,o){
return String.fromCharCode(parseInt(o,16));
});
}
h.setRequestHeader("X-QQMAIL-FILENAME",m);
if(j.bToFtn)
{
var k=new FormData();
k.append('timeout',60000);
k.append('mode',"html5upload");
k.append('Upload',"Submit Query");
k.append('Filename',g.oH5File.name);
k.append('file',g.oH5File);
h.send(k);
}
else{
h.send(g.oH5File);
}
},defaultQueryData:function(){
return {t:"qmfileupload",ef:"qdata",sid:a.getSid(),resp_charset:"UTF8",mode:"file"};
}});
}
e.createCom("Html5PopupMail",c,"Html5Popup");
e.createCom("Html5DragMail",c,"Html5Drag");
e.createCom("Html5DragCROS",function(f){
return a.extend(c(f),{defaultQueryData:function(){
return {};
}});
},"Html5Drag");
})(QMFileAdaptor);
;(function(a,b){
var j=QMFileUpload,h=j.components;
j.createCom("FlashPopupMail",function(k){
var l=j.getFtnLib(k);
return a.extend(j.getMailLib(k),l,{init_:function(){
return k.init_.apply(this,arguments);
},initFlash_:function(m){
var n=this;
k.initFlash_.call(n,m);
m.addUploadVar("timeout",60000);
},uploadToFtn:function(m){
m.oCfg={sFlashMode:"RawPost"};
return l.uploadToFtn.apply(this,arguments);
},doFlashUpload_:function(m,n){
var p=this,o=p.cfg(m);
m.set({bVirtual:o.sFlashMode!="RawPost"});
n.upload(m.get("sFid"),o.sFile,o.sFlashMode=="RawPost"?0:1);
},onFlashComplete_:function(m,o,n){
this.uploadFileOnComplete_(m);
k.onFlashComplete_.apply(this,arguments);
},onFlashError_:function(m,p,o,n){
this.uploadFileOnComplete_(m);
k.onFlashError_.apply(this,arguments);
},uploadFileOnComplete_:function(m,n){
var q=this,o=q.getFile(q.getFlashFileId(m)),p=q.getFlash();
if(o)
{
o.set({nUpType:p.getCurUptype(),nPostMode:p.getCompleteMode(),nAutoUploadRetry:p.getRetryTimes(),nRealPostSize:p.getUploadSize&&p.getUploadSize()});
}
},defaultQueryData:function(){
var m=this.oCfg;
m.sFlashMode=m.sFlashMode||"RawPost";
var n={sid:a.getSid(),lang:"utf8",uin:a.getUin(),mode:"file"};
if(m.sFlashMode=="RawPost")
{
n.ef="qdata";
n.t="qmfileupload";
}
if(m.sFlashMode=="CheckPost")
{
n.sid=n.sid.split(',')[0];
}
return n;
},cancel:function(m){
var n=this;
m.set("nUpType",n.getFlash().getCurUptype());
k.cancel.call(n,m);
}});
},"FlashPopup");
function c(k)
{
return a.extend(j.getChipLib(k),{initFlashBeforeUpload_:function(l){
var n=this;
var m=n.getFlash();
var o='http://'+l.get('sIP')+':'+l.get('nPort');
m.setFTNUkey(l.get('sKey'));
m.setFTNFilekey(l.get('sSHA'));
m.setFTNFileIndexID(l.get('sFid'));
m.setFTNUploadFileSize(l.get('nSize'));
m.setFTNUploadDomain(o);
m.setSendEmptyPackage&&m.setSendEmptyPackage(a.isBrowser('chrome')&&l.get('nSize')>100*1024*1024);
l.oCfg=a.extend(l.oCfg||{},{sUrl:o+'/ftn_handler/'});
}});
}
var g;
function e(k)
{
var l=h.FlashPopup.prototype,m=h.FlashPopupMail.prototype;
return a.extend(c(k),j.getH5SafeLib(k),{init_:function(n){
var o=this;
k.init_.call(o,n);
},onprocess:function(n){
if(this.isFileModif_(n)!==false)
{
this.chipUpdateFileSize_(n);
k.onprocess.apply(this,arguments);
}
},doChipFileSign_:function(n){
var p=this,o=p.getFlash();
p.safeStartUpdate_(n);
n.set({nSignChunkSum:Math.ceil(n.get('nSize')/p.nSignFileBlockSize),nCurrentSignChunk:0});
n.fCancel=function(){
o.cancelFTNUpload();
n.bCancelH5_=true;
};
o.ftnUploadInit();
o.setFTNFileIndexID(n.get('sFid'));
p._doLoadFileData(n,0);
},doChipUpload_:function(n){
var p=this,o=p.getFlash();
p.initFlashBeforeUpload_(n);
n.fCancel=function(){
o.cancelFTNUpload();
n.bCancelH5_=true;
};
p._doLoadFileData(n,0);
},getFileSliceFunc_:function(){
if(!this._mfFileSlice)
{
try{
this._mfFileSlice=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice;
}
catch(n)
{
return false;
}
}
return this._mfFileSlice;
},detect:function(){
return k.detect.apply(this,arguments)&&l.detect.apply(this,arguments)&&("FileReader" in window)&&("File" in window)&&this.getFileSliceFunc_();
},initFlash_:function(n){
var o=this;
l.initFlash_.apply(o,arguments);
n.clearUploadVars();
n.addUploadVar("timeout",60000);
o.nSignFileBlockSize=2*1024*1024;
n.ftnUploadInit();
o.nFlashFileIndex=0;
o.nFTNUploadBlockSize=n.getFTNUploadBlockSize()||128*1024;
},getFlash:l.getFlash,insertFlashElem_:l.insertFlashElem_,initFlashDOM_:function(o){
var s=this,p=s.oCfg,q=p.oContainer,t=a.getDomWin(q),r=t.document,n=r.createElement('div');
s.insertFlashElem_(a.extend({oWin:t,oFlashDOMCfg:{nHeight:'1px',nWidth:'1px',nTop:"-9999px",nLeft:"-9999px"},insertHTML:function(u){
n.innerHTML=u;
},onerror:function(){
r.body.removeChild(n);
}},o||{}));
r.body.appendChild(n);
},onFlashProcess_:m.onFlashProcess_,onFlashComplete_:function(n){
var p=this,o=p.getFile(p.getFlashFileId(n));
if(o)
{
p.onChipUploadEnd_(o);
}
m.onFlashComplete_.apply(p,arguments);
},onFlashError_:m.onFlashError_,uploadFileOnComplete_:m.uploadFileOnComplete_,onFlashLoadH5FileData_:function(n,o){
var p=this;
p._onFlashGetFileData.apply(p,arguments);
},onFlashFileSigning_:function(n,o){
var q=this,p=q.getFile(q.getFlashFileId(n));
if(p)
{
q.getFlash().onChipFileSigning_(p,o);
}
},getFlashObjCallBack_:function(){
var o=this,n=m.getFlashObjCallBack_.apply(o,arguments);
delete n.onSelect;
n.onLoadFileData=function(){
o.onFlashLoadH5FileData_.apply(o,arguments);
};
n.onFileSigning=function(){
o.onFlashFileSigning_.apply(o,arguments);
};
return n;
},getFlashFileId:l.getFlashFileId,parseH5File_:function(){
var n=this;
_oFile=k.parseH5File_.apply(n,arguments);
_oFile.set('sFid',++n.nFlashFileIndex+"");
n.moFlashFileMap_[n.nFlashFileIndex]=_oFile.get('sId');
return _oFile;
},_onFlashGetFileData:function(n,o){
var q=this,p=q.getFile(q.getFlashFileId(n));
if(p&&p.get('nSize'))
{
q._doLoadFileData(p,o);
}
},_doLoadFileData:function(o,n){
if(o.bCancelH5_)
{
return;
}
var r=this,s=o.get('sUploadStep'),q,p;
if(s=='signing')
{
q=o.get('nCurrentSignChunk')*r.nSignFileBlockSize;
p=Math.min(q+r.nSignFileBlockSize,o.get('nSize'));
r.getH5FileReader_(o,q,p,r._onLoadSignFileData);
}
else{
q=parseInt(n,10);
p=Math.min(q+r.nFTNUploadBlockSize,o.get('nSize'));
r.getH5FileReader_(o,q,p,r._onLoadUploadFileData);
}
},_onLoadSignFileData:function(p,q,o,n){
if(q.bCancelH5_)
{
return;
}
var u=this,t=u.getFlash(),r=q.get('nCurrentSignChunk'),s=q.get('nSignChunkSum');
if(p.target.result&&p.target.result.length)
{
t.ftnSignUpdateDataURL(p.target.result);
}
q.set('nCurrentSignChunk',++r);
if(r<=q.get('nSignChunkSum'))
{
u._doLoadFileData(q);
u.onChipFileSigning_(q,r/s*100);
}
else{
u.onChipFileSignEnd_(q,{sMD5:t.ftnSignMD5Result(),sSHA:t.ftnSignSHA1Result()});
}
},_onLoadUploadFileData:function(p,q,o,n){
if(q.bCancelH5_)
{
return;
}
var s=this,r=s.getFlash();
if(p.target.result&&p.target.result.length)
{
r.uploadDataToFTNWithOffset(p.target.result,o);
}
},getH5FileReader_:function(p,o,n,q){
var u=this;
var s;
var t=p.oH5File;
if(g)
{
s=g;
g=null;
}
else{
getTop().debug('create FileReader');
s=new FileReader();
}
function r()
{
s.onload=s.onerror=null;
if(g)
{
s.readAsDataURL(u.getFileSliceFunc_().call(t,0,1));
s=null;
}
else{
g=s;
}
t=null;
}
s.onload=function(v){
r();
q.call(u,v,p,o,n);
};
s.onerror=function(v){
r();
var w=v.target.error;
u.onerror(p.set({nUpType:u.getFlash().getCurUptype(),sError:u.err("internal",'77702',w.code,w.name)}));
};
s.readAsDataURL(u.getFileSliceFunc_().call(t,o,n));
},cancel:m.cancel});
}
function f()
{
return 200*1024*1024;
}
j.oUtil.getFlashMaxFileSizeForBurst=f;
j.createCom('FlashPopupFMail',function(k){
return a.extend(c(k),{detect:function(){
return k.detect.apply(this,arguments);
},onprocess:function(l){
this.chipUpdateFileSize_(l);
k.onprocess.apply(this,arguments);
},nMaxFileSizeForBurst:f(),onselect:function(l){
var o=this,m=function(){
this.oCfg=a.extend(this.oCfg||{},{utype:16});
return o.uploadInChip(this.set('bFtnFile',true));
};
for(var p=l.length,n;p--;)
{
n=l[p];
if(n.get('nSize')<o.nMaxFileSizeForBurst)
{
n.uploadToFtn=m;
if(o.isUptoFtnForNormal())
{
n.upload=function(){
this.oCfg=a.extend(this.oCfg||{},{utype:18});
return o.uploadInChip(this.set('bIsUptoFtnForNormal',true));
};
}
}
}
k.onselect.apply(o,arguments);
},getFlashObjCallBack_:function(){
var n=this,m=k.getFlashObjCallBack_.apply(n,arguments);
m.onFTNSignFileFinish=function(o,p,q){
var r=n.getFile(n.getFlashFileId(o));
if(r)
{
n.onChipFileSignEnd_(r,{sMD5:p,sSHA:q});
}
};
var l=m.onComplete;
m.onComplete=function(o){
var p=n.getFile(n.getFlashFileId(o));
if(p)
{
n.onChipUploadEnd_(p);
}
l.apply(n,arguments);
};
m.onFileSigning=function(o,p){
var q=n.getFile(n.getFlashFileId(o));
if(q)
{
n.onChipFileSigning_(q,p);
}
};
return m;
},doChipFileSign_:function(l){
var n=this,m=n.getFlash();
l.fCancel=function(){
n.getFlash().cancelFTNUpload();
};
m.ftnUploadInit();
m.ftnSignFile(l.get('sFid'));
},doChipUpload_:function(l){
var n=this,m=n.getFlash();
n.initFlashBeforeUpload_(l);
l.fCancel=function(){
m.cancelFTNUpload();
};
m.uploadFileToFTN();
}});
},'FlashPopupMail');
j.createCom('FlashH5PopupMail',function(k){
var l=e(k);
return a.extend(j.getMailLib(k),j.getFtnLib(k),l,{init_:function(){
var m=this;
l.init_.apply(this,arguments);
if(m.isUptoFtnForNormal())
{
m.upload=function(n){
n.oCfg=a.extend(n.oCfg||{},{utype:18});
return m.uploadInChip(n.set('bIsUptoFtnForNormal',true));
};
}
},uploadToFtn:function(m){
var n=this;
m.oCfg=a.extend(m.oCfg||{},{utype:15});
return n.uploadInChip(m.set('bFtnFile',true));
},_initContainer:function(){
var m=this;
k._initContainer.apply(m,arguments);
m.initFlashDOM_({onsuccess:function(){
m.oCfg.oContainer.firstChild.style.zIndex=2;
}});
},initFlash_:function(){
return l.initFlash_.apply(this,arguments);
}});
},'Html5Popup');
function d(k)
{
var l=e(k);
return a.extend({},l,{initFlash_:function(){
var m=this;
m.onDrop_=function(n){
if(n.dataTransfer.files.length)
{
m.addH5Files_(n.dataTransfer.files,function(o){
a.E(o,function(p){
p.uploadToFtn=function(){
this.oCfg=a.extend(this.oCfg||{},{utype:17});
return m.uploadInChip(this.set('bFtnFile',true));
};
if(m.isUptoFtnForNormal())
{
p.upload=function(){
this.oCfg=a.extend(this.oCfg||{},{utype:18});
return m.uploadInChip(this.set('bIsUptoFtnForNormal',true));
};
}
});
m.onselect(o);
});
}
};
return l.initFlash_.apply(m,arguments);
},_initContainer:function(){
var m=this;
m.initFlashDOM_();
k._initContainer.apply(m,arguments);
}});
}
j.createCom('FlashH5DragMailCROS',d,'Html5DragCROS');
j.createCom('FlashH5DragMail',d,'Html5DragMail');
})(QMFileAdaptor);
(function(c){
var b={};
function a(e)
{
if(b[e])
{
return b[e].exports;
}
var d=b[e]={exports:{},id:e,loaded:false};
c[e].call(d.exports,d,d.exports,a);
d.loaded=true;
return d.exports;
}
a.m=c;
a.c=b;
a.p="";
return a(0);
})([function(c,b,a){
;(function(d){
var m=QMFileUpload,l=m.components;
var o=getTop();
var n,p;
var h=a(2);
var j=a(6);
var e=a(8);
var f=a(9);
var g=a(10);
function v()
{
(function(y){
var x={};
function w(A)
{
if(x[A])
{
return x[A].exports;
}
var z=x[A]={exports:{},id:A,loaded:false};
y[A].call(z.exports,z,z.exports,w);
z.loaded=true;
return z.exports;
}
w.m=y;
w.c=x;
w.p="";
return w(0);
})({0:function(C,A,y){
var x=y(12);
var w=y(13);
var I=new w();
var J=new x.YaMD5();
var z={reset:function(){
I.reset();
J.start();
},chunkMD5:function(K){
return J.start().appendByteArray(new Uint8Array(K)).end();
},appendMD5:function(K){
if(K.state)
{
J.setState(K.state);
}
else{
J.start();
}
return J.appendByteArray(new Uint8Array(K.chunk)).getState();
},getMD5:function(K){
return J.setState(K).end();
},chunkSHA1:function(K){
return I.digest(K);
},appendSHA1:function(K){
if(!K.state)
{
I.reset();
}
else{
I.setState(K.state);
}
I.append(K.chunk);
return I.getState();
},getSHA1:function(K){
I.setState(K);
return I.end();
}};
var B=!!self.FileReader,H=(B?(new FileReader()):(new FileReaderSync()));
function D(K,L,M)
{
if(B)
{
F.apply(null,arguments);
}
else{
G.apply(null,arguments);
}
}
function F(K,L,N)
{
H.addEventListener('load',Q);
H.addEventListener('abort',O);
H.addEventListener('error',P);
H.readAsArrayBuffer(K);
function Q(R)
{
M();
L(R.target.result);
}
function O(R)
{
M();
N(R.target.error);
}
function P(R)
{
M();
N(R.target.error);
}
function M()
{
delete K;
H.removeEventListener('load',Q);
H.removeEventListener('abort',O);
H.removeEventListener('error',P);
}
}
function G(K,M,N)
{
try{
var L=H.readAsArrayBuffer(K);
M(L);
}
catch(O)
{
N(O);
}
finally 
{
delete K;
}
}
self.addEventListener('message',function(K){
var L=K.data;
function M()
{
var O=z[L.type](L.data);
delete K;
var N=O&&(O.state||O.heap);
self.postMessage({type:'done',data:O},N&&[N]);
}
if(L.type=="appendSHA1"||L.type=="appendMD5")
{
D(L.data.chunk||L.data,function(N){
if(L.data.chunk)
{
L.data.chunk=N;
}
else{
L.data=N;
}
M();
},function(N){
self.postMessage({type:'retry',data:N.message});
});
}
else{
M();
}
});
self.postMessage({type:'ready'});
},12:function(x,w){
(function(G){
'use strict';
var D=function(N,M){
var I=N[0],J=N[1],K=N[2],L=N[3];
I+=(J&K|~J&L)+M[0]-680876936|0;
I=(I<<7|I>>>25)+J|0;
L+=(I&J|~I&K)+M[1]-389564586|0;
L=(L<<12|L>>>20)+I|0;
K+=(L&I|~L&J)+M[2]+606105819|0;
K=(K<<17|K>>>15)+L|0;
J+=(K&L|~K&I)+M[3]-1044525330|0;
J=(J<<22|J>>>10)+K|0;
I+=(J&K|~J&L)+M[4]-176418897|0;
I=(I<<7|I>>>25)+J|0;
L+=(I&J|~I&K)+M[5]+1200080426|0;
L=(L<<12|L>>>20)+I|0;
K+=(L&I|~L&J)+M[6]-1473231341|0;
K=(K<<17|K>>>15)+L|0;
J+=(K&L|~K&I)+M[7]-45705983|0;
J=(J<<22|J>>>10)+K|0;
I+=(J&K|~J&L)+M[8]+1770035416|0;
I=(I<<7|I>>>25)+J|0;
L+=(I&J|~I&K)+M[9]-1958414417|0;
L=(L<<12|L>>>20)+I|0;
K+=(L&I|~L&J)+M[10]-42063|0;
K=(K<<17|K>>>15)+L|0;
J+=(K&L|~K&I)+M[11]-1990404162|0;
J=(J<<22|J>>>10)+K|0;
I+=(J&K|~J&L)+M[12]+1804603682|0;
I=(I<<7|I>>>25)+J|0;
L+=(I&J|~I&K)+M[13]-40341101|0;
L=(L<<12|L>>>20)+I|0;
K+=(L&I|~L&J)+M[14]-1502002290|0;
K=(K<<17|K>>>15)+L|0;
J+=(K&L|~K&I)+M[15]+1236535329|0;
J=(J<<22|J>>>10)+K|0;
I+=(J&L|K&~L)+M[1]-165796510|0;
I=(I<<5|I>>>27)+J|0;
L+=(I&K|J&~K)+M[6]-1069501632|0;
L=(L<<9|L>>>23)+I|0;
K+=(L&J|I&~J)+M[11]+643717713|0;
K=(K<<14|K>>>18)+L|0;
J+=(K&I|L&~I)+M[0]-373897302|0;
J=(J<<20|J>>>12)+K|0;
I+=(J&L|K&~L)+M[5]-701558691|0;
I=(I<<5|I>>>27)+J|0;
L+=(I&K|J&~K)+M[10]+38016083|0;
L=(L<<9|L>>>23)+I|0;
K+=(L&J|I&~J)+M[15]-660478335|0;
K=(K<<14|K>>>18)+L|0;
J+=(K&I|L&~I)+M[4]-405537848|0;
J=(J<<20|J>>>12)+K|0;
I+=(J&L|K&~L)+M[9]+568446438|0;
I=(I<<5|I>>>27)+J|0;
L+=(I&K|J&~K)+M[14]-1019803690|0;
L=(L<<9|L>>>23)+I|0;
K+=(L&J|I&~J)+M[3]-187363961|0;
K=(K<<14|K>>>18)+L|0;
J+=(K&I|L&~I)+M[8]+1163531501|0;
J=(J<<20|J>>>12)+K|0;
I+=(J&L|K&~L)+M[13]-1444681467|0;
I=(I<<5|I>>>27)+J|0;
L+=(I&K|J&~K)+M[2]-51403784|0;
L=(L<<9|L>>>23)+I|0;
K+=(L&J|I&~J)+M[7]+1735328473|0;
K=(K<<14|K>>>18)+L|0;
J+=(K&I|L&~I)+M[12]-1926607734|0;
J=(J<<20|J>>>12)+K|0;
I+=(J^K^L)+M[5]-378558|0;
I=(I<<4|I>>>28)+J|0;
L+=(I^J^K)+M[8]-2022574463|0;
L=(L<<11|L>>>21)+I|0;
K+=(L^I^J)+M[11]+1839030562|0;
K=(K<<16|K>>>16)+L|0;
J+=(K^L^I)+M[14]-35309556|0;
J=(J<<23|J>>>9)+K|0;
I+=(J^K^L)+M[1]-1530992060|0;
I=(I<<4|I>>>28)+J|0;
L+=(I^J^K)+M[4]+1272893353|0;
L=(L<<11|L>>>21)+I|0;
K+=(L^I^J)+M[7]-155497632|0;
K=(K<<16|K>>>16)+L|0;
J+=(K^L^I)+M[10]-1094730640|0;
J=(J<<23|J>>>9)+K|0;
I+=(J^K^L)+M[13]+681279174|0;
I=(I<<4|I>>>28)+J|0;
L+=(I^J^K)+M[0]-358537222|0;
L=(L<<11|L>>>21)+I|0;
K+=(L^I^J)+M[3]-722521979|0;
K=(K<<16|K>>>16)+L|0;
J+=(K^L^I)+M[6]+76029189|0;
J=(J<<23|J>>>9)+K|0;
I+=(J^K^L)+M[9]-640364487|0;
I=(I<<4|I>>>28)+J|0;
L+=(I^J^K)+M[12]-421815835|0;
L=(L<<11|L>>>21)+I|0;
K+=(L^I^J)+M[15]+530742520|0;
K=(K<<16|K>>>16)+L|0;
J+=(K^L^I)+M[2]-995338651|0;
J=(J<<23|J>>>9)+K|0;
I+=(K^(J|~L))+M[0]-198630844|0;
I=(I<<6|I>>>26)+J|0;
L+=(J^(I|~K))+M[7]+1126891415|0;
L=(L<<10|L>>>22)+I|0;
K+=(I^(L|~J))+M[14]-1416354905|0;
K=(K<<15|K>>>17)+L|0;
J+=(L^(K|~I))+M[5]-57434055|0;
J=(J<<21|J>>>11)+K|0;
I+=(K^(J|~L))+M[12]+1700485571|0;
I=(I<<6|I>>>26)+J|0;
L+=(J^(I|~K))+M[3]-1894986606|0;
L=(L<<10|L>>>22)+I|0;
K+=(I^(L|~J))+M[10]-1051523|0;
K=(K<<15|K>>>17)+L|0;
J+=(L^(K|~I))+M[1]-2054922799|0;
J=(J<<21|J>>>11)+K|0;
I+=(K^(J|~L))+M[8]+1873313359|0;
I=(I<<6|I>>>26)+J|0;
L+=(J^(I|~K))+M[15]-30611744|0;
L=(L<<10|L>>>22)+I|0;
K+=(I^(L|~J))+M[6]-1560198380|0;
K=(K<<15|K>>>17)+L|0;
J+=(L^(K|~I))+M[13]+1309151649|0;
J=(J<<21|J>>>11)+K|0;
I+=(K^(J|~L))+M[4]-145523070|0;
I=(I<<6|I>>>26)+J|0;
L+=(J^(I|~K))+M[11]-1120210379|0;
L=(L<<10|L>>>22)+I|0;
K+=(I^(L|~J))+M[2]+718787259|0;
K=(K<<15|K>>>17)+L|0;
J+=(L^(K|~I))+M[9]-343485551|0;
J=(J<<21|J>>>11)+K|0;
N[0]=I+N[0]|0;
N[1]=J+N[1]|0;
N[2]=K+N[2]|0;
N[3]=L+N[3]|0;
};
var B='0123456789abcdef';
var C=[];
var A=function(O){
var I=B;
var J=C;
var M,N,L;
for(var K=0;K<4;K++)
{
N=K*8;
M=O[K];
for(L=0;L<8;L+=2)
{
J[N+1+L]=I.charAt(M&0x0F);
M>>>=4;
J[N+0+L]=I.charAt(M&0x0F);
M>>>=4;
}
}
return J.join('');
};
var y=function(){
this._dataLength=0;
this._state=new Int32Array(4);
this._buffer=new ArrayBuffer(68);
this._bufferLength=0;
this._buffer8=new Uint8Array(this._buffer,0,68);
this._buffer32=new Uint32Array(this._buffer,0,17);
this.start();
};
var H=new Int32Array([1732584193,-271733879,-1732584194,271733878]);
var z=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
y.prototype.appendStr=function(N){
var J=this._buffer8;
var I=this._buffer32;
var K=this._bufferLength;
var L;
for(var M=0;M<N.length;M++)
{
L=N.charCodeAt(M);
if(L<128)
{
J[K++]=L;
}
else if(L<0x800)
{
J[K++]=(L>>>6)+0xC0;
J[K++]=L&0x3F|0x80;
}
else if(L<0xD800||L>0xDBFF)
{
J[K++]=(L>>>12)+0xE0;
J[K++]=(L>>>6&0x3F)|0x80;
J[K++]=(L&0x3F)|0x80;
}
else{
L=((L-0xD800)*0x400)+(N.charCodeAt(++M)-0xDC00)+0x10000;
if(L>0x10FFFF)
{
throw 'Unicode standard supports code points up to U+10FFFF';
}
J[K++]=(L>>>18)+0xF0;
J[K++]=(L>>>12&0x3F)|0x80;
J[K++]=(L>>>6&0x3F)|0x80;
J[K++]=(L&0x3F)|0x80;
}
if(K>=64)
{
this._dataLength+=64;
D(this._state,I);
K-=64;
I[0]=I[16];
}
}
this._bufferLength=K;
return this;
};
y.prototype.appendAsciiStr=function(N){
var J=this._buffer8;
var I=this._buffer32;
var K=this._bufferLength;
var L,M=0;
for(;;)
{
L=Math.min(N.length-M,64-K);
while(L--)
{
J[K++]=N.charCodeAt(M++);
}
if(K<64)
{
break;
}
this._dataLength+=64;
D(this._state,I);
K=0;
}
this._bufferLength=K;
return this;
};
y.prototype.appendByteArray=function(M){
var J=this._buffer8;
var I=this._buffer32;
var K=this._bufferLength;
var L,N=0;
for(;;)
{
L=Math.min(M.length-N,64-K);
while(L--)
{
J[K++]=M[N++];
}
if(K<64)
{
break;
}
this._dataLength+=64;
D(this._state,I);
K=0;
}
this._bufferLength=K;
return this;
};
y.prototype.getState=function(){
var I={state:this._state.buffer.slice(0),dataLength:this._dataLength,bufferLength:this._bufferLength};
if(this._bufferLength)
{
I.buffer=this._buffer.slice(0);
}
return I;
};
y.prototype.setState=function(I){
this._state.set(new Int32Array(I.state));
this._dataLength=I.dataLength;
this._bufferLength=I.bufferLength;
if(I.bufferLength)
{
this._buffer32.set(new Uint32Array(I.buffer));
}
return this;
};
y.prototype.start=function(){
this._dataLength=0;
this._bufferLength=0;
this._state.set(H);
return this;
};
y.prototype.end=function(Q){
var K=this._bufferLength;
this._dataLength+=K;
var J=this._buffer8;
J[K]=0x80;
J[K+1]=J[K+2]=J[K+3]=0;
var I=this._buffer32;
var N=(K>>2)+1;
I.set(z.subarray(N),N);
if(K>55)
{
D(this._state,I);
I.set(z);
}
var L=this._dataLength*8;
if(L<=0xFFFFFFFF)
{
I[14]=L;
}
else{
var P=L.toString(16).match(/(.*?)(.{0,8})$/);
var O=parseInt(P[2],16);
var M=parseInt(P[1],16)||0;
I[14]=O;
I[15]=M;
}
D(this._state,I);
return !!Q?this._state:A(this._state);
};
var F=new y();
y.hashStr=function(J,I){
return F.start().appendStr(J).end(I);
};
y.hashAsciiStr=function(J,I){
return F.start().appendAsciiStr(J).end(I);
};
if(y.hashStr('hello')!=='5d41402abc4b2a76b9719d911017c592')
{
console.error('YaMD5> this javascript engine does not support YaMD5. Sorry.');
}
if(typeof G==='object')
{
G.YaMD5=y;
}
return y;
})(this);
},13:function(y,x,w){
(function(){
if(true)
{
y.exports=z;
}
else if(typeof window!=='undefined')
{
window.Rusha=z;
}
else if(typeof self!=='undefined')
{
self.Rusha=z;
}
var H=function(I){
for(I+=9;I%64>0;I+=1)
;
return I;
};
var G=function(J,M){
var K=new Uint8Array(J.buffer);
var N=M%4;
var I=M-N;
switch(N)
{case 0:
K[I+3]=0;
case 1:
K[I+2]=0;
case 2:
K[I+1]=0;
case 3:
K[I+0]=0;
}for(var L=(M>>2)+1;L<J.length;L++)
J[L]=0;
};
var F=function(I,J,K){
I[J>>2]|=0x80<<(24-(J%4<<3));
I[(((J>>2)+2)&~0x0f)+14]=(K/(1<<29))|0;
I[(((J>>2)+2)&~0x0f)+15]=K<<3;
};
var D=function(I){
var L,N,K='0123456789abcdef',M='',J=new Uint8Array(I);
for(L=0;L<J.length;L++)
{
N=J[L];
M+=K.charAt(N>>4&15)+K.charAt(N>>0&15);
}
return M;
};
var B=function(J){
var I;
if(J<=65536)
{
return 65536;
}
if(J<16777216)
{
for(I=65536;I<J;I=I<<1)
;
}
else{
for(I=16777216;I<J;I+=16777216)
;
}
return I;
};
var C=function(J,M){
var K=new Int32Array(J,M+320,5);
var L=new Int32Array(5);
var I=new DataView(L.buffer);
I.setInt32(0,K[0],false);
I.setInt32(4,K[1],false);
I.setInt32(8,K[2],false);
I.setInt32(12,K[3],false);
I.setInt32(16,K[4],false);
return L;
};
function z(I)
{
'use strict';
var O={};
I=I||64*1024;
if(I%64>0)
{
throw new Error('Chunk size must be a multiple of 128 bit');
}
O.offset=0;
O.maxChunkLen=I;
O.padMaxChunkLen=H(I);
O.heap=new ArrayBuffer(B(O.padMaxChunkLen+320+20));
O.h32=new Int32Array(O.heap);
O.h8=new Int8Array(O.heap);
O.core=new z._core({Int32Array:Int32Array},{},O.heap);
K();
function K()
{
O.offset=0;
var P=new Int32Array(O.heap,O.padMaxChunkLen+320,5);
P[0]=1732584193;
P[1]=-271733879;
P[2]=-1732584194;
P[3]=271733878;
P[4]=-1009589776;
}
function J(P,Y,U,W)
{
var X=W%4;
var V=(U+X)%4;
var R=U-V;
switch(X)
{case 0:
O.h8[W]=P[Y+3];
case 1:
O.h8[W+1-(X<<1)|0]=P[Y+2];
case 2:
O.h8[W+2-(X<<1)|0]=P[Y+1];
case 3:
O.h8[W+3-(X<<1)|0]=P[Y];
}if(U<V+X)
{
return;
}
for(var Q=4-X;Q<R;Q=Q+4|0)
{
O.h32[W+Q>>2|0]=P[Y+Q]<<24|P[Y+Q+1]<<16|P[Y+Q+2]<<8|P[Y+Q+3];
}
switch(V)
{case 3:
O.h8[W+R+1|0]=P[Y+R+2];
case 2:
O.h8[W+R+2|0]=P[Y+R+1];
case 1:
O.h8[W+R+3|0]=P[Y+R];
}
}
;var L=this.rawDigest=function(R){
var U=R.byteLength;
K();
R=new Uint8Array(R);
var P=O.maxChunkLen;
var Q=0;
for(;Q+P<U;Q+=P)
{
J(R,Q,P,0);
O.core.hash(P,O.padMaxChunkLen);
}
P=U-Q;
var V=H(P);
var W=new Int32Array(O.heap,0,V>>2);
J(R,Q,P,0);
G(W,P);
F(W,P,U);
O.core.hash(V,O.padMaxChunkLen);
return C(O.heap,O.padMaxChunkLen);
};
this.digest=function(P){
return D(L(P).buffer);
};
var N=this.reset=function(){
K();
};
this.append=function(P){
var R=0;
var Q=P.byteLength;
var V=O.offset%O.maxChunkLen;
P=new Uint8Array(P);
O.offset+=Q;
while(R<Q)
{
var U=Math.min(Q-R,O.maxChunkLen-V);
J(P,R,U,V);
V+=U;
R+=U;
if(V===O.maxChunkLen)
{
O.core.hash(O.maxChunkLen,O.padMaxChunkLen);
V=0;
}
}
};
var M=this.rawEnd=function(){
var Q=O.offset;
var P=Q%O.maxChunkLen;
var R=H(P);
var V=new Int32Array(O.heap,0,R>>2);
G(V,P);
F(V,P,Q);
O.core.hash(R,O.padMaxChunkLen);
var U=C(O.heap,O.padMaxChunkLen);
K();
return U;
};
this.end=function(){
return D(M().buffer);
};
this.getState=function(){
var R=O.offset%O.maxChunkLen,P;
if(!R)
{
var Q=new Int32Array(O.heap,O.padMaxChunkLen+320,5);
P=Q.buffer.slice(Q.byteOffset,Q.byteOffset+Q.byteLength);
}
else{
P=O.heap.slice(0);
}
return {offset:O.offset,heap:P};
};
this.setState=function(Q){
O.offset=Q.offset;
if(Q.heap.byteLength===20)
{
var P=new Int32Array(O.heap,O.padMaxChunkLen+320,5);
P.set(new Int32Array(Q.heap));
}
else{
O.h32.set(new Int32Array(Q.heap));
}
};
}
;z._core=function A(M,J,L){
var I=new M.Int32Array(L);
function K(P,U)
{
P=P|0;
U=U|0;
var N=0,O=0,V=0,aa=0,W=0,ab=0,X=0,ac=0,Y=0,ad=0,Z=0,ae=0,Q=0,R=0;
V=I[U+320>>2]|0;
W=I[U+324>>2]|0;
X=I[U+328>>2]|0;
Y=I[U+332>>2]|0;
Z=I[U+336>>2]|0;
for(N=0;(N|0)<(P|0);N=N+64|0)
{
aa=V;
ab=W;
ac=X;
ad=Y;
ae=Z;
for(O=0;(O|0)<64;O=O+4|0)
{
R=I[N+O>>2]|0;
Q=((V<<5|V>>>27)+(W&X|~W&Y)|0)+((R+Z|0)+1518500249|0)|0;
Z=Y;
Y=X;
X=W<<30|W>>>2;
W=V;
V=Q;
I[P+O>>2]=R;
}
for(O=P+64|0;(O|0)<(P+80|0);O=O+4|0)
{
R=(I[O-12>>2]^I[O-32>>2]^I[O-56>>2]^I[O-64>>2])<<1|(I[O-12>>2]^I[O-32>>2]^I[O-56>>2]^I[O-64>>2])>>>31;
Q=((V<<5|V>>>27)+(W&X|~W&Y)|0)+((R+Z|0)+1518500249|0)|0;
Z=Y;
Y=X;
X=W<<30|W>>>2;
W=V;
V=Q;
I[O>>2]=R;
}
for(O=P+80|0;(O|0)<(P+160|0);O=O+4|0)
{
R=(I[O-12>>2]^I[O-32>>2]^I[O-56>>2]^I[O-64>>2])<<1|(I[O-12>>2]^I[O-32>>2]^I[O-56>>2]^I[O-64>>2])>>>31;
Q=((V<<5|V>>>27)+(W^X^Y)|0)+((R+Z|0)+1859775393|0)|0;
Z=Y;
Y=X;
X=W<<30|W>>>2;
W=V;
V=Q;
I[O>>2]=R;
}
for(O=P+160|0;(O|0)<(P+240|0);O=O+4|0)
{
R=(I[O-12>>2]^I[O-32>>2]^I[O-56>>2]^I[O-64>>2])<<1|(I[O-12>>2]^I[O-32>>2]^I[O-56>>2]^I[O-64>>2])>>>31;
Q=((V<<5|V>>>27)+(W&X|W&Y|X&Y)|0)+((R+Z|0)-1894007588|0)|0;
Z=Y;
Y=X;
X=W<<30|W>>>2;
W=V;
V=Q;
I[O>>2]=R;
}
for(O=P+240|0;(O|0)<(P+320|0);O=O+4|0)
{
R=(I[O-12>>2]^I[O-32>>2]^I[O-56>>2]^I[O-64>>2])<<1|(I[O-12>>2]^I[O-32>>2]^I[O-56>>2]^I[O-64>>2])>>>31;
Q=((V<<5|V>>>27)+(W^X^Y)|0)+((R+Z|0)-899497514|0)|0;
Z=Y;
Y=X;
X=W<<30|W>>>2;
W=V;
V=Q;
I[O>>2]=R;
}
V=V+aa|0;
W=W+ab|0;
X=X+ac|0;
Y=Y+ad|0;
Z=Z+ae|0;
}
I[U+320>>2]=V;
I[U+324>>2]=W;
I[U+328>>2]=X;
I[U+332>>2]=Y;
I[U+336>>2]=Z;
}
return {hash:K};
};
}());
}});
}
var q=1,r=2;
var t=d.getRes('$js_path$com/kits/qmfileupload/qqmail/js/h5_chip/dist/hash_worker_release35083a.js'),u=(/hash_worker_release(.*)\.js/.test(t)&&RegExp.$1)||"",s=location.protocol+"//"+location.hostname+"/zh_CN/htmledition/js/com/kits/qmfileupload/qqmail/js/h5_chip/dist/hash_worker_release"+u+".js";
if(o.goExpers&&o.goExpers.h5cJsUploadMore)
{
q=2;
r=4;
}
function k(w)
{
var x=l.Html5PopupMail.prototype;
return d.extend(m.getChipLib(w),m.getH5SafeLib(w),{nConcurrent:q,nReaderNum:2,nHashWorkNum:r,nMaxRetryNum:100,nMaxSingleRetryNum:3,nSignFileBlockSize:512*1024,nUploadFileBlockSize:512*1024,nCacheThreshold:1,init_:function(){
w.init_.apply(this,arguments);
if(!n)
{
n=new h();
p=new j();
n.PRIORITY=p.PRIORITY={send:0,send_read:0,block_hash:0,file_sha1:1,file_md5:2,pre_read_file_hash:3,pre_block_hash:3};
for(var A=this.nReaderNum;A--;)
{
n.fork();
}
var z="";
if(window.goJsConlog)
{
z=["var noof=function(){},","$_home_qspace_dev_tools_codeSyncFiles_webmail_QQMail_tmp_js_ascii__qmtool_Log= noof,","goJsConlog;goJsConlog={addJslevel:noof,subJslevel:noof};\n"].join("");
}
var y;
if(o.gbIsIE||o.gbIsEdge)
{
y=s;
}
else{
y=window.URL.createObjectURL(new Blob([v.toString()+'\n'+z+v.name+'();']));
}
for(var A=this.nHashWorkNum;A--;)
{
p.fork(y);
}
if(!(o.gbIsIE||o.gbIsEdge))
{
window.URL.revokeObjectURL(y);
}
}
},detect:function(){
var A=getTop();
var y=typeof Array.prototype.every=='function'&&A.goExpers&&A.goExpers.h5cJsUpload&&!A.S("worksUploader",A.getMainWin())&&x.detect.apply(this,arguments)&&((A.gbIsSafari&&parseInt(A.gsSafariVer)>8)||!A.gbIsSafari)&&'Promise|FileReader|DataView|ArrayBuffer|Uint8Array|URL|Blob'.split('|').every(function(D){
return D in window;
});
if(y)
{
try{
var C;
if(A.gbIsIE||A.gbIsEdge)
{
C=new Worker(s);
}
else{
var B=window.URL.createObjectURL(new Blob(['']));
C=new Worker(B);
window.URL.revokeObjectURL(B);
}
C&&C.terminate();
return true;
}
catch(z)
{
console.log(z);
}
}
return false;
},uploadToFtn:function(y){
return this.uploadInChip(y.set('bFtnFile',true));
},upload:function(y){
if(this.isUptoFtnForNormal())
{
return this.uploadInChip(y.set('bIsUptoFtnForNormal',true));
}
else{
return w.upload.apply(this,arguments);
}
},doChipFileSign_:function(y){
var A=this;
A.safeStartUpdate_(y);
var z=y.fCancel;
y.fCancel=function(){
y._oCurFileBlock&&y._oCurFileBlock.cancel();
z&&z.call(y);
};
A._realChipFileSign2(y);
},_genFileBlock:function(z,y){
var A=new f(n,p,z.oH5File.slice(y,y+this.nSignFileBlockSize));
A.__nOffset=y;
return A;
},_realChipFileSign2:function(y){
var M=this;
var G=y.get('nSize');
var J=[];
var D=0;
var F=0;
var A=Math.ceil(G/M.nSignFileBlockSize),z=A>2?2:A;
var O=1,H=0,L,I,K;
var C=d.speedNow(),B;
function P(Q)
{
L=Promise.resolve(Q);
for(i=0;i<z;i++)
{
I=K||M._genFileBlock(y,H);
H+=M.nSignFileBlockSize;
K=H>G?{}:(M._genFileBlock(y,H));
(function(R,U,V){
L=L.then(function(W){
if(y.bCancelH5_)
{
return;
}
if(!W)
{
W=[];
}
function aa(ab)
{
return {data:{state:W[0],chunk:U.block},type:'appendSHA1'};
}
function Z(ab)
{
return {data:{state:W[1],chunk:U.block},type:'appendMD5'};
}
y._oCurFileBlock=U;
var Y=Promise.all([U._hashHandle("","file_sha1",aa,"file_sha1",true),U._hashHandle("","file_md5",Z,"file_md5",true)]);
var X=d.speedNow();
Y.then(function(){
var ab=d.speedNow()-X;
F++;
if(ab>100)
{
D++;
try{
}
catch(ac)
{
debugger;
}
}
U.free();
M.onChipFileSigning_(y,U.__nOffset/G*100-2);
});
if(z==R+1&&O*z<A)
{
return Y.then(function(ab){
O++;
P(ab);
});
}
return Y;
})['catch'](function(W){
M._customInternalError(y,'fileHashError');
});
})(i,I,K);
if((O-1)*z+i+1==A)
{
N();
break;
}
}
}
P();
J=null;
function N()
{
L.then(function(Q){
y._oCurFileBlock=null;
if(D)
{
debug(['hash timeout:',(D/F*100).toFixed(6),'% ',D,'/',F].join(''));
}
if(!y.bCancelH5_)
{
return Promise.all([p.run(p.task({data:Q[0],type:'getSHA1'})),p.run(p.task({data:Q[1],type:'getMD5'}))]);
}
}).then(function(Q){
B=d.speedNow();
var R=G/1024/1024/(B-C)*1000;
debug(["[",y.get("sName"),"]\u626B\u63CF:",R,"M/S"].join(""));
M.xlyReportSp({78501655:R},y);
if(!y.bCancelH5_)
{
M.onChipFileSignEnd_(y,{sSHA:Q[0],sMD5:Q[1]});
}
},function(Q){
M._customInternalError(y,'fileHashError');
});
}
},_realChipFileSign:function(y){
var I=this;
var H=Promise.resolve();
var D=y.get('nSize');
var G=[];
var B=0;
var C=0;
for(var F=0;F<D;F+=I.nSignFileBlockSize)
{
G.push(I._genFileBlock(y,F));
}
var A=d.speedNow(),z;
G.forEach(function(K,J,L){
var M=L[J+1]||{};
H=H.then(function(N){
if(y.bCancelH5_)
{
return;
}
if(!N)
{
N=[];
}
function R(U)
{
return {data:{state:N[0],chunk:U},type:'appendSHA1'};
}
function Q(U)
{
return {data:{state:N[1],chunk:U},type:'appendMD5'};
}
y._oCurFileBlock=K;
M.read&&M.read('pre_read_file_hash');
var P=Promise.all([K.fileSha1(R),K.fileMd5(Q)]);
var O=d.speedNow();
P.then(function(){
var U=d.speedNow()-O;
C++;
if(U>100)
{
B++;
try{
}
catch(V)
{
debugger;
}
}
K.free();
I.onChipFileSigning_(y,K.__nOffset/D*100-2);
});
return P;
});
});
G=null;
H.then(function(J){
y._oCurFileBlock=null;
if(B)
{
debug(['hash timeout:',(B/C*100).toFixed(6),'% ',B,'/',C].join(''));
}
if(!y.bCancelH5_)
{
return Promise.all([p.run(p.task({data:J[0],type:'getSHA1'})),p.run(p.task({data:J[1],type:'getMD5'}))]);
}
}).then(function(J){
z=d.speedNow();
var K=D/1024/1024/(z-A)*1000;
debug(["[",y.get("sName"),"]\u626B\u63CF:",K,"M/S"].join(""));
if(!y.bCancelH5_)
{
I.onChipFileSignEnd_(y,{sSHA:J[0],sMD5:J[1]});
}
},function(J){
I._customInternalError(y,'fileHashError');
});
},doChipUpload_:function(y){
var A=this;
var z=new e(n,p,y.oH5File,A.nUploadFileBlockSize,A.nCacheThreshold);
z.addCache(0,64*1024);
y._mnStartUploadTime=+new Date();
y._nReadHitCache=0;
y._nReadTimeCount=0;
y._nHashHitCache=0;
y._nHashTimeCount=0;
y._nAjaxTimeCount=0;
y._nTotalTimeCount=0;
A._uploadFromOffset(y,z,0);
},_uploadFromOffset:function(B,A,y,z){
var G=this;
var F=+new Date();
var D,H,C;
return A.fetch(y).then(function(I){
D=d.speedNow();
H=I[0];
if(B.bCancelH5_)
{
return;
}
var K=I[0];
var J=I[1];
B._oCurFileBlock=I[2];
C=I[2]._nResumeReadTime;
return G._requestFTN(B,y,K,J);
}).then(function(I){
G.setRealPostSize_(B,F,B._oCurFileBlock.block.size);
return I;
},function(I){
G.setRealPostSize_(B,F,B._oCurFileBlock.block.size);
throw I;
}).then(function(I){
var Z=d.speedNow();
var R=C-F>0?(C-F):0;
var V=R,N=D-F-V,K=Z-D,aa=Z-F;
if(B._mnRealRequestTotalNum>1)
{
B._nTotalTimeCount+=aa;
if(V==0)
{
B._nReadHitCache++;
}
else{
B._nReadTimeCount+=V;
}
if(N<6)
{
B._nHashHitCache++;
}
B._nHashTimeCount+=N;
}
B._nAjaxTimeCount+=K;
if(B.bCancelH5_)
{
return;
}
var P=y+B._oCurFileBlock.block.size;
G.onprocess(B.set({nUploadPercent:P/B.get('nSize')*100,nUploadedSize:P}));
if(!I.end)
{
if(I.nextOffset>=B.get('nSize'))
{
throw new Error('next offset overflow');
}
if(I.nextOffset<=y)
{
o.LogKV("h5c|uploading|callback");
var ac=(y-I.nextOffset)/G.nUploadFileBlockSize;
if(ac>G.nCacheThreshold||ac!=parseInt(ac))
{
A.resetCache();
}
if(B._mnCallBackTotalTime==undefined)
{
B._mnCallBackTotalChip=0;
B._mnCallBackTotalNum=0;
}
B._mnCallBackTotalChip+=Number((y-I.nextOffset)/G.nUploadFileBlockSize);
B._mnCallBackTotalNum++;
}
return G._uploadFromOffset(B,A,I.nextOffset);
}
else{
G.reportSuccDomain(B);
var ab=+new Date();
B.set("nUsedTime",ab-B._mnStartUploadTime);
var Q=(B._nReadHitCache+1)/B._mnRealRequestTotalNum*100,L=(B._nHashHitCache+1)/B._mnRealRequestTotalNum*100;
var Y=B._nTotalTimeCount;
var W=(B._nReadTimeCount)/(Y||1)*100,O=(B._nHashTimeCount)/(Y||1)*100;
var X=B.get("nRealPostSize");
var U=X/(B._nReadTimeCount||1)/1.024/1024,M=X/(B._nHashTimeCount||1)/1.024/1024,J=X/(B._nAjaxTimeCount||1)/1.024;
G.xlyReportSp({78501494:Q,78501495:L,78501496:W,78501497:O,78501498:U,78501499:M,78501500:J},B);
debug(["\u603B\u8017\u65F6\uFF1A",(ab-B._mnStartUploadTime)/1000,"s"].join(""));
debug(["\u771F\u5B9E\u8BF7\u6C42\u8017\u65F6\uFF1A",(B._mnRealRequestTotalTime)/1000,"s"].join(""));
debug(["\u771F\u5B9E\u8BF7\u6C42\u8017\u65F6\u5360\u6BD4\uFF1A",(B._mnRealRequestTotalTime)/(ab-B._mnStartUploadTime)*100,"%"].join(""));
debug(["\u771F\u5B9E\u8BF7\u6C42\u6B21\u6570\uFF1A",(B._mnRealRequestTotalNum),"\u6B21"].join(""));
debug(["\u771F\u5B9E\u4E0A\u4F20\u5927\u5C0F\uFF1A",B.get("nRealPostSize")/1024/1024,"M"].join(""));
debug(["[",B.get("sName"),"]\u4E0A\u4F20:",B.get("nRealPostSize")/1024/1024/(ab-B._mnStartUploadTime)*1000,"M/S"].join(""));
debug(["\u5E73\u5747\u56DE\u4F20\u7247\u6570\uFF1A",B._mnCallBackTotalChip?((B._mnCallBackTotalChip)/B._mnCallBackTotalNum):0,"\u7247"].join(""));
G.oncomplete(B);
}
})['catch'](function(I){
var J=B.get('nAutoUploadRetry')||0;
if(!z)
{
z=0;
}
if(J<G.nMaxRetryNum&&z<G.nMaxSingleRetryNum)
{
B.set('nAutoUploadRetry',++J);
debug('auto upload retry');
G._uploadFromOffset(B,A,y,z?z+1:1);
}
else{
G.reportCustomError(B,{fileUploadProgress:y/B.get('nSize')*10,httpStatus:/http,(\d{3})/.test(I.message)&&RegExp.$1||0});
if(J>=G.nMaxRetryNum)
{
o.LogKV("h5c|uploading|retry|fail|overflow");
}
o.LogKV("h5c|uploading|retry|fail");
G._parseError(B,I);
}
});
},_parseError:function(z,y){
var A=this;
if(y.message=='next offset overflow')
{
A._customInternalError(z,'nextOffsetOverFlow');
}
else if(y.message.substr(0,5)=='http,')
{
A.onerror(z.set('sError',A.err('http',y.message.substr(5))));
}
else if(/^[a-z]+,/i.test(y.message))
{
A.onerror(z.set('sError',y.message));
}
else{
debug(y);
A.onerror(z.set('sError',A.err('unknow',79390)));
}
},_requestFTN:function(A,y,B,z){
return this._requestFTNByAjax.apply(this,arguments);
},_getRequestUrl:function(y){
if(!y.sRUrl)
{
var z=y.get('nPort'),A="http";
if(window.location.protocol=="https:"||window.location.hostname.indexOf("webdev")>-1)
{
z="443";
A="https";
}
if(!(y.get('sIP')))
{
return;
}
y.sRUrl=A+'://'+y.get('sIP')+':'+z+'/ftn_handler/';
}
return y.sRUrl;
},_requestFTNByAjax:function(A,y,B,z){
var C=this;
return new Promise(function(F,D){
var H,G;
var J=new XMLHttpRequest();
var K=C._getRequestUrl(A);
J.open('POST',K,true);
J.timeout=120000;
J.setRequestHeader('DATA-MD5',B);
J.setRequestHeader('content-type','application/octet-stream');
J.setRequestHeader('Cache-Control','no-cache');
J.responseType='arraybuffer';
J.onload=function(){
if(J.readyState==4)
{
J.upload.onprogress=null;
if(J.status==200)
{
G=+new Date();
if(A._mnRealRequestTotalTime==undefined)
{
A._mnRealRequestTotalTime=0;
A._mnRealRequestTotalNum=0;
}
A._mnRealRequestTotalTime+=Number(G-H);
A._mnRealRequestTotalNum++;
try{
F(g.parseFTNRespone(J.response,A.get('sFileId')));
}
catch(M)
{
D(M);
}
}
else{
var L=J.getResponseHeader('User-ReturnCode');
D(new Error(L?'internal,'+L:'http,'+J.status));
}
}
};
J.onerror=function(){
D(new Error('http,600'));
o.LogKV("h5c|uploading|onerror");
};
J.onabort=function(){
D(new Error('http,700'));
o.LogKV("h5c|uploading|onabort");
};
J.ontimeout=function(){
D(new Error('http,800'));
o.LogKV("h5c|uploading|timeout");
};
J.upload.onprogress=function(L){
if(L.lengthComputable)
{
C.onprocess(A.set('nUploadPercent',(L.loaded+y)/A.get('nSize')*100));
}
};
var I=g.genFTNRequestBody(A.get('sKey'),A.get('sSHA'),A.oH5File,z,y,A.get('sFileId'));
J.send(I);
H=+new Date();
});
},_customInternalError:function(y,z){
this.onerror(y.set('sError',this.err('internal',{nextOffsetOverFlow:20001,fileHashError:20002}[z]||79390)));
},reportCustomError:function(y,C){
var z=y.get('nPort'),A="http",B=y.get("nAppId");
if(window.location.protocol=="https:"||window.location.hostname.indexOf("webdev")>-1)
{
z="443";
A="https";
}
var D=A+'://'+y.get('sIP')+':'+z+'/?';
browser=o.getBrowserInfo().name;
ajaxUploadSucTimes=y._mnRealRequestTotalNum||0,fileUploadProgress=Math.round(C.fileUploadProgress),platform=o.gbIsMac?"mac":"window",infoStr=[D,"&browser=",browser,"&ajaxuploadsuctimes=",ajaxUploadSucTimes,"&fileuploadprogress=",fileUploadProgress,"&platform=",platform,"&httpstatus=",C.httpStatus,"&appid=",B].join("");
o.ossLog("realtime","all",["stat=setframe&newGetTopException=",encodeURIComponent(infoStr)].join(""));
},reportSuccDomain:function(y){
var z=["succdomain=",y.get('sIP')].join("");
o.ossLog("realtime","all",["stat=setframe&newGetTopException=",encodeURIComponent(z)].join(""));
},xlyReportSp:function(z,y){
if(y.get('nSize')>99*1024*1024)
{
var A="/xly_report/report?";
params="";
for(key in z)
{
params+="&q="+encodeURIComponent("st:speed=k="+key+"&v="+z[key]);
}
A+=params+"&r="+Math.random();
o.QMAjax.send(A);
}
}});
}
m.createCom('H5CPopupMail',k,'Html5PopupMail');
m.createCom('H5CDragFMailCROS',k,'Html5DragCROS');
m.createCom('H5CDragFMail',k,'Html5DragMail');
})(QMFileAdaptor);
},,function(f,e,d){
var a=d(3);
var c=d(4);
function b()
{
this.queue=new a();
}
b.prototype.PRIORITY={};
b.prototype.fork=function(){
this.queue.addWorker(new FileReader());
};
b.prototype.task=function(g,k){
var h=this;
var j=new c(g,k);
j.result().then(function(){
h.queue.removeTask(j);
});
return j;
};
b.prototype.run=function(h,g){
return this.queue.runTask(h,this.PRIORITY[g]);
};
f.exports=b;
},function(c,b){
function a()
{
this._tasksList=[];
this._workers=[];
}
a.prototype.addWorker=function(h){
if(h.__status__&&h.__status__!='ready')
{
return console.warn('worker add twice');
}
for(var d=0,e=this._tasksList.length,f,g;d<e;d++)
{
g=this._tasksList[d];
if(g&&g.length)
{
while((f=g.shift()))
{
if(this._runTask(h,f))
{
return;
}
}
}
}
h.__status__='ready';
this._workers.push(h);
};
a.prototype._runTask=function(f,e){
var d=this;
if(e.start(f))
{
e.result().then(function(){
f.__status__='ready';
d.addWorker(f);
},function(g){
f.__status__='ready';
d.addWorker(f);
return Promise.reject(g);
});
f.__status__='running';
d.removeWorker(f);
return true;
}
return false;
};
a.prototype.findWorker=function(d){
return this._workers.findIndex(function(e){
return e===d;
});
};
a.prototype.removeWorker=function(d){
this._workers=this._workers.filter(function(e){
return e!==d;
});
};
a.prototype.runTask=function(e,d){
if(this._workers.length>0)
{
this._runTask(this._workers[0],e);
}
else{
this.insertTask(e,d);
}
return e.result();
};
a.prototype.insertTask=function(e,d){
if(d)
d=Number(d);
d||(d=0);
(this._tasksList[d]||(this._tasksList[d]=[])).push(e);
(e.__priority||(e.__priority=[])).push(d);
};
a.prototype.removeTask=function(e){
var f=this._tasksList;
for(var d=f.length;d--;)
{
if(f[d])
{
f[d]=f[d].filter(function(g){
return e!==g;
});
}
}
};
c.exports=a;
},function(e,d,c){
var b=c(5);
function a(f,g)
{
this._type=g;
this._rdBlock=f;
b.call(this);
}
a.prototype=b.proto();
a.prototype.handle_=function(f){
var g=this;
return new Promise(function(n,m){
f.addEventListener('load',l);
f.addEventListener('abort',j);
f.addEventListener('error',k);
f.readAsArrayBuffer(g._rdBlock);
function l(o)
{
h();
n(o.target.result);
}
function j()
{
h();
m(new Error('aborted'));
}
function k(o)
{
h();
m(o);
}
function h()
{
delete g._rdBlock;
f.removeEventListener('load',l);
f.removeEventListener('abort',j);
f.removeEventListener('error',k);
}
});
};
e.exports=a;
},function(c,b){
function a()
{
var d=this;
d.timing={};
d._resolve=d._reject=null;
d._step('init');
d._promise=new Promise(function(f,e){
d._resolve=f;
d._reject=e;
}).then(function(e){
d._step('start');
return d.handle_(e);
});
d._promise.then(function(){
d._step('success');
},function(e){
d._step('error');
return Promise.reject(e);
});
}
a.prototype.SPEED_TEST=true;
a.prototype.timeEnd=function(d){
if(this.SPEED_TEST)
{
this.timing[d]=+new Date();
}
};
a.prototype.speedReport=function(){
var f=this.timing;
var d=f.success||f.error||f.aborted;
var g=d-f.init||1;
var h=f.start-f.init;
var e=d-f.start;
return ['[',this.__status__,']',' init:',f.init,' total:',g,'ms',' wait:',h,'ms(',(h/g*100).toFixed(2),'%)',' run:',e,'ms(',(e/g*100).toFixed(2),'%)'].join('');
};
a.prototype._step=function(d){
this.__status__=d;
this.timeEnd(d);
};
a.prototype.start=function(e){
if(this._resolve)
{
var d=this._resolve;
this._reject=this._resolve=null;
d(e);
return true;
}
return false;
};
a.prototype.abort=function(d){
if(this._reject)
{
var e=this._reject;
this._reject=this._resolve=null;
d!==true&&e(new Error('abort'));
}
this._step('aborted');
};
a.prototype.handle_=function(){
};
a.prototype.result=function(){
return this._promise;
};
a.proto=function(){
function d()
{
}
d.prototype=this.prototype;
return new d();
};
c.exports=a;
},function(f,e,d){
var a=d(3);
var c=d(7);
function b()
{
this.queue=new a();
}
b.prototype.PRIORITY={};
b.prototype.fork=function(k){
var j=this;
try{
var l=new Worker(k);
}
catch(g)
{
console.log('init worker',g);
return g;
}
function h(m)
{
l.removeEventListener('message',h);
if(m.data.type=='ready')
{
j.queue.addWorker(l);
}
}
l.addEventListener('message',h);
l.addEventListener('error',function(m){
console.log('worker err, %s err:%o',k,m);
l.postMessage({type:'reset'});
});
};
b.prototype.task=function(g){
return new c(g);
};
b.prototype.run=function(h,g){
return this.queue.runTask(h,this.PRIORITY[g]);
};
f.exports=b;
},function(e,d,c){
var a=c(5);
function b(f)
{
this._wkmsg=f;
a.call(this);
}
b.prototype=a.proto();
b.prototype.handle_=function(g){
var f=this;
return new Promise(function(m,l){
g.addEventListener('message',k);
g.addEventListener('error',j);
g.postMessage(f._wkmsg);
function k(n)
{
if(n.data.type==='done')
{
h();
m(n.data.data);
}
else if(n.data.type==='retry')
{
f.nRetryCount=f.nRetryCount||0;
if(f.nRetryCount>4)
{
debug(n.data.data);
getTop().LogKV("h5c|worker|read|error");
return j(n.data.data);
}
f.nRetryCount++;
g.postMessage(f._wkmsg);
}
}
function j(n)
{
h();
l(n);
}
function h()
{
delete f._wkmsg;
g.removeEventListener('message',k);
g.removeEventListener('error',j);
}
});
};
e.exports=b;
},function(e,d,c){
var b=c(9);
function a(j,k,h,g,f)
{
this._workers=k;
this._readers=j;
this._chunkSize=g;
this._file=h;
this._cacheThreshold=f;
this._caches={length:0};
}
a.prototype.fetch=function(g){
var j=this;
var f=j._caches[g];
if(f)
{
}
else{
console&&console.warn('no cache:%d',g);
f=j.addCache(g,j._chunkSize);
}
j._cleanup(g);
delete this._caches[g];
j._runPrefetch(f._fetch_end);
var h=Promise.all([f.hash('block_hash'),f.read('send_read'),f]);
return h;
};
a.prototype.addCache=function(j,g){
var h=j+g;
var f=this._caches[j]=new b(this._readers,this._workers,this._file.slice(j,h));
this._caches.length++;
f._fetch_start=j;
f._fetch_end=h;
return f;
};
a.prototype.rmCache=function(g){
var f=this._caches[g];
if(f&&f.cancel)
{
f.cancel();
delete this._caches[g];
}
};
a.prototype._runPrefetch=function(f){
var g=this;
if(g._caches.length>g._cacheThreshold)
{
return;
}
while(f<g._file.size&&g._caches[f])
{
f+=g._chunkSize;
}
if(f>=g._file.size)
{
return;
}
g._prefetch(f).then(function(){
g._runPrefetch(f+g._chunkSize);
});
};
a.prototype._prefetch=function(f){
return this.addCache(f,this._chunkSize).hash('pre_block_hash');
};
a.prototype._cleanup=function(f){
var g=this._caches;
var h=0;
for(var j in g)
{
if(j=='length')
continue;
if(j<f)
this.rmCache(j);
else h++;
}
g.length=h;
};
a.prototype.resetCache=function(){
this._caches={length:0};
};
e.exports=a;
},function(c,b){
function a(f,g,e)
{
this.__status__='init';
this._readers=f;
this._workers=g;
this.block=e;
this.tasks={};
}
a.prototype.readAsBuffer=function(f,e){
var g=this;
var h=g._readers.task(g.block,"toBuffer");
g.__status__='readAsBuffer';
g._readers.run(h,f);
return h.result();
};
a.prototype.read=function(f,e){
var g=this;
var h=g.tasks.read;
if(!h||e)
{
if(h&&e)
h.abort(true);
h=g.tasks.read=g._readers.task(g.block);
}
g.__status__='read';
g._readers.run(h,f);
return h.result();
};
a.prototype.free=function(){
delete this.tasks.read;
for(var e in this.tasks)
{
this._workers.queue.removeTask(this.tasks[e]);
delete this.tasks[e];
}
};
a.prototype.hash=function(f,e){
var g=this;
return this._readAndHash('hash',d,f,e);
};
a.prototype.fileMd5=function(f,e){
return this._hashRoute('file_md5',f,e);
};
a.prototype.fileSha1=function(f,e){
return this._hashRoute('file_sha1',f,e);
};
a.prototype._hashHandle=function(e,l,g,h,f){
var j=this;
var k=j.tasks[l];
if(!k||f)
{
if(k&&f)
{
k.abort(true);
delete j.tasks[l];
}
k=j.tasks[l]=j._workers.task(g(e));
}
j.__status__=l;
j._workers.run(k,h);
return k.result();
};
a.prototype._readAndHash=function(k,f,g,e){
var h=this;
var j=h.tasks[k];
if(!j||e)
{
if(j&&e)
{
j.abort(true);
delete h.tasks[k];
}
return h.read(g,false).then(function(l){
h._nResumeReadTime=+new Date();
return h._hashHandle(l,k,f,g,false);
});
}
else{
h._workers.run(j,g);
return j.result();
}
};
a.prototype._hashRoute=function(h,f,e){
var g=this;
if(e instanceof Promise)
{
return e.then(function(j){
return g._hashRoute(h,f,j);
});
}
else if(e)
{
return g._hashHandle(e,h,f,h,true);
}
else{
return g._readAndHash(h,f,h,true);
}
};
a.prototype.cancel=function(){
var f=this.tasks;
for(var e in f)
{
if(f[e]&&f[e].abort)
f[e].abort(true);
delete f[e];
}
};
function d(e)
{
return {data:e,type:'chunkMD5'};
}
c.exports=a;
},function(p,m){
var a=0xABCD9876;
var l={};
function n(H,A,z,x,G,y)
{
var F=o(H,A,y);
var I=F.ukeyAB;
var J=F.ukeyABLen;
var B=F.fkeyAB;
var C=F.fkeyABLen;
var v=e(z,G,x);
var w=v.byteLength+I.byteLength+B.byteLength+J.byteLength+C.byteLength+x.byteLength;
var D=f(w);
var s=new ArrayBuffer(w+D.byteLength);
var t=new Uint8Array(s);
var u=0;
[D,J,I,C,B,v,x].forEach(function(K){
t.set(new Uint8Array(K),u);
u+=K.byteLength;
});
return t;
}
function o(v,t,s)
{
if(!l[s])
{
var w=k(v);
var u=k(t);
l[s]={ukeyAB:w,ukeyABLen:d(w.byteLength),fkeyAB:u,fkeyABLen:d(u.byteLength)};
}
return l[s];
}
function r(s)
{
if(l[s])
{
delete l[s];
}
}
function q(w,t)
{
var v=new DataView(w);
if(v.getUint32(0,false)!=a)
throw new Error('Unknow response');
var s=v.getUint32(4,false);
if(s)
throw new Error('cgi,'+s);
if(v.getUint8(16)==0)
{
var u=g(v.getUint32(17,false),v.getUint32(21,false));
return {nextOffset:u};
}
else if(v.getUint8(16)==1)
{
r(t);
return {end:true};
}
else{
throw new Error('Unknow status');
}
}
function k(v)
{
var s=new ArrayBuffer(v.length/2);
var w=new Uint8Array(s);
for(var t=s.byteLength;t--;)
{
var u=parseInt(v.substr(t*2,2),16);
if(isNaN(u))
throw new Error('parse hex err');
w[t]=u;
}
return s;
}
function d(u)
{
var s=new ArrayBuffer(2);
var t=new DataView(s);
t.setUint16(0,u,false);
return s;
}
function f(s)
{
var t=f.headABView;
if(!t)
{
t=new DataView(new ArrayBuffer(16));
f.headABView=t;
h(t,[a,1007,0]);
}
t.setUint32(12,s,false);
return t.buffer;
}
function e(u,w,t)
{
var s=e.bodyABLenView;
if(!s)
{
s=new DataView(new ArrayBuffer(20));
e.bodyABLenView=s;
}
var v=j(u.size);
var x=j(w);
h(s,[v.low,x.low,t.byteLength,v.high,x.high]);
return s.buffer;
}
var b=0xffffffff;
var c=b+1;
function j(s)
{
return {low:s&b,high:s/c|0};
}
function g(t,s)
{
return t+(s||0)*c;
}
function h(u,s,t)
{
t||(t=0);
s.forEach(function(w,v){
u.setUint32(t+v*4,w,false);
});
}
m.genFTNRequestBody=n;
m.parseFTNRespone=q;
}]);
var QMTreeView=(function(b){
function c(e,f,d)
{
for(var g in f)
{
if(d||typeof (e[g])=="undefined"||e[g]==null)
{
e[g]=f[g];
}
}
return e;
}
function a(d)
{
var e=this;
e._moConfig=d;
e._init();
}
a.prototype={_init:function(){
var g=this,d=g._moConfig,e=d.oContainer,f=d.oDefaultItem;
g._moNodeData={};
g._moDoc=e.ownerDocument;
g._msGuid=1;
addEvent(e,"click",function(h){
stopPropagation(h);
preventDefault(h);
if(callBack.call(g,g._moConfig.onclick,[h]))
{
g._onclick(h);
}
});
g._initNodeData(f)._appendNode(e,f)._expandChildren(f);
callBack.call(g,g._moConfig.onload);
return g;
},_initNodeData:function(d){
var h=this,f=now(),g;
for(var e=d.length-1;e>=0;e--)
{
g=c(d[e],{nTime:f,sDisplay:"",sHashCode:h._msGuid++});
h._moNodeData[g.sHashCode]=g;
}
return h;
},_appendNode:function(d,e){
var k=QMTreeView._TEMPLATE._SKIN,h=[],j;
for(var f=0,g=e.length;f<g;f++)
{
var j=e[f];
h.push(k.replace(extend({sClass:'groupclose',sub:0},j)));
if(j.sType!="item")
{
h.push(k.replace(c({sClass:'groupsub',sDisplay:'none',sub:1},j)));
}
}
d.innerHTML=h.join("");
return this;
},_attribute:function(d,e,f){
if(typeof f=="undefined")
{
return d.getAttribute(e);
}
else{
d.setAttribute(e,f);
return d;
}
},_findNode:function(f,d,e){
var o=this,j=d||0,k=e||o._moConfig.oContainer,m=GelTags("div",k),n=[];
if(typeof f!="undefined")
{
for(var g=0,h=m.length;g<h;g++)
{
var l=m[g];
if((f==null^o._attribute(l,'key')==f)&&o._attribute(l,'sub')==j)
{
n.push(l);
}
}
}
return n;
},_findSibling:function(d){
var g=this,e=d.parentNode.firstChild,f=[];
while(e)
{
if(g._attribute(e,'key')!=null)
{
f.push(e);
}
e=e.nextSibling;
}
return f;
},_findSub:function(d){
var e=this;
while(d)
{
if(e._attribute(d,'sub')=='1')
{
return d;
}
d=d.nextSibling;
}
},_findNodeData:function(d){
var e=this;
return e._moNodeData[typeof d=="string"?d:e._attribute(d,'key')];
},findNode:function(f,d,e){
return this._findNode(f,d,e);
},findSub:function(d){
return this._findSub(d);
},addNodeData:function(d){
var h=this,g=h._moNodeData,e=d||[];
for(var j=0,k=e.length;j<k;j++)
{
var f=e[j];
!g[f.sHashCode]&&(g[f.sHashCode]=f);
}
},_onclick:function(d){
var g=getEventTarget(d),f=this;
while(!f._attribute(g,'key'))
{
g=g.parentNode;
}
if(f._attribute(g,'sub')=='0')
{
var e=f._findNodeData(g);
if(e.sType=='group'||e.sType=='moreItem')
{
e.nStatus&2?f._collapse(g):f._expand(g);
}
callBack.call(f,f._moConfig.onselect,[e]);
}
},_collapse:function(d){
var l=this,k=l._findNodeData(d);
if(k.sType=='item'||!(k.nStatus&2))
{
return;
}
var j=l._findSub(d),h=l._findNode(null,0,j),f,g;
for(var e=h.length-1;e>=0;e--)
{
_oChildNodeData=l._findNodeData(f=h[e]);
if(_oChildNodeData.sType=="moreItem")
{
g=l._findSub(f);
show(f,1);
show(g,0);
_oChildNodeData.nStatus&=13;
}
}
if(k.sType=="moreItem")
{
show(d,1);
}
else{
setClass(d,'groupclose');
}
show(j,0);
k.nStatus&=13;
},collapse:function(d){
for(var h=this,g=h._findNode(d),e=0,f=g.length;e<f;e++)
{
h._collapse(g[e]);
}
},_expandChildren:function(d){
var h=this;
for(var e=0,f=d.length;e<f;e++)
{
var g=d[e];
if(g.bExpanded)
{
h.expand(g.sHashCode);
}
}
return h;
},_expand:function(e,d){
var l=this,k=l._findNodeData(e);
if(k.sType=='item'||(k.nStatus&2)&&!d)
{
return;
}
var j=l._findSub(e),h=callBack.call(l,l._moConfig.ongetdata,[k]);
if(k.sType=="moreItem")
{
show(e,0);
}
else{
if(l._moConfig.bUnique&&k.sType=="group")
{
var m=l._findSibling(e);
for(var f=0,g=m.length;f<g;f++)
{
if(m[f]!=e)
{
l._collapse(m[f]);
}
}
}
setClass(e,'groupopen');
}
if(h!=null)
{
l._initNodeData(h)._appendNode(j,h)._expandChildren(h);
}
show(j,1);
k.nStatus|=3;
},expand:function(e,d){
for(var j=this,h=j._findNode(e),f=0,g=h.length;f<g;f++)
{
j._expand(h[f],d);
}
},toggle:function(d){
var f=this,e=f._findNodeData(d);
f[e.nStatus&2?'collapse':'expand'](e.sHashCode);
return f;
},showItem:function(e,d){
for(var j=this,h=j._findNode(e),f=0,g=h.length;f<g;f++)
{
show(h[f],d);
}
}};
a._TEMPLATE={_SKIN:T(['<div class="$sClass$" style="display:$sDisplay$" key="$sHashCode$" sub="$sub$">$sItemValue$</div>'])};
return a;
})();
var gnQmToolLoad=new Date().getTime()-_gnQmToolStart;
function qmtool_js()
{
}
