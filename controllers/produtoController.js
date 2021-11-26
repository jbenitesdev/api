const sql = require("../config/db");

exports.getProdutos = (req, res, next) => {    
    let query = `SELECT * FROM PRODUTO`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        res.status(200).send(result);
    });
};
