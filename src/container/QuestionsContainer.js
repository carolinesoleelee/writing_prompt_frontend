import React, { Component } from 'react'
import QuestionCard from '../component/QuestionCard'

export default class QuestionsContainer extends Component{

  render(){
    return(
      <div>
      {this.props.questionsArr.map((question, index) => <QuestionCard key={index} questionObj={question} handleOnClick={this.props.select}/>)}
      </div>
    )
  }
}
