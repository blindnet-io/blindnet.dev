"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[4027],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,y=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Encryption Q&A",sidebar_position:11},c=void 0,d={unversionedId:"references/qna",id:"references/qna",title:"Encryption Q&A",description:"What is End-to-end Encryption?",source:"@site/docs/08-references/11-qna.mdx",sourceDirName:"08-references",slug:"/references/qna",permalink:"/docs/references/qna",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/08-references/11-qna.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Encryption Q&A",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/references/glossary"},next:{title:"References - Archive",permalink:"/docs/references/archive/"}},l={},u=[{value:"What is End-to-end Encryption?",id:"what-is-end-to-end-encryption",level:2},{value:"Why do I need End-to-end Encryption",id:"why-do-i-need-end-to-end-encryption",level:2},{value:"Is blindnet a Trusted Third Party?",id:"is-blindnet-a-trusted-third-party",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-end-to-end-encryption"},"What is End-to-end Encryption?"),(0,o.kt)("p",null,"End-to-end encryption is an approach in which a software system encrypts data upon capture, supports encryption throughout transfer, and allows for data decrypting only at the endpoint of their consumption. In such a way user data is not accessible in the non-encrypted form at any central entity."),(0,o.kt)("p",null,"Encryption is a process of converting a readable dataset into code in order to prevent unauthorized access. End-to-end encryption is a functionality in which a software system protects the data through its entire life cycle, from end-point capture and transit to storage and access.The intent of end-to-end encryption is to ensure that data is available only to authorized users and unreadable to anyone else."),(0,o.kt)("p",null,"The classic client-server architecture of internet software applications introduced the idea of centralized data storage on cloud or on-prem servers, while keeping software running on endpoints (i.e. the interfaces through which the users interact with the system), light in functionality, often reduced to data display and data entry. While convenient, this approach rests on the exposure of mass quantities of confidential user information to both data breaches (external threats) and misuse (internal threats)."),(0,o.kt)("p",null,"Due to growing concerns for user privacy, end-to-end encryption quickly gained ground over the last decade . Signal protocol has been recognized as a golden standard in the developer community. It is used across various applications, including widely popular WhatsApp. Through Signal protocol, users\u2019 messages are encrypted on their devices and exchanged with other users without the ability for the central entity to decrypt and access those messages. . The cryptographic primitives are exchanged in such a way that only the endpoints (sender and receiver) have access to the necessary decryption keys."),(0,o.kt)("p",null,"End-to-end encryption is currently spreading to various other businesses, augmenting the classic client-server architecture, and allowing developers to make privacy-first software in many other use-cases."),(0,o.kt)("p",null,"Blindnet offers a simple solution to developers to embed end-to-end encryption in their software architecture, protect user data and limit exposure and liabilities to only critical sensitive information."),(0,o.kt)("h2",{id:"why-do-i-need-end-to-end-encryption"},"Why do I need End-to-end Encryption"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Fulfil users expectations and earn their trust"),". When users provide their personal and often sensitive information to a third-party , they assume that the data will remain private, confidential and protected. 1.",(0,o.kt)("strong",{parentName:"li"},"Reduce liability in case of a breach"),". In case of a breach, if an intruder gets hold of user data, they won\u2019t be able to benefit from it if you only store and transmit encrypted data. At the current rate breaches happen every 39 seconds",(0,o.kt)("sup",{parentName:"li",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Yep, you read it correctly."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Comply with regulations"),". Depending on the location of your users (European, Californian, etc.) you are likely to be subject to regulation such as GDPR and CCPA imposing high standards in terms of user data privacy protection. Encrypting data, end-to-end, will meet compliance standards with regards to such regulations.")),(0,o.kt)("p",null,"In short, there is no excuse not to protect user data. With blindnet, your application can ensure the highest level of integrity every time you retain or access sensitive information.\nIn other words, whenever you process data that your service is not exploiting to generate value, keeping it unencrypted makes it only a liability for you."),(0,o.kt)("h2",{id:"is-blindnet-a-trusted-third-party"},"Is blindnet a Trusted Third Party?"),(0,o.kt)("p",null,"No. blindnet does not nor will ever have access to the data that transmits through its network. Therefore, we are a zero-trust third party. We constructed our services to ensure that user data stays protected, end-to-end."),(0,o.kt)("p",null,"A Trusted Third Party is a software provider that has an ability to store, access or read user data. . You have to trust that they will do nothing to compromise the data you have provided.\nHowever, one can never be too cautious. At blindnet, we believe that internet users deserve better than to be at the mercy of a Trusted Third Party. Our goal is to break from this retrograde model, and offer a technological solution, such that blindnet (and in many cases even your client systems too) has no way of decrypting and reading the actual user data."),(0,o.kt)("p",null,"You don\u2019t need to trust that blindnet will not read and misuse your users\u2019 data, because we simply can\u2019t. You can also go and inspect our source code on github, and make sure that our implementations are consistent with this core promise."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},'"At the end of 2016, a business fell victim to a ransomware attack every 40 seconds. Cybersecurity Ventures predicts that will rise to every 14 seconds by 2019 \u2014 and every 11 seconds by 2021". ',(0,o.kt)("a",{parentName:"li",href:"https://www.herjavecgroup.com/wp-content/uploads/2018/12/CV-HG-2019-Official-Annual-Cybercrime-Report.pdf"},"Cybersecurity Ventures report"),(0,o.kt)("br",{parentName:"li"}),"A Clark School study is one of the first to quantify the near-constant rate of hacker attacks of computers with Internet access\u2014every 39 seconds on average\u2014and the non-secure usernames and passwords we use that give attackers more chance of success. ",(0,o.kt)("a",{parentName:"li",href:"https://eng.umd.edu/news/story/study-hackers-attack-every-39-seconds"},"Study"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);