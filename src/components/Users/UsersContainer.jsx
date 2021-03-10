import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, getUsers, setCurrentPage } from '../../redux/users-reducer';
import Users from './Users';
import Prealoder from '../common/Preloader/Prealoder';
import { compose } from 'redux';
import { getCountPageSelector, getCurrentPageSelector, getTotalUsersCountSelector, getUsersSelector, getIsFetchingSelector, getFollowingInProgressSelector } from '../../redux/selectors/user-selectors';

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
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users: getUsersSelector(state),
		totalUsersCount: getTotalUsersCountSelector(state),
		currentPage: getCurrentPageSelector(state),
		countPage: getCountPageSelector(state),
		isFetching: getIsFetchingSelector(state),
		followingInProgress: getFollowingInProgressSelector(state),
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
	// withAuthRedirect
)(UsersContainer);