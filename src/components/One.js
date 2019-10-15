import React from 'react'
import Store from '../store/index'

class One extends React.Component{
    state={
        name:Store.state.name,
        age:Store.state.age
    }
    render(){
        return (
            <div>
                <h1>One</h1>
                <p>state：{this.state.name}</p>
                <p>store：{Store.state.name}</p>
                
                <button onClick={this.changN.bind(this,'flux好绕')}>改变name</button>
                <p>storeAge：{Store.state.age}</p>
            </div>
        )
    }
    changN(x){
       Store.dispatcher.dispatch({
        actionType:'changName',
        actionParams:x
       }) 
    //    console.log(Store.state.name)
       
    }
    componentDidMount(){
        Store.state.on('chang',()=>{
            this.setState({
                name:Store.state.name
            })
        })
    }
}
export default One