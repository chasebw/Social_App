(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r,a,c,s,o,i,l,u,d=n(0),j=n.n(d),p=n(30),b=n.n(p),h=(n(68),n(12)),x=(n(69),n(13)),O=n(7),f=n(6),g=n.n(f),m=n(9),v=n(34),w=n(14),y=x.a.div(r||(r=Object(h.a)(["\nwidth:100%;\ndisplay: flex;\nalign-items:center;\nflex-direction: column;\nmargin-top: 10px;\n"]))),P=x.a.form(a||(a=Object(h.a)(["\nwidth:100%;\ndisplay: flex;\nflex-direction:column;\n"]))),S=x.a.a(c||(c=Object(h.a)(["\nfont-size: 11px;\ncolor: rgba(200, 200, 200, 200, 0.8);\nfont-weight: 400;\ntext-decoration: none;\nmargin:auto;\n"]))),C=x.a.a(s||(s=Object(h.a)(["\nfont-size: 13px;\ncolor: rgba(200, 200, 200, 200, 0.8);\nfont-weight: 800;\ntext-decoration: none;\nmargin: 0 4px;\n"]))),k=x.a.input(o||(o=Object(h.a)(["\nheight: 42px;\nwidth: 100%;\noutline: none;\nborder: 1px solid rgba(200, 200, 200, 0.95);\npadding: 0px 10px;\nborder-radius: 100px 100px 100px 100px;\nmargin: 5px; \nfont-size:16px;\n\n&::placeholder {\n    color: rgba(200, 200, 200, 1);\n}\n\n&:not(:last-of-type) {\n    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);\n}\n\n&:focus {\n    outline:none;\n    border: 1px solid rgba(2,0,244);\n}\n"]))),N=x.a.button(i||(i=Object(h.a)(["\nwidth: 100%;\npadding: 14px 35%;\ncolor: #fff;\nfont-size: 18px;\nfont-weight: 600;\nborder: none;\nborder-radius: 400px 400px 400px 400px;\ncursor: pointer;\ntransition: all, 240ms ease-in-out;\nbackground: rgb(2,0,36);\nbackground: linear-gradient(\n    90deg,\n    rgba(9,9,121,1) 0%,\n    rgba(9,100,200,1) 65%,\n    rgba(0,212,255,1) 100%\n    );\n\n    &:hover {\n        filter: brightness(1.09);\n        background: rgb(2,0,36);\n        background: linear-gradient(\n    90deg,\n    rgba(9,9,90,1) 0%,\n    rgba(9,60,180,1) 55%,\n    rgba(0,212,200,1) 100%\n    );\n    }\n"]))),T=n(1),M=x.a.span(l||(l=Object(h.a)(["\n  display: flex;\n  width: ",";\n"])),(function(e){var t=e.margin;return"string"===typeof t?t:"".concat(t,"px")})),I=x.a.span(u||(u=Object(h.a)(["\n  display: flex;\n  height: ",";\n"])),(function(e){var t=e.margin;return"string"===typeof t?t:"".concat(t,"px")}));function _(e){return"horizontal"===e.direction?Object(T.jsx)(M,Object(w.a)({},e)):Object(T.jsx)(I,Object(w.a)({},e))}_.defaultProps={direction:"horizontal"};var F=Object(d.createContext)(),A=n(11);function E(e){var t=Object(d.useContext)(F).switchToSignup,n=Object(d.useState)(""),r=Object(O.a)(n,2),a=r[0],c=r[1],s=Object(A.f)(),o={username:"",password:""},i=Object(d.useState)(o),l=Object(O.a)(i,2),u=l[0],j=l[1],p=function(e){j(Object(w.a)(Object(w.a)({},u),{},Object(v.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(m.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Form is being submit"),e.next=4,h();case 4:n=e.sent,console.log(n),j(o),n.success?(s.push("/home"),j(o),c("")):(console.log("Unsuccessful Login"),c(n.message),j(Object(w.a)(Object(w.a)({},u),{},{password:""})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Running login request"),e.prev=1,e.next=4,fetch("".concat("http://localhost:5000/","login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:u.username,password:u.password})});case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,console.log(n),e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{success:!1,action:"Login"});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(T.jsx)(y,{children:Object(T.jsxs)(P,{action:"/login",method:"POST",onSubmit:function(e){return b(e)},children:[a?Object(T.jsx)("p",{class:"error_class",children:a}):"",Object(T.jsx)(k,{type:"text",placeholder:"Username",name:"username",value:u.username,onChange:function(e){return p(e)}}),Object(T.jsx)(k,{type:"password",placeholder:"Password",name:"password",value:u.password,onChange:function(e){return p(e)}}),Object(T.jsx)(_,{direction:"vertical",margin:11}),Object(T.jsx)(S,{href:"#",children:"Forget your password?"}),Object(T.jsx)(_,{direction:"vertical",margin:"1.6em"}),Object(T.jsx)(N,{type:"submit",children:"Login"}),Object(T.jsx)(_,{direction:"vertical",margin:"1em"}),Object(T.jsxs)(S,{children:["Don't have an account? ",Object(T.jsx)(C,{href:"#",onClick:t,children:"Signup"})]})]})})}var L,D,H,J,G,U,R,z=n(92);function B(e){var t=Object(d.useContext)(F).switchToSignin,n={username:"",email:"",password:"",confirmPassword:""},r=Object(d.useState)(n),a=Object(O.a)(r,2),c=a[0],s=a[1],o=Object(d.useState)(""),i=Object(O.a)(o,2),l=i[0],u=i[1],j=Object(d.useState)([]),p=Object(O.a)(j,2),b=p[0],h=p[1],x=function(e){s(Object(w.a)(Object(w.a)({},c),{},Object(v.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(m.a)(g.a.mark((function e(r){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),console.log("Running Signup"),e.next=4,M();case 4:a=e.sent,console.log("Result Signup: ".concat(a)),a.success?(t(),s(n)):(console.log("Error On signup"),u(a.message),s(Object(w.a)(Object(w.a)({},c),{},{password:"",confirmPassword:""})),h(a.errors));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(m.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Running SignUp request"),e.prev=1,e.next=4,fetch("".concat("http://localhost:5000/","signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:c.username,email:c.email,password:c.password,confirmPassword:c.confirmPassword})});case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,console.log(n),console.log("Signup Success"),e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(T.jsx)(y,{children:Object(T.jsxs)(P,{onSubmit:function(e){return f(e)},children:[l?Object(T.jsx)("p",{className:"error_class",children:l}):"",Object(T.jsx)(k,{type:"text",placeholder:"Username",value:c.username,className:b.find((function(e){return"username"===e.param}))?"invalid":"",onChange:function(e){return x(e)},name:"username"}),Object(T.jsx)(k,{type:"text",placeholder:"Email",value:c.email,className:b.find((function(e){return"email"===e.param}))?"invalid":"",onChange:function(e){return x(e)},name:"email"}),Object(T.jsx)(k,{type:"password",placeholder:"Password",value:c.password,className:b.find((function(e){return"password"===e.param}))?"invalid":"",onChange:function(e){return x(e)},name:"password"}),Object(T.jsx)(k,{type:"password",placeholder:"Confirm Password",value:c.confirmPassword,className:b.find((function(e){return"confirmPassword"===e.param}))?"invalid":"",onChange:function(e){return x(e)},name:"confirmPassword"}),Object(T.jsx)(_,{direction:"vertical",margin:11}),Object(T.jsx)(N,{type:"submit",children:"Signup"}),Object(T.jsx)(_,{direction:"vertical",margin:"1em"}),Object(T.jsxs)(S,{children:["Already have an account ",Object(T.jsx)(C,{href:"#",onClick:t,children:"Signin"})]}),Object(T.jsx)(_,{direction:"vertical",margin:"1em"})]})})}var q=x.a.div(L||(L=Object(h.a)(["\nwidth: 320px;\nmin-height: 550px;\ndisplay: flex;\nflex-direction: column;\nborder-radius: 19px;\nbackground-color: #fff;\nbox-shadow: 0 0 2px rgba(15, 15, 15, 0.28);\nposition: relative;\noverflow: hidden; \n"]))),W=x.a.div(D||(D=Object(h.a)(["\nwidth: 100%;\nheight: 250px;\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-end;\npadding: 0 1.8em;\npadding-bottom: 5em;\n"]))),V=Object(x.a)(z.a.div)(H||(H=Object(h.a)(["\nwidth: 160%;\nheight: 515px;\nposition: absolute;\ndisplay: flex;\nflex-direction: column;\nborder-radius: 40%;\ntransform: rotate(70deg);\ntop: -290px;\nleft: -70px;\nbackground: rgb(2,0,36);\nbackground: linear-gradient(\n    58deg,\n    rgba(2,0,36,1) 0%,\n    rgba(9,9,121,1) 35%,\n    rgba(0,212,255,1) 100%\n    );\n"]))),Y=x.a.div(J||(J=Object(h.a)(["\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\n"]))),K=x.a.h2(G||(G=Object(h.a)(["\nfont-size: 30px;\nfont-weight: 600;\nline-height: 1.24;\ncolor: #fff;\nz-index:10;\n"]))),Q=x.a.h5(U||(U=Object(h.a)(["\ncolor: #fff;\nfont-weight: 500;\nfont-size: 11px;\nz-index:10;\nmargin-top:12px;\nmargin-bottom: 5px;\n"]))),X=x.a.div(R||(R=Object(h.a)(["\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\npadding: 0 1.8em;\n"]))),Z={expanded:{width:"233%",height:"1050px",borderRadius:"20%",transform:"rotate(60deg)"},collapsed:{width:"160%",height:"550px",borderRadius:"50%",transform:"rotate(60deg)"}},$={type:"spring",duration:2.3,stiffness:30};function ee(){var e=j.a.useState(!1),t=Object(O.a)(e,2),n=t[0],r=t[1],a=j.a.useState("signin"),c=Object(O.a)(a,2),s=c[0],o=c[1],i=function(){r(!0),setTimeout((function(){r(!1)}),1e3*$.duration-1500)},l={switchToSignup:function(){i(),setTimeout((function(){o("signup")}),400)},switchToSignin:function(){i(),setTimeout((function(){o("signin")}),400)}};return Object(T.jsx)(F.Provider,{value:l,children:Object(T.jsxs)(q,{children:[Object(T.jsxs)(W,{children:[Object(T.jsx)(V,{initial:!1,animate:n?"expanded":"collapsed",variants:Z,transition:$}),"signin"===s&&Object(T.jsxs)(Y,{children:[Object(T.jsx)(K,{children:"Welcome"}),Object(T.jsx)(K,{children:"Back"}),Object(T.jsx)(Q,{children:"Please Sign-in to continue"})]}),"signup"===s&&Object(T.jsxs)(Y,{children:[Object(T.jsx)(K,{children:"Create"}),Object(T.jsx)(K,{children:"Account"}),Object(T.jsx)(Q,{children:"Please sign-up to continue"})]})]}),Object(T.jsxs)(X,{children:["signin"===s&&Object(T.jsx)(E,{}),"signup"===s&&Object(T.jsx)(B,{})]})]})})}var te,ne=n(96),re=n(95),ae=n(87),ce=n(33),se=["sports","photography","music","skating"],oe=function(e){var t=Object(A.f)(),n=function(){var e=Object(m.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Running Logout"),e.prev=1,e.next=4,fetch("/logout",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({action:"Logging out"})});case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,console.log(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(T.jsxs)(ne.a,{collapseOnSelect:!0,expand:"lg",style:{backgroundColor:"#203f6b"},variant:"dark",className:"text-center",sticky:"top",children:[Object(T.jsxs)(ne.a.Brand,{href:"#home",children:[Object(T.jsx)("img",{src:"/friends_logo2.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})," Buddies & Pals"]}),Object(T.jsx)(ne.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(T.jsxs)(ne.a.Collapse,{id:"responsive-navbar-nav",children:[Object(T.jsxs)(re.a,{className:"mr-auto",children:[Object(T.jsx)(re.a.Link,{children:Object(T.jsx)(ce.b,{to:"/home",children:"Home"})}),se.map((function(e){return Object(T.jsx)(re.a.Link,{children:Object(T.jsx)(ce.b,{to:"/".concat(e),children:e[0].toUpperCase()+e.slice(1)})})}))]}),Object(T.jsxs)(re.a,{children:[Object(T.jsx)(ae.a,{variant:"outline-primary",onClick:function(){return t.push("/profile")},children:"Profile"}),Object(T.jsx)(_,{direction:"horizontal",margin:"1.6em"}),Object(T.jsx)(ae.a,{variant:"outline-danger",onClick:function(){return n(),void t.push("/")},children:"Sign-out"})]})]})]})},ie=n(88),le=n(89),ue=function(e){return Object(T.jsx)(ie.a,{fluid:!0,style:{color:"#203f6b",backgroundColor:"white"},children:Object(T.jsxs)(le.a,{className:"text-center",children:[Object(T.jsxs)("h1",{children:[e.page?e.page[0].toUpperCase()+e.page.slice(1):"Home"," Page"]}),Object(T.jsx)("p",{children:"Welcome!"})]})})},de=function(e){var t=Object(A.f)();return Object(T.jsxs)("article",{className:"card topic-item",children:[Object(T.jsx)("header",{className:"card-header text-center",children:Object(T.jsx)("h1",{children:e.page.name})}),Object(T.jsx)("div",{className:"card-image",children:Object(T.jsx)("img",{src:e.page.image,className:"image-fluid",alt:"someCardImage"})}),Object(T.jsxs)("div",{className:"card-content",children:[Object(T.jsxs)("h2",{className:"topic-likes",children:[e.page.likes," Likes"]}),Object(T.jsxs)("p",{className:"topic-description",children:[" ",e.page.description," "]})]}),Object(T.jsx)("div",{className:"card-actions",children:Object(T.jsx)("button",{className:"btn btn-primary",onClick:function(){return t.push("/".concat(e.page.name.toLowerCase()))},children:" Visit Page"})})]})},je=function(e){return Object(T.jsx)("div",{className:"grid",children:[{name:"Sports",image:"./sports_image.jpg",likes:"12",description:"Page about various athletics."},{name:"Photography",image:"./photography.jpg",likes:"16",description:"Page about insage photography."},{name:"Music",image:"./music.jpg",likes:"8",description:"Page about beauitful sound."},{name:"Skating",image:"./skating.jpg",likes:"21",description:"Page about awesome shredding."}].map((function(e,t){return Object(T.jsx)(de,{page:e})}))})},pe=function(e){return Object(T.jsxs)("div",{children:[Object(T.jsx)(oe,{}),Object(T.jsx)(_,{direction:"vertical",margin:"1.6em"}),Object(T.jsx)(ue,{}),Object(T.jsx)(je,{})]})},be=n(90),he=function(e){return Object(T.jsx)(be.a,{animation:"border",variant:"primary"})},xe=Object(d.createContext)(),Oe={user:{username:"usernamePlaceholder",_id:"placeholderID"},content:"PlaceHolderContent",time:"PlaceHolderTime",_id:"PlaceHolderId"},fe=function(e){var t=Object(d.useState)(Oe),n=Object(O.a)(t,2),r=n[0],a=n[1],c=Object(d.useState)(!0),s=Object(O.a)(c,2),o=s[0],i=s[1],l=Object(d.useState)(!1),u=Object(O.a)(l,2),j=(u[0],u[1],function(){var e=Object(m.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Grabbing Post with id: ".concat(t)),i(!0),e.prev=2,e.next=5,fetch("/posts/".concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},query:JSON.stringify({post_id:t})});case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,console.log(r.post),a(r.post),console.log("Just Set ModalContent"),i(!1),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),console.log("Error retrieving singlePost"),i(!1);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}());return Object(T.jsx)(xe.Provider,{value:{grabSinglePost:function(e){return j(e)},singlePostModal:r,setSinglePostModal:a,postModalIsLoading:o,setPostModalIsLoading:i,handleShowModal:function(e,t){i(!0),t(!0),j(e),i(!1)},handleCloseModal:function(e){a(Oe),e(!1)}},children:e.children})},ge=function(e){var t=Object(d.useContext)(xe).handleShowModal;return Object(T.jsxs)("div",{className:"topic_post row",style:{backgroundColor:"white"},children:[Object(T.jsx)("div",{className:"col-xs-3 post_image",children:Object(T.jsx)("img",{src:e.post.user.profilePicture,style:{maxHeight:"50px",width:"auto"}})}),Object(T.jsx)("div",{class:"post_username",children:e.post.user.username}),Object(T.jsx)("div",{className:"col-xs-3 post_content",children:e.post.content}),Object(T.jsxs)("div",{className:"col-xs-3 post_time",children:["Posted: ",e.post.time,e.post.isUserPost?Object(T.jsxs)("div",{class:"post_button_div",children:[Object(T.jsx)("button",{onClick:function(){return t(e.post._id,e.setEditModalShow)},className:"btn btn-primary post_button",children:"Edit"}),Object(T.jsx)("button",{onClick:function(){return t(e.post._id,e.setDeleteModalShow)},className:"btn btn-danger post_button",children:"Delete"})]}):""]})]})},me=function(e){return Object(T.jsx)("div",{className:"post_container",children:e.posts?e.posts.map((function(t,n){return Object(T.jsx)(ge,{post:t,index:n,setEditModalShow:e.setEditModalShow,setDeleteModalShow:e.setDeleteModalShow})})):Object(T.jsx)(he,{})})},ve=n(94),we=Object(d.createContext)(),ye=function(e){var t=Object(d.useState)({action:"someAction",message:""}),n=Object(O.a)(t,2),r=n[0],a=n[1],c=Object(d.useState)(!1),s=Object(O.a)(c,2),o=s[0],i=s[1],l=Object(d.useState)(),u=Object(O.a)(l,2),j=u[0],p=u[1];return Object(T.jsx)(we.Provider,{value:{feedbackMessage:r,setFeedbackMessage:a,feedbackMessageShow:o,setFeedbackMessageShow:i,feedbackSuccess:j,setFeedbackSuccess:p,setFeedbackType:function(e){p(!0!==e?"danger":"success")}},children:e.children})},Pe=function(e){var t=Object(d.useContext)(we),n=t.setFeedbackMessage,r=t.setFeedbackMessageShow,a=t.setFeedbackType,c=function(){var e=new Date;return e.toLocaleDateString()+", "+e.toLocaleTimeString()},s=Object(d.useState)(""),o=Object(O.a)(s,2),i=o[0],l=o[1],u=Object(d.useState)(c()),j=Object(O.a)(u,2),p=j[0],b=j[1],h=Object(d.useState)(!1),x=Object(O.a)(h,2),f=x[0],v=x[1],w=Object(d.useState)(!1),y=Object(O.a)(w,2),P=(y[0],y[1],function(){var t=Object(m.a)(g.a.mark((function t(c){var s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,S();case 3:s=t.sent,console.log(s),s.success?(e.refreshPosts(),n(s),a(!0),r(!0)):(n(s),a(!1),r(!0));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S=function(){var t=Object(m.a)(g.a.mark((function t(){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v(!0),console.log("Running Add Post"),b(c()),i){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,fetch("/posts/addPost",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({content:i,page:e.page,time:p})});case 8:return n=t.sent,t.next=11,n.json();case 11:return r=t.sent,v(!1),console.log(r),l(""),t.abrupt("return",r);case 18:return t.prev=18,t.t0=t.catch(5),v(!1),console.log(t.t0),l(""),t.abrupt("return",{success:!1,action:"AddPost",error:t.t0});case 24:case"end":return t.stop()}}),t,null,[[5,18]])})));return function(){return t.apply(this,arguments)}}();return Object(T.jsxs)("div",{className:"add_post_form_container",children:[Object(T.jsxs)(ve.a,{children:[Object(T.jsxs)(ve.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(T.jsx)(ve.a.Label,{style:{color:"white"},children:"Add a post here: "}),Object(T.jsx)(ve.a.Control,{as:"textarea",rows:5,onChange:function(e){return l(e.target.value)},value:i||"",placeholder:"Write something here ..."})]}),Object(T.jsx)(ae.a,{variant:"primary",type:"submit",disabled:!i,onClick:P,children:"Add Post"})]}),f?Object(T.jsx)(be.a,{animation:"border",variant:"primary"}):""]})},Se=n(93),Ce=function(e){var t=Object(d.useContext)(xe),n=t.singlePostModal,r=t.setSinglePostModal,a=(t.setPostModalIsLoading,function(){var t=Object(m.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.onHide(),t.next=4,c();case 4:r=t.sent,console.log("Result Edit"),console.log(r),r.success&&e.refreshPosts();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),c=function(){var e=Object(m.a)(g.a.mark((function e(){var t,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Running Edit Post"),e.prev=1,e.next=4,fetch("posts/editPost/".concat(n._id),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({content:n.content,time:n.time})});case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,console.log(r),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),s=n.user.username;return Object(T.jsxs)(Se.a,Object(w.a)(Object(w.a)({},e),{},{backdrop:"static",size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(T.jsx)(Se.a.Header,{closeButton:!0,children:Object(T.jsx)(Se.a.Title,{id:"contained-modal-title-vcenter",children:"Edit Post"})}),Object(T.jsx)(Se.a.Body,{children:Object(T.jsxs)(ve.a,{children:[Object(T.jsxs)(ve.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(T.jsx)(ve.a.Label,{children:"User"}),Object(T.jsx)(ve.a.Control,{type:"text",value:s,readOnly:!0})]}),Object(T.jsxs)(ve.a.Group,{controlId:"exampleForm.ControlInput2",children:[Object(T.jsx)(ve.a.Label,{children:"Post_id"}),Object(T.jsx)(ve.a.Control,{type:"text",value:n._id,readOnly:!0})]}),Object(T.jsxs)(ve.a.Group,{controlId:"exampleForm.ControlInput3",children:[Object(T.jsx)(ve.a.Label,{children:"Time"}),Object(T.jsx)(ve.a.Control,{type:"text",value:n.time,readOnly:!0})]}),Object(T.jsxs)(ve.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(T.jsx)(ve.a.Label,{children:" Content "}),Object(T.jsx)(ve.a.Control,{as:"textarea",rows:3,value:n.content,onChange:function(e){return r(Object(w.a)(Object(w.a)({},n),{},{content:e.target.value}))}})]})]})}),Object(T.jsxs)(Se.a.Footer,{children:[Object(T.jsx)(ae.a,{variant:"primary",onClick:function(e){return a(e)},children:" Submit "}),Object(T.jsx)(ae.a,{variant:"danger",onClick:e.onHide,children:"Close"})]})]}))},ke=function(e){var t=Object(d.useContext)(xe),n=t.singlePostModal,r=t.handleCloseModal,a=function(){var t=Object(m.a)(g.a.mark((function t(){var a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Running Edit Post"),t.prev=1,t.next=4,fetch("posts/deletePost",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:n.user,content:n.content,time:n.time,id:n._id})});case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r(e.setDeleteModalShow),e.refreshPosts(),console.log(c),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}();return Object(T.jsxs)(Se.a,{show:e.show,onHide:e.handleClose,backdrop:"static",keyboard:!1,children:[Object(T.jsx)(Se.a.Header,{closeButton:!0,children:Object(T.jsx)(Se.a.Title,{children:"Delete"})}),Object(T.jsxs)(Se.a.Body,{children:[Object(T.jsxs)(ve.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(T.jsx)(ve.a.Label,{children:"User"}),Object(T.jsx)(ve.a.Control,{type:"text",value:n._id,readOnly:!0})]}),"Are you sure you want to delete this?"]}),Object(T.jsxs)(Se.a.Footer,{children:[Object(T.jsx)(ae.a,{variant:"secondary",onClick:function(){return r(e.setDeleteModalShow)},children:"Cancel"}),Object(T.jsx)(ae.a,{variant:"danger",disabled:!1,onClick:function(){return a()},children:" Delete "})]})]})},Ne=n(91),Te=function(e){var t=Object(d.useContext)(we),n=t.feedbackMessage,r=(t.setFeedbackMessage,t.feedbackMessageShow),a=t.setFeedbackMessageShow,c=t.feedbackSuccess;t.setFeedbackSuccess;return Object(T.jsxs)(Ne.a,{variant:c,onClose:function(){return a(!1)},dismissible:!0,show:r,className:"margined",children:[Object(T.jsx)(Ne.a.Heading,{children:"success"===c?"Successful Action":"Oh snap! You got an error!"}),Object(T.jsxs)("p",{children:[n.message?n.message:"","."]})]})},Me=n(63),Ie=Object(d.createContext)(),_e=function(e){var t=Object(d.useState)(1),n=Object(O.a)(t,2),r=n[0],a=n[1],c=Object(d.useState)(0),s=Object(O.a)(c,2),o=s[0],i=s[1];return Object(T.jsx)(Ie.Provider,{value:{pageNumber:r,setPageNumber:a,totalPosts:o,setTotalPosts:i},children:e.children})},Fe=function(e){var t=Object(d.useContext)(Ie),n=t.setPageNumber,r=t.totalPosts;return console.log("Total Posts: ".concat(r)),console.log("Number Per Page: ".concat(5)),console.log("Some Math: ".concat(Math.ceil(+r/5))),r>5?Object(T.jsx)("section",{className:"pagination",style:{margin:"2px calc(38% + -3rem"},children:Object(Me.a)(Array(Math.ceil(+r/5)).keys()).map((function(e){return Object(T.jsxs)("button",{onClick:function(){n(e+1),window.scrollTo(0,document.body.scrollHeight)},children:[e+1," "]})}))}):""},Ae=function(e){var t=Object(d.useContext)(Ie),n=t.pageNumber,r=t.setTotalPosts,a=(t.totalPosts,Object(d.useState)([])),c=Object(O.a)(a,2),s=c[0],o=c[1],i=Object(d.useState)(!1),l=Object(O.a)(i,2),u=l[0],j=l[1],p=Object(d.useState)(!1),b=Object(O.a)(p,2),h=b[0],x=b[1],f={name:"PlaceHolderName",content:"PlaceHolderContent",post_id:"placeHolderPostID"},v=Object(d.useState)(f),w=Object(O.a)(v,2),y=(w[0],w[1]),P=function(){var t=Object(m.a)(g.a.mark((function t(){var a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Running fetch all posts"),t.prev=1,t.next=4,fetch("/posts/AllPosts",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({page:e.page,message:"requesting page info",pageNumber:n})});case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,console.log(c.posts),o(c.posts),r(c.totalPosts),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}();return Object(d.useEffect)((function(){P()}),[e.page,n]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(oe,{}),Object(T.jsx)(_,{direction:"vertical",margin:"1.6em"}),Object(T.jsx)(ue,{page:e.page}),Object(T.jsx)(ye,{children:Object(T.jsxs)(fe,{children:[" ",Object(T.jsx)(Pe,{page:e.page,refreshPosts:P}),Object(T.jsx)(Te,{}),Object(T.jsx)(me,{posts:s,setEditModalShow:j,setDeleteModalShow:x}),Object(T.jsx)(Fe,{}),Object(T.jsx)(_,{direction:"vertical",margin:"1em"}),Object(T.jsx)(Ce,{show:u,handleModelShow:j,onHide:function(){return j(!1),void y(f)},refreshPosts:P}),Object(T.jsx)(ke,{show:h,setDeleteModalShow:x,onHide:function(){return x(!1)},backdrop:"static",keyboard:!1,handleClose:function(){return x(!1)},refreshPosts:P})]})})]})},Ee=Object(d.createContext)(),Le=function(e){var t=Object(d.useState)(),n=Object(O.a)(t,2),r=n[0],a=n[1],c=function(){var e=Object(m.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Grabbing User"),e.prev=1,e.next=4,fetch("/getUser",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({message:"Just requesting Info From Server"})});case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,console.log(n),a(n),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{success:!1,action:"AddPost",error:e.t0});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(T.jsx)(Ee.Provider,{value:{userInfo:r,setUserInfo:a,grabUserInfo:c},children:e.children})},De=function(e){var t=Object(d.useContext)(Ee),n=t.userInfo,r=t.grabUserInfo,a=Object(d.useState)(!1),c=Object(O.a)(a,2),s=(c[0],c[1]);return Object(d.useEffect)(Object(m.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,r();case 3:t=e.sent,console.log(t),s(!1);case 6:case"end":return e.stop()}}),e)}))),[]),Object(T.jsx)("div",{className:"profile_page_wrapper",children:Object(T.jsxs)("div",{className:"wrapper",children:[Object(T.jsxs)("div",{className:"left",children:[Object(T.jsx)("img",{src:n?n.profilePicture:"",alt:"user",style:{width:100}}),Object(T.jsxs)("h4",{children:[" ",n?n.username:""]}),Object(T.jsxs)("p",{children:[" ",Object(T.jsx)("i",{class:"fas fa-bolt"})," Silver Account "]})]}),Object(T.jsxs)("div",{className:"right",children:[Object(T.jsxs)("div",{className:"info",children:[Object(T.jsx)("h3",{children:"Information"}),Object(T.jsx)("div",{className:"info-data",children:Object(T.jsxs)("div",{className:"data",children:[Object(T.jsx)("h4",{children:"Email"}),Object(T.jsx)("p",{children:n?n.email:""})]})})]}),Object(T.jsxs)("div",{className:"account",children:[Object(T.jsx)("h3",{children:"Account"}),Object(T.jsxs)("div",{className:"account-data",children:[Object(T.jsxs)("div",{className:"data",children:[Object(T.jsx)("h4",{children:"Created"}),Object(T.jsx)("p",{children:"March 12, 2021"})]}),Object(T.jsxs)("div",{className:"data",children:[Object(T.jsx)("h4",{children:"Most Viewed Page"}),Object(T.jsx)("p",{children:"Lorem Ipsum dolor sit amet."})]})]})]})]})]})})},He=function(){var e=Object(d.useContext)(Ee).grabUserInfo,t=Object(d.useState)(null),n=Object(O.a)(t,2),r=n[0],a=n[1],c=Object(d.useState)(""),s=Object(O.a)(c,2),o=s[0],i=s[1],l=Object(d.useState)(""),u=Object(O.a)(l,2),j=u[0],p=u[1],b=Object(d.useState)(""),h=Object(O.a)(b,2),x=h[0],f=h[1],v=function(){var t=Object(m.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,w();case 3:t.sent,i(""),e();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Changing Email"),e.prev=1,e.next=4,fetch("/changeEmail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:o})});case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{success:!1,action:"changeEmail",error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),P(),f(""),p("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(m.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/changePassword",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:j,confirmPassword:x})});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{success:!1,action:"changePassword",error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var t=Object(m.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,C();case 3:t.sent,e(),n.target.reset();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(g.a.mark((function e(){var t,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Running Change Profile Picture"),(t=new FormData).append("profile_picture",r),e.prev=3,e.next=6,fetch("/changeProfilePicture",{method:"POST",body:t});case 6:return n=e.sent,e.next=9,n.json();case 9:return a=e.sent,console.log(a),e.abrupt("return",a);case 14:return e.prev=14,e.t0=e.catch(3),console.log(e.t0),e.abrupt("return",{success:!1,action:"Change Profile Picture",error:e.t0});case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{className:"container profile-form-container",children:[Object(T.jsxs)(ve.a,{onSubmit:function(e){return v(e)},children:[Object(T.jsxs)(ve.a.Group,{controlId:"ChangeEmail",children:[Object(T.jsx)(ve.a.Label,{className:"profile-form-label",children:"Change Email Address"}),Object(T.jsx)(ve.a.Control,{type:"email",placeholder:"Enter email",value:o,onChange:function(e){return i(e.target.value)}}),Object(T.jsx)(ve.a.Text,{className:"text-muted",children:"Ensure to enter in a valid email address."})]}),Object(T.jsx)(ae.a,{variant:"primary",type:"submit",disabled:!o,children:"Change Email"})]}),Object(T.jsx)("hr",{className:"fancy-hr"}),Object(T.jsxs)(ve.a,{onSubmit:function(e){return y(e)},children:[Object(T.jsxs)(ve.a.Group,{controlId:"ChangePassword",children:[Object(T.jsx)(ve.a.Label,{className:"profile-form-label",children:"Change Password"}),Object(T.jsx)(ve.a.Control,{type:"password",placeholder:"New Password",value:j,onChange:function(e){return p(e.target.value)}}),Object(T.jsx)(ve.a.Text,{className:"text-muted"})]}),Object(T.jsxs)(ve.a.Group,{controlId:"ConfirmChangePassword",children:[Object(T.jsx)("p",{}),Object(T.jsx)(ve.a.Control,{type:"password",placeholder:"Confirm New Password",value:x,onChange:function(e){return f(e.target.value)}}),Object(T.jsx)(ve.a.Text,{className:"text-muted",children:"Your password must be at least 4 characters and alphanumeric."})]}),Object(T.jsx)(ae.a,{variant:"danger",type:"submit",disabled:!j||!x,children:"Change Password"})]}),Object(T.jsx)("p",{}),Object(T.jsx)("hr",{className:"fancy-hr"}),Object(T.jsxs)(ve.a,{onSubmit:function(e){return S(e)},encType:"multipart/form-data",children:[Object(T.jsxs)(ve.a.Group,{controlId:"profile_picture",children:[Object(T.jsx)(ve.a.Label,{className:"profile-form-label",children:"Change Profile Picture"}),Object(T.jsx)("p",{}),Object(T.jsx)(ve.a.Control,{type:"file",onChange:function(e){return a(e.target.files[0])}})," ",Object(T.jsx)("br",{}),Object(T.jsx)(ve.a.Text,{className:"text-muted",children:" Add a Profile Picture of 200 x 200 dimensions. PNG, JPG, JPEG."})]}),Object(T.jsx)("p",{}),Object(T.jsx)(ae.a,{variant:"secondary",type:"submit",disabled:!r,children:"Change Profile Picture"})]})]})},Je=(n(83),function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(Le,{children:[Object(T.jsx)(oe,{}),Object(T.jsx)(De,{}),Object(T.jsx)(He,{})]})})}),Ge=x.a.div(te||(te=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:center;\n"])));var Ue=function(){return Object(T.jsx)(ce.a,{children:Object(T.jsxs)(A.c,{children:[Object(T.jsx)(A.a,{exact:!0,path:"/",children:Object(T.jsx)(Ge,{children:Object(T.jsx)(ee,{})})}),Object(T.jsx)(A.a,{path:"/home",component:pe}),se.map((function(e){return Object(T.jsx)(A.a,{path:"/".concat(e),component:function(){return Object(T.jsx)(_e,{children:Object(T.jsx)(Ae,{page:e})})}})})),Object(T.jsx)(A.a,{path:"/profile",component:function(){return Object(T.jsx)(Je,{})}})]})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};b.a.render(Object(T.jsx)(j.a.StrictMode,{children:Object(T.jsx)(Ue,{})}),document.getElementById("root")),Re()}},[[84,1,2]]]);
//# sourceMappingURL=main.f78df0e8.chunk.js.map