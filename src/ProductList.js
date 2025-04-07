import React from 'react';
import { Button, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const ProductList = ({ products, addToCart }) => {
	const photos = ['apple.png', 'orange.png', 'beans.png', 'cabbage.png'];

	return (
		<ListGroup>
			{products.map((item, index) => (
				<ListGroupItem
					key={index}
					className="d-flex align-items-center justify-content-between"
				>
					<Image src={`https://picsum.photos/id/${index+110}/50/50`} width={50} roundedCircle />
					<div className="ml-3">
						<strong>{item.Name}</strong>: ${item.Cost} -{' '}
						<small>
							{item.quantity ? item.inStock - item.quantity : item.inStock} in
							stock
						</small>
					</div>
					<Button variant="primary" onClick={() => addToCart(item)}>
						Add to Cart
					</Button>
				</ListGroupItem>
			))}
		</ListGroup>
	);
};

export default ProductList;
