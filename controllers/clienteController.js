const sql = require("../config/db");

exports.getCliente = (req, res, next) => {    
    let query = `SELECT * FROM CLIENTE`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        res.status(200).send(result);
    });
};
