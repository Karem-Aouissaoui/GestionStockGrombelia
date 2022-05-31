import { Test, TestingModule } from '@nestjs/testing';
import { ApprovisionnementsService } from './approvisionnements.service';

describe('ApprovisionnementsService', () => {
  let service: ApprovisionnementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApprovisionnementsService],
    }).compile();

    service = module.get<ApprovisionnementsService>(ApprovisionnementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
