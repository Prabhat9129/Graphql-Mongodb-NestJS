import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Lession } from './lession.entity';

@Injectable()
export class LessionService {
  constructor(
    @InjectRepository(Lession) private lessionRepository: Repository<Lession>,
  ) {}

  async createLession(name, startDate, endDate): Promise<Lession> {
    const lession = this.lessionRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessionRepository.save(lession);
  }
}
