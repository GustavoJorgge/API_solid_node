import fastify from 'fastify';
import { PrismaClient } from './../generated/prisma/index.d';

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
    data:{
        name: 'Gustavo Jorge',
        email: 'gustavo@jorge.com'
    }
})