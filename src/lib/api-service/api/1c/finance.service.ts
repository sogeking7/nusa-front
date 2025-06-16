import { api1C, AssetsModel, IS_MOCK } from "@/lib/api-service";
import { MOCK_ASSETS } from "@/lib/api-service/api/1c/mock";

const url = "";

export const financeService = {
  getAssets: async (bin: string, dateFrom: string, dateTo: string) => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_ASSETS.data;
    }

    const localVarPath = `/assets/${dateFrom}/${dateTo}/${bin}`;
    const res = await api1C.get<{
      data: Array<AssetsModel>;
      report_date: string;
    }>(`${url}${localVarPath}`);
    return res.data.data;
  },

  getTurnoverBalance: async (
    code: string,
    bin: string,
    dateFrom: string,
    dateTo: string,
  ) => {
    const localVarPath = `/turnover_balance/${code}/${dateFrom}/${dateTo}/${bin}`;
    return await api1C.get<unknown>(`${url}${localVarPath}`);
  },

  getObligationsCapital: async (
    bin: string,
    dateFrom: string,
    dateTo: string,
  ) => {
    const localVarPath = `/obligations-capital/${dateFrom}/${dateTo}/${bin}`;
    return await api1C.get<unknown>(`${url}${localVarPath}`);
  },
};
