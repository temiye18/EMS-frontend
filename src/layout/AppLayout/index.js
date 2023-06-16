import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "components";
import MainPage from "./styles";

const AppLayout = () => {
  const navigate = useNavigate();
  const adminIsAuth = localStorage.getItem("adminPermit");

  useEffect(() => {
    if (adminIsAuth === null) {
      localStorage.removeItem("user");
      localStorage.removeItem("adminPermit");
      localStorage.removeItem("employeePermit");
      navigate("/");
    }
  }, [adminIsAuth, navigate]);

  if (adminIsAuth === null) {
    return null;
  }

  return (
    <>
      <MainPage>
        <Navbar />
        <section>
          <h1 className="title">Employee Management System 💻 </h1>
          <Outlet />
        </section>
      </MainPage>
    </>
  );
};

export default AppLayout;
