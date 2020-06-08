import React from 'react';
import './App.css';
import VatCheckService from "./services";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from "react-bootstrap";


/**
 *
 * @returns {DOMElement} - Renders a dom element.
 * @constructor
 */
function App() {
  const [ vatData, setVatData ] = React.useState(null)

  /**
   * Assign vat data to state.
   *
   * @param {{}} receivedVatData
   */
  const getData = (receivedVatData) => {
    setVatData(receivedVatData)
  }

  return (
    <div className={"page-content"}>
      <Container >
          <RequestForm receivedData={getData} />
          {vatData !== null ? <VatTable data={vatData} /> : null}
      </Container>
    </div>
  );
}

/**
 * @param {{receivedData: function({})}} props - Passed properties to the component.
 * @constructor
 */
const RequestForm = (props) => {
  const { receivedData } = props;
  const [ vat, setVat ] = React.useState("")
  const [ error, setError ] = React.useState(null)

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
      <form onSubmit={event => {passData(event)}}>
        <input onChange={event => setVat(event.target.value)} placeholder={"VAT number"}/>
        <button type={"submit"}>Search</button>
      </form>
      {error != null ? <RequestError removeError={() => setError(null)} error={error} /> : null}
    </div>
  );
}


/**
 * Display error message.
 *
 * @param {{error: string, removeError: function()}} props - Injected properties for component.
 * @returns {*}
 * @constructor
 */
const RequestError = (props) => {
  let { error, removeError } = props

  return (
    /*<Alert className={"show-alert"} variant={"danger"}  onClose={removeError} dismissible><p>{error}</p></Alert>*/
    <div className={"error"}>
      <div className={"error-text"}>{error}</div>
      <div onClick={removeError} className={"close-btn"}><i className="far fa-times-circle"/>
      </div>
    </div>
  )
}

/**
 *
 * @param {{data: {
 *   "CountryCode":string,
 *   "VATNumber":string,
 *   "RequestDate":string,
 *   "Valid":boolean,
 *   "Name":string,
 *   "Address":string,
 *   }}} props - Passed properties for component.
 * @returns {DOMElement}
 * @constructor
 */
const VatTable = (props) => {
  const { data } = props

  return (
    <div className={"data-table"}>
      <h2 style={{color: "#34495e"}}>{`Result for "${data.CountryCode}${data.VATNumber}"`}</h2>
      <hr />
      <Table striped bordered hover>
        <thead>
        <tr>
          <th colSpan={2}><h3>{data.Name}</h3></th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Country</td>
            <td>{data.CountryCode}</td>
          </tr>
          <tr>
            <td>VAT</td>
            <td>{data.VATNumber}</td>
          </tr>
          <tr>
            <td>Valid</td>
            <td>{data.Valid === true ? "Yes": "No" }</td>
          </tr>
          <tr>
            <td>Address</td>
            <td className={"location-row"}>
              <div>{data.Address}</div>
              <div>
                <a href={`https://www.google.com/maps/place/${data.Address}/`} target="_blank"  rel="noopener noreferrer">
                <i className="fa fa-map-marker" aria-hidden="true" title={"View In Maps"}/>
                </a>
              </div>
            </td>
          </tr>
        </tbody>

      </Table>
    </div>
  );
}

export default App;
