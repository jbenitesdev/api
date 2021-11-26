const sql = require("../config/db");


exports.getEndereco = (req, res, next) => {    
    let query = `SELECT * FROM CLIENTE_ENDERECO WHERE IDCLIENTE = ${req.params.idCliente}`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        res.status(200).send(result);
    });
};
