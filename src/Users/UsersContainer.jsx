import { connect } from 'react-redux';
import { followAC, setTotalUsersCountAC, setUsersAC, unFollowAC, setCurrentPageAC } from '../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		countPage: state.usersPage.countPage
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setTotalUsersCount: (totalUsers) => {
			dispatch(setTotalUsersCountAC(totalUsers));
		},
		setCurentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage));
		}
	}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;