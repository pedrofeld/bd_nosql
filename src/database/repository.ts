import { PrismaClient } from "@prisma/client";

export const repository = new PrismaClient();

export default repository;

// problema no prisma client
// foi necessário usar o require ao invés do import