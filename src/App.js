function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
        <img width={40} height={40} src="/images/logo-1.png" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
          <ul className="headerRight">
            <li>
              <svg />
              <span>1205 руб.</span>
            </li>
            <li>
              <svg />
            </li>
          </ul>
      </header>
      <section className="content">
        <h1>Все кроссовки</h1>
      </section>
    </div>
  );
}

export default App;
