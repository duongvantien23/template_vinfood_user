
import "../../assets/stylelayout/footer.css"
const Footer = () => {
 return(
    <>
<div className="footer">
  <div className="claim_sale">
    <div className="email_heading">
      <div className="left_heading">
        <h3>Đăng kí nhận tin khuyến mãi</h3>
      </div>
      <div className="right_heading">
        <input
          type="email"
          autoComplete="off"
          className="form-control"
          defaultValue=""
          placeholder="Nhập email của bạn"
          name="contact[email]"
          id="mail"
        />
        <span className="input_group-btn">
          <button
            className="button_gradient"
            name="subscribe"
            id="subscribe"
            type="submit"
          >
            Đăng ký
          </button>
        </span>
      </div>
    </div>
  </div>
  <div className="hotline-container">
    <div className="logo-footer">
      <a href="" className="img-logo-footer">
        <img src="Img/logo.png" alt="" />
      </a>
      <ul className="contact-left">
        <li>
          <span className="contact_footer">
            <i className="fas fa-map-marker-alt" />
          </span>
          <span
            style={{ fontSize: 14, lineHeight: 5 }}
            className="text_footer"
          >
            Hưng Yên
          </span>
        </li>
        <li>
          <span className="contact_footer">
            <i className="fas fa-mobile-alt" />
          </span>
          <span className="text_footer">
            <a href="" className="contact-a">
              0908.606.539
            </a>
          </span>
        </li>
        <li>
          <span className="contact_footer">
            <i className="far fa-envelope" />
          </span>
          <span className="text_footer">
            <a href="" className="contact-a">
              infovinffood.vn
            </a>
          </span>
        </li>
      </ul>
    </div>
    <div className="website-footer">
      <h4 className="tittle-menu">SƠ ĐỒ WEBSITE</h4>
      <ul className="contact-left">
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            TRANG CHỦ
          </a>
        </li>
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            GIỚI THIỆU
          </a>
        </li>
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            SẢN PHẨM
          </a>
        </li>
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            TIN TỨC
          </a>
        </li>
      </ul>
    </div>
    <div className="website-footer">
      <h4 className="tittle-menu">SẢN PHẨM</h4>
      <ul className="contact-left">
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            Sản phẩm nổi bật
          </a>
        </li>
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            Tất cả sản phẩm
          </a>
        </li>
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            Sản phẩm ưu đãi
          </a>
        </li>
      </ul>
    </div>
    <div className="website-footer">
      <h4 className="">CHÍNH SÁCH</h4>
      <ul className="contact-left">
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            Chính sách đổi trả
          </a>
        </li>
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            Chính sách bảo mật
          </a>
        </li>
        <li className="lsit-menu-footer">
          <a href="" className="contact-a">
            Điều khoản dịch vụ
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="copyringt">
    <span>@ Bản quyền thuộc về</span>
    <b className="color_main"> Vinffood</b>
  </div>
</div>
  </>
 )
}
export default Footer;