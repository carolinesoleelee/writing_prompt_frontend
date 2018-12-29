import React, { Component } from 'react';
import { Card, Image } from "semantic-ui-react";
import {Redirect} from 'react-router-dom'
import IndividualPost from './IndividualPost'
import {Link} from 'react-router-dom'

export default class UserProfile extends Component{


  render(){
    let currentUser = this.props.currentUser
    return(
      <div>
      {currentUser ? (

        <div>
            <h1>{currentUser.username}{currentUser.user_type}</h1>
            <Link className='item' to='/'>Time to write</Link>
            <h1>Welcome Back {currentUser.name}!</h1>
            <h3>Here are your posts</h3>
          {this.props.userObj[0].posts.map((data, index)=> <IndividualPost key={index} data={data}/>)}
        </div>
      ) : <Redirect to="/login" />}
      </div>
    )
  }
}

//add an avatar
