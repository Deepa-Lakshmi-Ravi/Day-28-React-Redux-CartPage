import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "./cartSlice";

const CartPage = () => {
  const products = useSelector((state) => state.cart.products); // Get products from the store
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      <h2>Cart</h2>
      <div className="cart-container">
        {products.map((item) => {
          const product = products.find((p) => p.id === item.id); // Find the product based on item id
          const subtotal = product.price * item.quantity;
          const total = subtotal;
          return (
            <div className="cart-page" key={item.id}>
              <div className="cart-item">
                <div className="item-img">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div className="details">
                  <h3>{product.title}</h3>
                  <p className="description">{product.description}</p>
                  <button onClick={() => handleRemoveItem(product.id)}>
                    REMOVE
                  </button>
                </div>
                <div className="qty-select">
                  <select
                    className="qty"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  >
                    {[...Array(11).keys()].map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                  <p className="price">${product.price}.00</p>
                </div>
              </div>
              <hr />
              <div className="sub-ship">
                <p className="sub-total">
                  SUBTOTAL: <span>${subtotal}.00</span>
                </p>
                <p className="shipping">
                  SHIPPING: <span>Free</span>
                </p>
              </div>
              <hr />
              <div>
                <b>TOTAL:</b> <span>${total}.00</span>
              </div>
              <span className="total-para">
                Get Daily Cash With Nespola Card
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartPage;
