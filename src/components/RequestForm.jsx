import React from "react";
import VatCheckService from "../services";
import PropTypes from "prop-types"
import RequestError from "./RequestError";

/**
 * Form for requesting VAT data from the API.
 *
 * @param {{receivedData: function({})}} props - Passed properties to the component.
 * @constructor
 */
const RequestForm = (props) => {
  const {receivedData} = props;
  const [vat, setVat] = React.useState("")
  const [error, setError] = React.useState(null)

  /**
   * Validate VAT data and pass it to parent, using callback.
   *
   * @param {{}} e - event from form submission.
   */
  const passData = (e) => {
    e.preventDefault()

    VatCheckService.getVatData(vat, (vatData) => {
      if (VatCheckService.vatIsValid(vatData)) {
        setError(null)
        receivedData(vatData)
      } else {
        receivedData(null)
        setError("Invalid VAT Number")
      }
    })
  }

  return (
    <div className={"request-form"}>
      <form onSubmit={event => {
        passData(event)
      }}>
        <input onChange={event => setVat(event.target.value)} placeholder={"VAT number lookup"}/>
        <button type={"submit"}>Search</button>
      </form>
      {error != null ? <RequestError removeError={() => setError(null)} error={error}/> : null}
    </div>
  );
}

RequestForm.propTypes = {
  receivedData: PropTypes.object
}

export default RequestForm