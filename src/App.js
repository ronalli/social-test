import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
// import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import DialogsContainer from './Dialogs/DialogsContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import NavbarContainer from './Navbar/NavbarContainer';
import UsersContainer from './Users/UsersContainer';


const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<NavbarContainer
			// state={props.state.sidebar} 
			/>

			<div className='app-wrapper-content'>

				<Route path='/dialogs' render={() => <DialogsContainer
				// store={props.store}
				// dialogsPage={props.state.dialogsPage}
				// dispatch={props.dispatch}
				/>} />
				<Route path='/profile' render={() => <Profile
				// store={props.store}
				// profilePage={props.state.profilePage}
				// dispatch={props.dispatch}
				/>} />
				<Route path='/users' render={() => <UsersContainer />} />
				<Route path='/news' component={News} />
				<Route path='/music' component={Music} />
				<Route path='/settings' component={Settings} />


			</div>

		</div>
	);
}

export default App;
