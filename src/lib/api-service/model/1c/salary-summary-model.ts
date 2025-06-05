export interface SalarySummaryModel {
  accrued_total: string;
  accrued: {
    hazard_pay: string;
    qualification_bonus: string;
    performance_bonus: string;
    vacation_compensation_dismissal: string;
    taxable_financial_aid: string;
    night_shift_pay: string;
    daily_salary: string;
    hourly_salary_amount: string;
    sick_leave_payment: string;
    vacation_payment: string;
    health_allowance_vacation: string;
    holiday_weekend_pay: string;
    bonus_percentage_income: string;
    bonus_fixed_amount: string;
  };
  withheld_total: string;
  withheld: {
    medical_insurance_contributions: string;
    individual_income_tax: string;
    mandatory_pension_contributions: string;
    union_dues: string;
    other_deductions: string;
    wage_garnishment: string;
  };
  transferred_total: string;
  transferred: {
    bank_transfer: string;
  };
  balance_at_end: {
    social_tax: string;
    social_contributions: string;
    employer_medical_insurance_contributions: string;
    employer_mandatory_pension_contributions: string;
  };
}
