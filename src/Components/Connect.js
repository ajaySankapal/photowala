import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <>
      <span
        style={{
          display: "block",
          textAlign: "center",
          fontFamily: "Amiri",
          fontSize: "1.4rem",
          marginTop: "60px",
          // padding: "1.2rem",
        }}
      >
        Contact
      </span>
      <div id="connect">
        <div className="con-info">
          <Typography variant="subtitle">
            I can be reached on ajaysankapal638@gmail.com or you can write me
            here
          </Typography>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              placeholder="name"
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="email"
              type="text"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="message"
              type="text"
              id="message"
              name="message"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={handleSubmit}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Connect;
