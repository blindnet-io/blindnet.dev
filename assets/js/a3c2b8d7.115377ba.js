"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[4528],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:1,tags:["how-it-works"]},l="Blindnet Encryption Engine in Web Applications",p={unversionedId:"references/archive/encryption-engine",id:"references/archive/encryption-engine",title:"Blindnet Encryption Engine in Web Applications",description:"How It Works",source:"@site/docs/08-references/99-archive/01-encryption-engine.mdx",sourceDirName:"08-references/99-archive",slug:"/references/archive/encryption-engine",permalink:"/docs/references/archive/encryption-engine",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/08-references/99-archive/01-encryption-engine.mdx",tags:[{label:"how-it-works",permalink:"/docs/tags/how-it-works"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["how-it-works"]},sidebar:"tutorialSidebar",previous:{title:"References - Archive",permalink:"/docs/references/archive/"}},c={},d=[{value:"How It Works",id:"how-it-works",level:2},{value:"Components",id:"components",level:2},{value:"Security",id:"security",level:2},{value:"User private keys",id:"user-private-keys",level:3},{value:"User passwords",id:"user-passwords",level:3}],u={toc:d};function y(e){var t=e.components,o=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blindnet-encryption-engine-in-web-applications"},"Blindnet Encryption Engine in Web Applications"),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"To protect user data in your web application, blindnet provides an SDK for data encryption and decryption, and for managing encryption keys. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Blindnet Encryption Engine in web and mixed applications.",src:n(5160).Z,width:"987",height:"383"})),(0,a.kt)("p",null,"Let\u2019s call our receiver Alice and our sender Bob. With blindnet, if Bob wants to send data (e.g., a text message or a file) to Alice, the process is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bob inputs the data (e.g. a file) into the web application's interface"),(0,a.kt)("li",{parentName:"ul"},"The web application will use blindnet devkit to encrypt the data"),(0,a.kt)("li",{parentName:"ul"},"Encrypted data should then be transferred and stored on your app's server"),(0,a.kt)("li",{parentName:"ul"},"When Alice requests the data (or immediately after the data was stored), your app delivers the encrypted data to her"),(0,a.kt)("li",{parentName:"ul"},"The web application on Alice's device will use blindnet devkit to decrypt the data"),(0,a.kt)("li",{parentName:"ul"},"Alice views the original data that Bob sent to her")),(0,a.kt)("p",null,"This workflow ensures that only Alice and Bob have access to the data. To be more precise, only Alice and Bob possess the encryption key used to encrypt the file.\nWhile stored and in transfer, the file is encrypted and neither blindnet nor the app\u2019s server are able to access it."),(0,a.kt)("p",null,"After the data is decrypted in Alice's web application, it can simply be saved on her device. The data stays encrypted on the app's server and Step 4 can be carried out multiple times."),(0,a.kt)("p",null,"In step 2. (The web application will use blindnet api to encrypt the message), blindnet api performs the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generates an ephemeral encryption key and encrypts the data"),(0,a.kt)("li",{parentName:"ul"},"Obtains Alice's public key and verifies it belongs to her"),(0,a.kt)("li",{parentName:"ul"},"Encrypts the ephemeral encryption key and saves it to the blinenet server"),(0,a.kt)("li",{parentName:"ul"},"Returns the encrypted data")),(0,a.kt)("p",null,"In Step 4. (The web application on Alices's device will use blindnet's API to decrypt the data), the blindnet Encryption Engine performs the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Obtains the encrypted ephemeral key from blindnet\u2019s server"),(0,a.kt)("li",{parentName:"ul"},"Uses Alice's private key to decrypt they key"),(0,a.kt)("li",{parentName:"ul"},"Uses the decrypted key to decrypt the encrypted data"),(0,a.kt)("li",{parentName:"ul"},"Returns the original data")),(0,a.kt)("p",null,"The blindnet Encryption Engine supports use cases in which data senders can be both registered or unregistered users of your application. Data exhange between two registered users works in a way similar to the one described above, with a difference that teh symmetric key for encrypting the data from Bob to Alice is always the same, and it is securely stored on blindnet servers after it has been previously encrypted with Bob's and Alice's public keys."),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Blindnet Encryption Engine related Components",src:n(3856).Z,width:"727",height:"404"})),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("h3",{id:"user-private-keys"},"User private keys"),(0,a.kt)("p",null,"All user key pairs are always randomly generated. Before users' private keys are uploaded to blindnet servers, they are encrypted with a symmetric key derived from user passwords. This allows users to benefit from private data transfers using any browser or device, while protecting their private keys and ensuring the data transfer between any two users is end-to-end encrypted."),(0,a.kt)("h3",{id:"user-passwords"},"User passwords"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To allow your users to use only one password for both your application and blindnet, you must first ",(0,a.kt)("a",{parentName:"p",href:"/docs/encryption/managing_users_access#splitting-secrets"},"split")," their passwords (i.e., you must use user password to derive two secrets, one for your application and one for blindnet).")),(0,a.kt)("p",null,"To provide seamless user experience in your application while preserving the highest level of data privacy for your users, your users can still input only one password for both authenticating on your application and securing blindnet private keys. However, it is important that under the hood you split this password into two secrets by using blindnet client SDK. This is needed because using the same secret in both your application and blindnet would give you access to user private keys. "),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"/docs/encryption/managing_users_access#splitting-secrets"},"documentation")," to see how to easily split user passwords with our SDKs."))}y.isMDXComponent=!0},3856:function(e,t,n){t.Z=n.p+"assets/images/components-dfa0a9fe16381ff4ae858531cfba195f.svg"},5160:function(e,t,n){t.Z=n.p+"assets/images/web_enc_detail-8d861d02b9d0409eb12411ab23ca2b35.svg"}}]);