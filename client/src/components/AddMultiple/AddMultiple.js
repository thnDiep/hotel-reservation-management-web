import React, { useRef, useEffect } from 'react'
import $ from 'jquery'
import 'bootstrap-fileinput/js/fileinput.min.js'
import 'bootstrap-fileinput/css/fileinput.min.css'
import './AddMultiple.scss'

const AddMultiple = ({ handleImagesChange, HinhAnh = [], check }) => {
    const fileInput = useRef(null)

    useEffect(() => {
        if (HinhAnh !== null) {
            $(fileInput.current).fileinput({
                uploadUrl: 'https://example.com/upload', // Định nghĩa URL để xử lý upload file
                showUpload: false, // Hiển thị nút Upload
                initialPreview: HinhAnh,
                initialPreviewAsData: true, // identify if you are sending preview data only and not the raw markup
                initialPreviewFileType: 'image', // image is the default and can be overridden in config below
            })

            // Bắt sự kiện fileupload
            $(fileInput.current).on('filedeleted', (e, params) => {
                console.log('File deleted:')
                // Thực hiện hành động xóa ở đây (nếu cần)
            })
        }
        if (check !== true) {
            console.log('fasfasfasfasdfadsgsfeg')
            $(fileInput.current).fileinput({
                uploadUrl: 'https://example.com/upload', // Định nghĩa URL để xử lý upload file
                showUpload: false, // Hiển thị nút Upload
            })
        }
    }, [HinhAnh])

    useEffect(() => {})
    return (
        <div className="add-multiple">
            <input onChange={handleImagesChange} ref={fileInput} type="file" multiple />
        </div>
    )
}

export default AddMultiple
