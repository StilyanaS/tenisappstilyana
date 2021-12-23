import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Card style={{ width: "18" }}>
      <Card.Img variant="top"  />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Image src={item.image} alt='' fluid className='imageWidth'/>
        <Card.Text>
          {item.description}
          <br /><strong>Precio: {item.price}</strong>
        </Card.Text>
        <Button variant="dark" ><Link to={`/item/${item.id}`} className='btn-color'>Comprar</Link></Button>
      </Card.Body>
    </Card>
  );
};

export default Item
