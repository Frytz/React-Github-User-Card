import React from 'react'
import Axios from "axios";
import { Header} from './components/Header';

import UserCard from './components/UserCard';

import './App.css';
export default class App extends React.Component {
constructor(){
  super();
  this.state = {
    userName: "frytz",
        user: [],
        followers:[],
        following:[],
  }
}

componentDidMount(){
  this.fetchData();
}

fetchData = () => {
  Axios('https://api.github.com/users/' + this.state.userName)
  .then(res => {
    console.log(res.data)
    this.setState({...this.state, user: res.data})
    
    console.log(this.state)
  })
  .catch(err => {
    console.log('err', err)
  })
}
handleLoginChange =  e => {
this.setState({
  userName: e.target.value
})
};

handleLoginUpdate = e => {
Axios("https://api.github.com/users/" + this.state.userName).then((res) => {
  console.log(res.data);
  this.setState({ ...this.state, user: res.data });

  console.log(this.state);
});
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header user={this.state.user}>
           
          </Header> 
          <div>
            <input type="text" placeholder="Login Name" value={this.state.UserName}  onChange= {this.handleLoginChange}/>
          <button onClick ={this.handleLoginUpdate}>test</button>
          </div>
        </header>

        <UserCard
          user={this.state.user}
          follows={this.state.user.following}
          follow={this.state.user.followers}
        />
      </div>
    );
  }
}

