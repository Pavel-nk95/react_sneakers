import styles from './Card.module.scss';
import { useState, useEffect } from 'react';
import ContentLoader from "react-content-loader"

function Card({ id, title, price, imgUrl, onClickPlus, onFavorite, favorited = false, added, loading = false }) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onPlus = () => {
    onClickPlus({ title, price, imgUrl, id });
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({ id, title, imgUrl, price });
    setIsFavorite(!isFavorite);
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
              <b>{price}</b>
            </div>
            <img className={styles.plus} onClick={onPlus} src={isAdded ? "/images/checked-btn.svg" : "/images/plus-btn.svg"} alt="plus" />
          </div></>
        )}
    </div>
  );
}

export default Card;
