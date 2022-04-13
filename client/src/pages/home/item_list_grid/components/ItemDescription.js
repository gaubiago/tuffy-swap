function ItemDescription({ item }) {
  const price = `$ ${new Intl.NumberFormat('en-US').format(item.price)}`;

  return (
    <div className='grid-item-info-container'>
      <p className='grid-item-name'>{item.name}</p>
      <p className='grid-item-price'>{price}</p>
      <p className='grid-item-location'>{item.location}</p>
    </div>
  );
}

export default ItemDescription;
