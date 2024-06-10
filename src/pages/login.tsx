
import "../assets/stylepages/loginpage.css";
import { useState } from 'react';
import { Link} from "react-router-dom";
import { AuthService } from '../Authentication/client'; 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AuthService.login(email, password);
      if (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = '/';
      } else {
        setError('Dữ liệu đăng nhập không hợp lệ.');
      }
    } catch (error) {
      if (typeof error === 'string') {
        setError('Tài khoản hoặc mật khẩu không đúng: ' + error);
      } else {
        setError('Tài khoản hoặc mật khẩu không đúng.');
      }
    }
  };
 return(
    <>
    <div className="background-heading">
      <div className="col_center">
        <ul className="home-center">
          <h2 style={{ padding: 10 }} className="tittle-head">
            Tài khoản
          </h2>
          <li>
            <a id="home-heading" href="">
              <span>Trang chủ</span>
            </a>
            <span>&nbsp;</span>
            <i className="fa fa-angle-right" />
            &nbsp;
            <span className="a-tittle">Tài khoản</span>
          </li>
        </ul>
      </div>
    </div>
    <h1 className="tittle_login">
      <span>Tài Khoản</span>
    </h1>
    <div className="login-container">
      <div className="profile-contact">
        <div className="profile-small">
          <span>Nếu bạn đã có tài khoản, đăng nhập tại đây.</span>
        </div>
        <div className="form-login">
                <label>Email: </label>
                <br />
                <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          <div className="form-login">
                <label>Mật khẩu:</label>
                <br />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div className="error-message">{error}</div>}
        <div className="btn-login">
          <input
            className="input-login"
            type="button"
            defaultValue="Đăng nhập"
            onClick={handleLogin}
          />
          <Link to={'/register'} className="btn-resgister">
            Đăng ký
          </Link>
        </div>
      </div>
      <div className="recover-login">
        <div className="profile-recover">
          <span>
            Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.
          </span>
        </div>
        <div className="form-login">
          <label>Email: </label>
          <br />
          <br />
          <input type="email" className="email-login" placeholder="Email" />
        </div>
        <div className="recover-login-click">
          <input
            className="input-login"
            type="submit"
            defaultValue="Lấy lại mật khẩu"
          />
        </div>
      </div>
    </div>
  </>  
 )
}
export default Login;