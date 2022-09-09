"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[5625],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"blindnet devkit Architecture",sidebar_position:6,tags:["high-level"]},s=void 0,c={unversionedId:"references/architecture",id:"references/architecture",title:"blindnet devkit Architecture",description:"This document specifies the architecture of the blindnet devkit.",source:"@site/docs/08-references/06-architecture.mdx",sourceDirName:"08-references",slug:"/references/architecture",permalink:"/docs/references/architecture",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/develop/docs/08-references/06-architecture.mdx",tags:[{label:"high-level",permalink:"/docs/tags/high-level"}],version:"current",sidebarPosition:6,frontMatter:{title:"blindnet devkit Architecture",sidebar_position:6,tags:["high-level"]},sidebar:"tutorialSidebar",previous:{title:"High-level Component Architecture",permalink:"/docs/references/high-level-architecture"},next:{title:"PRIV",permalink:"/docs/references/PRIV"}},p={},u=[{value:"Terminology",id:"terminology",level:2},{value:"Responsibilities",id:"responsibilities",level:2},{value:"References",id:"references",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document specifies the architecture of the blindnet devkit."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The current version of this document is based mainly on the ",(0,i.kt)("a",{parentName:"p",href:"./high-level-architecture",title:"High Level Architecture"},"HLA"),". It is expected for this document to evolve, especially once the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/tree/main/specifications/frd"},"functional requirements document")," is available.")),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All terms defined in ",(0,i.kt)("a",{parentName:"li",href:"./lexicon",title:"RFC-Lexicon-2"},"RFC-Lexicon-2")," are to be interpreted as described there"),(0,i.kt)("li",{parentName:"ul"},"Any additional precision about the terms defined in ",(0,i.kt)("a",{parentName:"li",href:"./lexicon",title:"RFC-Lexicon-2"},"RFC-Lexicon-2"),", as well as additional terms such as Consent and Legal Base, provided in ",(0,i.kt)("a",{parentName:"li",href:"./high-level-conceptualization",title:"High Level Conceptualization"},"High Level Conceptualization")," is to be considered normative"),(0,i.kt)("li",{parentName:"ul"},"We use the terms Capture Component, Encryption and Access Management Engine, Privacy Computation Engine, Privacy Compiler, Privacy Request Capture Interface, Schemas and Storage Component as defined in ",(0,i.kt)("a",{parentName:"li",href:"./high-level-architecture",title:"High Level Architecture"},"High Level Architecture"))),(0,i.kt)("h2",{id:"responsibilities"},"Responsibilities"),(0,i.kt)("p",null,"The figure below presents the blindnet devkit architecture."),(0,i.kt)("img",{src:"/img/devkit_architecture.png"}),(0,i.kt)("p",null,"Each element within the architecture is responsible for a certain set of functions within the blindnet devkit."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Privacy Request Capture Interface"),", which is a part of ",(0,i.kt)("strong",{parentName:"p"},"Privacy Request Manager")," as described in ",(0,i.kt)("a",{parentName:"p",href:"./high-level-architecture",title:"High Level Architecture"},"HLA"),", is an end-user interface allowing Data Subjects to submit Privacy Requests. For requests that require it, this component may also initiate Data Subject Authentication, deliver the Privacy Request Response (including the data that may be part of response) and show its status."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Data Consumer Interface"),", which is a part of ",(0,i.kt)("strong",{parentName:"p"},"Privacy Request Manager")," as described in ",(0,i.kt)("a",{parentName:"p",href:"./high-level-architecture",title:"High Level Architecture"},"HLA"),", is an end-user interface for Data Consumers which allows them to:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Q3 2022 Scope"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set relevant configurations (e.g., Retention Policies, General Information for TRANSPARENCY requests, Transfers information, desired level of automation of Privacy Request Processing )"),(0,i.kt)("li",{parentName:"ul"},"Manage Privacy Requests (View Privacy Requests, Act upon Privacy Request Response recommendations - grant/deny/transfer requests)")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Autumn 2022 Scope"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"View and manage Data Captures")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Web components")," are front-end, look and feel agnostic components which allow integrations of different blindnet devkit functions into external systems and web sites. Currently, these include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Communication (emailing) component"),(0,i.kt)("li",{parentName:"ul"},"Custom data capture components"),(0,i.kt)("li",{parentName:"ul"},"Data consumption components, i.e., components that allow Data Consumers to view and manage data"),(0,i.kt)("li",{parentName:"ul"},"Privacy Request capture components, i.e., components that allow Data Subjects to submit Privacy requests"),(0,i.kt)("li",{parentName:"ul"},"Privacy settings component, i.e., component that allows Data Consumers to set desired configurations"),(0,i.kt)("li",{parentName:"ul"},"Privacy Request management components, i.e. components that allow Data Consumer to view and manage Privacy Request")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Blindnet common")," is an entry point to blindnet devkit functions.\nIt is imagined as a single element used by developers, which further uses different parts of the blindnet devkit depending on developers' needs."),(0,i.kt)("p",null,"Different components from the ",(0,i.kt)("a",{parentName:"p",href:"./high-level-architecture",title:"High Level Architecture"},"HLA")," (Capture Component, Encryption and Access Management Engine, Privacy Computation Engine) are implemented through several architectural elements."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"./high-level-architecture",title:"High Level Architecture"},"HLA"),"'s ",(0,i.kt)("strong",{parentName:"p"},"Capture Component")," consists of ",(0,i.kt)("em",{parentName:"p"},"Capture SDK"),", ",(0,i.kt)("em",{parentName:"p"},"Capture API"),", and ",(0,i.kt)("em",{parentName:"p"},"Capture DB"),", and it:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Q3 2022 Scope"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generates metadata according to PRIV (whenever a data record is made - from user input or any other data-collection mode e.g. transfer, machine learning etc.), covering everything (including 3rd party consents) needed for Privacy Computation Engine to operate as automatically as possible.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Autumn 2022 Scope"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Captures data and metadata for Data Consumers"),(0,i.kt)("li",{parentName:"ul"},"Protects confidentiality of Data Captures (encryption), by relying on Encryption Engine"),(0,i.kt)("li",{parentName:"ul"},"Obtains Legal Bases related to Data Captures"),(0,i.kt)("li",{parentName:"ul"},"Allows capturing Data Captures through Data Fragments"),(0,i.kt)("li",{parentName:"ul"},"Allows capturing Data Captures over multiple time instances"),(0,i.kt)("li",{parentName:"ul"},"Allows multiple Data Submitters to submit a Data Capture"),(0,i.kt)("li",{parentName:"ul"},"Allows managing Data Captures on the Data Fragment level")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"./high-level-architecture",title:"High Level Architecture"},"HLA"),"'s ",(0,i.kt)("strong",{parentName:"p"},"Encryption and Access Management Engine")," consists of ",(0,i.kt)("em",{parentName:"p"},"Encryption SDK"),", ",(0,i.kt)("em",{parentName:"p"},"Encryption API"),", and ",(0,i.kt)("em",{parentName:"p"},"Encryption DB"),", and it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Encrypts and decrypts data"),(0,i.kt)("li",{parentName:"ul"},"Integrable with external OpenID tools"),(0,i.kt)("li",{parentName:"ul"},"Allows recovery after access is lost")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"./high-level-architecture",title:"High Level Architecture"},"HLA"),"'s ",(0,i.kt)("strong",{parentName:"p"},"Privacy Computation Engine"),", including ",(0,i.kt)("strong",{parentName:"p"},"Privacy Compiler")," and ",(0,i.kt)("strong",{parentName:"p"},"Customization API"),", consists of ",(0,i.kt)("em",{parentName:"p"},"Privacy SDK"),", ",(0,i.kt)("em",{parentName:"p"},"Privacy API"),", and ",(0,i.kt)("em",{parentName:"p"},"Privacy DB"),", and it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Captures Privacy Requests from Data Subjects"),(0,i.kt)("li",{parentName:"ul"},"Captures privacy-related Settings (including mapping between PRIV terms and database schema of the client System)"),(0,i.kt)("li",{parentName:"ul"},"Calculates (explainable) response to Privacy Requests"),(0,i.kt)("li",{parentName:"ul"},"Keeps traces of Privacy Requests decisions and actions"),(0,i.kt)("li",{parentName:"ul"},"Provides proofs of Privacy Requests decisions and actions"),(0,i.kt)("li",{parentName:"ul"},"Registers operations and transfers of Data Captures across Systems"),(0,i.kt)("li",{parentName:"ul"},"Allows Data Subjects to revoke Consents")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Storage")," elements of the architecture (",(0,i.kt)("em",{parentName:"p"},"Storage SDK"),", ",(0,i.kt)("em",{parentName:"p"},"Storage API"),", and ",(0,i.kt)("em",{parentName:"p"},"Cloud Storage"),") are responsible for storing the data."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Identity")," elements of the architecture (",(0,i.kt)("em",{parentName:"p"},"Identity SDK"),", ",(0,i.kt)("em",{parentName:"p"},"Identity API"),", and ",(0,i.kt)("em",{parentName:"p"},"Identity Storage"),") are responsible for creating and managing Users of the blindnet devkit (e.g., Data Subjects, Data Consumers, etc.)."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lexicon")," ",(0,i.kt)("a",{parentName:"li",href:"./lexicon",title:"RFC-Lexicon-2"},"RFC-Lexicon-2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HLA")," ",(0,i.kt)("a",{parentName:"li",href:"./high-level-architecture",title:"High Level Architecture"},"High Level Architecture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HLC")," ",(0,i.kt)("a",{parentName:"li",href:"./high-level-conceptualization",title:"High Level Conceptualization"},"High Level Conceptualization"))))}d.isMDXComponent=!0}}]);