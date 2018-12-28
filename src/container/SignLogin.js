import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class SignLoginContainer extends Component{

  render(){
    return(
      <div>
      <Link className='item' to='/login'>
      <button>Login</button>
      </Link><br /><br />
      <Link className='item' to='/login'>
      <button>Signup</button>
      </Link>
      </div>
    )
  }
}
