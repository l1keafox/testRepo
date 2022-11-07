import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "@mui/icons-material/";
import "./contact.css";

function Contact() {
  const form = useRef();
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  // TODO: Create a password variable and a function "setPassword" using useState
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // If successful, we want to clear out the input after registration.
    setName("");
    // TODO: Set the password back to an empty string after the user clicks submit
    setMessage("");
    setEmail("");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="contactContainer">
      <h1 className="contactHeader">Contact</h1>
      <Container xs={12} sx={{ paddingBottom: "10rem" }}>
        <h1 className="inputLabels">Send Me A Message!</h1>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <h2 className="inputLabels">Name</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <h2 className="inputLabels">Email</h2>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email Address"
          />
          <h2 className="inputLabels">Message</h2>
          <textarea
            name="message"
            value={message}
            onChange={handleInputChange}
            placeholder="Enter A Message"
          />
          <Button
            variant="contained"
            type="submit"
            value="Send"
            style={{
              backgroundColor: "white",
              color: "black",
              height: "3rem",
              marginTop: "25px",
              width: "25%",
              fontSize: "1.25rem",
            }}
            endIcon={<Send />}
          >
            Send
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
