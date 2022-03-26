import ItemSmall from "./ItemSmall";

function ItemListContainer({ items }) {
  return (
    <div className="itemListContainer">
      {items.map((item) => (
        <ItemSmall key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;
