import React from 'react';
import { connect } from 'react-redux';
import { follow, setTotalUsersCount, setUsers, unFollow, setCurrentPage, toggleIsFetching } from '../../redux/users-reducer';
import { setIdUserProfile } from '../../redux/profile-reducer';
import Users from './Users';
import * as axios from 'axios';
import Prealoder from '../common/Preloader/Prealoder';


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${this.props.currentPage}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
			this.props.toggleIsFetching(false);
			// console.log(response.data.totalCount);
		});
	};

	onPageChanged = (numberPage) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(numberPage);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${numberPage}`).then(response => {
			this.props.setUsers(response.data.items);
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
					setIdUserProfile={this.props.setIdUserProfile}
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
		isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, { follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, setIdUserProfile })(UsersContainer);
