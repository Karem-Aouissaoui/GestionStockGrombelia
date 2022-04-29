import { Controller } from '@nestjs/common';
import { CommandesService } from './commandes.service';

@Controller('commandes')
export class CommandesController {
  constructor(private readonly commandesService: CommandesService) {}
}
