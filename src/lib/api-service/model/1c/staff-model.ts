import { GenderModel } from "@/lib/api-service/model/1c/gender-model";

export interface StaffModel {
  institution_guid: string;
  institution_name: string;
  institution_bin: string;
  staff_id: string;
  staff_iin: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  gender: GenderModel;
  birth_date: string;
  struct_guid: string;
  struct_name: string;
  struct_bin: string;
  department_guid: string;
  department_name: string;
  department_sort: string;
  position: string;
  position_name: string;
  position_sort: string;
}
