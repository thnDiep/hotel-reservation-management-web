import React, { Fragment, useState } from "react"
import classes from "./SideBar.module.scss"
import { faX, faHouse, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SideBar = (props) => {
    const [showSideBar, setShowSideBar] = useState(false);
    const handleShowSideBar = () => setShowSideBar(true)
    const handleNotShowSideBar = () => setShowSideBar(false);

    return (
        <Fragment>
            <svg onClick={handleShowSideBar} width="24" height="24" fill="none"
                style={{ stroke: 'rgb(26, 32, 44)', cursor: 'pointer', marginLeft: '16px' }}>
                <path d="M4 6h16M4 12h16M4 18h16" stroke="#1A202C" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"></path>
            </svg>
            {showSideBar && <Fragment>
                <div style={{ animation: `${showSideBar ? "fadeIn" : "fadeOutLeft"} 1s` }} onClick={handleNotShowSideBar} className={classes.overLay}></div>
                <div style={{ animation: `${showSideBar ? "fadeInRight" : "fadeOutLeft"} 1s` }} className={classes.sideBar}>
                    <FontAwesomeIcon onClick={handleNotShowSideBar} icon={faX} className={classes.faX} />
                    <div className={classes.title}>
                        <FontAwesomeIcon icon={faHouse} className={classes.icon} />
                        <span>Trang chủ</span>
                    </div>
                    <div className={classes.title}>
                        <FontAwesomeIcon icon={faHeart} className={classes.icon} />
                        <span>Yêu thích</span>
                    </div>
                    <hr className={classes.hrLove}></hr>
                    <div className={classes.title}>
                        <svg width="20" height="20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.25 2.5A2.5 2.5 0 014.75 0h10a2.5 2.5 0 012.5 2.5v15a1.25 1.25 0 010 2.5H13.5a1.25 1.25 0 01-1.25-1.25v-2.5A1.25 1.25 0 0011 15H8.5a1.25 1.25 0 00-1.25 1.25v2.5A1.25 1.25 0 016 20H2.25a1.25 1.25 0 010-2.5v-15zM6 3.75h2.5v2.5H6v-2.5zm2.5 5H6v2.5h2.5v-2.5zm2.5-5h2.5v2.5H11v-2.5zm2.5 5H11v2.5h2.5v-2.5z"
                                fill="#FFBC39"></path>
                        </svg>
                        <span>Khách sạn</span>
                    </div>
                    <div className={classes.title}>
                        <svg width="20" height="20" fill="none">
                            <g clip-path="url(#icon_flight_ticket_svg__clip0)">
                                <path
                                    d="M12.608 3.813a.5.5 0 00.486-.129L16.11.667a2.278 2.278 0 113.222 3.222l-3.017 3.017a.5.5 0 00-.13.485l2.265 8.301a.5.5 0 01-.129.485l-1.743 1.743a.5.5 0 01-.79-.11l-3.384-6.091a.5.5 0 00-.79-.111l-2.608 2.607a.5.5 0 00-.146.353v2.808a.5.5 0 01-.147.354l-1.698 1.698a.5.5 0 01-.828-.195l-1.276-3.829a.5.5 0 00-.316-.316L.768 13.812a.5.5 0 01-.196-.828l1.698-1.698a.5.5 0 01.354-.147h2.808a.5.5 0 00.353-.146l2.607-2.607a.5.5 0 00-.11-.79L2.19 4.21a.5.5 0 01-.111-.79l1.742-1.743a.5.5 0 01.486-.129l8.3 2.264z"
                                    fill="#FF1284"></path>
                            </g>
                            <defs>
                                <clipPath id="icon_flight_ticket_svg__clip0">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Vé máy bay</span>
                    </div>
                    <div className={classes.title}>
                        <svg width="20" height="20" fill="none">
                            <g clip-path="url(#icon_wedding_svg__clip0)">
                                <path
                                    d="M19.167 0H.833A.833.833 0 000 .833v18.334c0 .46.373.833.833.833h18.334c.46 0 .833-.373.833-.833V.833A.833.833 0 0019.167 0z"
                                    fill="#fff"></path>
                                <path
                                    d="M5.583 7.864a.208.208 0 01-.016-.354 3.232 3.232 0 10-3.628 0 .208.208 0 01-.016.354A3.75 3.75 0 000 11.136v2.223a.417.417 0 00.417.417h.904a.417.417 0 01.417.379l.487 5.466a.416.416 0 00.417.38H4.86a.416.416 0 00.417-.38l.488-5.466a.417.417 0 01.417-.38h.9a.417.417 0 00.417-.416v-2.223a3.75 3.75 0 00-1.917-3.272zm-1.208 2.64a.625.625 0 01-1.25 0V9.185a.625.625 0 011.25 0v1.32zM3.75 6.403a1.563 1.563 0 01-1.508-1.981.207.207 0 01.305-.124 3.963 3.963 0 002.52.506.207.207 0 01.233.233 1.567 1.567 0 01-1.55 1.365zM14.167 0a5.84 5.84 0 00-5.834 5.833v6.25A1.666 1.666 0 0010 13.75h.167l-.75 2.237a.833.833 0 00.791 1.096h1a.416.416 0 01.417.358l.263 1.844a.833.833 0 00.825.715h2.917a.833.833 0 00.825-.715l.263-1.844a.417.417 0 01.413-.358h1a.833.833 0 00.79-1.096l-.754-2.237h.166A1.667 1.667 0 0020 12.083v-6.25A5.84 5.84 0 0014.167 0zm2.681 15.333a.209.209 0 01-.166.084h-.64a.833.833 0 00-.825.715l-.289 2.022a.21.21 0 01-.206.18h-1.11a.207.207 0 01-.206-.18l-.29-2.022a.834.834 0 00-.824-.715h-.638a.21.21 0 01-.206-.177.209.209 0 01.008-.098l1.033-3.1c.077-.23.2-.443.363-.624a.208.208 0 01.334.036l.589 1.028a.448.448 0 00.778 0l.59-1.028a.208.208 0 01.333-.036c.163.181.286.394.363.625l1.033 3.1a.209.209 0 01-.024.19zm-4.675-8.06a.205.205 0 01.073-.226.208.208 0 01.076-.036 3.597 3.597 0 001.563-.846.417.417 0 01.563 0c.442.408.98.7 1.564.846a.206.206 0 01.148.262 2.083 2.083 0 01-3.987 0zm6.16 4.394a.417.417 0 01-.814.131l-.094-.282a3.428 3.428 0 00-1.35-1.77.206.206 0 01-.092-.171.21.21 0 01.088-.173 3.334 3.334 0 10-3.809 0 .21.21 0 010 .344 3.429 3.429 0 00-1.35 1.77l-.094.282a.417.417 0 01-.818-.131V5.833a4.167 4.167 0 018.333 0v5.834z"
                                    fill="#F36"></path>
                            </g>
                            <defs>
                                <clipPath id="icon_wedding_svg__clip0">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>The Memories</span>
                    </div>
                    <div className={classes.title}>
                        <svg width="20" height="20" fill="none">
                            <path d="M6.97 4.697v-1.03a2 2 0 012-2h2.06a2 2 0 012 2v1.03" stroke="#00B6F3" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="square"></path>
                            <path d="M16.333 4.697H3.667a2 2 0 00-2 2v5.09a2 2 0 002 2h12.666a2 2 0 002-2v-5.09a2 2 0 00-2-2z" fill="#00B6F3"
                                stroke="#00B6F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path>
                            <path d="M17.576 16.06v.273a2 2 0 01-2 2H4.424a2 2 0 01-2-2v-.272" fill="#00B6F3"></path>
                            <path d="M17.576 16.06v.273a2 2 0 01-2 2H4.424a2 2 0 01-2-2v-.272" stroke="#00B6F3" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M10.758 7.727H9.242a1.515 1.515 0 100 3.03h1.515a1.515 1.515 0 000-3.03z" stroke="#fff" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="square"></path>
                        </svg>
                        <span>Tour & Sự kiện</span>
                    </div>
                    <div className={classes.title}>
                        <svg width="20" height="20" fill="none">
                            <path d="M15 0H5a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3z" fill="#48BB78"></path>
                            <path d="M15.417 3.75v6.667l-2.5-1.667-2.5 1.667V3.75h5z" fill="#fff"></path>
                        </svg>
                        <span>Cẩm nang du lịch</span>
                    </div>
                </div>
            </Fragment>
            }

        </Fragment>
    )
}
export default SideBar