var QMEditorExt={FUNC:{}};
QMEditorExt.dtd=(function(y){
function x(B)
{
for(var A in B)
{
B[A.toUpperCase()]=B[A];
}
return B;
}
function w(D)
{
var A=arguments;
for(var B=1;B<A.length;B++)
{
var E=A[B];
for(var C in E)
{
if(!D.hasOwnProperty(C))
{
D[C]=E[C];
}
}
}
return D;
}
var a=x({isindex:1,fieldset:1}),b=x({input:1,button:1,select:1,textarea:1,label:1}),c=w(x({a:1}),b),d=w({iframe:1},c),e=x({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),f=x({ins:1,del:1,script:1,style:1}),g=w(x({b:1,acronym:1,bdo:1,'var':1,'#':1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}),f),h=w(x({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}),g),i=w(x({p:1}),h),j=w(x({iframe:1}),h,b),k=x({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,'#':1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,'var':1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),l=w(x({a:0}),j),m=x({tr:1}),n=x({'#':1}),o=w(x({param:1}),k),p=w(x({form:1}),a,d,e,i),q=x({li:1,ol:1,ul:1}),r=x({style:1,script:1}),s=x({base:1,link:1,meta:1,title:1}),t=w(s,r),u=x({head:1,body:1}),v=x({html:1});
var z=x({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),W=x({area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1});
return x({$nonBodyContent:w(v,u,s),$block:z,$inline:l,$inlineWithA:w(x({a:1}),l),$body:w(x({script:1,style:1}),z),$cdata:x({script:1,style:1}),$empty:W,$nonChild:x({iframe:1,textarea:1}),$listItem:x({dd:1,dt:1,li:1}),$list:x({ul:1,ol:1,dl:1}),$isNotEmpty:x({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}),$removeEmpty:x({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1}),$removeEmptyBlock:x({'p':1,'div':1}),$tableContent:x({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),$notTransContent:x({pre:1,script:1,style:1,textarea:1}),html:u,head:t,style:n,script:n,body:p,base:{},link:{},meta:{},title:n,col:{},tr:x({td:1,th:1}),img:{},embed:{},colgroup:x({thead:1,col:1,tbody:1,tr:1,tfoot:1}),noscript:p,td:p,br:{},th:p,center:p,kbd:l,button:w(i,e),basefont:{},h5:l,h4:l,samp:l,h6:l,ol:q,h1:l,h3:l,option:n,h2:l,form:w(a,d,e,i),select:x({optgroup:1,option:1}),font:l,ins:l,menu:q,abbr:l,label:l,table:x({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),code:l,tfoot:m,cite:l,li:p,input:{},iframe:p,strong:l,textarea:n,noframes:p,big:l,small:l,span:x({'#':1,br:1,b:1,strong:1,u:1,i:1,em:1,sub:1,sup:1,strike:1,span:1}),hr:l,dt:l,sub:l,optgroup:x({option:1}),param:{},bdo:l,'var':l,div:p,object:o,sup:l,dd:p,strike:l,area:{},dir:q,map:w(x({area:1,form:1,p:1}),a,f,e),applet:o,dl:x({dt:1,dd:1}),del:l,isindex:{},fieldset:w(x({legend:1}),k),thead:m,ul:q,acronym:l,b:l,a:w(x({a:1}),j),blockquote:w(x({td:1,tr:1,tbody:1,li:1}),p),caption:l,i:l,u:l,tbody:m,s:l,address:w(d,i),tt:l,legend:l,q:l,pre:w(g,c),p:w(x({'a':1}),l),em:l,dfn:l});
})(QMEditorExt);
QMEditorExt.domUtils=(function(a,b){
var d=b.dtd;
var c={fillChar:a.gbIsIE&&a.gnIEDocTypeVer==6?'\ufeff':'\u200B',isWhitespace:function(e){
return !new RegExp('[^ \t\n\r'+c.fillChar+']').test(e.nodeValue);
},isEmptyInlineElement:function(e){
if(e.nodeType!=1||!d.$removeEmpty[e.tagName])
{
return 0;
}
e=e.firstChild;
while(e)
{
if(QMSelection.isBookmarkNode(e))
{
return 0;
}
if(e.nodeType==1&&!c.isEmptyInlineElement(e)||e.nodeType==3&&!c.isWhitespace(e))
{
return 0;
}
e=e.nextSibling;
}
return 1;
},clearEmptySibling:function(h,f,g){
function e(j,i)
{
var k;
while(j&&!QMSelection.isBookmarkNode(j)&&(c.isEmptyInlineElement(j)||!new RegExp('[^\t\n\r'+c.fillChar+']').test(j.nodeValue)))
{
k=j[i];
a.removeSelf(j);
j=k;
}
}
!f&&e(h.nextSibling,'nextSibling');
!g&&e(h.previousSibling,'previousSibling');
},breakParent:function(g,h){
var k,i=g,e=g,f,j;
do{
i=i.parentNode;
if(f)
{
k=i.cloneNode(false);
k.appendChild(f);
f=k;
k=i.cloneNode(false);
k.appendChild(j);
j=k;
}
else{
f=i.cloneNode(false);
j=f.cloneNode(false);
}
while(k=e.previousSibling)
{
f.insertBefore(k,f.firstChild);
}
while(k=e.nextSibling)
{
j.appendChild(k);
}
e=i;
}
while(h!==i);
k=h.parentNode;
k.insertBefore(f,h);
k.insertBefore(j,h);
k.insertBefore(g,j);
a.removeSelf(h);
return g;
}};
return c;
})(getTop(),QMEditorExt);
var QMSelection=(function(a,d){
function b(i)
{
this._moRange=i;
}
;var g=['insertNode','setStartBefore','setEndBefore','setStartAfter','setEndAfter','collapse'];
var e=0;
var f=b.prototype={qmSelection:c,_getUinId:function(i){
var j;
do{
j=i+(++e);
}
while(this.S(j));
return j;
},S:function(i){
return a.S(i,this.getDoc());
},getDoc:function(){
return this.getNativeRange().commonAncestorContainer.ownerDocument;
},getWin:function(){
return a.getDomWin(this.getDoc().documentElement);
},getNativeRange:function(){
return this._moRange;
},isCollapsed:function(){
return this.getNativeRange().collapsed;
},cloneRange:function(){
var j=this.getNativeRange();
var i=j.cloneRange.apply(j,arguments);
return new b(i);
},createBookmark:function(){
var i=this.getDoc();
var j,k=i.createElement('span');
k.style.cssText='display:none;line-height:0px;';
k.appendChild(i.createTextNode('\u200D'));
k.id=this._getUinId('_editor_bookmark_start_');
if(!this.isCollapsed())
{
j=k.cloneNode(true);
j.id=this._getUinId('_editor_bookmark_end_');
}
this.insertNode(k);
if(j)
{
this.collapse();
this.insertNode(j);
this.setEndBefore(j);
}
this.setStartAfter(k);
return {oStartNode:k,oEndNode:j};
},gotoBookmark:function(j,i){
if(!j)
{
return this;
}
if(i)
{
this.updateBookmarkNode(j);
}
this.setStartBefore(j.oStartNode);
a.removeSelf(j.oStartNode);
if(j.oEndNode)
{
this.setEndBefore(j.oEndNode);
a.removeSelf(j.oEndNode);
}
else{
this.collapse(true);
}
return this;
},updateBookmarkNode:function(i){
if(!i)
{
return this;
}
i.oStartNode=this.S(i.oStartNode.id);
if(i.oEndNode)
{
i.oEndNode=this.S(i.oEndNode.id);
}
return this;
},isBookmarkNode:h,select:function(){
var i=this.qmSelection.getSelection(this.getWin()).getNativeSelection();
i.removeAllRanges();
i.addRange(this.getNativeRange());
return this;
},clear:function(i){
this.collapse(i);
this.select();
return this;
}};
b.isBookmarkNode=h;
a.E(g,function(i){
f[i]=function(){
var j=this.getNativeRange();
j[i].apply(j,arguments);
return this;
};
});
function h(i)
{
return i.nodeType==1&&i.id&&/^_editor_bookmark_/i.test(i.id);
}
function c(i)
{
this._moWin=i;
this._moSelection=null;
this._init();
}
;c.prototype={_init:function(){
this._moSelection=this._moWin.document.getSelection();
},getNativeSelection:function(){
return this._moSelection;
},getRange:function(){
return new b(this.getNativeSelection().getRangeAt(0));
},clear:function(){
var i=this.getRange();
i.clear.apply(i,arguments);
return this;
}};
c.getSelection=function(i){
return new c(i);
};
c.QMExtRange=b;
c.isBookmarkNode=h;
return c;
})(getTop(),QMEditorExt);
