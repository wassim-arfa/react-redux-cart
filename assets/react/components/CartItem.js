import React from 'react'
import {removeFromCart} from "../store/actions/actions";
import {connect} from "react-redux";

class CartItem extends React.Component {

    removeFromCart = (product) => {
        this.props.removeFromCart(product);
    }
    
    render() {
        const {
            props,
        } = this;

        const {product} = props
        return (
     
            <div className="card mr-3 mb-3 box-shadow" style={{width: '10rem'}}>
                <img className="card-img-top" alt={product.title}
                     style={{height: 100, width: '100%', display: 'block'}}
                     src={product.picture}
                     data-holder-rendered="true"/>

                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price : {product.price} $</p>
                    <p className="card-text">Quantity : {props.quantity}</p>
                    <p className="card-text">Total price : {props.quantity * product.price}</p>
                    <button className="btn btn-danger" onClick={() => props.removeFromCart(product)}>Delete</button>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (product) => dispatch(removeFromCart(product)),
    };
}

export default connect(null, mapDispatchToProps)(CartItem);