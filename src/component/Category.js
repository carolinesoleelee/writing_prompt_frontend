import React, { Component } from 'react'
import CategoryQuestion from './CategoryQuestion'

export default class Category extends Component{


  render(){
    console.log(this.props.category)
    return(
      <div>
      {this.props.category.map(data => <CategoryQuestion obj={data}/>)}
      </div>
    )
  }
}
