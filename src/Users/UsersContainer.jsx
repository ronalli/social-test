import React from 'react';
import { connect } from 'react-redux';
import { followAC, setTotalUsersCountAC, setUsersAC, unFollowAC, setCurrentPageAC } from '../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';


class UsersContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${this.props.currentPage}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
			// console.log(response.data.totalCount);
		});
	};

	onPageChanged = (numberPage) => {
		this.props.setCurentPage(numberPage);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${numberPage}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		return (<Users
			totalUsersCount={this.props.totalUsersCount}
			countPage={this.props.countPage}
			currentPage={this.props.currentPage}
			unFollow={this.props.unFollow}
			follow={this.props.follow}
			onPageChanged={this.onPageChanged}
			users={this.props.users}
		/>)
	}
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
