import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './cate.less'
import {getEvent} from '../../utils/common'
let event = getEvent();

class Cate extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            selCate: null,
            cate:[
                {
                    id: "1",
                    name: "专场"
                },
                {
                    id: "2",
                    name: "热销"
                },
                {
                    id: "3",
                    name: "折扣"
                },
                {
                    id: "4",
                    name: "主食"
                },
                {
                    id: "5",
                    name: "热炒"
                },
                {
                    id: "6",
                    name: "凉菜"
                },
                {
                    id: "7",
                    name: "冷饮"
                } 
            ]
        };
    }
    clickHanlde(item){
        if(this.state.selCate && this.state.selCate.id != item.id){
            this.setState({
                selCate: item
            }, ()=> {
                this.props.onChangeCate && this.props.onChangeCate(this.state.selCate);
            })
            event.emit('changeCate');
        }else if(!this.state.selCate){
            this.setState({
                selCate: item
            }, ()=> {
                this.props.onChangeCate && this.props.onChangeCate(this.state.selCate);
            })
            event.emit('changeCate');
        }
    }
    render(){
        let {cate, selCate} = this.state;
        return (
            <View className='cate'>
                {
                    cate.map((item, index) => {
                        return <Text className={"cate-name" + ((selCate && selCate.id == item.id) ? ' sel' : '')} key={item.id}
                                    onClick={this.clickHanlde.bind(this, item)}>
                                    {item.name}
                                </Text>
                    })
                }
            </View>
        )
    }
}

export default Cate;