import { apiClient } from "../constant/api";


export interface Product {
  maSP: string;
  tenSP: string;
  gia: number;
  soLuong: number;
  luotXem: number;
  hinhAnh: string;
  ngaySanXuat: Date;
  // Thêm các trường khác nếu cần
}
export const getSPTopView = async (): Promise<any> => {
  try {
    const res = await apiClient.get(`/get-top-view-sanpham?limit=8`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const getSPBestSale = async (): Promise<any> => {
  try {
    const res = await apiClient.get(`/get-all-sanpham-bestsale`);
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const getNewSP = async (): Promise<any> => {
  try {
    const res = await apiClient.get(`/get-all-sanpham-news`);
    if (res.data && Array.isArray(res.data)) {
      return res.data.map((item: any) => ({
        ...item,
        ngaySanXuat: new Date(item.ngaySanXuat)
      }));
    } else {
      throw new Error('Invalid or empty data returned from API');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const getNewBlogs = async (): Promise<any> => {
  try {
    const res = await apiClient.get(`/api/TinTuc/tintuc/get-blognews-user`);
    if (res.data && Array.isArray(res.data)) {
      return res.data.map((item: any) => ({
        ...item,
        ngayDang: new Date(item.ngayDang)
      }));
    } else {
      throw new Error('Invalid or empty data returned from API');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const searchTenSanPham = async (tenSP: string): Promise<Product[]> => {
  try {
    const encodedTenSP = encodeURIComponent(tenSP); 
    const res = await apiClient.get(`/Search-TenSanPham?TenSP=${encodedTenSP}`);
    if (res.data && Array.isArray(res.data)) {
      return res.data.map((item: any) => ({
        ...item,
        ngaySanXuat: new Date(item.ngaySanXuat)
      }));
    } else {
      throw new Error('Invalid or empty data returned from API');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


