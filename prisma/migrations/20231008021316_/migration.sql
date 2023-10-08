/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[document]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `user_email_document_phone_key` ON `user`;

-- CreateIndex
CREATE UNIQUE INDEX `user_email_key` ON `user`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `user_document_key` ON `user`(`document`);

-- CreateIndex
CREATE UNIQUE INDEX `user_phone_key` ON `user`(`phone`);
