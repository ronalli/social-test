import React from 'react-dom';
import * as axios from 'axios';
import userPhoto from '../Assets/images/user.png'
import './Users.css';


const Users = (props) => {

	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
				props.setUsers(response.data.items);
			});
		}
	}


	return <div>
		<button onClick={getUsers}>Get Users</button>
		<div className='container-users'>

			{
				props.users.map(u => <div className='item-user' key={u.id}>

					<div>
						<img src={u.photos.large || userPhoto} alt="alt" />
					</div>
					<div>
						<p>{u.name}</p>
					</div>
					<div>
						{
							u.followed
								? <button onClick={() => { props.unFollow(u.id) }}>unFollow</button>
								: <button onClick={() => { props.follow(u.id) }}>Follow</button>
						}
					</div>

				</div>
				)
			}
		</div>
	</div>

}

export default Users;