import {
  Equals,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PostCreateDto {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(100)
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(1500)
  description: string;

  @ApiProperty()
  @IsString()
  @MinLength(1000)
  content: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: number;

  @ApiProperty()
  @IsString()
  avatar: string;

  @ApiProperty()
  @IsString()
  background: string;

  @ApiProperty()
  @IsString()
  type: string;
}
