import { apiClient } from "../constant/api";

export interface Product {
  maSP: string;
  tenSP: string;
  gia: number;
  luotXem: number;
  soLuong: number;
  hinhAnh: string;
  ngaySanXuat: Date;
}

export const getItems = async (): Promise<any> => {
  try {
    const res = await apiClient.get(`/get-all-sanpham-user`);
    return res.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách mặt hàng:", error);
    throw error;
  }
};


