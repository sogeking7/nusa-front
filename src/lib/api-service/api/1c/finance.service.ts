import { api1C } from "@/lib/api-service";

const url = "";

export const financeService = {
  getAssets: async (bin: string, dateFrom: string, dateTo: string) => {
    const localVarPath = `/assets/${dateFrom}/${dateTo}/${bin}`;
    return await api1C.get<unknown>(`${url}${localVarPath}`);
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
