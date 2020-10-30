import { ADD_LEVEL, SUB_LEVEL, ADD_ATTACK, SUB_ATTACK } from './constants';

export const self = (state = { level: 0, attack: 0 }, action) => {
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
        default:
            return state;
    }
};