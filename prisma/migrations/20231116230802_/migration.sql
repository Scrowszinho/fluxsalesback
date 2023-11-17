/*
  Warnings:

  - You are about to drop the column `vale` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `value_interval` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `offers` ADD COLUMN `value_interval` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `vale`,
    DROP COLUMN `value_interval`,
    ADD COLUMN `value` DOUBLE NOT NULL DEFAULT 0;
