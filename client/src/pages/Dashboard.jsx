import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [complaints, setComplaints] = useState([]);

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // fetch complaints
  const fetchComplaints = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/complaints"
      );

      setComplaints(res.data);

    } catch (error) {

      console.log(error.response?.data || error.message);

    }

  };

  // submit complaint
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/complaints",
        formData
      );

      alert(res.data.message);

      setFormData({
        title: "",
        description: "",
        category: "",
      });

      fetchComplaints();

    } catch (error) {

      console.log(error.response?.data || error.message);

    }

  };

  useEffect(() => {

    fetchComplaints();

  }, []);

  return (
    <div className="container">

      <h1>Student Dashboard</h1>

      {/* FORM */}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Complaint Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit Complaint
        </button>

      </form>

      <hr />

      {/* COMPLAINTS */}

      <h2>My Complaints</h2>

      {
        complaints.map((complaint) => (

          <div
            key={complaint._id}
            className="complaint-card"
          >

            <h3>{complaint.title}</h3>

            <p>{complaint.description}</p>

            <p>
              <b>Category:</b> {complaint.category}
            </p>

            <p>
              <b>Status:</b> {complaint.status}
            </p>

          </div>

        ))
      }

    </div>
  );
}

export default Dashboard;