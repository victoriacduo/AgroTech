const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    let usuario = await prisma.usuario.findMany({
        where: {
            email: String(req.body.email),
            senha: String(req.body.senha)
        },
        select: {
            nome: true,
            cargo: true
        }
    })
    jwt.sign(usuario[0], process.env.KEY, (err, token) => {
        if (err == null) {
            usuario[0]["token"] = token
            res.status(200).json(usuario[0]).end()
        } else {
            res.status(404).json(err).end()
        }
    });
}

const read = async (req, res) => {
    let usuario = await prisma.usuario.findUnique({
        where: {
            id: Number(req.params.id)
        },
        // select: {
        //     nome: true,
        //     cargo: true
        // }
    });
    res.status(200).json(usuario).end();
}

const create = async (req, res) => {
    let usuario = await prisma.usuario.create({
        data: req.body
    });
    res.status(200).json(usuario).end();
}

module.exports = {
    login,
    read,
    create
}