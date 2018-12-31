import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import IndividualPost from './IndividualPost'
import {Link} from 'react-router-dom'
import Clock from 'react-live-clock';
import ReactAnimatedWeather from 'react-animated-weather';

export default class UserProfile extends Component{


  render(){
    let currentUser = this.props.currentUser
    const defaults = {icon: 'SNOW', color: 'black', size: 50,animate: true
};
console.log(this.props)
    return(
      <div>
      {currentUser ? (

        <div>
        <p>Weather & Time</p><ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
            <Clock format={'HH:mm'} ticking={true} timezone={'America/New_York'} />
            <h1>{currentUser.username}{currentUser.user_type}</h1>
            <Link className='item' to='/'>Time to write</Link>
            <h1>Welcome Back {currentUser.name}!</h1>
            <h3>Here are your posts</h3>
          {this.props.userObj[0].posts.map((data, index)=> <IndividualPost key={index} data={data}  selectedQuestion={this.props.selectedQuestion}/>)}
        </div>
      ) : <Redirect to="/login" />}
      </div>
    )
  }
}

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
