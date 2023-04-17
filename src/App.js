function App() {
  return (
    <div className="wrapper clear">
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
            <img width={18} height={18} src="/images/heart.svg" />
          </li>
          <li className="mr-10">
            <img width={18} height={18} src="/images/user.svg" />
          </li>
        </ul>
      </header>
      <section className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img
              className="cardImg"
              width={133}
              height={112}
              src="/images/sneakers/1.png"
              alt="img"></img>
            <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="plus"></img>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
