import React from 'react'
import './AddMultiple.scss'

const AddMultiple = (props) => {
    return (
        <>
            <div className="AddMultiple animate__animated animate__fadeInRight" style={{ display: props.display }}>
                <div className='chooseTitleImg'>Chọn ảnh khách sạn</div>
                <div className="imageChoose">
                    <input onChange={props.handleImagesChange} id="fuSub" type="file" multiple className="file" name="image" data-preview-file-type="text" />
                </div>
            </div>
        </>
    )
}
export default AddMultiple
