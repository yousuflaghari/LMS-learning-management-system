import React, { useState } from "react";
import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa";
import {
  FaBook,
  FaCircle,
  FaUserGraduate,
  FaEdit,
  FaTrash,
  FaEye,
  FaUpload,
  FaChartBar,
  FaPlus,
  FaDownload,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import RoleBasedLayout from "../../components/RoleBaseLayout";

// 🔧 Sample Data
const courses = [
  {
    id: 1,
    title: "React Basics",
    status: "active",
    enrollments: 12,
    createdOn: "2025-06-15",
  },
  {
    id: 2,
    title: "JS Advanced",
    status: "draft",
    enrollments: 0,
    createdOn: "2025-07-01",
  },
  {
    id: 3,
    title: "HTML & CSS Mastery",
    status: "active",
    enrollments: 20,
    createdOn: "2025-05-20",
  },
  {
    id: 4,
    title: "Python for Beginners",
    status: "active",
    enrollments: 15,
    createdOn: "2025-06-05",
  },
  {
    id: 5,
    title: "Django REST APIs",
    status: "draft",
    enrollments: 0,
    createdOn: "2025-07-10",
  },
  {
    id: 6,
    title: "UI/UX Design Principles",
    status: "active",
    enrollments: 9,
    createdOn: "2025-05-28",
  },
  {
    id: 7,
    title: "TypeScript Essentials",
    status: "active",
    enrollments: 6,
    createdOn: "2025-06-22",
  },
  {
    id: 8,
    title: "Node.js Backend Dev",
    status: "draft",
    enrollments: 0,
    createdOn: "2025-07-15",
  },
  {
    id: 9,
    title: "Data Structures in JS",
    status: "active",
    enrollments: 13,
    createdOn: "2025-06-10",
  },
  {
    id: 10,
    title: "Git & GitHub Crash Course",
    status: "active",
    enrollments: 8,
    createdOn: "2025-06-18",
  },
];
// ✅ Styled Components
const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const SummaryGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.75rem;
  background-color: ${({ status }) =>
    status === "active"
      ? "#28a745"
      : status === "draft"
      ? "#ffc107"
      : "#dc3545"};
  color: white;
  text-transform: capitalize;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  input,
  select {
    margin-left: 0.5rem;
    padding: 0.4rem;
  }
`;

const Button = styled.button`
  background-color: ${({ bg }) => bg || "#007bff"};
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    opacity: 0.9;
  }
`;

export default function InstructorMyCourses() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [openActionId, setOpenActionId] = useState(null);
  const totalCourses = courses.length;
  const activeCourses = courses.filter((c) => c.status === "active").length;
  const draftCourses = courses.filter((c) => c.status === "draft").length;
  const totalEnrollments = courses.reduce((acc, c) => acc + c.enrollments, 0);

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const toggleActions = (id) => {
    setOpenActionId((prevId) => (prevId === id ? null : id));
  };
  return (
    <RoleBasedLayout>
      <Container>
        <Title>🎓 My Courses</Title>

        {/* 📊 Summary Cards */}
        <SummaryGrid>
          <Card>
            <FaBook /> Total Courses: <strong>{totalCourses}</strong>
          </Card>
          <Card>
            <FaCircle color="green" /> Active Courses:{" "}
            <strong>{activeCourses}</strong>
          </Card>
          <Card>
            <FaCircle color="red" /> Draft Courses:{" "}
            <strong>{draftCourses}</strong>
          </Card>
          <Card>
            <FaUserGraduate /> Total Enrollments:{" "}
            <strong>{totalEnrollments}</strong>
          </Card>
        </SummaryGrid>

        {/* 🔍 Search & Filters */}
        <TopBar>
          <div>
            <FaSearch />
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaFilter />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button bg="#28a745">
              <FaPlus /> Create New Course
            </Button>
            <Button bg="#6c757d">
              <FaDownload /> Export CSV
            </Button>
          </div>
        </TopBar>

        {/* 📋 Courses Table */}
        <Table>
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Status</th>
              <th>Enrollments</th>
              <th>Created On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <StatusBadge status={course.status}>
                    {course.status}
                  </StatusBadge>
                </td>
                <td>{course.enrollments}</td>
                <td>{course.createdOn}</td>
                <td>
                  <Actions>
                    <button
                      title="More"
                      onClick={() => toggleActions(course.id)}
                    >
                      <FaEllipsisV />
                    </button>

                    {openActionId === course.id && (
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          marginTop: "0.5rem",
                        }}
                      >
                        <button title="Edit">
                          <FaEdit />
                        </button>
                        {course.status === "draft" && (
                          <button title="Publish">
                            <FaUpload />
                          </button>
                        )}
                        <button title="Delete">
                          <FaTrash />
                        </button>
                        <button title="Preview">
                          <FaEye />
                        </button>
                        <button title="Stats">
                          <FaChartBar />
                        </button>
                      </div>
                    )}
                  </Actions>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </RoleBasedLayout>
  );
}
