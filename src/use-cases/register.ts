import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { UsersRepository } from "@/repositories/user-repository";
import { UserAlreadyExistsError } from "@/errors/user-already-exists-error";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

// SOLID - 5 PRINCIPIOS
// D - Dependenncy Inversion Principle

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
