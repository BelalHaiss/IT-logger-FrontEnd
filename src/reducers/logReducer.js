import {
  getLogs,
  setLoading,
  logsError,
  addLog,
  setCurrent,
  clearCurrent,
  updateLog,
  deleteLog,
  searchLogs,
  clearError,
  removeLoading,
  clearFilter
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: true,
  error: null,
  filtered: null
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case setLoading:
      return { ...state, loading: true };
    case removeLoading:
      return { ...state, loading: false };
    case deleteLog:
      return {
        ...state,
        logs: state.logs.filter((log) => action.payload !== log._id),
        loading: false
      };
    case addLog:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case getLogs:
      return { ...state, logs: action.payload, loading: false };

    case searchLogs:
      return {
        ...state,
        loading: false,
        filtered: state.logs.filter((log) => {
          const reText = new RegExp(`${action.payload}`, `gi`);
          return (
            log.message.match(reText) ||
            log.tech.firstName.match(reText) ||
            log.tech.lastName.match(reText)
          );
        })
      };
    case clearFilter:
      return { ...state, loading: false, filtered: null };
    case setCurrent:
      return { ...state, loading: false, current: action.payload };
    case clearCurrent:
      return { ...state, loading: false, current: null };
    case updateLog:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log._id === action.payload._id ? action.payload : log
        ),
        loading: false
      };

    case logsError:
      return { ...state, error: action.payload, loading: false };
    case clearError:
      return { ...state, error: null };
    default:
      return state;
  }
};
export default logReducer;
