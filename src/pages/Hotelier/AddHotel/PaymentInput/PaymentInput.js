import { useState, useEffect, useRef } from 'react'
import styles from './PaymentInput.module.scss'
import Select from 'react-select'
import { Editor } from '@tinymce/tinymce-react'
const PaymentIntput = (props) => {
    const api = 'https://api.vietqr.io/v2/banks'
    const [nameBank, setNameBank] = useState([])
    const [selectedNameBank, setSelectedNameBank] = useState(null)
    const editorRef = useRef(null)
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent())
        }
    }
    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                const options = data.data.map((nameBank) => ({
                    label: nameBank.name,
                    value: nameBank.code,
                }))
                console.log(options)
                setNameBank(options)
            })
    }, [])
    const handleNameBankChange = (selectedOption) => {
        setSelectedNameBank(selectedOption)
        // setSelectedWards(null)
    }
    return (
        <div className={`animate__animated animate__fadeInRight ${styles.paymentContent}`} style={{ display: props.display }}>
            <div className={styles.chooseTitle}>Nhập tài khoản ngân hàng</div>
            <div className="row mt-3 ">
                <span className={` col-4 ${styles.label}`}>Chọn ngân hàng</span>

                <Select
                    className="col-5"
                    value={selectedNameBank}
                    onChange={handleNameBankChange}
                    options={nameBank}
                    placeholder="Chọn Ngân hàng"
                // isDisabled={!selectedNameBank}
                />
            </div>
            <div className="row mt-3 ">
                <span className={` col-4 ${styles.label}`}>Số tài khoản</span>
                <div className="col-5">
                    <div className={styles.input}>
                        <input type="number" name="name" />
                    </div>
                </div>
            </div>
            <div className="row mt-3 ">
                <span className={` col-4 ${styles.label}`}>Tên chủ tài khoản</span>
                <div className="col-5">
                    <div className={styles.input}>
                        <input type="text" name="name" />
                    </div>
                </div>
            </div>
            <div className={styles.chooseTitle}>Giới thiệu</div>
            <div className={`row mt-3 ${styles.texarea}`}>
                <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                        menubar: false,
                        plugins: ['image', 'code', 'table', 'link', 'media', 'codesample', 'lists'],
                        toolbar: [
                            'undo redo | bold italic underline strikethrough | numlist bullist | alignleft aligncenter alignright| forecolor backcolor | table link image media codesample',
                        ],
                        codesample_languages: [
                            { text: 'HTML/XML', value: 'markup' },
                            { text: 'JavaScript', value: 'javascript' },
                            { text: 'CSS', value: 'css' },
                            { text: 'PHP', value: 'php' },
                            { text: 'Ruby', value: 'ruby' },
                            { text: 'Python', value: 'python' },
                            { text: 'Java', value: 'java' },
                            { text: 'C', value: 'c' },
                            { text: 'C#', value: 'csharp' },
                            { text: 'C++', value: 'cpp' },
                        ],
                    }}
                />
            </div>
        </div>
    )
}
export default PaymentIntput
