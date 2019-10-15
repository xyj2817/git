//1.从flux  里面引入  dispatcher
import { Dispatcher } from 'flux'

//引入事件触发器
import EventEmitter from 'events'

class State extends EventEmitter{
    name='ujiuye';
    age=20
}

var state = new State()

//2.创建一个数据
// var state = {
//     name:'ujiuye'
// }

//  规定你要执行的任务 {actionType:'changName',actionParams:'offcn'}

//3.实例化派发器
var dispatcher = new Dispatcher()

//4.注册派发器
dispatcher.register((action)=>{
    switch(action.actionType){
        case 'changName':
            state.name=action.actionParams;
            // state.emit('chang')
            break;
        case 'changAge':
            state.age= action.actionParams;
            // state.emit('chang')
            break;   
    }
})


 export default {
     state,
     dispatcher
 }
