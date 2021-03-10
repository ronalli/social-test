import './Header.css';
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';
import { getIsAuthSelector, getLoginSelector } from '../../redux/selectors/login-selectors';

class HeaderContainer extends React.Component {
	render() {
		return (<>
			<Header {...this.props} />
		</>);
	};

}

let mapStateToProps = (state) => {
	return {
		isAuth: getIsAuthSelector(state),
		login: getLoginSelector(state)

	};
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
