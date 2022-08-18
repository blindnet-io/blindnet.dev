"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[9396],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=n(50),l=["components"],p={title:"Compilation",sidebar_position:4,tags:["guide"]},s=void 0,c={unversionedId:"computation/compiler",id:"computation/compiler",title:"Compilation",description:"Initial Set-up",source:"@site/docs/03-computation/04-compiler.mdx",sourceDirName:"03-computation",slug:"/computation/compiler",permalink:"/docs/computation/compiler",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/main/docs/03-computation/04-compiler.mdx",tags:[{label:"guide",permalink:"/docs/tags/guide"}],version:"current",sidebarPosition:4,frontMatter:{title:"Compilation",sidebar_position:4,tags:["guide"]},sidebar:"tutorialSidebar",previous:{title:"Using your Privacy Computation Engine",permalink:"/docs/computation/usage"},next:{title:"User Interfaces",permalink:"/docs/interfaces/"}},m={},d=[{value:"Initial Set-up",id:"initial-set-up",level:2},{value:"Processing PRIV Events",id:"processing-priv-events",level:2},{value:"Consent",id:"consent",level:3},{value:"Legal Base Event",id:"legal-base-event",level:3},{value:"<code>REVOKE-CONSENT</code> Privacy Requests",id:"revoke-consent-privacy-requests",level:3},{value:"<code>OBJECT</code> Privacy Requests",id:"object-privacy-requests",level:3},{value:"<code>RESTRICT</code> Privacy Requests",id:"restrict-privacy-requests",level:3},{value:"Privacy Algebra",id:"privacy-algebra",level:2},{value:"Privacy Scope Triples",id:"privacy-scope-triples",level:3},{value:"Operations Over Privacy Scopes",id:"operations-over-privacy-scopes",level:3},{value:"Equivalence",id:"equivalence",level:4},{value:"Inclusion",id:"inclusion",level:4},{value:"Union",id:"union",level:4},{value:"Intersection",id:"intersection",level:4}],u={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{repo:"https://github.com/blindnet-io/data-access-component",mdxType:"WipWarning"}),(0,r.kt)("h2",{id:"initial-set-up"},"Initial Set-up"),(0,r.kt)("p",null,"Based on the ",(0,r.kt)("a",{parentName:"p",href:"./configuration"},"configuration given to the Privacy Computation Engine"),", the Privacy Compiler first calculates an initial Eligible Privacy Scope."),(0,r.kt)("p",null,"In the Eligible Privacy Scope, each ",(0,r.kt)("a",{parentName:"p",href:"#triple"},"Privacy Scope Triple")," is associated with one or more active ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#legal-base"},"Legal Bases"),".\nLegal Bases can be acquired and lost.\n",(0,r.kt)("a",{parentName:"p",href:"#triple"},"Privacy Scope Triples")," stay in the Eligible Privacy Scope as long as they have at least one active Legal Base associated to them."),(0,r.kt)("p",null,"Initially, before the user gave any consent or signed any contract (subscribed to any service, opened any account) the Eligible Privacy Scope consists of Privacy Scope Triples associated with ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGITIMATE-INTEREST"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"NECESSARY")," Legal Bases."),(0,r.kt)("p",null,"Privacy Compiler also know of combinations of Privacy Scope Triples and Legal Bases that are prohibited under certain legislations (e.g. under GDPR certain data can only be processed with ",(0,r.kt)("inlineCode",{parentName:"p"},"CONSENT"),").\nSuch combinations can't enter the Eligible Privacy Scope."),(0,r.kt)("h2",{id:"processing-priv-events"},"Processing PRIV Events"),(0,r.kt)("p",null,"With every PRIV event, the Privacy Compiler calculated the change to be made to the Eligible Privacy Scope."),(0,r.kt)("h3",{id:"consent"},"Consent"),(0,r.kt)("p",null,"The Eligible Privacy Scope becomes the ",(0,r.kt)("a",{parentName:"p",href:"#union"},"union")," of the previous Eligible Privacy Scope and of the Privacy Scope given in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," property of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#consent"},"Consent"),"."),(0,r.kt)("p",null,":::Note\nIf the User previously made an ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RESTRICT")," request reducing the Eligible Privacy Scope, giving a new Consent is a way to re-include (previously excluded) triples in the Eligible Privacy Scope.\n:::"),(0,r.kt)("h3",{id:"legal-base-event"},"Legal Base Event"),(0,r.kt)("p",null,"For events of ",(0,r.kt)("inlineCode",{parentName:"p"},"event-type")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICE-START")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RELATIONSHIP-START"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#legal-base"},"Legal Base")," is added to the Eligible Privacy Scope using the ",(0,r.kt)("a",{parentName:"li",href:"#union"},"union")," operation."),(0,r.kt)("li",{parentName:"ul"},"when a ",(0,r.kt)("inlineCode",{parentName:"li"},"data-reference")," is specified in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#legal-base-event"},"Legal Base Event")," the Privacy Compiler remembers it so that Triples associated to this reference can be found later")),(0,r.kt)("p",null,"For events of ",(0,r.kt)("inlineCode",{parentName:"p"},"event-type")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICE-END")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RELATIONSHIP-END"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when a particular ",(0,r.kt)("inlineCode",{parentName:"li"},"data-reference")," is given:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Privacy Compiler looks for Triples in the Eligible Privacy Scope that have that reference"),(0,r.kt)("li",{parentName:"ul"},"Removes the reference and to it associated Legal Base"),(0,r.kt)("li",{parentName:"ul"},"Removes from the Eligible Privacy Scope all the Triples that are left with no active Legal Base"))),(0,r.kt)("li",{parentName:"ul"},"when no ",(0,r.kt)("inlineCode",{parentName:"li"},"data-reference")," is given:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Privacy Compiler looks for all Triples associated with the ",(0,r.kt)("inlineCode",{parentName:"li"},"legal-base")," of the Legal Base Event"),(0,r.kt)("li",{parentName:"ul"},"Removes the Legal Base in question"),(0,r.kt)("li",{parentName:"ul"},"Removes from the Eligible Privacy Scope all the Triples that are left with no active Legal Base")))),(0,r.kt)("p",null,":::Note\nA Data reference can indicate a particular user account, contract, particular medical or legal file especially when the same Data Subject may have several ongoing files with the same Organization\n:::"),(0,r.kt)("h3",{id:"revoke-consent-privacy-requests"},(0,r.kt)("inlineCode",{parentName:"h3"},"REVOKE-CONSENT")," Privacy Requests"),(0,r.kt)("p",null,"The Privacy Compiler looks for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#consent-restriction"},"Consent Restriction")," associated with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#privacy-request"},"Privacy Request"),".\nIt retrieves ",(0,r.kt)("inlineCode",{parentName:"p"},"consent-ids")," from it, and sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"revoked")," property of those consents to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".\nThen, Privacy Compiler finds all the Triples associated to those consents, and removes those associations.\nFinally, it removes from the Eligible Privacy Scope all the Triples that are left with no active Legal Base as a consequence of consent removal."),(0,r.kt)("p",null,"Alternatively, ",(0,r.kt)("inlineCode",{parentName:"p"},"REVOKE-CONSENT")," Privacy Requests can be associated with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#privacy-scope"},"Privacy Scope Restriction"),".\nIn this case, for every triple in the ",(0,r.kt)("a",{parentName:"p",href:"#intersection"},"intersection")," of the previous Eligible Privacy Scope and of the Privacy Scope of the Privacy Scope Restriction of the Request, the Privacy Compiler removes the association with ",(0,r.kt)("inlineCode",{parentName:"p"},"CONSENT")," legal base."),(0,r.kt)("p",null,"Finally, the Privacy Compiler removes all the Triples that are left with no active Legal Base as a consequence of consent change."),(0,r.kt)("h3",{id:"object-privacy-requests"},(0,r.kt)("inlineCode",{parentName:"h3"},"OBJECT")," Privacy Requests"),(0,r.kt)("p",null,"The Privacy Compiler looks for a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#privacy-scope"},"Privacy Scope Restriction")," associated with the request.\nFor every triple found in the ",(0,r.kt)("a",{parentName:"p",href:"#intersection"},"intersection")," of the Eligible Privacy Scope and the scope of the given Privacy Scope Restriction, the Privacy Compiler removes any association of such triples with ",(0,r.kt)("inlineCode",{parentName:"p"},"CONSENT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGITIMATE_INTEREST")," Legal Bases.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"NECESSARY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTRACT")," Legal Bases are kept."),(0,r.kt)("p",null,":::Note\nIf the User wants to remove Triples linked to ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTRACT")," they need to terminate the contract, generating a ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICE-END")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#legal-base-event"},"Legal Base Event"),"."),(0,r.kt)("p",null,"No Privacy Request coming from the Data Subject can alter the Triples included in the Privacy Eligible Scope by ",(0,r.kt)("inlineCode",{parentName:"p"},"NECESSARY")," Legal Base.\n:::"),(0,r.kt)("p",null,"Finally, the Privacy Compiler removes all the Triples that are left with no active Legal Base as a consequence of consent change."),(0,r.kt)("p",null,"The consequences of ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECT")," requests are long-lasting, and affect the future of Eligible Privacy Scope.\nTriples concerned by the an ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECT")," Privacy Request, after it has been made, can't re-enter Eligible Privacy Scope by ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGITIMATE INTEREST")," regardless of any future ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGITIMATE INTEREST")," Legal Base Event."),(0,r.kt)("h3",{id:"restrict-privacy-requests"},(0,r.kt)("inlineCode",{parentName:"h3"},"RESTRICT")," Privacy Requests"),(0,r.kt)("p",null,"The Privacy Compiler looks for a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#privacy-scope"},"Privacy Scope Restriction")," associated with the request.\nFor every triple found in the Eligible Privacy Scope and not found in the scope of the given Privacy Scope Restriction, the Privacy Compiler removes any association of such triples with ",(0,r.kt)("inlineCode",{parentName:"p"},"CONSENT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGITIMATE_INTEREST")," Legal Bases.\nThe associations with ",(0,r.kt)("inlineCode",{parentName:"p"},"NECESSARY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTRACT")," Legal Bases remain unaffected."),(0,r.kt)("p",null,":::Note\nIf the User wants to remove Triples linked to ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTRACT")," they need to terminate the contract, generating a ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICE-END")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#legal-base-event"},"Legal Base Event"),"."),(0,r.kt)("p",null,"No Privacy Request coming from the Data Subject can alter the Triples included in the Privacy Eligible Scope by ",(0,r.kt)("inlineCode",{parentName:"p"},"NECESSARY")," Legal Base.\n:::"),(0,r.kt)("p",null,"Finally, the Privacy Compiler removes all the Triples that are left with no active Legal Base as a consequence of consent change."),(0,r.kt)("p",null,"The consequences of ",(0,r.kt)("inlineCode",{parentName:"p"},"RESTRICT")," requests are long-lasting, and affect the future of Eligible Privacy Scope.\nTriples not included in the scope of a ",(0,r.kt)("inlineCode",{parentName:"p"},"RESTRICT")," Privacy Request, after it has been made, can't re-enter Eligible Privacy Scope by ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGITIMATE INTEREST")," regardless of any future ",(0,r.kt)("inlineCode",{parentName:"p"},"LEGITIMATE INTEREST")," Legal Base Event."),(0,r.kt)("h2",{id:"privacy-algebra"},"Privacy Algebra"),(0,r.kt)("h3",{id:"privacy-scope-triples"},"Privacy Scope Triples"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{name:"triple"}),"Privacy Scope Triple")," is a unit of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#privacy-scope"},"Privacy Scope"),"\nand it consists of (in that order):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"one ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/./https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#data-categories"},"Data Category Term")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"*")),(0,r.kt)("li",{parentName:"ul"},"one ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#processing-categories"},"Processing Category Term")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"*")),(0,r.kt)("li",{parentName:"ul"},"one ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#purpose"},"Purpose Term")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"*"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," is indicated at one of the places of the triple, it is interpreted as all ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#data-categories"},"Data Categores"),", all ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#processing-categories"},"Processing Categories")," or all ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#purpose"},"Purposes")," depending on its place in the triple."),(0,r.kt)("h3",{id:"operations-over-privacy-scopes"},"Operations Over Privacy Scopes"),(0,r.kt)("h4",{id:"equivalence"},"Equivalence"),(0,r.kt)("p",null,"Each Privacy Scope Triple that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," or a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#terms"},"Term")," of which subcategory terms are known (including ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#data-capture-fragments"},"Data Capture Fragment")," ",(0,r.kt)("inlineCode",{parentName:"p"},"selectors")," for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md#data-categories"},"Data Category Terms"),") is equivalent to the set of Privacy Scope Triples including all combinations of such known subcategories (or all categories in case of ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),")."),(0,r.kt)("p",null,"E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES")," is equivalent to the following set:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES.ADDITIONAL-SERVICES"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES.BASIC-SERVICE"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL.BANK-ACCOUNT")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL.BANK-ACCOUNT")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES.ADDITIONAL-SERVICES"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL.BANK-ACCOUNT")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES.BASIC-SERVICE")),(0,r.kt)("p",null,"If the System also knows of a ",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," ",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL.BANK-ACCOUNT.PRIMARY"),", then the equivalent set also includes:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL.BANK-ACCOUNT.PRIMARY")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL.BANK-ACCOUNT.PRIMARY")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES.ADDITIONAL-SERVICES"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FINANCIAL.BANK-ACCOUNT.PRIMARY")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SHARING")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICES.BASIC-SERVICE")),(0,r.kt)("h4",{id:"inclusion"},"Inclusion"),(0,r.kt)("p",null,"Privacy Scope A is included in Privacy Scope B if all the Privacy Scope Triples from Privacy Scope B, and their equivalents, can be found among Privacy Scope Triples of the Privacy Scope A or their equivalents."),(0,r.kt)("h4",{id:"union"},"Union"),(0,r.kt)("p",null,"The Union of Privacy Scopes A and B includes all Privacy Scope Triples (and their equivalents) from Privacy Scopes A and B."),(0,r.kt)("h4",{id:"intersection"},"Intersection"),(0,r.kt)("p",null,"The Union of Privacy Scopes A and B includes all Privacy Scope Triples (and their equivalents) that can be found among Privacy Scope Triples (or their equivalents) of both Privacy Scopes A and B."))}h.isMDXComponent=!0},50:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\ud83d\udc77\u200d\u2642\ufe0f WIP")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This section and the related features are under active development.",(0,r.kt)("br",null),"\nGo check our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blindnet-io/"},"Github organization")," and follow us on ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/blindnet_io"},"Twitter")," for updates."))))}p.isMDXComponent=!0}}]);