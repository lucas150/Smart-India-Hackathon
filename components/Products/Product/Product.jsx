import "./Product.scss";
import prod from "../../../assets/products/asset 0.png"
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Produc Name</span>
            <span className="price"> &#8377;499</span>
        </div>
    </div>;
};

export default Product;
