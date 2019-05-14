import { createAction, handleActions } from 'redux-actions'

// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// **** 액션 생섬함수 정의
export const changeColor  = createAction( CHANGE_COLOR );
export const increment    = createAction( INCREMENT );
export const decrement    = createAction( DECREMENT );

// **** 초기상태 정의
const initialState = {
  color: 'red',
  number: 0,
};

// **** 리듀서 작성
export default handleActions({
  [CHANGE_COLOR]: (state, action) => ({
    ...state,
    color: action.payload,
  }),
  [INCREMENT]: (state, action) => ({
    ...state,
    number: state.number + 1,
  }),
  [DECREMENT]: (state, action) => ({
    ...state,
    number: state.number - 1,
  }),
}, initialState);
