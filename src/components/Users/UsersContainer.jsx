import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, getUsers, setCurrentPage } from '../../redux/users-reducer';
import Users from './Users';
import Prealoder from '../common/Preloader/Prealoder';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class UsersContainer extends React.Component {

	componentDidMount() {

		this.props.getUsers(this.props.countPage, this.props.currentPage)

	};

	onPageChanged = (numberPage) => {
		this.props.setCurrentPage(numberPage);
		this.props.getUsers(this.props.countPage, numberPage)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Prealoder /> : null
				}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					countPage={this.props.countPage}
					currentPage={this.props.currentPage}
					unFollow={this.props.unFollow}
					follow={this.props.follow}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					followingInProgress={this.props.followingInProgress}
					usersFollow={this.props.usersFollow}
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		countPage: state.usersPage.countPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
		usersFollow: state.usersPage.usersFollow
		// isAuth: state.auth.isAuth
	}
};

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unFollow: (userId) => {
// 			dispatch(unFollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setTotalUsersCount: (totalUsers) => {
// 			dispatch(setTotalUsersCountAC(totalUsers));
// 		},
// 		setCurentPage: (currentPage) => {
// 			dispatch(setCurrentPageAC(currentPage));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching));
// 		}
// 	}
// }


export default compose(
	connect(mapStateToProps, { follow, unFollow, setCurrentPage, getUsers }),
	withAuthRedirect
)(UsersContainer);

// let AuthRedirectComponent = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, { follow, unFollow, setCurrentPage, getUsers })(AuthRedirectComponent);


