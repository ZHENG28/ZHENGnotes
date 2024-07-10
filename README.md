<font color="red">使用低版本（version 10.14.1）的nodejs</font>

1. gitbook init：初始化gitbook
2. gitbook build：构建gitbook
3. gitbook serve：预览gitbook
    1) 地址：http://localhost:4000/
    2) 运行后会生成_book文件夹


# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
