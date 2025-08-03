// src/components/admin/AdminLogs.js
import React from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const AdminLogs = () => {
  return (
    <RoleBasedLayout>
      <Container>
        <Section>
          <Title>🔍 User Activity Logs</Title>
          <Table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Performed By</th>
                <th>Role</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>User login</td>
                <td>yousuflaghari786@gmail.com</td>
                <td>Instructor</td>
                <td>Aug 02, 2025 - 09:34 AM</td>
              </tr>
              <tr>
                <td>Created a course</td>
                <td>Instructor User</td>
                <td>Instructor</td>
                <td>Aug 02, 2025 - 09:45 AM</td>
              </tr>
              <tr>
                <td>Deleted a quiz</td>
                <td>Admin User</td>
                <td>Admin</td>
                <td>Aug 02, 2025 - 10:15 AM</td>
              </tr>
            </tbody>
          </Table>
        </Section>

        <Section>
          <Title>🛠️ System Events</Title>
          <Table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Backup created</td>
                <td>Success</td>
                <td>Aug 01, 2025 - 11:59 PM</td>
              </tr>
              <tr>
                <td>Database Migration</td>
                <td>Failed</td>
                <td>Jul 31, 2025 - 10:02 AM</td>
              </tr>
              <tr>
                <td>Server Restart</td>
                <td>Success</td>
                <td>Jul 30, 2025 - 02:14 AM</td>
              </tr>
            </tbody>
          </Table>
        </Section>

        <Section>
          <Title>📦 Course & Content Changes</Title>
          <Table>
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Action</th>
                <th>By</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React Basics</td>
                <td>Edited</td>
                <td>Instructor User</td>
                <td>Aug 02, 2025 - 08:20 AM</td>
              </tr>
              <tr>
                <td>Python Advanced</td>
                <td>Deleted</td>
                <td>Admin User</td>
                <td>Jul 29, 2025 - 04:30 PM</td>
              </tr>
            </tbody>
          </Table>
        </Section>

        <Section>
          <Title>🧪 Quiz & Assignment Logs</Title>
          <Table>
            <thead>
              <tr>
                <th>Quiz Title</th>
                <th>Action</th>
                <th>Performed By</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTML Basics Quiz</td>
                <td>Created</td>
                <td>Instructor User</td>
                <td>Aug 01, 2025 - 01:22 PM</td>
              </tr>
              <tr>
                <td>CSS Flexbox Quiz</td>
                <td>Attempt Deleted</td>
                <td>Admin</td>
                <td>Jul 31, 2025 - 12:12 PM</td>
              </tr>
            </tbody>
          </Table>
        </Section>

        <Section>
          <Title>🔔 Login/Logout Logs</Title>
          <Table>
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>student@lms.com</td>
                <td>Login</td>
                <td>08:50 AM</td>
              </tr>
              <tr>
                <td>admin@lms.com</td>
                <td>Logout</td>
                <td>10:00 AM</td>
              </tr>
            </tbody>
          </Table>
        </Section>

        <DownloadButtons>
          <button>Download CSV</button>
          <button>Download PDF</button>
        </DownloadButtons>
      </Container>
    </RoleBasedLayout>
  );
};

export default AdminLogs;

const Container = styled.div`
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const DownloadButtons = styled.div`
  margin-top: 1rem;

  button {
    background-color: #2d89ef;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #1b5fbd;
    }
  }
`;
