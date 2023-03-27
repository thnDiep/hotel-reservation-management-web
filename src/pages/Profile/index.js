import styles from "./profile.module.scss"

function Profile() {
    return  (
        <div>
            <h1>Tài khoản</h1>
            <div className={styles.profileMenu}>
                <button className={styles.buttonMenu}>
                    Tài khoản
                </button >
                <button className={styles.buttonMenu}>Đơn phòng</button>
               <button className={styles.buttonMenu}>Khách sạn yêu thích</button>
            </div>
            <div className={styles.wrap}>
                <div>
                    <img src={process.env.PUBLIC_URL + "/avt.png"} alt="avata" className={styles.profileAvt}/>
                </div>
                <div className={styles.information} >
                    <p className={styles.label}>Họ tên</p>
                    <div>
                        <input className={styles.fieldInput} aria-invalid="false" autoComplete="off" id="field-name" name="name" type="text" value="Tran Thao Quyen"/>
                        <hr/>
                    </div>
                   <p className={styles.label}>Email</p>
                   <div>
                        <input className={styles.fieldInput} aria-invalid="false" autoComplete="off" id="field-email" name="email" type="text" value="Tranthaoquyen@gmail.com"/>
                        <hr/>
                   </div>
                    <p className={styles.label}>Số điện thoại</p>
                    <div>
                        <input className={styles.fieldInput} aria-invalid="false" autoComplete="off" id="field-numberPhone" name="numberPhone" type="text" value=" "/>
                        <hr/>
                    </div>
                    <p className={styles.label}>Địa chỉ</p>
                    <div>
                        <input className={styles.fieldInput} aria-invalid="false" autoComplete="off" id="field-address" name="address" type="text" value=" "/>
                        <hr/>
                    </div>
                    <button className={styles.buttonSave}>Lưu lại</button>
                </div>

                
            </div>
            
        </div>
    );
    
    
    

}

export default Profile
