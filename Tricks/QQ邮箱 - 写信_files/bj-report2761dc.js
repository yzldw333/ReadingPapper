var BJ_REPORT=(function(m){
if(m.BJ_REPORT)
{
return m.BJ_REPORT;
}
var b=[];
var n=m.onerror;
m.onerror=function(s,u,r,p,q){
var t=s;
if(q&&q.stack)
{
t=h(q);
}
o.push({msg:t,target:u,rowNum:r,colNum:p});
i();
n&&n.apply(m,arguments);
};
var a={id:0,uin:0,url:"",combo:1,ext:{},level:4,ignore:[],random:1,delay:100,submit:null};
var f=function(p,q){
return Object.prototype.toString.call(p)==="[object "+(q||"Object")+"]";
};
var e=function(p){
var q=typeof p;
return q==='object'&&!!p;
};
var g=function(q){
try{
if(q.stack)
{
var t=q.stack.match('http://[^\n]+');
t=t?t[0]:"";
var r=t.match(':([0-9]+):([0-9]+)');
if(!r)
{
r=[0,0,0];
}
var s=h(q);
return {msg:s,rowNum:r[1],colNum:r[2],target:t.replace(r[0],'')};
}
else{
return q;
}
}
catch(p)
{
return q;
}
};
var h=function(p){
var r=p.stack.replace(/\n/gi,'').split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,"");
var q=p.toString();
if(r.indexOf(q)<0)
{
r=q+"@"+r;
}
return r;
};
var c=function(q,r){
var t=[];
var u=[];
var v=[];
if(e(q))
{
q.level=q.level||a.level;
for(var s in q)
{
var w=q[s]||"";
if(w)
{
if(e(w))
{
try{
w=JSON.stringify(w);
}
catch(p)
{
w="[BJ_REPORT detect value stringify error] "+p.toString();
}
}
v.push(s+":"+w);
t.push(s+"="+encodeURIComponent(w));
u.push(s+"["+r+"]="+encodeURIComponent(w));
}
}
}
return [u.join("&"),v.join(","),t.join("&")];
};
var d=[];
var j=function(q){
if(a.submit)
{
a.submit(q);
}
else{
var p=new Image();
d.push(p);
p.src=q;
}
};
var l=[];
var k=0;
var i=function(v){
if(!a.report)
{
return;
}
while(b.length)
{
var u=false;
var r=b.shift();
var s=c(r,l.length);
for(var t=0,w=a.ignore.length;t<w;t++)
{
var x=a.ignore[t];
if((f(x,"RegExp")&&x.test(s[1]))||(f(x,"Function")&&x(r,s[1])))
{
u=true;
break;
}
}
if(!u)
{
if(a.combo)
{
l.push(s[0]);
}
else{
j(a.report+s[2]+"&_t="+(+new Date()));
}
a.onReport&&(a.onReport(a.id,r));
}
}
var q=l.length;
if(q)
{
var p=function(){
clearTimeout(k);
j(a.report+l.join("&")+"&count="+q+"&_t="+(+new Date()));
k=0;
l=[];
};
if(v)
{
p();
}
else if(!k)
{
k=setTimeout(p,a.delay);
}
}
};
var o={push:function(p){
if(Math.random()>=a.random)
{
return o;
}
b.push(e(p)?g(p):{msg:p});
i();
return o;
},report:function(p){
p&&o.push(p);
i(true);
return o;
},init:function(p){
if(e(p))
{
for(var r in p)
{
a[r]=p[r];
}
}
var q=parseInt(a.id,10);
if(q)
{
a.report=(a.url||"http://badjs2.qq.com/badjs")+"?id="+q+"&uin="+parseInt(a.uin||(document.cookie.match(/\buin=\D+(\d+)/)||[])[1],10)+"&from="+encodeURIComponent(location.href)+"&ext="+JSON.stringify(a.ext)+"&";
}
return o;
},__onerror__:m.onerror};
return o;
}(window));
if(typeof exports!=='undefined')
{
if(typeof module!=='undefined'&&module.exports)
{
exports=module.exports=BJ_REPORT;
}
exports.BJ_REPORT=BJ_REPORT;
}
;(function(j){
if(!j.BJ_REPORT)
{
return;
}
var c=function(l){
j.BJ_REPORT.report(l);
};
var k=j.BJ_REPORT.tryJs=function g(l){
l&&(c=l);
return k;
};
var b=function(n,m){
var l;
for(l in m)
{
n[l]=m[l];
}
};
var a=function(l){
return typeof l==='function';
};
var d=function(m,l){
return function(){
try{
return m.apply(this,l||arguments);
}
catch(n)
{
c(n);
if(n.stack&&console&&console.error)
{
console.error("[BJ-REPORT]",n.stack);
}
var o=j.onerror;
j.onerror=function(){
};
setTimeout(function(){
j.onerror=o;
},50);
throw n;
}
};
};
var e=function(l){
return function(){
var m,n=[];
for(var o=0,p=arguments.length;o<p;o++)
{
m=arguments[o];
a(m)&&(m=d(m));
n.push(m);
}
return l.apply(this,n);
};
};
var f=function(l){
return function(n,p){
if(typeof n==='string')
{
try{
n=new Function(n);
}
catch(o)
{
throw o;
}
}
var m=[].slice.call(arguments,2);
n=d(n,m.length&&m);
return l(n,p);
};
};
var h=function(l,m){
return function(){
var n,r,o=[];
for(var p=0,q=arguments.length;p<q;p++)
{
n=arguments[p];
a(n)&&(r=d(n))&&(n.tryWrap=r)&&(n=r);
o.push(n);
}
return l.apply(m||this,o);
};
};
var i=function(m){
var l,n;
for(l in m)
{
n=m[l];
if(a(n))
m[l]=d(n);
}
return m;
};
k.spyJquery=function(){
var l=j.$;
if(!l||!l.event)
{
return k;
}
var m=l.event.add,n=l.ajax,o=l.event.remove;
if(m)
{
l.event.add=h(m);
l.event.remove=function(){
var p,q=[];
for(var r=0,s=arguments.length;r<s;r++)
{
p=arguments[r];
a(p)&&(p=p.tryWrap);
q.push(p);
}
return o.apply(this,q);
};
}
if(n)
{
l.ajax=function(q,p){
if(!p)
{
p=q;
q=undefined;
}
i(p);
if(q)
{
return n.call(l,q,p);
}
return n.call(l,p);
};
}
return k;
};
k.spyModules=function(){
var m=j.require,l=j.define;
if(l&&l.amd&&m)
{
j.require=e(m);
b(j.require,m);
j.define=e(l);
b(j.define,l);
}
if(j.seajs&&l)
{
j.define=function(){
var n,o=[];
for(var p=0,q=arguments.length;p<q;p++)
{
n=arguments[p];
if(a(n))
{
n=d(n);
n.toString=(function(r){
return function(){
return r.toString();
};
}(arguments[p]));
}
o.push(n);
}
return l.apply(this,o);
};
b(j.define,l);
}
return k;
};
k.spySystem=function(){
j.setTimeout=f(j.setTimeout);
j.setInterval=f(j.setInterval);
return k;
};
k.spyCustom=function(l){
if(a(l))
{
return d(l);
}
else{
return i(l);
}
};
k.spyAll=function(){
k.spyJquery().spyModules().spySystem();
return k;
};
}(window));
