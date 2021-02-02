import React from 'react';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

	return (
		<div className='profile'>

			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />

		</div>
	);
}

export default Profile;