import React from "react";
import PropTypes from "prop-types"

/**
 * Display error message.
 *
 * @param {{error: string, removeError: function()}} props - Injected properties for component.
 * @returns {*}
 * @constructor
 */
const RequestError = (props) => {
  let {error, removeError} = props

  return (
    <div className={"error"}>
      <div className={"error-text"}>{error}</div>
      <div onClick={removeError} className={"close-btn"}><i className="far fa-times-circle"/>
      </div>
    </div>
  )
}

RequestError.propTypes = {
  error: PropTypes.string.isRequired,
  removeError: PropTypes.func.isRequired,
}

export default RequestError