import React, { Component } from 'react'
import QuestionCard from '../component/QuestionCard'
import NextQuestion from '../component/NextQuestion'

export default class QuestionsContainer extends Component{

  render(){
    return(
      <div>
      {this.props.questionsArr.map((question, index) => <QuestionCard key={index} questionObj={question} handleOnClick={this.props.select}/>)}
      <NextQuestion nextBatch={this.props.nextBatch} previousBatch={this.props.previousBatch}/>
      </div>
    )
  }
}
