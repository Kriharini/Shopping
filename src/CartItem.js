import React from 'react';
import { Accordion ,Button} from 'react-bootstrap';

const CartItem = ({ item, index, deleteCartItem }) => {
	const handleItemClick = (index) => {
		deleteCartItem(index);
	};
	return (
<Accordion.Item>
	<div className="d-flex justify-content-between align-items-center">
<Accordion.Header>
	{item.Name}
	
</Accordion.Header>
<Button onClick={() => handleItemClick(index)}>Delete</Button>
</div>
<Accordion.Body>
	{item.Cost} from {item.Country}
</Accordion.Body>
</Accordion.Item>

	/* 	<Accordion.Item eventKey={index + 1}>
			<Accordion.Header>{item.Name}</Accordion.Header>
			<Accordion.Body onClick={() => handleItemClick(index)}>
				$ {item.Cost} from {item.Country}
			</Accordion.Body>
		</Accordion.Item> */
	);
};

export default CartItem;
