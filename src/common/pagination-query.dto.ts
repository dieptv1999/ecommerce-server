import { ApiProperty } from '@nestjs/swagger';

export class PaginationQuery {
  @ApiProperty({
    minimum: 0,
    maximum: 100000,
    title: 'Pos',
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    format: 'int32',
    default: 0,
  })
  pos: number;

  @ApiProperty()
  count: number;
}
