import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const earningsData = [
  { month: "Jan", earnings: 8000 },
  { month: "Feb", earnings: 12000 },
  { month: "Mar", earnings: 10000 },
  { month: "Apr", earnings: 15000 },
  { month: "May", earnings: 18000 },
  { month: "Jun", earnings: 22000 },
  { month: "Jul", earnings: 25000 },
];

const courseEarnings = [
  { course: "React Basics", enrollments: 50, price: 1000, earnings: 50000 },
  { course: "Django Advanced", enrollments: 20, price: 2000, earnings: 40000 },
  { course: "JavaScript Pro", enrollments: 30, price: 1000, earnings: 30000 },
];

const payoutHistory = [
  { date: "2025-07-01", amount: 20000, method: "JazzCash", status: "✅ Paid" },
  { date: "2025-06-01", amount: 15000, method: "Bank", status: "✅ Paid" },
];

const Earnings = () => {
  return (
    <RoleBasedLayout>
      <Container>
        <Title>💰 Instructor Earnings</Title>

        <CardRow>
          <Card>
            <strong>💰 Total Earnings:</strong> PKR 120,000
          </Card>
          <Card>
            <strong>📅 This Month:</strong> PKR 25,000
          </Card>
          <Card>
            <strong>🧾 Pending Payouts:</strong> PKR 5,000
          </Card>
          <Card>
            <strong>🏦 Last Payout:</strong> PKR 20,000 (on 2025-07-01)
          </Card>
        </CardRow>

        <SectionTitle>📊 Monthly Earnings</SectionTitle>
        <ChartContainer>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="earnings" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <SectionTitle>📘 Course-wise Earnings</SectionTitle>
        <StyledTable>
          <thead>
            <tr>
              <th>Course</th>
              <th>Enrollments</th>
              <th>Price</th>
              <th>Earnings</th>
            </tr>
          </thead>
          <tbody>
            {courseEarnings.map((c, i) => (
              <tr key={i}>
                <td>{c.course}</td>
                <td>{c.enrollments}</td>
                <td>PKR {c.price}</td>
                <td>PKR {c.earnings}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>

        <SectionTitle>🏦 Payout History</SectionTitle>
        <StyledTable>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payoutHistory.map((p, i) => (
              <tr key={i}>
                <td>{p.date}</td>
                <td>PKR {p.amount}</td>
                <td>{p.method}</td>
                <td>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>

        <SectionTitle>🎛️ Filter & Sorting</SectionTitle>
        <FilterRow>
          <select>
            <option>Filter by Course</option>
            <option>React Basics</option>
            <option>Django Advanced</option>
          </select>
          <select>
            <option>Filter by Month</option>
            <option>July</option>
            <option>June</option>
          </select>
          <select>
            <option>Payout Status</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>
          <select>
            <option>Sort by</option>
            <option>Highest Earnings</option>
            <option>Latest Payouts</option>
            <option>Course Popularity</option>
          </select>
        </FilterRow>

        <SectionTitle>⚡ Quick Actions</SectionTitle>
        <ActionRow>
          <button>📤 Request Payout</button>
          <button>📥 Download Earnings Report</button>
        </ActionRow>
      </Container>
    </RoleBasedLayout>
  );
};

export default Earnings;

// Styled Components
const Container = styled.div`
  padding: 2rem;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #f8f9fa;
  border-left: 6px solid #00c49f;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
`;

const SectionTitle = styled.h2`
  margin: 2rem 0 1rem;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  th,
  td {
    border: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
  }
  th {
    background-color: #f1f3f5;
  }
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  select {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const ActionRow = styled.div`
  display: flex;
  gap: 1rem;
  button {
    background-color: #00c49f;
    color: white;
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;
