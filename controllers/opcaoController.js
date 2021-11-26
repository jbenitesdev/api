const sql = require("../config/db");

exports.getOpcao = (req, res, next) => {    
    let query = `SELECT S.*, O.NOME OPCAO FROM PRODUTO_SUB S INNER JOIN PRODUTO_SUB_OPCAO O ON S.IDPRODUTO_SUB = O.IDPRODUTO_SUB`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        res.status(200).send(result);
    });
};
