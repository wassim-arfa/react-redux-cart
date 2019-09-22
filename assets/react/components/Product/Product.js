import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
export default function Product(props) {
    const {product} = props
    return (
        <div className="card mr-3 mb-3 box-shadow" style={{width: '18rem'}}>
            <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180"
                 style={{height: 180, width: '100%', display: 'block'}}
                 src={product.picture}
                 data-holder-rendered="true"/>

            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price : {product.price} $</p>
                <Link to={"/react/public/index.php/" + product.id} className="btn btn-primary">Details</Link>
            </div>
        </div>
    )
}
