import { Injectable } from '@nestjs/common';
import { User } from '../domain/Entities/user.entity';
import { IUsersRepository } from '../domain/Repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findById(id: string): Promise<User> {
    return this.usersRepository.findById(id);
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.create(user);
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    return this.usersRepository.update(id, user);
  }

  async delete(id: string): Promise<void> {
    return this.usersRepository.delete(id);
  }
}
