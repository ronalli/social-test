import React from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import { postAuth } from '../../redux/auth-reducer';
import Login from './Login';


class LoginContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			auth: this.props.dataAuth
		}
	}

	onSubmit = (values) => {
		this.setState({
			auth: values,
		})
	}


	componentDidUpdate(prevProps, prevState) {
		if (this.state.auth !== prevState.auth) {
			this.props.postAuth(this.state.auth);
		}
	}


	render() {
		return (
			<Login onSubmit={this.onSubmit} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		dataAuth: state.auth.dataAuth
	};

};



export default connect(mapStateToProps, { postAuth })(LoginContainer)