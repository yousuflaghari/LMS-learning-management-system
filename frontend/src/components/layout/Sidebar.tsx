import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const SidebarContainer = styled.div`
  width: 250px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  height: 100vh;
  position: sticky;
  top: 0;
`;
const SidebarHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const SidebarMenu = styled.ul`
  list-style: none;
  padding: 1rem 0;
`;
const MenuItem = styled.li`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const Sidebar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  if (!user) return null;
  const navigate = (path: string) => {
    router.push(path);
  };
  return (
    <SidebarContainer>
      <SidebarHeader>
        <h2>LMS</h2>
      </SidebarHeader>
      <SidebarMenu>
        <MenuItem onClick={() => navigate("/admin/dashboard")}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => navigate("/admin/user-management")}>
          Users
        </MenuItem>
        <MenuItem onClick={() => navigate("/admin/course-management")}>
          Courses
        </MenuItem>
        <MenuItem onClick={() => navigate("/admin/system-settings")}>
          Settings
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};
export default Sidebar;
