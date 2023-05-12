import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import AppContext from "../context";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("orders"))) {
      localStorage.setItem('orders', JSON.stringify(orders));
    } else {
      setOrders(JSON.parse(localStorage.getItem("orders")));
    }
  }, []);

  return (
    <section className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex cards flex-wrap">
        {
          [].map((item, index) => {
            return (
              <Card />
            )
          })}
      </div>
    </section>
  );
};

export default Orders;