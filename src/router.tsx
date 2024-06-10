
import HomePage from './pages/homepage';
import ProductDetail from './pages/detailtpage';
import IntroPage from './pages/intropage';
import Blogs from './pages/blogpage';
import Cart from './pages/cartpage';
import ProductsByCategory from './pages/categorypage';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Checkout from './pages/checkoutpage';
import Success from './shared/success';





// Định nghĩa các hằng số cho đường dẫn
const ROUTE_PATHS = {
    HOME: "/",
    Detailt: "/detailt/:maSP",
    Intro: "/intro",
    Blogs: "/blogs",
    Cart: "/cart",
    CATEGORY: "/category/:maDanhMuc",
    Login: "/login",
    Register: "/register",
    Profile: "/profile",
    Checkout: "/checkout",
    Success: "/success",
};

export const routes = [
    { path: ROUTE_PATHS.HOME, element: <HomePage />, exact: true, description: "Trang chủ" },
    { path: ROUTE_PATHS.Detailt, element: <ProductDetail />, description: "Chi tiết sản phẩm" },
    { path: ROUTE_PATHS.Intro, element: <IntroPage />, description: "Giới thiệu" },
    { path: ROUTE_PATHS.Blogs, element: <Blogs/>, description: "Tin tức" },
    { path: ROUTE_PATHS.Cart, element: <Cart/>, description: "Giỏ hàng" },
    { path: ROUTE_PATHS.CATEGORY, element: <ProductsByCategory />, description: "Sản phẩm theo danh mục" },
    { path: ROUTE_PATHS.Login, element: <Login />, description: "Đăng nhập" },
    { path: ROUTE_PATHS.Register, element: <Register />, description: "Đăng ký" },
    { path: ROUTE_PATHS.Profile, element: <Profile />, description: "Thông tin cá nhân" },
    { path: ROUTE_PATHS.Checkout, element: <Checkout />, description: "Thanh toán" },
    { path: ROUTE_PATHS.Success, element: <Success />, description: "Đặt hàng thành công" },
];

