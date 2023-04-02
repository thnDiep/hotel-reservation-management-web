import { useEffect, useReducer } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { clsx } from 'clsx'

import moment from 'moment/moment'
import { addDays } from 'date-fns'
import { vi } from 'date-fns/locale'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import { changeShow, inputPlace, clearPlaceHistory, inputDate, inputNumber, submitSearch } from './reducer/actions'
import reducer, { initState } from './reducer'

import styles from './Search.module.scss'
import { SearchButton } from '~/components/Button'
import Place from './Place'
import Room from './Room'
function Search() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { show, place, placeHistory, date, number } = state

    useEffect(() => {
        localStorage.setItem('placeHistory', JSON.stringify(placeHistory))
    }, [placeHistory])

    return (
        <div className={clsx(styles.container, 'd-flex')}>
            <div className={styles.place} onClick={() => dispatch(changeShow(1))}>
                <label htmlFor="placeInput" className={styles.title}>
                    Địa điểm
                </label>
                <br />
                <input
                    id="placeInput"
                    placeholder="Thành phố, khách sạn, điểm đến"
                    onChange={(e) => dispatch(inputPlace(e.target.value))}
                />
                {show === 1 && (
                    <Place placeHistory={placeHistory} onClearHistory={() => dispatch(clearPlaceHistory())} />
                )}
            </div>

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

            <SearchButton onSubmit={() => dispatch(submitSearch(place))} />
        </div>
    )
}

export default Search
