import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './foodlist.less'

class FoodList extends Component{
    constructor(){
        super(...arguments);
        this.state = {};
    }
    render(){
        console.log(JSON.stringify(this.props.currentList));
        let {selCate, currentList} = this.props;
        return (
            <View className="foodlist">
                 <Text>{selCate ? selCate.name : ""}</Text>
                 <View class="foodlist-forlist">
                 {
                     currentList.map((item, index) => {
                         return (
                             <View key={item.id} className="foodlist-item">
                                <Image className="foodlist-item-img" src={item.img == 2 ? require('../../assets/img/2.jpg') : require('../../assets/img/1.jpg')}></Image>
                                <View className="foodlist-item-info">
                                    <Text>{item.title}</Text>
                                    <Text>月售：{item.sale}</Text>
                                    <Text className="price">￥{item.price}</Text>
                                </View>
                             </View>
                         )
                     })
                 }
                 </View>
            </View>
        )
    }
}

export default FoodList;