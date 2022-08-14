import './navbar.css'
import { CartContext } from '../../../useContext';
import { useContext } from 'react';

const CartProduct = (props) => {
    let { cartArr, setCartArr } = useContext(CartContext);
    const deleteItSelf = () => {
        setCartArr(cartArr.filter(el => el.id != props.data.id));
    }
    return(
        <div className='per-product'>
            <button className='product-close' onClick={deleteItSelf}>X</button>
            <span>
                <img src={props.data.image} alt="" />
            </span>
            <span>
                <h2>{props.data.type}</h2>
                <h2 className='cost-cart-product'>Cost: ${props.data.cost}</h2>
                <h4>{props.data.inCart}</h4>
            </span>
        </div>
    )
}

export default CartProduct;