import React, { Component } from 'react'
import CategoryQuestion from './CategoryQuestion'

export default class Category extends Component{

  render(){
    return(
      <div>
      {this.props.category.map((data, index)=> <CategoryQuestion key={index} obj={data} select={this.props.select}/>)}
      </div>
    )
  }
}
