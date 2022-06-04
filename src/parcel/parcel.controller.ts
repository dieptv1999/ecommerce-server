import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ParcelService } from './parcel.service';
import { Parcel } from './parcel.entity';
import { ParcelCreateDto } from './parcel.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Response } from 'express';
import constant from '../common/utils/constant';
import { SkuService } from '../sku/sku.service';

@ApiBearerAuth()
@ApiTags('parcel')
@Controller('parcel')
export class ParcelController {
  constructor(
    private readonly parcelService: ParcelService,
    private readonly skuService: SkuService,
  ) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() payload: ParcelCreateDto): Promise<Parcel> {
    return this.parcelService.create(payload);
  }

  @Post('add-to-cart')
  async addToCart(
    @Body() body: ParcelCreateDto,
    @Res({ passthrough: true }) res: Response,
    @Req() req,
  ) {
    const skuExist = await this.skuService.checkExist(body.skuId);
    if (skuExist) {
      res.cookie(
        constant.CART_QUANTITY,
        (parseInt(req.cookies[constant.CART_QUANTITY] || '0', 10) || 0) + body.amount,
      );
      const recent_products = JSON.parse(
        req.cookies[constant.RECENT_PRODUCTS] || '[]',
      );
      const products = [
        ...new Map(
          (recent_products ? [...recent_products, body] : [body]).map(
            (item) => [item['skuId'], item],
          ),
        ).values(),
      ];
      res.cookie(constant.RECENT_PRODUCTS, JSON.stringify(products));
      res.status(HttpStatus.OK).send('success');
    } else {
      res.status(HttpStatus.BAD_REQUEST).send('product does not exist');
    }
  }
}
