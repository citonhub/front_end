(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{316:function(t,e,n){!function(t){"use strict";var e=t.Pos;function n(t,e,n){return n?t.indexOf(e)>=0:0==t.lastIndexOf(e,0)}t.registerHelper("hint","xml",(function(i,r){var o=r&&r.schemaInfo,s=r&&r.quoteChar||'"',l=r&&r.matchInMiddle;if(o){var a=i.getCursor(),c=i.getTokenAt(a);if(c.end>a.ch&&(c.end=a.ch,c.string=c.string.slice(0,a.ch-c.start)),(b=t.innerMode(i.getMode(),c.state)).mode.xmlCurrentTag){var u,h,d=[],p=!1,f=/\btag\b/.test(c.type)&&!/>$/.test(c.string),m=f&&/^\w/.test(c.string);if(m){var g=i.getLine(a.line).slice(Math.max(0,c.start-2),c.start),v=/<\/$/.test(g)?"close":/<$/.test(g)?"open":null;v&&(h=c.start-("close"==v?2:1))}else f&&"<"==c.string?v="open":f&&"</"==c.string&&(v="close");var y=b.mode.xmlCurrentTag(b.state);if(!f&&!y||v){m&&(u=c.string),p=v;var b,w=b.mode.xmlCurrentContext?b.mode.xmlCurrentContext(b.state):[],x=(b=w.length&&w[w.length-1])&&o[b],k=b?x&&x.children:o["!top"];if(k&&"close"!=v)for(var C=0;C<k.length;++C)u&&!n(k[C],u,l)||d.push("<"+k[C]);else if("close"!=v)for(var A in o)!o.hasOwnProperty(A)||"!top"==A||"!attrs"==A||u&&!n(A,u,l)||d.push("<"+A);b&&(!u||"close"==v&&n(b,u,l))&&d.push("</"+b+">")}else{var O=(x=y&&o[y.name])&&x.attrs,H=o["!attrs"];if(!O&&!H)return;if(O){if(H){var M={};for(var P in H)H.hasOwnProperty(P)&&(M[P]=H[P]);for(var P in O)O.hasOwnProperty(P)&&(M[P]=O[P]);O=M}}else O=H;if("string"==c.type||"="==c.string){var T,j=(g=i.getRange(e(a.line,Math.max(0,a.ch-60)),e(a.line,"string"==c.type?c.start:c.end))).match(/([^\s\u00a0=<>\"\']+)=$/);if(!j||!O.hasOwnProperty(j[1])||!(T=O[j[1]]))return;if("function"==typeof T&&(T=T.call(this,i)),"string"==c.type){u=c.string;var S=0;/['"]/.test(c.string.charAt(0))&&(s=c.string.charAt(0),u=c.string.slice(1),S++);var L=c.string.length;if(/['"]/.test(c.string.charAt(L-1))&&(s=c.string.charAt(L-1),u=c.string.substr(S,L-2)),S){var F=i.getLine(a.line);F.length>c.end&&F.charAt(c.end)==s&&c.end++}p=!0}for(C=0;C<T.length;++C)u&&!n(T[C],u,l)||d.push(s+T[C]+s)}else for(var I in"attribute"==c.type&&(u=c.string,p=!0),O)!O.hasOwnProperty(I)||u&&!n(I,u,l)||d.push(I)}return{list:d,from:p?e(a.line,null==h?c.start:h):a,to:p?e(a.line,c.end):a}}}}))}(n(241))},373:function(t,e,n){!function(t){"use strict";var e=/[\w$]+/;t.registerHelper("hint","anyword",(function(n,i){for(var r=i&&i.word||e,o=i&&i.range||500,s=n.getCursor(),l=n.getLine(s.line),a=s.ch,c=a;c&&r.test(l.charAt(c-1));)--c;for(var u=c!=a&&l.slice(c,a),h=i&&i.list||[],d={},p=new RegExp(r.source,"g"),f=-1;f<=1;f+=2)for(var m=s.line,g=Math.min(Math.max(m+f*o,n.firstLine()),n.lastLine())+f;m!=g;m+=f)for(var v,y=n.getLine(m);v=p.exec(y);)m==s.line&&v[0]===u||u&&0!=v[0].lastIndexOf(u,0)||Object.prototype.hasOwnProperty.call(d,v[0])||(d[v[0]]=!0,h.push(v[0]));return{list:h,from:t.Pos(s.line,c),to:t.Pos(s.line,a)}}))}(n(241))},374:function(t,e,n){!function(t){"use strict";var e={active:1,after:1,before:1,checked:1,default:1,disabled:1,empty:1,enabled:1,"first-child":1,"first-letter":1,"first-line":1,"first-of-type":1,focus:1,hover:1,"in-range":1,indeterminate:1,invalid:1,lang:1,"last-child":1,"last-of-type":1,link:1,not:1,"nth-child":1,"nth-last-child":1,"nth-last-of-type":1,"nth-of-type":1,"only-of-type":1,"only-child":1,optional:1,"out-of-range":1,placeholder:1,"read-only":1,"read-write":1,required:1,root:1,selection:1,target:1,valid:1,visited:1};t.registerHelper("hint","css",(function(n){var i=n.getCursor(),r=n.getTokenAt(i),o=t.innerMode(n.getMode(),r.state);if("css"==o.mode.name){if("keyword"==r.type&&0=="!important".indexOf(r.string))return{list:["!important"],from:t.Pos(i.line,r.start),to:t.Pos(i.line,r.end)};var s=r.start,l=i.ch,a=r.string.slice(0,l-s);/[^\w$_-]/.test(a)&&(a="",s=l=i.ch);var c=t.resolveMode("text/css"),u=[],h=o.state.state;return"pseudo"==h||"variable-3"==r.type?d(e):"block"==h||"maybeprop"==h?d(c.propertyKeywords):"prop"==h||"parens"==h||"at"==h||"params"==h?(d(c.valueKeywords),d(c.colorKeywords)):"media"!=h&&"media_parens"!=h||(d(c.mediaTypes),d(c.mediaFeatures)),u.length?{list:u,from:t.Pos(i.line,s),to:t.Pos(i.line,l)}:void 0}function d(t){for(var e in t)a&&0!=e.lastIndexOf(a,0)||u.push(e)}}))}(n(241),n(252))},375:function(t,e,n){!function(t){"use strict";var e="ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(" "),n=["_blank","_self","_top","_parent"],i=["ascii","utf-8","utf-16","latin1","latin1"],r=["get","post","put","delete"],o=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],s=["all","screen","print","embossed","braille","handheld","print","projection","screen","tty","tv","speech","3d-glasses","resolution [>][<][=] [X]","device-aspect-ratio: X/Y","orientation:portrait","orientation:landscape","device-height: [X]","device-width: [X]"],l={attrs:{}},a={a:{attrs:{href:null,ping:null,type:null,media:s,target:n,hreflang:e}},abbr:l,acronym:l,address:l,applet:l,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:s,hreflang:e,type:null,shape:["default","rect","circle","poly"]}},article:l,aside:l,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["","autoplay"],loop:["","loop"],controls:["","controls"]}},b:l,base:{attrs:{href:null,target:n}},basefont:l,bdi:l,bdo:l,big:l,blockquote:{attrs:{cite:null}},body:l,br:l,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["","autofocus"],disabled:["","autofocus"],formenctype:o,formmethod:r,formnovalidate:["","novalidate"],formtarget:n,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:l,center:l,cite:l,code:l,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["","disabled"],checked:["","checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["","disabled"],multiple:["","multiple"]}},datalist:{attrs:{data:null}},dd:l,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["","open"]}},dfn:l,dir:l,div:l,dl:l,dt:l,em:l,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["","disabled"],form:null,name:null}},figcaption:l,figure:l,font:l,footer:l,form:{attrs:{action:null,name:null,"accept-charset":i,autocomplete:["on","off"],enctype:o,method:r,novalidate:["","novalidate"],target:n}},frame:l,frameset:l,h1:l,h2:l,h3:l,h4:l,h5:l,h6:l,head:{attrs:{},children:["title","base","link","style","meta","script","noscript","command"]},header:l,hgroup:l,hr:l,html:{attrs:{manifest:null},children:["head","body"]},i:l,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["","seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["","autofocus"],checked:["","checked"],disabled:["","disabled"],formenctype:o,formmethod:r,formnovalidate:["","novalidate"],formtarget:n,multiple:["","multiple"],readonly:["","readonly"],required:["","required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:l,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["","autofocus"],disabled:["","disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:l,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:e,media:s,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:l,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:i,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:l,noframes:l,noscript:l,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["","typemustmatch"]}},ol:{attrs:{reversed:["","reversed"],start:null,type:["1","a","A","i","I"]}},optgroup:{attrs:{disabled:["","disabled"],label:null}},option:{attrs:{disabled:["","disabled"],label:null,selected:["","selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:l,param:{attrs:{name:null,value:null}},pre:l,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:l,rt:l,ruby:l,s:l,samp:l,script:{attrs:{type:["text/javascript"],src:null,async:["","async"],defer:["","defer"],charset:i}},section:l,select:{attrs:{form:null,name:null,size:null,autofocus:["","autofocus"],disabled:["","disabled"],multiple:["","multiple"]}},small:l,source:{attrs:{src:null,type:null,media:null}},span:l,strike:l,strong:l,style:{attrs:{type:["text/css"],media:s,scoped:null}},sub:l,summary:l,sup:l,table:l,tbody:l,td:{attrs:{colspan:null,rowspan:null,headers:null}},textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["","autofocus"],disabled:["","disabled"],readonly:["","readonly"],required:["","required"],wrap:["soft","hard"]}},tfoot:l,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:l,time:{attrs:{datetime:null}},title:l,tr:l,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:e}},tt:l,u:l,ul:l,var:l,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["","autoplay"],mediagroup:["movie"],muted:["","muted"],controls:["","controls"]}},wbr:l},c={accesskey:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],class:null,contenteditable:["true","false"],contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["en","es"],spellcheck:["true","false"],autocorrect:["true","false"],autocapitalize:["true","false"],style:null,tabindex:["1","2","3","4","5","6","7","8","9"],title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"]};function u(t){for(var e in c)c.hasOwnProperty(e)&&(t.attrs[e]=c[e])}for(var h in u(l),a)a.hasOwnProperty(h)&&a[h]!=l&&u(a[h]);t.htmlSchema=a,t.registerHelper("hint","html",(function(e,n){var i={schemaInfo:a};if(n)for(var r in n)i[r]=n[r];return t.hint.xml(e,i)}))}(n(241),n(316))},376:function(t,e,n){!function(t){var e=t.Pos;function n(t,e){for(var n=0,i=t.length;n<i;++n)e(t[n])}function i(n,i,r,o){var s=n.getCursor(),l=r(n,s);if(!/\b(?:string|comment)\b/.test(l.type)){var a=t.innerMode(n.getMode(),l.state);if("json"!==a.mode.helperType){l.state=a.state,/^[\w$_]*$/.test(l.string)?l.end>s.ch&&(l.end=s.ch,l.string=l.string.slice(0,s.ch-l.start)):l={start:s.ch,end:s.ch,string:"",state:l.state,type:"."==l.string?"property":null};for(var c=l;"property"==c.type;){if("."!=(c=r(n,e(s.line,c.start))).string)return;if(c=r(n,e(s.line,c.start)),!h)var h=[];h.push(c)}return{list:u(l,h,i,o),from:e(s.line,l.start),to:e(s.line,l.end)}}}}function r(t,e){var n=t.getTokenAt(e);return e.ch==n.start+1&&"."==n.string.charAt(0)?(n.end=n.start,n.string=".",n.type="property"):/^\.[\w$_]*$/.test(n.string)&&(n.type="property",n.start++,n.string=n.string.replace(/\./,"")),n}t.registerHelper("hint","javascript",(function(t,e){return i(t,a,(function(t,e){return t.getTokenAt(e)}),e)})),t.registerHelper("hint","coffeescript",(function(t,e){return i(t,c,r,e)}));var o="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),s="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),l="prototype apply call bind".split(" "),a="break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(" "),c="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ");function u(t,e,i,r){var a=[],c=t.string,u=r&&r.globalScope||window;function h(t){0!=t.lastIndexOf(c,0)||function(t,e){if(!Array.prototype.indexOf){for(var n=t.length;n--;)if(t[n]===e)return!0;return!1}return-1!=t.indexOf(e)}(a,t)||a.push(t)}function d(t){"string"==typeof t?n(o,h):t instanceof Array?n(s,h):t instanceof Function&&n(l,h),function(t,e){if(Object.getOwnPropertyNames&&Object.getPrototypeOf)for(var n=t;n;n=Object.getPrototypeOf(n))Object.getOwnPropertyNames(n).forEach(e);else for(var i in t)e(i)}(t,h)}if(e&&e.length){var p,f=e.pop();for(f.type&&0===f.type.indexOf("variable")?(r&&r.additionalContext&&(p=r.additionalContext[f.string]),r&&!1===r.useGlobalScope||(p=p||u[f.string])):"string"==f.type?p="":"atom"==f.type?p=1:"function"==f.type&&(null==u.jQuery||"$"!=f.string&&"jQuery"!=f.string||"function"!=typeof u.jQuery?null!=u._&&"_"==f.string&&"function"==typeof u._&&(p=u._()):p=u.jQuery());null!=p&&e.length;)p=p[e.pop().string];null!=p&&d(p)}else{for(var m=t.state.localVars;m;m=m.next)h(m.name);for(var g=t.state.context;g;g=g.prev)for(m=g.vars;m;m=m.next)h(m.name);for(m=t.state.globalVars;m;m=m.next)h(m.name);r&&!1===r.useGlobalScope||d(u),n(i,h)}return a}}(n(241))},377:function(t,e,n){var i=n(457);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(25)(i,r);i.locals&&(t.exports=i.locals)},378:function(t,e,n){!function(t){"use strict";function e(t,e){this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length;var n=this;t.on("cursorActivity",this.activityFunc=function(){n.cursorActivity()})}t.showHint=function(t,e,n){if(!e)return t.showHint(n);n&&n.async&&(e.async=!0);var i={hint:e};if(n)for(var r in n)i[r]=n[r];return t.showHint(i)},t.defineExtension("showHint",(function(n){n=function(t,e,n){var i=t.options.hintOptions,r={};for(var o in a)r[o]=a[o];if(i)for(var o in i)void 0!==i[o]&&(r[o]=i[o]);if(n)for(var o in n)void 0!==n[o]&&(r[o]=n[o]);return r.hint.resolve&&(r.hint=r.hint.resolve(t,e)),r}(this,this.getCursor("start"),n);var i=this.listSelections();if(!(i.length>1)){if(this.somethingSelected()){if(!n.hint.supportsSelection)return;for(var r=0;r<i.length;r++)if(i[r].head.line!=i[r].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var o=this.state.completionActive=new e(this,n);o.options.hint&&(t.signal(this,"startCompletion",this),o.update(!0))}})),t.defineExtension("closeHint",(function(){this.state.completionActive&&this.state.completionActive.close()}));var n=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},i=window.cancelAnimationFrame||clearTimeout;function r(t){return"string"==typeof t?t:t.text}function o(t,e){for(;e&&e!=t;){if("LI"===e.nodeName.toUpperCase()&&e.parentNode==t)return e;e=e.parentNode}}function s(e,n){this.completion=e,this.data=n,this.picked=!1;var i=this,s=e.cm,l=s.getInputField().ownerDocument,a=l.defaultView||l.parentWindow,c=this.hints=l.createElement("ul"),u=e.cm.options.theme;c.className="CodeMirror-hints "+u,this.selectedHint=n.selectedHint||0;for(var h=n.list,d=0;d<h.length;++d){var p=c.appendChild(l.createElement("li")),f=h[d],m="CodeMirror-hint"+(d!=this.selectedHint?"":" CodeMirror-hint-active");null!=f.className&&(m=f.className+" "+m),p.className=m,f.render?f.render(p,n,f):p.appendChild(l.createTextNode(f.displayText||r(f))),p.hintId=d}var g=e.options.container||l.body,v=s.cursorCoords(e.options.alignWithWord?n.from:null),y=v.left,b=v.bottom,w=!0,x=0,k=0;if(g!==l.body){var C=-1!==["absolute","relative","fixed"].indexOf(a.getComputedStyle(g).position)?g:g.offsetParent,A=C.getBoundingClientRect(),O=l.body.getBoundingClientRect();x=A.left-O.left-C.scrollLeft,k=A.top-O.top-C.scrollTop}c.style.left=y-x+"px",c.style.top=b-k+"px";var H=a.innerWidth||Math.max(l.body.offsetWidth,l.documentElement.offsetWidth),M=a.innerHeight||Math.max(l.body.offsetHeight,l.documentElement.offsetHeight);g.appendChild(c);var P=c.getBoundingClientRect(),T=P.bottom-M,j=c.scrollHeight>c.clientHeight+1,S=s.getScrollInfo();if(T>0){var L=P.bottom-P.top;if(v.top-(v.bottom-P.top)-L>0)c.style.top=(b=v.top-L-k)+"px",w=!1;else if(L>M){c.style.height=M-5+"px",c.style.top=(b=v.bottom-P.top-k)+"px";var F=s.getCursor();n.from.ch!=F.ch&&(v=s.cursorCoords(F),c.style.left=(y=v.left-x)+"px",P=c.getBoundingClientRect())}}var I,N=P.right-H;if(N>0&&(P.right-P.left>H&&(c.style.width=H-5+"px",N-=P.right-P.left-H),c.style.left=(y=v.left-N-x)+"px"),j)for(var z=c.firstChild;z;z=z.nextSibling)z.style.paddingRight=s.display.nativeBarWidth+"px";return s.addKeyMap(this.keyMap=function(t,e){var n={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(1-e.menuSize(),!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close};/Mac/.test(navigator.platform)&&(n["Ctrl-P"]=function(){e.moveFocus(-1)},n["Ctrl-N"]=function(){e.moveFocus(1)});var i=t.options.customKeys,r=i?{}:n;function o(t,i){var o;o="string"!=typeof i?function(t){return i(t,e)}:n.hasOwnProperty(i)?n[i]:i,r[t]=o}if(i)for(var s in i)i.hasOwnProperty(s)&&o(s,i[s]);var l=t.options.extraKeys;if(l)for(var s in l)l.hasOwnProperty(s)&&o(s,l[s]);return r}(e,{moveFocus:function(t,e){i.changeActive(i.selectedHint+t,e)},setFocus:function(t){i.changeActive(t)},menuSize:function(){return i.screenAmount()},length:h.length,close:function(){e.close()},pick:function(){i.pick()},data:n})),e.options.closeOnUnfocus&&(s.on("blur",this.onBlur=function(){I=setTimeout((function(){e.close()}),100)}),s.on("focus",this.onFocus=function(){clearTimeout(I)})),s.on("scroll",this.onScroll=function(){var t=s.getScrollInfo(),n=s.getWrapperElement().getBoundingClientRect(),i=b+S.top-t.top,r=i-(a.pageYOffset||(l.documentElement||l.body).scrollTop);if(w||(r+=c.offsetHeight),r<=n.top||r>=n.bottom)return e.close();c.style.top=i+"px",c.style.left=y+S.left-t.left+"px"}),t.on(c,"dblclick",(function(t){var e=o(c,t.target||t.srcElement);e&&null!=e.hintId&&(i.changeActive(e.hintId),i.pick())})),t.on(c,"click",(function(t){var n=o(c,t.target||t.srcElement);n&&null!=n.hintId&&(i.changeActive(n.hintId),e.options.completeOnSingleClick&&i.pick())})),t.on(c,"mousedown",(function(){setTimeout((function(){s.focus()}),20)})),this.scrollToActive(),t.signal(n,"select",h[this.selectedHint],c.childNodes[this.selectedHint]),!0}function l(t,e,n,i){if(t.async)t(e,i,n);else{var r=t(e,n);r&&r.then?r.then(i):i(r)}}e.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(e,n){var i=e.list[n];i.hint?i.hint(this.cm,e,i):this.cm.replaceRange(r(i),i.from||e.from,i.to||e.to,"complete"),t.signal(e,"pick",i),this.close()},cursorActivity:function(){this.debounce&&(i(this.debounce),this.debounce=0);var t=this.cm.getCursor(),e=this.cm.getLine(t.line);if(t.line!=this.startPos.line||e.length-t.ch!=this.startLen-this.startPos.ch||t.ch<this.startPos.ch||this.cm.somethingSelected()||!t.ch||this.options.closeCharacters.test(e.charAt(t.ch-1)))this.close();else{var r=this;this.debounce=n((function(){r.update()})),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var e=this,n=++this.tick;l(this.options.hint,this.cm,this.options,(function(i){e.tick==n&&e.finishUpdate(i,t)}))}},finishUpdate:function(e,n){this.data&&t.signal(this.data,"update");var i=this.widget&&this.widget.picked||n&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=e,e&&e.list.length&&(i&&1==e.list.length?this.pick(e,0):(this.widget=new s(this,e),t.signal(e,"shown")))}},s.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm;this.completion.options.closeOnUnfocus&&(t.off("blur",this.onBlur),t.off("focus",this.onFocus)),t.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(e,n){if(e>=this.data.list.length?e=n?this.data.list.length-1:0:e<0&&(e=n?0:this.data.list.length-1),this.selectedHint!=e){var i=this.hints.childNodes[this.selectedHint];i&&(i.className=i.className.replace(" CodeMirror-hint-active","")),(i=this.hints.childNodes[this.selectedHint=e]).className+=" CodeMirror-hint-active",this.scrollToActive(),t.signal(this.data,"select",this.data.list[this.selectedHint],i)}},scrollToActive:function(){var t=this.hints.childNodes[this.selectedHint];t.offsetTop<this.hints.scrollTop?this.hints.scrollTop=t.offsetTop-3:t.offsetTop+t.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=t.offsetTop+t.offsetHeight-this.hints.clientHeight+3)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},t.registerHelper("hint","auto",{resolve:function(e,n){var i,r=e.getHelpers(n,"hint");if(r.length){var o=function(t,e,n){var i=function(t,e){if(!t.somethingSelected())return e;for(var n=[],i=0;i<e.length;i++)e[i].supportsSelection&&n.push(e[i]);return n}(t,r);!function r(o){if(o==i.length)return e(null);l(i[o],t,n,(function(t){t&&t.list.length>0?e(t):r(o+1)}))}(0)};return o.async=!0,o.supportsSelection=!0,o}return(i=e.getHelper(e.getCursor(),"hintWords"))?function(e){return t.hint.fromList(e,{words:i})}:t.hint.anyword?function(e,n){return t.hint.anyword(e,n)}:function(){}}}),t.registerHelper("hint","fromList",(function(e,n){var i,r=e.getCursor(),o=e.getTokenAt(r),s=t.Pos(r.line,o.start),l=r;o.start<r.ch&&/\w/.test(o.string.charAt(r.ch-o.start-1))?i=o.string.substr(0,r.ch-o.start):(i="",s=r);for(var a=[],c=0;c<n.words.length;c++){var u=n.words[c];u.slice(0,i.length)==i&&a.push(u)}if(a.length)return{list:a,from:s,to:l}})),t.commands.autocomplete=t.showHint;var a={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null};t.defineOption("hintOptions",null)}(n(241))},379:function(t,e,n){!function(t){"use strict";var e,n,i,r,o=";",s="AS",l=t.Pos,a=t.cmpPos;function c(t){return"[object Array]"==Object.prototype.toString.call(t)}function u(t){return"string"==typeof t?t:t.text}function h(t,e){return c(e)&&(e={columns:e}),e.text||(e.text=t),e}function d(t){return e[t.toUpperCase()]}function p(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function f(t,e){var n=t.length,i=u(e).substr(0,n);return t.toUpperCase()===i.toUpperCase()}function m(t,e,n,i){if(c(n))for(var r=0;r<n.length;r++)f(e,n[r])&&t.push(i(n[r]));else for(var o in n)if(n.hasOwnProperty(o)){var s=n[o];f(e,s=s&&!0!==s?s.displayText?{text:s.text,displayText:s.displayText}:s.text:o)&&t.push(i(s))}}function g(t){"."==t.charAt(0)&&(t=t.substr(1));for(var e=t.split(r+r),n=0;n<e.length;n++)e[n]=e[n].replace(new RegExp(r,"g"),"");return e.join(r)}function v(t){for(var e=u(t).split("."),n=0;n<e.length;n++)e[n]=r+e[n].replace(new RegExp(r,"g"),r+r)+r;var i=e.join(".");return"string"==typeof t?i:((t=p(t)).text=i,t)}function y(t,e){for(var n=t.split(/\s+/),i=0;i<n.length;i++)n[i]&&e(n[i].replace(/[,;]/g,""))}function b(t,e){for(var n=e.doc,i=n.getValue(),r=t.toUpperCase(),c="",u="",h=[],p={start:l(0,0),end:l(e.lastLine(),e.getLineHandle(e.lastLine()).length)},f=i.indexOf(o);-1!=f;)h.push(n.posFromIndex(f)),f=i.indexOf(o,f+1);h.unshift(l(0,0)),h.push(l(e.lastLine(),e.getLineHandle(e.lastLine()).text.length));for(var m=null,g=e.getCursor(),v=0;v<h.length;v++){if((null==m||a(g,m)>0)&&a(g,h[v])<=0){p={start:m,end:h[v]};break}m=h[v]}if(p.start){var b=n.getRange(p.start,p.end,!1);for(v=0;v<b.length&&(y(b[v],(function(t){var e=t.toUpperCase();e===r&&d(c)&&(u=c),e!==s&&(c=t)})),!u);v++);}return u}t.registerHelper("hint","sql",(function(o,s){e=function(t){var e={};if(c(t))for(var n=t.length-1;n>=0;n--){var i=t[n];e[u(i).toUpperCase()]=h(u(i),i)}else if(t)for(var r in t)e[r.toUpperCase()]=h(r,t[r]);return e}(s&&s.tables);var a=s&&s.defaultTable,f=s&&s.disableKeywords;n=a&&d(a),i=function(e){var n=e.doc.modeOption;return"sql"===n&&(n="text/x-sql"),t.resolveMode(n).keywords}(o),r=function(e){var n=e.doc.modeOption;return"sql"===n&&(n="text/x-sql"),t.resolveMode(n).identifierQuote||"`"}(o),a&&!n&&(n=b(a,o)),(n=n||[]).columns&&(n=n.columns);var y,w,x,k=o.getCursor(),C=[],A=o.getTokenAt(k);if(A.end>k.ch&&(A.end=k.ch,A.string=A.string.slice(0,k.ch-A.start)),A.string.match(/^[.`"\w@]\w*$/)?(x=A.string,y=A.start,w=A.end):(y=w=k.ch,x=""),"."==x.charAt(0)||x.charAt(0)==r)y=function(t,i,o,s){for(var a=!1,c=[],u=i.start,h=!0;h;)h="."==i.string.charAt(0),a=a||i.string.charAt(0)==r,u=i.start,c.unshift(g(i.string)),"."==(i=s.getTokenAt(l(t.line,i.start))).string&&(h=!0,i=s.getTokenAt(l(t.line,i.start)));var f=c.join(".");m(o,f,e,(function(t){return a?v(t):t})),m(o,f,n,(function(t){return a?v(t):t})),f=c.pop();var y=c.join("."),w=!1,x=y;if(!d(y)){var k=y;(y=b(y,s))!==k&&(w=!0)}var C=d(y);return C&&C.columns&&(C=C.columns),C&&m(o,f,C,(function(t){var e=y;return 1==w&&(e=x),"string"==typeof t?t=e+"."+t:(t=p(t)).text=e+"."+t.text,a?v(t):t})),u}(k,A,C,o);else{var O=function(t,e){return"object"==typeof t?t.className=e:t={text:t,className:e},t};m(C,x,n,(function(t){return O(t,"CodeMirror-hint-table CodeMirror-hint-default-table")})),m(C,x,e,(function(t){return O(t,"CodeMirror-hint-table")})),f||m(C,x,i,(function(t){return O(t.toUpperCase(),"CodeMirror-hint-keyword")}))}return{list:C,from:l(k.line,y),to:l(k.line,w)}}))}(n(241),n(261))},457:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,".CodeMirror-hints {\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n  list-style: none;\n  \n  margin: 0;\n  padding: 2px;\n\n  -webkit-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  -moz-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  border-radius: 3px;\n  border: 1px solid silver;\n\n  background: white;\n  font-size: 90%;\n  font-family: BodyFont;\n\n  max-height: 20em;\n  overflow-y: auto;\n}\n\n.CodeMirror-hint {\n  margin: 0;\n  padding: 0 3px;\n  font-size:13px;\n  border-radius: 2px;\n  white-space: pre;\n  color: gray;\n  cursor: pointer;\n}\n\nli.CodeMirror-hint-active {\n  background: #08f;\n  color: white;\n}\n",""])}}]);