import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../component/LoginForm'

export default class SignLoginContainer extends Component{

  render(){
    return(
      <div>
      <LoginForm />
      <Link className='item' to='/signup'>
          Not a member?
      </Link>
      </div>
    )
  }
}
