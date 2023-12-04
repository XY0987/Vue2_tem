下载依赖(下载依赖之后会开启prettier和ESLint以及[git提交规范](https://github.com/conventional-changelog/commitlint/#what-is-commitlint))

```shell
yarn
```

使用脚手架创建的项目会默认初始化一个空的git仓库，如果想要关联github仓库，执行以下命令

```shell
git branch -M main
```

```shell
git remote add origin 仓库地址
```

## 项目说明

该项目是脚手架xytem的vue2模板仓库，包含了我写vue2项目的一些经验，目的是为了避免使用官方脚手架生成项目之后，仍需要下载很多东西，比如axios、element-ui等，同时还需要添加平常写项目的一些自己写的工具，具体效果可以运行项目进入/demo看实际效果

> 采用技术栈
> vue2 + element-ui + vue-router + vuex + axios + sass

> 本项目禹脚手架创建的项目区别如下
>
> 1. 常用**element-ui** 组件的全局注册，比如Icon、Button、Form、FormItem等，具体详情可以看main.js入口文件
> 2. 原型挂载element-ui的MessageBox.confirm（可以通过this.$confirm全局调用）和Message（可通过this.$message全局调用）
> 3. 登录信息持久化
> 4. From表单和常用Form表单组件进行二次封装以及后台页面的二次封装

> 除上述每个项目都拥有的功能之外，还可以通过脚手架生成对应功能的工具以及测试页面（包括node写的后台接口）
>
> 1. canvas实现的弹幕
> 2. 采用webrtc实现点对点音视频通话以及多对多直播会议
> 3. 瀑布流以及无限滚动列表(包含图片虚拟代理优化)

## 模板项目的其他设置

1. 代理设置
   修改vue.config.js对应的代理地址
2. 登录注册以及忘记密码页面配置
3. demo页面演示，如果不想使用直接把demo文件夹山粗和即可ing移除router的index.js对应的引入
