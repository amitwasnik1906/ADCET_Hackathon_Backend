/*
  Warnings:

  - Added the required column `departure_time` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "departure_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "route_polyline" TEXT;
