import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './category-create.dto';

@ApiBearerAuth()
@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  create(@Request() req, @Body() payload: CategoryCreateDto) {
    console.log(payload, req.user, 'params');
    return this.categoryService.create({
      ...payload,
      userId: req.user.id,
    });
  }

  @Get('list-id')
  // @UseGuards(JwtAuthGuard)
  getIds() {
    return this.categoryService.ids();
  }

  @Get('list')
  // @UseGuards(JwtAuthGuard)
  list(@Query() params: { start: number; limit: number }) {
    return this.categoryService.find(params);
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  get(@Param() params: { id: number }) {
    return this.categoryService.findOne(params?.id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  hide(@Param() params) {
    return this.categoryService.findOne(params?.id);
  }
}
