import React, { Component } from 'react'
import CartItem from '../CartItem'
import { connect } from 'react-redux'


class Cart extends Component {

    render() {
        console.log(this.props);
        return (
            
            <div className="container mt-3">
            <div className="row">
                {this.props.cartItems.map((cart) =>
                        <CartItem 
                            key={cart.product.id}
                            product={cart.product}
                            quantity={cart.quantity}
                        />
                )}
            </div>
            Total : {this.props.total}
            <br />
            <button className="btn btn-primary">Pay Now</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log({state})
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0)
    };
}

export default connect(mapStateToProps)(Cart);