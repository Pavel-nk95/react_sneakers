import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Route, Routes } from 'react-router-dom';
import AppContext from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart');
      const itemsResponse = await axios.get('https://6448eec5b88a78a8f0f7e89a.mockapi.io/items');
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  const onAddToCart = (data) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(data.id))) {
        setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(data.id)));
        axios.delete(`https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart/${data.id}`);
      } else {
        axios.post('https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart', data);
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {

    }
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} cartItems={cartItems} onRemoveItem={onRemoveFromCart} /> : null}
      <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded }}>
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path='/' exact element={<Home cartItems={cartItems} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} items={items} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} isLoading={isLoading} />}>
          </Route>
          <Route path='/favorites' element={<Favorites onAddToFavorite={onAddToFavorite} />} exact>
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
