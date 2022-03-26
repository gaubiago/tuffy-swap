function ItemDescription({ description }) {
  const price = `$ ${new Intl.NumberFormat("en-US").format(description.price)}`;

  return (
    <div className="itemDescriptionSmall">
      <h5 className="itemNameSmall">{description.name}</h5>
      <h5 className="itemPriceSmall">{price}</h5>
      <h5 className="itemLocationSmall">{description.location}</h5>
    </div>
  );
}

export default ItemDescription;
