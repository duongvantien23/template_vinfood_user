
import "../assets/stylepages/detailtpage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, getRelatedProducts } from "../services/productdetailt";
import { Link } from "react-router-dom";
export interface Product {
  maSP: string;
  tenSP: string;
  gia: number;
  luotXem: number;
  soLuong: number;
  hinhAnh: string;
  mota: string;
  tenDanhMuc: string;
  donViTinh: string;
  maDanhMuc: string;
}
const Detailt = () => {
  const { maSP } = useParams<{ maSP: string }>(); 
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (maSP) { 
          const productData = await getProductById(Number(maSP)); 
          setProduct(productData);

          // danh mục
          const relatedProductData = await getRelatedProducts(productData.maDanhMuc);
          setRelatedProducts(relatedProductData);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [maSP]);
  
 return(
 <>
 <div className="container">
  <div className="background-heading">
    <div className="col_center">
      <ul className="home-center">
        <h2 style={{ padding: 10 }} className="tittle-heading">
        {product && product.tenSP}
        </h2>
        <div>
          <a id="home-heading" href="">
            <span>Trang chủ</span>
          </a>
          <span>{'\u00A0'}</span>
          <i className="fa fa-angle-right" />
          {'\u00A0'}
          <a id="home-heading" href="">
            <span>{product && product.tenDanhMuc}</span>
          </a>
          <i className="fa fa-angle-right" />
          {'\u00A0'}
          <span className="a-tittle">{product && product.tenSP}</span>
        </div>
      </ul>
    </div>
  </div>
  <div className="product-wrap">
    <div className="row-product">
      <div className="img_container">
      <img id="mainImage" src={product?.hinhAnh ?? ""} alt="" />
      {/* <div className="img-small">
        <div className="item1">
        <img src= {product?.hinhAnh ?? ""} alt="" />
      </div>
     <div className="item2">
    <img src= {product?.hinhAnh ?? ""} alt="" />
     </div>
    <div className="item3">
    <img src= {product?.hinhAnh ?? ""} alt="" />
    </div>
</div> */}
      </div>
      <div className="profile-product">
        <h1 className="title-product">{product && product.tenSP}</h1>
        <div className="status-product">
          <span className="firt-status">
            Thương hiệu:
            <span className="status_name"> Vinffood </span>
          </span>
          <span className="line-status">|</span>
          <span className="firt-status2"> Tình trạng:</span>
          <span className="status_name"> Còn hàng</span>
        </div>
        <div className="price-box">
          <span className="product-price">{product && product.gia.toLocaleString()}₫ /{product && product.donViTinh}</span>
          <div className="describe-product">
            <p>
            {product && product.mota}
            </p>
            <hr className="line-descripe" />
          </div>
        </div>
        <div className="buy-product">
          <div className="custom-sl">
            <span style={{ color: "black", fontWeight: 900, marginRight: 10 }}>
              Số lượng:{" "}
            </span>
            <button className="remove" type="button">
              -
            </button>
            <input type="text" className="count" defaultValue={1} min={1} />
            <button className="add" type="button">
              +
            </button>
          </div>
          <div className="buy-product-gradient">
            <button type="submit" className="btn-gradient">
              <span className="btn-content">Thêm vào giỏ hàng</span>
            </button>
          </div>
          <div className="hotline-product">
            <span className="hotline">
              {" "}
              Gọi đặt mua: <a href="tel:0908606539">0908606539</a> để nhanh
              chóng đặt hàng
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="top-brand">
    <div className="banner-product">
      <img src="Img/bg_pro.webp" alt="" />
    </div>
    <div className="detail-product">
      <ul>
        <li>
          <h3>Mô tả sản phẩm</h3>
          <div className="line-stright" />
          <hr color="#ebebeb" style={{ marginLeft: 815, width: 61}} />
        </li>
      </ul>
    </div>
    <div className="body-brand">
      <p className="descripe-head">
        <b>{product && product.tenSP} </b> 
        <b>{product && product.mota}</b>.{" "}
      </p>
      <p style={{ textAlign: "center" }}>
      <img src = {product?.hinhAnh ?? ""} alt="" className="img-description"/>
      </p>
      <h2>Thực phẩm Vinfood{'\u00A0'}đạt các tiêu chuẩn về an toàn toàn thực phẩm:</h2>
      <p className="descripe-body">
        -{'\u00A0'}GMP
        <br />- HACCP
        <br />- ISO 14001:2004
        <br />- ISO 9001:2008
      </p>
      <h2>Thực phẩm CP cam kết</h2>
      <p className="descripe-body">
        - Không chất bảo quản.
        <br />- Hệ thống chăn nuôi khép kín.
        <br />- Sử dụng thực phẩm chất lượng cao.
        <br />- Truy xuất được nguồn gốc.
      </p>
    </div>
  </div>
  <section className="section_bestsale">
  <div className="product-container">
    <h1>
      <a href="" className="text-gradient">
        SẢN PHẨM LIÊN QUAN
      </a>
    </h1>
    <h2 className="tittle-head-top">
      <img src="../Img/bg_title.webp" alt="" />
    </h2>
    <div id="new" className="animation">
      <div className="product-grid-detailt">
        {relatedProducts.map((relatedProduct) => (
          <div key={relatedProduct.maSP} className="product-item">
            <div className="product_name">
              <img src={relatedProduct.hinhAnh} alt={relatedProduct.tenSP} />
              <div className="overlay">
                <div className="product-buttons">
                  <button className="add-to-cart" data-product-id={relatedProduct.maSP}>
                    <i className="fa-solid fa-bag-shopping" />
                  </button>
                  <Link to={`/detailt/${relatedProduct.maSP}`} onClick={() => window.scrollTo(0, 0)}>
                    <button className="search">
                      <i className="fa-solid fa-search" />
                    </button>
                  </Link>
                </div>
                <h3>
                  <a title={relatedProduct.tenSP} href="">
                    {relatedProduct.tenSP}
                  </a>
                </h3>
                <br />
                <span className="product_price">
                  {relatedProduct.gia.toLocaleString()}₫<span>/Khay</span>
                </span>
                <div className="product_view">
                  <span>Số lượt xem: </span>
                  <span>{relatedProduct.luotXem} </span>
                  <i className="fa-solid fa-eye icon-view" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  </div>
  </>
 )
}
export default Detailt;