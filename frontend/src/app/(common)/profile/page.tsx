import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import { Button, Input, Form } from "@/components/ui/FormElements";

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-right: 2rem;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ProfileRole = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
`;

const Section = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ProfilePage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "Web developer passionate about creating interactive learning experiences",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call to update profile
    console.log("Profile updated:", formData);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <ProfileContainer>
      <ProfileHeader>
        <Avatar>{user.name.charAt(0)}</Avatar>
        <ProfileInfo>
          <ProfileName>{user.name}</ProfileName>
          <ProfileRole>
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </ProfileRole>
        </ProfileInfo>
      </ProfileHeader>

      <Section>
        <SectionTitle>Personal Information</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Bio"
            as="textarea"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
          />
          <Button type="submit">Update Profile</Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>Account Security</SectionTitle>
        <div>
          <p>Password: ********</p>
          <Button variant="outline" as="a" href="/forgot-password">
            Change Password
          </Button>
        </div>
      </Section>

      {user.role === "student" && (
        <Section>
          <SectionTitle>Learning Progress</SectionTitle>
          <p>Courses Enrolled: 5</p>
          <p>Courses Completed: 2</p>
          <p>Average Grade: 92%</p>
        </Section>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;
