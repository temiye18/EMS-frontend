import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "react-toastify";
import { Button } from "ui";
import Container from "./styles";

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:5000/getEmployees")
      .then((res) => {
        if (res.data.Status === "Success") {
          setEmployees(res.data.Result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (!result) {
      return;
    }
    axios
      .delete(`http://localhost:5000/deleteEmployee/${id}`)
      .then((res) => {
        if (res.data.Status === "Success") {
          toast.success("Employee deleted successfully");
          window.location.reload(true);
        }
      })
      .catch((err) => {
        if (!err.response) {
          toast.error("Check your internet connection");
          return;
        }
        toast.error(err.response.data.Message);
      });
  };

  return (
    <Container>
      <div className="header">
        <Button variant="yellow" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </Button>
        <Link to="/admin/create" className="add--btn">
          <MdAddCircleOutline />
          <span>Add Employee</span>
        </Link>
      </div>

      <div className="table--container">
        <h2>All Employees</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td className="image">
                  <img
                    src={`http://localhost:5000/images/` + employee.image}
                    alt="employee_img"
                  />
                </td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.salary}</td>
                <td className="action--btn">
                  <Button
                    onClick={() =>
                      navigate("/admin/edit-employee/" + employee.id)
                    }
                  >
                    edit
                  </Button>
                  <Button
                    variant="yellow"
                    className="delete"
                    onClick={() => handleDelete(employee.id)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ManageEmployee;
