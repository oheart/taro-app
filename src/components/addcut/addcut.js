import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './addcut.less'
import {getFoodCount, setFoodCount, getEvent} from '../../utils/common'
const myEvent = getEvent();
class AddCut extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            Num: 0
        };
    }
    componentDidMount(){
        this.setState({Num: getFoodCount(this.props.food)})
        myEvent.on("changeCate", ()=> {
            // 监听到分类改变进行菜品数量刷新
            this.setState({Num: getFoodCount(this.props.food)})
        });
    }
    CutFood(){
       if(this.props.food){
           if(this.state.Num > 0){
              setFoodCount(this.props.food, this.state.Num, "cut", ()=> {
                this.setState({Num: getFoodCount(this.props.food)})
                myEvent.emit("addcut");
              });
           }else{
               console.error('当前加减菜品出现异常')
           }
       }
    }
    AddFood(){
        if(this.props.food){
            setFoodCount(this.props.food, this.state.Num, "add", ()=> {
                this.setState({Num: getFoodCount(this.props.food)})
                myEvent.emit("addcut");
            });
        }
    }
    render(){
        let {Num} = this.state;
        let hideClass = Num > 0 ? "" : "hide";
        return (
            <View className="addcut"> 
                <Image onClick={this.CutFood.bind(this)} className={"operate-img " + hideClass} src={require('../../assets/img/cut.png')}></Image>
                <Text className={"food-num " + hideClass}>{this.state.Num}</Text>
                <Image onClick={this.AddFood.bind(this)} className="operate-img" src={require('../../assets/img/add.png')}></Image>
            </View>
        )
    }
}

export default AddCut