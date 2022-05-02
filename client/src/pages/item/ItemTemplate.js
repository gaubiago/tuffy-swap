import './ItemTemplate.css';
import Header from '../header/Header';
import UserRating from './components/UserRating';
import { useNavigate, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';

const ItemTemplate = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const data = location.state.data;

  return (
    <div className='item-template'>
      <Header />
      <div className='item-grid-container'>
        <div className='item-photo-container'>
          <img
            className='item-detail-img'
            src={require(`../../images/item_images/${location.state.data.itemImageName}`)}
            alt=''
          />
        </div>
        <div className='item-info-container'>
          <p className='item-name'>{location.state.data.name}</p>
          <p className='item-price'>${location.state.data.price}</p>

          <div className='item-location-container'>
            <FontAwesomeIcon className='item-icon' icon={faLocationDot} />
            <p className='item-location'>{location.state.data.location}</p>
          </div>

          <div className='item-condition-container'>
            <FontAwesomeIcon className='item-icon' icon={faHourglass} />
            <p className='item-condition'>
              Condition: {location.state.data.condition}
            </p>
          </div>

          <button
            className='btn-item-buy'
            onClick={() => {
              navigate(`/checkout`, {
                state: {
                  data,
                },
              });
            }}
          >
            Buy
          </button>

          <div className='item-user-container'>
            <div className='item-user-img-container'>
              <img
                className='item-user-img'
                src={require(`../../images/user_images/${location.state.data.sellerImageName}`)}
                alt=''
              />
            </div>
            <div className='item-user-info-container'>
              <a href='/' className='item-user-name'>
                {location.state.data.sellerName}
              </a>
              <div className='item-user-rating'>
                <UserRating rating={location.state.data.sellerRating} />
              </div>
            </div>
          </div>
        </div>
        <div className='item-description-container'>
          <p className='item-description-title'>Description</p>
          <p className='item-description-text'>
            {location.state.data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemTemplate;
