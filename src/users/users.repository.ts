import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterUserDto } from '../auth/register-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  createUser(createUserDto: RegisterUserDto): Promise<User> {
    const user = this.create();

    const {
      password,
      email,
      firstName,
      lastName,
      username,
      address,
      phone,
      confirmationPassword,
    } = createUserDto;

    user.password = password;
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.username = username;
    user.address = address;
    user.phone = phone;
    user.confirmationPassword = confirmationPassword;

    try {
      return this.save(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
