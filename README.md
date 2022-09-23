## Low-Code Engine Demo

场景列表：

- [index](https://lowcode-engine.cn/demo/index.html)
- [basic-fusion](https://lowcode-engine.cn/demo/basic-fusion.html)（此 fusion 的元数据描述是很老的版本，只为了示意描述结构，请勿用于生产环境）
- [basic-antd](https://lowcode-engine.cn/demo/basic-antd.html)
- [basic-fusion-with-single-component](https://lowcode-engine.cn/demo/basic-fusion-with-single-component.html)
- [custom-initialization](https://lowcode-engine.cn/demo/custom-initialization.html)
- [node-extended-actions](https://lowcode-engine.cn/demo/node-extended-actions.html)
- [next-pro](https://lowcode-engine.cn/demo/next-pro.html)
- [antd-pro-with-formily](https://lowcode-engine.cn/demo/antd-pro-with-formily.html)

更多参考资料：

- [马上玩一下](https://lowcode-engine.cn/demo/index.html)
- [低代码引擎官网](http://lowcode-engine.cn)
- [引擎主包](https://github.com/alibaba/lowcode-engine)

  "dependencies": {
  "@alilc/lowcode-datasource-fetch-handler": "^1.0.1", // 封装的数据源请求方法-fetch
  "@alilc/lowcode-plugin-code-editor": "^1.0.3", //代码编辑器 - 插件
  "@alilc/lowcode-setter-title": "^1.0.2", //设置器名
  "@alilc/lowcode-plugin-inject": "^1.0.0", //调试功能
  "@alilc/lowcode-plugin-manual": "^1.0.3", //「低代码产品使用文档」-按钮
  "@alilc/lowcode-plugin-components-pane": "^1.0.2", //组件面板
  "antd": "^4.21.4",
  "moment": "^2.29.3",
  "sass": "^1.54.5",
  "uuid": "^8.3.2"
  },
  "devDependencies": {
  "@alib/build-scripts": "^0.1.18", // ali 专属集成打包插件
  "@alilc/lowcode-engine": "^1.0.13", // 引擎(开发)
  "@types/react": "^16.8.3", //react 相关模块声明文件
  "fs-extra": "^10.0.1",
  "tsconfig-paths-webpack-plugin": "^3.2.0",
  "build-plugin-moment-locales": "^0.1.0", //moment 打包插件
  "build-plugin-react-app": "^1.1.2",//react 打包插件
  //同声明
  "@types/react-dom": "^16.8.2",
  "@types/streamsaver": "^2.0.0",
  "@types/uuid": "^8.3.4",
  }

  必须
  {
  lowcode-engine,
  lowcode-engine-ext,
  fs-extra,
  react, // cdn ts 声明文件
  react-dom, //cdn ts 声明文件
  vue,
  tsconfig-paths-webpack-plugin //打包插件-ts 配置
  }

## 静态资源对应地址(暂定):

(必须)
https://unpkg.com/vue/dist/vue.runtime.global.js
https://unpkg.com/@knxcloud/lowcode-vue-simulator-renderer/dist/vue-simulator-renderer.js,
https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.prod.js
https:////unpkg.com/@knxcloud/lowcode-vue-renderer/dist/vue-renderer.js

https://g.alicdn.com/code/lib/react/16.13.1/umd/react.production.min.js
https://g.alicdn.com/code/lib/react-dom/16.13.1/umd/react-dom.production.min.js
https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js
https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js
https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js
https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js
https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js
https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.13/dist/js/engine-core.js
https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.3/dist/js/engine-ext.js
https://unpkg.com/@knxcloud/lowcode-vue-simulator-renderer/dist/vue-simulator-renderer.css,
https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/variables.css
https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/dist/next.var.min.css
https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.13/dist/css/engine-core.css
https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.3/dist/css/engine-ext.css
资产包(非必需)
naive-ui:https://unpkg.com/naive-ui@2.32.0/dist/index.prod.js
next-ui 内部依赖
http://at.alicdn.com/t/font_2761185_gdpwg9vnz7.js //--字体

资源/插件的内部依赖(可替换)
next-css [官方插件使用----数据源插件图标,组件库插件图标,回退撤销图标,schama 插件图标]
http://at.alicdn.com/t/font_2896606_40w0asgq16c.woff  
http://at.alicdn.com/t/font_2896606_40w0asgq16c.ttf
http://at.alicdn.com/t/font_515771_xjdbujl2iu.woff2
http://at.alicdn.com/t/font_515771_xjdbujl2iu.woff
http://at.alicdn.com/t/font_515771_xjdbujl2iu.ttf

源码查看插件-png(可替换)
https://gw.alicdn.com/imgextra/i2/O1CN01JwHaTf27MfJa2vYCZ_!!6000000007783-2-tps-128-128.png[]
