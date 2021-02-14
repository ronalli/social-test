import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

	return (
		<header className='header'>
			<div className='section-logo'>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Oikya_Front_Logo.png/600px-Oikya_Front_Logo.png" alt="" />
			</div>

			<div className='section-login'>
				{
					props.isAuth
						? props.login
						: <NavLink to={'/login'}>Login</NavLink>

				}
			</div>
		</header>
	);
}

export default Header;