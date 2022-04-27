import ItemDescription from './ItemDescription';

function ItemSmall({ item }) {
  return (
    <div className='itemContainerSmall'>
      <img src={item.imgURL} className='itemImageSmall' alt='Item for sale' />
      <ItemDescription description={item.description} />
    </div>
  );
}

export default ItemSmall;
