import { useContext } from 'react';
import Card from '../components/Card/Card';
import AppContext from "../context";

function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext);
  return (
    <section className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{"Закладки"}</h1>
      </div>
      <div className="d-flex cards flex-wrap">
        {
          favorites && favorites.map((item, index) => {
            return (
              <Card key={index} favorited={true} {...item} />
            )
          })}
      </div>
    </section>
  );
};

export default Favorites;