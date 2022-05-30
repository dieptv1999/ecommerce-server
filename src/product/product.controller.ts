import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProductService } from './product.service';
import { ProductCreateDto } from './product-create-dto';

@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  create(@Body() payload: ProductCreateDto) {
    return this.productService.create(payload);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  get(@Param() params) {
    return this.productService.findOne(params?.id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  hide(@Param() params) {
    return this.productService.findOne(params?.id);
  }
}
