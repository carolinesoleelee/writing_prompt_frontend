import React, { Component } from 'react'
import QuestionCard from '../component/QuestionCard'
import NextQuestion from '../component/NextQuestion'
import {Link} from 'react-router-dom'

export default class QuestionsContainer extends Component{

  render(){
    return(
      <div className='allQuestion'>
      <div className='catTitle'><strong><p className='ptag2'>All Questions</p></strong>
            <NextQuestion nextBatch={this.props.nextBatch} previousBatch={this.props.previousBatch}/>
          </div>
      <div className='line2'></div>
      <div className='cattext2'>{this.props.questionsArr.map((question, index) => <QuestionCard key={index} questionObj={question} handleOnClick={this.props.select}/>)}</div>
      <NextQuestion nextBatch={this.props.nextBatch} previousBatch={this.props.previousBatch}/>
        <br /><br /><div className='line2'></div>
        <Link className='item' to='/categories'><button>View All Categories</button></Link>
        <br /><br /><br />
      </div>
    )
  }
}
