import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
export default class Patch extends Component{

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
    fetch(`http://localhost:3001/api/v1/posts/${this.props.answer ? this.props.answer.posts.filter(user => user.user_id == this.props.currentUser.id)[0].id : null}`, {
      method: 'PATCH',
      headers: {
      "Content-type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify({
        user_id: this.props.currentUser.id,
        prompt_id: this.props.answer.id,
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
  console.log(this.props.answer ? this.props.answer.posts.filter(user => user.user_id == this.props.currentUser.id)[0].id : null)
    return(
      <div>
      {this.props.answer ? this.props.answer.question : null}
      {this.renderRedirect()}
      <form onSubmit={this.handleSubmit}>
        <br />
          <textarea placeholder='insert text here' onChange={this.handleChange} style={{ height: 400, width: 800}} type="textarea" name="name" />
        <br /><br />
          <input type="submit" value="Submit"/>
      </form>
      <Link to={`/user/${this.props.answer.id}`}>
          <button>back</button>
      </Link>
        <br /><br />
        <br /><br />
      </div>
    )
  }
}
