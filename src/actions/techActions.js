import { getTechs, addTech, deleteTech, setTechLoading } from './types';
import { handleAlert } from './alertsAction';

export const setTheLoading = () => ({
  type: setTechLoading
});

export const getTheTechs = () => async (dispatch) => {
  try {
    const res = await fetch('https://it-logger-apis.herokuapp.com/api/techs');
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: getTechs, payload: data });
    } else {
      throw Error('Something wrong with fetching Technicians data  ');
    }
  } catch (error) {
    dispatch(handleAlert(error.message, 'red'));
  }
};
export const deleteTheTechs = (id) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://it-logger-apis.herokuapp.com/api/techs/${id}`,
      { method: 'DELETE' }
    );
    if (res.ok) {
      dispatch({ type: deleteTech, payload: id });
      dispatch(handleAlert('technician deleted successflly', 'green'));
    } else {
      const data = await res.json();
      throw Error(data);
    }
  } catch (error) {
    dispatch(handleAlert(error.message, 'red'));
  }
};
export const addATech = (user) => async (dispatch) => {
  try {
    dispatch(setTheLoading());
    const res = await fetch('https://it-logger-apis.herokuapp.com/api/techs', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: addTech, payload: data });
      dispatch(handleAlert('technician addedd successflly', 'green'));
    } else {
      throw Error('Something goes wrong ');
    }
  } catch (error) {
    dispatch(handleAlert(error.message, 'red'));

    return false;
  }
};
