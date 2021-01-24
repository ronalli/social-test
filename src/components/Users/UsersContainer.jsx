import React from 'react';
import { connect } from 'react-redux';
import { follow, setTotalUsersCount, setUsers, unFollow, setCurrentPage, toggleIsFetching, toggleInFetchingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Prealoder from '../common/Preloader/Prealoder';
import { UsersAPI } from '../../api/api';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		UsersAPI.getUsers(this.props.countPage, this.props.currentPage)
			.then(data => {
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
				this.props.toggleIsFetching(false);
			});
	};

	onPageChanged = (numberPage) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(numberPage);
		UsersAPI.getUsers(this.props.countPage, numberPage)
			.then(data => {
				this.props.setUsers(data.items);
				this.props.toggleIsFetching(false);
			});
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
					toggleInFetchingProgress={this.props.toggleInFetchingProgress}
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

export default connect(mapStateToProps, { follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, toggleInFetchingProgress })(UsersContainer);


