import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Logo } from "assets/images";
import axios from "axios";
import { Button } from "ui";
import { toast } from "react-toastify";
import Main from "./styles";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const employeeIsAuth = localStorage.getItem("employeePermit");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getEmployee/${id}`)
      .then((res) => {
        setEmployee(res.data.Result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    if (employeeIsAuth === null) {
      localStorage.removeItem("employeePermit");
      localStorage.removeItem("adminPermit");
      localStorage.removeItem("user");
      navigate("/");
    }
  }, [employeeIsAuth, navigate]);

  if (employeeIsAuth === null) {
    return null;
  }

  const handleLogout = () => {
    const result = window.confirm("Are you sure you want to logout?");

    if (!result) {
      return;
    }
    localStorage.removeItem("employeePermit");
    toast.success("Logout successful");
    navigate("/");
  };

  return (
    <Main>
      <header>
        <div className="container">
          <nav>
            <img src={Logo} alt="logo" />
            <Button onClick={handleLogout}>Logout</Button>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="employee--card">
          <div className="header"></div>
          <img
            src={`http://localhost:5000/images/${employee.image}`}
            alt="employee"
          />
          <div className="body">
            <h2>Your details</h2>
            <p>
              <span>Name:</span> {employee.name}
            </p>
            <p>
              <span>Email:</span> {employee.email}
            </p>
            <p>
              <span>Salary:</span> ${employee.salary}
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default EmployeeDetail;
