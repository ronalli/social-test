import './Post.css';

const Post = (props) => {
	return (
		<div className='post-item'>
			<img src={props.image} alt="" />
			<div>{props.message} -- {props.date}</div>
		</div>
	)
}

export default Post;