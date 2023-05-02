import Header from './components/Header';
import Drawer from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Route, Routes } from 'react-router-dom';


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
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
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

  const onAddToFavorite = (data) => {
    if (favorites.find((obj) => obj.id === data.id)) {
      localStorage.setItem('favorites', JSON.stringify(favorites.filter((obj) => obj.id !== data.id)));
      setFavorites(prev => prev.filter((item) => item.id !== data.id));
    } else {
      localStorage.setItem('favorites', JSON.stringify(favorites.length > 0 ? [...favorites, data] : [data]));
      setFavorites((prev) => [...prev, data]);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} cartItems={cartItems} onRemoveItem={onRemoveFromCart} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path='/' exact element={<Home searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} items={items} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} />}>
        </Route>
        <Route path='/favorites' element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} exact>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
