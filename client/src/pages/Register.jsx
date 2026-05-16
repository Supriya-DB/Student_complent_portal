import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(res.data.message);
      navigate("/");

      console.log(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="container">

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>
      <p>
  Already have an account?
</p>

<a href="/">
  Login
</a>

    </div>
  );
}

export default Register;