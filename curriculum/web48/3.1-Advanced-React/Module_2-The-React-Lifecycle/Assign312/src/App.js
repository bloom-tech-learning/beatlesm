import React from 'react'
import axios from 'axios'

import FollowerList from './components/FollowerList'

import './App.css'

class App extends React.Component {
  state = {
    user:[],
    input: ""
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/beatlesm')
        .then(res=> {
          // debugger
          this.setState({
            ...this.state,
            user: res.data
          });  
        })
        .catch(err=> {
            console.log(err);
        });
  }

  handleSubmit = (e) => {
    e.preventDefault();    
    axios.get(`https://api.github.com/users/${this.state.input}`)
        .then(resp=> {
            this.setState({
                ...this.state,
                user: resp.data
            })
        })
        .catch(err=> {
            console.log(err);
        })
}

  handleChange = (e) => {
    this.setState({
        ...this.state,
        input: e.target.value
    });  
    console.log('input', this.state.input);  
}

  render() {
    return(
      <div className="container">      
        <h1> GITHUB INFO</h1>
        <form className="form"> 
          <input value={this.state.input} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Search</button>
          <div className="user">
              <img src={this.state.user.avatar_url} alt={this.state.user.login} width ="400"/>
              <div className= "user-info">
                  <h2>{this.state.user.name}</h2>
                  <h3>TOTAL REPOS: {this.state.user.public_repos} </h3>
                  <h3>TOTAL Followers: {this.state.user.followers} </h3>
              </div>                             
          </div>
          <h2> Followers: </h2>
          <FollowerList user={this.state.user}/>
        </form>           
      </div>);
  }
}

export default App;
