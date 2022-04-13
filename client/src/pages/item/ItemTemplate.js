import './ItemTemplate.css';

const ItemTemplate = ({ itemData }) => {
  return (
    <div>
      <div className='grid-container'>
        <div className='item-photo-container'>
          <img
            className='item-detail-img'
            src={require(`${itemData.itemImgPath}`)}
            alt=''
          />
        </div>
        <div className='item-info-container'>
          <p className='itemName'>Item name</p>
        </div>
      </div>
    </div>
  );
};

export default ItemTemplate;
