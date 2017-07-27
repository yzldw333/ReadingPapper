var QMTip=window.QMTip||{_oTipList:{}};
QMTip.close=function(d,c,a,b){
var e=QMTip._oTipList[c],f=getTop();
if(e)
{
e._status="showed";
a&&QMTip._investigate(c,d);
b?f.removeSelf(f.S(e.domid+"rlt",e.win)):QMTip._animation(e,0);
f.callBack(e.onclose,arguments);
}
};
QMTip.markunshow=function(a){
var b=getTop();
b.waitFor(function(){
return b.S(a.click_id||a.domid);
},function(c){
if(c)
{
b.addEvent(b.S(a.click_id||a.domid),"click",function(){
QMTip._investigate(a.tipid,"mark","notipsclick");
});
}
});
};
QMTip._investigate=function(a,c,b){
var d=getTop();
if(a<10000)
{
d.ossLog(c=="mark"?"delay":"realtime","all",d.TE("stat=tips&type=$type$&tipid=$tipid$$@$if($loc$)$@$&loc=$loc$,,,$tipid$$@$endif$@$").replace({tipid:a,type:c,loc:b}));
}
};
QMTip.getStatus=function(a){
var b=QMTip._oTipList[a];
if(!b)
{
return;
}
return b._status;
};
QMTip.show2=function(a){
if(!QMTip._show(a))
{
return false;
}
var b=getTop(),e=a.tipid,d=a.domid,c=a.win;
b.addEvent(b.S(d+"rlt",a.win),"mousedown",function(f){
a.onmousedown&&a.onmousedown(f);
});
b.addEvent(b.S(d+"closefork",c),"click",function(f){
QMTip.close("close",e,1);
b.preventDefault(f);
});
b.addEvent(b.S(d+"closetemporary",c),"click",function(f){
QMTip.close("close",e,1);
b.preventDefault(f);
});
b.addEvent(b.S(d+"closeforever",c),"click",function(f){
QMTip.close("know",e,1);
b.preventDefault(f);
});
};
QMTip._show=function(a){
if(!a)
{
return false;
}
var g=a.tipid,f=a.domid,e=a.win,d=getTop(),b=d.S(f,e);
if(!f||!a.msg)
{
d.LogKV('qmtip|err|conf');
d.ossLogCustom("delay","all",'errTips',a);
return false;
}
if((typeof g=="undefined"&&gbIsOpera)||(QMTip._oTipList[g]&&QMTip._oTipList[g]._status=="showed"&&!a.bForceShow))
{
return false;
}
a.notlog=a.notlog||0;
a.type=a.type||1;
a.showicon=a.showicon||"";
if(typeof a.closetemporary=="undefined")
{
a.closetemporary="\u6211\u77E5\u9053\u4E86";
}
if(QMTip._oTipList[g]&&!a._status)
{
if(QMTip._oTipList[g].domid!=f)
{
d.LogKV('qmtip|override|new_domid');
a._logOldDomid=QMTip._oTipList[g].domid;
d.ossLogCustom("delay","all",'overrideTips',a);
}
else{
d.LogKV('qmtip|override');
}
}
QMTip._oTipList[g]=a;
a._modifyPosition=QMTip._modifyPosition;
if(!b)
{
if(!a._status)
{
a._status="unshow";
d.LogKV('qmtip|wait_dom');
QMTip._waitFor();
}
return false;
}
d.addEvent(e,"resize",QMTip._resizeHandle,1);
d.addEvent(e,"resize",QMTip._resizeHandle);
if(d.S(f+"rlt",e))
{
return false;
}
if(!d.insertHTML(e==getTop()?Scale.getContainer():e.document.body,"afterBegin",this._TEMPLATE._PANEL.replace(a)))
{
d.doPageError("insertHTML false in qmtip","","");
delete QMTip._oTipList[g];
return false;
}
b.parentNode.insertBefore(d.S(f+"rlt",e),b);
a._status="showing";
this._modifyPosition(a);
this._animation(a,1);
var c=d.S(f+"rlt",e);
d.addEvent(c,"click",d.stopPropagation);
d.addEvent(c,"mousedown",d.stopPropagation);
return true;
};
QMTip.show=function(a){
if(getTop().getLocale()!="zh_CN"||!QMTip._show(a))
{
return false;
}
var e=getTop(),h=a.tipid,g=a.domid,b=a.bClickClose||true,f=a.win,d=e.S(g,f),c=function(){
QMTip.close("close",h,0,1);
};
if(a.auto_hide==1)
{
e.addEvent(d,"click",c);
}
e.addEvent(e.S(g+"closefork",f),"click",function(i){
QMTip.close("close",h,1);
e.preventDefault(i);
});
e.addEvent(e.S(g+"closetemporary",f),"click",function(i){
QMTip.close("close",h,1);
e.preventDefault(i);
});
e.addEvent(e.S(g+"closeforever",f),"click",function(i){
QMTip.close("know",h,1);
e.preventDefault(i);
});
e.E(e.GelTags("a",f.document),function(i){
if(i.getAttribute("autohide")=="1")
{
e.addEvent(i,"click",c);
}
});
a.click_id&&e.addEvent(e.S(a.click_id,f),"click",function(i){
b&&c();
QMTip._investigate(h,"mark","clicktipslink");
});
QMTip._investigate(h,"mark","tipshow");
return true;
};
QMTip._animation=function(b,a){
try{
var f=getTop(),d=f.S(b.domid+"tipcontainer",b.win||b.doc),c=new (f.qmAnimation)({from:1,to:100});
c.play({speed:"slow",onaction:function(h,e){
f.setOpacity(d,Math.abs((a?0:-1)+e));
},oncomplete:function(h,e){
if(a)
{
f.setOpacity(d,1);
}
else{
f.removeSelf(f.S(b.domid+"rlt",b.win));
}
}});
}
catch(g)
{
f.removeSelf(f.S(b.domid+"rlt"));
}
};
QMTip._waitFor=function(){
var b=arguments.callee,c=QMTip._oTipList,a=0;
b._count=(b._count||0)+1;
if(b._mnTimeout)
{
clearTimeout(b._mnTimeout);
}
for(var d in c)
{
if(c[d]._status=="unshow")
{
++a;
QMTip.show(c[d]);
}
}
if(a&&b._count<300)
{
b._mnTimeout=setTimeout(b,1000);
}
};
QMTip._modifyPosition=function(a){
var w=getTop(),y=a.win,z=a.domid,u=arguments.callee,o=w.S(z,y,y),m=w.S(z+"rlt",y),s=w.S(z+"newtips",y),v=w.S(z+"tipcontainer",y),l=w.bodyScroll(y,'clientWidth'),k=w.bodyScroll(y,'clientHeight');
if(!(o&&m))
{
return;
}
a.height_offset=a.height_offset||0;
a.width_offset=a.width_offset||0;
var p=w.calcPos(o),n=w.calcPos(m),h=v.offsetWidth,g=v.offsetHeight;
var x=w.S(z+"up",y),q=w.S(z+"down",y),r=w.S(z+"left",y),t=w.S(z+"right",y);
if(!a.arrow_direction)
{
a.arrow_direction=(p[0]-g-a.height_offset)<10?"down":"up";
}
w.show(x,0,y);
w.show(q,0,y);
w.show(r,0,y);
w.show(t,0,y);
if(a.arrow_direction!="none")
{
switch(a.arrow_direction)
{case 'left':
w.show(t,1,y);
break;
case 'right':
w.show(r,1,y);
break;
case 'up':
w.show(q,1,y);
break;
case 'down':
default:
w.show(x,1,y);
break;
}
}
var b;
if(a.arrow_direction=="left"||a.arrow_direction=="right")
{
var e=a.width_offset;
if(a.arrow_direction=="right")
{
e+=p[1];
}
else{
e+=p[3]-h;
}
var d=e-n[1]+(a.arrow_direction=="left"?-8:8);
if(a.left!=d)
{
a.left=d;
s.style.left=d+"px";
}
var j=p[0]+(a.tip_offset||0),c=j+g;
if(typeof a.tip_offset=="undefined")
{
if(c+10>k)
{
j-=c+10-k;
}
if(j<10)
{
j=10;
}
}
var i=j-n[0]-6;
if(a.top!=i)
{
a.top=i;
s.style.top=i+"px";
}
b=(p[0]-n[0])-a.top;
b+=6;
}
else{
var j=a.height_offset;
if(a.arrow_direction=="down")
{
j+=p[2];
}
else{
j+=p[0]-g;
}
var i=j-n[0];
if(a.top!=i)
{
a.top=i;
s.style.top=i+"px";
}
var e=p[3]+(a.tip_offset||0),f=e+h;
if(typeof a.tip_offset=="undefined")
{
if(f+10>l)
{
e-=f+10-l;
}
if(e<10)
{
e=10;
}
}
var d=e-n[3];
if(a.left!=d)
{
a.left=d;
s.style.left=d+"px";
}
b=(p[3]-n[3])-a.left;
}
b+=a.arrow_offset||0;
x&&(x.style.marginLeft=b+"px");
q&&(q.style.marginLeft=b+"px");
r&&(r.style.marginTop=b+"px");
t&&(t.style.marginTop=b+"px");
};
QMTip._resizeHandle=function(){
var a=arguments.callee;
if(a._mnTimeout)
{
clearTimeout(a._mnTimeout);
}
a._mnTimeout=setTimeout(function(){
var b=QMTip._oTipList;
for(var c in b)
{
if(b[c]._status=="showing")
{
b[c]._modifyPosition(b[c]);
}
}
a._mnTimeout=null;
},200);
};
QMTip.showMailList=function(a,d,e,b,c){
var p="maillist",q=p+"newtips",o=getTop();
if(!a)
{
o.removeSelf(o.S(q,d));
return;
}
var k=d.body,l={domid:p,doc:d,type:2,msg:'<div class="addrtitle">\u5907\u6CE8\u4FE1\u606F\uFF1A</div>'+e,arrowOffset:10,icon:"tipsico_note"},m=o.S(q,d);
o.removeSelf(m);
o.insertHTML(k,"beforeEnd",QMTip._TEMPLATE._PANEL.replace(l));
var f=o.bodyScroll(d,'scrollLeft')+b-15,g=c,j=o.bodyScroll(d,'clientWidth'),m=o.S(q,d),n=o.S(p+"tipcontainer",d),i=n.offsetWidth,h=n.offsetHeight;
if(f+i>j)
{
f-=f+i-j+5;
}
if(g-h>10)
{
o.show(p+"up",0,d);
g-=h+13;
}
else{
o.show(p+"down",0,d);
g+=5;
}
g+=o.bodyScroll(d,'scrollTop');
m.style.left=f+"px";
m.style.top=g+"px";
QMTip._animation(l,1);
};
QMTip._TEMPLATE={_PANEL:getTop().TE(['$@$if($type$==1||$type$==4)$@$<span id="$domid$rlt" class="tipcontainer_wrap" style="position:relative;cursor:default;z-index:1000;background:white;line-height:0;height:0;">$@$endif$@$','<div unselectable="on" id="$domid$newtips" class="newtips" style="top:$@$eval $top$||-999$@$px;left:$@$eval $left$||-999$@$px;">','<div unselectable="on" id="$domid$tipcontainer" class="tipcontainer">','$@$if($type$==1||$type$==2)$@$<span id="$domid$up" class="arrowup" style="margin-left:$arrowOffset$px;"></span>\n$@$endif$@$','$@$if($type$==1||$type$==2)$@$<span id="$domid$left" class="arrowleft" style="margin-top:$arrowOffset$px;"></span>$@$endif$@$','$@$if($type$==1||$type$==2)$@$<span id="$domid$right" class="arrowright" style="margin-top:$arrowOffset$px;"></span>$@$endif$@$','<div unselectable="on" class="container">','<div unselectable="on" class="contentcontainer">','<div unselectable="on" class="content" style="position:relative;zoom:1;">','<div unselectable="on" class="tipsicon $showicon$">','<span unselectable="on" class="tipsico $@$if($icon$)$@$$icon$$@$else$@$tipsico_normal$@$endif$@$" ></span>','</div>','$@$if($close_fork$)$@$<a class="btnClose" id="$domid$closefork" href="javascript:;"></a>$@$endif$@$','<div class="tipstxt">','$msg$','</div>','<div unselectable="on" class="tipsrightpanel" style="font-size:12px;color:#000;font-weight:normal;">','$@$if($type$==1||$type$==3)$@$','<div  unselectable="on" class="opertbar">','$operation$','<a style="text-decoration:none;color:#000;cursor:default">&nbsp;&nbsp;</a>','$@$if($closeforever$)$@$','<a class="" id="$domid$closeforever" title="" href="javascript:;" >$closeforever$</a>','$@$else if($closetemporary$)$@$','<a class="" style="" id="$domid$closetemporary" title="" href="javascript:;" >$closetemporary$</a>','$@$endif$@$','</div>','$@$endif$@$','</div>','<div unselectable="on" class="clr"></div>','</div>','</div>','</div>','$@$if($type$==1||$type$==2)$@$<span id="$domid$down" class="arrowdown"  style="margin-left:$arrowOffset$px;"></span>$@$endif$@$','</div>','<div unselectable="on" class="tipbackground"></div>','<div unselectable="on" class="oneheight" ></div>','</div>','$@$if($type$==1||$type$==4)$@$</span>$@$endif$@$'])};
