const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const info = req.body

    info.data_saida = new Date(req.body.data_saida)

    let servicos = await prisma.servicos.create({
        data: info
    });
    res.status(200).json(servicos).end();
}

const read = async (req, res) => {
    let servicos = await prisma.servicos.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id_moto: true,
            data_saida: true,
            data_retorno: true,
            servico: true,
            descricao: true
        }
    });
    res.status(200).json(servicos).end();
}

const readAll = async (req, res) => {
    let servicos = await prisma.servicos.findMany();

    res.status(200).json(servicos).end();
}

const del = async (req, res) => {
    let servicos = await prisma.servicos.delete({
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