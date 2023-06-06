import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { userSubscribers } from "../data/data";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, CardTitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let nameUser = name;
    let nameMail = email;
    let nameAdd = address;
    let numberPhone = phonenumber;

    //validation for checking empty fields
    if (name !== "" && email !== "" && address !== "" && phonenumber !== "") {
      userSubscribers.push({
        id: uniqueId,
        userName: nameUser,
        userEmail: nameMail,
        userAddress: nameAdd,
        userPhoneNumber: numberPhone,
      });
      toast("New Subscriber Added", { type: "success" });
      setTimeout(() => {
        history("/");
      }, 4000);
    } else {
      toast("Please Add Data", { type: "danger" });
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <Form className="d-grip gap-2" style={{ margin: "10rem" }}>
        <CardTitle tag="h1" className="pb-2" style={{ color: "white" }}>
          Add Info:
        </CardTitle>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enater Subscriber Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enater Subscriber E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enater Subscriber Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enater Subscriber Phone Number"
            required
            onChange={(e) => setphonenumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" onClick={(e) => handleSubmit(e)} color="success">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Add;
