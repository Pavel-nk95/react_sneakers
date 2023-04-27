import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('https://6448eec5b88a78a8f0f7e89a.mockapi.io/items')
      .then((resp) => setItems(resp.data))
    axios.get('https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart')
      .then((resp) => setCartItems(resp.data))
  }, []);

  const onAddToCart = (data) => {
    axios.post('https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart', data);
    setCartItems(prev => [...prev, data]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const onAddToFavorite = () => {

  };

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} cartItems={cartItems} onRemoveItem={onRemoveFromCart} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <section className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : "Все кроссовки"}</h1>
          <div className="search d-flex">
            <img src="/images/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/images/btn-remove.svg" alt="Clear"></img>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex cards flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(({ title, imgUrl, price }, index) => {
            return (
              <Card key={index} title={title} price={price} imgUrl={imgUrl} onClickPlus={onAddToCart} />
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
