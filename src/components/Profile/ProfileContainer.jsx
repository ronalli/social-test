import React from 'react';
// import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.setUserProfile(userId);
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
	};

};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);



export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);