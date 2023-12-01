/*
  Warnings:

  - Made the column `document` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `born_date` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `document` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `phone` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `born_date` VARCHAR(191) NOT NULL DEFAULT '';
