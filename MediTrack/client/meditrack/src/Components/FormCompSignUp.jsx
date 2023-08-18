import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router";
function FormComp(props) {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const info = {
      firstName: form.validationCustom01.value,
      lastName: form.validationCustom02.value,
      email: form.validationCustom03.value,
      password: form.validationCustom04.value,
    };
    axios.post("http://localhost:3001/user/signup", info).then((response) => {
      if (response.data === "Already exist") {
        return alert("User already exist");
      } else {
        setValidated(true);
        navigate("/home");
        return;
      }
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder={"Password"} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" size="md">
        Register
      </Button>
    </Form>
  );
}

export default FormComp;
