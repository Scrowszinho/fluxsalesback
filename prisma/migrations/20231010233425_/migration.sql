/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `offers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `offers_product_id_key` ON `offers`(`product_id`);
