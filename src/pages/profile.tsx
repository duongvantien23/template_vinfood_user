import React, { useEffect, useState } from "react";
import { getOrdersByEmail } from "../services/profile";
import { Order } from "../services/profile";

const Profile: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    hoTen: "",
    SDT: "",
    diaChi: "",
    email: "",
    tenDangNhap: ""
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = localStorage.getItem("user");
        if (user) {
          const userData = JSON.parse(user);
          const userEmail = userData.email;
          const ordersData = await getOrdersByEmail(userEmail);
          setOrders(ordersData);
          setCustomerInfo({
            hoTen: userData.hoTen,
            SDT: userData.SDT,
            diaChi: userData.diaChi,
            email: userData.email,
            tenDangNhap: userData.tenDangNhap
          });
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin đơn hàng:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <div className="background-heading">
        <div className="col_center">
          <ul className="home-center">
            <h2 style={{ padding: 10 }} className="tittle-head">
              Thông tin tài khoản
            </h2>
            <li>
              <a id="home-heading" href="">
                <span>Trang chủ</span>
              </a>
              <span>&nbsp;</span>
              <i className="fa fa-angle-right" />
              &nbsp;
              <span className="a-tittle">Thông tin tài khoản</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="order-product">
          <h2 className="titlle-order">Thông tin đơn hàng ({orders.length} đơn hàng)</h2>
          <table className="order-table">
            <thead>
              <tr>
                <th>Tên Khách hàng</th>
                <th>Số điện thoại</th>
                <th>Trạng thái đơn hàng</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Ngày đặt hàng</th>
                <th>Phương thức</th>
                <th>Số lượng</th>
              </tr>
            </thead>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.tenKH}</td>
                <td>{order.sdt}</td>
                <td>
                  {order.maTrangThai === 1 && "Chờ xác nhận"}
                  {order.maTrangThai === 2 && "Đang xử lý"}
                  {order.maTrangThai === 3 && "Đã giao hàng"}
                  {order.maTrangThai === 4 && "Hoàn thành"}
                  {order.maTrangThai === 5 && "Hủy đơn hàng"}
                  {order.maTrangThai === 6 && "Đang giao hàng"}
                </td>
                <td>{order.tenSP}</td>
                <td>{order.tongGia.toLocaleString()} đ</td>
                <td>{new Date(order.ngayDatHang).toLocaleDateString("vi-VN")}</td>
                <td>{order.tenPhuongThuc}</td> 
                <td>{order.soLuong}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="profile-customer">
          <h3>Thông tin tài khoản</h3>
          <span>Xin chào, </span><span className="name-customer">{customerInfo.hoTen}</span>
          <table>
          <tr>
            <td>Tên tài khoản: {customerInfo.tenDangNhap}</td>
          </tr>
          <tr>
            <td>Email: {customerInfo.email}</td>
          </tr>
          <tr>
            <td>Địa chỉ: {customerInfo.diaChi}</td>
          </tr>
          </table>
        </div>
        <span className="total-product">
          <ul>
            <li>
              <button type="button" className="continue-shopping-btn">
                Tiếp tục mua hàng
              </button>
            </li>
          </ul>
        </span>
      </>
  );
};

export default Profile;
