import React, { useState } from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const quizzesData = [
  {
    id: 1,
    title: "React Basics Quiz",
    course: "React Basics",
    totalQuestions: 10,
    createdOn: "2025-07-15",
    attempts: 120,
    status: "active",
  },
  {
    id: 2,
    title: "JavaScript Quiz",
    course: "JS Advanced",
    totalQuestions: 15,
    createdOn: "2025-07-20",
    attempts: 95,
    status: "draft",
  },
];

const statusColors = {
  active: "green",
  draft: "orange",
  archived: "red",
};

const InstructorQuizzes = () => {
  const [quizzes, setQuizzes] = useState(quizzesData);
  const [search, setSearch] = useState("");

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <RoleBasedLayout>
      <Wrapper>
        <Header>📝 Manage Quizzes</Header>

        <Controls>
          <input
            type="text"
            placeholder="🔎 Search by Quiz Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>+ Create New Quiz</button>
          <button>📥 Export Results (CSV)</button>
        </Controls>

        <Table>
          <thead>
            <tr>
              <th>Quiz Title</th>
              <th>Course</th>
              <th>Total Questions</th>
              <th>Created On</th>
              <th>Attempts</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuizzes.map((quiz) => (
              <tr key={quiz.id}>
                <td>{quiz.title}</td>
                <td>{quiz.course}</td>
                <td>{quiz.totalQuestions}</td>
                <td>{quiz.createdOn}</td>
                <td>{quiz.attempts}</td>
                <td>
                  <Badge color={statusColors[quiz.status]}>
                    {quiz.status.charAt(0).toUpperCase() + quiz.status.slice(1)}
                  </Badge>
                </td>
                <td>
                  <ActionButtons>
                    <span title="Edit">✏️</span>
                    <span title="Stats">📊</span>
                    <span title="Delete">🗑️</span>
                    {quiz.status === "draft" && <span title="Publish">📤</span>}
                  </ActionButtons>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </RoleBasedLayout>
  );
};

export default InstructorQuizzes;

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`;

const Header = styled.h2`
  margin-bottom: 1.5rem;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  input {
    padding: 0.5rem;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background: #0070f3;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.75rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Badge = styled.span`
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  color: white;
  background-color: ${(props) => props.color || "gray"};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    cursor: pointer;
  }
`;
