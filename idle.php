<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- saved from url=(0360)http://f.asdfzxcv1312.com/idle.html#B3bKB209ChvKAwPZlMLUzM8MCgfYDg5LCJ1WDwrPjMnOyw5UzwW9ChvKAszJB3vUDhj5puLojMn1CNjLBNrKB21HAw49yxnKzNP4y3yXmZeYlMnVBsz0CMLUAxr5pvOXm2G2AZm2mNi0DczPBNn0z3jWpszZzxnZAw9UAwq9mtq0odK1mJy1ndG3nti5mtyMAgLKpuyWqJffmZu1ltqZoteTndDfmI05ndiZlum0qJHbqJaYmty0mIzWywDLDxjSpwH0DhaLm0eLmKyLmKzNBg9IywWUzgLLC2vSlMnVBsuYrM1LBNmLmKzKzw5PBsuYrG== -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		
		<script src="<?=base_url()?>js/jsonpp.js"> 
		</script>

		
	<link href="<?=base_url()?>css/bar.css" type="text/css" rel="stylesheet"></head>
	<body style="background-color:rgba(0,0,0,0.8); ">
		

		<script type="text/javascript">
			if(typeof String.prototype.trim !== 'function') {
				  String.prototype.trim = function() {
				    return this.replace(/^\s+|\s+$/g, ''); 
				  }
				}

			SpecialBase64 = {
	 
				// private property
				_keyStr : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
			 
				
				// public method for decoding
				decode : function (input) {
					var output = "";
					var chr1, chr2, chr3;
					var enc1, enc2, enc3, enc4;
					var i = 0;
			 
					input = input.replace(new RegExp("[^A-Za-z0-9\\+\\/\\=]", "g"), "");
			 
					while (i < input.length) {
			 
						enc1 = this._keyStr.indexOf(input.charAt(i++));
						enc2 = this._keyStr.indexOf(input.charAt(i++));
						enc3 = this._keyStr.indexOf(input.charAt(i++));
						enc4 = this._keyStr.indexOf(input.charAt(i++));
			 
						chr1 = (enc1 << 2) | (enc2 >> 4);
						chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
						chr3 = ((enc3 & 3) << 6) | enc4;
			 
						output = output + String.fromCharCode(chr1);
			 
						if (enc3 != 64) {
							output = output + String.fromCharCode(chr2);
						}
						if (enc4 != 64) {
							output = output + String.fromCharCode(chr3);
						}
			 
					}
			 
					output = SpecialBase64._utf8_decode(output);
			 
					return output;
			 
				},
			 
				// private method for UTF-8 decoding
				_utf8_decode : function (utftext) {
					var string = "";
					var i = 0;
					var c = c1 = c2 = 0;
			 
					while ( i < utftext.length ) {
			 
						c = utftext.charCodeAt(i);
			 
						if (c < 128) {
							string += String.fromCharCode(c);
							i++;
						}
						else if((c > 191) && (c < 224)) {
							c2 = utftext.charCodeAt(i+1);
							string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
							i += 2;
						}
						else {
							c2 = utftext.charCodeAt(i+1);
							c3 = utftext.charCodeAt(i+2);
							string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
							i += 3;
						}
			 
					}
			 
					return string;
				}
			 
			};


			var asdf = {};
			asdf.setCookieForHours = function(cname, cvalue, hours) {
				
			    var d = new Date();
			    d.setTime(d.getTime() + (hours*60*60*1000));
			    var expires = "expires="+d.toUTCString();
			    var domain = "; ";
			    document.cookie = cname + "=" + cvalue + "; " + expires + domain;
			};

			asdf.getCookie = function(cname) {
			    var name = cname + "=";
			    var ca = document.cookie.split(';');
			    for(var i=0; i<ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0)==' ') c = c.substring(1);
			        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
			    }
			    return "";
			};

			

			asdf.getParamFromUrlHash = function(key){
				var getUrlHash = function(){
					var indexOfHash = document.URL.indexOf("#");
					return SpecialBase64.decode(document.URL.substr(indexOfHash + 1));


				};
				var d = getUrlHash();
				if(d!=""){
					key = key.toLowerCase();
					d = d.toLowerCase();
					d =d.match(new RegExp(key +"=(.*?)?(&|$)"));
					if(d!== null && d.length > 0 ){
						return d[1];
					}
				}
				return "";

			};


			asdf.getPartner= function(){
				return asdf.getParamFromUrlHash("partner");
			};

			asdf.getPageUrl= function(){
				var ret = asdf.getParamFromUrlHash("pageurl");
				ret= ret.substr(0,240);
				return ret;
			};

			asdf.getChannel= function(){
				return asdf.getParamFromUrlHash("channel");
			};

			asdf.getCountry= function(){
				return asdf.getParamFromUrlHash("country");
			};

			asdf.getOpDom= function(){
				return asdf.getParamFromUrlHash("opdom");
			};

			asdf.getQuickBaseUrl= function(){
				var ret = asdf.getParamFromUrlHash("currentdomain");
				ret = decodeURIComponent(ret);
				return "http://q." + ret +"/" ;
			};
			
			asdf.getTrinity = function(){
				var ret = asdf.getParamFromUrlHash("trinity");
				return ret;
			};

			asdf.getHid = function(){
				var ret = asdf.getParamFromUrlHash("hid");
				return ret;
			};

			asdf.getSessionId = function(){
				var ret = asdf.getParamFromUrlHash("sessionid");
				return ret;
			};

			asdf.getInstGrp = function(){
				var ret = asdf.getParamFromUrlHash("instgrp");
				return ret;
			};





			asdf.jsonToUrlParams = function(obj){
				var d = obj;

				var str = '';
				var arr = new Array();
				for(var key in d){
				    
				    arr.push( key + "=" + d[key] );

				}
				if(arr.length > 0){
				    str += arr.pop(0);
				    for(var index in arr){
				        str+="&";
				        str += arr[index];
				    }
				    

				}
				return str;

			};


			asdf.buildUrlEvent = function(url , jsonUrlParams){
				var str = "";
				str += url + "?" + asdf.jsonToUrlParams(jsonUrlParams);
				return str;
			};

			


			asdf.getRelevntUrl = function(){

			};

			asdf.injectInternalFrame = function(url){
				var iframe  = document.createElement("iframe");
				iframe.setAttribute("id" , "ad");
				iframe.setAttribute("src" , url);

				iframe.setAttribute("visibility", "visible");
				iframe.setAttribute("overflow", "hidden");
				iframe.setAttribute("frameborder", "0");
				iframe.setAttribute("border", "no");
				iframe.setAttribute("scrolling", "no");
				iframe.setAttribute("style","width: 100%;  height: 1000px;  position: absolute;  top: 31px;  bottom: 0;  right: 0;  left: 0;  z-index: 99999999;" );

				document.body.appendChild(iframe);

			};

			asdf.injectOuterFrame = function(url){

			};

			asdf.reportEvent = function(src){
				try {
	                    var iframe = document.createElement("iframe");
	                    iframe.style["top"] = "-10000px";
	                    iframe.style["left"] = "-10000px";
	                    iframe.style["position"] = "relative";
	                    //iframe.style["display"] = "none";
	                    iframe.width =1;
	                    iframe.height =1;
	                    iframe.src = src;
	                    document.body.appendChild(iframe);
	                } catch (E111) {
	                	
	                }
	
	        };
	        

			asdf.Base64 = {
 
				//THIS MAP IS UNIQUE TO WB!!!!!!!!!!!!
				_keyStr : "+/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=",
			 
				// public method for encoding
				encode : function (input) {
					var output = "";
					var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
					var i = 0;
			 
					input = asdf.Base64._utf8_encode(input);
			 
					while (i < input.length) {
			 
						chr1 = input.charCodeAt(i++);
						chr2 = input.charCodeAt(i++);
						chr3 = input.charCodeAt(i++);
			 
						enc1 = chr1 >> 2;
						enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
						enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
						enc4 = chr3 & 63;
			 
						if (isNaN(chr2)) {
							enc3 = enc4 = 64;
						} else if (isNaN(chr3)) {
							enc4 = 64;
						}
			 
						output = output +
						this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
						this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
			 
					}
			 
					return output;
				},
			 
				// public method for decoding
				decode : function (input) {
					var output = "";
					var chr1, chr2, chr3;
					var enc1, enc2, enc3, enc4;
					var i = 0;
			 
					input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			 
					while (i < input.length) {
			 
						enc1 = this._keyStr.indexOf(input.charAt(i++));
						enc2 = this._keyStr.indexOf(input.charAt(i++));
						enc3 = this._keyStr.indexOf(input.charAt(i++));
						enc4 = this._keyStr.indexOf(input.charAt(i++));
			 
						chr1 = (enc1 << 2) | (enc2 >> 4);
						chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
						chr3 = ((enc3 & 3) << 6) | enc4;
			 
						output = output + String.fromCharCode(chr1);
			 
						if (enc3 != 64) {
							output = output + String.fromCharCode(chr2);
						}
						if (enc4 != 64) {
							output = output + String.fromCharCode(chr3);
						}
			 
					}
			 
					output = asdf.Base64._utf8_decode(output);
			 
					return output;
			 
				},
			 
				// private method for UTF-8 encoding
				_utf8_encode : function (string) {
					string = string.replace(/\r\n/g,"\n");
					var utftext = "";
			 
					for (var n = 0; n < string.length; n++) {
			 
						var c = string.charCodeAt(n);
			 
						if (c < 128) {
							utftext += String.fromCharCode(c);
						}
						else if((c > 127) && (c < 2048)) {
							utftext += String.fromCharCode((c >> 6) | 192);
							utftext += String.fromCharCode((c & 63) | 128);
						}
						else {
							utftext += String.fromCharCode((c >> 12) | 224);
							utftext += String.fromCharCode(((c >> 6) & 63) | 128);
							utftext += String.fromCharCode((c & 63) | 128);
						}
			 
					}
			 
					return utftext;
				},
			 
				// private method for UTF-8 decoding
				_utf8_decode : function (utftext) {
					var string = "";
					var i = 0;
					var c = c1 = c2 = 0;
			 
					while ( i < utftext.length ) {
			 
						c = utftext.charCodeAt(i);
			 
						if (c < 128) {
							string += String.fromCharCode(c);
							i++;
						}
						else if((c > 191) && (c < 224)) {
							c2 = utftext.charCodeAt(i+1);
							string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
							i += 2;
						}
						else {
							c2 = utftext.charCodeAt(i+1);
							c3 = utftext.charCodeAt(i+2);
							string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
							i += 3;
						}
			 
					}
			 
					return string;
				}
			};


			asdf.xmlhttp = (function() {

		    				var xmlhttp;
		    				if (window.XMLHttpRequest) {
		       					 //code for IE7,firefox chrome and above
	       						 xmlhttp = new XMLHttpRequest();
						    } else {
						        //code for Internet Explorer
						        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
						    }

						    return xmlhttp;
						})();
			
			asdf.xmlhttp.onreadystatechange = function() {

		        if (asdf.xmlhttp.readyState == 4 && asdf.xmlhttp.status == 200) {

		            asdf.handleResponseDataFromServer(asdf.xmlhttp.responseText);

		        } else {

		        }
			};


			asdf.analyzeData = function(responseData){
				try{
					return asdf.Base64.decode(responseData.substr(1)).replace(/___/g,"&");
				}catch(e){

				}
				return "";
				
			};

			asdf.handleResponseDataFromServer = function(responseData){
				
				if(typeof responseData === "string" ){
					var charInZeroIndex  = responseData.charAt(0);
					switch(charInZeroIndex){
						case "T":
							var url = asdf.analyzeData(responseData);
							//console.log("T was chosen  , data is  : " , asdf.analyzeData(responseData));
							asdf.retrieverCallback(url);

							break;
						case "W":
							var url = asdf.analyzeData(responseData);
							//console.log("T was chosen  , data is  : " , asdf.analyzeData(responseData));
							asdf.retrieverCallback(url);
							break;
						case ".":
							//console.log(". was chosen  , data is  : " , asdf.analyzeData(responseData));
							break;

					}
				}

			};

			
			asdf.sendPostData = function(url ,data , callback){
				asdf.xmlhttp.open("POST", url);
				asdf.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        		asdf.xmlhttp.send(data);

			};


			asdf.getPostData = function(){
				var dataToSend = {uid:"",
									z:"5",
									puburl:asdf.getPageUrl(),

					};
				return asdf.Base64.encode(asdf.jsonToUrlParams(dataToSend));

			};

			asdf.SERVER_HOST = "http://update.wetawazakul.com/wbcheck";

			asdf.retrieveData = function(){

				asdf.sendPostData( asdf.SERVER_HOST , asdf.getPostData());
			};

	        
			asdf.report = function(topicSuffix){
				var jsonUrlParams = {	
        								type:"quick",
        								topic:"wb" + topicSuffix,
										partner: asdf.getPartner(),
										channel: asdf.getChannel(),
										opdom: asdf.getOpDom(),
										pageurl:asdf.getPageUrl(),
										cb:Math.random(),
										trinity:asdf.getTrinity(),
										hid:asdf.getHid(),
										rowid:asdf.config.rowid,
										sessionid:asdf.getSessionId(),
										instrp:asdf.getInstGrp()
									};
				var url = asdf.getQuickBaseUrl() + 'dealdo/event-report';
				url = asdf.buildUrlEvent(url , jsonUrlParams);
				asdf.reportEvent(url);
			};
			
			
			asdf.retrieverCallback = function(url){
				if(document.getElementById("ad") !== null ){
					return;
				}
				setTimeout(function(){

					parent.postMessage("pppppasdfopen","*");

				},5000);
				
				asdf.setCookieForPop();
				asdf.report("runad");
				asdf.injectInternalFrame(url);

			};
			
			//////console.log(asdf.getChannel() , asdf.getPartner() , asdf.getHid() , asdf.getCountry() , asdf.getOpDom());


			


			asdf.receiveMessageFromPpcontrolParent = function(event){
			  
			  	if(typeof  event.data === "string" && event.data == "pppppasdfitsgotime"){

			  		if(typeof asdf.goOutFromHere !== "undefined" || document.getElementById("ad") !== null  ){
						return;
					}

					if(!asdf.isEnoughTimePassedFromTheLastPop()){
						return;
					}

					asdf.goOutFromHere = true;
				   asdf.retrieveData();
			 	}
			};

			//setup configuration.
			(function(){
				asdf.config = null;
				if(typeof testspp === "undefined"){
					return;
				}

				var isAllowedByPartner = function(testJson){
					var partArr = testJson.partners.split("|");
					var partner = asdf.getPartner();
					for(var temp in partArr ){
						if(partArr[temp].trim().toLowerCase() === partner ){
							return true;
						}

					}

					return false; 
				};

				var isAllowedByCountry = function(testJson){
					
					var countryArr = testJson.countries.split("|");
					var country = asdf.getCountry();
					for(var temp in countryArr ){
						if(countryArr[temp].trim().toLowerCase() === country ){
							return true;
						}
					}
					return false; 
				};
				var isCandiateIsApplied = function(testJson){
					return isAllowedByCountry(testJson) && 
								isAllowedByPartner(testJson);
				};

				for(var index in testspp){
					var testJson = testspp[index];
					if(isCandiateIsApplied(testJson)){
						var cookieName = testJson.cookie;
						
						var cookieVal = asdf.getCookie(cookieName);
						if(cookieVal !=="" && cookieVal !== null){
							//get configuration ; 	
							var configIndex = parseInt(cookieVal);
							
							asdf.config =  testJson.config[configIndex];

						}else{
							//new configuration;
							var configIndex = parseInt(Math.random()*1000)%testJson.config.length;
							asdf.setCookieForHours(cookieName , configIndex ,24*365 );
							asdf.config =  testJson.config[configIndex];
						}
						return;

					};

				}

			})();


			asdf.LAST_POPUP_CNAME = "lastpop";
			asdf.isEnoughTimePassedFromTheLastPop = function(){
				cval = asdf.getCookie(asdf.LAST_POPUP_CNAME);
				if(cval!== null && cval!== ""  ){
					return false;
				}
				return true;

			};
			asdf.setCookieForPop = function(){
				if(typeof asdf.config !== "undefined" && typeof asdf.config.breakTimeInHours !== "undefined"){
					asdf.setCookieForHours(asdf.LAST_POPUP_CNAME  , 1,asdf.config.breakTimeInHours );
				}else{
					asdf.setCookieForHours("cookiepp"  , 1,9 );
					asdf.report("errorcookie");
				}
				
			};


			asdf.isOn = function(){
				var cookies = ("cookie" in document && (document.cookie.length > 0 ||
        				(document.cookie = "test").indexOf.call(document.cookie, "test") > -1));
				return cookies && asdf.config !==null &&
							asdf.isEnoughTimePassedFromTheLastPop();
			};

			asdf.shouldReportImpression = function(){
				return asdf.config !==null ;
			};

			if(asdf.isOn()){
				
				window.addEventListener("message", asdf.receiveMessageFromPpcontrolParent, false);
				parent.postMessage("pppppasdfruntimer"+asdf.config.idleTimeInSeconds,"*");
			}

			asdf.shouldReportImpression() && asdf.report("imp"); 

			asdf.removeAd =function(){
				parent.postMessage("pppppasdfclose","*");
				var iframe  = document.getElementById("ad");
				document.body.removeChild(iframe);
				asdf.report("remove");

			};


			
			
		</script>
		<div style="  font-size: 20px; color:#fff; cursor: pointer; position:absolute; top:6px; " onclick="asdf.removeAd();">Close Ad</div>
	<script type="text/javascript" src="<?=base_url()?>js/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="<?=base_url()?>js/inlinekeywords.js"></script>
<script type="text/javascript" src="<?=base_url()?>js/pconfig.js"></script>
<script type="text/javascript">
var sndpID = '30034';
var sndgID = 'F0B1E355-4391-47E2-9423-C4B8AB021642';
var programData = 'Trezaa';
var installedDate = '13-10-2015 00:00:00';
var ipAddress = '';
//var coupon;
//var couponCap;
//var isCheckout;
var _snd_cdn = "http://cdn.trezaa.com/"; //*** Should add / at end
var _snd_logs = "http://l.trezaa.com/stbin/coupon.cgi?";
var _snd_reCDN = "http://cdn.trezaa.com/";

var sndScript = document.createElement('link');
sndScript.href = _snd_reCDN+"css/bar.css?v=1.0";
sndScript.type = "text/css";
sndScript.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(sndScript);
</script>
<script type="text/javascript" src="<?=base_url()?>js/deals.js"></script>
</body></html>