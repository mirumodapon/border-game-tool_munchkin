import { ADD_LEVEL, SUB_LEVEL, ADD_ATTACK, SUB_ATTACK, EDIT_NAME, ENTER_ROOM, UPDATE_INFO } from './constants';

export const self = (state = {}, action) => {
    switch (action.type) {
        case ADD_LEVEL:
            return {
                ...state, level: state.level + ((state.level < 10) ? 1 : 0)
            };
        case SUB_LEVEL:
            return {
                ...state, level: state.level + ((state.level > 0) ? -1 : 0)
            };
        case ADD_ATTACK:
            return {
                ...state, attack: state.attack + 1
            };
        case SUB_ATTACK:
            return {
                ...state, attack: state.attack + ((state.attack > 0) ? -1 : 0)
            };
        case EDIT_NAME:
            return {
                ...state, name: action.payload
            }
        case ENTER_ROOM:
            return {
                ...state, room: action.payload
            }
        case UPDATE_INFO:
            return {
                ...state, other: action.payload
            }
        case 'WS':
            return {
                ...state, ws: action.payload
            }
        default:
            return state;
    }
};