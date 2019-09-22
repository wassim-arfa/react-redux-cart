import React, {Component} from 'react'
import Product from './Product'

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [
                {id: "1", picture: "https://besthqwallpapers.com/Uploads/17-3-2018/44515/thumb2-turkish-angora-breed-of-domestic-cat-white-short-haired-cat-angora-cat-pets.jpg", title : "White Cat", price: "100", body: "Adipisicing culpa fugiat amet proident nulla Lorem esse exercitation. Fugiat sit officia laboris dolor. Nulla aute voluptate duis excepteur tempor dolore labore ad dolore magna duis proident ut amet. Nulla dolor velit veniam veniam consectetur ut Lorem id ex. Do duis veniam et labore fugiat culpa do qui aute adipisicing tempor laborum esse. Deserunt elit excepteur eiusmod officia commodo anim laborum excepteur."},
                {id: "2", picture: "https://www.freegreatpicture.com/files/157/1562-cute-little-cat.jpg", title : "Little Cat", price: "250", body: "Dolor occaecat proident voluptate ipsum sint dolore mollit in. Veniam quis incididunt ullamco nisi. Deserunt aliquip quis sint culpa. Sit dolor nulla enim sunt deserunt sit. Tempor enim magna proident mollit pariatur do et Lorem ullamco Lorem eiusmod aute reprehenderit est."},
                {id: "3", picture: "https://www.thepurringtonpost.com/wp-content/uploads/2017/06/cat-302286_960_720.jpg", title : "Orange Cat", price: "150", body: "Anim tempor do nulla ea reprehenderit. Non excepteur enim adipisicing pariatur deserunt. Sint occaecat ex ad ullamco. Aliqua incididunt duis ipsum ipsum proident voluptate ullamco. Nostrud ullamco occaecat fugiat anim quis nisi id commodo cillum ullamco ut. Veniam exercitation dolor anim esse officia cillum. Ex laboris labore ullamco duis et."},
                {id: "4", picture: "https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg", title : "Black Cat", price: "200", body: "Ea duis anim nisi ad eu irure eu consectetur nisi cupidatat amet. Laborum elit in dolor mollit deserunt. Fugiat aliqua voluptate laborum ut commodo ipsum aute amet sint eu incididunt elit adipisicing mollit. Mollit amet Lorem nostrud pariatur ipsum aliqua. Aliquip excepteur elit eiusmod elit incididunt quis amet cupidatat elit magna in anim. Et sint adipisicing amet magna pariatur consectetur excepteur officia. Voluptate sunt eu deserunt non ut deserunt dolor proident ipsum ex culpa veniam ea."}
                
                
            ]
        }
    }


    render() {
        console.log(this.state.products)
        return (
            
            <div className="container mt-3">
            <div className="row">
                {this.state.products.map((product) =>
                        <Product 
                            key={product.id}
                            product={product}
                        />
                )}
            </div></div>
        )
    }
}
