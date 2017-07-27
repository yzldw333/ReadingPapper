window.__LQ_REPORT_URL__='//'+window.location.host+"/xly_report/report";
window.__LQ_REPORT_NAME__="xly_report";
;(function(){
var g=(function(){
var w=[];
function s(B,z)
{
B='q='+encodeURIComponent(B);
var A=typeof z;
var x,y=false,C;
if('function'==A)
{
x=z;
}
else if('boolean'==A)
{
y=A===false;
}
else if(!isNaN(z))
{
C=z;
}
else if(z&&'object'==A)
{
x=z.onload;
y=z.delay===false;
C=z.sample===true?0.1:z.sample;
}
if(C&&Math.random()>Number(C))
{
return;
}
w.push(B);
if(y||x)
{
setTimeout(function(){
u(x);
});
}
else if(w.length==1)
{
setTimeout(u,3000);
}
}
function u(x)
{
if(w.length)
{
t(w.join('&'),x);
w=[];
}
}
var p;
function t(y,x)
{
var z=p;
p=null;
if(!z)
{
o.newXhr(function(A){
l(A,y);
A.onreadystatechange=function(){
if(A.readyState==2)
{
if(A.abort)
{
A.abort();
if(window.XMLHttpRequest)
p=A;
}
x&&x();
}
};
});
}
else{
l(z,y);
}
}
function l(y,x)
{
y.open('POST',o.report_url,true);
y.setRequestHeader('Content-type','application/x-www-form-urlencoded');
y.send(x+'&r='+Math.random());
}
function r(x)
{
x(window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP"));
}
function v(z,x,y)
{
if(typeof x=='object')
x=JSON.stringify(x);
s('st:'+z+'='+x,y);
}
function q(x,y)
{
o.stat('c_log',x,y);
}
function m(x)
{
console.warn&&console.warn(x);
}
var o=s;
o.newXhr=r;
o.stat=v;
o.log=q;
o.warn_=m;
try{
o.report_url=window.__LQ_REPORT_URL__||top.__LQ_REPORT_URL__;
}
catch(n)
{
}
o.report_url||(o.report_url='/report');
return o;
})();
function d(l)
{
return function(m,n){
g(l+'='+(''+m).toLowerCase(),n);
};
}
g.k=d('k');
g.u=d('u');
g.ku=d('ku');
var b=Number('300000')||300000;
function k(l,n,m)
{
if(n>b)
g.stat('speed_big_val',n+':speed',m);
g.stat('speed','k='+l+'&v='+n,m);
}
function f(l,n,m)
{
if(window.__PAGE_START_TIME__)
{
k(l,+(n||new Date())-window.__PAGE_START_TIME__,m);
}
else{
g.warn_(new Error('no __PAGE_START_TIME__'));
}
}
function c(m,n)
{
var l=new a(m,n);
return function o(){
l.handle.apply(l,arguments);
};
}
function a(l,m)
{
this.reportOptions=m;
this.supSubkey=typeof l=='object';
this.splitModule=true;
this.listener=null;
this.aliasTiming={};
this.aliasData={};
this.keys=l;
if(this.supSubkey)
{
var n=this._parseArrayValues(this.keys);
if(n)
{
this.keys=n;
}
else{
this.aliasTiming[':start']=l[':start'];
if(l[':type'])
splitModule=l[':type']!='timline';
this.listener=this._parseListener(l);
if(l[':values'])
this._parseArrayValues(l[':values'],l);
}
}
if(!this.aliasTiming[':start'])
this.aliasTiming[':start']=+(new Date());
this.aliasTiming[':last']=this.aliasTiming[':start'];
}
a.prototype={handle:function(m,r,o){
var q,l=':last';
var n=r||+(new Date());
if(m&&isNaN(m)&&this.supSubkey)
{
l=m;
m=this.keys[l];
if(this.aliasTiming[l])
{
return g.warn_(new Error('report twice:'+(m||l)));
}
if(this.splitModule)
{
q=this._getConfigStartTime(l);
if(q instanceof Error)
{
return g.warn_(q);
}
}
}
if(!m)
{
if(!this.supSubkey&&this.keys)
m=this.keys;
else {
return g.warn_(new Error('no key in assertTime'));
}
}
if(!q)
{
if(this.splitModule)
{
q=this.aliasTiming[':last'];
g.warn_('It is dangerous to use last date:'+m);
}
else{
q=this.aliasTiming[':start'];
}
}
this.aliasTiming[':last']=this.aliasTiming[l]=n;
var p=this.aliasData[l]=n-q;
this._fireListener(l);
if(this.keys)
k(m,p,arguments.length>1?o:this.reportOptions);
},_getConfigStartTime:function(l){
var o=this.keys[l+':max'];
if(o)
{
var m=this._fiterTiming(this.aliasTiming,o);
if(!m.length)
{
return new Error('has no max values:'+(this.keys[l]||l));
}
if(m.length!=o.length)
g.warn_('values not all ready in maxlist:'+(this.keys[l]||l));
return Math.max.apply(Math,m);
}
o=this.keys[l+':min'];
if(o)
{
var n=this._fiterTiming(this.aliasTiming,o);
if(!n.length)
{
return new Error('has no min values:'+(this.keys[l]||l));
}
return Math.min.apply(Math,n);
}
},_fireListener:function(l){
var p=this.listener&&this.listener[l];
if(p)
{
for(var n in p)
{
var m=p[n];
var o=this._fiterTiming(this.aliasData,m.waits);
if(m.type=='min'||o.length==m.waits.length)
{
delete this.listener[l];
k(n,Math[m.type].apply(Math,o),this.reportOptions);
}
}
}
},_parseArrayValues:function(l,n){
if(this._isArray(l)&&typeof l[0]=='number')
{
n||(n={});
for(var m=l.length,p=l[0];--m;)
{
n[l[m]]=p+m-1;
if(m>1)
{
var o=n[l[m]+':min']||(n[l[m]+':min']=[]);
o.push(l[m-1]);
}
}
return n;
}
},_parseListener:function(p){
var q={};
var l=false;
for(var o in p)
{
if(o.indexOf(':')>0)
{
var t=o.split(':');
var m=t[0];
var u=t[1]||'max';
var v=p[o];
if(!m||isNaN(m)||!this._isArray(v)||!v.length||(u!='min'&&u!='max')||(u=='min'&&p[m+':max']))
continue;
l=true;
var r={type:u,waits:v};
for(var n=v.length;n--;)
{
var s=q[v[n]]||(q[v[n]]={});
s[m]=r;
}
}
}
if(l)
{
return q;
}
},_isArray:function(l){
return l.splice===Array.prototype.splice;
},_fiterTiming:function(o,m){
var n=[];
if(m)
{
for(var l=m.length;l--;)
{
var p=o[m[l]];
if(p)
n.push(p);
}
}
return n;
}};
g.speed=k;
g.assertTime=c;
g.pageLine=f;
;(function(){
function o()
{
return false;
}
var u='navigationStart|unloadEventStart|unloadEventEnd|redirectStart|redirectEnd|fetchStart|domainLookupStart|domainLookupEnd|connectStart|connectEnd|requestStart|responseStart|responseEnd|domLoading|domInteractive|domContentLoadedEventStart|domContentLoadedEventEnd|domComplete|loadEventStart|loadEventEnd'.split('|');
var l=Number('300000')||300000;
var n=new Date()-3600000;
function p(y,E,z)
{
if(!y)
{
return;
}
if(!z&&((E&&E.window!==E)||E===false))
{
z=E;
E=null;
}
if(!E)
E=window;
var x=E.document;
var A=false;
var B=(E.webkitPerformance||E.performance).timing;
function w()
{
if(A)
{
return;
}
A=true;
E.setTimeout(function(){
var G=B[u[0]];
if(G<n)
{
console&&console.warn('LogPageSpeed navigationStart error: %d date: %s',G,new Date(G));
g.v&&g.v('log_page_speed|err|navigation_start');
return;
}
var F=m(G,'timing',B);
if(!F.length)
{
return;
}
g.stat('page_speed','app='+y+'&'+F.join('&'),z);
});
}
if(B.loadEventEnd)
{
w();
}
else{
if(x.addEventListener)
{
x.addEventListener('load',function(){
v();
w();
},false);
}
function v()
{
C&&E.clearInterval(C);
D&&E.clearTimeout(D);
C=D=null;
}
var C=E.setInterval(function(){
if(B.loadEventEnd)
{
v();
w();
}
},500);
var D=E.setTimeout(function(){
v();
w();
},5000);
}
}
var r='startTime|redirectStart|redirectEnd|fetchStart|domainLookupStart|domainLookupEnd|connectStart|secureConnectionStart|connectEnd|requestStart|responseStart|responseEnd'.split('|');
function s(y,A,E,z)
{
if(!z&&((E&&E.window!==E)||E===false))
{
z=E;
E=null;
}
if(typeof A!='string'&&A)
{
var v=A.ownerDocument;
var B=v&&(v.parentWindow||v.defaultView);
if(B)
E=B;
A=A.src;
}
if(!E)
E=window;
if(!y||!A||!E)
{
return;
}
var w=(E.webkitPerformance||E.performance).getEntriesByName(A);
if(!w||!w.length)
{
return;
}
for(var x=w.length;x--;)
{
var C=w[x][r[0]];
if(C>1e5)
continue;
var D=m(C,'res',w[x]);
if(!D.length)
continue;
g.stat('res_speed','app='+y+'&'+D.join('&'),z);
}
}
var t={res:r,timing:u};
function m(B,z,v)
{
var A=[];
var y=t[z];
if(!y)
{
return;
}
for(var w=1,x=y.length;w<x;w++)
{
var C=Math.round((v[y[w]]||0)-B);
if(C>=0)
{
A.push(w+'='+C);
if(C>l)
g.stat('speed_big_val',C+':'+z,options);
}
}
return A;
}
var q=window.webkitPerformance||window.performance;
g.pageSpeed=q&&q.timing?p:o;
g.resSpeed=q&&q.getEntriesByName?s:o;
})();
function j(p,q,n)
{
if(!p.__reportData__||!p.__reportData__[q]||!n)
{
return;
}
for(var m=p.__reportData__[q],o=m.length;o--;)
{
var l=m[o];
if(l.runType=='call')
{
n(l);
}
else{
n.apply(null,l);
}
}
delete p.__reportData__[q];
}
g.globalHandlers=[{key:'log',handler:g.log},{key:'stat',handler:g.stat},{key:'k',handler:g.k},{key:'u',handler:g.u},{key:'ku',handler:g.ku},{key:'speed',handler:g.speed},{key:'pageLine',handler:g.pageLine},{key:'pageSpeed',handler:g.pageSpeed},{key:'resSpeed',handler:g.resSpeed},{key:'assertTime',handler:h}];
function h(l)
{
var o=l.args;
var p=o[0];
if(!p)
p={};
else if(p.splice===Array.prototype.splice)
p={values:p};
p[':start']||(p[':start']=l.start);
o[0]=p;
var t=g.assertTime.apply(null,o);
l.handler=t;
for(var n=0,m=l.logs,q=m.length;n<q;n++)
{
var s=m[n];
var r=s.args;
r[1]||(r[1]=s.time);
t.apply(null,r);
}
l.logs=[];
}
function i(l)
{
setTimeout(function(){
var m=g.globalHandlers;
for(var n=m.length;n--;)
{
j(l||window,m[n].key,m[n].handler);
}
});
}
g.saveAllGlobalData=i;
g.saveGlobalData=j;
i();
function e()
{
var m;
try{
m=window.__LQ_REPORT_NAME__||top.__LQ_REPORT_NAME__;
}
catch(l)
{
}
return m||'LQReport';
}
if(typeof exports=="object"&&typeof module=="object"&&module.exports===exports)
{
module.exports=g;
}
else{
this[e()]=g;
}
}).call(this);
