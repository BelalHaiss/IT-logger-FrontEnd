import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layouts/Preloader';
import { connect } from 'react-redux';
import { getAllLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading, filtered }, getAllLogs }) => {
  useEffect(() => {
    getAllLogs();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Preloader />;
  }
  return (
    <ul id='allLogs' className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && filtered
        ? filtered?.map((log) => <LogItem log={log} key={log._id} />)
        : logs?.map((log) => <LogItem log={log} key={log._id} />)}
      {!loading &&
        (filtered || logs) &&
        (filtered?.length === 0 || logs?.length === 0) && (
          <h5 className='center-align'> No Logs </h5>
        )}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  log: state.log
});

export default connect(mapStateToProps, { getAllLogs })(Logs);
