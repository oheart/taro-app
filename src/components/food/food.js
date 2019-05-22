import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'


class Food extends Component{
    constructor(){
        super(...arguments);
        this.state = {};
    }
    render(){
        return (
            <View>
                food
                <AtTabs tabList={[{title: "标签一"}, {title: "标签二"}]}></AtTabs>
            </View>
        )
    }
}

export default Food;