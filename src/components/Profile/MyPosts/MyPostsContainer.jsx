// import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		postsItem: state.profilePage.postsItem,
		newPostText: state.profilePage.newPostText
	}
}

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		addPost: (newMessagePost) => {
// 			dispatch(addPostActionCreator(newMessagePost));
// 		},
// 	}
// }


const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
