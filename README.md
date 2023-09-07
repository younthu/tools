# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).

# Commands

1. `npm run fetch:blocks`, 没有什么变化，好像 pro v3 complete 已经运行这个了。
   1. https://umijs.org/docs/guides/getting-started
2. https://github.com/vuejs/core/blob/main/.github/commit-convention.md, 代码 commit convention

   ```
   [<emoji>] [revert: ?]<type>[(scope)?]: <message>

        💥 feat(compiler): add 'comments' option
        🐛 fix(compiler): fix some bug
        📝 docs(compiler): add some docs
        🌷 UI(compiler): better styles
        🏰 chore(compiler): Made some changes to the scaffolding
        🌐 locale(compiler): Made a small contribution to internationalization

        Other commit types: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep

        See https://github.com/vuejs/core/blob/main/.github/commit-convention.md
   ```

3. a

# Docker

1.
2.
3. docker copy 自https://github.com/ant-design/ant-design-pro/issues/10502#issuecomment-1383134945
4. 执行下面的命令启动 docker
   ```sh
     docker build -t tools-ui:latest -f Dockerfile . || echo 'docker build error'
     docker run -d -p 80:80 xxx:${VERSION}
   ```
5. 启动容器: `docker run -p 8000:80 tools-ui`
