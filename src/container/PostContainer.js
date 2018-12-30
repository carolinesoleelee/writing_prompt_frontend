import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class PostContainer extends Component{

  render(){
    return(
      <div>
      {this.props.answer ? this.props.answer.question : null}<br /><br />
      {this.props.answer ? this.props.answer.posts.filter(user => user.user_id == this.props.currentUser.id)[0].text : null}<br />
      <Link to={`/update/${this.props.answer.id}`}>
          <button>update</button>
      </Link><br />
            <Link className='item' to='/login'>Back to Profile</Link><br />
      </div>
    )
  }
}

// console.log(this.props.answer ? this.props.answer.posts.filter(user => user.user_id == 1) : null)
