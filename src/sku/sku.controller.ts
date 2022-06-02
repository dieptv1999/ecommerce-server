import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Sku } from './sku.entity';
import { SkuService } from './sku.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { SkuCreateDto } from './sku.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationQuery } from '../common/pagination-query.dto';
import { FilterQueryDto } from '../common/filter-query.dto';

@ApiBearerAuth()
@ApiTags('sku')
@Controller('sku')
export class SkuController {
  constructor(private readonly skuService: SkuService) {}

  @Get()
  async list(@Param() params): Promise<[Sku[], number]> {
    return this.skuService.list(params);
  }

  @Get('ids')
  async listByIds(@Query('ids') ids: number[]): Promise<[Sku[], number]> {
    return this.skuService.listByIds(ids);
  }

  @Get('filter')
  async filter(@Query() query: FilterQueryDto): Promise<[Sku[], number]> {
    return this.skuService.filter(query);
  }

  @Get(':uuid')
  async getByUUID(@Param() params): Promise<Sku> {
    return this.skuService.getByUUID(params?.uuid);
  }

  @Post('create')
  @UseGuards(JwtAuthGuard, AdminGuard)
  async create(@Body() payload: SkuCreateDto): Promise<Sku> {
    return this.skuService.create(payload);
  }
}
