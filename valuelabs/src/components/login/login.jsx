import React from "react";
// import { useHistory } from "react-router-dom";
// import { Router, Route, Switch, Link } from 'react-router-dom';

export class Login extends React.Component {
  constructor(props) {
    super(props);  
}

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">User Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          {/*<button type="button" className="btn" onClick={() => {history.push("/post");}} >
            Login
          </button>
*/}
<button type="button" className="btn"  >
            Login
          </button>
        </div>
      </div>
    );
  }

}

