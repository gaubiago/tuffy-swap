import React from 'react';

const ErrorMsg = ({ hidden, msg }) => {
  return (
    <div className={'error-msg ' + (hidden ? '' : 'error-msg-active')}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='form-icon'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorMsg;
