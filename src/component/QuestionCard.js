import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class QuestionCard extends Component{

  render(){
    console.log(this.props.questionObj)
    return(
      <Link to={`/questions/${this.props.questionObj.id}`}>
        <div className='cattext3' onClick={(e)=> this.props.handleOnClick(this.props.questionObj)}>
          <>{this.props.questionObj.question}</>

        </div>
      </Link>
    )
  }
}
