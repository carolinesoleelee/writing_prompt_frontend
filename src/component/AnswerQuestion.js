import React, { Component } from 'react'

export default class AnswerQuestion extends Component{

  render(){
    return(
      <div>
      {this.props.answer ? this.props.answer.question : null}
      <form>
          <textarea type="textarea" name="name" />
        <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
