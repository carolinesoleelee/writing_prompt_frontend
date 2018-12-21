import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HomePageContainer extends Component{

  render(){
    return(
      <div>
      <h1>Would you like to...</h1>
      <Link className='item' to='/questions'>Choose Your Own Question</Link><br /><br />
      <Link className='item' to='/questions'>Randomize</Link>
      //dontforget to make this function work
      </div>
    )
  }
}
