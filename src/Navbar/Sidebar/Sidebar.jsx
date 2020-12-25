import './Sidebar.css';

const Sidebar = (props) => {
	return (
		<div className="sidebar-item">
			<img src={props.image} alt="alt" />
			<p>{props.name}</p>
		</div>
	);
}

export default Sidebar;