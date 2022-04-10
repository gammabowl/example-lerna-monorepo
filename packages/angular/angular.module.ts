import { Module } from '@nestjs/common';
import { AngularService } from './angular.service';

@Module({
  providers: [AngularService],
  exports: [AngularService],
})
export class AngularModule {}
