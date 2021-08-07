import {
  getTechs,
  addTech,
  deleteTech,
  setTechLoading,
  removeLoading
} from '../actions/types';

const initialState = {
  techs: null,
  loading: true,
  error: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getTechs:
      return { ...state, techs: payload, loading: false };
    case setTechLoading:
      return { ...state, loading: true };
    case removeLoading:
      return { ...state, loading: false };
    case deleteTech:
      return {
        ...state,
        loading: false,
        techs: state.techs.filter((tech) => tech._id !== payload)
      };

    case addTech:
      return { ...state, techs: [...state.techs, payload], loading: false };
    default:
      return state;
  }
};
export default reducer;
