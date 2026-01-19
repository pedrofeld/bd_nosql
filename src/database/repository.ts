const { PrismaClient } = require('@prisma/client')

const repository = new PrismaClient();

export default repository;

// problema no prisma client
// foi necessário usar o require ao invés do import