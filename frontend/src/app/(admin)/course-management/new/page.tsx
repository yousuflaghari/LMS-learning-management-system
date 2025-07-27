import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import AdminLayout from "@/components/layout/AdminLayout";
import { CourseForm } from "@/components/courses/CourseForm";

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const NewCoursePage = () => {
  const { user } = useAuth();

  const handleSubmit = (courseData: any) => {
    console.log("Creating course:", courseData);
    // API call to create course
  };

  if (!user || user.role !== "admin") {
    return <div>Unauthorized</div>;
  }

  return (
    <AdminLayout>
      <div style={{ padding: "2rem" }}>
        <PageHeader>
          <Title>Create New Course</Title>
        </PageHeader>

        <CourseForm onSubmit={handleSubmit} initialData={null} />
      </div>
    </AdminLayout>
  );
};

export default NewCoursePage;
