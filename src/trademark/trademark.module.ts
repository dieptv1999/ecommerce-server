import { Module } from '@nestjs/common';
import { TrademarkController } from './trademark.controller';
import { TrademarkService } from './trademark.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrademarkRepository } from './trademark.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TrademarkRepository])],
  controllers: [TrademarkController],
  providers: [TrademarkService],
})
export class TrademarkModule {}
