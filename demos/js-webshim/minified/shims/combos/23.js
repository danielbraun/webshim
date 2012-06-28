(function(a,c,q){var m=c.audio&&c.video,p=!1;if(m)a=document.createElement("video"),c.videoBuffered="buffered"in a,p="loop"in a,q.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),c.videoBuffered||(q.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:c.videoBuffered,d:["dom-support"]}),q.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(a,c,k,v,r){var f=c.mediaelement,s=c.cfg.mediaelement,
n=function(b,c){var b=a(b),l={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!l.src)return l;var i=b.attr("type");if(i)l.type=i,l.container=a.trim(i.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i=f.getTypeForSrc(l.src,c))l.type=i,l.container=i;if(i=b.attr("media"))l.media=i;return l},w=swfobject.hasFlashPlayerVersion("9.0.115"),o=function(){c.ready("mediaelement-swf",function(){if(!f.createSWF)c.modules["mediaelement-swf"].test=
a.noop,c.reTest(["mediaelement-swf"],m)})};f.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf",
"asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};f.mimeTypes.source=a.extend({},f.mimeTypes.audio,f.mimeTypes.video);f.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||-1!=b.indexOf("youtube.com/v/"))return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],l;a.each(f.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return l=a,!1});return l};f.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),
a.isArray(c)||(c=[c]),c.forEach(function(a){var c=v.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var c=[],l=b[0].nodeName.toLowerCase(),i=n(b,l);i.src?c.push(i):a("source",b).each(function(){i=n(this,l);i.src&&c.push(i)});return c}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==r&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));f.srces(this,
b);a(this).mediaLoad()})};f.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");f.canSwfPlaySrces=function(b,c){var l="";w&&(b=a(b),c=c||f.srces(b),a.each(c,function(a,b){if(b.container&&b.src&&-1!=f.swfMimeTypes.indexOf(b.container))return l=b,!1}));return l};var b={};f.canNativePlaySrces=function(c,
d){var l="";if(m){var c=a(c),i=(c[0].nodeName||"").toLowerCase();if(!b[i])return l;d=d||f.srces(c);a.each(d,function(a,d){if(d.type&&b[i].prop._supvalue.call(c[0],d.type))return l=d,!1})}return l};f.setError=function(b,d){d||(d="can't play sources");a(b).pause().data("mediaerror",d);c.warn("mediaelementError: "+d);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var j=function(){var a;return function(b,l,i){c.ready("mediaelement-swf",function(){f.createSWF?f.createSWF(b,
l,i):a||(a=!0,o(),j(b,l,i))})}}(),d=function(a,b,c,i,t){c||!1!==c&&b&&"flash"==b.isActive?(c=f.canSwfPlaySrces(a,i))?j(a,c,b):t?f.setError(a,!1):d(a,b,!1,i,!0):(c=f.canNativePlaySrces(a,i))?b&&"flash"==b.isActive&&f.setActive(a,"html5",b):t?(f.setError(a,!1),b&&"flash"==b.isActive&&f.setActive(a,"html5",b)):d(a,b,!0,i,!0)},y=/^(?:embed|object|datalist)$/i,x=function(b,j){var l=c.data(b,"mediaelementBase")||c.data(b,"mediaelementBase",{}),i=f.srces(b),t=b.parentNode;clearTimeout(l.loadTimer);a.data(b,
"mediaerror",!1);if(i.length&&t&&!(1!=t.nodeType||y.test(t.nodeName||"")))j=j||c.data(b,"mediaelement"),d(b,j,s.preferFlash||r,i)};a(v).bind("ended",function(b){var d=c.data(b.target,"mediaelement");(!p||d&&"html5"!=d.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});p||c.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(d){var j=c.defineNodeNameProperty(d,
"load",{prop:{value:function(){var b=c.data(this,"mediaelement");x(this,b);m&&(!b||"html5"==b.isActive)&&j.prop._supvalue&&j.prop._supvalue.apply(this,arguments)}}});b[d]=c.defineNodeNameProperty(d,"canPlayType",{prop:{value:function(c){var i="";m&&b[d].prop._supvalue&&(i=b[d].prop._supvalue.call(this,c),"no"==i&&(i=""));!i&&w&&(c=a.trim((c||"").split(";")[0]),-1!=f.swfMimeTypes.indexOf(c)&&(i="maybe"));return i}}})});c.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=
this,a=c.data(b,"mediaelementBase")||c.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){x(b);b=null},9)}});k=function(){c.addReady(function(b,d){a("video, audio",b).add(d.filter("video, audio")).each(function(){a.browser.msie&&8<c.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():x(this);if(m){var b,i,d=this,j=function(){var b=a.prop(d,
"buffered");if(b){for(var c="",i=0,j=b.length;i<j;i++)c+=b.end(i);return c}},f=function(){var b=j();b!=i&&(i=b,a(d).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==a.type&&(i=j());clearTimeout(b);b=setTimeout(f,999)}).bind("emptied stalled mediaerror abort suspend",function(a){"emptied"==a.type&&(i=!1);clearTimeout(b)})}})})};m?(c.isReady("mediaelement-core",!0),k(),w&&c.ready("WINDOWLOAD mediaelement",o)):c.ready("mediaelement-swf",k)})})(jQuery,Modernizr,
jQuery.webshims);
jQuery.webshims.register("form-message",function(a,c,q,m,p,h){var g=c.validityMessages,q=h.overrideMessages||h.customMessages?["customValidationMessage"]:[];g.en=g.en||g["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){g.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){g.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){g.en.rangeOverflow[a]=
"Value must be at or before {%max}."});g["en-US"]=g["en-US"]||g.en;g[""]=g[""]||g["en-US"];g.de=g.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){g.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){g.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){g.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var k=
g[""];c.createValidationMessage=function(c,g){var f=k[g];f&&"string"!==typeof f&&(f=f[a.prop(c,"type")]||f[(c.nodeName||"").toLowerCase()]||f.defaultMessage);f&&"value,min,max,title,maxlength,label".split(",").forEach(function(g){if(-1!==f.indexOf("{%"+g)){var n=("label"==g?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.attr(c,g))||"";f=f.replace("{%"+g+"}",n);"value"==g&&(f=f.replace("{%valueLen}",n.length))}});return f||""};(c.bugs.validationMessage||!Modernizr.formvalidation||
c.bugs.bustedValidity)&&q.push("validationMessage");c.activeLang({langObj:g,module:"form-core",callback:function(a){k=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=this.options||[];if(!c.length){var g=a("select",this);if(g[0]&&g[0].options&&g[0].options.length)c=g[0].options}return c}}});q.forEach(function(g){c.defineNodeNamesProperty(["fieldset",
"output","button"],g,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(h){var f=c.defineNodeNameProperty(h,g,{prop:{get:function(){var g=this,h="";if(!a.prop(g,"willValidate"))return h;var k=a.prop(g,"validity")||{valid:1};if(k.valid||(h=c.getContentValidationMessage(g,k)))return h;if(k.customError&&g.nodeName&&(h=Modernizr.formvalidation&&!c.bugs.bustedValidity&&f.prop._supget?f.prop._supget.call(g):c.data(g,"customvalidationMessage")))return h;a.each(k,function(a,b){if("valid"!=
a&&b&&(h=c.createValidationMessage(g,a)))return!1});return h||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,c,q,m){c.inputTypes=c.inputTypes||{};var p=c.cfg.forms,h,g=c.inputTypes,k={radio:1,checkbox:1};c.addInputType=function(b,a){g[b]=a};var v={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},r={valueMissing:function(b,j,d){if(!b.prop("required"))return!1;var g=!1;if(!("type"in d))d.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();if("select"==d.nodeName){if(j=!j)if(!(j=0>b[0].selectedIndex))b=b[0],j="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=j}else b=k[d.type]?"checkbox"==d.type?!b.is(":checked"):!c.modules["form-core"].getGroupElements(b).filter(":checked")[0]:!j;return b},tooLong:function(){return!1},typeMismatch:function(b,a,c){if(""===a||"select"==c.nodeName)return!1;var f=!1;if(!("type"in c))c.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();
if(g[c.type]&&g[c.type].mismatch)f=g[c.type].mismatch(a,b);else if("validity"in b[0])f=b[0].validity.typeMismatch;return f},patternMismatch:function(a,j,d){if(""===j||"select"==d.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(g){c.error('invalid pattern value: "'+a+'" | '+g),a=!1}return!a?!1:!a.test(j)}};c.addValidityRule=function(a,c){r[a]=c};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=
this.form||this;if(!a.data(b,"invalidEventShim")&&(a(b).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),c.moveToFirstEvent(b,"submit"),c.bugs.bustedValidity&&a.nodeName(b,"form"))){var j=b.getAttribute("novalidate");b.setAttribute("novalidate","novalidate");c.data(b,"bustedNoValidate",null==j?null:j)}},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){h=!0;b.testedValidity=
!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),h=!1;h=!1}}};a(m).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var f=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return f.apply(this,arguments)}});c.addInputType("email",{mismatch:function(){var a=p.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return function(c){return!a.test(c)}}()});c.addInputType("url",{mismatch:function(){var a=p.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}});c.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},v)}}},"prop");var s=function(b){var j,d=a.prop(b,"validity");if(d)a.data(b,"cachedValidity",
d);else return!0;if(!d.valid){j=a.Event("invalid");var g=a(b).trigger(j);if(h&&!s.unhandledInvalids&&!j.isDefaultPrevented())c.validityAlert.showFor(g),s.unhandledInvalids=!0}a.removeData(b,"cachedValidity");return d.valid};c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=!0,j=a("input,textarea,select",this).filter(function(){var a=c.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});s.unhandledInvalids=!1;for(var d=0,g=j.length;d<g;d++)s(j[d])||
(b=!1);return b}}});c.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){s.unhandledInvalids=!1;return s(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){a.removeData(this,"cachedValidity");c.data(this,"customvalidationMessage",""+b)}},willValidate:{set:a.noop,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.disabled||c.readOnly||b[c.type])}}()},validity:{set:a.noop,get:function(){var b=
a(this).getNativeElement(),j=b[0],d=a.data(j,"cachedValidity");if(d)return d;d=a.extend({},v);if(!a.prop(j,"willValidate")||"submit"==j.type)return d;var g=b.val(),f={nodeName:j.nodeName.toLowerCase()};d.customError=!!c.data(j,"customvalidationMessage");if(d.customError)d.valid=!1;a.each(r,function(a,c){if(c(b,g,f))d[a]=!0,d.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",d.valid?"false":"true");j=b=null;return d}}},"prop");c.defineNodeNamesBooleanProperty(["input","textarea","select"],
"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<c.browserVersion});c.reflectProperties(["input"],["pattern"]);if(!("maxLength"in m.createElement("textarea"))){var n=function(){var b,c=0,d=a([]),g=1E9,f=function(){var a=d.prop("value"),b=a.length;b>c&&b>g&&(b=Math.max(c,g),d.prop("value",a.substr(0,b)));c=b},h=function(){clearTimeout(b);d.unbind(".maxlengthconstraint")};return function(k,l){h();if(-1<l)g=l,c=a.prop(k,"value").length,
d=a(k),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(f,0)}),d.bind("keyup.maxlengthconstraint",f),d.bind("blur.maxlengthconstraint",h),b=setInterval(f,200)}}();n.update=function(b,c){a(b).is(":focus")&&(null==c&&(c=a.prop(b,"maxlength")),n(e.target,c))};a(m).bind("focusin",function(b){var c;"TEXTAREA"==b.target.nodeName&&-1<(c=a.prop(b.target,"maxlength"))&&n(b.target,c)});c.defineNodeNameProperty("textarea",
"maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);n.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);n.update(this,a)}else this.setAttribute("maxlength","0"),n.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});c.defineNodeNameProperty("textarea",
"maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var w={submit:1,button:1,image:1},o={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c=
"form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),d="form"+b.name,g=b.name,f="click.webshimssubmittermutate"+g,h=function(){if("form"in this&&w[this.type]){var f=a.prop(this,"form");if(f){var i=a.attr(this,d);if(null!=i&&(!b.limitedTo||i.toLowerCase()===a.prop(this,c))){var t=a.attr(f,g);a.attr(f,g,i);setTimeout(function(){if(null!=t)a.attr(f,g,t);else try{a(f).removeAttr(g)}catch(b){f.removeAttribute(g)}},9)}}}};switch(b.proptype){case "url":var k=m.createElement("form");
o[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);if(null==b)return"";k.setAttribute("action",b);return k.action}}};break;case "boolean":o[c]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":o[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var c=a.attr(this,d);return!c||(c=c.toLowerCase())&&!b.limitedTo[c]?b.defaultProp:
c}}};break;default:o[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);return null!=b?b:""}}}}o[d]||(o[d]={});o[d].attr={set:function(b){o[d].attr._supset.call(this,b);a(this).unbind(f).bind(f,h)},get:function(){return o[d].attr._supget.call(this)}};o[d].initAttr=!0;o[d].removeAttr={value:function(){a(this).unbind(f);o[d].removeAttr._supvalue.call(this)}}});c.defineNodeNamesProperties(["input","button"],o);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?
c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):c.bugs.bustedValidity&&(c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){c.data(this,"bustedNoValidate",""+a)},get:function(){var a=c.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){c.data(this,"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow",
"stepMismatch"],function(a,c){r[c]=function(a){return(a[0].validity||{})[c]||!1}}));c.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},c={date:1,time:1,"datetime-local":1},d={focusout:1,blur:1},g={updateInput:1,change:1},f=function(a){var c,f=!0,i=a.prop("value"),t=
i,u=function(c){if(a){var d=a.prop("value");d!==i&&(i=d,(!c||!b[c.type])&&a.trigger("input"));c&&g[c.type]&&(t=d);!f&&d!==t&&a.trigger("change")}},h,j=function(b){clearInterval(c);setTimeout(function(){b&&d[b.type]&&(f=!1);a&&(a.unbind("focusout blur",j).unbind("input change updateInput",u),u());a=null},1)};clearInterval(c);c=setInterval(u,160);clearTimeout(h);h=setTimeout(u,9);a.unbind("focusout blur",j).unbind("input change updateInput",u);a.bind("focusout blur",j).bind("input updateInput change",
u)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(m).bind("focusin",function(b){b.target&&c[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&f(a(b.target))})}();c.addReady(function(b,c){var d;a("form",b).add(c.filter("form")).bind("invalid",a.noop);try{if(b==m&&!("form"in(m.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&d.offsetHeight&&d.offsetWidth&&d.focus()}catch(g){}});(function(){Modernizr.textareaPlaceholder=
!!("placeholder"in a("<textarea />")[0]);var b=a.browser.webkit&&Modernizr.textareaPlaceholder;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||b){var g="over"==c.cfg.forms.placeholderType,d=["textarea"];Modernizr.input.placeholder||d.push("input");var f=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},h=function(b,c,d,h){!1===d&&(d=a.prop(b,"value"));
if(!g&&"password"!=b.type){if(!d&&h&&f(b)){var k;a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(k),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){f(b);clearTimeout(k);k=setTimeout(function(){f(b)},
9)}).bind("blur.placeholderremove",function(){clearTimeout(k);a(b).unbind(".placeholderremove")});return}b.value=d}else if(!d&&h){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))c.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}c.box.removeClass("placeholder-visible")},
k=function(b,c,d,f,k){if(!f&&(f=a.data(b,"placeHolder"),!f))return;a(b).unbind(".placeholderremove");if("focus"==k||!k&&a(b).is(":focus"))("password"==b.type||g||a(b).hasClass("placeholder-visible"))&&h(b,f,"",!0);else if(!1===c&&(c=a.prop(b,"value")),c)h(b,f,c);else if(!1===d&&(d=a.attr(b,"placeholder")||""),d&&!c){c=f;!1===d&&(d=a.prop(b,"placeholder"));if(!g&&"password"!=b.type)b.value=d;c.box.addClass("placeholder-visible")}else h(b,f,c)},n=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&
!b.attr("aria-labelledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},l=function(){var b={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var c=a.data(b,"placeHolder");if(c)return c;c=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){k(this,!1,!1,c,a.type);c.box["focus"==
a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){k(b,!1,!1,c,a.type)},0)});if("password"==b.type||g){c.text=n(b);c.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(b).bind("mousedown.placeholder",function(){k(this,!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(d,f){var g=(parseInt(a.curCSS(b,
"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+f),10)||0,0)+(parseInt(a.curCSS(b,"border"+f+"Width"),10)||0);c.text.css("padding"+f,g)});a.curCSS(b,"lineHeight");var d={width:a(b).width(),height:a(b).height()},f=a.curCSS(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(d,f){var g=a.curCSS(b,f);c.text.css(f)!=g&&c.text.css(f,g)});d.width&&d.height&&c.text.css(d);"none"!==f&&c.box.addClass("placeholder-box-"+f)}else d=function(d){a(b).hasClass("placeholder-visible")&&
(h(b,c,""),d&&"submit"==d.type&&setTimeout(function(){d.isDefaultPrevented()&&k(b,!1,!1,c)},9))},a(q).bind("beforeunload",d),c.box=a(b),b.form&&a(b.form).submit(d);return c},update:function(d,f){if(!b[a.prop(d,"type")]&&!a.nodeName(d,"textarea"))c.warn("placeholder not allowed on type: "+a.prop(d,"type"));else{var g=l.create(d);g.text&&g.text.text(f);k(d,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:l};d.forEach(function(a){c.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b?(c.data(this,
"textareaPlaceholder",a),this.placeholder=""):c.contentAttr(this,"placeholder",a);l.update(this,a)},get:function(){return(b?c.data(this,"textareaPlaceholder"):"")||c.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});d.forEach(function(d){var f={},g;["attr","prop"].forEach(function(d){f[d]={set:function(f){var h;b&&(h=c.data(this,"textareaPlaceholder"));h||(h=c.contentAttr(this,"placeholder"));a.removeData(this,"cachedValidity");var i=g[d]._supset.call(this,f);h&&"value"in this&&k(this,
f,h);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":g[d]._supget.call(this)}}});g=c.defineNodeNameProperty(d,"value",f)})}})()});
jQuery.webshims.ready("dom-support",function(a,c,q,m){(function(){if(!("value"in m.createElement("output"))){c.defineNodeNameProperty("output","value",{prop:{set:function(c){var g=a.data(this,"outputShim");g||(g=p(this));g(c)},get:function(){return c.contentAttr(this,"value")||a(this).text()||""}}});c.onNodeNamesPropertyModify("input","value",function(c,g,k){"removeAttr"!=k&&(g=a.data(this,"outputShim"))&&g(c)});var p=function(h){if(!h.getAttribute("aria-live")){var h=a(h),g=(h.text()||"").trim(),
k=h.attr("id"),p=h.attr("for"),r=a('<input class="output-shim" type="text" disabled name="'+(h.attr("name")||"")+'" value="'+g+'" style="display: none !important;" />').insertAfter(h),f=r[0].form||m,s=function(a){r[0].value=a;a=r[0].value;h.text(a);c.contentAttr(h[0],"value",a)};h[0].defaultValue=g;c.contentAttr(h[0],"value",g);h.attr({"aria-live":"polite"});k&&(r.attr("id",k),h.attr("aria-labelledby",c.getID(a('label[for="'+k+'"]',f))));p&&(k=c.getID(h),p.split(" ").forEach(function(a){(a=m.getElementById(a))&&
a.setAttribute("aria-controls",k)}));h.data("outputShim",s);r.data("outputShim",s);return s}};c.addReady(function(c,g){a("output",c).add(g.filter("output")).each(function(){p(this)})})}})();(function(){var p={updateInput:1,input:1},h={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},g=function(a){var g,h=a.prop("value"),f=function(f){if(a){var b=a.prop("value");b!==h&&(h=b,(!f||!p[f.type])&&c.triggerInlineForm&&c.triggerInlineForm(a[0],"input"))}},m,n=function(){clearTimeout(m);
m=setTimeout(f,9)},q=function(){a.unbind("focusout",q).unbind("keyup keypress keydown paste cut",n).unbind("input change updateInput",f);clearInterval(g);setTimeout(function(){f();a=null},1)};clearInterval(g);g=setInterval(f,99);n();a.bind("keyup keypress keydown paste cut",n).bind("focusout",q).bind("input updateInput change",f)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(m).bind("focusin",function(c){c.target&&c.target.type&&!c.target.readOnly&&!c.target.disabled&&"input"==(c.target.nodeName||
"").toLowerCase()&&!h[c.target.type]&&g(a(c.target))})})();c.isReady("form-output",!0)});
