import ItemSmall from './ItemSmall';
import { useNavigate } from 'react-router-dom';

function ItemListContainer({ items }) {
  let navigate = useNavigate();
  return (
    <div className='itemListContainer' onClick={() => navigate('/item')}>
      {items.map((item) => (
        <ItemSmall key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;
