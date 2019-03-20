### Taro安装
- npm install -g @tarojs/cli 

### Taro使用
- taro init taro-app  初始化项目
- npm run dev:h5
- npm run dev:weapp

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
