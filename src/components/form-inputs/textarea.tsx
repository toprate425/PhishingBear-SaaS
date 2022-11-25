import React from 'react';
import PropTypes from 'prop-types'

const TextArea = ({ label, placeholder, name, row, value, className = '' }) => {
  return (
    <div className="form-group mb-3">
      <label className="form-label mb-0  fs-4">{label}</label>
      <textarea
        name={name}
        value={value}
        className={`form-control ps-3 ${className}`}
        rows={row}
        placeholder={placeholder} />
    </div>
  )
}

TextArea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  row: PropTypes.string,
};

export default TextArea;