import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HomePageContainer extends Component{

  render(){
    let number = Math.floor(Math.random() * 70)
    return(
      <div>
      <h1>Would you like to...</h1>
      <Link className='item' to='/categories'>
      <button>Choose Your Own Question</button>
      </Link><br /><br />
      <Link className='item' to={`/questions/${number}`}>
      <button>Allow Randomize</button>
      </Link>
      </div>
    )
  }
}
