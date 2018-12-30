import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default class PostContainer extends Component{

  state = {
    redirect: false
  }
  //might have to fetch and get them to match

  handleSubmit = (e) => {
    e.preventDefault()
  fetch(`http://localhost:3001/api/v1/posts/${this.props.answer ? this.props.answer.posts.filter(user => user.user_id == this.props.currentUser.id)[0].id : null}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => console.log(data))
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
      {this.props.answer ? this.props.answer.question : null}<br /><br />
      {this.props.answer ? this.props.answer.posts.filter(user => user.user_id == this.props.currentUser.id)[0].text : null}<br />
      <Link to={`/update/${this.props.answer.id}`}>
          <button>update</button>
      </Link><br />

      {this.renderRedirect()}
      <button onClick={this.handleSubmit}>Delete This Post</button>
            <Link className='item' to='/login'>Back to Profile</Link><br />
      </div>
    )
  }
}

// console.log(this.props.answer ? this.props.answer.posts.filter(user => user.user_id == 1) : null)
