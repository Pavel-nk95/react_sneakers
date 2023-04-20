function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/images/heart-unactive.svg" alt="unactive" />
      </div>
      <img className="cardImg" width={133} height={112} src="/images/sneakers/1.png" alt="img" />
      <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/images/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
