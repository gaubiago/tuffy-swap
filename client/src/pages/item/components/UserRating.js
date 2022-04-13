import './UserRating.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

const UserRating = ({ rating }) => {
  const fullStar = Math.trunc(rating);
  const halfStar = (rating * 10) % 10;

  const starArr = [];

  for (let i = 0; i < fullStar; i++) {
    starArr.push('full');
  }

  if (starArr.length < 5) {
    starArr.push(halfStar === 0 ? 'empty' : 'half');
    for (let i = starArr.length; i < 5; i++) {
      starArr.push('empty');
    }
  }

  return (
    <div>
      <div className='item-user-rating-container'>
        {starArr.map((star, i) => {
          if (star === 'full')
            return (
              <FontAwesomeIcon
                key={i}
                className='item-icon-rating'
                icon={faStar}
              />
            );

          if (star === 'half')
            return (
              <FontAwesomeIcon
                key={i}
                className='item-icon-rating'
                icon={faStarHalfStroke}
              />
            );

          if (star === 'empty')
            return (
              <FontAwesomeIcon
                key={i}
                className='item-icon-rating'
                icon={faEmptyStar}
              />
            );
        })}
      </div>
    </div>
  );
};

export default UserRating;
