jQuery.webshims.register("form-extend",function(a,b,e,i,k,m){e=e.Modernizr;k=e.inputtypes;if(e.formvalidation&&!b.bugs.bustedValidity){var h=b.inputTypes,p={};b.addInputType=function(a,c){h[a]=c};b.addValidityRule=function(a,c){p[a]=c};b.addValidityRule("typeMismatch",function(a,c,g,b){if(""===c)return!1;b=b.typeMismatch;if(!("type"in g))g.type=(a[0].getAttribute("type")||"").toLowerCase();h[g.type]&&h[g.type].mismatch&&(b=h[g.type].mismatch(c,a));return b});var f=m.overrideMessages,l=!k.number||
!k.time||!k.range||f,n="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),m=f?["value","checked"]:["value"],d=[],o=function(c,b){if(c){var g=(c.getAttribute&&c.getAttribute("type")||c.type||"").toLowerCase();if(f||h[g])f&&!b&&"radio"==g&&c.name?a(i.getElementsByName(c.name)).each(function(){a.prop(this,"validity")}):a.prop(c,"validity")}},q={};["input","textarea","select"].forEach(function(c){var w=b.defineNodeNameProperty(c,
"setCustomValidity",{prop:{value:function(g){var g=g+"",d="input"==c?a(this).getNativeElement()[0]:this;w.prop._supvalue.call(d,g);b.bugs.validationMessage&&b.data(d,"customvalidationMessage",g);l&&(b.data(d,"hasCustomError",!!g),o(d))}}});q[c]=w.prop._supvalue});if(l||f)m.push("min"),m.push("max"),m.push("step"),d.push("input");f&&(m.push("required"),m.push("pattern"),d.push("select"),d.push("textarea"));if(l){var r;d.forEach(function(c){var d=b.defineNodeNameProperty(c,"validity",{prop:{get:function(){if(!r){var g=
"input"==c?a(this).getNativeElement()[0]:this,v=d.prop._supget.call(g);if(!v)return v;var j={};n.forEach(function(a){j[a]=v[a]});if(!a.prop(g,"willValidate"))return j;r=!0;var x=a(g),e={type:(g.getAttribute&&g.getAttribute("type")||"").toLowerCase(),nodeName:(g.nodeName||"").toLowerCase()},i=x.val(),o=!!b.data(g,"hasCustomError"),l;r=!1;j.customError=o;if(j.valid&&j.customError)j.valid=!1;else if(!j.valid){var k=!0;a.each(j,function(a,c){if(c)return k=!1});if(k)j.valid=!0}a.each(p,function(a,d){j[a]=
d(x,i,e,j);if(j[a]&&(j.valid||!l)&&(f||h[e.type]&&h[e.type].mismatch))q[c].call(g,b.createValidationMessage(g,a)),j.valid=!1,l=!0});j.valid?(q[c].call(g,""),b.data(g,"hasCustomError",!1)):f&&!l&&!o&&a.each(j,function(a,d){if("valid"!==a&&d)return q[c].call(g,b.createValidationMessage(g,a)),!1});return j}},writeable:!1}})});m.forEach(function(a){b.onNodeNamesPropertyModify(d,a,function(){o(this)})});if(i.addEventListener){var s,t=function(c){if("form"in c.target){var b=c.target.form;clearTimeout(s);
o(c.target);b&&f&&a("input",b).each(function(){"password"==this.type&&o(this)})}};i.addEventListener("change",t,!0);f&&(i.addEventListener("blur",t,!0),i.addEventListener("keydown",function(a){13==a.keyCode&&t(a)},!0));i.addEventListener("input",function(a){clearTimeout(s);s=setTimeout(function(){o(a.target)},290)},!0)}var c=d.join(",");b.addReady(function(b,d){a(c,b).add(d.filter(c)).each(function(){a.prop(this,"validity")})});f&&b.ready("DOM form-message",function(){b.activeLang({register:"form-core",
callback:function(){a("input, select, textarea").getNativeElement().each(function(){if(!b.data(this,"hasCustomError")){var c=this,d=a.prop(c,"validity")||{valid:!0},g;d.valid||(g=(c.nodeName||"").toLowerCase(),a.each(d,function(a,d){if("valid"!==a&&d)return q[g].call(c,b.createValidationMessage(c,a)),!1}))}})}})})}b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});e.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||
[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=this.options||[];if(!c.length){var b=a("select",this);if(b[0]&&b[0].options&&b[0].options.length)c=b[0].options}return c}}})}});
(function(a){var b=window.Modernizr,e=a.webshims,i=e.bugs,k=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),m=function(){if(k[0].querySelector)try{i.findRequired=!k[0].querySelector("select:required")}catch(a){i.findRequired=!1}};i.findRequired=!1;i.validationMessage=!1;i.valueAsNumberSet=!1;e.capturingEventPrevented=function(b){if(!b._isPolyfilled){var f=b.isDefaultPrevented,
h=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return h.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!f.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};b._isPolyfilled=!0}};if(!b.formvalidation||i.bustedValidity)m();else if(e.capturingEvents(["input"]),e.capturingEvents(["invalid"],!0),
b.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var h=a("input",k).eq(0),p,f=function(a){e.loader.loadList(["dom-extend"]);e.ready("dom-extend",a)},l=function(d){var i=["form-extend","form-message","form-native-fix"];d&&(d.preventDefault(),d.stopImmediatePropagation());clearTimeout(p);setTimeout(function(){k&&(k.remove(),k=h=null)},9);if(!b.bugfreeformvalidation)e.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),e.modules["form-extend"].test=a.noop;e.isReady("form-number-date-api")&&
i.push("form-number-date-api");e.reTest(i);if(h)try{h.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&f(function(){e.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(b){!b&&this&&a.prop(this,"value",a.prop(this,"value"))}});e.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(b){if(!b&&this)b=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(b)}})})}catch(l){}(a.browser.opera||window.testGoodWithFix)&&
f(function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(b){var f=e.defineNodeNameProperty(b,"checkValidity",{prop:{value:function(){e.fromSubmit||a(this).bind("invalid.checkvalidity",d);e.fromCheckValidity=!0;var c=f.prop._supvalue.apply(this,arguments);e.fromSubmit||a(this).unbind("invalid.checkvalidity",d);e.fromCheckValidity=!1;return c}}})});b.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
e.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}})})};k.appendTo("head");if(window.opera||window.testGoodWithFix){m();i.validationMessage=!h.prop("validationMessage");if((b.inputtypes||{}).date){try{h.prop("valueAsNumber",0)}catch(n){}i.valueAsNumberSet="1970-01-01"!=h.prop("value")}h.prop("value","")}k.bind("submit",function(a){b.bugfreeformvalidation=
!1;l(a)});p=setTimeout(function(){k&&k.triggerHandler("submit")},9);a("input, select",k).bind("invalid",l).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,e,i,k,m){var h={radio:1},p={checkbox:1,radio:1},f=a([]),l=b.bugs,n=function(c){var c=a(c),b,d;b=f;if(h[c[0].type])d=c.prop("form"),b=(b=c[0].name)?d?a(d[b]):a(i.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):c,b=b.filter('[type="radio"]');return b},d=b.getContentValidationMessage=function(c,b,d){var g=a(c).data("errormessage")||c.getAttribute("x-moz-errormessage")||"";d&&g[d]&&(g=g[d]);"object"==typeof g&&(b=b||a.prop(c,"validity")||
{valid:1},b.valid||a.each(b,function(a,c){if(c&&"valid"!=a&&g[a])return g=g[a],!1}));if("object"==typeof g)g=g.defaultMessage;return g||""},o={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,
"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!o[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!o[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(c){a.expr.filters[c]=a.expr.filters[c+"-element"]});a.expr.filters.focus=function(a){try{var b=
a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())}catch(d){}return!1};var q=a.event.customEvent||{};(l.bustedValidity||l.findRequired)&&function(){var c=a.find,b=a.find.matchesSelector,d=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,g=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var f=arguments,f=a.call(f,1,f.length);f.unshift(b.replace(d,g));return c.apply(this,f)},f;for(f in c)c.hasOwnProperty(f)&&
(b[f]=c[f]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",i.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(d,g);return b.call(this,a,c)}}();var r=a.prop,s={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,d){var g=r.apply(this,arguments);if(c&&"form"in c&&s[b]&&d!==k&&a(c).hasClass("form-ui-invalid")&&(a.prop(c,"validity")||{valid:1}).valid)a(c).getShadowElement().removeClass("form-ui-invalid"),"checked"==b&&d&&n(c).not(c).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return g};var t=function(c,b){var d;a.each(c,function(c,f){if(f)return d="customError"==c?a.prop(b,"validationMessage"):c,!1});return d};a(i).bind(m.validityUIEvents||"focusout change refreshvalidityui",function(c){if(c.target&&"submit"!=c.target.type&&a.prop(c.target,"willValidate")){var b=a.data(c.target,"webshimsswitchvalidityclass"),d=function(){var b=a(c.target).getNativeElement().trigger("refreshCustomValidityRules")[0],d=a.prop(b,"validity"),f=a(b).getShadowElement(),h,e,i,u;d.valid?f.hasClass("form-ui-valid")||
(h="form-ui-valid",e="form-ui-invalid",u="changedvaliditystate",i="changedvalid",p[b.type]&&b.checked&&n(b).not(b).removeClass(e).addClass(h).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(d=t(d,b),a.data(b,"webshimsinvalidcause")!=d&&(a.data(b,"webshimsinvalidcause",d),u="changedvaliditystate"),f.hasClass("form-ui-invalid")||(h="form-ui-invalid",e="form-ui-valid",p[b.type]&&!b.checked&&n(b).not(b).removeClass(e).addClass(h),i="changedinvalid"));h&&(f.addClass(h).removeClass(e),
setTimeout(function(){a(b).trigger(i)},0));u&&setTimeout(function(){a(b).trigger(u)},0);a.removeData(c.target,"webshimsswitchvalidityclass")};b&&clearTimeout(b);"refreshvalidityui"==c.type?d():a.data(c.target,"webshimsswitchvalidityclass",setTimeout(d,9))}});q.changedvaliditystate=!0;q.refreshCustomValidityRules=!0;q.changedvalid=!0;q.changedinvalid=!0;q.refreshvalidityui=!0;b.triggerInlineForm=function(b,d){a(b).trigger(d)};b.modules["form-core"].getGroupElements=n;l=function(){b.scrollRoot=a.browser.webkit||
"BackCompat"==i.compatMode?a(i.body):a(i.documentElement)};l();b.ready("DOM",l);b.getRelOffset=function(b,d){var b=a(b),f=a(d).offset(),g;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){g=b.offset()});f.top-=g.top;f.left-=g.left;return f};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",f,h=!1,g=!1,l,j={hideDelay:5E3,showFor:function(b,c,d,i){j._create();var b=a(b),n=a(b).getShadowElement(),o=j.getOffsetFromBody(n);
j.clear();i?this.hide():(this.getMessage(b,c),this.position(n,o),f.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(h=setTimeout(l,this.hideDelay)),a(e).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(g);g=setTimeout(function(){j.position(n)},9)}));d||this.setFocus(n,o)},getOffsetFromBody:function(a){return b.getRelOffset(f,a)},setFocus:function(d,g){var h=a(d).getShadowFocusElement(),e=b.scrollRoot.scrollTop(),
j=(g||h.offset()).top-30,n;b.getID&&"label"==c&&f.attr("for",b.getID(h));e>j&&(b.scrollRoot.animate({scrollTop:j-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(e-j)),80)}),n=!0);try{h[0].focus()}catch(o){}n&&(b.scrollRoot.scrollTop(e),setTimeout(function(){b.scrollRoot.scrollTop(e)},0));setTimeout(function(){a(i).bind("focusout.validityalert",l)},10)},getMessage:function(b,c){c||(c=d(b[0])||b.prop("validationMessage"));c?a("span.va-box",f).text(c):this.hide()},position:function(b,c){c=c?a.extend({},
c):j.getOffsetFromBody(b);c.top+=b.outerHeight();f.css(c)},show:function(){"none"===f.css("display")&&f.css({opacity:0}).show();f.addClass("va-visible").fadeTo(400,1)},hide:function(){f.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(h);a(i).unbind(".validityalert");a(e).unbind(".validityalert");f.stop().removeAttr("for")},_create:function(){if(!f)f=j.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
c+">").css({position:"absolute",display:"none"}),b.ready("DOM",function(){f.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&f.bgIframe()})}};l=a.proxy(j,"hide");return j}();(function(){var b,d=[],f;a(i).bind("invalid",function(g){if(!g.wrongWebkitInvalid){var h=a(g.target),e=h.getShadowElement();e.hasClass("form-ui-invalid")||(e.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(g.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=g.isDefaultPrevented,e=a.Event("firstinvalidsystem"),a(i).triggerHandler(e,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),h.trigger(b);b&&b.isDefaultPrevented()&&g.preventDefault();d.push(g.target);g.extraData="fix";clearTimeout(f);f=setTimeout(function(){var f={type:"lastinvalid",cancelable:!1,invalidlist:a(d)};b=!1;d=[];a(g.target).trigger(f,f)},9);e=h=null}})})();a.fn.getErrorMessage=function(){var b="",
f=this[0];f&&(b=d(f)||a.prop(f,"customValidationMessage")||a.prop(f,"validationMessage"));return b};m.replaceValidationUI&&b.ready("DOM",function(){a(i).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,e,i,k,m){var h=b.validityMessages,e=m.overrideMessages||m.customMessages?["customValidationMessage"]:[];h.en=h.en||h["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){h.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){h.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){h.en.rangeOverflow[a]=
"Value must be at or before {%max}."});h["en-US"]=h["en-US"]||h.en;h[""]=h[""]||h["en-US"];h.de=h.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){h.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){h.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){h.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var p=
h[""];b.createValidationMessage=function(b,h){var e=p[h];e&&"string"!==typeof e&&(e=e[a.prop(b,"type")]||e[(b.nodeName||"").toLowerCase()]||e.defaultMessage);e&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==e.indexOf("{%"+d)){var h=("label"==d?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,d))||"";e=e.replace("{%"+d+"}",h);"value"==d&&(e=e.replace("{%valueLen}",h.length))}});return e||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&e.push("validationMessage");b.activeLang({langObj:h,module:"form-core",callback:function(a){p=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var e=a("select",this);if(e[0]&&e[0].options&&e[0].options.length)b=e[0].options}return b}}});e.forEach(function(f){b.defineNodeNamesProperty(["fieldset",
"output","button"],f,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(e){var h=b.defineNodeNameProperty(e,f,{prop:{get:function(){var d=this,e="";if(!a.prop(d,"willValidate"))return e;var f=a.prop(d,"validity")||{valid:1};if(f.valid||(e=b.getContentValidationMessage(d,f)))return e;if(f.customError&&d.nodeName&&(e=Modernizr.formvalidation&&!b.bugs.bustedValidity&&h.prop._supget?h.prop._supget.call(d):b.data(d,"customvalidationMessage")))return e;a.each(f,function(a,f){if("valid"!=
a&&f&&(e=b.createValidationMessage(d,a)))return!1});return e||""},writeable:!1}})})})});
