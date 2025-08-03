import React, { useState } from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const initialAdmins = [
  {
    id: 1,
    name: "John Admin",
    email: "john@lms.com",
    role: "Super Admin",
    createdOn: "2025-07-10",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Moderator",
    email: "sarah@lms.com",
    role: "Moderator",
    createdOn: "2025-07-12",
    status: "Inactive",
  },
];

const roles = ["Super Admin", "Moderator", "Content Manager"];

const AdminUsers = () => {
  const [admins, setAdmins] = useState(initialAdmins);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  const handleStatusToggle = (id) => {
    setAdmins((prev) =>
      prev.map((admin) =>
        admin.id === id
          ? {
              ...admin,
              status: admin.status === "Active" ? "Inactive" : "Active",
            }
          : admin
      )
    );
  };

  const handleDelete = (id) => {
    setAdmins((prev) => prev.filter((admin) => admin.id !== id));
  };

  const handleAddAdmin = () => {
    const newId = admins.length + 1;
    setAdmins([
      ...admins,
      {
        id: newId,
        createdOn: new Date().toISOString().split("T")[0],
        ...newAdmin,
      },
    ]);
    setShowForm(false);
    setNewAdmin({ name: "", email: "", role: "", status: "Active" });
  };

  const filteredAdmins = admins
    .filter((admin) => {
      return (
        admin.name.toLowerCase().includes(search.toLowerCase()) ||
        admin.email.toLowerCase().includes(search.toLowerCase())
      );
    })
    .filter((admin) => {
      return (
        (!filterRole || admin.role === filterRole) &&
        (!filterStatus || admin.status === filterStatus)
      );
    });

  return (
    <RoleBasedLayout>
      <Wrapper>
        <h2>🛡️ Manage Admin Users</h2>

        <Controls>
          <input
            type="text"
            placeholder="🔍 Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            onChange={(e) => setFilterRole(e.target.value)}
            value={filterRole}
          >
            <option value="">Filter by Role</option>
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>

          <select
            onChange={(e) => setFilterStatus(e.target.value)}
            value={filterStatus}
          >
            <option value="">Filter by Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button onClick={() => setShowForm(!showForm)}>
            ➕ Add New Admin
          </button>
        </Controls>

        {showForm && (
          <Form>
            <input
              type="text"
              placeholder="Admin Name"
              value={newAdmin.name}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={newAdmin.email}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, email: e.target.value })
              }
            />
            <select
              value={newAdmin.role}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
            <select
              value={newAdmin.status}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button onClick={handleAddAdmin}>✅ Submit</button>
          </Form>
        )}

        <Table>
          <thead>
            <tr>
              <th>Admin Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created On</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdmins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.role}</td>
                <td>{admin.createdOn}</td>
                <td>
                  {admin.status === "Active" ? "✅ Active" : "🚫 Inactive"}
                </td>
                <td>
                  <span>✏️ Edit</span> /{" "}
                  <span
                    onClick={() => handleStatusToggle(admin.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {admin.status === "Active"
                      ? "❌ Deactivate"
                      : "✅ Activate"}
                  </span>{" "}
                  /{" "}
                  <span
                    onClick={() => handleDelete(admin.id)}
                    style={{ cursor: "pointer" }}
                  >
                    🗑️ Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </RoleBasedLayout>
  );
};

export default AdminUsers;

const Wrapper = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  input,
  select {
    padding: 0.5rem;
  }

  button {
    background: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
`;

const Form = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  input,
  select {
    padding: 0.5rem;
  }

  button {
    background: green;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.75rem;
    border: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  td span {
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;
