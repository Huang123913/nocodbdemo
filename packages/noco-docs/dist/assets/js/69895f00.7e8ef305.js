"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4289],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var r=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,l=function(e,t){if(null==e)return{};var i,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(i),u=l,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||n;return i?r.createElement(f,a(a({ref:t},p),{},{components:i})):r.createElement(f,a({ref:t},p))}));function f(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=i.length,a=new Array(n);a[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<n;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},37087:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=i(87462),l=(i(67294),i(3905));const n={title:"Decimal",tags:["Fields","Field types","Numerical types","Decimal"]},a=void 0,o={unversionedId:"fields/field-types/numerical/decimal",id:"fields/field-types/numerical/decimal",title:"Decimal",description:"Decimal field type is used to store decimal values. Use cases include storing salary, price, etc. NocoDB supports precision of upto 8 digits.",source:"@site/docs/070.fields/040.field-types/020.numerical/020.decimal.md",sourceDirName:"070.fields/040.field-types/020.numerical",slug:"/fields/field-types/numerical/decimal",permalink:"/fields/field-types/numerical/decimal",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/020.numerical/020.decimal.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Numerical types",permalink:"/tags/numerical-types"},{label:"Decimal",permalink:"/tags/decimal"}],version:"current",sidebarPosition:20,frontMatter:{title:"Decimal",tags:["Fields","Field types","Numerical types","Decimal"]},sidebar:"tutorialSidebar",previous:{title:"Number",permalink:"/fields/field-types/numerical/number"},next:{title:"Percent",permalink:"/fields/field-types/numerical/percent"}},c={},s=[{value:"Create a decimal field",id:"create-a-decimal-field",level:2},{value:"Similar numerical fields",id:"similar-numerical-fields",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Decimal")," field type is used to store decimal values. Use cases include storing ",(0,l.kt)("inlineCode",{parentName:"p"},"salary"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"price"),", etc. NocoDB supports precision of upto 8 digits."),(0,l.kt)("h2",{id:"create-a-decimal-field"},"Create a decimal field"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,l.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,l.kt)("li",{parentName:"ol"},"[",(0,l.kt)("strong",{parentName:"li"},"Optional"),"]"," On the dropdown modal, enter the field name."),(0,l.kt)("li",{parentName:"ol"},"Select the field type as ",(0,l.kt)("inlineCode",{parentName:"li"},"Decimal")," from the dropdown."),(0,l.kt)("li",{parentName:"ol"},"Configure ",(0,l.kt)("inlineCode",{parentName:"li"},"Precision"),"- NocoDB supports upto 8 digits of precision."),(0,l.kt)("li",{parentName:"ol"},"[",(0,l.kt)("strong",{parentName:"li"},"Optional"),"]"," Set default value for the field."),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Save Column")," button.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:i(53075).Z,width:"1265",height:"610"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Default decimal precision is 1 digit"))),(0,l.kt)("h2",{id:"similar-numerical-fields"},"Similar numerical fields"),(0,l.kt)("p",null,"Following are the other numerical fields available in NocoDB, with some custom add-on features."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/number"},"Number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/percent"},"Percent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/currency"},"Currency"))))}m.isMDXComponent=!0},53075:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/decimal-e3bb0ca87ff8e3b13a94dbbb461f56f2.png"}}]);