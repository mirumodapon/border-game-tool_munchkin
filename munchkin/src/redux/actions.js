import { ADD_LEVEL, SUB_LEVEL, ADD_ATTACK, SUB_ATTACK } from './constants'

export const dealLevel = (op) => async (dispatch, getState) => {
    if (op === 'add')
        dispatch({
            type: ADD_LEVEL
        });
    else if (op === 'sub')
        dispatch({ type: SUB_LEVEL });
    try {

    } catch (erro) {

    }
};

export const dealAttack = (op) => async (dispatch) => {
    if (op === 'add')
        dispatch({
            type: ADD_ATTACK
        });
    else if (op === 'sub')
        dispatch({ type: SUB_ATTACK });
    try {

    } catch (erro) {

    }
}