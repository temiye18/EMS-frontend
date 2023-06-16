import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "ui";
import { Logo } from "assets/images";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import LoginSection from "./styles";

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [userType, setUserType] = useState("");
  const [type, setType] = useState("password");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userType === "admin") {
      axios
        .post("http://localhost:5000/login", formData)
        .then((res) => {
          if (res.data.Status === "Success") {
            setErrorMsg("");
            const user = {
              id: res.data.Result.id,
              name: res.data.Result.name,
              email: res.data.Result.email,
              gender: res.data.Result.gender,
              role: res.data.Result.role,
            };
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("adminPermit", res.data.permit);
            toast.success("Login Successful");
            navigate("/admin");
          }
        })
        .catch((err) => {
          if (!err) {
            setErrorMsg("Check your internet connection");
            toast.error("Check your internet connection");
            return;
          }
          setErrorMsg(err.response.data.Message);
          toast.error(err.response.data.Message);
        });
    } else {
      axios
        .post("http://localhost:5000/employeeLogin", formData)
        .then((res) => {
          if (res.data.Status === "Success") {
            setErrorMsg("");
            localStorage.setItem("employeePermit", res.data.permit);
            const id = res.data.id;
            toast.success("Login Successful");
            navigate(`/employee-details/${id}`);
          }
        })
        .catch((err) => {
          if (!err.response) {
            toast.error("Check your internet connection");
            return;
          }
          setErrorMsg(err.response.data.Message);
          toast.error(err.response.data.Message);
        });
    }
  };
  return (
    <LoginSection>
      <div className="form--container">
        <img src={Logo} alt="logo" />

        {showForm ? (
          <form onSubmit={handleSubmit}>
            <div className="header">
              <Button
                variant="yellow"
                onClick={() => {
                  setFormData({ email: "", password: "" });
                  setShowForm(false);
                  setErrorMsg("");
                }}
              >
                <IoArrowBack />
              </Button>
            </div>
            {errorMsg && <p className="error--text">{errorMsg}</p>}
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter your email"
                autoComplete="new-password"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type={type}
                name="password"
                id="password"
                onChange={handleChange}
                value={formData.password}
                placeholder="********"
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

            <Button className="login">Login</Button>
          </form>
        ) : (
          <div className="dialogue--box">
            <h2>Login As</h2>

            <Button
              onClick={() => {
                setShowForm(true);
                setUserType("employee");
              }}
              type="button"
              className="employee--btn"
            >
              Employee
            </Button>
            <Button
              onClick={() => {
                setShowForm(true);
                setUserType("admin");
              }}
              type="button"
              className="admin--btn"
              variant="yellow"
            >
              Admin
            </Button>
          </div>
        )}
      </div>

      <div className="banner">
        <p>Unleash the Power of Seamless Efficiency for Your Team.</p>
      </div>
    </LoginSection>
  );
};

export default Login;
