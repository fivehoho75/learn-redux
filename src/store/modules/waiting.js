import { createAction, handleActions } from 'redux-actions';
import { List, Map } from 'immutable';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; // 나감

export const changeInput = createAction(CHANGE_INPUT);
export const create = createAction(CREATE);
export const enter = createAction(ENTER);
export const leave = createAction(LEAVE);

let id = 3
// **** 초기 상태 정의
const initialState = Map({
  input: '',
  list: List([
    Map({
      id: 0,
      name: '홍길동',
      entered: true,
    }),
    Map({
      id: 1,
      name: '콩쥐',
      entered: false,
    }),
    Map({
      id: 2,
      name: '팥쥐',
      entered: false,
    }),
  ]),
});

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    [CREATE]: (state, action) => (
      state.update('list', list =>
        list.push(
          Map({
            id: id++,
            name: action.payload,
            entered: false,
          })
        )
      )
    ),
    [ENTER]: (state, action) => {
      const index = state
        .get('list')
        .findIndex(item => item.get('id') === action.payload);
      // 특정 인덱스의 entered 필드 값을 반전
      return state.updateIn(['list', index, 'entered'], entered => !entered);
    },
    [LEAVE]: (state, action) => {
      // 인덱스를 찾고
      const index = state
        .get('list')
        .findIndex(item => item.get('id') === action.payload);
      return state.deleteIn(['list', index]); // 특정 인덱스 제거
    },
  },
  initialState
);
