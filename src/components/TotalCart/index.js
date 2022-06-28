import { useSelector } from "react-redux/es/hooks/useSelector";
const TotalCart = () => {
  const totalCart = useSelector(({ cart }) => cart);
  console.log("state_cartTotal", totalCart);

  return (
    <div>
      <h2>Resumo do pedido</h2>
      <div>
        <p>Quantidade: {totalCart.length}</p>
        <span>
          Valor total:{" "}
          {totalCart
            .reduce((acc, current) => acc + current.price, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            })}
        </span>
      </div>
    </div>
  );
};
export default TotalCart;
