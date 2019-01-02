import React, { Component } from 'react'
import CategoryCard from '../component/CategoryCard'
import {Link} from 'react-router-dom'

export default class CategoriesContainer extends Component{
  getcat = () => {
    const questions = this.props.questionsArr
    const result = []
    const map = new Map()
    for (const question of questions) {
        if(!map.has(question.category)){
            map.set(question.category, true)
            result.push({
                category: question.category,
            })
        }
    }
    return result
}

  render(){
    return(
      <div className='category'>

      <div className='catTitle'><strong><p className='ptag'>WRITING PROMPT CATEGORIES</p></strong></div>
      <div className='line'></div>
      <div className='cat'>{this.getcat().map((data, index) => <CategoryCard key={index} cat={data} handleOnClick={this.props.select} arr={this.props.questionsArr}/>)}</div>
<div className='buts2'>
      <Link className='item' to={`/questions`}>
      <button>View All Questions</button><br /><br />
      </Link>
      </div>
    </div>
    )
  }
}
