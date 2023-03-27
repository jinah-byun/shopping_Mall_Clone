import { Product } from "../../types";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => (
  <li className="products-item">
    <p className="products__category">{category}</p>
    <p className="products__title">{title}</p>
    <p className="products__description">{description}</p>
    <img className="products-item__image" src={image} />
    <span className="products-item__price">${price}</span>
    <span className="products__rating">{rating.rate}</span>
  </li>
);

export default ProductItem;
