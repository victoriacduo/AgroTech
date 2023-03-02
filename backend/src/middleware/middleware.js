const jwt = require('jsonwebtoken');

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if (err != null) {
            res.status(400).json(err).end();
        } else {
            if (data.email == req.body.email && data.senha == req.body.senha) {
                next();
            } else {
                res.status(401).end();
            }
        }
    })
}

module.exports = {
    validaAcesso
}