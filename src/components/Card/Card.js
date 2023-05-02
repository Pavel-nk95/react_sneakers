import styles from './Card.module.scss';
import { useState, useEffect } from 'react';

function Card({ id, title, price, imgUrl, onClickPlus, onFavorite, favorited = false }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onPlus = () => {
    onClickPlus({ title, price, imgUrl });
    setIsAdded(true);
  }

  const onClickFavorite = () => {
    onFavorite({ id, title, imgUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
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
      </div>
    </div>
  );
}

export default Card;
