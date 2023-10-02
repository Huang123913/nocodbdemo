"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var l=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=l.createContext({}),p=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),d=p(a),b=i,f=d["".concat(m,".").concat(b)]||d[b]||c[b]||r;return a?l.createElement(f,o(o({ref:t},s),{},{components:a})):l.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=b;var n={};for(var m in t)hasOwnProperty.call(t,m)&&(n[m]=t[m]);n.originalType=e,n[d]="string"==typeof e?e:i,o[1]=n;for(var p=2;p<r;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}b.displayName="MDXCreateElement"},53683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>p});var l=a(87462),i=(a(67294),a(3905));const r={title:"Create table via import",description:"Learn how to create a table in NocoDB via import from CSV, Excel or JSON.",tags:["Tables","Import"],keywords:["NocoDB table","create table","table administration","table organization","import table","import csv","import excel","import json"]},o=void 0,n={unversionedId:"tables/create-table-via-import",id:"tables/create-table-via-import",title:"Create table via import",description:"Learn how to create a table in NocoDB via import from CSV, Excel or JSON.",source:"@site/docs/050.tables/030.create-table-via-import.md",sourceDirName:"050.tables",slug:"/tables/create-table-via-import",permalink:"/tables/create-table-via-import",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/050.tables/030.create-table-via-import.md",tags:[{label:"Tables",permalink:"/tags/tables"},{label:"Import",permalink:"/tags/import"}],version:"current",sidebarPosition:30,frontMatter:{title:"Create table via import",description:"Learn how to create a table in NocoDB via import from CSV, Excel or JSON.",tags:["Tables","Import"],keywords:["NocoDB table","create table","table administration","table organization","import table","import csv","import excel","import json"]},sidebar:"tutorialSidebar",previous:{title:"Create empty table",permalink:"/tables/create-table"},next:{title:"Import data into an existing table",permalink:"/tables/import-data-into-existing-table"}},m={},p=[{value:"Import table from CSV / Excel / JSON",id:"import-table-from-csv--excel--json",level:2},{value:"Accessing import modal",id:"accessing-import-modal",level:3},{value:"1. From the base dashboard",id:"1-from-the-base-dashboard",level:4},{value:"2. From the base context menu",id:"2-from-the-base-context-menu",level:4},{value:"Importing file",id:"importing-file",level:3},{value:"1. Upload from local directory",id:"1-upload-from-local-directory",level:4},{value:"2. Upload from URL",id:"2-upload-from-url",level:4},{value:"Import configurations",id:"import-configurations",level:3},{value:"Advanced Settings",id:"advanced-settings",level:3},{value:"Related articles",id:"related-articles",level:2}],s={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"import-table-from-csv--excel--json"},"Import table from CSV / Excel / JSON"),(0,i.kt)("h3",{id:"accessing-import-modal"},"Accessing import modal"),(0,i.kt)("p",null,"There are two ways to access import modal:"),(0,i.kt)("h4",{id:"1-from-the-base-dashboard"},"1. From the base dashboard"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"import data",src:a(50180).Z,width:"2878",height:"984"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"import from dashboard",src:a(34186).Z,width:"2876",height:"1792"})),(0,i.kt)("h4",{id:"2-from-the-base-context-menu"},"2. From the base context menu"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"import from sidebar",src:a(68474).Z,width:"2876",height:"1442"})),(0,i.kt)("h3",{id:"importing-file"},"Importing file"),(0,i.kt)("p",null,"There are two ways to upload source file:"),(0,i.kt)("h4",{id:"1-upload-from-local-directory"},"1. Upload from local directory"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Upload")," tab from the Quick import modal."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"file upload")," button or drag and drop file to the modal."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#advance-settings"},"Advance Settings")," (optional)"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Import")," button.\n",(0,i.kt)("img",{alt:"image",src:a(65982).Z,width:"2876",height:"1796"}))),(0,i.kt)("h4",{id:"2-upload-from-url"},"2. Upload from URL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"URL")," tab from the Quick import modal."),(0,i.kt)("li",{parentName:"ol"},"Paste the URL of the file."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#advance-settings"},"Advance Settings")," (optional)"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Import")," button.\n",(0,i.kt)("img",{alt:"image",src:a(88559).Z,width:"2874",height:"1798"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Multiple files can be imported at once."),(0,i.kt)("li",{parentName:"ul"},"Supported file formats: CSV, Excel, JSON"),(0,i.kt)("li",{parentName:"ul"},"Maximum file size: 5 MB"))),(0,i.kt)("h3",{id:"import-configurations"},"Import configurations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Table name")," - defaults to the name of the file; double click to edit (Optional)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Field configurations")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Field name")," - name of the field as identified from import file header; click to edit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Field type")," - inferred from the data in the field; click to edit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Options")," - For ",(0,i.kt)("inlineCode",{parentName:"li"},"Single select")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Multi select")," field types, options identified are listed here; click to edit."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Remove field")," - Click on delete icon to exclude a field in source file from being imported (Optional)"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Import")," button to start importing the file.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(25472).Z,width:"2876",height:"1796"})),(0,i.kt)("h3",{id:"advanced-settings"},"Advanced Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Number of Rows for Datatype Inference"),": Default value is set to 500 rows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatic Field Type Detection"),': Enabled by default. If selected, the system will automatically detect field types. Otherwise, all fields will default to "SingleLineText."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Utilize First Row as Headers"),": Enabled by default. If selected, the first row in the spreadsheet will be treated as the header row and its contents will be used as field names."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Import Data"),": Enabled by default. If selected, all data will be imported; otherwise, only the table will be created.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, the first column will be chosen as Display Value and cannot be deleted.")),(0,i.kt)("h2",{id:"related-articles"},"Related articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/create-table"},"Create a new table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/import-data-into-existing-table"},"Import data from Csv/Xlsx into existing table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/actions-on-table#rename-table"},"Rename a table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/actions-on-table#duplicate-table"},"Duplicate a table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tables/actions-on-table#delete-table"},"Delete a table"))))}c.isMDXComponent=!0},50180:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/base-import-from-dashboard-1-d84f2e26bb351110ca88c3e6e11e95ce.png"},88559:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/import-csv-url-f9d895566bcab33720fd7272125e1a37.png"},65982:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/import-csv-515b6519a0b425cfa1672cd51ec465d6.png"},25472:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/import-stage-2-9b0b9c7805b194f2dbe8017eae3c5d80.png"},34186:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/table-import-from-dashboard-1af1df0615bea827871e9577807395db.png"},68474:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/table-import-from-sidebar-e6bc97c393575998ed411314f7248ff1.png"}}]);