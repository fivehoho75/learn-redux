import { createAction, handleActions } from 'redux-actions'

const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; // 나감

export const changeInput  = createAction( CHANGE_INPUT );
export const create       = createAction( CREATE );
export const enter        = createAction( ENTER );
export const leave        = createAction( LEAVE );

// **** 초기 상태 정의
const initialState = {
  input: '',
  list: [
    {
      id: 0,
      name: '홍길동',
      entered: true,
    },
    {
      id: 1,
      name: '콩쥐',
      entered: false,
    },
    {
      id: 2,
      name: '팥쥐',
      entered: false,
    },
  ],
};

export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    input: action.payload,
  }),
  [CREATE]: (state, action) => {
    console.log(action);
    return {
      ...state,
      list: state.list.concat({
        id: state.list.length,
        name: action.payload,
        entered: false,
      })
    };
  },
  [ENTER]: (state, action) => state,
  [LEAVE]: (state, action) => state,
}, initialState);
