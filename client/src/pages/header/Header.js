import home_button from './Tuffy_Swap_Button_small.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate();
  return (
    <header className='Header'>
      <div className='Logo' onClick={() => navigate('/')}>
        <img src={home_button} alt='logo' />
      </div>
      <div className='login' onClick={() => navigate('/login')}>
        Log-in
      </div>
      <div className='register' onClick={() => navigate('/register')}>
        Register
      </div>
    </header>
  );
}

export default Header;
