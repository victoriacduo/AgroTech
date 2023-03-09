-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `Servicos_id_moto_fkey`;

-- AddForeignKey
ALTER TABLE `Servicos` ADD CONSTRAINT `Servicos_id_moto_fkey` FOREIGN KEY (`id_moto`) REFERENCES `Motorista`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
