import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchTheLog } from '../../actions/logActions';
import { handleAlert } from '../../actions/alertsAction';
const SearchBar = ({ handleAlert, searchTheLog, log: { logs, loading } }) => {
  const text = useRef('');

  const searchForLog = () => {
    if (!loading && logs !== null) {
      searchTheLog(text.current.value);
    } else {
      handleAlert('please wait while logs is loaded', 'orange');
    }
  };
  return (
    <nav className=' blue darken-4' style={{ marginBottom: '30px' }}>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              ref={text}
              placeholder='search for logs ...'
              type='search'
              onChange={searchForLog}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({ log: state.log });
export default connect(mapStateToProps, { handleAlert, searchTheLog })(
  SearchBar
);
