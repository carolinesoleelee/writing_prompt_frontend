import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AnswerQuestion extends Component{

  render(){
        let number = Math.floor(Math.random() * 70)
        console.log(number)
    return(
      <div>
      <Link className='item' to={`/questions/${number}`}>
      <button>Randomize Again</button>
      </Link>
      <br />
      <br />
      {this.props.answer ? this.props.answer.question : null}
      <form>
        <br />
          <textarea style={{ height: 400, width: 800}} type="textarea" name="name" />
        <br /><br />
          <input type="submit" value="Submit" />
        </form>
        <br /><br />
        <br /><br />
      </div>

    )
  }
}
 
