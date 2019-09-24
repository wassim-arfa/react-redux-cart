import React, {Component} from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class Products extends Component {

    render() {
        // console.log(this.state.products)
        return (
            
            <div className="container mt-3">
            <div className="row">
                {this.props.products.map((product) =>
                        <Product 
                            key={product.id}
                            product={product}
                        />
                )}
            </div></div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.cart)
    return {
        products: state.products,
        // total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

export default connect(mapStateToProps)(Products);