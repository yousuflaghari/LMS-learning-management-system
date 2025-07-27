import styled from "styled-components";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
const DashboardContainer = styled.div`
  padding: 2rem;
`;
const AdminDashboardPage = () => {
  const { user } = useAuth();
  if (!user || user.role !== "admin") {
    return <div>Unauthorized</div>;
  }
  return (
    <Layout>
      <DashboardContainer>
        <AdminDashboard />
      </DashboardContainer>
    </Layout>
  );
};
export default AdminDashboardPage;
