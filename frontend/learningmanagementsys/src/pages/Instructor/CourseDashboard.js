import React from "react";
import styled from "styled-components";
import {
  FaBook,
  FaUsers,
  FaStar,
  FaClock,
  FaCheckCircle,
  FaPlus,
  FaDownload,
  FaGlobe,
  FaBell,
  FaCommentDots,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const DashboardWrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CardIcon = styled.div`
  font-size: 1.8rem;
`;

const CardContent = styled.div``;

const Stat = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Label = styled.div`
  color: gray;
  font-size: 0.9rem;
`;

const TableSection = styled.div`
  margin-top: 3rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 0.75rem;
  background: #333;
  color: white;
  text-align: left;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.4rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const Filters = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 0.5rem;
`;

const ChartContainer = styled.div`
  margin-top: 3rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
`;

const QuickActions = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Notifications = styled.div`
  margin-top: 2rem;
`;

const Notification = styled.div`
  background: #ffeeba;
  padding: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
const courseData = [
  {
    title: "JavaScript for Beginners",
    date: "2024-06-15",
    enrolled: 12,
    rate: "75%",
    rating: 4.6,
  },
  {
    title: "React Crash Course",
    date: "2024-07-10",
    enrolled: 20,
    rate: "88%",
    rating: 4.9,
  },
  {
    title: "HTML & CSS Mastery",
    date: "2024-05-20",
    enrolled: 15,
    rate: "80%",
    rating: 4.5,
  },
  {
    title: "Node.js Essentials",
    date: "2024-08-01",
    enrolled: 9,
    rate: "72%",
    rating: 4.3,
  },
  {
    title: "Full-Stack Development",
    date: "2024-06-30",
    enrolled: 18,
    rate: "85%",
    rating: 4.7,
  },
  {
    title: "Advanced React Patterns",
    date: "2024-07-25",
    enrolled: 9,
    rate: "78%",
    rating: 4.4,
  },
  {
    title: "Python for Web",
    date: "2024-06-05",
    enrolled: 13,
    rate: "70%",
    rating: 4.2,
  },
  {
    title: "Database Design Basics",
    date: "2024-07-18",
    enrolled: 10,
    rate: "68%",
    rating: 4.1,
  },
  {
    title: "Tailwind CSS in Practice",
    date: "2024-07-05",
    enrolled: 11,
    rate: "82%",
    rating: 4.6,
  },
  {
    title: "TypeScript Deep Dive",
    date: "2024-08-02",
    enrolled: 8,
    rate: "77%",
    rating: 4.3,
  },
];

const analyticsData = [
  { name: "June", students: 100 },
  { name: "July", students: 220 },
  { name: "August", students: 340 },
];

export default function CourseDashboard() {
  return (
    <RoleBasedLayout>
      <DashboardWrapper>
        <Title>📚 My Course Dashboard</Title>

        <CardsGrid>
          <Card>
            <CardIcon>
              <FaBook />
            </CardIcon>
            <CardContent>
              <Stat>12</Stat>
              <Label>Total Courses Created</Label>
            </CardContent>
          </Card>
          <Card>
            <CardIcon>
              <FaUsers />
            </CardIcon>
            <CardContent>
              <Stat>540</Stat>
              <Label>Total Enrollments</Label>
            </CardContent>
          </Card>
          <Card>
            <CardIcon>
              <FaStar />
            </CardIcon>
            <CardContent>
              <Stat>4.5/5</Stat>
              <Label>Average Rating</Label>
            </CardContent>
          </Card>
          <Card>
            <CardIcon>
              <FaClock />
            </CardIcon>
            <CardContent>
              <Stat>300 hrs</Stat>
              <Label>Total Learning Hours</Label>
            </CardContent>
          </Card>
          <Card>
            <CardIcon>
              <FaCheckCircle />
            </CardIcon>
            <CardContent>
              <Stat>8/12</Stat>
              <Label>Completed Courses</Label>
            </CardContent>
          </Card>
        </CardsGrid>

        <Filters>
          <Select>
            <option>Filter by Category</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Design</option>
          </Select>
          <Select>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>All Time</option>
          </Select>
          <Select>
            <option>Sort by</option>
            <option>Most Enrolled</option>
            <option>Highest Rated</option>
            <option>Latest</option>
          </Select>
        </Filters>

        <TableSection>
          <Table>
            <thead>
              <tr>
                <Th>📘 Course Title</Th>
                <Th>📅 Created On</Th>
                <Th>👨‍🎓 Enrolled</Th>
                <Th>📊 Completion</Th>
                <Th>⭐ Rating</Th>
                <Th>🛠️ Actions</Th>
              </tr>
            </thead>
            <tbody>
              {courseData.map((course, i) => (
                <tr key={i}>
                  <Td>{course.title}</Td>
                  <Td>{course.date}</Td>
                  <Td>{course.enrolled}</Td>
                  <Td>{course.rate}</Td>
                  <Td>{course.rating}</Td>
                  <Td>
                    <Actions>
                      <Button>View</Button>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </Actions>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableSection>

        <ChartContainer>
          <h3>📈 Student Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <QuickActions>
          <Button>
            <FaPlus /> Create New Course
          </Button>
          <Button>
            <FaDownload /> Download Report
          </Button>
          <Button>
            <FaGlobe /> Preview as Student
          </Button>
        </QuickActions>

        <Notifications>
          <Notification>
            <FaBell /> Pending Assignments to Review
          </Notification>
          <Notification>
            <FaCommentDots /> New Comments on "React Crash Course"
          </Notification>
          <Notification>
            <FaBook /> Recently Published: "Node.js Masterclass"
          </Notification>
        </Notifications>
      </DashboardWrapper>
    </RoleBasedLayout>
  );
}
