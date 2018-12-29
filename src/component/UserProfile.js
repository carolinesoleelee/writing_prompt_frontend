import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Redirect} from 'react-router-dom'

const Profile = ({currentUser}) => currentUser? (
  <Card>
    <Card.Content>
      <Card.Header>{currentUser.username}: {currentUser.user_type}</Card.Header>

      <Card.Description>{currentUser.bio}</Card.Description>
    </Card.Content>
  </Card>
) : <Redirect to="/login" />

export default Profile;
