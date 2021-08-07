import React from 'react';
import Moment from 'react-moment';

import { setTheCurrent } from '../../actions/logActions';
import { connect } from 'react-redux';

import EditLogModal from './EditLogModal';
import { deleteTheLog } from '../../actions/logActions';
const LogItem = ({ log, deleteTheLog, setTheCurrent }) => {
  const onDelete = () => {
    deleteTheLog(log._id);
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          onClick={() => setTheCurrent(log)}
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <EditLogModal />
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log._id} </span> last updated by{' '}
          {''}
          <span className='black-text'>
            {log.tech.firstName + ' ' + log.tech.lastName}
          </span>{' '}
          on <Moment parse='YYYY-MM-DD HH:mm'> {log.date} </Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons  grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTheLog, setTheCurrent })(LogItem);
