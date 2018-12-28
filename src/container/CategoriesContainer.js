import React, { Component } from 'react'
import CategoryCard from '../component/CategoryCard'

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
      <div>
      {this.getcat().map((data, index) => <CategoryCard key={index} cat={data} handleOnClick={this.props.select} arr={this.props.questionsArr}/>)}
      </div>
    )
  }
}
