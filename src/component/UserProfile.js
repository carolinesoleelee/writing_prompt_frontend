import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import IndividualPost from './IndividualPost'
import {Link} from 'react-router-dom'
import Clock from 'react-live-clock';
import ReactAnimatedWeather from 'react-animated-weather';

export default class UserProfile extends Component{


  render(){
    let currentUser = this.props.currentUser
    const defaults = {icon: 'CLOUDY', color: '#D9b777', size: 70,animate: true
};
console.log(this.props.userObj[0].posts.length)
    return(
      <div className='Profile'>
      {currentUser ? (

                <div>
                  <div className='WelcomeBack'>
                    <h1 className='head'>Welcome Back!</h1>
                    <p className='ptag7'><strong>{currentUser.name}</strong></p>
                    <Link to='/'><button>Start Writing</button></Link><br />
                    <h3>PREVIOUS POSTS</h3>
                    <div className='line3'></div>
                    {this.props.userObj[0].posts.map((data, index)=> <IndividualPost key={index} data={data}  selectedQuestion={this.props.selectedQuestion}/>)}
                  </div>
                </div>
      ) : <Redirect to="/login" />}
                <div className='div2'>
                <Link className='ptag3' to='/'>TIME</Link><br />
                <div className='color'>
                <Clock format={'HH:mm'} ticking={true} timezone={'America/New_York'} />
                  <p className='ptag3'>CLOUDY / 54° F</p>
                  <ReactAnimatedWeather
                  icon={defaults.icon}
                  color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}
                  /><br /><br />
                  <p className='ptag3'>TOTAL WRITTEN PROMPTS</p>
                  <div>{this.props.userObj[0].posts.length}</div>
                  <div className='vl'></div>
                  </div>
                </div>
      </div>
    )
  }
}

// <Link className='ptag3' to='/'>TIME TO WRITE</Link><br />

//add an avatar
// CLEAR_DAY
// CLEAR_NIGHT
// PARTLY_CLOUDY_DAY
// PARTLY_CLOUDY_NIGHT
// CLOUDY
// RAIN
// SLEET
// SNOW
// WIND
// FOG
