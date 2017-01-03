webpackJsonp([0,4],{

/***/ 1055:
/***/ function(module, exports) {



/***/ },

/***/ 1056:
/***/ function(module, exports) {

if("document"in self){if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(t){"use strict";if(!("Element"in t))return;var e="classList",i="prototype",n=t.Element[i],s=Object,r=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[i].indexOf||function(t){var e=0,i=this.length;for(;e<i;e++){if(e in this&&this[e]===t){return e}}return-1},o=function(t,e){this.name=t;this.code=DOMException[t];this.message=e},l=function(t,e){if(e===""){throw new o("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(e)){throw new o("INVALID_CHARACTER_ERR","String contains an invalid character")}return a.call(t,e)},c=function(t){var e=r.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],n=0,s=i.length;for(;n<s;n++){this.push(i[n])}this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=c[i]=[],f=function(){return new c(this)};o[i]=Error[i];u.item=function(t){return this[t]||null};u.contains=function(t){t+="";return l(this,t)!==-1};u.add=function(){var t=arguments,e=0,i=t.length,n,s=false;do{n=t[e]+"";if(l(this,n)===-1){this.push(n);s=true}}while(++e<i);if(s){this._updateClassName()}};u.remove=function(){var t=arguments,e=0,i=t.length,n,s=false,r;do{n=t[e]+"";r=l(this,n);while(r!==-1){this.splice(r,1);s=true;r=l(this,n)}}while(++e<i);if(s){this._updateClassName()}};u.toggle=function(t,e){t+="";var i=this.contains(t),n=i?e!==true&&"remove":e!==false&&"add";if(n){this[n](t)}if(e===true||e===false){return e}else{return!i}};u.toString=function(){return this.join(" ")};if(s.defineProperty){var h={get:f,enumerable:true,configurable:true};try{s.defineProperty(n,e,h)}catch(d){if(d.number===-2146823252){h.enumerable=false;s.defineProperty(n,e,h)}}}else if(s[i].__defineGetter__){n.__defineGetter__(e,f)}})(self)}else{(function(){"use strict";var t=document.createElement("_");t.classList.add("c1","c2");if(!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,n=arguments.length;for(i=0;i<n;i++){t=arguments[i];e.call(this,t)}}};e("add");e("remove")}t.classList.toggle("c3",false);if(t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){if(1 in arguments&&!this.contains(t)===!e){return e}else{return i.call(this,t)}}}t=null})()}}


/***/ },

/***/ 1057:
/***/ function(module, exports) {

!function(a,b){var c={},d={},e={},f=null;!function(a,b){function c(a){if("number"==typeof a)return a;var b={};for(var c in a)b[c]=a[c];return b}function d(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear",this._easingFunction=x}function e(){return a.isDeprecated("Invalid timing inputs","2016-03-02","TypeError exceptions will be thrown instead.",!0)}function f(b,c,e){var f=new d;return c&&(f.fill="both",f.duration="auto"),"number"!=typeof b||isNaN(b)?void 0!==b&&Object.getOwnPropertyNames(b).forEach(function(c){if("auto"!=b[c]){if(("number"==typeof f[c]||"duration"==c)&&("number"!=typeof b[c]||isNaN(b[c])))return;if("fill"==c&&v.indexOf(b[c])==-1)return;if("direction"==c&&w.indexOf(b[c])==-1)return;if("playbackRate"==c&&1!==b[c]&&a.isDeprecated("AnimationEffectTiming.playbackRate","2014-11-28","Use Animation.playbackRate instead."))return;f[c]=b[c]}}):f.duration=b,f}function g(a){return"number"==typeof a&&(a=isNaN(a)?{duration:0}:{duration:a}),a}function h(b,c){return b=a.numericTimingToObject(b),f(b,c)}function i(a,b,c,d){return a<0||a>1||c<0||c>1?x:function(e){function f(a,b,c){return 3*a*(1-c)*(1-c)*c+3*b*(1-c)*c*c+c*c*c}if(e<=0){var g=0;return a>0?g=b/a:!b&&c>0&&(g=d/c),g*e}if(e>=1){var h=0;return c<1?h=(d-1)/(c-1):1==c&&a<1&&(h=(b-1)/(a-1)),1+h*(e-1)}for(var i=0,j=1;i<j;){var k=(i+j)/2,l=f(a,c,k);if(Math.abs(e-l)<1e-5)return f(b,d,k);l<e?i=k:j=k}return f(b,d,k)}}function j(a,b){return function(c){if(c>=1)return 1;var d=1/a;return c+=b*d,c-c%d}}function k(a){C||(C=document.createElement("div").style),C.animationTimingFunction="",C.animationTimingFunction=a;var b=C.animationTimingFunction;if(""==b&&e())throw new TypeError(a+" is not a valid value for easing");return b}function l(a){if("linear"==a)return x;var b=E.exec(a);if(b)return i.apply(this,b.slice(1).map(Number));var c=F.exec(a);if(c)return j(Number(c[1]),{start:y,middle:z,end:A}[c[2]]);var d=B[a];return d?d:x}function m(a){return Math.abs(n(a)/a.playbackRate)}function n(a){return 0===a.duration||0===a.iterations?0:a.duration*a.iterations}function o(a,b,c){if(null==b)return G;var d=c.delay+a+c.endDelay;return b<Math.min(c.delay,d)?H:b>=Math.min(c.delay+a,d)?I:J}function p(a,b,c,d,e){switch(d){case H:return"backwards"==b||"both"==b?0:null;case J:return c-e;case I:return"forwards"==b||"both"==b?a:null;case G:return null}}function q(a,b,c,d,e){var f=e;return 0===a?b!==H&&(f+=c):f+=d/a,f}function r(a,b,c,d,e,f){var g=a===1/0?b%1:a%1;return 0!==g||c!==I||0===d||0===e&&0!==f||(g=1),g}function s(a,b,c,d){return a===I&&b===1/0?1/0:1===c?Math.floor(d)-1:Math.floor(d)}function t(a,b,c){var d=a;if("normal"!==a&&"reverse"!==a){var e=b;"alternate-reverse"===a&&(e+=1),d="normal",e!==1/0&&e%2!==0&&(d="reverse")}return"normal"===d?c:1-c}function u(a,b,c){var d=o(a,b,c),e=p(a,c.fill,b,d,c.delay);if(null===e)return null;var f=q(c.duration,d,c.iterations,e,c.iterationStart),g=r(f,c.iterationStart,d,c.iterations,e,c.duration),h=s(d,c.iterations,g,f),i=t(c.direction,h,g);return c._easingFunction(i)}var v="backwards|forwards|both|none".split("|"),w="reverse|alternate|alternate-reverse".split("|"),x=function(a){return a};d.prototype={_setMember:function(b,c){this["_"+b]=c,this._effect&&(this._effect._timingInput[b]=c,this._effect._timing=a.normalizeTimingInput(this._effect._timingInput),this._effect.activeDuration=a.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation())},get playbackRate(){return this._playbackRate},set delay(a){this._setMember("delay",a)},get delay(){return this._delay},set endDelay(a){this._setMember("endDelay",a)},get endDelay(){return this._endDelay},set fill(a){this._setMember("fill",a)},get fill(){return this._fill},set iterationStart(a){if((isNaN(a)||a<0)&&e())throw new TypeError("iterationStart must be a non-negative number, received: "+timing.iterationStart);this._setMember("iterationStart",a)},get iterationStart(){return this._iterationStart},set duration(a){if("auto"!=a&&(isNaN(a)||a<0)&&e())throw new TypeError("duration must be non-negative or auto, received: "+a);this._setMember("duration",a)},get duration(){return this._duration},set direction(a){this._setMember("direction",a)},get direction(){return this._direction},set easing(a){this._easingFunction=l(k(a)),this._setMember("easing",a)},get easing(){return this._easing},set iterations(a){if((isNaN(a)||a<0)&&e())throw new TypeError("iterations must be non-negative, received: "+a);this._setMember("iterations",a)},get iterations(){return this._iterations}};var y=1,z=.5,A=0,B={ease:i(.25,.1,.25,1),"ease-in":i(.42,0,1,1),"ease-out":i(0,0,.58,1),"ease-in-out":i(.42,0,.58,1),"step-start":j(1,y),"step-middle":j(1,z),"step-end":j(1,A)},C=null,D="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",E=new RegExp("cubic-bezier\\("+D+","+D+","+D+","+D+"\\)"),F=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,G=0,H=1,I=2,J=3;a.cloneTimingInput=c,a.makeTiming=f,a.numericTimingToObject=g,a.normalizeTimingInput=h,a.calculateActiveDuration=m,a.calculateIterationProgress=u,a.calculatePhase=o,a.normalizeEasing=k,a.parseEasingFunction=l}(c,f),function(a,b){function c(a,b){return a in k?k[a][b]||b:b}function d(a){return"display"===a||0===a.lastIndexOf("animation",0)||0===a.lastIndexOf("transition",0)}function e(a,b,e){if(!d(a)){var f=h[a];if(f){i.style[a]=b;for(var g in f){var j=f[g],k=i.style[j];e[j]=c(j,k)}}else e[a]=c(a,b)}}function f(a){var b=[];for(var c in a)if(!(c in["easing","offset","composite"])){var d=a[c];Array.isArray(d)||(d=[d]);for(var e,f=d.length,g=0;g<f;g++)e={},"offset"in a?e.offset=a.offset:1==f?e.offset=1:e.offset=g/(f-1),"easing"in a&&(e.easing=a.easing),"composite"in a&&(e.composite=a.composite),e[c]=d[g],b.push(e)}return b.sort(function(a,b){return a.offset-b.offset}),b}function g(b){function c(){var a=d.length;null==d[a-1].offset&&(d[a-1].offset=1),a>1&&null==d[0].offset&&(d[0].offset=0);for(var b=0,c=d[0].offset,e=1;e<a;e++){var f=d[e].offset;if(null!=f){for(var g=1;g<e-b;g++)d[b+g].offset=c+(f-c)*g/(e-b);b=e,c=f}}}if(null==b)return[];window.Symbol&&Symbol.iterator&&Array.prototype.from&&b[Symbol.iterator]&&(b=Array.from(b)),Array.isArray(b)||(b=f(b));for(var d=b.map(function(b){var c={};for(var d in b){var f=b[d];if("offset"==d){if(null!=f){if(f=Number(f),!isFinite(f))throw new TypeError("Keyframe offsets must be numbers.");if(f<0||f>1)throw new TypeError("Keyframe offsets must be between 0 and 1.")}}else if("composite"==d){if("add"==f||"accumulate"==f)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};if("replace"!=f)throw new TypeError("Invalid composite mode "+f+".")}else f="easing"==d?a.normalizeEasing(f):""+f;e(d,f,c)}return void 0==c.offset&&(c.offset=null),void 0==c.easing&&(c.easing="linear"),c}),g=!0,h=-(1/0),i=0;i<d.length;i++){var j=d[i].offset;if(null!=j){if(j<h)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");h=j}else g=!1}return d=d.filter(function(a){return a.offset>=0&&a.offset<=1}),g||c(),d}var h={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),j={thin:"1px",medium:"3px",thick:"5px"},k={borderBottomWidth:j,borderLeftWidth:j,borderRightWidth:j,borderTopWidth:j,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:j,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};a.convertToArrayForm=f,a.normalizeKeyframes=g}(c,f),function(a){var b={};a.isDeprecated=function(a,c,d,e){var f=e?"are":"is",g=new Date,h=new Date(c);return h.setMonth(h.getMonth()+3),!(g<h&&(a in b||console.warn("Web Animations: "+a+" "+f+" deprecated and will stop working on "+h.toDateString()+". "+d),b[a]=!0,1))},a.deprecated=function(b,c,d,e){var f=e?"are":"is";if(a.isDeprecated(b,c,d,e))throw new Error(b+" "+f+" no longer supported. "+d)}}(c),function(){if(document.documentElement.animate){var a=document.documentElement.animate([],0),b=!0;if(a&&(b=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(c){void 0===a[c]&&(b=!0)})),!b)return}!function(a,b,c){function d(a){for(var b={},c=0;c<a.length;c++)for(var d in a[c])if("offset"!=d&&"easing"!=d&&"composite"!=d){var e={offset:a[c].offset,easing:a[c].easing,value:a[c][d]};b[d]=b[d]||[],b[d].push(e)}for(var f in b){var g=b[f];if(0!=g[0].offset||1!=g[g.length-1].offset)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return b}function e(c){var d=[];for(var e in c)for(var f=c[e],g=0;g<f.length-1;g++){var h=g,i=g+1,j=f[h].offset,k=f[i].offset,l=j,m=k;0==g&&(l=-(1/0),0==k&&(i=h)),g==f.length-2&&(m=1/0,1==j&&(h=i)),d.push({applyFrom:l,applyTo:m,startOffset:f[h].offset,endOffset:f[i].offset,easingFunction:a.parseEasingFunction(f[h].easing),property:e,interpolation:b.propertyInterpolation(e,f[h].value,f[i].value)})}return d.sort(function(a,b){return a.startOffset-b.startOffset}),d}b.convertEffectInput=function(c){var f=a.normalizeKeyframes(c),g=d(f),h=e(g);return function(a,c){if(null!=c)h.filter(function(a){return c>=a.applyFrom&&c<a.applyTo}).forEach(function(d){var e=c-d.startOffset,f=d.endOffset-d.startOffset,g=0==f?0:d.easingFunction(e/f);b.apply(a,d.property,d.interpolation(g))});else for(var d in g)"offset"!=d&&"easing"!=d&&"composite"!=d&&b.clear(a,d)}}}(c,d,f),function(a,b,c){function d(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function e(a,b,c){h[c]=h[c]||[],h[c].push([a,b])}function f(a,b,c){for(var f=0;f<c.length;f++){var g=c[f];e(a,b,d(g))}}function g(c,e,f){var g=c;/-/.test(c)&&!a.isDeprecated("Hyphenated property names","2016-03-22","Use camelCase instead.",!0)&&(g=d(c)),"initial"!=e&&"initial"!=f||("initial"==e&&(e=i[g]),"initial"==f&&(f=i[g]));for(var j=e==f?[]:h[g],k=0;j&&k<j.length;k++){var l=j[k][0](e),m=j[k][0](f);if(void 0!==l&&void 0!==m){var n=j[k][1](l,m);if(n){var o=b.Interpolation.apply(null,n);return function(a){return 0==a?e:1==a?f:o(a)}}}}return b.Interpolation(!1,!0,function(a){return a?f:e})}var h={};b.addPropertiesHandler=f;var i={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};b.propertyInterpolation=g}(c,d,f),function(a,b,c){function d(b){var c=a.calculateActiveDuration(b),d=function(d){return a.calculateIterationProgress(c,d,b)};return d._totalDuration=b.delay+c+b.endDelay,d}b.KeyframeEffect=function(c,e,f,g){var h,i=d(a.normalizeTimingInput(f)),j=b.convertEffectInput(e),k=function(){j(c,h)};return k._update=function(a){return h=i(a),null!==h},k._clear=function(){j(c,null)},k._hasSameTarget=function(a){return c===a},k._target=c,k._totalDuration=i._totalDuration,k._id=g,k},b.NullEffect=function(a){var b=function(){a&&(a(),a=null)};return b._update=function(){return null},b._totalDuration=0,b._hasSameTarget=function(){return!1},b}}(c,d,f),function(a,b){function c(a,b,c){c.enumerable=!0,c.configurable=!0,Object.defineProperty(a,b,c)}function d(a){this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=a.style,this._length=0,this._isAnimatedProperty={};for(var b=0;b<this._style.length;b++){var c=this._style[b];this._surrogateStyle[c]=this._style[c]}this._updateIndices()}function e(a){if(!a._webAnimationsPatchedStyle){var b=new d(a);try{c(a,"style",{get:function(){return b}})}catch(b){a.style._set=function(b,c){a.style[b]=c},a.style._clear=function(b){a.style[b]=""}}a._webAnimationsPatchedStyle=a.style}}var f={cssText:1,length:1,parentRule:1},g={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},h={removeProperty:1,setProperty:1};d.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(a){for(var b={},c=0;c<this._surrogateStyle.length;c++)b[this._surrogateStyle[c]]=!0;this._surrogateStyle.cssText=a,this._updateIndices();for(var c=0;c<this._surrogateStyle.length;c++)b[this._surrogateStyle[c]]=!0;for(var d in b)this._isAnimatedProperty[d]||this._style.setProperty(d,this._surrogateStyle.getPropertyValue(d))},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:function(a){return function(){return this._surrogateStyle[a]}}(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0})},_set:function(a,b){this._style[a]=b,this._isAnimatedProperty[a]=!0},_clear:function(a){this._style[a]=this._surrogateStyle[a],delete this._isAnimatedProperty[a]}};for(var i in g)d.prototype[i]=function(a,b){return function(){var c=this._surrogateStyle[a].apply(this._surrogateStyle,arguments);return b&&(this._isAnimatedProperty[arguments[0]]||this._style[a].apply(this._style,arguments),this._updateIndices()),c}}(i,i in h);for(var j in document.documentElement.style)j in f||j in g||!function(a){c(d.prototype,a,{get:function(){return this._surrogateStyle[a]},set:function(b){this._surrogateStyle[a]=b,this._updateIndices(),this._isAnimatedProperty[a]||(this._style[a]=b)}})}(j);a.apply=function(b,c,d){e(b),b.style._set(a.propertyName(c),d)},a.clear=function(b,c){b._webAnimationsPatchedStyle&&b.style._clear(a.propertyName(c))}}(d,f),function(a){window.Element.prototype.animate=function(b,c){var d="";return c&&c.id&&(d=c.id),a.timeline._play(a.KeyframeEffect(this,b,c,d))}}(d),function(a,b){function c(a,b,d){if("number"==typeof a&&"number"==typeof b)return a*(1-d)+b*d;if("boolean"==typeof a&&"boolean"==typeof b)return d<.5?a:b;if(a.length==b.length){for(var e=[],f=0;f<a.length;f++)e.push(c(a[f],b[f],d));return e}throw"Mismatched interpolation arguments "+a+":"+b}a.Interpolation=function(a,b,d){return function(e){return d(c(a,b,e))}}}(d,f),function(a,b){function c(a,b,c){return Math.max(Math.min(a,c),b)}function d(b,d,e){var f=a.dot(b,d);f=c(f,-1,1);var g=[];if(1===f)g=b;else for(var h=Math.acos(f),i=1*Math.sin(e*h)/Math.sqrt(1-f*f),j=0;j<4;j++)g.push(b[j]*(Math.cos(e*h)-f*i)+d[j]*i);return g}var e=function(){function a(a,b){for(var c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],d=0;d<4;d++)for(var e=0;e<4;e++)for(var f=0;f<4;f++)c[d][e]+=b[d][f]*a[f][e];return c}function b(a){return 0==a[0][2]&&0==a[0][3]&&0==a[1][2]&&0==a[1][3]&&0==a[2][0]&&0==a[2][1]&&1==a[2][2]&&0==a[2][3]&&0==a[3][2]&&1==a[3][3]}function c(c,d,e,f,g){for(var h=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],i=0;i<4;i++)h[i][3]=g[i];for(var i=0;i<3;i++)for(var j=0;j<3;j++)h[3][i]+=c[j]*h[j][i];var k=f[0],l=f[1],m=f[2],n=f[3],o=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];o[0][0]=1-2*(l*l+m*m),o[0][1]=2*(k*l-m*n),o[0][2]=2*(k*m+l*n),o[1][0]=2*(k*l+m*n),o[1][1]=1-2*(k*k+m*m),o[1][2]=2*(l*m-k*n),o[2][0]=2*(k*m-l*n),o[2][1]=2*(l*m+k*n),o[2][2]=1-2*(k*k+l*l),h=a(h,o);var p=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];e[2]&&(p[2][1]=e[2],h=a(h,p)),e[1]&&(p[2][1]=0,p[2][0]=e[0],h=a(h,p)),e[0]&&(p[2][0]=0,p[1][0]=e[0],h=a(h,p));for(var i=0;i<3;i++)for(var j=0;j<3;j++)h[i][j]*=d[i];return b(h)?[h[0][0],h[0][1],h[1][0],h[1][1],h[3][0],h[3][1]]:h[0].concat(h[1],h[2],h[3])}return c}();a.composeMatrix=e,a.quat=d}(d,f),function(a,b,c){a.sequenceNumber=0;var d=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()};b.Animation=function(b){this.id="",b&&b._id&&(this.id=b._id),this._sequenceNumber=a.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!0,this.onfinish=null,this._finishHandlers=[],this._effect=b,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1},b.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&0===this.currentTime?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,b.timeline._animations.push(this))},_tickCurrentTime:function(a,b){a!=this._currentTime&&(this._currentTime=a,this._isFinished&&!b&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive())},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(a){a=+a,isNaN(a)||(b.restart(),this._paused||null==this._startTime||(this._startTime=this._timeline.currentTime-a/this._playbackRate),this._currentTimePending=!1,this._currentTime!=a&&(this._idle&&(this._idle=!1,this._paused=!0),this._tickCurrentTime(a,!0),b.applyDirtiedAnimation(this)))},get startTime(){return this._startTime},set startTime(a){a=+a,isNaN(a)||this._paused||this._idle||(this._startTime=a,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),b.applyDirtiedAnimation(this))},get playbackRate(){return this._playbackRate},set playbackRate(a){if(a!=this._playbackRate){var c=this.currentTime;this._playbackRate=a,this._startTime=null,"paused"!=this.playState&&"idle"!=this.playState&&(this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),b.applyDirtiedAnimation(this)),null!=c&&(this.currentTime=c)}},get _isFinished(){return!this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":null==this._startTime&&!this._paused&&0!=this.playbackRate||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},_rewind:function(){if(this._playbackRate>=0)this._currentTime=0;else{if(!(this._totalDuration<1/0))throw new DOMException("Unable to rewind negative playback rate animation with infinite duration","InvalidStateError");this._currentTime=this._totalDuration}},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),b.applyDirtiedAnimation(this)},pause:function(){this._isFinished||this._paused||this._idle?this._idle&&(this._rewind(),this._idle=!1):this._currentTimePending=!0,this._startTime=null,this._paused=!0},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1,b.applyDirtiedAnimation(this))},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._isFinished=!0,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this._effect._update(null),b.applyDirtiedAnimation(this))},reverse:function(){this.playbackRate*=-1,this.play()},addEventListener:function(a,b){"function"==typeof b&&"finish"==a&&this._finishHandlers.push(b)},removeEventListener:function(a,b){if("finish"==a){var c=this._finishHandlers.indexOf(b);c>=0&&this._finishHandlers.splice(c,1)}},_fireEvents:function(a){if(this._isFinished){if(!this._finishedFlag){var b=new d(this,this._currentTime,a),c=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);setTimeout(function(){c.forEach(function(a){a.call(b.target,b)})},0),this._finishedFlag=!0}}else this._finishedFlag=!1},_tick:function(a,b){this._idle||this._paused||(null==this._startTime?b&&(this.startTime=a-this._currentTime/this.playbackRate):this._isFinished||this._tickCurrentTime((a-this._startTime)*this.playbackRate)),b&&(this._currentTimePending=!1,this._fireEvents(a))},get _needsTick(){return this.playState in{pending:1,running:1}||!this._finishedFlag},_targetAnimations:function(){var a=this._effect._target;return a._activeAnimations||(a._activeAnimations=[]),a._activeAnimations},_markTarget:function(){var a=this._targetAnimations();a.indexOf(this)===-1&&a.push(this)},_unmarkTarget:function(){var a=this._targetAnimations(),b=a.indexOf(this);b!==-1&&a.splice(b,1)}}}(c,d,f),function(a,b,c){function d(a){var b=j;j=[],a<q.currentTime&&(a=q.currentTime),q._animations.sort(e),q._animations=h(a,!0,q._animations)[0],b.forEach(function(b){b[1](a)}),g(),l=void 0}function e(a,b){return a._sequenceNumber-b._sequenceNumber}function f(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0}function g(){o.forEach(function(a){a()}),o.length=0}function h(a,c,d){p=!0,n=!1;var e=b.timeline;e.currentTime=a,m=!1;var f=[],g=[],h=[],i=[];return d.forEach(function(b){b._tick(a,c),b._inEffect?(g.push(b._effect),b._markTarget()):(f.push(b._effect),b._unmarkTarget()),b._needsTick&&(m=!0);var d=b._inEffect||b._needsTick;b._inTimeline=d,d?h.push(b):i.push(b)}),o.push.apply(o,f),o.push.apply(o,g),m&&requestAnimationFrame(function(){}),p=!1,[h,i]}var i=window.requestAnimationFrame,j=[],k=0;window.requestAnimationFrame=function(a){var b=k++;return 0==j.length&&i(d),j.push([b,a]),b},window.cancelAnimationFrame=function(a){j.forEach(function(b){b[0]==a&&(b[1]=function(){})})},f.prototype={_play:function(c){c._timing=a.normalizeTimingInput(c.timing);var d=new b.Animation(c);return d._idle=!1,d._timeline=this,this._animations.push(d),b.restart(),b.applyDirtiedAnimation(d),d}};var l=void 0,m=!1,n=!1;b.restart=function(){return m||(m=!0,requestAnimationFrame(function(){}),n=!0),n},b.applyDirtiedAnimation=function(a){if(!p){a._markTarget();var c=a._targetAnimations();c.sort(e);var d=h(b.timeline.currentTime,!1,c.slice())[1];d.forEach(function(a){var b=q._animations.indexOf(a);b!==-1&&q._animations.splice(b,1)}),g()}};var o=[],p=!1,q=new f;b.timeline=q}(c,d,f),function(a,b){function c(a,b){for(var c=0,d=0;d<a.length;d++)c+=a[d]*b[d];return c}function d(a,b){return[a[0]*b[0]+a[4]*b[1]+a[8]*b[2]+a[12]*b[3],a[1]*b[0]+a[5]*b[1]+a[9]*b[2]+a[13]*b[3],a[2]*b[0]+a[6]*b[1]+a[10]*b[2]+a[14]*b[3],a[3]*b[0]+a[7]*b[1]+a[11]*b[2]+a[15]*b[3],a[0]*b[4]+a[4]*b[5]+a[8]*b[6]+a[12]*b[7],a[1]*b[4]+a[5]*b[5]+a[9]*b[6]+a[13]*b[7],a[2]*b[4]+a[6]*b[5]+a[10]*b[6]+a[14]*b[7],a[3]*b[4]+a[7]*b[5]+a[11]*b[6]+a[15]*b[7],a[0]*b[8]+a[4]*b[9]+a[8]*b[10]+a[12]*b[11],a[1]*b[8]+a[5]*b[9]+a[9]*b[10]+a[13]*b[11],a[2]*b[8]+a[6]*b[9]+a[10]*b[10]+a[14]*b[11],a[3]*b[8]+a[7]*b[9]+a[11]*b[10]+a[15]*b[11],a[0]*b[12]+a[4]*b[13]+a[8]*b[14]+a[12]*b[15],a[1]*b[12]+a[5]*b[13]+a[9]*b[14]+a[13]*b[15],a[2]*b[12]+a[6]*b[13]+a[10]*b[14]+a[14]*b[15],a[3]*b[12]+a[7]*b[13]+a[11]*b[14]+a[15]*b[15]]}function e(a){var b=a.rad||0,c=a.deg||0,d=a.grad||0,e=a.turn||0,f=(c/360+d/400+e)*(2*Math.PI)+b;return f}function f(a){switch(a.t){case"rotatex":var b=e(a.d[0]);return[1,0,0,0,0,Math.cos(b),Math.sin(b),0,0,-Math.sin(b),Math.cos(b),0,0,0,0,1];case"rotatey":var b=e(a.d[0]);return[Math.cos(b),0,-Math.sin(b),0,0,1,0,0,Math.sin(b),0,Math.cos(b),0,0,0,0,1];case"rotate":case"rotatez":var b=e(a.d[0]);return[Math.cos(b),Math.sin(b),0,0,-Math.sin(b),Math.cos(b),0,0,0,0,1,0,0,0,0,1];case"rotate3d":var c=a.d[0],d=a.d[1],f=a.d[2],b=e(a.d[3]),g=c*c+d*d+f*f;if(0===g)c=1,d=0,f=0;else if(1!==g){var h=Math.sqrt(g);c/=h,d/=h,f/=h}var i=Math.sin(b/2),j=i*Math.cos(b/2),k=i*i;return[1-2*(d*d+f*f)*k,2*(c*d*k+f*j),2*(c*f*k-d*j),0,2*(c*d*k-f*j),1-2*(c*c+f*f)*k,2*(d*f*k+c*j),0,2*(c*f*k+d*j),2*(d*f*k-c*j),1-2*(c*c+d*d)*k,0,0,0,0,1];case"scale":return[a.d[0],0,0,0,0,a.d[1],0,0,0,0,1,0,0,0,0,1];case"scalex":return[a.d[0],0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"scaley":return[1,0,0,0,0,a.d[0],0,0,0,0,1,0,0,0,0,1];case"scalez":return[1,0,0,0,0,1,0,0,0,0,a.d[0],0,0,0,0,1];case"scale3d":return[a.d[0],0,0,0,0,a.d[1],0,0,0,0,a.d[2],0,0,0,0,1];case"skew":var l=e(a.d[0]),m=e(a.d[1]);return[1,Math.tan(m),0,0,Math.tan(l),1,0,0,0,0,1,0,0,0,0,1];case"skewx":var b=e(a.d[0]);return[1,0,0,0,Math.tan(b),1,0,0,0,0,1,0,0,0,0,1];case"skewy":var b=e(a.d[0]);return[1,Math.tan(b),0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"translate":var c=a.d[0].px||0,d=a.d[1].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,d,0,1];case"translatex":var c=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,0,0,1];case"translatey":var d=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,0,d,0,1];case"translatez":var f=a.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,f,1];case"translate3d":var c=a.d[0].px||0,d=a.d[1].px||0,f=a.d[2].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,c,d,f,1];case"perspective":var n=a.d[0].px?-1/a.d[0].px:0;return[1,0,0,0,0,1,0,0,0,0,1,n,0,0,0,1];case"matrix":return[a.d[0],a.d[1],0,0,a.d[2],a.d[3],0,0,0,0,1,0,a.d[4],a.d[5],0,1];case"matrix3d":return a.d}}function g(a){return 0===a.length?[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]:a.map(f).reduce(d)}function h(a){return[i(g(a))]}var i=function(){function a(a){return a[0][0]*a[1][1]*a[2][2]+a[1][0]*a[2][1]*a[0][2]+a[2][0]*a[0][1]*a[1][2]-a[0][2]*a[1][1]*a[2][0]-a[1][2]*a[2][1]*a[0][0]-a[2][2]*a[0][1]*a[1][0]}function b(b){for(var c=1/a(b),d=b[0][0],e=b[0][1],f=b[0][2],g=b[1][0],h=b[1][1],i=b[1][2],j=b[2][0],k=b[2][1],l=b[2][2],m=[[(h*l-i*k)*c,(f*k-e*l)*c,(e*i-f*h)*c,0],[(i*j-g*l)*c,(d*l-f*j)*c,(f*g-d*i)*c,0],[(g*k-h*j)*c,(j*e-d*k)*c,(d*h-e*g)*c,0]],n=[],o=0;o<3;o++){for(var p=0,q=0;q<3;q++)p+=b[3][q]*m[q][o];n.push(p)}return n.push(1),m.push(n),m}function d(a){return[[a[0][0],a[1][0],a[2][0],a[3][0]],[a[0][1],a[1][1],a[2][1],a[3][1]],[a[0][2],a[1][2],a[2][2],a[3][2]],[a[0][3],a[1][3],a[2][3],a[3][3]]]}function e(a,b){for(var c=[],d=0;d<4;d++){for(var e=0,f=0;f<4;f++)e+=a[f]*b[f][d];c.push(e)}return c}function f(a){var b=g(a);return[a[0]/b,a[1]/b,a[2]/b]}function g(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])}function h(a,b,c,d){return[c*a[0]+d*b[0],c*a[1]+d*b[1],c*a[2]+d*b[2]]}function i(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}function j(j){var k=[j.slice(0,4),j.slice(4,8),j.slice(8,12),j.slice(12,16)];if(1!==k[3][3])return null;for(var l=[],m=0;m<4;m++)l.push(k[m].slice());for(var m=0;m<3;m++)l[m][3]=0;if(0===a(l))return!1;var n,o=[];if(k[0][3]||k[1][3]||k[2][3]){o.push(k[0][3]),o.push(k[1][3]),o.push(k[2][3]),o.push(k[3][3]);var p=b(l),q=d(p);n=e(o,q)}else n=[0,0,0,1];var r=k[3].slice(0,3),s=[];s.push(k[0].slice(0,3));var t=[];t.push(g(s[0])),s[0]=f(s[0]);var u=[];s.push(k[1].slice(0,3)),u.push(c(s[0],s[1])),s[1]=h(s[1],s[0],1,-u[0]),t.push(g(s[1])),s[1]=f(s[1]),u[0]/=t[1],s.push(k[2].slice(0,3)),u.push(c(s[0],s[2])),s[2]=h(s[2],s[0],1,-u[1]),u.push(c(s[1],s[2])),s[2]=h(s[2],s[1],1,-u[2]),t.push(g(s[2])),s[2]=f(s[2]),u[1]/=t[2],u[2]/=t[2];var v=i(s[1],s[2]);if(c(s[0],v)<0)for(var m=0;m<3;m++)t[m]*=-1,s[m][0]*=-1,s[m][1]*=-1,s[m][2]*=-1;var w,x,y=s[0][0]+s[1][1]+s[2][2]+1;return y>1e-4?(w=.5/Math.sqrt(y),x=[(s[2][1]-s[1][2])*w,(s[0][2]-s[2][0])*w,(s[1][0]-s[0][1])*w,.25/w]):s[0][0]>s[1][1]&&s[0][0]>s[2][2]?(w=2*Math.sqrt(1+s[0][0]-s[1][1]-s[2][2]),x=[.25*w,(s[0][1]+s[1][0])/w,(s[0][2]+s[2][0])/w,(s[2][1]-s[1][2])/w]):s[1][1]>s[2][2]?(w=2*Math.sqrt(1+s[1][1]-s[0][0]-s[2][2]),x=[(s[0][1]+s[1][0])/w,.25*w,(s[1][2]+s[2][1])/w,(s[0][2]-s[2][0])/w]):(w=2*Math.sqrt(1+s[2][2]-s[0][0]-s[1][1]),x=[(s[0][2]+s[2][0])/w,(s[1][2]+s[2][1])/w,.25*w,(s[1][0]-s[0][1])/w]),[r,t,u,x,n]}return j}();a.dot=c,a.makeMatrixDecomposition=h}(d,f),function(a){function b(a,b){var c=a.exec(b);if(c)return c=a.ignoreCase?c[0].toLowerCase():c[0],[c,b.substr(c.length)]}function c(a,b){b=b.replace(/^\s*/,"");var c=a(b);if(c)return[c[0],c[1].replace(/^\s*/,"")]}function d(a,d,e){a=c.bind(null,a);for(var f=[];;){var g=a(e);if(!g)return[f,e];if(f.push(g[0]),e=g[1],g=b(d,e),!g||""==g[1])return[f,e];e=g[1]}}function e(a,b){for(var c=0,d=0;d<b.length&&(!/\s|,/.test(b[d])||0!=c);d++)if("("==b[d])c++;else if(")"==b[d]&&(c--,0==c&&d++,c<=0))break;var e=a(b.substr(0,d));return void 0==e?void 0:[e,b.substr(d)]}function f(a,b){for(var c=a,d=b;c&&d;)c>d?c%=d:d%=c;return c=a*b/(c+d)}function g(a){return function(b){var c=a(b);return c&&(c[0]=void 0),c}}function h(a,b){return function(c){var d=a(c);return d?d:[b,c]}}function i(b,c){for(var d=[],e=0;e<b.length;e++){var f=a.consumeTrimmed(b[e],c);if(!f||""==f[0])return;void 0!==f[0]&&d.push(f[0]),c=f[1]}if(""==c)return d}function j(a,b,c,d,e){for(var g=[],h=[],i=[],j=f(d.length,e.length),k=0;k<j;k++){var l=b(d[k%d.length],e[k%e.length]);if(!l)return;g.push(l[0]),h.push(l[1]),i.push(l[2])}return[g,h,function(b){var d=b.map(function(a,b){return i[b](a)}).join(c);return a?a(d):d}]}function k(a,b,c){for(var d=[],e=[],f=[],g=0,h=0;h<c.length;h++)if("function"==typeof c[h]){var i=c[h](a[g],b[g++]);d.push(i[0]),e.push(i[1]),f.push(i[2])}else!function(a){d.push(!1),e.push(!1),f.push(function(){return c[a]})}(h);return[d,e,function(a){for(var b="",c=0;c<a.length;c++)b+=f[c](a[c]);return b}]}a.consumeToken=b,a.consumeTrimmed=c,a.consumeRepeated=d,a.consumeParenthesised=e,a.ignore=g,a.optional=h,a.consumeList=i,a.mergeNestedRepeated=j.bind(null,null),a.mergeWrappedNestedRepeated=j,a.mergeList=k}(d),function(a){function b(b){function c(b){var c=a.consumeToken(/^inset/i,b);if(c)return d.inset=!0,c;var c=a.consumeLengthOrPercent(b);if(c)return d.lengths.push(c[0]),c;var c=a.consumeColor(b);return c?(d.color=c[0],c):void 0}var d={inset:!1,lengths:[],color:null},e=a.consumeRepeated(c,/^/,b);if(e&&e[0].length)return[d,e[1]]}function c(c){var d=a.consumeRepeated(b,/^,/,c);if(d&&""==d[1])return d[0]}function d(b,c){for(;b.lengths.length<Math.max(b.lengths.length,c.lengths.length);)b.lengths.push({px:0});for(;c.lengths.length<Math.max(b.lengths.length,c.lengths.length);)c.lengths.push({px:0});if(b.inset==c.inset&&!!b.color==!!c.color){for(var d,e=[],f=[[],0],g=[[],0],h=0;h<b.lengths.length;h++){var i=a.mergeDimensions(b.lengths[h],c.lengths[h],2==h);f[0].push(i[0]),g[0].push(i[1]),e.push(i[2])}if(b.color&&c.color){var j=a.mergeColors(b.color,c.color);f[1]=j[0],g[1]=j[1],d=j[2];
}return[f,g,function(a){for(var c=b.inset?"inset ":" ",f=0;f<e.length;f++)c+=e[f](a[0][f])+" ";return d&&(c+=d(a[1])),c}]}}function e(b,c,d,e){function f(a){return{inset:a,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var g=[],h=[],i=0;i<d.length||i<e.length;i++){var j=d[i]||f(e[i].inset),k=e[i]||f(d[i].inset);g.push(j),h.push(k)}return a.mergeNestedRepeated(b,c,g,h)}var f=e.bind(null,d,", ");a.addPropertiesHandler(c,f,["box-shadow","text-shadow"])}(d),function(a,b){function c(a){return a.toFixed(3).replace(".000","")}function d(a,b,c){return Math.min(b,Math.max(a,c))}function e(a){if(/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a))return Number(a)}function f(a,b){return[a,b,c]}function g(a,b){if(0!=a)return i(0,1/0)(a,b)}function h(a,b){return[a,b,function(a){return Math.round(d(1,1/0,a))}]}function i(a,b){return function(e,f){return[e,f,function(e){return c(d(a,b,e))}]}}function j(a,b){return[a,b,Math.round]}a.clamp=d,a.addPropertiesHandler(e,i(0,1/0),["border-image-width","line-height"]),a.addPropertiesHandler(e,i(0,1),["opacity","shape-image-threshold"]),a.addPropertiesHandler(e,g,["flex-grow","flex-shrink"]),a.addPropertiesHandler(e,h,["orphans","widows"]),a.addPropertiesHandler(e,j,["z-index"]),a.parseNumber=e,a.mergeNumbers=f,a.numberToString=c}(d,f),function(a,b){function c(a,b){if("visible"==a||"visible"==b)return[0,1,function(c){return c<=0?a:c>=1?b:"visible"}]}a.addPropertiesHandler(String,c,["visibility"])}(d),function(a,b){function c(a){a=a.trim(),f.fillStyle="#000",f.fillStyle=a;var b=f.fillStyle;if(f.fillStyle="#fff",f.fillStyle=a,b==f.fillStyle){f.fillRect(0,0,1,1);var c=f.getImageData(0,0,1,1).data;f.clearRect(0,0,1,1);var d=c[3]/255;return[c[0]*d,c[1]*d,c[2]*d,d]}}function d(b,c){return[b,c,function(b){function c(a){return Math.max(0,Math.min(255,a))}if(b[3])for(var d=0;d<3;d++)b[d]=Math.round(c(b[d]/b[3]));return b[3]=a.numberToString(a.clamp(0,1,b[3])),"rgba("+b.join(",")+")"}]}var e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");e.width=e.height=1;var f=e.getContext("2d");a.addPropertiesHandler(c,d,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","outline-color","text-decoration-color"]),a.consumeColor=a.consumeParenthesised.bind(null,c),a.mergeColors=d}(d,f),function(a,b){function c(a,b){if(b=b.trim().toLowerCase(),"0"==b&&"px".search(a)>=0)return{px:0};if(/^[^(]*$|^calc/.test(b)){b=b.replace(/calc\(/g,"(");var c={};b=b.replace(a,function(a){return c[a]=null,"U"+a});for(var d="U("+a.source+")",e=b.replace(/[-+]?(\d*\.)?\d+/g,"N").replace(new RegExp("N"+d,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),f=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],g=0;g<f.length;)f[g].test(e)?(e=e.replace(f[g],"$1"),g=0):g++;if("D"==e){for(var h in c){var i=eval(b.replace(new RegExp("U"+h,"g"),"").replace(new RegExp(d,"g"),"*0"));if(!isFinite(i))return;c[h]=i}return c}}}function d(a,b){return e(a,b,!0)}function e(b,c,d){var e,f=[];for(e in b)f.push(e);for(e in c)f.indexOf(e)<0&&f.push(e);return b=f.map(function(a){return b[a]||0}),c=f.map(function(a){return c[a]||0}),[b,c,function(b){var c=b.map(function(c,e){return 1==b.length&&d&&(c=Math.max(c,0)),a.numberToString(c)+f[e]}).join(" + ");return b.length>1?"calc("+c+")":c}]}var f="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",g=c.bind(null,new RegExp(f,"g")),h=c.bind(null,new RegExp(f+"|%","g")),i=c.bind(null,/deg|rad|grad|turn/g);a.parseLength=g,a.parseLengthOrPercent=h,a.consumeLengthOrPercent=a.consumeParenthesised.bind(null,h),a.parseAngle=i,a.mergeDimensions=e;var j=a.consumeParenthesised.bind(null,g),k=a.consumeRepeated.bind(void 0,j,/^/),l=a.consumeRepeated.bind(void 0,k,/^,/);a.consumeSizePairList=l;var m=function(a){var b=l(a);if(b&&""==b[1])return b[0]},n=a.mergeNestedRepeated.bind(void 0,d," "),o=a.mergeNestedRepeated.bind(void 0,n,",");a.mergeNonNegativeSizePair=n,a.addPropertiesHandler(m,o,["background-size"]),a.addPropertiesHandler(h,d,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),a.addPropertiesHandler(h,e,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","text-indent","top","vertical-align","word-spacing"])}(d,f),function(a,b){function c(b){return a.consumeLengthOrPercent(b)||a.consumeToken(/^auto/,b)}function d(b){var d=a.consumeList([a.ignore(a.consumeToken.bind(null,/^rect/)),a.ignore(a.consumeToken.bind(null,/^\(/)),a.consumeRepeated.bind(null,c,/^,/),a.ignore(a.consumeToken.bind(null,/^\)/))],b);if(d&&4==d[0].length)return d[0]}function e(b,c){return"auto"==b||"auto"==c?[!0,!1,function(d){var e=d?b:c;if("auto"==e)return"auto";var f=a.mergeDimensions(e,e);return f[2](f[0])}]:a.mergeDimensions(b,c)}function f(a){return"rect("+a+")"}var g=a.mergeWrappedNestedRepeated.bind(null,f,e,", ");a.parseBox=d,a.mergeBoxes=g,a.addPropertiesHandler(d,g,["clip"])}(d,f),function(a,b){function c(a){return function(b){var c=0;return a.map(function(a){return a===k?b[c++]:a})}}function d(a){return a}function e(b){if(b=b.toLowerCase().trim(),"none"==b)return[];for(var c,d=/\s*(\w+)\(([^)]*)\)/g,e=[],f=0;c=d.exec(b);){if(c.index!=f)return;f=c.index+c[0].length;var g=c[1],h=n[g];if(!h)return;var i=c[2].split(","),j=h[0];if(j.length<i.length)return;for(var k=[],o=0;o<j.length;o++){var p,q=i[o],r=j[o];if(p=q?{A:function(b){return"0"==b.trim()?m:a.parseAngle(b)},N:a.parseNumber,T:a.parseLengthOrPercent,L:a.parseLength}[r.toUpperCase()](q):{a:m,n:k[0],t:l}[r],void 0===p)return;k.push(p)}if(e.push({t:g,d:k}),d.lastIndex==b.length)return e}}function f(a){return a.toFixed(6).replace(".000000","")}function g(b,c){if(b.decompositionPair!==c){b.decompositionPair=c;var d=a.makeMatrixDecomposition(b)}if(c.decompositionPair!==b){c.decompositionPair=b;var e=a.makeMatrixDecomposition(c)}return null==d[0]||null==e[0]?[[!1],[!0],function(a){return a?c[0].d:b[0].d}]:(d[0].push(0),e[0].push(1),[d,e,function(b){var c=a.quat(d[0][3],e[0][3],b[5]),g=a.composeMatrix(b[0],b[1],b[2],c,b[4]),h=g.map(f).join(",");return h}])}function h(a){return a.replace(/[xy]/,"")}function i(a){return a.replace(/(x|y|z|3d)?$/,"3d")}function j(b,c){var d=a.makeMatrixDecomposition&&!0,e=!1;if(!b.length||!c.length){b.length||(e=!0,b=c,c=[]);for(var f=0;f<b.length;f++){var j=b[f].t,k=b[f].d,l="scale"==j.substr(0,5)?1:0;c.push({t:j,d:k.map(function(a){if("number"==typeof a)return l;var b={};for(var c in a)b[c]=l;return b})})}}var m=function(a,b){return"perspective"==a&&"perspective"==b||("matrix"==a||"matrix3d"==a)&&("matrix"==b||"matrix3d"==b)},o=[],p=[],q=[];if(b.length!=c.length){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]]}else for(var f=0;f<b.length;f++){var j,s=b[f].t,t=c[f].t,u=b[f].d,v=c[f].d,w=n[s],x=n[t];if(m(s,t)){if(!d)return;var r=g([b[f]],[c[f]]);o.push(r[0]),p.push(r[1]),q.push(["matrix",[r[2]]])}else{if(s==t)j=s;else if(w[2]&&x[2]&&h(s)==h(t))j=h(s),u=w[2](u),v=x[2](v);else{if(!w[1]||!x[1]||i(s)!=i(t)){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]];break}j=i(s),u=w[1](u),v=x[1](v)}for(var y=[],z=[],A=[],B=0;B<u.length;B++){var C="number"==typeof u[B]?a.mergeNumbers:a.mergeDimensions,r=C(u[B],v[B]);y[B]=r[0],z[B]=r[1],A.push(r[2])}o.push(y),p.push(z),q.push([j,A])}}if(e){var D=o;o=p,p=D}return[o,p,function(a){return a.map(function(a,b){var c=a.map(function(a,c){return q[b][1][c](a)}).join(",");return"matrix"==q[b][0]&&16==c.split(",").length&&(q[b][0]="matrix3d"),q[b][0]+"("+c+")"}).join(" ")}]}var k=null,l={px:0},m={deg:0},n={matrix:["NNNNNN",[k,k,0,0,k,k,0,0,0,0,1,0,k,k,0,1],d],matrix3d:["NNNNNNNNNNNNNNNN",d],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",c([k,k,1]),d],scalex:["N",c([k,1,1]),c([k,1])],scaley:["N",c([1,k,1]),c([1,k])],scalez:["N",c([1,1,k])],scale3d:["NNN",d],skew:["Aa",null,d],skewx:["A",null,c([k,m])],skewy:["A",null,c([m,k])],translate:["Tt",c([k,k,l]),d],translatex:["T",c([k,l,l]),c([k,l])],translatey:["T",c([l,k,l]),c([l,k])],translatez:["L",c([l,l,k])],translate3d:["TTL",d]};a.addPropertiesHandler(e,j,["transform"])}(d,f),function(a){function b(a){var b=Number(a);if(!(isNaN(b)||b<100||b>900||b%100!==0))return b}function c(b){return b=100*Math.round(b/100),b=a.clamp(100,900,b),400===b?"normal":700===b?"bold":String(b)}function d(a,b){return[a,b,c]}a.addPropertiesHandler(b,d,["font-weight"])}(d),function(a){function b(a){var b={};for(var c in a)b[c]=-a[c];return b}function c(b){return a.consumeToken(/^(left|center|right|top|bottom)\b/i,b)||a.consumeLengthOrPercent(b)}function d(b,d){var e=a.consumeRepeated(c,/^/,d);if(e&&""==e[1]){var f=e[0];if(f[0]=f[0]||"center",f[1]=f[1]||"center",3==b&&(f[2]=f[2]||{px:0}),f.length==b){if(/top|bottom/.test(f[0])||/left|right/.test(f[1])){var h=f[0];f[0]=f[1],f[1]=h}if(/left|right|center|Object/.test(f[0])&&/top|bottom|center|Object/.test(f[1]))return f.map(function(a){return"object"==typeof a?a:g[a]})}}}function e(d){var e=a.consumeRepeated(c,/^/,d);if(e){for(var f=e[0],h=[{"%":50},{"%":50}],i=0,j=!1,k=0;k<f.length;k++){var l=f[k];"string"==typeof l?(j=/bottom|right/.test(l),i={left:0,right:0,center:i,top:1,bottom:1}[l],h[i]=g[l],"center"==l&&i++):(j&&(l=b(l),l["%"]=(l["%"]||0)+100),h[i]=l,i++,j=!1)}return[h,e[1]]}}function f(b){var c=a.consumeRepeated(e,/^,/,b);if(c&&""==c[1])return c[0]}var g={left:{"%":0},center:{"%":50},right:{"%":100},top:{"%":0},bottom:{"%":100}},h=a.mergeNestedRepeated.bind(null,a.mergeDimensions," ");a.addPropertiesHandler(d.bind(null,3),h,["transform-origin"]),a.addPropertiesHandler(d.bind(null,2),h,["perspective-origin"]),a.consumePosition=e,a.mergeOffsetList=h;var i=a.mergeNestedRepeated.bind(null,h,", ");a.addPropertiesHandler(f,i,["background-position","object-position"])}(d),function(a){function b(b){var c=a.consumeToken(/^circle/,b);if(c&&c[0])return["circle"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),d,a.ignore(a.consumeToken.bind(void 0,/^at/)),a.consumePosition,a.ignore(a.consumeToken.bind(void 0,/^\)/))],c[1]));var f=a.consumeToken(/^ellipse/,b);if(f&&f[0])return["ellipse"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),e,a.ignore(a.consumeToken.bind(void 0,/^at/)),a.consumePosition,a.ignore(a.consumeToken.bind(void 0,/^\)/))],f[1]));var g=a.consumeToken(/^polygon/,b);return g&&g[0]?["polygon"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0,/^\(/)),a.optional(a.consumeToken.bind(void 0,/^nonzero\s*,|^evenodd\s*,/),"nonzero,"),a.consumeSizePairList,a.ignore(a.consumeToken.bind(void 0,/^\)/))],g[1])):void 0}function c(b,c){if(b[0]===c[0])return"circle"==b[0]?a.mergeList(b.slice(1),c.slice(1),["circle(",a.mergeDimensions," at ",a.mergeOffsetList,")"]):"ellipse"==b[0]?a.mergeList(b.slice(1),c.slice(1),["ellipse(",a.mergeNonNegativeSizePair," at ",a.mergeOffsetList,")"]):"polygon"==b[0]&&b[1]==c[1]?a.mergeList(b.slice(2),c.slice(2),["polygon(",b[1],g,")"]):void 0}var d=a.consumeParenthesised.bind(null,a.parseLengthOrPercent),e=a.consumeRepeated.bind(void 0,d,/^/),f=a.mergeNestedRepeated.bind(void 0,a.mergeDimensions," "),g=a.mergeNestedRepeated.bind(void 0,f,",");a.addPropertiesHandler(b,c,["shape-outside"])}(d),function(a,b){function c(a,b){b.concat([a]).forEach(function(b){b in document.documentElement.style&&(d[a]=b)})}var d={};c("transform",["webkitTransform","msTransform"]),c("transformOrigin",["webkitTransformOrigin"]),c("perspective",["webkitPerspective"]),c("perspectiveOrigin",["webkitPerspectiveOrigin"]),a.propertyName=function(a){return d[a]||a}}(d,f)}(),!function(){if(void 0===document.createElement("div").animate([]).oncancel){var a;if(window.performance&&performance.now)var a=function(){return performance.now()};else var a=function(){return Date.now()};var b=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="cancel",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()},c=window.Element.prototype.animate;window.Element.prototype.animate=function(d,e){var f=c.call(this,d,e);f._cancelHandlers=[],f.oncancel=null;var g=f.cancel;f.cancel=function(){g.call(this);var c=new b(this,null,a()),d=this._cancelHandlers.concat(this.oncancel?[this.oncancel]:[]);setTimeout(function(){d.forEach(function(a){a.call(c.target,c)})},0)};var h=f.addEventListener;f.addEventListener=function(a,b){"function"==typeof b&&"cancel"==a?this._cancelHandlers.push(b):h.call(this,a,b)};var i=f.removeEventListener;return f.removeEventListener=function(a,b){if("cancel"==a){var c=this._cancelHandlers.indexOf(b);c>=0&&this._cancelHandlers.splice(c,1)}else i.call(this,a,b)},f}}}(),function(a){var b=document.documentElement,c=null,d=!1;try{var e=getComputedStyle(b).getPropertyValue("opacity"),f="0"==e?"1":"0";c=b.animate({opacity:[f,f]},{duration:1}),c.currentTime=0,d=getComputedStyle(b).getPropertyValue("opacity")==f}catch(a){}finally{c&&c.cancel()}if(!d){var g=window.Element.prototype.animate;window.Element.prototype.animate=function(b,c){return window.Symbol&&Symbol.iterator&&Array.prototype.from&&b[Symbol.iterator]&&(b=Array.from(b)),Array.isArray(b)||null===b||(b=a.convertToArrayForm(b)),g.call(this,b,c)}}}(c),!function(a,b,c){function d(a){var c=b.timeline;c.currentTime=a,c._discardAnimations(),0==c._animations.length?f=!1:requestAnimationFrame(d)}var e=window.requestAnimationFrame;window.requestAnimationFrame=function(a){return e(function(c){b.timeline._updateAnimationsPromises(),a(c),b.timeline._updateAnimationsPromises()})},b.AnimationTimeline=function(){this._animations=[],this.currentTime=void 0},b.AnimationTimeline.prototype={getAnimations:function(){return this._discardAnimations(),this._animations.slice()},_updateAnimationsPromises:function(){b.animationsWithPromises=b.animationsWithPromises.filter(function(a){return a._updatePromises()})},_discardAnimations:function(){this._updateAnimationsPromises(),this._animations=this._animations.filter(function(a){return"finished"!=a.playState&&"idle"!=a.playState})},_play:function(a){var c=new b.Animation(a,this);return this._animations.push(c),b.restartWebAnimationsNextTick(),c._updatePromises(),c._animation.play(),c._updatePromises(),c},play:function(a){return a&&a.remove(),this._play(a)}};var f=!1;b.restartWebAnimationsNextTick=function(){f||(f=!0,requestAnimationFrame(d))};var g=new b.AnimationTimeline;b.timeline=g;try{Object.defineProperty(window.document,"timeline",{configurable:!0,get:function(){return g}})}catch(a){}try{window.document.timeline=g}catch(a){}}(c,e,f),function(a,b,c){b.animationsWithPromises=[],b.Animation=function(b,c){if(this.id="",b&&b._id&&(this.id=b._id),this.effect=b,b&&(b._animation=this),!c)throw new Error("Animation with null timeline is not supported");this._timeline=c,this._sequenceNumber=a.sequenceNumber++,this._holdTime=0,this._paused=!1,this._isGroup=!1,this._animation=null,this._childAnimations=[],this._callback=null,this._oldPlayState="idle",this._rebuildUnderlyingAnimation(),this._animation.cancel(),this._updatePromises()},b.Animation.prototype={_updatePromises:function(){var a=this._oldPlayState,b=this.playState;return this._readyPromise&&b!==a&&("idle"==b?(this._rejectReadyPromise(),this._readyPromise=void 0):"pending"==a?this._resolveReadyPromise():"pending"==b&&(this._readyPromise=void 0)),this._finishedPromise&&b!==a&&("idle"==b?(this._rejectFinishedPromise(),this._finishedPromise=void 0):"finished"==b?this._resolveFinishedPromise():"finished"==a&&(this._finishedPromise=void 0)),this._oldPlayState=this.playState,this._readyPromise||this._finishedPromise},_rebuildUnderlyingAnimation:function(){this._updatePromises();var a,c,d,e,f=!!this._animation;f&&(a=this.playbackRate,c=this._paused,d=this.startTime,e=this.currentTime,this._animation.cancel(),this._animation._wrapper=null,this._animation=null),(!this.effect||this.effect instanceof window.KeyframeEffect)&&(this._animation=b.newUnderlyingAnimationForKeyframeEffect(this.effect),b.bindAnimationForKeyframeEffect(this)),(this.effect instanceof window.SequenceEffect||this.effect instanceof window.GroupEffect)&&(this._animation=b.newUnderlyingAnimationForGroup(this.effect),b.bindAnimationForGroup(this)),this.effect&&this.effect._onsample&&b.bindAnimationForCustomEffect(this),f&&(1!=a&&(this.playbackRate=a),null!==d?this.startTime=d:null!==e?this.currentTime=e:null!==this._holdTime&&(this.currentTime=this._holdTime),c&&this.pause()),this._updatePromises()},_updateChildren:function(){if(this.effect&&"idle"!=this.playState){var a=this.effect._timing.delay;this._childAnimations.forEach(function(c){this._arrangeChildren(c,a),this.effect instanceof window.SequenceEffect&&(a+=b.groupChildDuration(c.effect))}.bind(this))}},_setExternalAnimation:function(a){if(this.effect&&this._isGroup)for(var b=0;b<this.effect.children.length;b++)this.effect.children[b]._animation=a,this._childAnimations[b]._setExternalAnimation(a)},_constructChildAnimations:function(){if(this.effect&&this._isGroup){var a=this.effect._timing.delay;this._removeChildAnimations(),this.effect.children.forEach(function(c){var d=b.timeline._play(c);this._childAnimations.push(d),d.playbackRate=this.playbackRate,this._paused&&d.pause(),c._animation=this.effect._animation,this._arrangeChildren(d,a),this.effect instanceof window.SequenceEffect&&(a+=b.groupChildDuration(c))}.bind(this))}},_arrangeChildren:function(a,b){null===this.startTime?a.currentTime=this.currentTime-b/this.playbackRate:a.startTime!==this.startTime+b/this.playbackRate&&(a.startTime=this.startTime+b/this.playbackRate)},get timeline(){return this._timeline},get playState(){return this._animation?this._animation.playState:"idle"},get finished(){return window.Promise?(this._finishedPromise||(b.animationsWithPromises.indexOf(this)==-1&&b.animationsWithPromises.push(this),this._finishedPromise=new Promise(function(a,b){this._resolveFinishedPromise=function(){a(this)},this._rejectFinishedPromise=function(){b({type:DOMException.ABORT_ERR,name:"AbortError"})}}.bind(this)),"finished"==this.playState&&this._resolveFinishedPromise()),this._finishedPromise):(console.warn("Animation Promises require JavaScript Promise constructor"),null)},get ready(){return window.Promise?(this._readyPromise||(b.animationsWithPromises.indexOf(this)==-1&&b.animationsWithPromises.push(this),this._readyPromise=new Promise(function(a,b){this._resolveReadyPromise=function(){a(this)},this._rejectReadyPromise=function(){b({type:DOMException.ABORT_ERR,name:"AbortError"})}}.bind(this)),"pending"!==this.playState&&this._resolveReadyPromise()),this._readyPromise):(console.warn("Animation Promises require JavaScript Promise constructor"),null)},get onfinish(){return this._animation.onfinish},set onfinish(a){"function"==typeof a?this._animation.onfinish=function(b){b.target=this,a.call(this,b)}.bind(this):this._animation.onfinish=a},get oncancel(){return this._animation.oncancel},set oncancel(a){"function"==typeof a?this._animation.oncancel=function(b){b.target=this,a.call(this,b)}.bind(this):this._animation.oncancel=a},get currentTime(){this._updatePromises();var a=this._animation.currentTime;return this._updatePromises(),a},set currentTime(a){this._updatePromises(),this._animation.currentTime=isFinite(a)?a:Math.sign(a)*Number.MAX_VALUE,this._register(),this._forEachChild(function(b,c){b.currentTime=a-c}),this._updatePromises()},get startTime(){return this._animation.startTime},set startTime(a){this._updatePromises(),this._animation.startTime=isFinite(a)?a:Math.sign(a)*Number.MAX_VALUE,this._register(),this._forEachChild(function(b,c){b.startTime=a+c}),this._updatePromises()},get playbackRate(){return this._animation.playbackRate},set playbackRate(a){this._updatePromises();var b=this.currentTime;this._animation.playbackRate=a,this._forEachChild(function(b){b.playbackRate=a}),null!==b&&(this.currentTime=b),this._updatePromises()},play:function(){this._updatePromises(),this._paused=!1,this._animation.play(),this._timeline._animations.indexOf(this)==-1&&this._timeline._animations.push(this),this._register(),b.awaitStartTime(this),this._forEachChild(function(a){var b=a.currentTime;a.play(),a.currentTime=b}),this._updatePromises()},pause:function(){this._updatePromises(),this.currentTime&&(this._holdTime=this.currentTime),this._animation.pause(),this._register(),this._forEachChild(function(a){a.pause()}),this._paused=!0,this._updatePromises()},finish:function(){this._updatePromises(),this._animation.finish(),this._register(),this._updatePromises()},cancel:function(){this._updatePromises(),this._animation.cancel(),this._register(),this._removeChildAnimations(),this._updatePromises()},reverse:function(){this._updatePromises();var a=this.currentTime;this._animation.reverse(),this._forEachChild(function(a){a.reverse()}),null!==a&&(this.currentTime=a),this._updatePromises()},addEventListener:function(a,b){var c=b;"function"==typeof b&&(c=function(a){a.target=this,b.call(this,a)}.bind(this),b._wrapper=c),this._animation.addEventListener(a,c)},removeEventListener:function(a,b){this._animation.removeEventListener(a,b&&b._wrapper||b)},_removeChildAnimations:function(){for(;this._childAnimations.length;)this._childAnimations.pop().cancel()},_forEachChild:function(b){var c=0;if(this.effect.children&&this._childAnimations.length<this.effect.children.length&&this._constructChildAnimations(),this._childAnimations.forEach(function(a){b.call(this,a,c),this.effect instanceof window.SequenceEffect&&(c+=a.effect.activeDuration)}.bind(this)),"pending"!=this.playState){var d=this.effect._timing,e=this.currentTime;null!==e&&(e=a.calculateIterationProgress(a.calculateActiveDuration(d),e,d)),(null==e||isNaN(e))&&this._removeChildAnimations()}}},window.Animation=b.Animation}(c,e,f),function(a,b,c){function d(b){this._frames=a.normalizeKeyframes(b)}function e(){for(var a=!1;i.length;){var b=i.shift();b._updateChildren(),a=!0}return a}var f=function(a){if(a._animation=void 0,a instanceof window.SequenceEffect||a instanceof window.GroupEffect)for(var b=0;b<a.children.length;b++)f(a.children[b])};b.removeMulti=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];d._parent?(b.indexOf(d._parent)==-1&&b.push(d._parent),d._parent.children.splice(d._parent.children.indexOf(d),1),d._parent=null,f(d)):d._animation&&d._animation.effect==d&&(d._animation.cancel(),d._animation.effect=new KeyframeEffect(null,[]),d._animation._callback&&(d._animation._callback._animation=null),d._animation._rebuildUnderlyingAnimation(),f(d))}for(c=0;c<b.length;c++)b[c]._rebuild()},b.KeyframeEffect=function(b,c,e,f){return this.target=b,this._parent=null,e=a.numericTimingToObject(e),this._timingInput=a.cloneTimingInput(e),this._timing=a.normalizeTimingInput(e),this.timing=a.makeTiming(e,!1,this),this.timing._effect=this,"function"==typeof c?(a.deprecated("Custom KeyframeEffect","2015-06-22","Use KeyframeEffect.onsample instead."),this._normalizedKeyframes=c):this._normalizedKeyframes=new d(c),this._keyframes=c,this.activeDuration=a.calculateActiveDuration(this._timing),this._id=f,this},b.KeyframeEffect.prototype={getFrames:function(){return"function"==typeof this._normalizedKeyframes?this._normalizedKeyframes:this._normalizedKeyframes._frames},set onsample(a){if("function"==typeof this.getFrames())throw new Error("Setting onsample on custom effect KeyframeEffect is not supported.");this._onsample=a,this._animation&&this._animation._rebuildUnderlyingAnimation()},get parent(){return this._parent},clone:function(){if("function"==typeof this.getFrames())throw new Error("Cloning custom effects is not supported.");var b=new KeyframeEffect(this.target,[],a.cloneTimingInput(this._timingInput),this._id);return b._normalizedKeyframes=this._normalizedKeyframes,b._keyframes=this._keyframes,b},remove:function(){b.removeMulti([this])}};var g=Element.prototype.animate;Element.prototype.animate=function(a,c){var d="";return c&&c.id&&(d=c.id),b.timeline._play(new b.KeyframeEffect(this,a,c,d))};var h=document.createElementNS("http://www.w3.org/1999/xhtml","div");b.newUnderlyingAnimationForKeyframeEffect=function(a){if(a){var b=a.target||h,c=a._keyframes;"function"==typeof c&&(c=[]);var d=a._timingInput;d.id=a._id}else var b=h,c=[],d=0;return g.apply(b,[c,d])},b.bindAnimationForKeyframeEffect=function(a){a.effect&&"function"==typeof a.effect._normalizedKeyframes&&b.bindAnimationForCustomEffect(a)};var i=[];b.awaitStartTime=function(a){null===a.startTime&&a._isGroup&&(0==i.length&&requestAnimationFrame(e),i.push(a))};var j=window.getComputedStyle;Object.defineProperty(window,"getComputedStyle",{configurable:!0,enumerable:!0,value:function(){b.timeline._updateAnimationsPromises();var a=j.apply(this,arguments);return e()&&(a=j.apply(this,arguments)),b.timeline._updateAnimationsPromises(),a}}),window.KeyframeEffect=b.KeyframeEffect,window.Element.prototype.getAnimations=function(){return document.timeline.getAnimations().filter(function(a){return null!==a.effect&&a.effect.target==this}.bind(this))}}(c,e,f),function(a,b,c){function d(a){a._registered||(a._registered=!0,g.push(a),h||(h=!0,requestAnimationFrame(e)))}function e(a){var b=g;g=[],b.sort(function(a,b){return a._sequenceNumber-b._sequenceNumber}),b=b.filter(function(a){a();var b=a._animation?a._animation.playState:"idle";return"running"!=b&&"pending"!=b&&(a._registered=!1),a._registered}),g.push.apply(g,b),g.length?(h=!0,requestAnimationFrame(e)):h=!1}var f=(document.createElementNS("http://www.w3.org/1999/xhtml","div"),0);b.bindAnimationForCustomEffect=function(b){var c,e=b.effect.target,g="function"==typeof b.effect.getFrames();c=g?b.effect.getFrames():b.effect._onsample;var h=b.effect.timing,i=null;h=a.normalizeTimingInput(h);var j=function(){var d=j._animation?j._animation.currentTime:null;null!==d&&(d=a.calculateIterationProgress(a.calculateActiveDuration(h),d,h),isNaN(d)&&(d=null)),d!==i&&(g?c(d,e,b.effect):c(d,b.effect,b.effect._animation)),i=d};j._animation=b,j._registered=!1,j._sequenceNumber=f++,b._callback=j,d(j)};var g=[],h=!1;b.Animation.prototype._register=function(){this._callback&&d(this._callback)}}(c,e,f),function(a,b,c){function d(a){return a._timing.delay+a.activeDuration+a._timing.endDelay}function e(b,c,d){this._id=d,this._parent=null,this.children=b||[],this._reparent(this.children),c=a.numericTimingToObject(c),this._timingInput=a.cloneTimingInput(c),this._timing=a.normalizeTimingInput(c,!0),this.timing=a.makeTiming(c,!0,this),this.timing._effect=this,"auto"===this._timing.duration&&(this._timing.duration=this.activeDuration)}window.SequenceEffect=function(){e.apply(this,arguments)},window.GroupEffect=function(){e.apply(this,arguments)},e.prototype={_isAncestor:function(a){for(var b=this;null!==b;){if(b==a)return!0;b=b._parent}return!1},_rebuild:function(){for(var a=this;a;)"auto"===a.timing.duration&&(a._timing.duration=a.activeDuration),a=a._parent;this._animation&&this._animation._rebuildUnderlyingAnimation()},_reparent:function(a){b.removeMulti(a);for(var c=0;c<a.length;c++)a[c]._parent=this},_putChild:function(a,b){for(var c=b?"Cannot append an ancestor or self":"Cannot prepend an ancestor or self",d=0;d<a.length;d++)if(this._isAncestor(a[d]))throw{type:DOMException.HIERARCHY_REQUEST_ERR,name:"HierarchyRequestError",message:c};for(var d=0;d<a.length;d++)b?this.children.push(a[d]):this.children.unshift(a[d]);this._reparent(a),this._rebuild()},append:function(){this._putChild(arguments,!0)},prepend:function(){this._putChild(arguments,!1)},get parent(){return this._parent},get firstChild(){return this.children.length?this.children[0]:null},get lastChild(){return this.children.length?this.children[this.children.length-1]:null},clone:function(){for(var b=a.cloneTimingInput(this._timingInput),c=[],d=0;d<this.children.length;d++)c.push(this.children[d].clone());return this instanceof GroupEffect?new GroupEffect(c,b):new SequenceEffect(c,b)},remove:function(){b.removeMulti([this])}},window.SequenceEffect.prototype=Object.create(e.prototype),Object.defineProperty(window.SequenceEffect.prototype,"activeDuration",{get:function(){var a=0;return this.children.forEach(function(b){a+=d(b)}),Math.max(a,0)}}),window.GroupEffect.prototype=Object.create(e.prototype),Object.defineProperty(window.GroupEffect.prototype,"activeDuration",{get:function(){var a=0;return this.children.forEach(function(b){a=Math.max(a,d(b))}),a}}),b.newUnderlyingAnimationForGroup=function(c){var d,e=null,f=function(b){var c=d._wrapper;if(c&&"pending"!=c.playState&&c.effect)return null==b?void c._removeChildAnimations():0==b&&c.playbackRate<0&&(e||(e=a.normalizeTimingInput(c.effect.timing)),b=a.calculateIterationProgress(a.calculateActiveDuration(e),-1,e),isNaN(b)||null==b)?(c._forEachChild(function(a){a.currentTime=-1}),void c._removeChildAnimations()):void 0},g=new KeyframeEffect(null,[],c._timing,c._id);return g.onsample=f,d=b.timeline._play(g)},b.bindAnimationForGroup=function(a){a._animation._wrapper=a,a._isGroup=!0,b.awaitStartTime(a),a._constructChildAnimations(),a._setExternalAnimation(a)},b.groupChildDuration=d}(c,e,f),b.true=a}({},function(){return this}());


/***/ },

/***/ 1060:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1061:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(448);


/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.sendContactEmail = function (contactUser, type) {
        // contactUser.to_email = 'enquiries@spark64.com';
        contactUser.to_email = 'goriunovd@gmail.com';
        switch (type) {
            case 'contact':
                contactUser.subject = 'Contact form';
                break;
            case 'registration':
                contactUser.subject = 'Registration form';
                break;
            case 'order':
                contactUser.subject = 'Order form';
                break;
        }
        var body = JSON.stringify(contactUser);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.http.post('http://uvlens-website-backend.azurewebsites.net/sendmail', body, { headers: headers })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    EmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], EmailService);
    return EmailService;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/email.service.js.map

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WidgetConnectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetConnectionService = (function () {
    function WidgetConnectionService(http) {
        this.http = http;
        this.newPlace = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.placeName = 'Auckland';
        this.longitude = 174.7633315;
        this.latitude = -36.8484597;
    }
    ;
    WidgetConnectionService.prototype.locationOnLoad = function () {
        var _this = this;
        this.http.get('http://freegeoip.net/json/')
            .map(function (location) { return location.json(); })
            .subscribe(function (location) {
            _this.placeName = location.city + ', ' + location.country_name;
            _this.longitude = location.longitude;
            _this.latitude = location.latitude;
            _this.newPlace.emit({ lng: _this.longitude, lat: _this.latitude, placeName: _this.placeName });
        });
    };
    WidgetConnectionService.prototype.setLocation = function (lat, lng, placeData) {
        this.longitude = lng;
        this.latitude = lat;
        var setCity = false;
        var setAdminState = false;
        var subLoc = false;
        console.log(placeData);
        if (placeData.length > 0) {
            for (var i = 0; i < placeData.length; i++) {
                for (var j = 0; j < placeData[i].types.length; j++) {
                    if (placeData[i].types[j] == 'sublocality') {
                        this.placeName = placeData[i].long_name;
                        subLoc = true;
                    }
                }
                if (!subLoc) {
                    if (placeData[i].types[0] == 'locality') {
                        this.placeName = placeData[i].long_name;
                        setCity = true;
                    }
                }
                else {
                    if (placeData[i].types[0] == 'locality' && this.placeName != placeData[i].long_name) {
                        this.placeName += ", " + placeData[i].long_name;
                        setCity = true;
                    }
                }
            }
            if (!setCity && !subLoc) {
                for (var i = 0; i < placeData.length; i++) {
                    if (placeData[i].types[0] == 'administrative_area_level_1') {
                        this.placeName = placeData[i].long_name;
                        setAdminState = true;
                    }
                }
            }
            for (var i = 0; i < placeData.length; i++) {
                if (placeData[i].types[0] == 'country') {
                    this.placeName += ', ' + placeData[i].long_name;
                }
            }
            if (!setCity && !setAdminState && !subLoc) {
                for (var i = 0; i < placeData.length; i++) {
                    if (placeData[i].types[0] == 'country') {
                        this.placeName = placeData[i].long_name;
                    }
                }
            }
        }
        this.newPlace.emit({ lng: this.longitude, lat: this.latitude, placeName: this.placeName });
    };
    WidgetConnectionService.prototype.getForecastData = function () {
        console.log('http://api.uvlens.com/api/Combined?longitude=' + this.longitude + '&latitude=' + this.latitude + '&skinType=0&key=spark64');
        return this.http.get('http://api.uvlens.com/api/Combined?longitude=' + this.longitude + '&latitude=' + this.latitude + '&skinType=0&key=spark64')
            .map(function (response) { return response.json(); });
    };
    WidgetConnectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], WidgetConnectionService);
    return WidgetConnectionService;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/widgetConection.service.js.map

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return contact; });
var contact = (function () {
    function contact(body, from_email, to_email, subject) {
        this.body = body;
        this.from_email = from_email;
        this.to_email = to_email;
        this.subject = subject;
    }
    return contact;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/contact.js.map

/***/ },

/***/ 284:
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },

/***/ 34:
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },

/***/ 445:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 445;


/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_client_ts__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_client_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_client_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__ = __webpack_require__(455);






/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
var platformRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["platformUniversalDynamic"])();
platformRef.bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/client.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(82);
var __core_private__ = __webpack_require__(1);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(580);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/__2.1.1.workaround.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_components_header_header_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_components_footer_footer_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_page_about_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_page_developers_developers_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_page_founders_founders_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_page_description_description_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_schools_about_page_about_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_schools_registration_page_registration_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_email_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_page_contact_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__widget_widget_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__widget_map_map_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__widget_wheel_wheel_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__widget_shared_widgetConection_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_google_maps_core__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angulartics2__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_page_scroll__ = __webpack_require__(750);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';
var router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_page_about_component__["a" /* AboutComponent */] },
    { path: 'schools', redirectTo: 'schools/about', pathMatch: 'full' },
    { path: 'schools',
        children: [
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__pages_schools_about_page_about_component__["a" /* SchoolsAboutComponent */] },
            { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_13__pages_schools_registration_page_registration_component__["a" /* RegistrationComponent */] }
        ] },
    // {path: 'widget', component: WidgetComponent},
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_15__pages_contact_page_contact_component__["a" /* ContactComponent */] }
];
/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__general_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__general_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_page_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_page_developers_developers_component__["a" /* DevelopersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_page_founders_founders_component__["a" /* FoundersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_page_description_description_component__["a" /* DescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_schools_registration_page_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_schools_about_page_about_component__["a" /* SchoolsAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_page_contact_component__["a" /* ContactComponent */],
                /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
                __WEBPACK_IMPORTED_MODULE_16__widget_widget_component__["a" /* WidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_17__widget_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_18__widget_wheel_wheel_component__["a" /* WheelComponent */]
            ],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * BrowserModule, HttpModule, and JsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                /**
                 * using routes
                 */
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(router),
                /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
                __WEBPACK_IMPORTED_MODULE_22_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyCMysJ3MutKKAWC__74K9tzI0aVckVyoE0",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_21_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_21_angulartics2__["Angulartics2GoogleAnalytics"]])
            ],
            providers: [
                { provide: 'isBrowser', useValue: __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"] },
                { provide: 'isNode', useValue: __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isNode"] },
                __WEBPACK_IMPORTED_MODULE_14__shared_email_service__["a" /* EmailService */],
                /** Loaded but will be used in browser check ts file for isBrowser statment !!!*/
                __WEBPACK_IMPORTED_MODULE_19__widget_shared_widgetConection_service__["a" /* WidgetConnectionService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/app.browser.module.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_shared_widgetConection_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(angulartics2GoogleAnalytics, widgetService) {
        this.widgetService = widgetService;
        if (__WEBPACK_IMPORTED_MODULE_3_angular2_universal__["isBrowser"]) {
            this.widgetService.locationOnLoad();
        }
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(772),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angulartics2__["Angulartics2GoogleAnalytics"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angulartics2__["Angulartics2GoogleAnalytics"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__widget_shared_widgetConection_service__["a" /* WidgetConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__widget_shared_widgetConection_service__["a" /* WidgetConnectionService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/app.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(773),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/footer.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent() {
        this.headerScrolledStyled = false;
        this.isOpen = false;
        this.dropIsOpen = false;
    }
    HeaderComponent.prototype.removeMenu = function (event) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if ($(window).width() > 815) {
                this.isOpen = false;
            }
        }
    };
    HeaderComponent.prototype.onOpenMenu = function () {
        this.dropIsOpen = false;
        this.isOpen = !this.isOpen;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HeaderComponent.prototype, "removeMenu", null);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(774),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/header.component.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(456);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/index.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-about",
            template: __webpack_require__(775),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/about.component.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DescriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescriptionComponent = (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-description",
            template: __webpack_require__(776),
            styles: [__webpack_require__(758)],
        }), 
        __metadata('design:paramtypes', [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/description.component.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DevelopersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevelopersComponent = (function () {
    function DevelopersComponent() {
    }
    DevelopersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-developers",
            template: __webpack_require__(777),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [])
    ], DevelopersComponent);
    return DevelopersComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/developers.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FoundersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoundersComponent = (function () {
    function FoundersComponent() {
    }
    FoundersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-founders",
            template: __webpack_require__(778),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [])
    ], FoundersComponent);
    return FoundersComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/founders.component.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_contact__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_email_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(emailService) {
        this.emailService = emailService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            'message': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required)
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        var body = "\n Phone: " + this.myForm.controls['phoneNumber'].value + "\n Name: " + this.myForm.controls['name'].value + " \n Message: " + this.myForm.controls['name'].value;
        var contactUser = new __WEBPACK_IMPORTED_MODULE_2__shared_contact__["a" /* contact */](body, this.myForm.controls['email'].value);
        this.emailService.sendContactEmail(contactUser, 'contact');
        this.myForm.reset();
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(779),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */]) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/contact.component.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.isVideo = true;
    }
    HomeComponent.prototype.removeVideo = function (event) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if ($(window).width() <= 800) {
                this.isVideo = false;
            }
            else {
                this.isVideo = true;
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if ($(window).width() <= 800) {
                this.isVideo = false;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HomeComponent.prototype, "removeVideo", null);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(780),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/home.component.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_contact__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_email_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SchoolsAboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchoolsAboutComponent = (function () {
    function SchoolsAboutComponent(emailService) {
        this.emailService = emailService;
    }
    SchoolsAboutComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            school: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required)
        });
    };
    SchoolsAboutComponent.prototype.onSubmit = function () {
        var body = "\n Phone: " + this.myForm.controls['phone'].value + "\n Name: " + this.myForm.controls['name'].value + "\n School: " + this.myForm.controls['school'].value;
        var contactUser = new __WEBPACK_IMPORTED_MODULE_2__shared_contact__["a" /* contact */](body, this.myForm.controls['email'].value);
        this.emailService.sendContactEmail(contactUser, 'order');
        this.myForm.reset();
    };
    SchoolsAboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schools',
            template: __webpack_require__(781),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */]) === 'function' && _a) || Object])
    ], SchoolsAboutComponent);
    return SchoolsAboutComponent;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/about.component.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_contact__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_email_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(emailService) {
        this.emailService = emailService;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            school: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            sensor: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required)
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var body = "\n Phone: " + this.myForm.controls['phone'].value + "\n Name: " + this.myForm.controls['name'].value + "\n School: " + this.myForm.controls['school'].value + "\n Sensor: " + this.myForm.controls['sensor'].value;
        var contactUser = new __WEBPACK_IMPORTED_MODULE_2__shared_contact__["a" /* contact */](body, this.myForm.controls['email'].value);
        this.emailService.sendContactEmail(contactUser, 'registration');
        this.myForm.reset();
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-registration",
            template: __webpack_require__(782),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_email_service__["a" /* EmailService */]) === 'function' && _a) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/registration.component.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_widgetConection_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = (function () {
    function MapComponent(mapsAPILoader, widgetService, zone) {
        this.mapsAPILoader = mapsAPILoader;
        this.widgetService = widgetService;
        this.zone = zone;
        this.isLoaded = false;
        this.display = true;
        this.flamesLoading = false;
        this.uvLevel = '';
        this.openComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            this.widgetService.newPlace.subscribe(function (data) {
                _this.name = data.placeName;
                _this.zone.run(function () {
                });
            });
            //set google maps defaults
            this.zoom = 17;
            this.latitude = this.widgetService.latitude;
            this.longitude = this.widgetService.longitude;
            //create search FormControl
            //load Places Autocomplete
            this.mapsAPILoader.load().then(function () {
                var map = new google.maps.Map(_this.mapElementRef.nativeElement, {
                    center: { lat: _this.latitude, lng: _this.longitude },
                    zoom: 13,
                    zoomControl: true,
                    gestureHandling: 'cooperative',
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                    scaleControl: true,
                    streetViewControl: true,
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                    mapTypeControlOptions: {
                        mapTypeIds: []
                    },
                    draggable: true,
                    scrollwheel: false
                });
                var searchBox = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
                map.controls[google.maps.ControlPosition.TOP_LEFT].push(_this.searchElementRef.nativeElement);
                map.addListener('click', function (e) {
                    _this.placeMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
                });
                map.addListener('bounds_changed', function () {
                    searchBox.setBounds(map.getBounds());
                });
                _this.marker = new google.maps.Marker({
                    map: map,
                });
                searchBox.addListener("place_changed", function () {
                    //get the place result
                    var place = searchBox.getPlace();
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    }
                    else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(17); // Why 17? Because it looks good.
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.placeMarker({ lat: _this.latitude, lng: _this.longitude });
                });
                setTimeout(function () {
                    _this.isLoaded = true;
                    _this.zone.run(function () {
                    });
                }, 500);
                _this.geocoder = new google.maps.Geocoder;
                _this.placeMarker({ lat: _this.latitude, lng: _this.longitude });
                _this.marker.addListener('click', function () {
                    _this.showInfo();
                    _this.zone.run(function () {
                    });
                });
            });
        }
    };
    MapComponent.prototype.placeMarker = function (latLng) {
        this.showInfo();
        this.geocodeThis({ lat: latLng.lat, lng: latLng.lng });
    };
    MapComponent.prototype.geocodeThis = function (latLng) {
        var _this = this;
        this.flamesLoading = false;
        this.info_big = false;
        this.geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    _this.marker.setPosition(latLng);
                    _this.widgetService.setLocation(latLng.lat, latLng.lng, results[1].address_components);
                    _this.widgetService.getForecastData().subscribe(function (data) {
                        _this.apiData = data;
                        var currentUv = _this.apiData.CurrentUV;
                        if (currentUv >= 0.0 && currentUv < 0.5) {
                            _this.uvLevel = 'None';
                        }
                        if (currentUv >= 0.5 && currentUv < 3.0) {
                            _this.uvLevel = 'Low';
                        }
                        if (currentUv >= 3.0 && currentUv < 6.0) {
                            _this.uvLevel = 'Moderate';
                        }
                        if (currentUv >= 6.0 && currentUv < 8.0) {
                            _this.uvLevel = 'High';
                        }
                        if (currentUv >= 8.0 && currentUv < 11.0) {
                            _this.uvLevel = 'Very high';
                        }
                        if (currentUv >= 11.0) {
                            _this.uvLevel = 'Extreme';
                        }
                        _this.flamesLoading = true;
                        _this.zone.run(function () { });
                        console.log(data);
                    }, function (error) {
                        _this.apiData = {
                            "StartTime": "2017-01-02T06:00:00",
                            "UVForecast": [
                                0.288085938,
                                0.8691406,
                                2.23144531,
                                4.223633,
                                2.28027344,
                                2.944336,
                                3.29589844,
                                4.35546875,
                                3.72070313,
                                2.72949219,
                                2.241211,
                                1.07910156,
                                0.37109375,
                                0.09277344,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0.297851563,
                                0.795898438,
                                2.05078125,
                                3.89648438,
                                8.530273,
                                11.0205078,
                                12.3291016,
                                12.4365234,
                                10.625,
                                7.79296875,
                                4.375,
                                2.10449219,
                                0.72265625,
                                0.01953125,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            "ForecastLocation": {
                                "type": "Point",
                                "coordinates": [
                                    175,
                                    -37
                                ]
                            },
                            "BurntimeForecast": [],
                            "DailyMessage": "The UV today is forecasted to be Moderate. Be careful between 8:00 AM and 3:00 PM and remember to cover up during these times.",
                            "DailyMessageTomorrow": "The UV tomorrow is forecasted to be Extreme. Be careful between 8:00 AM and 5:00 PM and remember to cover up during these times.",
                            "DailyForecasts": [
                                {
                                    "SafeBefore": "2017-01-02T08:00:00",
                                    "SafeAfter": "2017-01-02T15:00:00",
                                    "MaxUVString": "Moderate",
                                    "MaxUVI": 4.35546875
                                },
                                {
                                    "SafeBefore": "2017-01-03T08:00:00",
                                    "SafeAfter": "2017-01-03T17:00:00",
                                    "MaxUVString": "Extreme",
                                    "MaxUVI": 12.4365234
                                }
                            ],
                            "CurrentUV": 1,
                            "SensorLocation": {
                                "type": "Point",
                                "coordinates": [
                                    174.76664733886719,
                                    -36.856155395507813
                                ]
                            },
                            "MeasurementTime": "2017-01-02T04:18:30+00:00",
                            "LiveData": true,
                            "CurrentWeather": "Mostly Cloudy",
                            "CurrentTemperature": 21.1,
                            "LocationString": null,
                            "TimeZoneOffset": 46800000
                        };
                        var currentUv = _this.apiData.CurrentUV;
                        if (currentUv >= 0.0 && currentUv < 0.5) {
                            _this.uvLevel = 'None';
                        }
                        if (currentUv >= 0.5 && currentUv < 3.0) {
                            _this.uvLevel = 'Low';
                        }
                        if (currentUv >= 3.0 && currentUv < 6.0) {
                            _this.uvLevel = 'Moderate';
                        }
                        if (currentUv >= 6.0 && currentUv < 8.0) {
                            _this.uvLevel = 'High';
                        }
                        if (currentUv >= 8.0 && currentUv < 11.0) {
                            _this.uvLevel = 'Very high';
                        }
                        if (currentUv >= 11.0) {
                            _this.uvLevel = 'Extreme';
                        }
                        _this.flamesLoading = true;
                        _this.zone.run(function () { });
                    });
                    _this.zone.run(function () { });
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    MapComponent.prototype.hideInfo = function () {
        this.display = false;
    };
    MapComponent.prototype.minimizeInfo = function () {
        this.info_big = false;
    };
    MapComponent.prototype.showInfo = function () {
        this.display = true;
    };
    MapComponent.prototype.openWheelComponent = function () {
        this.info_big = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], MapComponent.prototype, "openComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], MapComponent.prototype, "searchElementRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("map"), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object)
    ], MapComponent.prototype, "mapElementRef", void 0);
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(783),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_widgetConection_service__["a" /* WidgetConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_widgetConection_service__["a" /* WidgetConnectionService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _e) || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/map.component.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_widgetConection_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WheelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WheelComponent = (function () {
    function WheelComponent(widgetService, zone) {
        this.widgetService = widgetService;
        this.zone = zone;
        this.hint = "Loading...";
        this.isLoaded = false;
        this.message = 'Information about today';
        this.uvValue = 'Value';
        this.forecastArray = [];
        this.forecastDay = '';
        this.place = 'Location';
    }
    WheelComponent.prototype.resized = function (event) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
            var width = $(window).width();
            if (width != this.setWidth) {
                this.setWidth = width;
                this.isLoaded = false;
                var timeout;
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(function () {
                    _this.isLoaded = true;
                    if (_this.isLoaded) {
                        _this.drawWheel();
                    }
                }, 2000);
            }
        }
    };
    WheelComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
            this.setWidth = $(window).width();
            this.isLoaded = false;
            this.place = this.widgetService.placeName;
            this.getInformation();
            this.zone.run(function () {
            });
        }
    };
    WheelComponent.prototype.getInformation = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
            this.timeZoneOffset = this.apiData.TimeZoneOffset;
            this.forecastArray = this.apiData.UVForecast;
            var nd = new Date(new Date().getTime() + this.timeZoneOffset);
            console.log(nd.getUTCHours());
            if (nd.getUTCHours() >= 18 && nd.getUTCHours() <= 23 || nd.getUTCHours() >= 0 && nd.getUTCHours() < 6) {
                this.forecastDay = "Tomorrow's";
                this.message = this.apiData.DailyMessageTomorrow;
                this.uvValue = this.apiData.DailyForecasts[1].MaxUVString;
            }
            else {
                this.forecastDay = "Today's";
                this.message = this.apiData.DailyMessage;
                this.uvValue = this.apiData.DailyForecasts[0].MaxUVString;
            }
            if (this.uvValue == 'Extreme') {
                this.textColor = '#8C375D';
            }
            else if (this.uvValue == 'None') {
                this.textColor = '#4BB8A3';
            }
            else if (this.uvValue == 'Low') {
                this.textColor = '#86B37C';
            }
            else if (this.uvValue == 'Moderate') {
                this.textColor = '#FDAA2D';
            }
            else if (this.uvValue == 'High') {
                this.textColor = '#FD7C34';
            }
            else if (this.uvValue == 'Very High') {
                this.textColor = '#DC5535';
            }
            this.drawWheel();
            this.zone.run(function () {
            });
            console.log(this.apiData);
        }
    };
    WheelComponent.prototype.drawWheel = function () {
        var size = Math.min($('#god').height(), $('#god').width()) / 2 / 1.25;
        if ($('#god').width() < 768 && $('#god').width() > 470) {
            size = $('#god').height() / 2 / 1.25 / 1.25;
        }
        if ($('#god').width() <= 470 && $('#god').height() < 600) {
            size = 125;
        }
        if (size < 125) {
            size = 125;
        }
        if (size > 200) {
            size = 200;
        }
        if (size > 180 && $('#god').width() < 813) {
            size = 150;
        }
        if (size < 150 && $(window).width() > 767) {
            $('#slider').css({
                'margin-top': '25px'
            });
        }
        else {
            $('#slider').css({
                'margin-top': '0px'
            });
        }
        this.slider = $('#slider').CircularSlider({
            radius: size,
            innerCircleRatio: '0.6',
            handleDist: 80,
            min: 1,
            max: 72,
            clockwise: true,
            // labelSuffix: "<div id='labelSuffix'><img type='image/svg+xml' class='image-inside' id='extreme' src='assets/widget/widget-flames/extreme.svg'><img type='image/svg+xml' class='image-inside' id='none' src='assets/widget/widget-flames/none.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='low' src='assets/widget/widget-flames/low.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='moderate' src='assets/widget/widget-flames/moderate.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='high' src='assets/widget/widget-flames/high.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='veryhigh' src='assets/widget/widget-flames/veryhigh.svg' alt='loading'><br><small id='image-in-text' style=' text-align:center; color:white; font-size: 18px'>Oops :(</small></div>",
            labelSuffix: "<div id='labelSuffix'><img  class='image-inside' id='extreme' src='assets/widget/widget-flames/flames-extreme.png'><img class='image-inside' id='none' src='assets/widget/widget-flames/flames-none.png' alt='loading'><img  class='image-inside' id='low' src='assets/widget/widget-flames/flames-low.png' alt='loading'><img class='image-inside' id='moderate' src='assets/widget/widget-flames/flames-moderate.png' alt='loading'><img class='image-inside' id='high' src='assets/widget/widget-flames/flames-high.png' alt='loading'><img class='image-inside' id='veryhigh' src='assets/widget/widget-flames/flames-veryhigh.png' alt='loading'><br><small id='image-in-text' style=' text-align:center; color:white; font-size: 18px'>Oops :(</small></div>",
            labelPrefix: "<br>",
            shape: "Circle",
            touch: true,
            animate: true,
            animateDuration: 150,
            selectable: false,
            forecastArray: this.forecastArray,
            locationOffset: this.timeZoneOffset,
            formLabel: undefined,
        });
        this.isLoaded = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], WheelComponent.prototype, "apiData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], WheelComponent.prototype, "resized", null);
    WheelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wheel',
            template: __webpack_require__(784),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_widgetConection_service__["a" /* WidgetConnectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_widgetConection_service__["a" /* WidgetConnectionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _b) || Object])
    ], WheelComponent);
    return WheelComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/wheel.component.js.map

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetComponent = (function () {
    function WidgetComponent() {
    }
    WidgetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-widget',
            template: __webpack_require__(785),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetComponent);
    return WidgetComponent;
}());
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/widget.component.js.map

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/environment.js.map

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_client_shim_min_js__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_client_shim_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_client_shim_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_polyfils_web_animation_js__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_polyfils_web_animation_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_polyfils_web_animation_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_polyfils_classList_js__ = __webpack_require__(1056);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_polyfils_classList_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_polyfils_classList_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal_polyfills__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_symbol__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_object__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_function__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_parse_int__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_parse_float__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_number__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_math__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_string__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_date__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_array__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_regexp__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es6_map__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_js_es6_set__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_js_es6_reflect__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_core_js_es7_reflect__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.



















//# sourceMappingURL=/Users/goriunov/Desktop/Test/testFoo/src/polyfills-client.js.map

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = ".footer-container {\n  color: white;\n  padding-top: 20px;\n  background-color: #253B48;\n}\n\na {\n  color: white;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  text-decoration: none;\n}\na:hover, a focus {\n  color: #55acee;\n}\n\n.footer-social {\n  margin-left: 10px;\n  margin-right: 10px;\n  float: right;\n}\n\n.footer-facebook {\n  color: #3b5998 !important;\n}\n\n.footer-twitter {\n  color: #55acee !important;\n}\n\n.footer-instagram {\n  color: #3f729b !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .footer-container {\n    text-align: center;\n  }\n\n  .footer-social {\n    float: none;\n  }\n\n  .licence-row {\n    padding-bottom: 0;\n  }\n}\n"

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = ".box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background-color: #253b48;\n  min-height: 65px;\n}\n\n.active {\n  border-bottom: 3px solid #ff7e29;\n}\n\n.drop-in-drop-group {\n  margin-top: 5px;\n}\n\n.schools-special {\n  font-family: Montserrat,Arial,Helvetica,sans-serif;\n  color: #ff7e29 !important;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n.schools-special:hover {\n  color: #FFA442 !important;\n  cursor: pointer;\n}\n\n.drop-in-drop {\n  font-family: Montserrat,Arial,Helvetica,sans-serif;\n  color: #ff7e29 !important;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 15px !important;\n  padding: 5px;\n}\n.drop-in-drop:hover {\n  color: #FFA442 !important;\n}\n\n.drop-in-drop-active {\n  color: #FFA442 !important;\n}\n\n.spacing {\n  padding: 5px;\n}\n\n.dropdown-content {\n  display: none;\n  z-index: 10;\n  text-align: left;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  top: 33px;\n  left: 10px;\n}\n\n.dropdown {\n  padding-bottom: 10px;\n}\n\n.dropdown-content a:hover {\n  background-color: #E9E9E9;\n}\n\n.drop-active {\n  background-color: #E9E9E9;\n}\n\n.drop-in-drop-display {\n  display: block;\n}\n\n.dropdown:hover a:hover .dropdown-content {\n  display: block;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.facebook {\n  color: #3b5998  !important;\n  padding-left: 9px !important;\n  padding-right: 9px !important;\n}\n\n.twitter {\n  color: #55acee  !important;\n}\n\n.instagram {\n  color: #3f729b  !important;\n}\n\n.menu-item-center,\n.menu-item-special {\n  text-align: center;\n}\n\n.menu-item-right {\n  float: right;\n}\n\n.social-group {\n  text-align: center;\n  float: none;\n}\n.social-group .social {\n  padding: 7px;\n}\n.social-group .social:hover {\n  background-color: #eee;\n}\n\n.menu {\n  text-align: center;\n}\n\n.logo {\n  padding-top: 7px;\n}\n.logo img {\n  height: 35px;\n}\n\n.navigation {\n  padding-top: 21px;\n}\n\na:hover, a:active, a:visited, a:focus {\n  text-decoration: none;\n}\n\n.orange-link {\n  font-family: Montserrat,Arial,Helvetica,sans-serif;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #ff7e29 !important;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.orange-link:hover {\n  border-bottom: 3px solid #ff7e29;\n  cursor: pointer;\n}\n\n.mobile-navigation {\n  display: none;\n}\n\n.openSchools .menu-item {\n  display: block;\n}\n\n.dropped-mobile-menu .menu-item {\n  display: none;\n  padding: 10px;\n  margin-bottom: 5px;\n}\n.dropped-mobile-menu .menu-item a {\n  font-size: 19px;\n}\n\n@media screen and (max-width: 815px) {\n  .open .menu-item {\n    display: block;\n  }\n\n  .navigation {\n    display: none;\n  }\n\n  .mobile-navigation {\n    color: #ff7e29;\n    font-size: 25px;\n    padding-top: 12px;\n    display: block;\n    float: right;\n  }\n  .mobile-navigation:hover {\n    cursor: pointer;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .instagram,\n  .twitter {\n    padding: 5px !important;\n  }\n\n  .facebook {\n    padding-top: 5px !important;\n    padding-bottom: 5px !important;\n  }\n}\n@media screen and (max-width: 991px) {\n  .instagram,\n  .twitter {\n    padding: 8px !important;\n  }\n\n  .facebook {\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n  }\n}\n@media screen and (max-width: 992px) {\n  .menu-item-special {\n    padding-left: 20px;\n  }\n}\n@media screen and (max-width: 900px) {\n  .menu-item-special {\n    text-align: right;\n    padding-left: 20px;\n  }\n}\n"

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = ".page-header{\n  margin-top: 100px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n.tabbed-text{\n  border-left: 2px solid lightgray;\n  padding:10px 20px 10px 15px  ;\n}\n\n.header-block{\n  margin:20px;\n}\n.story-title{\n  font-size: 1.2em;\n  color: #f27121;\n}\n@media only screen and (max-width: 576px){\n  .header-block {\n    margin-left: 3px;\n  }\n}\n"

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = ".page-header{\n  margin-top: 90px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n.fixed-properties{\n  width: 90% ;\n  margin-top: 10px;\n}\n.name-wrap{\n  word-wrap: break-word;\n}\n\n.header-block{\n  margin:20px;\n}\n.dev-head{\n  height:75px;\n}\n.dev-row{\n  text-align: center;\n}\n"

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = ".fixed-properties {\n  height: 200px;\n  width: 200px;\n  margin-top: 10px;\n}\n\n.header-block {\n  margin: 20px;\n}\n\n.founders-text {\n  background-color: #f8a242;\n  height: auto;\n  color: white;\n}\n\n.card {\n  background-color: #f8a242;\n  border-color: lightgray;\n}\n\n.founders-head {\n  background-color: white;\n}\n\n.card-deck-wrapper {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.page-header {\n  margin-top: 70px;\n  color: #f27121;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n}\n\n@media only screen and (max-width: 1091px) {\n  .fixed-properties {\n    height: 160px;\n    width: 160px;\n  }\n}\n@media only screen and (max-width: 845px) {\n  .card-title {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 720px) and (max-width: 792px) {\n  .richard-text {\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .card {\n    display: block !important;\n    margin-bottom: 10px;\n  }\n\n  .fixed-properties {\n    height: 250px;\n    width: 250px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .fixed-properties {\n    height: 190px;\n    width: 190px;\n  }\n}\n"

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = ".align-center {\n  text-align: center;\n}\n\n.contact-header {\n  color: white;\n  background-color: #253B48;\n  padding-top: 15%;\n  padding-bottom: 10%;\n}\n\n.contact-container {\n  text-align: left;\n  padding: 5%;\n  font-family: Montserrat, sans-serif;\n}\n\n.text-style {\n  font-size: 16px;\n  color: #333;\n}\n\n.padding-add {\n  padding-bottom: 6%;\n}\n\n.label-style {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.margin-add {\n  margin-top: 5%;\n}\n\n.btn-custom {\n  color: #fff;\n  background: #f60;\n  border: none;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  width: 115px;\n  height: 45px;\n}\n.btn-custom:hover {\n  background: #fa860a;\n  -webkit-transition: background .25s ease;\n  transition: background .25s ease;\n}\n\n.help-text {\n  text-align: right;\n  color: #737373;\n}\n\nform .ng-invalid.ng-touched {\n  border: 1px solid #d9534f;\n  /* red */\n}\n\n@media screen and (max-width: 767px) {\n  .label-style {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 575px) {\n  .help-text {\n    text-align: initial;\n  }\n\n  .contact-header {\n    padding-top: 85px;\n  }\n}\n"

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = ".shadow-overlay {\n  /*max-height: 100vh;*/\n  /*min-height: 100vh;*/\n  position: relative;\n  left: 0;\n  right: 0;\n  top:0;\n  background-color: rgba(0, 0, 0, 0.3);\n  /*background: url(./assets/images/background/EarthMap.jpg) no-repeat center center;*/\n  background-size: cover;\n}\n\n.forMobile{\n  height: 800px;\n}\n.forMobile .shadow-overlay{\n  height: 800px;\n}\n\nvideo{\n  z-index: -1000;\n}\nvideo#bgvid {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  width: auto;\n  height: auto;\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  z-index: -1000;\n  background: url(./assets/images/background/EarthMap.jpg) no-repeat center center;\n  background-size: cover;\n  overflow: hidden;\n}\n\ndiv {\n  font-family: Montserrat, sans-serif;\n}\n\n.logo img {\n  max-width: 80%;\n  height: auto;\n  margin-left: -2%;\n}\n\n.parent {\n  position: relative;\n}\n\n.logo {\n  position: absolute;\n  top: 35%;\n  height: 100px;\n  margin-top: -55px;\n  /* account for padding and border if not using box-sizing: border-box; */\n}\n\n.slogan {\n  margin-top: 20px;\n  color: white;\n}\n\n.button-margin-top {\n  margin-top: 30px;\n}\n\n.buttons {\n  width: 100%;\n  box-shadow: none;\n  border: none;\n  color: white;\n  padding: 15px 0;\n  background: rgba(255, 102, 0, 0.7);\n  border-radius: 5px;\n  font-size: 14px;\n  font-family: Montserrat,Arial,Helvetica,sans-serif;\n}\n.buttons:focus {\n  outline: none;\n}\n.buttons:hover {\n  background: #ff6600;\n  cursor: pointer;\n}\n\n.special {\n  text-align: right;\n}\n\n.middleImage {\n  text-align: center;\n}\n\n.partnerImages {\n  padding: 0px;\n  width: 145px;\n}\n\n.longPartnerImages {\n  padding: 15px;\n  width: 250px;\n}\n\n.partners {\n  padding: 20px;\n  border-bottom: 0.5px solid lightgrey;\n}\n\n.separator {\n  border-bottom: 0.5px solid lightgrey;\n}\n\n.body-container {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.specAlign {\n  text-align: right;\n}\n\n.col-sm-push-6 {\n  left: 50%;\n}\n\n.col-sm-pull-6 {\n  right: 50%;\n}\n\n.margin-row {\n  margin-top: 3%;\n}\n\n.image-size {\n  width: 80%;\n}\n\n.wheel-img {\n  margin-left: 50px;\n  margin-right: 0;\n}\n\n.iphone-img {\n  width: 100%;\n}\n\n.badge-resize {\n  width: 100px;\n}\n\n.orange-header {\n  color: rgba(255, 126, 41, 0.9);\n}\n\n.left-header, .left-text {\n  text-align: right;\n}\n\n.about-text {\n  font-size: 16px;\n  color: #777;\n}\n\n.about {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 3.5%;\n}\n\n.text-padding {\n  padding-top: 10%;\n}\n\n.container {\n  padding-top: 50px;\n  padding-left: 12%;\n  padding-right: 15%;\n  padding-bottom: 15%;\n  margin-left: 0;\n  margin-right: 0;\n  width: 100%;\n}\n\n.col-md-offset-2 {\n  margin-left: 10%;\n  padding-top: 5%;\n}\n\n.to-hide {\n  width: 300px;\n  font-size: 1.75rem;\n}\n\n.remove-padding {\n  padding-top: 20%;\n}\n.remove-padding div {\n  padding: 0;\n}\n\n#download {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.download-text {\n  padding-top: 5%;\n}\n\n.try-uv {\n  font-family: Montserrat, sans-serif;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 25px;\n}\n.try-uv h3 {\n  color: #663;\n}\n\n.separator-in {\n  border-bottom: 1px solid lightgray;\n}\n\n.margin-top {\n  margin-top: 5px;\n}\n\n@media screen and (max-width: 767px) {\n  .wheel-img {\n    margin-left: 0;\n  }\n\n  .buttons {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .logo {\n    text-align: center;\n    top: 30%;\n  }\n\n  .mediaResize {\n    text-align: center;\n  }\n\n  .partnerImages {\n    width: 200px;\n  }\n\n  .longPartnerImages {\n    width: 350px;\n  }\n\n  .partners {\n    padding: 10px;\n  }\n\n  .about {\n    text-align: center;\n  }\n\n  .col-sm-6 {\n    width: 100%;\n  }\n\n  .col-sm-push-6 {\n    left: 0%;\n  }\n\n  .col-sm-pull-6 {\n    right: 0%;\n  }\n\n  .left-header, .left-text {\n    text-align: center;\n  }\n\n  .img-left {\n    text-align: center;\n  }\n\n  .col-xs-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-xs-6 {\n    width: 50%;\n  }\n\n  .iphone-img {\n    width: 70%;\n  }\n\n  .to-hide {\n    display: none;\n  }\n\n  .center-align {\n    text-align: center;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 0%;\n  }\n\n  .badge-resize {\n    width: 150px;\n  }\n\n  .remove-padding {\n    padding-top: 5%;\n  }\n}\n@media screen and (max-width: 420px) {\n  .longPartnerImages {\n    width: 250px;\n  }\n}\n@media screen and (max-width: 940px) {\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n@media screen and (min-width: 997px) {\n  .badge-resize {\n    width: 120px;\n  }\n}\n@media screen and (min-width: 1360px) {\n  .badge-resize {\n    width: 150px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .back-image {\n    /*max-height: 100vh;*/\n    /*min-height: 100vh;*/\n    z-index: 1;\n    background: url(\"./assets/images/background/mobileBack.jpg\") no-repeat center center;\n    background-size: cover;\n  }\n\n  /*video#bgvid {*/\n    /*display: none;*/\n  /*}*/\n}\n"

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = ".intro {\n  margin-bottom: 10%;\n  position: relative;\n  text-align: center;\n}\n\n.back-image {\n  max-height: 100vh;\n  min-height: 100vh;\n  background: url(\"./assets/images/schools/bg-section.svg\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.block-align-center {\n  padding-top: 10%;\n}\n\n.header {\n  color: white;\n  margin-bottom: 4%;\n}\n\n.under-header {\n  color: #f9d7ce;\n  margin-bottom: 5%;\n  font-size: 1.5em;\n}\n\n.weather-kit-container {\n  padding: 5%;\n  background-color: #1a303e;\n  box-shadow: 0 12px 10px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.weather-kit-img {\n  width: 100%;\n}\n\n.text-align {\n  padding-top: 15%;\n}\n\n.intro-top {\n  font-weight: 400;\n  color: #b7b4ba;\n  font-size: 1.25em;\n  margin-bottom: 5%;\n}\n\n.under-top {\n  font-weight: 700;\n  color: white;\n  font-size: 2em;\n  border-bottom: 1px solid #fff;\n}\n\n.description {\n  color: #adb4ba;\n}\n\n.information {\n  margin-top: 10%;\n}\n\n.information-container {\n  padding-top: 10%;\n}\n\n.info {\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.col-sm-push-6 {\n  left: 50%;\n}\n\n.col-sm-pull-6 {\n  right: 50%;\n}\n\n.image-size {\n  max-width: 100%;\n}\n\n.orange-header {\n  font-weight: 700;\n  font-size: 2em;\n}\n.orange-header span {\n  color: #ff7e29;\n}\n\n.ul-text {\n  font-size: 1.25em;\n  font-weight: 500;\n}\n\n.li-margin {\n  margin-bottom: 2%;\n}\n\n.order {\n  background: url(\"./assets/images/schools/bg-2.jpg\") no-repeat center center;\n  background-size: cover;\n  padding-top: 10%;\n  padding-bottom: 10%;\n}\n\n.align-container {\n  text-align: center;\n}\n\n.order-header {\n  font-weight: 700;\n  color: black;\n}\n\n.order-container {\n  margin-top: 5%;\n  background-color: #fff;\n  border-radius: 10px;\n}\n\n.img-padding {\n  padding: 5%;\n}\n\n.text-padding {\n  padding-top: 6%;\n  padding-right: 5%;\n  padding-bottom: 8%;\n  text-align: left;\n}\n\n.grey-header {\n  font-weight: 700;\n  font-size: 2em;\n}\n\n.price {\n  color: #cc0000;\n  font-size: 1.25em;\n  font-weight: 500;\n}\n.price .line-through {\n  text-decoration: line-through;\n}\n.price .brackets {\n  color: black;\n}\n\n.button-info {\n  background-color: #f27420;\n  padding: 20px 5px;\n  border-radius: 50px;\n  width: 160px;\n  margin-top: 5%;\n  color: #fff;\n  text-align: center;\n}\n.button-info:focus {\n  outline: none;\n}\n.button-info:hover {\n  background: #fa860a;\n  cursor: pointer;\n}\n\n.required-text {\n  text-align: right;\n}\n\n.close-button {\n  font-size: 2rem;\n  color: white;\n}\n\nform .ng-invalid.ng-touched {\n  border: 2px solid #d9534f;\n  /* red */\n}\n\n.contact-header {\n  text-align: center;\n  margin-top: 10px;\n  height: 100%;\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.8em;\n}\n\n.modal-header {\n  background: #253b48;\n  padding: 20px 30px;\n  height: 100px;\n}\n\n.modal-body {\n  padding: 20px 50px;\n}\n\n.label-style {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.custom-help {\n  color: #737373;\n}\n\n.btn-custom {\n  color: #fff;\n  background: #f60;\n  border: none;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  width: 115px;\n  height: 45px;\n}\n.btn-custom:hover {\n  background: #fa860a;\n  -webkit-transition: background .25s ease;\n  transition: background .25s ease;\n}\n\n.modal-footer {\n  background: #253b48;\n  height: 80px;\n}\n\n.modal-content {\n  font-family: Montserrat,sans-serif;\n}\n\n.button-order {\n  background-color: #f27420;\n  padding: 20px 5px;\n  border-radius: 50px;\n  margin-top: 5%;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 1.25em;\n  color: #fff;\n  text-align: center;\n}\n.button-order:focus {\n  outline: none;\n}\n.button-order:hover {\n  background: #fa860a;\n  cursor: pointer;\n}\n\n.remove-underline {\n  text-decoration: none;\n}\n\n@media screen and (max-width: 991px) {\n  .text-align {\n    padding-top: 3%;\n  }\n\n  .information-container {\n    padding-top: 0%;\n  }\n\n  .block-align-center {\n    padding-top: 15%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .required-text {\n    text-align: initial;\n  }\n\n  .weather-kit-container {\n    text-align: center;\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  .intro-top {\n    font-size: 1em;\n    margin-top: 5%;\n  }\n\n  .under-header {\n    font-size: 1em;\n  }\n\n  .under-top {\n    font-weight: 700;\n    font-size: 1.5em;\n    padding-bottom: 5%;\n  }\n\n  .col-sm-push-6 {\n    left: 0%;\n  }\n\n  .col-sm-pull-6 {\n    right: 0%;\n  }\n\n  .order-header {\n    font-size: 200%;\n    font-weight: 500;\n  }\n\n  .img-padding {\n    padding: 10%;\n  }\n\n  .text-padding {\n    padding-left: 10%;\n  }\n\n  .button-info {\n    margin: 7.5% auto 2.5%;\n  }\n}\n@media only screen and (max-width: 310px) {\n  .modal-header {\n    height: 120px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .block-align-center {\n    padding-top: 70px;\n  }\n}\n"

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = ".back-image {\n  max-height: 100vh;\n  min-height: 100vh;\n  background: url(\"./assets/images/schools/bg-section.svg\") no-repeat center center;\n  background-size: cover;\n  padding-top: 20%;\n  padding-bottom: 25%;\n  text-align: center;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.header-font {\n  font-size: 2.5em;\n  word-wrap: break-word;\n  margin-right: 7.5%;\n  margin-bottom: 7.5%;\n  margin-left: 7.5%;\n  color: white;\n}\n\n.sub-header-font {\n  font-size: 1.5em;\n  color: #f9d7ce;\n  margin-left: 2.5%;\n  margin-right: 2.5%;\n  margin-bottom: 12.5%;\n}\n\n.form-container {\n  margin-top: 80px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.content-container {\n  font-family: Montserrat,sans-serif;\n}\n\n.label-style {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n.text-style {\n  font-size: 16px;\n  color: #333;\n}\n\n.center-form {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.custom-help {\n  color: #737373;\n}\n\n.btn-custom {\n  color: #fff;\n  background: #f60;\n  border: none;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  width: 115px;\n  height: 45px;\n}\n.btn-custom:hover {\n  background: #fa860a;\n  -webkit-transition: background .25s ease;\n  transition: background .25s ease;\n}\n\nform .ng-invalid.ng-touched {\n  border: 1px solid #d9534f;\n  /* red */\n}\n\n@media only screen and (max-width: 576px) {\n  .header-font {\n    font-size: 2em;\n    margin-top: 7.5%;\n  }\n\n  .sub-header-font {\n    font-size: 1em;\n  }\n}\n"

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = ".map-size {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.close {\n  margin-right: 5px;\n  width: 20px;\n  font-size: 2em;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n.uv-status {\n  font-weight: 900;\n}\n\n.info-window {\n  padding: 5px;\n  position: absolute;\n  top: 50px;\n  left: 15px;\n  right: 3%;\n  width: 90%;\n  background: #F7F7F7;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n\n.info-window-small {\n  position: absolute;\n  padding: 1%;\n  padding-left: 20px;\n  left: 15px;\n  bottom: 3%;\n  top: 63%;\n  text-align: center;\n  width: 390px;\n  background: #F7F7F7;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n\n.controls {\n  margin-top: 10px;\n  border: 1px solid transparent;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  height: 32px;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n\n.display {\n  display: none;\n}\n\n#pac-input {\n  left: 15px !important;\n  background-color: #F7F7F7;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 50%;\n}\n\n.font-weight-bold {\n  font-weight: bold;\n}\n\n.no-margin {\n  margin-bottom: 0;\n}\n\n.info-picture {\n  padding-left: 0;\n}\n.info-picture img {\n  width: 150px;\n}\n\n#pac-input:focus {\n  border-color: #4d90fe;\n}\n\n.content-style {\n  padding-top: 5px;\n}\n.content-style h5 {\n  font-size: 1rem;\n  color: #3e3e3e;\n}\n\n.button-style {\n  box-shadow: none;\n  border: none;\n  background-color: #f27420;\n  color: white;\n  width: 100%;\n}\n.button-style:focus {\n  outline: none;\n}\n.button-style:hover {\n  background: #fa860a;\n  cursor: pointer;\n}\n.button-style:disabled {\n  background: #fa860a;\n}\n\n.dropper {\n  height: 40px;\n}\n\n.padding-button {\n  position: absolute;\n  bottom: 10px;\n  left: 2px;\n  right: 5%;\n}\n\n.container-fluid {\n  padding: 0 !important;\n}\n\n@media screen and (max-width: 767px) {\n  #pac-input {\n    width: 90%;\n  }\n\n  .content-style {\n    padding-top: 20px;\n  }\n\n  .info-picture img {\n    width: 100px;\n  }\n\n  .info-window-small {\n    width: 90%;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .dropper {\n    height: 30px;\n  }\n}\n@media screen and (max-width: 388px) {\n  .dropper {\n    height: 20px;\n  }\n}\n.loader {\n  position: relative;\n  left: 150px;\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #f27420;\n  /* Blue */\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 0.8s linear infinite;\n          animation: spin 0.8s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@media screen and (max-width: 767px) {\n  .loader {\n    left: 45%;\n  }\n}\n@media screen and (max-width: 560px) {\n  .loader {\n    left: 43%;\n  }\n}\n@media screen and (max-width: 400px) {\n  .loader {\n    left: 41%;\n  }\n}\n@media screen and (max-width: 400px) {\n  .loader {\n    left: 40%;\n  }\n}\n"

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = "#main-container {\n  position: relative;\n}\n\n.information {\n  position: absolute;\n  -webkit-transform: translateY(40%);\n          transform: translateY(40%);\n}\n\n.col-xs-12 {\n  padding: 1px !important;\n}\n\n.loading {\n  text-align: center;\n  font-size: 25px;\n  color: #333;\n}\n\n.button-style {\n  box-shadow: none;\n  padding: 10px;\n  border: none;\n  background-color: #f27420;\n  color: white;\n  border-radius: 50px;\n}\n.button-style:focus {\n  outline: none;\n}\n.button-style:hover {\n  background: #fa860a;\n  cursor: pointer;\n}\n\n.align {\n  text-align: center;\n}\n\n.head-font {\n  font-weight: 800 !important;\n}\n\n.head-font,\n.body-font {\n  color: #333;\n  font-family: Montserrat, sans-serif;\n}\n\n.body-font {\n  font-size: 14px;\n  font-weight: 400 !important;\n}\n\n.link-map {\n  color: #3A85D4 !important;\n}\n.link-map:hover {\n  text-decoration: underline !important;\n  color: #0D82FF !important;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 767px) {\n  .information {\n    position: static;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n\n  .head-font {\n    font-size: 18px;\n  }\n\n  .body-font {\n    font-size: 13px;\n  }\n\n  .location {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 478px) {\n  .head-font {\n    font-size: 15px;\n  }\n\n  .body-font {\n    font-size: 11px;\n  }\n\n  .location {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .button-style {\n    padding: 8px;\n  }\n}\n"

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = ".margin{\n  height: 500px;\n}\n\n\n"

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ },

/***/ 773:
/***/ function(module, exports) {

module.exports = "\n<div class=\"footer-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <h2 ><a [routerLink]=\"['contact']\"> Contact Us </a> </h2>\n        <p >\n          <a href=\"mailto: enquiries@spark64.com?Subject=Hello%20\" target=\"_top\">enquiries@spark64.com</a>\n          <br>\n          <br> Ground Floor <br> 70 Symonds St <br> Auckland, <br> New Zealand </p>\n      </div>\n      <div class=\"col-md-6 col-sm-12 \">\n        <div class=\"row\" >\n          <a class=\"footer-social footer-instagram\"  href=\"https://www.instagram.com/uvlens/\" target=\"_blank\"\n             rel=\"nofollow\" title=\"UVLens on Instagram\"> <i class=\"fa fa-instagram fa-2x\"></i> </a>\n\n          <a class=\"footer-social footer-twitter\" href=\"https://twitter.com/uvlens\" target=\"_blank\"\n             rel=\"nofollow\" title=\"UVLens on Twitter\"> <i class=\"fa fa-twitter fa-2x\"></i> </a>\n\n          <a class=\"footer-social footer-facebook\" href=\"https://www.facebook.com/UVLens/?fref=ts\"\n             target=\"_blank\" rel=\"nofollow\" title=\"UVLens on Facebook\"> <i class=\"fa fa-facebook fa-2x\"></i> </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 push-lg-6\">\n        <a class=\"footer-social\"  href=\"http://www.uvlens.com/license.html\">\n          <p class=\"licence-row\">License Agreement</p>\n        </a>\n        <a class=\"footer-social\"  href=\"http://www.uvlens.com/privacy.html\">\n          <p class=\"licence-row\">Privacy Policy</p>\n        </a>\n        <a class=\"footer-social\"  href=\"https://medium.com/@techno246/uvlens-media-kit-f1b71c2df877#.y5zv65q8e\">\n          <p class=\"licence-row\">Press Kit</p>\n        </a>\n      </div>\n      <div class=\"col-lg-6 pull-lg-6 \">\n        <p class=\"\"> &copy; 2016 Spark Sixty Four Limited, All Rights Reserved. </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = "<div class=\"box col-xs-12 override-style\" [ngClass] =\"headerScrolledStyled ? 'dynamic-styles': ''\">\n    <section class=\"col-xs-6 col-sm-2 logo\">\n      <img src=\"assets/images/logo/logo.svg\" alt=\"\">\n    </section>\n\n    <section class=\"col-sm-6 offset-lg-1 menu navigation\">\n      <div class=\"col-sm-2 col-lg-2  menu-item menu-item-center\">\n        <a routerLinkActive=\"active\" [routerLink]=\"['home']\" class=\"orange-link\">HOME</a>\n      </div>\n      <div class=\"col-sm-4 col-lg-3 col-xl-2  menu-item  menu-item-special dropdown\">\n        <a class=\"orange-link\">SCHOOLS</a>\n        <div class=\"dropdown-content\">\n          <a routerLinkActive=\"drop-active\" [routerLink]=\"['schools/about']\">ABOUT</a>\n          <a routerLinkActive=\"drop-active\" href=\"http://help.uvlens.com/article/6-weather-station-installation\">INSTALLATION</a>\n          <a routerLinkActive=\"drop-active\" [routerLink]=\"['schools/registration']\" href=\"#\">REGISTRATION</a>\n          <a routerLinkActive=\"drop-active\" href=\"#\">DATA PORTAL</a>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-lg-2 menu-item menu-item-center\">\n        <a routerLinkActive=\"active\" [routerLink]=\"['about']\" class=\"orange-link\">ABOUT</a>\n      </div>\n      <div class=\"col-sm-3 col-lg-2  menu-item  menu-item-center\">\n        <a routerLinkActive=\"active\" [routerLink]=\"['contact']\" class=\"orange-link\">CONTACT</a>\n      </div>\n    </section>\n\n    <section class=\"col-sm-4  col-lg-3  navigation\">\n      <!--<section class=\"col-sm-5\">-->\n        <!--<div class=\" menu-item-right\">-->\n          <!--<a href=\"#\" class=\"orange-link\" [routerLink]=\"['widget']\">FORECAST</a>-->\n        <!--</div>-->\n      <!--</section>-->\n      <section class=\"col-sm-7 offset-sm-5\">\n        <div class=\" menu-item-right social-group\">\n          <a class=\"social facebook\" href=\"https://www.facebook.com/UVLens/?fref=ts\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n          <a class=\"social twitter\" href=\"https://twitter.com/uvlens\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n          <a class=\"social instagram\" href=\"https://www.instagram.com/uvlens/\" target=\"_blank\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n        </div>\n      </section>\n\n    </section>\n    <section class = \"mobile-navigation\">\n      <i (click)=\"onOpenMenu()\" class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n    </section>\n\n  <div [ngClass]=\"isOpen ? 'open': ''\">\n    <section class=\"dropped-mobile-menu col-xs-12\" >\n      <div class=\"col-sm-12 menu-item menu-item-center\">\n        <a (click)=\"onOpenMenu()\" routerLinkActive=\"active\" [routerLink]=\"['home']\" class=\"orange-link\">HOME</a>\n      </div>\n      <div class=\"col-sm-12 menu-item  menu-item-center\">\n        <a  (click)=\"dropIsOpen = !dropIsOpen\"  class=\"orange-link\">SCHOOLS <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></a>\n        <div class=\"col-sm-12 drop-in-drop-group \" [ngClass]=\"dropIsOpen ? '': 'dropdown-content'\">\n          <div class=\"col-sm-12 spacing\">\n            <a routerLinkActive=\"drop-in-drop-active\"  (click)=\"onOpenMenu()\" class=\"drop-in-drop \" [routerLink]=\"['schools/about']\">ABOUT</a>\n          </div>\n          <div class=\"col-sm-12 spacing\">\n            <a routerLinkActive=\"drop-in-drop-active\"  (click)=\"onOpenMenu()\"  class=\"drop-in-drop\" href=\"http://help.uvlens.com/article/6-weather-station-installation\">INSTALLATION</a>\n          </div>\n          <div class=\"col-sm-12 spacing\">\n            <a routerLinkActive=\"drop-in-drop-active\"  (click)=\"onOpenMenu()\" class=\"drop-in-drop\"  [routerLink]=\"['schools/registration']\" href=\"#\">REGISTRATION</a>\n          </div>\n          <div class=\"col-sm-12 spacing\">\n            <a routerLinkActive=\"drop-in-drop-active\"  (click)=\"onOpenMenu()\" class=\"drop-in-drop\" href=\"#\">DATA PORTAL</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 menu-item menu-item-center\">\n        <a (click)=\"onOpenMenu()\" routerLinkActive=\"active\" [routerLink]=\"['about']\" class=\"orange-link\">ABOUT</a>\n      </div>\n      <div class=\"col-sm-12 menu-item  menu-item-center\">\n        <a (click)=\"onOpenMenu()\" routerLinkActive=\"active\" [routerLink]=\"['contact']\" class=\"orange-link\" >CONTACT</a>\n      </div>\n      <div class=\"col-sm-12 menu-item  menu-item-center\">\n        <!--<a (click)=\"onOpenMenu()\" href=\"#\" class=\"orange-link\" [routerLink]=\"['widget']\">FORECAST</a>-->\n      </div>\n    </section>\n  </div>\n\n</div>\n\n"

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = "<app-description></app-description>\n<app-founders></app-founders>\n<app-developers></app-developers>\n"

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >UVLens - Our Story </h1>\n    </div>\n    <blockquote class=\"tabbed-text\">\n      <p> <span class=\"story-title\">UVLens </span> is being developed by a team at Spark 64 Ltd, a company making products\n        to help people live healthier outdoor lives. Guided by Richard McLean, who has over 30 years of commercial\n        business experience, the company formed in 2013 after the team won the National Finals of the Microsoft Imagine\n        Cup while Daniel and Ming were still studying their PhD degrees.\n        <br>\n        <br> The company has a focus in education, providing digital information and tools to teach people about\n        UV and sun safety. In a partnership with Banana Boat sunscreen, over 100 UV sensors were installed around\n        the country to protect preschool children from the sun.\n        <br>\n        <br> The team at Spark 64 believe in using technology to ignite new ideas, business as a force for good,\n        having fun and giving back to the community through internship and scholarship opportunities. </p>\n    </blockquote>\n  </div>\n</div>\n"

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >Designers and Developers </h1>\n    </div>\n      <div class=\"row dev-row\">\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Jade</h5>\n                <h6 class=\"card-subtitle text-muted\"> Lead Designer</h6>\n              </div>\n\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/jade.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Niclas</h5>\n                <h6 class=\"card-subtitle text-muted\"> Coding Grand-master</h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/niclas.jpg\"  alt=\"Card image\">\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Michael</h5>\n                <h6 class=\"card-subtitle text-muted\"></h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/michael.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Dimitrii</h5>\n                <h6 class=\"card-subtitle text-muted\"> </h6>\n              </div>\n\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/dimitrii.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 offset-md-3 col-lg-2 offset-lg-0\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Anton</h5>\n                <h6 class=\"card-subtitle text-muted\"></h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/anton.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n<!--      </div>\n      <div class=\"row dev-row\">-->\n\n\n\n\n        <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <div class=\"card\">\n            <div class=\"card-block text-xs-center\">\n              <div class=\"dev-head\">\n                <h5 class=\"card-title\">Aorangi</h5>\n                <h6 class=\"card-subtitle text-muted\"> </h6>\n              </div>\n              <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/aorangi.jpg\"  alt=\"Card image\">\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 778:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"header-block\">\n    <div class=\"page-header\">\n      <h1 >Founders </h1>\n    </div>\n    <div class=\"card-deck-wrapper\">\n\n      <div class=\"card-deck\">\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title\">Daniel Xu <a href=\"http://nz.linkedin.com/in/danielxu64\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> CEO</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/daniel.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Daniel did a PhD in bio-mechatronics Engineering. He was awarded the AMP National Scholarship as\n              one of 10 people doing great things in New Zealand. He enjoys finding challenging problems to\n              solve and is the inventor of a number of patents. In his spare time, he enjoys surfing, hockey,\n              football and exploring the outdoors. </p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title\">Ming Cheuk  <a href=\"http://nz.linkedin.com/in/mingcheuk\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> CTO</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/ming.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Ming leads the R&D at Spark 64. He has a background in Mechatronics Engineering where he graduated\n              top of his class. In his spare time, he volunteers teaching software courses to tertiary students\n              through the Microsoft Student Accelerator programme. He was invited to represent New Zealand\n              as the Student Partner at the MSP world summit.</p>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block founders-head text-xs-center\">\n            <h5 class=\"card-title richard-text\">Richard McLean <a href=\"http://nz.linkedin.com/in/richardmcleannz\" target=\"_blank\" ><i class=\"fa fa-linkedin-square\"></i></a></h5>\n            <h6 class=\"card-subtitle text-muted\"> Executive Chair</h6>\n            <img class=\"fixed-properties rounded-circle \" src=\"./assets/images/about/team/richard.jpg\"  alt=\"Card image\">\n          </div>\n          <div class=\"card-block founders-text\">\n            <p class=\"card-text\"> Richard is an experienced director and a specialist in the development of IP based global businesses.\n              He has over 30 years of solid commercial experience and a passion for rapid growth and the creation\n              of company value. Over time he has played an active role in the success of many New Zealand technology\n              companies.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 779:
/***/ function(module, exports) {

module.exports = "<div class=\"align-center\">\n  <div class=\"contact-header\">\n    <div class=\"container\">\n      <h1>CONTACT US</h1>\n    </div>\n  </div>\n  <div class=\"container contact-container\">\n    <p class=\"text-style\">\n      Please contact us if you have any general questions or issues and our support team will get back to you as soon as we can.\n    </p>\n    <p class=\"text-style\">\n      E-mails can also be addressed to enquiries@spark64.com\n    </p>\n    <form class=\"form-horizontal margin-add\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Name *</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" >\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('name').hasError('required') && myForm.get('name').touched\" >Name is required</small>\n        </div>\n      </div>\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Email *</label>\n        <div class=\"col-sm-8\">\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" required>\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('email').hasError('required') && myForm.get('email').touched\" >Email is required</small>\n          <small class=\"text-danger\" *ngIf=\"myForm.get('email').hasError('pattern') && myForm.get('email').touched\" >Valid Email is required is required</small>\n        </div>\n      </div>\n      <div class=\"form-group padding-add\">\n        <label class=\"control-label col-sm-4 label-style\">Phone number</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\" >\n        </div>\n        <div class=\"col-sm-8 offset-sm-4\">\n          <small class=\"text-danger\" *ngIf=\"myForm.get('phoneNumber').hasError('required') && myForm.get('phoneNumber').touched\" >Phone Number is required</small>\n\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-12 label-style\" >Message *</label>\n        <textarea class=\"col-sm-12\" type=\"text\" formControlName=\"message\" class=\"form-control\" rows=\"4\" required></textarea>\n        <small class=\"text-danger\" *ngIf=\"myForm.get('message').hasError('required') && myForm.get('message').touched\" >Message is required</small>\n\n      </div>\n\n\n      <div class=\"col-sm-6 push-sm-6 help-text\">* This field is required.</div>\n      <div class=\"col-sm-6 pull-sm-6\">\n        <button type=\"submit\" class=\"btn btn-default btn-custom\" [disabled]=\"!myForm.valid\">SUBMIT</button>\n      </div>\n\n\n    </form>\n  </div>\n</div>\n\n"

/***/ },

/***/ 780:
/***/ function(module, exports) {

module.exports = "<div class=\"back-image\" [ngClass] = \"isVideo ? 'vh_height100' : 'forMobile'\">\n  <div class=\"shadow-overlay vh_height100\"></div>\n  <video *ngIf=\"isVideo\"  playsinline autoplay muted loop poster=\"./assets/images/background/EarthMap.jpg\" id=\"bgvid\">\n    <source src=\"./assets/images/background/Earth_1.mp4\" type=\"video/mp4\">\n  </video>\n  <div class=\"parent\"></div>\n    <div class=\"col-md-6 offset-md-3 col-lg-4 offset-lg-4 logo\">\n      <div class=\"col-xs-12\">\n        <img src=\"./assets/images/logo.png\">\n      </div>\n      <div class=\"col-xs-12 slogan\">\n        <h3>Localised UV report</h3>\n        <h3>Keeping you safe in the sun</h3>\n      </div>\n      <div class=\"col-xs-8 offset-xs-2 offset-md-0 col-md-12 button-margin-top\">\n        <a pageScroll [pageScrollDuration]=\"400\" href=\"#forecast\">\n          <button class=\"buttons\">Today's forecast</button>\n        </a>\n      </div>\n  </div>\n</div>\n\n\n\n<div style=\"background: white\">\n  <div class=\"container separator\" id=\"forecast\">\n    <div>\n      <div class=\"try-uv\">\n        <h3>Explore UV throughout the world</h3>\n        <!--<i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>-->\n      </div>\n\n      <app-widget></app-widget>\n    </div>\n\n    <div class=\"row about\">\n      <div class=\"col-md-6 col-sm-6 col-sm-push-6\">\n        <img src=\"./assets/images/web-wheel.png\" class=\"img-responsive image-size wheel-img\" alt=\"UVLens UV wheel displaying UV index\">\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-sm-pull-6 text-padding\">\n        <h3 class=\"orange-header left-header\">\n          Plan out the best time to be outside\n        </h3>\n        <p class=\"left-text about-text\">\n          Your UV forecast for the day, see when it’s safe to be outside and when to avoid the sun.\n        </p>\n      </div>\n    </div>\n    <div class=\"row about\">\n      <div class=\"col-md-6 col-sm-6 \">\n        <img src=\"./assets/images/burntime.png\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 col-sm-6 text-padding\">\n        <h3 class=\"orange-header\">\n          Find your burn risk\n        </h3>\n        <p class=\"about-text\">\n          Everybody’s different. Find out how long you can spend in the sun by taking a personalised skin type assessment.\n        </p>\n      </div>\n    </div>\n    <div class=\"row about\">\n      <div class=\"col-md-6 col-sm-6 col-sm-push-6 \">\n        <img src=\"./assets/images/protection.png\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-sm-pull-6 text-padding\">\n        <h3 class=\"orange-header left-header\">\n          Shedding light on UV\n        </h3>\n        <p class=\"left-text about-text\">\n          UV is deceptive and invisible to our eyes, learn what protection measures to take and when to apply sunscreen.\n        </p>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"container-fluid\">\n    <div class=\"row partners\">\n      <div class=\"col-sm-12 col-md-3 offset-md-1 mediaResize specAlign\">\n        <a href=\"http://www.bananaboat.com/\" target=\"_blank\"><img class=\"partnerImages\" src=\"./assets/images/bananaboat.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-4 mediaResize middleImage\">\n        <a href=\"https://www.callaghaninnovation.govt.nz/\" target=\"_blank\"><img class=\"partnerImages\" src=\"./assets/images/callaghan.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-3 mediaResize\">\n        <a href=\"https://oceanswim.co.nz/\" target=\"_blank\"><img class=\"partnerImages\" src=\"./assets/images/ocean.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-4 mediaResize special\">\n        <a href=\"https://www.microsoft.com/\" target=\"_blank\"><img class=\"longPartnerImages microsoftImage\" src=\"./assets/images/microsoft.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-4 mediaResize middleImage\">\n        <a href=\"https://www.solbari.com/\" target=\"_blank\"><img class=\"longPartnerImages\" src=\"./assets/images/solbari.png\"></a>\n      </div>\n      <div class=\"col-sm-12 col-md-4 mediaResize \">\n        <a href=\"http://www.abi.auckland.ac.nz/en.html\" target=\"_blank\"><img class=\"longPartnerImages\" src=\"./assets/images/abi.png\"></a>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"container\">\n    <div class=\"\">\n      <div class=\"col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-2 center-align\">\n        <img src=\"./assets/images/phone1.png\" class=\"img-responsive iphone-img\">\n      </div>\n      <div class=\"col-md-5 col-sm-12 download-text center-align\">\n        <h2 class=\"orange-header to-hide\">Protect yourself with the free UV app</h2>\n        <div class=\"remove-padding\">\n          <div class=\"col-sm-4 col-md-6 col-sm-offset-1 margin-top\">\n            <a href=\"https://itunes.apple.com/nz/app/uvlens/id1060878359?mt=8\" target=\"_blank\" rel=\"nofollow\" title=\"Download the UVLens app from iTunes\">\n              <img src=\"./assets/images/app-store.png\" class=\"img-responsive badge-resize\">\n            </a>\n          </div>\n          <div class=\"col-sm-4 col-md-6 margin-top\">\n            <a href=\"https://play.google.com/store/apps/details?id=com.spark64.uvlens.mobile&amp;hl=en\" target=\"_blank\" rel=\"nofollow\" title=\"Download the UVLens app from Google PlayStore\">\n              <img src=\"./assets/images/google-play.png\" class=\"img-responsive badge-resize\">\n            </a>\n          </div>\n          <div class=\"col-sm-4 col-md-12 margin-top\">\n            <a href=\"https://www.microsoft.com/en-us/store/apps/uvlens/9nblggh5ft1g\" target=\"_blank\" rel=\"nofollow\" title=\"Download the UVLens app from the Windows Store\">\n              <img src=\"./assets/images/windows-store.png\" class=\"img-responsive badge-resize\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 781:
/***/ function(module, exports) {

module.exports = "<section class=\"intro\">\n  <div class=\"back-image\">\n    <div class=\"container block-align-center\">\n      <h1 class=\"header\">Live weather data for your school</h1>\n      <p class=\"under-header\">Measure, record, and analyse live environmental data, and make it accessible to students,\n        staff and parents.</p>\n      <div class=\"col-xs-12 weather-kit-container container\">\n        <div class=\" col-lg-6 col-md-8 col-sm-12\">\n          <img src=\"./assets/images/schools/weather-kit.jpg\" class=\"img-responsive weather-kit-img\">\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-12 text-align\">\n          <p class=\"intro-top\">INTRODUCING</p>\n          <p class=\"under-top\">The UVLens® Weather Kit</p>\n          <p class=\"description\">The UVLens® Weather Kit contains sensors and software to measure the local UV, temperature, rainfall, and more at your school.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"information\">\n  <div class=\"container information-container\">\n    <div class=\"row info\">\n      <div class=\"col-xs-12 col-md-6 col-sm-push-6\">\n        <img src=\"./assets/images/schools/weather_dashboard.png\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 col-sm-pull-6 text-padding\">\n        <p class=\"orange-header\">\n          Collect <span>data</span>\n        </p>\n        <ul class=\"ul-text\">\n          <li class=\"li-margin\">Collect UV, rainfall, windspeed, temperature and humidity data at your school.</li>\n          <li class=\"li-margin\">Livestream to data dashboards and use in school projects.</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row info\">\n      <div class=\"col-md-6 img-left\">\n        <img src=\"./assets/images/schools/earth-visualisation.jpg\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 text-padding\">\n        <p class=\"orange-header\">\n          Create <span>visualisations</span>\n        </p>\n        <ul class=\"ul-text\">\n          <li class=\"li-margin\">The weather kit bundles software and toolkits to help you build your own visualisations.</li>\n          <li class=\"li-margin\">Compare data accross time and locations.</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row info\">\n      <div class=\"col-md-6 col-sm-push-6\">\n        <img src=\"./assets/images/schools/app_ipad.jpg\" class=\"img-responsive image-size\">\n      </div>\n      <div class=\"col-md-6 col-sm-pull-6 text-padding\">\n        <p class=\"orange-header\">\n          Stay <span>safe</span>\n        </p>\n        <ul class=\"ul-text\">\n          <li class=\"li-margin\">Live UV and sun safety information that is local to your school.</li>\n          <li class=\"li-margin\">Premium UVLens® iOS and Android app license for students and teachers.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"order\">\n  <div class=\"container align-container\">\n    <h1 class=\"order-header\">Order your UVLens® Weather Kit now and get started.</h1>\n    <div class=\"order-container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 img-padding\">\n          <img src=\"./assets/images/schools/weather-kit.jpg\" class=\"img-responsive image-size\">\n        </div>\n        <div class=\"col-md-6 text-padding\">\n          <p class=\"grey-header\">\n            Monitoring Kit\n          </p>\n          <p class=\"price\">\n            $475\n          </p>\n          <p>\n            Get started with the equipment to monitor the environmental conditions at your school. The kit includes:\n          </p>\n          <ul class=\"ul-text-2\">\n            <li>A weather station</li>\n            <li>Mounting hardware</li>\n            <li>Installation support</li>\n          </ul>\n          <a class=\"remove-underline\" href=\"http://help.uvlens.com/article/6-weather-station-installation\">\n            <div class=\"button-info\">\n              More info...\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 img-padding\">\n          <img src=\"./assets/images/schools/app_iphone.jpg\" class=\"img-responsive image-size\">\n        </div>\n        <div class=\"col-md-6 text-padding\">\n          <p class=\"grey-header\">\n            Premium App License\n          </p>\n          <p class=\"price\">\n            <span class=\"line-through\">$49</span> $39/month <span class=\"brackets\">(introductory offer)</span>\n          </p>\n          <p>\n            School-wide premium license to the UVLens® app for your students and staff.\n          </p>\n          <ul class=\"ul-text-2\">\n            <li>Live UV data at your school, and anywhere else in the country</li>\n            <li>Real-time alerts when the UV conditions change</li>\n            <li>Sunsmart educational material</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <a class=\"remove-underline\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <div class=\"button-order\" angulartics2On=\"click\" angularticsEvent=\"click\" angularticsCategory=\"Order Button\">\n        Order now\n      </div>\n    </a>\n\n  </div>\n</section>\n\n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"order-label\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close close-button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h2 class=\"contact-header\" id=\"order-label\">Order Now</h2>\n      </div>\n      <!-- end of header -->\n      <div class=\"modal-body\">\n\n        <p>Fill in your details below and our sales team will be in contact within the next working day.</p>\n\n        <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"myForm\" novalidate>\n          <div class=\"form-group\">\n            <label class=\"control-label label-style\" >Name *</label>\n\n              <input type=\"text\" class=\"form-control\" formControlName= \"name\" placeholder=\"Name\" required>\n\n            <small class=\"text-danger\" *ngIf=\"myForm.get('name').hasError('required') && myForm.get('name').touched\" >Name is required</small>\n\n          </div>\n\n          <div class=\"form-group \">\n            <label class=\" control-label label-style\" >Email *</label>\n\n              <input type=\"email\" class=\"form-control\" formControlName= \"email\" placeholder=\"Email\" required>\n\n            <small class=\" text-danger\" *ngIf=\"myForm.get('email').hasError('required') && myForm.get('email').touched\">Email is required </small>\n            <small class=\" text-danger\" *ngIf=\"myForm.get('email').hasError('pattern') && myForm.get('email').touched\">Valid Email is required </small>\n\n            <!-- end of row-->\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\" control-label label-style\" >Phone number</label>\n\n              <input type=\"tel\" class=\"form-control\" formControlName= \"phone\" placeholder=\"Phone number\" required>\n            <small class=\" text-danger\" *ngIf=\"myForm.get('phone').hasError('required') && myForm.get('phone').touched\">Phone Number is required </small>\n            <!-- end of row-->\n          </div>\n\n          <div class=\"form-group \">\n            <label class=\"control-label label-style\" >School *</label>\n              <input type=\"text\" class=\"form-control\" formControlName= \"school\" placeholder=\"School\" required>\n            <small class=\"text-danger\" *ngIf=\"myForm.get('school').hasError('required') && myForm.get('school').touched\">School is required </small>\n\n            <!-- end of row-->\n          </div>\n          <!-- end of form group -->\n          <div class=\"row\">\n\n            <div class=\"col-md-6 push-md-6 required-text \">\n              <span class=\"help-block custom-help\"> * This field is required. </span>\n            </div>\n\n            <div class=\"col-md-6 pull-md-6\" >\n              <button type=\"submit\" class=\"btn btn-default btn-custom\"  [disabled]=\"myForm.invalid\"> SUBMIT </button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <!-- end of body -->\n      <div class=\"modal-footer\" >\n        <div id=\"successRegister\">\n        </div>\n      </div>\n    </div>\n    <!-- end of modal content-->\n  </div>\n  <!--end of modal-dialog-->\n</div>\n\n"

/***/ },

/***/ 782:
/***/ function(module, exports) {

module.exports = "\n<div class=\"back-image\">\n  <div class=\"container content-container\">\n    <p class=\"header-font\">\n      Congratulations!\n    </p>\n    <p class=\"sub-header-font\">\n      You are almost there with the installation! Fill in your details below to activate it on the UVLens network.\n    </p>\n  </div>\n</div>\n<div class=\"container form-container content-container\">\n\n  <p class=\"text-style\" >Fill in the details of your weather station below to provide live UV data to the staff and students of the school!</p>\n  <form class=\"form-horizontal center-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"myForm\" novalidate>\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\" >Name *</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"text\" class=\"form-control\"  formControlName= \"name\" placeholder=\"Name\" required >\n\n      </div>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" *ngIf=\"myForm.get('name').hasError('required') && myForm.get('name').touched\" >Name is required</small>\n\n      <!-- Problem entering wrong text? -->\n\n    </div>\n    <!-- end of form group -->\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\">Email *</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"email\" class=\"form-control\" formControlName= \"email\" placeholder=\"Email\" required>\n      </div>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" *ngIf=\"myForm.get('email').hasError('required') && myForm.get('email').touched\" >Email is required </small>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" *ngIf=\"myForm.get('email').hasError('pattern') && myForm.get('name').touched\" >Valid Email is required</small>\n      <!-- end of row-->\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\" >Phone number</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"tel\" class=\"form-control\" formControlName= \"phone\" placeholder=\"Phone number\" >\n      </div>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" > </small>\n\n      <!-- end of row-->\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\" >School *</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"text\" class=\"form-control\" formControlName= \"school\" placeholder=\"School\" >\n      </div>\n      <small class=\"col-xs-10 offset-xs-1  text-danger\" *ngIf=\"myForm.get('school').hasError('required') && myForm.get('school').touched \"> School is required</small>\n\n      <!-- end of row-->\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-xs-10 offset-xs-1 control-label label-style\" >Sensor ID (e.g. IAUCKLAN416) *</label>\n      <div class=\"col-xs-10 offset-xs-1\">\n        <input type=\"text\" class=\"form-control\" formControlName= \"sensor\" placeholder=\"Sensor\" required>\n      </div>\n      <small class=\"col-xs-10 offset-xs-1 text-danger\" *ngIf=\"myForm.get('sensor').hasError('required') && myForm.get('sensor').touched\">Sensor is required </small>\n\n      <!-- end of row-->\n    </div>\n\n    <!-- end of form group -->\n    <div class=\"row\">\n\n      <div class=\"col-xs-10 offset-xs-1 col-sm-5 push-sm-6 \">\n        <span class=\"help-block custom-help\"> * This field is required. </span>\n      </div>\n\n      <div class=\"col-xs-10 offset-xs-1 col-sm-5 pull-sm-6\" >\n\n        <button type=\"submit\" class=\"btn btn-default btn-custom\" [disabled]=\"myForm.invalid\"> SUBMIT </button>\n\n      </div>\n\n    </div>\n  </form>\n  <br>\n  <div class=\"\" >\n    <div id=\"successStation\" >\n    </div>\n  </div>\n</div>\n\n"

/***/ },

/***/ 783:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid map-size\" >\n  <div class=\"form-group\">\n    <input [ngStyle]=\"isLoaded ? {}: {'display':'none'}\" id=\"pac-input\" class=\"controls\" type=\"text\"\n           placeholder=\"Enter a location\" #search [formControl]=\"searchControl\">\n  </div>\n  <div id=\"map\" #map></div>\n  <div *ngIf=\"display\" [ngClass]=\"info_big ? 'info-window':'info-window-small'\">\n    <div class=\"close\" *ngIf=\"!info_big\">\n      <span aria-hidden=\"true\" (click)=\"hideInfo()\">&times;</span>\n    </div>\n    <div class=\"close\" *ngIf=\"info_big\">\n      <span aria-hidden=\"true\" (click)=\"minimizeInfo()\">&minus;</span>\n    </div>\n    <div class=\"content-style\">\n      <app-wheel *ngIf=\"info_big\" [apiData]=\"apiData\"></app-wheel>\n      <div *ngIf=\"!info_big\">\n\n        <h5>{{name}}</h5>\n        <h5 *ngIf=\"!flamesLoading\">\n          <div class=\"loader\"></div>\n        </h5>\n        <div *ngIf=\"flamesLoading\" class=\"info-picture col-xs-12\">\n          <div class=\"font-weight-bold\">{{uvLevel}} UV</div>\n          <img *ngIf=\"uvLevel =='Extreme'\" src=\"./assets/widget/widget-flames/extreme.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='None'\" src=\"./assets/widget/widget-flames/none.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='Low'\" src=\"./assets/widget/widget-flames/low.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='High'\" src=\"./assets/widget/widget-flames/high.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='Moderate'\" src=\"./assets/widget/widget-flames/moderate.svg\" alt=\"\">\n          <img *ngIf=\"uvLevel =='Very high'\" src=\"./assets/widget/widget-flames/veryhigh.svg\" alt=\"\">\n        </div>\n        <div class=\"col-xs-12 padding-button\">\n          <!--<div class=\"dropper\"></div>-->\n          <button [disabled]=\"!flamesLoading\" (click)=\"openWheelComponent()\" class=\"button-style\">Full UV report</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ },

/***/ 784:
/***/ function(module, exports) {

module.exports = "<div id=\"god\">\n  <section class=\"loading\" *ngIf=\"!isLoaded\">\n\n    {{hint}}\n\n  </section>\n  <section id=\"main-container\">\n    <div class=\"align\">\n      <div class=\" col-xs-12 col-md-6\" id=\"slider\" [ngStyle]=\"isLoaded ? {}: {'display':'none'}\"></div>\n    </div>\n    <div class =\"col-xs-12 col-md-6 offset-md-6 information\">\n        <section [ngStyle]=\"isLoaded ? {}: {'display':'none'}\" class=\"main-info col-xs-12\">\n          <h6  class=\"head-font location\" >{{forecastDay}} forecast</h6>\n          <h3 class=\"head-font uvTag\" [ngStyle]=\"{'color':textColor}\">{{uvValue}} UV</h3>\n          <h6 class=\"head-font location\" >in {{place}}</h6>\n        </section>\n        <section  class=\"col-xs-12\">\n          <div class=\"body-font\" [ngStyle]=\"isLoaded ? {}: {'display':'none'}\" >{{message}}</div>\n          <!--<button class=\"button-style\" >Explore UV</button>-->\n        </section>\n    </div>\n  </section>\n</div>\n"

/***/ },

/***/ 785:
/***/ function(module, exports) {

module.exports = "<div class=\"widget\">\n  <!--<app-wheel (openComponent)=\"changeView()\" *ngIf=\"openWheel\"></app-wheel>-->\n  <app-map></app-map>\n</div>\n"

/***/ }

},[1061]);
//# sourceMappingURL=client.bundle.map