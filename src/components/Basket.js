import BasketItem from "./BasketItem";

function Basket({ resetBasket, basket, total, products }) {
  return (
    <>
      {basket.map((item) => (
        <BasketItem
          key={item.id}
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}
      {total > 0 && <div>Toplam : $ {total}</div>}
      <button onClick={resetBasket}> Sepeti Sıfırla</button>
    </>
  );
}

export default Basket;
