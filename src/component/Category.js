import React, { Component } from 'react'
import CategoryQuestion from './CategoryQuestion'

export default class Category extends Component{

  constructor(){
    super()
    this.state = {
      selectedQuestion: {},
    }
  }

  select = (obj) => {
    this.setState({
      selectedQuestion: obj
    })
  }

  render(){
    console.log(this.state.selectedQuestion)
    return(
      <div>
      {this.props.category.map(data => <CategoryQuestion obj={data} select={this.select}/>)}
      </div>
    )
  }
}
