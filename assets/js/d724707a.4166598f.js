"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[1179],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),l=n(4334),i=n(2389),o=n(7392),s=n(7094),d=n(2466),p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,k=e.values,g=e.groupId,h=e.className,N=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:N[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),w=v.tabGroupChoices,E=v.setTabGroupChoices,C=(0,a.useState)(b),_=C[0],T=C[1],A=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=w[g];null!=S&&S!==_&&y.some((function(e){return e.value===S}))&&T(S)}var P=function(e){var t=e.currentTarget,n=A.indexOf(t),r=y[n].value;r!==_&&(x(t),T(r),null!=g&&E(g,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=A.indexOf(e.currentTarget)+1;n=null!=(r=A[a])?r:A[0];break;case"ArrowLeft":var l,i=A.indexOf(e.currentTarget)-1;n=null!=(l=A[i])?l:A[A.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return A.push(e)},onKeyDown:D,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(N.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function m(e){var t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},1675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=n(5488),o=n(5162),s=["components"],d={title:"JS Client"},p="Encryption JS Client Library v0.1.4",u={unversionedId:"encryption/api_reference/js-client",id:"encryption/api_reference/js-client",title:"JS Client",description:"Installation",source:"@site/docs/07-encryption/99-api_reference/js-client.mdx",sourceDirName:"07-encryption/99-api_reference",slug:"/encryption/api_reference/js-client",permalink:"/docs/encryption/api_reference/js-client",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/07-encryption/99-api_reference/js-client.mdx",tags:[],version:"current",frontMatter:{title:"JS Client"},sidebar:"tutorialSidebar",previous:{title:"blindnet Encryption Engine API References",permalink:"/docs/encryption/api_reference/"},next:{title:"Node.js Server",permalink:"/docs/encryption/api_reference/node-server"}},c={},m=[{value:"Installation",id:"installation",level:2},{value:"Imports",id:"imports",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Return type",id:"return-type",level:4},{value:"Refreshing the session",id:"refreshing-the-session",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Return type",id:"return-type-1",level:4},{value:"Logging-in",id:"logging-in",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Return type",id:"return-type-2",level:4},{value:"Errors",id:"errors",level:4},{value:"Deriving secrets",id:"deriving-secrets",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Return type",id:"return-type-3",level:4},{value:"Logging-out",id:"logging-out",level:2},{value:"Changing login secret",id:"changing-login-secret",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Return type",id:"return-type-4",level:4},{value:"Errors",id:"errors-1",level:4},{value:"Encrypting",id:"encrypting",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"Return type",id:"return-type-5",level:4},{value:"Errors",id:"errors-2",level:4},{value:"Decrypting",id:"decrypting",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"Return type",id:"return-type-6",level:4},{value:"Errors",id:"errors-3",level:4},{value:"Errors",id:"errors-4",level:4},{value:"Giving access to a user",id:"giving-access-to-a-user",level:2},{value:"Parameters",id:"parameters-7",level:4},{value:"Return type",id:"return-type-7",level:4},{value:"Errors",id:"errors-5",level:4},{value:"Helper methods",id:"helper-methods",level:2},{value:"Encoding",id:"encoding",level:3},{value:"Encode to base64 string",id:"encode-to-base64-string",level:4},{value:"Encode to hexadecimal string",id:"encode-to-hexadecimal-string",level:4},{value:"Decoding",id:"decoding",level:3},{value:"Decode from base64 string",id:"decode-from-base64-string",level:4},{value:"Decode from hexadecimal string",id:"decode-from-hexadecimal-string",level:4}],k={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"encryption-js-client-library-v014"},"Encryption JS Client Library v0.1.4"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Pick one of the following methods to install the blindnet encryption engine."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following command in your terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -S @blindnet/sdk-javascript\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,l.kt)("p",null,"Run the following command in your terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @blindnet/sdk-javascript\n"))),(0,l.kt)(o.Z,{value:"umd",label:"umd",mdxType:"TabItem"},(0,l.kt)("p",null,"Download the ",(0,l.kt)("a",{parentName:"p",href:"https://irian.to/blogs/what-are-cjs-amd-umd-and-esm-in-javascript/"},"umd")," file and include it in your ",(0,l.kt)("inlineCode",{parentName:"p"},"HTML")," file.",(0,l.kt)("br",{parentName:"p"}),"\n","File can be downloaded ",(0,l.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/blindnet-io/blindnet-sdk-js/develop/lib/index.umd.js"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="blindnet.umd.js"><\/script>\n')))),(0,l.kt)("h2",{id:"imports"},"Imports"),(0,l.kt)("p",null,"If the SDK was installed as an ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," package, it is imported as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Blindnet, util, error } from '@blindnet/sdk-javascript';\n")),(0,l.kt)("p",null,"If it was imported as an ",(0,l.kt)("inlineCode",{parentName:"p"},"umd")," package, use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { Blindnet, util, error } = blindnet;\n")),(0,l.kt)("p",null,"The API is encapsulated in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Blindnet")," class."),(0,l.kt)("h2",{id:"initialization"},"Initialization"),(0,l.kt)("p",null,"blindnet encryption engine must be initialized before you can use it (with the exception of some static methods, e.g. ",(0,l.kt)("a",{parentName:"p",href:"/docs/encryption/managing_users_access#splitting-secrets"},"secret derivation")," method)."),(0,l.kt)("p",null,"Initialization is done with the ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function init(token: string, endpoint?: string): Blindnet;\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Authentication token generated")," by server SDK.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"URL of the blindnet server. The default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"https://api.blindnet.io"),". For testing, use ",(0,l.kt)("inlineCode",{parentName:"td"},"https://test.blindnet.io"),".")))),(0,l.kt)("h4",{id:"return-type"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Blindnet")," (An instance which you use to call SDK methods.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'linenums="1"',linenums:'"1"'},"const blindnet = Blindnet.init(token);\nblindnet.connect(secret);\n")),(0,l.kt)("h2",{id:"refreshing-the-session"},"Refreshing the session"),(0,l.kt)("p",null,"After the token expires, ",(0,l.kt)("a",{parentName:"p",href:"/docs/encryption/troubleshooting#authenticationerror"},"AuthenticationError")," will be thrown on api calls.\n",(0,l.kt)("a",{parentName:"p",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Generate a new token")," using server SDK and call ",(0,l.kt)("inlineCode",{parentName:"p"},"refreshToken"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function refreshToken(token: string): void;\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Authentication token generated")," by server SDK.")))),(0,l.kt)("h4",{id:"return-type-1"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h2",{id:"logging-in"},"Logging-in"),(0,l.kt)("p",null,"A user must be logged into blindnet before using any Blindnet API methods (with the of some static methods or when ",(0,l.kt)("a",{parentName:"p",href:"/docs/encryption/encrypt"},"encrypting"),").\nThe user both ",(0,l.kt)("a",{parentName:"p",href:"/docs/encryption/managing_users_access#registering-and-logging-users-in-blindnet"},"registers and later authenticates")," in blindnet with the method ",(0,l.kt)("inlineCode",{parentName:"p"},"connect"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function connect(secret: string): Promise<void>;\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"A secret value used to encrypt and decrypt ",(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#private-key"},"user's keys"),". Usually, should be derived from user's password using the ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#splitting-secrets"},"deriveSecrets")," method.")))),(0,l.kt)("h4",{id:"return-type-2"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("p",null,"The operation succeeded if an exception wasn't thrown."),(0,l.kt)("h4",{id:"errors"},"Errors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuthenticationError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#authentication-token"},"Token")," has expired or is invalid. ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Generate a new token")," and call ",(0,l.kt)("a",{parentName:"td",href:"#refreshing-the-session"},"refreshToken"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlindnetServiceError"),(0,l.kt)("td",{parentName:"tr",align:null},"Error on blindnet server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PasswordError"),(0,l.kt)("td",{parentName:"tr",align:null},"A bad ",(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#secret-value"},"secret")," has been provided. Could not decrypt the ",(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#private-key"},"user's keys"),".")))),(0,l.kt)("h3",{id:"deriving-secrets"},"Deriving secrets"),(0,l.kt)("p",null,"User's password is sensitive data. As it can be used both to log into your application and to encrypt the user's keys in blindnet, it should be split into two parts and each part should be used for different purposes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function deriveSecrets(password: string): Promise<{ blindnetSecret: string; appSecret: string }>;\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"A value generated by a user. It can be the user's password or e.g. answer to a security question.")))),(0,l.kt)("h4",{id:"return-type-3"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{ blindnetSecret: string, appSecret: string }>")),(0,l.kt)("p",null,"If a user's log-in password is used as an input parameter, use ",(0,l.kt)("inlineCode",{parentName:"p"},"blindnetSecret")," in the ",(0,l.kt)("a",{parentName:"p",href:"#logging-in"},"connect")," method and ",(0,l.kt)("inlineCode",{parentName:"p"},"appSecret")," to log-into your application."),(0,l.kt)("h2",{id:"logging-out"},"Logging-out"),(0,l.kt)("p",null,"After the user is logged out of your app, the following method should be called to clean the ",(0,l.kt)("a",{parentName:"p",href:"/docs/references/glossary#private-key"},"user's keys")," from the browser"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"Blindnet.disconnect();\n")),(0,l.kt)("h2",{id:"changing-login-secret"},"Changing login secret"),(0,l.kt)("p",null,"If an app password is used to log-in users into blindnet, make sure to call this method after a user changes the password. Remember to call ",(0,l.kt)("a",{parentName:"p",href:"#deriving-secrets"},"deriveSecrets"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function changeSecret(newSecret: string, oldSecret?: string): Promise<void>;\n")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newSecret"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"A new secret used to encrypt ",(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#private-key"},"user's keys"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oldSecret"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Current secret used to encrypt ",(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#private-key"},"user's keys"),". If the user is currently not ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#registering-and-logging-users-in-blindnet"},"logged into")," blindnet, ",(0,l.kt)("inlineCode",{parentName:"td"},"oldSecret")," should be provided into the method ",(0,l.kt)("inlineCode",{parentName:"td"},"changeSecret"),".")))),(0,l.kt)("h4",{id:"return-type-4"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("p",null,"The operation succeeded if an exception wasn't thrown."),(0,l.kt)("h4",{id:"errors-1"},"Errors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuthenticationError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#authentication-token"},"Token")," has expired or is invalid. ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Generate a new token")," and call ",(0,l.kt)("a",{parentName:"td",href:"#refreshing-the-session"},"refreshToken"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlindnetServiceError"),(0,l.kt)("td",{parentName:"tr",align:null},"Error on blindnet server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PasswordError"),(0,l.kt)("td",{parentName:"tr",align:null},"Bad ",(0,l.kt)("inlineCode",{parentName:"td"},"oldSecret")," is provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserNotInitializedError"),(0,l.kt)("td",{parentName:"tr",align:null},"A user is not ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#registering-and-logging-users-in-blindnet"},"logged into")," blindnet and ",(0,l.kt)("inlineCode",{parentName:"td"},"oldSecret")," is not provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserNotFoundError"),(0,l.kt)("td",{parentName:"tr",align:null},"A user was not ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#registering-and-logging-users-in-blindnet"},"registered")," or was ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#deleting-encrypted-data-keys"},"deleted")," from blindnet.")))),(0,l.kt)("h2",{id:"encrypting"},"Encrypting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function encrypt(\n  data: string | File | ArrayBuffer | Uint8Array,\n  metadata?: { [key: string]: any }\n): Promise<{ dataId: string; encryptedData: ArrayBuffer }>;\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"File")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Data to encrypt. Multiple types are supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ [key: string]: any }")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata in JSON format.")))),(0,l.kt)("h4",{id:"return-type-5"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{ dataId: string, encryptedData: ArrayBuffer }>")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataId")," can be used to ",(0,l.kt)("a",{parentName:"p",href:"/docs/encryption/managing_users_access#deleting-encrypted-data-keys"},"delete a data keys")," using the ",(0,l.kt)("strong",{parentName:"p"},"Server SDK"),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"encryptedData")," can be ",(0,l.kt)("a",{parentName:"p",href:"/docs/encryption/encrypt#encode"},"encoded")," using ",(0,l.kt)("a",{parentName:"p",href:"#encode-to-base64-string"},"toBase64")," and ",(0,l.kt)("a",{parentName:"p",href:"#encode-to-hexadecimal-string"},"toHex")," methods."),(0,l.kt)("h4",{id:"errors-2"},"Errors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuthenticationError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#authentication-token"},"Token")," has expired or is invalid. ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Generate a new token")," and call ",(0,l.kt)("a",{parentName:"td",href:"#refreshing-the-session"},"refreshToken"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlindnetServiceError"),(0,l.kt)("td",{parentName:"tr",align:null},"Error on blindnet server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BadFormatError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"data")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"metadata")," has a wrong type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NotEncryptabeError"),(0,l.kt)("td",{parentName:"tr",align:null},"There are no users to encrypt the ",(0,l.kt)("inlineCode",{parentName:"td"},"data")," to.")))),(0,l.kt)("h2",{id:"decrypting"},"Decrypting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function decrypt(encryptedData: ArrayBuffer | Uint8Array): Promise<{\n  data: string | File | Bytes;\n  metadata: { dataType: DataType; [key: string]: any };\n}>;\n")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryptedData"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Encrypted data to decrypt (the result of the ",(0,l.kt)("a",{parentName:"td",href:"#encrypting"},"encrypt")," method). If it was ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/encrypt#encode"},"encoded"),", it can be decoded using ",(0,l.kt)("a",{parentName:"td",href:"#decode-from-base64-string"},"fromBase64")," or ",(0,l.kt)("a",{parentName:"td",href:"#decode-from-hexadecimal-string"},"fromHex"),".")))),(0,l.kt)("h4",{id:"return-type-6"},"Return type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"Promise<{\n    data: string | File | ArrayBuffer | Uint8Array,\n    metadata: { dataType: DataType, [key: string]: any; }}>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type DataType = { type: 'STRING' } | { type: 'FILE'; name: string } | { type: 'BYTES' };\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"data")," is in the format it was originally provided to the ",(0,l.kt)("a",{parentName:"p",href:"#encrypting"},"encrypt")," method. If not known, it can be inspected from the ",(0,l.kt)("inlineCode",{parentName:"p"},"dataType")," property of the ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata"),"."),(0,l.kt)("h4",{id:"errors-3"},"Errors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuthenticationError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#authentication-token"},"Token")," has expired or is invalid. ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Generate a new token")," and call ",(0,l.kt)("a",{parentName:"td",href:"#refreshing-the-session"},"refreshToken"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlindnetServiceError"),(0,l.kt)("td",{parentName:"tr",align:null},"Error on blindnet server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserNotInitializedError"),(0,l.kt)("td",{parentName:"tr",align:null},"A user is not ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#registering-and-logging-users-in-blindnet"},"logged into")," blindnet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoAccessError"),(0,l.kt)("td",{parentName:"tr",align:null},"A user has no ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#giving-access-to-other-users"},"access")," to encrypted data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EncryptionError"),(0,l.kt)("td",{parentName:"tr",align:null},"Data could not be decrypted. Either due to wrong data format or the keys were ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#deleting-encrypted-data-keys"},"deleted")," from blindnet.")))),(0,l.kt)("h4",{id:"errors-4"},"Errors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuthenticationError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#authentication-token"},"Token")," has expired or is invalid. ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Generate a new token")," and call ",(0,l.kt)("a",{parentName:"td",href:"#refreshing-the-session"},"refreshToken"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlindnetServiceError"),(0,l.kt)("td",{parentName:"tr",align:null},"Error on blindnet server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserNotInitializedError"),(0,l.kt)("td",{parentName:"tr",align:null},"A user is not ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#registering-and-logging-users-in-blindnet"},"logged into")," blindnet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoAccessError"),(0,l.kt)("td",{parentName:"tr",align:null},"A user has no ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#giving-access-to-other-users"},"access")," to encrypted data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EncryptionError"),(0,l.kt)("td",{parentName:"tr",align:null},"Data could not be decrypted. Either due to wrong data format or the keys were ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#deleting-encrypted-data-keys"},"deleted")," from blindnet.")))),(0,l.kt)("h2",{id:"giving-access-to-a-user"},"Giving access to a user"),(0,l.kt)("p",null,"A user can give access to all the encrypted data (to which the user already has access to) to another user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function giveAccess(userId: string): Promise<void>;\n")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of a user to whom access is being given.")))),(0,l.kt)("h4",{id:"return-type-7"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("p",null,"The operation succeeded if an exception wasn't thrown."),(0,l.kt)("h4",{id:"errors-5"},"Errors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuthenticationError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/references/glossary#authentication-token"},"Token")," has expired or is invalid. ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#creating-user-tokens"},"Generate a new token")," and call ",(0,l.kt)("a",{parentName:"td",href:"#refreshing-the-session"},"refreshToken"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlindnetServiceError"),(0,l.kt)("td",{parentName:"tr",align:null},"Error on blindnet server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserNotFoundError"),(0,l.kt)("td",{parentName:"tr",align:null},"A user whose id was provided as a parameter was not registered or was ",(0,l.kt)("a",{parentName:"td",href:"/docs/encryption/managing_users_access#deleting-encrypted-data-keys"},"deleted")," from blindnet.")))),(0,l.kt)("h2",{id:"helper-methods"},"Helper methods"),(0,l.kt)("p",null,"blindnet encryption engine provides the methods to encode and decode encrypted data, so it can be easily transferred and stored."),(0,l.kt)("p",null,"Helper methods can be imported as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { util } from '@blindnet/sdk-javascript';\nconst { toBase64, fromBase64, toHex, fromHex } = util;\n")),(0,l.kt)("h3",{id:"encoding"},"Encoding"),(0,l.kt)("p",null,"Encrypted data (result of the ",(0,l.kt)("a",{parentName:"p",href:"#encrypting"},"encrypt")," method) can be encoded using the following methods:"),(0,l.kt)("h4",{id:"encode-to-base64-string"},"Encode to base64 string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function toBase64(encryptedData: ArrayBuffer): string;\n")),(0,l.kt)("h4",{id:"encode-to-hexadecimal-string"},"Encode to hexadecimal string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function toHex(encryptedData: ArrayBuffer): string;\n")),(0,l.kt)("h3",{id:"decoding"},"Decoding"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"base64")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"hex")," encoded string can be decoded into ",(0,l.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")," (and then passed to the ",(0,l.kt)("a",{parentName:"p",href:"#decrypting"},"decrypt")," method) using the following methods:"),(0,l.kt)("h4",{id:"decode-from-base64-string"},"Decode from base64 string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function fromBase64(encoded: string): ArrayBuffer;\n")),(0,l.kt)("h4",{id:"decode-from-hexadecimal-string"},"Decode from hexadecimal string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function fromHex(encoded: string): ArrayBuffer;\n")))}g.isMDXComponent=!0}}]);