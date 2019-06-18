/* Action Types */
export const CHANGE_DATE = 'CHANGE_DATE';

/* Action Creators */
export const changeDate = selectedDate => {
  return { type: CHANGE_DATE, selectedDate };
}

/* Initial State */
const INITIAL_STATE = {
  selectedDate: new Date(),
};

/* Reducer */
export default function reducer(state = INITIAL_STATE, action) {

  const { selectedDate, type } = action;

  switch(type) {
    case CHANGE_DATE:
      return {
        ...state,
        selectedDate,
      };
    default:
      return state;
  }

}
