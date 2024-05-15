import React, { useState } from "react";
import "./Dashboard.css"; 

const TableOfContents = () => {
  const users = [
    { id: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com", empId: "EMP001", bloodGroup: "A+" },
    { id: 2, name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", empId: "EMP002", bloodGroup: "B-" },
    { id: 3, name: "Alice Johnson", phone: "555-123-4567", email: "alice@example.com", empId: "EMP003", bloodGroup: "O+" },
    { id: 4, name: "Bob Johnson", phone: "555-123-4567", email: "bob@example.com", empId: "EMP004", bloodGroup: "AB+" },
    { id: 5, name: "Michael Smith", phone: "555-123-4567", email: "michael@example.com", empId: "EMP005", bloodGroup: "O-" },
    { id: 6, name: "Emma Watson", phone: "555-123-4567", email: "emma@example.com", empId: "EMP006", bloodGroup: "B+" },
    { id: 7, name: "David Lee", phone: "555-123-4567", email: "david@example.com", empId: "EMP007", bloodGroup: "A-" },
    { id: 8, name: "Sarah Parker", phone: "555-123-4567", email: "sarah@example.com", empId: "EMP008", bloodGroup: "AB-" },
    { id: 9, name: "Ryan Johnson", phone: "555-123-4567", email: "ryan@example.com", empId: "EMP009", bloodGroup: "O+" },
    { id: 10, name: "Olivia Brown", phone: "555-123-4567", email: "olivia@example.com", empId: "EMP010", bloodGroup: "B+" },
    { id: 11, name: "Matthew White", phone: "555-123-4567", email: "matthew@example.com", empId: "EMP011", bloodGroup: "A+" },
    { id: 12, name: "Sophia Lee", phone: "555-123-4567", email: "sophia@example.com", empId: "EMP012", bloodGroup: "AB+" },
    { id: 13, name: "Ethan Miller", phone: "555-123-4567", email: "ethan@example.com", empId: "EMP013", bloodGroup: "O-" },
    { id: 14, name: "Isabella Wilson", phone: "555-123-4567", email: "isabella@example.com", empId: "EMP014", bloodGroup: "B-" },
    { id: 15, name: "Mia Davis", phone: "555-123-4567", email: "mia@example.com", empId: "EMP015", bloodGroup: "A+" },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h1 style={{ marginBottom: "10px", fontSize: "20px" }}>Table of Contents</h1>
      <table style={{ borderSpacing: "10px", fontSize: "16px" }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Emp ID</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.empId}</td>
              <td>{user.bloodGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => {
  const [showTableOfContents, setShowTableOfContents] = useState(true);
  const [showDetailsDropdown, setShowDetailsDropdown] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserDetails = () => {
    const usersData = [
      { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", empId: "EMP001", bloodGroup: "A+", color: "#ff5733" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", empId: "EMP002", bloodGroup: "B-", color: "#33ff57" },
      { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "555-123-4567", empId: "EMP003", bloodGroup: "O+", color: "#5733ff" },
      { id: 4, name: "Bob Johnson", email: "bob@example.com", phone: "555-123-4567", empId: "EMP004", bloodGroup: "AB+", color: "#ff5733" },
      { id: 5, name: "Michael Smith", email: "michael@example.com", phone: "555-123-4567", empId: "EMP005", bloodGroup: "O-", color: "#33ff57" },
    ];

    setUserDetails(usersData);
    setShowTableOfContents(false);
  };

  const handleCloseDetails = () => {
    setUserDetails(null);
    setShowTableOfContents(true);
  };

  const handleDownloadDetails = () => {
    const filename = "user_details.txt";
    const data = JSON.stringify(userDetails, null, 2);
    const blob = new Blob([data], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button
          className="sidebar-button"
          onClick={() => setShowTableOfContents(!showTableOfContents)}
        >
          Dashboard
        </button>
        <div className="dropdown-container">
          <button
            className="sidebar-button"
            onClick={() => setShowDetailsDropdown(!showDetailsDropdown)}
          >
            Details
          </button>
          {showDetailsDropdown && (
            <div className="dropdown-content">
              <button
                className="dropdown-item"
                onClick={fetchUserDetails}
              >
                User Details
              </button>
              <button
                className="dropdown-item"
                onClick={handleDownloadDetails}
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="main-content">
        {showTableOfContents && <TableOfContents />}
        {userDetails && (
          <div className="card-container">
            {userDetails.map(user => (
              <div
                key={user.id}
                className="card"
                style={{ backgroundColor: user.color }}
              >
                <h2>{user.name}</h2>
                <p>ID: {user.id}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Emp ID: {user.empId}</p>
                <p>Blood Group: {user.bloodGroup}</p>
              </div>
            ))}
            <button onClick={handleCloseDetails}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
