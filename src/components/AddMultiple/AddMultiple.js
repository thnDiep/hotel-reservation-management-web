import React from 'react'
import './AddMultiple.scss'

const AddMultiple = (props) => {
    return (
        <div className="AddMultiple animate__animated animate__fadeInRight" style={{ display: props.display }}>
            {/* <div className="file-loading"> */}
            <input id="fuSub" type="file" multiple className="file" name="image" data-preview-file-type="text" />
            {/* </div> */}
        </div>
    )
}
export default AddMultiple
