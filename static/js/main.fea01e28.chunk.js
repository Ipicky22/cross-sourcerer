(this["webpackJsonpcross-sourcerer"]=this["webpackJsonpcross-sourcerer"]||[]).push([[0],{60:function(t,e,n){t.exports=n(86)},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(49),r=n(0),o=n.n(r),l=n(20),i=n.n(l),c=n(18),s=n(27),u=n(56),d=n(23),m=n(15),v=(n(65),n(66),n(67),n(12)),E=(n(68),n(10)),f=n(9);function g(){var t=Object(v.a)(["\n\tquery($login: String!) {\n\t\tuser(login: $login) {\n\t\t\tbio\n\t\t\tname\n\t\t\tcompany\n\t\t\temail\n\t\t\tlocation\n\t\t}\n\t}\n"]);return g=function(){return t},t}var O=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOGIN,_=Object(E.a)(g());var S=function(){var t=Object(f.a)(_,{variables:{login:O}}),e=t.loading,n=t.error,a=t.data;return e?null:n?"Error! ".concat(n):o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"name"},a.user.name),o.a.createElement("div",{className:"infos"},o.a.createElement("div",null,o.a.createElement("div",null,a.user.email),o.a.createElement("div",null,a.user.company)),o.a.createElement("div",null,o.a.createElement("div",null,a.user.bio),o.a.createElement("div",null,a.user.location))))};n(72);function b(){var t=Object(v.a)(["\n\tquery {\n\t\tviewer {\n\t\t\tavatarUrl\n\t\t}\n\t}\n"]);return b=function(){return t},t}var C=Object(E.a)(b());var T=function(){var t=Object(f.a)(C),e=t.loading,n=t.error,a=t.data;return e?null:n?"Error! ".concat(n):o.a.createElement("div",{className:"profile-img-container"},o.a.createElement("img",{className:"profile-img",src:a.viewer.avatarUrl,alt:"profile"}))};n(73);function N(){var t=Object(v.a)(["\n\tquery($login: String!) {\n\t\tuser(login: $login) {\n\t\t\trepositories {\n\t\t\t\ttotalCount\n\t\t\t}\n\t\t}\n\t}\n"]);return N=function(){return t},t}var p=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOGIN,P=Object(E.a)(N());var h=function(){var t=Object(f.a)(P,{variables:{login:p}}),e=t.loading,n=t.error,a=t.data;return e?null:n?"Error! ".concat(n):o.a.createElement("div",{className:"content2"},o.a.createElement("div",{className:"title"},"Repositories"),o.a.createElement("div",{className:"title"},a.user.repositories.totalCount))};n(74);function D(){var t=Object(v.a)(["\n\tquery($login: String!) {\n\t\tuser(login: $login) {\n\t\t\tfollowers {\n\t\t\t\ttotalCount\n\t\t\t}\n\t\t}\n\t}\n"]);return D=function(){return t},t}var R=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOGIN,j=Object(E.a)(D());var W=function(){var t=Object(f.a)(j,{variables:{login:R}}),e=t.loading,n=t.error,a=t.data;return e?null:n?"Error! ".concat(n):o.a.createElement("div",{className:"content2"},o.a.createElement("div",{className:"title"},"Followers"),o.a.createElement("div",{className:"title"},a.user.followers.totalCount))};n(75);function A(){var t=Object(v.a)(["\n\tquery($login: String!) {\n\t\tuser(login: $login) {\n\t\t\tfollowing {\n\t\t\t\ttotalCount\n\t\t\t}\n\t\t}\n\t}\n"]);return A=function(){return t},t}var L=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOGIN,K=Object(E.a)(A());var w=function(){var t=Object(f.a)(K,{variables:{login:L}}),e=t.loading,n=t.error,a=t.data;return e?null:n?"Error! ".concat(n):o.a.createElement("div",{className:"content2"},o.a.createElement("div",{className:"title"},"Following"),o.a.createElement("div",{className:"title"},a.user.following.totalCount))};n(76);function y(){var t=Object(v.a)(["\n\tquery($login: String!) {\n\t\tuser(login: $login) {\n\t\t\trepositories(first: 100) {\n\t\t\t\ttotalCount\n\t\t\t\tnodes {\n\t\t\t\t\tdefaultBranchRef {\n\t\t\t\t\t\ttarget {\n\t\t\t\t\t\t\t... on Commit {\n\t\t\t\t\t\t\t\thistory {\n\t\t\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t\t\t\tadditions\n\t\t\t\t\t\t\t\t\t\tdeletions\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return y=function(){return t},t}var U=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOGIN,B=Object(E.a)(y());var H=function(){var t=Object(f.a)(B,{variables:{login:U}}),e=t.loading,n=t.error,a=t.data;if(e)return null;if(n)return"Error! ".concat(n);var r=a.user.repositories.nodes,l=0;return r.forEach((function(t){null!=t.defaultBranchRef&&(l+=t.defaultBranchRef.target.history.totalCount)})),o.a.createElement("div",{className:"content2"},o.a.createElement("div",{className:"title"},"Commits"),o.a.createElement("div",{className:"title"},l))};n(77);function I(){var t=Object(v.a)(["\n\tquery($login: String!) {\n\t\tuser(login: $login) {\n\t\t\trepositories(first: 100) {\n\t\t\t\ttotalCount\n\t\t\t\tnodes {\n\t\t\t\t\tdefaultBranchRef {\n\t\t\t\t\t\ttarget {\n\t\t\t\t\t\t\t... on Commit {\n\t\t\t\t\t\t\t\thistory {\n\t\t\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t\t\t\tadditions\n\t\t\t\t\t\t\t\t\t\tdeletions\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return I=function(){return t},t}var $=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOGIN,x=Object(E.a)(I());var k=function(){var t=Object(f.a)(x,{variables:{login:$}}),e=t.loading,n=t.error,a=t.data;if(e)return null;if(n)return"Error! ".concat(n);var r=a.user.repositories.nodes,l=0,i=0;return r.forEach((function(t){null!=t.defaultBranchRef&&(t.defaultBranchRef.target.history.nodes.forEach((function(t){l+=t.additions,l+=t.deletions})),i=l-0)})),o.a.createElement("div",{className:"content2"},o.a.createElement("div",{className:"title"},"Lines of code"),o.a.createElement("div",{className:"title"},i))};var q=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(S,null)),o.a.createElement("div",{className:"content"},o.a.createElement(T,null),o.a.createElement(H,null),o.a.createElement(h,null),o.a.createElement(k,null),o.a.createElement(W,null),o.a.createElement(w,null)))},V=(n(78),n(79),n(109)),F=n(114),G=n(113),z=n(112),J=n(111),M=n(55),Q=n.n(M);function X(){var t=Object(v.a)(["\n\tquery($login: String!) {\n\t\tuser(login: $login) {\n\t\t\trepositories(first: 100) {\n\t\t\t\ttotalCount\n\t\t\t\tnodes {\n\t\t\t\t\tname\n\t\t\t\t\tnameWithOwner\n\t\t\t\t\tassignableUsers {\n\t\t\t\t\t\ttotalCount\n\t\t\t\t\t}\n\t\t\t\t\tcollaborators(first: 10) {\n\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\tlogin\n\t\t\t\t\t\t\tavatarUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tlanguages(first: 100) {\n\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcolor\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return X=function(){return t},t}var Y=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOGIN,Z=Object(E.a)(X()),tt=Object(V.a)((function(t){return{root:{width:"100%",marginBottom:8},heading:{fontSize:20,fontWeight:500,color:"#FFFFFF"},panelHeader:{backgroundColor:"#3d4047",borderTopRightRadius:5,borderTopLeftRadius:5},panel:{backgroundColor:"transparent"},panelDetails:{backgroundColor:"#505359",display:"flex",flexDirection:"column"},div:{display:"flex",flexDirection:"column"},collabParent:{display:"flex",flexDirection:"row",marginBottom:8},collab:{textAlign:"center",color:"white"},languageParent:{display:"flex",flexDirection:"row"},lang:{display:"flex",flexDirection:"row",marginTop:8,margin:8,backgroundColor:"#3d4047",padding:20,borderRadius:5,alignItems:"center"},langText:{color:"white"},langColor:{width:20,height:20,borderRadius:100,marginLeft:16}}}));var et=function(){var t=tt(),e=Object(f.a)(Z,{variables:{login:Y}}),n=e.loading,a=e.error,r=e.data;return n?null:a?"Error! ".concat(a):r.user.repositories.nodes.map((function(e,n){return o.a.createElement("div",{className:t.root,key:n},o.a.createElement(F.a,{className:t.panel},o.a.createElement(G.a,{expandIcon:o.a.createElement(Q.a,null),"aria-controls":"panel1a-content",id:"panel1a-header",className:t.panelHeader},o.a.createElement(J.a,{className:t.heading},e.name)),o.a.createElement(z.a,{className:t.panelDetails},o.a.createElement("div",{className:t.div},o.a.createElement("div",{className:t.collabParent},e.collaborators.nodes.map((function(e,n){return o.a.createElement("div",{key:n},o.a.createElement("div",{className:"profile-img-container"},o.a.createElement("img",{className:"profile-img",src:e.avatarUrl,alt:"profile"})),o.a.createElement("div",{className:t.collab},e.login))}))),o.a.createElement("div",{className:t.languageParent},e.languages.nodes.map((function(e,n){return o.a.createElement("div",{key:n,className:t.lang},o.a.createElement("div",{className:t.langText},e.name),(a=e.color,o.a.createElement("div",{style:{backgroundColor:a,width:20,height:20,borderRadius:100,marginLeft:16}})));var a})))))))}))};n(85);function nt(){var t=Object(v.a)(["\n\tquery($login: String!) {\n\t\tuser(login: $login) {\n\t\t\trepositories(first: 100) {\n\t\t\t\ttotalCount\n\t\t\t\tnodes {\n\t\t\t\t\tupdatedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return nt=function(){return t},t}var at=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LOGIN,rt=Object(E.a)(nt());var ot=function(){var t=Object(f.a)(rt,{variables:{login:at}}),e=t.loading,n=t.error,a=t.data;return e?null:n?"Error! ".concat(n):o.a.createElement("div",{className:"content3"},o.a.createElement("div",{className:"name2"},"Repositories"),o.a.createElement("div",{className:"info"},a.user.repositories.totalCount))};var lt=function(){return o.a.createElement("div",{className:"content4"},o.a.createElement(ot,null),o.a.createElement(et,null))};var it=function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement(q,null),o.a.createElement(lt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ct=Object({NODE_ENV:"production",PUBLIC_URL:"/cross-sourcerer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_TOKEN,st=Object(s.b)({uri:"https://api.github.com/graphql"}),ut=Object(u.a)((function(t,e){var n=e.headers;return{headers:Object(a.a)({},n,{authorization:"Bearer ".concat(ct)})}})),dt=new c.a({link:ut.concat(st),cache:new d.a});i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{client:dt},o.a.createElement(it,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.fea01e28.chunk.js.map