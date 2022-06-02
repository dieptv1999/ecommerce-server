import { Controller, Get, Query, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HomepageService } from './homepage.service';
import { PaginationQuery } from '../common/pagination-query.dto';
import { Sku } from "../sku/sku.entity";

@ApiBearerAuth()
@Controller('homepage')
@ApiTags('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  // @Post('update')
  // @UseGuards(JwtAuthGuard, AdminGuard)
  // async createPermission(@Req() req, @Body() payload: HomeageDto) {
  //   return await this.homepageService.createPermission(payload);
  // }

  @Get('products')
  async get(@Query() query: PaginationQuery): Promise<[Sku[], number]> {
    return await this.homepageService.get({
      pos: query.pos,
      count: query.count,
    });
  }
}
