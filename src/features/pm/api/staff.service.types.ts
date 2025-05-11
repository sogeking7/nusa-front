import { Response } from "@/types/api";

export interface Staff {
  staff_id: string;
  firstname: string;
  lastname: string;
  department: string;
  institution: string;
  gender: string;
}

export interface StaffInfo {
  full_name: string;
  position: string;
  institution: string;
  department: string;
  salary: number;
  birth_date: string;
  gender: string;
  nationality: string;
  id_number: string;
  worker_type: string;
  hire_date: string;
  education: string;
  birthplace: string;
  phone: string;
  mail: string;
  schedule_type: string;
  worked_out: string;
}

export interface StaffMovement {
  position: string;
  institution: string;
  date: string;
  department: string;
  worker_type: string;
  event: string;
  document: string;
}

export interface StaffSalary {
  position: string;
  department: string;
  salary_type: string;
  positions_amount: number;
  salary: number;
}

export type GetStaff = (params?: {
  skip?: number;
  limit?: number;
}) => Promise<Response<GetStaffResponse>>;

export type GetStaffResponse = {
  data: Staff[];
  count: number;
};

export type GetStaffInfo = (params: {
  staff_id: string;
}) => Promise<Response<GetStaffInfoResponse>>;

export type GetStaffInfoResponse = StaffInfo;

export type GetStaffMovements = (params: {
  staff_id: string;
}) => Promise<Response<GetStaffMovementsResponse>>;

export type GetStaffMovementsResponse = StaffMovement[];

export type GetStaffSalaries = () => Promise<Response<GetStaffSalariesResponse>>;

export type GetStaffSalariesResponse = StaffSalary[];

// Mock data for testing
export const MOCK_STAFF_DATA: Staff[] = [
  {
    staff_id: "1",
    firstname: "Динара",
    lastname: "Жарасова",
    department: "Отдел разработки",
    institution: "Учреждение А",
    gender: "female"
  },
  {
    staff_id: "2",
    firstname: "Алишер",
    lastname: "Ибраев",
    department: "Отдел маркетинга",
    institution: "Учреждение Б",
    gender: "male"
  },
  {
    staff_id: "3",
    firstname: "Айгуль",
    lastname: "Нурланова",
    department: "Отдел продаж",
    institution: "Учреждение А",
    gender: "female"
  },
  {
    staff_id: "4",
    firstname: "Марат",
    lastname: "Садыков",
    department: "Отдел разработки",
    institution: "Учреждение Б",
    gender: "male"
  }
];

// Mock data for staff info
export const MOCK_STAFF_INFO: Record<string, StaffInfo> = {
  "1": {
    full_name: "Жарасова Динара Алиевна",
    position: "Ведущий разработчик",
    institution: "Учреждение А",
    department: "Отдел разработки",
    salary: 450000,
    birth_date: "1990-08-15",
    gender: "Женский",
    nationality: "Казашка",
    id_number: "900815300455",
    worker_type: "Постоянный сотрудник",
    hire_date: "2018-03-01",
    education: "Высшее",
    birthplace: "г. Алматы",
    phone: "+7 701 234 56 78",
    mail: "zharasova@example.com",
    schedule_type: "Пятидневная рабочая неделя",
    worked_out: "19/20"
  },
  "2": {
    full_name: "Ибраев Алишер Маратович",
    position: "Маркетолог",
    institution: "Учреждение Б",
    department: "Отдел маркетинга",
    salary: 380000,
    birth_date: "1988-12-20",
    gender: "Мужской",
    nationality: "Казах",
    id_number: "881220300455",
    worker_type: "Постоянный сотрудник",
    hire_date: "2019-06-15",
    education: "Высшее",
    birthplace: "г. Астана",
    phone: "+7 702 345 67 89",
    mail: "ibraev@example.com",
    schedule_type: "Пятидневная рабочая неделя",
    worked_out: "18/20"
  },
  "3": {
    full_name: "Нурланова Айгуль Сериковна",
    position: "Менеджер по продажам",
    institution: "Учреждение А",
    department: "Отдел продаж",
    salary: 420000,
    birth_date: "1992-04-10",
    gender: "Женский",
    nationality: "Казашка",
    id_number: "920410300455",
    worker_type: "Постоянный сотрудник",
    hire_date: "2020-01-10",
    education: "Высшее",
    birthplace: "г. Караганда",
    phone: "+7 705 456 78 90",
    mail: "nurlanova@example.com",
    schedule_type: "Пятидневная рабочая неделя",
    worked_out: "20/20"
  },
  "4": {
    full_name: "Садыков Марат Аскарович",
    position: "Старший разработчик",
    institution: "Учреждение Б",
    department: "Отдел разработки",
    salary: 480000,
    birth_date: "1987-07-25",
    gender: "Мужской",
    nationality: "Казах",
    id_number: "870725300455",
    worker_type: "Постоянный сотрудник",
    hire_date: "2017-09-01",
    education: "Высшее",
    birthplace: "г. Шымкент",
    phone: "+7 707 567 89 01",
    mail: "sadykov@example.com",
    schedule_type: "Пятидневная рабочая неделя",
    worked_out: "17/20"
  }
};

// Mock data for staff movements
export const MOCK_STAFF_MOVEMENTS: Record<string, StaffMovement[]> = {
  "1": [
    {
      position: "Младший разработчик",
      institution: "Учреждение А",
      date: "2018-03-01",
      department: "Отдел разработки",
      worker_type: "Постоянный сотрудник",
      event: "Принят на работу",
      document: "Приказ №123 от 01.03.2018"
    },
    {
      position: "Разработчик",
      institution: "Учреждение А",
      date: "2020-05-15",
      department: "Отдел разработки",
      worker_type: "Постоянный сотрудник",
      event: "Повышение",
      document: "Приказ №456 от 15.05.2020"
    },
    {
      position: "Ведущий разработчик",
      institution: "Учреждение А",
      date: "2022-11-10",
      department: "Отдел разработки",
      worker_type: "Постоянный сотрудник",
      event: "Повышение",
      document: "Приказ №789 от 10.11.2022"
    }
  ],
  "2": [
    {
      position: "Младший маркетолог",
      institution: "Учреждение Б",
      date: "2019-06-15",
      department: "Отдел маркетинга",
      worker_type: "Постоянный сотрудник",
      event: "Принят на работу",
      document: "Приказ №234 от 15.06.2019"
    },
    {
      position: "Маркетолог",
      institution: "Учреждение Б",
      date: "2021-09-01",
      department: "Отдел маркетинга",
      worker_type: "Постоянный сотрудник",
      event: "Повышение",
      document: "Приказ №567 от 01.09.2021"
    }
  ],
  "3": [
    {
      position: "Менеджер по продажам",
      institution: "Учреждение А",
      date: "2020-01-10",
      department: "Отдел продаж",
      worker_type: "Постоянный сотрудник",
      event: "Принят на работу",
      document: "Приказ №345 от 10.01.2020"
    }
  ],
  "4": [
    {
      position: "Инженер-программист",
      institution: "РГП Стрела",
      date: "2017-09-01",
      department: "Отдел разработки",
      worker_type: "Постоянный сотрудник",
      event: "Принят на работу",
      document: "Приказ №678 от 01.09.2017"
    },
    {
      position: "Старший инженер",
      institution: "РГП Балхаш",
      date: "2021-02-01",
      department: "Отдел разработки",
      worker_type: "Постоянный сотрудник",
      event: "Перевод в другое учреждение",
      document: "Приказ №901 от 01.02.2021"
    },
    {
      position: "Старший разработчик",
      institution: "Учреждение Б",
      date: "2023-06-15",
      department: "Отдел разработки",
      worker_type: "Постоянный сотрудник",
      event: "Перевод в другое учреждение",
      document: "Приказ №234 от 15.06.2023"
    }
  ]
};

// Mock data for staff salaries
export const MOCK_STAFF_SALARIES: StaffSalary[] = [
  {
    position: "Разработчик",
    department: "IT",
    salary_type: "Основное начисление",
    positions_amount: 3,
    salary: 150000,
  },
  {
    position: "Тестировщик",
    department: "QA",
    salary_type: "Основное начисление",
    positions_amount: 2,
    salary: 120000,
  },
  {
    position: "Менеджер проекта",
    department: "Менеджмент",
    salary_type: "Основное начисление",
    positions_amount: 1,
    salary: 230000,
  },
  {
    position: "Дизайнер",
    department: "Дизайн",
    salary_type: "Основное начисление",
    positions_amount: 2,
    salary: 140000,
  },
  {
    position: "Системный администратор",
    department: "IT",
    salary_type: "Основное начисление",
    positions_amount: 1,
    salary: 180000,
  },
  {
    position: "Старший разработчик",
    department: "IT",
    salary_type: "Основное начисление",
    positions_amount: 2,
    salary: 220000,
  },
  {
    position: "HR менеджер",
    department: "HR",
    salary_type: "Основное начисление",
    positions_amount: 1,
    salary: 170000,
  }
];