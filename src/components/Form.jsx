import React from "react";
import uploadIcon from "../images/icon-upload.svg";

export default function Form({ onSubmitForm }) {
  const [formData, setFormData] = React.useState({
    avatar: null,
    fullName: "",
    email: "",
    github: "",
  });

  const [avatarPreview, setAvatarPreview] = React.useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
      setAvatarPreview(URL.createObjectURL(file));
    }
  }

  function handleRemoveImage() {
    setFormData({ ...formData, avatar: null });
    setAvatarPreview(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitForm(formData);
  }

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <label className="avatar-label">
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="avatar-input"
          id="avatarUpload"
        />

        {avatarPreview ? (
          <div className="avatar-preview-wrapper">
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className="avatar-preview"
            />
            <div className="avatar-buttons">
              <button type="button" onClick={handleRemoveImage}>
                Remove
              </button>
              <button
                type="button"
                onClick={() => document.getElementById("avatarUpload").click()}>
                Change
              </button>
            </div>
          </div>
        ) : (
          <div className="avatar-placeholder">
            <img
              src={uploadIcon}
              alt="Upload Icon"
              className="upload-icon-img"
            />
            <p className="upload-instruction">
              Drag and drop or click to upload
            </p>
          </div>
        )}
      </label>
      <p className="form-subtitle">Upload your photo (JPG or PNG, max 500KB)</p>

      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email Address
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        GitHub Username
        <input
          type="text"
          name="github"
          placeholder="GitHub Username"
          value={formData.github}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Generate My Ticket</button>
    </form>
  );
}
