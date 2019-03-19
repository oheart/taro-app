import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.less";
import Child from './Child'

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  state = {
    name: "李四"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  click() {
    this.setState({
      name: "张三"
    }, function(){
      console.log('name:', this.state.name)
    });
  }

  change(){
    console.log('change')
    this.setState({
      name: '改变name值'
    })
  }

  render() {
    return (
      <View className="index">
        <Child name={this.state.name} onchange={this.change.bind(this)} />
        <Button   onClick={this.click}>改变名字</Button>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}
