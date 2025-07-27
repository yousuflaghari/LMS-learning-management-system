import styled from "styled-components";
import { CourseCard } from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HomePage = () => {
  const { user } = useAuth();

  // Mock courses data
  const featuredCourses = [
    {
      id: "1",
      title: "Advanced React Development",
      description: "Master React with hooks, context, and advanced patterns",
      instructor: "Jane Smith",
      category: "Web Development",
      rating: 4.8,
      students: 1250,
    },
    {
      id: "2",
      title: "Python for Data Science",
      description: "Learn Python, Pandas, NumPy, and data visualization",
      instructor: "John Doe",
      category: "Data Science",
      rating: 4.7,
      students: 980,
    },
    {
      id: "3",
      title: "UX Design Fundamentals",
      description: "Design intuitive user experiences from scratch",
      instructor: "Alex Johnson",
      category: "Design",
      rating: 4.9,
      students: 2100,
    },
  ];

  return (
    <div>
      <HeroSection>
        <HeroTitle>Learn Without Limits</HeroTitle>
        <HeroSubtitle>
          Advance your career with industry-relevant courses taught by
          world-class instructors on our learning management system.
        </HeroSubtitle>
        {!user && (
          <Button as="a" href="/register" size="lg">
            Get Started Free
          </Button>
        )}
      </HeroSection>

      <Section>
        <SectionTitle>Featured Courses</SectionTitle>
        <CoursesGrid>
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </CoursesGrid>
      </Section>

      <Section style={{ backgroundColor: "#f9fafb" }}>
        <SectionTitle>Why Choose Our Platform</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with real-world experience</p>
          </div>
          <div>
            <h3>Flexible Learning</h3>
            <p>Study at your own pace, anytime, anywhere</p>
          </div>
          <div>
            <h3>Practical Projects</h3>
            <p>Build portfolio-worthy projects that demonstrate your skills</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
