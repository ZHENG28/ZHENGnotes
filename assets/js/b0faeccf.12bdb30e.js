"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[6561],{7906:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=r(4848),t=r(8453);const s={sidebar_label:"14. MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898"},i="MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898",l={id:"bjpowernode/\u4e92\u8054\u7f51\u751f\u6001/MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898",title:"MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898",description:"1 \u7b80\u4ecb",source:"@site/docs/bjpowernode/07-\u4e92\u8054\u7f51\u751f\u6001/14-MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898.md",sourceDirName:"bjpowernode/07-\u4e92\u8054\u7f51\u751f\u6001",slug:"/bjpowernode/\u4e92\u8054\u7f51\u751f\u6001/MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898",permalink:"/ZHENGnotes/bjpowernode/\u4e92\u8054\u7f51\u751f\u6001/MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_label:"14. MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898"},sidebar:"defaultSidebar",previous:{title:"8. Nginx",permalink:"/ZHENGnotes/bjpowernode/\u4e92\u8054\u7f51\u751f\u6001/Nginx"}},c={},d=[{value:"1 \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2}];function a(e){const n={h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mq\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898",children:"MQ\u89e3\u51b3\u91cd\u590d\u6d88\u8d39\u95ee\u9898"}),"\n",(0,o.jsx)(n.h2,{id:"1-\u7b80\u4ecb",children:"1 \u7b80\u4ecb"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5e42\u7b49\u6027\uff1a\u4efb\u610f\u591a\u6b21\u6267\u884c\u6240\u4ea7\u751f\u7684\u5f71\u54cd\u5747\u4e0e\u4e00\u6b21\u6267\u884c\u4ea7\u751f\u7684\u5f71\u54cd\u76f8\u540c","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u524d\u7aef\u8868\u5355\u91cd\u590d\u63d0\u4ea4"}),"\n",(0,o.jsx)(n.li,{children:"\u63a5\u53e3\u8c03\u7528\u91cd\u8bd5"}),"\n",(0,o.jsx)(n.li,{children:"\u6d88\u606f\u91cd\u590d\u6d88\u8d39"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["RPC\u91cd\u590d\u8c03\u7528\u89e3\u51b3\u65b9\u6848\uff1a","\n",(0,o.jsx)(n.mermaid,{value:"graph TD\nrecord[\u8bb0\u5f55\u8bf7\u6c42\u7684\u7279\u5f81\uff08IP\u3001\u65b9\u6cd5\u3001\u53c2\u6570\u7b49\uff09\u4e0e\u65f6\u95f4] --\x3e \u751f\u6210\u552f\u4e00\u6807\u8bc6 --\x3e \u53bb\u91cd\u5e76\u5b58\u50a8"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["MQ\u6d88\u606f\u91cd\u590d\uff1a","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u95ee\u9898\uff1a\u751f\u4ea7\u8005\u91cd\u590d\u6295\u9012\u6d88\u606f\uff0c\u6216\u662f\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39\u6d88\u606f"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u51b3\u65b9\u6848\uff1a","\n",(0,o.jsx)(n.mermaid,{value:"graph TD\n\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u65f6\u643a\u5e26\u552f\u4e00\u6807\u8bc6 --\x3e consume[\u6d88\u8d39\u8005\u6d88\u8d39\u65f6\u5224\u65ad\u6807\u8bb0\u662f\u5426\u5b58\u5728] --\u5b58\u5728--\x3e \u4e0d\u6d88\u8d39\nconsume --\u4e0d\u5b58\u5728--\x3e \u6d88\u8d39\u6d88\u606f\u540e\u8bb0\u5f55\u552f\u4e00\u6807\u8bc6\u81f3\u5bb9\u5668"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(6540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);