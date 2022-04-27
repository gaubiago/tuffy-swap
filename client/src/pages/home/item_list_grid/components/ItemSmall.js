import ItemDescription from './ItemDescription';
import { useNavigate } from 'react-router-dom';
import { URL_ITEMS } from '../../../../Config';

function ItemSmall({ item }) {
  let navigate = useNavigate();

  const onClickHandler = async () => {
    try {
      const res = await fetch(`${URL_ITEMS}/${item.id}`);
      const data = await res.json();

      navigate(`item/${item.id}`, {
        state: {
          data,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <div className='grid-item-container' onClick={onClickHandler}>
      <div className='grid-item-img-container'>
        <img
          src={require(`../../../../images/item_images/${item.itemImageName}`)}
          className='grid-item-img'
          alt='Item for sale'
        />
      </div>
      <ItemDescription item={item} />
    </div>
  );
}

export default ItemSmall;
