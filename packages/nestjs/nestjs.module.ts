import { Module } from '@nestjs/common';
import { NestjsService } from './nestjs.service';

@Module({
  providers: [NestjsService],
  exports: [NestjsService],
})
export class NestjsModule {}
