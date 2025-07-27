import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import AdminLayout from "@/components/layout/AdminLayout";
import { useState, useEffect } from "react";

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const UserManagementPage = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users from API
    const fetchUsers = async () => {
      try {
        // Simulated API call
        setTimeout(() => {
          setUsers([
            {
              id: "1",
              name: "John Doe",
              email: "john@example.com",
              role: "student",
              joined: "2023-01-15",
            },
            {
              id: "2",
              name: "Jane Smith",
              email: "jane@example.com",
              role: "instructor",
              joined: "2022-11-03",
            },
            {
              id: "3",
              name: "Bob Johnson",
              email: "bob@example.com",
              role: "admin",
              joined: "2022-09-22",
            },
            {
              id: "4",
              name: "Alice Williams",
              email: "alice@example.com",
              role: "student",
              joined: "2023-02-28",
            },
            {
              id: "5",
              name: "Mike Brown",
              email: "mike@example.com",
              role: "student",
              joined: "2023-03-10",
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (!user || user.role !== "admin") {
    return <div>Unauthorized</div>;
  }

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Joined", accessor: "joined" },
    {
      header: "Actions",
      cell: (row: any) => (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Button size="sm" variant="outline">
            Edit
          </Button>
          <Button size="sm" variant="danger">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div style={{ padding: "2rem" }}>
        <PageHeader>
          <Title>User Management</Title>
          <Button>Add New User</Button>
        </PageHeader>

        {loading ? (
          <div>Loading users...</div>
        ) : (
          <Table columns={columns} data={users} />
        )}
      </div>
    </AdminLayout>
  );
};

export default UserManagementPage;
