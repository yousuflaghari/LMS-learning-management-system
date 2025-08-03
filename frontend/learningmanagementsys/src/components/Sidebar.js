// src/components/Sidebar.js
import styled from "styled-components";
import { useSelector } from "react-redux";
import { fakeUsers } from "../data/fakeUsers";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 250px;
  background: #5ea3e7ff;
  height: 100vh;
  position: fixed;
  border-right: 1px solid #dee2e6;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px 0;
`;

const Role = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  color: white;
  font-size: 22px;
  text-transform: capitalize;
`;

const MenuItem = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  margin: 10px 30px;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background-color: #34495e;
  }
`;

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const currentUser = fakeUsers.find((u) => u.role === user?.role);

  if (!currentUser) return <SidebarContainer>Role not found</SidebarContainer>;

  return (
    <SidebarContainer>
      <Role>{currentUser.role}</Role>
      {currentUser.menu.map((item, idx) => (
        <MenuItem to={item.path} key={idx}>
          {item.label}
        </MenuItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
