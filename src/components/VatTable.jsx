import {Table} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types"

/**
 * Display table with the corresponding VAT data.
 *
 * @param {{data: {
 *   "CountryCode":string,
 *   "VATNumber":string,
 *   "RequestDate":string,
 *   "Valid":boolean,
 *   "Name":string,
 *   "Address":string,
 *   }}} props - Passed properties for component.
 * @returns {Element} - JSX element with VAT data.
 * @constructor
 */
const VatTable = (props) => {
  const {data, removeTable} = props

  return (
    <div className={"data-table"}>
      <div className={"table-header"}>
        <div>
          <h2>{`Result for "${data.CountryCode}${data.VATNumber}"`}</h2>
        </div>
        <div onClick={removeTable}>
          <i className="far fa-times-circle"/>
        </div>
      </div>
      <hr/>
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
          <td>{data.Valid === true ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td className={"location-row"}>
            <div>{data.Address}</div>
            <div>
              <a href={`https://www.google.com/maps/place/${data.Address}/`} target="_blank" rel="noopener noreferrer">
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

VatTable.propTypes = {
  data: PropTypes.object.isRequired,
  removeTable: PropTypes.func.isRequired
}

export default VatTable