(function(b){if(!Modernizr.genericDOM){var d=document,i,k,m=/<([\w:]+)/,l={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};b.webshims.fixHTML5=function(b){if("string"!=typeof b||l[(m.exec(b)||["",""])[1].toLowerCase()])return b;if(!k){i=d.body;if(!i)return b;k=d.createElement("div");k.style.display="none"}var r=k.cloneNode(!1);i.appendChild(r);r.innerHTML=b;i.removeChild(r);return r.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(b,d,i,k,m){var l=d.modules,j=/\s*,\s*/,r={},q={},p={},g={},s={},x=b.fn.val,u=function(a,c,e,f,n){return n?x.call(b(a)):x.call(b(a),e)};b.fn.val=function(a){var c=this[0];arguments.length&&null==a&&(a="");if(!arguments.length)return!c||1!==c.nodeType?x.call(this):b.prop(c,"value",a,"val",!0);if(b.isArray(a))return x.apply(this,arguments);var e=b.isFunction(a);return this.each(function(f){c=this;1===c.nodeType&&(e?(f=a.call(c,f,b.prop(c,"value",m,"val",
!0)),null==f&&(f=""),b.prop(c,"value",f,"val")):b.prop(c,"value",a,"val"))})};var v="_webshimsLib"+Math.round(1E3*Math.random()),t=function(a,c,e){a=a.jquery?a[0]:a;if(!a)return e||{};var f=b.data(a,v);e!==m&&(f||(f=b.data(a,v,{})),c&&(f[c]=e));return c?f&&f[c]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(a){b.fn[a.name]=function(){return this.map(function(){var c=t(this,
"shadowData");return c&&c[a.prop]||this})}});["removeAttr","prop","attr"].forEach(function(a){r[a]=b[a];b[a]=function(c,e,f,n,h){var d="val"==n,o=!d?r[a]:u;if(!c||!q[e]||1!==c.nodeType||!d&&n&&"attr"==a&&b.attrFn[e])return o(c,e,f,n,h);var z=(c.nodeName||"").toLowerCase(),j=p[z],g="attr"==a&&(!1===f||null===f)?"removeAttr":a,l,k,w;j||(j=p["*"]);j&&(j=j[e]);j&&(l=j[g]);if(l){if("value"==e)k=l.isVal,l.isVal=d;if("removeAttr"===g)return l.value.call(c);if(f===m)return l.get?l.get.call(c):l.value;l.set&&
("attr"==a&&!0===f&&(f=e),w=l.set.call(c,f));if("value"==e)l.isVal=k}else w=o(c,e,f,n,h);if((f!==m||"removeAttr"===g)&&s[z]&&s[z][e]){var i;i="removeAttr"==g?!1:"prop"==g?!!f:!0;s[z][e].forEach(function(e){if(!e.only||(e.only="prop"==a)||"attr"==e.only&&"prop"!=a)e.call(c,f,i,d?"val":g,a)})}return w};g[a]=function(c,e,f){p[c]||(p[c]={});p[c][e]||(p[c][e]={});var n=p[c][e][a],h=function(c,b,n){return b&&b[c]?b[c]:n&&n[c]?n[c]:"prop"==a&&"value"==e?function(c){return f.isVal?u(this,e,c,!1,0===arguments.length):
r[a](this,e,c)}:"prop"==a&&"value"==c&&f.value.apply?function(c){var b=r[a](this,e);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(c){return r[a](this,e,c)}};p[c][e][a]=f;if(f.value===m){if(!f.set)f.set=f.writeable?h("set",f,n):d.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+c;}:b.noop;if(!f.get)f.get=h("get",f,n)}["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=h(a,n))})}});var y=!b.browser.msie||8<parseInt(b.browser.version,10),h=function(){var a=d.getPrototypeOf(k.createElement("foobar")),
c=Object.prototype.hasOwnProperty;return function(e,b,n){var h=k.createElement(e),j=d.getPrototypeOf(h);if(y&&j&&a!==j&&(!h[b]||!c.call(h,b))){var l=h[b];n._supvalue=function(){return l&&l.apply?l.apply(this,arguments):l};j[b]=n.value}else n._supvalue=function(){var a=t(this,"propValue");return a&&a[b]&&a[b].apply?a[b].apply(this,arguments):a&&a[b]},o.extendValue(e,b,n.value);n.value._supvalue=n._supvalue}}(),o=function(){var a={};d.addReady(function(c,e){var f={},h=function(a){f[a]||(f[a]=b(c.getElementsByTagName(a)),
e[0]&&b.nodeName(e[0],a)&&(f[a]=f[a].add(e)))};b.each(a,function(a,c){h(a);!c||!c.forEach?d.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){f[a].each(c)})});f=null});var c,e=b([]),f=function(e,f){a[e]?a[e].push(f):a[e]=[f];b.isDOMReady&&(c||b(k.getElementsByTagName(e))).each(f)};return{createTmpCache:function(a){b.isDOMReady&&(c=c||b(k.getElementsByTagName(a)));return c||e},flushTmpCache:function(){c=null},content:function(a,c){f(a,function(){var a=b.attr(this,c);null!=a&&b.attr(this,
c,a)})},createElement:function(a,c){f(a,c)},extendValue:function(a,c,e){f(a,function(){b(this).each(function(){t(this,"propValue",{})[c]=this[c];this[c]=e})})}}}(),w=function(a,c){if(a.defaultValue===m)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[c||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};b.extend(d,{getID:function(){var a=(new Date).getTime();return function(c){var c=b(c),e=c.attr("id");e||(a++,e="ID-"+a,c.attr("id",e));return e}}(),extendUNDEFProp:function(a,
c){b.each(c,function(c,b){c in a||(a[c]=b)})},createPropDefault:w,data:t,moveToFirstEvent:function(){var a=b._data?"_data":"data";return function(c,e,f){if((c=(b[a](c,"events")||{})[e])&&1<c.length)e=c.pop(),f||(f="bind"),"bind"==f&&c.delegateCount?c.splice(c.delegateCount,0,e):c.unshift(e)}}(),addShadowDom:function(a,c,e){e=e||{};a.jquery&&(a=a[0]);c.jquery&&(c=c[0]);if(!e.shadowFocusElement)e.shadowFocusElement=c;var f=b.data(a,v)||b.data(a,v,{}),h=b.data(c,v)||b.data(c,v,{});f.hasShadow=c;h.nativeElement=
a;h.shadowData=f.shadowData={nativeElement:a,shadowElement:c,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){t(this,"shadowData",h.shadowData)});if(e.data)f.shadowData.data=e.data,h.shadowData.data=e.data;e=null},propTypes:{standard:function(a){w(a);if(!a.prop)a.prop={set:function(c){a.attr.set.call(this,""+c)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){w(a);if(!a.prop)a.prop={set:function(c){c?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(a,c){"string"==typeof c&&(c=c.split(j));c.forEach(function(c){d.defineNodeNamesProperty(a,c,{prop:{set:function(a){b.attr(this,c,a)},get:function(){return b.attr(this,c)||""}}})})},defineNodeNameProperty:function(a,c,e){q[c]=!0;if(e.reflect)d.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(f){var n=e[f];n&&(n="prop"===f?b.extend({writeable:!0},n):b.extend({},
n,{writeable:!0}),g[f](a,c,n),"*"!=a&&d.cfg.extendNative&&"prop"==f&&n.value&&b.isFunction(n.value)&&h(a,c,n),e[f]=n)});e.initAttr&&o.content(a,c);return e},defineNodeNameProperties:function(a,c,b,f){for(var h in c)!f&&c[h].initAttr&&o.createTmpCache(a),b&&(c[h][b]?d.log("override: "+a+"["+h+"] for "+b):(c[h][b]={},["value","set","get"].forEach(function(a){a in c[h]&&(c[h][b][a]=c[h][a],delete c[h][a])}))),c[h]=d.defineNodeNameProperty(a,h,c[h]);f||o.flushTmpCache();return c},createElement:function(a,
c,e){var f;b.isFunction(c)&&(c={after:c});o.createTmpCache(a);c.before&&o.createElement(a,c.before);e&&(f=d.defineNodeNameProperties(a,e,!1,!0));c.after&&o.createElement(a,c.after);o.flushTmpCache();return f},onNodeNamesPropertyModify:function(a,c,e,f){"string"==typeof a&&(a=a.split(j));b.isFunction(e)&&(e={set:e});a.forEach(function(a){s[a]||(s[a]={});"string"==typeof c&&(c=c.split(j));e.initAttr&&o.createTmpCache(a);c.forEach(function(c){s[a][c]||(s[a][c]=[],q[c]=!0);if(e.set){if(f)e.set.only=f;
s[a][c].push(e.set)}e.initAttr&&o.content(a,c)});o.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,c,e){e||(e={});if(b.isFunction(e))e.set=e;d.defineNodeNamesProperty(a,c,{attr:{set:function(a){this.setAttribute(c,a);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(c)?m:c}},removeAttr:{value:function(){this.removeAttribute(c);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(a,c,b){if(a.nodeName){if(b===
m)return b=(a.attributes[c]||{}).value,null==b?m:b;"boolean"==typeof b?b?a.setAttribute(c,c):a.removeAttribute(c):a.setAttribute(c,b)}},activeLang:function(){var a=[],c={},e,f,h=/:\/\/|^\.*\//,j=function(a,c,e){return c&&e&&-1!==b.inArray(c,e.availabeLangs||[])?(a.loading=!0,e=e.langSrc,h.test(e)||(e=d.cfg.basePath+e),d.loader.loadScript(e+c+".js",function(){a.langObj[c]?(a.loading=!1,g(a,!0)):b(function(){a.langObj[c]&&g(a,!0);a.loading=!1})}),!0):!1},o=function(a){c[a]&&c[a].forEach(function(a){a.callback()})},
g=function(a,c){if(a.activeLang!=e&&a.activeLang!==f){var b=l[a.module].options;if(a.langObj[e]||f&&a.langObj[f])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[f],e),o(a.module);else if(!c&&!j(a,e,b)&&!j(a,f,b)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),o(a.module)}};return function(h){if("string"==typeof h&&h!==e)e=h,f=e.split("-")[0],e==f&&(f=!1),b.each(a,function(a,c){g(c)});else if("object"==typeof h)if(h.register)c[h.register]||(c[h.register]=[]),c[h.register].push(h),
h.callback();else{if(!h.activeLang)h.activeLang="";a.push(h);g(h)}return e}}()});b.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){d[a]=function(a,b,h,o){"string"==typeof a&&(a=a.split(j));var l={};a.forEach(function(a){l[a]=d[c](a,b,h,o)});return l}});d.isReady("webshimLocalization",!0)});
(function(b,d){var i=b.webshims.browserVersion;if(!(b.browser.mozilla&&5<i)&&(!b.browser.msie||12>i&&7<i)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(b,j){b.getAttribute("role")||b.setAttribute("role",j)};b.webshims.addReady(function(l,j){b.each(k,function(d,s){for(var i=b(d,l).add(j.filter(d)),k=0,q=i.length;k<q;k++)m(i[k],s)});if(l===d){var i=d.getElementsByTagName("header")[0],q=d.getElementsByTagName("footer"),p=q.length;
i&&!b(i).closest("section, article")[0]&&m(i,"banner");p&&(i=q[p-1],b(i).closest("section, article")[0]||m(i,"contentinfo"))}})}})(jQuery,document);
(function(b,d,i){var k=d.audio&&d.video,m=!1;if(k)b=document.createElement("video"),d.videoBuffered="buffered"in b,m="loop"in b,i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),d.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:d.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(b,d,i,q,p){var g=d.mediaelement,s=d.cfg.mediaelement,
x=function(a,c){var a=b(a),e={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!e.src)return e;var f=a.attr("type");if(f)e.type=f,e.container=b.trim(f.split(";")[0]);else if(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),f=g.getTypeForSrc(e.src,c))e.type=f,e.container=f;if(f=a.attr("media"))e.media=f;return e},u=swfobject.hasFlashPlayerVersion("9.0.115"),v=function(){d.ready("mediaelement-swf",function(){if(!g.createSWF)d.modules["mediaelement-swf"].test=
b.noop,d.reTest(["mediaelement-swf"],k)})};g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf",
"asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};g.mimeTypes.source=b.extend({},g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],e;b.each(g.mimeTypes[c],function(b,c){if(-1!==c.indexOf(a))return e=b,!1});return e};g.srces=function(a,c){a=b(a);if(c)a.removeAttr("src").removeAttr("type").find("source").remove(),
b.isArray(c)||(c=[c]),c.forEach(function(b){var c=q.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var c=[],e=a[0].nodeName.toLowerCase(),f=x(a,e);f.src?c.push(f):b("source",a).each(function(){f=x(this,e);f.src&&c.push(f)});return c}};b.fn.loadMediaSrc=function(a,c){return this.each(function(){c!==p&&(b(this).removeAttr("poster"),c&&b.attr(this,"poster",c));g.srces(this,
a);b(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");g.canSwfPlaySrces=function(a,c){var e="";u&&(a=b(a),c=c||g.srces(a),b.each(c,function(a,b){if(b.container&&b.src&&-1!=g.swfMimeTypes.indexOf(b.container))return e=b,!1}));return e};var t={};g.canNativePlaySrces=function(a,
c){var e="";if(k){var a=b(a),f=(a[0].nodeName||"").toLowerCase();if(!t[f])return e;c=c||g.srces(a);b.each(c,function(b,c){if(c.type&&t[f].prop._supvalue.call(a[0],c.type))return e=c,!1})}return e};g.setError=function(a,c){c||(c="can't play sources");b(a).pause().data("mediaerror",c);d.warn("mediaelementError: "+c);setTimeout(function(){b(a).data("mediaerror")&&b(a).trigger("mediaerror")},1)};var y=function(){var a;return function(b,e,f){d.ready("mediaelement-swf",function(){g.createSWF?g.createSWF(b,
e,f):a||(a=!0,v(),y(b,e,f))})}}(),h=function(a,b,e,f,d){e||!1!==e&&b&&"flash"==b.isActive?(e=g.canSwfPlaySrces(a,f))?y(a,e,b):d?g.setError(a,!1):h(a,b,!1,f,!0):(e=g.canNativePlaySrces(a,f))?b&&"flash"==b.isActive&&g.setActive(a,"html5",b):d?(g.setError(a,!1),b&&"flash"==b.isActive&&g.setActive(a,"html5",b)):h(a,b,!0,f,!0)},o=/^(?:embed|object|datalist)$/i,w=function(a,c){var e=d.data(a,"mediaelementBase")||d.data(a,"mediaelementBase",{}),f=g.srces(a),n=a.parentNode;clearTimeout(e.loadTimer);b.data(a,
"mediaerror",!1);if(f.length&&n&&!(1!=n.nodeType||o.test(n.nodeName||"")))c=c||d.data(a,"mediaelement"),h(a,c,s.preferFlash||p,f)};b(q).bind("ended",function(a){var c=d.data(a.target,"mediaelement");(!m||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()},1)});m||d.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var c=d.defineNodeNameProperty(a,
"load",{prop:{value:function(){var a=d.data(this,"mediaelement");w(this,a);k&&(!a||"html5"==a.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});t[a]=d.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(c){var f="";k&&t[a].prop._supvalue&&(f=t[a].prop._supvalue.call(this,c),"no"==f&&(f=""));!f&&u&&(c=b.trim((c||"").split(";")[0]),-1!=g.swfMimeTypes.indexOf(c)&&(f="maybe"));return f}}})});d.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=
this,b=d.data(a,"mediaelementBase")||d.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){w(a);a=null},9)}});i=function(){d.addReady(function(a,c){b("video, audio",a).add(c.filter("video, audio")).each(function(){b.browser.msie&&8<d.browserVersion&&b.prop(this,"paused")&&!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay])')?b(this).prop("preload","metadata").mediaLoad():w(this);if(k){var a,c,h=this,o=function(){var a=b.prop(h,
"buffered");if(a){for(var c="",e=0,f=a.length;e<f;e++)c+=a.end(e);return c}},g=function(){var a=o();a!=c&&(c=a,b(h).triggerHandler("progress"))};b(this).bind("play loadstart progress",function(b){"progress"==b.type&&(c=o());clearTimeout(a);a=setTimeout(g,999)}).bind("emptied stalled mediaerror abort suspend",function(b){"emptied"==b.type&&(c=!1);clearTimeout(a)})}})})};k?(d.isReady("mediaelement-core",!0),i(),u&&d.ready("WINDOWLOAD mediaelement",v)):d.ready("mediaelement-swf",i)})})(jQuery,Modernizr,
jQuery.webshims);
(function(b){var d=window.Modernizr,i=b.webshims,k=i.bugs,m=b('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),l=function(){if(m[0].querySelector)try{k.findRequired=!m[0].querySelector("select:required")}catch(b){k.findRequired=!1}};k.findRequired=!1;k.validationMessage=!1;k.valueAsNumberSet=!1;i.capturingEventPrevented=function(d){if(!d._isPolyfilled){var g=d.isDefaultPrevented,i=
d.preventDefault;d.preventDefault=function(){clearTimeout(b.data(d.target,d.type+"DefaultPrevented"));b.data(d.target,d.type+"DefaultPrevented",setTimeout(function(){b.removeData(d.target,d.type+"DefaultPrevented")},30));return i.apply(this,arguments)};d.isDefaultPrevented=function(){return!(!g.apply(this,arguments)&&!b.data(d.target,d.type+"DefaultPrevented"))};d._isPolyfilled=!0}};if(!d.formvalidation||k.bustedValidity)l();else if(i.capturingEvents(["input"]),i.capturingEvents(["invalid"],!0),d.bugfreeformvalidation=
!0,window.opera||b.browser.webkit||window.testGoodWithFix){var j=b("input",m).eq(0),r,q=function(b){i.loader.loadList(["dom-extend"]);i.ready("dom-extend",b)},p=function(g){var k=["form-extend","form-message","form-native-fix"];g&&(g.preventDefault(),g.stopImmediatePropagation());clearTimeout(r);setTimeout(function(){m&&(m.remove(),m=j=null)},9);if(!d.bugfreeformvalidation)i.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),i.modules["form-extend"].test=b.noop;i.isReady("form-number-date-api")&&
k.push("form-number-date-api");i.reTest(k);if(j)try{j.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&q(function(){i.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(d){!d&&this&&b.prop(this,"value",b.prop(this,"value"))}});i.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(d){if(!d&&this)d=b(this).val(),(b("option:last-child",this)[0]||{}).selected=!0,b(this).val(d)}})})}catch(l){}(b.browser.opera||window.testGoodWithFix)&&
q(function(){var g=function(b){b.preventDefault()};["form","input","textarea","select"].forEach(function(d){var j=i.defineNodeNameProperty(d,"checkValidity",{prop:{value:function(){i.fromSubmit||b(this).bind("invalid.checkvalidity",g);i.fromCheckValidity=!0;var h=j.prop._supvalue.apply(this,arguments);i.fromSubmit||b(this).unbind("invalid.checkvalidity",g);i.fromCheckValidity=!1;return h}}})});d.input.list&&!(b("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var g=b("select",this);if(g[0]&&g[0].options&&g[0].options.length)d=g[0].options}return d}}})})};m.appendTo("head");if(window.opera||window.testGoodWithFix){l();k.validationMessage=!j.prop("validationMessage");if((d.inputtypes||{}).date){try{j.prop("valueAsNumber",0)}catch(g){}k.valueAsNumberSet="1970-01-01"!=j.prop("value")}j.prop("value","")}m.bind("submit",function(b){d.bugfreeformvalidation=
!1;p(b)});r=setTimeout(function(){m&&m.triggerHandler("submit")},9);b("input, select",m).bind("invalid",p).filter('[type="submit"]').bind("click",function(b){b.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(b,d,i,k,m,l){var j={radio:1},r={checkbox:1,radio:1},q=b([]),p=d.bugs,g=function(h){var h=b(h),d,g;d=q;if(j[h[0].type])g=h.prop("form"),d=(d=h[0].name)?g?b(g[d]):b(k.getElementsByName(d)).filter(function(){return!b.prop(this,"form")}):h,d=d.filter('[type="radio"]');return d},s=d.getContentValidationMessage=function(h,d,g){var a=b(h).data("errormessage")||h.getAttribute("x-moz-errormessage")||"";g&&a[g]&&(a=a[g]);"object"==typeof a&&(d=d||b.prop(h,"validity")||
{valid:1},d.valid||b.each(d,function(b,e){if(e&&"valid"!=b&&a[b])return a=a[b],!1}));if("object"==typeof a)a=a.defaultMessage;return a||""},x={number:1,range:1,date:1};b.extend(b.expr.filters,{"valid-element":function(h){return!(!b.prop(h,"willValidate")||!(b.prop(h,"validity")||{valid:1}).valid)},"invalid-element":function(h){return!(!b.prop(h,"willValidate")||(b.prop(h,"validity")||{valid:1}).valid)},"required-element":function(h){return!(!b.prop(h,"willValidate")||!b.prop(h,"required"))},"optional-element":function(h){return!!(b.prop(h,
"willValidate")&&!1===b.prop(h,"required"))},"in-range":function(h){if(!x[b.prop(h,"type")]||!b.prop(h,"willValidate"))return!1;h=b.prop(h,"validity");return!(!h||h.rangeOverflow||h.rangeUnderflow)},"out-of-range":function(h){if(!x[b.prop(h,"type")]||!b.prop(h,"willValidate"))return!1;h=b.prop(h,"validity");return!(!h||!h.rangeOverflow&&!h.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(h){b.expr.filters[h]=b.expr.filters[h+"-element"]});b.expr.filters.focus=function(b){try{var d=
b.ownerDocument;return b===d.activeElement&&(!d.hasFocus||d.hasFocus())}catch(g){}return!1};var u=b.event.customEvent||{};(p.bustedValidity||p.findRequired)&&function(){var h=b.find,d=b.find.matchesSelector,g=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,a=function(a){return a+"-element"};b.find=function(){var b=Array.prototype.slice,e=function(e){var f=arguments,f=b.call(f,1,f.length);f.unshift(e.replace(g,a));return h.apply(this,f)},f;for(f in h)h.hasOwnProperty(f)&&
(e[f]=h[f]);return e}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",k.documentElement))b.find.matchesSelector=function(b,e){e=e.replace(g,a);return d.call(this,b,e)}}();var v=b.prop,t={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};b.prop=function(h,d,i){var a=v.apply(this,arguments);if(h&&"form"in h&&t[d]&&i!==m&&b(h).hasClass("form-ui-invalid")&&(b.prop(h,"validity")||{valid:1}).valid)b(h).getShadowElement().removeClass("form-ui-invalid"),"checked"==d&&i&&g(h).not(h).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return a};var y=function(d,g){var i;b.each(d,function(a,c){if(c)return i="customError"==a?b.prop(g,"validationMessage"):a,!1});return i};b(k).bind(l.validityUIEvents||"focusout change refreshvalidityui",function(d){if(d.target&&"submit"!=d.target.type&&b.prop(d.target,"willValidate")){var i=b.data(d.target,"webshimsswitchvalidityclass"),j=function(){var a=b(d.target).getNativeElement().trigger("refreshCustomValidityRules")[0],c=b.prop(a,"validity"),e=b(a).getShadowElement(),f,i,j,o;c.valid?e.hasClass("form-ui-valid")||
(f="form-ui-valid",i="form-ui-invalid",o="changedvaliditystate",j="changedvalid",r[a.type]&&a.checked&&g(a).not(a).removeClass(i).addClass(f).removeAttr("aria-invalid"),b.removeData(a,"webshimsinvalidcause")):(c=y(c,a),b.data(a,"webshimsinvalidcause")!=c&&(b.data(a,"webshimsinvalidcause",c),o="changedvaliditystate"),e.hasClass("form-ui-invalid")||(f="form-ui-invalid",i="form-ui-valid",r[a.type]&&!a.checked&&g(a).not(a).removeClass(i).addClass(f),j="changedinvalid"));f&&(e.addClass(f).removeClass(i),
setTimeout(function(){b(a).trigger(j)},0));o&&setTimeout(function(){b(a).trigger(o)},0);b.removeData(d.target,"webshimsswitchvalidityclass")};i&&clearTimeout(i);"refreshvalidityui"==d.type?j():b.data(d.target,"webshimsswitchvalidityclass",setTimeout(j,9))}});u.changedvaliditystate=!0;u.refreshCustomValidityRules=!0;u.changedvalid=!0;u.changedinvalid=!0;u.refreshvalidityui=!0;d.triggerInlineForm=function(d,g){b(d).trigger(g)};d.modules["form-core"].getGroupElements=g;p=function(){d.scrollRoot=b.browser.webkit||
"BackCompat"==k.compatMode?b(k.body):b(k.documentElement)};p();d.ready("DOM",p);d.getRelOffset=function(d,g){var d=b(d),i=b(g).offset(),a;b.swap(b(d)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){a=d.offset()});i.top-=a.top;i.left-=a.left;return i};d.validityAlert=function(){var h=!b.browser.msie||7<parseInt(b.browser.version,10)?"span":"label",g,j=!1,a=!1,c,e={hideDelay:5E3,showFor:function(d,h,k,q){e._create();var d=b(d),l=b(d).getShadowElement(),m=e.getOffsetFromBody(l);
e.clear();q?this.hide():(this.getMessage(d,h),this.position(l,m),g.css({fontSize:d.css("fontSize"),fontFamily:d.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(c,this.hideDelay)),b(i).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(a);a=setTimeout(function(){e.position(l)},9)}));k||this.setFocus(l,m)},getOffsetFromBody:function(a){return d.getRelOffset(g,a)},setFocus:function(a,e){var i=b(a).getShadowFocusElement(),j=d.scrollRoot.scrollTop(),
q=(e||i.offset()).top-30,l;d.getID&&"label"==h&&g.attr("for",d.getID(i));j>q&&(d.scrollRoot.animate({scrollTop:q-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(j-q)),80)}),l=!0);try{i[0].focus()}catch(m){}l&&(d.scrollRoot.scrollTop(j),setTimeout(function(){d.scrollRoot.scrollTop(j)},0));setTimeout(function(){b(k).bind("focusout.validityalert",c)},10)},getMessage:function(a,c){c||(c=s(a[0])||a.prop("validationMessage"));c?b("span.va-box",g).text(c):this.hide()},position:function(a,c){c=c?b.extend({},
c):e.getOffsetFromBody(a);c.top+=a.outerHeight();g.css(c)},show:function(){"none"===g.css("display")&&g.css({opacity:0}).show();g.addClass("va-visible").fadeTo(400,1)},hide:function(){g.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(j);b(k).unbind(".validityalert");b(i).unbind(".validityalert");g.stop().removeAttr("for")},_create:function(){if(!g)g=e.errorBubble=b("<"+h+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
h+">").css({position:"absolute",display:"none"}),d.ready("DOM",function(){g.appendTo("body");b.fn.bgIframe&&b.browser.msie&&7>parseInt(b.browser.version,10)&&g.bgIframe()})}};c=b.proxy(e,"hide");return e}();(function(){var d,g=[],i;b(k).bind("invalid",function(a){if(!a.wrongWebkitInvalid){var c=b(a.target),e=c.getShadowElement();e.hasClass("form-ui-invalid")||(e.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){b(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!d)d=b.Event("firstinvalid"),d.isInvalidUIPrevented=a.isDefaultPrevented,e=b.Event("firstinvalidsystem"),b(k).triggerHandler(e,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),c.trigger(d);d&&d.isDefaultPrevented()&&a.preventDefault();g.push(a.target);a.extraData="fix";clearTimeout(i);i=setTimeout(function(){var c={type:"lastinvalid",cancelable:!1,invalidlist:b(g)};d=!1;g=[];b(a.target).trigger(c,c)},9);e=c=null}})})();b.fn.getErrorMessage=function(){var d="",
g=this[0];g&&(d=s(g)||b.prop(g,"customValidationMessage")||b.prop(g,"validationMessage"));return d};l.replaceValidationUI&&d.ready("DOM",function(){b(k).bind("firstinvalid",function(d){d.isInvalidUIPrevented()||(d.preventDefault(),b.webshims.validityAlert.showFor(d.target,b(d.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(b,d,i,k,m,l){var j=d.validityMessages,i=l.overrideMessages||l.customMessages?["customValidationMessage"]:[];j.en=j.en||j["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(b){j.en.valueMissing[b]="Please select an option."});["date","time","datetime-local"].forEach(function(b){j.en.rangeUnderflow[b]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(b){j.en.rangeOverflow[b]=
"Value must be at or before {%max}."});j["en-US"]=j["en-US"]||j.en;j[""]=j[""]||j["en-US"];j.de=j.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(b){j.de.valueMissing[b]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(b){j.de.rangeUnderflow[b]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(b){j.de.rangeOverflow[b]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var r=
j[""];d.createValidationMessage=function(d,i){var g=r[i];g&&"string"!==typeof g&&(g=g[b.prop(d,"type")]||g[(d.nodeName||"").toLowerCase()]||g.defaultMessage);g&&"value,min,max,title,maxlength,label".split(",").forEach(function(i){if(-1!==g.indexOf("{%"+i)){var j=("label"==i?b.trim(b('label[for="'+d.id+'"]',d.form).text()).replace(/\*$|:$/,""):b.attr(d,i))||"";g=g.replace("{%"+i+"}",j);"value"==i&&(g=g.replace("{%valueLen}",j.length))}});return g||""};(d.bugs.validationMessage||!Modernizr.formvalidation||
d.bugs.bustedValidity)&&i.push("validationMessage");d.activeLang({langObj:j,module:"form-core",callback:function(b){r=b}});Modernizr.input.list&&!(b("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var i=b("select",this);if(i[0]&&i[0].options&&i[0].options.length)d=i[0].options}return d}}});i.forEach(function(i){d.defineNodeNamesProperty(["fieldset",
"output","button"],i,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(j){var g=d.defineNodeNameProperty(j,i,{prop:{get:function(){var i=this,j="";if(!b.prop(i,"willValidate"))return j;var k=b.prop(i,"validity")||{valid:1};if(k.valid||(j=d.getContentValidationMessage(i,k)))return j;if(k.customError&&i.nodeName&&(j=Modernizr.formvalidation&&!d.bugs.bustedValidity&&g.prop._supget?g.prop._supget.call(i):d.data(i,"customvalidationMessage")))return j;b.each(k,function(b,g){if("valid"!=
b&&g&&(j=d.createValidationMessage(i,b)))return!1});return j||""},writeable:!1}})})})});
