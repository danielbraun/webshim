var swfmini=function(){function e(){if(!C){try{var e=x.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var i=E.length,a=0;i>a;a++)E[a]()}}function t(e){C?e():E[E.length]=e}function i(){}function a(){N&&n()}function n(){var e=x.getElementsByTagName("body")[0],t=p(f);t.setAttribute("type",b);var i=e.appendChild(t);if(i){var a=0;(function(){if(typeof i.GetVariable!=m){var n=i.GetVariable("$version");n&&(n=n.split(" ")[1].split(","),M.pv=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)])}else if(10>a)return a++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),i=null})()}}function r(e){var t=null,i=c(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=m)t=i;else{var a=i.getElementsByTagName(f)[0];a&&(t=a)}return t}function o(e,t,i){var a,n=c(i);if(M.wk&&312>M.wk)return a;if(n)if(typeof e.id==m&&(e.id=i),M.ie&&M.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var l="";for(var u in t)t[u]!=Object.prototype[u]&&(l+='<param name="'+u+'" value="'+t[u]+'" />');n.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",k[k.length]=e.id,a=c(e.id)}else{var d=p(f);d.setAttribute("type",b);for(var h in e)e[h]!=Object.prototype[h]&&("styleclass"==h.toLowerCase()?d.setAttribute("class",e[h]):"classid"!=h.toLowerCase()&&d.setAttribute(h,e[h]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(d,v,t[v]);n.parentNode.replaceChild(d,n),a=d}return a}function s(e,t,i){var a=p("param");a.setAttribute("name",t),a.setAttribute("value",i),e.appendChild(a)}function l(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(M.ie&&M.win?(t.style.display="none",function(){4==t.readyState?u(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=c(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=x.getElementById(e)}catch(i){}return t}function p(e){return x.createElement(e)}function d(e){var t=M.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]?!0:!1}function h(e,t){if(S){var i,a=t?"visible":"hidden";C&&i&&c(e)&&(c(e).style.visibility=a)}}var m="undefined",f="object",v=jQuery.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,x=document,T=navigator,N=!1,E=[a],k=[],A=[],C=!1,S=!0,M=function(){var e=typeof x.getElementById!=m&&typeof x.getElementsByTagName!=m&&typeof x.createElement!=m,t=T.userAgent.toLowerCase(),i=T.platform.toLowerCase(),a=i?/win/.test(i):/win/.test(t),n=i?/mac/.test(i):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof T.plugins!=m&&typeof T.plugins[g]==f)l=T.plugins[g].description,!l||typeof T.mimeTypes!=m&&T.mimeTypes[b]&&!T.mimeTypes[b].enabledPlugin||(N=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=m)try{var u=new ActiveXObject(y);u&&(l=u.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(c){}return{w3:e,pv:s,wk:r,ie:o,win:a,mac:n}}();return function(){M.ie&&M.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=A.length,t=0;e>t;t++)A[t][0].detachEvent(A[t][1],A[t][2]);for(var i=k.length,a=0;i>a;a++)l(k[a]);for(var n in M)M[n]=null;M=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return M.w3?r(e):void 0},embedSWF:function(e,i,a,n,r,s,l,u,c,p){var v={success:!1,id:i};M.w3&&!(M.wk&&312>M.wk)&&e&&i&&a&&n&&r?(h(i,!1),t(function(){a+="",n+="";var t={};if(c&&typeof c===f)for(var s in c)t[s]=c[s];t.data=e,t.width=a,t.height=n;var g={};if(u&&typeof u===f)for(var y in u)g[y]=u[y];if(l&&typeof l===f)for(var b in l)typeof g.flashvars!=m?g.flashvars+="&"+b+"="+l[b]:g.flashvars=b+"="+l[b];if(d(r)){var w=o(t,g,i);t.id==i&&h(i,!0),v.success=!0,v.ref=w}else h(i,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){S=!1},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,i){return M.w3?o(e,t,i):void 0},showExpressInstall:function(){},removeSWF:function(e){M.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:i,expressInstallCallback:function(){}}}();