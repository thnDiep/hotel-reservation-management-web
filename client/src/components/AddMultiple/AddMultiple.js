import React, { useRef, useEffect } from 'react'
import $ from 'jquery'
import 'bootstrap-fileinput/js/fileinput.min.js'
import 'bootstrap-fileinput/css/fileinput.min.css'
import './AddMultiple.scss'

const AddMultiple = (props) => {
    const fileInput = useRef(null)

    useEffect(() => {
        $(fileInput.current).fileinput({
            uploadUrl: 'https://example.com/upload', // Định nghĩa URL để xử lý upload file
            showUpload: false, // Hiển thị nút Upload
        })

        // Bắt sự kiện fileupload
        $(fileInput.current).on('fileupload', (event, data) => {
            console.log('Files uploaded:', data.files)
            // Thực hiện hành động upload ở đây (nếu cần)
        })
    }, [])

    return (
        <div className="add-multiple">
            <input onChange={props.handleImagesChange} ref={fileInput} type="file" multiple />
        </div>
    )
}

export default AddMultiple
