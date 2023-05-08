import db from "../utils/db.js";
export default {
    getAll() {
        return db("nguoidung");
    },
    async findById(id) {
        const list = await db("nguoidung").where("id", id);
        if (list.length === 0) return null;

        return list[0];
    },
    async findByUsername(name) {
        const list = await db("nguoidung").where("TenDangNhap", name);
        if (list.length === 0) return null;

        return list[0];
    },
    async findByEmail(email) {
        const list = await db("nguoidung").where("Email", email);
        if (list.length === 0) return null;

        return list[0];
    },
    async findByUsernameToCheckPassword(name) {
        let list = null;
        if (this.findByUsername(name) !== null) {
            list = await db.raw(`SELECT password FROM nguoidung WHERE TenDangNhap = ?`, name);
        }

        return list[0];
    },
    async findByEmailToCheckPassword(email) {
        let list = null;
        if (this.findByEmail(email) !== null) {
            list = await db.raw(`SELECT MatKhau FROM nguoidung WHERE Email = ?`, email);
        }

        return list[0];
    },
    async findByEmailToGetDetail(email) {
        let list = null;
        if (this.findByEmail(email) !== null) {
            list = await db.raw(`SELECT * FROM nguoidung WHERE Email = ?`, email);
        }

        return list[0];
    },
    add(user) {
        // console.log(user.password);
        return db("nguoidung").insert(user);
    },
    del(id) {
        return db("nguoidung").where("id", id).del();
    },
    update(user) {
        return db("nguoidung").where("id", user.id).update(user);
    },
    updateActive(user) {
        // console.log(user.isActive);
        return db("nguoidung").where("id", user.id).update({
            isActive: user.isActive,
        });
    },
}