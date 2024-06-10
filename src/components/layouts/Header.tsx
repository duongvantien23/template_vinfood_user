
import "../../assets/stylelayout/header.css"
import Logo from '../../assets/images/logo/logo.png';
import { Link, useParams } from "react-router-dom";
import React, { useState,useEffect  } from 'react';
import Select from 'react-select';
import { searchTenSanPham, Product } from '../../services/getproduct';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // Số lượng sản phẩm trong giỏ hàng
  const [searchKeyword, setSearchKeyword] = useState(''); // State lưu từ khóa tìm kiếm
  const [searchResults, setSearchResults] = useState<Product[]>([]); // State lưu kết quả tìm kiếm
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  // Theo dõi thay đổi số lượng sản phẩm trong giỏ hàng
  useEffect(() => {
    const cartItemsString = localStorage.getItem("cartItems");
    const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    setCartItemCount(cartItems.length);
  }, []);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const products = await searchTenSanPham(searchKeyword); 
        setSearchResults(products);
      } catch (error) {
        console.error('Error searching products:', error);
      }
    };

    // Chỉ gọi hàm tìm kiếm nếu từ khóa tìm kiếm không rỗng
    if (searchKeyword.trim() !== '') {
      searchProducts();
    } else {
      setSearchResults([]); // Nếu từ khóa tìm kiếm rỗng, xóa kết quả tìm kiếm
    }
  }, [searchKeyword]);

  const handleProductSelect = (product: Product) => {
    window.location.href = `/detailt/${product.maSP}`;
  };

 return(
    <>
    <header className="header">
  <a href="" className="logo">
    <img src={Logo} alt="" />
  </a>
  <ul className="nav">
    <li>
    <Link to="/" className="item--home">
      Trang chủ
      </Link>
    </li>
    <li>
      <Link to="/intro" className="item">
      Giới thiệu
      </Link>
    </li>
    <li>
      <a className="item" href="#">
        Sản Phẩm <i className="fa-solid fa-caret-down" />
      </a>
      <ul className="sub-menu">
        <li>
            <Link to={'/category/1'}>
              Trái cây <i className="fa-solid fa-caret-right" />
              </Link>
          <ul className="sub-menu box-menu">
            <li>
              <Link to={'/category/1'}>
              Trái cây nhập khẩu
              </Link>
            </li>
            <li>
            <Link to={'/category/1'}>
              Trái cây hữu cơ
              </Link>
            </li>
          </ul>
        </li>
        <li>
        <Link to={'/category/8'}>
              Rau củ - sạch
        </Link>
        </li>
        <li>
        <Link to={'/category/2'}>
              Gạo
        </Link>
        </li>
        <li>
          <a href="ThitvaHaiSan.html">
            Các Loại Thịt &amp; Hải Sản{" "}
            <i className="fa-solid fa-caret-right" />
          </a>
          <ul className="sub-menu">
            <li>
              <a href="#">Thịt Heo MeatDeli</a>
            </li>
            <li>
              <a href="#">Thịt Gà CP</a>
            </li>
            <li>
              <a href="#">Thịt Heo CP</a>
            </li>
            <li>
              <a href="#">Bò Tơ Tây Ninh</a>
            </li>
            <li>
              <a href="#">Hải Sản</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="DacSanVungMien.html">Đặc sản vùng miền</a>
        </li>
        <li>
        <Link to={'/category/5'}>
         Hàng xách tay Mỹ - Nhật - Hàn
         </Link>
        </li>
      </ul>
    </li>
    <li>
    <Link to="/blogs" className="item">
      Tin tức
      </Link>
    </li>
  </ul>
  {/* icon---MENU */}
  <div className="icons">
    <div className="fa-solid fa-magnifying-glass" id="icon-seach">
    <div className="search-box-form">
        <input
          type="search"
          id="search-box"
          placeholder="Tìm kiếm..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        {/* Hiển thị gợi ý sản phẩm */}
        {searchResults.length > 0 && (
          <div className="search-results-wrapper">
            {searchResults.map((product) => (
              <div key={product.maSP} className="search-result-item" onClick={() => handleProductSelect(product)}>
                <div className="search-result-content">
                  <img src={product.hinhAnh} alt={product.tenSP} className="search-result-image" />
                  <span className="search-result-name">{product.tenSP}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="fa-solid fa-user-plus" id="icon-user">
    <div className="user-form">
  {isLoggedIn ? (
    <>
      <div className="login-box">
        <Link to={'/profile'} className="button-gradient">
          Tài khoản
        </Link>
      </div>
      <div className="login-register" onClick={handleLogout}>
          Đăng xuất
      </div>
    </>
  ) : (
    <>
      <div className="login-box">
        <Link to={'/login'} className="button-gradient">
          Đăng nhập
        </Link>
      </div>
      <div className="login-register">
        <Link to={'/register'}>
          Đăng ký
        </Link>
      </div>
    </>
  )}
</div>
    </div>
    <Link to={"/cart"} className="icon-btn-link">
  <div className="fa-solid fa-basket-shopping" id="icon-btn"></div>
  {cartItemCount >= 0 ? ( // Sử dụng biểu thức điều kiện
    <span className="cart-item-count">{cartItemCount}</span>
  ) : (
    <span className="cart-item-count">0</span>
  )}
 </Link>
  </div>
</header>
  </>
 )
}
export default Header;