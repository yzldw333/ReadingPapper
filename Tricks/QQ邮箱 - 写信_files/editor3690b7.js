(function(b){
var c=getTop(),a={document:c.document,window:c,gsAgent:gsAgent,gbIsFF:gbIsFF,gbIsChrome:gbIsChrome,gbIsSafari:gbIsSafari,gbIsOpera:gbIsOpera,gbIsWebKit:gbIsWebKit,gbIsIE:gbIsIE,gnIEVer:gnIEVer,gbIsMac:gbIsMac,evalCss:evalCss,S:S,T:T,TE:TE,E:E,createBlankIframe:createBlankIframe,createIframe:createIframe,GelTags:GelTags,insertHTML:insertHTML,attr:attr,getStyle:getStyle,setClass:setClass,finds:finds,isShow:isShow,show:show,callBack:callBack,addEvent:addEvent,addEvents:addEvents,removeEvent:removeEvent,getEventTarget:getEventTarget,preventDefault:preventDefault,stopPropagation:stopPropagation,isObjContainTarget:isObjContainTarget,loadJsFile:loadJsFile,waitFor:waitFor,calcPos:calcPos,calcAdjPos:calcAdjPos,calcPosFrame:calcPosFrame,bodyScroll:bodyScroll,getPath:getPath,getPaths:getPaths,getRes:getRes,extend:extend,trim:trim,now:now,unikey:unikey,subAsiiStr:subAsiiStr,debug:debug,QMMenu:QMMenu,QMDialog:QMDialog,QMSelect:QMSelect,addPageMouseUpListener:function(){
QMPageInit.addPageMouseUpListener.apply(QMPageInit,arguments);
}};
window.QMEditorAdapter=a;
})();
(function(a){
var b=getTop();
QMEditorAdapter.extend(QMEditorAdapter,{calcPos:b.calcPos,calcAdjPos:b.calcAdjPos,calcPosFrame:b.calcPosFrame,showError:b.showError,QMAjax:b.QMAjax,ossLog:b.ossLog,getSid:b.getSid,searchMusic:b.searchMusic,QMAXInfo:b.QMAXInfo,detectActiveX:b.detectActiveX,createActiveX:b.createActiveX,getAttachList:b.getAttachList,hasClass:b.hasClass,addClass:b.addClass,rmClass:b.rmClass,subAsiiStr:b.subAsiiStr,parents:b.parents,finds:b.finds,getDomWin:b.getDomWin,removeSelf:b.removeSelf,LogKV:b.LogKV});
})();
(function(a,c){
var d=['.qmEditorBase{width:100%;height:100%;border-collapse:collapse;border-right:1px solid #c3c3c3;border-top:1px solid #9a9a9a;border-left:1px solid #9a9a9a;background:#fff;}.qmEditorBaseBd{border-top:1px solid #c3c3c3;position:relative;}.qmEditorToolBar{border-bottom:none;}.qmEditorToolBarDiv{height:100%;height:20px;padding:3px 2px;border-bottom:1px solid #999;cursor:default;}.qmEditorToolBarItem{float:left;font-size:1px;margin:0 1px;margin:0\u005C9;}.settingDiv_div .qmEditorToolBarItem{line-height:17px;}.qmEditorToolBarItemRight{float:right;font-size:1px;margin:0 3px;*margin:1px 3px 0;}@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){@media{.qmEditorContent{display:block;}}}.qmEditorText{height:100%;border:none;margin:0;font:normal 14px "lucida Grande",Verdana;line-height:160%;word-break:break-all;white-space:pre-wrap;word-wrap:break-word;zoom:1;width:100%;resize:none;box-sizing:border-box;padding:0 6px;*padding:0;}.qmEditorDivEditArea{display:block;height:100%;overflow:auto;padding:1px 4px;font:normal 14px "lucida Grande",Verdana;background:#fff;line-height:160%;word-break:break-all;white-space:pre-wrap;word-wrap:break-word;border-top:1px solid #d4d4d4;}.qmEditorIfrmEditArea{display:block;width:100%;height:100%;border-top:1px solid #d4d4d4;margin-bottom:1px;}.qmEditorTBExternItem{}.qmEditorBtnIcon,.qmEditorMenuIcon{width:24px;height:17px;text-align:center;padding:1px;border:none;}.qmEditorMenuIcon{overflow:hidden;}.qmEditorBtnIconOver{padding:1px 0 0 1px;border-left:none;border-top:none;border-right:1px solid gray;border-bottom:1px solid gray;}.qmEditorBtnIconCheck,.qmEditorBtnIconPrevCheck{padding:0;border-left:1px solid gray;border-top:1px solid gray;border-right:1px solid white;border-bottom:1px solid white;}.qmEditorBtnA,.qmEditorFormatting{padding:2px 0 3px 8px;color:#039;font:normal 12px "lucida Grande",Verdana;cursor:pointer;white-space:nowrap;-moz-user-select:none}.qmEditorIcon{border:none;background:url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_new1e9c5d.gif) no-repeat;width:20px;height:16px;overflow:hidden;}.qmEditorSeparate .qmEditorIcon{display:none;}.qmEditorBold .qmEditorIcon{background-position:0px 0;width:10px;}.qmEditorItalic .qmEditorIcon{background-position:-32px 0;width:10px;}.qmEditorUnderline .qmEditorIcon{background-position:-63px 0;width:10px;}.qmEditorFontName .qmEditorIcon{background-position:-95px 0;width:18px;}.qmEditorFontSize .qmEditorIcon{background-position:-128px 0;width:18px;}.qmEditorForeColor .qmEditorIcon{background-position:-159px 0;width:18px;}.qmEditorBackColor .qmEditorIcon{background-position:-192px 0;width:18px;}.qmEditorAlignMode .qmEditorIcon{background-position:-223px 2px;width:20px;}.qmEditorSerial .qmEditorIcon{background-position:-256px 2px;width:20px;}.qmEditorIndentMode .qmEditorIcon{background-position:-288px 2px;width:20px;}.qmEditorformatblock{width:20px;}.qmEditorformatblock .qmEditorIcon{background-position:-572px 1px;width:16px;}.qmEditorCreateLink .qmEditorIcon{background-position:-318px 2px;}.qmEditorFullScreen .qmEditorIcon{background-position:-608px 2px;width:12px;}.qmEditorFullScreenFull .qmEditorIcon{background-position:-640px 1px;width:16px;}.qmEditorHtml .qmEditorIcon{background-position:-704px 2px;width:22px;}.qmEditorSpellCheck .qmEditorIcon{background-position:-736px 3px;width:23px;}.qmEditorSpellChecking .qmEditorIcon{background:url($images_path$../js/com/kits/qmeditor/base/images/newicon/checking_loading1e9c5d.gif) center center no-repeat;background-image:-webkit-image-set(url($images_path$../js/com/kits/qmeditor/base/images/newicon/checking_loading1e9c5d.gif) 1x,url($images_path$../js/com/kits/qmeditor/base/images/newicon/checking_loading_2x1e9c5d.gif) 2x);width:23px;}.qmEditorFormatMatch .qmEditorIcon{background-position:-672px 1px;width:13px;}.qmEditorJustifyLeft .qmEditorIcon{background-position:-350px 2px;}.qmEditorJustifyCenter .qmEditorIcon{background-position:-382px 2px;}.qmEditorJustifyRight .qmEditorIcon{background-position:-414px 2px;}.qmEditorInsertorDeredlist .qmEditorIcon{background-position:-446px 2px;}.qmEditorInsertunorDeredlist .qmEditorIcon{background-position:-478px 2px;}.qmEditorIndent .qmEditorIcon{background-position:-542px 2px;}.qmEditorOutdent .qmEditorIcon{background-position:-510px 2px;}.qmEditorBtnIconSeparate{width:1px;padding:0;margin:3px 6px 0;height:14px;background:#afafaf;}.qmEditorBtnIconBold{width:20px;}.qmEditorBtnIconItalic{width:20px;}.qmEditorBtnIconUnderline{width:20px;}.qmEditorBtnIconFontName{width:24px;}.qmEditorBtnIconFontSize{width:24px;}.qmEditorBtnIconForeColor{width:24px;}.qmEditorBtnIconBackColor{width:24px;margin-right:2px;}.qmEditorBtnIconAlignMode{width:24px;}.qmEditorBtnIconSerial{width:24px;}.qmEditorBtnIconIndent{width:24px;}.qmEditorBtnIconCreateLink{width:20px;}.qmEditorBtnIconPhoto{width:24px;}.qmEditorScreenSnap{width:24px;}.qmEditorBtnIconMo{width:24px;}.qmEditorBtnIconMusic{width:24px;}.qmEditorBtnText{width:16px;border-width:0px;height:14px;margin:2px 10px 0 0;padding:1px 0;}.qmEditorBtnText .qmEditorIcon{font-size:12px;cursor:pointer;margin-right:5px;}.qmEditorMenuIcon{margin:-3px 0 0 0;height:17px;*xheight:19px;}.qmEditorMenuBorder{border:1px outset;* border:2px outset;position:absolute;z-index:99;background:white;padding:2px;font-size:1px;}.qmEditorMenuItem,.qmEditorMenuItemOver,.qmEditorMenuItemCheck,.qmEditorMenuItemDisabled{width:130px;height:16px;line-height:16px;padding:2px;cursor:default;font:normal 12px "lucida Grande",Verdana;}.qmEditorMenuItem,.qmEditorMenuItem,.qmEditorMenuItemDisabled{padding:3px;}.qmEditorMenuItemOver{border:1px solid #000080;background:#FFEEC2;color:#036;}.qmEditorMenuItemCheck{border:1px solid #9a9afb;}.qmEditorMenuItemDisabled{color:gray;}.qmEditorMenuColor{width:10px;*width:12px;height:10px;*height:12px;font-size:1px;border:1px solid #a6a6a6;}.qmEditorMenuPanel{font-size:12px;padding:3px;}.qmEditorButton1 .qmEditorButton2{font-size:12x;height:auto;*height:22px;line-height:auto;*line-height:18px;padding:0 8px;*padding:0;}.qmEditorButton1{width:52px;margin:1px 2px 0 0}.qmEditorButton2{width:76px;*width:72px;margin:1px 2px 0 0}.qmEditorCLNameDef{color:gray;}.qmEditorCLNameMdf{color:black;}.qmEditorFormatting{text-decoration:none;color:gray;}.qmEditorFormatBtn{float:left;padding:2px 0 3px 5px;* padding:1px 0 3px 5px;}.qmEditorLinkDiv{padding-bottom:5px;}.qmEditorLinkBtn{margin-left:3px;}.qmEditorLinkButton{text-align:right;}.qmEditorMenuStatusItem{padding:5px 10px 5px 0;cursor:pointer;}.qmEditorMenuIconStatusItem{padding:5px 10px 5px 0;cursor:pointer;}.qmEditorMenuIconStatusItem .qmEditorIcon{position:relative;top:-1px;top:-2px\u005C9;left:-5px;cursor:pointer;}.menubarbg{background-image:url("$images_path$../js/com/kits/qmeditor/base/images/newicon/mailcomposetool24f760.png");_background-image:url("$images_path$../js/com/kits/qmeditor/base/images/newicon/mailcomposetool_ie24f760.png");}.editormenubar{background-position:0 -128px;background-repeat:repeat-x;height:23px;padding:4px;position:absolute;border:1px solid #555;-moz-box-shadow:0 1px 1px #999;-moz-border-radius:5px;}.imgzoomoriginal{float:left;_display:inline;margin:0 5px;width:21px;height:23px;background-position:-128px -93px;background-repeat:no-repeat;}.imgzoomoriginal:hover{background-position:-159px -93px;}.imgzoomout{float:left;_display:inline;margin:0 5px;width:21px;height:23px;background-position:0 -30px;background-repeat:no-repeat;}.imgzoomout:hover{background-position:-33px -31px;}.imgzoomin{float:left;_display:inline;margin:0 5px;width:21px;height:23px;background-position:-63px -30px;background-repeat:no-repeat;}.imgzoomin:hover{background-position:-96px -31px;}.imgzoombar{float:left;_display:inline;width:66px;margin:10px 0 0;height:3px;background-position:-32px 0;position:relative;}.imgzoombar .zoomhandle{position:absolute;width:11px;height:17px;top:-7px;left:29px;background-position:-126px -30px;}.imgzoombar .zoomhandle:hover{background-position:-159px -31px;}.menubarrotate{float:left;_display:inline;margin:0 3px;width:22px;height:23px;background-position:-191px -64px;background-repeat:no-repeat;}.menubarrotate:hover{background-position:-224px -64px;}.menubarremove{float:left;_display:inline;margin:0 5px;width:19px;height:23px;background-position:-191px -31px;background-repeat:no-repeat;}.menubarremove:hover{background-position:-224px -32px;}.menubarspl{float:left;_display:inline;width:2px;height:25px;margin:-1px 3px 0;background-position:0 0;background-repeat:no-repeat;}a.menubarlink:link,a.menubarlink:visited{float:left;margin:0 3px;line-height:23px;color:#DDD;text-decoration:underline;}a.menubarlink:hover{color:#FFF;}.menubariconlink{float:left;_display:inline;margin:0 5px;width:22px;height:23px;background-position:0 -57px;}.linkmodify{float:left;_display:inline;margin:0 3px;width:23px;height:23px;background-position:-31px -63px;}.linkmodify:hover{background-position:-64px -64px;}.menubarpreview{float:left;_display:inline;margin:0 5px;width:23px;height:23px;background-position:-191px -92px;background-repeat:no-repeat;}.menubarpreview:hover{background-position:-224px -93px;}.menubarinput{float:left;_display:inline;margin:1px 7px 0 5px;width:200px;}.menubarfinish{float:left;_display:inline;margin:0 5px;width:24px;height:23px;background-position:-95px -62px;}.menubarfinish:hover{background-position:-128px -63px;}.menubariconimg{float:left;_display:inline;margin:0 2px 0 5px;width:24px;height:23px;background-position:-63px -94px;}.menubariconimg:hover{background-position:-95px -94px;}.menubariconlink2{float:left;_display:inline;margin:0 5px 0 2px;width:24px;height:23px;background-position:1px -89px;}.menubariconlink2:hover{background-position:-31px -89px;}@media all and (-webkit-min-device-pixel-ratio:10000),not all and (-webkit-min-device-pixel-ratio:0){head~body #QMEditorArea{margin-bottom:28px;}}.qmpanel_shadow .arrow{position:absolute;top:-4px;width:11px;height:11px;overflow:hidden;border:1px solid #bababa;background:#FFFFFF;clip:rect(-3px,10px,10px,-3px);-moz-box-shadow:0 0 3px rgba(0,0,0,0.15);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.15);-o-box-shadow:0 0 3px rgba(0,0,0,0.15);box-shadow:0 0 3px rgba(0,0,0,0.15);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);top:-10px\u005C9;clip:rect(-3px 100px 100px -3px)\u005C9;clip:rect(-3px 100px 100px -3px)\u005C9\u005C0;filter:progid:DXImageTransform.Microsoft.Matrix(Dx=-2,Dy=12,M11=0.7,M12=0.7,M21=-0.7,M22=0.7);}@media screen and (-webkit-min-device-pixel-ratio:0){.qmpanel_shadow .arrow{clip:rect(-3px,10px,10px,-3px);}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.qmpanel_shadow .arrow{top:-4px;clip:rect(-3px,10px,10px,-3px);}}.qmpanel_shadow .btn_close{position:absolute;z-index:3;right:8px;top:8px;width:13px;height:13px;overflow:hidden;vertical-align:middle;background:url($images_path$webp/newicon/mail327a44.png) no-repeat scroll -96px -19px;-moz-border-radius:2px;-webkit-border-radius:2px;-o-border-radius:2px;border-radius:2px;}.qmpanel_shadow .btn_close:hover{background-position:-107px -19px;background-color:#999;}.qmpanel_shadow .btn_close:active{opacity:0.6;filter:alpha(opacity=60);}ul.qmEditorToolTab{position:relative;height:25px;padding:9px 0 1px 9px;overflow:hidden;zoom:1;}.qmEditorToolTab .sepLine{position:absolute;left:0;top:34px;height:1px;width:100%;overflow:hidden;margin:0;_padding-right:9px;background:#CED1D7;}.qmEditorToolTab li{float:left;list-style:none;}.qmEditorToolTab a{display:inline-block;min-width:42px;_width:42px;white-space:nowrap;margin-right:-1px;padding:0 12px;border:1px solid #CED1D7;border-width:1px 1px 0;line-height:24px;text-align:center;background:#F5F5F5;}.qmEditorToolTab a:link,.qmEditorToolTab a:hover{}.qmEditorToolTab a.on,.qmEditorToolTab a.on:hover{position:relative;z-index:2;margin-top:-3px;line-height:28px;text-decoration:none;color:#494949;background:#FFFFFF;font-weight:bold;-moz-box-shadow:0 0 2px #BABABA;-webkit-box-shadow:0 0 2px #BABABA;-o-box-shadow:0 0 2px #BABABA;box-shadow:0 0 3px rgba(0,0,0,0.15);}.qzone_container{width:362px;}.qmEditorMoOuter{}.qmEditorMoPadding{padding:6px 6px 2px;}.qmEditorMoLoading{float:left;font:normal 12px Verdana;display:none;padding-top:8px;color:gray;}.qmEditorMoPageCntr{font-size:12px;color:#000;cursor:default;padding:1px 5px 1px 0;}.qmEditorMoPage{margin-top:7px;color:#000;border:none;background:transparent;margin-right:2px;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\u0027#ffffff\u0027,endColorstr=\u0027#ffffff\u0027);}.qmEditorMoTurnPage{border:none;width:50px;height:18px;background:#fff;cursor:pointer;text-align:center;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\u0027#ffffff\u0027,endColorstr=\u0027#ffffff\u0027);}.qmEditorMoTurnPage:active,.qmEditorMoPage:active{background:#fff;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\u0027#ffffff\u0027,endColorstr=\u0027#ffffff\u0027);}.qmEditorMoPreview{background:#fff;position:absolute;left:0;top:0;border:1px solid #004B97;text-align:center;overflow:hidden;}.qmEditorToolLoading{text-align:center;padding:36px 0;}.qmEditorAlbumsSelect{}.qmEditorPicContent{padding:10px;}.qmEditorPicContent .bd{box-shadow:0 0 3px rgba(0,0,0,0.2);}.qmEditorPicSelect{padding:1px;margin:2px;background-color:#ececec;border:1px solid #fff;width:100px;height:75px;overflow:hidden;}.qmEditorPicSelect table{width:100%;height:100%;overflow:hidden;margin-top:-212px;}.qmEditorPicSelect table td{text-align:center;line-height:0;height:500px;vertical-align:middle;}.qm_addinput{height:22px;line-height:1;border-width:1px;border-color:#9a9a9a #7c7c7c #c3c3c3 #c3c3c3;box-shadow:0 1px 1px #d4d4d4 inset;margin:0 5px 0 0;padding:0 5px;padding:5px\u005C9;height:12px\u005C9;width:295px;border-radius:3px;background:#FFFFFF;}#qzoneimgAlbum{margin:-3px 0 0 5px;}.qzoneimgData{height:242px;*height:262px;overflow-y:auto;padding:10px;}.qmEditorMusicCntr{width:320px;color:#494949;overflow:hidden;}.qmEditorMusicHead{padding:13px 8px 15px 17px;}.qmEditorMusicLogo{float:left;_display:inline;margin-top:-9px;padding:0 0 7px 17px;display:none;}.qmEditorMusicSearch{padding:0 0 18px 17px;}.qmEditorMusicTxt{float:left;width:214px;}a.qmEditorMusicBtn{float:left;width:55px;}.qmEditorMusicData{margin-top:-6px;zoom:1;}.qmEditorMusicData ul{height:140px;}.qmEditorMusicResult{border-top:1px solid #DDDDDD;text-align:center;}.qmEditorMusicResultTxt{display:inline-block;position:relative;left:-2px;top:-9px;padding:0 16px;color:#C4C4C4;background:#FFFFFF;}.qmEditorMusicInfo{padding:5px 0 18px;text-align:center;}.qmEditorMusicOpt{position:relative;height:30px;margin-bottom:-16px;padding:8px 11px;}a.qmEditorMusicItem,a.qmEditorMusicItem:visited,a.qmEditorMusicItem:link{display:block;padding:0 19px;border-bottom:1px solid #EAEAEA;color:#494949;line-height:27px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;_width:282px;}a.qmEditorMusicItem:hover{text-decoration:none;background:#F0F1F1;}.qmEdMap_head{padding:20px 0;text-align:center;}.qmEdMap_search{position:relative;width:427px;margin:0 auto;text-align:left;overflow:hidden;*zoom:1;}.qmEdMap_search .qm_addinput{float:left;width:356px;margin-right:5px;_width:353px;}.qmEdMap_search .button_gray_s{float:left;width:52px;}.qmEdMap_searchPlaceholder{position:absolute;top:4px;*top:5px;left:6px;color:#999;cursor:text;}.qmEdMap_bg{height:126px;margin-top:80px;background-image:url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_map248228.png);background-repeat:no-repeat;background-position:130px 0;}.qmEdMap_resultTitle{position:relative;border-top:1px solid #ddd;}.qmEdMap_resultTitleText{position:absolute;left:50%;top:-9px;width:100px;margin-left:-50px;line-height:normal;text-align:center;color:#c4c4c4;background:#fff;}.qmEdMap_resultList{position:relative;height:317px;margin:10px 0 8px;overflow-x:hidden;overflow-y:auto;}.qmEdMap_resultList .itemSplit{position:absolute;left:0;width:100%;height:10px;line-height:0;background:#fff;}.qmEdMap_resultList .itemSplit_Top{top:0;}.qmEdMap_resultList .itemSplit_Bottom{bottom:0;}.qmEdMap_resultItem a{display:block;padding:5px 20px 4px;line-height:20px;border-bottom:1px solid #eaeaea;_width:411px;}.qmEdMap_resultItem a:hover{background:#f0f1f1;text-decoration:none;}.qmEdMap_resultItem .title,.qmEdMap_resultItem .text{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:break-all;color:#a4a4a4;_width:411px;}.qmEdMap_resultItem .title{color:#000;}.qmEdMap_resultLocation{padding:20px 20px 0;overflow:hidden;}.qmEdMap_resultMap{position:relative;height:250px;border:1px solid #b0b0b0;overflow:hidden;}.qmEdMap_resultMapList{position:absolute;left:0;width:100%;}.qmEdMap_resultMapControl{width:16px;height:33px;margin:11px 0 0 13px;background-color:#fff;border:1px solid #d7d7d7;border-color:rgba(0,0,0,.2);border-radius:2px;}.qmEdMap_resultMapControl_btn{display:block;height:16px;background:url(zh_CN/htmledition/images/common.png) no-repeat -48px 0;}.qmEdMap_resultMapControl_btn:hover{text-decoration:none;}.qmEdMap_resultMapControl_btn_Increase{border-bottom:1px solid #ccc;}.qmEdMap_resultMapControl_btn_Decrease{background-position:-64px 0;}.qmEdMap_resultItem_MapWrap{position:relative;}.qmEdMap_resultItem_MapWrap .mask{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;_height:204px;background:#000;opacity:.9;-moz-opacity:.9;filter:Alpha(Opacity=90);-ms-filter:alpha(opacity=90);}.qmEdMap_resultItem_MapWrap .listWrap{position:relative;height:204px;overflow-x:hidden;overflow-y:auto;}.qmEdMap_resultItem_MapWrap .listWrap::-webkit-scrollbar{width:15px;}.qmEdMap_resultItem_MapWrap .listWrap::-webkit-scrollbar-button{width:0;height:0;display:none}.qmEdMap_resultItem_MapWrap .listWrap::-webkit-scrollbar-corner{background-color:transparent;}.qmEdMap_resultItem_MapWrap .listWrap::-webkit-scrollbar-thumb{background-color:#7b7b7b;border-radius:10px;border:3px solid #494949;border-top-width:2px;border-bottom-width:2px;}.qmEdMap_resultItem_MapWrap .listWrap::-webkit-scrollbar-thumb:hover{background-color:#a3a3a3;border-radius:10px;}.qmEdMap_resultItem_MapWrap .listWrap::-webkit-scrollbar-track{background-color:#494949;}.qmEdMap_resultItem_Map a{padding:4px 10px;line-height:16px;border-color:#505050;_width:390px;}.qmEdMap_resultItem_Map a:hover{background:#505050;}.qmEdMap_resultItem_Map .more{float:right;position:relative;width:50px;height:36px;border-left:1px solid #505050;padding-left:0;padding-right:0;}.qmEdMap_resultItem_Map .trangle{position:absolute;top:20px;left:18px;display:block;content:" ";width:0;line-height:0;font-size:0;border-style:solid;border-color:transparent;border-width:6px;_border-color:red;_filter:chroma(color=red);}.qmEdMap_resultItem_Map .trangle_top{border-top:0;border-bottom-color:#fff;_border-bottom-color:#fff;}.qmEdMap_resultItem_Map .trangle_down{border-bottom:0;border-top-color:#fff;_border-top-color:#fff;}.qmEdMap_resultItem_Map .now{background:none!important;cursor:default;overflow:hidden;_float:left;}.qmEdMap_resultItem_Map .now .text{color:#a4a4a4;}.qmEdMap_resultItem_Map .text,.qmEdMap_resultItem_Map .title{_width:390px;}.qmEdMap_resultItem_Map .title{color:#fff;}.qmEdMap_resultItem_MapWrap_Curr .mask{_height:46px;opacity:.8;-moz-opacity:.8;filter:Alpha(Opacity=80);-ms-filter:alpha(opacity=80);}.qmEdMap_resultItem_MapWrap_Curr ul{position:relative;_height:46px;_overflow:hidden;}.qmEdMap_resultItem_MapWrap_Curr .qmEdMap_resultItem_Map{border-top:1px solid #505050;_zoom:1;}.qmEdMap_resultItem_MapWrap_Curr a{width:354px;height:36px;padding:5px 10px 3px;line-height:18px;}.qmEdMap_resultItem_MapWrap_Curr .title,.qmEdMap_resultItem_MapWrap_Curr .text{_width:354px;}.qmEdMap_resultAddBtn{display:block;width:145px;height:30px;margin:15px auto;line-height:30px;text-align:center;background:#5d99db;border:1px solid #5293db;-moz-border-radius:3px;-khtml-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;color:#fff!important;text-decoration:none!important;}.qmEdMap_resultEmpty,.qmEdMap_resultLoading{position:relative;height:335px;overflow:hidden;}.qmEdMap_resultEmptyTips{position:absolute;top:50%;margin-top:-10px;width:100%;line-height:20px;text-align:center;color:#000;}.qmEdMap_resultLoading img{position:absolute;top:50%;left:50%;margin:-16px 0 0 -16px;}.qmEdMap_iconLocation{display:inline-block;width:42px;height:34px;background-size:100% 100%;background-image:url($images_path$../js/com/kits/qmeditor/base/images/newicon/icon_location24c44c.png);background-repeat:no-repeat;_width:22px;_height:32px;_background-image:url(../images/newicon/icon_location_ie6.png);}.QMEditorToolPop .qmEditorHead{color:#494949;padding:10px 10px 10px 15px;border-bottom:1px solid #bababa;text-align:left;}.editor_btn{position:relative;margin-right:14px;display:inline-block;white-space:nowrap;}.editor_btn_text{display:inline-block;padding:0 0 2px 18px;padding-top:1px\u005C0;*padding:2px 0 0 18px;width:auto;height:auto;}.MacOS .editor_btn_text{padding-top:1px;}.menu_bd .editor_btn_text{padding-top:0;padding-bottom:0;}.editor_btn .ico_moreupload{margin-left:3px;cursor:pointer;}.qmEditorNetDisk,.qmEditorPhoto,.qmEditorScreenSnap,.qmEditorMo,.qmEditorMusic,.qmEditorWord,.qmEditorTxtStyle,.qmEditorMore,.qmEditorMap,.qmEditorVote,.icon_editor_arrow_up,.icon_editor_arrow_down{background-image:url($images_path$../js/com/kits/qmeditor/base/images/newicon/compose27b687.png);background-repeat:no-repeat;}.qmEditorNetDisk{background-position:0 -576px;}.qmEditorPhoto{background-position:0 -72px;}.qmEditorScreenSnap{background-position:0 -119px;}.qmEditorScreenSnapDisable{background-position:0 -287px;}.qmEditorMo{background-position:0 -96px;}.qmEditorToolBarItem .qmEditorMo{background-position:4px -94px;}.qmEditorMusic{background-position:0 -144px;}.menu_bd .qmEditorMusic{background-position:0 -142px;}.qmEditorWord{background-position:1px -623px;}.qmEditorTxtStyle{background-position:0 -167px;}.qmEditorMore{background-position:0 -668px;}.qmEditorMap{background-position:0 -691px;}.menu_item_high .qmEditorMap{background-position:0 -741px;}.qmEditorVote{background-position:0 -716px;}.icon_editor_arrow_up,.icon_editor_arrow_down{display:inline-block;width:6px;height:12px;vertical-align:top;position:relative;top:2px;background-position:0 -648px;}.icon_editor_arrow_down{background-position:-12px -648px;}.qmEditorResume{background:url($images_path$webp/newicon/compose207c92.png) 0 -682px no-repeat;}.qmEditorPhotoWrap{margin-right:11px;}.editor_btn .qmEditorPhoto{padding-left:20px;}.editor_btn .qmEditorMo{padding-left:20px;}.editor_btn .qmEditorTxtStyle{padding-top:0\u005C9;_padding-top:2px;}.qmEditorMo .qmEditorIcon{background-position:5px -94px;}.qmEditorPhoto .qmEditorIcon{background-position:5px -94px;}.qmEditorScreenSnap .qmEditorIcon{background-position:5px -94px;}.editor_netdisk_btn{display:none;}.editor_netdisk_open .editor_netdisk_btn{display:inline-block;}.editor_netdisk_open .editor_netdisk_txtmini{display:none;}.qmEditorToolBarItem .qmEditorPhoto,.qmEditorToolBarItem .qmEditorScreenSnap,.qmEditorToolBarItem .qmEditorMo,.qmEditorToolBarItem .qmEditorWord{background:none;}.qmEditorToolBarItem .qmEditorPhoto .qmEditorIcon{width:24px;background-position:-766px 2px;}.qmEditorToolBarItem .qmEditorScreenSnap .qmEditorIcon{width:22px;background-position:-796px 2px;}.qmEditorToolBarItem .qmEditorBtnIconMo .qmEditorIcon{width:14px;background-position:-832px 2px;}.qmEditorToolBarItem .qmEditorBtnIconWord .qmEditorIcon{width:12px;background-position:-864px 2px;}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.qmEditorNetDisk,.qmEditorPhoto,.qmEditorScreenSnap,.qmEditorMo,.qmEditorMusic,.qmEditorWord,.qmEditorTxtStyle,.qmEditorMore,.qmEditorMap,.qmEditorVote,.icon_editor_arrow_up,.icon_editor_arrow_down{background-image:-webkit-image-set(url($images_path$../js/com/kits/qmeditor/base/images/newicon/compose27b687.png) 1x,url($images_path$../js/com/kits/qmeditor/base/images/newicon/compose_2x27b687.png) 2x);}.menu_item_high .qmEditorMap{background-position:0 -691px;}.qmEditorResume{background-image:-webkit-image-set(url($images_path$webp/newicon/compose207c92.png) 1x,url($images_path$webp/newicon/compose@2X211f08.png) 2x);}.qmEditorToolBarItem .qmEditorPhoto,.qmEditorToolBarItem .qmEditorScreenSnap,.qmEditorToolBarItem .qmEditorMo,.qmEditorToolBarItem .qmEditorWord{background:none;}.qmEditorIcon{background-image:-webkit-image-set(url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_new1e9c5d.gif) 1x,url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_new@2X1e9c5d.gif) 2x);}.qmEdMap_bg{background-image:-webkit-image-set(url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_map248228.png) 1x,url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_map_2x24825d.png) 2x);}.qmEdMap_iconLocation{background-image:-webkit-image-set(url($images_path$../js/com/kits/qmeditor/base/images/newicon/icon_location24c44c.png) 1x,url($images_path$../js/com/kits/qmeditor/base/images/newicon/icon_location_2x24c44c.png) 2x);}.qmEdMap_resultMapControl_btn{background-image:-webkit-image-set(url(zh_CN/htmledition/images/common.png) 1x,url(zh_CN/htmledition/images/common_2x.png) 2x);}}'].join('\n');
function b(e)
{
if(!e)
{
e={};
}
this._msEditorId=e.editorId||["QMEditor",(new Date()).valueOf()].join("");
this._msTbExternId=e.tbExternId||"QMEditorToolBarPlusArea";
this._moTbExternObj=e.tbExternObj;
this._moEditorAreaWin=e.editorAreaWin||window;
this._msEditorAreaId=e.editorAreaId||"QMEditorArea";
this._moEditorAreaObj=e.editorAreaObj;
this._mnFixedHeight=e.height;
this._moAllowCustomTag=e.customtags;
this._msResPath=e.resPath||a.getPath("image");
this._moLanguage=e.language||b.CONST.LANGUAGE.zh_CN;
this._moTemplate=b.CONST._TEMPLATE;
this._msStyle=[";",e.style].join("").toLowerCase();
this._moFuncList=e.funclist||b.CONST.FUNCLIST.BASE;
this._msEditMode="html";
this._msEditorStatus="NotInited";
this._moLoaddingFile={};
this._moInfile={};
this._mnAutoRisizeMinHeight=e.nAutoRisizeMinHeight;
this._mbNoEditScroll=e.isNoEditScroll;
this._mbIsOpenEditBar=e.isOpenEditBar;
this._mbIsAutoMatchBrackets=e.isMatchBrackets;
var f=b.CONST.FILES;
for(var h in f)
{
var g=f[h].split(" ");
for(var k=g.length-1;k>=0;k--)
{
this._moInfile[g[k]]=h;
}
}
this._mbNotAllowArrow=e.bNotAllowArrow;
this._mfOnLoad=e.onload;
this._mfOnFocus=e.onfocus;
this._mfOnBlur=e.onblur;
this._mfOnClick=e.onclick;
this._mfOnMouseDown=e.onmousedown;
this._mfOnMouseOver=e.onmouseover;
this._mfOnMouseOut=e.onmouseout;
this._mfOnKeyDown=e.onkeydown;
this._mfOnKeyPress=e.onkeypress;
this._mfOnKeyUp=e.onkeyup;
this._mfOnPaste=e.onpaste;
this._mfOnPutContent=e.onputcontent;
this._mfOnBeforeSaveRange=e.onbeforesaverange;
this._mfOnUserSelectChange=e.onselectionchange;
this._mfOnChangeContentType=e.onchangecontenttype;
this._mfOnChangeBgMusic=e.onchangebgmusic;
this._mfOnShowInstallactive=e.onshowinstallactive;
this._mfOnPreview=e.onpreview;
this._mfOnUploadEml=e.onuploademl;
this._msPhotoActionSrc=e.photoCGI;
this._moPhotoConfig=e.photoConfig;
this._moFuncConfig=e.funcConfig;
this._moParamSet=e;
this._moCustomVar=e.customVar||{};
this._moPrevCmdList=[];
this._moResizeEditorHeightList=[];
}
;b.prototype.getEditorId=function(){
return this._msEditorId;
};
b.prototype.getPhotoActionSrc=function(){
return this._msPhotoActionSrc;
};
b.prototype.getTbExtern=function(){
var f=this,e=f._moTbExternObj;
return e?e:(f._moTbExternObj=a.S(f._msTbExternId,f._moEditorAreaWin));
};
b.prototype.getTbExternInfo=function(e){
var f=this;
if(!e)
{
return f._moTbExternInfo;
}
for(var g=f._moTbExternInfo.length-1;g>=0;g--)
{
if(f._moTbExternInfo[g].funcName==e)
{
return f._moTbExternInfo[g];
}
}
};
b.prototype.getEditorArea=function(){
var f=this,e=f._moEditorAreaObj;
return e?e:(f._moEditorAreaObj=a.S(f._msEditorAreaId,f._moEditorAreaWin));
};
b.prototype.getEditorAreaWin=function(){
return this._moEditorAreaWin;
};
b.prototype.getEditorConfig=function(e){
return e?this._moParamSet[e]:this._moParamSet;
};
b.prototype.getEditorCustomVar=function(e){
if(!e)
{
return this._moCustomVar;
}
else{
var f=e.split('.');
var g=this._moCustomVar;
for(var h=0,j=f.length;h<j;h++)
{
if(g&&typeof (g)=='object'&&g[f[h]])
{
g=g[f[h]];
}
else{
return;
}
}
return g;
}
};
b.prototype.setEditorCustomVar=function(e,f){
var g=e.split('.');
var j=g.pop();
var h=this._moCustomVar;
for(var k=0,l=g.length;k<l;k++)
{
if(h&&typeof (h)=='object')
{
h=h[g[k]];
}
else{
h[g[k]]={};
}
}
h[j]=f;
return this;
};
b.prototype.getContentType=function(){
return this._msEditMode=="text"?"text":"html";
};
b.prototype.adjustBodyStyle=function(e,f){
try{
"txt"!==this._msEditCore&&(this._moEditBody.style[e]=f);
}
catch(g)
{
a.debug("QMEditor adjustBodyStyle err:"+g.message);
}
return this;
};
b.prototype.getBodyStyle=function(e){
return "txt"!==this._msEditCore?this._moEditBody.style[e]:"";
};
b.prototype.getEditWin=function(){
return this._moEditWin;
};
b.prototype.initialize=function(h,e,f,g){
var i=this;
if(!(i.getEditorArea())||i._msEditorStatus!="NotInited")
{
return false;
}
i._msEditorStatus="Initlizing";
a.evalCss(d,this._moEditorAreaWin,"qmEditor");
((/android|ipad|iphone|ipod/i).test(a.gsAgent)?i._initializeForTxt:i._initializeForIframe).call(i,h||b.getBreakLine(),f,g,function(){
if("txt"!==i._msEditCore)
{
i._fixHtmlContent();
i._setFixFocusEvent();
i._setFixIEBreakLineEvent();
i._setFixIEBackSpaceEvent();
i._setEditorSelectionChangeEvent();
}
i._setUnloadEvent();
i._setMouseEvent();
i._setKeyDownEvent();
i._setFocusEvent();
i._setupPlugins();
i._msEditorStatus="Ready";
i.setReadyTimeStamp();
b.setEditor(i);
if("txt"!==i._msEditCore)
{
i._initializeToolbar();
e&&i.showToolBar(true);
}
i._autoResizeEditor();
i._initNoEditScroll();
if(typeof (i._mfOnLoad)=="function")
{
i._moEditorAreaWin.setTimeout(function(){
i._mfOnLoad.call(i);
});
}
});
return true;
};
b.prototype.isInitialized=function(){
return this._msEditorStatus=="Ready";
};
b.prototype.setReadyTimeStamp=function(){
this._msReadyTimeStamp=a.now();
};
b.prototype.getReadyTimeStamp=function(){
return this._msReadyTimeStamp;
};
b.prototype.isSelectionInObject=function(e){
if(!e||"txt"===this._msEditCore)
{
return;
}
if(this._moEditWin.getSelection)
{
var n=this._moEditWin.getSelection();
if(n&&n.rangeCount>0)
{
var l=n.getRangeAt(0),k=this._moEditDoc.createRange();
k.selectNode(e.firstChild||e);
var g=l.compareBoundaryPoints(Range.START_TO_START,k)>-1;
k.selectNode(e.lastChild||e);
var f=l.compareBoundaryPoints(Range.END_TO_END,k)==-1;
if(!(g&&f))
{
return false;
}
}
else{
return false;
}
}
else{
var l=this._moEditDoc.body.createTextRange();
l.moveToElementText(e);
var n=this._moEditDoc.selection;
if(n.type=="None"&&typeof n.typeDetail=="unknown")
{
return true;
}
var m=n.createRange();
if(n.type=="Control")
{
for(var o=0,h=m.length;o<h;o++)
{
if(m(o).parentNode)
{
var j=m(o).parentNode;
m=this._moEditDoc.body.createTextRange();
m.moveToElementText(j);
break;
}
}
}
if(!l.inRange(m)&&!m.text&&!m.htmlText)
{
return false;
}
}
return true;
};
b.prototype.focus=function(e,f){
var j=this,i=null;
if("txt"===j._msEditCore)
{
i=j._moEditBody;
}
else{
switch(j._msEditMode)
{case "text":
j._moEditorAreaWin.focus();
j._moTextBody.focus();
i=j._moTextBody;
break;
case "source":
j._moEditorAreaWin.focus();
j._moSrceBody.focus();
i=j._moSrceBody;
break;
case "html":
default:
if(!(i=f))
{
j._mnFixedHeight&&a.gbIsFF&&j._moEditBody.focus();
i=j._hasDesignMode(j._moEditDoc)?j._moEditWin:j._moEditBody;
i.focus();
}
if(a.gbIsIE)
{
var g=f&&f.firstChild,h;
if(g&&g.nodeName=="DIV")
{
if(h=g.firstChild)
{
h.nodeName=="FONT"&&(i=h);
}
}
}
break;
}
}
j._setCursorPos(i,e);
};
b.prototype.scrollTo=function(e){
var f=this;
switch(f._msEditMode)
{case "html":
f._moEditBody.scrollTop=e;
break;
case "text":
f._moTextBody.scrollTop=e;
break;
case "source":
f._moSrceBody.scrollTop=e;
break;
}
};
b.prototype.showCursor=function(){
try{
this._moEditDoc.selection.createRange().select();
}
catch(f)
{
}
};
b.prototype.changeContentType=function(f,e){
var h=this,g=!f?(this.getContentType()=="text"?true:false):(f=="text"?false:true);
f=g?"html":"text";
if(f==this.getContentType())
{
return true;
}
if("txt"!==this._msEditCore)
{
if(!g&&!confirm(this._moLanguage.CHG_CONTENTTYPE))
{
return false;
}
this._moEditObj.style.display=g?"block":"none";
this._moTextBody.style.display=g?"none":"block";
this._moSrceBody.style.display="none";
if(!g)
{
this._syncHtmlContentTo("text");
setTimeout(function(){
h._textResize();
},200);
}
else{
this._syncTextContentTo("html");
}
this.showToolBar(g?this.isShowToolBar():false,true);
a.show(this.getTbExtern(),g);
}
this._msEditMode=f;
this.focus(0);
if(typeof (this._mfOnChangeContentType)=="function")
{
this._mfOnChangeContentType.call(this);
}
return true;
};
b.prototype.showToolBar=function(f,e){
var g=this;
if("txt"!==g._msEditCore)
{
f=f==null?!g.isShowToolBar():f;
!e&&g._moToolBarObj.setAttribute("disp",f?"true":"false");
g._moToolBarObj.parentNode.style.display=f?"":"none";
g._fixHeight();
g.resizeNoScrollEditor();
}
};
b.prototype.isShowToolBar=function(){
return "txt"!==this._msEditCore&&this._moToolBarObj&&this._moToolBarObj.getAttribute("disp")=="true";
};
b.prototype.isSupportToolBar=function(){
return "txt"!==this._msEditCore;
};
b.prototype.getBgMusicInfo=function(){
return "txt"!==this._msEditCore?this._moBgMusicInfo:null;
};
b.prototype.getContent=function(e){
var f=this;
return ("txt"!==f._msEditCore?f.getEditContent:f._getEditContentForTxt).call(f,f._msEditMode,e);
};
b.prototype.getContentByHasMapWarpLink=function(f){
var t;
try{
var o=this;
if("txt"===o._msEditCore)
{
return f;
}
var q=getTop();
var i;
try{
i=((q.getActionWin&&q.getActionWin()||q).document);
}
catch(u)
{
i=document;
}
;var j=i.createElement('div'),p=i.createElement('div'),k=q.TE(['<a href="$jump$" target="_blank" notForEdit="true" attr-hasmapwrap="1">$img$</a>']),s,l,n,r,m,g;
j.style.display='none';
p.style.display='none';
i.body.appendChild(j);
j.innerHTML=f;
n=q.finds('img[ui-type="share_map"]',j);
for(var h=n.length-1;h>-1;--h)
{
l=n[h];
r=q.attr(l,"jump");
m=l.parentNode;
if(!(r&&/apis\.map\.qq\.com/i.test(r))||(m&&/^a$/i.test(m.tagName)&&q.attr(m,"attr-hasmapwrap")=="1"))
{
continue;
}
p.appendChild(l.cloneNode());
s=k.replace({jump:r,img:p.innerHTML});
p.innerHTML="";
q.replaceHTML(l,s);
g=true;
}
g&&(q.LogKV('insertmap|mapmailsend|kv'));
t=j.innerHTML;
q.removeSelf(p);
q.removeSelf(j);
}
catch(u)
{
t=f;
}
return t;
};
b.prototype.getContentWidthSpellcheck=function(e){
var f=this;
return ("txt"!==f._msEditCore?f.getEditContent:f._getEditContentForTxt).call(f,f._msEditMode,e,1);
};
b.prototype.getContentObj=function(e){
return "txt"!==this._msEditCore?a.S(e,this._moEditWin):null;
};
b.prototype.getContentTags=function(e){
return "txt"!==this._msEditCore?a.GelTags(e,this._moEditDoc):[];
};
b.prototype.setContent=function(e){
var f=this;
return ("txt"!==f._msEditCore?f.setEditContent:f._setEditContentForTxt).call(f,f._msEditMode,e);
};
b.prototype.setBgMusicInfo=function(g,f,h){
if("txt"!==this._msEditCore)
{
var e=this._moBgMusicInfo||{},k=e.song,j=e.singer,l=e.url,i=!k&&!g?h!=l:(k!=g||j!=f);
this._moBgMusicInfo=!g&&!h?null:{song:g,singer:f,url:h};
if(!i)
{
return;
}
if(this._onprivatechangebgmusic&&typeof (this._onprivatechangebgmusic)=="function")
{
this._onprivatechangebgmusic(this);
}
if(typeof (this._mfOnChangeBgMusic)=="function")
{
this._mfOnChangeBgMusic.call(this);
}
}
};
b.prototype.hideMenu=function(e,f){
var g=a.QMMenu();
for(var h in g)
{
g[h].close();
}
};
b.prototype.addEvent=function(f,e){
if(typeof (e)!="function")
{
return false;
}
var g=["on",f,"List"].join("");
if(!this[g])
{
this[g]=[];
}
this[g].push(e);
return true;
};
b.prototype.saveRange=function(){
if("txt"!==this._msEditCore&&this._mbIsFocus)
{
if(typeof (this._mfOnBeforeSaveRange)=="function")
{
this._mfOnBeforeSaveRange.call(this);
}
this._moEditorRange=this._getRange();
}
};
b.prototype.loadRange=function(e){
if("txt"!==this._msEditCore)
{
if(this._setRange(this._moEditorRange))
{
if(e!="notclear")
{
this.clearRange();
}
}
}
};
b.prototype.clearRange=function(){
this._moEditorRange=null;
};
b.prototype.loadLastRange=function(){
return this._loadLastRange();
};
b.prototype.paste=function(){
"txt"!==this._msEditCore&&this.execCmd("paste");
};
b.prototype.updateToolBarUI=function(e){
if("txt"!==this._msEditCore)
{
var f=function(g){
a.E(g,function(h){
if(h.funcObj&&h.funcName==e)
{
h.funcObj._updateUI();
}
});
};
f(this._moToolBarInfo);
f(this._moTbExternInfo);
}
};
b.prototype.test=function(){
try{
return (this.getEditorArea().getAttribute("QMEditorId")==this._msEditorId&&("txt"===this._msEditCore?true:a.GelTags("td",this._moEditorAreaObj)[1].firstChild==this._moEditObj));
}
catch(e)
{
return false;
}
};
b.prototype.resetFixHeight=function(){
var e=this;
e._moEditorAreaObj.style.height=e._mnFixedHeight;
a.gbIsIE&&(a.GelTags("td",e._moEditorAreaObj)[1].style.height=e._mnFixedHeight);
e._moEditObj.style.height=e._mnFixedHeight;
};
b.prototype.setMapImgFlag=function(e){
if(e)
{
this._moMapImg?this._moMapImg.push(true):(this._moMapImg=[true]);
}
else{
this._moMapImg?this._moMapImg.pop():"";
}
};
b.prototype.hasMapImg=function(){
return (this._moMapImg&&this._moMapImg.length>0);
};
b.prototype.insertImage=function(g,e,f){
var h=this,i=getTop(),j=(f&&f.cmd||"InsertImage");
this.execCmd(j,g,function(){
var q=h._moEditDoc.selection,k=f&&f.bIsFromMap,m;
if(q&&q.type=="Control")
{
m=h.getSelectionElement();
var p=h._moEditDoc.body.createTextRange();
p.moveToElementText(m);
p.moveEnd("character",k?0:1);
p.collapse(false);
p.select();
}
else{
var p=h._moEditWin.getSelection().getRangeAt(0);
m=p.startContainer.childNodes[p.startOffset-1];
}
if(k)
{
var n=h.getImgDom(m);
if(n)
{
if(f.isLoading)
{
n.style.cssText="padding: 109px 196px 109px 197px;border: 1px solid #b0b0b0;*padding: 0;*margin: 109px 196px 109px 197px;*border: 0;";
i.attr(n,"ui-type","qqmail_share_map_loading");
try{
if(n.previousSibling&&!(/^br$/i.test(n.previousSibling.tagName))||n.previousSibling.nodeType==3)
{
i.insertHTML(n,"beforeBegin","<div></br></div>");
}
}
catch(r)
{
}
}
else{
n.height=250;
n.width=425;
i.attr(n,"ui-type","share_map");
i.attr(n,"stitle",f.title);
i.attr(n,"center",f.center);
i.attr(n,"skwd",f.searchkeyword);
i.attr(n,"pos",f.pos);
i.attr(n,"jump",f.sMapRedirectUrl);
i.attr(n,"desc",f.detaildesc);
i.attr(n,"zoom",f.zoom);
n.style.cssText="border: 1px solid #b0b0b0;";
try{
if(i.gbIsIE)
{
n.contentEditable=false;
var o=n.previousSibling||n.parentNode,l=true;
while(!(i.attr(o,"ui-type")=="qqmail_share_map_loading"&&/img/i.test(o.tagName))&&(9!=o.nodeType)||(l=false))
{
o=o.previousSibling||o.parentNode;
}
!l&&i.removeSelf(o);
}
else{
if(n.previousSibling&&/img/i.test(n.previousSibling.tagName))
i.removeSelf(n.previousSibling);
}
if(n.nextSibling)
{
if(!(/^br$/i.test(n.nextSibling.tagName))||n.nextSibling.nodeType==3)
{
i.insertHTML(n,"afterEnd","</br>");
}
n.nextSibling.nextSibling&&h._setCursorPos(n.nextSibling.nextSibling,0);
}
else{
if(n.parentNode.nextSibling&&n.parentNode.nextSibling.nodeType==1)
{
h._setCursorPos(n.parentNode.nextSibling,0);
}
else{
i.insertHTML(n,"afterEnd","<div></br></div>");
n.nextSibling&&h._setCursorPos(n.nextSibling,0);
}
}
}
catch(r)
{
}
}
}
}
h.autoScaleImg(m,g);
typeof e=="function"&&e.call(h,g,m);
typeof h.onafterinsertimage=="function"&&h.onafterinsertimage(_asPicUrl);
});
};
b.prototype.getImgDom=function(e){
var f,g;
if(e.nodeName=="IMG")
{
f=e;
}
else{
g=e.getElementsByTagName&&e.getElementsByTagName("IMG");
f=(g&&g.length)&&g[0];
}
return f;
};
b.prototype.autoScaleImg=function(e,f){
var m=this,l=m.getImgDom(e);
if(l)
{
var q=f.match(/originalwidth=.*&/),o=f.match(/originalheight=.*/),p=q&&q[0],n=o&&o[0],j=p&&parseInt(p.split('=')[1]),i=n&&parseInt(n.split('=')[1]),g=!!j&&!!i,k=parseInt(m._moEditorAreaObj.clientWidth*0.8||960);
if(g)
{
h(k,j,i);
m.resizeNoScrollEditor();
}
else{
a.addEvent(l,"load",function(){
h(k);
m.resizeNoScrollEditor();
});
}
}
function h(t,s,r)
{
var y=s||parseInt(l.naturalWidth||l.offsetWidth),x=r||parseInt(l.naturalHeight||l.offsetHeight),B=l.getAttribute("modifysize"),z,A,w;
!l.naturalWidth&&(l["naturalW"]=y);
!l.naturalWidth&&(l["naturalH"]=x);
if(B)
{
var z=parseInt(B||100),A=parseInt(y*(z/100)),w=parseInt(x*(z/100));
l.style.width=A+"px";
l.style.height=w+"px";
}
else if(y>t)
{
var w=parseInt(t*(x/y)),A=t,z=A/y,u=z<0.25,v=parseInt((z-(u?0:0.25))*60*(u?1:(100/175)))+(-1);
l.style.width=A+"px";
l.style.height=w+"px";
l.setAttribute("modifysize",(parseInt(z*100)||1)+"%");
l.setAttribute("diffpixels",v+"px");
l.setAttribute("scalingmode",u?"normal":"zoom");
}
}
};
b.prototype._initializeForIframe=function(h,f,g,e){
var i=this,j=i._moTemplate,k=i._mnFixedHeight?"height:"+i._mnFixedHeight:"";
i._moEditorAreaObj.innerHTML=j._FRAME_BASE.replace({border:i._msStyle.indexOf(";border:none")!=-1?"border:none;":"",tabIdx:f,style:k});
a.createBlankIframe(i._moEditorAreaWin,{obj:a.GelTags("textarea",i._moEditorAreaObj)[0].parentNode,where:"afterBegin",className:"qmEditorIfrmEditArea",scrolling:"auto",style:k,attrs:["hideFocus",isNaN(f)?"":" tabIndex="+f].join(""),header:j._FRAME_HEADER.replace({'base_href':'href="'+i._moEditorAreaWin.location.protocol+'//'+i._moEditorAreaWin.location.host+'"','base_target':''}),body:j._FRAME_BODY.replace({editable:i._hasDesignMode(document)?"":"contentEditable=true",accesskey:g?'accesskey="'+g+'"':'',content:h}),defcss:false,onload:function(){
i._msEditCore="iframe";
i._moEditObj=this;
i._moEditWin=i._moEditObj.contentWindow;
i._moEditDoc=i._moEditWin.document;
i._moEditBody=i._moEditDoc.body;
i._moSrceBody=i._moEditObj.nextSibling;
i._moTextBody=i._moSrceBody.nextSibling;
i.setContentEditable();
i._setAllowCustomTag();
i._fixHeight();
i._mbIsFinish=true;
e.call(i);
}});
};
b.prototype._initializeForTxt=function(h,f,g,e){
var i=this,j=i._moTemplate,k=i._mnFixedHeight?"height:"+i._mnFixedHeight:"";
i._moEditorAreaObj.innerHTML=i._moTemplate._FRAME_BASE.replace({editcontainer:i._moTemplate._FRAME_TXT.replace({style:k,tabIdx:f}),border:i._msStyle.indexOf(";border:none")!=-1?"border:none;":"",style:k});
i._msEditCore="txt";
i._msEditMode="text";
var l=a.S("contenttype",i._moEditorAreaWin);
if(l)
{
l.disabled=true;
l.checked=true;
}
i._moEditObj=a.GelTags("td",i._moEditorAreaObj)[1].firstChild;
i._moEditBody=i._moEditObj;
i.setContentEditable();
e.call(i);
};
b.prototype._initializeToolbar=function(){
this._moToolBarObj=a.GelTags("td",this._moEditorAreaObj)[0];
this.getTbExtern();
this._moRichToolBarObj=this._moToolBarObj.firstChild.firstChild;
this._moSrceToolBarObj=this._moRichToolBarObj.nextSibling;
if((this._moToolBarInfo=this._pasteFuncList(this._moFuncList.toolbar)).length>0)
{
for(var f=this._moToolBarInfo.length-1;f>=0;f--)
{
a.insertHTML(this._moRichToolBarObj,"afterBegin",this._moTemplate._TOOLBAR_ITEM);
this._moToolBarInfo[f].funcArea=this._moRichToolBarObj.firstChild;
}
}
if((this._moTbExternInfo=(this._moTbExternObj&&this._pasteFuncList(this._moFuncList.tbExtern))||[]).length>0)
{
for(var f=this._moTbExternInfo.length-1;f>=0;f--)
{
a.insertHTML(this._moTbExternObj,"afterBegin",this._moTemplate._TBEXTERN_ITEM);
this._moTbExternInfo[f].funcArea=this._moTbExternObj.firstChild;
}
}
var e=this;
this._moEditorAreaWin.setTimeout(function(){
e._setupFunction();
},100);
};
b.prototype.setContentEditable=function(){
if(this._hasDesignMode(this._moEditDoc))
{
this._moEditDoc.designMode="on";
this.execCmd("useCSS",false);
this._moEditorAreaWin.focus();
}
this._moEditorAreaObj.setAttribute("QMEditorId",this._msEditorId);
};
b.prototype._setAllowCustomTag=function(){
var e=this._moAllowCustomTag,f=this._moEditDoc;
if(e)
{
a.E(e,function(g){
f.createElement(g);
});
}
return this;
};
b.prototype._pasteFuncList=function(e){
var f=[];
a.E((e||"").replace(/\|/ig,"Separate").split(" "),function(g){
if(g)
{
f.push({funcName:g});
}
});
return f;
};
b.prototype._setupFunction=function(){
var f=this,e={};
function g(h,i)
{
a.E(h,function(k){
if(!k.funcObj)
{
var m=k.funcName;
if(b.FUNCLIB[m])
{
if(m=="Photo")
a.addClass(k.funcArea,"qmEditorPhotoWrap");
k.funcObj=new b.FUNCLIB[m]({oParamSet:f._moParamSet,container:k.funcArea,editor:f,uiType:i});
k.funcObj._setup({container:k.funcArea,uiType:i});
if(m=="Map")
{
f.setMapFunc(k.funcObj);
a.removeSelf(k.funcArea);
}
else if(m=="More")
{
var l=(function(n){
return function(){
if(f._mbIsGuideMap)
{
try{
n.funcObj._doShowMenuClick.call(n.funcObj,{srcElement:n.funcArea});
n.funcObj._moMenu.selectItem("map");
}
catch(o)
{
}
}
};
})(k);
f.setMoreFunc(l);
}
}
else if(f._moInfile[m])
{
e[f._moInfile[m]]=true;
}
else{
a.debug('editor not defined '+m);
}
}
});
if(f.getEditorId()=="compose")
{
var j=f.getMoreFunc();
j&&j();
}
}
;g(this._moToolBarInfo,"icon");
g(this._moTbExternInfo,this._msStyle.indexOf(";icon:big")!=-1?"big":"text");
this.loadFile(e);
};
b.prototype.setMapFunc=function(e){
this._moMapFunc=e;
};
b.prototype.getMapFunc=function(){
return this._moMapFunc;
};
b.prototype.setMoreFunc=function(e){
this._moMoreFunc=e;
};
b.prototype.getMoreFunc=function(){
return this._moMoreFunc;
};
b.prototype.loadFile=function(f,e){
if(!this._moLoaddingFile)
{
this._moLoaddingFile={};
}
for(var i in f)
{
var h=this._moLoaddingFile[i],g=h?(a.now()-h>2000):true;
if(g)
{
a.loadJsFile(a.getRes(i),false,document,e);
this._moLoaddingFile[i]=a.now();
}
}
return this;
};
b.prototype._hasDesignMode=function(e){
var f=e&&e.designMode&&e.designMode.toString().toLowerCase()||"";
return (f=="off"||f=="on")&&!a.gbIsWebKit;
};
b.prototype.getEditContent=function(g,e,f){
switch(g)
{case "html":
var i=this._moEditBody,j=this._moToolBarInfo&&this._moToolBarInfo.SpellCheck;
if(!f&&j&&(j.getStatus()&2))
{
var h=F("spellcheckDocument",a.window).document,l=i.innerHTML;
if(h.body&&l!=h.body.innerHTML)
{
h.body.innerHTML=l;
j._removeAllSpellCheck(h);
i=h.body;
}
}
var k=e?(i.innerText||i.textContent||""):i.innerHTML;
return k.replace(/<!--\[/g,'<!-- [').replace(/\]-->/g,'] -->');
case "text":
return this._moTextBody.value+"<br>";
case "source":
return this._moSrceBody.value;
}return "";
};
b.prototype._getEditContentForTxt=function(f,e){
if(e||f=="text")
{
return this._moEditBody.value;
}
else{
return (a.gbIsIE||a.gbIsOpera?textToHtml:textToHtmlForNoIE)(this._moEditBody.value);
}
};
b.prototype.setEditContent=function(f,e){
var g=this;
switch(f)
{case "html":
var i=e.replace(/<img.*?>/gi,function(j){
return j.replace(/onload=\".*?\"/gi,"").replace(/onload=\'.*?\'/gi,"");
});
i=i.replace(/height\s*=\s*(\'|\")*\s*\d{1,3}(\.\d*)?%\s*\1/gi,"").replace(/height\s*:\s*\d{1,3}(\.\d*)?%;/gi,"");
this._moEditBody&&(this._moEditBody.innerHTML=i||b.getBreakLine());
this._fixHtmlContent()._clearLastRange();
var h=g._moToolBarInfo&&g._moToolBarInfo.SpellCheck;
h&&h.setSpellCheckEvent();
setTimeout(function(){
g.resizeNoScrollEditor(true);
if(a.gbIsFF)
{
g.setContentEditable();
}
},500);
break;
case "text":
g._moTextBody.value=e;
break;
case "source":
g._moSrceBody.value=e;
break;
}return this;
};
b.prototype._setEditContentForTxt=function(f,e){
var g=htmlDecode(e.replace(/\n/ig,"").replace(/<div>[ \t]*<br>[ \t]*<\/div>/ig,"\n").replace(/<div .*?>[ \t]*<br .*?>[ \t]*<\/div>/ig,"\n").replace(/(<\/div>)|(<\/p>)|(<br\/?>)/ig,"\n").replace(/<.*?>/ig,"")).replace(/&nbsp;/ig," ").replace(/[\t ]*\n/g,"\n").replace(/\s*$/,"");
this._moEditBody.value=g;
};
b.prototype._syncHtmlContentTo=function(e){
switch(e)
{case "text":
if(!a.gbIsIE&&!a.gbIsWebKit)
{
this.setEditContent("html",htmlToText(this.getEditContent("html")));
}
this.setEditContent("text",this.getEditContent("html",true));
break;
case "source":
this.setEditContent("source",this.getEditContent("html"));
break;
}return this;
};
b.prototype._syncTextContentTo=function(e){
if(e=="html"||e=="source")
{
this.setEditContent("html",(a.gbIsIE||a.gbIsOpera?textToHtml:textToHtmlForNoIE)(this.getEditContent("text")));
}
if(e=="source")
{
this._syncHtmlContentTo("source");
}
};
b.prototype._setCursorPos=function(f,e){
if(f&&typeof (e)=="number")
{
if(!window.getSelection)
{
var h=(f.createTextRange?f:this._moEditBody).createTextRange();
h.moveToElementText(f);
h.moveStart("character",e);
h.collapse(true);
h.select();
}
else if(f.tagName!="TEXTAREA")
{
var i=this;
function g()
{
i._moEditWin.focus();
var k=i._moEditWin.getSelection();
if(!k)
{
return false;
}
if(k.rangeCount>0)
{
k.removeAllRanges();
}
var j=i._moEditDoc.createRange();
j.selectNode(f&&f.firstChild||(f.nodeType?f:null)||i._moEditBody.firstChild||i._moEditBody);
j.collapse(true);
k.addRange(j);
return true;
}
if(!g())
{
this._moEditorAreaWin.setTimeout(g);
}
}
else{
f.selectionStart=e;
f.selectionEnd=e;
}
}
return this;
};
b.prototype._isSelectionInEditArea=function(e){
if(e!="equal")
{
return true;
}
var g=this._moEditDoc.body.createTextRange();
g.moveToElementText(e=="equal"?this._moEditBody:this._moEditorAreaObj);
try{
return g[e=="equal"?"isEqual":"inRange"](this._moEditDoc.selection.createRange());
}
catch(f)
{
return false;
}
};
b.prototype._fixHtmlContent=function(){
if(typeof (this._mfOnPutContent)=="function")
{
try{
this._mfOnPutContent.call(this);
}
catch(e)
{
}
}
if(a.gbIsIE)
{
a.E(a.GelTags("div",this._moEditBody),function(f){
var g=f.firstChild,h=g&&g.nodeType==3&&!g.nextSibling?g.nodeValue:"";
if(h.length==1&&fixNonBreakSpace(h)==" ")
{
f.innerHTML="";
}
});
}
return this;
};
b.prototype._fixHeight=function(){
if(a.gbIsIE)
{
var i=this,h=i.getEditorArea(),e=h.clientHeight||h.offsetHeight||(+h.style.height),f=i.isShowToolBar()?i._moToolBarObj.clientHeight:0,g=e-f-2;
!isNaN(g)&&g>0&&(i._moEditObj.parentNode.style.height=i._moSrceBody.style.height=i._moTextBody.style.height=g+"px");
if(!i._mbIsSetFixHeightEvent&&(i._mbIsSetFixHeightEvent=true))
{
h.onpropertychange=function(){
i._fixHeight();
};
}
}
};
b.prototype._setUnloadEvent=function(){
var e=this;
a.addEvent(e._moEditorAreaWin,"unload",function(){
b.delEditor(e._msEditorId);
});
return e;
};
b.prototype._setMouseEvent=function(){
var f=this,e=f._moEditDoc;
function g()
{
f.hideMenu(null,true);
}
if(f._msEditCore=="iframe")
{
a.addEvent(e,"mousedown",g);
}
if(typeof (f._mfOnMouseDown)=="function")
{
a.addEvent("txt"===f._msEditCore?f._moEditBody:e,"mousedown",function(h){
f._mfOnMouseDown.call(f,h);
});
}
if(typeof (f._mfOnMouseOver)=="function")
{
a.addEvent("txt"===f._msEditCore?f._moEditBody:e,"mouseover",function(h){
f._mfOnMouseOver.call(f,h);
});
}
if(typeof (f._mfOnMouseOut)=="function")
{
a.addEvent("txt"===f._msEditCore?f._moEditBody:e,"mouseout",function(h){
f._mfOnMouseOut.call(f,h);
});
}
if(typeof (this._mfOnClick)=="function")
{
a.addEvent("txt"===f._msEditCore?f._moEditBody:e,"click",function(h){
f._mfOnClick.call(f,h);
});
}
return f;
};
b.prototype.moveToAncestorNode=function(e){
var f=this.getSelectionElement();
while(f&&f.nodeName!=e)
{
f=f.parentNode;
}
return f;
};
b.prototype.getSelectionElement=function(){
var h,j,k=this._moEditDoc.selection;
if(this._mbIsFocus!==true)
{
return h;
}
if(k)
{
j=k.createRange();
if(k.type=="Control")
{
if(j.length==1&&j.item(0).nodeType==1)
{
h=j.item(0);
}
else{
for(var n=0,f=j.length;n<f;n++)
{
if(j(n).parentNode)
{
h=j(n).parentNode;
break;
}
}
}
}
else{
h=j.parentElement();
}
}
else{
try{
j=this._moEditWin.getSelection().getRangeAt(0);
if(!(j.startContainer!=j.endContainer||j.startContainer.nodeType!=1||j.startOffset!=j.endOffset-1))
{
h=j.startContainer.childNodes[j.startOffset];
if(h.nodeType!=1)
{
h=null;
}
}
if(!h)
{
var l=j.startContainer,g=j.endContainer;
if(a.gbIsFF&&l.nodeType==3&&g.tagName=="BODY")
{
h=l;
}
else{
h=j.endContainer;
}
}
}
catch(m)
{
}
}
return h;
};
b.prototype._autoMatchBrackets=function(e){
var o=this,j={"(":")","[":"]","{":"}","\uFF08":"\uFF09","\"":"\"","'":"'","\u201C":"\u201D","\u2018":"\u2019"},r;
switch(e.keyCode)
{case 57:
e.shiftKey&&(r="(");
break;
case 219:
r=e.shiftKey?"{":"[";
break;
case 222:
r=e.shiftKey?"\"":"'";
break;
}if(r)
{
var h=o._moEditDoc,i=o._moEditWin,n,m,u,t,s;
if(h.selection)
{
n=h.selection;
m=n.createRange();
m.moveEnd('character',-1);
var g=m.moveEnd('character',2),v=m.text;
u=v.slice(0,1)||r;
t=v.slice(1,2)||"";
if(!!j[u]&&j[u]!=t)
{
g==2&&m.moveEnd('character',-1);
m.collapse(false);
m.select();
m.pasteHTML(j[u]);
m.moveEnd('character',-1);
m.collapse(false);
m.select();
}
}
else{
n=i.getSelection();
m=n.getRangeAt(0);
var p=m.startContainer,f=m.startOffset,l=p.childNodes[f-1];
if(p.nodeType==3)
{
t=p.nodeValue[f];
u=p.nodeValue[f-1]||"";
}
else if(l&&l.nodeValue)
{
u=l.nodeValue[0]||r;
t=p.childNodes[f].nodeValue[0]||"";
}
else{
u=r;
t="";
}
if(!!j[u]&&j[u]!=t)
{
n.removeAllRanges();
m.deleteContents();
var k=h.createRange(),q=h.createTextNode(j[u]);
if(p.nodeType==3)
{
p.insertData(f,q.nodeValue);
}
else{
p.insertBefore(q,l);
}
k.setEnd(p,f);
k.setStart(p,f);
n.addRange(k);
o.focus();
}
}
}
};
b.prototype._isMapArea=function(e){
return e&&/^a$/i.test(e.tagName)&&/share_map/i.test(getTop().attr(e,"ui-type"));
};
b.prototype._getPreMapArea=function(e){
var i=e,j=this,g=i.commonAncestorContainer,h,f=false;
if(i.endOffset==0)
{
h=g.previousSibling||g.parentNode.previousSibling;
if(j._isMapArea(h))
{
f=true;
}
}
else if(g.nodeType!=3)
{
h=g.childNodes[i.endOffset-1];
if(j._isMapArea(h))
{
f=true;
}
}
return (f&&h);
};
b.prototype._getNextMapArea=function(e){
var i=e,j=this,g=i.commonAncestorContainer,h,f=false;
if(i.endOffset==0)
{
h=g;
if(j._isMapArea(h))
{
f=true;
}
}
else if(g.nodeType==3&&i.endOffset==g.length)
{
h=g.nextSibling;
if(j._isMapArea(h))
{
f=true;
}
}
else if(g.nodeType!=3)
{
h=g.childNodes[i.endOffset];
if(j._isMapArea(h))
{
f=true;
}
}
return (f&&h);
};
b.prototype._rmMapArea=function(e){
var h=this,f=h._moEditDoc.createRange(),g=h._moEditWin.getSelection();
f.setStart(e,0);
f.setEnd(e,e.childNodes.length);
g.removeAllRanges();
g.addRange(f);
h.setMapImgFlag(false);
};
b.prototype._oprMapDom=function(e){
var k=this,l=getTop(),j=k._moEditWin.getSelection(),i=k._moEditWin.getSelection().getRangeAt(0);
if(e.keyCode==8)
{
var f=i.commonAncestorContainer,h;
if(h=k._getPreMapArea(i))
{
k._rmMapArea(h);
}
}
else if(e.keyCode==37)
{
var f=i.commonAncestorContainer,h;
if(h=k._getPreMapArea(i))
{
k._setCursorPos(h,0);
!l.gbIsFF&&a.preventDefault(e);
}
}
else if(e.keyCode==39)
{
var f=i.commonAncestorContainer,g;
if(g=k._getNextMapArea(i))
{
k._setCursorPos(g.nextSibling,0);
a.preventDefault(e);
}
}
else if(e.keyCode==46)
{
var f=i.commonAncestorContainer,g;
if(g=k._getNextMapArea(i))
{
k._rmMapArea(g);
}
}
};
b.prototype._setKeyDownEvent=function(){
var e=this;
if(typeof (e._mfOnKeyDown)=="function")
{
a.addEvent("txt"===e._msEditCore?e._moEditBody:e._moEditDoc,"keydown",function(f){
e._mfOnKeyDown.call(e,f);
});
}
if(typeof (e._mfOnKeyPress)=="function")
{
a.addEvent("txt"===e._msEditCore?e._moEditBody:e._moEditDoc,"keypress",function(f){
e._mfOnKeyPress.call(e,f);
});
}
if(typeof (e._mfOnKeyUp)=="function")
{
a.addEvent("txt"===e._msEditCore?e._moEditBody:e._moEditDoc,"keyup",function(f){
e._mfOnKeyUp.call(e,f);
e._mbIsAutoMatchBrackets&&e._autoMatchBrackets(f);
});
}
if(typeof (e._mfOnPaste)=="function")
{
a.addEvent("txt"===e._msEditCore?e._moEditBody:e._moEditDoc.body,"paste",function(f){
e._mfOnPaste.call(e,f);
});
}
return e;
};
b.prototype._setFocusEvent=function(){
var f=this;
a.addEvent(f._moEditDoc,"click",function(){
f._moEditBody.focus();
});
a.addEvents("txt"===f._msEditCore?f._moEditBody:f._moEditWin,{focus:function(g){
if(!f._mbIsFocus)
{
f._mbIsFocus=true;
if(a.gbIsFF)
{
var j=f._moEditWin.getSelection();
j.anchorNode.tagName=="BODY"&&!j.anchorOffset&&f._setCursorPos(f._moEditBody.firstChild,0);
}
else if(a.gbIsIE)
{
var h,i,k=f._moEditDoc.selection.createRange();
if(k.htmlText&&k.compareEndPoints("StartToStart",f._moEditBody.createTextRange())==0&&(h=f._moEditBody.firstChild)&&h.nodeName=="DIV")
{
if((i=h.firstChild))
{
i.nodeName=="FONT"&&f._setCursorPos(i,0);
}
else{
h.innerHTML=" ";
f._setCursorPos(h.firstChild,0);
}
}
}
if(typeof (f._mfOnFocus)=="function")
{
f._mfOnFocus.call(f,g);
}
}
},blur:function(g){
if(f._mbIsFocus)
{
f._mbIsFocus=false;
typeof (f._mfOnBlur)=="function"&&f._mfOnBlur.call(f,g);
}
}});
var e=0;
a.addEvents(f._moEditBody,{dragenter:function(g){
if(!f._mbIsFocus)
{
f._mbIsFocus=true;
typeof (f._mfOnFocus)=="function"&&f._mfOnFocus.call(f,g);
}
e&&(f._moEditorAreaWin.clearTimeout(e)||(e=0));
},dragleave:function(g){
if(f._mbIsFocus)
{
e&&f._moEditorAreaWin.clearTimeout(e);
e=f._moEditorAreaWin.setTimeout(function(){
if(f._mbIsFocus)
{
f._mbIsFocus=false;
typeof (f._mfOnBlur)=="function"&&f._mfOnBlur.call(f,g);
}
},500);
}
}});
return f;
};
b.prototype._setFixFocusEvent=function(){
var e=this;
if(!a.gbIsIE)
{
a.addEvent(e._moEditWin,"focus",function(f){
try{
var h=e._moEditWin.getSelection();
if(h.focusNode&&h.focusNode.tagName=="HTML")
{
h.collapse(e._moEditBody.firstChild||e._moEditBody,0);
}
}
catch(g)
{
b.getTopWin().doPageError(["editor focus error: ",g.message].join(""));
}
});
}
else{
a.addEvent(e._moEditWin,"blur",function(f){
try{
e._moEditBody.ownerDocument.selection.empty();
}
catch(g)
{
}
});
}
};
b.prototype._setFixIEBreakLineEvent=function(){
var g=this;
if(a.gbIsIE)
{
function f(h)
{
var i=h.keyCode;
if(!h.altKey&&!h.ctrlKey&&(i>=48&&i<=57||i>=65&&i<=90||i>=96&&i<=111||i>=186&&i<=192||i>=219&&i<=222||i==8||i==32||i==13||i==46||i==229))
{
e(i==8?h:null);
}
}
function e(j,i,h)
{
if(!g._isSelectionInEditArea("equal"))
{
return;
}
function k()
{
g._moEditBody.innerHTML="<div>&nbsp;</div>";
g._fixHtmlContent().focus(0);
if(!h&&j)
{
a.preventDefault(j);
}
}
if(typeof (i)=="number")
{
g._moEditorAreaWin.setTimeout(k,i);
}
else{
k();
}
}
a.addEvent(g._moEditBody,"keydown",f);
a.addEvent(g._moEditBody,"cut",function(){
e(null,0,true);
});
}
return g;
};
b.prototype._setFixIEBackSpaceEvent=function(){
var e=this;
if(a.gbIsIE)
{
a.addEvent(this._moEditBody,"keydown",function(f){
if(e._isSelectionInEditArea()&&f.keyCode==8&&e._moEditDoc.selection.type=="Control")
{
e._moEditDoc.selection.clear();
a.preventDefault(f);
return;
}
});
}
return e;
};
b.prototype._setEditorSelectionChangeEvent=function(){
var f=this;
if(f._mbIsSetSelectionChangeEvent)
{
throw new Error("*** can not set once again!!");
}
f._mbIsSetSelectionChangeEvent=true;
var e=f._moEditDoc;
a.addEvent(e,"mouseup",function(g){
f._doOnSelectionChange(g,true);
});
a.addEvent(f._moEditWin,"focus",function(g){
f.loadLastRange();
f._doOnSelectionChange(g,true);
});
a.addEvent(e,"mousedown",function(g){
f._doOnSelectionChange(g);
});
a.addEvent(e,"keydown",function(g){
f._doOnSelectionChange(g,true);
});
a.addEvent(e,"keyup",function(g){
f._doOnSelectionChange(g,true);
});
a.addEvent(e,"keydown",function(g){
var h=g.keyCode;
if(g.ctrlKey&&h>=65&&h<=90)
f._doOnEvent("keydown",g);
});
a.addEvent(e,"contextmenu",function(g){
f._doOnEvent("contextmenu",g);
});
a.addEvent(f._moEditBody,"paste",function(g){
f._doOnEvent("paste",g);
});
return f;
};
b.prototype._getRange=function(){
if(this._msEditMode!="html")
{
return null;
}
if(window.getSelection)
{
var g=this._moEditWin.getSelection(),f=null;
try{
f=g?g.getRangeAt(0):null;
}
catch(h)
{
a.debug("_getRange err");
f=null;
}
return f;
}
else{
return this._moEditDoc.selection.createRange();
}
};
b.prototype._setRange=function(e){
if(!e)
{
return false;
}
if(window.getSelection)
{
var f=this._moEditWin.getSelection();
f.removeAllRanges();
f.addRange(e);
}
else{
e.select();
}
return true;
};
b.prototype._saveLastRange=function(){
if(typeof (this._mfOnBeforeSaveRange)=="function")
{
this._mfOnBeforeSaveRange.call(this);
}
a.gbIsIE&&(this._moEditorLastRange=this._getRange());
};
b.prototype._loadLastRange=function(){
return this._setRange(this._moEditorLastRange);
};
b.prototype._clearLastRange=function(){
this._moEditorLastRange=null;
};
b.prototype._doOnEvent=function(f,e){
var j=this,h=j[["on",f,"List"].join("")],g=h&&h.length||0;
if(g>0&&j._isSelectionInEditArea())
{
for(var k=0;k<g;k++)
{
if(h[k](e)===true)
{
break;
}
}
}
return j;
};
b.prototype._doOnSelectionChange=function(f,e){
var h=this,g=h.onselectionchangeList||[];
if(h._mnOnSelectionChangeTimer)
{
h._moEditorAreaWin.clearTimeout(h._mnOnSelectionChangeTimer);
}
if(h._isSelectionInEditArea())
{
function i()
{
h._saveLastRange();
for(var k=0,j=g.length;k<j;k++)
{
if(g[k](f)===true)
{
break;
}
}
if(typeof (h._mfOnUserSelectChange)=="function")
{
h._mfOnUserSelectChange.call(h);
}
}
;if(e)
{
i();
}
else{
h._mnOnSelectionChangeTimer=this._moEditorAreaWin.setTimeout(function(){
h._mnOnSelectionChangeTimer=null;
i();
},100);
}
}
return h;
};
b.prototype._doCmd=function(g,f,h){
if(this._msEditMode!="html")
{
return false;
}
if(g=="execCommand")
{
!(h&&h=="delImg")&&this.focus();
}
try{
var j=this._moPrevCmdList;
for(var l=0,m=j.length;l<m;l++)
{
if(j[l].apply(this,arguments)===false)
{
return false;
}
}
if(f=="InsertMapImage")
{
return this.insertHtml(h);
}
else{
return this._moEditDoc[g](f,false,h||false);
}
}
catch(k)
{
return false;
}
};
b.prototype.bindPrevCmd=function(e){
this._moPrevCmdList.push(e);
};
b.prototype.insertHtml=function(h){
var f=this,g=getTop(),e=f._moEditDoc;
f.setMapImgFlag(true);
if(g.gbIsIE)
{
e.selection.createRange().pasteHTML(h);
return true;
}
else{
return e.execCommand('InsertHtml',false,h);
}
};
b.prototype.execCmd=function(f,g,e){
var i=this;
if(i._mbIsFinish&&!i._mbIsFocus)
{
i.focus();
i._mbIsFocus=true;
setTimeout(function(){
i.execCmd(f,g,e);
});
return true;
}
else{
this.loadLastRange();
var h=i._doCmd("execCommand",f,g);
if(h)
{
if(typeof (e)=="function")
{
e.call(i);
}
i._mbIsFinish&&i._doOnSelectionChange({},true);
}
return h;
}
};
b.prototype.queryCmdState=function(e){
return this._doCmd("queryCommandState",e);
};
b.prototype.queryCmdEnabled=function(e){
return this._doCmd("queryCommandEnabled",e);
};
b.prototype.queryCmdValue=function(e){
return this._doCmd("queryCommandValue",e);
};
b.prototype.queryFormatBlockState=function(){
function f(g)
{
var h=g;
while(h&&h.parentNode)
{
if(h.tagName&&h.tagName=="BLOCKQUOTE"&&a.attr(h,"formatblock"))
{
return true;
}
else{
h.parentNode&&(h=h.parentNode);
}
}
return false;
}
function e(g)
{
function h()
{
var l=g.cloneContents(),k=l.ownerDocument.createElement("div"),m="";
k.appendChild(l);
m=k.innerHTML;
l=k=c;
return m;
}
;try{
var i=a.gbIsIE?(g.htmlText||""):h();
return /<blockquote[^>]+formatblock[^>]+>.*?<\/blockquote>/gi.test(i);
}
catch(j)
{
return false;
}
}
return f(this.getSelectionElement())||e(this._getRange());
};
b.prototype.getfOnShowInstallactive=function(){
return this._mfOnShowInstallactive;
};
b.prototype.getPhotoConfig=function(){
return this._moPhotoConfig;
};
b.prototype.getfOnPreview=function(){
return this._mfOnPreview;
};
b.prototype._autoResizeEditor=function(){
var e=arguments.callee,f=this;
f.resizeEditor(true);
(f._mnAutoRisizeMinHeight&&!f._mnFixedHeight)&&f._moEditorAreaWin.setInterval(function(){
f.resizeEditor();
},1500);
};
b.prototype.resizeEditor=function(f){
var u=this,s=u._moEditBody,v=u._moTextBody,j=u._mnAutoRisizeMinHeight,l=u._mDefHeight||j||0;
if(j&&(f||!u._mbNoEditScroll||(s.scrollHeight<=l&&v.style.display=="none")||(v.scrollHeight<=l&&v.style.display=="block")))
{
var t=u.getEditorArea(),q=u._moEditorAreaWin.document,r=q.documentElement,o=q.body,h=r.clientHeight,n=Math.min(o.scrollHeight,r.scrollHeight)+(a.gbIsIE&&a.gnIEVer===6?10:0),k=t.clientHeight,g=h-n+k;
g=g<j?j:g;
g!=k&&(t.style.height=g+"px");
try{
if(g!=k)
{
if(window.navigator.userAgent.indexOf("Windows NT 10")>-1&&a.gbIsIE)
{
u._fixHeight();
}
}
}
catch(w)
{
}
;u._mDefHeight=u._moEditBody.clientHeight;
if(a.gnIEVer===6)
{
a.GelTags("td",u._moEditorAreaObj)[1].style.height=(g+"px");
}
if(u._moResizeEditorHeightList.length>0)
{
var m,p=u._moResizeEditorHeightList;
try{
m=a.calcPos(t,'json').top;
}
catch(w)
{
return;
}
for(var x=0,y=p.length;x<y;x++)
{
if(typeof p[x]==='function')
{
p[x](g+m-2);
}
}
}
}
};
b.prototype.bindResizeEditorHeight=function(e){
this._moResizeEditorHeightList.push(e);
};
b.prototype.resizeNoScrollEditor=function(e,f){
var n=this,g=a.gbIsIE,h=g&&a.gnIEVer===6,m=n._moEditBody,j=n._mDefHeight||n._mnAutoRisizeMinHeight||(n._mDefHeight=m.clientHeight),k=m.scrollHeight;
if(n._mbNoEditScroll&&j!=0)
{
if(k>j)
{
var l=n._moEditorAreaObj;
if(g&&e)
{
a.GelTags("td",n._moEditorAreaObj)[1].style.height=(k+"px");
l.style.height=(k)+"px";
}
else{
var i=n._calEditBodyRealHeight();
i<j&&(i=j);
if(n._mnFixedHeight||h)
{
n._moEditObj.style.height=(i-5-n._moToolBarObj.offsetHeight)+"px";
getTop.scrollTop=i;
}
!h&&(l.style.height=i+"px");
}
}
}
};
b.prototype._calEditBodyRealHeight=function(){
var j=this,h=j._moEditBody,f=25;
j.isShowToolBar()&&(f+=j._moToolBarObj.offsetHeight);
h.scrollWidth>h.clientWidth&&(f+=10);
var g=h.lastChild,i=a.calcPos(g),e=i[0]+i[5]+f;
while(e==f&&g)
{
g=g.previousSibling;
i=a.calcPos(g);
e=i[0]+i[5]+f;
}
a.gbIsFF&&i[5]==0&&(e+=5);
return e;
};
b.prototype._textResize=function(){
if(!this._mbNoEditScroll)
{
return;
}
var i=this,j=i._moTextBody,h=i._moEditorAreaObj,f=i._mDefHeight||i._mnAutoRisizeMinHeight,e=b.getTopWin().gbIsIE?10:0,g;
a.gbIsIE&&(h.style.height=f+"px");
j.style.height=f+"px";
g=j.scrollHeight;
if(j.clientHeight<g)
{
j.style.height=(g)+"px";
!(a.gbIsIE&&a.gnIEVer==6)&&(h.style.height=(g+e)+"px");
}
};
b.prototype._initNoEditScroll=function(){
var f=this,e="txt"===f._msEditCore?f._moEditBody:f._moEditDoc;
if(!f._mbNoEditScroll)
{
return;
}
f._moEditBody.style.overflowY="hidden";
a.addEvent(e,"keydown",function(g){
f.resizeNoScrollEditor(false,g);
});
a.addEvent(e,"keyup",function(g){
f.resizeNoScrollEditor();
});
a.addEvent(e,"paste",function(g){
setTimeout(function(){
f.resizeNoScrollEditor();
},500);
});
f._moTextBody.style.overflowY="hidden";
a.addEvent(f._moTextBody,a.gbIsIE?"propertychange":"input",function(g){
if(a.gbIsIE)
{
g.propertyName=="value"&&f._textResize();
}
else{
f._textResize();
}
});
setTimeout(function(){
f.resizeNoScrollEditor();
},500);
return f;
};
b.createEditor=function(e){
return new this(e);
};
b.getEditorSet=function(){
return this.getTopWin().gQmEditorSet||{};
};
b.getEditor=function(e){
var f=this.getTopWin(),g=f.gQmEditorSet&&f.gQmEditorSet[e];
if(g)
{
if(g.test())
{
return g;
}
else{
this.delEditor(e);
}
}
return null;
};
b.getTopWin=function(){
try{
var e=a.document;
return a.window;
}
catch(f)
{
return window;
}
};
b.setEditor=function(e){
if(!this.getEditor)
{
return false;
}
var g=e.getEditorId(),f=this.getTopWin();
this.delEditor(g);
if(!f.gQmEditorSet)
{
f.gQmEditorSet={};
}
f.gQmEditorSet[g]=e;
return true;
};
b.delEditor=function(e){
var f=this,g=f.getTopWin();
if(g.gQmEditorSet&&g.gQmEditorSet[e])
{
delete g.gQmEditorSet[e];
}
};
b.hideEditorMenu=function(){
};
b.getBreakLine=function(e,f){
var g=f&&(f.family||f.size||f.color)?["<FONT ",f.family&&"face='"+f.family+"' ",f.size&&"size='"+f.size+"' ",f.color&&"color='"+f.color+"' ",">",a.gbIsIE?"&nbsp;":"<BR>","</FONT>"].join(""):a.gbIsIE?"&nbsp;":"<BR>";
return (new Array((e||1)+1)).join(a.gbIsFF?g:"<DIV>"+g+"</DIV>");
};
b.setupFunc=function(){
a.E(this.getEditorSet(),function(e){
e._setupFunction();
});
};
b.CONST={};
b.CONST._name="QMEditor_45t62ASG^TfgSDA@#!Raaf";
b.CONST.LANGUAGE={};
b.CONST.LANGUAGE.zh_CN={CHG_CONTENTTYPE:"\u8F6C\u6362\u5185\u5BB9\u4E3A\u7EAF\u6587\u672C\u683C\u5F0F\u6709\u53EF\u80FD\u4E22\u5931\u67D0\u4E9B\u683C\u5F0F\uFF0C\u786E\u5B9A\u4F7F\u7528\u7EAF\u6587\u672C\u5417\uFF1F"};
b.CONST.FILES={"$js_path$webp//com/kits/qmeditor/base/js/editor_toolbar24e6b9.js":"Separate Bold Italic Underline FontName FontName FontSize ForeColor BackColor AlignMode Serial Indent Quot CreateLink SourceEdit Preview SpellCheck UploadEml","$js_path$webp//com/kits/qmeditor/base/js/editor_toolbar_plus24e6b9.js":"ClipImg Photo ScreenSnap Mo Music"};
b.CONST.FUNCLIST={};
b.CONST.FUNCLIST.BASE={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink Mo Photo ScreenSnap SourceEdit"};
b.CONST.FUNCLIST.COMPOSE={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview SpellCheck",tbExtern:"Photo ScreenSnap Mo Music"};
b.CONST.FUNCLIST.BIZMAIL_COMPOSE={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview SpellCheck",tbExtern:"Photo ScreenSnap Mo"};
b.CONST.FUNCLIST.QF_COMPOSE={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview UploadEml",tbExtern:""};
b.CONST.FUNCLIST.GROUP={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview",tbExtern:"Photo ScreenSnap Mo"};
b.CONST.FUNCLIST.NOTE={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit",tbExtern:"Photo ScreenSnap Mo"};
b.CONST.FUNCLIST.READMAIL={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit",tbExtern:"Photo Mo ScreenSnap"};
b.CONST.FUNCLIST.ORIGINAL={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview",tbExtern:"Photo Mo"};
b.CONST.FUNCLIST.MO={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink Mo SourceEdit"};
b.CONST._TEMPLATE={_FRAME_BASE:a.T(['<table cellspacing=0 cellpadding=0 class="qmEditorBase" style="$border$" >','<tr style="display:none;"><td height="10px" class="qmEditorToolBar" valign="top" unselectable="on">','<div class="qmEditorToolBarDiv">','<div></div><div style="display:none;"></div><div class="qmEditorBtnIcon" style="width:1px;" ></div>','</div>','</td></tr>','<tr><td height="100%" valign="top" unselectable="on" class="qmEditorContent">','$editcontainer$','<textarea class="qmEditorText" tabindex="$tabIdx$" style="display:none;font-size:12px;$style$"></textarea>','<textarea class="qmEditorText" tabindex="$tabIdx$" style="display:none;font-size:12px;$style$"></textarea>','</td></tr>','</table><div class="qmEditorBaseBd"></div>']),_FRAME_DIV:a.T(['<div class="qmEditorDivEditArea">$content$</div>']),_FRAME_TXT:a.T(['<textarea class="qmEditorText" tabindex="$tabIdx$" style="font-size:12px;$style$"></textarea>']),_FRAME_HEADER:a.T(['<script>','window.onerror = function() { return true; };','</script>','<style>','body {margin:0;overflow:auto;font:normal 14px Verdana;background:#fff;padding:2px 4px 0;cursor:text;}','body, p, font, div, li { line-height: 1.5;}','body, td, th {color:#000000;}','.i {width:100%;*width:auto;table-layout:fixed;}','pre {white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;}','a img {border:none;}','a { color: -moz-hyperlinktext !important;text-decoration: -moz-anchor-decoration;}','</style>','<base $base_href$ $base_target$ />']),_FRAME_BODY:a.T(['<body $editable$ $accesskey$>$content$</body>']),_TOOLBAR_ITEM:a.T(['<div class="qmEditorToolBarItem unselect" unselectable="on"></div>']),_TBEXTERN_ITEM:a.T(['<span class="editor_btn unselect"></span>']),BOTTON_ICON:a.T(['<div class="qmEditor$id$ qmEditorBtnIcon$id$ qmEditorBtnIcon unselect $ui.clsName$" unselectable="on" >','<input type="button" class="qmEditorIcon" unselectable="on" onmousedown="return false;" />','</div>']),BOTTON_TEXT:a.TE(['<a class="editor_btn_text qmEditor$id$ $ui.clsName$" $@$if($id$=="Music")$@$opt="music"$@$endif$@$>','$ui.label$','</a>','$@$if($ui.moreBtn$)$@$','<span class="ico_moreupload" opt="more"></span>','$@$endif$@$']),BOTTON_BIG:a.T(['<a class="qmEditor$id$ qmEditorBtnText$id$ qmEditorBtnText unselect $ui.clsName$" unselectable="on">','$ui.label$','</a>']),_MENU_BORDER:a.T(['<div class="qmEditorMenuBorder" style="display:none;$style$" unselectable="on" onmousedown="return false;" >$innerHTML$</div>']),_MENU_ITEM:a.T(['<div class="qmEditorMenuItem" param="$param$" style="$style$;" unselectable="on" $event$ >','$content$','</div>']),_MENU_ITEM_EVENT:a.T(['onmouseover="','if ( this.className != \'QMEditorMenuItemDisabled\' && this.className != \'qmEditorMenuItemOver\' )','{','this.className = \'qmEditorMenuItemOver\';','}','" onmouseout="','var _sClassName = this.getAttribute( \'curclass\' ) || \'qmEditorMenuItem\';','if ( this.className != _sClassName )','{','this.className = _sClassName','}','" '])};
b.prototype.getTemplate=function(){
return this._moTemplate;
};
b.CONST.getTemplate=function(){
return b.CONST._TEMPLATE;
};
b.prototype.getLanguage=function(){
return this._moLanguage;
};
b.prototype.getEditMode=function(){
return this._msEditMode;
};
b.prototype.setEditMode=function(e){
this._msEditMode=e;
};
b.prototype.getEditDoc=function(){
return this._moEditDoc;
};
b.prototype.getToolBarInfo=function(e){
if(e)
{
for(var f=this._moToolBarInfo.length;f--;)
{
if(this._moToolBarInfo[f].funcName==e)
{
return this._moToolBarInfo[f];
}
}
return;
}
return this._moToolBarInfo;
};
b.prototype.getEditBody=function(){
return this._moEditBody;
};
b.prototype.getSrceBody=function(){
return this._moSrceBody;
};
b.prototype.getEditObj=function(){
return this._moEditObj;
};
b.prototype.getRichToolBarObj=function(){
return this._moRichToolBarObj;
};
b.prototype.getSrceToolBarObj=function(){
return this._moSrceToolBarObj;
};
b.Plugins={};
b.prototype._setupPlugins=function(){
var e=this;
for(var f in b.Plugins)
{
f&&b.Plugins[f]&&b.Plugins[f](e);
}
};
window.QMEditor=b;
})(QMEditorAdapter);
(function(a,b){
QMEditor.FUNCLIB={};
QMEditor.FUNCLIB.inheritFrom=function(d,c){
d.prototype=new c();
return d;
};
QMEditor.FUNCLIB.BASE=function(c){
this._msId="_BASE";
this._msType="label";
this._mbIsSelected=false;
this._msContainerClassName="";
this._moUiConfig={};
this._moParamSet={};
};
QMEditor.FUNCLIB.BASE.prototype._setup=function(c){
if(this._isSetuped())
{
return false;
}
this._moContainer=c.container;
this._msUiType=c.uiType;
if(!this._moBindEditor||!this._moContainer)
{
return false;
}
this._moContainer.innerHTML=this._getUI();
if(this._msContainerClassName)
{
this._moContainer.className=this._msContainerClassName;
}
if(this._msUiType=="text")
{
var e=this._moContainer.firstChild.firstChild;
}
if(typeof (this._msType)!="string")
{
this._msType="label";
}
if(this._msType!="label")
{
if(typeof (this._mfOnClick)!="function")
{
var f=this,d={btn:f._doDefaultClick,checkbox:f._doDefaultClick,menu:f._doShowMenuClick}[f._msType];
f._mfOnClick=function(g){
if(f._moBindEditor.changeEditMode)
{
f._moBindEditor.changeEditMode("html");
}
d.call(this,g);
};
}
if(this._msType=="btn")
{
this._mfOnSelectionChange=this._doDefaultSelectionChange;
}
this._setEditorEvent("keydown");
this._setEditorEvent("selectionchange");
this._setEditorEvent("contextmenu");
this._setEditorEvent("paste");
this.setMouseOverEvent();
this._setMouseDownEvent();
this._setClickEvent();
}
this.init_();
this._mbIsSetupOK=true;
return true;
};
QMEditor.FUNCLIB.BASE.prototype.init_=function(){
};
QMEditor.FUNCLIB.BASE.prototype.getUiType=function(){
return this._msUiType;
};
QMEditor.FUNCLIB.BASE.prototype._isSetuped=function(){
return this._mbIsSetupOK;
};
QMEditor.FUNCLIB.BASE.prototype._getUI=function(){
var e=typeof (this._msUiType)!="string"?(this._msUiType="icon"):this._msUiType,d=this._moBindEditor._moTemplate[["BOTTON_",e.toUpperCase(),(this._msType=="custom"?"_"+this._msId.toUpperCase():"")].join("")]||"",c={id:this._msId,ui:this._moUiConfig||{}};
return d.replace(c);
};
QMEditor.FUNCLIB.BASE.prototype._updateUI=function(){
if(this._updateUIInfo)
{
this._updateUIInfo();
this._moContainer.innerHTML=this._getUI();
}
};
QMEditor.FUNCLIB.BASE.prototype._getStatus=function(){
return this._mbIsSelected;
};
QMEditor.FUNCLIB.BASE.prototype._changeStatus=function(c){
this._mbIsSelected=c;
if(this._msUiType=="icon")
{
var d=this._moContainer.firstChild;
a.setClass(d,d.className.replace(" qmEditorBtnIconCheck","")+(c?" qmEditorBtnIconCheck":""));
}
};
QMEditor.FUNCLIB.BASE.prototype._setEditorEvent=function(c){
var d={"keydown":this._mfOnKeyDown,"keyup":this._mfOnKeyUp,"selectionchange":this._mfOnSelectionChange,"contextmenu":this._mfOnContextMenu,"paste":this._mfOnPaste}[c];
var e=this;
if(typeof (d)=="function")
{
e._moBindEditor.addEvent(c,function(f){
d.call(e,f);
});
}
return e;
};
QMEditor.FUNCLIB.BASE.prototype.setMouseOverEvent=function(){
var d=this;
if(d._msUiType=="icon")
{
var c=d._moContainer;
a.addEvent(c,'mouseover',function(){
a.setClass(c.firstChild,c.firstChild.className.replace(" qmEditorBtnIconOver","")+" qmEditorBtnIconOver");
});
a.addEvent(c,'mouseout',function(){
a.setClass(c.firstChild,c.firstChild.className.replace(" qmEditorBtnIconOver",""));
});
}
return d;
};
QMEditor.FUNCLIB.BASE.prototype._setClickEvent=function(){
var c=this;
if(typeof (c._mfOnClick)!="function")
{
return false;
}
a.addEvent(c._moContainer,'click',function(d){
d=d||c._moBindEditor.getEditorAreaWin().event;
c._mfOnClick.call(c,d);
a.preventDefault(d);
a.stopPropagation(d);
});
return true;
};
QMEditor.FUNCLIB.BASE.prototype._setMouseDownEvent=function(){
var g=this;
var e=g._moContainer;
var f=e.firstChild;
if(!f||g._msUiType!="icon")
{
return;
}
var c=false;
a.addEvent(e,'mousedown',function(h){
h=h||g._moBindEditor.getEditorAreaWin().event;
a.addClass(f,"qmEditorBtnIconPrevCheck");
c=true;
});
a.addEvent(e,'mouseout',function(h){
a.rmClass(f,"qmEditorBtnIconPrevCheck");
});
a.addEvent(e,'mouseover',function(h){
c&&a.addClass(f,"qmEditorBtnIconPrevCheck");
});
var d=function(){
c=false;
a.rmClass(f,"qmEditorBtnIconPrevCheck");
};
a.addEvent(g._moBindEditor.getEditorAreaWin().document,'mouseup',d);
a.addEvent(g._moBindEditor.getEditWin().document,'mouseup',d);
a.addPageMouseUpListener(d);
return true;
};
QMEditor.FUNCLIB.BASE.prototype._doDefaultClick=function(c){
this._moBindEditor.execCmd(this._msCmd);
this._moBindEditor.hideMenu();
};
QMEditor.FUNCLIB.BASE.prototype._doDefaultSelectionChange=function(c){
var d=this._moBindEditor;
if(this._msCmd=="formatblock")
{
this._changeStatus(d.queryFormatBlockState());
}
else{
d.queryCmdEnabled(this._msCmd)&&this._changeStatus(d.queryCmdState(this._msCmd));
}
};
QMEditor.FUNCLIB.BASE.prototype.getBindEditor=function(){
return this._moBindEditor;
};
QMEditor.FUNCLIB.BASE.prototype.setCmd=function(c){
this._msCmd=c;
};
QMEditor.FUNCLIB.BASE.prototype.getCmd=function(){
return this._msCmd;
};
QMEditor.FUNCLIB.BASE.prototype.setBindEditor=function(c){
this._moBindEditor=c;
};
QMEditor.FUNCLIB.BASE.prototype.setId=function(c){
this._msId=c;
};
QMEditor.FUNCLIB.BASE.prototype.getId=function(){
return this._msId;
};
QMEditor.FUNCLIB.BASE.prototype.setType=function(c){
this._msType=c;
};
QMEditor.FUNCLIB.BASE.prototype.getType=function(){
return this._msType;
};
QMEditor.FUNCLIB.BASE.prototype.setUiConfig=function(c){
this._moUiConfig=c;
};
QMEditor.FUNCLIB.BASE.prototype.getUiConfig=function(){
return this._moUiConfig;
};
QMEditor.FUNCLIB.BASE.prototype.setfOnKeyDown=function(c){
this._mfOnKeyDown=c;
};
QMEditor.FUNCLIB.BASE.prototype.setfOnContextMenu=function(c){
this._mfOnContextMenu=c;
};
QMEditor.FUNCLIB.BASE.prototype.setfOnPaste=function(c){
this._mfOnPaste=c;
};
QMEditor.FUNCLIB.BASE.prototype.setfOnClick=function(c){
this._mfOnClick=c;
};
QMEditor.FUNCLIB.BASE.prototype.setfDoDefaultClick=function(c){
this._doDefaultClick=c;
};
QMEditor.FUNCLIB.BASE.prototype.getfDoDefaultClick=function(){
return this._doDefaultClick;
};
QMEditor.FUNCLIB.BASE.prototype.getfOnUploadEml=function(){
return this._mfOnUploadEml;
};
QMEditor.FUNCLIB.BASE.prototype.setContainerClassName=function(c){
this._msContainerClassName=c;
};
QMEditor.FUNCLIB.BASE.prototype.setFuncConfig=function(c){
this._moFuncConfig=c;
};
QMEditor.FUNCLIB.BASE.prototype.getFuncConfig=function(c){
return this._moFuncConfig;
};
QMEditor.FUNCLIB.BASE.prototype.getContainer=function(){
return this._moContainer;
};
QMEditor.FUNCLIB.MENU=QMEditor.FUNCLIB.inheritFrom(function(){
this._msId="MENU";
this._msType="menu";
this._mnShowCount=0;
},QMEditor.FUNCLIB.BASE);
QMEditor.FUNCLIB.MENU.prototype.showMenu=function(c,d){
var m=this,k=m.getMenuItems(d);
if(!k||k.length==0||!k[0]||!k[0].sItemValue)
{
return;
}
var l=a.calcPos(d&&d.oContainer||m._moContainer),f=!m._moBindEditor._mbNotAllowArrow&&(d&&d.nArrowPos||m._moUiConfig.arrowPos)||0,h=f&&l[3]-a.calcPos(m._moBindEditor.getEditorArea())[3],g=f&&(h<0?1:Math.min(l[3]-a.calcPos(m._moBindEditor.getEditorArea())[3],f-7)),i=(d&&d.nWidth)||this._moUiConfig.width,e=(m._moFuncConfig||{}).align=="right"||this._moUiConfig.align=="right",j=i&&e?Math.max(l[1]-i,a.calcPos(m._moBindEditor.getEditorArea())[3]):l[3];
if(c)
{
!m._moBindEditor._mbIsFocus&&m._moBindEditor.focus();
m._changeStatus(true);
}
m._moMenu&&m._moMenu.close(true);
m._moMenuCfg=d;
m._moMenu=new a.QMMenu({oEmbedWin:this._moBindEditor.getEditorAreaWin(),nWidth:i||"auto",nZIndex:1121,sWidthDetect:"float",nItemHeight:(d&&d.nItemHeight||this._moUiConfig.itemHeight)||b,nArrowPos:g?g<10?10:g:0,nX:j+(g?(m._msUiType=="text"?25:8):0),nY:l[2]+(g?-4:5),oItems:k,bAutoClose:d.bAutoClose||k.length>1,bProxyScroll:d.bAutoClose||k.length>1,onload:function(){
m._mnShowCount++;
m.initMenu(this,d);
},onshow:function(){
m.doMenuShow(this,d);
},onclose:function(){
if(--m._mnShowCount<=0)
{
m._mnShowCount=0;
m._changeStatus(false);
}
d.fMenuClose&&d.fMenuClose();
},onbeforeclose:function(n){
m._moUiConfig.fBeforeclose&&m._moUiConfig.fBeforeclose.apply(m,[n]);
},onitemclick:function(p,o,n){
m.doItemClick(p,o,d,n);
}});
};
QMEditor.FUNCLIB.MENU.prototype.hideMenu=function(c){
this.getMenu()&&this.getMenu().close();
this._moMenuCfg=b;
};
QMEditor.FUNCLIB.MENU.prototype._doShowMenuClick=function(c){
var h=a.getEventTarget(c).getAttribute("opt"),g=true,d;
if(this._getStatus())
{
var f=this._moMenuCfg&&this._moMenuCfg.sName=="more",e=(h=="more");
g=e!=f;
}
d=!this._getStatus()&&!((h=="more"||this.getId()=="Music")&&(a.gbIsIE&&a.gnIEVer===6));
g?this.showMenu(d,h=="more"?{sName:"more"}:{}):this.hideMenu(true);
};
QMEditor.FUNCLIB.MENU.prototype.getMenu=function(){
return this._moMenu;
};
QMEditor.FUNCLIB.MENU.prototype.getMenuItems=function(c){
return [{bDisSelect:true,sStyle:"padding:0;",nHeight:"auto",sItemValue:this.getMenuUI(c)}];
};
QMEditor.FUNCLIB.MENU.prototype.getMenuUI=QMEditor.FUNCLIB.MENU.prototype.initMenu=QMEditor.FUNCLIB.MENU.prototype.doMenuShow=QMEditor.FUNCLIB.MENU.prototype.doItemClick=function(){
};
})(QMEditorAdapter);
(function(a,b){
a.extend(QMEditor.Plugins,{"EditMenu":function(e){
if(e._mbIsOpenEditBar)
{
e._moEditMenuObj=new QMEditor.EditMenu({editor:e,editorAreaWin:e._moEditorAreaWin});
}
}});
var c=QMEditor.delEditor,d=QMEditor.prototype.hideMenu;
QMEditor.delEditor=function(e){
var f=this;
c.call(f,e);
f._mbIsOpenEditBar&&f._moEditMenuObj.destroy();
};
QMEditor.prototype.hideMenu=function(e,f){
var g=this;
d.call(g,e,f);
this._mbIsOpenEditBar&&!f&&this._moEditMenuObj.hideEditMenu();
};
QMEditor.EditMenu=function(e){
this.init(e);
};
QMEditor.EditMenu._TEMPLATE={_EDIT_MENU_CONTAINER:'<div unselectable="on" id="QMEditorMenuBar" class="menubarbg editormenubar" style="display:none; z-index:120;"></div>',_IMG_MENU_CONTENT:a.TE(['<a func="zoom1_1" class="menubarbg imgzoomoriginal" title="\u539F\u59CB\u5927\u5C0F" unselectable="on"></a>','<a func="zoomout" class="menubarbg imgzoomout" title="\u7F29\u5C0F" unselectable="on"></a>','<span class="menubarbg imgzoombar" unselectable="on"><a id="zoomhandle" func="drag" class="menubarbg zoomhandle" title="$size$" unselectable="on" style="left:$pixels$"></a></span>','<a func="zoomin" class="menubarbg imgzoomin" title="\u653E\u5927" unselectable="on"></a>','<span class="menubarbg menubarspl" unselectable="on"></span>','<a func="del" unselectable="on" class="menubarbg menubarremove" title="\u5220\u9664\u56FE\u7247" href="javascript:;"></a>']),_IMG_MENU_BAR_IMG:a.TE(['<span id="QMEditorIMGMenu">$imgcontent$</span>']),_IMG_MENU_BAR_LINK:a.TE(['<span class="menubarbg menubariconlink" unselectable="on"></span>','<span id="QMEditMenuCommon" class="linkcommon" unselectable="on">','<span style="max-width:184px; overflow:hidden; height:23px;float:left;"><a class="menubarlink" id="QMEditMenuLink" href="$@$eval (getTop().htmlEncode($link$))$@$" unselectable="on" target="_blank" style="white-space:nowrap;">$@$eval (getTop().htmlEncode($link$))$@$</a></span>','<span class="menubarbg menubarspl" unselectable="on"></span>','<a href="javascript:;" func="modify" class="menubarbg linkmodify" title="\u4FEE\u6539\u94FE\u63A5" unselectable="on"></a>','<span class="menubarbg menubarspl" unselectable="on"></span>','<a func="unlink" unselectable="on" class="menubarbg menubarremove" title="\u6E05\u9664\u94FE\u63A5" unselectable="on"></a>','</span>','<span id="QMEditMenuModify" class="linkedit" style="display:none;" unselectable="on">','<input type="text" id="QMEditMenuInput" class="menubarinput"/>','<span class="menubarbg menubarspl" unselectable="on"></span>','<a func="save" class="menubarbg menubarfinish" title="\u786E\u5B9A" unselectable="on"></a>','</span>']),_IMG_MENU_BAR_IMG_MAP:a.TE(['<span id="QMEditorIMGMenu">','<a href="javascript:;" func="editmap" class="menubarbg linkmodify" title="\u7F16\u8F91" unselectable="on" src="$img_map$"></a>','<span class="menubarbg menubarspl" unselectable="on"></span>','<a href="javascript:;" func="jumptomap" class="menubarbg menubarpreview" title="\u9884\u89C8" unselectable="on" src="$img_map$"></a>','<span class="menubarbg menubarspl" unselectable="on"></span>','<a href="javascript:;" func="del" class="menubarbg menubarremove" title="\u5220\u9664\u56FE\u7247" unselectable="on"></a>','</span>']),_IMG_MENU_BAR:a.TE(['<a func="showimg" class="menubarbg menubariconimg" title="\u7F16\u8F91\u56FE\u7247"></a>','<span class="menubarbg menubarspl"></span>','<a func="showlink" class="menubarbg menubariconlink2" title="\u7F16\u8F91\u94FE\u63A5"></a>'])};
QMEditor.EditMenu.getTemplate=function(){
return QMEditor.EditMenu._TEMPLATE;
};
QMEditor.EditMenu.prototype.init=function(e){
var g=this,f;
g._moBindEditor=e.editor;
g._moBindEditAreaWin=f=e.editorAreaWin;
g._moCurrentEditObj=null;
a.insertHTML(f.document.body,"afterBegin",QMEditor.EditMenu._TEMPLATE._EDIT_MENU_CONTAINER);
g._moEditMenuBar=a.S("QMEditorMenuBar",f);
g._setMouseDownEvent();
g._setClickEvent();
g._mnInterval=f.setInterval(function(){
var h=g._moBindEditor.getSelectionElement(),i=g._moEditMenuBar,j=a.S("QMEditMenuModify",f);
if(j&&a.isShow(j))
{
return;
}
if(h&&(a.attr(h,"notForEdit")||a.attr(h.parentNode,"notForEdit")))
{
return;
}
var k=g._checkEditMenuType(h);
if(k&&k.sHtml!="")
{
if(g._moCurrentEditObj==k.oEditObj)
{
return;
}
i.innerHTML=k.sHtml;
g._moCurrentEditObj=k.oEditObj;
if(!a.isShow(i))
{
g._adjustEditMenuPos(k.oEditObj);
}
else{
a.show(i,true);
}
}
else{
a.show(i,false);
g._moCurrentEditObj=null;
}
},500);
};
QMEditor.EditMenu.prototype.destroy=function(e){
var f=this._mnInterval;
f&&clearInterval(f);
};
QMEditor.EditMenu.prototype._setClickEvent=function(){
a.addEvent(a.S("QMEditorMenuBar",this._moBindEditAreaWin),"click",function(e){
a.stopPropagation(e);
});
};
QMEditor.EditMenu.prototype._setMouseDownEvent=function(){
var h=this,e=h._moBindEditAreaWin,g=h._moEditMenuBar,f=h._moBindEditor,i=QMEditor.EditMenu._TEMPLATE;
a.addEvent("txt"===f._msEditCore?f._moEditBody:f._moEditDoc,"mousedown",function(j){
h.showEditMenu(j);
});
a.addEvent(g,"mousedown",function(j){
var u=a.S("QMEditMenuInput",e),z=a.getEventTarget(j);
if(z)
{
var B=a.attr(z,"func");
switch(B)
{case "del":
{
f.execCmd("Delete","delImg");
a.show(g,false);
break;
}
case "rotate":
{
var r=h._moCurrentEditObj,m=r.nAngle=((r.nAngle||0)+90);
h.rotateImg&&h.rotateImg();
}
case "unlink":
{
if(!a.gbIsIE)
{
var y=f._moEditWin.getSelection(),x=f._moEditDoc.createRange();
if(a.gbIsOpera&&h._moCurrentEditObj.nodeName=="IMG")
{
x.selectNode(h._moCurrentEditObj);
y.removeAllRanges();
y.addRange(x);
}
else if(h._moCurrentEditObj.nodeName=="A")
{
x.selectNode(f.moveToAncestorNode("A"));
y.removeAllRanges();
y.addRange(x);
}
}
a.show(g,false);
f.execCmd("Unlink");
break;
}
case "modify":
{
var v=a.S("QMEditMenuLink",e),p=a.S("QMEditMenuCommon",e),w=a.S("QMEditMenuModify",e);
a.show(p,false);
a.show(w,true);
f.saveRange();
u.value=v.href;
u.focus();
break;
}
case "save":
{
var v=a.S("QMEditMenuLink",e),p=a.S("QMEditMenuCommon",e),w=a.S("QMEditMenuModify",e),A=u.value,r=h._moCurrentEditObj,o=r.nodeName=="A"?r:r.parentNode;
if(/[a-zA-Z_0-9.-]+@[a-zA-Z_0-9.-]+\.\w+/.test(A))
{
A=a.trim(A).toLowerCase().indexOf("mailto")==0?A:"mailto:"+A;
}
else{
A=a.trim(A).indexOf("://")==-1?"http://"+A:A;
}
o.href=v.href=A;
v.innerHTML=getTop().htmlEncode(A);
f.loadRange();
a.show(p,true);
a.show(w,false);
break;
}
case "close":
{
a.show(g,false);
break;
}
case "showimg":
{
g.innerHTML=i._IMG_MENU_BAR_IMG.replace({"imgcontent":h._getImgMenuContent(h._moCurrentEditObj,i)});
break;
}
case "showlink":
{
var r=h._moCurrentEditObj,o=r.nodeName=="A"?r:r.parentNode;
g.innerHTML=i._IMG_MENU_BAR_LINK.replace({"link":o.href});
break;
}
case "drag":
{
var t=z,n=j.clientX,q=e.document;
var l=function(){
removeEvent(q,"mousemove",k);
removeEvent(q,"mouseup",l);
a.callBack.call(h,h._fView,[z,j,B,parseInt(z.style.left)]);
};
var k=function(C){
var H=parseInt(z.style.left),G=H+(C.clientX-n),D=false;
if(G<-5||G>65)
{
D=true;
}
if(G<=-1)
{
G=-1;
}
else if(G>=59)
{
G=59;
}
z.style.left=G+"px";
n=C.clientX;
if(D)
{
l();
}
};
a.addEvents(q,{mousemove:k,mouseup:l});
break;
}
case "editmap":
{
a.preventDefault(j);
var z=h._moCurrentEditObj;
if(z&&a.attr(z,"ui-type")=="share_map")
{
var s=f.getMapFunc();
s._doDefaultClick.call(s,{searchKeyword:a.attr(z,"skwd")||"",title:a.attr(z,"stitle")||"",center:a.attr(z,"center")||"",pos:a.attr(z,"pos")||"",zoom:parseInt(a.attr(z,"zoom")||15),posDesc:a.attr(z,"desc")||""});
}
break;
}
case "jumptomap":
{
a.preventDefault(j);
window.open(a.attr(z,"src"),"_blank");
break;
}
default:
{
a.callBack.call(h,h._fView,[z,j,B]);
}
}
}
if(!a.isShow(u))
{
a.preventDefault(j);
a.stopPropagation(j);
}
});
return h;
};
QMEditor.EditMenu.prototype._checkEditMenuType=function(f,e){
var m=this,k=m._moBindEditor,i=null,j=null,g=true,h=0,p="",q="",r="",n=QMEditor.EditMenu._TEMPLATE,o={"1":n._IMG_MENU_BAR_LINK,"2":n._IMG_MENU_BAR_IMG,"3":n._IMG_MENU_BAR,"4":n._IMG_MENU_BAR_IMG_MAP};
if(!f)
{
return {"sHtml":"","oEditObj":null};
}
if(f.nodeName=="A")
{
i=f;
}
else if(f.parentNode&&f.parentNode.nodeName=="A"&&a.attr(f,"ui-type")!="share_map")
{
i=f.parentNode;
}
else if(f.nodeName=="DIV"&&f.firstChild&&f.firstChild==f.lastChild&&f.firstChild.nodeName=="A")
{
i=f.firstChild;
}
if(i&&i.name!="spellcheck")
{
h=1;
j=i;
}
!e&&(g=(a.gbIsIE?k._moEditDoc.selection.type!="None":!k._moEditWin.getSelection().getRangeAt(0).collapsed));
if(g&&f&&(f.nodeName=="IMG")&&!f.src.match(/images\/mo\//)&&!f.getAttribute("noeditme"))
{
h+=2;
j=f;
}
else if(g&&!a.gbIsIE&&h==1)
{
var l=f.getElementsByTagName&&f.getElementsByTagName("IMG");
f=(l&&l.length)&&l[0];
if(f&&(f.nodeName=="IMG")&&!f.src.match(/soso/)&&!f.getAttribute("noeditme"))
{
h+=2;
j=f;
}
}
if(h==2&&getTop().attr(f,"ui-type")=="share_map")
{
h=4;
}
;(h==2||h==3)&&(q=m._getImgMenuContent(j,n));
p=o[h]?o[h].replace({"link":((i&&i.href)||""),"images_path":k._msResPath,"imgcontent":q,"img_map":getTop().attr(j,"jump")}):"";
return {"sHtml":p,"oEditObj":j};
};
QMEditor.EditMenu.prototype._getImgMenuContent=function(e,f){
return (f._IMG_MENU_CONTENT.replace({"size":e.getAttribute("modifysize")||"100%","pixels":e.getAttribute("diffpixels")||"25px"}));
};
QMEditor.EditMenu.prototype._adjustEditMenuPos=function(e){
var u=this,q=u._moBindEditor,p=u._moBindEditAreaWin,s=u._moEditMenuBar,t=a.calcPos(q._moEditorAreaObj),m=t[0],j=t[3],o=t[2],n=a.document.body.clientHeight,l=a.bodyScroll(p,"scrollTop"),i=a.bodyScroll(q._moEditWin,"scrollTop"),k,h=m,g=j,r=e.getElementsByTagName("IMG");
(r.length>0)&&(e=r[0]);
t=a.calcPos(e);
m+=t[2]+3;
j+=t[3];
m-=i;
if(q.isShowToolBar())
{
var f=q._moToolBarObj.offsetHeight;
m+=f;
o+=f;
h+=f;
}
k=m;
(m>o)&&(m=o);
if((m-l)>(n-95))
{
if((t[2]-i)>(e.offsetHeight+20))
{
m=k-(e.offsetHeight+35);
}
else{
m=k-(t[2]-i+10);
}
}
(e.nodeName=="IMG")&&(m=k-e.offsetHeight);
s.style.top=(m<h?h:m)+"px";
s.style.left=(j<g?g:j)+"px";
setTimeout(function(){
a.show(s,true);
},100);
};
QMEditor.EditMenu.prototype._fView=function(f,e,g,h){
var n=this,m=n._moCurrentEditObj,o=a.S("zoomhandle",n._moBindEditAreaWin);
if(!(g&&g.match(/zoom/))&&!h)
{
return;
}
var p=m.getAttribute("scalingmode")||"zoom",r={"zoom":{"25":"-1px","50":"8px","75":"16px","100":"25px","125":"33px","150":"42px","175":"51px","200":"59px"},"normal":{"1":"-1px","10":"5px","20":"11px","30":"17px","40":"23px","50":"29px","60":"35px","70":"41px","80":"47px","90":"53px","100":"59px"}}[p],j={"zoom":200,"normal":100}[p],k={"zoom":25,"normal":1}[p],i={"zoom":25,"normal":10}[p],l={"zoom":175,"normal":100}[p],q="";
_nWidth=m["naturalW"]||m.naturalWidth,_nHeight=m["naturalH"]||m.naturalHeight,_nSize=parseInt(m.getAttribute("modifysize")||100),_nRemainder=_nSize%i;
!_nWidth&&(_nWidth=m["naturalW"]=m.offsetWidth);
!_nHeight&&(_nHeight=m["naturalH"]=m.offsetHeight);
if(g=="zoomin")
{
if(_nRemainder>0)
{
_nSize+=(i-_nRemainder);
}
else{
_nSize+=i;
}
(_nSize>j)&&(_nSize=j);
}
else if(g=="zoomout")
{
if(_nRemainder>0)
{
_nSize-=_nRemainder;
}
else{
_nSize-=i;
}
(_nSize<k)&&(_nSize=k);
}
else if(g=="zoom1_1")
{
_nSize=100;
}
else if(h)
{
_nSize=parseInt((h+1)/60*l)+k;
_nSize>j&&(_nSize=j);
q=h+"px";
}
o.setAttribute("title",_nSize+"%");
o.style.left=r[_nSize]||q;
m.style.width=parseInt(parseInt(_nWidth)*(_nSize/100))+"px";
m.style.height=parseInt(parseInt(_nHeight)*(_nSize/100))+"px";
m.setAttribute("modifysize",_nSize+"%");
m.setAttribute("diffpixels",r[_nSize]||q);
n._moBindEditor.resizeNoScrollEditor();
n._adjustEditMenuPos(m);
};
QMEditor.EditMenu.prototype.hideEditMenu=function(){
a.show(this._moEditMenuBar,false);
};
QMEditor.EditMenu.prototype.showEditMenu=function(e){
var l=this,i=l._moBindEditor,h=("txt"===i._msEditCore?i._moEditBody:i._moEditDoc),f=h.body?h.body:h,j=l._moEditMenuBar,g=a.getEventTarget(e),n;
if(!j)
{
return;
}
if(g&&(a.attr(g,"notForEdit")||a.attr(g.parentNode,"notForEdit"))&&a.attr(g,"ui-type")!="share_map")
{
return;
}
if(g.nodeName.match(/IMG|A/))
{
n=l._checkEditMenuType(g,true);
}
if(n&&n.sHtml!="")
{
var k=g.parentNode.nodeName=="A"?g.parentNode:g;
j.innerHTML=n.sHtml;
l._moBindEditor.execCmd("useCSS",false);
l._moCurrentEditObj=n.oEditObj;
l._adjustEditMenuPos(k);
if(a.gbIsWebKit||a.gbIsFF)
{
m();
a.gbIsFF&&setTimeout(m,150);
}
}
return;
function m()
{
var p=i._moEditWin.getSelection(),o=i._moEditDoc.createRange();
o.selectNode(k);
p.removeAllRanges();
p.addRange(o);
}
};
})(QMEditorAdapter);
(function(a,c){
var b="_NeTDiSk_sHarElINk_",d=QMEditor.prototype.initialize,e=['.p-otherdisk p,.p-otherdisk input{margin:0;padding:0;}.p-otherdisk h1,.p-otherdisk h2,.p-otherdisk h3,.p-otherdisk h4,.p-otherdisk h5,.p-otherdisk h6{margin:0;font-size:100%;}.p-otherdisk img{border:none;}.p-otherdisk .cf:after{clear:both;display:block;height:0;visibility:hidden;}.p-otherdisk .cf{zoom:1;}.p-otherdisk .cl{clear:both;}.p-otherdisk .hide{display:none;}.p-otherdisk .fl{float:left;display:inline;}.p-otherdisk .fr{float:right;display:inline;}.p-otherdisk .btn_gray{}.p-otherdisk .btn_blue{}.p-otherdisk .icons{background:url($images_path$webp/xdisk/bind_disk/icons1e9c5d.png) no-repeat;}.p-otherdisk .ico_succ,.p-otherdisk .ico_error{width:12px;height:12px;display:inline-block;vertical-align:middle;margin:-2px 5px 0 0;*margin:1px 5px 0 0;font-size:0px;_vertical-align:baseline;}.p-otherdisk .ico_succ{background-position:-12px 0;}.p-otherdisk .ico_error{background-position:0px 0;}.img_thumb{width:38px;height:38px;overflow:hidden;float:left;margin:4px 4px 0 0;}.img_thumb .img_inner{width:160px;height:160px;margin:-61px 0 0 -61px;text-align:center;}.img_thumb img.od_fileimg{vertical-align:middle;margin:0;float:none;}.img_thumb .alpha_span{display:inline-block;vertical-align:middle;height:100%;width:0;}.bind_select_box{height:250px;padding:30px 25px 0px;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;}.bind_select_box .select_txt{padding:5px 0 20px;color:#000;}.menu_item_nofun .bind_select_box{padding:16px 10px 0 8px;}.p-otherdisk .bind_items{margin-left:-50px;text-align:center;}.bind_li{position:relative;display:inline-block;*display:inline;*zoom:1;width:118px;margin-left:50px;vertical-align:top;}.bind_item{display:block;padding-top:100px;padding-bottom:8px;color:#ccc;text-decoration:none;background:url($images_path$webp/xdisk/bind_disk/weiyun26f1bf.png) no-repeat center 20px;border:1px solid #ccc;border-radius:3px;_zoom:1;-webkit-transition:box-shadow linear .2s;-moz-transition:box-shadow linear .2s;transition:box-shadow linear .2s;}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.bind_item{background-image:url($images_path$webp/xdisk/bind_disk/weiyun_2x26f143.png);background-size:78px 70px;}}.bind_item:hover{text-decoration:none;box-shadow:0 0 5px #60caff;border-color:#52a8ec;}.bind_item_dropbox{background-image:url($images_path$webp/xdisk/bind_disk/dropbox1e9c5d.png);}.bind_name,.bind_tips{line-height:20px;padding:0 10px;color:#000;}.bind_tips{color:#999;}.bind_items .has_bind{width:37px;height:37px;position:absolute;left:1px;top:1px;background:url($images_path$webp/xdisk/bind_disk/has_bind1e9c5d.png) no-repeat;z-index:10;}.other_disk_box{padding:25px 25px 0px;height:338px;background:#fff;position:relative;}.disk_content{height:300px;background:#f9f9f9;border:1px solid #cbcbcb;overflow:auto;}.od_items .od_item{_zoom:1;}.od_items .od_item{-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;}.od_items .od_item_inner{display:block;height:46px;padding:0 10px 0 0;line-height:46px;line-height:46px\u005C9;overflow:hidden;color:#000;cursor:default;_zoom:1;outline:none;border-bottom:1px solid #bbb;}.od_list_index .od_item_inner{padding-left:22px;}.od_list_index .od_list_index .od_item_inner{padding-left:44px;}.od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:66px;}.od_list_index .od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:88px;}.od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:110px;}.od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:132px;}.od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_list_index .od_item_inner{padding-left:154px;}.od_items .od_checkbox{float:left;_display:inline;width:13px;height:13px;margin:17px 5px 0 6px;overflow:hidden;cursor:default;*zoom:1;}.od_items .od_list_index .od_checkbox{margin-left:0;}.od_items .od_fileimg{float:left;margin:6px 4px 0 0;_display:inline;}.od_items .od_label{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;_width:50%;_vertical-align:baseline;}.od_items .od_big .od_label,.od_items .od_big .od_fileimg{opacity:0.4;filter:alpha(opacity=40);}.file_num{color:#a0a0a0;float:left;margin-left:16px;_display:inline;}.disk_limit{line-height:32px;color:#a0a0a0;}.od_filesize{width:70px;text-align:right;margin-top:1px;margin-left:6px;color:#999;}.od_lastline{position:absolute;font-size:0;overflow:hidden;border-top:1px solid #f9f9f9;height:0px;left:26px;width:388px;bottom:37px;_bottom:36px;}.od_items .od_imgopen{width:7px;height:7px;display:inline-block;float:left;background:url($images_path$webp/xdisk/bind_disk/icons1e9c5d.png) no-repeat;}.od_items .expand .od_imgopen{background-position:0 -15px;margin:21px 8px 0 8px;}.od_items .fold .od_imgopen{background-position:-9px -13px;margin:20px 6px 0 10px;}.link_error_box{height:244px;background-color:#fff;border-radius:0 0 5px 5px;}.link_error_box .error_tips{width:100%;height:71px;margin-left:auto;margin-right:auto;background:url($images_path$webp/xdisk/bind_disk/error_pic1e9c5d.png) center 0px no-repeat;margin:30px 0;float:left;}.link_error_box .error_dropbox{background-position:center -72px;}.link_error_box .error_weiyun{background-position:center 0;}.link_error_box .error_google{background-position:center -144px;}.link_error_box .error_which{text-align:center;line-height:22px;}.link_error_box .error_operate{text-align:center;padding:15px 0 10px 0;}.p-todisk{background:url($images_path$webp/xdisk/bind_disk/bg_rp1e9c5d.png) repeat;}.page_todisk{position:absolute;height:245px;width:400px;left:50%;margin-left:-200px;top:50%;margin-top:-120px;border:1px solid #c1c1c1;box-shadow:0 0 8px rgba(0,0,0,0.2);border-radius:5px;background-color:#fff;}.todisk_hd{height:4px;overflow:hidden;background-color:#6bc5f5;border-radius:5px 5px 0 0;}.todisk_process{padding:50px 0 0 68px;overflow:hidden;}.todisk_process .source_pic,.todisk_process .dest_pic{float:left;text-align:center;width:90px;}.todisk_process .source_pic p,.todisk_process .dest_pic p{width:90px;padding:10px 0;}.todisk_process .source_pic{padding-top:7px;}.todisk_process .ico_dire{float:left;width:45px;height:32px;margin:25px 22px 0;background:url($images_path$webp/xdisk/bind_disk/translate1e9c5d.png) no-repeat;}.todisk_doing{padding:10px 0 0 0;text-align:center;}.todisk_doing .todisk_ing{padding-top:10px;}.todisk_doing .todisk_ing img{vertical-align:middle;margin:-2px 5px 0 0;*margin:1px 5px 0 0;_vertical-align:baseline;}.todisk_doing .todisk_operate{padding:15px 0 0 0;}.todisk_doing .todisk_succ a{color:#1e5494;}.todisk_line_box{width:164px;overflow:hidden;margin:15px auto 0 auto;text-align:left;}.b_out_line{overflow:hidden;font-size:0px;height:8px;width:160px;border:1px solid #bbb;background-color:#ececec;border-radius:8px;box-shadow:0 1px 1px rgba(0,0,0,.1) inset;)}.b_inner_line{overflow:hidden;font-size:0;height:100%;background-color:#2f82d0;background-image:-webkit-linear-gradient(bottom,#2472be,#3a92e2);background-image:-moz-linear-gradient(bottom,#2472be,#3a92e2);filter:progid:DXImageTransform.Microsoft.gradient(startcolorstr=#3a92e2,endcolorstr=#2472be,gradientType=0);border-radius:0 8px 8px 0;}.ellipsis{overflow:hidden;text-overflow:ellipsis;-o-text-overflow:ellipsis;white-space:nowrap;}.od_items .graytext{color:#a0a0a0;}'].join("\n");
QMEditor.CONST.FILES={"$js_path$webp//com/kits/qmeditor/qqmail/release/editor_toolbar270dbd.js":"Separate Bold Italic Underline FontName FontName FontSize ForeColor BackColor AlignMode Serial Indent Quot CreateLink SourceEdit Preview SpellCheck UploadEml FullScreen FormatMatch","$js_path$webp//com/kits/qmeditor/qqmail/release/editor_toolbar_plus3690ae.js":"ClipImg Photo ScreenSnap NetDisk Mo Word More Map"};
QMEditor.CONST.FUNCLIST.COMPOSE={toolbar:"Bold Italic Underline FontName FontSize ForeColor BackColor AlignMode Serial Indent Quot CreateLink FormatMatch SpellCheck SourceEdit FullScreen",tbExtern:"Photo Word ScreenSnap NetDisk Mo More Map"};
QMEditor.CONST.FUNCLIST.GROUP={toolbar:"Bold Italic Underline FontName FontSize ForeColor BackColor AlignMode Serial Indent Quot CreateLink FormatMatch SourceEdit FullScreen",tbExtern:"Photo Word ScreenSnap NetDisk Mo More Map"};
QMEditor.CONST.FUNCLIST.BIZMAIL_COMPOSE={toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview SpellCheck",tbExtern:"Photo ScreenSnap NetDisk Mo"};
QMEditor.prototype.initialize=function(){
var f=this;
d.apply(this,arguments);
this._moEditorAreaObj&&a.evalCss(e,this._moEditorAreaObj.ownerDocument,"qmNetDisk");
QMEditor.getTopWin().waitFor(function(){
return f.getEditBody();
},function(g){
if(g)
{
f._initEvents(f.getEditBody());
}
});
};
QMEditor.prototype.appendContent=function(f){
var h=this;
if(h.getContentType()=='text')
{
h.setContent(h.getContent()+f);
}
else{
var l=QMEditor.getTopWin();
if(h.getEditMode()=='html')
{
var j=h.getContentTags('sign')[0];
if(j)
{
a.insertHTML(j,'beforeBegin',f);
return this;
}
var k=h.getContentObj("QQMAILSTATIONERY");
if(k)
{
a.insertHTML(k,'beforeEnd',f);
return this;
}
var i=h.getContentTags('includetail')[0];
if(i)
{
a.insertHTML(i,'beforeBegin',f);
return this;
}
h.setContent(h.getContent()+f);
}
else{
var m=h.getContent();
var g=false;
var n='';
var o=m.replace(/<includetail>[\s\S]*<\/includetail>/g,function(p){
n+=p;
return '';
});
o=o.replace(/<sign +signid=\S+? +nreadytime=\S+? *>[\s\S]*<\/sign>/,function(p){
g=true;
return f+p;
});
if(!g&&o.indexOf('QQMAILSTATIONERY')!=-1)
{
o=o.replace(/<\/td>[\s\S]*?$/,function(p){
g=true;
return f+p;
});
}
if(g)
{
m=o+n;
}
else{
m=m.replace(/<includetail>[\s\S]*<\/includetail>/,function(p){
g=true;
return f+p;
});
}
if(!g)
{
m+=f;
}
h.setContent(m);
}
}
return this;
};
QMEditor.prototype.getNetDiskContainerID=function(){
return b;
};
QMEditor.prototype.insertNetDiskFile=function(g,f){
var j=this,h=j.getEditWin(),k=QMEditor.getTopWin(),i=[];
a.E(g,function(l){
if(l.sFakeId&&a.S(l.sFakeId,h))
{
k.showInfo("\u90E8\u5206\u6587\u4EF6\u91CD\u590D\uFF0C\u5DF2\u81EA\u52A8\u6392\u9664");
return;
}
i.push(l);
});
i.length&&this._getShareLink(i,function(l){
this.focus(0,a.parents("table",a.S(b,this.getEditWin()))[0].nextSibling);
f&&f.call(this);
});
};
QMEditor.prototype.updateNetDiskFile=function(f,h,g){
var k=this,j=h.oQueryData||h,i=k.getEditWin();
a.E(j,function(l){
var m=a.S(l.sFakeId,i),n=a.finds("td",m);
if(f)
{
n[0].style.cssText="";
n[1].style.cssText="";
m.href=l.sLink;
a.attr(m,"errorid")&&m.removeAttribute("errorid");
k._updateBtn(m,1);
}
else{
!a.attr(m,"href")&&a.attr(m,"errorid",h.nErrorID);
k._updateBtn(m,0);
}
});
g&&g.call(this);
};
QMEditor.prototype.isRunningShareLink=function(){
var f=this,g=QMEditor.getTopWin();
return g.QMNetDisk&&g.QMNetDisk.sharelink.isRunning();
};
QMEditor.prototype.shareLinkErrorCnt=function(){
var f=false,g=0;
a.E(a.finds("a[ui-type='shareLink']",a.S(b,this.getEditWin())),function(h){
if(!a.attr(h,"href")||a.attr(h,"errorid"))
{
f=true;
g++;
}
});
debug("hasErrorShareLink:::"+f);
return g;
};
QMEditor.prototype.hasTODOShareLink=function(){
var f=this,g=QMEditor.getTopWin();
return g.QMNetDisk&&g.QMNetDisk.sharelink.hasTODOFile();
};
QMEditor.prototype.rmNetDiskAction=function(){
var k=this,i=k.getEditWin(),l=QMEditor.getTopWin(),h=a.S(b,i),g=a.finds("a[ui-type='shareLink']",h),j=[];
a.E(g,function(m){
if(!a.attr(m,"href")||a.attr(m,"errorid"))
{
j.push(m);
}
});
while(j.length)
{
var f=j.shift();
!a.attr(f,"href")&&f.parentNode.removeChild(f);
f=c;
}
l.QMNetDisk&&l.QMNetDisk.sharelink.clean();
};
QMEditor.prototype.rmNetDiskID=function(){
a.E(a.finds('div[ui-type="shareField"]',this.getEditBody()),function(f){
f.removeAttribute("id");
f.parentNode.removeAttribute("id");
});
};
QMEditor.prototype.doCallEditorAction=function(g,f){
if(g!="Photo"&&g!="Mo")
{
return;
}
var h=this.getTbExternInfo(g).funcObj;
h.showMenu(false,{sName:"webapns",nArrowPos:null});
};
QMEditor.prototype._updateBtn=function(g,f){
var i=a.finds("td[ui-type='iconInit']",g)[0],h=a.finds("td[ui-type='iconFail']",g)[0],j=a.finds("td[ui-type='iconSucc']",g)[0];
if(!i||!h)
{
return;
}
a.show(i,false);
a.show(h,false);
a.show(j,false);
switch(f)
{case -1:
a.show(i,true);
break;
case 0:
a.show(h,true);
break;
case 1:
a.show(j,true);
h.parentNode.removeChild(h);
i.parentNode.removeChild(i);
break;
}i=h=j=c;
};
QMEditor.prototype._insertHTML=function(h,f,g){
var k=this,i=k.getEditWin();
if(document.selection)
{
if(g)
{
a.insertHTML(g,"beforeEnd",h);
}
else{
var j=i.document.selection.createRange();
j.pasteHTML(h);
j.collapse(false);
j.select();
}
f&&f.call(k);
}
else{
k.execCmd("insertHTML",h,function(){
f&&f.call(k);
});
}
};
QMEditor.prototype._initEvents=function(g){
var f=QMEditorAdapter,j=this,k=QMEditor.getTopWin(),i=function(m){
var p=f.getEventTarget(m),o=f.parents("a[ui-type='shareLink']",p)[0],n;
if(f.attr(p,"ui-type")=="shareLink"||o)
{
n=o||p;
}
return n;
},h=function(m){
var p=f.finds("a[ui-type='shareLink']",m),o=m.parentNode;
if(!p.length)
{
o.removeChild(m);
if(!o.childNodes.length)
{
var n=f.parents("table",o)[0];
n.parentNode.removeChild(n);
n=c;
}
}
p=o=m=c;
},l=function(n,m){
var p=f.finds("td[ui-type='iconSucc'] img[ui-type='goIcon']",n)[0],o=f.finds("td[ui-type='iconSucc'] img[ui-type='delIcon']",n)[0];
if(p)
{
f.show(p,!m);
p.style.visibility=!m?"":"hidden";
p.width=p.height=(!m?14:0);
}
if(o)
{
f.show(o,m);
o.style.visibility=m?"":"hidden";
o.width=o.height=(m?14:0);
}
};
f.addEvents(g,{mousedown:function(m){
var n=i(m);
if(n)
{
var q=f.getEventTarget(m);
if(f.attr(q,"ui-type")=="delIcon")
{
var p=f.parents("a[ui-type='shareLink']",q)[0],o=p.parentNode;
o.removeChild(p);
h(o);
j.focus();
o=p=c;
return true;
}
else if(f.attr(q,"ui-type")=="retryIcon")
{
if(k.QMNetDisk)
{
var p=f.parents("a[ui-type='shareLink']",q)[0],r=f.attr(p,"errorid");
k.QMNetDisk.sharelink.retry(r,function(){
f.E(f.finds("a[errorid='"+r+"']",p.parentNode),function(s){
j._updateBtn(s,-1);
});
});
}
}
f.preventDefault(m);
return false;
}
},mouseover:function(m){
var n=i(m);
if(n&&f.attr(n,"href"))
{
l(n,true);
}
},mouseout:function(m){
var n=i(m);
if(n&&f.attr(n,"href"))
{
l(n,false);
}
}});
};
QMEditor.prototype._getContainer=function(f){
var i=this,h=i.getEditWin();
if(!a.S(b,h))
{
var j=['<table cellspacing="0" cellpadding="0" border="0" style="font-size:12px;">','<tr><td ui-type="shareCon" id="',b,'">','</td></tr>','</table>'].join("");
j+=QMEditor.getBreakLine();
var g=a.S("QQMAILSTATIONERY",h);
if(a.gbIsIE&&g)
{
i.focus(0,g.firstChild||g);
}
else{
i.focus();
}
i.execCmd(a.gbIsIE?"delete":"insertHTML",a.gbIsIE?null:"&nbsp;",function(){
i._insertHTML(j,function(){
f&&f.call(i,a.S(b,h));
});
});
}
else{
f&&f.call(i,a.S(b,h));
}
};
QMEditor.prototype._getShareLink=function(g,f){
var i=this,j=QMEditor.getTopWin(),m=g[0].sType,k=b+m,h=i.getEditWin(),l=j.TE(['$@$for($oList$)$@$','<a ui-type="shareLink" id="$sFakeId$" class="netdisk_fileitem"','$@$if($sLink$)$@$',' href="$sLink$"','$@$endif$@$',' style="display:block;padding:8px 10px 7px;text-decoration:none;" notForEdit="1" target="_blank">','<table cellspacing="0" cellpadding="0" border="0" unselectable="on" ','style="table-layout:fixed;font-size:12px;-moz-user-select:none;-webkit-user-select:none;-o-user-select:none;">','<tr style="line-height:14px;">','<td width="16" align="left" valign="top" ','$@$if(!$sLink$)$@$','style="opacity:.5;filter:alpha(opacity=50);"','$@$endif$@$','>','<img src="$_root_.sDomainImgPath$$sDefaultIconUrl$" width="16" height="16" notForEdit="1" style="vertical-align:top;border:none;"/>','</td>','<td width="380" align="left" valign="top" ','$@$if(!$sLink$)$@$','style="opacity:.5;filter:alpha(opacity=50);"','$@$endif$@$','>','<span style="padding-left:5px;display:inline-block;word-wrap:normal;width:380px;" title="$@$eval getTop().htmlEncode($sName$)$@$">','<span style="display:inline-block;max-width:300px;white-space:nowrap;color:#000;">$@$eval QMEditorAdapter.subAsiiStr(getTop().htmlEncode($sName$),36,"...")$@$</span>','<span style="margin-left:3px;color:#a0a0a0;">($sFileSize$)</span>','</span>','</td>','<td ui-type="iconFail" width="50" align="right" valign="top" style="display:none">','<img ui-type="retryIcon" title="\u91CD\u8BD5" src="$_root_.sDomainImgPath$/zh_CN/htmledition/images/netdisk/netdisk_retry.png" style="margin-right:6px;cursor:pointer;border:none;" width="14" height="14" notForEdit="1" >','<img ui-type="delIcon" title="\u79FB\u9664\u6B64\u6587\u4EF6" style="cursor:pointer;border:none;" src="$_root_.sDomainImgPath$/zh_CN/htmledition/images/netdisk/netdisk_del.png" width="14" height="14" notForEdit="1" >','</td>','<td ui-type="iconSucc" width="50" align="right" valign="top" ','$@$if(!$sLink$)$@$',' style="display:none"','$@$endif$@$','>','<img ui-type="goIcon" src="$_root_.sDomainImgPath$/zh_CN/htmledition/images/spacer.gif" width="14" height="14" notForEdit="1" style="background:url($_root_.sDomainImgPath$/zh_CN/htmledition/images/netdisk/netdisk_arrow.png) no-repeat;border:none;" >','<img ui-type="delIcon" title="\u79FB\u9664\u6B64\u6587\u4EF6" style="cursor:pointer;display:none;visibility:hidden;background:url($_root_.sDomainImgPath$/zh_CN/htmledition/images/netdisk/netdisk_del.png) no-repeat;border:none;" src="$_root_.sDomainImgPath$/zh_CN/htmledition/images/spacer.gif" width="0" height="0" notForEdit="1" >','</td>','<td ui-type="iconInit" width="50" align="right" valign="top"','$@$if($sLink$)$@$',' style="display:none"','$@$endif$@$','>','<img ui-type="delIcon" title="\u79FB\u9664\u6B64\u6587\u4EF6" style="cursor:pointer;border:none;" src="$_root_.sDomainImgPath$/zh_CN/htmledition/images/netdisk/netdisk_del.png" width="14" height="14" notForEdit="1" >','</td>','</tr>','</table>','</a>','$@$endfor$@$']).replace({sDomainImgPath:location.host.indexOf("dev")==0?"//dev.mail.qq.com":(j.isHttp()?"http://mail.qq.com":"https://mail.qq.com"),nIEVer:a.gnIEVer,oList:g});
if(!a.S(k,h))
{
l=i._warpShareLinkTitle(g[0],l);
}
i._getContainer(function(n){
this._moveToEnd(a.S(k,h)||n,function(o){
this._insertHTML(l,function(){
f&&f.call(this);
},o);
});
});
};
QMEditor.prototype._moveToEnd=function(g,f){
var m=this,j=m.getEditWin(),i=j.document,l,k,h=i.createElement("span");
h.innerHTML="&nbsp;";
if(document.selection)
{
g.appendChild(h);
l=i.selection;
l.empty();
k=i.body.createTextRange();
k.moveToElementText(h);
k.select();
g.removeChild(h);
f&&f.call(m,g);
}
else{
g.appendChild(h);
l=j.getSelection();
l.removeAllRanges();
k=i.createRange();
k.selectNode(h);
l.addRange(k);
f&&f.call(m,g);
}
h=null;
};
QMEditor.prototype._warpShareLinkTitle=function(f,g){
var h=this,k=f.sType,j=b+k,i=QMEditor.getTopWin();
return i.T(['<div ui-type="shareField" id="$id$" style="padding-bottom:10px;background:#f2f2f2;border-radius:5px;">','<div unselectable="on" ','style="margin-bottom:8px;padding:8px;color:#a0a0a0;border-bottom:1px solid #ccc;-moz-user-select:none;-webkit-user-select:none;-o-user-select:none;">','<img src="$sDomainImgPath$/zh_CN/htmledition/images/icon_$sAlias$.png" ','width="16" height="16" style="vertical-align:middle;margin:-2px 4px 0 0;*margin-top:0;" notForEdit="1" />','<span style="font-size:12px;">$sLabel$\u7684\u6587\u4EF6</span>','</div>','$HTML$','</div>']).replace(a.extend({sDomainImgPath:location.host.indexOf("dev")==0?"//dev.mail.qq.com":"//mail.qq.com",id:j,HTML:g},i.QMNetDisk?i.QMNetDisk.getInfo(k):{sLabel:"\u5FAE\u4E91",sAlias:"weiyun"}));
};
QMEditor.prototype.isUsedFSEditor=function(){
var f=this;
if(!f.getEditorCustomVar)
{
getTop().LogKV({sValue:'editor|error|no_func|geteditorcustomvar'});
return;
}
return f.getEditorCustomVar('FullScreenToolbar.bUseFullEdtior');
};
QMEditor.prototype.getCurrentEditor=function(){
if(this.isUsedFSEditor())
{
return this.getEditorCustomVar('FullScreenToolbar.oFullEditor');
}
else if(this.getEditorId()=='__FullScreenEditor__')
{
return this.getEditorCustomVar('FullScreenToolbar.oSrcEditor')||this;
}
return this;
};
})(QMEditorAdapter);
(function(a,b){
a.extend(QMEditor.EditMenu.getTemplate(),{_IMG_ROTATE_URL:a.T(["magick?fun=rotate&$rotatekey$&degree=$degree$&sid=$sid$&s=rotateimg&t=compose.json"])});
QMEditor.EditMenu.prototype.rotateImg=function(){
var d=this,c=d._moBindEditor.getImgDom(d._moCurrentEditObj),e=parseInt(c.getAttribute("degree")||0)+90,f=c.getAttribute("rotatekey");
e==360&&(e=0);
if(!f)
{
var h=c.getAttribute("src");
f=h.match(/(upfile|f)=.*&/gi)[0].split('&')[0];
c.setAttribute("rotatekey",f);
}
var g=a.getSid(),i=QMEditor.EditMenu._TEMPLATE._IMG_ROTATE_URL.replace({rotatekey:f.replace("f=","fkey="),degree:e,sid:g});
a.QMAjax.send(i,{method:"GET",onload:function(j,k){
if(j)
{
var l=evalValue(k);
c.setAttribute("src",l.viewfileurl);
c.setAttribute("degree",e);
}
}});
};
})(QMEditorAdapter);
