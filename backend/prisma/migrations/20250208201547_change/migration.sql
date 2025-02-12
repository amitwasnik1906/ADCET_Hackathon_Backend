/*
  Warnings:

  - You are about to drop the `RouteStop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stop` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `stops` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RouteStop" DROP CONSTRAINT "RouteStop_route_id_fkey";

-- DropForeignKey
ALTER TABLE "RouteStop" DROP CONSTRAINT "RouteStop_stop_id_fkey";

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "stops" JSONB NOT NULL;

-- DropTable
DROP TABLE "RouteStop";

-- DropTable
DROP TABLE "Stop";
