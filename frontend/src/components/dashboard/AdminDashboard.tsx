import styled from "styled-components";
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
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;
const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 1.5rem;

  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .change {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.success};
  }
`;
const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 1.5rem;
`;
const AdminDashboard = () => {
  // Mock data
  const stats = [
    { title: "Total Users", value: 1245, change: "+12%" },
    { title: "Active Courses", value: 42, change: "+3" },
    { title: "Enrollments", value: 5678, change: "+24%" },
    { title: "Revenue", value: "$24,567", change: "+8.5%" },
  ];
  const recentActivities = [
    {
      id: 1,
      user: "John Doe",
      action: "Created new course",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "Updated profile",
      time: "4 hours ago",
    },
    {
      id: 3,
      user: "Bob Johnson",
      action: "Completed course",
      time: "1 day ago",
    },
  ];
  return (
    <Dashboard>
      <CardGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <h3>{stat.title}</h3>
            <div className="value">{stat.value}</div>
            <div className="change">{stat.change}</div>
          </StatCard>
        ))}
      </CardGrid>
      <div>
        <SectionTitle>Recent Activities</SectionTitle>
        <Card>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  User
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Action
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr key={activity.id}>
                  <td
                    style={{
                      padding: "0.5rem 0",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {activity.user}
                  </td>
                  <td
                    style={{
                      padding: "0.5rem 0",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {activity.action}
                  </td>
                  <td
                    style={{
                      padding: "0.5rem 0",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {activity.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </Dashboard>
  );
};
export default AdminDashboard;
