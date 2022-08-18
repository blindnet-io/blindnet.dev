"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[1213],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),o=n(6010),i=n(2389),l=n(7392),p=n(7094),s=n(2466),u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,y=e.values,f=e.groupId,k=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=y?y:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,p.U)(),T=N.tabGroupChoices,w=N.setTabGroupChoices,C=(0,a.useState)(v),E=C[0],D=C[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=T[f];null!=I&&I!==E&&b.some((function(e){return e.value===I}))&&D(I)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==E&&(x(t),D(r),null!=f&&w(f,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=O.indexOf(e.currentTarget)+1;n=null!=(r=O[a])?r:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;n=null!=(o=O[i])?o:O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},5520:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(5488),l=n(5162),p=["components"],s={title:"Encrypting data",sidebar_position:3},u=void 0,d={unversionedId:"encryption/guides/encrypt",id:"encryption/guides/encrypt",title:"Encrypting data",description:"Encryption is a core feature of the blindnet devkit. Depending on the language, multiple data formats can be encrypted - strings, files or simply just byte arrays.",source:"@site/docs/07-encryption/03-guides/03-encrypt.mdx",sourceDirName:"07-encryption/03-guides",slug:"/encryption/guides/encrypt",permalink:"/docs/encryption/guides/encrypt",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/07-encryption/03-guides/03-encrypt.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Encrypting data",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/encryption/guides/installation"},next:{title:"Decrypting data",permalink:"/docs/encryption/guides/decrypt"}},c={},m=[{value:"encrypt",id:"encrypt",level:2},{value:"Encode",id:"encode",level:3}],y={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Encryption is a core feature of the blindnet devkit. Depending on the language, multiple data formats can be encrypted - ",(0,o.kt)("inlineCode",{parentName:"p"},"strings"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"files")," or simply just ",(0,o.kt)("inlineCode",{parentName:"p"},"byte arrays"),". "),(0,o.kt)("p",null,"We provide two methods to encrypt the data: ",(0,o.kt)("a",{parentName:"p",href:"#encrypt"},"encrypt")," and ",(0,o.kt)("a",{parentName:"p",href:"#encryptvalues"},"encryptValues"),"."),(0,o.kt)("p",null,"The following workflow is applied when encrypting data:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A list of user ids (specified in a ",(0,o.kt)("a",{parentName:"li",href:"../glossary#temp-user-token"},"temporary token"),") is sent to blindnet to obtain the corresponding ",(0,o.kt)("a",{parentName:"li",href:"../glossary#public-key"},"public keys")),(0,o.kt)("li",{parentName:"ol"},"An ",(0,o.kt)("a",{parentName:"li",href:"../glossary#data-key"},"ephemeral symmetric key")," is generated"),(0,o.kt)("li",{parentName:"ol"},"Data is encrypted with the ",(0,o.kt)("inlineCode",{parentName:"li"},"symmetric key")),(0,o.kt)("li",{parentName:"ol"},"For each public key, the ",(0,o.kt)("inlineCode",{parentName:"li"},"symmetric key")," is encrypted"),(0,o.kt)("li",{parentName:"ol"},"A list of ",(0,o.kt)("inlineCode",{parentName:"li"},"encrypted symmetric keys")," is sent to blindnet")),(0,o.kt)("p",null,"Encryption is completed by a user of your application (",(0,o.kt)("a",{parentName:"p",href:"../glossary#registered-user"},"registered")," or ",(0,o.kt)("a",{parentName:"p",href:"../glossary#anonymous-user"},"unregistered"),") to another registered user. A user does not need to be logged into blindnet in order to encrypt the data.\nData can be encrypted for a single user, a list of users or a ",(0,o.kt)("a",{parentName:"p",href:"../glossary#user-groups"},"user group"),"."),(0,o.kt)("p",null,"In the current api, the ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#creating-temporary-tokens"},"encryption destination")," is specified in the ",(0,o.kt)("strong",{parentName:"p"},"Server SDK"),"."),(0,o.kt)("p",null,"To encrypt the data, the client SDK needs to be initialized with the ",(0,o.kt)("a",{parentName:"p",href:"./managing_users_access#creating-temporary-tokens"},"temporary token")," which contains information to whom the data is encrypted (user group or a list of users). To encrypt to a different destination, a new token needs to be generated."),(0,o.kt)("p",null,"To encrypt the data for a specific users, obtain a ",(0,o.kt)("a",{parentName:"p",href:"../glossary#temp-user-token"},"temporary token")," using the following ",(0,o.kt)("strong",{parentName:"p"},"Server SDK")," method:"),(0,o.kt)(i.Z,{groupId:"lang-server",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PHP"},"$userIds = ['1', '2', '3']\n$tempUserJwt = $blindnet->createTempUserToken($userIds);\n")))),(0,o.kt)("p",null,"To encrypt the data for a ",(0,o.kt)("a",{parentName:"p",href:"../glossary#user-groups"},"group"),", obtain a ",(0,o.kt)("a",{parentName:"p",href:"../glossary#temp-user-token"},"temporary token")," using the following ",(0,o.kt)("strong",{parentName:"p"},"server SDK")," method:"),(0,o.kt)(i.Z,{groupId:"lang-server",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PHP"},"$groupId = '1'\n$tempUserJwt = $blindnet->createTempUserToken($groupId);\n")))),(0,o.kt)("h2",{id:"encrypt"},"encrypt"),(0,o.kt)("p",null,"This method encrypts the entire data passed as a parameter.\nDepending on a language, multiple formats are supported.",(0,o.kt)("br",{parentName:"p"}),"\n","Besides the ",(0,o.kt)("em",{parentName:"p"},"data"),", a ",(0,o.kt)("a",{parentName:"p",href:"../glossary#metadata"},"metadata")," can be passed as a second argument. It can be any ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON serializable object"),"."),(0,o.kt)(i.Z,{groupId:"lang-client",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"data")," can be ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"File"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint8Array")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),"\nOther formats should be encoded to ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint8Array")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),". You can put the information on how to decode the ",(0,o.kt)("em",{parentName:"p"},"data")," into the ",(0,o.kt)("em",{parentName:"p"},"metadata"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// pass a temp user token generated in the server SDK\nconst blindnet = Blindnet.init(tempUserJwt)\n// e.g. data is a file\n// const data = document.getElementById('file-picker').files[0]\nconst { dataId, encryptedData } = await blindnet.encrypt(data, metadata)    \n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"encryptedData")," has a type ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),"."))),(0,o.kt)("h3",{id:"encode"},"Encode"),(0,o.kt)("p",null,"To be easily transferred, ",(0,o.kt)("inlineCode",{parentName:"p"},"encryptedData")," can be encoded to ",(0,o.kt)("inlineCode",{parentName:"p"},"base64")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"hexadecimal")," string."),(0,o.kt)(i.Z,{groupId:"lang-client",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { util } from '@blindnet/sdk-javascript'\n\nconst base64Encoded = util.toBase64(encryptedData)\nconst hexEncoded = util.toHex(encryptedData)\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dataId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"encryptedData")," should be stored by you.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"dataId")," is used to delete the keys from blindnet using the server SDK.\nTo decrypt ",(0,o.kt)("inlineCode",{parentName:"p"},"encryptedData"),", pass it to the ",(0,o.kt)("a",{parentName:"p",href:"./decrypt#decrypt"},"decrypt")," method."),(0,o.kt)("p",null,"Currently, encryption of streams is ",(0,o.kt)("strong",{parentName:"p"},"not supported")," so the entire data is loaded into the memory and then encrypted. Make sure your application does not run out of memory if e.g. large files are passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"encrypt")," method."))}f.isMDXComponent=!0}}]);