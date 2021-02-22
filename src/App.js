import './App.css';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer';


class App extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<NavbarContainer
				/>

				<div className='app-wrapper-content'>

					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />

					<Route path='/login' component={LoginContainer} />


				</div>

			</div>
		);
	}
}

export default compose(
	withRouter,
	connect(null, { getAuthUserData }))(App);
