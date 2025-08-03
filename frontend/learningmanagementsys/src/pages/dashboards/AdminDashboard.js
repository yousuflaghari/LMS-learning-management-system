import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const Container = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #2c3e50;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #3498db;
    margin-bottom: 15px;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <RoleBasedLayout>
      <Container>
        <Title>Admin Dashboard</Title>
        <p>Welcome, {user?.name}. You have administrator privileges.</p>

        <CardContainer>
          <Card>
            <h3>User Management</h3>
            <p>
              Create, edit, and manage user accounts and permissions across the
              system.
            </p>
          </Card>
          <Card>
            <h3>Course Management</h3>
            <p>
              Manage all courses, modules, and learning materials in the
              platform.
            </p>
          </Card>
          <Card>
            <h3>System Analytics</h3>
            <p>
              Access detailed reports and analytics on platform usage and
              performance.
            </p>
          </Card>
          <Card>
            <h3>Configuration</h3>
            <p>
              Configure system settings, integrations, and security parameters.
            </p>
          </Card>
        </CardContainer>
      </Container>
    </RoleBasedLayout>
  );
};

export default AdminDashboard;
