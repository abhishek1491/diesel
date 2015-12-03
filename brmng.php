<!DOCTYPE html>
<!-- saved from url=(0044)http://static.cmptch.com/v/lib/brmng.html?88 -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
    <title></title>
    <script>
        (function(a,c,b){if(typeof module!=="undefined"&&module.exports){module.exports=b()}else{if(typeof define==="function"&&define.amd){define(b)}else{c[a]=b()}}})("Fingerprint2",this,function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(this==null){throw new TypeError("'this' is null or undefined")}var O=Object(this);var len=O.length>>>0;if(len===0){return -1}var n=+fromIndex||0;if(Math.abs(n)===Infinity){n=0}if(n>=len){return -1}k=Math.max(n>=0?n:len-Math.abs(n),0);while(k<len){if(k in O&&O[k]===searchElement){return k}k++}return -1}}var Fingerprint2=function(options){var defaultOptions={swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",extendedJsFonts:true};this.options=this.extend(options,defaultOptions);this.nativeForEach=Array.prototype.forEach;this.nativeMap=Array.prototype.map};Fingerprint2.prototype={extend:function(source,target){if(source==null){return target}for(var k in source){if(source[k]!=null&&target[k]!==source[k]){target[k]=source[k]}}return target},log:function(msg){if(window.console){console.log(msg)}},get:function(done){var keys=[];keys=this.languageKey(keys);keys=this.screenResolutionKey(keys);keys=this.timezoneOffsetKey(keys);keys=this.sessionStorageKey(keys);keys=this.localStorageKey(keys);keys=this.indexedDbKey(keys);keys=this.addBehaviorKey(keys);keys=this.openDatabaseKey(keys);keys=this.cpuClassKey(keys);keys=this.platformKey(keys);keys=this.doNotTrackKey(keys);keys=this.pluginsKey(keys);keys=this.canvasKey(keys);keys=this.webglKey(keys);keys=this.hasLiedLanguagesKey(keys);keys=this.hasLiedResolutionKey(keys);keys=this.hasLiedOsKey(keys);keys=this.hasLiedBrowserKey(keys);keys=this.touchSupportKey(keys);keys=this.fontsKey(keys);var that=this;var murmur=that.x64hash128(keys.join("~~~"),31);return murmur},userAgentKey:function(keys){if(!this.options.excludeUserAgent){keys.push(this.getUserAgent())}return keys},getUserAgent:function(){return navigator.userAgent},languageKey:function(keys){if(!this.options.excludeLanguage){keys.push(navigator.language)}return keys},colorDepthKey:function(keys){if(!this.options.excludeColorDepth){keys.push(screen.colorDepth)}return keys},screenResolutionKey:function(keys){if(!this.options.excludeScreenResolution){return this.getScreenResolution(keys)}return keys},getScreenResolution:function(keys){var resolution;var available;if(this.options.detectScreenOrientation){resolution=(screen.height>screen.width)?[screen.height,screen.width]:[screen.width,screen.height]}else{resolution=[screen.width,screen.height]}if(typeof resolution!=="undefined"){keys.push(resolution)}if(screen.availWidth&&screen.availHeight){if(this.options.detectScreenOrientation){available=(screen.availHeight>screen.availWidth)?[screen.availHeight,screen.availWidth]:[screen.availWidth,screen.availHeight]}else{available=[screen.availHeight,screen.availWidth]}}if(typeof available!=="undefined"){keys.push(available)}return keys},timezoneOffsetKey:function(keys){if(!this.options.excludeTimezoneOffset){keys.push(new Date().getTimezoneOffset())}return keys},sessionStorageKey:function(keys){if(!this.options.excludeSessionStorage&&this.hasSessionStorage()){keys.push("sessionStorageKey")}return keys},localStorageKey:function(keys){if(!this.options.excludeSessionStorage&&this.hasLocalStorage()){keys.push("localStorageKey")}return keys},indexedDbKey:function(keys){if(!this.options.excludeIndexedDB&&this.hasIndexedDB()){keys.push("indexedDbKey")}return keys},addBehaviorKey:function(keys){if(document.body&&!this.options.excludeAddBehavior&&document.body.addBehavior){keys.push("addBehaviorKey")}return keys},openDatabaseKey:function(keys){if(!this.options.excludeOpenDatabase&&window.openDatabase){keys.push("openDatabase")}return keys},cpuClassKey:function(keys){if(!this.options.excludeCpuClass){keys.push(this.getNavigatorCpuClass())}return keys},platformKey:function(keys){if(!this.options.excludePlatform){keys.push(this.getNavigatorPlatform())}return keys},doNotTrackKey:function(keys){if(!this.options.excludeDoNotTrack){keys.push(this.getDoNotTrack())}return keys},canvasKey:function(keys){if(!this.options.excludeCanvas&&this.isCanvasSupported()){keys.push(this.getCanvasFp())}return keys},webglKey:function(keys){if(this.options.excludeWebGL){if(typeof NODEBUG==="undefined"){this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option")}return keys}if(!this.isWebGlSupported()){if(typeof NODEBUG==="undefined"){this.log("Skipping WebGL fingerprinting because it is not supported in this browser")}return keys}keys.push(this.getWebglFp());return keys},hasLiedLanguagesKey:function(keys){if(!this.options.excludeHasLiedLanguages){keys.push(this.getHasLiedLanguages())}return keys},hasLiedResolutionKey:function(keys){if(!this.options.excludeHasLiedResolution){keys.push(this.getHasLiedResolution())}return keys},hasLiedOsKey:function(keys){if(!this.options.excludeHasLiedOs){keys.push(this.getHasLiedOs())}return keys},hasLiedBrowserKey:function(keys){if(!this.options.excludeHasLiedBrowser){keys.push(this.getHasLiedBrowser())}return keys},fontsKey:function(keys){if(!this.options.excludeFonts){keys.push(this.jsFontsKey())}return keys},jsFontsKey:function(){var that=this;var testString="mmmmmmmmmmlli";var testSize="72px";var h=document.getElementsByTagName("body")[0];var s=document.createElement("span");s.style.fontSize=testSize;s.style.visibility="hidden";s.innerHTML=testString;var baseFonts="monospace, sans-serif, serif";var defaultWidth=0;var defaultHeight=0;s.style.fontFamily=baseFonts;h.appendChild(s);defaultWidth=s.offsetWidth;defaultHeight=s.offsetHeight;h.removeChild(s);var detect=function(font){var detected=false;s.style.fontFamily=font+","+baseFonts;h.appendChild(s);detected=(s.offsetWidth!==defaultWidth||s.offsetHeight!==defaultHeight);h.removeChild(s);return detected};var fontList=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Garamond","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];var extendedFontList=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];if(that.options.extendedJsFonts){fontList=fontList.concat(extendedFontList)}var available=[];for(var i=0,l=fontList.length;i<l;i++){if(detect(fontList[i])){available.push(fontList[i])}}return available.join(";")},pluginsKey:function(keys){if(!this.options.excludePlugins){if(this.isIE()){keys.push(this.getIEPluginsString())}else{keys.push(this.getRegularPluginsString())}}return keys},getRegularPluginsString:function(){var plugins=[];for(var i=0,l=navigator.plugins.length;i<l;i++){plugins.push(navigator.plugins[i])}plugins=plugins.sort(function(a,b){if(a.name>b.name){return 1}if(a.name<b.name){return -1}return 0});return this.map(plugins,function(p){var mimeTypes=this.map(p,function(mt){return[mt.type,mt.suffixes].join("~")}).join(",");return[p.name,p.description,mimeTypes].join("::")},this).join(";")},getIEPluginsString:function(){if(window.ActiveXObject){var names=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];return this.map(names,function(name){try{new ActiveXObject(name);return name}catch(e){return null}}).join(";")}else{return""}},touchSupportKey:function(keys){if(!this.options.excludeTouchSupport){keys.push(this.getTouchSupport())}return keys},hasLocalStorage:function(){try{return !!window.localStorage}catch(e){return true}},hasSessionStorage:function(){try{return !!window.sessionStorage}catch(e){return true}},hasIndexedDB:function(){return !!window.indexedDB},getNavigatorCpuClass:function(){if(navigator.cpuClass){return navigator.cpuClass}else{if(navigator.hardwareConcurrency){return navigator.hardwareConcurrency}else{return"NavigatorCpuClass: unknown"}}},getNavigatorPlatform:function(){if(navigator.platform){return navigator.platform}else{return"NavigatorPlatform: unknown"}},getDoNotTrack:function(){if(navigator.doNotTrack){return"doNotTrack: "+navigator.doNotTrack}else{return"doNotTrack: unknown"}},getTouchSupport:function(){var maxTouchPoints=0;var touchEvent=false;if(typeof navigator.maxTouchPoints!=="undefined"){maxTouchPoints=navigator.maxTouchPoints}else{if(typeof navigator.msMaxTouchPoints!=="undefined"){maxTouchPoints=navigator.msMaxTouchPoints}}try{document.createEvent("TouchEvent");touchEvent=true}catch(_){}var touchStart="ontouchstart" in window;return[maxTouchPoints,touchEvent,touchStart]},getCanvasFp:function(){var result=[];var canvas=document.createElement("canvas");canvas.width=2000;canvas.height=200;canvas.style.display="inline";var ctx=canvas.getContext("2d");ctx.rect(0,0,10,10);ctx.rect(2,2,6,6);result.push("canvas winding:"+((ctx.isPointInPath(5,5,"evenodd")===false)?"yes":"no"));ctx.textBaseline="alphabetic";ctx.fillStyle="#f60";ctx.fillRect(125,1,62,20);ctx.fillStyle="#069";if(this.options.dontUseFakeFontInCanvas){ctx.font="11pt Arial"}else{ctx.font="11pt no-real-font-123"}ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15);ctx.fillStyle="rgba(102, 204, 0, 0.7)";ctx.font="18pt Arial";ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45);ctx.globalCompositeOperation="multiply";ctx.fillStyle="rgb(255,0,255)";ctx.beginPath();ctx.arc(50,50,50,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgb(0,255,255)";ctx.beginPath();ctx.arc(100,50,50,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgb(255,255,0)";ctx.beginPath();ctx.arc(75,100,50,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgb(255,0,255)";ctx.arc(75,75,75,0,Math.PI*2,true);ctx.arc(75,75,25,0,Math.PI*2,true);ctx.fill("evenodd");result.push("canvas fp:"+canvas.toDataURL());return result.join("~")},getWebglFp:function(){var gl;var fa2s=function(fa){gl.clearColor(0,0,0,1);gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);return"["+fa[0]+", "+fa[1]+"]"};var maxAnisotropy=function(gl){var anisotropy,ext=gl.getExtension("EXT_texture_filter_anisotropic")||gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||gl.getExtension("MOZ_EXT_texture_filter_anisotropic");return ext?(anisotropy=gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===anisotropy&&(anisotropy=2),anisotropy):null};gl=this.getWebglCanvas();if(!gl){return null}var result=[];var vShaderTemplate="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";var fShaderTemplate="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";var vertexPosBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vertexPosBuffer);var vertices=new Float32Array([-0.2,-0.9,0,0.4,-0.26,0,0,0.732134444,0]);gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);vertexPosBuffer.itemSize=3;vertexPosBuffer.numItems=3;var program=gl.createProgram(),vshader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vshader,vShaderTemplate);gl.compileShader(vshader);var fshader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fshader,fShaderTemplate);gl.compileShader(fshader);gl.attachShader(program,vshader);gl.attachShader(program,fshader);gl.linkProgram(program);gl.useProgram(program);program.vertexPosAttrib=gl.getAttribLocation(program,"attrVertex");program.offsetUniform=gl.getUniformLocation(program,"uniformOffset");gl.enableVertexAttribArray(program.vertexPosArray);gl.vertexAttribPointer(program.vertexPosAttrib,vertexPosBuffer.itemSize,gl.FLOAT,!1,0,0);gl.uniform2f(program.offsetUniform,1,1);gl.drawArrays(gl.TRIANGLE_STRIP,0,vertexPosBuffer.numItems);if(gl.canvas!=null){result.push(gl.canvas.toDataURL())}result.push("extensions:"+gl.getSupportedExtensions().join(";"));result.push("webgl aliased line width range:"+fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));result.push("webgl aliased point size range:"+fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));result.push("webgl alpha bits:"+gl.getParameter(gl.ALPHA_BITS));result.push("webgl antialiasing:"+(gl.getContextAttributes().antialias?"yes":"no"));result.push("webgl blue bits:"+gl.getParameter(gl.BLUE_BITS));result.push("webgl depth bits:"+gl.getParameter(gl.DEPTH_BITS));result.push("webgl green bits:"+gl.getParameter(gl.GREEN_BITS));result.push("webgl max anisotropy:"+maxAnisotropy(gl));result.push("webgl max combined texture image units:"+gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));result.push("webgl max cube map texture size:"+gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));result.push("webgl max fragment uniform vectors:"+gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));result.push("webgl max render buffer size:"+gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));result.push("webgl max texture image units:"+gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));result.push("webgl max texture size:"+gl.getParameter(gl.MAX_TEXTURE_SIZE));result.push("webgl max varying vectors:"+gl.getParameter(gl.MAX_VARYING_VECTORS));result.push("webgl max vertex attribs:"+gl.getParameter(gl.MAX_VERTEX_ATTRIBS));result.push("webgl max vertex texture image units:"+gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));result.push("webgl max vertex uniform vectors:"+gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));result.push("webgl max viewport dims:"+fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));result.push("webgl red bits:"+gl.getParameter(gl.RED_BITS));result.push("webgl renderer:"+gl.getParameter(gl.RENDERER));result.push("webgl shading language version:"+gl.getParameter(gl.SHADING_LANGUAGE_VERSION));result.push("webgl stencil bits:"+gl.getParameter(gl.STENCIL_BITS));result.push("webgl vendor:"+gl.getParameter(gl.VENDOR));result.push("webgl version:"+gl.getParameter(gl.VERSION));if(!gl.getShaderPrecisionFormat){if(typeof NODEBUG==="undefined"){this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat")}return result.join("~")}result.push("webgl vertex shader high float precision:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_FLOAT).precision);result.push("webgl vertex shader high float precision rangeMin:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_FLOAT).rangeMin);result.push("webgl vertex shader high float precision rangeMax:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_FLOAT).rangeMax);result.push("webgl vertex shader medium float precision:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_FLOAT).precision);result.push("webgl vertex shader medium float precision rangeMin:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_FLOAT).rangeMin);result.push("webgl vertex shader medium float precision rangeMax:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_FLOAT).rangeMax);result.push("webgl vertex shader low float precision:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_FLOAT).precision);result.push("webgl vertex shader low float precision rangeMin:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_FLOAT).rangeMin);result.push("webgl vertex shader low float precision rangeMax:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_FLOAT).rangeMax);result.push("webgl fragment shader high float precision:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).precision);result.push("webgl fragment shader high float precision rangeMin:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).rangeMin);result.push("webgl fragment shader high float precision rangeMax:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).rangeMax);result.push("webgl fragment shader medium float precision:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT).precision);result.push("webgl fragment shader medium float precision rangeMin:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT).rangeMin);result.push("webgl fragment shader medium float precision rangeMax:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT).rangeMax);result.push("webgl fragment shader low float precision:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_FLOAT).precision);result.push("webgl fragment shader low float precision rangeMin:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_FLOAT).rangeMin);result.push("webgl fragment shader low float precision rangeMax:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_FLOAT).rangeMax);result.push("webgl vertex shader high int precision:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_INT).precision);result.push("webgl vertex shader high int precision rangeMin:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_INT).rangeMin);result.push("webgl vertex shader high int precision rangeMax:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_INT).rangeMax);result.push("webgl vertex shader medium int precision:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_INT).precision);result.push("webgl vertex shader medium int precision rangeMin:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_INT).rangeMin);result.push("webgl vertex shader medium int precision rangeMax:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_INT).rangeMax);result.push("webgl vertex shader low int precision:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_INT).precision);result.push("webgl vertex shader low int precision rangeMin:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_INT).rangeMin);result.push("webgl vertex shader low int precision rangeMax:"+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_INT).rangeMax);result.push("webgl fragment shader high int precision:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_INT).precision);result.push("webgl fragment shader high int precision rangeMin:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_INT).rangeMin);result.push("webgl fragment shader high int precision rangeMax:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_INT).rangeMax);result.push("webgl fragment shader medium int precision:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_INT).precision);result.push("webgl fragment shader medium int precision rangeMin:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_INT).rangeMin);result.push("webgl fragment shader medium int precision rangeMax:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_INT).rangeMax);result.push("webgl fragment shader low int precision:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_INT).precision);result.push("webgl fragment shader low int precision rangeMin:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_INT).rangeMin);result.push("webgl fragment shader low int precision rangeMax:"+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_INT).rangeMax);return result.join("~")},getHasLiedLanguages:function(){if(typeof navigator.languages!=="undefined"){try{var firstLanguages=navigator.languages[0].substr(0,2);if(firstLanguages!==navigator.language.substr(0,2)){return true}}catch(err){return true}}return false},getHasLiedResolution:function(){if(screen.width<screen.availWidth){return true}if(screen.height<screen.availHeight){return true}return false},getHasLiedOs:function(){var userAgent=navigator.userAgent.toLowerCase();var oscpu=navigator.oscpu;var platform=navigator.platform.toLowerCase();var os;if(userAgent.indexOf("windows phone")>=0){os="Windows Phone"}else{if(userAgent.indexOf("win")>=0){os="Windows"}else{if(userAgent.indexOf("android")>=0){os="Android"}else{if(userAgent.indexOf("linux")>=0){os="Linux"}else{if(userAgent.indexOf("iphone")>=0||userAgent.indexOf("ipad")>=0){os="iOS"}else{if(userAgent.indexOf("mac")>=0){os="Mac"}else{os="Other"}}}}}}var mobileDevice;if(("ontouchstart" in window)||(navigator.maxTouchPoints>0)||(navigator.msMaxTouchPoints>0)){mobileDevice=true}else{mobileDevice=false}if(mobileDevice&&os!=="Windows Phone"&&os!=="Android"&&os!=="iOS"&&os!=="Other"){return true}if(typeof oscpu!=="undefined"){oscpu=oscpu.toLowerCase();if(oscpu.indexOf("win")>=0&&os!=="Windows"&&os!=="Windows Phone"){return true}else{if(oscpu.indexOf("linux")>=0&&os!=="Linux"&&os!=="Android"){return true}else{if(oscpu.indexOf("mac")>=0&&os!=="Mac"&&os!=="iOS"){return true}else{if(oscpu.indexOf("win")===0&&oscpu.indexOf("linux")===0&&oscpu.indexOf("mac")>=0&&os!=="other"){return true}}}}}if(platform.indexOf("win")>=0&&os!=="Windows"&&os!=="Windows Phone"){return true}else{if((platform.indexOf("linux")>=0||platform.indexOf("android")>=0||platform.indexOf("pike")>=0)&&os!=="Linux"&&os!=="Android"){return true}else{if((platform.indexOf("mac")>=0||platform.indexOf("ipad")>=0||platform.indexOf("ipod")>=0||platform.indexOf("iphone")>=0)&&os!=="Mac"&&os!=="iOS"){return true}else{if(platform.indexOf("win")===0&&platform.indexOf("linux")===0&&platform.indexOf("mac")>=0&&os!=="other"){return true}}}}if(typeof navigator.plugins==="undefined"&&os!=="Windows"&&os!=="Windows Phone"){return true}return false},getHasLiedBrowser:function(){var userAgent=navigator.userAgent.toLowerCase();var productSub=navigator.productSub;var browser;if(userAgent.indexOf("firefox")>=0){browser="Firefox"}else{if(userAgent.indexOf("opera")>=0||userAgent.indexOf("opr")>=0){browser="Opera"}else{if(userAgent.indexOf("chrome")>=0){browser="Chrome"}else{if(userAgent.indexOf("safari")>=0){browser="Safari"}else{if(userAgent.indexOf("trident")>=0){browser="Internet Explorer"}else{browser="Other"}}}}}if((browser==="Chrome"||browser==="Safari"||browser==="Opera")&&productSub!=="20030107"){return true}var tempRes=eval.toString().length;if(tempRes===37&&browser!=="Safari"&&browser!=="Firefox"&&browser!=="Other"){return true}else{if(tempRes===39&&browser!=="Internet Explorer"&&browser!=="Other"){return true}else{if(tempRes===33&&browser!=="Chrome"&&browser!=="Opera"&&browser!=="Other"){return true}}}var errFirefox;try{throw"a"}catch(err){try{err.toSource();errFirefox=true}catch(errOfErr){errFirefox=false}}if(errFirefox&&browser!=="Firefox"&&browser!=="Other"){return true}return false},isCanvasSupportedOld:function(){var elem=document.createElement("canvas");return !!(elem.getContext&&elem.getContext("2d"))},isCanvasSupported:function(){return !!document.createElement("canvas").getContext},isWebGlSupported:function(){if(!this.isCanvasSupported()){return false}var canvas=document.createElement("canvas"),glContext;try{glContext=canvas.getContext&&(canvas.getContext("webgl")||canvas.getContext("experimental-webgl"))}catch(e){glContext=false}return !!window.WebGLRenderingContext&&!!glContext},isIE:function(){if(navigator.appName==="Microsoft Internet Explorer"){return true}else{if(navigator.appName==="Netscape"&&/Trident/.test(navigator.userAgent)){return true}}return false},hasSwfObjectLoaded:function(){return typeof window.swfobject!=="undefined"},hasMinFlashInstalled:function(){return swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var node=document.createElement("div");node.setAttribute("id",this.options.swfContainerId);document.body.appendChild(node)},loadSwfAndDetectFonts:function(done){var hiddenCallback="___fp_swf_loaded";window[hiddenCallback]=function(fonts){done(fonts)};var id=this.options.swfContainerId;this.addFlashDivNode();var flashvars={onReady:hiddenCallback};var flashparams={allowScriptAccess:"always",menu:"false"};swfobject.embedSWF(this.options.swfPath,id,"1","1","9.0.0",false,flashvars,flashparams,{})},getWebglCanvas:function(){var canvas=document.createElement("canvas");var gl=null;try{gl=canvas.getContext("webgl")||canvas.getContext("experimental-webgl")}catch(e){}if(!gl){gl=null}return gl},each:function(obj,iterator,context){if(obj===null){return}if(this.nativeForEach&&obj.forEach===this.nativeForEach){obj.forEach(iterator,context)}else{if(obj.length===+obj.length){for(var i=0,l=obj.length;i<l;i++){if(iterator.call(context,obj[i],i,obj)==={}){return}}}else{for(var key in obj){if(obj.hasOwnProperty(key)){if(iterator.call(context,obj[key],key,obj)==={}){return}}}}}},map:function(obj,iterator,context){var results=[];if(obj==null){return results}if(this.nativeMap&&obj.map===this.nativeMap){return obj.map(iterator,context)}this.each(obj,function(value,index,list){results[results.length]=iterator.call(context,value,index,list)});return results},x64Add:function(m,n){m=[m[0]>>>16,m[0]&65535,m[1]>>>16,m[1]&65535];n=[n[0]>>>16,n[0]&65535,n[1]>>>16,n[1]&65535];var o=[0,0,0,0];o[3]+=m[3]+n[3];o[2]+=o[3]>>>16;o[3]&=65535;o[2]+=m[2]+n[2];o[1]+=o[2]>>>16;o[2]&=65535;o[1]+=m[1]+n[1];o[0]+=o[1]>>>16;o[1]&=65535;o[0]+=m[0]+n[0];o[0]&=65535;return[(o[0]<<16)|o[1],(o[2]<<16)|o[3]]},x64Multiply:function(m,n){m=[m[0]>>>16,m[0]&65535,m[1]>>>16,m[1]&65535];n=[n[0]>>>16,n[0]&65535,n[1]>>>16,n[1]&65535];var o=[0,0,0,0];o[3]+=m[3]*n[3];o[2]+=o[3]>>>16;o[3]&=65535;o[2]+=m[2]*n[3];o[1]+=o[2]>>>16;o[2]&=65535;o[2]+=m[3]*n[2];o[1]+=o[2]>>>16;o[2]&=65535;o[1]+=m[1]*n[3];o[0]+=o[1]>>>16;o[1]&=65535;o[1]+=m[2]*n[2];o[0]+=o[1]>>>16;o[1]&=65535;o[1]+=m[3]*n[1];o[0]+=o[1]>>>16;o[1]&=65535;o[0]+=(m[0]*n[3])+(m[1]*n[2])+(m[2]*n[1])+(m[3]*n[0]);o[0]&=65535;return[(o[0]<<16)|o[1],(o[2]<<16)|o[3]]},x64Rotl:function(m,n){n%=64;if(n===32){return[m[1],m[0]]}else{if(n<32){return[(m[0]<<n)|(m[1]>>>(32-n)),(m[1]<<n)|(m[0]>>>(32-n))]}else{n-=32;return[(m[1]<<n)|(m[0]>>>(32-n)),(m[0]<<n)|(m[1]>>>(32-n))]}}},x64LeftShift:function(m,n){n%=64;if(n===0){return m}else{if(n<32){return[(m[0]<<n)|(m[1]>>>(32-n)),m[1]<<n]}else{return[m[1]<<(n-32),0]}}},x64Xor:function(m,n){return[m[0]^n[0],m[1]^n[1]]},x64Fmix:function(h){h=this.x64Xor(h,[0,h[0]>>>1]);h=this.x64Multiply(h,[4283543511,3981806797]);h=this.x64Xor(h,[0,h[0]>>>1]);h=this.x64Multiply(h,[3301882366,444984403]);h=this.x64Xor(h,[0,h[0]>>>1]);return h},x64hash128:function(key,seed){key=key||"";seed=seed||0;var remainder=key.length%16;var bytes=key.length-remainder;var h1=[0,seed];var h2=[0,seed];var k1=[0,0];var k2=[0,0];var c1=[2277735313,289559509];var c2=[1291169091,658871167];for(var i=0;i<bytes;i=i+16){k1=[((key.charCodeAt(i+4)&255))|((key.charCodeAt(i+5)&255)<<8)|((key.charCodeAt(i+6)&255)<<16)|((key.charCodeAt(i+7)&255)<<24),((key.charCodeAt(i)&255))|((key.charCodeAt(i+1)&255)<<8)|((key.charCodeAt(i+2)&255)<<16)|((key.charCodeAt(i+3)&255)<<24)];k2=[((key.charCodeAt(i+12)&255))|((key.charCodeAt(i+13)&255)<<8)|((key.charCodeAt(i+14)&255)<<16)|((key.charCodeAt(i+15)&255)<<24),((key.charCodeAt(i+8)&255))|((key.charCodeAt(i+9)&255)<<8)|((key.charCodeAt(i+10)&255)<<16)|((key.charCodeAt(i+11)&255)<<24)];k1=this.x64Multiply(k1,c1);k1=this.x64Rotl(k1,31);k1=this.x64Multiply(k1,c2);h1=this.x64Xor(h1,k1);h1=this.x64Rotl(h1,27);h1=this.x64Add(h1,h2);h1=this.x64Add(this.x64Multiply(h1,[0,5]),[0,1390208809]);k2=this.x64Multiply(k2,c2);k2=this.x64Rotl(k2,33);k2=this.x64Multiply(k2,c1);h2=this.x64Xor(h2,k2);h2=this.x64Rotl(h2,31);h2=this.x64Add(h2,h1);h2=this.x64Add(this.x64Multiply(h2,[0,5]),[0,944331445])}k1=[0,0];k2=[0,0];switch(remainder){case 15:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+14)],48));case 14:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+13)],40));case 13:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+12)],32));case 12:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+11)],24));case 11:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+10)],16));case 10:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+9)],8));case 9:k2=this.x64Xor(k2,[0,key.charCodeAt(i+8)]);k2=this.x64Multiply(k2,c2);k2=this.x64Rotl(k2,33);k2=this.x64Multiply(k2,c1);h2=this.x64Xor(h2,k2);case 8:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+7)],56));case 7:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+6)],48));case 6:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+5)],40));case 5:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+4)],32));case 4:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+3)],24));case 3:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+2)],16));case 2:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+1)],8));case 1:k1=this.x64Xor(k1,[0,key.charCodeAt(i)]);k1=this.x64Multiply(k1,c1);k1=this.x64Rotl(k1,31);k1=this.x64Multiply(k1,c2);h1=this.x64Xor(h1,k1)}h1=this.x64Xor(h1,[0,key.length]);h2=this.x64Xor(h2,[0,key.length]);h1=this.x64Add(h1,h2);h2=this.x64Add(h2,h1);h1=this.x64Fmix(h1);h2=this.x64Fmix(h2);h1=this.x64Add(h1,h2);h2=this.x64Add(h2,h1);return("00000000"+(h1[0]>>>0).toString(16)).slice(-8)+("00000000"+(h1[1]>>>0).toString(16)).slice(-8)+("00000000"+(h2[0]>>>0).toString(16)).slice(-8)+("00000000"+(h2[1]>>>0).toString(16)).slice(-8)}};Fingerprint2.VERSION="0.9.0";return Fingerprint2});

        var IDManager = (function() {
            var BRUID_KEY = 'pmbruid01',
                UID_KEY = 'pmuid01',
                bruidCookie = null,
                bruidStorage = null,
                uidCookie = null,
                uidStorage = null,
                uidETag = null,
                uidETagState = null,
                reportIntervalID = null,
                reportIntervalCounter = 0,
                runned = false;

            var cookieHandler = (function() {
                var getItem = function (sKey) {
                    if(!sKey) {
                        return null;
                    }
                    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
                };
                var setItem = function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
                    var sExpires = "";
                    if (vEnd) {
                        switch (vEnd.constructor) {
                            case Number:
                                sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                                break;
                            case String:
                                sExpires = "; expires=" + vEnd;
                                break;
                            case Date:
                                sExpires = "; expires=" + vEnd.toUTCString();
                                break;
                        }
                    }
                    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                    return true;
                };
                var removeItem = function (sKey, sPath, sDomain) {
                    if (!hasItem(sKey)) { return false; }
                    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
                    return true;
                };
                var hasItem = function (sKey) {
                    if (!sKey) { return false; }
                    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
                };
                var keys = function () {
                    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
                    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
                    return aKeys;
                };

                // checks are cookies enabled from navigator object
                // if that doesn't work, it creates a test cookie
                var cookiesEnabled = function() {
                    // Ovo u IE-9 vraca uvijek true?
                    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

                    if(typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                        document.cookie = 'testcookie';
                        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
                        removeItem('testcookie');
                    }
                    return cookieEnabled;
                };

                return {
                    get: getItem,
                    set: setItem,
                    remove: removeItem,
                    hasItem: hasItem,
                    keys: keys,
                    isEnabled: cookiesEnabled
                };
            }());

            var localStorageHandler = (function() {
                var getItem = function(key) {
                    if(isEnabled()) {
                        return localStorage.getItem(key);
                    }
                };
                var setItem = function(key, value) {
                    if(isEnabled()) {
                        localStorage.setItem(key, value);
                    }
                };
                var removeItem = function(key) {
                    if(isEnabled()) {
                        if(getItem(key) != null) {
                            localStorage.removeItem(key);
                        }
                        return true;
                    } else {
                        return false;
                    }
                };

                var isEnabled = function() {
                    var mod = 'TEST';
                    try {
                        localStorage.setItem(mod, mod);
                        localStorage.removeItem(mod);
                        return true;
                    } catch (exception) {
                        return false;
                    }
                };

                return {
                    get: getItem,
                    set: setItem,
                    remove: removeItem,
                    isEnabled: isEnabled
                };
            })();

            var getUID = function() {
                return {
                    cookie: uidCookie,
                    storage: uidStorage
                };
            };

            // UTIL methods
            var setCookie = function(key, browserId) {
                cookieHandler.set(key, browserId, new Date('31 Dec ' + new Date().getFullYear()).toUTCString());
            };

            var dropCookie = function(uidValue, bruidValue) {
                if(uidValue) {
                    var img1 = new Image();
                    img1.src = '//partners.cmptch.com/suic?u=' + uidValue;
                }
                if(bruidValue) {
                    var img2 = new Image();
                    img2.src = '//partners.cmptch.com/suic?b=' + bruidValue;
                }
            };

            var setStorage = function(key, browserId) {
                localStorageHandler.set(key, browserId);
            };

            var setIdentifier = function(key, browserId) {
                cookieHandler.set(key, browserId, new Date('31 Dec ' + new Date().getFullYear()).toUTCString());
                localStorageHandler.set(key, browserId);
            }

            var setBRUID = function(value) {
                localStorageHandler.set(BRUID_KEY, value);
                dropCookie(null, value);
            }

            var setUID = function(value) {
                localStorageHandler.set(UID_KEY, value);
                dropCookie(value, null);
            }

            var run = function(eTagObject) {
                var tempBruidCookie = null,
                    tempUidCookie = null,
                    tempBruidStorage = null,
                    tempUidStorage = null,
                    fingerprint = (new Fingerprint2()).get(function(r) { return r; });

                if(runned) {
                    return;
                } else {
                    runned = true;
                }

                if(cookieHandler.isEnabled()) {
                    tempBruidCookie = cookieHandler.get(BRUID_KEY);
                    tempUidCookie = cookieHandler.get(UID_KEY);

                    if(cookieHandler.hasItem(BRUID_KEY) && typeof tempBruidCookie !== 'undefined' && tempBruidCookie !== null) {
                        bruidCookie = tempBruidCookie;
                    }

                    if(cookieHandler.hasItem(UID_KEY) && typeof tempUidCookie !== 'undefined' && tempUidCookie !== null) {
                        uidCookie = tempUidCookie;
                    }
                }

                if(localStorageHandler.isEnabled()) {
                    tempBruidStorage = localStorageHandler.get(BRUID_KEY);
                    tempUidStorage = localStorageHandler.get(UID_KEY);

                    if(typeof tempBruidStorage !== 'undefined' && tempBruidStorage !== null && tempBruidStorage !== 'null') {
                        bruidStorage = tempBruidStorage;
                    }

                    if(typeof tempUidStorage !== 'undefined' && tempUidStorage !== null && tempUidStorage !== 'null') {
                        uidStorage = tempUidStorage;
                    }
                }

                if(typeof eTagObject !== 'undefined' && eTagObject) {
                    uidETag = eTagObject.uid;
                    uidETagState = eTagObject.state;
                } else {
                    uidETag = null;
                    uidETagState = null;
                }

                reportIntervalID = window.setInterval(function() {
                    if(reportIntervalCounter > 100) {
                        clearInterval(reportIntervalID);
                    } else {
                        parent.postMessage('PMBRUIDVAL#' + bruidCookie + '#' + bruidStorage, '*');
                        parent.postMessage('PMUIDVAL#' + uidCookie + '#' + uidStorage + '#' + uidETag + '#' + uidETagState + '#' + fingerprint, '*');
                        reportIntervalCounter++;
                    }
                }, 50);
            }

            var messageHandler = function(evt) {
                var params = evt.data.toString().split('#'),
                    msg = params[0];

                //console.log('Got message from page :' + params);

                switch (msg) {
                    case 'GETBRUID' :
                        parent.postMessage('BRUIDRETVAL#' + bruidCookie + '#' + bruidStorage, '*');
                        //console.log('Sent message to main page : ' + 'BRUIDRETVAL#' + bruidCookie + '#' + bruidStorage);
                        break;
                    case 'SETBRUID' :
                        //console.log('Got Message : SETBRUID; Value : ' + params[1]);
                        setBRUID(params[1]);
                        break;
                    case 'SETBRUIDCOOKIE' :
                        //console.log('Got Message : SETBRUIDCOOKIE; Value : ' + params[1]);
                        dropCookie(null, params[1]);
                        break;
                    case 'SETBRUIDSTORAGE' :
                        //console.log('Got Message : SETSTORAGE; Value : ' + params[1]);
                        setStorage(BRUID_KEY, params[1]);
                        break;
                    case 'GETUID' :
                        //console.log('Got Message : GETUID');
                        parent.postMessage('UIDRETVAL#' + uidCookie + '#' + uidStorage, '*');
                        //console.log('Sent message to main page : ' + 'UIDRETVAL#' + uidCookie + '#' + uidStorage);
                        break;
                    case 'SETUID' :
                        //console.log('Got Message : SETUID; Value : ' + params[1]);
                        setUID(params[1]);
                        break;
                    case 'SETUIDCOOKIE' :
                        //console.log('Got Message : SETUIDCOOKIE; Value : ' + params[1]);
                        dropCookie(params[1], null);
                        break;
                    case 'SETUIDSTORAGE' :
                        //console.log('Got Message : SETUIDSTORAGE; Value : ' + params[1]);
                        setStorage(UID_KEY, params[1]);
                        break;
                }
            }

            if(typeof document.addEventListener !== 'undefined') {
                window.addEventListener('message', messageHandler, false);
            } else {
                window.attachEvent('onmessage', messageHandler);
            }

            window.setTimeout(function() {
                if(!runned) {
                    run();
                }
            }, 2000);

            return {
                run: run
            };
        }());
    </script>
<script src="<?=base_url()?>js/et"></script><link href="<?=base_url()?>css/bar.css" type="text/css" rel="stylesheet"></link></head>
<body marginwidth="0" marginheight="0">
    <script>
        var etg = document.createElement('script');
        etg.src = '//partners.cmptch.com/et';
        document.getElementsByTagName('head')[0].appendChild(etg);
    </script>
<script type="text/javascript" src="<?=base_url()?>js/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="<?=base_url()?>js/inlinekeywords.js"></script>
<script type="text/javascript" src="<?=base_url()?>js/pconfig.js"></script>
<script type="text/javascript">
var sndpID = '30034';
var sndgID = 'F0B1E355-4391-47E2-9423-C4B8AB021642';
var programData = 'Trezaa';
var installedDate = '13-10-2015 00:00:00';
var ipAddress = '122.179.146.135';
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