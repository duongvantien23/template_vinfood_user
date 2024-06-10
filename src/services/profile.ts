import { apiClient } from "../constant/api";

export interface Profiles {
    maKH: number;
    tenDangNhap: string;
    matKhau: string;
    hoTen: string;
    email: string;
    diaChi: string;
  }
  export interface Order {
    maDonHang: number;
    maKH: number;
    tenKH: string;
    sdt: string;
    email: string;
    diaChi: string;
    maPhuongThuc: number;
    maTrangThai: number;
    ngayDatHang: string;
    tenPhuongThuc: string;
    diaChiGiaoHang: string;
    maSP: number;
    tenSP: string;
    tongGia: number;
    soLuong: number;
    maGiamGia: string;
}
export interface Profiles {
  maKH: number,
  tenDangNhap: string;
  matKhau: string;
  hoTen: string;
  email: string;
  diaChi: string;
}

export const getCustomerById = async (customerId: number): Promise<any> => {
  try {
    const response = await apiClient.get(`/get-by-id-customers/${customerId}`);
    return response.data;
  } catch (error: any) {
    console.error('Lỗi khi lấy thông tin khách hàng:', error.message);
    throw error;
  }
};
export const getOrdersByEmail = async (email: string): Promise<Order[]> => {
  try {
      const response = await apiClient.get(`/api/Order/get-orders-by-email/${email}`);
      return response.data as Order[];
  } catch (error: any) {
      console.error('Lỗi khi lấy danh sách đơn hàng:', error.message);
      throw error;
  }
};
export const createCustomer = async (profile: Profiles): Promise<any> => {
  try {
    const response = await apiClient.post(`/api/Customer/create-customer`, profile);
    return response.data;
  } catch (error: any) {
    console.error('Lỗi khi tạo khách hàng:', error.message);
    throw error;
  }
};