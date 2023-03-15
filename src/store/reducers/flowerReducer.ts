import * as actionTypes from '../actionTypes/flowerTypes';

const reducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case actionTypes.FLOWER_TEST:
      return {
        ...state,
        test: 'radi',
      };
    default:
      return state;
  }
};

export default reducer;
