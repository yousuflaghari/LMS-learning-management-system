import { ReactNode } from "react";
import { AuthProvider } from "@/context/AuthContext";
import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <GlobalStyles />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
