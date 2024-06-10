import { apiClient } from "../constant/api";


export const getProductsByCategory = async (categoryId: string) => {
  try {
    const response = await apiClient.get(`/getall-sp-spdanhmuc-loaisp?maDanhMuc=${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};
