(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{195:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var c=n(25),r=n.n(c),s=n(1),i=n.n(s),a=n(12),o=n(48),l=n(18),u=n(10),j=n.n(u),d=n(19),b=n(22),h=n.n(b),O=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.abrupt("return",h.a.defaults.headers.common.Authorization=t);case 4:return e.abrupt("return",delete h.a.defaults.headers.common.Authorization);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(29),f="HIDE_MODAL",x="SHOW_MODAL",p=function(){return{type:f}},v=function(e){return{type:x,modal:e}},g="RECEIVE_CURRENT_USER",w="RECEIVE_SESSION_ERRORS",N="RECEIVE_USER_LOGOUT",y=function(e){return{type:g,currentUser:e}},k=function(e){return function(t){return(n=e,h.a.post("/api/users/register",n)).then((function(e){var n=e.data,c=n.token,r=n.refresh_token;localStorage.setItem("access_token",c),localStorage.setItem("refresh_token",r),O(c);var s=Object(m.a)(c);return t(y(s))})).then((function(){return t(p())}));var n}},I=function(e){return function(t){return(n=e,h.a.post("/api/users/login",n)).then((function(e){var n=e.data,c=n.token,r=n.refresh_token;localStorage.setItem("access_token",c),localStorage.setItem("refresh_token",r),O(c);var s=Object(m.a)(c);return t(y(s))})).then((function(){return t(p())}));var n}},E=function(){return function(e){localStorage.removeItem("access_token"),O(!1).then((function(){return e({type:N})}))}},C={isAuthenticated:!1,user:void 0},S=n(8),_=h.a.create({baseURL:"/api"});_.interceptors.request.use((function(e){var t=localStorage.getItem("access_token");return t&&""!==t&&(e.headers.Authorization="Bearer "+t),e})),_.interceptors.response.use((function(e){return e}),function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,!(c=localStorage.getItem("refresh_token"))||401!==t.response.status||n._retry){e.next=5;break}return n._retry=!0,e.abrupt("return",_.post("api/users/refresh",{refreshToken:c}).then((function(e){if(200===e.status)return localStorage.setItem("accessToken",e.data.access_token),_(n)})));case 5:return e.abrupt("return",Promise.reject(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var R="RECEIVE_ALL_ITEMS",L="RECEIVE_ITEM",M="REMOVE_ITEM",U="RECEIVE_ITEM_ERRORS",D=function(e){return{type:L,item:e.data}},A=function(){return function(e){return _.get("/items").then((function(t){return e(function(e){return{type:R,items:e}}(t))}))}},T=function(e){return function(t){return function(e){return _.get("/items/".concat(e))}(e).then((function(e){return t(D(e))}))}},F=function(e){return function(t){return(n=e,_.post("/items/add",n)).then((function(e){return t(D(e))}));var n}},V=n(30),P=n.n(V),z="RECEIVE_ALL_OUTFITS",W="RECEIVE_OUTFIT",X="REMOVE_OUTFIT",$="RECEIVE_OUTFIT_ERRORS",G=function(e){return{type:W,outfit:e}},H=function(){return function(e){return _.get("/outfits").then((function(t){return e((n=t.data,{type:z,outfits:n}));var n}))}},J=function(e){return function(t){return(n=e,_.post("/outfits",n)).then((function(e){return t(G(e.data))}));var n}},B={currentModal:null},Y=Object(l.c)({items:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(t),n.type){case R:return n.items.data;case L:return P()({},t,Object(S.a)({},n.item._id,n.item));case M:return delete(e=P()({},t))[n.itemId],e;default:return t}},outfits:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(t),n.type){case z:return n.outfits;case W:return n.outfit;case X:return delete(e=P()({},t))[n.outfitId],e;default:return t}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case x:return{currentModal:t.modal};case f:return{currentModal:null};default:return e}}}),q=Object(l.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{isAuthenticated:!!t.currentUser,user:t.currentUser};case N:return{isAuthenticated:!1,user:void 0};default:return e}},entities:Y,error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:case U:case w:return t.error;default:return e}}}),Q=n(94),K=(n(189),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[Q.a];return Object(l.d)(q,e,l.a.apply(void 0,Object(o.a)(t)))}),Z=n(4),ee=n(0),te=function(e){var t=e.children;return Object(ee.jsx)("div",{className:"modal-container-background",children:t})},ne="SIGN_UP_MODAL",ce="LOG_IN_MODAL",re="SHOW_ITEM_MODAL",se="NEW_ITEM_MODAL",ie=n(3),ae=n(6),oe=function(e){var t=Object(s.useRef)();Object(s.useEffect)((function(){return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[t]);var n=function(n){t.current.contains(n.target)||e()};return t},le=function(e,t){var n={},c=e.username,r=e.email,s=e.password,i=e.password2;return"signin"!==t&&(0===c.length&&(n.username="username is required"),s!==i&&(n.passwordconfirm="password don't mach")),0===r.length&&(n.email="email is required"),function(e){return/\S+@\S+\.\S+/.test(e)}(r)||(n.email="Invalid email"),s.length<=5&&(n.password="Insecure password"),0===Object.keys(n).length?[!0]:[!1,n]},ue=(n(40),function(e){var t=e.signup,n=e.hideModal,c=Object(s.useState)({username:"",email:"",password:"",password2:""}),r=Object(ae.a)(c,2),i=r[0],a=r[1],o=function(e){return function(t){return a(Object(ie.a)(Object(ie.a)({},i),{},Object(S.a)({},e,t.target.value)))}},l=Object(s.useState)({}),u=Object(ae.a)(l,2),j=u[0],d=u[1],b=function(e){e.preventDefault();var n=le(i,"notsignin");!0===n[0]?t(i):d(Object(ie.a)(Object(ie.a)({},j),n[1]))},h=function(e){return function(t){return d(Object(ie.a)(Object(ie.a)({},j),{},Object(S.a)({},e,void 0)))}},O=oe(n);return Object(ee.jsxs)("div",{className:"form-container",ref:O,children:[Object(ee.jsx)("div",{className:"form-header",children:"Sign Up"}),Object(ee.jsx)("br",{}),Object(ee.jsxs)("form",{onSubmit:b,children:[Object(ee.jsxs)("label",{children:["Username:",Object(ee.jsx)("br",{}),Object(ee.jsx)("input",{type:"text",onChange:o("username"),onClick:h("username")}),j.username&&Object(ee.jsx)("p",{className:"error-message",children:j.username})]}),Object(ee.jsx)("br",{}),Object(ee.jsxs)("label",{children:["Email:",Object(ee.jsx)("br",{}),Object(ee.jsx)("input",{type:"text",onChange:o("email"),onClick:h("email")}),j.email&&Object(ee.jsx)("p",{className:"error-message",children:j.email})]}),Object(ee.jsx)("br",{}),Object(ee.jsxs)("label",{children:["Password:",Object(ee.jsx)("br",{}),Object(ee.jsx)("input",{type:"password",onChange:o("password"),onClick:h("password")}),j.password&&Object(ee.jsx)("p",{className:"error-message",children:j.password})]}),Object(ee.jsx)("br",{}),Object(ee.jsxs)("label",{children:["Re-enter Password:",Object(ee.jsx)("br",{}),Object(ee.jsx)("input",{type:"password",onChange:o("password2"),onClick:h("password2")}),j.password2&&Object(ee.jsx)("p",{className:"error-message",children:j.password2})]}),Object(ee.jsx)("br",{}),Object(ee.jsx)("div",{className:"button-container",children:Object(ee.jsx)("button",{className:"modal-button",onClick:b,children:"Sign Up"})})]})]})}),je=Object(Z.b)(null,(function(e){return{signup:function(t){return e(k(t))},hideModal:function(){return e(p())}}}))(ue),de=function(){var e=Object(d.a)(j.a.mark((function e(t,n){var c,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.length>2&&void 0!==r[2]?r[2]:5,e.abrupt("return",new Promise((function(e,r){var s=setInterval(Object(d.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:if(!n.sent){n.next=7;break}e(),clearInterval(s),n.next=8;break;case 7:c<=1&&(r(),clearInterval(s));case 8:c--;case 9:case"end":return n.stop()}}),n)}))),n)})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),be=function(e){var t=e.login,n=e.hideModal,c=oe(n),r=Object(s.useRef)(null),i=Object(s.useState)({email:"",password:""}),a=Object(ae.a)(i,2),o=a[0],l=a[1],u=Object(s.useState)({}),j=Object(ae.a)(u,2),d=j[0],b=j[1],h=function(e){return function(t){return l(Object(ie.a)(Object(ie.a)({},o),{},Object(S.a)({},e,t.target.value)))}},O=function(e){return function(t){return b(Object(ie.a)(Object(ie.a)({},d),{},Object(S.a)({},e,void 0)))}};return Object(ee.jsxs)("div",{className:"form-container",ref:c,children:[Object(ee.jsx)("div",{className:"form-header",children:"Login"}),Object(ee.jsx)("br",{}),Object(ee.jsxs)("form",{children:[Object(ee.jsxs)("label",{children:["Email:",Object(ee.jsx)("br",{}),Object(ee.jsx)("input",{type:"text",onChange:h("email"),onClick:O("email"),value:o.email}),d.email&&Object(ee.jsx)("p",{className:"error-message",children:d.email})]}),Object(ee.jsx)("br",{}),Object(ee.jsxs)("label",{children:["Password:",Object(ee.jsx)("br",{}),Object(ee.jsx)("input",{type:"password",onChange:h("password"),onClick:O("password"),value:o.password}),d.password&&Object(ee.jsx)("p",{className:"error-message",children:d.password})]}),Object(ee.jsx)("br",{}),Object(ee.jsxs)("div",{className:"button-container",children:[Object(ee.jsx)("button",{className:"modal-button",onClick:function(e){e.preventDefault();var n=le(o,"signin");!0===n[0]?t(o):b(Object(ie.a)(Object(ie.a)({},d),n[1]))},ref:r,children:"Log In"}),Object(ee.jsx)("button",{className:"modal-button",onClick:function(e){e.preventDefault();var t="password123",n="guest@email.com",c=0,s=0;de((function(){return l((function(e){return{email:e.email+n[s],password:e.password}})),++s===n.length}),80,n.length).then((function(){return de((function(){return l((function(e){return{email:e.email,password:e.password+t[c]}})),++c===t.length}),80,t.length)})).then((function(){return r.current.click()}))},children:"Demo Login"})]})]})]})},he=Object(Z.b)(null,(function(e){return{login:function(t){return e(I(t))},hideModal:function(){return e(p())}}}))(be),Oe=n(7),me=Object(Oe.g)((function(e){var t=e.formType,n=e.item,c=e.fetchItem,r=e.match,i=(e.history,e.action),a=e.hideModal,l=oe(a),u=Object(s.useState)({user:"",title:"",image:"",color:"",category:"",imageURL:""}),j=Object(ae.a)(u,2),d=j[0],b=j[1];Object(s.useEffect)((function(){"Update Item"===t&&c(r.params.itemId).then((function(){return b.apply(void 0,Object(o.a)(d))}))}),[]);var h=function(e){return function(t){b(Object(ie.a)(Object(ie.a)({},d),{},Object(S.a)({},e,t.currentTarget.value)))}};return Object(ee.jsx)("div",{className:"new-form-container",ref:l,children:Object(ee.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("title",d.title),d.image&&t.append("image",d.image),d.imageURL&&t.append("imageURL",d.imageURL),t.append("category",d.category),t.append("color",d.color),i(t,n&&n._id).then((function(){return a()}))},children:[Object(ee.jsxs)("div",{className:"form-image",children:[Object(ee.jsx)("img",{className:"track-img-preview",src:d.prevImgURL}),Object(ee.jsx)("input",{type:"file",onChange:function(e){var t=e.currentTarget.files[0],n=new FileReader;n.onloadend=function(){b(Object(ie.a)(Object(ie.a)({},d),{},{image:t,prevImgURL:n.result}))},t&&n.readAsDataURL(t)}})]}),Object(ee.jsxs)("div",{className:"form-fields",children:[Object(ee.jsxs)("label",{children:["Item Name: ",Object(ee.jsx)("br",{}),Object(ee.jsx)("input",{type:"text",value:d.title,onChange:h("title")})]}),Object(ee.jsxs)("select",{onChange:h("category"),value:d.category,children:[Object(ee.jsx)("option",{children:"category"}),Object(ee.jsx)("option",{value:"coat",children:"coat"}),Object(ee.jsx)("option",{value:"jacket",children:"jacket"}),Object(ee.jsx)("option",{value:"blazer",children:"blazer"}),Object(ee.jsx)("option",{value:"vest",children:"vest"}),Object(ee.jsx)("option",{value:"dress",children:"dress"}),Object(ee.jsx)("option",{value:"jumpsuit",children:"jumpsuit"}),Object(ee.jsx)("option",{value:"shirt/blouse",children:"shirt/blouse"}),Object(ee.jsx)("option",{value:"t-shirt",children:"t-shirt"}),Object(ee.jsx)("option",{value:"tank top",children:"tank top"}),Object(ee.jsx)("option",{value:"bodysuit",children:"bodysuit"}),Object(ee.jsx)("option",{value:"sweatshirt",children:"sweatshirt"}),Object(ee.jsx)("option",{value:"sweater",children:"sweater"}),Object(ee.jsx)("option",{value:"cardigan",children:"cardigan"}),Object(ee.jsx)("option",{value:"pants",children:"pants"}),Object(ee.jsx)("option",{value:"jeans",children:"jeans"}),Object(ee.jsx)("option",{value:"leggings",children:"leggings"}),Object(ee.jsx)("option",{value:"shorts",children:"shorts"}),Object(ee.jsx)("option",{value:"skirt",children:"skirt"}),Object(ee.jsx)("option",{value:"shoes",children:"shoes"}),Object(ee.jsx)("option",{value:"bag",children:"bag"}),Object(ee.jsx)("option",{value:"accessory",children:"accessory"}),Object(ee.jsx)("option",{value:"etc",children:"etc"})]}),Object(ee.jsxs)("select",{onChange:h("color"),value:d.color,children:[Object(ee.jsx)("option",{children:"color"}),Object(ee.jsx)("option",{value:"black",children:"black"}),Object(ee.jsx)("option",{value:"grey",children:"grey"}),Object(ee.jsx)("option",{value:"white",children:"white"}),Object(ee.jsx)("option",{value:"beige",children:"beige"}),Object(ee.jsx)("option",{value:"brown",children:"brown"}),Object(ee.jsx)("option",{value:"metallic",children:"metallic"}),Object(ee.jsx)("option",{value:"purple",children:"purple"}),Object(ee.jsx)("option",{value:"blue",children:"blue"}),Object(ee.jsx)("option",{value:"green",children:"green"}),Object(ee.jsx)("option",{value:"yellow",children:"yellow"}),Object(ee.jsx)("option",{value:"orange",children:"orange"}),Object(ee.jsx)("option",{value:"pink",children:"pink"}),Object(ee.jsx)("option",{value:"off-white",children:"off-white"}),Object(ee.jsx)("option",{value:"red",children:"red"}),Object(ee.jsx)("option",{value:"neon",children:"neon"}),Object(ee.jsx)("option",{value:"etc",children:"etc"})]}),Object(ee.jsx)("input",{type:"submit",value:t})]})]})})})),fe=Object(Z.b)((function(e,t){return{currentUser:e.session.user.currentUser,item:null,formType:"Create Item",match:t.match,history:t.history}}),(function(e){return{action:function(t){return e(F(t))},fetchItem:function(t){return e(T(t))},hideModal:function(){return e(p())}}}))(me),xe=(n(195),Object(Z.b)((function(e,t){return{item:e.entities.items[t.itemId]}}),(function(e){return{fetchItem:function(t){return e(T(t))}}}))((function(e){var t=e.fetchItem,n=e.itemId,c=e.item;e.hideModal;return Object(s.useEffect)((function(){n&&t(n)}),[]),c?Object(ee.jsx)("div",{className:"show-item-container",children:Object(ee.jsxs)("div",{className:"show-item-contents",children:[Object(ee.jsx)("div",{children:c.title}),Object(ee.jsx)("img",{src:c.imageURL,id:"show-image",alt:"item id: ".concat(c._id)})]})}):null}))),pe=(n(196),Object(Z.b)((function(e){return{whichModal:e.entities.modal.currentModal}}),(function(e){return{hideModal:function(){return e(p())}}}))((function(e){var t=e.whichModal,n=Object(s.useMemo)((function(){return function(e){var t="";switch(e){case ne:t=je;break;case ce:t=he;break;case se:t=fe;break;case re:t=xe;break;default:t=null}return t}(t)}),[t]);return t?Object(ee.jsx)(te,{children:Object(ee.jsx)(n,{})}):null}))),ve=n(98),ge=function(e){return{loggedIn:e.session.isAuthenticated}},we=Object(Oe.g)(Object(Z.b)(ge)((function(e){var t=e.component,n=e.path,c=e.loggedIn,r=e.exact;return Object(ee.jsx)(Oe.b,{path:n,exact:r,render:function(e){return c?Object(ee.jsx)(Oe.a,{to:"/dashboard"}):Object(ee.jsx)(t,Object(ie.a)({},e))}})}))),Ne=Object(Oe.g)(Object(Z.b)(ge)((function(e){var t=e.component,n=e.loggedIn,c=Object(ve.a)(e,["component","loggedIn"]);return Object(ee.jsx)(Oe.b,Object(ie.a)(Object(ie.a)({},c),{},{render:function(e){return n?Object(ee.jsx)(t,Object(ie.a)({},e)):Object(ee.jsx)(Oe.a,{to:"/"})}}))}))),ye=n(59),ke=(n(197),n(198),Object(Z.b)(null,(function(e){return{showModal:function(t){return e(v(t))}}}))((function(e){var t=e.showModal;return Object(ee.jsx)("div",{className:"main-page-container",children:Object(ee.jsxs)("div",{id:"page-wrapper",children:[Object(ee.jsx)("section",{id:"header",children:Object(ee.jsxs)("div",{className:"container",children:[Object(ee.jsx)("h1",{id:"logo",children:Object(ee.jsx)("div",{children:"Closet X"})}),Object(ee.jsx)("p",{children:"An interactive and responsive online closet. Create and share outfits with your friends."}),Object(ee.jsx)("nav",{id:"nav",children:Object(ee.jsxs)("ul",{children:[Object(ee.jsx)("li",{children:Object(ee.jsx)("div",{children:Object(ee.jsx)("button",{onClick:function(){return t(ce)},children:"Login"})})}),Object(ee.jsx)("li",{children:Object(ee.jsx)("div",{children:Object(ee.jsx)("button",{onClick:function(){return t(ne)},children:"Signup"})})})]})})]})}),Object(ee.jsx)("section",{id:"banner",children:Object(ee.jsx)("div",{className:"container",children:Object(ee.jsxs)("p",{children:['"Gosh, I ',Object(ee.jsx)("strong",{children:"never"})," know what to wear.",Object(ee.jsx)("br",{}),"Oh wait, I can just go on ",Object(ee.jsx)("strong",{children:"Closet X"}),'!"']})})}),Object(ee.jsx)("section",{id:"features",children:Object(ee.jsxs)("div",{className:"container",children:[Object(ee.jsx)("header",{children:Object(ee.jsxs)("h2",{children:["Behold! This is ",Object(ee.jsx)("strong",{children:"Closet X"}),"!"]})}),Object(ee.jsxs)("div",{className:"row aln-center",children:[Object(ee.jsx)("div",{className:"col-4 col-6-medium col-12-small",children:Object(ee.jsxs)("section",{children:[Object(ee.jsx)("div",{className:"image featured",children:Object(ee.jsx)("img",{src:"images/splash-1.jpg",alt:""})}),Object(ee.jsx)("header",{children:Object(ee.jsx)("h3",{children:"Okay, so what is this?"})}),Object(ee.jsxs)("p",{children:["This is ",Object(ee.jsx)("strong",{children:"Closet X"}),", a free, fully responsive site catered to your digital closet needs."]})]})}),Object(ee.jsx)("div",{className:"col-4 col-6-medium col-12-small",children:Object(ee.jsxs)("section",{children:[Object(ee.jsx)("div",{className:"image featured",children:Object(ee.jsx)("img",{src:"images/splash-2.jpg",alt:""})}),Object(ee.jsx)("header",{children:Object(ee.jsx)("h3",{children:"Nice! What's the point?"})}),Object(ee.jsx)("p",{children:"Create and share outfits from your closet with your friends! If you run out of outfit ideas, you can have your friends or strangers suggest outfits for you based on your closet!"})]})}),Object(ee.jsx)("div",{className:"col-4 col-6-medium col-12-small",children:Object(ee.jsxs)("section",{children:[Object(ee.jsx)("div",{className:"image featured",children:Object(ee.jsx)("img",{src:"images/splash-3.jpg",alt:""})}),Object(ee.jsx)("header",{children:Object(ee.jsx)("h3",{children:"What's this built with?"})}),Object(ee.jsxs)("p",{children:[Object(ee.jsx)("strong",{children:"Responsive Tools"})," is a simple set of tools for building responsive sites and apps. We also use",Object(ee.jsx)("strong",{children:"MongoDB, Express JS, React JS, and Node JS!"})]})]})}),Object(ee.jsx)("div",{className:"col-12",children:Object(ee.jsx)("ul",{className:"actions",children:Object(ee.jsx)("li",{children:Object(ee.jsx)("div",{onClick:function(){return t(ne)},className:"button icon solid fa-sitemap",children:"Signup Today!"})})})})]})]})}),Object(ee.jsx)("section",{id:"features",children:Object(ee.jsxs)("div",{className:"container",children:[Object(ee.jsxs)("header",{children:[Object(ee.jsx)("h2",{children:"Still not convinced?"}),Object(ee.jsx)("h3",{children:"Here are some outfits created by our users!"})]}),Object(ee.jsxs)("div",{className:"row aln-center",children:[Object(ee.jsx)("div",{className:"col-4 col-6-medium col-12-small",children:Object(ee.jsxs)("section",{children:[Object(ee.jsx)("div",{className:"image featured",children:Object(ee.jsx)("img",{src:"/images/splash-4.jpg",alt:""})}),Object(ee.jsx)("header",{children:Object(ee.jsx)("h3",{children:Object(ee.jsx)("strong",{children:"@ILoveFendi"})})}),Object(ee.jsx)("p",{children:"Classy New York City Look."})]})}),Object(ee.jsx)("div",{className:"col-4 col-6-medium col-12-small",children:Object(ee.jsxs)("section",{children:[Object(ee.jsx)("div",{className:"image featured",children:Object(ee.jsx)("img",{src:"images/splash-5.jpg",alt:""})}),Object(ee.jsx)("header",{children:Object(ee.jsx)("h3",{children:Object(ee.jsx)("strong",{children:"@SupremeRUS"})})}),Object(ee.jsx)("p",{children:"Perfect for a day in Los Angeles."})]})}),Object(ee.jsx)("div",{className:"col-4 col-6-medium col-12-small",children:Object(ee.jsxs)("section",{children:[Object(ee.jsx)("div",{className:"image featured",children:Object(ee.jsx)("img",{src:"images/splash-6.jpg",alt:""})}),Object(ee.jsx)("header",{children:Object(ee.jsx)("h3",{children:Object(ee.jsx)("strong",{children:"@Pallette"})})}),Object(ee.jsx)("p",{children:"Fun summer dress with accessories!"})]})}),Object(ee.jsx)("div",{className:"col-12",children:Object(ee.jsx)("ul",{className:"actions",children:Object(ee.jsx)("li",{children:Object(ee.jsx)("div",{onClick:function(){return t(ce)},className:"button icon solid fa-sitemap",children:"Signup Today!"})})})})]})]})}),Object(ee.jsxs)("section",{id:"footer",children:[Object(ee.jsxs)("div",{className:"container",children:[Object(ee.jsx)("header",{children:Object(ee.jsxs)("h2",{children:["Questions or comments? ",Object(ee.jsx)("strong",{children:"Get in touch:"})]})}),Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsx)("div",{className:"col-6 col-12-medium",children:Object(ee.jsx)("section",{children:Object(ee.jsx)("form",{method:"post",action:"#",children:Object(ee.jsxs)("div",{className:"row gtr-50",children:[Object(ee.jsx)("div",{className:"col-6 col-12-small",children:Object(ee.jsx)("input",{name:"name",placeholder:"Name",type:"text"})}),Object(ee.jsx)("div",{className:"col-6 col-12-small",children:Object(ee.jsx)("input",{name:"email",placeholder:"Email",type:"text"})}),Object(ee.jsx)("div",{className:"col-12",children:Object(ee.jsx)("textarea",{name:"message",placeholder:"Message"})}),Object(ee.jsx)("div",{className:"col-12",children:Object(ee.jsx)("a",{href:"mailto: closet-x@gmail.com",className:"form-button-submit button icon solid fa-envelope",children:"Send Message"})})]})})})}),Object(ee.jsx)("div",{className:"col-6 col-12-medium",children:Object(ee.jsx)("section",{children:Object(ee.jsx)("p",{children:"We here at Closet X are always looking for feedback. If you have any suggestions on making the site better or just want to say hi, leave us a message here! We are a small team of 3 looking to make a change in the social media fashion industry! Additionally, our LinkedIns and GitHubs are below if you're looking to hire one of us."})})})]})]}),Object(ee.jsx)("div",{id:"copyright",className:"container",children:Object(ee.jsx)("ul",{className:"links",children:Object(ee.jsx)("li",{children:"\xa9 ClosetX. All rights reserved."})})})]})]})})}))),Ie=n(218),Ee=function(e){var t=e.item,n=e.translateDelta,c=t._id,r=t.imageURL,s=Object(Ie.a)((function(){return{type:"Image",item:{_id:c,imageURL:r},collect:function(e){return{isDragging:e.isDragging()}}}}),[c,r]),i=Object(ae.a)(s,3),a=(i[0].isDragging,i[1]);i[2];return Object(ee.jsxs)("div",{className:"outfit-item-vert",style:{transform:"translateY(".concat(n,"%)")},children:[Object(ee.jsx)("div",{children:"Title"}),Object(ee.jsx)("div",{className:"outfit-item-img-div",ref:a,children:Object(ee.jsx)("img",{crossOrigin:"Anonymous",className:"item-img",src:"".concat(r,"?liuahvanb"),alt:""})})]})},Ce=(n(41),Object(Z.b)((function(e){var t=e.session.user.id,n=e.entities.items;return{userId:t,items:Object.values(n)}}),(function(e){return{fetchAllItems:function(t){return e(A())}}}))((function(e){var t=e.fetchAllItems,n=e.userId,c=e.items,r=Object(s.useState)({translateDelta:0,delta:300,itemsLeft:0}),i=Object(ae.a)(r,2),a=i[0],o=i[1],l=Object(s.useRef)(!0);Object(s.useEffect)((function(){l.current&&t(n).then((function(){return o(Object(ie.a)(Object(ie.a)({},a),{},{itemsLeft:c.length-3}))})).then((function(){return l.current=!1}))}),[]);var u=function(e){var t=a.translateDelta,n=a.delta,c=a.itemsLeft;"prev"===e&&t+n<=0?o(Object(ie.a)(Object(ie.a)({},a),{},{translateDelta:t+n,itemsLeft:c+3})):"next"===e&&c>=0&&o(Object(ie.a)(Object(ie.a)({},a),{},{translateDelta:t-n,itemsLeft:c-3}))};if(!c)return null;var j=c.map((function(e){return Object(ee.jsx)(Ee,{item:e,translateDelta:a.translateDelta},e._id.$oid)}));return Object(ee.jsxs)("div",{className:"outfit-item-slider",children:[Object(ee.jsx)("div",{className:"item-scroll-header",children:"Items"}),Object(ee.jsx)("div",{className:"item-slide-index",children:j}),Object(ee.jsxs)("div",{className:"dashboard-buttons-vert",children:[Object(ee.jsx)("button",{onClick:function(){return u("prev")},children:"\u2227"}),Object(ee.jsx)("button",{onClick:function(){return u("next")},children:"\u2228"})]})]})}))),Se=(n(199),Object(Oe.g)(Object(Z.b)((function(e,t){return{match:t.match}}),(function(e){return{logout:function(){return e(E())},showModal:function(t){return e(v(t))}}}))((function(e){var t=e.match,n=e.showModal;return Object(ee.jsxs)("div",{className:"nav-bar",children:[Object(ee.jsx)("div",{className:"nav-bar-logo"}),Object(ee.jsxs)("div",{className:"nav-bar-item-container",children:[Object(ee.jsx)("div",{className:"menu-option",children:Object(ee.jsx)(a.b,{to:"/dashboard",children:"Dashboard"})}),Object(ee.jsx)("div",{className:"menu-option",children:Object(ee.jsx)(a.b,{to:"/closet",children:"Your closet"})}),"closet"===t.params[0]||"outfits"===t.params[0]?Object(ee.jsx)("div",{className:"sub-menu",onClick:function(){return n(se)},children:" \xa0 - \xa0 Add Item"}):null,"closet"===t.params[0]||"outfits"===t.params[0]?Object(ee.jsx)("div",{className:"sub-menu",children:Object(ee.jsx)(a.b,{to:"/outfits/new",children:" \xa0 - \xa0 Add Outfit"})}):null]})]})})))),_e=(n(200),function(e){var t=e.logout,n=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:window.location.href="/";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(ee.jsxs)("div",{className:"user-banner",children:[Object(ee.jsx)("div",{children:"CLOSET-X"}),Object(ee.jsx)("div",{className:"banner-sign-out",onClick:n,children:"sign out"})]})}),Re=Object(Z.b)(null,(function(e){return{logout:function(){return e(E())}}}))(_e),Le=Object(Oe.g)((function(e){var t=e.outfit,n=e.translateDelta,c=t.imageURL,r=t.title,s=t.username;return Object(ee.jsxs)("div",{className:"outfit-item",style:{transform:"translateX(".concat(n,"%)")},children:[Object(ee.jsx)("div",{className:"outfit-img-div",children:Object(ee.jsx)("img",{className:"outfit-img",src:c,alt:""})}),Object(ee.jsxs)("div",{children:["Title: ",r]}),Object(ee.jsxs)("div",{children:["Username: ",s]})]})})),Me=Object(Z.b)((function(e){e.state,e.ownProps;return{}}),(function(e){return{}}))(Le),Ue=(n(201),Object(Oe.g)((function(e){var t=e.items,n=Object(s.useState)(0),c=Object(ae.a)(n,2),r=c[0],i=c[1],a=Object(s.useState)(0),o=Object(ae.a)(a,2),l=o[0],u=o[1];Object(s.useEffect)((function(){t&&u(t.length-3)}),[]);var j=function(e){"prev"===e&&r+300<=0?(i(r+300),u(l+3)):"next"===e&&l>0&&(i(r-300),u(l-3))},d=t.map((function(e){return Object(ee.jsx)(Me,{outfit:e,translateDelta:r},e._id)}));return Object(ee.jsxs)("div",{className:"img-slider",children:[Object(ee.jsx)("div",{className:"outfit-index",children:d}),Object(ee.jsxs)("div",{className:"dashboard-buttons",children:[Object(ee.jsx)("button",{onClick:function(){return j("prev")},children:"<<<"}),Object(ee.jsx)("button",{onClick:function(){return j("next")},children:">>>"})]})]})}))),De=(n(202),Object(Z.b)((function(e){return{outfits:e.entities.outfits}}),(function(e){return{logout:function(){return e(E())},fetchAllOutfits:function(){return e(H())}}}))((function(e){var t=e.fetchAllOutfits,n=e.outfits,c=Object(s.useState)(!1),r=Object(ae.a)(c,2),i=r[0],a=r[1];return Object(s.useEffect)((function(){t().then((function(){return a(!0)}))}),[]),i?Object(ee.jsxs)("div",{className:"dashboard",children:[Object(ee.jsx)("h1",{children:"Trending"}),Object(ee.jsx)(Ue,{items:n}),Object(ee.jsx)("h1",{children:"Friends"}),Object(ee.jsx)(Ue,{items:n})]}):null}))),Ae=n(50),Te=n.n(Ae),Fe=n(219),Ve=n(96),Pe=n(47),ze=n.n(Pe),We=n(97),Xe=n.n(We),$e=(n(207),function(e){var t=e.imageURL;return Object(ee.jsx)(Xe.a,{children:Object(ee.jsx)("img",{crossOrigin:"Anonymous",className:"drag-wrapper",src:t,alt:""})})}),Ge=Object(Oe.g)(Object(Z.b)((function(e){return{user:e.session.user.id}}),(function(e){return{createOutfit:function(t){return e(J(t))}}}))((function(e){var t=e.createOutfit,n=e.history,c=Object(s.useState)(""),r=Object(ae.a)(c,2),i=r[0],a=r[1],o=Object(s.createRef)(null),l=Object(Ve.a)(),u=Object(ae.a)(l,2),j=(u[0],u[1],Object(s.useState)({})),d=Object(ae.a)(j,2),b=d[0],h=d[1],O=Object(s.useCallback)((function(e,t,n){h(Te()(b,Object(S.a)({},e,{$merge:{left:t,top:n}})))}),[b]),m=function(e){if(!e)throw new Error("You should provide correct html node.");return ze()(e.current,{useCORS:!0}).then((function(e){var t=document.createElement("canvas"),n=t.getContext("2d"),c=e.width,r=e.height;return t.width=c,t.height=r,n.drawImage(e,0,0),t.toDataURL()}))},f=Object(Fe.a)((function(){return{accept:"Image",drop:function(e,t){var n=t.getDifferenceFromInitialOffset(),c=t.getInitialClientOffset(),r=Math.round((e.left||c.x)+n.x),s=Math.round((e.top||c.y)+n.y);if(void 0===b[e._id.$oid]){var i=Te()(b,{$merge:Object(S.a)({},e._id.$oid,e)});h(Te()(i,Object(S.a)({},e._id.$oid,{$merge:{left:r,top:s}})))}else O(e._id,r,s)}}}),[O]),x=Object(ae.a)(f,2)[1],p=Object.keys(b).length>0?Object.keys(b).map((function(e){return Object(ee.jsx)($e,Object(ie.a)({},b[e]),e)})):Object(ee.jsx)(ee.Fragment,{});return Object(ee.jsxs)("div",{className:"canvas-container",children:[Object(ee.jsx)("div",{ref:x,className:"canvas",children:Object(ee.jsx)("div",{ref:o,className:"capture",children:p})}),Object(ee.jsxs)("div",{className:"outfit-create-options",children:[Object(ee.jsx)("input",{type:"text",value:i,onChange:function(e){a(e.currentTarget.value)},placeholder:"Outfit Title..."}),Object(ee.jsxs)("div",{className:"outfit-button-container",children:[Object(ee.jsx)("button",{onClick:function(e){e.preventDefault(),h({}),a("")},children:"Clear"}),Object(ee.jsx)("button",{onClick:function(e){e.preventDefault(),m(o).then((function(e){var n=new FormData;return n.append("title",i),n.append("file",e),t(n)})).then((function(e){return n.push("/")}))},children:"Save"})]})]})]})}))),He=function(){return Object(ee.jsxs)("div",{className:"outfit-create-container",children:[Object(ee.jsx)(Ge,{}),Object(ee.jsx)("div",{className:"outfit-items-scrollbar",children:Object(ee.jsx)(Ce,{})})]})},Je=function(e){var t=e.item;e.itemShowModal;return Object(ee.jsx)("div",{className:"item-index-item-container",children:Object(ee.jsx)("img",{className:"item-index-item",src:t.imageURL,alt:"item: ".concat(t._id)})})},Be=(n(208),Object(Z.b)((function(e,t){var n=e.session.user.id,c=e.entities.items;return{userId:n,items:Object.values(c)}}),(function(e){return{fetchAllItems:function(t){return e(A())},showModal:function(t){return e(v(t))}}}))((function(e){var t=e.fetchAllItems,n=e.items,c=e.userId,r=e.showModal,i=Object(s.useState)(null),a=Object(ae.a)(i,2);a[0],a[1];Object(s.useEffect)((function(){t(c)}),[]);var o=n.map((function(e){return Object(ee.jsx)(Je,{itemShowModal:function(){return r(re)},item:e},e._id)}));return Object(ee.jsx)("div",{className:"item-index-container",children:0===n.length?Object(ee.jsx)("button",{onClick:function(){return r(se)},children:"Add Item"}):Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)("div",{className:"item-index-items-container",children:o})})})}))),Ye=(n(209),function(){return Object(ee.jsxs)("div",{className:"user-view",children:[Object(ee.jsx)(Re,{}),Object(ee.jsxs)("div",{className:"user-body",children:[Object(ee.jsx)(Se,{}),Object(ee.jsxs)(Oe.d,{children:[Object(ee.jsx)(Oe.b,{path:"/dashboard",component:De}),Object(ee.jsx)(Oe.b,{path:"/closet",component:Be}),Object(ee.jsx)(Oe.b,{path:"/outfits/new",component:He})]})]})]})}),qe=n(217);n(210);var Qe,Ke=function(){return Object(ee.jsxs)("div",{className:"App",children:[Object(ee.jsx)(pe,{}),Object(ee.jsx)(Oe.d,{children:Object(ee.jsxs)(qe.a,{backend:ye.a,children:[Object(ee.jsx)(Oe.b,{path:"/(dashboard|closet|outfits|upload|itemindex)",component:Ye}),Object(ee.jsx)(Ne,{path:"/items",component:Ce}),Object(ee.jsx)(we,{exact:!0,path:"/",component:ke}),Object(ee.jsx)(Oe.a,{from:"/",to:"/"})]})})]})};n(211);if(localStorage.access_token){O(localStorage.access_token);var Ze=Object(m.a)(localStorage.access_token);Qe=K({session:{isAuthenticated:!0,user:Ze}});var et=Date.now()/1e3;Ze.exp<et&&(Qe.dispatch(E()),window.location.href="/")}else Qe=K({});r.a.render(Object(ee.jsx)(i.a.StrictMode,{children:Object(ee.jsx)(Z.a,{store:Qe,children:Object(ee.jsx)(a.a,{children:Object(ee.jsx)(Ke,{})})})}),document.getElementById("root"))},40:function(e,t,n){},41:function(e,t,n){}},[[212,1,2]]]);
//# sourceMappingURL=main.98b7289b.chunk.js.map