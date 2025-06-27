import { env } from "@/env";
import { PrismaClient } from "generated/prisma";

export const prisma = new PrismaClient({
  // condição para que o log só execute em ambiente de desenvolvimento
  log: env.NODE_ENV == "dev" ? ["query"] : [],
});
