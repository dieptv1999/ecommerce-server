import { IsEmail, IsNotEmpty, IsPhoneNumber, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  username: string;

  @ApiProperty()
  firstName: string;

  @IsPhoneNumber('VI')
  @ApiProperty()
  phone: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @ApiProperty()
  confirmationPassword: string;
}
