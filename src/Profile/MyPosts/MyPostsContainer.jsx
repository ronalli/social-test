// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		postsItem: state.profilePage.postsItem,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		onPostChange: (text) => {
			dispatch(updateNewPostTextActionCreator(text))
		}
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;