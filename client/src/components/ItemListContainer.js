import Item from "./Item";

function ItemListContainer({ items }) {
  return (
    <div className="itemListContainer">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;
