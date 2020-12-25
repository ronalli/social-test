import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Navbar = (props) => {

	let sidebarElements = props.profileFriends.map((data) => {
		return (
			<Sidebar key={`${data.id}${data.name}`} id={data.id} name={data.name} image={data.image} />
		);
	})

	return (
		<div className="main">
			<nav className='main-navbar'>
				<ul>
					<li><NavLink className='main-navbar__link' to='/profile'>Profile</NavLink></li>
					<li><NavLink className='main-navbar__link' to='/dialogs'>Messages</NavLink></li>
					<li><NavLink className='main-navbar__link' to='/news'>News</NavLink></li>
					<li><NavLink className='main-navbar__link' to='/music'>Music</NavLink></li>
					<li><NavLink className='main-navbar__link' to='/settings'>Settings</NavLink></li>
					<li><NavLink className='main-navbar__link' to='/users'>Users</NavLink></li>
				</ul>
			</nav>

			<h3 className='sidebar-title'>Friends</h3>
			<div className="main-sidebar">
				{sidebarElements}
			</div>
		</div>

	);
}

export default Navbar;