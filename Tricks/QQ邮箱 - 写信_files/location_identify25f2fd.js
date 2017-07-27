(function(){
var k={"level":[["\u6CB3\u5317","\u5C71\u897F","\u5185\u8499\u53E4\u81EA\u6CBB\u533A","\u8FBD\u5B81","\u5409\u6797","\u9ED1\u9F99\u6C5F","\u6C5F\u82CF","\u6D59\u6C5F","\u5B89\u5FBD","\u798F\u5EFA","\u6C5F\u897F","\u5C71\u4E1C","\u6CB3\u5357","\u6E56\u5317","\u6E56\u5357","\u5E7F\u4E1C","\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A","\u6D77\u5357","\u56DB\u5DDD","\u8D35\u5DDE","\u4E91\u5357","\u897F\u85CF\u81EA\u6CBB\u533A","\u9655\u897F","\u7518\u8083","\u9752\u6D77","\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A","\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A"],["\u5317\u4EAC","\u5929\u6D25","\u77F3\u5BB6\u5E84","\u5510\u5C71","\u79E6\u7687\u5C9B","\u90AF\u90F8","\u90A2\u53F0","\u4FDD\u5B9A","\u5F20\u5BB6\u53E3","\u627F\u5FB7","\u6CA7\u5DDE","\u5ECA\u574A","\u592A\u539F","\u5927\u540C","\u547C\u548C\u6D69\u7279","\u5305\u5934","\u6C88\u9633","\u5927\u8FDE","\u978D\u5C71","\u961C\u65B0","\u8FBD\u9633","\u957F\u6625","\u5409\u6797","\u54C8\u5C14\u6EE8","\u4E0A\u6D77","\u5357\u4EAC","\u65E0\u9521","\u5F90\u5DDE","\u5E38\u5DDE","\u82CF\u5DDE","\u676D\u5DDE","\u5B81\u6CE2","\u6E29\u5DDE","\u5609\u5174","\u6E56\u5DDE","\u7ECD\u5174","\u91D1\u534E","\u5408\u80A5","\u829C\u6E56","\u868C\u57E0","\u9EC4\u5C71","\u798F\u5DDE","\u53A6\u95E8","\u8386\u7530","\u4E09\u660E","\u6CC9\u5DDE","\u6F33\u5DDE","\u666F\u5FB7\u9547","\u6D4E\u5357","\u9752\u5C9B","\u6DC4\u535A","\u67A3\u5E84","\u4E1C\u8425","\u70DF\u53F0","\u6F4D\u574A","\u90D1\u5DDE","\u5F00\u5C01","\u6D1B\u9633","\u6B66\u6C49","\u9EC4\u77F3","\u5341\u5830","\u5B9C\u660C","\u8944\u9633","\u957F\u6C99","\u682A\u6D32","\u6E58\u6F6D","\u5E7F\u5DDE","\u97F6\u5173","\u6DF1\u5733","\u73E0\u6D77","\u6C55\u5934","\u4F5B\u5C71","\u60E0\u5DDE","\u4E1C\u839E","\u5357\u5B81","\u67F3\u5DDE","\u6842\u6797","\u4E09\u4E9A","\u4E94\u6307\u5C71","\u743C\u6D77","\u91CD\u5E86","\u6210\u90FD","\u81EA\u8D21","\u6500\u679D\u82B1","\u9075\u4E49","\u6606\u660E","\u4E3D\u6C5F","\u666E\u6D31","\u62C9\u8428","\u897F\u5B89","\u94DC\u5DDD","\u5B9D\u9E21","\u54B8\u9633","\u5170\u5DDE","\u5609\u5CEA\u5173","\u897F\u5B81","\u94F6\u5DDD","\u4E4C\u9C81\u6728\u9F50","\u514B\u62C9\u739B\u4F9D","\u5410\u9C81\u756A\u5730\u533A"]]};
var h=k.level;
var l=k.nextLevel;
var j={};
var m='[^\\s\\uff01\\u0021\\uff1a\\u003a\\u201c\\u0022\\u2018\\u0027\\u003c\\u003e\\uff1f\\u003f\\uff0c\\u002c\\u3002\\u002e\\uff08\\uff09\\(\\)\uFF1B\u3001~\uFF5E]';
var a='[\\u4e00-\\u9fa5]';
var b=['\u9547','\u4E61','\u8DEF','\u8DEF\u53E3','\u8857','\u95E8','\u5C0F\u533A','\u53F7','\u5BA4','\u697C','\u680B','\u623F','\u56ED','\u82D1','\u516C\u56ED','\u6CB3','\u5C71','\u6865','\u5BE8','\u6E7E','\u5C7F','\u9986','\u7AD9','\u5E97','\u5385','\u573A','\u5E7F\u573A','\u5382','\u9152\u5427','\u5927\u53A6','\u53E3\u5CB8','\u4E2D\u5FC3','\u5927\u5B66','\u4E2D\u5B66','\u5C0F\u5B66','\u5B66\u6821','\u519B\u6821','\u5B66\u9662','\u9053','\u5904','\u5C40','\u57CE','\u90E8','\u9662','\u6751','\u5C42','\u5EA7','\u68AF','\u529E\u4E8B\u5904','\u9057\u5740','\u7EAA\u5FF5\u5802','\u53F7\u8DEF','\u53F7\u8857','\u53F7\u5BA4','\u53F7\u697C','\u53F7\u623F'];
var f=new RegExp('^((?:'+m+'{1,13}[\\d]{0,3})(?:'+b.join('|')+'))+');
for(var e=0,g=h.length;e<g;++e)
{
if(e==0)
{
j[e]=new RegExp('(\\s*(?:'+h[e].join('|')+')\u7701?)([^\\n]{1,100})');
}
else if(e==1)
{
j[e]=new RegExp('(\\s*(?:'+h[e].join('|')+')\u5E02?|'+a+'{2,8}?(?:\u5E02|\u81EA\u6CBB\u5DDE))([^\\n]{1,100})');
}
}
j[2]=new RegExp('(\\s*'+a+'{2,12}?(?:\u81EA\u6CBB\u53BF|\u81EA\u6CBB\u65D7|\u533A|\u53BF|\u5E02)+?)([^\\n]{1,100})');
function d(v,q,p)
{
var o=-1,s,r,u,t,n,i;
if(s=j[q].exec(v))
{
o=s.index;
if(p&&o!=0)
{
if(q+1<3)
{
return d(v,q+1,p);
}
else if(p>1)
{
return {location:c(v),beginIndex:0};
}
return null;
}
r=s[1];
u=s[2];
if(q<2)
{
t=d(u,q+1,p+1);
t&&(t=t.location);
}
else if(p)
{
t=c(u);
}
if(t)
{
n={location:r+t,beginIndex:o};
}
else if(!p)
{
if(q<2)
{
n=d(v,q+1,p);
}
if(!n)
{
n=d(u,0,0);
n&&(n.beginIndex+=o);
}
}
}
else{
if(q+1<3)
{
n=d(v,q+1,p);
}
else if(p>1)
{
n={location:c(v),beginIndex:0};
}
}
if(!p&&n&&n.location&&q+1<3)
{
i=d(v,q+1,0);
if(i&&i.location&&i.beginIndex<n.beginIndex)
{
n=i;
}
}
return n;
}
function c(n)
{
var i;
if(i=f.exec(n))
{
return i[0];
}
}
locationIdentifier=function(o){
var v=+new Date();
var s=[];
var u=[];
if((new RegExp(b.join('|'))).test(o))
{
o=o.split('\n');
for(var p=0,q=o.length;p<q;++p)
{
var w=o[p];
var r=0;
var t;
var n=0;
while(n<w.length)
{
w=w.substr(n);
if(t=d(w,0,0))
{
s.push(t.location);
t.beginIndex&&u.push(w.substring(0,t.beginIndex));
u.push('<<<'+t.location+'>>>');
n=t.beginIndex+t.location.length;
}
else{
u.push(w);
break;
}
}
}
return {locations:s,resultStr:u.join(''),timeUsed:+new Date()-v};
}
return null;
};
})();
var locationIdentifier;
