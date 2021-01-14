import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
// import Navbar from './Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


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
				<Route path='/profile/:userId?' render={() => <ProfileContainer
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
