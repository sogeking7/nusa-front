export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  institution: string;
  avatarUrl?: string;
}

export interface GenderStats {
  total: number;
  men: number;
  women: number;
}

export interface SalaryRange {
  average: number;
  high: number;
  low: number;
}

export interface SalarySummary {
  accrued: number;
  withheld: number;
  transferred: number;
}

export interface EmployeePeriodStats {
  accepted: number;
  fired: number;
  vacant: number;
  contractors: number;
  civilContracts: number;
  ratio: string;
}

export interface PositionSalary {
  position: string;
  salary: number;
}
