import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from '../custom-axios';

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginmessage: 'Welcome!'
    };
    this.registeration = this.registeration.bind(this);
    this.renderTextview = this.renderTextview.bind(this);
  }

  registeration = () => {
    console.log(this.state.username, this.state.password);
    var payload = {
      username: this.state.username,
      password: this.state.password
    };
    this.refs.name.value = '';
    this.refs.pas.value = '';
    this.refs.pass2.value = '';
    axios
      .post('/api/signup/', payload)
      .then(function(response) {
        console.log(response);
        if (response.data.id != null) {
          console.log('successfully');
          window.alert('Registered successfully');
          window.location.href('/login');
        }
      })
      .catch(function(error) {
        console.log(error.description);
        alert('Error: ' + error.description);
      });
  };
  renderTextview = (e) => {
    console.log(e);
    this.setState({
      loginmessage: 'Error! please try again'
    });
  };

  render() {
    return (
      <div className="login-b">
        <div className="title">Sign Up</div>
        <p> {this.state.loginmessage} </p>
        <form className="login">
          <div class="form-group ">
            <input
              type="email"
              className="form-control  col-sm-4"
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

          <div class="form-group  ">
            <label for="inputPassword2" class="sr-only">
              Password
            </label>
            <input
              type="password"
              class="form-control col-sm-4"
              ref="pass2"
              id="inputPassword2"
              placeholder="Re-type Password"
            />
          </div>
        </form>
        <button block size="lg" class="btn btn-primary " type="submit" onClick={this.registeration}>
          Signup
        </button>
        <div className="link">
          <Link to="/login">already register?</Link>
        </div>
      </div>
    );
  }
}
export default register;
