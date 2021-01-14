import Prealoder from '../../common/Preloader/Prealoder';
import './ProfileInfo.css';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return (<Prealoder />);
	} else {
		return (
			<>
				<div className='profile-info'>
					<img src="https://www.shell.com/energy-and-innovation/new-energies/nature-based-solutions/_jcr_content/pagePromo/image.img.960.jpeg/1554332446421/canopy-header.jpeg" alt="nature" />
				</div>
				<div>
					<img src={props.profile.photos.small} alt="alt" />
				</div>
			</>
		);
	}



}

export default ProfileInfo;