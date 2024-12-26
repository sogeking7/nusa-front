export interface FinancialRecord {
  id: string;
  name: string;
  isSubItem?: boolean;
  balanceStart: {
    quantity: number;
    sum: number;
  };
  debit: {
    quantity: number;
    sum: number;
  };
  credit: {
    quantity: number;
    sum: number;
  };
  balanceEnd: {
    quantity: number;
    sum: number;
  };
}
