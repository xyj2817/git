import React from 'react'
import Store from '../store/index'

class Two extends React.Component{
    state={
        name:Store.state.name,
        age:Store.state.age

    }
    render(){
        return (
            <div>
                <h1>Two</h1>
                <p>state:{this.state.name}</p>
                <p>store:{Store.state.name}</p>
                <button onClick={this.changA.bind(this,100)}>改变年龄</button>
                <p>storeAge：{Store.state.age}</p>
            </div>
        )
    }
    changA(x){
        Store.dispatcher.dispatch({
            actionType:'changAge',
            actionParams:x
        })
        console.log(Store.state.age)
        
    }
    componentDidMount(){
        Store.state.on('chang',()=>{
            this.setState({
                name:Store.state.name,
                age:Store.state.age

            })
        })
    }
}
export default Two