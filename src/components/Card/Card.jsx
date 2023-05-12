import styles from './Card.module.scss';
import { useState, useContext } from 'react';
import ContentLoader from "react-content-loader"

import AppContext from "../../context";

function Card({ parentId, title, price, imgUrl, onClickPlus, favorited = false, loading = false }) {
  const [isFavorite, setIsFavorite] = useState(favorited);
  const { isItemAdded, onAddToFavorite } = useContext(AppContext);

  const onPlus = () => {
    onClickPlus({ title, price, imgUrl, parentId });
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorite({ title, price, imgUrl, parentId });
  };

  return (
    <div className={styles.card}>
      {
        (loading ? <ContentLoader
          speed={0}
          width={150}
          height={195}
          viewBox="0 0 150 195"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="125" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="170" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="165" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> : <><div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? "/images/heart-active.svg" : "/images/heart-unactive.svg"} alt="unactive" />
        </div>
          <img className="cardImg" width={133} height={112} src={imgUrl} alt="img" />
          <h4>{title}</h4>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>{price} руб.</b>
            </div>
            <img className={styles.plus} onClick={onPlus} src={isItemAdded(parentId) ? "/images/checked-btn.svg" : "/images/plus-btn.svg"} alt="plus" />
          </div></>
        )}
    </div>
  );
}

export default Card;
