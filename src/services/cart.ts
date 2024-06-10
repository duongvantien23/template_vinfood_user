import { apiClient } from "../constant/api";
export const apiCreateOrder = async (
    data: any,
  ): Promise<any> => {
    const res = await apiClient?.post(`/api/Order/CreateOrder`, data);  
    return res?.data;
  };