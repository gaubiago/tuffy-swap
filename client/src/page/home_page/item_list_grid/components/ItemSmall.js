import ItemDescription from "./ItemDescription";

function ItemSmall({ item }) {
  return (
    <div className="itemContainerSmall">
      <img src={item.imgURL} className="itemImageSmall" />
      <ItemDescription description={item.description} />
    </div>
  );
}

export default ItemSmall;
