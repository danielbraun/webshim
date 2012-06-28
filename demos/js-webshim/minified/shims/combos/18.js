jQuery.webshims.register("form-datalist",function(a,b,m,l,s){b.propTypes.element=function(k){b.createPropDefault(k,"attr");if(!k.prop)k.prop={get:function(){var b=k.attr.get.call(this);b&&(b=a("#"+b)[0])&&k.propNodeName&&!a.nodeName(b,k.propNodeName)&&(b=null);return b||null},writeable:!1}};(function(){var k=a.webshims.cfg.forms,g=Modernizr.input.list;if(!g||k.customDatalist){var t=0,p={submit:1,button:1,reset:1,hidden:1,range:1,date:1},r=a.browser.msie&&7>parseInt(a.browser.version,10),v={},q=function(a){if(!a)return[];
if(v[a])return v[a];var b;try{b=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(c){}v[a]=b||[];return b||[]},j={_create:function(f){if(!p[a.prop(f.input,"type")]){var b=f.datalist,c=a.data(f.input,"datalistWidget");if(b&&c&&c.datalist!==b)c.datalist=b,c.id=f.id,c.shadowList.prop("className","datalist-polyfill "+(c.datalist.className||"")+" "+c.datalist.id+"-shadowdom"),k.positionDatalist?c.shadowList.insertAfter(f.input):c.shadowList.appendTo("body"),a(c.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",
a.proxy(c,"_resetListCached")),c._resetListCached();else if(b){if(!(c&&c.datalist===b)){t++;var d=this;this.hideList=a.proxy(d,"hideList");this.timedHide=function(){clearTimeout(d.hideTimer);d.hideTimer=setTimeout(d.hideList,9)};this.datalist=b;this.id=f.id;this.hasViewableData=!0;this._autocomplete=a.attr(f.input,"autocomplete");a.data(f.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');k.positionDatalist?
this.shadowList.insertAfter(f.input):this.shadowList.appendTo("body");this.index=-1;this.input=f.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(e){var h=a("li:not(.hidden-item)",d.shadowList),c="mousedown"==e.type||"click"==e.type;d.markItem(h.index(e.currentTarget),c,h);"click"==e.type&&(d.hideList(),a(f.input).trigger("datalistselect"));return"mousedown"!=e.type}).bind("focusout",this.timedHide);f.input.setAttribute("autocomplete",
"off");a(f.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!d.triggeredByDatalist)d.changedValue=!1,d.showHideOptions()}).bind("keydown.datalistWidget",function(c){var h=c.keyCode,n;if(40==h&&!d.showList())return d.markItem(d.index+1,!0),!1;if(d.isListVisible){if(38==h)return d.markItem(d.index-1,!0),!1;if(!c.shiftKey&&(33==h||36==h))return d.markItem(0,!0),!1;if(!c.shiftKey&&(34==h||35==h))return c=a("li:not(.hidden-item)",d.shadowList),d.markItem(c.length-1,!0,c),
!1;if(13==h||27==h)return 13==h&&(n=a("li.active-item:not(.hidden-item)",d.shadowList),d.changeValue(a("li.active-item:not(.hidden-item)",d.shadowList))),d.hideList(),n&&n[0]&&a(f.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&d.showList()}).bind("mousedown.datalistWidget",function(){a(this).is(":focus")&&d.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",
a.proxy(this,"_resetListCached"));this._resetListCached();f.input.form&&(f.input.name||f.input.id)&&a(f.input.form).bind("submit.datalistWidget"+f.input.id,function(){if(!a(f.input).hasClass("no-datalist-cache")){var c=a.prop(f.input,"value"),h=(f.input.name||f.input.id)+a.prop(f.input,"type");if(!d.storedOptions)d.storedOptions=q(h);if(c&&-1==d.storedOptions.indexOf(c)&&(d.storedOptions.push(c),c=d.storedOptions,h)){c=c||[];try{localStorage.setItem("storedDatalistOptions"+h,JSON.stringify(c))}catch(n){}}}});
a(m).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){d.destroy()})}}else c&&c.destroy()}},destroy:function(){var f=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(l).unbind(".datalist"+this.id);a(m).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");f===s?this.input.removeAttribute("autocomplete"):
a(this.input).attr("autocomplete",f)},_resetListCached:function(a){var i=this,c;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(m.QUnit||(c=a&&l.activeElement==i.input)?i.updateListOptions(c):b.ready("WINDOWLOAD",function(){i.updateTimer=setTimeout(function(){i.updateListOptions();i=null;t=1},200+100*t)}))},updateListOptions:function(f){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.curCSS(this.input,
"fontSize"),fontFamily:a.curCSS(this.input,"fontFamily")});this.searchStart=a(this.input).hasClass("search-start");var b=[],c=[],d=[],e,h,n,w;for(h=a.prop(this.datalist,"options"),n=0,w=h.length;n<w;n++){e=h[n];if(e.disabled)return;e={value:a(e).val()||"",text:a.trim(a.attr(e,"label")||e.textContent||e.innerText||a.text([e])||""),className:e.className||"",style:a.attr(e,"style")||""};e.text?e.text!=e.value&&(e.className+=" different-label-value"):e.text=e.value;c[n]=e.value;d[n]=e}if(!this.storedOptions)this.storedOptions=
a(this.input).hasClass("no-datalist-cache")?[]:q((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==c.indexOf(a)&&d.push({value:a,text:a,className:"stored-suggest",style:""})});for(n=0,w=d.length;n<w;n++)h=d[n],b[n]='<li class="'+h.className+'" style="'+h.style+'" tabindex="-1" role="listitem"><span class="option-label">'+h.text+'</span> <span class="option-value">'+h.value+"</span></li>";this.arrayOptions=d;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+
b.join("\n")+"</ul></div></div>");a.fn.bgIframe&&r&&this.shadowList.bgIframe();(f||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(b){var i=a.prop(this.input,"value").toLowerCase();if(!(i===this.lastUpdatedValue||this.lastUnfoundValue&&0===i.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=i;var c=!1,d=this.searchStart,e=a("li",this.shadowList);i?this.arrayOptions.forEach(function(h,n){var b;if(!("lowerText"in h))h.lowerText=h.text!=h.value?h.text.toLowerCase()+h.value.toLowerCase():
h.text.toLowerCase();b=h.lowerText.indexOf(i);(b=d?!b:-1!==b)?(a(e[n]).removeClass("hidden-item"),c=!0):a(e[n]).addClass("hidden-item")}):e.length&&(e.removeClass("hidden-item"),c=!0);this.hasViewableData=c;!b&&c&&this.showList();if(!c)this.lastUnfoundValue=i,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var f=k.positionDatalist?a(this.input).position():b.getRelOffset(this.shadowList,this.input);f.top+=a(this.input).outerHeight();
f.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(f);return f},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this,i;b.setPos();b.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");
a(l).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(c){c.target===b.input||b.shadowList[0]===c.target||a.contains(b.shadowList[0],c.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},9)):b.timedHide()});a(m).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){clearTimeout(i);i=setTimeout(function(){b.setPos()},9)});clearTimeout(i);return!0},hideList:function(){if(!this.isListVisible)return!1;
var f=this,i=function(){f.changedValue&&a(f.input).trigger("change");f.changedValue=!1};f.shadowList.removeClass("datalist-visible list-item-active");f.index=-1;f.isListVisible=!1;if(f.changedValue){f.triggeredByDatalist=!0;b.triggerInlineForm&&b.triggerInlineForm(f.input,"input");if(a(f.input).is(":focus"))a(f.input).one("blur",i);else i();f.triggeredByDatalist=!1}a(l).unbind(".datalist"+f.id);a(m).unbind(".datalist"+f.id).bind("resize.datalist"+f.id+" orientationchange.datalist "+f.id+" emchange.datalist"+
f.id,function(){f.shadowList.css({top:0,left:0});a(m).unbind(".datalist"+f.id)});return!0},scrollIntoView:function(b){var i=a("ul",this.shadowList),c=a("div.datalist-box",this.shadowList),d=b.position();d.top-=(parseInt(i.css("paddingTop"),10)||0)+(parseInt(i.css("marginTop"),10)||0)+(parseInt(i.css("borderTopWidth"),10)||0);0>d.top?c.scrollTop(c.scrollTop()+d.top-2):(d.top+=b.outerHeight(),b=c.height(),d.top>b&&c.scrollTop(c.scrollTop()+(d.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",
b).text(),i=a.prop(this.input,"value");if(b!=i)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,i,c){c=c||a("li:not(.hidden-item)",this.shadowList);if(c.length)0>b?b=c.length-1:b>=c.length&&(b=0),c.removeClass("active-item"),this.shadowList.addClass("list-item-active"),c=c.filter(":eq("+b+")").addClass("active-item"),i&&(this.changeValue(c),this.scrollIntoView(c)),this.index=b}};(function(){g||b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,
get:function(){var i=a("select",this);i[0]?i=i[0].options:(i=a("option",this).get(),i.length&&b.warn("you should wrap you option-elements for a datalist in a select element to support IE and other old browsers."));return i}}});var f={autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var c=a.data(this,"datalistWidget");c?(c._autocomplete=b,"off"==b&&c.hideList()):
"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}}};if(!g||!1 in a("<input />")[0])f.selectedOption={prop:{writeable:!1,get:function(){var b=a.prop(this,"list"),c=null,d;if(!b)return c;d=a.attr(this,"value");if(!d)return c;b=a.prop(b,"options");if(!b.length)return c;a.each(b,function(b,h){if(d==a.prop(h,"value"))return c=h,!1});return c}}};f.list=g?{attr:{get:function(){var f=b.contentAttr(this,"list");null!=f?this.removeAttribute("list"):f=a.data(this,"datalistListAttr");
return null==f?s:f},set:function(f){a.data(this,"datalistListAttr",f);b.objectCreate(j,s,{input:this,id:f,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}:{attr:{get:function(){var a=b.contentAttr(this,"list");return null==a?s:a},set:function(f){b.contentAttr(this,"list",f);b.objectCreate(j,s,{input:this,id:f,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};b.defineNodeNameProperties("input",f);if(a.event.customEvent)a.event.customEvent.updateDatalist=
!0,a.event.customEvent.updateInput=!0,a.event.customEvent.datalistselect=!0;b.addReady(function(a,c){c.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
jQuery.webshims.register("form-extend",function(a,b,m,l,s,k){m=m.Modernizr;s=m.inputtypes;if(m.formvalidation&&!b.bugs.bustedValidity){var g=b.inputTypes,t={};b.addInputType=function(a,c){g[a]=c};b.addValidityRule=function(a,c){t[a]=c};b.addValidityRule("typeMismatch",function(a,c,b,e){if(""===c)return!1;e=e.typeMismatch;if(!("type"in b))b.type=(a[0].getAttribute("type")||"").toLowerCase();g[b.type]&&g[b.type].mismatch&&(e=g[b.type].mismatch(c,a));return e});var p=k.overrideMessages,r=!s.number||
!s.time||!s.range||p,v="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),k=p?["value","checked"]:["value"],q=[],j=function(c,b){if(c){var e=(c.getAttribute&&c.getAttribute("type")||c.type||"").toLowerCase();if(p||g[e])p&&!b&&"radio"==e&&c.name?a(l.getElementsByName(c.name)).each(function(){a.prop(this,"validity")}):a.prop(c,"validity")}},f={};["input","textarea","select"].forEach(function(c){var e=b.defineNodeNameProperty(c,
"setCustomValidity",{prop:{value:function(d){var d=d+"",f="input"==c?a(this).getNativeElement()[0]:this;e.prop._supvalue.call(f,d);b.bugs.validationMessage&&b.data(f,"customvalidationMessage",d);r&&(b.data(f,"hasCustomError",!!d),j(f))}}});f[c]=e.prop._supvalue});if(r||p)k.push("min"),k.push("max"),k.push("step"),q.push("input");p&&(k.push("required"),k.push("pattern"),q.push("select"),q.push("textarea"));if(r){var i;q.forEach(function(c){var e=b.defineNodeNameProperty(c,"validity",{prop:{get:function(){if(!i){var d=
"input"==c?a(this).getNativeElement()[0]:this,k=e.prop._supget.call(d);if(!k)return k;var o={};v.forEach(function(a){o[a]=k[a]});if(!a.prop(d,"willValidate"))return o;i=!0;var j=a(d),u={type:(d.getAttribute&&d.getAttribute("type")||"").toLowerCase(),nodeName:(d.nodeName||"").toLowerCase()},y=j.val(),x=!!b.data(d,"hasCustomError"),m;i=!1;o.customError=x;if(o.valid&&o.customError)o.valid=!1;else if(!o.valid){var l=!0;a.each(o,function(a,c){if(c)return l=!1});if(l)o.valid=!0}a.each(t,function(a,e){o[a]=
e(j,y,u,o);if(o[a]&&(o.valid||!m)&&(p||g[u.type]&&g[u.type].mismatch))f[c].call(d,b.createValidationMessage(d,a)),o.valid=!1,m=!0});o.valid?(f[c].call(d,""),b.data(d,"hasCustomError",!1)):p&&!m&&!x&&a.each(o,function(a,e){if("valid"!==a&&e)return f[c].call(d,b.createValidationMessage(d,a)),!1});return o}},writeable:!1}})});k.forEach(function(a){b.onNodeNamesPropertyModify(q,a,function(){j(this)})});if(l.addEventListener){var c,d=function(b){if("form"in b.target){var e=b.target.form;clearTimeout(c);
j(b.target);e&&p&&a("input",e).each(function(){"password"==this.type&&j(this)})}};l.addEventListener("change",d,!0);p&&(l.addEventListener("blur",d,!0),l.addEventListener("keydown",function(a){13==a.keyCode&&d(a)},!0));l.addEventListener("input",function(a){clearTimeout(c);c=setTimeout(function(){j(a.target)},290)},!0)}var e=q.join(",");b.addReady(function(c,b){a(e,c).add(b.filter(e)).each(function(){a.prop(this,"validity")})});p&&b.ready("DOM form-message",function(){b.activeLang({register:"form-core",
callback:function(){a("input, select, textarea").getNativeElement().each(function(){if(!b.data(this,"hasCustomError")){var c=this,e=a.prop(c,"validity")||{valid:!0},d;e.valid||(d=(c.nodeName||"").toLowerCase(),a.each(e,function(a,e){if("valid"!==a&&e)return f[d].call(c,b.createValidationMessage(c,a)),!1}))}})}})})}b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});m.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||
[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=this.options||[];if(!c.length){var b=a("select",this);if(b[0]&&b[0].options&&b[0].options.length)c=b[0].options}return c}}})}});
jQuery.webshims.register("form-number-date-api",function(a,b){var m,l,s;if(!b.getStep)b.getStep=function(c,b){var e=a.attr(c,"step");if("any"===e)return e;b=b||r(c);if(!g[b]||!g[b].step)return e;e=m.asNumber(e);return(!isNaN(e)&&0<e?e:g[b].step)*g[b].stepScaleFactor};if(!b.addMinMaxNumberToCache)b.addMinMaxNumberToCache=function(a,b,e){a+"AsNumber"in e||(e[a+"AsNumber"]=g[e.type].asNumber(b.attr(a)),isNaN(e[a+"AsNumber"])&&a+"Default"in g[e.type]&&(e[a+"AsNumber"]=g[e.type][a+"Default"]))};var k=
parseInt("NaN",10),g=b.inputTypes,t=function(a){return"number"==typeof a||a&&a==1*a},p=function(c){return a('<input type="'+c+'" />').prop("type")===c},r=function(a){return(a.getAttribute("type")||"").toLowerCase()},v=b.addMinMaxNumberToCache,q=function(a,b){for(var a=""+a,b=b-a.length,e=0;e<b;e++)a="0"+a;return a},j=b.bugs.valueAsNumberSet||b.bugs.bustedValidity;b.addValidityRule("stepMismatch",function(a,d,e,h){if(""===d)return!1;if(!("type"in e))e.type=r(a[0]);if("date"==e.type)return!1;h=(h||
{}).stepMismatch;if(g[e.type]&&g[e.type].step){if(!("step"in e))e.step=b.getStep(a[0],e.type);if("any"==e.step)return!1;if(!("valueAsNumber"in e))e.valueAsNumber=g[e.type].asNumber(d);if(isNaN(e.valueAsNumber))return!1;v("min",a,e);a=e.minAsNumber;isNaN(a)&&(a=g[e.type].stepBase||0);h=Math.abs((e.valueAsNumber-a)%e.step);h=!(1.0E-7>=h||1.0E-7>=Math.abs(h-e.step))}return h});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){b.addValidityRule(a.name,
function(b,e,h,n){n=(n||{})[a.name]||!1;if(""===e)return n;if(!("type"in h))h.type=r(b[0]);if(g[h.type]&&g[h.type].asNumber){if(!("valueAsNumber"in h))h.valueAsNumber=g[h.type].asNumber(e);if(isNaN(h.valueAsNumber))return!1;v(a.attr,b,h);if(isNaN(h[a.attr+"AsNumber"]))return n;n=h[a.attr+"AsNumber"]*a.factor<h.valueAsNumber*a.factor-1.0E-7}return n})});b.reflectProperties(["input"],["max","min","step"]);var f=b.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var b=r(this),b=g[b]&&
g[b].asNumber?g[b].asNumber(a.prop(this,"value")):f.prop._supget&&f.prop._supget.apply(this,arguments);null==b&&(b=k);return b},set:function(c){var d=r(this);g[d]&&g[d].numberToString?isNaN(c)?a.prop(this,"value",""):(d=g[d].numberToString(c),!1!==d?a.prop(this,"value",d):b.warn("INVALID_STATE_ERR: DOM Exception 11")):f.prop._supset&&f.prop._supset.apply(this,arguments)}}}),i=b.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var b=r(this);return g[b]&&g[b].asDate&&!g[b].noAsDate?
g[b].asDate(a.prop(this,"value")):i.prop._supget&&i.prop._supget.call(this)||null},set:function(c){var d=r(this);if(g[d]&&g[d].dateToString&&!g[d].noAsDate){if(null===c)return a.prop(this,"value",""),"";d=g[d].dateToString(c);if(!1!==d)return a.prop(this,"value",d),d;b.warn("INVALID_STATE_ERR: DOM Exception 11")}else return i.prop._supset&&i.prop._supset.apply(this,arguments)||null}}});m={mismatch:function(a){return!t(a)},step:1,stepScaleFactor:1,asNumber:function(a){return t(a)?1*a:k},numberToString:function(a){return t(a)?
a:!1}};l={minDefault:0,maxDefault:100};s={mismatch:function(b){if(!b||!b.split||!/\d$/.test(b))return!0;var d=b.split(/\u002D/);if(3!==d.length)return!0;var e=!1;a.each(d,function(a,b){if(!(t(b)||b&&b=="0"+1*b))return e=!0,!1});if(e)return e;if(4!==d[0].length||2!=d[1].length||12<d[1]||2!=d[2].length||33<d[2])e=!0;return b!==this.dateToString(this.asDate(b,!0))},step:1,stepScaleFactor:864E5,asDate:function(a,b){return!b&&this.mismatch(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var e=
k;if(b||!this.mismatch(a))a=a.split(/\u002D/),e=Date.UTC(a[0],a[1]-1,a[2]);return e},numberToString:function(a){return t(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+q(a.getUTCMonth()+1,2)+"-"+q(a.getUTCDate(),2):!1}};if(j||!p("range")||!p("time"))l=a.extend({},m,l);(j||!p("number"))&&b.addInputType("number",m);(j||!p("range"))&&b.addInputType("range",l);(j||!p("date"))&&b.addInputType("date",s)});
jQuery.webshims.register("form-number-date-ui",function(a,b,m,l,s,k){var g=b.triggerInlineForm,t=Modernizr.inputtypes,p=function(){var a={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},b=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");return function(c,d){var f,g,k;g="width";b&&(g=a[c.css(b)]||g);f=c[g]();g="width"==g;if(f){var u=parseInt(d.css("marginLeft"),10)||0,i=d.outerWidth();(k=parseInt(c.css("marginRight"),10)||0)&&c.css("marginRight",0);u<=-1*i?(d.css("marginRight",
Math.floor(Math.abs(i+u)+k)),c.css("paddingRight",(parseInt(c.css("paddingRight"),10)||0)+Math.abs(u)),g&&c.css("width",Math.floor(f+u))):(d.css("marginRight",k),c.css("width",Math.floor(f-u-i)))}}}(),r={dateFormat:"yy-mm-dd"},v=a([]),q,j=function(e,c){a("input",e).add(c.filter("input")).each(function(){var e=a.prop(this,"type");if(j[e]&&!b.data(this,"shadowData"))j[e](a(this))})},f=function(b,c){if(k.lazyDate){var d=a.data(b[0],"setDateLazyTimer");d&&clearTimeout(d);a.data(b[0],"setDateLazyTimer",
setTimeout(function(){b.datepicker("setDate",c);a.removeData(b[0],"setDateLazyTimer");b=null},0))}else b.datepicker("setDate",c)};if(k.lazyDate===s)try{k.lazyDate=a.browser.msie&&9>b.browserVersion||500>a(m).width()&&500>a(m).height()}catch(i){}var c={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};if(!k.copyAttrs)k.copyAttrs={};b.extendUNDEFProp(k.copyAttrs,c);j.common=function(e,h,d){Modernizr.formvalidation&&e.bind("firstinvalid",function(a){(b.fromSubmit||!q)&&e.unbind("invalid.replacedwidgetbubble").bind("invalid.replacedwidgetbubble",
function(c){!a.isInvalidUIPrevented()&&!c.isDefaultPrevented()&&(b.validityAlert.showFor(a.target),a.preventDefault(),c.preventDefault());e.unbind("invalid.replacedwidgetbubble")})});var f,g,i=a("input, span.ui-slider-handle",h),j=e[0].attributes;for(f in k.copyAttrs)if((g=j[f])&&g.specified)c[f]&&i[0]?i.attr(f,g.nodeValue):h[0].setAttribute(f,g.nodeValue);g=e.attr("id");f=k.calculateWidth?{css:{marginRight:e.css("marginRight"),marginLeft:e.css("marginLeft")},outerWidth:e.outerWidth()}:{};f.label=
g?a('label[for="'+g+'"]',e[0].form):v;g=b.getID(f.label);h.addClass(e[0].className);b.addShadowDom(e,h,{data:d||{},shadowFocusElement:a("input.input-datetime-local-date, span.ui-slider-handle",h)[0],shadowChilds:i});e.after(h).hide();e[0].form&&a(e[0].form).bind("reset",function(a){a.originalEvent&&!a.isDefaultPrevented()&&setTimeout(function(){e.prop("value",e.prop("value"))},0)});1==h.length&&!a("*",h)[0]&&(h.attr("aria-labelledby",g),f.label.bind("click",function(){h.focus();return!1}));return f};
Modernizr.formvalidation&&["input","form"].forEach(function(a){var c=b.defineNodeNameProperty(a,"checkValidity",{prop:{value:function(){q=!0;var a=c.prop._supvalue.apply(this,arguments);q=!1;return a}}})});if(!t.date||k.replaceUI){var d=function(e,c,d,f){var g,i,j=function(){u.dpDiv.unbind("mousedown.webshimsmousedownhandler");i=g=!1},u=c.bind("focusin",function(){j();u.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){g=!0})}).bind("focusout blur",
function(a){g&&(i=!0,a.stopImmediatePropagation())}).datepicker(a.extend({onClose:function(){i&&c.not(":focus")?(j(),c.trigger("focusout"),c.triggerHandler("blur")):j()}},r,k.datepicker,e.data("datepicker"))).bind("change",d).data("datepicker");u.dpDiv.addClass("input-date-datepicker-control");f&&b.triggerDomUpdate(f[0]);["disabled","min","max","value","step"].forEach(function(a){var b=e.prop(a);""!==b&&("disabled"!=a||!b)&&e.prop(a,b)});return u};j.date=function(b){if(a.fn.datepicker){var c=a('<input class="input-date" type="text" />'),
f=this.common(b,c,j.date.attrs),i=d(b,c,function(d){j.date.blockAttr=!0;var f;if(k.lazyDate){var n=a.data(c[0],"setDateLazyTimer");n&&(clearTimeout(n),a.removeData(c[0],"setDateLazyTimer"))}try{f=(f=a.datepicker.parseDate(c.datepicker("option","dateFormat"),c.prop("value")))?a.datepicker.formatDate("yy-mm-dd",f):c.prop("value")}catch(i){f=c.prop("value")}b.prop("value",f);j.date.blockAttr=!1;d.stopImmediatePropagation();g(b[0],"input");g(b[0],"change")});f.css&&(c.css(f.css),f.outerWidth&&c.outerWidth(f.outerWidth),
i.trigger[0]&&p(c,i.trigger))}};j.date.attrs={disabled:function(b,c,d){a.prop(c,"disabled",!!d)},min:function(b,c,d){try{d=a.datepicker.parseDate("yy-mm-dd",d)}catch(f){d=!1}d&&a(c).datepicker("option","minDate",d)},max:function(b,c,d){try{d=a.datepicker.parseDate("yy-mm-dd",d)}catch(f){d=!1}d&&a(c).datepicker("option","maxDate",d)},value:function(b,c,d){if(!j.date.blockAttr){try{var g=a.datepicker.parseDate("yy-mm-dd",d)}catch(i){g=!1}g?f(a(c),g):a.prop(c,"value",d)}}}}if(!t.range||k.replaceUI)j.range=
function(b){if(a.fn.slider){var c=a('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),d=this.common(b,c,j.range.attrs);a("span",c).attr("aria-labelledby",d.label.attr("id"));d.label.bind("click",function(){a("span",c).focus();return!1});d.css&&(c.css(d.css),d.outerWidth&&c.outerWidth(d.outerWidth));c.slider(a.extend({},k.slider,b.data("slider"),{slide:function(a,c){if(a.originalEvent)j.range.blockAttr=!0,b.prop("value",c.value),j.range.blockAttr=!1,g(b[0],
"input"),g(b[0],"change")}}));["disabled","min","max","step","value"].forEach(function(c){var d=b.attr(c),f;"value"==c&&!d&&(f=b.getShadowElement())&&(d=(a(f).slider("option","max")-a(f).slider("option","min"))/2);null!=d&&b.attr(c,d)})}},j.range.attrs={disabled:function(b,c,d){d=!!d;a(c).slider("option","disabled",d);a("span",c).attr({"aria-disabled":d+"",tabindex:d?"-1":"0"})},min:function(b,c,d){d=d?1*d||0:0;a(c).slider("option","min",d);a("span",c).attr({"aria-valuemin":d})},max:function(b,c,
d){d=d||0===d?1*d||100:100;a(c).slider("option","max",d);a("span",c).attr({"aria-valuemax":d})},value:function(b,c,d){d=a(b).prop("valueAsNumber");isNaN(d)||(j.range.blockAttr||a(c).slider("option","value",d),a("span",c).attr({"aria-valuenow":d,"aria-valuetext":d}))},step:function(b,c,d){d=d&&a.trim(d)?1*d||1:1;a(c).slider("option","step",d)}};if(!b.bugs.valueAsNumberSet&&(k.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range))m=function(){b.data(this,"hasShadow")&&a.prop(this,"value",
a.prop(this,"value"))},b.onNodeNamesPropertyModify("input","valueAsNumber",m),b.onNodeNamesPropertyModify("input","valueAsDate",m);a.each(["disabled","min","max","value","step"],function(a,c){b.onNodeNamesPropertyModify("input",c,function(a){var d=b.data(this,"shadowData");if(d&&d.data&&d.data[c]&&d.nativeElement===this)d.data[c](this,d.shadowElement,a)})});if(!k.availabeLangs)k.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");
m=function(){a.datepicker&&(b.activeLang({langObj:a.datepicker.regional,module:"form-number-date-ui",callback:function(b){a("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",a.extend(r,b,k.datepicker))}}),a(l).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};a(l).bind("jquery-uiReady.langchange input-widgetsReady.langchange",m);m();(function(){var c=function(){var b={};return function(c){return c in b?b[c]:b[c]=a('<input type="'+c+'" />')[0].type===
c}}();if(!c("number")){var d=b.cfg["forms-ext"],f=b.inputTypes,i=function(c,d,e){e=e||{};if(!("type"in e))e.type=a.prop(c,"type");if(!("step"in e))e.step=b.getStep(c,e.type);if(!("valueAsNumber"in e))e.valueAsNumber=f[e.type].asNumber(a.prop(c,"value"));var g="any"==e.step?f[e.type].step*f[e.type].stepScaleFactor:e.step;b.addMinMaxNumberToCache("min",a(c),e);b.addMinMaxNumberToCache("max",a(c),e);if(isNaN(e.valueAsNumber))e.valueAsNumber=f[e.type].stepBase||0;if("any"!==e.step&&(c=Math.round(1E7*
((e.valueAsNumber-(e.minAsnumber||0))%e.step))/1E7)&&Math.abs(c)!=e.step)e.valueAsNumber-=c;c=e.valueAsNumber+g*d;return c=!isNaN(e.minAsNumber)&&c<e.minAsNumber?e.valueAsNumber*d<e.minAsNumber?e.minAsNumber:isNaN(e.maxAsNumber)?e.valueAsNumber:e.maxAsNumber:!isNaN(e.maxAsNumber)&&c>e.maxAsNumber?e.valueAsNumber*d>e.maxAsNumber?e.maxAsNumber:isNaN(e.minAsNumber)?e.valueAsNumber:e.minAsNumber:Math.round(1E7*c)/1E7};b.modules["form-number-date-ui"].getNextStep=i;var k=function(b,c,d){if(!b.disabled&&
!b.readOnly&&!a(d).hasClass("step-controls")&&(a.prop(b,"value",f[c].numberToString(i(b,a(d).hasClass("step-up")?1:-1,{type:c}))),a(b).unbind("blur.stepeventshim"),g(b,"input"),l.activeElement)){if(l.activeElement!==b)try{b.focus()}catch(e){}setTimeout(function(){if(l.activeElement!==b)try{b.focus()}catch(c){}a(b).one("blur.stepeventshim",function(){g(b,"change")})},0)}};if(d.stepArrows){var j={set:function(){var a=b.data(this,"step-controls");if(a)a[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};
b.onNodeNamesPropertyModify("input","disabled",j);b.onNodeNamesPropertyModify("input","readonly",a.extend({},j))}var m={38:1,40:-1};b.addReady(function(j,l){d.stepArrows&&a("input",j).add(l.filter("input")).each(function(){var j=a.prop(this,"type");if(f[j]&&f[j].asNumber&&d.stepArrows&&!(!0!==d.stepArrows&&!d.stepArrows[j]||c(j)||a(l).hasClass("has-step-controls"))){var l=this,o=a('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(l).bind("selectstart dragstart",
function(){return!1}).bind("mousedown mousepress",function(a){k(l,j,a.target);return!1}).bind("mousepressstart mousepressend",function(b){a(b.target)["mousepressstart"==b.type?"addClass":"removeClass"]("mousepress-ui")}),r=function(b,c){if(!l.disabled&&!l.readOnly)return a.prop(l,"value",f[j].numberToString(i(l,c,{type:j}))),g(l,"input"),!1},q=a(l).addClass("has-step-controls").attr({readonly:l.readOnly,disabled:l.disabled,autocomplete:"off",role:"spinbutton"}).bind(a.browser.msie?"keydown":"keypress",
function(b){if(!l.disabled&&!l.readOnly&&m[b.keyCode])return a.prop(l,"value",f[j].numberToString(i(l,m[b.keyCode],{type:j}))),g(l,"input"),!1});a.fn.mwheelIntent?q.add(o).bind("mwheelIntent",r):q.bind("focus",function(){q.add(o).unbind(".mwhellwebshims").bind("mousewheel.mwhellwebshims",r)}).bind("blur",function(){a(l).add(o).unbind(".mwhellwebshims")});b.data(l,"step-controls",o);d.calculateWidth&&(p(q,o),o.css("marginTop",(q.outerHeight()-o.outerHeight())/2))}})})}})();b.addReady(function(c,d){a(l).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){(a.datepicker||a.fn.slider)&&j(c,d);a.datepicker&&a.fn.slider?a(l).unbind(".initinputui"):b.modules["input-widgets"].src||b.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
