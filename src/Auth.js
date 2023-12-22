import React from "react";
import { msalInstance } from "./authConfig";

class Auth extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    msalInstance.loginPopup().then((response) => {
      this.setState({ user: response.account });
    });
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <div>Loading...</div>;
    }

    return <div>Hello, {user.name}</div>;
  }
}

export default Auth;