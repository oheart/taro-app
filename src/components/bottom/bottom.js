import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {getAllFoodInfo, getEvent} from '../../utils/common'
import './bottom.less'
let events = getEvent();
class Bottom extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            Num: 0,
            sendPrice: 0, // 配送费
            supportTakeBySelf: false,
            sendMustPrice: 20, // 满多少起送
            allPrice: 0 // 总价
        };
    }
    componentDidMount(){
        // 获取计算好的设置给state
        let {allPrice, allNum} = getAllFoodInfo();
        this.setState({ Num: allNum,allPrice: allPrice });
        events.on("addcut", ()=> {
            // 菜品发生变化
            let {allPrice, allNum} = getAllFoodInfo();
            this.setState({ Num: allNum,allPrice: allPrice });
        })
    }
    render(){
        let {allPrice, Num, sendPrice, supportTakeBySelf, sendMustPrice} = this.state;
        return (
            <View className="bottom">
                <View className="bottom-body">
                    {Num ? <Text className="num">{Num}</Text> : null }
                    <Image className="store-img" src={Num ? require('../../assets/img/foodstore.png') : require('../../assets/img/emptystore.png')}></Image>
                    <View className="info">
                        { allPrice ? <Text className="price">{"￥" + allPrice}</Text> : <Text>{sendPrice ? "另需配送费￥" + sendPrice  + "  |  ": ""}</Text> }
                        <Text>{supportTakeBySelf ? "支持自取" : "不支持自取"}</Text>
                    </View>
                    <View className="submit">
                        <Text>{allPrice >= sendMustPrice ? <Text className="go-pay">去结算</Text>: (sendMustPrice ? "￥" + sendMustPrice + "起送" : "")}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Bottom