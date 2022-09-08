"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[6803],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4162:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={title:"Troubleshooting",sidebar_position:6},p=void 0,c={unversionedId:"encryption/troubleshooting",id:"encryption/troubleshooting",title:"Troubleshooting",description:"Errors can arise during the usage of the blindnet encryption engine and should be handled accordingly.",source:"@site/docs/07-encryption/06-troubleshooting.mdx",sourceDirName:"07-encryption",slug:"/encryption/troubleshooting",permalink:"/docs/encryption/troubleshooting",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/07-encryption/06-troubleshooting.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Troubleshooting",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Managing users and access",permalink:"/docs/encryption/managing_users_access"},next:{title:"blindnet Encryption Engine API References",permalink:"/docs/encryption/api_reference/"}},l={},d=[{value:"AuthenticationError",id:"authenticationerror",level:3},{value:"UserNotInitializedError",id:"usernotinitializederror",level:3},{value:"PasswordError",id:"passworderror",level:2},{value:"EncryptionError",id:"encryptionerror",level:2},{value:"NotEncryptableError",id:"notencryptableerror",level:2},{value:"NoAccessError",id:"noaccesserror",level:2},{value:"UserNotFoundError",id:"usernotfounderror",level:2},{value:"BadFormatError",id:"badformaterror",level:2},{value:"Firefox problem with IndexedDB.",id:"firefox-problem-with-indexeddb",level:2},{value:"IE problem.",id:"ie-problem",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Errors can arise during the usage of the blindnet encryption engine and should be handled accordingly.",(0,o.kt)("br",{parentName:"p"}),"\n","Error types can be imported as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { error as blindnetError } from '@blindnet/sdk-javascript';\n")),(0,o.kt)("p",null,"and handled the following way"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try { await blindnet.decrypt(data) }\ncatch (e) {\n  if (e instanceof blindnetError.AuthenticationError) {\n    const newToken = await getToken() // your function to obtain token\n    blindnet.refreshToken(newToken)\n  } else if (e instanceof blindnetError.NoAccessError)\n  // notify the user about the problem\n}\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"blindnet.decrypt(data).catch(async e => {\n  if (e instanceof blindnetError.AuthenticationError) {\n    const newToken = await getToken() // your function to obtain token\n    blindnet.refreshToken(newToken)\n  } else if (e instanceof blindnetError.NoAccessError)\n  // notify the user about the problem\n})\n")),(0,o.kt)("p",null,"This page describes the different types of errors that can arise in the JavaScript Client SDK."),(0,o.kt)("h3",{id:"authenticationerror"},"AuthenticationError"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/glossary#authentication-token"},"Token")," is invalid or has expired.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": All SDK methods except ",(0,o.kt)("a",{parentName:"p",href:"./installation#initialization"},"init"),", ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#splitting-secrets"},"deriveSecrets")," and ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#logging-out-users"},"disconnect"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"solution"),": ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#creating-user-tokens"},"Generate a new token")," on the backend and pass it to the console."),(0,o.kt)("h3",{id:"usernotinitializederror"},"UserNotInitializedError"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": User\u2019s keys are missing from the browser's IndexedDB. This means either the user is not registered in blindnet or the keys have been manually deleted.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": ",(0,o.kt)("a",{parentName:"p",href:"./decrypt#decrypt"},"decrypt"),", ",(0,o.kt)("a",{parentName:"p",href:"./decrypt#decryptvalues"},"decryptValues"),", ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#changing-secrets"},"changeSecret"),", ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#giving-access-to-other-users"},"giveAccess"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"solution"),": Call ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#connecting-users-with-blindnet"},"connect")," method to get the keys."),(0,o.kt)("h2",{id:"passworderror"},"PasswordError"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": Wrong password is provided. The secret is different from the one provided when a user has registered or changed it so stored encrypted keys can\u2019t be decrypted.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#connecting-users-with-blindnet"},"connect")),(0,o.kt)("h2",{id:"encryptionerror"},"EncryptionError"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": Encrypted data can\u2019t be decrypted. This means either the encrypted data or the encrypted data key has been tampered with, or the wrong encrypted data or data id has been provided.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": ",(0,o.kt)("a",{parentName:"p",href:"./decrypt#decrypt"},"decrypt"),", ",(0,o.kt)("a",{parentName:"p",href:"./decrypt#decryptvalues"},"decryptValues")),(0,o.kt)("p",null,"BlindnetServiceError\n",(0,o.kt)("strong",{parentName:"p"},"explanation"),": Unexpected error occurred. Either the SDK wasn\u2019t able to reach the blindnet server or there was an error on the server.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": all SDK methods except init, ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#splitting-secrets"},"deriveSecrets")," and ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#logging-out-users"},"disconnect"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"solution"),": Retry the method call"),(0,o.kt)("h2",{id:"notencryptableerror"},"NotEncryptableError"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": Data can\u2019t be encrypted. A user group or empty or no user id was passed to generate a token.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": ",(0,o.kt)("a",{parentName:"p",href:"./encrypt#encrypt"},"encrypt"),", ",(0,o.kt)("a",{parentName:"p",href:"./encrypt#encryptvalues"},"encryptValues"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"solution"),": Add users to the group or generate a token with non-empty user id list."),(0,o.kt)("h2",{id:"noaccesserror"},"NoAccessError"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": A user can\u2019t decrypt the data. A user is missing the encryption keys for the encrypted data.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": ",(0,o.kt)("a",{parentName:"p",href:"./decrypt#decrypt"},"decrypt"),", ",(0,o.kt)("a",{parentName:"p",href:"./decrypt#decryptvalues"},"decryptValues"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"solution"),": Another user with access has to give her the access with the method giveAccess."),(0,o.kt)("h2",{id:"usernotfounderror"},"UserNotFoundError"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": A user who is being given access to a document is not registered into blindnet",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#giving-access-to-other-users"},"giveAccess"),", ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#changing-secrets"},"changeSecret"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"solution"),": The user being given access to has to register to blindnet using the connect method."),(0,o.kt)("h2",{id:"badformaterror"},"BadFormatError"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": Format of data or metadata passed to encrypting methods is not in the supported format.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"api methods"),": ",(0,o.kt)("a",{parentName:"p",href:"./encrypt#encrypt"},"encrypt"),", ",(0,o.kt)("a",{parentName:"p",href:"./encrypt#encryptvalues"},"encryptValues"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"solution"),": Check the supported formats and convert the data accordingly."),(0,o.kt)("h2",{id:"firefox-problem-with-indexeddb"},"Firefox problem with IndexedDB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": Firefox doesn\u2019t support IndexedDB in private browsing mode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Uncaught (in promise) DOMException: A mutation operation was attempted on a database that did not allow mutations\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"solution"),": Warn a user not to use the private browsing mode on Firefox."),(0,o.kt)("h2",{id:"ie-problem"},"IE problem."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"explanation"),": Internet explorer has very limited support for web crypto API so the blindnet encryption engine doesn\u2019t work on it.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"solution"),": Warn a user to use a different browser."))}m.isMDXComponent=!0}}]);