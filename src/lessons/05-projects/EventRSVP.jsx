import React, { useState } from "react";

export function EventRSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendees: 1,
    dietaryPreferences: "",
    additionalGuests: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || formData.attendees < 1) {
      return;
    }
    
    setSubmittedData({ ...formData });
  };

  const styles = {
    container: {
      maxWidth: "550px",
      margin: "40px auto",
      padding: "40px",
      backgroundColor: "#f5f5f5",
      borderRadius: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "30px",
      marginTop: "0",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      color: "#555",
      marginBottom: "8px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "white",
      boxSizing: "border-box",
      outline: "none",
      fontFamily: "inherit",
      color: "black",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#555",
    },
    checkbox: {
      width: "18px",
      height: "18px",
      cursor: "pointer",
      marginRight: "8px",
    },
    button: {
      width: "100%",
      padding: "14px",
      fontSize: "16px",
      fontWeight: "600",
      color: "white",
      backgroundColor: "#6366f1",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
    confirmation: {
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
      border: "1px solid #e5e5e5",
    },
    confirmationText: {
      fontSize: "14px",
      color: "#555",
      margin: "8px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Event RSVP Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Number of Attendees:</label>
          <input
            type="number"
            name="attendees"
            placeholder="Number of Attendees"
            value={formData.attendees}
            onChange={handleChange}
            style={styles.input}
            min="1"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Dietary Preferences:</label>
          <input
            type="text"
            name="dietaryPreferences"
            placeholder="Dietary Preferences (Optional)"
            value={formData.dietaryPreferences}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <label style={styles.checkboxContainer}>
          <input
            type="checkbox"
            name="additionalGuests"
            checked={formData.additionalGuests}
            onChange={handleChange}
            style={styles.checkbox}
          />
          Bringing additional guests?
        </label>

        <button type="submit" style={styles.button}>
          Submit RSVP
        </button>
      </form>

      {submittedData && (
        <div style={styles.confirmation}>
          <p style={styles.confirmationText}>RSVP Submitted!</p>
          <p style={styles.confirmationText}>Name: {submittedData.name}</p>
          <p style={styles.confirmationText}>Email: {submittedData.email}</p>
          <p style={styles.confirmationText}>Number of attendees: {submittedData.attendees}</p>
          <p style={styles.confirmationText}>Dietary preferences: {submittedData.dietaryPreferences || "None"}</p>
          <p style={styles.confirmationText}>Bringing additional guests: {submittedData.additionalGuests ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}