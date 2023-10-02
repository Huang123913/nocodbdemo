"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[8690],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>m});var o=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,o,n=function(e,t){if(null==e)return{};var l,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)l=r[o],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)l=r[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(l),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return l?o.createElement(m,a(a({ref:t},p),{},{components:l})):o.createElement(m,a({ref:t},p))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,a=new Array(r);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<r;c++)a[c]=l[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,l)}f.displayName="MDXCreateElement"},67123:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=l(87462),n=(l(67294),l(3905));const r={title:"Checkbox",tags:["Fields","Field types","Custom types","Checkbox"]},a=void 0,i={unversionedId:"fields/field-types/custom-types/checkbox",id:"fields/field-types/custom-types/checkbox",title:"Checkbox",description:"The checkbox field type is used to store boolean values. It can be used to store a simple yes/no value, or true/false, or any other boolean value.",source:"@site/docs/070.fields/040.field-types/050.custom-types/020.checkbox.md",sourceDirName:"070.fields/040.field-types/050.custom-types",slug:"/fields/field-types/custom-types/checkbox",permalink:"/fields/field-types/custom-types/checkbox",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/050.custom-types/020.checkbox.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Custom types",permalink:"/tags/custom-types"},{label:"Checkbox",permalink:"/tags/checkbox"}],version:"current",sidebarPosition:20,frontMatter:{title:"Checkbox",tags:["Fields","Field types","Custom types","Checkbox"]},sidebar:"tutorialSidebar",previous:{title:"Attachment",permalink:"/fields/field-types/custom-types/attachment"},next:{title:"Rating",permalink:"/fields/field-types/custom-types/rating"}},s={},c=[{value:"Create a checkbox field",id:"create-a-checkbox-field",level:2},{value:"Cell display",id:"cell-display",level:3},{value:"Supported icons",id:"supported-icons",level:3},{value:"Related fields",id:"related-fields",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The checkbox field type is used to store boolean values. It can be used to store a simple yes/no value, or true/false, or any other boolean value."),(0,n.kt)("h2",{id:"create-a-checkbox-field"},"Create a checkbox field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,n.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,n.kt)("li",{parentName:"ol"},"[",(0,n.kt)("strong",{parentName:"li"},"Optional"),"]"," On the dropdown modal, enter the field name."),(0,n.kt)("li",{parentName:"ol"},"Select the field type as ",(0,n.kt)("inlineCode",{parentName:"li"},"Checkbox")," from the dropdown."),(0,n.kt)("li",{parentName:"ol"},"[",(0,n.kt)("strong",{parentName:"li"},"Optional"),"]"," Select icon for the field; defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"check")," icon."),(0,n.kt)("li",{parentName:"ol"},"[",(0,n.kt)("strong",{parentName:"li"},"Optional"),"]"," Select color for the field; defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"grey"),"."),(0,n.kt)("li",{parentName:"ol"},"[",(0,n.kt)("strong",{parentName:"li"},"Optional"),"]"," Set default value for the field."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Column")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:l(97391).Z,width:"1270",height:"645"})),(0,n.kt)("h3",{id:"cell-display"},"Cell display"),(0,n.kt)("p",null,"Cell displays the icon in the color selected for the field. A true value will be represented by a checked icon or a filled icon",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"image",src:l(69854).Z,width:"1268",height:"513"})),(0,n.kt)("h3",{id:"supported-icons"},"Supported icons"),(0,n.kt)("p",null,"NocoDB supports the following icons for the checkbox field type.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"image",src:l(37922).Z,width:"401",height:"479"})),(0,n.kt)("h2",{id:"related-fields"},"Related fields"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/custom-types/rating"},"Rating"))))}u.isMDXComponent=!0},69854:(e,t,l)=>{l.d(t,{Z:()=>o});const o=l.p+"assets/images/attachment-cell-display-d0e036b051275db64f5a516ad8c604b5.png"},37922:(e,t,l)=>{l.d(t,{Z:()=>o});const o=l.p+"assets/images/checkbox-icon-50a0b9c5edbae35ca181d433419c943c.png"},97391:(e,t,l)=>{l.d(t,{Z:()=>o});const o=l.p+"assets/images/checkbox-8420bfd3b3068af0665f7d29b884936a.png"}}]);