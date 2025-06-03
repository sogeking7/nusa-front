import { api1C } from "@/lib/api-service";

const url = "";

export const warehouseService = {
  getMaterialReport: async (bin: string, dateFrom: string, dateTo: string) => {
    const localVarPath = `/material_report/${dateFrom}/${dateTo}/${bin}`;
    return await api1C.get<unknown>(`${url}${localVarPath}`);
  },
};
