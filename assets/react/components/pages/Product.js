import React from "react";
import {addToCart} from "../../store/actions/actions";
import {connect} from "react-redux";


class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            quantity: 0,
            product: {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const product = this.props.products.find(x => x.id === id)
        this.setState({product: product, loading: false})
    }

    handleQuantity = (event) => {
        const value = event.target.value;

        if (value < 1) 
            return;
        
        this.setState({quantity: value})
    }

    addToCart = (product) => {
        this.props.addToCart(product, this.state.quantity);
    }
    
    render() {
        if (this.state.loading) 
            return 'Loading ..';
        
        const product = this.state.product;
        const quantity = this.state.quantity;

        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.picture} width={'100%'}/>
                    </div>
                    <div className="col-6">
                        <h1>{product.title}</h1>

                        <p>Price: {product.price}$</p>

                        <p>{product.body}</p>

                        <input type="number" value={quantity} onChange={this.handleQuantity}/>

                        <br/><br/>

                        <p>Total: {quantity * product.price}</p>

                        <button className="btn btn-primary"  onClick={() => this.addToCart(product)}>
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);