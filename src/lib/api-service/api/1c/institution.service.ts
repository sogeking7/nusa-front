import { api1C, InstitutionModel, IS_MOCK } from "@/lib/api-service";
import { MOCK_INSTITUTIONS } from "@/lib/api-service/api/1c/mock";

const url = "";

export const institutionService = {
  getInstitutions: async () => {
    if (IS_MOCK) {
      await new Promise((res) => setTimeout(res, 300));
      return MOCK_INSTITUTIONS;
    }

    const localVarPath = `/institutions`;
    const res = await api1C.get<Array<InstitutionModel>>(
      `${url}${localVarPath}`,
    );
    return res.data;
  },
};
