import React, { useState } from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const ProgressReport = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "React Basics",
      instructor: "John Doe",
      enrolledDate: "2024-09-01",
      progress: 80,
      status: "Completed",
      certificate: true,
      timeSpent: "7h 30min",
      category: "Frontend",
      modules: [
        {
          title: "Intro to React",
          completed: true,
          time: "20 mins",
          lastAccessed: "2024-07-20",
        },
        {
          title: "JSX & Components",
          completed: true,
          time: "35 mins",
          lastAccessed: "2024-07-21",
        },
        {
          title: "State & Props",
          completed: false,
          time: "0 mins",
          lastAccessed: "—",
        },
      ],
      quizzes: [
        { title: "Quiz 1", attempted: true, score: "8/10", date: "2024-07-20" },
        { title: "Quiz 2", attempted: true, score: "7/10", date: "2024-07-22" },
      ],
      assignments: [
        {
          title: "Assignment 1",
          submitted: true,
          grade: "A",
          date: "2024-07-22",
        },
        { title: "Assignment 2", submitted: false, grade: "—", date: "—" },
      ],
    },
  ];

  return (
    <RoleBasedLayout>
      <Container>
        <h1>📊 My Progress Report</h1>

        <Widgets>
          <Card>📚 Total Enrolled Courses: {courses.length}</Card>
          <Card>📝 Assignments Submitted: 1</Card>
          <Card>🧪 Quizzes Attempted: 2</Card>
          <Card>🎓 Certificates Earned: 1</Card>
          <Card>⏱️ Total Time Spent: 7h 30min</Card>
          <Card>🎯 Avg. Course Completion: 80%</Card>
        </Widgets>

        <h2>📚 Course-wise Progress</h2>
        <Table>
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Instructor</th>
              <th>Enrolled Date</th>
              <th>Progress %</th>
              <th>Status</th>
              <th>Certificate</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.instructor}</td>
                <td>{course.enrolledDate}</td>
                <td>{course.progress}%</td>
                <td>{course.status}</td>
                <td>{course.certificate ? "✅" : "❌"}</td>
                <td>
                  <button onClick={() => setSelectedCourse(course)}>
                    🔍 View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {selectedCourse && (
          <Modal>
            <h3>🎓 {selectedCourse.title}</h3>
            <p>🏷️ Category: {selectedCourse.category}</p>
            <ProgressBar>
              <div style={{ width: `${selectedCourse.progress}%` }}>
                {selectedCourse.progress}%
              </div>
            </ProgressBar>
            <p>🕒 Time Spent: {selectedCourse.timeSpent}</p>

            <h4>📘 Module-wise Progress</h4>
            <Table>
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Completed</th>
                  <th>Time Spent</th>
                  <th>Last Accessed</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourse.modules.map((mod, i) => (
                  <tr key={i}>
                    <td>{mod.title}</td>
                    <td>{mod.completed ? "✅" : "❌"}</td>
                    <td>{mod.time}</td>
                    <td>{mod.lastAccessed}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h4>🧪 Quiz Performance</h4>
            <Table>
              <thead>
                <tr>
                  <th>Quiz</th>
                  <th>Attempted</th>
                  <th>Score</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourse.quizzes.map((quiz, i) => (
                  <tr key={i}>
                    <td>{quiz.title}</td>
                    <td>{quiz.attempted ? "✅" : "❌"}</td>
                    <td>{quiz.score}</td>
                    <td>{quiz.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h4>📂 Assignment Performance</h4>
            <Table>
              <thead>
                <tr>
                  <th>Assignment</th>
                  <th>Submitted</th>
                  <th>Grade</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourse.assignments.map((a, i) => (
                  <tr key={i}>
                    <td>{a.title}</td>
                    <td>{a.submitted ? "✅" : "❌"}</td>
                    <td>{a.grade}</td>
                    <td>{a.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {selectedCourse.certificate && (
              <DownloadBtn>🎖️ Download Certificate (PDF)</DownloadBtn>
            )}

            <CloseBtn onClick={() => setSelectedCourse(null)}>Close</CloseBtn>
          </Modal>
        )}
      </Container>
    </RoleBasedLayout>
  );
};

export default ProgressReport;

const Container = styled.div`
  padding: 2rem;
`;

const Widgets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 10px;
  min-width: 200px;
  flex: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }
`;

const ProgressBar = styled.div`
  background: #e0e0e0;
  border-radius: 20px;
  overflow: hidden;
  margin: 1rem 0;
  height: 20px;

  div {
    background: #4caf50;
    height: 100%;
    color: white;
    text-align: center;
  }
`;

const Modal = styled.div`
  background: white;
  border: 2px solid #ccc;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 10px;
`;

const CloseBtn = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
`;

const DownloadBtn = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
`;
