import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 13750;
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId)
	};


	render() {
		return (
			<Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
		);
	};

}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		profileUserId: state.profilePage.profileUserId,
		status: state.profilePage.status
	};

};



export default compose(
	connect(mapStateToProps, { getUserProfile, updateStatus, getStatus }),
	withRouter,
	// withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);


// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);