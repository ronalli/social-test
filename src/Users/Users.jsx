import React from 'react';
import * as axios from 'axios';
import userPhoto from '../Assets/images/user.png'
import './Users.css';

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${this.props.currentPage}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
			// console.log(response.data.totalCount);
		});
	};

	onPageChanged = (numberPage) => {
		this.props.setCurentPage(numberPage);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${numberPage}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}


	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.countPage)
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
							return (<span onClick={(e) => { this.onPageChanged(p) }} className={this.props.currentPage === p ? 'page-changed' : ''} key={p}>{p} </span>)
						})
					}
				</div>


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