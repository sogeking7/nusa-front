import { api1C, IS_MOCK, MaterialReportModel } from "@/lib/api-service";
import { MOCK_MATERIAL_REPORT } from "@/lib/api-service/api/1c/mock";

const url = "";

export const warehouseService = {
  getMaterialReport: async (bin: string, dateFrom: string, dateTo: string) => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_MATERIAL_REPORT;
    }

    const localVarPath = `/material_report/${dateFrom}/${dateTo}/${bin}`;
    const res = await api1C.get<{ data: Array<MaterialReportModel> }>(
      `${url}${localVarPath}`,
    );
    return res.data.data;
  },
};
