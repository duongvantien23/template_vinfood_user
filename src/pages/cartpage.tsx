import "../assets/stylepages/cartpage.css"
import { CartItem } from "../utils/cart";
import { useState } from 'react';
import { Link, To } from 'react-router-dom';
const Cart = () => {
  const cartItemsString = localStorage.getItem('cartItems');
  const [cartItems, setCartItems] = useState<CartItem[]>(cartItemsString ? JSON.parse(cartItemsString) : []);
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);
  

  // Hàm tính tổng thành tiền
  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.quantity * item.gia;
    });
    return totalPrice;
  };

  // Hàm xóa sản phẩm từ giỏ hàng
  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    // Cập nhật lại danh sách giỏ hàng sau khi xóa
    setCartItems(newCartItems);
  };
   // Hàm tăng số lượng sản phẩm
   const increaseQuantity = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity++;
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    setCartItems(newCartItems);
  };

  // Hàm giảm số lượng sản phẩm
  const decreaseQuantity = (index: number) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity--;
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      setCartItems(newCartItems);
    }
  };
  const handleCheckboxChange = (index: number) => {
    const updatedSelectedItems = [...selectedItems];
    if (updatedSelectedItems.includes(cartItems[index])) {
      updatedSelectedItems.splice(updatedSelectedItems.indexOf(cartItems[index]), 1);
    } else {
      updatedSelectedItems.push(cartItems[index]);
    }
    setSelectedItems(updatedSelectedItems);
  };

  const isProceedCheckoutDisabled = selectedItems.length === 0;

  const proceedToCheckout = () => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedItems));
  };
  return(
    <>
      <div className="background-heading">
        <div className="col_center">
          <ul className="home-center">
            <h2 style={{ padding: 10 }} className="tittle-head">
              {" "}
              Giỏ hàng của bạn - Thực phẩm sạch Vinffood
            </h2>
            <li>
              <a id="home-heading" href="">
                <span>Trang chủ</span>
              </a>
              <span>&nbsp;</span>
              <i className="fa fa-angle-right" />
              &nbsp;
              <span className="a-tittle">
                {" "}
                Giỏ hàng của bạn - Thực phẩm sạch Vinffood
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-cart">
        <h1 className="title-cart">
          <span>Giỏ hàng của bạn </span>
          <span>
            (<span className="cart-popup-count">{cartItems.length}</span> sản phẩm)
          </span>
        </h1>
      </div>
      <div className="product-cart">
          <table>
            <thead>
              <tr>
                <th>Ảnh sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
                <th>Thao tác</th>
                <th>Chọn</th>
              </tr>
            </thead>
            <tbody id="cartBody">
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.hinhAnh} alt={item.tenSP} />
                  </td>
                  <td>{item.tenSP}</td>
                  <td>
                  <button className="quantity-btn" onClick={() => decreaseQuantity(index)}>-</button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => increaseQuantity(index)}>+</button>
                </td>
                  <td>{(item.quantity * item.gia).toLocaleString()}₫</td>
                  <td>
                    <button className="remove-cart" onClick={() => removeFromCart(index)}>Xóa</button>
                  </td>
                  <td>
                    <input className="input-checkbox-cart" type="checkbox" onChange={() => handleCheckboxChange(index)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      <div className="total-price-all">
        <span className="tt">Thành tiền:</span>
        <strong>
          <span className="totals_price price">{getTotalPrice().toLocaleString()} đ</span>
        </strong>
      </div>
      <div className="total-product">
        <ul>
          <li>
            <button type="button" className="continue-shopping-btn">
              Tiếp tục mua hàng
            </button>
          </li>
          <li>
          {isProceedCheckoutDisabled ? (
              <button 
                className="proceed-checkout-btn" 
                onClick={proceedToCheckout} 
                disabled
              >
                Tiến hành đặt hàng
              </button>
            ) : (
              <Link 
                to="/checkout"
                className="proceed-checkout-btn"
                onClick={proceedToCheckout}
              >
                Tiến hành đặt hàng
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cart;
