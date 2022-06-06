import { Body, Controller, Get, Post, Query, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { RoleDto } from './role.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/admin.guard';

@ApiBearerAuth()
@Controller('role')
@ApiTags('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard, AdminGuard)
  async createRole(@Req() req, @Body() payload: RoleDto) {
    return await this.roleService.createRole(payload);
  }

  @Post('add-permission')
  @UseGuards(JwtAuthGuard, AdminGuard)
  async addPermission(@Body() body: { permissionId: number; id: number }) {
    return await this.roleService.addPermission(body.id, body.permissionId);
  }
}
