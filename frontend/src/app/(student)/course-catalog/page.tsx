import styled from "styled-components";
import StudentLayout from "@/components/layout/StudentLayout";
import CourseCard from "@/components/courses/CourseCard";
import { Input, Select } from "@/components/ui/FormElements";
import { useState } from "react";

const CatalogContainer = styled.div`
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

const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const CourseCatalogPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("popular");

  const categories = [
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Design",
    "Business",
    "Marketing",
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
    {
      id: "4",
      title: "iOS Development with Swift",
      description: "Build iOS apps using Swift and SwiftUI",
      instructor: "Michael Brown",
      category: "Mobile Development",
      rating: 4.6,
      students: 850,
    },
    {
      id: "5",
      title: "Digital Marketing Strategy",
      description: "Create effective digital marketing campaigns",
      instructor: "Sarah Davis",
      category: "Marketing",
      rating: 4.5,
      students: 1200,
    },
    {
      id: "6",
      title: "Business Analytics",
      description: "Analyze business data to drive decisions",
      instructor: "Robert Wilson",
      category: "Business",
      rating: 4.7,
      students: 950,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? course.category === category : true;
    return matchesSearch && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort === "popular") return b.students - a.students;
    if (sort === "rating") return b.rating - a.rating;
    return a.title.localeCompare(b.title);
  });

  return (
    <StudentLayout>
      <CatalogContainer>
        <PageHeader>
          <Title>Course Catalog</Title>
        </PageHeader>

        <Filters>
          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Select>

          <Select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Alphabetical</option>
          </Select>
        </Filters>

        <CoursesGrid>
          {sortedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </CoursesGrid>
      </CatalogContainer>
    </StudentLayout>
  );
};

export default CourseCatalogPage;
