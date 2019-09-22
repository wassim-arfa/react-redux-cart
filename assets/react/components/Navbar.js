import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

export default function Navbar() {
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
                            <Link className="nav-item nav-link" to="/product/">Product</Link>
                            <Link className="nav-item nav-link" to="/cart/">Cart</Link>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path='/react/public/index.php/' component={Home}/>
                    <Route path='/product/' component={Product}/>
                    <Route path='/cart/' component={Cart}/>
                </Switch>

            </div>
        </Router>
    )
}
