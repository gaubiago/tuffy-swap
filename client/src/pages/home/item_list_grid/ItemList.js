import './ItemListSmall.css';
import '../item_list_button/ItemButton.css';

import ItemListContainer from './components/ItemListContainer';
import Header from '../../header/Header';
import itemImg from '../images/tuffy_2.jpeg';

function ItemList() {
  function createDummyItems() {
    const dummyItems = [];

    for (let i = 0; i < 15; i++) {
      dummyItems.push({
        id: i + 1,
        imgURL: itemImg,
        description: {
          name: `Tuffy Mascot Stickers ${i + 1}`,
          price: 10,
          location: 'Fullerton, CA',
        },
      });
    }

    return dummyItems;
  }

  const dummyItems = createDummyItems();

  return (
    <div>
      <Header />

      <ItemListContainer items={dummyItems} />
    </div>
  );
}

export default ItemList;
