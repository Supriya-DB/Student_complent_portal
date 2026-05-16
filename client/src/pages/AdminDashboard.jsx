import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const [complaints, setComplaints] = useState([]);

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

  // delete complaint
  const deleteComplaint = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/complaints/${id}`
      );

      alert("Complaint deleted");

      fetchComplaints();

    } catch (error) {

      console.log(error.response?.data || error.message);

    }

  };

  // update status
  const updateStatus = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/complaints/${id}`,
        {
          status: "Resolved",
        }
      );

      alert("Complaint resolved");

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

      <h1>Admin Dashboard</h1>

      <h2>All Complaints</h2>

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

            <button
              onClick={() => deleteComplaint(complaint._id)}
            >
              Delete
            </button>

            <button
              onClick={() => updateStatus(complaint._id)}
            >
              Mark Resolved
            </button>

          </div>

        ))
      }

    </div>
  );
}

export default AdminDashboard;