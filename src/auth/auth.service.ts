import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterUserDto } from './register-user.dto';
import { User } from '../users/user.entity';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    console.log(pass, await hash(pass, 12), compare(pass, user.password));
    if (user && compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async registerUser(user: RegisterUserDto): Promise<Omit<User, 'password'>> {
    const existingUser = await this.usersService.findByEmail(user.email);
    if (existingUser) {
      throw new BadRequestException('User remail must be unique');
    }
    if (user.password !== user.confirmationPassword) {
      throw new BadRequestException(
        'Password and Confirmation Password must match',
      );
    }
    const userRes = await this.usersService.create({
      ...user,
      password: await hash(user.password, 12),
    });
    return userRes;
  }

  async findById(id: number): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new BadRequestException(`No user found with id ${id}`);
    }
    return user;
  }
}
