"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8100],{5428:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>a});var i=l(4848),r=l(8453);const d={sidebar_label:"6. \u8bbe\u8ba1\u6a21\u5f0f"},t="\u8bbe\u8ba1\u6a21\u5f0f",s={id:"bjpowernode/Java\u57fa\u7840/\u8bbe\u8ba1\u6a21\u5f0f",title:"\u8bbe\u8ba1\u6a21\u5f0f",description:"1 \u521b\u5efa\u578bcreate",source:"@site/docs/bjpowernode/01-Java\u57fa\u7840/06-\u8bbe\u8ba1\u6a21\u5f0f.md",sourceDirName:"bjpowernode/01-Java\u57fa\u7840",slug:"/bjpowernode/Java\u57fa\u7840/\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/bjpowernode/Java\u57fa\u7840/\u8bbe\u8ba1\u6a21\u5f0f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"6. \u8bbe\u8ba1\u6a21\u5f0f"},sidebar:"defaultSidebar",previous:{title:"5. JVM",permalink:"/bjpowernode/Java\u57fa\u7840/JVM"},next:{title:"9. Oracle",permalink:"/bjpowernode/Java\u57fa\u7840/Oracle\uff08\u9009\u5b66\uff09"}},c={},a=[{value:"1 \u521b\u5efa\u578bcreate",id:"1-\u521b\u5efa\u578bcreate",level:2},{value:"1.1 \u5355\u4f8b\uff08Singleton\uff09",id:"11-\u5355\u4f8bsingleton",level:3},{value:"1.2 \u7b80\u5355\u5de5\u5382\uff08Simple Factory\uff09",id:"12-\u7b80\u5355\u5de5\u5382simple-factory",level:3},{value:"1.3 \u5de5\u5382\u65b9\u6cd5\uff08Factory Method\uff09",id:"13-\u5de5\u5382\u65b9\u6cd5factory-method",level:3},{value:"1.4 \u62bd\u8c61\u5de5\u5382\uff08Abstract Factory\uff09",id:"14-\u62bd\u8c61\u5de5\u5382abstract-factory",level:3},{value:"1.5 \u751f\u6210\u5668/\u5efa\u9020\u8005\uff08Builder\uff09",id:"15-\u751f\u6210\u5668\u5efa\u9020\u8005builder",level:3},{value:"1.6 \u539f\u578b\uff08Prototype\uff09",id:"16-\u539f\u578bprototype",level:3},{value:"2 \u884c\u4e3a\u578bbehavior",id:"2-\u884c\u4e3a\u578bbehavior",level:2},{value:"2.1 \u8d23\u4efb\u94fe\uff08Chain Of Responsibility\uff09",id:"21-\u8d23\u4efb\u94fechain-of-responsibility",level:3},{value:"2.2 \u547d\u4ee4\uff08Command\uff09",id:"22-\u547d\u4ee4command",level:3},{value:"2.3 \u89e3\u91ca\u5668\uff08Interpreter\uff09",id:"23-\u89e3\u91ca\u5668interpreter",level:3},{value:"2.4 \u8fed\u4ee3\u5668\uff08Iterator\uff09",id:"24-\u8fed\u4ee3\u5668iterator",level:3},{value:"2.5 \u4e2d\u4ecb\u8005\uff08Mediator\uff09",id:"25-\u4e2d\u4ecb\u8005mediator",level:3},{value:"2.6 \u5907\u5fd8\u5f55\uff08Memento\uff09",id:"26-\u5907\u5fd8\u5f55memento",level:3},{value:"2.7 \u89c2\u5bdf\u8005\uff08Observer\uff09",id:"27-\u89c2\u5bdf\u8005observer",level:3},{value:"2.8 \u72b6\u6001\uff08State\uff09",id:"28-\u72b6\u6001state",level:3},{value:"2.9 \u7b56\u7565\uff08Strategy\uff09",id:"29-\u7b56\u7565strategy",level:3},{value:"2.10 \u6a21\u677f\u65b9\u6cd5\uff08Template Method\uff09",id:"210-\u6a21\u677f\u65b9\u6cd5template-method",level:3},{value:"2.11 \u8bbf\u95ee\u8005\uff08Visitor\uff09",id:"211-\u8bbf\u95ee\u8005visitor",level:3},{value:"2.12 \u7a7a\u5bf9\u8c61\uff08Null\uff09",id:"212-\u7a7a\u5bf9\u8c61null",level:3},{value:"3 \u7ed3\u6784\u578bstructure",id:"3-\u7ed3\u6784\u578bstructure",level:2},{value:"3.1 \u9002\u914d\u5668\uff08Adapter\uff09",id:"31-\u9002\u914d\u5668adapter",level:3},{value:"3.2 \u6865\u63a5\uff08Bridge\uff09",id:"32-\u6865\u63a5bridge",level:3},{value:"3.3 \u7ec4\u5408\uff08Composite\uff09",id:"33-\u7ec4\u5408composite",level:3},{value:"3.4 \u88c5\u9970\uff08Decorator\uff09",id:"34-\u88c5\u9970decorator",level:3},{value:"3.5 \u5916\u89c2\uff08Facade\uff09",id:"35-\u5916\u89c2facade",level:3},{value:"3.6 \u4eab\u5143\uff08Flyweight\uff09",id:"36-\u4eab\u5143flyweight",level:3},{value:"3.7 \u4ee3\u7406\uff08Proxy\uff09",id:"37-\u4ee3\u7406proxy",level:3}];function o(e){const n={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u8bbe\u8ba1\u6a21\u5f0f",children:"\u8bbe\u8ba1\u6a21\u5f0f"}),"\n",(0,i.jsx)(n.h2,{id:"1-\u521b\u5efa\u578bcreate",children:"1 \u521b\u5efa\u578bcreate"}),"\n",(0,i.jsx)(n.h3,{id:"11-\u5355\u4f8bsingleton",children:"1.1 \u5355\u4f8b\uff08Singleton\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u786e\u4fdd\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5e76\u63d0\u4f9b\u8be5\u5b9e\u4f8b\u7684\u5168\u5c40\u8bbf\u95ee\u70b9\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"12-\u7b80\u5355\u5de5\u5382simple-factory",children:"1.2 \u7b80\u5355\u5de5\u5382\uff08Simple Factory\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\u4e0d\u5411\u5ba2\u6237\u66b4\u9732\u5185\u90e8\u7ec6\u8282\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u521b\u5efa\u5bf9\u8c61\u7684\u901a\u7528\u63a5\u53e3\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"13-\u5de5\u5382\u65b9\u6cd5factory-method",children:"1.3 \u5de5\u5382\u65b9\u6cd5\uff08Factory Method\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u521b\u5efa\u5bf9\u8c61\u7684\u63a5\u53e3\uff0c\u4f46\u7531\u5b50\u7c7b\u51b3\u5b9a\u8981\u5b9e\u4f8b\u5316\u54ea\u4e2a\u7c7b\u3002\u5de5\u5382\u65b9\u6cd5\u628a\u5b9e\u4f8b\u5316\u64cd\u4f5c\u63a8\u8fdf\u5230\u5b50\u7c7b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"14-\u62bd\u8c61\u5de5\u5382abstract-factory",children:"1.4 \u62bd\u8c61\u5de5\u5382\uff08Abstract Factory\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u521b\u5efa\u7684\u662f\u5bf9\u8c61\u5bb6\u65cf\uff0c\u5e76\u4e14\u8fd9\u4e9b\u5bf9\u8c61\u662f\u76f8\u5173\u7684\uff0c\u5373\u5fc5\u987b\u4e00\u8d77\u521b\u5efa\u51fa\u6765\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"15-\u751f\u6210\u5668\u5efa\u9020\u8005builder",children:"1.5 \u751f\u6210\u5668/\u5efa\u9020\u8005\uff08Builder\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c01\u88c5\u4e00\u4e2a\u5bf9\u8c61\u7684\u6784\u9020\u8fc7\u7a0b\uff0c\u5e76\u5141\u8bb8\u6309\u6b65\u9aa4\u6784\u9020\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"16-\u539f\u578bprototype",children:"1.6 \u539f\u578b\uff08Prototype\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u539f\u578b\u5b9e\u4f8b\u6307\u5b9a\u8981\u521b\u5efa\u5bf9\u8c61\u7684\u7c7b\u578b\uff0c\u901a\u8fc7\u590d\u5236\u8fd9\u4e2a\u539f\u578b\u6765\u521b\u5efa\u65b0\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-\u884c\u4e3a\u578bbehavior",children:"2 \u884c\u4e3a\u578bbehavior"}),"\n",(0,i.jsx)(n.h3,{id:"21-\u8d23\u4efb\u94fechain-of-responsibility",children:"2.1 \u8d23\u4efb\u94fe\uff08Chain Of Responsibility\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u591a\u4e2a\u5bf9\u8c61\u90fd\u6709\u673a\u4f1a\u5904\u7406\u8bf7\u6c42\uff0c\u4ece\u800c\u907f\u514d\u8bf7\u6c42\u7684\u53d1\u9001\u8005\u548c\u63a5\u6536\u8005\u4e4b\u95f4\u7684\u8026\u5408\u5173\u7cfb\u3002\u5c06\u8fd9\u4e9b\u5bf9\u8c61\u8fde\u6210\u4e00\u6761\u94fe\uff0c\u5e76\u6cbf\u7740\u8fd9\u6761\u94fe\u53d1\u9001\u8be5\u8bf7\u6c42\uff0c\u76f4\u5230\u6709\u4e00\u4e2a\u5bf9\u8c61\u5904\u7406\u5b83\u4e3a\u6b62\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-\u547d\u4ee4command",children:"2.2 \u547d\u4ee4\uff08Command\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5141\u8bb8\u5bf9\u8c61\u5728\u5185\u90e8\u72b6\u6001\u6539\u53d8\u65f6\u6539\u53d8\u5b83\u7684\u884c\u4e3a\uff0c\u5bf9\u8c61\u770b\u8d77\u6765\u597d\u50cf\u4fee\u6539\u4e86\u5b83\u6240\u5c5e\u7684\u7c7b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"23-\u89e3\u91ca\u5668interpreter",children:"2.3 \u89e3\u91ca\u5668\uff08Interpreter\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e3a\u8bed\u8a00\u521b\u5efa\u89e3\u91ca\u5668\uff0c\u901a\u5e38\u7531\u8bed\u8a00\u7684\u8bed\u6cd5\u548c\u8bed\u6cd5\u5206\u6790\u6765\u5b9a\u4e49\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"24-\u8fed\u4ee3\u5668iterator",children:"2.4 \u8fed\u4ee3\u5668\uff08Iterator\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u63d0\u4f9b\u4e00\u79cd\u987a\u5e8f\u8bbf\u95ee\u805a\u5408\u5bf9\u8c61\u5143\u7d20\u7684\u65b9\u6cd5\uff0c\u5e76\u4e14\u4e0d\u66b4\u9732\u805a\u5408\u5bf9\u8c61\u7684\u5185\u90e8\u8868\u793a\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"25-\u4e2d\u4ecb\u8005mediator",children:"2.5 \u4e2d\u4ecb\u8005\uff08Mediator\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u96c6\u4e2d\u76f8\u5173\u5bf9\u8c61\u4e4b\u95f4\u590d\u6742\u7684\u6c9f\u901a\u548c\u63a7\u5236\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"26-\u5907\u5fd8\u5f55memento",children:"2.6 \u5907\u5fd8\u5f55\uff08Memento\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728\u4e0d\u8fdd\u53cd\u5c01\u88c5\u7684\u60c5\u51b5\u4e0b\u83b7\u5f97\u5bf9\u8c61\u7684\u5185\u90e8\u72b6\u6001\uff0c\u4ece\u800c\u5728\u9700\u8981\u65f6\u53ef\u4ee5\u5c06\u5bf9\u8c61\u6062\u590d\u5230\u6700\u521d\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"27-\u89c2\u5bdf\u8005observer",children:"2.7 \u89c2\u5bdf\u8005\uff08Observer\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9a\u4e49\u5bf9\u8c61\u4e4b\u95f4\u7684\u4e00\u5bf9\u591a\u4f9d\u8d56\uff0c\u5f53\u4e00\u4e2a\u5bf9\u8c61\u72b6\u6001\u6539\u53d8\u65f6\uff0c\u5b83\u7684\u6240\u6709\u4f9d\u8d56\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u5e76\u4e14\u81ea\u52a8\u66f4\u65b0\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"28-\u72b6\u6001state",children:"2.8 \u72b6\u6001\uff08State\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5141\u8bb8\u5bf9\u8c61\u5728\u5185\u90e8\u72b6\u6001\u6539\u53d8\u65f6\u6539\u53d8\u5b83\u7684\u884c\u4e3a\uff0c\u5bf9\u8c61\u770b\u8d77\u6765\u597d\u50cf\u4fee\u6539\u4e86\u5b83\u6240\u5c5e\u7684\u7c7b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"29-\u7b56\u7565strategy",children:"2.9 \u7b56\u7565\uff08Strategy\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9a\u4e49\u4e00\u7cfb\u5217\u7b97\u6cd5\uff0c\u5c01\u88c5\u6bcf\u4e2a\u7b97\u6cd5\uff0c\u5e76\u4f7f\u5b83\u4eec\u53ef\u4ee5\u4e92\u6362\u3002\u8fd9\u79cd\u7b56\u7565\u53ef\u4ee5\u8ba9\u7b97\u6cd5\u72ec\u7acb\u4e8e\u4f7f\u7528\u5b83\u7684\u5ba2\u6237\u7aef\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"210-\u6a21\u677f\u65b9\u6cd5template-method",children:"2.10 \u6a21\u677f\u65b9\u6cd5\uff08Template Method\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9a\u4e49\u7b97\u6cd5\u6846\u67b6\uff0c\u5e76\u5c06\u4e00\u4e9b\u6b65\u9aa4\u7684\u5b9e\u73b0\u5ef6\u8fdf\u5230\u5b50\u7c7b\u3002\u901a\u8fc7\u6a21\u677f\u65b9\u6cd5\uff0c\u5b50\u7c7b\u53ef\u4ee5\u91cd\u65b0\u5b9a\u4e49\u7b97\u6cd5\u7684\u67d0\u4e9b\u6b65\u9aa4\uff0c\u800c\u4e0d\u7528\u6539\u53d8\u7b97\u6cd5\u7684\u7ed3\u6784\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"211-\u8bbf\u95ee\u8005visitor",children:"2.11 \u8bbf\u95ee\u8005\uff08Visitor\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u7ed3\u6784\uff08\u6bd4\u5982\u7ec4\u5408\u7ed3\u6784\uff09\u589e\u52a0\u65b0\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"212-\u7a7a\u5bf9\u8c61null",children:"2.12 \u7a7a\u5bf9\u8c61\uff08Null\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u4ec0\u4e48\u90fd\u4e0d\u505a\u7684\u7a7a\u5bf9\u8c61\u6765\u4ee3\u66ff NULL\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-\u7ed3\u6784\u578bstructure",children:"3 \u7ed3\u6784\u578bstructure"}),"\n",(0,i.jsx)(n.h3,{id:"31-\u9002\u914d\u5668adapter",children:"3.1 \u9002\u914d\u5668\uff08Adapter\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u628a\u4e00\u4e2a\u7c7b\u63a5\u53e3\u8f6c\u6362\u6210\u53e6\u4e00\u4e2a\u7528\u6237\u9700\u8981\u7684\u63a5\u53e3\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"32-\u6865\u63a5bridge",children:"3.2 \u6865\u63a5\uff08Bridge\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c06\u62bd\u8c61\u4e0e\u5b9e\u73b0\u5206\u79bb\u5f00\u6765\uff0c\u4f7f\u5b83\u4eec\u53ef\u4ee5\u72ec\u7acb\u53d8\u5316\uff0c\u5373\u5c06\u7ee7\u627f\u6539\u4e3a\u7ec4\u5408\uff0c\u62bd\u53d6\u5176\u4e2d\u4e00\u4e2a\u7ef4\u5ea6\u4f7f\u4e4b\u6210\u4e3a\u72ec\u7acb\u7684\u7c7b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"33-\u7ec4\u5408composite",children:"3.3 \u7ec4\u5408\uff08Composite\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c06\u5bf9\u8c61\u7ec4\u5408\u6210\u6811\u5f62\u7ed3\u6784\u6765\u8868\u793a\u201c\u6574\u4f53/\u90e8\u5206\u201d\u5c42\u6b21\u5173\u7cfb\uff0c\u5141\u8bb8\u7528\u6237\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u5904\u7406\u5355\u72ec\u5bf9\u8c61\u548c\u7ec4\u5408\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"34-\u88c5\u9970decorator",children:"3.4 \u88c5\u9970\uff08Decorator\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e3a\u5bf9\u8c61\u52a8\u6001\u6dfb\u52a0\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"35-\u5916\u89c2facade",children:"3.5 \u5916\u89c2\uff08Facade\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7edf\u4e00\u7684\u5bf9\u5916\u63a5\u53e3\uff0c\u5c01\u88c5\u5b50\u7cfb\u7edf\u4e2d\u7684\u4e00\u7fa4\u63a5\u53e3\uff0c\u4ece\u800c\u8ba9\u5b50\u7cfb\u7edf\u66f4\u5bb9\u6613\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"36-\u4eab\u5143flyweight",children:"3.6 \u4eab\u5143\uff08Flyweight\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5229\u7528\u5171\u4eab\u7684\u65b9\u5f0f\u6765\u652f\u6301\u5927\u91cf\u7684\u7ec6\u7c92\u5ea6\u5bf9\u8c61\uff0c\u628a\u5171\u540c\u7684\u90e8\u5206\u62bd\u8c61\u51fa\u6765\uff0c\u9488\u5bf9\u76f8\u540c\u7684\u4e1a\u52a1\u8bf7\u6c42\uff0c\u76f4\u63a5\u8fd4\u56de\u5185\u5b58\u4e2d\u7684\u5df2\u5b58\u5728\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"37-\u4ee3\u7406proxy",children:"3.7 \u4ee3\u7406\uff08Proxy\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u63a7\u5236\u5bf9\u5176\u5b83\u5bf9\u8c61\u7684\u8bbf\u95ee\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>s});var i=l(6540);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);