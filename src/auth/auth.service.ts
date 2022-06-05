import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterUserDto } from './register-user.dto';
import { User } from '../users/user.entity';
import { compare, hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private usersService: UsersService,
  ) {}

  async createToken(user: Omit<User, 'password'>) {
    return {
      expiresIn: this.configService.get('JWT_EXPIRATION_TIME'),
      accessToken: this.jwtService.sign({ id: user.id }),
      user,
    };
  }

  async validateUser({
    username,
    password,
  }: LoginUserDto): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findByUsernameOrEmail(username);
    if (user && compare(password, user.password)) {
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
    if (user.password !== user.passwordConfirm) {
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
