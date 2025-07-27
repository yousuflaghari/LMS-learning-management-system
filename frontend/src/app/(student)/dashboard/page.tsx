import styled from "styled-components";
import { Card, StatCard, CardGrid } from "@/styles/dashboardStyles";
import { Button } from "@/components/ui/Button";
import { FaBook, FaClock, FaChartLine, FaMedal } from "react-icons/fa";
import CourseCard from "@/components/courses/CourseCard";

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

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const StudentDashboard = () => {
  const stats = [
    { title: "Enrolled Courses", value: 5, icon: <FaBook />, change: "+1" },
    { title: "Hours This Week", value: 8.5, icon: <FaClock />, change: "+2.5" },
    {
      title: "Avg. Progress",
      value: "72%",
      icon: <FaChartLine />,
      change: "+5%",
    },
    { title: "Achievements", value: 3, icon: <FaMedal />, change: "+1" },
  ];

  const courses = [
    {
      id: "1",
      title: "Advanced React Development",
      description: "Master React with hooks, context, and advanced patterns",
      instructor: "Jane Smith",
      category: "Web Development",
      rating: 4.8,
      students: 1250,
      progress: 85,
    },
    {
      id: "2",
      title: "Node.js Backend Development",
      description: "Build scalable server-side applications with Node.js",
      instructor: "John Doe",
      category: "Web Development",
      rating: 4.7,
      students: 980,
      progress: 45,
    },
    {
      id: "3",
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles and prototyping tools",
      instructor: "Alex Johnson",
      category: "Design",
      rating: 4.9,
      students: 2100,
      progress: 30,
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
        <SectionTitle>Continue Learning</SectionTitle>
        <CoursesGrid>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </CoursesGrid>
      </div>

      <div>
        <SectionTitle>Upcoming Deadlines</SectionTitle>
        <Card>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li
              style={{ padding: "0.75rem 0", borderBottom: "1px solid #eee" }}
            >
              <div>Assignment: React State Management</div>
              <div style={{ fontSize: "0.875rem", color: "#666" }}>
                Due: Tomorrow, 11:59 PM
              </div>
            </li>
            <li
              style={{ padding: "0.75rem 0", borderBottom: "1px solid #eee" }}
            >
              <div>Quiz: Node.js Modules</div>
              <div style={{ fontSize: "0.875rem", color: "#666" }}>
                Due: 3 days
              </div>
            </li>
            <li style={{ padding: "0.75rem 0" }}>
              <div>Final Project Proposal</div>
              <div style={{ fontSize: "0.875rem", color: "#666" }}>
                Due: 1 week
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </Dashboard>
  );
};

export default StudentDashboard;
