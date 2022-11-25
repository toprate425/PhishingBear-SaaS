import React from 'react'
import PropTypes from 'prop-types';

import Loading from '../loading';

const Button = ({ name, loading, type, key, className, children, onClick }: any) => {
  return (
    <>
      <button
        type={type ? type : 'button'}
        key={key}
        className={`btn btn-primary  ${className}`}
        disabled={loading}
        onClick={onClick}>
        {children}{(loading ? <Loading /> : name)}
        {/* <i className={icon}></i>{name} */}
      </button>
    </>
  )
}
Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
export default Button