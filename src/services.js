import axios from "axios"

class VatCheckService {
  BaseURL = "https://vat.erply.com/numbers?vatNumber="
  /**
   * Query the API for VAT number details.
   *
   * @param {string} vat - A corresponding vat number to which to query from API.
   * @param {function({})} callback - A callback function to pass data to the requester.
   */
  getVatData(vat, callback) {
    axios.get(`${this.BaseURL}${vat}`).then(r => {
      callback(r.data)
    }).catch(error => {
      callback(error)
    })
  }

}

export default new VatCheckService()