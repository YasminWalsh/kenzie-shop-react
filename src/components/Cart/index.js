import Product from "../Product";
import { useSelector } from "react-redux/es/hooks/useSelector";
import TotalCart from "../TotalCart";
import { Container, Content } from "./style";

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);
  console.log("state_cart", cart);
  return (
    <Container>
      <Content>
        <div>
          <h2>Meu carrinho de compras</h2>
        </div>

        <div>
          <ul>
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <Product key={index} product={product} isRemovable />
              ))
            ) : (
              <li>
                {" "}
                <h2>Não há produtos em seu carrinho.</h2>
              </li>
            )}
          </ul>
          <TotalCart />
        </div>
      </Content>
    </Container>
  );
};

export default Cart;
