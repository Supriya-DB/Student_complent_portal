import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const navigate = useNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      alert(res.data.message);

if (res.data.user.email === "admin@gmail.com") {

  navigate("/admin");

} else {

  navigate("/dashboard");

}

console.log(res.data);

    } catch (error) {

      console.log(error.response.data);

    }

  };

  return (
    <div className="container">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

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
          Login
        </button>

      </form>
      <p>
        Don't have an account?
      </p>

<a href="/register">
  Register
</a>

    </div>
  );
}

export default Login;