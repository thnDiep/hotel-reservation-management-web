import knex from "knex";

export default knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3310,
    user: "root",
    password: "",
    database: "khachsan",
  },
});
