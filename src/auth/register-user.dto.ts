import {
  Equals,
  IsEmail, IsEmpty,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(30)
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @IsPhoneNumber('VI')
  @ApiProperty()
  @IsEmpty()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsEmpty()
  address: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Equals('password')
  readonly passwordConfirm: string;

  @ApiProperty()
  @IsEmpty()
  confirmationPassword: string;
}
