export interface MaterialReportModel {
  responsible_person: string;
  total_balance_start_qty: number;
  balance_start_sum: number;
  turnover_debit_qty: number;
  turnover_debit_sum: number;
  turnover_credit_qty: number;
  turnover_credit_sum: number;
  balance_end_qty: number;
  balance_end_sum: number;
  departments: Array<MaterialReportDepartmentModel>;
}

export interface MaterialReportDepartmentModel {
  department_name: string;
  total_balance_start_qty: number;
  balance_start_sum: number;
  turnover_debit_qty: number;
  turnover_debit_sum: number;
  turnover_credit_qty: number;
  turnover_credit_sum: number;
  balance_end_qty: number;
  balance_end_sum: number;
  row_number: Array<MaterialReportMaterialModel>;
}

export interface MaterialReportMaterialModel {
  row_number: string;
  item_name: string;
  nomenclature_number: string;
  unit: string;
  price: string;
  total_balance_start_qty: number;
  balance_start_sum: number;
  turnover_debit_qty: number;
  turnover_debit_sum: number;
  turnover_credit_qty: number;
  turnover_credit_sum: number;
  balance_end_qty: number;
  balance_end_sum: number;
}
