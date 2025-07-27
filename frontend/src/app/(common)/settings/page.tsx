import styled from "styled-components";
import { useState } from "react";
import { Button, Form, Input, Select } from "@/components/ui/FormElements";
import { useAuth } from "@/context/AuthContext";

const SettingsContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
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

const SettingsPage = () => {
  const { user } = useAuth();
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: false,
    newsletter: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    activitySharing: true,
  });

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handlePrivacyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setPrivacySettings((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call to save settings
    console.log("Settings saved:", { notificationSettings, privacySettings });
  };

  if (!user) return <div>Loading...</div>;

  return (
    <SettingsContainer>
      <Section>
        <SectionTitle>Notification Settings</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <label>
              <input
                type="checkbox"
                name="email"
                checked={notificationSettings.email}
                onChange={handleNotificationChange}
              />{" "}
              Email Notifications
            </label>
            <label>
              <input
                type="checkbox"
                name="push"
                checked={notificationSettings.push}
                onChange={handleNotificationChange}
              />{" "}
              Push Notifications
            </label>
            <label>
              <input
                type="checkbox"
                name="newsletter"
                checked={notificationSettings.newsletter}
                onChange={handleNotificationChange}
              />{" "}
              Subscribe to Newsletter
            </label>
          </div>
          <Button type="submit" style={{ marginTop: "1rem" }}>
            Save Settings
          </Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>Privacy Settings</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="profileVisibility">Profile Visibility</label>
            <Select
              id="profileVisibility"
              name="profileVisibility"
              value={privacySettings.profileVisibility}
              onChange={handlePrivacyChange}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="course-only">Course Participants Only</option>
            </Select>
          </div>
          <label>
            <input
              type="checkbox"
              name="activitySharing"
              checked={privacySettings.activitySharing}
              onChange={handlePrivacyChange}
            />{" "}
            Share my activity and achievements
          </label>
          <Button type="submit" style={{ marginTop: "1rem" }}>
            Save Settings
          </Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>Account Management</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button variant="outline" as="a" href="/forgot-password">
            Change Password
          </Button>
          <Button variant="danger">Deactivate Account</Button>
        </div>
      </Section>
    </SettingsContainer>
  );
};

export default SettingsPage;
