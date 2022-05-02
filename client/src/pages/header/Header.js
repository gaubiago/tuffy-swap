import home_button from './Tuffy_Swap_Button_small.png';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  let navigate = useNavigate();
  let location = useLocation();
  
  let hideRightButtons = (location.pathname === '/login' || location.pathname === '/register');
  const loggedInUser = localStorage.getItem('user')

  return (
    <header className='Header'>
      <div className='Logo' onClick={() => navigate('/')}>
        <img src={home_button} alt='logo' />
      </div>
      { 
        !hideRightButtons && (!loggedInUser &&
        <div className='header-login' onClick={() => navigate('/login')}>
          <span> Log In</span>
        </div>)
      }
      { 
        !hideRightButtons && (!loggedInUser &&
        <div className='header-register' onClick={() => navigate('/register')}>
          <span> Register </span>
        </div>)
      }
      { 
        loggedInUser && 
        <div className='header-user-profile' >
          <span> Hello, { localStorage.getItem('user_name').replace(/^\w/, (c) => c.toUpperCase()) }! </span>
          <div className='header-user-profile-pic' onClick={() => navigate('/profile')}>
              {/* image being loaded in respective CSS */}
          </div>
        </div>
      }
      { 
        loggedInUser && 
        <div className='header-logout' onClick={() => {localStorage.removeItem('user'); navigate('/login')}}>
          <span> Log Out </span>
        </div>
      }
    </header>
  );
}

export default Header;
