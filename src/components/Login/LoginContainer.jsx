import React from 'react';
import { connect } from 'react-redux';
import { postAuth } from '../../redux/auth-reducer';
import Login from './Login';


class LoginContainer extends React.Component {

	render() {
		return (
			<Login  {...this.props} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		errorAuth: state.auth.errorAuth
	};

};


export default connect(mapStateToProps, { postAuth })(LoginContainer)