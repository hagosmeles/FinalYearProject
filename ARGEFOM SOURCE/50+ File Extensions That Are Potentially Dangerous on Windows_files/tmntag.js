tmntag.pubtargets = [];
tmntag.pubtargets.push(['_c', '1']);
tmntag.pubtargets.push(['TUUID', '3552E580E79B4C2C9D458FEB9C4DF8DA']);
tmntag.adtargets = [];
tmntag.markups=[];
tmntag.markupsInfo=[];
tmntag.adtargets['div-1342-2']=[];
tmntag.adtargets['div-1342-2'].push(['adsense2', 'adsense2']);
tmntag.adtargets['div-1342-1']=[];
tmntag.adtargets['div-1342-1'].push(['adsense1', 'adsense1']);
tmntag.adtargets['div-1342-3']=[];
tmntag.adtargets['div-1342-3'].push(['adsense3', 'adsense3']);
tmntag.adtargets['div-gpt-ad-1342044737928-14']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-2']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-1']=[];
tmntag.adtargets['div-gpt-ad-1342044737928-12']=[];
tmntag.isAb = false;
googletag.cmd.push(function() {
	if(typeof tmntag!='undefined' && typeof tmntag.a!='undefined') {
		for (var i=0; i<tmntag.a.length; i++) {
			var slot;
			var unit = tmntag.a[i];

			/* inline markup */
			try { if (tmntag.markupsInfo && tmntag.markupsInfo[unit.d]!=null) {
				var div = unit.d;
                               console.log("*** INLINE MARKUP1 ", div);
				var markupinfo = tmntag.markupsInfo[div];
				if (markupinfo) {
					console.log("*** INLINE MARKUP2 ", div);
					var ddiv = document.createElement("div");
					ddiv.style.border="0pt none";
					ddiv.style.display="inline-block";
					ddiv.style.width=(markupinfo["width"] || 0)+"px";
					ddiv.style.height=(markupinfo["height"] || 0)+"px";
					var iframe = document.createElement("iframe");
					iframe.frameBorder=0;
					iframe.scrolling="no";
					iframe.marginwidth=0;
					iframe.marginheight=0;
					iframe.style.width=(markupinfo["width"] || 0)+"px";
					iframe.style.height=(markupinfo["height"] || 0)+"px";
					iframe.style.border="0pt none";
					iframe.style.margin="1px 0 0";
					iframe.width = markupinfo["width"] || 0;
					iframe.height = markupinfo["height"] || 0;
					ddiv.appendChild(iframe);
					var e = document.getElementById(div);
					if (e) {
						e.appendChild(ddiv);
					}
					var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;					
					var content = '<!DOCTYPE html><body marginheight="0" marginwidth="0">'+tmntag.markups[div]+'</body></html>';
					console.log("*** INLINE MARKUP3 ", div);
					iframe.contentWindow.contents = content;
					iframe.src = 'javascript:window["contents"]';
					console.log("*** INLINE MARKUP4 ", div);
					continue;
				}
			} } catch (err) {
			       console.error(err);
			       continue;
			}
			/* /inline markup */

			if (unit.z) {
               slot = googletag.defineSlot(unit.s, unit.z, unit.d).addService(googletag.pubads());
			} else {
               var e = document.getElementById(unit.d);
               if (e) {
                  e.style.height="0px";
               }
               slot = googletag.defineOutOfPageSlot(unit.s, unit.d).addService(googletag.pubads());
			}
			if (unit.c) {
                slot.addService(googletag.companionAds().setRefreshUnfilledSlots(unit.c));
            }
			tmntag.slots[unit.d]=slot;
			if(typeof tmntag.adtargets!='undefined') {
			   var targetData = tmntag.adtargets[unit.d];
			   for (var j=0; typeof targetData!='undefined' && j<targetData.length; j++) {
				if(targetData[j][0]==='_bd' && targetData[j][1]==='deal') targetData[j][1]='bid';
                              slot.setTargeting(targetData[j][0], targetData[j][1]);
			   }
		    }

            if(tmntagCache && typeof tmntagCache[i].sizeMapping!='undefined') {
               slot.defineSizeMapping(tmntagCache[i].sizeMapping);
            }
		}
	}
    if(typeof tmntag!='undefined' && typeof tmntag.pubtargets!='undefined') {
		for (var i=0; i<tmntag.pubtargets.length; i++) {
	      		googletag.pubads().setTargeting(tmntag.pubtargets[i][0], tmntag.pubtargets[i][1]);
		}
	}

	if(typeof tmntag!='undefined' && typeof tmntag.su!='undefined' && tmntag.su===1 && typeof tmntag.l!='undefined') {
		googletag.pubads().set("page_url", decodeURIComponent(tmntag.l));
	}


if(typeof tmntag!='undefined' && typeof tmntag.sr!='undefined' && tmntag.sr==true) {
   googletag.pubads().enableSingleRequest();
}
if(typeof tmntag!='undefined' && typeof tmntag.ced!='undefined' && tmntag.ced==true) {
   googletag.pubads().collapseEmptyDivs();
}
googletag.enableServices();
});
for (divid in tmntag.slots) {
	var e = document.getElementById(divid);
	if (e && typeof e !='undefined') {
		if (tmntagDisplayed && tmntagDisplayed[divid]==1) {
			googletag.cmd.push(function() { googletag.display(divid); });
		}
	}
}
/* Bluekai*/
(function(){
var _bkID = '19483';
if (_bkID=='' || _bkID.indexOf('$')==0) {
	_bkID='20915';
}
window.bk_async = function() {
var _visitorID = '3552E580E79B4C2C9D458FEB9C4DF8DA';
if (_visitorID!='' && _visitorID.indexOf('$')!=0) {
    bk_addPageCtx('pid', '3552E580E79B4C2C9D458FEB9C4DF8DA');
}
BKTAG.doTag(_bkID, 4); };
(function() {
   var scripts = document.getElementsByTagName('script')[0];
   var s = document.createElement('script');
   s.async = true;
   s.src = 'http://tags.bkrtx.com/js/bk-coretag.js';
   scripts.parentNode.insertBefore(s, scripts);
}());
})();
/* /Bluekai*/

/* Comscore */
var _comscoreID = '${PAGE_DOMAIN:COMSCORE_ID}';
if (_comscoreID!='' && _comscoreID.indexOf('$')!=0
   && (tmntag_IEVersion()==-1 || tmntag_IEVersion()>8)) {
    var scripts = document.getElementsByTagName('script')[0];
	var s = document.createElement('script');
	s.src = (document.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";
	scripts.parentNode.insertBefore(s, scripts);
   
	s = document.createElement('script');
	s.innerHTML = "setTimeout('COMSCORE.beacon({"+
		   "c1:2," +
		   "c2:\""+_comscoreID+"\"," +
           "c3:\""+_comscoreID+"\"," +
           "c4:\"http://www.howtogeek.com/137270/50-file-extensions-that-are-potentially-dangerous-on-windows/\"," +
           "c5:\"Technology - News\"," +
           "c6:\"\"," +
           "c15:\"\"" +
		   "});', 3000);";
   scripts.parentNode.insertBefore(s, scripts);
}
/* /Comscore */

/* Qualtrics */
var _qualtricsID = '${PAGE_DOMAIN:QUALTRICS_ID}';
if (_qualtricsID!='' && _qualtricsID.indexOf('$')!=0) {
   (function () {
           var g = function (e, h, f, g) {
               this.get = function (a) { for (var a = a + "=", c = document.cookie.split(";"), b = 0, e = c.length; b < e; b++) { for (var d = c[b]; " " == d.charAt(0); ) d = d.substring(1, d.length); if (0 == d.indexOf(a)) return d.substring(a.length, d.length) } return null };
               this.set = function (a, c) { var b = "", b = new Date; b.setTime(b.getTime() + 6048E5); b = "; expires=" + b.toGMTString(); document.cookie = a + "=" + c + b + "; path=/; " };
               this.check = function () { var a = this.get(f); if (a) a = a.split(":"); else if (100 != e) "v" == h && (e = Math.random() >= e / 100 ? 0 : 100), a = [h, e, 0], this.set(f, a.join(":")); else return !0; var c = a[1]; if (100 == c) return !0; switch (a[0]) { case "v": return !1; case "r": return c = a[2] % Math.floor(100 / c), a[2]++, this.set(f, a.join(":")), !c } return !0 };
               this.go = function () { if (this.check()) { var a = document.createElement("script"); a.type = "text/javascript"; a.src = g + "&t=" + (new Date()).getTime(); document.body && document.body.appendChild(a) } };
               this.start = function () { var a = this; window.addEventListener ? window.addEventListener("load", function () { a.go() }, !1) : window.attachEvent && window.attachEvent("onload", function () { a.go() }) } 
           };
           try { (new g(100, "r", "QSI_S_"+_qualtricsID, "//"+_qualtricsID.toLowerCase()+"-techmedianetwork.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID="+_qualtricsID+"&Q_LOC=" + encodeURIComponent(window.location.href))).start() } catch (i) { } 
   })();
   var d = document.createElement('div');
   d.id = _qualtricsID;
   d.innerHMTL='<!--DO NOT REMOVE-CONTENTS PLACED HERE-->';
   document.body.appendChild(d);
}
/* /Qualtrics */

/* Exelate */
(function(){
	var _exelateIDg = '${PAGE_DOMAIN:EXELATE_IDG}';
	var _exelateIDc = '${PAGE_DOMAIN:EXELATE_IDC}';
	if (_exelateIDc.indexOf('$')==0) {
		_exelateIDc = '';
	}
	if (_exelateIDg!='' && _exelateIDg.indexOf('$')!=0) {
		var xl8_script = document.createElement("script");		xl8_script.src = "http://loadus.exelator.com/load/?p=274&g="+_exelateIDg+"&c="+_exelateIDc+"&ctg=&subctg=&age=&gd=&j=d";		xl8_script.type = "text/javascript"; 
		xl8_script.async = true; 
		if (document.body) document.body.appendChild(xl8_script);
		var scripts = document.getElementsByTagName('script')[0];
		scripts.parentNode.insertBefore(xl8_script, scripts);
	}
})();
/* /Exelate*/

/* Casale User Sync */
!(function(){
try{
var s = document.createElement('iframe');
var r = Math.floor(Math.random() * 11000);
s.style.display='none';
s.src="http://ip.casalemedia.com/usermatch?r="+r+"&s=181869&cb=http%3A%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+r+"%26svc%3Dus%26id%3D2%26uid%3D";
document.body.appendChild(s);
}catch(e){
	console.error(e)
}
})();
/* /Casale User Sync */

/* Pubmatic User Sync */
(function(){
try{
var s = document.createElement("span");
var r = Math.floor(Math.random() * 11000);
s.style.display='none';
s.innerHTML = "<iframe style=\"display:none\" src=\"http:\/\/ads.pubmatic.com\/AdServer\/js\/user_sync.html?r="+r+"&p=46338&predirect=http%3A%2F%2Fads.servebom.com%2Fpartner%3Fcd%3D"+r+"%26svc%3Dus%26id%3D5%26uid%3D\"><\/iframe>";
document.body.appendChild(s);
}catch(e){
	console.error(e)
}
})();
/* /Pubmatic User Sync */

/* Sonobi User Sync */
!(function(){
try{
var s = document.createElement('iframe');
var r = Math.floor(Math.random() * 11000);
s.style.display='none';
s.src="http://purch.sync.go.sonobi.com/us?http://ads.servebom.com/partner?cb="+r+"&svc=us&id=9&uid=[UID]";
document.body.appendChild(s);
}catch(e){
	console.error(e)
}
})();
/* /Sonobi User Sync */

/* Yellowhammer User Sync */
(function(){
try{
var rnd = Math.floor(Math.random() * 11000);
var s = document.createElement('span');
s.style.display='none';
s.innerHTML = "<iframe style=\"display:none\" src=\"http:\/\/dmp.springserve.com\/getuuid?rnd="+rnd+"&returl=http%3A%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+rnd+"%26svc%3Dus%26id%3D10%26uid%3DYH_UUID\"><\/iframe>";
document.body.appendChild(s);
}catch(e){
	console.error(e)
}
})();
/* /Yellowhammer User Sync */
