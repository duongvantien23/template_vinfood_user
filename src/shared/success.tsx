import React from "react";
import "../assets/stylepages/successpage.css"
import { Link, useParams } from "react-router-dom";

const Success = function() {
  return (
      <>
  <div className="background-heading">
    <div className="col_center">
      <ul className="home-center">
        <h2 style={{ padding: 10 }} className="tittle-head">
          Đang chờ xác nhận
        </h2>
        <li>
          <a id="home-heading" href="">
            <span>Thanh toán</span>
          </a>
          <span>&nbsp;</span>
          <i className="fa fa-angle-right" />
          &nbsp;
          <span className="a-tittle">Đang chờ xác nhận</span>
        </li>
      </ul>
    </div>
  </div>
  <div className="header-cart">
    <h1 className="title-cart">
      <span>Đơn hàng đã được đặt thành công.</span>
      <span>Xin vui lòng đợi trong khi chúng tôi xử lý đơn hàng của bạn.</span>
    </h1>
  </div>
  <div className="total-product">
    <ul>
      <li>
        <button type="button" className="continue-shopping-btn">
          Tiếp tục mua hàng
        </button>
      </li>
      <li>
      <Link to="/profile" className="proceed-checkout-btn">
          Xem chi tiết đơn hàng
        </Link>
      </li>
    </ul>
  </div>
    </>
  );
}
export default Success;
