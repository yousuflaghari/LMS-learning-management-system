import styled from "styled-components";
import { Card, StatCard, CardGrid } from "@/styles/dashboardStyles";
import { Button } from "@/components/ui/Button";
import { FaChartLine, FaUsers, FaBook, FaComments } from "react-icons/fa";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const ActionCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ActionIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryLight}20;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
`;

const ActionTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const InstructorDashboard = () => {
  const stats = [
    { title: "Total Students", value: 245, icon: <FaUsers />, change: "+12%" },
    { title: "Active Courses", value: 8, icon: <FaBook />, change: "+2" },
    { title: "Pending Grading", value: 42, icon: <FaComments />, change: "+5" },
    { title: "Avg. Rating", value: 4.7, icon: <FaChartLine />, change: "+0.2" },
  ];

  const actions = [
    {
      title: "Create Course",
      icon: <FaBook />,
      link: "/instructor/course-management/new",
    },
    {
      title: "Grade Submissions",
      icon: <FaComments />,
      link: "/instructor/grading",
    },
    {
      title: "Post Announcement",
      icon: <FaChartLine />,
      link: "/instructor/announcements",
    },
    {
      title: "View Analytics",
      icon: <FaChartLine />,
      link: "/instructor/analytics",
    },
  ];

  return (
    <Dashboard>
      <CardGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <div className="icon">{stat.icon}</div>
            <h3>{stat.title}</h3>
            <div className="value">{stat.value}</div>
            <div className="change">{stat.change}</div>
          </StatCard>
        ))}
      </CardGrid>

      <div>
        <SectionTitle>Quick Actions</SectionTitle>
        <QuickActions>
          {actions.map((action, index) => (
            <a href={action.link} key={index}>
              <ActionCard>
                <ActionIcon>{action.icon}</ActionIcon>
                <ActionTitle>{action.title}</ActionTitle>
              </ActionCard>
            </a>
          ))}
        </QuickActions>
      </div>

      <div>
        <SectionTitle>Recent Activity</SectionTitle>
        <Card>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li
              style={{ padding: "0.75rem 0", borderBottom: "1px solid #eee" }}
            >
              <div>John Doe completed "React Fundamentals"</div>
              <div style={{ fontSize: "0.875rem", color: "#666" }}>
                2 hours ago
              </div>
            </li>
            <li
              style={{ padding: "0.75rem 0", borderBottom: "1px solid #eee" }}
            >
              <div>Assignment submitted for "Advanced JavaScript"</div>
              <div style={{ fontSize: "0.875rem", color: "#666" }}>
                5 hours ago
              </div>
            </li>
            <li style={{ padding: "0.75rem 0" }}>
              <div>New enrollment in "Node.js Backend Development"</div>
              <div style={{ fontSize: "0.875rem", color: "#666" }}>
                1 day ago
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </Dashboard>
  );
};

export default InstructorDashboard;
