import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Restock = ({ setProducts }) => {
	const [restockLink, setRestockLink] = useState('');

	const handleRestockLinkChange = (event) => {
		setRestockLink(event.target.value);
	};

	const handleRestockSubmit = async (event) => {
		console.log('Restocking');
		// Todo:
		// Prevent the default form behavior by using the `preventDefault` function present in the`event` object
		event.preventDefault();
		// Get the products data from the `restockLink` using `axios.get`. Since this is an asynchronous operation, use the `await` keyword in front of it. Save the result in the variable `productData`
 		try{
			const productData=await axios.get(restockLink);
			console.log(productData.data.data);

			// Map over `productData.data.data`, select only the `Name`, `Country`,`Cost` and `inStock` properties from each item's `attributes` property, and return an object containing those 4 properties. Store the result in the `restockedProducts` variable
			const restockedProducts=productData.data.data.map((item)=>{
				console.log(item);
				console.log(item.attributes); 
				/* Strapi call From Postman , no attributes field from Strapi , so extract Name , Country, Cost,inStock directly from item.
				"data": {
					"id": 14,
					"documentId": "dv47xapaoebi3np6y1fja8p6",
					"Name": "Avocado2",
					"Country": "Mexico",
					"Cost": 4,
					"inStock": 15,
					"createdAt": "2025-04-01T15:23:15.597Z",
					"updatedAt": "2025-04-01T15:23:15.597Z",
					"publishedAt": "2025-04-01T15:23:15.603Z"
				},*/
				const { Name, Country, Cost, inStock }=item;
				return { Name, Country, Cost, inStock };
			});
			// Set the state products using the function `setProducts` with the parameter `restockedProducts`.
			setProducts(restockedProducts);
		}catch(error){
			console.error("Response Error:",error);
		}
	};

	return (
		<Form
			onSubmit={handleRestockSubmit}
			className="mt-3 d-flex flex-row items-center justify-center "
		>
			<Form.Control
				value={restockLink}
				onChange={handleRestockLinkChange}
				className="w-50"
			/>
			<Button type="submit" className="w-10 ms-3">
				Restock Items
			</Button>
		</Form>
	);
};

export default Restock;
