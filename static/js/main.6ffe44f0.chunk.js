(this["webpackJsonppatrickjgabr-react-gh-pages"]=this["webpackJsonppatrickjgabr-react-gh-pages"]||[]).push([[0],{75:function(e,t,i){},96:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i.n(s),c=i(16),n=i.n(c),l=i(132),r=i(97),o=i(134),d=i(130),j=i(127),b=i(136),m=i(2);var x=i(124),p=i(125),h=i(126),g=(i(75),i(18)),u=i(11),O=i(27),f=i.n(O),v=i(128);var w=function(e){return Object(m.jsx)("div",{style:{padding:"6px"},children:Object(m.jsxs)(r.a,{pad:"medium",background:"#ffffff",style:{outline:"1px solid lightgrey"},onClick:function(){return console.log(e.post.id)},children:[Object(m.jsx)(o.a,{level:4,margin:{top:"none",bottom:"small"},children:e.post.name}),Object(m.jsx)(o.a,{level:6,margin:{top:"none",bottom:"small"},children:e.post.published}),Object(m.jsx)(v.a,{children:e.post.summary})]})})};var y=function(e){var t=Object(s.useState)("loading"),i=Object(u.a)(t,2),a=i[0],c=i[1];return Object(s.useEffect)((function(){fetch("https://youfourdev.netlify.app/.netlify/functions/getBlog").then((function(e){return e.json()})).then((function(e){return c(e.results)}))}),[]),Object(m.jsxs)(r.a,{pad:{bottom:"35px",top:"medium",left:"medium",right:"medium"},round:"xsmall",background:"#ffffff",margin:{bottom:"large"},children:[Object(m.jsx)(o.a,{level:3,margin:{top:"none",bottom:"medium"},children:"Blog"}),Object(m.jsx)(r.a,{pad:{horizontal:"medium",bottom:"medium"},children:"loading"!=a&&Object(m.jsx)(f.a,Object(g.a)(Object(g.a)({},{arrows:!0,dots:!0,speed:500,slidesToShow:3,slidesToScroll:3,infinite:!1,draggable:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!1,dots:!0}},{breakpoint:600,settings:{arrows:!1,draggable:!0,slidesToShow:1,slidesToScroll:1}}]}),{},{children:a.map((function(e,t){return Object(m.jsx)(w,{post:e},t)}))}))})]})};var k=function(e){var t=Object(s.useState)(""),a=Object(u.a)(t,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){i.e(3).then(i.bind(null,138)).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}),[]),Object(m.jsxs)(r.a,{pad:"medium",round:"xsmall",background:"#ffffff",margin:{bottom:"large",top:"48px"},children:[Object(m.jsx)(v.a,{children:c}),Object(m.jsxs)(r.a,{direction:"row-responsive",gap:"medium",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(o.a,{level:4,margin:{vertical:"small"},children:"Primary Languages"}),Object(m.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-javascript-plain colored"}),Object(m.jsx)(b.a,{children:"JavaScript"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-python-plain colored"}),Object(m.jsx)(b.a,{children:"Python"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-dart-plain colored"}),Object(m.jsx)(b.a,{children:"Dart"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-java-plain colored"}),Object(m.jsx)(b.a,{children:"Java"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-csharp-plain-wordmark colored"}),Object(m.jsx)(b.a,{children:"C#"})]})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(o.a,{level:4,margin:{vertical:"small"},children:"Technologies"}),Object(m.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-react-plain colored"}),Object(m.jsx)(b.a,{children:"React"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-nodejs-plain colored"}),Object(m.jsx)(b.a,{children:"Node.js"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-express-original colored"}),Object(m.jsx)(b.a,{children:"Express"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-flutter-plain colored"}),Object(m.jsx)(b.a,{children:"Flutter"})]})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(o.a,{level:4,margin:{vertical:"small"},children:"Tools"}),Object(m.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-vscode-plain colored"}),Object(m.jsx)(b.a,{size:"small",children:"VSCode"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-github-plain colored"}),Object(m.jsx)(b.a,{size:"small",children:"Github"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-amazonwebservices-original colored"}),Object(m.jsx)(b.a,{size:"small",children:"AWS"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-heroku-plain colored"}),Object(m.jsx)(b.a,{size:"small",children:"Heroku"})]})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(o.a,{level:4,margin:{vertical:"small"},children:"Databases"}),Object(m.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-postgresql-plain colored"}),Object(m.jsx)(b.a,{children:"PostgresQL"})]}),Object(m.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(m.jsx)("i",{class:"devicon-mongodb-plain colored"}),Object(m.jsx)(b.a,{children:"MongoDB"})]})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(o.a,{level:4,margin:{vertical:"small"},children:"Concepts"}),Object(m.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(m.jsx)(r.a,{direction:"row",gap:"small",children:Object(m.jsx)(b.a,{size:"small",children:"Object Oriented Programming"})}),Object(m.jsx)(r.a,{direction:"row",gap:"small",children:Object(m.jsx)(b.a,{size:"small",children:"Restful API's"})}),Object(m.jsx)(r.a,{direction:"row",gap:"small",children:Object(m.jsx)(b.a,{size:"small",children:"Scrum/Agile/Waterfall"})}),Object(m.jsx)(r.a,{direction:"row",gap:"small",children:Object(m.jsx)(b.a,{size:"small",children:"PERN/MERN Stack"})}),Object(m.jsx)(r.a,{direction:"row",gap:"small",children:Object(m.jsx)(b.a,{size:"small",children:"Serverless Compute (Netlify Function's/AWS Lambda)"})})]})]})]})]})},S=i(135);var C=function(e){return Object(m.jsxs)(r.a,{style:{minHeight:"280px",marginLeft:"10px",marginRight:"10px",borderRadius:"5px",boxShadow:"0px 0px 0px 1px black",background:"#44475a"},children:[Object(m.jsxs)(r.a,{style:{borderTopLeftRadius:"5px",borderTopRightRadius:"5px",textAlign:"center",position:"relative",height:"32px",lineHeight:"32px",background:"#282a36"},children:[Object(m.jsx)("div",{style:{color:"white",fontSize:"16px"},children:e.project.name}),Object(m.jsxs)(r.a,{style:{position:"absolute",right:0,verticalAlign:"middle",display:"flex",justifyContent:"space-evenly",flexDirection:"row",alignItems:"center",width:"100px",height:"32px"},children:[Object(m.jsx)("div",{style:{width:"16px",height:"16px",background:"#f1fa8c",borderRadius:"50%",fill:!0}}),Object(m.jsx)("div",{style:{width:"16px",height:"16px",background:"#50fa7b",borderRadius:"50%",fill:!0}}),Object(m.jsx)("div",{style:{width:"16px",height:"16px",background:"#ff5555",borderRadius:"50%",fill:!0}})]})]}),Object(m.jsxs)(r.a,{margin:"medium",direction:"row-responsive",gap:"xsmall",children:[Object(m.jsxs)(r.a,{fill:!0,flex:"shrink",children:[Object(m.jsx)(b.a,{color:e.project.statusColor,id:"summary",size:"small",style:{fontWeight:"bold"},children:e.project.status}),Object(m.jsx)(b.a,{color:"white",id:"summary",size:"small",children:e.project.summary})]}),Object(m.jsx)(r.a,{width:"small",height:"small",flex:"grow",alignSelf:"center",children:Object(m.jsx)(S.a,{fit:"cover",src:"//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"})})]}),Object(m.jsx)(r.a,{direction:"row",gap:"xsmall",pad:{left:"medium",right:"medium",bottom:"15px"},wrap:!0,children:e.project.tags.map((function(e,t){return Object(m.jsx)(r.a,{background:"#6272a4",round:"xsmall",pad:"5px",style:{marginBottom:"5px"},children:Object(m.jsx)(b.a,{size:"xsmall",color:"\twhite",style:{fontFamily:"Hack",fontWeight:"bold"},children:e.name})},t)}))})]})},z=i(43);var T=function(e){var t=Object(s.useState)("loading"),i=Object(u.a)(t,2),a=i[0],c=i[1];return"loading"!=a&&console.log(a),Object(s.useEffect)((function(){z("https://youfourdev.netlify.app/.netlify/functions/getProjects").then((function(e){return e.json()})).then((function(e){return c(e.results)}))}),[]),Object(m.jsxs)(r.a,{pad:{bottom:"35px",top:"medium",left:"medium",right:"medium"},round:"xsmall",background:"#ffffff",margin:{bottom:"large"},children:[Object(m.jsx)(o.a,{level:3,margin:{top:"none",bottom:"medium"},children:"Projects"}),Object(m.jsx)(r.a,{pad:{bottom:"medium"},children:"loading"!=a&&Object(m.jsx)(f.a,Object(g.a)(Object(g.a)({},{arrows:!1,dots:!0,speed:500,slidesToShow:2,slidesToScroll:2,infinite:!0,draggable:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1e3,settings:{arrows:!1,draggable:!0,slidesToShow:1,slidesToScroll:1}}]}),{},{children:a.map((function(e,t){return Object(m.jsx)(C,{project:e},t)}))}))})]})},F=i(122),R=i(129),B=i(133),P=i(137),A=i(31),E=(i(91),i(43));var H=function(e){var t=Object(s.useState)({name:"",email:"",message:""}),i=Object(u.a)(t,2),a=i[0],c=i[1],n=function(){console.log(JSON.stringify(a)),E("https://usebasin.com/f/7ab47fa13070",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){1==e.success?A.b.success("Form Submitted",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):A.b.error("Something went wrong :(",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))};return Object(m.jsxs)(r.a,{pad:"medium",round:"xsmall",background:"#ffffff",margin:{bottom:"large"},children:[Object(m.jsx)(A.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(m.jsx)(o.a,{level:3,margin:{top:"none",bottom:"small"},children:"Contact"}),Object(m.jsxs)(r.a,{direction:"row-responsive",style:{display:"flex",justifyContent:"space-evenly",alignContent:"space-between"},children:[Object(m.jsx)(r.a,{alignSelf:"center",style:{display:"flex",justifyContent:"center",alignItems:"center",maxWidth:"350px",paddingBottom:"50px",paddingTop:"30px"},children:Object(m.jsx)(v.a,{style:{textAlign:"center"},children:"If you have any questions, job opportunities or want to get in touch, feel free to contact me via the provided form or email me directly at: **patrickjgabr@gmail.com**"})}),Object(m.jsx)(r.a,{gap:"small",children:Object(m.jsxs)(F.a,{value:a,onChange:function(e){return c(e)},onReset:function(){return c({})},onSubmit:function(e){e.value;n()},children:[Object(m.jsxs)(r.a,{direction:"row-responsive",gap:"5%",children:[Object(m.jsx)(r.a,{fill:!0,children:Object(m.jsx)(R.a,{name:"name",htmlFor:"name",label:"Name",children:Object(m.jsx)(B.a,{id:"name",name:"name"})})}),Object(m.jsx)(r.a,{fill:!0,children:Object(m.jsx)(R.a,{name:"email",htmlFor:"email",label:"Email",children:Object(m.jsx)(B.a,{id:"email",name:"email"})})})]}),Object(m.jsx)(R.a,{name:"message",htmlFor:"message",label:"Message",children:Object(m.jsx)(P.a,{id:"message",name:"message",resize:"vertical",style:{height:"200px"}})}),Object(m.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"10px"},children:Object(m.jsx)(d.a,{secondary:!0,label:"Submit",type:"submit"})})]})})]})]})},L=(i(92),i(93),{global:{colors:{brand:"#50fa7b","accent-1":"#8be9fd","accent-2":"#7FFFB0","accent-3":"#8FFFB0","accent-4":"#9FFFB0"},font:{family:"Roboto",size:"18px",height:"20px"}}});var N=function(){return Object(m.jsxs)(l.a,{theme:L,id:"page-container",children:[Object(m.jsxs)("div",{id:"content-wrap",children:[Object(m.jsx)(r.a,{background:"#282a36",children:Object(m.jsxs)(r.a,{height:"300px",style:{position:"relative",width:"1920px",margin:"auto"},justify:"center",children:[Object(m.jsx)(o.a,{margin:{bottom:"xsmall",top:"none",horizontal:"xlarge"},children:"Patrick Gabriel"}),Object(m.jsx)(o.a,{level:2,margin:{vertical:"none",horizontal:"xlarge"},color:"#50fa7b",children:"Aspiring Software Engineer from Brisbane, Australia."}),Object(m.jsxs)(r.a,{style:{position:"absolute",bottom:0,right:0},pad:"small",direction:"row",gap:"small",children:[Object(m.jsx)(d.a,{icon:Object(m.jsx)(x.a,{color:"#ff5555"}),onClick:function(){return window.open("mailto:patrickjgabr@gmail.com")}}),Object(m.jsx)(d.a,{icon:Object(m.jsx)(p.a,{color:"#8be9fd"})}),Object(m.jsx)(d.a,{icon:Object(m.jsx)(h.a,{color:"#ffb86c"})})]})]})}),Object(m.jsxs)(r.a,{width:{min:"300px",max:"1100px"},margin:"auto",children:[Object(m.jsx)(k,{}),Object(m.jsx)(T,{}),Object(m.jsx)(y,{}),Object(m.jsx)(H,{})]})]}),Object(m.jsx)(j.a,{background:"#bd93f9",height:"50px",justify:"center",id:"footer",elevation:"medium",children:Object(m.jsx)(b.a,{size:"14px",children:"\xa9 Copyright 2021, youfour Labs"})})]})};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.6ffe44f0.chunk.js.map