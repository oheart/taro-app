### Taro安装
- npm install -g @tarojs/cli 

### Taro使用
- taro init taro-app  初始化项目
- npm run dev:h5  网页端运行
- npm run dev:weapp  小程序端运行

### state异步
想要同步获取需要用callback
```js
this.setState({
      name: "张三"
    }, function(){
      // 回调中获取到设置完的state值
      console.log('name:', this.state.name)
    });
```

### Props传值
自定义组件中接收的来自父组件的传值统称为Props
当传递Props的值是函数时，必须再用on+函数名的规范来命名

### Taro生命周期
- H5与小程序有差别
- React框架中的生命周期函数被保留
- 新增支持小程序的几个生命周期

### 语法规范
- React语法规范
- 支持JSX语法
- 适配小程序 部分语法不支持

### 生命周期
- app.js入口文件特殊，其生命周期不全
- 页面没有componentWillReceiveProps
- Taro区分页面和组件 React认为一切皆组件

### 兄弟组件交互
- 通过上层组件的state作为媒介推送给子组件数据
- 通过事件订阅机制
- 通过Redux进行状态树维护（同步、异步redux）

### 页面布局
- flex布局
- 组件化拆分的组件自上而下自左向右拆分
- 图片资源展示需要通过Image组件

### 总结
- 页面按照组件拆分
- 实现页面布局
- 定义数据结构（了解需求、业务）
- 完善数据与视图层逻辑



