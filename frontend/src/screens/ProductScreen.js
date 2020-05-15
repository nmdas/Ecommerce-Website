import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return() => {
            //
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    };

    return <div>
    <div className="back">
        <Link to="/">Back</Link>
    </div>

    {loading? <div>Loading...</div> :
            error? <div>{error}</div> :
    (        
    <div className="details">
        <div className="details-image">
            <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
            <ul>
                <li><h4>{product.name}</h4></li>
                <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
                <li>Price: <b>${product.price}</b></li>
                <li>Description:
                    <div>{product.description}</div>
                </li>
            </ul>
        </div>
        <div className="details-actions">
            <ul>
                <li>Price: {product.price}</li>
                <li>Status: {product.countInStock > 0 ? "In stock." : ""}</li>
                <li>Quantity: 
                    <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                        {[...Array(product.countInStock).keys()].map(x=>
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        )}
                    </select>
                </li>
                {/* <button className="button ">Add to cart</button> */}
                <li>
                    {product.countInStock > 0 && <button onClick={handleAddToCart} className="button">Add to Cart</button>}
                </li>
            </ul>
        </div>


        </div>
    )}

    </div>
    
}


export default ProductScreen;