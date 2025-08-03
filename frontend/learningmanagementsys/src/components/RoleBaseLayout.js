import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarData } from "../redux/slices/sidebarDataSlice";
import Sidebar from "./Sidebar";
import { getSidebarData } from "../data/sidebardata";

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 30px;
  background: #f5f7fa;
  overflow-y: auto;
`;

const RoleBasedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    if (role) {
      const sidebarItems = getSidebarData(role);
      dispatch(setSidebarData(sidebarItems));
    }
  }, [role, dispatch]);

  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default RoleBasedLayout;
