import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "base";
import { AppLayout } from "layout";
import { Login, Dashboard, ManageEmployee, Profile } from "pages";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AppLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="manage-employees" element={<ManageEmployee />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
