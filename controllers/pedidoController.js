const sql = require("../config/db");

exports.getPedido = (req, res, next) => {    
    let query = `SELECT * FROM PEDIDO`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        res.status(200).send(result);
    });
};
