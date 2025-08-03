import React from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";

const AdminSettings = () => {
  return (
    <RoleBasedLayout>
      <Container>
        <h1>⚙️ Admin Settings</h1>

        <Section>
          <h2>🔒 User Management Settings</h2>
          <SettingItem>
            <label>Minimum Password Length:</label>
            <input type="number" placeholder="Enter minimum length" />
          </SettingItem>
          <SettingItem>
            <label>Password Complexity:</label>
            <select>
              <option>Include Special Characters</option>
              <option>Include Numbers</option>
              <option>Include Uppercase</option>
            </select>
          </SettingItem>
          <SettingItem>
            <label>Session Timeout (mins):</label>
            <input type="number" placeholder="e.g. 15" />
          </SettingItem>
          <SettingItem>
            <label>Account Lock After Failed Attempts:</label>
            <input type="number" placeholder="e.g. 5" />
          </SettingItem>
        </Section>

        <Section>
          <h2>⚙️ System Configuration</h2>
          <SettingItem>
            <label>LMS Site Title:</label>
            <input type="text" placeholder="Enter site name" />
          </SettingItem>
          <SettingItem>
            <label>Upload Logo:</label>
            <input type="file" />
          </SettingItem>
          <SettingItem>
            <label>Timezone:</label>
            <select>
              <option>GMT+5 (PKT)</option>
              <option>GMT+0 (UTC)</option>
            </select>
          </SettingItem>
          <SettingItem>
            <label>Admin Email:</label>
            <input type="email" placeholder="admin@example.com" />
          </SettingItem>
        </Section>

        <Section>
          <h2>🛡️ Security Settings</h2>
          <SettingItem>
            <label>Enable 2FA:</label>
            <input type="checkbox" />
          </SettingItem>
          <SettingItem>
            <label>Audit Log Retention (days):</label>
            <input type="number" placeholder="e.g. 90" />
          </SettingItem>
        </Section>

        <Section>
          <h2>📧 Notification Settings</h2>
          <SettingItem>
            <label>Email Alerts:</label>
            <input type="checkbox" />
          </SettingItem>
          <SettingItem>
            <label>In-App Notifications:</label>
            <input type="checkbox" />
          </SettingItem>
        </Section>

        <Section>
          <h2>🧑‍🏫 Instructor / Student Settings</h2>
          <SettingItem>
            <label>Auto-Approve Instructor:</label>
            <input type="checkbox" />
          </SettingItem>
          <SettingItem>
            <label>Student Inactivity Reminder (days):</label>
            <input type="number" />
          </SettingItem>
          <SettingItem>
            <label>Quiz Attempt Limit:</label>
            <input type="number" />
          </SettingItem>
          <SettingItem>
            <label>Course Access Duration (days):</label>
            <input type="number" />
          </SettingItem>
        </Section>

        <Section>
          <h2>💾 Backup & Restore</h2>
          <SettingItem>
            <label>Automatic Backup:</label>
            <select>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </SettingItem>
          <SettingItem>
            <label>Cloud Backup Integration:</label>
            <select>
              <option>Google Drive</option>
              <option>Dropbox</option>
            </select>
          </SettingItem>
          <SettingItem>
            <label>Restore From Backup:</label>
            <input type="file" />
          </SettingItem>
        </Section>

        <Section>
          <h2>🧩 Feature Toggles</h2>
          <SettingItem>
            <label>Enable Gamification:</label>
            <input type="checkbox" />
          </SettingItem>
          <SettingItem>
            <label>Enable Certificates:</label>
            <input type="checkbox" />
          </SettingItem>
          <SettingItem>
            <label>Enable Progress Tracking:</label>
            <input type="checkbox" />
          </SettingItem>
          <SettingItem>
            <label>Enable Forum/Chat:</label>
            <input type="checkbox" />
          </SettingItem>
        </Section>

        <Section>
          <h2>👨‍💻 Admin Account Settings</h2>
          <SettingItem>
            <label>Change Email:</label>
            <input type="email" />
          </SettingItem>
          <SettingItem>
            <label>Change Password:</label>
            <input type="password" />
          </SettingItem>
          <SettingItem>
            <label>Co-Admins:</label>
            <input type="text" placeholder="Add co-admin emails" />
          </SettingItem>
        </Section>

        <Section danger>
          <h2>🔄 Reset & Restore</h2>
          <SettingItem>
            <label>Reset LMS to Default:</label>
            <button>Reset</button>
          </SettingItem>
          <SettingItem>
            <label>Clear Demo Data:</label>
            <button>Clear</button>
          </SettingItem>
          <SettingItem>
            <label>⚠️ Danger Zone - Delete All Users/Courses:</label>
            <button style={{ backgroundColor: "#c0392b", color: "white" }}>
              Delete Everything
            </button>
          </SettingItem>
        </Section>

        <SaveButton>💾 Save Settings</SaveButton>
      </Container>
    </RoleBasedLayout>
  );
};

export default AdminSettings;

const Container = styled.div`
  padding: 2rem;
  background: #f7f9fc;
  font-family: "Segoe UI", sans-serif;
`;

const Section = styled.div`
  background: ${({ danger }) => (danger ? "#ffeaea" : "#fff")};
  border: 1px solid #ddd;
  border-left: 6px solid ${({ danger }) => (danger ? "#e74c3c" : "#3498db")};
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

const SettingItem = styled.div`
  margin: 0.8rem 0;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    margin-bottom: 0.4rem;
  }

  input,
  select,
  button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.95rem;
  }
`;

const SaveButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #27ae60;
  }
`;
