import axios from 'axios';

/**
 * Perform actions with VAT code or data.
 */
class VatCheckService {
	BaseURL = process.env.REACT_APP_BASEURL;

	/**
	 * Query the API for VAT number details.
	 *
	 * @param {string} vat - A corresponding vat number to which to query from API.
	 * @param {function({})} callback - A callback function to pass data to the requester.
	 */
	getVatData(vat, callback) {
		axios
			.get(`${this.BaseURL}${vat.trim()}`)
			.then((r) => {
				callback(r.data);
			})
			.catch((error) => {
				callback(error);
			});
	}

	/**
	 * Check if provided VAT number is valid.
	 *
	 * @param { { CountryCode:string,
	 *   VATNumber:string,
	 *   RequestDate:string,
	 *   Valid:boolean,
	 *   Name:string,"Address":string,
	 *   name:string } } vat - Response object from VAT query.
	 * @returns {boolean} - True if VAT number is valid and if corresponds to a organisation.
	 */
	vatIsValid(vat) {
		return vat.Name !== '---' && vat.name !== 'Error' && vat.Name !== '';
	}
}

export default new VatCheckService();
