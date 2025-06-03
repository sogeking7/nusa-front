import {
  api1C,
  StaffInfoModel,
  StaffModel,
  StaffSalaryModel,
  StaffMovementModel,
} from "@/lib/api-service";

const url = "";

export const staffService = {
  getStaff: async (bin: string, date: string) => {
    const localVarPath = `/staff/${bin}/${date}`;
    return await api1C.get<Array<StaffModel>>(`${url}${localVarPath}`);
  },

  getStaffSalary: async (bin: string, dateFrom: string, dateTo: string) => {
    const localVarPath = `/staff-salary/${dateFrom}/${dateTo}/${bin}`;
    return await api1C.get<Array<StaffSalaryModel>>(`${url}${localVarPath}`);
  },

  getSalarySummary: async (bin: string, dateFrom: string, dateTo: string) => {
    const localVarPath = `/salary-summary/${dateFrom}/${dateTo}/${bin}`;
    return await api1C.get<unknown>(`${url}${localVarPath}`);
  },

  getEmployeesReport: async (bin: string, dateFrom: string, dateTo: string) => {
    const localVarPath = `/employees-report/${dateFrom}/${dateTo}/${bin}`;
    return await api1C.get<unknown>(`${url}${localVarPath}`);
  },

  getStaffInfo: async (guid: string, date: string) => {
    const localVarPath = `/staff-info/${guid}/${date}`;
    return await api1C.get<StaffInfoModel>(`${url}${localVarPath}`);
  },

  getStaffMovements: async (guid: string) => {
    const localVarPath = `/staff-movements/${guid}`;
    return await api1C.get<Array<StaffMovementModel>>(`${url}${localVarPath}`);
  },
};
