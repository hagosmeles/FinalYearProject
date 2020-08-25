/* START Purch Ad Tag API V2 */
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */(function(){function N(p,r){function q(a){if(q[a]!==w)return q[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=q("json-stringify")&&q("json-parse");else{var e;if("json-stringify"==a){c=r.stringify;var b="function"==typeof c&&s;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new t)&&'""'==c(new A)&&c(u)===w&&c(w)===w&&c()===w&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([w])&&"null"==c(null)&&"[null,null,null]"==c([w,u,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==c({a:[e,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new C(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new C(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new C(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==c(new C(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=r.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var n=5==e.a.length&&1===e.a[0];if(n){try{n=!c('"\t"')}catch(d){}if(n)try{n=1!==c("01")}catch(g){}if(n)try{n=1!==c("1.")}catch(m){}}}}catch(X){n=!1}c=n}}return q[a]=!!c}p||(p=k.Object());r||(r=k.Object());var t=p.Number||k.Number,A=p.String||k.String,H=p.Object||k.Object,C=p.Date||k.Date,G=p.SyntaxError||k.SyntaxError,K=p.TypeError||k.TypeError,L=p.Math||k.Math,I=p.JSON||k.JSON;"object"==typeof I&&I&&(r.stringify=I.stringify,r.parse=I.parse);var H=H.prototype,u=H.toString,v,B,w,s=new C(-0xc782b5b800cec);try{s=-109252==s.getUTCFullYear()&&0===s.getUTCMonth()&&1===s.getUTCDate()&&10==s.getUTCHours()&&37==s.getUTCMinutes()&&6==s.getUTCSeconds()&&708==s.getUTCMilliseconds()}catch(Q){}if(!q("json")){var D=q("bug-string-char-index");if(!s)var x=L.floor,M=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,c){return M[c]+365*(a-1970)+x((a-1969+(c=+(1<c)))/4)-x((a-1901+c)/100)+x((a-1601+c)/400)};(v=H.hasOwnProperty)||(v=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=u?v=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=c;return a}:(e=c.constructor,v=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return v.call(this,a)});B=function(a,c){var e=0,b,f,n;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(n in f)v.call(f,n)&&e++;b=f=null;e?B=2==e?function(a,c){var e={},b="[object Function]"==u.call(a),f;for(f in a)b&&"prototype"==f||v.call(e,f)||!(e[f]=1)||!v.call(a,f)||c(f)}:function(a,c){var e="[object Function]"==u.call(a),b,f;for(b in a)e&&"prototype"==b||!v.call(a,b)||(f="constructor"===b)||c(b);(f||v.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),B=function(a,c){var e="[object Function]"==u.call(a),b,h=!e&&"function"!=typeof a.constructor&&F[typeof a.hasOwnProperty]&&a.hasOwnProperty||v;for(b in a)e&&"prototype"==b||!h.call(a,b)||c(b);for(e=f.length;b=f[--e];h.call(a,b)&&c(b));});return B(a,c)};if(!q("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},y=function(a,c){return("000000"+(c||0)).slice(-a)},R=function(a){for(var c='"',b=0,h=a.length,f=!D||10<h,n=f&&(D?a.split(""):a);b<h;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+y(2,d.toString(16));break}c+=f?n[b]:a.charAt(b)}}return c+'"'},O=function(a,c,b,h,f,n,d){var g,m,k,l,p,r,s,t,q;try{g=c[a]}catch(z){}if("object"==typeof g&&g)if(m=u.call(g),"[object Date]"!=m||v.call(g,"toJSON"))"function"==typeof g.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||v.call(g,"toJSON"))&&(g=g.toJSON(a));else if(g>-1/0&&g<1/0){if(E){l=x(g/864E5);for(m=x(l/365.2425)+1970-1;E(m+1,0)<=l;m++);for(k=x((l-E(m,0))/30.42);E(m,k+1)<=l;k++);l=1+l-E(m,k);p=(g%864E5+864E5)%864E5;r=x(p/36E5)%24;s=x(p/6E4)%60;t=x(p/1E3)%60;p%=1E3}else m=g.getUTCFullYear(),k=g.getUTCMonth(),l=g.getUTCDate(),r=g.getUTCHours(),s=g.getUTCMinutes(),t=g.getUTCSeconds(),p=g.getUTCMilliseconds();g=(0>=m||1E4<=m?(0>m?"-":"+")+y(6,0>m?-m:m):y(4,m))+"-"+y(2,k+1)+"-"+y(2,l)+"T"+y(2,r)+":"+y(2,s)+":"+y(2,t)+"."+y(3,p)+"Z"}else g=null;b&&(g=b.call(c,a,g));if(null===g)return"null";m=u.call(g);if("[object Boolean]"==m)return""+g;if("[object Number]"==m)return g>-1/0&&g<1/0?""+g:"null";if("[object String]"==m)return R(""+g);if("object"==typeof g){for(a=d.length;a--;)if(d[a]===g)throw K();d.push(g);q=[];c=n;n+=f;if("[object Array]"==m){k=0;for(a=g.length;k<a;k++)m=O(k,g,b,h,f,n,d),q.push(m===w?"null":m);a=q.length?f?"[\n"+n+q.join(",\n"+n)+"\n"+c+"]":"["+q.join(",")+"]":"[]"}else B(h||g,function(a){var c=O(a,g,b,h,f,n,d);c!==w&&q.push(R(a)+":"+(f?" ":"")+c)}),a=q.length?f?"{\n"+n+q.join(",\n"+n)+"\n"+c+"}":"{"+q.join(",")+"}":"{}";d.pop();return a}};r.stringify=function(a,c,b){var h,f,n,d;if(F[typeof c]&&c)if("[object Function]"==(d=u.call(c)))f=c;else if("[object Array]"==d){n={};for(var g=0,k=c.length,l;g<k;l=c[g++],(d=u.call(l),"[object String]"==d||"[object Number]"==d)&&(n[l]=1));}if(b)if("[object Number]"==(d=u.call(b))){if(0<(b-=b%1))for(h="",10<b&&(b=10);h.length<b;h+=" ");}else"[object String]"==d&&(h=10>=b.length?b:b.slice(0,10));return O("",(l={},l[""]=a,l),f,n,h,"",[])}}if(!q("json-parse")){var V=A.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,J,l=function(){b=J=null;throw G();},z=function(){for(var a=J,c=a.length,e,h,f,k,d;b<c;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=D?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)l();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:h=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||l();e+=V("0x"+a.slice(h,b));break;default:l()}else{if(34==d)break;d=a.charCodeAt(b);for(h=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(h,b)}if(34==a.charCodeAt(b))return b++,e;l();default:h=b;45==d&&(k=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&l();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}return+a.slice(h,b)}k&&l();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,b+4))return b+=4,null;l()}return"$"},P=function(a){var c,b;"$"==a&&l();if("string"==typeof a){if("@"==(D?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&l()):l());","==a&&l();c.push(P(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&l()):l());","!=a&&"string"==typeof a&&"@"==(D?a.charAt(0):a[0])&&":"==z()||l();c[a.slice(1)]=P(z())}return c}l()}return a},T=function(a,b,e){e=S(a,b,e);e===w?delete a[b]:a[b]=e},S=function(a,b,e){var h=a[b],f;if("object"==typeof h&&h)if("[object Array]"==u.call(h))for(f=h.length;f--;)T(h,f,e);else B(h,function(a){T(h,a,e)});return e.call(a,b,h)};r.parse=function(a,c){var e,h;b=0;J=""+a;e=P(z());"$"!=z()&&l();b=J=null;return c&&"[object Function]"==u.call(c)?S((h={},h[""]=e,h),"",c):e}}}r.runInContext=N;return r}var K=typeof define==="function"&&define.amd,F={"function":!0,object:!0},G=F[typeof exports]&&exports&&!exports.nodeType&&exports,k=F[typeof window]&&window||this,t=G&&F[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!t||t.global!==t&&t.window!==t&&t.self!==t||(k=t);if(G&&!K)N(k,G);else{var L=k.JSON,Q=k.JSON3,M=!1,A=N(k,k.JSON3={noConflict:function(){M||(M=!0,k.JSON=L,k.JSON3=Q,L=Q=null);return A}});k.JSON={parse:A.parse,stringify:A.stringify}}K&&define(function(){return A})}).call(this);
(function(){
  if(document.addEventListener) {
	  window.tmntag_ready = function (handler) {
		  document.addEventListener("DOMContentLoaded", handler);
		  }
  } else if (document.attachEvent) {
	  window.tmntag_ready = function (handler) {
      var boundedHandler = function() {
    	  if ( document.readyState === "complete" ) {
    		  return handler.apply(document);
          }
      };
      document.attachEvent("onreadystatechange", boundedHandler);
    }
  } 
})();
tmntag_getAdUnit = function(unitId) {
  for(var i = 0; i < tmntag.a.length; i++) {
    if (tmntag.a[i].d === unitId) {
      return tmntag.a[i];
    }
  }
  return false;
}
tmntag_timestamp = function() {
    var date = new Date();
    //zero-pad a single zero if needed
    var zp = function (val) {
        return (val <= 9 ? '0' + val : '' + val);
    }

    //zero-pad up to two zeroes if needed
    var zp2 = function(val) {
        return val <= 99? (val <=9? '00' + val : '0' + val) : ('' + val ) ;
    }

    var d = date.getDate();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    return '' + y + '-' + zp(m) + '-' + zp(d) + ' ' + zp(h) + ':' + zp(min) + ':' + zp(s);
};
tmntag_inIframe = function() {
	return (top !== self);
}
tmntag_IEVersion = function()
{
  var ret = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      ret = parseFloat( RegExp.$1 );
  }
  return ret;
}
tmntag_isArray = function(object) {
    if (object.constructor === Array) return true;
    else return false;
};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var tmntag={};
var tmntagCache=[];
tmntagDisplayed={};
tmntag.sr=true;
tmntag.ced=true;
tmntag.a=[];
tmntag.slots={};
tmntag.l=encodeURIComponent(window.top.document.location.href);
tmntag.t=tmntag_timestamp();
tmntag.tz=new Date().getTimezoneOffset();
tmntag.su=0;
tmntag.isAb = true;
tmntag.placementCustomID = function (placementCustomID) {
	tmntag.pc=placementCustomID;
}
tmntag.placement = function (placementId) {
	tmntag.p=placementId;
}
tmntag.account = function (account) {
	tmntag.s=account;
}
tmntag.adunit = function (adunitObject) {
	var a = {};
	if (adunitObject.account) {
		a.s = adunitObject.account;
	} else if (tmntag.s) {
		a.s = tmntag.s;
	}
	if (adunitObject.sizes) {
		a.z = adunitObject.sizes;
	}
	if (adunitObject.div) {
		a.d = adunitObject.div;
	}
	if (adunitObject.targeting) {
		a.g = adunitObject.targeting;
	} else {
		a.g={};
	}
	if (adunitObject.companion) {
		a.c = adunitObject.companion;
	}
	tmntag.a.push(a);
	tmntagCache.push(adunitObject);
	return a;
}
tmntag.adunitTarget = function (adunitObject, key, value) {
	adunitObject.g[key] = value;
}
tmntag.target = function (targetingMap) {
	if (typeof targetingMap != 'object') return;
	if (!tmntag.g) {
		tmntag.g = targetingMap;
	}
	for (var key in targetingMap) {
  		if (targetingMap.hasOwnProperty(key)) {
  			var value = targetingMap[key];
  			if (value && tmntag_isArray(value)) {
  				for (var i in value) {
  					value[i] = value[i].replace(/'|&|#|\r|\n/g, "");
  				}
  				tmntag.g[key.replace(/'|&|#/g, "")]= value;
  			} else if (value) {
  				tmntag.g[key.replace(/'|&|#/g, "")]= value.replace(/'|&|#|\r|\n/g, "");
  			}
		}
	}
}
tmntag.location = function (location) {
	tmntag.l = encodeURIComponent(location);
	tmntag.su=1;
}
tmntag.adTag = function (divid, insertDiv) {
	if (typeof insertDiv=='undefined' || insertDiv) document.write("<div id=\""+divid+"\">");
	googletag.cmd.push(function() { googletag.display(divid); });
	if (typeof insertDiv=='undefined' || insertDiv) document.write("</div>");
	tmntagDisplayed[divid]=1;
}
tmntag.refresh = function (divIds, targeting) {
    var refreshRegular = function (divIds, targeting) {
    var a = [];
    if (typeof divIds=='undefined') {
      googletag.pubads().refresh();
      return;
    } else if (divIds instanceof Array){
      for (var id in divIds) {
        var slot = tmntag.slots[divIds[id]];
        if (slot) {
          a.push(slot);
        }
      }
    } else {
      var slot = tmntag.slots[divIds];
      if (slot) {
        a.push(slot);
      }
    }
    if (a.length>0) {
      for (var slot in a) {
        if (targeting) {
          a[slot].clearTargeting();
          for (var key in targeting) {
            if (targeting.hasOwnProperty(key)) {
              a[slot].setTargeting(key, targeting[key]);
            }
          }
        }
      }
      googletag.pubads().refresh(a);
    }
    return console && console.info && console.info("Regular refresh "+divIds);
  };
  var refreshClone = function(divId, targeting) {
    tmntag.aMap = tmntag.aMap || {};  
    tmntag.aMap[divId] = tmntag.aMap[divId] || [];  
    if (divId == 'purchrtb-zonepub16') {return true;}
    var target = document.getElementById(divId) || document.getElementById(tmntag.aMap[divId][tmntag.aMap[divId].length - 1]);
    if (!target) {
        refreshRegular(divId, targeting);
        return;
    }
    var    parent = target.parentNode,
      targetHeight = target.offsetHeight,        
      newDiv = document.createElement('div'),
      cloned = parent.querySelectorAll(".purch-cloned");

    var newId = divId + '-' + tmntag.aMap[divId].length;
    tmntag.aMap[divId].push(newId);

    newDiv.id = newId;
    newDiv.setAttribute("class", "purch-cloned"); 
    parent.style.minHeight = (tmntag.slots[divId].w[0].a)+ 'px';
    parent.insertBefore(newDiv, target);
    tmntag.adunitClone(divId, tmntag.aMap[divId][tmntag.aMap[divId].length - 1]);
    target.style.display = 'none';
    parent.removeChild(target);
    return console && console.info && console.info("Cloned refresh "+divId);
  };
  var useCloneRefresh = function(divId){
      var aSizes = ["270x90","300x100","300x101","300x150","300x151","300x200","300x300","300x350","310x98","312x97","320x90","330x120","336x280","460x185","466x104","466x105","469x103","500x60","512x80","532x80","540x185","540x90","550x90","560x185","575x185","580x122","592x122","596x100","596x90","600x120","600x125","600x185","600x186","600x187","600x80","620x185","628x185","628x186","640x480","643x185","650x140","670x125","675x60","676x185","700x126","932x114","940x90"];
      var useRefresh = false;
      for (var i in tmntag.a) {
      var z = tmntag.a[i].z;
      if(typeof z !== 'undefined' && z.length) {
        for(x in z) {
        useRefresh = (z[x] instanceof Array) ?  useRefresh || (aSizes.indexOf(z[x].join("x")) != -1) : useRefresh || (aSizes.indexOf(z.join("x")) != -1);
        }
      }
    }
    return useRefresh;
  };
  if (divIds instanceof Array){
      for (var i = 0; i < divIds.length; i++) {
      if (useCloneRefresh(divIds[i])){
        refreshClone(divIds[i], targeting);
      } else {
        refreshRegular(divIds[i], targeting);
      }
      }
    }else {
      if (useCloneRefresh(divIds)){ 
        refreshClone(divIds, targeting);
      } else {
        refreshRegular(divIds, targeting);
      }
    }
};
tmntag.adunitClone = function (divId, cloneDivId, params) {
  if ('JSON' in window) {
    var origUnit  = tmntag_getAdUnit(divId);
    if (origUnit) {
      var unitClone;
      try { unitClone = JSON.parse(JSON.stringify(origUnit)); } catch (e) { return false; }
      unitClone.d = cloneDivId;
      if (params) {
        for (var k in params) {
          if (params.hasOwnProperty(k)) {
            unitClone[k] = params[k];
          }
        }
      }
      tmntag.a.push(unitClone);
      var slotClone = googletag.defineSlot(unitClone.s, unitClone.z, unitClone.d).addService(googletag.pubads());

      var targetingData = unitClone.g || {};
      for (var k in targetingData) {
        if (targetingData.hasOwnProperty(k) && targetingData[k]) {
          slotClone.setTargeting(k, targetingData[k]);
        }
      }
      googletag.cmd.push(function () {
        googletag.display(cloneDivId);
      });
      return slotClone;
    }
  }
  return false;
}
tmntag.disableSingleRequest = function() {
	tmntag.sr = false;
}
tmntag.disableCollapseEmptyDivs = function() {
	tmntag.ced = false;
}
tmntag.onAdunitRendered = function(callback) {
    callback = typeof callback === 'function' ? callback : function() {};
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        callback({
            div: event.slot.getSlotId().getDomId(),
            size: {
              width: event.size[0],
              height: event.size[1]
            },
            _orig:event
        });
    });
}
tmntag.start = function () {
   var r = Math.floor(Math.random() * 11000);
   var qs = "r="+r+"&o="+(('JSON' in window)?JSON.stringify(tmntag).replace(/'|&|#/g, ""):"");
   var host = tmntag_findURL();
   var jsBids = [];
   if (typeof amznads!='undefined') {
      var aaxBids = amznads.getTokens();
      if (aaxBids!=null && aaxBids.length>0) {
         jsBids = [{'br':6, 'bs':aaxBids.join()}];
      }
      if (jsBids.length>0) {
         qs = "r="+r+"&o="+JSON.stringify(tmntag)+"&j="+JSON.stringify(jsBids);
      }
   }
   // document.write("<script type='text/javascript' src='"+host+"tmntag.js?"+qs+"'></scr"+"ipt>");
	var e = document.createElement("script");
	e.type = "text/javascript";
    	e.src = host+"tmntag.js?"+qs;
    	var scripts = document.getElementsByTagName('script')[0];
    	scripts.parentNode.insertBefore(e, scripts);
}
tmntag_findURL = function () {
   for (var i=0; i<document.scripts.length; i++) {
      var script = document.scripts[i];
      var idx = script.src.indexOf('tmnhead.js');
      if (idx>0) {
         return(script.src.substring(0, idx));
      }
   }
   return 'http://ads.servebom.com/';
}
tmntag_passback = function (doc, id) {
	console.log('*** tmntag_passback', id);
	var ret = tmntag_render(doc, id);
	if (!ret) {
		doc.write('<scr'+'ipt type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>');
		console.log('*** tmntag_passback adx', id);
	}
}
tmntag_render = function (doc, id) {
	var ret = false;
	if (typeof tmntag.markups!='undefined') {
		var markup = tmntag.markups[id];
		if (typeof markup!='undefined' && markup!=null) {
			doc.write(markup);
			ret=true;
			var slot = tmntag.slots[id];
			if (slot) {
				var keys = slot.getTargetingKeys();
				slot.setTargeting("_bd", "none");
			}
		}
	}
	return ret;
}
document.write("<script src='//www.googletagservices.com/tag/js/gpt.js'></scr"+"ipt>");
/* OpenX */
(function(){
openxID = '10518929-TMNP.HOWTOGEEK';
if (openxID!='' && openxID.indexOf('$')!=0) {
    document.write("<script src='//ox-d.tmn.servedbyopenx.com/w/1.0/jstag?ef=db&nc="+openxID+"'></scr"+"ipt>");
}
})();
/* /OpenX */
/* Amazon */
if (!tmntag_inIframe() && (tmntag_IEVersion()==-1 || tmntag_IEVersion()>=9)) {
	(function(){
		try {
			aaxID = '3150';
			if (aaxID!='' && aaxID.indexOf('$')!=0) {
				document.write("<script src='http://c.amazon-adsystem.com/aax2/amzn_ads.js'></scr"+"ipt>");
				document.write("<script>if(typeof amznads!='undefined')amznads.getAds(aaxID);</scr"+"ipt>");
			}
		} catch (e) {
			console.error(e)
		}
	})();
}
/* /Amazon */
/* END Purch Ad Tag API V2 */