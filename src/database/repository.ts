const { PrismaClient } = require('@prisma/client');

const repository = new PrismaClient();

export default repository;