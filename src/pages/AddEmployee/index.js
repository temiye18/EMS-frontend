import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { Button } from "ui";
import Container from "./styles";
import { toast } from "react-toastify";

const AddEmployee = () => {
  const [type, setType] = useState("password");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    salary: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.name === "image") {
      setFormValues((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.files[0],
      }));
    } else {
      setFormValues((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formdata = new FormData();

    formdata.append("name", formValues.name);
    formdata.append("email", formValues.email);
    formdata.append("password", formValues.password);
    formdata.append("salary", formValues.salary);
    formdata.append("address", formValues.address);
    formdata.append("image", formValues.image);

    axios
      .post("http://localhost:5000/create", formdata)
      .then((res) => {
        if (res.data.Status === "Success") {
          toast.success("Employee Added Successfully");
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
        <h2>Add Employee</h2>

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

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type={type}
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="********"
            required
          />
          {type === "password" ? (
            <AiOutlineEye onClick={() => setType("text")} className="eye" />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setType("password")}
              className="eye"
            />
          )}
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

        <div className="image">
          <label htmlFor="image" className="custom--file--input">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            required
          />
          <p>{formValues?.image?.name}</p>
        </div>

        <Button>Create</Button>
      </form>
    </Container>
  );
};

export default AddEmployee;
