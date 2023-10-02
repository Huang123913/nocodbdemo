"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[2650],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),u=p(n),N=r,s=u["".concat(m,".").concat(N)]||u[N]||k[N]||l;return n?a.createElement(s,i(i({ref:e},o),{},{components:n})):a.createElement(s,i({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},91059:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Formulas",description:"NocoDB Formulas Syntaxes and Functions"},i=void 0,d={unversionedId:"setup-and-usages/formulas",id:"version-0.109.7/setup-and-usages/formulas",title:"Formulas",description:"NocoDB Formulas Syntaxes and Functions",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/090.formulas.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/formulas",permalink:"/0.109.7/setup-and-usages/formulas",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/030.setup-and-usages/090.formulas.md",tags:[],version:"0.109.7",sidebarPosition:90,frontMatter:{title:"Formulas",description:"NocoDB Formulas Syntaxes and Functions"},sidebar:"tutorialSidebar",previous:{title:"Rollup",permalink:"/0.109.7/setup-and-usages/rollup"},next:{title:"Primary Key",permalink:"/0.109.7/setup-and-usages/primary-key"}},m={},p=[{value:"Adding formula column",id:"adding-formula-column",level:2},{value:"1. Click on &#39;+&#39; (Add column)",id:"1-click-on--add-column",level:3},{value:"2. Populate column Name",id:"2-populate-column-name",level:3},{value:"3. Select column Type as &#39;Formula&#39;",id:"3-select-column-type-as-formula",level:3},{value:"4. Insert required formula",id:"4-insert-required-formula",level:3},{value:"5. Click on &#39;Save&#39;",id:"5-click-on-save",level:3},{value:"Editing formula column",id:"editing-formula-column",level:2},{value:"Available Formula Features",id:"available-formula-features",level:2},{value:"Numeric Functions",id:"numeric-functions",level:3},{value:"Numeric Operators",id:"numeric-operators",level:3},{value:"String Functions",id:"string-functions",level:3},{value:"Date Functions",id:"date-functions",level:3},{value:"Logical Operators",id:"logical-operators",level:3},{value:"Conditional Expressions",id:"conditional-expressions",level:3}],o={toc:p},u="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"adding-formula-column"},"Adding formula column"),(0,r.kt)("img",{width:"990",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189108950-fba76e31-8ae4-4108-916b-e413c841f451.png"}),(0,r.kt)("h3",{id:"1-click-on--add-column"},"1. Click on '+' (Add column)"),(0,r.kt)("h3",{id:"2-populate-column-name"},"2. Populate column Name"),(0,r.kt)("h3",{id:"3-select-column-type-as-formula"},"3. Select column Type as 'Formula'"),(0,r.kt)("h3",{id:"4-insert-required-formula"},"4. Insert required formula"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use explicit numerical values/ strings as needed, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"123")," (numeric) or ",(0,r.kt)("inlineCode",{parentName:"li"},'"123"')," (string)."),(0,r.kt)("li",{parentName:"ul"},"You can reference column names in equation with ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"{column_name}"),", if the column name conflicts with literals"),(0,r.kt)("li",{parentName:"ul"},"Table below lists supported formula & associated syntax"),(0,r.kt)("li",{parentName:"ul"},"Nested formula (formula equation referring to another formula column) is supported")),(0,r.kt)("h3",{id:"5-click-on-save"},"5. Click on 'Save'"),(0,r.kt)("h2",{id:"editing-formula-column"},"Editing formula column"),(0,r.kt)("p",null,"Unlike other column types, formula cells cannot be modified by double-clicking since the value is generated based on the formula. Instead, the vaule can be changed by updating the formula in the column setting."),(0,r.kt)("img",{width:"253",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189109486-4d41f2b7-0a19-46ef-8bb4-a8d1aabd3592.png"}),(0,r.kt)("h2",{id:"available-formula-features"},"Available Formula Features"),(0,r.kt)("h3",{id:"numeric-functions"},"Numeric Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"),(0,r.kt)("th",{parentName:"tr",align:null},"Output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ABS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ABS(value)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ABS({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Absolute value of the input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ADD")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ADD(value1,[value2,...])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ADD({Column1}, {Column2})")),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of input parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"AVG")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AVG(value1,[value2,...])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AVG({Column1}, {Column2})")),(0,r.kt)("td",{parentName:"tr",align:null},"Average of input parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"CEILING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CEILING(value)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CEILING({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Rounded next largest integer value of input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"EXP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXP(value)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXP({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Exponential value of input parameter (",(0,r.kt)("inlineCode",{parentName:"td"},"e^x"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"FLOOR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOOR(value)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOOR({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Rounded largest integer less than or equal to input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"INT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT(value)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer value of input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LOG")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOG([base], value)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOG(10, {Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Logarithm of input parameter to the base (default = e) specified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"MAX")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MAX(value1,[value2,...])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MAX({Column1}, {Column2}, {Column3})")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum value amongst input parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"MIN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MIN(value1,[value2,...])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MIN({Column1}, {Column2}, {Column3})")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum value amongst input parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"MOD")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MOD(value1, value2)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MOD({Column}, 2)")),(0,r.kt)("td",{parentName:"tr",align:null},"Remainder after integer division of input parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POWER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POWER(base, exponent)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POWER({Column}, 3)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base")," to the ",(0,r.kt)("inlineCode",{parentName:"td"},"exponent")," power, as in ",(0,r.kt)("inlineCode",{parentName:"td"},"base ^ exponent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ROUND")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ROUND(value, precision)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ROUND({Column}, 3)")),(0,r.kt)("td",{parentName:"tr",align:null},"Round input ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," to decimal place specified by ",(0,r.kt)("inlineCode",{parentName:"td"},"precision")," (Nearest integer if ",(0,r.kt)("inlineCode",{parentName:"td"},"precision")," not provided)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SQRT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SQRT(value)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SQRT({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Square root of the input parameter")))),(0,r.kt)("h3",{id:"numeric-operators"},"Numeric Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} + {Column2} + 2")),(0,r.kt)("td",{parentName:"tr",align:null},"Addition of numeric values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} - {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Subtraction of numeric values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} * {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Multiplication of numeric values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} / {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Division of numeric values")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To change the order of arithmetic operation, you can use round bracket parantheses (). ",(0,r.kt)("br",null),"\nExample: ({Column1} + ({Column2} * {Column3}) / (3 - $Column4$ ))")),(0,r.kt)("h3",{id:"string-functions"},"String Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"),(0,r.kt)("th",{parentName:"tr",align:null},"Output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"CONCAT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONCAT(str1, [str2,...])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONCAT({Column1}, ' ', {Column2})")),(0,r.kt)("td",{parentName:"tr",align:null},"Concatenated string of input parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LEFT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LEFT(str1, n)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LEFT({Column}, 3)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n")," characters from the beginning of input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LEN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LEN(str)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LEN({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Input parameter character length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LOWER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOWER(str)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LOWER({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Lower case converted string of input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"MID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MID(str, position, [count])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MID({Column}, 3, 2)")),(0,r.kt)("td",{parentName:"tr",align:null},"Alias for ",(0,r.kt)("inlineCode",{parentName:"td"},"SUBSTR"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"REPEAT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPEAT(str, count)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPEAT({Column}, 2)")),(0,r.kt)("td",{parentName:"tr",align:null},"Specified copies of the input parameter string concatenated together")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"REPLACE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPLACE(str, srchStr, rplcStr)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPLACE({Column}, 'int', 'num')")),(0,r.kt)("td",{parentName:"tr",align:null},"String, after replacing all occurrences of ",(0,r.kt)("inlineCode",{parentName:"td"},"srchStr")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"rplcStr"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"RIGHT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RIGHT(str, n)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RIGHT({Column}, 3)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n")," characters from the end of input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SEARCH")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SEARCH(str, srchStr)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SEARCH({Column}, 'str')")),(0,r.kt)("td",{parentName:"tr",align:null},"Index of ",(0,r.kt)("inlineCode",{parentName:"td"},"srchStr")," specified if found, 0 otherwise")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SUBSTR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SUBTR(str, position, [count])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SUBSTR({Column}, 3, 2)")),(0,r.kt)("td",{parentName:"tr",align:null},"Substring of length 'count' of input string, from the postition specified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"TRIM")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRIM(str)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TRIM({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove trailing and leading whitespaces from input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"UPPER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UPPER(str)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UPPER({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Upper case converted string of input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"URL(str)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"URL({Column})")),(0,r.kt)("td",{parentName:"tr",align:null},"Convert to a hyperlink if it is a valid URL")))),(0,r.kt)("h3",{id:"date-functions"},"Date Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"),(0,r.kt)("th",{parentName:"tr",align:null},"Output"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NOW")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOW()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOW()")),(0,r.kt)("td",{parentName:"tr",align:null},"2022-05-19 17:20:43"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the current time and day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'IF(NOW() < {DATE_COL}, "true", "false")')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'IF(NOW() < date, "true", "false")')),(0,r.kt)("td",{parentName:"tr",align:null},"If current date is less than {DATE_COL}, it returns true. Otherwise, it returns false."),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime columns and negative values are supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DATEADD")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'DATEADD(date \\| datetime, value, ["day" \\| "week" \\| "month" \\| "year"])')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATEADD(date, 1, 'day')")),(0,r.kt)("td",{parentName:"tr",align:null},"Supposing {DATE_COL} is 2022-03-14. The result is 2022-03-15."),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime columns and negative values are supported. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"DATEADD(DATE_TIME_COL, -1, 'day')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATEADD(date, 1, 'week')")),(0,r.kt)("td",{parentName:"tr",align:null},"Supposing {DATE_COL} is 2022-03-14 03:14. The result is 2022-03-21 03:14."),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime columns and negative values are supported. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"DATEADD(DATE_TIME_COL, -1, 'week')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATEADD(date, 1, 'month')")),(0,r.kt)("td",{parentName:"tr",align:null},"Supposing {DATE_COL} is 2022-03-14 03:14. The result is 2022-04-14 03:14."),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime columns and negative values are supported. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"DATEADD(DATE_TIME_COL, -1, 'month')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATEADD(date, 1, 'year')")),(0,r.kt)("td",{parentName:"tr",align:null},"Supposing {DATE_COL} is 2022-03-14 03:14. The result is 2023-03-14 03:14."),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime columns and negative values are supported. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"DATEADD(DATE_TIME_COL, -1, 'year')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'IF(NOW() < DATEADD(date,10,\'day\'), "true", "false")')),(0,r.kt)("td",{parentName:"tr",align:null},"If the current date is less than {DATE_COL} plus 10 days, it returns true. Otherwise, it returns false."),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime columns and negative values are supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'IF(NOW() < DATEADD(date,10,\'day\'), "true", "false")')),(0,r.kt)("td",{parentName:"tr",align:null},"If the current date is less than {DATE_COL} plus 10 days, it returns true. Otherwise, it returns false."),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime columns and negative values are supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DATETIME_DIFF")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'DATETIME_DIFF(date, date, ["milliseconds" \\| "ms" \\| "seconds" \\| "s" \\| "minutes" \\| "m" \\| "hours" \\| "h" \\| "days" \\| "d" \\| "weeks" \\| "w" \\| "months" \\| "M" \\| "quarters" \\| "Q" \\| "years" \\| "y"])')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'DATETIME_DIFF("2022/10/14", "2022/10/15", "second")')),(0,r.kt)("td",{parentName:"tr",align:null},"Supposing {DATE_COL_1} is 2017-08-25 and {DATE_COL_2} is 2011-08-25. The result is 86400."),(0,r.kt)("td",{parentName:"tr",align:null},"Compares two dates and returns the difference in the unit specified. Positive integers indicate the second date being in the past compared to the first and vice versa for negative ones.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'WEEKDAY(NOW(), "sunday")')),(0,r.kt)("td",{parentName:"tr",align:null},"If today is Monday, it returns 1"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the week day of NOW() with the first day set as sunday")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WEEKDAY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WEEKDAY(date, [startDayOfWeek])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WEEKDAY(NOW())")),(0,r.kt)("td",{parentName:"tr",align:null},"If today is Monday, it returns 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the day of the week as an integer between 0 and 6 inclusive starting from Monday by default. You can optionally change the start day of the week by specifying in the second argument")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'WEEKDAY(NOW(), "sunday")')),(0,r.kt)("td",{parentName:"tr",align:null},"If today is Monday, it returns 1"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the week day of NOW() with the first day set as sunday")))),(0,r.kt)("h3",{id:"logical-operators"},"Logical Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} < {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} > {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} <= {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} >= {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"==")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} == {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{Column1} != {Column2}")),(0,r.kt)("td",{parentName:"tr",align:null},"Not equal to")))),(0,r.kt)("h3",{id:"conditional-expressions"},"Conditional Expressions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"),(0,r.kt)("th",{parentName:"tr",align:null},"Output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"IF")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IF(expr, successCase, elseCase)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IF({Column} > 1, Value1, Value2)")),(0,r.kt)("td",{parentName:"tr",align:null},"successCase if ",(0,r.kt)("inlineCode",{parentName:"td"},"expr")," evaluates to TRUE, elseCase otherwise")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SWITCH")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SWITCH(expr, [pattern, value, ..., default])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SWITCH({Column}, 1, 'One', 2, 'Two', '--')")),(0,r.kt)("td",{parentName:"tr",align:null},"Switch case value based on ",(0,r.kt)("inlineCode",{parentName:"td"},"expr")," output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"AND")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AND(expr1, [expr2,...])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AND({Column} > 2, {Column} < 10)")),(0,r.kt)("td",{parentName:"tr",align:null},"TRUE if all ",(0,r.kt)("inlineCode",{parentName:"td"},"expr")," evaluate to TRUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OR(expr1, [expr2,...])")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OR({Column} > 2, {Column} < 10)")),(0,r.kt)("td",{parentName:"tr",align:null},"TRUE if at least one ",(0,r.kt)("inlineCode",{parentName:"td"},"expr")," evaluates to TRUE")))),(0,r.kt)("p",null,"Logical operators, along with Numerical operators can be used to build conditional ",(0,r.kt)("inlineCode",{parentName:"p"},"expressions"),".   "),(0,r.kt)("p",null,"Examples: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'IF({marksSecured} > 80, "GradeA", "GradeB")  \n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SWITCH({quarterNumber},  \n    1, 'Jan-Mar',\n    2, 'Apr-Jun',\n    3, 'Jul-Sep',\n    4, 'Oct-Dec',\n    'INVALID'\n)\n")))}k.isMDXComponent=!0}}]);