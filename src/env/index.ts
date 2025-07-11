import 'dotenv/config'
import {z} from 'zod'
//Validar variaveis de ambiente

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if(_env.success == false){
    console.log('Invalid Environment variables', _env.error.format())

    throw new Error('Invalid environment variables.')
}

export const env = _env.data