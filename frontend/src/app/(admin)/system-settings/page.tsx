import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import AdminLayout from "@/components/layout/AdminLayout";
import { Form, Input, Button, Select } from "@/components/ui/FormElements";

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Section = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const SystemSettingsPage = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState({
    siteName: "LMS Platform",
    siteDescription: "Advanced Learning Management System",
    defaultRole: "student",
    registrationEnabled: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setSettings((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("System settings saved:", settings);
    // API call to save settings
  };

  if (!user || user.role !== "admin") {
    return <div>Unauthorized</div>;
  }

  return (
    <AdminLayout>
      <div style={{ padding: "2rem" }}>
        <PageHeader>
          <Title>System Settings</Title>
        </PageHeader>

        <Form onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>General Settings</SectionTitle>
            <Input
              label="Site Name"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              required
            />
            <Input
              label="Site Description"
              name="siteDescription"
              value={settings.siteDescription}
              onChange={handleChange}
              required
            />
          </Section>

          <Section>
            <SectionTitle>User Settings</SectionTitle>
            <div style={{ marginBottom: "1rem" }}>
              <label>Default User Role</label>
              <Select
                name="defaultRole"
                value={settings.defaultRole}
                onChange={handleChange}
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
              </Select>
            </div>
            <label>
              <input
                type="checkbox"
                name="registrationEnabled"
                checked={settings.registrationEnabled}
                onChange={handleChange}
              />{" "}
              Allow new user registration
            </label>
          </Section>

          <Section>
            <SectionTitle>Payment Settings</SectionTitle>
            <Input
              label="Currency"
              name="currency"
              value="USD"
              onChange={handleChange}
              disabled
            />
            <Input
              label="Payment Gateway"
              name="paymentGateway"
              value="Stripe"
              onChange={handleChange}
              disabled
            />
          </Section>

          <Button type="submit">Save Settings</Button>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default SystemSettingsPage;
