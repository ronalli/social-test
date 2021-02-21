import React from 'react';
import { connect } from 'react-redux';
import { postAuth } from '../../redux/auth-reducer';
import Login from './Login';


class LoginContainer extends React.Component {

	render() {
		return (
			<Login  {...this.props} postAuth={this.props.postAuth} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	};

};


export default connect(mapStateToProps, { postAuth })(LoginContainer)