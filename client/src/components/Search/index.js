import { useEffect, useReducer, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import moment from 'moment/moment'
import { addDays } from 'date-fns'
import { pl, vi } from 'date-fns/locale'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import {
    changeShow,
    inputPlace,
    clearPlaceHistory,
    inputDate,
    inputNumber,
    submitSearch,
    changeAll,
} from './reducer/actions'
import reducer, { initState } from './reducer'

import styles from './Search.module.scss'
import { SearchButton } from '~/components/Button'
import Place from './Place'
import Room from './Room'

function Search(props) {
    const navigate = useNavigate()
    const wrapperRef = useRef(null)
    const [state, dispatch] = useReducer(reducer, initState)
    const { show, place, placeHistory, date, number } = state
    const [notablePlace, setNotablePlace] = useState()

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                dispatch(changeShow(0))
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [wrapperRef])

    useEffect(() => {
        localStorage.setItem('placeHistory', JSON.stringify(placeHistory))
    }, [placeHistory])

    useEffect(() => {
        if (props.place) {
            dispatch(changeAll(props))
        }
    }, [props])

    useEffect(() => {
        Axios.get('http://localhost:8800/place', { params: { limit: 18 } }).then((response) => {
            // console.log(response.data)
            setNotablePlace(response.data)
        })
    }, [])
    useEffect(() => {
        if (date && props.setDateDetail !== undefined && number) {
            props.setDateDetail({
                number: number.adult.value,
                startDate: date.startDate,
                endDate: date.endDate,
            })
        }
    }, [date, number])
    function handleSubmit(tendiadiem) {
        dispatch(changeShow(null))

        const submit = {
            place: place,
            number: {
                room: number.room.value,
                adult: number.adult.value,
                child: number.child.value,
            },
            startDate: date.startDate,
            endDate: date.endDate,
        }

        if (tendiadiem) {
            dispatch(inputPlace(tendiadiem))
            submit.place = tendiadiem
        }

        Axios.get('http://localhost:8800/hotel/search', { params: { key: submit } })
            .then((response) => {
                // console.log(response.data)
                // result = response.data
                dispatch(submitSearch(submit.place))
                navigate(`/hotels/${submit.place}`, {
                    state: {
                        hotels: response.data,
                        searchBar: {
                            show: null,
                            place: submit.place,
                            placeHistory,
                            date,
                            number,
                        },
                    },
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleSubmitDetail = () => {
        props.setDateDetail({
            number: number.adult.value,
            startDate: date.startDate,
            endDate: date.endDate,
        })
        const roomListContainer = document.getElementById('roomListContainer')
        roomListContainer.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={clsx(styles.container, 'd-flex')} ref={wrapperRef}>
            {props.detail === undefined && (
                <div className={styles.place} onClick={() => dispatch(changeShow(1))}>
                    <label htmlFor="placeInput" className={styles.title}>
                        Địa điểm
                    </label>
                    <br />
                    <input
                        id="placeInput"
                        placeholder="Thành phố, khách sạn, điểm đến"
                        value={place}
                        onChange={(e) => dispatch(inputPlace(e.target.value))}
                    />
                    {show === 1 && (
                        <Place
                            placeHistory={placeHistory}
                            onClearHistory={() => dispatch(clearPlaceHistory())}
                            places={notablePlace}
                            onChoose={handleSubmit}
                        />
                    )}
                </div>
            )}

            <div className={styles.dates} onClick={() => dispatch(changeShow(2))}>
                <div className={styles.date}>
                    <div className={styles.title}>Ngày đến</div>
                    <div className={styles.content}>{moment(date.startDate).format('DD/MM/yyyy')}</div>
                </div>
                <div className={styles.duration}>
                    <span>{date.duration}</span>
                    <FontAwesomeIcon icon={faMoon} className={styles.icon} />
                </div>
                <div className={styles.date}>
                    <div className={styles.title}>Ngày đi</div>
                    <div className={styles.content}>{moment(date.endDate).format('DD/MM/yyyy')}</div>
                </div>
                {show === 2 && (
                    <DateRangePicker
                        className={styles.calendar}
                        ranges={[date]}
                        onChange={(item) => dispatch(inputDate(item.selection))}
                        months={2}
                        minDate={addDays(new Date(), 0)}
                        locale={vi}
                        showDateDisplay={false}
                        showMonthAndYearPickers={false}
                        moveRangeOnFirstSelection={false}
                        rangeColors={['#ff3366']}
                        direction="horizontal"
                        preventSnapRefocus={true}
                        calendarFocus="backwards"
                    />
                )}
            </div>

            <div className={styles.room} onClick={() => dispatch(changeShow(3))}>
                <div className={styles.title}>Số phòng, số khách</div>
                <div className={styles.content}>
                    {number.room.value} phòng, {number.adult.value} người lớn, {number.child.value} trẻ em
                </div>

                {show === 3 && (
                    <Room
                        number={number}
                        onDRoom={() => dispatch(inputNumber({ ...number, room: { value: number.room.value - 1 } }))}
                        onIRoom={() => dispatch(inputNumber({ ...number, room: { value: number.room.value + 1 } }))}
                        onDAdult={() => dispatch(inputNumber({ ...number, adult: { value: number.adult.value - 1 } }))}
                        onIAdult={() => dispatch(inputNumber({ ...number, adult: { value: number.adult.value + 1 } }))}
                        onDChild={() => dispatch(inputNumber({ ...number, child: { value: number.child.value - 1 } }))}
                        onIChild={() => dispatch(inputNumber({ ...number, child: { value: number.child.value + 1 } }))}
                    />
                )}
            </div>

            {props.detail === undefined ? (
                <SearchButton onSubmit={() => handleSubmit()} />
            ) : (
                <SearchButton detail={props.detail} onSubmit={() => handleSubmitDetail()} />
            )}
        </div>
    )
}

export default Search
