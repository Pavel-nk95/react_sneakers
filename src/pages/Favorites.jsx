import Card from '../components/Card';

function Favorites() {
  return (
    <section className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
      <h1>{"Закладки"}</h1>
    </div>
    <div className="d-flex cards flex-wrap">
    </div>
  </section>
  );
};

export default Favorites;