import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class Post extends Component{

  state = {
    text: '',
    redirect: false
  }

  handleChange = (e) =>{
      let input = (e.target.value)
      this.setState({ text: input})
  }

  handleSubmit = (e) => {
    e.preventDefault()
      fetch('http://localhost:3001/api/v1/posts', {
        method: 'POST',
        headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
          user_id: this.props.currentUser.id,
          prompt_id: this.props.selectedQuestion.id,
          text: this.state.text
        })
      })
      .then(res => res.json())
      .then(data => data)
      this.setState({ redirect: true})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/user' />
    }
  }


render(){
  console.log(this.props)
    return(
      <div>
      {this.renderRedirect()}
      <form onSubmit={this.handleSubmit}>
        <br />
          <textarea placeholder='insert text here' onChange={this.handleChange} style={{ height: 400, width: 800}} type="textarea" name="name" />
        <br /><br />
          <input type="submit" value="Submit"/>
      </form>
        <br /><br />
        <br /><br />
      </div>
    )
  }
}
