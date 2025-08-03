import React, { useState } from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";

// Sample Fake Certificates Data
const certificates = [
  {
    id: 1,
    courseTitle: "HTML & CSS Fundamentals",
    dateIssued: "2024-07-15",
    status: "Completed",
    score: "95%",
    category: "Frontend",
  },
  {
    id: 2,
    courseTitle: "JavaScript Basics",
    dateIssued: "2024-07-22",
    status: "Completed",
    score: "89%",
    category: "Frontend",
  },
  {
    id: 3,
    courseTitle: "Node.js Essentials",
    dateIssued: "2024-07-28",
    status: "In Progress",
    score: null,
    category: "Backend",
  },
];

const StudentCertificates = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  // Filtered & Sorted Certificates
  const filtered = certificates
    .filter((c) => c.courseTitle.toLowerCase().includes(search.toLowerCase()))
    .filter((c) => (statusFilter === "All" ? true : c.status === statusFilter))
    .sort((a, b) => {
      const dateA = new Date(a.dateIssued);
      const dateB = new Date(b.dateIssued);
      return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <RoleBasedLayout>
      <Wrapper>
        <h1>🎓 My Certificates</h1>

        {/* Summary Section */}
        <Summary>
          <p>Total Certificates Earned: {certificates.length}</p>
          <p>
            Courses Completed:{" "}
            {certificates.filter((c) => c.status === "Completed").length}
          </p>
          <p>Total Learning Hours: 40 hrs</p>
        </Summary>

        {/* Filters */}
        <Filters>
          <input
            type="text"
            placeholder="Search by course title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            onChange={(e) => setStatusFilter(e.target.value)}
            value={statusFilter}
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </Filters>

        {/* Certificates Display */}
        {filtered.length === 0 ? (
          <NoData>
            😢 You haven’t earned any certificates yet.
            <br />
            📚 Keep learning and earn your first certificate soon!
          </NoData>
        ) : (
          <Grid>
            {filtered.map((cert) => (
              <Card key={cert.id}>
                <h3>{cert.courseTitle}</h3>
                <p>📅 {cert.dateIssued}</p>
                <p>📊 {cert.status}</p>
                <p>💯 {cert.score || "N/A"}</p>
                <Buttons>
                  <button>🔗 View</button>
                  <button>⬇️ Download</button>
                </Buttons>
              </Card>
            ))}
          </Grid>
        )}
      </Wrapper>
    </RoleBasedLayout>
  );
};

export default StudentCertificates;

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
`;

const Summary = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  font-weight: bold;
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;

  input,
  select {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: #f8f8f8;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.3rem 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.7rem;

  button {
    flex: 1;
    background: #4caf50;
    color: white;
    padding: 0.4rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: #388e3c;
    }
  }
`;

const NoData = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  padding: 2rem 0;
`;
