import {
  api1C,
  StaffInfoModel,
  StaffModel,
  StaffSalaryModel,
  StaffMovementModel,
  EmployeesReportModel,
  IS_MOCK,
  SalarySummaryModel,
} from "@/lib/api-service";
import {
  MOCK_EMPLOYEE_REPORT,
  MOCK_SALARY_SUMMARY,
  MOCK_STAFF_DATA,
  MOCK_STAFF_INFO,
  MOCK_STAFF_MOVEMENTS,
  MOCK_STAFF_SALARIES,
} from "@/lib/api-service/api/1c/mock";

const url = "";

export const staffService = {
  getStaff: async (bin: string, date: string): Promise<Array<StaffModel>> => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_STAFF_DATA;
    }

    const localVarPath = `/staff/${bin}/${date}`;
    const res = await api1C.get<{ data: Array<StaffModel> }>(
      `${url}${localVarPath}`,
    );
    return res.data.data;
  },

  getStaffSalary: async (bin: string, dateFrom: string, dateTo: string) => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_STAFF_SALARIES;
    }

    const localVarPath = `/staff-salary/${dateFrom}/${dateTo}/${bin}`;
    const res = await api1C.get<{ data: Array<StaffSalaryModel> }>(
      `${url}${localVarPath}`,
    );
    return res.data.data;
  },

  getSalarySummary: async (bin: string, dateFrom: string, dateTo: string) => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_SALARY_SUMMARY;
    }

    const localVarPath = `/salary_summary/${dateFrom}/${dateTo}/${bin}`;
    const res = await api1C.get<SalarySummaryModel>(`${url}${localVarPath}`);
    return res.data;
  },

  getEmployeesReport: async (bin: string, dateFrom: string, dateTo: string) => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_EMPLOYEE_REPORT;
    }

    const localVarPath = `/employees_report/${dateFrom}/${dateTo}/${bin}`;
    const res = await api1C.get<EmployeesReportModel>(`${url}${localVarPath}`);
    return res.data;
  },

  getStaffInfo: async (guid: string) => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      const staffInfo = MOCK_STAFF_INFO.find((s) => s.id_number === guid);
      if (!staffInfo) {
        throw new Error("Staff info not found");
      }
      return staffInfo;
    }

    const localVarPath = `/staff-info/${guid}`;
    const res = await api1C.get<StaffInfoModel>(`${url}${localVarPath}`);
    return res.data;
  },

  getStaffMovements: async (guid: string) => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_STAFF_MOVEMENTS;
    }
    const localVarPath = `/staff_movements/${guid}`;
    const res = await api1C.get<{ data: Array<StaffMovementModel> }>(
      `${url}${localVarPath}`,
    );
    return res.data.data;
  },
};
