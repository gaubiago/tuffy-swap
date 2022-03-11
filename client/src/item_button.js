import item_pic from './item_photo/tuffy_2.jpeg';
import './item_button.css';

function Icon() {
  return (
    <div className="Box">
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item_pic} className="item_pic" alt="pic" />

          <div className="item_info">
            <p>Tuffy Mascot Stickers</p>
            <p>$10.00</p>
          </div>
        </a>

    </div>
  );
}

export default Icon;