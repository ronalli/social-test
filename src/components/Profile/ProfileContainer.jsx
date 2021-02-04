import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfile(userId);
	};


	render() {
		return (
			<Profile  {...this.props} profile={this.props.profile} />
		);
	};

}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		profileUserId: state.profilePage.profileUserId,
		// isAuth: state.auth.isAuth,
	};

};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);


export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);