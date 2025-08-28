import { PrismaClient } from "@prisma/client";

let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient({
    log: ["query", "error", "warn"],
  });
}
prisma = global.prisma;

export { prisma };
