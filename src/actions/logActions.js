import {
  getLogs,
  setLoading,
  addLog,
  deleteLog,
  setCurrent,
  clearFilter,
  clearCurrent,
  updateLog,
  searchLogs
} from './types';

import { handleAlert } from './alertsAction';
export const setTheCurrent = (log) => {
  return {
    type: setCurrent,
    payload: log
  };
};

export const setTheLogLoading = () => {
  return {
    type: setLoading
  };
};

export const getAllLogs = () => async (dispatch) => {
  try {
    dispatch(setTheLogLoading());
    const res = await fetch('https://it-logger-apis.herokuapp.com/api/logs');
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: getLogs, payload: data });
    } else {
      throw new Error('problem with fetching all logs');
    }
  } catch (error) {
    dispatch(handleAlert(error.message, 'red'));
  }
};
export const AddTheLog = (log) => async (dispatch) => {
  try {
    dispatch(setTheLogLoading());
    const res = await fetch('https://it-logger-apis.herokuapp.com/api/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      dispatch({ type: addLog, payload: data });
    } else {
      throw new Error('something wrong with request');
    }
  } catch (error) {
    dispatch(handleAlert(error.message, 'red'));
  }
};
export const clearTheCurrent = () => {
  return {
    type: clearCurrent
  };
};
export const updateTheLog = (log) => async (dispatch) => {
  try {
    dispatch(clearTheCurrent());

    dispatch(setTheLogLoading());
    const res = await fetch(
      `https://it-logger-apis.herokuapp.com/api/logs/${log._id}`,
      {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await res.json();

    if (res.ok) {
      dispatch({ type: updateLog, payload: data });
      dispatch(handleAlert('log updated successflly', 'green'));

      return true;
    }

    throw new Error(data);
  } catch (error) {
    dispatch(handleAlert(error.message, 'red'));

    return false;
  }
};
export const deleteTheLog = (id) => async (dispatch) => {
  try {
    dispatch(setTheLogLoading());
    const res = await fetch(
      `https://it-logger-apis.herokuapp.com/api/logs/${id}`,
      {
        method: 'DELETE'
      }
    );
    if (res.ok) {
      dispatch({ type: deleteLog, payload: id });
      dispatch(handleAlert('log deleted successflly', 'green'));
    } else {
      const data = await res.json();
      throw Error(data);
    }
  } catch (error) {
    dispatch(handleAlert(error.message, 'red'));
  }
};
export const searchTheLog = (text) => async (dispatch) => {
  try {
    dispatch(setTheLogLoading());
    // const res = await fetch(`/api/logs/search?q=${text}`);
    // const data = await res.json();
    if (text !== '') {
      dispatch({ type: searchLogs, payload: text });
    } else {
      dispatch({ type: clearFilter });
    }
  } catch (error) {
    dispatch(handleAlert(error.message, 'red'));
  }
};
