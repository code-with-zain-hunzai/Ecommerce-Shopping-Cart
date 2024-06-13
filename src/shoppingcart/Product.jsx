import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from './Redux/cartAction';
import { IoIosCart } from "react-icons/io";
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

const Product = ({ id, title, price, rating, image, currency, }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        dispatch(addtocart(id, title, price, rating, image, quantity));
        setIsDisabled(true);
    };

    return (
        <div className='w-full min-h-screen'>
            <div className='container mx-auto'>
                <div>
                    <img style={{ height: "300px", width: "300px" }} className='rounded-lg' src={image} alt={title} />
                </div>
                <h4 className='font-bold text-xl transition-transform transform hover:scale-110'>{title}</h4>
                <p className='transition-transform transform hover:scale-110 font-bold'>Rating{rating}</p>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-xl transition-transform transform hover:scale-110'>{price}{currency}</p>

                    <div className='flex items-center mt-4'>
                        <label className='mr-2'>Quantity:</label>
                        <select
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className=' p-1 rounded-lg'
                        >
                            {[...Array(10).keys()].map(num => (
                                <option key={num + 1} value={num + 1}>{num + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    onClick={handleClick}
                    disabled={isDisabled}
                    className={`border mb-16 p-1 mt-5 flex rounded-lg bg-purple-700 text-white ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'transition-transform transform hover:scale-110'}`}
                >
                    Add Cart <IoIosCart className='mt-1 ml-2 text-xl' />
                </button>
            </div>
        </div>
    );
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default Product;
