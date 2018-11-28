import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputComponent from './../components/InputComponent';
import { connect } from "react-redux";
import { RegisterUser } from "./../Store/Actions/authActions";

class RegistrationPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      pass: ""
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleOnSubmit(e) {

    e.preventDefault();
    this.props.registerUser(this.state.name, this.state.email, this.state.pass);
  }

  render() {

    return (
      <div className="pageDiv">
        <h3 id="heading">Sign Up</h3>

        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="userName">ENTER NAME</label>
          <br />
          <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="text" name="name" id="userName" initialBorderColor="darkgrey" focusBorderColor="orange" onChange={this.handleOnChange} value={this.state.name} />
          <br />
          <label htmlFor="userName">ENTER EMAIL</label>
          <br />
          <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="text" name="email" id="email" initialBorderColor="darkgrey" focusBorderColor="orange" onChange={this.handleOnChange} value={this.state.email} />
          <br />
          <label htmlFor="key">ENTER PASSWORD</label>
          <br />
          <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="password" name="pass" id="key" initialBorderColor="darkgrey" focusBorderColor="orange" value={this.state.pass} onChange={this.handleOnChange}/>
          <br />
          <button id="sign_up" type="submit">REGISTER</button>
        </form>

        {this.props.showErrorStatus ? <p id="errorMessage">{this.props.errorMessage}</p> : null}
        {this.props.showCongratsStatus ? <p id="congratsMessage">{this.props.congratsMessage}</p> : null}

        <div id="btn">
          <Link to="/signin"><button className="navigation-button">I already have an account</button></Link>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    showErrorStatus: state.showError.status,
    errorMessage: state.showError.errorMessage,
    showCongratsStatus: state.showCongrats.status,
    congratsMessage: state.showCongrats.congratsMessage,
    userRegisteredStatus: state.userRegistered.isRegistered,
    userAuthenticationStatus: state.userAuthenticated.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (name, email, pass) => {
      dispatch(RegisterUser(name, email, pass))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationPage));