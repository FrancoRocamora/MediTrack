import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './Landing.module.css'
import ButtonComp from '../../Components/Button';
import ModalComp from '../../Components/ModalComp';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export default function Landing() {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate()
    const nav = () => {
        return navigate('/home')
    }
  return (
    <div className = {styles.total}>
        <h1>MediTrack</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Email" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <br></br>
      <ButtonComp name='Sign In' variant='primary' size='lg' event={() => nav()}></ButtonComp>
      <br></br>
      <ButtonComp name='Sign Up' variant='secondary' size='lg' event={() => setModalShow(true)}></ButtonComp>
      <ModalComp
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={'Sign Up on MediTrack'}
        formType={'signUp'}
      />
    </div>
  );
}


