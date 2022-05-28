import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterUserDto } from '../auth/register-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser(createMovieDto: RegisterUserDto): Promise<User> {
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
    } = createMovieDto;

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
