import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./Landing.module.css";
import ButtonComp from "../../Components/Button";
import ModalComp from "../../Components/ModalComp";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
export default function Landing() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const verifyLogin = (event) => {
    const loginInfo = {
      email: document.querySelector("#floatingInput").value,
      password: document.querySelector("#floatingPassword").value,
    };
    axios
      .post("http://localhost:3001/user/login", loginInfo)
      .then((response) => {
        if (response.data === "Ok") {
          localStorage.setItem("email", loginInfo.email);
          navigate("/home");
          return;
        } else {
          alert("No user found");
          return;
        }
      });
  };
  return (
    <div className={styles.total}>
      <h1>MediTrack</h1>

      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="Email" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <br></br>
      <ButtonComp
        name="Sign In"
        variant="primary"
        size="lg"
        event={() => verifyLogin()}
      ></ButtonComp>
      <br></br>
      <ButtonComp
        name="Sign Up"
        variant="secondary"
        size="lg"
        event={() => setModalShow(true)}
      ></ButtonComp>
      <ModalComp
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"Sign Up on MediTrack"}
        formType={"signUp"}
      />
    </div>
  );
}
