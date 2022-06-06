import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PermissionService } from './permission.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { PermissionDto } from './permission.dto';

@ApiBearerAuth()
@Controller('permission')
@ApiTags('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard, AdminGuard)
  async createPermission(@Req() req, @Body() payload: PermissionDto) {
    return await this.permissionService.createPermission(payload);
  }

  @Get('roles')
  @ApiQuery({
    name: 'ids',
    required: false,
    explode: false,
    type: Number,
    isArray: true,
  })
  async getPermissionOfRole(@Query('ids') ids: number[]) {
    return await this.permissionService.getPermissionOfRole(ids);
  }
}
