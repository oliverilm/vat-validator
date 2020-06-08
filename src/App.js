import React from 'react';
import './App.css';
import VatCheckService from "./services";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Table} from "react-bootstrap";


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
          <RequestForm recievedData={getData} />
          {vatData !== null ? <VatTable data={vatData} /> : null}
      </Container>
    </div>
  );
}


/**
 * @param {{}} props - Passed properties to the component.
 * @constructor
 */
const RequestForm = (props) => {
  const { recievedData } = props;
  const [ vat, setVat ] = React.useState("")
  const [ error, setError ] = React.useState(null)

  const passData = (e) => {
    e.preventDefault()

    VatCheckService.getVatData(vat, (vatData) => {
      if (vatData.name === "Error") {
        recievedData(null)
        setError(vatData)
      } else {
        setError(null)
        recievedData(vatData)
      }
    })
  }

  return (
    <div className={"request-form"}>
      <form onSubmit={event => {passData(event)}}>
        <input onChange={event => setVat(event.target.value)} placeholder={"VAT number"}/>
        <button type={"submit"}>Submit</button>
      </form>
      {error != null ? <RequestError error={error} /> : null}
    </div>
  );
}

const RequestError = (props) => {
  const { error } = props

  return (
    <div className={"error"}>
      {error.message}
    </div>
  )
}

/**
 *
 * @param {
 *   {
 *   "CountryCode":string,
 *   "VATNumber":string,
 *   "RequestDate":string,
 *   "Valid":boolean,
 *   "Name":string,"Address":string
 *   }
 * } props - Passed properties for component.
 * @returns {DOMElement}
 * @constructor
 */
const VatTable = (props) => {
  const { data } = props

  return (
    <div className={"data-table"}>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th colSpan={2}>{data.Name}</th>
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
                <i className="fa fa-map-marker" aria-hidden="true" />
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
