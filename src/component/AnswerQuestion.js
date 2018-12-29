import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Post from './Post'

export default class AnswerQuestion extends Component{

  render(){
        let number = Math.floor(Math.random() * 70)
    return(
      <div>
      <Link className='item' to={`/questions/${number}`}>
      <button>Randomize Again</button>
      </Link>
      <br />
      <br />
      {this.props.answer ? this.props.answer.question : null}
      <Post currentUser={this.props.currentUser} selectedQuestion={this.props.selectedQuestion}/>
      </div>

    )
  }
}
