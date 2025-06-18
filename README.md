# 1 [GitBook](https://www.gitbook.com/)（已淘汰）
1. `Node.js` 版本：`10.14.1`
2. 操作命令：
    1. `gitbook init`：初始化
    2. `gitbook build`：构建
    3. `gitbook serve`：预览
        - 预览地址：http://localhost:4000/
        - 运行后生成 `_book` 文件夹

# 2 [Docusaurus](https://docusaurus.io/)（正在使用中）
1. 操作命令：
    1. `npm run build`：构建
    2. `npm run start`：预览
        - 预览地址：http://localhost:3000/
    3. [部署到Github Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages)

:::danger
不能删除 `/static/.nojekyll` 文件！！！
:::