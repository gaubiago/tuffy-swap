function ItemDescription({ description }) {
  return (
    <div className="itemDescriptionSmall">
      <h5 className="itemNameSmall">{description.name}</h5>
      <h5 className="itemPriceSmall">{description.price}</h5>
      <h5 className="itemLocationSmall">{description.location}</h5>
    </div>
  );
}

export default ItemDescription;
