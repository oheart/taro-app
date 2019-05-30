// 获取菜品数量--通过传入的信息来统计当前有多少个菜品
// 缓存数据 H5 小程序
// {food.id: {菜品信息 Num}, }
import Taro from '@tarojs/taro'
import Event from './events'
const foodKey = "taro_meituan";
let myEvent = new Event(); // 实例化一个事件管理器
export function getFoodCount(food){
    let store = Taro.getStorageSync(foodKey);
    if(store && store[food.id]){
        // 菜品查找
        return store[food.id].Num;
    }else{
        return 0;
    }
}

// 设置菜品数量-当加菜或者减菜时触发, Num是由加减组件自身的state存储的
// 当减的数量等于0时，要删除菜品的数据结构
// 当加菜时，发现数据结构中没有该菜品 新增菜品数据结构
export function setFoodCount(food, Num, type, callback){
    if(food){
        let store = Taro.getStorageSync(foodKey);
        if(!store) store = {};
        if(type == "cut"){
            // 减菜
            if(Num == 1){
                // 删除菜品数据
                if(store[food.id]){
                    delete store[food.id];
                }
            }else{
                if(store[food.id]){
                   store[food.id].Num = Num - 1; // 数量减1，结构不变
                }
            }
            Taro.setStorageSync(foodKey, store); // 更新缓存数据
            callback && callback();
        }
        if(type == "add"){
            // 加菜
            if(store[food.id]){
                // 说明已经加过了
                store[food.id].Num  = Num + 1;
            }else{
                // 说明没有加过
                store[food.id] = {Num:1, ...food};
            }
            Taro.setStorageSync(foodKey, store); // 更新缓存数据
            callback && callback();
        }
    }
}

export function getEvent(){
    return myEvent
}

// 获取所有的菜品数量及价格
export function getAllFoodInfo(){
   let store =  Taro.getStorageSync(foodKey); // 获取菜品信息
   let allPrice = 0; // 总价格
   let allNum = 0; 
   if(store){ 
       Object.keys(store).map((key) => {
            // 对store进行遍历
            if(store[key]){
               allPrice += store[key].price * store[key].Num;
               allNum += store[key].Num;
            }
       })
   }
   return {allPrice, allNum}
}