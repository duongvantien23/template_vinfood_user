import "../assets/stylepages/checkoutpage.css";
import React from 'react';
import { useEffect, useState } from 'react';
import { CartItem } from '../utils/cart';
import { apiCreateOrder } from '../services/cart';

const Checkout = () => {
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [maKH, setMaKH] = useState<number>(0);
  const [userData, setUserData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<number>(0);
  const [deliveryAddress, setDeliveryAddress] = useState<string>(''); 
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  useEffect(() => {
    const selectedProductsString = localStorage.getItem('selectedProducts');
    const user = localStorage.getItem('user');
    if (selectedProductsString) {
      const selectedProducts: CartItem[] = JSON.parse(selectedProductsString);
      setSelectedItems(selectedProducts);
      // Tính tạm tính
      const subtotal = selectedProducts.reduce((acc, item) => acc + item.quantity * item.gia, 0);
      setSubtotal(subtotal);
    }
    if (user) {
      const userData = JSON.parse(user);
      setUserData(userData); 
      setMaKH(userData.maKH);
    }
  }, []);
  const totalAmount = subtotal;
  const createOrder = async () => {
    const orderData = {
      maKH: maKH,
      tenKH: userData && userData.hoTen, 
      sdt: phoneNumber,
      email: userData && userData.email,
      diaChi: userData && userData.diaChi,
      list_json_dh: [
        {
          maPhuongThuc: paymentMethod,
          maTrangThai: 1,
          ngayDatHang: new Date().toISOString(),
          diaChiGiaoHang: deliveryAddress
        }
      ],
      list_json_chitiet_dh: selectedItems.map(item => ({
        maSP: item.maSP,
        tongGia: item.quantity * item.gia,
        soLuong: item.quantity,
        maGiamGia: 'MGG'
      }))
    };
    try {
        const response = await apiCreateOrder(orderData);
        console.log('Đơn hàng đã được tạo:', response);
        alert('Bạn đã đặt hàng thành công!');
        window.location.href = '/success';
      } catch (error) {
        console.error('Lỗi khi tạo đơn hàng:', error);
      }
    };
    return (
        <>
            <div className="Main">
                <div className="wrap">
                    <div className="main content">
                        <div className="main-head">
                            <a href="" className="title heading">
                                <h2 className="logo-text">Thực phẩm sạch Vinffood</h2>
                            </a>
                            <div className="col_center">
                                <ul className="home-center">
                                    <li>
                                        <a id="home-heading" href="">
                                            <span>Giỏ hàng</span>
                                        </a>
                                        <span>&nbsp;</span>
                                        <i className="fa fa-angle-right" />
                                        &nbsp;
                                        <span className="a-tittle">Thông tin giao hàng</span>
                                        <i className="fa fa-angle-right" />
                                        &nbsp;
                                        <span className="a-tittle">Phương thức thanh toán</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="section-header">
                            <h2 className="section-title">Thông tin giao hàng</h2>
                        </div>
                        <div className="section-profile">
                            <p className="section-content-text">
                                Bạn đã có tài khoản?
                                <a href="Dangnhap.html">Đăng nhập</a>
                            </p>
                            <div className="field-input-wrapper hidden-input">
                                <input
                                  placeholder="Mã khách hàng"
                                  value={maKH}
                                  disabled
                                />
                              </div>
                            <div className="field-input-wrapper">
                                <label className="field-label" htmlFor="billing_address_full_name">
                                    Họ và tên:
                                </label>
                                <input
                                    placeholder="Họ và tên"
                                    className="field-input"
                                    size={30}
                                    type="text"
                                    value={userData && userData.hoTen}
                                />
                            </div>
                            <div className="field-input-wrapper hidden-input">
                                <label className="field-label" htmlFor="billing_address_full_name">
                                    Email:
                                </label>
                                <input
                                    placeholder="Email"
                                    className="field-input"
                                    size={30}
                                    type="text"
                                    value={userData && userData.email}
                                />
                            </div>
                            <div className="field-input-wrapper">
                                <label className="field-label" htmlFor="billing_address_phone">
                                    Số điện thoại:
                                </label>
                                <input
                                placeholder="Số điện thoại"
                                className="field-input"
                                size={30}
                                maxLength={15}
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)} 
                                />
                            </div>
                            <div className="field-input-wrapper hidden-input">
                                <label className="field-label" htmlFor="billing_address_address1">
                                    Địa chỉ:
                                </label>
                                <input
                                    placeholder="Địa chỉ"
                                    className="field-input"
                                    size={30}
                                    type="text"
                                    value={userData && userData.diaChi}
                                />
                            </div>
                            <div className="field-input-wrapper">
                            <label className="field-label" htmlFor="billing_address_address1">
                                Địa chỉ giao hàng
                            </label>
                            <input
                                placeholder="Địa chỉ giao hàng"
                                className="field-input"
                                size={30}
                                type="text"
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)} // Cập nhật state khi có sự thay đổi
                            />
                            </div>
                                <div className="form-group">
                                <label className="control-label" htmlFor="payment_method">
                                    Phương Thức Thanh Toán: 
                                </label>
                                <select
                                    name="payment_method"
                                    id="payment_method"
                                    value={paymentMethod} 
                                    onChange={(e) => setPaymentMethod(parseInt(e.target.value))} 
                                >
                                    <option value={0}>Chọn phương thức</option>
                                    <option value={1}>Thanh toán khi nhận hàng</option>
                                    <option value={2}>Thanh toán qua ATM</option>
                                </select>
                            </div>
                            <div className="step-footer" id="step-footer-checkout">
                                <form id="form_next_step" acceptCharset="UTF-8" method="post">
                                    <a className="buy-cart-success" href="GioHang.html">
                                        Giỏ hàng
                                    </a>
                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                    <button
                                    type="button"
                                    className="step-footer"
                                    onClick={createOrder} // Gọi hàm tạo đơn hàng khi nhấn nút
                                    >
                                    <span className="btn-content">
                                        Tiếp tục đến phương thức thanh toán
                                    </span>
                                    <i className="btn-spinner icon icon-button-spinner" />
                                    </button>
                                </form>
                            </div>
                            <div className="line" />
                            <div className="main-footer-by">Powered by Haravan</div>
                        </div>
                    </div>
                    <div className="section-right-content">
                        <div className="order-product">
                            <h2 className="section-title">Thông tin đơn hàng</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Ảnh sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody id="orderTableBody">
                                    {selectedItems.map((item, index) => (
                                        <tr key={index}>
                                            <td><img src={item.hinhAnh} alt={item.tenSP} /></td>
                                            <td>{item.tenSP}</td>
                                            <td>{item.gia.toLocaleString()}₫</td>
                                            <td>{item.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot></tfoot>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" placeholder="Mã giảm giá" />
                                        </td>
                                        <td>
                                            <button className="button-mgg">Sử dụng</button>
                                        </td>
                                        <td />
                                    </tr>
                                </tbody>
                                <tbody>
                <tr>
                    <td colSpan={3}>Tạm tính</td>
                    <td id="subtotal">{subtotal.toLocaleString()}₫</td>
                </tr>
                <tr>
                    <td colSpan={3}>Phí vận chuyển</td>
                    <td>0 đ</td>
                </tr>
                <tr>
                    <td colSpan={3}>Tổng cộng</td>
                    <td>
                        VND <span className="total-upper" id="totalAmount">{totalAmount.toLocaleString()}₫</span>
                    </td>
                </tr>
            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
