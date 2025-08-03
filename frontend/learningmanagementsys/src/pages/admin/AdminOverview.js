// components/admin/AdminOverview.js

import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const data = [
  { name: "Jan", users: 400, enrollments: 240 },
  { name: "Feb", users: 300, enrollments: 139 },
  { name: "Mar", users: 200, enrollments: 980 },
  { name: "Apr", users: 278, enrollments: 390 },
  { name: "May", users: 189, enrollments: 480 },
];

const AdminOverview = () => {
  return (
    <RoleBasedLayout>
      <Container>
        <Section>
          <Title>👥 Total Users Summary</Title>
          <CardRow>
            <StatCard>
              <h3>Total Students</h3>
              <p>1,250</p>
            </StatCard>
            <StatCard>
              <h3>Total Instructors</h3>
              <p>320</p>
            </StatCard>
            <StatCard>
              <h3>Total Admins</h3>
              <p>5</p>
            </StatCard>
          </CardRow>
        </Section>

        <Section>
          <Title>📚 Courses Overview</Title>
          <CardRow>
            <StatCard>
              <h3>Total Courses</h3>
              <p>140</p>
            </StatCard>
            <StatCard>
              <h3>Active Courses</h3>
              <p>102</p>
            </StatCard>
            <StatCard>
              <h3>Pending Approval</h3>
              <p>18</p>
            </StatCard>
          </CardRow>
        </Section>

        <Section>
          <Title>🧪 Quizzes Summary</Title>
          <CardRow>
            <StatCard>
              <h3>Total Quizzes</h3>
              <p>315</p>
            </StatCard>
            <StatCard>
              <h3>Attempted Quizzes</h3>
              <p>1,500</p>
            </StatCard>
            <StatCard>
              <h3>Avg. Score</h3>
              <p>78%</p>
            </StatCard>
          </CardRow>
        </Section>

        <Section>
          <Title>💰 Earnings Snapshot</Title>
          <CardRow>
            <StatCard>
              <h3>Total Earnings</h3>
              <p>PKR 1,200,000</p>
            </StatCard>
            <StatCard>
              <h3>This Month</h3>
              <p>PKR 200,000</p>
            </StatCard>
            <StatCard>
              <h3>Top Paid Course</h3>
              <p>Advanced React</p>
            </StatCard>
          </CardRow>
        </Section>

        <Section>
          <Title>📈 Activity Graphs</Title>
          <GraphContainer>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
                <Line type="monotone" dataKey="enrollments" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </GraphContainer>
        </Section>

        <Section>
          <Title>🔔 Recent Notifications</Title>
          <NotificationList>
            <li>🧑 New Student Signup: Ali Raza</li>
            <li>📚 New Course Request: React Native</li>
            <li>🧑‍🏫 Instructor Request: Zara Khan</li>
          </NotificationList>
        </Section>

        <Section>
          <Title>🗂️ Quick Access</Title>
          <CardRow>
            <QuickLink>👥 Manage Users</QuickLink>
            <QuickLink>📄 View Reports</QuickLink>
            <QuickLink>⚙️ Settings</QuickLink>
            <QuickLink>🧾 View Logs</QuickLink>
          </CardRow>
        </Section>
      </Container>
    </RoleBasedLayout>
  );
};

export default AdminOverview;

const Container = styled.div`
  padding: 2rem;
  background: #f8f9fa;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #343a40;
  margin-bottom: 1rem;
`;

const CardRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  flex: 1;
  min-width: 250px;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #6c757d;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #212529;
  }
`;

const GraphContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const NotificationList = styled.ul`
  list-style: none;
  padding-left: 1rem;

  li {
    padding: 0.5rem 0;
    font-size: 1rem;
    color: #495057;
  }
`;

const QuickLink = styled.div`
  background: #007bff;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  flex: 1;
  text-align: center;
  min-width: 180px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;
