import React from 'react-dom';


const Users = (props) => {
	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<div>
					<img src={u.photoUser} alt="alt" />
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

}

export default Users;