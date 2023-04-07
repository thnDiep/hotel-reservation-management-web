import React from 'react'
import classes from './PictureDetail.module.scss'

const PictureDetail = () => {
    return (
        <div className={classes.container}>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className={classes['box-slider']}>
                        <div className={`${classes['box-item-1']} `}>
                            <img
                                src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/7e0ab78439aba7749488a253455b5f22.jpg"
                                alt=""
                            />
                        </div>
                        <div className={classes['box-item-content']}>
                            <div className={classes['box-second']}>
                                <img
                                    src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/d7f96e68f2a7ee8d7fc05a9fabc6440f.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={`${classes['item-box-plus']}`}>
                                <div className={classes['box-item-3']}>
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/d876d86e587c9a76cdaa1ceb46d2b483.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={classes['box-item-4']}>
                                    <img
                                        src="https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_353355/511a3eb5dc56b4a69e42ba2c93fc1d96.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PictureDetail
