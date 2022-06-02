import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';
import { PaginationQuery } from './pagination-query.dto';

export class FilterQueryDto extends PaginationQuery {
  @ApiProperty()
  @IsIn(['asc', 'desc'])
  sortBy: string;
}
