import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SkuCreateDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(50)
  @ApiProperty()
  @IsString()
  sku: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty()
  @IsNumber()
  insurance: number;

  @ApiProperty()
  @IsBoolean()
  important: boolean;

  @IsString()
  @Matches('[1-9]{0,}x[1-9]{0,}')
  size: string;

  @ApiProperty()
  @IsArray({ always: true })
  // @ValidateNested({ each: true })
  @ArrayMinSize(2)
  @ArrayMaxSize(10)
  images: string[];

  @ApiProperty()
  @IsBoolean()
  available: boolean;

  @ApiProperty()
  @IsInt()
  @Min(0)
  amount: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  discount: number;
}
