import React from "react";

export default class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [
                {
                    id: "1",
                    picture: "https://besthqwallpapers.com/Uploads/17-3-2018/44515/thumb2-turkish-angora-breed" +
                            "-of-domestic-cat-white-short-haired-cat-angora-cat-pets.jpg",
                    title: "White Cat",
                    price: "100",
                    body: "Adipisicing culpa fugiat amet proident nulla Lorem esse exercitation. Fugiat sit" +
                            " officia laboris dolor. Nulla aute voluptate duis excepteur tempor dolore labore" +
                            " ad dolore magna duis proident ut amet. Nulla dolor velit veniam veniam consecte" +
                            "tur ut Lorem id ex. Do duis veniam et labore fugiat culpa do qui aute adipisicin" +
                            "g tempor laborum esse. Deserunt elit excepteur eiusmod officia commodo anim labo" +
                            "rum excepteur."
                }, {
                    id: "2",
                    picture: "https://www.freegreatpicture.com/files/157/1562-cute-little-cat.jpg",
                    title: "Little Cat",
                    price: "250",
                    body: "Dolor occaecat proident voluptate ipsum sint dolore mollit in. Veniam quis incid" +
                            "idunt ullamco nisi. Deserunt aliquip quis sint culpa. Sit dolor nulla enim sunt " +
                            "deserunt sit. Tempor enim magna proident mollit pariatur do et Lorem ullamco Lor" +
                            "em eiusmod aute reprehenderit est."
                }, {
                    id: "3",
                    picture: "https://www.thepurringtonpost.com/wp-content/uploads/2017/06/cat-302286_960_720." +
                            "jpg",
                    title: "Orange Cat",
                    price: "150",
                    body: "Anim tempor do nulla ea reprehenderit. Non excepteur enim adipisicing pariatur d" +
                            "eserunt. Sint occaecat ex ad ullamco. Aliqua incididunt duis ipsum ipsum proiden" +
                            "t voluptate ullamco. Nostrud ullamco occaecat fugiat anim quis nisi id commodo c" +
                            "illum ullamco ut. Veniam exercitation dolor anim esse officia cillum. Ex laboris" +
                            " labore ullamco duis et."
                }, {
                    id: "4",
                    picture: "https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg",
                    title: "Black Cat",
                    price: "200",
                    body: "Ea duis anim nisi ad eu irure eu consectetur nisi cupidatat amet. Laborum elit i" +
                            "n dolor mollit deserunt. Fugiat aliqua voluptate laborum ut commodo ipsum aute a" +
                            "met sint eu incididunt elit adipisicing mollit. Mollit amet Lorem nostrud pariat" +
                            "ur ipsum aliqua. Aliquip excepteur elit eiusmod elit incididunt quis amet cupida" +
                            "tat elit magna in anim. Et sint adipisicing amet magna pariatur consectetur exce" +
                            "pteur officia. Voluptate sunt eu deserunt non ut deserunt dolor proident ipsum e" +
                            "x culpa veniam ea."
                }
            ],
            loading: true,
            quantity: 0,
            product: {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const product = this.state.products.find(x => x.id === id)
        this.setState({product: product, loading: false})
    }

    handleQuantity = (event) => {
        const value = event.target.value;

        if (value < 0) 
            return;
        
        this.setState({quantity: value})
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

                        <button className="btn btn-primary">
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}