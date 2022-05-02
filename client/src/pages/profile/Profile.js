import './Profile.css';
import Header from '../header/Header';

function Profile() {
  return (
    <div>
      <Header />

      <div className='profile-wrapper'>{ localStorage.getItem('user_name').replace(/^\w/, (c) => c.toUpperCase()) }'s Profile Page</div>
    </div>
  );
}

export default Profile;