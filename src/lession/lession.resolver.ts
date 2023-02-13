import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessionService } from './lession.service';
import { LessionType } from './lession.type';

@Resolver((of) => LessionType)
export class LessionResolver {
  constructor(private lessionService: LessionService) {}

  @Query((returns) => LessionType)
  lession() {
    return {
      id: 'ddjdjko1lx',
      name: 'prabhat',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => LessionType)
  createLession(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessionService.createLession(name, startDate, endDate);
  }
}
