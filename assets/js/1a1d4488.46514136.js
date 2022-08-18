"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[5302],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),a=r(6010),c=r(3438),i=r(9960),o=r(3919),u=r(5999),l="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function f(e){var t=e.href,r=e.icon,c=e.title,i=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:c},r," ",c),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:i},i))}function m(e){var t=e.item,r=(0,c.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,a=(0,o.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:a,title:r.label,description:null==i?void 0:i.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,a.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{key:t,item:e}))})))}},1340:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var n=r(3117),a=r(102),c=(r(7294),r(3905)),i=r(2991),o=r(3438),u=["components"],l={},s="Data Capture",d={unversionedId:"data-capture/index",id:"data-capture/index",title:"Data Capture",description:"",source:"@site/docs/06-data-capture/index.mdx",sourceDirName:"06-data-capture",slug:"/data-capture/",permalink:"/docs/data-capture/",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/06-data-capture/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connection to a Storage Service",permalink:"/docs/storage/connection"},next:{title:"Introduction",permalink:"/docs/data-capture/introduction"}},p={},f=[],m={toc:f};function y(e){var t=e.components,r=(0,a.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"data-capture"},"Data Capture"),(0,c.kt)(i.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);