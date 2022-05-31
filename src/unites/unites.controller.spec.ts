import { Test, TestingModule } from '@nestjs/testing';
import { UnitesController } from './unites.controller';
import { UnitesService } from './unites.service';

describe('UnitesController', () => {
  let controller: UnitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitesController],
      providers: [UnitesService],
    }).compile();

    controller = module.get<UnitesController>(UnitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
