import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class CategoryCard extends Component{


  render(){
    return(
      <Link to={`/categories/${this.props.cat.category}`}>
      <div onClick={(e)=> this.props.handleOnClick(this.props.cat)}>
      <button>{this.props.cat.category}</button>
      </div>
      </ Link>
    )
  }
}
