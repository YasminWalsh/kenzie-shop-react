import Product from "../Product";
import { useSelector } from "react-redux/es/exports";
import { Container, Content } from "./style";

const Products = () => {
  const products = useSelector(({ products }) => products);
  console.log("state_products", products);
  return (
    <Container>
      <Content>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
};

export default Products;
