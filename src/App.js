
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Home from './pages/Favorites';
import { Route } from 'react-router-dom';
import Favorites from './pages/Favorites';


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

  const onAddToFavorite = (data) => {
    setFavorites(prev => [...prev, data]);
    localStorage.setItem('favorites', JSON.stringify(favorites.length > 0 ? [...favorites, data] : [data]));
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} cartItems={cartItems} onRemoveItem={onRemoveFromCart} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/favorites' exact>
        <Favorites items={favorites} />
      </Route>
    </div>
  );
}

export default App;
