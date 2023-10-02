"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5336],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>u});var i=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,i,a=function(e,t){if(null==e)return{};var l,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(l),f=a,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||n;return l?i.createElement(u,r(r({ref:t},p),{},{components:l})):i.createElement(u,r({ref:t},p))}));function u(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,r=new Array(n);r[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<n;d++)r[d]=l[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,l)}f.displayName="MDXCreateElement"},45896:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=l(87462),a=(l(67294),l(3905));const n={title:"Email",tags:["Fields","Field types","Text based types","Email"]},r=void 0,o={unversionedId:"fields/field-types/text-based/email",id:"fields/field-types/text-based/email",title:"Email",description:"Email field is text based field custom-built for storing E-mail IDs. It is a special type of Single line text field with",source:"@site/docs/070.fields/040.field-types/010.text-based/030.email.md",sourceDirName:"070.fields/040.field-types/010.text-based",slug:"/fields/field-types/text-based/email",permalink:"/fields/field-types/text-based/email",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/010.text-based/030.email.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Text based types",permalink:"/tags/text-based-types"},{label:"Email",permalink:"/tags/email"}],version:"current",sidebarPosition:30,frontMatter:{title:"Email",tags:["Fields","Field types","Text based types","Email"]},sidebar:"tutorialSidebar",previous:{title:"Long text",permalink:"/fields/field-types/text-based/long-text"},next:{title:"Phone Number",permalink:"/fields/field-types/text-based/phonenumber"}},s={},d=[{value:"Create an <code>Email</code> field",id:"create-an-email-field",level:2},{value:"Similar text based fields",id:"similar-text-based-fields",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Email")," field is text based field custom-built for storing E-mail IDs. It is a special type of ",(0,a.kt)("inlineCode",{parentName:"p"},"Single line text")," field with"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optional validation for Email ID"),(0,a.kt)("li",{parentName:"ul"},"Cell display as clickable link")),(0,a.kt)("h2",{id:"create-an-email-field"},"Create an ",(0,a.kt)("inlineCode",{parentName:"h2"},"Email")," field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,a.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,a.kt)("li",{parentName:"ol"},"[",(0,a.kt)("strong",{parentName:"li"},"Optional"),"]"," On the dropdown modal, enter the field name."),(0,a.kt)("li",{parentName:"ol"},"Select the field type as ",(0,a.kt)("inlineCode",{parentName:"li"},"Email")," from the dropdown."),(0,a.kt)("li",{parentName:"ol"},"[",(0,a.kt)("strong",{parentName:"li"},"Optional"),"]"," Enable validation by toggling the ",(0,a.kt)("inlineCode",{parentName:"li"},"Validate Email")," checkbox."),(0,a.kt)("li",{parentName:"ol"},"[",(0,a.kt)("strong",{parentName:"li"},"Optional"),"]"," Set default value for the field."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Save Column")," button.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:l(40436).Z,width:"1266",height:"527"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Specify default value without quotes."),(0,a.kt)("li",{parentName:"ul"},"Validation only ensures that the value entered is a valid email ID. It does not check if the email ID exists."))),(0,a.kt)("h2",{id:"similar-text-based-fields"},"Similar text based fields"),(0,a.kt)("p",null,"Following are the other text based fields available in NocoDB, custom-built for specific use cases."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/single-line-text"},"Single line text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/long-text"},"Long text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/url"},"URL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/phonenumber"},"Phone"))))}c.isMDXComponent=!0},40436:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/email-c71401cef80f194154a62a734ca9ccab.png"}}]);