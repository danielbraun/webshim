jQuery.webshims.register("form-message",function(a,b,n,i,q,d){var c=b.validityMessages,n=d.overrideMessages||d.customMessages?["customValidationMessage"]:[];c.en=c.en||c["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){c.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){c.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){c.en.rangeOverflow[a]=
"Value must be at or before {%max}."});c["en-US"]=c["en-US"]||c.en;c[""]=c[""]||c["en-US"];c.de=c.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){c.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){c.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){c.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var g=
c[""];b.createValidationMessage=function(b,c){var d=g[c];d&&"string"!==typeof d&&(d=d[a.prop(b,"type")]||d[(b.nodeName||"").toLowerCase()]||d.defaultMessage);d&&"value,min,max,title,maxlength,label".split(",").forEach(function(c){if(-1!==d.indexOf("{%"+c)){var j=("label"==c?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,c))||"";d=d.replace("{%"+c+"}",j);"value"==c&&(d=d.replace("{%valueLen}",j.length))}});return d||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&n.push("validationMessage");b.activeLang({langObj:c,module:"form-core",callback:function(a){g=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}});n.forEach(function(c){b.defineNodeNamesProperty(["fieldset",
"output","button"],c,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(d){var g=b.defineNodeNameProperty(d,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var i=a.prop(c,"validity")||{valid:1};if(i.valid||(d=b.getContentValidationMessage(c,i)))return d;if(i.customError&&c.nodeName&&(d=Modernizr.formvalidation&&!b.bugs.bustedValidity&&g.prop._supget?g.prop._supget.call(c):b.data(c,"customvalidationMessage")))return d;a.each(i,function(a,f){if("valid"!=
a&&f&&(d=b.createValidationMessage(c,a)))return!1});return d||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,b,n,i){b.inputTypes=b.inputTypes||{};var q=b.cfg.forms,d,c=b.inputTypes,g={radio:1,checkbox:1};b.addInputType=function(a,b){c[a]=b};var t={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},o={valueMissing:function(f,p,h){if(!f.prop("required"))return!1;var c=!1;if(!("type"in h))h.type=(f[0].getAttribute("type")||
f[0].type||"").toLowerCase();if("select"==h.nodeName){if(p=!p)if(!(p=0>f[0].selectedIndex))f=f[0],p="select-one"==f.type&&2>f.size?!!a("> option:first-child",f).prop("selected"):!1;f=p}else f=g[h.type]?"checkbox"==h.type?!f.is(":checked"):!b.modules["form-core"].getGroupElements(f).filter(":checked")[0]:!p;return f},tooLong:function(){return!1},typeMismatch:function(a,b,h){if(""===b||"select"==h.nodeName)return!1;var d=!1;if(!("type"in h))h.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
if(c[h.type]&&c[h.type].mismatch)d=c[h.type].mismatch(b,a);else if("validity"in a[0])d=a[0].validity.typeMismatch;return d},patternMismatch:function(a,p,h){if(""===p||"select"==h.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(c){b.error('invalid pattern value: "'+a+'" | '+c),a=!1}return!a?!1:!a.test(p)}};b.addValidityRule=function(a,b){o[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var f=
this.form||this;if(!a.data(f,"invalidEventShim")&&(a(f).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(f,"submit"),b.bugs.bustedValidity&&a.nodeName(f,"form"))){var c=f.getAttribute("novalidate");f.setAttribute("novalidate","novalidate");b.data(f,"bustedNoValidate",null==c?null:c)}},teardown:a.noop,handler:function(f){if(!("submit"!=f.type||f.testedValidity||!f.originalEvent||!a.nodeName(f.target,"form")||a.prop(f.target,"noValidate"))){d=!0;f.testedValidity=
!0;if(!a(f.target).checkValidity())return f.stopImmediatePropagation(),d=!1;d=!1}}};a(i).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var w=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return w.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=q.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return function(b){return!a.test(b)}}()});b.addInputType("url",{mismatch:function(){var a=q.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},t)}}},"prop");var k=function(f){var c,h=a.prop(f,"validity");if(h)a.data(f,"cachedValidity",
h);else return!0;if(!h.valid){c=a.Event("invalid");var g=a(f).trigger(c);if(d&&!k.unhandledInvalids&&!c.isDefaultPrevented())b.validityAlert.showFor(g),k.unhandledInvalids=!0}a.removeData(f,"cachedValidity");return h.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var f=!0,c=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});k.unhandledInvalids=!1;for(var h=0,d=c.length;h<d;h++)k(c[h])||
(f=!1);return f}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){k.unhandledInvalids=!1;return k(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(f){a.removeData(this,"cachedValidity");b.data(this,"customvalidationMessage",""+f)}},willValidate:{set:a.noop,get:function(){var f={button:1,reset:1,hidden:1,image:1};return function(){var b=a(this).getNativeElement()[0];return!(b.disabled||b.readOnly||f[b.type])}}()},validity:{set:a.noop,get:function(){var f=
a(this).getNativeElement(),c=f[0],h=a.data(c,"cachedValidity");if(h)return h;h=a.extend({},t);if(!a.prop(c,"willValidate")||"submit"==c.type)return h;var d=f.val(),g={nodeName:c.nodeName.toLowerCase()};h.customError=!!b.data(c,"customvalidationMessage");if(h.customError)h.valid=!1;a.each(o,function(a,b){if(b(f,d,g))h[a]=!0,h.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",h.valid?"false":"true");c=f=null;return h}}},"prop");b.defineNodeNamesBooleanProperty(["input","textarea","select"],
"required",{set:function(f){a(this).getShadowFocusElement().attr("aria-required",!!f+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);if(!("maxLength"in i.createElement("textarea"))){var j=function(){var f,b=0,c=a([]),d=1E9,g=function(){var a=c.prop("value"),f=a.length;f>b&&f>d&&(f=Math.max(b,d),c.prop("value",a.substr(0,f)));b=f},v=function(){clearTimeout(f);c.unbind(".maxlengthconstraint")};return function(j,m){v();if(-1<m)d=m,b=a.prop(j,"value").length,
c=a(j),c.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(g,0)}),c.bind("keyup.maxlengthconstraint",g),c.bind("blur.maxlengthconstraint",v),f=setInterval(g,200)}}();j.update=function(f,b){a(f).is(":focus")&&(null==b&&(b=a.prop(f,"maxlength")),j(e.target,b))};a(i).bind("focusin",function(f){var b;"TEXTAREA"==f.target.nodeName&&-1<(b=a.prop(f.target,"maxlength"))&&j(f.target,b)});b.defineNodeNameProperty("textarea",
"maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);j.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);j.update(this,a)}else this.setAttribute("maxlength","0"),j.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea",
"maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var y={submit:1,button:1,image:1},l={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c=
"form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),d="form"+b.name,g=b.name,j="click.webshimssubmittermutate"+g,v=function(){if("form"in this&&y[this.type]){var m=a.prop(this,"form");if(m){var r=a.attr(this,d);if(null!=r&&(!b.limitedTo||r.toLowerCase()===a.prop(this,c))){var u=a.attr(m,g);a.attr(m,g,r);setTimeout(function(){if(null!=u)a.attr(m,g,u);else try{a(m).removeAttr(g)}catch(b){m.removeAttribute(g)}},9)}}}};switch(b.proptype){case "url":var k=i.createElement("form");
l[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);if(null==b)return"";k.setAttribute("action",b);return k.action}}};break;case "boolean":l[c]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":l[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var c=a.attr(this,d);return!c||(c=c.toLowerCase())&&!b.limitedTo[c]?b.defaultProp:
c}}};break;default:l[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);return null!=b?b:""}}}}l[d]||(l[d]={});l[d].attr={set:function(b){l[d].attr._supset.call(this,b);a(this).unbind(j).bind(j,v)},get:function(){return l[d].attr._supget.call(this)}};l[d].initAttr=!0;l[d].removeAttr={value:function(){a(this).unbind(j);l[d].removeAttr._supvalue.call(this)}}});b.defineNodeNamesProperties(["input","button"],l);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?
b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):b.bugs.bustedValidity&&(b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){b.data(this,"bustedNoValidate",""+a)},get:function(){var a=b.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){b.data(this,"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow",
"stepMismatch"],function(a,b){o[b]=function(a){return(a[0].validity||{})[b]||!1}}));b.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},c={date:1,time:1,"datetime-local":1},d={focusout:1,blur:1},g={updateInput:1,change:1},j=function(a){var c,j=!0,r=a.prop("value"),u=
r,s=function(c){if(a){var d=a.prop("value");d!==r&&(r=d,(!c||!b[c.type])&&a.trigger("input"));c&&g[c.type]&&(u=d);!j&&d!==u&&a.trigger("change")}},x,i=function(b){clearInterval(c);setTimeout(function(){b&&d[b.type]&&(j=!1);a&&(a.unbind("focusout blur",i).unbind("input change updateInput",s),s());a=null},1)};clearInterval(c);c=setInterval(s,160);clearTimeout(x);x=setTimeout(s,9);a.unbind("focusout blur",i).unbind("input change updateInput",s);a.bind("focusout blur",i).bind("input updateInput change",
s)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(i).bind("focusin",function(b){b.target&&c[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&j(a(b.target))})}();b.addReady(function(b,c){var d;a("form",b).add(c.filter("form")).bind("invalid",a.noop);try{if(b==i&&!("form"in(i.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&d.offsetHeight&&d.offsetWidth&&d.focus()}catch(g){}});(function(){Modernizr.textareaPlaceholder=
!!("placeholder"in a("<textarea />")[0]);var c=a.browser.webkit&&Modernizr.textareaPlaceholder;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||c){var d="over"==b.cfg.forms.placeholderType,g=["textarea"];Modernizr.input.placeholder||g.push("input");var j=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},i=function(b,c,f,g){!1===f&&(f=a.prop(b,"value"));
if(!d&&"password"!=b.type){if(!f&&g&&j(b)){var h;a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(h),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){j(b);clearTimeout(h);h=setTimeout(function(){j(b)},
9)}).bind("blur.placeholderremove",function(){clearTimeout(h);a(b).unbind(".placeholderremove")});return}b.value=f}else if(!f&&g){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))c.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}c.box.removeClass("placeholder-visible")},
k=function(b,c,f,g,h){if(!g&&(g=a.data(b,"placeHolder"),!g))return;a(b).unbind(".placeholderremove");if("focus"==h||!h&&a(b).is(":focus"))("password"==b.type||d||a(b).hasClass("placeholder-visible"))&&i(b,g,"",!0);else if(!1===c&&(c=a.prop(b,"value")),c)i(b,g,c);else if(!1===f&&(f=a.attr(b,"placeholder")||""),f&&!c){c=g;!1===f&&(f=a.prop(b,"placeholder"));if(!d&&"password"!=b.type)b.value=f;c.box.addClass("placeholder-visible")}else i(b,g,c)},l=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&
!b.attr("aria-labelledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},m=function(){var c={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var c=a.data(b,"placeHolder");if(c)return c;c=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){k(this,!1,!1,c,a.type);c.box["focus"==
a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){k(b,!1,!1,c,a.type)},0)});if("password"==b.type||d){c.text=l(b);c.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(b).bind("mousedown.placeholder",function(){k(this,!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(d,f){var g=(parseInt(a.curCSS(b,
"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+f),10)||0,0)+(parseInt(a.curCSS(b,"border"+f+"Width"),10)||0);c.text.css("padding"+f,g)});a.curCSS(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},g=a.curCSS(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(d,f){var g=a.curCSS(b,f);c.text.css(f)!=g&&c.text.css(f,g)});f.width&&f.height&&c.text.css(f);"none"!==g&&c.box.addClass("placeholder-box-"+g)}else f=function(d){a(b).hasClass("placeholder-visible")&&
(i(b,c,""),d&&"submit"==d.type&&setTimeout(function(){d.isDefaultPrevented()&&k(b,!1,!1,c)},9))},a(n).bind("beforeunload",f),c.box=a(b),b.form&&a(b.form).submit(f);return c},update:function(d,f){if(!c[a.prop(d,"type")]&&!a.nodeName(d,"textarea"))b.warn("placeholder not allowed on type: "+a.prop(d,"type"));else{var g=m.create(d);g.text&&g.text.text(f);k(d,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:m};g.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){c?(b.data(this,
"textareaPlaceholder",a),this.placeholder=""):b.contentAttr(this,"placeholder",a);m.update(this,a)},get:function(){return(c?b.data(this,"textareaPlaceholder"):"")||b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});g.forEach(function(d){var g={},h;["attr","prop"].forEach(function(d){g[d]={set:function(g){var j;c&&(j=b.data(this,"textareaPlaceholder"));j||(j=b.contentAttr(this,"placeholder"));a.removeData(this,"cachedValidity");var i=h[d]._supset.call(this,g);j&&"value"in this&&k(this,
g,j);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":h[d]._supget.call(this)}}});h=b.defineNodeNameProperty(d,"value",g)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,n,i){(function(){if(!("value"in i.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var c=a.data(this,"outputShim");c||(c=q(this));c(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,c,g){"removeAttr"!=g&&(c=a.data(this,"outputShim"))&&c(b)});var q=function(d){if(!d.getAttribute("aria-live")){var d=a(d),c=(d.text()||"").trim(),
g=d.attr("id"),t=d.attr("for"),o=a('<input class="output-shim" type="text" disabled name="'+(d.attr("name")||"")+'" value="'+c+'" style="display: none !important;" />').insertAfter(d),w=o[0].form||i,k=function(a){o[0].value=a;a=o[0].value;d.text(a);b.contentAttr(d[0],"value",a)};d[0].defaultValue=c;b.contentAttr(d[0],"value",c);d.attr({"aria-live":"polite"});g&&(o.attr("id",g),d.attr("aria-labelledby",b.getID(a('label[for="'+g+'"]',w))));t&&(g=b.getID(d),t.split(" ").forEach(function(a){(a=i.getElementById(a))&&
a.setAttribute("aria-controls",g)}));d.data("outputShim",k);o.data("outputShim",k);return k}};b.addReady(function(b,c){a("output",b).add(c.filter("output")).each(function(){q(this)})})}})();(function(){var q={updateInput:1,input:1},d={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},c=function(a){var c,d=a.prop("value"),i=function(c){if(a){var f=a.prop("value");f!==d&&(d=f,(!c||!q[c.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},k,j=function(){clearTimeout(k);
k=setTimeout(i,9)},n=function(){a.unbind("focusout",n).unbind("keyup keypress keydown paste cut",j).unbind("input change updateInput",i);clearInterval(c);setTimeout(function(){i();a=null},1)};clearInterval(c);c=setInterval(i,99);j();a.bind("keyup keypress keydown paste cut",j).bind("focusout",n).bind("input updateInput change",i)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(i).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!d[b.target.type]&&c(a(b.target))})})();b.isReady("form-output",!0)});
