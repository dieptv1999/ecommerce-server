import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ParcelCreateDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  skuId: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  amount: number;
}
