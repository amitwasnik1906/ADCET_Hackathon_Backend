/*
  Warnings:

  - You are about to drop the column `average_passenger_count` on the `Analytics` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `Analytics` table. All the data in the column will be lost.
  - Added the required column `avg_passenger_count` to the `Analytics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crowd_percentage` to the `Analytics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_recorded` to the `Analytics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_passenger_count` to the `Analytics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "average_passenger_count",
DROP COLUMN "timestamp",
ADD COLUMN     "avg_passenger_count" INTEGER NOT NULL,
ADD COLUMN     "crowd_percentage" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "date_recorded" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "max_passenger_count" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'inactive';
