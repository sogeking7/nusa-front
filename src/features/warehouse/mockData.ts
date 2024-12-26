import { FinancialRecord } from "./types";

export const mockData: FinancialRecord[] = [
  {
    id: "1",
    name: "Ахметова Г.Е.",
    balanceStart: {
      quantity: 200,
      sum: 737000,
    },
    debit: {
      quantity: 50,
      sum: 150000,
    },
    credit: {
      quantity: 30,
      sum: 100000,
    },
    balanceEnd: {
      quantity: 220,
      sum: 787000,
    },
  },
  {
    id: "2",
    name: "Административно -управленческий персонал",
    isSubItem: true,
    balanceStart: {
      quantity: 150,
      sum: 500000,
    },
    debit: {
      quantity: 30,
      sum: 100000,
    },
    credit: {
      quantity: 20,
      sum: 80000,
    },
    balanceEnd: {
      quantity: 160,
      sum: 520000,
    },
  },
  {
    id: "3",
    name: "Административно -управленческий персонал",
    isSubItem: true,
    balanceStart: {
      quantity: 50,
      sum: 237000,
    },
    debit: {
      quantity: 20,
      sum: 50000,
    },
    credit: {
      quantity: 10,
      sum: 20000,
    },
    balanceEnd: {
      quantity: 60,
      sum: 267000,
    },
  },
  {
    id: "4",
    name: "Ахметова Г.Е.",
    balanceStart: {
      quantity: 180,
      sum: 650000,
    },
    debit: {
      quantity: 40,
      sum: 130000,
    },
    credit: {
      quantity: 25,
      sum: 90000,
    },
    balanceEnd: {
      quantity: 195,
      sum: 690000,
    },
  },
  {
    id: "5",
    name: "Административно -управленческий персонал",
    isSubItem: true,
    balanceStart: {
      quantity: 180,
      sum: 650000,
    },
    debit: {
      quantity: 40,
      sum: 130000,
    },
    credit: {
      quantity: 25,
      sum: 90000,
    },
    balanceEnd: {
      quantity: 195,
      sum: 690000,
    },
  },
];
