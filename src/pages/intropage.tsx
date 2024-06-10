import "../assets/stylepages/intropage.css"
const Intro = () => {
return(
<>
  <div className="background-heading">
    <div className="tittle-heading">
      <h1>
        <p className="title_page">Giới thiệu</p>
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
          <span className="a-tittle">Giới thiệu</span>
        </li>
      </ul>
    </div>
  </div>
  <div className="page-tittle">
    <p style={{ textAlign: "center" }}>
      <img
        src="Img/vinfood_logo-01-png_32753e177eb541b68029ff0ae3eb31ac_grande.webp"
        alt=""
      />
    </p>
    <span className="color-font">
      <strong>
        <strong>THỰC PHẨM SẠCH VINFFOOD - VÌ SỨC KHOẺ CỘNG ĐỒNG</strong>
      </strong>
    </span>
    <div className="tittle-hd">
      <h1>Giới thiệu</h1>
    </div>
    <br />
    <div className="body-tittle">
      <span className="tt-bd">
        <h2>Thực Trạng &amp; Lý tưởng</h2>
      </span>
      <p>
        Hiện nay nguy cơ đến từ bữa ăn hàng ngày do dùng phải{" "}
        <b>rau, trái cây không sạch </b>, rau có hàm lượng hoá chất, độc tố cao
        đang đe doạ sức khoẻ, tính mạng con người.
        <br />
        Xuất phát từ thực tế đó,<b>
          {" "}
          Công ty Cổ Phần Thực Phẩm Sạch Vinffood{" "}
        </b>{" "}
        được thành lập với sứ mệnh “Vì sức khoẻ cộng đồng” chuyên{" "}
        <b> cung cấp trái cây, rau sạch </b> và các loại{" "}
        <b> thực phẩm an toàn </b>nhằm góp phần <b> bảo vệ sức khỏe </b> người
        tiêu dùng.
      </p>
    </div>
    <div className="body-tittle">
      <span className="tt-bd">
        <h2>Về Sản phẩm:</h2>
      </span>
      <p>
        Hàng hóa ở Vinffood luôn đa dạng về sản phẩm và phong phú về chủng loại,
        vì vậy tùy theo từng nhóm sản phẩm chúng tôi luôn cam kết đạt những tiêu
        chuẩn chất lượng khác nhau và có chứng nhận nguồn gốc xuất xứ rõ ràng
        được cấp bởi những cơ quan có thẩm quyền.
      </p>
    </div>
    <div className="body-tittle">
      <span className="tt-bd">
        <h2>-Trái cây Việt Nam đạt chuẩn Vietgap, Global Gap, Hữu cơ.</h2>
      </span>
    </div>
    <div className="body-tittle">
      <span className="tt-bd">
        <h2>- Rau hữu cơ:</h2>
      </span>
      <p>+ Không bón phân hóa học</p>
      <p>+ Không phun thuốc bảo vệ thực vật</p>
      <p>+ Không phun thuốc kích thích sinh trưởng</p>
      <p>+ Không sử dụng thuốc diệt cỏ</p>
      <p>+ Không sử dụng sản phẩm biến đổi gen</p>
    </div>
    <div className="body-tittle">
      <span className="tt-bd">
        <h2>- Thịt sạch:</h2>
      </span>
      <p>+ Không có chất tạo nạc</p>
      <p>+ Không có chất tăng trọng</p>
      <p>+ Không có dư lượng chất kháng sinh</p>
      <p>+ Không vi khuẩn gây bệnh</p>
      <p>+ Không có chất bảo quản.</p>
      <p>Cùng nhiều sản phẩm khác…</p>
    </div>
    <div className="body-tittle">
      <span className="tt-bd">
        <h2>Chất lượng phục vụ:</h2>
      </span>
      <p>
        Với mục tiêu trở thành nhà phân phối <b>thực phẩm sạch</b> hàng đầu Việt
        Nam, Vinffood luôn đề cao chất lượng phục vụ khách hàng. Đội ngũ nhân
        viên trẻ trung luôn tư vấn nhiệt tình, ghi nhận giải đáp mọi thắc mắc
        của khách hàng về sản phẩm.
      </p>
    </div>
    <div className="body-tittle">
      <span className="tt-bd">
        <h2>Dịch vụ mua hàng trực tuyến và giao hàng tận nơi</h2>
      </span>
      <p>
        Chỉ với vài thao tác đơn giản bạn có thể đặt mua hàng trực tuyến tại
        website: <span style={{ color: "blue" }}>https://vinffood.vn/</span>{" "}
        Nhân viên tư vấn của cửa hàng sẽ liên hệ trực tiếp bạn để chốt đơn hàng
        và thông tin địa điểm trước khi chuyển qua bộ phận giao hàng tận nơi.
      </p>
      <p>
        Ngoài ra Vinffood có những kênh mạng xã hội{" "}
        <span style={{ color: "blue" }}>facebook, zalo</span>, nhằm hỗ trợ tư
        vấn cho người tiêu dùng về chế độ ăn uống khoa học, hợp lý để mọi người
        có được những phương pháp sử dụng thực phẩm một cách hiệu quả nhất.
      </p>
      <p>Liên hệ ngay Vinffood để được sử dụng thực phẩm sạch mỗi ngày!</p>
      <p>=================</p>
      <p>Mọi chi tiết xin liên hệ:</p>
    </div>
    <div className="body-tittle">
      <span className="tt-bd">
        <h2>CÔNG TY CỔ PHẦN THỰC PHẨM SẠCH VINFFOOD</h2>
      </span>
      <p>
        Tòa S301 Vinhome Grand Park, Nguyễn Xiển, Long Thạnh Mỹ, Tp. Thủ Đức
      </p>
      <p>Hotline: 0908.606.539</p>
    </div>
  </div>
</>
)
}
export default Intro;