function Drawer({ onClose }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">
          Корзина
          <img
            className="btn-remove cu-p"
            width={32}
            height={32}
            src="/images/btn-remove.svg"
            alt="close"
            onClick={onClose}
          />
        </h2>
        <ul className="cart-items mt-20">
          <li className="cart-item d-flex align-center p-10 mb-20">
            <div
              style={{ backgroundImage: 'url(/images/sneakers/1.png)' }}
              className="cartItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="btn-remove"
              width={32}
              height={32}
              src="/images/btn-remove.svg"
              alt="remove"
            />
          </li>

          <li className="cart-item d-flex align-center p-10 mb-20">
            <div
              style={{ backgroundImage: 'url(/images/sneakers/2.png)' }}
              className="cartItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="btn-remove"
              width={32}
              height={32}
              src="/images/btn-remove.svg"
              alt="remove"
            />
          </li>
        </ul>
        <div className="cart-footer">
          <ul className="cart-total mb-20">
            <li className="d-flex align-center mb-10">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex align-center">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="send-btn">
            Оформить заказ <img src="/images/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
