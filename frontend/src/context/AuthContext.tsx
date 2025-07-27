import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types";
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const storedUser = localStorage.getItem("lms_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  const login = async (email: string, password: string) => {
    // Mock API call - in a real app, this would be a fetch to your backend
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock user data
        const mockUser: User = {
          id: "1",
          name: "John Doe",
          email: email,
          role: email.includes("admin")
            ? "admin"
            : email.includes("instructor")
            ? "instructor"
            : "student",
        };
        setUser(mockUser);
        localStorage.setItem("lms_user", JSON.stringify(mockUser));
        resolve();
      }, 1000);
    });
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("lms_user");
    router.push("/login");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
