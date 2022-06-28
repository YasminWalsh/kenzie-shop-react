import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Content } from "./style";

const Header = () => {
  const history = useHistory();
  const [toCart, setToCart] = useState(true);

  const handleToCart = () => {
    history.push("/cart");
    setToCart(false);
  };
  const handleToProducts = () => {
    history.push("/");
    setToCart(true);
  };

  return (
    <Container>
      <Content>
        <h2>
          Kenzie <h2>Book</h2> Shop
        </h2>
        {toCart ? (
          <button onClick={handleToCart}> Carrinho </button>
        ) : (
          <button onClick={handleToProducts}> Vitrine </button>
        )}
      </Content>
    </Container>
  );
};

export default Header;
