// import { NavLink } from 'react-router-dom';
// import Sidebar from './Sidebar/Sidebar';
import { connect } from 'react-redux';
import Navbar from './Navbar';


let mapStateToProps = (state) => {
	return {
		profileFriends: state.sidebar.profileFriends,
	}
}

let mapDispatchToProps = () => {
	return {

	}
}


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;