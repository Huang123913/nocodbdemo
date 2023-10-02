"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),p=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,c=u["".concat(o,".").concat(f)]||u[f]||m[f]||i;return a?l.createElement(c,n(n({ref:t},d),{},{components:a})):l.createElement(c,n({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,n[1]=s;for(var p=2;p<i;p++)n[p]=a[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}f.displayName="MDXCreateElement"},29518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const i={title:"Fields overview",tags:["Fields","Overview"],keywords:["NocoDB fields","fields overview","field administration","field organization"]},n=void 0,s={unversionedId:"fields/fields-overview",id:"fields/fields-overview",title:"Fields overview",description:"- Primary Key",source:"@site/docs/070.fields/010.fields-overview.md",sourceDirName:"070.fields",slug:"/fields/fields-overview",permalink:"/fields/fields-overview",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/010.fields-overview.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Overview",permalink:"/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{title:"Fields overview",tags:["Fields","Overview"],keywords:["NocoDB fields","fields overview","field administration","field organization"]},sidebar:"tutorialSidebar",previous:{title:"Table details overview",permalink:"/table-details/table-details-overview"},next:{title:"Primary key",permalink:"/fields/primary-key"}},o={},p=[{value:"Text based",id:"text-based",level:3},{value:"Numerical",id:"numerical",level:3},{value:"Date and time",id:"date-and-time",level:3},{value:"Select based",id:"select-based",level:3},{value:"Link based",id:"link-based",level:3},{value:"Custom types",id:"custom-types",level:3},{value:"Formula",id:"formula",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"primary-key"},"Primary Key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"display-value"},"Display Value"))),(0,r.kt)("h3",{id:"text-based"},"Text based"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/text-based/single-line-text"},"Single line text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/text-based/long-text"},"Long text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/text-based/email"},"Email")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/text-based/phonenumber"},"Phone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/text-based/url"},"URL"))),(0,r.kt)("h3",{id:"numerical"},"Numerical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/numerical/number"},"Number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/numerical/currency"},"Currency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/numerical/percent"},"Percentage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/numerical/currency"},"Currency"))),(0,r.kt)("h3",{id:"date-and-time"},"Date and time"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/date-time-based/date"},"Date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/date-time-based/time"},"Time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/date-time-based/date-time"},"Date and time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/date-time-based/duration"},"Duration"))),(0,r.kt)("h3",{id:"select-based"},"Select based"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/select-based/single-select"},"Single select")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/select-based/multi-select"},"Multi select"))),(0,r.kt)("h3",{id:"link-based"},"Link based"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/links-based/links"},"Links")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/links-based/lookup"},"Lookup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/links-based/rollup"},"Rollup"))),(0,r.kt)("h3",{id:"custom-types"},"Custom types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/custom-types/attachment"},"Attachment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/custom-types/checkbox"},"Checkbox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/custom-types/rating"},"Rating")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/custom-types/barcode"},"Barcode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/custom-types/QR-code"},"QR-code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/custom-types/geometry"},"Geometry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/custom-types/specific-db-type"},"Specific DB type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/custom-types/json"},"JSON"))),(0,r.kt)("h3",{id:"formula"},"Formula"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/formula/formula"},"Formula"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/formula/operators"},"Operators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/formula/numeric-functions"},"Numeric Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/formula/string-functions"},"String Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/formula/date-functions"},"Date Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"field-types/formula/conditional-expressions"},"Conditional Expressions"))))))}m.isMDXComponent=!0}}]);