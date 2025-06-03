import { MOCK_STAFF_DATA } from "@/features/pm/api/staff.service.types";
import StaffProfileClient from "./StaffProfileClient";

// Generate static paths for all staff members from mock data
export async function generateStaticParams() {
  return MOCK_STAFF_DATA.map((staff) => ({
    id: staff.staff_id,
  }));
}

export default function StaffProfilePage({ params }: { params: { id: string } }) {
  return <StaffProfileClient staffId={params.id} />;
}
