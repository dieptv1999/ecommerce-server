import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './users.repository';
import { RegisterUserDto } from '../auth/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id: id },
      relations: ['roles'],
    });
  }

  findByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username } });
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email: email } });
  }

  findByUsernameOrEmail(input: string): Promise<User> {
    return this.usersRepository.findOne({
      where: [{ username: input }, { email: input }],
      relations: ['roles'],
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  create(user: RegisterUserDto): Promise<Omit<User, 'password'>> {
    return this.usersRepository.createUser(user);
  }
}
