import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PermissionService } from './permission.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { PermissionDto } from './permission-dto';

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
}
