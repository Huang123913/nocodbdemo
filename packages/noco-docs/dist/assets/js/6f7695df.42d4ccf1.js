"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3011],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),b=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=b(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(t),h=n,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||s;return t?r.createElement(m,i(i({ref:a},c),{},{components:t})):r.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=h;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var b=2;b<s;b++)i[b]=t[b];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},29486:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>b});var r=t(87462),n=(t(67294),t(3905));const s={title:"Share base",description:"Procedures to share a base & generating embedded iframe",tags:["Bases","Share","Collaboration"],keywords:["NocoDB base","share base","base collaboration","base actions","base settings"]},i=void 0,l={unversionedId:"bases/share-base",id:"bases/share-base",title:"Share base",description:"Procedures to share a base & generating embedded iframe",source:"@site/docs/040.bases/060.share-base.md",sourceDirName:"040.bases",slug:"/bases/share-base",permalink:"/bases/share-base",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/040.bases/060.share-base.md",tags:[{label:"Bases",permalink:"/tags/bases"},{label:"Share",permalink:"/tags/share"},{label:"Collaboration",permalink:"/tags/collaboration"}],version:"current",sidebarPosition:60,frontMatter:{title:"Share base",description:"Procedures to share a base & generating embedded iframe",tags:["Bases","Share","Collaboration"],keywords:["NocoDB base","share base","base collaboration","base actions","base settings"]},sidebar:"tutorialSidebar",previous:{title:"Base collaboration",permalink:"/bases/base-collaboration"},next:{title:"Actions on base",permalink:"/bases/actions-on-base"}},o={},b=[{value:"Modify Share base",id:"modify-share-base",level:2},{value:"Disable Share base",id:"disable-share-base",level:2},{value:"Share base Access Permissions",id:"share-base-access-permissions",level:2},{value:"Embeddable Frame",id:"embeddable-frame",level:2},{value:"Embed into application&#39;s HTML Body",id:"embed-into-applications-html-body",level:3},{value:"Related articles",id:"related-articles",level:2}],c={toc:b},d="wrapper";function p(e){let{components:a,...s}=e;return(0,n.kt)(d,(0,r.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To share a base, follow the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the top right corner of the top navigation bar and click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Share")," button."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("inlineCode",{parentName:"li"},"Shared base")," section, toggle the switch to ",(0,n.kt)("inlineCode",{parentName:"li"},"Enable public access")," in order to activate the shared base feature."),(0,n.kt)("li",{parentName:"ol"},"The generated link for the shared base will be displayed above and can be utilized to share this project with others. To copy the URL, simply click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Copy Link")," option.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Share base",src:t(34992).Z,width:"3046",height:"994"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Share base",src:t(8558).Z,width:"2874",height:"1790"})),(0,n.kt)("h2",{id:"modify-share-base"},"Modify Share base"),(0,n.kt)("p",null,"Amending the ",(0,n.kt)("inlineCode",{parentName:"p"},"Share base")," setting will render the previously generated ",(0,n.kt)("inlineCode",{parentName:"p"},"Share base")," link invalid and generate a new link in its place.\nHere are the steps to modify it:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Share")," button located in the top right corner of the toolbar."),(0,n.kt)("li",{parentName:"ol"},"Toggle the option labeled ",(0,n.kt)("inlineCode",{parentName:"li"},"Enable public access")," to deactivate the base share."),(0,n.kt)("li",{parentName:"ol"},"Toggle the same option, ",(0,n.kt)("inlineCode",{parentName:"li"},"Enable public access,")," to reactivate the base share, subsequently generating a new link.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Enable public access",src:t(6196).Z,width:"2874",height:"1790"})),(0,n.kt)("h2",{id:"disable-share-base"},"Disable Share base"),(0,n.kt)("p",null,"Disabling ",(0,n.kt)("inlineCode",{parentName:"p"},"Share base")," will render the previously generated ",(0,n.kt)("inlineCode",{parentName:"p"},"Share base")," link invalid\nHere are the steps to disable it:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the 'Share' button located in the top right corner of the toolbar."),(0,n.kt)("li",{parentName:"ol"},"Toggle the option labeled ",(0,n.kt)("inlineCode",{parentName:"li"},"Enable public access")," to deactivate the base share.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Enable public access",src:t(6196).Z,width:"2874",height:"1790"})),(0,n.kt)("h2",{id:"share-base-access-permissions"},"Share base Access Permissions"),(0,n.kt)("p",null,'The "Shared base" can be configured in two modes:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Viewer")," - Users with the provided link will have ",(0,n.kt)("strong",{parentName:"li"},"read-only")," access to the base data."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Editor")," - Users with the provided link will have ",(0,n.kt)("strong",{parentName:"li"},"read and write")," access to the base data.")),(0,n.kt)("p",null,"Toggle ",(0,n.kt)("inlineCode",{parentName:"p"},"Enable Editor Access")," button to configure permissions as desired\n",(0,n.kt)("img",{alt:"Share base edit access",src:t(33703).Z,width:"2874",height:"1790"})),(0,n.kt)("h2",{id:"embeddable-frame"},"Embeddable Frame"),(0,n.kt)("p",null,"The NocoDB interface can be seamlessly integrated into existing applications through the utilization of the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"HTML IFRAME")," attribute. This feature empowers users to embed the NocoDB interface into their applications, allowing for a unified user experience. To generate the embeddable HTML code, follow these steps:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To Generate Embeddable HTML Code:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Share")," button located in the top right corner of the toolbar."),(0,n.kt)("li",{parentName:"ol"},"Within the ",(0,n.kt)("inlineCode",{parentName:"li"},"Shared base link")," tab, select the button to copy the ",(0,n.kt)("inlineCode",{parentName:"li"},"Embeddable HTML code")," to your clipboard.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Share base iFrame",src:t(95682).Z,width:"2874",height:"1790"})),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n    class="nc-embed"\n    src="https://nocodb-nocodb-rsyir.ondigitalocean.app/dashboard/#/nc/base/e3bba9df-4fc1-4d11-b7ce-41c4a3ad6810?embed"\n    frameBorder="0"\n    width="100%"\n    height="700"\n    style="background: transparent; border: 1px solid #ddd"\n>\n</iframe>\n')),(0,n.kt)("h3",{id:"embed-into-applications-html-body"},"Embed into application's HTML Body"),(0,n.kt)("p",null,"Sample code with embedded iframe generated above"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <body>\n        <iframe\n            class="nc-embed"\n            src="http://localhost:3000/#/nc/base/7d4b551c-b5e0-41c9-a87b-f3984c21d2c7?embed"\n            frameBorder="0"\n            width="100%"\n            height="700"\n            style="background: transparent; "\n        ></iframe>\n    </body>\n</html>\n')),(0,n.kt)("h2",{id:"related-articles"},"Related articles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/base-overview"},"Base overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/create-base"},"Create an empty base")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/import-base-from-airtable"},"Import base from Airtable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/base-collaboration"},"Invite team members to work on a base")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/share-base"},"Share base publicly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/actions-on-base#rename-base"},"Rename base")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/actions-on-base#duplicate-base"},"Duplicate base")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/actions-on-base#star-base"},"Bookmark base")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bases/actions-on-base#delete-base"},"Delete base"))))}p.isMDXComponent=!0},34992:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/share-base-1-c3c442ce89c00b2cd26119a2c7360ac5.png"},8558:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/share-base-2-e413c75c905d813681ef53d42bf0ad1b.png"},33703:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/share-base-edit-access-b293bc0349998853d6de8a9784ae9e54.png"},6196:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/share-base-enable-public-access-70567245aad03d619b620d838cbdb21a.png"},95682:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/share-base-iframe-5cf906c782389e1cf39b132cd1ab62ac.png"}}]);