(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(290)},156:function(e,t,a){},287:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(156),a(14)),c=a(15),s=a(17),u=a(16),p=a(18),d=a(297),h=a(147),m=a(295),g=a(298),f=a(299),v=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(f.a,{span:16},r.a.createElement("img",{src:"https://res.cloudinary.com/alexrodriguezcloud/image/upload/v1550857546/casaDelSol/car%202.jpg.jpg",alt:"banner"})),r.a.createElement(f.a,{span:8}))))},y=a(146),E=a(78),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={auth:{},message:""},a.handleChange=function(e){var t=a.state.auth;t[e.target.name]=e.target.value,a.setState({auth:t})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.message,n=t.auth;return r.a.createElement("div",{style:C},r.a.createElement("form",{action:""},r.a.createElement("p",null,"Tu email:"),r.a.createElement(y.a,{style:w,type:"email",name:"email",placeholder:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("p",null,"Tu contrase\xf1a:"),r.a.createElement(y.a,{style:w,type:"password",name:"password",placeholder:"password",onChange:this.handleChange}),r.a.createElement("p",{style:{color:"red"}}," ",a," "),r.a.createElement("br",null),r.a.createElement(E.a,{style:{},onClick:function(){return e.props.logIn(n)}},"Log in")))}}]),t}(r.a.Component),w={width:"30vw",padding:"8px"},C={paddingTop:"60px",display:"flex",justifyContent:"center"},j=b,S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentWillMount=function(){a.props.logOut()},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),O=a(19),x=a.n(O),k="http://localhost:3000/signup",D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newUser:{},errors:{}},a.handleChange=function(e){var t=a.state,n=t.newUser,r=t.errors;n[e.target.name]=e.target.value,r={},n.password!==n.password2&&(r.password="Tus contrase\xf1as no coinciden"),a.setState({newUser:n,errors:r})},a.sendToServer=function(){var e=a.state,t=e.newUser;e.errors!=={}&&x.a.post(k,t).then(function(e){return a.props.history.push("/login")}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{style:T},r.a.createElement("form",{action:""},r.a.createElement("h3",null,"Crea tu cuenta"),r.a.createElement("br",null),r.a.createElement(y.a,{style:A,type:"text",name:"username",placeholder:"Nombre de usuario",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{style:A,type:"email",name:"email",placeholder:"Correo electr\xf3nico",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{style:A,type:"password",name:"password",placeholder:"Contrase\xf1a",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{style:A,type:"password",name:"password2",placeholder:"Confirma tu contrase\xf1a",onChange:this.handleChange}),r.a.createElement("p",{style:{color:"red"}},e.password),r.a.createElement(E.a,{onClick:this.sendToServer},"Sign Up")))}}]),t}(r.a.Component),A={width:"30vw",padding:"10px"},T={paddingTop:"60px",display:"flex",justifyContent:"center"},M=D,P=a(97),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:3000/private",{withCredentials:!0}).then(function(t){e.setState({user:t.data.user}),e.forceUpdate()}).catch(function(t){return e.history.push("/login")})}},{key:"componentWillReceiveProps",value:function(){var e=this;x.a.get("http://localhost:3000/private",{withCredentials:!0}).then(function(t){e.setState({user:t.data.user}),e.forceUpdate()}).catch(function(t){return e.history.push("/login")})}},{key:"render",value:function(){var e=this.state.user,t=e.profilePic,a=e.username,n=e.email;return r.a.createElement("div",{style:U},r.a.createElement("img",{src:t,alt:"profilepic",style:{height:"40vh",borderRadius:"10px"}}),r.a.createElement("h3",null,"  ",r.a.createElement("strong",null,"Nombre de usuario :"),"   ",a),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Email:"),"  ",n),r.a.createElement(P.a,{to:"/profile/edit"},r.a.createElement(E.a,null,"Edit")))}}]),t}(r.a.Component),U={paddingTop:"60px",display:"flex",flexDirection:"column",alignItems:"center"},I=a(148),B="http://localhost:3000/editprofile",W=x.a.create({url:B,withCredentials:!0}),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={updateUser:{}},a.handleChange=function(e){var t=a.state.updateUser;e.target.files?t.profilePic=e.target.files[0]:t[e.target.name]=e.target.value,a.setState({updateUser:t})},a.submit=function(){var e=a.props.user,t=a.state.updateUser;t.profilePic&&a.uploadImage(t.profilePic,B).then(function(e){console.log(e)}).catch(function(e){return console.log(e)}),e.username===t.username&&e.email===t.email||x.a.post(B,Object(I.a)({},t),{withCredentials:!0}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),a.props.history.push("/profile")},a.uploadImage=function(e,t){var a=new FormData;return a.append("profilePic",e),W.post(t,a,{headers:{enctype:"multipart/form-data"}}).then(function(e){return e.data}).catch(function(e){return e})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{style:z},r.a.createElement("img",{src:e.profilePic,alt:"profilepic",height:"250"}),r.a.createElement("input",{name:"profilePic",type:"file",onChange:this.handleChange}),r.a.createElement("h3",null,"Nuevo nombre de usuario :"," ",r.a.createElement(y.a,{name:"username",type:"text",placeholder:e.username,onChange:this.handleChange})),r.a.createElement("p",null,"Nuevo email:"," ",r.a.createElement(y.a,{name:"email",type:"text",placeholder:e.email,onChange:this.handleChange})),r.a.createElement(P.a,{to:"/profile"},r.a.createElement(E.a,null,"Cancel")),r.a.createElement("br",null),r.a.createElement(E.a,{type:"primary",onClick:this.submit},"Save Changes"))}}]),t}(r.a.Component),z={paddingTop:"60px",display:"flex",flexDirection:"column",alignItems:"center"},V=a(293),G=a(55),F=a.n(G);var R=function(e){var t=e.onClick,a=e.handleStep1,n=y.a.TextArea;return r.a.createElement("div",null,r.a.createElement("h4",null,"\xbfPorque quieres apadrinar a un ni\xf1o?"),r.a.createElement(n,{rows:4,type:"text",name:"text",onChange:a}),r.a.createElement(E.a,{onClick:t},"Siguiente paso"))};var q=function(e){var t=e.onClick,a=e.handleStep2,n=y.a.TextArea;return r.a.createElement("div",null,r.a.createElement("h4",null,"\xbfQu\xe9 te gustar\xeda ver en tu ahijado?"),r.a.createElement(n,{rows:4,type:"text",name:"text",onChange:a}),r.a.createElement(E.a,{onClick:t},"Siguiente paso"))};var H=function(e){e.onClick;var t=e.handleStep3,a=e.onSubmit,n=y.a.TextArea;return r.a.createElement("div",null,r.a.createElement("h4",null,"\xbfSi fueras a escribir un par de compromisos con tu nuevo ahijado cuales ser\xedan?"),r.a.createElement(n,{rows:4,type:"text",name:"text",onChange:t}),r.a.createElement(E.a,{onClick:a,message:"Listo"},"Finalizar"))},J="http://localhost:3000/sendnewmail",K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={info1:{},info2:{},info3:{},current:0,steps:[{title:"Acerca de ti",content:function(){return r.a.createElement("div",null,r.a.createElement(R,{onClick:a.next,handleStep1:a.handleStep1}))}},{title:"Tu ahijado",content:function(){return r.a.createElement("div",null,r.a.createElement(q,{onClick:a.next,handleStep2:a.handleStep2}))}},{title:"Tu compromiso",content:function(){return r.a.createElement("div",null,r.a.createElement(H,{onSubmit:a.onSubmit,onClick:a.next,handleStep3:a.handleStep3,user:a.props}))}}]},a.next=function(){var e=a.state.current+1;a.setState({current:e})},a.handleStep1=function(e){var t=a.state.info1;t[e.target.name]=e.target.value,a.setState({info1:t})},a.handleStep2=function(e){var t=a.state.info2;t[e.target.name]=e.target.value,a.setState({info2:t})},a.handleStep3=function(e){var t=a.state.info3;t[e.target.name]=e.target.value,a.setState({info3:t})},a.onSubmit=function(){var e=a.state.current+1,t=a.props.user;t.awards.push("Nuevo ahijado");var n=a.state,r=n.info1,l=n.info2,o=n.info3,i={};i.about=r.text,i.ahijado=l.text,i.compromiso=o.text,a.setState({current:e});var c={user:t,form:i};F.a.success("Solicitud enviada, ganaste un award!"),console.log(c),x.a.post(J,c,{withCredentials:!0}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.current,a=e.steps;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100vw",height:"100vh",padding:"10%",flexDirection:"column"}},r.a.createElement(V.a,{current:t},a.map(function(e){return r.a.createElement(V.a.Step,{key:e.title,title:e.title})})),0===t&&a[t].content(),1===t&&a[t].content(),2===t&&a[t].content())}}]),t}(n.Component),Q=a(137),$=a.n(Q),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,customGallery:[],current:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=[];this.props.pictureGallery.forEach(function(t){var a={src:t};e.push(a)}),this.setState({customGallery:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.profilePic,l=this.state,o=l.open,i=l.customGallery,c=l.current;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement($.a,{images:i,currentImage:c,isOpen:o,onClose:function(){return e.setState({open:!1})},onClickNext:function(){var t=i.length,a=c+1>t?c:++c;e.setState({current:a})},onClickPrev:function(){var t=0===c?c:--c;e.setState({current:t})}}),r.a.createElement("img",{onClick:function(){return e.setState({open:!0})},style:X,src:n,alt:"photochild"}),r.a.createElement("h2",{styles:Y},a," ")))}}]),t}(n.Component),X={width:"30vw",borderRadius:"5%",cursor:"pointer",boxShadow:"13px 14px 13px -8px rgba(0,0,0,0.58)"},Y={padding:"20px"},Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={badges:[]},a.drawBadges=function(){var e=a.state.badges,t=a.props.user;return e.map(function(e,a){var n=ee.simple;return"First Login"===e.title?n=ee.imageBadgeStyle:t.sponsoredChildren.length>0&&"Primer ahijado"===e.title?n=ee.imageBadgeStyle:t.awards.includes("Nuevo ahijado")&&"Nuevo ahijado"===e.title?n=ee.imageBadgeStyle:t.awards.includes("Una carta enviada")&&"Una carta enviada"===e.title?n=ee.imageBadgeStyle:t.awards.includes("\xa1Tu primera visita!")&&"\xa1Tu primera visita!"===e.title?n=ee.imageBadgeStyle:t.sponsoredChildren.length>2&&"Tres ahijados"===e.title&&(n=ee.imageBadgeStyle),r.a.createElement("div",{style:ee,key:a},r.a.createElement("h3",null,e.title),r.a.createElement("img",{src:e.photoUrl,alt:"badgeImage",style:n}))})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:3000/children/badgesAll").then(function(t){return e.setState({badges:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex"}},this.drawBadges(),r.a.createElement(E.a,{type:"primary",onClick:this.props.toggleDisplayAwards,ghost:!0},"Ocultar"))}}]),t}(n.Component),ee={simple:{filter:"grayscale(100%)",width:"150px"},imageBadgeStyle:{width:"150px",filter:"grayscale(0%)"}},te=a(294),ae="http://localhost:3000/updateuser",ne=y.a.TextArea,re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={children:[],options:[],childToSend:"",messageToSend:""},a.onChange=function(e){var t=a.state.childToSend;t=e,a.setState({childToSend:t})},a.onSubmit=function(){var e=a.props.user;e.awards.push("Una carta enviada");var t={user:e};F.a.success("Solicitud enviada, ganaste un award!"),a.props.toggleDisplayMail(),x.a.post(ae,t,{withCredentials:!0}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.options;x.a.get("http://localhost:3000/children/childrenAll").then(function(a){a.data.map(function(e){return t.push({value:e.name,label:e.name})}),e.setState({children:a.data,options:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{style:le},r.a.createElement("p",null,"\xbfA qui\xe9n le damos tu mensaje?"),r.a.createElement("br",null),r.a.createElement(te.a,{options:this.state.options,onChange:this.onChange,placeholder:"Busca aqu\xed"}),r.a.createElement("br",null),r.a.createElement("p",null,"Tu mensaje:"),r.a.createElement(ne,{placeholder:"Tus ahijados",autosize:{minRows:2,maxRows:20}}),r.a.createElement(E.a,{onClick:this.onSubmit,type:"primary",ghost:!0},"Enviar")))}}]),t}(n.Component),le={paddingTop:"20px",display:"flex",flexWrap:"wrap",width:"30vw"},oe=re,ie=a(292),ce=a(145),se=a.n(ce),ue="http://localhost:3000/updateuser",pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dateToVisit:""},a.onSubmit=function(){var e=a.props.user;e.awards.push("\xa1Tu primera visita!");var t={user:e};F.a.success("Fecha agendada, ganaste un award!"),a.props.toggleDisplayVisit(),x.a.post(ue,t,{withCredentials:!0}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\xa1Programa tu visita!"),r.a.createElement(ie.a,{locale:se.a,onChange:this.onChange}),r.a.createElement(E.a,{onClick:this.onSubmit},"Enviar"))}}]),t}(n.Component),de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={children:{sponsoredChildren:[]},displayAwards:!1,displayMail:!1,displayDates:!1},a.drawChild=function(e,t){return r.a.createElement(_,{key:t,pictureGallery:e.pictureGallery,name:e.name,profilePic:e.profilePic})},a.toggleDisplayAwards=function(){var e=a.state.displayAwards;e=!e,a.setState({displayAwards:e})},a.drawDisplayAwards=function(){var e=a.state,t=e.displayAwards,n=e.children;return!0===t?r.a.createElement(Z,{children:n,toggleDisplayAwards:a.toggleDisplayAwards,user:a.props.user}):r.a.createElement(E.a,{type:"primary",styles:{height:"50px"},size:"large",onClick:a.toggleDisplayAwards},"Ver awards")},a.toggleDisplayMail=function(){var e=a.state.displayMail;e=!e,a.setState({displayMail:e})},a.toggleDisplayVisit=function(){var e=a.state.displayDates;e=!e,a.setState({displayDates:e})},a.drawDisplayMail=function(){return!0===a.state.displayMail?r.a.createElement(oe,{toggleDisplayMail:a.toggleDisplayMail,user:a.props.user}):r.a.createElement(E.a,{size:"large",onClick:a.toggleDisplayMail},"Enviar un mensaje")},a.drawDisplayDates=function(){return!0===a.state.displayDates?r.a.createElement(pe,{toggleDisplayVisit:a.toggleDisplayVisit,user:a.props.user}):r.a.createElement(E.a,{size:"large",onClick:a.toggleDisplayVisit},"Agendar una visita")},a.showNoKids=function(){},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:3000/children/sponsoredchildren",{withCredentials:!0}).then(function(t){return e.setState({children:t.data[0]})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.children,t=this.props.user.username;return 0===e.sponsoredChildren.length?r.a.createElement("div",{style:he}," ",r.a.createElement("h1",null,"A\xfan no tienes ahijados")):r.a.createElement("div",null,r.a.createElement("h1",null,"\xa1Bienvenido, ",t,"!  "),r.a.createElement("div",{style:{float:"right"}},this.drawDisplayAwards(),this.drawDisplayMail(),this.drawDisplayDates()),r.a.createElement("div",null,e.sponsoredChildren.map(this.drawChild)))}}]),t}(n.Component),he={textAlign:"center"},me=function(e){var t=e.isLogged,a=e.logIn,n=e.logOut,l=e.user;return r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:v}),r.a.createElement(h.a,{path:"/login",render:function(e){return t?r.a.createElement(m.a,{to:"/"}):r.a.createElement(j,Object.assign({},e,{logIn:a}))}}),r.a.createElement(h.a,{path:"/signup",component:M}),r.a.createElement(h.a,{path:"/logout",render:function(e){return t?r.a.createElement(S,Object.assign({},e,{logOut:n})):r.a.createElement(m.a,{to:"/"})}}),r.a.createElement(h.a,{path:"/sponsornew",render:function(e){return r.a.createElement(K,Object.assign({},e,{user:l}))}}),r.a.createElement(h.a,{path:"/children",render:function(e){return r.a.createElement(de,Object.assign({},e,{user:l}))}}),r.a.createElement(h.a,{exact:!0,path:"/profile",render:function(e){return r.a.createElement(L,Object.assign({},e,{user:l}))}}),r.a.createElement(h.a,{path:"/profile/edit",render:function(e){return r.a.createElement(N,Object.assign({},e,{user:l}))}}),r.a.createElement(h.a,{component:function(){return r.a.createElement("h2",null,"P\xe1gina no existe")}}))},ge=a(291),fe=(a(287),"http://localhost:3000/login"),ve="http://localhost:3000/logout",ye="http://localhost:3000/private",Ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={isLogged:!1,user:{}},a.checkLogged=function(){x.a.get(ye,{withCredentials:!0}).then(function(e){a.setState({isLogged:!0,user:e.data.user}),a.render()}).catch(function(e){a.setState({isLogged:!1}),a.render()})},a.drawNavs=function(){return a.state.isLogged?r.a.createElement("div",{style:be},r.a.createElement(ge.a,{activeStyle:{fontWeight:"bolder"},exact:!0,to:"/"},"Home"),r.a.createElement("span",null," | "),r.a.createElement(ge.a,{activeStyle:{fontWeight:"bolder"},to:"/sponsornew"},"Apadrinar a un ni\xf1o"),r.a.createElement("span",null," | "),r.a.createElement(ge.a,{activeStyle:{fontWeight:"bolder"},to:"/children"},"Ahijados"),r.a.createElement("span",null," | "),r.a.createElement(ge.a,{activeStyle:{fontWeight:"bolder"},to:"/profile"},"Perfil"),r.a.createElement("span",null," | "),r.a.createElement(ge.a,{activeStyle:{fontWeight:"bolder"},to:"/logout"},"Sign Out")):r.a.createElement("nav",{style:be},r.a.createElement(ge.a,{activeStyle:{fontWeight:"bolder"},exact:!0,to:"/"},"Home"),r.a.createElement("span",null," | "),r.a.createElement(ge.a,{activeStyle:{fontWeight:"bolder"},to:"/login"},"Login"),r.a.createElement("span",null," | "),r.a.createElement(ge.a,{activeStyle:{fontWeight:"bolder"},to:"/signup"},"Signup"))},a.componentDidMount=function(){a.checkLogged()},a.logIn=function(e){x.a.post(fe,e,{withCredentials:!0}).then(function(e){a.setState({isLogged:!0,user:e.data})}).catch(function(e){a.setState({message:"Invalid username and password"})})},a.logOut=function(){x.a.get(ve,{withCredentials:!0}).then(function(e){a.setState({isLogged:!1})}).catch(function(e){return console.log(e)})},a.drawFooter=function(){return r.a.createElement("div",null,"this is the footer")},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLogged,a=e.user;return r.a.createElement("div",null,r.a.createElement("div",null,this.drawNavs(),r.a.createElement("img",{src:"https://res.cloudinary.com/alexrodriguezcloud/image/upload/v1552451448/casaDelSol/Logo-Casa-del-Sol-jpg_1.png",style:we,alt:"logo"}),r.a.createElement(me,{isLogged:t,logIn:this.logIn,logOut:this.logOut,user:a})))}}]),t}(n.Component),be={padding:"10px",float:"right"},we={height:"55px",padding:"5px"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=a(296);a(288),a(289);o.a.render(r.a.createElement(function(){return r.a.createElement(Ce.a,null,r.a.createElement(Ee,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,1,2]]]);
//# sourceMappingURL=main.b4bcdfaa.chunk.js.map