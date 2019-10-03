import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import {connect} from "react-redux";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link active" to="/react/public/index.php/">Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                                <Link className="nav-item nav-link" to="/cart/">Cart ({this.props.quantity})</Link>
                            </div>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path='/react/public/index.php/' component={Home}/>
                        <Route path='/cart/' component={Cart}/>
                        <Route path='/react/public/index.php/:id/' component={Product}/>
                    </Switch>

                </div>
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.cart)
    return {
        quantity : state.cart.reduce((quantity, item) => quantity + parseInt(item.quantity), 0),
        // total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

export default connect(mapStateToProps)(Navbar);