(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[307],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},I:function(){return s}});var r=n(7294),a=/{\w+}/g,i="{}";function c(e,t){var n=[],c=e.replace(a,(function(e){var a=e.substr(1,e.length-2),c=null==t?void 0:t[a];if(void 0!==c){var o=r.isValidElement(c)?c:String(c);return n.push(o),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?c.split(i).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):c.split(i).reduce((function(e,t,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},t,n[a])])}),[])}function o(e){return c(e.children,e.values)}var l=n(4644);function u(e){var t,n=e.id,r=e.message;return null!==(t=l[null!=n?n:r])&&void 0!==t?t:r}function s(e,t){var n,r=e.message;return c(null!==(n=u({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,a=e.id,i=e.values,c=null!==(t=u({message:n,id:a}))&&void 0!==t?t:n;return r.createElement(o,{values:i},c)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var r=n(7294),a=n(9205),i="titleOffset_2I3u",c="iconContainer_1xRA",o=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:c},e.icon&&r.createElement(a.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&i},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(7294),a="hidden_2JtY",i="iconContainer_2Rnc",c="visible_2147",o="link_Lh4h",l="clickable_3vcc",u=function(e){var t=" "+(e.active?c:a),n=o+" "+(e.link&&l);return r.createElement("div",{className:i+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},5308:function(e,t,n){"use strict";n.d(t,{Q:function(){return c}});var r=n(7294),a="ifcImage_ddTS",i=n(4973),c=function(e){return r.createElement("div",{className:a},e.image,r.createElement("a",{target:"_blank",href:e.ifcLink}," ",r.createElement("i",null,r.createElement(i.Z,{description:"The source of an image of the blog"},"Source"))," "))}},6551:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),c=n(5308),o=n(983),l=["components"],u={slug:"prometheus",title:"\u6c42\u3081\u3089\u308c\u308bBIM\u3068\u306f",author:"Ansoni",author_title:"\u5be1\u5360\u72b6\u614b\u306e\u4fa1\u683c\u3002",author_url:"https://github.com/agviegas",author_image_url:"https://secure.gravatar.com/avatar/9263b9f81d351788e46bc64000c03cb6",tags:["\u30a4\u30f3\u30c0\u30b9\u30c8\u30ea\u30fc","\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2"]},s={permalink:"/info/ja/blog/prometheus",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2021-07-27-prometheus.mdx",title:"\u6c42\u3081\u3089\u308c\u308bBIM\u3068\u306f",description:"\u5fc5\u8981\u306a\u3082\u306e\u3092\u624b\u306b\u5165\u308c\u308b\u306b\u306f\u3001\u81ea\u5206\u3067\u3084\u308b\u3057\u304b\u306a\u3044\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002",date:"2021-07-27T00:00:00.000Z",formattedDate:"2021\u5e747\u670827\u65e5",tags:[{label:"\u30a4\u30f3\u30c0\u30b9\u30c8\u30ea\u30fc",permalink:"/info/ja/blog/tags/\u30a4\u30f3\u30c0\u30b9\u30c8\u30ea\u30fc"},{label:"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2",permalink:"/info/ja/blog/tags/\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2"}],readingTime:.215,truncated:!0,nextItem:{title:"\u3053\u3093\u306b\u3061\u306f\u3001IFC.js\u3067\u3059\u3002",permalink:"/info/ja/blog/Open BIM"}},p=[],m={toc:p};function f(e){var t=e.components,u=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u5fc5\u8981\u306a\u3082\u306e\u3092\u624b\u306b\u5165\u308c\u308b\u306b\u306f\u3001\u81ea\u5206\u3067\u3084\u308b\u3057\u304b\u306a\u3044\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002")),(0,i.kt)(c.Q,{image:(0,i.kt)("img",{src:n(9477).Z,alt:"PC image"}),alt:"PC image",ifcLink:"https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/museo-gregoriano-etrusco/sale-xvii-e-xviii--collezione-dei-vasi--ceramica-corinzia--lacon/kylix-laconica-con-prometeo-e-atlante.html",mdxType:"IfcImage"}),(0,i.kt)("p",null,"\u79c1\u305f\u3061\u306e\u4ed5\u4e8b\u306b\u306f\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304c\u307e\u3059\u307e\u3059\u5fc5\u8981\u306b\u306a\u3063\u3066\u304d\u3066\u3044\u307e\u3059\u3002BIM\u306b\u643a\u308f\u3063\u3066\u3044\u308b\u65b9\u306f\u3088\u304f\u3054\u5b58\u77e5\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"  \ud83e\udd2f\n\u79c1\u306fBIM\u30a2\u30fc\u30ad\u30c6\u30af\u30c8\u3067\u3042\u308b\u3068\u540c\u6642\u306b\u3001\u30d7\u30ed\u30b0\u30e9\u30de\u30fc\u3067\u3082\u3042\u308a\u307e\u3059\u3002\u65b0\u3057\u3044\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30c4\u30fc\u30eb\u3092\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/webstorm/"},"WebStorm by JetBrains"),"\u3067\u3059\u3002\u9a5a\u3044\u305f\u306e\u306f\u305d\u306e\u4fa1\u683c\u3067\u3001\u7d04",(0,i.kt)("strong",{parentName:"p"},"100\u30e6\u30fc\u30ed/1\u30e9\u30a4\u30bb\u30f3\u30b9\u5e74"),"\u3067\u3057\u305f\u3002"),(0,i.kt)("p",null,"  \ud83d\udcb0\n\u4e00\u65b9\u3001\u6700\u3082\u4eba\u6c17\u306e\u3042\u308bBIM\u30c4\u30fc\u30eb\u306e\u3044\u304f\u3064\u304b\u306f\u30011\u5e74\u9593\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u6599\u304c\u7d04",(0,i.kt)("strong",{parentName:"p"},"2500\u30e6\u30fc\u30ed"),"\u3067\u3059\u3002\u3055\u3089\u306b\u3001\u3053\u308c\u3089\u306e\u30c4\u30fc\u30eb\u306f\u72ec\u81ea\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u4f7f\u7528\u3092\u4e2d\u6b62\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u4f5c\u54c1\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u306e\u3067\u3059\u3002"),(0,i.kt)("p",null,"  \ud83d\udc68\u200d\ud83d\udcbc\ud83d\udc68\u200d\ud83d\udcbc\ud83d\udc68\u200d\ud83d\udcbc\n\u3053\u308c\u306f\u3001\u79c1\u305f\u3061\u5168\u54e1\u304c\u5fc5\u8981\u3068\u3057\u3066\u3044\u308b\u30ea\u30bd\u30fc\u30b9\u306b\u3001\u4e00\u90e8\u306e\u4eba\u3060\u3051\u304c\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u5834\u5408\u306b\u8d77\u3053\u308b\u73fe\u8c61\u3067\u3059\u3002\u79c1\u305f\u3061\u306f\u597d\u304d\u306a\u3060\u3051",(0,i.kt)("a",{parentName:"p",href:"https://gfxspeak.com/2020/08/04/architects-demand-autodesk/"},"letter of complaint"),"\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u5b9f\u969b\u306b\u306f\u3001\u79c1\u305f\u3061\u304c\u304a\u91d1\u3092\u6255\u3044\u7d9a\u3051\u308b\u9650\u308a\u3001\u3053\u308c\u3089\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u306f\u5f7c\u3089\u304c\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u7d9a\u3051\u307e\u3059\u3002"),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83d\udcb8 BIM\u30c4\u30fc\u30eb\u306e\u4e2d\u306b\u306f\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u30c4\u30fc\u30eb\u306e\u7d04",(0,i.kt)("b",null,"25"),"\u500d\u306e\u4fa1\u683c\u306e\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u3002"),"\ufe0f",(0,i.kt)("p",null,"  \ud83d\udcaa\n\u3057\u304b\u3057\u3001\u305d\u308c\u306f\u5909\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4eca\u3001\u79c1\u305f\u3061\u306f\u521d\u3081\u3066BIM\u3092\u696d\u754c\u306b\u5fa9\u6d3b\u3055\u305b\u308b\u6a5f\u4f1a\u3092\u5f97\u307e\u3057\u305f\u3002\u624b\u9803\u306a\u4fa1\u683c\u3067\u3001\u52b9\u679c\u7684\u3067\u3001\u79c1\u305f\u3061\u306e\u30cb\u30fc\u30ba\u306b\u5408\u3063\u305fBIM\u3067\u3059\u3002",(0,i.kt)("strong",{parentName:"p"},"\u79c1\u305f\u3061\u306b\u3088\u3063\u3066\u3001\u79c1\u305f\u3061\u306e\u305f\u3081\u306b\u4f5c\u3089\u308c\u305fBIM\u300d\u3067\u3059"),"\u3002"),(0,i.kt)("p",null,"  \ud83e\udd1d\n\u3082\u3057\u304b\u3057\u305f\u3089\u3001\u79c1\u305f\u3061\u304c\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u3067\u5546\u7528BIM\u306e\u5927\u5bb6\u306b\u7acb\u3061\u5411\u304b\u3048\u308b\u3068\u8003\u3048\u308b\u306e\u306f\u3001\u5c11\u3057\u30e6\u30fc\u30c8\u30d4\u30a2\u7684\u3060\u3068\u601d\u3046\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001\u79c1\u305f\u3061\u306f\u305d\u308c\u3089\u306e\u5927\u4f01\u696d\u3092\u5b58\u7d9a\u3055\u305b\u308b\u8cc7\u91d1\u6e90\u3067\u3042\u308a\u3001",(0,i.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/"},"IFC.js"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://speckle.systems/"},"Speckle"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://blenderbim.org/"},"BlenderBIM"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://osarch.org/"},"OSArch"),"\u306e\u3088\u3046\u306a\u53d6\u308a\u7d44\u307f\u304c\u65e5\u3005\u6210\u9577\u3057\u7d9a\u3051\u3066\u3044\u308b\u3053\u3068\u3092\u5fd8\u308c\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"  \ud83d\ude80\n\u7d50\u5c40\u306e\u3068\u3053\u308d\u3001\u5927\u4f01\u696d\u306b\u304a\u91d1\u3092\u53d6\u3089\u308c\u305f\u307e\u307e\u3001\u3088\u308a\u826f\u3044\u696d\u754c\u3092\u9858\u3044\u7d9a\u3051\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3057\u3001\u305d\u308c\u3092\u4f5c\u308b\u305f\u3081\u306b",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/FXfyR4XrKT"},"\u8ca2\u732e"),"\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002\u5fc5\u8981\u306a\u3082\u306e\u3092\u624b\u306b\u5165\u308c\u308b\u305f\u3081\u306b\u306f\u3001\u81ea\u5206\u3067\u3084\u308b\u3057\u304b\u306a\u3044\u3053\u3068\u3082\u3042\u308b\u306e\u3067\u3059\u3002"))}f.isMDXComponent=!0},9477:function(e,t,n){"use strict";t.Z=n.p+"assets/images/prometheus-74dcb21b6f05f7b891fc9c59de17aaba.jpeg"}}]);