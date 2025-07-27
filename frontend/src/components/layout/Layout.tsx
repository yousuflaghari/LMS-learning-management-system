import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAuth } from "@/context/AuthContext";
const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return (
    <LayoutContainer>
      {user && <Sidebar />}
      <MainContent>
        {user && <Header />}
        <Content>{children}</Content>
      </MainContent>
    </LayoutContainer>
  );
};
export default Layout;
