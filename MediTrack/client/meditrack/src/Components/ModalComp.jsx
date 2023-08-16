import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormComp from './FormCompSignUp';
import FormCompUpload from './FormCompUpload';
export default function ModalComp(props) {
  const election = (newForm) => {
    switch (newForm) {
      case 'signUp' : return <FormComp></FormComp>
      case 'upload' : return <FormCompUpload></FormCompUpload>
      default: return <></>
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {election(props.formType)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

