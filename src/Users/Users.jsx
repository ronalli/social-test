import React from 'react';
import * as axios from 'axios';
import userPhoto from '../Assets/images/user.png'
import './Users.css';

class Users extends React.Component {
	constructor(props) {
		super(props);
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		return (
			<div>
				<div className='container-users'>

					{
						this.props.users.map(u => <div className='item-user' key={u.id}>

							<div>
								<img src={u.photos.large || userPhoto} alt="alt" />
							</div>
							<div>
								<p>{u.name}</p>
							</div>
							<div>
								{
									u.followed
										? <button onClick={() => { this.props.unFollow(u.id) }}>unFollow</button>
										: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
								}
							</div>

						</div>
						)
					}
				</div>
			</div>
		)
	}

}

export default Users;