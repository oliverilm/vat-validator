import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import VatTable from './components/VatTable';
import RequestForm from './components/RequestForm';

/**
 * Main component for UI.
 *
 * @returns {Element} - Renders a dom element.
 * @class
 */
function App() {
	const [vatData, setVatData] = React.useState(null);

	/**
	 * Assign vat data to state.
	 *
	 * @param {{}} receivedVatData - Pulled VAT data from form submission.
	 */
	const getData = (receivedVatData) => {
		setVatData(receivedVatData);
	};

	return (
		<Container className="page-content" lg={10}>
			<RequestForm receivedData={getData} />
			{vatData !== null ? (
				<VatTable
					data={vatData}
					removeTable={() => {
						setVatData(null);
					}}
				/>
			) : null}
		</Container>
	);
}

export default App;
