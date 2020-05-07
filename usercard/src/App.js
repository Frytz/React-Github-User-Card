import React from 'react'
import Axios from "axios";

import './App.css';
export default class App extends React.Component {
constructor(){
  super();
  this.state = {
        user: [],
        followers:[]
  }
}

componentDidMount(){
  this.fetchData();
}

fetchData = () => {
  Axios("https://api.github.com/users/Frytz")
  .then(res => {
    console.log(res.data)
    this.setState({...this.state, user: res.data})
    console.log(this.state)
  })
  .catch(err => {
    console.log('err', err)
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">Github User Card with React</h1>
        </header>
      </div>
    );
  }
}

