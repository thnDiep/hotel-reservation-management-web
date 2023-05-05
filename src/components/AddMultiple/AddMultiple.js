import React from 'react'
import './AddMultiple.scss'

const AddMultiple = () => {
    return (
        <div className="AddMultiple">
            {/* <div className="file-loading"> */}
            <input id="fuSub" type="file" multiple className="file" name="image" data-preview-file-type="text" />
            {/* </div> */}
        </div>
    )
}
export default AddMultiple
