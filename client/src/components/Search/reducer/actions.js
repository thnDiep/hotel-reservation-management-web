import { CHANGE_SHOW, INPUT_PLACE, CLEAR_PLACE_HISTORY, INPUT_DATE, INPUT_NUMBER, SUBMIT_SEARCH } from './constans'

export const changeShow = (payload) => {
    return {
        type: CHANGE_SHOW,
        payload,
    }
}

export const inputPlace = (payload) => {
    return {
        type: INPUT_PLACE,
        payload,
    }
}

export const clearPlaceHistory = () => {
    return {
        type: CLEAR_PLACE_HISTORY,
    }
}

export const inputDate = (payload) => {
    return {
        type: INPUT_DATE,
        payload,
    }
}

export const inputNumber = (payload) => {
    return {
        type: INPUT_NUMBER,
        payload,
    }
}

export const submitSearch = (payload) => {
    return {
        type: SUBMIT_SEARCH,
        payload,
    }
}
