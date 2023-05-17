import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header({ onClickCart }) {

  const { totalPrice } = useCart();

  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <Link to="">
          <img width={40} height={40} src="images/logo-1.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className="headerRight d-flex">
        <li className="mr-20 cu-p" onClick={onClickCart}>
          <img width={18} height={18} src="images/cart.svg" alt="cart" />
          <span>{totalPrice === 0 ? '0' : totalPrice} руб.</span>
        </li>
        <li className="mr-10 cu-p">
          <Link to="favorites">
            <img width={18} height={18} src="images/heart-btn.svg" alt="heart" />
          </Link>
        </li>
        <li className="mr-10 cu-p">
          <Link to="orders">
            <img width={18} height={18} src="images/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
