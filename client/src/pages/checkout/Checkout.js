import './Checkout.css';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';

function Checkout() {
  let location = useLocation();
  const data = location.state.data;

  return (
    <div>
      <Header />

      <div className='checkout-wrapper'>
        Contact <span> {data.sellerName} </span> at <a href={ `${'mailto:' + data.email}` }> {data.email} </a> to proceed with the swap!
      </div>
    </div>
  );
}

export default Checkout;
