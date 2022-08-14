import './shop.css'
import { CartContext } from '../../../useContext';
import { useContext } from 'react';

const DataProductDraw = (props) => {
    let { cartArr, setCartArr } = useContext(CartContext);
    const buyThis = () => {
        setCartArr(old => [...old, props.data])
    }
    return(
        <div className='shop-per'>
            <span>
                <img src={props.data.image} alt="" />
                <h1>{props.data.type}</h1>
                <span className='cost-impormation'>
                    <h4>size of wish</h4>
                    <h4>${props.data.cost}</h4>
                </span>
                <button onClick={buyThis}>Buy</button>
            </span>
        </div>
    )
}

export default DataProductDraw;