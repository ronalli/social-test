import React, { useEffect, useState } from 'react';
import './ProfileInfo';

const ProfileStatusHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const hangleFocus = (event) => { event.target.select() }

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	}

	const onChangeStatus = (e) => {
		setStatus(e.target.value)
	}
	return (
		<div className='profile-status'>

			{editMode
				?
				<div>
					<input autoFocus onBlur={deactivateEditMode} value={status} onChange={onChangeStatus} onFocus={hangleFocus} />
				</div>
				:
				<div>
					<span onDoubleClick={activateEditMode}>{props.status || 'not status'}</span>
				</div>
			}
		</div>
	);

}

export default ProfileStatusHooks;