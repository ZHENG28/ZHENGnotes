"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3356],{7603:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var l=i(4848),s=i(8453);const r={sidebar_label:"2. SpringBoot3"},d="SpringBoot",c={id:"bjpowernode/\u5fae\u670d\u52a1\u7ed3\u6784/SpringBoot3",title:"SpringBoot",description:"1 What is SpringBoot?",source:"@site/docs/bjpowernode/06-\u5fae\u670d\u52a1\u7ed3\u6784/02-SpringBoot3.md",sourceDirName:"bjpowernode/06-\u5fae\u670d\u52a1\u7ed3\u6784",slug:"/bjpowernode/\u5fae\u670d\u52a1\u7ed3\u6784/SpringBoot3",permalink:"/ZHENGnotes/bjpowernode/\u5fae\u670d\u52a1\u7ed3\u6784/SpringBoot3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"2. SpringBoot3"},sidebar:"defaultSidebar",previous:{title:"0. \u5c0f\u7ed3",permalink:"/ZHENGnotes/bjpowernode/\u5fae\u670d\u52a1\u7ed3\u6784/summary"},next:{title:"5. Redis7",permalink:"/ZHENGnotes/bjpowernode/\u5fae\u670d\u52a1\u7ed3\u6784/Redis7"}},o={},h=[{value:"1 What is SpringBoot?",id:"1-what-is-springboot",level:3},{value:"2 \u5f00\u53d1\u8fd0\u884c\u73af\u5883\u8981\u6c42\uff08\u7565\uff09",id:"2-\u5f00\u53d1\u8fd0\u884c\u73af\u5883\u8981\u6c42\u7565",level:3},{value:"3 \u7a0b\u5e8f\u7684\u51e0\u79cd\u521b\u5efa\u65b9\u5f0f\uff08\u7565\uff09",id:"3-\u7a0b\u5e8f\u7684\u51e0\u79cd\u521b\u5efa\u65b9\u5f0f\u7565",level:3},{value:"4 \u5f00\u53d1java\u7a0b\u5e8f\uff08\u7565\uff09",id:"4-\u5f00\u53d1java\u7a0b\u5e8f\u7565",level:3},{value:"5 \u5f00\u53d1web\u7a0b\u5e8f\uff08\u7565\uff09",id:"5-\u5f00\u53d1web\u7a0b\u5e8f\u7565",level:3},{value:"6 main \u65b9\u6cd5\u5206\u6790",id:"6-main-\u65b9\u6cd5\u5206\u6790",level:3},{value:"7 \u9879\u76ee\u7ea6\u5b9a\u7684\u4ee3\u7801\u7ed3\u6784\uff08\u7565\uff09",id:"7-\u9879\u76ee\u7ea6\u5b9a\u7684\u4ee3\u7801\u7ed3\u6784\u7565",level:3},{value:"8 \u9879\u76eepom.xml\u7ee7\u627f\u7ed3\u6784\uff08\u7565\uff09",id:"8-\u9879\u76eepomxml\u7ee7\u627f\u7ed3\u6784\u7565",level:3},{value:"9 \u9879\u76eepom.xml\u4fee\u6539\u9ed8\u8ba4\u7248\u672c\uff08\u7565\uff09",id:"9-\u9879\u76eepomxml\u4fee\u6539\u9ed8\u8ba4\u7248\u672c\u7565",level:3},{value:"10 \u6574\u5408mybatis\uff08\u7565\uff09",id:"10-\u6574\u5408mybatis\u7565",level:3},{value:"11 \u6574\u5408jsp\u89c6\u56fe\u5c55\u793a\uff08\u7565\uff09",id:"11-\u6574\u5408jsp\u89c6\u56fe\u5c55\u793a\u7565",level:3},{value:"12 \u9879\u76eepom.xml\u70ed\u90e8\u7f72\u63d2\u4ef6Jrebel\u3001devtools\uff08\u7565\uff09",id:"12-\u9879\u76eepomxml\u70ed\u90e8\u7f72\u63d2\u4ef6jrebeldevtools\u7565",level:3},{value:"13 \u5f00\u53d1\u6700\u4f73\u5b9e\u8df5",id:"13-\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5",level:3},{value:"14 \u654f\u611f\u914d\u7f6e\u4fe1\u606f\u52a0\u5bc6",id:"14-\u654f\u611f\u914d\u7f6e\u4fe1\u606f\u52a0\u5bc6",level:3},{value:"15 \u6570\u636e\u5e93\u8fde\u63a5\u6c60",id:"15-\u6570\u636e\u5e93\u8fde\u63a5\u6c60",level:3},{value:"16 \u8de8\u57df\u8d44\u6e90\u5171\u4eabCORS\uff08Cross-Origin Resource Sharing\uff09",id:"16-\u8de8\u57df\u8d44\u6e90\u5171\u4eabcorscross-origin-resource-sharing",level:3},{value:"17 \u9759\u6001\u8d44\u6e90\u5904\u7406",id:"17-\u9759\u6001\u8d44\u6e90\u5904\u7406",level:3},{value:"18 \u6838\u5fc3\u914d\u7f6e\u6587\u4ef6",id:"18-\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6",level:3},{value:"19 \u7ebf\u7a0b\u6c60\u5f02\u6b65\u8c03\u7528",id:"19-\u7ebf\u7a0b\u6c60\u5f02\u6b65\u8c03\u7528",level:3},{value:"20 \u96c6\u6210Swagger",id:"20-\u96c6\u6210swagger",level:3},{value:"21 \u96c6\u6210websocket",id:"21-\u96c6\u6210websocket",level:3},{value:"22 \u6ce8\u518cServlets\uff0cFilters\uff0cListeners\u4f5c\u4e3aSpring Beans",id:"22-\u6ce8\u518cservletsfilterslisteners\u4f5c\u4e3aspring-beans",level:3},{value:"23 \u4f7f\u7528\u62e6\u622a\u5668Interceptor",id:"23-\u4f7f\u7528\u62e6\u622a\u5668interceptor",level:3},{value:"24 \u6846\u67b6\u5185\u5d4cWeb\u670d\u52a1\u5668",id:"24-\u6846\u67b6\u5185\u5d4cweb\u670d\u52a1\u5668",level:3},{value:"25 \u6253\u5305\u90e8\u7f72",id:"25-\u6253\u5305\u90e8\u7f72",level:3},{value:"26 \u914d\u7f6eSSL\uff08https\uff09",id:"26-\u914d\u7f6esslhttps",level:3},{value:"27 \u5168\u5c40\u5f02\u5e38\u5904\u7406",id:"27-\u5168\u5c40\u5f02\u5e38\u5904\u7406",level:3},{value:"28 404\u9875\u9762\u5904\u7406",id:"28-404\u9875\u9762\u5904\u7406",level:3},{value:"29 \u6e90\u7801\u5206\u6790\uff08\u7565\uff09",id:"29-\u6e90\u7801\u5206\u6790\u7565",level:3},{value:"30 \u81ea\u52a8\u914d\u7f6e\u539f\u7406\uff08\u7565\uff09",id:"30-\u81ea\u52a8\u914d\u7f6e\u539f\u7406\u7565",level:3},{value:"31 \u6846\u67b6\u4e2d\u5982\u4f55\u81ea\u5b9a\u4e49starter?\uff08\u7565\uff09",id:"31-\u6846\u67b6\u4e2d\u5982\u4f55\u81ea\u5b9a\u4e49starter\u7565",level:3}];function x(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"springboot",children:"SpringBoot"}),"\n",(0,l.jsx)(n.h3,{id:"1-what-is-springboot",children:"1 What is SpringBoot?"}),"\n",(0,l.jsx)(n.h3,{id:"2-\u5f00\u53d1\u8fd0\u884c\u73af\u5883\u8981\u6c42\u7565",children:"2 \u5f00\u53d1\u8fd0\u884c\u73af\u5883\u8981\u6c42\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"3-\u7a0b\u5e8f\u7684\u51e0\u79cd\u521b\u5efa\u65b9\u5f0f\u7565",children:"3 \u7a0b\u5e8f\u7684\u51e0\u79cd\u521b\u5efa\u65b9\u5f0f\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"4-\u5f00\u53d1java\u7a0b\u5e8f\u7565",children:"4 \u5f00\u53d1java\u7a0b\u5e8f\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"5-\u5f00\u53d1web\u7a0b\u5e8f\u7565",children:"5 \u5f00\u53d1web\u7a0b\u5e8f\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"6-main-\u65b9\u6cd5\u5206\u6790",children:"6 main \u65b9\u6cd5\u5206\u6790"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["main\u65b9\u6cd5\u7684\u914d\u7f6e\u9879\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"spring.main.sources=path"}),"\uff1a\u5728Application\u7c7b\u7684run()\u65b9\u6cd5\u4e2d\uff0c\u53ef\u7f3a\u7701primarySource\u8fd9\u4e00\u5f62\u53c2"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"spring.main.allow-bean-definition-overriding"}),"\uff1a\u662f\u5426\u5141\u8bb8\u65b9\u6cd5\u8986\u76d6\uff0c\u9ed8\u8ba4\u4e3afalse\u4e0d\u5141\u8bb8"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"spring.main.lazy-initialization"}),"\uff1a\u662f\u5426\u5ef6\u8fdf\u521d\u59cb\u5316\uff0c\u9ed8\u8ba4\u4e3afalse\u4e0d\u5ef6\u8fdf"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"spring.main.log-startup-info"}),"\uff1a\u662f\u5426\u8f93\u51fa\u65e5\u5fd7"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"spring.main.register-shutdown-hook"}),"\uff1a\u662f\u5426\u6ce8\u518c\u56de\u8c03\u7684\u94a9\u5b50"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"spring.main.web-application-type"}),"\uff1a\u8bf4\u660e\u8be5\u9879\u76ee\u662f\u54ea\u4e00\u79cd\u7a0b\u5e8f","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"none\uff1ajava\u7a0b\u5e8f"}),"\n",(0,l.jsx)(n.li,{children:"reactive\uff1a\u54cd\u5e94\u5f0f\u7a0b\u5e8f"}),"\n",(0,l.jsx)(n.li,{children:"servlet\uff1aweb\u7a0b\u5e8f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6d41\u5f0f\u5f00\u53d1\u64cd\u4f5c\uff1a",(0,l.jsx)(n.code,{children:"Builder()"}),"\nmain\u65b9\u6cd5\u7684\u542f\u52a8\uff1a",(0,l.jsx)(n.code,{children:"new SpringApplicationBuilder().sources(xxxApplication.class).bannerMode(Banner.Mode.CONSOLE).run(args);"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"7-\u9879\u76ee\u7ea6\u5b9a\u7684\u4ee3\u7801\u7ed3\u6784\u7565",children:"7 \u9879\u76ee\u7ea6\u5b9a\u7684\u4ee3\u7801\u7ed3\u6784\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"8-\u9879\u76eepomxml\u7ee7\u627f\u7ed3\u6784\u7565",children:"8 \u9879\u76eepom.xml\u7ee7\u627f\u7ed3\u6784\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"9-\u9879\u76eepomxml\u4fee\u6539\u9ed8\u8ba4\u7248\u672c\u7565",children:"9 \u9879\u76eepom.xml\u4fee\u6539\u9ed8\u8ba4\u7248\u672c\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"10-\u6574\u5408mybatis\u7565",children:"10 \u6574\u5408mybatis\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"11-\u6574\u5408jsp\u89c6\u56fe\u5c55\u793a\u7565",children:"11 \u6574\u5408jsp\u89c6\u56fe\u5c55\u793a\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"12-\u9879\u76eepomxml\u70ed\u90e8\u7f72\u63d2\u4ef6jrebeldevtools\u7565",children:"12 \u9879\u76eepom.xml\u70ed\u90e8\u7f72\u63d2\u4ef6Jrebel\u3001devtools\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"13-\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5",children:"13 \u5f00\u53d1\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5408\u7406\u7684\u5305\u7ed3\u6784\uff1a\u4ee5\u4e1a\u52a1\u6a21\u5757\u4e3a\u5206\u5305\u57fa\u7840\u3001\u4ee5MVC\u6a21\u5f0f\u4e3a\u5206\u5305\u57fa\u7840"}),"\n",(0,l.jsxs)(n.li,{children:["\u4e3b\u5e94\u7528\u7a0b\u5e8f ",(0,l.jsx)(n.code,{children:"xxxApplication.java"})," \u5e94\u4e0e\u5176\u4ed6\u5305\u540c\u5728\u4e00\u4e2a\u6839\u76ee\u5f55\u4e0b\uff0c\u56e0\u4e3a\u4e3b\u7c7b\u4e0a\u6709 ",(0,l.jsx)(n.code,{children:"@SpringBootApplication"})," \u7684\u6ce8\u89e3\uff0c\u9ed8\u8ba4\u626b\u63cf\u5f53\u524d\u5305\u53ca\u5b50\u7c7b\u4e0b\u7684\u6807\u6709 ",(0,l.jsx)(n.code,{children:"@Component"})," \uff0c ",(0,l.jsx)(n.code,{children:"@Service"})," \uff0c ",(0,l.jsx)(n.code,{children:"@Repository"})," \uff0c ",(0,l.jsx)(n.code,{children:"@Controller"})," \u7b49\u6ce8\u89e3\u7684bean"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@SpringBootApplication"})," = ",(0,l.jsx)(n.code,{children:"@EnableAutoConfiguration"})," + ",(0,l.jsx)(n.code,{children:"@ComponentScan"})," + ",(0,l.jsx)(n.code,{children:"@Configuration"})]}),"\n",(0,l.jsx)(n.li,{children:"main\u65b9\u6cd5\u7684\u7c7b\u4e5f\u662f\u4e00\u4e2a\u914d\u7f6e\u7c7b\uff0c\u4f46\u5982\u4ecaSpringBoot\u6846\u67b6\u5df2\u7ecf\u4e0d\u63a8\u8350\u4f7f\u7528xml\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.li,{children:["\u5c06bean\u5bf9\u8c61/\u7ec4\u4ef6",(0,l.jsx)("font",{color:"red",children:(0,l.jsx)(n.strong,{children:"\u52a0\u5165\u5230SpringBoot\u5bb9\u5668"})}),"\u4e2d\uff1a","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@Import(xxx.class)"}),"\uff1a\u76f4\u63a5\u5bfc\u5165bean\u5bf9\u8c61"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@Configuration"}),"\uff1a\u52a0\u5728bean\u5bf9\u8c61\u4e0a"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@Configuration"})," + ",(0,l.jsx)(n.code,{children:"@Bean"}),"\uff1a",(0,l.jsx)(n.code,{children:"@Configuration"})," \u52a0\u5728xxxApplication\u7c7b\u4e0a\uff0c ",(0,l.jsx)(n.code,{children:"@Bean"})," \u52a0\u5728bean\u5bf9\u8c61\u4e0a"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@Configuration"})," + ",(0,l.jsx)(n.code,{children:"@ComponentScan"}),"\uff1a",(0,l.jsx)(n.code,{children:"@Configuration"})," \u52a0\u5728bean\u5bf9\u8c61\u4e0a\uff0c ",(0,l.jsx)(n.code,{children:"@ComponentScan"})," \u52a0\u5728bean\u5bf9\u8c61\u6216xxxApplication\u7c7b\u4e0a"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'@ImportResource(locations={"url"})'}),"\uff1a\u5c06xml\u6587\u4ef6\u4e2d\u7684bean\u7ec4\u4ef6\u52a0\u5165\u5230SpringBoot\u5bb9\u5668\u4e2d"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7981\u6b62\u6846\u67b6\u4e2d\u7684\u914d\u7f6e\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728\u9879\u76ee\u5165\u53e3\u7c7b\u4e0a\u8bbe\u7f6e ",(0,l.jsx)(n.code,{children:"@SpringBootApplication(exclude={xxx.class, ...})"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,l.jsx)(n.code,{children:"spring.autoconfigure.exclude=xxx"})," \u6765\u6392\u9664"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"SpringBoot\u9879\u76ee\u53ef\u4ee5\u76f4\u63a5\u6253jar\u5305\u8fd0\u884c\uff08\u56e0\u4e3aSpringBoot\u5df2\u5185\u5d4cTomcat\u670d\u52a1\u5668\uff0c\u6240\u4ee5\u65e0\u9700\u6253war\u5305\uff09"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CommandLineRunner"})," \u3001 ",(0,l.jsx)(n.code,{children:"ApplicationRunner"})," \u63a5\u53e3\u5728SpringBoot\u9879\u76ee\u542f\u52a8\u540e\u4f1a\u56de\u8c03\u91cd\u5199\u7684run\u65b9\u6cd5"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"14-\u654f\u611f\u914d\u7f6e\u4fe1\u606f\u52a0\u5bc6",children:"14 \u654f\u611f\u914d\u7f6e\u4fe1\u606f\u52a0\u5bc6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528jasypt\u52a0\u89e3\u5bc6","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u52a0\u5165 ",(0,l.jsx)(n.code,{children:"jasypt-spring-boot-starter"})," \u4f9d\u8d56"]}),"\n",(0,l.jsxs)(n.li,{children:["\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u5bc6\u94a5 ",(0,l.jsx)(n.code,{children:"jasypt.encryptor-password=xxx"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"StringEncryptor"})," \u5bf9\u8c61\u7684 ",(0,l.jsx)(n.code,{children:"encrypt(\u8981\u52a0\u5bc6\u7684\u5185\u5bb9)"})," \u548c ",(0,l.jsx)(n.code,{children:"decrypt(\u8981\u89e3\u5bc6\u7684\u5185\u5bb9)"})," \u65b9\u6cd5\u5373\u53ef"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728\u654f\u611f\u914d\u7f6e\u4fe1\u606f\u5904\u4ee5 ",(0,l.jsx)(n.code,{children:"ENC(\u52a0\u5bc6\u540e\u7684\u5185\u5bb9)"})," \u7684\u683c\u5f0f\u4e66\u5199\u5373\u53ef","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53ef\u4fee\u6539\u5176\u524d\u540e\u7f00\uff0c\u8bbe\u7f6e ",(0,l.jsx)(n.code,{children:"jasypt.encryptor.property.prefix/suffix=xxx"})," \u5c5e\u6027\u5373\u53ef"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"15-\u6570\u636e\u5e93\u8fde\u63a5\u6c60",children:"15 \u6570\u636e\u5e93\u8fde\u63a5\u6c60"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u9ed8\u8ba4\u91c7\u7528 ",(0,l.jsx)(n.code,{children:"HikariCP"})," \u6570\u636e\u5e93\u8fde\u63a5\u6c60"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53ef\u66f4\u6362\u4e3a\u5176\u4ed6\u6570\u636e\u5e93\u8fde\u63a5\u6c60\uff0c\u5982alibaba\u7684 ",(0,l.jsx)(n.code,{children:"druid"})," \u8fde\u63a5\u6c60","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728mybatis\u4e2d\u6392\u9664\u9ed8\u8ba4\u7684HikariCP\u8fde\u63a5\u6c60","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",metastring:"showLineNumbers",children:"<exclusions>\n    <exclusion>\n        <groupId>com.zaxxer</groupId>\n        <artifactId>HikariCP</artifactId>\n    </exclusion>\n</exclusions>\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u52a0\u5165 ",(0,l.jsx)(n.code,{children:"druid-spring-boot-starter"})," \u4f9d\u8d56"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"16-\u8de8\u57df\u8d44\u6e90\u5171\u4eabcorscross-origin-resource-sharing",children:"16 \u8de8\u57df\u8d44\u6e90\u5171\u4eabCORS\uff08Cross-Origin Resource Sharing\uff09"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"CORS\u5141\u8bb8\u6d4f\u89c8\u5668\u5411\u8de8\u6e90\u670d\u52a1\u5668\u53d1\u51faXMLHttpRequest\u8bf7\u6c42\uff08\u6d4f\u89c8\u5668\u672c\u8eab\u662f\u53ef\u4ee5\u53d1\u8d77\u8de8\u57df\u8bf7\u6c42\u7684\uff0c\u5982\u94fe\u63a5\u4e00\u4e2a\u5916\u57df\u7684\u56fe\u7247\u6216\u811a\u672c\uff0c\u4f46js\u4e0d\u80fd\u83b7\u53d6\u8fd9\u4e9b\u5916\u57df\u8d44\u6e90\u5185\u5bb9\uff09"}),"\n",(0,l.jsxs)(n.li,{children:["\u4e0d\u652f\u6301CORS\u7684\u8001\u7248\u672c\u6d4f\u89c8\u5668\uff1a\u91c7\u7528JSONP\u8fdb\u884c\u8de8\u57dfGET\u8bf7\u6c42","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u8981\u5728ajax\u4e2d\u8bbe\u7f6e\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'dataType: "jsonp",'}),"\uff1aajax\u53d1\u51fa\u7684\u8bf7\u6c42\u6240\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'jsonp: "callback",'}),"\uff1a\u6307\u5b9a\u4e00\u4e2a\u67e5\u8be2\u53c2\u6570\u540d\u79f0\u6765\u8986\u76d6\u9ed8\u8ba4\u7684jsonp\u56de\u8c03\u53c2\u6570\u540dcallback"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'jsonpCallback: "function_name",'}),"\uff1a\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\u540d"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u8fd4\u56de\u7684\u540e\u7aef\u6570\u636e\u8981\u7528\u56de\u8c03\u51fd\u6570\u5305\u88f9\u8d77\u6765"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u652f\u6301CORS\u7684\u6d4f\u89c8\u5668\uff1a","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u524d\u7aef\uff1a\u4f7f\u7528\u4e00\u4e2a\u989d\u5916\u7684HTTP\u54cd\u5e94\u5934\u6765\u8d4b\u4e88\u6d4f\u89c8\u5668\u83b7\u53d6\u975e\u540c\u6e90\u8d44\u6e90\u7684\u6743\u9650"}),"\n",(0,l.jsxs)(n.li,{children:["\u540e\u7aef\uff1a\u5199\u4e00\u4e2a\u914d\u7f6e\u7c7b\uff0c\u5b9e\u73b0WebMvcConfigurer","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",metastring:"showLineNumbers",children:'@Override\npublic void addCorsMappings(CorsRegistry registry) {\n    registry.addMapping("url");\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"17-\u9759\u6001\u8d44\u6e90\u5904\u7406",children:"17 \u9759\u6001\u8d44\u6e90\u5904\u7406"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u9ed8\u8ba4\u9759\u6001\u8d44\u6e90\u76ee\u5f55\u4f4d\u7f6e\u5728 ",(0,l.jsx)(n.code,{children:"classpath"})," \u4e0b"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4ee5\u4e0b4\u4e2a\u76ee\u5f55\u7684\u9759\u6001\u8d44\u6e90\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff1a\u8bbf\u95ee\u5730\u5740\u4e3a ",(0,l.jsx)(n.code,{children:"localhost:8080/+\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u540d"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"/static"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"/public"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"/resources"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"/META-INF/resources"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"18-\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6",children:"18 \u6838\u5fc3\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u683c\u5f0f\uff1a",(0,l.jsx)(n.code,{children:".properties"})," \u6216 ",(0,l.jsx)(n.code,{children:".yml"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u591a\u73af\u5883\u914d\u7f6e\u6587\u4ef6\uff1a",(0,l.jsx)(n.code,{children:"spring.profiles.active=dev\u6d4b\u8bd5/product\u751f\u4ea7"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u968f\u673a\u503c\uff1a\u6846\u67b6\u63d0\u4f9b ",(0,l.jsx)(n.code,{children:"RandomValuePropertySource"})," \u6ce8\u5165\u968f\u673a\u503c\uff08\u5982\uff1a\u6574\u6570\u3001longs\u3001uuid\u6216\u5b57\u7b26\u4e32\uff09","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u683c\u5f0f\uff1a",(0,l.jsx)(n.code,{children:"random.value/int/..."})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5360\u4f4d\u7b26\uff1a",(0,l.jsx)(n.code,{children:"${}"})]}),"\n",(0,l.jsx)(n.li,{children:"\u65f6\u95f4\u5355\u4f4dDuration\uff1a\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u53d7\u652f\u6301\u7684\u5355\u4f4d\uff0c\u5982ns\u3001us\u3001ms\u3001s\u3001m\u3001H\u3001d\u3001w\u3001m\u3001y\u7b49"}),"\n",(0,l.jsx)(n.li,{children:"\u5bb9\u91cf\u5355\u4f4dDataSize\uff1aB\u3001KB\u3001MB\u3001GB\u3001TB\u7b49"}),"\n",(0,l.jsxs)(n.li,{children:["\u914d\u7f6e\u6587\u4ef6\u7684\u8bfb\u53d6\u65b9\u5f0f\uff1a","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"@Value"})," \u6ce8\u89e3\u8bfb\u53d6"]}),"\n",(0,l.jsxs)(n.li,{children:["\u901a\u8fc7\u6620\u5c04\u7c7b\u8bfb\u53d6\uff0c\u7c7b\u4e0a\u52a0 ",(0,l.jsx)(n.code,{children:"@ConfigurationProperties"})," \u6ce8\u89e3"]}),"\n",(0,l.jsxs)(n.li,{children:["\u901a\u8fc7Environment\u5bf9\u8c61\u8bfb\u53d6","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@Autowired Environment env;"}),"\uff1a\u7531Spring IOC\u63d0\u4f9b\u7684\u5bf9\u8c61"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'... env.getProperty("property_name"); ...'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u901a\u8fc7\u5d4c\u5957\u9759\u6001\u5185\u90e8\u7c7b\uff08static class\uff09\u8bfb\u53d6\uff08\u5982server.\u524d\u7f00\u7684\u76f8\u5173\u5c5e\u6027\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"19-\u7ebf\u7a0b\u6c60\u5f02\u6b65\u8c03\u7528",children:"19 \u7ebf\u7a0b\u6c60\u5f02\u6b65\u8c03\u7528"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6846\u67b6\u81ea\u52a8\u914d\u7f6e\u7ebf\u7a0b\u6c60\uff1a\u7528\u4e8e\u63d0\u4ea4\u5f02\u6b65\u4efb\u52a1\uff08\u65b9\u6cd5\u4e0a\u52a0",(0,l.jsx)(n.code,{children:"@Async"}),"\uff09","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u542f\u52a8\u7c7b\u4e0a\u52a0 ",(0,l.jsx)(n.code,{children:"@EnableAsync"})," \u2192 \u5f00\u542f\u5f02\u6b65\u6267\u884c"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u624b\u52a8\u914d\u7f6e\u7ebf\u7a0b\u6c60"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"20-\u96c6\u6210swagger",children:"20 \u96c6\u6210Swagger"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"OAS\uff08OpenAPI Specification\uff09\uff1a\u901a\u8fc7\u5b9a\u4e49\u4e00\u79cd\u7528\u6765\u63cf\u8ff0API\u683c\u5f0f\u6216API\u5b9a\u4e49\u7684\u8bed\u8a00\uff0c\u6765\u89c4\u8303RESTful\u670d\u52a1\u5f00\u53d1\u8fc7\u7a0b"}),"\n",(0,l.jsxs)(n.li,{children:["Swagger\uff1a\u9075\u5faaOpenAPI\u5f00\u53d1\u7684\u5de5\u5177\u6846\u67b6\uff0c\u652f\u6301\u4ece\u8bbe\u8ba1\u548c\u6587\u6863\u5230\u6d4b\u8bd5\u90e8\u7f72\u7684\u6574\u4e2aAPI\u751f\u547d\u5468\u671f\u7684\u5f00\u53d1","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u914d\u7f6e\u7c7b\u4e0a\u52a0 ",(0,l.jsx)(n.code,{children:"@EnableSwagger2"})," \u4ee5\u5f00\u542fSwagger\uff1b\u914d\u7f6e\u6587\u4ef6\u52a0 ",(0,l.jsx)(n.code,{children:"swagger.enable=true"})]}),"\n",(0,l.jsxs)(n.li,{children:["API\u6587\u6863\u5730\u5740\uff1a",(0,l.jsx)(n.a,{href:"http://localhost:8080/swagger-ui.html",children:"http://localhost:8080/swagger-ui.html"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5e38\u7528\u6ce8\u89e3\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@Api"}),"\uff1a\u7528\u5728\u7c7b\u4e0a\uff0c\u8bf4\u660e\u7c7b\u7684\u4f5c\u7528"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@ApiOperation"}),"\uff1a\u7528\u5728\u65b9\u6cd5\u4e0a\uff0c\u8bf4\u660e\u65b9\u6cd5\u7684\u4f5c\u7528"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@ApiImplicitParams"}),"\uff1a\u7528\u5728\u65b9\u6cd5\u4e0a\uff0c\u4e00\u7ec4\u53c2\u6570\u8bf4\u660e"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@ApiImplicitParam"}),"\uff1a\u7528\u5728 ",(0,l.jsx)(n.code,{children:"@ApiImplicitParams"})," \u6ce8\u89e3\u4e2d\uff0c\u6307\u5b9a\u4e00\u4e2a\u8bf7\u6c42\u53c2\u6570\u7684\u5404\u4e2a\u65b9\u9762","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"paramType"}),"\uff1a\u53c2\u6570\u4f4d\u7f6e","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"header"}),"\uff1a",(0,l.jsx)(n.code,{children:"@RequestHeader"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"query"}),"\uff1a",(0,l.jsx)(n.code,{children:"@RequestParam"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"path"}),"\uff1a",(0,l.jsx)(n.code,{children:"@PathVariable"}),"\uff08\u7528\u4e8erestful\u63a5\u53e3\uff09"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"body"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"form"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"}),"\uff1a\u53c2\u6570\u540d\u79f0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dataType"}),"\uff1a\u53c2\u6570\u7c7b\u578b"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"required"}),"\uff1a\u53c2\u6570\u662f\u5426\u5fc5\u987b\u4f20"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"value"}),"\uff1a\u53c2\u6570\u503c"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"defaultValue"}),"\uff1a\u53c2\u6570\u7684\u9ed8\u8ba4\u503c"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@ApiResponses"}),"\uff1a\u7528\u4e8e\u8868\u793a\u4e00\u7ec4\u54cd\u5e94"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@ApiResponse"}),"\uff1a\u7528\u5728 ",(0,l.jsx)(n.code,{children:"@ApiResponses"})," \u6ce8\u89e3\u4e2d\uff0c\u7528\u4e8e\u8868\u8fbe\u4e00\u4e2a\u9519\u8bef\u7684\u54cd\u5e94\u4fe1\u606f","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"code"}),"\uff1a\u6570\u5b57"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"message"}),"\uff1a\u4fe1\u606f"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"response"}),"\uff1a\u629b\u51fa\u7684\u5f02\u5e38\u7c7b"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@ApiIgnore"}),"\uff1a\u544a\u77e5\u5ffd\u7565\u8fd9\u4e2aAPI\uff0c\u5728swagger\u751f\u6210\u7684\u6587\u6863\u4e2d\u4e0d\u663e\u793a"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@ApiModel"}),"\uff1a\u63cf\u8ff0\u4e00\u4e2aModel\u7684\u4fe1\u606f"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@ApiModelProperty"}),"\uff1a\u63cf\u8ff0\u4e00\u4e2amodel\u7684\u5c5e\u6027"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["springfox\uff1a\u4ece\u57fa\u4e8eSpring\u7684\u7ec4\u4ef6swagger-springmvc\u53d1\u5c55\u800c\u6765","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"springfox-swagger2\uff1a\u4f9d\u8d56OAS\u6587\u6863\uff0c\u81ea\u52a8\u751f\u6210\u63cf\u8ff0API\u7684json\u6587\u4ef6"}),"\n",(0,l.jsx)(n.li,{children:"springfox-swagger-ui\uff1a\u89e3\u6790\u81ea\u52a8\u751f\u6210\u7684json\u6587\u4ef6\uff0c\u4ee5\u53ef\u89c6\u5316\u7684\u65b9\u5f0f\u5448\u73b0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"21-\u96c6\u6210websocket",children:"21 \u96c6\u6210websocket"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"WebSocket\u534f\u8bae\uff1a\u7531HTML5\u5b9a\u4e49\uff0c\u57fa\u4e8eTCP\u534f\u8bae\u5b9e\u73b0\u7684\u4e00\u79cd\u7f51\u7edc\u534f\u8bae\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u670d\u52a1\u5668\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u4fe1\u606f"}),"\n",(0,l.jsxs)(n.li,{children:["HTTP\u548cWebSocket\u7684\u5bf9\u6bd4\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"HTTP\uff1a\u77ed\u8fde\u63a5\uff0c\u8bf7\u6c42\u540e\u5173\u95ed\u8fde\u63a5\uff0c\u4e0b\u6b21\u91cd\u65b0\u8bf7\u6c42\u6570\u636e\u65f6\uff0c\u9700\u8981\u518d\u6b21\u6253\u5f00\u8fde\u63a5\uff1b\u5ba2\u6237\u7aef \u2192 \u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u54cd\u5e94"}),"\n",(0,l.jsxs)(n.li,{children:["WebSocket\uff1a\u957f\u8fde\u63a5\uff0c\u53ea\u9700\u8981\u4e00\u6b21\u8bf7\u6c42\u6765\u521d\u59cb\u5316\u8fde\u63a5\uff0c\u7136\u540e\u6240\u6709\u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u90fd\u901a\u8fc7\u8fd9\u4e2aTCP\u8fde\u63a5\u8fdb\u884c\u901a\u8baf\uff1b\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u5168\u53cc\u5de5\u901a\u4fe1","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5355\u5de5\uff1a\u4fe1\u606f\u53ea\u80fd\u5355\u5411\u4f20\u9001"}),"\n",(0,l.jsx)(n.li,{children:"\u534a\u53cc\u5de5\uff1a\u4fe1\u606f\u80fd\u53cc\u5411\u4f20\u9001\u4f46\u4e0d\u80fd\u540c\u65f6\u53cc\u5411\u4f20\u9001"}),"\n",(0,l.jsx)(n.li,{children:"\u5168\u53cc\u5de5\uff1a\u4fe1\u606f\u80fd\u591f\u540c\u65f6\u53cc\u5411\u4f20\u9001"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["WebSocket\u9002\u7528\u573a\u666f\uff1a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8fdb\u884c",(0,l.jsx)(n.strong,{children:"\u9891\u7e41\u5730\u53cc\u5411\u901a\u4fe1"}),"\u65f6\uff0c\u53ef\u4ee5\u907f\u514d\u670d\u52a1\u5668\u9891\u7e41\u521b\u5efaHTTP\u8fde\u63a5"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"22-\u6ce8\u518cservletsfilterslisteners\u4f5c\u4e3aspring-beans",children:"22 \u6ce8\u518cServlets\uff0cFilters\uff0cListeners\u4f5c\u4e3aSpring Beans"}),"\n",(0,l.jsx)(n.h3,{id:"23-\u4f7f\u7528\u62e6\u622a\u5668interceptor",children:"23 \u4f7f\u7528\u62e6\u622a\u5668Interceptor"}),"\n",(0,l.jsx)(n.h3,{id:"24-\u6846\u67b6\u5185\u5d4cweb\u670d\u52a1\u5668",children:"24 \u6846\u67b6\u5185\u5d4cWeb\u670d\u52a1\u5668"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"SpringBoot\u9ed8\u8ba4\u4e3aTomcat\u670d\u52a1\u5668"}),"\n",(0,l.jsx)(n.li,{children:"Undertow\uff1aJBoss\u7684\u9ed8\u8ba4\u670d\u52a1\u5668"}),"\n",(0,l.jsx)(n.li,{children:"Jetty\uff1aeclipse\u7684\u9ed8\u8ba4\u670d\u52a1\u5668"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"25-\u6253\u5305\u90e8\u7f72",children:"25 \u6253\u5305\u90e8\u7f72"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["jar\u5305\uff1a\u4e0d\u652f\u6301jsp\uff1b\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,l.jsx)(n.code,{children:"java -jar filename.jar"}),"\u547d\u4ee4\u8fd0\u884c"]}),"\n",(0,l.jsxs)(n.li,{children:["war\u5305\uff1a\u5165\u53e3\u7c7b\u9700\u8981\u6269\u5c55\u7ee7\u627f",(0,l.jsx)(n.code,{children:"SpringBootServletInitializer"}),"\u7c7b"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"26-\u914d\u7f6esslhttps",children:"26 \u914d\u7f6eSSL\uff08https\uff09"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u914d\u7f6e\u6587\u4ef6\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-properties",metastring:"showLineNumbers",children:"# \u914d\u7f6e\u7aef\u53e3\u53f7\uff0c\u539f\u7aef\u53e3\u53f78080\u5931\u6548\nserver.port=8443\n# \u914d\u7f6ehttps\u8bc1\u4e66\nserver.ssl.key-store=classpath:tomcat.keystore\nserver.ssl.key-store-password=123456\nserver.ssl.key-store-type=jks/pkcs12\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u751f\u6210\u8bc1\u4e66\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u81ea\u7b7e\u540d\u8bc1\u4e66\uff08\u6d4b\u8bd5\uff09\uff1aJDK\u5de5\u5177/Openssl\u5de5\u5177"}),"\n",(0,l.jsx)(n.li,{children:"SSL\u8bc1\u4e66\u6388\u6743\u4e2d\u5fc3\u8d2d\u4e70\uff08\u4e0a\u7ebf\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"27-\u5168\u5c40\u5f02\u5e38\u5904\u7406",children:"27 \u5168\u5c40\u5f02\u5e38\u5904\u7406"}),"\n",(0,l.jsx)(n.h3,{id:"28-404\u9875\u9762\u5904\u7406",children:"28 404\u9875\u9762\u5904\u7406"}),"\n",(0,l.jsx)(n.h3,{id:"29-\u6e90\u7801\u5206\u6790\u7565",children:"29 \u6e90\u7801\u5206\u6790\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"30-\u81ea\u52a8\u914d\u7f6e\u539f\u7406\u7565",children:"30 \u81ea\u52a8\u914d\u7f6e\u539f\u7406\uff08\u7565\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"31-\u6846\u67b6\u4e2d\u5982\u4f55\u81ea\u5b9a\u4e49starter\u7565",children:"31 \u6846\u67b6\u4e2d\u5982\u4f55\u81ea\u5b9a\u4e49starter?\uff08\u7565\uff09"})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var l=i(6540);const s={},r=l.createContext(s);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);