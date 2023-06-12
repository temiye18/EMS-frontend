import { Outlet } from "react-router-dom";
import { Navbar } from "components";
import MainPage from "./styles";

const AppLayout = () => {
  return (
    <>
      <MainPage>
        <Navbar />
        <Outlet />
      </MainPage>
    </>
  );
};

export default AppLayout;
