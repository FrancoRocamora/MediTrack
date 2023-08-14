import Button from 'react-bootstrap/Button';

function ButtonComp(props) {
  return (
    <div className="d-grid gap-2">
      <Button variant={props.variant} size={props.size} onClick={props.event}>
        {props.name}
      </Button>
    </div>
  );
}

export default ButtonComp;