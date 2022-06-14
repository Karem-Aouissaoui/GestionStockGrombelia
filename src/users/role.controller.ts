import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateDateColumn } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleService } from './role.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RoleService) {}

  @Post()
  create(@Body() newRole: CreateRoleDto) {
    return this.rolesService.create(newRole);
  }

  @Get('all')
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.rolesService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() newRole: UpdateRoleDto) {
    return this.rolesService.update(+id, newRole);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
