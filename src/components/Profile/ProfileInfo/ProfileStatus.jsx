import React from 'react';
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

	deactivateEditMode = () => {
		this.setState({ editMode: false })
	}

	onStatusChange = (e) => {
		this.props.updateStatus(e.target.value);
	}

	render() {

		return (
			<div className='profile-status'>

				{this.state.editMode
					?
					<div>
						<input autoFocus onBlur={this.deactivateEditMode} type="text" defaultValue={this.state.status} onFocus={this.hangleFocus} onChange={this.onStatusChange} />
					</div>
					:
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
					</div>
				}
			</div>
		);

	}

}

export default ProfileStatus;