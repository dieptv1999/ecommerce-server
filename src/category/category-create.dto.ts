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

export class CategoryCreateDto {
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
  userId: number;

  @ApiProperty()
  @IsString()
  background: string;

  @ApiProperty()
  @IsString()
  thumbnail: string;
}
