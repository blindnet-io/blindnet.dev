"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[3225],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5134:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],l={title:"Lexicon",sidebar_position:2,tags:["vocabulary"]},p=void 0,s={unversionedId:"references/lexicon",id:"references/lexicon",title:"Lexicon",description:"Introduction",source:"@site/docs/08-references/02-lexicon.mdx",sourceDirName:"08-references",slug:"/references/lexicon",permalink:"/docs/references/lexicon",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/08-references/02-lexicon.mdx",tags:[{label:"vocabulary",permalink:"/docs/tags/vocabulary"}],version:"current",sidebarPosition:2,frontMatter:{title:"Lexicon",sidebar_position:2,tags:["vocabulary"]},sidebar:"tutorialSidebar",previous:{title:"Notions of Privacy",permalink:"/docs/references/notions-of-privacy"},next:{title:"High-level Concept Model",permalink:"/docs/references/high-level-conceptualization"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Terms",id:"terms",level:2},{value:"blindnet devkit",id:"blindnet-devkit",level:3},{value:"CCPA",id:"ccpa",level:3},{value:"CPRA",id:"cpra",level:3},{value:"Capture Fragment",id:"capture-fragment",level:3},{value:"Component",id:"component",level:3},{value:"Data Capture",id:"data-capture",level:3},{value:"Data Capture Fragment",id:"data-capture-fragment",level:3},{value:"Data Consumer",id:"data-consumer",level:3},{value:"Data Subject",id:"data-subject",level:3},{value:"DPO",id:"dpo",level:3},{value:"Fragment",id:"fragment",level:3},{value:"GDPR",id:"gdpr",level:3},{value:"HIPPA",id:"hippa",level:3},{value:"Internet User",id:"internet-user",level:3},{value:"Organization",id:"organization",level:3},{value:"Privateform",id:"privateform",level:3},{value:"Privacy Request",id:"privacy-request",level:3},{value:"System",id:"system",level:3},{value:"Submitter",id:"submitter",level:3},{value:"User",id:"user",level:3}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u201cThe limits of language are the limits of my world.\u201d - Ludwig Wittgenstein")),(0,i.kt)("p",null,"Many product-related documents refer to terms of common interest, often written in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage"},"initial caps, or all caps"),". This document defines the meaning of these terms as they should be interpreted in the context of blindnet products."),(0,i.kt)("h2",{id:"terms"},"Terms"),(0,i.kt)("h3",{id:"blindnet-devkit"},"blindnet devkit"),(0,i.kt)("p",null,"A set of software components for implementing ",(0,i.kt)("a",{parentName:"p",href:"./notions-of-privacy#privacy-enabled-connectedness"},"privacy-enabled connectedness"),"."),(0,i.kt)("h3",{id:"ccpa"},"CCPA"),(0,i.kt)("p",null,"California Consumer Privacy Act. A regulation in California (USA). See ",(0,i.kt)("a",{parentName:"p",href:"https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375"},"official text"),"."),(0,i.kt)("h3",{id:"cpra"},"CPRA"),(0,i.kt)("p",null,"California Privacy Rights Act. A regulation in California (USA). See ",(0,i.kt)("a",{parentName:"p",href:"https://vig.cdn.sos.ca.gov/2020/general/pdf/topl-prop24.pdf"},"official text"),"."),(0,i.kt)("h3",{id:"capture-fragment"},"Capture Fragment"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#data-capture-fragment"},"Data Capture Fragment"),"."),(0,i.kt)("h3",{id:"component"},"Component"),(0,i.kt)("p",null,"A part of a ",(0,i.kt)("a",{parentName:"p",href:"#system"},"System"),", interdependent with other Components of the same System."),(0,i.kt)("h3",{id:"data-capture"},"Data Capture"),(0,i.kt)("p",null,"A compound unit of data, concerning a ",(0,i.kt)("a",{parentName:"p",href:"#data-subject"},"Data Subject"),", made available to an ",(0,i.kt)("a",{parentName:"p",href:"#organization"},"Organization")," and processed by that Organization's ",(0,i.kt)("a",{parentName:"p",href:"#system"},"System(s)"),"."),(0,i.kt)("p",null,"It is composed of one or more ",(0,i.kt)("a",{parentName:"p",href:"#data-capture-fragment"},"Data Capture Fragments"),"."),(0,i.kt)("p",null,"It is obtained in any way, including: directly submitted by a ",(0,i.kt)("a",{parentName:"p",href:"#submitter"},"Submitter")," (who is the same as the Data Subject, or not), transferred from System to System, generated or inferred by a System."),(0,i.kt)("h3",{id:"data-capture-fragment"},"Data Capture Fragment"),(0,i.kt)("p",null,"Part of a ",(0,i.kt)("a",{parentName:"p",href:"#data-capture"},"Data Capture"),". A meaningful compound of atomic information units (e.g, data fields of different type, files, and to them associated labels) that are meaningfully captured together."),(0,i.kt)("p",null,"Examples of situations in which information units are meaningfully captured together include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"splitting them would introduce an obstacle to making sense of the information that they carry. For example, elements of an address such as street number and street name,"),(0,i.kt)("li",{parentName:"ul"},"it doesn\u2019t make sense to capture one of them today and the other tomorrow,"),(0,i.kt)("li",{parentName:"ul"},"they are not likely to be modified separately.")),(0,i.kt)("p",null,"Also know as Capture Fragment, or Fragment."),(0,i.kt)("h3",{id:"data-consumer"},"Data Consumer"),(0,i.kt)("p",null,"A human, or some other entity consuming the data concerning ",(0,i.kt)("a",{parentName:"p",href:"#data-subject"},"Data Subjects"),"."),(0,i.kt)("h3",{id:"data-subject"},"Data Subject"),(0,i.kt)("p",null,"A human, concerned by particular data that a ",(0,i.kt)("a",{parentName:"p",href:"#system"},"System")," is processing. Holder of rights over the data concerning them."),(0,i.kt)("h3",{id:"dpo"},"DPO"),(0,i.kt)("p",null,"A Data Protection Officer. An individual or a company charged with responding to ",(0,i.kt)("a",{parentName:"p",href:"#privacy-request"},"Privacy Requests")," in the name of an ",(0,i.kt)("a",{parentName:"p",href:"#organization"},"Organization"),"."),(0,i.kt)("h3",{id:"fragment"},"Fragment"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#data-capture-fragment"},"Data Capture Fragment"),"."),(0,i.kt)("h3",{id:"gdpr"},"GDPR"),(0,i.kt)("p",null,"General Data Protection Regulation. A regulation in the European Union. See ",(0,i.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/eli/reg/2016/679/oj"},"official text"),"."),(0,i.kt)("h3",{id:"hippa"},"HIPPA"),(0,i.kt)("p",null,"Health Insurance Portability and Accountability Act. A regulation in the USA. See ",(0,i.kt)("a",{parentName:"p",href:"https://www.govinfo.gov/content/pkg/PLAW-104publ191/html/PLAW-104publ191.htm"},"official text"),"."),(0,i.kt)("h3",{id:"internet-user"},"Internet User"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#user"},"User"),"."),(0,i.kt)("h3",{id:"organization"},"Organization"),(0,i.kt)("p",null,"A structure, commercial or not, processing ",(0,i.kt)("a",{parentName:"p",href:"#data-subject"},"Data Subjects'"),' data as a part of its operations.\nAlso known as "controller", "data controller", and "processor" under ',(0,i.kt)("a",{parentName:"p",href:"#GDPR"},"GDPR"),'.\nAlso know as "business" under ',(0,i.kt)("a",{parentName:"p",href:"#CCPA"},"CCPA")," and ",(0,i.kt)("a",{parentName:"p",href:"#CPRA"},"CPRA"),"."),(0,i.kt)("p",null,"It operates one or more ",(0,i.kt)("a",{parentName:"p",href:"#system"},"Systems"),"."),(0,i.kt)("h3",{id:"privateform"},"Privateform"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#user"},"User"),"-facing software that uses ",(0,i.kt)("a",{parentName:"p",href:"#blindnet-devkit"},"blindnet devkit")," to capture user data (and to it associated metadata) in a way that restitutes confidentiality and control to the ",(0,i.kt)("a",{parentName:"p",href:"#data-subject"},"Data Subject"),"."),(0,i.kt)("h3",{id:"privacy-request"},"Privacy Request"),(0,i.kt)("p",null,"A request made by a ",(0,i.kt)("a",{parentName:"p",href:"#data-subject"},"Data Subject")," in order to regulate privacy in the relationship they have with a ",(0,i.kt)("a",{parentName:"p",href:"#system"},"System")," or an ",(0,i.kt)("a",{parentName:"p",href:"#organization"},"Organization"),"."),(0,i.kt)("p",null,"Privacy Requests MAY concern any aspect of the ",(0,i.kt)("a",{parentName:"p",href:"./notions-of-privacy#privacy-enabled-connectedness"},"privacy-enabled connectedness"),", including transparency, confidentiality and control over data processing."),(0,i.kt)("h3",{id:"system"},"System"),(0,i.kt)("p",null,"A combination of hardware and software which forms a complete, working computer.\nIt is the unit of processing of ",(0,i.kt)("a",{parentName:"p",href:"#data-subject"},"Data Subjects'")," data."),(0,i.kt)("p",null,"A System may interoperate with other Systems while maintaining a certain level of autonomy.\nIt has one or more ",(0,i.kt)("a",{parentName:"p",href:"#components"},"Components"),"."),(0,i.kt)("h3",{id:"submitter"},"Submitter"),(0,i.kt)("p",null,"A human providing data."),(0,i.kt)("h3",{id:"user"},"User"),(0,i.kt)("p",null,"A human. Potentially one (or more) of ",(0,i.kt)("a",{parentName:"p",href:"#data-consumer"},"Data Consumer"),", ",(0,i.kt)("a",{parentName:"p",href:"#data-subject"},"Data Subject"),", ",(0,i.kt)("a",{parentName:"p",href:"#dpo"},"DPO"),", ",(0,i.kt)("a",{parentName:"p",href:"#submitter"},"Submitter"),"."))}m.isMDXComponent=!0}}]);