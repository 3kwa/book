function checkScroll(){isScrolled&&($sn&&(wS>snTop&&$snSide.offset().top+$snSide.outerHeight()>wS+wh?($sn.hasClass("true-fixed")||$sn.addClass("true-fixed").removeClass("top bottom"),$sn.scrollTop()>wS-$snSide.offset().top&&!wD?snScroll=wS-$snSide.offset().top:$sn.scrollTop()<wS-$snSide.offset().top-$snSide.outerHeight()+snInHeight&&wD&&(snScroll=wS-$snSide.offset().top-$snSide.outerHeight()+snInHeight),$sn.scrollTop(snScroll)):($sn.removeClass("true-fixed"),$snSide.offset().top+$snSide.outerHeight()>wS+wh?($sn.addClass("top").removeClass("bottom"),snScroll=0):($sn.addClass("bottom").removeClass("top"),snScroll=snInHeight-$(window).height()))),isScrolled=!1),window.requestAnimationFrame(checkScroll)}!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function t(e,i){function s(t,e){return function(){return t.apply(e,arguments)}}var o;if(i=i||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=i.touchBoundary||10,this.layer=e,this.tapDelay=i.tapDelay||200,this.tapTimeout=i.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,l=0,c=a.length;c>l;l++)r[a[l]]=s(r[a[l]],r);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,i){var s=Node.prototype.removeEventListener;"click"===t?s.call(e,t,n.hijacked||n,i):s.call(e,t,n,i)},e.addEventListener=function(t,n,i){var s=Node.prototype.addEventListener;"click"===t?s.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):s.call(e,t,n,i)}),"function"==typeof e.onclick&&(o=e.onclick,e.addEventListener("click",function(t){o(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,s=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent),o=i&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(i&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;i&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,o;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],i){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!s){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,r,l,c,u=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,o&&(c=t.changedTouches[0],u=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),r=u.tagName.toLowerCase(),"label"===r){if(e=this.findControl(u)){if(this.focus(u),n)return!1;u=e}}else if(this.needsFocus(u))return t.timeStamp-a>100||i&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,t),i&&"select"===r||(this.targetElement=null,t.preventDefault()),!1);return i&&!s&&(l=u.fastClickScrollParent,l&&l.fastClickLastScrollTop!==l.scrollTop)?!0:(this.needsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,i,s,o;if("undefined"==typeof window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(s=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),s[1]>=10&&s[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(o=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],o>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}(),function($,t,e,n){"use strict";function i(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}var s=function(t){for(var e=t.length,n=$("head");e--;)0===n.has("."+t[e]).length&&n.append('<meta class="'+t[e]+'" />')};s(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),$(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof e.body&&FastClick.attach(e.body)});var o=function(t,n){if("string"==typeof t){if(n){var i;if(n.jquery){if(i=n[0],!i)return n}else i=n;return $(i.querySelectorAll(t))}return $(e.querySelectorAll(t))}return $(t,n)},a=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},r=function(t){for(var e=t.split("-"),n=e.length,i=[];n--;)0!==n?i.push(e[n]):this.namespace.length>0?i.push(this.namespace,e[n]):i.push(e[n]);return i.reverse().join("-")},l=function(t,e){var n=this,i=function(){var i=o(this),s=!i.data(n.attr_name(!0)+"-init");i.data(n.attr_name(!0)+"-init",$.extend({},n.settings,e||t,n.data_options(i))),s&&n.events(this)};return o(this.scope).is("["+this.attr_name()+"]")?i.call(this.scope):o("["+this.attr_name()+"]",this.scope).each(i),"string"==typeof t?this[t].call(this,e):void 0},c=function(t,e){function n(){e(t[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?n():i.call(t)):void n()};t.matchMedia=t.matchMedia||function(t){var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,s=t.createElement("body"),o=t.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(o),function(t){return o.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,i),e=42===o.offsetWidth,n.removeChild(s),{matches:e,media:t}}}(e),function(e){function n(){i&&(a(n),l&&e.fx.tick())}for(var i,s=0,o=["webkit","moz"],a=t.requestAnimationFrame,r=t.cancelAnimationFrame,l="undefined"!=typeof e.fx;s<o.length&&!a;s++)a=t[o[s]+"RequestAnimationFrame"],r=r||t[o[s]+"CancelAnimationFrame"]||t[o[s]+"CancelRequestAnimationFrame"];a?(t.requestAnimationFrame=a,t.cancelAnimationFrame=r,l&&(e.fx.timer=function(t){t()&&e.timers.push(t)&&!i&&(i=!0,n())},e.fx.stop=function(){i=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-s)),o=t.setTimeout(function(){e(n+i)},i);return s=n+i,o},t.cancelAnimationFrame=function(t){clearTimeout(t)})}($),t.Foundation={name:"Foundation",version:"5.5.1",media_queries:{small:o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"small-only":o(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"medium-only":o(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"large-only":o(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"xlarge-only":o(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:$("<style></style>").appendTo("head")[0].sheet,global:{namespace:n},init:function(e,n,i,s,a){var r=[e,i,s,a],l=[];if(this.rtl=/rtl/i.test(o("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&l.push(this.init_lib(n,r));else for(var c in this.libs)l.push(this.init_lib(c,n));return o(t).load(function(){o(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,e){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),e&&e.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?$.extend(!0,this.libs[t].settings,e[t]):"undefined"!=typeof this.libs[t].defaults&&$.extend(!0,this.libs[t].defaults,e[t]),this.libs[t].init.apply(this.libs[t],[this.scope,e[t]])):(e=e instanceof Array?e:new Array(e),this.libs[t].init.apply(this.libs[t],e))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=a,t.add_namespace=r,t.bindings=l,t.S=this.utils.S},inherit:function(t,e){for(var n=e.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(t[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace===n?$(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===n||/false/i.test(t)?"":t},libs:{},utils:{S:o,throttle:function(t,e){var n=null;return function(){var i=this,s=arguments;null==n&&(n=setTimeout(function(){t.apply(i,s),n=null},e))}},debounce:function(t,e,n){var i,s;return function(){var o=this,a=arguments,r=function(){i=null,n||(s=t.apply(o,a))},l=n&&!i;return clearTimeout(i),i=setTimeout(r,e),l&&(s=t.apply(o,a)),s}},data_options:function(t,e){function n(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function i(t){return"string"==typeof t?$.trim(t):t}e=e||"options";var s={},o,a,r,l=function(t){var n=Foundation.global.namespace;return t.data(n.length>0?n+"-"+e:e)},c=l(t);if("object"==typeof c)return c;for(r=(c||":").split(";"),o=r.length;o--;)a=r[o].split(":"),a=[a[0],a.slice(1).join(":")],/true/i.test(a[1])&&(a[1]=!0),/false/i.test(a[1])&&(a[1]=!1),n(a[1])&&(a[1]=-1===a[1].indexOf(".")?parseInt(a[1],10):parseFloat(a[1])),2===a.length&&a[0].length>0&&(s[i(a[0])]=i(a[1]));return s},register_media:function(t,e){Foundation.media_queries[t]===n&&($("head").append('<meta class="'+e+'"/>'),Foundation.media_queries[t]=i($("."+e).css("font-family")))},add_custom_rule:function(t,e){if(e===n&&Foundation.stylesheet)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var i=Foundation.media_queries[e];i!==n&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}},image_loaded:function(t,e){var n=this,i=t.length;0===i&&e(t),t.each(function(){c(n.S(this),function(){i-=1,0===i&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(e){return t.matchMedia(e).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},$.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document),function($){var t=function(t,e,n,i){if($(t).length>0){var s=$(t).offset().top;e=i?e:0,$("html:not(:animated),body:not(:animated)").animate({scrollTop:s-n},e)}},e=function(){return window.location.hash},n={classes:{loading:"sn-loading",failed:"sn-failed",success:"sn-active"},defaults:{sections:"h2",subSections:!1,sectionElem:"section",className:"scroll-nav",showHeadline:!0,headlineText:"Scroll To",showTopLink:!0,topLinkText:"Top",fixedMargin:40,scrollOffset:40,animated:!0,speed:500,insertLocation:"insertBefore",arrowKeys:!1,scrollToHash:!0,onInit:null,onRender:null,onDestroy:null,onResetPos:null},_set_body_class:function(t){var e=$("body");"loading"===t?e.addClass(n.classes.loading):e.removeClass(n.classes.loading).addClass("success"===t?n.classes.success:n.classes.failed)},_find_sections:function(t){var e=n.settings.sections,i=[];if(n.settings.showTopLink){var s=t.children().first();s.is(e)||i.push(s.nextUntil(e).andSelf())}t.find(e).each(function(){i.push($(this).nextUntil(e).andSelf())}),n.sections={raw:i}},_setup_sections:function(t){var e=[];$(t).each(function(t){var i=[],s=$(this),o="scrollNav-"+(t+1),a=function(){return 0===t},r=function(){return!s.eq(0).is(n.settings.sections)},l=n.settings.showTopLink&&a()&&r()?n.settings.topLinkText:s.filter(n.settings.sections).text();if(s.wrapAll("<"+n.settings.sectionElem+' id="'+o+'" class="'+n.settings.className+'__section" />'),n.settings.subSections){var c=s.filter(n.settings.subSections);c.length>0&&c.each(function(t){var e=o+"-"+(t+1),a=$(this).find("h2,h3,h4,h5").first().text(),r=s.filter($(this).nextUntil(c).andSelf());r.wrapAll('<div id="'+e+'" class="'+n.settings.className+'__sub-section" />'),i.push({id:e,text:a})})}e.push({id:o,text:l,sub_sections:i})}),n.sections.data=e},_tear_down_sections:function(t){$(t).each(function(){var t=this.sub_sections;$("#"+this.id).children().unwrap(),t.length>0&&$(t).each(function(){$("#"+this.id).children().unwrap()})})},_setup_nav:function(t){var e=$("<span />",{"class":n.settings.className+"__heading",text:n.settings.headlineText}),i=$("<div />",{"class":n.settings.className+"__wrapper"}),s=$("<nav />",{"class":n.settings.className,role:"navigation"}),o=$("<ol />",{"class":n.settings.className+"__list"});$.each(t,function(t){var e=0===t?$("<li />",{"class":n.settings.className+"__item active"}):$("<li />",{"class":n.settings.className+"__item"}),i=$("<a />",{href:"#"+this.id,"class":n.settings.className+"__link",text:this.text}),s;this.sub_sections.length>0&&(e.addClass("is-parent-item"),s=$("<ol />",{"class":n.settings.className+"__sub-list"}),$.each(this.sub_sections,function(){var t=$("<li />",{"class":n.settings.className+"__sub-item"}),e=$("<a />",{href:"#"+this.id,"class":n.settings.className+"__sub-link",text:this.text});s.append(t.append(e))})),o.append(e.append(i).append(s))}),s.append(n.settings.showHeadline?i.append(e).append(o):i.append(o)),n.nav=s},_insert_nav:function(){var t=n.settings.insertLocation,e=n.settings.insertTarget;n.nav[t](e)},_setup_pos:function(){var t=n.nav,e=$(window).height(),i=t.offset().top;$.each(n.sections.data,function(){var t=$("#"+this.id),e=t.height();this.top_offset=t.offset().top,this.bottom_offset=this.top_offset+e,t.attr("data-off",this.top_offset),this.sub_sections.length>0&&$.each(this.sub_sections,function(){var t=$("#"+this.id),e=t.height();this.top_offset=t.offset().top,this.bottom_offset=this.top_offset+e,t.attr("data-off",this.top_offset)})}),n.dims={vp_height:e,nav_offset:i}},_check_pos:function(){var t=n.nav,e=$(window).scrollTop(),i=e+n.settings.scrollOffset,s=e+n.dims.vp_height-n.settings.scrollOffset,o=[];$.each(n.sections.data,function(){(this.top_offset>=i&&this.top_offset<=s||this.bottom_offset>i&&this.bottom_offset<s||this.top_offset<i&&this.bottom_offset>s)&&o.push(this)}),t.find("."+n.settings.className+"__item").removeClass("active").removeClass("in-view"),t.find("."+n.settings.className+"__sub-item").removeClass("active"),$.each(o,function(e){if(0===e){t.find('a[href="#'+this.id+'"]').parents("."+n.settings.className+"__item").addClass("active").addClass("in-view");var a;this.sub_sections.length>0&&($.each(this.sub_sections,function(){(this.top_offset>=i&&this.top_offset<=s||this.bottom_offset>i&&this.bottom_offset<s||this.top_offset<i&&this.bottom_offset>s)&&(a||(a=this))}),a&&t.find('a[href="#'+a.id+'"]').parent().addClass("active"))}else t.find('a[href="#'+this.id+'"]').parents("."+n.settings.className+"__item").addClass("in-view");e++,n.sections.active=o})},_init_scroll_listener:function(){$(window).on("scroll.scrollNav",function(){n._check_pos()})},_rm_scroll_listeners:function(){$(window).off("scroll.scrollNav")},_init_resize_listener:function(){$(window).on("resize.scrollNav",function(){n._setup_pos(),n._check_pos()})},_rm_resize_listener:function(){$(window).off("resize.scrollNav")},_init_click_listener:function(){$("."+n.settings.className).find("a").on("click.scrollNav",function(e){e.preventDefault();var i=$(this).attr("href"),s=n.settings.speed,o=n.settings.scrollOffset,a=n.settings.animated;t(i,s,o,a)})},_rm_click_listener:function(){$("."+n.settings.className).find("a").off("click.scrollNav")},_init_keyboard_listener:function(e){n.settings.arrowKeys&&$(document).on("keydown.scrollNav",function(i){if(40===i.keyCode||38===i.keyCode){var s=function(t){var i=0,s=e.length;for(i;s>i;i++)if(e[i].id===n.sections.active[0].id){var o=40===t?i+1:i-1,a=void 0===e[o]?void 0:e[o].id;return a}},o=s(i.keyCode);if(void 0!==o){i.preventDefault();var a="#"+o,r=n.settings.speed,l=n.settings.scrollOffset,c=n.settings.animated;t(a,r,l,c)}}})},_rm_keyboard_listener:function(){$(document).off("keydown.scrollNav")},init:function(i){return this.each(function(){var s=$(this);n.settings=$.extend({},n.defaults,i),n.settings.insertTarget=n.settings.insertTarget?$(n.settings.insertTarget):s,s.length>0?(n.settings.onInit&&n.settings.onInit.call(this),n._set_body_class("loading"),n._find_sections(s),s.find(n.settings.sections).length>0?(n._setup_sections(n.sections.raw),n._setup_nav(n.sections.data),n.settings.insertTarget.length>0?(n._insert_nav(),n._setup_pos(),n._check_pos(),n._init_scroll_listener(),n._init_resize_listener(),n._init_click_listener(),n._init_keyboard_listener(n.sections.data),n._set_body_class("success"),n.settings.scrollToHash&&t(e()),n.settings.onRender&&n.settings.onRender.call(this)):(console.log('Build failed, scrollNav could not find "'+n.settings.insertTarget+'"'),n._set_body_class("failed"))):(console.log('Build failed, scrollNav could not find any "'+n.settings.sections+'s" inside of "'+s.selector+'"'),n._set_body_class("failed"))):(console.log('Build failed, scrollNav could not find "'+s.selector+'"'),n._set_body_class("failed"))})},destroy:function(){return this.each(function(){n._rm_scroll_listeners(),n._rm_resize_listener(),n._rm_click_listener(),n._rm_keyboard_listener(),$("body").removeClass("sn-loading sn-active sn-failed"),$("."+n.settings.className).remove(),n._tear_down_sections(n.sections.data),n.settings.onDestroy&&n.settings.onDestroy.call(this),n.settings=[],n.sections=void 0})},resetPos:function(){n._setup_pos(),n._check_pos(),n.settings.onResetPos&&n.settings.onResetPos.call(this)}};$.fn.scrollNav=function(){var t,e=arguments[0];if(n[e])e=n[e],t=Array.prototype.slice.call(arguments,1);else{if("object"!=typeof e&&e)return $.error("Method "+e+" does not exist in the scrollNav plugin"),this;e=n.init,t=arguments}return e.apply(this,t)}}(jQuery),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var i=(new Date).getTime(),s=Math.max(0,16-(i-t)),o=window.setTimeout(function(){e(i+s)},s);return t=i+s,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),$(document).foundation();var isScrolled=!1,$sn=$(".left-column"),snTop,snInHeight,snScroll=0,$snSide=$(".main-body"),wS=0,wD=!0,ww=$(window).width(),wh=$(window).height();$(document).ready(function(){$("section[data-type=chapter]").length>0&&$("section[data-type=chapter]").scrollNav({sections:"section>h1",subSections:"section",sectionElem:"div",insertTarget:$(".left-column").get(0),insertLocation:"prependTo",fixedMargin:1e3,showHeadline:!1,scrollToHash:!1,showTopLink:!1}),$(".toc").length>0&&($(".toc .children").slideUp(0).before($("<i>+</i>")),$(".toc i").on("click",function(t){t.preventDefault(),t.stopPropagation(),t.altKey||t.ctrlKey||t.metaKey?$(this).hasClass("on")?$(".toc i").removeClass("on").next().slideUp():$(".toc i").addClass("on").next().slideDown():$(this).toggleClass("on").next().slideToggle()})),$sn&&(snTop=$sn.offset().top,snInHeight=$sn.outerHeight(),isScrolled=!0,checkScroll())}),$(window).load(function(){$sn&&($sn.removeClass("true-fixed"),snTop=$sn.offset().top)}),$(window).scroll(function(){isScrolled=!0,wD=$(window).scrollTop()>wS,wS=$(window).scrollTop()}),$sn.scroll(function(){$sn&&$sn.hasClass("true-fixed")&&(snScroll=$(this).scrollTop())}),$(window).resize(function(){ww=$(window).width(),wh=$(window).height(),$sn&&(isScrolled=!1,$sn.removeClass("true-fixed").addClass("top").removeClass("bottom"),snTop=$sn.offset().top,snInHeight=$sn.outerHeight()),isScrolled=!0});