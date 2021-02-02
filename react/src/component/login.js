import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from '../custom-axios';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.loggedin = this.loggedin.bind(this);
  }

  loggedin = () => {
    const token = Buffer.from(`${this.state.username}:${this.state.password}`, 'utf8').toString('Base64');
    localStorage.setItem('token', token);
    //const tk=window.btoa(`${this.state.username}:${this.state.password}`)
    axios
      .post('/api/login/', null, {
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        if (response.data.id != null) {
          localStorage.setItem('id', response.data.id);
          this.props.history.replace('/dash');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="login-b">
        <div className="title">Sign In</div>
        <form className="login">
          <div class="form-group ">
            <input
              type="email"
              className="form-control col-sm-4"
              ref="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              onChange={() => this.setState({ username: this.refs.name.value })}
            />
          </div>

          <div class="form-group  ">
            <label for="inputPassword2" class="sr-only">
              Password
            </label>
            <input
              type="password"
              class="form-control col-sm-4"
              ref="pas"
              id="inputPassword2"
              placeholder="Password"
              onChange={() => this.setState({ password: this.refs.pas.value })}
            />
          </div>
        </form>

        <button block size="lg" class="btn btn-primary " type="submit" onClick={this.loggedin}>
          Login
        </button>
        <div className="link">
          <Link to="/">not register?</Link>
        </div>
      </div>
    );
  }
}
export default login;
