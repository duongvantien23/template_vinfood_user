import { useState } from "react";
import { createCustomer, Profiles } from "../services/profile"; // Thay đường dẫn đến API của bạn
import { Link, useParams } from "react-router-dom";
import "../assets/stylepages/registerpage.css"
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async () => {
    try {
      // Kiểm tra tính hợp lệ của dữ liệu đầu vào
      if (!firstName || !lastName || !email || !password || !address || !username) {
        throw new Error("Vui lòng điền đầy đủ thông tin.");
      }
  
      const profile: Profiles = {
        maKH: 0,
        tenDangNhap: username,
        matKhau: password,
        hoTen: firstName + " " + lastName,
        email: email,
        diaChi: address,
      };
    
      const response = await createCustomer(profile);
      console.log("Tạo tài khoản thành công:", response);
      
      // Hiển thị thông báo alert khi tạo tài khoản thành công
      window.alert("Tạo tài khoản thành công!");
  
    } catch {
      // Xử lý lỗi cụ thể
      console.error("Lỗi khi tạo tài khoản: Đã xảy ra lỗi.");
    } 
  };  
  return (
    <>
  <div className="background-heading">
      <div className="col_center">
        <ul className="home-center">
          <h2 style={{ padding: 10 }} className="tittle-head">
            Tạo tài khoản
          </h2>
          <li>
            <a id="home-heading" href="">
              <span>Trang chủ</span>
            </a>
            <span>&nbsp;</span>
            <i className="fa fa-angle-right" />
            &nbsp;
            <span className="a-tittle">Tạo tài khoản</span>
          </li>
        </ul>
      </div>
    </div>
    <h1 className="tittle_login">
      <span>Tạo tài khoản</span>
    </h1>
    <div className="regester-container">
      <div className="profile-regester-user">
        <div className="profile-small">
          <span>Nếu chưa có tài khoản vui lòng đăng ký tại đây</span>
        </div>
        <div className="regester-custom">
        <div className="form-regester">
              <label>Họ:</label>
              <input
                id="firtname"
                type="text"
                className="name-res-login"
                placeholder=""
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          <div className="form-regester">
            <label>Email: </label>
            <input
              id="email"
              type="email"
              className="email-login"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-regester">
          <label>Địa chỉ: </label>
          <input type="adress" className="name-login" placeholder=""  value={address}
                onChange={(e) => setAddress(e.target.value)} />
        </div>
          <div className="btn-regester">
            <input
              className="input-login"
              name="check"
              type="button"
              defaultValue="Đăng ký"
              onClick={handleRegister}
            />
           <Link to={'/login'} className="btn-resgister">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
      <div className="profile-regester-user-right">
        <div className="form-regester">
          <label>Tên: </label>
          <input type="lastname" className="name-login" placeholder="" value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-regester">
            <label>Tài Khoản</label>
            <input
              id="username"
              type="text"
              className="username"
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        <div className="form-regester">
          <label>Mật khẩu: </label>
          <input
            id="password"
            type="password"
            className="email-login"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
