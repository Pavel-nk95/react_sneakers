import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Route, Routes } from 'react-router-dom';
import AppContext from "./context";
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart');
      const itemsResponse = await axios.get('https://6448eec5b88a78a8f0f7e89a.mockapi.io/items');
      if (!JSON.parse(localStorage.getItem("favorites"))) {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      } else {
        setFavorites(JSON.parse(localStorage.getItem("favorites")));
      }


        if (!JSON.parse(localStorage.getItem("orders"))) {
          localStorage.setItem('orders', JSON.stringify(orders));
        } else {
          setOrders(JSON.parse(localStorage.getItem("orders")));
        }

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  const onAddToCart = (data) => {
    try {
      if (cartItems.find((item) => item.parentId === data.parentId)) {
        setCartItems(prev => prev.filter((item) => item.parentId !== data.parentId));
        const [currentCartItem] = cartItems.filter((item) => item.parentId === data.parentId);
        axios.delete(`https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart/${currentCartItem.id}`);
      } else {
        axios.post('https://6448eec5b88a78a8f0f7e89a.mockapi.io/cart', data);
        setCartItems(prev => [...prev, data]);
      }
    } catch (error) {
      console.error(error);
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
    if (favorites.find((obj) => obj.parentId === data.parentId)) {
      localStorage.setItem('favorites', JSON.stringify(favorites.filter((obj) => obj.parentId !== data.parentId)));
      setFavorites(prev => prev.filter((item) => item.parentId !== data.parentId));
    } else {
      localStorage.setItem('favorites', JSON.stringify(favorites.length > 0 ? [...favorites, data] : [data]));
      setFavorites((prev) => [...prev, data]);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  };

  return (
    <div className="wrapper clear">
      <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems, orders, setOrders }}>
        {cartOpened ? <Drawer onClose={() => setCartOpened(false)} cartItems={cartItems} onRemoveItem={onRemoveFromCart} /> : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path='/' exact element={<Home cartItems={cartItems} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} items={items} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} isLoading={isLoading} />}>
          </Route>
          <Route path='/favorites' element={<Favorites />} exact>
          </Route>
          <Route path='/orders' element={<Orders orders={orders} />} exact>
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
