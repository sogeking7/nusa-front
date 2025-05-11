import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import {
  GetStaff,
  GetStaffInfo,
  GetStaffMovements,
  GetStaffSalaries,
  GetStaffResponse,
  MOCK_STAFF_DATA,
  MOCK_STAFF_INFO,
  MOCK_STAFF_MOVEMENTS,
  MOCK_STAFF_SALARIES
} from "./staff.service.types";

export const StaffService = () => {
  const url = "/staff";

  // This is a mock implementation that will be replaced with real API calls
  const getStaff: GetStaff = async (params) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      // In the future, this will be replaced with:
      // const { data } = await apiPayload().get<GetStaffResponse>(`${url}/`, { params });
      // return { success: true, data };

      // For now, return mock data
      const mockResponse: GetStaffResponse = {
        data: MOCK_STAFF_DATA,
        count: MOCK_STAFF_DATA.length,
      };

      return {
        success: true,
        data: mockResponse,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const getStaffInfo: GetStaffInfo = async ({ staff_id }) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      // In the future, this will be replaced with:
      // const { data } = await apiPayload().get<GetStaffInfoResponse>(`${url}-info`, { params: { staff_id } });
      // return { success: true, data };

      // For now, return mock data
      const mockStaffInfo = MOCK_STAFF_INFO[staff_id];

      if (!mockStaffInfo) {
        throw new Error("Staff not found");
      }

      return {
        success: true,
        data: mockStaffInfo,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const getStaffMovements: GetStaffMovements = async ({ staff_id }) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      // In the future, this will be replaced with:
      // const { data } = await apiPayload().get(`${url}-movements`, { params: { staff_id } });
      // return { success: true, data };

      // For now, return mock data
      const mockMovements = MOCK_STAFF_MOVEMENTS[staff_id];

      if (!mockMovements) {
        throw new Error("Staff movements not found");
      }

      return {
        success: true,
        data: mockMovements,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const getStaffSalaries: GetStaffSalaries = async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      // In the future, this will be replaced with:
      // const { data } = await apiPayload().get('/staff-salary');
      // return { success: true, data };

      // For now, return mock data
      return {
        success: true,
        data: MOCK_STAFF_SALARIES,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  return {
    getStaff,
    getStaffInfo,
    getStaffMovements,
    getStaffSalaries,
  };
};