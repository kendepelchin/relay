(self.webpackChunk=self.webpackChunk||[]).push([[27015],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var r=n(79973),a=n(67294),o=n(73727),i=n(52263),s=n(13919),l=n(10412),c=(0,a.createContext)({collectLink:function(){}}),u=n(44996),d=n(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,n,m=e.isNavLink,f=e.to,h=e.href,v=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,x=(0,r.Z)(e,p),k=(0,i.default)().siteConfig,O=k.trailingSlash,C=k.baseUrl,E=(0,u.useBaseUrlUtils)().withBaseUrl,D=(0,a.useContext)(c),N=f||h,I=(0,s.Z)(N),T=null==N?void 0:N.replace("pathname://",""),j=void 0!==T?(n=T,w&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;j&&I&&(j=(0,d.applyTrailingSlash)(j,{trailingSlash:O,baseUrl:C}));var _=(0,a.useRef)(!1),P=m?o.OL:o.rU,U=l.default.canUseIntersectionObserver,M=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&I&&null!=j&&window.docusaurus.prefetch(j),function(){U&&M.current&&M.current.disconnect()}}),[M,j,U,I]);var R=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,q=!j||!I||R;return j&&I&&!R&&!g&&D.collectLink(j),q?a.createElement("a",Object.assign({href:j},N&&!I&&{target:"_blank",rel:"noopener noreferrer"},x)):a.createElement(P,Object.assign({},x,{onMouseEnter:function(){_.current||null==j||(window.docusaurus.preload(j),_.current=!0)},innerRef:function(e){var t,n;U&&e&&I&&(t=e,n=function(){null!=j&&window.docusaurus.prefetch(j)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),n())}))})),M.current.observe(t))},to:j||""},m&&{isActive:y,activeClassName:v}))}},13919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},44996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>i});var r=n(52263),a=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(36742),a=n(44256),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var l=function(){var e=o.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return o.createElement(s,null,o.createElement(c,null),o.createElement(l,null),o.createElement(u,null))},p=function(){return o.createElement(s,null,o.createElement(l,null),o.createElement(u,null))};const m=function(){return(0,a.fbContent)({internal:o.createElement(d,null),external:o.createElement(p,null)})}},3708:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>d,toc:()=>p,default:()=>f});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=n(68629),s=n(44256),l=["components"],c={id:"inconsistent-typename-error",title:"Inconsistent Typename Error",slug:"/debugging/inconsistent-typename-error/"},u=void 0,d={unversionedId:"debugging/inconsistent-typename-error",id:"version-v11.0.0/debugging/inconsistent-typename-error",isDocsHomePage:!1,title:"Inconsistent Typename Error",description:"Inconsistent __typename error",source:"@site/versioned_docs/version-v11.0.0/debugging/inconsistent-typename-error.md",sourceDirName:"debugging",slug:"/debugging/inconsistent-typename-error/",permalink:"/docs/v11.0.0/debugging/inconsistent-typename-error/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/debugging/inconsistent-typename-error.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Steven Chaitoff",lastUpdatedAt:1646127291,formattedLastUpdatedAt:"3/1/2022",frontMatter:{id:"inconsistent-typename-error",title:"Inconsistent Typename Error",slug:"/debugging/inconsistent-typename-error/"},sidebar:"version-v11.0.0/docs",previous:{title:"Relay DevTools",permalink:"/docs/v11.0.0/debugging/relay-devtools/"},next:{title:"Debugging Declarative Mutation Directives",permalink:"/docs/v11.0.0/debugging/declarative-mutation-directives/"}},p=[{value:"Inconsistent <code>__typename</code> error",id:"inconsistent-__typename-error",children:[],level:2},{value:"Common cause",id:"common-cause",children:[],level:2},{value:"Fix: Make your type spec compliant",id:"fix-make-your-type-spec-compliant",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"inconsistent-__typename-error"},"Inconsistent ",(0,o.mdx)("inlineCode",{parentName:"h2"},"__typename")," error"),(0,o.mdx)("p",null,"The GraphQL server likely violated the globally unique ID requirement by returning the same ID for different objects."),(0,o.mdx)("p",null,"If you're seeing an error like:"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("inlineCode",{parentName:"p"},"RelayResponseNormalizer: Invalid record '543'. Expected __typename to be consistent, but the record was assigned conflicting types Foo and Bar. The GraphQL server likely violated the globally unique ID requirement by returning the same ID for different objects."))),(0,o.mdx)("p",null,"the server implementation of one of the types is not spec compliant. We require the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," field to be globally unique. This is a problem because Relay stores objects in a normalized key-value store and one of the object just overwrote the other. This means your app is broken in some subtle or less subtle way."),(0,o.mdx)("h2",{id:"common-cause"},"Common cause"),(0,o.mdx)("p",null,"The most common reason for this error is that 2 objects backed by an ID are using the plain ID as the id field, such as a ",(0,o.mdx)("inlineCode",{parentName:"p"},"User")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"MessagingParticipant"),"."),(0,o.mdx)("p",null,"Less common reasons could be using array indices or auto-increment IDs from some database that might not be unique to this type."),(0,o.mdx)("h2",{id:"fix-make-your-type-spec-compliant"},"Fix: Make your type spec compliant"),(0,o.mdx)("p",null,"The best way to fix this is to make your type spec compliant. For the case of 2 different types backed by the same ID, a common solution is to prefix the ID of the less widely used type with a unique string and then base64 encode the result. This can be accomplished fairly easily by implementing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"NodeTokenResolver")," using the helper trait ",(0,o.mdx)("inlineCode",{parentName:"p"},"NodeTokenResolverWithPrefix"),".  When the ",(0,o.mdx)("inlineCode",{parentName:"p"},"NodeTokenResolver")," is registered is allows you to load your type using ",(0,o.mdx)("inlineCode",{parentName:"p"},"node(id: $yourID)")," GraphQL call and your type can return an encoded ID."),(0,o.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("h3",{id:"example"},"Example"),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/diff/D17996531"},"D17996531")," for an example on how to fix this. It created a ",(0,o.mdx)("inlineCode",{parentName:"p"},"FusionPlatformComponentsCategoryNodeResolver")," added the trait ",(0,o.mdx)("inlineCode",{parentName:"p"},"TGraphQLNodeMixin")," to the conflicting class so that it generates the base64 encoded ID.")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);