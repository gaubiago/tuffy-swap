import item_photo from './item_photos/tuffy_2.jpeg';
// import user_photo from './user_photos/someone.jpeg'
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from "react-router-dom";

function Item() {
  let navigate = useNavigate();

  return (
    <div className='Wrapper'>

      <div className="Item-name">
        <snap>
          Tuffy mascot stickers
        </snap>
      </div>

      <div className='Wrapper-left-col'>
        <div className='Item-image'>
          <img src={item_photo} className="Item-logo" alt="logo" />
        </div>
        <div className='Item-price'>
          <span className='Item-dollar-sign'>
            $
          </span>
          10.00
        </div>
        <div className='Item-buy-button'>
          <button 
            type="button" 
            class="btn btn-success"
            onClick={() => navigate('/checkout')}
          >        
            <div className='Item-buy-button-text'>
              Buy
            </div>
          </button>
        </div>
      </div>

      <div className='Wrapper-right-col'>
        <div className='Seller'>
          <div className='Seller-profile-pic'>
            {/* <img src={user_photo} className="Item-logo" alt="logo" /> */}
          </div>
          <div className='Seller-name'>
            <span>
              John Smith
            </span>
          </div>
          <div className='Seller-reputation'>
            <div className='Seller-rating'>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className='Seller-rating'>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className='Seller-rating'>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className='Seller-rating'>
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <div className='Seller-rating'>
              <FontAwesomeIcon icon={faEmptyStar} />
            </div>
          </div>
        </div>
        <div className="Item-description">
          <p>
            These are the three rare, coolest sticker you will ever find, for 
            the best price ever that no one can match. Show that you are a
            proud Tuffy by putting these stickers on your laptop, water 
            bottle, or wherever you feel like.
          </p>
        </div>
        <div className='Seller-location'>
          <FontAwesomeIcon className='Seller-location-icon' icon={ faLocationDot } />
          <span>
            Fullerton, CA
          </span>
        </div>
      </div>
    </div>
  );
}

export default Item;