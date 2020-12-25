import { connect } from 'react-redux';
import { followAC, unFollowAC } from '../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unFollowAC(userId));
		}
	}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;