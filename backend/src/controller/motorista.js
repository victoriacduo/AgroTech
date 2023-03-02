const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let motorista = await prisma.motorista.create({
        data: req.body
    });
    res.status(200).json(motorista).end();
}

const read = async (req, res) => {
    let motorista = await prisma.motorista.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            cpf: true,
            cnh: true,
            veiculo: true
        }
    });
    res.status(200).json(motorista).end();
}

const del = async (req, res) => {
    let motorista = await prisma.motorista.delete({
        where: {
          id: Number(req.params.id)
        },
      });
      res.status(200).end();
}

module.exports = {
    create,
    read,
    del
}