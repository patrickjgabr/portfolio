(this["webpackJsonppatrickjgabr-react-gh-pages"]=this["webpackJsonppatrickjgabr-react-gh-pages"]||[]).push([[0],{75:function(e,t,i){},96:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i.n(s),c=i(16),l=i.n(c),n=i(132),r=i(97),o=i(135),d=i(134),j=i(130),b=i(127),m=i(136),x=i(2);var p=i(124),h=i(125),g=i(126),u=(i(75),i(18)),O=i(11),f=i(27),v=i.n(f),w=i(128);var y=function(e){return Object(x.jsx)("div",{style:{padding:"6px"},children:Object(x.jsxs)(r.a,{pad:"medium",background:"#ffffff",style:{outline:"1px solid lightgrey"},onClick:function(){return console.log(e.post.id)},children:[Object(x.jsx)(d.a,{level:4,margin:{top:"none",bottom:"small"},children:e.post.name}),Object(x.jsx)(d.a,{level:6,margin:{top:"none",bottom:"small"},children:e.post.published}),Object(x.jsx)(w.a,{children:e.post.summary})]})})};var k=function(e){var t=Object(s.useState)("loading"),i=Object(O.a)(t,2),a=i[0],c=i[1];return Object(s.useEffect)((function(){fetch("https://youfourdev.netlify.app/.netlify/functions/getBlog").then((function(e){return e.json()})).then((function(e){return c(e.results)}))}),[]),Object(x.jsxs)(r.a,{pad:{bottom:"35px",top:"medium",left:"medium",right:"medium"},round:"xsmall",background:"#ffffff",margin:{bottom:"large"},children:[Object(x.jsx)(d.a,{level:3,margin:{top:"none",bottom:"medium"},children:"Blog"}),Object(x.jsx)(r.a,{pad:{horizontal:"medium",bottom:"medium"},children:"loading"!=a&&Object(x.jsx)(v.a,Object(u.a)(Object(u.a)({},{arrows:!0,dots:!0,speed:500,slidesToShow:3,slidesToScroll:3,infinite:!1,draggable:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!1,dots:!0}},{breakpoint:600,settings:{arrows:!1,draggable:!0,slidesToShow:1,slidesToScroll:1}}]}),{},{children:a.map((function(e,t){return Object(x.jsx)(y,{post:e},t)}))}))})]})};var S=function(e){var t=Object(s.useState)(""),a=Object(O.a)(t,2),c=a[0],l=a[1];return Object(s.useEffect)((function(){i.e(3).then(i.bind(null,138)).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}),[]),Object(x.jsxs)(r.a,{pad:"medium",round:"xsmall",background:"#ffffff",margin:{bottom:"large",top:"48px"},children:[Object(x.jsx)(r.a,{direction:"row",gap:"medium",justify:"between",children:Object(x.jsx)(r.a,{children:Object(x.jsx)(w.a,{children:c})})}),Object(x.jsxs)(r.a,{direction:"row-responsive",gap:"large",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a,{level:5,margin:{vertical:"small"},children:"Primary Languages"}),Object(x.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-javascript-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"JavaScript"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-dart-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"Dart"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-python-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"Python"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-java-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"Java"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-csharp-plain-wordmark colored"}),Object(x.jsx)(m.a,{size:"small",children:"C#"})]})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a,{level:5,margin:{vertical:"small"},children:"Technologies"}),Object(x.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-react-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"React"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-nodejs-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"Node.js"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-express-original colored"}),Object(x.jsx)(m.a,{size:"small",children:"Express"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-flutter-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"Flutter"})]})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a,{level:5,margin:{vertical:"small"},children:"Tools"}),Object(x.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-vscode-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"VSCode"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-github-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"Github"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-amazonwebservices-original colored"}),Object(x.jsx)(m.a,{size:"small",children:"AWS"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-heroku-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"Heroku"})]})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a,{level:5,margin:{vertical:"small"},children:"Databases"}),Object(x.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-postgresql-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"PostgresQL"})]}),Object(x.jsxs)(r.a,{direction:"row",gap:"small",children:[Object(x.jsx)("i",{class:"devicon-mongodb-plain colored"}),Object(x.jsx)(m.a,{size:"small",children:"MongoDB"})]})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(d.a,{level:5,margin:{vertical:"small"},children:"Concepts"}),Object(x.jsxs)(r.a,{direction:"column",gap:"xsmall",children:[Object(x.jsx)(r.a,{direction:"row",gap:"small",children:Object(x.jsx)(m.a,{size:"small",children:"Object Oriented Programming"})}),Object(x.jsx)(r.a,{direction:"row",gap:"small",children:Object(x.jsx)(m.a,{size:"small",children:"Restful API's"})}),Object(x.jsx)(r.a,{direction:"row",gap:"small",children:Object(x.jsx)(m.a,{size:"small",children:"Scrum/Agile/Waterfall"})}),Object(x.jsx)(r.a,{direction:"row",gap:"small",children:Object(x.jsx)(m.a,{size:"small",children:"PERN/MERN Stack"})}),Object(x.jsx)(r.a,{direction:"row",gap:"small",children:Object(x.jsx)(m.a,{size:"small",children:"Serverless Compute (Netlify Function's/AWS Lambda)"})})]})]})]})]})};var z=function(e){return Object(x.jsxs)(r.a,{style:{minHeight:"280px",marginLeft:"10px",marginRight:"10px",borderRadius:"5px",boxShadow:"0px 0px 0px 1px black",background:"#44475a"},children:[Object(x.jsxs)(r.a,{style:{borderTopLeftRadius:"5px",borderTopRightRadius:"5px",textAlign:"center",position:"relative",height:"32px",lineHeight:"32px",background:"#282a36"},children:[Object(x.jsx)("div",{style:{color:"white",fontSize:"16px"},children:e.project.name}),Object(x.jsxs)(r.a,{style:{position:"absolute",right:0,verticalAlign:"middle",display:"flex",justifyContent:"space-evenly",flexDirection:"row",alignItems:"center",width:"100px",height:"32px"},children:[Object(x.jsx)("div",{style:{width:"16px",height:"16px",background:"#f1fa8c",borderRadius:"50%",fill:!0}}),Object(x.jsx)("div",{style:{width:"16px",height:"16px",background:"#50fa7b",borderRadius:"50%",fill:!0}}),Object(x.jsx)("div",{style:{width:"16px",height:"16px",background:"#ff5555",borderRadius:"50%",fill:!0}})]})]}),Object(x.jsxs)(r.a,{margin:"medium",direction:"row-responsive",gap:"xsmall",children:[Object(x.jsxs)(r.a,{fill:!0,flex:"shrink",children:[Object(x.jsx)(m.a,{color:e.project.statusColor,id:"summary",size:"small",style:{fontWeight:"bold"},children:e.project.status}),Object(x.jsx)(m.a,{color:"white",id:"summary",size:"small",children:e.project.summary})]}),Object(x.jsx)(r.a,{width:"small",height:"small",flex:"grow",alignSelf:"center",children:Object(x.jsx)(o.a,{fit:"cover",src:"//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"})})]}),Object(x.jsx)(r.a,{direction:"row",gap:"xsmall",pad:{left:"medium",right:"medium",bottom:"15px"},wrap:!0,children:e.project.tags.map((function(e,t){return Object(x.jsx)(r.a,{background:"#6272a4",round:"xsmall",pad:"5px",style:{marginBottom:"5px"},children:Object(x.jsx)(m.a,{size:"xsmall",color:"\twhite",style:{fontFamily:"Hack",fontWeight:"bold"},children:e.name})},t)}))})]})},C=i(43);var T=function(e){var t=Object(s.useState)("loading"),i=Object(O.a)(t,2),a=i[0],c=i[1];return"loading"!=a&&console.log(a),Object(s.useEffect)((function(){C("https://youfourdev.netlify.app/.netlify/functions/getProjects").then((function(e){return e.json()})).then((function(e){return c(e.results)}))}),[]),Object(x.jsxs)(r.a,{pad:{bottom:"35px",top:"medium",left:"medium",right:"medium"},round:"xsmall",background:"#ffffff",margin:{bottom:"large"},children:[Object(x.jsx)(d.a,{level:3,margin:{top:"none",bottom:"medium"},children:"Projects"}),Object(x.jsx)(r.a,{pad:{bottom:"medium"},children:"loading"!=a&&Object(x.jsx)(v.a,Object(u.a)(Object(u.a)({},{arrows:!1,dots:!0,speed:500,slidesToShow:2,slidesToScroll:2,infinite:!0,draggable:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1e3,settings:{arrows:!1,draggable:!0,slidesToShow:1,slidesToScroll:1}}]}),{},{children:a.map((function(e,t){return Object(x.jsx)(z,{project:e},t)}))}))})]})},F=i(122),R=i(129),B=i(133),P=i(137),A=i(31),E=(i(91),i(43));var W=function(e){var t=Object(s.useState)({name:"",email:"",message:""}),i=Object(O.a)(t,2),a=i[0],c=i[1],l=function(){console.log(JSON.stringify(a)),E("https://usebasin.com/f/7ab47fa13070",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){1==e.success?A.b.success("Form Submitted",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):A.b.error("Something went wrong :(",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))};return Object(x.jsxs)(r.a,{pad:"medium",round:"xsmall",background:"#ffffff",margin:{bottom:"large"},children:[Object(x.jsx)(A.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(x.jsx)(d.a,{level:3,margin:{top:"none",bottom:"small"},children:"Contact"}),Object(x.jsxs)(r.a,{direction:"row-responsive",style:{display:"flex",justifyContent:"space-evenly",alignContent:"space-between"},children:[Object(x.jsx)(r.a,{alignSelf:"center",style:{display:"flex",justifyContent:"center",alignItems:"center",maxWidth:"350px",paddingBottom:"50px",paddingTop:"30px"},children:Object(x.jsx)(w.a,{style:{textAlign:"center"},children:"If you have any questions, job opportunities or want to get in touch, feel free to contact me via the provided form or email me directly at: **patrickjgabr@gmail.com**"})}),Object(x.jsx)(r.a,{gap:"small",children:Object(x.jsxs)(F.a,{value:a,onChange:function(e){return c(e)},onReset:function(){return c({})},onSubmit:function(e){e.value;l()},children:[Object(x.jsxs)(r.a,{direction:"row-responsive",gap:"5%",children:[Object(x.jsx)(r.a,{fill:!0,children:Object(x.jsx)(R.a,{name:"name",htmlFor:"name",label:"Name",children:Object(x.jsx)(B.a,{id:"name",name:"name"})})}),Object(x.jsx)(r.a,{fill:!0,children:Object(x.jsx)(R.a,{name:"email",htmlFor:"email",label:"Email",children:Object(x.jsx)(B.a,{id:"email",name:"email"})})})]}),Object(x.jsx)(R.a,{name:"message",htmlFor:"message",label:"Message",children:Object(x.jsx)(P.a,{id:"message",name:"message",resize:"vertical",style:{height:"200px"}})}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"10px"},children:Object(x.jsx)(j.a,{secondary:!0,label:"Submit",type:"submit"})})]})})]})]})},H=(i(92),i(93),{global:{colors:{brand:"#50fa7b","accent-1":"#8be9fd","accent-2":"#7FFFB0","accent-3":"#8FFFB0","accent-4":"#9FFFB0"},font:{family:"Roboto",size:"18px",height:"20px"}}});var I=function(){return Object(x.jsxs)(n.a,{theme:H,id:"page-container",children:[Object(x.jsxs)("div",{id:"content-wrap",children:[Object(x.jsx)(r.a,{background:"#282a36",children:Object(x.jsxs)(r.a,{height:"300px",style:{position:"relative",width:"1920px",margin:"auto",display:"flex",alignItems:"center"},direction:"row",children:[Object(x.jsxs)(r.a,{direction:"row-responsive",gap:"medium",style:{position:"absolute",display:"flex",alignItems:"center"},pad:{horizontal:"xlarge"},children:[Object(x.jsx)(r.a,{width:"125px",height:"125px",children:Object(x.jsx)(o.a,{fit:"cover",src:"//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"})}),Object(x.jsxs)(r.a,{children:[Object(x.jsx)(d.a,{margin:{bottom:"xsmall",top:"none"},children:"Patrick Gabriel"}),Object(x.jsx)(d.a,{level:2,margin:{vertical:"none"},color:"#50fa7b",children:"Aspiring Software Engineer from Brisbane, Australia."})]})]}),Object(x.jsxs)(r.a,{style:{position:"absolute",bottom:0,right:0},pad:"small",direction:"row",gap:"small",children:[Object(x.jsx)(j.a,{icon:Object(x.jsx)(p.a,{color:"#ff5555"}),onClick:function(){return window.open("mailto:patrickjgabr@gmail.com")}}),Object(x.jsx)(j.a,{icon:Object(x.jsx)(h.a,{color:"#8be9fd"})}),Object(x.jsx)(j.a,{icon:Object(x.jsx)(g.a,{color:"#ffb86c"})})]})]})}),Object(x.jsxs)(r.a,{width:{min:"300px",max:"1100px"},margin:"auto",children:[Object(x.jsx)(S,{}),Object(x.jsx)(T,{}),Object(x.jsx)(k,{}),Object(x.jsx)(W,{})]})]}),Object(x.jsx)(b.a,{background:"#bd93f9",height:"50px",justify:"center",id:"footer",elevation:"medium",children:Object(x.jsx)(m.a,{size:"14px",children:"\xa9 Copyright 2021, youfour Labs"})})]})};l.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.77114df5.chunk.js.map