import ItemSmall from './ItemSmall';

function ItemListContainer({ items }) {
  return (
    <div className='item-list-grid'>
      {items.map((item) => (
        <ItemSmall key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;
