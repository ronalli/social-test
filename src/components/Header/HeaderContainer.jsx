import './Header.css';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';
import { UsersAPI } from '../../api/api';

class HeaderContainer extends React.Component {

	componentDidMount() {

		UsersAPI.authMe().then(data => {
			// console.log(data);
			let { id, email, login } = data.data;
			if (data.resultCode === 0) {
				this.props.setAuthUserData(id, email, login);
			}
		});
	}


	render() {
		return (<>
			<Header {...this.props} />
		</>);
	};

}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	};
};


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
