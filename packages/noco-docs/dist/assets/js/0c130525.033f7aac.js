"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[604],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},N="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=p(n),s=r,k=N["".concat(o,".").concat(s)]||N[s]||u[s]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[N]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},37456:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Environment Variables",description:"Environment Variables for NocoDB!",hide_table_of_contents:!0},i=void 0,d={unversionedId:"getting-started/environment-variables",id:"version-0.109.7/getting-started/environment-variables",title:"Environment Variables",description:"Environment Variables for NocoDB!",source:"@site/versioned_docs/version-0.109.7/020.getting-started/020.environment-variables.md",sourceDirName:"020.getting-started",slug:"/getting-started/environment-variables",permalink:"/0.109.7/getting-started/environment-variables",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/020.getting-started/020.environment-variables.md",tags:[],version:"0.109.7",sidebarPosition:20,frontMatter:{title:"Environment Variables",description:"Environment Variables for NocoDB!",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/0.109.7/getting-started/installation"},next:{title:"Upgrading",permalink:"/0.109.7/getting-started/upgrading"}},o={},p=[],m={toc:p},N="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(N,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For production usecases, it is ",(0,r.kt)("strong",{parentName:"p"},"recommended")," to configure "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NC_DB"),", "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NC_AUTH_JWT_SECRET"),", "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NC_PUBLIC_URL"),", "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NC_REDIS_URL"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"),(0,r.kt)("th",{parentName:"tr",align:null},"If absent"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DB"),(0,r.kt)("td",{parentName:"tr",align:null},"See our database URLs"),(0,r.kt)("td",{parentName:"tr",align:null},"A local SQLite will be created in root folder if ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DB_JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," and value should be valid knex connection JSON"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DB_JSON_FILE"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," and value should be a valid path to knex connection JSON"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATABASE_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC URL Format. Can be used instead of NC_DB."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATABASE_URL_FILE"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used instead of DATABASE_URL: path to file containing JDBC URL Format."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_AUTH_JWT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT secret used for auth and storing other secrets"),(0,r.kt)("td",{parentName:"tr",align:null},"A random secret will be generated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"For setting app running port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8080"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DB_QUERY_LIMIT_DEFAULT"),(0,r.kt)("td",{parentName:"tr",align:null},"Default pagination limit"),(0,r.kt)("td",{parentName:"tr",align:null},"25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DB_QUERY_LIMIT_MAX"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum allowed pagination limit"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DB_QUERY_LIMIT_MIN"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum allowed pagination limit"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_TOOL_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"App directory to keep metadata and app related files"),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to current working directory. In docker maps to ",(0,r.kt)("inlineCode",{parentName:"td"},"/usr/app/data/")," for mounting volume.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_PUBLIC_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Used for sending Email invitations"),(0,r.kt)("td",{parentName:"tr",align:null},"Best guess from http request params")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_JWT_EXPIRES_IN"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT token expiry time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10h"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_CONNECT_TO_EXTERNAL_DB_DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable Project creation with external database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_INVITE_ONLY_SIGNUP"),(0,r.kt)("td",{parentName:"tr",align:null},"Removed since version 0.99.0 and now it's recommended to use ",(0,r.kt)("a",{parentName:"td",href:"/0.109.7/setup-and-usages/account-settings#enable--disable-signup"},"super admin settings menu"),".   Allow users to signup only via invite url, value should be any non-empty string."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUXT_PUBLIC_NC_BACKEND_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Backend URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://localhost:8080")," will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_REQUEST_BODY_SIZE"),(0,r.kt)("td",{parentName:"tr",align:null},"Request body size ",(0,r.kt)("a",{parentName:"td",href:"https://expressjs.com/en/resources/middleware/body-parser.html#limit"},"limit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1048576"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_EXPORT_MAX_TIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:null},"After NC_EXPORT_MAX_TIMEOUT csv gets downloaded in batches"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value 5000(in millisecond) will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DISABLE_TELE"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable telemetry"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DASHBOARD_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom dashboard url path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dashboard"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_GOOGLE_CLIENT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Google client id to enable google authentication"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_GOOGLE_CLIENT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"Google client secret to enable google authentication"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_MIGRATIONS_DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable NocoDB migration"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_MIN"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to any non-empty string the default splash screen(initial welcome animation) and matrix screensaver will disable"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SENTRY_DSN"),(0,r.kt)("td",{parentName:"tr",align:null},"For Sentry monitoring"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_REDIS_URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Redis URL. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"redis://:authpassword@127.0.0.1:6380/4")),(0,r.kt)("td",{parentName:"tr",align:null},"Meta data will be stored in memory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DISABLE_ERR_REPORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable error reporting"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DISABLE_CACHE"),(0,r.kt)("td",{parentName:"tr",align:null},"To be used only while debugging. On setting this to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," - meta data be fetched from db instead of redis/cache."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ACCESS_KEY_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"For Litestream - S3 access key id"),(0,r.kt)("td",{parentName:"tr",align:null},"If Litestream is configured and ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not present. SQLite gets backed up to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_SECRET_ACCESS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"For Litestream - S3 secret access key"),(0,r.kt)("td",{parentName:"tr",align:null},"If Litestream is configured and ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not present. SQLite gets backed up to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_BUCKET"),(0,r.kt)("td",{parentName:"tr",align:null},"For Litestream - S3 bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"If Litestream is configured and ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not present. SQLite gets backed up to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_BUCKET_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"For Litestream - S3 bucket path (like folder within S3 bucket)"),(0,r.kt)("td",{parentName:"tr",align:null},"If Litestream is configured and ",(0,r.kt)("inlineCode",{parentName:"td"},"NC_DB")," is not present. SQLite gets backed up to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_FROM"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin - Email sender address"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin - SMTP host value"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin - SMTP port value"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_USERNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin (Optional) - SMTP username value for authentication"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin (Optional) - SMTP password value for authentication"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_SECURE"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin (Optional) - To enable secure set value as ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," any other value treated as false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_SMTP_IGNORE_TLS"),(0,r.kt)("td",{parentName:"tr",align:null},"For SMTP plugin (Optional) - To ignore tls set value as ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," any other value treated as false. For more info visit ",(0,r.kt)("a",{parentName:"td",href:"https://nodemailer.com/smtp/"},"https://nodemailer.com/smtp/")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_S3_BUCKET_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"For S3 storage plugin - AWS S3 bucket name"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_S3_REGION"),(0,r.kt)("td",{parentName:"tr",align:null},"For S3 storage plugin - AWS S3 region"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_S3_ACCESS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"For S3 storage plugin - AWS access key credential for accessing resource"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_S3_ACCESS_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"For S3 storage plugin - AWS access secret credential for accessing resource"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_ADMIN_EMAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"For updating/creating super admin with provided email and password"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_ATTACHMENT_FIELD_SIZE"),(0,r.kt)("td",{parentName:"tr",align:null},"For setting the attachment field size(in Bytes)"),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to 20MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_ADMIN_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"For updating/creating super admin with provided email and password. Your password should have at least 8 letters with one uppercase, one number and one special letter(Allowed special chars $&+,:;=?@#","|","'.^*()%!_-\" )"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NODE_OPTIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"For passing Node.js ",(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/api/cli.html#node_optionsoptions"},"options")," to instance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_MINIMAL_DBS"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new SQLite file for each project. All the db files are stored in ",(0,r.kt)("inlineCode",{parentName:"td"},"nc_minimal_dbs")," folder in current working directory. (This option restricts project creation on external sources)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_DISABLE_AUDIT"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable Audit Log"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC_AUTOMATION_LOG_LEVEL"),(0,r.kt)("td",{parentName:"tr",align:null},"Possible Values: ",(0,r.kt)("inlineCode",{parentName:"td"},"OFF"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ERROR"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ALL"),". See ",(0,r.kt)("a",{parentName:"td",href:"/0.109.7/developer-resources/webhooks#call-log"},"Webhooks")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OFF"))))))}u.isMDXComponent=!0}}]);