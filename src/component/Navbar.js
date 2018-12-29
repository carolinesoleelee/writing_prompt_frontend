import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render(){
    return(
      <div className={`ui inverted blue menu`}>
        <a className="item" href="/">
          <h2 className="ui header">
          </h2>
        </a>
        <Link className='item' to='/user'>My Profile</Link>
        <Link className='item' to='/'>Homepage</Link>
        <Link className='item' to='/categories'>Categories</Link>
        <Link className='item' to='/questions'>All Questions</Link>
      </div>
    )
  }
}
