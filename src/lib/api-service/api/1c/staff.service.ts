import {
  api1C,
  StaffInfoModel,
  StaffModel,
  StaffSalaryModel,
  StaffMovementModel,
  EmployeesReportModel,
  IS_MOCK,
} from "@/lib/api-service";
import {
  MOCK_STAFF_DATA,
  MOCK_STAFF_INFO,
} from "@/lib/api-service/api/1c/mock";

const url = "";

export const staffService = {
  getStaff: async (bin: string, date: string): Promise<Array<StaffModel>> => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_STAFF_DATA;
    }

    const localVarPath = `/staff/${bin}/${date}`;
    const res = await api1C.get<Array<StaffModel>>(`${url}${localVarPath}`);
    return res.data;
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
    return await api1C.get<EmployeesReportModel>(`${url}${localVarPath}`);
  },

  getStaffInfo: async (guid: string, date: string) => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_STAFF_INFO.find((s) => s.id_number === guid);
    }

    const localVarPath = `/staff-info/${guid}/${date}`;
    const res = await api1C.get<StaffInfoModel>(`${url}${localVarPath}`);
    return res.data;
  },

  getStaffMovements: async (guid: string) => {
    const localVarPath = `/staff-movements/${guid}`;
    return await api1C.get<Array<StaffMovementModel>>(`${url}${localVarPath}`);
  },
};
