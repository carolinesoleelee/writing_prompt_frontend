
import React, { Fragment } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = ({ location: { pathname }, logged_in, setCurrentUser }) => {
  let logout = () => {
    setCurrentUser(null)
    localStorage.clear()
  }
  return (
    <Menu pointing secondary>
      {logged_in ? (
        <Fragment>
          <Menu.Item
            as={NavLink}
            to="/user"
            name="Profile"
            active={pathname === "/user"}
          />
          <Link className='item' to='/categories'>Categories</Link>
          <Link className='item' to='/questions'>All Questions</Link>
          <Menu.Menu position="right">
            <Menu.Item to="/logout" name="Logout" onClick={logout}/>
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          active={pathname === "/login"}
        />
      )}
    </Menu>
  );
};

export default withRouter(Nav);
