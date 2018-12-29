import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment } from "semantic-ui-react";


class SignUp extends React.Component {
  state = {
    name: "",
    username: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/api/v1/users`, {
      method:"POST",
      headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        id: 16,
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      })
    }).then(res => res.json())
    .then(data => console.log(data))
  }


  render() {
    return (
      <div>
      <Segment>
        <Form
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Form.Group widths="equal">
            <Form.Input
              label="name"
              placeholder="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Segment>
      </div>
    )
  }
}

export default withRouter(SignUp);
