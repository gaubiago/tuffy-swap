import home_button from './Home_Button/Tuffy_Swap_Button_small.png';
import './Button.css';

function Button() {
  return (
    <div className="Button">
      <header className="Button-header">
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={home_button} className="Button-logo" alt="logo" />
        </a>
        <a class="login" href="#">
        <b>Log-in </b>
        </a>
        <a class="register" href="#">
        <b>Register</b>
        </a>
      </header>
    </div>
  );
}

export default Button;