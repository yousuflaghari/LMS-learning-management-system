import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import AdminLayout from "@/components/layout/AdminLayout";
import { CourseForm } from "@/components/courses/CourseForm";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const EditCoursePage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch course data
    if (id) {
      // Simulated API call
      setTimeout(() => {
        setCourse({
          id: id,
          title: "Advanced React Development",
          description:
            "Master React with hooks, context, and advanced patterns",
          category: "Web Development",
          instructor: "user_2",
          level: "intermediate",
          price: 89.99,
          status: "published",
        });
        setLoading(false);
      }, 1000);
    }
  }, [id]);

  const handleSubmit = (courseData: any) => {
    console.log("Updating course:", courseData);
    // API call to update course
  };

  if (!user || user.role !== "admin") {
    return <div>Unauthorized</div>;
  }

  if (loading) return <div>Loading course data...</div>;

  return (
    <AdminLayout>
      <div style={{ padding: "2rem" }}>
        <PageHeader>
          <Title>Edit Course: {course.title}</Title>
        </PageHeader>

        <CourseForm onSubmit={handleSubmit} initialData={course} />
      </div>
    </AdminLayout>
  );
};

export default EditCoursePage;
