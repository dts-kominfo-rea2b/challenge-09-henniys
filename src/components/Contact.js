// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div className="card">
      <div className="image-contact">
        <img src={photo} className="photo-contact" alt="avatar" />
      </div>
      <div className="data-contact">
        <h1 className="name">{name}</h1>
        <h2 className="phone">{phone}</h2>
        <h3 className="email">{email}</h3>
      </div>
    </div>
  );
};

export default Contact;
