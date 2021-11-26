const sql = require("../config/db");

exports.getGrupos = (req, res, next) => {    
    let query = `SELECT * FROM GRUPO`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        res.status(200).send(result);
    });
};
