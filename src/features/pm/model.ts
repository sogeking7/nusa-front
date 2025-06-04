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

export interface ProfileData {
  photo?: string;
  name: string;
  position: string;
  organization: {
    name: string;
    department: string;
    salary: string;
  };
  personalInfo: {
    birthYear: string;
    gender: string;
    nationality: string;
    iin: string;
    employeeType: string;
    hireLocation: string;
    education: string;
    birthPlace: string;
  };
  contacts: {
    phone: string;
    email: string;
  };
}
