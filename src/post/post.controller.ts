import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put, Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PostService } from './post.service';
import { PostCreateDto } from './post-create.dto';

@ApiBearerAuth()
@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  create(@Body() payload: PostCreateDto) {
    return this.postService.create(payload);
  }

  @Get('list-id')
  // @UseGuards(JwtAuthGuard)
  getIds() {
    return this.postService.ids();
  }

  @Get('list')
  // @UseGuards(JwtAuthGuard)
  list(@Query() params: { start: number; limit: number }) {
    console.log(params, 'params');
    return this.postService.find(params);
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  get(@Param() params: { id: number }) {
    return this.postService.findOne(params?.id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  hide(@Param() params) {
    return this.postService.findOne(params?.id);
  }
}
