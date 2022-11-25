import React from 'react'
import PropTypes from 'prop-types';

const Alert = ({ alerts, className }) => {
  console.log('alertssss', alerts);

  return (
    <>
      {alerts?.response?.data?.error === true ?
        <div className={className ? className : 'alert alert-danger fs-5'} >
          {alerts?.message ? alerts?.message : alerts.error}
        </div>
        :
        <div className={className ? className : 'alert alert-success fs-5'} >
          {alerts?.message && <span>{alerts?.message} </span>}
        </div>
      }
    </>
  )
}

Alert.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};
export default Alert
