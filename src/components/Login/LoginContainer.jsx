import React from 'react';
import { connect } from 'react-redux';
import { postAuth } from '../../redux/auth-reducer';
import { getCaptchaUrl, getErrorAuthSelector, getIsAuthSelector } from '../../redux/selectors/login-selectors';
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
		isAuth: getIsAuthSelector(state),
		errorAuth: getErrorAuthSelector(state),
		captchaUrl: getCaptchaUrl(state)
	};

};


export default connect(mapStateToProps, { postAuth })(LoginContainer)