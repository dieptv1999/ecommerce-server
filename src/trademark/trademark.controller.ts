import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TrademarkService } from './trademark.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { TrademarkDto } from './trademark.dto';

@ApiBearerAuth()
@Controller('trademark')
@ApiTags('trademark')
export class TrademarkController {
  constructor(private readonly permissionService: TrademarkService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard, AdminGuard)
  async createTrademark(@Req() req, @Body() payload: TrademarkDto) {
    return await this.permissionService.createPermission(payload);
  }
}
