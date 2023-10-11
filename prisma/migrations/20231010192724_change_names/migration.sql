/*
  Warnings:

  - You are about to drop the column `final_date` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `products_bids` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `products_bids` DROP FOREIGN KEY `products_bids_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `products_bids` DROP FOREIGN KEY `products_bids_user_id_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `final_date`,
    ADD COLUMN `vale` DOUBLE NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `products_bids`;

-- CreateTable
CREATE TABLE `offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offer_bid` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` DOUBLE NOT NULL,
    `offer_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `offers` ADD CONSTRAINT `offers_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offer_bid` ADD CONSTRAINT `offer_bid_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offer_bid` ADD CONSTRAINT `offer_bid_offer_id_fkey` FOREIGN KEY (`offer_id`) REFERENCES `offers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
