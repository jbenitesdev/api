const sql = require("../config/db");

exports.get = (req, res, next) => {
    res.status(200).send({
        title: "Teste get Menu",
        name: "Menu Insano"
    });
};

exports.getMenu = (req, res, next) => {
    res.status(200).send([
        {
            name: "William",
            email: "william.escm@gmail.com",
        },
        {
            name: "Alfa",
            email: "alfa@gmail.com",
        },
        {
            name: "Omega",
            email: "omega@gmail.com",
        }
    ]);
};
