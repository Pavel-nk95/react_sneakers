import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <section className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <img src="/images/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex cards">
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
