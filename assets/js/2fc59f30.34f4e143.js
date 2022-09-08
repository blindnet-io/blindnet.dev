"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[3949],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={title:"Application Set Up",sidebar_position:1},p=void 0,s={unversionedId:"access-management/set-up",id:"access-management/set-up",title:"Application Set Up",description:"To authenticate to blindnet, your application needs the application id and application key.",source:"@site/docs/05-access-management/01-set-up.mdx",sourceDirName:"05-access-management",slug:"/access-management/set-up",permalink:"/docs/access-management/set-up",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/05-access-management/01-set-up.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Application Set Up",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Access Management",permalink:"/docs/access-management/"},next:{title:"Storage",permalink:"/docs/storage/"}},l={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To authenticate to blindnet, your application needs the ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/glossary#application-id"},"application id")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/glossary#application-key"},"application key"),".\n",(0,i.kt)("strong",{parentName:"p"},"Application key")," is a cryptographic secret key which is used to sign the authentication tokens and must be kept secret (and accessible by your server)."),(0,i.kt)("p",null,"You can get the application id and application key using the blindnet ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.blindnet.io"},"dashboard")," after you create a new application."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For the sake of simplicity, you can use the following application id and key for tests:"),(0,i.kt)("p",{parentName:"admonition"},"id: ",(0,i.kt)("inlineCode",{parentName:"p"},"3544e7cd-64a9-41b7-88dc-397bfdaeeaf3"),(0,i.kt)("br",{parentName:"p"}),"\n","key: ",(0,i.kt)("inlineCode",{parentName:"p"},"zB5IiU0xzkVdsH4NMXxrF90ZISL5kJnTHlt7h/Wbi/qVhch7Fw8J5AQ5j2PazaG5q114uApZRH4X1/kTKVx0Cw==")),(0,i.kt)("p",{parentName:"admonition"},"This id and key pair is ",(0,i.kt)("strong",{parentName:"p"},"only")," provided for testing. ",(0,i.kt)("strong",{parentName:"p"},"DO NOT")," use them in production environments!")))}m.isMDXComponent=!0}}]);