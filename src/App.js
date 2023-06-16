import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "base";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppLayout } from "layout";
import {
  Login,
  Dashboard,
  ManageEmployee,
  Profile,
  AddEmployee,
  EditEmployee,
  EmployeeDetail,
} from "pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<AppLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="manage-employees" element={<ManageEmployee />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create" element={<AddEmployee />} />
          <Route path="edit-employee/:id" element={<EditEmployee />} />
        </Route>

        <Route path="/employee-details/:id" element={<EmployeeDetail />} />
      </Routes>

      <ToastContainer
        position="top-center"
        limit={1}
        // autoClose={80000}
        hideProgressBar={true}
        closeButton={false}
        newestOnTop={true}
        className="toast--container"
      />
    </ThemeProvider>
  );
}

export default App;
