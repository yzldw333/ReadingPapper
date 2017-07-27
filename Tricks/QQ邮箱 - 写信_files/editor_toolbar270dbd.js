(function(a,b){
a.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_SEPERATE:"\u95F4\u9694\u7EBF",FUN_BOLD:"\u52A0\u7C97",FUN_ITALIC:"\u659C\u4F53",FUN_UNDERLINE:"\u4E0B\u5212\u7EBF",FUN_FONTNAME:"\u9009\u62E9\u5B57\u4F53",FUN_FONTSIZE:"\u9009\u62E9\u5B57\u4F53\u5927\u5C0F",FUN_FORECOLOR:"\u9009\u62E9\u5B57\u4F53\u989C\u8272",FUN_BACKCOLOR:"\u9009\u62E9\u80CC\u666F\u989C\u8272",FUN_ALIGNMODE:"\u9009\u62E9\u5BF9\u9F50\u65B9\u5F0F",FUN_SERIAL:"\u8BBE\u7F6E\u7F16\u53F7",FUN_INDENT:"\u8BBE\u7F6E\u7F29\u8FDB",FUN_QUOT:"\u5F15\u7528\u5185\u5BB9",FUN_CREATELINK:"\u63D2\u5165/\u79FB\u9664\u94FE\u63A5",FUN_SOURCEEDIT:"\u7F16\u8F91HTML\u6E90\u7801",FUN_PREVIEW:"\u9884\u89C8",FUN_UPLOADEML:"\u4E0A\u4F20eml\u6587\u4EF6",FS_XXSMALL:"\u5C0F",FS_XSMALL:"\u4E2D",FS_MEDIUM:"\u5927",FS_LARGE:"\u8F83\u5927",FS_XLARGE:"\u6700\u5927",AM_LEFT:"\u5DE6\u5BF9\u9F50",AM_CENTER:"\u5C45\u4E2D\u5BF9\u9F50",AM_RIGHT:"\u53F3\u5BF9\u9F50",SL_NUMBER:"\u6570\u5B57\u7F16\u53F7",SL_PROJECT:"\u9879\u76EE\u7F16\u53F7",IT_INDENT:"\u5411\u53F3\u7F29\u8FDB",IT_OUTDENT:"\u5411\u5DE6\u7F29\u8FDB",CL_NAME:"\u6587\u5B57\uFF1A",CL_LINK:"\u94FE\u63A5\uFF1A",CL_MODIFY:"\u4FEE\u6539",CL_DELETE:"\u79FB\u9664",CL_CONFIRM:"\u6DFB\u52A0",CL_CANCEL:"\u53D6\u6D88",CL_NAME_DEF:"\u9ED8\u8BA4\u4F7F\u7528\u94FE\u63A5\u540D\u5B57",SE_PREVIEW:"\u8FD4\u56DE\u53EF\u89C6\u5316\u7F16\u8F91",SE_PREVIEW_TITLE:"\u6240\u89C1\u5373\u6240\u5F97",SE_FORMAT:"\u683C\u5F0F\u5316",SE_FORMAT_TITLE:"\u4EE3\u7801\u683C\u5F0F\u5316",SE_FORMATTING:"\u6B63\u5728\u683C\u5F0F\u5316\uFF0C\u8BF7\u4E0D\u8981\u4FEE\u6539\u4EE3\u7801..."});
a.extend(QMEditor.CONST.getTemplate(),{_MENU_STATUS_ITEM:a.T(['<div class="qmEditorMenuStatusItem unselect" unselectable="on" style="$style$">$content$</div>']),_MENU_ICON_STATUS_ITEM:a.T(['<div class="qmEditorMenuIconStatusItem qmEditor$cmd$ unselect" unselectable="on" style="$style$">','<input class="qmEditorIcon" type="button" unselectable="on">','$content$','</div>']),_MENU_COLOR_CNTR:a.T(['<div id="qmEditorMenuColorCntr" class="unselect" unselectable="on">$html$</div>']),_MENU_COLOR:a.T(['<div class="qmEditorMenuItem" id="$id$" param="$color$" title="$color$" style="float:left;width:auto;height:auto;" unselectable="on" $event$ >','<div class="qmEditorMenuColor" param="$color$" style="background:$color$;" unselectable="on"></div>','</div>']),_MENU_BREAKLINE:a.T(['<br style="clear:both;">']),_MENU_SELECT_ITEM:a.T(['<b>&#187;</b>&nbsp;$content$']),_MENU_CREATELINK:a.T(['<div class="qmEditorMenuPanel" unselectable="on" >','<div id="name_cntr" class="qmEditorLinkDiv" unselectable="on" >','$langName$<input id="name" type="text" tabindex="1001"/> ','</div>','<div id="link_cntr" class="qmEditorLinkDiv" unselectable="on" >','$langLink$<input id="link" type="text"  tabindex="1002"/>','</div>','<div class="qmEditorLinkButton" unselectable="on" >','<a id="modify" class="btn_gray qmEditorLinkBtn" tabindex="1003">$langModify$</a>','<a id="delete" class="btn_gray qmEditorLinkBtn" tabindex="1004">$langDelete$</a>','<a id="confirm" class="btn_gray qmEditorLinkBtn" tabindex="1005">$langConfirm$</a>','<a id="cancel" class="btn_gray qmEditorLinkBtn" tabindex="1006">$langCancel$</a>','</div>','</div>']),BOTTON_ICON_SOURCEEDIT:a.TE(['<div class="qmEditorHtml qmEditorBtnIconHtml qmEditorBtnIcon unselect " unselectable="on">','<input type="button" class="qmEditorIcon" unselectable="on" onmousedown="return false;">','</div>']),SOURCEEDIT_TOOLBAR:a.TE(['<div class="qmEditorBtnA" style="float:right;padding:2px 5px 0 0;* padding:3px 5px 0 0;" unselectable="on" onmousedown="return false;" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" title="$formatTitle$" >','<span style="display:none;">','$langFormatting$<span></span>','</span>','<span>$langFormat$</span>','</div>','<div class="qmEditorBtnA qmEditorFormatBtn" unselectable="on" onmousedown="return false;" title="$previewTitle$" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'">','$langPreview$<b>&#187;</b>','</div>']),BOTTON_ICON_PREVIEW:a.TE(['<div class="qmEditorBtnA" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="$ui.style$;padding-left:0;" ',' unselectable="on" onmousedown="return false;" title="$title$" >$ui.langPreview$</div>']),BOTTON_ICON_UPLOADEML:a.TE(['<div class="qmEditorBtnA" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="$ui.style$;padding-left:0;" ',' unselectable="on" onmousedown="return false;" title="$ui.title$" >$ui.langUploadEml$</div>'])});
QMEditor.prototype._isCollapsed=function(){
var c=this.getEditWin();
if(c.getSelection)
{
var d=c.getSelection();
return d.isCollapsed||d.getRangeAt(0).collapsed;
}
else{
return this.getEditDoc().selection.type=="None";
}
};
QMEditor.prototype._hasAncestorNode=function(c){
var j=this,f=j.getEditWin(),h=j.getSelectionElement(),k=h,d=(a.gbIsIE||a.gbIsOpera);
while(k&&k.nodeName!=c)
{
k=k.parentNode;
}
if(k)
{
return true;
}
if(this._isCollapsed())
{
return false;
}
if(!d)
{
var i=h.previousSibling,g=h.nextSibling;
if(i&&i.nodeName==c)
{
var e=f.getSelection().containsNode(i,true);
if(e)
{
return true;
}
}
if(g&&g.nodeName==c)
{
var e=f.getSelection().containsNode(g,true);
if(e)
{
return true;
}
}
}
(function(l){
if(!l)
{
return;
}
if(l.nodeName==c)
{
k=l;
return;
}
for(var m=l.firstChild,n;m;m=n)
{
n=m.nextSibling;
arguments.callee(m);
}
})(d?h.parentNode:h);
return !!k;
};
QMEditor.prototype.changeEditMode=function(c){
var g=this.getEditMode();
if(g=="text")
{
return false;
}
if(g==c)
{
return true;
}
var d=c=="source",f=d?"source":"html",e=this.getSrceBody();
if(a.gbIsWebKit)
{
(d?this.getEditBody():e).blur();
}
a.show(e,d);
a.show(this.getEditObj(),!d);
a.show(this.getRichToolBarObj(),!d);
a.show(this.getSrceToolBarObj(),d);
this.setEditContent(f,this.getEditContent(d?"html":"source"));
this.setEditMode(f);
this.focus(0);
};
QMEditor.FUNCLIB._MENUSTATUS=QMEditor.FUNCLIB.inheritFrom(function(){
this.setId("MENUSTATUS");
this._msMenuItemTmpl=QMEditor.CONST.getTemplate()._MENU_STATUS_ITEM;
},QMEditor.FUNCLIB.MENU);
QMEditor.FUNCLIB._MENUSTATUS.prototype.getMenuItems=function(){
if(!this._moItemDatas)
{
var f=this._moMenuData,g=this._msMenuItemTmpl,h=this.getCmd()?"param":"cmd",e=[];
for(var j=0,c=f.length,d;j<c;j++)
{
d=f[j];
e[j]={sId:d[h],nHeight:d.height||"auto",sItemValue:g.replace(d)};
}
this._moItemDatas=e;
}
return this._moItemDatas;
};
QMEditor.FUNCLIB._MENUSTATUS.prototype.initMenu=function(c){
var e=this,d=e.getBindEditor(),f=e.getCmd();
if(f)
{
var g=d.queryCmdValue(f);
g&&c.selectItem(g);
}
else{
a.E(e._moMenuData,function(h){
c.itemOption(h.cmd,"bDisSelect",!d.queryCmdEnabled(h.cmd));
});
}
};
QMEditor.FUNCLIB._MENUSTATUS.prototype.doItemClick=function(c){
var e=this,d=e.getBindEditor(),f=e.getCmd();
f?d.execCmd(f,c):d.execCmd(c);
};
QMEditor.FUNCLIB._MENUICONSTATUS=QMEditor.FUNCLIB.inheritFrom(function(){
this.setId("MENUICONSTATUS");
this._msMenuItemTmpl=QMEditor.CONST.getTemplate()._MENU_ICON_STATUS_ITEM;
},QMEditor.FUNCLIB._MENUSTATUS);
QMEditor.FUNCLIB._MENUCOLOR=QMEditor.FUNCLIB.inheritFrom(function(){
this.setId("MENUCOLOR");
this._moMenuData=['#000000 #993300 #333300 #003300 #003366 #000080 #333399 #333333','#800000 #FF6600 #808000 #008000 #008080 #0000FF #666699 #808080','#FF0000 #FF9900 #99CC00 #339966 #33CCCC #3366FF #800080 #999999','#FF00FF #FFCC00 #FFFF00 #00FF00 #00FFFF #00CCFF #993366 #C0C0C0','#FF99CC #FFCC99 #FFFF99 #CCFFCC #CCFFFF #99CCFF #CC99FF #FFFFFF'];
},QMEditor.FUNCLIB.MENU);
QMEditor.FUNCLIB._MENUCOLOR.prototype.getMenuUI=function(c){
var f=this.getBindEditor(),i=f.getTemplate(),e=i._MENU_COLOR,g=i._MENU_ITEM_EVENT,d=i._MENU_BREAKLINE,h=[];
c.bAutoClose=true;
a.E(this._moMenuData,function(j){
a.E(j.split(" "),function(k){
h.push(e.replace({id:k.replace("#","C"),color:k,event:g}));
});
h.push(d);
});
return i._MENU_COLOR_CNTR.replace({html:h.join("")});
};
QMEditor.FUNCLIB._MENUCOLOR.prototype.initMenu=function(c){
var f=this,j=f.getCmd(),e=f.getBindEditor(),l=e.queryCmdValue(j);
a.addEvent(c.S("qmEditorMenuColorCntr"),"click",function(i){
var n=a.getEventTarget(i).getAttribute("param");
if(n)
{
f.hideMenu();
e.execCmd(j,n);
}
});
if(typeof (l)=="string")
{
var h=l.substring(4,l.length-1).split(",");
for(var m=0,d=h.length;m<d;m++)
{
h[m]=parseInt(a.trim(h[m])).toString(16);
if(h[m].length==1)
{
h[m]="0"+h[m];
}
}
l=h.join("");
}
else if(typeof (l)=="number")
{
h=[l.toString(16)];
for(var m=0,d=6-h[0].length;m<d;m++)
{
h.unshift("0");
}
h=h.join("").split("");
var k=h[0];
h[0]=h[4];
h[4]=k;
k=h[1];
h[1]=h[5];
h[5]=k;
l=h.join("");
}
else{
return;
}
l="#"+l;
var g=e.getTemplate()._MENU_SELECT_ITEM;
l=l.toString().toUpperCase();
(c.S(l.replace("#","C"))||{}).className="qmEditorMenuItemCheck";
};
QMEditor.FUNCLIB.Separate=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("Separate");
this.setType("label");
this.setBindEditor(c.editor);
this.setUiConfig({title:this.getBindEditor().getLanguage().FUN_SEPERATE});
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.Bold=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("Bold");
this.setCmd("Bold");
this.setType("btn");
this.setBindEditor(c.editor);
this.setUiConfig(a.extend(this.getUiConfig(),{icon:{title:this.getBindEditor().getLanguage().FUN_BOLD}}));
this.setfOnKeyDown(function(d){
if(d.ctrlKey&&d.keyCode==66)
{
this.getfDoDefaultClick()();
a.preventDefault(d);
}
});
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.Italic=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("Italic");
this.setCmd("Italic");
this.setType("btn");
this.setBindEditor(c.editor);
this.setUiConfig({title:this.getBindEditor().getLanguage().FUN_ITALIC});
this.setfOnKeyDown(function(d){
if(d.ctrlKey&&d.keyCode==73)
{
this.getfDoDefaultClick()();
a.preventDefault(d);
}
});
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.Underline=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("Underline");
this.setCmd("Underline");
this.setType("btn");
this.setBindEditor(c.editor);
this.setUiConfig({title:this.getBindEditor().getLanguage().FUN_UNDERLINE});
this.setfOnKeyDown(function(d){
if(d.ctrlKey&&d.keyCode==85)
{
this.getfDoDefaultClick()();
a.preventDefault(d);
}
});
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.FontName=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("FontName");
this.setCmd("FontName");
this.setBindEditor(c.editor);
this.setUiConfig({title:this.getBindEditor().getLanguage().FUN_FONTNAME});
var d=[{param:"\u5B8B\u4F53",style:"font-family:\u5B8B\u4F53",content:"\u5B8B\u4F53"},{param:"\u9ED1\u4F53",style:"font-family:\u9ED1\u4F53",content:"\u9ED1\u4F53"},{param:"\u6977\u4F53,\u6977\u4F53_GB2312",style:"font-family:\u6977\u4F53,\u6977\u4F53_GB2312",content:"\u6977\u4E66"},{param:"\u5E7C\u5706",style:"font-family:\u5E7C\u5706",content:"\u5E7C\u5706"}],e=[{param:"Arial",style:"font-family:Arial",content:"Arial"},{param:"Arial Black",style:"font-family:Arial Black;",content:"Arial Black"},{param:"Times New Roman",style:"font-family:Times New Roman",content:"Times New Roman"},{param:"Verdana",style:"font-family:Verdana",content:"Verdana"}];
if(getTop().getLocale()=="zh_CN")
{
this._moMenuData=d.concat(e);
}
else{
this._moMenuData=e;
}
},QMEditor.FUNCLIB._MENUSTATUS);
QMEditor.FUNCLIB.FontSize=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("FontSize");
this.setCmd("FontSize");
this.setBindEditor(c.editor);
var d=this.getBindEditor().getLanguage();
this.setUiConfig({title:d.FUN_FONTSIZE});
this._moMenuData=[{param:"1",style:"font-size:xx-small;",content:d.FS_XXSMALL},{param:"2",style:"font-size:x-small;",content:d.FS_XSMALL},{param:"4",style:"font-size:medium;",content:d.FS_MEDIUM},{param:"5",style:"font-size:large;",content:d.FS_LARGE},{param:"6",style:"font-size:x-large;",content:d.FS_XLARGE}];
},QMEditor.FUNCLIB._MENUSTATUS);
QMEditor.FUNCLIB.ForeColor=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("ForeColor");
this.setCmd("ForeColor");
this.setBindEditor(c.editor);
this.setUiConfig({title:this.getBindEditor().getLanguage().FUN_FORECOLOR});
},QMEditor.FUNCLIB._MENUCOLOR);
QMEditor.FUNCLIB.BackColor=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("BackColor");
this.setCmd(a.gbIsIE||a.gbIsWebKit?this.getId():"hilitecolor");
this.setBindEditor(c.editor);
this.setUiConfig({title:this.getBindEditor().getLanguage().FUN_BACKCOLOR});
},QMEditor.FUNCLIB._MENUCOLOR);
QMEditor.FUNCLIB.AlignMode=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("AlignMode");
this.setBindEditor(c.editor);
var d=this.getBindEditor().getLanguage();
this.setUiConfig({title:d.FUN_ALIGNMODE});
this._moMenuData=[{cmd:"JustifyLeft",content:d.AM_LEFT},{cmd:"JustifyCenter",content:d.AM_CENTER},{cmd:"JustifyRight",content:d.AM_RIGHT}];
},QMEditor.FUNCLIB._MENUICONSTATUS);
QMEditor.FUNCLIB.Serial=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("Serial");
this.setBindEditor(c.editor);
var d=this.getBindEditor().getLanguage();
this.setUiConfig({title:d.FUN_SERIAL});
this._moMenuData=[{cmd:"InsertorDeredlist",content:d.SL_NUMBER},{cmd:"InsertunorDeredlist",content:d.SL_PROJECT}];
},QMEditor.FUNCLIB._MENUICONSTATUS);
QMEditor.FUNCLIB.Quot=QMEditor.FUNCLIB.inheritFrom(function(c){
var d=this;
d.setId("formatblock");
d.setCmd("formatblock");
d.setType("btn");
d.setBindEditor(c.editor);
d.setUiConfig({title:d.getBindEditor().getLanguage().FUN_QUOT});
d.setfOnClick(d._fDoDefaultClick);
d.setfDoDefaultClick(d._fDoDefaultClick);
},QMEditor.FUNCLIB._MENUICONSTATUS);
QMEditor.FUNCLIB.Quot.prototype._fDoDefaultClick=function(c){
this.getBindEditor().queryFormatBlockState()?this._removeQuot(c):this._insertQuot(c);
};
QMEditor.FUNCLIB.Quot.prototype._insertQuot=function(c){
var e=this;
this.getBindEditor().execCmd(a.gbIsIE?"indent":"formatblock","blockquote",function(){
var h="margin:0.8em 0 0.8em 2em; padding:0 0 0 0.7em; border-left:2px solid #DDDDDD;",f=this.getSelectionElement(),g=f&&d(f);
if(g)
{
g.style.cssText=h;
a.attr(g,"formatblock",1);
g=f=b;
}
});
function d(f)
{
var j=f,g=0;
while(j&&j.tagName!="BLOCKQUOTE"&&(j.tagName=="OL"&&++g)<2)
{
j=j.parentNode;
}
if(j&&j.tagName=="OL")
{
var h=e.getBindEditor().getEditDoc().createElement("blockquote"),k=j.childNodes;
j.parentNode.insertBefore(h,j);
for(var m=0,n=k.length;m<n;m++)
{
h.appendChild(k[m]);
}
j.parentNode.removeChild(j);
j=h;
}
return j;
}
};
QMEditor.FUNCLIB.Quot.prototype._removeQuot=function(c){
this.getBindEditor().execCmd("outdent","blockquote",function(){
var d=this.getEditBody();
a.E(d.getElementsByTagName("blockquote"),function(e){
e&&!a.trim(e.innerHTML)&&e.parentNode.removeChild(e);
e=b;
});
a.gbIsIE&&a.E(d.getElementsByTagName("p"),function(e){
if(e&&a.attr(e,"formatblock"))
{
e.removeAttribute("formatblock");
e.style.cssText="";
}
e=b;
});
});
};
QMEditor.FUNCLIB.Indent=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("IndentMode");
this.setBindEditor(c.editor);
var d=this.getBindEditor().getLanguage();
this.setUiConfig({title:d.FUN_INDENT});
this._moMenuData=[{cmd:"Indent",content:d.IT_INDENT},{cmd:"Outdent",content:d.IT_OUTDENT}];
},QMEditor.FUNCLIB._MENUICONSTATUS);
QMEditor.FUNCLIB.CreateLink=QMEditor.FUNCLIB.inheritFrom(function(c){
var d=this;
d.setId("CreateLink");
d.setCmd("CreateLink");
d.setBindEditor(c.editor);
d.setUiConfig({title:d.getBindEditor().getLanguage().FUN_CREATELINK});
},QMEditor.FUNCLIB.MENU);
QMEditor.FUNCLIB.CreateLink.prototype.getMenuUI=function(){
var c=this.getBindEditor(),d=c.getLanguage(),e=c.getTemplate();
return e._MENU_CREATELINK.replace({langName:d.CL_NAME,langLink:d.CL_LINK,langModify:d.CL_MODIFY,langDelete:d.CL_DELETE,langConfirm:d.CL_CONFIRM,langCancel:d.CL_CANCEL});
};
QMEditor.FUNCLIB.CreateLink.prototype.initMenu=function(c){
var i=this,g=i.getBindEditor(),f=g.queryCmdEnabled("Unlink");
if(!f&&g._moCurrentEditObj)
{
g.loadLastRange();
f=g.queryCmdEnabled("Unlink");
}
var e=f&&g._hasAncestorNode("A"),h=i._mbIsEnabledUnlink&&g.moveToAncestorNode("A"),d=g._moCurrentEditObj?false:g._isCollapsed();
a.show(c.S("name_cntr"),!e&&d);
a.show(c.S("link_cntr"),!(e&&!h));
a.show(c.S("modify"),h);
a.show(c.S("delete"),e);
a.show(c.S("confirm"),!e);
h&&h.href&&(_oLinkText.value=h.href);
var j=c.S("name").value=g.getLanguage().CL_NAME_DEF;
c.S("name").className="qmEditorCLNameDef";
c.S("name").onfocus=function(){
if(this.className!="qmEditorCLNameMdf")
{
this.className="qmEditorCLNameMdf";
this.value="";
}
};
c.S("name").onblur=function(){
if(!this.value)
{
this.className="qmEditorCLNameDef";
this.value=j;
}
};
c.S("delete").onclick=function(){
i.getBindEditor().loadLastRange();
i.getBindEditor().execCmd("Unlink");
i.hideMenu(true);
};
c.S("modify").onclick=function(){
i.getBindEditor().loadLastRange();
h.href=i._getLinkText();
i.hideMenu(true);
};
c.S("confirm").onclick=function(){
var m=i.getBindEditor(),k=m.getEditDoc(),l=m.getEditWin();
m.loadLastRange();
if(d)
{
if(k.selection)
{
m.focus();
k.selection.createRange().pasteHTML(a.T('<a href="$url$" >$name$</a>').replace({url:i._getLinkText(),name:i._getNameText()}));
}
else{
var o=l.getSelection().getRangeAt(0),n=k.createElement("a");
n.href=i._getLinkText();
n.innerHTML=i._getNameText();
o.insertNode(n);
o.setStartAfter(n);
}
}
else{
m.execCmd(i.getCmd(),i._getLinkText());
}
i.hideMenu(true);
};
c.S("cancel").onclick=function(){
i.hideMenu(true);
};
a.addEvent(c.S("name"),"keydown",function(k){
var l=k.keyCode;
if({13:1,27:1}[l])
{
a.stopPropagation(k);
a.preventDefault(k);
}
l==13&&(i.getMenu().S("link").value?i.getMenu().S(!e?"confirm":"modify").click():i.getMenu().S("link").focus());
l==27&&i.hideMenu(true);
});
a.addEvent(c.S("link"),"keydown",function(k){
var l=k.keyCode;
if({13:1,27:1}[l])
{
a.stopPropagation(k);
a.preventDefault(k);
}
l==13&&i.getMenu().S(!e?"confirm":"modify").click();
l==27&&i.hideMenu(true);
});
c=g=b;
};
QMEditor.FUNCLIB.CreateLink.prototype.doMenuShow=function(c){
if(a.isShow(c.S("link_cntr")))
{
c.S("link").focus();
c.S("link").select();
}
};
QMEditor.FUNCLIB.CreateLink.prototype._getLinkText=function(){
var c=this.getMenu().S("link").value;
if(/[a-zA-Z_0-9.-]+@[a-zA-Z_0-9.-]+\.\w+/.test(c))
{
return a.trim(c).toLowerCase().indexOf("mailto")==0?c:"mailto:"+c;
}
return a.trim(c).indexOf("://")==-1?"http://"+c:c;
};
QMEditor.FUNCLIB.CreateLink.prototype._getNameText=function(){
var c=this.getMenu().S("name");
return c.className!="qmEditorCLNameDef"&&c.value||this._getLinkText();
};
QMEditor.FUNCLIB.SourceEdit=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("SourceEdit");
this.setType("custom");
this.setBindEditor(c.editor);
var d=this.getBindEditor().getLanguage();
this.setUiConfig({title:d.FUN_SOURCEEDIT,sourceToolBar:{formatTitle:d.SE_FORMAT_TITLE,langFormat:d.SE_FORMAT,previewTitle:d.SE_PREVIEW_TITLE,langPreview:d.SE_PREVIEW,langFormatting:d.SE_FORMATTING}});
this.setfOnClick(this._fDoDefaultClick);
this.setfDoDefaultClick(this._fDoDefaultClick);
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.SourceEdit.prototype._fDoDefaultClick=function(c){
var d=this.getBindEditor(),e=d.getToolBarInfo().SpellCheck;
if(e)
{
e._show(0,0,1);
}
this._setupSourceToolBar();
d.hideMenu();
d.changeEditMode("source");
};
QMEditor.FUNCLIB.SourceEdit.prototype._setupSourceToolBar=function(){
var c=this.getBindEditor(),d=c.getSrceToolBarObj();
if(d.getAttribute("setuped")=="true")
{
return false;
}
d.innerHTML=c.getTemplate().SOURCEEDIT_TOOLBAR.replace(this.getUiConfig().sourceToolBar);
d.setAttribute("setuped","true");
this._setSourceToolBarEvent();
};
QMEditor.FUNCLIB.SourceEdit.prototype._setSourceToolBarEvent=function(){
var f=this,c=this.getBindEditor(),d=c.getSrceToolBarObj().firstChild,e=d.nextSibling;
e.onclick=function(){
if(f._mnWaitLoadTimer)
{
clearInterval(f._mnWaitLoadTimer);
}
c.changeEditMode("html");
var g=c.getToolBarInfo().SpellCheck;
if(g)
{
g._show(1,0,1);
}
};
d.onclick=function(){
f._formatCode();
};
};
QMEditor.FUNCLIB.SourceEdit.prototype._formatCode=function(){
var g=this;
_oEditor=g.getBindEditor();
if(!window.QMFormatter)
{
_oEditor.loadFile({"$js_path$webp//com/kits/qmeditor/base/release/plus/formatter24e6ae.js":true});
if(g._mnWaitLoadTimer)
{
return;
}
this._mnWaitLoadTimer=setInterval(function(){
g._formatCode();
},500);
return;
}
if(this._mnWaitLoadTimer)
{
clearInterval(this._mnWaitLoadTimer);
}
var e=_oEditor.getSrceToolBarObj().firstChild,f=e.firstChild,h=f.lastChild,d=e.lastChild;
a.show(f,true);
a.show(d,false);
e.className="qmEditorFormatting";
h.innerHTML="0%";
function c(j)
{
_oEditor.setEditContent("source",j);
a.show(f,false);
a.show(d,true);
e.className="qmEditorBtnA";
}
;function i(j)
{
h.innerHTML=j;
}
QMFormatter.format(_oEditor.getEditContent("source"),c,i);
};
QMEditor.FUNCLIB.Preview=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("Preview");
this.setType("custom");
this.setBindEditor(c.editor);
this.setContainerClassName("qmEditorToolBarItemRight");
var d=this.getBindEditor().getLanguage();
this.setUiConfig({title:d.FUN_PREVIEW,langPreview:d.FUN_PREVIEW});
this.setfOnClick(this._fDoDefaultClick);
this.setfDoDefaultClick(this._fDoDefaultClick);
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.Preview.prototype._fDoDefaultClick=function(c){
var d=this.getBindEditor();
a.callBack.call(d,d.getfOnPreview());
};
QMEditor.FUNCLIB.Preview.prototype.setMouseOverEvent=function(c){
};
QMEditor.FUNCLIB.UploadEml=QMEditor.FUNCLIB.inheritFrom(function(c){
this.setId("UploadEml");
this.setType("custom");
this.setBindEditor(c.editor);
this.setContainerClassName("qmEditorToolBarItemRight");
var d=this.getBindEditor().getLanguage();
this.setUiConfig({title:d.FUN_UPLOADEML,langUploadEml:d.FUN_UPLOADEML});
this.setfOnClick(this._fDoDefaultClick);
this.setfDoDefaultClick(this._fDoDefaultClick);
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.UploadEml.prototype._fDoDefaultClick=function(c){
var d=this.getBindEditor();
a.callBack.call(d,d.getfOnUploadEml());
};
QMEditor.FUNCLIB.UploadEml.prototype.setMouseOverEvent=function(c){
};
QMEditor.setupFunc();
})(QMEditorAdapter);
(function(a,b){
a.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_SPELLCHECK:a.T(['<div class="qmEditorSpellCheck qmEditorBtnIconSpellCheck qmEditorBtnIcon unselect " unselectable="on">','<input type="button" class="qmEditorIcon" unselectable="on" onmousedown="return false;" title="\u82F1\u6587\u62FC\u5199\u68C0\u67E5" />','</div>']),FUN_CLASS_SPELLCHECK:"qmEditorSpellCheck",FUN_SPELLCHECKTITLE:"\u82F1\u6587\u62FC\u5199\u68C0\u67E5",FUN_CLASS_SPELLCHECKING:"qmEditorSpellChecking",FUN_SPELLCHECKINGTITLE:"\u68C0\u67E5\u4E2D"});
a.extend(QMEditor.CONST.getTemplate(),{BOTTON_ICON_SPELLCHECK:a.TE(['<div class="qmEditorSpellCheck qmEditorBtnIconSpellCheck qmEditorBtnIcon unselect " unselectable="on">','<input type="button" class="qmEditorIcon" unselectable="on" onmousedown="return false;" title="\u82F1\u6587\u62FC\u5199\u68C0\u67E5" />','</div>'])});
QMEditor.FUNCLIB.SpellCheck=QMEditor.FUNCLIB.inheritFrom(function(c){
if(!getTop().goUserInfo.get('RealOpenSpellCheck'))
{
return;
}
this.setId("spellcheck");
this.setType("custom");
this.setBindEditor(c.editor);
var e=this.getBindEditor(),f=e.getLanguage();
this.setUiConfig({title:f.FUN_SPELLCHECKTITLE,content:f.FUN_SPELLCHECK});
this.setfOnClick(this._fDoDefaultClick);
this.setfDoDefaultClick(this._fDoDefaultClick);
this._moCheckCharset={};
e.getToolBarInfo().SpellCheck=this;
this._moSeparateSet_html=/(.*?)((<[\s\S]*?>)|(&nbsp;)|[^\x00-\xff]|[\[\]\"\'\\\-!$^()_,.:;<>?/`\uFF04\uFF3E\uFF0A\uFF3F\uFF3B\uFF3D{}\uFF0E\uFF02\uFF07\uFF1C\uFF1E\uFF0F\uFFE3\uFF40@#%&*+=|~\uFF01\uFF20\uFF03\uFFE5\uFF05\u2026\uFF06\u7480\uE55BFF08\uFF09\uFF0D\u2014\uFF0B\uFF1D\u3010\u3011\uFF5B\uFF5D\uFF0C\u3002\uFF1A\uFF1B\u201C\u201D\u2018\u2019\uFF3C\uFF5C\u300A\u300B\uFF1F\u3001\uFF5E\u7ECC\u50FC\r\v\f\x20\n\u3000])/g;
this._moSeparateSet_text=/(.*?)([\[\]\"\'\\\-!$^()_,.:;<>?/`\uFF04\uFF3E\uFF0A\uFF3F\uFF3B\uFF3D{}\uFF0E\uFF02\uFF07\uFF1C\uFF1E\uFF0F\uFFE3\uFF40@#%&*+=|~\uFF01\uFF20\uFF03\uFFE5\uFF05\u2026\uFF06\u7480\uE55BFF08\uFF09\uFF0D\u2014\uFF0B\uFF1D\u3010\u3011\uFF5B\uFF5D\uFF0C\u3002\uFF1A\uFF1B\u201C\u201D\u2018\u2019\uFF3C\uFF5C\u300A\u300B\uFF1F\u3001\uFF5E\u7ECC\u50FC\r\v\f\x20\n\u3000])/g;
var d={text:0,html:1},g=this;
this._mnStatus=d[e.getContentType()];
a.createBlankIframe(a.window,{id:"spellcheckDocument"});
this._moAjax=new QMAjax("/cgi-bin/speller");
this._moAjax.onComplete=function(h){
var j=g._moAjax._moNewWord;
for(var i=j.length-1;i>=0;i--)
{
g._moCheckCharset[j[i]]={};
}
j=evalValue(h.responseText);
if(typeof j=="object")
{
a.extend(g._moCheckCharset,j);
}
if(g._mnStatus&d[g.getBindEditor().getContentType()])
{
g._show(1);
}
g._requestFinishUI();
};
this._moAjax.onError=function(h,i){
if(i!="abort")
{
a.showError("\u68C0\u67E5\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002");
}
g._requestFinishUI();
};
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.SpellCheck.prototype.getStatus=function(){
return this._mnStatus;
};
QMEditor.FUNCLIB.SpellCheck.prototype._fDoDefaultClick=function(c){
var e=this.getBindEditor(),g=a.getEventTarget(c),d=this._mnStatus&4,f=this;
this._moButton=g;
if(this._mnStatus&4)
{
return;
}
setTimeout(function(){
f._intervalCheck();
});
};
QMEditor.FUNCLIB.SpellCheck.prototype._intervalCheck=function(c){
if(c)
{
this._moAjax.abort();
this._show(0);
return;
}
this._checkWord();
};
QMEditor.FUNCLIB.SpellCheck.prototype._separateWord=function(){
var f=this.getBindEditor(),k=f.getContentType()=="text"?this._moSeparateSet_text:this._moSeparateSet_html,e=this._moCheckCharset,i=[],j={},l=a.T('<$label$ class="" title="\u8BF7\u5355\u51FB\u9F20\u6807\u6765\u663E\u793A\u62FC\u5199\u5EFA\u8BAE" name="spellcheck" style="border-bottom:1px dotted #FF2E7E;">$w1$</$label$>$w2$'),d=a.now(),h=[["&lt;","%"+d+"#"],["&gt;","%"+(d+1)+"#"],["&amp;","%"+(d+2)+"#"],["&quot;","%"+(d+3)+"#"]],g={},m=f.getContent();
for(var c=h.length-1;c>=0;c--)
{
m=m.replace(new RegExp(h[c][0],"gi"),h[c][1]);
g[d+c]=1;
}
m=m.replace(k,function(n,o,p){
if(o&&!g[o])
{
if(!e[o])
{
if(!j[o])
{
j[o]=1;
i.push(o);
}
}
else if(e[o].suggestion&&!e[o]._mbIgnorable)
{
return l.replace({w1:o,w2:p,label:a.gbIsIE?"a":"span"});
}
}
return (n);
});
for(var c=h.length-1;c>=0;c--)
{
m=m.replace(new RegExp(h[c][1],"gi"),h[c][0]);
}
return [i,m];
};
QMEditor.FUNCLIB.SpellCheck.prototype._requestFinishUI=function(){
var d=this.getBindEditor().getLanguage(),c=this._moButton,e=c.style;
getTop().rmClass(c.parentNode,d.FUN_CLASS_SPELLCHECKING);
getTop().addClass(c.parentNode,d.FUN_CLASS_SPELLCHECK);
c.title=d.FUN_SPELLCHECKTITLE;
this._mnStatus&=0xF^4;
};
QMEditor.FUNCLIB.SpellCheck.prototype._requestBeginUI=function(){
var d=this.getBindEditor().getLanguage(),c=this._moButton,e=c.style;
getTop().rmClass(c.parentNode,d.FUN_CLASS_SPELLCHECK);
getTop().addClass(c.parentNode,d.FUN_CLASS_SPELLCHECKING);
c.title=d.FUN_SPELLCHECKINGTITLE;
};
QMEditor.FUNCLIB.SpellCheck.prototype._checkWord=function(){
var c=this._separateWord(),d=this;
this._requestBeginUI();
if(c[0].length)
{
this._mnStatus|=4;
this._moAjax.abort();
this._moAjax._moNewWord=c[0];
this._moAjax.send(a.T("wordlist=$wl$&sid=$sid$&t=compose_speller").replace({wl:c[0].join(" "),sid:a.getSid()}));
}
setTimeout(function(){
d._requestFinishUI();
},1000);
};
QMEditor.FUNCLIB.SpellCheck.prototype._removeSpellCheck=function(c){
var d=c.parentNode;
while(c.firstChild)
{
d.insertBefore(c.firstChild,c);
}
d.removeChild(c);
};
QMEditor.FUNCLIB.SpellCheck.prototype._removeAllSpellCheck=function(c){
c=c||this.getBindEditor().getEditDoc();
var e=c.getElementsByName("spellcheck");
for(var d=e.length-1;d>=0;d--)
{
this._removeSpellCheck(e[d]);
}
};
QMEditor.FUNCLIB.SpellCheck.prototype._showDropDown=function(c){
var j=a.getEventTarget(c),h=this._moCheckCharset[j.innerHTML];
if(!h)
{
this._checkWord();
}
else if(h.suggestion)
{
var g=a.calcPosFrame(j,this.getBindEditor().getEditWin()),k=h.suggestion,i=this,d=function(l){
var m=a.getEventTarget(l);
j.innerHTML=m.innerText||m.textContent;
i._removeSpellCheck(j);
};
_oItems=[];
for(var e=0,f=k.length;e<f;e++)
{
if(k[e])
{
_oItems.push({sId:e,sItemValue:k[e]});
}
}
if(!_oItems.length)
{
_oItems.push({sItemValue:"\u6CA1\u6709\u5EFA\u8BAE"});
}
_oItems.push({sItemValue:'<hr/>'});
_oItems.push({sId:"ignore",sItemValue:"\u5FFD\u7565"});
if(this.getBindEditor().getEditDoc().getElementsByName("spellcheck").length>1)
{
_oItems.push({sId:"ignoreall",sItemValue:"\u5168\u90E8\u5FFD\u7565"});
}
h._msId=h._msId||unikey("m");
new (a.QMMenu)({sId:h._msId,oEmbedWin:a.window,nX:g[3],nY:g[2],nWidth:150,nItemHeight:21,oItems:_oItems,onitemclick:function(l){
if(l=="ignore")
{
h._mbIgnorable=1;
i._removeSpellCheck(j);
}
else if(l=="ignoreall")
{
a.E(i._moCheckCharset,function(m){
m._mbIgnorable=1;
});
i._removeAllSpellCheck();
}
else{
j.innerHTML=_oItems[l].sItemValue;
i._removeSpellCheck(j);
}
}});
}
};
QMEditor.FUNCLIB.SpellCheck.prototype.setSpellCheckEvent=function(){
var e=this,d=function(){
},c=function(f){
e._showDropDown(f);
};
a.E(e.getBindEditor().getEditDoc().getElementsByName("spellcheck"),function(f){
if(!f.onclick)
{
a.addEvent(f,"click",c);
f.onclick=d;
}
});
};
QMEditor.FUNCLIB.SpellCheck.prototype._show=function(c,e,d){
if(c)
{
if(!d||(this._mnStatus&8))
{
var f=this.getBindEditor();
this._mnStatus&=0xF^8;
this._mnStatus|=2;
f.setContent(e||this._separateWord()[1]);
this.setSpellCheckEvent();
f.focus(0);
}
}
else{
if(d&&(this._mnStatus&2))
{
this._mnStatus|=8;
}
this._moAjax.abort();
this._mnStatus&=0xF^2;
this._removeAllSpellCheck();
}
};
QMEditor.setupFunc();
})(QMEditorAdapter);
;(function(a,j){
var g=QMEditor.getTopWin();
var h='__FullScreenEditor__';
a.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_FULLSCREEN:"\u5168\u5C4F",FUN_FULLSCREEN_LABEL:"\u5168\u5C4F",FUN_FULLSCREEN_OUT:"\u9000\u51FA\u5168\u5C4F",FUN_FULLSCREEN_OUT_LABEL:"\u9000\u51FA\u5168\u5C4F"});
a.extend(QMEditor.CONST.getTemplate(),{DIALOG_FULLSCREEN:a.T(['<div style="text-align:center;padding:58px; padding-bottom:78px;">','<img src="$images_path$webp/ico_loading21e9c5d.gif" style="position:relative; top: 12px;"> \u6B63\u5728\u5BFC\u5165\u2026 <span id="percent"></span>','</div>'])});
var b=QMEditor.FUNCLIB.FullScreen=QMEditor.FUNCLIB.inheritFrom(function(k){
var o=this;
o.setId("FullScreen");
o.setType("btn");
o.setBindEditor(k.editor);
var m=o.getBindEditor(),n=m.getLanguage();
var l=g==m.getEditorAreaWin()&&m.getEditorConfig('editorId')==h;
o._mbFullEditor=l;
if(l)
{
o.setUiConfig({title:n.FUN_FULLSCREEN_OUT,label:n.FUN_FULLSCREEN_OUT_LABEL});
}
else{
o._msFullScreenEditorId=h;
o.setUiConfig({title:n.FUN_FULLSCREEN,label:n.FUN_FULLSCREEN_LABEL});
}
o.setfDoDefaultClick(this._dofaultClick);
o.setContainerClassName("qmEditorToolBarItemRight");
},QMEditor.FUNCLIB.BASE);
b.prototype.init_=function(){
var n=this,l=n.getBindEditor();
if(!n._mbFullEditor)
{
var o=l;
g.loadJsFileToTop(['$js_path$webp/com/kits/qmeditor/qqmail/release/editor_toolbar_ext250c75.js']);
if(n._getFullScreenEditor())
{
n._delFullScreenEditor();
}
setTimeout(function(){
var s=g.document.createElement('div');
g.S('resize',g).appendChild(s);
s.id=n._msFullScreenEditorId;
s.style.cssText="display:none; position:absolute; top:2%; left:1%; width:98%; height:96%; z-index: 111;";
n._moFullEditorContainer=s;
var u=o.getEditorConfig();
var t=u.fullscreenCfg||{};
var r=QMEditor.createEditor(a.extend({},u,t,{editorId:n._msFullScreenEditorId,editorAreaWin:g,editorAreaId:null,editorAreaObj:s,height:null,isNoEditScroll:false,nAutoRisizeMinHeight:null,onload:function(){
g.callBack.call(this,t.onload,[r]);
},onputcontent:null}));
r.initialize('',true,'','');
if(g.gbIsIE&&g.gnIEVer==6)
{
g.insertHTML(s,'afterbegin','<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;" src="javascript:(function(){document.open();document.domain=\''+document.domain+'\';document.close();})();"></iframe>');
}
var q={oSrcEditor:o,oFullEditor:r,bUseFullEdtior:false,oSrcToolbatBtn:n,hideFullScreenEditor:function(){
f(r);
},gooutFullScreenEditor:function(){
e(r);
}};
r.setEditorCustomVar('FullScreenToolbar',q);
o.setEditorCustomVar('FullScreenToolbar',q);
a.addEvent(o.getEditorAreaWin(),"unload",function(){
n._delFullScreenEditor();
});
var p=o.getContent;
o.getContent=function(){
if(o.getEditorCustomVar('FullScreenToolbar.bUseFullEdtior'))
{
return r.getContent.apply(r,arguments);
}
else{
return p.apply(o,arguments);
}
};
},400);
}
else{
var m=l;
var k=n.getContainer();
g.addClass(k.firstChild,'qmEditorFullScreenFull');
m.setEditorCustomVar('FullScreenToolbar.oFullToolbarBtn',n);
}
};
b.prototype._dofaultClick=function(){
var k=this;
if(k._mbFullEditor)
{
e(k.getBindEditor());
}
else{
g.LogKV({sValue:'editor|toolbar|fullscreen'});
g.waitFor(function(){
return k._getFullScreenEditor();
},function(l){
if(l)
{
var p=k.getBindEditor();
var n=k._getFullScreenEditor();
var q=p.getEditWin();
var o=n.getEditWin();
n.changeEditMode("html");
var m=i(q);
n.setContent(p.getContent());
g.show(k._moFullEditorContainer,true);
g.show(d(),true);
c(m,o,n);
if(g.gbIsIE&&g.gnIEVer==6)
{
setTimeout(function(){
d().parentNode.style.zoom=1;
},0);
if(n.getEditObj())
{
n.getEditObj().parentNode.style.height='100%';
}
}
g.callBack(n.getEditorConfig().onfullscreenshow,[n]);
p.setEditorCustomVar('FullScreenToolbar.bUseFullEdtior',true);
if(!g.getCookie('editor_fs'))
{
var r='editor_fullscreen_compose_tip';
n.getEditorCustomVar('FullScreenToolbar.oFullToolbarBtn').getContainer().id=r;
g.setCookie('editor_fs','1',new Date(g.now()+30*24*3600000));
g.waitForShowTip({tipid:101,win:g,domid:r,arrow_offset:9,msg:'\u70B9\u51FB\u8FD9\u91CC\u6216\u6309 ESC \u9000\u51FA\u5168\u5C4F\u7F16\u8F91\u6A21\u5F0F\u3002'},'show');
}
if(!g.bnewwin)
{
g.msgBox.createMessageBox(0);
g.showProcess.createProcessBox(0);
}
}
});
}
};
b.prototype._getFullScreenEditor=function(){
return QMEditor.getEditor(this._msFullScreenEditorId);
};
b.prototype._delFullScreenEditor=function(){
var k=this._getFullScreenEditor();
if(k)
{
QMEditor.delEditor(this._msFullScreenEditorId);
}
var l=g.S(this._msFullScreenEditorId,g);
l&&g.removeSelf(l);
};
function e(k)
{
var l=k.getEditorCustomVar('FullScreenToolbar.oSrcEditor');
f(k);
k.hideMenu();
if(!g.bnewwin)
{
g.msgBox.createMessageBox(43);
g.showProcess.createProcessBox(43);
}
setTimeout(function(){
try{
var n=k.getEditWin();
var o=l.getEditWin();
k.changeEditMode("html");
var m=i(n);
var p=k.getContent();
l.setContent(p);
c(m,o,l);
}
catch(q)
{
}
});
}
function i(k)
{
try{
return g.QMSelection.getSelection(k).getRange().createBookmark();
}
catch(l)
{
}
}
function c(k,m,l)
{
if(k)
{
k={oStartNode:a.S(k.oStartNode.id,m),oEndNode:k.oEndNode&&a.S(k.oEndNode.id,m)};
setTimeout(function(){
try{
l.focus(0);
var n=g.QMSelection.getSelection(m).getRange();
n.gotoBookmark(k);
n.select();
l.saveRange();
}
catch(o)
{
a.removeSelf(k.oStartNode);
if(k.oEndNode)
{
a.removeSelf(k.oEndNode);
}
}
},a.gbIsFF?100:10);
}
else{
l.focus(0,l.getContentObj("QQMAILSTATIONERY"));
}
}
function f(k)
{
g.show(k.getEditorArea(),false);
g.show(d(),false);
k.setEditorCustomVar('FullScreenToolbar.bUseFullEdtior',false);
}
function d()
{
var l="qqmail_fulleditor_mask",k=g.S(l,g);
if(!k)
{
g.insertHTML(g.S('resize',g),"beforeEnd",T('<div id="$id$" class="$class$" style="z-index:110;display:none;width:100%;height:100%;_zoom:1;" onkeypress="return false;" onkeydown="return false;" tabindex="0" onclick="getTop().QMEditor.getEditor(\'$editorId$\') && getTop().QMEditor.getEditor(\'$editorId$\').getEditorCustomVar(\'FullScreenToolbar.gooutFullScreenEditor\')();return false;"></div>').replace({'class':'opaMaskDark','editorId':h,id:l}));
k=g.S(l,g);
}
return k;
}
QMEditor.setupFunc();
})(QMEditorAdapter);
