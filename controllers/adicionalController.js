const sql = require("../config/db");

exports.getAdicional = (req, res, next) => {    
    let query = `SELECT A.*, P.NOME ADICIONAL
    FROM PRODUTO_ADICIONAL A
    INNER JOIN PRODUTO P ON A.IDADICIONAL = P.IDPRODUTO`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        res.status(200).send(result);
    });
};
