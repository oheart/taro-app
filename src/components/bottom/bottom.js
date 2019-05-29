import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './bottom.less'
class Bottom extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            Num: 0,
            sendPrice: 0, // 配送费
            supportTakeBySelf: false,
            sendMustPrice: 20 // 满多少起送
        };
    }
    render(){
        let {Num, sendPrice, supportTakeBySelf, sendMustPrice} = this.state;
        return (
            <View className="bottom">
                <View className="bottom-body">
                    {Num ? <Text className="num">{this.state.Num}</Text> : null }
                    <Image className="store-img" src={require('../../assets/img/emptystore.png')}></Image>
                    <View className="info">
                        <Text>{sendPrice ? "另需配送费￥" + sendPrice  + "  |  ": ""}</Text>
                        <Text>{supportTakeBySelf ? "支持自取" : "不支持自取"}</Text>
                    </View>
                    <View className="submit">
                        <Text>{sendMustPrice ? "￥" + sendMustPrice + "起送" : ""}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Bottom