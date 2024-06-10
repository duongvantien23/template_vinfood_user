
import "../assets/stylepages/categorypage.css"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../services/categoryproduct'; 
import { Link } from "react-router-dom";
export interface Product {
  maSP: string;
  maDanhMuc: string;
  tenDanhMuc: string;
  tenSP: string;
  gia: number;
  luotXem: number;
  soLuong: number;
  hinhAnh: string;
  ngaySanXuat: Date;
}
const Categoy = () => {
  const { maDanhMuc } = useParams(); 
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (maDanhMuc) { 
          const data = await getProductsByCategory(maDanhMuc); 
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchProducts();
  }, [maDanhMuc]);
 return(
    <>
    <div className="background-heading">
      <div className="col_center">
        <ul className="home-center">
          <h2 style={{ padding: 10 }} className="tittle-head-category">
          {products.length > 0 && products[0].tenDanhMuc}
          </h2>
          <li>
            <a id="home-heading" href="">
              <span>Trang chủ</span>
            </a>
            <span>&nbsp;</span>
            <i className="fa fa-angle-right" />
            &nbsp;
            <span className="a-tittle">{products.length > 0 && products[0].tenDanhMuc}</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="category-product">
      <div className="sort-product">
        <div className="text-product">
          <h1 className="tittle-head">{products.length > 0 && products[0].tenDanhMuc}</h1>
        </div>
        <div className="sort-click">
          <ul>
            <li>Sắp xếp theo:</li>
            <li>
              <label>
                <a href="#" data-sort="SPTraiCay">
                  <i>
                    <input className="radio-sort" type="radio" name="sort" />
                  </i>
                  A → Z
                </a>
              </label>
            </li>
            <li>
              <label>
                <a href="#" data-sort="Z-a-SPTraiCay">
                  <i>
                    <input className="radio-sort" type="radio" name="sort" />
                  </i>
                  Z → A
                </a>
              </label>
            </li>
            <li>
              <label>
                <a href="#" data-sort="PriceAsc-SPTraiCay">
                  <i>
                    <input className="radio-sort" type="radio" name="sort" />
                  </i>
                  Giá tăng dần
                </a>
              </label>
            </li>
            <li>
              <label>
                <a href="#" data-sort="PriceDesc-SPTraiCay">
                  <i>
                    <input className="radio-sort" type="radio" name="sort" />
                  </i>
                  Giá giảm dần
                </a>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="product-container">
    <div id="new" className="animation">
  <div className="product-grid-category">
    {products.map((products) => (
      <div key={products.maSP} className="product-item">
        <div className="product_name">
          <img src={products.hinhAnh} alt={products.tenSP} />
          <div className="overlay">
            <div className="product-buttons">
              <button
                className="add-to-cart"
                data-product-id={products.maSP}
              >
                <i className="fa-solid fa-bag-shopping" />
              </button>
              <Link to={`/detailt/${products.maSP}`} onClick={() => window.scrollTo(0, 0)}>
               <button className="search">
               <i className="fa-solid fa-search" />
              </button>
              </Link>
            </div>
            <h3>
              <a title={products.tenSP} href="">
                {products.tenSP}
              </a>
            </h3>
            <br />
            <span className="product_price">
              {products.gia.toLocaleString()}₫<span>/Khay</span>
            </span>
            <div className="product_view">
              <span>Số lượt xem: </span>
              <span>{products.luotXem} </span>
              <i className="fa-solid fa-eye icon-view" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
    <div className="tranform-page">
      <ul className="page-small">
        <li className="page-a page-active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-a">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-a">
          <a style={{ fontSize: 15 }} className="page-link" href="#">
            &gt;
          </a>
        </li>
      </ul>
    </div>
  </>  
 )
}
export default Categoy;