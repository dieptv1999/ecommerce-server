import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { Inject } from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from '../role/role.entity';
import { RegisterUserDto } from '../auth/register-user.dto';

@Resolver((of) => User)
export class UserResolver {
  constructor(@Inject(UsersService) private userService: UsersService) {}
  @Query((returns) => User)
  async user(@Args('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation((returns) => User)
  async createCustomer(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('phone', { nullable: true }) phone: string,
    @Args('address', { nullable: true }) address: string,
    @Args('firstName', { nullable: true }) firstName: string,
    @Args('lastName', { nullable: true }) lastName: string,
    @Args('confirmationPassword', { nullable: true })
    confirmationPassword: string,
  ): Promise<Omit<User, 'password'>> {
    return await this.userService.create({
      username,
      email,
      phone,
      address,
      firstName,
      lastName,
      confirmationPassword,
    } as RegisterUserDto);
  }
}
