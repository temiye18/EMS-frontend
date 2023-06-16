import { NavLink, useNavigate, Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsPeople, BsPower } from "react-icons/bs";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";

import NavContainer from "./styles";

const navData = [
  {
    id: "1",
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    url: "/admin",
  },
  {
    id: "2",
    title: "Manage Employees",
    icon: <BsPeople />,
    url: "/admin/manage-employees",
  },
  {
    id: "3",
    title: "Profile",
    icon: <CgProfile />,
    url: "/admin/profile",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const initials = currentUser?.name
    ?.split(" ")
    ?.map((n) => n[0])
    ?.join("");

  const handleLogout = () => {
    const result = window.confirm("Are you sure you want to logout?");

    if (result) {
      localStorage.removeItem("user");
      localStorage.removeItem("adminPermit");
      toast.success("Logout successful");
      navigate("/");
    } else {
      return;
    }
  };
  return (
    <NavContainer>
      <div>
        <h3>Admin Dashboard</h3>

        <ul>
          {navData.map((link) => {
            if (link.title === "Dashboard") {
              return (
                <li key={link.id}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    end={true}
                  >
                    <span>{link.icon} </span>
                    {link.title}
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>{link.icon} </span>
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bottom--item">
        <div className="profile">
          <Link className="link" to="profile">
            {initials && initials}
          </Link>
          <Link to="/admin/profile">{currentUser?.name}</Link>
        </div>

        <button className="logout" onClick={handleLogout}>
          <span>
            <BsPower />
          </span>{" "}
          Logout
        </button>
      </div>
    </NavContainer>
  );
};

export default Navbar;
