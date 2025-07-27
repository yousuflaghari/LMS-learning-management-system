import styled from "styled-components";
import StudentLayout from "@/components/layout/StudentLayout";
import CourseCard from "@/components/courses/CourseCard";
import { useAuth } from "@/context/AuthContext";
import { useCourse } from "@/context/CourseContext";

const MyCoursesContainer = styled.div`
  padding: 2rem;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

const MyCoursesPage = () => {
  const { user } = useAuth();
  const { courseProgress } = useCourse();

  const enrolledCourses = [
    {
      id: "1",
      title: "Advanced React Development",
      description: "Master React with hooks, context, and advanced patterns",
      instructor: "Jane Smith",
      category: "Web Development",
      rating: 4.8,
      students: 1250,
      modules: [
        { id: "m1", title: "Module 1: React Fundamentals", lessons: 5 },
        { id: "m2", title: "Module 2: State Management", lessons: 6 },
        { id: "m3", title: "Module 3: Advanced Patterns", lessons: 4 },
      ],
    },
    {
      id: "2",
      title: "Node.js Backend Development",
      description: "Build scalable server-side applications with Node.js",
      instructor: "John Doe",
      category: "Web Development",
      rating: 4.7,
      students: 980,
      modules: [
        { id: "m4", title: "Module 1: Node.js Basics", lessons: 4 },
        { id: "m5", title: "Module 2: Express Framework", lessons: 5 },
        { id: "m6", title: "Module 3: Database Integration", lessons: 6 },
      ],
    },
    {
      id: "3",
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles and prototyping tools",
      instructor: "Alex Johnson",
      category: "Design",
      rating: 4.9,
      students: 2100,
      modules: [
        { id: "m7", title: "Module 1: Design Principles", lessons: 4 },
        { id: "m8", title: "Module 2: User Research", lessons: 3 },
        { id: "m9", title: "Module 3: Prototyping", lessons: 5 },
      ],
    },
  ];

  return (
    <StudentLayout>
      <MyCoursesContainer>
        <PageHeader>
          <Title>My Courses</Title>
        </PageHeader>

        <CoursesGrid>
          {enrolledCourses.map((course) => {
            const progress =
              course.modules.reduce((total, module) => {
                // Simulate progress for each module
                return total + Math.floor(Math.random() * 100);
              }, 0) / course.modules.length;

            return (
              <CourseCard
                key={course.id}
                course={{
                  ...course,
                  progress: Math.round(progress),
                }}
              />
            );
          })}
        </CoursesGrid>
      </MyCoursesContainer>
    </StudentLayout>
  );
};

export default MyCoursesPage;
