import './ItemListGrid.css';
import { useEffect, useState } from 'react';
import { URL_ITEMS } from '../../../Config.js';

import ItemListContainer from './components/ItemListContainer';
import Header from '../../header/Header';

function ItemListGrid() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const res = await fetch(URL_ITEMS);
        const data = await res.json();

        setItems([...data]);
      } catch (err) {
        return console.error(err);
      }
    };

    loadItems();
  }, []);

  return (
    <div>
      <Header />
      <ItemListContainer items={items} />
    </div>
  );
}

export default ItemListGrid;
