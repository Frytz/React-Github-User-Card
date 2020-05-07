import React from 'react'
import Axios from "axios";
export default class App extends React.Component {
constructor(){
  super();
  this.state = {

  }
}

componentDidMount(){
  this.fetchData();
}

fetchData = () => {
  Axios("https://api.github.com/users/Frytz")
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log('err', err)
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github User Card with React</h1>
        </header>
      </div>
    );
  }
}

