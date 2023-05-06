import moment from 'moment'
import { addDays } from 'date-fns'

import { CHANGE_SHOW, INPUT_PLACE, CLEAR_PLACE_HISTORY, INPUT_DATE, INPUT_NUMBER, SUBMIT_SEARCH } from './constans'

const initState = {
    show: null,
    place: '',
    placeHistory: JSON.parse(localStorage.getItem('placeHistory')) || [],
    date: {
        startDate: new Date(),
        endDate: addDays(new Date(), 2),
        key: 'selection',
        duration: 2,
    },
    number: {
        room: { value: 1, disableDescrease: true },
        adult: { value: 1, disableDescrease: true },
        child: { value: 0, disableDescrease: true },
    },
}

function reducer(state, action) {
    switch (action.type) {
        case CHANGE_SHOW:
            return {
                ...state,
                show: action.payload,
            }
        case INPUT_PLACE:
            return {
                ...state,
                place: action.payload,
            }
        case CLEAR_PLACE_HISTORY:
            return {
                ...state,
                placeHistory: [],
            }
        case INPUT_DATE:
            return {
                ...state,
                date: {
                    ...action.payload,
                    duration: moment(action.payload.endDate).diff(action.payload.startDate, 'days'),
                },
            }
        case INPUT_NUMBER:
            const room = action.payload.room
            const adult = action.payload.adult
            const child = action.payload.child

            if (room.value <= 1) {
                room.value = 1
                room.disableDescrease = true
            } else {
                room.disableDescrease = false
            }

            if (adult.value <= 1 || adult.value <= room.value) {
                if (adult.value <= 1) {
                    adult.value = 1
                }
                if (adult.value <= room.value) {
                    adult.value = room.value
                }
                adult.disableDescrease = true
            } else {
                adult.disableDescrease = false
            }

            if (child.value <= 0) {
                child.value = 0
                child.disableDescrease = true
            } else {
                child.disableDescrease = false
            }

            return {
                ...state,
                number: { room, adult, child },
            }
        case SUBMIT_SEARCH:
            const submit = {
                place: state.place,
                number: {
                    room: state.number.room.value,
                    adult: state.number.adult.value,
                    child: state.number.child.value,
                },
                startDate: state.date.startDate,
                endDate: state.date.endDate,
            }

            return {
                ...state,
                placeHistory:
                    !state.placeHistory.includes(action.payload) && action.payload.trim() !== ''
                        ? [action.payload, ...state.placeHistory]
                        : state.placeHistory,
            }
        default:
            throw new Error('Invalid action.')
    }
}

export { initState }
export default reducer
