function Header({ onClickCart }) {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/images/logo-1.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight d-flex">
        <li className="mr-20 cu-p" onClick={onClickCart}>
          <img width={18} height={18} src="/images/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-10">
          <img width={18} height={18} src="/images/heart-btn.svg" />
        </li>
        <li className="mr-10">
          <img width={18} height={18} src="/images/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
