import { apiClient } from "../constant/api";

export const AuthService = {
    login: async (taiKhoan: string, matKhau: string) => {
      try {
        const response = await apiClient.post('/api/Customer/login', { taiKhoan, matKhau });
        return response.data;
      } catch (error) {
        throw new Error('Đăng nhập không thành công. Vui lòng thử lại sau.');
      }
    }
  };