import clsx from 'clsx'

function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={clsx(className, 'home')}
            aria-hidden="true"
            onClick={onClick}
            style={{
                ...style,
                background: 'white',
                height: '40px',
                width: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '2',
                borderRadius: '100px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 12px',
                cursor: 'pointer',
                position: 'absolute',
                top: '50%',
                right: '-38px',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <svg width="16" height="17" fill="none">
                <path
                    d="M3.333 8.5h9.334M10 11.167L12.667 8.5M10 5.833L12.667 8.5"
                    stroke="#1A202C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </div>
    )
}

function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={clsx(className, 'home')}
            aria-hidden="true"
            onClick={onClick}
            style={{
                ...style,
                background: 'white',
                height: '40px',
                width: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '2',
                borderRadius: '100px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 12px',
                cursor: 'pointer',
                position: 'absolute',
                top: '50%',
                left: '0',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <svg width="16" height="17" fill="none" style={{ transform: 'rotate(180deg)' }}>
                <path
                    d="M3.333 8.5h9.334M10 11.167L12.667 8.5M10 5.833L12.667 8.5"
                    stroke="#1A202C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </div>
    )
}

export { NextArrow, PrevArrow }
