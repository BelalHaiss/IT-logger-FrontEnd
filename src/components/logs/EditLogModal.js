import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { updateTheLog } from '../../actions/logActions';
import TechList from '../techs/TechList';
const EditLogModal = ({ logUpdate, current, error }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  useEffect(() => {
    if (current) {
      setAttention(current.attention);
      setMessage(current.message);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = async () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Please fill the fields',
        classes: 'red',
        displayLength: 5000
      });
    } else {
      // eslint-disable-next-line
      const data = await logUpdate({
        message,
        tech,
        attention,
        date: new Date(),
        _id: current._id
      });

      setAttention(false);
      setMessage('');
      setTech('');
    }
  };
  return (
    <div id='edit-log-modal' className='modal'>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechList />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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
  current: state.log.current,
  error: state.log.error
});
const mapDispatchToProps = (dispatch) => {
  return {
    logUpdate: (data) => dispatch(updateTheLog(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditLogModal);
