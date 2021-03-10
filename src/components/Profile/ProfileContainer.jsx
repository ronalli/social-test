import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfileSelector, getProfileUserIdSelector, getStatusSelector } from '../../redux/selectors/profile-selectors';
import { getAuthIdSelector } from '../../redux/selectors/login-selectors';

class ProfileContainer extends React.Component {

	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push("/login");
			}
		}
		if (userId) {
			this.props.getUserProfile(userId);
			this.props.getStatus(userId)
		}
	};


	render() {
		return (
			<Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
		);
	};

}

let mapStateToProps = (state) => {
	return {
		profile: getProfileSelector(state),
		profileUserId: getProfileUserIdSelector(state),
		status: getStatusSelector(state),
		authorizedUserId: getAuthIdSelector(state),
	};

};



export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	// withAuthRedirect
)(ProfileContainer);