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