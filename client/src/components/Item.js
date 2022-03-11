import itemImg from "../images/item.png";
import ItemDescription from "./ItemDescription";

function Item({ item }) {
  return (
    <div className="itemContainerSmall">
      <img src={item.imgURL} className="itemImageSmall" />
      <ItemDescription description={item.description} />
    </div>
  );
}

export default Item;
