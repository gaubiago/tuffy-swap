import home_button from './Tuffy_Swap_Button_small.png';
import './Header.css';
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <header className="Header">
      <div className="Logo" onClick={() => navigate('/')}>
        <img src={home_button} alt="logo" />
      </div>
      <div class="login" href="#">
        Log-in
      </div>
      <div class="register" href="#">
        Register
      </div>
    </header>
  );
}

export default Header;