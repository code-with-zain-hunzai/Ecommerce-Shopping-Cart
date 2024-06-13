import { useSelector, useDispatch } from 'react-redux';
import { removefromcart } from './Redux/cartAction';
import { getTotal } from './Redux/cartReducer';
import { MdDeleteOutline } from "react-icons/md";

const Checkout = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  console.log("Cart items in Checkout component:", cart);

  if (!Array.isArray(cart) || cart.length === 0) {
    return <p className='text-4xl font-bold text-center  mx-auto font-serif mt-52 hover:text-red-700 hover:scale-110  overflow-hidden uppercase'>Your cart is empty.</p>;
  }

  return (
    <div className='w-full min-h-screen'>
      <div className='container mx-auto grid grid-cols-6 mt-5 gap-5'>
        {cart.map(item => (
          <div className='checkout-product' key={item.id}>
            <img className='rounded-md' src={item.image} alt={item.title} style={{ height: "300px", width: "300px" }} />
            <div>
              <h2 className='font-bold my-2'>{item.title}</h2>
              <p className='text-lg mb-2'>{item.rating}</p>
              <p className='font-bold mb-2'>{item.price}$</p>
              <button
                onClick={() => dispatch(removefromcart(item.id))}
                className='bg-purple-700 text-white p-2 rounded-lg font-bold flex'
              >
                Remove cart
                <MdDeleteOutline className="mt-1 ml-2 text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='Subtotal w-[80%] mx-auto mt-10'>
        <h2 className='font-medium'>Subtotal:</h2>
        <p className='font-bold'>Total: ${getTotal(cart)}</p>
      </div>
    </div>
  );
};

export default Checkout;
