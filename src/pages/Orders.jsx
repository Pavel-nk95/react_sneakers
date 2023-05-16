import { useContext } from 'react';
import Card from '../components/Card/Card';
import AppContext from "../context";

function Orders() {

  const { orders } = useContext(AppContext);

  return (
    <section className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex cards flex-wrap">
        {
          orders.map((item, index) => {
            return (
              <Card 
                key={index}
                {...item}
             />
            )
          })}
      </div>
    </section>
  );
};

export default Orders;