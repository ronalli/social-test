import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../Assets/images/user.png'
import './Users.css';
import { UsersAPI } from '../../api/api';


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
									? <button className='unfollow-button' disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
										// debugger;
										props.toggleInFetchingProgress(true, u.id);
										UsersAPI.unFollowUser(u.id).then(data => {
											if (data.resultCode === 0) {
												props.unFollow(u.id)
											}
											props.toggleInFetchingProgress(false, u.id)
											// debugger;
										});


									}}>unFollow</button>
									: <button className='follow-button' disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
										props.toggleInFetchingProgress(true, u.id);
										UsersAPI.followUser(u.id).then(data => {
											if (data.resultCode === 0) {
												props.follow(u.id)
											}
											props.toggleInFetchingProgress(false, u.id);
										});


									}}>Follow</button>
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