(()=>{"use strict";var e={9281:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(7378),a=n(5531),o=n(373),l=n(8559),i=n(7597),c=n(3295),u=n(4344),s=n(5513),d=n(6858),m=n(7596),p=n(3779),f=(0,o.Z)((function(e){return(0,l.Z)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},contentWrapper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(1,2,4),minHeight:300,minWidth:200}})}));const h=function(e){var t=e.isOpened,n=e.onClose,o=f(),l=(0,a.v9)(m.E2),h=function(e){var t=e.index,n=e.style,a=l[t];return r.createElement("div",{key:a.id,style:n},r.createElement(p.I,{user:a}))};return r.createElement(s.Z,{className:o.modal,open:t,onClose:n,closeAfterTransition:!0},r.createElement(d.Z,{in:t},r.createElement("div",{className:o.contentWrapper},r.createElement(u.Z,{align:"center",variant:"body1"},"Click outside to close"),r.createElement(c.Z,null,(function(e){var t=e.height,n=e.width;return r.createElement(i.t7,{height:t,width:n,itemSize:46,itemCount:l.length},h)})))))}},3779:(e,t,n)=>{n.d(t,{I:()=>s});var r=n(7378),a=n(5531),o=n(373),l=n(8559),i=n(4002),c=n(1958),u=(0,o.Z)((function(e){return(0,l.Z)({chip:{margin:"0 "+e.spacing(.25)+"px"}})}));const s=function(e){var t=e.user,n=u(),o=t.id,l=t.name,s=(0,a.I0)();return r.createElement(i.Z,{label:l,className:n.chip,onDelete:function(){return s((0,c.jd)(o,!1))},variant:"outlined",size:"small"})};n(9281)},3630:(e,t,n)=>{var r=n(7378),a=n(1542),o=n(5531),l=n(9236),i=n(5106),c=n(5870),u=n(4942),s=n(1958),d=n(9887),m=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],l=0,i=o.length;l<i;l++,a++)r[a]=o[l];return r};const p=(0,i.UY)({fetchError:function(e,t){switch(void 0===e&&(e=null),t.type){case s.MF.UPDATE_FETCH_ERROR:return t.payload;default:return e}},usersList:function(e,t){switch(void 0===e&&(e=[]),t.type){case s.MF.UPDATE_USERS_LIST:return t.payload;case s.MF.UPDATE_USER_IN_LIST:var n=t.payload,r=m(e);return e.map((function(e,t){e.id===n.id&&r.splice(t,1,n)})),r;case s.MF.ADD_USER:return m(e,[{id:(0,d.Z)(),name:t.payload.firstName,surname:t.payload.surname,age:t.payload.age,isChecked:!1}]);case s.MF.SEARCH_USER:return m(e).filter((function(e){return e.name===t.payload}));default:return e}}}),f=(0,i.MT)(p,(0,u.Uo)((0,i.md)(c.Z)));var h=n(373),E=n(8559),v=n(7820),g=(0,h.Z)((function(){return(0,E.Z)({wrapper:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})}));const y=function(){var e=g();return r.createElement("div",{className:e.wrapper},r.createElement(v.Z,null))};var b=n(4344),S=n(7596);const w=function(){var e=(0,o.v9)(S.gh);return e?r.createElement(b.Z,{align:"center",variant:"body2",color:"error"},e):r.createElement(r.Fragment,null)};var Z=n(4874),x=n(3218),C=n(7299),R=n(3895),k=(0,h.Z)((function(e){return(0,E.Z)({listIem:{borderBottom:"solid 1px "+e.palette.divider},lineContentContainer:{width:"100%",display:"flex"},lineContentElement:{flexGrow:1,flexBasis:80}})}));const _=function(e){var t=e.style,n=e.user,a=k(),l=n.id,i=n.name,c=n.surname,u=n.age,d=n.isChecked,m=(0,o.I0)();return r.createElement(Z.Z,{button:!0,className:a.listIem,style:t},r.createElement(x.Z,null,r.createElement(R.Z,{edge:"start",checked:d,onChange:function(){return m((0,s.jd)(l,!d))},tabIndex:-1,disableRipple:!0})),r.createElement("div",{className:a.lineContentContainer},[i,c,u].map((function(e){return r.createElement(C.Z,{key:l+"-prop-"+e,className:a.lineContentElement,primary:e+" "+("number"==typeof e?" y.o.":"")})}))))};var I=n(7597),U=n(3295),T=(0,h.Z)((function(e){return(0,E.Z)({usersList:{width:"100%",height:"calc(100vh - "+e.spacing(16)+"px)",backgroundColor:e.palette.background.paper}})}));const N=function(){var e=T(),t=(0,r.useRef)(null),n=(0,o.v9)(S.B9),a=(0,o.I0)();(0,r.useEffect)((function(){a((0,s.iI)(5e3));document.addEventListener("scrolltabletop",(function(){t.current.scrollTo(0)}))}),[]);var l=function(e){var t=e.index,a=e.style,o=n[t];return r.createElement(_,{key:o.id,style:a,user:o})};return 0===n.length?r.createElement(y,null):r.createElement("div",{className:e.usersList},r.createElement(U.Z,null,(function(e){var a=e.height,o=e.width;return r.createElement(I.t7,{ref:t,height:a,width:o,itemSize:46,itemCount:n.length},l)})))};var A=n(8681),P=n(6621),D=n(1788),L=n(4662),F=n(3937),j=n(808),z=n(9334),O=(0,h.Z)((function(e){var t,n;return(0,E.Z)({search:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:(0,L.U1)(e.palette.common.white,.15),"&:hover":{backgroundColor:(0,L.U1)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},t[e.breakpoints.up("sm")]={marginLeft:e.spacing(1),width:"auto"},t),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(n={padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + "+e.spacing(4)+"px)",transition:e.transitions.create("width"),width:"100%"},n[e.breakpoints.up("sm")]={width:"12ch","&:focus":{width:"20ch"}},n)})}));function M(){var e=(0,r.useState)(""),t=e[0],n=e[1],a=(0,r.useState)(""),l=a[0],i=a[1],c=(0,o.I0)(),u=O();return r.createElement("div",{className:u.search},r.createElement("div",{className:u.searchIcon},r.createElement(F.Z,null)),r.createElement(j.Z,{placeholder:"Search...",classes:{root:u.inputRoot,input:u.inputInput},value:t,inputProps:{"aria-label":"search "},onChange:function(e){n(e.currentTarget.value)}}),l?r.createElement(z.Z,{onClick:function(){c((0,s.iI)(5e3)),i("")}},"Back"):r.createElement(z.Z,{onClick:function(){c((0,s.qz)(t)),i("stop search!")}},"Search"))}const H=function(){var e=(0,o.I0)(),t=(0,o.v9)(S.uA),n=(0,o.v9)(S.z1),a="("+n+"/"+t+")",l=t===n,i=(0,D.Ds)((function(){e(n<t?(0,s.Rh)(!0):(0,s.Rh)(!1))}));return r.createElement(r.Fragment,null,r.createElement(P.Z,{position:"fixed",color:"default"},r.createElement(oe,null,r.createElement(Z.Z,null,r.createElement(x.Z,null,r.createElement(R.Z,{edge:"start",checked:l,onChange:i,tabIndex:-1,disableRipple:!0})),r.createElement(C.Z,{primary:"Select all "+a}),r.createElement(M,null),r.createElement(w,null),r.createElement(C.Z,{primary:"React test App",primaryTypographyProps:{align:"right",variant:"h6"}})))),r.createElement(A.Z,null))};var B=n(4002),W=n(2883),V=n(7780),G=n(6341),q=n(890),J=n(3779),Y=n(8752),K=(0,h.Z)((function(e){return(0,E.Z)({contentWrapper:{display:"flex",flexDirection:"column",alignItems:"flex-end",padding:e.spacing(.5),height:e.spacing(8)}})})),Q=function(){var e=K(),t=(0,o.I0)();return r.createElement("div",null,r.createElement(Y.J9,{initialValues:{firstName:"",surName:"",age:17},validate:function(e){return{}},onSubmit:function(e,n){var r,a,o,l=n.setSubmitting;r=e.firstName,a=e.surName,o=e.age,t((0,s.cn)(r,a,o)),l(!1)}},(function(t){var n=t.isSubmitting;return r.createElement(Y.l0,{className:e.contentWrapper},r.createElement("div",null,r.createElement("b",null,"First name"),": ",r.createElement(Y.gN,{type:"firstName",name:"firstName"})),r.createElement("div",null,r.createElement("b",null,"Surname"),": ",r.createElement(Y.gN,{type:"surName",name:"surName"})),r.createElement("div",null,r.createElement("b",null,"Age"),": ",r.createElement(Y.gN,{type:"age",name:"age"})),r.createElement(z.Z,{size:"small",variant:"outlined",type:"submit",disabled:n},"Add"))})))},X=(0,r.lazy)((function(){return Promise.resolve().then(n.bind(n,9281))})),$=(0,h.Z)((function(e){return(0,E.Z)({footer:{top:"auto",bottom:0},fabButton:{position:"absolute",zIndex:1,top:-20,right:40},formSearch:{position:"absolute",zIndex:1,top:-120,right:1270},addButton:{position:"absolute",zIndex:1,top:-20,right:1460},contentWrapper:{display:"flex",alignItems:"center",padding:e.spacing(.5),height:e.spacing(8)},chip:{margin:"0 "+e.spacing(.25)+"px"}})})),ee=function(){var e=$();return r.createElement(V.ZP,{title:"Scroll to the table top",placement:"top"},r.createElement(W.Z,{color:"primary",size:"small",onClick:function(){return document.dispatchEvent(D.th)},className:e.fabButton},r.createElement(q.Z,null)))},te=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],a=$();return r.createElement("div",null,r.createElement(V.ZP,{title:"Add new users",placement:"top"},r.createElement(W.Z,{color:"primary",size:"small",onClick:function(){n(!t)},className:a.addButton},r.createElement(G.Z,null))),t&&r.createElement("div",{className:a.formSearch},r.createElement(Q,null)))};const ne=function(){var e=$(),t=(0,r.useState)(!1),n=t[0],a=t[1],l=(0,o.v9)(S.E2),i=!1;return l.length>3&&(i=!0,l=l.slice(0,3)),r.createElement(r.Fragment,null,n&&r.createElement(r.Suspense,{fallback:r.createElement(y,null)},r.createElement(X,{isOpened:n,onClose:function(){return a(!1)}})),r.createElement(A.Z,null),r.createElement(P.Z,{position:"fixed",color:"default",className:e.footer},r.createElement(ee,null),r.createElement(te,null),r.createElement(oe,null,r.createElement("div",{className:e.contentWrapper},l.map((function(e){return r.createElement(J.I,{key:e.id,user:e})})),i&&r.createElement(B.Z,{label:"See all",onClick:function(){return a(!0)},className:e.chip,color:"primary",size:"small"})))))};var re=n(6116),ae=(0,h.Z)((function(){return(0,E.Z)({usersListContainer:{padding:0}})}));const oe=function(e){var t=e.children,n=ae();return r.createElement(re.Z,{maxWidth:"md",className:n.usersListContainer},t)};a.render(r.createElement((function(){return r.createElement(o.zt,{store:f},r.createElement(l.ZP,null),r.createElement(H,null),r.createElement(oe,null,r.createElement(N,null)),r.createElement(ne,null))}),null),document.getElementById("react-root"))},1958:(e,t,n)=>{n.d(t,{MF:()=>r,cn:()=>s,iI:()=>m,qz:()=>d,jd:()=>f,Rh:()=>p});var r,a=n(9887),o=n(1788),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};!function(e){e.UPDATE_USERS_LIST="UPDATE_USERS_LIST",e.FETCH_USERS="FETCH_USERS",e.UPDATE_USER_IN_LIST="UPDATE_USER_IN_USERS_LIST",e.UPDATE_FETCH_ERROR="UPDATE_FETCH_ERROR",e.ADD_USER="ADD_USER",e.SEARCH_USER="SEARCH_USER"}(r||(r={}));var u=function(e){return{type:r.UPDATE_USERS_LIST,payload:e}},s=function(e,t,n){return{type:r.ADD_USER,payload:{firstName:e,surname:t,age:n}}},d=function(e){return{type:r.SEARCH_USER,payload:e}},m=function(e){return function(t){return i(void 0,void 0,void 0,(function(){var n,l;return c(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(p=e,void 0===p&&(p=50),c=void 0,s=void 0,d=void 0,m=function(){var e,t,n;return function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,(function(r){return e=["Ivan","Viktor","Vladimir","Anton","Sergey"],t=["Velichenko","Smirnov","Levashov","Smekhov","Voinov"],n=function(){var n=function(e,t){void 0===t&&(t=0);var n=Math.round(Math.random()*e);return n<t?t:n};return{id:(0,a.Z)(),name:e[n(e.length-1)],surname:t[n(t.length-1)],age:n(65,7)}},[2,Array.from({length:p},(function(){return n()}))]}))},new(d||(d=Promise))((function(e,t){function n(e){try{a(m.next(e))}catch(e){t(e)}}function r(e){try{a(m.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,r)}a((m=m.apply(c,s||[])).next())})))];case 1:return n=i.sent(),t(u(n)),[3,3];case 2:return l=i.sent(),(0,o.r8)()&&console.log(l),t(("Unable to fetch data: network connection problems",{type:r.UPDATE_FETCH_ERROR,payload:"Unable to fetch data: network connection problems"})),[3,3];case 3:return[2]}var c,s,d,m,p}))}))}},p=function(e){return function(t,n){return i(void 0,void 0,void 0,(function(){var r,a;return c(this,(function(o){return r=n().usersList,a=r.map((function(t){return l(l({},t),{isChecked:e})})),t(u(a)),[2]}))}))}},f=function(e,t){return function(n,a){return i(void 0,void 0,void 0,(function(){return c(this,(function(o){return a().usersList.map((function(a){var o;a.id===e&&n((o=l(l({},a),{isChecked:t}),{type:r.UPDATE_USER_IN_LIST,payload:o}))})),[2]}))}))}}},7596:(e,t,n)=>{n.d(t,{gh:()=>a,B9:()=>o,uA:()=>l,E2:()=>i,z1:()=>c});var r=n(406),a=function(e){return e.fetchError},o=function(e){return e.usersList},l=(0,r.P1)(o,(function(e){return e.length})),i=(0,r.P1)(o,(function(e){return e.filter((function(e){return e.isChecked}))})),c=(0,r.P1)(i,(function(e){return e.length}))},1788:(e,t,n)=>{n.d(t,{Ds:()=>r,th:()=>a,r8:()=>o});var r=function(e,t){void 0===t&&(t=250);var n=Date.now();return function(){var r=Date.now();r-n>t&&(n=r,e())}},a=new CustomEvent("scrolltabletop"),o=function(){return!1}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0},t=[[3630,514]],r=()=>{};function a(){for(var r,a=0;a<t.length;a++){for(var o=t[a],l=!0,i=1;i<o.length;i++){var c=o[i];0!==e[c]&&(l=!1)}l&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},l=l.slice();for(var e=0;e<l.length;e++)o(l[e]);return(r=a)()};var o=a=>{for(var o,l,[c,u,s,d]=a,m=0,p=[];m<c.length;m++)l=c[m],n.o(e,l)&&e[l]&&p.push(e[l][0]),e[l]=0;for(o in u)n.o(u,o)&&(n.m[o]=u[o]);for(s&&s(n),i(a);p.length;)p.shift()();return d&&t.push.apply(t,d),r()},l=self.webpackChunk=self.webpackChunk||[],i=l.push.bind(l);l.push=o})(),n.x()})();