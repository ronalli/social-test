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
		this.props.updateStatus(this.state.status);
	}

	onChangeStatus = (e) => {
		this.setState({
			status: e.target.value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {

		return (
			<div className='profile-status'>

				{this.state.editMode
					?
					<div>
						<input autoFocus onBlur={this.deactivateEditMode} value={this.state.status} onFocus={this.hangleFocus} onChange={this.onChangeStatus} />
					</div>
					:
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || 'not status'}</span>
					</div>
				}
			</div>
		);

	}

}

export default ProfileStatus;