import {
  Equals,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PermissionDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(50)
  @ApiProperty()
  @IsString()
  action: string;

  @ApiProperty()
  @IsString()
  description: string;
}
