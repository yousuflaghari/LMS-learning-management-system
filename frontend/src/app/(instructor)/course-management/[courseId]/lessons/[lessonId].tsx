import styled from "styled-components";
import InstructorLayout from "@/components/layout/InstructorLayout";
import { Form, Input, Button, Select } from "@/components/ui/FormElements";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const LessonEditorContainer = styled.div`
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

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LessonEditorPage = () => {
  const router = useRouter();
  const { courseId, lessonId } = router.query;
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (lessonId) {
      // Simulate API call to fetch lesson
      setTimeout(() => {
        setLesson({
          id: lessonId,
          title: "React Hooks Fundamentals",
          content:
            "Learn how to use useState, useEffect, and other React hooks",
          type: "video",
          duration: 45,
          resources: [
            { id: "1", name: "Hooks Cheatsheet.pdf", url: "#" },
            { id: "2", name: "Example Code.zip", url: "#" },
          ],
        });
        setLoading(false);
      }, 500);
    }
  }, [lessonId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save lesson data
    console.log("Lesson saved:", lesson);
    router.push(`/instructor/course-management/${courseId}`);
  };

  if (loading) return <div>Loading lesson...</div>;

  return (
    <InstructorLayout>
      <LessonEditorContainer>
        <PageHeader>
          <Title>Edit Lesson: {lesson.title}</Title>
        </PageHeader>

        <Form onSubmit={handleSubmit}>
          <TwoColumns>
            <div>
              <Input
                label="Lesson Title"
                value={lesson.title}
                onChange={(e) =>
                  setLesson({ ...lesson, title: e.target.value })
                }
                required
              />

              <div style={{ marginBottom: "1rem" }}>
                <label>Lesson Type</label>
                <Select
                  value={lesson.type}
                  onChange={(e) =>
                    setLesson({ ...lesson, type: e.target.value })
                  }
                >
                  <option value="video">Video</option>
                  <option value="text">Text</option>
                  <option value="quiz">Quiz</option>
                  <option value="assignment">Assignment</option>
                </Select>
              </div>

              <Input
                label="Duration (minutes)"
                type="number"
                value={lesson.duration}
                onChange={(e) =>
                  setLesson({ ...lesson, duration: parseInt(e.target.value) })
                }
                min="1"
                required
              />
            </div>

            <div>
              <label>Content</label>
              <Input
                as="textarea"
                rows={10}
                value={lesson.content}
                onChange={(e) =>
                  setLesson({ ...lesson, content: e.target.value })
                }
                required
              />
            </div>
          </TwoColumns>

          <div style={{ marginTop: "2rem" }}>
            <h3>Resources</h3>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Input placeholder="Resource name" style={{ flex: 1 }} />
              <Input placeholder="Resource URL" style={{ flex: 1 }} />
              <Button variant="outline">Add Resource</Button>
            </div>

            <div style={{ marginTop: "1rem" }}>
              {lesson.resources.map((resource: any) => (
                <div
                  key={resource.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div>
                    <div>{resource.name}</div>
                    <div style={{ fontSize: "0.875rem", color: "#666" }}>
                      {resource.url}
                    </div>
                  </div>
                  <Button size="sm" variant="danger">
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <Button
              variant="outline"
              onClick={() =>
                router.push(`/instructor/course-management/${courseId}`)
              }
            >
              Cancel
            </Button>
            <Button type="submit">Save Lesson</Button>
          </div>
        </Form>
      </LessonEditorContainer>
    </InstructorLayout>
  );
};

export default LessonEditorPage;
