import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import AdminLayout from "@/components/layout/AdminLayout";
import { useState, useEffect } from "react";
import Link from "next/link";

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const CourseManagementPage = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch courses from API
    const fetchCourses = async () => {
      try {
        // Simulated API call
        setTimeout(() => {
          setCourses([
            {
              id: "1",
              title: "Advanced React Development",
              category: "Web Development",
              instructor: "Jane Smith",
              students: 1250,
              status: "published",
            },
            {
              id: "2",
              title: "Python for Data Science",
              category: "Data Science",
              instructor: "John Doe",
              students: 980,
              status: "published",
            },
            {
              id: "3",
              title: "UX Design Fundamentals",
              category: "Design",
              instructor: "Alex Johnson",
              students: 2100,
              status: "draft",
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (!user || user.role !== "admin") {
    return <div>Unauthorized</div>;
  }

  const columns = [
    { header: "Title", accessor: "title" },
    { header: "Category", accessor: "category" },
    { header: "Instructor", accessor: "instructor" },
    { header: "Students", accessor: "students" },
    {
      header: "Status",
      cell: (row: any) => (
        <span
          style={{
            color: row.status === "published" ? "green" : "orange",
            fontWeight: 500,
          }}
        >
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </span>
      ),
    },
    {
      header: "Actions",
      cell: (row: any) => (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link href={`/admin/course-management/${row.id}`} passHref>
            <Button size="sm" variant="outline">
              Edit
            </Button>
          </Link>
          <Button size="sm" variant="danger">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div style={{ padding: "2rem" }}>
        <PageHeader>
          <Title>Course Management</Title>
          <Link href="/admin/course-management/new" passHref>
            <Button>Create New Course</Button>
          </Link>
        </PageHeader>

        {loading ? (
          <div>Loading courses...</div>
        ) : (
          <Table columns={columns} data={courses} />
        )}
      </div>
    </AdminLayout>
  );
};

export default CourseManagementPage;
