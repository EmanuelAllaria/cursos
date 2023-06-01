import React from 'react';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type} alert-dismissible`} role="alert">
      <div>{message}</div>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;