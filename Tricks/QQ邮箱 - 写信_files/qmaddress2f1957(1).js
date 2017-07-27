(function(_aoWin){
if(_aoWin.QMAddress)
{
return;
}
var _oQMAddress=_aoWin.QMAddress={test:1};
var _oRecentGroupConf=["to","cc","bcc"];
_oQMAddress._moAddress={allAddresses:{},allGroup:{},id2email:{},email2id:{},groupMails:{},_oAllAddressList:[],_mbIsExistGroupMail:false,_msStatus:"uninit"};
_oQMAddress.addAddress=function(_aoAddrObj){
var _sId=_aoAddrObj.id,_sEmail=_aoAddrObj.email;
if(!_sId||!_sEmail)
{
return;
}
var _oAddress=this._moAddress,_oAllAdds=_oAddress.allAddresses;
if(!_oAllAdds[_sId])
{
_oAddress.id2email[_sId]=_sEmail;
_oAddress.email2id[_sEmail]=_sId;
_oAllAdds[_sId]=_aoAddrObj;
_oAddress._oAllAddressList.push(_aoAddrObj);
}
else{
_oAllAdds[_sId].searchdata=[_aoAddrObj.name,_aoAddrObj.pinyin,_aoAddrObj.memo].join(" ");
}
if(_aoAddrObj.qq==g_admuin)
{
_oAddress.groupMails[_sEmail]=_aoAddrObj;
_oAddress._mbIsExistGroupMail=true;
}
};
_oQMAddress.getAddress=function(_sIdOrEmail,_abForceShow,_abMultiMatch){
if(typeof (_sIdOrEmail)=="string"&&_sIdOrEmail.indexOf("_")>0)
{
if(_abForceShow)
{
return this._moAddress.allAddresses[_sIdOrEmail];
}
return null;
}
else if(parseInt(_sIdOrEmail)==_sIdOrEmail)
{
if(_abMultiMatch)
{
for(var _sId in this._moAddress.allAddresses)
{
if(_sId.replace(new RegExp("_.*"),"")==_sIdOrEmail)
{
return this._moAddress.allAddresses[_sId];
}
}
}
}
else{
_sIdOrEmail=this._moAddress.email2id[_sIdOrEmail];
if(typeof _sIdOrEmail=="undefined")
{
return null;
}
}
return this._moAddress.allAddresses[_sIdOrEmail];
};
_oQMAddress.getAllAddressObj=function(){
return this._moAddress["allAddresses"];
};
_oQMAddress.addGroup=function(_aoGroupObj){
if(!_aoGroupObj.id||!_aoGroupObj.addressesId||!_aoGroupObj.groupsId)
{
doPageError(["addGroup",getUin(),_aoGroupObj.id].join(","));
return;
}
if(typeof _aoGroupObj.groupType!="undefined")
{
this._moAddress["allGroup"][_aoGroupObj.groupType]=_aoGroupObj;
}
this._moAddress["allGroup"][_aoGroupObj.id]=_aoGroupObj;
};
_oQMAddress.getGroup=function(_sIdOrName){
return this._moAddress["allGroup"][_sIdOrName]||{};
};
_oQMAddress.getRecentGroupData=function(){
return _oQMAddress._moRecentGroup||{};
};
_oQMAddress.getAllGroupObj=function(){
return this._moAddress["allGroup"];
};
_oQMAddress.getGroupMail=function(_asEmail){
var _oAddress=this._moAddress,_oGroupMails=_oAddress.groupMails;
if(_oAddress._mbIsExistGroupMail)
{
return _asEmail?_oGroupMails[_asEmail]:_oGroupMails;
}
else{
return null;
}
};
_oQMAddress.isInit=function(){
var _sStatus=this._moAddress._msStatus.split("|")[0];
return _sStatus=="init"||_sStatus=="expired";
};
_oQMAddress.isExpired=function(){
var _nOldTime=this.getTime();
return _nOldTime>-1&&now()-_nOldTime>120000;
};
_oQMAddress.getTime=function(){
var _oParts=this._moAddress._msStatus.split("|");
if(_oParts[0]=="expired")
{
var _nOldTime=parseInt(_oParts[1])||0;
return _nOldTime;
}
return -1;
};
_oQMAddress.setExpired=function(_anExpireTime){
if(this._moAddress._msStatus!="uninit")
{
this._moAddress._msStatus=_anExpireTime==-1?"init":["expired",_anExpireTime].join("|");
}
};
_oQMAddress.countAddress=function(){
var _nCount=0;
for(var _key in this._moAddress.allAddresses)
{
_nCount++;
}
return _nCount;
};
_oQMAddress._hasAddress=function(){
for(var _key in this._moAddress.allAddresses)
{
return true;
}
return false;
};
_oQMAddress.countGroup=function(){
var _nCount=0;
for(var _key in this._moAddress.allGroup)
{
_nCount++;
}
return _nCount;
};
_oQMAddress.getAncestor=function(_aoGroup){
var _oChildGroup;
while(_aoGroup)
{
if(_aoGroup.parentId==0)
{
return _aoGroup.id;
}
_aoGroup=_oQMAddress.getGroup(_aoGroup.parentId);
}
return 0;
};
_oQMAddress._clearAllData=function(){
with(this._moAddress)
{
_msStatus="uninit";
allAddresses={};
allGroup={};
email2id={};
_sIdOrName={};
_oAllAddressList=[];
}
};
_oQMAddress._initDomainAddr=function(_aoOption){
if(_aoOption.domaingroups.length==0)
{
return _aoOption;
}
function _fUnique(_oHash,_nId)
{
while(_oHash[_nId])
{
_nId++;
}
_oHash[_nId]=1;
return _nId;
}
var _oAddrIdHash={},_oGroupIdHash={};
for(var i=_aoOption.sortbyupdatetime.length-1;i>=0;i--)
{
if(_aoOption.sortbyupdatetime[i])
{
_oAddrIdHash[_aoOption.sortbyupdatetime[i][0]]=1;
}
}
var _oGoodGroup=[_aoOption.qqgroups,_aoOption.groups];
for(var i=_oGoodGroup.length-1;i>=0;i--)
{
var _oGroup=_oGoodGroup[i];
for(var j=_oGroup.length-1;j>=0;j--)
{
if(_oGroup[j])
{
_oGroupIdHash[_oGroup[j][0]]=1;
}
}
}
var _oDomainGroups=[];
var _oDomainAddr={};
var _nCustomGroupId=100,_nCustomAddrId=1000;
for(var i=0,_nLen=_aoOption.domaingroups.length;i<_nLen;i++)
{
if(_aoOption.domaingroups[i])
{
_aoOption.domaingroups[i][0]=_nCustomGroupId=_fUnique(_oGroupIdHash,_nCustomGroupId);
var _oGroup=_aoOption.domaingroups[i][1];
var _oIds=[];
for(var j=0,_nLen2=_oGroup.length;j<_nLen2;j++)
{
if(_oGroup[j])
{
_oGroup[j].id=_nCustomAddrId=_fUnique(_oAddrIdHash,_nCustomAddrId);
_aoOption.sortbyupdatetime.push([_oGroup[j].id,"",_oGroup[j].email,_oGroup[j].name,(_oGroup[j].uin==g_admuin?0:_oGroup[j].uin)]);
_oIds.push(_nCustomAddrId);
_oDomainAddr[_oGroup[j].email]=_nCustomAddrId;
}
}
_oDomainGroups.push([_nCustomGroupId,_oIds,_aoOption.domaingroups[i][2]]);
}
}
_aoOption.domaingroups=_oDomainGroups;
return _aoOption;
};
_oQMAddress._initQuickAddr=function(_aoOption){
_oQMAddress._clearAllData();
var _bHasQQGroup=!!_aoOption.qqgroups;
_aoOption.qqgroups=_aoOption.qqgroups||{};
_aoOption=_oQMAddress._initDomainAddr(_aoOption);
var _nDISPLAYHOT=9,_oAllAddressList=_oQMAddress._moAddress._oAllAddressList,_oAddrs=_aoOption.sortbyupdatetime,_oId2EmailCache=_oQMAddress._moAddress.id2email,_oEmail2IdCache=_oQMAddress._moAddress.email2id,_oItem;
for(var i=0,_nLen=_oAddrs.length;i<_nLen;i++)
{
if(_oItem=_oAddrs[i])
{
_oId2EmailCache[_oItem[0]]=_oItem[2];
_oEmail2IdCache[_oItem[2]]=_oItem[0];
}
}
for(var i=0,_nLen=_oAddrs.length;i<_nLen;i++)
{
if(_oItem=_oAddrs[i])
{
_oQMAddress.addAddress({id:_oItem[0],pinyin:_oItem[1],email:_oItem[2],name:_oItem[8]?_oItem[8]:_oItem[3],qq:_oItem[4],acspec:_oItem[3].indexOf('&')>=0,u:_oItem[7],memo:_oItem[8]?_oItem[3]:_oItem[8]});
}
}
var _oMailMainGroup={id:1,name:"\u90AE\u7BB1\u8054\u7CFB\u4EBA",addressesId:[],groupType:"mailgroup",groupsId:[],parentId:0,pinyin:''};
_oQMAddress.addGroup(_oMailMainGroup);
var _oQQMainGroup={id:2,name:"QQ\u597D\u53CB",addressesId:[],groupType:"qqgroup",groupsId:[],parentId:0,pinyin:''};
if(_bHasQQGroup)
{
_oQMAddress.addGroup(_oQQMainGroup);
}
var _nShortcutGroupId=g_admuin;
for(var i=0,_nLen=_aoOption.groups.length;i<_nLen;i++)
{
var _oGroup=_aoOption.groups[i],_oIds=[],_oIds2=_oGroup[1];
for(var _j=0,_jLen=_oIds2.length;_j<_jLen;_j++)
{
if(_oIds2[_j]&&_oQMAddress.getAddress(_oIds2[_j],true))
{
_oIds.push(_oIds2[_j]);
}
}
if(_oIds.length>0&&_oIds.length<21)
{
var _oGroupName=[];
for(var _j=0,_len=_oIds.length;_j<_len;_j++)
{
_oGroupName.push(_oQMAddress.getAddress(_oIds[_j],true).name);
}
while(_oQMAddress.getAddress(_nShortcutGroupId))
{
_nShortcutGroupId++;
}
_oQMAddress.addAddress({nShortcutGroupId:_oGroup[0],id:_nShortcutGroupId++,pinyin:_oGroup[3],email:_oGroupName.join("; "),name:_oGroup[2],qq:-1,acspec:_oGroup[2].indexOf('&')>=0});
}
var _oGroupObj={id:_oGroup[0],name:_oGroup[2],addressesId:_oIds,groupsId:[],parentId:_oMailMainGroup.id,pinyin:''};
_oMailMainGroup.groupsId.push(_aoOption.groups[i][0]);
_oQMAddress.addGroup(_oGroupObj);
}
var _oHotCommonGroup={id:3,name:"\u6700\u8FD1\u8054\u7CFB\u4EBA",groupType:"hotgroup",addressesId:[],groupsId:[],parentId:0,pinyin:"ZUIJINLIANXIREN"};
_oQMAddress.addGroup(_oHotCommonGroup);
var _oHasEmail={},i=0,j=0,_nLen=_oAllAddressList.length;
for(;i<_nLen&&j<_nDISPLAYHOT;i++)
{
if(_oAllAddressList[i].u&&_oAllAddressList[i].u!=='0'&&_oAllAddressList[i].id.indexOf("_")<0)
{
var _oAddr=_oAllAddressList[i];
_oHotCommonGroup.addressesId.push(_oAllAddressList[i].id);
_oHasEmail[_oAddr.email]=1;
j++;
}
}
var _oHotMoreGroup={id:4,name:"\u66F4\u591A\u8054\u7CFB\u4EBA",groupType:"hotmoregroup",addressesId:[],groupsId:[],parentId:1,pinyin:'GENGDUOLIANXIREN'};
for(;i<_nLen;i++)
{
if(_oAllAddressList[i].u&&_oAllAddressList[i].u!=='0')
{
var _oAddr=_oAllAddressList[i];
_oHotMoreGroup.addressesId.push(_oAddr.id);
_oHasEmail[_oAddr.email]=1;
j++;
}
}
_oQMAddress.addGroup(_oHotMoreGroup);
if(j>_nDISPLAYHOT)
{
_oHotCommonGroup.moreChildId=4;
}
for(var i=0,_nLen=_aoOption.qqgroups.length;i<_nLen;i++)
{
if(_oItem=_aoOption.qqgroups[i])
{
var _oIds=_oItem[1];
if(_oIds.length>0&&typeof _oIds[_oIds.length-1]=="undefined")
{
_oIds.length=_oIds.length-1;
}
var _oGroupObj={id:_oItem[0],name:_oItem[2],addressesId:_oIds,groupsId:[],parentId:_oQQMainGroup.id};
_oQQMainGroup.groupsId.push(_oItem[0]);
_oQMAddress.addGroup(_oGroupObj);
}
}
var _oDomainGroup={id:7,name:"\u57DF\u540D\u90AE\u7BB1\u8054\u7CFB\u4EBA",addressesId:[],groupType:"domaingroup",groupsId:[],parentId:0,pinyin:'YUMINGYOUXIANGLIANXIREN'};
_oQMAddress._oDomainGroupSuffix=[];
for(var i=0,_nLen=_aoOption.domaingroups.length;i<_nLen;i++)
{
_oQMAddress._oDomainGroupSuffix.push("@"+_aoOption.domaingroups[i][2]);
var _oIds=_aoOption.domaingroups[i][1];
if(_oIds.length>0&&typeof _oIds[_oIds.length-1]=="undefined")
{
_oIds.length=_oIds.length-1;
}
var _oGroupObj={id:_aoOption.domaingroups[i][0],name:_aoOption.domaingroups[i][2],addressesId:_oIds,groupsId:[],parentId:_oDomainGroup.id,pinyin:_aoOption.domaingroups[i][3]};
_oDomainGroup.groupsId.push(_aoOption.domaingroups[i][0]);
_oQMAddress.addGroup(_oGroupObj);
}
if(_oDomainGroup.groupsId.length>0)
{
_oQMAddress.addGroup(_oDomainGroup);
}
var _oGGroup={id:11,name:"\u90AE\u4EF6\u7EC4",groupType:"ggroup",addressesId:[],groupsId:[],parentId:0,pinyin:'YOUJIANZU'};
if(_aoOption.ggroup)
{
for(var i=0,_nLen=_aoOption.ggroup.length;i<_nLen;i++)
{
var _sEmail=_aoOption.ggroup[i][2],_oAddr=_oQMAddress.getAddress(_sEmail);
if(!_oAddr)
{
while(_oQMAddress.getAddress(_nShortcutGroupId))
{
_nShortcutGroupId++;
}
_oQMAddress.addAddress(_oAddr={id:_nShortcutGroupId,pinyin:"",email:_aoOption.ggroup[i][2],name:_aoOption.ggroup[i][2].replace(/@.*/,""),qq:g_admuin,acspec:false});
}
else{
_oAddr.qq=g_admuin;
}
_oGGroup.addressesId.push(_oAddr.id);
}
if(_nLen>0)
{
_oQMAddress.addGroup(_oGGroup);
}
}
var _oMailToolGroup={id:12,name:"\u90AE\u7BB1\u52A9\u624B",groupType:"tool",addressesId:[],groupsId:[],parentId:0,pinyin:"YOUXIANGZHUSHOU"};
_oQMAddress.addGroup(_oMailToolGroup);
if(_aoOption.tool)
{
for(var i=0,_nLen=_aoOption.tool.length;i<_nLen;i++)
{
var _oData=_aoOption.tool[i],_sId=unikey();
_oQMAddress.addAddress(_oAddr={id:_sId,pinyin:_oData[0],email:_oData[1],name:_oData[2],acspec:false,icon:_oData[3],istool:true});
_oMailToolGroup.addressesId.push(_sId);
}
}
var _sMyUniKey=unikey();
_oQMAddress.addGroup({id:"myself",name:"\u6211\u81EA\u5DF1\u7684\u90AE\u7BB1",groupType:"myself",addressesId:[_sMyUniKey],groupsId:[],parentId:0,pinyin:"WOZIJIDEYOUXIANG"});
_oQMAddress.addAddress({id:_sMyUniKey,email:getTop().getUserInfoText("addr"),name:"\u6211\u81EA\u5DF1\u7684\u90AE\u7BB1",isMyself:true,acspec:false,istool:true});
this._moAddress._msStatus="init";
};
_oQMAddress._initRecentGroup=function(_aoData){
var _oRegTmpl=TE(['$@$for($Data$)$@$','<$_idx_$>','"$@$eval getTop().htmlEncode($name$)$@$"','<$addr$>;','$@$endfor$@$']);
_oNicksTmpl=TE(['$@$for($Data$)$@$','$@$eval getTop().htmlEncode($name$)$@$;','$@$endfor$@$']);
_oQMAddress._moRecentGroup=_aoData;
E(_aoData,function(_oItem,_nIdx){
_oItem.total=0;
_oItem.matchReg={};
_oItem.nicksStr={};
E(_oRecentGroupConf,function(_asId){
_oItem.total+=_oItem.data[_asId].length;
_oItem.matchReg[_asId]=_oRegTmpl.replace({Data:_oItem.data[_asId]});
_oItem.nicksStr[_asId]=_oNicksTmpl.replace({Data:_oItem.data[_asId]});
});
});
};
_oQMAddress.getAutoAddrList=function(_afFilterFunc){
var _oPopupAddress=[],_allAddrList=_oQMAddress._moAddress._oAllAddressList,_oAddr;
if(typeof _afFilterFunc=="function")
{
for(var i=0,_nLen=_allAddrList.length;i<_nLen;i++)
{
_oAddr=_allAddrList[i];
if(!_oAddr.istool&&_afFilterFunc(_oAddr)!==false)
{
_oPopupAddress.push(_oAddr);
}
}
}
else{
for(var i=0,_nLen=_allAddrList.length;i<_nLen;i++)
{
_oAddr=_allAddrList[i];
if(!_oAddr.istool)
{
_oPopupAddress.push(_oAddr);
}
}
}
return _oPopupAddress;
};
_oQMAddress._loadAddressData=function(){
var _oSelf=arguments.callee,_oAjaxIns;
if(_oSelf._sAjaxStatus!="loading")
{
_oSelf._moAjaxIns&&_oSelf._moAjaxIns.abort();
_oAjaxIns=_oSelf._moAjaxIns=new QMAjax("","GET",30000);
_oAjaxIns.onComplete=function(_aoXmlObj){
_oSelf._sAjaxStatus="finish";
var _sResponseText=_aoXmlObj.responseText;
try{
_oQMAddress._reShowAddress(getTop().evalValue(_sResponseText),false);
}
catch(_oError)
{
if(_sResponseText.indexOf("({")==0)
{
doPageError(_oError.message,"qmaddress.js","QMAddress._loadAddressData");
}
_oQMAddress._reShowAddress({},true);
}
};
_oAjaxIns.onError=function(){
_oSelf._sAjaxStatus="finish";
_oQMAddress._reShowAddress({},true);
};
var _oUrlTpl=isSpreadAddr()?T("/cgi-bin/laddr_lastlist?sid=$sid$&encode_type=js&t=addr_datanew&s=AutoComplete&category=hot&resp_charset=UTF8&ef=js&r=$random$"):T("/cgi-bin/addr_listall?sid=$sid$&encode_type=js&show_type=hot&all_data=1&level=0&qq=0&t=addr_data&sorttype=Freq&s=AutoComplete&category=hot&record=n&resp_charset=UTF8&ef=js&r=$random$");
_oAjaxIns.url=_oUrlTpl.replace({sid:getSid().split(",")[0],random:Math.random()});
_oSelf._sAjaxStatus="loading";
_oAjaxIns.send();
}
};
_oQMAddress._loadRecentGroupData=function(){
var _sUrl=T("/cgi-bin/laddr_domain_check?sid=$sid$&acttype=5&t=recent_group.json").replace({sid:getSid()});
QMAjax.send(_sUrl,{onload:function(_abIsOk,_asParam,_aoXmlObj){
if(_abIsOk)
{
var _oData;
try{
_oData=evalValue(_asParam);
}
catch(e)
{
debug("<\u6700\u8FD1\u8054\u7CFB\u4EBA\u7EC4>\u6570\u636E\u683C\u5F0F\u9519\u8BEF");
return;
}
_oQMAddress._initRecentGroup(_oData);
}
else{
debug("<\u6700\u8FD1\u8054\u7CFB\u4EBA\u7EC4>\u6570\u636E\u52A0\u8F7D\u5931\u8D25");
}
}});
};
_oQMAddress._loadAddressData._mnRetryCount=0;
_oQMAddress._loadAddressData._moListener=[];
_oQMAddress._loadAddressData._addListener=function(_afCallback){
if(typeof _afCallback=="function")
{
var _oListener=_oQMAddress._loadAddressData._moListener;
for(var _i=_oListener.length-1;_i>=0;_i--)
{
if(_oListener[_i]==_afCallback)
{
return;
}
}
_oListener.push(_afCallback);
}
};
_oQMAddress._loadAddressData._fire=function(_aoParam){
var _oListener=_oQMAddress._loadAddressData._moListener,_oNewListener=[];
for(var _i=_oListener.length-1;_i>=0;_i--)
{
try{
if(_oListener[_i](_aoParam)!==false&&_aoParam.sType!='succeed')
{
_oNewListener.push(_oListener[_i]);
}
}
catch(_aoError)
{
}
}
_oQMAddress._loadAddressData._moListener=_oNewListener;
};
_oQMAddress._reShowAddress=function(_aoData,_bTimeout){
if(_aoData&&_aoData.sysmaintence)
{
return _oQMAddress._loadAddressDataCallback("fail",_aoData.sysmaintence);
}
if(_bTimeout||typeof _aoData.groups=="undefined")
{
if(++_oQMAddress._loadAddressData._mnRetryCount<5)
{
setTimeout(_oQMAddress._loadAddressData,35000);
}
else{
_oQMAddress._loadAddressDataCallback("fail","\u8054\u7CFB\u4EBA\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
doPageError("QMAddress failed to load","","");
}
return;
}
_oQMAddress.setExpired(-1);
_oQMAddress._initQuickAddr(_aoData);
_oQMAddress._loadAddressDataCallback('succeed');
_oQMAddress.setExpired(now());
};
_oQMAddress._loadAddressDataCallback=function(_asType,_asMsg){
if(_oQMAddress.isInit())
{
_oQMAddress._loadAddressData._fire({sType:'succeed',sMsg:'\u540C\u6B65QQ\u597D\u53CB\u5230\u8054\u7CFB\u4EBA\u4E2D'});
}
else if(_asType!='succeed')
{
_oQMAddress._loadAddressData._fire({sType:_asType,sMsg:_asMsg});
}
return false;
};
_oQMAddress.initAddress=function(_afCallback){
_afCallback&&_oQMAddress._loadAddressData._addListener(_afCallback);
if(!_oQMAddress.isInit()||_oQMAddress.isExpired())
{
_afCallback&&_afCallback({sType:'loading',sMsg:'\u52A0\u8F7D\u4E2D...'});
_oQMAddress._loadAddressData._mnRetryCount=0;
_oQMAddress._loadAddressData();
_oQMAddress._loadRecentGroupData();
}
else{
_afCallback&&_afCallback({sType:'succeed',sMsg:'\u540C\u6B65QQ\u597D\u53CB\u5230\u8054\u7CFB\u4EBA\u4E2D'});
}
return false;
};
_oQMAddress.importqq=function(){
var _sMsg="\u60A8\u7684QQ\u597D\u53CB\u5DF2\u540C\u6B65\u5230\u8054\u7CFB\u4EBA\u4E2D";
QMAjax.send("/cgi-bin/addr_importqq?&ImportType=Replace&sid="+getSid(),{onload:function(_abIsOk,_asParam,_aoXmlObj){
if(_abIsOk&&_asParam.indexOf(_sMsg)>-1)
{
showInfo(_sMsg);
_oQMAddress.setExpired(-1);
_oQMAddress._loadAddressData();
}
else{
showError("\u540C\u6B65QQ\u597D\u53CB\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
}
}});
return false;
};
_oQMAddress.getRecentGroup=function(_aoConfig){
var _sId=_aoConfig.searchId,_sSearchStr=getTop().htmlEncode(_aoConfig.searchStr),_oAddrList=_aoConfig.addrList,_oRecentGroup=_oQMAddress._moRecentGroup,_oMatchReg=new RegExp(["<(\\d+)>[^>]*",regFilter(_sSearchStr),"[^>]*>;"].join("")),_oFilterGroups=[],_oResultGroups=[];
E(_oRecentGroup,function(_aoGroupItem,_anGroupIdx){
var _oTmpGroup={index:_aoGroupItem.index,total:_aoGroupItem.total,matchReg:_aoGroupItem.matchReg,nicksStr:_aoGroupItem.nicksStr[_sId],matchNicks:{},matchAddrs:{},hasMatched:{}},_bMatch=true;
E(_oRecentGroupConf,function(_asId){
_oTmpGroup.matchNicks[_asId]=[];
_oTmpGroup.matchAddrs[_asId]=[];
_oTmpGroup.hasMatched[_asId]={};
for(var _nAddrIdx=0;_nAddrIdx<_oAddrList[_asId].length;++_nAddrIdx)
{
var _sAddrReg=new RegExp(["<(\\d+)>\"([^\"]*)\"<",regFilter(_oAddrList[_asId][_nAddrIdx]),">;"].join("")),_oTestRes=_sAddrReg.exec(_aoGroupItem.matchReg[_asId]);
if(_oTestRes)
{
_oTmpGroup.matchAddrs[_asId].push(_oTestRes[1]);
_oTmpGroup.matchNicks[_asId].push(_oTestRes[2]);
_oTmpGroup.hasMatched[_asId][_oTestRes[1]]=true;
_oTmpGroup.nicksStr=_oTmpGroup.nicksStr.replace(_oTestRes[2]+";","");
}
else{
_bMatch=false;
break;
}
}
});
if(_bMatch)
{
_oFilterGroups.push(_oTmpGroup);
}
});
E(_oFilterGroups,function(_oItem,_nIdx){
var _oTestRes=_oMatchReg.exec(_oItem.matchReg[_sId]);
if(_oTestRes)
{
var _bHasMatched=false,_nIdx=_oTestRes[1],_sTmpStr,_sName=getTop().htmlEncode(_oRecentGroup[_oItem.index].data[_sId][_nIdx].name),_nShowCnt=0,_oShowNicks=[];
for(var _i=0;_i<_oItem.matchAddrs[_sId].length;++_i)
{
if(_oItem.matchAddrs[_sId][_i]==_nIdx)
{
_bHasMatched=true;
break;
}
}
if(!_bHasMatched)
{
_oItem.matchAddrs[_sId].push(_nIdx);
_oItem.matchNicks[_sId].push(_sName);
_oItem.hasMatched[_sId][_nIdx]=true;
}
var _nLen=_oItem.matchNicks[_sId].length;
var _oBoldReg=new RegExp("("+regFilter(_sSearchStr)+")"),_oReplace="<b>$1</b>",_nNickCnt=_nLen;
_oShowNicks=_oItem.matchNicks[_sId].slice(0,_nLen-1);
_oShowNicks.push(_sName.replace(_oBoldReg,_oReplace));
E(_oRecentGroupConf,function(_asId){
E(_oRecentGroup[_oItem.index].data[_asId],function(_aoItem,_anIdx){
if(_asId==_sId&&_oItem.hasMatched[_asId][_anIdx])
{
return;
}
_nNickCnt++;
_oShowNicks.push(getTop().htmlEncode(_aoItem.name));
});
});
_oItem.nicksStr=_sTmpStr;
_oItem.sId=_oItem.index;
_oItem.searchId=_sId;
_oItem.bIsRecentGroup=true;
_oItem.sItemValue=['<div unselectable="on" class="pointer">','<div unselectable="on" class="compose_contact_group">','<span unselectable="on" class="compose_contact_right">','<span unselectable="on" class="icon_contact"></span>','<span unselectable="on" class="contact_num">',_oItem.total,'</span>','</span>','<img unselectable="on" class="lm_groupAutoIcon" src="'+getPath('image')+'spacer.gif" title="\u90AE\u4EF6\u7EC4\u5E10\u53F7"/>','<span unselectable="on" class="compose_contact_groupname">',_oShowNicks.join("; ")+";",'</span>','</div>','<div unselectable="on" class="graytext" style="margin-top:-4px;">',_oRecentGroup[_oItem.index].subject!=""?_oRecentGroup[_oItem.index].subject:"(\u65E0\u4E3B\u9898)",'</div>','</div>'].join("");
_oResultGroups.push(_oItem);
}
});
return _oResultGroups;
};
_oQMAddress.getDomainSuffix=function(){
return _oQMAddress._oDomainGroupSuffix;
};
_aoWin.getAddrACData=function(_aoInputObj,_asDefaultValue,_afFilterFunc){
var _sAddrValue=_aoInputObj.value||_asDefaultValue||"",_nIdx=_sAddrValue.lastIndexOf(';');
_nIdx=(_nIdx>-1)?_nIdx:_sAddrValue.lastIndexOf(',');
if(_nIdx!=-1)
{
_sAddrValue=_sAddrValue.substr(_nIdx+1);
}
if(!_sAddrValue)
{
return [];
}
var _asFilter=trim(_sAddrValue).toLowerCase(),_sGroupImgage='<img unselectable="on" class="lm_groupAutoIcon" src="'+getPath('image')+'spacer.gif" title="\u90AE\u4EF6\u7EC4\u5E10\u53F7"/>',_oSelf=arguments.callee,_oAddrList,_oRegExp=new RegExp("("+regFilter(_asFilter)+")","i"),_sReplace='<b unselectable="on">$1</b>',_oCacheAddress=[],_oOutput=[],_oOutputMap={},_oExistMap={},_nOutputIndex,_sFilterLen=_asFilter.length;
if(0&&_oSelf._msFilter&&_asFilter.indexOf(_oSelf._msFilter)==0&&_oSelf._moCacheAddress&&_oSelf._moCacheAddress.length&&_oSelf._mnDataTime===_oQMAddress.getTime())
{
_oAddrList=_oSelf._moCacheAddress;
}
else{
_oAddrList=_oQMAddress.getAutoAddrList(_afFilterFunc);
}
for(var i=0,_len=_oAddrList.length;i<_len;i++)
{
var _oAddrData=_oAddrList[i],_sTmpValue,_bNoMemo=true,_sItemValue=null;
var isInEncodeLogic=false;
if(_oAddrData.acspec)
{
var _sName=htmlDecode(_oAddrData.name),_nIndex;
if((_nIndex=_sName.indexOf(_asFilter))>-1)
{
_sItemValue=['"',htmlEncode(_sName.substring(0,_nIndex)),'<b>',htmlEncode(_sName.substr(_nIndex,_sFilterLen)),'</b>',htmlEncode(_sName.substring(_nIndex+_sFilterLen)),'" &lt;',_oAddrData.email,'&gt;'].join("");
}
}
else{
var encodeName=htmlEncode(_oAddrData.name),_sName=_oAddrData.name,_nIndex;
_sTmpValue=_sName;
if(encodeName!==_sName)
{
if((_nIndex=_sName.indexOf(_sAddrValue))>-1)
{
_sTmpValue=[htmlEncode(_sName.substring(0,_nIndex)),"<b unselectable=\"on\">"+_sAddrValue+"</b>",htmlEncode(_sName.substring(_nIndex+_sFilterLen))].join("");
}
}
else{
(_sTmpValue=_oAddrData.name.replace(_oRegExp,_sReplace));
}
if(_sTmpValue!=_oAddrData.name)
{
_sItemValue=['"',_sTmpValue,'" &lt;',_oAddrData.email,'&gt;'].join("");
}
if(_sItemValue)
{
isInEncodeLogic=true;
}
}
if(!_sItemValue)
{
if((_sTmpValue=_oAddrData.email.replace(_oRegExp,_sReplace))!=_oAddrData.email)
{
_sItemValue=['"',_oAddrData.name,'" &lt;',_sTmpValue,'&gt;'].join("");
}
else if(_oRegExp.test(_oAddrData.pinyin))
{
_sItemValue=['"',_oAddrData.name,'" &lt;',_oAddrData.email,'&gt;'].join("");
}
else if(_oAddrData.memo&&_oAddrData.memo!=_oAddrData.name)
{
if((_sTmpValue=_oAddrData.memo.replace(_oRegExp,_sReplace))!=_oAddrData.memo)
{
_sItemValue=['"',_oAddrData.name,'" &lt;',_oAddrData.email,'&gt;','(',_sTmpValue,')'].join("");
_bNoMemo=false;
}
}
}
if(_bNoMemo&&_sItemValue&&_oAddrData.memo)
{
_sItemValue+=["(",_oAddrData.memo,")"].join("");
_bNoMemo=false;
}
if(_sItemValue&&_oAddrData.qq==getTop().g_admuin)
{
_sItemValue=_sGroupImgage+_sItemValue;
}
if(_sItemValue&&_oAddrData.nShortcutGroupId)
{
_sItemValue='<img unselectable="on" class="lm_groupUnfold" src="'+getPath('image')+'spacer.gif" title="\u7FA4\u7EC4"/>'+(isInEncodeLogic?_sTmpValue:_oAddrData.name.replace(_oRegExp,_sReplace));
}
if(_sItemValue&&!_oExistMap[_oAddrData.email])
{
var _sItemValueTemp=['"',_oAddrData.name,'" &lt;',_oAddrData.email,'&gt;'].join("");
if(_oOutputMap[_sItemValueTemp]==1)
{
if(_bNoMemo)
{
continue;
}
else{
_oOutputMap[_sItemValueTemp]=2;
}
}
else{
_oOutputMap[_sItemValueTemp]=1;
}
_oCacheAddress.push(_oAddrData);
_oOutput.push({sId:i,bMemo:!_bNoMemo,oAddress:_oAddrData,sItemValue:_sItemValue});
_oExistMap[_oAddrData.email]=1;
}
}
_nOutputIndex=_oOutput.length-1;
while(_nOutputIndex>=0)
{
var _oItem=_oOutput[_nOutputIndex],_oAddrData=_oItem.oAddress,_sItemValueTemp=['"',_oAddrData.name,'" &lt;',_oAddrData.email,'&gt;'].join("");
if(_oOutputMap[_sItemValueTemp]==2&&!_oItem.bMemo)
{
_oOutput.splice(_nOutputIndex,1);
delete _oItem;
}
_nOutputIndex--;
}
_oSelf._msFilter=_asFilter;
_oSelf._mnDataTime=_oQMAddress.getTime();
_oSelf._moCacheAddress=_oCacheAddress;
return _oOutput;
};
})(window);
