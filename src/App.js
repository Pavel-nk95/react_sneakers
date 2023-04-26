import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://6448eec5b88a78a8f0f7e89a.mockapi.io/items')
      .then((resp) => resp.data).then((data) => setItems(data))
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <section className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <img src="/images/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex cards flex-wrap">
          {items.map(({ title, imgUrl, price }) => {
            return (
              <Card title={title} price={price} imgUrl={imgUrl} onClickPlus={() => console.log('!!!')} onClickFavorite={() => console.log('???')} />
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
