import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addProduct, removeProduct } from "../../store/modules/cart/actions";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();
  const { id, name, price, img } = product;
  return (
    <li>
      <div>
        <img alt="produto" src={img} />
      </div>
      <div>
        <p>{name}</p>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })}
        </span>

        {isRemovable ? (
          <button onClick={() => dispatch(removeProduct(id))}>Remover</button>
        ) : (
          <button onClick={() => dispatch(addProduct(product))}>
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </li>
  );
};

export default Product;
