import React from 'react';

const Preloader = () => {
  return (
    <div className='progress' style={{ marginTop: '30vh' }}>
      <div className='indeterminate'></div>
    </div>
  );
};

export default Preloader;
