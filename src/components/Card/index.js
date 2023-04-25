import styles from './Card.module.scss';

function Card({title, price, imgUrl}) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/images/heart-unactive.svg" alt="unactive" />
      </div>
      <img className="cardImg" width={133} height={112} src={imgUrl} alt="img" />
      <h4>{title}</h4>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price}</b>
        </div>
        <button className="button" onClick={() => {}}>
          <img width={11} height={11} src="/images/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
