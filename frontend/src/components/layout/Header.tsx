import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const Header = () => {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <HeaderContainer>
      <div>Logo</div>
      <UserInfo>
        <span>{user.name}</span>
        <Avatar>{user.name.charAt(0)}</Avatar>
      </UserInfo>
    </HeaderContainer>
  );
};
export default Header;
