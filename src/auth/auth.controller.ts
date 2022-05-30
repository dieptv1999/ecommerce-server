import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';

import { LocalGuard } from '../local.guard';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './register-user.dto';
import { LoginUserDto } from './login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: 201, description: 'Successful Registration' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async registerUser(@Body() payload: RegisterUserDto) {
    const user = await this.authService.registerUser(payload);
    return await this.authService.createToken(user);
  }

  @UseGuards(LocalGuard)
  @Post('login')
  @ApiResponse({ status: 201, description: 'Successful Login' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async loginUser(@Req() req, @Body() payload: LoginUserDto) {
    const user = await this.authService.validateUser(payload);
    return await this.authService.createToken(user);
  }
}
