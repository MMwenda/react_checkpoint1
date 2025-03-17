import './App.css';
import { Card } from 'react-bootstrap';
import Image from './Image';
import Name from './Name';  
import Price from './Price';
import Description from './Description';
import { Rate, Material, Button} from './Mats';
import Hello from './Hello';

function App() {
  const myName = null;

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Card className="w-50 border-5 bg-danger bg-opacity-75 text-center">
        <Card.Body className="p-5">
          <Image />
          <Card.Text className="fs-1 mt-3"><Name /></Card.Text>
          <Card.Text className='fs-4 fw-bold text-secondary'><Material /></Card.Text>
          <Card.Text className="fw-light fs-3"><Description /></Card.Text>
          <Card.Text className="fs-4"><Price /></Card.Text>
          <Card.Text className="fs-4 text-warning"><Rate /></Card.Text>
          <Card.Link className="fs-4"><Button /></Card.Link>
        </Card.Body>
      </Card>

      <div className="mt-3">
        <Hello name={myName} />
      </div>
    </div>
  );
}

export default App;
