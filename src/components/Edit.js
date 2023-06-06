import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { userSubscribers } from "../data/data";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

import { Button, CardTitle, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";

const Edit = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [isReadonly, setIsReadonly] = useState(true);
  const [isUpdate, setIsUpdate] = useState("Edit");

  let history = useNavigate();

  let index = userSubscribers
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleUpdate = (e, isReadOnly, isUpdate) => {
    setIsReadonly(isReadOnly);

    e.preventDefault();

    let userSub = userSubscribers[index];
    userSub.userName = name;
    userSub.userEmail = email;
    userSub.userAddress = address;
    userSub.userPhoneNumber = phonenumber;

    if (isUpdate === "Edit") {
      toast("You can edit subscriber information", { type: "success" });
      setIsUpdate("Update");
    } else if (isUpdate === "Update") {
      history("/");
    }
  };

  //Delete functionality
  const handleDelete = (id) => {
    let index = userSubscribers
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    userSubscribers.splice(index, 1);
    toast("Item deleted", { type: "danger" });
    setTimeout(() => {
      history("/");
    }, 3000);
  };

  useEffect(() => {
    setName(localStorage.getItem("userName"));
    setEmail(localStorage.getItem("userEmail"));
    setAddress(localStorage.getItem("userAddress"));
    setphonenumber(localStorage.getItem("userPhoneNumber"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />

      <Form className="d-grip gap-2" style={{ margin: "10rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <CardTitle tag="h1" className="pb-2" style={{ color: "white" }}>
            User Edit:
          </CardTitle>
          <Form.Control
            type="text"
            placeholder="Enater Subscriber Name"
            readOnly={isReadonly}
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enater Subscriber E-mail"
            readOnly={isReadonly}
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enater Subscriber Address"
            readOnly={isReadonly}
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enater Subscriber Phone Number"
            readOnly={isReadonly}
            value={phonenumber}
            required
            onChange={(e) => setphonenumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          onClick={(e) => handleUpdate(e, false, isUpdate)}
          color="success"
        >
          {isUpdate}
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button color="danger" onClick={() => handleDelete(id)}>
          Delete{" "}
        </Button>
        &nbsp;&nbsp;
        <CardTitle tag="h3" className="mt-2" style={{ color: "white" }}>
          Please Click on Edit Button if you need to Update Info.
        </CardTitle>
      </Form>
    </>
  );
};

export default Edit;
