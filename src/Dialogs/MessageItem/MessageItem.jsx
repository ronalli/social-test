import './MessageItem.css';


const MessageItem = (props) => {
	return (
		<div className="message-item">
			{props.message}
		</div>
	)
};

export default MessageItem;
