import React, { useState } from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const Tab = styled.button`
  padding: 10px 20px;
  background: ${(props) => (props.active ? "#007bff" : "#e0e0e0")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 5px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const ReportTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;

const tabs = [
  "User Reports",
  "Course Reports",
  "Quiz Reports",
  "Financial Reports",
  "System Usage",
  "Time-Based",
  "Instructor Reports",
  "Student Progress",
  "Export",
  "Visualizations",
];

const AdminReports = () => {
  const [activeTab, setActiveTab] = useState("User Reports");

  return (
    <RoleBasedLayout>
      <div style={{ padding: "20px" }}>
        <h2>📈 Admin Reports</h2>
        <div>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </div>

        <Section>
          {activeTab === "User Reports" && (
            <>
              <h3>🔍 User Reports</h3>
              <ul>
                <li>Total Registered Users: 1200</li>
                <li>New Registrations (Daily): 7</li>
                <li>New Registrations (Weekly): 45</li>
                <li>New Registrations (Monthly): 180</li>
                <li>Active vs Inactive Users (Graph coming soon)</li>
                <li>User Growth Graph (coming soon)</li>
              </ul>
              <h4>Most Active Users</h4>
              <ReportTable>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Logins</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ali Raza</td>
                    <td>57</td>
                  </tr>
                  <tr>
                    <td>Sarah Khan</td>
                    <td>51</td>
                  </tr>
                </tbody>
              </ReportTable>
            </>
          )}

          {activeTab === "Course Reports" && (
            <>
              <h3>📚 Course Reports</h3>
              <ul>
                <li>Total Courses Created: 350</li>
                <li>Most Enrolled Courses</li>
                <li>Active vs Inactive Courses</li>
                <li>Completion Rate by Course</li>
                <li>Course Ratings Summary</li>
                <li>Courses Pending Approval</li>
              </ul>
            </>
          )}

          {activeTab === "Quiz Reports" && (
            <>
              <h3>🧪 Quiz & Assessment Reports</h3>
              <ul>
                <li>Total Quizzes Created</li>
                <li>Quizzes Attempted</li>
                <li>Average Score per Quiz</li>
                <li>Quiz Failure Rate</li>
                <li>Quiz Attempt Trends (Graph coming soon)</li>
              </ul>
              <h4>Top Performing Students</h4>
              <ReportTable>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Avg Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Zainab Ahmed</td>
                    <td>94%</td>
                  </tr>
                  <tr>
                    <td>Hamza Sheikh</td>
                    <td>91%</td>
                  </tr>
                </tbody>
              </ReportTable>
            </>
          )}

          {activeTab === "Financial Reports" && (
            <>
              <h3>💸 Financial / Earning Reports</h3>
              <ul>
                <li>Total Earnings (All Time): $15,200</li>
                <li>Total Earnings (Monthly): $2,500</li>
                <li>Total Earnings (Weekly): $620</li>
                <li>Most Purchased Courses</li>
                <li>Refund Requests</li>
              </ul>
              <h4>Payment Gateway Logs</h4>
              <ReportTable>
                <thead>
                  <tr>
                    <th>Gateway</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stripe</td>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <td>PayPal</td>
                    <td>Active</td>
                  </tr>
                </tbody>
              </ReportTable>

              <h4>Instructor-wise Earnings</h4>
              <ReportTable>
                <thead>
                  <tr>
                    <th>Instructor</th>
                    <th>Total Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ayesha Noor</td>
                    <td>$3,200</td>
                  </tr>
                  <tr>
                    <td>Imran Malik</td>
                    <td>$2,800</td>
                  </tr>
                </tbody>
              </ReportTable>
            </>
          )}

          {activeTab === "System Usage" && (
            <>
              <h3>📈 System Usage & Traffic Reports</h3>
              <ul>
                <li>Daily/Monthly Active Users</li>
                <li>Login Trends</li>
                <li>Device Usage: Mobile (65%), Desktop (30%), Tablet (5%)</li>
                <li>
                  Browser Usage: Chrome (55%), Firefox (20%), Edge (10%), Others
                  (15%)
                </li>
                <li>Peak Hours: 7PM–10PM</li>
              </ul>
            </>
          )}

          {activeTab === "Time-Based" && (
            <>
              <h3>⏱️ Time-Based Reports</h3>
              <ul>
                <li>Daily Report</li>
                <li>Weekly Summary</li>
                <li>Monthly Trends</li>
                <li>
                  Custom Date Range: <input type="date" /> to{" "}
                  <input type="date" />
                </li>
              </ul>
            </>
          )}

          {activeTab === "Instructor Reports" && (
            <>
              <h3>👨‍🏫 Instructor Performance Reports</h3>
              <ReportTable>
                <thead>
                  <tr>
                    <th>Instructor</th>
                    <th>Courses</th>
                    <th>Rating</th>
                    <th>Revenue</th>
                    <th>Active Students</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Maria Hassan</td>
                    <td>8</td>
                    <td>4.7</td>
                    <td>$2,500</td>
                    <td>320</td>
                  </tr>
                </tbody>
              </ReportTable>
            </>
          )}

          {activeTab === "Student Progress" && (
            <>
              <h3>🎓 Student Progress Reports</h3>
              <ReportTable>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Courses Enrolled</th>
                    <th>Courses Completed</th>
                    <th>Quiz Avg</th>
                    <th>Time Spent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ahmed Tariq</td>
                    <td>5</td>
                    <td>4</td>
                    <td>85%</td>
                    <td>12h 30m</td>
                  </tr>
                </tbody>
              </ReportTable>
            </>
          )}

          {activeTab === "Export" && (
            <>
              <h3>📤 Export & Download Options</h3>
              <button>Export to PDF</button>
              <button>Export to CSV</button>
              <button>Export to Excel</button>
              <button>📅 Schedule Reports</button>
              <button>🖨️ Printable View</button>
            </>
          )}

          {activeTab === "Visualizations" && (
            <>
              <h3>🧩 Visualizations</h3>
              <p>Graphs coming soon: Bar, Line, Pie, Heatmap</p>
              <ReportTable>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Example Chart Data</td>
                    <td>123</td>
                  </tr>
                </tbody>
              </ReportTable>
            </>
          )}
        </Section>
      </div>
    </RoleBasedLayout>
  );
};

export default AdminReports;
