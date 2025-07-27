import styled from "styled-components";
import InstructorLayout from "@/components/layout/InstructorLayout";
import { Button, Form, Input } from "@/components/ui/FormElements";
import { useRouter } from "next/router";

const AnnouncementsContainer = styled.div`
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

const AnnouncementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const AnnouncementCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 1.5rem;
`;

const AnnouncementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const AnnouncementTitle = styled.h3`
  font-size: 1.1rem;
`;

const AnnouncementDate = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const AnnouncementContent = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const AnnouncementsPage = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const [announcements, setAnnouncements] = useState([
    {
      id: "1",
      title: "Important Course Update",
      content:
        "The deadline for the final project has been extended by one week.",
      date: "2023-05-15",
      author: "Jane Smith",
    },
    {
      id: "2",
      title: "Week 5 Materials Available",
      content:
        "The materials for week 5 are now available in the course content section.",
      date: "2023-05-10",
      author: "Jane Smith",
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newAnnouncement = {
      id: `ann-${Date.now()}`,
      title,
      content,
      date: new Date().toISOString().split("T")[0],
      author: "Jane Smith",
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setTitle("");
    setContent("");
  };

  return (
    <InstructorLayout>
      <AnnouncementsContainer>
        <PageHeader>
          <Title>Course Announcements</Title>
        </PageHeader>

        <Card>
          <h2 style={{ marginBottom: "1rem" }}>Create New Announcement</h2>
          <Form onSubmit={handleSubmit}>
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              label="Content"
              as="textarea"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <Button type="submit">Publish Announcement</Button>
          </Form>
        </Card>

        <AnnouncementList>
          <h2>Previous Announcements</h2>
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.id}>
              <AnnouncementHeader>
                <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
                <AnnouncementDate>{announcement.date}</AnnouncementDate>
              </AnnouncementHeader>
              <AnnouncementContent>{announcement.content}</AnnouncementContent>
            </AnnouncementCard>
          ))}
        </AnnouncementList>
      </AnnouncementsContainer>
    </InstructorLayout>
  );
};

export default AnnouncementsPage;
