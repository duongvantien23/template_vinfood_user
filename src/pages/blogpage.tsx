import "../assets/stylepages/blogpage.css"
const Blogs = () => {
return(
<>
  <div className="background-heading">
    <div className="tittle-heading">
      <h1>
        <p className="title_page">Tin tức</p>
      </h1>
    </div>
    <div className="col_center">
      <ul className="home-center">
        <li>
          <a id="home-heading" href="">
            <span>Trang chủ</span>
          </a>
          <span>&nbsp;</span>
          <i className="fa fa-angle-right" />
          &nbsp;
          <span className="a-tittle">Tin tức</span>
        </li>
      </ul>
    </div>
  </div>
  <section className="section_new_blog">
    <div className="new_blog_container">
      <div className="heading_new-blog">
        <h1 style={{ padding: 10 }}>
          <a href="" className="text-gradient">
            TIN TỨC
          </a>
        </h1>
      </div>
      <div className="content_blog-new">
        <div className="blog_new">
          <img
            src="Img/vinffood-khai-truong_a9b9e57bb94c46d6bd319ab1b2171c5e_large.webp"
            alt=""
          />
          <br />
          <div className="date">
            <i className="far fa-calendar" />
            <b className="color_main">11/11/2021</b>
            &nbsp; Đăng bởi:
            <b className="color_main">Đình Đỗ</b>
          </div>
        </div>
        <div className="conten_right">
          <h3>
            <a href="">Khai trương cửa hàng tại Vinhomes Grand Park</a>
          </h3>
          <p>
            Đã chính thức đi vào hoạt động và ổn định Cảm ơn quý khách hàng đã
            tin tưởng và...
          </p>
        </div>
      </div>
      <div className="content_blog-new">
        <div className="blog_new">
          <img
            src="Img/vai-tro-thu-pham-sach_b64f9acf2bdc4cd6860d2846dd2ba840_large.webp"
            alt=""
          />
          <br />
          <div className="date">
            <i className="far fa-calendar" />
            <b className="color_main">12/05/2021</b>
            &nbsp; Đăng bởi:
            <b className="color_main">Đỗ Đình</b>
          </div>
        </div>
        <div className="conten_right">
          <h3>
            <a href="">Vai trò của thực phẩm sạch đối với đời sống con người</a>
          </h3>
          <p>
            Trong cuộc sống con người không thể thiếu đi vai trò của các loại
            thực phẩm, nhất là...
          </p>
        </div>
      </div>
      <div className="content_blog-new">
        <div className="blog_new">
          <img
            src="Img/thuc-pham-sach-_ed23cf1338a646e8bc32b8ec74c5fce0_large.jpg"
            alt=""
          />
          <br />
          <div className="date">
            <i className="far fa-calendar" />
            <b className="color_main">11/05/2021</b>
            &nbsp; Đăng bởi:
            <b className="color_main">Đỗ Đình</b>
          </div>
        </div>
        <div className="conten_right">
          <h3>
            <a href="">
              Thực phẩm sạch và thực phẩm hữu cơ khác nhau như thế nào ?
            </a>
          </h3>
          <p>
            Cuộc sống ngày càng hiện đại, con người ngày càng quan tâm hơn đến
            chất lượng...
          </p>
        </div>
      </div>
      <div className="content_blog-new">
        <div className="blog_new">
          <img
            src="Img/unnamed_2aab83bf9825412a9ba73684493e2958_1024x1024.webp"
            alt=""
          />
          <br />
          <div className="date">
            <i className="far fa-calendar" />
            <b className="color_main">04/05/2021</b>
            &nbsp; Đăng bởi:
            <b className="color_main">A Đình</b>
          </div>
        </div>
        <div className="conten_right">
          <h3>
            <a href="">
              “Cơn gió mới” trong lĩnh vực thực phẩm và đồ uống trong năm 2021
            </a>
          </h3>
          <p>
            Các nhà phân tích theo dõi không gian ẩm thực cho biết mối quan tâm
            ngày càng...{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
</>
)
}
export default Blogs;