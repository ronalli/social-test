import React from 'react';
import { AuthAPI, ProfileAPI } from '../../../api/api';
import './ProfileInfo';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	hangleFocus = (event) => { event.target.select() }

	activateEditMode = () => {

		this.setState({ editMode: true })
	}


	deactivateEditMode = (e) => {
		this.setState({ editMode: false })
		// console.log(e);
	}

	render() {

		return (
			<div className='profile-status'>



				{this.state.editMode
					?
					<div>
						<input autoFocus onBlur={this.deactivateEditMode} type="text" defaultValue={this.props.status} onFocus={this.hangleFocus} />
					</div>
					:
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
					</div>
				}
			</div>
		);

	}

}

export default ProfileStatus;