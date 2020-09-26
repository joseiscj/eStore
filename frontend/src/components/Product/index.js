import React from "react";

class Product extends React.Component {

    render() {
        return (
            <div className="produto">
                <h3>{this.props.name}</h3>
            </div>
        )
    }
    
};

export default Product;