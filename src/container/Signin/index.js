import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { AuthActions,FireActions } from "../../store/actions/index";
import { Signin } from './../../components/index';

class Login extends Component {

    constructor(props){
        super();
        this.state = {
            email:"dummy@gmail.com",
            password:"abc123"
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(123)
    }

    onchangeValue(e){
        this.setState({[e.target.id]:e.target.value})
        this.setState({[e.target.id]:e.target.value})
    }

    loginSubmit = () => {
        console.log(this.state)
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        this.props.login(user);
        // this.setState({
        //     email:"",
        //     password:""
        // })
    }

    render() {
        console.log("login State",this.props.userObj)
        return (
            <Signin submit={this.loginSubmit} loginSiginState={this.state} change={this.onchangeValue.bind(this)}/>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        authObj: state.AuthReducer,
        userObj: state.fire
     };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (userObj) => dispatch(AuthActions.signin(userObj)),
        login: (userObj) => dispatch(FireActions.signin(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);