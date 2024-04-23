import { Module } from '@nestjs/common';
import { CurrentService } from './current.service';
import { CurrentController } from './current.controller';

@Module({
  controllers: [CurrentController],
  providers: [CurrentService],
})
export class CurrentModule {}
