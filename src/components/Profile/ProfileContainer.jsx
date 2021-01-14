import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setIdUserProfile } from '../../redux/profile-reducer';


class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.profileUserId}`).then(response => {
			this.props.setUserProfile(response.data);
			// console.log(response.data);
		});
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


export default connect(mapStateToProps, { setUserProfile, setIdUserProfile })(ProfileContainer);