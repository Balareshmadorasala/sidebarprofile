import React, { useState } from "react";
import "./Sidebar.css"; // Import CSS file

const Sidebar = () => {
  const [email, setEmail] = useState("user@example.com");
  const [designation, setDesignation] = useState("Software Engineer");
  const [profileImg, setProfileImg] = useState(
    "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
  );
  const [editingField, setEditingField] = useState(null);

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const handleChange = (e, field) => {
    if (field === "email") setEmail(e.target.value);
    if (field === "designation") setDesignation(e.target.value);
    if (field === "profileImg") setProfileImg(e.target.value);
  };

  const handleBlur = () => {
    setEditingField(null);
  };

  return (
    <div className="sidebar">
      <div className="profile">
        {editingField === "profileImg" ? (
          <input
            type="text"
            value={profileImg}
            onChange={(e) => handleChange(e, "profileImg")}
            onBlur={handleBlur}
            className="editable-input"
            autoFocus
          />
        ) : (
          <img
            src={profileImg}
            alt="Profile"
            className="profile-img"
            onClick={() => handleEdit("profileImg")}
          />
        )}

        <div className="profile-info">
          {editingField === "email" ? (
            <input
              type="text"
              value={email}
              onChange={(e) => handleChange(e, "email")}
              onBlur={handleBlur}
              className="editable-input"
              autoFocus
            />
          ) : (
            <p className="email" onClick={() => handleEdit("email")}>
              {email}
            </p>
          )}

          {editingField === "designation" ? (
            <input
              type="text"
              value={designation}
              onChange={(e) => handleChange(e, "designation")}
              onBlur={handleBlur}
              className="editable-input"
              autoFocus
            />
          ) : (
            <p className="designation" onClick={() => handleEdit("designation")}>
              {designation}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
