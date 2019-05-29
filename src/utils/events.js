const events = {};
class Event{
    constructor(){
        this.events = {};
    }
    on(eventName, callback){ // 监听
        if(this.events[eventName]){
            // 存在事件
            this.events[eventName].push(callback);
        }else{
            // 不存在事件
            this.events[eventName] = [callback];
        }
    }
    emit(eventName, params){ // 触发
        if(this.events[eventName]){
            this.events[eventName].map((callback) => {
                callback(params);
            })
        }
    }
}

export default Event