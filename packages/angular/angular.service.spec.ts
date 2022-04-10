import { Test, TestingModule } from '@nestjs/testing';
import { AngularService } from './angular.service';

describe('AngularService', () => {
  let service: AngularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AngularService],
    }).compile();

    service = module.get<AngularService>(AngularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
