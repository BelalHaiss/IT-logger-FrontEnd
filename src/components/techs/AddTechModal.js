import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { addATech } from '../../actions/techActions';

const AddTechModal = ({ addATech, error }) => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const onSubmit = async () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Please fill all the fields',
        classes: 'red',
        displayLength: 5000
      });
    } else {
      await addATech({ firstName, lastName });

      setfirstName('');
      setlastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              firstName
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Lastname
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.tech.error
});

export default connect(mapStateToProps, { addATech })(AddTechModal);
