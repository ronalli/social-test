import React, { useEffect, useState } from 'react';


const ProfileStatusHooks = (props) => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	}

	const onChangeStatus = (e) => {
		setStatus(e.target.value);
	}

	const handleFocus = (e) => {
		e.target.select();
	}

	const onKeyStatus = (e) => {
		if (e.keyCode === 13) {
			setEditMode(false);
			props.updateStatus(status);
		}
	}

	return (
		<div className='profile-status'>
			{editMode
				?
				<div>
					<input value={status} autoFocus onBlur={deactivateEditMode} onChange={onChangeStatus} onFocus={handleFocus} onKeyDown={onKeyStatus} />
				</div>
				:
				<div>
					<span onDoubleClick={activateEditMode}>{props.status || 'not status'}</span>
				</div>
			}
		</div>
	)
}

export default ProfileStatusHooks;