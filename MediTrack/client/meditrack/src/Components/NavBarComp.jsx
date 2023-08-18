import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router';

function NavBarComp() {
  const navigate = useNavigate()
  const redirect = (e) => {
    switch(e.target.id){
      case 'home':
         navigate('/home')
         break;
      case 'medicalRecords':
         navigate('/medicalrecords')
         break;
      case 'addRecord': 
         alert('No addRecords route yet')
         break;
      default: 
         alert('not found')
        break;
  
    }
  }
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link id={'home'} onClick={(e) => redirect(e)} href="">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id={'medicalRecords'} eventKey="link-1" onClick={(e) => redirect(e)}>My Medical Records</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id={'addRecord'} onClick={(e) => redirect(e)} eventKey="link-2">Add medical record</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBarComp;