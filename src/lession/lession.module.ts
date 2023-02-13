import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lession } from './lession.entity';
import { LessionResolver } from './lession.resolver';
import { LessionService } from './lession.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lession])],
  providers: [LessionResolver, LessionService],
})
export class LessionModule {}
