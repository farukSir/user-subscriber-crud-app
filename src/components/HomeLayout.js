import React, { useState } from "react";
import { userSubscribers } from "../data/data";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Container,
  Button,
  Col,
  Row,
  Table,
  InputGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import "../App.css";

const HomeLayout = () => {
  const handleEdit = (id, name, mail, address, phonenumber) => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", mail);
    localStorage.setItem("userAddress", address);
    localStorage.setItem("userPhoneNumber", phonenumber);
    localStorage.setItem("id", id);
  };

  const [search, setSearch] = useState("");
  const titleApp = "Subscribers Record Managing Application";
  const addNewSub = "Add new subscriber";

  return (
    <Container className="pt-5 text-center">
      <Row>
        <Col md={6} className="offset-md-3">
          <Card color="warning">
            <CardBody className="box">
              <h3 className="text-uppercase text-center">{titleApp}</h3>
            </CardBody>
          </Card>
        </Col>
        <Col className="pt-5">
          <Link to="/create">
            <Button color="warning" outline>
              {addNewSub}
            </Button>
          </Link>
        </Col>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Subscriber Name..."
            />
          </InputGroup>
        </Form>
      </Row>

      <Row>
        <Card body className="my-2">
          <Table bordered>
            <thead>
              <tr>
                <th>Subscriber Name</th>
                <th>Subscriber E-mail</th>
                <th>Subscriber Address</th>
                <th>Subscriber Phone-Number</th>
              </tr>
            </thead>
            <tbody>
              {userSubscribers && userSubscribers.length > 0
                ? userSubscribers
                    .filter(
                      (item) =>
                        item.userAddress.includes(search) ||
                        item.userName.includes(search) ||
                        item.userEmail.includes(search) ||
                        item.userPhoneNumber.includes(search)
                    )
                    .map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {" "}
                            <Link to={"/edit"}>
                              <a
                                href={"/edit"}
                                onClick={() =>
                                  handleEdit(
                                    item.id,
                                    item.userName,
                                    item.userEmail,
                                    item.userAddress,
                                    item.userPhoneNumber
                                  )
                                }
                              >
                                {item.userName}
                              </a>
                            </Link>
                          </td>
                          <td>{item.userEmail}</td>
                          <td>{item.userAddress}</td>
                          <td>{item.userPhoneNumber}</td>
                        </tr>
                      );
                    })
                : "No Data Found"}
            </tbody>
          </Table>
        </Card>
      </Row>
    </Container>
  );
};

export default HomeLayout;
