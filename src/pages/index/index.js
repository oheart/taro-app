import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.less";
import Head from '../../components/head/head'
import Food from '../../components/food/food'

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  constructor(){
    super(...arguments)
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Head />
        <Food />
      </View>
    );
  }
}
