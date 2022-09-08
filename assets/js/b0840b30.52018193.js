"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[4296],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),i=n(4334),o=n(2389),l=n(7392),c=n(7094),u=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function s(e){var t,n,o=e.lazy,s=e.block,m=e.defaultValue,f=e.values,y=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,O=(0,a.useState)(k),E=O[0],j=O[1],x=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var D=w[y];null!=D&&D!==E&&h.some((function(e){return e.value===D}))&&j(D)}var I=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==E&&(C(t),j(r),null!=y&&T(y,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var i,o=x.indexOf(e.currentTarget)-1;n=null!=(i=x[o])?i:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},v)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},47:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(5488),l=n(5162),c=["components"],u={title:"Decrypting data",sidebar_position:4},p=void 0,d={unversionedId:"encryption/decrypt",id:"encryption/decrypt",title:"Decrypting data",description:"We provide two methods to decrypt the data: decrypt and decryptValues.",source:"@site/docs/07-encryption/04-decrypt.mdx",sourceDirName:"07-encryption",slug:"/encryption/decrypt",permalink:"/docs/encryption/decrypt",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/07-encryption/04-decrypt.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Decrypting data",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Encrypting data",permalink:"/docs/encryption/encrypt"},next:{title:"Managing users and access",permalink:"/docs/encryption/managing_users_access"}},s={},m=[{value:"decrypt",id:"decrypt",level:2}],f={toc:m};function y(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We provide two methods to decrypt the data: ",(0,i.kt)("a",{parentName:"p",href:"#decrypt"},"decrypt")," and ",(0,i.kt)("a",{parentName:"p",href:"#decrypt"},"decryptValues"),"."),(0,i.kt)("p",null,"The following workflow is applied when decrypting data:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/references/glossary#encrypted-data-key"},"encrypted symmetric key")," of the user for the provided encrypted data is obtained from blindnet"),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"encrypted symmetric key")," is decrypted using the user's secret key"),(0,i.kt)("li",{parentName:"ol"},"Data is decrypted with the ",(0,i.kt)("inlineCode",{parentName:"li"},"symmetric key"))),(0,i.kt)("p",null,"Only ",(0,i.kt)("strong",{parentName:"p"},"registered users")," can decrypt the data."),(0,i.kt)("h2",{id:"decrypt"},"decrypt"),(0,i.kt)("p",null,"If the encrypted data is ",(0,i.kt)("a",{parentName:"p",href:"./encrypt#encode"},"encoded"),", use the following helper methods to decode it before decrypting it."),(0,i.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'linenums="1"',linenums:'"1"'},"import { util } from '@blindnet/sdk-javascript';\n\n// if you use base64 encoding\nconst encryptedData = util.fromBase64(encodedData);\n// if you use hex encoding\nconst encryptedData = util.fromHex(encodedData);\n")))),(0,i.kt)("p",null,"To decrypt the data, use"),(0,i.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'linenums="1"',linenums:'"1"'},"const { data, metadata } = await blindnet.decrypt(encryptedData);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"data")," is the original data provided in the encrypt method.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," is the object provided in the encrypt method."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/references/glossary#metadata"},"Metadata"),", besides the object fields provided in the ",(0,i.kt)("a",{parentName:"p",href:"./encrypt#encrypt"},"encrypt")," method, will contain additional information on data format so it can be treated accordingly."),(0,i.kt)("p",null,"Additional information in metadata is under the key ",(0,i.kt)("inlineCode",{parentName:"p"},"dataType"),", which can have the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ type: 'STRING' }")," meaning data is a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ type: 'FILE', name: string }")," meaning data is a ",(0,i.kt)("inlineCode",{parentName:"li"},"file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ type: 'BYTES' }")," meaning data is ",(0,i.kt)("inlineCode",{parentName:"li"},"ArrayBuffer"))))))}y.isMDXComponent=!0}}]);