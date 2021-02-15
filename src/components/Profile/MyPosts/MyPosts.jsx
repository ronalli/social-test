import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const MyPosts = (props) => {

	let postElement = props.postsItem.map((data) => {
		return <Post key={data.id} message={data.message} date={data.date} image={data.image} />
	});

	let onSubmit = (values) => {
		console.log(values);
		props.addPost(values.postMessage)
	}

	return (
		<div className='posts'>

			<PostForm onSubmit={onSubmit} />

			<div className='posts-wrapper'>
				{postElement}
			</div>

		</div >

	);
}

export default MyPosts;