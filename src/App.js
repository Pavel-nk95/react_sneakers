function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
          <ul className="cart-items mt-20">
            <li className="cart-item d-flex align-center p-10 mb-20">
              <div
                style={{ backgroundImage: 'url(/images/sneakers/1.png)' }}
                className="cartItemImg"></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="btn-remove"
                width={32}
                height={32}
                src="/images/btn-remove.svg"
                alt="remove"
              />
            </li>

            <li className="cart-item d-flex align-center p-10 mb-20">
              <div
                style={{ backgroundImage: 'url(/images/sneakers/2.png)' }}
                className="cartItemImg"></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="btn-remove"
                width={32}
                height={32}
                src="/images/btn-remove.svg"
                alt="remove"
              />
            </li>
          </ul>
          <div className="cart-footer">
            <ul className="cart-total mb-20">
              <li className="d-flex align-center mb-10">
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex align-center">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="send-btn"> Оформить заказ </button>
          </div>
        </div>
      </div>

      <header className="header d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/images/logo-1.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-20">
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
      <section className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <img src="/images/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex cards">
          <div className="card">
            <div className="favorite">
              <img src="/images/heart-unactive.svg" alt="unactive" />
            </div>
            <img
              className="cardImg"
              width={133}
              height={112}
              src="/images/sneakers/1.png"
              alt="img"
            />
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="cardImg"
              width={133}
              height={112}
              src="/images/sneakers/2.png"
              alt="img"
            />
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="cardImg"
              width={133}
              height={112}
              src="/images/sneakers/3.png"
              alt="img"
            />
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="cardImg"
              width={133}
              height={112}
              src="/images/sneakers/4.png"
              alt="img"
            />
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
