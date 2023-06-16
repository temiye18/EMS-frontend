import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./styles";

const Dashboard = () => {
  const [adminCount, setAdminCount] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [sumOfSalary, setSumOfSalary] = useState("");
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    //  Get total number of admins
    axios
      .get("http://localhost:5000/adminCount")
      .then((res) => {
        if (res.data.Status === "Success") {
          const { admin } = res.data.Result[0];
          setAdminCount(admin);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Get total number of employees

    axios
      .get("http://localhost:5000/employeeCount")
      .then((res) => {
        if (res.data.Status === "Success") {
          const { employee } = res.data.Result[0];
          setEmployeeCount(employee);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Get sum of salary for employees
    axios
      .get("http://localhost:5000/sumSalary")
      .then((res) => {
        if (res.data.Status === "Success") {
          const { sumOfSalary } = res.data.Result[0];
          setSumOfSalary(sumOfSalary);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Get all admins

    axios
      .get("http://localhost:5000/getAdmins")
      .then((res) => {
        if (res.data.Status === "Success") {
          const data = res.data.Result.map((item) => {
            return {
              id: item.id,
              name: item.name,
              email: item.email,
              role: item.role,
              gender: item.gender,
            };
          });
          setAdmins(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <div className="card--box">
        <div className="box--item">
          <h3>Admin</h3>
          <hr />
          <h5>
            Total: <span>{adminCount}</span>
          </h5>
        </div>
        <div className="box--item">
          <h3>Employee</h3>
          <hr />
          <h5>
            Total: <span>{employeeCount}</span>
          </h5>
        </div>
        <div className="box--item">
          <h3>Salary</h3>
          <hr />
          <h5>
            Total: <span>${sumOfSalary}</span>
          </h5>
        </div>
      </div>

      <div className="admins--table">
        <h2>List of Admins</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Dashboard;
