(function(){

	var server = ["https://aq.qq.com/cn2/manage/mbtoken/hijack_sec_js_report", 'https://zyjc.sec.qq.com/dom', 'https://aq.qq.com/cn2/manage/mbtoken/hijack_pv_report', 'https://aq.qq.com/cn2/manage/mbtoken/hijack_xss_report'];
	var pvRandom = Math.random();
	var CONST_PV_RANDOM = 0.005;
	var hasReportedHP = false;
	
	function AQ_SECAPI_ESCAPE(Url, map) {
		var tmpArr = new Array;
		for (var m = 0; m < Url.length; m++) {
			if (Url.charAt(m) == '&') {
				var keyLen = [3, 4, 5, 9];
				var matchFlag = 0;
				for (var n in keyLen) {
					var l = keyLen[n];
					if (m + l <= Url.length) {
						var subLow = Url.substr(m, l).toLowerCase();
						if (map[subLow]) {
							tmpArr.push(map[subLow]);
							m = m + l - 1;
							matchFlag = 1;
							break;
						}
					}
				}
				if (matchFlag == 0) {
					tmpArr.push(Url.charAt(m));
				}
			} else {
				tmpArr.push(Url.charAt(m));
			}
		}
		return tmpArr.join("");
	}
	
	function AQ_SECAPI_CheckXss() {
		var map = new Object();
		var escapeChars = "'\"<>`script:daex/hml;bs64,";
		for (var i = 0; i < escapeChars.length; i++) {
			var cha = escapeChars.charAt(i);
			var dec = cha.charCodeAt();
			var dec7 = dec;
			var hex = dec.toString(16);
			for (var j = 0; j < (7 - dec.toString().length); j++) {
				dec7 = "0" + dec7;
			}
			map["&#" + dec + ";"] = cha;
			map["&#" + dec7] = cha;
			map["&#x" + hex] = cha;
		}
		map["&lt"] = "<";
		map["&gt"] = ">";
		map["&quot"] = "\"";
		var Url = location.href;
		var Refer = document.referrer;
		Url = decodeURIComponent(AQ_SECAPI_ESCAPE(Url, map));
		Refer = decodeURIComponent(AQ_SECAPI_ESCAPE(Refer, map));
		var XssPattern = new RegExp("['\"<>`]|script:|data:text/html;base64,");
		if (XssPattern.test(Url) || XssPattern.test(Refer)) {
			var version = '2',
			cgi = server[1],
			img = new Image();
			
			//上报xss数据 保留原逻辑
			if(Math.random() < 0.1){
				var xssCgi = server[3];
				httpSend(xssCgi + "?v=" + version + "&u=" + encodeURIComponent(Url) + "&r=" + encodeURIComponent(Refer));
			}
			
			img.src = cgi + "?v=" + version + "&u=" + encodeURIComponent(Url) + "&r=" + encodeURIComponent(Refer);
			Url = Url.replace(/['\"<>`]|script:/gi, 'M');
			Url = Url.replace(/data:text\/html;base64,/gi, 'data:text/plain;base64,');
			location.href = encodeURI(Url);
		}
	}
	AQ_SECAPI_CheckXss();



	//hijack
	function createEle(ele) {
        return document.createElement(ele);
    }

    function createForm(url, targetName, type){
        var form = createEle("form");
        form.action = url;
        form.method = type;
        form.target = targetName;
        form.style.display = "none";
        return form;
    }

    function createInput(name, value){
        var input = createEle("input");
        input.name = name;
        input.value = value;
        return input;
    }

    function createIframe(name){
		var iframe = createEle("iframe");
		iframe.name = name;
		iframe.src = "javascript:void(0);";
		iframe.style.display = "none";
        return iframe;
    }

	//ie6下不支持dom.remove()
	function removeElement(element) {
		element && element.parentNode && element.parentNode.removeChild(element);
	}

	function createButton(){
		var button = document.getElementById("button1");
		return button;
	}

    function httpPost(obj){
        var url = obj.url;
        var data = obj.data;
        var targetName = "aq_form" + Math.random() * 10e16;
        var form = createForm(url, targetName, "post");
        var iframe = createIframe(targetName);
        document.body.appendChild(iframe);
		iframe.contentWindow.name = targetName;
        for (var key in data) {
            form.appendChild(createInput(key, data[key]));
        }
        document.body.appendChild(form);
		form && form.submit();

        setTimeout(function(){
            removeElement(form);
			removeElement(iframe);
        }, 2000);
    }
	
	function httpSend(src){
		var img = new Image();
		img.src = src;
	};

	function getRegularPlugins(){
		var plugins = navigator.plugins;
		var data = "";
		if(plugins && plugins.length){
			data = [];
			for(var i = 0; i < plugins.length; i++){
				var name = plugins[i].name;
				var desc = plugins[i].description;
				data.push(name + "::" + desc);
			}
			data = data.join(";");

		}
		return data;
	}

	(function (_wnd, _doc, _ln) {//window, document, location
		function checkNonTxDomain(level, bid, pagetype) {//0.1 100 1 0
			var checkInfo = {
				bid : bid,
				childUrl : "",
				parentUrl : ""
			},
			childCheckFlag,
			parentCheckFlag;
			try {
				checkInfo.childUrl = _ln.href;
			} catch (ign) {}
			try {
				checkInfo.parentUrl = parent.location.href;
			} catch (ign) {}

			//这个灰度一直没看懂有什么用 阿里的看到过
			/* if (Math.random() > level) {
				return;
			} */

			if (pagetype == 1) {
				//仅仅扫描parent上报
				try {
					parentCheckFlag = (parent != _wnd) ? generateNonTxDomainFromDom(parent.document, 'datapp', checkInfo) : false;
				} catch (ign) {}

			} else {
				//当前页和parent均扫描上报
				try {
					childCheckFlag = generateNonTxDomainFromDom(_doc, 'datapt', checkInfo);
					parentCheckFlag = (parent != _wnd) ? generateNonTxDomainFromDomProxy(parent.document, 'datapp', checkInfo) : false;
				} catch (ign) {}
				try {
					if (parent != _wnd) { 
						generateZyjIframed(checkInfo);
					}
				} catch (ign) {}

			}
		}
		function generateZyjIframed(checkInfo) {
			//不上报腾讯域名的被iframe调用信息
			if(isAntiTxDomain(checkInfo.parentUrl)){
				var data = [];
				data.push("beframed::url");
				packZyjUrlData(data, 'beframed', checkInfo);	
			}
		}
		function packZyjUrlData(data, dataMark, checkInfo) {
			var version = '1.4',
			cgi = server[0],
			img = new Image();
			data.push("childUrl::" + encodeURIComponent(checkInfo.childUrl));
			data.push("parentUrl::" + encodeURIComponent(checkInfo.parentUrl));
			//img.src = cgi + "?id=" + checkInfo.bid + "&d=" + dataMark + "=v" + version + "|" + data.join('|');

			//img.src = cgi + "?id=" + checkInfo.bid + "&imark=" + dataMark +"&data=" + data.join('|');

				
			//hasReportedHP 确保只上报一次
			if(!hasReportedHP && (pvRandom < CONST_PV_RANDOM)){
				hasReportedHP = sendHijackPV(data.join("|"));
			}
			
			//灰度10%
			if(Math.random() < 0.9){
				return false;
			}
			
			var pdata = {
				id: checkInfo.bid,
				imark: dataMark,
				data: data.join('|')
			};

			if (Math.random() < 0.5) {
				pdata.dom = encodeURIComponent(document.documentElement.outerHTML);
				pdata.plgs = encodeURIComponent(getRegularPlugins());
			}
				
			httpPost({
				data: pdata,
				url: server[0]
			});

			return true;
		}


		//逻辑都在这里
		
		
		function generateNonTxDomainFromDomProxy(dom, parentMark, checkInfo) {
			//不上报parentUrl为tx域的劫持数据
			if(isAntiTxDomain(checkInfo.parentUrl)){
				generateNonTxDomainFromDom(dom, parentMark, checkInfo);
			}
		}
		
		
		function generateNonTxDomainFromDom(dom, parentMark, checkInfo) {
			var scriptData = extractNonTxScriptWorm(dom);//script 数组：过滤掉tx内部的相关域名 [script_worm::xxx1, script_worm::xxx2]
			var iframeData = extractNonTxIframe(dom);//数组：含有src的iframe [iframe::xxx.html]
			var frameData = extractNonTxFrame(dom);//Frame [frame::xxx]
			var embedData = extractNonTxEmbed(dom);//embed src [embed::xxx]
			var imgData = extractNonTxIMG(dom);//img src [img::xxx]
			var hacks = scriptData.concat(iframeData, frameData, imgData, embedData);
			if (hacks.length <= 0) {
				return false;
			}
			hacks = distinctZyjArray(hacks);//排序去重
			packZyjUrlData(hacks, parentMark, checkInfo);//发送
		}
		function extractNonTxScriptWorm(dom) {
			var scripts = dom.getElementsByTagName("script"),
			scriptData = [],
			tempScript,
			urlList,
			url,
			nonTxList,
			mapFunc,
			resultList;
			for (var i = 0; i < scripts.length; i++) {
				tempScript = scripts[i];
				if (url = tempScript.src) {
					scriptData.push(url);
				}
			}
			nonTxList = grepZyjList(scriptData, isAntiTxDomain);
			mapFunc = addTagToZyjUrlCallback('script');
			resultList = mapZyjList(nonTxList, mapFunc);
			return resultList;
		}
		function extractNonTxScript(dom) {
			var scripts = dom.getElementsByTagName("script"),
			scriptData = [],
			tempScript,
			urlList,
			url,
			nonTxList,
			mapFunc,
			resultList;
			for (var i = 0; i < scripts.length; i++) {
				tempScript = scripts[i];
				urlList = extractZyjUrlFromHtml(tempScript.innerHTML);
				scriptData = scriptData.concat(urlList);
				if (url = tempScript.src) {
					scriptData.push(url);
				}
			}
			nonTxList = grepZyjList(scriptData, isAntiTxDomain);
			mapFunc = addTagToZyjUrlCallback('script_worm');//script_worm::xxx
			resultList = mapZyjList(nonTxList, mapFunc);//[script_worm::xxx1, script_worm::xxx2]
			return resultList;
		}
		function extractZyjUrlFromHtml(html) {
			var regUrl = /\bhttps?:\/\/[^\"\'\s]+/ig,
			urlList = [];
			while (url = regUrl.exec(html)) {
				urlList.push(url);
			}
			return urlList;
		}
		function grepZyjList(testList, testFunction) {
			var grepList = [];
			for (var idx = 0; idx < testList.length; ++idx) {
				var temp = testList[idx];
				if (testFunction(temp)) {
					grepList.push(temp);
				}
			}
			return grepList;
		}
		function isAntiTxDomain(sUrl) {
			var sDomain = extractZyjDomain(sUrl),
			regErrDom,
			regTxCom,
			regTxCn,
			regTxNet,
			regTxOther;
			if (!sDomain) {
				return false;
			}
			regErrDom = /^xui.ptlogin2?\.?$/i;
			regTxCom = /(\.|^)(qq|paipai|soso|wenwen|tenpay|macromedia|gtimg|qstatic|qqmail|paipaiimg|qqgames|pengyou|foxmail|qzoneapp|qzone|qplus|imqq|tqapp|tencent|3366|21mmo|taotao|imrworldwide|idqqimg|17roco|expo2010china|fangqq|tencentmind|tencity|yingkebicheng|zhangzhongxing|expovol|otaworld|gzyunxun|heyyo|himoral|himorale|myrtx|qqwinner|redian|sjkx|rtxonline|nbaso|paipai\.500wan|qqjapan|qq\.salewell|sogou|weiyun|flzhan|wechat|webplat\.ied)\.com$/i;
			regTxCn = /(\.|^)(qq\.com|gtimg|gtimg\.com|qlogo|foxmail\.com|gtimg\.com|url|qpic|tencent\.com|expo2010|expo|himorale\.com|nbaso\.com|qqtest\.com|qq\.ucar|rtx\.com|soso\.com|tcimage|taoche)\.cn$/i;
			regTxNet = /(\.|^)(5999|gongyi)\.net$/i;
			regTxOther = /(\.|^)(himorale\.com\.hk|tencent\.com\.hk|qq\.chinacache\.net|qq\.com\.fastcdn\.com|qq\.com\.lxdns\.com|qq\.fastcdn\.com|soso\.com\.lxdns\.com|motu\.pagechoice\.net|ope\.tanx\.com|dap\.gentags\.net|widget\.weibo\.com)$/i;
			if (regErrDom.test(sDomain) || regTxCom.test(sDomain) || regTxCn.test(sDomain) || regTxNet.test(sDomain) || regTxOther.test(sDomain)) {
				return false;
			}
			return true;
		}
		function extractZyjDomain(sUrl) {
			var regDomain = /^https?:\/\/([\w\-]+\.[\w\-.]+)/i,
			m = regDomain.exec(sUrl);
			if (!m) {
				return;
			}
			return m[1];
		}
		function addTagToZyjUrlCallback(tag) {
			return function (url) {
				return tag + "::" + encodeURIComponent(url);
			};
		}
		function mapZyjList(testList, testFunction) {
			var mapList = [],
			temp,
			mapTemp;
			for (var idx = 0; idx < testList.length; ++idx) {
				temp = testList[idx];
				mapTemp = testFunction(temp);
				mapList.push(mapTemp);
			}
			return mapList;
		}
		function extractNonTxIframe(dom) {
			var tagName = 'IFRAME',
			rawFunc = function (x) {
				return x.src
			},
			mapFunc = addTagToZyjUrlCallback('iframe');//return function   return tag::url(后面的参数) 如iframe::xxx.html
			return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
		}
		function extractNonTxEmbed(dom) {
			var tagName = 'EMBED',
			rawFunc = function (x) {
				return x.src
			},
			mapFunc = addTagToZyjUrlCallback('embed');
			return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
		}
		function extractNonTxTagData(dom, tag, rawFunc, grepFunc, mapFunc) {
			var tags = dom.getElementsByTagName(tag);
			var tagRaw = mapZyjList(tags, rawFunc);
			var tagData = grepZyjList(tagRaw, grepFunc);
			var tagResult = mapZyjList(tagData, mapFunc);
			return tagResult;
		}
		function extractNonTxFrame(dom) {
			var tagName = 'FRAME',
			rawFunc = function (x) {
				return x.src
			},
			mapFunc = addTagToZyjUrlCallback('frame');
			return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
		}
		function extractNonTxForm(dom) {
			var tagName = 'FORM',
			rawFunc = function (x) {
				return x.action
			},
			mapFunc = addTagToZyjUrlCallback('form');
			return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
		}
		function extractNonTxIMG(dom) {
			var tagName = 'IMG',
			rawFunc = function (x) {
				return x.src
			},
			mapFunc = addTagToZyjUrlCallback('img');
			return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
		}
		function distinctZyjArray(list) {
			var sortList = list.slice(0),
			derivedArray = [];
			sortList.sort();
			derivedArray.push(sortList[0]);
			for (var i = 1; i < sortList.length; i += 1) {
				if (sortList[i] != sortList[i - 1]) {
					derivedArray.push(sortList[i]);
				}
			}
			return derivedArray;
		}
		//_wnd.checkNonTxDomain = checkNonTxDomain;

		//如果是parent 做简单立即扫描
		/*
		try {
			setTimeout(function () {
				checkNonTxDomain(0.1, 100, 1);
			}, 0);
		} catch (ign) {}
		*/
		try {
			setTimeout(function () {
				checkNonTxDomain(0.1, 100, 0);
			}, 5000);
		} catch (ign) {}

	})(window, document, location);

	//pv init
	function sendPV(){
		var pro = location.protocol;
		var p = "";
		if(pro.indexOf("https") >=0 || pro.indexOf("HTTPS") >=0 ){
			p = "https";
		}
		else if(pro.indexOf("http") >= 0 || pro.indexOf("HTTP") >= 0 ){
			p = "http"
		}else{
			p = pro;
		}

		httpSend(server[2]+"?host="+ encodeURIComponent(location.host) + "&p=" +encodeURIComponent(p) +"&hp=0&tk=" + (+new Date));
	};
	
	function sendHijackPV(data){
		httpSend(server[2]+"?host="+ encodeURIComponent(location.host) + "&data=" + data + "&hp=1&tk=" + (+new Date));
		return true;
	};
	
	if(pvRandom < CONST_PV_RANDOM){
		sendPV();
	}
	
})();
