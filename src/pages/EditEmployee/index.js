import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { Button } from "ui";
import { toast } from "react-toastify";
import Container from "./styles";

const EditEmployee = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    address: "",
    salary: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getEmployee/${id}`)
      .then((res) => {
        if (res.data.Status === "Success") {
          setFormValues((prevData) => ({
            ...prevData,
            name: res.data.Result[0].name,
            email: res.data.Result[0].email,
            address: res.data.Result[0].address,
            salary: res.data.Result[0].salary,
          }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (event) => {
    setFormValues((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:5000/update/${id}`, formValues)
      .then((res) => {
        if (res.data.Status === "Success") {
          toast.success("Employee updated successfully");
          navigate("/admin/manage-employees");
        }
      })
      .catch((error) => {
        if (!error.response) {
          toast.error("Check your internet connection");
          return;
        }
        toast.error(error.response.data.Message);
      });
  };
  return (
    <Container>
      <div className="header">
        <Button variant="yellow" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Update Employee</h2>

        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            autoComplete="new-password"
            readOnly
          />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            autoComplete="new-password"
          />
        </div>

        <div className="salary">
          <label htmlFor="salary">Salary</label>
          <input
            type="salary"
            name="salary"
            id="salary"
            value={formValues.salary}
            onChange={handleChange}
            placeholder="Enter your salary"
            required
            autoComplete="new-password"
          />
        </div>

        <div className="address">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formValues.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
            autoComplete="new-password"
          />
        </div>

        <Button>Update</Button>
      </form>
    </Container>
  );
};

export default EditEmployee;
