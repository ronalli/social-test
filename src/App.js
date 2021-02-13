import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// import Login from './components/Login/Login';
import LoginContainer from './components/Login/LoginContainer';


const App = (props) => {
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

export default App;
