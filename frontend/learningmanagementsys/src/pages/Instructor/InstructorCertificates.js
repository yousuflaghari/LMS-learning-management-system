// InstructorCertificates.js
import React, { useState } from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const mockCertificateSummary = {
  total: 120,
  thisMonth: 25,
  pending: 5,
  courseWithCertificates: "10 out of 12",
};

const mockRequests = [
  {
    id: 1,
    name: "Ahmed Ali",
    course: "React Basics",
    date: "2025-07-15",
    status: "Pending",
  },
  {
    id: 2,
    name: "Sana Khan",
    course: "JavaScript Advanced",
    date: "2025-07-14",
    status: "Approved",
  },
];

const mockCourses = [
  {
    title: "HTML Basics",
    template: "Classic",
    enabled: true,
  },
  {
    title: "Python for DataSci",
    template: "Modern",
    enabled: false,
  },
];

const CertificateManagement = () => {
  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleApprove = (id) => {
    // backend logic here
    alert(`Approved request ${id}`);
  };

  const handleReject = (id) => {
    // backend logic here
    alert(`Rejected request ${id}`);
  };

  const filteredRequests = mockRequests.filter((req) => {
    const matchesStatus = filterStatus ? req.status === filterStatus : true;
    const matchesSearch = req.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <RoleBasedLayout>
      <Container>
        <Title>🏆 Certificates Management</Title>

        <CardContainer>
          <Card>
            🏅 Total Certificates Issued: {mockCertificateSummary.total}
          </Card>
          <Card>📆 This Month: {mockCertificateSummary.thisMonth}</Card>
          <Card>⏳ Pending Requests: {mockCertificateSummary.pending}</Card>
          <Card>
            🎓 Courses with Certificates:{" "}
            {mockCertificateSummary.courseWithCertificates}
          </Card>
        </CardContainer>

        <FilterSection>
          <label>Status:</label>
          <select onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">All</option>
            <option value="Approved">✅ Approved</option>
            <option value="Pending">🟡 Pending</option>
            <option value="Rejected">❌ Rejected</option>
          </select>

          <input
            type="text"
            placeholder="Search by student name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </FilterSection>

        <h3>📋 Certificate Requests</h3>
        <Table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((req) => (
              <tr key={req.id}>
                <td>{req.name}</td>
                <td>{req.course}</td>
                <td>{req.date}</td>
                <td>
                  {req.status === "Pending" && "🟡"}
                  {req.status === "Approved" && "✅"}
                  {req.status === "Rejected" && "❌"} {req.status}
                </td>
                <td>
                  {req.status === "Pending" ? (
                    <>
                      <button onClick={() => handleApprove(req.id)}>
                        Approve
                      </button>
                      <button onClick={() => handleReject(req.id)}>
                        Reject
                      </button>
                    </>
                  ) : (
                    <button>View</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>⚙️ Course-wise Certificate Settings</h3>
        <Table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Template</th>
              <th>Enabled</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.title}</td>
                <td>{course.template}</td>
                <td>{course.enabled ? "✅ Yes" : "❌ No"}</td>
                <td>
                  <button>Edit Template</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>⚡ Quick Actions</h3>
        <ActionButtons>
          <button>➕ Issue Certificate</button>
          <button>📥 Export Report</button>
          <button>🎨 Customize Template</button>
        </ActionButtons>
      </Container>
    </RoleBasedLayout>
  );
};

export default CertificateManagement;

const Container = styled.div`
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background: #f0f8ff;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px #ccc;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;

  input,
  select {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #aaa;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
