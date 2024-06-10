import { apiClient } from '../constant/api';

// Lấy sản phẩm theo ID
export const getProductById = async (productId: number): Promise<any> => {
  try {
    const response = await apiClient.get(`/get-by-id/${productId}`);
    return response.data;
  } catch (error: any) {
    console.error('Lỗi khi lấy sản phẩm:', error.message);
    throw error;
  }
};
// Lấy sản phẩm liên quan dựa vào mã danh mục
export const getRelatedProducts = async (maDanhMuc: string): Promise<any> => {
  try {
    const response = await apiClient.get(`/getall-sp-bydanhmuc?maDanhMuc=${maDanhMuc}`);
    return response.data;
  } catch (error: any) {
    console.error('Lỗi khi lấy sản phẩm liên quan:', error.message);
    throw error;
  }
};
  
  
  