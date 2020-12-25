import './DialogItem.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<div className="dialog-item">
			<img src={`${props.image}`} alt="" />
			<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
		</div>
	)
};


export default DialogItem;
