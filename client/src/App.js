import logo from "./logo.svg";
import "./ItemListSmall.css";
import ItemListContainer from "./components/ItemListContainer";

import itemImg from "./images/item.png";

function App() {
  function createDummyItems() {
    const dummyItems = [];

    for (let i = 0; i < 15; i++) {
      dummyItems.push({
        id: i + 1,
        imgURL: itemImg,
        description: {
          name: `Infinity Gauntlet ${i + 1}`,
          price: 9.99,
          location: "Asgard",
        },
      });
    }

    return dummyItems;
  }

  const dummyItems = createDummyItems();

  console.log(dummyItems);

  return (
    <div>
      <ItemListContainer items={dummyItems} />
    </div>
  );
}

export default App;
