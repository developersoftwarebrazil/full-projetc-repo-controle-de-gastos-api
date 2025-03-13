import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { IUsersRepository } from '../domain/Repositories/user.repository';
import { User } from '../domain/Entities/user.entity';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async findById(id: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async create(user: User): Promise<User> {
    return this.prismaService.user.create({
      data: { ...user },
    });
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    return this.prismaService.user.update({
      where: { id },
      data: { ...user },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.user.delete({ where: { id } });
  }
}
