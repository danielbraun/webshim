jQuery.webshims.register("form-datalist",function(e,t,i,n,a,r){"use strict";var o={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(o,{number:1,time:1}),t.propTypes.element=function(i){t.createPropDefault(i,"attr"),i.prop||(i.prop={get:function(){var t=e.attr(this,"list");return t&&(t=n.getElementById(t),t&&i.propNodeName&&!e.nodeName(t,i.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var s=e.webshims.cfg.forms,l=Modernizr.input.list;if(!l||s.customDatalist){var u=function(){l||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var i,n=this,a=e("select",n);return a[0]?i=a[0].options:(i=e("option",n).get(),i.length&&t.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),i}}});var i={autocomplete:{attr:{get:function(){var t=this,i=e.data(t,"datalistWidget");return i?i._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var i=this,n=e.data(i,"datalistWidget");n?(n._autocomplete=t,"off"==t&&n.hideList()):"autocomplete"in i?i.autocomplete=t:i.setAttribute("autocomplete",t)}}}};!s.customDatalist||l&&"selectedOption"in e("<input />")[0]||(i.selectedOption={prop:{writeable:!1,get:function(){var t,i,n=this,r=e.prop(n,"list"),o=null;return r?(t=e.prop(n,"value"))?(i=e.prop(r,"options"),i.length?(e.each(i,function(i,n){return t==e.prop(n,"value")?(o=n,!1):a}),o):o):o:o}}}),l?((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var i=this,n=e("select",i);n[0]&&n[0].options&&n[0].options.length&&(t=n[0].options)}return t}}}),i.list={attr:{get:function(){var i=t.contentAttr(this,"list");return null!=i?(e.data(this,"datalistListAttr",i),o[e.prop(this,"type")]||o[e.attr(this,"type")]||this.removeAttribute("list")):i=e.data(this,"datalistListAttr"),null==i?a:i},set:function(i){var n=this;e.data(n,"datalistListAttr",i),o[e.prop(this,"type")]||o[e.attr(this,"type")]?n.setAttribute("list",i):t.objectCreate(g,a,{input:n,id:i,datalist:e.prop(n,"list")}),e(n).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):i.list={attr:{get:function(){var e=t.contentAttr(this,"list");return null==e?a:e},set:function(i){var n=this;t.contentAttr(n,"list",i),t.objectCreate(g,a,{input:n,id:i,datalist:e.prop(n,"list")}),e(n).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"},t.defineNodeNameProperties("input",i),t.addReady(function(t,i){i.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){e(this).triggerHandler("updateDatalist")})})},c=0,p={},d=function(e){if(!e)return[];if(p[e])return p[e];var t;try{t=JSON.parse(localStorage.getItem("storedDatalistOptions"+e))}catch(i){}return p[e]=t||[],t||[]},h=function(e,t){if(e){t=t||[];try{localStorage.setItem("storedDatalistOptions"+e,JSON.stringify(t))}catch(i){}}},f=function(t){return t.textContent||t.innerText||e.text([t])||""},m=/</g,v=/>/g,g={_create:function(n){if(!o[e.prop(n.input,"type")]&&!o[e.attr(n.input,"type")]){var l=n.datalist,u=e.data(n.input,"datalistWidget");if(l&&u&&u.datalist!==l)return u.datalist=l,u.id=n.id,e(u.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(u,"_resetListCached")),u._resetListCached(),a;if(!l)return u&&u.destroy(),a;if(!u||u.datalist!==l){c++;var p=this;this.hideList=e.proxy(p,"hideList"),this.datalist=l,this.id=n.id,this.hasViewableData=!0,this._autocomplete=e.attr(n.input,"autocomplete"),e.data(n.input,"datalistWidget",this),this.popover=t.objectCreate(t.wsPopover,{},r.datalistPopover),this.shadowList=this.popover.element.addClass("datalist-polyfill"),this.index=-1,this.input=n.input,this.arrayOptions=[],this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(t){var i=e("li:not(.hidden-item)",p.shadowList),a="mousedown"==t.type||"click"==t.type;return p.markItem(i.index(t.currentTarget),a,i),"click"==t.type&&(p.hideList(),s.customDatalist&&e(n.input).getNativeElement().trigger("datalistselect")),"mousedown"!=t.type}),n.input.setAttribute("autocomplete","off"),e(n.input).attr({"aria-haspopup":"true"}).on({"input.datalistWidget":function(){p.triggeredByDatalist||(p.changedValue=!1,p.showHideOptions())},"keydown.datalistWidget":function(t){var i,r,o=t.keyCode;return 40!=o||p.showList()?p.popover.isVisible?38==o?(p.markItem(p.index-1,!0),!1):t.shiftKey||33!=o&&36!=o?t.shiftKey||34!=o&&35!=o?13==o||27==o?(13==o&&(i=e("li.active-item:not(.hidden-item)",p.shadowList),p.changeValue(e("li.active-item:not(.hidden-item)",p.shadowList))),p.hideList(),s.customDatalist&&i&&i[0]&&e(n.input).getNativeElement().trigger("datalistselect"),!1):a:(r=e("li:not(.hidden-item)",p.shadowList),p.markItem(r.length-1,!0,r),!1):(p.markItem(0,!0),!1):a:(p.markItem(p.index+1,!0),!1)},"focus.datalistWidget":function(){e(this).hasClass("list-focus")&&p.showList()},"mousedown.datalistWidget":function(){e(this).is(":focus")&&p.showList()}}),e(this.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(this,"_resetListCached")).on("remove",function(e){e.originalEvent||p.detroy()}),this._resetListCached(),n.input.form&&(n.input.name||n.input.id)&&e(n.input.form).on("submit.datalistWidget"+n.input.id,function(){if(!e(n.input).hasClass("no-datalist-cache")&&"off"!=p._autocomplete){var t=e.prop(n.input,"value"),i=(n.input.name||n.input.id)+e.prop(n.input,"type");p.storedOptions||(p.storedOptions=d(i)),t&&-1==p.storedOptions.indexOf(t)&&(p.storedOptions.push(t),h(i,p.storedOptions))}}),e(i).on("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){p.destroy()})}}},destroy:function(){var t=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(n).off(".datalist"+this.id),e(i).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),t===a?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",t)},_resetListCached:function(){var n,a=this;this.needsUpdate=!0,this.lastUpdatedValue=!1,this.lastUnfoundValue="",this.updateTimer||(i.QUnit||(n=e(a.input).is(":focus")&&(e(a.input).hasClass("list-focus")||e.prop(a.input,"value")))?a.updateListOptions(n):t.ready("WINDOWLOAD",function(){a.updateTimer=setTimeout(function(){a.updateListOptions(),a=null,c=1},200+100*c)}))},updateListOptions:function(t){this.needsUpdate=!1,clearTimeout(this.updateTimer),this.updateTimer=!1,this.searchStart=s.customDatalist&&e(this.input).hasClass("search-start"),this.addMarkElement=r.addMark||e(this.input).hasClass("mark-option-text");var i,n,a,o,l,u,c,p=[],h=[],g=[];for(a=e.prop(this.datalist,"options"),o=0,l=a.length;l>o;o++)i=a[o],!i.disabled&&(c=e(i).val())&&(n={value:c.replace(m,"&lt;").replace(v,"&gt;"),label:e.trim(e.attr(i,"label")||f(i)).replace(m,"&lt;").replace(v,"&gt;"),className:i.className||""},n.label&&(n.className+=" has-option-label"),h.push(n.value),g.push(n));for(this.storedOptions||(this.storedOptions=e(this.input).hasClass("no-datalist-cache")||"off"==this._autocomplete?[]:d((this.input.name||this.input.id)+e.prop(this.input,"type"))),this.storedOptions.forEach(function(e){-1==h.indexOf(e)&&g.push({value:e,label:"",className:"stored-suggest",style:""})}),o=0,l=g.length;l>o;o++)u=g[o],p[o]='<li class="'+u.className+'" tabindex="-1" role="listitem">'+this.getOptionContent(u)+"</li>";this.arrayOptions=g,this.popover.contentElement.html('<div class="datalist-box"><ul role="list">'+p.join("\n")+"</ul></div>"),(t||this.popover.isVisible)&&this.showHideOptions()},getOptionContent:function(e){var t="";return r.getOptionContent?t=r.apply(this,arguments)||"":(t='<span class="option-value">'+e.value+"</span>",e.label&&(t+=' <span class="option-label">'+e.label+"</span>")),t},showHideOptions:function(t){var i=e.prop(this.input,"value").toLowerCase();if(i!==this.lastUpdatedValue){if(this.lastUnfoundValue&&0===i.indexOf(this.lastUnfoundValue))return this.hideList(),a;this.lastUpdatedValue=i;var n=!1,r=this.searchStart,o=e("li",this.shadowList),s=this;i?this.arrayOptions.forEach(function(t,a){var l,u,c;"lowerValue"in t||(t.lowerValue=t.value.toLowerCase(),t.label&&t.label!=t.value&&(t.lowerLabel=t.label.toLowerCase())),i!=t.lowerValue&&t.lowerLabel!=i&&(u=t.lowerValue.indexOf(i),l=r?!u:-1!==u,l?c="value":t.lowerLabel&&(u=t.lowerLabel.indexOf(i),l=r?!u:-1!==u,c="label")),l?(s.addMark(e(o[a]).removeClass("hidden-item"),t,c,u,i.length),n=!0):e(o[a]).addClass("hidden-item")}):o.length&&(this.removeMark(o.removeClass("hidden-item")),n=!0),this.hasViewableData=n,!t&&n&&this.showList(),n?this.lastUnfoundValue=!1:(this.lastUnfoundValue=i,this.hideList())}},otherType:{value:"label",label:"value"},addMark:function(t,i,n,a,r){if(this.addMarkElement){var o=i[n].substr(a,r);o=i[n].replace(o,"<mark>"+o+"</mark>"),e(".option-"+this.otherType[n]+" > mark",t).each(this._replaceMark),e(".option-"+n,t).html(o)}},_replaceMark:function(){var t=e(this).html();e(this).replaceWith(t)},removeMark:function(t){this.addMarkElement&&e("mark",t).each(this._replaceMark)},showList:function(){if(this.popover.isVisible)return!1;if(this.needsUpdate&&this.updateListOptions(),this.showHideOptions(!0),!this.hasViewableData)return!1;var e=this;return e.shadowList.find("li.active-item").removeClass("active-item"),e.popover.show(this.input),!0},hideList:function(){if(!this.popover.isVisible)return!1;var t=this;return this.popover.hide(),t.shadowList.removeClass("datalist-visible list-item-active"),t.index=-1,t.changedValue&&(t.triggeredByDatalist=!0,e(t.input).trigger("input").trigger("change"),t.changedValue=!1,t.triggeredByDatalist=!1),!0},scrollIntoView:function(t){var i,n=e("ul",this.shadowList),r=e("div.datalist-box",this.shadowList),o=t.position();return o.top-=(parseInt(n.css("paddingTop"),10)||0)+(parseInt(n.css("marginTop"),10)||0)+(parseInt(n.css("borderTopWidth"),10)||0),0>o.top?(r.scrollTop(r.scrollTop()+o.top-2),a):(o.top+=t.outerHeight(),i=r.height(),o.top>i&&r.scrollTop(r.scrollTop()+(o.top-i)+2),a)},changeValue:function(t){if(t[0]){var i,n=e("span.option-value",t).text(),a=e.prop(this.input,"value");n!=a&&(e(this.input).prop("value",n).triggerHandler("updateInput"),this.changedValue=!0,(i=e.data(this.input,"wsspinner"))&&i.setInput&&i.setInput(n))}},markItem:function(t,i,n){var a;n=n||e("li:not(.hidden-item)",this.shadowList),n.length&&(0>t?t=n.length-1:t>=n.length&&(t=0),n.removeClass("active-item"),this.shadowList.addClass("list-item-active"),a=n.filter(":eq("+t+")").addClass("active-item"),i&&(this.changeValue(a),this.scrollIntoView(a)),this.index=t)}};u()}}()});