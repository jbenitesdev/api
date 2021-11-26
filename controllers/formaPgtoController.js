const sql = require("../config/db");

exports.getFormPgto = (req, res, next) => {    
    let query = `SELECT * FROM FORMA_PAGTO`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        res.status(200).send(result);
    });
};
