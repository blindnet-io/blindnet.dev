"use strict";(self.webpackChunkblindnet_dev=self.webpackChunkblindnet_dev||[]).push([[3764],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,h=c["".concat(i,".").concat(g)]||c[g]||d[g]||s;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(3117),a=n(7294),s=n(4334),o=n(2389),l=n(7392),i=n(7094),u=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,g=e.defaultValue,h=e.values,m=e.groupId,k=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===g?g:null!=(t=null!=g?g:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,_=(0,a.useState)(v),I=_[0],S=_[1],x=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=N[m];null!=j&&j!==I&&f.some((function(e){return e.value===j}))&&S(j)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),r=f[n].value;r!==I&&(D(t),S(r),null!=m&&T(m,String(r)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var s,o=x.indexOf(e.currentTarget)-1;n=null!=(s=x[o])?s:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},k)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function g(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},3664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return g}});var r=n(3117),a=n(102),s=(n(7294),n(3905)),o=n(5488),l=n(5162),i=["components"],u={title:"Managing users and access",sidebar_position:5},p=void 0,d={unversionedId:"encryption/managing_users_access",id:"encryption/managing_users_access",title:"Managing users and access",description:"You can manage your users' interaction with blindnet and their access to data through blindnet encryption engine methods that you invoke in your application. These methods allow you to",source:"@site/docs/07-encryption/05-managing_users_access.mdx",sourceDirName:"07-encryption",slug:"/encryption/managing_users_access",permalink:"/docs/encryption/managing_users_access",draft:!1,editUrl:"https://github.com/blindnet-io/blindnet.dev/edit/develop/docs/07-encryption/05-managing_users_access.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Managing users and access",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Decrypting data",permalink:"/docs/encryption/decrypt"},next:{title:"Troubleshooting",permalink:"/docs/encryption/troubleshooting"}},c={},g=[{value:"Creating user tokens",id:"creating-user-tokens",level:2},{value:"Creating temporary tokens",id:"creating-temporary-tokens",level:3},{value:"Assigning a user to a group",id:"assigning-a-user-to-a-group",level:2},{value:"Connecting users with blindnet",id:"connecting-users-with-blindnet",level:2},{value:"Splitting secrets",id:"splitting-secrets",level:3},{value:"Registering and logging users in blindnet",id:"registering-and-logging-users-in-blindnet",level:3},{value:"Logging out users",id:"logging-out-users",level:3},{value:"Changing secrets",id:"changing-secrets",level:2},{value:"Giving access to other users",id:"giving-access-to-other-users",level:2},{value:"Lost secret",id:"lost-secret",level:2},{value:"Revoking user access",id:"revoking-user-access",level:2},{value:"Deleting encrypted data keys",id:"deleting-encrypted-data-keys",level:2},{value:"Deleting users",id:"deleting-users",level:2},{value:"Deleting user groups",id:"deleting-user-groups",level:2}],h={toc:g};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can manage your users' interaction with blindnet and their access to data through blindnet encryption engine methods that you invoke in your application. These methods allow you to"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"connect your users to blindnet"),(0,s.kt)("li",{parentName:"ul"},"cluster users in groups"),(0,s.kt)("li",{parentName:"ul"},"give/revoke access to data"),(0,s.kt)("li",{parentName:"ul"},"update user passwords"),(0,s.kt)("li",{parentName:"ul"},"etc.")),(0,s.kt)("h2",{id:"creating-user-tokens"},"Creating user tokens"),(0,s.kt)("p",null,"Each request to blindnet needs to be authenticated, which is done through user tokens. You ",(0,s.kt)("inlineCode",{parentName:"p"},"generate")," user tokens on your server by using ",(0,s.kt)("strong",{parentName:"p"},"blindnet Server SDK"),", and then ",(0,s.kt)("inlineCode",{parentName:"p"},"pass")," the generated token in the ",(0,s.kt)("a",{parentName:"p",href:"./installation#client-sdk-2"},"initialization of ",(0,s.kt)("strong",{parentName:"a"},"blindnet Client SDK")),"."),(0,s.kt)("p",null,"To generate a user token, after ",(0,s.kt)("a",{parentName:"p",href:"./installation#server-sdk-2"},"initializing blindnet Server SDK")," call the following blindnet ",(0,s.kt)("strong",{parentName:"p"},"Server SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-server",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$userId = 'your_user_id';\n$groupId = 'your_user_group_id';\n$userToken = $blindnet->createUserToken($userId, $groupId);\n"))),(0,s.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"userId = 'your_user_id';\ngroupId = 'your_user_group_id';\nconst userToken = await blindnet.createUserToken(userId, groupId);\n")))),(0,s.kt)("p",null,"User tokens expire 12 hours after they have been created."),(0,s.kt)("h3",{id:"creating-temporary-tokens"},"Creating temporary tokens"),(0,s.kt)("p",null,"Temporary tokens are used to authenticate when ",(0,s.kt)("a",{parentName:"p",href:"./encrypt"},"encrypting")," the data. They contain the information to whom the data is being encrypted."),(0,s.kt)(o.Z,{groupId:"lang-server",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$groupId = 'your_user_group_id';\n$userToken = $blindnet->createTempUserToken($groupId);\n"))),(0,s.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"groupId = 'your_user_group_id';\nconst userToken = await blindnet.createTempUserToken(groupId);\n// or\nuserIds = ['user_0', 'user_1'];\nconst userToken = await blindnet.createTempUserToken(userIds);\n")))),(0,s.kt)("p",null,"Temporary tokens expire 30 minutes after they have been created."),(0,s.kt)("h2",{id:"assigning-a-user-to-a-group"},"Assigning a user to a group"),(0,s.kt)("p",null,"Each of your users can belong to one user group or no group at all.",(0,s.kt)("br",{parentName:"p"}),"\n","For example, if your platform users are employees of a hotel or bank, you can group your users (employees) with respect to the hotel or bank they work with (group).",(0,s.kt)("br",{parentName:"p"}),"\n","You associate a user to a group by specifying the ",(0,s.kt)("inlineCode",{parentName:"p"},"group ID")," in a ",(0,s.kt)("inlineCode",{parentName:"p"},"user token")," when connecting a user to blindnet for the first time."),(0,s.kt)("p",null,"Currently, you can't assign already created user to a different group. ",(0,s.kt)("a",{parentName:"p",href:"#deleting-users"},"Delete")," the user and create it again with a different ",(0,s.kt)("inlineCode",{parentName:"p"},"group id"),"."),(0,s.kt)("h2",{id:"connecting-users-with-blindnet"},"Connecting users with blindnet"),(0,s.kt)("p",null,"The core of security of blindnet are user's ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/archive/encryption-engine#user-private-keys"},"private keys"),". They are randomly generated on the user's local device and encrypted using a secret code (e.g. user's password) and then securely stored in blindnet.",(0,s.kt)("br",{parentName:"p"}),"\n","Blindnet allows you to reuse existing user passwords so that your users still use ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/glossary#secret-value"},"one password")," in your application. To do so safely, you need to use blindnet Client SDK to split user passwords before you connect a user to blindnet (check our ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/archive/encryption-engine#user-passwords#user-passwords"},"Security page")," to see why this is inportant)."),(0,s.kt)("h3",{id:"splitting-secrets"},"Splitting secrets"),(0,s.kt)("admonition",{title:'"Splitting user\'s password"',type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In the case that you send plaintext passwords to your server for user authentication, we advise that you update the authentication workflow in the following way."),(0,s.kt)("p",{parentName:"admonition"},"When a user is logging into your application and enters a password, you should use blindnet Client SDK to split the password into two parts: you use the ",(0,s.kt)("inlineCode",{parentName:"p"},"second part")," (",(0,s.kt)("em",{parentName:"p"},"appSecret"),") to authenticate the user on your app, while you use the ",(0,s.kt)("inlineCode",{parentName:"p"},"first part")," (",(0,s.kt)("em",{parentName:"p"},"blindnetSecret"),") for registering and logging users to blindnet. It is advisable not to use the same password for both actions since a party that can read the user's password (i.e., you) would be able to decrypt the user's private keys.")),(0,s.kt)("p",null,"To split the password use the following ",(0,s.kt)("strong",{parentName:"p"},"Client SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-client",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const password = 'user_password';\nconst { blindnetSecret, appSecret } = await Blindnet.deriveSecrets(password);\n")))),(0,s.kt)("h3",{id:"registering-and-logging-users-in-blindnet"},"Registering and logging users in blindnet"),(0,s.kt)("p",null,"When a user logs into your system, you also need to log in that user to blindnet. To do so, you first obtain blindnet secret by ",(0,s.kt)("a",{parentName:"p",href:"#splitting-secrets"},"splitting user password"),", and then use the following ",(0,s.kt)("strong",{parentName:"p"},"Client SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-client",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await blindnet.connect(blindnetSecret);\n")))),(0,s.kt)("p",null,"The blindnet encryption engine does not expose separate methods for user registration and logging in. You always use the ",(0,s.kt)("inlineCode",{parentName:"p"},"connect")," method while its internals handle user registration and logging in. If it is the first time that a user is being connected to blindnet, the SDK will register that user by using the information you provide in a ",(0,s.kt)("a",{parentName:"p",href:"#creating-user-tokens"},"token"),"."),(0,s.kt)("p",null,"When you use the ",(0,s.kt)("inlineCode",{parentName:"p"},"connect")," method, it locally initiates user's ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/archive/encryption-engine#user-private-keys"},"private keys")," so that later users can decrypt their data."),(0,s.kt)("h3",{id:"logging-out-users"},"Logging out users"),(0,s.kt)("p",null,"When a user logs out of your application, you also need to log out that user from blindnet by using the following ",(0,s.kt)("strong",{parentName:"p"},"Client SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-client",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await blindnet.disconnect();\n")))),(0,s.kt)("p",null,"This will remove the user's private keys from the user's local device."),(0,s.kt)("h2",{id:"changing-secrets"},"Changing secrets"),(0,s.kt)("p",null,"Since the user's keys are encrypted with the ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/glossary#secret-value"},"user's secret"),", changing the secret means the keys must be re-encrypted with the new secret value."),(0,s.kt)("p",null,"Your users can change their passwords in your applications at any time without losing access to previously encrypted data. To ensure that access is not lost, when your user changes password, ",(0,s.kt)("a",{parentName:"p",href:"#splitting-secrets"},"split")," the new password and use the corresponding ",(0,s.kt)("strong",{parentName:"p"},"Client SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-client",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const newPassword = 'user_new_password';\nconst { blindnetSecret, appSecret } = await Blindnet.deriveSecrets(newPassword);\nawait blindnet.changeSecret(blindnetSecret);\n")))),(0,s.kt)("p",null,"This will re-encrypt the user's private keys with the new secret and post them to blindnet."),(0,s.kt)("h2",{id:"giving-access-to-other-users"},"Giving access to other users"),(0,s.kt)("p",null,"A user (Alice) can give access to ",(0,s.kt)("a",{parentName:"p",href:"./encrypt"},"encrypted data")," to another user (Bob).",(0,s.kt)("br",{parentName:"p"}),"\n","It means Alice will download her ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/glossary#encrypted-data-key"},"encrypted data keys")," and re-encrypt them with Bob's ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/glossary#public-key"},"public key"),". This way Bob can download and decrypt the keys with his ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/glossary#private-key"},"private key"),"."),(0,s.kt)("p",null,"A possible use case for this is when a new user registers to blindnet and needs access to e.g. customers' data. Think of a new hotel employee accessing guest's encrypted passport during check-in."),(0,s.kt)("p",null,"Currently, Alice give access ",(0,s.kt)("strong",{parentName:"p"},"all the data")," for which she has the keys."),(0,s.kt)("p",null,"To give access to other user, use the following ",(0,s.kt)("strong",{parentName:"p"},"Client SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-client",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const userId = 'id_of_user_to_give_access_to';\nblindnet.giveAccess(userId);\n")))),(0,s.kt)("h2",{id:"lost-secret"},"Lost secret"),(0,s.kt)("p",null,"When a user loses the secret (forgets the login password), the user loses access to the encrypted data since they are unable to decrypt the keys used to encrypt the data."),(0,s.kt)("p",null,"You need to put in place the following workflow"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#deleting-users"},"Delete")," the user from blindnet."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#registering-and-logging-users-in-blindnet"},"Log-in")," the user to blindnet with a new secret."),(0,s.kt)("li",{parentName:"ol"},"After the user has logged in, another user must ",(0,s.kt)("a",{parentName:"li",href:"#giving-access-to-other-users"},"give them access")," to the encrypted data.")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If no other user has an access to a particular data when the secret is lost, ",(0,s.kt)("strong",{parentName:"p"},"no one")," will be able to decrypt the data.")),(0,s.kt)("h2",{id:"revoking-user-access"},"Revoking user access"),(0,s.kt)("p",null,"Revoking access to a user means the user will lose all the keys necessary to decrypt the data and consequently, lose access to data. Your server should inform blindnet about a user for which the access is being revoked, by using the following blindnet ",(0,s.kt)("strong",{parentName:"p"},"Server SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-server",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$userId = 'id_of_user_to_revoke_access';\n$blindnet->revokeAccess($userId);\n"))),(0,s.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"userId = 'id_of_user_to_revoke_access';\nawait blindnet.revokeAccess(userId);\n")))),(0,s.kt)("p",null,"In the situation where all users in a ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/glossary#user-groups"},"user group")," always have access to all the data, this action is not meaningful and ",(0,s.kt)("a",{parentName:"p",href:"#deleting-users"},"deletion")," of users should be performed instead."),(0,s.kt)("h2",{id:"deleting-encrypted-data-keys"},"Deleting encrypted data keys"),(0,s.kt)("p",null,"When data is deleted from your server, it's encrypted keys should be deleted from blindnet. User the following ",(0,s.kt)("strong",{parentName:"p"},"Server SDK")," method to delete the keys:"),(0,s.kt)(o.Z,{groupId:"lang-server",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$dataId = 'id_of_deleted_data';\n$blindnet->forgetData($dataId);\n"))),(0,s.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"dataId = 'id_of_deleted_data';\nawait blindnet.forgetData(dataId);\n")))),(0,s.kt)("h2",{id:"deleting-users"},"Deleting users"),(0,s.kt)("p",null,"When a user is deleted from your application, you must inform blindnet about the event. This is done from your server by using the following blindnet ",(0,s.kt)("strong",{parentName:"p"},"Server SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-server",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$userId = 'id_of_user_to_delete';\n$blindnet->forgetUser($userId);\n"))),(0,s.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"userId = 'id_of_user_to_delete';\nawait blindnet.forgetUser(userId);\n")))),(0,s.kt)("p",null,"Deleting a user from blindnet implies that the deleted user will no longer be able to decrypt any data, and other users will no longer be able to ",(0,s.kt)("a",{parentName:"p",href:"./encrypt"},"encrypt data")," for that user."),(0,s.kt)("p",null,"When deleting users, you must be careful not to delete the last user of a ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/glossary#user-groups"},"group")," because in that case all existing data will become undecryptable. Deleting the last user has the same effect as ",(0,s.kt)("a",{parentName:"p",href:"#deleting-user-groups"},"deleting a user group"),"."),(0,s.kt)("h2",{id:"deleting-user-groups"},"Deleting user groups"),(0,s.kt)("p",null,"To delete a ",(0,s.kt)("a",{parentName:"p",href:"/docs/references/glossary#user-groups"},"user group"),", use the following blindnet ",(0,s.kt)("strong",{parentName:"p"},"Server SDK")," method:"),(0,s.kt)(o.Z,{groupId:"lang-server",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"php",label:"PHP",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$groupId = 'id_of_group_to_delete';\n$blindnet->forgetGroup($groupId);\n"))),(0,s.kt)(l.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"groupId = 'id_of_group_to_delete';\nawait blindnet.forgetGroup(groupId);\n")))),(0,s.kt)("p",null,"Deleting a user group in blindnet system implies deleting all its users and encrypted keys from blindnet. This means that encrypted data of this group stored on your servers will not be decryptable anymore."))}m.isMDXComponent=!0}}]);