import React from 'react'
import PropTypes from 'prop-types'

const InputField = ({ name, type, onChange, value, label, placeholder, required = false, discription, className = '', error }) => {
  return (
    <div className="form-group mb-3">
      {label && <label className="form-label mb-0 fs-4">{label} {required && <span className="text-danger">*</span>}</label>}
      <input
        type={type ? type : 'text'}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`form-control ps-3 ${className}`}
      />
      {discription && <small className="form-text text-muted">{discription}</small>}

      {error && <span className="text-danger fs-4">{error}</span>}
    </div>
  )
}
InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  discription: PropTypes.string,
  error: PropTypes.any,
  required: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default InputField