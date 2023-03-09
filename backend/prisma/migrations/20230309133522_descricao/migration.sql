-- DropForeignKey
ALTER TABLE `manutencoes` DROP FOREIGN KEY `Manutencoes_id_veiculo_fkey`;

-- AddForeignKey
ALTER TABLE `Manutencoes` ADD CONSTRAINT `Manutencoes_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Veiculo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
