import { Test, TestingModule } from '@nestjs/testing';
import { ApprovisionnementsController } from './approvisionnements.controller';
import { ApprovisionnementsService } from './approvisionnements.service';

describe('ApprovisionnementsController', () => {
  let controller: ApprovisionnementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprovisionnementsController],
      providers: [ApprovisionnementsService],
    }).compile();

    controller = module.get<ApprovisionnementsController>(ApprovisionnementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
