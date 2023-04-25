import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999 руб.",
    imgUrl: "/images/sneakers/1.png"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499 руб.",
    imgUrl: "/images/sneakers/2.png"
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999 руб.",
    imgUrl: "/images/sneakers/3.png"
  },
];

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
          {arr.map(({title, imgUrl, price}) => {
            return (
              <Card title={title} price={price} imgUrl={imgUrl}/>
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
