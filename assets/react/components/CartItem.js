import React from 'react'

export default function CartItem(props) {

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
                <p className="card-text">Quantity : x</p>
                <p className="card-text">Total price : x</p>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>

    )
}
