const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let veiculo = await prisma.veiculo.create({
        data: req.body
    });
    res.status(200).json(veiculo).end();
}

const read = async (req, res) => {
    let veiculo = await prisma.veiculo.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            modelo: true,
            marca: true,
            servico: true,
            placa: true
        }
    });
    res.status(200).json(veiculo).end();
}

const readAll = async (req, res) => {
    let veiculo = await prisma.veiculo.findMany();

    res.status(200).json(veiculo).end();
}

const del = async (req, res) => {
    let veiculo = await prisma.veiculo.delete({
        where: {
            id: Number(req.params.id)
        },
    });
    res.status(200).end();
}

module.exports = {
    read,
    readAll,
    create,
    del
}