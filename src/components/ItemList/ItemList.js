import Item from "../Item/Item";
import "./ItemList.css";
import ListGroup from 'react-bootstrap/ListGroup';

const ItemList = ({ newData }) => {

  return (
    <div className='list-container'>
      <ListGroup horizontal='xl' className="my-2">
        {newData.map((item) => (
          <ListGroup.Item key={item.id}>
            <Item item={item} />
            </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default ItemList;
