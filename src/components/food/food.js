import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import Cate from './cate'
import FoodList from './foodlist'
import './food.less'



class Food extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            current: 0,
            tabList: [{title: '点菜'},{title: '评价'},{title: '商家'}],
            foodList: [],
            currentList: [],
            selCate: null
        };
    }
    changeTab(value){
        this.setState({
           current: value
        })
    }
    // 切换分类
    changeCate(selCate){
        if(this.state.foodList.some(item => item.pid == selCate.id)){
            // 不用加载数据
            this.setState({
                currentList:  this.state.foodList.filter(item => item.pid == selCate.id)
            })
        }else{
            // 需要加载数据
            this.setState({
               foodList: this.state.foodList.concat(this.getData(selCate))
            }, ()=>{
                this.setState({currentList: this.state.foodList.filter(item => item.pid == selCate.id)})
            })
        }
    }
    getData(selCate){ // 模拟生成数据
        let count = Math.round(Math.random()*2);
        let imgurl = `../../assets/img/${count}.jpg`;
        return Array.from(Array(Math.round(Math.random()*20)), (v, k) => ({pid: selCate.id,id: selCate.id + "_" + k,title: selCate.id + "菜品" + (k + 1), img: imgurl, sale: Math.round(Math.random()*50), price: Math.round(Math.random()*20) }));
    }
    render(){
        let{current, tabList, currentList, selCate} = this.state;
        return (
            <View>
                <AtTabs current={current} tabList={tabList}
                    onClick={this.changeTab.bind(this)}>
                    <AtTabsPane current={current} index={0} >
                        <View className="food-body">
                            <Cate onChangeCate={this.changeCate.bind(this)}></Cate>
                            <FoodList selCate={selCate} currentList={currentList}></FoodList>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={1}>
                        <View>评价</View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={2}>
                        <View>商家</View>
                    </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}

export default Food;