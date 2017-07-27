var gsAgent=navigator.userAgent.toLowerCase(),gsAppVer=navigator.appVersion.toLowerCase(),gsAppName=navigator.appName.toLowerCase(),gbIsOpera=gsAgent.indexOf("opera")>-1,gbIsWebKit=gsAgent.indexOf("applewebkit")>-1,gbIsKHTML=gsAgent.indexOf("khtml")>-1||gsAgent.indexOf("konqueror")>-1||gbIsWebKit,gbIsIE=(gsAgent.indexOf("compatible")>-1&&!gbIsOpera)||gsAgent.indexOf("msie")>-1,gbIsTT=gbIsIE?(gsAppVer.indexOf("tencenttraveler")!=-1?1:0):0,gbIsQBWebKit=gbIsWebKit?(gsAppVer.indexOf("qqbrowser")!=-1?1:0):0,gbIsQPlus=gsAgent.indexOf("qplus")>-1,gbIsSogou=gsAgent.indexOf("se 2.x metasr 1.0")>-1,gbIsChrome=gbIsWebKit&&!gbIsQBWebKit&&gsAgent.indexOf("chrome")>-1&&!gbIsSogou&&!gbIsQPlus,gbIsSafari=gbIsWebKit&&!gbIsChrome&&!gbIsSogou&&!gbIsQBWebKit,gbIsQBIE=gbIsIE&&gsAppVer.indexOf("qqbrowser")!=-1,gbIsFF=gsAgent.indexOf("gecko")>-1&&!gbIsKHTML,gbIsTrident=gsAppVer.indexOf("trident")!=-1,gbIsEdge=gsAgent.indexOf('edge')!=-1,gbIsNS=!gbIsIE&&!gbIsOpera&&!gbIsKHTML&&(gsAgent.indexOf("mozilla")==0)&&(gsAppName=="netscape"),gbIsAgentErr=!(gbIsOpera||gbIsKHTML||gbIsSafari||gbIsIE||gbIsTT||gbIsFF||gbIsNS),gbIsWin=gsAgent.indexOf("windows")>-1||gsAgent.indexOf("win32")>-1,gbIsVista=gbIsWin&&(gsAgent.indexOf("nt 6.0")>-1||gsAgent.indexOf("windows vista")>-1),gbIsWin7=gbIsWin&&gsAgent.indexOf("nt 6.1")>-1,gbIsMac=gsAgent.indexOf("macintosh")>-1||gsAgent.indexOf("mac os x")>-1,gsMacVer=/mac os x (\d+)(\.|_)(\d+)/.test(gsAgent)&&parseFloat(RegExp.$1+"."+RegExp.$3),gbIsLinux=gsAgent.indexOf("linux")>-1,gbIsAir=gsAgent.indexOf("adobeair")>-1,gnIEVer=/MSIE (\d+.\d+);/i.test(gsAgent)&&parseFloat(RegExp["$1"]),gnIEDocTypeVer=0,gsFFVer=/firefox\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"],gsSafariVer=""+(/version\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),gsChromeVer=""+(/chrome\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),gsQBVer=""+(/qqbrowser\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),_gsForEBuiltTag="_For_E_Built";
(function(){
if(gbIsTrident)
{
gbIsFF=false;
gbIsIE=true;
}
if(gbIsEdge)
{
gbIsChrome=true;
gbIsIE=false;
}
if(gbIsIE)
{
var b;
if(document.documentMode)
{
b=document.documentMode;
var a=/Trident\/(\d+.\d+);/i.test(gsAgent);
if(a)
{
switch(RegExp["$1"])
{case "4.0":
gnIEVer=8;
break;
case "5.0":
gnIEVer=9;
break;
case "6.0":
gnIEVer=10;
break;
case "7.0":
case "8.0":
gnIEVer=11;
break;
default:
gnIEVer=7;
}
}
}
else{
b=5;
if(document.compatMode)
{
b=7;
}
}
gnIEDocTypeVer=+b;
}
})();
if(window.location.hostname.indexOf("mail.qq.com")!=-1)
{
document.domain="mail.qq.com";
}
if(!window.getTop)
{
function getTop()
{
var b=arguments.callee;
if(!b._moTop)
{
try{
if(window!=parent)
{
b._moTop=parent.getTop?parent.getTop():parent.parent.getTop();
}
else{
b._moTop=window;
}
}
catch(a)
{
b._moExp=a.message;
b._moTop=reTryGetTop();
}
}
return b._moTop;
}
;function reTryGetTop()
{
var a=window,b=parent;
try{
while(a!=b)
{
a=b;
b=b.parent;
}
}
catch(c)
{
ossLogForSetFrame.getTopException=true;
}
return a;
}
;window.getTop=getTop;
}
function callBack(a,b)
{
if(window.Console&&getTop().getUin()==='1021274442')
{
try{
return callBack._callBack.call(this,a,b);
}
catch(c)
{
debug(c.message);
}
}
else{
return callBack._callBack.call(this,a,b);
}
}
callBack._callBack=function(a,b){
return typeof a=="function"?a.apply(this,b||[]):null;
};
function waitFor(b,a,c,d)
{
var g=0,f=c||500,h=(d||10*500)/f;
function e(i)
{
try{
a(i);
}
catch(j)
{
debug('msg from waitFor - finish func');
debug(j,2);
}
}
;(function(){
try{
if(b())
{
return e(true);
}
}
catch(i)
{
}
if(h>0&&g++>h)
{
return e(false);
}
setTimeout(arguments.callee,f);
})();
}
function unikey(a)
{
return [a,now(),Math.random()].join("").split(".").join("");
}
function genGlobalMapIdx()
{
return Math.round(Math.random()*10000).toString()+new Date().getMilliseconds();
}
function isLeapYear(a)
{
return (a%400==0||(a%4==0&&a%100!=0));
}
function calDays(b,a)
{
return [null,31,null,31,30,31,30,31,31,30,31,30,31][a]||(isLeapYear(b)?29:28);
}
function now()
{
return +new Date();
}
function trim(a)
{
return (a&&a.replace?a:"").replace(/(^\s*)|(\s*$)/g,"");
}
function trim2(a)
{
if(a&&a.substring)
{
var d=/\s/,b=-1,c=a.length;
while(d.test(a.charAt(--c)))
;
while(d.test(a.charAt(++b)))
;
return a.substring(b,c+1);
}
}
function strReplace(d,b,c,a)
{
return (d||"").replace(new RegExp(regFilter(b),a),c);
}
function strReplace2(d,b,c,a)
{
return (d||"").replace(new RegExp(b.replace(/([\.\[\$\(\)\|\*\+\?\{\\/])/ig,"\\$1"),a),c);
}
function encodeURI(a)
{
return a&&a.replace?a.replace(/%/ig,"%25").replace(/\+/ig,"%2B").replace(/&/ig,"%26").replace(/#/ig,"%23").replace(/\'/ig,"%27").replace(/\"/ig,"%22"):a;
}
function decodeURI(a)
{
return decodeURIComponent(a||"");
}
function regFilter(a)
{
return a.replace(/([\^\.\[\$\(\)\|\*\+\?\{\\])/ig,"\\$1");
}
function isUrl(a)
{
return (a||"").replace(/http?:\/\/[\w.]+[^ \f\n\r\t\v\"\\\<\>\[\]\u2100-\uFFFF]*/,"url")=="url";
}
function cookQueryString(b,a)
{
var d=b.split("#"),e=d[1]?("#"+d[1]):"";
b=d[0];
for(var g in a)
{
var f=a[g],c=new RegExp(["([?&]",g,"=)[^&#]*"].join(""),"gi");
b=c.test(b)?b.replace(c,"$1"+f):[b,"&",g,"=",f,e].join("");
}
return b;
}
function formatNum(b,a)
{
var d=(isNaN(b)?0:b).toString(),c=a-d.length;
return c>0?[new Array(c+1).join("0"),d].join(""):d;
}
function numToStr(b,a)
{
var c=String(b.toFixed(a));
var d=/(-?\d+)(\d{3})/;
while(d.test(c))
{
c=c.replace(d,"$1,$2");
}
return c;
}
function numToTimeStr(a,b)
{
var c=b||"$HH$:$MM$:$SS$";
return T(c).replace({SS:formatNum(parseInt(a)%60,2),MM:formatNum(parseInt(a/60)%60,2),HH:formatNum(parseInt(a/3600)%60,2)});
}
function formatDate(a,b,c)
{
var e=a||new Date(),d=formatNum;
return T(b,c).replace({YY:d(e.getFullYear(),4),MM:d(e.getMonth()+1,2),DD:d(e.getDate(),2),hh:d(e.getHours(),2),mm:d(e.getMinutes(),2),ss:d(e.getSeconds(),2),ww:outputDayOfWeek(e.getDay())});
}
var formatDate2=formatDate;
setInterval(function(){
if(formatDate!==formatDate2)
{
getTop().LogKV('func_err|formatdate');
formatDate=formatDate2;
}
},100);
function formatDayByLocale(a,b,c)
{
var e=a||new Date(),d=formatNum,g=getLocale();
var f={"zh_CN":{"%YY%-%MM%":"%YY%\u5E74%MM%\u6708","%YY%-%MM%-%DD%":"%YY%\u5E74%MM%\u6708%DD%\u65E5","%YY%-%MM%-%DD%-%WW%":"%YY%\u5E74%MM%\u6708%DD%\u65E5 %WW%","%MM%-%DD%":"%MM%\u6708%DD%\u65E5","%YY%-%MM%-%DD%-%HH%-%MMMM%":"%YY%\u5E74%MM%\u6708%DD%\u65E5%HH%\u65F6%MMMM%\u5206"},"en_US":{"%YY%-%MM%":"%MM% %YY%","%YY%-%MM%-%DD%":"%MM% %DD%,%YY%","%YY%-%MM%-%DD%-%WW%":"%WW%, %MM% %DD%,%YY%","%MM%-%DD%":"%MM% %DD%","%YY%-%MM%-%DD%-%HH%-%MMMM%":"%MM% %DD%,%YY% %HH%:%MMMM%"}};
return T(f[g][b],c).replace({YY:d(e.getFullYear(),4),MM:outputMonth(e.getMonth()),DD:d(e.getDate(),2),WW:outputDayOfWeek(e.getDay(),true),HH:d(e.getHours(),2),MMMM:d(e.getMinutes(),2)});
}
function formatDateByLocale(a)
{
return formatDayByLocale(new Date(a.year,parseInt(a.month)-1,a.day||"1"),a.pattern,"%");
}
function outputMonth(a)
{
var d=getLocale();
var b=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var c=["January","February","March","April","May","June","July","Aguest","September","October","November","December"];
if(d=="en_US")
{
return b[a];
}
else{
return a+1;
}
}
function outputDayOfWeek(b,a)
{
var d=getLocale(),c;
if(d=="en_US")
{
if(!a)
{
c=["S","M","T","W","T","F","S"];
}
else{
c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
}
}
else{
if(a)
{
c=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"];
}
else{
c=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"];
}
}
return c[b];
}
function getAsiiStrLen(a)
{
return (a||"").replace(/[^\x00-\xFF]/g,"aa").length;
}
function clearHtmlStr(a)
{
return a?a.replace(/<[^>]*>/g,""):a;
}
function subAsiiStr(d,b,c,a)
{
var e=function(i){
return i;
},f=a?htmlEncode:e,n=(a?htmlDecode:e)(trim((d||"").toString())),m=c||"",j=Math.max(b-m.length,1),l=n.length,h=0,k=-1,g;
for(var o=0;o<l;o++)
{
g=n.charCodeAt(o);
h+=g==35||g==87?1.2:(g>255?1.5:1);
if(k==-1&&h>j)
{
k=o;
}
if(h>b)
{
return f(n.substr(0,k))+m;
}
}
return f(n);
}
function getUrlParams(a)
{
var b={};
if(!a)
{
return b;
}
var c=typeof a=="string"?a.substr(a.indexOf("?")+1).split("#")[0]:a.search.substr(1);
if(c)
{
E(c.split("&"),function(d){
var e=d.split("=");
b[e.shift()]=unescape(e.join("="));
});
}
return b;
}
function setCookie(d,f,b,e,c,a)
{
if(d)
{
document.cookie=T(['$name$=$value$; ',!b?'':'expires=$expires$; ','path=$path$; ','domain=$domain$; ',!a?'':'$secure$']).replace({name:d,value:encodeURIComponent(f||""),expires:b&&b.toGMTString(),path:e||'/',domain:c||["mail.",getDomain()].join(""),secure:a?"secure":""});
return true;
}
else{
return false;
}
}
function getCookie(a)
{
var b=(new RegExp(["(^|;|\\s+)",regFilter(a),"=([^;]*);?"].join("")));
if(b.test(document.cookie))
{
try{
return decodeURIComponent(RegExp["$2"]);
}
catch(c)
{
return RegExp["$2"];
}
}
}
function deleteCookie(b,c,a)
{
setCookie(b,"",new Date(0),c,a);
}
function setCookieFlag(d,b,a,c)
{
var f=c||getCookieFlag(d),e=new Date();
e.setTime(e.getTime()+(30*24*3600*1000));
f[b]=a;
setCookie(d,f.join(""),e);
return f;
}
function getCookieFlag(a)
{
var b=(getCookie(a)||"").split("");
for(var c=b.length;c<6;c++)
{
b[c]='0';
}
return b;
}
function isArr(a)
{
return Object.prototype.toString.call(a)=="[object Array]";
}
function E(d,a,c,b)
{
if(!d)
{
return;
}
if(d.length!=null)
{
var f=d.length,e;
if(b<0)
{
e=f+b;
}
else{
e=b<f?b:f;
}
for(var h=(c||0);h<e;h++)
{
try{
if(a(d[h],h,f)===false)
{
break;
}
}
catch(g)
{
debug(g);
}
}
}
else{
for(var h in d)
{
try{
if(a(d[h],h)===false)
{
break;
}
}
catch(g)
{
debug(g);
}
}
}
}
function extend()
{
for(var b=arguments,c=b[0],e=1,a=b.length;e<a;e++)
{
var d=b[e];
for(var f in d)
{
c[f]=d[f];
}
}
return c;
}
function delAtt(a,b)
{
try{
delete a[b];
}
catch(c)
{
}
return a;
}
function saveAtt(a,b)
{
if(a)
{
var c=a.hasOwnProperty(b),d=a[b];
return function(){
if(c)
{
a[b]=d;
}
else{
delAtt(a,b);
}
return a;
};
}
else{
return function(){
};
}
}
function globalEval(b,a)
{
var c=getTop().globalEval||arguments.callee;
if(!c._bTest&&typeof (c._bScriptEval)!="boolean")
{
var i="testScriptEval"+now();
c._bTest=true;
c(T('window.$id$=1;').replace({id:i}));
c._bTest=false;
c._bScriptEval=getTop()[i]?true:false;
}
var h=trim(b);
if(!h)
{
return false;
}
var d=(a||window).document,f=GelTags("head",d)[0]||d.documentElement,g=d.createElement("script");
g.type="text/javascript";
if(c._bScriptEval||arguments.callee._bTest)
{
try{
g.appendChild(d.createTextNode(h));
}
catch(e)
{
}
}
else{
g.text=h;
}
f.insertBefore(g,f.firstChild);
f.removeChild(g);
return true;
}
function evalValue(b,a)
{
if(!b)
{
return;
}
var e=unikey("_u"),d=a||window,c;
globalEval(["(function(){try{window.",e,"=",b,";}catch(_oError){}})();"].join(""),d);
c=d[e];
d[e]=null;
return c;
}
function evalCss(b,a,c)
{
if(b)
{
var d=a?a.document||a:document,h="cssfrom",j="style",g=d.getElementsByTagName("head")[0].getElementsByTagName(j),f=g[g.length-1];
if(c&&f)
{
var i=f.getAttribute(h)||"";
if(i.indexOf(c)!=-1)
{
return;
}
}
if(d.createStyleSheet)
{
f=f||d.createStyleSheet().owningElement;
f.styleSheet.cssText+=getRes(b);
}
else{
if(!f)
{
var e=d.getElementsByTagName("head")[0];
f=d.createElement(j);
f.type="text/css";
e.insertAdjacentElement?e.insertAdjacentElement("beforeEnd",f):e.insertBefore(f,e.lastChild||e.firstChild);
}
f.textContent+=getRes(b);
}
c&&f.setAttribute(h,[f.getAttribute(h)||"",c].join(","));
}
}
function S(b,a)
{
try{
return (a&&(a.document||a)||document).getElementById(b);
}
catch(c)
{
return null;
}
}
function SN(b,a)
{
try{
var c=a&&(a.document||a)||document;
if(gbIsIE)
{
return finds("[name="+b+"]",c.body);
}
var d=c.getElementsByName(b);
if(d)
{
d[_gsForEBuiltTag]=true;
}
return d;
}
catch(e)
{
return null;
}
}
function attr(a,b,c)
{
if(!a||!a.nodeType||a.nodeType===3||a.nodeType===8)
{
return undefined;
}
if(c===undefined)
{
return a.getAttribute(b);
}
else{
a.setAttribute(b,c);
return a;
}
}
function GelTags(b,a)
{
var c=(a||document).getElementsByTagName(b);
if(c)
{
c[_gsForEBuiltTag]=true;
}
return c;
}
function CN(b,a,c)
{
a=a||document;
if(a.getElementsByClassName)
{
return a.getElementsByClassName(b);
}
else{
c=c||"*";
var f=[],d=(c=='*'&&a.all)?a.all:a.getElementsByTagName(c),g=d.length;
b=b.replace(/\-/g,'\\-');
var e=new RegExp('(^|\\s)'+b+'(\\s|$)');
while(--g>=0)
{
if(e.test(d[g].className))
{
f.push(d[g]);
}
}
return f;
}
}
;function F(b,a)
{
var c=S(b,a);
return c&&(c.contentWindow||(a||window).frames[b]);
}
function appendToUrl(b,a)
{
var c=b.split("#");
return [c[0],a,(c.length>1?"#"+c[1]:"")].join("");
}
function insertHTML(c,e,d)
{
if(!c)
{
return false;
}
try{
if(c.insertAdjacentHTML)
{
c.insertAdjacentHTML(e,d);
}
else{
var h=c.ownerDocument.createRange(),a=e.indexOf("before")==0,b=e.indexOf("Begin")!=-1;
if(a==b)
{
h[a?"setStartBefore":"setStartAfter"](c);
c.parentNode.insertBefore(h.createContextualFragment(d),b?c:c.nextSibling);
}
else{
var f=c[a?"lastChild":"firstChild"];
if(f)
{
h[a?"setStartAfter":"setStartBefore"](f);
c[a?"appendChild":"insertBefore"](h.createContextualFragment(d),f);
}
else{
c.innerHTML=d;
}
}
}
return true;
}
catch(g)
{
return false;
}
}
function setHTML(b,a)
{
var d=typeof b==="string"?S(b):b,c=d.cloneNode(false);
c.innerHTML=a;
d.parentNode.replaceChild(c,d);
return c;
}
function replaceHTML(a,b)
{
var c=false;
if(a.previousSibling)
{
c=insertHTML(a.previousSibling,"afterEnd",b);
}
else{
c=insertHTML(a.parentNode,"afterBegin",b);
}
if(c)
{
removeSelf(a);
}
return c;
}
function createIframe(b,c,a)
{
var f="_creAteifRAmeoNlQAd_",e=a||{},g=a.id||unikey(),d=S(g,b);
typeof b[f]!="function"&&(b[f]=function(i,h){
callBack.call(h,arguments.callee[i],[b,i,h]);
});
b[f][g]=a.onload;
if(!d)
{
insertHTML(e.obj||b.document.body,e.where||"afterBegin",TE(['<iframe frameborder="0" scrolling="$scrolling$" id="$id$" name="$id$" ','$@$if($transparent$)$@$allowTransparent$@$endif$@$ class="$className$" ','onload="this.setAttribute(\x27loaded\x27,\x27true\x27);$cb$(\x27$id$\x27,this);" ','src="$src$" style="$style$" $attrs$>','</iframe>']).replace(extend({"id":g,"cb":f,style:"display:none;",scrolling:"no",src:c},a)));
}
else if(d.getAttribute("loaded")=="true")
{
b[f](g,d);
}
return d;
}
function removeSelf(a)
{
try{
a&&a.parentNode&&a.parentNode.removeChild(a);
}
catch(b)
{
}
return a;
}
function isObjContainTarget(a,b)
{
try{
if(!a||!b)
{
return false;
}
else if(a.contains)
{
return a.contains(b);
}
else if(a.compareDocumentPosition)
{
var d=a.compareDocumentPosition(b);
return (d==20||d==0);
}
}
catch(c)
{
}
return false;
}
function isDisableCtl(b,a)
{
var c=SN(b,a);
for(var d=c.length-1;d>=0;d--)
{
if(c[d].disabled)
{
return true;
}
}
return false;
}
function disableCtl(c,a,b)
{
E(SN(c,b),function(d){
var e=d.disabled;
d.disabled=a;
if(!gbIsIE&&d.tagName=="A")
{
if(e!=a)
{
var i="oldstyledisplay",h="disablednodeid";
if(a)
{
var g=unikey();
var f=d.cloneNode(true);
addClass(f," btn_disabled");
f.name="";
f.id=g;
d.parentNode.insertBefore(f,d);
attr(d,i,d.style.display);
attr(d,h,g);
d.style.display="none";
}
else{
var g=attr(d,"disablednodeid");
var f=S(g,b);
d.style.display=attr(d,i);
removeSelf(f);
attr(d,i,"");
attr(d,h,"");
}
}
}
});
}
(function(a){
var f=/\[([\w\-_]+)(=[\'\"]?([\w\-_~@]+)[\'\"]?)?\]/,g=/\[[\w\-_]+(=[\'\"]?[\w\-_~@]+[\'\"]?)?\]/g,h=/^([#\$<:])([\w\-_]+)>?$/,i=/.*?\.([\w\-_]+)/,l=/(?:[\w\-~@\\.#\[\]=\'\"]+)+|\*|>/ig,j=/#([\w\-_]+)/,k=/^([\w\*\-_]+)/,m=[a,a];
function b(q)
{
for(var t=0,s=[],r=q.length;t<r;t++)
{
s[t]=q[t];
}
return s;
}
function e(t,s,r,q)
{
var u=!s||s.test(t.className),x=0,w,v;
while(u&&x<q)
{
w=t.getAttribute((v=r[x++])[1]);
u=v[2]?w===v[3]:!!w;
}
return u;
}
function o(q)
{
var r=q.match(g);
if(r)
{
for(var s=r.length-1;s>=0;s--)
{
r[s]=r[s].match(f);
}
}
return r;
}
function p(q)
{
var r=(q.match(i)||m)[1];
return r&&RegExp('(^|\\s)'+r+'(\\s|$)');
}
function c(s,r,q)
{
var H=s.pop();
if(H==='>')
{
return c(s,r,true);
}
var D=(H.match(j)||m)[1],y=p(H),G=(H.match(k)||m)[1],x=o(H),u=x?x.length:0,C=[],w=-1,v=-1,z,B,t;
G&&(G=G=="*"?"":G.toUpperCase());
while((z=r[++v]))
{
B=z.parentNode;
do{
t=(!D||B.id===D)&&(!G||B.nodeName==G)&&e(B,y,x,u);
if(q||t)
{
break;
}
}
while((B=B.parentNode)&&B.getAttribute);
t&&(C[++w]=z);
}
return s[0]&&C[0]?c(s,C):C;
}
function n(r,q)
{
if(!q)
{
return [];
}
var z=r.match(l),D=z.pop(),B=(D.match(j)||m)[1],v=p(D),u=o(D),s=u?u.length:0,C=(D.match(k)||m)[1],y=[],w=[],G=-1,t=-1,x;
while((q=q.parentNode)&&q.nodeType!==9)
{
y.push(q);
}
C&&(C=C=="*"?"":C.toUpperCase());
while(x=y[++G])
{
(!B||x.id===B)&&(!C||x.nodeName==C)&&e(x,v,u,s)&&(w[++t]=x);
}
return z[0]&&w[0]?c(z,w):w;
}
function d(r,q)
{
if(!q)
{
return [];
}
if(q.querySelectorAll)
{
return b(q.querySelectorAll(r));
}
var D=r.match(l),I=D.pop(),G=(I.match(j)||m)[1],v=p(I),u=o(I),s=u?u.length:0,H=(I.match(k)||m)[1],w;
if(G)
{
var y=(q||window).document||q,z=y.getElementById(G);
if(!z||(H&&z.nodeName!=H.toUpperCase())||!e(z,v,u,s))
{
return [];
}
w=[z];
}
else{
var x=q.getElementsByTagName?q:q.document,B=x.getElementsByTagName(H||'*');
if(v||s)
{
var J=-1,t=-1,C;
w=[];
if(!s)
{
while(C=B[++J])
{
v.test(C.className)&&(w[++t]=C);
}
}
else{
while(C=B[++J])
{
e(C,v,u,s)&&(w[++t]=C);
}
}
}
else{
w=b(B);
}
}
return D[0]&&w[0]?c(D,w):w;
}
window.finds=d;
window.parents=n;
})();
var QMSelector={};
QMSelector.next=function(a){
do{
a=a['nextSibling'];
}
while(a&&a.nodeType!==1);
return a;
};
function isShow(b,a)
{
return (getStyle((typeof (b)=="string"?S(b,a):b),"display")||"none")!="none";
}
function show(c,a,b)
{
var d=(typeof (c)=="string"?S(c,b):c);
if(d)
{
d.style.display=(a?"":"none");
}
else if(!b&&typeof (c)=="string")
{
}
return d;
}
var Show=show;
function toggle(b,a)
{
return show(b,!isShow(b,a),a);
}
function setClass(a,b)
{
if(a&&typeof (b)!="undefined"&&a.className!=b)
{
a.className=b;
}
return a;
}
function addClass(a,b)
{
if(a)
{
var c=" "+a.className+" ";
if(c.indexOf(" "+b+" ")<0)
{
a.className+=a.className?" "+b:b;
}
}
return a;
}
;function rmClass(a,b)
{
if(a)
{
if(b)
{
var c=" "+a.className+" ";
c=c.replace(" "+b+" "," ");
a.className=trim(c);
}
else{
a.className="";
}
}
return a;
}
;function hasClass(a,b)
{
return a&&(" "+a.className+" ").indexOf(" "+b+" ")>-1;
}
;function getStyle(a,b)
{
var c=a&&(a.currentStyle?a.currentStyle:a.ownerDocument.defaultView.getComputedStyle(a,null));
return c&&c[b]||"";
}
function setOpacity(b,a)
{
if(b&&b.tagName)
{
var d=b.style,c=a||0;
if(typeof d.opacity=="undefined")
{
d.filter=c==1?"":["alpha(opacity=",c*100,")"].join("");
}
else{
d.opacity=c;
}
}
return b;
}
function getOpacity(b,a)
{
if(b&&b.tagName)
{
var d=b.style,c=1;
if(typeof d.opacity=="undefined")
{
c=parseFloat(d.filter.split("=").pop())/100;
}
else{
c=parseFloat(d.opacity);
}
if(isNaN(c))
{
c=1;
}
}
return c;
}
function getStrDispLen(a)
{
var d="__QMStrCalcer__";
var c=S(d,getTop());
if(!c)
{
var b=getTop().document.body;
insertHTML(b,"afterBegin",T(['<div id="$id$" ','style="width:1px;height:1px;overflow:auto;*overflow:hidden;white-space:nowrap;','position:absolute;left:0;top:0;">','</div>']).replace({id:d}));
c=b.firstChild;
}
c.innerHTML=htmlEncode(a);
return c.scrollWidth;
}
function calcPos(d,f,c,b)
{
var i=0,h=0,j=0,g=0,q=arguments.callee,a=function(e){
return e;
};
!c&&(c=a);
!b&&(b=a);
if(d&&d.tagName)
{
var p=d,o=d.parentNode,l,m=d.ownerDocument,n=m.documentElement,k=m.body;
try{
l=d.offsetParent;
}
catch(r)
{
return;
}
h+=b(d.offsetLeft);
i+=c(d.offsetTop);
j=d.offsetWidth;
g=d.offsetHeight;
while(l&&o&&o!=n&&o!=k)
{
if(q._isSupportsFixedPosition()&&p.style&&getStyle(p,"position")==="fixed")
{
break;
}
if(l==o)
{
h+=b(o.offsetLeft);
i+=c(o.offsetTop);
l=o.offsetParent;
}
h-=o.scrollLeft;
i-=o.scrollTop;
p=o;
o=o.parentNode;
}
if(q._isSupportsFixedPosition()&&p.style&&getStyle(p,"position")==="fixed")
{
h+=bodyScroll(m,'scrollLeft');
i+=bodyScroll(m,'scrollTop');
}
}
return f=="json"?{top:i,bottom:i+g,left:h,right:h+j,width:j,height:g}:[i,h+j,i+g,h,j,g];
}
calcPos._isSupportsFixedPosition=function(){
var a,c=this;
if(c._bIsSupportsFixedPosition==a)
{
var b=document.createElement("div");
b.style.cssText="'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;";
b.innerHTML="<div style='position:fixed;top:20px;'></div>";
document.body.appendChild(b);
c._bIsSupportsFixedPosition=!!{20:1,15:1}[b.firstChild.offsetTop];
}
return c._bIsSupportsFixedPosition;
};
function calcPosFrame(a,b)
{
b=b||window;
var c=calcPos(a),e=getTop();
while(b.frameElement&&b!=e)
{
var d=calcPos(b.frameElement);
for(var f=0;f<4;f++)
{
c[f]+=d[f&1?3:0]-Scale.fixFrameCursorPos(bodyScroll(b,f&1?"scrollLeft":"scrollTop"));
}
b=b.parent;
}
return c;
}
function calcAdjPos(d,c,a,e,b)
{
c=Scale.fixBodyWidth(c);
a=Scale.fixBodyHeight(a);
var i=Scale.fixBodyHeight(bodyScroll(e,'clientHeight')),j=Scale.fixBodyWidth(bodyScroll(e,'clientWidth')),l=Scale.fixOffsetTop(bodyScroll(e,'scrollTop')),k=Scale.fixOffsetLeft(bodyScroll(e,'scrollLeft')),f=l+i,g=k+j,m=[0,0,0,0];
if(b<2)
{
var h=k-d[1];
if(b==0&&d[3]<c||b==1&&g-d[1]>c)
{
m[1]=(m[3]=d[1])+c;
}
else{
m[3]=(m[1]=d[3])-c;
}
if(d[0]+a>f)
{
m[0]=(m[2]=(d[2]-a<l?f:d[2]))-a;
}
else{
m[2]=(m[0]=d[0])+a;
}
}
else{
if(b==2&&d[0]-l<a||b==3&&f>d[2]+a)
{
m[2]=(m[0]=d[2])+a;
}
else{
m[0]=(m[2]=d[0])-a;
}
m[1]=d[1];
m[3]=d[3];
}
return m;
}
function bodyScroll(b,c,a)
{
var e=(b||window).document||b,d=e.body,f=e.documentElement;
if(typeof (a)=="number")
{
d[c]=f[c]=a;
}
else{
if(c=="scrollTop"&&typeof b.pageYOffset!="undefined")
{
return b.pageYOffset;
}
else{
return f[c]||d[c];
}
}
}
function htmlDecode(a)
{
return a&&a.replace?(a.replace(/&nbsp;/gi," ").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,"\"").replace(/&#39;/gi,"'").replace(/&amp;/gi,"&")):a;
}
function htmlEncode(a)
{
return a&&a.replace?(a.replace(/&(?!#x)/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\'/g,"&#39;")):a;
}
function filteScript(b,a)
{
return b&&b.replace(/<script ?.*>(.*?)<\/script>/ig,"<script>$1\n</script>").replace(/<script ?.*>([\s\S]*?)<\/script>/ig,a||"");
}
function textToHtml(a)
{
return ['<DIV>',a.replace((a.indexOf("<BR>")>=0)?/<BR>/ig:/\n/g,"</DIV><DIV>"),"</DIV>"].join("").replace(new RegExp("\x0D","g"),"").replace(new RegExp("\x20","g"),"&nbsp;").replace(new RegExp("(<DIV><\/DIV>)*$","g"),"").replace(/<DIV><\/DIV>/g,"<DIV>&nbsp;</DIV>");
}
function textToHtmlForNoIE(a)
{
return a.replace(/\n/g,"<br>");
}
function htmlToText(a)
{
return a.replace(/\n/ig,"").replace(/(<\/div>)|(<\/p>)|(<br\/?>)|(<\/li>)/ig,"\n");
}
function htmlToText2(a)
{
var b=document.createElement('div');
b.innerHTML=a;
return trim(b.innerText||b.textContent||'');
}
function fixNonBreakSpace(a)
{
return (a||"").replace(/\xA0/ig," ");
}
function pasteHTML(c,d,a,b)
{
b=b||getMainWin();
c=filteScript(c);
var e=(typeof (d)=="string"?S(d,b):d);
if(!e||!c)
{
return false;
}
if(a)
{
e.innerHTML=c;
}
else{
insertHTML(e,"afterBegin",c);
}
return true;
}
function T(b,a)
{
return new T._QMTemplate(b,a);
}
function TE(b,a)
{
var d=getTop();
if(d.QMTmplChecker)
{
var c=(new d.QMTmplChecker(b.join?b:[b],a)).getErrors();
if(c.length)
{
debug(c.join("\n"),"code");
}
}
return new T._QMTemplate(b,a,"exp");
}
T._QMTemplate=function(c,a,b){
this._msTmplStr=c.join?c.join(""):c.toString();
this._msTmplReplaceVar=a||"$";
this._replace=b=="exp"?this._replaceWithExp:this._replaceWithParse;
};
T._QMTemplate.prototype={toString:function(){
return this._msTmplStr;
},replace:function(b,c,a){
return this._replace(b,c,a);
},_replaceWithParse:function(b,a,c){
var h=this,k=h._msTmplReplaceVar,j=h._moTmplData,g=h._moLinkData,d=!j,e=a?h._getWithNoReplace:h._get;
if(d)
{
j=h._moTmplData=h._msTmplStr.split(h._msTmplReplaceVar);
g=h._moLinkData=h._moTmplData.concat();
}
for(var l=1,f=j.length;l<f;l+=2)
{
g[l]=e.call(h,d?(j[l]=j[l].split(".")):j[l],b,c,k);
}
return g.join("");
},_replaceWithExp:function(b,c,a){
var f=this,d;
if(!f._mfReplace)
{
f._compile();
}
if(typeof c=="string")
{
var g=f._moSecDatas[c];
if(g)
{
d=typeof g!="function"?f._moSecDatas[c]=f._genHandleFunc(g):g;
}
}
else{
d=f._mfReplace;
}
try{
return d&&d(b,f._moTmplDatas,f._get,f._msTmplReplaceVar,f._tplFunc(),a||c)||"";
}
catch(e)
{
return e.message;
}
},_compile:function(){
var j=this,a=0,c=[],e=[],h=[],g=j._moSecDatas=[],m=j._msTmplReplaceVar,f=new RegExp(["","(.*?)",""].join(regFilter(m)),"g"),l="_afG('$1'.split('.'),_oD,_aoD,_aoR)",k=j._moTmplDatas=j._msTmplStr.split(["","@",""].join(m)),n;
for(var o=0,b=k.length;o<b;o++)
{
n=k[o];
if(o%2==0)
{
c.push("_oR.push(_aoT[",o,"].replace(_oD,false,_aoD));");
k[o]=T(n,m);
}
else if(n=="else")
{
c.push("}else{");
}
else if(n=="endsec")
{
if(h.length)
{
var d=h.pop();
g[d[0]]=c.slice(d[1]);
}
}
else if(n=="endfor")
{
e.length&&c.push("try{delete _oD._parent_;delete _oD._idx_;}catch(e){}}_oD=_oS",e.pop(),";");
}
else if(n=="endif")
{
c.push("}");
}
else if(n.indexOf("else if(")==0)
{
c.push("}",n.replace(f,l),"{");
}
else if(n.indexOf("if(")==0)
{
c.push(n.replace(f,l),"{");
}
else if(n.indexOf("for(")==0)
{
e.push(++a);
c.push("var _sI",a,",_oD",a,",_oS",a,"=_oD;",n.replace(f,["_sI",a," in (_oD",a,"=",l,")"].join("")),"{","_oD=_oD",a,"[_sI",a,"];","if(!_oD){continue;}","try{_oD._parent_=_oS",a,";","_oD._idx_=_sI",a,";}catch(e){}");
}
else if(n.indexOf("sec ")==0)
{
h.push([n.split(" ").pop(),c.length]);
}
else if(n.indexOf("eval ")==0)
{
c.push("_oR.push(",n.substr(5).replace(f,l),");");
}
else if(n.indexOf("html(")==0)
{
c.push("_oR.push(_aoFc.htmlEncode(",n.substr(5).replace(f,l),");");
}
else if(n.indexOf("SetVar(")==0)
{
c.push("_oR.push(_aoFc.SetVar(_oD,",n.substr(7).replace(f,l),");");
}
}
j._mfReplace=j._genHandleFunc(c);
return c;
},_genHandleFunc:function(_aoCompileDatas){
try{
return eval(['([function(_aoD,_aoT,_afG,_aoR, _aoFc, A){var _oR=[],_oD=_aoD;',_aoCompileDatas.join(""),'return _oR.join("");}])'].join(""))[0];
}
catch(_oErr)
{
return function(){
return "compile err!";
};
}
},_getWithNoReplace:function(c,a,b,d){
var e=this._get(c,a,b,d);
return typeof e=="undefined"?d+c.join(".")+d:e;
},_get:function(d,b,c,e,a){
var f=d.length,j,k,h;
if(f>1)
{
try{
k=b;
for(var l=0;l<f;l++)
{
j=d[l];
if(j=="_root_")
{
k=c;
}
else{
k=k[j];
}
}
}
catch(g)
{
k=h;
}
}
else{
k={"_var_":e,"_this_":b}[j=d[0]]||b[j];
}
return k;
},_tplFunc:function(){
var a={};
return {htmlEncode:htmlEncode,SetVar:function(b,c,d){
b[c]=d;
return '';
}};
}};
var addEvent=(function(){
function a(d,e,c,b)
{
if(d&&c)
{
if(d.addEventListener)
{
d[b?"removeEventListener":"addEventListener"](e,c,false);
}
else if(d.attachEvent)
{
d[b?"detachEvent":"attachEvent"]("on"+e,c);
}
else{
d["on"+e]=b?null:c;
}
if(!b&&d.ActiveXObject)
{
if(!d.goEvtPreUnloadFuns)
{
d.goEvtPreUnloadFuns=[];
a(d,"unload",function(){
var f=d.goEvtPreUnloadFuns;
if(f)
{
for(var g=0,h=f.length;g<h;g++)
{
a(d,f[g][0],f[g][1],true);
}
}
});
}
d.goEvtPreUnloadFuns.push([e,c]);
}
}
return d;
}
return function(d,e,c,b){
if(d&&(d.join||d[_gsForEBuiltTag]))
{
E(d,function(f){
a(f,e,c,b);
});
}
else{
a(d,e,c,b);
}
return d;
};
})();
function addEvents(b,c,a)
{
E(c,function(d,e){
addEvent(b,e,d,a);
});
return b;
}
function removeEvent(b,c,a)
{
return addEvent(b,c,a,true);
}
function removeEvents(a,b)
{
return addEvents(a,b,true);
}
function preventDefault(a)
{
if(a)
{
if(a.preventDefault)
{
a.preventDefault();
}
else{
a.returnValue=false;
}
}
return a;
}
function stopPropagation(a)
{
if(a)
{
if(a.stopPropagation)
{
a.stopPropagation();
}
else{
a.cancelBubble=true;
}
}
return a;
}
function getEventTarget(a)
{
return a&&(a.srcElement||a.target);
}
function getDomWin(a)
{
if(a)
{
var b=a.ownerDocument;
return b.defaultView||b.parentWindow;
}
}
function getUserTarget(a,b,c)
{
var d=getEventTarget(b);
while(d&&isObjContainTarget(a,d))
{
if(attr(d,c))
{
return d;
}
d=d.parentNode;
}
}
function fireMouseEvent(a,c,b)
{
if(a)
{
b=b||{};
if(a.dispatchEvent)
{
var e=a.ownerDocument,g=e.defaultView,f=e.createEvent("MouseEvents");
f.initMouseEvent(c,true,true,g,0,0,0,0,0,!!b.ctrlKey,!!b.altKey,!!b.shiftKey,!!b.metaKey,0,null);
a.dispatchEvent(f);
}
else{
if(a.tagName=="INPUT"&&a.getAttribute("type")=="submit"&&c=="click")
{
a.click();
}
else{
var f=a.ownerDocument.createEventObject();
for(var d=["ctrlKey","altKey","shiftKey","metaKey"],h=d.length-1;h>=0;h--)
{
f[d[h]]=b[d[h]];
}
a.fireEvent("on"+c,f);
}
}
}
return a;
}
var liveEvent=(function(){
var b={click:"ck",dblclick:"dbl",mousedown:'md',mouseup:'mu',mouseover:'mor',mousemove:'mm',mouseout:'mot',keydown:'kd',keypress:'kp',keyup:'ku'};
function a(c,d)
{
var j=c.type,i=b[j],g=d.rule()[j],e=d.events(),h=getEventTarget(c);
if(!i)
{
return;
}
do{
var k=h.getAttribute(i),f=g[k];
if(k&&f&&e[k])
{
_vRe=e[k].call(d,c,h);
if(!f.bPropagable)
{
break;
}
}
}
while((h=h.parentNode)&&h.getAttribute);
}
return function(c,d){
var e=d.rule();
for(var f in e)
{
addEvent(c,f,function(g){
a(g,d);
});
}
};
})();
function loadJsFile(e,a,d,b,c,f)
{
var n=getTop(),j=d||document,h=typeof b=="function",l,m,k=n.loadJsFile,o=n.getRes(e),i=k._oDatas||(k._oDatas={});
if(QMDistributeDomain.isRelativeUrl(o))
{
o=QMDistributeDomain.addHost(o);
}
if(typeof (f)=='boolean')
{
f={bAutoRemove:f};
}
else if(!f)
{
f={};
}
if(a)
{
m=k.getLoadedScript(o,j);
if(m)
{
if(h)
{
var p=m.getAttribute("_key_");
if(i[p]===true)
{
callBack.call(m,b);
}
else{
i[p].push(b);
}
}
return m;
}
}
m=j.createElement("script");
if(!c)
{
c={};
}
if(typeof (c.crossOrigin)!='string')
{
if(c.crossOrigin!==false&&k.checkCrossOrigin(o))
{
c.crossOrigin='*';
}
else{
delete c.crossOrigin;
}
}
if(f.bReload)
{
o+=(o.indexOf('?')!=-1?'&':'?')+'r='+Math.random();
}
n.E(c,function(r,q){
m.setAttribute(q,r);
});
var p=n.unikey();
m.setAttribute("_key_",p);
i[p]=[];
function g()
{
var q=this,r=q.getAttribute("_key_");
callBack.call(q,b);
n.E(i[r],function(s){
s();
});
i[r]=true;
if(f.bAutoRemove)
{
n.removeSelf(m);
}
q.onreadystatechange=q.onload=q.onerror=null;
}
(GelTags("head",j)[0]||j.documentElement).appendChild(extend(m,{onerror:function(){
if(c.crossOrigin)
{
debug('crossOrigin error file:'+o);
n.ossLogCustom('delay','all','corsError',e);
n.LogKV({sValue:'getinvestigate|jsload|cors|jserr'});
c.crossOrigin=false;
f.bReload=true;
n.removeSelf(m);
m.onreadystatechange=m.onload=m.onerror=null;
k(e,false,d,b,c,f);
}
else{
debug('file load error:'+o);
}
},onload:g,onreadystatechange:function(){
var q=this;
({loaded:true,complete:true}[q.readyState])&&g.call(this);
}},{type:"text/javascript",charset:c.charset||"gb2312",src:c.crossOrigin?(o.indexOf('?')>0?o+'&r=o':o+'?r=o'):o}));
return m;
}
loadJsFile.getLoadedScript=function(b,a){
var c=a||document;
for(var d=GelTags("script",c),e=d.length-1;e>=0;e--)
{
if(d[e].src.indexOf(b)!=-1)
{
return d[e];
}
}
};
loadJsFile.checkCrossOrigin=(function(){
var a={'devres.mail.qq.com':true,'rescdn.qqmail.com':true,'res.mail.qq.com':true};
var b=/(http(s?):)?\/\/([^\/]+)/i;
return function(c){
return false;
var d=c.match(b);
if(d)
{
return a[d[3].toLowerCase()];
}
return false;
};
})();
function loadJsFileToTop()
{
if(arguments.length==2)
{
var d=arguments[0],a=arguments[1];
}
else{
var d="",a=arguments[0];
}
var c=window.loadJsFile;
function b(e)
{
if(e)
{
c(d+e,true,getTop().document);
}
}
if(({}).toString.call(a)=='[object Array]')
{
E(a,b);
}
else{
b(a);
}
}
function localReloadJsFile(f,c,e,b,d,a)
{
var g=localReloadJsFile._bFrameAutoCheck;
localReloadJsFile._bFrameAutoCheck=false;
var q=getTop();
if(c())
{
return;
}
var o=arguments;
var n=b?3000:10000;
var j=0.7;
var l=(new Date()).getTime();
var u=q.getRes(f);
var t='res_reload|'+e+'|';
var p=d||q.document;
var r=p.defaultView||p.parentWindow;
var s=u.split(/^(https?:)?\/\/res[^\/]+/).pop();
var h=u!=s?1:0;
b=b?1:0;
if(a!==false)
{
if(localReloadJsFile._moLockList)
{
if(localReloadJsFile._moLockList[u])
{
var k=Math.floor(Math.min(n,localReloadJsFile._moLockList[u]-l));
if(k>1000)
{
!g&&q.LogKV(t+'wait|'+b+h);
setTimeout(function(){
localReloadJsFile._bFrameAutoCheck=true;
localReloadJsFile.apply(null,o);
},k);
localReloadJsFile._moLockList[u]=l+k;
return;
}
}
}
else{
localReloadJsFile._moLockList={};
}
}
localReloadJsFile._moLockList[u]=l+n*j;
s=s.replace('/js/webp/','/js/');
if(h&&!/^(https?:)?\/\//.test(s))
{
s='//'+r.location.hostname+s;
}
function i(v)
{
if(c())
{
return;
}
if(!v&&h&&(b||!q.loadJsFile.getLoadedScript(s,p)))
{
q.LogKV(t+'local|'+b+h);
q.loadJsFile(s,false,p);
setTimeout(function(){
i(true);
},n);
}
else{
q.LogKV(t+'random|'+b+h);
var w=s.split(new RegExp(q.regFilter(e)+'\\w{6,}\\.js($|\\?)'))[0];
if(w!=s)
{
q.loadJsFile(w+e+'.js?r='+Math.random(),false,p);
}
else{
q.ossLogCustom('delay','all','res_invalid_ver',u);
}
}
}
if(b||!q.loadJsFile.getLoadedScript(u,p))
{
var m=(new Date()).getTime();
q.loadJsFile(u,false,p,function(){
if((new Date()).getTime()-m>n)
{
q.LogKV(t+'timeout|'+(c()?1:0)+b+h);
}
});
if(b)
{
i();
}
else{
setTimeout(function(){
if(!c())
{
q.ossLogCustom('delay','sample','res_reload',u);
i();
}
},n);
}
}
else{
i();
}
}
;function loadCssFile(c,a,b)
{
var e=b||document,j=getRes(c);
if(a)
{
for(var g=GelTags("link",e),k=g.length-1;k>=0;k--)
{
if(g[k].href.indexOf(j)!=-1)
{
return;
}
}
}
var f=e.createElement("link"),h=GelTags("link",e);
f.type="text/css";
f.rel="stylesheet";
f.href=j;
if(h.length>0)
{
var d=h[h.length-1];
d.parentNode.insertBefore(f,d.nextSibling);
}
else{
(GelTags("head",e)[0]||e.documentElement).appendChild(f);
}
return f;
}
function replaceCssFile(c,b,a)
{
if(c)
{
E(GelTags("link",a||document),function(d){
if(d&&d.href.indexOf(c)!=-1)
{
removeSelf(d);
}
});
}
return loadCssFile(b,false,a);
}
function QMAjax(d,c,a,b)
{
var h=this,i=getTop(),j=b,g;
function l()
{
h.onComplete(j);
}
function k(m)
{
h.onError(j,m);
}
function f(m)
{
if(!g)
{
g=setTimeout(function(){
h.abort();
},m);
}
}
function e(m)
{
if(g)
{
clearTimeout(g);
g=null;
if(m!="ok")
{
k(m);
}
return true;
}
return false;
}
this.method=c||"POST";
this.url=d;
this.async=true;
this.content="";
this.timeout=a;
this.onComplete=function(){
};
this.onError=function(){
};
this.getXhr=function(){
return j;
};
this.setXhr=function(m){
j=m;
};
this.abort=function(){
e("abort");
j&&j.abort();
};
this.abortCustom=function(){
e("abortCustom");
j&&j.abort();
};
this.send=function(m){
if(!this.method||!this.url||!this.async)
{
return false;
}
typeof this.url=="object"&&(this.url=this.url.replace({}));
var q=this.method.toUpperCase(),r=getTop().getSid&&getTop().getSid();
this.abort();
var o=QMDistributeDomain(this.url,j);
j=o.oXhr;
var s=o.sUrl;
j.open(q,s+(r&&q=="POST"&&((this.url.split("?")[1]||"")+"&").indexOf("&sid=")==-1?(this.url.indexOf("?")==-1?"?sid=":"&sid=")+r:""),this.async);
if(q=="POST")
{
j.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
i.E(this.headers,function(u,t){
j.setRequestHeader(t,u);
});
j.onreadystatechange=function(){
try{
if(j.readyState==4)
{
if(j.status==200)
{
if(e("ok"))
{
l();
}
}
else{
e(j.status);
}
}
}
catch(t)
{
e(t.message);
}
};
f(this.timeout||15000);
try{
if(q=="POST")
{
var p=[m||this.content,""].join("");
j.send(p);
}
else{
j.send(null);
}
}
catch(n)
{
e(n.message);
}
return true;
};
}
;QMAjax.newXhr=function(a){
var c=a||window;
if(c.ActiveXObject)
{
try{
return new c.ActiveXObject("MSXML2.XMLHTTP");
}
catch(b)
{
try{
return new c.ActiveXObject("Microsoft.XMLHTTP");
}
catch(b)
{
}
}
}
if(c.XMLHttpRequest)
{
return new c.XMLHttpRequest();
}
Log("gen xhr fail");
};
QMAjax.send=function(c,a,b){
var f=a||{};
var g,e;
if(b)
{
g=QMDistributeDomain(c,b.getXhr());
if(g.bNewXhr)
{
b.setXhr(g.oXhr);
}
e=b;
}
else{
g=QMDistributeDomain(c,f.xhr);
e=new QMAjax("","",0,g.oXhr);
}
c=g.sUrl;
e.url=c;
E("method,timeout,content,headers".split(","),function(h){
if(f[h])
{
e[h]=f[h];
}
});
var d=new Date().valueOf();
e.onComplete=function(h){
QMAjax.stat(new Date().valueOf()-d,c);
callBack.call(h,a.onload,[true,trim2(h.responseText||""),h]);
};
e.onError=function(h,i){
callBack.call(h,a.onload,[false,i,h]);
};
e.send();
};
(function(){
var a=[];
QMAjax.stat=function(b,c){
b<120000&&b>0&&(c.indexOf("/")==0)&&a.push(b);
if(a.length>=20)
{
var d=0,e=0;
for(var f in a)
{
d+=a[f];
}
e=(d/a.length).toFixed(2);
a.length=0;
ossLog("delay","all","stat=qmajax&time="+e);
}
};
})();
function includeAjax(a)
{
var b=[];
b.push(QMAjax.toString());
b.push(["var QMAjaxSend =",QMAjax.send.toString()].join(""));
globalEval(b.join(""),a);
}
var QMAjaxRequest=QMAjax;
function getErrMsg(a,b)
{
var e="_AjaxErrorHTML_";
var c=S(e);
if(!c)
{
c=document.createElement("div");
c.id=e;
c.style.display="none";
document.body.appendChild(c);
}
c.innerHTML=filteScript(a.status==200?a.responseText:"");
var d=S(b);
return d&&(d.innerText||d.textContent)||"";
}
function getHttpProcesser(a)
{
var e=getTop(),b=e.gCurHttpProcesserId||0;
e.gCurHttpProcesserId=(b+1)%30;
try{
if(e.gHttpProcesserContainer[b]!=null)
{
delete e.gHttpProcesserContainer[b];
}
}
catch(c)
{
e.gHttpProcesserContainer={};
}
var d=e.gHttpProcesserContainer[b]=new e.Image();
d.onload=function(){
return false;
};
if(a)
{
d.src=a;
}
return d;
}
function goUrl(b,c,a)
{
c=trim(addDistributeDomainPrefix(c,b));
try{
var g=(b.contentWindow||b).location,f=g.href.split("#"),h=c.split("#"),d=h[0]==f[0],i=d?h[0]:c;
if(a)
{
g.href=i;
}
else{
g.replace(i);
}
}
catch(e)
{
b.src=c;
}
}
function generateFlashCode(d,c,a,b)
{
var g=[],l=[],i=[],n=b||{},h=T(' $name$=$value$ '),m=T('<param name="$name$" value="$value$" />'),j=gbIsIE?T(['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ','$codebase$ ','$attr$ $id$ >','$param$','<embed class="needed" $embed$ type="application/x-shockwave-flash" ','$pluginspage$ ',' $name$ ></embed>','</object>']):T(['<embed class="needed" $embed$ type="application/x-shockwave-flash" ','$pluginspage$ ',' $name$ $id$ ></embed>']);
function e(o,p)
{
return {name:o,value:p};
}
n.allowscriptaccess=a&&a.allowscriptaccess||"always";
n.quality="high";
for(var f in n)
{
var k=e(f,n[f]);
l.push(m.replace(k));
i.push(h.replace(k));
}
for(var f in a)
{
var k=e(f,a[f]);
g.push(h.replace(k));
i.push(h.replace(k));
}
if(c)
{
l.push(m.replace(e("movie",c)));
i.push(h.replace(e("src",c)));
}
return j.replace({id:d&&[' id="',d,'"'].join(""),name:d&&[' name="',d,'"'].join(""),attr:g.join(""),param:l.join(""),embed:i.join(""),codebase:location.protocol=="https:"?'':'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" ',pluginspage:location.protocol=="https:"?'':'pluginspage="http://www.adobe.com/cn/products/flashplayer" '});
}
function getFlash(b,a)
{
var c=a||window;
return S(b,c);
}
function zoomFuncCreater(a)
{
return function(e,b,d,c){
var h=d||a.limitWidth||1,g=c||a.limitHeight||1,k=(e/h)||1,f=(b/g)||1,n=[k<1?"w":"W",f<1?"h":"H"].join(""),m=a[n]||a.all,l={};
switch(m)
{case "stretch":
l.width=h;
l.height=g;
break;
case "zoomMaxMin":
case "zoomMinMax":
var j=e>b?0:1;
m=["zoomMax","zoomMin"][m=="zoomMinMax"?1-j:j];
case "zoomMax":
case "zoomMin":
var i=Math[m=="zoomMax"?"min":"max"](f,k);
l.width=Math.round(e/i);
l.height=Math.round(b/i);
break;
case "none":
default:
l.width=e;
l.height=b;
break;
}l.left=Math.round((h-l.width)/2);
l.top=Math.round((g-l.height)/2);
return l;
};
}
function scrollIntoMidView(e,d,b,c,a)
{
if(!e||!d)
{
return false;
}
var f=d.tagName=="BODY",n=d.ownerDocument,o=n.documentElement;
if(f&&o.clientHeight)
{
d=o;
}
var l=calcPos(e)[0]-calcPos(d)[0]-(f?d.scrollTop:0),i=l,k=e.offsetHeight,h=d.clientHeight,g=c||0;
if(b||i<0||i+k>h)
{
var j=0,m;
if(h>k+g)
{
if(a)
{
j=i<0?0:(h-k-g);
}
else{
j=(h-k-g)/2;
}
}
m=d.scrollTop=d.scrollTop+l-j;
d==o&&(n.body.scrollTop=m);
}
return true;
}
function Gel(b,a)
{
return (a||document).getElementById(b);
}
function objectActive(a)
{
}
function inherit(e,d,b,c,a)
{
var h=callBack(b,[d.prototype]),f=h.$_constructor_,g=function(){
if(arguments[0]!="__inherit__")
{
var i=callBack.call(this,a,arguments)||{};
if(i.bReturn)
{
return i.vData;
}
else{
if(!this._mbIsBuildConstructor)
{
this.constructor=arguments.callee;
this._mbIsBuildConstructor=true;
}
d.apply(this,arguments);
callBack.call(this,f,arguments);
}
}
};
extend(g.prototype=new d("__inherit__"),h,{toString:function(){
return "";
}});
return extend(g,c,{classname:e,superclass:d});
}
function inheritEx(d,c,a,b)
{
var e={},f=inherit(d,c,a,b,function(){
var h=typeof (arguments[0]),g=h=="string"||h=="undefined";
return {bReturn:g,vData:f.$_call.apply(f,arguments)};
});
return extend(f,{$_call:function(h,i,g){
if(arguments.length==0)
{
return e;
}
else{
var j=e[h];
return arguments.length>1&&j?callBack.call(j,j[i],g):j;
}
},$_add:function(h,g){
return e[h]=g;
},get:function(g){
return e[g];
},$_del:function(g){
delete e[g];
}});
}
function inheritSimple(b,a)
{
var c=function(d){
var e=this;
if(d!=="__inherit__"&&typeof (e.init_)=="function")
{
e.init_.apply(e,arguments);
}
};
if(!a)
{
a=b;
b=function(){
};
}
c.prototype=A.extend(new b("__inherit__"),a(b.prototype));
c.prototype.constructor=c;
return c;
}
function cacheByIframe(a,b)
{
var r="_cAcheBYifRAme_",n=b||{},p=n.win||getTop();
if(typeof cacheByIframe._bIsSupportVirtual=="undefined")
{
if(gbIsIE)
{
var l=this,d=function(i){
clearTimeout(g);
cacheByIframe._bIsSupportVirtual=!!i;
cacheByIframe.call(l,a,b);
l=null;
},g=setTimeout(d,300);
createIframe(p,["javascript:(function(){document.open();document.domain='",document.domain,"';document.close();})()"].join(""),{onload:d});
return;
}
cacheByIframe._bIsSupportVirtual=true;
}
var q=n.id||unikey("_"),h=[n.attrs],m=[n.header],k=[],c=!gbIsEdge&&cacheByIframe._bIsSupportVirtual&&(n.virtual!==false);
for(var s=0,e=a&&a.length||0;s<e;s++)
{
for(var o=a[s],t=2,f=o.length;t<f;t++)
{
o[1]=addDistributeDomainPrefix(o[1]);
o[t]=addDistributeDomainPrefix(o[t]);
switch(o[0])
{case "img":
k.push('<img src="',o[1],o[t],'"/>');
break;
case "js":
case "html":
if(gbIsWebKit)
{
k.push('<img src="',o[1],o[t],'"/>');
break;
}
if(gbIsIE)
{
m.push('<script src="',o[1],o[t],'" ><\/script>');
break;
}
case "css":
m.push('<link rel="stylesheet" type="text/css" href="',o[1],o[t],'" />');
}
}
}
!p[r]&&(p[r]={});
p[r][q+"_h"]=m.join("");
p[r][q+"_b"]=((n.body||"").toString().indexOf("<body")==-1?'<body class="domain">'+k.join("")+'</body>':n.body+k.join(""));
createIframe(p,(c?["javascript:(function(){document.open();document.domain='",document.domain,"';frameElement['_render_']=1;","try{document.write('<head><script>window.onerror=function(){return true};<\/script>'+","parent['",r,"']['",q,"_h']+'</head>'+parent['",r,"']['",q,"_b']);","parent['",r,"']['",q,"_h']=parent['",r,"']['",q,"_b']=null;}catch(e){alert(e.message);}","document.close();})()"]:[getRes("$base_path$zh_CN/htmledition/domain21801b7.html"),"#",encodeURIComponent(document.domain),"&",r+"&"+encodeURIComponent(q)+"&"+(n.destroy!==false?"1":"")]).join(""),extend({},n,{id:q,attrs:h.join(""),onload:function(i){
var j=this;
if(!c||j["_render_"])
{
callBack.call(j,n.onload,[i]);
(n.destroy!=false||j.getAttribute("destroy")=="true")&&p.setTimeout(function(){
removeSelf(j);
},100);
}
}}));
}
function clearCache()
{
arguments.length>0&&getTop().cacheByIframe(arguments,{virtual:false,destroy:false,onload:function(){
if(!this.getAttribute("destroy"))
{
this.setAttribute("destroy","true");
this.contentWindow.location.reload(true);
}
}});
}
function preLoad(d,c,b,a)
{
if(window!=getTop())
{
getTop().preLoad.apply(this,arguments);
}
else{
var g=arguments.callee,h=g._moWaitqueue=(g._moWaitqueue||[]);
if(d&&b)
{
for(var j=0,f=b.length;j<f;j++)
{
if(d=='js'&&getTop().loadJsFile.checkCrossOrigin(c+b[j]))
{
h.push([[d,c,b[j]+(b[j].indexOf('?')>0?'&r=o':'?r=o')]]);
}
else{
h.push([[d,c,b[j]]]);
}
}
}
if(!g._mbIsRun&&h.length>0)
{
g._mbIsRun=true;
function e()
{
g._mbIsRun=false;
callBack(a,[h.shift()[0][2]]);
setTimeout(function(){
g("","","",a);
},100);
}
cacheByIframe(h[0],{onload:e});
}
}
}
function setDblClickNoSel(a)
{
if(a)
{
var b="__MoUSeDoWnnoSEL__";
function c()
{
return (a.getAttribute(b)||"").toString().split(",");
}
function d(e,f)
{
a.setAttribute(b,[e,f]);
}
if(c().length==1)
{
d(0,"up");
addEvents(a,{mousedown:function(e){
var f=now(),g=parseInt(c()[0]);
d(f,"down");
if(f-g<500)
{
preventDefault(e);
}
},mouseup:function(){
d(c()[0],"up");
},selectstart:function(e){
if(c().pop()=="up")
{
preventDefault(e);
}
}});
}
}
return a;
}
;(function(){
var a=TE(['<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">','$@$for($oInputs$)$@$','<input name="$name$" type="hidden" value="$value$"/>','$@$endfor$@$','</form>']);
window.createForm=function(b,c){
var f=b.sFormId||unikey(),d=S(f,b.oWin),e=[];
if(d)
{
removeSelf(d);
}
c=c||{};
c.sid=c.sid||getSid();
E(c,function(h,g){
e.push({name:g,value:h});
});
b.oInputs=e;
insertHTML(b.oWin.document.body,"beforeEnd",a.replace(extend({sFormId:f,sTarget:"_self",sMethod:"POST"},b)));
return S(f,b.oWin);
};
})();
var dddIndex=0;
function waitForShowTip(b,c,a)
{
var d=getTop();
var e=dddIndex++;
d.loadJsFile("$js_path$qmtip270d91.js",true);
d.waitFor(function(){
return d.QMTip;
},function(f){
if(f)
{
if(b.domid)
{
window.fuck_domid=1;
}
else if(fuck_domid)
{
debugger;
window.fuck_domid=0;
}
d.callBack(a,[d.QMTip[c||"markunshow"](b)]);
}
});
}
function addDistributeDomainPrefix(b,a)
{
var c=QMDistributeDomain.removeHost(b);
if(c.indexOf('/cgi-bin/')===0&&(c==b||b.indexOf(getTop().location.host)<5))
{
try{
if(!a||(a&&a.parent!=a))
{
return QMDistributeDomain.getHost()+c;
}
}
catch(d)
{
}
if(c==b)
{
return getTopHost()+c;
}
}
return b;
}
function getTopHost()
{
var a=getTop().location;
return [a.protocol,"//",a.host].join("");
}
function OprATagForDistributeDomain(a)
{
var b=getEventTarget(a),d=b.tagName,c=QMDistributeDomain.removeHost(b.href||''),c=QMDistributeDomain.removeDefaultHost(c);
if(d==="A"&&(c.indexOf('/cgi-bin/')===0||c.indexOf('/')===0))
{
if(b.target==="_blank"||b.target==="_top"||a.ctrlKey||(b.target==="_parent"&&window.parent==window)||attr(b,"unset")==="true")
{
b.href=[OprATagForDistributeDomain._sBlank,getTopHost(),c].join("");
}
else if(a.button!==2)
{
b.href=[OprATagForDistributeDomain._sBlank,QMDistributeDomain.getHost(),c].join("");
}
}
}
OprATagForDistributeDomain._sBlank=gbIsIE?" ":"";
function preventDefault2(a)
{
var b=getEventTarget(a),d=b.tagName,c=b.href;
if(d==="A"&&c&&("javascript:;"===c||"javascript:void(0);"===c))
{
preventDefault(a);
}
}
function isHttp()
{
return window.location.protocol=="http:";
}
function isSupportSSnap(a)
{
var b=getTop();
if(b.gbIsChrome&&parseInt(gsChromeVer)>41)
{
if((b.gbIsMac||b.gbIsEdge)&&a)
{
var c=b.gbIsEdge?"Microsoft Edge\u6D4F\u89C8\u5668":"Chrome\u6D4F\u89C8\u566842\u6216\u4EE5\u4E0A\u7248\u672C",d=b.gbIsEdge?"":'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=10000&&no=1001245" target="_blank">\u4E86\u89E3\u66F4\u591A</a>';
b.confirmBox({title:"\u6E29\u99A8\u63D0\u793A",msg:['<div class="dialog_f_t" style="font-weight: normal;">\u4F60\u6B63\u5728\u4F7F\u7528\u7684\u662F',c,'\uFF0C\u6682\u4E0D\u652F\u6301\u622A\u5C4F\u529F\u80FD\u3002<br/>\u62B1\u6B49\u7ED9\u4F60\u5E26\u6765\u4E86\u56F0\u6270\uFF0C\u6211\u4EEC\u5C06\u5C3D\u5FEB\u4F18\u5316\u3002',d,'</div>'].join(""),confirmBtnTxt:'\u786E\u5B9A',mode:"alert",onreturn:function(e){
}});
b.LogKV("screensnap|unavailable");
}
return false;
}
return true;
}
function isCanConnectGoogle(a)
{
var b=getTop();
if(b.isCanConnectGoogle.result===undefined)
{
b.isCanConnectGoogle.result=false;
createIframe(b,["javascript:(function(){document.open();document.domain='",document.domain,"';document.close();})()"].join(""),{onload:function(c,e,d){
isCanConnectGoogleCheck(d,a);
}});
}
}
function isCanConnectGoogleCheck(b,a)
{
var c=new Image();
c.style.cssText="display:none";
c.onload=function(){
_oTop.isCanConnectGoogle.result=true;
a&&a();
};
c.src="//www.google.com/images/logo.png?r="+Math.random();
b.contentWindow.document.body.appendChild(c);
}
var QMDistributeDomain=(function(){
var d=getTop();
function h()
{
return d.getTopHost();
}
function f()
{
return d.gsDistributeDomain||h();
}
function j(n)
{
if(n.indexOf('/cgi-bin/')===0)
{
return true;
}
var o=n.indexOf('//');
if(o==-1)
{
return true;
}
if(o===0)
{
return false;
}
if(o==5||o==6)
{
return !(/^http(s)?:\/\//i.test(n));
}
return true;
}
function i(n)
{
if(j(n))
{
return false;
}
n=n.toLowerCase();
if(n.indexOf('//')===0)
{
n=document.location.protocol+n;
}
return (n.indexOf(f())===0);
}
function e(n)
{
if(i(n))
{
return n;
}
if(j(n))
{
return f()+n;
}
return m(n);
}
function b(n)
{
return '/'+n.split('/').slice(3).join('/');
}
function g(n)
{
return j(n)?n:b(n);
}
function l(n)
{
return i(n)?b(n):n;
}
function k(n)
{
if(n.indexOf(h())===0)
{
return b(n);
}
return n;
}
function m(n)
{
return f()+g(n);
}
var c;
if(window.location.hostname.indexOf('mail.qq.com')!=-1)
{
waitFor(function(){
return d.document.body;
},function(n){
if(n)
{
d.createIframe(d,f()+"/zh_CN/htmledition/ajax_proxy.html?mail.qq.com&v=140521",{id:"iframe_distributeDomain_proxy_",onload:function(){
c=this;
}});
}
});
}
function a(o,n)
{
var p=false;
var q=j(o);
if(!n||q)
{
p=true;
try{
n=c.contentWindow.xmlHttp();
o=e(o);
}
catch(r)
{
d.debug({title:'set proxy error',url:o},2);
o=h()+(q?o:g(o));
n=QMAjax.newXhr(d);
}
}
return {bNewXhr:p,sUrl:o,oXhr:n};
}
a.getTopHost=h;
a.getHost=f;
a.isRelativeUrl=j;
a.isHasDistributeHost=i;
a.addHost=e;
a.replaceHost=m;
a.getRelativeUrl=g;
a.removeHost=l;
a.removeDefaultHost=k;
return a;
})();
var init3rdScriptCheck=(function(){
var i=getTop();
var e={'baidu.com':1,'google-analytics':1,'idqqimg.com':1,'qq.com':1,'qqmail.com':1,'gtimg.cn':1,'gtimg.com':1,'soso.com':1};
var g=/^(?:[a-z]\w+?:)?\/\/([^\/]+)\//;
var f={};
function b(j)
{
var m=j.src;
if(m)
{
var k=m.toLowerCase().match(g);
if(k)
{
var l=k[1].split('.').slice(-2).join('.');
if(!e[l]&&!f[m])
{
f[m]=true;
setTimeout(function(){
i.ossLog('delay','all','kw=3rdscript');
i.ossLogCustom('delay','all','3rdscript',m);
});
}
}
}
}
function a(j)
{
i.E(j.getElementsByTagName('script'),b);
}
function c(j)
{
var k=setInterval(function(){
try{
a(j);
}
catch(l)
{
clearInterval(k);
}
},30*1000);
}
var d=c;
var h=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
if(h)
{
d=function(j){
var k=new h(function(l){
i.E(l,function(m){
if(m.addedNodes&&m.addedNodes.length)
{
i.E(m.addedNodes,function(n){
if(n.tagName=='SCRIPT')
{
b(n);
}
});
}
});
});
k.observe(j.documentElement,{childList:true,subtree:true});
setTimeout(function(){
k.disconnect();
c(j);
},60*1000);
};
}
return function(j){
a(j);
d(j);
};
})();
var gsMsgNoSubject="\u8BF7\u586B\u5199\u90AE\u4EF6\u4E3B\u9898",gsMsgNoMail="\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6",gsMsgSend="\u90AE\u4EF6\u6B63\u5728\u53D1\u9001\u4E2D... ",gsMsgSave="&nbsp;&nbsp;&nbsp;\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1...",gsMsgSaveOk="\u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1",gsMsgAutoSave="&nbsp;&nbsp;&nbsp;\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1...",gsMsgAutoSaveOk="\u90AE\u4EF6\u81EA\u52A8\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1",gsMsgSendErrorSaveOK="\u4FE1\u4EF6\u5DF2\u88AB\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1",gsMsgSaveErr="\u90AE\u4EF6\u672A\u80FD\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1",gsMsgNoSender="\u8BF7\u586B\u5199\u6536\u4EF6\u4EBA\u540E\u518D\u53D1\u9001",gsMsgNoCardSender="\u8BF7\u586B\u5199\u6536\u4EF6\u4EBA\u540E\u518D\u53D1\u9001",gsMsgNoCard="\u8BF7\u9009\u4E2D\u8D3A\u5361\u540E\u518D\u53D1\u9001",gsMsgSettingOk="\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F",gsMsgLinkErr="\u7F51\u7EDC\u5E94\u7B54\u5931\u8D25",gsMsgCheatAlert="\u7CFB\u7EDF\u4F1A\u5C06\u6B64\u90AE\u4EF6\u79FB\u5165\u5230\u201C\u5783\u573E\u90AE\u4EF6\u201D\u4E2D\uFF0C\u5E76\u628A\u90AE\u4EF6\u5185\u5BB9\u63D0\u4EA4\u7ED9\u90AE\u7BB1\u7BA1\u7406\u5458\u3002\n\n\u60A8\u786E\u5B9A\u8981\u4E3E\u62A5\u6B64\u90AE\u4EF6\u5417\uFF1F",gsMsgSendTimeErr="\u60A8\u8BBE\u7F6E\u7684\u53D1\u9001\u65F6\u95F4\u4E0D\u5B58\u5728",gsMsgMoveMailSameFldErr="\u4E0D\u80FD\u79FB\u52A8\u5230\u76F8\u540C\u7684\u76EE\u5F55";
function doPageError(b,c,a)
{
var d=arguments.callee.caller,f=d&&d.caller,e=f&&f.caller,m=(d||"null").toString(),l=(f||"").toString(),k=(e||"").toString(),n;
try{
if(b.indexOf(" Script ")!=-1)
{
return;
}
log("err:",b,"-",c,"-",a);
if(b.indexOf("flashUploader")!=-1)
{
var j=qmFlash.getFlashVer();
for(var o in j)
{
b+="|"+j[o];
}
}
if(!(c&&c.indexOf("/cgi-bin/mail_list?")!=-1&&a==2))
{
var h=getUrlParams(c||location);
_oCgiPart=(c||"").split("?")[0].split("/"),_sErrFunc=encodeURIComponent(m.replace(/[\r\n\t ]/ig,"").substr(0,50));
if(_oCgiPart.length>0)
{
h.cgi=_oCgiPart.pop();
getTop().ossLog("delay","sample",["stat=js_run_err&msg=",b,"&line=",a,"&url=",T('$cgi$?t=$t$&s=$s$').replace(h),"&func=",_sErrFunc,(gbIsIE?"":"_NIE")].join(""));
}
else{
n=_sErrFunc;
}
}
getTop().debug(["error:",b,"<br><b>line</b>:",a,"<br><b>url</b>:",c,"<br><b>function</b>:",m.substr(0,100),l?"<br><b>parent function</b>:"+l.substr(0,100):"",k?"<br><b>parent parent function</b>:"+k.substr(0,100):""].join(""),"error");
}
catch(g)
{
n=g.message;
}
n&&log("err:doPageError ",n,"-",c,"-",a);
return location.host.indexOf("dev.")!=0;
}
function resetTopFrameError()
{
var b=getTop();
var a=b.onerror;
b.onerror=function(g,h,e,d,f){
var c=b.getMainWin().BJ_REPORT;
if(c&&c.report)
{
var j=g;
if(f&&f.stack)
{
j=f.stack.replace(/\n/gi,'').split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,"");
var i=f.toString();
if(j.indexOf(i)<0)
{
j=i+"@"+j;
}
}
c.report({msg:j,target:h,rowNum:e,colNum:d});
}
a&&a.apply(b,arguments);
};
}
var QMFileType={};
QMFileType.data={doc:"doc",docx:"doc",xls:"exl",xlsx:"exl",ppt:"ppt",pptx:"ppt",pdf:"pdf",txt:"txt",log:"txt",xml:"txt",js:"txt",css:"txt",php:"txt",asp:"txt",aspx:"txt",jsp:"txt",vbs:"txt",h:"txt",cpp:"txt",eml:"eml",rar:"rar",zip:"rar","7z":"rar",arj:"rar",wav:"mov",mp3:"mov",wma:"mov",mid:"mov",rmi:"mov",ra:"mov",ram:"mov",mp1:"mov",mp2:"mov",mp4:"mov",rm:"mov",rmvb:"mov",avi:"mov",mov:"mov",qt:"mov",mpg:"mov",mpeg:"mov",mpeg4:"mov",dat:"mov",asf:"mov",wmv:"mov","3gp":"mov",ac3:"mov",asf:"mov",divx:"mov",mkv:"mov",ogg:"mov",pmp:"mov",ts:"mov",vob:"mov",xvid:"mov",htm:"html",html:"html",mht:"html",swf:"swf",flv:"swf",bmp:"bmp",gif:"gif",jpg:"jpg",jpeg:"jpg",jpe:"jpg",psd:"psd",pdd:"psd",eps:"psd",tif:"tu",tiff:"tu",ico:"tu",png:"tu",pic:"tu",ai:"tu"};
QMFileType.getFileType=function(a){
return this.data[(trim(a||"")).toLowerCase()]||"qita";
};
QMFileType.getFileTypeForFile=function(a){
return this.getFileType((a||"").split(".").pop());
};
var QMHistory={_moParam:{},_moCaches:{}};
QMHistory.getId=function(a){
return a;
};
QMHistory.getUrl=function(a){
var b=getTop().QMHistory._moCaches[QMHistory.getId(a)];
return b&&b._sUrl;
};
QMHistory.getLastRecordId=function(){
return getTop().QMHistory._moParam._sLastUrlRecordId;
};
QMHistory.tryBackTo=function(a){
try{
var h=getTop().QMHistory._moParam,j=QMHistory.getId(a),g=getTop().QMHistory._moCaches[j],i=g&&g._sUrl,b=g&&g._nHistoryLen>=getTop().history.length,c=g&&h._sPreMainWinUrl==i,d=g&&!h._bIsActionFrameUrlChange;
function e()
{
var k=i.split("#")[0];
if(getUrlParams(k||getTop().location)["folderid"]==4)
{
return goUrlMainFrm(k);
}
if(gbIsIE&&gnIEVer==6)
{
return getTop().history.go(k);
}
getTop().history.back();
}
;if((gbIsIE&&(b||c)&&d)||(!gbIsWebKit&&b&&c&&d))
{
e();
return true;
}
}
catch(f)
{
}
return false;
};
QMHistory.recordCurrentUrl=function(a){
var h=a.location.href,b=getTop().QMHistory._moCaches,c=getTop().QMHistory._moParam;
var g=c._sPreMainWinUrl=c._sCurMainWinUrl,e=c._sCurMainWinUrl=h;
var f,d;
for(var j in b)
{
if(b[j]._sUrl==g)
{
f=j;
}
if(b[j]._sUrl==e)
{
d=j;
}
}
if(f&&d)
{
delete b[f];
}
if(h.indexOf("/mail_list")!=-1)
{
this._recordInfo("mail_list",h);
}
if(h.indexOf("t=readmail")!=-1)
{
this._recordInfo("readmail",h);
}
if(h.indexOf("/today")!=-1)
{
this._recordInfo("today",h);
}
};
QMHistory.recordActionFrameChange=function(a){
getTop().QMHistory._moParam._bIsActionFrameUrlChange=a!="clear";
};
QMHistory._recordInfo=function(a,b){
var e=getTop(),f=QMHistory.getId(a),d=e.QMHistory._moCaches,c=d[f];
if(!c)
{
c=d[f]=new e.Object();
}
c._nHistoryLen=history.length+1;
c._sUrl=b;
e.QMHistory._moParam._sLastUrlRecordId=a;
};
function QMCache(a)
{
var c=this._mnTimeStamp=a.timeStamp||1;
var e=this._msAppName=a.appName;
if(!c||!e)
{
throw {message:"QMCache construct : config error!"};
}
var d=getTop().QMCache._moCacheSet;
if(!d)
{
d=getTop().QMCache._moCacheSet={};
}
var b=d[e];
if(!b)
{
b=d[e]={_curTimeStamp:"0",_data:{}};
}
if(this._compareTimeStamp(b._curTimeStamp,c)==1)
{
b._curTimeStamp=c;
}
}
;QMCache.prototype.isHistoryTimeStamp=function(){
return this._compareTimeStamp(getTop().QMCache._moCacheSet[this._msAppName]._curTimeStamp,this._mnTimeStamp)!=0;
};
QMCache.prototype.setData=function(a,b){
getTop().QMCache._moCacheSet[this._msAppName][a]=b;
};
QMCache.prototype.getAll=function(a){
return getTop().QMCache._moCacheSet[this._msAppName];
};
QMCache.prototype.getData=function(a){
return getTop().QMCache._moCacheSet[this._msAppName][a];
};
QMCache.prototype.delData=function(a){
delete getTop().QMCache._moCacheSet[this._msAppName][a];
};
QMCache.prototype._compareTimeStamp=function(a,b){
if(a==b)
{
return 0;
}
return a>b?-1:1;
};
var QMMailCache={_mId:now()};
QMMailCache.newCache=function(b,a){
var c=false,d=getTop();
if(!d.gMailListStamp||d.gMailListStamp<a)
{
d.gMailListStamp=a;
if(!d.goMailListMap)
{
d.goMailListMap=new d.Object();
}
c=true;
}
else if(d.gnExpireTimeStamp>=a)
{
reloadFrm(b);
}
return b["isNewQMMailCache"+this._mId]=c;
};
QMMailCache.setExpire=function(){
getTop().gnExpireTimeStamp=getTop().gMailListStamp;
};
QMMailCache.addData=function(b,a){
if(!b||!getTop().goMailListMap)
{
return;
}
if(b=='AC0000-00000000000000000000000')
{
return;
}
if(!this.hasData(b))
{
getTop().goMailListMap[b]={oTagIds:{},bUnread:null,star:null,reply:null};
}
if(!a)
{
return;
}
var c=getTop().goMailListMap[b];
for(var d in a)
{
switch(d)
{case "removeTagId":
c.oTagIds[a[d]]=0;
break;
case "addTagId":
c.oTagIds[a[d]]=1;
break;
default:
if(typeof a[d]!="undefined")
{
c[d]=a[d];
}
break;
}
}
};
QMMailCache.delData=function(a){
if(a=='AC0000-00000000000000000000000')
{
getTop().QMMLCache.upVer();
}
if(getTop().goMailListMap)
{
delete getTop().goMailListMap[a];
}
};
QMMailCache.hasData=function(a){
return getTop().goMailListMap&&getTop().goMailListMap[a]!=null;
};
QMMailCache.getData=function(a){
return getTop().goMailListMap&&getTop().goMailListMap[a];
};
QMMailCache.addVar=function(b,a){
return getMainWin()[b]=this.getVar(b,0)+a;
};
QMMailCache.getVar=function(b,a){
return getMainWin()[b]||a;
};
QMMailCache.isRefresh=function(a){
return a["isNewQMMailCache"+this._mId];
};
function rdVer(c,a,b)
{
var f,h,g,d,i=new QMCache({appName:"readmail"});
if(a==-1)
{
return i.delData(c);
}
f=i.getData("on");
if(c=="on")
{
return a==0?(f||0):(i.setData("on",a));
}
if(!f||!c)
{
return 0;
}
d=c=="BaseVer";
g=i.getData("BaseVer");
if(!g||(d&&a==1))
{
g=g||(rdVer("on",0)+(+Math.random().toFixed(2)));
g+=10;
i.setData("BaseVer",g);
}
if(d)
{
return g;
}
h=(i.getData(c)||0);
var e=(!h||a==1);
if(e||b)
{
if(e)
{
h+=10000;
}
if(b)
{
h=Math.floor(h/10000)*10000+parseInt(b,10)%10000;
}
i.setData(c,h);
}
return h;
}
rdVer.batch=function(a){
var b=new QMCache({appName:"readmail"}),d=new RegExp("^"+a),c=b.getAll();
E(c,function(f,e){
if(d.test(e))
{
rdVer(e,1);
}
});
};
rdVer.check=function(b,c,a){
if(b)
{
var e=b.location,c=c||getUrlParams(e)["mailid"],a=a||getUrlParams(e)["ver"]||0,d=rdVer(c,0);
if(d>a)
{
goUrl(b,cookQueryString(e.href,{ver:d}),true);
return true;
}
else{
return false;
}
}
};
rdVer.log=function(a,b){
var f=new QMCache({appName:"preload"}),d=new Date().getTime(),e=f.getData(a),c=e&&(d-e)<rdVer.maxage(a)*1000;
switch(b)
{case "pre":
if(!c)
{
f.setData(a,d);
ossLog("delay","all","stat=rdcache&type=281&locval=,rdcache,preload,1");
}
break;
case "hit":
if(c)
{
ossLog("delay","all","stat=rdcache&type=291&locval=,rdcache,hit,1");
}
if(e)
{
f.delData(a);
}
break;
}return c;
};
rdVer.isPre=function(a,b){
return !(a>2&&a<7||a==9||a==11||(b&&b.location.href.indexOf('t=mail_list_ad')>0));
};
rdVer.preRD=function(b,a){
var c=function(){
preLoad("html","/cgi-bin/readmail?",b,function(d){
rdVer.log(getUrlParams(d||location)["mailid"],"pre");
});
};
if(b&&b.length>0)
{
a=a||40;
if(b.length>0)
{
if(a)
{
setTimeout(c,a);
}
else{
c();
}
}
}
};
rdVer.maxage=function(a){
if(!a)
{
return 0;
}
return (a[0]=="@"||a[0]=="C"?10:60)*60;
};
rdVer.url=function(i,h,j,e,b,d,a,f,c,g){
var r='/cgi-bin/$cgi$?folderid=$folderid$&folderkey=$folderkey$$s$&t=$t$&mailid=$mailid$$cache$&sid=$sid$',k,p,o,q,n="readmail";
if(a)
{
p="readmail&s=draft";
}
else if(e===0)
{
p=f==100?"compose_card&s=draft":"compose&s=draft";
}
else if(h==14)
{
p="compose_group&groupdraft=true&s=draft";
}
else if(h=="9")
{
r=[location.protocol,location.protocol=="https:"?"//ws.mail.qq.com":"//msgopt.mail.qq.com",r].join("");
p="sms_list_v2";
n="readtemplate";
}
else if(h=="11"||/^(LP|ZP)/.test(i))
{
n="bottle_panel";
p="bottle";
}
else{
switch(i.charAt(0))
{case 'C':
if(e==3)
{
p="readmail_ad_conversation";
}
else{
p="readmail_conversation";
}
break;
case '@':
p="readmail_group";
break;
case 'A':
var m={dr:'ad'};
if(i=="AC0000-00000000000000000000001")
{
m={dr:'call'};
}
;return c?'':QMMLCache.folder('1',m,true).split('#')[0];
break;
default:
p=e==3?"readmail_ad":"readmail";
break;
}k=true;
}
if(b)
{
o=["&newwin=true","&compose_new=compose"][e?0:1];
}
else{
o=["","&s=from_unread_list","&s=from_star_list"][d!=1&&d!=2?0:d];
}
var l=k?rdVer(i,0,j):0;
if(!l&&c)
{
return "";
}
q=T(r).replace({cgi:n,mailid:i,folderid:h,folderkey:g,t:p,s:o,sid:getSid(),cache:l?T("&mode=pre&maxage=$maxage$&base=$base$&ver=$ver$").replace({maxage:rdVer.maxage(i),base:rdVer("BaseVer",0),ver:l}):""});
return c?q.split("?")[1]:q;
};
function setGlobalVarValue(b,c,a)
{
var d=getTop();
if(!d.goDataBase)
{
d.goDataBase=new d.Object();
}
if(b&&!a)
{
d.goDataBase[b]=c;
}
return c;
}
function getGlobalVarValue(a)
{
return getTop().goDataBase&&getTop().goDataBase[a];
}
function hideWindowsElement(b,a)
{
a=a||getMainWin();
if(!gbIsIE||gnIEVer>6||(a.gbIsHasHideElements||false)!=(b||false))
{
return;
}
getTop().setGlobalVarValue("WINDOWS_ELEMENT_NOT_DISPLAY",b?"":"true");
a.gbIsHasHideElements=!b;
var c=a.document.body;
E(a.QMReadMail?["select","object","embed"]:["select"],function(d){
E(GelTags(d,c),function(e){
if(b)
{
e.style.visibility=e.getAttribute("savevisibility");
}
else{
e.setAttribute("savevisibility",getStyle(e,"visibility"));
e.style.visibility="hidden";
}
});
});
}
function controlWindowsElement()
{
var a=getTop().getGlobalVarValue("WINDOWS_ELEMENT_NOT_DISPLAY");
if(a=="true")
{
hideWindowsElement(false);
}
}
function setKeepAlive(a)
{
if(getTop().gKeepAliveNum==null)
{
getTop().gKeepAliveNum=0;
}
if(a==null||a.gbIsSetKeepAlive==true)
{
return;
}
a.gbIsSetKeepAlive=true;
getTop().gKeepAliveNum++;
if(getTop().gKeepAliveTimer==null)
{
getTop().gKeepAliveTimer=getTop().setInterval(function(){
getTop().runUrlWithSid("/cgi-bin/readtemplate?t=keep_alive");
},15*60*1000);
}
addEvent(a,"unload",function(){
a.gbIsSetKeepAlive=false;
getTop().gKeepAliveNum--;
if(getTop().gKeepAliveNum==0)
{
getTop().clearInterval(getTop().gKeepAliveTimer);
getTop().gKeepAliveTimer=null;
}
});
}
function encodeNick(a)
{
return a&&a.replace(/\\/g,"\\\\").replace(/\"/ig,"\\\"").replace(/\'/ig,"\\\'")||"";
}
function encodeNickHTML(a)
{
return a&&a.replace(/\&\#92;/ig,"&#92;&#92;").replace(/\&quot;/ig,"&#92;&quot;").replace(/\&\#39;/ig,"&#92;&#39")||"";
}
function decodeNick(a)
{
return a&&a.replace(/\\\"/ig,"\"").replace(/\\\\/ig,"\\")||"";
}
function rollback(a)
{
var b=getGlobalVarValue('DEF_ROLLBACK_ACTION');
if(b&&b.rbkey)
{
confirmBox({title:"\u64A4\u9500\u786E\u8BA4",mode:"prompt",height:135,msg:T(['\u64A4\u9500\u6700\u8FD1\u4E00\u6B21$msg$\u5417\uFF1F']).replace(b),onreturn:function(c){
if(c)
{
QMAjax.send("/cgi-bin/mail_mgr",{method:"POST",content:["sid=",getSid(),"&mailaction=mail_revert&t=mail_mgr2&timekey=",b.rbkey,"&logtype=",a].join(''),onload:function(d,e){
if(d&&e.indexOf("mail_revert successful")>=0)
{
var g=getUrlParams(getMainWin().location)["t"];
if(g=="mail_list"||g=="mail_list_ad"||g=="mail_list_group"||(!g&&getMainWin().location.href.indexOf("/cgi-bin/mail_list?")>-1))
{
QMMLCache&&QMMLCache.upVer();
reloadFrmLeftMain(true,true);
}
else if(g=="folderlist_setting")
{
goUrlMainFrm(getMainWin().location.href.replace(/\#.+/,"").replace(/&s=.+?(&|$)/,"&")+"&s="+getMainWin().getType());
reloadFrmLeftMain(true,false);
}
else{
reloadFrmLeftMain(true,false);
}
setGlobalVarValue('DEF_ROLLBACK_ACTION',null);
showInfo("\u6210\u529F\u64A4\u9500\u6700\u8FD1\u4E00\u6B21"+b.msg);
}
else{
var f=globalEval(e);
showInfo(f&&f.errmsg||("\u64A4\u9500\u6700\u8FD1\u4E00\u6B21"+b.msg+"\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"));
}
}});
}
}});
}
}
var QMPageInit={_oMouseUpListener:[],addPageMouseUpListener:function(a){
this._oMouseUpListener.push(a);
},_logCreater:function(a){
var c=getTop();
if(a==c)
{
var b=new (c.Function)("var _oLogs = arguments.callee.logs;_oLogs.length > 500 && _oLogs.shift();"+"_oLogs.push([+new Date, [].slice.apply(arguments).join('')].join(' '));");
b.logs=new (c.Array)();
return b;
}
else{
return c.log||(c.log=this._logCreater(c));
}
},_debugCreater:function(a){
return function(){
try{
var c=arguments.length,h=arguments[c-1],b=h>100000;
if(typeof (h)=="number"&&(b&&h!=getTop().g_uin))
{
return;
}
}
catch(i)
{
return;
}
if(getTop().Console)
{
if(c==0||(c==1&&b))
{
if(location.host=="dev.mail.qq.com")
{
debugger;
}
}
else{
try{
var d=getTop().Console[a];
d.add.apply(d,arguments);
if(getTop().getUin()=='434537707')
{
var g=arguments[0];
if(g instanceof Error||g.stack||(g.fileName&&g.lineNumber))
{
try{
(console&&console.warn?console.warn:debug)(g.stack||(g.fileName?g.fileName+' '+g.message:g.message)||g);
if(getTop().location.href.indexOf('debug')!=-1)
{
debugger;
}
}
catch(i)
{
}
}
else if((''+g).indexOf('Cannot')!=-1)
{
debugger;
}
}
}
catch(f)
{
}
}
}
};
},_traceCreater:function(a){
return function(e,c,d,f,b){
if(getTop().QMTimeTracer&&(!b||b==getTop().g_uin))
{
getTop().QMTimeTracer.getTracer().trace(e,c,a,d,f);
}
};
},_initLocation:function(a){
var b=a.location;
b._bIsAnalyse=false;
b.params={};
var d=b.href,c=getTop();
if(a==c&&getSid()&&d.indexOf("/cgi-bin/")>-1&&d.indexOf("/frame_html?")==-1&&d.indexOf("/log")==-1&&(d.indexOf("/ftnExs_")==-1||d.indexOf("/ftnExs_files")>-1)&&!a.gbIsNoCheck&&getUrlParams(b)["nocheckframe"]!="true")
{
if(d.indexOf("/cgi-bin/bizmail")==-1&&d.indexOf("/cgi-bin/ftnDownload302")==-1)
{
goNewWin(b,true,!a.gbSupportNW);
}
else{
goNewWin(b,true,false,{frametmpl:"dm_frame",frametmplparam:"&dmtype=bizmail"});
}
}
else if(a!=c&&c.bnewwin&&a==getMainWin())
{
if(!a.gbSupportNW)
{
goNewWin(b,true,true);
}
else if(getUrlParams(b)["newwin"]!="true")
{
a.location.replace(d+"&newwin=true");
}
}
},_initPageKeyDown:function(b,a){
var s=b.srcElement||b.target,e=b.ctrlKey,i=b.altKey,g=b.shiftKey,d=b.metaKey,k=b.keyCode,j=s.type=="text"||s.tagName=="TEXTAREA",f=a&&(s.tagName=="INPUT"&&s.type!="button"),c=s.tagName=="BUTTON"||s.type=="button";
switch(k)
{case 8:
if(!j&&goBackHistory())
{
preventDefault(b);
}
break;
case 13:
if(!c&&((!j&&QMReadedItem.read(s))||f))
{
preventDefault(b);
}
break;
case 37:
case 39:
if(e)
{
goPrevOrNextMail(k==39);
preventDefault(b);
}
break;
case 38:
case 40:
case 188:
case 190:
var h=k==38||k==188;
if(!j&&getMainWin()&&getMainWin().QMReadedAddr)
{
if(getMainWin().QMReadedAddr.move(!h))
{
preventDefault(b);
}
}
else{
if(!j)
{
if(QMReadedItem.move(!h))
{
preventDefault(b);
}
}
}
break;
case 46:
if(!j)
{
var l=S(g?"quick_completelydel":"quick_del",getMainWin()),m=g?S("quick_del",getMainWin()):null,n=S("del",getMainWin());
if(isShow(l)||isShow(m)||isShow(n))
{
preventDefault(b);
fireMouseEvent((l||m||n),"click");
}
}
break;
case 88:
if(!j&&QMReadedItem.check(g))
{
preventDefault(b);
}
break;
case 90:
var u=s.tagName;
debug([e,u=="INPUT",u=="TEXTAREA"]);
if(e&&!(u=="INPUT"&&s.type.toLowerCase()!="button"||u=="TEXTAREA"))
{
debug("rollback");
rollback(1);
}
break;
case 65:
if(!j&&(d||e))
{
preventDefault(b);
var o=S("frm",getMainWin());
if(o)
{
var q=GelTags("table",o)[0];
if(q)
{
var p=GelTags("input",q)[0];
if(p)
{
!p.addEventListener&&p.click&&p.click()||fireMouseEvent(p,"click");
}
}
}
}
break;
case 27:
var t=getTop();
if(t.QMEditor)
{
var r=t.QMEditor.getEditor('__FullScreenEditor__');
if(r&&r.getEditorCustomVar('FullScreenToolbar.bUseFullEdtior'))
{
r.getEditorCustomVar('FullScreenToolbar.gooutFullScreenEditor')();
}
}
break;
}
},_initDebug:function(a){
a.Log=a.log=this._logCreater("log");
a.Debug=a.debug=this._debugCreater("debug");
a.Trace=a.trace=this._traceCreater(a);
if(getTop().getUin()!='434537707'&&getTop().getUin()!='670785827')
{
a.onerror=doPageError;
}
},_initMainWinEvent:function(a){
if(a!=getTop()&&a==getMainWin())
{
getTop().Scale.setBodyClass(a);
getTop().QMHistory.recordCurrentUrl(a);
getTop().QMHistory.recordActionFrameChange("clear");
var d=this,e=a.location.href,c=e.indexOf("t=sms_list_v2")>0,b=e.indexOf("t=bottle")>0;
addEvents(a,{load:function(){
initAD(a);
},unload:function(){
showProcess(0);
if(isshowMsg()&&getTop().gMsgDispTime&&now()-getTop().gMsgDispTime>2000)
{
hiddenMsg();
}
c&&startWebpush(2);
}});
c&&closeWebpush(2);
b&&closeWebpush(4);
getTop().QMWebpushTip&&getTop().QMWebpushTip.hideAll(3000);
a.setTimeout(function(){
if(!(getTop().QQPlusMail&&getTop().QQPlusMail.getPageTitle()))
{
a.document.title&&(getTop().document.title=a.document.title);
}
},200);
}
},_initTopWinEvent:function(a){
if(a==getTop()&&a.location.href.indexOf("/frame_html")!=-1)
{
addEvents(a,{load:function(h){
var f=getTop().document.body;
function c(e)
{
var j=e.srcElement||e.target;
for(var i=0;j&&i<3;j=j.parentNode,i++)
{
if(j.tagName=="A")
{
break;
}
}
return j||{};
}
;function g(e)
{
if((e.target||e.srcElement)==f)
{
preventDefault(e);
}
}
function d(e)
{
var j=c(e);
if(j.tagName=="A")
{
if(j.getAttribute("initlized")!="true")
{
j.setAttribute("initlized","true");
var i=j.onclick;
j.onclick=function(k){
var s=k||getTop().event,r=parseInt(j.getAttribute("md"));
if(!isNaN(r)&&r>0)
{
getTop().clearTimeout(r);
j.setAttribute("md","0");
var q=s.shiftKey,l=s.ctrlKey,o=s.metaKey,p=q||l||o||j.target=='_blank',v=j.getAttribute("nocheck"),u=trim(j.href),n=!(u==""||u.indexOf("javascript:")==0),m=trim(j.href).indexOf("http")==0;
function t()
{
if(i)
{
i.call(j);
preventDefault(s);
}
if(m)
{
if(p&&n)
{
var x=getTop().QMDistributeDomain.removeHost(j.href);
if(/^(\/cgi-bin)/.test(x))
{
j.href=[getTop().getTopHost(),x].join("");
}
open(j.href);
preventDefault(s);
}
else{
switch(j.target)
{case "mainFrame":
var y=j.href;
goUrlMainFrm(y+(y.indexOf("?")!=-1?"#stattime="+now():""),false);
preventDefault(s);
break;
case "_parent":
case "_self":
try{
var x=getTop().QMDistributeDomain.removeHost(j.href);
if(a.parent===a&&/^(\/cgi-bin)/.test(x))
{
a.location.href=getTop().getTopHost()+x;
}
else{
a.location.href=j.href;
}
}
catch(w)
{
}
preventDefault(s);
break;
default:
break;
}
}
}
}
;if(v=="false"||(!p&&v!="true"&&(n&&j.target!="_blank")))
{
preventDefault(s);
QMPageInit._runFuncAfterCheckMainFrame(t);
}
else{
t();
}
}
};
}
j.setAttribute("md",getTop().setTimeout(function(){
j.setAttribute("md","0");
},1000));
}
}
function b(e)
{
var i=c(e);
if(i.tagName=="A"&&i.getAttribute("initlized")!="true")
{
preventDefault(e);
}
}
addEvents(f,{mousewheel:g,mousedown:d,keydown:d,click:b});
}});
}
},_detectMouseT:function(c,b){
var f,a=["u","1","2","3","4","6"],e=getEventTarget(b),d=function(g){
if(g&&g.getAttribute)
{
var h=g.getAttribute("t");
for(var j in a)
{
if(a[j]==h)
{
return h;
}
}
}
};
f=d(e);
while(e&&e!=c.document.body&&f)
{
if(f=="u")
{
e=e.parentNode;
f=d(e)||f;
}
else{
return e;
}
}
return null;
},_initPageMouse:function(c,b,a){
var j=this._detectMouseT(b,a),h;
if(!j&&c=="over"&&(h=b["__simpleTipDivShared"]))
{
h&&addClass(h,"smt_hide");
h=null;
}
if(j)
{
var q=j.getAttribute("t");
switch(q)
{case "1":
case "2":
case "6":
case "3":
waitFor(function(){
return getTop().QMProfileTips;
},function(s){
if(s)
{
getTop().QMProfileTips.doMouseEvent(c,b,j);
}
});
break;
case "4":
var p="simpletip",o="stitle",n="smt_hide";
if(j.title)
{
j.setAttribute(o,j.title);
j.title="";
}
if(c=="over")
{
var r=j.getAttribute(o),i=S(p,b);
if(!i)
{
insertHTML(b.document.body,"afterBegin",'<div id="'+p+'" class="smt_container smt_up smt_hide"><span class="smt_inner"></span></div>');
i=S(p,b);
}
if(i)
{
i.firstChild.innerHTML!=r&&(i.firstChild.innerHTML=r);
rmClass(i,n);
var k=calcPos(j),e=(k[1]+k[3])/2;
k[0]-=3;
k[2]+=3;
var d=parseInt(i.offsetHeight),f=parseInt(i.offsetWidth),g=calcAdjPos([k[0],e,k[2],e],f,d,b,2),m=i.className,l=g[2]==k[0]?"smt_down":"smt_up";
i.className="smt_container "+l+" smt_id_"+j.id;
i.style.top=g[0]+"px";
i.style.left=(g[3]-f/2)+"px";
b["__simpleTipDivShared"]=i;
}
}
else if(c=="out")
{
var i=S(p,b);
i&&addClass(i,n);
b["__simpleTipDivShared"]=null;
}
break;
}
}
},_initCallFunc:function(a){
a.call=function(){
var b=arguments,c=[],f,g,d=b[0].split("."),e=_fFunc=a;
for(f=1,g=b.length;f<g;f++)
{
c.push(b[f]);
}
for(f=0,g=d.length;f<g&&_fFunc;f++)
{
e=_fFunc;
_fFunc=_fFunc[d[f]];
}
if(typeof _fFunc=="function")
{
return _fFunc.apply(e,c);
}
};
},_initPageEventDelay:function(a){
var b=this;
a.setTimeout(function(){
var c=(getUrlParams(a.location)["t"]||"").indexOf("compose")==0;
addEvents(a.document,{mousedown:OprMouseDown,touchend:getTop().iPadCloseMenu||function(){
},keydown:function(d){
b._initPageKeyDown(d,c);
},click:function(d){
getTop().QMWebpushTip&&getTop().QMWebpushTip.hideAll(3000);
preventDefault2(d);
},mouseover:function(d){
b._initPageMouse("over",a,d);
},mouseout:function(d){
b._initPageMouse("out",a,d);
},mouseup:function(d){
getTop().E(b._oMouseUpListener,function(f){
try{
f(d);
}
catch(g)
{
}
});
}});
},100);
},_initlize:function(a){
a=a||window;
if(a.gIsInitPageEventProcess)
{
return;
}
getTop().init3rdScriptCheck&&getTop().init3rdScriptCheck(a.document);
a.gIsInitPageEventProcess=true;
var b=0;
try{
b=1;
this._initDebug(a);
b=2;
this._initLocation(a);
b=3;
this._initMainWinEvent(a);
b=4;
this._initTopWinEvent(a);
b=5;
this._initPageEventDelay(a);
b=6;
this._initCallFunc(a);
getTop().gbIsMac&&a.document.documentElement&&(a.document.documentElement.className+=" MacOS");
}
catch(c)
{
doPageError(c.message,a.location.href,"initPageEvent_processid:"+b);
}
try{
a.document.execCommand("BackgroundImageCache",false,true);
}
catch(c)
{
}
},_runFuncAfterCheckMainFrame:function(a){
try{
if(getMainWin().exitConfirm)
{
return getMainWin().exitConfirm(a);
}
}
catch(b)
{
debug(b.message);
}
a();
}};
function initPageEvent(a)
{
QMPageInit._initlize(a);
}
(function(){
initPageEvent(window);
})();
function getTopWin()
{
return getTop();
}
function getMainWin()
{
return F("mainFrame",getTop())||getTop();
}
function getActionWin()
{
return F("actionFrame",getTopWin());
}
function getLeftWin()
{
return getTop();
}
var GetLeftWin=getLeftWin;
function getLeftDateWin()
{
return F("leftFrame",getTop());
}
function reloadFrm(a)
{
if(a&&a!=getTop())
{
try{
if(a.location.search)
{
var c=a.location.href.split("#")[0].split("?"),e="r="+now();
c[1]=!c[1]?e:(("&"+c[1]+"&").replace(/&r=.*?&/,"&")+e).slice(1);
var d=c.join("?");
if(a.parent!=a)
{
d=QMDistributeDomain.removeDefaultHost(d);
QMDistributeDomain.isRelativeUrl(d)&&(d=QMDistributeDomain.addHost(d));
}
a.location.replace(d);
return true;
}
}
catch(b)
{
}
}
return false;
}
function reloadLeftWin(c)
{
var a;
if(a=S("leftFrame",getTop()))
{
var b=T('/cgi-bin/folderlist?sid=$sid$&r=$rand$').replace({sid:getSid(),rand:Math.random()});
b=QMDistributeDomain.addHost(b);
if(c===true)
{
setTimeout(function(){
a.src=b;
});
return;
}
if(!reloadFrm(getLeftDateWin()))
{
a.src=b;
}
}
}
function reloadAllFrm(d,c,a,b)
{
function e(f)
{
var g=arguments.callee;
getTop().setTimeout(f,g._time);
g._time+=200;
}
e._time=0;
if(b==null||b)
{
e(function(){
reloadFrm(getMainWin());
});
}
if(a==null||a)
{
e(function(){
reloadFrm(reloadLeftWin());
});
}
}
function reloadFrmLeftMain(a,b)
{
reloadAllFrm(false,false,a,b);
}
function goUrlTopWin(b,a)
{
goUrl(getTop(),b,!a);
}
function goUrlMainFrm(c,b,a)
{
if(b!=false)
{
reloadLeftWin();
setTimeout(function(){
goUrl(S("mainFrame",getTop())||getTop(),c,!a);
},300);
}
else{
goUrl(S("mainFrame",getTop())||getTop(),c,!a);
}
}
function _trimUrlSearchParam(a)
{
return a&&a.substr&&("?"+(["&",a.substr(1),"&"].join("").replace(/&sid=.*?&/ig,"&").replace(/&loc=.*?&/ig,"&").replace(/&newwin=true/ig,"&").slice(1,-1)));
}
function goNewWin(d,b,a,c)
{
var f="",h="",i="";
if(typeof (d)=="object")
{
f=d.pathname;
h=d.search;
}
else{
var e=d.indexOf("?");
f=d.substring(0,e).replace(/^(https?:)?\/\/[^\/]+/,'');
h=d.substr(e);
}
if(c)
{
i=c.frametmpl;
}
else{
i=a?"frame_html":"newwin_frame";
}
var g='';
if(f.indexOf('reader_')>-1)
{
g=getTop().location.protocol+"//mail.qq.com";
}
var j=T(g+'/cgi-bin/frame_html?t=$t$&sid=$sid$&url=$url$').replace({t:i,sid:getSid(),url:encodeURI(f+_trimUrlSearchParam(h))});
if(c)
{
j+=c.frametmplparam;
}
if(b)
{
goUrlTopWin(j,true);
}
else{
if((window.parent==window||j.indexOf("t=newwin_frame")>-1)&&/^(\/cgi-bin)/.test(j))
{
window.open([getTop().getTopHost(),j].join(""));
}
else{
window.open(j);
}
}
}
function isMaximizeMainFrame()
{
return getTop().maximizeMainFrame._bIsMaximizeMainFrame;
}
function maximizeMainFrame(a)
{
var f=S("mainFrame",getTop()),e=S("leftPanel",getTop()),d=S("imgLine",getTop());
if(!f||!d||!e||a!=2&&(a==0)==!isMaximizeMainFrame())
{
return false;
}
var c=getTop().maximizeMainFrame,b=c._bIsMaximizeMainFrame=a==2?!isMaximizeMainFrame():(a?true:false);
if(b)
{
c._sBackupMarginLeft=e.style.width;
c._sImgParentCssText=d.parentNode.style.cssText;
}
f.parentNode.style.marginLeft=b?"5px":c._sBackupMarginLeft;
e.parentNode.style.cssText=b?"border-left:none;":"";
d.parentNode.style.cssText=(b?"border-left:none;margin-left:0;padding:0;":"")+c._sImgParentCssText;
show(e,!b);
show(d,!b);
show(S("qqplus_panel",getTop()),!b);
show(S("folder",getTop()),!b);
}
function filteSignatureTag(b,a)
{
var c=typeof b=="string"?b:"";
if(a=="2LOWCASE")
{
return c.replace(/<sign(.*?)\/>/ig,"<sign$1>").replace(/<qzone(.*?)\/>/ig,"<qzone$1>").replace(/<taotao(.*?)\/>/ig,"<taotao$1>").replace(/<\/sign>/ig,"</sign>").replace(/<\/qzone>/ig,"</qzone>").replace(/<\/taotao>/ig,"</taotao>").replace(/<(\/?)includetail>/ig,"<$1includetail>");
}
if(a=="FILTE<:")
{
return c.replace(/<[:\/]?sign.*?>/ig,"").replace(/<[:\/]?qzone.*?>/ig,"").replace(/<[:\/]?taotao.*?>/ig,"").replace(/<[:\/]?(\/:)?includetail.*?>/ig,"");
}
else{
return c.replace(/<[:\/]?sign.*?>/ig,"").replace(/<[:\/]?qzone.*?>/ig,"").replace(/<[:\/]?taotao.*?>/ig,"").replace(/<[:\/]?(\/:)?includetail.*?>/ig,"");
}
}
function getSignatureHeader()
{
return T(['<div style="color:#909090;font-family:Arial Narrow;font-size:12px">','------------------','</div>']);
}
window.g_sBaseImageUrl=getTop().getPath("stationery");
if(!getTop().goUserInfo)
{
getTop().goUserInfo={_sStatus:'init',_fCallbacks:{},_oData:{},isLoaded:function(){
return getTop().goUserInfo._bHasLoad;
},_doCallback:function(){
for(var d in getTop().goUserInfo._fCallbacks)
{
for(var b=0,c=getTop().goUserInfo._fCallbacks[d].length;b<c;b++)
{
try{
getTop().goUserInfo._fCallbacks[d][b](getTop().goUserInfo.get(d));
}
catch(a)
{
}
}
}
getTop().goUserInfo._fCallbacks={};
},wait:function(a){
waitFor(function(){
return getTop().goUserInfo._sStatus=='ready';
},function(){
a();
});
},get:function(a){
if(getTop().goUserInfo._sStatus=='init')
{
getTop().goUserInfo.reset();
return '';
}
else if(getTop().goUserInfo._sStatus=='ready')
{
if(typeof getTop().goUserInfo._oData[a]==='undefined')
{
return '';
}
return getTop().goUserInfo._oData[a];
}
},deferget:function(b,a){
if(getTop().goUserInfo._sStatus=='init')
{
if(typeof getTop().goUserInfo._fCallbacks[b]==='undefined')
{
getTop().goUserInfo._fCallbacks[b]=[];
}
getTop().goUserInfo._fCallbacks[b].push(a);
getTop().goUserInfo.reset();
}
else{
a(getTop().goUserInfo._oData[b]);
}
},set:function(a){
extend(getTop().goUserInfo._oData,a);
},reset:function(){
if(getTop().goUserInfo._sStatus=='loading')
{
return;
}
getTop().goUserInfo._sStatus='loading';
var a=T(["/cgi-bin/getcomposedata?t=signature&fun=compose&sid=$sid$&qzonesign=$qzonesign$&r=$rand$"]).replace({sid:getSid(),qzonesign:"",rand:now()});
QMAjax.send(a,{method:"GET",timeout:10000,headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(b,c){
getTop().goUserInfo._bHasLoad=true;
var d=trim2(c);
if(b&&d.indexOf("(")==0)
{
getTop().goUserInfo._sStatus='ready';
getTop().goUserInfo.set((function(){
return (new Function("return "+d))();
})());
bindAccount();
}
else{
getTop().goUserInfo._sStatus='init';
}
securityTip();
getTop().goUserInfo._doCallback();
}});
}};
}
function setDefaultSender(a)
{
getTop().goUserInfo.set({"DEF_MAIL_FROM":a});
}
function getMailZoomTool()
{
return getTop().goUserInfo.get("DEF_MAILZOOMTOOL")=="1";
}
function setMailZoomTool(a)
{
getTop().goUserInfo.set({"DEF_MAILZOOMTOOL":a?"1":"0"});
}
function closeRecognizeNickName()
{
ossLog("realtime","all","stat=tips&type=know&tipid=66");
getTop().goUserInfo.set({"DEF_RECOGNIZENICKNAME":false});
}
function getUserInfoText(a)
{
var b=S("user"+a,getTopWin())||{};
return fixNonBreakSpace(b.innerText||b.textContent);
}
function getUserInfo(a)
{
return (S("user"+a,getTopWin())||{}).innerHTML||"";
}
function setUserInfo(a,b)
{
try{
S("user"+a,getTopWin()).innerHTML=htmlEncode(b);
return true;
}
catch(c)
{
return false;
}
}
function msgBox(e,f,a,b,d,c)
{
if(window!=getTop())
{
return getTop().msgBox(e,f,a,b,d,c);
}
var h=e;
if(!h)
{
var g=S("msg_txt",c||window)||S("msg_txt",getActionWin());
if(g&&(g.innerText||g.textContent)&&g.getAttribute("ok")!="true")
{
h=filteScript(g.innerHTML);
g.setAttribute("ok","true");
}
}
if(!h||!(h=trim(h.replace(/[\r\n]/ig,""))))
{
return;
}
hiddenMsg();
if(f=="dialog")
{
alertBox({msg:h,title:d||"\u786E\u8BA4"});
}
else{
setClass(arguments.callee.createMessageBox().firstChild,f=="success"?"msg":"errmsg").innerHTML=h;
showMsg();
if(a)
{
getTop().gMsgBoxTimer=getTop().setInterval(getTop().hiddenMsg,b||5000);
}
getTop().gMsgDispTime=now();
}
}
;msgBox.createMessageBox=function(a){
var c=getTop();
var b=S("msgBoxDIV",c);
if(!b)
{
a=isNaN(a)?(c.bnewwin?0:43):a;
insertHTML(Scale.getContainer(),"afterBegin",T(['<div id="msgBoxDIV" style="position:absolute;width:100%;display:none;','padding-top:2px;height:24px;*height:24px;_height:20px;top:$top$px;text-align:center;">','<span></span>','</div>']).replace({top:a}));
b=S("msgBoxDIV",c);
}
else if(!isNaN(a))
{
b.style.top=a+'px';
}
return b;
};
function isshowMsg()
{
return getTop().isShow("msgBoxDIV");
}
function hiddenMsg()
{
if(getTop().gMsgBoxTimer)
{
getTop().clearInterval(getTop().gMsgBoxTimer);
getTop().gMsgBoxTimer=null;
}
getTop().show("msgBoxDIV",false);
getTop().showProcess(0);
}
function displayGrayTip(b,a)
{
var c=b.style;
c.visibility=!a?"hidden":"";
c.height=!a?"0":"";
}
function showMsg()
{
getTop().show("msgBoxDIV",true);
}
function showError(c,b,a)
{
var g=''+c;
var h="\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5";
if(!c)
{
g=h;
}
else{
var d=["null","undefined"];
for(var j=0;j<d.length;j++)
{
if(g.indexOf(d[j])!=-1)
g=h;
}
}
msgBox(g,"",b!=-1,b||5000);
var e=S("msgBoxDIV",getTop());
c&&postErrMsgLog(g);
if(e&&a)
{
var f=[];
E(GelTags("script",e),function(i){
f.push(i.innerHTML);
});
globalEval(f.join(";"),getTop());
}
}
function postErrMsgLog(a)
{
if(a)
{
ossLog("realtime","all","stat=showerrlog&msg="+encodeURIComponent(a));
}
}
function showInfo(b,a)
{
msgBox(b,"success",a!=-1,a||5000);
}
function showProcess(c,b,d,e,a)
{
var i="load_process",h=showProcess.createProcessBox();
if(c==0)
{
return show(h,false);
}
hiddenMsg();
show(h,true);
var f=c==2;
if(f)
{
var g=parseInt(d);
if(isNaN(g))
{
g=0;
}
else{
g=Math.max(0,Math.min(100,g));
}
if(e)
{
S(i+"_plan_info",getTop()).innerHTML=e+(g?":":"");
}
S(i+"_plan_rate",getTop()).innerHTML=S(i+"_plan_bar",getTop()).style.width=[g,"%"].join("");
}
else{
if(d)
{
S(i+"_info",getTop()).innerHTML=d;
}
}
show(S(i+"_plan",getTop()),f);
show(S(i+"_img",getTop()),f?false:b);
show(S(i+"_plan_info",getTop()),f);
show(S(i+"_plan_rate",getTop()),f&&g);
show(S(i+"_info",getTop()),!f);
show(S(i+"_cancel",getTop()),a!=false);
}
showProcess.createProcessBox=function(a){
var c="load_process";
var b=S(c,getTop());
if(!b)
{
insertHTML(Scale.getContainer(),"afterBegin",T(['<table id="$id$" cellspacing=0 cellpadding=0 border=0 ','style="position:absolute;top:$top$px;left:0;width:100%;display:none;z-index:9999;">','<tr><td align="center">','<table id="$id$_pos" cellspacing=0 cellpadding=0 border=0 class="autosave autosave_txt" style="height:20px;"><tr>','<td style="width:2px;"></td>','<td id="$id$_img" style="padding:0 0 0 5px;">','<img src="$image_path$ico_loading1e9c5d.gif" style="width:16px;height:16px;vertical-align:middle;">','</td>','<td id="$id$_plan" valign=center style="padding:0 0 0 5px;">','<div style="font:1px;border:1px solid white;width:104px;text-align:left;">','<div id="$id$_plan_bar" style="font:1px;background:#fff;height:8px;margin:1px 0;width:50%;"></div>','</div>','</td>','<td id="$id$_plan_info" style="padding:0 0 0 5px;"></td>','<td id="$id$_plan_rate" style="width:40px;text-align:right;padding:0;"></td>','<td id="$id$_info" style="padding:0 0 0 5px;"></td>','<td id="$id$_cancel" style="padding:0 0 0 5px;">','[<a onclick="getTop().cancelDoSend();" nocheck="true" style="color:white;">\u53D6\u6D88</a>]','</td>','<td style="padding:0 0 0 5px;"></td>','<td style="width:2px;"></td>','</tr></table>','</td></tr>','</table>']).replace({id:c,top:isNaN(a)?(getTop().bnewwin?0:45):a,image_path:getPath("image",true)}));
b=S(c,getTop());
}
else if(!isNaN(a))
{
b.style.top=a+'px';
}
return b;
};
function getProcessInfo()
{
var d="load_process",c=getTop();
if(isShow(S(d,c)))
{
var a=S(d+"_plan_rate",c),b=S(d+"_info",c);
if(b&&isShow(b))
{
return b.innerHTML;
}
if(a&&isShow(S(d+"_plan",c)))
{
return parseInt(a.innerHTML);
}
}
return "";
}
function replaceCss(b,a)
{
replaceCssFile("skin",[getPath("style"),getFullResSuffix(["skin",typeof a=="undefined"?getPath("skin"):a,".css"].join(""))].join(""),(b||window).document);
}
function _getLogoSrc(b,a)
{
var c=getTop();
return !a&&c.gLogoUrl?c.gLogoUrl.replace(/(.*)_[^_]+_([^_]+)/,"$1_"+b+"_$2"):TE(['$images_path$logo','$@$if($bFoxmail$)$@$','_foxmail','$@$else$@$','$sSubfolder$','$@$endif$@$','/logo_$nSkinId$_','$@$if($bFoxmail$)$@$','0','$@$else$@$','$sLogoid$','$@$endif$@$.gif']).replace({images_path:getPath("image"),bFoxmail:a,sSubfolder:c.gsLogoFolder,nSkinId:b,sLogoid:(c.gsLogoFolder||b==0)?(c.gLogoId||0):0});
}
function doRealChangeStyle(d,c,b,e,a)
{
var k=getTop(),h=k.gTempSkinId=c,j=getMainWin(),l=[k,j],f=a||false,i=S("imglogo",k);
if(i)
{
if(typeof e=="undefined"||e=="")
{
i.style.backgroundImage="";
if(c<10000000&&k.gLogoUrl)
{
var n=_getLogoSrc(h,b);
var g=n.lastIndexOf(".");
var m=[n.substring(0,g),"_2x.",n.substring(g+1)].join("");
i.style.cssText=["background-image:url(",n,");","background-image:-webkit-image-set(url(",n,") 1x,","url(",m,") 2x);"].join("");
i.src="/zh_CN/htmledition/images/spacer.gif";
}
}
else{
i.style.backgroundImage="url("+e+")";
}
i.className=f?"domainmaillogo":"maillogo";
}
E(k.goDialogList,function(o,p){
l.push(F(p,getTop()));
});
E(GelTags("iframe",j.document),function(o){
l.push(o.contentWindow);
});
E(l,function(o){
replaceCss(o,h);
});
removeSelf(d);
setTimeout(resizeFolderList);
rdVer("BaseVer",1);
}
function changeStyle(a,b)
{
var d=false,c=false;
var g=getTop().getGlobalVarValue("DOMAIN_MAIL_LOGO_URL")||{},h=getTop().goUserInfo.get("DEF_MAIL_FROM")||'';
if(b)
{
c=b.indexOf("/cgi-bin/viewfile")>=0;
if(c)
{
g[h]=b;
h&&setGlobalVarValue("DOMAIN_MAIL_LOGO_URL",g);
}
}
else if(h&&g[h])
{
b=g[h];
c=b&&b.indexOf("/cgi-bin/viewfile")>=0;
}
var f=typeof a=="undefined"||a==""?getTop().skin_path:a,j=getTop().gsLogoFolder,m=d?0:(j||f==0?(getTop().gLogoId||0):0),i=d?"_foxmail":"",e=getTop().changeStyle,k=e._sProcessId,l=e._sProcessId=["skinCssCache",f,i,b||m].join("_");
if(l!=k)
{
cacheByIframe([["css",getPath("style"),"skin"+f+".css"],!!b?["img","",b]:["img",_getLogoSrc(f,d)]],{onload:function(){
doRealChangeStyle(this,f,d,b,c);
}});
}
}
function osslogCompose(a,c,e,d,b)
{
getTop().ossLog("delay","all",T(['stat=compose_send','&t=$time$&actionId=$actionId$&mailid=$mailid$','&isActivex=$isActivex$&failCode=$failCode$','&$other$']).replace({time:a,actionId:c,mailId:e,failCode:d||0,other:["&cgitm=",getTop().g_cgiTimeStamp||-1,"&clitm=",getTop().g_clientTimeStamp||-1,"&comtm=",b&&b.valueOf?b.valueOf():-1].join('')}));
}
function osslogAjaxCompose(b,a,d,e,c)
{
var g=getTop(),f=["IE","FF","Safari","Chrome","Opera","QBIE","TT","NS"],j="gbIs",h="Other";
for(var k=0;k<f.length;k++)
{
if(g[j+f[k]])
{
h=f[k];
break;
}
}
ossLog("delay","all",T(['stat=compose_ajax_send','&server=$server$&browser=$browser$','&status=$status$&code=$code$&section=$section$&sendtype=$type$&ran=$ran$','&filesuffix=$filesuffix$']).replace({ran:now(),server:getCookie("ssl_edition")||location.host,browser:h,status:b,code:a,section:d,type:e,filesuffix:(/.*\.(.*)/g).test(c)?RegExp.$1:""}));
}
;(function(){
var h=getTop();
var f=["IE","FF","Safari","Chrome","Opera","QBIE","TT","NS"];
;var e=15000;
var i;
var a=function(){
if(i)
{
return i;
}
i='other';
for(var l=0;l<f.length;l++)
{
if(h["gbIs"+f[l]])
{
i=f[l];
break;
}
}
return i;
};
var c=function(){
return (new Date()).getTime();
};
var j=function(l){
this.mnStartTime=c();
this.mnUsedTime=e*1.2;
this.mnName=l;
};
j.prototype={end:function(){
this.mnUsedTime=c()-this.mnStartTime;
},abort:function(){
this.mnUsedTime=-2;
}};
var k=function(l){
this._moList={};
this._moWaitTimer=null;
this._mfEndCB=l;
};
k.prototype={mnMaxWaitTime:e,moListItems:['WScreen','editor','addr','page'],_refreshTimer:function(){
var l=this;
if(l._moWaitTimer)
{
clearTimeout(l._moWaitTimer);
}
l._moWaitTimer=setTimeout(function(){
l.end();
},l.mnMaxWaitTime);
},addItem:function(l){
this._moList[l]=new j(l);
this._refreshTimer();
},hasItem:function(l){
return (l in this._moList);
},saveItem:function(l){
if(this._moList[l])
{
this._moList[l].end();
}
if(this.isEnd())
{
this.end();
}
},isOkItem:function(l){
return this._moList[l]&&this._moList[l].mnUsedTime>=0;
},ossLog_:function(){
var l=[];
var m=this;
for(var n in m._moList)
{
l.push(n+'='+m._moList[n].mnUsedTime);
}
debug(l,2);
ossLog("delay","all",T(['stat=compose_init_time','&browser=$browser$','&uin=$uin$','&$data$&ran=$ran$']).replace({ran:h.now(),uin:h.getUin(),browser:a(),data:l.join('&')}));
},end:function(){
if(this._moWaitTimer)
{
clearTimeout(this._moWaitTimer);
this._moWaitTimer=null;
}
this.ossLog_();
if(this._mfEndCB)
{
this._mfEndCB(this);
}
this._moList={};
},isEnd:function(){
var l=this;
for(var m in l.moListItems)
{
if(!l.isOkItem(l.moListItems[m]))
{
return false;
}
}
return true;
},abort:function(){
if(this._moWaitTimer)
{
clearTimeout(this._moWaitTimer);
}
this._moList={};
}};
var g;
var b=function(){
g=new k(function(){
g=null;
});
};
var d=function(l){
if(!g)
{
b();
}
else if(g.hasItem(l))
{
g.abort();
if(g.isEnd())
{
g.end();
}
b();
}
g.addItem(l);
};
d.end=function(l){
if(g)
{
g.saveItem(l);
}
};
window.ossLogComposeInitTime=d;
})();
function recodeComposeStatus(a,c,b,d)
{
var e=0,f=getTop().gSendTimeStart;
if(!f||!f.valueOf)
{
if(!d)
{
return;
}
}
else{
e=now()-f.valueOf();
getTop().gSendTimeStart=null;
}
osslogCompose(e,a,c,b,f);
getTop().isUseActiveXCompose=false;
}
function errorProcess(a)
{
if(typeof getMainWin().ErrorCallBack=="function")
{
getMainWin().ErrorCallBack(a);
}
else if(typeof getTop().ErrorCallBack=="function")
{
getTop().ErrorCallBack(a);
}
}
function doPostFinishCheck(c,b,a)
{
if(c)
{
var k="",d=false,i=S(c,b),j=F(c,b),e=-1;
try{
e=0;
if(!i||i.getAttribute("deleted")=="true")
{
return;
}
e=1;
var f=j.document.body,d=!f.className&&!f.style.cssText;
e=2;
if(d)
{
var g=j.document.documentElement;
k=(g.textContent||g.innerText||"").substr(0,30);
}
}
catch(h)
{
doPageError([c,h.message].join(":"),j&&j.location&&j.location.href||c,e);
d=h.message||"exception";
}
QMHistory.recordActionFrameChange();
if(d)
{
callBack.call(i,a,[k]);
errorProcess();
}
}
}
function actionFinishCheck()
{
doPostFinishCheck("actionFrame",this.contentWindow||getTop(),function(a){
showError(gsMsgLinkErr);
});
}
function doSendFinishCheck()
{
doPostFinishCheck("sendmailFrame",getTop(),function(a){
recodeComposeStatus(2,null,a||0);
msgBox(T(['\u7531\u4E8E\u7F51\u7EDC\u539F\u56E0\uFF0C\u90AE\u4EF6\u53D1\u9001\u5931\u8D25\uFF01','[<a href="/cgi-bin/switch2service?sid=$sid$&errcode=-1&time=$time$&cginame=sendmail&t=error_report">\u53D1\u9001\u9519\u8BEF\u62A5\u544A</a>]']).replace({time:formatDate(new Date(),"$YY$$MM$$DD$$hh$$mm$$ss$")}),"dialog",true,0,"\u5931\u8D25\u4FE1\u606F");
});
}
function submitToActionFrm(a)
{
try{
a.submit();
return true;
}
catch(b)
{
showError(a.message);
return false;
}
}
function afterAutoSave(b,c,d,a)
{
var l=0,u,w;
try{
var s=getTop().getMainWin();
function f()
{
if(disableAll)
{
disableAll(false);
}
}
l=1;
if(c==""||!c)
{
return f();
}
l=2;
if(!s||!S("fmailid",s))
{
return f();
}
l=3;
if(c.charAt(0)=='@')
{
w=S("draftmailid",s).value;
}
else{
w=S("fmailid",s).value;
}
if(w!=c)
{
if(c.charAt(0)=='@')
{
S("draftmailid",s).value=c;
}
else{
S("fmailid",s).value=c;
}
getTop().setTimeout(function(){
reloadLeftWin();
},0);
}
l=4;
var r=b.split(" |"),q=[],m=s.QMAttach.getExistList();
for(var x=0,h=m.length;x<h;x++)
{
var t=S("Uploader"+m[x],s);
if(t&&!t.disabled&&t.value!="")
{
q.push(t);
}
}
l=5;
var g=q.length;
for(var x=0,h=r.length-1;x<h;x++)
{
var e=false;
for(var y=0;y<=x&&y<g;y++)
{
if(!q[y].disabled&&q[y].value.indexOf(r[x])!=-1)
{
q[y].disabled=true;
e=true;
try{
if(gbIsIE||gbIsWebKit)
{
q[y].parentNode.childNodes[1].innerText=r[x];
}
}
catch(p)
{
}
}
}
if(!e)
{
var v=r[x]+" |",k=b.indexOf(v);
if(k!=-1)
{
b=b.substr(0,k)+b.substr(k+v.length,b.length-k-v.length);
}
}
}
l=6;
s.loadValue();
l=7;
if(b&&S("fattachlist",s))
{
S("fattachlist",s).value+=b;
}
l=8;
l=9;
showInfo(d||(formatDate(new Date(),"$hh$:$mm$")+" "+getTop().gsMsgSendErrorSaveOK));
l=10;
var o=getTop().QMDialog("composeExitAlert");
var n=o&&o.S("btn_exit_notsave");
if(n&&n.isShow())
{
return fireMouseEvent(n,"click");
}
l=11;
if(!a)
{
f();
}
l=12;
s.enableAutoSave();
s.clearLocalStorage();
}
catch(p)
{
u=p.message;
debug(["afterAutoSave:",p.message,"eid:",l]);
}
}
function cancelDoSend()
{
var a=getMainWin(),b=a.QMAttach;
if(b&&b.onfinish)
{
b.onprogress=null;
b.onfinish=null;
}
else{
var c=S("sendmailFrame",getTop());
if(c)
{
c.setAttribute("deleted","true");
removeSelf(c);
}
}
recodeComposeStatus(3,null,0);
showProcess(0);
errorProcess();
}
function quickDoSend(a,c,b)
{
var d=false;
if(b!="nomsg")
{
showProcess(1,0,["<img src='",getPath("image"),"newicon/a_send.gif' width='14px' height='14px' align='absmiddle'>&nbsp;",(b||gsMsgSend)].join(""),null,true);
}
disableSendBtn(true);
disableSource(true);
createBlankIframe(getTop(),{id:"sendmailFrame",onload:function(e){
if(d)
{
doSendFinishCheck(this);
}
else{
d=true;
try{
a.content.value=c;
a.target="sendmailFrame";
a.submit();
}
catch(f)
{
showError("\u53D1\u9001\u5931\u8D25\uFF1A"+f.message);
disableSendBtn(false);
disableSource(false);
}
}
}});
}
function disableSendBtn(a,b)
{
disableCtl("sendbtn",a,b||getMainWin());
}
function disableSaveBtn(a,b)
{
disableCtl("savebtn",a,b||getMainWin());
}
function disableTimeSendBtn(a,b)
{
disableCtl("timeSendbtn",a,b||getMainWin());
}
function disableSource(a)
{
disableCtl("source",a,getMainWin());
}
function disableAll(a,b)
{
var e=b||getMainWin();
if(e.disableAll&&e.disableAll!=arguments.callee)
{
return e.disableAll(a);
}
disableSendBtn(a,b);
disableSaveBtn(a,b);
disableTimeSendBtn(a,b);
var c=getTop().QMDialog("composeExitAlert"),d=c&&c.S("btn_exit_save");
if(d)
{
d.disabled=a;
}
}
function verifyCode(a,b)
{
if(window!=getTop())
{
return getTop().verifyCode(_asSubTmpl);
}
var d=arguments.callee,c=d._onok;
setVerifyCallBack();
loadingBox({model:"\u9A8C\u8BC1\u7801",js:"$js_path$qmverify29f984.js",oncheck:function(){
return window.QMVerifyBox;
},onload:function(){
QMVerifyBox.open({sType:a,sVerifyKey:b,onok:c});
}});
}
function openComposeDlg(c,b,a)
{
!(typeof QMAddress!="undefined"&&QMAddress.isInit())&&initAddress();
loadJsFileToTop(["$js_path$com/kits/qmeditor/qqmail/release/editor3690b7.js"]);
loadingBox({model:"\u53D1\u4FE1",js:["$js_path$libcompose3732bd.js","$js_path$qmaddrinput24e6ae.js"],oncheck:function(){
return window.ComposeLib&&window.QMAddrInput&&window.QMEditor&&(!a||a());
},onload:function(){
ComposeLib.openDlg(c,b);
}});
}
function setVerifyCallBack(a)
{
getTop().verifyCode._onok=a;
}
function emptyFolder(a,b,c)
{
confirmBox({title:"\u6E05\u7A7A\u6587\u4EF6\u5939",msg:T(['<div class="dialog_f_t">$name$</div>','<div class="dialog_f_d">\u6E05\u7A7A\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\u3002</div>']).replace({name:(c?"\u662F\u5426\u8981\u6E05\u7A7A\u6B64\u6587\u4EF6\u5939\u4E2D\u7684\u90AE\u4EF6\uFF1F":"\u662F\u5426\u8981\u6E05\u7A7A"+c+"\u4E2D\u7684\u90AE\u4EF6")}),confirmBtnTxt:'\u662F',cancelBtnTxt:'\u5426',onreturn:function(d){
d&&b();
}});
}
function renameFolder(c,d,a,b)
{
promptFolder({defaultValue:b||'',type:"rename"+(d||'folder'),onreturn:function(f){
var e=S("frm",a);
if(d=='tag')
{
e.fun.value="renametag";
e.tagname.value=f;
e.tagid.value=c;
}
else{
e.fun.value="rename";
e.name.value=f;
e.folderid.value=c;
}
submitToActionFrm(e);
}});
return false;
}
function promptFolder(a)
{
var b={shortcutgroup:{title:'\u65B0\u5EFA\u8054\u7CFB\u4EBA\u5206\u7EC4',msg:'\u8BF7\u586B\u5199\u8054\u7CFB\u4EBA\u5206\u7EC4\u540D\u79F0',name:'\u8054\u7CFB\u4EBA\u5206\u7EC4',maxascii:32,description:"\u5199\u4FE1\u65F6\uFF0C\u53EA\u9700\u8981\u8F93\u5165\u8FD9\u4E2A\u7FA4\u7EC4\u540D(\u6C49\u5B57\u9700\u8F93\u5165\u62FC\u97F3)\uFF0C\u5C31\u53EF\u4EE5\u5FEB\u6377\u7FA4\u53D1\u4E86\u3002"},folder:{title:'\u65B0\u5EFA\u6587\u4EF6\u5939',msg:'\u8BF7\u4F60\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0',name:'\u6587\u4EF6\u5939',maxascii:80},tag:{title:'\u65B0\u5EFA\u6807\u7B7E',msg:'\u8BF7\u4F60\u8F93\u5165\u6807\u7B7E\u540D\u79F0',name:'\u6807\u7B7E',maxascii:50},renamefolder:{title:'\u91CD\u547D\u540D\u6587\u4EF6\u5939',msg:'\u8BF7\u4F60\u8F93\u5165\u65B0\u7684\u6587\u4EF6\u5939\u540D\u79F0',name:'\u6587\u4EF6\u5939',maxascii:80},renametag:{title:'\u91CD\u547D\u540D\u6807\u7B7E',msg:'\u8BF7\u4F60\u8F93\u5165\u65B0\u7684\u6807\u7B7E\u540D\u79F0',name:'\u6807\u7B7E',maxascii:50}}[a.type];
b.defaultValue=a.defaultValue;
a.width&&(b.width=a.width);
a.height&&(b.height=a.height);
a.bAlignCenter&&(b.bAlignCenter=a.bAlignCenter);
a.onclose&&(b.onclose=a.onclose);
a.style&&(b.style=a.style);
b.onreturn=function(c,d){
if(!c)
{
return;
}
var e=getAsiiStrLen(trim(d));
if(e==0||e>b.maxascii)
{
return showError(TE(e?"$name$\u540D\u79F0\u592A\u957F\uFF0C\u8BF7\u4F7F\u7528\u5C11\u4E8E$maxascii$\u4E2A\u5B57\u7B26($@$eval $maxascii$/2$@$\u4E2A\u6C49\u5B57)\u7684\u540D\u79F0":'$name$\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A').replace(b));
}
if(/[~!#\$%\^&\*\(\)=\+|\\\[\]\{\};\':\",\?\/<>]/.test(d))
{
return showError(b.name+'\u540D\u79F0\u4E0D\u80FD\u5305\u542B ~!#$%^&*()=+|\\[]{};\':",?/<> \u7B49\u5B57\u7B26');
}
a.onreturn(d);
};
promptBox(b);
}
function _setFolderCss(c,a,b,d)
{
if(c)
{
var h=S(c+"_td",a);
if(h)
{
setClass(h,b);
return h;
}
else{
var g=S(c,a);
if(g)
{
var e=d=="over";
if(e)
{
showFolders(g.name,true);
}
var f=S(c,a).parentNode;
setClass(f,e?"fn_list":"");
return g;
}
}
}
}
var gsFolderStoreKey='SwiTchFoLdErComM_gLoBaldATa';
function switchFolderComm(d,b,c,g,f,e,a)
{
var h=S(c,b),k=d;
if(k)
{
a._sCurFolderId=k;
}
else{
k=a._sCurFolderId;
}
if(h)
{
var m=gsFolderStoreKey,l=b[m],j;
if(l!=k)
{
_setFolderCss(l,b,e,"none");
}
if(j=_setFolderCss(b[m]=k,b,f,"over"))
{
E("new|personal|pop|tag".split("|"),function(n){
var o=S(n+"folders",b);
o&&isObjContainTarget(o,j)&&showFolders(n,true);
});
if(getStyle(h,"overflow")!="hidden")
{
scrollIntoMidView(j,h);
}
else{
var i=S("ScrollFolder",b);
i&&isObjContainTarget(i,j)&&scrollIntoMidView(j,i);
}
}
}
}
function getSelectedFolder(a)
{
a||(a=getLeftWin());
return a[gsFolderStoreKey].replace('folder_','');
}
function switchFolder(b,a)
{
getTop().switchFolderComm(b,a||getLeftWin(),"folder","li","fn","fs",getTop().switchFolder);
}
function getOnlineAttachInfo()
{
var a=(_oTop.goOnlineAttachInfo||(_oTop.goOnlineAttachInfo={}));
return a;
}
function setOnlineAttachInfo(a)
{
var b=getOnlineAttachInfo();
getTop().extend(b,a);
if(a&&a.sOpen=="0")
{
getTop().S("folder_attach").innerHTML="\u9644\u4EF6\u6536\u85CF";
}
return b;
}
function setOnlineAttachSelectedTab(a)
{
getTop().QMLocalStorage.setUserItem("onlineAttachSelectedTab",a);
}
function getOnlineAttachSelectedTab()
{
return getTop().QMLocalStorage.getUserItem("onlineAttachSelectedTab");
}
function changeToAttachFolder()
{
var a=getTop(),b=getOnlineAttachSelectedTab()||"",d=getOnlineAttachInfo().sOpen,e=a.getSid(),c=a.getTopHost();
if(b=="all")
{
goUrlMainFrm([c,"/cgi-bin/attachfolder?topmails=0&action=list&sid=",e,"&s=search&folderid=all&hflag=all&page=0&t=attachfolder&subject=","&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1"].join(""));
}
else if(b=="onlinedoc"&&d=="1")
{
goUrlMainFrm([c,"/cgi-bin/docedit_list?t=online_doc&page=0&pagesize=40&sid=",e].join(""));
}
else{
goUrlMainFrm([c,"/cgi-bin/attachfolder?topmails=0&action=list&sid=",e,"&s=search&folderid=attach&hflag=attach&page=0&t=attachfolder","&subject=&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1"].join(""));
}
}
function switchRightFolder(b,c,a)
{
getTop().switchFolderComm(b,c||F("rightFolderList",getMainWin()),a||"folder_new","div","toolbg","",getTop().switchRightFolder);
}
function isShowFolders(b,a)
{
var c=S("icon_"+b,a||getTop());
return !!(c&&c.className=="fd_off");
}
function showFolders(c,a,b)
{
var l=b||getTop(),h=S(c+"folders",l),j=S("icon_"+c,l);
if(h&&j)
{
var i=S(c+"folders",l),e=GelTags("li",i).length;
var d=!isShowFolders(c,l);
if(e&&(typeof a!="boolean"||d==a))
{
setClass(j,d?"fd_off":"fd_on");
if(!b)
{
var k=getTop(),m="fOlDErsaNimaTion"+c,g=k[m];
if(!g)
{
g=k[m]=new k.qmAnimation({from:1,to:100});
}
g.stop();
if(d)
{
h.style.height="1px";
show(h,true);
}
else{
h.style.height="auto";
}
var f=h.scrollHeight;
g.play({speed:f,onaction:function(o,n){
S(c+"folders",k).style.height=(Math.floor((d?n:1-n)*f)||1)+"px";
},oncomplete:function(o,n){
var p=S(c+"folders",k);
if(d)
{
p.style.height="auto";
}
else{
show(p,false);
}
}});
}
else{
show(h,d);
}
callBack(getTop().iPadResizeFolder);
}
}
}
function decreaseFolderUnread(c,a,b)
{
var d,e=c.split(';');
for(var f=e.length-1;f>=0;f--)
{
if(d=optFolderUnread(0,e[f]))
{
optFolderUnread(1,e[f],d-1,a,b);
}
}
}
function getFolderUnread(a)
{
return optFolderUnread(0,a);
}
function setFolderUnread(d,b,a,c)
{
return optFolderUnread(1,d,b||0,a,c);
}
function getGroupUnread(a)
{
return optFolderUnread(0,a,null,null,getMainWin());
}
function setGroupUnread(c,b,a)
{
return optFolderUnread(1,c,b||0,a,getMainWin());
}
function setTagUnread(d,b,a,c)
{
return optFolderUnread(1,d,b||0,a,c,true);
}
function updateFolderByRecur(a)
{
try{
E(finds("a",S("OutFolder")),function(e){
var c=e.id;
if(c&&a&&a.indexOf(c)==-1)
{
if(/<b>[\w\W]*?\(\d+\)<\/b>/.test(e.innerHTML)&&e.name)
{
var d=RegExp.$1;
if(/folder_(tag_[\d]+)/.test(c)&&(c=RegExp.$1))
{
setTagUnread(c,0);
setTagUnread('tag',getFolderUnread('tag')-d);
}
else{
setFolderUnread(c,0);
}
}
}
});
}
catch(b)
{
debug("updateFolderByRecur error",b);
}
}
function optFolderUnread(c,f,d,a,e,b)
{
var l=S(["folder_",(new String(f)).toString().split("folder_").pop()].join(""),e||getLeftWin());
if(!l)
{
return 0;
}
var s=l.getAttribute("etitle"),u=l.name;
var j=typeof (d)=="number"&&d>0?d:0,t=l.innerText||l.textContent||"",h=t.lastIndexOf("("),i=h==-1?0:parseInt(t.substring(h+1,t.lastIndexOf(")")));
if(c==0)
{
return i;
}
if(i==j)
{
return 1;
}
var g=j==0,p={info:htmlEncode(h!=-1?t.substring(0,h):t),title:s,unread:j},m=GelTags("div",l)[0];
if(f=="1")
{
l.title=T("\u6536\u4EF6\u7BB1\u6709 $unread$ \u5C01\u672A\u8BFB\u90AE\u4EF6").replace(p);
}
else if(f=="8")
{
l.title=T("\u6709 $unread$ \u5C01\u672A\u8BFB\u7FA4\u90AE\u4EF6").replace(p);
}
else{
l.title=T('$title$'+(a||g?'':'  \u672A\u8BFB\u90AE\u4EF6 $unread$ \u5C01')).replace(p);
}
if((f!="tag"&&f.indexOf("tag")>=0)||(f==""+parseInt(f)&&f>=129&&m))
{
var v=p.title||p.info;
v=v.length>5?v.substr(0,5)+"...":v;
m=setHTML(m,g?p.title||p.info:["<b>",v,"(",p.unread,")","</b>"].join(""));
if(g)
{
addClass(m,"fdwidthmax");
addClass(m,"txtflow");
}
else{
rmClass(m,"fdwidthmax");
rmClass(m,"txtflow");
}
}
else{
var o=new Date(),r=(o.valueOf&&o.valueOf()>=1384099200000&&o.valueOf()<=1384185600000)?'<input class="ico_input drifticon drifticon_single" type="button" hidefocus />':'<input class="ico_input drifticon" type="button" hidefocus />';
l=setHTML(l,T(g&&'$info$'||(a?'$info$($unread$)':'<b>$info$</b><b>($unread$)</b>')).replace(p)+(p.info=='\u661F\u6807\u90AE\u4EF6'?'<input type="button" class="ico_input icon_folderlist_star"/>':'')+(p.info=='\u6F02\u6D41\u74F6'?r:'')+(p.info=='\u91CD\u8981\u8054\u7CFB\u4EBA'?'<input type="button" class="ico_input icon_folderlist_iclist"/>':''));
l.setAttribute("initlized","");
var n=S("folder_"+(new String(f)).toString().split("folder_").pop()+"_ns",e||getLeftWin());
n&&setHTML(n,T(g?'$info$':'<b>$info$</b>').replace(p));
}
if(u&&!b)
{
var q=S("folder_"+u,getTop());
if(q)
{
try{
optFolderUnread(c,f,j,a,getMainWin());
}
catch(k)
{
doPageError(k.message,"all.js","optFolderUnread");
}
return setFolderUnread(q.id,getFolderUnread(q.id)-i+j);
}
}
return 1;
}
function doFolderEmpty(b,a,c)
{
a.folderid.value=b;
a.rk.value=Math.random();
if(a.loc)
{
a.loc.value=c;
}
submitToActionFrm(a);
}
function handleSubFolder(a)
{
var d="icon_subfolder_fold",c=S("icon_subfolder_"+a),b=!hasClass(c,d);
if(c)
{
b?addClass(c,d):rmClass(c,d);
show("folder_sysmsg_td",b);
show("folder_notsysmsg_td",b);
show("folder_sysmsg_line",b);
show("folder_"+a+"_ns",b);
show("folder_"+a,!b);
QMAjax.send(T("/cgi-bin/setting4?sid=$sid$&openclassify=$openclassify$&fun=submit&loc=switchfolder,,,$loc$").replace({openclassify:b?0:1,sid:getSid(),loc:b?"open":"close"}));
}
}
function selectAll(a,b,c)
{
E(GelTags("input",S('list',b)),function(e){
e.checked=a;
});
getTop().showSelectALL(b,a);
var d=S("div_tip_openfull",b);
show(d,!a);
if(!S("div_mail_info",b)&&a)
{
(S("selectAll",b))&&(S("selectAll",b).style.height="0");
}
if(d&&d.style.display!=="none"&&trim(d.innerHTML)&&!a)
{
S("selectAll",b).style.height="";
S("selectAll",b).style.visibility="";
E(["div_openfull_ready","div_openfull_opening"],function(e){
if(S(e,b).style.display!=="none")
{
LogKV({sValue:e});
return false;
}
});
}
if(c)
{
LogKV({sValue:'mail_list|feature|select_all|'+c});
}
}
function openFullSelect(a)
{
var b=getTop();
QMAjax.send(T('/cgi-bin/do?action=openfullsearch&sid=$sid$&r=$r$&t=$t$').replace({sid:getSid(),r:Math.random(),t:"open_fullsearch.json"}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(c,d){
if(c)
{
if(d.indexOf("<!--cgi exception-->")>-1&&d.indexOf("<!--cgierrorcode:-2-->")>-1)
{
goUrl(b,[b.location.protocol,"//",b.location.hostname,"/cgi-bin/loginpage"].join(""));
}
else{
var e=evalValue(d);
S("span_minute",a).innerHTML=e.minute>0?e.minute:"\u4E0D\u52301";
b.QMLocalStorage.setUserItem("openFullSelectStartTime",e.now);
b.QMLocalStorage.setUserItem("openFullSelectDifferenceTime",(b.now()/1000).toFixed(0)-e.now);
b.QMLocalStorage.setUserItem("remainMinute",e.minute);
show(S("div_openfull_opening",a),true);
show(S("div_openfull_ready",a),false);
LogKV({sValue:'div_openfull_opening'});
}
}
else{
showError("\u5F00\u542F\u5168\u6587\u641C\u7D22\u5931\u8D25");
}
}});
}
function selectReadMail(a,b)
{
E(GelTags("input",S('list',b)),function(c){
if(c.title!="\u9009\u4E2D/\u53D6\u6D88\u9009\u4E2D")
{
c.checked=c.getAttribute('unread')!=a;
}
});
}
function checkAddrSelected(a)
{
var d=GelTags("input",S('list',a)),b=d.length,c;
for(var e=0;e<b;e++)
{
c=d[e];
if(c.type=="checkbox"&&c.checked)
{
return true;
}
}
return false;
}
function checkBoxCount(b,a)
{
var c=0;
E(GelTags("INPUT",S("list",a)),function(d){
if(d.type=="checkbox"&&d.name==b&&d.checked)
{
c++;
}
});
return c;
}
function PGV()
{
}
function checkCheckBoxs(b,a)
{
var d=a||S("frm",getMainWin()),f=GelTags("input",d),e;
for(var g=0,c=f.length;g<c;g++)
{
e=f[g];
if(e.type=="checkbox"&&e.name==b&&e.checked)
{
return true;
}
}
return false;
}
function setListCheck(b,a)
{
if(b.type!="checkbox")
{
return;
}
if(a==null)
{
a=b.checked;
}
else{
b.checked=a;
}
var c=b.parentNode.parentNode;
if(c.tagName=="TR")
{
c=c.parentNode.parentNode;
}
if(c==S("frm",getMainWin()))
{
return;
}
var d=c.className;
if(d=="B")
{
d=a?"B":"";
}
else{
d=strReplace(d," B","")+(a?" B":"");
}
setClass(c,d);
if(a)
{
listMouseOut.call(c);
}
}
function doCheck(b,c,a,d)
{
var h=b||window.event,n=c||h.srcElement||h.target,m=d||getMainWin();
if(!n||!m)
{
return;
}
if(n.className=="one"||n.className=="all")
{
CA(n);
}
setListCheck(n);
if((h&&h.shiftKey||a)&&m.gCurSelObj&&m.gCurSelObj!=n&&n.checked==m.gCurSelObj.checked)
{
var l=getTop().GelTags("input",m.document),e=0,f=l.length,k;
for(var p=0;p<f;p++)
{
k=l[p];
if(k.type!="checkbox")
{
continue;
}
if((k==m.gCurSelObj||k==n)&&e++==1)
{
break;
}
if(e==1)
{
setListCheck(k,n.checked);
}
}
}
m.gCurSelObj=n;
getTop().showSelectALL(m,false);
var o=parents(".toarea",n),g=o[0]&&o[0].previousSibling,j;
if(g)
{
while(g)
{
if(g.className&&g.className.indexOf("bd talk")>=0)
{
break;
}
g=g.previousSibling;
}
if(g)
{
E(GelTags("div",g),function(i){
if(i.getAttribute("name")==="selectgrouptip"&&parseInt(i.style.width,10)==500)
{
if(m.oSGKWs)
{
var q=i.getAttribute("keyword");
(q||q=="")&&m.oSGKWds[q]&&delete m.oSGKWds[q];
}
i.style.width="0px";
return true;
}
});
}
}
}
function checkAll(b,a)
{
E(GelTags("input",a),function(c){
if(c.name==b)
{
setListCheck(c);
}
});
}
function fakeReadmail(a)
{
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=readsubmail&mode=fake&base=$base$&pf=$pf$').replace({sid:getSid(),mailid:a.sMailId,pf:rdVer.isPre(a.sFolderId)?1:0,base:rdVer("BaseVer",0)}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(b,c){
var f=trim2(c);
if(b&&f.indexOf("(")==0)
{
var e=evalValue(f);
if(e)
{
folderOpt(extend(a,e));
callBack(getMainWin().updatePreAndNext,[a]);
}
}
else{
var d=getActionWin().document;
d.open();
d.write(_aoXml.responseText);
}
}});
}
function folderOpt(a)
{
if(!a)
{
return;
}
var d=getTop();
d.recordCompareReadedMailId(a.sMailId);
if(a.bNewMail)
{
var g=a.sFolderId,b;
if(g>0)
{
try{
d.setFolderUnread(g,d.getFolderUnread(g)-1);
if(a.bStar)
{
d.setFolderUnread("starred",d.getFolderUnread("starred")-1);
}
if(a.bAddrvip)
{
d.setFolderUnread("addrvip",d.getFolderUnread("addrvip")-1);
}
if(a.oSysTag&&/system:1\|/.test(a.oSysTag))
{
setFolderUnread("sysmsg",getFolderUnread("sysmsg")-1);
}
if(a.oSysTag&&/system:0\|/.test(a.oSysTag))
{
setFolderUnread("notsysmsg",getFolderUnread("notsysmsg")-1);
}
var c=a.oMatchTag||[],j=c.length-1;
j>=0&&setTagUnread('tag',getFolderUnread('tag')-1);
for(;j>=0;j--)
{
var f='tag_'+c[j];
debug(['getFolderUnread',f,getFolderUnread(f)]);
setTagUnread(f,getFolderUnread(f)-1);
}
}
catch(h)
{
}
}
}
}
function recordReadedMailId(a)
{
getTop().gsReadedMailId=a;
}
function recordMailListScroll()
{
var b=getTop();
var a=b.getMainWin();
if(a.location.href.indexOf('t=mail_list_ad')==-1)
{
b.gnMailListPos=bodyScroll(a,"scrollTop");
}
}
function recordCompareReadedMailId(a)
{
if(a&&getTop().gsReadedMailId!=a)
{
getTop().gsReadedMailId=a;
}
QMMailCache.addData(a,{bUnread:null});
}
function SG(b,a)
{
var g=b.className,c=!/\bsts\b/i.test(g);
var e=GelTags("input",b.parentNode)[0],f=e&&e.className,d=(a?b.parentNode.parentNode.parentNode:b.parentNode).nextSibling;
if(f=="one"||f=="all")
{
setClass(e,c?"one":"all");
}
setClass(b,c?g.replace(/\bhts\b/i,"sts"):g.replace(/\bsts\b/i,"hts"));
if(d.className!="toarea")
{
d=d.nextSibling;
}
if(d.className!="toarea")
{
return;
}
return show(d,c);
}
function checkNodeLocate(b,c,a)
{
b=a?b.nextSibling:b.previousSibling;
while(b)
{
if(b.className===c)
{
return false;
}
b=a?b.nextSibling:b.previousSibling;
}
return true;
}
function getSelectGroupUrl()
{
var b=[],c=getMainWin(),d=S("sortinfo",c),e=getUrlParams(c.location)['s'],a=e==="search"||e==="searchcontact";
if(c.location.href&&c.location.href.indexOf("/cgi-bin/mail_list")<0)
{
return "";
}
for(var f in c.oSGKWs)
{
c.oSGKWs[f]==1&&b.push(f);
}
c.oSGKWs={};
if(b.length>0&&d)
{
return ["&action=",a?"mail_grpsearchall":"mail_grpoperall","&keyword=",b.join("&keyword="),"&sorttype=",d.getAttribute("ssorttype")].join("");
}
else{
return "";
}
}
function checkSelectGroup()
{
var b=getMainWin(),a=false;
if(b.location.href&&b.location.href.indexOf("/cgi-bin/mail_list")<0)
{
return false;
}
E(finds("div[name='selectgrouptip']",b.document.body),function(d){
d&&(d.style.width="0px");
});
for(var c in b.oSGKWs)
{
b.oSGKWs[c]==1&&(a=true);
}
;return a;
}
function hideSelectGroupTip()
{
var a=getMainWin();
E(finds("div[name='selectgrouptip']",a.document.body),function(b){
b&&(b.style.width="0px");
});
a.oSGKWs={};
}
function selectGroupCheck(b,a)
{
var e=b.parentNode.parentNode.parentNode,f=GelTags("input",e)[0],h=b.parentNode.parentNode,g=getMainWin(),j;
if(a)
{
var d=parseInt(finds("span[un='nowcnt']",h)[0].innerHTML,10)||0,c=parseInt(finds("span[un='totalcnt']",h)[0].innerHTML,10)||0;
E(GelTags("span",h),function(i){
j=i.getAttribute("un");
if(j==="select")
{
show(i,false);
}
else if(j==="unselect")
{
var o=GelTags("span",i)[0],n=4,m=parseInt((c-d)/n),l=function(p){
o.innerHTML=p;
};
l(d);
setTimeout(function(){
l(c-(--n)*m);
n!=0&&setTimeout(arguments.callee,150);
},150);
show(i,true);
}
});
h.setAttribute("totalcnt",b.getAttribute("totalcnt"));
if(g.oSGKWs)
{
for(var k in g.oSGKWs)
{
if(g.oSGKWs[k]==1)
{
E(finds("div[name='selectgrouptip']",g.document.body),function(i){
i&&i.getAttribute("keyword")==k&&(i.style.width="0px");
});
}
}
g.oSGKWs={};
}
else{
g.oSGKWs={};
}
g.oSGKWs[f.getAttribute("keyword")]=1;
}
else{
b.parentNode.parentNode.style.width="0px";
fireMouseEvent(f,"click");
if(g.oSGKWs)
{
delete g.oSGKWs[f.getAttribute("keyword")];
}
}
}
function CA(a)
{
if(a)
{
var h=(a.className=="all"?a.parentNode.parentNode.parentNode.parentNode:a.parentNode).nextSibling;
if(h.className!="toarea")
{
h=h.nextSibling;
}
getTop().showSelectALL(getMainWin(),false);
if(h.className=="toarea")
{
var d=a.checked,l=a.nextSibling,b=false,j=S("selectAll",getMainWin());
E(GelTags("input",h),function(q){
setListCheck(q,d);
});
changeSelectAllCkbStatus();
var m=finds("div.sidetip",a.parentNode);
m.length>0&&(b=true)&&(l=m[0]);
if(b)
{
if(d&&(j&&j.style.visibility==="hidden")||!j)
{
var c=checkNodeLocate(h,"toarea",false),e=checkNodeLocate(h,"toarea",true),k={"5":"\u53D1\u4EF6\u4EBA\u4E0B|sender","6":"\u65F6\u95F4\u5185|day","7":"\u4E3B\u9898\u5185|subject","8":"\u5927\u5C0F\u4E0B|size","9":"\u6536\u4EF6\u4EBA\u4E0B|receiver","13":"\u56DE\u590D\u4E0B|unread"},n=attr(S("sortinfo",getMainWin()),"isorttype"),f=getUrlParams(getMainWin().location)["s"]==="search",o;
if(e||c)
{
var i=finds("input[name='mailid']",h),g=(i&&i.length)||0;
function p(q)
{
if(q>g&&d)
{
E(GelTags("span",l),function(r){
_sUn=r.getAttribute("un");
if(_sUn==="select")
{
GelTags("span",r)[0].innerHTML=g;
GelTags("a",r)[0].innerHTML=["\u52FE\u9009\u8BE5",k[n].split("|")[0],"\u5168\u90E8",q,"\u5C01\u90AE\u4EF6"].join("");
GelTags("a",r)[0].setAttribute("totalcnt",q);
show(r,true);
}
else if(_sUn==="unselect")
{
GelTags("span",r)[0].innerHTML=q;
show(r,false);
}
});
l.style.width="500px";
}
}
if(!l.getAttribute("groupcnt"))
{
o=["/cgi-bin/mail_list_stat",getMainWin().location.search.replace(/t=(mail_list_group|mail_list|mail_list_ad)/g,"").replace(/&sorttype=\d*/,"").replace(/&sortasc=\d*/,""),"&sorttype=",k[n].split("|")[1],"&keyword=",encodeURIComponent(attr(a,"keyword")),"&ef=js&r=",Math.random(),f?"&action=search":"",attr(a,'addrvip')=="true"?"&s=addrvip&flag=addrvip":""].join("");
QMAjax.send(o,{method:"GET",onload:function(q,r){
if(q&&r)
{
var t=evalValue(r),s=parseInt(t.count,10);
l.setAttribute("groupcnt",s);
p(s);
}
}});
}
else{
p(parseInt(l.getAttribute("groupcnt"),10));
}
}
}
else{
l.style.width="0px";
}
}
}
}
}
function RD(f,h,b,d,g,c,a,e,i)
{
RD.action.apply(null,arguments);
}
RD.action=function(f,h,b,d,g,c,a,e,i){
var j=RD;
if(!j.preRD(f,h,d))
{
return false;
}
var l=j.getURL(f,h,b,d,g,c,a,e,i);
if(f&&(f.shiftKey||f.ctrlKey||f.metaKey))
{
var k=f.target||f.srcElement;
while(k&&k.className!="i M"&&k.className!="i F")
{
k=k.parentNode;
}
k&&QMReadedItem.disp(k);
goNewWin(l);
}
else{
goUrlMainFrm([l,"#stattime=",now()].join(""),false);
}
};
RD.preRD=function(e,f,d,a,b,c){
var g=RD;
if(c!==false)
{
g.ossLog(f,d);
}
if(b!==false)
{
recordMailListScroll();
recordReadedMailId(f);
}
if(e)
{
preventDefault(e);
var h=getEventTarget(e),i=h&&h.getAttribute("fid");
g.doFolder(f,h);
if(i&&a!==false)
{
g.goFolderPage(i);
stopPropagation(e);
return false;
}
}
rdVer.log(f,"hit");
return true;
};
RD.ossLog=function(b,a){
var c='';
switch(a)
{case 0:
c='draft';
break;
case 1:
c='common';
break;
case 2:
c='group';
break;
case 3:
c='ad';
break;
}var d='readmail|mailclick|'+c;
if(b.charAt(0)=='C'&&a=='1')
{
d='readmail|mailclick|com_conersation';
}
getTop().LogKV({sValue:d});
};
RD.doFolder=function(b,a){
if(!a)
{
return;
}
var d=finds("#frm td[hitmailid]",a.ownerDocument),c=new QMCache({appName:"mail_rank"});
for(var e=0;e<d.length;e++)
{
if(d[e]==a||isObjContainTarget(d[e],a))
{
debug(b+":"+(e+1));
c.setData(b,e+1);
break;
}
}
};
RD.goFolderPage=function(a){
goUrlMainFrm(T("/cgi-bin/$cgi$?sid=$sid$&folderid=$fid$&page=0&t=$t$").replace({cgi:a=="9"?"readtemplate":"mail_list",fid:a,sid:getSid(),t:a=="9"?"sms_list_v2":""}),false);
};
RD.getURL=function(g,i,b,e,h,d,a,f,j,c){
if(typeof (c)=='undefined')
{
c=getTop().bnewwin||(g&&g.shiftKey);
}
var q=rdVer.url(i,h,j,e,c,d,a,f,false,getUrlParams(getMainWin().location).folderkey),p="&hitmailid=",k=false,o;
if(g)
{
if(g.donadel)
{
k=true;
}
if(typeof (g.hitmailid)!="undefined")
{
o=g.hitmailid;
}
else{
var n=getEventTarget(g),m;
n&&(m=n.getAttribute("hitmailid")?n:parents("td[hitmailid]",n)[0]);
m&&m.getAttribute("hitmailid")&&(o=m.getAttribute("hitmailid"));
}
}
if(o)
{
q=[q,p,o.split("|").join(p)].join("");
}
var l=getMainWin().location.href.search("flag=pending");
if(l!=-1)
{
q+="&frompending=1";
}
if(k)
{
q+="&dona=1";
}
return q;
};
var QMReadedItem={};
QMReadedItem.addItem=function(a){
if(!getMainWin().gMailItems)
{
getMainWin().gMailItems=[];
}
getMainWin().gMailItems.push(a);
};
QMReadedItem.getItems=function(){
return getMainWin().gMailItems||[];
};
QMReadedItem.save=function(a){
getMainWin().goReadedItemImg=a;
};
QMReadedItem.load=function(){
return getMainWin().goReadedItemImg;
};
QMReadedItem.disp=function(a){
if(!a)
{
return;
}
var c=a.type=="checkbox"?a.parentNode:GelTags("input",a)[0].parentNode,b=c.firstChild;
if(b.tagName!="IMG")
{
insertHTML(c,"afterBegin",T(['<img src="$path$spacer.gif" width="10" height="11" class="showarrow"',' title="\u8FD9\u662F\u60A8\u6700\u8FD1\u9605\u8BFB\u7684\u4E00\u5C01\u90AE\u4EF6" />']).replace({path:getPath("image")}));
b=c.firstChild;
}
show(this.load(),false);
show(b,true);
this.save(b);
};
QMReadedItem.read=function(a){
if(a&&a.tagName==="U")
{
fireMouseEvent(a,"click");
}
else{
if(!this.load())
{
return false;
}
fireMouseEvent(GelTags("table",this.load().parentNode.parentNode)[0].parentNode,"click");
}
return true;
};
QMReadedItem.check=function(a){
if(!this.load())
{
return false;
}
var b=this.load().nextSibling;
b.checked=!b.checked;
doCheck(null,b,a);
return true;
};
QMReadedItem.move=function(a){
var d=this.getItems(),b=d.length,c=-1;
if(b==0)
{
return false;
}
var e=QMReadedItem.load();
if(e)
{
do{
e=e.nextSibling;
}
while(e&&e.nodeType==3);
if(e)
{
for(var f=b-1;f>=0;f--)
{
if(e==d[f])
{
c=f;
break;
}
}
}
}
c+=a?1:-1;
if(c>-1&&c<b)
{
this.disp(d[c]);
scrollIntoMidView(d[c],getMainWin().document.body,false);
return true;
}
return false;
};
function listMouseOver(a)
{
var b=this,d=b.className;
if(d.indexOf(" B")==-1&&d.indexOf(" V")==-1&&b.getAttribute("colorchange")!="none")
{
b.className=d+" V";
}
if(a)
{
var c=getEventTarget(a);
while(c&&c!=b&&c.className!='tagbgSpan')
{
c=c.parentNode;
}
if(c&&c!=b)
{
QMTag.showTagClose(c,1);
}
}
}
function listMouseOut(a)
{
var b=this;
if((!a||!isObjContainTarget(b,a.relatedTarget||a.toElement))&&b.className.indexOf(" V")>-1&&b.getAttribute("colorchange")!="none")
{
b.className=b.className.replace(" V","");
}
if(a)
{
var c=getEventTarget(a);
while(c&&c!=b&&c.className!='tagbgSpan')
{
c=c.parentNode;
}
if(c&&c!=b)
{
QMTag.showTagClose(c,0);
}
}
}
function listMouseEvent(a)
{
addEvents(a,{contextmenu:function(b){
listContextMenu.call(a,b);
},mouseover:function(b){
listMouseOver.call(a,b);
},mouseout:function(b){
listMouseOut.call(a,b);
}});
}
function listContextMenu(a)
{
var b=this;
allDeferOK()&&mailRightMenu(b,a);
preventDefault(a);
}
function GetListMouseClick(a)
{
return function(b){
ListMouseClick(b,a||window);
};
}
function changeSelectAllCkbStatus()
{
var a=0,b=0,c=getTop().S("ckb_selectAll",getTop().getMainWin());
if(c)
{
E(finds("input[type='checkbox'][name='mailid']",S('list',getTop().getMainWin())),function(d){
b++;
if(d.checked===true)
a++;
});
if(b===a)
{
c.checked=true;
c.indeterminate=false;
}
else if(a===0)
{
c.checked=false;
c.indeterminate=false;
}
else{
c.indeterminate=true;
}
}
}
function oprSelectAllClick(a,b)
{
var c;
if(a.middleStatus)
{
c=false;
LogKV({sValue:'mail_list|select_all|cancelSelect'});
}
else{
c=a.checked;
}
getTop().hideSelectGroupTip();
getTop().selectAll(c,b||document);
getTop().checkAll('mailid',b||document);
}
function ListMouseClick(_aoEvent,_aoWin)
{
var _oTargetObj,_oEvent=_aoEvent||_aoWin.event;
if(!(_oTargetObj=getEventTarget(_oEvent)))
{
return;
}
if(attr(_oTargetObj,"name")=="mailid"||(_oTargetObj.lastChild&&attr(_oTargetObj.lastChild,"name")=="mailid")||attr(_oTargetObj,"name")=="AddrID"||(_oTargetObj.lastChild&&attr(_oTargetObj.lastChild,"name")=="AddrID"))
{
if(_oTargetObj.lastChild&&(attr(_oTargetObj.lastChild,"name")=="mailid"||attr(_oTargetObj.lastChild,"name")=="AddrID"))
{
_oTargetObj.lastChild.click();
}
if(!getGlobalVarValue('TIP_46'))
{
requestShowTip('gotnomail',46,_aoWin,function(_asParam,_aoXmlObj){
setGlobalVarValue('TIP_46',1);
return true;
});
}
changeSelectAllCkbStatus();
return doCheck(_oEvent);
}
if(_oTargetObj.className.indexOf("cir")==0)
{
var _sFakeEventModal=T(['{','shiftKey:true,','hitmailid:"$hitmailid$"','}']).replace({"hitmailid":_oTargetObj.getAttribute("hitmailid")||parents("td[hitmailid]",_oTargetObj)[0]||""}),_oClickElem=GelTags("table",_oTargetObj.parentNode.parentNode)[0].parentNode,_sClickStr=_oClickElem.onclick;
if(_sClickStr)
{
var _sFuncCode=_sClickStr.toString().split("{")[1].split("}")[0].replace(/event/ig,_sFakeEventModal);
if(/\WRD/.test(_sFuncCode))
{
return eval(_sFuncCode);
}
else{
_sFuncCode=_sClickStr.toString().replace(/.*{/g,"").replace(/}.*/g,"").replace(/event/ig,"{shiftKey:true}");
return eval(_sFuncCode);
}
}
else{
_sClickStr=attr(_oClickElem,'rd');
if(_sClickStr)
{
return eval.call(_oTargetObj,_sClickStr.replace(/event/ig,_sFakeEventModal));
}
}
}
}
function listInitForComm(b,a)
{
var g,e=GelTags("div"),c=doCheck,f,d;
g=b?b:"M";
for(var h=e.length-1;h>=0;h--)
{
f=e[h];
if(f.className!=g)
{
continue;
}
if(b=="ft")
{
f=GelTags("table",f)[0];
}
d=GelTags("input",f)[0];
if(!d||d.type!="checkbox")
{
continue;
}
d.title="\u6309\u4F4Fshift\u70B9\u51FB\u4E0D\u540C\u7684\u52FE\u9009\u6846 \u53EF\u65B9\u4FBF\u5FEB\u6377\u591A\u9009";
addEvent(d,"click",c);
if(!a)
{
listMouseEvent(f);
}
}
}
function modifyFolder(a,b)
{
getMainWin().location.href=T(['/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail','&folderid=$folderid$&acctid=$acctid$']).replace({sid:getSid(),folderid:a,acctid:b});
return false;
}
function recvPopHidden(a)
{
getMainWin().setTimeout(function(){
if(!a)
{
getTop().reloadFrmLeftMain(false,true);
}
else{
var c="iframeRecvPopHidden";
createBlankIframe(getMainWin(),{id:c});
var d=["/cgi-bin/mail_list?sid=",getSid(),"&folderid=",a,"&t=recv_pop_hidden"].join("");
try{
F(c,getMainWin()).location.replace(d);
getTop().hiddenMsg();
}
catch(b)
{
S(c,getMainWin()).src=d;
}
}
},10000);
}
function recvPop(c,b,a)
{
recvPopCreat(c,b);
if(S("tips",a))
{
S("tips",a).innerHTML=T(['<img src="$images_path$ico_loading31e9c5d.gif" align=absmiddle>',' \u6B63\u5728\u6536\u53D6...&nbsp;\u7CFB\u7EDF\u5C06\u5728\u540E\u53F0\u81EA\u52A8\u6536\u53D6\uFF0C\u60A8\u53EF\u4EE5\u79BB\u5F00\u6B64\u9875\u9762\uFF0C\u7A0D\u540E\u56DE\u6765\u67E5\u770B\u6536\u53D6\u7ED3\u679C\u3002']).replace({images_path:getPath("image",true)});
}
recvPopHidden(b);
}
function recvPopCreat(a)
{
getActionWin().location=["/cgi-bin/foldermgr?sid=",getSid(),"&fun=recvpop&acctid=",a].join("");
}
function recvPopAll()
{
getActionWin().location=["/cgi-bin/foldermgr?sid=",getSid(),"&fun=recvpopall"].join("");
try{
setTimeout(function(){
reloadFrmLeftMain(false,true);
},3000);
}
catch(a)
{
}
return false;
}
function setPopFlag(b,a,c)
{
if(a=="recent")
{
setPopRecentFlag(b,c);
}
}
function setPopRecentFlag(a,b)
{
runUrlWithSid(["/cgi-bin/foldermgr?sid=",getSid(),"&fun=pop_setting&acctid=",a,"&recentflag=",b].join(""));
}
function checkPopMailShow(a)
{
var b=["@yahoo.com.cn","@sina.com","@tom.com","@gmail.com"],c=a.toLowerCase();
for(var d=0;d<b.length;d++)
{
if(c.indexOf(b[d])>=0)
{
return true;
}
}
return false;
}
function setBeforeUnloadCheck(d,e,c,b,a)
{
var f=["input","select","textarea"];
d=d||window;
a=a?(typeof (a)=="string"?S(a,d):a):d.document;
d.gbIsBeforeUnloadCheck=true;
E(f,function(g){
var h=d[g+"_save"]=[];
E(GelTags(g,a),function(j,i){
h.push(j.value+j.checked);
j.setAttribute("saveid",i);
});
});
if(!d.onsetbeforeunloadcheck)
{
d.onsetbeforeunloadcheck=function(){
if(d.gbIsBeforeUnloadCheck)
{
for(var n=0,g=f.length;n<g;n++)
{
var m=f[n],k=m+"_save",h=GelTags(m,a);
for(var o=0,p=h.length;o<p;o++)
{
var l=h[o].getAttribute("saveid");
if(l!=null&&h[o].getAttribute("nocheck")!="true"&&d[k][l]!=(h[o].value+h[o].checked))
{
return e?e:"\u60A8\u4FEE\u6539\u7684\u8BBE\u7F6E\u5C1A\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F";
}
}
}
}
};
gbIsIE?(d.document.body.onbeforeunload=d.onsetbeforeunloadcheck):d.document.body.setAttribute("onbeforeunload","return onsetbeforeunloadcheck();");
}
E(b||["cancel"],function(g){
addEvent(typeof (g)=="string"?S(g,d):g,"mousedown",function(){
d.gbIsBeforeUnloadCheck=false;
});
});
E(GelTags("form",d.document),function(g){
addEvent(g,"submit",function(){
d.gbIsBeforeUnloadCheck=false;
});
if(!g._submit)
{
g._submit=g.submit;
g.submit=function(){
d.gbIsBeforeUnloadCheck=false;
this._submit();
};
}
});
}
function popErrProcess(d,e,a,b,c,f)
{
if(d!=null)
{
msgBox(d,e,a,b);
}
if(f!=null)
{
getMainWin().ShowPopErr(f,c);
}
showSubmitBtn();
}
function showSubmitBtn()
{
var a=S("submitbtn",getMainWin());
if(a)
{
a.disabled=false;
}
}
function showPopSvr()
{
show(S("popsvrTR",getMainWin()),true);
}
function setTaskId(a)
{
try{
getMainWin().document.checkFrom.taskid.value=a;
}
catch(b)
{
}
}
function showQuickReply(a)
{
show(S('quickreply',getMainWin()),a);
show(S('upreply',getMainWin()),!a);
runUrlWithSid("/cgi-bin/getcomposedata?Fun=setshowquickreply&isShowQuickReply="+(a?0:1));
}
function hiddenReceipt(a)
{
show(S("receiptDiv",a),false);
}
function switchOption(a)
{
var b=[["<span class='qm_ico_quickup' alt='\u663E\u793A\u66F4\u591A' title='\u9690\u85CF'></span>",true],["<span class='qm_ico_quickdown' alt='\u663E\u793A\u66F4\u591A' id='display_more_operator'></span>",false]][S("trOption",a).style.display=="none"?0:1];
S("aSwitchOption",a).innerHTML=b[0];
show(S("trOption",a),b[1]);
}
function checkPerDel(a)
{
delMail("PerDel",a);
}
function delMail(b,a)
{
rmMail(b=="PerDel"?1:0,a.QMReadMail.getCBInfo(a));
}
function setMailType(d,b,a,c)
{
var e=S("mail_frm",c);
e.s.value=["readmail_",b?(a?"group":d):("not"+d),getMainWin().newwinflag?"_newwin":""].join("");
e.action="/cgi-bin/mail_mgr?sid="+getSid();
e.mailaction.value="mail_spam";
e.isspam.value=b;
e.reporttype.value=d=="cheat"?"1":"";
submitToActionFrm(e);
}
function getAddrSub(b)
{
var a=b.indexOf("@");
if(a>-1)
{
var d=b.substr(0,a);
var c=b.substr(a);
return subAsiiStr(d,18,'...')+subAsiiStr(c,18,'...');
}
else{
debug("name+dom"+b);
return subAsiiStr(b,36,'...');
}
}
function getRefuseText(a)
{
var b=T(['<input type="checkbox" name="$TNAME$" id="$TID$" $TCHECK$>\u5C06<label for="$TID$">$TVALUE$</label>\u52A0\u5165\u9ED1\u540D\u5355']);
var e;
var g="";
var d="";
for(e in a)
{
var h="refuse";
if(e>0)
{
h="refuse"+e;
d="<br>";
}
var c;
if(a[e]!="\u53D1\u4EF6\u4EBA")
c="&lt;"+getAddrSub(a[e])+"&gt;";
else c=a[e];
var f="";
debug("ITEM: "+a[e]);
g+=d+b.replace({TNAME:h,TID:h,TVALUE:c,TCHECK:f});
}
debug("RET Text"+g);
return g;
}
function reportSpam(c,b,e,d,a)
{
debug("Enter mail.js reportSpam "+c);
var n=e||(window==getTopWin()?getMainWin():window);
if(!S("mail_frm",n))
{
debug("enter from maillist");
var k=QMMailList.getCBInfo(n),j,i=0,h=k.oMail.length,l={};
if(h==0)
{
showError(gsMsgNoMail);
return false;
}
for(var f=0;f<h;f++)
{
j=k.oMail[f];
if(j.bSys)
{
}
i+=j.bDft?1:0;
if(j.sSEmail.indexOf("@groupmail.qq.com")!=-1)
{
c=true;
}
else if(j.sSEmail.indexOf("10000@qq.com")!=-1)
{
c=true;
}
if(typeof l.sender=="undefined")
{
l.sender=j.sSEmail;
l.nickname=j.sSName;
}
else if(l.sender!=j.sSEmail)
{
l.sender="";
}
}
if(i==h)
{
d=1;
}
else{
for(f=0;f<h;f++)
{
j=k.oMail[f];
}
k=QMMailList.getCBInfo(n);
QMMailList.selectedUI(k);
}
}
var p=new Array();
p[0]="\u53D1\u4EF6\u4EBA";
if(l&&l.sender&&l.sender.indexOf(',')<0)
{
p[0]=l.sender;
}
var g=0;
if(a)
{
if(a[0].length>0)
p[g++]=a[0];
if(a[1])
p[g++]=a[1];
}
var m=T(['<div>','<input type="radio" name="reporttype" id="r$value$" value="$value$" $checked$>','<label for="r$value$">$content$</label>','</div>']);
var o=(d!==1?["<div style='padding:10px 10px 0 25px;text-align:left;'>","<form id='frm_spamtype'>","<div style='margin:3px 0 3px 3px'><b>\u8BF7\u9009\u62E9\u8981\u4E3E\u62A5\u7684\u5783\u573E\u7C7B\u578B\uFF1A</b></div>",m.replace({value:(b?11:8),checked:"checked",content:"\u5176\u4ED6\u90AE\u4EF6"}),m.replace({value:(b?10:4),checked:"",content:"\u5E7F\u544A\u90AE\u4EF6"}),m.replace({value:(b?9:1),checked:"",content:"\u6B3A\u8BC8\u90AE\u4EF6"}),"<div style=\"padding:5px 0 2px 0;\">",(c?"&nbsp;":getRefuseText(p)),"</div><div style='margin:10px 3px 0px 3px' class='addrtitle' >\u6E29\u99A8\u63D0\u793A\uFF1A\u6211\u4EEC\u5C06\u4F18\u5148\u91C7\u7EB3\u51C6\u786E\u5206\u7C7B\u7684\u4E3E\u62A5\u90AE\u4EF6\u3002</div>","</form>","</div><div style='padding:3px 15px 12px 10px;text-align:right;'>","<input type=button id='btn_ok' class='btn wd2' value=\u786E\u5B9A>","<input type=button id='btn_cancel' class='btn wd2' value=\u53D6\u6D88>","</div>"]:["<div class='cnfx_content'>","<img style='float:left; margin:5px 10px 0;' src='",getPath("image"),"ico_question.gif' />","<div class='b_size' style='padding:10px 10px 0 0;margin-left:65px;line-height:1.5;height:80px;text-align:left;'>","<form id='frm_spamtype'>","<strong>\u60A8\u8981\u4E3E\u62A5\u8FD9\u4E2A\u6F02\u6D41\u74F6\u5417\uFF1F</strong><br>","<div style=\"display:none\">",m.replace({value:8,checked:"checked",content:""}),"</div>","\u4E3E\u62A5\u4EE5\u540E\uFF0C\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u8FD9\u4E2A\u6F02\u6D41\u74F6\u7684\u56DE\u5E94\u3002","</form>","</div></div><div class='cnfx_btn'>","<input type=button id='btn_ok' class='btn wd2' value=\u786E\u5B9A>","<input type=button id='btn_cancel' class='btn wd2' style='margin-left:5px' value=\u53D6\u6D88>","</div>"]).join("");
new (getTop().QMDialog)({sId:"reportSpam",sTitle:d===1?"\u7838\u6389\u8FD9\u4E2A\u74F6\u5B50":"\u4E3E\u62A5\u5E76\u62D2\u6536\u9009\u4E2D\u90AE\u4EF6",sBodyHtml:o,nWidth:450,nHeight:d===1?150:220,onload:function(){
var q=this;
addEvent(q.S("btn_ok"),"click",function(){
var s=S("mail_frm",getMainWin())||S("frm",getMainWin());
if(!s)
{
return;
}
s.s.value="readmail_spam";
s.isspam.value='true';
s.mailaction.value="mail_spam";
s.action='/cgi-bin/mail_mgr?sid='+getTop().getSid();
var v=q.S("frm_spamtype").reporttype,t=q.S("frm_spamtype").refuse,u=q.S("frm_spamtype").refuse1;
for(var x=0,r=v.length;x<r;x++)
{
if(v[x].checked)
{
s.reporttype.value=v[x].value;
break;
}
}
var w=new Array();
w[0]="0";
w[1]="0";
if((t&&t.checked)||(u&&u.checked))
{
s.s.value="readmail_reject";
}
if(u)
{
w[0]=t&&t.checked?"1":"0";
w[1]=u.checked?"1":"0";
}
else{
w[0]="1";
w[1]="1";
}
if(s.s_reject_what)
{
s.s_reject_what.value=w[0]+w[1];
debug("Reject method "+s.s_reject_what.value);
}
submitToActionFrm(s);
q.close();
});
addEvent(q.S("btn_cancel"),"click",function(){
q.close();
});
},onshow:function(){
this.S("btn_cancel").focus();
}});
return false;
}
function setSpamMail(b,a,c)
{
var d=c||(window==getTopWin()?getMainWin():window);
if(b&&!a)
{
return reportSpam(null,null,d);
}
setMailType("spam",b,a,d);
}
function setCheatMail(b,a)
{
setMailType("cheat",b,a);
}
function doReject(b,a,d,c,e)
{
var g="";
if(c)
{
g=htmlEncode("<"+c+">");
}
var f=S("mail_frm",d);
if(f.s_reject_what)
{
f.s_reject_what.value="10";
}
confirmBox({title:"\u62D2\u6536\u786E\u8BA4",msg:e||"\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u6B64\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F",confirmBtnTxt:"\u62D2\u6536",cancelBtnTxt:"\u53D6\u6D88",confirmClass:"btn_blue",onreturn:function(h){
if(h)
{
setMailType("reject",b,a,d);
}
}});
}
function setFolderReaded(_asFolderId,_asGroupId,_asUnread,_asFlag)
{
var _nUnReadCnt=_asFolderId=="all"?parseInt(_asUnread||"0"):(_asGroupId?getGroupUnread(_asGroupId):getFolderUnread(_asFolderId));
if(_nUnReadCnt<1)
{
return showError("\u6587\u4EF6\u5939\u5185\u6CA1\u6709\u672A\u8BFB\u90AE\u4EF6");
}
var _sSid=getSid(),_sMask=unikey("allread"),_fSetAllRead=function(){
QMAjax.send("/cgi-bin/mail_mgr?mailaction=read_all&t=unreadmail_reg_data&loc=setFolderUnread,,,32",{method:"POST",content:T('sid=$sid$&folderid=$folderid$&groupid=$groupid$$flags$').replace({sid:_sSid,folderid:_asFolderId!="all"?_asFolderId:"1&folderid=3&folderid=8&folderid=9&folderid=11&folderid=personal&folderid=pop&folderid=subscribe",groupid:_asGroupId,flags:_asFolderId=='all'&&!_asFlag?'&flag=all':(_asFlag?_asFlag:"")}),onload:function(_abIsOk,_asParam){
if(_abIsOk&&_asParam.indexOf("mark_allmail_ok")>-1)
{
var _sMsg="\u6587\u4EF6\u5939\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C";
showInfo(_sMsg+"\u6210\u529F");
var _oResult=eval(_asParam);
setRollBack(_oResult.rbkey,_sMsg);
QMMLCache.upVer();
if(!!getMainWin()[_sMask])
{
QMMLCache.reload();
}
else{
reloadFrmLeftMain(true,false);
}
}
else{
showError("\u6587\u4EF6\u5939\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
}
}});
};
getMainWin()[_sMask]=1;
_fSetAllRead();
}
function addContentMouseEvent(a,b)
{
if(!a)
{
return;
}
else{
var c=getTop().getDomWin(a);
addEvents(a,{mouseover:function(d){
var k=getEventTarget(d),f;
if(attr(k,"t")=="5")
{
c.QMReadMail.addCalEvent(k,d,b);
f=true;
}
else if(attr(k,"t")=="7")
{
getTop().openMenu(k);
f=true;
}
if(!f)
{
return;
}
try{
var m=getTop(),l=m.calcPos(k),i=m.S("showcalpanel",m.getMainWin()),j=m.calcPos(i),g=m.S("contentDiv",m.getMainWin())||m.parents("div.qm_converstaion_body",k)[0],h=m.calcPos(g);
if(g&&j[2]>h[2])
{
i.style.top=l[2]-j[2]+"px";
}
}
catch(n)
{
}
},mouseout:function(d){
var e=getEventTarget(d);
if(attr(e,"t")=="5")
{
c.QMReadMail.hideCalEvent(e,d);
}
else if(attr(e,"t")=="7")
{
getTop().hideMenu(d,e);
}
},mousedown:function(d){
var e=getEventTarget(d);
if(attr(e,"t")=="7")
{
getTop().md();
}
}});
}
}
function linkMaker(c,b)
{
var f="([a-z0-9.!#$%&'+/=?^_`{|}~-]{3,}@(?:[A-Z0-9-]+\\.)+[A-Z]{2,4})",g=['(','(?:https?:\\/\\/|www\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}\\/)','(?:','(?:&amp;amp;)','|','(?:&amp;)','|','[^\\s`!()\uFF08\uFF09\\[\\]{};\'"<>\u201C\u201D\u2018\u2019\u3002\uFF0C\uFF1B]','|','(?:[(\uFF08][^\\s()\uFF08\uFF09<>]+[)\uFF09])','|','(?:[(\uFF08][^\\s()\uFF08\uFF09<>]*?[(\uFF08][^\\s()\uFF08\uFF09<>]*?[)\uFF09][)\uFF09])',')+','(?:','(?:[(\uFF08][^\\s()\uFF08\uFF09<>]+[)\uFF09])','|','(?:[(\uFF08][^\\s()\uFF08\uFF09<>]*?[(\uFF08][^\\s()\uFF08\uFF09<>]*?[)\uFF09][)\uFF09])','|','[^\\s`!()\uFF08\uFF09\\[\\]{};:\'".,<>?\u201C\u201D\u2018\u2019\u3002\uFF0C\uFF1B]',')',')'].join(""),h=(/((?:\+[0-9]+[\- ]*)?(?:\([0-9]+\)[\-]*)?(?:[0-9][0-9\-][0-9\-]+[0-9]{2,}))/g).source,e=(/((?!0000)[0-9]{4}(?:[-/]{1})(?:(?:0?[1-9]|1[0-2])(?:[-/]{1})(?:0[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])(?:[-/]{1})(?:29|30)|(?:0?[13578]|1[02])(?:[-/]{1})31)|(?!0000)[0-9]{4}(?:[-/\u5E74]{1})(?:(?:0?[1-9]|1[0-2])\u6708(?:0?[1-9]|1[0-9]|2[0-8])\u65E5|(?:0?[13-9]|1[0-2])\u6708(?:29|30)\u65E5|(?:0?[13578]|1[02])\u670831\u65E5)|(?!\u5E74)(?:(?:0?[1-9]|1[0-2])\u6708(?:0?[1-9]|1[0-9]|2[0-8])\u65E5|(?:0?[13-9]|1[0-2])\u6708(?:29|30)\u65E5|(?:0?[13578]|1[02])\u670831\u65E5)|(?![/-])(?:(?:0[1-9]|1[0-2])(?:[-/]{1})(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])(?:[-/]{1})(?:29|30)|(?:0[13578]|1[02])(?:[-/]{1})31))/g).source;
function a(j)
{
var l=12,n=j||"",m=[],k=n.length/l;
for(var o=0;o<k;o++)
{
m[o]=n.substr(o*l,l);
}
return m.join("<wbr>");
}
function d(j)
{
var k=0,n=j;
for(var o=0,p=n.length;o<p;o++)
{
if(/\d/.test(n.charAt(o)))
k++;
}
if(k>=5&&k<=20)
{
var m=n.split(/(\s|-)/);
m=m.slice(m.length-3);
if(m.length>0)
{
for(var o=0,p=m.length;o<p;o++)
{
if(m[o].length>2)
{
return true;
}
}
}
else{
return true;
}
}
return false;
}
return c.replace(new RegExp([g,f,e,h].join("|"),"ig"),function(l,k,j,i,m){
var q;
if(k)
{
var o=l.indexOf("http")!=0?"http://"+l:l;
q=['<a href="',o,'">',a(l),'</a>'].join("");
}
else if(j)
{
var o=l;
var p=o.match(/(.*)@/);
p&&(p=p[1]);
if(p&&p.length>=3&&(!p.match(/^\d+$/)||p.match(/^\d+$/)&&+p>=10000))
{
q=['<a href="','mailto:',o,'">',a(l),'</a>'].join("");
}
else{
q=l;
}
}
else if(i)
{
if(b)
{
var n=b.parentNode.firstChild,r=n.innerText||n.textContent||n.nodeValue||"";
if(r.charAt(r.length-1)!=":")
{
var s=c.substring(arguments[arguments.length-2]+l.length,arguments[arguments.length-2]+l.length+6);
!s.match(/\s?\d\d:\d\d/g)&&(s="");
q="<span style='border-bottom:1px dashed #ccc;' t='5' times='"+s+"' >"+l+"</span>";
}
else{
q=l;
}
}
else{
q=l;
}
}
else if(m)
{
if(d(m))
{
q="<span style='border-bottom:1px dashed #ccc;z-index:1' t='7' onclick='return false;' data='"+l+"'>"+l+"</span>";
LogKV({sValue:'APP|telphone_push|available'});
}
else{
q=l;
}
}
return q;
});
}
function hideMenu(a,b)
{
var g=getTop(),d=g.S("showcalpanel",g.getMainWin());
if(!d)
{
return;
}
if(!b)
b=d.parentNode;
var e=g.calcPos(d),f=g.calcPos(b),c=a||window.event;
setTimeout(function(){
if(d&&g.isShow(d)&&g.attr(b,"isout")!=0)
{
g.removeSelf(d);
b.style.cssText="border-bottom:1px dashed #ccc;z-index:1;position:static";
}
},100);
}
function openMenu(b,a)
{
if(getTop().getMainWin()._bIsNotShowPop)
{
return;
}
var e=getTop(),d=e.calcPos(b),c=e.S("showcalpanel",e.getMainWin());
var f=e.htmlEncode(e.attr(b,"data"));
if(/^((?:\+[0-9]+[\- ]*)?(?:\([0-9]+\)[\-]*)?(?:[0-9][0-9\-][0-9\-]+[0-9]{2,}))$/g.test(f))
{
c&&c.parentNode&&(c.parentNode.style.cssText="border-bottom:1px dashed #ccc;z-index:1;position:static");
c&&e.removeSelf(c);
b.style.cssText="border-bottom:1px dashed #ccc;position:relative;_display:inline-block;z-index:1";
e.insertHTML(b,"beforeEnd",'<span id="showcalpanel" class="showcalpanel" style="width:169px;font-weight:normal;z-index:1;font-family:\'lucida Grande\', Verdana, \'Microsoft YaHei\';" onmouseover="getTop().attr(this.parentNode, \'isout\', 0);getTop().stopPropagation(event);" onmouseout="getTop().attr(this.parentNode, \'isout\', 1);getTop().hideMenu(event);"><a class="add2calendar" onclick="getTop().pushTelp(\''+f+'\');return false;"><span class="ico_pushtel"></span>\u53EF\u80FD\u662F\u7535\u8BDD\u53F7\u7801\uFF0C\u662F\u5426\u62E8\u53F7?</a></span>');
LogKV({sValue:'APP|telphone_push|showMenu'});
}
}
function md()
{
getTop().getMainWin()._bIsNotShowPop=1;
var b=getTop(),a=b.S("showcalpanel",b.getMainWin());
if(a&&b.isShow(a)&&getTop().attr(a.parentNode,"isout")!=0)
{
a.parentNode.style.cssText="border-bottom:1px dashed #ccc;z-index:1;position:static";
b.removeSelf(a);
}
}
function mu()
{
getTop().getMainWin()._bIsNotShowPop=0;
}
function pushTelp(a)
{
var c=4,e=getTop(),f=a,d=parseInt(e.goUserInfo.get("IOSWEBAPPVERNEW"),10)||0,b=parseInt(e.goUserInfo.get("ANDROIDWEBAPPVERNEW"),10)||0;
if(d>=c||b>=c)
{
telphonePushWizard(f);
}
else{
installAppWizard();
}
LogKV({sValue:'APP|telphone_push|use'});
}
function telphonePushWizard(a)
{
var b=getTop(),c=a;
confirmBox({title:"\u62E8\u53F7\u786E\u8BA4",msg:T(['<div class="dialog_f_t">\u901A\u8FC7QQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF\u8FDB\u884C\u62E8\u53F7\uFF1A$telphonenumb$\uFF1F</div>','<div class="dialog_f_d">\uFF08\u6B64\u529F\u80FD\u9700\u8981QQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF4.0\u7248\u672C\u53CA\u4EE5\u4E0A\u914D\u5408\u4F7F\u7528\uFF0C</br>\u672A\u5B89\u88C54.0\u7248\u672C\uFF0C\u8BF7<a href="http://app.mail.qq.com/" target="_blank" style="color:rgba(25, 99, 255, 1);">\u70B9\u6B64\u4E0B\u8F7D</a>\uFF09</div>']).replace({telphonenumb:c}),confirmBtnTxt:'\u786E\u5B9A',cancelBtnTxt:'\u53D6\u6D88',onreturn:function(d){
if(d)
{
b.QMAjax.send("/cgi-bin/webapnscheck",{content:b.T("sid=$sid$&key=$key$&action=pushphoneno&phoneno=$phoneno$").replace({sid:b.getSid(),key:"",phoneno:encodeURIComponent(c)}),method:"POST",onload:function(){
confirmBox({title:"\u65B0\u6D88\u606F\u63D0\u9192\u5DF2\u53D1\u51FA",msg:['<div class="dialog_f_t">\u624B\u673A\u7AEF\u4F1A\u6536\u5230\u65B0\u6D88\u606F\u63D0\u9192\uFF0C\u8BF7\u70B9\u51FB\u65B0\u6D88\u606F\u901A\u77E5\u5F00\u59CB\u62E8\u53F7</div>','<div class="dialog_f_d">\uFF08\u82E5\u957F\u65F6\u95F4\u672A\u6536\u5230\u65B0\u6D88\u606F\u901A\u77E5\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u6709\u5F00\u542F\u624B\u673A\u7CFB\u7EDF\u901A</br>\u77E5\u6216\u5C1D\u8BD5\u91CD\u65B0\u62E8\u53F7\uFF09</div>'].join(""),onload:function(){
this.S("_foot_").style.display="none";
}});
}});
}
}});
}
function installAppWizard()
{
var a=getTop();
var b=new (a.QMDialog)({sId:"iphoneuploadimg",sTitle:"\u8BF7\u5B89\u88C5QQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF\u6700\u65B0\u7248\u672C",sBodyHtml:['<div class="QMEditorToolPop">','<div class="qmEditorPicContent" id="content">','<div id="loading" style="padding-bottom:25px;overflow:hidden;">','<div class="iphonetel_phone_code"></div>','<p class="ufa_intro" style="margin-top:14px;width:320px">\u62E8\u53F7\u529F\u80FD\u9700\u8981QQ\u90AE\u7BB1\u624B\u673A\u5BA2\u6237\u7AEF4.0\u7248\u672C\u53CA\u4EE5\u4E0A\u914D\u5408\u4F7F\u7528\uFF0C\u8BF7\u5148\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u5B89\u88C5\uFF0C\u767B\u5F55\u8BE5QQ\u90AE\u7BB1\u540E\u5373\u53EF\u4F7F\u7528\u3002</p>','</div>','</div>','</div>'].join(""),nWidth:384,bAnimation:false});
}
function linkIdentify(a)
{
if(!a||a.tagName=="A"||a.tagName=="SCRIPT"||a.tagName=="STYLE"||a.className=="qqmailbgattach"||a.tagName=="PRE"||a.tagName=="CODE")
{
return;
}
for(var c=a.firstChild,f;c;c=f)
{
f=c.nextSibling;
linkIdentify(c);
}
if(a.nodeType==3)
{
var e=a.nodeValue.replace(/&/g,'&amp;').replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=linkMaker(e,a);
if(e!=d)
{
var b=false;
if(a.previousSibling)
{
b=insertHTML(a.previousSibling,"afterEnd",d);
}
else{
b=insertHTML(a.parentNode,"afterBegin",d);
}
if(b)
{
removeSelf(a);
}
}
}
}
function isLinkNeedSwap(b)
{
var d=b.href||"",a=b.ownerDocument,c=(a.parentWindow||a.defaultView).location;
if(d.indexOf("mail.qq.com/cgi-bin/ftnDownload302")>-1)
{
return false;
}
if(d.split('#')[0]===c.href.split('#')[0])
{
return false;
}
return !b.onclick&&d&&d.indexOf("javascript:")!=0;
}
function swapLink(c,b,a,d)
{
var f=c.ownerDocument?c:S(c,a);
if(f)
{
function e(g)
{
if(isLinkNeedSwap(g))
{
g.target="_blank";
g.onclick=function(h){
var i=_openExtLink(this,b,d);
!i&&preventDefault(h||(a&&a.event));
return i;
};
}
g=null;
}
linkIdentify(f);
addContentMouseEvent(f,d);
E(GelTags("a",f),e);
E(GelTags("area",f),e);
E(GelTags("form",f),function(g){
g.onsubmit=function(){
if(this.action)
{
this.target="_blank";
return true;
}
showError('\u51FA\u4E8E\u5B89\u5168\u8003\u8651\u8BE5\u64CD\u4F5C\u5DF2\u88AB\u5C4F\u853D');
return false;
};
});
}
f=null;
}
function preSwapLink(a,b,c)
{
var d=getEventTarget(a);
if(d&&{"A":1,"AREA":1}[d.tagName]&&isLinkNeedSwap(d))
{
_openExtLink(d,b,c)&&window.open(d.href);
preventDefault(a);
}
}
function swapImg(d,a,c,b)
{
}
function openSpam(a)
{
}
function openHttpsMail(a)
{
a.location.replace(appendToUrl(a.location.href,"&dispimg=1"));
}
function copyToClipboard(b,a)
{
try{
var c=a||document;
if(gbIsFF)
{
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(b);
}
else{
var d=S("copyinputcontainer");
if(!d)
{
insertHTML(c.body,"beforeEnd",'<input id="copyinputcontainer" style="position:absolute;top:-1000px;left:-1000px;"/>');
d=S("copyinputcontainer");
}
d.value=b;
d.select();
c.execCommand('Copy');
}
}
catch(f)
{
alert(T('\u60A8\u7684\u6D4F\u89C8\u5668\u5B89\u5168\u8BBE\u7F6E\u4E0D\u5141\u8BB8\u7F16\u8F91\u5668\u81EA\u52A8\u6267\u884C\u590D\u5236\u64CD\u4F5C\uFF0C\u8BF7\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E($cmd$+C)\u6765\u5B8C\u6210\u3002').replace({cmd:gbIsMac?"Command":"Ctrl"}));
return false;
}
return true;
}
function _openExtLink(a,b,c)
{
var q=getDomWin(a);
if(a.href.indexOf("mailto:")==0&&a.href.indexOf("@")!=-1)
{
var u=a.href.split("mailto:")[1];
if(u=="mail_qq@qq.com"&&attr(a.parentNode,"subject"))
{
u+=("&initsubject="+attr(a.parentNode,"subject"));
}
window.open(["/cgi-bin/readtemplate?sid=",getSid(),"&t=compose&s=cliwrite&newwin=true&email=",u].join(""));
return false;
}
else if(a.className=="qqmail_card_reply"||a.className=="qqmail_card_reply_btn"||a.className=="qqmail_birthcard_reply"||a.className=="qqmail_birthcard_reply_btn"||/(http:|https:)?(\/\/)i.mail.qq.com\/cgi-bin\/uma_compose_card/i.test(a.href))
{
var t=a.name,r=a.className,f=!!t,d=r.indexOf("birthcard")!=-1;
getMainWin().location=T('/cgi-bin/cardlist?sid=$sid$&t=$t$&s=$s$&today_tips=$tips$&loc=readmail,readmail,sendnewcard,1&ListType=$listtype$&email=$email$$newwin$').replace({sid:getSid(),t:f?"compose_card":"card",s:d?"replybirthcard":"",tips:r.indexOf("btn")!=-1?"112":"111",listtype:f?"No":"Cards&Cate1Idx=listall",email:t,newwin:getTop().bnewwin?"&newwin=true":""});
return false;
}
else if(a.className=="qqmail_postcard_reply_mobile")
{
var n=q.QMReadMail;
if(n)
{
getMainWin().location=T("/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=compose&s=reply&disptype=html").replace({sid:getSid(),mailid:n.getMailId()});
}
return false;
}
else if(a.className=="qqmail_postcard_sendhelp_mobile")
{
window.open("http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=36&&no=1000696");
return false;
}
else if(/qqmail_shareCalendar_joinBtn/i.test(a.className)&&/\/cgi-bin\/calendar\?/i.test(a.href))
{
var I=a.href;
I=trim2(I);
QMAjax.send(I,{method:"POST",content:"sid="+getSid(),onload:function(e,O){
if(e)
{
if(/<!--cgi exception-->/ig.test(O))
{
var R=(/<!--cgierrorcode:-([\d]+)-->/ig.test(O)&&RegExp.$1);
if("821"==R)
{
showError("\u5BF9\u65B9\u5DF2\u505C\u6B62\u5171\u4EAB\u65E5\u5386");
}
else if("810"==R)
{
var Q=(/<!--email:([\W\w]+?)-->/ig.test(O)&&RegExp.$1);
showError("\u8BF7\u767B\u5F55\u8D26\u53F7"+Q+"\u91CD\u65B0\u52A0\u5165\u65E5\u5386");
}
else if("823"==R)
{
showError("\u9080\u8BF7\u90AE\u4EF6\u5DF2\u8FC7\u671F");
}
else if("2"==R)
{
var P=getTop();
P.goUrl(P,[P.location.protocol,"//",P.location.hostname,"/cgi-bin/loginpage"].join(""));
}
else{
showError("\u52A0\u5165\u5931\u8D25");
}
return;
}
showInfo("\u52A0\u5165\u6210\u529F");
}
else{
showError("\u52A0\u5165\u5931\u8D25");
}
}});
return false;
}
else if(/qqmail_appleid_verify_code_changeBtn/i.test(a.className))
{
var i=parents("td.qqmail_appleid_verify_code_container",a),j=finds("td.qqmail_appleid_verify_code_desc",i[0])[0],o=finds("a.qqmail_appleid_verify_code_sendBtn",i[0])[0],G=attr(o,"data-type"),p={"appleid":"appleid_wx","appleid_wx":"appleid"},k={"appleid":"\u9A8C\u8BC1\u7801\u53D1\u9001\u81F3 \u624B\u673AQQ-\u670D\u52A1\u53F7-QQ\u5B89\u5168\u4E2D\u5FC3","appleid_wx":"\u9A8C\u8BC1\u7801\u53D1\u9001\u81F3 \u624B\u673A\u5FAE\u4FE1-\u670D\u52A1\u53F7-\u5FAE\u4FE1\u5B89\u5168\u4E2D\u5FC3"},h={"appleid":"\u5207\u6362\u81F3QQ\u5B89\u5168\u9A8C\u8BC1","appleid_wx":"\u5207\u6362\u81F3\u5FAE\u4FE1\u5B89\u5168\u9A8C\u8BC1"},C=p[G];
if(C)
{
j.innerHTML=k[C];
attr(o,"data-type",C);
a.innerHTML=h[G];
}
return false;
}
else if(/qqmail_appleid_verify_code_sendBtn/i.test(a.className))
{
var y=attr(a,"data-mailid");
var G=attr(a,"data-type");
if(G!=="appleid"&&G!=="appleid_wx")
{
return;
}
loadCssFile("$css_path$login/addAccount327bfb.css",true,_oTop.document);
function N()
{
showInfo("\u53D1\u9001\u9A8C\u8BC1\u7801...");
QMAjax.send("/cgi-bin/gen_safecode",{method:"POST",content:["t=apple_id_verify.json&mailid=",encodeURIComponent(y),"&type=",encodeURIComponent(G)].join(""),onload:function(e,O){
var P=evalValue(O||"{}");
if(e&&P&&P.resCode=="0")
{
showInfo("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001");
}
else{
if(/<!--cgi exception-->/ig.test(O))
{
var R=(/<!--cgierrorcode:-([\d]+)-->/ig.test(O)&&RegExp.$1);
if("2"==R)
{
goUrl(window,[location.protocol,"//",location.hostname,"/cgi-bin/loginpage"].join(""));
}
}
var Q;
switch(P.resCode)
{case "-102":
Q="\u9891\u7387\u592A\u5FEB\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5";
break;
case "-110":
Q="\u672A\u7ED1\u5B9A\u5FAE\u4FE1\u5E10\u4FE1";
break;
case "-112":
Q="\u9891\u7387\u592A\u5FEB\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5";
break;
case "-101":
case "-111":
default:
Q="\u83B7\u53D6\u9A8C\u8BC1\u7801\u5931\u8D25";
}showError(Q);
}
}});
}
N();
var g;
function J()
{
var O=g.S("ipt_username"),e=O.value||"";
if(e.length<6)
{
showError("\u8BF7\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801");
return;
}
QMAjax.send("/cgi-bin/gen_safecode",{method:"POST",content:["type=appleid_check&t=apple_id_verify.json&mailid=",encodeURIComponent(y),"&safecode=",encodeURIComponent(e)].join(""),onload:function(P,Q){
var R=evalValue(Q||"{}");
if(P&&R&&R.resCode=="0")
{
showInfo("\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u8BFB\u4FE1\u4E2D...");
g.close();
getMainWin().location.reload();
}
else{
if(/<!--cgi exception-->/ig.test(Q))
{
var V=(/<!--cgierrorcode:-([\d]+)-->/ig.test(Q)&&RegExp.$1);
if("2"==V)
{
goUrl(window,[location.protocol,"//",location.hostname,"/cgi-bin/loginpage"].join(""));
}
}
var U;
switch(R.resCode)
{case "-200":
U="\u9A8C\u8BC1\u7801\u4E3A\u7A7A";
break;
case "-201":
U="\u9A8C\u8BC1\u7CFB\u7EDF\u7E41\u5FD9";
break;
case "-202":
U="\u9891\u7387\u592A\u5FEB\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5";
break;
case "-204":
U="\u9A8C\u8BC1\u7801\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u7801";
break;
case "-203":
default:
U="\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u9A8C\u8BC1\u7801";
}showError(U);
}
}});
}
g=new QMDialog({oEmbedWin:getMainWin(),sId:"id_appleIdVerifyCode",sTitle:"\u8F93\u5165\u9A8C\u8BC1\u7801",nWidth:440,sBodyHtml:['<div class="addAccount_step addAccount_step_Username">','<div id="div_warning" class="addAccount_errorTip"></div>','<div style="position: relative;left: 60px;top: -10px;/*color: #969696;*/">','\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u81F3 <span style="font-weight: bold;">\u624B\u673AQQ-\u670D\u52A1\u53F7-QQ\u5B89\u5168\u4E2D\u5FC3</span>','</div>','<div id="div_frame_container" class="addAccount_text" style="left:60px">','<input type="text" id="ipt_username" class="addAccount_ipt"/>','</div>','</div>','<div class="dialog_operate addAccount_foot" id="div_foot">','<a href="javascript:;"  id="geConfirmBtn" class="qui_btn qui_btn_Blue">\u786E\u5B9A</a>','<a href="javascript:;"  id="geCancelBtn" class="qui_btn addAccount_foot_cancel">\u53D6\u6D88</a>','</div>'].join(""),bAnimation:false,onshow:function(){
var O=this,e=O.S("ipt_username");
e.focus();
O.S("geConfirmBtn").onclick=function(){
J();
};
O.S("geCancelBtn").onclick=function(){
O.close();
};
e.onkeydown=function(P){
var Q=P||window.event;
if(Q.keyCode===13)
{
J();
preventDefault(Q);
return false;
}
};
e.oninput=e.onpropertychange=function(P){
var Q=(e.value||"").length;
if(Q>6)
{
e.value=e.value.slice(0,6);
}
};
}});
return false;
}
else if(a.className=="qqmail_newcard_reply_thanksbtn"||/(http:|https:)?(\/\/)i.mail.qq.com\/cgi-bin\/uma_ack_card\?/i.test(a.href))
{
var t=attr(a,"email"),M=["\u5929\u4E86\u565C\uFF0C\u592A\u611F\u4EBA\u4E86\uFF0C\u8C22\u8C22\u4F60\u7684\u8D3A\u5361\uFF01","\u6536\u5230\u4F60\u7684\u8D3A\u5361\uFF0C\u771F\u662F\u592A\u5F00\u5FC3\u5566\uFF01\uFF01","\u597D\u5F00\u5FC3\u54E6\uFF0C\u8C22\u8C22\u4F60\u7684\u8D3A\u5361\u54E6\uFF01","\u8C22\u8C22\u4F60\u7684\u8D3A\u5361\uFF0C\u5E38\u8054\u7CFB\uFF01","\u6709\u4EBA\u60E6\u8BB0\u7684\u611F\u89C9\u771F\u597D\uFF0C\u611F\u8C22\u6709\u4F60\uFF01","\u8C22\u8C22\u4F60\u5728\u8FD9\u4E2A\u7F8E\u597D\u7684\u65E5\u5B50\u8BB0\u5F97\u6211\uFF01\u5E38\u8054\u7CFB\uFF01","\u6536\u5230\u4F60\u7684\u8D3A\u5361\u5566\uFF0C\u611F\u52A8\u5F97\u4E0D\u8981\u4E0D\u8981\u7684\u3002\u3002\u3002","\u563F\uFF0C\u6211\u6536\u5230\u8D3A\u5361\u4E86\u54E6\uFF0C\u597D\u68D2\u5594\uFF0C\u8C22\u8C22\u4F60\uFF01","\u8C22\u8C22\u4F60\u7684\u8D3A\u5361\uFF0C\u6211\u7684\u670B\u53CB\uFF01","\u8C22\u8C22\u4F60\u7684\u8D3A\u5361\uFF0C\u4E5F\u795D\u4F60\u5E78\u798F\u5FEB\u4E50\uFF01"],L=M[(Math.floor(Math.random()*M.length))];
openComposeDlg("card",{sTitle:"\u7B54\u8C22\u597D\u53CB",sDefAddrs:t,bAddrEdit:true,nWidth:495,sDefContent:L,bContentEdit:true,sDefSubject:"\u8C22\u8C22\u4F60\u7684\u8D3A\u5361!",bRichEditor:false,oncomplete:function(){
},bShowResult:true});
return false;
}
else if(a.className=="qqmail_card_reply_thanksbtn"||a.className=="qqmail_card_reply_thanks"||a.className=="qqmail_birthcard_reply_thanksbtn")
{
var t=a.name;
openComposeDlg("card",{sTitle:"\u7B54\u8C22\u597D\u53CB",sDefAddrs:t,bAddrEdit:true,nWidth:495,sDefContent:"\u8C22\u8C22\u4F60\u7684\u8D3A\u5361\uFF01 \u4EE5\u540E\u8981\u5E38\u8054\u7CFB\u54E6\u3002",bContentEdit:true,sDefSubject:"\u8C22\u8C22\u4F60\u7684\u8D3A\u5361!",bRichEditor:false,oncomplete:function(){
},bShowResult:true});
return false;
}
else if(a.className=="qqmail_postcard_reply_thanksbtn")
{
var t=a.name;
openComposeDlg("postcard",{sTitle:"\u7B54\u8C22\u597D\u53CB",sDefAddrs:t,bAddrEdit:true,nWidth:495,sDefContent:"\u8C22\u8C22\u4F60\u7684\u660E\u4FE1\u7247\uFF01 \u4EE5\u540E\u8981\u5E38\u8054\u7CFB\u54E6\u3002",bContentEdit:true,sDefSubject:"\u8C22\u8C22\u4F60\u7684\u660E\u4FE1\u7247!",bRichEditor:false,oncomplete:function(){
},bShowResult:true});
return false;
}
else if(a.className=="qqmail_postcard_reply")
{
goUrlMainFrm(T('/cgi-bin/readtemplate?sid=$sid$&t=compose_postcard&email=$email$').replace({sid:getSid(),email:a.name}),false);
return false;
}
else if(a.className=="qqmail_postcard_reply2")
{
var x='',w='',n=q.QMReadMail;
if(n)
{
try{
var l=(n.getSubMailWithDom?n.getSubMailWithDom(a):n.getMailInfo()).from;
x=l&&l.name||'';
w=l&&l.addr||'';
}
catch(K)
{
}
}
goUrlMainFrm(T('/cgi-bin/readtemplate?sid=$sid$&t=compose_postcard&email=$email$&reply=1&frname=$name$&fraddr=$addr$').replace({name:escape(x),addr:escape(w),sid:getSid(),email:a.name}),false);
return false;
}
else if(a.className=="qqmail_postcard_print")
{
var n=q.QMReadMail;
if(n)
{
window.open(T('/cgi-bin/readmail?sid=$sid$&t=print_haagendazs&s=print&filterflag=true&mailid=$mailid$').replace({sid:getSid(),mailid:n.getMailId()}));
}
return false;
}
else if(a.className=="qqmail_postcard_getmoreinfo")
{
var n=q.QMReadMail;
if(n)
{
window.open(T('/cgi-bin/today?t=haagendazs2010&sid=$sid$').replace({sid:getSid(),mailid:n.getMailId()}));
}
return false;
}
else if(a.className=="qqmail_videomail_reply")
{
goUrlMainFrm(T('/cgi-bin/readtemplate?sid=$sid$&t=compose_video&email=$email$').replace({sid:getSid(),email:a.name}),false);
return false;
}
else if(a.className=="groupmail_open")
{
getMainWin().location=["/cgi-bin/grouplist?sid=",getSid(),"&t=compose_group",(getTop().bnewwin?"&newwin=true":"")].join("");
return false;
}
else if(a.className=="reg_alias")
{
getMainWin().location=["/cgi-bin/readtemplate?reg_step=1&t=regalias_announce&sid=",getSid()].join("");
return false;
}
else if(a.className=="mergemail_reader_article_list_link")
{
var s=a.getAttribute("ctype");
var B=a.getAttribute("param_new");
var I="";
if(B.indexOf("follow=1")>=0)
{
var v=a.getAttribute("followuin");
I=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr";
QMAjax.send(I,{method:"POST",content:"fun=followshare&followuin="+v+"&sid="+getSid(),onload:function(e,O){
if(e)
{
getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$').replace({host:(getTop().gsRssDomain||""),sid:getSid(),param:B});
}
}});
}
else{
getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$').replace({host:(getTop().gsRssDomain||""),sid:getSid(),param:B});
}
if(s=="onefeed")
{
I=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=2";
}
else{
I=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=4";
}
runUrlWithSid(I);
return false;
}
else if(a.className=="mergemail_reader_setting_link")
{
getMainWin().location=T('$host$/cgi-bin/reader_setting?t=rss_setting_notify&sid=$sid$&$param$').replace({host:(getTop().gsRssDomain||""),sid:getSid(),param:a.getAttribute("param")});
var I=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=3";
runUrlWithSid(I);
return false;
}
else if(a.className=="reader_article_list_link")
{
getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$').replace({host:(getTop().gsRssDomain||""),sid:getSid(),param:a.getAttribute("param")});
return false;
}
else if(a.className=="reader_detail_qqmail_link")
{
var m=[];
E(a.getAttribute("param").split("&"),function(e){
if(e.indexOf("share=1")<0)
{
m.push(e);
}
});
getMainWin().location=T('$host$/cgi-bin/reader_detail?sid=$sid$&$param$').replace({host:(getTop().gsRssDomain||""),sid:getSid(),param:m.join("&")});
return false;
}
else if(a.className=="reader_list_qqmail_link")
{
var m=[];
E(a.getAttribute("param").split("&"),function(e){
m.push(e);
});
getMainWin().location=T('$host$/cgi-bin/reader_list?classtype=allfriend&refresh=1&share=1&sid=$sid$&$param$').replace({host:(getTop().gsRssDomain||""),sid:getSid(),param:m.join("&")});
return false;
}
else if(a.className=="reader_catalog_list_qqmail_link")
{
var m=[];
E(a.getAttribute("param").split("&"),function(e){
m.push(e);
});
getMainWin().location=T('$host$/cgi-bin/reader_catalog_list?sid=$sid$&classtype=share&share=1&refresh=1&$param$').replace({host:(getTop().gsRssDomain||""),sid:getSid(),param:m.join("&")});
return false;
}
else if(a.className=="ftn_groupshare_enter_link")
{
getMainWin().location.href=T('/cgi-bin/ftnExs_files?listtype=group&s=group&t=exs_ftn_files&sid=$sid$').replace({sid:getSid()});
return false;
}
else if(a.className=="qqmail_bill_experience_btn")
{
getMainWin().location.href=T('/cgi-bin/setting4?t=setting12&fun=list&bill_referer=advertisement&sid=$sid$').replace({sid:getSid()});
return false;
}
else if(a.className=="book_article_list_link")
{
getMainWin().location=T('/cgi-bin/setting10?sid=$sid$&$param$').replace({sid:getSid(),param:a.getAttribute("param")});
return false;
}
if(a.href.indexOf("javascript:void(0)")>=0)
{
return false;
}
var z=getMainWin().location.href;
if(b!="preview"&&z.indexOf('/cgi-bin/readmail?')==-1&&z.indexOf('t=mail_list_ad')==-1&&z.indexOf('t=unreadmail')==-1&&z.indexOf('t=r_index')==-1)
{
return true;
}
c||(c=getTop().getUrlParams(getMainWin().location)['mailid']);
var H=''+getTop().g_uin;
var D=c&&encryptStr(H.substr(H.length-3)+c);
D||(D=c);
window.open(T('$baseDomain$/cgi-bin/mail_spam?action=check_link&url=$url$&mailid=$mid$&spam=$spam$').replace({baseDomain:getTop().getTopHost(),mid:D,spam:b=="spam"?1:0,url:encodeURI(a.href)}),"_blank");
return false;
}
function encryptStr(b,a)
{
a||(a=getTop().g_encryptdata);
a=''+a;
b=''+b;
if(!b||!a)
{
return false;
}
var d=a.length;
var e=[];
for(var f=0;f<b.length;f++)
{
var c=b.charCodeAt(f)^Number(a.charCodeAt(f%d));
e.push(String.fromCharCode(c));
}
return base64Encode(e.join(''));
}
function base64Encode(h)
{
var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
if(h===undefined)
{
return h;
}
var g,e,f;
var b,c,d;
f=h.length;
e=0;
g="";
while(e<f)
{
b=h.charCodeAt(e++)&0xff;
if(e==f)
{
g+=a.charAt(b>>2);
g+=a.charAt((b&0x3)<<4);
g+="==";
break;
}
c=h.charCodeAt(e++);
if(e==f)
{
g+=a.charAt(b>>2);
g+=a.charAt(((b&0x3)<<4)|((c&0xf0)>>4));
g+=a.charAt((c&0xf)<<2);
g+="=";
break;
}
d=h.charCodeAt(e++);
g+=a.charAt(b>>2);
g+=a.charAt(((b&0x3)<<4)|((c&0xf0)>>4));
g+=a.charAt(((c&0xf)<<2)|((d&0xc0)>>6));
g+=a.charAt(d&0x3f);
}
return g;
}
function goPrevOrNextMail(a)
{
var b,c=getMainWin();
if(!!(b=S(["prevmail","nextmail"][a?1:0],c))&&!b.getAttribute("disabled"))
{
}
else if(!!(b=S(["prevpage","nextpage","prevpage1","nextpage1"][a?1:0],c))&&!b.getAttribute("disabled"))
{
c.location=b.href;
}
}
function goBackHistory()
{
var a=SN("readmailBack",getMainWin());
if(a.length>0&&isShow(a[0]))
{
fireMouseEvent(a[0],"click");
return true;
}
return false;
}
var QMMLCache={_NAME:"maillist",_MAX_AGE:3600*2,_FLAG_ON:1,useCache:function(){
return !!this._FLAG_ON;
},init:function(a){
var d=a||{};
this._FLAG_ON=d.bUseCache;
if(this._FLAG_ON)
{
var b=function(g){
try{
if(getMainWin().exitConfirm)
{
return getMainWin().exitConfirm(g);
}
}
catch(h)
{
debug(h.message);
}
g();
};
addEvent(S("navMidBar"),"mousedown",function(g){
var l=g||getTop().event,i=getEventTarget(l),k=parents("a",i),j=parents("li",i)[0];
if(gnIEDocTypeVer==0||gnIEDocTypeVer>=9)
{
if(l.button!=0)
{
return;
}
}
else{
if(l.button!=1)
{
return;
}
}
k.length&&(i=k[0]);
if(i&&i.tagName=="A")
{
if(j)
{
var m=attr(j,"dr"),o=attr(j,"dp"),p=attr(j,"dn"),n=attr(i,"name"),h=n=="book";
if(m&&p!="0"&&m!="morefunction"&&m!="attach"&&m!="3"&&m!="4")
{
debug("QMMLCache::\u52AB\u6301\u8BE5\u94FE\u63A5-"+i.id);
b(function(r,t,s,u,q){
return function(){
try{
if(hasClass(i,'empty_link')&&QMMLCache.folder(r,{dr:r,dp:q?s:t},true).split('#')[0]==getMainWin().location.pathname+getMainWin().location.search)
{
return;
}
}
catch(v)
{
}
QMMLCache.log("hit",[r,t,u].join("|"),QMMLCache.folder(r,{dr:r,dp:q?s:t},true));
QMMLCache.folder(r,{dr:r,dp:q?s:t});
};
}(m,o,n,p,h));
preventDefault(l);
stopPropagation(l);
}
}
}
});
var f=[],e={},c=3;
E(finds("li[dr] a",S("navMidBar")),function(g){
var k=attr(g.parentNode,"dr"),j=attr(g.parentNode,"dp"),i=attr(g.parentNode,"dn"),h=attr(g,"name");
if(k=="1"||((!j||k==j)&&i!="0"&&"|1|3|4|5|6|starred|".indexOf("|"+k+"|")<0&&finds("b",g).length))
{
if(f.length<c)
{
var l=QMMLCache.folder(k,{dr:k,dp:h?h:""},true);
f.push(l);
e[[k,j,i].join("|")]=l;
}
}
});
debug(f,2);
preLoad("html","",f,function(g){
for(var h in e)
{
if(g==e[h])
{
QMMLCache.log("pre",h,g);
}
}
});
}
},log:function(b,a,c){
var d=new QMCache({appName:"maillist_preload"}),f=a.split("|").shift();
var e=a+'@hit';
if(b=="pre")
{
d.setData(e,c.split("#")[0]);
debug("preload: "+f);
setTimeout(function(){
ossLog("delay","all","stat=nothing&locval=mlcache,pre,"+f+",1");
},2000);
}
else if(b=="hit")
{
if(c&&QMMLCache.exist(e,c))
{
ossLog("delay","all","stat=nothing&locval=mlcache,hit,"+f+",1");
d.delData(e);
}
}
},preLoad:function(a,b){
preLoad("html","",[b],function(c){
if(b==c)
{
var d=new QMCache({appName:"maillist_preload"});
d.setData(a,b.split('#')[0]);
QMMLCache.log('pre',a,b);
}
});
},exist:function(a,b){
var c=new QMCache({appName:"maillist_preload"});
return c.getData(a)==b.split('#')[0];
},folder:function(i,h,g){
var d=-1,c=-2,b=-3,e=-4,f=-5,a=-6,n=TE(['/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&folderkey=$folderkey$']).replace({sid:getSid(),folderid:i,folderkey:i}),j=h||{};
extend(j,{page:0});
if(j.dr=="ad")
{
extend(j,{flag:'add',folderkey:a,kvclick:'mail_list|mail_list_ad|inbox',t:'mail_list_ad'});
}
else if(j.dr=="call")
{
extend(j,{flag:'call',folderkey:a,kvclick:'mail_list|mail_list_ad|inbox',t:'mail_list_ad'});
}
else if(i==1)
{
extend(j,{s:"inbox",topmails:0,showinboxtop:"1"});
if(isEn())
{
extend(j,{flag:"en"});
}
}
else if(i=="starred")
{
extend(j,{s:"star",folderid:"all",flag:"star",need_folderlock:0,fun:"slock",topmails:0,folderkey:d});
}
else if(i==8)
{
extend(j,{t:"mail_list_group"});
}
else if(j.dp=="book")
{
extend(j,{folderid:j.dr,ftype:"book"});
}
else if(j.dp=="tag")
{
if(j.dr==j.dp)
{
extend(j,{folderid:"all",showtag:"all",tagid:"all",folderkey:e});
}
else{
var m=j.dr.replace("tag_","");
extend(j,{folderid:"all",showtag:"1",tagid:m,folderkey:m});
}
}
else if(i=="personal")
{
if(j.dr==i)
{
extend(j,{folderid:j.dr,stype:"myfolders",folderkey:b});
}
else{
extend(j,{folderid:j.dr,folderkey:j.dr});
}
}
else if(i=="pop")
{
if(j.dr==i)
{
extend(j,{folderid:j.dr,ftype:"pop",stype:"myotherinbox",folderkey:c});
}
else{
extend(j,{folderid:j.dr,ftype:"pop",folderkey:j.dr});
}
}
else if(j.dr=="addrvip")
{
extend(j,{folderid:'all',s:'addrvip',flag:'addrvip',kvclick:'mail_list|addrvip|folderlist|1',folderkey:f});
}
if(!g&&(!j.dp||j.dp==j.dr))
{
var l="realtime",k=({"starred":110,"130":20,"personal ":21,"pop":22,"tag":40}[i]||i);
ossLog(l,"all",T("stat=nothing&$locname$=folderlist,,,$id$").replace({id:k,locname:l=="realtime"?"loc":"locval"}));
}
delete j.dp;
delete j.dr;
if(!g)
{
this.url(n,j);
}
else{
return this.url(n,j,g);
}
},url:function(c,b,a){
var f=CommVer.get(this._NAME),d=cookQueryString(c.split("#").shift(),extend(b,this._FLAG_ON?{ver:f,cachemod:this._NAME,cacheage:this._MAX_AGE,r:""}:{}));
d=[d,"#stattime=",now()].join("");
if(!a)
{
try{
if(getTop().getMainWin().getTop)
{
goUrl(getTop().getMainWin(),d,true);
}
else{
throw {message:"access deny"};
}
}
catch(g)
{
debug("QMMLCache throw error, use src redirect.");
getTop().S("mainFrame").src=c;
}
}
else{
return d;
}
},check:function(a){
try{
var d=CommVer.get(this._NAME),c=a||getTop().getMainWin(),b=c.location,f=getUrlParams(b)["cachemod"],g=getUrlParams(b)["ver"];
if(this._FLAG_ON&&g&&d!=g&&f==this._NAME)
{
goUrl(c,cookQueryString(b.href,{ver:d}),true);
return true;
}
return false;
}
catch(h)
{
return false;
}
},upVer:function(){
debug("\u66F4\u65B0"+this._NAME+" cache\u7248\u672C\u53F7");
CommVer.update(this._NAME);
},reload:function(a){
if(this.useCache())
{
reloadFrmLeftMain(true,false);
this.url((a||getMainWin()).location.href,{});
}
else{
reloadFrmLeftMain(true,true);
}
}};
function checkPerDelML(c,a,b)
{
return delMailML(c,a,"PerDel",b);
}
function delMailML(c,a,d,b)
{
var f=b.nodeType==9?(b.defaultView||b.parentWindow):b,e=QMMailList.getCBInfo(f),g={"PerDel":1,"DonaDel":2}[d];
configPreRmMail(e,'rmMail');
rmMail(g?g:0,e);
e.oMail.length&&QMMLCache.upVer();
return;
}
function reportSpamML(b,a)
{
var f=getTop();
if(f.isSelectAllFld(getMainWin()))
{
return showError('\u4E0D\u80FD\u5BF9\u5168\u6587\u4EF6\u5939\u6267\u884C\u6B64\u64CD\u4F5C');
}
var g=a.nodeType==9?(a.defaultView||a.parentWindow):a,e=QMMailList.getCBInfo(g);
for(var h=e.oMail.length;h--;)
{
if(e.oMail[h].sMid=='AC0000-00000000000000000000000')
{
return showError('\u5E7F\u544A\u90AE\u4EF6\u4E0D\u652F\u6301\u5168\u91CF\u4E3E\u62A5');
}
}
var d=false;
var c=false;
f.E(e.oMail,function(i){
if(i.bSys)
{
d=true;
}
else{
c=true;
}
});
if(b&&d)
{
return f.showError(c?'\u9009\u4E2D\u90AE\u4EF6\u4E2D\u5305\u542B\u7CFB\u7EDF\u90AE\u4EF6\uFF0C\u4E0D\u80FD\u6279\u91CF\u8BBE\u4E3A\u5783\u573E\u90AE\u4EF6':'\u60A8\u9009\u4E2D\u4E86\u7CFB\u7EDF\u90AE\u4EF6\uFF0C\u5B83\u4E0D\u80FD\u88AB\u8BBE\u4E3A\u5783\u573E\u90AE\u4EF6');
}
configPreRmMail(e,'spammail');
(b?reportSpamJson:reportNoSpamJson)({bBlackList:true},e);
e.oMail.length&&QMMLCache.upVer();
return false;
}
function MLIUIEvent(a,b,c)
{
if(a.getAttribute('init')=='true')
{
return;
}
var t=a.value,f=QMMailCache,d=f.isRefresh(b),j=a.parentNode;
while(j.tagName!="TABLE")
{
j=j.parentNode;
}
var m=GelTags("table",j)[0],s=GelTags("td",GelTags("tr",m)[0]),l=s[1],h=s[s.length-1];
a.setAttribute('init','true');
QMReadedItem.addItem(a);
if(h.className=="new_g")
{
h=s[6];
}
var o=GelTags("div",m),n;
for(var e=o.length-1;e>=0;e--)
{
if(o[e].className=="TagDiv")
{
n=o[e];
break;
}
}
if(f.hasData(t))
{
if(!d)
{
var g=f.getData(t);
if(a.getAttribute("unread")=="true")
{
f.addVar("unread",-1);
}
mailListFlag._set(a,j,g.bUnread?true:false,g.reply);
hideGroupNewReply(a,j);
if(g.star!=null)
{
setClass(h,g.star?"fg fs1":"fg");
f.addVar("star",g.star?1:-1);
}
if(g.oTagIds)
{
var q=GelTags("table",m),p=g.oTagIds,u,i={};
if(n)
{
for(var e=q.length-1;e>=0;e--)
{
if(u=q[e].getAttribute("tagid"))
{
i[u]=1;
}
}
for(var v in p)
{
if(p[v]===0)
{
QMTag.rmTagUI(n,v);
}
else if(!i[v])
{
QMTag.addTagUI(n,v,c,t,false);
}
}
}
}
}
else{
f.addData(t,{bUnread:a.getAttribute("unread")=="true",oTagIds:{},star:null,reply:null});
}
}
listMouseEvent(j);
h.title=h.className=="fg"?"\u6807\u8BB0\u661F\u6807":"\u53D6\u6D88\u661F\u6807";
addEvent(h,'click',function(w){
QMMLCache.upVer();
starMail(null,QMMailList.getCBInfo(b,t));
return stopPropagation(w);
});
addEvent(j,"click",GetListMouseClick(b));
addEvent(j,"selectstart",preventDefault);
var r=m.rows[0].cells[1];
if(r.className.indexOf("fr")>-1)
{
loadJsFile("$js_path$qmtip270d91.js",true);
addEvent(r,"mouseover",MLI._remarkTip);
addEvent(r,"mouseout",MLI._remarkTip);
}
addEvent(n,'click',function(w){
if(QMTag.readclose(w,QMMailList.getCBInfo(b,t)))
{
QMMLCache.upVer();
return stopPropagation(w);
}
});
var k=CN("popdelmail",m,"span");
if(k&&k.length>0)
{
addEvent(k[0],'click',function(w){
goUrlMainFrm(["/cgi-bin/mail_list?sid=",getSid(),"&s=popdel&folderid=5&flag=popdel&page=0&need_folderlock=0&loc=folderlist,,,110&topmails=0"].join(""));
getTop().switchFolder("folder_5");
LogKV({sValue:'mail_list|popdel'});
return stopPropagation(w);
});
}
dragML(j,a);
}
function MLI(b,a,c,d)
{
var m=SN("mailid",a),n=m[m.length-1],r=n.value,o=n.parentNode,l=QMMailCache,g=l.isRefresh(a);
while(o.tagName!="TABLE")
{
o=o.parentNode;
}
MLIUIEvent(n,a,c);
if(typeof (a.gnPreloaded)=="undefined")
{
a.gnPreloaded=0;
}
else{
a.gnPreloaded++;
}
var h=n.getAttribute("uw")=="1",p=a.oPreMails,i=p.length,k=a.gnPreloaded,j=3,e=new Date()-new Date(parseInt(n.getAttribute("totime")))<1728000000,f=!/^(LP|ZP)/.test(r)&&e&&!rdVer.log(r);
if(r=='AC0000-00000000000000000000000')
{
var s=QMMLCache.folder('1',{dr:'ad'},true);
if(!QMMLCache.exist('ad0||',s))
{
QMMLCache.preLoad('ad0||',s);
}
}
else if(f&&rdVer.isPre(c,a))
{
if(k<j)
{
var s,q=n.getAttribute("gid");
s=rdVer.url(r,c,d,"",false,"",false,"",true,getUrlParams(a.location).folderkey);
if(s)
{
p.push(s);
}
}
}
if(getTop().gsReadedMailId==r)
{
QMReadedItem.disp(o);
recordReadedMailId(null);
}
}
function MLJump(b,c,d,a)
{
var h=SN("maillistjump",a.document),j=SN("prevpage",a.document),i=SN("nextpage",a.document),l="_MlJuMp_",f=parseInt(b)||0,g=parseInt(c)||0;
function e(m)
{
var o=getTop().QMMenu(m).S("txt"),n=parseInt(o.value);
if(isNaN(n))
{
o.select();
return showError("\u8BF7\u8F93\u5165\u8DF3\u8F6C\u7684\u9875\u6570");
}
n=Math.max(0,Math.min(n-1,g));
if(f==n)
{
o.select();
return showError("\u4F60\u8F93\u5165\u4E86\u5F53\u524D\u9875\u6570");
}
getTop().QMMenu(m).close();
if(QMMLCache.useCache())
{
QMMLCache.url(getTop().getMainWin().location.href,{page:n,selectall:(getTop().isSelectAllFld(getMainWin())?1:0)});
}
else{
goUrlMainFrm([d,'&page=',n,'&loc=mail_list,,jump,0',getTop().isSelectAllFld(getMainWin())?"&selectall=1":""].join(''));
}
}
function k(m)
{
var n=m||a.event;
if(QMMLCache.useCache())
{
preventDefault(n);
stopPropagation(n);
if(getTop().isSelectAllFld(getMainWin()))
{
QMMLCache.url(getTop().getMainWin().location.href,{page:attr(this,"page"),selectall:1});
}
else{
QMMLCache.url(getTop().getMainWin().location.href,{page:attr(this,"page"),selectall:0});
}
return false;
}
}
;E(j,function(m){
m.onclick=k;
});
E(i,function(m){
m.onclick=k;
});
E(h,function(m){
if(!m.getAttribute(l))
{
m.setAttribute(l,"1");
addEvents(m,{click:function(n){
var r=unikey("mljump"),q=calcPos(m),p=185,o=40;
new (getTop().QMMenu)({sId:r,oEmbedWin:a,nWidth:p,nX:q[1]-p,nY:bodyScroll(a,"scrollHeight")-q[2]<o?(q[0]-o-13):q[2],bAutoClose:false,oItems:[{nHeight:o,sItemValue:MLJump._oTemplate.replace({id:r})}],onshow:function(){
this.S("txt").focus();
}});
addEvent(getTop().QMMenu(r).S("txt"),"keypress",function(s){
var t=s.keyCode||s.which;
if(t===13)
{
e(r);
}
else if((t<48||t>57)&&t!=8&&t!=9)
{
preventDefault(s);
}
});
addEvent(getTop().QMMenu(r).S("btn"),"click",function(s){
e(r);
});
preventDefault(n);
}});
}
});
}
MLJump._oTemplate=T(['<div style="position:absolute;width:160px;margin-left:-7px;">','<div class="addrtitle jumpmenusdjust" style="float:left;">\u8DF3\u8F6C\u5230\u7B2C <input id="txt" type="text" class="txt" style="width:30px;" /> \u9875</div>','<a id="btn" href="javascript:;" class="left button_gray_s" style="width:40px; margin:7px 0 0 5px; _display:inline;">&nbsp;\u786E\u5B9A&nbsp;</a>','</div>']);
function initDropML()
{
function d(r)
{
var t=calcPos(r),s=S('dragtitle'),p=s.offsetLeft,q=s.offsetTop;
return (t[1]>p&&t[3]<p&&t[2]>q&&t[0]<q)?r:null;
}
function b(q,p)
{
if(q&&q.id.indexOf('folder_')>=0)
{
var s=q.className,r=s.indexOf('toolbg')>-1;
if(p&&r)
{
setClass(q,s.replace(/\btoolbg\b/g,''));
}
else if(!r&&!p)
{
setClass(q,s+' toolbg');
}
}
}
var h=S('dragtitle'),k=S('OutFolder'),o='inidrop',f=BaseMailOper.getInstance(getMainWin()),a=QMDragDrop,n='mail_list';
if(k.getAttribute(o)=='true')
{
return false;
}
k.getAttribute(o,'true');
a.delGroup(n);
var j=null,c=false,l=null,g=null,e=null,m=/^([489]|personal|pop|tag)$/,i=new a.DropTarget(S('OutFolder'),{ondragover:function(p){
if(l==g)
{
return;
}
var t=l&&l.id||'',r=g&&g.id||'',u=l&&l.getAttribute('dp'),s=g&&g.getAttribute('dp'),q=g&&g.getAttribute('dr');
if(s)
{
showFolders(s,true,getTop());
}
if(u&&u!=s)
{
showFolders(u,false,getTop());
}
b(l,1);
b(g);
if(e)
{
clearTimeout(e);
}
c=q&&!m.test(q);
e=setTimeout(function(){
setClass(h,c?'drag_over':'drag_out');
e=null;
},50);
l=g;
},ondrop:function(p){
if(!g||!c)
{
return;
}
var r=f.getMailInfo().sFid,s=g.getAttribute('dr')||'';
ossLog("delay","all","stat=drag&opr="+s);
if(s=='6')
{
b(l,1);
l=null;
f.apply('spammail');
dragML._mbHasChecked=true;
return;
}
else if(m.test(s))
{
b(l,1);
l=null;
return;
}
else if(s.indexOf('tag_')>=0)
{
s=s.replace('tag','tid');
}
else if(s=='starred')
{
s='star';
}
else if((r==5||r==6)&&s==5)
{
s='predelmail';
dragML._mbHasChecked=true;
}
else if(parseInt(s))
{
s={5:'delmail'}[s]||'fid_'+s;
}
else{
return;
}
f.apply(s);
h.setAttribute('na','true');
var q=new qmAnimation({from:100,to:1});
q.play({speed:"slow",onaction:function(u,t){
setOpacity(h,u/100.0);
},oncomplete:function(u,t){
show(h,0);
setClass(h,'drag_out');
setOpacity(h,100);
b(l,1);
l=null;
}});
}},function(p,q,r){
if(gbIsIE)
{
var x=getEventTarget(r.event),s=/(folder_\w+_td|(personal|pop|tag)foldersDiv)/;
while(x&&!s.test(x.id))
{
x=x.parentNode;
}
g=x;
}
else if(g=d(S('OutFolder')))
{
debug(g);
var t=['personal','pop','tag'],u=null,v=null,w,y;
for(y=t.length-1;y>=0;y--)
{
if(u=d(S(t[y]+'foldersDiv')))
{
break;
}
}
!u&&(u=d(S("showtopDiv")));
if(u=u||d(S('SysFolderList')))
{
w=GelTags('li',u);
for(y=w.length-1;y>=0;y--)
{
if(v=d(w[y]))
{
break;
}
}
}
g=v||u;
}
return !!(l||g);
});
a.addGroup(n,i);
}
function dragML(b,a)
{
if(!S('OutFolder')||!QMDragDrop)
{
return;
}
var g=dragML,i='dragtitle',d=S(i);
if(!d)
{
insertHTML(getTop().document.body,'afterBegin','<div id="dragtitle" class="drag_out" style="display:none;"></div>');
d=S(i);
}
var f,e=new QMDragDrop.Draggable(b,{threshold:5,oTitle:d},{ondragstart:function(k){
g._mbHasChecked=a.checked==true;
a.checked=true;
var n=getMainWin(),l=BaseMailOper.getInstance(n),m=QMMailList.getCBInfo(n);
QMMailList.selectedUI(m);
l.setMailInfo(m);
d.innerHTML=['\u9009\u4E2D ',m.oMail.length,' \u5C01\u90AE\u4EF6'].join('');
ossLog("delay","all","stat=drag&c="+m.oMail.length);
f=gbIsIE?[0,0,0,0]:calcPos(n.frameElement);
d.style.left=f[3]+Scale.fixFrameCursorPos(k.clientX)+'px';
d.style.top=f[0]+Scale.fixFrameCursorPos(k.clientY)+'px';
d.setAttribute('na','');
show(d,1);
initDropML();
},ondrag:function(k){
d.style.left=f[3]+Scale.fixFrameCursorPos(k.clientX)+'px';
d.style.top=f[0]+Scale.fixFrameCursorPos(k.clientY)+'px';
},ondragend:function(k){
if(!d.getAttribute('na'))
{
show(d,0);
setClass(d,'drag_out');
}
if(!g._mbHasChecked)
{
a.checked=false;
var l=QMMailList.getCBInfo(getMainWin());
QMMailList.selectedUI(l);
}
}});
QMDragDrop.addGroup('mail_list',e);
var c=b.ownerDocument,h=c.parentWindow||c.defaultView,j=dragML._sMarkMainWin=dragML._sMarkMainWin||unikey('drag');
if(!h[j])
{
addEvent(h,'unload',function(){
if(d.releaseCapture)
{
d.releaseCapture();
}
show(d,0);
});
h[j]=1;
}
}
MLI._remarkTip=function(d){
var f=getTop(),e=arguments.callee,a=Scale.fixFrameCursorPos(d.clientX),b=Scale.fixFrameCursorPos(d.clientY),c=getEventTarget(d);
while(c&&c.tagName!="TD")
{
c=c.parentNode;
}
if(e._mnTimeout)
{
clearTimeout(e._mnTimeout);
e._mnTimeout=0;
}
if(d.type=="mouseout")
{
f.QMTip&&f.QMTip.showMailList(0,c.ownerDocument);
return;
}
e._mnTimeout=setTimeout(function(){
var i=f.GelTags("b",c.parentNode.cells[2]),h=i[i.length-1];
if(!f.QMTip||!h||(e._nClientX==a&&e._nClientY==b))
{
return;
}
e._nClientX=a;
e._nClientY=b;
var g=h.innerHTML.replace(/^\&nbsp;-\&nbsp;/,"").replace(/\&nbsp;/gi,"&nbsp; ").replace(/&lt;br\/?&gt;/g,'<br/>');
f.QMTip.showMailList(1,c.ownerDocument,g,a,b);
},250);
};
function MLI_A(a)
{
var d=GelTags("table",a),b=d.length,c=d[b-1],e=c.getAttribute("mailid");
if(QMMailCache.hasData(e))
{
if(!QMMailCache.isRefresh(window))
{
setClass(c,"i M");
}
else{
QMMailCache.delData(e);
}
}
listMouseEvent(c);
addEvent(c,"selectstart",preventDefault);
}
function mailListFlag()
{
}
mailListFlag._opt=function(c,d,b,a){
if(!(c&&c.type=="checkbox"))
{
return false;
}
if(b==null)
{
return c.getAttribute("unread")=="true";
}
if(!d)
{
d=c.parentNode.parentNode.parentNode.parentNode;
}
if((c.getAttribute("unread")=="true")==!!b&&!a)
{
return b;
}
var g=c.getAttribute("gid");
if(g)
{
setGroupUnread(g,getGroupUnread(g)-1);
setGroupUnread("gall",getGroupUnread("gall")-1);
}
c.setAttribute("unread",b?"true":"false");
setClass(d,[b?"i F":"i M",c.checked?" B":""].join(""));
setClass(GelTags("table",d)[0],b?"i bold":"i");
var e=GelTags("div",d)[1];
if(!/(s[016789]bg)|(Rw)/.test(e.className))
{
var i=a?"r":c.getAttribute("rf"),h=c.getAttribute("isendtime"),f="Rr";
if(h)
{
f=h=="0"?"Rc":"Ti";
}
else if(b)
{
f="Ru";
}
else if(i)
{
f=i=="r"?"Rh":"Rz";
}
setClass(e,"cir "+f);
}
return b;
};
mailListFlag._get=function(a){
return this._opt(a);
};
mailListFlag._set=function(c,d,b,a){
return this._opt(c,d,b,a);
};
function hideGroupNewReply(a,b)
{
if(!a||!a.getAttribute("gid"))
{
return false;
}
var c=GelTags("b",b)[0],d=c&&c.parentNode;
if(d&&d.className=="new_g")
{
d.style.visibility="hidden";
return true;
}
return false;
}
function getMailListInfo()
{
var a=getMainWin(),c=S("_ut_c",a),d=S("_ur_c",a),b=S("_ui_c",a);
return {totle:(c&&parseInt(c.innerHTML))||0,unread:(d&&parseInt(d.innerHTML))||0,star:(b&&parseInt(b.innerHTML))||0};
}
function _setSelectALLFldNum(b,a)
{
var c=S("selectAll",b);
if(c)
{
c.setAttribute("totalcnt",a);
E(GelTags("div",c),function(e,d){
var g=e.getAttribute("un");
if(g=="selected")
{
GelTags("span",e)[0].setAttribute("end",a);
}
else if(g=="unselect")
{
var f=e.innerHTML;
e.innerHTML=f.replace(/\u5168\u90E8.*\u5C01/gi,"\u5168\u90E8&nbsp;"+a+"&nbsp;\u5C01");
}
});
}
}
function setMailListInfo(c,a,b)
{
var f=getMainWin(),d=true,j=S("_ur",f),g=S("_ui",f),i=S("_ut",f),e;
if(!isNaN(c=parseInt(c)))
{
if(!!(e=S("_ur_c",f)))
{
e.innerHTML=Math.max(0,c);
show(j,c>0);
}
else{
d=false;
}
var h=S("tip_unread",f);
if(h)
{
h.innerHTML=c<0?parseInt(h.innerHTML)+c:c;
show(h,c);
}
}
if(!isNaN(a=parseInt(a)))
{
a=Math.max(0,a);
if(!!(e=S("_ui_c",f)))
{
e.innerHTML=a;
show(g,a!=0);
}
else{
d=false;
}
}
if(!isNaN(b=parseInt(b)))
{
a=Math.max(0,b);
if(!!(e=S("_ut_c",f)))
{
e.innerHTML=a;
show(i,a!=0);
getTop()._setSelectALLFldNum(f,a);
}
else{
d=false;
}
}
show(S("_uc",f),isShow(j));
show(S("_ua",f),isShow(j));
return d;
}
function readMailFinish(c,d,a,b)
{
var m=getMainWin(),l=S("load_"+c,m),k,h;
QMMailCache.addData(c);
if(l)
{
show(l,false);
k=l.parentNode.previousSibling;
h=GelTags("input",k)[0];
}
else{
var j=GelTags("input",m.document);
for(var p=0,g=j.length;p<g;p++)
{
if(j[p].type=="checkbox"&&j[p].value==c)
{
h=j[p];
break;
}
}
k=h;
while(k.tagName!="TABLE")
{
k=k.parentNode;
}
}
var n=GelTags("table",k),e=false;
for(var f=n.length-1;f>=0;f--)
{
if(n[f].getAttribute("tagid"))
{
e=true;
break;
}
}
hideGroupNewReply(h,k);
if(h&&mailListFlag._get(h))
{
mailListFlag._set(h,k,false);
setMailListInfo(getMailListInfo().unread-1);
if(h.getAttribute('star')=='1')
{
setFolderUnread('starred',getFolderUnread('starred')-1);
}
var o=h.getAttribute("ssystag");
if(o&&/system:1\|/.test(o))
{
setFolderUnread("sysmsg",getFolderUnread("sysmsg")-1);
}
if(o&&/system:0\|/.test(o))
{
setFolderUnread("notsysmsg",getFolderUnread("notsysmsg")-1);
}
if(a&&parseInt(a)>0&&!e)
{
setFolderUnread(a,b?getGroupUnread("gall"):getMailListInfo().unread);
}
else{
reloadLeftWin();
}
}
}
function goLockUrl(b,a)
{
getMainWin().location.replace(b+"&delegate_url="+a);
}
function checkMail(a)
{
var c=getTop().QMAddrParser,b=a.indexOf("@")>0,d=c.parseAddr(a);
if(d.length==0)
{
showError("\u8BF7\u586B\u5199\u90AE\u7BB1\u5730\u5740");
return false;
}
else if(!b||(d.length==1&&!d[0].valid))
{
showError("\u60A8\u8F93\u5165\u7684\u90AE\u7BB1\u5730\u5740\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165");
return false;
}
else if(d.length>1)
{
showError("\u60A8\u53EA\u80FD\u8F93\u5165\u4E00\u4E2A\u90AE\u7BB1\u5730\u5740\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165");
return false;
}
return true;
}
function checkAndSubmit(a)
{
var b=S(a);
if(!checkMail(trim(b.value)))
{
b.focus();
return false;
}
submitToActionFrm(b.form);
}
function pushToDialogList(a)
{
var b=getTop();
if(!b.goDialogList)
{
b.goDialogList=new b.Object();
}
if(a)
{
b.goDialogList[a]=true;
}
}
function showDialogNewReadMail(b,c,a,d)
{
new (getTop().QMDialog)({sId:"addnewremind_qqmail",sTitle:"\u65B0\u5EFA\u63D0\u9192",sUrl:T("/cgi-bin/read_reminder?linkid=%linkid%&linktitle=%linktitle%&sid=%sid%&t=remind_edit&from=%from%","%").replace({sid:getSid(),linkid:b,linktitle:c,from:a}),nWidth:450,nHeight:360});
d&&rdVer(d,1);
}
function setRemindSpan(b,a)
{
getTop().S('remind_edit_'+b,a).innerHTML=(getTop().reminddetail["mailid:"+b]||"").replace(/linktitle=.*&sid=/g,function(c){
return c.replace(/\'/g,"&#039;");
});
}
function showSimpleRuleFilter(_asAddr)
{
if(!_asAddr)
{
showError("\u65E0\u6CD5\u83B7\u53D6\u53D1\u4EF6\u4EBA\u5730\u5740\uFF0C\u4E0D\u80FD\u521B\u5EFA\u89C4\u5219");
return;
}
var _oDialog=new (getTop().QMDialog)({sId:"addnewfilter_qqmail",sTitle:"\u5FEB\u6377\u521B\u5EFA\u6536\u4FE1\u89C4\u5219",sUrl:T("/cgi-bin/setting2?sid=$sid$&Fun=GetFolderList&CurFilterID=0&t=readmail_filter&fromaddr=$fromaddr$").replace({sid:getSid(),fromaddr:_asAddr}),nWidth:420,nHeight:240,onshow:function(){
var _oDialogWin=this.getDialogWin();
waitFor(function(){
try{
return S("jump",_oDialogWin);
}
catch(e)
{
}
},function(_abIsOk){
if(_abIsOk)
{
function _fInitFolderItem(_aoFolderList)
{
if(_aoFolderList.length)
{
_aoFolderList.push({bDisSelect:true,nHeight:10,sItemValue:'<hr/>'});
}
_aoFolderList.push({bDisSelect:false,nHeight:22,sId:"new",sItemValue:'\u65B0\u5EFA\u6587\u4EF6\u5939...'});
return _aoFolderList;
}
;function _fGetItemValue()
{
var _sIdx=_oQMSelect.get(2);
return _sIdx=="new"?"-1":_sIdx;
}
;function _fRestet()
{
_oQMSelect.set(_oUserFolder[0].sId,2);
}
;function _fAddOption(_asName,_asValue)
{
var _oNewItem={bDisSelect:false,nHeight:22,sId:_asValue,sItemValue:_asName};
if(_oUserFolder.length==1)
{
_oUserFolder=_fAddItem(_oUserFolder,{bDisSelect:true,nHeight:10,sItemValue:'<hr/>'},0);
_oUserFolder=_fAddItem(_oUserFolder,_oNewItem,0);
}
else{
_oUserFolder=_fAddItem(_oUserFolder,_oNewItem,_oUserFolder.length-2);
}
_oQMSelect.update({oMenu:{oItems:_oUserFolder}});
_oQMSelect.set(_asValue,2);
}
;function _fAddItem(_aoContainer,_aoItem,_anIndex)
{
({}).toString.call([])!="[object Array]"&&(_aoItem=[_aoItem]);
return _aoContainer.slice(0,_anIndex).concat(_aoItem).concat(_aoContainer.slice(_anIndex,_aoContainer.length));
}
;function _fCreateFolder()
{
promptFolder({type:'folder',bAlignCenter:true,width:410,height:237,style:"createNewFolder",onreturn:function(_asName){
QMAjax.send("/cgi-bin/foldermgr",{method:"POST",content:["sid=",getSid(),"&fun=new&from=simple&ef=js&resp_charset=UTF8&name=",_asName].join(''),onload:function(_abIsOk,_asResp){
try{
if(_abIsOk)
{
var _oData=eval("("+_asResp+")");
if(_oData.errcode=="0")
{
_fAddOption(_asName,_oData.folderid);
reloadLeftWin();
showInfo("\u5DF2\u6210\u529F\u65B0\u5EFA\u6587\u4EF6\u5939");
}
else{
showError(_oData.errmsg);
}
return;
}
}
catch(e)
{
}
showError("\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
}});
}});
}
;var _oUserFolder=_fInitFolderItem(_oDialogWin.oUserFolder);
_oQMSelect=new QMSelect({oContainer:S("selectfolder",_oDialogWin),oMenu:{nWidth:"auto",nMaxWidth:180,nMaxItemView:4,oItems:_oUserFolder},onselect:function(_aoItem){
if(_aoItem.sId=="new")
{
_fCreateFolder();
return true;
}
}});
addEvent(S("jump",_oDialogWin),"click",function(){
_oDialog.close();
var _sFolderId=_fGetItemValue();
_sFolderId=="-1"&&(_sFolderId="");
getMainWin().location.replace(_oDialogWin.location.href.replace("&Fun=GetFolderList","&Fun=Create").replace("&t=readmail_filter","&loc=filter,simple,0,0&folderid="+_sFolderId));
});
addEvent(S("confirm",_oDialogWin),"click",function(){
var _sFolderId=_fGetItemValue(),_nOldMail=S("oldmail",_oDialogWin).checked?1:0;
if(_sFolderId=="-1")
{
showError("\u60A8\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6\u5939");
_fRestet();
}
else if(!_sFolderId)
{
showError("\u8BF7\u9009\u62E9\u6587\u4EF6\u5939");
_fRestet();
}
else{
QMAjax.send("/cgi-bin/foldermgr",{method:"POST",content:["sid=",getSid(),"&fun=addfilter&from=simple&ef=js&action=move&oldmail=",_nOldMail,"&sender=",_asAddr,"&folderid=",_sFolderId].join(''),onload:function(_abIsOk,_asResp){
try{
if(_abIsOk)
{
var _oData=eval("("+_asResp+")");
if(_oData.errcode=="0")
{
if(_nOldMail&&_oData.affected>0)
{
showInfo(TE(['\u64CD\u4F5C\u6210\u529F\uFF0C','$@$if($num$>0)$@$','\u79FB\u52A8\u4E86$num$\u5C01\u90AE\u4EF6\u3002','$@$else$@$','\uFF0C\u60A8\u6CA1\u6709\u9700\u8981\u79FB\u52A8\u6216\u6807\u8BB0\u7684\u90AE\u4EF6\u3002','$@$endif$@$','<a href="/cgi-bin/mail_list?sid=$sid$&folderid=$fid$&page=0"','style="color:white" onclick="getTop().gotoCheckMovedEmail();" target="mainFrame">','[\u67E5\u770B]','</a>']).replace({sid:getSid(),fid:_oData.folderid,num:_oData.affected}),30000);
}
else{
showInfo("\u5DF2\u6210\u529F\u65B0\u5EFA\u89C4\u5219");
}
ossLog("realtime","all","loc=filter,simple,0,1");
_oDialog.close();
}
else{
showError(_oData.errmsg);
}
return;
}
}
catch(e)
{
}
showError("\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
}});
}
});
addEvent(S("cancel",_oDialogWin),"click",function(){
_oDialog.close();
});
}
else{
showError("\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5\u3002");
}
});
}});
}
function closeSimpleRuleFilter(a)
{
a&&a();
QMDialog("addnewfilter_qqmail").close();
}
function applyRules(a)
{
confirmBox({title:"\u6536\u4FE1\u89C4\u5219",msg:"\u60A8\u662F\u5426\u8981\u5BF9\u6536\u4EF6\u7BB1\u7684\u5DF2\u6709\u90AE\u4EF6\u6267\u884C\u6B64\u89C4\u5219?",confirmBtnTxt:'\u662F',cancelBtnTxt:'\u5426',onreturn:function(b){
if(b)
{
applyRulesConfirm(a);
}
else{
callBack(a);
}
}});
}
function applyRulesConfirm(a)
{
QMAjax.send("/cgi-bin/mail_mgr",{method:"POST",content:["sid=",getSid(),"&fname=&mailaction=mail_filter"].join(''),headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(b,c){
if(b)
{
show(S("spam",getMainWin()),0);
getTop().QMMLCache.upVer();
a&&callBack(a);
}
else{
showError("\u6536\u4EF6\u7BB1\u5386\u53F2\u90AE\u4EF6\u5F52\u6863\u5931\u8D25");
}
}});
}
function submitSwitchForm()
{
var a=getTop().S("frmSwitch");
a&&a.submit();
}
function getDomain(a)
{
return [["foxmail.com","qq.com","biz"],["Foxmail.com","QQ","\u817E\u8BAF"]][a?1:0][/,7$/.test(getSid())?2:(location.href.indexOf("foxmail.com")>-1?0:1)];
}
var GetDomain=getDomain;
function getSid()
{
var b=getTop();
if(b.g_sid)
{
return b.g_sid;
}
var a=S("sid");
return a?a.value:b.getUrlParams(location).sid;
}
var GetSid=getSid;
function getUin()
{
return getTop().g_uin;
}
function osslogDomain()
{
return getTop().gsOsslogDomain||"http://rl.mail.qq.com";
}
function getCssDomain()
{
return getTop().gsGetCssDomain||"";
}
function getPaths()
{
if(getLocale()=="zh_CN")
{
var a={images_path:"/zh_CN/htmledition/images/",js_path:"/zh_CN/htmledition/js/",css_path:"/zh_CN/htmledition/css/",style_path:[getCssDomain(),"/cgi-bin/getcss?sid=",getSid(),"ft="].join(""),swf_path:window.location.protocol+'//'+window.location.host+"/zh_CN/htmledition/swf/",stationery_path:"http://res.mail.qq.com/zh_CN/",card_path:"http://res.mail.qq.com/zh_CN/",mo_path:"http://res.mail.qq.com/zh_CN/",base_path:"/",skin_path:"0"};
}
else{
var a={images_path:"/en_US/htmledition/images/",js_path:"/en_US/htmledition/js/",css_path:"/en_US/htmledition/css/",style_path:"/cgi-bin/getcss?sid="+getSid()+"ft=",swf_path:"/en_US/htmledition/swf/",stationery_path:"http://res.mail.qq.com/zh_CN/",card_path:"http://res.mail.qq.com/zh_CN/",mo_path:"http://res.mail.qq.com/zh_CN/",base_path:"/",skin_path:"0"};
}
for(var b in a)
{
a[b]=trim(getTop()[b])||a[b];
}
return a;
}
function getPath(b,a)
{
b=="image"&&(b+="s");
var c=getPaths()[b+"_path"]||"";
if(c)
{
if(a&&b!="skin"&&c.indexOf("http")!=0)
{
c=[location.protocol,"//",location.host,c].join("");
}
}
return c;
}
function getRes(a)
{
return T(a).replace(getPaths(),true);
}
function getFullResSuffix(a)
{
if(!getTop().gLn)
{
return a;
}
var b,d,c=".j"+"s";
if(a.indexOf(c)>0)
{
b=a.substr(0,a.indexOf(c));
d=c;
}
else if(a.indexOf(".css")>0)
{
b=a.substr(0,a.indexOf(".css"));
d=".css";
}
else if(a.indexOf(".html")>0)
{
b=a.substr(0,a.indexOf(".html"));
d=".html";
}
if(b.length>0&&getTop().gLn[b])
{
return b+getTop().gLn[b]+d;
}
else{
return a;
}
}
function outputJsReferece(c,a,b)
{
var i=c||outputJsReferece._msPath,f=a||outputJsReferece._moFileList,h=b||window,g=T(['<script $crossorigin$ src="$file$$r$"></','script>']),j=c?'':'r='+Math.random(),e=[];
outputJsReferece._msPath=i;
outputJsReferece._moFileList=f;
function d(k)
{
var m=trim(k||""),n=/[0-9a-fA-F]{6}\.js$/.test(m)?k.substr(0,k.length-9):k.split(".")[0],l=loadJsFile.checkCrossOrigin(i+k),o='';
if(n&&(c||!h[n+"_js"]))
{
if(j)
{
o=k.indexOf('?')>0?'&'+j:'?'+j;
}
else if(l)
{
o=k.indexOf('?')>0?'&r=o':'?r=o';
}
e.push(g.replace({file:i+k,r:o,crossorigin:l?'crossorigin="*"':''}));
}
}
E(f,d);
return e.join("");
}
function runUrlWithSid(a)
{
try{
getTop().getHttpProcesser().src=T('$url$&sid=$sid$&r=$rand$').replace({url:a,sid:getSid(),rand:Math.random()});
}
catch(b)
{
}
}
function createBlankIframe(b,a)
{
cacheByIframe(a&&a.defcss==false?[]:[["css","",getRes("$css_path$comm327bfb.css")],["css",getPath("style"),"skin"]],extend({className:"menu_base_if",transparent:false,destroy:false},a,{win:b,header:["<script>",getTop.toString().replace(/[\r\n]/g,""),"<\/script>",a&&a.header||""].join(""),onload:function(c){
if(this.getAttribute("cbi_inited")!="true")
{
this.contentWindow.document;
a&&a.transparent&&(this.contentWindow.document.body.style.background="transparent");
this.setAttribute("cbi_inited","true");
}
callBack.call(this,a&&a.onload,[c]);
}}));
}
function getFileTypeByExt(a)
{
var b={"eml":"eml","pdf":"pdf","txt":"txt,h,m,js,as,java,c,cpp,plist,ini,stp,csv,xml","html":"html,htm,xhtml,mht","rar":"zip,7z,rar,bz2,gz,tar,tbz,tgz,cab,gzip,bzip2,deb","mov":"mp3,m4a,wma,wav,aac,ac3,mp2,ape,flac,f4a,mkv,rmvb,wmv,mp4,f4v,flv,avi,mov,qt,m4v,asf,rm,mpeg,mpg,vob,ts,3gp,3gpp,3gp2,ogg,ogv,mp4,webm,f4m,avi","jpg":"jpg,png,bmp,gif,jpeg,tiff","fl":"fla,swf","psd":"psd","exl":"xls,xlsx,et,ett","ppt":"ppt,pptx,dps,dpt","doc":"doc,docx,rtf,dot,docm,wps,wpt","blank":""};
b=(function(c){
var d={};
for(var e in c)
{
for(var h=c[e].split(","),f=0,g=h.length;f<g;f++)
{
d[h[f]]=e;
}
}
return d;
})(b);
return (b[a.toLowerCase()]||"blank");
}
;function getIconByFileType(a,b)
{
var c=/^(min|mid|max)$/g.test(b)?b:"min";
return ["/zh_CN/htmledition/images/xdisk/ico_",c,"/fu_",a.toLowerCase(),".gif"].join("");
}
;function getIconByExt(a,b)
{
var c=/^(min|mid|max)$/g.test(b)?b:"min";
return ["/zh_CN/htmledition/images/xdisk/ico_",c,"/fu_",getFileTypeByExt(a.toLowerCase()),".gif"].join("");
}
;function getViewTypeByExt(a)
{
var b={"doc":"c,doc,xls,ppt,docx,xlsx,pptx,rtf,pdf,txt,js,as,htm,html,mht,xhtml,eml,h,m,java,cpp,plist,ini,xml,pps,stp,csv,dot,docm,et,ett,dps,dpt,wps,wpt","music":"mp3,f4a,oga,wma,wav,m4a,aiff,aifc","video":"mp4,wmv,swf,mov,flv,f4v,m4v,ogg,ogv,webm,avi,m4v,rm,rmvb,mpeg,mpg,3gp","compress":"zip,7z,rar,bz2,gz,tar,tbz,tgz,cab,gzip,bzip2,deb","img":"jpg,jpeg,bmp,gif,png"};
for(var c in b)
{
if([",",b[c],","].join("").indexOf([",",a.toLowerCase(),","].join(""))>-1)
{
return c;
}
}
return "other";
}
function getFileExt(a)
{
var b=a.split('.');
return b.length>1?b.pop().toLowerCase():'';
}
function getViewTypeByFileName(a)
{
return getViewTypeByExt(getFileExt(a));
}
function createActionFrame(a)
{
return createBlankIframe(a,{id:"actionFrame",defcss:false,onload:actionFinishCheck});
}
function hideEditorMenu()
{
if(getTop().QMEditor)
{
getTop().QMEditor.hideEditorMenu();
}
}
function OprMouseDown(a)
{
hideMenuEvent(a);
getTop().OprATagForDistributeDomain(a);
hideCalendar(a);
}
function hideCalendar(a)
{
if(getTop()._oCalendar)
{
getTop().removeSelf(getTop()._oCalendar.calendar);
getTop()._oCalendar=null;
}
}
function hideMenuEvent(b)
{
var d=getEventTarget(b),c=getTop().QMMenu&&getTop().QMMenu();
for(var e in c)
{
!c[e].isContain(d)&&!(c[e]._moAutoComplete&&c[e]._moAutoComplete._moMenu.isContain(d))&&c[e].close();
}
try{
getTop().QQPlusUI&&getTop().QQPlusUI.hideMenuEvent(d);
}
catch(a)
{
}
}
function confirmBox(a)
{
var c=2,b=a.defaultChecked||false,e=a.confirmBtnTxt||"\u786E\u5B9A",d=a.cancelBtnTxt||"\u53D6\u6D88",f=a.neverBtnTxt;
return new (getTop().QMDialog)({bAlignCenter:a.bAlignCenter,sId:a.id||"QMconfirm",sTitle:a.title||"\u786E\u8BA4",bAnimation:a.bAnimation||false,sClassName:a.sClassName,nWidth:a.nWidth,sBodyHtml:TE(['<div class="$sStyle$" style="$sStyle$">','$@$if($sType$=="custom")$@$','$msg$','$@$else$@$','<div class="cnfx_content">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">$msg$</div>','</div>','<div class="cnfx_status" style="display:$statusdisp$;">','<input id="recordstatus" class="cnfx_status_checkbox" type="checkbox" $checked$/><label for="recordstatus">$recordinfo$</label>','</div>','$@$endif$@$','</div>']).replace({sStyle:a.style||'',sType:a.sType||"",msg:a.msg,caceldisp:a.mode=="alert"?"none":"",imgdisp:a.mode=="prompt"?"none":"block",recordinfo:a.recordInfo,statusdisp:a.enableRecord?"":"none",checked:a.defaultChecked?"checked":"",confrim:e,confirmcss:getAsiiStrLen(e)>5?"":"wd2",cancel:d,cancelcss:getAsiiStrLen(d)>5?"":"wd2",never:f,neverdisp:f?'':'none',nevercss:getAsiiStrLen(f)>5?"":"wd2"}),sFootHtml:TE(['$@$if($bIsFromExBook$)$@$','<style>','.createRule_checkbox{margin-top: 0;vertical-align: middle;*vertical-align: -4px;_vertical-align: -1px;}','</style>','<div style="float: left;"><input type="checkbox" id="rule_for_history" checked class="createRule_checkbox"><label for="rule_for_history">\u540C\u65F6\u5F52\u6863\u6536\u4EF6\u7BB1\u7684\u5386\u53F2\u90AE\u4EF6</label></div>','$@$endif$@$','<div class=" txt_right cnfx_btn">','<a class="btn_gray confirm $confirmcss$ $confirmClass$" id="confirm" href="javascript:;">$confirm$</a>','<a class="btn_gray cancel $cancelcss$ $cancelClass$" id="cancel" style="display:$caceldisp$;" href="javascript:;">$cancel$</a>','<a class="btn_gray $nevercss$" id="never" style="display:$neverdisp$;" href="javascript:;">$never$</a>','</div>']).replace({bIsFromExBook:a.bIsFromExBook,caceldisp:a.mode=="alert"?"none":"",confirm:e,confirmcss:getAsiiStrLen(e)>5?"":"wd2",confirmClass:a.confirmClass||"",cancel:d,cancelcss:getAsiiStrLen(d)>5?"":"wd2",cancelClass:a.cancelClass||"",never:f,neverdisp:f?'':'none',nevercss:getAsiiStrLen(f)>5?"":"wd2"}),onload:function(){
var j=this,h=j.S("confirm"),g=j.S("cancel"),i=j.S("never");
addEvents([h,g,i],{click:function(k){
var l=getEventTarget(k);
if(l==h)
{
if(j.S("recordstatus"))
{
b=j.S("recordstatus").checked;
}
c=1;
}
else if(l==i)
{
c=3;
}
else{
c=2;
}
j.close();
c=2;
preventDefault(k);
}});
callBack.call(j,a.onload);
},onshow:function(){
gbIsMac||this.S("confirm").focus();
callBack.call(this,a.onshow);
},onclose:a.onclose,onbeforeclose:function(){
try{
return callBack.call(this,a.onreturn,[c==1,b,c]);
}
catch(g)
{
}
return true;
}});
}
function alertBox(a)
{
return confirmBox(extend({mode:"alert"},a));
}
function promptBox(a)
{
var b=false,c=a.onreturn;
a.onreturn=function(d){
var e=this;
callBack.call(e,c,[b||d,e.S("txt").value]);
};
a.msg=T(['<div class="dialog_txt">','<div style="margin:0 10px 10px;" class="bold">$msg$</div>','<div style="margin:10px 10px 5px;"><input type="text" id="txt" style="width:352px;" class="txt" value="$defaultValue$"/></div>','<div style="margin:0 10px 10px;" class="f_size addrtitle">$description$</div>','</div>']).replace(a);
return confirmBox(extend({sType:"custom",height:160,onload:function(){
var d=this;
addEvent(d.S("txt"),"keydown",function(e){
if(e.keyCode==13)
{
b=true;
d.close();
}
});
},onshow:function(){
this.S('txt').select();
this.S("txt").focus();
}},a));
}
function loadingBox(a)
{
if(!callBack(a.oncheck))
{
var b=new QMDialog({sId:"LoAdINgBOx",sTitle:a.model+"\u6A21\u5757\u52A0\u8F7D\u4E2D...",nWidth:400,nHeight:187,sBodyHtml:T(['<div style="text-align:center;padding:58px; padding-bottom:78px;">','<img id="load" src="$images_path$ico_loading21e9c5d.gif">','<span id="err" style="display:none;">$model$\u6A21\u5757\u52A0\u8F7D\u5931\u8D25</span>','</div>']).replace(extend(a,{images_path:getPath("image")})),onclose:function(){
b=null;
}});
if(a.js)
{
loadJsFileToTop(typeof a.js=="string"?[a.js]:a.js);
}
waitFor(function(){
return callBack(a.oncheck);
},function(c){
if(!b)
{
return;
}
if(!c)
{
show(b.S("load"),false);
show(b.S("err"),true);
}
else{
b.close(true);
callBack(a.onload);
}
});
}
else{
callBack(a.onload);
}
}
(function(){
var c=getTop();
function b(f,e)
{
var f="weixinCss";
if(!c.S(f))
{
var g=c.document.createElement("style");
g.type="text/css";
g.id=f;
if(c.gbIsIE)
{
g.styleSheet.cssText=e;
}
else{
g.innerHTML=e;
}
c.document.getElementsByTagName("head")[0].appendChild(g);
}
}
var a=TE(['<div id="mask" class="editor_mask opa50Mask editor_maskAtt" ></div>','<a id="close" class="wx_c_bar" href="javascript:;" title="\u5173\u95ED" style="$@$if($noclose$)$@$display:none$@$endif$@$;"><span class="wx_close"></span></a>','<div id="out" style="z-index:1000;position: absolute;width:$width$%;height:$height$%;margin-left:$offsetLeft$%;margin-top:$offsetTop$%;outline:0;" tabindex="-1" hidefocus="hidefocus">','<div id="body" style="width:100%;height:100%">$html$</div>','</div>']);
function d(e)
{
b(e.sId,e.sCssRule);
new QMPanel({oEmbedWin:c,sStyle:"position:absolute;width:100%; height:100%; left:0; top:0; margin-top:-2px",nWidth:"auto",nHeight:"auto",sId:"weixinnote",sClassName:"qr_previewer",sBodyHtml:a.replace({noclose:e.bNoCloseBtn,html:e.sBodyHtml,images_path:getPath("image"),offsetTop:(100-e.nHeightPercent)/2,offsetLeft:(100-e.nWidthPercent)/2,width:e.nWidthPercent,height:e.nHeightPercent}),onclose:e.onclose,onload:function(){
var f=this;
f.S("mask").onclick=f.S("close").onclick=function(){
f.close();
};
e.onload&&callBack.call(f,e.onload,[f]);
}});
}
window.maskPanel=d;
})();
function getQMPluginInfo(a)
{
var b=(gbIsWin&&(gbIsFF&&gsFFVer.split(".")[0]<4||gbIsChrome&&(""+gsChromeVer).split('.')[0]<6||gbIsQBWebKit&&getQMPluginInfo._compareVersion(gsQBVer,"6.5")<=0))||(gbIsMac&&(gbIsFF&&parseFloat(gsFFVer)<3.6||gbIsSafari&&parseFloat(gsChromeVer)<8||gbIsSafari&&parseFloat(gsSafariVer)<5));
return !b;
}
getQMPluginInfo._compareVersion=function(a,b){
var g=(""+a).split("."),e=g.length,h=(""+b).split("."),f=h.length;
for(var j=0;j<e&&j<f;j++)
{
var c=parseInt(g[j]),d=parseInt(h[j]);
if(c==d)
{
continue;
}
return c>d?1:-1;
}
if(j<e)
{
return 1;
}
if(j<f)
{
return -1;
}
return 0;
};
var QMAXInfo={_moInfos:{path:"/activex/",cab:["TencentMailActiveX.cab","TencentMailActiveX_2.cab"],exe:"TencentMailActiveXInstall.exe",obj:[["TXGYMailActiveX.ScreenCapture","TXGYMailActiveX.UploadFilePartition","TXGYMailActiveX.Uploader","TXFTNActiveX.FTNUpload","TXGYMailActiveX.DropFile"]],available:["ScreenCapture","Uploader","FTNUpload","DropFile","UploadFilePartition"],lastVer:["1.0.1.54","1.0.1.29","1.0.1.54","1.0.3.2","1.0.0.53"],miniVer:[(getDomain()=="foxmail.com")?"1.0.0.5":"1.0.1.28","1.0.1.28","1.0.1.28","1.0.0.16","1.0.0.7"]},_moInfos_FF:{path:"/xpi/",xpi:"TencentMailPlugin.xpi",obj:["ScreenCapture","","Uploader","FTNUpload",""],available:["ScreenCapture","Uploader","FTNUpload"],name:["QQMail Plugin","","QQMail Plugin","Tencent FTN plug-in","QQMail Plugin"],type:(function(){
var a="application/txftn",b="application/txftn-webkit";
return ["application/x-tencent-qmail","","application/x-tencent-qmail",(typeof navigator.mimeTypes!="undefined")&&navigator.mimeTypes[b]?b:a,"application/x-tencent-qmail"];
})(),lastVer:["1.0.1.56","","1.0.1.56","1.0.0.6","1.0.0.1"],miniVer:["1.0.1.28","","1.0.1.28","1.0.0.4","1.0.0.0"]},_moInfos_WebKit:{path:"/crx/",crx:"TencentMailPlugin.crx",exe:"QQMailWebKitPlugin.exe",obj:["ScreenCapture","","Uploader","FTNUpload","","PPFTNUpload"],available:["ScreenCapture","FTNUpload"],name:["QQMail Plugin","","QQMail Plugin","Tencent FTN plug-in","","Native Client"],type:["application/x-tencent-qmail-webkit","","application/x-tencent-qmail-webkit","application/txftn-webkit","","application/x-pnacl"],lastVer:["1.0.1.56","","1.0.1.56","1.0.0.6","","1.0.0.0"],miniVer:["1.0.1.28","","1.0.1.28","1.0.0.4","","1.0.0.0"]},_moInfos_chrome42:{path:"/crx/",exe:"QQMailScreenCapturePlugin.exe",obj:["ScreenCapture"],available:["ScreenCapture"],name:["QQMail Plugin"],type:[],lastVer:["1.0.0.0"],miniVer:["1.0.0.0"]},_moInfos_WebKitForMac:{path:"/crx/",pkg:"TencentMailPluginForMac.pkg",obj:["ScreenCapture","","Uploader","FTNUpload","","PPFTNUpload"],available:["ScreenCapture","Uploader"],name:["QQMailPlugin","","QQMailPlugin","Tencent FTN Plug-in","","Native Client"],type:["application/x-tencent-qmail-webkit","","application/x-tencent-qmail-webkit","application/txftn","","application/x-pnacl"],lastVer:["1.0.1.34","","1.0.1.34","1.0.0.3","","1.0.0.0"],miniVer:["1.0.1.34","","1.0.1.34","1.0.0.3","","1.0.0.0"]},mbAblePlugin:getQMPluginInfo("10.6.8"),mbAbleUsePlugin:getQMPluginInfo("10.6.8"),_mbIsChecked:true,getTitle:function(){
return gbIsIE?"\u63A7\u4EF6":"\u63D2\u4EF6";
},getinfo:function(){
if(QMAXInfo.mbAblePlugin)
{
if(gbIsWin)
{
if(gbIsIE)
{
return QMAXInfo._moInfos.available;
}
if(gbIsFF)
{
return QMAXInfo._moInfos_FF.available;
}
if(gbIsChrome||gbIsSafari||gbIsOpera||gbIsWebKit)
{
return QMAXInfo._moInfos_WebKit.available;
}
}
if(gbIsMac)
{
return QMAXInfo._moInfos_WebKitForMac.available;
}
}
return [];
},_grayUpdate:function(){
},installer:function(b,a){
var d=this.get("whole",a),e="";
if(/^online/.test(b))
{
if(d.cab)
{
e=this.get("cab");
}
else{
e=d.xpi||(gbIsChrome&&parseInt(gsChromeVer)<21&&d.crx);
}
}
else if(/^download/.test(b)&&d)
{
if(a=="FF"||(!a&&gbIsFF))
{
d=this.get("whole","WebKit");
}
e=d.exe||d.pkg;
}
if(e)
{
var c=e.split('.');
e=[[c[0]].concat(d.lastVer[0].split('.')).join("_"),c[1]].join('.');
}
if(e&&/Abs$/.test(b))
{
e=d.path+e;
}
return e;
},get:function(b,a){
if(!a)
{
gbIsIE&&(a="IE");
gbIsFF&&(a='FF');
(gbIsChrome||gbIsSafari||gbIsOpera||gbIsWebKit)&&(a="WebKit");
!gbIsIE&&gbIsMac&&(a="mac");
}
var d={IE:this._moInfos,FF:this._moInfos_FF,chrome:this._moInfos_WebKit,chrome42:this._moInfos_chrome42,WebKit:this._moInfos_WebKit,mac:this._moInfos_WebKitForMac}[a];
if(!this._mbIsChecked)
{
this._grayUpdate();
}
if(b=="whole")
{
return d;
}
else if(b=="cab")
{
var c=createActiveX(0),f=c?"":"_2.dll";
try{
f=c.GetDLLFileName();
}
catch(g)
{
}
return d["cab"][f&&f.indexOf("_2.dll")!=-1?0:1];
}
return d[b];
}};
function createActiveX(a,b)
{
if(!gbIsIE)
{
return createPlugin(a,false,b);
}
if(a>=0&&a<=4)
{
var c=QMAXInfo.get("obj");
for(var e=0,f=c.length;e<f;e++)
{
if(a==3)
{
try{
new ActiveXObject(c[e][0]);
}
catch(d)
{
}
}
try{
return new ActiveXObject(c[e][a]);
}
catch(d)
{
}
}
}
return null;
}
function detectActiveX(a,b,c,d)
{
if(!gbIsIE)
{
return detectPlugin(a,b,c,d);
}
var f=typeof (c)=="undefined",e=false,g=f?createActiveX(a):c,h=getActiveXVer(g);
if(g&&h)
{
if(b!=1&&b!=2)
{
e=true;
}
else if(getQMPluginInfo._compareVersion(h,QMAXInfo.get(b==1?"miniVer":"lastVer")[a])>=0)
{
e=true;
}
if(f)
{
delete g;
g=null;
}
}
return e;
}
function getMailPluginVersion()
{
var i=getActiveXVer(0),h=getActiveXVer(3),g=QMAXInfo.get("lastVer")[3],f=i.split("."),e=h.split("."),d=g.split("."),c=parseInt(f[f.length-1]),b=parseInt(e[e.length-1]),a=parseInt(d[d.length-1]);
if(a>=b&&b>4)
{
c+=(b-4);
f[f.length-1]=c;
if(a==b&&i!="1.0.1.54")
{
return QMAXInfo.get("lastVer")[0];
}
return f.join(".");
}
else{
return i;
}
}
function getActiveXVer(a)
{
if(!gbIsIE)
{
return getPluginVer(a);
}
var d="",b;
try{
b=typeof (a)=="number"?createActiveX(a):a;
d=b&&(b.version?b.version:"1.0.0.8")||"";
}
catch(c)
{
}
return d;
}
function canUseFTNPluginForFF(a)
{
var e="application/txftn-webkit",d=a||"1.0.0.1",c="1.0.0.0",b=navigator.plugins;
for(var g=b.length-1;g>=0;g--)
{
for(var h=b[g].length-1;h>=0;h--)
{
if(b[g][h].type==e)
{
var f=b[g].description.split('#')[1]||b[g].version;
c=getQMPluginInfo._compareVersion(f,c)>0?f:c;
}
if(g==0)
{
return getQMPluginInfo._compareVersion(c,d)>=0;
}
}
}
return false;
}
function checkInstallPlugin(a)
{
if(!QMAXInfo.mbAbleUsePlugin)
{
return false;
}
try{
navigator.plugins.refresh(false);
}
catch(g)
{
}
var c=QMAXInfo.get("name")[a],f=QMAXInfo.get("type")[a],b=navigator.plugins;
if(b&&c)
{
if(a==3&&+gsFFVer>=22)
{
return canUseFTNPluginForFF("1.0.0.5");
}
else{
for(var h=b.length-1;h>=0;h--)
{
for(var k=b[h].length-1;k>=0;k--)
{
if(b[h].name.indexOf(c)!=-1&&b[h][k].type==f)
{
if(gbIsChrome&&a==5)
{
return true;
}
if(a!=3&&(gsAgent.indexOf("vista")>-1||/nt 6/gi.test(gsAgent))&&f=="application/x-tencent-qmail")
{
var d=b[h].description.split('#')[1];
if(!d)
{
continue;
}
}
var d=/(\d+(?:\.\d+)+)/.test(b[h].description||"")?RegExp.$1:"1.0.0.0";
if(gbIsMac&&a!=3&&d=="1.0.0.0")
{
continue;
}
if(gbIsMac&&gbIsChrome&&parseFloat(gsChromeVer)>21&&getQMPluginInfo._compareVersion(d,"1.0.0.6")<0)
{
continue;
}
return true;
}
}
}
}
}
return false;
}
function createPlugin(b,a,c,d)
{
var e=null;
c=c||getMainWin();
switch(b)
{case 0:
case 2:
case 4:
if(gbIsSafari)
{
createPlugin._createQQMailPlugin(b,c,d);
}
e=createPlugin._createQQMailPlugin(b,getTop(),d);
break;
case 3:
e=createFTNPlugin(c,d);
break;
case 5:
e=createPPFTNPlugin(c,d);
break;
}if(!a&&checkInstallPlugin(b))
{
getTop().ossLog("delay","all",T(['stat=ff_addon','&type=%type%&info=%info%'],'%').replace({type:!e?"failcreatePlugin":"successcreatePlugin",info:["ver:",gsFFVer,",pluginId:",b,",brtpe:",(gbIsFF?1:(gbIsChrome?2:(gbIsSafari?3:(gbIsOpera?4:5))))].join("")}));
}
return e;
}
createPlugin._createQQMailPlugin=function(a,b,c){
var d,e=null,h=gbIsFF?"application/x-tencent-qmail":"application/x-tencent-qmail-webkit";
b=b||getTop();
if(checkInstallPlugin(a))
{
var g=c||"QQMailFFPluginIns";
if(!(d=S(g,b)))
{
insertHTML(b.document.body,"beforeEnd",T('<embed class="needed" id="$id$" type="$type$" hidden="true" style="position:absolute;top:-999px;"></embed>').replace({type:h,id:g}));
d=S(g,b);
}
var f={0:"CreateScreenCapture",2:"CreateUploader",4:"CreateDragDropManager"}[a];
if(typeof d[f]!="undefined")
{
e=d[f]();
if(a==0)
{
e.OnCaptureFinished=function(){
};
}
else if(a==2)
{
e.OnEvent=function(){
};
}
}
}
return e;
};
createPlugin._createFTNPlugin=function(a,b){
var c=null,e=QMAXInfo.get("whole")["type"][3],d=b||"npftnPlugin";
a=a||getTop();
if(!(c=S(d,a)))
{
insertHTML(a.document.body,"beforeEnd",T('<embed class="needed" id="$id$" type="$type$" style="z-index:99999;position:absolute;top:0;left:0;width:1px;height:1px;"></embed>').replace({type:e,id:d}));
c=S(d,a);
if(c)
{
c.onEvent=function(){
};
}
}
return c;
};
function createFTNPlugin(a,b)
{
if(!checkInstallPlugin(3))
{
return null;
}
createPlugin._createFTNPlugin(a,b);
var c=createPlugin._createFTNPlugin(getTop(),b);
if(b)
{
getTop().ossLog("delay","all",T(['stat=ff_addon','&type=%type%&info=%info%'],'%').replace({type:c&&c.Version?"successcreatePlugin":"failcreatePlugin",info:["ver:",gsFFVer,",pluginId:3,insId:",b].join("")}));
}
return c.Version?c:null;
}
createPlugin._createPPFTNPlugin=function(a,b){
var c=null,f=QMAXInfo.get("whole")["type"][5],e=b||"ppftnPlugin";
a=a||getTop();
if(!(c=getTop().finds("[id="+e+"]",getTop().ppContainer)[0]))
{
var d=getTop().ppContainer;
if(d)
{
d.style.position="relative";
insertHTML(d,"afterBegin",T('<embed class="needed" style="left:0px;position:absolute;" name="$id$" id="$id$" type="$type$"  width="$width$" height="$height$" source_module_name="ppapi" multi_select="1" path="" usr_id_name="1021274442" src="../zh_CN/htmledition/upload/ftn_nacl.nmf"></embed>').replace({type:f,height:d.offsetHeight,width:d.offsetWidth,id:e,block_size:1024*1024}));
c=getTop().finds("[id="+e+"]",getTop().ppContainer)[0];
c.Version="1.0.0.1";
}
}
return c;
};
function createPPFTNPlugin(a,b)
{
if(!checkInstallPlugin(5))
{
return null;
}
var c=createPlugin._createPPFTNPlugin(getTop(),b);
if(b)
{
getTop().ossLog("delay","all",T(['stat=ff_addon','&type=%type%&info=%info%'],'%').replace({type:c&&c.Version?"successcreatePlugin":"failcreatePlugin",info:["ver:",gsFFVer,",pluginId:3,insId:",b].join("")}));
}
return c.Version?c:null;
}
function detectPnacl()
{
var c=getTop(),e=QMAXInfo.get("whole")["type"][5],d="div_detectPnacl",a=c.S(d);
if(a)
{
return "1"==c.attr(a,"loaded");
}
else{
if(checkInstallPlugin(5))
{
insertHTML(c.document.body,"beforeEnd",T('<div id="$id$" style="position:absolute;left:-9999px;top:-9999px"></div>').replace({id:d}));
a=c.S(d);
var b={message:function(f){
if(f&&f.data&&f.data.evt=="evtPluginDidInit")
{
c.attr(a,"loaded",1);
}
else{
b.error.apply(this,arguments);
}
},crash:function(){
b.error.apply(this,arguments);
},error:function(){
c.attr(a,"loaded",0);
}};
E(b,function(f,g){
a.addEventListener(g,f,true);
});
insertHTML(a,"beforeEnd",T('<embed class="needed" name="$id$" id="$id$" type="$type$"  width="$width$" height="$height$" source_module_name="ppapi" multi_select="1" path="" usr_id_name="1021274442" src="../zh_CN/htmledition/upload/ftn_nacl.nmf"></embed>').replace({type:e,height:1,width:1,id:d}));
}
else{
return false;
}
}
}
function detectPlugin(b,a,c,d)
{
var e=false;
if(b==5)
{
if(gbIsChrome&&parseInt(gsChromeVer)>41)
{
e=detectPnacl();
}
}
else{
if(gbIsChrome&&!gbIsEdge&&(parseInt(gsChromeVer)>41&&parseInt(gsChromeVer)<45))
{
return e;
}
var f=c||createPlugin(b,true,null,d),g=getPluginVer(f);
if(f&&g)
{
if(a!=1&&a!=2)
{
e=true;
}
else if(b==3&&!gbIsMac&&gbIsSafari)
{
e=false;
}
else if(getQMPluginInfo._compareVersion(g,QMAXInfo.get(a==1?"miniVer":"lastVer")[b])>=0)
{
e=true;
}
}
}
return e;
}
function getPluginVer(a)
{
var b,d="";
try{
b=typeof (a)=="number"?createPlugin(a,true):a;
d=(b&&b.Version)||"";
}
catch(c)
{
}
return d;
}
function initDialog(c,d,e,b,a)
{
new (getTop().QMDialog)({sid:c,sTitle:d,sUrl:e,nWidth:b,nHeight:a});
}
function requestShowTip(c,d,b,a)
{
var e=T('/cgi-bin/tip?sid=$sid$&args=$dom$,$tip$&r=$r$').replace({sid:getSid(),dom:c,tip:d,r:Math.random()});
QMAjax.send(e,{method:'GET',onload:function(f,h,g){
if(f&&h.indexOf('oTop.QMTip')>0)
{
if(!a||a(h,g))
{
globalEval(h,b);
}
}
}});
}
function detectCapsLock(b,c,a)
{
if(!b||(gbIsIE&&gnIEVer>7))
{
return;
}
function f(g)
{
var i=g.target||g.srcElement,h=calcPos(i),j=c||S("capTip",(a||document));
function k()
{
return ["z-index:20;position:absolute;background:#fdf6aa;padding:1px;","border:1px solid #dbc492;border-right:1px solid #b49366;border-bottom:1px solid #b49366;","left:",h[3],"px;","top:",(h[2]+1),"px;"].join("");
}
if(!j)
{
insertHTML((a||document).body,"afterBegin",'<div id="capTip" style="'+k()+'">\u5927\u5199\u9501\u5B9A\u5DF2\u6253\u5F00</div>');
}
else{
j.style.cssText=k();
}
}
function e()
{
show(S("capTip",(a||document)),false);
}
var d=-1;
addEvents(b,{keydown:function(g){
var h=g.keyCode||g.charCode;
if(h==20)
{
if(d==0)
{
f(g);
d=1;
}
else if(d==1)
{
e();
d=0;
}
}
},keypress:function(g){
var i=g.keyCode||g.charCode,h=g.shiftKey;
if((i>=65&&i<=90&&!h)||(i>=97&&i<=122&&h))
{
d=1;
f(g);
}
else if((i>=97&&i<=122&&!h)||(i>=65&&i<=90&&h))
{
d=0;
e();
}
else{
e();
}
},blur:function(){
e();
}});
}
function calcMainFrameDomInGlobalPos(a,b)
{
var k=calcPos(a),j=calcPos(S("mainFrame",getTop())),h=getMainWin().document,i=h.documentElement,g=h.body,d=k[3]+j[3]-(i.scrollLeft||g.scrollLeft||0),e=k[0]+j[0]-(i.scrollTop||g.scrollTop||0),f=k[4],c=k[5];
return b=="json"?{top:e,bottom:e+c,left:d,right:d+f,width:f,height:c}:[e,d+f,e+c,d,f,c];
}
function allDeferOK()
{
return typeof all_defer_js=="function";
}
var QMLocalStorage={sVer:"Storage/11.9.16",_gsSaveKeyName:"QM_UD_key",_gnRetryTimes:3,_oTmp:{},_fIsLegal:function(a){
return this._gsSaveKeyName!=a;
},_fDeleteItem:function(b,a){
return b.slice(0,a).concat(b.slice(a+1,b.length));
},_fReportFull:function(){
var a=getTop(),b="STORAGE_USERDATA_FULL",c=a.T("type=$type$&info=$info$&locval=$loc$").replace({type:b,info:_asInfo,loc:[b,_asInfo].join(",")});
a.ossLog("delay","all",c);
},_getKey:function(a){
return [a,"_",getTop().g_encryptuin].join("");
},_getStorage:function(){
this._fGenUserData();
if(window.LocalStorage)
{
return window.LocalStorage;
}
if(typeof window.localStorage=="object")
{
return window.localStorage;
}
return ({setItem:function(a,b){
this._oTmp[a]=b;
},getItem:function(a){
return this._oTmp[a];
},removeItem:function(a){
debug(" _getStorage removeItem");
this._oTmp[a]=null;
},clear:function(){
this._oTmp={};
}});
},_fGenUserData:function(){
var b=getTop(),a=this;
if(b.gbIsIE&&typeof window.localStorage!="object"&&!window.userData)
{
window.userData=function(){
var c=this,d=",",e="QM_userData";
c._init=function(){
var f=document.createElement("input");
f.type="hidden";
f.addBehavior("#default#userData");
document.body.appendChild(f);
f.save(e);
c._msUserDataNameSpace=e;
c._moDom=f;
return c;
};
c._detect=function(g,h,i,f){
var k=c._moDom,l=c._getAllKeys(),j=false;
switch(g)
{case "get":
c._setKey(h,true);
c._moDom.load(c._msUserDataNameSpace);
return c._moDom.getAttribute(h);
case "set":
if(c._setKey(h))
{
try{
c._moDom.setAttribute(h,i);
c._moDom.save(c._msUserDataNameSpace);
j=true;
}
catch(m)
{
}
}
else{
debug("userData:item set false");
}
f&&f.apply(c,[j]);
return j;
case "remove":
c._rmKey(h);
try{
c._moDom.removeAttribute(h);
c._moDom.save(c._msUserDataNameSpace);
j=true;
}
catch(m)
{
debug("_detect");
debug(m.message);
}
return j;
default:
return j;
}
};
c._findKey=function(f){
var h=c._getAllKeys(),g=-1,j=[d,h.join(d),d].join("");
if(j.indexOf([d,f,d].join(""))>-1)
{
for(var k=0,m=h.length;k<m;k++)
{
if(h[k]==f)
{
g=k;
break;
}
}
}
return g;
};
c._getOldest=function(){
return c._getAllKeys()[0];
};
c._setKey=function(g,f){
var j=c._getAllKeys();
if(!f||f&&c._moDom.getAttribute(g))
{
var i=c._moDom,h=c._findKey(g);
if(h>-1)
{
j=a._fDeleteItem(j,h);
}
j.push(g);
}
return c._saveAllKeys(j.join(d));
};
c._rmKey=function(f){
var h=c._getAllKeys(),g=c._findKey(f);
if(g>-1)
{
return c._saveAllKeys(a._fDeleteItem(h,g).join(d));
}
return;
};
c._getAllKeys=function(){
c._moDom.load(c._msUserDataNameSpace);
var f=c._moDom.getAttribute(a._gsSaveKeyName);
return f?f.split(d):[];
};
c._saveAllKeys=function(f){
try{
var g=c._moDom;
g.setAttribute(a._gsSaveKeyName,f);
g.save(c._msUserDataNameSpace);
return true;
}
catch(h)
{
debug("\u5B58\u50A8key\u503C\u51FA\u73B0\u5F02\u5E38\u3002");
}
return false;
};
return c._init();
};
window.userData.prototype={setItem:function(f,h,g){
var e=this,d=typeof g!="undefined"?g:a._gnRetryTimes,c=arguments.callee;
e._detect("set",f,h,function(i){
if(i)
{
return;
}
if(d>0)
{
var j=e._getOldest();
j&&e.removeItem(j);
c.apply(e,[f,h,--d]);
}
else{
e._rmKey(f);
a._fReportFull([f,e._getAllKeys().length].join(","));
}
});
return e._findKey(f)>-1;
},getItem:function(d){
var c=this;
return c._detect("get",d);
},removeItem:function(d){
var c=this;
return c._detect("remove",d);
},clear:function(){
var d=this,c=d._moDom,e=new Date(_oQMWin.now()-1);
c.load(d._msUserDataNameSpace);
c.expires=e.toUTCString();
c.save(d._msUserDataNameSpace);
}};
window.LocalStorage=new window.userData();
}
},setItem:function(b,c){
if(!this._fIsLegal(b))
{
debug("key\u5FC5\u987B\u7B26\u5408DOM\u5C5E\u6027\u8BBE\u7F6E\u89C4\u8303\u3002");
return;
}
try{
return this._getStorage().setItem(b,c);
}
catch(a)
{
debug(a.message);
debug("\u672C\u5730\u5B58\u50A8\u5931\u8D25\u3002");
}
return;
},getItem:function(b){
if(!this._fIsLegal(b))
{
debug("key\u5FC5\u987B\u7B26\u5408DOM\u5C5E\u6027\u8BBE\u7F6E\u89C4\u8303\u3002");
return;
}
try{
return this._getStorage().getItem(b);
}
catch(a)
{
debug("\u53D6\u503C\u5931\u8D25\u3002");
}
return;
},removeItem:function(b){
if(!this._fIsLegal(b))
{
debug("key\u5FC5\u987B\u7B26\u5408DOM\u5C5E\u6027\u8BBE\u7F6E\u89C4\u8303\u3002");
return;
}
try{
return this._getStorage().removeItem(b);
}
catch(a)
{
debug(a.message);
debug("\u5220\u9664\u5931\u8D25\u3002");
}
return;
},setUserItem:function(a,b){
return this.setItem(this._getKey(a),b);
},getUserItem:function(a){
if(!getTop().g_encryptuin)
{
return;
}
return this.getItem(this._getKey(a));
},removeUserItem:function(a){
return this.removeItem(this._getKey(a));
}};
function jumpToAttachFlag(b,a)
{
var d=[b,a,a].join("|"),c=T("/cgi-bin/attachfolder?topmails=0&sid=$sid$&s=search&folderid=attach&hflag=attach&page=0&t=attachfolder&subject=&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1&action=list&mailattach=$mailattach$&loc=readmail,attachfolder");
attachSetFlag._setFlag({bIsSetStarred:true,oMailAttachs:[d],bIsSilence:true},function(e){
getTop()["gsSelectedAttach"]='';
goUrlMainFrm(c.replace({sid:getSid(),mailattach:encodeURI(d)}));
});
}
;function attachSetFlag(d,a,b,c)
{
var e=typeof (d)=="string"?d.split(","):d;
attachSetFlag._setFlag({bIsSetStarred:a,oMailAttachs:e,loc:(c&&c.sLoc)||"attachfolder,col_readmail",osstype:(c&&c.sOsstype)||"attach_collect_atRead",resp_charset:(c&&c.sCharset)||""},function(f){
b&&b.call(null,f);
rdVer(e.shift().split("|").shift(),1);
});
}
;attachSetFlag._setFlag=function(_aoParam,_afCallback){
var _oCfg=_aoParam||{},_sValidTxt=_oCfg.bIsSetStarred?"\u9644\u4EF6\u5DF2\u6536\u85CF":"\u9644\u4EF6\u5DF2\u53D6\u6D88\u6536\u85CF",_sErroTxt=_oCfg.bIsSetStarred?"\u6536\u85CF\u5931\u8D25":"\u53D6\u6D88\u6536\u85CF\u5931\u8D25";
QMAjax.send("/cgi-bin/attachfolder?t=attachfolder.json",{method:"POST",content:TE(['$@$for($mailattach$)$@$','&mailattach=$_this_$','$@$endfor$@$','&action=$action$&loc=$loc$&osstype=$osstype$','$@$if($resp_charset$!="")$@$','&$resp_charset$','$@$endif$@$']).replace({'mailattach':_oCfg.oMailAttachs,'action':_oCfg.bIsSetStarred?"setflag":"cancelflag",'loc':_oCfg.bIsSetStarred?_oCfg.loc:"",'osstype':_oCfg.osstype,'resp_charset':_oCfg.resp_charset}),onload:function(_abIsOk,_avParam){
if(_abIsOk)
{
try{
var _oData=eval(_avParam);
!_oCfg.bIsSilence&&showInfo(_sValidTxt);
_afCallback&&_afCallback.call(null,_oData);
}
catch(e)
{
!_oCfg.bIsSilence&&showError(_sErroTxt);
}
}
else{
!_oCfg.bIsSilence&&showError("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
}
}});
};
function markAsFinished(b,a)
{
var d=getTop(),e=d.getMainWin(),c;
if(b=="readmail")
{
c=e.QMReadMail.getCBInfo(e);
}
else if(b=="maillist")
{
c=d.QMMailList.getCBInfo(e);
d.QMMailList.selectedUI({oMail:[],oACB:c.oACB});
}
else{
debug("mailid:"+b);
c={oMail:[{sMid:b}]};
a=a||function(){
};
}
debug(c,2);
c&&pendingMail(false,c,a);
QMMailCache.setExpire();
return;
}
function getAttachList(_avParam,_afCallback,_aoOption)
{
_aoOption=_aoOption||{};
var _fSelf=arguments.callee,_oArgs=arguments,_oParam=[''];
E(typeof _avParam=="object"&&_avParam.length?_avParam:[],function(_aoItem){
var _oTemp=[];
_oTemp.push(_aoItem.mailid,_aoItem.attachid,_aoItem.attachname,_aoItem.fileextenal,_aoItem.filebyte);
if(_oTemp.editname)
{
_oTemp.push(_oTemp.editname);
}
_oParam.push(encodeURI(_oTemp.join('|')));
});
QMAjax.send(T("/cgi-bin/readmail?sid=$sid$&t=$t$&s=forward&from=attachfolder&disptype=html&ef=js$param$").replace({sid:getSid(),t:"compose.json",param:_oParam.join('&mailattach=')}),{method:"GET",onload:function(_abIsOk,_avData,_aoXhr){
var _bFlag=true;
if(_abIsOk)
{
try{
var _oData=eval(["(",_avData,")"].join("")),_oAttachs=_oData.attach;
if(_oAttachs&&_oAttachs.length)
{
for(var i=0;i<_oAttachs.length;i++)
{
if(+_oAttachs[i]["byte"]==0)
{
_bFlag=false;
break;
}
}
}
else{
_bFlag=false;
}
}
catch(e)
{
_bFlag=false;
}
}
if(_bFlag&&_abIsOk)
{
_afCallback(true,_oData,_aoXhr);
}
else{
_afCallback(false,_oData,_aoXhr,_avData);
}
}},_aoOption.ajax);
}
;function isEn()
{
return getLocale()=="en_US";
}
function isCh()
{
return getLocale()=="zh_CN";
}
function getLocale()
{
if(typeof gsLocale=="undefined")
{
return "zh_CN";
}
else{
return gsLocale||"zh_CN";
}
}
function recallConfirm(c,b,a)
{
getTop().confirmBox({style:'recall_cfm',confirmBtnTxt:'\u786E\u5B9A',cancelBtnTxt:'\u53D6\u6D88',mode:'prompt',defaultChecked:true,title:"\u64A4\u56DE\u90AE\u4EF6",msg:['<div class="dialog_f_t">\u786E\u5B9A\u64A4\u56DE\u6B64\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5982\u679C\u64A4\u56DE\u6210\u529F\uFF0C\u5BF9\u65B9\u5C06\u53EA\u80FD\u770B\u5230\u90AE\u4EF6\u7684\u4E3B\u9898\uFF0C\u5E76\u5F97\u5230\u5DF2\u88AB\u64A4\u56DE\u7684\u63D0\u793A\u3002</div>','<div class="dialog_f_d graytext" style="margin:12px 0 0 -43px;">','\u8BE6\u7EC6\u8BF4\u660E\uFF1A','<ol style="list-style:decimal;padding:0;margin:0 0 0 2em;" >','<li style="list-style: decimal inside none;">\u4EC5\u5C1D\u8BD5\u64A4\u56DE\u53D1\u5F80QQ\u90AE\u7BB1\u7684\u90AE\u4EF6\uFF0C\u4E0D\u652F\u6301\u4ECE\u5176\u4ED6\u90AE\u7BB1\u64A4\u56DE\u3002</li>','<li style="list-style: decimal inside none;">\u5982\u679C\u5BF9\u65B9\u5DF2\u7ECF\u9605\u8BFB\uFF0C\u5C06\u4E0D\u4E88\u64A4\u56DE\u3002</li>','<li style="list-style: decimal inside none;">\u64A4\u56DE\u7ED3\u679C\u5C06\u901A\u8FC7\u7CFB\u7EDF\u90AE\u4EF6\u901A\u77E5\u60A8\u3002 </li>','</ol>','</div>'].join(""),onreturn:function(d){
d&&recall(c,b,a);
}});
}
;function recall(c,b,a)
{
var d=false,e=(function(){
}),j=a||{},h=j.oninit||e,f=j.onbeforesend||e,i=j.onsuccess||e,g=j.onerror||e,k=getTop().TE(['<style>.recallList { width:97%;margin:0 auto;border:1px solid #ccc!important;border-collapse:collapse;}.recallList td,.recallList th { padding:4px 6px;border:1px solid #ddd; vertical-align:top;font-weight:normal;}.graytext ol li{list-style:none outside decimal;}</style>','<div style="padding:6px 12px 28px;">','^@^if(^result^=="3")^@^','<div id="result_success" class="txt_left b_size bold" style="margin:20px 11px">','<img src="',getRes('$images_path$ico_success_bookmail1e9c5d.gif'),'" align="absmiddle" style="margin-right:6px;width:15px;height:15px;">\u64A4\u56DE\u64CD\u4F5C\u5DF2\u5B8C\u6210\u3002','</div>','^@^else^@^','<div class="txt_left b_size bold" style="padding-top: 9px; padding-right: 0px; padding-bottom: 9px; padding-left: 0px; margin-top: 6px; margin-right: 6px; margin-bottom: 6px; margin-left: 6px;">','<img src="',getRes('$images_path$ico_loading11e9c5d.gif'),'" align="absmiddle" style="margin-right:6px;">\u6B63\u5728\u64A4\u56DE\u4E2D...','</div>','^@^endif^@^','<div style="padding:0 10px">','<div style="width:100%;margin:0 auto;padding:0;overflow:auto;overflow-x:hidden;">','<table cellpadding="2" class="recallList" cellspacing="0" style="width:100%;border:0px solid #fff;" >','^@^for(^maildata^)^@^','<tr style="line-height:18px;text-align:left;">','<td><div style="width:200px;white-space:noworp;overflow:hidden;text-overflow:ellipsis;">^receiver^</div></td>','<td>','^@^if(^status^==1)^@^','\u6B63\u5728\u64A4\u56DE...','^@^else if(^status^==2)^@^','\u5DF2\u64A4\u56DE','^@^else if(^status^==3)^@^','<span class="txt_red">\u64A4\u56DE\u5931\u8D25\uFF0C\u5BF9\u65B9\u5DF2\u8BFB</span>','^@^else if(^status^==4)^@^','<span class="txt_red">\u64A4\u56DE\u5931\u8D25\uFF0C\u90AE\u4EF6\u53EF\u80FD\u5DF2\u88AB\u5220\u9664</span>','^@^else if(^status^==5)^@^','<span class="txt_red">\u64A4\u56DE\u5931\u8D25\uFF0C\u5BF9\u65B9\u90AE\u7BB1\u4E3A\u975EQQ\u90AE\u7BB1</span>','^@^else^@^','\u64A4\u56DE\u5931\u8D25','^@^endif^@^','</td>','</tr>','^@^endfor^@^','</table>','</div>','</div>','<div class="clr"></div>','</div>','<div class="dialog_operate">','<input type="button" id="confirm" value="\u5B8C\u6210" class="btn wd2">','</div>'],"^");
h.apply(recall,[b]);
window["NOW_MSG_ID"]=c;
!window["MAP_MSG_ID"]&&(window["MAP_MSG_ID"]={});
var l=function(m){
var n=setInterval(function(){
window["NOW_MSG_ID"]!=c&&clearInterval(window["MAP_MSG_ID"][c]);
getTop().mailRecall(1,{taskid:m.taskid,mailid:recall._msMailid,msgid:c},{onbeforesend:function(){
getTop().showProcess(1,1,"\u6B63\u5728\u67E5\u8BE2\u53D1\u4FE1\u72B6\u6001","",0);
},onsuccess:function(o){
if(o.maildatacnt>0)
{
if(!d)
{
new (getTop().QMDialog)({sId:"query_recall_status_dlg",sTitle:"\u64A4\u56DE\u90AE\u4EF6",nWidth:460,sBodyHtml:k.replace(o),onshow:function(){
var p=this;
getTop().addEvent(p.S("confirm"),"click",function(){
p.close();
});
},onclose:function(){
clearInterval(window["MAP_MSG_ID"][c]);
getTop().hiddenMsg();
}});
d=true;
}
else{
getTop().QMDialog("query_recall_status_dlg").setBody(k.replace(o));
}
}
if(o.result==3)
{
clearInterval(window["MAP_MSG_ID"][c]);
getTop().hiddenMsg();
i.apply(recall);
}
},onerror:function(){
clearInterval(window["MAP_MSG_ID"][c]);
g.apply(recall);
}});
},3000);
window["MAP_MSG_ID"][c]=n;
};
getTop().mailRecall(0,{msgid:c,mailid:recall._msMailid,time:recall._msTime},{onbeforesend:function(){
f.apply(recall);
getTop().showProcess(1,1,"\u90AE\u4EF6\u64A4\u56DE\u4E2D...","",0);
},onsuccess:function(m){
l(m);
},onerror:function(){
g.apply(recall);
}});
}
;function mailRecall(_anType,_aoParam,_aoCallbacks)
{
var _oCallbacks=_aoCallbacks||{},_oPostData=extend({r:Math.random(),sid:getSid()},_aoParam);
if(_oCallbacks.onbeforesend&&_oCallbacks.onbeforesend()===false)
{
return;
}
QMAjax.send("/cgi-bin/send_status",{method:"POST",content:!_anType?T('t=send_status.json&s=mailrecallv2&messageid=$msgid$&time=$time$&sid=$sid$&r=$r$&ef=js'+(_oPostData.mailid?"&mailid=$mailid$":"")).replace(_oPostData):T('t=send_status.json&s=mailrecall_queryv2&taskid=$taskid$&messageid=$msgid$&sid=$sid$&r=$r$&ef=js'+(_oPostData.mailid?"&mailid=$mailid$":"")).replace(_oPostData),onload:function(_abIsOk,_avParam){
if(_abIsOk)
{
try{
var _oData=eval(["(",_avParam,")"].join(""));
if(+_oData.errcode>-1&&_oData.taskid!=="0")
{
_oCallbacks.onsuccess&&_oCallbacks.onsuccess(_oData);
return;
}
else if(+_oData.taskid==0)
{
showError("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
}
else{
showError(_oData.errmsg||(_anType==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
}
}
catch(e)
{
showError(_oData.errmsg||(_anType==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
}
_oCallbacks.onerror&&_oCallbacks.onerror(_avParam);
}
else{
_avParam!="abort"&&showError(_oData.errmsg||(_anType==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
_oCallbacks.onerror&&_oCallbacks.onerror(_avParam);
}
_oCallbacks.oncomplete&&_oCallbacks.oncomplete(_abIsOk,_avParam);
}});
}
;function backHome(a)
{
if(getLocale()=="zh_CN")
{
getMainWin().location.href=T('/cgi-bin/today?sid=$sid$&loc=backhome,,,$locid$').replace({sid:getSid(),locid:a||140});
}
else{
getMainWin().location.href=T('/cgi-bin/mail_list?sid=$sid$&folderid=1&page=0&nocheckframe=true').replace({sid:getSid()});
}
}
function resizeFolderList()
{
var h=S("SysFolderList"),g=S("ScrollFolder"),e=S("folder");
if(h&&g&&e)
{
var f=["auto","hidden"],b=e.clientHeight,d=h.offsetHeight,a=b-d,c=a<50?0:1;
e.style.overflow=f[c];
e.style.overflowX=f[1];
g.style.overflow=f[1-c];
g.style.height=c?(b-d)+"px":"auto";
}
AD.setAdFlag();
if(AD.isADUser(window))
{
AD.adjustADDisp();
}
}
function setTopSender(a)
{
var b=getTop().goUserInfo.get("DEF_MAIL_FROM")||'';
switch(a&&a.action)
{case "setting4":
if(b!=a.email)
{
setUserInfo("addr",a.email);
setDefaultSender(a.email);
changeStyle(a.skin,a.logo);
getTop().skin_path=a.skin;
clearCache(["css",getPath("style"),"skin"]);
}
getTop().goUserInfo.reset();
break;
}
}
function bindAccount()
{
var e=S("useraddr"),d=S("useraddrArrow"),a=getTop().goUserInfo.get('RealBindAccount'),b={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},c=[],f=e&&subAsiiStr(e.innerHTML,20,"...");
if(!e||!a)
{
return;
}
if(a.mastermail.length)
{
c.push({nHeight:54,sItemValue:['<div style="line-height:24px;">','<div class="ml">\u8FD4\u56DE\u5173\u8054\u5E10\u53F7</div>','<div><a href="javascript:;" class="btn_gray" style="width:192px;" id="back_to_master">',a.mastermail[0].email,'</a></div>','</div>'].join('')});
}
else if(a.othermail.length||a.bizmail.length)
{
c.push({sItemValue:'<a id="manage" href="javascript:;" style="float: right;">\u7BA1\u7406</a><span class="ml">\u5173\u8054\u5E10\u53F7\uFF1A</span>'},{sId:'self',bDisSelect:true,sItemValue:T('<div class="unread_num"><span class="ico_unreadnum"></span>$unread$</div><input type="button" class="ft_upload_success" id="self"/><span style="overflow:hidden;margin-left:0" >$email$</span>').replace({email:subAsiiStr(f,19,"..."),unread:a.self.unread>99?'99+':a.self.unread})});
E(['othermail',"bizmail"],function(h,g){
var j=a[h].length;
if(j&&g)
{
c.push(b);
}
for(var j=a[h].length,l=0;l<j;l++)
{
var k=a[h][l];
c.push({_sType:h,sId:k.uin,email:k.email,bNeedLogin:k.type=="1"?true:false,sItemValue:['<div class="unread_num"><span class="ico_unreadnum"></span>',k.unread>99?'99+':k.unread,'</div>','<span style="overflow:hidden;">',subAsiiStr(k.email,19,"..."),'</span>'].join('')});
}
});
}
else{
c.push({sItemValue:'\u60A8\u7684\u5F53\u524D\u90AE\u7BB1\u5E10\u53F7\uFF1A'},{sItemValue:T('<strong class="ml black">$myemail$</strong>').replace({myemail:f})},b,{sItemValue:'\u62E5\u6709\u5907\u7528\u90AE\u7BB1\uFF0C\u6765\u9002\u7528\u4E8E\u4E0D\u540C\u7528\u9014\u3002'},{sItemValue:'\u5B83\u4EEC\u53EF\u4EE5\u5173\u8054\u5728\u4E00\u8D77\uFF0C'},{sItemValue:'\u65B9\u4FBF\u968F\u610F\u5207\u6362\u4E0D\u540C\u7684\u90AE\u7BB1\u3002'},{nHeight:35,sItemValue:T('<a id="bind" class="btn_gray btn_space ml" href="http://zc.qq.com" target="_blank">\u7533\u8BF7\u5907\u7528\u90AE\u7BB1</a><a href="/cgi-bin/readtemplate?t=pt_index&sid=$sid$&kvclick=readtemplate|bindother|exist|click&resp_charset=UTF8" target="mainFrame" id="bind_a" class="btn_gray">\u5173\u8054\u5DF2\u6709\u90AE\u7BB1</a>').replace({sid:getSid()})});
}
if(d)
{
d.style.visibility="visible";
d.parentNode.onclick=function(){
var g=calcPos(e.parentNode);
new QMMenu({sId:"bindaccount",sClassName:"bindacc qmpanel_shadow",nX:g[3],nY:g[2],nWidth:235,nMinWidth:160,nItemHeight:25,oItems:c,onitemclick:function(i,h){
if(h._sType=='bizmail')
{
submitSwitchForm();
}
else{
var k=function(l){
var n=getTop(),o=n.T(["https://xui.ptlogin2.qq.com/cgi-bin/xlogin?target=self&appid=522005705&daid=4","&s_url=https://mail.qq.com/cgi-bin/readtemplate%3Ft%3Dqmptlogin_succ%26check%3Dfalse","&proxy_url=https://mail.qq.com/proxy.html&need_qr=0&hide_border=1&border_radius=0&self_regurl=http://zc.qq.com/chs/index.html?type=1","&app_id=11005&t=regist&pt_feedback_link=http://support.qq.com/discuss/350_1.shtml","&hide_reg=1&hide_feedback=1&pt_lock_uin=1&default_uin=$uin$&pt_no_auth=1&enable_qlogin=0&low_login=0&style=40&no_verifyimg=1&pt_pwd=1"]).replace({uin:h.email}),m=new n.QMDialog({sId:"RelataPtlogin",sTitle:"\u5BC6\u7801\u9A8C\u8BC1",nWidth:440,nMinWidth:440,nHeight:341,sUrl:o,onshow:function(){
}});
n.ptlogin2_onResize=function(r,q){
var p=m.S("_dlgiframe_");
q=parseInt(q);
p.style.height=q+'px';
m.option("nHeight",q+36);
};
n.ptlogin2_onLoginSucc=function(p){
m.close();
showInfo("\u9A8C\u8BC1\u6210\u529F");
QMAjax.send(["/cgi-bin/uplinktime?t=login_relate_after&sid=",getSid(),"&uin=",i].join(""),{onload:function(q,r){
l&&l();
}});
};
ptloginResize();
},j=function(){
goUrlTopWin(T('/cgi-bin/login?vt=relate&uin=$uin$&old_sid=$sid$').replace({uin:i,sid:getSid()}));
};
if(h.bNeedLogin)
{
k(j);
}
else{
j();
}
}
},onload:function(){
var i=this,j=i.S("self"),h;
if(j)
{
h=j.parentNode;
setClass(h,h.className+' settingtable');
}
addEvent(i.S("manage"),'click',function(k){
goUrlMainFrm(T("/cgi-bin/setting4?fun=list&acc=1&sid=$sid$&go=bind").replace({sid:getSid()}));
i.close();
preventDefault(k);
});
addEvent(i.S("bind"),'click',function(k){
window.open("http://zc.qq.com","_blank");
getTop().confirmBox({title:"\u63D0\u793A",msg:['<div class="dialog_f_t" style="font-weight: normal;">\u8BF7\u5728\u6253\u5F00\u7684\u7A97\u53E3\u4E2D\u5B8C\u6210\u65B0\u90AE\u7BB1\u6CE8\u518C\uFF0C\u6210\u529F\u6CE8\u518C<br/>\u540E\u53EF\u4EE5\u8FDB\u884C\u5907\u7528\u90AE\u7BB1\u7684\u8BBE\u7F6E</div>'].join(""),confirmBtnTxt:'\u5DF2\u6CE8\u518C',cancelBtnTxt:'\u53D6\u6D88',onreturn:function(l){
l&&toBindAccountPage();
}});
});
addEvent(i.S("bind_a"),'click',function(k){
toBindAccountPage();
i.close();
preventDefault(k);
});
addEvent(i.S("back_to_master"),"click",function(k){
goUrlTopWin(T('/cgi-bin/login?vt=relate&uin=$uin$&old_sid=$sid$&master=true').replace({uin:a.mastermail[0].uin,sid:getSid()}));
i.close();
preventDefault(k);
});
}});
};
}
}
bindAccount._setInterval=function(){
var a=arguments.callee;
if(a._mnTimeout)
{
}
};
function bindLinkedInAccount()
{
var b=getTop(),a=arguments.callee;
a._oDialog=new b.QMDialog({sId:"id_bindLinkedIn",sTitle:"\u7ED1\u5B9ALinkedIn\u5E10\u53F7",nWidth:400,sBodyHtml:a._oTmpl.replace({}),bAnimation:false,onload:function(){
var c=this;
c.S("loConfirmBtn").onclick=function(){
c.close();
};
c.S("loCancelBtn").onclick=function(){
a._nIntervalId&&clearInterval(a._nIntervalId);
c.close();
};
}});
a.doOauth();
}
bindLinkedInAccount.unBindLinkedIn=function(){
var d=this,e=getTop(),f=e.getMainWin(),a=e.S("bindLinkedIn",f),b=e.S("bindedLinkedIn",f),c=e.S("linkedInCount",f);
e.showInfo("\u6B63\u5728\u53D6\u6D88\u5173\u8054LinkedIn\u9886\u82F1\u5E10\u53F7...",1500);
e.QMAjax.send("/cgi-bin/bind?sid="+e.getSid()+"&fun=unbindlinkedin",{method:"GET",onload:function(g){
if(g)
{
e.showInfo("\u53D6\u6D88\u5173\u8054\u6210\u529F",1000);
e.show(a,true,f);
e.setHTML(c,"");
e.show(b,false,f);
e.LogKV("getinvestigate|linkedin|unbind|success");
}
else{
e.showInfo("\u53D6\u6D88\u5173\u8054\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",1000);
e.LogKV("getinvestigate|linkedin|unbind|fail");
}
}});
};
bindLinkedInAccount._oTmpl=getTop().TE(['<div nocheck="true" id="draw" class="dialog_content" style="padding:40px 25px 26px;">','<div style="line-height: 20px; margin:0 0 10px;">',"\u8BF7\u5728\u65B0\u6253\u5F00\u7684\u7A97\u53E3\u5B8C\u6210LinkedIn\u5E10\u53F7\u7684\u7ED1\u5B9A",'</div>','</div>','<div class="dialog_operate">','<a href="javascript:;" id="loConfirmBtn" class="btn_blue">\u786E\u5B9A</a>','<a href="javascript:;" id="loCancelBtn" class="btn_gray">\u53D6\u6D88</a>','</div>']);
bindLinkedInAccount.doOauth=function(){
var a=this,b=getTop(),c="linkedInOauthCode",d=["https://www.linkedin.com/uas/oauth2/authorization?","response_type=code","&client_id=75pp0iurxmlt50","&scope=r_fullprofile%20r_emailaddress%20r_basicprofile%20r_contactinfo","&state=STATE","&redirect_uri=https%3A%2F%2Fmail.qq.com%2Fcgi-bin%2Freadtemplate%3Fcheck%3Dfalse%26t%3Dlinkedin_oauth"].join("");
a._nIntervalId=setInterval(function(){
try{
var e=b.getCookie(c);
if(e)
{
clearInterval(a._nIntervalId);
b.deleteCookie(c);
if(e=="false")
{
a.onFailed();
}
else{
a.onSuccess(e);
}
}
}
catch(f)
{
_Top.LogKV("getinvestigate|linkedin|setinterval|error");
}
},100);
if(!b.gbIsIE&&window.showModalDialog)
{
showModalDialog(d,'',"dialogwidth:750px; dialogheight:550px; center:1; scroll:1; unadorned:1;");
}
else{
window.open(d,'',"height:750; width:550; status:no; menubar:no; toolbar:no;");
}
};
bindLinkedInAccount.onSuccess=function(a){
var e=this,f=getTop(),g=f.getMainWin(),b=f.S("bindLinkedIn",g),c=f.S("bindedLinkedIn",g),d=f.S("linkedInCount",g);
var h=["grant_type=authorization_code","code="+a,"redirect_uri=https%3A%2F%2Fmail.qq.com%2Fcgi-bin%2Freadtemplate%3Fcheck%3Dfalse%26t%3Dlinkedin_oauth","client_id=75pp0iurxmlt50","client_secret=8FkgYnDUFMIKAGiA"].join("&");
var i=["url="+encodeURIComponent("https://api.linkedin.com/uas/oauth2/accessToken?"+h),"type=POST","action=proxy"].join("&");
f.showInfo("\u6B63\u5728\u5173\u8054LinkedIn\u9886\u82F1\u5E10\u53F7...",2500);
e._oDialog.close();
f.QMAjax.send("/cgi-bin/get_netres",{method:"POST",content:i,onload:function(j,m){
if(j)
{
var k=f.evalValue(m),l=k["access_token"];
e.getLinkedInProfile(l,f.getUin()+"@qq.com",function(n,o){
if(j)
{
e.saveLinkedInProfile(l,o,function(p){
if(p)
{
f.LogKV("getinvestigate|linkedin|bind|success");
f.showInfo("\u5173\u8054\u6210\u529F",1000);
f.show(b,false,g);
f.setHTML(d,o.emailAddress);
f.show(c,true,g);
e.operateLinkedInSignature(o,"addsign");
}
else{
f.showError("\u5173\u8054\u5931\u8D25,\u8BF7\u7A0D\u540E\u91CD\u8BD5",1000);
f.LogKV("getinvestigate|linkedin|bind|fail");
}
});
}
else{
f.showError("\u5173\u8054\u5931\u8D25,\u8BF7\u7A0D\u540E\u91CD\u8BD5",1000);
f.LogKV("getinvestigate|linkedin|bind|fail");
}
});
}
else{
f.showError("\u5173\u8054\u5931\u8D25,\u8BF7\u7A0D\u540E\u91CD\u8BD5",1000);
f.LogKV("getinvestigate|linkedin|bind|fail");
}
}});
};
bindLinkedInAccount.onFailed=function(){
b.LogKV("getinvestigate|linkedin|bind|fail");
var a=this,b=getTop();
b.showError("\u5173\u8054\u5931\u8D25,\u8BF7\u7A0D\u540E\u91CD\u8BD5",1000);
a._oDialog.close();
};
bindLinkedInAccount.getLinkedInProfile=function(b,a,e){
var c=getTop();
var d=["url="+encodeURIComponent("https://api.linkedin.com/v1/people/~"+":(id,formatted-name,picture-url,email-address,main-address,headline,industry,location,public-profile-url,positions:(is-current,title,company))?format=json"),"type=GET","action=proxy","header="+encodeURIComponent("Authorization: Bearer "+b)].join("&");
c.QMAjax.send("/cgi-bin/get_netres",{method:"POST",content:d,onload:function(f,k){
c.LogKV("getinvestigate|linkedin|getprofile|success");
var i=c.evalValue(k);
if(f)
{
var h={};
for(var j in i)
{
if(j=="positions")
{
for(var g=0;g<i["positions"]["_total"];g++)
{
if(i["positions"]["values"][g]["isCurrent"])
{
h["companyName"]=i["positions"]["values"][g]["company"]["name"];
h["title"]=i["positions"]["values"][g]["title"];
}
}
}
else if(i[j]=="--")
{
h[j]="";
}
else{
h[j]=i[j];
}
}
e&&e(f,{"emailAddress":h.emailAddress,"formattedName":h.formattedName,"pictureUrl":h.pictureUrl,"publicProfileUrl":h.publicProfileUrl,"title":h.title||h.headline,"companyName":h.companyName,"mainAddress":LinkedInData.location[h.location.name||""]||h.location.name||h.mainAddress,"industry":LinkedInData.industry[h.industry]});
}
else{
c.LogKV("getinvestigate|linkedin|getprofile|fail");
var i=c.evalValue(arguments[2].responseText);
if(i.status=="401"&&/expired/gi.test(i.message))
{
c.QMAjax.send("/cgi-bin/bind?sid="+c.getSid()+"&fun=setlinkedinoverdue&useremailaddr="+a,{method:"POST"});
}
e&&e(f);
}
}});
};
bindLinkedInAccount.profileJsonString=function(a){
var b=getTop().TE(['{"emailAddress":"$emailAddress$",','"formattedName":"$formattedName$",','"pictureUrl":"$pictureUrl$",','"publicProfileUrl":"$publicProfileUrl$",','"title":"$title$",','"companyName":"$companyName$",','"mainAddress":"$mainAddress$",','"industry":"$industry$"}']);
return b.replace(a);
};
bindLinkedInAccount.saveLinkedInProfile=function(b,a,d){
var c=["fun=bindlinkedin&accesstoken="+b,"linkedinaccount="+a.emailAddress,"linkedinpicurl="+(a.pictureUrl||""),"linkedinprofile="+this.profileJsonString(a)].join("&");
_oTop.QMAjax.send("/cgi-bin/bind",{method:"POST",content:c,onload:function(e){
d&&d(e);
}});
};
bindLinkedInAccount.updateLinkedInProfile=function(c,b,a,e){
var d=["fun=updatelinkedin&accesstoken="+c,"useremailaddr="+b,"linkedinaccount="+a.emailAddress,"linkedinpicurl="+(a.pictureUrl||""),"linkedinprofile="+this.profileJsonString(a)].join("&");
_oTop.QMAjax.send("/cgi-bin/bind",{method:"POST",content:d,onload:function(f){
e&&e(f);
}});
};
bindLinkedInAccount.getLinkedInSignatureHTML=function(a){
var c=getTop(),b=c.extend({},a),e=c.TE(['<div style="padding-top:10px;">','<div style="float:left; margin:0px 10px;">','<img src="$pictureUrl$" title="LinkedIn\u9886\u82F1\u5934\u50CF" style="width:70px; height:70px;border:1px solid #ccc;border-radius:50%;">','</div>','<div style="color:#7e7e7e;font-family:Microsoft Yahei;">','<div style="line-height:24px;">','<a href="$publicProfileUrl$" target="_blank" style="cursor:pointer;text-decoration:none;color:#3D5E86;">$formattedName$</a>&nbsp;&nbsp;<img style="_margin-bottom:-2px;" width="10" height="10" src="http://res.mail.qq.com/zh_CN/htmledition/images/icon_linkedin.png" title="Linkedin">','</div>','<div style="line-height:24px;">$mainAddress$$@$if($mainAddress$&&$title$)$@$ | $@$endif$@$$title$</div>','<div style="line-height:24px;">$industry$$@$if($industry$&&$companyName$)$@$ | $@$endif$@$$companyName$</div>','</div>','</div>']);
if(!b.pictureUrl)
{
var d=c.getUin()+"@qq.com";
b.pictureUrl="/cgi-bin/getqqicon?uin="+c.getUin()+"&sid="+c.getSid()+"&mode=newaddr&mailaddr="+encodeURI(d);
}
return e.replace(b);
};
bindLinkedInAccount.operateLinkedInSignature=function(a,b,c,g){
var e=getTop(),d=this;
var f=["resp_charset=UTF8","fun="+b,"t=setting1_editsign","signid="+(c||"")].join("&");
if(b=="addsign"||b=="mdfsign")
{
f=[f,"signname=LinkedIn\u9886\u82F1","signcontent__html="+encodeURIComponent(d.getLinkedInSignatureHTML(a))].join("&");
}
e.QMAjax.send("/cgi-bin/setting1",{method:"POST",content:f,onload:function(h,i){
g&&g(h);
}});
};
function securityTip()
{
var a=S("securityTip");
if(!a)
{
return;
}
addEvent(a,'mouseover',function(){
var c=getTop(),b=93;
_oConfig={win:getTopWin(),tipid:b,domid:'securityTip',click_id:'security_center',msg:'<span id="securityTipTxt" style="color:#000;">\u5E10\u53F7\u5C1A\u672A\u8BBE\u7F6E\u5BC6\u4FDD\uFF0C\u5FD8\u8BB0\u5BC6\u7801\u6216\u88AB\u76D7\u540E\u5C06\u65E0\u6CD5\u53D6\u56DE\u3002<br/>\u5EFA\u8BAE\u4F60\u5C3D\u5FEB\u524D\u5F80\u5B89\u5168\u4E2D\u5FC3\u7533\u8BF7\u5BC6\u4FDD\u3002</span>',operation:'<a id="security_center" href="http://aq.qq.com/cn2/manage/my_mb?source_id=3004" onClick="'+"getTop().LogKV({sValue : 'getinvestigate|frame_html|logotips|security_center'}); return true;"+'"'+' style="color:#3D5E86" target="_blank">\u73B0\u5728\u53BB\u7533\u8BF7</a>',closetemporary:'<span style="color:#3D5E86">\u5173\u95ED</span>',bForceShow:true,height_offset:5,tip_offset:-40};
c.waitForShowTip(_oConfig,'show',function(d){
if(d)
{
try{
if(gbIsIE&&gnIEVer==11)
{
var f=c.finds('.tipcontainer',S("securityTiprlt"))[0];
f.style.position="absolute";
f.style.width="auto";
}
}
catch(h)
{
}
c.LogKV({sValue:'getinvestigate|frame_html|logotips|security_tip'});
var g=c.finds('.contentcontainer',S("securityTiprlt"))[0];
c.addEvent(g,'mouseleave',function(e){
c.stopPropagation(e);
setTimeout(function(){
c.QMTip.close("close",b,1);
},1000);
});
}
});
});
}
function initSpreadSetAliasEmail()
{
var b=S("setAliasTip");
var c=getTop(),a=94;
if(!b)
{
return;
}
else{
show(b,true);
}
function d(e)
{
_oConfig={win:getTopWin(),tipid:a,domid:'setAliasTip',click_id:'setAlias_center',msg:'<span id="setAliasTipTxt" style="color:#000;">\u63A8\u8350\u8BBE\u7F6EQQ\u90AE\u7BB1\u82F1\u6587\u5E10\u53F7\uFF0C\u4E0D\u4EC5\u4FDD\u62A4QQ\u53F7\u7801\u5B89\u5168\uFF0C</br>\u66F4\u9002\u5408\u7528\u4E8E\u53D1\u9001\u6B63\u5F0F\u90AE\u4EF6\u3002</span>',operation:'<a id="setAlias_center" href="/cgi-bin/setting4?fun=list&acc=1&sid='+getSid()+'&kvclick=today_topright|navigate|setalias|inset#div_defaultemail" onClick="'+"getTop().LogKV({sValue : 'frame_html|navigate|setalias|kvclick'}); return true;"+'"'+' style="color:#3D5E86" target="mainFrame">\u73B0\u5728\u53BB\u8BBE\u7F6E</a>',closetemporary:'<span style="color:#3D5E86">\u5173\u95ED</span>',bForceShow:true,height_offset:5,tip_offset:-40};
c.waitForShowTip(_oConfig,'show',function(f){
if(f)
{
try{
if(gbIsIE&&gnIEVer==11)
{
var g=c.finds('.tipcontainer',S("setAliasTiprlt"))[0];
g.style.position="absolute";
g.style.width="auto";
}
}
catch(i)
{
}
c.LogKV({sValue:'getinvestigate|frame_html|logotips|setalias_tip'});
var h=c.finds('.contentcontainer',S("setAliasTiprlt"))[0];
c.addEvent(h,'mouseleave',function(j){
c.stopPropagation(j);
setTimeout(function(){
c.QMTip.close("close",a,1);
},1000);
});
e&&e();
}
});
}
addEvent(b,'mouseover',function(){
d();
});
if(c.QMLocalStorage.getUserItem("hasShowSpreadSetAliasEmailTip")!="1")
{
d(function(){
setTimeout(function(){
c.QMLocalStorage.setUserItem("hasShowSpreadSetAliasEmailTip","1");
c.QMTip.close("close",a,1);
},5000);
});
}
}
function initComposeNewFuncTips()
{
var e=getTop(),d={tipId:95,dom:S("moreupload",getMainWin()),tipsDomId:"moreupload",localItem:"hasShowScanUploadTip",desc:"\u7528\u624B\u673A\u626B\u63CF\u4E0A\u4F20\u7EB8\u8D28\u6587\u6863\uFF0C\u5373\u53EF\u6DFB\u52A0\u5230\u9644\u4EF6\u3002"},b={tipId:96,dom:S("span_online_doc",getMainWin()),tipsDomId:"span_online_doc",localItem:"hasShowOnlineDocTip",desc:"\u6DFB\u52A0\u5728\u7EBF\u6587\u6863\uFF0C\u9080\u8BF7\u597D\u53CB\u4E00\u8D77\u5728\u7EBF\u7F16\u8F91\u3002"},a,c;
if(b.dom&&e.QMLocalStorage.getUserItem(b.localItem)!="1")
{
a=b;
}
else if(d.dom&&e.QMLocalStorage.getUserItem(d.localItem)!="1")
{
a=d;
if(gbIsIE)
{
c=d.dom.parentNode;
c.style.cssText="position:static;";
}
}
else{
return;
}
if(a)
{
f();
}
function f(g)
{
_oConfig={win:getMainWin(),tipid:a.tipId,domid:a.tipsDomId,click_id:'tips_center',arrow_direction:"down",msg:'<span id="setAliasTipTxt" style="color:#000;">'+a.desc+'</span>',closetemporary:'<span style="color:#3D5E86">\u5173\u95ED</span>',bForceShow:true,height_offset:-1,tip_offset:-40};
e.waitForShowTip(_oConfig,'show',function(h){
if(h)
{
try{
if(gbIsIE&&gnIEVer==11)
{
var i=e.finds('.tipcontainer',S(a.tipsDomId+"rlt"))[0];
i.style.position="absolute";
i.style.width="auto";
}
}
catch(k)
{
}
e.LogKV({sValue:'getinvestigate|compose|logotips|'+a.tipsDomId});
var j=e.finds('.contentcontainer',S(a.tipsDomId+"rlt"))[0];
e.addEvent(j,'mouseleave',function(l){
e.stopPropagation(l);
setTimeout(function(){
e.QMTip.close("close",a.tipId,1);
c&&(c.style.position="relative");
},1000);
});
g&&g();
}
});
setTimeout(function(){
e.QMTip.close("close",a.tipId,1);
e.QMLocalStorage.setUserItem(a.localItem,"1");
c&&(c.style.position="relative");
},5000);
}
}
function initAddress(a)
{
callBack.call(window,a,[{sType:"loading",sMsg:""}]);
var d=getTop(),e=d.document,f=getPath("js"),c=0,b=function(){
if(++c>=2)
{
d.QMAddress.initAddress(a);
}
};
loadJsFile("$js_path$qmlinkman2ae63a.js",true,e,b);
loadJsFile("$js_path$qmaddress2f1957.js",true,e,b);
}
function getPhotoCGI()
{
return [getTop().QMDistributeDomain.getHost(),"/cgi-bin/upload?sid=",getTop().getSid()].join("");
}
function _getCookieMutiName()
{
var a=arguments.callee;
return (a._oCookieMutiName||(a._oCookieMutiName={"sid":1,"username":1,"foxacc":1,"m3gmsid":1,"mcookie":1,"msid":1,"defaultf":1,"qm_flag":1,"QFRIENDUNREADCNT":1,"RSSUNREADCNT":1,"rss_domain":1,"qqmail_activated":1,"qqmail_alias_default":1,"qqmail_from":1,"wimrefreshrun":1,"new":1,"qm_sk":1,"qm_ssum":1,"qq2self_sid":1,"exstype":1,"lockurl":1,"new_mail_num":1}));
}
function setUserCookie(d,f,b,e,c,a)
{
if(_getCookieMutiName()[d]==1)
{
var j=getCookie(d),h=j?j.split("|"):[],k=getUin(),l=k+"&"+f,g=true;
for(var m=0;m<h.length;m++)
{
if(h[m].match(k))
{
h[m]=l;
g=false;
}
}
j=h.join("|");
g&&(j+=(j==""?"":"|")+l);
return setCookie(d,j,b,e,c,a);
}
else {
return setCookie(d,f,b,e,c,a);
}
}
function getUserCookie(a)
{
var c=getCookie(a);
if(_getCookieMutiName()[a]!=1)
{
return c;
}
else{
var b=c?c.split("|"):[],d=getUin();
for(var e=0;e<b.length;e++)
{
if(b[e].match(d))
{
return ((b[e].split("&"))[1]||b[e]);
}
}
return c;
}
}
function deleteUserCookie(b,c,a)
{
deleteCookie(b,c,a);
}
function setUserCookieFlag(d,b,a,c)
{
return setCookieFlag(d,b,a,c);
}
function getUserCookieFlag(a)
{
return getCookieFlag(a);
}
Scale=(function(){
var c=1,b=1.10,a=1.25,l=c,m=l,k=650,r="normal",q="",e=true,p=null,o=null,n=null,i=function(t,s){
if(s>1.0)
{
if(s==1.10)
{
addClass(t,"scale1_10");
rmClass(t,"scale1_25");
}
else{
addClass(t,"scale1_25");
rmClass(t,"scale1_10");
}
}
else{
rmClass(t,"scale1_25");
rmClass(t,"scale1_10");
}
},j=function(t,s){
if(gbIsIE)
{
t.style.zoom=s;
}
else if(!gbIsFF)
{
t.style.WebkitTransformOrigin=t.style.MozTransformOrigin=t.style.OTransformOrigin=t.style.TransformOrigin="0 0";
t.style.WebkitTransform=t.style.MozTransform=t.style.OTransform=t.style.Transform="scale("+s+")";
}
i(o,s);
i(getMainWin().document.body,s);
},h=function(){
var s=p.clientHeight,t=p.clientWidth,u=S("qqbrowser_pop",getTop())?S("qqbrowser_pop",getTop()).offsetHeight:0;
m=l;
if(t<1060&&m>c)
{
m=c;
}
else if(t<1250&&m>b)
{
m=b;
}
if(s<595&&m>c)
{
m=c;
}
else if(s<640&&m>b)
{
m=b;
}
j(o,m);
S("resize").style.width=p.clientWidth/m+"px";
S("resize").style.height=p.clientHeight/m-u+"px";
if(gnIEDocTypeVer&&gnIEDocTypeVer<8&&gnIEVer<9)
{
debug('ie6 resize');
var z=S("mainFrame"),x=S("folder"),y=S("leftPanel"),w=finds(".bodybgbt",window)[0],v=getTop().document.body.offsetHeight;
if(z)
{
if(document.location.href.indexOf('t=newwin_frame')>-1)
{
z.style.height=v+'px';
}
else{
z.style.height=v-77-u+'px';
}
y&&(y.style.height=v-77-u+'px');
w&&(w.style.height=v-77-u+'px');
x&&(x.style.height=v-197-u+'px');
resizeFolderList();
}
}
},f=function(){
var t=getMainWin(),s=p.clientWidth;
if(e&&s<=k)
{
m=s/k;
if(r=="normal")
{
r="scale";
q=o.style.cssText;
S("resize").style.width="100%";
S("resize").style.height="100%";
}
if(gnIEDocTypeVer==8)
{
o.style.width=s/m/m+"px";
o.style.height=(p.clientHeight/m/m)+"px";
}
else{
o.style.width=s/m+"px";
o.style.height=p.clientHeight/m+"px";
}
j(o,m);
}
else if(r=="scale")
{
r="normal";
o.style.cssText=q;
h();
}
else{
h();
}
if(t.bSettingDisplay==1)
{
if(m==l||m<1.0)
{
t.NormalViewText&&t.NormalViewText();
}
else{
t.StressViewText&&t.StressViewText(m==c?0:(m==b?1:2));
}
}
},d=function(s){
if(gnIEDocTypeVer!=8)
{
return s;
}
return s/m;
},g=calcPos;
window.calcPos=function(s,t){
return g(s,t,d,d);
};
return {useMini:function(s){
e=!!s;
},getScale:function(){
return m;
},getSizeMode:function(){
switch(m)
{case c:
return 0;
case b:
return 1;
case a:
return 2;
}
},fixFrameCursorPos:function(s){
if(!gbIsIE)
{
return s;
}
return s/m;
},fixCursorPos:function(s,t){
return s/m;
},fixOffsetLeft:function(s){
if(!gbIsIE)
{
return s;
}
return s/m;
},fixOffsetTop:function(s){
if(!gbIsIE)
{
return s;
}
return s/m;
},fixBodyWidth:function(s){
if(gnIEDocTypeVer==8)
{
return s/m;
}
return gnIEDocTypeVer==7?s:s/m;
},fixBodyHeight:function(s){
return s/m;
},resize:function(s){
l=!s?c:(s==1?b:a);
f();
},initResizeScale:function(){
o=document.body;
p=document.documentElement;
if(gbIsIE)
{
o.style.position="relative";
if(gnIEVer==6)
{
this.getContainer().style.overflow='hidden';
}
}
else{
o.style.height="auto";
}
p.style.overflow="hidden";
addEvent(window,"resize",function(){
f();
});
},getContainer:function(){
return getTop().S("resize")||getTop().document.body;
},setBodyClass:function(s){
i(s.document.body,m);
}};
})();
function getReaderData(a)
{
if(window!=getTop())
{
getTop().getReaderData(a);
}
else{
var b=arguments.callee;
removeSelf(b.jsObj);
b.jsObj=loadJsFile(a+"&r="+Math.random(),false,document);
}
}
function getReaderDataInterval(b,a)
{
if(window!=getTop())
{
return getTop().getReaderDataInterval(b,a);
}
else{
var d=arguments.callee,e=(window.gsRssDomain||'')+"/cgi-bin/reader_data2?sid="+getSid()+"&t=rss_data.js";
if(d.nTimer)
{
clearInterval(d.nTimer);
}
function c()
{
getReaderData(e);
}
d.nTimer=setInterval(c,a||(window.gnRssInterval*1000)||(10*60*1000));
c();
}
}
function changeStatus(a)
{
var b=S("searchIcon");
b&&setClass(b,a?"ss_icon ss_fronticon ss_icon_loading":"ss_icon ss_fronticon ss_icon_search");
}
function doSearch()
{
QMPageInit._runFuncAfterCheckMainFrame(function(){
var a=S("frmSearch");
a.sender.value=a.subject.value;
a.receiver.value=a.subject.value;
a.keyword.value=a.subject.value;
a.combinetype.value="or";
submitToActionFrm(a);
});
return false;
}
function outputDataLoading(a)
{
return T(['<div class="$className$" style="$height$font-size:12px;color:gray;$padding$">\u6570\u636E\u52A0\u8F7D\u4E2D...</div>']).replace({className:a?"QMEditorBase":"",padding:a?"padding:5px;":"",height:a?"height:100%;":""});
}
function outputToolBarControlBtn(a)
{
return T(['<span class="editor_btn" style="margin-right:0;">','<a id="$id$"  style="display:none;" unselectable="on" onmousedown="return false;" class="editor_btn_text qmEditorTxtStyle">','<font class="editor_netdisk_txtmini">\u683C\u5F0F</font><span>&#8593;</span><span style="display:none;" >&#8595;</span>','</a>','</span>']).replace({id:a||"editor_toolbar_btn_container"});
}
var oUrlWhiteListXss=[/^(https|http):\/\/r\.mail\.qq\.com\/cgi-bin\/reader_share_with_mail\?([\w\W]*?)t=rss_partical_article&s=shareWithMail/i,/^(https|http):\/\/(set[\d]\.)?mail\.qq\.com\/cgi-bin\/bottle_read\?([\w\W]*?)action=save2notepad/i,/^(https|http):\/\/(set[\d]\.)?mail\.qq\.com\/cgi-bin\/bottle_opr\?([\w\W]*?)cmd=penfri&action=view/i,/^(https|http):\/\/(set[\d]\.)?mail\.qq\.com\/cgi-bin\/readtemplate\?([\w\W]*?)t=mailpromote_yahoo/i];
function isInWhiteList(a)
{
var b=false,a=htmlDecode(a);
for(var c=0,d=oUrlWhiteListXss.length;c<d;c++)
{
if(oUrlWhiteListXss[c].test(a))
{
b=true;
break;
}
;
}
return b;
}
function asyncGetComposeContent(a)
{
var b=getTop(),c=b.htmlDecode(b.trim(a));
b.goAsyncContent=false;
if(c&&isInWhiteList(a))
{
b.loadJsFile(c,false,b.document,function(){
if(!b.goAsyncContent||!b.goAsyncContent.content)
{
b.goAsyncContent={};
b.showError("\u90AE\u4EF6\u5185\u5BB9\u83B7\u53D6\u5931\u8D25");
}
});
var e=/^(?:https|http):\/\/(?:([\w]+)\.)?mail\.qq\.com(\/)/i.test(c)&&RegExp.$1||"mail";
var d=/\/cgi-bin\/([^?]*)?\?/i.test(c)&&RegExp.$1||"nonecgi";
if(e=="set1"||e=="set2"||e=="set3")
{
e="mail";
}
b.LogKV("getcontenturl|total");
b.LogKV("getcontenturl|domain|"+e+"|"+d);
}
}
function initSendTimeInput(a,c,b)
{
var l=new Date();
var n=b||getTop().getMainWin();
var h=getTop().trim(a.replace(/\D/ig," ").replace(/ +/ig," ")).split(" ");
var g=l.getFullYear();
if(h[0]=="")
{
var h=getTop().trim(a).split("\u6708");
var k={'\u6B63':1,'\u4E00':1,'\u4E8C':2,'\u4E09':3,'\u56DB':4,'\u4E94':5,'\u516D':6,'\u4E03':7,'\u516B':8,'\u4E5D':9,'\u5341':10,'\u5341\u4E00':11,'\u814A':12,'\u521D':0,'\u5EFF':20};
var f=k[h[0]];
var d=k[h[1].charAt(1)];
if(d==10)
{
var e={'\u521D':10,'\u4E8C':20,'\u5EFF':20,'\u4E09':30}[h[1].charAt(0)];
}
else{
var e=k[h[1].charAt(0)]+d;
}
for(var o=g-1;o<g+1;o++)
{
var j=getTop().Lunar||Lunar,m=j.lunarDateToSolar(o,f,e,j.isChangeToLeapMonth(o,f));
if(m.valueOf()+24*60*60*1000>=l.valueOf())
{
g=m.getFullYear();
h[0]=m.getMonth()+1;
h[1]=m.getDate();
break;
}
}
}
else{
if(h[0]<l.getMonth()+1)
{
g++;
}
}
n.document.write(getTop().T(['<textarea style="display:none;" name="sendtimetip" disabled>','\u53D1\u4FE1\u65F6\u95F4\u5DF2\u8BBE\u5728<b class="grn">%nick%</b>\u597D\u53CB\u751F\u65E5\uFF0C\u60A8\u53EF\u4EE5\u81EA\u884C\u4FEE\u6539\uFF1A','</textarea>','<input type="hidden" name="sendtimeyear" value="%year%" />','<input type="hidden" name="sendtimemonth" value="%month%" />','<input type="hidden" name="sendtimeday" value="%day%" />','<input type="hidden" name="sendtimehour" value="0" />','<input type="hidden" name="sendtimemin" value="0" />'],"%").replace({nick:getTop().htmlEncode(c),year:g,month:h[0],day:h[1]}));
}
function audioPlay(a)
{
var b=getTop();
if(!a.container)
{
a.container=S('mp3player_container',b.getMainWin());
}
if(a.global&&!a.globalcontainer)
{
a.globalcontainer=S('gplayer_container',b);
if(!a.globalcontainer)
{
a.global=false;
}
}
if(!b.QMPlayer)
{
loadJsFileToTop(["$js_path$qmplayer/player32be95.js"]);
}
waitFor(function(){
return !!b.QMPlayer;
},function(c){
if(c)
{
var g="gplayer_kernel",h=a.id||("qmplayer_unique"+unikey());
function d()
{
var j=g+"_dom";
if(b.S(j))
{
return b.S(j);
}
else{
var i=b.document.createElement("div");
i.id=j;
i.style.cssText="position:absolute;left:-100000px;";
b.document.body.appendChild(i);
return i;
}
}
;if(!a.msg)
{
a.msg="QQ\u90AE\u7BB1\u64AD\u653E\u5668";
}
if(a.container&&a.container.getElementsByTagName("div").length==0)
{
a.container.innerHTML="";
}
if(a.global)
{
var e=QMPlayer.initKernel({sId:g,oContainer:d()}),f=QMPlayer.initSkin({sId:g,sSkin:"Global",oContainer:a.globalcontainer});
b.QMPlayer.init({oSkin:f,oKernel:e});
}
b.QMPlayer.delUIById(h);
b.QMPlayer.init({oSkin:QMPlayer.initSkin({sId:h,oContainer:a.container,sSkin:a.skin||"Mini"}),oKernel:a.global?e.setInfo(a):QMPlayer.initKernel({sId:h,oContainer:a.container,oInfo:a})});
}
else if(a.container)
{
a.container.innerHTML="\u64AD\u653E\u5668\u52A0\u8F7D\u5931\u8D25";
}
});
}
function audioStop()
{
var a=getTop().QMPlayer;
a&&a.stop();
}
function audioPause()
{
var a=getTop().QMPlayer;
a&&a.pause();
}
function setPlayer(a)
{
var c=getTop();
function b(d)
{
if(!c.QMPlayer)
{
setTimeout(function(){
b(d);
},200);
return false;
}
var f="qqmailMediaPlayer"+(d.id||""),e=d.win||window;
if(!e||e[f])
{
return false;
}
if(!d.container&&!(d.container=S("mp3player_container",e)))
{
return false;
}
return (e[f]=new c.QMPlayer()).setup(d);
}
if(!c.QMPlayer)
{
loadJsFile("$js_path$qmplayer24e6ae.js",true,c.document);
}
return b(a);
}
function playUrl(a)
{
var b=(a.win||window)["qqmailMediaPlayer"+(a.id||"")];
if(!b)
{
setPlayer(a);
}
else{
b.openUrl(a.url,a.dispInfo);
}
}
function stopUrl(a)
{
if(!a)
{
a={};
}
try{
(a.win||window)["qqmailMediaPlayer"+(a.id||"")].stop();
}
catch(b)
{
}
}
function searchMusic(c,b,a)
{
if(window!=getTop())
{
return getTop().searchMusic(c,b,a);
}
c=c||"";
b=b||"";
var e=arguments.callee,f=[c,b].join("@");
var d=function(g){
if(g.indexOf("qqmusic.qq.com")==-1)
{
return g;
}
else{
if(g.indexOf(".wma")!=-1)
{
var m="stream",r=g.substring(g.indexOf(m)+m.length),q=r.substring(0,r.indexOf(".")),l=g.substring(0,g.indexOf(".")),n=g.substring(g.indexOf(".")),j=n.split("/"),k=j[0],o=j[1],i=parseInt(q)+10;
var h=parseFloat(o.substring(0,o.indexOf("."))),p=h-12000000+30000000;
return l.substring(0,l.indexOf(m)+m.length)+i+k+"/"+p+".mp3";
}
else{
return g;
}
}
};
e.fCallBack=function(g){
var m,p="",n=[];
if(!g.contentWindow.gMusicInfo||!(m=g.contentWindow.gMusicInfo.list))
{
return a(n);
}
for(var q=0,h=m.length;q<h;q++)
{
var l={song:m[q].songname.replace(/<\/?strong>/gi,"").replace(/&lt;\/?strong&gt;/gi,""),singer:m[q].singername.replace(/<\/?strong>/gi,"").replace(/&lt;\/?strong&gt;/gi,"")},o=htmlDecode(m[q].songurl).replace(/\|/g,"").split(";");
for(var r=0,k=o.length;r<k;r+=2)
{
if(o[r])
{
l.url=d(o[r].replace(/^(FI|SI|AN|QQ)/,""));
n.push(l);
break;
}
}
}
e._oDataMap[f]=n;
a(n);
};
if(!c&&!b)
{
return a([]);
}
if(!e._oDataMap)
{
e._oDataMap={};
}
if(e._oDataMap[f])
{
return a(e._oDataMap[f]);
}
e._oDataDomObj=createBlankIframe(getTop(),{id:"getMusicUrlFromSoSo",style:"display:none;",virtual:false,header:T(['<meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>','<script>','function searchJsonCallback(a)','{','window.gMusicInfo = a;','}','<\/script>','<script src="$domain$/fcgi-bin/fcg_search_xmldata.q?w=$song$%20$singer$&source=3&r=$rand$&ie=utf-8"><\/script>']).replace({domain:(location.protocol=="https:"?'https://qqshow.mail.qq.com':'http://cgi.music.soso.com'),song:encodeURIComponent(c),singer:encodeURIComponent(b),rand:Math.random()}),destroy:true,onload:function(g){
searchMusic.fCallBack(this);
}});
}
function getMusicUrl(c,b,a)
{
searchMusic(c,b,function(d){
if(d.length>0)
{
var g=0,e=/\.mp3$/i;
for(var f=0;(gbIsMac||gbIsLinux)&&f<d.length;f++)
{
if(e.test(d[f].url))
{
g=f;
break;
}
}
a(d[g].song,d[g].singer,d[g].url,d);
}
else{
a(c,b,"",d);
}
},1);
}
function startWebpush(a)
{
var b=getTop();
b.loadCssFile("$css_path$webpushtip327bfb.css",true);
b.loadJsFile("$js_path$qmwebpushtip251e7c.js",true,b.document,function(){
b.QMWebpushTip.open(a);
});
b.loadJsFile("$js_path$qmwebpush24e6ae.js",true,b.document);
}
function closeWebpush(a)
{
getTop().QMWebpushTip&&getTop().QMWebpushTip.close(a,true);
}
function ftSendStatic(b,a)
{
if(b)
{
ossLog("realtime","all",T('stat=exskick&sid=$sid$&uin=$uin$&log=$code$').replace({uin:a||getTop().g_uin,sid:getSid(),code:b}));
}
}
function twoDCodeImgUrl(a)
{
var b=getUrlParams(a||location);
return TE(['/cgi-bin/generate_twodimcode?out=250&sid=$@$eval getSid()$@$','$@$if($mailid$)$@$','&filename=$@$eval escape($filename$)$@$&mailid=$mailid$','$@$else if($att$)$@$','&att=$att$&action=groupattach','$@$else if($k$)$@$','&k=$k$&code=$code$&action=bigattach','$@$endif$@$']).replace(b);
}
function showTwoDCodeImgMenu(b,a,d,c)
{
var k=this,i=b.document,j=calcPos(a),h=j[2]-40,f=0,g=bodyScroll(i,"scrollTop"),e=bodyScroll(i,"clientHeight");
if((f=h+320-g-e)>0)
{
h-=(f+10);
}
new QMMenu({oEmbedWin:b,sId:"scanImg",bAutoClose:false,sWidthDetect:"float",nWidth:"auto",nX:j[3]+25,nY:h,onshow:function(){
if(gnIEVer==6)
{
this.S("twodcode").src=this.S("twodcode").src;
}
},oItems:[{bDisSelect:true,sStyle:"padding:0;",nHeight:"auto",sItemValue:T(['<div style="width:300px;height:310px;padding-top:10px;">','<div style="text-align:center;">','<img id="twodcode" style="width:250px;height:250px;" src="$src$"/>','</div>','<div style="margin-top:-5px;">','<p style="margin:0;text-align:center;padding:5px 0;">\u626B\u63CF\u4E8C\u7EF4\u7801\uFF0C\u5C06\u9644\u4EF6\u4E0B\u8F7D\u5230\u624B\u673A\u3002</p>','<p style="margin:0;text-align:center;padding:5px 0;">\uFF08\u4E8C\u7EF4\u7801\u6709\u6548\u671F\u4E3A5\u5206\u949F\uFF09</p>','</div>','</div>']).replace({filename:d,src:twoDCodeImgUrl(c)})}]});
}
function sendGift(b,a)
{
var d=["logistics","invoice"],c=true;
for(var e in d)
{
if(b==d[e])
{
c=false;
break;
}
}
c&&showInfo("\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");
getTop().loadJsFile("$js_path$gift/app24e6b9.js",true,getTop().document,function(){
hiddenMsg();
if(b.indexOf("msg:")==0)
{
QMGiftApp.messaging(b,a);
}
else{
QMGiftApp[b](a);
}
});
}
function beginStatTime(a)
{
var b=parseInt(a.location.hash.split("stattime=").pop());
if(!isNaN(b)&&b.toString().length==13&&b>(getTop().gnStatTimeStamp||0))
{
a.gnBeginTime=getTop().gnStatTimeStamp=b;
a.gnStatTimeStart=now();
}
}
function endStatTime(b,a)
{
var c=b.gnBeginTime,e=b.gnStatTimeStart,d=now();
if(!isNaN(e)&&!isNaN(c))
{
addEvent(b,"load",function(){
var f=now();
ossLog("delay","sample",T(['stat=cgipagespeed&type=$type$&t1=$t1$&t2=$t2$&t3=$t3$','&rcgi=$appname$&rt=$t$&rs=$s$&allt=$allt$&flowid=$wm_flowid$&folderid=$folderid$&mailid=$mailid$']).replace(extend(a,{t1:e-c,t2:d-e,t3:f-d,allt:[c,e,d,f].join("|")})));
});
}
}
function ossLog()
{
var a=getTop().ossLog;
return a._ossLog.apply(a,arguments);
}
function ossLogForSetFrame(c,a,b)
{
var d=getTop().name,g,f;
a=(getTop()==ossLogForSetFrame.getTop());
try{
g=ossLogForSetFrame.getTop().location.href;
}
catch(h)
{
g="getUrlError: "+h.message;
}
try{
f=ossLogForSetFrame.getTop().document.domain;
}
catch(h)
{
f="getTopDomainError: "+h.message;
}
if(d&&d!=="_self"&&d!=="_blank")
{
ossLog("realtime","all",["stat=setframe&url=",encodeURIComponent(c),"&topname=",d,":",getTop().document.domain,"&newtopname=",ossLogForSetFrame.getTop().name,":",f,"&topurl=",encodeURIComponent(g),"&bIsEqualTop=eq_",a,"&newGetTopException=er_",b,":",getTop._moExp||"","&browser=",ossLogForSetFrame.getBrowserForSetFrame()].join(""));
}
}
ossLogForSetFrame._oBrowserList=["IE","FF","Safari","Chrome","Opera","QBIE","TT","NS"];
ossLogForSetFrame.getBrowserForSetFrame=function(){
var a=getTop();
if(ossLogForSetFrame._sBrowser)
{
return ossLogForSetFrame._sBrowser;
}
ossLogForSetFrame._sBrowser='other';
for(var b=0;b<ossLogForSetFrame._oBrowserList.length;b++)
{
if(a["gbIs"+ossLogForSetFrame._oBrowserList[b]])
{
ossLogForSetFrame._sBrowser=ossLogForSetFrame._oBrowserList[b];
ossLogForSetFrame._sBrowser==="IE"&&gnIEVer&&(ossLogForSetFrame._sBrowser+=gnIEVer);
ossLogForSetFrame._sBrowser==="Chrome"&&gsChromeVer&&(ossLogForSetFrame._sBrowser+=gsChromeVer);
break;
}
}
return ossLogForSetFrame._sBrowser;
};
ossLogForSetFrame.getTop=function(){
var a=window,b=parent;
ossLogForSetFrame.getTopException=false;
try{
while(a!=b)
{
a=b;
b=b.parent;
}
}
catch(c)
{
ossLogForSetFrame.getTopException=true;
}
return a;
};
ossLog._ossLog=function(a,c,b){
var f=this,h=a||"realtime",g=f._pasteLog(b),e=f._oLogList||(f._oLogList=[]),d=typeof c=="number"?c:{all:1}[c||"all"]||0.1;
if(h=="realtime")
{
f._isSample(d)&&f._doReport(g);
}
else{
f._isSample(d)&&e.push(["delayurl","=",encodeURIComponent(g)].join(""));
e.length>=1000?f._doReport():(!f._nTimer&&e.length>0&&(f._nTimer=setTimeout(f._doReport,5*1000)));
}
};
ossLog._doReport=function(a){
var e=ossLog,d=e._oLogList;
if(a||d.length>0)
{
var f=getTop(),g=osslogDomain(),c=S("osslog_iframe",f),b=function(h){
QMAjax.send(g+"/cgi-bin/getinvestigate",{method:"POST",timeout:500,content:T('sid=$sid$&$rl$&$ls$').replace({sid:getSid(),rl:a,ls:d.join("&")})},h&&new QMAjax(null,null,0,h.contentWindow.xmlHttp()));
};
if(c||!g)
{
waitFor(function(){
return !c||!!c.contentWindow.xmlHttp;
},function(h){
if(h)
{
b(c);
}
});
d.length=0;
}
else{
createIframe(f,g+"/zh_CN/htmledition/ajax_proxy.html?mail.qq.com&v=130132",{id:"osslog_iframe",onload:function(){
try{
b(this);
}
finally 
{
d.length=0;
}
}});
}
e._nTimer&&clearTimeout(e._nTimer);
e._nTimer=null;
}
};
ossLog._isSample=function(a){
return (this._nTimeStamp||(this._nTimeStamp=now()))%100<100*a;
};
ossLog._pasteLog=function(a){
var b=[];
typeof a=="string"?b.push("&",a):E(a,function(d,c){
b.push("&",c,"=",encodeURIComponent(d));
});
return b.shift()&&b.join("");
};
function LogKV(a)
{
if(!a)
{
debug('LogKV error');
return;
}
if(typeof (a)=='string')
{
a={sValue:a};
}
var b=trim(a.sValue||'').toLowerCase();
if(!b)
{
debug('LogKV error');
return;
}
ossLog(a.sSendMode||"delay",a.vSample||"all","stat=kvlog&key="+encodeURI(b));
}
function ossLogCustom(a,d,b,c)
{
ossLog(a,d,['stat=custom&type=',b,'&info=',ossLogCustom._pasteLog(c)].join(''));
}
ossLogCustom._pasteLog=function(a){
if(typeof (a)!="function"&&typeof (a)!="object")
{
return encodeURIComponent(ossLogCustom._dealEachParam(a));
}
var b=[];
if(a instanceof Array)
{
E(a,function(c){
b.push(ossLogCustom._dealEachParam(c));
});
}
else{
E(a,function(d,c){
if(d!==null&&d!==undefined)
{
b.push(c+'='+ossLogCustom._dealEachParam(d));
}
});
}
return encodeURIComponent(b.join(","));
};
ossLogCustom._dealEachParam=function(a){
if(typeof (a)=='number')
{
return a;
}
if(typeof (a)=='boolean')
{
return a?1:0;
}
return ''+a;
};
function isSpreadAddr()
{
if(typeof gbNewAddrBook!="undefined")
{
return gbNewAddrBook==true;
}
else{
return false;
}
}
var AD={_msTimeout:"",_ADLocs:[],_oADData:{},init:function(a){
var b=this;
a["AD_callback"]=function(c){
if(b._msTimeout!="timeout")
{
b._msTimeout="ok";
b._oADData={};
for(var m=0;m<c.length;m++)
{
var f=c&&c[m]&&c[m][0];
try{
var k=f.loc,d=f.oid,h=f.fodder,n={loc:k,oid:d,hit:0},g=T("stat=log_ad_show&loc=$loc$&oid=$oid$&hit=$hit$&resource_url=$resource_url$&link_to=$link_to$&loc=ad_today,$loc$,$oid$,$hit$");
if(h[0]&&k&&!(d=="1"||d=="100"))
{
var j=h[0].link_to;
if(location.protocol=="https:")
{
h[0].link_to=j.replace(/^http:\/\//,"https://");
}
b._oADData[k]=extend(h[0],{cid:f.cid,loc:f.loc,oid:f.oid,monitor_url:f.monitor_url});
n=extend(n,{hit:1,link_to:encodeURIComponent(h[0].link_to),resource_url:encodeURIComponent(h[0].resource_url)});
ossLog("delay","all","kw="+k);
}
ossLog("delay","all","kw="+k+"_total");
b._postOssLog(n);
}
catch(l)
{
}
}
E(b._ADLocs,function(e){
var o=b._getADDomByloc(a,e),i=attr(o,"callback");
if(b._oADData[e])
{
b._defAction(a,b._oADData[k],k);
}
else{
b._handleDefault(a,e);
}
b._fADCallback.call(b,{oWin:a,adShow:b._oADData[e]?true:false,adLoc:e,fCallback:i});
});
}
};
b._msTimeout="";
this._postADCode(a);
this._setTodayBarNormal_Click(a);
},postADlog:function(c,a,d,b){
if(c=="flash")
{
var e=getEventTarget(b);
if(e.tagName=="DIV")
{
ossLog("realtime","all",T('stat=log_ad_click&pos=$pos$').replace({pos:a}));
d&&window.open(d);
}
}
else{
ossLog("realtime","all",T('stat=log_ad_click&pos=$pos$').replace({pos:a}));
}
},setAdFlag:function(a){
setCookieFlag("CCSHOW",5,getTop().document.body.clientWidth<1144||this._hasScrollX(a)?0:1);
},adjustADDisp:function(a){
var f=a||getTop().getMainWin(),b=S("qm_con_body",f),c=S("qqmail_readmail_AD_container",f),d=S("mainbody",f),e=S("plp_ad_container",f);
rdVer("BaseVer",1);
if(e)
{
if(this._getADFlag()=="0"&&isShow(e))
{
rmClass(d,"mainbody_ad");
e&&(show(e,0));
}
else if(this._getADFlag()=="1"&&!isShow(e))
{
addClass(d,"mainbody_ad");
e&&(show(e,1));
}
}
if(this._getADFlag()=="0"&&isShow(c))
{
rmClass(b,"qm_ad_con_body");
c&&(show(c,0));
}
else if(this._getADFlag()=="1")
{
addClass(c,"hidden");
addClass(b,"qm_ad_con_body");
c&&(show(c,1));
if(!this._hasScrollX(a))
{
if(attr(c,"AD")=="1")
{
rmClass(c,"hidden");
c&&(show(c,1));
}
}
else{
c&&(show(c,0));
rmClass(b,"qm_ad_con_body");
rmClass(c,"hidden");
}
}
},isADUser:function(a){
var b=S("plp_ad_container",getMainWin())!=null;
return b;
},handleImgError:function(b,a){
if(this._oBlocked[b]||(b=="qqmail_PLP_skyscraper"&&this._getADFlag()=="0"))
{
return;
}
this._oBlocked[b]=true;
ossLog("realtime",1,T("stat=log_ad_blocked&adloc=$loc$&ad=gp").replace({loc:b}));
this._handleDefault(a,b);
},handleImgSucc:function(b,a){
var c={"qqmail_PLP_skyscraper":1,"qqmail_HY_Width":0.02}[b],d=S("ad_pingurl",a);
d.src=attr(d,"link");
ossLog("realtime",c,T("stat=log_ad_exposure&adloc=$loc$&ad=gp").replace({loc:b}));
},_isScroll:function(a){
try{
if(!a)
{
a=getMainWin();
}
var c,g=false,h=false;
if(a.window)
{
c=[a.document.documentElement,a.document.body];
}
else if(a.nodeType==9)
{
c=[a.documentElement,a.body];
}
else{
c=[a];
}
for(var d=0;d<c.length;d++)
{
var f=c[d];
var j=f.scrollLeft;
f.scrollLeft+=(j>0)?-1:1;
f.scrollLeft!==j&&(g=g||true);
f.scrollLeft=j;
var k=f.scrollTop;
f.scrollTop+=(k>0)?-1:1;
f.scrollTop!==k&&(h=h||true);
f.scrollTop=k;
}
return {scrollX:g,scrollY:h};
}
catch(b)
{
return {scrollX:false,scrollY:false};
}
},_hasScrollX:function(a){
return this._isScroll(S('floatread_inner_scroll',a)||a).scrollX;
},_getADFlag:function(){
return getCookieFlag("CCSHOW")[5];
},_getHttpsUrl:function(a){
var e=strReplace(a,"http://",""),d=e.indexOf("/"),b=e.substr(0,d),c="https://stockweb.mail.qq.com";
return strReplace(a,"http://"+b,c)+"?pdomain="+b;
},_getADTmpl:function(a){
var b=TE(['<img id="ad_pingurl" link="$pingurl$" style="position:absolute;z-index:-1;"/>','$@$if($monitor_url$)$@$','<span style="background:url($monitor_url$);"></span>','$@$endif$@$','$@$if($mail_monitor_url$)$@$','<span style="background:url($mail_monitor_url$);"></span>','$@$endif$@$','<a id="$id$" href="$link_to$" target="_blank"  onclick="getTop().AD.postADlog(\'img\',\'$pos$\')" ','style="height:83px;overflow:hidden;display:block;margin-bottom:0px;">','<img src="$resource_url$" onload="getTop().AD.handleImgSucc(\'$loc$\', window)" onerror="getTop().AD.handleImgError(\'$loc$\', window)"/>','</a>','<div style="position:absolute;bottom:0;left:0;height:16px;line-height:16px;padding:0 3px;color:#fff;font-size:12px;font-family:simsun;background:rgba(0,0,0,0.5);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);">','\u5E7F\u544A</div>']),c=TE(['<a href="$link_to$" target="_blank" onclick="getTop().AD.postADlog(\'img\',\'$pos$\')">','<img id="ad_pingurl" link="$pingurl$" style="position:absolute;z-index:-1;"/>','<img id="$id$" src="$resource_url$" width="$width$" height="$height$" onload="getTop().AD.handleImgSucc(\'$loc$\', window)" onerror="getTop().AD.handleImgError(\'$loc$\', window)"/>','$@$if($monitor_url$)$@$','<span style="background:url($monitor_url$);"></span>','$@$endif$@$','$@$if($mail_monitor_url$)$@$','<span style="background:url($mail_monitor_url$);"></span>','$@$endif$@$','</a>','<style>','.ad_btn_close{position:absolute; top:5px; right:5px; line-height:0; text-decoration:none; background:#aaa; width:12px; height:12px;  border:1px solid #999;}','.ad_btn_close:hover{border-color:#888;background-color:#999;}','</style>','$@$if($bCloseBtn$)$@$',' <a class="ad_btn_close" onclick="closeAD(\'$pos$\')"><img src="$img_path$ico_closetip.gif"></a>','$@$endif$@$','<div style="position:absolute;bottom:0;left:0;height:16px;line-height:16px;padding:0 3px;color:#fff;font-size:12px;font-family:simsun;background:rgba(0,0,0,0.5);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);">','\u5E7F\u544A</div>']);
if(a==1)
{
return b;
}
else if(a==2)
{
return c;
}
else if(a==3)
{
return _sTextADTmlp;
}
},_defAction:function(c,b,d,a){
try{
var m=this,l=this._getADDomByloc(c,d),n=d+"_showed",h=location.protocol=="https:",o=T("//p.l.qq.com/p?oid=$oid$&cid=$cid$&loc=$loc$"),g=attr(l,"bgimg")=="1"?true:false,f=attr(l,"closebtn")=="1"?true:false,i=attr(l,"pos");
if(l&&b.resource_url)
{
var k=l.parentNode;
h&&(b.resource_url=b.resource_url.replace(/^http/,'https')),_sADHtml=this._getADTmpl(g?1:2),_oTodayBar=S("todaybarTitle",c);
if(_oTodayBar)
{
show(_oTodayBar,1);
setHTML(_oTodayBar,"\u5546\u4E1A\u8D44\u8BAF");
}
show(k,1);
insertHTML(k,"beforeEnd",_sADHtml.replace(extend(b,{id:n,loc:d,img_path:getPath("image"),bIsIE:gbIsIE,bCloseBtn:f,pingurl:o.replace(b),pos:i})));
debug(d);
this._oBlocked=this._oBlocked||{};
this._oBlocked[d]=false;
var j=0.02;
if(d=="qqmail_PLP_skyscraper")
{
j=1;
}
setTimeout(function(){
m._checkADShow(c,n,d,function(){
},function(){
this.handleImgError(d,c);
});
},1000);
}
else{
this._handleDefault(c,d);
}
}
catch(p)
{
this._handleDefault(c,d);
}
},_checkADShow:function(d,e,f,c,b){
var a=S(e,d);
if(a&&a.offsetHeight>0)
{
c&&c.call(this);
}
else{
b&&b.call(this);
}
},_getADDomByloc:function(a,c,b){
var d=null,e=b||"qqmailad";
E(GelTags(e,a.document),function(f){
_sADLoc=attr(f,"loc")||"";
if(_sADLoc==c)
{
d=f;
}
});
return d;
},_fADCallback:function(a){
var c=a&&a.oWin,b=a&&a.fCallback;
if(typeof c[b]=="function")
{
c[b](a);
}
},_postErrLog:function(a){
var b=T("stat=log_ad_show&loc=$loc$&err=$err$");
ossLog("realtime","all",b.replace(a));
},_postOssLog:function(a){
var b=T("stat=log_ad_show&loc=$loc$&oid=$oid$&hit=$hit$&resource_url=$resource_url$&link_to=$link_to$&loc=ad_today,$loc$,$oid$,$hit$");
ossLog("realtime",0.02,b.replace(a));
},_postADCode:function(c,a){
var e=[],h="",g=this,d=location.protocol=="https:",f=d?T("https://stockweb.mail.qq.com/lview?c=www&loc=$loc$&callback=AD_callback&rot=1&pdomain=l.qq.com"):T("http://l.qq.com/lview?c=www&loc=$loc$&callback=AD_callback&rot=1");
this._ADLocs=[];
E(GelTags("qqmailad",c.document),function(i){
h=attr(i,"loc")||"";
if(a)
{
attr(i,"disp")=="0"&&h&&e.push(h)&&attr(i,"disp","1");
}
else{
attr(i,"disp")!="0"&&h&&e.push(h);
}
g._ADLocs.push(h);
});
h=e.join(",");
if(h)
{
setTimeout(function(){
if(g._msTimeout!="ok")
{
g._msTimeout="timeout";
g._handleDefaultAllLoc(c);
}
},2.5*1000);
var b=loadJsFile(f.replace({loc:h}),false,c.document);
}
},_handleDefaultAllLoc:function(a){
var b=this;
E(b._ADLocs,function(c){
b._handleDefault(a,c);
});
},_handleDefault:function(a,b){
try{
if(b=="qqmail_PLP_skyscraper"&&this._getADFlag()=="0")
{
return;
}
var d=this._getADDomByloc(a,b),h=d&&attr(d,"ADDefault")||"",g=S("todaybarTitle",a);
if(isShow(S(h,a)))
{
return;
}
if(h!="")
{
var f=S(h,a);
d&&d.parentNode&&show(d.parentNode,0);
show(f,1);
}
if(g&&!isShow(g))
{
show(g,1);
}
this._postErrLog({loc:b,err:"timeout"});
var c=0.02;
if(b=="qqmail_PLP_skyscraper")
{
c=1;
}
ossLog("realtime",c,T("stat=log_ad_exposure&adloc=$loc$&ad=default").replace({loc:b}));
this._msTimeout="timeout";
}
catch(i)
{
debug("handle Def fail err="+i.message);
}
},_setTodayBarNormal_Click:function(a){
var b=S("todaybarnormallink",a);
if(b)
{
addEvent(b,"click",function(){
ossLog("realtime","all","stat=log_todaybar_click");
if(attr(b,"kvkey")!="")
{
LogKV({sValue:attr(b,"kvkey")});
}
});
}
}};
var CommVer={_moCacheMap:{},_init:function(a){
var e=this,c=function(){
if(!e._moCacheMap[a])
{
e._moCacheMap[a]=new QMCache({appName:a});
}
},b=function(){
if(typeof (e._mnBaseVer)!="number")
{
var j=new Date(),g=5,i=Math.ceil(+new Date()/100)%Math.pow(10,g),h=Math.random()+"",f=function(k){
var l=k+"";
if(l.length<g)
{
return [new Array(g+1-l.length).join("0"),l].join("");
}
return l;
};
e._mnBaseVer=+[f(i),h.substring(h.length-1)].join("");
}
},d=function(){
if(e._moCacheMap[a]&&typeof (e._moCacheMap[a]._mnGerneralVer)!="number")
{
e._moCacheMap[a]._mnGerneralVer=0;
}
};
c();
b();
d();
},_getBaseVer:function(){
return this._mnBaseVer;
},_getGeneralVer:function(a){
return this._moCacheMap[a]._mnGerneralVer;
},_getSubVer:function(a,b){
return this._moCacheMap[a].getData(b)||0;
},get:function(a,b){
this._init(a);
return b?[this._getBaseVer(),this._getGeneralVer(a),this._getSubVer(a,b)].join("."):[this._getBaseVer(),this._getGeneralVer(a)].join(".");
},updateSubVer:function(a,b){
this._init(a);
if(typeof (b)!="undefined")
{
var d=this._moCacheMap[a],c=d.getData(b)||0;
c=c+1;
d.setData(b,c);
return c;
}
return 0;
},updateGeneralVer:function(a){
this._init(a);
this._moCacheMap[a]._mnGerneralVer++;
return this._moCacheMap[a]._mnGerneralVer;
},update:function(a,b){
this._init(a);
var c=this._getBaseVer(),d=this.updateGeneralVer(a),e=this.updateSubVer(a,b);
return b?[c,d,e].join("."):[c,d].join(".");
}};
function initAD(a)
{
AD.init(a);
}
function LogPageSpeed(a)
{
if(!a)
{
return;
}
setTimeout(function(){
var c=window.webkitPerformance||window.performance,d=c&&c.timing,f=["navigationStart","unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"];
if(d)
{
var b=[],e=d[f[0]],g;
if(e<1349020800000)
{
debug('LogPageSpeed navigationStart error: '+e+' date:'+(new Date(e)));
LogKV('log_page_speed|err|navigation_start');
return;
}
for(var h=1,j=f.length;h<j;h++)
{
g=(d[f[h]]||0)-e;
g>=0&&b.push(h+'='+g);
}
(new Image()).src=window.location.protocol+'//rl.mail.qq.com/cgi-bin/speed_report?stat='+a+'&'+b.join('&')+'&_='+(+new Date());
}
},0);
}
function speedLog(b,a,c)
{
if(!a)
{
return;
}
var d;
if(isNaN(a))
{
c=a;
d=b;
}
else{
d=b+'='+a;
}
setTimeout(function(){
(new Image(1,1)).src=T([window.location.protocol,"//rl.mail.qq.com/cgi-bin/speed_report?stat=$stat$&$data$&r=$r$"]).replace({stat:c||'comm',data:d,r:Math.random()});
});
}
function onlineDocMsg(c,e,d)
{
var a={HAS_DELETED:"1",SESSTION_TIMEOUT:"2",ONLY_READ:"3",NO_AUTH:"4"};
if(c&&e)
{
switch(e)
{case a.HAS_DELETED:
b(function(){
_oTop.close();
},function(f,g){
f.hide();
_oTop.removeSelf(_oTop.S(c,g));
},function(g,f){
_oTop.removeSelf(_oTop.finds("li.ft_l_listItem[fid='"+c+"']",f)[0]);
g.viewDetail({},true);
});
break;
case a.SESSTION_TIMEOUT:
_oTop.goUrl(_oTop,[_oTop.location.protocol,"//",_oTop.location.hostname,"/cgi-bin/loginpage"].join(""));
break;
case a.ONLY_READ:
break;
case a.NO_AUTH:
b(function(){
_oTop.close();
},function(f,g){
f.hide();
},function(f){
f.tabChange();
f.viewDetail({},true);
});
break;
default:
break;
}
}
function b(h,f,g)
{
var j=_oTop.getMainWin(),i,k=j.OnlineDoc;
if(_oTop.bnewwin)
{
h();
}
else if(i=_oTop.QMDialog.get("editOnlineDocInComposePage"))
{
f(i,j);
}
else if(k)
{
g(k,j);
}
}
}
function all_js()
{
}
function getFtnPreviewData(d,c,a,b)
{
var i=getTop();
var f=d.toJSON(),h={},j=f.sName,l=j.split(".").pop().toLowerCase(),e=f.nFileTransCode=="1",m=e?"mp4":l,k=i.getViewTypeByExt(f.sStatus=="complete"?m:"")||"other",g={sid:i.getSid(),fid:encodeURIComponent(f.sFileId),code:f.sFetchCode,filename:f.sName,suffix:m,type:k,k:f.sKey,appid:f.nAppId||2};
a&&i.ossLog("delay","all",i.T("stat=nothing&loc=ftnview,$sType$,0,$sTrans$").replace({sType:k,sTrans:f.nFileTransCode}));
if(k=="video"&&f.nFileSplitted==1&&window['gbIsSpreadVideo'])
{
h.sHash=f.sSHA;
}
f.sid=i.getSid();
h.cid=d.cid;
h.sFrom="bigattach";
h.sName=j;
h.sSuffix=m;
h.sBytesize=f.nSize;
h.sFileIdx=-1;
h.sType=k;
h.bIsTimeout=b;
h.sDown=i.T("/cgi-bin/ftnDownload302?sid=$sid$&fid=$fid$&code=$code$&k=$k$").replace(g);
h.sTwoDCodeUrl=i.twoDCodeImgUrl(h.sDown);
if(e)
{
h.sUrl=i.TE("/cgi-bin/ftnGetVideoUrl?sid=$sid$&sha=$sSHA$&size=$nSize$").replace(f);
}
else if(k=="compress")
{
if(d.get("nSize")>=c)
{
debug("compress >> other");
h.sFileDesc="\u6682\u4E0D\u652F\u6301\u9884\u89C8\u8D85\u8FC7"+(c/1048576)+"M\u7684\u538B\u7F29\u5305\u3002";
h.sType="other";
}
else{
h.sUrl=i.TE("/cgi-bin/ftnviewcompress?sid=$sid$&cpsfile=$@$eval getTop().encodeURI($sName$)$@$&fid=$sFileId$&action=list&t=cps.json&fromattach=1").replace(f);
}
}
else if(k!="doc")
{
f.sPreviewUrl&&(h.sThumb=f.sPreviewUrl+"?fname=*."+m+"&pictype=scaled&size=64*64");
h.sUrl=f.sPreviewUrl&&m!="gif"?f.sPreviewUrl+"?fname=*."+m+"&pictype=scaled&size=1024*768":h.sDown+"&play=1";
}
else{
h.sUrl=i.TE(["/cgi-bin/ftnfilefunc?sid=$sid$&code=$code$&k=$k$&oper=",("doc,xls,ppt,docx,xlsx,pptx,pdf,eml,pps,rtf,docm,dot,dotx,dotm,".indexOf(m+",")!=-1?"htmlopen":"view"),"&appid=$appid$&nocheckframe=true&s=yozo&fromattach=1&ftnpreviewtype=$type$&filename=$filename$&","nofixedname=$@$eval getTop().htmlEncode($filename$)$@$&ef=qfunc","$@$if($suffix$=='eml')$@$","&viewtype=eml&t=preview_eml","$@$else$@$","&t=attachments_content","$@$endif$@$"]).replace(g);
}
return h;
}
var getPreviewView=(function(){
var b=getTop();
function a(c)
{
return "txt,html".indexOf(b.getFileTypeByExt(c||""))>-1;
}
return function(c,d){
var h=c.get('sName'),e=b.getFileExt(h),f=b.getFileTypeByExt(e||""),j=b.getViewTypeByExt(e),g=c.get("mailid")?[c.get("mailid"),c.get("attachid"),c.get("attachname")].join("|"):'';
var i=b.T(['/cgi-bin/$appname$?sid=$sid$&upfilelistitem=$upfileid$&mailattach=$mailattach$','&filename=$filename$&filetype=$filetype$&t=$t$&readprev=$compose$&filepath=$filepath$','&action=$action$$viewdocparam$&viewtype=$viewtype$&r=$rand$&sc=false&nf=$nf$']).replace({sid:b.getSid(),rand:Math.random(),appname:{"txt":"readtemplate","html":"readtemplate","eml":"viewdocument"}[f]||{"compress":"viewcompress","video":"viewfile","music":"viewfile","img":"viewfile"}[j]||"viewdocument",action:j=="compress"?"list":(a(e)?"view":""),compose:"normal",t:d||'attachments_simple',upfileid:c.get("sFileId"),filename:b.encodeURI(h),filetype:f,filepath:(c.get("sFilePath"))||"",mailattach:g,viewdocparam:j=="doc"?"&s=yozo&fromattach=1&from=attachfolder":"",viewtype:e=="eml"?"eml":"",nf:c.get('sNf')||''});
return i;
};
})();
function isSupportImportWord(a)
{
return getTop().getViewTypeByFileName(a)=='doc';
}
function appendEditorFileContent(c,b,a)
{
b=b.getCurrentEditor();
var i=getTop();
if(!i.trim(c))
{
return;
}
if(a)
{
if(c.length>1024*1024)
{
return;
}
c='<pre style="word-wrap: break-word; white-space: pre-wrap;">'+i.htmlEncode(c)+'</pre>';
}
if((i.gbIsChrome||i.gbIsFF)&&b.getEditMode()=='html')
{
if(!a&&i.gbIsChrome)
{
var f=b.getEditWin();
var e=f.document;
var d='__style__'+i.now();
var g=[];
var h=document.createElement('div');
h.innerHTML=c;
i.E(h.getElementsByTagName('style'),function(j){
g.push(j.innerHTML);
});
if(g.length)
{
c+='<div id="'+d+'" style="display:none;">\u200D</div>';
}
else{
i.debug('\u5BFC\u5165\u6587\u4EF6\u65E0sytle\u6807\u7B7E');
}
b.execCmd('insertHTML',c,function(){
if(g.length)
{
var k=i.S(d,f)||e.body;
if(k)
{
var j=e.createElement('style');
j.innerHTML=g.join('');
k.appendChild(j);
}
}
});
}
else{
b.execCmd('insertHTML',c);
}
setTimeout(function(){
b.resizeNoScrollEditor();
},500);
}
else{
b.appendContent(c);
}
return true;
}
var getOfficeRealContent=(function(){
var _oTop=getTop();
var _nQmboxIndex=0;
function getOfficeRealContent(_asContent,_aoCfg)
{
_asContent=clearFixTag(_asContent);
if(_asContent.indexOf('xmlns:w="urn:schemas-microsoft-com:office:word"')!=-1)
{
dealWord(_asContent,_aoCfg);
return;
}
else if(_asContent.indexOf('xmlns:x="urn:schemas-microsoft-com:office:excel"')!=-1)
{
dealExcel(_asContent,_aoCfg);
return;
}
else if(_asContent.indexOf('xmlns:p="urn:schemas-microsoft-com:office:powerpoint"')!=-1)
{
dealPPT(_asContent,_aoCfg);
return;
}
else if(_asContent.indexOf('qmbox')==-1)
{
var _oResult=_oTop.evalValue(_asContent);
dealPDF(_oResult,_aoCfg);
return;
}
_aoCfg.onload(true,_asContent);
}
function dealFrameset(_asContent)
{
var _sTempData=_asContent.replace(/frameset/ig,'ul').replace(/frame/ig,'li');
var _oTempElem=document.createElement('div');
_oTempElem.innerHTML=_sTempData;
var _oIframeSrc={};
_oTop.E(_oTempElem.getElementsByTagName('li'),function(_aoItem){
_oIframeSrc[_oTop.attr(_aoItem,'Name')]=getURL(_oTop.attr(_aoItem,'src'));
});
return _oIframeSrc;
}
function getQmboxName()
{
return 'qmbox'+(_nQmboxIndex++);
}
function getLoadIframeBodyCfg()
{
var _oStyleSrcMap={};
return {isEnd:function(){
return true;
},getLoadedStyleId:function(_asStyleUrl){
return _oStyleSrcMap[getViewFileId(_asStyleUrl)];
},saveLoadedStyle:function(_asStyleUrl,_asQmboxId){
_oStyleSrcMap[getViewFileId(_asStyleUrl)]=_asQmboxId;
},onload:function(_abOK,_asData){
},getBody:function(_aoNode,_asContent){
_aoNode.style.display='block';
return _aoNode;
}};
}
function dealWord(_asContent,_aoCfg)
{
var _oIframeCfg=getLoadIframeBodyCfg();
_oIframeCfg.onload=_aoCfg.onload;
_oIframeCfg.getBody=function(_aoNode,_asContent){
var _nSectionIndex=0;
while(++_nSectionIndex)
{
var _oSections=_oTop.CN('Section'+_nSectionIndex,_aoNode);
if(!_oSections.length)
{
break;
}
_oTop.E(_oSections,function(_aoDOM){
var _sPosition=_oTop.getStyle(_aoDOM,'position');
_aoDOM.style.cssText='position:'+_sPosition;
_aoDOM.className='';
_aoDOM.id='';
_sPosition=_oTop.getStyle(_aoDOM,'position');
var _oParent=_aoDOM.parentNode;
_oParent.style.cssText='position:'+_sPosition;
_oParent.className='';
_oParent.id='';
});
}
_aoNode.style.display='block';
return _aoNode;
};
dealIframBody(_asContent,_oIframeCfg);
}
function dealExcel(_asContent,_aoCfg)
{
var _sIframeSrc=dealFrameset(_asContent).frTabs;
if(!_sIframeSrc)
{
_aoCfg.onload(false,'NoContent');
return;
}
_oTop.QMAjax.send(_sIframeSrc,{onload:function(_abOK,_asData){
if(_abOK&&_asData&&(''+_asData).indexOf('<!--cgi exception-->')!==0)
{
var _oTempElem=createTempNode(_asData);
var _oNames=[];
var _oSrcs=[];
_oTop.E(_oTempElem.getElementsByTagName('a'),function(_aoItem){
_oNames.push(_oTop.trim(_aoItem.getElementsByTagName('*')[0].innerHTML));
_oSrcs.push(getURL(_aoItem.href));
});
if(_oSrcs.length)
{
loadIframes(_oSrcs,_oNames,{getBody:function(_aoNode,_asContent){
if(_aoNode.getElementsByTagName('td').length)
{
return _aoNode.getElementsByTagName('table')[0];
}
}},_aoCfg.onload);
}
else{
_aoCfg.onload(false,'NoContent');
}
}
else{
_aoCfg.onload(false,'PartFileError');
}
}});
}
function dealPPT(_asContent,_aoCfg)
{
var _oIframeSrc=dealFrameset(_asContent);
if(!_oIframeSrc.outline&&!_oIframeSrc.slide)
{
_aoCfg.onload(false,'NoContent');
return;
}
else if(!_oIframeSrc.outline)
{
_load([_oIframeSrc.slide],[],_aoCfg);
return;
}
_oTop.QMAjax.send(_oIframeSrc.outline,{onload:function(_abOK,_asData){
if(_abOK&&_asData&&(''+_asData).indexOf('<!--cgi exception-->')!==0)
{
var _oTempElem=createTempNode(_asData);
var _oNames=[];
_oTop.E(_oTempElem.getElementsByTagName('a'),function(_aoItem){
_oNames.push(_oTop.trim(_aoItem.innerHTML));
});
var _oSrcs=[];
_oTop.E(_oTempElem.getElementsByTagName('script'),function(_aoItem){
if(_aoItem.innerHTML.indexOf('_oSlide')!=-1)
{
var _oSlide,_sUrl;
eval(_aoItem.innerHTML);
_sUrl=_sUrl||'/cgi-bin/viewfile?sid='+_oTop.getSid()+'&f=';
_oTop.E(_oSlide||{},function(_asFid){
_oSrcs.push(_sUrl+_asFid);
});
}
});
if(_oSrcs.length)
{
_load(_oSrcs,_oNames,_aoCfg);
}
else{
_aoCfg.onload(false,'NoContent');
}
}
else{
_aoCfg.onload(false,'PartFileError');
}
}});
function _load(_aoSrcs,_aoNames,_aoCfg)
{
loadIframes(_aoSrcs,_aoNames,{getBody:function(_aoNode,_asContent){
var _oBody=_oTop.finds('#SlideObj',_aoNode)[0];
if(_oBody)
{
_oBody.style.position='relative';
_oBody.style.top=0;
_oBody.style.left=0;
_oBody.style.visibility='visible';
_oBody.style.overflow='hidden';
return _oBody;
}
}},_aoCfg.onload);
}
}
function dealPDF(_aoIframeInfo,_aoCfg)
{
var _sSrc=[];
_oTop.E(_aoIframeInfo.page,function(_asUrl){
_asUrl&&_sSrc.push(_asUrl);
});
loadIframes(_sSrc,[],null,_aoCfg.onload);
}
function clearFixTag(_asContent)
{
return _asContent.replace(/<!--\[if gte vml( \d+)?\]>[\s\S]*?<!\[endif\]-->/g,'').replace(/<!(?:--)? *\[if !vml\] *(?:--)?>([\s\S]*?)<!(?:--)? *\[endif\] *(?:--)?>/g,'$1');
}
function clearStyle(_asStyle)
{
return _asStyle.replace(/;(\s*;)+/g,';').replace(/\{(\s*;)+/g,'{');
}
function replaceNobrTag(_aoNode)
{
var _oNobrs=_aoNode.getElementsByTagName('nobr');
var _oDoc=_aoNode.ownerDocument;
for(var i=_oNobrs.length;i--;)
{
var _oNewNode=_oDoc.createElement('div');
_oNewNode.style.cssText='display:inline;white-space: nowrap;';
_oNewNode.innerHTML=_oNobrs[i].innerHTML;
_oNobrs[i].parentNode.replaceChild(_oNewNode,_oNobrs[i]);
}
}
function transformStyleFontName(_asStyle)
{
return _asStyle.replace(/(\\[\dA-F]{4,4})+/ig,transformStyleFontName._replace);
}
transformStyleFontName._replace=function(_asMatch){
var _oString=[];
var _bError=false;
_oTop.E(_asMatch.match(/[\d\w]{4,4}/g),function(_asCode){
var _sStr=String.fromCharCode(parseInt(_asCode,16));
if(_sStr.length==1)
{
_oString.push(_sStr);
}
else{
_bError=true;
}
});
return _bError?_asMatch:'"'+_oString.join('')+'"';
};
function createTempNode(_asContent)
{
var _oTempElem=document.createElement('div');
_oTempElem.style.display='none';
if(_asContent)
{
_oTempElem.innerHTML=''+_asContent;
}
return _oTempElem;
}
var _sContentWarpStyle=' style="word-wrap:normal; font-size:1em; font-weight:normal; line-height:normal;"';
function loadIframe(_asUrl,_aoLoadCfg)
{
_oTop.QMAjax.send(_asUrl,{onload:function(_abOK,_asData){
if(_abOK&&!_aoLoadCfg.isEnd()&&_asData&&(''+_asData).indexOf('<!--cgi exception-->')!==0)
{
dealIframBody(clearFixTag(_asData),_aoLoadCfg);
}
else{
_aoLoadCfg.onload(false);
}
}});
}
function dealIframBody(_asData,_aoLoadCfg)
{
var _oTempElem=createTempNode(_asData);
var _sStyleContent=[];
_oTop.E(_oTempElem.getElementsByTagName('style'),function(_aoStyle){
var _sStyle=''+_aoStyle.innerHTML;
if(_sStyle)
{
_sStyleContent.push(_sStyle);
}
else{
_oTop.debug('import word: no style content');
}
});
var _oBody=_aoLoadCfg.getBody(_oTempElem,_asData);
if(_oBody)
{
_oBody=_oBody.cloneNode(true);
_oTop.E(_oBody.getElementsByTagName('script'),_oTop.removeSelf);
_oTop.E(_oBody.getElementsByTagName('link'),_oTop.removeSelf);
_oTop.E(_oBody.getElementsByTagName('style'),_oTop.removeSelf);
replaceNobrTag(_oBody);
_oTop.E(_oBody.getElementsByTagName('*'),function(_aoNode){
if(_aoNode.nodeType!=3)
{
var _sStyle=_oTop.attr(_aoNode,'style');
if(_sStyle)
{
var _sNewStyle=transformStyleFontName((''+_sStyle)).replace(/(^|;)[^;]*?[\?\\][^;]*/g,'$1').replace(/(^|;)\s*mso-[^;]*/g,'$1').replace(/"/g,"'");
if(_sNewStyle!=_sStyle)
{
_oTop.attr(_aoNode,'style',clearStyle(_sNewStyle));
}
}
var _sClassName=_aoNode.className;
if(_sClassName)
{
_aoNode.className=_sClassName+' '+_sClassName.toLowerCase();
}
}
});
_oTempElem.innerHTML="";
_oTempElem.appendChild(_oBody);
var _sContent=_oTempElem.innerHTML;
var _oStyleReg=/(<link [^>]*href=(["'])([^\2>]+)\2[^>]*>)/ig;
var _oStyleReg2=/rel=(["'])stylesheet\1/i;
var _oStyleSrc=[];
while(_oStyleReg.test(_asData))
{
var _sLink=RegExp.$3;
var _sLinkAll=RegExp.$1;
if(_oStyleReg2.test(_sLinkAll))
{
_oStyleSrc.push(_sLink);
}
}
var _nWaitLoadNum=_oStyleSrc.length+1;
var _oQmboxName=[];
var _onload=function(_asQmboxName){
if(--_nWaitLoadNum<1)
{
if(_sStyleContent.length&&!_asQmboxName)
{
_asQmboxName=getQmboxName();
}
if(_asQmboxName||_oQmboxName.length)
{
if(_asQmboxName)
{
_oQmboxName.push(_asQmboxName);
}
_sContent='<div'+_sContentWarpStyle+' class="'+_oQmboxName.join(' ')+'">'+_sContent+'</div>';
}
else{
_sContent='<div'+_sContentWarpStyle+'>'+_sContent+'</div>';
}
if(_sStyleContent.length)
{
_sStyleContent=_sStyleContent.join('').replace(/\/\*[\s\S]*?\*\//g,'').replace(/[\n\r]/g,'').replace(/(^|\})([^\{\}]+?)\{/g,function(_asMatch,_asStart,_asName){
return _asStart+'.'+_asQmboxName+' '+_asName.split(',').join(', .'+_asQmboxName+' ')+'{';
});
_sStyleContent=transformStyleFontName(_sStyleContent).replace(/([;\{])[^;\{]*?[\?\\][^;\}]*/g,'$1').replace(/([;\{])\s*mso-[^;\}]*/g,'$1');
_sContent='<style>'+clearStyle(_sStyleContent)+'</style>'+_sContent;
}
_aoLoadCfg.onload(true,_sContent);
}
else if(_asQmboxName)
{
_oQmboxName.push(_asQmboxName);
}
};
_oTop.E(_oStyleSrc,function(_asStyleSrc){
if(!_aoLoadCfg.getLoadedStyleId(_asStyleSrc))
{
var _sStyleId=getQmboxName();
_aoLoadCfg.saveLoadedStyle(_asStyleSrc,_sStyleId);
_oTop.QMAjax.send(_asStyleSrc,{onload:function(_abOK,_asData){
if(_abOK&&!_aoLoadCfg.isEnd()&&_asData&&(''+_asData).indexOf('<!--cgi exception-->')!==0)
{
_sStyleContent.push(_asData);
_onload(_sStyleId);
}
else{
_aoLoadCfg.onload(false);
}
}});
}
else{
_onload(_aoLoadCfg.getLoadedStyleId(_asStyleSrc));
}
});
_onload();
}
else{
_oTop.debug('iframe \u5185\u5BB9\u4E3A\u7A7A');
_aoLoadCfg.onload(true,'');
}
}
function loadIframes(_aoUrls,_aoNames,_aoLoadIframeCfg,_afCallback)
{
var _oContent=[];
var _bGlobalError=false;
var _nErrorWaiter=setTimeout(function(){
_afCallback(false,'Timeout');
_bGlobalError=true;
},18000);
var _nWaitLoadNum=_aoUrls.length;
_oTop.E(_aoUrls,function(_asUrl,_anIndex){
loadIframe(_asUrl,_oTop.extend(getLoadIframeBodyCfg(),_aoLoadIframeCfg||{},{isEnd:function(){
return _bGlobalError;
},onload:function(_abOK,_asData){
clearTimeout(_nErrorWaiter);
if(_abOK)
{
_oContent[_anIndex]=_asData;
if(--_nWaitLoadNum==0)
{
var _oRealCcontent=[];
var _oTmp=_oTop.TE('$@$if($name$)$@$<h1>$name$</h1>$@$endif$@$<div>$content$</div>');
_oTop.E(_oContent,function(_asContent,_anIndex){
if(_asContent)
{
_oRealCcontent.push(_oTmp.replace({name:_oTop.htmlEncode(_aoNames[_anIndex]||''),content:_asContent}));
}
});
if(!_oRealCcontent.length)
{
_afCallback(false,'NoContent');
}
else{
_afCallback(true,_oRealCcontent.join(''));
}
}
}
else if(!_bGlobalError)
{
_bGlobalError=true;
_afCallback(false,'PartFileError');
}
}}));
});
}
function getViewFileId(_asUrl)
{
var _oMatch=_asUrl.match(/f=([^&$]+)/);
return _oMatch&&_oMatch[1];
}
function getURL(_asUrl)
{
if(_asUrl.indexOf('/cgi-bin/mail_spam')!=-1)
{
return _oTop.getUrlParams(_asUrl).url;
}
return _asUrl;
}
return getOfficeRealContent;
})();
var _oTop=getTop();
var _oOidbAccountBase={enterPress:function(a,b){
var c=a||window.event,d=this;
if(c.keyCode===13)
{
if(b&&b==="1")
{
d.goStep({"step":"2"});
}
else{
d.doAction();
}
getTop().preventDefault(c);
}
return false;
},checkPopInput:function(){
var c=getTop(),b=this,d=b._oDialog.S("div_username"),a=b._oDialog.S("ipt_pwd"),f=(d.innerHTML||""),e=(a.value||"");
if(c.trim(e)=="")
{
b.showWarn("\u60A8\u8FD8\u6CA1\u6709\u8F93\u5165\u5BC6\u7801\uFF01");
b._oDialog.S("ipt_pwd").focus();
return false;
}
if(!b.checkMail(f))
{
return false;
}
return true;
},checkMail:function(a){
var e=this,c=getTop().QMAddrParser,b=a.indexOf("@")>0,d=c.parseAddr(a);
if(d.length==0)
{
e.showWarn("\u8BF7\u586B\u5199\u90AE\u7BB1\u5730\u5740");
return false;
}
else if(!b||(d.length==1&&!d[0].valid))
{
e.showWarn("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5E10\u53F7\uFF01");
return false;
}
else if(d.length>1)
{
e.showWarn("\u60A8\u53EA\u80FD\u8F93\u5165\u4E00\u4E2A\u90AE\u7BB1\u5730\u5740\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165");
return false;
}
return true;
},BindPwdEvents:function(b,c,a){
var e=getTop();
if(!b)
{
return;
}
function g(h)
{
e.show(c,true);
}
function f()
{
e.show(c,false);
}
var d=-1;
e.addEvents(b,{keydown:function(h){
var i=h.keyCode||h.charCode;
if(i==20)
{
if(d==0)
{
g(h);
d=1;
}
else if(d==1)
{
f();
d=0;
}
}
a(h);
},keypress:function(h){
var j=h.keyCode||h.charCode,i=h.shiftKey;
if((j>=65&&j<=90&&!i)||(j>=97&&j<=122&&i))
{
d=1;
g(h);
}
else if((j>=97&&j<=122&&!i)||(j>=65&&j<=90&&i))
{
d=0;
f();
}
else{
f();
}
a();
},blur:function(){
f();
}});
},_PTLOGIN_TEMP:getTop().T(["https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=522005705&daid=4&s_url=$topHost$/cgi-bin/pt_check?","sid=$sid$%26t=pt_next%26ptfun=$ptfun$%26id=&style=25&low_login=1&proxy_url=$topProtocol$","//mail.qq.com/proxy.html&need_qr=0&hide_border=1&border_radius=0&self_regurl=http://zc.qq.com/chs/index.html?","type=1&app_id=11005?t=regist&pt_feedback_link=http://support.qq.com/discuss/350_1.shtml&css=https://","res.mail.qq.com/zh_CN/htmledition/style/$cssFilename$$ver$.css&target=self&hide_title_bar","=1&default_uin=$uin$&regmaster=4&login_text=$loginDesc$&enable_qlogin=0"]),getPtloginUrl:function(a){
var b=this;
return b._PTLOGIN_TEMP.replace(_oTop.extend(b.getDefaultCfg(),a));
},isQQMail:function(a){
var b=a.toLowerCase();
if(b.indexOf("@foxmail")>-1||b.indexOf("@vip.qq")>-1||b.indexOf("@qq.")>-1)
{
return true;
}
return false;
},showWarn:function(a){
var b=getTop(),c=this._oDialog.S("div_warning");
if(c)
{
c.innerHTML=a;
c.style.visibility="";
}
},hideWarn:function(){
var a=getTop(),b=this._oDialog.S("div_warning");
if(b)
{
b.innerHTML="";
b.style.visibility="hidden";
}
},encrypt:function(a){
var d="CF87D7B4C864F4842F1D337491A48FFF54B73A17300E8E42FA365420393AC0346AE55D8AFAD975DFA175FAF0106CBA81AF1DDE4ACEC284DAC6ED9A0D8FEB1CC070733C58213EFFED46529C54CEA06D774E3CC7E073346AEBD6C66FC973F299EB74738E400B22B1E7CDC54E71AED059D228DFEB5B29C530FF341502AE56DDCFE9",b=new RSAKey();
b.setPublic(d,"10001");
var c=b.encrypt(a+"\n"+(Math.floor(+new Date()/1000))+"\n");
if(c)
{
return hex2b64(c);
}
return a;
}};
function toAddAccountPage()
{
var b=getTop(),a=arguments.callee;
b.loadCssFile("$css_path$login/addAccount327bfb.css",true,b.document);
a._oDialog=new b.QMDialog({sId:"id_AddAccount",sTitle:"\u6DFB\u52A0\u90AE\u7BB1\u5E10\u53F7",nWidth:440,sBodyHtml:a._oTmpl.replace({"step":"1"}),bAnimation:false,onshow:function(){
var c=this;
c.S("ipt_username").focus();
c.S("geConfirmBtn").onclick=function(){
a.goStep({"step":"2"});
};
c.S("geCancelBtn").onclick=function(){
c.close();
};
},onclose:function(){
if(this.reloadLeftWin)
{
reloadLeftWin();
}
},onbeforeclose:function(){
var c=this;
c.S("importFrame")&&removeSelf(c.S("importFrame"));
}});
a._oStepEventMap={"1":a.showAccountItem,"2":a.showPwdItem,"3":a.doAction};
}
getTop().extend(toAddAccountPage,_oOidbAccountBase,{_oTmpl:getTop().TE(['$@$if($step$=="1")$@$','<div class="addAccount_step addAccount_step_Username">','<div id="div_warning" class="addAccount_errorTip"></div>','<div id="div_frame_container" class="addAccount_text">','<div class="addAccount_label">\u6DFB\u52A0\u5E10\u53F7</div><input type="text" id="ipt_username" class="addAccount_ipt" value="$username$" onkeydown="getTop().toAddAccountPage.enterPress(event,\'1\');" onkeypress="getTop().toAddAccountPage.enterPress(event,\'1\');"/>','</div>','</div>','$@$else if($step$=="2")$@$','<div id="div_stepPassword" class="addAccount_step addAccount_step_Password">','<div id="div_warning" class="addAccount_errorTip"></div>','<div id="div_username" class="addAccount_step_usernameShow">$username$</div>','$@$if($uInfo$=="qq")$@$','<div class="addAccount_ptlogin">','<iframe frameborder="0" width="100%" src="$ptloginurl$" id="importFrame" allowtransparency="true"></iframe>','</div>','$@$else$@$','<div class="addAccount_login" id="div_addAccount_login">','<div class="addAccount_text">','<div class="addAccount_label">\u5BC6\u7801</div>','<input type="password" class="addAccount_ipt" tabindex="2" id="ipt_pwd" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);"/>','<div id="capTip" class="qui_cntIndent_captip" style="display:none;"><span class="qui_cntIndent_captip_row"></span>\u5927\u5199\u9501\u5B9A\u5DF2\u6253\u5F00</div>','</div>','<div id="div_verifycode" style="display:none; padding-bottom:16px;">','<div class="addAccount_label">\u9A8C\u8BC1\u7801</div>','<input type="text" id="loginVerify" name="loginVerify" value="" class="addAccount_ipt" style="margin-bottom:5px;" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);">','<img id="verifyImage" src="" style="display:block;clear:both;margin-left:57px;border:1px solid #eee;"/>','<input type="hidden" id="loginData" name="loginData" value="" />','<input type="hidden" id="loginCookies" name="loginCookies" value="" />','</div>','<div id="div_challenge" style="display:none;padding-bottom:16px;">','<div class="addAccount_label">\u8EAB\u4EFD\u9A8C\u8BC1</div>','<input type="text" id="secondPin" name="secondPin" value="" class="addAccount_ipt" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);">','<input type="text" id="phoneNumber" name="phoneNumber" value="" style="display:none;" class="addAccount_ipt" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);">','<input type="text" id="verifySmsChallengeAnswer" name="VerifySmsChallengeAnswer" value="" class="addAccount_ipt" style="display:none;" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);">','<input type="text" id="androidTablet" name="androidTablet" value="" style="display:none;" class="addAccount_ipt" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);">','<input type="text" id="emailAnswer" name="emailAnswer" value="" style="display:none;" class="addAccount_ipt" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);">','<input type="text" id="deviceAddress" name="deviceAddress" value="" style="display:none;" class="addAccount_ipt" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);">','<input type="text" id="secretAnswer" name="secretAnswer" value="" style="display:none;" class="addAccount_ipt" onkeydown="getTop().toAddAccountPage.enterPress(event);" onkeypress="getTop().toAddAccountPage.enterPress(event);">','<div id="challengeTip" style="font-size:12px;clear:both;color:#999;padding-top:5px;margin-left:57px;"></div>','<input type="hidden" id="challengeData" name="challengeData" value="" />','<input type="hidden" id="challengeCookies" name="challengeCookies" value="" />','<input type="hidden" id="challengeAction" name="challengeAction" value="" />','</div>','<div id="div_popsvr" style="display:none">','<div class="addAccount_text">','<div class="addAccount_label">POP\u670D\u52A1\u5668\u5730\u5740</div>','<input type="text" class="addAccount_ipt" tabindex="3" id="ipt_popserver" onkeydown="getTop().toAddAccountPage.enterPress(event)" onkeypress="getTop().toAddAccountPage.enterPress(event)"/>','</div>','<div class="addAccount_text" id="div_port">','<div class="addAccount_label">POP\u670D\u52A1\u5668\u7AEF\u53E3</div>','<input type="text" class="addAccount_ipt" tabindex="4" id="ipt_port" value="110" onkeydown="getTop().toAddAccountPage.enterPress(event)" onkeypress="getTop().toAddAccountPage.enterPress(event)"/>','</div>','<div class="addAccount_text" id="div_ssl" style="padding-left: 105px;margin-top: -15px;padding-bottom: 0px;">','<input type="checkbox" name="ckb_ssl" id="ckb_ssl" class="ckb_ssl"><label for="ckb_ssl">\u5F00\u542FSSL\u5B89\u5168\u8FDE\u63A5</label>','</div>','</div>','</div>','$@$endif$@$','</div>','<div class="addAccount_loadingWrap" style="display: none;" id="div_loading">','<span class="addAccount_loading"></span>','</div>','$@$else$@$','<div class="addAccount_step_Finish">','<div class="qui_clear addAccount_step_succeedTip"><span class="addAccount_step_succeedImg"></span><span class="addAccount_step_succeedDesc">\u606D\u559C\u4F60\u6210\u529F\u6DFB\u52A0\u4E86<span class="qui_txtBold">$username$</span></span></div>','<ul class="addAccount_finishSetting">','<li class="addAccount_finishSetting_item"><input class="addAccount_finishSetting_radio" type="radio" name="mailReceive" id="radio_7" value="7" checked/><label for="radio_7">\u6536\u53D6\u6700\u8FD17\u5929\u7684\u90AE\u4EF6</label></li>','<li class="addAccount_finishSetting_item"><input class="addAccount_finishSetting_radio" type="radio" name="mailReceive" id="radio_all" value="all"/><label for="radio_all">\u6536\u53D6\u5168\u90E8\u90AE\u4EF6</label></li>','<li class="addAccount_finishSetting_item"><input class="addAccount_finishSetting_radio" type="radio" name="mailReceive" id="radio_0" value="0"/><label for="radio_0">\u6682\u4E0D\u6536\u53D6\u6B64\u90AE\u7BB1\u90AE\u4EF6</label></li>','</ul>','</div>','$@$endif$@$','<div class="dialog_operate addAccount_foot" id="div_foot">','<a href="javascript:;"  id="geConfirmBtn" class="qui_btn qui_btn_Blue">$@$if($step$=="1")$@$ \u4E0B\u4E00\u6B65 $@$else if($step$=="2")$@$ \u9A8C\u8BC1 $@$else$@$ \u67E5\u770B $@$endif$@$</a>','<a href="javascript:;"  id="geCancelBtn" class="qui_btn addAccount_foot_cancel">$@$if($step$=="1")$@$ \u53D6\u6D88 $@$else if($step$=="2")$@$ \u4E0A\u4E00\u6B65 $@$else$@$ \u5B8C\u6210\u66F4\u591A\u8BBE\u7F6E $@$endif$@$</a>','</div>']),getCssVer:function(){
if(!this._msVer)
{
var a=getTop().getRes("$css_path$addAccountPtlogin24ca06.css"),b=(/addAccountPtlogin(.*)\.css/.test(a)&&RegExp.$1)||"";
this._msVer=b;
}
return this._msVer;
},getDefaultCfg:function(){
var a=this;
if(!a._oDefaultCfg)
{
a._oDefaultCfg={"topHost":_oTop.getTopHost(),"sid":_oTop.getSid(),"topProtocol":_oTop.location.protocol,"ver":a.getCssVer(),"loginDesc":encodeURIComponent('\u9A8C\u8BC1'),"ptfun":"addother","cssFilename":"addAccountPtlogin"};
}
return a._oDefaultCfg;
},ptlogin2OnResize:function(a){
return function(j,h){
var d=a.S("importFrame"),c=a._moPanelDom,f=a.S("div_stepPassword"),g=a.S("div_username"),b=a.S("geCancelBtn"),e=a.S("btlogin");
if(d)
{
d.style.height=h+'px';
if(h>=288&&h<=295&&d.contentWindow.frames.length>0)
{
getTop().addClass(c,'qm_dialog_HideChild');
b.style.display='none';
f.style.height=h+'px';
function i()
{
setTimeout(function(){
if(d.contentWindow.frames.length==0)
{
getTop().rmClass(c,'qm_dialog_HideChild');
b.style.display='inline-block';
f.style.height='95px';
d.style.height='166px';
}
else if(getTop().hasClass(c,"qm_dialog_HideChild"))
{
i();
}
},100);
}
i();
}
else{
getTop().rmClass(c,'qm_dialog_HideChild');
b.style.display='inline-block';
f.style.height=(h-66)+'px';
}
if(h>=171&&h<=290)
{
g.style.marginTop='15px';
}
else{
g.style.marginTop='0';
}
}
if(b)
{
b.style.zoom='normal';
b.style.zoom='1';
}
if(e)
{
e.style.zoom='normal';
e.style.zoom='1';
}
};
},showAccountItem:function(a){
var c=this,b=c._oDialog;
b.setHtml("_body_",c._oTmpl.replace({"step":a.step,"username":a.username}));
a.failtype&&c.showError(a.failtype);
b.S("geConfirmBtn").style.display="";
b.S("geConfirmBtn").onclick=function(){
c.goStep({"step":"2"});
};
b.S("geCancelBtn").onclick=function(){
b.close();
};
},showPwdItem:function(a){
var c=this,b=c._oDialog;
_sEmail=(b.S("ipt_username")&&b.S("ipt_username").value)||a.username||"0";
if(!checkMail(_sEmail))
{
return false;
}
_oTop.extend(a,{"username":_sEmail});
if(c.isQQMail(_sEmail))
{
c.showQQPwdItem(a);
}
else{
c.showNotQQPwdItem(a);
}
},showQQPwdItem:function(a){
var c=this,b=c._oDialog;
getTop().ptlogin2_onResize=c.ptlogin2OnResize(b);
b.setHtml("_body_",c._oTmpl.replace({"step":a.step,"username":a.username,"uInfo":"qq","ptloginurl":c.getPtloginUrl({"uin":a.username})}));
b.S("geConfirmBtn").style.display="none";
b.S("geCancelBtn").onclick=function(){
c.goStep({"step":"1","username":a.username});
};
getTop().ptloginResize();
},showNotQQPwdItem:function(a){
var e=this,b,d,c=e._oDialog;
_oTop.loadJsFile("$js_path$safeauth24e6ae.js",true);
c.setHtml("_body_",e._oTmpl.replace({"step":a.step,"username":a.username,"uInfo":"other"}));
if(b=c.S("ckb_ssl"))
{
b.onchange=function(){
d=c.S("ipt_port");
if(this.checked)
{
d.value=="110"&&(d.value="995");
}
else{
d.value=="995"&&(d.value="110");
}
};
}
new (e.BindPwdEvents)(c.S("ipt_pwd"),c.S("capTip"),e.enterPress);
c.S("geConfirmBtn").onclick=function(){
e.goStep({"step":"3","username":a.username});
};
c.S("geCancelBtn").onclick=function(){
e.goStep({"step":"1","username":a.username});
};
setTimeout(function(){
c.S("ipt_pwd").focus();
});
},goStep:function(a){
if(!a||!(a.step))
{
return;
}
var c=getTop(),b=this;
b._oStepEventMap[a.step].call(b,a);
},doAddQQAction:function(a){
var c=getTop(),b=this;
b._oDialog.S("div_foot").style.display="none";
b._oDialog.S("div_username").style.display="none";
c.showInfo("\u6B63\u5728\u6DFB\u52A0\u90AE\u7BB1\u5E10\u6237...",500);
c.QMAjax.send("/cgi-bin/foldermgr",{content:c.T(["sid=#sid#&enter=new&fun=createpop&folderid=&acctid=0&taskid=&step=","&fromtips=&popfolder=#popmail#&popnickname=#popnickname#&popmail=#popmail#&addstep=2&ptfun=addother&poppwd=","&popsvr=&popport=&timeflag=1&delflag=0&isenddef=1&needspam=1&smtpneedpwd=0&showsmtppanel=0","&agentsend=0&smtpsvr=&smtpport=25&nosmtppwd=#nosmtppwd#&smtppwd=&t=mailpotl.json&secpwd=#secpwd#"],"#").replace({sid:c.getSid(),popmail:a.sLoginaccount,popnickname:encodeURIComponent((c.S("useralias")&&c.S("useralias").innerHTML)||""),nosmtppwd:encodeURIComponent("\u6CBF\u7528\u90AE\u7BB1\u5BC6\u7801"),secpwd:a.secpwd}),method:"POST",onload:function(d,f){
if(d)
{
var g=c.evalValue(f);
try{
if(g.succ=="0")
{
b.goStep({"step":"1","username":a.sLoginaccount,"failtype":g.failtype});
}
else if(g.succ=="1")
{
b.succ({"step":"1","username":a.sLoginaccount,"folderid":g.folderid,"acctid":g.acctid});
}
}
catch(h)
{
c.showError("\u6DFB\u52A0\u90AE\u7BB1\u5E10\u6237\u5931\u8D25...");
}
}
else{
c.showError("\u6DFB\u52A0\u90AE\u7BB1\u5E10\u6237\u5931\u8D25...");
}
}});
},doAction:function(b,a){
var f=getTop(),e=this;
if(this.checkPopInput())
{
var d={_sTaskid:b||"",_sPopmail:e._oDialog.S("div_username").innerHTML||"",_sPoppwd:e._oDialog.S("ipt_pwd").value||"",_sPopsvr:e._oDialog.S("ipt_popserver").value||"",_sPopport:e._oDialog.S("ipt_port").value||110,_nIspopssl:e._oDialog.S("ckb_ssl").checked&&1||0};
var c=typeof b=="string"?true:false;
if(!c&&d._sPopmail.indexOf("@gmail")>-1)
{
e.doGoogleOauth(d,function(g){
f.showInfo("\u6B63\u5728\u9A8C\u8BC1\u5176\u4ED6\u90AE\u7BB1\u5E10\u53F7...",6000);
e.doRealAction(d,g);
});
}
else{
f.showInfo("\u6B63\u5728\u9A8C\u8BC1\u5176\u4ED6\u90AE\u7BB1\u5E10\u53F7...",6000);
e.doRealAction(d,a);
}
}
},doRealAction:function(b,c){
var f=getTop(),e=this,d=e._oDialog.S("geConfirmBtn");
var g=T('poppwd=$poppwd$&ispopssl=$ispopssl$').replace({poppwd:encodeURIComponent(e.encrypt(b._sPoppwd)),ispopssl:encodeURIComponent(b._nIspopssl)});
if(c)
{
var a=[];
for(var h in c)
{
a.push("google_"+h+"="+encodeURIComponent(c[h]));
}
g=a.push(g)&&a.join("&");
}
f.QMAjax.send(f.T("/cgi-bin/foldermgr?sid=#sid#&enter=new&fun=createpop&folderid=&acctid=0&step=&fromtips=&popmail=#popmail#&popfolder=#popmail#&popnickname=&popsvr=#popsvr#&popport=#popport#&timeflag=1&delflag=&isenddef=1&needspam=1&smtpneedpwd=0&showsmtppanel=0&agentsend=&smtpsvr=&smtpport=25&nosmtppwd=&smtppwd=&taskid=#taskid#&t=mailpotl.json","#").replace({sid:f.getSid(),popmail:encodeURIComponent(b._sPopmail),popsvr:encodeURIComponent(b._sPopsvr),popport:encodeURIComponent(b._sPopport),taskid:b._sTaskid||""}),{content:g,method:"POST",onload:function(i,j){
if(i)
{
var k=f.evalValue(j);
try{
if(k.waiting=="true")
{
setTimeout(function(){
if(c)
{
e.doAction(k.taskid,c);
}
else{
e.doAction(k.taskid);
}
},5000);
}
else if(k.succ=="0")
{
e.showError(k.failtype,b._sPopmail.indexOf("@gmail")>-1);
if(b._sPopmail.indexOf("@gmail")>-1)
{
f.attr(d,"oauth","false");
f.rmClass(d,"qui_btn_BlueDisabled");
f.LogKV("getinvestigate|googleoauth|oldoauth|fail");
}
}
else if(k.succ=="1")
{
if(b._sPopmail.indexOf("@gmail")>-1)
{
f.attr(d,"oauth","false");
f.rmClass(d,"qui_btn_BlueDisabled");
f.LogKV("getinvestigate|googleoauth|oldoauth|success");
}
e.succ({"step":"1","username":b._sPopmail,"folderid":k.folderid,"acctid":k.acctid});
}
}
catch(l)
{
f.showError("\u6DFB\u52A0\u90AE\u7BB1\u5E10\u53F7\u5931\u8D25...");
}
}
else{
f.showError("\u6DFB\u52A0\u90AE\u7BB1\u5E10\u53F7\u5931\u8D25...");
}
}});
},doGoogleOauth:function(a,C){
var u=getTop(),t=this,z=a._sPopmail,B=a._sPoppwd,q=t._oDialog.S("ipt_pwd"),h=t._oDialog.S("geConfirmBtn");
if(u.attr(h,"oauth")=="true")
{
return;
}
var G=function(){
u.attr(h,"oauth","true");
u.addClass(h,"qui_btn_BlueDisabled");
};
var I=function(){
u.attr(h,"oauth","false");
u.rmClass(h,"qui_btn_BlueDisabled");
};
var k=t._oDialog.S("div_verifycode"),v=t._oDialog.S("verifyImage"),n=t._oDialog.S("loginData"),m=t._oDialog.S("loginCookies"),o=t._oDialog.S("loginVerify");
var j=t._oDialog.S("div_challenge"),g=t._oDialog.S("challengeData"),f=t._oDialog.S("challengeCookies"),e=t._oDialog.S("challengeAction"),r=t._oDialog.S("secondPin"),p=t._oDialog.S("phoneNumber"),c=t._oDialog.S("androidTablet"),w=t._oDialog.S("verifySmsChallengeAnswer"),l=t._oDialog.S("emailAnswer"),i=t._oDialog.S("deviceAddress"),s=t._oDialog.S("secretAnswer"),d=t._oDialog.S("challengeTip");
var H=function(J,K){
r.style.display="none";
w.style.display="none";
p.style.display="none";
c.style.display="none";
i.style.display="none";
s.style.display="none";
l.style.display="none";
if(J=="VerifySmsChallenge")
{
w.style.display="";
w.value="";
d.innerHTML="(\u8BF7\u8F93\u5165\u4F60\u7684Gmail\u5E10\u53F7\u7ED1\u5B9A\u7684\u624B\u673A\u53F7\u7801\u6536\u5230\u7684\u77ED\u4FE1\u9A8C\u8BC1\u7801)";
w.focus();
}
else if(J=="SecondChallenge")
{
r.style.display="";
r.value="";
d.innerHTML="(\u7531\u4E8E\u4F60\u5F00\u542F\u4E86\u4E24\u6B65\u9A8C\u8BC1\uFF0C\u8BF7\u8F93\u5165\u4F60\u6536\u5230\u7684Google\u9A8C\u8BC1\u7801)";
r.focus();
}
else if(J=="PhoneVerificationChallenge")
{
p.style.display="";
p.value="";
d.innerHTML="(\u8BF7\u8F93\u5165\u4F60\u7684Gmail\u5E10\u53F7\u7ED1\u5B9A\u7684\u624B\u673A\u53F7\u7801\u6765\u5B8C\u6210\u8EAB\u4EFD\u9A8C\u8BC1)";
p.focus();
}
else if(J=="AndroidTabletChallenge")
{
c.style.display="";
c.value="";
d.innerHTML="(\u8BF7\u6253\u5F00\u4F60\u5B89\u5353\u6216\u5E73\u677F\u8BBE\u5907\u4E2D\u7684\u201CGoogle\u8BBE\u7F6E\u201D\u5E94\u7528\uFF0C\u8F93\u5165\u201C\u5B89\u5168\u201D\u9879\u4E2D\u83B7\u53D6\u7684\u201C\u5B89\u5168\u7801\u201D)";
c.focus();
}
else if(J=="UnverifiedPhoneChallenge")
{
i.style.display="";
i.value="";
d.innerHTML="(\u8BF7\u8F93\u5165\u4F60\u7684Gmail\u5E10\u53F7\u7ECF\u5E38\u767B\u5F55\u7684\u4F4D\u7F6E\u6765\u5B8C\u6210\u8EAB\u4EFD\u9A8C\u8BC1)";
i.focus();
}
else if(J=="SecretQuestionChallenge")
{
s.style.display="";
s.value="";
d.innerHTML='(\u8BF7\u56DE\u7B54\u5BC6\u4FDD\u95EE\u9898 \u201C<span style="color:red;">'+K+'</span>\u201D \u6765\u5B8C\u6210\u8EAB\u4EFD\u9A8C\u8BC1)';
s.focus();
}
else if(J=="RecoveryEmailChallenge")
{
l.style.display="";
l.value="";
d.innerHTML="(\u8BF7\u8F93\u5165\u4F60\u7684Gmail\u5E10\u53F7\u7ED1\u5B9A\u7684\u8F85\u52A9\u90AE\u7BB1\u5730\u5740\u6765\u5B8C\u6210\u8EAB\u4EFD\u9A8C\u8BC1)";
l.focus();
}
else{
j.style.display="none";
t.doRealAction(a);
}
};
t.hideWarn();
G();
if(k.style.display!="none")
{
var D=["Email="+z,"&Passwd="+B,"&logincaptcha="+o.value,"&loginData="+n.value,"&loginCookies="+m.value].join("");
if(!o.value)
{
o.focus();
t.showWarn("\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u9A8C\u8BC1\u7801");
I();
return;
}
u.showInfo("\u6B63\u5728\u9A8C\u8BC1\u5176\u4ED6\u90AE\u7BB1\u5E10\u53F7...");
u.QMAjax.send("/cgi-bin/googleoauth/verifyLogin",{content:D,method:"POST",onload:function(J,K){
var L=u.evalValue(K);
if(J)
{
if(!L.errCode&&L["access_token"])
{
u.LogKV("getinvestigate|googleoauth|oauth|success");
u.ossLog('delay','all','kw=google_oauth_suc&value=1');
C&&C(L);
}
else if(L.errCode=="101")
{
I();
k.style.display="none";
q.value="";
q.focus();
t.showWarn("\u5E10\u53F7\u6216\u8005\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5");
}
else if(L.errCode=="102")
{
I();
v.setAttribute("src",decodeURIComponent(L.verifyImageUri)+"&sid="+u.getSid());
n.value=L.data;
m.value=L.cookies;
q.value="";
o.value="";
k.style.display="";
q.focus();
t.showWarn("\u5E10\u53F7\u6216\u8005\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5");
}
else if(L.errCode=="105")
{
I();
k.style.display="none";
g.value=L.challengeData;
f.value=L.challengeCookies;
e.value=L.challengeAction;
j.style.display="";
H(L.challengeType,L.secretQuestion);
}
else{
L.errType&&u.LogKV("getinvestigate|googleoauth|fail|"+L.errType);
u.LogKV("getinvestigate|googleoauth|oauth|fail");
k.style.display="none";
t.doRealAction(a);
}
}
else{
u.LogKV("getinvestigate|googleoauth|oauth|fail");
k.style.display="none";
t.doRealAction(a);
}
}});
}
else if(j.style.display!="none")
{
var x,y;
var b=false;
if(w.style.display!="none")
{
x=[g.value,"Pin%3D"+w.value.replace(/^G-?/i,"")].join("%26");
y="VerifySmsChallenge";
if(!w.value)
{
b=true;
w.focus();
}
}
else if(r.style.display!="none")
{
x=[g.value,"Pin%3D"+r.value.replace(/^G-?/i,"")].join("%26");
y="SecondChallenge";
if(!r.value)
{
b=true;
r.focus();
}
}
else if(p.style.display!="none")
{
x=[g.value,"phoneNumber%3D"+p.value].join("%26");
y="PhoneVerificationChallenge";
if(!p.value)
{
b=true;
p.focus();
}
}
else if(c.style.display!="none")
{
x=[g.value,"Pin%3D"+c.value].join("%26");
y="AndroidTabletChallenge";
if(!c.value)
{
b=true;
c.focus();
}
}
else if(i.style.display!="none")
{
x=[g.value,"deviceAddress%3D"+i.value].join("%26");
y="UnverifiedPhoneChallenge";
if(!i.value)
{
b=true;
i.focus();
}
}
else if(s.style.display!="none")
{
x=[g.value,"answer%3D"+s.value].join("%26");
y="SecretQuestionChallenge";
if(!s.value)
{
b=true;
s.focus();
}
}
else{
x=[g.value,"email%3D"+l.value].join("%26");
y="RecoveryEmailChallenge";
if(!l.value)
{
b=true;
l.focus();
}
}
if(b)
{
t.showWarn("\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u9A8C\u8BC1\u7801");
I();
return;
}
u.showInfo("\u6B63\u5728\u9A8C\u8BC1\u5176\u4ED6\u90AE\u7BB1\u5E10\u53F7...");
var D=["challengeAction="+e.value,"challengeData="+x,"challengeCookies="+f.value].join("&");
u.QMAjax.send("/cgi-bin/googleoauth/challenge",{content:D,method:"POST",onload:function(J,K){
var L=u.evalValue(K);
if(J)
{
if(!L.errCode&&L["access_token"])
{
u.LogKV("getinvestigate|googleoauth|oauth|success");
u.ossLog('delay','all','kw=google_oauth_suc&value=1');
C&&C(L);
}
else if(L.errCode=="106")
{
I();
u.LogKV("getinvestigate|googleoauth|oauth|challengefail");
g.value=L.challengeData;
f.value=L.challengeCookies;
e.value=L.challengeAction;
t.showWarn("\u8EAB\u4EFD\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u9A8C\u8BC1");
if(y=="VerifySmsChallenge")
{
w.value="";
w.focus();
}
else if(y=="PhoneVerificationChallenge")
{
p.value="";
p.focus();
}
else if(y=="SecondChallenge")
{
r.value="";
r.focus();
}
else if(y=="AndroidTabletChallenge")
{
c.value="";
c.focus();
}
else if(y=="UnverifiedPhoneChallenge")
{
i.value="";
i.focus();
}
else if(y=="SecretQuestionChallenge")
{
s.value="";
s.focus();
}
else{
l.value="";
l.focus();
}
}
else{
L.errType&&u.LogKV("getinvestigate|googleoauth|fail|"+L.errType);
u.LogKV("getinvestigate|googleoauth|oauth|fail");
j.style.display="none";
t.doRealAction(a);
}
}
else{
u.LogKV("getinvestigate|googleoauth|oauth|fail");
j.style.display="none";
t.doRealAction(a);
}
}});
}
else{
var D="Email="+z+"&Passwd="+B;
u.showInfo("\u6B63\u5728\u9A8C\u8BC1\u5176\u4ED6\u90AE\u7BB1\u5E10\u53F7...");
u.QMAjax.send("/cgi-bin/googleoauth",{content:D,method:"POST",onload:function(J,K){
var L=u.evalValue(K);
if(J)
{
if(!L.errCode&&L["access_token"])
{
u.LogKV("getinvestigate|googleoauth|oauth|success");
u.ossLog('delay','all','kw=google_oauth_suc&value=1');
C&&C(L);
}
else if(L.errCode=="101")
{
I();
k.style.display="none";
q.value="";
q.focus();
t.showWarn("\u5E10\u53F7\u6216\u8005\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5");
}
else if(L.errCode=="102")
{
I();
v.setAttribute("src",decodeURIComponent(L.verifyImageUri)+"&sid="+u.getSid());
n.value=L.data;
m.value=L.cookies;
o.value="";
k.style.display="";
q.value="";
q.focus();
t.showWarn("\u5E10\u53F7\u6216\u8005\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5");
}
else if(L.errCode=="105")
{
I();
k.style.display="none";
g.value=L.challengeData;
f.value=L.challengeCookies;
e.value=L.challengeAction;
j.style.display="";
H(L.challengeType,L.secretQuestion);
}
else{
L.errType&&u.LogKV("getinvestigate|googleoauth|fail|"+L.errType);
u.LogKV("getinvestigate|googleoauth|oauth|fail");
t.doRealAction(a);
}
}
else{
u.LogKV("getinvestigate|googleoauth|oauth|fail");
t.doRealAction(a);
}
}});
}
},succ:function(a){
var b=this,c=getTop();
b._oDialog.setHtml("_body_",b._oTmpl.replace({"step":"3","username":a.username}));
b._oDialog.reloadLeftWin=true;
b._oDialog.S("geCancelBtn").onclick=function(){
b.receiveMail(a);
c.goUrlMainFrm(["/cgi-bin/foldermgr?sid=",c.getSid(),"&fun=detailpop&t=pop_detail&folderid=",a.folderid,"&acctid=",a.acctid,"&s=maillist"].join(""));
};
b._oDialog.S("geConfirmBtn").onclick=function(){
b.receiveMail(a);
c.goUrlMainFrm(["/cgi-bin/mail_list?sid=",c.getSid(),"&folderid=",a.folderid,"&page=0&ftype=pop"].join(""));
};
},receiveMail:function(a){
var c=this,b=[c._oDialog.S("radio_7").checked,c._oDialog.S("radio_all").checked];
c._oDialog.close();
if(b[0])
{
recvPop(a.acctid);
setPopFlag(a.acctid,"recent","1");
}
else if(b[1])
{
recvPop(a.acctid);
recvPopAll();
}
},showError:function(b,a){
var c="";
if(b=="-137")
{
c="\u90AE\u4EF6\u670D\u52A1\u5668\u72B6\u6001\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5";
}
else if(b=="-121")
{
c="\u5DF2\u6DFB\u52A0\u8FC7\u8BE5\u90AE\u7BB1";
}
else if(b=="-201")
{
c="\u90AE\u7BB1\u5BC6\u7801\u586B\u5199\u9519\u8BEF\u6216\u6F0F\u586B\uFF0C\u8BF7\u68C0\u67E5";
}
else if(b=="-202")
{
c="\u4F60\u7684\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5";
}
else if(b=="-203")
{
c="\u5BF9\u65B9POP3\u670D\u52A1\u5668\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5";
}
else if(b=="-204")
{
c="\u63A5\u6536\u90AE\u4EF6\u670D\u52A1\u5668\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u586B\u5199\u6B63\u786E";
}
else if(b=="-205")
{
c="\u7F51\u7EDC\u94FE\u63A5\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5";
}
else if(b=="-206")
{
c="\u90AE\u7BB1\u5730\u5740\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5";
}
else if(b=="-207")
{
if(a)
{
c="Gmail\u63A5\u53E3\u9A8C\u8BC1\u5931\u8D25\uFF0C\u6682\u65F6\u65E0\u6CD5\u6DFB\u52A0Gmail\u5E10\u53F7";
}
else{
c="\u5E10\u53F7\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5";
}
}
else if(b=="-208"||b=="-209")
{
c="\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5";
}
else if(b=="-210")
{
c="\u8BF7\u8F93\u5165\u63A5\u6536\u90AE\u4EF6\u670D\u52A1\u5668(POP)";
this._oDialog.S("div_addAccount_login").className="addAccount_login_More";
this._oDialog.S("div_popsvr").style.display="";
this._oDialog.S("ipt_popserver").focus();
}
else if(b=="-211")
{
c="\u6682\u4E0D\u652F\u6301hotmail\u548Cmsn\u5E10\u53F7";
}
else if(b=="-212")
{
c="\u5BF9\u65B9\u670D\u52A1\u5668\u7E41\u5FD9\uFF0C\u8FDE\u63A5\u5931\u8D25";
}
else if(b=="-500")
{
c="\u60A8\u7684Gmail\u90AE\u7BB1\u672A\u5F00\u901APOP\u670D\u52A1\uFF0C\u8BF7\u767B\u5F55\u8BE5\u90AE\u7BB1\u5F00\u542FPOP\u670D\u52A1";
}
else if(b=="-501")
{
c="\u90AE\u7BB1\u5730\u5740\u6216\u5BC6\u7801\u9519\u8BEF";
}
else if(b=="-510")
{
c="\u8BE5\u90AE\u7BB1\u5730\u5740\u672A\u5F00\u901APOP\u670D\u52A1\uFF0C\u8BF7\u767B\u5F55\u8BE5\u90AE\u7BB1\u5F00\u542FPOP\u670D\u52A1";
}
else if(b=="-511")
{
c="\u90AE\u7BB1\u5730\u5740\u6216\u5BC6\u7801\u9519\u8BEF";
}
else if(b=="-512")
{
c="\u8BE5\u90AE\u7BB1\u5730\u5740\u4E0D\u5B58\u5728";
}
else if(b=="-520")
{
c="\u60A8\u7684\u7F51\u6613\u90AE\u7BB1\u672A\u5F00\u901APOP\u670D\u52A1";
}
else if(b=="-521")
{
c="\u90AE\u7BB1\u5730\u5740\u6216\u5BC6\u7801\u9519\u8BEF";
}
else if(b=="-522")
{
c="\u8BE5\u90AE\u7BB1\u5730\u5740\u5DF2\u7ECF\u88AB\u7F51\u6613\u516C\u53F8\u51BB\u7ED3";
}
else if(b=="-523")
{
c="\u60A8\u7684\u7F51\u6613\u90AE\u7BB1\u672A\u5F00\u901APOP\u670D\u52A1";
}
else if(b=="-530")
{
c="\u90AE\u7BB1\u5730\u5740\u6216\u5BC6\u7801\u9519\u8BEF";
}
else if(b=="-531")
{
c="\u8BF7\u8BE5\u90AE\u7BB1\u5730\u5740\u4E0D\u5B58\u5728";
}
else if(b=="-540")
{
c="\u60A8\u7684\u96C5\u864E\u90AE\u7BB1\u53EF\u80FD\u672A\u5F00\u901APOP\u670D\u52A1\uFF0C\u6216\u8005\u90AE\u7BB1\u5730\u5740\u548C\u5BC6\u7801\u9519\u8BEF";
}
else if(b=="-550")
{
c="\u8BE5\u90AE\u7BB1\u5730\u5740\u4E0D\u5B58\u5728";
}
else if(b=="-551")
{
c="\u90AE\u7BB1\u5730\u5740\u6216\u5BC6\u7801\u9519\u8BEF";
}
else if(b=="-560")
{
c="\u90AE\u7BB1\u5730\u5740\u6216\u5BC6\u7801\u9519\u8BEF";
}
else if(b=="-570")
{
c="\u8BE5\u90AE\u7BB1\u5730\u5740\u4E0D\u5B58\u5728";
}
else if(b=="-571")
{
c="\u90AE\u7BB1\u5730\u5740\u6216\u5BC6\u7801\u9519\u8BEF";
}
else if(b=="-572")
{
c="\u6587\u4EF6\u5939\u6570\u91CF\u592A\u591A";
}
else if(b=="-121")
{
c="\u6587\u4EF6\u5939\u5DF2\u7ECF\u5B58\u5728";
}
else if(b=="-131")
{
c="\u4E0D\u80FD\u6DFB\u52A0\u81EA\u5DF1\u7684\u90AE\u7BB1";
}
else if(b=="-510")
{
c="\u6DFB\u52A0\u7684\u90AE\u7BB1\u672A\u5F00\u542FPOP\u529F\u80FD";
}
else if(b=="-156")
{
c="\u8D85\u8FC7\u6700\u5927\u7684POP\u90AE\u7BB1\u6570\u91CF";
}
else if(b=="-141"||b=="-135")
{
c="\u5DF2\u7ECF\u6DFB\u52A0\u8FC7\u8BE5\u90AE\u7BB1";
}
else{
c="\u5E10\u53F7\u6DFB\u52A0\u5931\u8D25";
}
this.showWarn(c);
}});
function toBindAccountPage()
{
var b=getTop(),a=arguments.callee,c=a.getPtloginUrl({"uin":"0"});
b.loadCssFile("$css_path$login/bindAccount24e6b9.css",true,b.document);
a._oDialog=new b.QMDialog({sId:"id_bindAccount",sTitle:"\u5173\u8054\u5DF2\u6709\u90AE\u7BB1",nWidth:440,sBodyHtml:a._oTmpl.replace({"step":"1","ptloginurl":c}),bAnimation:false,onload:function(){
var d=this;
b.ptlogin2_onResize=a.ptlogin2OnResize(d);
b.ptloginResize();
},onshow:function(){
var d=this;
d.S("geCancelBtn").onclick=function(){
d.close();
};
},onbeforeclose:function(){
var d=this;
d.S("importFrame")&&removeSelf(d.S("importFrame"));
}});
}
getTop().extend(toBindAccountPage,_oOidbAccountBase,{_oTmpl:getTop().TE(['$@$if($step$=="1")$@$','<div id="div_frame_container" class="qui_dialogPtlogin">','<div id="dialogPtloginTitle" class="qui_dialogPtlogin_title">','<div class="qui_dialogPtlogin_label qui_dialogPtlogin_label_Uin">\u5173\u8054\u5E10\u53F7</div>','<div class="qui_dialogPtlogin_label">\u5BC6\u7801</div>','</div>','<div id="importFrameWrap" class="qui_dialogPtlogin_cnt">','<iframe frameborder="0" width="100%" src="$ptloginurl$" id="importFrame" allowtransparency="true"></iframe>','</div>','</div>','<a href="javascript:;" id="geCancelBtn" class="qui_btn qui_dialogPtlogin_cancel">\u53D6\u6D88</a>','$@$else if($step$=="2")$@$','<div class="bindAccount_succeed">','<div class="qui_clear bindAccount_succeed_tip">','<span class="bindAccount_succeed_img"></span>','<span class="bindAccount_succeed_desc">\u6210\u529F\u5173\u8054\u4E86<span class="qui_txtBold">$username$</span></span>','</div>','</div>','<div class="dialog_operate" id="geFinishBtn_wrap">','<a href="javascript:;" id="geFinishBtn" class="qui_btn">\u5B8C\u6210</a>','</div>','$@$else if($step$=="3")$@$','$@$if($isExitBind$=="1")$@$','<dd>','<div>','<span class="num">$username$</span>','<a href="/cgi-bin/bind?fun=unbind&uin=$uin$&sid=$sid$" target="actionFrame">\u53D6\u6D88\u5173\u8054</a>','</div>','</dd>','$@$else$@$','<dl style="margin-bottom:8px;" id="dl_hasbinds">','<dt style="margin:0;" class="f_size addrtitle">\u4F60\u5DF2\u5173\u8054\u7684\u5907\u7528\u90AE\u7BB1\uFF1A</dt>','<dd>','<div>','<span class="num">$username$</span>','<a href="/cgi-bin/bind?fun=unbind&uin=$uin$&sid=$sid$" target="actionFrame">\u53D6\u6D88\u5173\u8054</a>','</div>','</dd>','<dl>','$@$endif$@$','$@$endif$@$']),getCssVer:function(){
if(!this._msVer)
{
var a=getTop().getRes("$css_path$qui_dialogPtlogin327bfb.css"),b=(/qui_dialogPtlogin(.*)\.css/.test(a)&&RegExp.$1)||"";
this._msVer=b;
}
return this._msVer;
},getDefaultCfg:function(){
var a=this;
if(!a._oDefaultCfg)
{
a._oDefaultCfg={"topHost":_oTop.getTopHost(),"sid":_oTop.getSid(),"topProtocol":_oTop.location.protocol,"ver":a.getCssVer(),"loginDesc":encodeURIComponent('\u786E\u8BA4\u5173\u8054'),"cssFilename":"qui_dialogPtlogin"};
}
return a._oDefaultCfg;
},ptlogin2OnResize:function(a){
return function(h,f){
var d=a.S("importFrame"),c=a._moPanelDom,e=a.S("dialogPtloginTitle"),b=a.S("geCancelBtn");
if(d)
{
d.style.height=f+'px';
if(f>=288&&f<=295&&d.contentWindow.frames.length>0)
{
getTop().addClass(c,'qm_dialog_HideChild');
e.style.display='none';
function g()
{
setTimeout(function(){
if(d.contentWindow.frames.length==0)
{
getTop().rmClass(c,'qm_dialog_HideChild');
}
else if(getTop().hasClass(c,"qm_dialog_HideChild"))
{
g();
}
},100);
}
g();
}
else{
getTop().rmClass(c,'qm_dialog_HideChild');
e.style.display='block';
}
if(f>=199&&f<=298)
{
e.style.top='49px';
}
else{
e.style.top='34px';
}
}
if(b)
{
b.style.zoom='normal';
b.style.zoom='1';
}
};
},doBindQQAction:function(a){
var b=this;
b._oDialog.S("dialogPtloginTitle").style.display="none";
b._oDialog.S("importFrame").style.height="138px";
b._oDialog.S("geCancelBtn").style.display="none";
_oTop.showInfo("\u6B63\u5728\u5173\u8054\u90AE\u7BB1\u5E10\u6237...",500);
_oTop.QMAjax.send(_oTop.T(["/cgi-bin/bind?sid=$sid$&fromzc=&fun=bind&mailaddr=$mailaddr$&fromzc=&t=mailpotl.json","&uin=$uin$&aliastype=$aliastype$&verifycode="]).replace({"sid":a.sid,"mailaddr":a.sLoginaccount,"uin":a.uin,"aliastype":a.sAliasType}),{content:"",method:"POST",onload:function(c,d){
if(c)
{
var f=_oTop.evalValue(d);
try{
b.complete(_oTop.extend(f,{"account":a.sLoginaccount,"uin":a.uin}));
}
catch(g)
{
_oTop.showError("\u5173\u8054\u5E10\u6237\u5931\u8D25...");
}
}
else{
_oTop.showError("\u5173\u8054\u5E10\u6237\u5931\u8D25...");
}
}});
},complete:function(a){
var c=this,d=getTop();
if(a.succ==="0")
{
var e=c.getPtloginUrl({"uin":(a.account||"0")});
c._oDialog.setHtml("_body_",c._oTmpl.replace({"step":"1","ptloginurl":e}));
c._oDialog.S("geCancelBtn").onclick=function(){
c._oDialog.close();
};
a.failtype&&c.showError(a.failtype);
}
else if(a.succ==="1")
{
c._oDialog.setHtml("_body_",c._oTmpl.replace({"step":"2","username":a.account}));
var b=d.S("dl_hasbinds",d.getMainWin()),f=b?"1":"0",b=b||d.S("div_binds",d.getMainWin());
d.insertHTML(b,"beforeEnd",c._oTmpl.replace({"step":"3","username":a.account,"uin":a.uin,"sid":d.getSid(),"isExitBind":f}));
c._oDialog.S("geFinishBtn").onclick=function(){
c._oDialog.close();
};
}
},showError:function(a){
var b=getTop(),c="";
if(a=="-101")
{
c="\u90AE\u7BB1\u5730\u5740\u4E3A\u7A7A";
}
else if(a=="-116")
{
c="\u9A8C\u8BC1\u9891\u7387\u9650\u5236";
}
else if(a=="-100")
{
c="\u90AE\u7BB1\u5730\u5740\u9519\u8BEF";
}
else if(a=="-103")
{
c="\u4E0D\u80FD\u7ED1\u5B9A\u81EA\u5DF1\u7684\u90AE\u7BB1";
}
else if(a=="-104")
{
c="\u5DF2\u7ECF\u7ED1\u5B9A";
}
else if(a=="-117")
{
c="\u90AE\u7BB1\u9A8C\u8BC1\u5931\u8D25";
}
else if(a=="-106"||a=="-114")
{
c="\u7CFB\u7EDF\u5931\u8D25";
}
else{
c="\u5173\u8054\u90AE\u7BB1\u5931\u8D25";
}
b.showError(c);
}});
function str2JSON(str)
{
eval('var __pt_json='+str);
return __pt_json;
}
function ptloginResize()
{
var a=this;
if(typeof window.postMessage!=='undefined')
{
window.onmessage=function(c){
var d=c||window.event;
var b;
if(typeof JSON!=='undefined')
b=JSON.parse(d.data);
else b=window.str2JSON(d.data);
switch(b.action)
{case 'close':
break;
case 'resize':
window.ptlogin2_onResize(b.width,b.height);
break;
default:
break;
}
};
}
}
function closeAccount()
{
var b=this,c=getTop(),a=c.S("closeMailPtlogin_wrapper",c.getMainWin());
c.getMainWin()._bUnfresh=true;
a&&(a.style.display="none");
c.getMainWin().document.body.className="qui_funcOpa0";
c.goUrlMainFrm(c.T(["/cgi-bin/doaccount?sid=$sid$&step=1&ts=&pwd=$pwd$&rawpwd=&pwdtype=1&t=closeaccount"]).replace({"sid":c.getSid()}));
c.waitFor(function(){
return !(c.getMainWin()._bUnfresh);
},function(d){
oTop.getMainWin().document.body.className="";
},100);
}
function toAuthorizeWeiyun()
{
var b=getTop(),a=arguments.callee;
b.loadCssFile("$css_path$login/addAccount327bfb.css",true,b.document);
a._oDialog=new b.QMDialog({sId:"id_AuthorizeWeiyun",sTitle:"\u6388\u6743\u5FAE\u4E91",nWidth:440,sBodyHtml:a._oTmpl.replace({"username":b.getUin(),"ptloginurl":a.getPtloginUrl({"uin":b.getUin()})}),bAnimation:false,onshow:function(){
var c=this;
getTop().ptlogin2_onResize=a.ptlogin2OnResize(c);
getTop().ptloginResize();
c.S("geCancelBtn").onclick=function(){
c.close();
};
},onclose:function(){
if(this.reloadLeftWin)
{
reloadLeftWin();
}
},onbeforeclose:function(){
var c=this;
c.S("importFrame")&&removeSelf(c.S("importFrame"));
}});
}
getTop().extend(toAuthorizeWeiyun,_oOidbAccountBase,{_oTmpl:getTop().TE(['<div id="div_stepPassword" class="addAccount_step addAccount_step_Password">','<div id="div_warning" class="addAccount_errorTip"></div>','<div id="div_username" class="addAccount_step_usernameShow">$username$</div>','<div class="addAccount_ptlogin">','<iframe frameborder="0" width="100%" src="$ptloginurl$" id="importFrame" allowtransparency="true"></iframe>','</div>','</div>','<div class="addAccount_loadingWrap" style="display: none;" id="div_loading">','<span class="addAccount_loading"></span>','</div>','<div class="dialog_operate addAccount_foot" id="div_foot">','<a href="javascript:;"  id="geCancelBtn" class="qui_btn addAccount_foot_cancel">\u53D6\u6D88</a>','</div>']),_PTLOGIN_TEMP:getTop().T(["https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=522005705&daid=4&s_url=$topHost$/cgi-bin/readtemplate?","sid=$sid$%26t=netdrive_pt&style=25&low_login=0&proxy_url=$topProtocol$","//mail.qq.com/proxy.html&need_qr=0&hide_border=1&border_radius=0&self_regurl=http://zc.qq.com/chs/index.html?","type=1&app_id=11005?t=regist&pt_feedback_link=http://support.qq.com/discuss/350_1.shtml&css=https://","res.mail.qq.com/zh_CN/htmledition/style/$cssFilename$$ver$.css&target=self&hide_title_bar","=1&default_uin=$uin$&pt_no_auth=1&login_text=$loginDesc$&enable_qlogin=0"]),getCssVer:function(){
if(!this._msVer)
{
var a=getTop().getRes("$css_path$addAccountPtlogin24ca06.css"),b=(/addAccountPtlogin(.*)\.css/.test(a)&&RegExp.$1)||"";
this._msVer=b;
}
return this._msVer;
},getDefaultCfg:function(){
var a=this;
if(!a._oDefaultCfg)
{
a._oDefaultCfg={"topHost":_oTop.getTopHost(),"sid":_oTop.getSid(),"topProtocol":_oTop.location.protocol,"ver":a.getCssVer(),"loginDesc":encodeURIComponent('\u6388\u6743'),"ptfun":"addother","cssFilename":"addAccountPtlogin"};
}
return a._oDefaultCfg;
},ptlogin2OnResize:function(a){
return function(j,h){
var d=a.S("importFrame"),c=a._moPanelDom,f=a.S("div_stepPassword"),g=a.S("div_username"),b=a.S("geCancelBtn"),e=a.S("btlogin");
if(d)
{
d.style.height=h+'px';
if(h>=288&&h<=295&&d.contentWindow.frames.length>0)
{
getTop().addClass(c,'qm_dialog_HideChild');
b.style.display='none';
f.style.height=h+'px';
function i()
{
setTimeout(function(){
if(d.contentWindow.frames.length==0)
{
getTop().rmClass(c,'qm_dialog_HideChild');
b.style.display='inline-block';
f.style.height='95px';
d.style.height='166px';
}
else if(getTop().hasClass(c,"qm_dialog_HideChild"))
{
i();
}
},100);
}
i();
}
else{
getTop().rmClass(c,'qm_dialog_HideChild');
b.style.display='inline-block';
f.style.height=(h-66)+'px';
}
if(h>=171&&h<=290)
{
g.style.marginTop='15px';
}
else{
g.style.marginTop='0';
}
}
if(b)
{
b.style.zoom='normal';
b.style.zoom='1';
}
if(e)
{
e.style.zoom='normal';
e.style.zoom='1';
}
};
},doAction:function(){
var b=getTop(),a=this;
b.QMNetDisk.bind("weiyun");
a._oDialog.close();
}});
var getOuterRes=(function(){
var a={'comm2010.css':'$css_path$comm2010373a9b.css'};
return function(b){
var c=a[b];
return c&&getRes(c);
};
})();
(function(a){
var f=getTop(),g,b,d,c,e=["compose_upload_report","hub_upload_report"];
function l()
{
return ((["1021274442","171114571","348397568","1994493221","2450306721","78491939"].indexOf(f.getUin()))>-1);
}
function n(o)
{
var p='{';
for(key in o)
{
p+='"'+key+'":"'+o[key]+'",';
}
p=p.replace(/,$/,"");
p+="}";
return p;
}
function k(p,o)
{
g=e[0],b=o&&o.num||0,d=evalValue(f.QMLocalStorage.getUserItem(g)||"")||{},c=parseInt(d[p]||0);
}
function j(p,o)
{
k(p,o);
c+=(b||1);
d[p]=c;
f.QMLocalStorage.setUserItem(g,n(d));
}
function i(p,o)
{
k(p,o);
if(c===0)
{
return;
}
c-=(b||1);
d[p]=c;
f.QMLocalStorage.setUserItem(g,n(d));
}
function m()
{
var r=f.QMLocalStorage.getUserItem(e[0]),o=false,p=l(),q;
if(!r)
{
return;
}
r=evalValue(r)||{};
for(uploader in r)
{
q=r[uploader]||0;
if(q>0)
{
o=true;
}
}
f.QMLocalStorage.removeUserItem(e[0]);
}
function h(o)
{
f.QMLocalStorage.removeUserItem(e[0]);
}
a.increaseUploadCount=j;
a.decreaseUploadCount=i;
a.reportUploadCrash=m;
a.clearUploadCount=h;
})(window);
