"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[80],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),i=n(6010),o=n(3438),c=n(9960),a=n(3919),u=n(5999),l="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function f(e){var t=e.href,n=e.icon,o=e.title,c=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},n," ",o),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",d),title:c},c))}function m(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,i=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:i,title:n.label,description:null==c?void 0:c.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{key:t,item:e}))})))}},4577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),c=n(2991),a=n(3438),u=["components"],l={},s="Guides",d={unversionedId:"encryption/guides/index",id:"encryption/guides/index",title:"Guides",description:"",source:"@site/docs/07-encryption/03-guides/index.mdx",sourceDirName:"07-encryption/03-guides",slug:"/encryption/guides/",permalink:"/docs/encryption/guides/",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/07-encryption/03-guides/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/encryption/quickstart"},next:{title:"Introduction",permalink:"/docs/encryption/guides/introduction"}},p={},f=[],m={toc:f};function y(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"guides"},"Guides"),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);