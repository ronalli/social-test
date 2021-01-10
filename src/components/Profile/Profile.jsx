import React from 'react';
import './Profile.css';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {



	return (
		<div className='profile'>
			<ProfileInfo />
			<MyPostsContainer store={props.store}
			// postsItem={props.profilePage.postsItem}
			// newPostText={props.profilePage.newPostText}
			// dispatch={props.dispatch}
			/>


		</div>
	);
}

export default Profile;