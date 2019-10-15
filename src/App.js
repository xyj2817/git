import React from 'react';
import './App.css';

import One from './components/One'
import Two from './components/Two'

import { Button } from 'antd';

import axios from 'axios'


class App extends React.Component{
  render(){
    return (
      <div>
        <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed" ghost='true'>Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
        <One/>
        <hr/>
        <Two/>
        
      </div>
    )
  }
  componentDidMount(){
    axios.post({
      url:'',
      params:{

      }
    }).then((res)=>{
      console.log(res)
    })
  }
}

export default App;
