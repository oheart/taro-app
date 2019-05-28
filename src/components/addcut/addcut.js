import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './addcut.less'
class AddCut extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            Num: 0
        };
    }
    CutFood(){
       
    }
    AddFood(){

    }
    render(){
        return (
            <View className="addcut"> 
                <Image onClick={this.CutFood.bind(this)} className="operate-img" src={require('../../assets/img/cut.png')}></Image>
                <Text className="food-num">{this.state.Num}</Text>
                <Image onClick={this.AddFood.bind(this)} className="operate-img" src={require('../../assets/img/add.png')}></Image>
            </View>
        )
    }
}

export default AddCut