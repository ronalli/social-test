import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../Assets/images/user.png'
import './Users.css';

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.countPage)
	// console.log(pagesCount);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		if (i <= 30) {
			pages.push(i);
		}
	}

	return (
		<div>
			<div className='users-pagination'>
				{
					pages.map(p => {
						return (<span onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p ? 'page-changed' : ''} key={p}>{p} </span>)
					})
				}
			</div>


			<div className='container-users'>

				{
					props.users.map(u => <div className='item-user' key={u.id}>

						<div>
							<NavLink to={`/profile/${u.id}`}>
								<img src={u.photos.large || userPhoto} alt="alt" />
							</NavLink>
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
		</div >
	)

}

export default Users;