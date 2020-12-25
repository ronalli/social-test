import React from 'react';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postElement = props.postsItem.map((data) => {
		return <Post key={data.id} message={data.message} date={data.date} image={data.image} />
	});

	let onAddPost = () => {
		// let text = newPostElement.current.value;
		props.addPost();
		// let action = addPostActionCreator();
		// props.dispatch(action);
		// props.updateNewPostText('');
	};

	let onPostChange = (e) => {
		// let text = newPostElement.current.value;
		props.onPostChange(e.target.value);
		// let action = updateNewPostTextActionCreator(e.target.value);
		// props.dispatch(action);
	}

	return (
		<div className='posts'>

			<div className='elements-posts'>
				<textarea onChange={onPostChange} value={props.newPostText} />
				<button onClick={onAddPost}>Отправить</button>
			</div>

			<div className='posts-wrapper'>
				{postElement}
			</div>

		</div >

	);
}

export default MyPosts;