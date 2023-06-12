import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillPersonFill, BsPower } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import NavContainer from "./styles";

const navData = [
  {
    id: "1",
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    url: "/dashboard",
  },
  {
    id: "2",
    title: "Manage Employees",
    icon: <BsFillPersonFill />,
    url: "manage-employees",
  },
  {
    id: "3",
    title: "Profile",
    icon: <CgProfile />,
    url: "profile",
  },
];

const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <h3>Admin Dashboard</h3>

        <ul>
          {navData.map((link) => {
            if (link.title === "Dashboard") {
              return (
                <li key={link.id}>
                  <NavLink to={link.url} activeClassName="active" end={true}>
                    <span>{link.icon} </span>
                    {link.title}
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={link.id}>
                <NavLink to={link.url} activeClassName="active">
                  <span>{link.icon} </span>
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <button className="logout">
        <span>
          <BsPower />
        </span>{" "}
        Logout
      </button>
    </NavContainer>
  );
};

export default Navbar;
