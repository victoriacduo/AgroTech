const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const info = req.body

    info.data_inicio = new Date(req.body.data_inicio)
    info.data_fim = new Date(req.body.data_fim)

    let manutencoes = await prisma.manutencoes.create({
        data: info
    });
    res.status(200).json(manutencoes).end();
}

const read = async (req, res) => {
    let manutencoes = await prisma.manutencoes.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            data_inicio: true,
            data_fim: true,
            valor: true,
            descricao: true,
            id_veiculo: true
        }
    });
    res.status(200).json(manutencoes).end();
}

const readAll = async (req, res) => {
    let manutencoes = await prisma.manutencoes.findMany();

    res.status(200).json(manutencoes).end();
}

const del = async (req, res) => {
    let manutencoes = await prisma.manutencoes.delete({
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