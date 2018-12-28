import React, { Component } from 'react'

export default class UserProfile extends Component{

  constructor(){
    super()
    this.state = {
      questions: [],
      users: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/users')
      .then(res => res.json())
      .then(userData => this.setState({
        users: userData
      }))
  }


  render(){
    console.log(this.state.users[0])
    return(
      <div>
      {this.state.users[0] ? <h1>{this.state.users[0].username}</h1> : null}
      </div>
    )
  }
}
