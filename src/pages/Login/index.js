import { useState } from "react";
import { Logo } from "assets/images";
import { Button } from "ui";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import LoginSection from "./styles";

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState("password");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <LoginSection>
      <div className="form--container">
        <img src={Logo} alt="logo" />

        {showForm ? (
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter your email"
                autoComplete="off"
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

            <Button>Login</Button>
          </form>
        ) : (
          <div className="dialogue--box">
            <h2>Login As</h2>

            <Button
              onClick={() => setShowForm(true)}
              type="button"
              className="employee--btn"
            >
              Employee
            </Button>
            <Button
              onClick={() => setShowForm(true)}
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
