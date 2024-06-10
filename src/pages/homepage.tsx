import "../assets/stylepages/homepage.css"
import logo_icon1 from '../assets/images/logoicon/icon_uti_1.webp';
import logo_icon2 from '../assets/images/logoicon/icon_uti_2.webp';
import logo_icon3 from '../assets/images/logoicon/icon_uti_3.webp';
import logo_icon4 from '../assets/images/logoicon/icon_uti_4.webp';
import logo_npp1 from '../assets/images/logo/brand_1.webp';
import logo_npp2 from '../assets/images/logo/brand_2.png';
import logo_npp3 from '../assets/images/logo/brand_3.png';
import Banner from '../assets/images/banner/slider_1.webp';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSPTopView, getSPBestSale, getNewSP, getNewBlogs } from "../services/getproduct";
import { useRecoilState } from "recoil";

import ScrollToTop from '../shared/ScrollToTop';
import {addToCart} from '../utils/cart'; 



export interface Product {
  maSP: string;
  tenSP: string;
  gia: number;
  luotXem: number;
  soLuong: number;
  hinhAnh: string;
  ngaySanXuat: Date;
  quantity: number;
  userId: string; 
}
export interface Blog {
  maTintuc: string;
  tieuDe: string;
  noiDung: string;
  ngayDang: Date;
  tacGia: string;
  hinhAnh: string;
}

const HomePage = () => {
  const [newsp, SetNewSP] = useState<Product[]>([]);
  const [bestsp, SetSPBestSale] = useState<Product[]>([]);
  const [viewsp, SetSPTopView] = useState<Product[]>([]);
  const [blog, SetBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsp = await getNewSP ();
        const bestsp = await getSPBestSale();
        const viewsp = await getSPTopView();
        const blog = await getNewBlogs();
        SetNewSP(newsp);
        SetSPBestSale(bestsp);
        SetSPTopView(viewsp);
        SetBlogs(blog)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


return(
    <>
    <div className="container">
    <section className="slider">
    <div className="slide">
    <img src={Banner} alt="" />
  </div>
  <ScrollToTop/>
      <div id="wp-products">
        <ul id="list-products">
          <div
            style={{
              backgroundImage:
                "url(//theme.hstatic.net/200000332199/1000706721/14/col_1.png?v=222)",
              backgroundColor: "#59cca6",
              backgroundSize: "50% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center"
            }}
            className="item item2"
          >
            <div style={{ margin: "50px 30px 30px 70px" }} className="name">
              <a href="RauCuQua.html">Trái Cây - Rau củ</a>
            </div>
            <br />
            <div className="mota">
              <p>
                Vinffood cam kết mang đến tay khách hàng những nông sản rau, củ,
                quả tươi ngon, có nguồn gốc, xuất xứ rõ ràng, đảm bảo an toàn thực
                phẩm, đạt chuẩn thực phẩm sạch - vì sức khỏe mọi nhà
              </p>
            </div>
            <br />
            <a
              style={{ color: "#FFF", textDecoration: "none" }}
              href="RauCuQua.html"
              id="btn_xem"
              title="Trái cây & Rau củ"
            >
              Xem ngay
            </a>
          </div>
          <div
            style={{
              backgroundImage:
                "url(//theme.hstatic.net/200000332199/1000706721/14/col_2.png?v=222)",
              backgroundColor: "#91ad41",
              backgroundSize: "50% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center"
            }}
            className="item item3"
          >
            <div style={{ margin: "50px 30px 30px 70px" }} className="name">
              <a href="ThitvaHaiSan.html">Các loại thịt &amp; Hải sản</a>
            </div>
            <br />
            <div className="mota">
              <p>
                Vinffood tự hào là đơn vị cung cấp các loại thịt tươi, ngon từ
                những nông trại chăn nuôi tự nhiên ở các địa phương cùng nhiều
                loại hải sản tươi, sống được sơ chế và bảo quản theo quy trình an
                toàn thực phẩm.
              </p>
            </div>
            <br />
            <a
              style={{ color: "#FFF", textDecoration: "none" }}
              href="ThitvaHaiSan.html"
              id="btn_xem"
              title="Các loại thịt & hải sản"
            >
              Xem ngay
            </a>
          </div>
          <div
            style={{
              backgroundImage:
                "url(//theme.hstatic.net/200000332199/1000706721/14/col_3.png?v=222)",
              backgroundColor: "#e3b375",
              backgroundSize: "50% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center"
            }}
            className="item item3"
          >
            <div style={{ margin: "50px 30px 30px 70px" }} className="name">
              <a href="DacSanVungMien.html">Đặc sản vùng miền</a>
            </div>
            <br />
            <div className="mota">
              <p>
                Vinffood cùng bạn khám phá văn hóa ẩm thực Việt Nam qua những món
                ăn đặc sản từng vùng, miền được chế biến sở tại, chuẩn hương vị
                quê hương theo quy trình an toàn thực phẩm.
              </p>
            </div>
            <br />
            <a
              style={{ color: "#FFF", textDecoration: "none" }}
              href="DacSanVungMien.html"
              id="btn_xem"
              title="Đặc sản vùng miền"
            >
              Xem ngay
            </a>
          </div>
          <div
            style={{
              backgroundImage:
                "url(//theme.hstatic.net/200000332199/1000706721/14/col_4.png?v=222)",
              backgroundColor: "#ef7f94",
              backgroundSize: "50% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center"
            }}
            className="item item4"
          >
            <div style={{ margin: "50px 30px 30px 70px" }} className="name">
              <a href="Hangxachtay.html">Hàng xách tay Mỹ-Nhật-Hàn</a>
            </div>
            <br />
            <div className="mota">
              <p>
                Chúng tôi cam kết 100% hàng xách tay chính hãng với mong muốn đưa
                đến tay khách hàng những sản phẩm ngoại nội địa chất lượng chuẩn
                nhất với giá tốt nhất.
                <br />
                <br />
                <br />
                <a
                  style={{
                    color: "#FFF",
                    textDecoration: "none",
                    borderRadius: 5
                  }}
                  href="Hangxachtay.html"
                  id="btn_xem"
                  title="Hàng xách tay Mỹ-Nhật-Hàn"
                >
                  Xem ngay
                </a>
              </p>
            </div>
          </div>
        </ul>
      </div>
    </section>
    <div className="content">
      <div className="content-con">
        <h1 title="Về Chúng Tôi">
          <span className="text_gradient">VỀ CHÚNG TÔI</span>
        </h1>
        <h2 style={{ marginTop: 5 }} className="contenth2">
          {" "}
          <img src="Img/bg_title.webp" alt="" />
        </h2>
        <p
          style={{
            textAlign: "center",
            margin: "5px 330px 0px 330px",
            color: "#8b8b99",
            fontSize: 17
          }}
        >
          Vinffood luôn mang trên mình sứ mệnh tạo ra những sản phẩm sạch, ngon,
          và chất lượng để cung cấp cho người tiêu dùng tại Tp.HCM và phạm vi toàn
          quốc. 100% sản phẩm của Vinffood đều có nguồn gốc, xuất sứ rõ ràng, được
          kiểm tra kỹ càng từng công đoạn của quy trình sản xuất và bảo quản trước
          khi đến tận tay người tiêu dùng. Vinffood tạo ra nhiều kênh phân phối
          sản phẩm mong muốn khách hàng có thể tiếp cận, mua hàng một cách thuận
          tiện nhất (mua hàng trực tiếp tại cửa hàng, đặt hàng online giao tận
          nhà) để phù hợp với kinh tế xã hội hiện nay. Hãy cùng nhau sử dụng thực
          phẩm sạch "vì sức khoẻ cộng đồng".
        </p>
      </div>
      <div className="conten-icon">
        <div className="icon-small">
          <img src= {logo_icon1} alt="..." />
          <br />
          <h2 style={{ marginTop: 5 }}>
            <span>Trang trại hữu cơ</span>
          </h2>
          <br />
          <span style={{ color: "#8b8b99" }}>
            Không sử dụng thuốc trừ sâu,
            <br /> thuốc diệt cỏ, thuốc kích thích.
          </span>
        </div>
        <div className="icon-small">
          <img src= {logo_icon2} alt="..." />
          <br />
          <h2 style={{ marginTop: 5 }}>
            <span>Thực phẩm sạch</span>
          </h2>
          <br />
          <span style={{ color: "#8b8b99" }}>
            Cung cấp 100% thực phẩm <br /> sạch đảm bảo an toàn và ngon nhất
          </span>
        </div>
        <div className="icon-small">
          <img src= {logo_icon3} alt="..." />
          <br />
          <h2 style={{ marginTop: 5 }}>
            <span>An toàn sinh học</span>
          </h2>
          <br />
          <span style={{ color: "#8b8b99" }}>
            Bảo tồn tài nguyên thiên nhiên và đa dạng sinh học. <br /> Bảo vệ sức
            khỏe an toàn người tiêu dùng
          </span>
        </div>
        <div className="icon-small">
          <img src= {logo_icon4} alt="..." />
          <br />
          <h2 style={{ marginTop: 5 }}>
            <span>Đa dạng sinh học</span>
          </h2>
          <br />
          <span style={{ color: "#8b8b99" }}>
            Cung cấp nhiều loại thực phẩm,
            <br /> rau củ các loại cho người tiêu dùng chọn lựa.
          </span>
        </div>
      </div>
      <section className="section_viewtop">
          <h1>
            <a href="" className="text-gradient">
              SẢN PHẨM NHIỀU LƯỢT XEM
            </a>
          </h1>
          <h2 className="tittle-head-top">
            <img src="../Img/bg_title.webp" alt="" />
          </h2>
          <div id="new" className="animation">
  <div className="product-grid product-viewtop">
    {viewsp.map((viewsp) => (
      <div key={viewsp.maSP} className="product-item">
        <div className="product_name">
          <img src={viewsp.hinhAnh} alt={viewsp.tenSP} />
          <div className="overlay">
            <div className="product-buttons">
              <button
                className="add-to-cart"
                onClick={() => addToCart(viewsp)}
              >
                <i className="fa-solid fa-bag-shopping" />
              </button>
              <Link to={`/detailt/${viewsp.maSP}`} onClick={() => window.scrollTo(0, 0)}>
               <button className="search">
               <i className="fa-solid fa-search" />
              </button>
              </Link>
            </div>
            <h3>
              <a title={viewsp.tenSP} href="">
                {viewsp.tenSP}
              </a>
            </h3>
            <br />
            <span className="product_price">
              {viewsp.gia.toLocaleString()}₫<span>/Khay</span>
            </span>
            <div className="product_view">
              <span>Số lượt xem: </span>
              <span>{viewsp.luotXem} </span>
              <i className="fa-solid fa-eye icon-view" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </section>
      <section className="section_transparent">
        <div className="transparent_background-container">
          <div className="text_transparent-center">
            <div className="text_body">
              <h2>Hotline</h2>
              <br />
              <a className="hotline_center" href="tel:0908.606.539">
                0908.606.539
              </a>
              <br />
              <p>
                Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng,
                <br /> sạch, an toàn và đảm bảo chất lượng ngon nhất.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bestsale">
        <div className="product-container">
          <h1>
            <a href="" className="text-gradient text-bottom">
              SẢN PHẨM BÁN CHẠY
            </a>
          </h1>
          <h2 className="tittle-head">
            <img src="Img/bg_title.webp" alt="" />
          </h2>
          <div id="new" className="animation">
  <div className="product-grid">
    {bestsp.map((bestsp) => (
      <div key={bestsp.maSP} className="product-item">
        <div className="product_name">
          <img src={bestsp.hinhAnh} alt={bestsp.tenSP} />
          <div className="overlay">
            <div className="product-buttons">
              <button
                className="add-to-cart"
                onClick={() => addToCart(bestsp)}
              >
                <i className="fa-solid fa-bag-shopping" />
              </button>
              <Link to={`/detailt/${bestsp.maSP}`} onClick={() => window.scrollTo(0, 0)}>
               <button className="search">
               <i className="fa-solid fa-search" />
              </button>
              </Link>
            </div>
            <h3>
              <a title={bestsp.tenSP} href="">
                {bestsp.tenSP}
              </a>
            </h3>
            <br />
            <span className="product_price">
              {bestsp.gia.toLocaleString()}₫<span>/Khay</span>
            </span>
            <div className="product_view">
              <span>Đã bán: </span>
              <span>{bestsp.soLuong} </span>
              <i className="fa-solid fa-cart-shopping icon-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>
      <section className="section_bestsale product-news">
        <div className="product-container">
          <h1>
            <a href="" className="text-gradient text-bottom">
              SẢN PHẨM MỚI VỀ
            </a>
          </h1>
          <h2 className="tittle-head">
            <img src="Img/bg_title.webp" alt="" />
          </h2>
  <div id="new" className="animation">
  <div className="product-grid">
    {newsp.map((newsp) => (
      <div key={newsp.maSP} className="product-item">
        <div className="product_name">
          <img src={newsp.hinhAnh} alt={newsp.tenSP} />
          <div className="overlay">
            <div className="product-buttons">
              <button
                className="add-to-cart"
                onClick={() => addToCart(newsp)}
              >
                <i className="fa-solid fa-bag-shopping" />
              </button>
              <Link to={`/detailt/${newsp.maSP}`} onClick={() => window.scrollTo(0, 0)}>
               <button className="search">
               <i className="fa-solid fa-search" />
              </button>
              </Link>
            </div>
            <h3>
              <a title={newsp.tenSP} href="">
                {newsp.tenSP}
              </a>
            </h3>
            <br />
            <span className="product_price">
              {newsp.gia.toLocaleString()}₫<span>/Khay</span>
            </span>
            <div className="product_view">
              <span>Ngày nhập: </span>
              <span>{newsp.ngaySanXuat.toLocaleDateString()} </span>
              <i className="fa-regular fa-calendar"></i>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>
      <section className="section_new_blog">
        <div className="new_blog_container">
          <div className="heading_new-blog">
            <h1>
              <a href="Tintuc.html" className="text-gradient blognews_text">
                TIN TỨC MỚI NHẤT
              </a>
            </h1>
            <h2
              style={{ marginLeft: 560 }}
              className="tittle-head tittle-blognews"
            >
              <img src="Img/bg_title.webp" alt="" />
            </h2>
          </div>
          {blog.map((item, index) => (
  <div className="content_blog-new" key={index}>
    <div className="blog_new">
      <img
        src={item.hinhAnh}
        alt=""
      />
      <div className="date">
        <i className="far fa-calendar" />
        <b className="color_main">{item.ngayDang.toLocaleDateString()}</b>
        &nbsp; Đăng bởi:
        <b className="color_main">{item.tacGia}</b>
      </div>
    </div>
    <div className="conten_right">
      <h3>
        <a href="">{item.tieuDe}</a>
      </h3>
      <p>
        {item.noiDung}
      </p>
    </div>
  </div>
))}

        </div>
      </section>
      <section className="top_brand">
        <div className="top_brand-app">
          <div className="heading_new-blog">
            <h1 className="heading_top_brand">ĐỐI TÁC</h1>
            <h2 style={{ marginLeft: 400 }} className="tittle-head">
              <img src="Img/bg_title.webp" alt="" />
            </h2>
          </div>
          <div className="img_top_brand-container">
            <div className="img_top-brand">
              <a href="" className="img-click-top_brand">
                <img src={logo_npp1} alt="" />
              </a>
              <a href="" className="img-click-top_brand">
                <img src={logo_npp2} alt="" />
              </a>
              <a href="" className="img-click-top_brand">
                <img src={logo_npp3} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  </>
)
}
export default HomePage;