import Prealoder from '../../common/Preloader/Prealoder';
import './ProfileInfo.css';
import userPhoto from '../../../Assets/images/user.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return (<Prealoder />);
	} else {
		return (
			<>
				<div className='profile-info'>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
				</div>
				<div className='profile-user'>
					<img src={props.profile.photos.small || userPhoto} alt="alt" />
					<div className='section-about-me'>
						<span>{props.profile.aboutMe}</span>
						<span>{props.profile.fullName}</span>
					</div>
				</div>
			</>
		);
	}



}

export default ProfileInfo;