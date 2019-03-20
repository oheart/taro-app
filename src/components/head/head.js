import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import Top from './top'
import Activity from './activity'
import './head.less'


class Head extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            store: {
                title: '川香居',
                notice: '欢迎光临，很高兴为您服务~',
                tags: ['味道赞', '主食真好', '分量足']
            }
        }
    }
    render(){
        let {store} = this.state;
        return (
            <View className="head">
                <Top />
                <Image className="back" src={require('../../assets/img/head_bg.jpg')}></Image>
                <View className="store">
                    <Image className="store-img" src={require('../../assets/img/store.jpg')}></Image>
                    <View className="store-text">
                        <Text>{store.title}</Text>
                        <Text>{store.notice}</Text>
                        <View>
                            {store.tags.map((item, index) => <Text className="tags-text" key={index}>{item}</Text>)}
                        </View>
                    </View>
                </View>
                <Activity/>
            </View>
        )
    }
}

export default Head;