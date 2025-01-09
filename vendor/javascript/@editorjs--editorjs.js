// @editorjs/editorjs@2.30.7 downloaded from https://ga.jspm.io/npm:@editorjs/editorjs@2.30.7/dist/editorjs.mjs

(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")),document.head.appendChild(n)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"&&self;function Fe(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function ze(){}Object.assign(ze,{default:ze,register:ze,revert:function(){},__esModule:!0});Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(n){const h=(this.document||this.ownerDocument).querySelectorAll(n);let p=h.length;for(;--p>=0&&h.item(p)!==this;);return p>-1});Element.prototype.closest||(Element.prototype.closest=function(n){let h=this;if(!document.documentElement.contains(h))return null;do{if(h.matches(n))return h;h=h.parentElement||h.parentNode}while(h!==null);return null});Element.prototype.prepend||(Element.prototype.prepend=function(n){const h=document.createDocumentFragment();Array.isArray(n)||(n=[n]),n.forEach((n=>{const p=n instanceof Node;h.appendChild(p?n:document.createTextNode(n))})),this.insertBefore(h,this.firstChild)});Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(n){n=arguments.length===0||!!n;const h=this.parentNode,p=window.getComputedStyle(h,null),g=parseInt(p.getPropertyValue("border-top-width")),m=parseInt(p.getPropertyValue("border-left-width")),v=this.offsetTop-h.offsetTop<h.scrollTop,x=this.offsetTop-h.offsetTop+this.clientHeight-g>h.scrollTop+h.clientHeight,w=this.offsetLeft-h.offsetLeft<h.scrollLeft,E=this.offsetLeft-h.offsetLeft+this.clientWidth-m>h.scrollLeft+h.clientWidth,B=v&&!x;(v||x)&&n&&(h.scrollTop=this.offsetTop-h.offsetTop-h.clientHeight/2-g+this.clientHeight/2),(w||E)&&n&&(h.scrollLeft=this.offsetLeft-h.offsetLeft-h.clientWidth/2-m+this.clientWidth/2),(v||x||w||E)&&!n&&this.scrollIntoView(B)});window.requestIdleCallback=window.requestIdleCallback||function(n){const h=Date.now();return setTimeout((function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-h))}})}),1)};window.cancelIdleCallback=window.cancelIdleCallback||function(n){clearTimeout(n)};let vo=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce(((n,h)=>(h&=63,n+=h<36?h.toString(36):h<62?(h-26).toString(36).toUpperCase():h>62?"-":"_",n)),"");var n=(n=>(n.VERBOSE="VERBOSE",n.INFO="INFO",n.WARN="WARN",n.ERROR="ERROR",n))(n||{});const h={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91,SLASH:191},p={LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4};function Be(n,h,p="log",g,m="color: inherit"){if(!("console"in window)||!window.console[p])return;const v=["info","log","warn","error"].includes(p),x=[];switch(Be.logLevel){case"ERROR":if(p!=="error")return;break;case"WARN":if(!["error","warn"].includes(p))return;break;case"INFO":if(!v||n)return;break}g&&x.push(g);const w="Editor.js 2.30.7",E="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";n&&(v?(x.unshift(E,m),h=`%c${w}%c ${h}`):h=`( ${w} )${h}`);try{v?g?console[p](`${h} %o`,...x):console[p](h,...x):console[p](h)}catch{}}Be.logLevel="VERBOSE";function xo(n){Be.logLevel=n}const g=Be.bind(window,!1),m=Be.bind(window,!0);function re(n){return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function O(n){return re(n)==="function"||re(n)==="asyncfunction"}function R(n){return re(n)==="object"}function Q(n){return re(n)==="string"}function yo(n){return re(n)==="boolean"}function bt(n){return re(n)==="number"}function kt(n){return re(n)==="undefined"}function V(n){return!n||Object.keys(n).length===0&&n.constructor===Object}function Mt(n){return n>47&&n<58||n===32||n===13||n===229||n>64&&n<91||n>95&&n<112||n>185&&n<193||n>218&&n<223}async function Eo(n,h=(()=>{}),p=(()=>{})){async function o(n,h,p){try{await n.function(n.data),await h(kt(n.data)?{}:n.data)}catch{p(kt(n.data)?{}:n.data)}}return n.reduce((async(n,g)=>(await n,o(g,h,p))),Promise.resolve())}function At(n){return Array.prototype.slice.call(n)}function Oe(n,h){return function(){const p=this,g=arguments;window.setTimeout((()=>n.apply(p,g)),h)}}function Bo(n){return n.name.split(".").pop()}function To(n){return/^[-\w]+\/([-+\w]+|\*)$/.test(n)}function vt(n,h,p){let g;return(...m)=>{const v=this,r=()=>{g=null,p||n.apply(v,m)},x=p&&!g;window.clearTimeout(g),g=window.setTimeout(r,h),x&&n.apply(v,m)}}function Ve(n,h,p=void 0){let g,m,v,x=null,w=0;p||(p={});const a=function(){w=p.leading===!1?0:Date.now(),x=null,v=n.apply(g,m),x||(g=m=null)};return function(){const E=Date.now();!w&&p.leading===!1&&(w=E);const B=h-(E-w);return g=this,m=arguments,B<=0||B>h?(x&&(clearTimeout(x),x=null),w=E,v=n.apply(g,m),x||(g=m=null)):!x&&p.trailing!==!1&&(x=setTimeout(a,B)),v}}function Co(){const n={win:!1,mac:!1,x11:!1,linux:!1},h=Object.keys(n).find((n=>window.navigator.appVersion.toLowerCase().indexOf(n)!==-1));return h&&(n[h]=!0),n}function Le(n){return n[0].toUpperCase()+n.slice(1)}function qe(n,...h){if(!h.length)return n;const p=h.shift();if(R(n)&&R(p))for(const h in p)R(p[h])?(n[h]||Object.assign(n,{[h]:{}}),qe(n[h],p[h])):Object.assign(n,{[h]:p[h]});return qe(n,...h)}function tt(n){const h=Co();return n=n.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi," + "),n=h.mac?n.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):n.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN"),n}function So(n){try{return new URL(n).href}catch{}return n.substring(0,2)==="//"?window.location.protocol+n:window.location.origin+n}function Io(){return vo(10)}function Mo(n){window.open(n,"_blank")}function Ao(n=""){return`${n}${Math.floor(Math.random()*1e8).toString(16)}`}function Ze(n,h,p){const g=`«${h}» is deprecated and will be removed in the next major release. Please use the «${p}» instead.`;n&&m(g,"warn")}function ue(n,h,p){const g=p.value?"value":"get",m=p[g],v=`#${h}Cache`;if(p[g]=function(...n){return this[v]===void 0&&(this[v]=m.apply(this,...n)),this[v]},g==="get"&&p.set){const h=p.set;p.set=function(p){delete n[v],h.apply(this,p)}}return p}const v=650;function pe(){return window.matchMedia(`(max-width: ${v}px)`).matches}const x=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1);function Oo(n,h){const p=Array.isArray(n)||R(n),g=Array.isArray(h)||R(h);return p||g?JSON.stringify(n)===JSON.stringify(h):n===h}class d{
/**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
static isSingleTag(n){return n.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(n.tagName)}
/**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */static isLineBreakTag(n){return n&&n.tagName&&["BR","WBR"].includes(n.tagName)}
/**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */static make(n,h=null,p={}){const g=document.createElement(n);if(Array.isArray(h)){const n=h.filter((n=>n!==void 0));g.classList.add(...n)}else h&&g.classList.add(h);for(const n in p)Object.prototype.hasOwnProperty.call(p,n)&&(g[n]=p[n]);return g}
/**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */static text(n){return document.createTextNode(n)}
/**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */static append(n,h){Array.isArray(h)?h.forEach((h=>n.appendChild(h))):n.appendChild(h)}
/**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */static prepend(n,h){Array.isArray(h)?(h=h.reverse(),h.forEach((h=>n.prepend(h)))):n.prepend(h)}
/**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */static swap(n,h){const p=document.createElement("div"),g=n.parentNode;g.insertBefore(p,n),g.insertBefore(n,h),g.insertBefore(h,p),g.removeChild(p)
/**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */}static find(n=document,h){return n.querySelector(h)}
/**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */static get(n){return document.getElementById(n)}
/**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */static findAll(n=document,h){return n.querySelectorAll(h)}static get allInputsSelector(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((n=>`input[type="${n}"]`)).join(", ")}
/**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */static findAllInputs(n){return At(n.querySelectorAll(d.allInputsSelector)).reduce(((n,h)=>d.isNativeInput(h)||d.containsOnlyInlineElements(h)?[...n,h]:[...n,...d.getDeepestBlockElements(h)]),[])}
/**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns - it can be text Node or Element Node, so that caret will able to work with it
   *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
   */static getDeepestNode(n,h=!1){const p=h?"lastChild":"firstChild",g=h?"previousSibling":"nextSibling";if(n&&n.nodeType===Node.ELEMENT_NODE&&n[p]){let m=n[p];if(d.isSingleTag(m)&&!d.isNativeInput(m)&&!d.isLineBreakTag(m))if(m[g])m=m[g];else{if(!m.parentNode[g])return m.parentNode;m=m.parentNode[g]}return this.getDeepestNode(m,h)}return n}
/**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
static isElement(n){return!bt(n)&&(n&&n.nodeType&&n.nodeType===Node.ELEMENT_NODE)}
/**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
static isFragment(n){return!bt(n)&&(n&&n.nodeType&&n.nodeType===Node.DOCUMENT_FRAGMENT_NODE)}
/**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */static isContentEditable(n){return n.contentEditable==="true"}
/**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
static isNativeInput(n){const h=["INPUT","TEXTAREA"];return!(!n||!n.tagName)&&h.includes(n.tagName)}
/**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */static canSetCaret(n){let h=!0;if(d.isNativeInput(n))switch(n.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":h=!1;break}else h=d.isContentEditable(n);return h}
/**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */static isNodeEmpty(n,h){let p;return!(this.isSingleTag(n)&&!this.isLineBreakTag(n))&&(p=this.isElement(n)&&this.isNativeInput(n)?n.value:n.textContent.replace("​",""),h&&(p=p.replace(new RegExp(h,"g"),"")),p.trim().length===0
/**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */)}static isLeaf(n){return!!n&&n.childNodes.length===0}
/**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */static isEmpty(n,h){const p=[n];for(;p.length>0;)if(n=p.shift(),!!n){if(this.isLeaf(n)&&!this.isNodeEmpty(n,h))return!1;n.childNodes&&p.push(...Array.from(n.childNodes))}return!0}
/**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */static isHTMLString(n){const h=d.make("div");return h.innerHTML=n,h.childElementCount>0
/**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */}static getContentLength(n){return d.isNativeInput(n)?n.value.length:n.nodeType===Node.TEXT_NODE?n.length:n.textContent.length}
/**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */static get blockElements(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tbody","thead","tr","tfoot","ul","video"]}
/**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */static containsOnlyInlineElements(n){let h;Q(n)?(h=document.createElement("div"),h.innerHTML=n):h=n;const o=n=>!d.blockElements.includes(n.tagName.toLowerCase())&&Array.from(n.children).every(o);return Array.from(h.children).every(o)}
/**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */static getDeepestBlockElements(n){return d.containsOnlyInlineElements(n)?[n]:Array.from(n.children).reduce(((n,h)=>[...n,...d.getDeepestBlockElements(h)]),[])}
/**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */static getHolder(n){return Q(n)?document.getElementById(n):n}
/**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */static isAnchor(n){return n.tagName.toLowerCase()==="a"}
/**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */static offset(n){const h=n.getBoundingClientRect(),p=window.pageXOffset||document.documentElement.scrollLeft,g=window.pageYOffset||document.documentElement.scrollTop,m=h.top+g,v=h.left+p;return{top:m,left:v,bottom:m+h.height,right:v+h.width}}}function Lo(n){return!/[^\t\n\r ]/.test(n)}function _o(n){const h=window.getComputedStyle(n),p=parseFloat(h.fontSize),g=parseFloat(h.lineHeight)||p*1.2,m=parseFloat(h.paddingTop),v=parseFloat(h.borderTopWidth),x=parseFloat(h.marginTop),w=p*.8,E=(g-p)/2;return x+v+m+E+w}function Lt(n){n.dataset.empty=d.isEmpty(n)?"true":"false"}const w={blockTunes:{toggler:{"Click to tune":"","or drag to move":""}},inlineToolbar:{converter:{"Convert to":""}},toolbar:{toolbox:{Add:""}},popover:{Filter:"","Nothing found":"","Convert to":""}},E={Text:"",Link:"",Bold:"",Italic:""},B={link:{"Add a link":""},stub:{"The block can not be displayed correctly.":""}},T={delete:{Delete:"","Click to delete":""},moveUp:{"Move up":""},moveDown:{"Move down":""}},I={ui:w,toolNames:E,tools:B,blockTunes:T},M=class ae{
/**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
static ui(n,h){return ae._t(n,h)}
/**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */static t(n,h){return ae._t(n,h)}
/**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */static setDictionary(n){ae.currentDictionary=n}
/**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */static _t(n,h){const p=ae.getNamespace(n);return p&&p[h]?p[h]:h}
/**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */static getNamespace(n){return n.split(".").reduce(((n,h)=>n&&Object.keys(n).length?n[h]:{}),ae.currentDictionary)}};M.currentDictionary=I;let A=M;class Pt extends Error{}class Te{constructor(){this.subscribers={}}
/**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */on(n,h){n in this.subscribers||(this.subscribers[n]=[]),this.subscribers[n].push(h)
/**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */}once(n,h){n in this.subscribers||(this.subscribers[n]=[]);const o=p=>{const g=h(p),m=this.subscribers[n].indexOf(o);return m!==-1&&this.subscribers[n].splice(m,1),g};this.subscribers[n].push(o)}
/**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */emit(n,h){V(this.subscribers)||!this.subscribers[n]||this.subscribers[n].reduce(((n,h)=>{const p=h(n);return p!==void 0?p:n}),h)}
/**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */off(n,h){if(this.subscribers[n]!==void 0){for(let p=0;p<this.subscribers[n].length;p++)if(this.subscribers[n][p]===h){delete this.subscribers[n][p];break}}else console.warn(`EventDispatcher .off(): there is no subscribers for event "${n.toString()}". Probably, .off() called before .on()`)}destroy(){this.subscribers={}}}function G(n){Object.setPrototypeOf(this,{
/**
     * Block id
     *
     * @returns {string}
     */
get id(){return n.id},
/**
     * Tool name
     *
     * @returns {string}
     */
get name(){return n.name},
/**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
get config(){return n.config},
/**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
get holder(){return n.holder},
/**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
get isEmpty(){return n.isEmpty},
/**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
get selected(){return n.selected},
/**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
set stretched(h){n.stretched=h},
/**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
get stretched(){return n.stretched},get focusable(){return n.focusable},
/**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
call(h,p){return n.call(h,p)},
/**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
save(){return n.save()},
/**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
validate(h){return n.validate(h)},dispatchChange(){n.dispatchChange()},getActiveToolboxEntry(){return n.getActiveToolboxEntry()}})}class Ce{constructor(){this.allListeners=[]}
/**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */on(n,h,p,g=!1){const m=Ao("l"),v={id:m,element:n,eventType:h,handler:p,options:g};if(!this.findOne(n,h,p))return this.allListeners.push(v),n.addEventListener(h,p,g),m
/**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */}off(n,h,p,g){const m=this.findAll(n,h,p);m.forEach(((n,h)=>{const p=this.allListeners.indexOf(m[h]);p>-1&&(this.allListeners.splice(p,1),n.element.removeEventListener(n.eventType,n.handler,n.options))}))}
/**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */offById(n){const h=this.findById(n);h&&h.element.removeEventListener(h.eventType,h.handler,h.options)}
/**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */findOne(n,h,p){const g=this.findAll(n,h,p);return g.length>0?g[0]:null}
/**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */findAll(n,h,p){let g;const m=n?this.findByEventTarget(n):[];return g=n&&h&&p?m.filter((n=>n.eventType===h&&n.handler===p)):n&&h?m.filter((n=>n.eventType===h)):m,g}removeAll(){this.allListeners.map((n=>{n.element.removeEventListener(n.eventType,n.handler,n.options)})),this.allListeners=[]}destroy(){this.removeAll()}
/**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */findByEventTarget(n){return this.allListeners.filter((h=>{if(h.element===n)return h}))}
/**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */findByType(n){return this.allListeners.filter((h=>{if(h.eventType===n)return h}))}
/**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */findByHandler(n){return this.allListeners.filter((h=>{if(h.handler===n)return h}))}
/**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */findById(n){return this.allListeners.find((h=>h.id===n))}}class y{
/**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
constructor({config:n,eventsDispatcher:h}){if(this.nodes={},this.listeners=new Ce,this.readOnlyMutableListeners={
/**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
on:(n,h,p,g=!1)=>{this.mutableListenerIds.push(this.listeners.on(n,h,p,g))},clearAll:()=>{for(const n of this.mutableListenerIds)this.listeners.offById(n);this.mutableListenerIds=[]}},this.mutableListenerIds=[],new.target===y)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=n,this.eventsDispatcher=h
/**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */}set state(n){this.Editor=n}removeAllNodes(){for(const n in this.nodes){const h=this.nodes[n];h instanceof HTMLElement&&h.remove()}}get isRtl(){return this.config.i18n.direction==="rtl"}}class b{constructor(){this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"
/**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */}static get CSS(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}
/**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */static get anchorNode(){const n=window.getSelection();return n?n.anchorNode:null}
/**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */static get anchorElement(){const n=window.getSelection();if(!n)return null;const h=n.anchorNode;return h?d.isElement(h)?h:h.parentElement:null}
/**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */static get anchorOffset(){const n=window.getSelection();return n?n.anchorOffset:null}
/**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */static get isCollapsed(){const n=window.getSelection();return n?n.isCollapsed:null}
/**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */static get isAtEditor(){return this.isSelectionAtEditor(b.get())}
/**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */static isSelectionAtEditor(n){if(!n)return!1;let h=n.anchorNode||n.focusNode;h&&h.nodeType===Node.TEXT_NODE&&(h=h.parentNode);let p=null;return h&&h instanceof Element&&(p=h.closest(`.${b.CSS.editorZone}`)),!!p&&p.nodeType===Node.ELEMENT_NODE
/**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */}static isRangeAtEditor(n){if(!n)return;let h=n.startContainer;h&&h.nodeType===Node.TEXT_NODE&&(h=h.parentNode);let p=null;return h&&h instanceof Element&&(p=h.closest(`.${b.CSS.editorZone}`)),!!p&&p.nodeType===Node.ELEMENT_NODE}static get isSelectionExists(){return!!b.get().anchorNode}
/**
   * Return first range
   *
   * @returns {Range|null}
   */static get range(){return this.getRangeFromSelection(this.get())}
/**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */static getRangeFromSelection(n){return n&&n.rangeCount?n.getRangeAt(0):null}
/**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */static get rect(){let n,h=document.selection,p={x:0,y:0,width:0,height:0};if(h&&h.type!=="Control")return h,n=h.createRange(),p.x=n.boundingLeft,p.y=n.boundingTop,p.width=n.boundingWidth,p.height=n.boundingHeight,p;if(!window.getSelection)return g("Method window.getSelection is not supported","warn"),p;if(h=window.getSelection(),h.rangeCount===null||isNaN(h.rangeCount))return g("Method SelectionUtils.rangeCount is not supported","warn"),p;if(h.rangeCount===0)return p;if(n=h.getRangeAt(0).cloneRange(),n.getBoundingClientRect&&(p=n.getBoundingClientRect()),p.x===0&&p.y===0){const h=document.createElement("span");if(h.getBoundingClientRect){h.appendChild(document.createTextNode("​")),n.insertNode(h),p=h.getBoundingClientRect();const g=h.parentNode;g.removeChild(h),g.normalize()}}return p}
/**
   * Returns selected text as String
   *
   * @returns {string}
   */static get text(){return window.getSelection?window.getSelection().toString():""}
/**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */static get(){return window.getSelection()}
/**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */static setCursor(n,h=0){const p=document.createRange(),g=window.getSelection();return d.isNativeInput(n)?d.canSetCaret(n)?(n.focus(),n.selectionStart=n.selectionEnd=h,n.getBoundingClientRect()):void 0:(p.setStart(n,h),p.setEnd(n,h),g.removeAllRanges(),g.addRange(p),p.getBoundingClientRect()
/**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */)}static isRangeInsideContainer(n){const h=b.range;return h!==null&&n.contains(h.startContainer)}static addFakeCursor(){const n=b.range;if(n===null)return;const h=d.make("span","codex-editor__fake-cursor");h.dataset.mutationFree="true",n.collapse(),n.insertNode(h)
/**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */}static isFakeCursorInsideContainer(n){return d.find(n,".codex-editor__fake-cursor")!==null}
/**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */static removeFakeCursor(n=document.body){const h=d.find(n,".codex-editor__fake-cursor");h&&h.remove()}removeFakeBackground(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}setFakeBackground(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}save(){this.savedSelectionRange=b.range}restore(){if(!this.savedSelectionRange)return;const n=window.getSelection();n.removeAllRanges(),n.addRange(this.savedSelectionRange)}clearSaved(){this.savedSelectionRange=null}collapseToEnd(){const n=window.getSelection(),h=document.createRange();h.selectNodeContents(n.focusNode),h.collapse(!1),n.removeAllRanges(),n.addRange(h)
/**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */}findParentTag(n,h,p=10){const g=window.getSelection();let m=null;return g&&g.anchorNode&&g.focusNode?([g.anchorNode,g.focusNode].forEach((g=>{let v=p;for(;v>0&&g.parentNode&&!(g.tagName===n&&(m=g,h&&g.classList&&!g.classList.contains(h)&&(m=null),m));)g=g.parentNode,v--})),m
/**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */):null}expandToTag(n){const h=window.getSelection();h.removeAllRanges();const p=document.createRange();p.selectNodeContents(n),h.addRange(p)}}function Fo(n,h){const{type:p,target:g,addedNodes:m,removedNodes:v}=n;return(n.type!=="attributes"||n.attributeName!=="data-empty")&&!!(h.contains(g)||p==="childList"&&(Array.from(m).some((n=>n===h))||Array.from(v).some((n=>n===h))))}const L="redactor dom changed",N="block changed",P="fake cursor is about to be toggled",H="fake cursor have been set",z="editor mobile layout toggled";function Qe(n,h){if(!n.conversionConfig)return!1;const p=n.conversionConfig[h];return O(p)||Q(p)}function _e(n,h){return Qe(n.tool,h)}function Ht(n,h){return Object.entries(n).some((([n,p])=>h[n]&&Oo(h[n],p)))}async function zt(n,h){const p=(await n.save()).data,g=h.find((h=>h.name===n.name));return g===void 0||Qe(g,"export")?h.reduce(((h,g)=>{if(!Qe(g,"import")||g.toolbox===void 0)return h;const m=g.toolbox.filter((h=>{if(V(h)||h.icon===void 0)return!1;if(h.data!==void 0){if(Ht(h.data,p))return!1}else if(g.name===n.name)return!1;return!0}));return h.push({...g,toolbox:m}),h}),[]):[]}function wt(n,h){return!!n.mergeable&&(n.name===h.name||_e(h,"export")&&_e(n,"import"))}function Ho(n,h){const p=h==null?void 0:h.export;return O(p)?p(n):Q(p)?n[p]:(p!==void 0&&g("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),"")}function xt(n,h){const p=h==null?void 0:h.import;return O(p)?p(n):Q(p)?{[p]:n}:(p!==void 0&&g("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),{})}var U=(n=>(n.Default="default",n.Separator="separator",n.Html="html",n))(U||{}),$=(n=>(n.APPEND_CALLBACK="appendCallback",n.RENDERED="rendered",n.MOVED="moved",n.UPDATED="updated",n.REMOVED="removed",n.ON_PASTE="onPaste",n))($||{});class D extends Te{
/**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
constructor({id:n=Io(),data:h,tool:p,readOnly:g,tunesData:m},v){super(),this.cachedInputs=[],this.toolRenderedElement=null,this.tunesInstances=new Map,this.defaultTunesInstances=new Map,this.unavailableTunesData={},this.inputIndex=0,this.editorEventBus=null,this.handleFocus=()=>{this.dropInputsCache(),this.updateCurrentInput()},this.didMutated=(n=void 0)=>{const h=n===void 0,p=n instanceof InputEvent;!h&&!p&&this.detectToolRootChange(n);let g;g=!(!h&&!p)||!(n.length>0&&n.every((n=>{const{addedNodes:h,removedNodes:p,target:g}=n;return[...Array.from(h),...Array.from(p),g].some((n=>(d.isElement(n)||(n=n.parentElement),n&&n.closest('[data-mutation-free="true"]')!==null)))}))),g&&(this.dropInputsCache(),this.updateCurrentInput(),this.toggleInputsEmptyMark(),this.call("updated"),this.emit("didMutated",this))},this.name=p.name,this.id=n,this.settings=p.settings,this.config=p.settings.config||{},this.editorEventBus=v||null,this.blockAPI=new G(this),this.tool=p,this.toolInstance=p.create(h,this.blockAPI,g),this.tunes=p.tunes,this.composeTunes(m),this.holder=this.compose(),window.requestIdleCallback((()=>{this.watchBlockMutations(),this.addInputEvents(),this.toggleInputsEmptyMark()}))
/**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */}static get CSS(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}get inputs(){if(this.cachedInputs.length!==0)return this.cachedInputs;const n=d.findAllInputs(this.holder);return this.inputIndex>n.length-1&&(this.inputIndex=n.length-1),this.cachedInputs=n,n}get currentInput(){return this.inputs[this.inputIndex]}
/**
   * Set input index to the passed element
   *
   * @param element - HTML Element to set as current input
   */set currentInput(n){const h=this.inputs.findIndex((h=>h===n||h.contains(n)));h!==-1&&(this.inputIndex=h)}get firstInput(){return this.inputs[0]}get lastInput(){const n=this.inputs;return n[n.length-1]}get nextInput(){return this.inputs[this.inputIndex+1]}get previousInput(){return this.inputs[this.inputIndex-1]}
/**
   * Get Block's JSON data
   *
   * @returns {object}
   */get data(){return this.save().then((n=>n&&!V(n.data)?n.data:{}))}
/**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */get sanitize(){return this.tool.sanitizeConfig}
/**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */get mergeable(){return O(this.toolInstance.merge)}get focusable(){return this.inputs.length!==0}
/**
   * Check block for emptiness
   *
   * @returns {boolean}
   */get isEmpty(){const n=d.isEmpty(this.pluginsContent,"/"),h=!this.hasMedia;return n&&h}
/**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */get hasMedia(){const n=["img","iframe","video","audio","source","input","textarea","twitterwidget"];return!!this.holder.querySelector(n.join(","))}
/**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */set selected(n){var h,p;this.holder.classList.toggle(D.CSS.selected,n);const g=n===!0&&b.isRangeInsideContainer(this.holder),m=n===!1&&b.isFakeCursorInsideContainer(this.holder);(g||m)&&((h=this.editorEventBus)==null||h.emit(P,{state:n}),g?b.addFakeCursor():b.removeFakeCursor(this.holder),(p=this.editorEventBus)==null||p.emit(H,{state:n})
/**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */)}get selected(){return this.holder.classList.contains(D.CSS.selected)}
/**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */set stretched(n){this.holder.classList.toggle(D.CSS.wrapperStretched,n)}
/**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */get stretched(){return this.holder.classList.contains(D.CSS.wrapperStretched)}
/**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */set dropTarget(n){this.holder.classList.toggle(D.CSS.dropTarget,n)}
/**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */get pluginsContent(){return this.toolRenderedElement}
/**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */call(n,h){if(O(this.toolInstance[n])){n==="appendCallback"&&g("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead","warn");try{this.toolInstance[n].call(this.toolInstance,h)}catch(h){g(`Error during '${n}' call: ${h.message}`,"error")}}}
/**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */async mergeWith(n){await this.toolInstance.merge(n)}
/**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */async save(){const n=await this.toolInstance.save(this.pluginsContent),h=this.unavailableTunesData;[...this.tunesInstances.entries(),...this.defaultTunesInstances.entries()].forEach((([n,p])=>{if(O(p.save))try{h[n]=p.save()}catch(n){g(`Tune ${p.constructor.name} save method throws an Error %o`,"warn",n)}}));const p=window.performance.now();let m;return Promise.resolve(n).then((n=>(m=window.performance.now(),{id:this.id,tool:this.name,data:n,tunes:h,time:m-p}))).catch((n=>{g(`Saving process for ${this.name} tool failed due to the ${n}`,"log","red")}))}
/**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */async validate(n){let h=!0;return this.toolInstance.validate instanceof Function&&(h=await this.toolInstance.validate(n)),h}getTunes(){const n=[],h=[],p=typeof this.toolInstance.renderSettings=="function"?this.toolInstance.renderSettings():[];return d.isElement(p)?n.push({type:U.Html,element:p}):Array.isArray(p)?n.push(...p):n.push(p),[...this.tunesInstances.values(),...this.defaultTunesInstances.values()].map((n=>n.render())).forEach((n=>{d.isElement(n)?h.push({type:U.Html,element:n}):Array.isArray(n)?h.push(...n):h.push(n)})),{toolTunes:n,commonTunes:h}}updateCurrentInput(){this.currentInput=d.isNativeInput(document.activeElement)||!b.anchorNode?document.activeElement:b.anchorNode}dispatchChange(){this.didMutated()}destroy(){this.unwatchBlockMutations(),this.removeInputEvents(),super.destroy(),O(this.toolInstance.destroy)&&this.toolInstance.destroy()}async getActiveToolboxEntry(){const n=this.tool.toolbox;if(n.length===1)return Promise.resolve(this.tool.toolbox[0]);const h=await this.data,p=n;return p==null?void 0:p.find((n=>Ht(n.data,h)))}async exportDataAsString(){const n=await this.data;return Ho(n,this.tool.conversionConfig)}
/**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */compose(){const n=d.make("div",D.CSS.wrapper),h=d.make("div",D.CSS.content),p=this.toolInstance.render();n.dataset.id=this.id,this.toolRenderedElement=p,h.appendChild(this.toolRenderedElement);let m=h;return[...this.tunesInstances.values(),...this.defaultTunesInstances.values()].forEach((n=>{if(O(n.wrap))try{m=n.wrap(m)}catch(h){g(`Tune ${n.constructor.name} wrap method throws an Error %o`,"warn",h)}})),n.appendChild(m),n
/**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */}composeTunes(n){Array.from(this.tunes.values()).forEach((h=>{(h.isInternal?this.defaultTunesInstances:this.tunesInstances).set(h.name,h.create(n[h.name],this.blockAPI))})),Object.entries(n).forEach((([n,h])=>{this.tunesInstances.has(n)||(this.unavailableTunesData[n]=h)}))}addInputEvents(){this.inputs.forEach((n=>{n.addEventListener("focus",this.handleFocus),d.isNativeInput(n)&&n.addEventListener("input",this.didMutated)}))}removeInputEvents(){this.inputs.forEach((n=>{n.removeEventListener("focus",this.handleFocus),d.isNativeInput(n)&&n.removeEventListener("input",this.didMutated)}))}watchBlockMutations(){var n;this.redactorDomChangedCallback=n=>{const{mutations:h}=n;h.some((n=>Fo(n,this.toolRenderedElement)))&&this.didMutated(h)},(n=this.editorEventBus)==null||n.on(L,this.redactorDomChangedCallback)}unwatchBlockMutations(){var n;(n=this.editorEventBus)==null||n.off(L,this.redactorDomChangedCallback)}
/**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */detectToolRootChange(n){n.forEach((n=>{if(Array.from(n.removedNodes).includes(this.toolRenderedElement)){const h=n.addedNodes[n.addedNodes.length-1];this.toolRenderedElement=h}}))}dropInputsCache(){this.cachedInputs=[]}toggleInputsEmptyMark(){this.inputs.forEach(Lt)}}class zo extends y{constructor(){super(...arguments),this.insert=(n=this.config.defaultBlock,h={},p={},g,m,v,x)=>{const w=this.Editor.BlockManager.insert({id:x,tool:n,data:h,index:g,needToFocus:m,replace:v});return new G(w)},this.composeBlockData=async n=>{const h=this.Editor.Tools.blockTools.get(n);return new D({tool:h,api:this.Editor.API,readOnly:!0,data:{},tunesData:{}}).data},this.update=async(n,h,p)=>{const{BlockManager:g}=this.Editor,m=g.getBlockById(n);if(m===void 0)throw new Error(`Block with id "${n}" not found`);const v=await g.update(m,h,p);return new G(v)},this.convert=async(n,h,p)=>{var g,m;const{BlockManager:v,Tools:x}=this.Editor,w=v.getBlockById(n);if(!w)throw new Error(`Block with id "${n}" not found`);const E=x.blockTools.get(w.name),B=x.blockTools.get(h);if(!B)throw new Error(`Block Tool with type "${h}" not found`);const T=((g=E==null?void 0:E.conversionConfig)==null?void 0:g.export)!==void 0,I=((m=B.conversionConfig)==null?void 0:m.import)!==void 0;if(T&&I){const n=await v.convert(w,h,p);return new G(n)}{const n=[!T&&Le(w.name),!I&&Le(h)].filter(Boolean).join(" and ");throw new Error(`Conversion from "${w.name}" to "${h}" is not possible. ${n} tool(s) should provide a "conversionConfig"`)}},this.insertMany=(n,h=this.Editor.BlockManager.blocks.length-1)=>{this.validateIndex(h);const p=n.map((({id:n,type:h,data:p})=>this.Editor.BlockManager.composeBlock({id:n,tool:h||this.config.defaultBlock,data:p})));return this.Editor.BlockManager.insertMany(p,h),p.map((n=>new G(n)))}
/**
   * Available methods
   *
   * @returns {Blocks}
   */}get methods(){return{clear:()=>this.clear(),render:n=>this.render(n),renderFromHTML:n=>this.renderFromHTML(n),delete:n=>this.delete(n),swap:(n,h)=>this.swap(n,h),move:(n,h)=>this.move(n,h),getBlockByIndex:n=>this.getBlockByIndex(n),getById:n=>this.getById(n),getCurrentBlockIndex:()=>this.getCurrentBlockIndex(),getBlockIndex:n=>this.getBlockIndex(n),getBlocksCount:()=>this.getBlocksCount(),getBlockByElement:n=>this.getBlockByElement(n),stretchBlock:(n,h=!0)=>this.stretchBlock(n,h),insertNewBlock:()=>this.insertNewBlock(),insert:this.insert,insertMany:this.insertMany,update:this.update,composeBlockData:this.composeBlockData,convert:this.convert}}
/**
   * Returns Blocks count
   *
   * @returns {number}
   */getBlocksCount(){return this.Editor.BlockManager.blocks.length}
/**
   * Returns current block index
   *
   * @returns {number}
   */getCurrentBlockIndex(){return this.Editor.BlockManager.currentBlockIndex}
/**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */getBlockIndex(n){const h=this.Editor.BlockManager.getBlockById(n);if(h)return this.Editor.BlockManager.getBlockIndex(h);m("There is no block with id `"+n+"`","warn")}
/**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */getBlockByIndex(n){const h=this.Editor.BlockManager.getBlockByIndex(n);if(h!==void 0)return new G(h);m("There is no block at index `"+n+"`","warn")}
/**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */getById(n){const h=this.Editor.BlockManager.getBlockById(n);return h===void 0?(m("There is no block with id `"+n+"`","warn"),null):new G(h)}
/**
   * Get Block API object by any child html element
   *
   * @param element - html element to get Block by
   */getBlockByElement(n){const h=this.Editor.BlockManager.getBlock(n);if(h!==void 0)return new G(h);m("There is no block corresponding to element `"+n+"`","warn")}
/**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */swap(n,h){g("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead","info"),this.Editor.BlockManager.swap(n,h)
/**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */}move(n,h){this.Editor.BlockManager.move(n,h)}
/**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */delete(n=this.Editor.BlockManager.currentBlockIndex){try{const h=this.Editor.BlockManager.getBlockByIndex(n);this.Editor.BlockManager.removeBlock(h)}catch(n){m(n,"warn");return}this.Editor.BlockManager.blocks.length===0&&this.Editor.BlockManager.insert(),this.Editor.BlockManager.currentBlock&&this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close()}async clear(){await this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close()
/**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */}async render(n){if(n===void 0||n.blocks===void 0)throw new Error("Incorrect data passed to the render() method");this.Editor.ModificationsObserver.disable(),await this.Editor.BlockManager.clear(),await this.Editor.Renderer.render(n.blocks),this.Editor.ModificationsObserver.enable()
/**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */}renderFromHTML(n){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(n,!0)
/**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */}stretchBlock(n,h=!0){Ze(!0,"blocks.stretchBlock()","BlockAPI");const p=this.Editor.BlockManager.getBlockByIndex(n);p&&(p.stretched=h)}
/**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */insertNewBlock(){g("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.","warn"),this.insert()
/**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */}validateIndex(n){if(typeof n!="number")throw new Error("Index should be a number");if(n<0)throw new Error("Index should be greater than or equal to 0");if(n===null)throw new Error("Index should be greater than or equal to 0")}}function Uo(n,h){return typeof n=="number"?h.BlockManager.getBlockByIndex(n):typeof n=="string"?h.BlockManager.getBlockById(n):h.BlockManager.getBlockById(n.id)}class jo extends y{constructor(){super(...arguments),this.setToFirstBlock=(n=this.Editor.Caret.positions.DEFAULT,h=0)=>!!this.Editor.BlockManager.firstBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock,n,h),!0),this.setToLastBlock=(n=this.Editor.Caret.positions.DEFAULT,h=0)=>!!this.Editor.BlockManager.lastBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock,n,h),!0),this.setToPreviousBlock=(n=this.Editor.Caret.positions.DEFAULT,h=0)=>!!this.Editor.BlockManager.previousBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock,n,h),!0),this.setToNextBlock=(n=this.Editor.Caret.positions.DEFAULT,h=0)=>!!this.Editor.BlockManager.nextBlock&&(this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock,n,h),!0),this.setToBlock=(n,h=this.Editor.Caret.positions.DEFAULT,p=0)=>{const g=Uo(n,this.Editor);return g!==void 0&&(this.Editor.Caret.setToBlock(g,h,p),!0)},this.focus=(n=!1)=>n?this.setToLastBlock(this.Editor.Caret.positions.END):this.setToFirstBlock(this.Editor.Caret.positions.START)
/**
   * Available methods
   *
   * @returns {Caret}
   */}get methods(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus}}}class $o extends y{
/**
   * Available methods
   *
   * @returns {Events}
   */
get methods(){return{emit:(n,h)=>this.emit(n,h),off:(n,h)=>this.off(n,h),on:(n,h)=>this.on(n,h)}}
/**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */on(n,h){this.eventsDispatcher.on(n,h)}
/**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */emit(n,h){this.eventsDispatcher.emit(n,h)}
/**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */off(n,h){this.eventsDispatcher.off(n,h)}}class ot extends y{
/**
   * Return namespace section for tool or block tune
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
static getNamespace(n,h){return h?`blockTunes.${n}`:`tools.${n}`}get methods(){return{t:()=>{m("I18n.t() method can be accessed only from Tools","warn")}}}
/**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */getMethodsForTool(n,h){return Object.assign(this.methods,{t:p=>A.t(ot.getNamespace(n,h),p)})}}class Yo extends y{get methods(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,tools:this.Editor.ToolsAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods,i18n:this.Editor.I18nAPI.methods,readOnly:this.Editor.ReadOnlyAPI.methods,ui:this.Editor.UiAPI.methods}}
/**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */getMethodsForTool(n,h){return Object.assign(this.methods,{i18n:this.Editor.I18nAPI.getMethodsForTool(n,h)})}}class Wo extends y{
/**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
get methods(){return{close:()=>this.close(),open:()=>this.open()}}open(){this.Editor.InlineToolbar.tryToShow()}close(){this.Editor.InlineToolbar.close()}}class Ko extends y{
/**
   * Available methods
   *
   * @returns {Listeners}
   */
get methods(){return{on:(n,h,p,g)=>this.on(n,h,p,g),off:(n,h,p,g)=>this.off(n,h,p,g),offById:n=>this.offById(n)}}
/**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */on(n,h,p,g){return this.listeners.on(n,h,p,g)}
/**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */off(n,h,p,g){this.listeners.off(n,h,p,g)}
/**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */offById(n){this.listeners.offById(n)}}var Y={exports:{}};(function(n,h){(function(h,p){n.exports=p()})(window,(function(){return function(n){var h={};function i(p){if(h[p])return h[p].exports;var g=h[p]={i:p,l:!1,exports:{}};return n[p].call(g.exports,g,g.exports,i),g.l=!0,g.exports}return i.m=n,i.c=h,i.d=function(n,h,p){i.o(n,h)||Object.defineProperty(n,h,{enumerable:!0,get:p})},i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,h){if(1&h&&(n=i(n)),8&h||4&h&&typeof n=="object"&&n&&n.__esModule)return n;var p=Object.create(null);if(i.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:n}),2&h&&typeof n!="string")for(var g in n)i.d(p,g,function(h){return n[h]}.bind(null,g));return p},i.n=function(n){var h=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(h,"a",h),h},i.o=function(n,h){return Object.prototype.hasOwnProperty.call(n,h)},i.p="/",i(i.s=0)}([function(n,h,p){p(1),n.exports=function(){var n=p(6),h="cdx-notify--bounce-in",g=null;return{show:function(p){if(p.message){(function(){if(g)return!0;g=n.getWrapper(),document.body.appendChild(g)})();var m=null,v=p.time||8e3;switch(p.type){case"confirm":m=n.confirm(p);break;case"prompt":m=n.prompt(p);break;default:m=n.alert(p),window.setTimeout((function(){m.remove()}),v)}g.appendChild(m),m.classList.add(h)}}}}()},function(n,h,p){var g=p(2);typeof g=="string"&&(g=[[n.i,g,""]]);var m={hmr:!0,transform:void 0,insertInto:void 0};p(4)(g,m),g.locals&&(n.exports=g.locals)},function(n,h,p){(n.exports=p(3)(!1)).push([n.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(n,h){n.exports=function(n){var h=[];return h.toString=function(){return this.map((function(h){var p=function(n,h){var p=n[1]||"",g=n[3];if(!g)return p;if(h&&typeof btoa=="function"){var m=(x=g,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(x))))+" */"),v=g.sources.map((function(n){return"/*# sourceURL="+g.sourceRoot+n+" */"}));return[p].concat(v).concat([m]).join("\n")}var x;return[p].join("\n")}(h,n);return h[2]?"@media "+h[2]+"{"+p+"}":p})).join("")},h.i=function(n,p){typeof n=="string"&&(n=[[null,n,""]]);for(var g={},m=0;m<this.length;m++){var v=this[m][0];typeof v=="number"&&(g[v]=!0)}for(m=0;m<n.length;m++){var x=n[m];typeof x[0]=="number"&&g[x[0]]||(p&&!x[2]?x[2]=p:p&&(x[2]="("+x[2]+") and ("+p+")"),h.push(x))}},h}},function(n,h,p){var g,m,v={},x=(g=function(){return window&&document&&document.all&&!window.atob},function(){return m===void 0&&(m=g.apply(this,arguments)),m}),w=function(n){var h={};return function(n){if(typeof n=="function")return n();if(h[n]===void 0){var p=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}h[n]=p}return h[n]}}(),E=null,B=0,T=[],I=p(5);function f(n,h){for(var p=0;p<n.length;p++){var g=n[p],m=v[g.id];if(m){m.refs++;for(var x=0;x<m.parts.length;x++)m.parts[x](g.parts[x]);for(;x<g.parts.length;x++)m.parts.push(j(g.parts[x],h))}else{var w=[];for(x=0;x<g.parts.length;x++)w.push(j(g.parts[x],h));v[g.id]={id:g.id,refs:1,parts:w}}}}function k(n,h){for(var p=[],g={},m=0;m<n.length;m++){var v=n[m],x=h.base?v[0]+h.base:v[0],w={css:v[1],media:v[2],sourceMap:v[3]};g[x]?g[x].parts.push(w):p.push(g[x]={id:x,parts:[w]})}return p}function C(n,h){var p=w(n.insertInto);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var g=T[T.length-1];if(n.insertAt==="top")g?g.nextSibling?p.insertBefore(h,g.nextSibling):p.appendChild(h):p.insertBefore(h,p.firstChild),T.push(h);else if(n.insertAt==="bottom")p.appendChild(h);else{if(typeof n.insertAt!="object"||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var m=w(n.insertInto+" "+n.insertAt.before);p.insertBefore(h,m)}}function S(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n);var h=T.indexOf(n);h>=0&&T.splice(h,1)}function _(n){var h=document.createElement("style");return n.attrs.type===void 0&&(n.attrs.type="text/css"),ee(h,n.attrs),C(n,h),h}function ee(n,h){Object.keys(h).forEach((function(p){n.setAttribute(p,h[p])}))}function j(n,h){var p,g,m,v;if(h.transform&&n.css){if(!(v=h.transform(n.css)))return function(){};n.css=v}if(h.singleton){var x=B++;p=E||(E=_(h)),g=fe.bind(null,p,x,!1),m=fe.bind(null,p,x,!0)}else n.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(p=function(n){var h=document.createElement("link");return n.attrs.type===void 0&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",ee(h,n.attrs),C(n,h),h}(h),g=function(n,h,p){var g=p.css,m=p.sourceMap,v=h.convertToAbsoluteUrls===void 0&&m;(h.convertToAbsoluteUrls||v)&&(g=I(g)),m&&(g+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(m))))+" */");var x=new Blob([g],{type:"text/css"}),w=n.href;n.href=URL.createObjectURL(x),w&&URL.revokeObjectURL(w)}.bind(null,p,h),m=function(){S(p),p.href&&URL.revokeObjectURL(p.href)}):(p=_(h),g=function(n,h){var p=h.css,g=h.media;if(g&&n.setAttribute("media",g),n.styleSheet)n.styleSheet.cssText=p;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(p))}}.bind(null,p),m=function(){S(p)});return g(n),function(h){if(h){if(h.css===n.css&&h.media===n.media&&h.sourceMap===n.sourceMap)return;g(n=h)}else m()}}n.exports=function(n,h){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(h=h||{}).attrs=typeof h.attrs=="object"?h.attrs:{},h.singleton||typeof h.singleton=="boolean"||(h.singleton=x()),h.insertInto||(h.insertInto="head"),h.insertAt||(h.insertAt="bottom");var p=k(n,h);return f(p,h),function(n){for(var g=[],m=0;m<p.length;m++){var x=p[m];(w=v[x.id]).refs--,g.push(w)}for(n&&f(k(n,h),h),m=0;m<g.length;m++){var w;if((w=g[m]).refs===0){for(var E=0;E<w.parts.length;E++)w.parts[E]();delete v[w.id]}}}};var M,A=(M=[],function(n,h){return M[n]=h,M.filter(Boolean).join("\n")});function fe(n,h,p,g){var m=p?"":g.css;if(n.styleSheet)n.styleSheet.cssText=A(h,m);else{var v=document.createTextNode(m),x=n.childNodes;x[h]&&n.removeChild(x[h]),x.length?n.insertBefore(v,x[h]):n.appendChild(v)}}},function(n,h){n.exports=function(n){var h=typeof window<"u"&&window.location;if(!h)throw new Error("fixUrls requires window.location");if(!n||typeof n!="string")return n;var p=h.protocol+"//"+h.host,g=p+h.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,h){var m,v=h.trim().replace(/^"(.*)"$/,(function(n,h){return h})).replace(/^'(.*)'$/,(function(n,h){return h}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(v)?n:(m=v.indexOf("//")===0?v:v.indexOf("/")===0?p+v:g+v.replace(/^\.\//,""),"url("+JSON.stringify(m)+")")}))}},function(n,h,p){var g,m,v,x,w,E,B,T,I;n.exports=(g="cdx-notifies",m="cdx-notify",v="cdx-notify__cross",x="cdx-notify__button--confirm",w="cdx-notify__button--cancel",E="cdx-notify__input",B="cdx-notify__button",T="cdx-notify__btns-wrapper",{alert:I=function(n){var h=document.createElement("DIV"),p=document.createElement("DIV"),g=n.message,x=n.style;return h.classList.add(m),x&&h.classList.add(m+"--"+x),h.innerHTML=g,p.classList.add(v),p.addEventListener("click",h.remove.bind(h)),h.appendChild(p),h},confirm:function(n){var h=I(n),p=document.createElement("div"),g=document.createElement("button"),m=document.createElement("button"),E=h.querySelector("."+v),M=n.cancelHandler,A=n.okHandler;return p.classList.add(T),g.innerHTML=n.okText||"Confirm",m.innerHTML=n.cancelText||"Cancel",g.classList.add(B),m.classList.add(B),g.classList.add(x),m.classList.add(w),M&&typeof M=="function"&&(m.addEventListener("click",M),E.addEventListener("click",M)),A&&typeof A=="function"&&g.addEventListener("click",A),g.addEventListener("click",h.remove.bind(h)),m.addEventListener("click",h.remove.bind(h)),p.appendChild(g),p.appendChild(m),h.appendChild(p),h},prompt:function(n){var h=I(n),p=document.createElement("div"),g=document.createElement("button"),m=document.createElement("input"),w=h.querySelector("."+v),M=n.cancelHandler,A=n.okHandler;return p.classList.add(T),g.innerHTML=n.okText||"Ok",g.classList.add(B),g.classList.add(x),m.classList.add(E),n.placeholder&&m.setAttribute("placeholder",n.placeholder),n.default&&(m.value=n.default),n.inputType&&(m.type=n.inputType),M&&typeof M=="function"&&w.addEventListener("click",M),A&&typeof A=="function"&&g.addEventListener("click",(function(){A(m.value)})),g.addEventListener("click",h.remove.bind(h)),p.appendChild(m),p.appendChild(g),h.appendChild(p),h},getWrapper:function(){var n=document.createElement("DIV");return n.classList.add(g),n}})}])}))})(Y);var K=Y.exports;const W=Fe(K);class qo{
/**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
show(n){W.show(n)}}class Zo extends y{
/**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
constructor({config:n,eventsDispatcher:h}){super({config:n,eventsDispatcher:h}),this.notifier=new qo}get methods(){return{show:n=>this.show(n)}}
/**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */show(n){return this.notifier.show(n)}}class Go extends y{get methods(){const e=()=>this.isEnabled;return{toggle:n=>this.toggle(n),get isEnabled(){return e()}}}
/**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */toggle(n){return this.Editor.ReadOnly.toggle(n)}get isEnabled(){return this.Editor.ReadOnly.isEnabled}}var X={exports:{}};(function(n,h){(function(h,p){n.exports=p()})(0,(function(){function t(n){var h=n.tags,p=Object.keys(h),g=p.map((function(n){return typeof h[n]})).every((function(n){return n==="object"||n==="boolean"||n==="function"}));if(!g)throw new Error("The configuration was invalid");this.config=n}var n=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function i(h){return n.indexOf(h.nodeName)!==-1}var h=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function r(n){return h.indexOf(n.nodeName)!==-1}t.prototype.clean=function(n){const h=document.implementation.createHTMLDocument(),p=h.createElement("div");return p.innerHTML=n,this._sanitize(h,p),p.innerHTML},t.prototype._sanitize=function(n,h){var p=l(n,h),g=p.firstChild();if(g)do{if(g.nodeType!==Node.TEXT_NODE){if(g.nodeType===Node.COMMENT_NODE){h.removeChild(g),this._sanitize(n,h);break}var m,v=r(g);v&&(m=Array.prototype.some.call(g.childNodes,i));var x=!!h.parentNode,w=i(h)&&i(g)&&x,E=g.nodeName.toLowerCase(),B=a(this.config,E,g),T=v&&m;if(T||c(g,B)||!this.config.keepNestedBlockElements&&w){if(!(g.nodeName==="SCRIPT"||g.nodeName==="STYLE"))for(;g.childNodes.length>0;)h.insertBefore(g.childNodes[0],g);h.removeChild(g),this._sanitize(n,h);break}for(var I=0;I<g.attributes.length;I+=1){var M=g.attributes[I];u(M,B,g)&&(g.removeAttribute(M.name),I-=1)}this._sanitize(n,g)}else if(g.data.trim()===""&&(g.previousElementSibling&&i(g.previousElementSibling)||g.nextElementSibling&&i(g.nextElementSibling))){h.removeChild(g),this._sanitize(n,h);break}}while(g=p.nextSibling())};function l(n,h){return n.createTreeWalker(h,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}function a(n,h,p){return typeof n.tags[h]=="function"?n.tags[h](p):n.tags[h]}function c(n,h){return typeof h>"u"||typeof h=="boolean"&&!h}function u(n,h,p){var g=n.name.toLowerCase();return h!==!0&&(typeof h[g]=="function"?!h[g](n.value,p):typeof h[g]>"u"||h[g]===!1||typeof h[g]=="string"&&h[g]!==n.value)}return t}))})(X);var Z=X.exports;const J=Fe(Z);function it(n,h){return n.map((n=>{const p=O(h)?h(n.tool):h;return V(p)||(n.data=st(n.data,p)),n}))}function q(n,h={}){const p={tags:h};return new J(p).clean(n)}function st(n,h){return Array.isArray(n)?ei(n,h):R(n)?ti(n,h):Q(n)?oi(n,h):n}function ei(n,h){return n.map((n=>st(n,h)))}function ti(n,h){const p={};for(const g in n){if(!Object.prototype.hasOwnProperty.call(n,g))continue;const m=n[g],v=ii(h[g])?h[g]:h;p[g]=st(m,v)}return p}function oi(n,h){return R(h)?q(n,h):h===!1?q(n,{}):n}function ii(n){return R(n)||yo(n)||O(n)}class si extends y{
/**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
get methods(){return{clean:(n,h)=>this.clean(n,h)}}
/**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */clean(n,h){return q(n,h)}}class ni extends y{
/**
   * Available methods
   *
   * @returns {Saver}
   */
get methods(){return{save:()=>this.save()}}
/**
   * Return Editor's data
   *
   * @returns {OutputData}
   */save(){const n="Editor's content can not be saved in read-only mode";return this.Editor.ReadOnly.isEnabled?(m(n,"warn"),Promise.reject(new Error(n))):this.Editor.Saver.save()}}class ri extends y{constructor(){super(...arguments),this.selectionUtils=new b
/**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */}get methods(){return{findParentTag:(n,h)=>this.findParentTag(n,h),expandToTag:n=>this.expandToTag(n),save:()=>this.selectionUtils.save(),restore:()=>this.selectionUtils.restore(),setFakeBackground:()=>this.selectionUtils.setFakeBackground(),removeFakeBackground:()=>this.selectionUtils.removeFakeBackground()}}
/**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */findParentTag(n,h){return this.selectionUtils.findParentTag(n,h)}
/**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */expandToTag(n){this.selectionUtils.expandToTag(n)}}class li extends y{get methods(){return{getBlockTools:()=>Array.from(this.Editor.Tools.blockTools.values())}}}class ai extends y{get classes(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}}class ci extends y{
/**
   * Available methods
   *
   * @returns {Toolbar}
   */
get methods(){return{close:()=>this.close(),open:()=>this.open(),toggleBlockSettings:n=>this.toggleBlockSettings(n),toggleToolbox:n=>this.toggleToolbox(n)}}open(){this.Editor.Toolbar.moveAndOpen()}close(){this.Editor.Toolbar.close()}
/**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */toggleBlockSettings(n){this.Editor.BlockManager.currentBlockIndex!==-1?n??!this.Editor.BlockSettings.opened?(this.Editor.Toolbar.moveAndOpen(),this.Editor.BlockSettings.open()):this.Editor.BlockSettings.close():m("Could't toggle the Toolbar because there is no block selected ","warn")}
/**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */toggleToolbox(n){this.Editor.BlockManager.currentBlockIndex!==-1?n??!this.Editor.Toolbar.toolbox.opened?(this.Editor.Toolbar.moveAndOpen(),this.Editor.Toolbar.toolbox.open()):this.Editor.Toolbar.toolbox.close():m("Could't toggle the Toolbox because there is no block selected ","warn")}}var oe={exports:{}};(function(n,h){(function(h,p){n.exports=p()})(window,(function(){return function(n){var h={};function i(p){if(h[p])return h[p].exports;var g=h[p]={i:p,l:!1,exports:{}};return n[p].call(g.exports,g,g.exports,i),g.l=!0,g.exports}return i.m=n,i.c=h,i.d=function(n,h,p){i.o(n,h)||Object.defineProperty(n,h,{enumerable:!0,get:p})},i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,h){if(1&h&&(n=i(n)),8&h||4&h&&typeof n=="object"&&n&&n.__esModule)return n;var p=Object.create(null);if(i.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:n}),2&h&&typeof n!="string")for(var g in n)i.d(p,g,function(h){return n[h]}.bind(null,g));return p},i.n=function(n){var h=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(h,"a",h),h},i.o=function(n,h){return Object.prototype.hasOwnProperty.call(n,h)},i.p="",i(i.s=0)}([function(n,h,p){n.exports=p(1)},function(n,h,p){p.r(h),p.d(h,"default",(function(){return s}));class s{constructor(){this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.handleWindowScroll=()=>{this.showed&&this.hide(!0)},this.loadStyles(),this.prepare(),window.addEventListener("scroll",this.handleWindowScroll,{passive:!0})}get CSS(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}}}show(n,h,p){this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout);const g=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},p);if(g.hidingDelay&&(this.hidingDelay=g.hidingDelay),this.nodes.content.innerHTML="",typeof h=="string")this.nodes.content.appendChild(document.createTextNode(h));else{if(!(h instanceof Node))throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But "+typeof h+" given.");this.nodes.content.appendChild(h)}switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)),g.placement){case"top":this.placeTop(n,g);break;case"left":this.placeLeft(n,g);break;case"right":this.placeRight(n,g);break;case"bottom":default:this.placeBottom(n,g)}g&&g.delay?this.showingTimeout=setTimeout((()=>{this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0}),g.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0)}hide(n=!1){if(this.hidingDelay&&!n)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout((()=>{this.hide(!0)}),this.hidingDelay));this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout)}onHover(n,h,p){n.addEventListener("mouseenter",(()=>{this.show(n,h,p)})),n.addEventListener("mouseleave",(()=>{this.hide()}))}destroy(){this.nodes.wrapper.remove(),window.removeEventListener("scroll",this.handleWindowScroll)}prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper)}loadStyles(){const n="codex-tooltips-style";if(document.getElementById(n))return;const h=p(2),g=this.make("style",null,{textContent:h.toString(),id:n});this.prepend(document.head,g)}placeBottom(n,h){const p=n.getBoundingClientRect(),g=p.left+n.clientWidth/2-this.nodes.wrapper.offsetWidth/2,m=p.bottom+window.pageYOffset+this.offsetTop+h.marginTop;this.applyPlacement("bottom",g,m)}placeTop(n,h){const p=n.getBoundingClientRect(),g=p.left+n.clientWidth/2-this.nodes.wrapper.offsetWidth/2,m=p.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop;this.applyPlacement("top",g,m)}placeLeft(n,h){const p=n.getBoundingClientRect(),g=p.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-h.marginLeft,m=p.top+window.pageYOffset+n.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("left",g,m)}placeRight(n,h){const p=n.getBoundingClientRect(),g=p.right+this.offsetRight+h.marginRight,m=p.top+window.pageYOffset+n.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("right",g,m)}applyPlacement(n,h,p){this.nodes.wrapper.classList.add(this.CSS.placement[n]),this.nodes.wrapper.style.left=h+"px",this.nodes.wrapper.style.top=p+"px"}make(n,h=null,p={}){const g=document.createElement(n);Array.isArray(h)?g.classList.add(...h):h&&g.classList.add(h);for(const n in p)p.hasOwnProperty(n)&&(g[n]=p[n]);return g}append(n,h){Array.isArray(h)?h.forEach((h=>n.appendChild(h))):n.appendChild(h)}prepend(n,h){Array.isArray(h)?(h=h.reverse()).forEach((h=>n.prepend(h))):n.prepend(h)}}},function(n,h){n.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}'}]).default}))})(oe);var ie=oe.exports;const ne=Fe(ie);let ce=null;function nt(){ce||(ce=new ne)}function ui(n,h,p){nt(),ce==null||ce.show(n,h,p)}function Ne(n=!1){nt(),ce==null||ce.hide(n)}function Pe(n,h,p){nt(),ce==null||ce.onHover(n,h,p)}function pi(){ce==null||ce.destroy(),ce=null}class fi extends y{
/**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
constructor({config:n,eventsDispatcher:h}){super({config:n,eventsDispatcher:h})}get methods(){return{show:(n,h,p)=>this.show(n,h,p),hide:()=>this.hide(),onHover:(n,h,p)=>this.onHover(n,h,p)}}
/**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */show(n,h,p){ui(n,h,p)}hide(){Ne()}
/**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */onHover(n,h,p){Pe(n,h,p)}}class gi extends y{get methods(){return{nodes:this.editorNodes}}get editorNodes(){return{wrapper:this.Editor.UI.nodes.wrapper,redactor:this.Editor.UI.nodes.redactor}}}function Yt(n,h){const p={};return Object.entries(n).forEach((([n,g])=>{if(R(g)){const m=h?`${h}.${n}`:n;Object.values(g).every((n=>Q(n)))?p[n]=m:p[n]=Yt(g,m)}else p[n]=g})),p}const de=Yt(I);function mi(n,h){const p={};return Object.keys(n).forEach((g=>{const m=h[g];m!==void 0?p[m]=n[g]:p[g]=n[g]})),p}const he=class ve{
/**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
constructor(n,h){this.cursor=-1,this.items=[],this.items=n||[],this.focusedCssClass=h
/**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */}get currentItem(){return this.cursor===-1?null:this.items[this.cursor]}
/**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */setCursor(n){n<this.items.length&&n>=-1&&(this.dropCursor(),this.cursor=n,this.items[this.cursor].classList.add(this.focusedCssClass)
/**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */)}setItems(n){this.items=n}next(){this.cursor=this.leafNodesAndReturnIndex(ve.directions.RIGHT)}previous(){this.cursor=this.leafNodesAndReturnIndex(ve.directions.LEFT)}dropCursor(){this.cursor!==-1&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1
/**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */)}leafNodesAndReturnIndex(n){if(this.items.length===0)return this.cursor;let h=this.cursor;return h===-1?h=n===ve.directions.RIGHT?-1:0:this.items[h].classList.remove(this.focusedCssClass),h=n===ve.directions.RIGHT?(h+1)%this.items.length:(this.items.length+h-1)%this.items.length,d.canSetCaret(this.items[h])&&Oe((()=>b.setCursor(this.items[h])),50)(),this.items[h].classList.add(this.focusedCssClass),h}};he.directions={RIGHT:"right",LEFT:"left"};let ge=he;class le{
/**
   * @param options - different constructing settings
   */
constructor(n){this.iterator=null,this.activated=!1,this.flipCallbacks=[],this.onKeyDown=n=>{if(this.isEventReadyForHandling(n))switch(le.usedKeys.includes(n.keyCode)&&n.preventDefault(),n.keyCode){case h.TAB:this.handleTabPress(n);break;case h.LEFT:case h.UP:this.flipLeft();break;case h.RIGHT:case h.DOWN:this.flipRight();break;case h.ENTER:this.handleEnterPress(n);break}},this.iterator=new ge(n.items,n.focusedItemClass),this.activateCallback=n.activateCallback,this.allowedKeys=n.allowedKeys||le.usedKeys}get isActivated(){return this.activated}static get usedKeys(){return[h.TAB,h.LEFT,h.RIGHT,h.ENTER,h.UP,h.DOWN]}
/**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */activate(n,h){this.activated=!0,n&&this.iterator.setItems(n),h!==void 0&&this.iterator.setCursor(h),document.addEventListener("keydown",this.onKeyDown,!0)}deactivate(){this.activated=!1,this.dropCursor(),document.removeEventListener("keydown",this.onKeyDown)}focusFirst(){this.dropCursor(),this.flipRight()}flipLeft(){this.iterator.previous(),this.flipCallback()}flipRight(){this.iterator.next(),this.flipCallback()}hasFocus(){return!!this.iterator.currentItem}
/**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */onFlip(n){this.flipCallbacks.push(n)}
/**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */removeOnFlip(n){this.flipCallbacks=this.flipCallbacks.filter((h=>h!==n))}dropCursor(){this.iterator.dropCursor()}
/**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */isEventReadyForHandling(n){return this.activated&&this.allowedKeys.includes(n.keyCode)}
/**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */handleTabPress(n){switch(n.shiftKey?ge.directions.LEFT:ge.directions.RIGHT){case ge.directions.RIGHT:this.flipRight();break;case ge.directions.LEFT:this.flipLeft();break}}
/**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */handleEnterPress(n){this.activated&&(this.iterator.currentItem&&(n.stopPropagation(),n.preventDefault(),this.iterator.currentItem.click()),O(this.activateCallback)&&this.activateCallback(this.iterator.currentItem))}flipCallback(){this.iterator.currentItem&&this.iterator.currentItem.scrollIntoViewIfNeeded(),this.flipCallbacks.forEach((n=>n()))}}const me='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>',be='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',ke='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>',ye='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>',Se='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>',Ie='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',De='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>',He='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>',Ue='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>',je='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>',$e='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',Ye='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>',Ke='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',We='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',Ge='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>',Je="__",et="--";function te(n){return(h,p)=>[[n,h].filter((n=>!!n)).join(Je),p].filter((n=>!!n)).join(et)}const at=te("ce-hint"),lt={root:at(),alignedStart:at(null,"align-left"),alignedCenter:at(null,"align-center"),title:at("title"),description:at("description")};class Li{
/**
   * Constructs the hint content instance
   *
   * @param params - hint content parameters
   */
constructor(n){this.nodes={root:d.make("div",[lt.root,n.alignment==="center"?lt.alignedCenter:lt.alignedStart]),title:d.make("div",lt.title,{textContent:n.title})},this.nodes.root.appendChild(this.nodes.title),n.description!==void 0&&(this.nodes.description=d.make("div",lt.description,{textContent:n.description}),this.nodes.root.appendChild(this.nodes.description))}getElement(){return this.nodes.root}}class rt{
/**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
constructor(n){this.params=n}get name(){if(this.params!==void 0&&"name"in this.params)return this.params.name}destroy(){Ne()}onChildrenOpen(){var n;this.params!==void 0&&"children"in this.params&&typeof((n=this.params.children)==null?void 0:n.onOpen)=="function"&&this.params.children.onOpen()}onChildrenClose(){var n;this.params!==void 0&&"children"in this.params&&typeof((n=this.params.children)==null?void 0:n.onClose)=="function"&&this.params.children.onClose()}handleClick(){var n,h;this.params!==void 0&&"onActivate"in this.params&&((h=(n=this.params).onActivate)==null||h.call(n,this.params))}
/**
   * Adds hint to the item element if hint data is provided
   *
   * @param itemElement - popover item root element to add hint to
   * @param hintData - hint data
   */addHint(n,h){const p=new Li(h);Pe(n,p.getElement(),{placement:h.position,hidingDelay:100})}get children(){var n;return this.params!==void 0&&"children"in this.params&&((n=this.params.children)==null?void 0:n.items)!==void 0?this.params.children.items:[]}get hasChildren(){return this.children.length>0}get isChildrenOpen(){var n;return this.params!==void 0&&"children"in this.params&&((n=this.params.children)==null?void 0:n.isOpen)===!0}get isChildrenFlippable(){var n;return!(this.params===void 0||!("children"in this.params)||((n=this.params.children)==null?void 0:n.isFlippable)===!1)}get isChildrenSearchable(){var n;return this.params!==void 0&&"children"in this.params&&((n=this.params.children)==null?void 0:n.searchable)===!0}get closeOnActivate(){return this.params!==void 0&&"closeOnActivate"in this.params&&this.params.closeOnActivate}get isActive(){return this.params!==void 0&&"isActive"in this.params&&(typeof this.params.isActive=="function"?this.params.isActive():this.params.isActive===!0)}}const ct=te("ce-popover-item"),mt={container:ct(),active:ct(null,"active"),disabled:ct(null,"disabled"),focused:ct(null,"focused"),hidden:ct(null,"hidden"),confirmationState:ct(null,"confirmation"),noHover:ct(null,"no-hover"),noFocus:ct(null,"no-focus"),title:ct("title"),secondaryTitle:ct("secondary-title"),icon:ct("icon"),iconTool:ct("icon","tool"),iconChevronRight:ct("icon","chevron-right"),wobbleAnimation:te("wobble")()};class se extends rt{
/**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   * @param renderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
constructor(n,h){super(n),this.params=n,this.nodes={root:null,icon:null},this.confirmationState=null,this.removeSpecialFocusBehavior=()=>{var n;(n=this.nodes.root)==null||n.classList.remove(mt.noFocus)},this.removeSpecialHoverBehavior=()=>{var n;(n=this.nodes.root)==null||n.classList.remove(mt.noHover)},this.onErrorAnimationEnd=()=>{var n,h;(n=this.nodes.icon)==null||n.classList.remove(mt.wobbleAnimation),(h=this.nodes.icon)==null||h.removeEventListener("animationend",this.onErrorAnimationEnd)},this.nodes.root=this.make(n,h)}get isDisabled(){return this.params.isDisabled===!0}get toggle(){return this.params.toggle}get title(){return this.params.title}get isConfirmationStateEnabled(){return this.confirmationState!==null}get isFocused(){return this.nodes.root!==null&&this.nodes.root.classList.contains(mt.focused)}getElement(){return this.nodes.root}handleClick(){this.isConfirmationStateEnabled&&this.confirmationState!==null?this.activateOrEnableConfirmationMode(this.confirmationState):this.activateOrEnableConfirmationMode(this.params)}
/**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */toggleActive(n){var h;(h=this.nodes.root)==null||h.classList.toggle(mt.active,n)}
/**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */toggleHidden(n){var h;(h=this.nodes.root)==null||h.classList.toggle(mt.hidden,n)}reset(){this.isConfirmationStateEnabled&&this.disableConfirmationMode()}onFocus(){this.disableSpecialHoverAndFocusBehavior()}
/**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   * @param renderParams - popover item render params
   */make(n,h){var p,g;const m=(h==null?void 0:h.wrapperTag)||"div",v=d.make(m,mt.container,{type:m==="button"?"button":void 0});return n.name&&(v.dataset.itemName=n.name),this.nodes.icon=d.make("div",[mt.icon,mt.iconTool],{innerHTML:n.icon||De}),v.appendChild(this.nodes.icon),n.title!==void 0&&v.appendChild(d.make("div",mt.title,{innerHTML:n.title||""})),n.secondaryLabel&&v.appendChild(d.make("div",mt.secondaryTitle,{textContent:n.secondaryLabel})),this.hasChildren&&v.appendChild(d.make("div",[mt.icon,mt.iconChevronRight],{innerHTML:ye})),this.isActive&&v.classList.add(mt.active),n.isDisabled&&v.classList.add(mt.disabled),n.hint!==void 0&&((p=h==null?void 0:h.hint)==null?void 0:p.enabled)!==!1&&this.addHint(v,{...n.hint,position:((g=h==null?void 0:h.hint)==null?void 0:g.position)||"right"}),v
/**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */}enableConfirmationMode(n){if(this.nodes.root===null)return;const h={...this.params,...n,confirmation:"confirmation"in n?n.confirmation:void 0},p=this.make(h);this.nodes.root.innerHTML=p.innerHTML,this.nodes.root.classList.add(mt.confirmationState),this.confirmationState=n,this.enableSpecialHoverAndFocusBehavior()}disableConfirmationMode(){if(this.nodes.root===null)return;const n=this.make(this.params);this.nodes.root.innerHTML=n.innerHTML,this.nodes.root.classList.remove(mt.confirmationState),this.confirmationState=null,this.disableSpecialHoverAndFocusBehavior()}enableSpecialHoverAndFocusBehavior(){var n,h,p;(n=this.nodes.root)==null||n.classList.add(mt.noHover),(h=this.nodes.root)==null||h.classList.add(mt.noFocus),(p=this.nodes.root)==null||p.addEventListener("mouseleave",this.removeSpecialHoverBehavior,{once:!0})}disableSpecialHoverAndFocusBehavior(){var n;this.removeSpecialFocusBehavior(),this.removeSpecialHoverBehavior(),(n=this.nodes.root)==null||n.removeEventListener("mouseleave",this.removeSpecialHoverBehavior)
/**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */}activateOrEnableConfirmationMode(n){var h;if("confirmation"in n&&n.confirmation!==void 0)this.enableConfirmationMode(n.confirmation);else try{(h=n.onActivate)==null||h.call(n,n),this.disableConfirmationMode()}catch{this.animateError()}}animateError(){var n,h,p;(n=this.nodes.icon)!=null&&n.classList.contains(mt.wobbleAnimation)||((h=this.nodes.icon)==null||h.classList.add(mt.wobbleAnimation),(p=this.nodes.icon)==null||p.addEventListener("animationend",this.onErrorAnimationEnd))}}const yt=te("ce-popover-item-separator"),Et={container:yt(),line:yt("line"),hidden:yt(null,"hidden")};class Xt extends rt{constructor(){super(),this.nodes={root:d.make("div",Et.container),line:d.make("div",Et.line)},this.nodes.root.appendChild(this.nodes.line)}getElement(){return this.nodes.root}
/**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */toggleHidden(n){var h;(h=this.nodes.root)==null||h.classList.toggle(Et.hidden,n)}}var Bt=(n=>(n.Closed="closed",n.ClosedOnActivate="closed-on-activate",n))(Bt||{});const Ct=te("ce-popover"),Tt={popover:Ct(),popoverContainer:Ct("container"),popoverOpenTop:Ct(null,"open-top"),popoverOpenLeft:Ct(null,"open-left"),popoverOpened:Ct(null,"opened"),search:Ct("search"),nothingFoundMessage:Ct("nothing-found-message"),nothingFoundMessageDisplayed:Ct("nothing-found-message","displayed"),items:Ct("items"),overlay:Ct("overlay"),overlayHidden:Ct("overlay","hidden"),popoverNested:Ct(null,"nested"),getPopoverNestedClass:n=>Ct(null,`nested-level-${n.toString()}`),popoverInline:Ct(null,"inline"),popoverHeader:Ct("header")};var St=(n=>(n.NestingLevel="--nesting-level",n.PopoverHeight="--popover-height",n.InlinePopoverWidth="--inline-popover-width",n.TriggerItemLeft="--trigger-item-left",n.TriggerItemTop="--trigger-item-top",n))(St||{});const It=te("ce-popover-item-html"),Ot={root:It(),hidden:It(null,"hidden")};class Ee extends rt{
/**
   * Constructs the instance
   *
   * @param params – instance parameters
   * @param renderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
constructor(n,h){var p,g;super(n),this.nodes={root:d.make("div",Ot.root)},this.nodes.root.appendChild(n.element),n.name&&(this.nodes.root.dataset.itemName=n.name),n.hint!==void 0&&((p=h==null?void 0:h.hint)==null?void 0:p.enabled)!==!1&&this.addHint(this.nodes.root,{...n.hint,position:((g=h==null?void 0:h.hint)==null?void 0:g.position)||"right"})}getElement(){return this.nodes.root}
/**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */toggleHidden(n){var h;(h=this.nodes.root)==null||h.classList.toggle(Ot.hidden,n)}getControls(){const n=this.nodes.root.querySelectorAll(`button, ${d.allInputsSelector}`);return Array.from(n)}}class Vt extends Te{
/**
   * Constructs the instance
   *
   * @param params - popover construction params
   * @param itemsRenderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
constructor(n,h={}){super(),this.params=n,this.itemsRenderParams=h,this.listeners=new Ce,this.messages={nothingFound:"Nothing found",search:"Search"},this.items=this.buildItems(n.items),n.messages&&(this.messages={...this.messages,...n.messages}),this.nodes={},this.nodes.popoverContainer=d.make("div",[Tt.popoverContainer]),this.nodes.nothingFoundMessage=d.make("div",[Tt.nothingFoundMessage],{textContent:this.messages.nothingFound}),this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage),this.nodes.items=d.make("div",[Tt.items]),this.items.forEach((n=>{const h=n.getElement();h!==null&&this.nodes.items.appendChild(h)})),this.nodes.popoverContainer.appendChild(this.nodes.items),this.listeners.on(this.nodes.popoverContainer,"click",(n=>this.handleClick(n))),this.nodes.popover=d.make("div",[Tt.popover,this.params.class]),this.nodes.popover.appendChild(this.nodes.popoverContainer)}get itemsDefault(){return this.items.filter((n=>n instanceof se))}getElement(){return this.nodes.popover}show(){this.nodes.popover.classList.add(Tt.popoverOpened),this.search!==void 0&&this.search.focus()}hide(){this.nodes.popover.classList.remove(Tt.popoverOpened),this.nodes.popover.classList.remove(Tt.popoverOpenTop),this.itemsDefault.forEach((n=>n.reset())),this.search!==void 0&&this.search.clear(),this.emit(Bt.Closed)}destroy(){var n;this.items.forEach((n=>n.destroy())),this.nodes.popover.remove(),this.listeners.removeAll(),(n=this.search)==null||n.destroy()
/**
   * Looks for the item by name and imitates click on it
   *
   * @param name - name of the item to activate
   */}activateItemByName(n){const h=this.items.find((h=>h.name===n));this.handleItemClick(h)}
/**
   * Factory method for creating popover items
   *
   * @param items - list of items params
   */buildItems(n){return n.map((n=>{switch(n.type){case U.Separator:return new Xt;case U.Html:return new Ee(n,this.itemsRenderParams[U.Html]);default:return new se(n,this.itemsRenderParams[U.Default])}}))}
/**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */getTargetItem(n){return this.items.filter((n=>n instanceof se||n instanceof Ee)).find((h=>{const p=h.getElement();return p!==null&&n.composedPath().includes(p)}))}
/**
   * Handles popover item click
   *
   * @param item - item to handle click of
   */handleItemClick(n){if(!("isDisabled"in n&&n.isDisabled)){if(n.hasChildren){this.showNestedItems(n),"handleClick"in n&&typeof n.handleClick=="function"&&n.handleClick();return}this.itemsDefault.filter((h=>h!==n)).forEach((n=>n.reset())),"handleClick"in n&&typeof n.handleClick=="function"&&n.handleClick(),this.toggleItemActivenessIfNeeded(n),n.closeOnActivate&&(this.hide(),this.emit(Bt.ClosedOnActivate))}}
/**
   * Handles clicks inside popover
   *
   * @param event - item to handle click of
   */handleClick(n){const h=this.getTargetItem(n);h!==void 0&&this.handleItemClick(h)}
/**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */toggleItemActivenessIfNeeded(n){if(n instanceof se&&(n.toggle===!0&&n.toggleActive(),typeof n.toggle=="string")){const h=this.itemsDefault.filter((h=>h.toggle===n.toggle));if(h.length===1){n.toggleActive();return}h.forEach((h=>{h.toggleActive(h===n)}))}}}var _t=(n=>(n.Search="search",n))(_t||{});const Nt=te("cdx-search-field"),Dt={wrapper:Nt(),icon:Nt("icon"),input:Nt("input")};class _i extends Te{
/**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.placeholder - input placeholder
   */
constructor({items:n,placeholder:h}){super(),this.listeners=new Ce,this.items=n,this.wrapper=d.make("div",Dt.wrapper);const p=d.make("div",Dt.icon,{innerHTML:Ke});this.input=d.make("input",Dt.input,{placeholder:h,tabIndex:-1}),this.wrapper.appendChild(p),this.wrapper.appendChild(this.input),this.listeners.on(this.input,"input",(()=>{this.searchQuery=this.input.value,this.emit(_t.Search,{query:this.searchQuery,items:this.foundItems})}))}getElement(){return this.wrapper}focus(){this.input.focus()}clear(){this.input.value="",this.searchQuery="",this.emit(_t.Search,{query:"",items:this.foundItems})}destroy(){this.listeners.removeAll()}get foundItems(){return this.items.filter((n=>this.checkItem(n)))}
/**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */checkItem(n){var h,p;const g=((h=n.title)==null?void 0:h.toLowerCase())||"",m=(p=this.searchQuery)==null?void 0:p.toLowerCase();return m!==void 0&&g.includes(m)}}var Rt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Di=(n,h,p,g)=>{for(var m,v=g>1?void 0:g?Ft(h,p):h,x=n.length-1;x>=0;x--)(m=n[x])&&(v=(g?m(h,p,v):m(v))||v);return g&&v&&Rt(h,p,v),v};const Ut=class Zt extends Vt{
/**
   * Construct the instance
   *
   * @param params - popover params
   * @param itemsRenderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
constructor(n,p){super(n,p),this.nestingLevel=0,this.nestedPopoverTriggerItem=null,this.previouslyHoveredItem=null,this.scopeElement=document.body,this.hide=()=>{var n;super.hide(),this.destroyNestedPopoverIfExists(),(n=this.flipper)==null||n.deactivate(),this.previouslyHoveredItem=null},this.onFlip=()=>{const n=this.itemsDefault.find((n=>n.isFocused));n==null||n.onFocus()},this.onSearch=n=>{var h;const p=n.query==="",g=n.items.length===0;this.items.forEach((h=>{let m=!1;h instanceof se?m=!n.items.includes(h):(h instanceof Xt||h instanceof Ee)&&(m=g||!p),h.toggleHidden(m)})),this.toggleNothingFoundMessage(g);const m=n.query===""?this.flippableElements:n.items.map((n=>n.getElement()));(h=this.flipper)!=null&&h.isActivated&&(this.flipper.deactivate(),this.flipper.activate(m))},n.nestingLevel!==void 0&&(this.nestingLevel=n.nestingLevel),this.nestingLevel>0&&this.nodes.popover.classList.add(Tt.popoverNested),n.scopeElement!==void 0&&(this.scopeElement=n.scopeElement),this.nodes.popoverContainer!==null&&this.listeners.on(this.nodes.popoverContainer,"mouseover",(n=>this.handleHover(n))),n.searchable&&this.addSearch(),n.flippable!==!1&&(this.flipper=new le({items:this.flippableElements,focusedItemClass:mt.focused,allowedKeys:[h.TAB,h.UP,h.DOWN,h.ENTER]}),this.flipper.onFlip(this.onFlip))}hasFocus(){return this.flipper!==void 0&&this.flipper.hasFocus()}get scrollTop(){return this.nodes.items===null?0:this.nodes.items.scrollTop}get offsetTop(){return this.nodes.popoverContainer===null?0:this.nodes.popoverContainer.offsetTop}show(){var n;this.nodes.popover.style.setProperty(St.PopoverHeight,this.size.height+"px"),this.shouldOpenBottom||this.nodes.popover.classList.add(Tt.popoverOpenTop),this.shouldOpenRight||this.nodes.popover.classList.add(Tt.popoverOpenLeft),super.show(),(n=this.flipper)==null||n.activate(this.flippableElements)}destroy(){this.hide(),super.destroy()
/**
   * Handles displaying nested items for the item.
   *
   * @param item – item to show nested popover for
   */}showNestedItems(n){this.nestedPopover!==null&&this.nestedPopover!==void 0||(this.nestedPopoverTriggerItem=n,this.showNestedPopoverForItem(n)
/**
   * Handles hover events inside popover items container
   *
   * @param event - hover event data
   */)}handleHover(n){const h=this.getTargetItem(n);h!==void 0&&this.previouslyHoveredItem!==h&&(this.destroyNestedPopoverIfExists(),this.previouslyHoveredItem=h,h.hasChildren&&this.showNestedPopoverForItem(h)
/**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used for correct positioning of the nested popover
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */)}setTriggerItemPosition(n,h){const p=h.getElement(),g=(p?p.offsetTop:0)-this.scrollTop,m=this.offsetTop+g;n.style.setProperty(St.TriggerItemTop,m+"px")}destroyNestedPopoverIfExists(){var n,h;this.nestedPopover===void 0||this.nestedPopover===null||(this.nestedPopover.off(Bt.ClosedOnActivate,this.hide),this.nestedPopover.hide(),this.nestedPopover.destroy(),this.nestedPopover.getElement().remove(),this.nestedPopover=null,(n=this.flipper)==null||n.activate(this.flippableElements),(h=this.nestedPopoverTriggerItem)==null||h.onChildrenClose()
/**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */)}showNestedPopoverForItem(n){var h;this.nestedPopover=new Zt({searchable:n.isChildrenSearchable,items:n.children,nestingLevel:this.nestingLevel+1,flippable:n.isChildrenFlippable,messages:this.messages}),n.onChildrenOpen(),this.nestedPopover.on(Bt.ClosedOnActivate,this.hide);const p=this.nestedPopover.getElement();return this.nodes.popover.appendChild(p),this.setTriggerItemPosition(p,n),p.style.setProperty(St.NestingLevel,this.nestedPopover.nestingLevel.toString()),this.nestedPopover.show(),(h=this.flipper)==null||h.deactivate(),this.nestedPopover}get shouldOpenBottom(){if(this.nodes.popover===void 0||this.nodes.popover===null)return!1;const n=this.nodes.popoverContainer.getBoundingClientRect(),h=this.scopeElement.getBoundingClientRect(),p=this.size.height,g=n.top+p,m=n.top-p,v=Math.min(window.innerHeight,h.bottom);return m<h.top||g<=v}get shouldOpenRight(){if(this.nodes.popover===void 0||this.nodes.popover===null)return!1;const n=this.nodes.popover.getBoundingClientRect(),h=this.scopeElement.getBoundingClientRect(),p=this.size.width,g=n.right+p,m=n.left-p,v=Math.min(window.innerWidth,h.right);return m<h.left||g<=v}get size(){var n;const h={height:0,width:0};if(this.nodes.popover===null)return h;const p=this.nodes.popover.cloneNode(!0);p.style.visibility="hidden",p.style.position="absolute",p.style.top="-1000px",p.classList.add(Tt.popoverOpened),(n=p.querySelector("."+Tt.popoverNested))==null||n.remove(),document.body.appendChild(p);const g=p.querySelector("."+Tt.popoverContainer);return h.height=g.offsetHeight,h.width=g.offsetWidth,p.remove(),h}get flippableElements(){return this.items.map((n=>n instanceof se?n.getElement():n instanceof Ee?n.getControls():void 0)).flat().filter((n=>n!=null))}addSearch(){this.search=new _i({items:this.itemsDefault,placeholder:this.messages.search}),this.search.on(_t.Search,this.onSearch);const n=this.search.getElement();n.classList.add(Tt.search),this.nodes.popoverContainer.insertBefore(n,this.nodes.popoverContainer.firstChild)
/**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */}toggleNothingFoundMessage(n){this.nodes.nothingFoundMessage.classList.toggle(Tt.nothingFoundMessageDisplayed,n)}};Di([ue],Ut.prototype,"size",1);let jt=Ut;class Ri extends jt{
/**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
constructor(n){const h=!pe();super({...n,class:Tt.popoverInline},{[U.Default]:{wrapperTag:"button",hint:{position:"top",alignment:"center",enabled:h}},[U.Html]:{hint:{position:"top",alignment:"center",enabled:h}}}),this.items.forEach((n=>{!(n instanceof se)&&!(n instanceof Ee)||n.hasChildren&&n.isChildrenOpen&&this.showNestedItems(n)}))}get offsetLeft(){return this.nodes.popoverContainer===null?0:this.nodes.popoverContainer.offsetLeft}show(){this.nestingLevel===0&&this.nodes.popover.style.setProperty(St.InlinePopoverWidth,this.size.width+"px"),super.show()}handleHover(){}
/**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used to position nested popover right below clicked item
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */setTriggerItemPosition(n,h){const p=h.getElement(),g=p?p.offsetLeft:0,m=this.offsetLeft+g;n.style.setProperty(St.TriggerItemLeft,m+"px")}
/**
   * Handles displaying nested items for the item.
   * Overriding in order to add toggling behaviour
   *
   * @param item – item to toggle nested popover for
   */showNestedItems(n){this.nestedPopoverTriggerItem!==n?super.showNestedItems(n):(this.destroyNestedPopoverIfExists(),this.nestedPopoverTriggerItem=null)}
/**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */showNestedPopoverForItem(n){const h=super.showNestedPopoverForItem(n);return h.getElement().classList.add(Tt.getPopoverNestedClass(h.nestingLevel)),h
/**
   * Overrides default item click handling.
   * Helps to close nested popover once other item is clicked.
   *
   * @param item - clicked item
   */}handleItemClick(n){var h;n!==this.nestedPopoverTriggerItem&&((h=this.nestedPopoverTriggerItem)==null||h.handleClick(),super.destroyNestedPopoverIfExists()),super.handleItemClick(n)}}const $t=class we{constructor(){this.scrollPosition=null}lock(){x?this.lockHard():document.body.classList.add(we.CSS.scrollLocked)}unlock(){x?this.unlockHard():document.body.classList.remove(we.CSS.scrollLocked)}lockHard(){this.scrollPosition=window.pageYOffset,document.documentElement.style.setProperty("--window-scroll-offset",`${this.scrollPosition}px`),document.body.classList.add(we.CSS.scrollLockedHard)}unlockHard(){document.body.classList.remove(we.CSS.scrollLockedHard),this.scrollPosition!==null&&window.scrollTo(0,this.scrollPosition),this.scrollPosition=null}};$t.CSS={scrollLocked:"ce-scroll-locked",scrollLockedHard:"ce-scroll-locked--hard"};let Kt=$t;const Wt=te("ce-popover-header"),qt={root:Wt(),text:Wt("text"),backButton:Wt("back-button")};class Hi{
/**
   * Constructs the instance
   *
   * @param params - popover header params
   */
constructor({text:n,onBackButtonClick:h}){this.listeners=new Ce,this.text=n,this.onBackButtonClick=h,this.nodes={root:d.make("div",[qt.root]),backButton:d.make("button",[qt.backButton]),text:d.make("div",[qt.text])},this.nodes.backButton.innerHTML=ke,this.nodes.root.appendChild(this.nodes.backButton),this.listeners.on(this.nodes.backButton,"click",this.onBackButtonClick),this.nodes.text.innerText=this.text,this.nodes.root.appendChild(this.nodes.text)}getElement(){return this.nodes.root}destroy(){this.nodes.root.remove(),this.listeners.destroy()}}class zi{constructor(){this.history=[]}
/**
   * Push new popover state
   *
   * @param state - new state
   */push(n){this.history.push(n)}pop(){return this.history.pop()}get currentTitle(){return this.history.length===0?"":this.history[this.history.length-1].title}get currentItems(){return this.history.length===0?[]:this.history[this.history.length-1].items}reset(){for(;this.history.length>1;)this.pop()}}class Jt extends Vt{
/**
   * Construct the instance
   *
   * @param params - popover params
   */
constructor(n){super(n,{[U.Default]:{hint:{enabled:!1}},[U.Html]:{hint:{enabled:!1}}}),this.scrollLocker=new Kt,this.history=new zi,this.isHidden=!0,this.nodes.overlay=d.make("div",[Tt.overlay,Tt.overlayHidden]),this.nodes.popover.insertBefore(this.nodes.overlay,this.nodes.popover.firstChild),this.listeners.on(this.nodes.overlay,"click",(()=>{this.hide()})),this.history.push({items:n.items})}show(){this.nodes.overlay.classList.remove(Tt.overlayHidden),super.show(),this.scrollLocker.lock(),this.isHidden=!1}hide(){this.isHidden||(super.hide(),this.nodes.overlay.classList.add(Tt.overlayHidden),this.scrollLocker.unlock(),this.history.reset(),this.isHidden=!0)}destroy(){super.destroy(),this.scrollLocker.unlock()
/**
   * Handles displaying nested items for the item
   *
   * @param item – item to show nested popover for
   */}showNestedItems(n){this.updateItemsAndHeader(n.children,n.title),this.history.push({title:n.title,items:n.children})
/**
   * Removes rendered popover items and header and displays new ones
   *
   * @param items - new popover items
   * @param title - new popover header text
   */}updateItemsAndHeader(n,h){if(this.header!==null&&this.header!==void 0&&(this.header.destroy(),this.header=null),h!==void 0){this.header=new Hi({text:h,onBackButtonClick:()=>{this.history.pop(),this.updateItemsAndHeader(this.history.currentItems,this.history.currentTitle)}});const n=this.header.getElement();n!==null&&this.nodes.popoverContainer.insertBefore(n,this.nodes.popoverContainer.firstChild)}this.items.forEach((n=>{var h;return(h=n.getElement())==null?void 0:h.remove()})),this.items=this.buildItems(n),this.items.forEach((n=>{var h;const p=n.getElement();p!==null&&((h=this.nodes.items)==null||h.appendChild(p))}))}}class Ui extends y{constructor(){super(...arguments),this.opened=!1,this.selection=new b,this.popover=null,this.close=()=>{this.opened&&(this.opened=!1,b.isAtEditor||this.selection.restore(),this.selection.clearSaved(),!this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted&&this.Editor.BlockManager.currentBlock&&this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock),this.eventsDispatcher.emit(this.events.closed),this.popover&&(this.popover.off(Bt.Closed,this.onPopoverClose),this.popover.destroy(),this.popover.getElement().remove(),this.popover=null))},this.onPopoverClose=()=>{this.close()}}get events(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}get CSS(){return{settings:"ce-settings"}}get flipper(){var n;if(this.popover!==null)return"flipper"in this.popover?(n=this.popover)==null?void 0:n.flipper:void 0}make(){this.nodes.wrapper=d.make("div",[this.CSS.settings]),this.eventsDispatcher.on(z,this.close)}destroy(){this.removeAllNodes(),this.listeners.destroy(),this.eventsDispatcher.off(z,this.close)
/**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */}async open(n=this.Editor.BlockManager.currentBlock){var h;this.opened=!0,this.selection.save(),this.Editor.BlockSelection.selectBlock(n),this.Editor.BlockSelection.clearCache();const{toolTunes:p,commonTunes:g}=n.getTunes();this.eventsDispatcher.emit(this.events.opened);const m=pe()?Jt:jt;this.popover=new m({searchable:!0,items:await this.getTunesItems(n,g,p),scopeElement:this.Editor.API.methods.ui.nodes.redactor,messages:{nothingFound:A.ui(de.ui.popover,"Nothing found"),search:A.ui(de.ui.popover,"Filter")}}),this.popover.on(Bt.Closed,this.onPopoverClose),(h=this.nodes.wrapper)==null||h.append(this.popover.getElement()),this.popover.show()}getElement(){return this.nodes.wrapper}
/**
   * Returns list of items to be displayed in block tunes menu.
   * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
   *
   * @param currentBlock –  block we are about to open block tunes for
   * @param commonTunes – common tunes
   * @param toolTunes - tool specific tunes
   */async getTunesItems(n,h,p){const g=[];p!==void 0&&p.length>0&&(g.push(...p),g.push({type:U.Separator}));const m=Array.from(this.Editor.Tools.blockTools.values()),v=(await zt(n,m)).reduce(((h,p)=>(p.toolbox.forEach((g=>{h.push({icon:g.icon,title:A.t(de.toolNames,g.title),name:p.name,closeOnActivate:!0,onActivate:async()=>{const{BlockManager:h,Caret:m,Toolbar:v}=this.Editor,x=await h.convert(n,p.name,g.data);v.close(),m.setToBlock(x,m.positions.END)}})})),h)),[]);return v.length>0&&(g.push({icon:Ye,name:"convert-to",title:A.ui(de.ui.popover,"Convert to"),children:{searchable:!0,items:v}}),g.push({type:U.Separator})),g.push(...h),g.map((n=>this.resolveTuneAliases(n)))
/**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */}resolveTuneAliases(n){if(n.type===U.Separator||n.type===U.Html)return n;const h=mi(n,{label:"title"});return n.confirmation&&(h.confirmation=this.resolveTuneAliases(n.confirmation)),h}}var Gt={exports:{}};
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */(function(n,h){(function(h,p){n.exports=p()})(window,(function(){return function(n){var h={};function i(p){if(h[p])return h[p].exports;var g=h[p]={i:p,l:!1,exports:{}};return n[p].call(g.exports,g,g.exports,i),g.l=!0,g.exports}return i.m=n,i.c=h,i.d=function(n,h,p){i.o(n,h)||Object.defineProperty(n,h,{enumerable:!0,get:p})},i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,h){if(1&h&&(n=i(n)),8&h||4&h&&typeof n=="object"&&n&&n.__esModule)return n;var p=Object.create(null);if(i.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:n}),2&h&&typeof n!="string")for(var g in n)i.d(p,g,function(h){return n[h]}.bind(null,g));return p},i.n=function(n){var h=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(h,"a",h),h},i.o=function(n,h){return Object.prototype.hasOwnProperty.call(n,h)},i.p="",i(i.s=0)}([function(n,h,p){function s(n,h){for(var p=0;p<h.length;p++){var g=h[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(n,g.key,g)}}function r(n,h,p){return h&&s(n.prototype,h),p&&s(n,p),n}p.r(h);var g=function(){function a(n){var h=this;(function(n,h){if(!(n instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.commands={},this.keys={},this.name=n.name,this.parseShortcutName(n.name),this.element=n.on,this.callback=n.callback,this.executeShortcut=function(n){h.execute(n)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return r(a,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,".":190}}}]),r(a,[{key:"parseShortcutName",value:function(n){n=n.split("+");for(var h=0;h<n.length;h++){n[h]=n[h].toUpperCase();var p=!1;for(var g in a.supportedCommands)if(a.supportedCommands[g].includes(n[h])){p=this.commands[g]=!0;break}p||(this.keys[n[h]]=!0)}for(var m in a.supportedCommands)this.commands[m]||(this.commands[m]=!1)}},{key:"execute",value:function(n){var h,p={CMD:n.ctrlKey||n.metaKey,SHIFT:n.shiftKey,ALT:n.altKey},g=!0;for(h in this.commands)this.commands[h]!==p[h]&&(g=!1);var m,v=!0;for(m in this.keys)v=v&&n.keyCode===a.keyCodes[m];g&&v&&this.callback(n)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),a}();h.default=g}]).default}))})(Gt);var Qt=Gt.exports;const oo=Fe(Qt);class Yi{constructor(){this.registeredShortcuts=new Map}
/**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */add(n){if(this.findShortcut(n.on,n.name))throw Error(`Shortcut ${n.name} is already registered for ${n.on}. Please remove it before add a new handler.`);const h=new oo({name:n.name,on:n.on,callback:n.handler}),p=this.registeredShortcuts.get(n.on)||[];this.registeredShortcuts.set(n.on,[...p,h])}
/**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */remove(n,h){const p=this.findShortcut(n,h);if(!p)return;p.remove();const g=this.registeredShortcuts.get(n);this.registeredShortcuts.set(n,g.filter((n=>n!==p)))}
/**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */findShortcut(n,h){return(this.registeredShortcuts.get(n)||[]).find((({name:n})=>n===h))}}const io=new Yi;var ro=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,eo=(n,h,p,g)=>{for(var m,v=g>1?void 0:g?mo(h,p):h,x=n.length-1;x>=0;x--)(m=n[x])&&(v=(g?m(h,p,v):m(v))||v);return g&&v&&ro(h,p,v),v},bo=(n=>(n.Opened="toolbox-opened",n.Closed="toolbox-closed",n.BlockAdded="toolbox-block-added",n))(bo||{});const ko=class to extends Te{
/**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
constructor({api:n,tools:h,i18nLabels:p}){super(),this.opened=!1,this.listeners=new Ce,this.popover=null,this.handleMobileLayoutToggle=()=>{this.destroyPopover(),this.initPopover()},this.onPopoverClose=()=>{this.opened=!1,this.emit("toolbox-closed")},this.api=n,this.tools=h,this.i18nLabels=p,this.enableShortcuts(),this.nodes={toolbox:d.make("div",to.CSS.toolbox)},this.initPopover(),this.api.events.on(z,this.handleMobileLayoutToggle)
/**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */}get isEmpty(){return this.toolsToBeDisplayed.length===0}static get CSS(){return{toolbox:"ce-toolbox"}}getElement(){return this.nodes.toolbox}hasFocus(){if(this.popover!==null)return"hasFocus"in this.popover?this.popover.hasFocus():void 0}destroy(){var n;super.destroy(),this.nodes&&this.nodes.toolbox&&this.nodes.toolbox.remove(),this.removeAllShortcuts(),(n=this.popover)==null||n.off(Bt.Closed,this.onPopoverClose),this.listeners.destroy(),this.api.events.off(z,this.handleMobileLayoutToggle)
/**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */}toolButtonActivated(n,h){this.insertNewBlock(n,h)}open(){var n;this.isEmpty||((n=this.popover)==null||n.show(),this.opened=!0,this.emit("toolbox-opened"))}close(){var n;(n=this.popover)==null||n.hide(),this.opened=!1,this.emit("toolbox-closed")}toggle(){this.opened?this.close():this.open()}initPopover(){var n;const h=pe()?Jt:jt;this.popover=new h({scopeElement:this.api.ui.nodes.redactor,searchable:!0,messages:{nothingFound:this.i18nLabels.nothingFound,search:this.i18nLabels.filter},items:this.toolboxItemsToBeDisplayed}),this.popover.on(Bt.Closed,this.onPopoverClose),(n=this.nodes.toolbox)==null||n.append(this.popover.getElement())}destroyPopover(){this.popover!==null&&(this.popover.hide(),this.popover.off(Bt.Closed,this.onPopoverClose),this.popover.destroy(),this.popover=null),this.nodes.toolbox!==null&&(this.nodes.toolbox.innerHTML="")}get toolsToBeDisplayed(){const n=[];return this.tools.forEach((h=>{h.toolbox&&n.push(h)})),n}get toolboxItemsToBeDisplayed(){const e=(n,h)=>({icon:n.icon,title:A.t(de.toolNames,n.title||Le(h.name)),name:h.name,onActivate:()=>{this.toolButtonActivated(h.name,n.data)},secondaryLabel:h.shortcut?tt(h.shortcut):""});return this.toolsToBeDisplayed.reduce(((n,h)=>(Array.isArray(h.toolbox)?h.toolbox.forEach((p=>{n.push(e(p,h))})):h.toolbox!==void 0&&n.push(e(h.toolbox,h)),n)),[])}enableShortcuts(){this.toolsToBeDisplayed.forEach((n=>{const h=n.shortcut;h&&this.enableShortcutForTool(n.name,h)}))}
/**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */enableShortcutForTool(n,h){io.add({name:h,on:this.api.ui.nodes.redactor,handler:async h=>{h.preventDefault();const p=this.api.blocks.getCurrentBlockIndex(),g=this.api.blocks.getBlockByIndex(p);if(g)try{const h=await this.api.blocks.convert(g.id,n);this.api.caret.setToBlock(h,"end");return}catch{}this.insertNewBlock(n)}})}removeAllShortcuts(){this.toolsToBeDisplayed.forEach((n=>{const h=n.shortcut;h&&io.remove(this.api.ui.nodes.redactor,h)}))}
/**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */async insertNewBlock(n,h){const p=this.api.blocks.getCurrentBlockIndex(),g=this.api.blocks.getBlockByIndex(p);if(!g)return;const m=g.isEmpty?p:p+1;let v;if(h){const p=await this.api.blocks.composeBlockData(n);v=Object.assign(p,h)}const x=this.api.blocks.insert(n,v,void 0,m,void 0,g.isEmpty);x.call($.APPEND_CALLBACK),this.api.caret.setToBlock(m),this.emit("toolbox-block-added",{block:x}),this.api.toolbar.close()}};eo([ue],ko.prototype,"toolsToBeDisplayed",1);eo([ue],ko.prototype,"toolboxItemsToBeDisplayed",1);let wo=ko;const No="block hovered";async function Vi(n,h){const p=navigator.keyboard;if(!p)return h;try{return(await p.getLayoutMap()).get(n)||h}catch(n){return console.error(n),h}}class qi extends y{
/**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
constructor({config:n,eventsDispatcher:h}){super({config:n,eventsDispatcher:h}),this.toolboxInstance=null
/**
   * CSS styles
   *
   * @returns {object}
   */}get CSS(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",openedToolboxHolderModifier:"codex-editor--toolbox-opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",settingsToggler:"ce-toolbar__settings-btn",settingsTogglerHidden:"ce-toolbar__settings-btn--hidden"}}
/**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */get opened(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)}get toolbox(){var n;return{opened:(n=this.toolboxInstance)==null?void 0:n.opened,close:()=>{var n;(n=this.toolboxInstance)==null||n.close()},open:()=>{this.toolboxInstance!==null?(this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.toolboxInstance.open()):g("toolbox.open() called before initialization is finished","warn")},toggle:()=>{this.toolboxInstance!==null?this.toolboxInstance.toggle():g("toolbox.toggle() called before initialization is finished","warn")},hasFocus:()=>{var n;return(n=this.toolboxInstance)==null?void 0:n.hasFocus()}}}get blockActions(){return{hide:()=>{this.nodes.actions.classList.remove(this.CSS.actionsOpened)},show:()=>{this.nodes.actions.classList.add(this.CSS.actionsOpened)}}}get blockTunesToggler(){return{hide:()=>this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),show:()=>this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)}}
/**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */toggleReadOnly(n){n?(this.destroy(),this.Editor.BlockSettings.destroy(),this.disableModuleBindings()):window.requestIdleCallback((()=>{this.drawUI(),this.enableModuleBindings()}),{timeout:2e3})}
/**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */moveAndOpen(n=this.Editor.BlockManager.currentBlock){if(this.toolboxInstance===null){g("Can't open Toolbar since Editor initialization is not finished yet","warn");return}if(this.toolboxInstance.opened&&this.toolboxInstance.close(),this.Editor.BlockSettings.opened&&this.Editor.BlockSettings.close(),!n)return;this.hoveredBlock=n;const h=n.holder,{isMobile:p}=this.Editor.UI;let m;const v=20,x=n.firstInput,w=h.getBoundingClientRect(),E=x!==void 0?x.getBoundingClientRect():null,B=E!==null?E.top-w.top:null,T=B!==null?B>v:void 0;if(p)m=h.offsetTop+h.offsetHeight;else if(x===void 0||T){const p=parseInt(window.getComputedStyle(n.pluginsContent).paddingTop);m=h.offsetTop+p}else{const n=_o(x),p=parseInt(window.getComputedStyle(this.nodes.plusButton).height,10),g=8;m=h.offsetTop+n-p+g+B}this.nodes.wrapper.style.top=`${Math.floor(m)}px`,this.Editor.BlockManager.blocks.length===1&&n.isEmpty?this.blockTunesToggler.hide():this.blockTunesToggler.show(),this.open()}close(){var n,h;this.Editor.ReadOnly.isEnabled||((n=this.nodes.wrapper)==null||n.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),(h=this.toolboxInstance)==null||h.close(),this.Editor.BlockSettings.close(),this.reset())}reset(){this.nodes.wrapper.style.top="unset"}
/**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */open(n=!0){this.nodes.wrapper.classList.add(this.CSS.toolbarOpened),n?this.blockActions.show():this.blockActions.hide()}async make(){this.nodes.wrapper=d.make("div",this.CSS.toolbar),["content","actions"].forEach((n=>{this.nodes[n]=d.make("div",this.CSS[n])})),d.append(this.nodes.wrapper,this.nodes.content),d.append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=d.make("div",this.CSS.plusButton,{innerHTML:$e}),d.append(this.nodes.actions,this.nodes.plusButton),this.readOnlyMutableListeners.on(this.nodes.plusButton,"click",(()=>{Ne(!0),this.plusButtonClicked()}),!1);const n=d.make("div");n.appendChild(document.createTextNode(A.ui(de.ui.toolbar.toolbox,"Add"))),n.appendChild(d.make("div",this.CSS.plusButtonShortcut,{textContent:"/"})),Pe(this.nodes.plusButton,n,{hidingDelay:400}),this.nodes.settingsToggler=d.make("span",this.CSS.settingsToggler,{innerHTML:je}),d.append(this.nodes.actions,this.nodes.settingsToggler);const h=d.make("div"),p=d.text(A.ui(de.ui.blockTunes.toggler,"Click to tune")),g=await Vi("Slash","/");h.appendChild(p),h.appendChild(d.make("div",this.CSS.plusButtonShortcut,{textContent:tt(`CMD + ${g}`)})),Pe(this.nodes.settingsToggler,h,{hidingDelay:400}),d.append(this.nodes.actions,this.makeToolbox()),d.append(this.nodes.actions,this.Editor.BlockSettings.getElement()),d.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}makeToolbox(){return this.toolboxInstance=new wo({api:this.Editor.API.methods,tools:this.Editor.Tools.blockTools,i18nLabels:{filter:A.ui(de.ui.popover,"Filter"),nothingFound:A.ui(de.ui.popover,"Nothing found")}}),this.toolboxInstance.on(bo.Opened,(()=>{this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier)})),this.toolboxInstance.on(bo.Closed,(()=>{this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier)})),this.toolboxInstance.on(bo.BlockAdded,(({block:n})=>{const{BlockManager:h,Caret:p}=this.Editor,g=h.getBlockById(n.id);g.inputs.length===0&&(g===h.lastBlock?(h.insertAtEnd(),p.setToBlock(h.lastBlock)):p.setToBlock(h.nextBlock))})),this.toolboxInstance.getElement()}plusButtonClicked(){var n;this.Editor.BlockManager.currentBlock=this.hoveredBlock,(n=this.toolboxInstance)==null||n.toggle()}enableModuleBindings(){this.readOnlyMutableListeners.on(this.nodes.settingsToggler,"mousedown",(n=>{var h;n.stopPropagation(),this.settingsTogglerClicked(),(h=this.toolboxInstance)!=null&&h.opened&&this.toolboxInstance.close(),Ne(!0)}),!0),pe()||this.eventsDispatcher.on(No,(n=>{var h;this.Editor.BlockSettings.opened||(h=this.toolboxInstance)!=null&&h.opened||this.moveAndOpen(n.block)}))}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}settingsTogglerClicked(){this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open(this.hoveredBlock)}drawUI(){this.Editor.BlockSettings.make(),this.make()}destroy(){this.removeAllNodes(),this.toolboxInstance&&this.toolboxInstance.destroy()}}var Po=(n=>(n[n.Block=0]="Block",n[n.Inline=1]="Inline",n[n.Tune=2]="Tune",n))(Po||{}),Do=(n=>(n.Shortcut="shortcut",n.Toolbox="toolbox",n.EnabledInlineTools="inlineToolbar",n.EnabledBlockTunes="tunes",n.Config="config",n))(Do||{}),Ro=(n=>(n.Shortcut="shortcut",n.SanitizeConfig="sanitize",n))(Ro||{}),Vo=(n=>(n.IsEnabledLineBreaks="enableLineBreaks",n.Toolbox="toolbox",n.ConversionConfig="conversionConfig",n.IsReadOnlySupported="isReadOnlySupported",n.PasteConfig="pasteConfig",n))(Vo||{}),Xo=(n=>(n.IsInline="isInline",n.Title="title",n))(Xo||{}),Qo=(n=>(n.IsTune="isTune",n))(Qo||{});class dt{
/**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
constructor({name:n,constructable:h,config:p,api:g,isDefault:m,isInternal:v=!1,defaultPlaceholder:x}){this.api=g,this.name=n,this.constructable=h,this.config=p,this.isDefault=m,this.isInternal=v,this.defaultPlaceholder=x}get settings(){const n=this.config.config||{};return this.isDefault&&!("placeholder"in n)&&this.defaultPlaceholder&&(n.placeholder=this.defaultPlaceholder),n}reset(){if(O(this.constructable.reset))return this.constructable.reset()}prepare(){if(O(this.constructable.prepare))return this.constructable.prepare({toolName:this.name,config:this.settings})}get shortcut(){const n=this.constructable.shortcut;return this.config.shortcut||n}get sanitizeConfig(){return this.constructable.sanitize||{}}isInline(){return this.type===Po.Inline}isBlock(){return this.type===Po.Block}isTune(){return this.type===Po.Tune}}class Zi extends y{
/**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
constructor({config:n,eventsDispatcher:h}){super({config:n,eventsDispatcher:h}),this.CSS={inlineToolbar:"ce-inline-toolbar"},this.opened=!1,this.popover=null,this.toolbarVerticalMargin=pe()?20:6,this.toolsInstances=new Map
/**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */}toggleReadOnly(n){n?this.destroy():window.requestIdleCallback((()=>{this.make()}),{timeout:2e3})}
/**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   */async tryToShow(n=!1){n&&this.close(),this.allowedToShow()&&(await this.open(),this.Editor.Toolbar.close())}close(){var n,h;this.opened&&(this.Editor.ReadOnly.isEnabled||(Array.from(this.toolsInstances.entries()).forEach((([n,h])=>{const p=this.getToolShortcut(n);p&&io.remove(this.Editor.UI.nodes.redactor,p),O(h.clear)&&h.clear()})),this.toolsInstances=null,this.reset(),this.opened=!1,(n=this.popover)==null||n.hide(),(h=this.popover)==null||h.destroy(),this.popover=null))}
/**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */containsNode(n){return this.nodes.wrapper!==void 0&&this.nodes.wrapper.contains(n)}destroy(){var n;this.removeAllNodes(),(n=this.popover)==null||n.destroy(),this.popover=null}make(){this.nodes.wrapper=d.make("div",[this.CSS.inlineToolbar,...this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]]),d.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}async open(){var n;if(this.opened)return;this.opened=!0,this.popover!==null&&this.popover.destroy();const h=await this.getInlineTools();this.popover=new Ri({items:h,scopeElement:this.Editor.API.methods.ui.nodes.redactor,messages:{nothingFound:A.ui(de.ui.popover,"Nothing found"),search:A.ui(de.ui.popover,"Filter")}}),this.move(this.popover.size.width),(n=this.nodes.wrapper)==null||n.append(this.popover.getElement()),this.popover.show()
/**
   * Move Toolbar to the selected text
   *
   * @param popoverWidth - width of the toolbar popover
   */}move(n){const h=b.rect,p=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),g={x:h.x-p.x,y:h.y+h.height-p.top+this.toolbarVerticalMargin};g.x+n+p.x>this.Editor.UI.contentRect.right&&(g.x=this.Editor.UI.contentRect.right-n-p.x),this.nodes.wrapper.style.left=Math.floor(g.x)+"px",this.nodes.wrapper.style.top=Math.floor(g.y)+"px"}reset(){this.nodes.wrapper.style.left="0",this.nodes.wrapper.style.top="0"}allowedToShow(){const n=["IMG","INPUT"],h=b.get(),p=b.text;if(!h||!h.anchorNode||h.isCollapsed||p.length<1)return!1;const g=d.isElement(h.anchorNode)?h.anchorNode:h.anchorNode.parentElement;if(g===null||h&&n.includes(g.tagName)||g.closest('[contenteditable="true"]')===null)return!1;const m=this.Editor.BlockManager.getBlock(h.anchorNode);return!!m&&m.tool.inlineTools.size!==0}async getInlineTools(){const n=b.get(),h=this.Editor.BlockManager.getBlock(n.anchorNode),p=Array.from(h.tool.inlineTools.values()),g=[];this.toolsInstances===null&&(this.toolsInstances=new Map);for(let n=0;n<p.length;n++){const h=p[n],m=h.create(),v=await m.render();this.toolsInstances.set(h.name,m);const x=this.getToolShortcut(h.name);if(x)try{this.enableShortcuts(h.name,x)}catch{}const w=x!==void 0?tt(x):void 0,E=A.t(de.toolNames,h.title||Le(h.name));[v].flat().forEach((v=>{var x,B;const T={name:h.name,onActivate:()=>{this.toolClicked(m)},hint:{title:E,description:w}};if(d.isElement(v)){const n={...T,element:v,type:U.Html};if(O(m.renderActions)){const h=m.renderActions();n.children={isOpen:(x=m.checkState)==null?void 0:x.call(m,b.get()),isFlippable:!1,items:[{type:U.Html,element:h}]}}else(B=m.checkState)==null||B.call(m,b.get());g.push(n)}else if(v.type===U.Html)g.push({...T,...v,type:U.Html});else if(v.type===U.Separator)g.push({type:U.Separator});else{const h={...T,...v,type:U.Default};"children"in h&&n!==0&&g.push({type:U.Separator}),g.push(h),"children"in h&&n<p.length-1&&g.push({type:U.Separator})}}))}return g}
/**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */getToolShortcut(n){const{Tools:h}=this.Editor,p=h.inlineTools.get(n),g=h.internal.inlineTools;return Array.from(g.keys()).includes(n)?this.inlineTools[n][Ro.Shortcut]:p==null?void 0:p.shortcut}
/**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param toolName - tool name
   * @param shortcut - shortcut according to the ShortcutData Module format
   */enableShortcuts(n,h){io.add({name:h,handler:h=>{var p;const{currentBlock:g}=this.Editor.BlockManager;g&&g.tool.enabledInlineTools&&(h.preventDefault(),(p=this.popover)==null||p.activateItemByName(n))},on:this.Editor.UI.nodes.redactor})}
/**
   * Inline Tool button clicks
   *
   * @param tool - Tool's instance
   */toolClicked(n){var h;const p=b.range;(h=n.surround)==null||h.call(n,p),this.checkToolsState()}checkToolsState(){var n;(n=this.toolsInstances)==null||n.forEach((n=>{var h;(h=n.checkState)==null||h.call(n,b.get())}))}get inlineTools(){const n={};return Array.from(this.Editor.Tools.inlineTools.entries()).forEach((([h,p])=>{n[h]=p.create()})),n}}function so(){const n=window.getSelection();if(n===null)return[null,0];let h=n.focusNode,p=n.focusOffset;return h===null?[null,0]:(h.nodeType!==Node.TEXT_NODE&&h.childNodes.length>0&&(h.childNodes[p]?(h=h.childNodes[p],p=0):(h=h.childNodes[p-1],p=h.textContent.length)),[h,p])}function no(n,h,p,g){const m=document.createRange();g==="left"?(m.setStart(n,0),m.setEnd(h,p)):(m.setStart(h,p),m.setEnd(n,n.childNodes.length));const v=m.cloneContents(),x=document.createElement("div");x.appendChild(v);const w=x.textContent||"";return Lo(w)}function Me(n){const h=d.getDeepestNode(n);if(h===null||d.isEmpty(n))return!0;if(d.isNativeInput(h))return h.selectionEnd===0;if(d.isEmpty(n))return!0;const[p,g]=so();return p!==null&&no(n,p,g,"left")}function Ae(n){const h=d.getDeepestNode(n,!0);if(h===null)return!0;if(d.isNativeInput(h))return h.selectionEnd===h.value.length;const[p,g]=so();return p!==null&&no(n,p,g,"right")}class Gi extends y{
/**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
keydown(n){switch(this.beforeKeydownProcessing(n),n.keyCode){case h.BACKSPACE:this.backspace(n);break;case h.DELETE:this.delete(n);break;case h.ENTER:this.enter(n);break;case h.DOWN:case h.RIGHT:this.arrowRightAndDown(n);break;case h.UP:case h.LEFT:this.arrowLeftAndUp(n);break;case h.TAB:this.tabPressed(n);break}n.key==="/"&&!n.ctrlKey&&!n.metaKey&&this.slashPressed(n),n.code==="Slash"&&(n.ctrlKey||n.metaKey)&&(n.preventDefault(),this.commandSlashPressed()
/**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */)}beforeKeydownProcessing(n){this.needToolbarClosing(n)&&Mt(n.keyCode)&&(this.Editor.Toolbar.close(),n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||this.Editor.BlockSelection.clearSelection(n)
/**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */)}keyup(n){n.shiftKey||this.Editor.UI.checkEmptiness()}
/**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */dragOver(n){const h=this.Editor.BlockManager.getBlockByChildNode(n.target);h.dropTarget=!0}
/**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */dragLeave(n){const h=this.Editor.BlockManager.getBlockByChildNode(n.target);h.dropTarget=!1}
/**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */handleCommandC(n){const{BlockSelection:h}=this.Editor;h.anyBlockSelected&&h.copySelectedBlocks(n)}
/**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */handleCommandX(n){const{BlockSelection:h,BlockManager:p,Caret:g}=this.Editor;h.anyBlockSelected&&h.copySelectedBlocks(n).then((()=>{const m=p.removeSelectedBlocks(),v=p.insertDefaultBlockAtIndex(m,!0);g.setToBlock(v,g.positions.START),h.clearSelection(n)}))}
/**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */tabPressed(n){const{InlineToolbar:h,Caret:p}=this.Editor;h.opened||(n.shiftKey?p.navigatePrevious(!0):p.navigateNext(!0))&&n.preventDefault()}commandSlashPressed(){this.Editor.BlockSelection.selectedBlocks.length>1||this.activateBlockSettings()}
/**
   * '/' keydown inside a Block
   *
   * @param event - keydown
   */slashPressed(n){this.Editor.BlockManager.currentBlock.isEmpty&&(n.preventDefault(),this.Editor.Caret.insertContentAtCaretPosition("/"),this.activateToolbox()
/**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */)}enter(n){const{BlockManager:h,UI:p}=this.Editor,g=h.currentBlock;if(g===void 0||g.tool.isLineBreaksEnabled||p.someToolbarOpened&&p.someFlipperButtonFocused||n.shiftKey&&!x)return;let m=g;g.currentInput!==void 0&&Me(g.currentInput)&&!g.hasMedia?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):m=g.currentInput&&Ae(g.currentInput)?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex+1):this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(m),this.Editor.Toolbar.moveAndOpen(m),n.preventDefault()
/**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */}backspace(n){const{BlockManager:h,Caret:p}=this.Editor,{currentBlock:g,previousBlock:m}=h;if(g!==void 0&&b.isCollapsed&&g.currentInput&&Me(g.currentInput))if(n.preventDefault(),this.Editor.Toolbar.close(),g.currentInput===g.firstInput){if(m!==null)if(m.isEmpty)h.removeBlock(m);else if(g.isEmpty){h.removeBlock(g);const n=h.currentBlock;p.setToBlock(n,p.positions.END)}else wt(m,g)?this.mergeBlocks(m,g):p.setToBlock(m,p.positions.END)}else p.navigatePrevious()}
/**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */delete(n){const{BlockManager:h,Caret:p}=this.Editor,{currentBlock:g,nextBlock:m}=h;b.isCollapsed&&Ae(g.currentInput)&&(n.preventDefault(),this.Editor.Toolbar.close(),g.currentInput===g.lastInput?m!==null&&(m.isEmpty?h.removeBlock(m):g.isEmpty?(h.removeBlock(g),p.setToBlock(m,p.positions.START)):wt(g,m)?this.mergeBlocks(g,m):p.setToBlock(m,p.positions.START)):p.navigateNext())}
/**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */mergeBlocks(n,h){const{BlockManager:p,Caret:g,Toolbar:m}=this.Editor;g.createShadow(n.lastInput),p.mergeBlocks(n,h).then((()=>{g.restoreCaret(n.pluginsContent),m.close()}))
/**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */}arrowRightAndDown(n){const p=le.usedKeys.includes(n.keyCode)&&(!n.shiftKey||n.keyCode===h.TAB);if(this.Editor.UI.someToolbarOpened&&p)return;this.Editor.Toolbar.close();const{currentBlock:g}=this.Editor.BlockManager,m=((g==null?void 0:g.currentInput)!==void 0?Ae(g.currentInput):void 0)||this.Editor.BlockSelection.anyBlockSelected;n.shiftKey&&n.keyCode===h.DOWN&&m?this.Editor.CrossBlockSelection.toggleBlockSelectedState():(n.keyCode===h.DOWN||n.keyCode===h.RIGHT&&!this.isRtl?this.Editor.Caret.navigateNext():this.Editor.Caret.navigatePrevious())?n.preventDefault():(Oe((()=>{this.Editor.BlockManager.currentBlock&&this.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(n)
/**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */)}arrowLeftAndUp(n){if(this.Editor.UI.someToolbarOpened){if(le.usedKeys.includes(n.keyCode)&&(!n.shiftKey||n.keyCode===h.TAB))return;this.Editor.UI.closeAllToolbars()}this.Editor.Toolbar.close();const{currentBlock:p}=this.Editor.BlockManager,g=((p==null?void 0:p.currentInput)!==void 0?Me(p.currentInput):void 0)||this.Editor.BlockSelection.anyBlockSelected;n.shiftKey&&n.keyCode===h.UP&&g?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):(n.keyCode===h.UP||n.keyCode===h.LEFT&&!this.isRtl?this.Editor.Caret.navigatePrevious():this.Editor.Caret.navigateNext())?n.preventDefault():(Oe((()=>{this.Editor.BlockManager.currentBlock&&this.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(n)
/**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */)}needToolbarClosing(n){const p=n.keyCode===h.ENTER&&this.Editor.Toolbar.toolbox.opened,g=n.keyCode===h.ENTER&&this.Editor.BlockSettings.opened,m=n.keyCode===h.ENTER&&this.Editor.InlineToolbar.opened,v=n.keyCode===h.TAB;return!(n.shiftKey||v||p||g||m)}activateToolbox(){this.Editor.Toolbar.opened||this.Editor.Toolbar.moveAndOpen(),this.Editor.Toolbar.toolbox.open()}activateBlockSettings(){this.Editor.Toolbar.opened||this.Editor.Toolbar.moveAndOpen(),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open()}}class Xe{
/**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
constructor(n){this.blocks=[],this.workingArea=n
/**
   * Get length of Block instances array
   *
   * @returns {number}
   */}get length(){return this.blocks.length}
/**
   * Get Block instances array
   *
   * @returns {Block[]}
   */get array(){return this.blocks}
/**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */get nodes(){return At(this.workingArea.children)}
/**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */static set(n,h,p){return isNaN(Number(h))?(Reflect.set(n,h,p),!0):(n.insert(+h,p),!0
/**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */)}static get(n,h){return isNaN(Number(h))?Reflect.get(n,h):n.get(+h)}
/**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */push(n){this.blocks.push(n),this.insertToDOM(n)
/**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */}swap(n,h){const p=this.blocks[h];d.swap(this.blocks[n].holder,p.holder),this.blocks[h]=this.blocks[n],this.blocks[n]=p
/**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */}move(n,h){const p=this.blocks.splice(h,1)[0],g=n-1,m=Math.max(0,g),v=this.blocks[m];n>0?this.insertToDOM(p,"afterend",v):this.insertToDOM(p,"beforebegin",v),this.blocks.splice(n,0,p);const x=this.composeBlockEvent("move",{fromIndex:h,toIndex:n});p.call($.MOVED,x)}
/**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */insert(n,h,p=!1){if(!this.length){this.push(h);return}n>this.length&&(n=this.length),p&&(this.blocks[n].holder.remove(),this.blocks[n].call($.REMOVED));const g=p?1:0;if(this.blocks.splice(n,g,h),n>0){const p=this.blocks[n-1];this.insertToDOM(h,"afterend",p)}else{const p=this.blocks[n+1];p?this.insertToDOM(h,"beforebegin",p):this.insertToDOM(h)}}
/**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */replace(n,h){if(this.blocks[n]===void 0)throw Error("Incorrect index");this.blocks[n].holder.replaceWith(h.holder),this.blocks[n]=h
/**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */}insertMany(n,h){const p=new DocumentFragment;for(const h of n)p.appendChild(h.holder);if(this.length>0){if(h>0){const n=Math.min(h-1,this.length-1);this.blocks[n].holder.after(p)}else h===0&&this.workingArea.prepend(p);this.blocks.splice(h,0,...n)}else this.blocks.push(...n),this.workingArea.appendChild(p);n.forEach((n=>n.call($.RENDERED)))}
/**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */remove(n){isNaN(n)&&(n=this.length-1),this.blocks[n].holder.remove(),this.blocks[n].call($.REMOVED),this.blocks.splice(n,1)}removeAll(){this.workingArea.innerHTML="",this.blocks.forEach((n=>n.call($.REMOVED))),this.blocks.length=0
/**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */}insertAfter(n,h){const p=this.blocks.indexOf(n);this.insert(p+1,h)}
/**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */get(n){return this.blocks[n]}
/**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */indexOf(n){return this.blocks.indexOf(n)}
/**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */insertToDOM(n,h,p){h?p.holder.insertAdjacentElement(h,n.holder):this.workingArea.appendChild(n.holder),n.call($.RENDERED)
/**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */}composeBlockEvent(n,h){return new CustomEvent(n,{detail:h})}}const Jo="block-removed",di="block-added",hi="block-moved",bi="block-changed";class Qi{constructor(){this.completed=Promise.resolve()}
/**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */add(n){return new Promise(((h,p)=>{this.completed=this.completed.then(n).then(h).catch(p)}))}}class es extends y{constructor(){super(...arguments),this._currentBlockIndex=-1,this._blocks=null
/**
   * Returns current Block index
   *
   * @returns {number}
   */}get currentBlockIndex(){return this._currentBlockIndex}
/**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */set currentBlockIndex(n){this._currentBlockIndex=n}
/**
   * returns first Block
   *
   * @returns {Block}
   */get firstBlock(){return this._blocks[0]}
/**
   * returns last Block
   *
   * @returns {Block}
   */get lastBlock(){return this._blocks[this._blocks.length-1]}
/**
   * Get current Block instance
   *
   * @returns {Block}
   */get currentBlock(){return this._blocks[this.currentBlockIndex]}
/**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */set currentBlock(n){this.currentBlockIndex=this.getBlockIndex(n)}
/**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */get nextBlock(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}
/**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */get nextContentfulBlock(){return this.blocks.slice(this.currentBlockIndex+1).find((n=>!!n.inputs.length))}
/**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */get previousContentfulBlock(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find((n=>!!n.inputs.length))}
/**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */get previousBlock(){return this.currentBlockIndex===0?null:this._blocks[this.currentBlockIndex-1]}
/**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */get blocks(){return this._blocks.array}
/**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */get isEditorEmpty(){return this.blocks.every((n=>n.isEmpty))}prepare(){const n=new Xe(this.Editor.UI.nodes.redactor);this._blocks=new Proxy(n,{set:Xe.set,get:Xe.get}),this.listeners.on(document,"copy",(n=>this.Editor.BlockEvents.handleCommandC(n)))
/**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */}toggleReadOnly(n){n?this.disableModuleBindings():this.enableModuleBindings()}
/**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */composeBlock({tool:n,data:h={},id:p,tunes:g={}}){const m=this.Editor.ReadOnly.isEnabled,v=this.Editor.Tools.blockTools.get(n),x=new D({id:p,data:h,tool:v,api:this.Editor.API,readOnly:m,tunesData:g},this.eventsDispatcher);return m||window.requestIdleCallback((()=>{this.bindBlockEvents(x)}),{timeout:2e3}),x
/**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */}insert({id:n,tool:h=this.config.defaultBlock,data:p={},index:g,needToFocus:m=!0,replace:v=!1,tunes:x={}}={}){let w=g;w===void 0&&(w=this.currentBlockIndex+(v?0:1));const E=this.composeBlock({id:n,tool:h,data:p,tunes:x});return v&&this.blockDidMutated(Jo,this.getBlockByIndex(w),{index:w}),this._blocks.insert(w,E,v),this.blockDidMutated(di,E,{index:w}),m?this.currentBlockIndex=w:w<=this.currentBlockIndex&&this.currentBlockIndex++,E
/**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */}insertMany(n,h=0){this._blocks.insertMany(n,h)}
/**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events.
   *
   * If neither data nor tunes is provided, return the provided block instead.
   *
   * @param block - block to update
   * @param data - (optional) new data
   * @param tunes - (optional) tune data
   */async update(n,h,p){if(!h&&!p)return n;const g=await n.data,m=this.composeBlock({id:n.id,tool:n.name,data:Object.assign({},g,h??{}),tunes:p??n.tunes}),v=this.getBlockIndex(n);return this._blocks.replace(v,m),this.blockDidMutated(bi,m,{index:v}),m
/**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */}replace(n,h,p){const g=this.getBlockIndex(n);return this.insert({tool:h,data:p,index:g,replace:!0})}
/**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */paste(n,h,p=!1){const m=this.insert({tool:n,replace:p});try{window.requestIdleCallback((()=>{m.call($.ON_PASTE,h)}))}catch(h){g(`${n}: onPaste callback call is failed`,"error",h)}return m}
/**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */insertDefaultBlockAtIndex(n,h=!1){const p=this.composeBlock({tool:this.config.defaultBlock});return this._blocks[n]=p,this.blockDidMutated(di,p,{index:n}),h?this.currentBlockIndex=n:n<=this.currentBlockIndex&&this.currentBlockIndex++,p
/**
   * Always inserts at the end
   *
   * @returns {Block}
   */}insertAtEnd(){return this.currentBlockIndex=this.blocks.length-1,this.insert()
/**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */}async mergeBlocks(n,h){let p;if(n.name===h.name&&n.mergeable){const g=await h.data;if(V(g)){console.error("Could not merge Block. Failed to extract original Block data.");return}const[m]=it([g],n.tool.sanitizeConfig);p=m}else if(n.mergeable&&_e(h,"export")&&_e(n,"import")){const g=await h.exportDataAsString(),m=q(g,n.tool.sanitizeConfig);p=xt(m,n.tool.conversionConfig)}p!==void 0&&(await n.mergeWith(p),this.removeBlock(h),this.currentBlockIndex=this._blocks.indexOf(n)
/**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */)}removeBlock(n,h=!0){return new Promise((p=>{const g=this._blocks.indexOf(n);if(!this.validateIndex(g))throw new Error("Can't find a Block to remove");n.destroy(),this._blocks.remove(g),this.blockDidMutated(Jo,n,{index:g}),this.currentBlockIndex>=g&&this.currentBlockIndex--,this.blocks.length?g===0&&(this.currentBlockIndex=0):(this.unsetCurrentBlock(),h&&this.insert()),p()}))}
/**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */removeSelectedBlocks(){let n;for(let h=this.blocks.length-1;h>=0;h--)this.blocks[h].selected&&(this.removeBlock(this.blocks[h]),n=h);return n}removeAllBlocks(){for(let n=this.blocks.length-1;n>=0;n--)this._blocks.remove(n);this.unsetCurrentBlock(),this.insert(),this.currentBlock.firstInput.focus()
/**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */}split(){const n=this.Editor.Caret.extractFragmentFromCaretPosition(),h=d.make("div");h.appendChild(n);const p={text:d.isEmpty(h)?"":h.innerHTML};return this.insert({data:p})}
/**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */getBlockByIndex(n){return n===-1&&(n=this._blocks.length-1),this._blocks[n]
/**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */}getBlockIndex(n){return this._blocks.indexOf(n)}
/**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */getBlockById(n){return this._blocks.array.find((h=>h.id===n))}
/**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */getBlock(n){d.isElement(n)||(n=n.parentNode);const h=this._blocks.nodes,p=n.closest(`.${D.CSS.wrapper}`),g=h.indexOf(p);if(g>=0)return this._blocks[g]}
/**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */setCurrentBlockByChildNode(n){d.isElement(n)||(n=n.parentNode);const h=n.closest(`.${D.CSS.wrapper}`);if(!h)return;const p=h.closest(`.${this.Editor.UI.CSS.editorWrapper}`);return p!=null&&p.isEqualNode(this.Editor.UI.nodes.wrapper)?(this.currentBlockIndex=this._blocks.nodes.indexOf(h),this.currentBlock.updateCurrentInput(),this.currentBlock
/**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */):void 0}getBlockByChildNode(n){if(!n||!(n instanceof Node))return;d.isElement(n)||(n=n.parentNode);const h=n.closest(`.${D.CSS.wrapper}`);return this.blocks.find((n=>n.holder===h))}
/**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */swap(n,h){this._blocks.swap(n,h),this.currentBlockIndex=h
/**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */}move(n,h=this.currentBlockIndex){isNaN(n)||isNaN(h)?g("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(n)&&this.validateIndex(h)?(this._blocks.move(n,h),this.currentBlockIndex=n,this.blockDidMutated(hi,this.currentBlock,{fromIndex:h,toIndex:n})
/**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */):g("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn")}async convert(n,h,p){if(!await n.save())throw new Error("Could not convert Block. Failed to extract original Block data.");const g=this.Editor.Tools.blockTools.get(h);if(!g)throw new Error(`Could not convert Block. Tool «${h}» not found.`);const m=await n.exportDataAsString(),v=q(m,g.sanitizeConfig);let x=xt(v,g.conversionConfig);return p&&(x=Object.assign(x,p)),this.replace(n,g.name,x)}unsetCurrentBlock(){this.currentBlockIndex=-1}
/**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */async clear(n=!1){const h=new Qi;this.blocks.forEach((n=>{h.add((async()=>{await this.removeBlock(n,!1)}))})),await h.completed,this.unsetCurrentBlock(),n&&this.insert(),this.Editor.UI.checkEmptiness()}async destroy(){await Promise.all(this.blocks.map((n=>n.destroy())))}
/**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */bindBlockEvents(n){const{BlockEvents:h}=this.Editor;this.readOnlyMutableListeners.on(n.holder,"keydown",(n=>{h.keydown(n)})),this.readOnlyMutableListeners.on(n.holder,"keyup",(n=>{h.keyup(n)})),this.readOnlyMutableListeners.on(n.holder,"dragover",(n=>{h.dragOver(n)})),this.readOnlyMutableListeners.on(n.holder,"dragleave",(n=>{h.dragLeave(n)})),n.on("didMutated",(n=>this.blockDidMutated(bi,n,{index:this.getBlockIndex(n)})))}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}enableModuleBindings(){this.readOnlyMutableListeners.on(document,"cut",(n=>this.Editor.BlockEvents.handleCommandX(n))),this.blocks.forEach((n=>{this.bindBlockEvents(n)}))
/**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */}validateIndex(n){return!(n<0||n>=this._blocks.length)}
/**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */blockDidMutated(n,h,p){const g=new CustomEvent(n,{detail:{target:new G(h),...p}});return this.eventsDispatcher.emit(N,{event:g}),h}}class ts extends y{constructor(){super(...arguments),this.anyBlockSelectedCache=null,this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1
/**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */}get sanitizerConfig(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}}}
/**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */get allBlocksSelected(){const{BlockManager:n}=this.Editor;return n.blocks.every((n=>n.selected===!0))}
/**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */set allBlocksSelected(n){const{BlockManager:h}=this.Editor;h.blocks.forEach((h=>{h.selected=n})),this.clearCache()
/**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */}get anyBlockSelected(){const{BlockManager:n}=this.Editor;return this.anyBlockSelectedCache===null&&(this.anyBlockSelectedCache=n.blocks.some((n=>n.selected===!0))),this.anyBlockSelectedCache
/**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */}get selectedBlocks(){return this.Editor.BlockManager.blocks.filter((n=>n.selected))}prepare(){this.selection=new b,io.add({name:"CMD+A",handler:n=>{const{BlockManager:h,ReadOnly:p}=this.Editor;p.isEnabled?(n.preventDefault(),this.selectAllBlocks()):h.currentBlock&&this.handleCommandA(n)},on:this.Editor.UI.nodes.redactor})}toggleReadOnly(){b.get().removeAllRanges(),this.allBlocksSelected=!1
/**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */}unSelectBlockByIndex(n){const{BlockManager:h}=this.Editor;let p;p=isNaN(n)?h.currentBlock:h.getBlockByIndex(n),p.selected=!1,this.clearCache()
/**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */}clearSelection(n,h=!1){const{BlockManager:p,Caret:g,RectangleSelection:m}=this.Editor;this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1;const v=n&&n instanceof KeyboardEvent,x=v&&Mt(n.keyCode);if(this.anyBlockSelected&&v&&x&&!b.isSelectionExists){const h=p.removeSelectedBlocks();p.insertDefaultBlockAtIndex(h,!0),g.setToBlock(p.currentBlock),Oe((()=>{const h=n.key;g.insertContentAtCaretPosition(h.length>1?"":h)}),20)()}this.Editor.CrossBlockSelection.clear(n),this.anyBlockSelected&&!m.isRectActivated()?(h&&this.selection.restore(),this.allBlocksSelected=!1
/**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */):this.Editor.RectangleSelection.clearSelection()}copySelectedBlocks(n){n.preventDefault();const h=d.make("div");this.selectedBlocks.forEach((n=>{const p=q(n.holder.innerHTML,this.sanitizerConfig),g=d.make("p");g.innerHTML=p,h.appendChild(g)}));const p=Array.from(h.childNodes).map((n=>n.textContent)).join("\n\n"),g=h.innerHTML;return n.clipboardData.setData("text/plain",p),n.clipboardData.setData("text/html",g),Promise.all(this.selectedBlocks.map((n=>n.save()))).then((h=>{try{n.clipboardData.setData(this.Editor.Paste.MIME_TYPE,JSON.stringify(h))}catch{}}))
/**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */}selectBlockByIndex(n){const{BlockManager:h}=this.Editor,p=h.getBlockByIndex(n);p!==void 0&&this.selectBlock(p)}
/**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */selectBlock(n){this.selection.save(),b.get().removeAllRanges(),n.selected=!0,this.clearCache(),this.Editor.InlineToolbar.close()
/**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */}unselectBlock(n){n.selected=!1,this.clearCache()}clearCache(){this.anyBlockSelectedCache=null}destroy(){io.remove(this.Editor.UI.nodes.redactor,"CMD+A")}
/**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */handleCommandA(n){if(this.Editor.RectangleSelection.clearSelection(),d.isNativeInput(n.target)&&!this.readyToBlockSelection){this.readyToBlockSelection=!0;return}const h=this.Editor.BlockManager.getBlock(n.target),p=h.inputs;p.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:p.length!==1||this.needToSelectAll?this.needToSelectAll?(n.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1):this.readyToBlockSelection&&(n.preventDefault(),this.selectBlock(h),this.needToSelectAll=!0):this.needToSelectAll=!0}selectAllBlocks(){this.selection.save(),b.get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close()}}class Re extends y{
/**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
get positions(){return{START:"start",END:"end",DEFAULT:"default"}}static get CSS(){return{shadowCaret:"cdx-shadow-caret"}}
/**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */setToBlock(n,h=this.positions.DEFAULT,p=0){var g;const{BlockManager:m,BlockSelection:v}=this.Editor;if(v.clearSelection(),!n.focusable){(g=window.getSelection())==null||g.removeAllRanges(),v.selectBlock(n),m.currentBlock=n;return}let x;switch(h){case this.positions.START:x=n.firstInput;break;case this.positions.END:x=n.lastInput;break;default:x=n.currentInput}if(!x)return;const w=d.getDeepestNode(x,h===this.positions.END),E=d.getContentLength(w);switch(!0){case h===this.positions.START:p=0;break;case h===this.positions.END:case p>E:p=E;break}this.set(w,p),m.setCurrentBlockByChildNode(n.holder),m.currentBlock.currentInput=x
/**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */}setToInput(n,h=this.positions.DEFAULT,p=0){const{currentBlock:g}=this.Editor.BlockManager,m=d.getDeepestNode(n);switch(h){case this.positions.START:this.set(m,0);break;case this.positions.END:this.set(m,d.getContentLength(m));break;default:p&&this.set(m,p)}g.currentInput=n}
/**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */set(n,h=0){const{top:p,bottom:g}=b.setCursor(n,h),{innerHeight:m}=window;p<0?window.scrollBy(0,p-30):g>m&&window.scrollBy(0,g-m+30)}setToTheLastBlock(){const n=this.Editor.BlockManager.lastBlock;if(n)if(n.tool.isDefault&&n.isEmpty)this.setToBlock(n);else{const n=this.Editor.BlockManager.insertAtEnd();this.setToBlock(n)}}extractFragmentFromCaretPosition(){const n=b.get();if(n.rangeCount){const h=n.getRangeAt(0),p=this.Editor.BlockManager.currentBlock.currentInput;if(h.deleteContents(),p){if(d.isNativeInput(p)){const n=p,h=document.createDocumentFragment(),g=n.value.substring(0,n.selectionStart),m=n.value.substring(n.selectionStart);return h.textContent=m,n.value=g,h}{const n=h.cloneRange();return n.selectNodeContents(p),n.setStart(h.endContainer,h.endOffset),n.extractContents()}}}}
/**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */navigateNext(n=!1){const{BlockManager:h}=this.Editor,{currentBlock:p,nextBlock:g}=h;if(p===void 0)return!1;const{nextInput:m,currentInput:v}=p,x=v!==void 0?Ae(v):void 0;let w=g;const E=n||x||!p.focusable;if(m&&E)return this.setToInput(m,this.positions.START),!0;if(w===null){if(p.tool.isDefault||!E)return!1;w=h.insertAtEnd()}return!!E&&(this.setToBlock(w,this.positions.START),!0)}
/**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */navigatePrevious(n=!1){const{currentBlock:h,previousBlock:p}=this.Editor.BlockManager;if(!h)return!1;const{previousInput:g,currentInput:m}=h,v=m!==void 0?Me(m):void 0,x=n||v||!h.focusable;return g&&x?(this.setToInput(g,this.positions.END),!0):!(p===null||!x)&&(this.setToBlock(p,this.positions.END),!0)}
/**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */createShadow(n){const h=document.createElement("span");h.classList.add(Re.CSS.shadowCaret),n.insertAdjacentElement("beforeend",h)
/**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */}restoreCaret(n){const h=n.querySelector(`.${Re.CSS.shadowCaret}`);if(!h)return;(new b).expandToTag(h);const p=document.createRange();p.selectNode(h),p.extractContents()
/**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */}insertContentAtCaretPosition(n){const h=document.createDocumentFragment(),p=document.createElement("div"),g=b.get(),m=b.range;p.innerHTML=n,Array.from(p.childNodes).forEach((n=>h.appendChild(n))),h.childNodes.length===0&&h.appendChild(new Text);const v=h.lastChild;m.deleteContents(),m.insertNode(h);const x=document.createRange(),w=v.nodeType===Node.TEXT_NODE?v:v.firstChild;w!==null&&w.textContent!==null&&x.setStart(w,w.textContent.length),g.removeAllRanges(),g.addRange(x)}}class os extends y{constructor(){super(...arguments),this.onMouseUp=()=>{this.listeners.off(document,"mouseover",this.onMouseOver),this.listeners.off(document,"mouseup",this.onMouseUp)},this.onMouseOver=n=>{const{BlockManager:h,BlockSelection:p}=this.Editor;if(n.relatedTarget===null&&n.target===null)return;const g=h.getBlockByChildNode(n.relatedTarget)||this.lastSelectedBlock,m=h.getBlockByChildNode(n.target);if(!(!g||!m)&&m!==g){if(g===this.firstSelectedBlock){b.get().removeAllRanges(),g.selected=!0,m.selected=!0,p.clearCache();return}if(m===this.firstSelectedBlock){g.selected=!1,m.selected=!1,p.clearCache();return}this.Editor.InlineToolbar.close(),this.toggleBlocksSelectedState(g,m),this.lastSelectedBlock=m}}
/**
   * Module preparation
   *
   * @returns {Promise}
   */}async prepare(){this.listeners.on(document,"mousedown",(n=>{this.enableCrossBlockSelection(n)}))}
/**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */watchSelection(n){if(n.button!==p.LEFT)return;const{BlockManager:h}=this.Editor;this.firstSelectedBlock=h.getBlock(n.target),this.lastSelectedBlock=this.firstSelectedBlock,this.listeners.on(document,"mouseover",this.onMouseOver),this.listeners.on(document,"mouseup",this.onMouseUp)}get isCrossBlockSelectionStarted(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock&&this.firstSelectedBlock!==this.lastSelectedBlock}
/**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */toggleBlockSelectedState(n=!0){const{BlockManager:h,BlockSelection:p}=this.Editor;this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=h.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,p.clearCache(),b.get().removeAllRanges());const g=h.blocks.indexOf(this.lastSelectedBlock)+(n?1:-1),m=h.blocks[g];m&&(this.lastSelectedBlock.selected!==m.selected?(m.selected=!0,p.clearCache()):(this.lastSelectedBlock.selected=!1,p.clearCache()),this.lastSelectedBlock=m,this.Editor.InlineToolbar.close(),m.holder.scrollIntoView({block:"nearest"})
/**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */)}clear(n){const{BlockManager:p,BlockSelection:g,Caret:m}=this.Editor,v=p.blocks.indexOf(this.firstSelectedBlock),x=p.blocks.indexOf(this.lastSelectedBlock);if(g.anyBlockSelected&&v>-1&&x>-1&&n&&n instanceof KeyboardEvent)switch(n.keyCode){case h.DOWN:case h.RIGHT:m.setToBlock(p.blocks[Math.max(v,x)],m.positions.END);break;case h.UP:case h.LEFT:m.setToBlock(p.blocks[Math.min(v,x)],m.positions.START);break;default:m.setToBlock(p.blocks[Math.max(v,x)],m.positions.END)}this.firstSelectedBlock=this.lastSelectedBlock=null}
/**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */enableCrossBlockSelection(n){const{UI:h}=this.Editor;b.isCollapsed||this.Editor.BlockSelection.clearSelection(n),h.nodes.redactor.contains(n.target)?this.watchSelection(n):this.Editor.BlockSelection.clearSelection(n)
/**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */}toggleBlocksSelectedState(n,h){const{BlockManager:p,BlockSelection:g}=this.Editor,m=p.blocks.indexOf(n),v=p.blocks.indexOf(h),x=n.selected!==h.selected;for(let w=Math.min(m,v);w<=Math.max(m,v);w++){const m=p.blocks[w];m!==this.firstSelectedBlock&&m!==(x?n:h)&&(p.blocks[w].selected=!p.blocks[w].selected,g.clearCache())}}}class is extends y{constructor(){super(...arguments),this.isStartedAtEditor=!1
/**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */}toggleReadOnly(n){n?this.disableModuleBindings():this.enableModuleBindings()}enableModuleBindings(){const{UI:n}=this.Editor;this.readOnlyMutableListeners.on(n.nodes.holder,"drop",(async n=>{await this.processDrop(n)}),!0),this.readOnlyMutableListeners.on(n.nodes.holder,"dragstart",(()=>{this.processDragStart()})),this.readOnlyMutableListeners.on(n.nodes.holder,"dragover",(n=>{this.processDragOver(n)}),!0)}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}
/**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */async processDrop(n){const{BlockManager:h,Paste:p,Caret:g}=this.Editor;n.preventDefault(),h.blocks.forEach((n=>{n.dropTarget=!1})),b.isAtEditor&&!b.isCollapsed&&this.isStartedAtEditor&&document.execCommand("delete"),this.isStartedAtEditor=!1;const m=h.setCurrentBlockByChildNode(n.target);if(m)this.Editor.Caret.setToBlock(m,g.positions.END);else{const n=h.setCurrentBlockByChildNode(h.lastBlock.holder);this.Editor.Caret.setToBlock(n,g.positions.END)}await p.processDataTransfer(n.dataTransfer,!0)}processDragStart(){b.isAtEditor&&!b.isCollapsed&&(this.isStartedAtEditor=!0),this.Editor.InlineToolbar.close()
/**
   * @param {DragEvent} dragEvent - drag event
   */}processDragOver(n){n.preventDefault()}}const vi=180,ki=400;class rs extends y{
/**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
constructor({config:n,eventsDispatcher:h}){super({config:n,eventsDispatcher:h}),this.disabled=!1,this.batchingTimeout=null,this.batchingOnChangeQueue=new Map,this.batchTime=ki,this.mutationObserver=new MutationObserver((n=>{this.redactorChanged(n)})),this.eventsDispatcher.on(N,(n=>{this.particularBlockChanged(n.event)})),this.eventsDispatcher.on(P,(()=>{this.disable()})),this.eventsDispatcher.on(H,(()=>{this.enable()}))}enable(){this.mutationObserver.observe(this.Editor.UI.nodes.redactor,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.disabled=!1}disable(){this.mutationObserver.disconnect(),this.disabled=!0
/**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */}particularBlockChanged(n){this.disabled||!O(this.config.onChange)||(this.batchingOnChangeQueue.set(`block:${n.detail.target.id}:event:${n.type}`,n),this.batchingTimeout&&clearTimeout(this.batchingTimeout),this.batchingTimeout=setTimeout((()=>{let n;n=this.batchingOnChangeQueue.size===1?this.batchingOnChangeQueue.values().next().value:Array.from(this.batchingOnChangeQueue.values()),this.config.onChange&&this.config.onChange(this.Editor.API.methods,n),this.batchingOnChangeQueue.clear()}),this.batchTime)
/**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */)}redactorChanged(n){this.eventsDispatcher.emit(L,{mutations:n})}}const yi=class lo extends y{constructor(){super(...arguments),this.MIME_TYPE="application/x-editor-js",this.toolsTags={},this.tagsByTool={},this.toolsPatterns=[],this.toolsFiles={},this.exceptionList=[],this.processTool=n=>{try{const h=n.create({},{},!1);if(n.pasteConfig===!1){this.exceptionList.push(n.name);return}if(!O(h.onPaste))return;this.getTagsConfig(n),this.getFilesConfig(n),this.getPatternsConfig(n)}catch(h){g(`Paste handling for «${n.name}» Tool hasn't been set up because of the error`,"warn",h)}},this.handlePasteEvent=async n=>{const{BlockManager:h,Toolbar:p}=this.Editor,g=h.setCurrentBlockByChildNode(n.target);!g||this.isNativeBehaviour(n.target)&&!n.clipboardData.types.includes("Files")||g&&this.exceptionList.includes(g.name)||(n.preventDefault(),this.processDataTransfer(n.clipboardData),p.close())}}async prepare(){this.processTools()}
/**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */toggleReadOnly(n){n?this.unsetCallback():this.setCallback()}
/**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */async processDataTransfer(n,h=!1){const{Tools:p}=this.Editor,g=n.types;if((g.includes?g.includes("Files"):g.contains("Files"))&&!V(this.toolsFiles)){await this.processFiles(n.files);return}const m=n.getData(this.MIME_TYPE),v=n.getData("text/plain");let x=n.getData("text/html");if(m)try{this.insertEditorJSData(JSON.parse(m));return}catch{}h&&v.trim()&&x.trim()&&(x="<p>"+(x.trim()?x:v)+"</p>");const w=Object.keys(this.toolsTags).reduce(((n,h)=>(n[h.toLowerCase()]=this.toolsTags[h].sanitizationConfig??{},n)),{}),E=Object.assign({},w,p.getAllInlineToolsSanitizeConfig(),{br:{}}),B=q(x,E);B.trim()&&B.trim()!==v&&d.isHTMLString(B)?await this.processText(B,!0):await this.processText(v)}
/**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */async processText(n,h=!1){const{Caret:p,BlockManager:g}=this.Editor,m=h?this.processHTML(n):this.processPlain(n);if(!m.length)return;if(m.length===1){m[0].isBlock?this.processSingleBlock(m.pop()):this.processInlinePaste(m.pop());return}const v=g.currentBlock&&g.currentBlock.tool.isDefault&&g.currentBlock.isEmpty;m.map((async(n,h)=>this.insertBlock(n,h===0&&v))),g.currentBlock&&p.setToBlock(g.currentBlock,p.positions.END)}setCallback(){this.listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}unsetCallback(){this.listeners.off(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}processTools(){const n=this.Editor.Tools.blockTools;Array.from(n.values()).forEach(this.processTool)}
/**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */collectTagNames(n){return Q(n)?[n]:R(n)?Object.keys(n):[]}
/**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */getTagsConfig(n){if(n.pasteConfig===!1)return;const h=n.pasteConfig.tags||[],p=[];h.forEach((h=>{const m=this.collectTagNames(h);p.push(...m),m.forEach((p=>{if(Object.prototype.hasOwnProperty.call(this.toolsTags,p)){g(`Paste handler for «${n.name}» Tool on «${p}» tag is skipped because it is already used by «${this.toolsTags[p].tool.name}» Tool.`,"warn");return}const m=R(h)?h[p]:null;this.toolsTags[p.toUpperCase()]={tool:n,sanitizationConfig:m}}))})),this.tagsByTool[n.name]=p.map((n=>n.toUpperCase()))
/**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */}getFilesConfig(n){if(n.pasteConfig===!1)return;const{files:h={}}=n.pasteConfig;let{extensions:p,mimeTypes:m}=h;!p&&!m||(p&&!Array.isArray(p)&&(g(`«extensions» property of the onDrop config for «${n.name}» Tool should be an array`),p=[]),m&&!Array.isArray(m)&&(g(`«mimeTypes» property of the onDrop config for «${n.name}» Tool should be an array`),m=[]),m&&(m=m.filter((h=>!!To(h)||(g(`MIME type value «${h}» for the «${n.name}» Tool is not a valid MIME type`,"warn"),!1)))),this.toolsFiles[n.name]={extensions:p||[],mimeTypes:m||[]}
/**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */)}getPatternsConfig(n){n.pasteConfig===!1||!n.pasteConfig.patterns||V(n.pasteConfig.patterns)||Object.entries(n.pasteConfig.patterns).forEach((([h,p])=>{p instanceof RegExp||g(`Pattern ${p} for «${n.name}» Tool is skipped because it should be a Regexp instance.`,"warn"),this.toolsPatterns.push({key:h,pattern:p,tool:n})}))}
/**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */isNativeBehaviour(n){return d.isNativeInput(n)}
/**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */async processFiles(n){const{BlockManager:h}=this.Editor;let p;p=await Promise.all(Array.from(n).map((n=>this.processFile(n)))),p=p.filter((n=>!!n));const g=h.currentBlock.tool.isDefault&&h.currentBlock.isEmpty;p.forEach(((n,p)=>{h.paste(n.type,n.event,p===0&&g)}))}
/**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */async processFile(n){const h=Bo(n),p=Object.entries(this.toolsFiles).find((([p,{mimeTypes:g,extensions:m}])=>{const[v,x]=n.type.split("/"),w=m.find((n=>n.toLowerCase()===h.toLowerCase())),E=g.find((n=>{const[h,p]=n.split("/");return h===v&&(p===x||p==="*")}));return!!w||!!E}));if(!p)return;const[g]=p;return{event:this.composePasteEvent("file",{file:n}),type:g}}
/**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */processHTML(n){const{Tools:h}=this.Editor,p=d.make("DIV");return p.innerHTML=n,this.getNodes(p).map((n=>{let p,g=h.defaultTool,m=!1;switch(n.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:p=d.make("div"),p.appendChild(n);break;case Node.ELEMENT_NODE:p=n,m=!0,this.toolsTags[p.tagName]&&(g=this.toolsTags[p.tagName].tool);break}const{tags:v}=g.pasteConfig||{tags:[]},x=v.reduce(((n,h)=>(this.collectTagNames(h).forEach((p=>{const g=R(h)?h[p]:null;n[p.toLowerCase()]=g||{}})),n)),{}),w=Object.assign({},x,g.baseSanitizeConfig);if(p.tagName.toLowerCase()==="table"){const n=q(p.outerHTML,w);p=d.make("div",void 0,{innerHTML:n}).firstChild}else p.innerHTML=q(p.innerHTML,w);const E=this.composePasteEvent("tag",{data:p});return{content:p,isBlock:m,tool:g.name,event:E}})).filter((n=>{const h=d.isEmpty(n.content),p=d.isSingleTag(n.content);return!h||p}))
/**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */}processPlain(n){const{defaultBlock:h}=this.config;if(!n)return[];const p=h;return n.split(/\r?\n/).filter((n=>n.trim())).map((n=>{const h=d.make("div");h.textContent=n;const g=this.composePasteEvent("tag",{data:h});return{content:h,tool:p,isBlock:!1,event:g}}))}
/**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */async processSingleBlock(n){const{Caret:h,BlockManager:p}=this.Editor,{currentBlock:g}=p;g&&n.tool===g.name&&d.containsOnlyInlineElements(n.content.innerHTML)?h.insertContentAtCaretPosition(n.content.innerHTML):this.insertBlock(n,(g==null?void 0:g.tool.isDefault)&&g.isEmpty)}
/**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */async processInlinePaste(n){const{BlockManager:h,Caret:p}=this.Editor,{content:g}=n;if(h.currentBlock&&h.currentBlock.tool.isDefault&&g.textContent.length<lo.PATTERN_PROCESSING_MAX_LENGTH){const n=await this.processPattern(g.textContent);if(n){const g=h.currentBlock&&h.currentBlock.tool.isDefault&&h.currentBlock.isEmpty,m=h.paste(n.tool,n.event,g);p.setToBlock(m,p.positions.END);return}}if(h.currentBlock&&h.currentBlock.currentInput){const n=h.currentBlock.tool.baseSanitizeConfig;document.execCommand("insertHTML",!1,q(g.innerHTML,n))}else this.insertBlock(n)}
/**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */async processPattern(n){const h=this.toolsPatterns.find((h=>{const p=h.pattern.exec(n);return!!p&&n===p.shift()}));return h?{event:this.composePasteEvent("pattern",{key:h.key,data:n}),tool:h.tool.name}:void 0}
/**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */insertBlock(n,h=!1){const{BlockManager:p,Caret:g}=this.Editor,{currentBlock:m}=p;let v;h&&m&&m.isEmpty?(v=p.paste(n.tool,n.event,!0),g.setToBlock(v,g.positions.END)):(v=p.paste(n.tool,n.event),g.setToBlock(v,g.positions.END)
/**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */)}insertEditorJSData(n){const{BlockManager:h,Caret:p,Tools:g}=this.Editor;it(n,(n=>g.blockTools.get(n).sanitizeConfig)).forEach((({tool:n,data:g},m)=>{let v=!1;m===0&&(v=h.currentBlock&&h.currentBlock.tool.isDefault&&h.currentBlock.isEmpty);const x=h.insert({tool:n,data:g,replace:v});p.setToBlock(x,p.positions.END)}))}
/**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */processElementNode(n,h,p){const g=Object.keys(this.toolsTags),m=n,{tool:v}=this.toolsTags[m.tagName]||{},x=this.tagsByTool[v==null?void 0:v.name]||[],w=g.includes(m.tagName),E=d.blockElements.includes(m.tagName.toLowerCase()),B=Array.from(m.children).some((({tagName:n})=>g.includes(n)&&!x.includes(n))),T=Array.from(m.children).some((({tagName:n})=>d.blockElements.includes(n.toLowerCase())));return E||w||B?w&&!B||E&&!T&&!B?[...h,p,m]:void 0:(p.appendChild(m),[...h,p])}
/**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */getNodes(n){const h=Array.from(n.childNodes);let p;const i=(n,h)=>{if(d.isEmpty(h)&&!d.isSingleTag(h))return n;const g=n[n.length-1];let m=new DocumentFragment;switch(g&&d.isFragment(g)&&(m=n.pop()),h.nodeType){case Node.ELEMENT_NODE:if(p=this.processElementNode(h,n,m),p)return p;break;case Node.TEXT_NODE:return m.appendChild(h),[...n,m];default:return[...n,m]}return[...n,...Array.from(h.childNodes).reduce(i,[])]};return h.reduce(i,[])}
/**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */composePasteEvent(n,h){return new CustomEvent(n,{detail:h})}};yi.PATTERN_PROCESSING_MAX_LENGTH=450;let xi=yi;class as extends y{constructor(){super(...arguments),this.toolsDontSupportReadOnly=[],this.readOnlyEnabled=!1}get isEnabled(){return this.readOnlyEnabled}async prepare(){const{Tools:n}=this.Editor,{blockTools:h}=n,p=[];Array.from(h.entries()).forEach((([n,h])=>{h.isReadOnlySupported||p.push(n)})),this.toolsDontSupportReadOnly=p,this.config.readOnly&&p.length>0&&this.throwCriticalError(),this.toggle(this.config.readOnly,!0)
/**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param state - (optional) read-only state or toggle
   * @param isInitial - (optional) true when editor is initializing
   */}async toggle(n=!this.readOnlyEnabled,h=!1){n&&this.toolsDontSupportReadOnly.length>0&&this.throwCriticalError();const p=this.readOnlyEnabled;this.readOnlyEnabled=n;for(const h in this.Editor)this.Editor[h].toggleReadOnly&&this.Editor[h].toggleReadOnly(n);if(p===n)return this.readOnlyEnabled;if(h)return this.readOnlyEnabled;this.Editor.ModificationsObserver.disable();const g=await this.Editor.Saver.save();return await this.Editor.BlockManager.clear(),await this.Editor.Renderer.render(g.blocks),this.Editor.ModificationsObserver.enable(),this.readOnlyEnabled}throwCriticalError(){throw new Pt(`To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`)}}class xe extends y{constructor(){super(...arguments),this.isRectSelectionActivated=!1,this.SCROLL_SPEED=3,this.HEIGHT_OF_SCROLL_ZONE=40,this.BOTTOM_SCROLL_ZONE=1,this.TOP_SCROLL_ZONE=2,this.MAIN_MOUSE_BUTTON=0,this.mousedown=!1,this.isScrolling=!1,this.inScrollZone=null,this.startX=0,this.startY=0,this.mouseX=0,this.mouseY=0,this.stackOfSelected=[],this.listenerIds=[]
/**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */}static get CSS(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"}}prepare(){this.enableModuleBindings()}
/**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */startSelection(n,h){const p=document.elementFromPoint(n-window.pageXOffset,h-window.pageYOffset);p.closest(`.${this.Editor.Toolbar.CSS.toolbar}`)||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[]);const g=[`.${D.CSS.content}`,`.${this.Editor.Toolbar.CSS.toolbar}`,`.${this.Editor.InlineToolbar.CSS.inlineToolbar}`],m=p.closest("."+this.Editor.UI.CSS.editorWrapper),v=g.some((n=>!!p.closest(n)));!m||v||(this.mousedown=!0,this.startX=n,this.startY=h)}endSelection(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none"}isRectActivated(){return this.isRectSelectionActivated}clearSelection(){this.isRectSelectionActivated=!1}enableModuleBindings(){const{container:n}=this.genHTML();this.listeners.on(n,"mousedown",(n=>{this.processMouseDown(n)}),!1),this.listeners.on(document.body,"mousemove",Ve((n=>{this.processMouseMove(n)}),10),{passive:!0}),this.listeners.on(document.body,"mouseleave",(()=>{this.processMouseLeave()})),this.listeners.on(window,"scroll",Ve((n=>{this.processScroll(n)}),10),{passive:!0}),this.listeners.on(document.body,"mouseup",(()=>{this.processMouseUp()}),!1)
/**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */}processMouseDown(n){n.button===this.MAIN_MOUSE_BUTTON&&(n.target.closest(d.allInputsSelector)!==null||this.startSelection(n.pageX,n.pageY))}
/**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */processMouseMove(n){this.changingRectangle(n),this.scrollByZones(n.clientY)}processMouseLeave(){this.clearSelection(),this.endSelection()
/**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */}processScroll(n){this.changingRectangle(n)}processMouseUp(){this.clearSelection(),this.endSelection()
/**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */}scrollByZones(n){this.inScrollZone=null,n<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-n<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0
/**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */):this.isScrolling=!1}genHTML(){const{UI:n}=this.Editor,h=n.nodes.holder.querySelector("."+n.CSS.editorWrapper),p=d.make("div",xe.CSS.overlay,{}),g=d.make("div",xe.CSS.overlayContainer,{}),m=d.make("div",xe.CSS.rect,{});return g.appendChild(m),p.appendChild(g),h.appendChild(p),this.overlayRectangle=m,{container:h,overlay:p}
/**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */}scrollVertical(n){if(!(this.inScrollZone&&this.mousedown))return;const h=window.pageYOffset;window.scrollBy(0,n),this.mouseY+=window.pageYOffset-h,setTimeout((()=>{this.scrollVertical(n)}),0)
/**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */}changingRectangle(n){if(!this.mousedown)return;n.pageY!==void 0&&(this.mouseX=n.pageX,this.mouseY=n.pageY);const{rightPos:h,leftPos:p,index:g}=this.genInfoForMouseSelection(),m=this.startX>h&&this.mouseX>h,v=this.startX<p&&this.mouseX<p;this.rectCrossesBlocks=!(m||v),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),this.Editor.Toolbar.close(),g!==void 0&&(this.trySelectNextBlock(g),this.inverseSelection(),b.get().removeAllRanges())}shrinkRectangleToPoint(){this.overlayRectangle.style.left=this.startX-window.pageXOffset+"px",this.overlayRectangle.style.top=this.startY-window.pageYOffset+"px",this.overlayRectangle.style.bottom=`calc(100% - ${this.startY-window.pageYOffset}px`,this.overlayRectangle.style.right=`calc(100% - ${this.startX-window.pageXOffset}px`}inverseSelection(){const n=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;if(this.rectCrossesBlocks&&!n)for(const n of this.stackOfSelected)this.Editor.BlockSelection.selectBlockByIndex(n);if(!this.rectCrossesBlocks&&n)for(const n of this.stackOfSelected)this.Editor.BlockSelection.unSelectBlockByIndex(n)}updateRectangleSize(){this.mouseY>=this.startY?(this.overlayRectangle.style.top=this.startY-window.pageYOffset+"px",this.overlayRectangle.style.bottom=`calc(100% - ${this.mouseY-window.pageYOffset}px`):(this.overlayRectangle.style.bottom=`calc(100% - ${this.startY-window.pageYOffset}px`,this.overlayRectangle.style.top=this.mouseY-window.pageYOffset+"px"),this.mouseX>=this.startX?(this.overlayRectangle.style.left=this.startX-window.pageXOffset+"px",this.overlayRectangle.style.right=`calc(100% - ${this.mouseX-window.pageXOffset}px`):(this.overlayRectangle.style.right=`calc(100% - ${this.startX-window.pageXOffset}px`,this.overlayRectangle.style.left=this.mouseX-window.pageXOffset+"px"
/**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */)}genInfoForMouseSelection(){const n=document.body.offsetWidth/2,h=this.mouseY-window.pageYOffset,p=document.elementFromPoint(n,h),g=this.Editor.BlockManager.getBlockByChildNode(p);let m;g!==void 0&&(m=this.Editor.BlockManager.blocks.findIndex((n=>n.holder===g.holder)));const v=this.Editor.BlockManager.lastBlock.holder.querySelector("."+D.CSS.content),x=Number.parseInt(window.getComputedStyle(v).width,10)/2,w=n-x,E=n+x;return{index:m,leftPos:w,rightPos:E}}
/**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */addBlockInSelection(n){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(n),this.stackOfSelected.push(n)
/**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */}trySelectNextBlock(n){const h=this.stackOfSelected[this.stackOfSelected.length-1]===n,p=this.stackOfSelected.length,g=1,m=-1,v=0;if(h)return;const x=this.stackOfSelected[p-1]-this.stackOfSelected[p-2]>0;let w=v;p>1&&(w=x?g:m);const E=n>this.stackOfSelected[p-1]&&w===g,B=n<this.stackOfSelected[p-1]&&w===m,T=!(E||B||w===v);if(!T&&(n>this.stackOfSelected[p-1]||this.stackOfSelected[p-1]===void 0)){let h=this.stackOfSelected[p-1]+1||n;for(h;h<=n;h++)this.addBlockInSelection(h);return}if(!T&&n<this.stackOfSelected[p-1]){for(let h=this.stackOfSelected[p-1]-1;h>=n;h--)this.addBlockInSelection(h);return}if(!T)return;let I,M=p-1;for(I=n>this.stackOfSelected[p-1]?()=>n>this.stackOfSelected[M]:()=>n<this.stackOfSelected[M];I();)this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[M]),this.stackOfSelected.pop(),M--}}class cs extends y{
/**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
async render(n){return new Promise((h=>{const{Tools:p,BlockManager:v}=this.Editor;if(n.length===0)v.insert();else{const h=n.map((({type:n,data:h,tunes:x,id:w})=>{p.available.has(n)===!1&&(m(`Tool «${n}» is not found. Check 'tools' property at the Editor.js config.`,"warn"),h=this.composeStubDataForTool(n,h,w),n=p.stubTool);let E;try{E=v.composeBlock({id:w,tool:n,data:h,tunes:x})}catch(m){g(`Block «${n}» skipped because of plugins error`,"error",{data:h,error:m}),h=this.composeStubDataForTool(n,h,w),n=p.stubTool,E=v.composeBlock({id:w,tool:n,data:h,tunes:x})}return E}));v.insertMany(h)}window.requestIdleCallback((()=>{h()}),{timeout:2e3})}))}
/**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */composeStubDataForTool(n,h,p){const{Tools:g}=this.Editor;let m=n;if(g.unavailable.has(n)){const h=g.unavailable.get(n).toolbox;h!==void 0&&h[0].title!==void 0&&(m=h[0].title)}return{savedData:{id:p,type:n,data:h},title:m}}}class ds extends y{
/**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
async save(){const{BlockManager:n,Tools:h}=this.Editor,p=n.blocks,g=[];try{p.forEach((n=>{g.push(this.getSavedData(n))}));const n=await Promise.all(g),m=await it(n,(n=>h.blockTools.get(n).sanitizeConfig));return this.makeOutput(m)}catch(n){m("Saving failed due to the Error %o","error",n)}}
/**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */async getSavedData(n){const h=await n.save(),p=h&&await n.validate(h.data);return{...h,isValid:p}}
/**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */makeOutput(n){const h=[];return n.forEach((({id:n,tool:p,data:m,tunes:v,isValid:x})=>{if(!x){g(`Block «${p}» skipped because saved data is invalid`);return}if(p===this.Editor.Tools.stubTool){h.push(m);return}const w={id:n,type:p,data:m,...!V(v)&&{tunes:v}};h.push(w)})),{time:+new Date,blocks:h,version:"2.30.7"}}}(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")),document.head.appendChild(n)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();const wi='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';function us(n){const h=document.createElement("div");h.innerHTML=n.trim();const p=document.createDocumentFragment();return p.append(...Array.from(h.childNodes)),p
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */}class ht{
/**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
static get DEFAULT_PLACEHOLDER(){return""}
/**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */constructor({data:n,config:h,api:p,readOnly:g}){this.api=p,this.readOnly=g,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=h.placeholder?h.placeholder:ht.DEFAULT_PLACEHOLDER,this._data=n??{},this._element=null,this._preserveBlank=h.preserveBlank??!1
/**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */}onKeyUp(n){if(n.code!=="Backspace"&&n.code!=="Delete"||!this._element)return;const{textContent:h}=this._element;h===""&&(this._element.innerHTML="")}
/**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */drawView(){const n=document.createElement("DIV");return n.classList.add(this._CSS.wrapper,this._CSS.block),n.contentEditable="false",n.dataset.placeholderActive=this.api.i18n.t(this._placeholder),this._data.text&&(n.innerHTML=this._data.text),this.readOnly||(n.contentEditable="true",n.addEventListener("keyup",this.onKeyUp)),n
/**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */}render(){return this._element=this.drawView(),this._element
/**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */}merge(n){if(!this._element)return;this._data.text+=n.text;const h=us(n.text);this._element.appendChild(h),this._element.normalize()
/**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */}validate(n){return!(n.text.trim()===""&&!this._preserveBlank)}
/**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */save(n){return{text:n.innerHTML}}
/**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */onPaste(n){const h={text:n.detail.data.innerHTML};this._data=h,window.requestAnimationFrame((()=>{this._element&&(this._element.innerHTML=this._data.text||"")}))
/**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */}static get conversionConfig(){return{export:"text",import:"text"}}
/**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */static get sanitize(){return{text:{br:!0}}}
/**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */static get isReadOnlySupported(){return!0}
/**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */static get pasteConfig(){return{tags:["P"]}}
/**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */static get toolbox(){return{icon:wi,title:"Text"}}}class ut{constructor(){this.commandName="bold"}
/**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */static get sanitize(){return{b:{}}}render(){return{icon:me,name:"bold",onActivate:()=>{document.execCommand(this.commandName)},isActive:()=>document.queryCommandState(this.commandName)}}
/**
   * Set a shortcut
   *
   * @returns {boolean}
   */get shortcut(){return"CMD+B"}}ut.isInline=!0;ut.title="Bold";class pt{constructor(){this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}
/**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */}static get sanitize(){return{i:{}}}render(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.innerHTML=He,this.nodes.button}surround(){document.execCommand(this.commandName)}checkState(){const n=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,n),n}get shortcut(){return"CMD+I"}}pt.isInline=!0;pt.title="Italic";class ft{
/**
   * @param api - Editor.js API
   */
constructor({api:n}){this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.notifier=n.notifier,this.i18n=n.i18n,this.selection=new b
/**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */}static get sanitize(){return{a:{href:!0,target:"_blank",rel:"nofollow"}}}render(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.innerHTML=Ue,this.nodes.button}renderActions(){return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder=this.i18n.t("Add a link"),this.nodes.input.enterKeyHint="done",this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",(n=>{n.keyCode===this.ENTER_KEY&&this.enterPressed(n)})),this.nodes.input
/**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */}surround(n){if(n){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());const n=this.selection.findParentTag("A");if(n){this.selection.expandToTag(n),this.unlink(),this.closeActions(),this.checkState(),this.toolbar.close();return}}this.toggleActions()}checkState(){const n=this.selection.findParentTag("A");if(n){this.nodes.button.innerHTML=We,this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();const h=n.getAttribute("href");this.nodes.input.value=h!=="null"?h:"",this.selection.save()}else this.nodes.button.innerHTML=Ue,this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!n}clear(){this.closeActions()}get shortcut(){return"CMD+K"}toggleActions(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}
/**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */openActions(n=!1){this.nodes.input.classList.add(this.CSS.inputShowed),n&&this.nodes.input.focus(),this.inputOpened=!0
/**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */}closeActions(n=!0){if(this.selection.isFakeBackgroundEnabled){const n=new b;n.save(),this.selection.restore(),this.selection.removeFakeBackground(),n.restore()}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",n&&this.selection.clearSaved(),this.inputOpened=!1
/**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */}enterPressed(n){let h=this.nodes.input.value||"";h.trim()?this.validateURL(h)?(h=this.prepareLink(h),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(h),n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),this.selection.collapseToEnd(),this.inlineToolbar.close()
/**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */):(this.notifier.show({message:"Pasted link is not valid.",style:"error"}),g("Incorrect Link pasted","warn",h)):(this.selection.restore(),this.unlink(),n.preventDefault(),this.closeActions())}validateURL(n){return!/\s/.test(n)}
/**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */prepareLink(n){return n=n.trim(),n=this.addProtocol(n),n
/**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */}addProtocol(n){if(/^(\w+):(\/\/)?/.test(n))return n;const h=/^\/[^/\s]/.test(n),p=n.substring(0,1)==="#",g=/^\/\/[^/\s]/.test(n);return!h&&!p&&!g&&(n="http://"+n),n
/**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */}insertLink(n){const h=this.selection.findParentTag("A");h&&this.selection.expandToTag(h),document.execCommand(this.commandLink,!1,n)}unlink(){document.execCommand(this.commandUnlink)}}ft.isInline=!0;ft.title="Link";class ao{
/**
   * @param api - Editor.js API
   */
constructor({api:n}){this.i18nAPI=n.i18n,this.blocksAPI=n.blocks,this.selectionAPI=n.selection,this.toolsAPI=n.tools,this.caretAPI=n.caret}async render(){const n=b.get(),h=this.blocksAPI.getBlockByElement(n.anchorNode);if(h===void 0)return[];const p=this.toolsAPI.getBlockTools(),g=await zt(h,p);if(g.length===0)return[];const m=g.reduce(((n,p)=>{var g;return(g=p.toolbox)==null||g.forEach((g=>{n.push({icon:g.icon,title:A.t(de.toolNames,g.title),name:p.name,closeOnActivate:!0,onActivate:async()=>{const n=await this.blocksAPI.convert(h.id,p.name,g.data);this.caretAPI.setToBlock(n,"end")}})})),n}),[]),v=await h.getActiveToolboxEntry(),x=v!==void 0?v.icon:Ye,w=!pe();return{icon:x,name:"convert-to",hint:{title:this.i18nAPI.t("Convert to")},children:{searchable:w,items:m,onOpen:()=>{w&&(this.selectionAPI.setFakeBackground(),this.selectionAPI.save())},onClose:()=>{w&&(this.selectionAPI.restore(),this.selectionAPI.removeFakeBackground())}}}}}ao.isInline=!0;class co{
/**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
constructor({data:n,api:h}){this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.api=h,this.title=n.title||this.api.i18n.t("Error"),this.subtitle=this.api.i18n.t("The block can not be displayed correctly."),this.savedData=n.savedData,this.wrapper=this.make()
/**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */}render(){return this.wrapper}
/**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */save(){return this.savedData}
/**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */make(){const n=d.make("div",this.CSS.wrapper),h=Ge,p=d.make("div",this.CSS.info),g=d.make("div",this.CSS.title,{textContent:this.title}),m=d.make("div",this.CSS.subtitle,{textContent:this.subtitle});return n.innerHTML=h,p.appendChild(g),p.appendChild(m),n.appendChild(p),n}}co.isReadOnlySupported=!0;class ps extends dt{constructor(){super(...arguments),this.type=Po.Inline}get title(){return this.constructable[Xo.Title]}create(){return new this.constructable({api:this.api,config:this.settings})}}class fs extends dt{constructor(){super(...arguments),this.type=Po.Tune
/**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */}create(n,h){return new this.constructable({api:this.api,config:this.settings,block:h,data:n})}}class F extends Map{get blockTools(){const n=Array.from(this.entries()).filter((([,n])=>n.isBlock()));return new F(n)}get inlineTools(){const n=Array.from(this.entries()).filter((([,n])=>n.isInline()));return new F(n)}get blockTunes(){const n=Array.from(this.entries()).filter((([,n])=>n.isTune()));return new F(n)}get internalTools(){const n=Array.from(this.entries()).filter((([,n])=>n.isInternal));return new F(n)}get externalTools(){const n=Array.from(this.entries()).filter((([,n])=>!n.isInternal));return new F(n)}}var Ei=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,ho=(n,h,p,g)=>{for(var m,v=g>1?void 0:g?Bi(h,p):h,x=n.length-1;x>=0;x--)(m=n[x])&&(v=(g?m(h,p,v):m(v))||v);return g&&v&&Ei(h,p,v),v};class gt extends dt{constructor(){super(...arguments),this.type=Po.Block,this.inlineTools=new F,this.tunes=new F
/**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */}create(n,h,p){return new this.constructable({data:n,block:h,readOnly:p,api:this.api,config:this.settings})}get isReadOnlySupported(){return this.constructable[Vo.IsReadOnlySupported]===!0}get isLineBreaksEnabled(){return this.constructable[Vo.IsEnabledLineBreaks]}get toolbox(){const n=this.constructable[Vo.Toolbox],h=this.config[Do.Toolbox];if(!V(n)&&h!==!1)return h?Array.isArray(n)?Array.isArray(h)?h.map(((h,p)=>{const g=n[p];return g?{...g,...h}:h})):[h]:Array.isArray(h)?h:[{...n,...h}]:Array.isArray(n)?n:[n]}get conversionConfig(){return this.constructable[Vo.ConversionConfig]}get enabledInlineTools(){return this.config[Do.EnabledInlineTools]||!1}get enabledBlockTunes(){return this.config[Do.EnabledBlockTunes]}get pasteConfig(){return this.constructable[Vo.PasteConfig]??{}}get sanitizeConfig(){const n=super.sanitizeConfig,h=this.baseSanitizeConfig;if(V(n))return h;const p={};for(const g in n)if(Object.prototype.hasOwnProperty.call(n,g)){const m=n[g];R(m)?p[g]=Object.assign({},h,m):p[g]=m}return p}get baseSanitizeConfig(){const n={};return Array.from(this.inlineTools.values()).forEach((h=>Object.assign(n,h.sanitizeConfig))),Array.from(this.tunes.values()).forEach((h=>Object.assign(n,h.sanitizeConfig))),n}}ho([ue],gt.prototype,"sanitizeConfig",1);ho([ue],gt.prototype,"baseSanitizeConfig",1);class bs{
/**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
constructor(n,h,p){this.api=p,this.config=n,this.editorConfig=h
/**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */}get(n){const{class:h,isInternal:p=!1,...g}=this.config[n],m=this.getConstructor(h),v=h[Qo.IsTune];return new m({name:n,constructable:h,config:g,api:this.api.getMethodsForTool(n,v),isDefault:n===this.editorConfig.defaultBlock,defaultPlaceholder:this.editorConfig.placeholder,isInternal:p})}
/**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */getConstructor(n){switch(!0){case n[Xo.IsInline]:return ps;case n[Qo.IsTune]:return fs;default:return gt}}}class uo{
/**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
constructor({api:n}){this.CSS={animation:"wobble"},this.api=n}render(){return{icon:be,title:this.api.i18n.t("Move down"),onActivate:()=>this.handleClick(),name:"move-down"}}handleClick(){const n=this.api.blocks.getCurrentBlockIndex(),h=this.api.blocks.getBlockByIndex(n+1);if(!h)throw new Error("Unable to move Block down since it is already the last");const p=h.holder,g=p.getBoundingClientRect();let m=Math.abs(window.innerHeight-p.offsetHeight);g.top<window.innerHeight&&(m=window.scrollY+p.offsetHeight),window.scrollTo(0,m),this.api.blocks.move(n+1),this.api.toolbar.toggleBlockSettings(!0)}}uo.isTune=!0;class po{
/**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
constructor({api:n}){this.api=n}render(){return{icon:Ie,title:this.api.i18n.t("Delete"),name:"delete",confirmation:{title:this.api.i18n.t("Click to delete"),onActivate:()=>this.handleClick()}}}handleClick(){this.api.blocks.delete()}}po.isTune=!0;class fo{
/**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
constructor({api:n}){this.CSS={animation:"wobble"},this.api=n}render(){return{icon:Se,title:this.api.i18n.t("Move up"),onActivate:()=>this.handleClick(),name:"move-up"}}handleClick(){const n=this.api.blocks.getCurrentBlockIndex(),h=this.api.blocks.getBlockByIndex(n),p=this.api.blocks.getBlockByIndex(n-1);if(n===0||!h||!p)throw new Error("Unable to move Block up since it is already the first");const g=h.holder,m=p.holder,v=g.getBoundingClientRect(),x=m.getBoundingClientRect();let w;w=x.top>0?Math.abs(v.top)-Math.abs(x.top):Math.abs(v.top)+x.height,window.scrollBy(0,-1*w),this.api.blocks.move(n-1),this.api.toolbar.toggleBlockSettings(!0)}}fo.isTune=!0;var Ci=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,ws=(n,h,p,g)=>{for(var m,v=g>1?void 0:g?Ti(h,p):h,x=n.length-1;x>=0;x--)(m=n[x])&&(v=(g?m(h,p,v):m(v))||v);return g&&v&&Ci(h,p,v),v};class go extends y{constructor(){super(...arguments),this.stubTool="stub",this.toolsAvailable=new F,this.toolsUnavailable=new F}get available(){return this.toolsAvailable}get unavailable(){return this.toolsUnavailable}get inlineTools(){return this.available.inlineTools}get blockTools(){return this.available.blockTools}
/**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */get blockTunes(){return this.available.blockTunes}get defaultTool(){return this.blockTools.get(this.config.defaultBlock)}get internal(){return this.available.internalTools}
/**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */async prepare(){if(this.validateTools(),this.config.tools=qe({},this.internalTools,this.config.tools),!Object.prototype.hasOwnProperty.call(this.config,"tools")||Object.keys(this.config.tools).length===0)throw Error("Can't start without tools");const n=this.prepareConfig();this.factory=new bs(n,this.config,this.Editor.API);const h=this.getListOfPrepareFunctions(n);if(h.length===0)return Promise.resolve();await Eo(h,(n=>{this.toolPrepareMethodSuccess(n)}),(n=>{this.toolPrepareMethodFallback(n)})),this.prepareBlockTools()}getAllInlineToolsSanitizeConfig(){const n={};return Array.from(this.inlineTools.values()).forEach((h=>{Object.assign(n,h.sanitizeConfig)})),n}destroy(){Object.values(this.available).forEach((async n=>{O(n.reset)&&await n.reset()}))}get internalTools(){return{convertTo:{class:ao,isInternal:!0},link:{class:ft,isInternal:!0},bold:{class:ut,isInternal:!0},italic:{class:pt,isInternal:!0},paragraph:{class:ht,inlineToolbar:!0,isInternal:!0},stub:{class:co,isInternal:!0},moveUp:{class:fo,isInternal:!0},delete:{class:po,isInternal:!0},moveDown:{class:uo,isInternal:!0}}}
/**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */toolPrepareMethodSuccess(n){const h=this.factory.get(n.toolName);if(h.isInline()){const n=["render"].filter((n=>!h.create()[n]));if(n.length){g(`Incorrect Inline Tool: ${h.name}. Some of required methods is not implemented %o`,"warn",n),this.toolsUnavailable.set(h.name,h);return}}this.toolsAvailable.set(h.name,h)}
/**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */toolPrepareMethodFallback(n){this.toolsUnavailable.set(n.toolName,this.factory.get(n.toolName))}
/**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */getListOfPrepareFunctions(n){const h=[];return Object.entries(n).forEach((([n,p])=>{h.push({function:O(p.class.prepare)?p.class.prepare:()=>{},data:{toolName:n,config:p.config}})})),h}prepareBlockTools(){Array.from(this.blockTools.values()).forEach((n=>{this.assignInlineToolsToBlockTool(n),this.assignBlockTunesToBlockTool(n)}))}
/**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */assignInlineToolsToBlockTool(n){if(this.config.inlineToolbar!==!1){if(n.enabledInlineTools===!0){n.inlineTools=new F(Array.isArray(this.config.inlineToolbar)?this.config.inlineToolbar.map((n=>[n,this.inlineTools.get(n)])):Array.from(this.inlineTools.entries()));return}Array.isArray(n.enabledInlineTools)&&(n.inlineTools=new F(["convertTo",...n.enabledInlineTools].map((n=>[n,this.inlineTools.get(n)]))))}}
/**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */assignBlockTunesToBlockTool(n){if(n.enabledBlockTunes!==!1){if(Array.isArray(n.enabledBlockTunes)){const h=new F(n.enabledBlockTunes.map((n=>[n,this.blockTunes.get(n)])));n.tunes=new F([...h,...this.blockTunes.internalTools]);return}if(Array.isArray(this.config.tunes)){const h=new F(this.config.tunes.map((n=>[n,this.blockTunes.get(n)])));n.tunes=new F([...h,...this.blockTunes.internalTools]);return}n.tunes=this.blockTunes.internalTools}}validateTools(){for(const n in this.config.tools)if(Object.prototype.hasOwnProperty.call(this.config.tools,n)){if(n in this.internalTools)return;const h=this.config.tools[n];if(!O(h)&&!O(h.class))throw Error(`Tool «${n}» must be a constructor function or an object with function in the «class» property`)}}prepareConfig(){const n={};for(const h in this.config.tools)R(this.config.tools[h])?n[h]=this.config.tools[h]:n[h]={class:this.config.tools[h]};return n}}ws([ue],go.prototype,"getAllInlineToolsSanitizeConfig",1);const Si=':root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}\n';class ys extends y{constructor(){super(...arguments),this.isMobile=!1,this.contentRectCache=void 0,this.resizeDebouncer=vt((()=>{this.windowResize()}),200)
/**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */}get CSS(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorEmpty:"codex-editor--empty",editorRtlFix:"codex-editor--rtl"}}
/**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */get contentRect(){if(this.contentRectCache)return this.contentRectCache;const n=this.nodes.wrapper.querySelector(`.${D.CSS.content}`);return n?(this.contentRectCache=n.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0}}async prepare(){this.setIsMobile(),this.make(),this.loadStyles()
/**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */}toggleReadOnly(n){n?this.disableModuleBindings():window.requestIdleCallback((()=>{this.enableModuleBindings()}),{timeout:2e3})}checkEmptiness(){const{BlockManager:n}=this.Editor;this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,n.isEditorEmpty)}
/**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */get someToolbarOpened(){const{Toolbar:n,BlockSettings:h,InlineToolbar:p}=this.Editor;return!!(h.opened||p.opened||n.toolbox.opened)}get someFlipperButtonFocused(){return!!this.Editor.Toolbar.toolbox.hasFocus()||Object.entries(this.Editor).filter((([n,h])=>h.flipper instanceof le)).some((([n,h])=>h.flipper.hasFocus()))}destroy(){this.nodes.holder.innerHTML=""}closeAllToolbars(){const{Toolbar:n,BlockSettings:h,InlineToolbar:p}=this.Editor;h.close(),p.close(),n.toolbox.close()}setIsMobile(){const n=window.innerWidth<v;n!==this.isMobile&&this.eventsDispatcher.emit(z,{isEnabled:this.isMobile}),this.isMobile=n}make(){this.nodes.holder=d.getHolder(this.config.holder),this.nodes.wrapper=d.make("div",[this.CSS.editorWrapper,...this.isRtl?[this.CSS.editorRtlFix]:[]]),this.nodes.redactor=d.make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper)}loadStyles(){const n="editor-js-styles";if(d.get(n))return;const h=d.make("style",null,{id:n,textContent:Si.toString()});this.config.style&&!V(this.config.style)&&this.config.style.nonce&&h.setAttribute("nonce",this.config.style.nonce),d.prepend(document.head,h)}enableModuleBindings(){this.readOnlyMutableListeners.on(this.nodes.redactor,"click",(n=>{this.redactorClicked(n)}),!1),this.readOnlyMutableListeners.on(this.nodes.redactor,"mousedown",(n=>{this.documentTouched(n)}),{capture:!0,passive:!0}),this.readOnlyMutableListeners.on(this.nodes.redactor,"touchstart",(n=>{this.documentTouched(n)}),{capture:!0,passive:!0}),this.readOnlyMutableListeners.on(document,"keydown",(n=>{this.documentKeydown(n)}),!0),this.readOnlyMutableListeners.on(document,"mousedown",(n=>{this.documentClicked(n)}),!0);const n=vt((()=>{this.selectionChanged()}),vi);this.readOnlyMutableListeners.on(document,"selectionchange",n,!0),this.readOnlyMutableListeners.on(window,"resize",(()=>{this.resizeDebouncer()}),{passive:!0}),this.watchBlockHoveredEvents(),this.enableInputsEmptyMark()}watchBlockHoveredEvents(){let n;this.readOnlyMutableListeners.on(this.nodes.redactor,"mousemove",Ve((h=>{const p=h.target.closest(".ce-block");this.Editor.BlockSelection.anyBlockSelected||p&&n!==p&&(n=p,this.eventsDispatcher.emit(No,{block:this.Editor.BlockManager.getBlockByChildNode(p)}))}),20),{passive:!0})}disableModuleBindings(){this.readOnlyMutableListeners.clearAll()}windowResize(){this.contentRectCache=null,this.setIsMobile()
/**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */}documentKeydown(n){switch(n.keyCode){case h.ENTER:this.enterPressed(n);break;case h.BACKSPACE:case h.DELETE:this.backspacePressed(n);break;case h.ESC:this.escapePressed(n);break;default:this.defaultBehaviour(n);break}}
/**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */defaultBehaviour(n){const{currentBlock:h}=this.Editor.BlockManager,p=n.target.closest(`.${this.CSS.editorWrapper}`),g=n.altKey||n.ctrlKey||n.metaKey||n.shiftKey;h===void 0||p!==null?p||h&&g||(this.Editor.BlockManager.unsetCurrentBlock(),this.Editor.Toolbar.close()
/**
   * @param {KeyboardEvent} event - keyboard event
   */):this.Editor.BlockEvents.keydown(n)}backspacePressed(n){const{BlockManager:h,BlockSelection:p,Caret:g}=this.Editor;if(p.anyBlockSelected&&!b.isSelectionExists){const m=h.removeSelectedBlocks(),v=h.insertDefaultBlockAtIndex(m,!0);g.setToBlock(v,g.positions.START),p.clearSelection(n),n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation()}}
/**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */escapePressed(n){this.Editor.BlockSelection.clearSelection(n),this.Editor.Toolbar.toolbox.opened?(this.Editor.Toolbar.toolbox.close(),this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END)):this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close()
/**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */}enterPressed(n){const{BlockManager:h,BlockSelection:p}=this.Editor;if(this.someToolbarOpened)return;const g=h.currentBlockIndex>=0;if(!p.anyBlockSelected||b.isSelectionExists){if(!this.someToolbarOpened&&g&&n.target.tagName==="BODY"){const h=this.Editor.BlockManager.insert();n.preventDefault(),this.Editor.Caret.setToBlock(h),this.Editor.Toolbar.moveAndOpen(h)}this.Editor.BlockSelection.clearSelection(n)}else p.clearSelection(n),n.preventDefault(),n.stopImmediatePropagation(),n.stopPropagation()}
/**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */documentClicked(n){var h,p;if(!n.isTrusted)return;const g=n.target;this.nodes.holder.contains(g)||b.isAtEditor||(this.Editor.BlockManager.unsetCurrentBlock(),this.Editor.Toolbar.close());const m=(h=this.Editor.BlockSettings.nodes.wrapper)==null?void 0:h.contains(g),v=(p=this.Editor.Toolbar.nodes.settingsToggler)==null?void 0:p.contains(g),x=m||v;if(this.Editor.BlockSettings.opened&&!x){this.Editor.BlockSettings.close();const n=this.Editor.BlockManager.getBlockByChildNode(g);this.Editor.Toolbar.moveAndOpen(n)}this.Editor.BlockSelection.clearSelection(n)}
/**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */documentTouched(n){let h=n.target;if(h===this.nodes.redactor){const p=n instanceof MouseEvent?n.clientX:n.touches[0].clientX,g=n instanceof MouseEvent?n.clientY:n.touches[0].clientY;h=document.elementFromPoint(p,g)}try{this.Editor.BlockManager.setCurrentBlockByChildNode(h)}catch{this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock()}this.Editor.Toolbar.moveAndOpen()}
/**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */redactorClicked(n){if(!b.isCollapsed)return;const h=n.target,p=n.metaKey||n.ctrlKey;if(d.isAnchor(h)&&p){n.stopImmediatePropagation(),n.stopPropagation();const p=h.getAttribute("href"),g=So(p);Mo(g)}else this.processBottomZoneClick(n)}
/**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */processBottomZoneClick(n){const h=this.Editor.BlockManager.getBlockByIndex(-1),p=d.offset(h.holder).bottom,g=n.pageY,{BlockSelection:m}=this.Editor;if(n.target instanceof Element&&n.target.isEqualNode(this.nodes.redactor)&&!m.anyBlockSelected&&p<g){n.stopImmediatePropagation(),n.stopPropagation();const{BlockManager:h,Caret:p,Toolbar:g}=this.Editor;(!h.lastBlock.tool.isDefault||!h.lastBlock.isEmpty)&&h.insertAtEnd(),p.setToTheLastBlock(),g.moveAndOpen(h.lastBlock)}}selectionChanged(){const{CrossBlockSelection:n,BlockSelection:h}=this.Editor,p=b.anchorElement;if(n.isCrossBlockSelectionStarted&&h.anyBlockSelected&&b.get().removeAllRanges(),!p){b.range||this.Editor.InlineToolbar.close();return}const g=p.closest(`.${D.CSS.content}`);(g===null||g.closest(`.${b.CSS.editorWrapper}`)!==this.nodes.wrapper)&&(this.Editor.InlineToolbar.containsNode(p)||this.Editor.InlineToolbar.close(),!(p.dataset.inlineToolbar==="true"))||(this.Editor.BlockManager.currentBlock||this.Editor.BlockManager.setCurrentBlockByChildNode(p),this.Editor.InlineToolbar.tryToShow(!0))}enableInputsEmptyMark(){function e(n){const h=n.target;Lt(h)}this.readOnlyMutableListeners.on(this.nodes.wrapper,"input",e),this.readOnlyMutableListeners.on(this.nodes.wrapper,"focusin",e),this.readOnlyMutableListeners.on(this.nodes.wrapper,"focusout",e)}}const Ii={BlocksAPI:zo,CaretAPI:jo,EventsAPI:$o,I18nAPI:ot,API:Yo,InlineToolbarAPI:Wo,ListenersAPI:Ko,NotifierAPI:Zo,ReadOnlyAPI:Go,SanitizerAPI:si,SaverAPI:ni,SelectionAPI:ri,ToolsAPI:li,StylesAPI:ai,ToolbarAPI:ci,TooltipAPI:fi,UiAPI:gi,BlockSettings:Ui,Toolbar:qi,InlineToolbar:Zi,BlockEvents:Gi,BlockManager:es,BlockSelection:ts,Caret:Re,CrossBlockSelection:os,DragNDrop:is,ModificationsObserver:rs,Paste:xi,ReadOnly:as,RectangleSelection:xe,Renderer:cs,Saver:ds,Tools:go,UI:ys};class Bs{
/**
   * @param {EditorConfig} config - user configuration
   */
constructor(n){this.moduleInstances={},this.eventsDispatcher=new Te;let h,p;this.isReady=new Promise(((n,g)=>{h=n,p=g})),Promise.resolve().then((async()=>{this.configuration=n,this.validate(),this.init(),await this.start(),await this.render();const{BlockManager:p,Caret:g,UI:m,ModificationsObserver:v}=this.moduleInstances;m.checkEmptiness(),v.enable(),this.configuration.autofocus&&g.setToBlock(p.blocks[0],g.positions.START),h()})).catch((n=>{g(`Editor.js is not ready because of ${n}`,"error"),p(n)}))
/**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */}set configuration(h){var p,g;R(h)?this.config={...h}:this.config={holder:h},Ze(!!this.config.holderId,"config.holderId","config.holder"),this.config.holderId&&!this.config.holder&&(this.config.holder=this.config.holderId,this.config.holderId=null),this.config.holder==null&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=n.VERBOSE),xo(this.config.logLevel),Ze(!!this.config.initialBlock,"config.initialBlock","config.defaultBlock"),this.config.defaultBlock=this.config.defaultBlock||this.config.initialBlock||"paragraph",this.config.minHeight=this.config.minHeight!==void 0?this.config.minHeight:300;const m={type:this.config.defaultBlock,data:{}};this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.i18n=this.config.i18n||{},this.config.data=this.config.data||{blocks:[]},this.config.onReady=this.config.onReady||(()=>{}),this.config.onChange=this.config.onChange||(()=>{}),this.config.inlineToolbar=this.config.inlineToolbar===void 0||this.config.inlineToolbar,(V(this.config.data)||!this.config.data.blocks||this.config.data.blocks.length===0)&&(this.config.data={blocks:[m]}),this.config.readOnly=this.config.readOnly||!1,(p=this.config.i18n)!=null&&p.messages&&A.setDictionary(this.config.i18n.messages),this.config.i18n.direction=((g=this.config.i18n)==null?void 0:g.direction)||"ltr"
/**
   * Returns private property
   *
   * @returns {EditorConfig}
   */}get configuration(){return this.config}validate(){const{holderId:n,holder:h}=this.config;if(n&&h)throw Error("«holderId» and «holder» param can't assign at the same time.");if(Q(h)&&!d.get(h))throw Error(`element with ID «${h}» is missing. Pass correct holder's ID.`);if(h&&R(h)&&!d.isElement(h))throw Error("«holder» value must be an Element node")}init(){this.constructModules(),this.configureModules()
/**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */}async start(){await["Tools","UI","BlockManager","Paste","BlockSelection","RectangleSelection","CrossBlockSelection","ReadOnly"].reduce(((n,h)=>n.then((async()=>{try{await this.moduleInstances[h].prepare()}catch(n){if(n instanceof Pt)throw new Error(n.message);g(`Module ${h} was skipped because of %o`,"warn",n)}}))),Promise.resolve())}render(){return this.moduleInstances.Renderer.render(this.config.data.blocks)}constructModules(){Object.entries(Ii).forEach((([n,h])=>{try{this.moduleInstances[n]=new h({config:this.configuration,eventsDispatcher:this.eventsDispatcher})}catch(h){g("[constructModules]",`Module ${n} skipped because`,"error",h)}}))}configureModules(){for(const n in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances,n)&&(this.moduleInstances[n].state=this.getModulesDiff(n))}
/**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */getModulesDiff(n){const h={};for(const p in this.moduleInstances)p!==n&&(h[p]=this.moduleInstances[p]);return h}}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */class Ts{static get version(){return"2.30.7"}
/**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */constructor(n){let t=()=>{};R(n)&&O(n.onReady)&&(t=n.onReady);const h=new Bs(n);this.isReady=h.isReady.then((()=>{this.exportAPI(h),t()}))}
/**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */exportAPI(n){const h=["configuration"],o=()=>{Object.values(n.moduleInstances).forEach((n=>{O(n.destroy)&&n.destroy(),n.listeners.removeAll()})),pi(),n=null;for(const n in this)Object.prototype.hasOwnProperty.call(this,n)&&delete this[n];Object.setPrototypeOf(this,null)};h.forEach((h=>{this[h]=n[h]})),this.destroy=o,Object.setPrototypeOf(this,n.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach((([h,p])=>{Object.entries(p).forEach((([p,g])=>{this[g]=n.moduleInstances.API.methods[h][p]}))}))}}export{Ts as default};

