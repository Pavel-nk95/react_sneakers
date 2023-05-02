import Card from '../components/Card/Card';

function Favorites({ items, onAddToFavorite }) {
  return (
    <section className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{"Закладки"}</h1>
      </div>
      <div className="d-flex cards flex-wrap">
        {items.map((item, index) => {
          return (
            <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
          )
        })}
      </div>
    </section>
  );
};

export default Favorites;