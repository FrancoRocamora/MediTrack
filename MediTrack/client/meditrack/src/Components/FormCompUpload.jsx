import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
function FormCompUpload(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault()
    const formData = new FormData(form)
    formData.set('doctorName', form.validationCustom01.value)
    formData.set('date', form.validationCustom02.value)
    formData.set('settedFileName', form.validationCustom04.value)
    axios.post('http://localhost:3001/files/upload', formData)
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Doctor Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Doctor Name"
            defaultValue="Dr. Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="Date"
            placeholder='asd'
            defaultValue='asd'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Select a file</Form.Label>
          <Form.Control type="file" placeholder="Email" name='file' required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid file.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>File Name</Form.Label>
          <Form.Control type="text" placeholder={"Doc.name"} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid file name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" size='md'>Upload</Button>
    </Form>
  );
}

export default FormCompUpload;